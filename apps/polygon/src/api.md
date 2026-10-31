<h1 id="massive-api">Massive API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The future of fintech.

Base URLs:

* <a href="https://api.polygon.io">https://api.polygon.io</a> - Polygon Platform API

* <a href="https://api.staging.polygon.io">https://api.staging.polygon.io</a> - Polygon Platform API (Staging)

# Authentication

* API Key (apiKey)
    - Parameter Name: **apiKey**, in: query.

<h1 id="massive-api-reference">reference</h1>

Reference API

## get_stocks_filings_10-K_vX_sections

<a id="opIdget_stocks_filings_10-K_vX_sections"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/filings/10-K/vX/sections?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/filings/10-K/vX/sections`

SEC document text sections providing raw text content from specific sections of SEC filings (10-K, 10-Q, etc.).

<h3 id="getstocksfilings10-kvxsections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cik|query|string|false|SEC Central Index Key (10 digits, zero-padded).|
|cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|cik.gt|query|string|false|Filter greater than the value.|
|cik.gte|query|string|false|Filter greater than or equal to the value.|
|cik.lt|query|string|false|Filter less than the value.|
|cik.lte|query|string|false|Filter less than or equal to the value.|
|ticker|query|string|false|Stock ticker symbol for the company.|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|section|query|string|false|Standardized section identifier from the filing (e.g. 'business', 'risk_factors', etc.).|
|section.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|filing_date|query|string|false|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD). Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|period_end|query|string|false|Period end date that the filing relates to (formatted as YYYY-MM-DD). Value must be formatted 'yyyy-mm-dd'.|
|period_end.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|period_end.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|period_end.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|period_end.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '10' if not specified. The maximum allowed limit is '100'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'period_end' if not specified. The sort order defaults to 'desc' if not specified.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|section|business|
|section|risk_factors|
|section.any_of|business|
|section.any_of|risk_factors|

> Example responses

> 200 Response

```json
{
  "count": 2,
  "next_url": "https://api.massive.com/stocks/filings/10-K/vX/sections?cursor=eyJsaW1pd...",
  "request_id": "a3f8b2c1d4e5f6g7",
  "results": [
    {
      "cik": "0000320193",
      "filing_date": "2023-11-03",
      "filing_url": "https://www.sec.gov/Archives/edgar/data/320193/0000320193-23-000106.txt",
      "period_end": "2023-09-30",
      "section": "risk_factors",
      "text": "Item 1A. Risk Factors\n\nInvesting in our stock involves risk. In addition to the other information in this Annual Report on Form 10-K, the following risk factors should be carefully considered...",
      "ticker": "AAPL"
    },
    {
      "cik": "0000789019",
      "filing_date": "2023-07-27",
      "filing_url": "https://www.sec.gov/Archives/edgar/data/789019/0000950170-23-035122.txt",
      "period_end": "2023-06-30",
      "section": "risk_factors",
      "text": "Item 1A. RISK FACTORS\n\nOur operations and financial results are subject to various risks and uncertainties...",
      "ticker": "MSFT"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksfilings10-kvxsections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksfilings10-kvxsections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» cik|string|false|none|SEC Central Index Key (10 digits, zero-padded).|
|» filing_date|string(date)|false|none|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD).|
|» filing_url|string|false|none|SEC URL source for the full filing.|
|» period_end|string(date)|false|none|Period end date that the filing relates to (formatted as YYYY-MM-DD).|
|» section|string|false|none|Standardized section identifier from the filing (e.g. 'business', 'risk_factors', etc.).|
|» text|string|false|none|Full raw text content of the section, including headers and formatting.|
|» ticker|string|false|none|Stock ticker symbol for the company.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_filings_10-K_vX_0_sections

<a id="opIdget_stocks_filings_10-K_vX_0_sections"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/filings/10-K/vX_0/sections?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/filings/10-K/vX_0/sections`

SEC document text sections providing raw text content from specific sections of SEC filings (10-K, 10-Q, etc.).

<h3 id="getstocksfilings10-kvx0sections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cik|query|string|false|SEC Central Index Key (10 digits, zero-padded).|
|cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|cik.gt|query|string|false|Filter greater than the value.|
|cik.gte|query|string|false|Filter greater than or equal to the value.|
|cik.lt|query|string|false|Filter less than the value.|
|cik.lte|query|string|false|Filter less than or equal to the value.|
|ticker|query|string|false|Stock ticker symbol for the company.|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|section|query|string|false|Standardized section identifier from the filing (e.g. 'business', 'risk_factors', etc.).|
|section.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|filing_date|query|string|false|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD). Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|period_end|query|string|false|Period end date that the filing relates to (formatted as YYYY-MM-DD). Value must be formatted 'yyyy-mm-dd'.|
|period_end.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|period_end.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|period_end.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|period_end.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '10' if not specified. The maximum allowed limit is '100'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'period_end' if not specified. The sort order defaults to 'desc' if not specified.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|section|business|
|section|risk_factors|
|section.any_of|business|
|section.any_of|risk_factors|

> Example responses

> 200 Response

```json
{
  "count": 2,
  "next_url": "https://api.massive.com/stocks/filings/10-K/vX/sections?cursor=eyJsaW1pd...",
  "request_id": "a3f8b2c1d4e5f6g7",
  "results": [
    {
      "cik": "0000320193",
      "filing_date": "2023-11-03",
      "filing_url": "https://www.sec.gov/Archives/edgar/data/320193/0000320193-23-000106.txt",
      "period_end": "2023-09-30",
      "section": "risk_factors",
      "text": "Item 1A. Risk Factors\n\nInvesting in our stock involves risk. In addition to the other information in this Annual Report on Form 10-K, the following risk factors should be carefully considered...",
      "ticker": "AAPL"
    },
    {
      "cik": "0000789019",
      "filing_date": "2023-07-27",
      "filing_url": "https://www.sec.gov/Archives/edgar/data/789019/0000950170-23-035122.txt",
      "period_end": "2023-06-30",
      "section": "risk_factors",
      "text": "Item 1A. RISK FACTORS\n\nOur operations and financial results are subject to various risks and uncertainties...",
      "ticker": "MSFT"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksfilings10-kvx0sections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksfilings10-kvx0sections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» cik|string|false|none|SEC Central Index Key (10 digits, zero-padded).|
|» filing_date|string(date)|false|none|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD).|
|» filing_url|string|false|none|SEC URL source for the full filing.|
|» period_end|string(date)|false|none|Period end date that the filing relates to (formatted as YYYY-MM-DD).|
|» section|string|false|none|Standardized section identifier from the filing (e.g. 'business', 'risk_factors', etc.).|
|» text|string|false|none|Full raw text content of the section, including headers and formatting.|
|» ticker|string|false|none|Stock ticker symbol for the company.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_filings_8-K_vX_disclosures

<a id="opIdget_stocks_filings_8-K_vX_disclosures"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/filings/8-K/vX/disclosures?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/filings/8-K/vX/disclosures`

SEC 8-K filing disclosure categorization. A single 8-K filing can produce multiple rows when it covers multiple disclosure types — each row represents one tagged disclosure within the filing, classified into primary, secondary, and tertiary categories with a supporting text excerpt. The full classification list is available at /stocks/taxonomies/vX/disclosures.

<h3 id="getstocksfilings8-kvxdisclosures-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cik|query|string|false|SEC Central Index Key of the filer (10 digits, zero-padded).|
|cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|tickers|query|string|false|Filter for arrays that contain the value.|
|tickers.all_of|query|string|false|Filter for arrays that contain all of the values. Multiple values can be specified by using a comma separated list.|
|tickers.any_of|query|string|false|Filter for arrays that contain any of the values. Multiple values can be specified by using a comma separated list.|
|filing_date|query|string|false|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD).|
|filing_date.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|filing_date.gt|query|string|false|Filter greater than the value.|
|filing_date.gte|query|string|false|Filter greater than or equal to the value.|
|filing_date.lt|query|string|false|Filter less than the value.|
|filing_date.lte|query|string|false|Filter less than or equal to the value.|
|tertiary_category|query|string|false|Most specific disclosure category (e.g., 'quarterly_results'). Filtering on this column must use an exact match. See the full taxonomy at /stocks/taxonomies/vX/disclosures.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '1000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'filing_date' if not specified. The sort order defaults to 'desc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 2,
  "next_url": "https://api.massive.com/stocks/filings/8-K/vX/disclosures?cursor=eyJsaW1pd...",
  "request_id": "b4e7c2a1f3d8e9g0",
  "results": [
    {
      "accession_number": "0000320193-25-000010",
      "cik": "0000320193",
      "filing_date": "2025-01-14",
      "filing_url": "https://www.sec.gov/Archives/edgar/data/320193/0000320193-25-000010.txt",
      "primary_category": "financial_results",
      "secondary_category": "earnings_announcement",
      "supporting_text": "On January 14, 2025, Apple Inc. announced financial results for the fiscal quarter ended December 28, 2024.",
      "tertiary_category": "quarterly_results",
      "tickers": [
        "AAPL"
      ]
    },
    {
      "accession_number": "0000004962-25-000002",
      "cik": "0000004962",
      "filing_date": "2025-01-15",
      "filing_url": "https://www.sec.gov/Archives/edgar/data/4962/0000004962-25-000002.txt",
      "primary_category": "regulatory_compliance",
      "secondary_category": "regulation_fd",
      "supporting_text": "American Express Company is hereby furnishing below delinquency and write-off statistics for its U.S. Consumer and Small Business portfolios.",
      "tertiary_category": "financial_data_disclosure",
      "tickers": [
        "AXP"
      ]
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksfilings8-kvxdisclosures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksfilings8-kvxdisclosures-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» accession_number|string|false|none|Unique SEC accession number for the filing (e.g., '0000320193-25-000010').|
|» cik|string|false|none|SEC Central Index Key of the filer (10 digits, zero-padded).|
|» filing_date|string|false|none|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD).|
|» filing_url|string|false|none|Direct URL to the full submission text file for the filing on SEC EDGAR.|
|» primary_category|string|false|none|Top-level disclosure category (e.g., 'financial_results'). See the full taxonomy at /stocks/taxonomies/vX/disclosures.|
|» secondary_category|string|false|none|Mid-level disclosure category (e.g., 'earnings_announcement'). See the full taxonomy at /stocks/taxonomies/vX/disclosures.|
|» supporting_text|string|false|none|A verbatim excerpt from the filing text supporting the assigned categories.|
|» tertiary_category|string|false|none|Most specific disclosure category (e.g., 'quarterly_results'). Filtering on this column must use an exact match. See the full taxonomy at /stocks/taxonomies/vX/disclosures.|
|» tickers|[string]|false|none|A list of ticker symbols for the filing company. Multiple symbols may indicate different share classes; empty if no ticker is currently mapped to the filer.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_filings_8-K_vX_text

<a id="opIdget_stocks_filings_8-K_vX_text"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/filings/8-K/vX/text?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/filings/8-K/vX/text`

SEC 8-K filings text providing parsed content from current report filings. 8-K forms report material events such as earnings, acquisitions, executive changes, and other significant corporate events.

<h3 id="getstocksfilings8-kvxtext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cik|query|string|false|SEC Central Index Key (10 digits, zero-padded).|
|cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|cik.gt|query|string|false|Filter greater than the value.|
|cik.gte|query|string|false|Filter greater than or equal to the value.|
|cik.lt|query|string|false|Filter less than the value.|
|cik.lte|query|string|false|Filter less than or equal to the value.|
|ticker|query|string|false|Stock ticker symbol for the company.|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|form_type|query|string|false|SEC form type (e.g., '8-K', '8-K/A' for amendments).|
|form_type.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|form_type.gt|query|string|false|Filter greater than the value.|
|form_type.gte|query|string|false|Filter greater than or equal to the value.|
|form_type.lt|query|string|false|Filter less than the value.|
|form_type.lte|query|string|false|Filter less than or equal to the value.|
|filing_date|query|string|false|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD). Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '10' if not specified. The maximum allowed limit is '100'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'filing_date' if not specified. The sort order defaults to 'desc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 2,
  "next_url": "https://api.massive.com/stocks/filings/8-K/vX/text?cursor=eyJsaW1pd...",
  "request_id": "a3f8b2c1d4e5f6g7",
  "results": [
    {
      "accession_number": "0000004962-25-000002",
      "cik": "0000004962",
      "filing_date": "2025-01-15",
      "filing_url": "https://www.sec.gov/Archives/edgar/data/4962/0000004962-25-000002.txt",
      "form_type": "8-K",
      "items_text": "Item 7.01\tRegulation FD Disclosure\n\nAmerican Express Company is hereby furnishing below delinquency and write-off statistics...",
      "ticker": "AXP"
    },
    {
      "accession_number": "0000320193-25-000010",
      "cik": "0000320193",
      "filing_date": "2025-01-14",
      "filing_url": "https://www.sec.gov/Archives/edgar/data/320193/0000320193-25-000010.txt",
      "form_type": "8-K",
      "items_text": "Item 2.02\tResults of Operations and Financial Condition\n\nOn January 14, 2025, Apple Inc. announced financial results...",
      "ticker": "AAPL"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksfilings8-kvxtext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksfilings8-kvxtext-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» accession_number|string|false|none|SEC accession number uniquely identifying the filing (e.g., '0000004962-25-000002').|
|» cik|string|false|none|SEC Central Index Key (10 digits, zero-padded).|
|» filing_date|string(date)|false|none|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD).|
|» filing_url|string|false|none|SEC URL source for the full filing.|
|» form_type|string|false|none|SEC form type (e.g., '8-K', '8-K/A' for amendments).|
|» items_text|string|false|none|Parsed text content from the 8-K filing, including item numbers and descriptions.|
|» ticker|string|false|none|Stock ticker symbol for the company.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_filings_vX_13-F

<a id="opIdget_stocks_filings_vX_13-F"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/filings/vX/13-F?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/filings/vX/13-F`

SEC Form 13F filings data showing institutional investment manager holdings. Form 13F is required to be filed quarterly by institutional investment managers with at least $100 million in qualifying assets under management.

<h3 id="getstocksfilingsvx13-f-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filer_cik|query|string|false|SEC Central Index Key (10 digits, zero-padded) of the filing entity.|
|filer_cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|filing_date|query|string|false|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD). Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '1000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'filing_date' if not specified. The sort order defaults to 'desc' if not specified.|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.massive.com/stocks/filings/vX/13-F?cursor=eyJsaW1pd...",
  "request_id": "a3f8b2c1d4e5f6g7",
  "results": [
    {
      "accession_number": "0000950123-24-011775",
      "cusip": "023135106",
      "file_number": "028-04545",
      "filer_cik": "0001067983",
      "filing_date": "2024-11-14",
      "filing_url": "https://www.sec.gov/Archives/edgar/data/1067983/0000950123-24-011775.txt",
      "film_number": "241461756",
      "form_type": "13F-HR",
      "investment_discretion": "DFND",
      "issuer_name": "AMAZON COM INC",
      "market_value": 1439212920,
      "other_managers": [
        "Buffett Warren E"
      ],
      "period": "2024-09-30",
      "put_call": null,
      "shares_or_principal_amount": 7724000,
      "shares_or_principal_type": "SH",
      "title_of_class": "COM",
      "voting_authority_none": 0,
      "voting_authority_shared": 0,
      "voting_authority_sole": 7724000
    },
    {
      "accession_number": "0000950123-24-011775",
      "cusip": "025816109",
      "file_number": "028-04545",
      "filer_cik": "0001067983",
      "filing_date": "2024-11-14",
      "filing_url": "https://www.sec.gov/Archives/edgar/data/1067983/0000950123-24-011775.txt",
      "film_number": "241461756",
      "form_type": "13F-HR",
      "investment_discretion": "DFND",
      "issuer_name": "AMERICAN EXPRESS CO",
      "market_value": 311864270,
      "other_managers": [
        "Buffett Warren E"
      ],
      "period": "2024-09-30",
      "put_call": null,
      "shares_or_principal_amount": 1149942,
      "shares_or_principal_type": "SH",
      "title_of_class": "COM",
      "voting_authority_none": 0,
      "voting_authority_shared": 0,
      "voting_authority_sole": 1149942
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksfilingsvx13-f-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksfilingsvx13-f-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» accession_number|string|false|none|Unique SEC accession number for the filing (e.g., '0000950123-24-011775').|
|» cusip|string|false|none|The CUSIP identifier for the held security.|
|» file_number|string|false|none|The 13F-specific file number assigned to the filer.|
|» filer_cik|string|false|none|SEC Central Index Key (10 digits, zero-padded) of the filing entity.|
|» filing_date|string(date)|false|none|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD).|
|» filing_url|string|false|none|Direct URL to the filing on the SEC EDGAR website.|
|» film_number|string|false|none|SEC EDGAR film number for the filing.|
|» form_type|string|false|none|SEC form type (e.g., '13F-HR' for holdings report, '13F-HR/A' for amended report).|
|» investment_discretion|string|false|none|Type of investment discretion. Possible values: SOLE, SHARED, DFND (defined).|
|» issuer_name|string|false|none|Name of the company whose securities are held.|
|» market_value|integer(int64)|false|none|Market value of the holding in USD.|
|» other_managers|[string]|false|none|List of names of other manager(s) sharing investment discretion over the reported holdings, if applicable.|
|» period|string(date)|false|none|The quarter end date that the filing covers (formatted as YYYY-MM-DD).|
|» put_call|string|false|none|Indicates if the holding is a put or call option. Possible values: PUT, CALL, or empty for common stock.|
|» shares_or_principal_amount|integer(int64)|false|none|Number of shares or principal amount held.|
|» shares_or_principal_type|string|false|none|Type of amount reported. Possible values: SH (shares), PRN (principal amount).|
|» title_of_class|string|false|none|Description of the class of securities held (e.g., 'COM', 'CL A').|
|» voting_authority_none|integer(int64)|false|none|Number of shares with no voting authority.|
|» voting_authority_shared|integer(int64)|false|none|Number of shares with shared voting authority.|
|» voting_authority_sole|integer(int64)|false|none|Number of shares with sole voting authority.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_filings_vX_form-3

<a id="opIdget_stocks_filings_vX_form-3"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/filings/vX/form-3?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/filings/vX/form-3`

SEC Form 3 filings reporting initial statements of beneficial ownership of securities. Filed by corporate insiders (directors, officers, and 10%+ shareholders) when they first acquire a position.

<h3 id="getstocksfilingsvxform-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issuer_cik|query|string|false|SEC Central Index Key of the issuer company (10 digits, zero-padded).|
|issuer_cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|owner_cik|query|string|false|SEC Central Index Key of the reporting owner (10 digits, zero-padded).|
|owner_cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|tickers|query|string|false|Filter for arrays that contain the value.|
|tickers.all_of|query|string|false|Filter for arrays that contain all of the values. Multiple values can be specified by using a comma separated list.|
|tickers.any_of|query|string|false|Filter for arrays that contain any of the values. Multiple values can be specified by using a comma separated list.|
|form_type|query|string|false|SEC form type ('3' for initial filing, '3/A' for amendments).|
|filing_date|query|string|false|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD). Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '10000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'filing_date' if not specified. The sort order defaults to 'desc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "next_url": "https://api.massive.com/stocks/filings/vX/form-3?cursor=eyJsaW1pd...",
  "request_id": "047c7035a86042b1925118e5f68d81b0",
  "results": [
    {
      "accession_number": "0001628280-26-022046",
      "aff_10b5_one": null,
      "date_of_original_submission": null,
      "direct_or_indirect": "D",
      "exercise_date": null,
      "exercise_price": null,
      "filing_date": "2026-03-30",
      "filing_url": "https://www.sec.gov/Archives/edgar/data/1903508/0001628280-26-022046.txt",
      "footnotes": [
        {
          "description": "The options granted on May 17, 2022 vested 100% on the third anniversary of the grant date.",
          "id": "F1"
        },
        {
          "description": "The exercise price of the options granted on May 17, 2022 was GPB 8.85, or approximately $11.80 based on a GBP to USD exchange rate as of March 27, 2026 of 1.3336.",
          "id": "F2"
        }
      ],
      "form_type": "3",
      "is_director": false,
      "is_officer": true,
      "is_other": false,
      "is_ten_percent_owner": false,
      "issuer_cik": "0001903508",
      "issuer_name": "Public Policy Holding Company, Inc.",
      "nature_of_ownership": null,
      "not_subject_to_section_16": null,
      "officer_title": "Chief Administrative Officer",
      "owner_cik": "0002125791",
      "owner_name": "Mazzanti Matthew Ross",
      "period_of_report": "2026-03-20",
      "remarks": null,
      "security_title": "Options",
      "security_type": "derivative",
      "shares_owned": null,
      "tickers": [
        "PPHC"
      ],
      "underlying_security_shares": 9000,
      "underlying_security_title": "Common Stock, $0.001 par value"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksfilingsvxform-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksfilingsvxform-3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» accession_number|string|false|none|Unique SEC accession number for the filing (e.g., '0001209191-25-012345').|
|» aff_10b5_one|boolean|false|none|Whether the transaction was made pursuant to a Rule 10b5-1 trading plan.|
|» date_of_original_submission|string(date)|false|none|Date of the original filing submission for amendment filings (3/A). Null for initial filings (formatted as YYYY-MM-DD).|
|» direct_or_indirect|string|false|none|Whether ownership is direct ('D') or indirect ('I').|
|» exercise_date|string(date)|false|none|Date exercisable for derivative securities (formatted as YYYY-MM-DD).|
|» exercise_price|number(double)|false|none|Exercise or conversion price of derivative securities in USD.|
|» filing_date|string(date)|false|none|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD).|
|» filing_url|string|false|none|Direct URL to the filing on the SEC EDGAR website.|
|» footnotes|[object]|false|none|List of footnotes from the filing that are relevant to this row, each with an id and description.|
|» » description|string|false|none|none|
|» » id|string|false|none|none|
|» form_type|string|false|none|SEC form type ('3' for initial filing, '3/A' for amendments).|
|» is_director|boolean|false|none|Whether the reporting owner is a director of the issuer.|
|» is_officer|boolean|false|none|Whether the reporting owner is an officer of the issuer.|
|» is_other|boolean|false|none|Whether the reporting owner has another relationship with the issuer.|
|» is_ten_percent_owner|boolean|false|none|Whether the reporting owner holds 10% or more of a class of equity securities.|
|» issuer_cik|string|false|none|SEC Central Index Key of the issuer company (10 digits, zero-padded).|
|» issuer_name|string|false|none|Name of the issuer company as reported in the filing.|
|» nature_of_ownership|string|false|none|Nature of indirect ownership (e.g., 'By Trust', 'By Spouse').|
|» not_subject_to_section_16|boolean|false|none|Whether the reporting owner is not subject to Section 16 of the Securities Exchange Act.|
|» officer_title|string|false|none|Title of the officer, if the reporting owner is an officer.|
|» owner_cik|string|false|none|SEC Central Index Key of the reporting owner (10 digits, zero-padded).|
|» owner_name|string|false|none|Name of the reporting owner (individual or entity).|
|» period_of_report|string(date)|false|none|Date of the event triggering the filing (formatted as YYYY-MM-DD).|
|» remarks|string|false|none|Additional remarks included in the filing.|
|» security_title|string|false|none|Title or description of the security (e.g., 'Common Stock', 'Stock Option').|
|» security_type|string|false|none|Type of security ('non-derivative' or 'derivative').|
|» shares_owned|number(double)|false|none|Number of shares beneficially owned.|
|» tickers|[string]|false|none|A list of ticker symbols for the issuer company. Multiple symbols may indicate different share classes.|
|» underlying_security_shares|number(double)|false|none|Number of underlying shares for derivative holdings.|
|» underlying_security_title|string|false|none|Title of the underlying security for derivative holdings.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_filings_vX_form-4

<a id="opIdget_stocks_filings_vX_form-4"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/filings/vX/form-4?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/filings/vX/form-4`

SEC Form 4 filings reporting changes in beneficial ownership of securities. Filed by corporate insiders (directors, officers, and 10%+ shareholders) within two business days of a transaction.

<h3 id="getstocksfilingsvxform-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issuer_cik|query|string|false|SEC Central Index Key of the issuer company (10 digits, zero-padded).|
|issuer_cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|owner_cik|query|string|false|SEC Central Index Key of the reporting owner (10 digits, zero-padded).|
|owner_cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|tickers|query|string|false|Filter for arrays that contain the value.|
|tickers.all_of|query|string|false|Filter for arrays that contain all of the values. Multiple values can be specified by using a comma separated list.|
|tickers.any_of|query|string|false|Filter for arrays that contain any of the values. Multiple values can be specified by using a comma separated list.|
|form_type|query|string|false|SEC form type ('4' for standard filing, '4/A' for amendments).|
|filing_date|query|string|false|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD). Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|transaction_code|query|string|false|SEC transaction code indicating the type of transaction (e.g., 'P' for purchase, 'S' for sale, 'A' for grant/award, 'M' for exercise/conversion).|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '10000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'filing_date' if not specified. The sort order defaults to 'desc' if not specified.|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.massive.com/stocks/filings/vX/form-4?cursor=eyJsaW1pd...",
  "request_id": "047c7035a86042b1925118e5f68d81b0",
  "results": [
    {
      "accession_number": "0002123147-26-000002",
      "aff_10b5_one": false,
      "date_of_original_submission": null,
      "deemed_execution_date": "2026-03-27",
      "direct_or_indirect": "D",
      "equity_swap_involved": false,
      "exercise_date": "2026-03-27",
      "exercise_price": 88.167,
      "expiration_date": "2026-03-27",
      "filing_date": "2026-03-30",
      "filing_url": "https://www.sec.gov/Archives/edgar/data/1469395/0002123147-26-000002.txt",
      "footnotes": [
        {
          "description": "These shares were acquired at a price of 4955 argentine pesos per share. For reporting purposes, the exercise price has been converted to US dollars based on the exchange rate reported by Banco de la Nacion Argentina for the date of the acquisition, which was 1405 argentine pesos per US dollar. Then multiplied by 25, the Par value or rate of common shares to one ADR.",
          "id": "F1"
        }
      ],
      "form_type": "4",
      "is_director": false,
      "is_officer": true,
      "is_other": false,
      "is_ten_percent_owner": false,
      "issuer_cik": "0001469395",
      "issuer_name": "Pampa Energy Inc.",
      "not_subject_to_section_16": false,
      "officer_title": "Chief Financial Officer",
      "owner_cik": "0002123147",
      "owner_name": "Zuberbuhler Adolfo Fernando",
      "period_of_report": "2026-03-27",
      "record_type": "transaction",
      "security_title": "Common Stock, $25 Par Value",
      "security_type": "derivative",
      "shares_owned_following_transaction": 2759,
      "tickers": [
        "PAM"
      ],
      "transaction_acquired_disposed": "A",
      "transaction_code": "A",
      "transaction_date": "2026-03-27",
      "transaction_price_per_share": 88.167,
      "transaction_shares": 12923,
      "transaction_timeliness": "O",
      "transaction_value": 1139382.141,
      "underlying_security_shares": 12923,
      "underlying_security_title": "PAMP"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksfilingsvxform-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksfilingsvxform-4-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» accession_number|string|false|none|Unique SEC accession number for the filing (e.g., '0001209191-25-012345').|
|» aff_10b5_one|boolean|false|none|Whether the transaction was made pursuant to a Rule 10b5-1 trading plan.|
|» date_of_original_submission|string(date)|false|none|Date of the original filing submission for amendment filings (4/A). Null for standard filings (formatted as YYYY-MM-DD).|
|» deemed_execution_date|string(date)|false|none|Deemed execution date if different from transaction date (formatted as YYYY-MM-DD).|
|» direct_or_indirect|string|false|none|Whether ownership is direct ('D') or indirect ('I').|
|» equity_swap_involved|boolean|false|none|Whether an equity swap was involved in the transaction.|
|» exercise_date|string(date)|false|none|Date exercisable for derivative securities (formatted as YYYY-MM-DD).|
|» exercise_price|number(double)|false|none|Exercise or conversion price of derivative securities in USD.|
|» expiration_date|string(date)|false|none|Expiration date for derivative securities (formatted as YYYY-MM-DD).|
|» filing_date|string(date)|false|none|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD).|
|» filing_url|string|false|none|Direct URL to the filing on the SEC EDGAR website.|
|» footnotes|[object]|false|none|List of footnotes from the filing that are relevant to this row, each with an id and description.|
|» » description|string|false|none|none|
|» » id|string|false|none|none|
|» form_type|string|false|none|SEC form type ('4' for standard filing, '4/A' for amendments).|
|» is_director|boolean|false|none|Whether the reporting owner is a director of the issuer.|
|» is_officer|boolean|false|none|Whether the reporting owner is an officer of the issuer.|
|» is_other|boolean|false|none|Whether the reporting owner has another relationship with the issuer.|
|» is_ten_percent_owner|boolean|false|none|Whether the reporting owner holds 10% or more of a class of equity securities.|
|» issuer_cik|string|false|none|SEC Central Index Key of the issuer company (10 digits, zero-padded).|
|» issuer_name|string|false|none|Name of the issuer company as reported in the filing.|
|» nature_of_ownership|string|false|none|Nature of indirect ownership (e.g., 'By Trust', 'By Spouse').|
|» not_subject_to_section_16|boolean|false|none|Whether the reporting owner is not subject to Section 16 of the Securities Exchange Act.|
|» officer_title|string|false|none|Title of the officer, if the reporting owner is an officer.|
|» owner_cik|string|false|none|SEC Central Index Key of the reporting owner (10 digits, zero-padded).|
|» owner_name|string|false|none|Name of the reporting owner (individual or entity).|
|» period_of_report|string(date)|false|none|Date of the event triggering the filing (formatted as YYYY-MM-DD).|
|» record_type|string|false|none|Type of record in the filing (e.g., 'transaction', 'holding').|
|» remarks|string|false|none|Additional remarks included in the filing.|
|» security_title|string|false|none|Title or description of the security (e.g., 'Common Stock', 'Stock Option').|
|» security_type|string|false|none|Type of security ('non-derivative' or 'derivative').|
|» shares_owned_following_transaction|number(double)|false|none|Total shares beneficially owned after the transaction.|
|» tickers|[string]|false|none|A list of ticker symbols for the issuer company. Multiple symbols may indicate different share classes.|
|» transaction_acquired_disposed|string|false|none|Whether shares were acquired ('A') or disposed of ('D').|
|» transaction_code|string|false|none|SEC transaction code indicating the type of transaction (e.g., 'P' for purchase, 'S' for sale, 'A' for grant/award, 'M' for exercise/conversion).|
|» transaction_date|string(date)|false|none|Date of the transaction (formatted as YYYY-MM-DD).|
|» transaction_price_per_share|number(double)|false|none|Price per share of the transaction in USD.|
|» transaction_shares|number(double)|false|none|Number of shares involved in the transaction.|
|» transaction_timeliness|string|false|none|Timeliness of the filing: 'O' (on time) or 'L' (late).|
|» transaction_value|number(double)|false|none|Total value of the transaction in USD (transaction_shares x transaction_price_per_share). Null when shares or price is not reported.|
|» underlying_security_shares|number(double)|false|none|Number of underlying shares for derivative transactions.|
|» underlying_security_title|string|false|none|Title of the underlying security for derivative transactions.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_filings_vX_form-5

<a id="opIdget_stocks_filings_vX_form-5"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/filings/vX/form-5?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/filings/vX/form-5`

SEC Form 5 filings: annual statements of changes in beneficial ownership of securities. Filed by corporate insiders (directors, officers, and 10%+ shareholders) within 45 days of the issuer's fiscal year end to report transactions that were exempt from or deferred from Form 4, and any Form 4 transactions that were not reported on time. A filing with several reporting owners has one row per owner for each transaction or holding.

<h3 id="getstocksfilingsvxform-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issuer_cik|query|string|false|SEC Central Index Key of the issuer company (10 digits, zero-padded).|
|issuer_cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|owner_cik|query|string|false|SEC Central Index Key of the reporting owner (10 digits, zero-padded).|
|owner_cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|tickers|query|string|false|Filter for arrays that contain the value.|
|tickers.all_of|query|string|false|Filter for arrays that contain all of the values. Multiple values can be specified by using a comma separated list.|
|tickers.any_of|query|string|false|Filter for arrays that contain any of the values. Multiple values can be specified by using a comma separated list.|
|form_type|query|string|false|SEC form type ('5' for standard filing, '5/A' for amendments).|
|filing_date|query|string|false|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD). Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|transaction_code|query|string|false|SEC transaction code indicating the type of transaction (e.g., 'G' for gift, 'J' for other acquisition or disposition, 'A' for grant/award, 'S' for sale). Null for holdings.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '10000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'filing_date' if not specified. The sort order defaults to 'desc' if not specified.|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.massive.com/stocks/filings/vX/form-5?cursor=eyJsaW1pd...",
  "request_id": "047c7035a86042b1925118e5f68d81b0",
  "results": [
    {
      "accession_number": "0001045810-25-000070",
      "aff_10b5_one": false,
      "date_of_original_submission": "2025-03-12",
      "deemed_execution_date": null,
      "direct_or_indirect": "I",
      "equity_swap_involved": false,
      "exercise_date": null,
      "exercise_price": null,
      "expiration_date": null,
      "filing_date": "2025-03-21",
      "filing_url": "https://www.sec.gov/Archives/edgar/data/1045810/0001045810-25-000070.txt",
      "footnotes": [
        {
          "description": "Adjusted to reflect a ten-for-one forward split of the Issuer's common stock effective after market close on June 7, 2024.",
          "id": "F1"
        }
      ],
      "form3_holdings_reported": false,
      "form4_transactions_reported": true,
      "form_type": "5/A",
      "is_director": true,
      "is_officer": false,
      "is_other": false,
      "is_ten_percent_owner": false,
      "issuer_cik": "0001045810",
      "issuer_name": "NVIDIA CORP",
      "nature_of_ownership": "The Welch-Drell 2009 Revocable Trust",
      "not_subject_to_section_16": false,
      "officer_title": null,
      "owner_cik": "0001636665",
      "owner_name": "Drell Persis",
      "period_of_report": "2025-01-26",
      "record_type": "transaction",
      "remarks": "This amendment is being filed solely to add footnote 4 to reflect that the sales price of the June 14, 2024 transaction represents the weighted average sales price per share. This amended report does not report any new transactions or otherwise modify the transaction details that were previously reported.",
      "security_title": "Common Stock",
      "security_type": "non_derivative",
      "shares_owned_following_transaction": 212740,
      "tickers": [
        "NVDA"
      ],
      "transaction_acquired_disposed": "D",
      "transaction_code": "S",
      "transaction_date": "2023-12-13",
      "transaction_form_type": "4",
      "transaction_price_per_share": 48.2582,
      "transaction_shares": 65000,
      "transaction_timeliness": "L",
      "transaction_value": 3136783,
      "underlying_security_shares": null,
      "underlying_security_title": null
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksfilingsvxform-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksfilingsvxform-5-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» accession_number|string|false|none|Unique SEC accession number for the filing (e.g., '0001209191-25-012345').|
|» aff_10b5_one|boolean|false|none|Whether the filing indicates a transaction made pursuant to a Rule 10b5-1 trading plan. Filing-level; null on filings before the checkbox was introduced (2023).|
|» date_of_original_submission|string(date)|false|none|Date of the original filing submission for amendment filings (5/A). Null for standard filings (formatted as YYYY-MM-DD).|
|» deemed_execution_date|string(date)|false|none|Deemed execution date if different from transaction date (formatted as YYYY-MM-DD).|
|» direct_or_indirect|string|false|none|Whether ownership is direct ('D') or indirect ('I').|
|» equity_swap_involved|boolean|false|none|Whether an equity swap was involved in the transaction.|
|» exercise_date|string(date)|false|none|Date exercisable for derivative securities (formatted as YYYY-MM-DD).|
|» exercise_price|number(double)|false|none|Exercise or conversion price of derivative securities in USD.|
|» expiration_date|string(date)|false|none|Expiration date for derivative securities (formatted as YYYY-MM-DD).|
|» filing_date|string(date)|false|none|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD).|
|» filing_url|string|false|none|Direct URL to the filing on the SEC EDGAR website.|
|» footnotes|[object]|false|none|List of footnotes from the filing that are relevant to this row, each with an id and description.|
|» » description|string|false|none|none|
|» » id|string|false|none|none|
|» form3_holdings_reported|boolean|false|none|Whether the filing reports holdings that should have been reported on a Form 3. Filing-level, repeated on every row of the filing. Null if not stated.|
|» form4_transactions_reported|boolean|false|none|Whether the filing reports transactions that should have been reported on a Form 4. Filing-level, repeated on every row of the filing. Null if not stated.|
|» form_type|string|false|none|SEC form type ('5' for standard filing, '5/A' for amendments).|
|» is_director|boolean|false|none|Whether the reporting owner is a director of the issuer.|
|» is_officer|boolean|false|none|Whether the reporting owner is an officer of the issuer.|
|» is_other|boolean|false|none|Whether the reporting owner has another relationship with the issuer.|
|» is_ten_percent_owner|boolean|false|none|Whether the reporting owner holds 10% or more of a class of equity securities.|
|» issuer_cik|string|false|none|SEC Central Index Key of the issuer company (10 digits, zero-padded).|
|» issuer_name|string|false|none|Name of the issuer company as reported in the filing.|
|» nature_of_ownership|string|false|none|Nature of indirect ownership (e.g., 'By Trust', 'By Spouse').|
|» not_subject_to_section_16|boolean|false|none|Whether the reporting owner is no longer subject to Section 16 of the Securities Exchange Act.|
|» officer_title|string|false|none|Title of the officer, if the reporting owner is an officer.|
|» owner_cik|string|false|none|SEC Central Index Key of the reporting owner (10 digits, zero-padded).|
|» owner_name|string|false|none|Name of the reporting owner (individual or entity).|
|» period_of_report|string(date)|false|none|End of the fiscal year the filing covers (formatted as YYYY-MM-DD).|
|» record_type|string|false|none|Type of record in the filing ('transaction' or 'holding').|
|» remarks|string|false|none|Additional remarks included in the filing.|
|» security_title|string|false|none|Title or description of the security (e.g., 'Common Stock', 'Stock Option').|
|» security_type|string|false|none|Type of security ('non_derivative' or 'derivative').|
|» shares_owned_following_transaction|number(double)|false|none|Total shares beneficially owned after the transaction, or currently held for holdings.|
|» tickers|[string]|false|none|A list of ticker symbols for the issuer company. Multiple symbols may indicate different share classes.|
|» transaction_acquired_disposed|string|false|none|Whether shares were acquired ('A') or disposed of ('D').|
|» transaction_code|string|false|none|SEC transaction code indicating the type of transaction (e.g., 'G' for gift, 'J' for other acquisition or disposition, 'A' for grant/award, 'S' for sale). Null for holdings.|
|» transaction_date|string(date)|false|none|Date of the transaction, formatted as YYYY-MM-DD. Null for holdings.|
|» transaction_form_type|string|false|none|Form the transaction belongs to: '5' for a Form 5 transaction, or '4' for a Form 4 transaction reported late on this Form 5. Null for holdings.|
|» transaction_price_per_share|number(double)|false|none|Price per share of the transaction in USD.|
|» transaction_shares|number(double)|false|none|Number of shares involved in the transaction.|
|» transaction_timeliness|string|false|none|Timeliness of the transaction: 'E' (early), 'L' (late), or 'O' (on time, or not stated). Always 'O' for holdings.|
|» transaction_value|number(double)|false|none|Total value of the transaction in USD (transaction_shares x transaction_price_per_share). Null when shares or price is not reported, and for holdings.|
|» underlying_security_shares|number(double)|false|none|Number of underlying shares for derivative securities.|
|» underlying_security_title|string|false|none|Title of the underlying security for derivative securities.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_filings_vX_index

<a id="opIdget_stocks_filings_vX_index"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/filings/vX/index?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/filings/vX/index`

SEC EDGAR master index providing metadata for all SEC filings including form types, filing dates, and direct links to source documents.

<h3 id="getstocksfilingsvxindex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cik|query|string|false|SEC Central Index Key (CIK) identifying the filing entity.|
|cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|cik.gt|query|string|false|Filter greater than the value.|
|cik.gte|query|string|false|Filter greater than or equal to the value.|
|cik.lt|query|string|false|Filter less than the value.|
|cik.lte|query|string|false|Filter less than or equal to the value.|
|ticker|query|string|false|Stock ticker symbol for the filing entity, if available.|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|form_type|query|string|false|SEC form type (e.g., '10-K', '10-Q', '8-K', 'S-1', '4', etc.).|
|form_type.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|form_type.gt|query|string|false|Filter greater than the value.|
|form_type.gte|query|string|false|Filter greater than or equal to the value.|
|form_type.lt|query|string|false|Filter less than the value.|
|form_type.lte|query|string|false|Filter less than or equal to the value.|
|filing_date|query|string|false|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD). Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '1000' if not specified. The maximum allowed limit is '10000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'filing_date' if not specified. The sort order defaults to 'desc' if not specified.|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.massive.com/stocks/filings/vX/index?cursor=eyJsaW1pd...",
  "request_id": "1daccfd9794e482e96d104dee6ed432b",
  "results": [
    {
      "accession_number": "0000320193-25-000079",
      "cik": "0000320193",
      "filing_date": "2025-10-31",
      "filing_url": "https://www.sec.gov/Archives/edgar/data/320193/0000320193-25-000079.txt",
      "form_type": "10-K",
      "issuer_name": "Apple Inc.",
      "ticker": "AAPL"
    },
    {
      "accession_number": "0000950170-25-010491",
      "cik": "0000789019",
      "filing_date": "2025-01-29",
      "filing_url": "https://www.sec.gov/Archives/edgar/data/789019/0000950170-25-010491.txt",
      "form_type": "10-Q",
      "issuer_name": "MICROSOFT CORP",
      "ticker": "MSFT"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksfilingsvxindex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksfilingsvxindex-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» accession_number|string|false|none|SEC accession number uniquely identifying the filing (e.g., '0000320193-24-000123').|
|» cik|string|false|none|SEC Central Index Key (CIK) identifying the filing entity.|
|» filing_date|string(date)|false|none|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD).|
|» filing_url|string|false|none|Direct URL to the filing on the SEC EDGAR website.|
|» form_type|string|false|none|SEC form type (e.g., '10-K', '10-Q', '8-K', 'S-1', '4', etc.).|
|» issuer_name|string|false|none|Name of the company or entity that submitted the filing.|
|» ticker|string|false|none|Stock ticker symbol for the filing entity, if available.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_filings_vX_risk-factors

<a id="opIdget_stocks_filings_vX_risk-factors"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/filings/vX/risk-factors?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/filings/vX/risk-factors`

The risk factors identified in companies' 10K filings.

<h3 id="getstocksfilingsvxrisk-factors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filing_date|query|string|false|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD).|
|filing_date.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|filing_date.gt|query|string|false|Filter greater than the value.|
|filing_date.gte|query|string|false|Filter greater than or equal to the value.|
|filing_date.lt|query|string|false|Filter less than the value.|
|filing_date.lte|query|string|false|Filter less than or equal to the value.|
|ticker|query|string|false|Stock ticker symbol for the company.|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|cik|query|string|false|SEC Central Index Key (10 digits, zero-padded).|
|cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|cik.gt|query|string|false|Filter greater than the value.|
|cik.gte|query|string|false|Filter greater than or equal to the value.|
|cik.lt|query|string|false|Filter less than the value.|
|cik.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'filing_date' if not specified. The sort order defaults to 'desc' if not specified.|

> Example responses

> 200 Response

```json
{
  "request_id": "c7856101f86c20d855b0ea1c5a6d6efa",
  "results": [
    {
      "cik": "0001005101",
      "filing_date": "2025-09-19",
      "primary_category": "financial_and_market",
      "secondary_category": "credit_and_liquidity",
      "supporting_text": "In addition to the net proceeds we received from our recent equity and debt financings, we may need to raise additional equity or debt financing to continue the development and marketing of our Fintech app, to fund ongoing operations, invest in acquisitions, and for working capital purposes. Our inability to raise such additional financing may limit our ability to continue the development of our Fintech app.",
      "tertiary_category": "access_to_capital_and_financing",
      "ticker": "MGLD"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksfilingsvxrisk-factors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksfilingsvxrisk-factors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» cik|string|false|none|SEC Central Index Key (10 digits, zero-padded).|
|» filing_date|string|false|none|Date when the filing was submitted to the SEC (formatted as YYYY-MM-DD).|
|» primary_category|string|false|none|Top-level risk category|
|» secondary_category|string|false|none|Mid-level risk category|
|» supporting_text|string|false|none|Snippet of text to support the given label|
|» tertiary_category|string|false|none|Most specific risk classification|
|» ticker|string|false|none|Stock ticker symbol for the company.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_insiders_vX_activity

<a id="opIdget_stocks_insiders_vX_activity"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/insiders/vX/activity?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/insiders/vX/activity`

Daily insider trading activity per issuer: open-market purchases and sales by directors, officers, and 10%+ shareholders, summed per issuer and transaction date from SEC Forms 4 and 5. Sum rows over a date range to build a rolling window of net insider buying or selling. Only purchases and sales of non-derivative securities count; grants, exercises, tax withholding, and gifts do not. Each transaction is counted once even when several reporting owners filed it jointly. Transactions replaced by a later amendment are excluded, and only transactions that could have been executed in the market are counted: the filed price is within 10% of the issuer's common-stock range on the transaction date, the size is at most 25% of the issuer's shares outstanding, and purchases are at most 10 times (sales 100 times) that day's consolidated volume. That excludes filer errors and bogus filings (an aggregate price entered as per-share, impossible share counts) and limits coverage to issuers with a listed common stock and a market price that day. A transaction reported by several affiliated entities, in one filing or several, is counted once. The underlying filings are available from the Form 4 and Form 5 endpoints.

<h3 id="getstocksinsidersvxactivity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tickers|query|string|false|Filter for arrays that contain the value.|
|tickers.all_of|query|string|false|Filter for arrays that contain all of the values. Multiple values can be specified by using a comma separated list.|
|tickers.any_of|query|string|false|Filter for arrays that contain any of the values. Multiple values can be specified by using a comma separated list.|
|issuer_cik|query|string|false|SEC Central Index Key of the issuer company (10 digits, zero-padded).|
|issuer_cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|transaction_date|query|string|false|Date of the transactions (formatted as YYYY-MM-DD). Value must be formatted 'yyyy-mm-dd'.|
|transaction_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|transaction_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|transaction_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|transaction_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '10000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'transaction_date' if not specified. The sort order defaults to 'desc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "next_url": "https://api.massive.com/stocks/insiders/vX/activity?cursor=eyJsaW1pd...",
  "request_id": "047c7035a86042b1925118e5f68d81b0",
  "results": [
    {
      "issuer_cik": "0001045810",
      "issuer_name": "NVIDIA CORP",
      "last_filing_date": "2026-09-18",
      "net_shares": -34918,
      "net_value": -7648632.45,
      "planned_purchase_value": 0,
      "planned_sale_value": 7648632.45,
      "purchase_count": 0,
      "purchase_shares": 0,
      "purchase_value": 0,
      "purchaser_count": 0,
      "sale_count": 3,
      "sale_shares": 34918,
      "sale_value": 7648632.45,
      "seller_count": 1,
      "tickers": [
        "NVDA"
      ],
      "transaction_date": "2026-09-17"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksinsidersvxactivity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksinsidersvxactivity-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» issuer_cik|string|false|none|SEC Central Index Key of the issuer company (10 digits, zero-padded).|
|» issuer_name|string|false|none|Name of the issuer company as reported in the filings.|
|» last_filing_date|string(date)|false|none|Filing date of the latest filing that reported one of these transactions (formatted as YYYY-MM-DD). Transactions are usually filed within two business days.|
|» net_shares|number(double)|true|none|Shares purchased minus shares sold.|
|» net_value|number(double)|true|none|Value purchased minus value sold in USD.|
|» planned_purchase_value|number(double)|true|none|Value of shares purchased under a Rule 10b5-1 trading plan in USD. Zero on filings before the plan checkbox was introduced in 2023.|
|» planned_sale_value|number(double)|true|none|Value of shares sold under a Rule 10b5-1 trading plan in USD. Zero on filings before the plan checkbox was introduced in 2023.|
|» purchase_count|integer(int64)|true|none|Number of open-market purchase transactions.|
|» purchase_shares|number(double)|true|none|Shares purchased.|
|» purchase_value|number(double)|true|none|Value of shares purchased in USD.|
|» purchaser_count|integer(int64)|true|none|Number of distinct insiders who purchased.|
|» sale_count|integer(int64)|true|none|Number of open-market sale transactions.|
|» sale_shares|number(double)|true|none|Shares sold.|
|» sale_value|number(double)|true|none|Value of shares sold in USD.|
|» seller_count|integer(int64)|true|none|Number of distinct insiders who sold.|
|» tickers|[string]|false|none|Ticker symbols of the issuer as of the transaction date. Multiple symbols may indicate different share classes; the totals cover the issuer, not each ticker.|
|» transaction_date|string(date)|false|none|Date of the transactions (formatted as YYYY-MM-DD).|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_insiders_vX_holdings

<a id="opIdget_stocks_insiders_vX_holdings"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/insiders/vX/holdings?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/insiders/vX/holdings`

Insiders of each issuer: one row per reporting owner per issuer, from every SEC Form 3, 4, and 5 filing, with the shares they hold. Use it to see who the insiders of a company are and how much each owns, or to find the CIK of a director, officer, or 10%+ shareholder and then query the Form 4 endpoint by owner_cik for their filings across issuers. Name, roles, and title reflect the owner's most recent filing for that issuer. Share totals sum the latest reported balance of each of the owner's non-derivative positions (direct holdings and each trust, LLC, or family vehicle); see position_count and oldest_position_date for how fresh the sum is.

<h3 id="getstocksinsidersvxholdings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tickers|query|string|false|Filter for arrays that contain the value.|
|tickers.all_of|query|string|false|Filter for arrays that contain all of the values. Multiple values can be specified by using a comma separated list.|
|tickers.any_of|query|string|false|Filter for arrays that contain any of the values. Multiple values can be specified by using a comma separated list.|
|issuer_cik|query|string|false|SEC Central Index Key of the issuer company (10 digits, zero-padded).|
|issuer_cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|owner_cik|query|string|false|SEC Central Index Key of the reporting owner (10 digits, zero-padded). Stable across issuers and years; use it to follow a person through the Form 3, 4, and 5 endpoints.|
|owner_cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|last_filing_date|query|string|false|Date of the owner's most recent Form 3, 4, or 5 filing for this issuer (formatted as YYYY-MM-DD). Value must be formatted 'yyyy-mm-dd'.|
|last_filing_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|last_filing_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|last_filing_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|last_filing_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '10000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'last_filing_date' if not specified. The sort order defaults to 'desc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "next_url": "https://api.massive.com/stocks/insiders/vX/holdings?cursor=eyJsaW1pd...",
  "request_id": "047c7035a86042b1925118e5f68d81b0",
  "results": [
    {
      "filing_count": 94,
      "first_filing_date": "2013-10-09",
      "issuer_cik": "0001045810",
      "issuer_name": "NVIDIA CORP",
      "last_filing_date": "2026-09-18",
      "officer_title": "EVP & Chief Financial Officer",
      "oldest_position_date": "2021-09-15",
      "owner_cik": "0001588670",
      "owner_name": "Kress Colette",
      "ownership_pct": 0.0198,
      "position_count": 11,
      "roles": [
        "officer"
      ],
      "shares_owned": 4776533,
      "shares_owned_direct": 765103,
      "shares_owned_indirect": 4011430,
      "tickers": [
        "NVDA"
      ]
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksinsidersvxholdings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksinsidersvxholdings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» filing_count|integer(int64)|true|none|Number of Form 3, 4, and 5 filings by the owner for this issuer.|
|» first_filing_date|string(date)|false|none|Date of the owner's first Form 3, 4, or 5 filing for this issuer (formatted as YYYY-MM-DD). Filings begin in 2003.|
|» issuer_cik|string|false|none|SEC Central Index Key of the issuer company (10 digits, zero-padded).|
|» issuer_name|string|false|none|Name of the issuer company as reported in the most recent filing.|
|» last_filing_date|string(date)|false|none|Date of the owner's most recent Form 3, 4, or 5 filing for this issuer (formatted as YYYY-MM-DD).|
|» officer_title|string|false|none|Title of the officer in the most recent filing, if the reporting owner is an officer.|
|» oldest_position_date|string(date)|false|none|Earliest as_of_date among the summed positions (formatted as YYYY-MM-DD). A date far behind last_filing_date means at least one position has not been restated recently and may be stale.|
|» owner_cik|string|false|none|SEC Central Index Key of the reporting owner (10 digits, zero-padded). Stable across issuers and years; use it to follow a person through the Form 3, 4, and 5 endpoints.|
|» owner_name|string|false|none|Name of the reporting owner (individual or entity) as reported in the most recent filing.|
|» ownership_pct|number(double)|false|none|shares_owned as a percentage of the issuer's shares outstanding (largest share class) as of last_filing_date. Absent when shares outstanding is not available for the issuer.|
|» position_count|integer(int64)|false|none|Number of positions summed into shares_owned: one for direct holdings plus one per indirect vehicle.|
|» roles|[string]|false|none|Relationships of the reporting owner to the issuer in the most recent filing. Possible values: director, officer, ten_percent_owner, other.|
|» shares_owned|number(double)|false|none|Shares of the issuer's non-derivative securities the owner holds: the sum of the latest reported balance of each position (direct, and each indirect vehicle) across their Form 3, 4, and 5 filings. As filed, not adjusted for splits. Unexercised options and other derivative securities are not included. Absent when the owner has never reported a share balance.|
|» shares_owned_direct|number(double)|false|none|Shares held directly, in the owner's own name.|
|» shares_owned_indirect|number(double)|false|none|Shares held indirectly through trusts, LLCs, family members, and other vehicles.|
|» tickers|[string]|false|none|Ticker symbols of the issuer as of the owner's most recent filing. Multiple symbols may indicate different share classes.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_taxonomies_vX_disclosures

<a id="opIdget_stocks_taxonomies_vX_disclosures"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/taxonomies/vX/disclosures?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/taxonomies/vX/disclosures`

The complete list of 8-K disclosure classifications used in the 8-K disclosures endpoint.

<h3 id="getstockstaxonomiesvxdisclosures-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taxonomy|query|string|false|Taxonomy version that defines this classification (e.g., '1.0').|
|taxonomy.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|taxonomy.gt|query|string|false|Filter greater than the value.|
|taxonomy.gte|query|string|false|Filter greater than or equal to the value.|
|taxonomy.lt|query|string|false|Filter less than the value.|
|taxonomy.lte|query|string|false|Filter less than or equal to the value.|
|primary_category|query|string|false|Top-level disclosure category.|
|primary_category.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|primary_category.gt|query|string|false|Filter greater than the value.|
|primary_category.gte|query|string|false|Filter greater than or equal to the value.|
|primary_category.lt|query|string|false|Filter less than the value.|
|primary_category.lte|query|string|false|Filter less than or equal to the value.|
|secondary_category|query|string|false|Mid-level disclosure category.|
|secondary_category.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|secondary_category.gt|query|string|false|Filter greater than the value.|
|secondary_category.gte|query|string|false|Filter greater than or equal to the value.|
|secondary_category.lt|query|string|false|Filter less than the value.|
|secondary_category.lte|query|string|false|Filter less than or equal to the value.|
|tertiary_category|query|string|false|Most specific disclosure category.|
|tertiary_category.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|tertiary_category.gt|query|string|false|Filter greater than the value.|
|tertiary_category.gte|query|string|false|Filter greater than or equal to the value.|
|tertiary_category.lt|query|string|false|Filter less than the value.|
|tertiary_category.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '200' if not specified. The maximum allowed limit is '1000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'taxonomy' if not specified. The sort order defaults to 'desc' if not specified.|

> Example responses

> 200 Response

```json
{
  "request_id": "a1b2c3d4e5f6a7b8c9d0e1f2",
  "results": [
    {
      "description": "New CEO appointment with background, employment terms, and compensation.",
      "primary_category": "leadership_and_governance",
      "secondary_category": "executive_leadership",
      "taxonomy": "1.0",
      "tertiary_category": "ceo_appointment"
    },
    {
      "description": "Quarterly financial results including revenue, net income, EPS, and key operating metrics with management commentary.",
      "primary_category": "financial_results",
      "secondary_category": "earnings_and_performance",
      "taxonomy": "1.0",
      "tertiary_category": "quarterly_earnings"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstockstaxonomiesvxdisclosures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstockstaxonomiesvxdisclosures-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» description|string|false|none|Detailed explanation of what the disclosure category covers, including typical examples.|
|» primary_category|string|false|none|Top-level disclosure category.|
|» secondary_category|string|false|none|Mid-level disclosure category.|
|» taxonomy|string|true|none|Taxonomy version that defines this classification (e.g., '1.0').|
|» tertiary_category|string|false|none|Most specific disclosure category.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_taxonomies_vX_risk-factors

<a id="opIdget_stocks_taxonomies_vX_risk-factors"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/taxonomies/vX/risk-factors?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/taxonomies/vX/risk-factors`

The complete list of risk factor classifications used in the risk factors endpoint.

<h3 id="getstockstaxonomiesvxrisk-factors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taxonomy|query|number(double)|false|Version identifier (e.g., '1.0', '1.1') for the taxonomy Value must be a floating point number.|
|taxonomy.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|taxonomy.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|taxonomy.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|taxonomy.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|primary_category|query|string|false|Top-level risk category|
|primary_category.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|primary_category.gt|query|string|false|Filter greater than the value.|
|primary_category.gte|query|string|false|Filter greater than or equal to the value.|
|primary_category.lt|query|string|false|Filter less than the value.|
|primary_category.lte|query|string|false|Filter less than or equal to the value.|
|secondary_category|query|string|false|Mid-level risk category|
|secondary_category.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|secondary_category.gt|query|string|false|Filter greater than the value.|
|secondary_category.gte|query|string|false|Filter greater than or equal to the value.|
|secondary_category.lt|query|string|false|Filter less than the value.|
|secondary_category.lte|query|string|false|Filter less than or equal to the value.|
|tertiary_category|query|string|false|Most specific risk classification|
|tertiary_category.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|tertiary_category.gt|query|string|false|Filter greater than the value.|
|tertiary_category.gte|query|string|false|Filter greater than or equal to the value.|
|tertiary_category.lt|query|string|false|Filter less than the value.|
|tertiary_category.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '200' if not specified. The maximum allowed limit is '1000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'taxonomy' if not specified. The sort order defaults to 'desc' if not specified.|

> Example responses

> 200 Response

```json
{
  "request_id": "daac836f71724420b66011d55d88b30b",
  "results": [
    {
      "description": "Risk from inadequate performance management systems, unclear accountability structures, or ineffective measurement and incentive systems that could affect employee performance, goal achievement, and organizational effectiveness.",
      "primary_category": "Governance & Stakeholder",
      "secondary_category": "Organizational & Management",
      "taxonomy": "1.0",
      "tertiary_category": "Performance management and accountability"
    },
    {
      "description": "Risk from requirements to monitor, document, and report on compliance with privacy and data protection regulations including risks from compliance program effectiveness, record-keeping requirements, and breach notification obligations.",
      "primary_category": "Regulatory & Compliance",
      "secondary_category": "Data & Privacy",
      "taxonomy": "1.0",
      "tertiary_category": "Compliance monitoring and reporting"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstockstaxonomiesvxrisk-factors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstockstaxonomiesvxrisk-factors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» description|string|false|none|Detailed explanation of what this risk category encompasses, including specific examples and potential impacts|
|» primary_category|string|false|none|Top-level risk category|
|» secondary_category|string|false|none|Mid-level risk category|
|» taxonomy|number(double)|true|none|Version identifier (e.g., '1.0', '1.1') for the taxonomy|
|» tertiary_category|string|false|none|Most specific risk classification|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_v1_short-interest

<a id="opIdget_stocks_v1_short-interest"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/v1/short-interest?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/v1/short-interest`

Comprehensive FINRA short interest data that tracks the short selling metrics for securities on a specific settlement date.

<h3 id="getstocksv1short-interest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|query|string|false|The primary ticker symbol for the stock.|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|days_to_cover|query|number(double)|false|Calculated as short_interest divided by avg_daily_volume, representing the estimated number of days it would take to cover all short positions based on average trading volume. Value must be a floating point number.|
|days_to_cover.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list. Value must be a floating point number.|
|days_to_cover.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|days_to_cover.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|days_to_cover.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|days_to_cover.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|settlement_date|query|string|false|The date (formatted as YYYY-MM-DD) on which the short interest data is considered settled, typically based on exchange reporting schedules.|
|settlement_date.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|settlement_date.gt|query|string|false|Filter greater than the value.|
|settlement_date.gte|query|string|false|Filter greater than or equal to the value.|
|settlement_date.lt|query|string|false|Filter less than the value.|
|settlement_date.lte|query|string|false|Filter less than or equal to the value.|
|avg_daily_volume|query|integer(int64)|false|The average daily trading volume for the stock over a specified period, typically used to contextualize short interest. Value must be an integer.|
|avg_daily_volume.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list. Value must be an integer.|
|avg_daily_volume.gt|query|integer(int64)|false|Filter greater than the value. Value must be an integer.|
|avg_daily_volume.gte|query|integer(int64)|false|Filter greater than or equal to the value. Value must be an integer.|
|avg_daily_volume.lt|query|integer(int64)|false|Filter less than the value. Value must be an integer.|
|avg_daily_volume.lte|query|integer(int64)|false|Filter less than or equal to the value. Value must be an integer.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '10' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'ticker' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "avg_daily_volume": 2340158,
      "days_to_cover": 1.67,
      "settlement_date": "2025-03-14",
      "short_interest": 3906231,
      "ticker": "A"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksv1short-interest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksv1short-interest-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» avg_daily_volume|integer(int64)|true|none|The average daily trading volume for the stock over a specified period, typically used to contextualize short interest.|
|» days_to_cover|number(double)|true|none|Calculated as short_interest divided by avg_daily_volume, representing the estimated number of days it would take to cover all short positions based on average trading volume.|
|» settlement_date|string|true|none|The date (formatted as YYYY-MM-DD) on which the short interest data is considered settled, typically based on exchange reporting schedules.|
|» short_interest|integer(int64)|false|none|The total number of shares that have been sold short but have not yet been covered or closed out.|
|» ticker|string|false|none|The primary ticker symbol for the stock.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_v1_short-volume

<a id="opIdget_stocks_v1_short-volume"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/v1/short-volume?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/v1/short-volume`

Contains short selling volume for different stock tickers, capturing total trading volume, short sale details, and breakdown by different trading platforms.

<h3 id="getstocksv1short-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|query|string|false|The primary ticker symbol for the stock.|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|date|query|string|false|The date of trade activity reported in the format YYYY-MM-DD|
|date.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|date.gt|query|string|false|Filter greater than the value.|
|date.gte|query|string|false|Filter greater than or equal to the value.|
|date.lt|query|string|false|Filter less than the value.|
|date.lte|query|string|false|Filter less than or equal to the value.|
|short_volume_ratio|query|number(double)|false|The percentage of total volume that was sold short. Calculated as (short_volume / total_volume) * 100. Value must be a floating point number.|
|short_volume_ratio.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list. Value must be a floating point number.|
|short_volume_ratio.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|short_volume_ratio.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|short_volume_ratio.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|short_volume_ratio.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '10' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'ticker' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "adf_short_volume": 0,
      "adf_short_volume_exempt": 0,
      "date": "2025-03-25",
      "exempt_volume": 1,
      "nasdaq_carteret_short_volume": 179943,
      "nasdaq_carteret_short_volume_exempt": 1,
      "nasdaq_chicago_short_volume": 1,
      "nasdaq_chicago_short_volume_exempt": 0,
      "non_exempt_volume": 181218,
      "nyse_short_volume": 1275,
      "nyse_short_volume_exempt": 0,
      "short_volume": 181219,
      "short_volume_ratio": 31.57,
      "ticker": "A",
      "total_volume": 574084
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksv1short-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksv1short-volume-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» adf_short_volume|integer(int64)|false|none|Short volume reported via the Alternative Display Facility (ADF), excluding exempt volume.|
|» adf_short_volume_exempt|integer(int64)|false|none|Short volume reported via ADF that was marked as exempt.|
|» date|string|true|none|The date of trade activity reported in the format YYYY-MM-DD|
|» exempt_volume|number(double)|false|none|Portion of short volume that was marked as exempt from regulation SHO.|
|» nasdaq_carteret_short_volume|integer(int64)|false|none|Short volume reported from Nasdaq's Carteret facility, excluding exempt volume.|
|» nasdaq_carteret_short_volume_exempt|integer(int64)|false|none|Short volume from Nasdaq Carteret that was marked as exempt.|
|» nasdaq_chicago_short_volume|integer(int64)|false|none|Short volume reported from Nasdaq's Chicago facility, excluding exempt volume.|
|» nasdaq_chicago_short_volume_exempt|integer(int64)|false|none|Short volume from Nasdaq Chicago that was marked as exempt.|
|» non_exempt_volume|number(double)|false|none|Portion of short volume that was not exempt from regulation SHO (i.e., short_volume - exempt_volume).|
|» nyse_short_volume|integer(int64)|false|none|Short volume reported from NYSE facilities, excluding exempt volume.|
|» nyse_short_volume_exempt|integer(int64)|false|none|Short volume from NYSE facilities that was marked as exempt.|
|» short_volume|number(double)|false|none|Total number of shares sold short across all venues for the ticker on the given date.|
|» short_volume_ratio|number(float)|false|none|The percentage of total volume that was sold short. Calculated as (short_volume / total_volume) * 100.|
|» ticker|string|false|none|The primary ticker symbol for the stock.|
|» total_volume|number(double)|false|none|Total reported volume across all venues for the ticker on the given date.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_vX_float

<a id="opIdget_stocks_vX_float"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/vX/float?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/vX/float`

Contains free float data for US-listed securities, showing the most recent available number of shares available for public trading and the percentage of total shares outstanding.

<h3 id="getstocksvxfloat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|query|string|false|The primary ticker symbol for the stock.|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|free_float_percent|query|number(double)|false|Percentage of total shares outstanding that are available for public trading, rounded to two decimal places. Value must be a floating point number.|
|free_float_percent.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|free_float_percent.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|free_float_percent.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|free_float_percent.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '5000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'ticker' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "request_id": 1,
  "results": [
    {
      "effective_date": "2025-11-01",
      "free_float": 15000000000,
      "free_float_percent": 98.5,
      "ticker": "AAPL"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksvxfloat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksvxfloat-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» effective_date|string(date)|false|none|The effective date of the free float measurement.|
|» free_float|integer(int64)|false|none|Number of shares freely tradable in the market. Free float shares represent the portion of a company's outstanding shares that is freely tradable in the market, excluding any holdings considered strategic, controlling, or long term. This excludes insiders, directors, founders, 5 percent plus shareholders, cross holdings, government stakes except pensions, restricted or locked up shares, employee plans, and any entities with board influence, leaving only shares that are genuinely available for public trading.|
|» free_float_percent|number(double)|false|none|Percentage of total shares outstanding that are available for public trading, rounded to two decimal places.|
|» ticker|string|false|none|The primary ticker symbol for the stock.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-benzinga">benzinga</h1>

## get_benzinga_v1_analyst-insights

<a id="opIdget_benzinga_v1_analyst-insights"></a>

> Code samples

```bash
curl "https://api.polygon.io/benzinga/v1/analyst-insights?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /benzinga/v1/analyst-insights`

A comprehensive database of financial analyst insights and ratings for various publicly traded companies, capturing detailed information about analyst recommendations and price targets.

<h3 id="getbenzingav1analyst-insights-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|false|The calendar date (formatted as YYYY-MM-DD) when the rating was issued.|
|date.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|date.gt|query|string|false|Filter greater than the value.|
|date.gte|query|string|false|Filter greater than or equal to the value.|
|date.lt|query|string|false|Filter less than the value.|
|date.lte|query|string|false|Filter less than or equal to the value.|
|ticker|query|string|false|The stock symbol of the company being rated.|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|last_updated|query|string|false|The timestamp (formatted as an ISO 8601 timestamp) when the rating was last updated in the system. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.gt|query|string|false|Filter greater than the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.gte|query|string|false|Filter greater than or equal to the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.lt|query|string|false|Filter less than the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.lte|query|string|false|Filter less than or equal to the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|firm|query|string|false|The name of the research firm or investment bank issuing the rating.|
|firm.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|firm.gt|query|string|false|Filter greater than the value.|
|firm.gte|query|string|false|Filter greater than or equal to the value.|
|firm.lt|query|string|false|Filter less than the value.|
|firm.lte|query|string|false|Filter less than or equal to the value.|
|rating_action|query|string|false|The description of the change in rating from the firm's last rating. Possible values include: downgrades, maintains, reinstates, reiterates, upgrades, assumes, initiates_coverage_on, terminates_coverage_on, removes, suspends, firm_dissolved.|
|rating_action.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|rating_action.gt|query|string|false|Filter greater than the value.|
|rating_action.gte|query|string|false|Filter greater than or equal to the value.|
|rating_action.lt|query|string|false|Filter less than the value.|
|rating_action.lte|query|string|false|Filter less than or equal to the value.|
|benzinga_firm_id|query|string|false|The identifier used by Benzinga for the firm record.|
|benzinga_firm_id.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|benzinga_firm_id.gt|query|string|false|Filter greater than the value.|
|benzinga_firm_id.gte|query|string|false|Filter greater than or equal to the value.|
|benzinga_firm_id.lt|query|string|false|Filter less than the value.|
|benzinga_firm_id.lte|query|string|false|Filter less than or equal to the value.|
|benzinga_rating_id|query|string|false|The identifier used by Benzinga for the rating record.|
|benzinga_rating_id.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|benzinga_rating_id.gt|query|string|false|Filter greater than the value.|
|benzinga_rating_id.gte|query|string|false|Filter greater than or equal to the value.|
|benzinga_rating_id.lt|query|string|false|Filter less than the value.|
|benzinga_rating_id.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'last_updated' if not specified. The sort order defaults to 'desc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "benzinga_firm_id": "606af0aa6538960001bced21",
      "benzinga_id": "681363c1fd0258abcbedc074",
      "benzinga_rating_id": "6813624c09c1f6000103ac25",
      "date": "2025-05-01",
      "firm": "Needham",
      "insight": "Needham maintained their Buy rating on Etsy's stock with a price target of $55.00.  \n\n **Growth Initiatives and Market Penetration**: Etsy's focus on growth initiatives, including leveraging its app for a more personalized shopping experience and marketing, has been a key factor in maintaining its Buy rating. The company's ability to drive greater consideration and purchase frequency through technology and product initiatives, alongside its significant app penetration of gross merchandise sales (GMS), showcases its strong position to capture more of the consumer wallet.\n\n**Resilience Amid Economic Uncertainty**: Despite the economic uncertainty, including potential impacts from tariffs, Etsy's asset-light model and strategic focus on product enhancements position it to navigate macro headwinds effectively. The company's efforts to lean into paid social channels for marketing and its ability to adapt to changes in consumer behavior underline its resilience and potential for sustained growth, supporting the Buy rating.",
      "last_updated": "2025-05-01T12:06:36Z",
      "price_target": 55,
      "rating": "buy",
      "rating_action": "maintains"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getbenzingav1analyst-insights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getbenzingav1analyst-insights-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» benzinga_firm_id|string|false|none|The identifier used by Benzinga for the firm record.|
|» benzinga_id|string|false|none|The identifier used by Benzinga for this record.|
|» benzinga_rating_id|string|false|none|The identifier used by Benzinga for the rating record.|
|» company_name|string|false|none|The name of the company being rated.|
|» date|string|false|none|The calendar date (formatted as YYYY-MM-DD) when the rating was issued.|
|» firm|string|false|none|The name of the research firm or investment bank issuing the rating.|
|» insight|string|false|none|Narrative commentary or reasoning provided by the analyst or firm to explain the rating or price target.|
|» last_updated|string(date-time)|false|none|The timestamp (formatted as an ISO 8601 timestamp) when the rating was last updated in the system.|
|» price_target|number(double)|false|none|The current price target set by the analyst.|
|» rating|string|false|none|The current rating set by the analyst.|
|» rating_action|string|false|none|The description of the change in rating from the firm's last rating. Possible values include: downgrades, maintains, reinstates, reiterates, upgrades, assumes, initiates_coverage_on, terminates_coverage_on, removes, suspends, firm_dissolved.|
|» ticker|string|false|none|The stock symbol of the company being rated.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_benzinga_v1_analysts

<a id="opIdget_benzinga_v1_analysts"></a>

> Code samples

```bash
curl "https://api.polygon.io/benzinga/v1/analysts?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /benzinga/v1/analysts`

A comprehensive database of financial analysts, containing detailed performance metrics and identification information for individual analysts across various financial firms.

<h3 id="getbenzingav1analysts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|benzinga_id|query|string|false|The identifier used by Benzinga for this record.|
|benzinga_id.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|benzinga_id.gt|query|string|false|Filter greater than the value.|
|benzinga_id.gte|query|string|false|Filter greater than or equal to the value.|
|benzinga_id.lt|query|string|false|Filter less than the value.|
|benzinga_id.lte|query|string|false|Filter less than or equal to the value.|
|benzinga_firm_id|query|string|false|The unique identifier assigned by Benzinga to the research firm or investment bank.|
|benzinga_firm_id.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|benzinga_firm_id.gt|query|string|false|Filter greater than the value.|
|benzinga_firm_id.gte|query|string|false|Filter greater than or equal to the value.|
|benzinga_firm_id.lt|query|string|false|Filter less than the value.|
|benzinga_firm_id.lte|query|string|false|Filter less than or equal to the value.|
|firm_name|query|string|false|The name of the research firm or investment bank issuing the ratings.|
|firm_name.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|firm_name.gt|query|string|false|Filter greater than the value.|
|firm_name.gte|query|string|false|Filter greater than or equal to the value.|
|firm_name.lt|query|string|false|Filter less than the value.|
|firm_name.lte|query|string|false|Filter less than or equal to the value.|
|full_name|query|string|false|The full name of the analyst associated with the ratings.|
|full_name.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|full_name.gt|query|string|false|Filter greater than the value.|
|full_name.gte|query|string|false|Filter greater than or equal to the value.|
|full_name.lt|query|string|false|Filter less than the value.|
|full_name.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'full_name' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "benzinga_firm_id": "5e17143f7da4190001b2eaa6",
      "benzinga_id": "65eb18289b25ca0001b34332",
      "firm_name": "B of A Securities",
      "full_name": "Alice Xiao",
      "last_updated": "2025-05-19T04:31:12Z",
      "overall_avg_return": 12.48,
      "overall_avg_return_percentile": 66.53,
      "overall_success_rate": 100,
      "smart_score": 67.94,
      "total_ratings": 4,
      "total_ratings_percentile": 32.17
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getbenzingav1analysts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getbenzingav1analysts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» benzinga_firm_id|string|false|none|The unique identifier assigned by Benzinga to the research firm or investment bank.|
|» benzinga_id|string|false|none|The identifier used by Benzinga for this record.|
|» firm_name|string|false|none|The name of the research firm or investment bank issuing the ratings.|
|» full_name|string|false|none|The full name of the analyst associated with the ratings.|
|» last_updated|string|false|none|The timestamp (formatted as an ISO 8601 timestamp) when the analyst record was last updated in the system.|
|» overall_avg_return|number(double)|false|none|The average percent price difference per rating since the date of recommendation.|
|» overall_avg_return_percentile|number(double)|false|none|The analyst's percentile rank based on average return, relative to other analysts.|
|» overall_success_rate|number(double)|false|none|The percentage of gain/loss ratings that resulted in a gain overall.|
|» smart_score|number(double)|false|none|A weighted average of the total_ratings_percentile, overall_avg_return_percentile, and overall_success_rate.|
|» total_ratings|number(double)|false|none|The total number of ratings issued by the analyst included in the performance calculation.|
|» total_ratings_percentile|number(double)|false|none|The analyst's percentile rank based on the total number of ratings issued, relative to other analysts.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_benzinga_v1_bulls-bears-say

<a id="opIdget_benzinga_v1_bulls-bears-say"></a>

> Code samples

```bash
curl "https://api.polygon.io/benzinga/v1/bulls-bears-say?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /benzinga/v1/bulls-bears-say`

A comprehensive database of analyst bull and bear case summaries for publicly traded companies, providing concise summaries of both bullish and bearish investment arguments to help investors see both sides of the story before making investment decisions.

<h3 id="getbenzingav1bulls-bears-say-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|query|string|false|The stock ticker symbol for the company associated with the bull and bear case summaries.|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|benzinga_id|query|string|false|The unique identifier used by Benzinga for this bull/bear case record.|
|benzinga_id.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|benzinga_id.gt|query|string|false|Filter greater than the value.|
|benzinga_id.gte|query|string|false|Filter greater than or equal to the value.|
|benzinga_id.lt|query|string|false|Filter less than the value.|
|benzinga_id.lte|query|string|false|Filter less than or equal to the value.|
|last_updated|query|string|false|The timestamp (formatted as an ISO 8601 timestamp) when the bull/bear case was last updated in the system. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.gt|query|string|false|Filter greater than the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.gte|query|string|false|Filter greater than or equal to the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.lt|query|string|false|Filter less than the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.lte|query|string|false|Filter less than or equal to the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '5000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'ticker' if not specified. The sort order defaults to 'desc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "bear_case": "Apple faces increasing regulatory scrutiny globally, potential market saturation in core iPhone markets, and intense competition in emerging categories. Supply chain vulnerabilities and dependence on China for manufacturing pose significant risks, while slowing innovation cycles could impact premium pricing.",
      "benzinga_id": "550e8400-e29b-41d4-a716-446655440000",
      "bull_case": "Apple's strong ecosystem integration, loyal customer base, and continued innovation in services and hardware drive sustainable revenue growth. The company's expanding services segment provides high-margin recurring revenue, while its brand strength and pricing power maintain premium market positioning.",
      "last_updated": "2025-12-16T10:30:00Z",
      "ticker": "AAPL"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getbenzingav1bulls-bears-say-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getbenzingav1bulls-bears-say-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» bear_case|string|false|none|A concise summary of the bearish investment thesis, highlighting potential risks, challenges, and reasons why the stock could decline in value.|
|» benzinga_id|string|false|none|The unique identifier used by Benzinga for this bull/bear case record.|
|» bull_case|string|false|none|A concise summary of the bullish investment thesis, highlighting positive aspects, growth opportunities, and reasons why the stock could appreciate in value.|
|» last_updated|string(date-time)|false|none|The timestamp (formatted as an ISO 8601 timestamp) when the bull/bear case was last updated in the system.|
|» ticker|string|false|none|The stock ticker symbol for the company associated with the bull and bear case summaries.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_benzinga_v1_consensus-ratings_ticker

<a id="opIdget_benzinga_v1_consensus-ratings_ticker"></a>

> Code samples

```bash
curl "https://api.polygon.io/benzinga/v1/consensus-ratings/string?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /benzinga/v1/consensus-ratings/{ticker}`

A comprehensive financial consensus ratings table that aggregates analyst recommendations and price targets for individual stock tickers, capturing detailed rating breakdowns and statistical insights.

<h3 id="getbenzingav1consensus-ratingsticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|false|The date range to aggregate analyst ratings over. For example, date.gte=2024-10-01 and date.lt=2025-01-01 for ratings published in Q4 2024. By default, all ratings are aggregated regardless of date.|
|date.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|date.gt|query|string|false|Filter greater than the value.|
|date.gte|query|string|false|Filter greater than or equal to the value.|
|date.lt|query|string|false|Filter less than the value.|
|date.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|ticker|path|string|true|The requested ticker.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "buy_ratings": 6,
      "consensus_price_target": 23.28,
      "consensus_rating": "hold",
      "consensus_rating_value": 4.14,
      "high_price_target": 32.14,
      "hold_ratings": 3,
      "low_price_target": 6.34,
      "price_target_contributors": 15,
      "ratings_contributors": 14,
      "sell_ratings": 0,
      "strong_buy_ratings": 5,
      "strong_sell_ratings": 0,
      "ticker": "AAPL"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getbenzingav1consensus-ratingsticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getbenzingav1consensus-ratingsticker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» buy_ratings|integer(int64)|true|none|The count of 'Buy' ratings from contributing analysts.|
|» consensus_price_target|number(double)|false|none|The average price target across all analysts, rounded to 2 decimal places.|
|» consensus_rating|string|false|none|The overall rating category determined by the average consensus weight. Possible values: 'strong_buy', 'buy', 'hold', 'sell', 'strong_sell'.|
|» consensus_rating_value|number(double)|false|none|The numerical average of all consensus weights, rounded to 2 decimal places. Scale ranges from 1 (Strong Sell) to 5 (Strong Buy).|
|» high_price_target|number(double)|false|none|The highest price target among all contributing analysts.|
|» hold_ratings|integer(int64)|true|none|The count of 'Hold' ratings from contributing analysts.|
|» low_price_target|number(double)|false|none|The lowest price target among all contributing analysts.|
|» price_target_contributors|integer(int64)|true|none|The number of unique analysts contributing price targets.|
|» ratings_contributors|integer(int64)|true|none|The number of unique analysts contributing to the overall ratings consensus.|
|» sell_ratings|integer(int64)|true|none|The count of 'Sell' ratings from contributing analysts.|
|» strong_buy_ratings|integer(int64)|true|none|The count of 'Strong Buy' ratings from contributing analysts.|
|» strong_sell_ratings|integer(int64)|true|none|The count of 'Strong Sell' ratings from contributing analysts.|
|» ticker|string|false|none|The requested ticker.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_benzinga_v1_earnings

<a id="opIdget_benzinga_v1_earnings"></a>

> Code samples

```bash
curl "https://api.polygon.io/benzinga/v1/earnings?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /benzinga/v1/earnings`

This table contains earnings data from Benzinga, tracking both actual and estimated financial metrics for publicly traded companies. It includes EPS and revenue figures with surprise calculations, along with metadata like fiscal periods, company identifiers, and reporting timestamps.

<h3 id="getbenzingav1earnings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|false|The calendar date (formatted as YYYY-MM-DD) when the earnings are scheduled or were reported.|
|date.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|date.gt|query|string|false|Filter greater than the value.|
|date.gte|query|string|false|Filter greater than or equal to the value.|
|date.lt|query|string|false|Filter less than the value.|
|date.lte|query|string|false|Filter less than or equal to the value.|
|ticker|query|string|false|The stock symbol of the company reporting earnings.|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|importance|query|integer(int64)|false|A subjective indicator of the importance of the event, on a scale from 0 (lowest) to 5 (highest). Value must be an integer.|
|importance.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list. Value must be an integer.|
|importance.gt|query|integer(int64)|false|Filter greater than the value. Value must be an integer.|
|importance.gte|query|integer(int64)|false|Filter greater than or equal to the value. Value must be an integer.|
|importance.lt|query|integer(int64)|false|Filter less than the value. Value must be an integer.|
|importance.lte|query|integer(int64)|false|Filter less than or equal to the value. Value must be an integer.|
|last_updated|query|string|false|The timestamp (formatted as an ISO 8601 timestamp) when the record was last updated in the system. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.gt|query|string|false|Filter greater than the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.gte|query|string|false|Filter greater than or equal to the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.lt|query|string|false|Filter less than the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.lte|query|string|false|Filter less than or equal to the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|date_status|query|string|false|Indicates whether the date of the earnings report has been confirmed. Possible values include: projected, confirmed.|
|date_status.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|date_status.gt|query|string|false|Filter greater than the value.|
|date_status.gte|query|string|false|Filter greater than or equal to the value.|
|date_status.lt|query|string|false|Filter less than the value.|
|date_status.lte|query|string|false|Filter less than or equal to the value.|
|eps_surprise_percent|query|number(double)|false|The EPS surprise relative to the estimate, as a decimal fraction (0.75 = 75%), calculated as eps_surprise divided by the absolute value of estimated_eps. Positive is a beat and negative a miss, even when the estimate is negative. When the estimate is 0 the value is 1 or -1, and estimates near 0 give very large values. Value must be a floating point number.|
|eps_surprise_percent.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list. Value must be a floating point number.|
|eps_surprise_percent.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|eps_surprise_percent.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|eps_surprise_percent.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|eps_surprise_percent.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|revenue_surprise_percent|query|number(double)|false|The revenue surprise relative to the estimate, as a decimal fraction (0.126 = 12.6%), calculated as revenue_surprise divided by the absolute value of estimated_revenue. Positive is a beat and negative a miss. Value must be a floating point number.|
|revenue_surprise_percent.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list. Value must be a floating point number.|
|revenue_surprise_percent.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|revenue_surprise_percent.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|revenue_surprise_percent.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|revenue_surprise_percent.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|fiscal_year|query|integer(int64)|false|The fiscal year in which the earnings period falls. Value must be an integer.|
|fiscal_year.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list. Value must be an integer.|
|fiscal_year.gt|query|integer(int64)|false|Filter greater than the value. Value must be an integer.|
|fiscal_year.gte|query|integer(int64)|false|Filter greater than or equal to the value. Value must be an integer.|
|fiscal_year.lt|query|integer(int64)|false|Filter less than the value. Value must be an integer.|
|fiscal_year.lte|query|integer(int64)|false|Filter less than or equal to the value. Value must be an integer.|
|fiscal_period|query|string|false|The fiscal period for which the earnings are reported. Examples include: Q1, Q2, H1, FY.|
|fiscal_period.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|fiscal_period.gt|query|string|false|Filter greater than the value.|
|fiscal_period.gte|query|string|false|Filter greater than or equal to the value.|
|fiscal_period.lt|query|string|false|Filter less than the value.|
|fiscal_period.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'last_updated' if not specified. The sort order defaults to 'desc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "actual_eps": -0.19,
      "actual_revenue": 17566000,
      "benzinga_id": "651bcd8d7e4d6000011f2232",
      "company_name": "Guardforce AI Co",
      "currency": "USD",
      "date": "2029-09-24",
      "date_status": "confirmed",
      "eps_method": "GAAP",
      "fiscal_period": "H1",
      "fiscal_year": 2024,
      "importance": 1,
      "last_updated": "2025-01-07T10:19:50Z",
      "previous_eps": -0.75,
      "previous_revenue": 18413292,
      "revenue_method": "GAAP",
      "ticker": "GFAI",
      "time": "07:00:00"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getbenzingav1earnings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getbenzingav1earnings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» actual_eps|number(double)|false|none|The actual earnings per share (EPS) reported by the company for the given period.|
|» actual_revenue|number(double)|false|none|The actual revenue reported by the company for the given fiscal period.|
|» benzinga_id|string|false|none|The identifier used by Benzinga for this record.|
|» company_name|string|false|none|The name of the company releasing earnings.|
|» currency|string|false|none|The ISO 4217 currency code indicating the denomination in which the figures are reported.|
|» date|string|false|none|The calendar date (formatted as YYYY-MM-DD) when the earnings are scheduled or were reported.|
|» date_status|string|false|none|Indicates whether the date of the earnings report has been confirmed. Possible values include: projected, confirmed.|
|» eps_method|string|false|none|The methodology of the EPS figure. Possible values are gaap (standardized financials under Generally Accepted Accounting Principles), ffo (Funds From Operations, a non-GAAP metric commonly used to assess the operating performance of REITs), and adj (adjusted, non-GAAP).|
|» eps_surprise|number(double)|false|none|The difference between the actual and estimated EPS.|
|» eps_surprise_percent|number(double)|false|none|The EPS surprise relative to the estimate, as a decimal fraction (0.75 = 75%), calculated as eps_surprise divided by the absolute value of estimated_eps. Positive is a beat and negative a miss, even when the estimate is negative. When the estimate is 0 the value is 1 or -1, and estimates near 0 give very large values.|
|» estimated_eps|number(double)|false|none|The analyst consensus estimate for earnings per share (EPS) for the given period.|
|» estimated_revenue|number(double)|false|none|The analyst consensus estimate for the company's revenue in the given period.|
|» fiscal_period|string|false|none|The fiscal period for which the earnings are reported. Examples include: Q1, Q2, H1, FY.|
|» fiscal_year|integer(int64)|false|none|The fiscal year in which the earnings period falls.|
|» importance|integer(int64)|false|none|A subjective indicator of the importance of the event, on a scale from 0 (lowest) to 5 (highest).|
|» last_updated|string(date-time)|false|none|The timestamp (formatted as an ISO 8601 timestamp) when the record was last updated in the system.|
|» notes|string|false|none|Additional context, commentary, or clarifying notes related to the earnings event.|
|» previous_eps|number(double)|false|none|The company's reported earnings per share (EPS) for the previous comparable period.|
|» previous_revenue|number(double)|false|none|The company's revenue for the previous comparable fiscal period.|
|» revenue_method|string|false|none|The methodology of the revenue figure. Possible values are gaap (standardized financials under Generally Accepted Accounting Principles), adj (adjusted, non-GAAP figures that exclude certain items like one-time charges or divestitures), and rental (revenue specifically derived from rental operations, typically used by REITs, leasing companies, or businesses with a rental-based model).|
|» revenue_surprise|number(double)|false|none|The difference between the actual and estimated revenue.|
|» revenue_surprise_percent|number(double)|false|none|The revenue surprise relative to the estimate, as a decimal fraction (0.126 = 12.6%), calculated as revenue_surprise divided by the absolute value of estimated_revenue. Positive is a beat and negative a miss.|
|» ticker|string|false|none|The stock symbol of the company reporting earnings.|
|» time|string|false|none|The time (formatted as 24-hour HH:MM:SS EST) when the earnings are scheduled or were reported.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_benzinga_v1_firms

<a id="opIdget_benzinga_v1_firms"></a>

> Code samples

```bash
curl "https://api.polygon.io/benzinga/v1/firms?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /benzinga/v1/firms`

A comprehensive database of financial firms, tracking unique identifiers, names, and basic metadata for various financial institutions and research firms.

<h3 id="getbenzingav1firms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|benzinga_id|query|string|false|The identifier used by Benzinga for this record.|
|benzinga_id.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|benzinga_id.gt|query|string|false|Filter greater than the value.|
|benzinga_id.gte|query|string|false|Filter greater than or equal to the value.|
|benzinga_id.lt|query|string|false|Filter less than the value.|
|benzinga_id.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'name' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "benzinga_id": "5e147c6b7da4190001b287b4",
      "currency": "USD",
      "last_updated": "2020-01-07T12:41:25Z",
      "name": "Piper Sandler"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getbenzingav1firms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getbenzingav1firms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» benzinga_id|string|false|none|The identifier used by Benzinga for this record.|
|» currency|string|false|none|Primary currency used by the financial firm, with some entries having null values.|
|» last_updated|string|false|none|Timestamp indicating when the firm's information was last modified or verified in the database.|
|» name|string|false|none|The name of a research firm or investment bank which issues ratings.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_benzinga_v1_guidance

<a id="opIdget_benzinga_v1_guidance"></a>

> Code samples

```bash
curl "https://api.polygon.io/benzinga/v1/guidance?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /benzinga/v1/guidance`

A comprehensive database of financial guidance and earnings estimates for various companies, capturing key metrics related to earnings per share (EPS) and revenue projections across different fiscal periods.

<h3 id="getbenzingav1guidance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|false|The calendar date (formatted as YYYY-MM-DD) when the guidance was issued.|
|date.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|date.gt|query|string|false|Filter greater than the value.|
|date.gte|query|string|false|Filter greater than or equal to the value.|
|date.lt|query|string|false|Filter less than the value.|
|date.lte|query|string|false|Filter less than or equal to the value.|
|ticker|query|string|false|The stock symbol of the company issuing guidance.|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|positioning|query|string|false|Indicates how a particular guidance value is presented relative to other figures disclosed by the company. Possible values are 'primary' (the emphasized figure) and 'secondary' (a supporting or alternate figure)|
|positioning.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|positioning.gt|query|string|false|Filter greater than the value.|
|positioning.gte|query|string|false|Filter greater than or equal to the value.|
|positioning.lt|query|string|false|Filter less than the value.|
|positioning.lte|query|string|false|Filter less than or equal to the value.|
|importance|query|integer(int64)|false|A subjective indicator of the importance of the event, on a scale from 0 (lowest) to 5 (highest). Value must be an integer.|
|importance.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list. Value must be an integer.|
|importance.gt|query|integer(int64)|false|Filter greater than the value. Value must be an integer.|
|importance.gte|query|integer(int64)|false|Filter greater than or equal to the value. Value must be an integer.|
|importance.lt|query|integer(int64)|false|Filter less than the value. Value must be an integer.|
|importance.lte|query|integer(int64)|false|Filter less than or equal to the value. Value must be an integer.|
|last_updated|query|string|false|The timestamp (formatted as an ISO 8601 timestamp) when the record was last updated in the system. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.gt|query|string|false|Filter greater than the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.gte|query|string|false|Filter greater than or equal to the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.lt|query|string|false|Filter less than the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.lte|query|string|false|Filter less than or equal to the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|fiscal_year|query|integer(int64)|false|The fiscal year corresponding to the period for which the guidance is issued. Value must be an integer.|
|fiscal_year.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list. Value must be an integer.|
|fiscal_year.gt|query|integer(int64)|false|Filter greater than the value. Value must be an integer.|
|fiscal_year.gte|query|integer(int64)|false|Filter greater than or equal to the value. Value must be an integer.|
|fiscal_year.lt|query|integer(int64)|false|Filter less than the value. Value must be an integer.|
|fiscal_year.lte|query|integer(int64)|false|Filter less than or equal to the value. Value must be an integer.|
|fiscal_period|query|string|false|The fiscal quarter to which the guidance applies, such as Q1, Q2, Q3, or Q4.|
|fiscal_period.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|fiscal_period.gt|query|string|false|Filter greater than the value.|
|fiscal_period.gte|query|string|false|Filter greater than or equal to the value.|
|fiscal_period.lt|query|string|false|Filter less than the value.|
|fiscal_period.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'date' if not specified. The sort order defaults to 'desc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "benzinga_id": "682b28a9c068240001a9fded",
      "company_name": "Bath & Body Works",
      "currency": "USD",
      "date": "2025-05-19",
      "eps_method": "adj",
      "estimated_eps_guidance": 3.52,
      "estimated_revenue_guidance": 7470000000,
      "fiscal_period": "FY",
      "fiscal_year": 2025,
      "importance": 3,
      "last_updated": "2025-05-19T12:54:04Z",
      "max_eps_guidance": 3.6,
      "max_revenue_guidance": 7526000000,
      "min_eps_guidance": 3.25,
      "min_revenue_guidance": 7380000000,
      "notes": "Revenue for 2025 FY is expected to up by 1 to 3% YoY from $7.307B",
      "positioning": "primary",
      "previous_max_eps_guidance": 3.6,
      "previous_max_revenue_guidance": 7526000000,
      "previous_min_eps_guidance": 3.25,
      "previous_min_revenue_guidance": 7380000000,
      "release_type": "preliminary",
      "revenue_method": "gaap",
      "ticker": "BBWI",
      "time": "08:30:00"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getbenzingav1guidance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getbenzingav1guidance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» benzinga_id|string|false|none|A unique identifier assigned by Benzinga to the guidance record.|
|» company_name|string|false|none|The name of the company issuing guidance.|
|» currency|string|false|none|The ISO 4217 code representing the currency in which the company issued its guidance figures.|
|» date|string|false|none|The calendar date (formatted as YYYY-MM-DD) when the guidance was issued.|
|» eps_method|string|false|none|The methodology of the EPS figure. Possible values are gaap (standardized financials under Generally Accepted Accounting Principles), ffo (Funds From Operations, a non-GAAP metric commonly used to assess the operating performance of REITs), and adj (adjusted, non-GAAP).|
|» estimated_eps_guidance|number(double)|false|none|The analyst consensus EPS estimate at the time the company issued its guidance. This can sit above, below, or in line with the company's issued range.|
|» estimated_revenue_guidance|number(double)|false|none|The analyst consensus revenue estimate at the time the company issued its guidance. This can sit above, below, or in line with the company's issued range.|
|» fiscal_period|string|false|none|The fiscal quarter to which the guidance applies, such as Q1, Q2, Q3, or Q4.|
|» fiscal_year|integer(int64)|false|none|The fiscal year corresponding to the period for which the guidance is issued.|
|» importance|integer(int64)|false|none|A subjective indicator of the importance of the event, on a scale from 0 (lowest) to 5 (highest).|
|» last_updated|string(date-time)|false|none|The timestamp (formatted as an ISO 8601 timestamp) when the record was last updated in the system.|
|» max_eps_guidance|number(double)|false|none|The highest EPS value the company expects for the fiscal period if a range was provided.|
|» max_revenue_guidance|number(double)|false|none|The highest revenue figure the company expects for the fiscal period if a range was provided.|
|» min_eps_guidance|number(double)|false|none|The lowest EPS value the company expects for the fiscal period if a range was provided.|
|» min_revenue_guidance|number(double)|false|none|The lowest revenue figure the company expects for the fiscal period if a range was provided.|
|» notes|string|false|none|Additional descriptive text or commentary provided about the guidance record.|
|» positioning|string|false|none|Indicates how a particular guidance value is presented relative to other figures disclosed by the company. Possible values are 'primary' (the emphasized figure) and 'secondary' (a supporting or alternate figure)|
|» previous_max_eps_guidance|number(double)|false|none|The highest EPS value issued in a previous guidance record for the same fiscal period.|
|» previous_max_revenue_guidance|number(double)|false|none|The highest revenue value issued in a previous guidance record for the same fiscal period.|
|» previous_min_eps_guidance|number(double)|false|none|The lowest EPS value issued in a previous guidance record for the same fiscal period.|
|» previous_min_revenue_guidance|number(double)|false|none|The lowest revenue value issued in a previous guidance record for the same fiscal period.|
|» release_type|string|false|none|Indicates whether the guidance was issued as part of a scheduled earnings release ('official') or as an unscheduled update ('preliminary').|
|» revenue_method|string|false|none|The methodology of the revenue figure. Possible values are gaap (standardized financials under Generally Accepted Accounting Principles) and adj (adjusted, non-GAAP).|
|» ticker|string|false|none|The stock symbol of the company issuing guidance.|
|» time|string|false|none|The time of day the guidance was announced, in HH:mm:ss format.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_benzinga_v1_ratings

<a id="opIdget_benzinga_v1_ratings"></a>

> Code samples

```bash
curl "https://api.polygon.io/benzinga/v1/ratings?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /benzinga/v1/ratings`

This table contains analyst ratings and price target data from investment firms, tracking rating changes (upgrades, downgrades, initiates coverage, etc.) and price target adjustments for publicly traded companies. Each record includes the analyst details, company information, current and previous ratings/targets, and metadata like timestamps and Benzinga identifiers.

<h3 id="getbenzingav1ratings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|false|The calendar date (formatted as YYYY-MM-DD) when the rating was issued.|
|date.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|date.gt|query|string|false|Filter greater than the value.|
|date.gte|query|string|false|Filter greater than or equal to the value.|
|date.lt|query|string|false|Filter less than the value.|
|date.lte|query|string|false|Filter less than or equal to the value.|
|ticker|query|string|false|The stock symbol of the company being rated.|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|importance|query|integer(int64)|false|A subjective indicator of the importance of the earnings event, on a scale from 0 (lowest) to 5 (highest). Value must be an integer.|
|importance.gt|query|integer(int64)|false|Filter greater than the value. Value must be an integer.|
|importance.gte|query|integer(int64)|false|Filter greater than or equal to the value. Value must be an integer.|
|importance.lt|query|integer(int64)|false|Filter less than the value. Value must be an integer.|
|importance.lte|query|integer(int64)|false|Filter less than or equal to the value. Value must be an integer.|
|last_updated|query|string|false|The timestamp (formatted as an ISO 8601 timestamp) when the rating was last updated in the system. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.gt|query|string|false|Filter greater than the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.gte|query|string|false|Filter greater than or equal to the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.lt|query|string|false|Filter less than the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|last_updated.lte|query|string|false|Filter less than or equal to the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|rating_action|query|string|false|The description of the change in rating from the firm's last rating. Possible values include: downgrades, maintains, reinstates, reiterates, upgrades, assumes, initiates_coverage_on, terminates_coverage_on, removes, suspends, firm_dissolved.|
|rating_action.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|rating_action.gt|query|string|false|Filter greater than the value.|
|rating_action.gte|query|string|false|Filter greater than or equal to the value.|
|rating_action.lt|query|string|false|Filter less than the value.|
|rating_action.lte|query|string|false|Filter less than or equal to the value.|
|price_target_action|query|string|false|The description of the directional change in price target. Possible values include: raises, lowers, maintains, announces, sets.|
|price_target_action.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|price_target_action.gt|query|string|false|Filter greater than the value.|
|price_target_action.gte|query|string|false|Filter greater than or equal to the value.|
|price_target_action.lt|query|string|false|Filter less than the value.|
|price_target_action.lte|query|string|false|Filter less than or equal to the value.|
|benzinga_id|query|string|false|The identifier used by Benzinga for this record.|
|benzinga_id.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|benzinga_id.gt|query|string|false|Filter greater than the value.|
|benzinga_id.gte|query|string|false|Filter greater than or equal to the value.|
|benzinga_id.lt|query|string|false|Filter less than the value.|
|benzinga_id.lte|query|string|false|Filter less than or equal to the value.|
|benzinga_analyst_id|query|string|false|The identifier used by Benzinga for this analyst.|
|benzinga_analyst_id.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|benzinga_analyst_id.gt|query|string|false|Filter greater than the value.|
|benzinga_analyst_id.gte|query|string|false|Filter greater than or equal to the value.|
|benzinga_analyst_id.lt|query|string|false|Filter less than the value.|
|benzinga_analyst_id.lte|query|string|false|Filter less than or equal to the value.|
|benzinga_firm_id|query|string|false|The identifier used by Benzinga for this firm.|
|benzinga_firm_id.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|benzinga_firm_id.gt|query|string|false|Filter greater than the value.|
|benzinga_firm_id.gte|query|string|false|Filter greater than or equal to the value.|
|benzinga_firm_id.lt|query|string|false|Filter less than the value.|
|benzinga_firm_id.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'last_updated' if not specified. The sort order defaults to 'desc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "adjusted_price_target": 15,
      "analyst": "Alexander Potter",
      "benzinga_analyst_id": "58933b2043eaaa0001698f4a",
      "benzinga_calendar_url": "https://www.benzinga.com/quote/RIVN/analyst-ratings",
      "benzinga_firm_id": "5e147c6b7da4190001b287b4",
      "benzinga_id": "682f29b0e5343b000100a619",
      "benzinga_news_url": "https://www.benzinga.com/stock-articles/RIVN/analyst-ratings",
      "company_name": "Rivian Automotive",
      "currency": "USD",
      "date": "2025-05-22",
      "firm": "Piper Sandler",
      "importance": 0,
      "last_updated": "2025-05-22T13:42:30Z",
      "previous_adjusted_price_target": 13,
      "previous_price_target": 13,
      "previous_rating": "neutral",
      "price_percent_change": 15.38,
      "price_target": 15,
      "price_target_action": "raises",
      "rating": "neutral",
      "rating_action": "maintains",
      "ticker": "RIVN",
      "time": "09:42:08"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getbenzingav1ratings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getbenzingav1ratings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» adjusted_price_target|number(double)|false|none|The current price target adjusted for stock splits and dividends.|
|» analyst|string|false|none|The name of the individual analyst who issued the rating.|
|» benzinga_analyst_id|string|false|none|The identifier used by Benzinga for this analyst.|
|» benzinga_calendar_url|string|false|none|A link to the Benzinga calendar page for this ticker|
|» benzinga_firm_id|string|false|none|The identifier used by Benzinga for this firm.|
|» benzinga_id|string|false|none|The identifier used by Benzinga for this record.|
|» benzinga_news_url|string|false|none|A link to the Benzinga articles page for this ticker|
|» company_name|string|false|none|The name of the company being rated.|
|» currency|string|false|none|The ISO 4217 currency code in which the price target is denominated.|
|» date|string|false|none|The calendar date (formatted as YYYY-MM-DD) when the rating was issued.|
|» firm|string|false|none|The name of the research firm or investment bank issuing the rating.|
|» importance|integer(int64)|false|none|A subjective indicator of the importance of the earnings event, on a scale from 0 (lowest) to 5 (highest).|
|» last_updated|string(date-time)|false|none|The timestamp (formatted as an ISO 8601 timestamp) when the rating was last updated in the system.|
|» notes|string|false|none|Additional context or commentary.|
|» previous_adjusted_price_target|number(double)|false|none|The previous price target adjusted for stock splits and dividends.|
|» previous_price_target|number(double)|false|none|The previous price target set by the analyst.|
|» previous_rating|string|false|none|The previous rating set by the analyst.|
|» price_percent_change|number(double)|false|none|The percentage change in price target if price target and previous price target exists|
|» price_target|number(double)|false|none|The current price target set by the analyst.|
|» price_target_action|string|false|none|The description of the directional change in price target. Possible values include: raises, lowers, maintains, announces, sets.|
|» rating|string|false|none|The current rating set by the analyst.|
|» rating_action|string|false|none|The description of the change in rating from the firm's last rating. Possible values include: downgrades, maintains, reinstates, reiterates, upgrades, assumes, initiates_coverage_on, terminates_coverage_on, removes, suspends, firm_dissolved.|
|» ticker|string|false|none|The stock symbol of the company being rated.|
|» time|string|false|none|The time (formatted as 24-hour HH:MM:SS UTC) when the rating was issued.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_benzinga_v2_news

<a id="opIdget_benzinga_v2_news"></a>

> Code samples

```bash
curl "https://api.polygon.io/benzinga/v2/news?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /benzinga/v2/news`

A comprehensive news article database from Benzinga, containing detailed information about financial news articles including metadata, content, and associated financial information.

<h3 id="getbenzingav2news-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|published|query|string|false|The timestamp (formatted as an ISO 8601 timestamp) when the news article was originally published. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|published.gt|query|string|false|Filter greater than the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|published.gte|query|string|false|Filter greater than or equal to the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|published.lt|query|string|false|Filter less than the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|published.lte|query|string|false|Filter less than or equal to the value. Value must be an integer timestamp in seconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|channels|query|string|false|Filter for arrays that contain the value.|
|channels.all_of|query|string|false|Filter for arrays that contain all of the values. Multiple values can be specified by using a comma separated list.|
|channels.any_of|query|string|false|Filter for arrays that contain any of the values. Multiple values can be specified by using a comma separated list.|
|tags|query|string|false|Filter for arrays that contain the value.|
|tags.all_of|query|string|false|Filter for arrays that contain all of the values. Multiple values can be specified by using a comma separated list.|
|tags.any_of|query|string|false|Filter for arrays that contain any of the values. Multiple values can be specified by using a comma separated list.|
|author|query|string|false|The name of the journalist or entity that authored the news article.|
|author.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|author.gt|query|string|false|Filter greater than the value.|
|author.gte|query|string|false|Filter greater than or equal to the value.|
|author.lt|query|string|false|Filter less than the value.|
|author.lte|query|string|false|Filter less than or equal to the value.|
|stocks|query|string|false|Filter for arrays that contain the value.|
|stocks.all_of|query|string|false|Filter for arrays that contain all of the values. Multiple values can be specified by using a comma separated list.|
|stocks.any_of|query|string|false|Filter for arrays that contain any of the values. Multiple values can be specified by using a comma separated list.|
|tickers|query|string|false|Filter for arrays that contain the value.|
|tickers.all_of|query|string|false|Filter for arrays that contain all of the values. Multiple values can be specified by using a comma separated list.|
|tickers.any_of|query|string|false|Filter for arrays that contain any of the values. Multiple values can be specified by using a comma separated list.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'published' if not specified. The sort order defaults to 'desc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "author": "Adam Eckert",
      "benzinga_id": 39046904,
      "body": "<p><strong>CAVA Group Inc</strong> (NYSE:<a class=\"ticker\" href=\"https://www.benzinga.com/stock/CAVA#NYSE\">CAVA</a>) reported financial results for the first quarter of fiscal 2024 after market close on Tuesday. Here&#8217;s a look at the <a href=\"https://www.benzinga.com/pressreleases/24/05/b39046606/cava-group-reports-first-quarter-2024-results\">key metrics from the quarter</a>.</p>",
      "channels": [
        "earnings",
        "news",
        "restaurants",
        "after-hours center",
        "movers"
      ],
      "images": [
        "https://cdn.benzinga.com/files/imagecache/250x187xUP/images/story/2024/05/28/CAVA-group.jpeg",
        "https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/05/28/CAVA-group.jpeg",
        "https://cdn.benzinga.com/files/imagecache/2048x1536xUP/images/story/2024/05/28/CAVA-group.jpeg"
      ],
      "last_updated": "2024-05-28T20:27:42Z",
      "published": "2024-05-28T20:27:41Z",
      "tags": [
        "why it's moving"
      ],
      "teaser": "Cava&#39;s first-quarter revenue increased 30.3% year-over-year to $256.3 million, which beat the consensus estimate of $245.935 million, according to Benzinga Pro.",
      "tickers": [
        "CAVA"
      ],
      "title": "Cava Group Q1 Earnings: Revenue Beat, EPS Beat, Guidance Raise, Continued Investments In Scalable Infrastructure And More",
      "url": "https://www.benzinga.com/news/earnings/24/05/39046904/cava-group-q1-earnings-revenue-beat-eps-beat-guidance-raise-continued-investments-in-scalable-infra"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getbenzingav2news-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getbenzingav2news-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» author|string|true|none|The name of the journalist or entity that authored the news article.|
|» benzinga_id|integer(int64)|true|none|The identifier used by Benzinga for this record.|
|» body|string|false|none|The full text content of the news article.|
|» channels|[string]|false|none|A list of categories or topics that the article belongs to (e.g., 'News', 'Price Target').|
|» images|[string]|false|none|A list of images associated with the article.|
|» last_updated|string(date-time)|true|none|The timestamp (formatted as an ISO 8601 timestamp) when the news article was last updated in the system.|
|» published|string(date-time)|true|none|The timestamp (formatted as an ISO 8601 timestamp) when the news article was originally published.|
|» tags|[string]|false|none|A list of tags that describe the themes or content of the article.|
|» teaser|string|false|none|A short summary or lead-in to the news article's content.|
|» tickers|[string]|false|none|A list of stock or crypto tickers mentioned in the article.|
|» title|string|true|none|The headline of the news article.|
|» url|string|true|none|The direct link to the source of the news article.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-fable">fable</h1>

## get_consumer-spending_eu_v1_merchant-aggregates

<a id="opIdget_consumer-spending_eu_v1_merchant-aggregates"></a>

> Code samples

```bash
curl "https://api.polygon.io/consumer-spending/eu/v1/merchant-aggregates?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /consumer-spending/eu/v1/merchant-aggregates`

Aggregated consumer transactions from European credit card panels, structured for flexible analysis and faster access to insights. Each row represents daily credit card, debit card, or open banking transactions (7-day lag from transaction date) at a tagged merchant or payment processor, split across Currency, Country, Online/Offline, and Credit/Debit dimensions. Includes ticker (Bloomberg standard) and industry mapping for ~250 US public companies across 6 European countries (UK, DE, FR, IT, ES, AT). Open banking data achieves >85% fill rate at 7 days. User counts provided across 8 and 28-day windows enable custom normalization. NOTE: Individual accounts have a 30-day minimum lag from transaction_date for licensing compliance. Data returned reflects the latest available values, including any corrections from the data provider.

<h3 id="getconsumer-spendingeuv1merchant-aggregates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transaction_date|query|string|false|The calendar date when the consumer transactions occurred. Value must be formatted 'yyyy-mm-dd'.|
|transaction_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|transaction_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|transaction_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|transaction_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|name|query|string|false|The merchant or entity name for this aggregate (lowercase). When type is 'merchant', this value can be used as the lookup_name in the merchant-hierarchy endpoint to retrieve full corporate hierarchy details.|
|name.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|name.gt|query|string|false|Filter greater than the value.|
|name.gte|query|string|false|Filter greater than or equal to the value.|
|name.lt|query|string|false|Filter less than the value.|
|name.lte|query|string|false|Filter less than or equal to the value.|
|user_country|query|string|false|Country of consumer's residence (ISO codes). Available countries: UK, DE, FR, ES, IT, AT. Values outside these are mapped to 'unknown'.|
|user_country.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|channel|query|string|false|Transaction channel. Possible values: online, offline, bnpl (buy now pay later platforms such as Scala, Klarna, Zilch).|
|channel.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|consumer_type|query|string|false|The panel the account is sourced from. Possible values: consumer_credit, consumer_debit, open_banking.|
|consumer_type.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|parent_name|query|string|false|Merchant's parent business name (Title Case). Useful for aggregating transactions across subsidiary brands. Also available in the merchant-hierarchy endpoint for full corporate structure.|
|parent_name.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|parent_name.gt|query|string|false|Filter greater than the value.|
|parent_name.gte|query|string|false|Filter greater than or equal to the value.|
|parent_name.lt|query|string|false|Filter less than the value.|
|parent_name.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '5000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'transaction_date' if not specified. The sort order defaults to 'desc' if not specified.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|user_country|UK|
|user_country|DE|
|user_country|FR|
|user_country|ES|
|user_country|IT|
|user_country|AT|
|user_country|unknown|
|user_country.any_of|UK|
|user_country.any_of|DE|
|user_country.any_of|FR|
|user_country.any_of|ES|
|user_country.any_of|IT|
|user_country.any_of|AT|
|user_country.any_of|unknown|
|channel|online|
|channel|offline|
|channel|bnpl|
|channel.any_of|online|
|channel.any_of|offline|
|channel.any_of|bnpl|
|consumer_type|consumer_credit|
|consumer_type|consumer_debit|
|consumer_type|open_banking|
|consumer_type.any_of|consumer_credit|
|consumer_type.any_of|consumer_debit|
|consumer_type.any_of|open_banking|

> Example responses

> 200 Response

```json
{
  "request_id": "c38af84c88ba484cb8430ba1511b1f24",
  "results": [
    {
      "channel": "offline",
      "consumer_type": "open_banking",
      "eight_day_rolling_category_accounts": 40346,
      "eight_day_rolling_total_accounts": 463648,
      "mcc_group": "memberships & organizations",
      "merchant_industry": "Leisure Clubs & Facilities",
      "merchant_ticker": "0206472D US",
      "name": "zumba fitness",
      "parent_name": "Zumba Fitness Llc",
      "published_date": "2026-01-25",
      "spend_in_distinct_account_key_count": 0,
      "spend_in_spend": 0,
      "spend_in_transaction_count": 0,
      "spend_out_distinct_account_key_count": 1,
      "spend_out_spend": -3,
      "spend_out_transaction_count": 1,
      "total_accounts": 1,
      "total_spend": -3,
      "total_transactions": 1,
      "transaction_currency": "GBP",
      "transaction_date": "2026-01-18",
      "twenty_eight_day_rolling_category_accounts": 91642,
      "twenty_eight_day_rolling_total_accounts": 524917,
      "type": "merchant",
      "user_country": "UK"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getconsumer-spendingeuv1merchant-aggregates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getconsumer-spendingeuv1merchant-aggregates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» channel|string|false|none|Transaction channel. Possible values: online, offline, bnpl (buy now pay later platforms such as Scala, Klarna, Zilch).|
|» consumer_type|string|false|none|The panel the account is sourced from. Possible values: consumer_credit, consumer_debit, open_banking.|
|» eight_day_rolling_category_accounts|integer(int64)|false|none|The count of unique consumer accounts active for a given country, consumer type, and that transacted in this merchant category (MCC Group) over the prior 8 days. Used for short-term normalization calculations (e.g., spend per 1000 panelists = (total_spend / eight_day_rolling_category_accounts) * 1000).|
|» eight_day_rolling_total_accounts|integer(int64)|false|none|The count of unique consumer accounts active for a given country and consumer type that had any transaction activity (across all categories) over the prior 8 days. Provides a baseline for total panel size.|
|» mcc_group|string|false|none|Merchant category code group associated with the merchant or payment processor.|
|» merchant_industry|string|false|none|Industry name based on GICS/BICS/ICB data classification for the merchant.|
|» merchant_ticker|string|false|none|Stock ticker associated with the merchant (~250 US public companies mapped). Uses Bloomberg tickers and they are point in time.|
|» name|string|false|none|The merchant or entity name for this aggregate (lowercase). When type is 'merchant', this value can be used as the lookup_name in the merchant-hierarchy endpoint to retrieve full corporate hierarchy details.|
|» parent_name|string|false|none|Merchant's parent business name (Title Case). Useful for aggregating transactions across subsidiary brands. Also available in the merchant-hierarchy endpoint for full corporate structure.|
|» published_date|string(date)|false|none|The date when this data version was published. For original data, this is approximately 7 days after transaction_date.|
|» spend_in_distinct_account_key_count|integer(int64)|false|none|The count of distinct account keys (unique consumer accounts) with inbound transactions.|
|» spend_in_spend|number(double)|false|none|The total inbound transaction amount (refunds, returns, credits) in the specified currency for this aggregation. Values are positive, representing money flowing back into consumer accounts.|
|» spend_in_transaction_count|integer(int64)|false|none|The count of inbound transactions (refunds, returns).|
|» spend_out_distinct_account_key_count|integer(int64)|false|none|The count of distinct account keys (unique consumer accounts) with outbound transactions.|
|» spend_out_spend|number(double)|false|none|The total outbound transaction amount (money spent by consumers) in the specified currency for this aggregation. Values are negative, representing money flowing out of consumer accounts.|
|» spend_out_transaction_count|integer(int64)|false|none|The count of outbound transactions (purchases, payments).|
|» total_accounts|integer(int64)|false|none|The total count of distinct consumer accounts with any transaction activity for this aggregation.|
|» total_spend|number(double)|false|none|Sum of spend_out_spend and spend_in_spend. Typically negative (net outflow). A positive value indicates refunds exceeded new spending for this aggregation.|
|» total_transactions|integer(int64)|false|none|The total count of all transactions (outbound + inbound).|
|» transaction_currency|string|false|none|ISO currency code for the transaction (base card/account currency). Always EUR or GBP in this dataset. All spend amounts are denominated in this currency.|
|» transaction_date|string(date)|false|none|The calendar date when the consumer transactions occurred.|
|» twenty_eight_day_rolling_category_accounts|integer(int64)|false|none|The count of unique consumer accounts active for a given country, consumer type, and that transacted in this merchant category (MCC Group) over the prior 28 days. Used for longer-term normalization calculations.|
|» twenty_eight_day_rolling_total_accounts|integer(int64)|false|none|The count of unique consumer accounts active for a given country and consumer type that had any transaction activity (across all categories) over the prior 28 days. Provides a longer-term baseline for total panel size.|
|» type|string|false|none|The type of aggregation. Can be 'merchant' or 'payment_processor'.|
|» user_country|string|true|none|Country of consumer's residence (ISO codes). Available countries: UK, DE, FR, ES, IT, AT. Values outside these are mapped to 'unknown'.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_consumer-spending_eu_v1_merchant-hierarchy

<a id="opIdget_consumer-spending_eu_v1_merchant-hierarchy"></a>

> Code samples

```bash
curl "https://api.polygon.io/consumer-spending/eu/v1/merchant-hierarchy?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /consumer-spending/eu/v1/merchant-hierarchy`

Reference data mapping merchants to parent companies, tickers, sectors, and industries across Fable's European consumer transaction panel. Each row represents a single merchant with its corporate hierarchy and classification metadata. Weekly snapshots contain ~3,500 merchants covering ~250 US public companies. Use lookup_name to join with the name field from the merchant-aggregates endpoint, filtering by active_from and active_to to match a specific transaction_date (e.g., active_from.lte=2025-06-15&active_to.gte=2025-06-15).

<h3 id="getconsumer-spendingeuv1merchant-hierarchy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lookup_name|query|string|false|Lowercase merchant tag used for joining with the merchant-aggregates endpoint name field (e.g., 'asda', 'amazon').|
|lookup_name.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|lookup_name.gt|query|string|false|Filter greater than the value.|
|lookup_name.gte|query|string|false|Filter greater than or equal to the value.|
|lookup_name.lt|query|string|false|Filter less than the value.|
|lookup_name.lte|query|string|false|Filter less than or equal to the value.|
|ticker|query|string|false|Stock ticker associated with the merchant (~250 US public companies mapped). Uses Bloomberg standard.|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|listing_status|query|string|false|Whether the merchant is a publicly listed company or private. Possible values: public, private.|
|listing_status.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|active_from|query|string|false|Date this merchant hierarchy mapping became applicable. A value of 0001-01-01 indicates no known start date. Use with active_to to match against transaction_date from the merchant-aggregates endpoint to perform point-in-time queries. Value must be formatted 'yyyy-mm-dd'.|
|active_from.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|active_from.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|active_from.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|active_from.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|active_to|query|string|false|Date after which this merchant hierarchy mapping is no longer applicable due to a corporate action. A value of 9999-12-31 indicates the mapping is currently active. Value must be formatted 'yyyy-mm-dd'.|
|active_to.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|active_to.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|active_to.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|active_to.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'lookup_name' if not specified. The sort order defaults to 'asc' if not specified.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|listing_status|public|
|listing_status|private|
|listing_status.any_of|public|
|listing_status.any_of|private|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": "a1b2c3d4e5f6",
  "results": [
    {
      "active_from": "0001-01-01",
      "active_to": "9999-12-31",
      "category": "General Merchandise",
      "grandparent_name": "Amazon Inc",
      "grandparent_ticker": "AMZN US",
      "great_grandparent_name": "Amazon Inc",
      "great_grandparent_ticker": "AMZN US",
      "industry": "E-Commerce Discretionary",
      "industry_group": "Retail - Discretionary",
      "listing_status": "public",
      "lookup_name": "amazon",
      "normalized_name": "Amazon Inc",
      "parent_name": "Amazon Inc",
      "parent_ticker": "AMZN US",
      "sector": "Consumer Discretionary",
      "sub_industry": "E-Commerce Discretionary",
      "ticker": "AMZN US"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getconsumer-spendingeuv1merchant-hierarchy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getconsumer-spendingeuv1merchant-hierarchy-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» active_from|string(date)|false|none|Date this merchant hierarchy mapping became applicable. A value of 0001-01-01 indicates no known start date. Use with active_to to match against transaction_date from the merchant-aggregates endpoint to perform point-in-time queries.|
|» active_to|string(date)|false|none|Date after which this merchant hierarchy mapping is no longer applicable due to a corporate action. A value of 9999-12-31 indicates the mapping is currently active.|
|» category|string|false|none|Merchant category assigned by the data provider (Title Case, e.g., 'Groceries', 'General Merchandise', 'Travel'). Values are managed by the data provider and may expand over time.|
|» grandparent_name|string|false|none|Merchant's grandparent business name (Title Case).|
|» grandparent_ticker|string|false|none|Stock ticker of the merchant's grandparent company. Uses Bloomberg standard.|
|» great_grandparent_name|string|false|none|Merchant's great-grandparent business name (Title Case, top-level corporate entity).|
|» great_grandparent_ticker|string|false|none|Stock ticker of the merchant's great-grandparent company (top-level corporate entity). Uses Bloomberg standard.|
|» industry|string|false|none|Industry classification based on GICS/BICS/ICB standards.|
|» industry_group|string|false|none|Industry group classification based on GICS/BICS/ICB standards.|
|» listing_status|string|true|none|Whether the merchant is a publicly listed company or private. Possible values: public, private.|
|» lookup_name|string|false|none|Lowercase merchant tag used for joining with the merchant-aggregates endpoint name field (e.g., 'asda', 'amazon').|
|» normalized_name|string|false|none|Cleaned, standardized merchant display name (Title Case, e.g., 'Asda', 'Amazon').|
|» parent_name|string|false|none|Merchant's parent business name (Title Case). Useful for aggregating transactions across subsidiary brands.|
|» parent_ticker|string|false|none|Stock ticker of the merchant's parent company. Uses Bloomberg standard.|
|» sector|string|false|none|Sector classification based on GICS/BICS/ICB standards.|
|» sub_industry|string|false|none|Sub-industry classification based on GICS/BICS/ICB standards.|
|» ticker|string|false|none|Stock ticker associated with the merchant (~250 US public companies mapped). Uses Bloomberg standard.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-globalcrypto">global_crypto</h1>

## get_crypto_v1_exchanges

<a id="opIdget_crypto_v1_exchanges"></a>

> Code samples

```bash
curl "https://api.polygon.io/crypto/v1/exchanges?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /crypto/v1/exchanges`

Global cryptocurrency exchanges and digital asset trading platforms, including major centralized exchanges (Coinbase, Binance, Bitfinex, etc.) that facilitate trading of cryptocurrencies and digital tokens worldwide.

<h3 id="getcryptov1exchanges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '1000'.|

> Example responses

> 200 Response

```json
{
  "count": 2,
  "request_id": 1,
  "results": [
    {
      "id": "1",
      "name": "Coinbase",
      "type": "exchange",
      "url": "https://www.coinbase.com"
    },
    {
      "id": "10",
      "name": "Binance",
      "type": "exchange",
      "url": "https://www.binance.us/"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getcryptov1exchanges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getcryptov1exchanges-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» id|string|true|none|Numeric identifier for the cryptocurrency exchange or trading platform.|
|» name|string|true|none|Full official name of the cryptocurrency exchange or digital asset trading platform.|
|» type|string|true|none|Type of crypto venue - 'exchange' for cryptocurrency exchanges and digital asset trading platforms.|
|» url|string|false|none|Official website URL of the cryptocurrency exchange.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-etfglobal">etfglobal</h1>

## get_etf-global_v1_analytics

<a id="opIdget_etf-global_v1_analytics"></a>

> Code samples

```bash
curl "https://api.polygon.io/etf-global/v1/analytics?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /etf-global/v1/analytics`

ETF Global analytics data containing risk scores, reward metrics, and quantitative analysis for ETF composite tickers.

<h3 id="getetf-globalv1analytics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|composite_ticker|query|string|false|The stock ticker symbol used to identify this ETF product on exchanges.|
|composite_ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|composite_ticker.gt|query|string|false|Filter greater than the value.|
|composite_ticker.gte|query|string|false|Filter greater than or equal to the value.|
|composite_ticker.lt|query|string|false|Filter less than the value.|
|composite_ticker.lte|query|string|false|Filter less than or equal to the value.|
|processed_date|query|string|false|The date showing when ETF Global received and processed the data. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|effective_date|query|string|false|The date showing when the information was accurate or valid; some issuers, such as Vanguard, release their data on a delay, so the effective_date can be several weeks earlier than the processed_date. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|risk_total_score|query|number(double)|false|ETF Global's proprietary Red Diamond overall risk assessment score for the ETF. Value must be a floating point number.|
|risk_total_score.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|risk_total_score.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|risk_total_score.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|risk_total_score.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|reward_score|query|number(double)|false|ETF Global's proprietary Green Diamond score measuring the potential reward and return prospects of the ETF. Value must be a floating point number.|
|reward_score.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|reward_score.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|reward_score.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|reward_score.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|quant_total_score|query|number(double)|false|ETF Global's comprehensive quantitative analysis score combining all quantitative factors. Value must be a floating point number.|
|quant_total_score.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|quant_total_score.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|quant_total_score.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|quant_total_score.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|quant_grade|query|string|false|Letter grade summarizing the ETF's overall quantitative assessment, where A = 71-100, B = 56-70, etc.|
|quant_grade.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|quant_grade.gt|query|string|false|Filter greater than the value.|
|quant_grade.gte|query|string|false|Filter greater than or equal to the value.|
|quant_grade.lt|query|string|false|Filter less than the value.|
|quant_grade.lte|query|string|false|Filter less than or equal to the value.|
|quant_composite_technical|query|number(double)|false|Combined technical analysis score aggregating short, intermediate, and long-term technical factors. Value must be a floating point number.|
|quant_composite_technical.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|quant_composite_technical.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|quant_composite_technical.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|quant_composite_technical.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|quant_composite_sentiment|query|number(double)|false|Overall market sentiment score combining put/call ratios, short interest, and implied volatility. Value must be a floating point number.|
|quant_composite_sentiment.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|quant_composite_sentiment.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|quant_composite_sentiment.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|quant_composite_sentiment.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|quant_composite_behavioral|query|number(double)|false|Behavioral analysis score measuring investor psychology and market behavior patterns. Value must be a floating point number.|
|quant_composite_behavioral.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|quant_composite_behavioral.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|quant_composite_behavioral.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|quant_composite_behavioral.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|quant_composite_fundamental|query|number(double)|false|Overall fundamental analysis score combining P/E, P/CF, P/B, and dividend yield metrics. Value must be a floating point number.|
|quant_composite_fundamental.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|quant_composite_fundamental.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|quant_composite_fundamental.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|quant_composite_fundamental.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|quant_composite_global|query|number(double)|false|Overall global theme score combining sector and country analysis for macro investment views. Value must be a floating point number.|
|quant_composite_global.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|quant_composite_global.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|quant_composite_global.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|quant_composite_global.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|quant_composite_quality|query|number(double)|false|Overall quality assessment score combining liquidity, diversification, and issuing firm factors. Value must be a floating point number.|
|quant_composite_quality.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|quant_composite_quality.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|quant_composite_quality.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|quant_composite_quality.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '5000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'composite_ticker' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "composite_ticker": "SPY",
      "effective_date": "2025-09-19",
      "processed_date": "2025-09-19",
      "quant_composite_behavioral": 67.1535,
      "quant_composite_fundamental": 1.2,
      "quant_composite_global": 52.9,
      "quant_composite_quality": 75.9,
      "quant_composite_sentiment": 54.6,
      "quant_composite_technical": 79.7,
      "quant_fundamental_div": 4.7,
      "quant_fundamental_pb": 0,
      "quant_fundamental_pcf": 0,
      "quant_fundamental_pe": 0,
      "quant_global_country": 85.4,
      "quant_global_sector": 20.4,
      "quant_grade": "D",
      "quant_quality_diversification": 29.3,
      "quant_quality_firm": 98.3,
      "quant_quality_liquidity": 100,
      "quant_sentiment_iv": 23,
      "quant_sentiment_pc": 88.9,
      "quant_sentiment_si": 51.6,
      "quant_technical_it": 79,
      "quant_technical_lt": 78.7,
      "quant_technical_st": 83.1,
      "quant_total_score": 40.2,
      "reward_score": 3.12,
      "risk_country": 1.46,
      "risk_deviation": 7.68,
      "risk_efficiency": 1.85,
      "risk_liquidity": 2.5,
      "risk_structure": 2.37,
      "risk_total_score": 9.22,
      "risk_volatility": 4.66
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getetf-globalv1analytics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getetf-globalv1analytics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» composite_ticker|string|false|none|The stock ticker symbol used to identify this ETF product on exchanges.|
|» effective_date|string(date)|false|none|The date showing when the information was accurate or valid; some issuers, such as Vanguard, release their data on a delay, so the effective_date can be several weeks earlier than the processed_date.|
|» processed_date|string(date)|false|none|The date showing when ETF Global received and processed the data.|
|» quant_composite_behavioral|number(double)|false|none|Behavioral analysis score measuring investor psychology and market behavior patterns.|
|» quant_composite_fundamental|number(double)|false|none|Overall fundamental analysis score combining P/E, P/CF, P/B, and dividend yield metrics.|
|» quant_composite_global|number(double)|false|none|Overall global theme score combining sector and country analysis for macro investment views.|
|» quant_composite_quality|number(double)|false|none|Overall quality assessment score combining liquidity, diversification, and issuing firm factors.|
|» quant_composite_sentiment|number(double)|false|none|Overall market sentiment score combining put/call ratios, short interest, and implied volatility.|
|» quant_composite_technical|number(double)|false|none|Combined technical analysis score aggregating short, intermediate, and long-term technical factors.|
|» quant_fundamental_div|number(double)|false|none|Fundamental analysis score based on dividend yields of the ETF's underlying securities.|
|» quant_fundamental_pb|number(double)|false|none|Fundamental analysis score based on price-to-book value ratios of the ETF's holdings.|
|» quant_fundamental_pcf|number(double)|false|none|Fundamental analysis score based on price-to-cash-flow ratios of the ETF's underlying assets.|
|» quant_fundamental_pe|number(double)|false|none|Fundamental analysis score based on price-to-earnings ratios of the ETF's underlying holdings.|
|» quant_global_country|number(double)|false|none|Quantitative score analyzing global country themes and country-specific market factors.|
|» quant_global_sector|number(double)|false|none|Quantitative score analyzing global sector themes and sector-specific performance factors.|
|» quant_grade|string|false|none|Letter grade summarizing the ETF's overall quantitative assessment, where A = 71-100, B = 56-70, etc.|
|» quant_quality_diversification|number(double)|false|none|Quality assessment score evaluating the diversification benefits and risk distribution of the ETF.|
|» quant_quality_firm|number(double)|false|none|Quality assessment score evaluating the reputation and capabilities of the ETF's issuing firm.|
|» quant_quality_liquidity|number(double)|false|none|Quality assessment score measuring the liquidity characteristics and trading ease of the ETF.|
|» quant_sentiment_iv|number(double)|false|none|Market sentiment score derived from implied volatility levels in options markets.|
|» quant_sentiment_pc|number(double)|false|none|Market sentiment score derived from put/call option ratios and options activity.|
|» quant_sentiment_si|number(double)|false|none|Market sentiment score based on short interest levels and short selling activity.|
|» quant_technical_it|number(double)|false|none|Intermediate-term technical analysis score evaluating medium-term price trends.|
|» quant_technical_lt|number(double)|false|none|Long-term technical analysis score assessing extended price trend patterns.|
|» quant_technical_st|number(double)|false|none|Short-term technical analysis score based on recent price movements and trading patterns.|
|» quant_total_score|number(double)|false|none|ETF Global's comprehensive quantitative analysis score combining all quantitative factors.|
|» reward_score|number(double)|false|none|ETF Global's proprietary Green Diamond score measuring the potential reward and return prospects of the ETF.|
|» risk_country|number(double)|false|none|A component score assessing country-specific risks based on the ETF's geographic exposure.|
|» risk_deviation|number(double)|false|none|A component score measuring how much the ETF deviates from expected performance.|
|» risk_efficiency|number(double)|false|none|A component score assessing the operational efficiency and cost-effectiveness of the ETF.|
|» risk_liquidity|number(double)|false|none|A component score measuring the liquidity risk and ease of trading the ETF.|
|» risk_structure|number(double)|false|none|A component score evaluating risks related to the ETF's structural design and mechanics.|
|» risk_total_score|number(double)|false|none|ETF Global's proprietary Red Diamond overall risk assessment score for the ETF.|
|» risk_volatility|number(double)|false|none|A component score measuring the volatility risk of the ETF's price movements.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_etf-global_v1_constituents

<a id="opIdget_etf-global_v1_constituents"></a>

> Code samples

```bash
curl "https://api.polygon.io/etf-global/v1/constituents?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /etf-global/v1/constituents`

ETF Global constituents data containing detailed information about the securities held within ETFs, including weights, market values, and security identifiers.

<h3 id="getetf-globalv1constituents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|composite_ticker|query|string|false|The stock ticker symbol of the ETF that holds these constituent securities.|
|composite_ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|composite_ticker.gt|query|string|false|Filter greater than the value.|
|composite_ticker.gte|query|string|false|Filter greater than or equal to the value.|
|composite_ticker.lt|query|string|false|Filter less than the value.|
|composite_ticker.lte|query|string|false|Filter less than or equal to the value.|
|constituent_ticker|query|string|false|The stock ticker symbol of the individual security held within the ETF.|
|constituent_ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|constituent_ticker.gt|query|string|false|Filter greater than the value.|
|constituent_ticker.gte|query|string|false|Filter greater than or equal to the value.|
|constituent_ticker.lt|query|string|false|Filter less than the value.|
|constituent_ticker.lte|query|string|false|Filter less than or equal to the value.|
|effective_date|query|string|false|The date showing when the information was accurate or valid; some issuers, such as Vanguard, release their data on a delay, so the effective_date can be several weeks earlier than the processed_date. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|processed_date|query|string|false|The date showing when ETF Global received and processed the data. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|us_code|query|string|false|A unique identifier code for the constituent security in US markets.|
|us_code.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|us_code.gt|query|string|false|Filter greater than the value.|
|us_code.gte|query|string|false|Filter greater than or equal to the value.|
|us_code.lt|query|string|false|Filter less than the value.|
|us_code.lte|query|string|false|Filter less than or equal to the value.|
|isin|query|string|false|The International Securities Identification Number, a global standard for identifying securities.|
|isin.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|isin.gt|query|string|false|Filter greater than the value.|
|isin.gte|query|string|false|Filter greater than or equal to the value.|
|isin.lt|query|string|false|Filter less than the value.|
|isin.lte|query|string|false|Filter less than or equal to the value.|
|figi|query|string|false|The Financial Instrument Global Identifier, an open standard for uniquely identifying financial instruments.|
|figi.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|figi.gt|query|string|false|Filter greater than the value.|
|figi.gte|query|string|false|Filter greater than or equal to the value.|
|figi.lt|query|string|false|Filter less than the value.|
|figi.lte|query|string|false|Filter less than or equal to the value.|
|sedol|query|string|false|The Stock Exchange Daily Official List code, primarily used for securities trading in the UK.|
|sedol.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|sedol.gt|query|string|false|Filter greater than the value.|
|sedol.gte|query|string|false|Filter greater than or equal to the value.|
|sedol.lt|query|string|false|Filter less than the value.|
|sedol.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '5000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'composite_ticker' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "asset_class": "Equity",
      "composite_ticker": "SPY",
      "constituent_name": "CAESARS ENTERTAINMENT INC COMMON STOCK",
      "constituent_rank": 42,
      "constituent_ticker": "CZR",
      "country_of_exchange": "US",
      "currency_traded": "USD",
      "effective_date": "2025-09-18",
      "figi": "BBG0074Q3NK6",
      "isin": "US12769G1004",
      "market_value": 63308625.6,
      "processed_date": "2025-09-19",
      "security_type": "Common Stock",
      "sedol": "BMWWGB0",
      "shares_held": 2398054,
      "us_code": "12769G100",
      "weight": 0.0000958005
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getetf-globalv1constituents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getetf-globalv1constituents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» asset_class|string|false|none|The broad category of asset type, such as Equity, Corporate Bond, Municipal Bond, etc.|
|» composite_ticker|string|false|none|The stock ticker symbol of the ETF that holds these constituent securities.|
|» constituent_name|string|false|none|The full company or security name of the constituent holding.|
|» constituent_rank|integer(int64)|true|none|The rank of this constituent within the ETF for a given effective_date, ordered by weight (descending), market_value (descending), and constituent_ticker (ascending). A rank of 1 indicates the largest holding.|
|» constituent_ticker|string|false|none|The stock ticker symbol of the individual security held within the ETF.|
|» country_of_exchange|string|false|none|The country where the exchange that lists this constituent security is located.|
|» currency_traded|string|false|none|The local currency in which this constituent security is denominated and traded.|
|» effective_date|string(date)|true|none|The date showing when the information was accurate or valid; some issuers, such as Vanguard, release their data on a delay, so the effective_date can be several weeks earlier than the processed_date.|
|» exchange|string|false|none|The name of the stock exchange where this constituent security is primarily traded.|
|» figi|string|false|none|The Financial Instrument Global Identifier, an open standard for uniquely identifying financial instruments.|
|» isin|string|false|none|The International Securities Identification Number, a global standard for identifying securities.|
|» market_value|number(double)|false|none|The total market value of this constituent position held by the ETF.|
|» processed_date|string(date)|false|none|The date showing when ETF Global received and processed the data.|
|» security_type|string|false|none|The specific classification of security type using ETF Global's taxonomy, such as Common Equity, Domestic, Global, etc.|
|» sedol|string|false|none|The Stock Exchange Daily Official List code, primarily used for securities trading in the UK.|
|» shares_held|number(double)|false|none|The number of shares of this constituent security that the ETF currently owns.|
|» us_code|string|false|none|A unique identifier code for the constituent security in US markets.|
|» weight|number(double)|false|none|The constituent's weight in the ETF's portfolio, as a decimal fraction (0.0789 = 7.89%). Short positions are negative. For most funds the weights sum to about 1; leveraged and inverse funds vary. A few constituents have no weight, so a sum can fall short.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_etf-global_v1_fund-flows

<a id="opIdget_etf-global_v1_fund-flows"></a>

> Code samples

```bash
curl "https://api.polygon.io/etf-global/v1/fund-flows?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /etf-global/v1/fund-flows`

ETF Global fund flow data containing information about ETF share movements, net asset values, and fund flow metrics.

<h3 id="getetf-globalv1fund-flows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|processed_date|query|string|false|The date showing when ETF Global received and processed the data. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|effective_date|query|string|false|The date showing when the information was accurate or valid; some issuers, such as Vanguard, release their data on a delay, so the effective_date can be several weeks earlier than the processed_date. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|composite_ticker|query|string|false|The stock ticker symbol used to identify this ETF on exchanges.|
|composite_ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|composite_ticker.gt|query|string|false|Filter greater than the value.|
|composite_ticker.gte|query|string|false|Filter greater than or equal to the value.|
|composite_ticker.lt|query|string|false|Filter less than the value.|
|composite_ticker.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '5000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'composite_ticker' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "composite_ticker": "SPY",
      "effective_date": "2025-01-29",
      "fund_flow": -30235124.7,
      "nav": 601.877341,
      "processed_date": "2025-01-29",
      "shares_outstanding": 1047232116
    },
    {
      "composite_ticker": "SPY",
      "effective_date": "2025-01-30",
      "fund_flow": -2798729635.65,
      "nav": 605.0574,
      "processed_date": "2025-01-30",
      "shares_outstanding": 1042582116
    },
    {
      "composite_ticker": "SPY",
      "effective_date": "2025-01-31",
      "fund_flow": -3358068570,
      "nav": 602.044248,
      "processed_date": "2025-01-31",
      "shares_outstanding": 1037032116
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getetf-globalv1fund-flows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getetf-globalv1fund-flows-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» composite_ticker|string|false|none|The stock ticker symbol used to identify this ETF on exchanges.|
|» effective_date|string(date)|false|none|The date showing when the information was accurate or valid; some issuers, such as Vanguard, release their data on a delay, so the effective_date can be several weeks earlier than the processed_date.|
|» fund_flow|number(double)|false|none|The net daily capital flow into or out of the ETF through the creation and redemption process, where positive values indicate inflows and negative values indicate outflows.|
|» nav|number(double)|false|none|The net asset value per share, representing the per-share value of the ETF's underlying holdings.|
|» processed_date|string(date)|false|none|The date showing when ETF Global received and processed the data.|
|» shares_outstanding|number(double)|false|none|The total number of ETF shares currently issued and outstanding in the market.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_etf-global_v1_profiles

<a id="opIdget_etf-global_v1_profiles"></a>

> Code samples

```bash
curl "https://api.polygon.io/etf-global/v1/profiles?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /etf-global/v1/profiles`

ETF Global industry profile data containing comprehensive ETF metadata including financial metrics, operational details, and exposure information.

<h3 id="getetf-globalv1profiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|processed_date|query|string|false|The date showing when ETF Global received and processed the data. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|effective_date|query|string|false|The date showing when the information was accurate or valid; some issuers, such as Vanguard, release their data on a delay, so the effective_date can be several weeks earlier than the processed_date. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|composite_ticker|query|string|false|The stock ticker symbol used to identify this ETF product on exchanges.|
|composite_ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|composite_ticker.gt|query|string|false|Filter greater than the value.|
|composite_ticker.gte|query|string|false|Filter greater than or equal to the value.|
|composite_ticker.lt|query|string|false|Filter less than the value.|
|composite_ticker.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '5000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'composite_ticker' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "administrator": "State Street Bank and Trust Company",
      "advisor": "SSgA Funds Management, Inc.",
      "asset_class": "Equity",
      "aum": 624531939442.66,
      "avg_daily_trading_volume": 51287737.3,
      "bid_ask_spread": 0.000042,
      "call_volume": 4797339,
      "category": "Size and Style",
      "composite_ticker": "SPY",
      "creation_fee": 3000,
      "creation_unit_size": 50000,
      "currency_exposure": {
        "usd": 1.003
      },
      "custodian": "State Street Bank and Trust Company",
      "description": "SPDR S&P 500 ETF Trust",
      "development_class": "Developed Markets",
      "discount_premium": 0.136123,
      "distribution_frequency": "Q",
      "distributor": "ALPS Distributors, Inc.",
      "effective_date": "2025-01-02",
      "fee_waivers": 0,
      "fiscal_year_end": "31-Aug",
      "focus": "Large Cap",
      "geographic_exposure": {
        "bm": 0.001,
        "ch": 0.003,
        "ie": 0.021,
        "je": 0.001,
        "lr": 0.001,
        "nl": 0.001,
        "pa": 0.001,
        "us": 0.967
      },
      "inception_date": "1993-01-22",
      "industry_exposure": {
        "aerospace_and_defense": 0.011,
        "air_freight_and_logistics": 0.004,
        "airlines": 0.002,
        "auto_components": 0,
        "automobiles": 0.024,
        "banks": 0.033,
        "beverages": 0.011,
        "biotechnology": 0.047,
        "building_products": 0.002,
        "capital_markets": 0.029,
        "cash_or_derivatives": 0.003,
        "chemicals": 0.007,
        "commercial_services_and_supplies": 0.004,
        "communications_equipment": 0.081,
        "construction_and_engineering": 0.001,
        "construction_materials": 0.001,
        "consumer_products": 0.001,
        "containers_and_packaging": 0.001,
        "distributors": 0.001,
        "diversified_consumer_services": 0.005,
        "diversified_financial_services": 0.029,
        "diversified_telecommunication_services": 0.009,
        "electrical_equipment": 0.009,
        "electronic_equipment_instruments_and_components": 0.001,
        "entertainment": 0.008,
        "equity_real_estate_investment": 0.001,
        "food_products": 0.006,
        "health_care_equipment_and_supplies": 0.031,
        "health_care_providers_and_services": 0.018,
        "health_care_technology": 0.003,
        "hotels,_restaurants_and_leisure": 0.001,
        "hotels_restaurants_and_leisure": 0.014,
        "household_durables": 0.004,
        "household_products": 0.011,
        "industrial_conglomerates": 0.005,
        "insurance": 0.035,
        "it_services": 0.021,
        "leisure_products": 0,
        "machinery": 0.013,
        "media": 0.077,
        "metals_and_mining": 0.003,
        "oil_gas_and_consumable_fuels": 0.031,
        "real_estate_management_and_development": 0.018,
        "renewable_energy": 0.001,
        "road_and_rail": 0.003,
        "semiconductors_and_semiconductor_equipment": 0.115,
        "software": 0.101,
        "specialty_retail": 0.082,
        "technology_hardware_storage_and_peripherals": 0.001,
        "textiles_apparel_and_luxury_goods": 0.003,
        "tobacco": 0.006,
        "trading_companies_and_distributors": 0.002,
        "transportation_infrastructure": 0.006,
        "utilities": 0.022
      },
      "industry_group_exposure": {
        "automobiles_and_components": 0.024,
        "banks": 0.033,
        "capital_goods": 0.045,
        "cash_or_derivatives": 0.003,
        "commercial_and_professional_services": 0.005,
        "consumer_durables_and_apparel": 0.007,
        "consumer_services": 0.02,
        "diversified_financials": 0.058,
        "energy": 0.032,
        "food_and_staples_retailing": 0.018,
        "food_beverage_and_tobacco": 0.023,
        "health_care_equipment_and_services": 0.046,
        "household_and_personal_products": 0.011,
        "insurance": 0.035,
        "materials": 0.013,
        "media_and_entertainment": 0.084,
        "pharmaceuticals_biotechnology_and_life_sciences": 0.053,
        "real_estate": 0.02,
        "retailing": 0.065,
        "semiconductors_and_semiconductor_equipment": 0.115,
        "software_and_services": 0.12,
        "technology_hardware_and_equipment": 0.084,
        "telecommunication_services": 0.009,
        "transportation": 0.002,
        "transportation_and_logistics": 0.012,
        "utilities": 0.022
      },
      "issuer": "SSgA",
      "lead_market_maker": "None",
      "leverage_style": "unleveraged",
      "levered_amount": 0,
      "listing_exchange": "NYSE Arca, Inc.",
      "management_classification": "passive",
      "management_fee": 0.0945,
      "net_expenses": 0.0945,
      "num_holdings": 504,
      "options_available": 1,
      "options_volume": 9346839,
      "other_expenses": 0,
      "primary_benchmark": "S&P 500 Index",
      "processed_date": "2025-01-02",
      "product_type": "etf",
      "put_call_ratio": 0.948338,
      "put_volume": 4549500,
      "region": "North America",
      "sector_exposure": {
        "cash_or_derivatives": 0.003,
        "communications": 0.094,
        "consumer_discretionary": 0.113,
        "consumer_staples": 0.054,
        "energy": 0.032,
        "financials": 0.131,
        "health_care": 0.099,
        "industrials": 0.068,
        "materials": 0.013,
        "real_estate": 0.02,
        "technology": 0.321,
        "utilities": 0.022
      },
      "short_interest": 106750000,
      "subindustry_exposure": {
        "advertising": 0.001,
        "aerospace_and_defense": 0.011,
        "agricultural_and_farm_machinery": 0.002,
        "agricultural_products": 0.001,
        "air_freight_and_logistics": 0.004,
        "airlines": 0.002,
        "alternative_carriers": 0.009,
        "apparel_accessories_and_luxury": 0.003,
        "apparel_retail": 0.005,
        "application_software": 0.024,
        "asset_management_and_custody_banks": 0.006,
        "auto_parts_and_equipment": 0,
        "automobile_manufacturers": 0.024,
        "automotive_retail": 0.004,
        "biotechnology": 0.047,
        "brewers": 0,
        "building_products": 0.002,
        "cable_and_satellite": 0.004,
        "cash_or_derivatives": 0.003,
        "casinos_and_gaming": 0.001,
        "commodity_chemicals": 0.001,
        "communications_equipment": 0.081,
        "construction_and_engineering": 0.001,
        "construction_machinery_and_heavy_trucks": 0.006,
        "construction_materials": 0.001,
        "consumer_electronics": 0.001,
        "consumer_finance": 0.029,
        "data_processing_and_outsourced_services": 0.006,
        "distillers_and_vintners": 0.001,
        "distributors": 0,
        "diversified_banks": 0.033,
        "diversified_chemicals": 0.002,
        "diversified_metals_and_mining": 0.001,
        "diversified_support_services": 0.001,
        "drug_retail": 0,
        "electric_utilities": 0.013,
        "electrical_components_and_equipment": 0.009,
        "electronic_components": 0.001,
        "electronic_equipment_and_instruments": 0,
        "electronic_manufacturing_services": 0,
        "environmental_and_facilities_services": 0.003,
        "fertilizers_and_agricultural_che": 0.001,
        "financial_exchanges_and_data": 0.006,
        "food_retail": 0.002,
        "gas_utilities": 0,
        "general_merchandise_stores": 0.002,
        "health_care_distributors": 0.003,
        "health_care_equipment": 0.014,
        "health_care_facilities": 0.001,
        "health_care_services": 0.004,
        "health_care_supplies": 0.003,
        "heavy_electrical_equipment": 0.001,
        "highways_and_railtracks": 0.005,
        "home_improvement_retail": 0.012,
        "homebuilding": 0.002,
        "hotels_resorts_and_cruise_lines": 0.004,
        "household_products": 0.011,
        "hypermarkets_and_super_centers": 0.016,
        "independent_power_producers_and_energy_traders": 0.001,
        "industrial_conglomerates": 0.005,
        "industrial_machinery": 0.005,
        "insurance_brokers": 0.005,
        "integrated_oil_and_gas": 0.014,
        "interactive_media_and_services": 0.067,
        "internet_and_direct_marketing_retail": 0.043,
        "internet_services_and_infrastruc": 0.004,
        "investment_banking_and_brokerage": 0.01,
        "it_consulting_and_other_services": 0.011,
        "leisure_facilities": 0,
        "leisure_products": 0.001,
        "life_and_health_insurance": 0.003,
        "life_sciences_tools_and_services": 0.014,
        "managed_health_care": 0.013,
        "metal_and_glass_containers": 0.001,
        "movies_and_entertainment": 0.012,
        "multiutilities": 0.006,
        "oil_and_gas_equipment_and_services": 0.002,
        "oil_and_gas_exploration_and_production": 0.007,
        "oil_and_gas_refining_and_marketing": 0.003,
        "oil_and_gas_storage_and_transporta": 0.004,
        "packaged_foods_and_meats": 0.006,
        "paper_packaging": 0.001,
        "precious_metals_and_minerals": 0.001,
        "property_and_casualty_insurance": 0.027,
        "publishing_and_broadcasting": 0,
        "railroads": 0.001,
        "real_estate_services": 0.001,
        "reinsurance": 0,
        "reit": 0.019,
        "renewable_energy_equipment": 0.001,
        "research_and_consulting_services": 0.002,
        "restaurants": 0.009,
        "security_and_alarm_services": 0.004,
        "semiconductors": 0.115,
        "soft_drinks": 0.01,
        "specialty_chemicals": 0.004,
        "specialty_stores": 0.001,
        "steel": 0.001,
        "systems_software": 0.078,
        "technology_hardware_storage_and_peripherals": 0.002,
        "tobacco": 0.006,
        "trading_companies_and_distributors": 0.002,
        "trucking": 0.004,
        "water_utilities": 0
      },
      "tax_classification": "Regulated Investment Company",
      "total_expenses": 0.0945,
      "transfer_agent": "State Street Bank and Trust Company",
      "trustee": "State Street Global Advisors Trust Company"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getetf-globalv1profiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getetf-globalv1profiles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» administrator|string|false|none|The administrator of the ETF.|
|» advisor|string|false|none|The investment advisor of the ETF.|
|» asset_class|string|false|none|The primary type of assets held by the ETF, such as equities, bonds, commodities, or other securities.|
|» aum|number(double)|false|none|The total assets under management, representing the current market value of all assets held by the ETF.|
|» avg_daily_trading_volume|number(double)|false|none|The average number of shares traded daily over the past month, indicating liquidity and investor interest.|
|» bid_ask_spread|number(double)|false|none|The average intraday bid-ask spread as a percentage, calculated by dividing the spread by the lowest ask price sampled during the day.|
|» call_volume|number(double)|false|none|Call options volume.|
|» category|string|false|none|The broad investment category that describes the ETF's investment focus and strategy.|
|» composite_ticker|string|false|none|The stock ticker symbol used to identify this ETF product on exchanges.|
|» coupon_exposure|[object]|false|none|Coupon exposure breakdown for fixed income ETFs.|
|» » key|string|true|none|none|
|» » value|number(double)|true|none|none|
|» creation_fee|number(double)|false|none|The fee for creating new shares of the ETF.|
|» creation_unit_size|number(double)|false|none|The size of creation units for the ETF.|
|» currency_exposure|[object]|false|none|Currency exposure breakdown of the ETF.|
|» » key|string|true|none|none|
|» » value|number(double)|true|none|none|
|» custodian|string|false|none|The custodian of the ETF assets.|
|» description|string|false|none|The official name and description of the ETF product.|
|» development_class|string|false|none|The economic development classification of the markets the ETF invests in, such as developed, emerging, or frontier markets.|
|» discount_premium|number(double)|false|none|Discount or premium to net asset value.|
|» distribution_frequency|string|false|none|How frequently the ETF makes distributions.|
|» distributor|string|false|none|The distributor of the ETF.|
|» effective_date|string(date)|false|none|The date showing when the information was accurate or valid; some issuers, such as Vanguard, release their data on a delay, so the effective_date can be several weeks earlier than the processed_date.|
|» fee_waivers|number(double)|false|none|Any fee waivers applied to the ETF.|
|» fiscal_year_end|string|false|none|The fiscal year end date for the ETF.|
|» focus|string|false|none|The specific investment focus or exposure that the ETF provides, such as sector, geography, or investment style.|
|» futures_commission_merchant|string|false|none|The futures commission merchant, if applicable.|
|» geographic_exposure|[object]|false|none|Geographic exposure breakdown of the ETF.|
|» » key|string|true|none|none|
|» » value|number(double)|true|none|none|
|» inception_date|string(date)|false|none|The date when this ETF was first launched and became available for trading.|
|» industry_exposure|[object]|false|none|Industry exposure breakdown of the ETF.|
|» » key|string|true|none|none|
|» » value|number(double)|true|none|none|
|» industry_group_exposure|[object]|false|none|Industry group exposure breakdown of the ETF.|
|» » key|string|true|none|none|
|» » value|number(double)|true|none|none|
|» issuer|string|false|none|The financial institution or fund company that created and sponsors this ETF.|
|» lead_market_maker|string|false|none|The lead market maker for the ETF.|
|» leverage_style|string|true|none|Indicates whether the ETF uses leverage to amplify returns ('leveraged'), or does not use leverage ('unleveraged').|
|» levered_amount|number(double)|false|none|The leverage multiplier applied by the ETF, where positive numbers indicate leveraged exposure and negative numbers indicate inverse exposure.|
|» listing_exchange|string|false|none|The primary exchange where the ETF is listed.|
|» management_classification|string|true|none|Defines whether an ETF is considered active under SEC rules, with managers making investment decisions, or passive, tracking an index.|
|» management_fee|number(double)|false|none|The annual fee charged by the fund manager for managing the ETF's portfolio and operations.|
|» maturity_exposure|[object]|false|none|Maturity exposure breakdown for fixed income ETFs.|
|» » key|string|true|none|none|
|» » value|number(double)|true|none|none|
|» net_expenses|number(double)|false|none|Net expenses after waivers.|
|» num_holdings|number(double)|false|none|Number of holdings in the ETF.|
|» options_available|integer(int32)|false|none|Availability of options on the ETF.|
|» options_volume|number(double)|false|none|Options trading volume for the ETF.|
|» other_expenses|number(double)|false|none|Other expenses charged by the ETF.|
|» portfolio_manager|string|false|none|The portfolio manager of the ETF.|
|» primary_benchmark|string|false|none|The main index or benchmark that this ETF is designed to track or replicate.|
|» processed_date|string(date)|false|none|The date showing when ETF Global received and processed the data.|
|» product_type|string|true|none|Indicates whether the product is an Exchange-Traded Note ('etn') or an Exchange-Traded Fund ('etf').|
|» put_call_ratio|number(double)|false|none|Put/call ratio for options on the ETF.|
|» put_volume|number(double)|false|none|Put options volume.|
|» region|string|false|none|The geographic region or area of the world where the ETF concentrates its investments.|
|» sector_exposure|[object]|false|none|Sector exposure breakdown of the ETF.|
|» » key|string|true|none|none|
|» » value|number(double)|true|none|none|
|» short_interest|number(double)|false|none|Short interest in the ETF.|
|» subadvisor|string|false|none|The subadvisor of the ETF, if applicable.|
|» subindustry_exposure|[object]|false|none|Sub-industry exposure breakdown of the ETF.|
|» » key|string|true|none|none|
|» » value|number(double)|true|none|none|
|» tax_classification|string|false|none|The tax structure of the ETF, determining whether investors receive 1099 or K1 tax forms (RIC, Partnership, or UIT).|
|» total_expenses|number(double)|false|none|The total annual expense ratio of the ETF, including all fees and costs passed on to investors.|
|» transfer_agent|string|false|none|The transfer agent for the ETF.|
|» trustee|string|false|none|The trustee of the ETF.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_etf-global_v1_taxonomies

<a id="opIdget_etf-global_v1_taxonomies"></a>

> Code samples

```bash
curl "https://api.polygon.io/etf-global/v1/taxonomies?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /etf-global/v1/taxonomies`

ETF Global taxonomy data containing detailed classification and categorization information for ETFs including investment strategy, methodology, and structural characteristics.

<h3 id="getetf-globalv1taxonomies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|processed_date|query|string|false|The date showing when ETF Global received and processed the data. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|processed_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|effective_date|query|string|false|The date showing when the information was accurate or valid; some issuers, such as Vanguard, release their data on a delay, so the effective_date can be several weeks earlier than the processed_date. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|effective_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|composite_ticker|query|string|false|The stock ticker symbol used to identify this ETF product on exchanges.|
|composite_ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|composite_ticker.gt|query|string|false|Filter greater than the value.|
|composite_ticker.gte|query|string|false|Filter greater than or equal to the value.|
|composite_ticker.lt|query|string|false|Filter less than the value.|
|composite_ticker.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '5000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'composite_ticker' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "asset_class": "Equity",
      "category": "Size and Style",
      "composite_ticker": "SPY",
      "country": "U.S.",
      "description": "SPDR S&P 500 ETF Trust",
      "development_class": "Developed Markets",
      "effective_date": "2025-09-19",
      "exposure_mechanism": "Blended Replication",
      "factor": "Size",
      "focus": "Large Cap",
      "holdings_disclosure_frequency": "Daily",
      "inception_date": "1993-01-22",
      "isin": "US78462F1030",
      "issuer": "SSgA",
      "leverage_style": "unleveraged",
      "levered_amount": 0,
      "management_classification": "passive",
      "management_style": "Passive - Representative Sampling",
      "objective": "Index-Tracking",
      "primary_benchmark": "S&P 500 Index",
      "processed_date": "2025-09-19",
      "product_type": "etf",
      "rebalance_frequency": "Quarterly",
      "reconstitution_frequency": "Quarterly",
      "region": "North America",
      "selection_methodology": "Modified Market Cap, Fundamental Multifactor, Liquidity",
      "selection_universe": "U.S. Large Caps",
      "strategic_focus": "Factor",
      "targeted_focus": "Size",
      "tax_classification": "Regulated Investment Company",
      "us_code": "78462F103",
      "weighting_methodology": "Modified Market Capitalization-Weighted"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getetf-globalv1taxonomies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getetf-globalv1taxonomies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» asset_class|string|false|none|The primary type of assets held by the ETF, such as equities, bonds, commodities, or other securities.|
|» category|string|false|none|The broad investment category that describes the ETF's investment focus and strategy.|
|» composite_ticker|string|false|none|The stock ticker symbol used to identify this ETF product on exchanges.|
|» country|string|false|none|The specific country focus of the ETF, if applicable.|
|» credit_quality_rating|string|false|none|Credit quality rating for fixed income ETFs.|
|» description|string|false|none|The official name and description of the ETF product.|
|» development_class|string|false|none|The economic development classification of the markets the ETF invests in, such as developed, emerging, or frontier markets.|
|» duration|string|false|none|The duration characteristics for fixed income ETFs.|
|» effective_date|string(date)|false|none|The date showing when the information was accurate or valid; some issuers, such as Vanguard, release their data on a delay, so the effective_date can be several weeks earlier than the processed_date.|
|» esg|string|false|none|Environmental, Social, and Governance characteristics.|
|» exposure_mechanism|string|false|none|The mechanism used to achieve exposure.|
|» factor|string|false|none|Factor exposure characteristics of the ETF.|
|» focus|string|false|none|The specific investment focus or exposure that the ETF provides, such as sector, geography, or investment style.|
|» hedge_reset|string|false|none|The frequency of hedge reset, if applicable.|
|» holdings_disclosure_frequency|string|false|none|How frequently holdings are disclosed.|
|» inception_date|string(date)|false|none|The date when this ETF was first launched and became available for trading.|
|» isin|string|false|none|The International Securities Identification Number, a global standard code for uniquely identifying this ETF worldwide.|
|» issuer|string|false|none|The financial institution or fund company that created and sponsors this ETF.|
|» leverage_reset|string|false|none|The frequency of leverage reset, if applicable.|
|» leverage_style|string|true|none|Indicates whether the ETF uses leverage to amplify returns ('leveraged'), or does not use leverage ('unleveraged').|
|» levered_amount|number(double)|false|none|The leverage multiplier applied by the ETF, where positive numbers indicate leveraged exposure and negative numbers indicate inverse exposure.|
|» management_classification|string|true|none|Defines whether an ETF is considered active under SEC rules, with managers making investment decisions, or passive, tracking an index.|
|» management_style|string|false|none|Indicates whether an ETF is managed actively or passively, and the level of transparency or replication method used.|
|» maturity|string|false|none|The maturity profile for fixed income ETFs.|
|» objective|string|false|none|The primary investment objective of the ETF.|
|» primary_benchmark|string|false|none|The main index or benchmark that this ETF is designed to track or replicate.|
|» processed_date|string(date)|false|none|The date showing when ETF Global received and processed the data.|
|» product_type|string|true|none|Indicates whether the product is an Exchange-Traded Note ('etn') or an Exchange-Traded Fund ('etf').|
|» rebalance_frequency|string|false|none|How frequently the ETF rebalances its holdings.|
|» reconstitution_frequency|string|false|none|How frequently the index is reconstituted.|
|» region|string|false|none|The geographic region or area of the world where the ETF concentrates its investments.|
|» secondary_objective|string|false|none|The secondary investment objective, if applicable.|
|» selection_methodology|string|false|none|The methodology used to select securities.|
|» selection_universe|string|false|none|The universe from which securities are selected.|
|» strategic_focus|string|false|none|The strategic investment focus of the ETF.|
|» targeted_focus|string|false|none|The targeted investment focus of the ETF.|
|» tax_classification|string|false|none|The tax structure of the ETF, determining whether investors receive 1099 or K1 tax forms (RIC, Partnership, or UIT).|
|» us_code|string|false|none|A unique identifier code that identifies this ETF in US markets.|
|» weighting_methodology|string|false|none|The methodology used to weight holdings.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-fed">fed</h1>

## get_fed_v1_funding-conditions

<a id="opIdget_fed_v1_funding-conditions"></a>

> Code samples

```bash
curl "https://api.polygon.io/fed/v1/funding-conditions?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /fed/v1/funding-conditions`

Daily U.S. money-market funding conditions from the Federal Reserve and the Federal Reserve Bank of New York, including the Federal Funds Effective Rate, SOFR, OBFR, tri-party general collateral repo rates, Treasury-collateralized overnight reverse repo and repo operation amounts, and commercial paper rates. One row per calendar day; daily federal-funds series generally populate calendar-day rows, while market-rate, volume, and commercial-paper series are generally published on business days and may be null on weekends or holidays.

<h3 id="getfedv1funding-conditions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|false|Calendar date of the observation (YYYY-MM-DD). Value must be formatted 'yyyy-mm-dd'.|
|date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'date' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "date": "2025-06-02",
      "effective_fed_funds_rate": 4.33,
      "effective_fed_funds_volume": 98,
      "fed_funds_target_lower": 4.25,
      "fed_funds_target_upper": 4.5,
      "fed_overnight_repo_treasury_amount": 0,
      "fed_overnight_reverse_repo_treasury_amount": 214.5,
      "financial_commercial_paper_90d_rate": 4.35,
      "interest_on_reserve_balances": 4.4,
      "nonfinancial_commercial_paper_90d_rate": 4.34,
      "obfr_25th_percentile": 4.3,
      "obfr_75th_percentile": 4.33,
      "obfr_volume": 305,
      "overnight_bank_funding_rate": 4.32,
      "secured_overnight_financing_rate": 4.31,
      "sofr_25th_percentile": 4.28,
      "sofr_75th_percentile": 4.32,
      "sofr_volume": 2214,
      "tgcr_25th_percentile": 4.27,
      "tgcr_75th_percentile": 4.31,
      "tri_party_general_collateral_rate": 4.3,
      "tri_party_general_collateral_volume": 1876
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getfedv1funding-conditions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getfedv1funding-conditions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» date|string(date)|false|none|Calendar date of the observation (YYYY-MM-DD).|
|» effective_fed_funds_rate|number(float)|false|none|Federal Funds Effective Rate as a percentage (DFF series from FRED); published daily.|
|» effective_fed_funds_volume|number(float)|false|none|Total transaction volume underlying the effective federal funds rate calculation, in billions of U.S. dollars; reported on business days.|
|» fed_funds_target_lower|number(float)|false|none|Lower bound of the federal funds target range as a percentage (DFEDTARL series from FRED); posted every calendar day.|
|» fed_funds_target_upper|number(float)|false|none|Upper bound of the federal funds target range as a percentage (DFEDTARU series from FRED); posted every calendar day.|
|» fed_overnight_repo_treasury_amount|number(float)|false|none|NY Fed overnight repo operation amount against Treasury collateral, in billions of U.S. dollars (RPONTSYD series from FRED); reported on business days.|
|» fed_overnight_reverse_repo_treasury_amount|number(float)|false|none|NY Fed overnight reverse repo operation amount against Treasury collateral, in billions of U.S. dollars (RRPONTSYD series from FRED); reported on business days.|
|» financial_commercial_paper_90d_rate|number(float)|false|none|90-day AA financial commercial paper interest rate as a percentage, quoted on a discount basis (DCPF3M series from FRED); reported on business days, with occasional source-level gaps.|
|» interest_on_reserve_balances|number(float)|false|none|Interest rate paid on reserve balances as a percentage (IORB series from FRED); posted every calendar day.|
|» nonfinancial_commercial_paper_90d_rate|number(float)|false|none|90-day AA nonfinancial commercial paper interest rate as a percentage, quoted on a discount basis (DCPN3M series from FRED); reported on business days, with occasional source-level gaps.|
|» obfr_25th_percentile|number(float)|false|none|25th percentile transaction rate of the OBFR distribution as a percentage; posted on business days.|
|» obfr_75th_percentile|number(float)|false|none|75th percentile transaction rate of the OBFR distribution as a percentage; posted on business days.|
|» obfr_volume|number(float)|false|none|Total transaction volume underlying the OBFR calculation, in billions of U.S. dollars; reported on business days.|
|» overnight_bank_funding_rate|number(float)|false|none|Overnight Bank Funding Rate (OBFR) as a percentage; published by the Federal Reserve Bank of New York and reported on business days.|
|» secured_overnight_financing_rate|number(float)|false|none|Secured Overnight Financing Rate (SOFR) as a percentage; published by the Federal Reserve Bank of New York and reported on business days.|
|» sofr_25th_percentile|number(float)|false|none|25th percentile transaction rate of the SOFR distribution as a percentage; posted on business days.|
|» sofr_75th_percentile|number(float)|false|none|75th percentile transaction rate of the SOFR distribution as a percentage; posted on business days.|
|» sofr_volume|number(float)|false|none|Total transaction volume underlying the SOFR calculation, in billions of U.S. dollars; reported on business days.|
|» tgcr_25th_percentile|number(float)|false|none|25th percentile transaction rate of the TGCR distribution as a percentage; posted on business days.|
|» tgcr_75th_percentile|number(float)|false|none|75th percentile transaction rate of the TGCR distribution as a percentage; posted on business days.|
|» tri_party_general_collateral_rate|number(float)|false|none|Tri-Party General Collateral Rate (TGCR) as a percentage; published by the Federal Reserve Bank of New York as a repo reference rate and reported on business days.|
|» tri_party_general_collateral_volume|number(float)|false|none|Total transaction volume underlying the TGCR calculation, in billions of U.S. dollars; reported on business days.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_fed_v1_inflation

<a id="opIdget_fed_v1_inflation"></a>

> Code samples

```bash
curl "https://api.polygon.io/fed/v1/inflation?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /fed/v1/inflation`

A table tracking inflation and price indices, including Consumer Price Index (CPI) and Personal Consumption Expenditures (PCE) metrics over time.

<h3 id="getfedv1inflation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|false|Calendar date of the observation (YYYY‑MM‑DD).|
|date.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|date.gt|query|string|false|Filter greater than the value.|
|date.gte|query|string|false|Filter greater than or equal to the value.|
|date.lt|query|string|false|Filter less than the value.|
|date.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'date' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "cpi": 310.45,
      "cpi_core": 320.1,
      "cpi_year_over_year": 3.18,
      "date": "2025-06-01",
      "pce": 132.73,
      "pce_core": 131.9,
      "pce_spending": 20345.6
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getfedv1inflation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getfedv1inflation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» cpi|number(float)|false|none|Consumer Price Index (CPI) for All Urban Consumers — a standard measure of headline inflation based on a fixed basket of goods and services, not seasonally adjusted.|
|» cpi_core|number(float)|false|none|Core Consumer Price Index — the CPI excluding food and energy, used to understand underlying inflation trends without short-term volatility.|
|» cpi_year_over_year|number(float)|false|none|Year-over-year percentage change in the headline CPI — the most commonly cited inflation rate in public discourse and economic policy.|
|» date|string|false|none|Calendar date of the observation (YYYY‑MM‑DD).|
|» pce|number(float)|false|none|Personal Consumption Expenditures (PCE) Price Index — a broader measure of inflation used by the Federal Reserve, reflecting actual consumer spending patterns and updated basket weights.|
|» pce_core|number(float)|false|none|Core PCE Price Index — excludes food and energy prices from the PCE index, and is the Fed's preferred measure of underlying inflation.|
|» pce_spending|number(float)|false|none|Nominal Personal Consumption Expenditures — total dollar value of consumer spending in the U.S. economy, reported in billions of dollars and not adjusted for inflation.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_fed_v1_inflation-expectations

<a id="opIdget_fed_v1_inflation-expectations"></a>

> Code samples

```bash
curl "https://api.polygon.io/fed/v1/inflation-expectations?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /fed/v1/inflation-expectations`

A table tracking inflation expectations from both market-based and economic model perspectives across different time horizons.

<h3 id="getfedv1inflation-expectations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|false|Calendar date of the observation (YYYY‑MM‑DD).|
|date.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|date.gt|query|string|false|Filter greater than the value.|
|date.gte|query|string|false|Filter greater than or equal to the value.|
|date.lt|query|string|false|Filter less than the value.|
|date.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'date' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "date": "2025-06-17",
      "forward_years_5_to_10": 2.6,
      "market_10_year": 2.36,
      "market_5_year": 2.12,
      "model_10_year": 2.95,
      "model_1_year": 2.85,
      "model_30_year": 3,
      "model_5_year": 2.91
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getfedv1inflation-expectations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getfedv1inflation-expectations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» date|string|false|none|Calendar date of the observation (YYYY‑MM‑DD).|
|» forward_years_5_to_10|number(float)|false|none|5-Year, 5-Year Forward Inflation Expectation Rate — the market's expectation of average annual inflation for the 5-year period beginning 5 years from now, based on the spread between forward nominal and real yields.|
|» market_10_year|number(float)|false|none|10-Year Breakeven Inflation Rate — the market's expectation of average annual inflation over the next 10 years, based on the spread between 10-year nominal Treasury yields and 10-year TIPS yields.|
|» market_5_year|number(float)|false|none|5-Year Breakeven Inflation Rate — the market's expectation of average annual inflation over the next 5 years, based on the spread between 5-year nominal Treasury yields and 5-year TIPS yields.|
|» model_10_year|number(float)|false|none|The Cleveland Fed’s 10-year inflation expectations data estimated expected inflation, risk premiums, and the real interest rate using a model based on Treasury yields, inflation data, swaps, and surveys.|
|» model_1_year|number(float)|false|none|The Cleveland Fed’s 1-year inflation expectations data estimated expected inflation, risk premiums, and the real interest rate using a model based on Treasury yields, inflation data, swaps, and surveys.|
|» model_30_year|number(float)|false|none|The Cleveland Fed’s 30-year inflation expectations data estimated expected inflation, risk premiums, and the real interest rate using a model based on Treasury yields, inflation data, swaps, and surveys.|
|» model_5_year|number(float)|false|none|The Cleveland Fed’s 5-year inflation expectations data estimated expected inflation, risk premiums, and the real interest rate using a model based on Treasury yields, inflation data, swaps, and surveys.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_fed_v1_labor-market

<a id="opIdget_fed_v1_labor-market"></a>

> Code samples

```bash
curl "https://api.polygon.io/fed/v1/labor-market?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /fed/v1/labor-market`

Labor market indicators from the Federal Reserve, including unemployment rate, labor force participation, average hourly earnings, and job openings data.

<h3 id="getfedv1labor-market-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|false|Calendar date of the observation (YYYY-MM-DD).|
|date.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|date.gt|query|string|false|Filter greater than the value.|
|date.gte|query|string|false|Filter greater than or equal to the value.|
|date.lt|query|string|false|Filter less than the value.|
|date.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'date' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "avg_hourly_earnings": 35.06,
      "date": "2024-12-01",
      "job_openings": 8098,
      "labor_force_participation_rate": 62.5,
      "unemployment_rate": 4.2
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getfedv1labor-market-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getfedv1labor-market-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» avg_hourly_earnings|number(float)|false|none|Average hourly earnings of all employees on private nonfarm payrolls in USD (CES0500000003 series from FRED).|
|» date|string|false|none|Calendar date of the observation (YYYY-MM-DD).|
|» job_openings|number(float)|false|none|Total nonfarm job openings in thousands (JTSJOL series from FRED).|
|» labor_force_participation_rate|number(float)|false|none|Civilian labor force participation rate as a percentage of the civilian noninstitutional population (CIVPART series from FRED).|
|» unemployment_rate|number(float)|false|none|Civilian unemployment rate as a percentage of the labor force (UNRATE series from FRED).|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_fed_v1_treasury-yields

<a id="opIdget_fed_v1_treasury-yields"></a>

> Code samples

```bash
curl "https://api.polygon.io/fed/v1/treasury-yields?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /fed/v1/treasury-yields`

A record of U.S. Treasury bond yields across various maturity periods, tracking historical interest rates from short-term to long-term government securities.

<h3 id="getfedv1treasury-yields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|false|Calendar date of the yield observation (YYYY-MM-DD).|
|date.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|date.gt|query|string|false|Filter greater than the value.|
|date.gte|query|string|false|Filter greater than or equal to the value.|
|date.lt|query|string|false|Filter less than the value.|
|date.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'date' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "date": "1962-01-02",
      "yield_10_year": 4.06,
      "yield_1_year": 3.22,
      "yield_5_year": 3.88
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getfedv1treasury-yields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getfedv1treasury-yields-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» date|string|false|none|Calendar date of the yield observation (YYYY-MM-DD).|
|» yield_10_year|number(float)|false|none|Market Yield on U.S. Treasury Securities at 10-Year Constant Maturity, Quoted on an Investment Basis|
|» yield_1_month|number(float)|false|none|Market Yield on U.S. Treasury Securities at 1-Month Constant Maturity, Quoted on an Investment Basis|
|» yield_1_year|number(float)|false|none|Market Yield on U.S. Treasury Securities at 1-Year Constant Maturity, Quoted on an Investment Basis|
|» yield_20_year|number(float)|false|none|Market Yield on U.S. Treasury Securities at 20-Year Constant Maturity, Quoted on an Investment Basis|
|» yield_2_year|number(float)|false|none|Market Yield on U.S. Treasury Securities at 2-Year Constant Maturity, Quoted on an Investment Basis|
|» yield_30_year|number(float)|false|none|Market Yield on U.S. Treasury Securities at 30-Year Constant Maturity, Quoted on an Investment Basis|
|» yield_3_month|number(float)|false|none|Market Yield on U.S. Treasury Securities at 3-Month Constant Maturity, Quoted on an Investment Basis|
|» yield_3_year|number(float)|false|none|Market Yield on U.S. Treasury Securities at 3-Year Constant Maturity, Quoted on an Investment Basis|
|» yield_5_year|number(float)|false|none|Market Yield on U.S. Treasury Securities at 5-Year Constant Maturity, Quoted on an Investment Basis|
|» yield_6_month|number(float)|false|none|Market Yield on U.S. Treasury Securities at 6-Month Constant Maturity, Quoted on an Investment Basis|
|» yield_7_year|number(float)|false|none|Market Yield on U.S. Treasury Securities at 7-Year Constant Maturity, Quoted on an Investment Basis|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-globalforex">global_forex</h1>

## get_forex_v1_exchanges

<a id="opIdget_forex_v1_exchanges"></a>

> Code samples

```bash
curl "https://api.polygon.io/forex/v1/exchanges?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /forex/v1/exchanges`

Global foreign exchange (FX) trading venues and market infrastructure, including electronic trading platforms, banks, and other institutions facilitating currency pair trading worldwide.

<h3 id="getforexv1exchanges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '1000'.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "id": "48",
      "name": "Currency Banks 1",
      "type": "exchange"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getforexv1exchanges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getforexv1exchanges-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» id|string|true|none|Numeric identifier for the forex trading venue or institution.|
|» name|string|true|none|Full name of the foreign exchange trading venue, platform, or financial institution.|
|» type|string|true|none|Type of forex venue - 'exchange' for electronic trading platforms and institutional trading venues.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-futuresaggregates">futures:aggregates</h1>

## Aggregates

<a id="opIdAggregatesV1"></a>

> Code samples

```bash
curl "https://api.polygon.io/futures/v1/aggs/GCJ5?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /futures/v1/aggs/{ticker}`

Get aggregates for a contract in a given time range.

<h3 id="aggregates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|path|string|true|The futures contract identifier, including the base symbol and contract expiration (e.g., GCJ5 for the April 2025 gold contract).|
|resolution|query|string|false|The size of each aggregate candle, specified as a number followed by a unit: sec, min, hour, session, week, month, quarter, or year.<br><br>Each unit has a maximum multiplier. For instance, minute candles go up to 59min; after that, use 1hour. Requesting an unsupported size returns a 400 Bad Request.|
|window_start|query|string|false|Filter by the start time of each candle. Accepts a YYYY-MM-DD date or a nanosecond Unix timestamp. The value is snapped to the start of the matching candle interval. When omitted, the API returns the most recent candles up to the limit.<br><br>Session candles are timestamped at the start of the session, not the trading date they settle on. A futures session opens the evening before it settles, so window_start falls on the day before session_end_date. To pull the session that settles on a given date, set window_start to the day before. For example, window_start=2025-08-05 returns the session that settles on 2025-08-06. Week, month, quarter, and year candles follow the same rule: window_start is the first day of the period and session_end_date is the last trading date in it.<br><br>Add a comparison suffix to filter a range: window_start.gte (greater than or equal to), window_start.gt (greater than), window_start.lte (less than or equal to), or window_start.lt (less than).<br><br>Examples:<br><br>Most recent minute candles: /v1/aggs/ESU5?resolution=1min&limit=5<br><br>Session settling 2025-08-06 (pass its start date, 2025-08-05): /v1/aggs/ESU5?resolution=1session&window_start=2025-08-05<br><br>Date range: /v1/aggs/ESU5?resolution=1session&window_start.gte=2025-07-01&window_start.lte=2025-07-31<br><br>After a timestamp: /v1/aggs/ESU5?resolution=1sec&window_start.gt=1751409877000000000&limit=1000|
|limit|query|integer|false|The number of results to return per page (default=1000, maximum=50000, minimum=1).|
|window_start.gte|query|string|false|Range by window_start.|
|window_start.gt|query|string|false|Range by window_start.|
|window_start.lte|query|string|false|Range by window_start.|
|window_start.lt|query|string|false|Range by window_start.|
|sort|query|string|false|Sort results by field and direction using dotted notation (e.g., 'ticker.asc', 'name.desc').|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|window_start.asc|
|sort|window_start.desc|

> Example responses

> 200 Response

```json
{
  "request_id": "b452e45b7eaad14151c3e1ce5129b558",
  "results": [
    {
      "close": 2874.2,
      "dollar_volume": 380717446,
      "high": 2877.1,
      "low": 2837.4,
      "open": 2850.4,
      "session_end_date": "2025-02-04",
      "settlement_price": 2875.8,
      "ticker": "GCJ5",
      "transactions": 74262,
      "volume": 133127,
      "window_start": 1738540800000000000
    },
    {
      "close": 2884.8,
      "dollar_volume": 448429944.1,
      "high": 2906,
      "low": 2870.1,
      "open": 2873.7,
      "session_end_date": "2025-02-05",
      "settlement_price": 2893,
      "ticker": "GCJ5",
      "transactions": 83673,
      "volume": 155170,
      "window_start": 1738627200000000000
    }
  ],
  "status": "OK"
}
```

<h3 id="aggregates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of aggregates.|Inline|

<h3 id="aggregates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, the URL to the next page of results.|
|results|[object]|true|none|none|
|» close|number(double)|true|none|The last price within the timeframe.|
|» dollar_volume|number(double)|true|none|The sum of price × size across all trades in the window, expressed in the contract's quoted price units, which are the same units as the bar's open, high, low, and close. Despite the field name, no contract multiplier is applied, so this is not a notional dollar value. See the <a href="/docs/rest/futures/products">Products endpoint</a> for contract multiplier details. Because dollar_volume is a raw sum, you can use it to compute a volume-weighted average price (VWAP) over any span of bars: sum dollar_volume across the bars in the window and divide by the summed volume.|
|» high|number(double)|true|none|The highest price within the timeframe.|
|» low|number(double)|true|none|The lowest price within the timeframe.|
|» open|number(double)|true|none|The opening price within the timeframe.|
|» session_end_date|string|true|none|Also known as the trading date, the date of the end of the trading session, in YYYY-MM-DD format. Sessions are named by this end date, while window_start holds the session's start date, which for session candles is the day before.|
|» settlement_price|number(double)|false|none|The price the contract settled at for this session. Included for session, week, month, quarter, and year candles; for multi-session candles it is the settlement of the final session in the period. Not returned for intraday candles (sec, min, hour).|
|» ticker|string|true|none|The ticker for the contract.|
|» transactions|integer(int64)|true|none|The number of transactions that occurred within the timeframe.|
|» volume|integer(int64)|true|none|The number of contracts that traded within the timeframe.|
|» window_start|integer(int64)|true|none|The timestamp of the beginning of the candlestick’s aggregation window.|
|status|string|true|none|The status of the response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-usfutures">us_futures</h1>

## futures contracts API

<a id="opIdget_futures_v1_contracts"></a>

> Code samples

```bash
curl "https://api.polygon.io/futures/v1/contracts?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /futures/v1/contracts`

The Contracts API provides a single source for discovering all listed futures contracts and retrieving complete contract specifications. You can query the full contract index with filters for product code, trade dates, active status, and date, returning key attributes such as ticker, first and last trade dates, days to maturity, exchange code, and order quantity limits in paginated form. The same API also returns the full specification for a single contract, including settlement dates, tick sizes, and other trading and risk related fields. Point-in-time lookups allow you to reconstruct the exact contract definition that applied on any given day.

Use Cases: Historical research, trading system integration, portfolio workflows, risk management.

<h3 id="futures-contracts-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|false|A date string in the format YYYY-MM-DD. This parameter will return point-in-time information about contracts for the specified day. Value must be formatted 'yyyy-mm-dd'.|
|date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|product_code|query|string|false|The identifier for the contract's product.|
|product_code.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|product_code.gt|query|string|false|Filter greater than the value.|
|product_code.gte|query|string|false|Filter greater than or equal to the value.|
|product_code.lt|query|string|false|Filter less than the value.|
|product_code.lte|query|string|false|Filter less than or equal to the value.|
|provider_id|query|string|false|A unique identifier for the contract assigned by the data provider. Note that this value is null for historical data (pre-2025-03-12).|
|provider_product_id|query|string|false|A unique identifier for the product to which a contract, or contracts, belongs. Note that this value is null for historical data (pre-2025-03-12).|
|ticker|query|string|false|The ticker for the contract.|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|active|query|boolean|false|Whether or not a given contract was tradeable at the given point in time. Active is true when (first_trade_date <= date <= last_trade_date) and false otherwise.|
|type|query|string|false|The type of contract, one of 'single' or 'combo'. Leaving this filter blank will query for contracts where type is 'single', 'combo' or empty. This field only exists on contracts as of 2025-03-12 and later. It will be null when date < 2025-03-12.|
|type.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|first_trade_date|query|string|false|The first day on which the contract was tradeable. Value must be formatted 'yyyy-mm-dd'.|
|first_trade_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|first_trade_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|first_trade_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|first_trade_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|last_trade_date|query|string|false|The last day on which the contract was tradeable. Value must be formatted 'yyyy-mm-dd'.|
|last_trade_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|last_trade_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|last_trade_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|last_trade_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '1000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'product_code' if not specified. The sort order defaults to 'asc' if not specified.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|single|
|type|combo|
|type.any_of|single|
|type.any_of|combo|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.massive.com/futures/v1/contracts?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "000a000a0a0a000a0a0aa00a0a0000a0",
  "results": [
    {
      "active": true,
      "date": "2026-10-07",
      "days_to_maturity": 72,
      "first_trade_date": "2021-09-17",
      "group_code": "ES",
      "last_trade_date": "2026-12-18",
      "max_order_quantity": 3000,
      "min_order_quantity": 1,
      "name": "ESZ6 Future",
      "product_code": "ES",
      "provider_id": "H3ZLPMESGCUM",
      "provider_product_id": "VGQ4V6NVXLBW",
      "settlement_date": "2026-12-18",
      "settlement_tick_size": 0.25,
      "spread_tick_size": 0.01,
      "ticker": "ESZ6",
      "trade_tick_size": 0.25,
      "trading_venue": "XCME",
      "type": "single"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="futures-contracts-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="futures-contracts-api-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» active|boolean|true|none|Whether or not a given contract was tradeable at the given point in time. Active is true when (first_trade_date <= date <= last_trade_date) and false otherwise.|
|» date|string(date)|true|none|A date string in the format YYYY-MM-DD. This parameter will return point-in-time information about contracts for the specified day.|
|» days_to_maturity|integer(int64)|false|none|The number of calendar days between the 'date' and the contract's final settlement date.|
|» first_trade_date|string(date)|false|none|The first day on which the contract was tradeable.|
|» group_code|string|false|none|An identifier used to identify logical groups of products. The group_code is only populated for contracts listed for trading on CME Globex.|
|» last_trade_date|string(date)|false|none|The last day on which the contract was tradeable.|
|» max_order_quantity|integer(int64)|false|none|The maximum order quantity.|
|» min_order_quantity|integer(int64)|false|none|The minimum order quantity.|
|» name|string|false|none|The name of this contract.|
|» product_code|string|false|none|The identifier for the contract's product.|
|» provider_id|string|false|none|A unique identifier for the contract assigned by the data provider. Note that this value is null for historical data (pre-2025-03-12).|
|» provider_product_id|string|false|none|A unique identifier for the product to which a contract, or contracts, belongs. Note that this value is null for historical data (pre-2025-03-12).|
|» settlement_date|string(date)|false|none|The date on which this contract settles.|
|» settlement_tick_size|number(double)|false|none|The tick size for settlement.|
|» spread_tick_size|number(double)|false|none|The tick size for spreads.|
|» ticker|string|false|none|The ticker for the contract.|
|» trade_tick_size|number(double)|false|none|The tick size for trades.|
|» trading_venue|string|false|none|The trading venue (MIC) for the exchange on which this contract trades.|
|» type|string|false|none|The type of contract, one of 'single' or 'combo'. Leaving this filter blank will query for contracts where type is 'single', 'combo' or empty. This field only exists on contracts as of 2025-03-12 and later. It will be null when date < 2025-03-12.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_futures_v1_exchanges

<a id="opIdget_futures_v1_exchanges"></a>

> Code samples

```bash
curl "https://api.polygon.io/futures/v1/exchanges?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /futures/v1/exchanges`

US futures exchanges and trading venues including major derivatives exchanges (CME, CBOT, NYMEX, COMEX) and other futures market infrastructure for commodity, financial, and other derivative contract trading.

<h3 id="getfuturesv1exchanges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '1000'.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "acronym": "CME",
      "id": "4",
      "locale": "US",
      "mic": "XCME",
      "name": "Chicago Mercantile Exchange",
      "operating_mic": "XCME",
      "type": "exchange",
      "url": "https://cmegroup.com"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getfuturesv1exchanges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getfuturesv1exchanges-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» acronym|string|false|none|Well-known acronym for the exchange (e.g., 'CME', 'NYMEX', 'CBOT', 'COMEX').|
|» id|string|true|none|Numeric identifier for the futures exchange or trading venue.|
|» locale|string|false|none|Geographic location code where the exchange operates.|
|» mic|string|false|none|Market Identifier Code (MIC) - ISO 10383 standard four-character code for the futures market.|
|» name|string|true|none|Full official name of the futures exchange (e.g., 'Chicago Mercantile Exchange', 'New York Mercantile Exchange').|
|» operating_mic|string|false|none|Operating Market Identifier Code for the futures exchange.|
|» type|string|true|none|Type of venue - 'exchange' for futures exchanges and derivatives trading platforms.|
|» url|string|false|none|Official website URL of the futures exchange organization.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Market Status API

<a id="opIdget_futures_v1_market-status"></a>

> Code samples

```bash
curl "https://api.polygon.io/futures/v1/market-status?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /futures/v1/market-status`

Retrieve the current market status for a specific product or products. This endpoint returns real-time indicators, such as open, pause, close, for futures products, along with the corresponding exchange and product codes and an evaluation timestamp. This information enables users to monitor operational conditions and adjust their trading strategies accordingly.

Use Cases: Real-time monitoring, algorithm scheduling, UI updates, operational planning.

<h3 id="market-status-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_code|query|string|false|The product code of the futures contracts for which you want statuses.|
|product_code.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|product_code.gt|query|string|false|Filter greater than the value.|
|product_code.gte|query|string|false|Filter greater than or equal to the value.|
|product_code.lt|query|string|false|Filter less than the value.|
|product_code.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '10' if not specified. The maximum allowed limit is '100'.|

> Example responses

> 200 Response

```json
{
  "request_id": "445ebfcfe5bb4b688b7971e1600c952d",
  "results": [
    {
      "market_event": "open",
      "name": "ERCOT North 345 kV Hub Day-Ahead 5 MW Off-Peak Futures",
      "product_code": "ERL",
      "session_end_date": "2025-12-05",
      "timestamp": "2025-12-04T23:00:00+00:00",
      "trading_venue": "XNYM"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="market-status-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="market-status-api-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» market_event|string|false|none|The current status of the market for the product.|
|» name|string|false|none|The name of the futures product.|
|» product_code|string|false|none|The product code of the futures contracts for which you want statuses.|
|» session_end_date|string(date)|false|none|The trading date for the current session.|
|» timestamp|string|false|none|The timestamp for the given market event.|
|» trading_venue|string|false|none|The trading venue (MIC) for the exchange on which the corresponding product trades.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Futures Products API

<a id="opIdget_futures_v1_products"></a>

> Code samples

```bash
curl "https://api.polygon.io/futures/v1/products?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /futures/v1/products`

The Products API is a unified source for discovering all supported futures products and retrieving full product specifications. It returns the complete product universe with product codes, names, exchange identifiers, sector and asset class classifications, product type, settlement method, and pricing and quotation details. You can filter by name, exchange, sector, asset class, product type, or date to capture the product set or product definition that existed at a specific point in time. It also retrieves the full specification for a single product, supporting accurate system configuration, analytics, trading workflows, and historical reconciliation.

Use Cases: Product specification, historical product checks, risk management, trading system integration.

<h3 id="futures-products-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The full name of the product.|
|name.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|name.gt|query|string|false|Filter greater than the value.|
|name.gte|query|string|false|Filter greater than or equal to the value.|
|name.lt|query|string|false|Filter less than the value.|
|name.lte|query|string|false|Filter less than or equal to the value.|
|product_code|query|string|false|The identifier for the product.|
|product_code.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|product_code.gt|query|string|false|Filter greater than the value.|
|product_code.gte|query|string|false|Filter greater than or equal to the value.|
|product_code.lt|query|string|false|Filter less than the value.|
|product_code.lte|query|string|false|Filter less than or equal to the value.|
|provider_id|query|string|false|A unique identifier for the product assigned by the data provider. Can be used to distinguish products that share a product code.|
|date|query|string|false|A date string in the format YYYY-MM-DD. This parameter will return point-in-time information about products for the specified day. Value must be formatted 'yyyy-mm-dd'.|
|date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|trading_venue|query|string|false|The trading venue (MIC) for the exchange on which this product's contracts trade.|
|trading_venue.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|trading_venue.gt|query|string|false|Filter greater than the value.|
|trading_venue.gte|query|string|false|Filter greater than or equal to the value.|
|trading_venue.lt|query|string|false|Filter less than the value.|
|trading_venue.lte|query|string|false|Filter less than or equal to the value.|
|sector|query|string|false|The sector to which the product belongs.|
|sector.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|sub_sector|query|string|false|The sub-sector to which the product belongs.|
|sub_sector.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|asset_class|query|string|false|The asset class to which the product belongs.|
|asset_class.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|asset_sub_class|query|string|false|The asset sub-class to which the product belongs.|
|asset_sub_class.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|type|query|string|false|The type of product, one of 'single' or 'combo'. Leaving this filter blank will query for both 'single' and 'combo' types.|
|type.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'date' if not specified. The sort order defaults to 'asc' if not specified.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sector|asia|
|sector|base|
|sector|biofuels|
|sector|coal|
|sector|cross_rates|
|sector|crude_oil|
|sector|custom_index|
|sector|dairy|
|sector|dj_ubs_ci|
|sector|electricity|
|sector|emissions|
|sector|europe|
|sector|fertilizer|
|sector|forestry|
|sector|grains_and_oilseeds|
|sector|intl_index|
|sector|liq_nat_gas_lng|
|sector|livestock|
|sector|long_term_gov|
|sector|long_term_non_gov|
|sector|majors|
|sector|minors|
|sector|nat_gas|
|sector|nat_gas_liq_petro|
|sector|precious|
|sector|refined_products|
|sector|s_and_p_gsci|
|sector|sel_sector_index|
|sector|short_term_gov|
|sector|short_term_non_gov|
|sector|softs|
|sector|us|
|sector|us_index|
|sector|wet_bulk|
|sector.any_of|asia|
|sector.any_of|base|
|sector.any_of|biofuels|
|sector.any_of|coal|
|sector.any_of|cross_rates|
|sector.any_of|crude_oil|
|sector.any_of|custom_index|
|sector.any_of|dairy|
|sector.any_of|dj_ubs_ci|
|sector.any_of|electricity|
|sector.any_of|emissions|
|sector.any_of|europe|
|sector.any_of|fertilizer|
|sector.any_of|forestry|
|sector.any_of|grains_and_oilseeds|
|sector.any_of|intl_index|
|sector.any_of|liq_nat_gas_lng|
|sector.any_of|livestock|
|sector.any_of|long_term_gov|
|sector.any_of|long_term_non_gov|
|sector.any_of|majors|
|sector.any_of|minors|
|sector.any_of|nat_gas|
|sector.any_of|nat_gas_liq_petro|
|sector.any_of|precious|
|sector.any_of|refined_products|
|sector.any_of|s_and_p_gsci|
|sector.any_of|sel_sector_index|
|sector.any_of|short_term_gov|
|sector.any_of|short_term_non_gov|
|sector.any_of|softs|
|sector.any_of|us|
|sector.any_of|us_index|
|sector.any_of|wet_bulk|
|sub_sector|asian|
|sub_sector|canadian|
|sub_sector|cat|
|sub_sector|cooling_degree_days|
|sub_sector|ercot|
|sub_sector|european|
|sub_sector|gulf|
|sub_sector|heating_degree_days|
|sub_sector|iso_ne|
|sub_sector|large_cap_index|
|sub_sector|mid_cap_index|
|sub_sector|miso|
|sub_sector|north_american|
|sub_sector|nyiso|
|sub_sector|pjm|
|sub_sector|small_cap_index|
|sub_sector|west|
|sub_sector|western_power|
|sub_sector.any_of|asian|
|sub_sector.any_of|canadian|
|sub_sector.any_of|cat|
|sub_sector.any_of|cooling_degree_days|
|sub_sector.any_of|ercot|
|sub_sector.any_of|european|
|sub_sector.any_of|gulf|
|sub_sector.any_of|heating_degree_days|
|sub_sector.any_of|iso_ne|
|sub_sector.any_of|large_cap_index|
|sub_sector.any_of|mid_cap_index|
|sub_sector.any_of|miso|
|sub_sector.any_of|north_american|
|sub_sector.any_of|nyiso|
|sub_sector.any_of|pjm|
|sub_sector.any_of|small_cap_index|
|sub_sector.any_of|west|
|sub_sector.any_of|western_power|
|asset_class|alt_investment|
|asset_class|commodity|
|asset_class|financials|
|asset_class.any_of|alt_investment|
|asset_class.any_of|commodity|
|asset_class.any_of|financials|
|asset_sub_class|agricultural|
|asset_sub_class|commodity_index|
|asset_sub_class|energy|
|asset_sub_class|equity|
|asset_sub_class|foreign_exchange|
|asset_sub_class|freight|
|asset_sub_class|housing|
|asset_sub_class|interest_rate|
|asset_sub_class|metals|
|asset_sub_class|weather|
|asset_sub_class.any_of|agricultural|
|asset_sub_class.any_of|commodity_index|
|asset_sub_class.any_of|energy|
|asset_sub_class.any_of|equity|
|asset_sub_class.any_of|foreign_exchange|
|asset_sub_class.any_of|freight|
|asset_sub_class.any_of|housing|
|asset_sub_class.any_of|interest_rate|
|asset_sub_class.any_of|metals|
|asset_sub_class.any_of|weather|
|type|single|
|type|combo|
|type.any_of|single|
|type.any_of|combo|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.massive.com/futures/v1/products?cursor=YXA9MTAwJmFzPSZhc19vZj0yMDI1LTA3LTA3JmxpbWl0PTEwMCZzb3J0PW5hbWUuYXNj",
  "request_id": "000a000a0a0a000a0a0aa00a0a0000a0",
  "results": [
    {
      "asset_class": "commodity",
      "asset_sub_class": "energy",
      "clearing_symbol": "EBF",
      "clearing_venue": "NYMEX",
      "date": "2025-07-07",
      "last_updated": "2025-02-22",
      "name": "1% Fuel Oil Barges FOB Rdam (Platts) vs. 1% Fuel Oil Cargoes FOB NWE (Platts) BALMO Futures",
      "price_quotation": "U.S. dollars and cents per metric ton",
      "product_code": "EBE",
      "provider_id": "5JRWE35UYLDP",
      "sector": "refined_products",
      "settlement_currency_code": "USD",
      "settlement_method": "financially_settled",
      "settlement_type": "cash",
      "sub_sector": "european",
      "trade_currency_code": "USD",
      "trading_venue": "XNYM",
      "type": "single",
      "unit_of_measure": "MTONS",
      "unit_of_measure_qty": 1000
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="futures-products-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="futures-products-api-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» asset_class|string|false|none|The asset class to which the product belongs.|
|» asset_sub_class|string|false|none|The asset sub-class to which the product belongs.|
|» clearing_symbol|string|false|none|The clearing symbol assigned to this product by the exchange's clearing house.|
|» clearing_venue|string|false|none|The exchange identifier for the clearing house that clears this product's contracts.|
|» date|string(date)|true|none|A date string in the format YYYY-MM-DD. This parameter will return point-in-time information about products for the specified day.|
|» last_updated|string(date-time)|false|none|The date and time at which this product was last updated.|
|» name|string|false|none|The full name of the product.|
|» price_quotation|string|false|none|The quoted price for this product.|
|» product_code|string|false|none|The identifier for the product.|
|» provider_id|string|false|none|A unique identifier for the product assigned by the data provider. Can be used to distinguish products that share a product code.|
|» sector|string|false|none|The sector to which the product belongs.|
|» settlement_currency_code|string|false|none|The currency in which this product settles.|
|» settlement_method|string|false|none|The method of settlement for this product (Financially Settled or Deliverable).|
|» settlement_type|string|false|none|The type of settlement for this product.|
|» strategy_type|string|false|none|The strategy type for combo products (e.g. calendar, butterfly, strip). Null for single products.|
|» sub_sector|string|false|none|The sub-sector to which the product belongs.|
|» trade_currency_code|string|false|none|The currency in which this product's contracts trade.|
|» trading_venue|string|false|none|The trading venue (MIC) for the exchange on which this product's contracts trade.|
|» type|string|false|none|The type of product, one of 'single' or 'combo'. Leaving this filter blank will query for both 'single' and 'combo' types.|
|» unit_of_measure|string|false|none|The unit of measure for this product.|
|» unit_of_measure_qty|number(float)|false|none|The quantity of the unit of measure for this product.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_futures_v1_quotes_ticker

<a id="opIdget_futures_v1_quotes_ticker"></a>

> Code samples

```bash
curl "https://api.polygon.io/futures/v1/quotes/string?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /futures/v1/quotes/{ticker}`

Retrieve quote data for a specified futures contract ticker. Each record includes the best bid and offer prices, sizes, and timestamps, reflecting the prevailing quote environment at each moment. This endpoint supports detailed analysis of price dynamics and liquidity conditions to inform trading decisions and market research.

Use Cases: Liquidity analysis, price discovery, trading strategy refinement, market research.

<h3 id="getfuturesv1quotesticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timestamp|query|string|false|The time when the quote was generated at the exchange to nanosecond precision. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|timestamp.gt|query|string|false|Filter greater than the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|timestamp.gte|query|string|false|Filter greater than or equal to the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|timestamp.lt|query|string|false|Filter less than the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|timestamp.lte|query|string|false|Filter less than or equal to the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|session_end_date|query|string|false|Also known as the trading date, the date of the end of the trading session, in YYYY-MM-DD format.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'timestamp' if not specified. The sort order defaults to 'desc' if not specified.|
|ticker|path|string|true|The futures contract identifier, including the base symbol and contract expiration (e.g., GCJ5 for the April 2025 gold contract).|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.massive.com/futures/v1/quotes/GCJ5?cursor=YXA9MTczNDQ2MDIzMDcwODEyNjI4MSZhcz0mbGltaXQ9MTAwMCZzZXNzaW9uX2VuZF9kYXRlPTIwMjQtMTItMTcmc29ydD10aW1lc3RhbXAuZGVzYw",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": [
    {
      "ask_size": 0,
      "ask_timestamp": 1734472800076125400,
      "bid_price": 2660,
      "bid_size": 1,
      "bid_timestamp": 1734472800076125400,
      "channel": 360,
      "report_sequence": 2250337,
      "sequence_number": 15357766,
      "session_end_date": "2024-12-17",
      "ticker": "GCJ5",
      "timestamp": 1734472800076125400
    },
    {
      "ask_price": 2686,
      "ask_size": 1,
      "ask_timestamp": 1734472770000588000,
      "bid_price": 2684.7,
      "bid_size": 1,
      "bid_timestamp": 1734472736352455200,
      "channel": 360,
      "report_sequence": 2249866,
      "sequence_number": 15355476,
      "session_end_date": "2024-12-17",
      "ticker": "GCJ5",
      "timestamp": 1734472770000588000
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getfuturesv1quotesticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getfuturesv1quotesticker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» ask_price|number(double)|false|none|The ask price is expressed per unit of the underlying asset, and you apply the contract multiplier to get the full contract value.|
|» ask_size|integer(int32)|false|none|The quote size represents the number of futures contracts available at the given ask price.|
|» ask_timestamp|integer(int64)|false|none|The time when the ask price was submitted to the exchange.|
|» bid_price|number(double)|false|none|The bid price is expressed per unit of the underlying asset, and you apply the contract multiplier to get the full contract value.|
|» bid_size|integer(int32)|false|none|The quote size represents the number of futures contracts available at the given bid price.|
|» bid_timestamp|integer(int64)|false|none|The time when the bid price was submitted to the exchange.|
|» channel|integer(int32)|true|none|The CME multicast channel this event was sourced from.|
|» report_sequence|integer(int64)|true|none|The reporting sequence number.|
|» sequence_number|integer(int64)|true|none|The unique sequence number assigned to this quote by the exchange.|
|» session_end_date|string|false|none|Also known as the trading date, the date of the end of the trading session, in YYYY-MM-DD format.|
|» ticker|string|true|none|The futures contract identifier, including the base symbol and contract expiration (e.g., GCJ5 for the April 2025 gold contract).|
|» timestamp|integer(int64)|true|none|The time when the quote was generated at the exchange to nanosecond precision.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Futures Schedules API

<a id="opIdget_futures_v1_schedules"></a>

> Code samples

```bash
curl "https://api.polygon.io/futures/v1/schedules?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /futures/v1/schedules`

The Schedules API provides a unified way to retrieve trading schedules for futures markets, returning precise session open and close times, intraday breaks, and any adjustments for holidays or special events. You can filter schedules by session_end_date or retrieve the schedule for a single product using its product code. All times are returned in Coordinated Universal Time (UTC), making it straightforward to align trading, execution, and operational workflows across systems.

Use Cases: Schedule planning, market analysis, strategy alignment, risk and operations management.

<h3 id="futures-schedules-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_code|query|string|false|The product code of the futures contract.|
|product_code.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|product_code.gt|query|string|false|Filter greater than the value.|
|product_code.gte|query|string|false|Filter greater than or equal to the value.|
|product_code.lt|query|string|false|Filter less than the value.|
|product_code.lte|query|string|false|Filter less than or equal to the value.|
|session_end_date|query|string|false|The session end date for the schedules (also known as the trading date). This field is optional and can be used to filter results by a specific session end date. If left blank, schedules for all dates will be returned. Note that trading sessions end at 5 PM Central Time, so a session ending at 5 PM CT on January 1st would have a session_end_date of 2025-01-01. Value must be formatted 'yyyy-mm-dd'.|
|session_end_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|session_end_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|session_end_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|session_end_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|trading_venue|query|string|false|The trading venue (MIC) for the exchange on which this schedule's product trades.|
|trading_venue.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|trading_venue.gt|query|string|false|Filter greater than the value.|
|trading_venue.gte|query|string|false|Filter greater than or equal to the value.|
|trading_venue.lt|query|string|false|Filter less than the value.|
|trading_venue.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '10' if not specified. The maximum allowed limit is '1000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'product_code' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.staging.massive.com/futures/v2/schedules?cursor=AQANA0VSTAIAAAEFAAEBAwACAQ0DRVJMAQ0ZMjAyNC0wNi0xMFQyMTowMDowMCswMDowMA==",
  "request_id": "a83620d1ec6a4cd5b84ea669e377fd47",
  "results": [
    {
      "event": "pre_open",
      "product_code": "ERL",
      "product_name": "ERCOT North 345 kV Hub Day-Ahead 5 MW Off-Peak Futures",
      "session_end_date": "2024-06-10",
      "timestamp": "2024-06-09T21:00:00+00:00",
      "trading_venue": "XNYM"
    },
    {
      "event": "open",
      "product_code": "ERL",
      "product_name": "ERCOT North 345 kV Hub Day-Ahead 5 MW Off-Peak Futures",
      "session_end_date": "2024-06-10",
      "timestamp": "2024-06-09T22:00:00+00:00",
      "trading_venue": "XNYM"
    },
    {
      "event": "close",
      "product_code": "ERL",
      "product_name": "ERCOT North 345 kV Hub Day-Ahead 5 MW Off-Peak Futures",
      "session_end_date": "2024-06-10",
      "timestamp": "2024-06-10T21:00:00+00:00",
      "trading_venue": "XNYM"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="futures-schedules-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="futures-schedules-api-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» event|string|false|none|The type of session on the given trading date.|
|» product_code|string|false|none|The product code of the futures contract.|
|» product_name|string|false|none|The name of the futures product to which this schedule applies.|
|» session_end_date|string(date)|false|none|The session end date for the schedules (also known as the trading date). This field is optional and can be used to filter results by a specific session end date. If left blank, schedules for all dates will be returned. Note that trading sessions end at 5 PM Central Time, so a session ending at 5 PM CT on January 1st would have a session_end_date of 2025-01-01.|
|» timestamp|string(date-time)|false|none|The timestamp for the given market event.|
|» trading_venue|string|false|none|The trading venue (MIC) for the exchange on which this schedule's product trades.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## futures_snapshot_v1 API

<a id="opIdget_futures_v1_snapshot"></a>

> Code samples

```bash
curl "https://api.polygon.io/futures/v1/snapshot?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /futures/v1/snapshot`

Retrieve a snapshot of the most recent futures contract data.

<h3 id="futuressnapshotv1-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_code|query|string|false|The code for the contracts' underlying product.|
|product_code.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|product_code.gt|query|string|false|Filter greater than the value.|
|product_code.gte|query|string|false|Filter greater than or equal to the value.|
|product_code.lt|query|string|false|Filter less than the value.|
|product_code.lte|query|string|false|Filter less than or equal to the value.|
|ticker|query|string|false|The futures contract identifier, including the base symbol and contract expiration (e.g., ESZ24 for the December 2024 S&P 500 E-mini contract).|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'ticker' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "next_url": "https://api.massive.com/futures/v1/snapshot?cursor=AQANAkNCBVNQ",
  "request_id": "c4d50f4801874e30b63e674b844cf51f",
  "results": [
    {
      "details": {
        "settlement_date": 1753851600000000000
      },
      "last_minute": {
        "close": 240.00000000000003,
        "high": 240.00000000000003,
        "last_updated": 1746045300000,
        "low": 240.00000000000003,
        "open": 240.00000000000003,
        "volume": 5
      },
      "last_quote": {
        "ask": 240.50000000000003,
        "ask_size": 3,
        "ask_timestamp": 1746036204386194000,
        "bid": 239.50000000000003,
        "bid_size": 2,
        "bid_timestamp": 1746035747932118000,
        "last_updated": 1746046798024234200
      },
      "last_trade": {
        "last_updated": 1746045242858242600,
        "price": 240.00000000000003,
        "size": 5
      },
      "product_code": "CB",
      "session": {
        "change": 21.11,
        "change_percent": 0.09622134,
        "close": 240.00000000000003,
        "high": 241.00000000000003,
        "low": 240.00000000000003,
        "open": 240.00000000000003,
        "previous_settlement": 219.39,
        "settlement_price": 240.50000000000003,
        "volume": 55
      },
      "ticker": "CBN5"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="futuressnapshotv1-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="futuressnapshotv1-api-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» details|object|false|none|none|
|» » product_code|string|false|none|none|
|» » settlement_date|string(date)|false|none|The day that this contract is settled.|
|» » ticker|string|false|none|none|
|» last_minute|object|false|none|none|
|» » close|number(double)|false|none|The price at the end of the minute bar.|
|» » high|number(double)|false|none|The highest price reached in the minute bar.|
|» » last_updated|integer(int64)|false|none|The timestamp indicating the most recent update to the minute bar.|
|» » low|number(double)|false|none|The lowest price reached in the minute bar.|
|» » open|number(double)|false|none|The opening price at the start of the minute bar.|
|» » timeframe|string|false|none|The timeliness of the data as determined by your subscription. One of REAL-TIME or DELAYED.|
|» » volume|integer(int64)|false|none|The number of contracts traded in the minute bar.|
|» last_quote|object|false|none|none|
|» » ask|number(double)|false|none|The lowest price a seller is willing to accept.|
|» » ask_size|integer(int32)|false|none|The number of contracts available at the ask price.|
|» » ask_timestamp|integer(int64)|false|none|The time when the best ask price was last updated.|
|» » bid|number(double)|false|none|The highest price a buyer is willing to pay.|
|» » bid_size|integer(int32)|false|none|The number of contracts available at the bid price.|
|» » bid_timestamp|integer(int64)|false|none|The time when the best bid price was last updated.|
|» » last_updated|integer(int64)|false|none|The time when the quote was generated at the exchange to nanosecond precision.|
|» » timeframe|string|false|none|The timeliness of the data as determined by your subscription. One of REAL-TIME or DELAYED.|
|» last_trade|object|false|none|none|
|» » last_updated|integer(int64)|false|none|The time when the trade was generated at the exchange to nanosecond precision.|
|» » price|number(double)|false|none|The price of the trade. This is the actual dollar value per whole contract of this trade. A trade of 100 contracts with a price of $2.00 would be worth a total dollar value of $200.00.|
|» » size|integer(int64)|false|none|The total number of contracts exchanged between buyers and sellers on a given trade.|
|» » timeframe|string|false|none|The timeliness of the data as determined by your subscription. One of REAL-TIME or DELAYED.|
|» session|object|false|none|none|
|» » change|number(double)|false|none|The change in price during this session.|
|» » change_percent|number(double)|false|none|The percentage change in price during this session.|
|» » close|number(double)|false|none|The price at the end of the session.|
|» » high|number(double)|false|none|The highest price reached in the session.|
|» » low|number(double)|false|none|The lowest price reached in the session.|
|» » open|number(double)|false|none|The opening price at the start of the session.|
|» » previous_settlement|number(double)|false|none|The settlement price of the previous session.|
|» » settlement_price|number(double)|false|none|The final settlement price at the end of the session.|
|» » volume|integer(int64)|false|none|The number of contracts traded in the session.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_futures_v1_trades_ticker

<a id="opIdget_futures_v1_trades_ticker"></a>

> Code samples

```bash
curl "https://api.polygon.io/futures/v1/trades/string?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /futures/v1/trades/{ticker}`

Retrieve comprehensive, tick-level trade data for a specified futures contract ticker over a defined time range. Each record includes the trade price, size, session start date, and precise timestamps, capturing individual trade events throughout the period. This granular data is essential for constructing aggregated bars and performing detailed analyses of intraday price movements, making it a valuable tool for backtesting, algorithmic strategy development, and market research.

Use Cases: Intraday analysis, algorithmic trading, backtesting, market research.

<h3 id="getfuturesv1tradesticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timestamp|query|string|false|The time when the trade was generated at the exchange to nanosecond precision. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|timestamp.gt|query|string|false|Filter greater than the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|timestamp.gte|query|string|false|Filter greater than or equal to the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|timestamp.lt|query|string|false|Filter less than the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|timestamp.lte|query|string|false|Filter less than or equal to the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|session_end_date|query|string|false|Also known as the trading date, the date of the end of the trading session, in YYYY-MM-DD format.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '10' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'timestamp' if not specified. The sort order defaults to 'desc' if not specified.|
|ticker|path|string|true|The futures contract identifier, including the base symbol and contract expiration (e.g., GCJ5 for the April 2025 gold contract).|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.massive.com/futures/v1/trades/ESZ4?cursor=YXA9MTczNDQ3MDk3MDAwODU5OTI2MSZhcz0yNzIzNTI4MyZsaW1pdD0xMDAwJnNlc3Npb25fZW5kX2RhdGU9MjAyNC0xMi0xNyZzb3J0PXRpbWVzdGFtcC5kZXNj",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": [
    {
      "price": 6052,
      "report_sequence": 12033289,
      "sequence_number": 27317882,
      "session_end_date": "2024-12-17",
      "size": 3,
      "ticker": "ESZ4",
      "timestamp": 1734472799000509200
    },
    {
      "price": 6051.75,
      "report_sequence": 12033276,
      "sequence_number": 27317863,
      "session_end_date": "2024-12-17",
      "size": 1,
      "ticker": "ESZ4",
      "timestamp": 1734472798789679900
    },
    {
      "price": 6052,
      "report_sequence": 12033255,
      "sequence_number": 27317826,
      "session_end_date": "2024-12-17",
      "size": 2,
      "ticker": "ESZ4",
      "timestamp": 1734472797000893000
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getfuturesv1tradesticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getfuturesv1tradesticker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» channel|integer(int32)|true|none|The CME multicast channel this event was sourced from.|
|» price|number(double)|false|none|The price of the trade. This is the actual dollar value per whole contract of this trade. A trade of 100 contracts with a price of $2.00 would be worth a total dollar value of $200.00.|
|» report_sequence|integer(int64)|true|none|The reporting sequence number.|
|» sequence_number|integer(int64)|true|none|The unique sequence number assigned to this trade.|
|» session_end_date|string|false|none|Also known as the trading date, the date of the end of the trading session, in YYYY-MM-DD format.|
|» size|integer(int64)|false|none|The total number of contracts exchanged between buyers and sellers on a given trade.|
|» ticker|string|true|none|The futures contract identifier, including the base symbol and contract expiration (e.g., GCJ5 for the April 2025 gold contract).|
|» timestamp|integer(int64)|true|none|The time when the trade was generated at the exchange to nanosecond precision.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-usoptions">us_options</h1>

## get_options_v1_exchanges

<a id="opIdget_options_v1_exchanges"></a>

> Code samples

```bash
curl "https://api.polygon.io/options/v1/exchanges?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /options/v1/exchanges`

US options exchanges and trading venues including traditional options exchanges (CBOE, ISE, etc.), Securities Information Processors (SIP), and other options market infrastructure for derivatives trading.

<h3 id="getoptionsv1exchanges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '1000'.|

> Example responses

> 200 Response

```json
{
  "count": 2,
  "request_id": 1,
  "results": [
    {
      "id": "302",
      "locale": "US",
      "mic": "XCBO",
      "name": "Chicago Board Options Exchange",
      "operating_mic": "XCBO",
      "participant_id": "C",
      "type": "exchange",
      "url": "https://www.cboe.com"
    },
    {
      "acronym": "ISE",
      "id": "308",
      "locale": "US",
      "mic": "XISX",
      "name": "International Securities Exchange, LLC",
      "operating_mic": "XISX",
      "participant_id": "I",
      "type": "exchange",
      "url": "https://www.nasdaq.com/solutions/nasdaq-ise"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getoptionsv1exchanges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getoptionsv1exchanges-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» acronym|string|false|none|Exchange acronym or short name (e.g., 'ISE', 'GEMX') - may be null for some venues.|
|» id|string|true|none|Numeric identifier for the options trading venue or exchange.|
|» locale|string|false|none|Geographic location code.|
|» mic|string|false|none|Market Identifier Code (MIC) - ISO 10383 standard four-character code identifying the specific options market.|
|» name|string|true|none|Full official name of the options exchange or trading venue.|
|» operating_mic|string|false|none|Operating Market Identifier Code - identifies the parent organization or operating entity.|
|» participant_id|string|false|none|Single-character participant identifier used in consolidator market data feeds and options trade reporting.|
|» type|string|true|none|Type of venue: 'exchange' for options exchanges, 'SIP' for Securities Information Processors like OPRA (Options Price Reporting Authority).|
|» url|string|false|none|Official website URL of the organization operating the options exchange.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_options_v3_quotes_ticker

<a id="opIdget_options_v3_quotes_ticker"></a>

> Code samples

```bash
curl "https://api.polygon.io/options/v3/quotes/string?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /options/v3/quotes/{ticker}`

Contains NBBO (National Best Bid and Offer) quote records for US options contracts, capturing bid/ask prices, sizes, and exchange attribution at nanosecond precision.

<h3 id="getoptionsv3quotesticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timestamp|query|string|false|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this quote from the exchange which produced it. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|timestamp.gt|query|string|false|Filter greater than the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|timestamp.gte|query|string|false|Filter greater than or equal to the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|timestamp.lt|query|string|false|Filter less than the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|timestamp.lte|query|string|false|Filter less than or equal to the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '1000' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'timestamp' if not specified. The sort order defaults to 'desc' if not specified.|
|ticker|path|string|true|The options ticker symbol (e.g., O:SPY260123C00687000).|

> Example responses

> 200 Response

```json
{
  "next_url": "string",
  "request_id": "string",
  "results": [
    {
      "ask_exchange": 0,
      "ask_price": 0,
      "ask_size": 0,
      "bid_exchange": 0,
      "bid_price": 0,
      "bid_size": 0,
      "sequence_number": 0,
      "sip_timestamp": 0,
      "ticker": "string"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getoptionsv3quotesticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getoptionsv3quotesticker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» ask_exchange|integer(int32)|true|none|The exchange ID reporting the ask side of the quote.|
|» ask_price|number(double)|true|none|The ask price.|
|» ask_size|integer(int64)|true|none|The size available at the ask price.|
|» bid_exchange|integer(int32)|true|none|The exchange ID reporting the bid side of the quote.|
|» bid_price|number(double)|true|none|The bid price.|
|» bid_size|integer(int64)|true|none|The size available at the bid price.|
|» sequence_number|integer(int64)|true|none|The sequence number represents the sequence in which quote events happened. These are increasing and unique per ticker symbol, but will not always be sequential. Values reset after each trading session/day.|
|» sip_timestamp|integer(int64)|false|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this quote from the exchange which produced it.|
|» ticker|string|true|none|The options ticker symbol (e.g., O:SPY260123C00687000).|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_options_v3_trades_ticker

<a id="opIdget_options_v3_trades_ticker"></a>

> Code samples

```bash
curl "https://api.polygon.io/options/v3/trades/string?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /options/v3/trades/{ticker}`

Contains individual trade transactions for US options contracts, capturing trade execution details including pricing, timing, and exchange information.

<h3 id="getoptionsv3tradesticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timestamp|query|string|false|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this trade from the exchange which produced it. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|timestamp.gt|query|string|false|Filter greater than the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|timestamp.gte|query|string|false|Filter greater than or equal to the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|timestamp.lt|query|string|false|Filter less than the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|timestamp.lte|query|string|false|Filter less than or equal to the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '1000' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'timestamp' if not specified. The sort order defaults to 'desc' if not specified.|
|ticker|path|string|true|The options ticker symbol (e.g., O:SPY260123C00687000).|

> Example responses

> 200 Response

```json
{
  "next_url": "string",
  "request_id": "string",
  "results": [
    {
      "conditions": [
        0
      ],
      "exchange": 0,
      "participant_timestamp": 0,
      "price": 0,
      "sequence_number": 0,
      "sip_timestamp": 0,
      "size": 0,
      "ticker": "string"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getoptionsv3tradesticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getoptionsv3tradesticker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» conditions|[integer(int32)]|false|none|A list of condition codes. See [Options Condition Codes](https://massive.com/docs/rest/options/market-operations/condition-codes) for what each code means.|
|» exchange|integer(int32)|true|none|The exchange ID.|
|» participant_timestamp|integer(int64)|false|none|The nanosecond accuracy Participant/Exchange Unix Timestamp. This is the timestamp of when the trade was actually generated at the exchange.|
|» price|number(double)|true|none|The price of the trade. This is the actual dollar value per whole contract of this trade.|
|» sequence_number|integer(int64)|false|none|The sequence number represents the sequence in which trade events happened. These are increasing and unique per ticker symbol, but will not always be sequential. Values reset after each trading session/day.|
|» sip_timestamp|integer(int64)|false|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this trade from the exchange which produced it.|
|» size|integer(int64)|true|none|The size of a trade (also known as volume).|
|» ticker|string|true|none|The options ticker symbol (e.g., O:SPY260123C00687000).|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-usstocksall">us_stocks_all</h1>

## get_stocks_dev_trades_ticker

<a id="opIdget_stocks_dev_trades_ticker"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/dev/trades/string?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/dev/trades/{ticker}`

Contains individual trade transactions for US stocks, capturing trade execution details including pricing, timing, and exchange information.

<h3 id="getstocksdevtradesticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sip_timestamp|query|string|false|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this trade from the exchange which produced it. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|sip_timestamp.gt|query|string|false|Filter greater than the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|sip_timestamp.gte|query|string|false|Filter greater than or equal to the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|sip_timestamp.lt|query|string|false|Filter less than the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|sip_timestamp.lte|query|string|false|Filter less than or equal to the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'sip_timestamp' if not specified. The sort order defaults to 'desc' if not specified.|
|ticker|path|string|true|The ticker symbol.|

> Example responses

> 200 Response

```json
{
  "next_url": "string",
  "request_id": "string",
  "results": [
    {
      "conditions": [
        0
      ],
      "correction": 0,
      "exchange": 0,
      "id": "string",
      "participant_timestamp": 0,
      "price": 0,
      "sequence_number": 0,
      "sip_timestamp": 0,
      "size": 0,
      "size_fraction": 0,
      "tape": 0,
      "ticker": "string",
      "trf_id": 0,
      "trf_timestamp": 0
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksdevtradesticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksdevtradesticker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» conditions|[integer(int32)]|false|none|A list of condition codes. See [Stocks Condition Codes](https://massive.com/docs/rest/stocks/market-operations/condition-codes) for what each code means.|
|» correction|integer(int64)|false|none|The trade correction indicator.|
|» exchange|integer(int32)|false|none|The exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» id|string|false|none|The Trade ID which uniquely identifies a trade. These are unique per<br>combination of ticker, exchange, and TRF. For example: A trade for AAPL<br>executed on NYSE and a trade for AAPL executed on NASDAQ could potentially<br>have the same Trade ID.|
|» participant_timestamp|integer(int64)|false|none|The nanosecond accuracy Participant/Exchange Unix Timestamp. This is the timestamp of when the trade was actually generated at the exchange.|
|» price|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.|
|» sequence_number|integer(int64)|true|none|The sequence number represents the sequence in which trade events happened.<br>These are increasing and unique per ticker symbol, but will not always be<br>sequential (e.g., 1, 2, 6, 9, 10, 11). Values reset after each trading session/day.|
|» sip_timestamp|integer(int64)|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this trade from the exchange which produced it.|
|» size|integer(int32)|true|none|The size of a trade (also known as volume).|
|» size_fraction|integer(int64)|true|none|The fractional size of a trade (also known as volume).|
|» tape|integer(int32)|false|none|There are 3 tapes which define which exchange the ticker is listed on. These are integers in our objects which represent the letter of the alphabet. Eg: 1 = A, 2 = B, 3 = C.<br>* Tape A is NYSE listed securities<br>* Tape B is NYSE ARCA / NYSE American<br>* Tape C is NASDAQ|
|» ticker|string|true|none|The ticker symbol.|
|» trf_id|integer(int32)|false|none|The ID for the Trade Reporting Facility where the trade took place.|
|» trf_timestamp|integer(int64)|false|none|The nanosecond accuracy TRF (Trade Reporting Facility) Unix Timestamp. This is the timestamp of when the trade reporting facility received this trade.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_v1_exchanges

<a id="opIdget_stocks_v1_exchanges"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/v1/exchanges?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/v1/exchanges`

US stock exchanges, trading venues, and reporting facilities including exchanges (NYSE, Nasdaq), Trade Reporting Facilities (TRF), Securities Information Processors (SIP), and OTC Reporting Facilities (ORF) for equity trading.

<h3 id="getstocksv1exchanges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '1000'.|

> Example responses

> 200 Response

```json
{
  "count": 2,
  "request_id": 1,
  "results": [
    {
      "id": "10",
      "locale": "US",
      "mic": "XNYS",
      "name": "New York Stock Exchange",
      "operating_mic": "XNYS",
      "participant_id": "N",
      "type": "exchange",
      "url": "https://www.nyse.com"
    },
    {
      "id": "12",
      "locale": "US",
      "mic": "XNAS",
      "name": "Nasdaq",
      "operating_mic": "XNAS",
      "participant_id": "T",
      "type": "exchange",
      "url": "https://www.nasdaq.com"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksv1exchanges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksv1exchanges-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» acronym|string|false|none|Short acronym or abbreviation (may be null for some venues).|
|» id|string|true|none|Numeric identifier for the trading venue or exchange.|
|» locale|string|false|none|Geographic location code.|
|» mic|string|false|none|Market Identifier Code (MIC) - ISO 10383 standard four-character code for the market (may be empty for some venues).|
|» name|string|true|none|Full official name of the exchange, trading venue, or reporting facility.|
|» operating_mic|string|false|none|Operating Market Identifier Code - identifies the specific operating entity or parent organization.|
|» participant_id|string|false|none|Single-character participant identifier used in market data feeds and trade reporting.|
|» type|string|true|none|Type of trading venue: 'exchange' for stock exchanges, 'TRF' for Trade Reporting Facilities, 'SIP' for Securities Information Processors, 'ORF' for OTC Reporting Facility.|
|» url|string|false|none|Official website URL of the organization operating the venue.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-financials">financials</h1>

## get_stocks_financials_v1_balance-sheets

<a id="opIdget_stocks_financials_v1_balance-sheets"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/financials/v1/balance-sheets?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/financials/v1/balance-sheets`

A comprehensive financial dataset containing quarterly and annual balance sheet data for public companies. Includes detailed asset, liability, and equity positions representing the company's financial position at specific points in time. Balance sheet data represents point-in-time snapshots rather than cumulative flows, showing what the company owns, owes, and shareholders' equity as of each period end date.

<h3 id="getstocksfinancialsv1balance-sheets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cik|query|string|false|The company's Central Index Key (CIK), a unique identifier assigned by the U.S. Securities and Exchange Commission (SEC). You can look up a company's CIK using the [SEC CIK Lookup tool](https://www.sec.gov/search-filings/cik-lookup).|
|cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|cik.gt|query|string|false|Filter greater than the value.|
|cik.gte|query|string|false|Filter greater than or equal to the value.|
|cik.lt|query|string|false|Filter less than the value.|
|cik.lte|query|string|false|Filter less than or equal to the value.|
|tickers|query|string|false|Filter for arrays that contain the value.|
|tickers.all_of|query|string|false|Filter for arrays that contain all of the values. Multiple values can be specified by using a comma separated list.|
|tickers.any_of|query|string|false|Filter for arrays that contain any of the values. Multiple values can be specified by using a comma separated list.|
|period_end|query|string|false|The last date of the reporting period, representing the specific point in time when the balance sheet snapshot was taken. Value must be formatted 'yyyy-mm-dd'.|
|period_end.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|period_end.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|period_end.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|period_end.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date|query|string|false|The date of the most recent SEC filing that included this period's data. This is not necessarily the date this period was originally filed. Because SEC filings restate comparative data for prior periods, multiple records can share the same filing_date. For example, an annual 10-K reports three years of results, and a 10-Q includes prior period comparatives. To find the original filing date for a specific 10-K or 10-Q, use the SEC EDGAR filings index endpoint (/stocks/filings/vX/index). Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|fiscal_year|query|integer(int64)|false|The fiscal year for the reporting period. Value must be an integer.|
|fiscal_year.gt|query|integer(int64)|false|Filter greater than the value. Value must be an integer.|
|fiscal_year.gte|query|integer(int64)|false|Filter greater than or equal to the value. Value must be an integer.|
|fiscal_year.lt|query|integer(int64)|false|Filter less than the value. Value must be an integer.|
|fiscal_year.lte|query|integer(int64)|false|Filter less than or equal to the value. Value must be an integer.|
|fiscal_quarter|query|integer(int64)|false|The fiscal quarter number (1, 2, 3, or 4) for the reporting period. Value must be an integer.|
|fiscal_quarter.gt|query|integer(int64)|false|Filter greater than the value. Value must be an integer.|
|fiscal_quarter.gte|query|integer(int64)|false|Filter greater than or equal to the value. Value must be an integer.|
|fiscal_quarter.lt|query|integer(int64)|false|Filter less than the value. Value must be an integer.|
|fiscal_quarter.lte|query|integer(int64)|false|Filter less than or equal to the value. Value must be an integer.|
|timeframe|query|string|false|The reporting period type. Possible values include: quarterly, annual.|
|timeframe.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|timeframe.gt|query|string|false|Filter greater than the value.|
|timeframe.gte|query|string|false|Filter greater than or equal to the value.|
|timeframe.lt|query|string|false|Filter less than the value.|
|timeframe.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'period_end' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "request_id": "d9f86384d43845a4a3d7b79098fb08dd",
  "results": [
    {
      "accounts_payable": 50374000000,
      "accrued_and_other_current_liabilities": 62499000000,
      "accumulated_other_comprehensive_income": -6369000000,
      "cash_and_equivalents": 36269000000,
      "cik": "0000320193",
      "common_stock": 89806000000,
      "debt_current": 19268000000,
      "deferred_revenue_current": 8979000000,
      "filing_date": "2025-08-01",
      "fiscal_quarter": 3,
      "fiscal_year": 2025,
      "inventories": 5925000000,
      "long_term_debt_and_capital_lease_obligations": 82430000000,
      "other_assets": 160496000000,
      "other_current_assets": 14359000000,
      "other_equity": 0,
      "other_noncurrent_liabilities": 42115000000,
      "period_end": "2025-06-28",
      "property_plant_equipment_net": 48508000000,
      "receivables": 46835000000,
      "retained_earnings_deficit": -17607000000,
      "tickers": [
        "AAPL"
      ],
      "timeframe": "quarterly",
      "total_assets": 331495000000,
      "total_current_assets": 103388000000,
      "total_current_liabilities": 141120000000,
      "total_equity": 65830000000,
      "total_equity_attributable_to_parent": 65830000000,
      "total_liabilities": 265665000000,
      "total_liabilities_and_equity": 331495000000
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksfinancialsv1balance-sheets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksfinancialsv1balance-sheets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» accounts_payable|number(double)|false|none|Amounts owed to suppliers and vendors for goods and services purchased on credit.|
|» accrued_and_other_current_liabilities|number(double)|false|none|Current liabilities not classified elsewhere, including accrued expenses, taxes payable, and other obligations due within one year.|
|» accumulated_other_comprehensive_income|number(double)|false|none|Cumulative gains and losses that bypass the income statement, including foreign currency translation adjustments and unrealized gains/losses on securities.|
|» additional_paid_in_capital|number(double)|false|none|Amount received from shareholders in excess of the par or stated value of shares issued.|
|» cash_and_equivalents|number(double)|false|none|Cash on hand and short-term, highly liquid investments that are readily convertible to known amounts of cash.|
|» cik|string|false|none|The company's Central Index Key (CIK), a unique identifier assigned by the U.S. Securities and Exchange Commission (SEC). You can look up a company's CIK using the [SEC CIK Lookup tool](https://www.sec.gov/search-filings/cik-lookup).|
|» commitments_and_contingencies|number(double)|false|none|Disclosed amount related to contractual commitments and potential liabilities that may arise from uncertain future events.|
|» common_stock|number(double)|false|none|Par or stated value of common shares outstanding representing basic ownership in the company.|
|» debt_current|number(double)|false|none|Short-term borrowings and the current portion of long-term debt due within one year.|
|» deferred_revenue_current|number(double)|false|none|Customer payments received in advance for goods or services to be delivered within one year.|
|» filing_date|string(date)|false|none|The date of the most recent SEC filing that included this period's data. This is not necessarily the date this period was originally filed. Because SEC filings restate comparative data for prior periods, multiple records can share the same filing_date. For example, an annual 10-K reports three years of results, and a 10-Q includes prior period comparatives. To find the original filing date for a specific 10-K or 10-Q, use the SEC EDGAR filings index endpoint (/stocks/filings/vX/index).|
|» fiscal_quarter|integer(int64)|false|none|The fiscal quarter number (1, 2, 3, or 4) for the reporting period.|
|» fiscal_year|integer(int64)|false|none|The fiscal year for the reporting period.|
|» goodwill|number(double)|false|none|Intangible asset representing the excess of purchase price over fair value of net assets acquired in business combinations.|
|» intangible_assets_net|number(double)|false|none|Intangible assets other than goodwill, including patents, trademarks, and customer relationships, net of accumulated amortization.|
|» inventories|number(double)|false|none|Raw materials, work-in-process, and finished goods held for sale in the ordinary course of business.|
|» long_term_debt_and_capital_lease_obligations|number(double)|false|none|Long-term borrowings and capital lease obligations with maturities greater than one year.|
|» noncontrolling_interest|number(double)|false|none|Equity in consolidated subsidiaries not owned by the parent company, representing minority shareholders' ownership.|
|» other_assets|number(double)|false|none|Non-current assets not classified elsewhere, including long-term investments, deferred tax assets, and other long-term assets.|
|» other_current_assets|number(double)|false|none|Current assets not classified elsewhere, including prepaid expenses, taxes receivable, and other assets expected to be converted to cash within one year.|
|» other_equity|number(double)|false|none|Equity components not classified elsewhere in shareholders' equity.|
|» other_noncurrent_liabilities|number(double)|false|none|Non-current liabilities not classified elsewhere, including deferred tax liabilities, pension obligations, and other long-term liabilities.|
|» period_end|string(date)|false|none|The last date of the reporting period, representing the specific point in time when the balance sheet snapshot was taken.|
|» preferred_stock|number(double)|false|none|Par or stated value of preferred shares outstanding with preferential rights over common stock.|
|» property_plant_equipment_net|number(double)|false|none|Tangible fixed assets used in operations, reported net of accumulated depreciation.|
|» receivables|number(double)|false|none|Amounts owed to the company by customers and other parties, primarily accounts receivable, net of allowances for doubtful accounts.|
|» retained_earnings_deficit|number(double)|false|none|Cumulative net income earned by the company less dividends paid to shareholders since inception.|
|» short_term_investments|number(double)|false|none|Marketable securities and other investments with maturities of one year or less that are not classified as cash equivalents.|
|» tickers|[string]|false|none|A list of ticker symbols under which the company is listed. Multiple symbols may indicate different share classes for the same company.|
|» timeframe|string|true|none|The reporting period type. Possible values include: quarterly, annual.|
|» total_assets|number(double)|false|none|Sum of all current and non-current assets representing everything the company owns or controls.|
|» total_current_assets|number(double)|false|none|Sum of all current assets expected to be converted to cash, sold, or consumed within one year.|
|» total_current_liabilities|number(double)|false|none|Sum of all liabilities expected to be settled within one year.|
|» total_equity|number(double)|false|none|Sum of all equity components representing shareholders' total ownership interest in the company.|
|» total_equity_attributable_to_parent|number(double)|false|none|Total shareholders' equity attributable to the parent company, excluding noncontrolling interests.|
|» total_liabilities|number(double)|false|none|Sum of all current and non-current liabilities representing everything the company owes.|
|» total_liabilities_and_equity|number(double)|false|none|Sum of total liabilities and total equity, which should equal total assets per the fundamental accounting equation.|
|» treasury_stock|number(double)|false|none|Cost of the company's own shares that have been repurchased and are held in treasury, typically reported as a negative value.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_financials_v1_cash-flow-statements

<a id="opIdget_stocks_financials_v1_cash-flow-statements"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/financials/v1/cash-flow-statements?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/financials/v1/cash-flow-statements`

A comprehensive financial dataset containing quarterly, annual, and trailing twelve-month cash flow statement data for public companies. Includes detailed operating, investing, and financing cash flows with proper TTM calculations that sum all cash flow components over four quarters. TTM records are validated to ensure exactly four distinct quarters spanning 250-400 days for accurate trailing twelve-month cash flow analysis.

<h3 id="getstocksfinancialsv1cash-flow-statements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cik|query|string|false|The company's Central Index Key (CIK), a unique identifier assigned by the U.S. Securities and Exchange Commission (SEC). You can look up a company’s CIK using the [SEC CIK Lookup tool](https://www.sec.gov/search-filings/cik-lookup).|
|cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|cik.gt|query|string|false|Filter greater than the value.|
|cik.gte|query|string|false|Filter greater than or equal to the value.|
|cik.lt|query|string|false|Filter less than the value.|
|cik.lte|query|string|false|Filter less than or equal to the value.|
|period_end|query|string|false|The last date of the reporting period (formatted as YYYY-MM-DD). Value must be formatted 'yyyy-mm-dd'.|
|period_end.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|period_end.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|period_end.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|period_end.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date|query|string|false|The date of the most recent SEC filing that included this period's data. This is not necessarily the date this period was originally filed. Because SEC filings restate comparative data for prior periods, multiple records can share the same filing_date. For example, an annual 10-K reports three years of results, and a 10-Q includes prior period comparatives. To find the original filing date for a specific 10-K or 10-Q, use the SEC EDGAR filings index endpoint (/stocks/filings/vX/index). Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|tickers|query|string|false|Filter for arrays that contain the value.|
|tickers.all_of|query|string|false|Filter for arrays that contain all of the values. Multiple values can be specified by using a comma separated list.|
|tickers.any_of|query|string|false|Filter for arrays that contain any of the values. Multiple values can be specified by using a comma separated list.|
|fiscal_year|query|integer(int64)|false|The fiscal year for the reporting period. Value must be an integer.|
|fiscal_year.gt|query|integer(int64)|false|Filter greater than the value. Value must be an integer.|
|fiscal_year.gte|query|integer(int64)|false|Filter greater than or equal to the value. Value must be an integer.|
|fiscal_year.lt|query|integer(int64)|false|Filter less than the value. Value must be an integer.|
|fiscal_year.lte|query|integer(int64)|false|Filter less than or equal to the value. Value must be an integer.|
|fiscal_quarter|query|integer(int64)|false|The fiscal quarter number (1, 2, 3, or 4) for the reporting period. Value must be an integer.|
|fiscal_quarter.gt|query|integer(int64)|false|Filter greater than the value. Value must be an integer.|
|fiscal_quarter.gte|query|integer(int64)|false|Filter greater than or equal to the value. Value must be an integer.|
|fiscal_quarter.lt|query|integer(int64)|false|Filter less than the value. Value must be an integer.|
|fiscal_quarter.lte|query|integer(int64)|false|Filter less than or equal to the value. Value must be an integer.|
|timeframe|query|string|false|The reporting period type. Possible values include: quarterly, annual, trailing_twelve_months.|
|timeframe.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|timeframe.gt|query|string|false|Filter greater than the value.|
|timeframe.gte|query|string|false|Filter greater than or equal to the value.|
|timeframe.lt|query|string|false|Filter less than the value.|
|timeframe.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'period_end' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "request_id": "d6d389ca03a0450d93c4ecb13ff26dae",
  "results": [
    {
      "cash_from_operating_activities_continuing_operations": 27867000000,
      "change_in_cash_and_equivalents": 8107000000,
      "change_in_other_operating_assets_and_liabilities_net": -2034000000,
      "cik": "0000320193",
      "depreciation_depletion_and_amortization": 2830000000,
      "dividends": -3945000000,
      "filing_date": "2025-08-01",
      "fiscal_quarter": 3,
      "fiscal_year": 2025,
      "long_term_debt_issuances_repayments": -1192000000,
      "net_cash_from_financing_activities": -24833000000,
      "net_cash_from_financing_activities_continuing_operations": -24833000000,
      "net_cash_from_investing_activities": 5073000000,
      "net_cash_from_investing_activities_continuing_operations": 5073000000,
      "net_cash_from_operating_activities": 27867000000,
      "net_income": 23434000000,
      "other_financing_activities": -23599000000,
      "other_investing_activities": 8535000000,
      "other_operating_activities": 3637000000,
      "period_end": "2025-06-28",
      "purchase_of_property_plant_and_equipment": -3462000000,
      "short_term_debt_issuances_repayments": 3903000000,
      "tickers": [
        "AAPL"
      ],
      "timeframe": "quarterly"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksfinancialsv1cash-flow-statements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksfinancialsv1cash-flow-statements-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» cash_from_operating_activities_continuing_operations|number(double)|false|none|Cash generated from continuing business operations before discontinued operations.|
|» change_in_cash_and_equivalents|number(double)|false|none|Net change in cash and cash equivalents during the period, representing the sum of operating, investing, and financing cash flows plus currency effects.|
|» change_in_other_operating_assets_and_liabilities_net|number(double)|false|none|Net change in working capital components including accounts receivable, inventory, accounts payable, and other operating items.|
|» cik|string|false|none|The company's Central Index Key (CIK), a unique identifier assigned by the U.S. Securities and Exchange Commission (SEC). You can look up a company’s CIK using the [SEC CIK Lookup tool](https://www.sec.gov/search-filings/cik-lookup).|
|» depreciation_depletion_and_amortization|number(double)|false|none|Non-cash charges for the reduction in value of tangible and intangible assets over time.|
|» dividends|number(double)|false|none|Cash payments to shareholders in the form of dividends, typically reported as negative values.|
|» effect_of_currency_exchange_rate|number(double)|false|none|Impact of foreign exchange rate changes on cash and cash equivalents denominated in foreign currencies.|
|» filing_date|string(date)|false|none|The date of the most recent SEC filing that included this period's data. This is not necessarily the date this period was originally filed. Because SEC filings restate comparative data for prior periods, multiple records can share the same filing_date. For example, an annual 10-K reports three years of results, and a 10-Q includes prior period comparatives. To find the original filing date for a specific 10-K or 10-Q, use the SEC EDGAR filings index endpoint (/stocks/filings/vX/index).|
|» fiscal_quarter|integer(int64)|false|none|The fiscal quarter number (1, 2, 3, or 4) for the reporting period.|
|» fiscal_year|integer(int64)|false|none|The fiscal year for the reporting period.|
|» income_loss_from_discontinued_operations|number(double)|false|none|After-tax income or loss from business operations that have been discontinued.|
|» long_term_debt_issuances_repayments|number(double)|false|none|Net cash flows from issuing or repaying long-term debt obligations.|
|» net_cash_from_financing_activities|number(double)|false|none|Total cash generated or used by financing activities, including debt issuance, debt repayment, dividends, and share transactions.|
|» net_cash_from_financing_activities_continuing_operations|number(double)|false|none|Cash flows from financing activities of continuing operations before discontinued operations.|
|» net_cash_from_financing_activities_discontinued_operations|number(double)|false|none|Cash flows from financing activities of discontinued business segments.|
|» net_cash_from_investing_activities|number(double)|false|none|Total cash generated or used by investing activities, including capital expenditures, acquisitions, and asset sales.|
|» net_cash_from_investing_activities_continuing_operations|number(double)|false|none|Cash flows from investing activities of continuing operations before discontinued operations.|
|» net_cash_from_investing_activities_discontinued_operations|number(double)|false|none|Cash flows from investing activities of discontinued business segments.|
|» net_cash_from_operating_activities|number(double)|false|none|Total cash generated or used by operating activities, representing cash flow from core business operations.|
|» net_cash_from_operating_activities_discontinued_operations|number(double)|false|none|Cash flows from operating activities of discontinued business segments.|
|» net_income|number(double)|false|none|Net income used as the starting point for operating cash flow calculations.|
|» noncontrolling_interests|number(double)|false|none|Cash flows related to minority shareholders in consolidated subsidiaries.|
|» other_cash_adjustments|number(double)|false|none|Other miscellaneous adjustments to cash flows not classified elsewhere.|
|» other_financing_activities|number(double)|false|none|Cash flows from financing activities not classified elsewhere, including share repurchases and other equity transactions.|
|» other_investing_activities|number(double)|false|none|Cash flows from investing activities not classified elsewhere, including acquisitions, divestitures, and investments.|
|» other_operating_activities|number(double)|false|none|Other adjustments to reconcile net income to operating cash flow not classified elsewhere.|
|» period_end|string(date)|false|none|The last date of the reporting period (formatted as YYYY-MM-DD).|
|» purchase_of_property_plant_and_equipment|number(double)|false|none|Cash outflows for capital expenditures on fixed assets, typically reported as negative values.|
|» sale_of_property_plant_and_equipment|number(double)|false|none|Cash inflows from disposing of fixed assets, typically reported as positive values.|
|» short_term_debt_issuances_repayments|number(double)|false|none|Net cash flows from issuing or repaying short-term debt obligations.|
|» tickers|[string]|false|none|A list of ticker symbols under which the company is listed. Multiple symbols may indicate different share classes for the same company.|
|» timeframe|string|false|none|The reporting period type. Possible values include: quarterly, annual, trailing_twelve_months.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_financials_v1_income-statements

<a id="opIdget_stocks_financials_v1_income-statements"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/financials/v1/income-statements?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/financials/v1/income-statements`

A comprehensive database of income statement financial data for public companies, including key metrics such as revenue, expenses, and net income for various reporting periods.

<h3 id="getstocksfinancialsv1income-statements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cik|query|string|false|The company's Central Index Key (CIK), a unique identifier assigned by the U.S. Securities and Exchange Commission (SEC). You can look up a company’s CIK using the [SEC CIK Lookup tool](https://www.sec.gov/search-filings/cik-lookup).|
|cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|cik.gt|query|string|false|Filter greater than the value.|
|cik.gte|query|string|false|Filter greater than or equal to the value.|
|cik.lt|query|string|false|Filter less than the value.|
|cik.lte|query|string|false|Filter less than or equal to the value.|
|tickers|query|string|false|Filter for arrays that contain the value.|
|tickers.all_of|query|string|false|Filter for arrays that contain all of the values. Multiple values can be specified by using a comma separated list.|
|tickers.any_of|query|string|false|Filter for arrays that contain any of the values. Multiple values can be specified by using a comma separated list.|
|period_end|query|string|false|The last date of the reporting period (formatted as YYYY-MM-DD). Value must be formatted 'yyyy-mm-dd'.|
|period_end.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|period_end.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|period_end.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|period_end.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date|query|string|false|The date of the most recent SEC filing that included this period's data. This is not necessarily the date this period was originally filed. Because SEC filings restate comparative data for prior periods, multiple records can share the same filing_date. For example, an annual 10-K reports three years of results, and a 10-Q includes prior period comparatives. To find the original filing date for a specific 10-K or 10-Q, use the SEC EDGAR filings index endpoint (/stocks/filings/vX/index). Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|filing_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|fiscal_year|query|integer(int64)|false|The fiscal year for the reporting period. Value must be an integer.|
|fiscal_year.gt|query|integer(int64)|false|Filter greater than the value. Value must be an integer.|
|fiscal_year.gte|query|integer(int64)|false|Filter greater than or equal to the value. Value must be an integer.|
|fiscal_year.lt|query|integer(int64)|false|Filter less than the value. Value must be an integer.|
|fiscal_year.lte|query|integer(int64)|false|Filter less than or equal to the value. Value must be an integer.|
|fiscal_quarter|query|integer(int64)|false|The fiscal quarter number (1, 2, 3, or 4) for the reporting period. Value must be an integer.|
|fiscal_quarter.gt|query|integer(int64)|false|Filter greater than the value. Value must be an integer.|
|fiscal_quarter.gte|query|integer(int64)|false|Filter greater than or equal to the value. Value must be an integer.|
|fiscal_quarter.lt|query|integer(int64)|false|Filter less than the value. Value must be an integer.|
|fiscal_quarter.lte|query|integer(int64)|false|Filter less than or equal to the value. Value must be an integer.|
|timeframe|query|string|false|The reporting period type. Possible values include: quarterly, annual, trailing_twelve_months.|
|timeframe.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|timeframe.gt|query|string|false|Filter greater than the value.|
|timeframe.gte|query|string|false|Filter greater than or equal to the value.|
|timeframe.lt|query|string|false|Filter less than the value.|
|timeframe.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'period_end' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "request_id": "5b3cc7c674b34fdd89034b74500bfab5",
  "results": [
    {
      "basic_earnings_per_share": 1.57,
      "basic_shares_outstanding": 14902886000,
      "cik": "0000320193",
      "consolidated_net_income_loss": 23434000000,
      "cost_of_revenue": 50318000000,
      "diluted_earnings_per_share": 1.57,
      "diluted_shares_outstanding": 14948179000,
      "ebitda": 31032000000,
      "filing_date": "2025-08-01",
      "fiscal_quarter": 3,
      "fiscal_year": 2025,
      "gross_profit": 43718000000,
      "income_before_income_taxes": 28031000000,
      "income_taxes": 4597000000,
      "net_income_loss_attributable_common_shareholders": 23434000000,
      "operating_income": 28202000000,
      "other_income_expense": -171000000,
      "other_operating_expenses": 0,
      "period_end": "2025-06-28",
      "research_development": 8866000000,
      "revenue": 94036000000,
      "selling_general_administrative": 6650000000,
      "tickers": [
        "AAPL"
      ],
      "timeframe": "quarterly",
      "total_operating_expenses": 15516000000,
      "total_other_income_expense": -171000000
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksfinancialsv1income-statements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksfinancialsv1income-statements-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» basic_earnings_per_share|number(double)|false|none|Earnings per share calculated using the weighted average number of basic shares outstanding. For TTM records, recalculated as TTM net income divided by average basic shares outstanding over the four quarters.|
|» basic_shares_outstanding|number(double)|false|none|Weighted average number of common shares outstanding during the period, used in basic EPS calculation. For TTM records, represents the average over the four most recent quarters.|
|» cik|string|false|none|The company's Central Index Key (CIK), a unique identifier assigned by the U.S. Securities and Exchange Commission (SEC). You can look up a company’s CIK using the [SEC CIK Lookup tool](https://www.sec.gov/search-filings/cik-lookup).|
|» consolidated_net_income_loss|number(double)|false|none|Total net income or loss for the consolidated entity including all subsidiaries.|
|» cost_of_revenue|number(double)|false|none|Direct costs attributable to the production of goods or services sold, also known as cost of goods sold (COGS).|
|» depreciation_depletion_amortization|number(double)|false|none|Non-cash expenses representing the allocation of asset costs over their useful lives.|
|» diluted_earnings_per_share|number(double)|false|none|Earnings per share calculated using diluted shares outstanding, including the effect of potentially dilutive securities. For TTM records, recalculated as TTM net income divided by average diluted shares outstanding over the four quarters.|
|» diluted_shares_outstanding|number(double)|false|none|Weighted average number of shares outstanding including the dilutive effect of stock options, warrants, and convertible securities. For TTM records, represents the average over the four most recent quarters.|
|» discontinued_operations|number(double)|false|none|After-tax results from business segments that have been or will be disposed of.|
|» ebitda|number(double)|false|none|Earnings before interest, taxes, depreciation, and amortization, a measure of operating performance.|
|» equity_in_affiliates|number(double)|false|none|The company's share of income or losses from equity method investments in affiliated companies.|
|» extraordinary_items|number(double)|false|none|Unusual and infrequent gains or losses that are both unusual in nature and infrequent in occurrence.|
|» filing_date|string(date)|false|none|The date of the most recent SEC filing that included this period's data. This is not necessarily the date this period was originally filed. Because SEC filings restate comparative data for prior periods, multiple records can share the same filing_date. For example, an annual 10-K reports three years of results, and a 10-Q includes prior period comparatives. To find the original filing date for a specific 10-K or 10-Q, use the SEC EDGAR filings index endpoint (/stocks/filings/vX/index).|
|» fiscal_quarter|integer(int64)|false|none|The fiscal quarter number (1, 2, 3, or 4) for the reporting period.|
|» fiscal_year|integer(int64)|false|none|The fiscal year for the reporting period.|
|» gross_profit|number(double)|false|none|Revenue minus cost of revenue, representing profit before operating expenses.|
|» income_before_income_taxes|number(double)|false|none|Pre-tax income calculated as operating income plus total other income/expense.|
|» income_taxes|number(double)|false|none|Income tax expense or benefit for the period.|
|» interest_expense|number(double)|false|none|Cost of borrowed funds, including interest on debt and other financing obligations.|
|» interest_income|number(double)|false|none|Income earned from interest-bearing investments and cash equivalents.|
|» net_income_loss_attributable_common_shareholders|number(double)|false|none|Net income or loss available to common shareholders after preferred dividends and noncontrolling interests.|
|» noncontrolling_interest|number(double)|false|none|The portion of net income attributable to minority shareholders in consolidated subsidiaries.|
|» operating_income|number(double)|false|none|Income from operations calculated as gross profit minus total operating expenses, excluding non-operating items.|
|» other_income_expense|number(double)|false|none|Non-operating income and expenses not related to the company's core business operations.|
|» other_operating_expenses|number(double)|false|none|Operating expenses not classified in the main expense categories.|
|» period_end|string(date)|false|none|The last date of the reporting period (formatted as YYYY-MM-DD).|
|» preferred_stock_dividends_declared|number(double)|false|none|Dividends declared on preferred stock during the period.|
|» research_development|number(double)|false|none|Expenses incurred for research and development activities to create new products or improve existing ones.|
|» revenue|number(double)|false|none|Total revenue or net sales for the period, representing the company's gross income from operations.|
|» selling_general_administrative|number(double)|false|none|Expenses related to selling products and general administrative costs not directly tied to production.|
|» tickers|[string]|false|none|A list of ticker symbols under which the company is listed. Multiple symbols may indicate different share classes for the same company.|
|» timeframe|string|false|none|The reporting period type. Possible values include: quarterly, annual, trailing_twelve_months.|
|» total_operating_expenses|number(double)|false|none|Sum of all operating expenses including cost of revenue, SG&A, R&D, depreciation, and other operating expenses.|
|» total_other_income_expense|number(double)|false|none|Net total of all non-operating income and expenses including interest income, interest expense, and other items.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_financials_v1_ratios

<a id="opIdget_stocks_financials_v1_ratios"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/financials/v1/ratios?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/financials/v1/ratios`

A comprehensive financial ratios dataset providing key valuation, profitability, liquidity, and leverage metrics for public companies. Combines data from income statements, balance sheets, and cash flow statements with daily stock prices to calculate ratios on a daily basis. Uses trailing twelve months (TTM) data for income/cash flow metrics and quarterly data for balance sheet items. Fundamental data updates are applied starting from each filing's period end date. Market cap calculations use point-in-time shares outstanding for historical accuracy.

<h3 id="getstocksfinancialsv1ratios-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|query|string|false|Stock ticker symbol for the company.|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|cik|query|string|false|Central Index Key (CIK) number assigned by the SEC to identify the company.|
|cik.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|cik.gt|query|string|false|Filter greater than the value.|
|cik.gte|query|string|false|Filter greater than or equal to the value.|
|cik.lt|query|string|false|Filter less than the value.|
|cik.lte|query|string|false|Filter less than or equal to the value.|
|price|query|number(double)|false|Stock price used in ratio calculations, typically the closing price for the given date. Value must be a floating point number.|
|price.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|price.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|price.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|price.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|average_volume|query|number(double)|false|Average trading volume over the last 30 trading days, providing context for liquidity. Value must be a floating point number.|
|average_volume.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|average_volume.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|average_volume.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|average_volume.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|market_cap|query|number(double)|false|Market capitalization, calculated as stock price multiplied by total shares outstanding. Value must be a floating point number.|
|market_cap.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|market_cap.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|market_cap.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|market_cap.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|earnings_per_share|query|number(double)|false|Earnings per share, calculated as trailing twelve months (TTM) net income available to common shareholders divided by point-in-time shares outstanding as of the price date, assuming all shares of other share classes are converted to this share class. This is not weighted average basic or diluted shares outstanding, so this value will not match the reported basic or diluted EPS on the income statements endpoint. Value must be a floating point number.|
|earnings_per_share.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|earnings_per_share.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|earnings_per_share.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|earnings_per_share.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|price_to_earnings|query|number(double)|false|Price-to-earnings ratio, calculated as stock price divided by earnings per share. Only calculated when earnings per share is positive. Value must be a floating point number.|
|price_to_earnings.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|price_to_earnings.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|price_to_earnings.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|price_to_earnings.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|price_to_book|query|number(double)|false|Price-to-book ratio, calculated as stock price divided by book value per share, comparing market value to book value. Value must be a floating point number.|
|price_to_book.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|price_to_book.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|price_to_book.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|price_to_book.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|price_to_sales|query|number(double)|false|Price-to-sales ratio, calculated as stock price divided by revenue per share, measuring valuation relative to sales. Value must be a floating point number.|
|price_to_sales.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|price_to_sales.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|price_to_sales.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|price_to_sales.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|price_to_cash_flow|query|number(double)|false|Price-to-cash-flow ratio, calculated as stock price divided by operating cash flow per share. Only calculated when operating cash flow per share is positive. Value must be a floating point number.|
|price_to_cash_flow.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|price_to_cash_flow.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|price_to_cash_flow.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|price_to_cash_flow.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|price_to_free_cash_flow|query|number(double)|false|Price-to-free-cash-flow ratio, calculated as stock price divided by free cash flow per share. Only calculated when free cash flow per share is positive. Value must be a floating point number.|
|price_to_free_cash_flow.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|price_to_free_cash_flow.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|price_to_free_cash_flow.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|price_to_free_cash_flow.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|dividend_yield|query|number(double)|false|Dividend yield, calculated as annual dividends per share divided by stock price, measuring the income return on investment. Value must be a floating point number.|
|dividend_yield.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|dividend_yield.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|dividend_yield.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|dividend_yield.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|return_on_assets|query|number(double)|false|Return on assets ratio, calculated as net income divided by total assets, measuring how efficiently a company uses its assets to generate profit. Value must be a floating point number.|
|return_on_assets.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|return_on_assets.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|return_on_assets.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|return_on_assets.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|return_on_equity|query|number(double)|false|Return on equity ratio, calculated as net income divided by total shareholders' equity, measuring profitability relative to shareholders' equity. Value must be a floating point number.|
|return_on_equity.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|return_on_equity.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|return_on_equity.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|return_on_equity.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|debt_to_equity|query|number(double)|false|Debt-to-equity ratio, calculated as total debt (current debt plus long-term debt) divided by total shareholders' equity, measuring financial leverage. Value must be a floating point number.|
|debt_to_equity.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|debt_to_equity.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|debt_to_equity.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|debt_to_equity.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|current|query|number(double)|false|Current ratio, calculated as total current assets divided by total current liabilities, measuring short-term liquidity. Value must be a floating point number.|
|current.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|current.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|current.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|current.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|quick|query|number(double)|false|Quick ratio (acid-test ratio), calculated as (current assets minus inventories) divided by current liabilities, measuring immediate liquidity. Value must be a floating point number.|
|quick.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|quick.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|quick.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|quick.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|cash|query|number(double)|false|Cash ratio, calculated as cash and cash equivalents divided by current liabilities, measuring the most liquid form of liquidity coverage. Value must be a floating point number.|
|cash.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|cash.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|cash.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|cash.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|ev_to_sales|query|number(double)|false|Enterprise value to sales ratio, calculated as enterprise value divided by revenue, measuring company valuation relative to sales. Value must be a floating point number.|
|ev_to_sales.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|ev_to_sales.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|ev_to_sales.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|ev_to_sales.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|ev_to_ebitda|query|number(double)|false|Enterprise value to EBITDA ratio, calculated as enterprise value divided by EBITDA, measuring company valuation relative to earnings before interest, taxes, depreciation, and amortization. Value must be a floating point number.|
|ev_to_ebitda.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|ev_to_ebitda.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|ev_to_ebitda.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|ev_to_ebitda.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|enterprise_value|query|number(double)|false|Enterprise value, calculated as market capitalization plus total debt minus cash and cash equivalents, representing total company value. Value must be a floating point number.|
|enterprise_value.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|enterprise_value.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|enterprise_value.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|enterprise_value.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|free_cash_flow|query|number(double)|false|Free cash flow, calculated as operating cash flow minus capital expenditures (purchase of property, plant, and equipment). Value must be a floating point number.|
|free_cash_flow.gt|query|number(double)|false|Filter greater than the value. Value must be a floating point number.|
|free_cash_flow.gte|query|number(double)|false|Filter greater than or equal to the value. Value must be a floating point number.|
|free_cash_flow.lt|query|number(double)|false|Filter less than the value. Value must be a floating point number.|
|free_cash_flow.lte|query|number(double)|false|Filter less than or equal to the value. Value must be a floating point number.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'ticker' if not specified. The sort order defaults to 'asc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": "8f5374516fec4a819070e53609f47fab",
  "results": [
    {
      "average_volume": 47500000,
      "cash": 0.19,
      "cik": "320193",
      "current": 0.68,
      "date": "2024-09-19",
      "debt_to_equity": 1.52,
      "dividend_yield": 0.0044,
      "earnings_per_share": 6.57,
      "enterprise_value": 3555509835190,
      "ev_to_ebitda": 26.98,
      "ev_to_sales": 9.22,
      "free_cash_flow": 104339000000,
      "market_cap": 3479770835190,
      "price": 228.87,
      "price_to_book": 52.16,
      "price_to_cash_flow": 30.78,
      "price_to_earnings": 34.84,
      "price_to_free_cash_flow": 33.35,
      "price_to_sales": 9.02,
      "quick": 0.63,
      "return_on_assets": 0.3075,
      "return_on_equity": 1.5284,
      "ticker": "AAPL"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksfinancialsv1ratios-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksfinancialsv1ratios-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» average_volume|number(double)|false|none|Average trading volume over the last 30 trading days, providing context for liquidity.|
|» cash|number(double)|false|none|Cash ratio, calculated as cash and cash equivalents divided by current liabilities, measuring the most liquid form of liquidity coverage.|
|» cik|string|false|none|Central Index Key (CIK) number assigned by the SEC to identify the company.|
|» current|number(double)|false|none|Current ratio, calculated as total current assets divided by total current liabilities, measuring short-term liquidity.|
|» date|string|true|none|Date for which the ratios are calculated, representing the trading date with available price data.|
|» debt_to_equity|number(double)|false|none|Debt-to-equity ratio, calculated as total debt (current debt plus long-term debt) divided by total shareholders' equity, measuring financial leverage.|
|» dividend_yield|number(double)|false|none|Dividend yield, calculated as annual dividends per share divided by stock price, measuring the income return on investment.|
|» earnings_per_share|number(double)|false|none|Earnings per share, calculated as trailing twelve months (TTM) net income available to common shareholders divided by point-in-time shares outstanding as of the price date, assuming all shares of other share classes are converted to this share class. This is not weighted average basic or diluted shares outstanding, so this value will not match the reported basic or diluted EPS on the income statements endpoint.|
|» enterprise_value|number(double)|false|none|Enterprise value, calculated as market capitalization plus total debt minus cash and cash equivalents, representing total company value.|
|» ev_to_ebitda|number(double)|false|none|Enterprise value to EBITDA ratio, calculated as enterprise value divided by EBITDA, measuring company valuation relative to earnings before interest, taxes, depreciation, and amortization.|
|» ev_to_sales|number(double)|false|none|Enterprise value to sales ratio, calculated as enterprise value divided by revenue, measuring company valuation relative to sales.|
|» free_cash_flow|number(double)|false|none|Free cash flow, calculated as operating cash flow minus capital expenditures (purchase of property, plant, and equipment).|
|» market_cap|number(double)|false|none|Market capitalization, calculated as stock price multiplied by total shares outstanding.|
|» price|number(double)|true|none|Stock price used in ratio calculations, typically the closing price for the given date.|
|» price_to_book|number(double)|false|none|Price-to-book ratio, calculated as stock price divided by book value per share, comparing market value to book value.|
|» price_to_cash_flow|number(double)|false|none|Price-to-cash-flow ratio, calculated as stock price divided by operating cash flow per share. Only calculated when operating cash flow per share is positive.|
|» price_to_earnings|number(double)|false|none|Price-to-earnings ratio, calculated as stock price divided by earnings per share. Only calculated when earnings per share is positive.|
|» price_to_free_cash_flow|number(double)|false|none|Price-to-free-cash-flow ratio, calculated as stock price divided by free cash flow per share. Only calculated when free cash flow per share is positive.|
|» price_to_sales|number(double)|false|none|Price-to-sales ratio, calculated as stock price divided by revenue per share, measuring valuation relative to sales.|
|» quick|number(double)|false|none|Quick ratio (acid-test ratio), calculated as (current assets minus inventories) divided by current liabilities, measuring immediate liquidity.|
|» return_on_assets|number(double)|false|none|Return on assets ratio, calculated as net income divided by total assets, measuring how efficiently a company uses its assets to generate profit.|
|» return_on_equity|number(double)|false|none|Return on equity ratio, calculated as net income divided by total shareholders' equity, measuring profitability relative to shareholders' equity.|
|» ticker|string|true|none|Stock ticker symbol for the company.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-usstocksreference">us_stocks_reference</h1>

## get_stocks_v1_dividends

<a id="opIdget_stocks_v1_dividends"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/v1/dividends?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/v1/dividends`

Contains historical dividend payment records for US stocks with split-adjusted amounts and historical adjustment factors for price normalization.

<h3 id="getstocksv1dividends-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|query|string|false|Stock symbol for the company issuing the dividend|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|ex_dividend_date|query|string|false|Date when the stock begins trading without the dividend value Value must be formatted 'yyyy-mm-dd'.|
|ex_dividend_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|ex_dividend_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|ex_dividend_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|ex_dividend_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|frequency|query|integer(int64)|false|How many times per year this dividend is expected to occur. A value of 0 means the distribution is non-recurring or irregular (e.g., special, supplemental, or a one-off dividend). Other possible values include 1 (annual), 2 (semi-annual), 3 (trimester), 4 (quarterly), 12 (monthly), 24 (bi-monthly), 52 (weekly), 104 (bi-weekly), and 365 (daily) depending on the issuer's declared or inferred payout cadence. Value must be an integer.|
|frequency.gt|query|integer(int64)|false|Filter greater than the value. Value must be an integer.|
|frequency.gte|query|integer(int64)|false|Filter greater than or equal to the value. Value must be an integer.|
|frequency.lt|query|integer(int64)|false|Filter less than the value. Value must be an integer.|
|frequency.lte|query|integer(int64)|false|Filter less than or equal to the value. Value must be an integer.|
|distribution_type|query|string|false|Classification describing the nature of this dividend's recurrence pattern: recurring (paid on a regular schedule), special (one-time or commemorative), supplemental (extra beyond the regular schedule), irregular (unpredictable or non-recurring), unknown (cannot be classified from available data)|
|distribution_type.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '5000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'ticker' if not specified. The sort order defaults to 'asc' if not specified.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|distribution_type|recurring|
|distribution_type|special|
|distribution_type|supplemental|
|distribution_type|irregular|
|distribution_type|unknown|
|distribution_type.any_of|recurring|
|distribution_type.any_of|special|
|distribution_type.any_of|supplemental|
|distribution_type.any_of|irregular|
|distribution_type.any_of|unknown|

> Example responses

> 200 Response

```json
{
  "request_id": 1,
  "results": [
    {
      "cash_amount": 0.26,
      "currency": "USD",
      "declaration_date": "2025-07-31",
      "distribution_type": "recurring",
      "ex_dividend_date": "2025-08-11",
      "frequency": 4,
      "historical_adjustment_factor": 0.997899,
      "id": "Ed2c9da60abda1e3f0e99a43f6465863c137b671e1f5cd3f833d1fcb4f4eb27fe",
      "pay_date": "2025-08-14",
      "record_date": "2025-08-11",
      "split_adjusted_cash_amount": 0.26,
      "ticker": "AAPL"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksv1dividends-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksv1dividends-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» cash_amount|number(double)|false|none|Original dividend amount per share in the specified currency|
|» currency|string|false|none|Currency code for the dividend payment (e.g., USD, CAD)|
|» declaration_date|string(date)|false|none|Date when the company officially announced the dividend|
|» distribution_type|string|true|none|Classification describing the nature of this dividend's recurrence pattern: recurring (paid on a regular schedule), special (one-time or commemorative), supplemental (extra beyond the regular schedule), irregular (unpredictable or non-recurring), unknown (cannot be classified from available data)|
|» ex_dividend_date|string(date)|false|none|Date when the stock begins trading without the dividend value|
|» frequency|integer(int64)|false|none|How many times per year this dividend is expected to occur. A value of 0 means the distribution is non-recurring or irregular (e.g., special, supplemental, or a one-off dividend). Other possible values include 1 (annual), 2 (semi-annual), 3 (trimester), 4 (quarterly), 12 (monthly), 24 (bi-monthly), 52 (weekly), 104 (bi-weekly), and 365 (daily) depending on the issuer's declared or inferred payout cadence.|
|» historical_adjustment_factor|number(double)|false|none|Cumulative adjustment factor used to offset dividend effects on historical prices. To adjust a historical price for dividends: for a price on date D, find the first dividend whose `ex_dividend_date` is after date D and multiply the price by that dividend's `historical_adjustment_factor`.|
|» id|string|false|none|Unique identifier for each dividend record|
|» pay_date|string(date)|false|none|Date when the dividend payment is distributed to shareholders|
|» record_date|string(date)|false|none|Date when shareholders must be on record to be eligible for the dividend payment|
|» split_adjusted_cash_amount|number(double)|false|none|Dividend amount adjusted for stock splits that occurred after the dividend was paid, expressed on a current share basis|
|» ticker|string|false|none|Stock symbol for the company issuing the dividend|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_stocks_v1_splits

<a id="opIdget_stocks_v1_splits"></a>

> Code samples

```bash
curl "https://api.polygon.io/stocks/v1/splits?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stocks/v1/splits`

Contains historical stock split and reverse split events for US equities with historical adjustment factors for price normalization.

<h3 id="getstocksv1splits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|query|string|false|Stock symbol for the company that executed the split|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|execution_date|query|string|false|Date when the stock split takes effect. The adjustment is applied overnight. On the prior trading day, the post-market session is the last session that shows pre-split prices. On the execution date, all trading is already adjusted for the split. This includes the pre-market session. Value must be formatted 'yyyy-mm-dd'.|
|execution_date.gt|query|string|false|Filter greater than the value. Value must be formatted 'yyyy-mm-dd'.|
|execution_date.gte|query|string|false|Filter greater than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|execution_date.lt|query|string|false|Filter less than the value. Value must be formatted 'yyyy-mm-dd'.|
|execution_date.lte|query|string|false|Filter less than or equal to the value. Value must be formatted 'yyyy-mm-dd'.|
|adjustment_type|query|string|false|Classification of the share-change event. Possible values include: forward_split (share count increases), reverse_split (share count decreases), stock_dividend (shares issued as a dividend)|
|adjustment_type.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '5000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'execution_date' if not specified. The sort order defaults to 'desc' if not specified.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|adjustment_type|forward_split|
|adjustment_type|reverse_split|
|adjustment_type|stock_dividend|
|adjustment_type.any_of|forward_split|
|adjustment_type.any_of|reverse_split|
|adjustment_type.any_of|stock_dividend|

> Example responses

> 200 Response

```json
{
  "request_id": 1,
  "results": [
    {
      "adjustment_type": "forward_split",
      "execution_date": "2005-02-28",
      "historical_adjustment_factor": 0.017857,
      "id": "E90a77bdf742661741ed7c8fc086415f0457c2816c45899d73aaa88bdc8ff6025",
      "split_from": 1,
      "split_to": 2,
      "ticker": "AAPL"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getstocksv1splits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getstocksv1splits-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» adjustment_type|string|true|none|Classification of the share-change event. Possible values include: forward_split (share count increases), reverse_split (share count decreases), stock_dividend (shares issued as a dividend)|
|» execution_date|string(date)|false|none|Date when the stock split takes effect. The adjustment is applied overnight. On the prior trading day, the post-market session is the last session that shows pre-split prices. On the execution date, all trading is already adjusted for the split. This includes the pre-market session.|
|» historical_adjustment_factor|number(double)|false|none|Cumulative adjustment factor used to offset split effects on historical prices. To adjust a historical price for splits: for a price on date D, find the first split whose `execution_date` is after date D and multiply the unadjusted price by the `historical_adjustment_factor`.|
|» id|string|false|none|Unique identifier for each stock split event|
|» split_from|number(double)|false|none|Denominator of the split ratio (old shares)|
|» split_to|number(double)|false|none|Numerator of the split ratio (new shares)|
|» ticker|string|false|none|Stock symbol for the company that executed the split|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## get_v1_reference_ipos

<a id="opIdget_v1_reference_ipos"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/reference/ipos?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/reference/ipos`

Contains comprehensive data about Initial Public Offerings (IPOs) and direct listings for US stocks, tracking both historical and pending offerings with detailed pricing, share, and timing information.

<h3 id="getv1referenceipos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|query|string|false|The ticker symbol of the IPO event.|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|us_code|query|string|false|Nine-character alphanumeric code that uniquely identifies a financial security in North America.|
|us_code.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|us_code.gt|query|string|false|Filter greater than the value.|
|us_code.gte|query|string|false|Filter greater than or equal to the value.|
|us_code.lt|query|string|false|Filter less than the value.|
|us_code.lte|query|string|false|Filter less than or equal to the value.|
|isin|query|string|false|International Securities Identification Number. This is a unique twelve-digit code that is assigned to every security issuance in the world.|
|isin.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|isin.gt|query|string|false|Filter greater than the value.|
|isin.gte|query|string|false|Filter greater than or equal to the value.|
|isin.lt|query|string|false|Filter less than the value.|
|isin.lte|query|string|false|Filter less than or equal to the value.|
|listing_date|query|string|false|First trading date for the newly listed entity. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|listing_date.gt|query|string|false|Filter greater than the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|listing_date.gte|query|string|false|Filter greater than or equal to the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|listing_date.lt|query|string|false|Filter less than the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|listing_date.lte|query|string|false|Filter less than or equal to the value. Value must be an integer timestamp in nanoseconds, formatted 'yyyy-mm-dd', or ISO 8601/RFC 3339 (e.g. '2024-05-28T20:27:41Z').|
|ipo_status|query|string|false|The status of the IPO.|
|ipo_status.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '10' if not specified. The maximum allowed limit is '1000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'listing_date' if not specified. The sort order defaults to 'desc' if not specified.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ipo_status|direct_listing_process|
|ipo_status|history|
|ipo_status|new|
|ipo_status|pending|
|ipo_status|postponed|
|ipo_status|rumor|
|ipo_status|withdrawn|
|ipo_status.any_of|direct_listing_process|
|ipo_status.any_of|history|
|ipo_status.any_of|new|
|ipo_status.any_of|pending|
|ipo_status.any_of|postponed|
|ipo_status.any_of|rumor|
|ipo_status.any_of|withdrawn|

> Example responses

> 200 Response

```json
{
  "request_id": "6a7e466379af0a71039d60cc78e72282",
  "results": [
    {
      "announced_date": "2024-06-01",
      "currency_code": "USD",
      "final_issue_price": 17,
      "highest_offer_price": 17,
      "ipo_status": "history",
      "isin": "US75383L1026",
      "issuer_name": "Rapport Therapeutics Inc.",
      "last_updated": "2024-06-27",
      "listing_date": "2024-06-07",
      "lot_size": 100,
      "lowest_offer_price": 17,
      "max_shares_offered": 8000000,
      "min_shares_offered": 1000000,
      "primary_exchange": "XNAS",
      "security_description": "Ordinary Shares",
      "security_type": "CS",
      "shares_outstanding": 35376457,
      "ticker": "RAPP",
      "total_offer_size": 136000000,
      "us_code": "75383L102"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="getv1referenceipos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="getv1referenceipos-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» announced_date|integer(int64)|false|none|The date when the IPO event was announced.|
|» currency_code|string|false|none|Underlying currency of the security.|
|» final_issue_price|number(double)|false|none|The price set by the company and its underwriters before the IPO goes live.|
|» highest_offer_price|number(double)|false|none|The highest price within the IPO price range that the company might use to price the shares.|
|» ipo_status|string|false|none|The status of the IPO.|
|» isin|string|false|none|International Securities Identification Number. This is a unique twelve-digit code that is assigned to every security issuance in the world.|
|» issuer_name|string|false|none|Name of issuer.|
|» last_updated|integer(int64)|false|none|The date when the IPO event was last modified.|
|» listing_date|integer(int64)|false|none|First trading date for the newly listed entity.|
|» lot_size|integer(int64)|false|none|The minimum number of shares that an investor may apply for during an IPO.|
|» lowest_offer_price|number(double)|false|none|The lowest price within the IPO price range that the company is willing to offer its shares to investors.|
|» max_shares_offered|integer(int64)|false|none|The upper limit of the shares that the company is offering to investors.|
|» min_shares_offered|integer(int64)|false|none|The lower limit of shares that the company is willing to sell in the IPO.|
|» primary_exchange|string|false|none|Market Identifier Code (MIC) of the primary exchange where the security is listed. The Market Identifier Code (MIC) (ISO 10383) is a unique identification code used to identify securities trading exchanges, regulated and non-regulated trading markets.|
|» security_description|string|false|none|A brief description of the security. e.g. Class A Shares|
|» security_type|string|false|none|The classification of the stock. For example, CS stands for Common Stock.|
|» shares_outstanding|integer(int64)|false|none|The total number of shares that the company has issued and are held by investors.|
|» ticker|string|false|none|The ticker symbol of the IPO event.|
|» total_offer_size|number(double)|false|none|The total amount raised by the company for IPO.|
|» us_code|string|false|none|Nine-character alphanumeric code that uniquely identifies a financial security in North America.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-tmx">tmx</h1>

## get_tmx_v1_corporate-events

<a id="opIdget_tmx_v1_corporate-events"></a>

> Code samples

```bash
curl "https://api.polygon.io/tmx/v1/corporate-events?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /tmx/v1/corporate-events`

Contains corporate events and announcements for publicly traded companies, including earnings releases, conferences, dividends, and business updates sourced from TMX.

<h3 id="gettmxv1corporate-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|false|Scheduled date of the corporate event, formatted as YYYY-MM-DD.|
|date.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|date.gt|query|string|false|Filter greater than the value.|
|date.gte|query|string|false|Filter greater than or equal to the value.|
|date.lt|query|string|false|Filter less than the value.|
|date.lte|query|string|false|Filter less than or equal to the value.|
|type|query|string|false|The normalized type of corporate event. Possible values include: analyst_day, business_update, capital_markets_day, conference, dividend, earnings_announcement_date, earnings_conference_call, earnings_results_announcement, forum, interim_statement, other_interim_announcement, production_update, research_and_development_day, seminar, shareholder_meeting, sales_update, stock_split, summit, service_level_update, tradeshow, company_travel, and workshop.|
|type.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|type.gt|query|string|false|Filter greater than the value.|
|type.gte|query|string|false|Filter greater than or equal to the value.|
|type.lt|query|string|false|Filter less than the value.|
|type.lte|query|string|false|Filter less than or equal to the value.|
|status|query|string|false|The current status of the event. Possible values include: approved, canceled, confirmed, historical, pending_approval, postponed, and unconfirmed.|
|status.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|status.gt|query|string|false|Filter greater than the value.|
|status.gte|query|string|false|Filter greater than or equal to the value.|
|status.lt|query|string|false|Filter less than the value.|
|status.lte|query|string|false|Filter less than or equal to the value.|
|ticker|query|string|false|The company's stock symbol.|
|ticker.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|ticker.gt|query|string|false|Filter greater than the value.|
|ticker.gte|query|string|false|Filter greater than or equal to the value.|
|ticker.lt|query|string|false|Filter less than the value.|
|ticker.lte|query|string|false|Filter less than or equal to the value.|
|isin|query|string|false|Standard international identifier for the company's common stock.|
|isin.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|isin.gt|query|string|false|Filter greater than the value.|
|isin.gte|query|string|false|Filter greater than or equal to the value.|
|isin.lt|query|string|false|Filter less than the value.|
|isin.lte|query|string|false|Filter less than or equal to the value.|
|trading_venue|query|string|false|MIC (Market Identifier Code) of the exchange where the company's stock is listed.|
|trading_venue.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|trading_venue.gt|query|string|false|Filter greater than the value.|
|trading_venue.gte|query|string|false|Filter greater than or equal to the value.|
|trading_venue.lt|query|string|false|Filter less than the value.|
|trading_venue.lte|query|string|false|Filter less than or equal to the value.|
|tmx_company_id|query|integer(int64)|false|Unique numeric identifier for the company used by TMX. Value must be an integer.|
|tmx_company_id.gt|query|integer(int64)|false|Filter greater than the value. Value must be an integer.|
|tmx_company_id.gte|query|integer(int64)|false|Filter greater than or equal to the value. Value must be an integer.|
|tmx_company_id.lt|query|integer(int64)|false|Filter less than the value. Value must be an integer.|
|tmx_company_id.lte|query|integer(int64)|false|Filter less than or equal to the value. Value must be an integer.|
|tmx_record_id|query|string|false|The unique alphanumeric identifier for the event record used by TMX.|
|tmx_record_id.any_of|query|string|false|Filter equal to any of the values. Multiple values can be specified by using a comma separated list.|
|tmx_record_id.gt|query|string|false|Filter greater than the value.|
|tmx_record_id.gte|query|string|false|Filter greater than or equal to the value.|
|tmx_record_id.lt|query|string|false|Filter less than the value.|
|tmx_record_id.lte|query|string|false|Filter less than or equal to the value.|
|limit|query|integer|false|Limit the maximum number of results returned. Defaults to '100' if not specified. The maximum allowed limit is '50000'.|
|sort|query|string|false|A comma separated list of sort columns. For each column, append '.asc' or '.desc' to specify the sort direction. The sort column defaults to 'date' if not specified. The sort order defaults to 'desc' if not specified.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": 1,
  "results": [
    {
      "company_name": "Rollins Inc.",
      "date": "2025-07-23",
      "isin": "US7757111049",
      "name": "Q2 2025 Earnings Announcement-After Mkt",
      "status": "unconfirmed",
      "ticker": "ROL",
      "tmx_company_id": "2208",
      "tmx_record_id": "4XMW4E9G",
      "trading_venue": "XNYS",
      "type": "earnings_announcement_date"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "error": "string",
  "request_id": "string",
  "status": "ERROR"
}
```

<h3 id="gettmxv1corporate-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of results.|Inline|
|400|Bad Request|An error message.|Inline|

<h3 id="gettmxv1corporate-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|true|none|The results for this request.|
|» company_name|string|false|none|Full name of the company.|
|» date|string|false|none|Scheduled date of the corporate event, formatted as YYYY-MM-DD.|
|» isin|string|false|none|Standard international identifier for the company's common stock.|
|» name|string|false|none|Name or title of the event.|
|» status|string|false|none|The current status of the event. Possible values include: approved, canceled, confirmed, historical, pending_approval, postponed, and unconfirmed.|
|» ticker|string|false|none|The company's stock symbol.|
|» tmx_company_id|integer(int64)|false|none|Unique numeric identifier for the company used by TMX.|
|» tmx_record_id|string|false|none|The unique alphanumeric identifier for the event record used by TMX.|
|» trading_venue|string|false|none|MIC (Market Identifier Code) of the exchange where the company's stock is listed.|
|» type|string|false|none|The normalized type of corporate event. Possible values include: analyst_day, business_update, capital_markets_day, conference, dividend, earnings_announcement_date, earnings_conference_call, earnings_results_announcement, forum, interim_statement, other_interim_announcement, production_update, research_and_development_day, seminar, shareholder_meeting, sales_update, stock_split, summit, service_level_update, tradeshow, company_travel, and workshop.|
|» url|string|false|none|URL linking to the primary public source of the event announcement, if available.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|A message describing the source of the error.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ERROR|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-fxconversion">fx:conversion</h1>

## Real-time Currency Conversion

<a id="opIdRealTimeCurrencyConversion"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/conversion/AUD/USD?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/conversion/{from}/{to}`

Get currency conversions using the latest market conversion rates. Note than you can convert in both directions. For example USD to CAD or CAD to USD.

<h3 id="real-time-currency-conversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|path|string|true|The "from" symbol of the pair.|
|to|path|string|true|The "to" symbol of the pair.|
|amount|query|number|false|The amount to convert, with a decimal.|
|precision|query|integer|false|The decimal precision of the conversion. Defaults to 2 which is 2 decimal places accuracy.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|precision|0|
|precision|1|
|precision|2|
|precision|3|
|precision|4|

> Example responses

> 200 Response

```json
{
  "converted": 73.14,
  "from": "AUD",
  "initialAmount": 100,
  "last": {
    "ask": 1.3673344,
    "bid": 1.3672596,
    "exchange": 48,
    "timestamp": 1605555313000
  },
  "request_id": "a73a29dbcab4613eeaf48583d3baacf0",
  "status": "success",
  "symbol": "AUD/USD",
  "to": "USD"
}
```

<h3 id="real-time-currency-conversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The last tick for this currency pair, plus the converted amount for the requested amount.|Inline|
|default|Default|Unexpected error|None|

<h3 id="real-time-currency-conversion-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|converted|number(double)|true|none|The result of the conversion.|
|from|string|true|none|The "from" currency symbol.|
|initialAmount|number(double)|true|none|The amount to convert.|
|last|object|false|none|Contains the requested quote data for the specified forex currency pair.|
|» ask|number(double)|true|none|The ask price.|
|» bid|number(double)|true|none|The bid price.|
|» exchange|integer|true|none|The exchange ID. See <a href="https://massive.com/docs/rest/forex/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» timestamp|integer|true|none|The Unix millisecond timestamp.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|
|symbol|string|true|none|The symbol pair that was evaluated from the request.|
|to|string|true|none|The "to" currency symbol.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-cryptotrades">crypto:trades</h1>

## Historic Crypto Trades

<a id="opIdDeprecatedGetHistoricCryptoTrades"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/historic/crypto/BTC/USD/2020-10-14?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/historic/crypto/{from}/{to}/{date}`

Get historic trade ticks for a cryptocurrency pair.


<h3 id="historic-crypto-trades-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|path|string|true|The "from" symbol of the crypto pair.|
|to|path|string|true|The "to" symbol of the crypto pair.|
|date|path|string(date)|true|The date/day of the historic ticks to retrieve.|
|offset|query|integer|false|The timestamp offset, used for pagination. This is the offset at which to start the results. Using the `timestamp` of the last result as the offset will give you the next page of results.<br>|
|limit|query|integer|false|Limit the size of the response, max 10000.|

> Example responses

> 200 Response

```json
{
  "day": "2020-10-14T00:00:00.000Z",
  "map": {
    "c": "conditions",
    "p": "price",
    "s": "size",
    "t": "timestamp",
    "x": "exchange"
  },
  "msLatency": 1,
  "status": "success",
  "symbol": "BTC-USD",
  "ticks": [
    {
      "c": [
        2
      ],
      "p": 15482.89,
      "s": 0.00188217,
      "t": 1604880000067,
      "x": 1
    },
    {
      "c": [
        2
      ],
      "p": 15482.11,
      "s": 0.00161739,
      "t": 1604880000167,
      "x": 1
    }
  ],
  "type": "crypto"
}
```

<h3 id="historic-crypto-trades-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of crypto trade ticks.|Inline|
|default|Default|Unexpected error|None|

<h3 id="historic-crypto-trades-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|string(date)|true|none|The date that was evaluated from the request.|
|map|object|true|none|A map for shortened result keys.|
|msLatency|integer|true|none|The milliseconds of latency for the query results.|
|symbol|string|true|none|The symbol pair that was evaluated from the request.|
|ticks|[object]|true|none|none|
|» c|[integer]|true|none|A list of condition codes. See [Crypto Condition Codes](https://massive.com/docs/rest/crypto/market-operations/condition-codes) for what each code means.|
|» i|string|true|none|The Trade ID which uniquely identifies a trade. These are unique per<br>combination of ticker, exchange, and TRF. For example: A trade for AAPL<br>executed on NYSE and a trade for AAPL executed on NASDAQ could potentially<br>have the same Trade ID.<br>|
|» p|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.<br>|
|» s|number(double)|true|none|The size of a trade (also known as volume).<br>|
|» t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» x|integer|true|none|The exchange that this crypto trade happened on.  <br>See <a href="https://massive.com/docs/rest/crypto/market-operations/exchanges">Exchanges</a> for a mapping of exchanges to IDs.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Trades

<a id="opIdTradesCrypto"></a>

> Code samples

```bash
curl "https://api.polygon.io/v3/trades/X%3ABTC-USD?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/trades/{cryptoTicker}`

Get trades for a crypto ticker symbol in a given time range.

<h3 id="trades-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cryptoTicker|path|string|true|The ticker symbol to get trades for.|
|timestamp|query|string|false|Query by trade timestamp. Either a date with the format YYYY-MM-DD or a nanosecond timestamp.|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|
|order|query|string|false|Order results based on the `sort` field.|
|limit|query|integer|false|Limit the number of results returned, default is 1000 and max is 50000.|
|sort|query|string|false|Sort field used for ordering.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|
|sort|timestamp|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v3/trades/X:BTC-USD?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": [
    {
      "conditions": [
        1
      ],
      "exchange": 1,
      "id": "191450340",
      "participant_timestamp": 1625097600103000000,
      "price": 35060,
      "received_timestamp": 1625097600125000000,
      "size": 1.0434526
    },
    {
      "conditions": [
        2
      ],
      "exchange": 1,
      "id": "191450341",
      "participant_timestamp": 1625097600368000000,
      "price": 35059.99,
      "received_timestamp": 1625097600390000000,
      "size": 0.0058883
    }
  ],
  "status": "OK"
}
```

<h3 id="trades-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of trades.|Inline|

<h3 id="trades-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|false|none|A request id assigned by the server.|
|results|[object]|false|none|An array of results containing the requested data.|
|» conditions|[integer(int32)]|false|none|A list of condition codes. See [Crypto Condition Codes](https://massive.com/docs/rest/crypto/market-operations/condition-codes) for what each code means.|
|» exchange|integer|true|none|The exchange ID. See <a href="https://massive.com/docs/rest/crypto/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» id|string|false|none|The Trade ID which uniquely identifies a trade on the exchange that the trade happened on.|
|» participant_timestamp|integer(int64)|false|none|The nanosecond Exchange Unix Timestamp. This is the timestamp of when the trade was generated at the exchange.|
|» price|number(double)|true|none|The price of the trade in the base currency of the crypto pair.|
|» received_timestamp|integer(int64)|false|none|The nanosecond accuracy timestamp of when the tick was received by Massive.|
|» size|number(double)|true|none|The size of a trade (also known as volume).|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-fxtrades">fx:trades</h1>

## Historic Forex Ticks

<a id="opIdDeprecatedGetHistoricForexQuotes"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/historic/forex/AUD/USD/2020-10-14?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/historic/forex/{from}/{to}/{date}`

Get historic ticks for a forex currency pair.


<h3 id="historic-forex-ticks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|path|string|true|The "from" symbol of the currency pair.<br><br>Example: For **USD/JPY** the `from` would be **USD**.<br>|
|to|path|string|true|The "to" symbol of the currency pair.<br><br>Example: For **USD/JPY** the `to` would be **JPY**.<br>|
|date|path|string(date)|true|The date/day of the historic ticks to retrieve.|
|offset|query|integer|false|The timestamp offset, used for pagination. This is the offset at which to start the results. Using the `timestamp` of the last result as the offset will give you the next page of results.<br>|
|limit|query|integer|false|Limit the size of the response, max 10000.|

> Example responses

> 200 Response

```json
{
  "day": "2020-10-14",
  "map": {
    "ap": "ask",
    "bp": "bid",
    "t": "timestamp"
  },
  "msLatency": "0",
  "pair": "AUD/USD",
  "status": "success",
  "ticks": [
    {
      "ap": 0.71703,
      "bp": 0.71701,
      "t": 1602633600000,
      "x": 48
    },
    {
      "ap": 0.71703,
      "bp": 0.717,
      "t": 1602633600000,
      "x": 48
    },
    {
      "ap": 0.71702,
      "bp": 0.717,
      "t": 1602633600000,
      "x": 48
    }
  ],
  "type": "forex"
}
```

<h3 id="historic-forex-ticks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of forex ticks|Inline|
|default|Default|Unexpected error|None|

<h3 id="historic-forex-ticks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status of this request's response.|
|day|string(date)|true|none|The date that was evaluated from the request.|
|map|object|true|none|A map for shortened result keys.|
|msLatency|integer|true|none|The milliseconds of latency for the query results.|
|pair|string|true|none|The currency pair that was evaluated from the request.|
|ticks|[object]|true|none|none|
|» a|number(double)|true|none|The ask price.|
|» b|number(double)|true|none|The bid price.|
|» t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» x|integer|true|none|The exchange ID. See <a href="https://massive.com/docs/rest/forex/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-cryptoaggregates">crypto:aggregates</h1>

## Exponential Moving Average (EMA)

<a id="opIdCryptoEMA"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/ema/X%3ABTCUSD?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/ema/{cryptoTicker}`

Get the exponential moving average (EMA) for a ticker symbol over a given time range.

<h3 id="exponential-moving-average-ema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cryptoTicker|path|string|true|The ticker symbol for which to get exponential moving average (EMA) data.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|window|query|integer|false|The window size used to calculate the exponential moving average (EMA). i.e. a window size of 10 with daily aggregates would result in a 10 day moving average.|
|series_type|query|string|false|The price in the aggregate which will be used to calculate the exponential moving average. i.e. 'close' will result in using close prices to <br>calculate the exponential moving average (EMA).|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/ema/X:BTCUSD?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": {
    "underlying": {
      "url": "https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/2003-01-01/2022-07-25"
    },
    "values": [
      {
        "timestamp": 1517562000016,
        "value": 140.139
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="exponential-moving-average-ema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Exponential Moving Average (EMA) data for each period.|Inline|

<h3 id="exponential-moving-average-ema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the EMA indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Timestamp or indicator value.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Moving Average Convergence/Divergence (MACD)

<a id="opIdCryptoMACD"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/macd/X%3ABTCUSD?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/macd/{cryptoTicker}`

Get moving average convergence/divergence (MACD) data for a ticker symbol over a given time range.

<h3 id="moving-average-convergencedivergence-macd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cryptoTicker|path|string|true|The ticker symbol for which to get MACD data.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|short_window|query|integer|false|The short window size used to calculate MACD data.|
|long_window|query|integer|false|The long window size used to calculate MACD data.|
|signal_window|query|integer|false|The window size used to calculate the MACD signal line.|
|series_type|query|string|false|The price in the aggregate which will be used to calculate MACD data. i.e. 'close' will result in using close prices to <br>calculate the MACD.|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/macd/X:BTCUSD?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": {
    "underlying": {
      "url": "https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/2003-01-01/2022-07-25"
    },
    "values": [
      {
        "histogram": 38.3801666667,
        "signal": 106.9811666667,
        "timestamp": 1517562000016,
        "value": 145.3613333333
      },
      {
        "histogram": 41.098859136,
        "signal": 102.7386283473,
        "timestamp": 1517562001016,
        "value": 143.8374874833
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="moving-average-convergencedivergence-macd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Moving Average Convergence/Divergence (MACD) data for each period.|Inline|

<h3 id="moving-average-convergencedivergence-macd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the MACD indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Each entry in the values array represents MACD indicator data for a specific timestamp and includes:|
|» » histogram|number(float)|false|none|The difference between the MACD line (value) and the signal line (signal). Positive histogram values indicate upward (bullish) momentum, while negative histogram values indicate downward (bearish) momentum.|
|» » signal|number(float)|false|none|The signal line value, calculated as the exponential moving average (EMA) of the MACD line (value) over the signal period defined in the request parameters. Traders typically use crossovers between the MACD and signal lines as trading signals.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Relative Strength Index (RSI)

<a id="opIdCryptoRSI"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/rsi/X%3ABTCUSD?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/rsi/{cryptoTicker}`

Get the relative strength index (RSI) for a ticker symbol over a given time range.

<h3 id="relative-strength-index-rsi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cryptoTicker|path|string|true|The ticker symbol for which to get relative strength index (RSI) data.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|window|query|integer|false|The window size used to calculate the relative strength index (RSI). i.e. a window size of 10 with daily aggregates would result in a 10 day moving average.|
|series_type|query|string|false|The price in the aggregate which will be used to calculate the relative strength index. i.e. 'close' will result in using close prices to <br>calculate the relative strength index (RSI).|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/rsi/X:BTCUSD?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": {
    "underlying": {
      "url": "https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/2003-01-01/2022-07-25"
    },
    "values": [
      {
        "timestamp": 1517562000016,
        "value": 82.19
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="relative-strength-index-rsi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Relative strength index data for each period.|Inline|

<h3 id="relative-strength-index-rsi-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the RSI indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Timestamp or indicator value.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Simple Moving Average (SMA)

<a id="opIdCryptoSMA"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/sma/X%3ABTCUSD?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/sma/{cryptoTicker}`

Get the simple moving average (SMA) for a ticker symbol over a given time range.

<h3 id="simple-moving-average-sma-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cryptoTicker|path|string|true|The ticker symbol for which to get simple moving average (SMA) data.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|window|query|integer|false|The window size used to calculate the simple moving average (SMA). i.e. a window size of 10 with daily aggregates would result in a 10 day moving average.|
|series_type|query|string|false|The price in the aggregate which will be used to calculate the simple moving average. i.e. 'close' will result in using close prices to <br>calculate the simple moving average (SMA).|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/sma/X:BTCUSD?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": {
    "underlying": {
      "aggregates": [
        {
          "c": 75.0875,
          "h": 75.15,
          "l": 73.7975,
          "n": 1,
          "o": 74.06,
          "t": 1577941200000,
          "v": 135647456,
          "vw": 74.6099
        },
        {
          "c": 74.3575,
          "h": 75.145,
          "l": 74.125,
          "n": 1,
          "o": 74.2875,
          "t": 1578027600000,
          "v": 146535512,
          "vw": 74.7026
        }
      ],
      "url": "https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/2003-01-01/2022-07-25"
    },
    "values": [
      {
        "timestamp": 1517562000016,
        "value": 140.139
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="simple-moving-average-sma-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Simple Moving Average (SMA) data for each period.|Inline|

<h3 id="simple-moving-average-sma-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the SMA indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Timestamp or indicator value.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Grouped Daily (Bars)

<a id="opIdGetGroupedCryptoAggregates"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/aggs/grouped/locale/global/market/crypto/2025-11-03?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/aggs/grouped/locale/global/market/crypto/{date}`

Get the daily open, high, low, and close (OHLC) for the entire cryptocurrency markets.


<h3 id="grouped-daily-bars-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|path|string|true|The beginning date for the aggregate window.|
|adjusted|query|boolean|false|Whether or not the results are adjusted for splits.  By default, results are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.<br>|

> Example responses

> 200 Response

```json
{
  "adjusted": true,
  "queryCount": 3,
  "request_id": {
    "description": "A request id assigned by the server.",
    "type": "string"
  },
  "results": [
    {
      "T": "X:ARDRUSD",
      "c": 0.0550762,
      "h": 0.0550762,
      "l": 0.0550762,
      "n": 18388,
      "o": 0.0550762,
      "t": 1580676480000,
      "v": 2,
      "vw": 0.0551
    },
    {
      "T": "X:NGCUSD",
      "c": 0.0272983,
      "h": 0.0273733,
      "l": 0.0272983,
      "n": 18,
      "o": 0.0273733,
      "t": 1580674080000,
      "v": 4734,
      "vw": 0.0273
    },
    {
      "T": "X:ZSCUSD",
      "c": 0.00028531,
      "h": 0.00028531,
      "l": 0.00028531,
      "n": 151,
      "o": 0.00028531,
      "t": 1580671080000,
      "v": 390,
      "vw": 0.0003
    }
  ],
  "resultsCount": 3,
  "status": "OK"
}
```

<h3 id="grouped-daily-bars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The previous day OHLC for the ticker.|Inline|
|default|Default|Unexpected error|None|

<h3 id="grouped-daily-bars-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjusted|boolean|true|none|Whether or not this response was adjusted for splits.|
|queryCount|integer|true|none|The number of aggregates (minute or day) used to generate the response.|
|request_id|string|true|none|A request id assigned by the server.|
|resultsCount|integer|true|none|The total number of results for this request.|
|status|string|true|none|The status of this request's response.|
|results|[object]|false|none|An array of results containing the requested data.|
|» T|string|true|none|The exchange symbol that this item is traded under.|
|» c|number(double)|true|none|The close price for the symbol in the given time period.|
|» h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» n|integer|false|none|The number of transactions in the aggregate window.|
|» o|number(double)|true|none|The open price for the symbol in the given time period.|
|» t|integer|true|none|The Unix millisecond timestamp for the end of the aggregate window.|
|» v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» vw|number(double)|false|none|The volume weighted average price.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Previous Close

<a id="opIdGetPreviousCryptoAggregates"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/aggs/ticker/X%3ABTCUSD/prev?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/aggs/ticker/{cryptoTicker}/prev`

Get the previous day's open, high, low, and close (OHLC) for the specified cryptocurrency pair.


<h3 id="previous-close-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cryptoTicker|path|string|true|The ticker symbol of the currency pair.|
|adjusted|query|boolean|false|Whether or not the results are adjusted for splits.  By default, results are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.<br>|

> Example responses

> 200 Response

```json
{
  "adjusted": true,
  "queryCount": 1,
  "request_id": "b2170df985474b6d21a6eeccfb6bee67",
  "results": [
    {
      "T": "X:BTCUSD",
      "c": 16035.9,
      "h": 16180,
      "l": 15639.2,
      "o": 15937.1,
      "t": 1605416400000,
      "v": 95045.16897951,
      "vw": 15954.2111
    }
  ],
  "resultsCount": 1,
  "status": "OK",
  "ticker": "X:BTCUSD"
}
```

<h3 id="previous-close-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The previous day OHLC for a ticker.|Inline|
|default|Default|Unexpected error|None|

<h3 id="previous-close-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ticker|string|true|none|The exchange symbol that this item is traded under.|
|adjusted|boolean|true|none|Whether or not this response was adjusted for splits.|
|queryCount|integer|true|none|The number of aggregates (minute or day) used to generate the response.|
|request_id|string|true|none|A request id assigned by the server.|
|resultsCount|integer|true|none|The total number of results for this request.|
|status|string|true|none|The status of this request's response.|
|results|[object]|false|none|An array of results containing the requested data.|
|» T|string|true|none|The exchange symbol that this item is traded under.|
|» c|number(double)|true|none|The close price for the symbol in the given time period.|
|» h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» n|integer|false|none|The number of transactions in the aggregate window.|
|» o|number(double)|true|none|The open price for the symbol in the given time period.|
|» t|integer|true|none|The Unix millisecond timestamp for the end of the aggregate window.|
|» v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» vw|number(double)|false|none|The volume weighted average price.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Aggregates (Bars)

<a id="opIdGetCryptoAggregates"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/aggs/ticker/X%3ABTCUSD/range/1/day/2025-11-03/2025-11-28?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/aggs/ticker/{cryptoTicker}/range/{multiplier}/{timespan}/{from}/{to}`

Get aggregate bars for a cryptocurrency pair over a given date range in custom time window sizes.
<br />
<br />
For example, if timespan = ‘minute’ and multiplier = ‘5’ then 5-minute bars will be returned.


<h3 id="aggregates-bars-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cryptoTicker|path|string|true|The ticker symbol of the currency pair.|
|multiplier|path|integer|true|The size of the timespan multiplier.|
|timespan|path|string|true|The size of the time window.|
|from|path|string|true|The start of the aggregate time window. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|to|path|string|true|The end of the aggregate time window. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|adjusted|query|boolean|false|Whether or not the results are adjusted for splits.  By default, results are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.<br>|
|sort|query|string|false|Sort the results by timestamp.<br>`asc` will return results in ascending order (oldest at the top),<br>`desc` will return results in descending order (newest at the top).<br>|
|limit|query|integer|false|Limits the number of base aggregates queried to create the aggregate results. Max 50000 and Default 5000.<br>Read more about how limit is used to calculate aggregate results in our article on<br><a href="https://massive.com/blog/aggs-api-updates/" target="_blank" alt="Aggregate Data API Improvements">Aggregate Data API Improvements</a>.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|second|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|sort|asc|
|sort|desc|

> Example responses

> 200 Response

```json
{
  "adjusted": true,
  "queryCount": 2,
  "request_id": "0cf72b6da685bcd386548ffe2895904a",
  "results": [
    {
      "c": 10094.75,
      "h": 10429.26,
      "l": 9490,
      "n": 1,
      "o": 9557.9,
      "t": 1590984000000,
      "v": 303067.6562332156,
      "vw": 9874.5529
    },
    {
      "c": 9492.62,
      "h": 10222.72,
      "l": 9135.68,
      "n": 1,
      "o": 10096.87,
      "t": 1591070400000,
      "v": 323339.6922892879,
      "vw": 9729.5701
    }
  ],
  "resultsCount": 2,
  "status": "OK",
  "ticker": "X:BTCUSD"
}
```

<h3 id="aggregates-bars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cryptocurrency Aggregates.|Inline|
|default|Default|Unexpected error|None|

<h3 id="aggregates-bars-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ticker|string|true|none|The exchange symbol that this item is traded under.|
|adjusted|boolean|true|none|Whether or not this response was adjusted for splits.|
|queryCount|integer|true|none|The number of aggregates (minute or day) used to generate the response.|
|request_id|string|true|none|A request id assigned by the server.|
|resultsCount|integer|true|none|The total number of results for this request.|
|status|string|true|none|The status of this request's response.|
|results|[object]|false|none|An array of results containing the requested data.|
|» c|number(double)|true|none|The close price for the symbol in the given time period.|
|» h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» n|integer|false|none|The number of transactions in the aggregate window.|
|» o|number(double)|true|none|The open price for the symbol in the given time period.|
|» t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» vw|number(double)|false|none|The volume weighted average price.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-fxaggregates">fx:aggregates</h1>

## Exponential Moving Average (EMA)

<a id="opIdForexEMA"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/ema/C%3AEURUSD?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/ema/{fxTicker}`

Get the exponential moving average (EMA) for a ticker symbol over a given time range.

<h3 id="exponential-moving-average-ema-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fxTicker|path|string|true|The ticker symbol for which to get exponential moving average (EMA) data.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|adjusted|query|boolean|false|Whether or not the aggregates used to calculate the exponential moving average are adjusted for splits. By default, aggregates are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.|
|window|query|integer|false|The window size used to calculate the exponential moving average (EMA). i.e. a window size of 10 with daily aggregates would result in a 10 day moving average.|
|series_type|query|string|false|The price in the aggregate which will be used to calculate the exponential moving average. i.e. 'close' will result in using close prices to <br>calculate the exponential moving average (EMA).|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/ema/C:USDAUD?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": {
    "underlying": {
      "url": "https://api.polygon.io/v2/aggs/ticker/C:USDAUD/range/1/day/2003-01-01/2022-07-25"
    },
    "values": [
      {
        "timestamp": 1517562000016,
        "value": 140.139
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="exponential-moving-average-ema-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Exponential Moving Average (EMA) data for each period.|Inline|

<h3 id="exponential-moving-average-ema-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the EMA indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Timestamp or indicator value.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Moving Average Convergence/Divergence (MACD)

<a id="opIdForexMACD"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/macd/C%3AEURUSD?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/macd/{fxTicker}`

Get moving average convergence/divergence (MACD) data for a ticker symbol over a given time range.

<h3 id="moving-average-convergencedivergence-macd-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fxTicker|path|string|true|The ticker symbol for which to get MACD data.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|adjusted|query|boolean|false|Whether or not the aggregates used to calculate the MACD are adjusted for splits. By default, aggregates are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.|
|short_window|query|integer|false|The short window size used to calculate MACD data.|
|long_window|query|integer|false|The long window size used to calculate MACD data.|
|signal_window|query|integer|false|The window size used to calculate the MACD signal line.|
|series_type|query|string|false|The price in the aggregate which will be used to calculate the MACD. i.e. 'close' will result in using close prices to <br>calculate the MACD.|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/macd/C:USDAUD?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": {
    "underlying": {
      "url": "https://api.polygon.io/v2/aggs/ticker/C:USDAUD/range/1/day/2003-01-01/2022-07-25"
    },
    "values": [
      {
        "histogram": 38.3801666667,
        "signal": 106.9811666667,
        "timestamp": 1517562000016,
        "value": 145.3613333333
      },
      {
        "histogram": 41.098859136,
        "signal": 102.7386283473,
        "timestamp": 1517562001016,
        "value": 143.8374874833
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="moving-average-convergencedivergence-macd-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Moving Average Convergence/Divergence (MACD) data for each period.|Inline|

<h3 id="moving-average-convergencedivergence-macd-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the MACD indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Each entry in the values array represents MACD indicator data for a specific timestamp and includes:|
|» » histogram|number(float)|false|none|The difference between the MACD line (value) and the signal line (signal). Positive histogram values indicate upward (bullish) momentum, while negative histogram values indicate downward (bearish) momentum.|
|» » signal|number(float)|false|none|The signal line value, calculated as the exponential moving average (EMA) of the MACD line (value) over the signal period defined in the request parameters. Traders typically use crossovers between the MACD and signal lines as trading signals.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Relative Strength Index (RSI)

<a id="opIdForexRSI"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/rsi/C%3AEURUSD?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/rsi/{fxTicker}`

Get the relative strength index (RSI) for a ticker symbol over a given time range.

<h3 id="relative-strength-index-rsi-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fxTicker|path|string|true|The ticker symbol for which to get relative strength index (RSI) data.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|adjusted|query|boolean|false|Whether or not the aggregates used to calculate the relative strength index are adjusted for splits. By default, aggregates are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.|
|window|query|integer|false|The window size used to calculate the relative strength index (RSI).|
|series_type|query|string|false|The price in the aggregate which will be used to calculate the relative strength index. i.e. 'close' will result in using close prices to <br>calculate the relative strength index (RSI).|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/rsi/C:USDAUD?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": {
    "underlying": {
      "url": "https://api.polygon.io/v2/aggs/ticker/C:USDAUD/range/1/day/2003-01-01/2022-07-25"
    },
    "values": [
      {
        "timestamp": 1517562000016,
        "value": 82.19
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="relative-strength-index-rsi-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Relative strength index data for each period.|Inline|

<h3 id="relative-strength-index-rsi-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the RSI indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Timestamp or indicator value.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Simple Moving Average (SMA)

<a id="opIdForexSMA"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/sma/C%3AEURUSD?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/sma/{fxTicker}`

Get the simple moving average (SMA) for a ticker symbol over a given time range.

<h3 id="simple-moving-average-sma-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fxTicker|path|string|true|The ticker symbol for which to get simple moving average (SMA) data.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|adjusted|query|boolean|false|Whether or not the aggregates used to calculate the simple moving average are adjusted for splits. By default, aggregates are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.|
|window|query|integer|false|The window size used to calculate the simple moving average (SMA). i.e. a window size of 10 with daily aggregates would result in a 10 day moving average.|
|series_type|query|string|false|The price in the aggregate which will be used to calculate the simple moving average. i.e. 'close' will result in using close prices to <br>calculate the simple moving average (SMA).|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/sma/C:USDAUD?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": {
    "underlying": {
      "aggregates": [
        {
          "c": 75.0875,
          "h": 75.15,
          "l": 73.7975,
          "n": 1,
          "o": 74.06,
          "t": 1577941200000,
          "v": 135647456,
          "vw": 74.6099
        },
        {
          "c": 74.3575,
          "h": 75.145,
          "l": 74.125,
          "n": 1,
          "o": 74.2875,
          "t": 1578027600000,
          "v": 146535512,
          "vw": 74.7026
        }
      ],
      "url": "https://api.polygon.io/v2/aggs/ticker/C:USDAUD/range/1/day/2003-01-01/2022-07-25"
    },
    "values": [
      {
        "timestamp": 1517562000016,
        "value": 140.139
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="simple-moving-average-sma-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Simple Moving Average (SMA) data for each period.|Inline|

<h3 id="simple-moving-average-sma-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the SMA indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Timestamp or indicator value.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Grouped Daily (Bars)

<a id="opIdGetGroupedForexAggregates"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/aggs/grouped/locale/global/market/fx/2025-11-03?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/aggs/grouped/locale/global/market/fx/{date}`

Get the daily open, high, low, and close (OHLC) for the entire forex markets.


<h3 id="grouped-daily-bars-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|path|string|true|The beginning date for the aggregate window.|
|adjusted|query|boolean|false|Whether or not the results are adjusted for splits.  By default, results are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.<br>|

> Example responses

> 200 Response

```json
{
  "adjusted": true,
  "queryCount": 3,
  "request_id": {
    "description": "A request id assigned by the server.",
    "type": "string"
  },
  "results": [
    {
      "T": "C:ILSCHF",
      "c": 0.2704,
      "h": 0.2706,
      "l": 0.2693,
      "n": 689,
      "o": 0.2698,
      "t": 1602719999999,
      "v": 689,
      "vw": 0.2702
    },
    {
      "T": "C:GBPCAD",
      "c": 1.71103,
      "h": 1.71642,
      "l": 1.69064,
      "n": 407324,
      "o": 1.69955,
      "t": 1602719999999,
      "v": 407324,
      "vw": 1.7062
    },
    {
      "T": "C:DKKAUD",
      "c": 0.2214,
      "h": 0.2214,
      "l": 0.2195,
      "n": 10639,
      "o": 0.22,
      "t": 1602719999999,
      "v": 10639,
      "vw": 0.2202
    }
  ],
  "resultsCount": 3,
  "status": "OK"
}
```

<h3 id="grouped-daily-bars-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Previous day OHLC for ticker|Inline|
|default|Default|Unexpected error|None|

<h3 id="grouped-daily-bars-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjusted|boolean|true|none|Whether or not this response was adjusted for splits.|
|queryCount|integer|true|none|The number of aggregates (minute or day) used to generate the response.|
|request_id|string|true|none|A request id assigned by the server.|
|resultsCount|integer|true|none|The total number of results for this request.|
|status|string|true|none|The status of this request's response.|
|results|[object]|false|none|An array of results containing the requested data.|
|» T|string|true|none|The exchange symbol that this item is traded under.|
|» c|number(double)|true|none|The close price for the symbol in the given time period.|
|» h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» n|integer|false|none|The number of transactions in the aggregate window.|
|» o|number(double)|true|none|The open price for the symbol in the given time period.|
|» t|integer|true|none|The Unix millisecond timestamp for the end of the aggregate window.|
|» v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» vw|number(double)|false|none|The volume weighted average price.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Previous Close

<a id="opIdGetPreviousForexAggregates"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/aggs/ticker/C%3AEURUSD/prev?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/aggs/ticker/{forexTicker}/prev`

Get the previous day's open, high, low, and close (OHLC) for the specified forex pair.


<h3 id="previous-close-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forexTicker|path|string|true|The ticker symbol of the currency pair.|
|adjusted|query|boolean|false|Whether or not the results are adjusted for splits.  By default, results are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.<br>|

> Example responses

> 200 Response

```json
{
  "adjusted": true,
  "queryCount": 1,
  "request_id": "08ec061fb85115678d68452c0a609cb7",
  "results": [
    {
      "T": "C:EURUSD",
      "c": 1.06206,
      "h": 1.0631,
      "l": 1.0505,
      "n": 180300,
      "o": 1.05252,
      "t": 1651708799999,
      "v": 180300,
      "vw": 1.055
    }
  ],
  "resultsCount": 1,
  "status": "OK",
  "ticker": "C:EURUSD"
}
```

<h3 id="previous-close-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The previous day OHLC for the ticker.|Inline|
|default|Default|Unexpected error|None|

<h3 id="previous-close-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ticker|string|true|none|The exchange symbol that this item is traded under.|
|adjusted|boolean|true|none|Whether or not this response was adjusted for splits.|
|queryCount|integer|true|none|The number of aggregates (minute or day) used to generate the response.|
|request_id|string|true|none|A request id assigned by the server.|
|resultsCount|integer|true|none|The total number of results for this request.|
|status|string|true|none|The status of this request's response.|
|results|[object]|false|none|An array of results containing the requested data.|
|» T|string|true|none|The exchange symbol that this item is traded under.|
|» c|number(double)|true|none|The close price for the symbol in the given time period.|
|» h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» n|integer|false|none|The number of transactions in the aggregate window.|
|» o|number(double)|true|none|The open price for the symbol in the given time period.|
|» t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» vw|number(double)|false|none|The volume weighted average price.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Aggregates (Bars)

<a id="opIdGetForexAggregates"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/aggs/ticker/C%3AEURUSD/range/1/day/2025-11-03/2025-11-28?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/aggs/ticker/{forexTicker}/range/{multiplier}/{timespan}/{from}/{to}`

Get aggregate bars for a forex pair over a given date range in custom time window sizes.
<br />
<br />
For example, if timespan = ‘minute’ and multiplier = ‘5’ then 5-minute bars will be returned.


<h3 id="aggregates-bars-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forexTicker|path|string|true|The ticker symbol of the currency pair.|
|multiplier|path|integer|true|The size of the timespan multiplier.|
|timespan|path|string|true|The size of the time window.|
|from|path|string|true|The start of the aggregate time window. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|to|path|string|true|The end of the aggregate time window. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|adjusted|query|boolean|false|Whether or not the results are adjusted for splits.  By default, results are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.<br>|
|sort|query|string|false|Sort the results by timestamp.<br>`asc` will return results in ascending order (oldest at the top),<br>`desc` will return results in descending order (newest at the top).<br>|
|limit|query|integer|false|Limits the number of base aggregates queried to create the aggregate results. Max 50000 and Default 5000.<br>Read more about how limit is used to calculate aggregate results in our article on<br><a href="https://massive.com/blog/aggs-api-updates/" target="_blank" alt="Aggregate Data API Improvements">Aggregate Data API Improvements</a>.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|second|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|sort|asc|
|sort|desc|

> Example responses

> 200 Response

```json
{
  "adjusted": true,
  "queryCount": 1,
  "request_id": "79c061995d8b627b736170bc9653f15d",
  "results": [
    {
      "c": 1.17721,
      "h": 1.18305,
      "l": 1.1756,
      "n": 125329,
      "o": 1.17921,
      "t": 1626912000000,
      "v": 125329,
      "vw": 1.1789
    }
  ],
  "resultsCount": 1,
  "status": "OK",
  "ticker": "C:EURUSD"
}
```

<h3 id="aggregates-bars-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Forex Aggregates.|Inline|
|default|Default|Unexpected error|None|

<h3 id="aggregates-bars-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ticker|string|true|none|The exchange symbol that this item is traded under.|
|adjusted|boolean|true|none|Whether or not this response was adjusted for splits.|
|queryCount|integer|true|none|The number of aggregates (minute or day) used to generate the response.|
|request_id|string|true|none|A request id assigned by the server.|
|resultsCount|integer|true|none|The total number of results for this request.|
|status|string|true|none|The status of this request's response.|
|results|[object]|false|none|An array of results containing the requested data.|
|» c|number(double)|true|none|The close price for the symbol in the given time period.|
|» h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» n|integer|false|none|The number of transactions in the aggregate window.|
|» o|number(double)|true|none|The open price for the symbol in the given time period.|
|» t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» vw|number(double)|false|none|The volume weighted average price.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-indicesaggregates">indices:aggregates</h1>

## Exponential Moving Average (EMA)

<a id="opIdIndicesEMA"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/ema/I%3ANDX?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/ema/{indicesTicker}`

Get the exponential moving average (EMA) for a ticker symbol over a given time range.

<h3 id="exponential-moving-average-ema-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indicesTicker|path|string|true|The ticker symbol for which to get exponential moving average (EMA) data.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|adjusted|query|boolean|false|Whether or not the aggregates used to calculate the exponential moving average are adjusted for splits. By default, aggregates are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.|
|window|query|integer|false|The window size used to calculate the exponential moving average (EMA). i.e. a window size of 10 with daily aggregates would result in a 10 day moving average.|
|series_type|query|string|false|The value in the aggregate which will be used to calculate the exponential moving average. i.e. 'close' will result in using close values to <br>calculate the exponential moving average (EMA).|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/ema/I:NDX?cursor=YWRqdXN0ZWQ9dHJ1ZSZhcD0lN0IlMjJ2JTIyJTNBMCUyQyUyMm8lMjIlM0EwJTJDJTIyYyUyMiUzQTE1MDg0Ljk5OTM4OTgyMDAzJTJDJTIyaCUyMiUzQTAlMkMlMjJsJTIyJTNBMCUyQyUyMnQlMjIlM0ExNjg3MjE5MjAwMDAwJTdEJmFzPSZleHBhbmRfdW5kZXJseWluZz1mYWxzZSZsaW1pdD0xJm9yZGVyPWRlc2Mmc2VyaWVzX3R5cGU9Y2xvc2UmdGltZXNwYW49ZGF5JnRpbWVzdGFtcC5sdD0xNjg3MjM3MjAwMDAwJndpbmRvdz01MA",
  "request_id": "b9201816341441eed663a90443c0623a",
  "results": {
    "underlying": {
      "url": "https://api.polygon.io/v2/aggs/ticker/I:NDX/range/1/day/1678338000000/1687366449650?limit=226&sort=desc"
    },
    "values": [
      {
        "timestamp": 1687237200000,
        "value": 14452.002555459003
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="exponential-moving-average-ema-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Exponential Moving Average (EMA) data for each period.|Inline|

<h3 id="exponential-moving-average-ema-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the EMA indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Timestamp or indicator value.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Moving Average Convergence/Divergence (MACD)

<a id="opIdIndicesMACD"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/macd/I%3ANDX?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/macd/{indicesTicker}`

Get moving average convergence/divergence (MACD) for a ticker symbol over a given time range.

<h3 id="moving-average-convergencedivergence-macd-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indicesTicker|path|string|true|The ticker symbol for which to get MACD data.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|adjusted|query|boolean|false|Whether or not the aggregates used to calculate the MACD are adjusted for splits. By default, aggregates are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.|
|short_window|query|integer|false|The short window size used to calculate MACD data.|
|long_window|query|integer|false|The long window size used to calculate MACD data.|
|signal_window|query|integer|false|The window size used to calculate the MACD signal line.|
|series_type|query|string|false|The value in the aggregate which will be used to calculate the MACD. i.e. 'close' will result in using close values to <br>calculate the MACD.|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/macd/I:NDX?cursor=YWRqdXN0ZWQ9dHJ1ZSZhcD0lN0IlMjJ2JTIyJTNBMCUyQyUyMm8lMjIlM0EwJTJDJTIyYyUyMiUzQTE1MDg0Ljk5OTM4OTgyMDAzJTJDJTIyaCUyMiUzQTAlMkMlMjJsJTIyJTNBMCUyQyUyMnQlMjIlM0ExNjg3MTUwODAwMDAwJTdEJmFzPSZleHBhbmRfdW5kZXJseWluZz1mYWxzZSZsaW1pdD0yJmxvbmdfd2luZG93PTI2Jm9yZGVyPWRlc2Mmc2VyaWVzX3R5cGU9Y2xvc2Umc2hvcnRfd2luZG93PTEyJnNpZ25hbF93aW5kb3c9OSZ0aW1lc3Bhbj1kYXkmdGltZXN0YW1wLmx0PTE2ODcyMTkyMDAwMDA",
  "request_id": "2eeda0be57e83cbc64cc8d1a74e84dbd",
  "results": {
    "underlying": {
      "url": "https://api.polygon.io/v2/aggs/ticker/I:NDX/range/1/day/1678338000000/1687366537196?limit=121&sort=desc"
    },
    "values": [
      {
        "histogram": -4.7646219788108795,
        "signal": 220.7596784587801,
        "timestamp": 1687237200000,
        "value": 215.9950564799692
      },
      {
        "histogram": 3.4518937661882205,
        "signal": 221.9508339534828,
        "timestamp": 1687219200000,
        "value": 225.40272771967102
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="moving-average-convergencedivergence-macd-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Moving Average Convergence/Divergence (MACD) data for each period.|Inline|

<h3 id="moving-average-convergencedivergence-macd-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the MACD indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Each entry in the values array represents MACD indicator data for a specific timestamp and includes:|
|» » histogram|number(float)|false|none|The difference between the MACD line (value) and the signal line (signal). Positive histogram values indicate upward (bullish) momentum, while negative histogram values indicate downward (bearish) momentum.|
|» » signal|number(float)|false|none|The signal line value, calculated as the exponential moving average (EMA) of the MACD line (value) over the signal period defined in the request parameters. Traders typically use crossovers between the MACD and signal lines as trading signals.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Relative Strength Index (RSI)

<a id="opIdIndicesRSI"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/rsi/I%3ANDX?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/rsi/{indicesTicker}`

Get the relative strength index (RSI) for a ticker symbol over a given time range.

<h3 id="relative-strength-index-rsi-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indicesTicker|path|string|true|The ticker symbol for which to get relative strength index (RSI) data.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|adjusted|query|boolean|false|Whether or not the aggregates used to calculate the relative strength index are adjusted for splits. By default, aggregates are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.|
|window|query|integer|false|The window size used to calculate the relative strength index (RSI).|
|series_type|query|string|false|The value in the aggregate which will be used to calculate the relative strength index. i.e. 'close' will result in using close values to <br>calculate the relative strength index (RSI).|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/rsi/I:NDX?cursor=YWRqdXN0ZWQ9dHJ1ZSZhcD0lN0IlMjJ2JTIyJTNBMCUyQyUyMm8lMjIlM0EwJTJDJTIyYyUyMiUzQTE1MDg0Ljk5OTM4OTgyMDAzJTJDJTIyaCUyMiUzQTAlMkMlMjJsJTIyJTNBMCUyQyUyMnQlMjIlM0ExNjg3MjE5MjAwMDAwJTdEJmFzPSZleHBhbmRfdW5kZXJseWluZz1mYWxzZSZsaW1pdD0xJm9yZGVyPWRlc2Mmc2VyaWVzX3R5cGU9Y2xvc2UmdGltZXNwYW49ZGF5JnRpbWVzdGFtcC5sdD0xNjg3MjM3MjAwMDAwJndpbmRvdz0xNA",
  "request_id": "28a8417f521f98e1d08f6ed7d1fbcad3",
  "results": {
    "underlying": {
      "url": "https://api.polygon.io/v2/aggs/ticker/I:NDX/range/1/day/1678338000000/1687366658253?limit=66&sort=desc"
    },
    "values": [
      {
        "timestamp": 1687237200000,
        "value": 73.98019439047955
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="relative-strength-index-rsi-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Relative Strength Index (RSI) data for each period.|Inline|

<h3 id="relative-strength-index-rsi-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the RSI indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Timestamp or indicator value.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Simple Moving Average (SMA)

<a id="opIdIndicesSMA"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/sma/I%3ANDX?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/sma/{indicesTicker}`

Get the simple moving average (SMA) for a ticker symbol over a given time range.

<h3 id="simple-moving-average-sma-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indicesTicker|path|string|true|The ticker symbol for which to get simple moving average (SMA) data.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|adjusted|query|boolean|false|Whether or not the aggregates used to calculate the simple moving average are adjusted for splits. By default, aggregates are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.|
|window|query|integer|false|The window size used to calculate the simple moving average (SMA). i.e. a window size of 10 with daily aggregates would result in a 10 day moving average.|
|series_type|query|string|false|The value in the aggregate which will be used to calculate the simple moving average. i.e. 'close' will result in using close values to <br>calculate the simple moving average (SMA).|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/sma/I:NDX?cursor=YWRqdXN0ZWQ9dHJ1ZSZhcD0lN0IlMjJ2JTIyJTNBMCUyQyUyMm8lMjIlM0EwJTJDJTIyYyUyMiUzQTE1MDg0Ljk5OTM4OTgyMDAzJTJDJTIyaCUyMiUzQTAlMkMlMjJsJTIyJTNBMCUyQyUyMnQlMjIlM0ExNjg3MjE5MjAwMDAwJTdEJmFzPSZleHBhbmRfdW5kZXJseWluZz1mYWxzZSZsaW1pdD0xJm9yZGVyPWRlc2Mmc2VyaWVzX3R5cGU9Y2xvc2UmdGltZXNwYW49ZGF5JnRpbWVzdGFtcC5sdD0xNjg3MjM3MjAwMDAwJndpbmRvdz01Mw",
  "request_id": "4cae270008cb3f947e3f92c206e3888a",
  "results": {
    "underlying": {
      "url": "https://api.polygon.io/v2/aggs/ticker/I:NDX/range/1/day/1678338000000/1687366378997?limit=240&sort=desc"
    },
    "values": [
      {
        "timestamp": 1687237200000,
        "value": 14362.676417589264
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="simple-moving-average-sma-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Simple Moving Average (SMA) data for each period.|Inline|

<h3 id="simple-moving-average-sma-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the SMA indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Timestamp or indicator value.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Previous Close

<a id="opIdGetPreviousIndicesAggregates"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/aggs/ticker/I%3ANDX/prev?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/aggs/ticker/{indicesTicker}/prev`

Get the previous day's open, high, low, and close (OHLC) for the specified index.


<h3 id="previous-close-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indicesTicker|path|string|true|The ticker symbol of Index.|

> Example responses

> 200 Response

```json
{
  "queryCount": 1,
  "request_id": "b2170df985474b6d21a6eeccfb6bee67",
  "results": [
    {
      "T": "I:NDX",
      "c": 15070.14948566977,
      "h": 15127.4195807999,
      "l": 14946.7243781848,
      "o": 15036.48391066877,
      "t": 1687291200000
    }
  ],
  "resultsCount": 1,
  "status": "OK",
  "ticker": "I:NDX"
}
```

<h3 id="previous-close-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The previous day OHLC for a index.|Inline|
|default|Default|Unexpected error|None|

<h3 id="previous-close-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ticker|string|true|none|The exchange symbol that this item is traded under.|
|queryCount|integer|true|none|The number of aggregates (minute or day) used to generate the response.|
|request_id|string|true|none|A request id assigned by the server.|
|resultsCount|integer|true|none|The total number of results for this request.|
|status|string|true|none|The status of this request's response.|
|results|[object]|false|none|An array of results containing the requested data.|
|» T|string|true|none|The exchange symbol that this item is traded under.|
|» c|number(double)|true|none|The close value for the symbol in the given time period.|
|» h|number(double)|true|none|The highest value for the symbol in the given time period.|
|» l|number(double)|true|none|The lowest value for the symbol in the given time period.|
|» o|number(double)|true|none|The open value for the symbol in the given time period.|
|» t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Aggregates (Bars)

<a id="opIdGetIndicesAggregates"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/aggs/ticker/I%3ANDX/range/1/day/2025-11-03/2025-11-28?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/aggs/ticker/{indicesTicker}/range/{multiplier}/{timespan}/{from}/{to}`

Get aggregate bars for an index over a given date range in custom time window sizes.
<br />
<br />
For example, if timespan = ‘minute’ and multiplier = ‘5’ then 5-minute bars will be returned.


<h3 id="aggregates-bars-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indicesTicker|path|string|true|The ticker symbol of Index.|
|multiplier|path|integer|true|The size of the timespan multiplier.|
|timespan|path|string|true|The size of the time window.|
|from|path|string|true|The start of the aggregate time window. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|to|path|string|true|The end of the aggregate time window. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|sort|query|string|false|Sort the results by timestamp.<br>`asc` will return results in ascending order (oldest at the top),<br>`desc` will return results in descending order (newest at the top).<br>|
|limit|query|integer|false|Limits the number of base aggregates queried to create the aggregate results. Max 50000 and Default 5000.<br>Read more about how limit is used to calculate aggregate results in our article on<br><a href="https://massive.com/blog/aggs-api-updates/" target="_blank" alt="Aggregate Data API Improvements">Aggregate Data API Improvements</a>.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|second|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|sort|asc|
|sort|desc|

> Example responses

> 200 Response

```json
{
  "count": 2,
  "queryCount": 2,
  "request_id": "0cf72b6da685bcd386548ffe2895904a",
  "results": [
    {
      "c": 11995.88235998666,
      "h": 12340.44936267155,
      "l": 11970.34221717375,
      "o": 12230.83658266843,
      "t": 1678341600000
    },
    {
      "c": 11830.28178808306,
      "h": 12069.62262033557,
      "l": 11789.85923449393,
      "o": 12001.69552583921,
      "t": 1678428000000
    }
  ],
  "status": "OK",
  "ticker": "I:NDX"
}
```

<h3 id="aggregates-bars-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Index Aggregates.|Inline|
|default|Default|Unexpected error|None|

<h3 id="aggregates-bars-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ticker|string|true|none|The exchange symbol that this item is traded under.|
|queryCount|integer|true|none|The number of aggregates (minute or day) used to generate the response.|
|request_id|string|true|none|A request id assigned by the server.|
|resultsCount|integer|true|none|The total number of results for this request.|
|status|string|true|none|The status of this request's response.|
|results|[object]|false|none|An array of results containing the requested data.|
|» c|number(double)|true|none|The close value for the symbol in the given time period.|
|» h|number(double)|true|none|The highest value for the symbol in the given time period.|
|» l|number(double)|true|none|The lowest value for the symbol in the given time period.|
|» o|number(double)|true|none|The open value for the symbol in the given time period.|
|» t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-optionsaggregates">options:aggregates</h1>

## Exponential Moving Average (EMA)

<a id="opIdOptionsEMA"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/ema/O%3ASPY241220P00720000?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/ema/{optionsTicker}`

Get the exponential moving average (EMA) for a ticker symbol over a given time range.

<h3 id="exponential-moving-average-ema-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|optionsTicker|path|string|true|The ticker symbol for which to get exponential moving average (EMA) data.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|adjusted|query|boolean|false|Whether or not the aggregates used to calculate the exponential moving average are adjusted for splits. By default, aggregates are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.|
|window|query|integer|false|The window size used to calculate the exponential moving average (EMA). i.e. a window size of 10 with daily aggregates would result in a 10 day moving average.|
|series_type|query|string|false|The price in the aggregate which will be used to calculate the exponential moving average. i.e. 'close' will result in using close prices to <br>calculate the exponential moving average (EMA).|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/ema/O:SPY241220P00720000?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": {
    "underlying": {
      "url": "https://api.polygon.io/v2/aggs/ticker/O:SPY241220P00720000/range/1/day/2003-01-01/2022-07-25"
    },
    "values": [
      {
        "timestamp": 1517562000016,
        "value": 140.139
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="exponential-moving-average-ema-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Exponential Moving Average (EMA) data for each period.|Inline|

<h3 id="exponential-moving-average-ema-3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the EMA indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Timestamp or indicator value.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Moving Average Convergence/Divergence (MACD)

<a id="opIdOptionsMACD"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/macd/O%3ASPY241220P00720000?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/macd/{optionsTicker}`

Get moving average convergence/divergence (MACD) for a ticker symbol over a given time range.

<h3 id="moving-average-convergencedivergence-macd-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|optionsTicker|path|string|true|The ticker symbol for which to get MACD data.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|adjusted|query|boolean|false|Whether or not the aggregates used to calculate the MACD are adjusted for splits. By default, aggregates are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.|
|short_window|query|integer|false|The short window size used to calculate MACD data.|
|long_window|query|integer|false|The long window size used to calculate MACD data.|
|signal_window|query|integer|false|The window size used to calculate the MACD signal line.|
|series_type|query|string|false|The price in the aggregate which will be used to calculate the MACD. i.e. 'close' will result in using close prices to <br>calculate the MACD.|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/macd/O:SPY241220P00720000?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": {
    "underlying": {
      "url": "https://api.polygon.io/v2/aggs/ticker/O:SPY241220P00720000/range/1/day/2003-01-01/2022-07-25"
    },
    "values": [
      {
        "histogram": 38.3801666667,
        "signal": 106.9811666667,
        "timestamp": 1517562000016,
        "value": 145.3613333333
      },
      {
        "histogram": 41.098859136,
        "signal": 102.7386283473,
        "timestamp": 1517562001016,
        "value": 143.8374874833
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="moving-average-convergencedivergence-macd-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Moving Average Convergence/Divergence (MACD) data for each period.|Inline|

<h3 id="moving-average-convergencedivergence-macd-3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the MACD indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Each entry in the values array represents MACD indicator data for a specific timestamp and includes:|
|» » histogram|number(float)|false|none|The difference between the MACD line (value) and the signal line (signal). Positive histogram values indicate upward (bullish) momentum, while negative histogram values indicate downward (bearish) momentum.|
|» » signal|number(float)|false|none|The signal line value, calculated as the exponential moving average (EMA) of the MACD line (value) over the signal period defined in the request parameters. Traders typically use crossovers between the MACD and signal lines as trading signals.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Relative Strength Index (RSI)

<a id="opIdOptionsRSI"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/rsi/O%3ASPY241220P00720000?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/rsi/{optionsTicker}`

Get the relative strength index (RSI) for a ticker symbol over a given time range.

<h3 id="relative-strength-index-rsi-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|optionsTicker|path|string|true|The ticker symbol for which to get relative strength index (RSI) data.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|adjusted|query|boolean|false|Whether or not the aggregates used to calculate the relative strength index are adjusted for splits. By default, aggregates are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.|
|window|query|integer|false|The window size used to calculate the relative strength index (RSI).|
|series_type|query|string|false|The price in the aggregate which will be used to calculate the relative strength index. i.e. 'close' will result in using close prices to <br>calculate the relative strength index (RSI).|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/rsi/O:SPY241220P00720000?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": {
    "underlying": {
      "url": "https://api.polygon.io/v2/aggs/ticker/O:SPY241220P00720000/range/1/day/2003-01-01/2022-07-25"
    },
    "values": [
      {
        "timestamp": 1517562000016,
        "value": 82.19
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="relative-strength-index-rsi-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Relative Strength Index (RSI) data for each period.|Inline|

<h3 id="relative-strength-index-rsi-3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the RSI indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Timestamp or indicator value.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Simple Moving Average (SMA)

<a id="opIdOptionsSMA"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/sma/O%3ASPY241220P00720000?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/sma/{optionsTicker}`

Get the simple moving average (SMA) for a ticker symbol over a given time range.

<h3 id="simple-moving-average-sma-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|optionsTicker|path|string|true|The ticker symbol for which to get simple moving average (SMA) data.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|adjusted|query|boolean|false|Whether or not the aggregates used to calculate the simple moving average are adjusted for splits. By default, aggregates are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.|
|window|query|integer|false|The window size used to calculate the simple moving average (SMA). i.e. a window size of 10 with daily aggregates would result in a 10 day moving average.|
|series_type|query|string|false|The price in the aggregate which will be used to calculate the simple moving average. i.e. 'close' will result in using close prices to <br>calculate the simple moving average (SMA).|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/sma/O:SPY241220P00720000?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": {
    "underlying": {
      "aggregates": [
        {
          "c": 75.0875,
          "h": 75.15,
          "l": 73.7975,
          "n": 1,
          "o": 74.06,
          "t": 1577941200000,
          "v": 135647456,
          "vw": 74.6099
        },
        {
          "c": 74.3575,
          "h": 75.145,
          "l": 74.125,
          "n": 1,
          "o": 74.2875,
          "t": 1578027600000,
          "v": 146535512,
          "vw": 74.7026
        }
      ],
      "url": "https://api.polygon.io/v2/aggs/ticker/O:SPY241220P00720000/range/1/day/2003-01-01/2022-07-25"
    },
    "values": [
      {
        "timestamp": 1517562000016,
        "value": 140.139
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="simple-moving-average-sma-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Simple Moving Average (SMA) data for each period.|Inline|

<h3 id="simple-moving-average-sma-3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the SMA indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Timestamp or indicator value.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Previous Close

<a id="opIdGetPreviousOptionsAggregates"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/aggs/ticker/O%3ASPY251219C00650000/prev?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/aggs/ticker/{optionsTicker}/prev`

Get the previous day's open, high, low, and close (OHLC) for the specified option contract.


<h3 id="previous-close-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|optionsTicker|path|string|true|The ticker symbol of the options contract.|
|adjusted|query|boolean|false|Whether or not the results are adjusted for splits.  By default, results are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.<br>|

> Example responses

> 200 Response

```json
{
  "adjusted": true,
  "queryCount": 1,
  "request_id": "6a7e466379af0a71039d60cc78e72282",
  "results": [
    {
      "T": "O:TSLA210903C00700000",
      "c": 115.97,
      "h": 117.59,
      "l": 114.13,
      "n": 2,
      "o": 115.55,
      "t": 1605042000000,
      "v": 131704427,
      "vw": 116.3058
    }
  ],
  "resultsCount": 1,
  "status": "OK",
  "ticker": "O:TSLA210903C00700000"
}
```

<h3 id="previous-close-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The previous day OHLC for the options contract.|Inline|
|default|Default|Unexpected error|None|

<h3 id="previous-close-3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ticker|string|true|none|The exchange symbol that this item is traded under.|
|adjusted|boolean|true|none|Whether or not this response was adjusted for splits.|
|queryCount|integer|true|none|The number of aggregates (minute or day) used to generate the response.|
|request_id|string|true|none|A request id assigned by the server.|
|resultsCount|integer|true|none|The total number of results for this request.|
|status|string|true|none|The status of this request's response.|
|results|[object]|false|none|An array of results containing the requested data.|
|» T|string|true|none|The exchange symbol that this item is traded under.|
|» c|number(double)|true|none|The close price for the symbol in the given time period.|
|» h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» n|integer|false|none|The number of transactions in the aggregate window.|
|» o|number(double)|true|none|The open price for the symbol in the given time period.|
|» t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» vw|number(double)|false|none|The volume weighted average price.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Aggregates (Bars)

<a id="opIdGetOptionsAggregates"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/aggs/ticker/O%3ASPY251219C00650000/range/1/day/2025-11-03/2025-11-28?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/aggs/ticker/{optionsTicker}/range/{multiplier}/{timespan}/{from}/{to}`

Get aggregate bars for an option contract over a given date range in custom time window sizes.
<br />
<br />
For example, if timespan = ‘minute’ and multiplier = ‘5’ then 5-minute bars will be returned.


<h3 id="aggregates-bars-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|optionsTicker|path|string|true|The ticker symbol of the options contract.|
|multiplier|path|integer|true|The size of the timespan multiplier.|
|timespan|path|string|true|The size of the time window.|
|from|path|string|true|The start of the aggregate time window. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|to|path|string|true|The end of the aggregate time window. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|adjusted|query|boolean|false|Whether or not the results are adjusted for splits.  By default, results are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.<br>|
|sort|query|string|false|Sort the results by timestamp.<br>`asc` will return results in ascending order (oldest at the top),<br>`desc` will return results in descending order (newest at the top).<br>|
|limit|query|integer|false|Limits the number of base aggregates queried to create the aggregate results. Max 50000 and Default 5000.<br>Read more about how limit is used to calculate aggregate results in our article on<br><a href="https://massive.com/blog/aggs-api-updates/" target="_blank" alt="Aggregate Data API Improvements">Aggregate Data API Improvements</a>.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|second|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|sort|asc|
|sort|desc|

> Example responses

> 200 Response

```json
{
  "adjusted": true,
  "count": 2,
  "queryCount": 2,
  "request_id": "5585acde-5085-42d6-95b2-2e388a28370a",
  "results": [
    {
      "c": 26.2,
      "h": 26.2,
      "l": 26.2,
      "n": 1,
      "o": 26.2,
      "t": 1632369600000,
      "v": 2,
      "vw": 26.2
    },
    {
      "c": 28.3,
      "h": 28.3,
      "l": 28.3,
      "n": 1,
      "o": 28.3,
      "t": 1632456000000,
      "v": 2,
      "vw": 28.3
    }
  ],
  "resultsCount": 2,
  "status": "OK",
  "ticker": "O:RDFN211119C00025000"
}
```

<h3 id="aggregates-bars-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Options Aggregates.|Inline|
|default|Default|Unexpected error|None|

<h3 id="aggregates-bars-3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ticker|string|true|none|The exchange symbol that this item is traded under.|
|adjusted|boolean|true|none|Whether or not this response was adjusted for splits.|
|queryCount|integer|true|none|The number of aggregates (minute or day) used to generate the response.|
|request_id|string|true|none|A request id assigned by the server.|
|resultsCount|integer|true|none|The total number of results for this request.|
|status|string|true|none|The status of this request's response.|
|results|[object]|false|none|An array of results containing the requested data.|
|» c|number(double)|true|none|The close price for the symbol in the given time period.|
|» h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» n|integer|false|none|The number of transactions in the aggregate window.|
|» o|number(double)|true|none|The open price for the symbol in the given time period.|
|» t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» vw|number(double)|false|none|The volume weighted average price.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-stocksaggregates">stocks:aggregates</h1>

## Exponential Moving Average (EMA)

<a id="opIdEMA"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/ema/AAPL?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/ema/{stockTicker}`

Get the exponential moving average (EMA) for a ticker symbol over a given time range.

<h3 id="exponential-moving-average-ema-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stockTicker|path|string|true|Specify a case-sensitive ticker symbol for which to get exponential moving average (EMA) data. For example, AAPL represents Apple Inc.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|adjusted|query|boolean|false|Whether or not the aggregates used to calculate the exponential moving average are adjusted for splits. By default, aggregates are adjusted. Set this to false to get results that are NOT adjusted for splits.|
|window|query|integer|false|The window size used to calculate the exponential moving average (EMA). i.e. a window size of 10 with daily aggregates would result in a 10 day moving average.|
|series_type|query|string|false|The price in the aggregate which will be used to calculate the exponential moving average. i.e. 'close' will result in using close prices to <br>calculate the exponential moving average (EMA).|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/ema/AAPL?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": {
    "underlying": {
      "url": "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2003-01-01/2022-07-25"
    },
    "values": [
      {
        "timestamp": 1517562000016,
        "value": 140.139
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="exponential-moving-average-ema-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Exponential Moving Average (EMA) data for each period.|Inline|

<h3 id="exponential-moving-average-ema-4-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the EMA indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Timestamp or indicator value.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Moving Average Convergence/Divergence (MACD)

<a id="opIdMACD"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/macd/AAPL?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/macd/{stockTicker}`

Get moving average convergence/divergence (MACD) data for a ticker symbol over a given time range.

<h3 id="moving-average-convergencedivergence-macd-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stockTicker|path|string|true|Specify a case-sensitive ticker symbol for which to get moving average convergence/divergence (MACD) data. For example, AAPL represents Apple Inc.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|adjusted|query|boolean|false|Whether or not the aggregates used to calculate the MACD are adjusted for splits. By default, aggregates are adjusted. Set this to false to get results that are NOT adjusted for splits.|
|short_window|query|integer|false|The short window size used to calculate MACD data.|
|long_window|query|integer|false|The long window size used to calculate MACD data.|
|signal_window|query|integer|false|The window size used to calculate the MACD signal line.|
|series_type|query|string|false|The price in the aggregate which will be used to calculate the MACD. i.e. 'close' will result in using close prices to <br>calculate the MACD.|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/macd/AAPL?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": {
    "underlying": {
      "url": "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2003-01-01/2022-07-25"
    },
    "values": [
      {
        "histogram": 38.3801666667,
        "signal": 106.9811666667,
        "timestamp": 1517562000016,
        "value": 145.3613333333
      },
      {
        "histogram": 41.098859136,
        "signal": 102.7386283473,
        "timestamp": 1517562001016,
        "value": 143.8374874833
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="moving-average-convergencedivergence-macd-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Moving Average Convergence/Divergence (MACD) data for each period.|Inline|

<h3 id="moving-average-convergencedivergence-macd-4-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the MACD indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Each entry in the values array represents MACD indicator data for a specific timestamp and includes:|
|» » histogram|number(float)|false|none|The difference between the MACD line (value) and the signal line (signal). Positive histogram values indicate upward (bullish) momentum, while negative histogram values indicate downward (bearish) momentum.|
|» » signal|number(float)|false|none|The signal line value, calculated as the exponential moving average (EMA) of the MACD line (value) over the signal period defined in the request parameters. Traders typically use crossovers between the MACD and signal lines as trading signals.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Relative Strength Index (RSI)

<a id="opIdRSI"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/rsi/AAPL?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/rsi/{stockTicker}`

Get the relative strength index (RSI) for a ticker symbol over a given time range.

<h3 id="relative-strength-index-rsi-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stockTicker|path|string|true|Specify a case-sensitive ticker symbol for which to get relative strength index (RSI) data. For example, AAPL represents Apple Inc.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|adjusted|query|boolean|false|Whether or not the aggregates used to calculate the relative strength index are adjusted for splits. By default, aggregates are adjusted. Set this to false to get results that are NOT adjusted for splits.|
|window|query|integer|false|The window size used to calculate the relative strength index (RSI).|
|series_type|query|string|false|The price in the aggregate which will be used to calculate the relative strength index. i.e. 'close' will result in using close prices to <br>calculate the relative strength index (RSI).|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/rsi/AAPL?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": {
    "underlying": {
      "url": "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2003-01-01/2022-07-25"
    },
    "values": [
      {
        "timestamp": 1517562000016,
        "value": 82.19
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="relative-strength-index-rsi-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Relative strength Index data for each period.|Inline|

<h3 id="relative-strength-index-rsi-4-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the RSI indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Timestamp or indicator value.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Simple Moving Average (SMA)

<a id="opIdSMA"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/indicators/sma/AAPL?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/indicators/sma/{stockTicker}`

Get the simple moving average (SMA) for a ticker symbol over a given time range.

<h3 id="simple-moving-average-sma-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stockTicker|path|string|true|Specify a case-sensitive ticker symbol for which to get simple moving average (SMA) data. For example, AAPL represents Apple Inc.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|timespan|query|string|false|The size of the aggregate time window.|
|adjusted|query|boolean|false|Whether or not the aggregates used to calculate the simple moving average are adjusted for splits. By default, aggregates are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.|
|window|query|integer|false|The window size used to calculate the simple moving average (SMA). i.e. a window size of 10 with daily aggregates would result in a 10 day moving average.|
|series_type|query|string|false|The price in the aggregate which will be used to calculate the simple moving average. i.e. 'close' will result in using close prices to <br>calculate the simple moving average (SMA).|
|expand_underlying|query|boolean|false|Whether or not to include the aggregates used to calculate this indicator in the response.|
|order|query|string|false|The order in which to return the results, ordered by timestamp.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 5000|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|series_type|open|
|series_type|high|
|series_type|low|
|series_type|close|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v1/indicators/sma/AAPL?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": {
    "underlying": {
      "aggregates": [
        {
          "c": 75.0875,
          "h": 75.15,
          "l": 73.7975,
          "n": 1,
          "o": 74.06,
          "t": 1577941200000,
          "v": 135647456,
          "vw": 74.6099
        },
        {
          "c": 74.3575,
          "h": 75.145,
          "l": 74.125,
          "n": 1,
          "o": 74.2875,
          "t": 1578027600000,
          "v": 146535512,
          "vw": 74.7026
        }
      ],
      "url": "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2003-01-01/2022-07-25"
    },
    "values": [
      {
        "timestamp": 1517562000016,
        "value": 140.139
      }
    ]
  },
  "status": "OK"
}
```

<h3 id="simple-moving-average-sma-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Simple Moving Average (SMA) data for each period.|Inline|

<h3 id="simple-moving-average-sma-4-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|true|none|The results of the SMA indicator calculation.|
|» underlying|object|false|none|The underlying aggregates used.|
|» » aggregates|[object]|false|none|The array of aggregates used in the calculation of this indicator.|
|» » » c|number(float)|true|none|The close price for the symbol in the given time period.|
|» » » h|number(float)|true|none|The highest price for the symbol in the given time period.|
|» » » l|number(float)|true|none|The lowest price for the symbol in the given time period.|
|» » » n|integer|true|none|The number of transactions in the aggregate window.|
|» » » o|number(float)|true|none|The open price for the symbol in the given time period.|
|» » » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » » t|number(float)|true|none|The Unix Msec timestamp for the start of the aggregate window.|
|» » » v|number(float)|true|none|The trading volume of the symbol in the given time period.|
|» » » vw|number(float)|true|none|The volume weighted average price.|
|» » url|string|false|none|The URL which can be used to request the underlying aggregates used in this request.|
|» values|[object]|false|none|Timestamp or indicator value.|
|» » timestamp|integer(int64)|false|none|The Unix Msec timestamp from the last aggregate used in this calculation.|
|» » value|number(float)|false|none|The MACD line value, calculated as the difference between the short-term and long-term exponential moving averages (EMAs) based on the periods specified in the request parameters.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Grouped Daily (Bars)

<a id="opIdGetGroupedStocksAggregates"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2025-11-03?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/aggs/grouped/locale/us/market/stocks/{date}`

Get the daily open, high, low, and close (OHLC) for the entire stocks/equities markets.


<h3 id="grouped-daily-bars-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|path|string|true|The beginning date for the aggregate window.|
|adjusted|query|boolean|false|Whether or not the results are adjusted for splits.  By default, results are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.<br>|
|include_otc|query|boolean|false|Include OTC securities in the response. Default is false (don't include OTC securities).<br>|

> Example responses

> 200 Response

```json
{
  "adjusted": true,
  "queryCount": 3,
  "request_id": {
    "description": "A request id assigned by the server.",
    "type": "string"
  },
  "results": [
    {
      "T": "KIMpL",
      "c": 25.9102,
      "h": 26.25,
      "l": 25.91,
      "n": 74,
      "o": 26.07,
      "t": 1602705600000,
      "v": 4369,
      "vw": 26.0407
    },
    {
      "T": "TANH",
      "c": 23.4,
      "h": 24.763,
      "l": 22.65,
      "n": 1096,
      "o": 24.5,
      "t": 1602705600000,
      "v": 25933.6,
      "vw": 23.493
    },
    {
      "T": "VSAT",
      "c": 34.24,
      "h": 35.47,
      "l": 34.21,
      "n": 4966,
      "o": 34.9,
      "t": 1602705600000,
      "v": 312583,
      "vw": 34.4736
    }
  ],
  "resultsCount": 3,
  "status": "OK"
}
```

<h3 id="grouped-daily-bars-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Previous day OHLC for ticker|Inline|
|default|Default|Unexpected error|None|

<h3 id="grouped-daily-bars-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjusted|boolean|true|none|Whether or not this response was adjusted for splits.|
|queryCount|integer|true|none|The number of aggregates (minute or day) used to generate the response.|
|request_id|string|true|none|A request id assigned by the server.|
|resultsCount|integer|true|none|The total number of results for this request.|
|status|string|true|none|The status of this request's response.|
|results|[object]|false|none|An array of results containing the requested data.|
|» T|string|true|none|The exchange symbol that this item is traded under.|
|» c|number(double)|true|none|The close price for the symbol in the given time period.|
|» h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» n|integer|false|none|The number of transactions in the aggregate window.|
|» o|number(double)|true|none|The open price for the symbol in the given time period.|
|» otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» t|integer|true|none|The Unix millisecond timestamp for the end of the aggregate window.|
|» v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» vw|number(double)|false|none|The volume weighted average price.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Previous Close

<a id="opIdGetPreviousStocksAggregates"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/aggs/ticker/AAPL/prev?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/aggs/ticker/{stocksTicker}/prev`

Get the previous day's open, high, low, and close (OHLC) for the specified stock ticker.


<h3 id="previous-close-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stocksTicker|path|string|true|Specify a case-sensitive ticker symbol. For example, AAPL represents Apple Inc.|
|adjusted|query|boolean|false|Whether or not the results are adjusted for splits.  By default, results are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.<br>|

> Example responses

> 200 Response

```json
{
  "adjusted": true,
  "queryCount": 1,
  "request_id": "6a7e466379af0a71039d60cc78e72282",
  "results": [
    {
      "T": "AAPL",
      "c": 115.97,
      "h": 117.59,
      "l": 114.13,
      "o": 115.55,
      "t": 1605042000000,
      "v": 131704427,
      "vw": 116.3058
    }
  ],
  "resultsCount": 1,
  "status": "OK",
  "ticker": "AAPL"
}
```

<h3 id="previous-close-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The previous day OHLC for the ticker.|Inline|
|default|Default|Unexpected error|None|

<h3 id="previous-close-4-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ticker|string|true|none|The exchange symbol that this item is traded under.|
|adjusted|boolean|true|none|Whether or not this response was adjusted for splits.|
|queryCount|integer|true|none|The number of aggregates (minute or day) used to generate the response.|
|request_id|string|true|none|A request id assigned by the server.|
|resultsCount|integer|true|none|The total number of results for this request.|
|status|string|true|none|The status of this request's response.|
|results|[object]|false|none|An array of results containing the requested data.|
|» T|string|true|none|The exchange symbol that this item is traded under.|
|» c|number(double)|true|none|The close price for the symbol in the given time period.|
|» h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» n|integer|false|none|The number of transactions in the aggregate window.|
|» o|number(double)|true|none|The open price for the symbol in the given time period.|
|» t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» vw|number(double)|false|none|The volume weighted average price.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Aggregates (Bars)

<a id="opIdGetStocksAggregates"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2025-11-03/2025-11-28?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/aggs/ticker/{stocksTicker}/range/{multiplier}/{timespan}/{from}/{to}`

Get aggregate bars for a stock over a given date range in custom time window sizes.
<br />
<br />
For example, if timespan = ‘minute’ and multiplier = ‘5’ then 5-minute bars will be returned.


<h3 id="aggregates-bars-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stocksTicker|path|string|true|Specify a case-sensitive ticker symbol. For example, AAPL represents Apple Inc.|
|multiplier|path|integer|true|The size of the timespan multiplier.|
|timespan|path|string|true|The size of the time window.|
|from|path|string|true|The start of the aggregate time window. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|to|path|string|true|The end of the aggregate time window. Either a date with the format YYYY-MM-DD or a millisecond timestamp.|
|adjusted|query|boolean|false|Whether or not the results are adjusted for splits.  By default, results are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.<br>|
|sort|query|string|false|Sort the results by timestamp.<br>`asc` will return results in ascending order (oldest at the top),<br>`desc` will return results in descending order (newest at the top).<br>|
|limit|query|integer|false|Limits the number of base aggregates queried to create the aggregate results. Max 50000 and Default 5000.<br>Read more about how limit is used to calculate aggregate results in our article on<br><a href="https://massive.com/blog/aggs-api-updates/" target="_blank" alt="Aggregate Data API Improvements">Aggregate Data API Improvements</a>.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timespan|second|
|timespan|minute|
|timespan|hour|
|timespan|day|
|timespan|week|
|timespan|month|
|timespan|quarter|
|timespan|year|
|sort|asc|
|sort|desc|

> Example responses

> 200 Response

```json
{
  "adjusted": true,
  "next_url": "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/1578114000000/2020-01-10?cursor=bGltaXQ9MiZzb3J0PWFzYw",
  "queryCount": 2,
  "request_id": "6a7e466379af0a71039d60cc78e72282",
  "results": [
    {
      "c": 75.0875,
      "h": 75.15,
      "l": 73.7975,
      "n": 1,
      "o": 74.06,
      "t": 1577941200000,
      "v": 135647456,
      "vw": 74.6099
    },
    {
      "c": 74.3575,
      "h": 75.145,
      "l": 74.125,
      "n": 1,
      "o": 74.2875,
      "t": 1578027600000,
      "v": 146535512,
      "vw": 74.7026
    }
  ],
  "resultsCount": 2,
  "status": "OK",
  "ticker": "AAPL"
}
```

<h3 id="aggregates-bars-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stock Aggregates.|Inline|
|default|Default|Unexpected error|None|

<h3 id="aggregates-bars-4-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ticker|string|true|none|The exchange symbol that this item is traded under.|
|adjusted|boolean|true|none|Whether or not this response was adjusted for splits.|
|queryCount|integer|true|none|The number of aggregates (minute or day) used to generate the response.|
|request_id|string|true|none|A request id assigned by the server.|
|resultsCount|integer|true|none|The total number of results for this request.|
|status|string|true|none|The status of this request's response.|
|results|[object]|false|none|An array of results containing the requested data.|
|» c|number(double)|true|none|The close price for the symbol in the given time period.|
|» h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» n|integer|false|none|The number of transactions in the aggregate window.|
|» o|number(double)|true|none|The open price for the symbol in the given time period.|
|» otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» vw|number(double)|false|none|The volume weighted average price.|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-cryptolasttrade">crypto:last:trade</h1>

## Last Trade for a Crypto Pair

<a id="opIdLastTradeCrypto"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/last/crypto/BTC/USD?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/last/crypto/{from}/{to}`

Get the last trade tick for a cryptocurrency pair.

<h3 id="last-trade-for-a-crypto-pair-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|path|string|true|The "from" symbol of the pair.|
|to|path|string|true|The "to" symbol of the pair.|

> Example responses

> 200 Response

```json
{
  "last": {
    "conditions": [
      1
    ],
    "exchange": 4,
    "price": 16835.42,
    "size": 0.006909,
    "timestamp": 1605560885027
  },
  "request_id": "d2d779df015fe2b7fbb8e58366610ef7",
  "status": "success",
  "symbol": "BTC-USD"
}
```

<h3 id="last-trade-for-a-crypto-pair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The last tick for this currency pair.|Inline|
|default|Default|Unexpected error|None|

<h3 id="last-trade-for-a-crypto-pair-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|last|object|false|none|Contains the requested trade data for the specified cryptocurrency pair.|
|» conditions|[integer(int32)]|false|none|A list of condition codes. See [Crypto Condition Codes](https://massive.com/docs/rest/crypto/market-operations/condition-codes) for what each code means.|
|» exchange|integer|true|none|The exchange that this crypto trade happened on.  <br>See <a href="https://massive.com/docs/rest/crypto/market-operations/exchanges">Exchanges</a> for a mapping of exchanges to IDs.|
|» price|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.|
|» size|number(double)|true|none|The size of a trade (also known as volume).|
|» timestamp|integer|true|none|The Unix millisecond timestamp.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|
|symbol|string|true|none|The symbol pair that was evaluated from the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-fxlastquote">fx:last:quote</h1>

## Last Quote for a Currency Pair

<a id="opIdLastQuoteCurrencies"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/last_quote/currencies/AUD/USD?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/last_quote/currencies/{from}/{to}`

Get the last quote tick for a forex currency pair.

<h3 id="last-quote-for-a-currency-pair-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|path|string|true|The "from" symbol of the pair.|
|to|path|string|true|The "to" symbol of the pair.|

> Example responses

> 200 Response

```json
{
  "last": {
    "ask": 0.73124,
    "bid": 0.73122,
    "exchange": 48,
    "timestamp": 1605557756000
  },
  "request_id": "a73a29dbcab4613eeaf48583d3baacf0",
  "status": "success",
  "symbol": "AUD/USD"
}
```

<h3 id="last-quote-for-a-currency-pair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The last quote tick for this currency pair.|Inline|
|default|Default|Unexpected error|None|

<h3 id="last-quote-for-a-currency-pair-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|last|object|false|none|Contains the requested quote data for the specified forex currency pair.|
|» ask|number(double)|true|none|The ask price.|
|» bid|number(double)|true|none|The bid price.|
|» exchange|integer|true|none|The exchange ID. See <a href="https://massive.com/docs/rest/forex/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» timestamp|integer|true|none|The Unix millisecond timestamp.|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|
|symbol|string|true|none|The symbol pair that was evaluated from the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-referencestocksmarket">reference:stocks:market</h1>

## Market Status

<a id="opIdGetMarketStatus"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/marketstatus/now?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/marketstatus/now`

Get the current trading status of the exchanges and overall financial markets.

> Example responses

> 200 Response

```json
{
  "afterHours": true,
  "currencies": {
    "crypto": "open",
    "fx": "open"
  },
  "earlyHours": false,
  "exchanges": {
    "nasdaq": "extended-hours",
    "nyse": "extended-hours",
    "otc": "closed"
  },
  "market": "extended-hours",
  "serverTime": "2020-11-10T17:37:37-05:00"
}
```

<h3 id="market-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="market-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|afterHours|boolean|false|none|Whether or not the market is in post-market hours.|
|currencies|object|false|none|Contains the status of various currency markets.|
|» crypto|string|false|none|The status of the crypto market.|
|» fx|string|false|none|The status of the forex market.|
|earlyHours|boolean|false|none|Whether or not the market is in pre-market hours.|
|exchanges|object|false|none|Contains the status of different US stock exchanges (e.g., Nasdaq, NYSE).|
|» nasdaq|string|false|none|The status of the Nasdaq market.|
|» nyse|string|false|none|The status of the NYSE market.|
|» otc|string|false|none|The status of the OTC market.|
|indicesGroups|object|false|none|Contains the status of various index groups (e.g., MSCI, FTSE Russell).|
|» cccy|string|false|none|The status of Cboe Streaming Market Indices Cryptocurrency ("CCCY") indices trading hours.|
|» cgi|string|false|none|The status of Cboe Global Indices ("CGI") trading hours.|
|» dow_jones|string|false|none|The status of Dow Jones indices trading hours|
|» ftse_russell|string|false|none|The status of Financial Times Stock Exchange Group ("FTSE") Russell indices trading hours.|
|» msci|string|false|none|The status of Morgan Stanley Capital International ("MSCI") indices trading hours.|
|» mstar|string|false|none|The status of Morningstar ("MSTAR") indices trading hours.|
|» mstarc|string|false|none|The status of Morningstar Customer ("MSTARC") indices trading hours.|
|» nasdaq|string|false|none|The status of National Association of Securities Dealers Automated Quotations ("Nasdaq") indices trading hours.|
|» s_and_p|string|false|none|The status of Standard & Poor's ("S&P") indices trading hours.|
|» societe_generale|string|false|none|The status of Societe Generale indices trading hours.|
|market|string|false|none|The status of the market as a whole.|
|serverTime|string|false|none|The current time of the server, returned as a date-time in RFC3339 format.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Market Holidays

<a id="opIdGetMarketHolidays"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/marketstatus/upcoming?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/marketstatus/upcoming`

Get upcoming market holidays and their open/close times.

> Example responses

> 200 Response

```json
[
  {
    "date": "2020-11-26",
    "exchange": "NYSE",
    "name": "Thanksgiving",
    "status": "closed"
  },
  {
    "date": "2020-11-26",
    "exchange": "NASDAQ",
    "name": "Thanksgiving",
    "status": "closed"
  },
  {
    "date": "2020-11-26",
    "exchange": "OTC",
    "name": "Thanksgiving",
    "status": "closed"
  },
  {
    "close": "2020-11-27T18:00:00.000Z",
    "date": "2020-11-27",
    "exchange": "NASDAQ",
    "name": "Thanksgiving",
    "open": "2020-11-27T14:30:00.000Z",
    "status": "early-close"
  },
  {
    "close": "2020-11-27T18:00:00.000Z",
    "date": "2020-11-27",
    "exchange": "NYSE",
    "name": "Thanksgiving",
    "open": "2020-11-27T14:30:00.000Z",
    "status": "early-close"
  }
]
```

<h3 id="market-holidays-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="market-holidays-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» close|string|false|none|The market close time on the holiday (if it's not closed).|
|» date|string|false|none|The date of the holiday.|
|» exchange|string|false|none|Which market the record is for.|
|» name|string|false|none|The name of the holiday.|
|» open|string|false|none|The market open time on the holiday (if it's not closed).|
|» status|string|false|none|The status of the market on the holiday.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-cryptoopen-close">crypto:open-close</h1>

## Daily Open/Close

<a id="opIdGetCryptoOpenClose"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/open-close/crypto/BTC/USD/2023-01-09?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/open-close/crypto/{from}/{to}/{date}`

Get the open, close prices of a cryptocurrency symbol on a certain day.


<h3 id="daily-openclose-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|path|string|true|The "from" symbol of the pair.|
|to|path|string|true|The "to" symbol of the pair.|
|date|path|string(date)|true|The date of the requested open/close in the format YYYY-MM-DD.|
|adjusted|query|boolean|false|Whether or not the results are adjusted for splits.  By default, results are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.<br>|

> Example responses

> 200 Response

```json
{
  "close": 11050.64,
  "closingTrades": [
    {
      "c": [
        2
      ],
      "i": "973323250",
      "p": 11050.64,
      "s": 0.006128,
      "t": 1602287999795,
      "x": 4
    },
    {
      "c": [
        1
      ],
      "i": "105717893",
      "p": 11049.4,
      "s": 0.014,
      "t": 1602287999659,
      "x": 17
    }
  ],
  "day": "2020-10-09T00:00:00.000Z",
  "isUTC": true,
  "open": 10932.44,
  "openTrades": [
    {
      "c": [
        2
      ],
      "i": "511235746",
      "p": 10932.44,
      "s": 0.002,
      "t": 1602201600056,
      "x": 1
    },
    {
      "c": [
        2
      ],
      "i": "511235751",
      "p": 10923.76,
      "s": 0.02,
      "t": 1602201600141,
      "x": 4
    }
  ],
  "symbol": "BTC-USD"
}
```

<h3 id="daily-openclose-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The open/close of this symbol.|Inline|
|default|Default|Unexpected error|None|

<h3 id="daily-openclose-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|close|number(double)|true|none|The close price for the symbol in the given time period.|
|closingTrades|[object]|true|none|An array of results containing the requested data.|
|» c|[integer]|true|none|A list of condition codes. See [Crypto Condition Codes](https://massive.com/docs/rest/crypto/market-operations/condition-codes) for what each code means.|
|» i|string|true|none|The Trade ID which uniquely identifies a trade. These are unique per<br>combination of ticker, exchange, and TRF. For example: A trade for AAPL<br>executed on NYSE and a trade for AAPL executed on NASDAQ could potentially<br>have the same Trade ID.<br>|
|» p|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.<br>|
|» s|number(double)|true|none|The size of a trade (also known as volume).<br>|
|» t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» x|integer|true|none|The exchange that this crypto trade happened on.  <br>See <a href="https://massive.com/docs/rest/crypto/market-operations/exchanges">Exchanges</a> for a mapping of exchanges to IDs.<br>|
|day|string(date)|true|none|The date requested.|
|isUTC|boolean|true|none|Whether or not the timestamps are in UTC timezone.|
|open|number(double)|true|none|The open price for the symbol in the given time period.|
|openTrades|[object]|true|none|An array of results containing the requested data.|
|» c|[integer]|true|none|A list of condition codes. See [Crypto Condition Codes](https://massive.com/docs/rest/crypto/market-operations/condition-codes) for what each code means.|
|» i|string|true|none|The Trade ID which uniquely identifies a trade. These are unique per<br>combination of ticker, exchange, and TRF. For example: A trade for AAPL<br>executed on NYSE and a trade for AAPL executed on NASDAQ could potentially<br>have the same Trade ID.<br>|
|» p|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.<br>|
|» s|number(double)|true|none|The size of a trade (also known as volume).<br>|
|» t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» x|integer|true|none|The exchange that this crypto trade happened on.  <br>See <a href="https://massive.com/docs/rest/crypto/market-operations/exchanges">Exchanges</a> for a mapping of exchanges to IDs.<br>|
|symbol|string|true|none|The symbol pair that was evaluated from the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-stocksopen-close">stocks:open-close</h1>

## Daily Open/Close

<a id="opIdGetIndicesOpenClose"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/open-close/I%3ANDX/2023-03-10?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/open-close/{indicesTicker}/{date}`

Get the open, close and afterhours values of a index symbol on a certain date.


<h3 id="daily-openclose-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indicesTicker|path|string|true|The ticker symbol of Index.|
|date|path|string|true|The date of the requested open/close in the format YYYY-MM-DD.|

> Example responses

> 200 Response

```json
{
  "afterHours": 11830.43006295237,
  "close": 11830.28178808306,
  "from": "2023-03-10T00:00:00.000Z",
  "high": 12069.62262033557,
  "low": 11789.85923449393,
  "open": 12001.69552583921,
  "preMarket": 12001.69552583921,
  "status": "OK",
  "symbol": "I:NDX"
}
```

<h3 id="daily-openclose-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The open/close of this stock symbol.|Inline|
|default|Default|Unexpected error|None|

<h3 id="daily-openclose-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|afterHours|number(double)|false|none|The close value of the ticker symbol in after hours trading.|
|close|number(double)|true|none|The close value for the symbol in the given time period.|
|from|string(date)|true|none|The requested date.|
|high|number(double)|true|none|The highest value for the symbol in the given time period.|
|low|number(double)|true|none|The lowest value for the symbol in the given time period.|
|open|number(double)|true|none|The open value for the symbol in the given time period.|
|preMarket|number(double)|false|none|The open value of the ticker symbol in pre-market trading.|
|status|string|true|none|The status of this request's response.|
|symbol|string|true|none|The exchange symbol that this item is traded under.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Daily Open/Close

<a id="opIdGetStocksOpenClose"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/open-close/AAPL/2023-01-09?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/open-close/{stocksTicker}/{date}`

Get the open, close and afterhours prices of a stock symbol on a certain date.


<h3 id="daily-openclose-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stocksTicker|path|string|true|Specify a case-sensitive ticker symbol. For example, AAPL represents Apple Inc.|
|date|path|string(date)|true|The date of the requested open/close in the format YYYY-MM-DD.|
|adjusted|query|boolean|false|Whether or not the results are adjusted for splits.  By default, results are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.<br>|

> Example responses

> 200 Response

```json
{
  "afterHours": 322.1,
  "close": 325.12,
  "from": "2023-01-09",
  "high": 326.2,
  "low": 322.3,
  "open": 324.66,
  "preMarket": 324.5,
  "status": "OK",
  "symbol": "AAPL",
  "volume": 26122646
}
```

<h3 id="daily-openclose-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The open/close of this stock symbol.|Inline|
|default|Default|Unexpected error|None|

<h3 id="daily-openclose-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|afterHours|number(double)|false|none|The close price of the ticker symbol in after hours trading.|
|close|number(double)|true|none|The close price for the symbol in the given time period.|
|from|string(date)|true|none|The requested date.|
|high|number(double)|true|none|The highest price for the symbol in the given time period.|
|low|number(double)|true|none|The lowest price for the symbol in the given time period.|
|open|number(double)|true|none|The open price for the symbol in the given time period.|
|otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|preMarket|number(double)|false|none|The open price of the ticker symbol in pre-market trading.|
|status|string|true|none|The status of this request's response.|
|symbol|string|true|none|The exchange symbol that this item is traded under.|
|volume|number(double)|true|none|The trading volume of the symbol in the given time period.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-optionsopen-close">options:open-close</h1>

## Daily Open/Close

<a id="opIdGetOptionsOpenClose"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/open-close/O%3ASPY251219C00650000/2023-01-09?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/open-close/{optionsTicker}/{date}`

Get the open, close and afterhours prices of an options contract on a certain date.


<h3 id="daily-openclose-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|optionsTicker|path|string|true|The ticker symbol of the options contract.|
|date|path|string(date)|true|The date of the requested open/close in the format YYYY-MM-DD.|
|adjusted|query|boolean|false|Whether or not the results are adjusted for splits.  By default, results are adjusted.<br>Set this to false to get results that are NOT adjusted for splits.<br>|

> Example responses

> 200 Response

```json
{
  "afterHours": 26.35,
  "close": 26.35,
  "from": "2023-01-09",
  "high": 26.35,
  "low": 25,
  "open": 25,
  "preMarket": 25,
  "status": "OK",
  "symbol": "O:TSLA210903C00700000",
  "volume": 2
}
```

<h3 id="daily-openclose-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The open/close of this stock symbol.|Inline|
|default|Default|Unexpected error|None|

<h3 id="daily-openclose-3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|afterHours|number(double)|false|none|The close price of the ticker symbol in after hours trading.|
|close|number(double)|true|none|The close price for the symbol in the given time period.|
|from|string(date)|true|none|The requested date.|
|high|number(double)|true|none|The highest price for the symbol in the given time period.|
|low|number(double)|true|none|The lowest price for the symbol in the given time period.|
|open|number(double)|true|none|The open price for the symbol in the given time period.|
|otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|preMarket|number(double)|false|none|The open price of the ticker symbol in pre-market trading.|
|status|string|true|none|The status of this request's response.|
|symbol|string|true|none|The exchange symbol that this item is traded under.|
|volume|number(double)|true|none|The trading volume of the symbol in the given time period.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-referencesecfilings">reference:sec:filings</h1>

## SEC Filings

<a id="opIdListFilings"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/reference/sec/filings?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/reference/sec/filings`

List filings

<h3 id="sec-filings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|Query by filing type.|
|filing_date|query|string|false|Query by filing date.|
|period_of_report_date|query|string|false|Query by period of report.|
|has_xbrl|query|boolean \| null|false|If true, query only for filings with an XBRL instance file.<br>If false, query for filings without an XBRL instance file.<br>If this parameter is not provided, query for filings with or without XBRL instance files.|
|entities.company_data.name|query|string|false|Query by entity company name.|
|entities.company_data.cik|query|string|false|Query by entity company CIK.|
|entities.company_data.ticker|query|string|false|Query by entity company ticker.|
|entities.company_data.sic|query|string|false|Query by entity company SIC.|
|filing_date.gte|query|string|false|Search by filing_date.|
|filing_date.gt|query|string|false|Search by filing_date.|
|filing_date.lte|query|string|false|Search by filing_date.|
|filing_date.lt|query|string|false|Search by filing_date.|
|period_of_report_date.gte|query|string|false|Search by period_of_report_date.|
|period_of_report_date.gt|query|string|false|Search by period_of_report_date.|
|period_of_report_date.lte|query|string|false|Search by period_of_report_date.|
|period_of_report_date.lt|query|string|false|Search by period_of_report_date.|
|entities.company_data.name.search|query|string|false|Search by entities.company_data.name.|
|order|query|string|false|Order results based on the `sort` field.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 1000.|
|sort|query|string|false|Sort field used for ordering.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|10-K|
|type|10-Q|
|order|asc|
|order|desc|
|sort|filing_date|
|sort|period_of_report_date|

> Example responses

> 200 Response

```json
{}
```

<h3 id="sec-filings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|FIXME|Inline|

<h3 id="sec-filings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next_url|string|false|none|none|
|request_id|string|true|none|none|
|results|[object]|true|none|none|
|» acceptance_datetime|string|false|none|The datetime when the filing was accepted by EDGAR in EST (format: YYYYMMDDHHMMSS)|
|» accession_number|string|true|none|Filing Accession Number|
|» entities|[object]|true|none|Entities related to the filing (e.g. the document filers).|
|» » company_data|object|false|none|none|
|» » » cik|string|true|none|Central Index Key (CIK) Number|
|» » » name|string|true|none|none|
|» » » sic|string|true|none|Standard Industrial Classification (SIC)|
|» » » ticker|string|false|none|Ticker|
|» » relation|string|true|none|Relationship of this entity to the filing.|
|» files_count|integer(int64)|true|none|The number of files associated with the filing.|
|» filing_date|string|true|none|The date when the filing was filed in YYYYMMDD format.|
|» id|string|true|none|Unique identifier for the filing.|
|» period_of_report_date|string|true|none|The period of report for the filing in YYYYMMDD format.|
|» source_url|string(uri)|true|none|The source URL is a link back to the upstream source for this filing<br>document.|
|» type|string|true|none|Filing Type|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » relation|filer|
|» type|10-K|
|» type|10-Q|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-referencesecfiling">reference:sec:filing</h1>

## SEC Filing

<a id="opIdGetFiling"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/reference/sec/filings/string?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/reference/sec/filings/{filing_id}`

Get filing

<h3 id="sec-filing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filing_id|path|string|false|Select by filing id.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="sec-filing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|FIXME|Inline|

<h3 id="sec-filing-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|object|false|none|none|
|» acceptance_datetime|string|false|none|The datetime when the filing was accepted by EDGAR in EST (format: YYYYMMDDHHMMSS)|
|» accession_number|string|true|none|Filing Accession Number|
|» entities|[object]|true|none|Entities related to the filing (e.g. the document filers).|
|» » company_data|object|false|none|none|
|» » » cik|string|true|none|Central Index Key (CIK) Number|
|» » » name|string|true|none|none|
|» » » sic|string|true|none|Standard Industrial Classification (SIC)|
|» » » ticker|string|false|none|Ticker|
|» » relation|string|true|none|Relationship of this entity to the filing.|
|» files_count|integer(int64)|true|none|The number of files associated with the filing.|
|» filing_date|string|true|none|The date when the filing was filed in YYYYMMDD format.|
|» id|string|true|none|Unique identifier for the filing.|
|» period_of_report_date|string|true|none|The period of report for the filing in YYYYMMDD format.|
|» source_url|string(uri)|true|none|The source URL is a link back to the upstream source for this filing<br>document.|
|» type|string|true|none|Filing Type|

#### Enumerated Values

|Property|Value|
|---|---|
|» » relation|filer|
|» type|10-K|
|» type|10-Q|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-referencesecfilingfiles">reference:sec:filing:files</h1>

## SEC Filing Files

<a id="opIdListFilingFiles"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/reference/sec/filings/string/files?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/reference/sec/filings/{filing_id}/files`

List filing files

<h3 id="sec-filing-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filing_id|path|string|false|Select by filing id.|
|sequence|query|integer(int64)|false|Query by file sequence number.|
|filename|query|string|false|Query by file name.|
|sequence.gte|query|integer(int64)|false|Search by sequence.|
|sequence.gt|query|integer(int64)|false|Search by sequence.|
|sequence.lte|query|integer(int64)|false|Search by sequence.|
|sequence.lt|query|integer(int64)|false|Search by sequence.|
|filename.gte|query|string|false|Search by filename.|
|filename.gt|query|string|false|Search by filename.|
|filename.lte|query|string|false|Search by filename.|
|filename.lt|query|string|false|Search by filename.|
|order|query|string|false|Order results based on the `sort` field.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 1000.|
|sort|query|string|false|Sort field used for ordering.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|
|sort|sequence|
|sort|filename|

> Example responses

> 200 Response

```json
{}
```

<h3 id="sec-filing-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|FIXME|Inline|

<h3 id="sec-filing-files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next_url|string|false|none|none|
|request_id|string|true|none|none|
|results|[object]|true|none|none|
|» description|string|true|none|A description for the contents of the file.|
|» filename|string|false|none|The name for the file.|
|» id|string|true|none|An identifier unique to the filing for this data entry.|
|» sequence|integer(int64)|true|none|File Sequence Number|
|» size_bytes|integer(int64)|true|none|The size of the file in bytes.|
|» source_url|string(uri)|true|none|The source URL is a link back to the upstream source for this file.|
|» type|string|true|none|The type of document contained in the file.|
|status|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-referencesecfilingfile">reference:sec:filing:file</h1>

## SEC Filing File

<a id="opIdGetFilingFile"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/reference/sec/filings/string/files/1?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/reference/sec/filings/{filing_id}/files/{file_id}`

Get filing file

<h3 id="sec-filing-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filing_id|path|string|false|Select by filing id.|
|file_id|path|string|false|Select by file id.|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "filename": "string",
  "id": "1",
  "sequence": 0,
  "size_bytes": 0,
  "source_url": "http://example.com",
  "type": "string"
}
```

<h3 id="sec-filing-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The file data.|Inline|

<h3 id="sec-filing-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|A description for the contents of the file.|
|filename|string|false|none|The name for the file.|
|id|string|true|none|An identifier unique to the filing for this data entry.|
|sequence|integer(int64)|true|none|File Sequence Number|
|size_bytes|integer(int64)|true|none|The size of the file in bytes.|
|source_url|string(uri)|true|none|The source URL is a link back to the upstream source for this file.|
|type|string|true|none|The type of document contained in the file.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-referencerelatedcompanies">reference:related:companies</h1>

## Related Companies

<a id="opIdGetRelatedCompanies"></a>

> Code samples

```bash
curl "https://api.polygon.io/v1/related-companies/AAPL?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v1/related-companies/{ticker}`

Get a list of tickers related to the queried ticker based on News and Returns data.

<h3 id="related-companies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|path|string|true|The ticker symbol to search.|

> Example responses

> 200 Response

```json
{
  "request_id": "31d59dda-80e5-4721-8496-d0d32a654afe",
  "results": [
    {
      "ticker": "MSFT"
    },
    {
      "ticker": "GOOGL"
    },
    {
      "ticker": "AMZN"
    },
    {
      "ticker": "FB"
    },
    {
      "ticker": "TSLA"
    },
    {
      "ticker": "NVDA"
    },
    {
      "ticker": "INTC"
    },
    {
      "ticker": "ADBE"
    },
    {
      "ticker": "NFLX"
    },
    {
      "ticker": "PYPL"
    }
  ],
  "status": "OK",
  "stock_symbol": "AAPL"
}
```

<h3 id="related-companies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Related Companies.|Inline|
|401|Unauthorized|Unauthorized - Check our API Key and account status|None|

<h3 id="related-companies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string|false|none|A request id assigned by the server.|
|results|[object]|false|none|An array of results containing the requested data.|
|» ticker|string|true|none|A ticker related to the requested ticker.|
|status|string|false|none|The status of this request's response.|
|ticker|string|false|none|The ticker being queried.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-stockslastquote">stocks:last:quote</h1>

## Last Quote

<a id="opIdLastQuote"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/last/nbbo/AAPL?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/last/nbbo/{stocksTicker}`

Get the most recent NBBO (Quote) tick for a given stock.

<h3 id="last-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stocksTicker|path|string|true|Specify a case-sensitive ticker symbol. For example, AAPL represents Apple Inc.|

> Example responses

> 200 Response

```json
{
  "request_id": "b84e24636301f19f88e0dfbf9a45ed5c",
  "results": {
    "P": 127.98,
    "S": 7,
    "T": "AAPL",
    "X": 19,
    "p": 127.96,
    "q": 83480742,
    "s": 1,
    "t": 1617827221349730300,
    "x": 11,
    "y": 1617827221349366000,
    "z": 3
  },
  "status": "OK"
}
```

<h3 id="last-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The last NBBO tick for this stock.|Inline|
|401|Unauthorized|Unauthorized - Check our API Key and account status|None|
|404|Not Found|The specified resource was not found|None|

<h3 id="last-quote-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|false|none|none|
|» P|number(double)|false|none|The ask price.|
|» S|integer|false|none|The ask size. This represents the number of shares sellers are offering at the given ask price.|
|» T|string|true|none|The exchange symbol that this item is traded under.|
|» X|integer|false|none|The exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» c|[integer(int32)]|false|none|A list of condition codes. See [Stocks Condition Codes](https://massive.com/docs/rest/stocks/market-operations/condition-codes) for what each code means.|
|» f|integer|false|none|The nanosecond accuracy TRF(Trade Reporting Facility) Unix Timestamp. This is the timestamp of when the trade reporting facility received this message.|
|» i|[integer(int32)]|false|none|A list of indicator codes. See the [Conditions and Indicators](https://massive.com/glossary/conditions-indicators) glossary for what each code means.|
|» p|number(double)|false|none|The bid price.|
|» q|integer(int64)|true|none|The sequence number represents the sequence in which message events happened.<br>These are increasing and unique per ticker symbol, but will not always be<br>sequential (e.g., 1, 2, 6, 9, 10, 11).|
|» s|integer|false|none|The bid size. This represents the number of shares buyers are bidding for at the given bid price.|
|» t|integer|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this message from the exchange which produced it.|
|» x|integer|false|none|The exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» y|integer|true|none|The nanosecond accuracy Participant/Exchange Unix Timestamp. This is the timestamp of when the quote was actually generated at the exchange.|
|» z|integer|false|none|There are 3 tapes which define which exchange the ticker is listed on. These are integers in our objects which represent the letter of the alphabet. Eg: 1 = A, 2 = B, 3 = C.<br>* Tape A is NYSE listed securities<br>* Tape B is NYSE ARCA / NYSE American<br>* Tape C is NASDAQ|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-optionslasttrade">options:last:trade</h1>

## Last Trade

<a id="opIdLastTradeOptions"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/last/trade/O%3ATSLA210903C00700000?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/last/trade/{optionsTicker}`

Get the most recent trade for a given options contract.

<h3 id="last-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|optionsTicker|path|string|true|The ticker symbol of the options contract.|

> Example responses

> 200 Response

```json
{
  "request_id": "f05562305bd26ced64b98ed68b3c5d96",
  "results": {
    "T": "O:TSLA210903C00700000",
    "c": [
      227
    ],
    "f": 1617901342969796400,
    "i": "",
    "p": 115.55,
    "q": 1325541950,
    "r": 202,
    "s": 25,
    "t": 1617901342969834000,
    "x": 312,
    "y": 1617901342969834000
  },
  "status": "OK"
}
```

<h3 id="last-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The last trade for this options contract.|Inline|
|401|Unauthorized|Unauthorized - Check our API Key and account status|None|
|404|Not Found|The specified resource was not found|None|

<h3 id="last-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|false|none|none|
|» T|string|true|none|The exchange symbol that this item is traded under.|
|» c|[integer(int32)]|false|none|A list of condition codes. See [Options Condition Codes](https://massive.com/docs/rest/options/market-operations/condition-codes) for what each code means.|
|» e|integer|false|none|The trade correction indicator.|
|» f|integer|false|none|The nanosecond accuracy TRF(Trade Reporting Facility) Unix Timestamp. This is the timestamp of when the trade reporting facility received this message.|
|» i|string|true|none|The Trade ID which uniquely identifies a trade. These are unique per<br>combination of ticker, exchange, and TRF. For example: A trade for AAPL<br>executed on NYSE and a trade for AAPL executed on NASDAQ could potentially<br>have the same Trade ID.|
|» p|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.|
|» q|integer(int64)|true|none|The sequence number represents the sequence in which message events happened.<br>These are increasing and unique per ticker symbol, but will not always be<br>sequential (e.g., 1, 2, 6, 9, 10, 11).|
|» r|integer|false|none|The ID for the Trade Reporting Facility where the trade took place.|
|» s|number(double)|false|none|The size of a trade (also known as volume).|
|» t|integer|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this message from the exchange which produced it.|
|» x|integer|true|none|The exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» y|integer|true|none|The nanosecond accuracy Participant/Exchange Unix Timestamp. This is the timestamp of when the quote was actually generated at the exchange.|
|» z|integer|false|none|There are 3 tapes which define which exchange the ticker is listed on. These are integers in our objects which represent the letter of the alphabet. Eg: 1 = A, 2 = B, 3 = C.<br>* Tape A is NYSE listed securities<br>* Tape B is NYSE ARCA / NYSE American<br>* Tape C is NASDAQ|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-stockslasttrade">stocks:last:trade</h1>

## Last Trade

<a id="opIdLastTrade"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/last/trade/AAPL?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/last/trade/{stocksTicker}`

Get the most recent trade for a given stock.

<h3 id="last-trade-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stocksTicker|path|string|true|Specify a case-sensitive ticker symbol. For example, AAPL represents Apple Inc.|

> Example responses

> 200 Response

```json
{
  "request_id": "f05562305bd26ced64b98ed68b3c5d96",
  "results": {
    "T": "AAPL",
    "c": [
      37
    ],
    "ds": "25.0",
    "f": 1617901342969796400,
    "i": "118749",
    "p": 129.8473,
    "q": 3135876,
    "r": 202,
    "s": 25,
    "t": 1617901342969834000,
    "x": 4,
    "y": 1617901342968000000,
    "z": 3
  },
  "status": "OK"
}
```

<h3 id="last-trade-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The last trade for this stock.|Inline|
|401|Unauthorized|Unauthorized - Check our API Key and account status|None|
|404|Not Found|The specified resource was not found|None|

<h3 id="last-trade-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|false|none|none|
|» T|string|true|none|The exchange symbol that this item is traded under.|
|» c|[integer(int32)]|false|none|A list of condition codes. See [Stocks Condition Codes](https://massive.com/docs/rest/stocks/market-operations/condition-codes) for what each code means.|
|» ds|string|true|none|The size of the trade including the fractional component. This is represented as a decimal string.|
|» e|integer|false|none|The trade correction indicator.|
|» f|integer|false|none|The nanosecond accuracy TRF(Trade Reporting Facility) Unix Timestamp. This is the timestamp of when the trade reporting facility received this message.|
|» i|string|true|none|The Trade ID which uniquely identifies a trade. These are unique per<br>combination of ticker, exchange, and TRF. For example: A trade for AAPL<br>executed on NYSE and a trade for AAPL executed on NASDAQ could potentially<br>have the same Trade ID.|
|» p|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.|
|» q|integer(int64)|true|none|The sequence number represents the sequence in which message events happened.<br>These are increasing and unique per ticker symbol, but will not always be<br>sequential (e.g., 1, 2, 6, 9, 10, 11).|
|» r|integer|false|none|The ID for the Trade Reporting Facility where the trade took place.|
|» s|number(double)|false|none|The size of a trade (also known as volume).|
|» t|integer|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this message from the exchange which produced it.|
|» x|integer|true|none|The exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» y|integer|true|none|The nanosecond accuracy Participant/Exchange Unix Timestamp. This is the timestamp of when the quote was actually generated at the exchange.|
|» z|integer|false|none|There are 3 tapes which define which exchange the ticker is listed on. These are integers in our objects which represent the letter of the alphabet. Eg: 1 = A, 2 = B, 3 = C.<br>* Tape A is NYSE listed securities<br>* Tape B is NYSE ARCA / NYSE American<br>* Tape C is NASDAQ|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-referencenews">reference:news</h1>

## Ticker News

<a id="opIdListNews"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/reference/news?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/reference/news`

Get the most recent news articles relating to a stock ticker symbol, including a summary of the article and a link to the original source.

<h3 id="ticker-news-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|query|string|false|Specify a case-sensitive ticker symbol. For example, AAPL represents Apple Inc.|
|published_utc|query|string(date-time) \| string(date)|false|Return results published on, before, or after this date.|
|ticker.gte|query|string|false|Search by ticker.|
|ticker.gt|query|string|false|Search by ticker.|
|ticker.lte|query|string|false|Search by ticker.|
|ticker.lt|query|string|false|Search by ticker.|
|published_utc.gte|query|string(date-time) \| string(date)|false|Search by published_utc.|
|published_utc.gt|query|string(date-time) \| string(date)|false|Search by published_utc.|
|published_utc.lte|query|string(date-time) \| string(date)|false|Search by published_utc.|
|published_utc.lt|query|string(date-time) \| string(date)|false|Search by published_utc.|
|order|query|string|false|Order results based on the `sort` field.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 1000.|
|sort|query|string|false|Sort field used for ordering.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|
|sort|published_utc|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "next_url": "https://api.polygon.io:443/v2/reference/news?cursor=eyJsaW1pdCI6MSwic29ydCI6InB1Ymxpc2hlZF91dGMiLCJvcmRlciI6ImFzY2VuZGluZyIsInRpY2tlciI6e30sInB1Ymxpc2hlZF91dGMiOnsiZ3RlIjoiMjAyMS0wNC0yNiJ9LCJzZWFyY2hfYWZ0ZXIiOlsxNjE5NDA0Mzk3MDAwLG51bGxdfQ",
  "request_id": "831afdb0b8078549fed053476984947a",
  "results": [
    {
      "amp_url": "https://m.uk.investing.com/news/stock-market-news/markets-are-underestimating-fed-cuts-ubs-3559968?ampMode=1",
      "article_url": "https://uk.investing.com/news/stock-market-news/markets-are-underestimating-fed-cuts-ubs-3559968",
      "author": "Sam Boughedda",
      "description": "UBS analysts warn that markets are underestimating the extent of future interest rate cuts by the Federal Reserve, as the weakening economy is likely to justify more cuts than currently anticipated.",
      "id": "8ec638777ca03b553ae516761c2a22ba2fdd2f37befae3ab6fdab74e9e5193eb",
      "image_url": "https://i-invdn-com.investing.com/news/LYNXNPEC4I0AL_L.jpg",
      "insights": [
        {
          "sentiment": "positive",
          "sentiment_reasoning": "UBS analysts are providing a bullish outlook on the extent of future Federal Reserve rate cuts, suggesting that markets are underestimating the number of cuts that will occur.",
          "ticker": "UBS"
        }
      ],
      "keywords": [
        "Federal Reserve",
        "interest rates",
        "economic data"
      ],
      "published_utc": "2024-06-24T18:33:53Z",
      "publisher": {
        "favicon_url": "https://s3.polygon.io/public/assets/news/favicons/investing.ico",
        "homepage_url": "https://www.investing.com/",
        "logo_url": "https://s3.polygon.io/public/assets/news/logos/investing.png",
        "name": "Investing.com"
      },
      "tickers": [
        "UBS"
      ],
      "title": "Markets are underestimating Fed cuts: UBS By Investing.com - Investing.com UK"
    }
  ],
  "status": "OK"
}
```

<h3 id="ticker-news-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of news articles.|Inline|
|401|Unauthorized|Unauthorized - Check our API Key and account status|None|
|404|Not Found|The specified resource was not found|None|

<h3 id="ticker-news-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The total number of results for this request.|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|false|none|A request id assigned by the server.|
|results|[object]|false|none|An array of results containing the requested data.|
|» amp_url|string|false|none|The mobile friendly Accelerated Mobile Page (AMP) URL.|
|» article_url|string|true|none|A link to the news article.|
|» author|string|true|none|The article's author.|
|» description|string|false|none|A description of the article.|
|» id|string|true|none|Unique identifier for the article.|
|» image_url|string|false|none|The article's image URL.|
|» insights|[object]|false|none|The insights related to the article.|
|» » sentiment|string|true|none|The sentiment of the insight.|
|» » sentiment_reasoning|string|true|none|The reasoning behind the sentiment.|
|» » ticker|string|true|none|The ticker symbol associated with the insight.|
|» keywords|[string]|false|none|The keywords associated with the article (which will vary depending on<br>the publishing source).|
|» published_utc|string(date-time)|true|none|The UTC date and time when the article was published, formatted in RFC3339 standard (e.g. YYYY-MM-DDTHH:MM:SSZ).|
|» publisher|object|true|none|Details the source of the news article, including the publisher's name, logo, and homepage URLs. This information helps users identify and access the original source of news content.|
|» » favicon_url|string|false|none|The publisher's homepage favicon URL.|
|» » homepage_url|string|true|none|The publisher's homepage URL.|
|» » logo_url|string|true|none|The publisher's logo URL.|
|» » name|string|true|none|The publisher's name.|
|» tickers|[string]|true|none|The ticker symbols associated with the article.|
|» title|string|true|none|The title of the news article.|
|status|string|false|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » sentiment|positive|
|» » sentiment|neutral|
|» » sentiment|negative|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-cryptosnapshot">crypto:snapshot</h1>

## All Tickers

<a id="opIdGetCryptoSnapshotTickers"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/snapshot/locale/global/markets/crypto/tickers?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/snapshot/locale/global/markets/crypto/tickers`

Get the current minute, day, and previous day’s aggregate, as well as the last trade and quote for all traded cryptocurrency symbols.
<br />
<br />
Note: Snapshot data is cleared at 12am EST and gets populated as data is received from the exchanges. This can happen as early as 4am EST.


<h3 id="all-tickers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tickers|query|[string]|false|A case-sensitive comma separated list of tickers to get snapshots for. For example, X:BTCUSD, X:ETHBTC, and X:BOBAUSD. Empty string defaults to querying all tickers.|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "tickers": [
    {
      "day": {
        "c": 0.296,
        "h": 0.59714,
        "l": 0.23706,
        "o": 0.28,
        "v": 4097699.5691991993,
        "vw": 0
      },
      "lastTrade": {
        "c": [
          1
        ],
        "i": 413131,
        "p": 0.293,
        "s": 13.6191,
        "t": 1605292686010,
        "x": 17
      },
      "min": {
        "c": 0.296,
        "h": 0.296,
        "l": 0.294,
        "n": 2,
        "o": 0.296,
        "t": 1684427880000,
        "v": 123.4866,
        "vw": 0
      },
      "prevDay": {
        "c": 0.281,
        "h": 0.59714,
        "l": 0.23706,
        "o": 0.27,
        "v": 6070178.786154971,
        "vw": 0.4076
      },
      "ticker": "X:FSNUSD",
      "todaysChange": 0.012,
      "todaysChangePerc": 4.270463,
      "updated": 1605330008999
    }
  ]
}
```

<h3 id="all-tickers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get current state for all tickers|Inline|
|default|Default|Unexpected error|None|

<h3 id="all-tickers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status of this request's response.|
|tickers|[object]|false|none|An array of snapshot data for the specified tickers.|
|» day|object|true|none|The most recent daily bar for this ticker.|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» fmv|number(double)|false|none|Fair market value is only available on Business plans. It is our proprietary algorithm to generate a real-time, accurate, fair market value of a tradable security. For more information, <a rel="nofollow" target="_blank" href="https://massive.com/contact">contact us</a>.|
|» lastTrade|object|true|none|The most recent trade for this ticker.|
|» » c|[integer]|true|none|A list of condition codes. See [Crypto Condition Codes](https://massive.com/docs/rest/crypto/market-operations/condition-codes) for what each code means.|
|» » i|string|true|none|The Trade ID which uniquely identifies a trade. These are unique per<br>combination of ticker, exchange, and TRF. For example: A trade for AAPL<br>executed on NYSE and a trade for AAPL executed on NASDAQ could potentially<br>have the same Trade ID.<br>|
|» » p|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.<br>|
|» » s|number|true|none|The size (volume) of the trade.|
|» » t|integer|true|none|The millisecond accuracy timestamp. This is the timestamp of when the trade was generated at the exchange.|
|» » x|integer|true|none|The exchange that this crypto trade happened on.  <br>See <a href="https://massive.com/docs/rest/crypto/market-operations/exchanges">Exchanges</a> for a mapping of exchanges to IDs.<br>|
|» min|object|true|none|The most recent minute bar for this ticker.|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » n|integer|true|none|The number of transactions in the aggregate window.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» prevDay|object|true|none|The previous day's bar for this ticker.|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» ticker|string|true|none|The exchange symbol that this item is traded under.|
|» todaysChange|number(double)|true|none|The value of the change from the previous day.|
|» todaysChangePerc|number(double)|true|none|The percentage change since the previous day.|
|» updated|integer|true|none|The last updated timestamp.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Ticker

<a id="opIdGetCryptoSnapshotTicker"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/snapshot/locale/global/markets/crypto/tickers/X%3ABTCUSD?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/snapshot/locale/global/markets/crypto/tickers/{ticker}`

Get the current minute, day, and previous day’s aggregate, as well as the last trade and quote for a single traded cryptocurrency symbol.
<br />
<br />
Note: Snapshot data is cleared at 12am EST and gets populated as data is received from the exchanges.


<h3 id="ticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|path|string|true|Ticker of the snapshot|

> Example responses

> 200 Response

```json
{
  "request_id": "ad92e92ce183112c593717f00dfebd2c",
  "status": "OK",
  "ticker": {
    "day": {
      "c": 16260.85,
      "h": 16428.4,
      "l": 15830.4,
      "o": 16418.07,
      "v": 105008.84231068,
      "vw": 0
    },
    "lastTrade": {
      "c": [
        2
      ],
      "i": "464569520",
      "p": 16242.31,
      "s": 0.001933,
      "t": 1605294230780,
      "x": 4
    },
    "min": {
      "c": 16235.1,
      "h": 16264.29,
      "l": 16129.3,
      "n": 558,
      "o": 16257.51,
      "t": 1684428960000,
      "v": 19.30791925,
      "vw": 0
    },
    "prevDay": {
      "c": 16399.24,
      "h": 16418.07,
      "l": 16399.24,
      "o": 16418.07,
      "v": 0.99167108,
      "vw": 16402.6893
    },
    "ticker": "X:BTCUSD",
    "todaysChange": -156.93,
    "todaysChangePerc": -0.956935,
    "updated": 1605330008999
  }
}
```

<h3 id="ticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get current state for a ticker|Inline|
|default|Default|Unexpected error|None|

<h3 id="ticker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status of this request's response.|
|request_id|string|true|none|A request id assigned by the server.|
|ticker|object|false|none|Contains the requested snapshot data for the specified ticker.|
|» day|object|true|none|The most recent daily bar for this ticker.|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» fmv|number(double)|false|none|Fair market value is only available on Business plans. It is our proprietary algorithm to generate a real-time, accurate, fair market value of a tradable security. For more information, <a rel="nofollow" target="_blank" href="https://massive.com/contact">contact us</a>.|
|» lastTrade|object|true|none|The most recent trade for this ticker.|
|» » c|[integer]|true|none|A list of condition codes. See [Crypto Condition Codes](https://massive.com/docs/rest/crypto/market-operations/condition-codes) for what each code means.|
|» » i|string|true|none|The Trade ID which uniquely identifies a trade. These are unique per<br>combination of ticker, exchange, and TRF. For example: A trade for AAPL<br>executed on NYSE and a trade for AAPL executed on NASDAQ could potentially<br>have the same Trade ID.<br>|
|» » p|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.<br>|
|» » s|number|true|none|The size (volume) of the trade.|
|» » t|integer|true|none|The millisecond accuracy timestamp. This is the timestamp of when the trade was generated at the exchange.|
|» » x|integer|true|none|The exchange that this crypto trade happened on.  <br>See <a href="https://massive.com/docs/rest/crypto/market-operations/exchanges">Exchanges</a> for a mapping of exchanges to IDs.<br>|
|» min|object|true|none|The most recent minute bar for this ticker.|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » n|integer|true|none|The number of transactions in the aggregate window.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» prevDay|object|true|none|The previous day's bar for this ticker.|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» ticker|string|true|none|The exchange symbol that this item is traded under.|
|» todaysChange|number(double)|true|none|The value of the change from the previous day.|
|» todaysChangePerc|number(double)|true|none|The percentage change since the previous day.|
|» updated|integer|true|none|The last updated timestamp.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Ticker Full Book (L2)

<a id="opIdDeprecatedGetCryptoSnapshotTickerBook"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/snapshot/locale/global/markets/crypto/tickers/X%3ABTCUSD/book?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/snapshot/locale/global/markets/crypto/tickers/{ticker}/book`

Get the current level 2 book of a single ticker. This is the combined book from all of the exchanges.
<br />
<br />
Note: Snapshot data is cleared at 12am EST and gets populated as data is received from the exchanges.


<h3 id="ticker-full-book-l2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|path|string|true|The cryptocurrency ticker.|

> Example responses

> 200 Response

```json
{
  "data": {
    "askCount": 593.1412981600005,
    "asks": [
      {
        "p": 11454,
        "x": {
          "2": 1
        }
      },
      {
        "p": 11455,
        "x": {
          "2": 1
        }
      }
    ],
    "bidCount": 694.951789670001,
    "bids": [
      {
        "p": 16303.17,
        "x": {
          "1": 2
        }
      },
      {
        "p": 16302.94,
        "x": {
          "1": 0.02859424,
          "6": 0.023455
        }
      }
    ],
    "spread": -4849.17,
    "ticker": "X:BTCUSD",
    "updated": 1605295074162
  },
  "status": "OK"
}
```

<h3 id="ticker-full-book-l2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get current level 2 book for a ticker|Inline|
|default|Default|Unexpected error|None|

<h3 id="ticker-full-book-l2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» askCount|number(double)|true|none|The combined total number of asks in the book.|
|» asks|[object]|true|none|none|
|» » p|number(double)|true|none|The price of this book level.|
|» » x|object|true|none|A map of the exchange ID to number of shares at this price level.<br><br /><br><br /><br>**Example:**<br><br /><br>`{<br>  "p": 16302.94,<br>  "x": {<br>    "1": 0.02859424,<br>    "6": 0.023455<br>  }<br>}`<br><br /><br><br /><br>In this example, exchange ID 1 has 0.02859424 shares available at $16,302.94,<br>and exchange ID 6 has 0.023455 shares at the same price level.<br>|
|» bidCount|number(double)|true|none|The combined total number of bids in the book.|
|» bids|[object]|true|none|none|
|» » p|number(double)|true|none|The price of this book level.|
|» » x|object|true|none|A map of the exchange ID to number of shares at this price level.<br><br /><br><br /><br>**Example:**<br><br /><br>`{<br>  "p": 16302.94,<br>  "x": {<br>    "1": 0.02859424,<br>    "6": 0.023455<br>  }<br>}`<br><br /><br><br /><br>In this example, exchange ID 1 has 0.02859424 shares available at $16,302.94,<br>and exchange ID 6 has 0.023455 shares at the same price level.<br>|
|» spread|number(double)|true|none|The difference between the best bid and the best ask price across exchanges.|
|» ticker|string|true|none|The exchange symbol that this item is traded under.|
|» updated|integer|true|none|The last updated timestamp.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Gainers/Losers

<a id="opIdGetCryptoSnapshotDirection"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/snapshot/locale/global/markets/crypto/gainers?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/snapshot/locale/global/markets/crypto/{direction}`

Get the current top 20 gainers or losers of the day in cryptocurrency markets.
<br />
<br />
Top gainers are those tickers whose price has increased by the highest percentage since the previous day's close.
Top losers are those tickers whose price has decreased by the highest percentage since the previous day's close.
<br />
<br />
Note: Snapshot data is cleared at 12am EST and gets populated as data is received from the exchanges.


<h3 id="gainerslosers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|direction|path|string|true|The direction of the snapshot results to return.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|gainers|
|direction|losers|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "tickers": [
    {
      "day": {
        "c": 0.0374,
        "h": 0.062377,
        "l": 0.01162,
        "o": 0.044834,
        "v": 27313165.159427017,
        "vw": 0
      },
      "lastTrade": {
        "c": [
          2
        ],
        "i": "517478762",
        "p": 0.0374,
        "s": 499,
        "t": 1604409649544,
        "x": 2
      },
      "min": {
        "c": 0.062377,
        "h": 0.062377,
        "l": 0.062377,
        "n": 2,
        "o": 0.062377,
        "t": 1684426740000,
        "v": 35420,
        "vw": 0
      },
      "prevDay": {
        "c": 0.01162,
        "h": 0.044834,
        "l": 0.01162,
        "o": 0.044834,
        "v": 53616273.36827199,
        "vw": 0.0296
      },
      "ticker": "X:DRNUSD",
      "todaysChange": 0.02578,
      "todaysChangePerc": 221.858864,
      "updated": 1605330008999
    }
  ]
}
```

<h3 id="gainerslosers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get the current gainers / losers of the day|Inline|
|default|Default|Unexpected error|None|

<h3 id="gainerslosers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tickers|[object]|false|none|An array of snapshot data for the specified tickers.|
|» day|object|true|none|The most recent daily bar for this ticker.|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» fmv|number(double)|false|none|Fair market value is only available on Business plans. It is our proprietary algorithm to generate a real-time, accurate, fair market value of a tradable security. For more information, <a rel="nofollow" target="_blank" href="https://massive.com/contact">contact us</a>.|
|» lastTrade|object|true|none|The most recent trade for this ticker.|
|» » c|[integer]|true|none|A list of condition codes. See [Crypto Condition Codes](https://massive.com/docs/rest/crypto/market-operations/condition-codes) for what each code means.|
|» » i|string|true|none|The Trade ID which uniquely identifies a trade. These are unique per<br>combination of ticker, exchange, and TRF. For example: A trade for AAPL<br>executed on NYSE and a trade for AAPL executed on NASDAQ could potentially<br>have the same Trade ID.<br>|
|» » p|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.<br>|
|» » s|number|true|none|The size (volume) of the trade.|
|» » t|integer|true|none|The millisecond accuracy timestamp. This is the timestamp of when the trade was generated at the exchange.|
|» » x|integer|true|none|The exchange that this crypto trade happened on.  <br>See <a href="https://massive.com/docs/rest/crypto/market-operations/exchanges">Exchanges</a> for a mapping of exchanges to IDs.<br>|
|» min|object|true|none|The most recent minute bar for this ticker.|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » n|integer|true|none|The number of transactions in the aggregate window.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» prevDay|object|true|none|The previous day's bar for this ticker.|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» ticker|string|true|none|The exchange symbol that this item is traded under.|
|» todaysChange|number(double)|true|none|The value of the change from the previous day.|
|» todaysChangePerc|number(double)|true|none|The percentage change since the previous day.|
|» updated|integer|true|none|The last updated timestamp.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-fxsnapshot">fx:snapshot</h1>

## All Tickers

<a id="opIdGetForexSnapshotTickers"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/snapshot/locale/global/markets/forex/tickers?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/snapshot/locale/global/markets/forex/tickers`

Get the current minute, day, and previous day’s aggregate, as well as the last trade and quote for all traded forex symbols.
<br />
<br />
Note: Snapshot data is cleared at 12am EST and gets populated as data is received from the exchanges. This can happen as early as 4am EST.


<h3 id="all-tickers-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tickers|query|[string]|false|A case-sensitive comma separated list of tickers to get snapshots for. For example, C:EURUSD, C:GBPCAD, and C:AUDINR. Empty string defaults to querying all tickers.|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "tickers": [
    {
      "day": {
        "c": 0.11778221,
        "h": 0.11812263,
        "l": 0.11766631,
        "o": 0.11797149,
        "v": 77794
      },
      "lastQuote": {
        "a": 0.11780678,
        "b": 0.11777952,
        "t": 1605280919000,
        "x": 48
      },
      "min": {
        "c": 0.117769,
        "h": 0.11779633,
        "l": 0.11773698,
        "n": 1,
        "o": 0.11778,
        "t": 1684422000000,
        "v": 202
      },
      "prevDay": {
        "c": 0.11797258,
        "h": 0.11797258,
        "l": 0.11797149,
        "o": 0.11797149,
        "v": 2,
        "vw": 0
      },
      "ticker": "C:HKDCHF",
      "todaysChange": -0.00019306,
      "todaysChangePerc": -0.1636482,
      "updated": 1605280919000
    }
  ]
}
```

<h3 id="all-tickers-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get current state for all tickers|Inline|
|default|Default|Unexpected error|None|

<h3 id="all-tickers-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status of this request's response.|
|tickers|[object]|false|none|An array of snapshot data for the specified tickers.|
|» day|object|true|none|The most recent daily bar for this ticker. Forex daily bars follow the UTC day (00:00 to 23:59 UTC).|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» fmv|number(double)|false|none|Fair market value is only available on Business plans. It is our proprietary algorithm to generate a real-time, accurate, fair market value of a tradable security. For more information, <a rel="nofollow" target="_blank" href="https://massive.com/contact">contact us</a>.|
|» lastQuote|object|true|none|The most recent quote for this ticker.|
|» » a|number(double)|true|none|The ask price.|
|» » b|number(double)|true|none|The bid price.|
|» » t|integer|true|none|The millisecond accuracy timestamp of the quote.|
|» » x|integer|true|none|The exchange ID on which this quote happened.|
|» min|object|true|none|The most recent minute bar for this ticker.|
|» » c|number(double)|false|none|The close price for the symbol in the given time period.|
|» » h|number(double)|false|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|false|none|The lowest price for the symbol in the given time period.|
|» » n|integer|false|none|The number of transactions in the aggregate window.|
|» » o|number(double)|false|none|The open price for the symbol in the given time period.|
|» » t|integer|false|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» » v|number(double)|false|none|The trading volume of the symbol in the given time period.|
|» prevDay|object|true|none|The previous day's bar for this ticker, covering the previous UTC day (00:00 to 23:59 UTC).|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» ticker|string|true|none|The exchange symbol that this item is traded under.|
|» todaysChange|number(double)|true|none|The value of the change from the previous day.|
|» todaysChangePerc|number(double)|true|none|The percentage change since the previous day.|
|» updated|integer|true|none|The last updated timestamp.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Ticker

<a id="opIdGetForexSnapshotTicker"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/snapshot/locale/global/markets/forex/tickers/C%3AEURUSD?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/snapshot/locale/global/markets/forex/tickers/{ticker}`

Get the current minute, day, and previous day’s aggregate, as well as the last trade and quote for a single traded currency symbol.
<br />
<br />
Note: Snapshot data is cleared at 12am EST and gets populated as data is received from the exchanges.


<h3 id="ticker-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|path|string|true|The forex ticker.|

> Example responses

> 200 Response

```json
{
  "request_id": "ad76e76ce183002c5937a7f02dfebde4",
  "status": "OK",
  "ticker": {
    "day": {
      "c": 1.18403,
      "h": 1.1906,
      "l": 1.18001,
      "o": 1.18725,
      "v": 83578
    },
    "lastQuote": {
      "a": 1.18403,
      "b": 1.18398,
      "i": 0,
      "t": 1606163759000,
      "x": 48
    },
    "min": {
      "c": 1.18396,
      "h": 1.18423,
      "l": 1.1838,
      "n": 85,
      "o": 1.18404,
      "t": 1684422000000,
      "v": 41
    },
    "prevDay": {
      "c": 1.18724,
      "h": 1.18727,
      "l": 1.18725,
      "o": 1.18725,
      "v": 5,
      "vw": 0
    },
    "ticker": "C:EURUSD",
    "todaysChange": -0.00316,
    "todaysChangePerc": -0.27458312,
    "updated": 1606163759000
  }
}
```

<h3 id="ticker-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get current state for a ticker|Inline|
|default|Default|Unexpected error|None|

<h3 id="ticker-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status of this request's response.|
|request_id|string|true|none|A request id assigned by the server.|
|ticker|object|false|none|Contains the requested snapshot data for the specified ticker.|
|» day|object|true|none|The most recent daily bar for this ticker. Forex daily bars follow the UTC day (00:00 to 23:59 UTC).|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» fmv|number(double)|false|none|Fair market value is only available on Business plans. It is our proprietary algorithm to generate a real-time, accurate, fair market value of a tradable security. For more information, <a rel="nofollow" target="_blank" href="https://massive.com/contact">contact us</a>.|
|» lastQuote|object|true|none|The most recent quote for this ticker.|
|» » a|number(double)|true|none|The ask price.|
|» » b|number(double)|true|none|The bid price.|
|» » t|integer|true|none|The millisecond accuracy timestamp of the quote.|
|» » x|integer|true|none|The exchange ID on which this quote happened.|
|» min|object|true|none|The most recent minute bar for this ticker.|
|» » c|number(double)|false|none|The close price for the symbol in the given time period.|
|» » h|number(double)|false|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|false|none|The lowest price for the symbol in the given time period.|
|» » n|integer|false|none|The number of transactions in the aggregate window.|
|» » o|number(double)|false|none|The open price for the symbol in the given time period.|
|» » t|integer|false|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» » v|number(double)|false|none|The trading volume of the symbol in the given time period.|
|» prevDay|object|true|none|The previous day's bar for this ticker, covering the previous UTC day (00:00 to 23:59 UTC).|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» ticker|string|true|none|The exchange symbol that this item is traded under.|
|» todaysChange|number(double)|true|none|The value of the change from the previous day.|
|» todaysChangePerc|number(double)|true|none|The percentage change since the previous day.|
|» updated|integer|true|none|The last updated timestamp.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Gainers/Losers

<a id="opIdGetForexSnapshotDirection"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/snapshot/locale/global/markets/forex/gainers?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/snapshot/locale/global/markets/forex/{direction}`

Get the current top 20 gainers or losers of the day in forex markets.
<br />
<br />
Top gainers are those tickers whose price has increased by the highest percentage since the previous day's close.
Top losers are those tickers whose price has decreased by the highest percentage since the previous day's close.
<br />
<br />
Note: Snapshot data is cleared at 12am EST and gets populated as data is received from the exchanges.


<h3 id="gainerslosers-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|direction|path|string|true|The direction of the snapshot results to return.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|gainers|
|direction|losers|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "tickers": [
    {
      "day": {
        "c": 0.886156,
        "h": 0.887111,
        "l": 0.8825327,
        "o": 0.8844732,
        "v": 1041
      },
      "lastQuote": {
        "a": 0.8879606,
        "b": 0.886156,
        "t": 1605283204000,
        "x": 48
      },
      "min": {
        "c": 0.886156,
        "h": 0.886156,
        "l": 0.886156,
        "n": 1,
        "o": 0.886156,
        "t": 1684422000000,
        "v": 1
      },
      "prevDay": {
        "c": 0.8428527,
        "h": 0.889773,
        "l": 0.8428527,
        "o": 0.8848539,
        "v": 1078,
        "vw": 0
      },
      "ticker": "C:PLNILS",
      "todaysChange": 0.0433033,
      "todaysChangePerc": 5.13770674,
      "updated": 1605330008999
    }
  ]
}
```

<h3 id="gainerslosers-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get the current gainers / losers of the day|Inline|
|default|Default|Unexpected error|None|

<h3 id="gainerslosers-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status of this request's response.|
|tickers|[object]|false|none|An array of snapshot data for the specified tickers.|
|» day|object|true|none|The most recent daily bar for this ticker. Forex daily bars follow the UTC day (00:00 to 23:59 UTC).|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» fmv|number(double)|false|none|Fair market value is only available on Business plans. It is our proprietary algorithm to generate a real-time, accurate, fair market value of a tradable security. For more information, <a rel="nofollow" target="_blank" href="https://massive.com/contact">contact us</a>.|
|» lastQuote|object|true|none|The most recent quote for this ticker.|
|» » a|number(double)|true|none|The ask price.|
|» » b|number(double)|true|none|The bid price.|
|» » t|integer|true|none|The millisecond accuracy timestamp of the quote.|
|» » x|integer|true|none|The exchange ID on which this quote happened.|
|» min|object|true|none|The most recent minute bar for this ticker.|
|» » c|number(double)|false|none|The close price for the symbol in the given time period.|
|» » h|number(double)|false|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|false|none|The lowest price for the symbol in the given time period.|
|» » n|integer|false|none|The number of transactions in the aggregate window.|
|» » o|number(double)|false|none|The open price for the symbol in the given time period.|
|» » t|integer|false|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» » v|number(double)|false|none|The trading volume of the symbol in the given time period.|
|» prevDay|object|true|none|The previous day's bar for this ticker, covering the previous UTC day (00:00 to 23:59 UTC).|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» ticker|string|true|none|The exchange symbol that this item is traded under.|
|» todaysChange|number(double)|true|none|The value of the change from the previous day.|
|» todaysChangePerc|number(double)|true|none|The percentage change since the previous day.|
|» updated|integer|true|none|The last updated timestamp.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-stockssnapshot">stocks:snapshot</h1>

## All Tickers

<a id="opIdGetStocksSnapshotTickers"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/snapshot/locale/us/markets/stocks/tickers`

Get the most up-to-date market data for all traded stock symbols.
<br />
<br />
Note: Snapshot data is cleared at 3:30am EST and gets populated as data is received from the exchanges. This can happen as early as 4am EST.


<h3 id="all-tickers-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tickers|query|[string]|false|A case-sensitive comma separated list of tickers to get snapshots for. For example, AAPL,TSLA,GOOG. Empty string defaults to querying all tickers.|
|include_otc|query|boolean|false|Include OTC securities in the response. Default is false (don't include OTC securities).<br>|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "status": "OK",
  "tickers": [
    {
      "day": {
        "c": 20.506,
        "dv": "37216.0",
        "h": 20.64,
        "l": 20.506,
        "o": 20.64,
        "v": 37216,
        "vw": 20.616
      },
      "lastQuote": {
        "P": 20.6,
        "S": 22,
        "p": 20.5,
        "s": 13,
        "t": 1605192959994246100
      },
      "lastTrade": {
        "c": [
          14,
          41
        ],
        "ds": "2416.0",
        "i": "71675577320245",
        "p": 20.506,
        "s": 2416,
        "t": 1605192894630916600,
        "x": 4
      },
      "min": {
        "av": 37216,
        "c": 20.506,
        "dav": "37216.0",
        "dv": "5000.0",
        "h": 20.506,
        "l": 20.506,
        "n": 1,
        "o": 20.506,
        "t": 1684428600000,
        "v": 5000,
        "vw": 20.5105
      },
      "prevDay": {
        "c": 20.63,
        "h": 21,
        "l": 20.5,
        "o": 20.79,
        "v": 292738,
        "vw": 20.6939
      },
      "ticker": "BCAT",
      "todaysChange": -0.124,
      "todaysChangePerc": -0.601,
      "updated": 1605192894630916600
    }
  ]
}
```

<h3 id="all-tickers-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get current state for all tickers|Inline|
|default|Default|Unexpected error|None|

<h3 id="all-tickers-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The total number of results for this request.|
|status|string|true|none|The status of this request's response.|
|tickers|[object]|false|none|An array of snapshot data for the specified tickers.|
|» day|object|false|none|The most recent daily bar for this ticker.|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » dv|string|false|none|The volume including fractional shares, respresented as a string.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» fmv|number(double)|false|none|Fair market value is only available on Business plans. It is our proprietary algorithm to generate a real-time, accurate, fair market value of a tradable security. For more information, <a rel="nofollow" target="_blank" href="https://massive.com/contact">contact us</a>.|
|» lastQuote|object|false|none|The most recent quote for this ticker.  This is only returned if your current plan includes quotes.|
|» » P|number(double)|true|none|The ask price.|
|» » S|integer|true|none|The ask size in lots.|
|» » p|number(double)|true|none|The bid price.|
|» » s|integer|true|none|The bid size in lots.|
|» » t|integer|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this message from the exchange which produced it.|
|» lastTrade|object|false|none|The most recent trade for this ticker.  This is only returned if your current plan includes trades.|
|» » c|[integer]|true|none|A list of condition codes. See [Stocks Condition Codes](https://massive.com/docs/rest/stocks/market-operations/condition-codes) for what each code means.|
|» » ds|string|true|none|The size of the trade including fractional shares, respresented as a string.|
|» » i|string|true|none|The Trade ID which uniquely identifies a trade. These are unique per<br>combination of ticker, exchange, and TRF. For example: A trade for AAPL<br>executed on NYSE and a trade for AAPL executed on NASDAQ could potentially<br>have the same Trade ID.<br>|
|» » p|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.<br>|
|» » s|integer|true|none|The size (volume) of the trade.|
|» » t|integer|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this message from the exchange which produced it.|
|» » x|integer|true|none|The exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» min|object|false|none|The most recent minute bar for this ticker.|
|» » av|integer|true|none|The accumulated volume.|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » dav|string|true|none|The accumulated volume including fractional shares, respresented as a string.|
|» » dv|string|false|none|The volume including fractional shares, respresented as a string.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » n|integer|true|none|The number of transactions in the aggregate window.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» prevDay|object|false|none|The previous day's bar for this ticker.|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» ticker|string|false|none|The exchange symbol that this item is traded under.|
|» todaysChange|number(double)|false|none|The value of the change from the previous day.|
|» todaysChangePerc|number(double)|false|none|The percentage change since the previous day.|
|» updated|integer|false|none|The last updated timestamp.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Ticker

<a id="opIdGetStocksSnapshotTicker"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers/AAPL?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/snapshot/locale/us/markets/stocks/tickers/{stocksTicker}`

Get the most up-to-date market data for a single traded stock ticker.
<br />
<br />
Note: Snapshot data is cleared at 3:30am EST and gets populated as data is received from the exchanges. This can happen as early as 4am EST.


<h3 id="ticker-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stocksTicker|path|string|true|Specify a case-sensitive ticker symbol. For example, AAPL represents Apple Inc.|

> Example responses

> 200 Response

```json
{
  "request_id": "657e430f1ae768891f018e08e03598d8",
  "status": "OK",
  "ticker": {
    "day": {
      "c": 120.4229,
      "dv": "28727868.0",
      "h": 120.53,
      "l": 118.81,
      "o": 119.62,
      "v": 28727868,
      "vw": 119.725
    },
    "lastQuote": {
      "P": 120.47,
      "S": 4,
      "p": 120.46,
      "s": 8,
      "t": 1605195918507251700
    },
    "lastTrade": {
      "c": [
        14,
        41
      ],
      "ds": "236.0",
      "i": "4046",
      "p": 120.47,
      "s": 236,
      "t": 1605195918306274000,
      "x": 10
    },
    "min": {
      "av": 28724441,
      "c": 120.4201,
      "dav": "28724441.0",
      "dv": "270796.0",
      "h": 120.468,
      "l": 120.37,
      "n": 762,
      "o": 120.435,
      "t": 1684428720000,
      "v": 270796,
      "vw": 120.4129
    },
    "prevDay": {
      "c": 119.49,
      "h": 119.63,
      "l": 116.44,
      "o": 117.19,
      "v": 110597265,
      "vw": 118.4998
    },
    "ticker": "AAPL",
    "todaysChange": 0.98,
    "todaysChangePerc": 0.82,
    "updated": 1605195918306274000
  }
}
```

<h3 id="ticker-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get current state for a ticker|Inline|
|default|Default|Unexpected error|None|

<h3 id="ticker-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status of this request's response.|
|request_id|string|true|none|A request id assigned by the server.|
|ticker|object|false|none|Contains the requested snapshot data for the specified ticker.|
|» day|object|false|none|The most recent daily bar for this ticker.|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » dv|string|false|none|The volume including fractional shares, respresented as a string.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» fmv|number(double)|false|none|Fair market value is only available on Business plans. It is our proprietary algorithm to generate a real-time, accurate, fair market value of a tradable security. For more information, <a rel="nofollow" target="_blank" href="https://massive.com/contact">contact us</a>.|
|» lastQuote|object|false|none|The most recent quote for this ticker.  This is only returned if your current plan includes quotes.|
|» » P|number(double)|true|none|The ask price.|
|» » S|integer|true|none|The ask size in lots.|
|» » p|number(double)|true|none|The bid price.|
|» » s|integer|true|none|The bid size in lots.|
|» » t|integer|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this message from the exchange which produced it.|
|» lastTrade|object|false|none|The most recent trade for this ticker.  This is only returned if your current plan includes trades.|
|» » c|[integer]|true|none|A list of condition codes. See [Stocks Condition Codes](https://massive.com/docs/rest/stocks/market-operations/condition-codes) for what each code means.|
|» » ds|string|true|none|The size of the trade including fractional shares, respresented as a string.|
|» » i|string|true|none|The Trade ID which uniquely identifies a trade. These are unique per<br>combination of ticker, exchange, and TRF. For example: A trade for AAPL<br>executed on NYSE and a trade for AAPL executed on NASDAQ could potentially<br>have the same Trade ID.<br>|
|» » p|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.<br>|
|» » s|integer|true|none|The size (volume) of the trade.|
|» » t|integer|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this message from the exchange which produced it.|
|» » x|integer|true|none|The exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» min|object|false|none|The most recent minute bar for this ticker.|
|» » av|integer|true|none|The accumulated volume.|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » dav|string|true|none|The accumulated volume including fractional shares, respresented as a string.|
|» » dv|string|false|none|The volume including fractional shares, respresented as a string.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » n|integer|true|none|The number of transactions in the aggregate window.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» prevDay|object|false|none|The previous day's bar for this ticker.|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» ticker|string|false|none|The exchange symbol that this item is traded under.|
|» todaysChange|number(double)|false|none|The value of the change from the previous day.|
|» todaysChangePerc|number(double)|false|none|The percentage change since the previous day.|
|» updated|integer|false|none|The last updated timestamp.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Gainers/Losers

<a id="opIdGetStocksSnapshotDirection"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/snapshot/locale/us/markets/stocks/{direction}`

Get the most up-to-date market data for the current top 20 gainers or losers of the day in the stocks/equities markets.
<br />
<br />
Top gainers are those tickers whose price has increased by the highest percentage since the previous day's close.
Top losers are those tickers whose price has decreased by the highest percentage since the previous day's close.
This output will only include tickers with a trading volume of 10,000 or more.
<br />
<br />
Note: Snapshot data is cleared at 3:30am EST and gets populated as data is received from the exchanges.


<h3 id="gainerslosers-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|direction|path|string|true|The direction of the snapshot results to return.<br>|
|include_otc|query|boolean|false|Include OTC securities in the response. Default is false (don't include OTC securities).<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|gainers|
|direction|losers|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "tickers": [
    {
      "day": {
        "c": 14.2284,
        "dv": "133963.0",
        "h": 15.09,
        "l": 14.2,
        "o": 14.33,
        "v": 133963,
        "vw": 14.5311
      },
      "lastQuote": {
        "P": 14.44,
        "S": 11,
        "p": 14.2,
        "s": 25,
        "t": 1605195929997325600
      },
      "lastTrade": {
        "c": [
          63
        ],
        "ds": "536.0",
        "i": "79372124707124",
        "p": 14.2284,
        "s": 536,
        "t": 1605195848258266000,
        "x": 4
      },
      "min": {
        "av": 133963,
        "c": 14.2284,
        "dav": "133963.0",
        "dv": "6108.0",
        "h": 14.325,
        "l": 14.2,
        "n": 5,
        "o": 14.28,
        "t": 1684428600000,
        "v": 6108,
        "vw": 14.2426
      },
      "prevDay": {
        "c": 0.73,
        "h": 0.799,
        "l": 0.73,
        "o": 0.75,
        "v": 1568097,
        "vw": 0.7721
      },
      "ticker": "PDS",
      "todaysChange": 13.498,
      "todaysChangePerc": 1849.096,
      "updated": 1605195848258266000
    }
  ]
}
```

<h3 id="gainerslosers-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get the current tickers of the day|Inline|
|default|Default|Unexpected error|None|

<h3 id="gainerslosers-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status of this request's response.|
|tickers|[object]|false|none|An array of snapshot data for the specified tickers.|
|» day|object|false|none|The most recent daily bar for this ticker.|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » dv|string|false|none|The volume including fractional shares, respresented as a string.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» fmv|number(double)|false|none|Fair market value is only available on Business plans. It is our proprietary algorithm to generate a real-time, accurate, fair market value of a tradable security. For more information, <a rel="nofollow" target="_blank" href="https://massive.com/contact">contact us</a>.|
|» lastQuote|object|false|none|The most recent quote for this ticker.  This is only returned if your current plan includes quotes.|
|» » P|number(double)|true|none|The ask price.|
|» » S|integer|true|none|The ask size in lots.|
|» » p|number(double)|true|none|The bid price.|
|» » s|integer|true|none|The bid size in lots.|
|» » t|integer|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this message from the exchange which produced it.|
|» lastTrade|object|false|none|The most recent trade for this ticker.  This is only returned if your current plan includes trades.|
|» » c|[integer]|true|none|A list of condition codes. See [Stocks Condition Codes](https://massive.com/docs/rest/stocks/market-operations/condition-codes) for what each code means.|
|» » ds|string|true|none|The size of the trade including fractional shares, respresented as a string.|
|» » i|string|true|none|The Trade ID which uniquely identifies a trade. These are unique per<br>combination of ticker, exchange, and TRF. For example: A trade for AAPL<br>executed on NYSE and a trade for AAPL executed on NASDAQ could potentially<br>have the same Trade ID.<br>|
|» » p|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.<br>|
|» » s|integer|true|none|The size (volume) of the trade.|
|» » t|integer|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this message from the exchange which produced it.|
|» » x|integer|true|none|The exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» min|object|false|none|The most recent minute bar for this ticker.|
|» » av|integer|true|none|The accumulated volume.|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » dav|string|true|none|The accumulated volume including fractional shares, respresented as a string.|
|» » dv|string|false|none|The volume including fractional shares, respresented as a string.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » n|integer|true|none|The number of transactions in the aggregate window.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» prevDay|object|false|none|The previous day's bar for this ticker.|
|» » c|number(double)|true|none|The close price for the symbol in the given time period.|
|» » h|number(double)|true|none|The highest price for the symbol in the given time period.|
|» » l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|» » o|number(double)|true|none|The open price for the symbol in the given time period.|
|» » otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|» » v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|» » vw|number(double)|true|none|The volume weighted average price.|
|» ticker|string|false|none|The exchange symbol that this item is traded under.|
|» todaysChange|number(double)|false|none|The value of the change from the previous day.|
|» todaysChangePerc|number(double)|false|none|The percentage change since the previous day.|
|» updated|integer|false|none|The last updated timestamp.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-stocksquotes">stocks:quotes</h1>

## Quotes (NBBO)

<a id="opIdDeprecatedGetHistoricStocksQuotes"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/ticks/stocks/nbbo/AAPL/2020-10-14?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/ticks/stocks/nbbo/{ticker}/{date}`

Get NBBO quotes for a given ticker symbol on a specified date.


<h3 id="quotes-nbbo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|path|string|true|The ticker symbol we want quotes for.|
|date|path|string(date)|true|The date/day of the quotes to retrieve in the format YYYY-MM-DD.|
|timestamp|query|integer|false|The timestamp offset, used for pagination. This is the offset at which to start the results. Using the `timestamp` of the last result as the offset will give you the next page of results.<br>|
|timestampLimit|query|integer|false|The maximum timestamp allowed in the results.<br>|
|reverse|query|boolean|false|Reverse the order of the results.<br>|
|limit|query|integer|false|Limit the size of the response, max 50000 and default 5000.|

> Example responses

> 200 Response

```json
{
  "db_latency": 43,
  "map": {
    "P": {
      "name": "ask_price",
      "type": "float64"
    },
    "S": {
      "name": "ask_size",
      "type": "int"
    },
    "X": {
      "name": "ask_exchange",
      "type": "int"
    },
    "c": {
      "name": "conditions",
      "type": "int"
    },
    "f": {
      "name": "trf_timestamp",
      "type": "int64"
    },
    "i": {
      "name": "indicators",
      "type": "int"
    },
    "p": {
      "name": "bid_price",
      "type": "float64"
    },
    "q": {
      "name": "sequence_number",
      "type": "int"
    },
    "s": {
      "name": "bid_size",
      "type": "int"
    },
    "t": {
      "name": "sip_timestamp",
      "type": "int64"
    },
    "x": {
      "name": "bid_exchange",
      "type": "int"
    },
    "y": {
      "name": "participant_timestamp",
      "type": "int64"
    },
    "z": {
      "name": "tape",
      "type": "int"
    }
  },
  "results": [
    {
      "P": 0,
      "S": 0,
      "X": 0,
      "c": [
        1
      ],
      "p": 102.7,
      "q": 2060,
      "s": 60,
      "t": 1517562000065700400,
      "x": 11,
      "y": 1517562000065321200,
      "z": 3
    },
    {
      "P": 0,
      "S": 0,
      "X": 0,
      "c": [
        1
      ],
      "p": 170,
      "q": 2061,
      "s": 2,
      "t": 1517562000065791500,
      "x": 11,
      "y": 1517562000065408300,
      "z": 3
    }
  ],
  "results_count": 2,
  "success": true,
  "ticker": "AAPL"
}
```

<h3 id="quotes-nbbo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of quotes.|Inline|
|default|Default|Unexpected error|None|

<h3 id="quotes-nbbo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|db_latency|integer|false|none|Latency in milliseconds for the query results from the database.|
|results_count|integer|false|none|The total number of results for this request.|
|success|boolean|false|none|Whether or not this query was executed successfully.|
|ticker|string|false|none|The exchange symbol that this item is traded under.|
|results|[object]|false|none|none|
|» T|string|true|none|The exchange symbol that this item is traded under.|
|» f|integer|true|none|The nanosecond accuracy TRF(Trade Reporting Facility) Unix Timestamp. This is the timestamp of when the trade reporting facility received this message.|
|» q|integer(int64)|true|none|The sequence number represents the sequence in which message events happened.<br>These are increasing and unique per ticker symbol, but will not always be<br>sequential (e.g., 1, 2, 6, 9, 10, 11).<br>|
|» t|integer|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this message from the exchange which produced it.|
|» y|integer|true|none|The nanosecond accuracy Participant/Exchange Unix Timestamp. This is the timestamp of when the quote was actually generated at the exchange.|
|» P|number(double)|true|none|The ask price.|
|» S|integer|true|none|The ask size. This represents the number of shares sellers are offering at the given ask price.|
|» X|integer|true|none|The ask exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» c|[integer]|true|none|A list of condition codes. See [Stocks Condition Codes](https://massive.com/docs/rest/stocks/market-operations/condition-codes) for what each code means.|
|» i|[integer]|true|none|The indicators. For more information, see our glossary of [Conditions and<br>Indicators](https://massive.com/glossary/conditions-indicators).<br>|
|» p|number(double)|true|none|The bid price.|
|» s|integer|true|none|The bid size. This represents the number of shares buyers are bidding for at the given bid price.|
|» x|integer|true|none|The bid exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» z|integer|true|none|There are 3 tapes which define which exchange the ticker is listed on. These are integers in our objects which represent the letter of the alphabet. Eg: 1 = A, 2 = B, 3 = C.<br>* Tape A is NYSE listed securities<br>* Tape B is NYSE ARCA / NYSE American<br>* Tape C is NASDAQ<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Quotes (NBBO)

<a id="opIdQuotes"></a>

> Code samples

```bash
curl "https://api.polygon.io/v3/quotes/AAPL?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/quotes/{stockTicker}`

Get NBBO quotes for a ticker symbol in a given time range.

<h3 id="quotes-nbbo-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stockTicker|path|string|true|Specify a case-sensitive ticker symbol. For example, AAPL represents Apple Inc.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a nanosecond timestamp.|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|
|order|query|string|false|Order results based on the `sort` field.|
|limit|query|integer|false|Limit the number of results returned, default is 1000 and max is 50000.|
|sort|query|string|false|Sort field used for ordering.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|
|sort|timestamp|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v3/quotes/AAPL?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": [
    {
      "ask_exchange": 0,
      "ask_price": 0,
      "ask_size": 0,
      "bid_exchange": 11,
      "bid_price": 102.7,
      "bid_size": 60,
      "conditions": [
        1
      ],
      "participant_timestamp": 1517562000065321200,
      "sequence_number": 2060,
      "sip_timestamp": 1517562000065700400,
      "tape": 3
    },
    {
      "ask_exchange": 0,
      "ask_price": 0,
      "ask_size": 0,
      "bid_exchange": 11,
      "bid_price": 170,
      "bid_size": 2,
      "conditions": [
        1
      ],
      "participant_timestamp": 1517562000065408300,
      "sequence_number": 2061,
      "sip_timestamp": 1517562000065791500,
      "tape": 3
    }
  ],
  "status": "OK"
}
```

<h3 id="quotes-nbbo-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of quotes.|Inline|

<h3 id="quotes-nbbo-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|false|none|A request id assigned by the server.|
|results|[object]|false|none|An array of results containing the requested data.|
|» ask_exchange|integer|false|none|The ask exchange ID|
|» ask_price|number(double)|false|none|The ask price.|
|» ask_size|number(double)|false|none|The ask size. This represents the number of shares sellers are offering at the given ask price.|
|» bid_exchange|integer|false|none|The bid exchange ID|
|» bid_price|number(double)|false|none|The bid price.|
|» bid_size|number(double)|false|none|The bid size. This represents the number of shares buyers are bidding for at the given bid price.|
|» conditions|[integer(int32)]|false|none|A list of condition codes. See [Stocks Condition Codes](https://massive.com/docs/rest/stocks/market-operations/condition-codes) for what each code means.|
|» indicators|[integer(int32)]|false|none|A list of indicator codes. See the [Conditions and Indicators](https://massive.com/glossary/conditions-indicators) glossary for what each code means.|
|» participant_timestamp|integer(int64)|true|none|The nanosecond accuracy Participant/Exchange Unix Timestamp. This is the timestamp of when the quote was actually generated at the exchange.|
|» sequence_number|integer(int64)|true|none|The sequence number represents the sequence in which quote events happened.<br>These are increasing and unique per ticker symbol, but will not always be<br>sequential (e.g., 1, 2, 6, 9, 10, 11). Values reset after each trading session/day.|
|» sip_timestamp|integer(int64)|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this quote from the exchange which produced it.|
|» tape|integer(int32)|false|none|There are 3 tapes which define which exchange the ticker is listed on. These are integers in our objects which represent the letter of the alphabet. Eg: 1 = A, 2 = B, 3 = C.<br>* Tape A is NYSE listed securities<br>* Tape B is NYSE ARCA / NYSE American<br>* Tape C is NASDAQ|
|» trf_timestamp|integer(int64)|false|none|The nanosecond accuracy TRF (Trade Reporting Facility) Unix Timestamp. This is the timestamp of when the trade reporting facility received this quote.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-stockstrades">stocks:trades</h1>

## Trades

<a id="opIdDeprecatedGetHistoricStocksTrades"></a>

> Code samples

```bash
curl "https://api.polygon.io/v2/ticks/stocks/trades/AAPL/2020-10-14?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v2/ticks/stocks/trades/{ticker}/{date}`

Get trades for a given ticker symbol on a specified date.


<h3 id="trades-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|path|string|true|The ticker symbol we want trades for.|
|date|path|string(date)|true|The date/day of the trades to retrieve in the format YYYY-MM-DD.|
|timestamp|query|integer|false|The timestamp offset, used for pagination. This is the offset at which to start the results. Using the `timestamp` of the last result as the offset will give you the next page of results.<br>|
|timestampLimit|query|integer|false|The maximum timestamp allowed in the results.<br>|
|reverse|query|boolean|false|Reverse the order of the results.<br>|
|limit|query|integer|false|Limit the size of the response, max 50000 and default 5000.|

> Example responses

> 200 Response

```json
{
  "db_latency": 11,
  "map": {
    "I": {
      "name": "orig_id",
      "type": "string"
    },
    "c": {
      "name": "conditions",
      "type": "int"
    },
    "e": {
      "name": "correction",
      "type": "int"
    },
    "f": {
      "name": "trf_timestamp",
      "type": "int64"
    },
    "i": {
      "name": "id",
      "type": "string"
    },
    "p": {
      "name": "price",
      "type": "float64"
    },
    "q": {
      "name": "sequence_number",
      "type": "int64"
    },
    "r": {
      "name": "trf_id",
      "type": "int"
    },
    "s": {
      "name": "size",
      "type": "int"
    },
    "t": {
      "name": "sip_timestamp",
      "type": "int64"
    },
    "x": {
      "name": "exchange",
      "type": "int"
    },
    "y": {
      "name": "participant_timestamp",
      "type": "int64"
    },
    "z": {
      "name": "tape",
      "type": "int"
    }
  },
  "results": [
    {
      "c": [
        12,
        41
      ],
      "i": "1",
      "p": 171.55,
      "q": 1063,
      "s": 100,
      "t": 1517562000016036600,
      "x": 11,
      "y": 1517562000015577000,
      "z": 3
    },
    {
      "c": [
        12,
        41
      ],
      "i": "2",
      "p": 171.55,
      "q": 1064,
      "s": 100,
      "t": 1517562000016038100,
      "x": 11,
      "y": 1517562000015577600,
      "z": 3
    }
  ],
  "results_count": 2,
  "success": true,
  "ticker": "AAPL"
}
```

<h3 id="trades-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of trades.|Inline|
|default|Default|Unexpected error|None|

<h3 id="trades-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|db_latency|integer|false|none|Latency in milliseconds for the query results from the database.|
|results_count|integer|false|none|The total number of results for this request.|
|success|boolean|false|none|Whether or not this query was executed successfully.|
|ticker|string|false|none|The exchange symbol that this item is traded under.|
|results|[object]|false|none|none|
|» T|string|true|none|The exchange symbol that this item is traded under.|
|» f|integer|true|none|The nanosecond accuracy TRF(Trade Reporting Facility) Unix Timestamp. This is the timestamp of when the trade reporting facility received this message.|
|» q|integer(int64)|true|none|The sequence number represents the sequence in which message events happened.<br>These are increasing and unique per ticker symbol, but will not always be<br>sequential (e.g., 1, 2, 6, 9, 10, 11).<br>|
|» t|integer|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this message from the exchange which produced it.|
|» y|integer|true|none|The nanosecond accuracy Participant/Exchange Unix Timestamp. This is the timestamp of when the quote was actually generated at the exchange.|
|» c|[integer]|true|none|A list of condition codes. See [Stocks Condition Codes](https://massive.com/docs/rest/stocks/market-operations/condition-codes) for what each code means.|
|» e|integer|true|none|The trade correction indicator.<br>|
|» i|string|true|none|The Trade ID which uniquely identifies a trade. These are unique per<br>combination of ticker, exchange, and TRF. For example: A trade for AAPL<br>executed on NYSE and a trade for AAPL executed on NASDAQ could potentially<br>have the same Trade ID.<br>|
|» p|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.<br>|
|» r|integer|true|none|The ID for the Trade Reporting Facility where the trade took place.<br>|
|» s|number(double)|true|none|The size of a trade (also known as volume).<br>|
|» x|integer|true|none|The exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» z|integer|true|none|There are 3 tapes which define which exchange the ticker is listed on. These are integers in our objects which represent the letter of the alphabet. Eg: 1 = A, 2 = B, 3 = C.<br>* Tape A is NYSE listed securities<br>* Tape B is NYSE ARCA / NYSE American<br>* Tape C is NASDAQ<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Trades

<a id="opIdTrades"></a>

> Code samples

```bash
curl "https://api.polygon.io/v3/trades/AAPL?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/trades/{stockTicker}`

Get trades for a ticker symbol in a given time range.

<h3 id="trades-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stockTicker|path|string|true|Specify a case-sensitive ticker symbol. For example, AAPL represents Apple Inc.|
|timestamp|query|string|false|Query by trade timestamp. Either a date with the format YYYY-MM-DD or a nanosecond timestamp.|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|
|order|query|string|false|Order results based on the `sort` field.|
|limit|query|integer|false|Limit the number of results returned, default is 1000 and max is 50000.|
|sort|query|string|false|Sort field used for ordering.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|
|sort|timestamp|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v3/trades/AAPL?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": [
    {
      "conditions": [
        12,
        41
      ],
      "decimal_size": "100.0",
      "exchange": 11,
      "id": "1",
      "participant_timestamp": 1517562000015577000,
      "price": 171.55,
      "sequence_number": 1063,
      "sip_timestamp": 1517562000016036600,
      "size": 100,
      "tape": 3
    },
    {
      "conditions": [
        12,
        41
      ],
      "decimal_size": "100.0",
      "exchange": 11,
      "id": "2",
      "participant_timestamp": 1517562000015577600,
      "price": 171.55,
      "sequence_number": 1064,
      "sip_timestamp": 1517562000016038100,
      "size": 100,
      "tape": 3
    }
  ],
  "status": "OK"
}
```

<h3 id="trades-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of trades.|Inline|

<h3 id="trades-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|false|none|A request id assigned by the server.|
|results|[object]|false|none|An array of results containing the requested data.|
|» conditions|[integer(int32)]|false|none|A list of condition codes. See [Stocks Condition Codes](https://massive.com/docs/rest/stocks/market-operations/condition-codes) for what each code means.|
|» correction|integer|false|none|The trade correction indicator.|
|» decimal_size|string|true|none|The size of the trade including the fractional component. This is represented as a decimal string.|
|» exchange|integer|true|none|The exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» id|string|true|none|The Trade ID which uniquely identifies a trade. These are unique per<br>combination of ticker, exchange, and TRF. For example: A trade for AAPL<br>executed on NYSE and a trade for AAPL executed on NASDAQ could potentially<br>have the same Trade ID.|
|» participant_timestamp|integer(int64)|false|none|The nanosecond accuracy Participant/Exchange Unix Timestamp. This is the timestamp of when the trade was actually generated at the exchange. Omitted on OTC trades reported through the FINRA ORF (exchange 62), which carry no participant timestamp.|
|» price|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.|
|» sequence_number|integer(int64)|true|none|The sequence number represents the sequence in which trade events happened.<br>These are increasing and unique per ticker symbol, but will not always be<br>sequential (e.g., 1, 2, 6, 9, 10, 11). Values reset after each trading session/day.|
|» sip_timestamp|integer(int64)|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this trade from the exchange which produced it.|
|» size|number(double)|true|none|The size of a trade (also known as volume).|
|» tape|integer(int32)|false|none|There are 3 tapes which define which exchange the ticker is listed on. These are integers in our objects which represent the letter of the alphabet. Eg: 1 = A, 2 = B, 3 = C.<br>* Tape A is NYSE listed securities<br>* Tape B is NYSE ARCA / NYSE American<br>* Tape C is NASDAQ|
|» trf_id|integer|false|none|The ID for the Trade Reporting Facility where the trade took place.|
|» trf_timestamp|integer(int64)|false|none|The nanosecond accuracy TRF (Trade Reporting Facility) Unix Timestamp. This is the timestamp of when the trade reporting facility received this trade.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-fxquotes">fx:quotes</h1>

## Quotes (BBO)

<a id="opIdQuotesFx"></a>

> Code samples

```bash
curl "https://api.polygon.io/v3/quotes/C%3AEUR-USD?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/quotes/{fxTicker}`

Get BBO quotes for a ticker symbol in a given time range.

<h3 id="quotes-bbo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fxTicker|path|string|true|The ticker symbol to get quotes for.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a nanosecond timestamp.|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|
|order|query|string|false|Order results based on the `sort` field.|
|limit|query|integer|false|Limit the number of results returned, default is 1000 and max is 50000.|
|sort|query|string|false|Sort field used for ordering.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|
|sort|timestamp|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v3/quotes/C:EUR-USD?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": [
    {
      "ask_exchange": 48,
      "ask_price": 1.18565,
      "bid_exchange": 48,
      "bid_price": 1.18558,
      "participant_timestamp": 1625097600000000000
    },
    {
      "ask_exchange": 48,
      "ask_price": 1.18565,
      "bid_exchange": 48,
      "bid_price": 1.18559,
      "participant_timestamp": 1625097600000000000
    }
  ],
  "status": "OK"
}
```

<h3 id="quotes-bbo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of quotes.|Inline|

<h3 id="quotes-bbo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|false|none|A request id assigned by the server.|
|results|[object]|false|none|An array of results containing the requested data.|
|» ask_exchange|integer|false|none|The ask exchange ID|
|» ask_price|number(double)|false|none|The ask price.|
|» bid_exchange|integer|false|none|The bid exchange ID|
|» bid_price|number(double)|false|none|The bid price.|
|» participant_timestamp|integer(int64)|true|none|The nanosecond Exchange Unix Timestamp. This is the timestamp of when the quote was generated at the exchange.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-optionsquotes">options:quotes</h1>

## Quotes

<a id="opIdQuotesOptions"></a>

> Code samples

```bash
curl "https://api.polygon.io/v3/quotes/O%3ASPY241220P00720000?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/quotes/{optionsTicker}`

Get quotes for an options ticker symbol in a given time range.

<h3 id="quotes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|optionsTicker|path|string|true|The ticker symbol to get quotes for.|
|timestamp|query|string|false|Query by timestamp. Either a date with the format YYYY-MM-DD or a nanosecond timestamp.|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|
|order|query|string|false|Order results based on the `sort` field.|
|limit|query|integer|false|Limit the number of results returned, default is 1000 and max is 50000.|
|sort|query|string|false|Sort field used for ordering.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|
|sort|timestamp|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v3/quotes/O:SPY241220P00720000?cursor=YXA9NzY5Nzg0NzAxJmFzPSZsaW1pdD0xMCZvcmRlcj1kZXNjJnNvcnQ9dGltZXN0YW1wJnRpbWVzdGFtcC5sdGU9MjAyMi0wMi0xN1QxNyUzQTI1JTNBMTMuMDA5MzU2MDMyWg",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": [
    {
      "ask_exchange": 323,
      "ask_price": 282,
      "ask_size": 10,
      "bid_exchange": 316,
      "bid_price": 277.5,
      "bid_size": 1,
      "sequence_number": 789539218,
      "sip_timestamp": 1645119125346243600
    },
    {
      "ask_exchange": 301,
      "ask_price": 282,
      "ask_size": 1,
      "bid_exchange": 323,
      "bid_price": 277.5,
      "bid_size": 10,
      "sequence_number": 788994206,
      "sip_timestamp": 1645119118474271000
    }
  ],
  "status": "OK"
}
```

<h3 id="quotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of quotes.|Inline|

<h3 id="quotes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|false|none|A request id assigned by the server.|
|results|[object]|false|none|An array of results containing the requested data.|
|» ask_exchange|integer|false|none|The ask exchange ID|
|» ask_price|number(double)|false|none|The ask price.|
|» ask_size|number(double)|false|none|The ask size. This represents the number of contracts sellers are offering at the given ask price.|
|» bid_exchange|integer|false|none|The bid exchange ID|
|» bid_price|number(double)|false|none|The bid price.|
|» bid_size|number(double)|false|none|The bid size. This represents the number of contracts buyers are bidding for at the given bid price.|
|» sequence_number|integer(int64)|true|none|The sequence number represents the sequence in which quote events happened.<br>These are increasing and unique per ticker symbol, but will not always be<br>sequential (e.g., 1, 2, 6, 9, 10, 11).|
|» sip_timestamp|integer(int64)|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this quote from the exchange which produced it.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-referenceconditions">reference:conditions</h1>

## Conditions

<a id="opIdListConditions"></a>

> Code samples

```bash
curl "https://api.polygon.io/v3/reference/conditions?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/reference/conditions`

List all conditions that Massive uses.

<h3 id="conditions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_class|query|string|false|Filter for conditions within a given asset class.|
|data_type|query|string|false|Filter by data type.|
|id|query|integer|false|Filter for conditions with a given ID.|
|sip|query|string|false|Filter by SIP. If the condition contains a mapping for that SIP, the condition will be returned.|
|order|query|string|false|Order results based on the `sort` field.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 1000.|
|sort|query|string|false|Sort field used for ordering.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|asset_class|stocks|
|asset_class|options|
|asset_class|crypto|
|asset_class|fx|
|data_type|trade|
|data_type|bbo|
|data_type|nbbo|
|sip|CTA|
|sip|UTP|
|sip|OPRA|
|order|asc|
|order|desc|
|sort|asset_class|
|sort|id|
|sort|type|
|sort|name|
|sort|data_types|
|sort|legacy|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": "31d59dda-80e5-4721-8496-d0d32a654afe",
  "results": [
    {
      "asset_class": "stocks",
      "data_types": [
        "trade"
      ],
      "id": 2,
      "name": "Average Price Trade",
      "sip_mapping": {
        "CTA": "B",
        "UTP": "W"
      },
      "type": "condition",
      "update_rules": {
        "consolidated": {
          "updates_high_low": false,
          "updates_open_close": false,
          "updates_volume": true
        },
        "market_center": {
          "updates_high_low": false,
          "updates_open_close": false,
          "updates_volume": true
        }
      }
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "count": 1,
  "next_url": "string",
  "request_id": "31d59dda-80e5-4721-8496-d0d32a654afe",
  "results": [
    {
      "abbreviation": "string",
      "asset_class": "stocks",
      "data_types": [
        "trade"
      ],
      "description": "string",
      "exchange": 0,
      "id": 0,
      "legacy": true,
      "name": "Acquisition",
      "sip_mapping": {
        "CTA": "string",
        "OPRA": "string",
        "UTP": "string"
      },
      "type": "sale_condition",
      "update_rules": {
        "consolidated": {
          "updates_high_low": true,
          "updates_open_close": true,
          "updates_volume": true
        },
        "market_center": {
          "updates_high_low": true,
          "updates_open_close": true,
          "updates_volume": true
        }
      }
    }
  ],
  "status": "OK"
}
```

> default Response

```json
{
  "count": 1,
  "next_url": "string",
  "request_id": "31d59dda-80e5-4721-8496-d0d32a654afe",
  "results": [
    {
      "abbreviation": "string",
      "asset_class": "stocks",
      "data_types": [
        "trade"
      ],
      "description": "string",
      "exchange": 0,
      "id": 0,
      "legacy": true,
      "name": "Acquisition",
      "sip_mapping": {
        "CTA": "string",
        "OPRA": "string",
        "UTP": "string"
      },
      "type": "sale_condition",
      "update_rules": {
        "consolidated": {
          "updates_high_low": true,
          "updates_open_close": true,
          "updates_volume": true
        },
        "market_center": {
          "updates_high_low": true,
          "updates_open_close": true,
          "updates_volume": true
        }
      }
    }
  ],
  "status": "OK"
}
```

<h3 id="conditions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|a query parameter was malformed|Inline|
|default|Default|an unknown error occurred|Inline|

<h3 id="conditions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|The total number of results for this request.|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request ID assigned by the server.|
|results|[object]|true|none|An array of conditions that match your query.|
|» abbreviation|string|false|none|A commonly-used abbreviation for this condition.|
|» asset_class|string|true|none|An identifier for a group of similar financial instruments.|
|» data_types|[string]|true|none|Data types that this condition applies to.|
|» description|string|false|none|A short description of the semantics of this condition.|
|» exchange|integer|false|none|If present, mapping this condition from a Massive code to a SIP symbol depends on this attribute.<br>In other words, data with this condition attached comes exclusively from the given exchange.|
|» id|integer|true|none|An identifier used by Massive for this condition. Unique per data type.|
|» legacy|boolean|false|none|If true, this condition is from an old version of the SIPs' specs and no longer is used.<br>Other conditions may or may not reuse the same symbol as this one.|
|» name|string|true|none|The name of this condition.|
|» sip_mapping|object|true|none|A comprehensive mapping that translates condition codes from individual SIPs (CTA, OPRA, UTP) to a unified code used by Massive. This facilitates consistent interpretation and application of market data conditions across different data streams, ensuring that users can accurately apply these conditions to their data analysis and reporting.|
|» » CTA|string|false|none|Condition code from the Consolidated Tape Association (CTA).|
|» » OPRA|string|false|none|Condition code from the Options Price Reporting Authority (OPRA).|
|» » UTP|string|false|none|Condition code from UTP Plan (UTP).|
|» type|string|true|none|An identifier for a collection of related conditions.|
|» update_rules|object|false|none|A list of aggregation rules.|
|» » consolidated|object|true|none|Describes aggregation rules on a consolidated (all exchanges) basis.|
|» » » updates_high_low|boolean|true|none|Whether or not trades with this condition update the high/low.|
|» » » updates_open_close|boolean|true|none|Whether or not trades with this condition update the open/close.|
|» » » updates_volume|boolean|true|none|Whether or not trades with this condition update the volume.|
|» » market_center|object|true|none|Describes aggregation rules on a per-market-center basis.|
|» » » updates_high_low|boolean|true|none|Whether or not trades with this condition update the high/low.|
|» » » updates_open_close|boolean|true|none|Whether or not trades with this condition update the open/close.|
|» » » updates_volume|boolean|true|none|Whether or not trades with this condition update the volume.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|» asset_class|stocks|
|» asset_class|options|
|» asset_class|crypto|
|» asset_class|fx|
|» data_types|trade|
|» data_types|bbo|
|» data_types|nbbo|
|» type|sale_condition|
|» type|quote_condition|
|» type|sip_generated_flag|
|» type|financial_status_indicator|
|» type|short_sale_restriction_indicator|
|» type|settlement_condition|
|» type|market_condition|
|» type|trade_thru_exempt|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|The total number of results for this request.|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request ID assigned by the server.|
|results|[object]|true|none|An array of conditions that match your query.|
|» abbreviation|string|false|none|A commonly-used abbreviation for this condition.|
|» asset_class|string|true|none|An identifier for a group of similar financial instruments.|
|» data_types|[string]|true|none|Data types that this condition applies to.|
|» description|string|false|none|A short description of the semantics of this condition.|
|» exchange|integer|false|none|If present, mapping this condition from a Massive code to a SIP symbol depends on this attribute.<br>In other words, data with this condition attached comes exclusively from the given exchange.|
|» id|integer|true|none|An identifier used by Massive for this condition. Unique per data type.|
|» legacy|boolean|false|none|If true, this condition is from an old version of the SIPs' specs and no longer is used.<br>Other conditions may or may not reuse the same symbol as this one.|
|» name|string|true|none|The name of this condition.|
|» sip_mapping|object|true|none|A comprehensive mapping that translates condition codes from individual SIPs (CTA, OPRA, UTP) to a unified code used by Massive. This facilitates consistent interpretation and application of market data conditions across different data streams, ensuring that users can accurately apply these conditions to their data analysis and reporting.|
|» » CTA|string|false|none|Condition code from the Consolidated Tape Association (CTA).|
|» » OPRA|string|false|none|Condition code from the Options Price Reporting Authority (OPRA).|
|» » UTP|string|false|none|Condition code from UTP Plan (UTP).|
|» type|string|true|none|An identifier for a collection of related conditions.|
|» update_rules|object|false|none|A list of aggregation rules.|
|» » consolidated|object|true|none|Describes aggregation rules on a consolidated (all exchanges) basis.|
|» » » updates_high_low|boolean|true|none|Whether or not trades with this condition update the high/low.|
|» » » updates_open_close|boolean|true|none|Whether or not trades with this condition update the open/close.|
|» » » updates_volume|boolean|true|none|Whether or not trades with this condition update the volume.|
|» » market_center|object|true|none|Describes aggregation rules on a per-market-center basis.|
|» » » updates_high_low|boolean|true|none|Whether or not trades with this condition update the high/low.|
|» » » updates_open_close|boolean|true|none|Whether or not trades with this condition update the open/close.|
|» » » updates_volume|boolean|true|none|Whether or not trades with this condition update the volume.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|» asset_class|stocks|
|» asset_class|options|
|» asset_class|crypto|
|» asset_class|fx|
|» data_types|trade|
|» data_types|bbo|
|» data_types|nbbo|
|» type|sale_condition|
|» type|quote_condition|
|» type|sip_generated_flag|
|» type|financial_status_indicator|
|» type|short_sale_restriction_indicator|
|» type|settlement_condition|
|» type|market_condition|
|» type|trade_thru_exempt|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|The total number of results for this request.|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request ID assigned by the server.|
|results|[object]|true|none|An array of conditions that match your query.|
|» abbreviation|string|false|none|A commonly-used abbreviation for this condition.|
|» asset_class|string|true|none|An identifier for a group of similar financial instruments.|
|» data_types|[string]|true|none|Data types that this condition applies to.|
|» description|string|false|none|A short description of the semantics of this condition.|
|» exchange|integer|false|none|If present, mapping this condition from a Massive code to a SIP symbol depends on this attribute.<br>In other words, data with this condition attached comes exclusively from the given exchange.|
|» id|integer|true|none|An identifier used by Massive for this condition. Unique per data type.|
|» legacy|boolean|false|none|If true, this condition is from an old version of the SIPs' specs and no longer is used.<br>Other conditions may or may not reuse the same symbol as this one.|
|» name|string|true|none|The name of this condition.|
|» sip_mapping|object|true|none|A comprehensive mapping that translates condition codes from individual SIPs (CTA, OPRA, UTP) to a unified code used by Massive. This facilitates consistent interpretation and application of market data conditions across different data streams, ensuring that users can accurately apply these conditions to their data analysis and reporting.|
|» » CTA|string|false|none|Condition code from the Consolidated Tape Association (CTA).|
|» » OPRA|string|false|none|Condition code from the Options Price Reporting Authority (OPRA).|
|» » UTP|string|false|none|Condition code from UTP Plan (UTP).|
|» type|string|true|none|An identifier for a collection of related conditions.|
|» update_rules|object|false|none|A list of aggregation rules.|
|» » consolidated|object|true|none|Describes aggregation rules on a consolidated (all exchanges) basis.|
|» » » updates_high_low|boolean|true|none|Whether or not trades with this condition update the high/low.|
|» » » updates_open_close|boolean|true|none|Whether or not trades with this condition update the open/close.|
|» » » updates_volume|boolean|true|none|Whether or not trades with this condition update the volume.|
|» » market_center|object|true|none|Describes aggregation rules on a per-market-center basis.|
|» » » updates_high_low|boolean|true|none|Whether or not trades with this condition update the high/low.|
|» » » updates_open_close|boolean|true|none|Whether or not trades with this condition update the open/close.|
|» » » updates_volume|boolean|true|none|Whether or not trades with this condition update the volume.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|» asset_class|stocks|
|» asset_class|options|
|» asset_class|crypto|
|» asset_class|fx|
|» data_types|trade|
|» data_types|bbo|
|» data_types|nbbo|
|» type|sale_condition|
|» type|quote_condition|
|» type|sip_generated_flag|
|» type|financial_status_indicator|
|» type|short_sale_restriction_indicator|
|» type|settlement_condition|
|» type|market_condition|
|» type|trade_thru_exempt|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-referencedividends">reference:dividends</h1>

## Dividends v3

<a id="opIdListDividends"></a>

> Code samples

```bash
curl "https://api.polygon.io/v3/reference/dividends?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/reference/dividends`

Get a list of historical cash dividends, including the ticker symbol,
declaration date, ex-dividend date, record date, pay date, frequency,
and amount.

<h3 id="dividends-v3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|query|string|false|Specify a case-sensitive ticker symbol. For example, AAPL represents Apple Inc.|
|ex_dividend_date|query|string(date)|false|Query by ex-dividend date with the format YYYY-MM-DD.|
|record_date|query|string(date)|false|Query by record date with the format YYYY-MM-DD.|
|declaration_date|query|string(date)|false|Query by declaration date with the format YYYY-MM-DD.|
|pay_date|query|string(date)|false|Query by pay date with the format YYYY-MM-DD.|
|frequency|query|integer|false|Query by the number of times per year the dividend is paid out.  Possible values are 0 (one-time), 1 (annually), 2 (bi-annually), 4 (quarterly), 12 (monthly), 24 (bi-monthly), and 52 (weekly).|
|cash_amount|query|number|false|Query by the cash amount of the dividend.|
|dividend_type|query|string|false|Query by the type of dividend. Dividends that have been paid and/or are expected to be paid on consistent schedules are denoted as CD.<br>Special Cash dividends that have been paid that are infrequent or unusual, and/or can not be expected to occur in the future are denoted as SC.|
|ticker.gte|query|string|false|Range by ticker.|
|ticker.gt|query|string|false|Range by ticker.|
|ticker.lte|query|string|false|Range by ticker.|
|ticker.lt|query|string|false|Range by ticker.|
|ex_dividend_date.gte|query|string(date)|false|Range by ex_dividend_date.|
|ex_dividend_date.gt|query|string(date)|false|Range by ex_dividend_date.|
|ex_dividend_date.lte|query|string(date)|false|Range by ex_dividend_date.|
|ex_dividend_date.lt|query|string(date)|false|Range by ex_dividend_date.|
|record_date.gte|query|string(date)|false|Range by record_date.|
|record_date.gt|query|string(date)|false|Range by record_date.|
|record_date.lte|query|string(date)|false|Range by record_date.|
|record_date.lt|query|string(date)|false|Range by record_date.|
|declaration_date.gte|query|string(date)|false|Range by declaration_date.|
|declaration_date.gt|query|string(date)|false|Range by declaration_date.|
|declaration_date.lte|query|string(date)|false|Range by declaration_date.|
|declaration_date.lt|query|string(date)|false|Range by declaration_date.|
|pay_date.gte|query|string(date)|false|Range by pay_date.|
|pay_date.gt|query|string(date)|false|Range by pay_date.|
|pay_date.lte|query|string(date)|false|Range by pay_date.|
|pay_date.lt|query|string(date)|false|Range by pay_date.|
|cash_amount.gte|query|number|false|Range by cash_amount.|
|cash_amount.gt|query|number|false|Range by cash_amount.|
|cash_amount.lte|query|number|false|Range by cash_amount.|
|cash_amount.lt|query|number|false|Range by cash_amount.|
|order|query|string|false|Order results based on the `sort` field.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 1000.|
|sort|query|string|false|Sort field used for ordering.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|frequency|0|
|frequency|1|
|frequency|2|
|frequency|4|
|frequency|12|
|frequency|24|
|frequency|52|
|dividend_type|CD|
|dividend_type|SC|
|dividend_type|LT|
|dividend_type|ST|
|order|asc|
|order|desc|
|sort|ex_dividend_date|
|sort|pay_date|
|sort|declaration_date|
|sort|record_date|
|sort|cash_amount|
|sort|ticker|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v3/reference/dividends/AAPL?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "6a7e466379af0a71039d60cc78e72282",
  "results": [
    {
      "cash_amount": 0.22,
      "declaration_date": "2021-10-28",
      "dividend_type": "CD",
      "ex_dividend_date": "2021-11-05",
      "frequency": 4,
      "id": "E8e3c4f794613e9205e2f178a36c53fcc57cdabb55e1988c87b33f9e52e221444",
      "pay_date": "2021-11-11",
      "record_date": "2021-11-08",
      "ticker": "AAPL"
    },
    {
      "cash_amount": 0.22,
      "declaration_date": "2021-07-27",
      "dividend_type": "CD",
      "ex_dividend_date": "2021-08-06",
      "frequency": 4,
      "id": "E6436c5475706773f03490acf0b63fdb90b2c72bfeed329a6eb4afc080acd80ae",
      "pay_date": "2021-08-12",
      "record_date": "2021-08-09",
      "ticker": "AAPL"
    }
  ],
  "status": "OK"
}
```

<h3 id="dividends-v3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="dividends-v3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|false|none|An array of results containing the requested data.|
|» cash_amount|number|true|none|The cash amount of the dividend per share owned.|
|» currency|string|false|none|The currency in which the dividend is paid.|
|» declaration_date|string|false|none|The date that the dividend was announced.|
|» dividend_type|string|true|none|The type of dividend. Dividends that have been paid and/or are expected to be paid on consistent schedules are denoted as CD.<br>Special Cash dividends that have been paid that are infrequent or unusual, and/or can not be expected to occur in the future are denoted as SC.<br>Long-Term and Short-Term capital gain distributions are denoted as LT and ST, respectively.|
|» ex_dividend_date|string|true|none|The date that the stock first trades without the dividend, determined by the exchange.|
|» frequency|integer|true|none|The number of times per year the dividend is paid out. Possible values are 0 (one-time), 1 (annually), 2 (bi-annually), 4 (quarterly), 12 (monthly), 24 (bi-monthly), and 52 (weekly).|
|» id|string|true|none|The unique identifier of the dividend.|
|» pay_date|string|false|none|The date that the dividend is paid out.|
|» record_date|string|false|none|The date that the stock must be held to receive the dividend, set by the company.|
|» ticker|string|true|none|The ticker symbol of the dividend.|
|status|string|false|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|» dividend_type|CD|
|» dividend_type|SC|
|» dividend_type|LT|
|» dividend_type|ST|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-referenceexchanges">reference:exchanges</h1>

## Exchanges

<a id="opIdListExchanges"></a>

> Code samples

```bash
curl "https://api.polygon.io/v3/reference/exchanges?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/reference/exchanges`

List all exchanges that Massive knows about.

<h3 id="exchanges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_class|query|string|false|Filter by asset class.|
|locale|query|string|false|Filter by locale.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|asset_class|stocks|
|asset_class|options|
|asset_class|crypto|
|asset_class|fx|
|asset_class|futures|
|locale|us|
|locale|global|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": "31d59dda-80e5-4721-8496-d0d32a654afe",
  "results": [
    {
      "acronym": "AMEX",
      "asset_class": "stocks",
      "id": 1,
      "locale": "us",
      "mic": "XASE",
      "name": "NYSE American, LLC",
      "operating_mic": "XNYS",
      "participant_id": "A",
      "type": "exchange",
      "url": "https://www.nyse.com/markets/nyse-american"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "count": 1,
  "request_id": "31d59dda-80e5-4721-8496-d0d32a654afe",
  "status": "OK"
}
```

> default Response

```json
{
  "count": 1,
  "request_id": "31d59dda-80e5-4721-8496-d0d32a654afe",
  "status": "OK"
}
```

<h3 id="exchanges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|a query parameter was malformed|Inline|
|default|Default|an unknown error occurred|Inline|

<h3 id="exchanges-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The total number of results for this request.|
|request_id|string|true|none|A request ID assigned by the server.|
|results|[object]|false|none|An array of results containing the requested data.|
|» acronym|string|false|none|A commonly used abbreviation for this exchange.|
|» asset_class|string|true|none|An identifier for a group of similar financial instruments.|
|» id|integer|true|none|A unique identifier used by Massive for this exchange.|
|» locale|string|true|none|An identifier for a geographical location.|
|» mic|string|false|none|The Market Identifier Code of this exchange (see ISO 10383).|
|» name|string|true|none|Name of this exchange.|
|» operating_mic|string|false|none|The MIC of the entity that operates this exchange.|
|» participant_id|string|false|none|The ID used by SIP's to represent this exchange.|
|» type|string|true|none|Represents the type of exchange.|
|» url|string|false|none|A link to this exchange's website, if one exists.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|» asset_class|stocks|
|» asset_class|options|
|» asset_class|crypto|
|» asset_class|fx|
|» asset_class|futures|
|» locale|us|
|» locale|global|
|» type|exchange|
|» type|TRF|
|» type|SIP|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The total number of results for this request.|
|request_id|string|true|none|A request ID assigned by the server.|
|status|string|true|none|The status of this request's response.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The total number of results for this request.|
|request_id|string|true|none|A request ID assigned by the server.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-referenceoptionscontractslist">reference:options:contracts:list</h1>

## Options Contracts

<a id="opIdListOptionsContracts"></a>

> Code samples

```bash
curl "https://api.polygon.io/v3/reference/options/contracts?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/reference/options/contracts`

Query for historical options contracts. This provides both active and expired options contracts.

<h3 id="options-contracts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|underlying_ticker|query|string|false|Query for contracts relating to an underlying stock ticker.|
|ticker|query|string|false|This parameter has been deprecated. To search by specific options ticker, use the Options Contract endpoint [here](https://massive.com/docs/rest/options/contracts/contract-overview).|
|contract_type|query|string|false|Query by the type of contract.|
|expiration_date|query|string|false|Query by contract expiration with date format YYYY-MM-DD.|
|as_of|query|string|false|Specify a point in time for contracts as of this date with format YYYY-MM-DD. Defaults to today's date.|
|strike_price|query|number|false|Query by strike price of a contract.|
|expired|query|boolean|false|Query for expired contracts. Default is false.|
|underlying_ticker.gte|query|string|false|Range by underlying_ticker.|
|underlying_ticker.gt|query|string|false|Range by underlying_ticker.|
|underlying_ticker.lte|query|string|false|Range by underlying_ticker.|
|underlying_ticker.lt|query|string|false|Range by underlying_ticker.|
|expiration_date.gte|query|string|false|Range by expiration_date.|
|expiration_date.gt|query|string|false|Range by expiration_date.|
|expiration_date.lte|query|string|false|Range by expiration_date.|
|expiration_date.lt|query|string|false|Range by expiration_date.|
|strike_price.gte|query|number|false|Range by strike_price.|
|strike_price.gt|query|number|false|Range by strike_price.|
|strike_price.lte|query|number|false|Range by strike_price.|
|strike_price.lt|query|number|false|Range by strike_price.|
|order|query|string|false|Order results based on the `sort` field.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 1000.|
|sort|query|string|false|Sort field used for ordering.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|contract_type|call|
|contract_type|put|
|order|asc|
|order|desc|
|sort|ticker|
|sort|underlying_ticker|
|sort|expiration_date|
|sort|strike_price|

> Example responses

> 200 Response

```json
{
  "request_id": "603902c0-a5a5-406f-bd08-f030f92418fa",
  "results": [
    {
      "cfi": "OCASPS",
      "contract_type": "call",
      "exercise_style": "american",
      "expiration_date": "2021-11-19",
      "primary_exchange": "BATO",
      "shares_per_contract": 100,
      "strike_price": 85,
      "ticker": "O:AAPL211119C00085000",
      "underlying_ticker": "AAPL"
    },
    {
      "additional_underlyings": [
        {
          "amount": 44,
          "type": "equity",
          "underlying": "VMW"
        },
        {
          "amount": 6.53,
          "type": "currency",
          "underlying": "USD"
        }
      ],
      "cfi": "OCASPS",
      "contract_type": "call",
      "exercise_style": "american",
      "expiration_date": "2021-11-19",
      "primary_exchange": "BATO",
      "shares_per_contract": 100,
      "strike_price": 90,
      "ticker": "O:AAPL211119C00090000",
      "underlying_ticker": "AAPL"
    }
  ],
  "status": "OK"
}
```

<h3 id="options-contracts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of options contracts|Inline|

<h3 id="options-contracts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|false|none|A request id assigned by the server.|
|results|[object]|false|none|An array of results containing the requested data.|
|» additional_underlyings|[object]|false|none|If an option contract has additional underlyings or deliverables associated with it, they will appear here.<br>See <a rel="noopener noreferrer nofollow" target="_blank" href="https://www.optionseducation.org/referencelibrary/faq/splits-mergers-spinoffs-bankruptcies">here</a> for some examples of what might cause a contract to have additional underlyings.|
|» » amount|number|false|none|The number of shares per contract of the additional underlying, or the cash-in-lieu amount of the currency.|
|» » type|string|false|none|The type of the additional underlying asset, either equity or currency.|
|» » underlying|string|false|none|The name of the additional underlying asset.|
|» cfi|string|false|none|The 6 letter CFI code of the contract (defined in <a rel="nofollow" target="_blank" href="https://en.wikipedia.org/wiki/ISO_10962">ISO 10962</a>)|
|» contract_type|string|false|none|The type of contract. Can be "put", "call", or in some rare cases, "other".|
|» correction|integer|false|none|The correction number for this option contract.|
|» exercise_style|string|false|none|The exercise style of this contract. See <a rel="nofollow" target="_blank" href="https://en.wikipedia.org/wiki/Option_style">this link</a> for more details on exercise styles.|
|» expiration_date|string|false|none|The contract's expiration date in YYYY-MM-DD format.|
|» primary_exchange|string|false|none|The MIC code of the primary exchange that this contract is listed on.|
|» shares_per_contract|number|false|none|The number of shares per contract for this contract.|
|» strike_price|number|false|none|The strike price of the option contract.|
|» ticker|string|false|none|The ticker for the option contract.|
|» underlying_ticker|string|false|none|The underlying ticker that the option contract relates to.|
|status|string|false|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|» exercise_style|american|
|» exercise_style|european|
|» exercise_style|bermudan|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-referenceoptionscontract">reference:options:contract</h1>

## Options Contract

<a id="opIdGetOptionsContract"></a>

> Code samples

```bash
curl "https://api.polygon.io/v3/reference/options/contracts/O%3ASPY251219C00650000?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/reference/options/contracts/{options_ticker}`

Get an options contract

<h3 id="options-contract-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|options_ticker|path|string|true|Query for a contract by options ticker. You can learn more about the structure of options tickers [here](https://massive.com/blog/how-to-read-a-stock-options-ticker/).|
|as_of|query|string|false|Specify a point in time for the contract as of this date with format YYYY-MM-DD. Defaults to today's date.|

> Example responses

> 200 Response

```json
{
  "request_id": "603902c0-a5a5-406f-bd08-f030f92418fa",
  "results": {
    "additional_underlyings": [
      {
        "amount": 44,
        "type": "equity",
        "underlying": "VMW"
      },
      {
        "amount": 6.53,
        "type": "currency",
        "underlying": "USD"
      }
    ],
    "cfi": "OCASPS",
    "contract_type": "call",
    "exercise_style": "american",
    "expiration_date": "2021-11-19",
    "primary_exchange": "BATO",
    "shares_per_contract": 100,
    "strike_price": 85,
    "ticker": "O:AAPL211119C00085000",
    "underlying_ticker": "AAPL"
  },
  "status": "OK"
}
```

<h3 id="options-contract-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A specific options contract|Inline|

<h3 id="options-contract-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string|false|none|A request id assigned by the server.|
|results|object|false|none|Contains the requested data for the specified options contract.|
|» additional_underlyings|[object]|false|none|If an option contract has additional underlyings or deliverables associated with it, they will appear here.<br>See <a rel="noopener noreferrer nofollow" target="_blank" href="https://www.optionseducation.org/referencelibrary/faq/splits-mergers-spinoffs-bankruptcies">here</a> for some examples of what might cause a contract to have additional underlyings.|
|» » amount|number|false|none|The number of shares per contract of the additional underlying, or the cash-in-lieu amount of the currency.|
|» » type|string|false|none|The type of the additional underlying asset, either equity or currency.|
|» » underlying|string|false|none|The name of the additional underlying asset.|
|» cfi|string|false|none|The 6 letter CFI code of the contract (defined in <a rel="nofollow" target="_blank" href="https://en.wikipedia.org/wiki/ISO_10962">ISO 10962</a>)|
|» contract_type|string|false|none|The type of contract. Can be "put", "call", or in some rare cases, "other".|
|» correction|integer|false|none|The correction number for this option contract.|
|» exercise_style|string|false|none|The exercise style of this contract. See <a rel="nofollow" target="_blank" href="https://en.wikipedia.org/wiki/Option_style">this link</a> for more details on exercise styles.|
|» expiration_date|string|false|none|The contract's expiration date in YYYY-MM-DD format.|
|» primary_exchange|string|false|none|The MIC code of the primary exchange that this contract is listed on.|
|» shares_per_contract|number|false|none|The number of shares per contract for this contract.|
|» strike_price|number|false|none|The strike price of the option contract.|
|» ticker|string|false|none|The ticker for the option contract.|
|» underlying_ticker|string|false|none|The underlying ticker that the option contract relates to.|
|status|string|false|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|» exercise_style|american|
|» exercise_style|european|
|» exercise_style|bermudan|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-referencestocks">reference:stocks</h1>

## Stock Splits v3

<a id="opIdListStockSplits"></a>

> Code samples

```bash
curl "https://api.polygon.io/v3/reference/splits?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/reference/splits`

Get a list of historical stock splits, including the ticker symbol, the execution date, and the factors of the split ratio.

<h3 id="stock-splits-v3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|query|string|false|Specify a case-sensitive ticker symbol. For example, AAPL represents Apple Inc.|
|execution_date|query|string(date)|false|Query by execution date with the format YYYY-MM-DD.|
|reverse_split|query|boolean \| null|false|Query for reverse stock splits. A split ratio where split_from is greater than split_to represents a reverse split. By default this filter is not used.|
|ticker.gte|query|string|false|Range by ticker.|
|ticker.gt|query|string|false|Range by ticker.|
|ticker.lte|query|string|false|Range by ticker.|
|ticker.lt|query|string|false|Range by ticker.|
|execution_date.gte|query|string(date)|false|Range by execution_date.|
|execution_date.gt|query|string(date)|false|Range by execution_date.|
|execution_date.lte|query|string(date)|false|Range by execution_date.|
|execution_date.lt|query|string(date)|false|Range by execution_date.|
|order|query|string|false|Order results based on the `sort` field.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 1000.|
|sort|query|string|false|Sort field used for ordering.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|
|sort|execution_date|
|sort|ticker|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v3/splits/AAPL?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "6a7e466379af0a71039d60cc78e72282",
  "results": [
    {
      "execution_date": "2020-08-31",
      "id": "E36416cce743c3964c5da63e1ef1626c0aece30fb47302eea5a49c0055c04e8d0",
      "split_from": 1,
      "split_to": 4,
      "ticker": "AAPL"
    },
    {
      "execution_date": "2005-02-28",
      "id": "E90a77bdf742661741ed7c8fc086415f0457c2816c45899d73aaa88bdc8ff6025",
      "split_from": 1,
      "split_to": 2,
      "ticker": "AAPL"
    }
  ],
  "status": "OK"
}
```

<h3 id="stock-splits-v3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of stock splits.|Inline|

<h3 id="stock-splits-v3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|false|none|A request id assigned by the server.|
|results|[object]|false|none|An array of results containing the requested data.|
|» execution_date|string|true|none|The execution date of the stock split. On this date the stock split was applied.|
|» id|string|true|none|The unique identifier for this stock split.|
|» split_from|number(float)|true|none|The second number in the split ratio.<br><br>For example: In a 2-for-1 split, split_from would be 1.|
|» split_to|number(float)|true|none|The first number in the split ratio.<br><br>For example: In a 2-for-1 split, split_to would be 2.|
|» ticker|string|true|none|The ticker symbol of the stock split.|
|status|string|false|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-referencetickerslist">reference:tickers:list</h1>

## Tickers

<a id="opIdListTickers"></a>

> Code samples

```bash
curl "https://api.polygon.io/v3/reference/tickers?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/reference/tickers`

Query all ticker symbols which are supported by Massive. This API currently includes Stocks/Equities, Indices, Forex, and Crypto.

<h3 id="tickers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|query|string|false|Specify a ticker symbol.<br>Defaults to empty string which queries all tickers.|
|type|query|string|false|Specify the type of the tickers. Find the types that we support via our [Ticker Types API](https://massive.com/docs/rest/stocks/tickers/ticker-types).<br>Defaults to empty string which queries all types.|
|market|query|string|false|Filter by market type. By default all markets are included.|
|exchange|query|string|false|Specify the asset's primary exchange Market Identifier Code (MIC) according to [ISO 10383](https://www.iso20022.org/market-identifier-codes).<br>Defaults to empty string which queries all exchanges.|
|cusip|query|string|false|Specify the CUSIP code of the asset you want to search for. Find more information about CUSIP codes [at their website](https://www.cusip.com/identifiers.html#/CUSIP).<br>Defaults to empty string which queries all CUSIPs.<br><br>Note: Although you can query by CUSIP, due to legal reasons we do not return the CUSIP in the response.|
|cik|query|string|false|Specify the CIK of the asset you want to search for. Find more information about CIK codes [at their website](https://www.sec.gov/edgar/searchedgar/cik.htm).<br>Defaults to empty string which queries all CIKs.|
|date|query|string(date)|false|Specify a point in time to retrieve tickers available on that date.<br>Defaults to the most recent available date.|
|search|query|string|false|Search for terms within the ticker and/or company name.|
|active|query|boolean|false|Specify if the tickers returned should be actively traded on the queried date. Default is true.|
|ticker.gte|query|string|false|Range by ticker.|
|ticker.gt|query|string|false|Range by ticker.|
|ticker.lte|query|string|false|Range by ticker.|
|ticker.lt|query|string|false|Range by ticker.|
|order|query|string|false|Order results based on the `sort` field.|
|limit|query|integer|false|Limit the number of results returned, default is 100 and max is 1000.|
|sort|query|string|false|Sort field used for ordering.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|CS|
|type|ADRC|
|type|ADRP|
|type|ADRR|
|type|UNIT|
|type|RIGHT|
|type|PFD|
|type|FUND|
|type|SP|
|type|WARRANT|
|type|INDEX|
|type|ETF|
|type|ETN|
|type|OS|
|type|GDR|
|type|OTHER|
|type|NYRS|
|type|AGEN|
|type|EQLK|
|type|BOND|
|type|ADRW|
|type|BASKET|
|type|LT|
|market|stocks|
|market|crypto|
|market|fx|
|market|otc|
|market|indices|
|order|asc|
|order|desc|
|sort|ticker|
|sort|name|
|sort|market|
|sort|locale|
|sort|primary_exchange|
|sort|type|
|sort|currency_symbol|
|sort|currency_name|
|sort|base_currency_symbol|
|sort|base_currency_name|
|sort|cik|
|sort|composite_figi|
|sort|share_class_figi|
|sort|last_updated_utc|
|sort|delisted_utc|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "next_url": "https://api.polygon.io/v3/reference/tickers?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "e70013d92930de90e089dc8fa098888e",
  "results": [
    {
      "active": true,
      "cik": "0001090872",
      "composite_figi": "BBG000BWQYZ5",
      "currency_name": "usd",
      "last_updated_utc": "2021-04-25T00:00:00Z",
      "locale": "us",
      "market": "stocks",
      "name": "Agilent Technologies Inc.",
      "primary_exchange": "XNYS",
      "share_class_figi": "BBG001SCTQY4",
      "ticker": "A",
      "type": "CS"
    }
  ],
  "status": "OK"
}
```

<h3 id="tickers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reference Tickers.|Inline|
|401|Unauthorized|Unauthorized - Check our API Key and account status|None|

<h3 id="tickers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The total number of results for this request.|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|false|none|A request id assigned by the server.|
|results|[object]|false|none|An array of tickers that match your query.<br><br>Note: Although you can query by CUSIP, due to legal reasons we do not return the CUSIP in the response.|
|» active|boolean|false|none|Whether or not the asset is actively traded. False means the asset has been delisted.|
|» base_currency_name|string|false|none|The name of the currency that this asset is priced against.|
|» base_currency_symbol|string|false|none|The ISO 4217 code of the currency that this asset is priced against.|
|» cik|string|false|none|The CIK number for this ticker. Find more information [here](https://en.wikipedia.org/wiki/Central_Index_Key).|
|» composite_figi|string|false|none|The composite OpenFIGI number for this ticker. Find more information [here](https://www.openfigi.com/about/figi)|
|» currency_name|string|false|none|The name of the currency that this asset is traded with.|
|» currency_symbol|string|false|none|The ISO 4217 code of the currency that this asset is traded with.|
|» delisted_utc|string(date-time)|false|none|The last date that the asset was traded.|
|» last_updated_utc|string(date-time)|false|none|The information is accurate up to this time.|
|» locale|string|true|none|The locale of the asset.|
|» market|string|true|none|The market type of the asset.|
|» name|string|true|none|The name of the asset. For stocks/equities this will be the companies registered name. For crypto/fx this will be the name of the currency or coin pair.|
|» primary_exchange|string|false|none|The ISO code of the primary listing exchange for this asset.|
|» share_class_figi|string|false|none|The share Class OpenFIGI number for this ticker. Find more information [here](https://www.openfigi.com/about/figi)|
|» ticker|string|true|none|The exchange symbol that this item is traded under.|
|» type|string|false|none|The type of the asset. Find the types that we support via our [Ticker Types API](https://massive.com/docs/rest/stocks/tickers/ticker-types).|
|status|string|false|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|» locale|us|
|» locale|global|
|» market|stocks|
|» market|crypto|
|» market|fx|
|» market|otc|
|» market|indices|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-referencetickerstypes">reference:tickers:types</h1>

## Ticker Types

<a id="opIdListTickerTypes"></a>

> Code samples

```bash
curl "https://api.polygon.io/v3/reference/tickers/types?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/reference/tickers/types`

List all ticker types that Massive has.

<h3 id="ticker-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_class|query|string|false|Filter by asset class.|
|locale|query|string|false|Filter by locale.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|asset_class|stocks|
|asset_class|options|
|asset_class|crypto|
|asset_class|fx|
|asset_class|indices|
|locale|us|
|locale|global|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "request_id": "31d59dda-80e5-4721-8496-d0d32a654afe",
  "results": [
    {
      "asset_class": "stocks",
      "code": "CS",
      "description": "Common Stock",
      "locale": "us"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "count": 1,
  "request_id": "31d59dda-80e5-4721-8496-d0d32a654afe",
  "status": "OK"
}
```

> default Response

```json
{
  "count": 1,
  "request_id": "31d59dda-80e5-4721-8496-d0d32a654afe",
  "status": "OK"
}
```

<h3 id="ticker-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|a query parameter was malformed|Inline|
|default|Default|an unknown error occurred|Inline|

<h3 id="ticker-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The total number of results for this request.|
|request_id|string|true|none|A request ID assigned by the server.|
|results|[object]|false|none|An array of results containing the requested data.|
|» asset_class|string|true|none|An identifier for a group of similar financial instruments.|
|» code|string|true|none|A code used by Massive to refer to this ticker type.|
|» description|string|true|none|A short description of this ticker type.|
|» locale|string|true|none|An identifier for a geographical location.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|» asset_class|stocks|
|» asset_class|options|
|» asset_class|crypto|
|» asset_class|fx|
|» asset_class|indices|
|» locale|us|
|» locale|global|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The total number of results for this request.|
|request_id|string|true|none|A request ID assigned by the server.|
|status|string|true|none|The status of this request's response.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The total number of results for this request.|
|request_id|string|true|none|A request ID assigned by the server.|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-referencetickersget">reference:tickers:get</h1>

## Ticker Details v3

<a id="opIdGetTicker"></a>

> Code samples

```bash
curl "https://api.polygon.io/v3/reference/tickers/AAPL?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/reference/tickers/{ticker}`

Get a single ticker supported by Massive. This response will have detailed information about the ticker and the company behind it.

<h3 id="ticker-details-v3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|path|string|true|Specify a case-sensitive ticker symbol. For example, AAPL represents Apple Inc.|
|date|query|string(date)|false|Specify a point in time to get information about the ticker available on that date.<br>Fields that describe the security, including name, type, primary_exchange and list_date, reflect the security trading under this ticker on that date.<br>For example, ASND returns type ADRC and list_date 2015-01-28 for 2026-04-17, and type CS and list_date 2026-04-20 from 2026-04-20, when its American Depositary Shares were exchanged for ordinary shares.<br>Some fields may be empty for older dates.<br><br>When retrieving information from SEC filings, we compare this date with the period of report date on the SEC filing.<br><br>For example, consider an SEC filing submitted by AAPL on 2019-07-31, with a period of report date ending on 2019-06-29.<br>That means that the filing was submitted on 2019-07-31, but the filing was created based on information from 2019-06-29.<br>If you were to query for AAPL details on 2019-06-29, the ticker details would include information from the SEC filing.<br><br>Defaults to the most recent available date.|

> Example responses

> 200 Response

```json
{
  "request_id": "31d59dda-80e5-4721-8496-d0d32a654afe",
  "results": {
    "active": true,
    "address": {
      "address1": "One Apple Park Way",
      "city": "Cupertino",
      "postal_code": "95014",
      "state": "CA"
    },
    "branding": {
      "icon_url": "https://api.polygon.io/v1/reference/company-branding/d3d3LmFwcGxlLmNvbQ/images/2022-01-10_icon.png",
      "logo_url": "https://api.polygon.io/v1/reference/company-branding/d3d3LmFwcGxlLmNvbQ/images/2022-01-10_logo.svg"
    },
    "cik": "0000320193",
    "composite_figi": "BBG000B9XRY4",
    "currency_name": "usd",
    "description": "Apple designs a wide variety of consumer electronic devices, including smartphones (iPhone), tablets (iPad), PCs (Mac), smartwatches (Apple Watch), AirPods, and TV boxes (Apple TV), among others. The iPhone makes up the majority of Apple's total revenue. In addition, Apple offers its customers a variety of services such as Apple Music, iCloud, Apple Care, Apple TV+, Apple Arcade, Apple Card, and Apple Pay, among others. Apple's products run internally developed software and semiconductors, and the firm is well known for its integration of hardware, software and services. Apple's products are distributed online as well as through company-owned stores and third-party retailers. The company generates roughly 40% of its revenue from the Americas, with the remainder earned internationally.",
    "homepage_url": "https://www.apple.com",
    "list_date": "1980-12-12",
    "locale": "us",
    "market": "stocks",
    "market_cap": 2771126040150,
    "name": "Apple Inc.",
    "phone_number": "(408) 996-1010",
    "primary_exchange": "XNAS",
    "round_lot": 100,
    "share_class_figi": "BBG001S5N8V8",
    "share_class_shares_outstanding": 16406400000,
    "sic_code": "3571",
    "sic_description": "ELECTRONIC COMPUTERS",
    "ticker": "AAPL",
    "ticker_root": "AAPL",
    "total_employees": 154000,
    "type": "CS",
    "weighted_shares_outstanding": 16334371000
  },
  "status": "OK"
}
```

<h3 id="ticker-details-v3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reference Tickers.|Inline|
|401|Unauthorized|Unauthorized - Check our API Key and account status|None|

<h3 id="ticker-details-v3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The total number of results for this request.|
|request_id|string|false|none|A request id assigned by the server.|
|results|object|false|none|Ticker with details.|
|» active|boolean|true|none|Whether or not the asset is actively traded. False means the asset has been delisted.|
|» address|object|false|none|Company headquarters address details.|
|» » address1|string|false|none|The first line of the company's headquarters address.|
|» » address2|string|false|none|The second line of the company's headquarters address, if applicable.|
|» » city|string|false|none|The city of the company's headquarters address.|
|» » postal_code|string|false|none|The postal code of the company's headquarters address.|
|» » state|string|false|none|The state of the company's headquarters address.|
|» branding|object|false|none|Provides URLs aiding in visual identification.|
|» » icon_url|string|false|none|A link to this ticker's company's icon. Icon's are generally smaller, square images that represent the company at a glance.<br>Note that you must provide an API key when accessing this URL. See the "Authentication" section at the top of this page for more details.|
|» » logo_url|string|false|none|A link to this ticker's company's logo.<br>Note that you must provide an API key when accessing this URL. See the "Authentication" section at the top of this page for more details.|
|» cik|string|false|none|The CIK number for this ticker. Find more information [here](https://en.wikipedia.org/wiki/Central_Index_Key).|
|» composite_figi|string|false|none|The composite OpenFIGI number for this ticker. Find more information [here](https://www.openfigi.com/about/figi)|
|» currency_name|string|true|none|The name of the currency that this asset is traded with.|
|» delisted_utc|string(date-time)|false|none|The last date that the asset was traded.|
|» description|string|false|none|A description of the company and what they do/offer.|
|» homepage_url|string|false|none|The URL of the company's website homepage.|
|» list_date|string|false|none|The date the security currently trading under this ticker was first publicly listed, in the format YYYY-MM-DD.<br>If a corporate action replaces the security behind the ticker, such as American Depositary Shares being exchanged for ordinary shares under the same symbol, this is the new security's listing date.<br>A move to a different exchange does not change it.<br>Use the date parameter to get the value as of an earlier date.|
|» locale|string|true|none|The locale of the asset.|
|» market|string|true|none|The market type of the asset.|
|» market_cap|number(double)|false|none|The most recent close price of the ticker multiplied by weighted outstanding shares.|
|» name|string|true|none|The name of the asset. For stocks/equities this will be the companies registered name. For crypto/fx this will be the name of the currency or coin pair.|
|» phone_number|string|false|none|The phone number for the company behind this ticker.|
|» primary_exchange|string|false|none|The ISO code of the primary listing exchange for this asset.|
|» round_lot|number(double)|false|none|Round lot size of this security.|
|» share_class_figi|string|false|none|The share Class OpenFIGI number for this ticker. Find more information [here](https://www.openfigi.com/about/figi)|
|» share_class_shares_outstanding|number(double)|false|none|The recorded number of outstanding shares for this particular share class.|
|» sic_code|string|false|none|The standard industrial classification code for this ticker.  For a list of SIC Codes, see the SEC's <a rel="nofollow" target="_blank" href="https://www.sec.gov/info/edgar/siccodes.htm">SIC Code List</a>.|
|» sic_description|string|false|none|A description of this ticker's SIC code.|
|» ticker|string|true|none|The exchange symbol that this item is traded under.|
|» ticker_root|string|false|none|The root of a specified ticker. For example, the root of BRK.A is BRK.|
|» ticker_suffix|string|false|none|The suffix of a specified ticker. For example, the suffix of BRK.A is A.|
|» total_employees|number|false|none|The approximate number of employees for the company.|
|» type|string|false|none|The type of the asset. Find the types that we support via our [Ticker Types API](https://massive.com/docs/rest/stocks/tickers/ticker-types).|
|» weighted_shares_outstanding|number(double)|false|none|The shares outstanding calculated assuming all shares of other share classes are converted to this share class.|
|status|string|false|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|» locale|us|
|» locale|global|
|» market|stocks|
|» market|crypto|
|» market|fx|
|» market|otc|
|» market|indices|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Ticker Events

<a id="opIdGetEvents"></a>

> Code samples

```bash
curl "https://api.polygon.io/vX/reference/tickers/META/events?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /vX/reference/tickers/{id}/events`

Get a timeline of events for the entity associated with the given ticker, CUSIP, or Composite FIGI.

<h3 id="ticker-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifier of an asset, which can be a Ticker, CUSIP, or Composite FIGI. Specify a case-sensitive <br>ticker symbol (e.g. AAPL for Apple Inc). When provided a ticker, events for the entity currently <br>represented by that ticker are returned. To find events for entities previously associated with a <br>ticker, obtain the relevant identifier using the [Ticker Details Endpoint](https://massive.com/docs/rest/stocks/tickers/ticker-overview).|
|types|query|string|false|A comma-separated list of the types of event to include. Currently ticker_change is the only supported event_type.<br>Leave blank to return all supported event_types.|

> Example responses

> 200 Response

```json
{
  "request_id": "31d59dda-80e5-4721-8496-d0d32a654afe",
  "results": {
    "events": [
      {
        "date": "2022-06-09",
        "ticker_change": {
          "ticker": "META"
        },
        "type": "ticker_change"
      },
      {
        "date": "2012-05-18",
        "ticker_change": {
          "ticker": "FB"
        },
        "type": "ticker_change"
      }
    ],
    "name": "Meta Platforms, Inc. Class A Common Stock"
  },
  "status": "OK"
}
```

<h3 id="ticker-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ticker Events.|Inline|
|401|Unauthorized|Unauthorized - Check our API Key and account status|None|

<h3 id="ticker-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string|false|none|A request id assigned by the server.|
|results|object|false|none|Contains the requested event data for the specified ticker.|
|» events|[object]|false|none|An array of event containing the requested data.|
|» » *oneOf*|object|false|none|none|
|» » date|string(date)|true|none|The date the event took place|
|» » event_type|string|true|none|The type of historical event for the asset|
|» » ticker_change|object|false|none|Details about a ticker change|
|» » » ticker|string|false|none|A ticker symbol|
|» name|string|false|none|The name of the asset.|
|status|string|false|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-default">Default</h1>

## Universal Snapshot

<a id="opIdSnapshots"></a>

> Code samples

```bash
curl "https://api.polygon.io/v3/snapshot?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/snapshot`

Get snapshots for assets of all types

<h3 id="universal-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|query|string|false|Specify a single ticker symbol. Ticker symbols are case-sensitive and use a prefix for non-stock assets, for example NVDA for stocks, O:SPY280121C00750000 for options, C:EURUSD for forex, X:BTCUSD for crypto, and I:SPX for indices. To request more than one ticker or a range of tickers, expand the filter modifiers.|
|type|query|string|false|Query by the type of asset.|
|ticker.gte|query|string|false|Range by ticker.|
|ticker.gt|query|string|false|Range by ticker.|
|ticker.lte|query|string|false|Range by ticker.|
|ticker.lt|query|string|false|Range by ticker.|
|ticker.any_of|query|string|false|Comma separated list of tickers, up to a maximum of 250. If no tickers are passed then all results will be returned in a paginated manner.<br><br>Warning: The maximum number of characters allowed in a URL are subject to your technology stack.<br>|
|order|query|string|false|Order results based on the `sort` field.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 250.|
|sort|query|string|false|Sort field used for ordering.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|stocks|
|type|options|
|type|crypto|
|type|fx|
|type|indices|
|order|asc|
|order|desc|
|sort|ticker|

> Example responses

> 200 Response

```json
{
  "request_id": "abc123",
  "results": [
    {
      "break_even_price": 171.075,
      "details": {
        "contract_type": "call",
        "exercise_style": "american",
        "expiration_date": "2022-10-14",
        "shares_per_contract": 100,
        "strike_price": 5,
        "underlying_ticker": "NCLH"
      },
      "fmv": 0.05,
      "fmv_last_updated": 1636573458757383400,
      "greeks": {
        "delta": 0.5520187372272933,
        "gamma": 0.00706756515659829,
        "theta": -0.018532772783847958,
        "vega": 0.7274811132998142
      },
      "implied_volatility": 0.3048997097864957,
      "last_quote": {
        "ask": 21.25,
        "ask_exchange": 12,
        "ask_size": 110,
        "bid": 20.9,
        "bid_exchange": 10,
        "bid_size": 172,
        "last_updated": 1636573458756383500,
        "midpoint": 21.075,
        "timeframe": "REAL-TIME"
      },
      "last_trade": {
        "conditions": [
          209
        ],
        "exchange": 316,
        "price": 0.05,
        "sip_timestamp": 1675280958783136800,
        "size": 2,
        "timeframe": "REAL-TIME"
      },
      "market_status": "closed",
      "name": "NCLH $5 Call",
      "open_interest": 8921,
      "session": {
        "change": -0.05,
        "change_percent": -1.07,
        "close": 6.65,
        "decimal_volume": "67.0",
        "early_trading_change": -0.01,
        "early_trading_change_percent": -0.03,
        "high": 7.01,
        "late_trading_change": -0.4,
        "late_trading_change_percent": -0.02,
        "low": 5.42,
        "open": 6.7,
        "previous_close": 6.71,
        "regular_trading_change": -0.6,
        "regular_trading_change_percent": -0.5,
        "volume": 67
      },
      "ticker": "O:NCLH221014C00005000",
      "type": "options",
      "underlying_asset": {
        "change_to_break_even": 23.123999999999995,
        "last_updated": 1636573459862384600,
        "price": 147.951,
        "ticker": "AAPL",
        "timeframe": "REAL-TIME"
      }
    },
    {
      "fmv": 0.05,
      "fmv_last_updated": 1636573458757383400,
      "last_minute": {
        "close": 412.05,
        "decimal_volume": "610.0",
        "high": 412.1,
        "low": 412.05,
        "open": 412.1,
        "transactions": 26,
        "volume": 610,
        "vwap": 412.0881
      },
      "last_quote": {
        "ask": 21.25,
        "ask_exchange": 300,
        "ask_size": 110,
        "bid": 20.9,
        "bid_exchange": 323,
        "bid_size": 172,
        "last_updated": 1636573458756383500,
        "timeframe": "REAL-TIME"
      },
      "last_trade": {
        "conditions": [
          209
        ],
        "decimal_size": "2.0",
        "exchange": 316,
        "id": "4064",
        "last_updated": 1675280958783136800,
        "price": 0.05,
        "size": 2,
        "timeframe": "REAL-TIME"
      },
      "market_status": "closed",
      "name": "Apple Inc.",
      "session": {
        "change": -1.05,
        "change_percent": -4.67,
        "close": 21.4,
        "decimal_volume": "37.0",
        "early_trading_change": -0.39,
        "early_trading_change_percent": -0.07,
        "high": 22.49,
        "late_trading_change": 1.2,
        "late_trading_change_percent": 3.92,
        "low": 21.35,
        "open": 22.49,
        "previous_close": 22.45,
        "volume": 37
      },
      "ticker": "AAPL",
      "type": "stocks"
    },
    {
      "error": "NOT_FOUND",
      "message": "Ticker not found.",
      "ticker": "TSLAAPL"
    }
  ],
  "status": "OK"
}
```

<h3 id="universal-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Snapshots for the ticker list|Inline|

<h3 id="universal-snapshot-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|false|none|An array of results containing the requested data.|
|» break_even_price|number(double)|false|none|The price of the underlying asset for the contract to break even. For a call, this value is (strike price + premium paid). For a put, this value is (strike price - premium paid).|
|» details|object|false|none|The details for this contract.|
|» » contract_type|string|true|none|The type of contract. Can be "put", "call", or in some rare cases, "other".|
|» » exercise_style|string|true|none|The exercise style of this contract. See <a rel="nofollow" target="_blank" href="https://en.wikipedia.org/wiki/Option_style">this link</a> for more details on exercise styles.|
|» » expiration_date|string(date)|true|none|The contract's expiration date in YYYY-MM-DD format.|
|» » shares_per_contract|number|true|none|The number of shares per contract for this contract.|
|» » strike_price|number(double)|true|none|The strike price of the option contract.|
|» error|string|false|none|The error while looking for this ticker.|
|» fmv|number|false|none|Fair Market Value is only available on Business plans. It is our proprietary algorithm to generate a real-time, accurate, fair market value of a tradable security.<br>For more information, <a rel="nofollow" target="_blank" href="https://massive.com/contact">contact us</a>.|
|» fmv_last_updated|integer(int64)|false|none|If Fair Market Value (FMV) is available, this field is the nanosecond timestamp of the last FMV calculation.|
|» greeks|object|false|none|The greeks for this contract.<br>There are certain circumstances where greeks will not be returned, such as options contracts that are deep in the money.<br>See this <a href="https://massive.com/blog/greeks-and-implied-volatility/#testing"<br>alt="link">article</a> for more information.|
|» » delta|number(double)|true|none|The change in the option's price per $0.01 increment in the price of the underlying asset.|
|» » gamma|number(double)|true|none|The change in delta per $0.01 change in the price of the underlying asset.|
|» » theta|number(double)|true|none|The change in the option's price per day.|
|» » vega|number(double)|true|none|The change in the option's price per 1% increment in volatility.|
|» implied_volatility|number(double)|false|none|The market's forecast for the volatility of the underlying asset, based on this option's current price.|
|» last_minute|object|false|none|The most recent minute aggregate for this stock.|
|» » close|number(double)|true|none|The closing value for the minute aggreate.|
|» » decimal_volume|string|false|none|The trading volume for the minute aggregate with decimal precision. This field provides support for fractional shares, representing volume as a decimal string where the fractional part is expressed in millionths. This field is only returned for stocks snapshots.|
|» » high|number(double)|true|none|The highest value for the minute aggregate.|
|» » low|number(double)|true|none|The lowest value for the minute aggregate.|
|» » open|number(double)|true|none|The open value for the minute aggregate.|
|» » transactions|integer(int32)|true|none|The number of transactions that took place within the minute aggregate.|
|» » volume|number(double)|true|none|The trading volume for the minute aggregate.|
|» » vwap|number(double)|true|none|The trading volume weighted average price for the minute aggregate.|
|» last_quote|object|false|none|The most recent quote for this contract. This is only returned if your current plan includes quotes.|
|» » ask|number(double)|true|none|The ask price.|
|» » ask_exchange|integer|false|none|The ask side exchange ID. See <a href="https://massive.com/docs/rest/options/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» » ask_size|number(double)|false|none|The ask size. This represents the number of shares, or contracts for options, sellers are offering at the given ask price.|
|» » bid|number(double)|true|none|The bid price.|
|» » bid_exchange|integer|false|none|The bid side exchange ID. See <a href="https://massive.com/docs/rest/options/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» » bid_size|number(double)|false|none|The bid size. This represents the number of shares, or contracts for options, buyers are bidding for at the given bid price.|
|» » last_updated|integer(int64)|true|none|The nanosecond timestamp of when this information was updated.|
|» » midpoint|number(double)|false|none|The average of the bid and ask price.|
|» » timeframe|string|true|none|The time relevance of the data.|
|» last_trade|object|false|none|The most recent quote for this contract. This is only returned if your current plan includes trades.|
|» » conditions|[integer(int32)]|false|none|A list of condition codes. The codes depend on the asset type; see the condition codes for [stocks](https://massive.com/docs/rest/stocks/market-operations/condition-codes), [options](https://massive.com/docs/rest/options/market-operations/condition-codes), or [crypto](https://massive.com/docs/rest/crypto/market-operations/condition-codes).|
|» » decimal_size|string|false|none|The size of a trade, including fractional shares, represented as a decimal string where the fractional part is expressed in millionths. This field is only returned for stocks snapshots.|
|» » exchange|integer|false|none|The exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» » id|string|false|none|The Trade ID which uniquely identifies a trade. These are unique per combination of ticker, exchange, and TRF. For example: A trade for AAPL executed on NYSE and a trade for AAPL executed on NASDAQ could potentially have the same Trade ID.|
|» » last_updated|integer(int64)|false|none|The nanosecond timestamp of when this information was updated.|
|» » participant_timestamp|integer(int64)|false|none|The nanosecond Exchange Unix Timestamp. This is the timestamp of when the trade was generated at the exchange.|
|» » price|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.|
|» » sip_timestamp|integer(int64)|false|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this trade from the exchange which produced it.|
|» » size|integer(int32)|true|none|The size of a trade (also known as volume).|
|» » timeframe|string|false|none|The time relevance of the data.|
|» last_updated|integer(int64)|false|none|The nanosecond timestamp of when this information was updated.|
|» market_status|string|false|none|The market status for the market that trades this ticker. Possible values for stocks, options, crypto, and forex snapshots are open, closed, early_trading, or late_trading.<br>Possible values for indices snapshots are regular_trading, closed, early_trading, and late_trading.|
|» message|string|false|none|The error message while looking for this ticker.|
|» name|string|false|none|The name of this contract.|
|» open_interest|number(double)|false|none|The quantity of this contract held at the end of the last trading day.|
|» session|object|false|none|Comprehensive trading session metrics, detailing price changes, trading volume, and key price points (open, close, high, low) for the asset within the current trading day. Includes specific changes during early, regular, and late trading periods to enable detailed performance analysis and trend tracking.<br><br>Values describe the current trading session only; nothing carries over from the previous session apart from `previous_close`. For stocks snapshots, an asset that has not traded yet this session reports `volume: 0` with the price and change fields omitted rather than reported as 0.<br><br>During early trading on stocks snapshots, `volume` and `price` track the session as it happens, but `open`, `high`, `low`, `close` and `vwap` are omitted until the regular session opens, as those report official session prices. They appear from the open and remain through late trading.|
|» » change|number(double)|false|none|The value of the price change for the asset from the previous trading day.|
|» » change_percent|number(double)|false|none|The percent of the price change for the asset from the previous trading day.|
|» » close|number(double)|false|none|The closing price of the asset for the day.|
|» » decimal_volume|string|false|none|The trading volume for the asset for the day with decimal precision. This field provides support for fractional shares, representing volume as a decimal string. This field is only returned for stocks snapshots.|
|» » early_trading_change|number(double)|false|none|Today's early trading change amount, difference between price and previous close if in early trading hours, otherwise difference between last price during early trading and previous close.|
|» » early_trading_change_percent|number(double)|false|none|Today's early trading change as a percentage.|
|» » high|number(double)|false|none|The highest price of the asset for the day.|
|» » late_trading_change|number(double)|false|none|Today's late trading change amount, difference between price and today's close if in late trading hours, otherwise difference between last price during late trading and today's close.|
|» » late_trading_change_percent|number(double)|false|none|Today's late trading change as a percentage.|
|» » low|number(double)|false|none|The lowest price of the asset for the day.|
|» » open|number(double)|false|none|The open price of the asset for the day.|
|» » previous_close|number(double)|false|none|The closing price of the asset for the previous trading day. This is the correct field for the prior session's reference price, and it is retained across the daily session rollover. It is absent only for an asset with no completed prior session, such as a newly listed ticker or option contract.|
|» » price|number(double)|false|none|The price of the most recent trade or bid price for this asset.|
|» » regular_trading_change|number(double)|false|none|Today's change in regular trading hours, difference between current price and previous trading day's close, otherwise difference between today's close and previous day's close.|
|» » regular_trading_change_percent|number(double)|false|none|Today's regular trading change as a percentage.|
|» » volume|number(double)|false|none|The trading volume for the asset for the day. A value of 0 means no trades have occurred yet in the current session.|
|» ticker|string|true|none|The ticker symbol for the asset.|
|» timeframe|string|false|none|The time relevance of the data.|
|» type|string|false|none|The asset class for this ticker.|
|» underlying_asset|object|false|none|Information on the underlying stock for this options contract.  The market data returned depends on your current stocks plan.|
|» » change_to_break_even|number(double)|true|none|The change in price for the contract to break even.|
|» » last_updated|integer(int64)|false|none|The nanosecond timestamp of when this information was updated.|
|» » price|number(double)|false|none|The price of the trade. This is the actual dollar value per whole share of this trade. A trade of 100 shares with a price of $2.00 would be worth a total dollar value of $200.00.|
|» » ticker|string|true|none|The ticker symbol for the contract's underlying asset.|
|» » timeframe|string|false|none|The time relevance of the data.|
|» » value|number(double)|false|none|The value of the underlying index.|
|» value|number|false|none|Value of Index.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » contract_type|put|
|» » contract_type|call|
|» » contract_type|other|
|» » exercise_style|american|
|» » exercise_style|european|
|» » exercise_style|bermudan|
|» » timeframe|DELAYED|
|» » timeframe|REAL-TIME|
|» » timeframe|DELAYED|
|» » timeframe|REAL-TIME|
|» timeframe|DELAYED|
|» timeframe|REAL-TIME|
|» type|stocks|
|» type|options|
|» type|fx|
|» type|crypto|
|» type|indices|
|» » timeframe|DELAYED|
|» » timeframe|REAL-TIME|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-indicessnapshot">indices:snapshot</h1>

## Indices Snapshot

<a id="opIdIndicesSnapshot"></a>

> Code samples

```bash
curl "https://api.polygon.io/v3/snapshot/indices?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/snapshot/indices`

Get a Snapshot of indices data for said tickers

<h3 id="indices-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker.any_of|query|string|false|Comma separated list of tickers, up to a maximum of 250. If no tickers are passed then all results will be returned in a paginated manner.<br><br>Warning: The maximum number of characters allowed in a URL are subject to your technology stack.|
|ticker|query|string|false|Specify a single index ticker, for example I:SPX. Index tickers are case-sensitive and start with I:. To request more than one ticker or a range of tickers, expand the filter modifiers.|
|ticker.gte|query|string|false|Range by ticker.|
|ticker.gt|query|string|false|Range by ticker.|
|ticker.lte|query|string|false|Range by ticker.|
|ticker.lt|query|string|false|Range by ticker.|
|order|query|string|false|Order results based on the `sort` field.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 250.|
|sort|query|string|false|Sort field used for ordering.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|
|sort|ticker|

> Example responses

> 200 Response

```json
{
  "request_id": "6a7e466379af0a71039d60cc78e72282",
  "results": [
    {
      "last_updated": 1679597116344223500,
      "market_status": "closed",
      "name": "Dow Jones Industrial Average",
      "session": {
        "change": -50.01,
        "change_percent": -1.45,
        "close": 3822.39,
        "high": 3834.41,
        "low": 38217.11,
        "open": 3827.38,
        "previous_close": 3812.19
      },
      "ticker": "I:DJI",
      "timeframe": "REAL-TIME",
      "type": "indices",
      "value": 3822.39
    },
    {
      "error": "NOT_FOUND",
      "message": "Ticker not found.",
      "ticker": "APx"
    },
    {
      "error": "NOT_ENTITLED",
      "message": "Not entitled to this ticker.",
      "ticker": "APy"
    }
  ],
  "status": "OK"
}
```

<h3 id="indices-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Snapshots for indices data of the underlying ticker|Inline|

<h3 id="indices-snapshot-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|false|none|An array of results containing the requested data.|
|» error|string|false|none|The error while looking for this ticker.|
|» last_updated|integer(int64)|false|none|The nanosecond timestamp of when this information was updated.|
|» market_status|string|false|none|The market status for the market that trades this ticker.|
|» message|string|false|none|The error message while looking for this ticker.|
|» name|string|false|none|Name of Index.|
|» session|object|false|none|Trading session metrics, detailing change percentages and key price points (open, close, high, low) for the asset within the current trading day.|
|» » change|number(double)|false|none|The value of the change for the index from the previous trading day.|
|» » change_percent|number(double)|false|none|The percent of the change for the index from the previous trading day.|
|» » close|number(double)|false|none|The closing value for the index of the day.|
|» » high|number(double)|false|none|The highest value for the index of the day.|
|» » low|number(double)|false|none|The lowest value for the index of the day.|
|» » open|number(double)|false|none|The open value for the index of the day.|
|» » previous_close|number(double)|false|none|The closing value for the index of previous trading day.|
|» ticker|string|true|none|Ticker of asset queried.|
|» timeframe|string|false|none|The time relevance of the data.|
|» type|string|false|none|The indices market.|
|» value|number|false|none|Value of Index.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|» timeframe|DELAYED|
|» timeframe|REAL-TIME|
|» type|indices|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-optionssnapshot">options:snapshot</h1>

## Options Chain

<a id="opIdOptionsChain"></a>

> Code samples

```bash
curl "https://api.polygon.io/v3/snapshot/options/EVRI?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/snapshot/options/{underlyingAsset}`

Get the snapshot of all options contracts for an underlying ticker.

<h3 id="options-chain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|underlyingAsset|path|string|true|The underlying ticker symbol of the option contract.|
|strike_price|query|number|false|Query by strike price of a contract.|
|expiration_date|query|string|false|Query by contract expiration with date format YYYY-MM-DD.|
|contract_type|query|string|false|Query by the type of contract.|
|strike_price.gte|query|number|false|Range by strike_price.|
|strike_price.gt|query|number|false|Range by strike_price.|
|strike_price.lte|query|number|false|Range by strike_price.|
|strike_price.lt|query|number|false|Range by strike_price.|
|expiration_date.gte|query|string|false|Range by expiration_date.|
|expiration_date.gt|query|string|false|Range by expiration_date.|
|expiration_date.lte|query|string|false|Range by expiration_date.|
|expiration_date.lt|query|string|false|Range by expiration_date.|
|order|query|string|false|Order results based on the `sort` field.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 250.|
|sort|query|string|false|Sort field used for ordering.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|contract_type|call|
|contract_type|put|
|order|asc|
|order|desc|
|sort|ticker|
|sort|expiration_date|
|sort|strike_price|

> Example responses

> 200 Response

```json
{
  "request_id": "6a7e466379af0a71039d60cc78e72282",
  "results": [
    {
      "break_even_price": 151.2,
      "day": {
        "change": 4.5,
        "change_percent": 6.76,
        "close": 120.73,
        "high": 120.81,
        "last_updated": 1605195918507251700,
        "low": 118.9,
        "open": 119.32,
        "previous_close": 119.12,
        "volume": 868,
        "vwap": 119.31
      },
      "details": {
        "contract_type": "call",
        "exercise_style": "american",
        "expiration_date": "2022-01-21",
        "shares_per_contract": 100,
        "strike_price": 150,
        "ticker": "O:AAPL211022C000150000"
      },
      "fmv": 0.05,
      "fmv_last_updated": 1605195918508251600,
      "greeks": {
        "delta": 1,
        "gamma": 0,
        "theta": 0.00229,
        "vega": 0
      },
      "implied_volatility": 5,
      "last_quote": {
        "ask": 120.3,
        "ask_size": 4,
        "bid": 120.28,
        "bid_size": 8,
        "last_updated": 1605195918507251700,
        "midpoint": 120.29,
        "timeframe": "REAL-TIME"
      },
      "last_trade": {
        "conditions": [
          209
        ],
        "decimal_size": "2.0",
        "exchange": 316,
        "price": 0.05,
        "sip_timestamp": 1675280958783136800,
        "size": 2,
        "timeframe": "REAL-TIME"
      },
      "open_interest": 1543,
      "underlying_asset": {
        "change_to_break_even": 4.2,
        "last_updated": 1605195918507251700,
        "price": 147,
        "ticker": "AAPL",
        "timeframe": "DELAYED"
      }
    }
  ],
  "status": "OK"
}
```

<h3 id="options-chain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Snapshots for options contracts of the underlying ticker|Inline|

<h3 id="options-chain-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|[object]|false|none|An array of results containing the requested data.|
|» break_even_price|number(double)|true|none|The price of the underlying asset for the contract to break even. For a call, this value is (strike price + premium paid). For a put, this value is (strike price - premium paid).|
|» day|object|true|none|The most recent daily bar for this contract.|
|» » change|number(double)|true|none|The value of the price change for the contract from the previous trading day.|
|» » change_percent|number(double)|true|none|The percent of the price change for the contract from the previous trading day.|
|» » close|number(double)|true|none|The closing price for the contract of the day.|
|» » high|number(double)|true|none|The highest price for the contract of the day.|
|» » last_updated|integer(int64)|false|none|The nanosecond timestamp of when this information was updated.|
|» » low|number(double)|true|none|The lowest price for the contract of the day.|
|» » open|number(double)|true|none|The open price for the contract of the day.|
|» » previous_close|number(double)|true|none|The closing price for the contract of previous trading day.|
|» » volume|number(double)|true|none|The trading volume for the contract of the day.|
|» » vwap|number(double)|true|none|The trading volume weighted average price for the contract of the day.|
|» details|object|true|none|The details for this contract.|
|» » contract_type|string|true|none|The type of contract. Can be "put", "call", or in some rare cases, "other".|
|» » exercise_style|string|true|none|The exercise style of this contract. See <a rel="nofollow" target="_blank" href="https://en.wikipedia.org/wiki/Option_style">this link</a> for more details on exercise styles.|
|» » expiration_date|string(date)|true|none|The contract's expiration date in YYYY-MM-DD format.|
|» » shares_per_contract|number|true|none|The number of shares per contract for this contract.|
|» » strike_price|number(double)|true|none|The strike price of the option contract.|
|» » ticker|string|true|none|The ticker symbol for the asset.|
|» fmv|number|false|none|Fair Market Value is only available on Business plans. It is our proprietary algorithm to generate a real-time, accurate, fair market value of a tradable security.<br>For more information, <a rel="nofollow" target="_blank" href="https://massive.com/contact">contact us</a>.|
|» fmv_last_updated|integer(int64)|false|none|If Fair Market Value (FMV) is available, this field is the nanosecond timestamp of the last FMV calculation.|
|» greeks|object|false|none|The greeks for this contract.<br>There are certain circumstances where greeks will not be returned, such as options contracts that are deep in the money.<br>See this <a href="https://massive.com/blog/greeks-and-implied-volatility/#testing"<br>alt="link">article</a> for more information.|
|» » delta|number(double)|true|none|The change in the option's price per $0.01 increment in the price of the underlying asset.|
|» » gamma|number(double)|true|none|The change in delta per $0.01 change in the price of the underlying asset.|
|» » theta|number(double)|true|none|The change in the option's price per day.|
|» » vega|number(double)|true|none|The change in the option's price per 1% increment in volatility.|
|» implied_volatility|number(double)|false|none|The market's forecast for the volatility of the underlying asset, based on this option's current price.|
|» last_quote|object|true|none|The most recent quote for this contract. This is only returned if your current plan includes quotes.|
|» » ask|number(double)|true|none|The ask price.|
|» » ask_exchange|number(int32)|false|none|The ask side exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» » ask_size|number(double)|true|none|The ask size.|
|» » bid|number(double)|true|none|The bid price.|
|» » bid_exchange|number(int32)|false|none|The bid side exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» » bid_size|number(double)|true|none|The bid size.|
|» » last_updated|integer(int64)|false|none|The nanosecond timestamp of when this information was updated.|
|» » midpoint|number(double)|true|none|The average of the bid and ask price.|
|» » timeframe|string|false|none|The time relevance of the data.|
|» last_trade|object|false|none|The most recent trade for this contract. This is only returned if your current plan includes trades.|
|» » conditions|[integer(int32)]|false|none|A list of condition codes. See [Options Condition Codes](https://massive.com/docs/rest/options/market-operations/condition-codes) for what each code means.|
|» » exchange|integer|true|none|The exchange ID. See <a href="https://massive.com/docs/rest/options/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» » price|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.|
|» » sip_timestamp|integer(int64)|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this trade from the exchange which produced it.|
|» » size|integer(int32)|true|none|The size of a trade (also known as volume).|
|» » timeframe|string|false|none|The time relevance of the data.|
|» open_interest|number(double)|true|none|The quantity of this contract held at the end of the last trading day.|
|» underlying_asset|object|true|none|Information on the underlying stock for this options contract.  The market data returned depends on your current stocks plan.|
|» » change_to_break_even|number(double)|true|none|The change in price for the contract to break even.|
|» » last_updated|integer(int64)|false|none|The nanosecond timestamp of when this information was updated.|
|» » price|number(double)|false|none|The price of the trade. This is the actual dollar value per whole share of this trade. A trade of 100 shares with a price of $2.00 would be worth a total dollar value of $200.00.|
|» » ticker|string|true|none|The ticker symbol for the contract's underlying asset.|
|» » timeframe|string|false|none|The time relevance of the data.|
|» » value|number(double)|false|none|The value of the underlying index.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » contract_type|put|
|» » contract_type|call|
|» » contract_type|other|
|» » exercise_style|american|
|» » exercise_style|european|
|» » exercise_style|bermudan|
|» » timeframe|DELAYED|
|» » timeframe|REAL-TIME|
|» » timeframe|DELAYED|
|» » timeframe|REAL-TIME|
|» » timeframe|DELAYED|
|» » timeframe|REAL-TIME|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Option Contract

<a id="opIdOptionContract"></a>

> Code samples

```bash
curl "https://api.polygon.io/v3/snapshot/options/EVRI/O%3AEVRI260116C00015000?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/snapshot/options/{underlyingAsset}/{optionContract}`

Get the snapshot of an option contract for a stock equity.

<h3 id="option-contract-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|underlyingAsset|path|string|true|The underlying ticker symbol of the option contract.|
|optionContract|path|string|true|The option contract identifier.|

> Example responses

> 200 Response

```json
{
  "request_id": "d9ff18dac69f55c218f69e4753706acd",
  "results": {
    "break_even_price": 171.075,
    "day": {
      "change": -1.05,
      "change_percent": -4.67,
      "close": 21.4,
      "high": 22.49,
      "last_updated": 1636520400000000000,
      "low": 21.35,
      "open": 22.49,
      "previous_close": 22.45,
      "volume": 37,
      "vwap": 21.6741
    },
    "details": {
      "contract_type": "call",
      "exercise_style": "american",
      "expiration_date": "2023-06-16",
      "shares_per_contract": 100,
      "strike_price": 150,
      "ticker": "O:AAPL230616C00150000"
    },
    "fmv": 0.05,
    "fmv_last_updated": 1636573458757383400,
    "greeks": {
      "delta": 0.5520187372272933,
      "gamma": 0.00706756515659829,
      "theta": -0.018532772783847958,
      "vega": 0.7274811132998142
    },
    "implied_volatility": 0.3048997097864957,
    "last_quote": {
      "ask": 21.25,
      "ask_exchange": 301,
      "ask_size": 110,
      "bid": 20.9,
      "bid_exchange": 301,
      "bid_size": 172,
      "last_updated": 1636573458756383500,
      "midpoint": 21.075,
      "timeframe": "REAL-TIME"
    },
    "last_trade": {
      "conditions": [
        209
      ],
      "exchange": 316,
      "price": 0.05,
      "sip_timestamp": 1675280958783136800,
      "size": 2,
      "timeframe": "REAL-TIME"
    },
    "open_interest": 8921,
    "underlying_asset": {
      "change_to_break_even": 23.123999999999995,
      "last_updated": 1636573459862384600,
      "price": 147.951,
      "ticker": "AAPL",
      "timeframe": "REAL-TIME"
    }
  },
  "status": "OK"
}
```

<h3 id="option-contract-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Snapshot of the option contract.|Inline|

<h3 id="option-contract-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|true|none|A request id assigned by the server.|
|results|object|false|none|Contains the requested snapshot data for the specified contract.|
|» break_even_price|number(double)|true|none|The price of the underlying asset for the contract to break even. For a call, this value is (strike price + premium paid). For a put, this value is (strike price - premium paid).|
|» day|object|true|none|The most recent daily bar for this contract.|
|» » change|number(double)|true|none|The value of the price change for the contract from the previous trading day.|
|» » change_percent|number(double)|true|none|The percent of the price change for the contract from the previous trading day.|
|» » close|number(double)|true|none|The closing price for the contract of the day.|
|» » high|number(double)|true|none|The highest price for the contract of the day.|
|» » last_updated|integer(int64)|false|none|The nanosecond timestamp of when this information was updated.|
|» » low|number(double)|true|none|The lowest price for the contract of the day.|
|» » open|number(double)|true|none|The open price for the contract of the day.|
|» » previous_close|number(double)|true|none|The closing price for the contract of previous trading day.|
|» » volume|number(double)|true|none|The trading volume for the contract of the day.|
|» » vwap|number(double)|true|none|The trading volume weighted average price for the contract of the day.|
|» details|object|true|none|The details for this contract.|
|» » contract_type|string|true|none|The type of contract. Can be "put", "call", or in some rare cases, "other".|
|» » exercise_style|string|true|none|The exercise style of this contract. See <a rel="nofollow" target="_blank" href="https://en.wikipedia.org/wiki/Option_style">this link</a> for more details on exercise styles.|
|» » expiration_date|string(date)|true|none|The contract's expiration date in YYYY-MM-DD format.|
|» » shares_per_contract|number|true|none|The number of shares per contract for this contract.|
|» » strike_price|number(double)|true|none|The strike price of the option contract.|
|» » ticker|string|true|none|The ticker symbol for the asset.|
|» fmv|number|false|none|Fair Market Value is only available on Business plans. It is our proprietary algorithm to generate a real-time, accurate, fair market value of a tradable security.<br>For more information, <a rel="nofollow" target="_blank" href="https://massive.com/contact">contact us</a>.|
|» fmv_last_updated|integer(int64)|false|none|If Fair Market Value (FMV) is available, this field is the nanosecond timestamp of the last FMV calculation.|
|» greeks|object|false|none|The greeks for this contract.<br>There are certain circumstances where greeks will not be returned, such as options contracts that are deep in the money.<br>See this <a href="https://massive.com/blog/greeks-and-implied-volatility/#testing"<br>alt="link">article</a> for more information.|
|» » delta|number(double)|true|none|The change in the option's price per $0.01 increment in the price of the underlying asset.|
|» » gamma|number(double)|true|none|The change in delta per $0.01 change in the price of the underlying asset.|
|» » theta|number(double)|true|none|The change in the option's price per day.|
|» » vega|number(double)|true|none|The change in the option's price per 1% increment in volatility.|
|» implied_volatility|number(double)|false|none|The market's forecast for the volatility of the underlying asset, based on this option's current price.|
|» last_quote|object|true|none|The most recent quote for this contract. This is only returned if your current plan includes quotes.|
|» » ask|number(double)|true|none|The ask price.|
|» » ask_exchange|number(int32)|false|none|The ask side exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» » ask_size|number(double)|true|none|The ask size.|
|» » bid|number(double)|true|none|The bid price.|
|» » bid_exchange|number(int32)|false|none|The bid side exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» » bid_size|number(double)|true|none|The bid size.|
|» » last_updated|integer(int64)|false|none|The nanosecond timestamp of when this information was updated.|
|» » midpoint|number(double)|true|none|The average of the bid and ask price.|
|» » timeframe|string|false|none|The time relevance of the data.|
|» last_trade|object|false|none|The most recent trade for this contract. This is only returned if your current plan includes trades.|
|» » conditions|[integer(int32)]|false|none|A list of condition codes. See [Options Condition Codes](https://massive.com/docs/rest/options/market-operations/condition-codes) for what each code means.|
|» » exchange|integer|true|none|The exchange ID. See <a href="https://massive.com/docs/rest/options/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» » price|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.|
|» » sip_timestamp|integer(int64)|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this trade from the exchange which produced it.|
|» » size|integer(int32)|true|none|The size of a trade (also known as volume).|
|» » timeframe|string|false|none|The time relevance of the data.|
|» open_interest|number(double)|true|none|The quantity of this contract held at the end of the last trading day.|
|» underlying_asset|object|true|none|Information on the underlying stock for this options contract.  The market data returned depends on your current stocks plan.|
|» » change_to_break_even|number(double)|true|none|The change in price for the contract to break even.|
|» » last_updated|integer(int64)|false|none|The nanosecond timestamp of when this information was updated.|
|» » price|number(double)|false|none|The price of the trade. This is the actual dollar value per whole share of this trade. A trade of 100 shares with a price of $2.00 would be worth a total dollar value of $200.00.|
|» » ticker|string|true|none|The ticker symbol for the contract's underlying asset.|
|» » timeframe|string|false|none|The time relevance of the data.|
|» » value|number(double)|false|none|The value of the underlying index.|
|status|string|true|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » contract_type|put|
|» » contract_type|call|
|» » contract_type|other|
|» » exercise_style|american|
|» » exercise_style|european|
|» » exercise_style|bermudan|
|» » timeframe|DELAYED|
|» » timeframe|REAL-TIME|
|» » timeframe|DELAYED|
|» » timeframe|REAL-TIME|
|» » timeframe|DELAYED|
|» » timeframe|REAL-TIME|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-optionstrades">options:trades</h1>

## Trades

<a id="opIdTradesOptions"></a>

> Code samples

```bash
curl "https://api.polygon.io/v3/trades/O%3ATSLA210903C00700000?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/trades/{optionsTicker}`

Get trades for an options ticker symbol in a given time range.

<h3 id="trades-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|optionsTicker|path|string|true|The options ticker symbol to get trades for.|
|timestamp|query|string|false|Query by trade timestamp. Either a date with the format YYYY-MM-DD or a nanosecond timestamp.|
|timestamp.gte|query|string|false|Range by timestamp.|
|timestamp.gt|query|string|false|Range by timestamp.|
|timestamp.lte|query|string|false|Range by timestamp.|
|timestamp.lt|query|string|false|Range by timestamp.|
|order|query|string|false|Order results based on the `sort` field.|
|limit|query|integer|false|Limit the number of results returned, default is 1000 and max is 50000.|
|sort|query|string|false|Sort field used for ordering.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|
|sort|timestamp|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/v3/trades/O:AZO140621P00530000?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "a47d1beb8c11b6ae897ab76cdbbf35a3",
  "results": [
    {
      "exchange": 46,
      "participant_timestamp": 1401715883806000000,
      "price": 6.91,
      "sequence_number": 1,
      "sip_timestamp": 1401715883806000000,
      "size": 1
    },
    {
      "conditions": [
        209
      ],
      "exchange": 67,
      "participant_timestamp": 1401716547786000000,
      "price": 7.2,
      "sequence_number": 2,
      "sip_timestamp": 1401716547786000000,
      "size": 1
    }
  ],
  "status": "OK"
}
```

<h3 id="trades-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of trades.|Inline|

<h3 id="trades-3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|false|none|A request id assigned by the server.|
|results|[object]|false|none|An array of results containing the requested data.|
|» conditions|[integer(int32)]|false|none|A list of condition codes. See [Options Condition Codes](https://massive.com/docs/rest/options/market-operations/condition-codes) for what each code means.|
|» correction|integer|false|none|The trade correction indicator.|
|» exchange|integer|true|none|The exchange ID. See <a href="https://massive.com/docs/rest/options/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|» id|string|false|none|The trade ID. Options trades do not have a trade ID, so this field is<br>returned as an empty string.|
|» participant_timestamp|integer(int64)|false|none|The nanosecond accuracy Participant/Exchange Unix Timestamp. This is the timestamp of when the trade was actually generated at the exchange.|
|» price|number(double)|true|none|The price of the trade. This is the price per share of the underlying, so<br>the total dollar value of a trade is the price multiplied by the size and<br>by the contract multiplier, which is typically 100 shares per contract.|
|» sequence_number|integer(int64)|false|none|The sequence number represents the sequence in which message events happened. These are increasing and unique per ticker symbol, but will not always be consecutive (e.g. 1, 2, 6, 9, 10, 11).|
|» sip_timestamp|integer(int64)|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this trade from the exchange which produced it.|
|» size|number(double)|true|none|The size of a trade (also known as volume).|
|status|string|true|none|The status of this request's response.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

<h1 id="massive-api-referencestocksipos">reference:stocks:ipos</h1>

## IPOs

<a id="opIdListIPOs"></a>

> Code samples

```bash
curl "https://api.polygon.io/vX/reference/ipos?apiKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /vX/reference/ipos`

The IPOs API provides access to detailed information about Initial Public Offerings (IPOs), including both upcoming and historical events. With this API, you can query for a comprehensive list of IPOs, along with key details such as the issuer name, ticker symbol, ISIN, IPO date, number of shares offered, expected price range, and final offering price. You can filter the results by status to focus on new, rumors, pending, historical, and more.

<h3 id="ipos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticker|query|string|false|Specify a case-sensitive ticker symbol. For example, TSLA represents Tesla Inc.|
|us_code|query|string|false|Specify a us_code. This is a unique nine-character alphanumeric code that identifies a North American financial security for the purposes of facilitating clearing and settlement of trades.|
|isin|query|string|false|Specify an International Securities Identification Number (ISIN). This is a unique twelve-digit code that is assigned to every security issuance in the world.|
|listing_date|query|string(date)|false|Specify a listing date. This is the first trading date for the newly listed entity.|
|ipo_status|query|string|false|Specify an IPO status.|
|listing_date.gte|query|string(date)|false|Range by listing_date.|
|listing_date.gt|query|string(date)|false|Range by listing_date.|
|listing_date.lte|query|string(date)|false|Range by listing_date.|
|listing_date.lt|query|string(date)|false|Range by listing_date.|
|order|query|string|false|Order results based on the `sort` field.|
|limit|query|integer|false|Limit the number of results returned, default is 10 and max is 1000.|
|sort|query|string|false|Sort field used for ordering.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ipo_status|direct_listing_process|
|ipo_status|history|
|ipo_status|new|
|ipo_status|pending|
|ipo_status|postponed|
|ipo_status|rumor|
|ipo_status|withdrawn|
|order|asc|
|order|desc|
|sort|listing_date|
|sort|ticker|
|sort|last_updated|
|sort|security_type|
|sort|issuer_name|
|sort|currency_code|
|sort|isin|
|sort|us_code|
|sort|final_issue_price|
|sort|min_shares_offered|
|sort|max_shares_offered|
|sort|lowest_offer_price|
|sort|highest_offer_price|
|sort|total_offer_size|
|sort|shares_outstanding|
|sort|primary_exchange|
|sort|lot_size|
|sort|security_description|
|sort|ipo_status|
|sort|announced_date|

> Example responses

> 200 Response

```json
{
  "next_url": "https://api.polygon.io/vX/reference/ipos?cursor=YWN0aXZlPXRydWUmZGF0ZT0yMDIxLTA0LTI1JmxpbWl0PTEmb3JkZXI9YXNjJnBhZ2VfbWFya2VyPUElN0M5YWRjMjY0ZTgyM2E1ZjBiOGUyNDc5YmZiOGE1YmYwNDVkYzU0YjgwMDcyMWE2YmI1ZjBjMjQwMjU4MjFmNGZiJnNvcnQ9dGlja2Vy",
  "request_id": "6a7e466379af0a71039d60cc78e72282",
  "results": [
    {
      "announced_date": "2024-06-01",
      "currency_code": "USD",
      "final_issue_price": 17,
      "highest_offer_price": 17,
      "ipo_status": "history",
      "isin": "US75383L1026",
      "issue_end_date": "2024-06-06",
      "issue_start_date": "2024-06-01",
      "issuer_name": "Rapport Therapeutics Inc.",
      "last_updated": "2024-06-27",
      "listing_date": "2024-06-07",
      "lot_size": 100,
      "lowest_offer_price": 17,
      "max_shares_offered": 8000000,
      "min_shares_offered": 1000000,
      "primary_exchange": "XNAS",
      "security_description": "Ordinary Shares",
      "security_type": "CS",
      "shares_outstanding": 35376457,
      "ticker": "RAPP",
      "total_offer_size": 136000000,
      "us_code": "75383L102"
    }
  ],
  "status": "OK"
}
```

<h3 id="ipos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of IPO events.|Inline|

<h3 id="ipos-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|
|request_id|string|false|none|A request id assigned by the server.|
|results|[object]|false|none|An array of results containing the requested data.|
|» announced_date|string(date)|false|none|The date when the IPO event was announced.|
|» currency_code|string|false|none|Underlying currency of the security.|
|» final_issue_price|number(float)|false|none|The price set by the company and its underwriters before the IPO goes live.|
|» highest_offer_price|number(float)|false|none|The highest price within the IPO price range that the company might use to price the shares.|
|» ipo_status|string|true|none|The status of the IPO event. IPO events start out as status "rumor" or "pending". On listing day, the status changes to "new". After the listing day, the status changes to "history".<br><br>The status "direct_listing_process" corresponds to a type of offering where, instead of going through all the IPO processes, the company decides to list its shares directly on an exchange, without using an investment bank or other intermediaries. This is called a direct listing, direct placement, or direct public offering (DPO).|
|» isin|string|false|none|International Securities Identification Number. This is a unique twelve-digit code that is assigned to every security issuance in the world.|
|» issuer_name|string|true|none|Name of issuer.|
|» last_updated|string(date)|true|none|The date when the IPO event was last modified.|
|» listing_date|string(date)|false|none|First trading date for the newly listed entity.|
|» lot_size|number|false|none|The minimum number of shares that can be bought or sold in a single transaction.|
|» lowest_offer_price|number(float)|false|none|The lowest price within the IPO price range that the company is willing to offer its shares to investors.|
|» max_shares_offered|number|false|none|The upper limit of the shares that the company is offering to investors.|
|» min_shares_offered|number|false|none|The lower limit of shares that the company is willing to sell in the IPO.|
|» primary_exchange|string|false|none|Market Identifier Code (MIC) of the primary exchange where the security is listed. The Market Identifier Code (MIC) (ISO 10383) is a unique identification code used to identify securities trading exchanges, regulated and non-regulated trading markets.|
|» security_description|string|false|none|Description of the security.|
|» security_type|string|true|none|The classification of the stock. For example, "CS" stands for Common Stock.|
|» shares_outstanding|number|false|none|The total number of shares that the company has issued and are held by investors.|
|» ticker|string|true|none|The ticker symbol of the IPO event.|
|» total_offer_size|number(float)|false|none|The total amount raised by the company for IPO.|
|» us_code|string|false|none|This is a unique nine-character alphanumeric code that identifies a North American financial security for the purposes of facilitating clearing and settlement of trades.|
|status|string|false|none|The status of this request's response.|

#### Enumerated Values

|Property|Value|
|---|---|
|» ipo_status|direct_listing_process|
|» ipo_status|history|
|» ipo_status|new|
|» ipo_status|pending|
|» ipo_status|postponed|
|» ipo_status|rumor|
|» ipo_status|withdrawn|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

# Schemas

<h2 id="tocS_Adjusted">Adjusted</h2>
<!-- backwards compatibility -->
<a id="schemaadjusted"></a>
<a id="schema_Adjusted"></a>
<a id="tocSadjusted"></a>
<a id="tocsadjusted"></a>

```json
true
```

Whether or not this response was adjusted for splits.

<h2 id="tocS_AskExchangeId">AskExchangeId</h2>
<!-- backwards compatibility -->
<a id="schemaaskexchangeid"></a>
<a id="schema_AskExchangeId"></a>
<a id="tocSaskexchangeid"></a>
<a id="tocsaskexchangeid"></a>

```json
0
```

The ask exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.

<h2 id="tocS_AskPrice">AskPrice</h2>
<!-- backwards compatibility -->
<a id="schemaaskprice"></a>
<a id="schema_AskPrice"></a>
<a id="tocSaskprice"></a>
<a id="tocsaskprice"></a>

```json
0
```

The ask price.

<h2 id="tocS_AskSize">AskSize</h2>
<!-- backwards compatibility -->
<a id="schemaasksize"></a>
<a id="schema_AskSize"></a>
<a id="tocSasksize"></a>
<a id="tocsasksize"></a>

```json
0
```

The ask size. This represents the number of shares sellers are offering at the given ask price.

<h2 id="tocS_BidExchangeId">BidExchangeId</h2>
<!-- backwards compatibility -->
<a id="schemabidexchangeid"></a>
<a id="schema_BidExchangeId"></a>
<a id="tocSbidexchangeid"></a>
<a id="tocsbidexchangeid"></a>

```json
0
```

The bid exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.

<h2 id="tocS_BidPrice">BidPrice</h2>
<!-- backwards compatibility -->
<a id="schemabidprice"></a>
<a id="schema_BidPrice"></a>
<a id="tocSbidprice"></a>
<a id="tocsbidprice"></a>

```json
0
```

The bid price.

<h2 id="tocS_BidSize">BidSize</h2>
<!-- backwards compatibility -->
<a id="schemabidsize"></a>
<a id="schema_BidSize"></a>
<a id="tocSbidsize"></a>
<a id="tocsbidsize"></a>

```json
0
```

The bid size. This represents the number of shares buyers are bidding for at the given bid price.

<h2 id="tocS_Close">Close</h2>
<!-- backwards compatibility -->
<a id="schemaclose"></a>
<a id="schema_Close"></a>
<a id="tocSclose"></a>
<a id="tocsclose"></a>

```json
0
```

The close price for the symbol in the given time period.

<h2 id="tocS_CloseIndices">CloseIndices</h2>
<!-- backwards compatibility -->
<a id="schemacloseindices"></a>
<a id="schema_CloseIndices"></a>
<a id="tocScloseindices"></a>
<a id="tocscloseindices"></a>

```json
0
```

The close value for the symbol in the given time period.

<h2 id="tocS_Company">Company</h2>
<!-- backwards compatibility -->
<a id="schemacompany"></a>
<a id="schema_Company"></a>
<a id="tocScompany"></a>
<a id="tocscompany"></a>

```json
{
  "active": true,
  "bloomberg": "string",
  "ceo": "string",
  "cik": "string",
  "country": "string",
  "description": "string",
  "employees": 0,
  "exchange": "string",
  "exchangeSymbol": "string",
  "figi": "string",
  "hq_address": "string",
  "hq_country": "string",
  "hq_state": "string",
  "industry": "string",
  "lei": "string",
  "listdate": "1970-01-01",
  "logo": "string",
  "marketcap": 0,
  "name": "string",
  "phone": "string",
  "sector": "string",
  "sic": 0,
  "similar": [
    "string"
  ],
  "symbol": "string",
  "tags": [
    "string"
  ],
  "type": "string",
  "updated": "1970-01-01",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|Indicates if the security is actively listed.  If false, this means the company is no longer listed and cannot be traded.|
|bloomberg|string|false|none|The Bloomberg guid for the symbol.|
|ceo|string|false|none|The name of the company's current CEO.|
|cik|string|false|none|The official CIK guid used for SEC database/filings.|
|country|string|false|none|The country in which the company is registered.|
|description|string|false|none|A description of the company and what they do/offer.|
|employees|integer|false|none|The approximate number of employees for the company.|
|exchange|string|false|none|The symbol's primary exchange.|
|exchangeSymbol|string|false|none|The exchange code (id) of the symbol's primary exchange.|
|figi|string|false|none|The OpenFigi project guid for the symbol. (<a rel="nofollow" target="_blank" href="https://openfigi.com/">https://openfigi.com/</a>)|
|hq_address|string|false|none|The street address for the company's headquarters.|
|hq_country|string|false|none|The country in which the company's headquarters is located.|
|hq_state|string|false|none|The state in which the company's headquarters is located.|
|industry|string|false|none|The industry in which the company operates.|
|lei|string|false|none|The Legal Entity Identifier (LEI) guid for the symbol. (<a rel="nofollow" target="_blank" href="https://en.wikipedia.org/wiki/Legal_Entity_Identifier">https://en.wikipedia.org/wiki/Legal_Entity_Identifier</a>)|
|listdate|string(date)|false|none|The date that the symbol was listed on the exchange.|
|logo|string|false|none|The URL of the entity's logo.|
|marketcap|integer|false|none|The current market cap for the company.|
|name|string|false|none|The name of the company/entity.|
|phone|string|false|none|The phone number for the company. This is usually a corporate contact number.|
|sector|string|false|none|The sector of the indsutry in which the symbol operates.|
|sic|integer|false|none|Standard Industrial Classification (SIC) id for the symbol. (<a rel="nofollow" target="_blank" href="https://en.wikipedia.org/wiki/Standard_Industrial_Classification">https://en.wikipedia.org/wiki/Legal_Entity_Identifier</a>)|
|similar|[string]|false|none|A list of ticker symbols for similar companies.|
|symbol|string|false|none|The exchange symbol that this item is traded under.|
|tags|[string]|false|none|none|
|type|string|false|none|The type or class of the security.  (<a alt="Full List of Ticker Types" href="https://massive.com/docs/rest/stocks/tickers/ticker-types">Full List of Ticker Types</a>)|
|updated|string(date)|false|none|The last time this company record was updated.|
|url|string|false|none|The URL of the company's website|

<h2 id="tocS_ConditionTypeMap">ConditionTypeMap</h2>
<!-- backwards compatibility -->
<a id="schemaconditiontypemap"></a>
<a id="schema_ConditionTypeMap"></a>
<a id="tocSconditiontypemap"></a>
<a id="tocsconditiontypemap"></a>

```json
{
  "condition": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|string|false|none|Massive's mapping for condition codes.  For more information, see our <a href="https://massive.com/glossary/trade-conditions" alt="Trade Conditions Glossary" target="_blank">Trade Conditions Glossary</a>.<br>|

<h2 id="tocS_Conditions">Conditions</h2>
<!-- backwards compatibility -->
<a id="schemaconditions"></a>
<a id="schema_Conditions"></a>
<a id="tocSconditions"></a>
<a id="tocsconditions"></a>

```json
[
  0
]
```

A list of condition codes. See [Stocks Condition Codes](https://massive.com/docs/rest/stocks/market-operations/condition-codes) for what each code means.

<h2 id="tocS_ConditionsCrypto">ConditionsCrypto</h2>
<!-- backwards compatibility -->
<a id="schemaconditionscrypto"></a>
<a id="schema_ConditionsCrypto"></a>
<a id="tocSconditionscrypto"></a>
<a id="tocsconditionscrypto"></a>

```json
[
  0
]
```

A list of condition codes. See [Crypto Condition Codes](https://massive.com/docs/rest/crypto/market-operations/condition-codes) for what each code means.

<h2 id="tocS_Count">Count</h2>
<!-- backwards compatibility -->
<a id="schemacount"></a>
<a id="schema_Count"></a>
<a id="tocScount"></a>
<a id="tocscount"></a>

```json
0
```

The total number of results for this request.

<h2 id="tocS_CryptoExchange">CryptoExchange</h2>
<!-- backwards compatibility -->
<a id="schemacryptoexchange"></a>
<a id="schema_CryptoExchange"></a>
<a id="tocScryptoexchange"></a>
<a id="tocscryptoexchange"></a>

```json
[
  {
    "id": 0,
    "market": "string",
    "name": "string",
    "type": "string",
    "url": "string"
  }
]
```

<h2 id="tocS_CryptoGroupedResults">CryptoGroupedResults</h2>
<!-- backwards compatibility -->
<a id="schemacryptogroupedresults"></a>
<a id="schema_CryptoGroupedResults"></a>
<a id="tocScryptogroupedresults"></a>
<a id="tocscryptogroupedresults"></a>

```json
{
  "results": [
    {
      "T": "string",
      "c": 0,
      "h": 0,
      "l": 0,
      "n": 0,
      "o": 0,
      "t": 0,
      "v": 0,
      "vw": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|An array of results containing the requested data.|

<h2 id="tocS_CryptoHistoricTrades">CryptoHistoricTrades</h2>
<!-- backwards compatibility -->
<a id="schemacryptohistorictrades"></a>
<a id="schema_CryptoHistoricTrades"></a>
<a id="tocScryptohistorictrades"></a>
<a id="tocscryptohistorictrades"></a>

```json
{
  "day": "1970-01-01",
  "map": {},
  "msLatency": 0,
  "symbol": "string",
  "ticks": [
    {
      "c": [
        0
      ],
      "i": "string",
      "p": 0,
      "s": 0,
      "t": 0,
      "x": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|string(date)|true|none|The date that was evaluated from the request.|
|map|object|true|none|A map for shortened result keys.|
|msLatency|integer|true|none|The milliseconds of latency for the query results.|
|symbol|string|true|none|The symbol pair that was evaluated from the request.|
|ticks|[object]|true|none|none|

<h2 id="tocS_CryptoLastTrade">CryptoLastTrade</h2>
<!-- backwards compatibility -->
<a id="schemacryptolasttrade"></a>
<a id="schema_CryptoLastTrade"></a>
<a id="tocScryptolasttrade"></a>
<a id="tocscryptolasttrade"></a>

```json
{
  "last": {
    "conditions": [
      0
    ],
    "exchange": 0,
    "price": 0,
    "size": 0,
    "timestamp": 0
  },
  "symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|last|object|false|none|none|
|symbol|string|true|none|The symbol pair that was evaluated from the request.|

<h2 id="tocS_CryptoOpenClose">CryptoOpenClose</h2>
<!-- backwards compatibility -->
<a id="schemacryptoopenclose"></a>
<a id="schema_CryptoOpenClose"></a>
<a id="tocScryptoopenclose"></a>
<a id="tocscryptoopenclose"></a>

```json
{
  "close": 0,
  "closingTrades": [
    {
      "c": [
        0
      ],
      "i": "string",
      "p": 0,
      "s": 0,
      "t": 0,
      "x": 0
    }
  ],
  "day": "1970-01-01",
  "isUTC": true,
  "open": 0,
  "openTrades": [
    {
      "c": [
        0
      ],
      "i": "string",
      "p": 0,
      "s": 0,
      "t": 0,
      "x": 0
    }
  ],
  "symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|close|number(double)|true|none|The close price for the symbol in the given time period.|
|closingTrades|[object]|true|none|An array of results containing the requested data.|
|day|string(date)|true|none|The date requested.|
|isUTC|boolean|true|none|Whether or not the timestamps are in UTC timezone.|
|open|number(double)|true|none|The open price for the symbol in the given time period.|
|openTrades|[object]|true|none|An array of results containing the requested data.|
|symbol|string|true|none|The symbol pair that was evaluated from the request.|

<h2 id="tocS_CryptoSnapshotMinute">CryptoSnapshotMinute</h2>
<!-- backwards compatibility -->
<a id="schemacryptosnapshotminute"></a>
<a id="schema_CryptoSnapshotMinute"></a>
<a id="tocScryptosnapshotminute"></a>
<a id="tocscryptosnapshotminute"></a>

```json
{
  "c": 0,
  "h": 0,
  "l": 0,
  "n": 0,
  "o": 0,
  "t": 0,
  "v": 0,
  "vw": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|number(double)|true|none|The close price for the symbol in the given time period.|
|h|number(double)|true|none|The highest price for the symbol in the given time period.|
|l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|n|integer|true|none|The number of transactions in the aggregate window.|
|o|number(double)|true|none|The open price for the symbol in the given time period.|
|t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|vw|number(double)|true|none|The volume weighted average price.|

<h2 id="tocS_CryptoSnapshotTicker">CryptoSnapshotTicker</h2>
<!-- backwards compatibility -->
<a id="schemacryptosnapshotticker"></a>
<a id="schema_CryptoSnapshotTicker"></a>
<a id="tocScryptosnapshotticker"></a>
<a id="tocscryptosnapshotticker"></a>

```json
{
  "ticker": {
    "day": {
      "c": 0,
      "h": 0,
      "l": 0,
      "o": 0,
      "v": 0,
      "vw": 0
    },
    "fmv": 0,
    "lastTrade": {
      "c": [
        0
      ],
      "i": "string",
      "p": 0,
      "s": 0,
      "t": 0,
      "x": 0
    },
    "min": {
      "c": 0,
      "h": 0,
      "l": 0,
      "n": 0,
      "o": 0,
      "t": 0,
      "v": 0,
      "vw": 0
    },
    "prevDay": {
      "c": 0,
      "h": 0,
      "l": 0,
      "o": 0,
      "v": 0,
      "vw": 0
    },
    "ticker": "string",
    "todaysChange": 0,
    "todaysChangePerc": 0,
    "updated": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ticker|object|false|none|Contains the requested snapshot data for the specified ticker.|

<h2 id="tocS_CryptoSnapshotTickerFullBook">CryptoSnapshotTickerFullBook</h2>
<!-- backwards compatibility -->
<a id="schemacryptosnapshottickerfullbook"></a>
<a id="schema_CryptoSnapshotTickerFullBook"></a>
<a id="tocScryptosnapshottickerfullbook"></a>
<a id="tocscryptosnapshottickerfullbook"></a>

```json
{
  "data": {
    "askCount": 0,
    "asks": [
      {
        "p": 0,
        "x": {}
      }
    ],
    "bidCount": 0,
    "bids": [
      {
        "p": 0,
        "x": {}
      }
    ],
    "spread": 0,
    "ticker": "string",
    "updated": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_CryptoSnapshotTickers">CryptoSnapshotTickers</h2>
<!-- backwards compatibility -->
<a id="schemacryptosnapshottickers"></a>
<a id="schema_CryptoSnapshotTickers"></a>
<a id="tocScryptosnapshottickers"></a>
<a id="tocscryptosnapshottickers"></a>

```json
{
  "tickers": [
    {
      "day": {
        "c": 0,
        "h": 0,
        "l": 0,
        "o": 0,
        "v": 0,
        "vw": 0
      },
      "fmv": 0,
      "lastTrade": {
        "c": [
          0
        ],
        "i": "string",
        "p": 0,
        "s": 0,
        "t": 0,
        "x": 0
      },
      "min": {
        "c": 0,
        "h": 0,
        "l": 0,
        "n": 0,
        "o": 0,
        "t": 0,
        "v": 0,
        "vw": 0
      },
      "prevDay": {
        "c": 0,
        "h": 0,
        "l": 0,
        "o": 0,
        "v": 0,
        "vw": 0
      },
      "ticker": "string",
      "todaysChange": 0,
      "todaysChangePerc": 0,
      "updated": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tickers|[object]|false|none|An array of snapshot data for the specified tickers.|

<h2 id="tocS_CryptoTick">CryptoTick</h2>
<!-- backwards compatibility -->
<a id="schemacryptotick"></a>
<a id="schema_CryptoTick"></a>
<a id="tocScryptotick"></a>
<a id="tocscryptotick"></a>

```json
{
  "c": [
    0
  ],
  "i": "string",
  "p": 0,
  "s": 0,
  "t": 0,
  "x": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|[integer]|true|none|A list of condition codes. See [Crypto Condition Codes](https://massive.com/docs/rest/crypto/market-operations/condition-codes) for what each code means.|
|i|string|true|none|The Trade ID which uniquely identifies a trade. These are unique per<br>combination of ticker, exchange, and TRF. For example: A trade for AAPL<br>executed on NYSE and a trade for AAPL executed on NASDAQ could potentially<br>have the same Trade ID.<br>|
|p|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.<br>|
|s|number(double)|true|none|The size of a trade (also known as volume).<br>|
|t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|x|integer|true|none|The exchange that this crypto trade happened on.  <br>See <a href="https://massive.com/docs/rest/crypto/market-operations/exchanges">Exchanges</a> for a mapping of exchanges to IDs.<br>|

<h2 id="tocS_CryptoTradeExchange">CryptoTradeExchange</h2>
<!-- backwards compatibility -->
<a id="schemacryptotradeexchange"></a>
<a id="schema_CryptoTradeExchange"></a>
<a id="tocScryptotradeexchange"></a>
<a id="tocscryptotradeexchange"></a>

```json
0
```

The exchange that this crypto trade happened on.  
See <a href="https://massive.com/docs/rest/crypto/market-operations/exchanges">Exchanges</a> for a mapping of exchanges to IDs.

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"1970-01-01T00:00:00Z"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string(date-time)|false|none|none|
|*oneOf*|string(date)|false|none|none|

<h2 id="tocS_Exchange">Exchange</h2>
<!-- backwards compatibility -->
<a id="schemaexchange"></a>
<a id="schema_Exchange"></a>
<a id="tocSexchange"></a>
<a id="tocsexchange"></a>

```json
[
  {
    "code": "string",
    "id": 0,
    "market": "string",
    "mic": "string",
    "name": "string",
    "tape": "string",
    "type": "string"
  }
]
```

<h2 id="tocS_ExchangeId">ExchangeId</h2>
<!-- backwards compatibility -->
<a id="schemaexchangeid"></a>
<a id="schema_ExchangeId"></a>
<a id="tocSexchangeid"></a>
<a id="tocsexchangeid"></a>

```json
0
```

The exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.

<h2 id="tocS_Financial">Financial</h2>
<!-- backwards compatibility -->
<a id="schemafinancial"></a>
<a id="schema_Financial"></a>
<a id="tocSfinancial"></a>
<a id="tocsfinancial"></a>

```json
{
  "cashChange": 7202000000,
  "cashFlow": 28293000000,
  "costOfRevenue": 54381000000,
  "currentAssets": 143810000000,
  "currentCash": 27491000000,
  "currentDebt": 18478000000,
  "grossProfit": 33912000000,
  "netIncome": 20065000000,
  "operatingExpense": 7638000000,
  "operatingGainsLosses": 0,
  "operatingIncome": 26274000000,
  "operatingRevenue": 88293000000,
  "reportDate": "2017-12-31T00:00:00.000Z",
  "reportDateStr": "2017-12-31",
  "researchAndDevelopment": 3407000000,
  "shareholderEquity": 140199000000,
  "symbol": "AAPL",
  "totalAssets": 406794000000,
  "totalCash": 77153000000,
  "totalDebt": 122400000000,
  "totalLiabilities": 266595000000,
  "totalRevenue": 88293000000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cashChange|integer|false|none|none|
|cashFlow|integer|false|none|none|
|costOfRevenue|integer|false|none|none|
|currentAssets|integer|false|none|none|
|currentCash|integer|false|none|none|
|currentDebt|integer|false|none|none|
|grossProfit|integer|false|none|none|
|netIncome|integer|false|none|none|
|operatingExpense|integer|false|none|none|
|operatingGainsLosses|number|false|none|none|
|operatingIncome|integer|false|none|none|
|operatingRevenue|integer|false|none|none|
|reportDate|string(date-time)|true|none|Report Date|
|reportDateStr|string|true|none|Report date as non date format|
|researchAndDevelopment|integer|false|none|none|
|shareholderEquity|integer|false|none|none|
|symbol|string|true|none|Stock Symbol|
|totalAssets|integer|false|none|none|
|totalCash|integer|false|none|none|
|totalDebt|integer|false|none|none|
|totalLiabilities|integer|false|none|none|
|totalRevenue|integer|false|none|none|

<h2 id="tocS_Financials">Financials</h2>
<!-- backwards compatibility -->
<a id="schemafinancials"></a>
<a id="schema_Financials"></a>
<a id="tocSfinancials"></a>
<a id="tocsfinancials"></a>

```json
{
  "EBITDAMargin": 0,
  "accumulatedOtherComprehensiveIncome": 0,
  "accumulatedRetainedEarningsDeficit": 0,
  "assetTurnover": 0,
  "assets": 0,
  "assetsAverage": 0,
  "assetsCurrent": 0,
  "assetsNonCurrent": 0,
  "averageEquity": 0,
  "bookValuePerShare": 0,
  "calendarDate": "2019-03-31",
  "capitalExpenditure": 0,
  "cashAndEquivalents": 0,
  "cashAndEquivalentsUSD": 0,
  "consolidatedIncome": 0,
  "costOfRevenue": 0,
  "currentLiabilities": 0,
  "currentRatio": 0,
  "debt": 0,
  "debtCurrent": 0,
  "debtNonCurrent": 0,
  "debtToEquityRatio": 0,
  "debtUSD": 0,
  "deferredRevenue": 0,
  "deposits": 0,
  "depreciationAmortizationAndAccretion": 0,
  "dividendYield": 0,
  "dividendsPerBasicCommonShare": 0,
  "earningBeforeInterestTaxes": 0,
  "earningBeforeInterestTaxesUSD": 0,
  "earningsBeforeInterestTaxesDepreciationAmortization": 0,
  "earningsBeforeInterestTaxesDepreciationAmortizationUSD": 0,
  "earningsBeforeTax": 0,
  "earningsPerBasicShare": 0,
  "earningsPerBasicShareUSD": 0,
  "earningsPerDilutedShare": 0,
  "effectOfExchangeRateChangesOnCash": 0,
  "enterpriseValue": 0,
  "enterpriseValueOverEBIT": 0,
  "enterpriseValueOverEBITDA": 0,
  "foreignCurrencyUSDExchangeRate": 0,
  "freeCashFlow": 0,
  "freeCashFlowPerShare": 0,
  "goodwillAndIntangibleAssets": 0,
  "grossMargin": 0,
  "grossProfit": 0,
  "incomeTaxExpense": 0,
  "interestExpense": 0,
  "inventory": 0,
  "investedCapital": 0,
  "investedCapitalAverage": 0,
  "investments": 0,
  "investmentsCurrent": 0,
  "investmentsNonCurrent": 0,
  "issuanceDebtSecurities": 0,
  "issuanceEquityShares": 0,
  "liabilitiesNonCurrent": 0,
  "marketCapitalization": 0,
  "netCashFlow": 0,
  "netCashFlowBusinessAcquisitionsDisposals": 0,
  "netCashFlowFromFinancing": 0,
  "netCashFlowFromInvesting": 0,
  "netCashFlowFromOperations": 0,
  "netCashFlowInvestmentAcquisitionsDisposals": 0,
  "netIncome": 0,
  "netIncomeCommonStock": 0,
  "netIncomeCommonStockUSD": 0,
  "netIncomeToNonControllingInterests": 0,
  "netLossIncomeFromDiscontinuedOperations": 0,
  "operatingExpenses": 0,
  "operatingIncome": 0,
  "paymentDividendsOtherCashDistributions": 0,
  "payoutRatio": 0,
  "period": "Q",
  "preferredDividendsIncomeStatementImpact": 0,
  "priceEarnings": 0,
  "priceSales": 0,
  "priceToBookValue": 0,
  "priceToEarningsRatio": 0,
  "priceToSalesRatio": 0,
  "profitMargin": 0,
  "propertyPlantEquipmentNet": 0,
  "reportPeriod": "2019-03-31",
  "researchAndDevelopmentExpense": 0,
  "returnOnAverageAssets": 0,
  "returnOnAverageEquity": 0,
  "returnOnInvestedCapital": 0,
  "returnOnSales": 0,
  "revenues": 0,
  "revenuesUSD": 0,
  "salesPerShare": 0,
  "sellingGeneralAndAdministrativeExpense": 0,
  "shareBasedCompensation": 0,
  "shareFactor": 0,
  "sharePriceAdjustedClose": 0,
  "shareholdersEquity": 0,
  "shareholdersEquityUSD": 0,
  "shares": 0,
  "tangibleAssetValue": 0,
  "tangibleAssetsBookValuePerShare": 0,
  "taxAssets": 0,
  "taxLiabilities": 0,
  "ticker": "string",
  "totalLiabilities": 0,
  "tradeAndNonTradePayables": 0,
  "tradeAndNonTradeReceivables": 0,
  "updated": "1999-03-28",
  "weightedAverageShares": 0,
  "weightedAverageSharesDiluted": 0,
  "workingCapital": 0
}
```

Financials

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EBITDAMargin|number(double)|false|none|none|
|accumulatedOtherComprehensiveIncome|integer|false|none|none|
|accumulatedRetainedEarningsDeficit|integer|false|none|none|
|assetTurnover|integer|false|none|none|
|assets|integer|false|none|none|
|assetsAverage|integer|false|none|none|
|assetsCurrent|integer|false|none|none|
|assetsNonCurrent|integer|false|none|none|
|averageEquity|integer|false|none|none|
|bookValuePerShare|number(double)|false|none|none|
|calendarDate|string(date-time)|false|none|none|
|capitalExpenditure|integer|false|none|none|
|cashAndEquivalents|integer|false|none|none|
|cashAndEquivalentsUSD|integer|false|none|none|
|consolidatedIncome|integer|false|none|none|
|costOfRevenue|integer|false|none|none|
|currentLiabilities|integer|false|none|none|
|currentRatio|number(double)|false|none|none|
|debt|integer|false|none|none|
|debtCurrent|integer|false|none|none|
|debtNonCurrent|integer|false|none|none|
|debtToEquityRatio|number(double)|false|none|none|
|debtUSD|integer|false|none|none|
|deferredRevenue|integer|false|none|none|
|deposits|integer|false|none|none|
|depreciationAmortizationAndAccretion|integer|false|none|none|
|dividendYield|integer|false|none|none|
|dividendsPerBasicCommonShare|integer|false|none|none|
|earningBeforeInterestTaxes|integer|false|none|none|
|earningBeforeInterestTaxesUSD|integer|false|none|none|
|earningsBeforeInterestTaxesDepreciationAmortization|integer|false|none|none|
|earningsBeforeInterestTaxesDepreciationAmortizationUSD|integer|false|none|none|
|earningsBeforeTax|integer|false|none|none|
|earningsPerBasicShare|number(double)|false|none|none|
|earningsPerBasicShareUSD|number(double)|false|none|none|
|earningsPerDilutedShare|number(double)|false|none|none|
|effectOfExchangeRateChangesOnCash|integer|false|none|none|
|enterpriseValue|integer|false|none|none|
|enterpriseValueOverEBIT|integer|false|none|none|
|enterpriseValueOverEBITDA|number(double)|false|none|none|
|foreignCurrencyUSDExchangeRate|integer|false|none|none|
|freeCashFlow|integer|false|none|none|
|freeCashFlowPerShare|number(double)|false|none|none|
|goodwillAndIntangibleAssets|integer|false|none|none|
|grossMargin|number(double)|false|none|none|
|grossProfit|integer|false|none|none|
|incomeTaxExpense|integer|false|none|none|
|interestExpense|integer|false|none|none|
|inventory|integer|false|none|none|
|investedCapital|integer|false|none|none|
|investedCapitalAverage|integer|false|none|none|
|investments|integer|false|none|none|
|investmentsCurrent|integer|false|none|none|
|investmentsNonCurrent|integer|false|none|none|
|issuanceDebtSecurities|integer|false|none|none|
|issuanceEquityShares|integer|false|none|none|
|liabilitiesNonCurrent|integer|false|none|none|
|marketCapitalization|integer|false|none|none|
|netCashFlow|integer|false|none|none|
|netCashFlowBusinessAcquisitionsDisposals|integer|false|none|none|
|netCashFlowFromFinancing|integer|false|none|none|
|netCashFlowFromInvesting|integer|false|none|none|
|netCashFlowFromOperations|integer|false|none|none|
|netCashFlowInvestmentAcquisitionsDisposals|integer|false|none|none|
|netIncome|integer|false|none|none|
|netIncomeCommonStock|integer|false|none|none|
|netIncomeCommonStockUSD|integer|false|none|none|
|netIncomeToNonControllingInterests|integer|false|none|none|
|netLossIncomeFromDiscontinuedOperations|integer|false|none|none|
|operatingExpenses|integer|false|none|none|
|operatingIncome|integer|false|none|none|
|paymentDividendsOtherCashDistributions|integer|false|none|none|
|payoutRatio|integer|false|none|none|
|period|string|false|none|Reporting period.|
|preferredDividendsIncomeStatementImpact|integer|false|none|none|
|priceEarnings|number(double)|false|none|none|
|priceSales|number(double)|false|none|none|
|priceToBookValue|number(double)|false|none|none|
|priceToEarningsRatio|number(double)|false|none|none|
|priceToSalesRatio|number(double)|false|none|none|
|profitMargin|number(double)|false|none|none|
|propertyPlantEquipmentNet|integer|false|none|none|
|reportPeriod|string(date-time)|false|none|none|
|researchAndDevelopmentExpense|integer|false|none|none|
|returnOnAverageAssets|integer|false|none|none|
|returnOnAverageEquity|integer|false|none|none|
|returnOnInvestedCapital|integer|false|none|none|
|returnOnSales|number(double)|false|none|none|
|revenues|integer|false|none|none|
|revenuesUSD|integer|false|none|none|
|salesPerShare|number(double)|false|none|none|
|sellingGeneralAndAdministrativeExpense|integer|false|none|none|
|shareBasedCompensation|integer|false|none|none|
|shareFactor|integer|false|none|none|
|sharePriceAdjustedClose|number(double)|false|none|none|
|shareholdersEquity|integer|false|none|none|
|shareholdersEquityUSD|integer|false|none|none|
|shares|integer|false|none|none|
|tangibleAssetValue|integer|false|none|none|
|tangibleAssetsBookValuePerShare|number(double)|false|none|none|
|taxAssets|integer|false|none|none|
|taxLiabilities|integer|false|none|none|
|ticker|string|true|none|The exchange symbol that this item is traded under.|
|totalLiabilities|integer|false|none|none|
|tradeAndNonTradePayables|integer|false|none|none|
|tradeAndNonTradeReceivables|integer|false|none|none|
|updated|string(date-time)|false|none|none|
|weightedAverageShares|integer|false|none|none|
|weightedAverageSharesDiluted|integer|false|none|none|
|workingCapital|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|period|Q|
|period|T|
|period|QA|
|period|TA|
|period|Y|
|period|YA|

<h2 id="tocS_Fmv">Fmv</h2>
<!-- backwards compatibility -->
<a id="schemafmv"></a>
<a id="schema_Fmv"></a>
<a id="tocSfmv"></a>
<a id="tocsfmv"></a>

```json
0
```

Fair market value is only available on Business plans. It is our proprietary algorithm to generate a real-time, accurate, fair market value of a tradable security. For more information, <a rel="nofollow" target="_blank" href="https://massive.com/contact">contact us</a>.

<h2 id="tocS_ForexConversion">ForexConversion</h2>
<!-- backwards compatibility -->
<a id="schemaforexconversion"></a>
<a id="schema_ForexConversion"></a>
<a id="tocSforexconversion"></a>
<a id="tocsforexconversion"></a>

```json
{
  "converted": 0,
  "from": "string",
  "initialAmount": 0,
  "last": {
    "ask": 0,
    "bid": 0,
    "exchange": 0,
    "timestamp": 0
  },
  "to": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|converted|number(double)|true|none|The result of the conversion.|
|from|string|true|none|The "from" currency symbol.|
|initialAmount|number(double)|true|none|The amount to convert.|
|last|object|false|none|none|
|to|string|true|none|The "to" currency symbol.|

<h2 id="tocS_ForexExchangeId">ForexExchangeId</h2>
<!-- backwards compatibility -->
<a id="schemaforexexchangeid"></a>
<a id="schema_ForexExchangeId"></a>
<a id="tocSforexexchangeid"></a>
<a id="tocsforexexchangeid"></a>

```json
0
```

The exchange ID. See <a href="https://massive.com/docs/rest/forex/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.

<h2 id="tocS_ForexGroupedResults">ForexGroupedResults</h2>
<!-- backwards compatibility -->
<a id="schemaforexgroupedresults"></a>
<a id="schema_ForexGroupedResults"></a>
<a id="tocSforexgroupedresults"></a>
<a id="tocsforexgroupedresults"></a>

```json
{
  "results": [
    {
      "T": "string",
      "c": 0,
      "h": 0,
      "l": 0,
      "n": 0,
      "o": 0,
      "t": 0,
      "v": 0,
      "vw": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|An array of results containing the requested data.|

<h2 id="tocS_ForexHistoricTrades">ForexHistoricTrades</h2>
<!-- backwards compatibility -->
<a id="schemaforexhistorictrades"></a>
<a id="schema_ForexHistoricTrades"></a>
<a id="tocSforexhistorictrades"></a>
<a id="tocsforexhistorictrades"></a>

```json
{
  "day": "1970-01-01",
  "map": {},
  "msLatency": 0,
  "pair": "string",
  "ticks": [
    {
      "a": 0,
      "b": 0,
      "t": 0,
      "x": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|string(date)|true|none|The date that was evaluated from the request.|
|map|object|true|none|A map for shortened result keys.|
|msLatency|integer|true|none|The milliseconds of latency for the query results.|
|pair|string|true|none|The currency pair that was evaluated from the request.|
|ticks|[object]|true|none|none|

<h2 id="tocS_ForexPairLastQuote">ForexPairLastQuote</h2>
<!-- backwards compatibility -->
<a id="schemaforexpairlastquote"></a>
<a id="schema_ForexPairLastQuote"></a>
<a id="tocSforexpairlastquote"></a>
<a id="tocsforexpairlastquote"></a>

```json
{
  "last": {
    "ask": 0,
    "bid": 0,
    "exchange": 0,
    "timestamp": 0
  },
  "symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|last|object|false|none|none|
|symbol|string|true|none|The symbol pair that was evaluated from the request.|

<h2 id="tocS_ForexPreviousClose">ForexPreviousClose</h2>
<!-- backwards compatibility -->
<a id="schemaforexpreviousclose"></a>
<a id="schema_ForexPreviousClose"></a>
<a id="tocSforexpreviousclose"></a>
<a id="tocsforexpreviousclose"></a>

```json
{
  "results": [
    {
      "T": "string",
      "c": 0,
      "h": 0,
      "l": 0,
      "n": 0,
      "o": 0,
      "t": 0,
      "v": 0,
      "vw": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|An array of results containing the requested data.|

<h2 id="tocS_ForexSnapshotLastQuote">ForexSnapshotLastQuote</h2>
<!-- backwards compatibility -->
<a id="schemaforexsnapshotlastquote"></a>
<a id="schema_ForexSnapshotLastQuote"></a>
<a id="tocSforexsnapshotlastquote"></a>
<a id="tocsforexsnapshotlastquote"></a>

```json
{
  "a": 0,
  "b": 0,
  "t": 0,
  "x": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|a|number(double)|true|none|The ask price.|
|b|number(double)|true|none|The bid price.|
|t|integer|true|none|The millisecond accuracy timestamp of the quote.|
|x|integer|true|none|The exchange ID on which this quote happened.|

<h2 id="tocS_ForexSnapshotPrevDay">ForexSnapshotPrevDay</h2>
<!-- backwards compatibility -->
<a id="schemaforexsnapshotprevday"></a>
<a id="schema_ForexSnapshotPrevDay"></a>
<a id="tocSforexsnapshotprevday"></a>
<a id="tocsforexsnapshotprevday"></a>

```json
{
  "c": 0,
  "h": 0,
  "l": 0,
  "o": 0,
  "v": 0,
  "vw": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|number(double)|true|none|The close price for the symbol in the given time period.|
|h|number(double)|true|none|The highest price for the symbol in the given time period.|
|l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|o|number(double)|true|none|The open price for the symbol in the given time period.|
|v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|vw|number(double)|true|none|The volume weighted average price.|

<h2 id="tocS_ForexSnapshotTicker">ForexSnapshotTicker</h2>
<!-- backwards compatibility -->
<a id="schemaforexsnapshotticker"></a>
<a id="schema_ForexSnapshotTicker"></a>
<a id="tocSforexsnapshotticker"></a>
<a id="tocsforexsnapshotticker"></a>

```json
{
  "ticker": {
    "day": {
      "c": 0,
      "h": 0,
      "l": 0,
      "o": 0,
      "v": 0
    },
    "fmv": 0,
    "lastQuote": {
      "a": 0,
      "b": 0,
      "t": 0,
      "x": 0
    },
    "min": {
      "c": 0,
      "h": 0,
      "l": 0,
      "n": 0,
      "o": 0,
      "t": 0,
      "v": 0
    },
    "prevDay": {
      "c": 0,
      "h": 0,
      "l": 0,
      "o": 0,
      "v": 0,
      "vw": 0
    },
    "ticker": "string",
    "todaysChange": 0,
    "todaysChangePerc": 0,
    "updated": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ticker|object|false|none|Contains the requested snapshot data for the specified ticker.|

<h2 id="tocS_ForexSnapshotTickers">ForexSnapshotTickers</h2>
<!-- backwards compatibility -->
<a id="schemaforexsnapshottickers"></a>
<a id="schema_ForexSnapshotTickers"></a>
<a id="tocSforexsnapshottickers"></a>
<a id="tocsforexsnapshottickers"></a>

```json
{
  "tickers": [
    {
      "day": {
        "c": 0,
        "h": 0,
        "l": 0,
        "o": 0,
        "v": 0
      },
      "fmv": 0,
      "lastQuote": {
        "a": 0,
        "b": 0,
        "t": 0,
        "x": 0
      },
      "min": {
        "c": 0,
        "h": 0,
        "l": 0,
        "n": 0,
        "o": 0,
        "t": 0,
        "v": 0
      },
      "prevDay": {
        "c": 0,
        "h": 0,
        "l": 0,
        "o": 0,
        "v": 0,
        "vw": 0
      },
      "ticker": "string",
      "todaysChange": 0,
      "todaysChangePerc": 0,
      "updated": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tickers|[object]|false|none|An array of snapshot data for the specified tickers.|

<h2 id="tocS_ForexTickerResults">ForexTickerResults</h2>
<!-- backwards compatibility -->
<a id="schemaforextickerresults"></a>
<a id="schema_ForexTickerResults"></a>
<a id="tocSforextickerresults"></a>
<a id="tocsforextickerresults"></a>

```json
{
  "results": [
    {
      "c": 0,
      "h": 0,
      "l": 0,
      "n": 0,
      "o": 0,
      "t": 0,
      "v": 0,
      "vw": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|An array of results containing the requested data.|

<h2 id="tocS_High">High</h2>
<!-- backwards compatibility -->
<a id="schemahigh"></a>
<a id="schema_High"></a>
<a id="tocShigh"></a>
<a id="tocshigh"></a>

```json
0
```

The highest price for the symbol in the given time period.

<h2 id="tocS_HighIndices">HighIndices</h2>
<!-- backwards compatibility -->
<a id="schemahighindices"></a>
<a id="schema_HighIndices"></a>
<a id="tocShighindices"></a>
<a id="tocshighindices"></a>

```json
0
```

The highest value for the symbol in the given time period.

<h2 id="tocS_IndexAggsBase">IndexAggsBase</h2>
<!-- backwards compatibility -->
<a id="schemaindexaggsbase"></a>
<a id="schema_IndexAggsBase"></a>
<a id="tocSindexaggsbase"></a>
<a id="tocsindexaggsbase"></a>

```json
{
  "queryCount": 0,
  "request_id": "string",
  "resultsCount": 0,
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryCount|integer|true|none|The number of aggregates (minute or day) used to generate the response.|
|request_id|string|true|none|A request id assigned by the server.|
|resultsCount|integer|true|none|The total number of results for this request.|
|status|string|true|none|The status of this request's response.|

<h2 id="tocS_Indicators">Indicators</h2>
<!-- backwards compatibility -->
<a id="schemaindicators"></a>
<a id="schema_Indicators"></a>
<a id="tocSindicators"></a>
<a id="tocsindicators"></a>

```json
[
  0
]
```

The indicators. For more information, see our glossary of [Conditions and
Indicators](https://massive.com/glossary/conditions-indicators).

<h2 id="tocS_IndicesGroupedResults">IndicesGroupedResults</h2>
<!-- backwards compatibility -->
<a id="schemaindicesgroupedresults"></a>
<a id="schema_IndicesGroupedResults"></a>
<a id="tocSindicesgroupedresults"></a>
<a id="tocsindicesgroupedresults"></a>

```json
{
  "results": [
    {
      "c": 0,
      "h": 0,
      "l": 0,
      "o": 0,
      "t": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|An array of results containing the requested data.|

<h2 id="tocS_IndicesOpenClose">IndicesOpenClose</h2>
<!-- backwards compatibility -->
<a id="schemaindicesopenclose"></a>
<a id="schema_IndicesOpenClose"></a>
<a id="tocSindicesopenclose"></a>
<a id="tocsindicesopenclose"></a>

```json
{
  "afterHours": 0,
  "close": 0,
  "from": "1970-01-01",
  "high": 0,
  "low": 0,
  "open": 0,
  "preMarket": 0,
  "status": "string",
  "symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|afterHours|number(double)|false|none|The close value of the ticker symbol in after hours trading.|
|close|number(double)|true|none|The close value for the symbol in the given time period.|
|from|string(date)|true|none|The requested date.|
|high|number(double)|true|none|The highest value for the symbol in the given time period.|
|low|number(double)|true|none|The lowest value for the symbol in the given time period.|
|open|number(double)|true|none|The open value for the symbol in the given time period.|
|preMarket|number(double)|false|none|The open value of the ticker symbol in pre-market trading.|
|status|string|true|none|The status of this request's response.|
|symbol|string|true|none|The exchange symbol that this item is traded under.|

<h2 id="tocS_IndicesPreviousCloseResults">IndicesPreviousCloseResults</h2>
<!-- backwards compatibility -->
<a id="schemaindicespreviouscloseresults"></a>
<a id="schema_IndicesPreviousCloseResults"></a>
<a id="tocSindicespreviouscloseresults"></a>
<a id="tocsindicespreviouscloseresults"></a>

```json
{
  "results": [
    {
      "T": "string",
      "c": 0,
      "h": 0,
      "l": 0,
      "o": 0,
      "t": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|An array of results containing the requested data.|

<h2 id="tocS_IndicesTickerResults">IndicesTickerResults</h2>
<!-- backwards compatibility -->
<a id="schemaindicestickerresults"></a>
<a id="schema_IndicesTickerResults"></a>
<a id="tocSindicestickerresults"></a>
<a id="tocsindicestickerresults"></a>

```json
{
  "results": [
    {
      "c": 0,
      "h": 0,
      "l": 0,
      "n": 0,
      "o": 0,
      "t": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|An array of results containing the requested data.|

<h2 id="tocS_Locales">Locales</h2>
<!-- backwards compatibility -->
<a id="schemalocales"></a>
<a id="schema_Locales"></a>
<a id="tocSlocales"></a>
<a id="tocslocales"></a>

```json
{
  "results": [
    {
      "locale": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|none|

<h2 id="tocS_Low">Low</h2>
<!-- backwards compatibility -->
<a id="schemalow"></a>
<a id="schema_Low"></a>
<a id="tocSlow"></a>
<a id="tocslow"></a>

```json
0
```

The lowest price for the symbol in the given time period.

<h2 id="tocS_LowIndices">LowIndices</h2>
<!-- backwards compatibility -->
<a id="schemalowindices"></a>
<a id="schema_LowIndices"></a>
<a id="tocSlowindices"></a>
<a id="tocslowindices"></a>

```json
0
```

The lowest value for the symbol in the given time period.

<h2 id="tocS_Map">Map</h2>
<!-- backwards compatibility -->
<a id="schemamap"></a>
<a id="schema_Map"></a>
<a id="tocSmap"></a>
<a id="tocsmap"></a>

```json
{
  "key": {
    "name": "string",
    "type": "string"
  }
}
```

A mapping of the keys returned in the results to their descriptive name and data types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|A dynamic key from the results set|

<h2 id="tocS_MarketHoliday">MarketHoliday</h2>
<!-- backwards compatibility -->
<a id="schemamarketholiday"></a>
<a id="schema_MarketHoliday"></a>
<a id="tocSmarketholiday"></a>
<a id="tocsmarketholiday"></a>

```json
[
  {
    "close": "1970-01-01T00:00:00Z",
    "date": "1970-01-01",
    "exchange": "string",
    "name": "string",
    "open": "1970-01-01T00:00:00Z",
    "status": "string"
  }
]
```

An array of upcoming market holidays and their corresponding dates.

<h2 id="tocS_MarketStatus">MarketStatus</h2>
<!-- backwards compatibility -->
<a id="schemamarketstatus"></a>
<a id="schema_MarketStatus"></a>
<a id="tocSmarketstatus"></a>
<a id="tocsmarketstatus"></a>

```json
{
  "afterHours": true,
  "currencies": {
    "crypto": "string",
    "fx": "string"
  },
  "earlyHours": true,
  "exchanges": {
    "nasdaq": "string",
    "nyse": "string",
    "otc": "string"
  },
  "market": "string",
  "serverTime": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|afterHours|boolean|false|none|Whether or not the market is in post-market hours.|
|currencies|object|false|none|none|
|earlyHours|boolean|false|none|Whether or not the market is in pre-market hours.|
|exchanges|object|false|none|none|
|market|string|false|none|The status of the market as a whole.|
|serverTime|string(date-time)|false|none|The current time of the server.|

<h2 id="tocS_Markets">Markets</h2>
<!-- backwards compatibility -->
<a id="schemamarkets"></a>
<a id="schema_Markets"></a>
<a id="tocSmarkets"></a>
<a id="tocsmarkets"></a>

```json
{
  "results": [
    {
      "desc": "string",
      "market": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|A list of supported markets.|

<h2 id="tocS_MsLatency">MsLatency</h2>
<!-- backwards compatibility -->
<a id="schemamslatency"></a>
<a id="schema_MsLatency"></a>
<a id="tocSmslatency"></a>
<a id="tocsmslatency"></a>

```json
0
```

The milliseconds of latency for the query results.

<h2 id="tocS_News">News</h2>
<!-- backwards compatibility -->
<a id="schemanews"></a>
<a id="schema_News"></a>
<a id="tocSnews"></a>
<a id="tocsnews"></a>

```json
[
  {
    "image": "string",
    "keywords": [
      "string"
    ],
    "source": "string",
    "summary": "string",
    "symbols": [
      "string"
    ],
    "timestamp": "1970-01-01T00:00:00Z",
    "title": "string",
    "url": "string"
  }
]
```

<h2 id="tocS_NumberOfItems">NumberOfItems</h2>
<!-- backwards compatibility -->
<a id="schemanumberofitems"></a>
<a id="schema_NumberOfItems"></a>
<a id="tocSnumberofitems"></a>
<a id="tocsnumberofitems"></a>

```json
0
```

The number of transactions in the aggregate window.

<h2 id="tocS_OTC">OTC</h2>
<!-- backwards compatibility -->
<a id="schemaotc"></a>
<a id="schema_OTC"></a>
<a id="tocSotc"></a>
<a id="tocsotc"></a>

```json
true
```

Whether or not this aggregate is for an OTC ticker. This field will be left off if false.

<h2 id="tocS_Open">Open</h2>
<!-- backwards compatibility -->
<a id="schemaopen"></a>
<a id="schema_Open"></a>
<a id="tocSopen"></a>
<a id="tocsopen"></a>

```json
0
```

The open price for the symbol in the given time period.

<h2 id="tocS_OpenIndices">OpenIndices</h2>
<!-- backwards compatibility -->
<a id="schemaopenindices"></a>
<a id="schema_OpenIndices"></a>
<a id="tocSopenindices"></a>
<a id="tocsopenindices"></a>

```json
0
```

The open value for the symbol in the given time period.

<h2 id="tocS_PaginationHooksBase">PaginationHooksBase</h2>
<!-- backwards compatibility -->
<a id="schemapaginationhooksbase"></a>
<a id="schema_PaginationHooksBase"></a>
<a id="tocSpaginationhooksbase"></a>
<a id="tocspaginationhooksbase"></a>

```json
{
  "next_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_url|string|false|none|If present, this value can be used to fetch the next page of data.|

<h2 id="tocS_PreviousCloseResults">PreviousCloseResults</h2>
<!-- backwards compatibility -->
<a id="schemapreviouscloseresults"></a>
<a id="schema_PreviousCloseResults"></a>
<a id="tocSpreviouscloseresults"></a>
<a id="tocspreviouscloseresults"></a>

```json
{
  "results": [
    {
      "T": "string",
      "c": 0,
      "h": 0,
      "l": 0,
      "n": 0,
      "o": 0,
      "t": 0,
      "v": 0,
      "vw": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|An array of results containing the requested data.|

<h2 id="tocS_Price">Price</h2>
<!-- backwards compatibility -->
<a id="schemaprice"></a>
<a id="schema_Price"></a>
<a id="tocSprice"></a>
<a id="tocsprice"></a>

```json
0
```

The price of the trade. This is the actual dollar value per whole share of
this trade. A trade of 100 shares with a price of $2.00 would be worth a
total dollar value of $200.00.

<h2 id="tocS_QueryCount">QueryCount</h2>
<!-- backwards compatibility -->
<a id="schemaquerycount"></a>
<a id="schema_QueryCount"></a>
<a id="tocSquerycount"></a>
<a id="tocsquerycount"></a>

```json
0
```

The number of aggregates (minute or day) used to generate the response.

<h2 id="tocS_RatingSection">RatingSection</h2>
<!-- backwards compatibility -->
<a id="schemaratingsection"></a>
<a id="schema_RatingSection"></a>
<a id="tocSratingsection"></a>
<a id="tocsratingsection"></a>

```json
{
  "current": 0,
  "month1": 1,
  "month2": 3,
  "month3": 4,
  "month4": 3,
  "month5": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current|number|true|none|Analyst Rating at current month|
|month1|number|true|none|Analyst Ratings at 1 month in the future|
|month2|number|true|none|Analyst Ratings at 2 month in the future|
|month3|number|true|none|Analyst Ratings at 3 month in the future|
|month4|number|false|none|Analyst Ratings at 4 month in the future|
|month5|number|false|none|Analyst Ratings at 5 month in the future|

<h2 id="tocS_RequestID">RequestID</h2>
<!-- backwards compatibility -->
<a id="schemarequestid"></a>
<a id="schema_RequestID"></a>
<a id="tocSrequestid"></a>
<a id="tocsrequestid"></a>

```json
"string"
```

A request id assigned by the server.

<h2 id="tocS_RequestIdBase">RequestIdBase</h2>
<!-- backwards compatibility -->
<a id="schemarequestidbase"></a>
<a id="schema_RequestIdBase"></a>
<a id="tocSrequestidbase"></a>
<a id="tocsrequestidbase"></a>

```json
{
  "request_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string|true|none|A request id assigned by the server.|

<h2 id="tocS_SequenceNumber">SequenceNumber</h2>
<!-- backwards compatibility -->
<a id="schemasequencenumber"></a>
<a id="schema_SequenceNumber"></a>
<a id="tocSsequencenumber"></a>
<a id="tocssequencenumber"></a>

```json
0
```

The sequence number represents the sequence in which message events happened.
These are increasing and unique per ticker symbol, but will not always be
sequential (e.g., 1, 2, 6, 9, 10, 11).

<h2 id="tocS_Size">Size</h2>
<!-- backwards compatibility -->
<a id="schemasize"></a>
<a id="schema_Size"></a>
<a id="tocSsize"></a>
<a id="tocssize"></a>

```json
0
```

The size of a trade (also known as volume).

<h2 id="tocS_SnapshotMinOHLCV">SnapshotMinOHLCV</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotminohlcv"></a>
<a id="schema_SnapshotMinOHLCV"></a>
<a id="tocSsnapshotminohlcv"></a>
<a id="tocssnapshotminohlcv"></a>

```json
{
  "c": 0,
  "h": 0,
  "l": 0,
  "n": 0,
  "o": 0,
  "t": 0,
  "v": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|number(double)|false|none|The close price for the symbol in the given time period.|
|h|number(double)|false|none|The highest price for the symbol in the given time period.|
|l|number(double)|false|none|The lowest price for the symbol in the given time period.|
|n|integer|false|none|The number of transactions in the aggregate window.|
|o|number(double)|false|none|The open price for the symbol in the given time period.|
|t|integer|false|none|The Unix millisecond timestamp for the start of the aggregate window.|
|v|number(double)|false|none|The trading volume of the symbol in the given time period.|

<h2 id="tocS_SnapshotOHLCV">SnapshotOHLCV</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotohlcv"></a>
<a id="schema_SnapshotOHLCV"></a>
<a id="tocSsnapshotohlcv"></a>
<a id="tocssnapshotohlcv"></a>

```json
{
  "c": 0,
  "h": 0,
  "l": 0,
  "o": 0,
  "v": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|number(double)|true|none|The close price for the symbol in the given time period.|
|h|number(double)|true|none|The highest price for the symbol in the given time period.|
|l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|o|number(double)|true|none|The open price for the symbol in the given time period.|
|v|number(double)|true|none|The trading volume of the symbol in the given time period.|

<h2 id="tocS_SnapshotOHLCVVW">SnapshotOHLCVVW</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotohlcvvw"></a>
<a id="schema_SnapshotOHLCVVW"></a>
<a id="tocSsnapshotohlcvvw"></a>
<a id="tocssnapshotohlcvvw"></a>

```json
{
  "c": 0,
  "h": 0,
  "l": 0,
  "o": 0,
  "v": 0,
  "vw": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|number(double)|true|none|The close price for the symbol in the given time period.|
|h|number(double)|true|none|The highest price for the symbol in the given time period.|
|l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|o|number(double)|true|none|The open price for the symbol in the given time period.|
|v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|vw|number(double)|true|none|The volume weighted average price.|

<h2 id="tocS_SnapshotOHLCVVWOtc">SnapshotOHLCVVWOtc</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotohlcvvwotc"></a>
<a id="schema_SnapshotOHLCVVWOtc"></a>
<a id="tocSsnapshotohlcvvwotc"></a>
<a id="tocssnapshotohlcvvwotc"></a>

```json
{
  "c": 0,
  "dv": "string",
  "h": 0,
  "l": 0,
  "o": 0,
  "otc": true,
  "v": 0,
  "vw": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|number(double)|true|none|The close price for the symbol in the given time period.|
|dv|string|false|none|The volume including fractional shares, respresented as a string.|
|h|number(double)|true|none|The highest price for the symbol in the given time period.|
|l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|o|number(double)|true|none|The open price for the symbol in the given time period.|
|otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|vw|number(double)|true|none|The volume weighted average price.|

<h2 id="tocS_StandardBase">StandardBase</h2>
<!-- backwards compatibility -->
<a id="schemastandardbase"></a>
<a id="schema_StandardBase"></a>
<a id="tocSstandardbase"></a>
<a id="tocsstandardbase"></a>

```json
{
  "request_id": "string",
  "count": 0,
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string|true|none|A request id assigned by the server.|
|count|integer|false|none|The total number of results for this request.|
|status|string|true|none|The status of this request's response.|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"string"
```

The status of this request's response.

<h2 id="tocS_StatusBase">StatusBase</h2>
<!-- backwards compatibility -->
<a id="schemastatusbase"></a>
<a id="schema_StatusBase"></a>
<a id="tocSstatusbase"></a>
<a id="tocsstatusbase"></a>

```json
{
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status of this request's response.|

<h2 id="tocS_StatusCountBase">StatusCountBase</h2>
<!-- backwards compatibility -->
<a id="schemastatuscountbase"></a>
<a id="schema_StatusCountBase"></a>
<a id="tocSstatuscountbase"></a>
<a id="tocsstatuscountbase"></a>

```json
{
  "count": 0,
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The total number of results for this request.|
|status|string|true|none|The status of this request's response.|

<h2 id="tocS_StockSymbol">StockSymbol</h2>
<!-- backwards compatibility -->
<a id="schemastocksymbol"></a>
<a id="schema_StockSymbol"></a>
<a id="tocSstocksymbol"></a>
<a id="tocsstocksymbol"></a>

```json
"string"
```

The exchange symbol that this item is traded under.

<h2 id="tocS_StocksGroupedResults">StocksGroupedResults</h2>
<!-- backwards compatibility -->
<a id="schemastocksgroupedresults"></a>
<a id="schema_StocksGroupedResults"></a>
<a id="tocSstocksgroupedresults"></a>
<a id="tocsstocksgroupedresults"></a>

```json
{
  "results": [
    {
      "T": "string",
      "c": 0,
      "h": 0,
      "l": 0,
      "n": 0,
      "o": 0,
      "otc": true,
      "t": 0,
      "v": 0,
      "vw": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|An array of results containing the requested data.|

<h2 id="tocS_StocksOpenClose">StocksOpenClose</h2>
<!-- backwards compatibility -->
<a id="schemastocksopenclose"></a>
<a id="schema_StocksOpenClose"></a>
<a id="tocSstocksopenclose"></a>
<a id="tocsstocksopenclose"></a>

```json
{
  "afterHours": 0,
  "close": 0,
  "from": "1970-01-01",
  "high": 0,
  "low": 0,
  "open": 0,
  "otc": true,
  "preMarket": 0,
  "status": "string",
  "symbol": "string",
  "volume": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|afterHours|number(double)|false|none|The close price of the ticker symbol in after hours trading.|
|close|number(double)|true|none|The close price for the symbol in the given time period.|
|from|string(date)|true|none|The requested date.|
|high|number(double)|true|none|The highest price for the symbol in the given time period.|
|low|number(double)|true|none|The lowest price for the symbol in the given time period.|
|open|number(double)|true|none|The open price for the symbol in the given time period.|
|otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|preMarket|number(double)|false|none|The open price of the ticker symbol in pre-market trading.|
|status|string|true|none|The status of this request's response.|
|symbol|string|true|none|The exchange symbol that this item is traded under.|
|volume|number(double)|true|none|The trading volume of the symbol in the given time period.|

<h2 id="tocS_StocksSnapshotLastQuote">StocksSnapshotLastQuote</h2>
<!-- backwards compatibility -->
<a id="schemastockssnapshotlastquote"></a>
<a id="schema_StocksSnapshotLastQuote"></a>
<a id="tocSstockssnapshotlastquote"></a>
<a id="tocsstockssnapshotlastquote"></a>

```json
{
  "P": 0,
  "S": 0,
  "p": 0,
  "s": 0,
  "t": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|P|number(double)|true|none|The ask price.|
|S|integer|true|none|The ask size in lots.|
|p|number(double)|true|none|The bid price.|
|s|integer|true|none|The bid size in lots.|
|t|integer|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this message from the exchange which produced it.|

<h2 id="tocS_StocksSnapshotMinute">StocksSnapshotMinute</h2>
<!-- backwards compatibility -->
<a id="schemastockssnapshotminute"></a>
<a id="schema_StocksSnapshotMinute"></a>
<a id="tocSstockssnapshotminute"></a>
<a id="tocsstockssnapshotminute"></a>

```json
{
  "av": 0,
  "c": 0,
  "dav": "string",
  "dv": "string",
  "h": 0,
  "l": 0,
  "n": 0,
  "o": 0,
  "t": 0,
  "v": 0,
  "vw": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|av|integer|true|none|The accumulated volume.|
|c|number(double)|true|none|The close price for the symbol in the given time period.|
|dav|string|true|none|The accumulated volume including fractional shares, respresented as a string.|
|dv|string|false|none|The volume including fractional shares, respresented as a string.|
|h|number(double)|true|none|The highest price for the symbol in the given time period.|
|l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|n|integer|true|none|The number of transactions in the aggregate window.|
|o|number(double)|true|none|The open price for the symbol in the given time period.|
|t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|vw|number(double)|true|none|The volume weighted average price.|

<h2 id="tocS_StocksSnapshotMinuteOTC">StocksSnapshotMinuteOTC</h2>
<!-- backwards compatibility -->
<a id="schemastockssnapshotminuteotc"></a>
<a id="schema_StocksSnapshotMinuteOTC"></a>
<a id="tocSstockssnapshotminuteotc"></a>
<a id="tocsstockssnapshotminuteotc"></a>

```json
{
  "av": 0,
  "c": 0,
  "dav": "string",
  "dv": "string",
  "h": 0,
  "l": 0,
  "n": 0,
  "o": 0,
  "otc": true,
  "t": 0,
  "v": 0,
  "vw": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|av|integer|true|none|The accumulated volume.|
|c|number(double)|true|none|The close price for the symbol in the given time period.|
|dav|string|true|none|The accumulated volume including fractional shares, respresented as a string.|
|dv|string|false|none|The volume including fractional shares, respresented as a string.|
|h|number(double)|true|none|The highest price for the symbol in the given time period.|
|l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|n|integer|true|none|The number of transactions in the aggregate window.|
|o|number(double)|true|none|The open price for the symbol in the given time period.|
|otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|t|integer|true|none|The Unix millisecond timestamp for the start of the aggregate window.|
|v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|vw|number(double)|true|none|The volume weighted average price.|

<h2 id="tocS_StocksSnapshotPrevDay">StocksSnapshotPrevDay</h2>
<!-- backwards compatibility -->
<a id="schemastockssnapshotprevday"></a>
<a id="schema_StocksSnapshotPrevDay"></a>
<a id="tocSstockssnapshotprevday"></a>
<a id="tocsstockssnapshotprevday"></a>

```json
{
  "c": 0,
  "h": 0,
  "l": 0,
  "o": 0,
  "otc": true,
  "v": 0,
  "vw": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|number(double)|true|none|The close price for the symbol in the given time period.|
|h|number(double)|true|none|The highest price for the symbol in the given time period.|
|l|number(double)|true|none|The lowest price for the symbol in the given time period.|
|o|number(double)|true|none|The open price for the symbol in the given time period.|
|otc|boolean|false|none|Whether or not this aggregate is for an OTC ticker. This field will be left off if false.|
|v|number(double)|true|none|The trading volume of the symbol in the given time period.|
|vw|number(double)|true|none|The volume weighted average price.|

<h2 id="tocS_StocksSnapshotTicker">StocksSnapshotTicker</h2>
<!-- backwards compatibility -->
<a id="schemastockssnapshotticker"></a>
<a id="schema_StocksSnapshotTicker"></a>
<a id="tocSstockssnapshotticker"></a>
<a id="tocsstockssnapshotticker"></a>

```json
{
  "ticker": {
    "day": {
      "c": 0,
      "dv": "string",
      "h": 0,
      "l": 0,
      "o": 0,
      "otc": true,
      "v": 0,
      "vw": 0
    },
    "fmv": 0,
    "lastQuote": {
      "P": 0,
      "S": 0,
      "p": 0,
      "s": 0,
      "t": 0
    },
    "lastTrade": {
      "c": [
        0
      ],
      "ds": "string",
      "i": "string",
      "p": 0,
      "s": 0,
      "t": 0,
      "x": 0
    },
    "min": {
      "av": 0,
      "c": 0,
      "dav": "string",
      "dv": "string",
      "h": 0,
      "l": 0,
      "n": 0,
      "o": 0,
      "otc": true,
      "t": 0,
      "v": 0,
      "vw": 0
    },
    "prevDay": {
      "c": 0,
      "h": 0,
      "l": 0,
      "o": 0,
      "otc": true,
      "v": 0,
      "vw": 0
    },
    "ticker": "string",
    "todaysChange": 0,
    "todaysChangePerc": 0,
    "updated": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ticker|object|false|none|Contains the requested snapshot data for the specified ticker.|

<h2 id="tocS_StocksSnapshotTickers">StocksSnapshotTickers</h2>
<!-- backwards compatibility -->
<a id="schemastockssnapshottickers"></a>
<a id="schema_StocksSnapshotTickers"></a>
<a id="tocSstockssnapshottickers"></a>
<a id="tocsstockssnapshottickers"></a>

```json
{
  "tickers": [
    {
      "day": {
        "c": 0,
        "dv": "string",
        "h": 0,
        "l": 0,
        "o": 0,
        "otc": true,
        "v": 0,
        "vw": 0
      },
      "fmv": 0,
      "lastQuote": {
        "P": 0,
        "S": 0,
        "p": 0,
        "s": 0,
        "t": 0
      },
      "lastTrade": {
        "c": [
          0
        ],
        "ds": "string",
        "i": "string",
        "p": 0,
        "s": 0,
        "t": 0,
        "x": 0
      },
      "min": {
        "av": 0,
        "c": 0,
        "dav": "string",
        "dv": "string",
        "h": 0,
        "l": 0,
        "n": 0,
        "o": 0,
        "otc": true,
        "t": 0,
        "v": 0,
        "vw": 0
      },
      "prevDay": {
        "c": 0,
        "h": 0,
        "l": 0,
        "o": 0,
        "otc": true,
        "v": 0,
        "vw": 0
      },
      "ticker": "string",
      "todaysChange": 0,
      "todaysChangePerc": 0,
      "updated": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tickers|[object]|false|none|An array of snapshot data for the specified tickers.|

<h2 id="tocS_StocksTickerResultsOTC">StocksTickerResultsOTC</h2>
<!-- backwards compatibility -->
<a id="schemastockstickerresultsotc"></a>
<a id="schema_StocksTickerResultsOTC"></a>
<a id="tocSstockstickerresultsotc"></a>
<a id="tocsstockstickerresultsotc"></a>

```json
{
  "results": [
    {
      "c": 0,
      "h": 0,
      "l": 0,
      "n": 0,
      "o": 0,
      "otc": true,
      "t": 0,
      "v": 0,
      "vw": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|An array of results containing the requested data.|

<h2 id="tocS_StocksV2Base">StocksV2Base</h2>
<!-- backwards compatibility -->
<a id="schemastocksv2base"></a>
<a id="schema_StocksV2Base"></a>
<a id="tocSstocksv2base"></a>
<a id="tocsstocksv2base"></a>

```json
{
  "T": "string",
  "f": 0,
  "q": 0,
  "t": 0,
  "y": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|T|string|true|none|The exchange symbol that this item is traded under.|
|f|integer|true|none|The nanosecond accuracy TRF(Trade Reporting Facility) Unix Timestamp. This is the timestamp of when the trade reporting facility received this message.|
|q|integer(int64)|true|none|The sequence number represents the sequence in which message events happened.<br>These are increasing and unique per ticker symbol, but will not always be<br>sequential (e.g., 1, 2, 6, 9, 10, 11).<br>|
|t|integer|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this message from the exchange which produced it.|
|y|integer|true|none|The nanosecond accuracy Participant/Exchange Unix Timestamp. This is the timestamp of when the quote was actually generated at the exchange.|

<h2 id="tocS_StocksV2NBBO">StocksV2NBBO</h2>
<!-- backwards compatibility -->
<a id="schemastocksv2nbbo"></a>
<a id="schema_StocksV2NBBO"></a>
<a id="tocSstocksv2nbbo"></a>
<a id="tocsstocksv2nbbo"></a>

```json
{
  "T": "string",
  "f": 0,
  "q": 0,
  "t": 0,
  "y": 0,
  "P": 0,
  "S": 0,
  "X": 0,
  "c": [
    0
  ],
  "i": [
    0
  ],
  "p": 0,
  "s": 0,
  "x": 0,
  "z": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|T|string|true|none|The exchange symbol that this item is traded under.|
|f|integer|true|none|The nanosecond accuracy TRF(Trade Reporting Facility) Unix Timestamp. This is the timestamp of when the trade reporting facility received this message.|
|q|integer(int64)|true|none|The sequence number represents the sequence in which message events happened.<br>These are increasing and unique per ticker symbol, but will not always be<br>sequential (e.g., 1, 2, 6, 9, 10, 11).<br>|
|t|integer|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this message from the exchange which produced it.|
|y|integer|true|none|The nanosecond accuracy Participant/Exchange Unix Timestamp. This is the timestamp of when the quote was actually generated at the exchange.|
|P|number(double)|true|none|The ask price.|
|S|integer|true|none|The ask size. This represents the number of shares sellers are offering at the given ask price.|
|X|integer|true|none|The ask exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|c|[integer]|true|none|A list of condition codes. See [Stocks Condition Codes](https://massive.com/docs/rest/stocks/market-operations/condition-codes) for what each code means.|
|i|[integer]|true|none|The indicators. For more information, see our glossary of [Conditions and<br>Indicators](https://massive.com/glossary/conditions-indicators).<br>|
|p|number(double)|true|none|The bid price.|
|s|integer|true|none|The bid size. This represents the number of shares buyers are bidding for at the given bid price.|
|x|integer|true|none|The bid exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|z|integer|true|none|There are 3 tapes which define which exchange the ticker is listed on. These are integers in our objects which represent the letter of the alphabet. Eg: 1 = A, 2 = B, 3 = C.<br>* Tape A is NYSE listed securities<br>* Tape B is NYSE ARCA / NYSE American<br>* Tape C is NASDAQ<br>|

<h2 id="tocS_StocksV2NBBOs">StocksV2NBBOs</h2>
<!-- backwards compatibility -->
<a id="schemastocksv2nbbos"></a>
<a id="schema_StocksV2NBBOs"></a>
<a id="tocSstocksv2nbbos"></a>
<a id="tocsstocksv2nbbos"></a>

```json
{
  "results": [
    {
      "T": "string",
      "f": 0,
      "q": 0,
      "t": 0,
      "y": 0,
      "P": 0,
      "S": 0,
      "X": 0,
      "c": [
        0
      ],
      "i": [
        0
      ],
      "p": 0,
      "s": 0,
      "x": 0,
      "z": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|none|

<h2 id="tocS_StocksV2Trade">StocksV2Trade</h2>
<!-- backwards compatibility -->
<a id="schemastocksv2trade"></a>
<a id="schema_StocksV2Trade"></a>
<a id="tocSstocksv2trade"></a>
<a id="tocsstocksv2trade"></a>

```json
{
  "T": "string",
  "f": 0,
  "q": 0,
  "t": 0,
  "y": 0,
  "c": [
    0
  ],
  "e": 0,
  "i": "string",
  "p": 0,
  "r": 0,
  "s": 0,
  "x": 0,
  "z": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|T|string|true|none|The exchange symbol that this item is traded under.|
|f|integer|true|none|The nanosecond accuracy TRF(Trade Reporting Facility) Unix Timestamp. This is the timestamp of when the trade reporting facility received this message.|
|q|integer(int64)|true|none|The sequence number represents the sequence in which message events happened.<br>These are increasing and unique per ticker symbol, but will not always be<br>sequential (e.g., 1, 2, 6, 9, 10, 11).<br>|
|t|integer|true|none|The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this message from the exchange which produced it.|
|y|integer|true|none|The nanosecond accuracy Participant/Exchange Unix Timestamp. This is the timestamp of when the quote was actually generated at the exchange.|
|c|[integer]|true|none|A list of condition codes. See [Stocks Condition Codes](https://massive.com/docs/rest/stocks/market-operations/condition-codes) for what each code means.|
|e|integer|true|none|The trade correction indicator.<br>|
|i|string|true|none|The Trade ID which uniquely identifies a trade. These are unique per<br>combination of ticker, exchange, and TRF. For example: A trade for AAPL<br>executed on NYSE and a trade for AAPL executed on NASDAQ could potentially<br>have the same Trade ID.<br>|
|p|number(double)|true|none|The price of the trade. This is the actual dollar value per whole share of<br>this trade. A trade of 100 shares with a price of $2.00 would be worth a<br>total dollar value of $200.00.<br>|
|r|integer|true|none|The ID for the Trade Reporting Facility where the trade took place.<br>|
|s|number(double)|true|none|The size of a trade (also known as volume).<br>|
|x|integer|true|none|The exchange ID. See <a href="https://massive.com/docs/rest/stocks/market-operations/exchanges" alt="Exchanges">Exchanges</a> for Massive's mapping of exchange IDs.|
|z|integer|true|none|There are 3 tapes which define which exchange the ticker is listed on. These are integers in our objects which represent the letter of the alphabet. Eg: 1 = A, 2 = B, 3 = C.<br>* Tape A is NYSE listed securities<br>* Tape B is NYSE ARCA / NYSE American<br>* Tape C is NASDAQ<br>|

<h2 id="tocS_StocksV2Trades">StocksV2Trades</h2>
<!-- backwards compatibility -->
<a id="schemastocksv2trades"></a>
<a id="schema_StocksV2Trades"></a>
<a id="tocSstocksv2trades"></a>
<a id="tocsstocksv2trades"></a>

```json
{
  "results": [
    {
      "T": "string",
      "f": 0,
      "q": 0,
      "t": 0,
      "y": 0,
      "c": [
        0
      ],
      "e": 0,
      "i": "string",
      "p": 0,
      "r": 0,
      "s": 0,
      "x": 0,
      "z": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|none|

<h2 id="tocS_SymbolPair">SymbolPair</h2>
<!-- backwards compatibility -->
<a id="schemasymbolpair"></a>
<a id="schema_SymbolPair"></a>
<a id="tocSsymbolpair"></a>
<a id="tocssymbolpair"></a>

```json
"string"
```

The symbol pair that was evaluated from the request.

<h2 id="tocS_Tape">Tape</h2>
<!-- backwards compatibility -->
<a id="schematape"></a>
<a id="schema_Tape"></a>
<a id="tocStape"></a>
<a id="tocstape"></a>

```json
0
```

There are 3 tapes which define which exchange the ticker is listed on. These are integers in our objects which represent the letter of the alphabet. Eg: 1 = A, 2 = B, 3 = C.
* Tape A is NYSE listed securities
* Tape B is NYSE ARCA / NYSE American
* Tape C is NASDAQ

<h2 id="tocS_TickerBase">TickerBase</h2>
<!-- backwards compatibility -->
<a id="schematickerbase"></a>
<a id="schema_TickerBase"></a>
<a id="tocStickerbase"></a>
<a id="tocstickerbase"></a>

```json
{
  "ticker": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ticker|string|true|none|The exchange symbol that this item is traded under.|

<h2 id="tocS_TickerResults">TickerResults</h2>
<!-- backwards compatibility -->
<a id="schematickerresults"></a>
<a id="schema_TickerResults"></a>
<a id="tocStickerresults"></a>
<a id="tocstickerresults"></a>

```json
{
  "results": [
    {
      "c": 0,
      "h": 0,
      "l": 0,
      "n": 0,
      "o": 0,
      "t": 0,
      "v": 0,
      "vw": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|An array of results containing the requested data.|

<h2 id="tocS_TickerSymbol">TickerSymbol</h2>
<!-- backwards compatibility -->
<a id="schematickersymbol"></a>
<a id="schema_TickerSymbol"></a>
<a id="tocStickersymbol"></a>
<a id="tocstickersymbol"></a>

```json
"string"
```

The exchange symbol that this item is traded under.

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
0
```

The Unix millisecond timestamp for the start of the aggregate window.

<h2 id="tocS_TimestampExchange">TimestampExchange</h2>
<!-- backwards compatibility -->
<a id="schematimestampexchange"></a>
<a id="schema_TimestampExchange"></a>
<a id="tocStimestampexchange"></a>
<a id="tocstimestampexchange"></a>

```json
0
```

The nanosecond accuracy Participant/Exchange Unix Timestamp. This is the timestamp of when the quote was actually generated at the exchange.

<h2 id="tocS_TimestampSIP">TimestampSIP</h2>
<!-- backwards compatibility -->
<a id="schematimestampsip"></a>
<a id="schema_TimestampSIP"></a>
<a id="tocStimestampsip"></a>
<a id="tocstimestampsip"></a>

```json
0
```

The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this message from the exchange which produced it.

<h2 id="tocS_TimestampTRF">TimestampTRF</h2>
<!-- backwards compatibility -->
<a id="schematimestamptrf"></a>
<a id="schema_TimestampTRF"></a>
<a id="tocStimestamptrf"></a>
<a id="tocstimestamptrf"></a>

```json
0
```

The nanosecond accuracy TRF(Trade Reporting Facility) Unix Timestamp. This is the timestamp of when the trade reporting facility received this message.

<h2 id="tocS_TodaysChange">TodaysChange</h2>
<!-- backwards compatibility -->
<a id="schematodayschange"></a>
<a id="schema_TodaysChange"></a>
<a id="tocStodayschange"></a>
<a id="tocstodayschange"></a>

```json
0
```

The value of the change from the previous day.

<h2 id="tocS_TodaysChangePerc">TodaysChangePerc</h2>
<!-- backwards compatibility -->
<a id="schematodayschangeperc"></a>
<a id="schema_TodaysChangePerc"></a>
<a id="tocStodayschangeperc"></a>
<a id="tocstodayschangeperc"></a>

```json
0
```

The percentage change since the previous day.

<h2 id="tocS_TradeDetailsMapItem">TradeDetailsMapItem</h2>
<!-- backwards compatibility -->
<a id="schematradedetailsmapitem"></a>
<a id="schema_TradeDetailsMapItem"></a>
<a id="tocStradedetailsmapitem"></a>
<a id="tocstradedetailsmapitem"></a>

```json
{
  "name": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the trade detail item|
|type|string|false|none|Actual type of the trade detail item|

<h2 id="tocS_TradeExchange">TradeExchange</h2>
<!-- backwards compatibility -->
<a id="schematradeexchange"></a>
<a id="schema_TradeExchange"></a>
<a id="tocStradeexchange"></a>
<a id="tocstradeexchange"></a>

```json
0
```

The exchange that this trade happened on.

<h2 id="tocS_TradeId">TradeId</h2>
<!-- backwards compatibility -->
<a id="schematradeid"></a>
<a id="schema_TradeId"></a>
<a id="tocStradeid"></a>
<a id="tocstradeid"></a>

```json
"string"
```

The Trade ID which uniquely identifies a trade. These are unique per
combination of ticker, exchange, and TRF. For example: A trade for AAPL
executed on NYSE and a trade for AAPL executed on NASDAQ could potentially
have the same Trade ID.

<h2 id="tocS_Updated">Updated</h2>
<!-- backwards compatibility -->
<a id="schemaupdated"></a>
<a id="schema_Updated"></a>
<a id="tocSupdated"></a>
<a id="tocsupdated"></a>

```json
0
```

The last updated timestamp.

<h2 id="tocS_V1LastBase">V1LastBase</h2>
<!-- backwards compatibility -->
<a id="schemav1lastbase"></a>
<a id="schema_V1LastBase"></a>
<a id="tocSv1lastbase"></a>
<a id="tocsv1lastbase"></a>

```json
{
  "request_id": "string",
  "status": "string",
  "symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|
|symbol|string|true|none|The exchange symbol that this item is traded under.|

<h2 id="tocS_V2AggsBase">V2AggsBase</h2>
<!-- backwards compatibility -->
<a id="schemav2aggsbase"></a>
<a id="schema_V2AggsBase"></a>
<a id="tocSv2aggsbase"></a>
<a id="tocsv2aggsbase"></a>

```json
{
  "adjusted": true,
  "queryCount": 0,
  "request_id": "string",
  "resultsCount": 0,
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjusted|boolean|true|none|Whether or not this response was adjusted for splits.|
|queryCount|integer|true|none|The number of aggregates (minute or day) used to generate the response.|
|request_id|string|true|none|A request id assigned by the server.|
|resultsCount|integer|true|none|The total number of results for this request.|
|status|string|true|none|The status of this request's response.|

<h2 id="tocS_V2LastBase">V2LastBase</h2>
<!-- backwards compatibility -->
<a id="schemav2lastbase"></a>
<a id="schema_V2LastBase"></a>
<a id="tocSv2lastbase"></a>
<a id="tocsv2lastbase"></a>

```json
{
  "request_id": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string|true|none|A request id assigned by the server.|
|status|string|true|none|The status of this request's response.|

<h2 id="tocS_V2TicksBase">V2TicksBase</h2>
<!-- backwards compatibility -->
<a id="schemav2ticksbase"></a>
<a id="schema_V2TicksBase"></a>
<a id="tocSv2ticksbase"></a>
<a id="tocsv2ticksbase"></a>

```json
{
  "db_latency": 0,
  "results_count": 0,
  "success": true,
  "ticker": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|db_latency|integer|false|none|Latency in milliseconds for the query results from the database.|
|results_count|integer|false|none|The total number of results for this request.|
|success|boolean|false|none|Whether or not this query was executed successfully.|
|ticker|string|false|none|The exchange symbol that this item is traded under.|

<h2 id="tocS_Volume">Volume</h2>
<!-- backwards compatibility -->
<a id="schemavolume"></a>
<a id="schema_Volume"></a>
<a id="tocSvolume"></a>
<a id="tocsvolume"></a>

```json
0
```

The trading volume of the symbol in the given time period.

<h2 id="tocS_VolumeWeight">VolumeWeight</h2>
<!-- backwards compatibility -->
<a id="schemavolumeweight"></a>
<a id="schema_VolumeWeight"></a>
<a id="tocSvolumeweight"></a>
<a id="tocsvolumeweight"></a>

```json
0
```

The volume weighted average price.
