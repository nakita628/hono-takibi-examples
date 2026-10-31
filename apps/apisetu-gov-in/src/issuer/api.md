<h1 id="digilocker-issuer-apis">DigiLocker Issuer APIs v3.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This document provides detailed specification of the Digital Locker Pull APIs. The Pull model of integration with Digital Locker enables a Digital Locker user to search a document/certificate from issuer repository and fetch (pull) it into Digital Locker. The issuer departments can use these APIs for the documents that are not Aadhaar seeded. The issuer organization integrating with Digital Locker maintains the documents/certificates in its own repository (database or file system). The issuer application provides APIs to Digital Locker to access the documents in this repository. Each issuer organization will have to implement 2 APIs to integrate with the Digital Locker system.

Base URLs:

* <a href="Your API URL">Your API URL</a>

<a href="https://ndh.digitallocker.gov.in/terms.php">Terms of service</a>
Email: <a href="mailto:support@digitallocker.gov.in">support@digitallocker.gov.in</a> 

<h1 id="digilocker-issuer-apis-apis">APIs</h1>

## Pull Doc Request API.

<a id="opIdPull Doc"></a>

> Code samples

```bash
curl 'https://example.com/Your Pull DOC Request API Path' \
  -X POST \
  -H 'Content-Type: application/xml' \
  -d '{"DocDetails":{"DOB":"31-12-1990","DigiLockerId":"123e4567-e89b-12d3-a456-426655440000","FullName":"Sunil Kumar","UID":123456789012,"URI":"in.gov.kerala.edistrict-INCER-123456"},"format":"string","orgId":"string","ts":"string","txn":"string","ver":"string"}'
```

`POST /Your Pull DOC Request API Path`

The Pull Doc Request API has to be implemented by the issuers and will be consumed by Digital Locker system. This API will be invoked when the resident clicks on the URI displayed in the Issued documents section of DigLocker. The issuer API will by sending the certificate data. The certificate data should be sent in one of the two formats depending on the request send by Digital Locker:|- a. PDF document format b. XML format for machine readable metadata

> Body parameter

```json
{
  "DocDetails": {
    "DOB": "31-12-1990",
    "DigiLockerId": "123e4567-e89b-12d3-a456-426655440000",
    "FullName": "Sunil Kumar",
    "UID": 123456789012,
    "URI": "in.gov.kerala.edistrict-INCER-123456"
  },
  "format": "string",
  "orgId": "string",
  "ts": "string",
  "txn": "string",
  "ver": "string"
}
```

<h3 id="pull-doc-request-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|false|application/xml|
|x-digilocker-hmac|header|string|false|This is used for authentication and to verify the integrity of the request. DigiLocker calculates the hash message authentication code (hmac) of the HTTP request body using SHA256 hashing algorithm and the API Key provided by the issuer as the hashing key. The API Key is specified by the issuer while configuring the Pull Doc API in DigiLocker Partner Portal. The resulting hmac is converted to Base64 format and sent in this parameter. It is strongly recommended that the issuer API calculates the hmac of the HTTP request body, convert it to Base64 and match it with this parameter to ensure authenticity of the request.|
|body|body|[PullDocRequest](#schemapulldocrequest)|false|none|
|» DocDetails|body|object|true|none|
|» » DOB|body|string|true|Date of birth of the DigiLocker user accessing the document/certificate as in Aadhaar in DD-MM-YYYY format. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.|
|» » DigiLockerId|body|string|true|A unique 36 character DigiLocker Id of the user account.|
|» » FullName|body|string|true|Name of the DigiLocker user accessing the document/certificate as in Aadhaar. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.|
|» » UID|body|string|true|Aadhaar number of the DigiLocker user accessing the document/certificate. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.|
|» » URI|body|string|true|URI identifies the document uniquely.|
|» format|body|string|true|The certificate data in the response. Possible values of this attribute are:<br>  xml: for certificate data in machine readable xml format<br>  pdf: for certificate data in printable pdf format<br>  both: for certificate data in both xml and pdf format. If the format attribute is not present in the request, then the API must return Base64 encoded PDF data in the response. Please see the response section below for more details.|
|» orgId|body|string|true|Org Id is the user id provided to the Digital Locker application by the issuer application for accessing the API.|
|» ts|body|string|true|A timestamp value. This will be used to decode the keyHash element described below.|
|» txn|body|string|true|Transaction id.|
|» ver|body|string|true|API version.|

<h3 id="pull-doc-request-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PullDocResponse](#schemapulldocresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Pull URI Request API .

<a id="opIdPull Uri"></a>

> Code samples

```bash
curl 'https://example.com/Your Pull URI Request API Path' \
  -X POST \
  -H 'Content-Type: application/xml' \
  -d '{"DocDetails":{"DOB":"09-08-1989","DigiLockerId":"123e4567-e89b-12d3-a456-426655440000","DocType":"Pdf","FullName":"Sunil","Photo":"string","UDF1":"string","UDF2":"string","UDF3":"string","UDFn":"string","UID":123443211122},"format":"string","orgId":"string","ts":"string","txn":"string","ver":"string"}'
```

`POST /Your Pull URI Request API Path`

The Pull URI Request API has to be implemented by the issuers and will be consumed by Digital Locker application. This API will be invoked when a citizen searches the issuer repository for his/her certificate. If the certificate data is Aadhaar seeded, the issuer may choose to use Aadhaar number as the search parameter. Digital Locker provides Aadhaar number, name and date of birth as on Aadhaar to the issuer API as additional parameters. The option for these Aadhaar based parameters can be selected while configuring this API in Digital Locker Partner’s Portal. If the certificate data is not Aadhaar seeded then the issuer may use any other unique parameter e.g. driving license number to search for a driving license. These custom parameters will be passed in the UDF elements as shown in the sample request below. The custom parameter(s) can be configured while configuring the API in the DigiLocker Partner’s Portal. The Digital Locker system will query the issuer repository to fetch the URI for any document that match the search criteria. The citizen can save this URI in his/her Digital Locker. It is strongly recommended that the issuer API validate that the name, date of birth details sent by DigiLocker in Aadhaar parameters match with the corresponding details on the certificate before returning the certificate data. This will ensure that only authentic owners get access to a certificate.

> Body parameter

```json
{
  "DocDetails": {
    "DOB": "09-08-1989",
    "DigiLockerId": "123e4567-e89b-12d3-a456-426655440000",
    "DocType": "Pdf",
    "FullName": "Sunil",
    "Photo": "string",
    "UDF1": "string",
    "UDF2": "string",
    "UDF3": "string",
    "UDFn": "string",
    "UID": 123443211122
  },
  "format": "string",
  "orgId": "string",
  "ts": "string",
  "txn": "string",
  "ver": "string"
}
```

<h3 id="pull-uri-request-api--parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|false|application/xml|
|x-digilocker-hmac|header|string|false|This is used for authentication and to verify the integrity of the request. DigiLocker calculates the hash message authentication code (hmac) of the HTTP request body using SHA256 hashing algorithm and the API Key provided by the issuer as the hashing key. The API Key is specified by the issuer while configuring the Pull Doc API in DigiLocker Partner Portal. The resulting hmac is converted to Base64 format and sent in this parameter. It is strongly recommended that the issuer API calculates the hmac of the HTTP request body, convert it to Base64 and match it with this parameter to ensure authenticity of the request.|
|body|body|[PullURIRequest](#schemapullurirequest)|false|none|
|» DocDetails|body|object|true|none|
|» » DOB|body|string|true|Date of birth of the DigiLocker user searching for the document/certificate as on Aadhaar in DD-MM-YYYY format. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.|
|» » DigiLockerId|body|string|true|A unique 36 character DigiLocker Id of the user account.|
|» » DocType|body|string|true|Digital Locker will pass the document type being searched in this parameter.|
|» » FullName|body|string|true|Name of the DigiLocker user searching for the document/certificate as on Aadhaar. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.|
|» » Photo|body|string|true|The base 64 encoded contents of JPEG photograph as on Aadhaar. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.|
|» » UDF1|body|string|true|User defined search parameters to search a unique document/certificate. The <UDF> may be <RollNo> for CBSE, <RegistrationNo> for Transportation Dept. and <PAN> for Income Tax Dept. The search parameters for the API will be configured in the issuer portal of Digital Locker while configuring this API.|
|» » UDF2|body|string|true|none|
|» » UDF3|body|string|true|none|
|» » UDFn|body|string|true|none|
|» » UID|body|string|true|Aadhaar number of the DigiLocker user searching for the document/certificate. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.|
|» format|body|string|true|Indicates the desired format of the certificate data in the response. Possible values of this attribute are:<br>  xml: for certificate data in machine readable xml format.<br>  pdf: for certificate data in printable pdf format<br>  both: for certificate data in both xml and pdf format. If the format attribute is not present in the request, then the API must return Base64 encoded PDF data in the response. Please see the response section below for more details|
|» orgId|body|string|true|Org Id is the user id provided to the Digital Locker application by the issuer application for accessing the API.|
|» ts|body|string|true|A timestamp value. This will be used to decode the keyHash element described below.|
|» txn|body|string|true|Transaction id.|
|» ver|body|string|true|API version.|

<h3 id="pull-uri-request-api--responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PullURIResponse](#schemapulluriresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_PullDocRequest">PullDocRequest</h2>
<!-- backwards compatibility -->
<a id="schemapulldocrequest"></a>
<a id="schema_PullDocRequest"></a>
<a id="tocSpulldocrequest"></a>
<a id="tocspulldocrequest"></a>

```json
{
  "DocDetails": {
    "DOB": "31-12-1990",
    "DigiLockerId": "123e4567-e89b-12d3-a456-426655440000",
    "FullName": "Sunil Kumar",
    "UID": 123456789012,
    "URI": "in.gov.kerala.edistrict-INCER-123456"
  },
  "format": "string",
  "orgId": "string",
  "ts": "string",
  "txn": "string",
  "ver": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocDetails|object|true|none|none|
|format|string|true|none|The certificate data in the response. Possible values of this attribute are:<br>  xml: for certificate data in machine readable xml format<br>  pdf: for certificate data in printable pdf format<br>  both: for certificate data in both xml and pdf format. If the format attribute is not present in the request, then the API must return Base64 encoded PDF data in the response. Please see the response section below for more details.|
|orgId|string|true|none|Org Id is the user id provided to the Digital Locker application by the issuer application for accessing the API.|
|ts|string|true|none|A timestamp value. This will be used to decode the keyHash element described below.|
|txn|string|true|none|Transaction id.|
|ver|string|true|none|API version.|

<h2 id="tocS_PullDocResponse">PullDocResponse</h2>
<!-- backwards compatibility -->
<a id="schemapulldocresponse"></a>
<a id="schema_PullDocResponse"></a>
<a id="tocSpulldocresponse"></a>
<a id="tocspulldocresponse"></a>

```json
{
  "DocDetails": {
    "DataContent": "string",
    "DocContent": "string"
  },
  "ResponseStatus": {
    "Status": "string",
    "ts": "string",
    "txn": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocDetails|object|true|none|Issuer can add meta content specific to document here.|
|ResponseStatus|object|true|none|none|

<h2 id="tocS_PullURIRequest">PullURIRequest</h2>
<!-- backwards compatibility -->
<a id="schemapullurirequest"></a>
<a id="schema_PullURIRequest"></a>
<a id="tocSpullurirequest"></a>
<a id="tocspullurirequest"></a>

```json
{
  "DocDetails": {
    "DOB": "09-08-1989",
    "DigiLockerId": "123e4567-e89b-12d3-a456-426655440000",
    "DocType": "Pdf",
    "FullName": "Sunil",
    "Photo": "string",
    "UDF1": "string",
    "UDF2": "string",
    "UDF3": "string",
    "UDFn": "string",
    "UID": 123443211122
  },
  "format": "string",
  "orgId": "string",
  "ts": "string",
  "txn": "string",
  "ver": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocDetails|object|true|none|none|
|format|string|true|none|Indicates the desired format of the certificate data in the response. Possible values of this attribute are:<br>  xml: for certificate data in machine readable xml format.<br>  pdf: for certificate data in printable pdf format<br>  both: for certificate data in both xml and pdf format. If the format attribute is not present in the request, then the API must return Base64 encoded PDF data in the response. Please see the response section below for more details|
|orgId|string|true|none|Org Id is the user id provided to the Digital Locker application by the issuer application for accessing the API.|
|ts|string|true|none|A timestamp value. This will be used to decode the keyHash element described below.|
|txn|string|true|none|Transaction id.|
|ver|string|true|none|API version.|

<h2 id="tocS_PullURIResponse">PullURIResponse</h2>
<!-- backwards compatibility -->
<a id="schemapulluriresponse"></a>
<a id="schema_PullURIResponse"></a>
<a id="tocSpulluriresponse"></a>
<a id="tocspulluriresponse"></a>

```json
{
  "DocDetails": {
    "DOB": "31-12-1990",
    "DataContent": "string",
    "DigiLockerId": "123e4567-e89b-12d3-a456-426655440000",
    "DocContent": "string",
    "DocType": "INCER",
    "FullName": "Sunil Kumar",
    "UDF1": 1333,
    "UDF2": 2016,
    "UID": 123412341234,
    "URI": "in.gov.dept.state-INCER-1234567"
  },
  "ResponseStatus": {
    "Status": "string",
    "ts": "string",
    "txn": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocDetails|object|true|none|Issuer can add meta content specific to document here.|
|ResponseStatus|object|true|none|none|
