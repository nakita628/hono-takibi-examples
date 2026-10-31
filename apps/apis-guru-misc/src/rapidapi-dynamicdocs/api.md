<h1 id="dynamicdocs">DynamicDocs v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

ADVICEment's [DynamicDocs API automates your document generation](https://advicement.io/dynamic-documents-api) and creates dynamic, optimized, interactive PDFs. Write your templates in LaTeX and call the API with JSON data to get your PDFs in seconds.

The template files are stored in your dashboard and can be edited, tested and published online. Document templates can contain dynamic text using logic statements, include tables stretching multiple pages and show great-looking charts based on the underlying data. LaTeX creates crisp, high-quality documents where every detail is well-positioned and styled.

Integrate with ADVICEment DynamicDocs API in minutes and start creating beautiful [dynamic PDF documents](https://advicement.io/dynamic-documents-api) for your needs.

For more information, visit [DynamicDocs API Home page](https://advicement.io/dynamic-documents-api).

Base URLs:

* <a href="https://dynamicdocs.p.rapidapi.com">https://dynamicdocs.p.rapidapi.com</a> - via RapidAPI.com

<a href="https://advicement.io/terms-of-service">Terms of service</a>
Email: <a href="mailto:info@advicement.io">Igor Rodionov</a> 
Web: <a href="https://advicement.io/dynamic-documents-api">Igor Rodionov</a> 

# Authentication

* API Key (Adv-Security-Token)
    - Parameter Name: **ADVICEment API Key**, in: header. The Adv-Security-Token header parameter is generated via the Dashboard on advicement.io website.

* API Key (X-RapidAPI-Key)
    - Parameter Name: **RapidAPI.com API Key**, in: header. The X-RapidAPI-Key header parameter can be found in the security section of your account on rapidapi.com

<h1 id="dynamicdocs-pdf-generation">PDF Generation</h1>

## Compile New Document PDF

<a id="opIdcompile"></a>

> Code samples

```bash
curl https://example.com/templates/7a582350acb835ed/compile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "ADVICEment API Key: ${API_KEY}" \
  -d '{
    "amount": "ZAR 100 000",
    "client": {
      "address": "xx Long Street",
      "company": "ABC Company Pty Ltd",
      "firstName": "John",
      "lastName": "Smith",
      "location": "Cape Town, South Africa"
    },
    "consultant": {
      "address": "xx Rivonia Road",
      "company": "XYZ Company Pty Ltd",
      "firstName": "Kobus",
      "lastName": "van der Merwe",
      "location": "Sandton, South Africa"
    },
    "effectiveDate": "1 February 2021",
    "servicesDescription": "perform analysis on the company'\''s clients and identify existing market segments"
  }'
```

`POST /templates/{template-token}/compile`

Compile a PDF document from a specific template

> Body parameter

```json
{
  "amount": "ZAR 100 000",
  "client": {
    "address": "xx Long Street",
    "company": "ABC Company Pty Ltd",
    "firstName": "John",
    "lastName": "Smith",
    "location": "Cape Town, South Africa"
  },
  "consultant": {
    "address": "xx Rivonia Road",
    "company": "XYZ Company Pty Ltd",
    "firstName": "Kobus",
    "lastName": "van der Merwe",
    "location": "Sandton, South Africa"
  },
  "effectiveDate": "1 February 2021",
  "servicesDescription": "perform analysis on the company's clients and identify existing market segments"
}
```

<h3 id="compile-new-document-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Should be set to "application/json"|
|doc-url-expires-in|query|integer|false|The doc-url-expires-in is a numerical parameter which takes integers and describes after how many seconds the provided URL is available to download the document.|
|latex-compiler|query|string|false|The latex-compiler parameter can take the following values:  pdflatex lualatex|
|latex-runs |query|integer|false|The latex-runs is a numerical parameter and can take values of 1, 2 and 3. |
|main-file-name|query|string|false|The main-file-name is a string parameter which identifies the main file to compile.|
|doc-file-name|query|string|false|The doc-file-name is a string parameter which determines the name of the file. Note that the extension of the file is not required.|
|template-token|path|string|true|The template-token is available in your template settings after publishing your template.|
|body|body|object|false|Post the dynamic data for the template to compile the document PDF.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|latex-compiler|pdflatex|
|latex-compiler|lualatex|

> Example responses

> 200 Response

```json
{
  "documentStatusUrl": "https://advicement-prod-api-calls.s3.eu-west-1.amazonaws.com/testRapid/rapid-simple-contract/cf7cb57b-62ac-499e-afa5-2a2a4abba593/output/progress.json?AWSAccessKeyId=ASIA2LMZZZXSNUODI76L&Expires=1626094954&Signature=cTUlDBYPqJr5iiRjlBpVp%2FzIvtc%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJHMEUCIQCZNyie%2B%2BOFdkfZELMvUgYaDi74N0AqRGcY7y30s7p80AIgFFa2obOH74FGOChjM9%2FT7Ggj4P2eGmJ1Ju0yz%2F0fSrgqmQII1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARACGgw3MTE2NzY1MTM3NjQiDHuCNCrlHUNf2eeGtirtAb%2FPdNk%2Ba42RNnmmN8spasfJ9JeaSZ13fmtSYPqBTVJ00Nj0LzBON3IbFfq12zdnEooNk1ovxMH4CDYZq%2B20MwoxN4IhqPGpIbTqqp8zeDck5YqmvotQs%2F7NpwJ3xphfbcCZgjwzdi2ZskYC5k42SFg64skQd66UyQuP8yQr0RGw4JHTYFWkkDvjWyBUiaJHQWGrrbtnjuTnmAwqMx86ltCasdjVC25DXdLR3WSxwhV%2BFlxC%2FXViLBiv%2FbH57zU85ZkEMDwUuVct5mJ8guQrXzmaOu%2F14VMufNHpNwjB8JWi2O6jc1UTDZ3rCHBjqaAbphG9YZfZZKljRDrJIedpodFkIMa25rVmXz4vPrUMH9nkpIq%2BwR9o3z9gVZx4MkPWQul9sOhcktmx%2FLywTqlDWw7F4GHfXw4nIe4B%2BdIjlvCqpR%2BRnTfQlTofenqoRvtbLoMnl4xwKZkeQHrvjGp8eRlasdSOsCJpjUi5LNOcs59qFoiXo51IC%2Fhx%2B7QmDBCIJ3gpnZxkACw%3D"
}
```

<h3 id="compile-new-document-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document Status URL Created|Inline|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Adv-Security-Token, X-RapidAPI-Key
</aside>
