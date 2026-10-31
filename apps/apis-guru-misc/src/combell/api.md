<h1 id="public-api">Public Api v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Introduction

This API allows resellers to manage their resources in a simple, programmatic way using HTTP requests.

# Conventions

## Requests

The API supports different methods depending on the required action.

| Method	| Description
| ---		| ---
| GET		| Retrieve resources in a collection or get a single resource.<br/>Getters will never have any effect on the queried resources.
| POST		| Create a new resource in a collection.
| PUT		| Update an existing resource with its new representation.
| DELETE	| Delete an existing resource.

## HTTP status codes

The API will reply with different HTTP statuscodes:

| StatusCode				| Description
| ---						| ---
| 200 OK					| The requests was processed and you receive data as a result.
| 201 CREATED				| The resource has been created. Either the Location header contains a link to the created resource, or links are being returned in the response body. The applied method will be indicated in the documentation.
| 202 ACCEPTED				| The request has been validated and accepted. Because we need to do some background processing prior to returning the result, we cannot send back a useful representation.
| 204 NOCONTENT				| The request has been processed, but no details can be returned.
| 400 BADREQUEST			| Your request is malformed.
| 401 UNAUTHORIZED			| You are not authorized. Follow the instructions in the Authorization documentation.
| 403 FORBIDDEN				| Access to the resource or operation is not allowed.
| 404 NOTFOUND				| The resource cannot be found.
| 410 GONE                  | The resource is permanently no longer available.
| 429 TOOMANYREQUESTS		| The ratelimit has been exceeded. Please refer to the documentation on rate limiting for more details.
| 500 INTERNALSERVERERROR	| An error occurred during the processing of the request. The error is unexpected and most likely due to a bug in the api.

In the event of a problem, the body of the response will usually contain an errorcode and errormessage.
In rare cases additional details about the error are reported.

Errorcodes 400-499 are considered to be client errors and indicate that there was an issue with the request.
We will not take any action besides monitoring. 

Errorcodes 500-599 are considered to be server errors. The errors are monitored AND action will be taken to resolve the error.

## Formatting

Snake casing is applied on resources and query parameters.
The API is strictly returning JSON. No other formats are supported.

Datetimes are returned in ISO-8601 format.

## Pagination

Pagination is on by default on collections and is controlled by specifying *skip* and *take* parameters.  
**Skip** indicates the number of results to skip and where to start the new take.  
**Take** indicates the number of records to return. The returned number of items can be smaller than the requested take.

Paged results will have headers with useful information regarding the paging.

| Header				| Description
| ---					| ---
| X-Paging-Skipped		| The number of results that have been skipped.
| X-Paging-Take			| The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.
| X-Paging-TotalResults | The total number of results regardless of paging.

## Rate limiting

The number of requests per interval is limited. Detailed information on the rate limiting can be found in specific headers which will be sent on each request.

| Header				| Description
| ---					| ---
| X-RateLimit-Limit		| The number of requests that can be made in a specific time interval.
| X-RateLimit-Usage		| The number of requests already made in the current time interval.
| X-RateLimit-Remaining	| The number of requests remaining until the reset.
| X-RateLimit-Reset		| The number of seconds until the reset.<br />After the reset you are allowed to make as many requests as specified by the X-RateLimit-Limit header.
| Retry-After			| The number of seconds you have to wait until you can make new requests.<br />This header is only present when the rate limit has been reached. It is identical to X-RateLimit-Reset.

When the ratelimit has been reached, all requests will return with a HTTP statuscode 429 and ReasonPhrase '*Too many requests, retry later.*'.

# Authentication

The Api uses HMAC authentication.  
Hash-based message authentication code (HMAC) is a mechanism for calculating a message authentication code involving a hash function in combination with a secret key.  
Both the integrity and the authenticity of the message are verified this way.

## Steps to generate the HMAC

1. Get your api key and secret from your controlpanel.  
It is absolutely vital that the secret is never exposed. Once the secret is out, anyone would be able to generate hmacs to impersonate you.  
In case your secret is compromised, you can generate a new api key and secret on your controlpanel.
2. Construct the input value for generating the hmac.  
Concatenate:apikey, request method, path and querystring information, unix timestamp, nonce and content.

|										| Description
| ---									| ---
| apikey								| The key that is linked to your user.
| request method						| lowercased (eg: get, post, delete,...)
| path and querystring information		| urlencoding of the lowercased relative path and querystring.<br />The path **MUST start with the api version (/v2)**.<br />The hexadecimal codes (percent encoding) MUST be uppercased.
| unix timestamp						| the unix timestamp in **seconds**.
| nonce									| a	unique string for each request. It should be a random string, not related to the request. The nonce (in combination with the unix timestamp) protects you from replay attacks in case anyone was able to intercept a request.
| content								| When the request body is not empty, this should be the Base64 encoded Md5 hash of the request body.<br />An empty body should not be encoded.

3. Hash the concatenated string using your api secret and the SHA-256 algorithm.
4. Base64 encode the result of the hash function. This is the hmac signature you will need to send an authorized request.

## Sending an authorized request

An authorized request can be made by sending the generated HMAC in the authorization header.  
A correct authorizationheader uses the hmac authorization scheme and a correctly formatted authorization parameter.

Create the authorization parameter by concatenating:
  * apikey
  * colon ':'
  * generated HMAC signature (see above)
  * colon ':'
  * nonce (the one used to generate the signature)
  * colon ':'
  * unix timestamp (the one used to generate the signature)

A sample (illustrated):

* The first line is the string you create to feed to the hashing algorithm.
* The second line is the authorization header that should be sent in the request.

![hmac authorization header illustrated](/v2/images/authentication_illustration.jpg "authorization header illustrated")

## IP whitelisting

Access is by default restricted for all IP addresses. You need to explicitly whitelist an IP or an IP range in your controlpanel.

# Versioning

Because of breaking contract changes compared to v1, we released v2 of the API.  
V1 will still be available, but you are strongly encouraged to migrate to the latest version.  
New features will only be available on v2.

# Policy

### Fair use policy

Please respect the rate limits and do not use the api for any purposes of abuse.  
All requests are being monitored and logged.  
Intentional abuse might result in api key revocation.

# Errors

The API attempts to return appropriate HTTP status codes for every request.  
When the status code indicates failure, the API will also provide an error message in most cases.

An error message contains a machine-parseable error code accompanied by a descriptive error text.  
The text for an error message might change over time, but codes will stay the same.

[An overview of error codes can be found here](/v2/documentation/errorcodes).

# Change log

[An overview of new changes can be found here](/v2/documentation/changelog).

# Provisioning information

## Terminology

| Term			| Definition																|
| ---			| ---																		|
| Servicepack	| Defines a set of assets that belong together. An example is a hosting package which offers Linux hosting, a domain name, a couple of mailboxes and databases.<br/>It also limits the size of individual assets within the same account. |
| Account		| Represents an instance of the servicepack. It contains one or more assets. The number and size of assets is defined by the servicepack. |
| Asset			| A manageable service. For example: a mysql database, a linux hosting, a mailbox,...<br/>Some assets are created at the moment when the account is created. Other assets can be created afterwards.
	
## Common provisioning scenario

**Provisioning of an account with Linux hosting with one MySql database**

*Without a pre-existing account:*

1. Create a new account.<br/>Perform a POST on the accounts route and provide the desired servicepack id and identifier (domain name).
2. Read the Location header from the response and perform a GET of the provided resource (a provisioning job).
3. When the response returns 200(OK), you should repeat the GET operation after a certain interval (Repeat this step).<br/>
When the response returns 201(Created), you should read the response body. This will contain links to the created resources.<br/>
This will usually hold only one link, but to be futureproof, this has been designed to return a collection.
4. The created resource will point to an account. You now know the account's Id and can continue with the provisioning of a MySql database on this account.
5. Perform a POST on the mysqldatabases route and provide the account id along with other requested information.
6. Read the Location header from the response and perform a GET of the provided resource (a provisioning job).
7. When the response returns 200(OK), you should repeat the GET operation after a certain interval (Repeat this step).<br/>
When the response returns 201(Created), you should read the response body. This will contain links to the created resources.<br/>
This will usually hold only one link, but to be futureproof, this has been designed to return a collection.
8. The created resource will point to a MySql database resource.

## SSL certificate requests

**Requesting an SSL certificate causes the purchase of a paying product.**

1. A certificate is created by adding an ssl certificate request.
2. Upon statuscode 201 you should query for certificate completion on the resource provided in the location response header.
3. The resource request can respond with different statuscodes:
<ul>
    <li>200: the certificate request is ongoing.<br/>
Check the validations collection for validation values that are not auto_validated. Those should be set by you system.<br/>
Call verify domain validations once all validation values are in place. It might take some time for verification to take place. It is not necessary to call this method more than once.</li>
    <li>303: the certificate request is complete; there is no more certificate request resource available. Check the location header value to retrieve the representation of the resulting ssl certificate.</li>
    <li>410: the certificate request does not exist anymore, there is no certificate created as a result of the request.</li>
</ul>

Base URLs:

* <a href="https://api.apis.guru/v2">https://api.apis.guru/v2</a>

<h1 id="public-api-accounts">Accounts</h1>

## Overview of accounts

<a id="opIdGetAccounts"></a>

> Code samples

```bash
curl https://example.com/accounts \
  -H 'Accept: application/json'
```

`GET /accounts`

<h3 id="overview-of-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|skip|query|integer(int32)|false|The number of items to skip in the resultset.|
|take|query|integer(int32)|false|The number of items to return in the resultset. The returned count can be equal or less than this number.|
|asset_type|query|[AssetType](#schemaassettype)|false|Filters the list, returning only accounts containing the specified asset type.|
|identifier|query|string \| null|false|Return only accounts, matching the specified identifier.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|asset_type|domain|
|asset_type|linux_hosting|
|asset_type|mysql|
|asset_type|dns|
|asset_type|mailbox|
|asset_type|windows_hosting|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "identifier": "string",
    "servicepack_id": 0
  }
]
```

<h3 id="overview-of-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="overview-of-accounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Account](#schemaaccount)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Paging-Skipped|integer||The number of results that have been skipped.|
|200|X-Paging-Take|integer||The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.|
|200|X-Paging-TotalResults|integer||The total number of results regardless of paging.|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new account

<a id="opIdCreateAccount"></a>

> Code samples

```bash
curl https://example.com/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ftp_password": "string",
    "identifier": "string",
    "servicepack_id": 0
  }'
```

`POST /accounts`

The creation of an account requires some background processing. There is no instant feedback of the creation status.

> Body parameter

```json
{
  "ftp_password": "string",
  "identifier": "string",
  "servicepack_id": 0
}
```

<h3 id="create-a-new-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateAccount](#schemacreateaccount)|false|none|
|» ftp_password|body|string|false|Ftp password for the account.<br /><br>Applies only if the servicepack contains hosting.<br /><br>Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>|
|» identifier|body|string|false|An identifier for the account.<br /><br>Should be a domain name for hosting accounts.|
|» servicepack_id|body|integer(int32)|false|The servicepack id that defines the account.|

> Example responses

> 400 Response

```json
{
  "validation_errors": [
    {
      "error_code": "string",
      "error_text": "string"
    }
  ]
}
```

<h3 id="create-a-new-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific account

<a id="opIdGetAccount"></a>

> Code samples

```bash
curl 'https://example.com/accounts/string?account_id=0' \
  -H 'Accept: application/json'
```

`GET /accounts/{accountId}`

<h3 id="get-a-specific-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|query|integer(int32)|true|The id of the account.|
|accountId|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "addons": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "id": 0,
  "identifier": "string",
  "servicepack": {
    "id": 0,
    "name": "string"
  }
}
```

<h3 id="get-a-specific-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AccountDetail](#schemaaccountdetail)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="public-api-dns-records">DNS records</h1>

Manage the dns records for a domain name.<p>The interface allows you to manage following records: A, CNAME, MX, SRV, ALIAS and TXT.

## Get records

> Code samples

```bash
curl 'https://example.com/dns/string/records?domain_name=string' \
  -H 'Accept: application/json'
```

`GET /dns/{domainName}/records`

<h3 id="get-records-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|The domain name.|
|skip|query|integer(int32)|false|The number of items to skip in the resultset.|
|take|query|integer(int32)|false|The number of items to return in the resultset. The returned count can be equal or less than this number.|
|type|query|string \| null|false|Filters records matching the type. Most other filters only apply when this filter is specified.|
|record_name|query|string \| null|false|Filters records matching the record name. This filter only applies to lookups of A, CNAME, TXT, CAA, ALIAS and TLSA records.|
|service|query|string \| null|false|Filters records for the service. This filter only applies to lookups of SRV records.|
|domainName|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
[
  {
    "content": "string",
    "id": "string",
    "port": 0,
    "priority": 10,
    "protocol": "TCP",
    "record_name": "string",
    "service": "string",
    "target": "string",
    "ttl": 3600,
    "type": "string",
    "weight": 0
  }
]
```

<h3 id="get-records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-records-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DnsRecord](#schemadnsrecord)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Paging-Skipped|integer||The number of results that have been skipped.|
|200|X-Paging-Take|integer||The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.|
|200|X-Paging-TotalResults|integer||The total number of results regardless of paging.|

<aside class="success">
This operation does not require authentication
</aside>

## Create a record

> Code samples

```bash
curl 'https://example.com/dns/string/records?domain_name=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "content": "string",
    "id": "string",
    "port": 0,
    "priority": 10,
    "protocol": "TCP",
    "record_name": "string",
    "service": "string",
    "target": "string",
    "ttl": 3600,
    "type": "string",
    "weight": 0
  }'
```

`POST /dns/{domainName}/records`

> Body parameter

```json
{
  "content": "string",
  "id": "string",
  "port": 0,
  "priority": 10,
  "protocol": "TCP",
  "record_name": "string",
  "service": "string",
  "target": "string",
  "ttl": 3600,
  "type": "string",
  "weight": 0
}
```

<h3 id="create-a-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|The domain name.|
|domainName|path|string|true|Automatically added|
|body|body|[DnsRecord](#schemadnsrecord)|false|The record to create|
|» content|body|string|false|Variable data depending on the record type.<br><ul><li>A: the IPv4 address.</li><li>CNAME: canonical name of an alias.</li><li>MX: fully qualified domain name of a mail host.</li><li>SRV: does not apply. Data for the SRV records can be found in specific properties.</li><li>TXT: free form text data.</li><li>CAA: format should match specific values for flag, tag and ca: "{flag} {tag} {ca}".<br>        <ul><li>The flag. The values 128 (critical) or 0 (non-critical) are expected, with 0 as the default.</li><li>The tag. A tag specifies which actions an authorized CA can take in terms of issuing SSL/TLS certificates.<br /><ul><li>The value "issue": explicitly authorizes a single certificate authority to issue a certificate (any type) for the hostname.</li><li>The value "issuewild": explicitly authorizes a single certificate authority to issue a wildcard certificate (and only wildcard) for the hostname.</li><li>The value "iodef": specifies a URL to which a certificate authority may report policy violations.</li></ul></li><li>The ca. This is the domain of the CA (Certification Authority) that has the authority to issue certificates for the domain in question. If the value is a semicolon (;), it means that no CA has the authority to issue a certificate for that domain.</li></ul></li><li>ALIAS: canonical name of an alias.</li><li>TLSA: format should match specific values for usage, selector, matching type and data: "{usage} {selector} {matching_type} {data}"<br>        <ul><li>The usage. The first field after the TLSA text in the DNS RR, specifies how to verify the certificate.<br /><ul><li>A value of 0 is for what is commonly called CA constraint (and PKIX-TA). The certificate provided when establishing TLS must be issued by the listed root-CA or one of its intermediate CAs, with a valid certification path to a root-CA already trusted by the application doing the verification.</li><li>A value of 1 is for what is commonly called Service certificate constraint (and PKIX-EE). The certificate used must match the TLSA record exactly, and it must also pass PKIX certification path validation to a trusted root-CA.</li><li>A value of 2 is for what is commonly called Trust Anchor Assertion (and DANE-TA). The certificate used has a valid certification path pointing back to the certificate mention in this record, but there is no need for it to pass the PKIX certification path validation to a trusted root-CA.</li><li>A value of 3 is for what is commonly called Domain issued certificate (and DANE-EE). The services uses a self-signed certificate. It is not signed by anyone else, and is exactly this record.</li></ul></li><li>The selector. When connecting to the service and a certificate is received, the selector field specifies which parts of it should be checked.<br /><ul><li>A value of 0 means to select the entire certificate for matching.</li><li>A value of 1 means to select just the public key for certificate matching. Matching the public key is often sufficient, as this is likely to be unique.</li></ul></li><li>The matching type.<br /><ul><li>A type of 0 means the entire information selected is present in the certificate association data.</li><li>A type of 1 means to do a SHA-256 hash of the selected data.</li><li>A type of 2 means to do a SHA-512 hash of the selected data.</li></ul></li><li>The actual data to be matched given the settings of the other fields. This is a long text string of hexadecimal data.</li></ul></li></ul>|
|» id|body|string|false|The id of the record<br>This value is ignored for creation of new records.|
|» port|body|integer(int32)|false|The port for SRV records.<br /><br>The value MUST be a positive integer.<br /><br>Editing the value is not possible. You should add a new SRV record and delete the existing record.|
|» priority|body|integer(int32)|false|The priority for MX or SRV records.<br /><br>A lower value means more preferred.<br /><br>The value MUST be a positive integer less or equal to 9999.|
|» protocol|body|string|false|Used for the creation of SRV records. Possible options: TCP, UDP, ...<br /><br>Editing the value is not possible. You should add a new SRV record and delete the existing record.|
|» record_name|body|string|false|The name of the record.<br /><br>This is the host name, alias defined by the record.<br /><br>An empty record or '@' is equal to the domain name.<br /><br>Applies to A, MX, CNAME, TXT, CAA, ALIAS and TLSA records.<br /><br>When type is TLSA the recommended value format is port number, protocol and host: _25._tcp.<br /><br>Does not apply for SRV records.|
|» service|body|string|false|The symbolic name of the desired service for SRV records.<br /><br>Editing the value is not possible. You should add a new SRV record and can delete the existing record.|
|» target|body|string|false|The canonical hostname of the machine providing the service for SRV records.<br /><br>Editing the value is not possible. You should add a new SRV record and delete the existing record.|
|» ttl|body|integer(int32)|false|Time to live of the record in seconds.<br /><br>It defines the time frame that clients can cache the information.<br /><br>The value MUST be between 60 and 86400. The default value is 3600 (= 1 hour).|
|» type|body|string|false|The type of the record (A, MX, CNAME, SRV, TXT, CAA, ALIAS and TLSA).|
|» weight|body|integer(int32)|false|The weight for SRV records with the same priority.<br /><br>A higher value means more preferred.|

<h3 id="create-a-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||The location of the created resource.|

<aside class="success">
This operation does not require authentication
</aside>

## Get specific record

> Code samples

```bash
curl 'https://example.com/dns/string/records/string?domain_name=string&record_id=string' \
  -H 'Accept: application/json'
```

`GET /dns/{domainName}/records/{recordId}`

<h3 id="get-specific-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|The domain name.|
|record_id|query|string|true|The id of the record.|
|domainName|path|string|true|Automatically added|
|recordId|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "content": "string",
  "id": "string",
  "port": 0,
  "priority": 10,
  "protocol": "TCP",
  "record_name": "string",
  "service": "string",
  "target": "string",
  "ttl": 3600,
  "type": "string",
  "weight": 0
}
```

<h3 id="get-specific-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DnsRecord](#schemadnsrecord)|

<aside class="success">
This operation does not require authentication
</aside>

## Edit a record

> Code samples

```bash
curl 'https://example.com/dns/string/records/string?domain_name=string&record_id=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "content": "string",
    "id": "string",
    "port": 0,
    "priority": 10,
    "protocol": "TCP",
    "record_name": "string",
    "service": "string",
    "target": "string",
    "ttl": 3600,
    "type": "string",
    "weight": 0
  }'
```

`PUT /dns/{domainName}/records/{recordId}`

> Body parameter

```json
{
  "content": "string",
  "id": "string",
  "port": 0,
  "priority": 10,
  "protocol": "TCP",
  "record_name": "string",
  "service": "string",
  "target": "string",
  "ttl": 3600,
  "type": "string",
  "weight": 0
}
```

<h3 id="edit-a-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|The domain name.|
|record_id|query|string|true|The id of the record.|
|domainName|path|string|true|Automatically added|
|recordId|path|string|true|Automatically added|
|body|body|[DnsRecord](#schemadnsrecord)|false|The record with updated values.|
|» content|body|string|false|Variable data depending on the record type.<br><ul><li>A: the IPv4 address.</li><li>CNAME: canonical name of an alias.</li><li>MX: fully qualified domain name of a mail host.</li><li>SRV: does not apply. Data for the SRV records can be found in specific properties.</li><li>TXT: free form text data.</li><li>CAA: format should match specific values for flag, tag and ca: "{flag} {tag} {ca}".<br>        <ul><li>The flag. The values 128 (critical) or 0 (non-critical) are expected, with 0 as the default.</li><li>The tag. A tag specifies which actions an authorized CA can take in terms of issuing SSL/TLS certificates.<br /><ul><li>The value "issue": explicitly authorizes a single certificate authority to issue a certificate (any type) for the hostname.</li><li>The value "issuewild": explicitly authorizes a single certificate authority to issue a wildcard certificate (and only wildcard) for the hostname.</li><li>The value "iodef": specifies a URL to which a certificate authority may report policy violations.</li></ul></li><li>The ca. This is the domain of the CA (Certification Authority) that has the authority to issue certificates for the domain in question. If the value is a semicolon (;), it means that no CA has the authority to issue a certificate for that domain.</li></ul></li><li>ALIAS: canonical name of an alias.</li><li>TLSA: format should match specific values for usage, selector, matching type and data: "{usage} {selector} {matching_type} {data}"<br>        <ul><li>The usage. The first field after the TLSA text in the DNS RR, specifies how to verify the certificate.<br /><ul><li>A value of 0 is for what is commonly called CA constraint (and PKIX-TA). The certificate provided when establishing TLS must be issued by the listed root-CA or one of its intermediate CAs, with a valid certification path to a root-CA already trusted by the application doing the verification.</li><li>A value of 1 is for what is commonly called Service certificate constraint (and PKIX-EE). The certificate used must match the TLSA record exactly, and it must also pass PKIX certification path validation to a trusted root-CA.</li><li>A value of 2 is for what is commonly called Trust Anchor Assertion (and DANE-TA). The certificate used has a valid certification path pointing back to the certificate mention in this record, but there is no need for it to pass the PKIX certification path validation to a trusted root-CA.</li><li>A value of 3 is for what is commonly called Domain issued certificate (and DANE-EE). The services uses a self-signed certificate. It is not signed by anyone else, and is exactly this record.</li></ul></li><li>The selector. When connecting to the service and a certificate is received, the selector field specifies which parts of it should be checked.<br /><ul><li>A value of 0 means to select the entire certificate for matching.</li><li>A value of 1 means to select just the public key for certificate matching. Matching the public key is often sufficient, as this is likely to be unique.</li></ul></li><li>The matching type.<br /><ul><li>A type of 0 means the entire information selected is present in the certificate association data.</li><li>A type of 1 means to do a SHA-256 hash of the selected data.</li><li>A type of 2 means to do a SHA-512 hash of the selected data.</li></ul></li><li>The actual data to be matched given the settings of the other fields. This is a long text string of hexadecimal data.</li></ul></li></ul>|
|» id|body|string|false|The id of the record<br>This value is ignored for creation of new records.|
|» port|body|integer(int32)|false|The port for SRV records.<br /><br>The value MUST be a positive integer.<br /><br>Editing the value is not possible. You should add a new SRV record and delete the existing record.|
|» priority|body|integer(int32)|false|The priority for MX or SRV records.<br /><br>A lower value means more preferred.<br /><br>The value MUST be a positive integer less or equal to 9999.|
|» protocol|body|string|false|Used for the creation of SRV records. Possible options: TCP, UDP, ...<br /><br>Editing the value is not possible. You should add a new SRV record and delete the existing record.|
|» record_name|body|string|false|The name of the record.<br /><br>This is the host name, alias defined by the record.<br /><br>An empty record or '@' is equal to the domain name.<br /><br>Applies to A, MX, CNAME, TXT, CAA, ALIAS and TLSA records.<br /><br>When type is TLSA the recommended value format is port number, protocol and host: _25._tcp.<br /><br>Does not apply for SRV records.|
|» service|body|string|false|The symbolic name of the desired service for SRV records.<br /><br>Editing the value is not possible. You should add a new SRV record and can delete the existing record.|
|» target|body|string|false|The canonical hostname of the machine providing the service for SRV records.<br /><br>Editing the value is not possible. You should add a new SRV record and delete the existing record.|
|» ttl|body|integer(int32)|false|Time to live of the record in seconds.<br /><br>It defines the time frame that clients can cache the information.<br /><br>The value MUST be between 60 and 86400. The default value is 3600 (= 1 hour).|
|» type|body|string|false|The type of the record (A, MX, CNAME, SRV, TXT, CAA, ALIAS and TLSA).|
|» weight|body|integer(int32)|false|The weight for SRV records with the same priority.<br /><br>A higher value means more preferred.|

<h3 id="edit-a-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a record

> Code samples

```bash
curl 'https://example.com/dns/string/records/string?domain_name=string&record_id=string' \
  -X DELETE
```

`DELETE /dns/{domainName}/records/{recordId}`

<h3 id="delete-a-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|The domain name.|
|record_id|query|string|true|The id of the record.|
|domainName|path|string|true|Automatically added|
|recordId|path|string|true|Automatically added|

<h3 id="delete-a-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="public-api-domains">Domains</h1>

Manage your domains.

## Overviews of domains

<a id="opIdGetDomains"></a>

> Code samples

```bash
curl https://example.com/domains \
  -H 'Accept: application/json'
```

`GET /domains`

<h3 id="overviews-of-domains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|skip|query|integer(int32)|false|The number of items to skip in the resultset.|
|take|query|integer(int32)|false|The number of items to return in the resultset. The returned count can be equal or less than this number.|

> Example responses

> 200 Response

```json
[
  {
    "domain_name": "string",
    "expiration_date": "1970-01-01T00:00:00Z",
    "will_renew": true
  }
]
```

<h3 id="overviews-of-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="overviews-of-domains-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Domain](#schemadomain)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Paging-Skipped|integer||The number of results that have been skipped.|
|200|X-Paging-Take|integer||The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.|
|200|X-Paging-TotalResults|integer||The total number of results regardless of paging.|

<aside class="success">
This operation does not require authentication
</aside>

## Register a domain

<a id="opIdRegister"></a>

> Code samples

```bash
curl https://example.com/domains/registrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "domain_name": "string",
    "name_servers": [
      "string"
    ],
    "registrant": {
      "address": "string",
      "city": "string",
      "company_name": "string",
      "country_code": "string",
      "email": "string",
      "enterprise_number": "string",
      "extra_fields": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "fax": "string",
      "first_name": "string",
      "language_code": "string",
      "last_name": "string",
      "phone": "string",
      "postal_code": "string"
    }
  }'
```

`POST /domains/registrations`

Registers an available domain.<br />Domain names with extension '.ca' are only available for registrants with country code 'CA'.

> Body parameter

```json
{
  "domain_name": "string",
  "name_servers": [
    "string"
  ],
  "registrant": {
    "address": "string",
    "city": "string",
    "company_name": "string",
    "country_code": "string",
    "email": "string",
    "enterprise_number": "string",
    "extra_fields": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "fax": "string",
    "first_name": "string",
    "language_code": "string",
    "last_name": "string",
    "phone": "string",
    "postal_code": "string"
  }
}
```

<h3 id="register-a-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RegisterDomain](#schemaregisterdomain)|false|none|
|» domain_name|body|string|false|The domain name to register.<br /><br>Only pass the domain part and the tld.<br /><i>For abc.com, abc is the domain part, com is the tld.</i>|
|» name_servers|body|[string]|false|List of name servers. When empty, the registation will be done on default name servers.|
|» registrant|body|[RegistrantInput](#schemaregistrantinput)|false|none|

<h3 id="register-a-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Transfer a domain

<a id="opIdTransfer"></a>

> Code samples

```bash
curl https://example.com/domains/transfers \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "auth_code": "string",
    "domain_name": "string",
    "name_servers": [
      "string"
    ],
    "registrant": {
      "address": "string",
      "city": "string",
      "company_name": "string",
      "country_code": "string",
      "email": "string",
      "enterprise_number": "string",
      "extra_fields": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "fax": "string",
      "first_name": "string",
      "language_code": "string",
      "last_name": "string",
      "phone": "string",
      "postal_code": "string"
    }
  }'
```

`POST /domains/transfers`

Transfers a domain with a transfer authorization code.<br />Domain names with extension '.ca' are only available for registrants with country code 'CA'.

> Body parameter

```json
{
  "auth_code": "string",
  "domain_name": "string",
  "name_servers": [
    "string"
  ],
  "registrant": {
    "address": "string",
    "city": "string",
    "company_name": "string",
    "country_code": "string",
    "email": "string",
    "enterprise_number": "string",
    "extra_fields": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "fax": "string",
    "first_name": "string",
    "language_code": "string",
    "last_name": "string",
    "phone": "string",
    "postal_code": "string"
  }
}
```

<h3 id="transfer-a-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TransferDomain](#schematransferdomain)|false|none|
|» auth_code|body|string|false|Authorization code which allows the transfer to execute.|
|» domain_name|body|string|false|The domain name to transfer.<br /><br>Only pass the domain part and the tld.<br /><i>For abc.com, abc is the domain part, com is the tld.</i>|
|» name_servers|body|[string]|false|List of name servers. When empty, the transfer will be done on default name servers.|
|» registrant|body|[RegistrantInput](#schemaregistrantinput)|false|none|

<h3 id="transfer-a-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Details of a domain

<a id="opIdGetDomain"></a>

> Code samples

```bash
curl 'https://example.com/domains/string?domain_name=string' \
  -H 'Accept: application/json'
```

`GET /domains/{domainName}`

<h3 id="details-of-a-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|The domain name|
|domainName|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "can_toggle_renew": true,
  "domain_name": "string",
  "expiration_date": "1970-01-01T00:00:00Z",
  "name_servers": [
    {
      "ip": "string",
      "name": "string"
    }
  ],
  "registrant": {
    "address": "string",
    "city": "string",
    "company_name": "string",
    "country_code": "string",
    "email": "string",
    "enterprise_number": "string",
    "fax": "string",
    "first_name": "string",
    "language_code": "string",
    "last_name": "string",
    "phone": "string",
    "postal_code": "string"
  },
  "will_renew": true
}
```

<h3 id="details-of-a-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DomainDetail](#schemadomaindetail)|

<aside class="success">
This operation does not require authentication
</aside>

## Edit domain name servers

<a id="opIdEditNameServers"></a>

> Code samples

```bash
curl 'https://example.com/domains/string/nameservers?domain_name=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "domain_name": "string",
    "name_servers": [
      "string"
    ]
  }'
```

`PUT /domains/{domainName}/nameservers`

> Body parameter

```json
{
  "domain_name": "string",
  "name_servers": [
    "string"
  ]
}
```

<h3 id="edit-domain-name-servers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|The domain name|
|domainName|path|string|true|Automatically added|
|body|body|[EditNameServers](#schemaeditnameservers)|false|none|
|» domain_name|body|string|false|The domain name to register.|
|» name_servers|body|[string]|false|List of name servers.|

<h3 id="edit-domain-name-servers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Edit domain name renew state

<a id="opIdConfigureDomain"></a>

> Code samples

```bash
curl 'https://example.com/domains/string/renew?domain_name=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "will_renew": true
  }'
```

`PUT /domains/{domainName}/renew`

Allowed if can_toggle_renew is true on the domain detail:<br /><ul><li>If there are no unpaid invoices for the domain name anymore.</li><li>If the renewal won't start within 1 month.</li></ul>
Allowed if the requesting user has the finance role.

> Body parameter

```json
{
  "will_renew": true
}
```

<h3 id="edit-domain-name-renew-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|The domain name|
|domainName|path|string|true|Automatically added|
|body|body|[EditDomainWillRenewRequest](#schemaeditdomainwillrenewrequest)|false|Contains the domain renew information|
|» will_renew|body|boolean|false|Indication of renewal.|

<h3 id="edit-domain-name-renew-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="public-api-linux-hostings">Linux hostings</h1>

Manage your linux hostings.

## Overview of linux hostings

<a id="opIdGetLinuxHostings"></a>

> Code samples

```bash
curl https://example.com/linuxhostings \
  -H 'Accept: application/json'
```

`GET /linuxhostings`

<h3 id="overview-of-linux-hostings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|skip|query|integer(int32)|false|The number of items to skip in the resultset.|
|take|query|integer(int32)|false|The number of items to return in the resultset. The returned count can be equal or less than this number.|

> Example responses

> 200 Response

```json
[
  {
    "domain_name": "string",
    "servicepack_id": 0
  }
]
```

<h3 id="overview-of-linux-hostings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="overview-of-linux-hostings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LinuxHosting](#schemalinuxhosting)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Paging-Skipped|integer||The number of results that have been skipped.|
|200|X-Paging-Take|integer||The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.|
|200|X-Paging-TotalResults|integer||The total number of results regardless of paging.|

<aside class="success">
This operation does not require authentication
</aside>

## Linux hosting detail

<a id="opIdGetLinuxHosting"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string?domain_name=string' \
  -H 'Accept: application/json'
```

`GET /linuxhostings/{domainName}`

<h3 id="linux-hosting-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|The Linux hosting domain name.|
|domainName|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "actual_size": 0,
  "domain_name": "string",
  "ftp_enabled": true,
  "ftp_username": "string",
  "ip": "string",
  "ip_type": "dedicated",
  "max_size": 0,
  "max_webspace_size": 0,
  "mysql_database_names": [
    "string"
  ],
  "php_version": "string",
  "servicepack_id": 0,
  "sites": [
    {
      "host_headers": [
        {
          "enabled": true,
          "name": "string"
        }
      ],
      "http2_enabled": true,
      "https_redirect_enabled": true,
      "name": "string",
      "path": "string",
      "ssl_enabled": true
    }
  ],
  "ssh_host": "string",
  "ssh_username": "string",
  "webspace_usage": 0
}
```

<h3 id="linux-hosting-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LinuxHostingDetail](#schemalinuxhostingdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## Configure FTP

<a id="opIdConfigureFtp"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/ftp/configuration?domain_name=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "enabled": true
  }'
```

`PUT /linuxhostings/{domainName}/ftp/configuration`

> Body parameter

```json
{
  "enabled": true
}
```

<h3 id="configure-ftp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name.|
|domainName|path|string|true|Automatically added|
|body|body|[FtpConfiguration](#schemaftpconfiguration)|false|none|
|» enabled|body|boolean|false|Enable or disable FTP.|

<h3 id="configure-ftp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Configure PHP APCu setting

<a id="opIdChangeApcu"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/phpsettings/apcu?domain_name=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "apcu_size": 0,
    "enabled": true
  }'
```

`PUT /linuxhostings/{domainName}/phpsettings/apcu`

> Body parameter

```json
{
  "apcu_size": 0,
  "enabled": true
}
```

<h3 id="configure-php-apcu-setting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name|
|domainName|path|string|true|Automatically added|
|body|body|[UpdatePhpAPcuRequest](#schemaupdatephpapcurequest)|false|Php APcu config|
|» apcu_size|body|integer(int32)|false|The APcu size.|
|» enabled|body|boolean|false|Enables or disables APC.|

<h3 id="configure-php-apcu-setting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get the available PHP versions.

<a id="opIdGetAvailablePhpVersions"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/phpsettings/availableversions?domain_name=string' \
  -H 'Accept: application/json'
```

`GET /linuxhostings/{domainName}/phpsettings/availableversions`

<h3 id="get-the-available-php-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name.|
|domainName|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
[
  {
    "version": "string"
  }
]
```

<h3 id="get-the-available-php-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-the-available-php-versions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PhpVersion](#schemaphpversion)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Configure PHP memory limit

<a id="opIdChangePhpMemoryLimit"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/phpsettings/memorylimit?domain_name=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "memory_limit": 0
  }'
```

`PUT /linuxhostings/{domainName}/phpsettings/memorylimit`

> Body parameter

```json
{
  "memory_limit": 0
}
```

<h3 id="configure-php-memory-limit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name.|
|domainName|path|string|true|Automatically added|
|body|body|[UpdatePhpMemoryLimitRequest](#schemaupdatephpmemorylimitrequest)|false|Memory limit config|
|» memory_limit|body|integer(int32)|false|The php memory limit|

<h3 id="configure-php-memory-limit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Change the Linux hosting PHP version.

<a id="opIdChangePhpVersion"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/phpsettings/version?domain_name=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "version": "string"
  }'
```

`PUT /linuxhostings/{domainName}/phpsettings/version`

> Body parameter

```json
{
  "version": "string"
}
```

<h3 id="change-the-linux-hosting-php-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name.|
|domainName|path|string|true|Automatically added|
|body|body|[PhpVersion](#schemaphpversion)|false|The new PHP version.|
|» version|body|string|false|Php version|

<h3 id="change-the-linux-hosting-php-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Overview of scheduled tasks

<a id="opIdGetScheduledTasks"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/scheduledtasks?domain_name=string' \
  -H 'Accept: application/json'
```

`GET /linuxhostings/{domainName}/scheduledtasks`

Manage scheduled tasks which are also manageable via the control panel.

<h3 id="overview-of-scheduled-tasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name.|
|domainName|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
[
  {
    "cron_expression": "string",
    "enabled": true,
    "id": "string",
    "script_location": "string"
  }
]
```

<h3 id="overview-of-scheduled-tasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="overview-of-scheduled-tasks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScheduledTask](#schemascheduledtask)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add a scheduled task

<a id="opIdAddScheduledTasks"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/scheduledtasks?domain_name=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "cron_expression": "string",
    "enabled": true,
    "id": "string",
    "script_location": "string"
  }'
```

`POST /linuxhostings/{domainName}/scheduledtasks`

> Body parameter

```json
{
  "cron_expression": "string",
  "enabled": true,
  "id": "string",
  "script_location": "string"
}
```

<h3 id="add-a-scheduled-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name.|
|domainName|path|string|true|Automatically added|
|body|body|[ScheduledTask](#schemascheduledtask)|false|none|
|» cron_expression|body|string|false|Cron expression of scheduled task.<br /><br>5-digit expressions (*/5 * * * *) are required in the following sequence:<br /><ul><li>Minute (0 - 59, also */5, */10, */15 and */30 as every 5 minutes, every 10 minutes, every quarter or every half-hour are allowed)</li><li>Hour (0 - 23, also * as every hour is allowed)</li><li>Day of the month (1 - 31, also * as every day is allowed)</li><li>Month (1 - 12 as January to December, also * as every month is allowed)</li><li>Day of the week (1 - 7 as Monday to Sunday, also * as every day is allowed)</li></ul>|
|» enabled|body|boolean|false|Enabled.|
|» id|body|string|false|The id of the scheduled task.<br /><br>This value is ignored for creation of new scheduled tasks.|
|» script_location|body|string|false|Absolute path from this linux hosting to execute.|

<h3 id="add-a-scheduled-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||The location of the created resource.|

<aside class="success">
This operation does not require authentication
</aside>

## Get scheduled task detail

<a id="opIdGetScheduledTask"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/scheduledtasks/string?domain_name=string&scheduled_task_id=string' \
  -H 'Accept: application/json'
```

`GET /linuxhostings/{domainName}/scheduledtasks/{scheduledTaskId}`

<h3 id="get-scheduled-task-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name.|
|scheduled_task_id|query|string|true|Id of the scheduled task.|
|domainName|path|string|true|Automatically added|
|scheduledTaskId|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "cron_expression": "string",
  "enabled": true,
  "id": "string",
  "script_location": "string"
}
```

<h3 id="get-scheduled-task-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScheduledTask](#schemascheduledtask)|

<aside class="success">
This operation does not require authentication
</aside>

## Configure a scheduled task

<a id="opIdConfigureScheduledTask"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/scheduledtasks/string?domain_name=string&scheduled_task_id=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "cron_expression": "string",
    "enabled": true,
    "id": "string",
    "script_location": "string"
  }'
```

`PUT /linuxhostings/{domainName}/scheduledtasks/{scheduledTaskId}`

> Body parameter

```json
{
  "cron_expression": "string",
  "enabled": true,
  "id": "string",
  "script_location": "string"
}
```

<h3 id="configure-a-scheduled-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name.|
|scheduled_task_id|query|string|true|Id of the scheduled task.|
|domainName|path|string|true|Automatically added|
|scheduledTaskId|path|string|true|Automatically added|
|body|body|[ScheduledTask](#schemascheduledtask)|false|none|
|» cron_expression|body|string|false|Cron expression of scheduled task.<br /><br>5-digit expressions (*/5 * * * *) are required in the following sequence:<br /><ul><li>Minute (0 - 59, also */5, */10, */15 and */30 as every 5 minutes, every 10 minutes, every quarter or every half-hour are allowed)</li><li>Hour (0 - 23, also * as every hour is allowed)</li><li>Day of the month (1 - 31, also * as every day is allowed)</li><li>Month (1 - 12 as January to December, also * as every month is allowed)</li><li>Day of the week (1 - 7 as Monday to Sunday, also * as every day is allowed)</li></ul>|
|» enabled|body|boolean|false|Enabled.|
|» id|body|string|false|The id of the scheduled task.<br /><br>This value is ignored for creation of new scheduled tasks.|
|» script_location|body|string|false|Absolute path from this linux hosting to execute.|

<h3 id="configure-a-scheduled-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a scheduled task

<a id="opIdDeleteScheduledTask"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/scheduledtasks/string?domain_name=string&scheduled_task_id=string' \
  -X DELETE
```

`DELETE /linuxhostings/{domainName}/scheduledtasks/{scheduledTaskId}`

<h3 id="delete-a-scheduled-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name.|
|scheduled_task_id|query|string|true|Id of the scheduled task.|
|domainName|path|string|true|Automatically added|
|scheduledTaskId|path|string|true|Automatically added|

<h3 id="delete-a-scheduled-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Enable/disable GZIP compression

<a id="opIdChangeGzipCompression"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/settings/gzipcompression?domain_name=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "enabled": true
  }'
```

`PUT /linuxhostings/{domainName}/settings/gzipcompression`

> Body parameter

```json
{
  "enabled": true
}
```

<h3 id="enabledisable-gzip-compression-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name|
|domainName|path|string|true|Automatically added|
|body|body|[GzipConfig](#schemagzipconfig)|false|Whether GZIP compression is enabled or not.|
|» enabled|body|boolean|false|Enabled|

<h3 id="enabledisable-gzip-compression-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a host header

<a id="opIdCreateHostHeader"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/sites/string/hostheaders?domain_name=string&site_name=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "domain_name": "string"
  }'
```

`POST /linuxhostings/{domainName}/sites/{siteName}/hostheaders`

> Body parameter

```json
{
  "domain_name": "string"
}
```

<h3 id="create-a-host-header-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name.|
|site_name|query|string|true|Name of the site on the linux hosting.|
|domainName|path|string|true|Automatically added|
|siteName|path|string|true|Automatically added|
|body|body|[AddHostHeaderRequest](#schemaaddhostheaderrequest)|false|Add host header request|
|» domain_name|body|string|false|Host header domain name (e.g. alias.be or alias.site.be).|

<h3 id="create-a-host-header-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||The location of the created resource.|

<aside class="success">
This operation does not require authentication
</aside>

## Configure HTTP/2

<a id="opIdConfigureHttp2"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/sites/string/http2/configuration?domain_name=string&site_name=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "enabled": true
  }'
```

`PUT /linuxhostings/{domainName}/sites/{siteName}/http2/configuration`

> Body parameter

```json
{
  "enabled": true
}
```

<h3 id="configure-http2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name.|
|site_name|query|string|true|Site name where HTTP/2 should be configured.<br /><br>For HTTP/2 to work correctly, the site must have ssl enabled.|
|domainName|path|string|true|Automatically added|
|siteName|path|string|true|Automatically added|
|body|body|[Http2Configuration](#schemahttp2configuration)|false|none|
|» enabled|body|boolean|false|Enable or disable HTTP/2.|

<h3 id="configure-http2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Configure SSH

<a id="opIdConfigureSsh"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/ssh/configuration?domain_name=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "enabled": true
  }'
```

`PUT /linuxhostings/{domainName}/ssh/configuration`

> Body parameter

```json
{
  "enabled": true
}
```

<h3 id="configure-ssh-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name.|
|domainName|path|string|true|Automatically added|
|body|body|[SshConfiguration](#schemasshconfiguration)|false|none|
|» enabled|body|boolean|false|Enable or disable SSH.|

<h3 id="configure-ssh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Overview of SSH keys

<a id="opIdGetSshKeys"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/ssh/keys?domain_name=string' \
  -H 'Accept: application/json'
```

`GET /linuxhostings/{domainName}/ssh/keys`

<h3 id="overview-of-ssh-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name.|
|domainName|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
[
  {
    "fingerprint": "string",
    "public_key": "string"
  }
]
```

<h3 id="overview-of-ssh-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="overview-of-ssh-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SshKey](#schemasshkey)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add a SSH key

<a id="opIdAddSshKey"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/ssh/keys?domain_name=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "public_key": "string"
  }'
```

`POST /linuxhostings/{domainName}/ssh/keys`

> Body parameter

```json
{
  "public_key": "string"
}
```

<h3 id="add-a-ssh-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name.|
|domainName|path|string|true|Automatically added|
|body|body|[AddSshKeyRequest](#schemaaddsshkeyrequest)|false|SSH key public key.|
|» public_key|body|string|false|Public key|

<h3 id="add-a-ssh-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||The location of the created resource.|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a SSH key

<a id="opIdDeleteSshKey"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/ssh/keys/string?domain_name=string' \
  -X DELETE
```

`DELETE /linuxhostings/{domainName}/ssh/keys/{fingerprint}`

<h3 id="delete-a-ssh-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name.|
|fingerprint|path|string|true|Fingerprint of public key.|
|domainName|path|string|true|Automatically added|

<h3 id="delete-a-ssh-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Configure auto redirect

<a id="opIdChangeAutoRedirect"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/sslsettings/string/autoredirect?domain_name=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "enabled": true
  }'
```

`PUT /linuxhostings/{domainName}/sslsettings/{hostname}/autoredirect`

> Body parameter

```json
{
  "enabled": true
}
```

<h3 id="configure-auto-redirect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name.|
|hostname|path|string|true|Specific hostname.|
|domainName|path|string|true|Automatically added|
|body|body|[AutoRedirectConfig](#schemaautoredirectconfig)|false|Auto redirect config.|
|» enabled|body|boolean|false|Enabled|

<h3 id="configure-auto-redirect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Configure let's encrypt

<a id="opIdChangeLetsEncrypt"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/sslsettings/string/letsencrypt?domain_name=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "enabled": true
  }'
```

`PUT /linuxhostings/{domainName}/sslsettings/{hostname}/letsencrypt`

> Body parameter

```json
{
  "enabled": true
}
```

<h3 id="configure-lets-encrypt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name.|
|hostname|path|string|true|Specific hostname.|
|domainName|path|string|true|Automatically added|
|body|body|[LetsEncryptConfig](#schemaletsencryptconfig)|false|Let's encrypt config.|
|» enabled|body|boolean|false|Enabled|

<h3 id="configure-lets-encrypt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a subsite

<a id="opIdCreateSubsite"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/subsites?domain_name=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "domain_name": "string",
    "path": "string"
  }'
```

`POST /linuxhostings/{domainName}/subsites`

> Body parameter

```json
{
  "domain_name": "string",
  "path": "string"
}
```

<h3 id="create-a-subsite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name.|
|domainName|path|string|true|Automatically added|
|body|body|[AddSubsiteRequest](#schemaaddsubsiterequest)|false|Add subsite request|
|» domain_name|body|string|false|Subsite domain name (e.g. alias.be or subsite.site.be).|
|» path|body|string|false|Folder location for the subsite (when empty we use /subsites/site (e.g. /subsites/subsite.site.be)<br /><br>The path MUST pre-exist on the server. It WILL NOT be created automatically.|

<h3 id="create-a-subsite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||The location of the created resource.|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a subsite

<a id="opIdDeleteSubsite"></a>

> Code samples

```bash
curl 'https://example.com/linuxhostings/string/subsites/string?domain_name=string&site_name=string' \
  -X DELETE
```

`DELETE /linuxhostings/{domainName}/subsites/{siteName}`

<h3 id="delete-a-subsite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Linux hosting domain name.|
|site_name|query|string|true|Name of the site on the linux hosting.|
|domainName|path|string|true|Automatically added|
|siteName|path|string|true|Automatically added|

<h3 id="delete-a-subsite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="public-api-mailboxes">Mailboxes</h1>

Manage your mailboxes.

## Gets your mailboxes.

<a id="opIdGetMailboxes"></a>

> Code samples

```bash
curl https://example.com/mailboxes \
  -H 'Accept: application/json'
```

`GET /mailboxes`

Currently only supports getting the mailboxes filtered by domain name.

<h3 id="gets-your-mailboxes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string \| null|false|Obligated domain name for getting mailboxes.|

> Example responses

> 200 Response

```json
[
  {
    "actual_size": 0,
    "max_size": 0,
    "name": "string"
  }
]
```

<h3 id="gets-your-mailboxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="gets-your-mailboxes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Mailbox](#schemamailbox)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new mailbox.

<a id="opIdCreateMailbox"></a>

> Code samples

```bash
curl https://example.com/mailboxes \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "account_id": 0,
    "email_address": "string",
    "password": "string"
  }'
```

`POST /mailboxes`

> Body parameter

```json
{
  "account_id": 0,
  "email_address": "string",
  "password": "string"
}
```

<h3 id="create-a-new-mailbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateMailboxRequest](#schemacreatemailboxrequest)|false|The add mailbox request.|
|» account_id|body|integer(int32)|false|Mail zone account id|
|» email_address|body|string|false|E-mail address|
|» password|body|string|false|The password for the mailbox.<br /><br>Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>|

<h3 id="create-a-new-mailbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||The location of the created resource.|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific mailbox

<a id="opIdGetMailbox"></a>

> Code samples

```bash
curl 'https://example.com/mailboxes/string?mailbox_name=string' \
  -H 'Accept: application/json'
```

`GET /mailboxes/{mailboxName}`

<h3 id="get-a-specific-mailbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mailbox_name|query|string|true|Mailbox name.|
|mailboxName|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "actual_size": 0,
  "auto_forward": {
    "copy_to_myself": true,
    "email_addresses": [
      "string"
    ],
    "enabled": true
  },
  "auto_reply": {
    "enabled": true,
    "message": "string",
    "subject": "string"
  },
  "login": "string",
  "max_size": 0,
  "name": "string"
}
```

<h3 id="get-a-specific-mailbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MailboxDetail](#schemamailboxdetail)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a mailbox

<a id="opIdDeleteMailbox"></a>

> Code samples

```bash
curl 'https://example.com/mailboxes/string?mailbox_name=string' \
  -X DELETE
```

`DELETE /mailboxes/{mailboxName}`

<h3 id="delete-a-mailbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mailbox_name|query|string|true|Mailbox name.|
|mailboxName|path|string|true|Automatically added|

<h3 id="delete-a-mailbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Configure auto-forward for mailbox

<a id="opIdConfigureMailboxAutoForward"></a>

> Code samples

```bash
curl 'https://example.com/mailboxes/string/autoforward?mailbox_name=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "copy_to_myself": true,
    "email_addresses": [
      "string"
    ],
    "enabled": true
  }'
```

`PUT /mailboxes/{mailboxName}/autoforward`

> Body parameter

```json
{
  "copy_to_myself": true,
  "email_addresses": [
    "string"
  ],
  "enabled": true
}
```

<h3 id="configure-auto-forward-for-mailbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mailbox_name|query|string|true|Mailbox name.|
|mailboxName|path|string|true|Automatically added|
|body|body|[AutoForward](#schemaautoforward)|false|Contains the auto-forward information.|
|» copy_to_myself|body|boolean|false|Copy to myself|
|» email_addresses|body|[string]|false|E-mail addresses to which e-mails are forwarded|
|» enabled|body|boolean|false|Enabled|

<h3 id="configure-auto-forward-for-mailbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Configure auto-reply for mailbox

<a id="opIdConfigureMailboxAutoReply"></a>

> Code samples

```bash
curl 'https://example.com/mailboxes/string/autoreply?mailbox_name=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "enabled": true,
    "message": "string",
    "subject": "string"
  }'
```

`PUT /mailboxes/{mailboxName}/autoreply`

> Body parameter

```json
{
  "enabled": true,
  "message": "string",
  "subject": "string"
}
```

<h3 id="configure-auto-reply-for-mailbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mailbox_name|query|string|true|Mailbox name.|
|mailboxName|path|string|true|Automatically added|
|body|body|[AutoReply](#schemaautoreply)|false|Contains the auto-reply information.|
|» enabled|body|boolean|false|Enabled|
|» message|body|string|false|Message|
|» subject|body|string|false|Subject|

<h3 id="configure-auto-reply-for-mailbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Change password for mailbox

<a id="opIdChangeMailboxPassword"></a>

> Code samples

```bash
curl 'https://example.com/mailboxes/string/password?mailbox_name=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "password": "string"
  }'
```

`PUT /mailboxes/{mailboxName}/password`

> Body parameter

```json
{
  "password": "string"
}
```

<h3 id="change-password-for-mailbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mailbox_name|query|string|true|Mailbox name.|
|mailboxName|path|string|true|Automatically added|
|body|body|[UpdateMailboxPasswordRequest](#schemaupdatemailboxpasswordrequest)|false|Contains the new password.|
|» password|body|string|false|The password for the database user.<br /><br>Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>|

<h3 id="change-password-for-mailbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="public-api-mail-zones">Mail zones</h1>

Manage your mail zones.

## Get the mail zone.

<a id="opIdGetMailZone"></a>

> Code samples

```bash
curl 'https://example.com/mailzones/string?domain_name=string' \
  -H 'Accept: application/json'
```

`GET /mailzones/{domainName}`

<h3 id="get-the-mail-zone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Mail zone domain name.|
|domainName|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "aliases": [
    {
      "destinations": [
        "string"
      ],
      "email_address": "string"
    }
  ],
  "anti_spam": {
    "allowed_types": [
      "none"
    ],
    "type": "none"
  },
  "available_accounts": [
    {
      "account_id": 0,
      "size": 0
    }
  ],
  "catch_all": {
    "email_addresses": [
      "string"
    ]
  },
  "enabled": true,
  "name": "string",
  "smtp_domains": [
    {
      "enabled": true,
      "hostname": "string"
    }
  ]
}
```

<h3 id="get-the-mail-zone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MailZone](#schemamailzone)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new alias

<a id="opIdCreateAlias"></a>

> Code samples

```bash
curl 'https://example.com/mailzones/string/aliases?domain_name=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinations": [
      "string"
    ],
    "email_address": "string"
  }'
```

`POST /mailzones/{domainName}/aliases`

> Body parameter

```json
{
  "destinations": [
    "string"
  ],
  "email_address": "string"
}
```

<h3 id="create-a-new-alias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Mail zone domain name.|
|domainName|path|string|true|Automatically added|
|body|body|[CreateAliasRequest](#schemacreatealiasrequest)|false|Contains the alias information.|
|» destinations|body|[string]|false|The alias destination e-mail addresses|
|» email_address|body|string|false|The alias e-mail|

> Example responses

> 400 Response

```json
{
  "validation_errors": [
    {
      "error_code": "string",
      "error_text": "string"
    }
  ]
}
```

<h3 id="create-a-new-alias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|None|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||The location of the created resource.|

<aside class="success">
This operation does not require authentication
</aside>

## Configure a alias

<a id="opIdConfigureAlias"></a>

> Code samples

```bash
curl 'https://example.com/mailzones/string/aliases/string?domain_name=string&email_address=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinations": [
      "string"
    ]
  }'
```

`PUT /mailzones/{domainName}/aliases/{emailAddress}`

> Body parameter

```json
{
  "destinations": [
    "string"
  ]
}
```

<h3 id="configure-a-alias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Mail zone domain name.|
|email_address|query|string|true|Alias e-mail address.|
|domainName|path|string|true|Automatically added|
|emailAddress|path|string|true|Automatically added|
|body|body|[UpdateAliasRequest](#schemaupdatealiasrequest)|false|Contains the alias information.|
|» destinations|body|[string]|false|The alias destination e-mail addresses|

> Example responses

> 400 Response

```json
{
  "validation_errors": [
    {
      "error_code": "string",
      "error_text": "string"
    }
  ]
}
```

<h3 id="configure-a-alias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a alias

<a id="opIdDeleteAlias"></a>

> Code samples

```bash
curl 'https://example.com/mailzones/string/aliases/string?domain_name=string&email_address=string' \
  -X DELETE
```

`DELETE /mailzones/{domainName}/aliases/{emailAddress}`

<h3 id="delete-a-alias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Mail zone domain name.|
|email_address|query|string|true|Alias e-mail address.|
|domainName|path|string|true|Automatically added|
|emailAddress|path|string|true|Automatically added|

<h3 id="delete-a-alias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Configure anti-spam for mail zone

<a id="opIdConfigureAntiSpam"></a>

> Code samples

```bash
curl 'https://example.com/mailzones/string/antispam?domain_name=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "none"
  }'
```

`PUT /mailzones/{domainName}/antispam`

> Body parameter

```json
{
  "type": "none"
}
```

<h3 id="configure-anti-spam-for-mail-zone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Mail zone domain name.|
|domainName|path|string|true|Automatically added|
|body|body|[UpdateAntiSpamRequest](#schemaupdateantispamrequest)|false|Contains the anti-spam information.|
|» type|body|[AntiSpamTypes](#schemaantispamtypes)|false|Types of anti-spam scanning|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|none|
|» type|advanced|
|» type|basic|

<h3 id="configure-anti-spam-for-mail-zone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a catch-all on the mail zone

<a id="opIdCreateCatchAll"></a>

> Code samples

```bash
curl 'https://example.com/mailzones/string/catchall?domain_name=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "email_address": "string"
  }'
```

`POST /mailzones/{domainName}/catchall`

> Body parameter

```json
{
  "email_address": "string"
}
```

<h3 id="create-a-catch-all-on-the-mail-zone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Mail zone domain name.|
|domainName|path|string|true|Automatically added|
|body|body|[CreateCatchAllRequest](#schemacreatecatchallrequest)|false|Contains the catch-all information.|
|» email_address|body|string|false|E-mail address to which all e-mails are sent to inexistent mailboxes or aliases|

<h3 id="create-a-catch-all-on-the-mail-zone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||The location of the created resource.|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a catch-all on the mail zone

<a id="opIdDeleteCatchAll"></a>

> Code samples

```bash
curl 'https://example.com/mailzones/string/catchall/string?domain_name=string&email_address=string' \
  -X DELETE
```

`DELETE /mailzones/{domainName}/catchall/{emailAddress}`

<h3 id="delete-a-catch-all-on-the-mail-zone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Mail zone domain name.|
|email_address|query|string|true|E-mail address to which all e-mails are sent to inexistent mailboxes or aliases.|
|domainName|path|string|true|Automatically added|
|emailAddress|path|string|true|Automatically added|

<h3 id="delete-a-catch-all-on-the-mail-zone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create an extra smtp domain

<a id="opIdCreateSmtpDomain"></a>

> Code samples

```bash
curl 'https://example.com/mailzones/string/smtpdomains?domain_name=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "hostname": "string"
  }'
```

`POST /mailzones/{domainName}/smtpdomains`

> Body parameter

```json
{
  "hostname": "string"
}
```

<h3 id="create-an-extra-smtp-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Mail zone domain name.|
|domainName|path|string|true|Automatically added|
|body|body|[CreateSmtpDomainRequest](#schemacreatesmtpdomainrequest)|false|Contains the smtp domain information.|
|» hostname|body|string|false|The smtp domain name|

> Example responses

> 400 Response

```json
{
  "validation_errors": [
    {
      "error_code": "string",
      "error_text": "string"
    }
  ]
}
```

<h3 id="create-an-extra-smtp-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|None|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||The location of the created resource.|

<aside class="success">
This operation does not require authentication
</aside>

## Configure an extra smtp domain

<a id="opIdConfigureSmtpDomain"></a>

> Code samples

```bash
curl 'https://example.com/mailzones/string/smtpdomains/string?domain_name=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "enabled": true
  }'
```

`PUT /mailzones/{domainName}/smtpdomains/{hostname}`

> Body parameter

```json
{
  "enabled": true
}
```

<h3 id="configure-an-extra-smtp-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Mail zone domain name.|
|hostname|path|string|true|Smtp domain name.|
|domainName|path|string|true|Automatically added|
|body|body|[UpdateSmtpDomainRequest](#schemaupdatesmtpdomainrequest)|false|Contains the smtp domain information.|
|» enabled|body|boolean|false|Enabled|

> Example responses

> 400 Response

```json
{
  "validation_errors": [
    {
      "error_code": "string",
      "error_text": "string"
    }
  ]
}
```

<h3 id="configure-an-extra-smtp-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an extra smtp domain

<a id="opIdDeleteSmtpDomain"></a>

> Code samples

```bash
curl 'https://example.com/mailzones/string/smtpdomains/string?domain_name=string' \
  -X DELETE
```

`DELETE /mailzones/{domainName}/smtpdomains/{hostname}`

<h3 id="delete-an-extra-smtp-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|Mail zone domain name.|
|hostname|path|string|true|Smtp domain name.|
|domainName|path|string|true|Automatically added|

<h3 id="delete-an-extra-smtp-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="public-api-mysql-databases">MySql databases</h1>

Manage your MySql databases.

## Overview of mysql databases

<a id="opIdGetMySqlDatabases"></a>

> Code samples

```bash
curl https://example.com/mysqldatabases \
  -H 'Accept: application/json'
```

`GET /mysqldatabases`

<h3 id="overview-of-mysql-databases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|skip|query|integer(int32)|false|The number of items to skip in the resultset.|
|take|query|integer(int32)|false|The number of items to return in the resultset. The returned count can be equal or less than this number.|

> Example responses

> 200 Response

```json
[
  {
    "account_id": 0,
    "actual_size": 0,
    "hostname": "string",
    "max_size": 0,
    "name": "string",
    "user_count": 0
  }
]
```

<h3 id="overview-of-mysql-databases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="overview-of-mysql-databases-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MySqlDatabase](#schemamysqldatabase)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Paging-Skipped|integer||The number of results that have been skipped.|
|200|X-Paging-Take|integer||The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.|
|200|X-Paging-TotalResults|integer||The total number of results regardless of paging.|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new mysql database

<a id="opIdCreateMySqlDatabase"></a>

> Code samples

```bash
curl https://example.com/mysqldatabases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "account_id": 0,
    "database_name": "string",
    "password": "string"
  }'
```

`POST /mysqldatabases`

> Body parameter

```json
{
  "account_id": 0,
  "database_name": "string",
  "password": "string"
}
```

<h3 id="create-a-new-mysql-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateMySqlDatabase](#schemacreatemysqldatabase)|false|none|
|» account_id|body|integer(int32)|false|The id of the account on which to create the database.|
|» database_name|body|string|false|The name for the database. This will be prefixed during provisioning.<br>The provided name during creation will be different from the provisioned database name.|
|» password|body|string|false|The password for the database user.<br /><br>Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>|

> Example responses

> 400 Response

```json
{
  "validation_errors": [
    {
      "error_code": "string",
      "error_text": "string"
    }
  ]
}
```

<h3 id="create-a-new-mysql-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific database

<a id="opIdGetMySqlDatabase"></a>

> Code samples

```bash
curl 'https://example.com/mysqldatabases/string?database_name=string' \
  -H 'Accept: application/json'
```

`GET /mysqldatabases/{databaseName}`

<h3 id="get-a-specific-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|database_name|query|string|true|none|
|databaseName|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "account_id": 0,
  "actual_size": 0,
  "hostname": "string",
  "max_size": 0,
  "name": "string",
  "user_count": 0
}
```

<h3 id="get-a-specific-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MySqlDatabase](#schemamysqldatabase)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a mysql database

<a id="opIdDeleteDatabase"></a>

> Code samples

```bash
curl 'https://example.com/mysqldatabases/string?database_name=string' \
  -X DELETE
```

`DELETE /mysqldatabases/{databaseName}`

<h3 id="delete-a-mysql-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|database_name|query|string|true|Name of the database.|
|databaseName|path|string|true|Automatically added|

<h3 id="delete-a-mysql-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Overview of mysql users

<a id="opIdGetDatabaseUsers"></a>

> Code samples

```bash
curl 'https://example.com/mysqldatabases/string/users?database_name=string' \
  -H 'Accept: application/json'
```

`GET /mysqldatabases/{databaseName}/users`

<h3 id="overview-of-mysql-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|database_name|query|string|true|Name of the database.|
|databaseName|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
[
  {
    "enabled": true,
    "name": "string",
    "rights": "read_and_write"
  }
]
```

<h3 id="overview-of-mysql-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="overview-of-mysql-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MySqlUser](#schemamysqluser)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new mysql user

<a id="opIdCreateMySqlUser"></a>

> Code samples

```bash
curl 'https://example.com/mysqldatabases/string/users?database_name=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "password": "string"
  }'
```

`POST /mysqldatabases/{databaseName}/users`

The creation of a new mysql user will result in a user with read_only rights.

> Body parameter

```json
{
  "name": "string",
  "password": "string"
}
```

<h3 id="create-a-new-mysql-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|database_name|query|string|true|Name of the database.|
|databaseName|path|string|true|Automatically added|
|body|body|[CreateMySqlUser](#schemacreatemysqluser)|false|none|
|» name|body|string|false|User name<br /><br>User names have to adhere to following rules:<br /><ul><li>Between 2-14 characters.</li><li>Must be a mix of letters and/or digits.</li><li>Must be lower cased.</li><li>Cannot contain spaces.</li></ul>|
|» password|body|string|false|The password for the database user.<br /><br>Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>|

> Example responses

> 400 Response

```json
{
  "validation_errors": [
    {
      "error_code": "string",
      "error_text": "string"
    }
  ]
}
```

<h3 id="create-a-new-mysql-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|400|Bad Request|Bad Request|[BadRequestResponse](#schemabadrequestresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a mysql user

<a id="opIdDeleteDatabaseUser"></a>

> Code samples

```bash
curl 'https://example.com/mysqldatabases/string/users/string?database_name=string&user_name=string' \
  -X DELETE
```

`DELETE /mysqldatabases/{databaseName}/users/{userName}`

The deletion of a mysql user is allowed for users with read_only rights.

<h3 id="delete-a-mysql-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|database_name|query|string|true|Name of the database.|
|user_name|query|string|true|Name of the user.|
|databaseName|path|string|true|Automatically added|
|userName|path|string|true|Automatically added|

<h3 id="delete-a-mysql-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Change password for mysql user

<a id="opIdChangeDatabaseUserPassword"></a>

> Code samples

```bash
curl 'https://example.com/mysqldatabases/string/users/string/password?database_name=string&user_name=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "password": "string"
  }'
```

`PUT /mysqldatabases/{databaseName}/users/{userName}/password`

> Body parameter

```json
{
  "password": "string"
}
```

<h3 id="change-password-for-mysql-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|database_name|query|string|true|Name of the database.|
|user_name|query|string|true|Name of the user.|
|databaseName|path|string|true|Automatically added|
|userName|path|string|true|Automatically added|
|body|body|[UpdateUserPasswordRequest](#schemaupdateuserpasswordrequest)|false|Contains the new password.|
|» password|body|string|false|The password for the database user.<br /><br>Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>|

<h3 id="change-password-for-mysql-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Enable/disable mysql user

<a id="opIdChangeDatabaseUserStatus"></a>

> Code samples

```bash
curl 'https://example.com/mysqldatabases/string/users/string/status?database_name=string&user_name=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "enabled": true
  }'
```

`PUT /mysqldatabases/{databaseName}/users/{userName}/status`

> Body parameter

```json
{
  "enabled": true
}
```

<h3 id="enabledisable-mysql-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|database_name|query|string|true|Name of the database.|
|user_name|query|string|true|Name of the user.|
|databaseName|path|string|true|Automatically added|
|userName|path|string|true|Automatically added|
|body|body|[UpdateUserStatusRequest](#schemaupdateuserstatusrequest)|false|Whether the user is enabled or not.|
|» enabled|body|boolean|false|Enabled|

<h3 id="enabledisable-mysql-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="public-api-provisioning-jobs">Provisioning jobs</h1>

## Detail of a provisioning job

> Code samples

```bash
curl 'https://example.com/provisioningjobs/string?job_id=497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept: application/json'
```

`GET /provisioningjobs/{jobId}`

Provisioning failures may occur. Contact support in the event of a failure or wait for error resolution.<br />
Do NOT retry provisioning until the job reports finished or cancelled.

<h3 id="detail-of-a-provisioning-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job_id|query|string(uuid)|true|none|
|jobId|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "completion": {
    "estimate": "1970-01-01T00:00:00Z"
  },
  "id": "string",
  "status": "ongoing"
}
```

> 201 Response

```json
{
  "id": "string",
  "resource_links": [
    "string"
  ]
}
```

<h3 id="detail-of-a-provisioning-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProvisioningJobInfo](#schemaprovisioningjobinfo)|
|201|Created|Success|[ProvisioningJobCompletion](#schemaprovisioningjobcompletion)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||The location of the created resource.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="public-api-servicepacks">Servicepacks</h1>

## Overview of service packs

<a id="opIdServicepacks"></a>

> Code samples

```bash
curl https://example.com/servicepacks \
  -H 'Accept: application/json'
```

`GET /servicepacks`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string"
  }
]
```

<h3 id="overview-of-service-packs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="overview-of-service-packs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Servicepack](#schemaservicepack)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="public-api-ssh">SSH</h1>

## Overview of SSH keys

<a id="opIdGetAllSshKeys"></a>

> Code samples

```bash
curl https://example.com/ssh \
  -H 'Accept: application/json'
```

`GET /ssh`

<h3 id="overview-of-ssh-keys-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|skip|query|integer(int32)|false|The number of items to skip in the resultset.|
|take|query|integer(int32)|false|The number of items to return in the resultset. The returned count can be equal or less than this number.|

> Example responses

> 200 Response

```json
[
  {
    "fingerprint": "string",
    "linux_hostings": [
      "string"
    ],
    "public_key": "string"
  }
]
```

<h3 id="overview-of-ssh-keys-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="overview-of-ssh-keys-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SshKeyDetail](#schemasshkeydetail)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Paging-Skipped|integer||The number of results that have been skipped.|
|200|X-Paging-Take|integer||The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.|
|200|X-Paging-TotalResults|integer||The total number of results regardless of paging.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="public-api-ssl-certificate-requests">SSL certificate requests</h1>

Create new SSL certificates. In the provisioning documentation you can find more info on the flow that should be followed.

## Overview of SSL certificate requests

<a id="opIdGetSslCertificateRequests"></a>

> Code samples

```bash
curl https://example.com/sslcertificaterequests \
  -H 'Accept: application/json'
```

`GET /sslcertificaterequests`

<h3 id="overview-of-ssl-certificate-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|skip|query|integer(int32)|false|The number of items to skip in the resultset.|
|take|query|integer(int32)|false|The number of items to return in the resultset. The returned count can be equal or less than this number.|

> Example responses

> 200 Response

```json
[
  {
    "certificate_type": "standard",
    "common_name": "string",
    "id": 0,
    "order_code": "string",
    "validation_level": "domain_validated",
    "vendor": "sectigo"
  }
]
```

<h3 id="overview-of-ssl-certificate-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="overview-of-ssl-certificate-requests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SslCertificateRequest](#schemasslcertificaterequest)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Paging-Skipped|integer||The number of results that have been skipped.|
|200|X-Paging-Take|integer||The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.|
|200|X-Paging-TotalResults|integer||The total number of results regardless of paging.|

<aside class="success">
This operation does not require authentication
</aside>

## Add a SSL certificate request

<a id="opIdAddSslCertificateRequest"></a>

> Code samples

```bash
curl https://example.com/sslcertificaterequests \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "additional_validation_attributes": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "certificate_type": "standard",
    "csr": "string",
    "validation_level": "domain_validated"
  }'
```

`POST /sslcertificaterequests`

Executing this method causes the purchase of a paying product.<br />
Log on to our website to see your current (renewal) prices or contact our Sales department.<br />
Please note that promotional pricing does not apply for purchases made through our API.

> Body parameter

```json
{
  "additional_validation_attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "certificate_type": "standard",
  "csr": "string",
  "validation_level": "domain_validated"
}
```

<h3 id="add-a-ssl-certificate-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateSslCertificateRequest](#schemacreatesslcertificaterequest)|false|none|
|» additional_validation_attributes|body|[[AdditionalValidationAttribute](#schemaadditionalvalidationattribute)]|false|List of additional validation attributes for the certificate when choosing organization or extended validation.<br><table><tr><th>Name</th><th>Info</th><th>Required</th></tr><tr><td>Firstname</td><td>Firstname of the technical contact</td><td>Yes</td></tr><tr><td>Lastname</td><td>Lastname of the technical contact</td><td>Yes</td></tr><tr><td>Phone</td><td>Phone of the technical contact</td><td>Yes</td></tr><tr><td>EmailAddress</td><td>Email address of the technical contact</td><td>Yes</td></tr><tr><td>Street</td><td>Address street of the organization</td><td>Yes</td></tr><tr><td>Number</td><td>Address house number of the organization</td><td>Yes</td></tr><tr><td>PostalCode</td><td>Address postal code of the organization</td><td>Yes</td></tr><tr><td>VatCountryCode</td><td>VAT country code of the organization, ISO 3166-1 alpha-2 country code</td><td>Yes</td></tr><tr><td>OrganizationNumber</td><td>Business number of the organization</td><td>No</td></tr></table>|
|» certificate_type|body|[SslCertificateType](#schemasslcertificatetype)|false|The type of the certificate:<br><ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>|
|» csr|body|string|false|The certificate signing request data.<br /><br>The certificate signing request subject should contain following attributes:<br /><table><tr><th>Name</th><th>Code</th><th>Format</th></tr><tr><td>CommonName</td><td>CN</td><td>Valid domain name, for example site.be, alias.site.be or *.site.be</td></tr><tr><td>Country</td><td>C</td><td>ISO 3166-1 alpha-2 country code</td></tr><tr><td>State</td><td>ST</td><td></td></tr><tr><td>Locality</td><td>L</td><td></td></tr><tr><td>Organization</td><td>O</td><td></td></tr><tr><td>EmailAddress</td><td>E</td><td>Valid email address</td></tr></table><br>The certificate signing request should also contain all the additional aliases and domains (SAN's) for the certificate.|
|» validation_level|body|[SslCertificateValidationLevel](#schemasslcertificatevalidationlevel)|false|The validation level of the certificate:<br><ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» certificate_type|standard|
|» certificate_type|multi_domain|
|» certificate_type|wildcard|
|» validation_level|domain_validated|
|» validation_level|organization_validated|
|» validation_level|extended_validated|

<h3 id="add-a-ssl-certificate-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||The location of the created resource.|

<aside class="success">
This operation does not require authentication
</aside>

## Detail of a SSL certificate request

<a id="opIdGetSslCertificateRequest"></a>

> Code samples

```bash
curl https://example.com/sslcertificaterequests/0 \
  -H 'Accept: application/json'
```

`GET /sslcertificaterequests/{id}`

<h3 id="detail-of-a-ssl-certificate-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The id of the certificate request.|

> Example responses

> 200 Response

```json
{
  "certificate_type": "standard",
  "common_name": "string",
  "id": 0,
  "order_code": "string",
  "subject_alt_names": [
    {
      "type": "dns",
      "value": "string"
    }
  ],
  "validation_level": "domain_validated",
  "validations": [
    {
      "auto_validated": true,
      "cname_validation_content": "string",
      "cname_validation_name": "string",
      "dns_name": "string",
      "email_addresses": [
        "string"
      ],
      "file_validation_content": [
        "string"
      ],
      "file_validation_url_http": "string",
      "file_validation_url_https": "string",
      "type": "dns"
    }
  ],
  "vendor": "sectigo"
}
```

<h3 id="detail-of-a-ssl-certificate-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SslCertificateRequestDetail](#schemasslcertificaterequestdetail)|
|303|See Other|Redirect|None|
|410|Gone|The resource existed in the past, but is no longer available.|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|303|Location|string||The location referring to a resource that replaced the original resource.|

<aside class="success">
This operation does not require authentication
</aside>

## Verify the SSL certificate request domain validations

<a id="opIdVerifySslCertificateRequestDomainValidations"></a>

> Code samples

```bash
curl https://example.com/sslcertificaterequests/0 \
  -X PUT
```

`PUT /sslcertificaterequests/{id}`

<h3 id="verify-the-ssl-certificate-request-domain-validations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The id of the certificate request.|

<h3 id="verify-the-ssl-certificate-request-domain-validations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|303|See Other|Redirect|None|
|410|Gone|The resource existed in the past, but is no longer available.|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|303|Location|string||The location referring to a resource that replaced the original resource.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="public-api-ssl-certificates">SSL certificates</h1>

Manage your SSL certificates.

## Overview of SSL certificates

<a id="opIdGetSslCertificates"></a>

> Code samples

```bash
curl https://example.com/sslcertificates \
  -H 'Accept: application/json'
```

`GET /sslcertificates`

<h3 id="overview-of-ssl-certificates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|skip|query|integer(int32)|false|The number of items to skip in the resultset.|
|take|query|integer(int32)|false|The number of items to return in the resultset. The returned count can be equal or less than this number.|

> Example responses

> 200 Response

```json
[
  {
    "common_name": "string",
    "expires_after": "1970-01-01T00:00:00Z",
    "sha1_fingerprint": "string",
    "type": "standard",
    "validation_level": "domain_validated"
  }
]
```

<h3 id="overview-of-ssl-certificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="overview-of-ssl-certificates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SslCertificate](#schemasslcertificate)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Paging-Skipped|integer||The number of results that have been skipped.|
|200|X-Paging-Take|integer||The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.|
|200|X-Paging-TotalResults|integer||The total number of results regardless of paging.|

<aside class="success">
This operation does not require authentication
</aside>

## Detail of a SSL certificate

<a id="opIdGetSslCertificate"></a>

> Code samples

```bash
curl 'https://example.com/sslcertificates/string?sha1_fingerprint=string' \
  -H 'Accept: application/json'
```

`GET /sslcertificates/{sha1Fingerprint}`

<h3 id="detail-of-a-ssl-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sha1_fingerprint|query|string|true|The SHA-1 fingerprint of the certificate.|
|sha1Fingerprint|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "common_name": "string",
  "expires_after": "1970-01-01T00:00:00Z",
  "sha1_fingerprint": "string",
  "subject_alt_names": [
    {
      "type": "dns",
      "value": "string"
    }
  ],
  "type": "standard",
  "validation_level": "domain_validated"
}
```

<h3 id="detail-of-a-ssl-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SslCertificateDetail](#schemasslcertificatedetail)|

<aside class="success">
This operation does not require authentication
</aside>

## Download a SSL certificate

<a id="opIdDownloadCertificate"></a>

> Code samples

```bash
curl 'https://example.com/sslcertificates/string/download?sha1_fingerprint=string&file_format=pfx&password=string' \
  -H 'Accept: application/json'
```

`GET /sslcertificates/{sha1Fingerprint}/download`

Returns the certifcate as binary data with the content-type and the filename information in the response headers.

<h3 id="download-a-ssl-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sha1_fingerprint|query|string|true|The SHA-1 fingerprint of the certificate.|
|file_format|query|[SslCertificateFileFormat](#schemasslcertificatefileformat)|true|The file format of the returned file stream:<br><ul><li>PFX: Also known as PKCS #12, is a single, password protected certificate archive that contains the entire certificate chain plus the matching private key.</li></ul>|
|password|query|string|true|The password used to protect the certificate file.<br />|
|sha1Fingerprint|path|string|true|Automatically added|

#### Enumerated Values

|Parameter|Value|
|---|---|
|file_format|pfx|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="download-a-ssl-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Invalid file_format or invalid password|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="public-api-windows-hostings">Windows hostings</h1>

Manage your windows hostings.

## Overview of windows hostings

<a id="opIdGetWindowsHostings"></a>

> Code samples

```bash
curl https://example.com/windowshostings \
  -H 'Accept: application/json'
```

`GET /windowshostings`

<h3 id="overview-of-windows-hostings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|skip|query|integer(int32)|false|The number of items to skip in the resultset.|
|take|query|integer(int32)|false|The number of items to return in the resultset. The returned count can be equal or less than this number.|

> Example responses

> 200 Response

```json
[
  {
    "domain_name": "string",
    "servicepack_id": 0
  }
]
```

<h3 id="overview-of-windows-hostings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="overview-of-windows-hostings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[WindowsHosting](#schemawindowshosting)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Paging-Skipped|integer||The number of results that have been skipped.|
|200|X-Paging-Take|integer||The number of items in the current take. The number might differ from the requested take. It represents the actual number of items returned in the response.|
|200|X-Paging-TotalResults|integer||The total number of results regardless of paging.|

<aside class="success">
This operation does not require authentication
</aside>

## Windows hosting detail

<a id="opIdGetWindowsHosting"></a>

> Code samples

```bash
curl 'https://example.com/windowshostings/string?domain_name=string' \
  -H 'Accept: application/json'
```

`GET /windowshostings/{domainName}`

<h3 id="windows-hosting-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|query|string|true|The Windows hosting domain name.|
|domainName|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "actual_size": 0,
  "application_pool": {
    "installed_net_core_runtimes": [
      "string"
    ],
    "pipeline_mode": "string",
    "runtime": "string"
  },
  "domain_name": "string",
  "ftp_username": "string",
  "ip": "string",
  "ip_type": "dedicated",
  "max_size": 0,
  "mssql_database_names": [
    "string"
  ],
  "servicepack_id": 0,
  "sites": [
    {
      "bindings": [
        {
          "cert_thumbprint": "string",
          "host_name": "string",
          "ip_address": "string",
          "port": 0,
          "protocol": "string",
          "ssl_enabled": true
        }
      ],
      "name": "string",
      "path": "string"
    }
  ]
}
```

<h3 id="windows-hosting-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WindowsHostingDetail](#schemawindowshostingdetail)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "id": 0,
  "identifier": "string",
  "servicepack_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|The id of the account|
|identifier|string|false|none|Identifier for the account|
|servicepack_id|integer(int32)|false|none|The servicepack id that defines the account.|

<h2 id="tocS_AccountDetail">AccountDetail</h2>
<!-- backwards compatibility -->
<a id="schemaaccountdetail"></a>
<a id="schema_AccountDetail"></a>
<a id="tocSaccountdetail"></a>
<a id="tocsaccountdetail"></a>

```json
{
  "addons": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "id": 0,
  "identifier": "string",
  "servicepack": {
    "id": 0,
    "name": "string"
  }
}
```

A detailed representation of an account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addons|[[Addon](#schemaaddon)]|false|none|A list of addons applied to the account.|
|id|integer(int32)|false|none|The id of the account|
|identifier|string|false|none|Identifier for the account|
|servicepack|[Servicepack](#schemaservicepack)|false|none|Servicepack information.|

<h2 id="tocS_AddHostHeaderRequest">AddHostHeaderRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddhostheaderrequest"></a>
<a id="schema_AddHostHeaderRequest"></a>
<a id="tocSaddhostheaderrequest"></a>
<a id="tocsaddhostheaderrequest"></a>

```json
{
  "domain_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain_name|string|false|none|Host header domain name (e.g. alias.be or alias.site.be).|

<h2 id="tocS_AddSshKeyRequest">AddSshKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddsshkeyrequest"></a>
<a id="schema_AddSshKeyRequest"></a>
<a id="tocSaddsshkeyrequest"></a>
<a id="tocsaddsshkeyrequest"></a>

```json
{
  "public_key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public_key|string|false|none|Public key|

<h2 id="tocS_AddSubsiteRequest">AddSubsiteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddsubsiterequest"></a>
<a id="schema_AddSubsiteRequest"></a>
<a id="tocSaddsubsiterequest"></a>
<a id="tocsaddsubsiterequest"></a>

```json
{
  "domain_name": "string",
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain_name|string|false|none|Subsite domain name (e.g. alias.be or subsite.site.be).|
|path|string|false|none|Folder location for the subsite (when empty we use /subsites/site (e.g. /subsites/subsite.site.be)<br /><br>The path MUST pre-exist on the server. It WILL NOT be created automatically.|

<h2 id="tocS_AdditionalValidationAttribute">AdditionalValidationAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalvalidationattribute"></a>
<a id="schema_AdditionalValidationAttribute"></a>
<a id="tocSadditionalvalidationattribute"></a>
<a id="tocsadditionalvalidationattribute"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Additional validation attribute field name.|
|value|string|false|none|Additional validation attribute field value.|

<h2 id="tocS_Addon">Addon</h2>
<!-- backwards compatibility -->
<a id="schemaaddon"></a>
<a id="schema_Addon"></a>
<a id="tocSaddon"></a>
<a id="tocsaddon"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

Addon information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|The id of the addon|
|name|string|false|none|The name of the addon|

<h2 id="tocS_Alias">Alias</h2>
<!-- backwards compatibility -->
<a id="schemaalias"></a>
<a id="schema_Alias"></a>
<a id="tocSalias"></a>
<a id="tocsalias"></a>

```json
{
  "destinations": [
    "string"
  ],
  "email_address": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinations|[string]|false|none|The alias destination e-mail addresses|
|email_address|string|false|none|The alias e-mail address|

<h2 id="tocS_AntiSpam">AntiSpam</h2>
<!-- backwards compatibility -->
<a id="schemaantispam"></a>
<a id="schema_AntiSpam"></a>
<a id="tocSantispam"></a>
<a id="tocsantispam"></a>

```json
{
  "allowed_types": [
    "none"
  ],
  "type": "none"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_types|[[AntiSpamTypes](#schemaantispamtypes)]|false|none|Allowed types of anti-spam scanning for this mail zone|
|type|[AntiSpamTypes](#schemaantispamtypes)|false|none|Types of anti-spam scanning|

#### Enumerated Values

|Property|Value|
|---|---|
|allowed_types|none|
|allowed_types|advanced|
|allowed_types|basic|
|type|none|
|type|advanced|
|type|basic|

<h2 id="tocS_AntiSpamTypes">AntiSpamTypes</h2>
<!-- backwards compatibility -->
<a id="schemaantispamtypes"></a>
<a id="schema_AntiSpamTypes"></a>
<a id="tocSantispamtypes"></a>
<a id="tocsantispamtypes"></a>

```json
"none"
```

Types of anti-spam scanning

<h2 id="tocS_ApplicationPool">ApplicationPool</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationpool"></a>
<a id="schema_ApplicationPool"></a>
<a id="tocSapplicationpool"></a>
<a id="tocsapplicationpool"></a>

```json
{
  "installed_net_core_runtimes": [
    "string"
  ],
  "pipeline_mode": "string",
  "runtime": "string"
}
```

The application pool for the hosting account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|installed_net_core_runtimes|[string]|false|none|The installed .NET Core runtimes for the hosting account.|
|pipeline_mode|string|false|none|The active pipeline mode for the hosting account.|
|runtime|string|false|none|The active runtime for the hosting account.|

<h2 id="tocS_AssetType">AssetType</h2>
<!-- backwards compatibility -->
<a id="schemaassettype"></a>
<a id="schema_AssetType"></a>
<a id="tocSassettype"></a>
<a id="tocsassettype"></a>

```json
"domain"
```

Asset types

<h2 id="tocS_AutoForward">AutoForward</h2>
<!-- backwards compatibility -->
<a id="schemaautoforward"></a>
<a id="schema_AutoForward"></a>
<a id="tocSautoforward"></a>
<a id="tocsautoforward"></a>

```json
{
  "copy_to_myself": true,
  "email_addresses": [
    "string"
  ],
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copy_to_myself|boolean|false|none|Copy to myself|
|email_addresses|[string]|false|none|E-mail addresses to which e-mails are forwarded|
|enabled|boolean|false|none|Enabled|

<h2 id="tocS_AutoRedirectConfig">AutoRedirectConfig</h2>
<!-- backwards compatibility -->
<a id="schemaautoredirectconfig"></a>
<a id="schema_AutoRedirectConfig"></a>
<a id="tocSautoredirectconfig"></a>
<a id="tocsautoredirectconfig"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Enabled|

<h2 id="tocS_AutoReply">AutoReply</h2>
<!-- backwards compatibility -->
<a id="schemaautoreply"></a>
<a id="schema_AutoReply"></a>
<a id="tocSautoreply"></a>
<a id="tocsautoreply"></a>

```json
{
  "enabled": true,
  "message": "string",
  "subject": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Enabled|
|message|string|false|none|Message|
|subject|string|false|none|Subject|

<h2 id="tocS_BadRequestResponse">BadRequestResponse</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestresponse"></a>
<a id="schema_BadRequestResponse"></a>
<a id="tocSbadrequestresponse"></a>
<a id="tocsbadrequestresponse"></a>

```json
{
  "validation_errors": [
    {
      "error_code": "string",
      "error_text": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validation_errors|[[ValidationErrorMessage](#schemavalidationerrormessage)]|false|none|A list of validation errors that occurred when processing the request.|

<h2 id="tocS_CatchAll">CatchAll</h2>
<!-- backwards compatibility -->
<a id="schemacatchall"></a>
<a id="schema_CatchAll"></a>
<a id="tocScatchall"></a>
<a id="tocscatchall"></a>

```json
{
  "email_addresses": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_addresses|[string]|false|none|E-mail addresses to which all e-mails are sent to inexistent mailboxes or aliases|

<h2 id="tocS_CompletionEstimation">CompletionEstimation</h2>
<!-- backwards compatibility -->
<a id="schemacompletionestimation"></a>
<a id="schema_CompletionEstimation"></a>
<a id="tocScompletionestimation"></a>
<a id="tocscompletionestimation"></a>

```json
{
  "estimate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimate|string(date-time)|false|none|The estimated time when the job should be finished.<br /><br>Unexpected delays can always occur.<br /><br>The value is subject to change during the provisioning.|

<h2 id="tocS_CreateAccount">CreateAccount</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccount"></a>
<a id="schema_CreateAccount"></a>
<a id="tocScreateaccount"></a>
<a id="tocscreateaccount"></a>

```json
{
  "ftp_password": "string",
  "identifier": "string",
  "servicepack_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ftp_password|string|false|none|Ftp password for the account.<br /><br>Applies only if the servicepack contains hosting.<br /><br>Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>|
|identifier|string|false|none|An identifier for the account.<br /><br>Should be a domain name for hosting accounts.|
|servicepack_id|integer(int32)|false|none|The servicepack id that defines the account.|

<h2 id="tocS_CreateAliasRequest">CreateAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatealiasrequest"></a>
<a id="schema_CreateAliasRequest"></a>
<a id="tocScreatealiasrequest"></a>
<a id="tocscreatealiasrequest"></a>

```json
{
  "destinations": [
    "string"
  ],
  "email_address": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinations|[string]|false|none|The alias destination e-mail addresses|
|email_address|string|false|none|The alias e-mail|

<h2 id="tocS_CreateCatchAllRequest">CreateCatchAllRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecatchallrequest"></a>
<a id="schema_CreateCatchAllRequest"></a>
<a id="tocScreatecatchallrequest"></a>
<a id="tocscreatecatchallrequest"></a>

```json
{
  "email_address": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_address|string|false|none|E-mail address to which all e-mails are sent to inexistent mailboxes or aliases|

<h2 id="tocS_CreateMailboxRequest">CreateMailboxRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemailboxrequest"></a>
<a id="schema_CreateMailboxRequest"></a>
<a id="tocScreatemailboxrequest"></a>
<a id="tocscreatemailboxrequest"></a>

```json
{
  "account_id": 0,
  "email_address": "string",
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int32)|false|none|Mail zone account id|
|email_address|string|false|none|E-mail address|
|password|string|false|none|The password for the mailbox.<br /><br>Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>|

<h2 id="tocS_CreateMySqlDatabase">CreateMySqlDatabase</h2>
<!-- backwards compatibility -->
<a id="schemacreatemysqldatabase"></a>
<a id="schema_CreateMySqlDatabase"></a>
<a id="tocScreatemysqldatabase"></a>
<a id="tocscreatemysqldatabase"></a>

```json
{
  "account_id": 0,
  "database_name": "string",
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int32)|false|none|The id of the account on which to create the database.|
|database_name|string|false|none|The name for the database. This will be prefixed during provisioning.<br>The provided name during creation will be different from the provisioned database name.|
|password|string|false|none|The password for the database user.<br /><br>Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>|

<h2 id="tocS_CreateMySqlUser">CreateMySqlUser</h2>
<!-- backwards compatibility -->
<a id="schemacreatemysqluser"></a>
<a id="schema_CreateMySqlUser"></a>
<a id="tocScreatemysqluser"></a>
<a id="tocscreatemysqluser"></a>

```json
{
  "name": "string",
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|User name<br /><br>User names have to adhere to following rules:<br /><ul><li>Between 2-14 characters.</li><li>Must be a mix of letters and/or digits.</li><li>Must be lower cased.</li><li>Cannot contain spaces.</li></ul>|
|password|string|false|none|The password for the database user.<br /><br>Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>|

<h2 id="tocS_CreateSmtpDomainRequest">CreateSmtpDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesmtpdomainrequest"></a>
<a id="schema_CreateSmtpDomainRequest"></a>
<a id="tocScreatesmtpdomainrequest"></a>
<a id="tocscreatesmtpdomainrequest"></a>

```json
{
  "hostname": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string|false|none|The smtp domain name|

<h2 id="tocS_CreateSslCertificateRequest">CreateSslCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesslcertificaterequest"></a>
<a id="schema_CreateSslCertificateRequest"></a>
<a id="tocScreatesslcertificaterequest"></a>
<a id="tocscreatesslcertificaterequest"></a>

```json
{
  "additional_validation_attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "certificate_type": "standard",
  "csr": "string",
  "validation_level": "domain_validated"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_validation_attributes|[[AdditionalValidationAttribute](#schemaadditionalvalidationattribute)]|false|none|List of additional validation attributes for the certificate when choosing organization or extended validation.<br><table><tr><th>Name</th><th>Info</th><th>Required</th></tr><tr><td>Firstname</td><td>Firstname of the technical contact</td><td>Yes</td></tr><tr><td>Lastname</td><td>Lastname of the technical contact</td><td>Yes</td></tr><tr><td>Phone</td><td>Phone of the technical contact</td><td>Yes</td></tr><tr><td>EmailAddress</td><td>Email address of the technical contact</td><td>Yes</td></tr><tr><td>Street</td><td>Address street of the organization</td><td>Yes</td></tr><tr><td>Number</td><td>Address house number of the organization</td><td>Yes</td></tr><tr><td>PostalCode</td><td>Address postal code of the organization</td><td>Yes</td></tr><tr><td>VatCountryCode</td><td>VAT country code of the organization, ISO 3166-1 alpha-2 country code</td><td>Yes</td></tr><tr><td>OrganizationNumber</td><td>Business number of the organization</td><td>No</td></tr></table>|
|certificate_type|[SslCertificateType](#schemasslcertificatetype)|false|none|The type of the certificate:<br><ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>|
|csr|string|false|none|The certificate signing request data.<br /><br>The certificate signing request subject should contain following attributes:<br /><table><tr><th>Name</th><th>Code</th><th>Format</th></tr><tr><td>CommonName</td><td>CN</td><td>Valid domain name, for example site.be, alias.site.be or *.site.be</td></tr><tr><td>Country</td><td>C</td><td>ISO 3166-1 alpha-2 country code</td></tr><tr><td>State</td><td>ST</td><td></td></tr><tr><td>Locality</td><td>L</td><td></td></tr><tr><td>Organization</td><td>O</td><td></td></tr><tr><td>EmailAddress</td><td>E</td><td>Valid email address</td></tr></table><br>The certificate signing request should also contain all the additional aliases and domains (SAN's) for the certificate.|
|validation_level|[SslCertificateValidationLevel](#schemasslcertificatevalidationlevel)|false|none|The validation level of the certificate:<br><ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|certificate_type|standard|
|certificate_type|multi_domain|
|certificate_type|wildcard|
|validation_level|domain_validated|
|validation_level|organization_validated|
|validation_level|extended_validated|

<h2 id="tocS_DnsRecord">DnsRecord</h2>
<!-- backwards compatibility -->
<a id="schemadnsrecord"></a>
<a id="schema_DnsRecord"></a>
<a id="tocSdnsrecord"></a>
<a id="tocsdnsrecord"></a>

```json
{
  "content": "string",
  "id": "string",
  "port": 0,
  "priority": 10,
  "protocol": "TCP",
  "record_name": "string",
  "service": "string",
  "target": "string",
  "ttl": 3600,
  "type": "string",
  "weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|Variable data depending on the record type.<br><ul><li>A: the IPv4 address.</li><li>CNAME: canonical name of an alias.</li><li>MX: fully qualified domain name of a mail host.</li><li>SRV: does not apply. Data for the SRV records can be found in specific properties.</li><li>TXT: free form text data.</li><li>CAA: format should match specific values for flag, tag and ca: "{flag} {tag} {ca}".<br>        <ul><li>The flag. The values 128 (critical) or 0 (non-critical) are expected, with 0 as the default.</li><li>The tag. A tag specifies which actions an authorized CA can take in terms of issuing SSL/TLS certificates.<br /><ul><li>The value "issue": explicitly authorizes a single certificate authority to issue a certificate (any type) for the hostname.</li><li>The value "issuewild": explicitly authorizes a single certificate authority to issue a wildcard certificate (and only wildcard) for the hostname.</li><li>The value "iodef": specifies a URL to which a certificate authority may report policy violations.</li></ul></li><li>The ca. This is the domain of the CA (Certification Authority) that has the authority to issue certificates for the domain in question. If the value is a semicolon (;), it means that no CA has the authority to issue a certificate for that domain.</li></ul></li><li>ALIAS: canonical name of an alias.</li><li>TLSA: format should match specific values for usage, selector, matching type and data: "{usage} {selector} {matching_type} {data}"<br>        <ul><li>The usage. The first field after the TLSA text in the DNS RR, specifies how to verify the certificate.<br /><ul><li>A value of 0 is for what is commonly called CA constraint (and PKIX-TA). The certificate provided when establishing TLS must be issued by the listed root-CA or one of its intermediate CAs, with a valid certification path to a root-CA already trusted by the application doing the verification.</li><li>A value of 1 is for what is commonly called Service certificate constraint (and PKIX-EE). The certificate used must match the TLSA record exactly, and it must also pass PKIX certification path validation to a trusted root-CA.</li><li>A value of 2 is for what is commonly called Trust Anchor Assertion (and DANE-TA). The certificate used has a valid certification path pointing back to the certificate mention in this record, but there is no need for it to pass the PKIX certification path validation to a trusted root-CA.</li><li>A value of 3 is for what is commonly called Domain issued certificate (and DANE-EE). The services uses a self-signed certificate. It is not signed by anyone else, and is exactly this record.</li></ul></li><li>The selector. When connecting to the service and a certificate is received, the selector field specifies which parts of it should be checked.<br /><ul><li>A value of 0 means to select the entire certificate for matching.</li><li>A value of 1 means to select just the public key for certificate matching. Matching the public key is often sufficient, as this is likely to be unique.</li></ul></li><li>The matching type.<br /><ul><li>A type of 0 means the entire information selected is present in the certificate association data.</li><li>A type of 1 means to do a SHA-256 hash of the selected data.</li><li>A type of 2 means to do a SHA-512 hash of the selected data.</li></ul></li><li>The actual data to be matched given the settings of the other fields. This is a long text string of hexadecimal data.</li></ul></li></ul>|
|id|string|false|none|The id of the record<br>This value is ignored for creation of new records.|
|port|integer(int32)|false|none|The port for SRV records.<br /><br>The value MUST be a positive integer.<br /><br>Editing the value is not possible. You should add a new SRV record and delete the existing record.|
|priority|integer(int32)|false|none|The priority for MX or SRV records.<br /><br>A lower value means more preferred.<br /><br>The value MUST be a positive integer less or equal to 9999.|
|protocol|string|false|none|Used for the creation of SRV records. Possible options: TCP, UDP, ...<br /><br>Editing the value is not possible. You should add a new SRV record and delete the existing record.|
|record_name|string|false|none|The name of the record.<br /><br>This is the host name, alias defined by the record.<br /><br>An empty record or '@' is equal to the domain name.<br /><br>Applies to A, MX, CNAME, TXT, CAA, ALIAS and TLSA records.<br /><br>When type is TLSA the recommended value format is port number, protocol and host: _25._tcp.<br /><br>Does not apply for SRV records.|
|service|string|false|none|The symbolic name of the desired service for SRV records.<br /><br>Editing the value is not possible. You should add a new SRV record and can delete the existing record.|
|target|string|false|none|The canonical hostname of the machine providing the service for SRV records.<br /><br>Editing the value is not possible. You should add a new SRV record and delete the existing record.|
|ttl|integer(int32)|false|none|Time to live of the record in seconds.<br /><br>It defines the time frame that clients can cache the information.<br /><br>The value MUST be between 60 and 86400. The default value is 3600 (= 1 hour).|
|type|string|false|none|The type of the record (A, MX, CNAME, SRV, TXT, CAA, ALIAS and TLSA).|
|weight|integer(int32)|false|none|The weight for SRV records with the same priority.<br /><br>A higher value means more preferred.|

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
{
  "domain_name": "string",
  "expiration_date": "1970-01-01T00:00:00Z",
  "will_renew": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain_name|string|false|none|The domain name|
|expiration_date|string(date-time)|false|none|Expiration date of the domain|
|will_renew|boolean|false|none|Indication of renewal.<br /><br>No value indicates that the renewal state could not be determined at the moment.|

<h2 id="tocS_DomainDetail">DomainDetail</h2>
<!-- backwards compatibility -->
<a id="schemadomaindetail"></a>
<a id="schema_DomainDetail"></a>
<a id="tocSdomaindetail"></a>
<a id="tocsdomaindetail"></a>

```json
{
  "can_toggle_renew": true,
  "domain_name": "string",
  "expiration_date": "1970-01-01T00:00:00Z",
  "name_servers": [
    {
      "ip": "string",
      "name": "string"
    }
  ],
  "registrant": {
    "address": "string",
    "city": "string",
    "company_name": "string",
    "country_code": "string",
    "email": "string",
    "enterprise_number": "string",
    "fax": "string",
    "first_name": "string",
    "language_code": "string",
    "last_name": "string",
    "phone": "string",
    "postal_code": "string"
  },
  "will_renew": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|can_toggle_renew|boolean|false|none|Indication if the domain renew state can be changed.|
|domain_name|string|false|none|The domain name|
|expiration_date|string(date-time)|false|none|Expiration date of the domain|
|name_servers|[[NameServer](#schemanameserver)]|false|none|Nameservers of the domain|
|registrant|[Registrant](#schemaregistrant)|false|none|none|
|will_renew|boolean|false|none|Indication of renewal.<br /><br>No value indicates that the renewal state could not be determined at the moment.|

<h2 id="tocS_EditDomainWillRenewRequest">EditDomainWillRenewRequest</h2>
<!-- backwards compatibility -->
<a id="schemaeditdomainwillrenewrequest"></a>
<a id="schema_EditDomainWillRenewRequest"></a>
<a id="tocSeditdomainwillrenewrequest"></a>
<a id="tocseditdomainwillrenewrequest"></a>

```json
{
  "will_renew": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|will_renew|boolean|false|none|Indication of renewal.|

<h2 id="tocS_EditNameServers">EditNameServers</h2>
<!-- backwards compatibility -->
<a id="schemaeditnameservers"></a>
<a id="schema_EditNameServers"></a>
<a id="tocSeditnameservers"></a>
<a id="tocseditnameservers"></a>

```json
{
  "domain_name": "string",
  "name_servers": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain_name|string|false|none|The domain name to register.|
|name_servers|[string]|false|none|List of name servers.|

<h2 id="tocS_ExtraField">ExtraField</h2>
<!-- backwards compatibility -->
<a id="schemaextrafield"></a>
<a id="schema_ExtraField"></a>
<a id="tocSextrafield"></a>
<a id="tocsextrafield"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Registrant extra field name.|
|value|string|false|none|Registrant extra field value.|

<h2 id="tocS_FtpConfiguration">FtpConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaftpconfiguration"></a>
<a id="schema_FtpConfiguration"></a>
<a id="tocSftpconfiguration"></a>
<a id="tocsftpconfiguration"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Enable or disable FTP.|

<h2 id="tocS_GzipConfig">GzipConfig</h2>
<!-- backwards compatibility -->
<a id="schemagzipconfig"></a>
<a id="schema_GzipConfig"></a>
<a id="tocSgzipconfig"></a>
<a id="tocsgzipconfig"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Enabled|

<h2 id="tocS_HostHeader">HostHeader</h2>
<!-- backwards compatibility -->
<a id="schemahostheader"></a>
<a id="schema_HostHeader"></a>
<a id="tocShostheader"></a>
<a id="tocshostheader"></a>

```json
{
  "enabled": true,
  "name": "string"
}
```

A host header identifies a web domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Indicates if the host header is applied on the web server.|
|name|string|false|none|The name of the host header.|

<h2 id="tocS_Http2Configuration">Http2Configuration</h2>
<!-- backwards compatibility -->
<a id="schemahttp2configuration"></a>
<a id="schema_Http2Configuration"></a>
<a id="tocShttp2configuration"></a>
<a id="tocshttp2configuration"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Enable or disable HTTP/2.|

<h2 id="tocS_LetsEncryptConfig">LetsEncryptConfig</h2>
<!-- backwards compatibility -->
<a id="schemaletsencryptconfig"></a>
<a id="schema_LetsEncryptConfig"></a>
<a id="tocSletsencryptconfig"></a>
<a id="tocsletsencryptconfig"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Enabled|

<h2 id="tocS_LinuxHosting">LinuxHosting</h2>
<!-- backwards compatibility -->
<a id="schemalinuxhosting"></a>
<a id="schema_LinuxHosting"></a>
<a id="tocSlinuxhosting"></a>
<a id="tocslinuxhosting"></a>

```json
{
  "domain_name": "string",
  "servicepack_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain_name|string|false|none|Domain name for the Linux hosting account.|
|servicepack_id|integer(int32)|false|none|Id of Linux hosting service package.|

<h2 id="tocS_LinuxHostingDetail">LinuxHostingDetail</h2>
<!-- backwards compatibility -->
<a id="schemalinuxhostingdetail"></a>
<a id="schema_LinuxHostingDetail"></a>
<a id="tocSlinuxhostingdetail"></a>
<a id="tocslinuxhostingdetail"></a>

```json
{
  "actual_size": 0,
  "domain_name": "string",
  "ftp_enabled": true,
  "ftp_username": "string",
  "ip": "string",
  "ip_type": "dedicated",
  "max_size": 0,
  "max_webspace_size": 0,
  "mysql_database_names": [
    "string"
  ],
  "php_version": "string",
  "servicepack_id": 0,
  "sites": [
    {
      "host_headers": [
        {
          "enabled": true,
          "name": "string"
        }
      ],
      "http2_enabled": true,
      "https_redirect_enabled": true,
      "name": "string",
      "path": "string",
      "ssl_enabled": true
    }
  ],
  "ssh_host": "string",
  "ssh_username": "string",
  "webspace_usage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actual_size|integer(int32)|false|none|Used webspace size in MB|
|domain_name|string|false|none|Domain name for the Linux hosting account.|
|ftp_enabled|boolean|false|none|Indicates whether ftp is enabled for the hosting account.|
|ftp_username|string|false|none|Ftp username|
|ip|string|false|none|Linux hosting IP address|
|ip_type|[LinuxIpType](#schemalinuxiptype)|false|none|Type of the hosting IP address (dedicated or shared)|
|max_size|integer(int32)|false|none|Maximum webspace size in MB|
|max_webspace_size|integer(int32)|false|none|**Deprecated.** Maximum webspace size in MB<br /><br>Use max_size instead.|
|mysql_database_names|[string]|false|none|A list of mysql databases linked to the hosting account.<br /><br>Details of the database can be read using the mysql database detail.|
|php_version|string|false|none|The active php version for the hosting account.|
|servicepack_id|integer(int32)|false|none|Id of Linux hosting service package.|
|sites|[[LinuxSite](#schemalinuxsite)]|false|none|A list of websites on the hosting account.|
|ssh_host|string|false|none|Ssh host of the linux hosting account|
|ssh_username|string|false|none|Ssh username|
|webspace_usage|integer(int32)|false|none|**Deprecated.** Used webspace size in MB<br /><br>Use actual_size instead.|

#### Enumerated Values

|Property|Value|
|---|---|
|ip_type|dedicated|
|ip_type|shared|

<h2 id="tocS_LinuxIpType">LinuxIpType</h2>
<!-- backwards compatibility -->
<a id="schemalinuxiptype"></a>
<a id="schema_LinuxIpType"></a>
<a id="tocSlinuxiptype"></a>
<a id="tocslinuxiptype"></a>

```json
"dedicated"
```

Type of the hosting IP address (dedicated or shared)

<h2 id="tocS_LinuxSite">LinuxSite</h2>
<!-- backwards compatibility -->
<a id="schemalinuxsite"></a>
<a id="schema_LinuxSite"></a>
<a id="tocSlinuxsite"></a>
<a id="tocslinuxsite"></a>

```json
{
  "host_headers": [
    {
      "enabled": true,
      "name": "string"
    }
  ],
  "http2_enabled": true,
  "https_redirect_enabled": true,
  "name": "string",
  "path": "string",
  "ssl_enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host_headers|[[HostHeader](#schemahostheader)]|false|none|Host headers for the website.|
|http2_enabled|boolean|false|none|Indicates whether http/2 protocol is enabled for the website.|
|https_redirect_enabled|boolean|false|none|Indicates whether automatic https redirection is enabled for the website.|
|name|string|false|none|The name of the website.|
|path|string|false|none|The path of the website.|
|ssl_enabled|boolean|false|none|Indicates whether ssl is enabled for the website.|

<h2 id="tocS_MailZone">MailZone</h2>
<!-- backwards compatibility -->
<a id="schemamailzone"></a>
<a id="schema_MailZone"></a>
<a id="tocSmailzone"></a>
<a id="tocsmailzone"></a>

```json
{
  "aliases": [
    {
      "destinations": [
        "string"
      ],
      "email_address": "string"
    }
  ],
  "anti_spam": {
    "allowed_types": [
      "none"
    ],
    "type": "none"
  },
  "available_accounts": [
    {
      "account_id": 0,
      "size": 0
    }
  ],
  "catch_all": {
    "email_addresses": [
      "string"
    ]
  },
  "enabled": true,
  "name": "string",
  "smtp_domains": [
    {
      "enabled": true,
      "hostname": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliases|[[Alias](#schemaalias)]|false|none|List of aliases on the mail zone<br /><br>An alias is an e-mail address (alias) that automatically forwards received e-mails to another e-mail address (destination).|
|anti_spam|[AntiSpam](#schemaantispam)|false|none|none|
|available_accounts|[[MailZoneAccount](#schemamailzoneaccount)]|false|none|List of mail zone accounts with their mailbox size.|
|catch_all|[CatchAll](#schemacatchall)|false|none|none|
|enabled|boolean|false|none|Indicates whether the mail zone is enabled.|
|name|string|false|none|none|
|smtp_domains|[[SmtpDomain](#schemasmtpdomain)]|false|none|List of extra smtp domains on the mail zone<br /><br>SMTP domain names allow you to link multiple domain names to a single e-mail address.<br /><br>E-mails sent to an SMTP domain will be caught by the respective e-mail address on the main domain name.|

<h2 id="tocS_MailZoneAccount">MailZoneAccount</h2>
<!-- backwards compatibility -->
<a id="schemamailzoneaccount"></a>
<a id="schema_MailZoneAccount"></a>
<a id="tocSmailzoneaccount"></a>
<a id="tocsmailzoneaccount"></a>

```json
{
  "account_id": 0,
  "size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int32)|false|none|Mail zone account id, use this value to create a mailbox|
|size|integer(int32)|false|none|Size of mailbox(es) in MB|

<h2 id="tocS_Mailbox">Mailbox</h2>
<!-- backwards compatibility -->
<a id="schemamailbox"></a>
<a id="schema_Mailbox"></a>
<a id="tocSmailbox"></a>
<a id="tocsmailbox"></a>

```json
{
  "actual_size": 0,
  "max_size": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actual_size|integer(int32)|false|none|Used size in MB|
|max_size|integer(int32)|false|none|Maximum size in MB|
|name|string|false|none|none|

<h2 id="tocS_MailboxDetail">MailboxDetail</h2>
<!-- backwards compatibility -->
<a id="schemamailboxdetail"></a>
<a id="schema_MailboxDetail"></a>
<a id="tocSmailboxdetail"></a>
<a id="tocsmailboxdetail"></a>

```json
{
  "actual_size": 0,
  "auto_forward": {
    "copy_to_myself": true,
    "email_addresses": [
      "string"
    ],
    "enabled": true
  },
  "auto_reply": {
    "enabled": true,
    "message": "string",
    "subject": "string"
  },
  "login": "string",
  "max_size": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actual_size|integer(int32)|false|none|Used size in MB|
|auto_forward|[AutoForward](#schemaautoforward)|false|none|none|
|auto_reply|[AutoReply](#schemaautoreply)|false|none|none|
|login|string|false|none|Login to connect with the mailbox|
|max_size|integer(int32)|false|none|Maximum size in MB|
|name|string|false|none|none|

<h2 id="tocS_MySqlDatabase">MySqlDatabase</h2>
<!-- backwards compatibility -->
<a id="schemamysqldatabase"></a>
<a id="schema_MySqlDatabase"></a>
<a id="tocSmysqldatabase"></a>
<a id="tocsmysqldatabase"></a>

```json
{
  "account_id": 0,
  "actual_size": 0,
  "hostname": "string",
  "max_size": 0,
  "name": "string",
  "user_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int32)|false|none|The account id for the database.|
|actual_size|integer(int32)|false|none|The actual size in MB for the database.|
|hostname|string|false|none|Hostname|
|max_size|integer(int32)|false|none|The maximim size in MB for the database.|
|name|string|false|none|Database name|
|user_count|integer(int32)|false|none|The number of users.|

<h2 id="tocS_MySqlUser">MySqlUser</h2>
<!-- backwards compatibility -->
<a id="schemamysqluser"></a>
<a id="schema_MySqlUser"></a>
<a id="tocSmysqluser"></a>
<a id="tocsmysqluser"></a>

```json
{
  "enabled": true,
  "name": "string",
  "rights": "read_and_write"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|User status|
|name|string|false|none|User name|
|rights|[UserRights](#schemauserrights)|false|none|User rights|

#### Enumerated Values

|Property|Value|
|---|---|
|rights|read_and_write|
|rights|read_only|

<h2 id="tocS_NameServer">NameServer</h2>
<!-- backwards compatibility -->
<a id="schemanameserver"></a>
<a id="schema_NameServer"></a>
<a id="tocSnameserver"></a>
<a id="tocsnameserver"></a>

```json
{
  "ip": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ip|string|false|none|Nameserver ip|
|name|string|false|none|Nameserver name|

<h2 id="tocS_PhpVersion">PhpVersion</h2>
<!-- backwards compatibility -->
<a id="schemaphpversion"></a>
<a id="schema_PhpVersion"></a>
<a id="tocSphpversion"></a>
<a id="tocsphpversion"></a>

```json
{
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|Php version|

<h2 id="tocS_ProvisioningJobCompletion">ProvisioningJobCompletion</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningjobcompletion"></a>
<a id="schema_ProvisioningJobCompletion"></a>
<a id="tocSprovisioningjobcompletion"></a>
<a id="tocsprovisioningjobcompletion"></a>

```json
{
  "id": "string",
  "resource_links": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The id of the job.|
|resource_links|[string]|false|none|Links to the created resource(s).|

<h2 id="tocS_ProvisioningJobInfo">ProvisioningJobInfo</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningjobinfo"></a>
<a id="schema_ProvisioningJobInfo"></a>
<a id="tocSprovisioningjobinfo"></a>
<a id="tocsprovisioningjobinfo"></a>

```json
{
  "completion": {
    "estimate": "1970-01-01T00:00:00Z"
  },
  "id": "string",
  "status": "ongoing"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completion|[CompletionEstimation](#schemacompletionestimation)|false|none|none|
|id|string|false|none|The id of the job.|
|status|[ProvisioningJobStatus](#schemaprovisioningjobstatus)|false|none|Current job status|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ongoing|
|status|cancelled|
|status|failed|
|status|finished|

<h2 id="tocS_ProvisioningJobStatus">ProvisioningJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningjobstatus"></a>
<a id="schema_ProvisioningJobStatus"></a>
<a id="tocSprovisioningjobstatus"></a>
<a id="tocsprovisioningjobstatus"></a>

```json
"ongoing"
```

Current job status

<h2 id="tocS_RegisterDomain">RegisterDomain</h2>
<!-- backwards compatibility -->
<a id="schemaregisterdomain"></a>
<a id="schema_RegisterDomain"></a>
<a id="tocSregisterdomain"></a>
<a id="tocsregisterdomain"></a>

```json
{
  "domain_name": "string",
  "name_servers": [
    "string"
  ],
  "registrant": {
    "address": "string",
    "city": "string",
    "company_name": "string",
    "country_code": "string",
    "email": "string",
    "enterprise_number": "string",
    "extra_fields": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "fax": "string",
    "first_name": "string",
    "language_code": "string",
    "last_name": "string",
    "phone": "string",
    "postal_code": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain_name|string|false|none|The domain name to register.<br /><br>Only pass the domain part and the tld.<br /><i>For abc.com, abc is the domain part, com is the tld.</i>|
|name_servers|[string]|false|none|List of name servers. When empty, the registation will be done on default name servers.|
|registrant|[RegistrantInput](#schemaregistrantinput)|false|none|none|

<h2 id="tocS_Registrant">Registrant</h2>
<!-- backwards compatibility -->
<a id="schemaregistrant"></a>
<a id="schema_Registrant"></a>
<a id="tocSregistrant"></a>
<a id="tocsregistrant"></a>

```json
{
  "address": "string",
  "city": "string",
  "company_name": "string",
  "country_code": "string",
  "email": "string",
  "enterprise_number": "string",
  "fax": "string",
  "first_name": "string",
  "language_code": "string",
  "last_name": "string",
  "phone": "string",
  "postal_code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|Address of the registrant.|
|city|string|false|none|City of the registrant.|
|company_name|string|false|none|Company name of the registrant.<br /><br>The registrant is a company if not empty, otherwise the registrant is an individual when validating extra fields.|
|country_code|string|false|none|Country code of the registrant.<br>Syntax: 'BE', 'NL, 'FR', ...|
|email|string|false|none|Email of the registrant.|
|enterprise_number|string|false|none|Enterprise number of the registrant.<br /><br>Syntax: 'BE0123456789'|
|fax|string|false|none|Fax of the registrant.<br>Syntax: '+32.123456789'|
|first_name|string|false|none|First name of the registrant.|
|language_code|string|false|none|Language code of the registrant.<br>Syntax: 'nl', 'fr', 'en', 'de', ...|
|last_name|string|false|none|Last name of the registrant.|
|phone|string|false|none|Phone of the registrant.<br /><br>Syntax: '+32.123456789'|
|postal_code|string|false|none|Postal code of the registrant.|

<h2 id="tocS_RegistrantInput">RegistrantInput</h2>
<!-- backwards compatibility -->
<a id="schemaregistrantinput"></a>
<a id="schema_RegistrantInput"></a>
<a id="tocSregistrantinput"></a>
<a id="tocsregistrantinput"></a>

```json
{
  "address": "string",
  "city": "string",
  "company_name": "string",
  "country_code": "string",
  "email": "string",
  "enterprise_number": "string",
  "extra_fields": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "fax": "string",
  "first_name": "string",
  "language_code": "string",
  "last_name": "string",
  "phone": "string",
  "postal_code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|Address of the registrant.|
|city|string|false|none|City of the registrant.|
|company_name|string|false|none|Company name of the registrant.<br /><br>The registrant is a company if not empty, otherwise the registrant is an individual when validating extra fields.|
|country_code|string|false|none|Country code of the registrant.<br>Syntax: 'BE', 'NL, 'FR', ...|
|email|string|false|none|Email of the registrant.|
|enterprise_number|string|false|none|Enterprise number of the registrant.<br /><br>Syntax: 'BE0123456789'|
|extra_fields|[[ExtraField](#schemaextrafield)]|false|none|List of registrant extra fields for the domain name.<br><table><tr><th>Extension</th><th>Registrant specifics</th><th>Required extra field(s)</th></tr><tr><td>.dk</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.es</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.es</td><td>is an individual</td><td>PassportNumber</td></tr><tr><td>.fr</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.it</td><td>is an individual and has country code 'IT'</td><td>CodiceFiscal</td></tr><tr><td>.it</td><td>is an individual and has not country code 'IT'</td><td>PassportNumber</td></tr><tr><td>.nu</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.nu</td><td>is an individual</td><td>PassportNumber</td></tr><tr><td>.se</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.se</td><td>is an individual</td><td>PassportNumber</td></tr></table>|
|fax|string|false|none|Fax of the registrant.<br>Syntax: '+32.123456789'|
|first_name|string|false|none|First name of the registrant.|
|language_code|string|false|none|Language code of the registrant.<br>Syntax: 'nl', 'fr', 'en', 'de', ...|
|last_name|string|false|none|Last name of the registrant.|
|phone|string|false|none|Phone of the registrant.<br /><br>Syntax: '+32.123456789'|
|postal_code|string|false|none|Postal code of the registrant.|

<h2 id="tocS_ScheduledTask">ScheduledTask</h2>
<!-- backwards compatibility -->
<a id="schemascheduledtask"></a>
<a id="schema_ScheduledTask"></a>
<a id="tocSscheduledtask"></a>
<a id="tocsscheduledtask"></a>

```json
{
  "cron_expression": "string",
  "enabled": true,
  "id": "string",
  "script_location": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cron_expression|string|false|none|Cron expression of scheduled task.<br /><br>5-digit expressions (*/5 * * * *) are required in the following sequence:<br /><ul><li>Minute (0 - 59, also */5, */10, */15 and */30 as every 5 minutes, every 10 minutes, every quarter or every half-hour are allowed)</li><li>Hour (0 - 23, also * as every hour is allowed)</li><li>Day of the month (1 - 31, also * as every day is allowed)</li><li>Month (1 - 12 as January to December, also * as every month is allowed)</li><li>Day of the week (1 - 7 as Monday to Sunday, also * as every day is allowed)</li></ul>|
|enabled|boolean|false|none|Enabled.|
|id|string|false|none|The id of the scheduled task.<br /><br>This value is ignored for creation of new scheduled tasks.|
|script_location|string|false|none|Absolute path from this linux hosting to execute.|

<h2 id="tocS_Servicepack">Servicepack</h2>
<!-- backwards compatibility -->
<a id="schemaservicepack"></a>
<a id="schema_Servicepack"></a>
<a id="tocSservicepack"></a>
<a id="tocsservicepack"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

Servicepack information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|The id of the service pack|
|name|string|false|none|The name of the service pack|

<h2 id="tocS_SiteBinding">SiteBinding</h2>
<!-- backwards compatibility -->
<a id="schemasitebinding"></a>
<a id="schema_SiteBinding"></a>
<a id="tocSsitebinding"></a>
<a id="tocssitebinding"></a>

```json
{
  "cert_thumbprint": "string",
  "host_name": "string",
  "ip_address": "string",
  "port": 0,
  "protocol": "string",
  "ssl_enabled": true
}
```

A site binding identifies a web domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cert_thumbprint|string|false|none|The certificate thumbprint of the site binding.|
|host_name|string|false|none|The host name of the site binding.|
|ip_address|string|false|none|The IP address of the site binding.|
|port|integer(int32)|false|none|The port of the site binding.|
|protocol|string|false|none|The protocol of the site binding.|
|ssl_enabled|boolean|false|none|Indicates whether ssl is enabled for the binding.|

<h2 id="tocS_SmtpDomain">SmtpDomain</h2>
<!-- backwards compatibility -->
<a id="schemasmtpdomain"></a>
<a id="schema_SmtpDomain"></a>
<a id="tocSsmtpdomain"></a>
<a id="tocssmtpdomain"></a>

```json
{
  "enabled": true,
  "hostname": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Enabled|
|hostname|string|false|none|The smtp domain name|

<h2 id="tocS_SshConfiguration">SshConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasshconfiguration"></a>
<a id="schema_SshConfiguration"></a>
<a id="tocSsshconfiguration"></a>
<a id="tocssshconfiguration"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Enable or disable SSH.|

<h2 id="tocS_SshKey">SshKey</h2>
<!-- backwards compatibility -->
<a id="schemasshkey"></a>
<a id="schema_SshKey"></a>
<a id="tocSsshkey"></a>
<a id="tocssshkey"></a>

```json
{
  "fingerprint": "string",
  "public_key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fingerprint|string|false|none|The fingerprint of the public key.<br /><br>This value is ignored for creation of new SSH keys.|
|public_key|string|false|none|Public key|

<h2 id="tocS_SshKeyDetail">SshKeyDetail</h2>
<!-- backwards compatibility -->
<a id="schemasshkeydetail"></a>
<a id="schema_SshKeyDetail"></a>
<a id="tocSsshkeydetail"></a>
<a id="tocssshkeydetail"></a>

```json
{
  "fingerprint": "string",
  "linux_hostings": [
    "string"
  ],
  "public_key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fingerprint|string|false|none|The fingerprint of the public key.<br /><br>This value is ignored for creation of new SSH keys.|
|linux_hostings|[string]|false|none|List of Linux hostings where SSH key is attached|
|public_key|string|false|none|Public key|

<h2 id="tocS_SslCertificate">SslCertificate</h2>
<!-- backwards compatibility -->
<a id="schemasslcertificate"></a>
<a id="schema_SslCertificate"></a>
<a id="tocSsslcertificate"></a>
<a id="tocssslcertificate"></a>

```json
{
  "common_name": "string",
  "expires_after": "1970-01-01T00:00:00Z",
  "sha1_fingerprint": "string",
  "type": "standard",
  "validation_level": "domain_validated"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|common_name|string|false|none|The common name (e.g. domain.com) of the certificate.|
|expires_after|string(date-time)|false|none|The exact time the certificate will expire.|
|sha1_fingerprint|string|false|none|The SHA-1 fingerprint of the certificate.<br /><br>The fingerprint is a cryptographic hash which is a short unique identification of the certificate.|
|type|[SslCertificateType](#schemasslcertificatetype)|false|none|The type of the certificate:<br><ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>|
|validation_level|[SslCertificateValidationLevel](#schemasslcertificatevalidationlevel)|false|none|The validation level of the certificate:<br><ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|standard|
|type|multi_domain|
|type|wildcard|
|validation_level|domain_validated|
|validation_level|organization_validated|
|validation_level|extended_validated|

<h2 id="tocS_SslCertificateDetail">SslCertificateDetail</h2>
<!-- backwards compatibility -->
<a id="schemasslcertificatedetail"></a>
<a id="schema_SslCertificateDetail"></a>
<a id="tocSsslcertificatedetail"></a>
<a id="tocssslcertificatedetail"></a>

```json
{
  "common_name": "string",
  "expires_after": "1970-01-01T00:00:00Z",
  "sha1_fingerprint": "string",
  "subject_alt_names": [
    {
      "type": "dns",
      "value": "string"
    }
  ],
  "type": "standard",
  "validation_level": "domain_validated"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|common_name|string|false|none|The common name (e.g. domain.com) of the certificate.|
|expires_after|string(date-time)|false|none|The exact time the certificate will expire.|
|sha1_fingerprint|string|false|none|The SHA-1 fingerprint of the certificate.<br /><br>The fingerprint is a cryptographic hash which is a short unique identification of the certificate.|
|subject_alt_names|[[SslSubjectAltName](#schemasslsubjectaltname)]|false|none|The list of all supported dns names in the certificate.|
|type|[SslCertificateType](#schemasslcertificatetype)|false|none|The type of the certificate:<br><ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>|
|validation_level|[SslCertificateValidationLevel](#schemasslcertificatevalidationlevel)|false|none|The validation level of the certificate:<br><ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|standard|
|type|multi_domain|
|type|wildcard|
|validation_level|domain_validated|
|validation_level|organization_validated|
|validation_level|extended_validated|

<h2 id="tocS_SslCertificateFileFormat">SslCertificateFileFormat</h2>
<!-- backwards compatibility -->
<a id="schemasslcertificatefileformat"></a>
<a id="schema_SslCertificateFileFormat"></a>
<a id="tocSsslcertificatefileformat"></a>
<a id="tocssslcertificatefileformat"></a>

```json
"pfx"
```

The file format of the returned file stream:
<ul><li>PFX: Also known as PKCS #12, is a single, password protected certificate archive that contains the entire certificate chain plus the matching private key.</li></ul>

<h2 id="tocS_SslCertificateRequest">SslCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemasslcertificaterequest"></a>
<a id="schema_SslCertificateRequest"></a>
<a id="tocSsslcertificaterequest"></a>
<a id="tocssslcertificaterequest"></a>

```json
{
  "certificate_type": "standard",
  "common_name": "string",
  "id": 0,
  "order_code": "string",
  "validation_level": "domain_validated",
  "vendor": "sectigo"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate_type|[SslCertificateType](#schemasslcertificatetype)|false|none|The type of the certificate:<br><ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>|
|common_name|string|false|none|The common name of the certificate request.|
|id|integer(int32)|false|none|The id of the certificate request.|
|order_code|string|false|none|The order code of the certificate request.|
|validation_level|[SslCertificateValidationLevel](#schemasslcertificatevalidationlevel)|false|none|The validation level of the certificate:<br><ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>|
|vendor|[SslCertificateVendor](#schemasslcertificatevendor)|false|none|The vendor of the certificate.|

#### Enumerated Values

|Property|Value|
|---|---|
|certificate_type|standard|
|certificate_type|multi_domain|
|certificate_type|wildcard|
|validation_level|domain_validated|
|validation_level|organization_validated|
|validation_level|extended_validated|
|vendor|sectigo|

<h2 id="tocS_SslCertificateRequestDetail">SslCertificateRequestDetail</h2>
<!-- backwards compatibility -->
<a id="schemasslcertificaterequestdetail"></a>
<a id="schema_SslCertificateRequestDetail"></a>
<a id="tocSsslcertificaterequestdetail"></a>
<a id="tocssslcertificaterequestdetail"></a>

```json
{
  "certificate_type": "standard",
  "common_name": "string",
  "id": 0,
  "order_code": "string",
  "subject_alt_names": [
    {
      "type": "dns",
      "value": "string"
    }
  ],
  "validation_level": "domain_validated",
  "validations": [
    {
      "auto_validated": true,
      "cname_validation_content": "string",
      "cname_validation_name": "string",
      "dns_name": "string",
      "email_addresses": [
        "string"
      ],
      "file_validation_content": [
        "string"
      ],
      "file_validation_url_http": "string",
      "file_validation_url_https": "string",
      "type": "dns"
    }
  ],
  "vendor": "sectigo"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate_type|[SslCertificateType](#schemasslcertificatetype)|false|none|The type of the certificate:<br><ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>|
|common_name|string|false|none|The common name of the certificate request.|
|id|integer(int32)|false|none|The id of the certificate request.|
|order_code|string|false|none|The order code of the certificate request.|
|subject_alt_names|[[SslSubjectAltName](#schemasslsubjectaltname)]|false|none|The list of all supported domains in the certificate.|
|validation_level|[SslCertificateValidationLevel](#schemasslcertificatevalidationlevel)|false|none|The validation level of the certificate:<br><ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>|
|validations|[[SslCertificateRequestValidation](#schemasslcertificaterequestvalidation)]|false|none|The list of dns names to be validated with the information related to domain verification.|
|vendor|[SslCertificateVendor](#schemasslcertificatevendor)|false|none|The vendor of the certificate.|

#### Enumerated Values

|Property|Value|
|---|---|
|certificate_type|standard|
|certificate_type|multi_domain|
|certificate_type|wildcard|
|validation_level|domain_validated|
|validation_level|organization_validated|
|validation_level|extended_validated|
|vendor|sectigo|

<h2 id="tocS_SslCertificateRequestValidation">SslCertificateRequestValidation</h2>
<!-- backwards compatibility -->
<a id="schemasslcertificaterequestvalidation"></a>
<a id="schema_SslCertificateRequestValidation"></a>
<a id="tocSsslcertificaterequestvalidation"></a>
<a id="tocssslcertificaterequestvalidation"></a>

```json
{
  "auto_validated": true,
  "cname_validation_content": "string",
  "cname_validation_name": "string",
  "dns_name": "string",
  "email_addresses": [
    "string"
  ],
  "file_validation_content": [
    "string"
  ],
  "file_validation_url_http": "string",
  "file_validation_url_https": "string",
  "type": "dns"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auto_validated|boolean|false|none|Returns true if no user interaction is required and the domain validation will be verified automatic.|
|cname_validation_content|string|false|none|The value-part (Point To) of the CNAME-record that must be created as part of domain verification.|
|cname_validation_name|string|false|none|The host-part (Name) of the CNAME-record that must be created as part of domain verification.|
|dns_name|string|false|none|A domain name of the certificate.|
|email_addresses|[string]|false|none|An array of eligible domain verification email addresses.|
|file_validation_content|[string]|false|none|The content your verification file must contain, consisting of three lines of plain-text.|
|file_validation_url_http|string|false|none|The URL (http format) your verification file must be uploaded to as part of domain verification.|
|file_validation_url_https|string|false|none|The URL (https format) your verification file must be uploaded to as part of domain verification.|
|type|[SslCertificateRequestValidationType](#schemasslcertificaterequestvalidationtype)|false|none|The domain validation verification type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|dns|
|type|file|
|type|email|

<h2 id="tocS_SslCertificateRequestValidationType">SslCertificateRequestValidationType</h2>
<!-- backwards compatibility -->
<a id="schemasslcertificaterequestvalidationtype"></a>
<a id="schema_SslCertificateRequestValidationType"></a>
<a id="tocSsslcertificaterequestvalidationtype"></a>
<a id="tocssslcertificaterequestvalidationtype"></a>

```json
"dns"
```

The domain validation verification type.

<h2 id="tocS_SslCertificateType">SslCertificateType</h2>
<!-- backwards compatibility -->
<a id="schemasslcertificatetype"></a>
<a id="schema_SslCertificateType"></a>
<a id="tocSsslcertificatetype"></a>
<a id="tocssslcertificatetype"></a>

```json
"standard"
```

The type of the certificate:
<ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>

<h2 id="tocS_SslCertificateValidationLevel">SslCertificateValidationLevel</h2>
<!-- backwards compatibility -->
<a id="schemasslcertificatevalidationlevel"></a>
<a id="schema_SslCertificateValidationLevel"></a>
<a id="tocSsslcertificatevalidationlevel"></a>
<a id="tocssslcertificatevalidationlevel"></a>

```json
"domain_validated"
```

The validation level of the certificate:
<ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>

<h2 id="tocS_SslCertificateVendor">SslCertificateVendor</h2>
<!-- backwards compatibility -->
<a id="schemasslcertificatevendor"></a>
<a id="schema_SslCertificateVendor"></a>
<a id="tocSsslcertificatevendor"></a>
<a id="tocssslcertificatevendor"></a>

```json
"sectigo"
```

The vendor of the certificate.

<h2 id="tocS_SslSubjectAltName">SslSubjectAltName</h2>
<!-- backwards compatibility -->
<a id="schemasslsubjectaltname"></a>
<a id="schema_SslSubjectAltName"></a>
<a id="tocSsslsubjectaltname"></a>
<a id="tocssslsubjectaltname"></a>

```json
{
  "type": "dns",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[SslSubjectAltNameType](#schemasslsubjectaltnametype)|false|none|The type of the alt name:<br><ul><li>Dns</li><li>Ip</li></ul>|
|value|string|false|none|The value of the alt name.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|dns|
|type|ip|

<h2 id="tocS_SslSubjectAltNameType">SslSubjectAltNameType</h2>
<!-- backwards compatibility -->
<a id="schemasslsubjectaltnametype"></a>
<a id="schema_SslSubjectAltNameType"></a>
<a id="tocSsslsubjectaltnametype"></a>
<a id="tocssslsubjectaltnametype"></a>

```json
"dns"
```

The type of the alt name:
<ul><li>Dns</li><li>Ip</li></ul>

<h2 id="tocS_TransferDomain">TransferDomain</h2>
<!-- backwards compatibility -->
<a id="schematransferdomain"></a>
<a id="schema_TransferDomain"></a>
<a id="tocStransferdomain"></a>
<a id="tocstransferdomain"></a>

```json
{
  "auth_code": "string",
  "domain_name": "string",
  "name_servers": [
    "string"
  ],
  "registrant": {
    "address": "string",
    "city": "string",
    "company_name": "string",
    "country_code": "string",
    "email": "string",
    "enterprise_number": "string",
    "extra_fields": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "fax": "string",
    "first_name": "string",
    "language_code": "string",
    "last_name": "string",
    "phone": "string",
    "postal_code": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_code|string|false|none|Authorization code which allows the transfer to execute.|
|domain_name|string|false|none|The domain name to transfer.<br /><br>Only pass the domain part and the tld.<br /><i>For abc.com, abc is the domain part, com is the tld.</i>|
|name_servers|[string]|false|none|List of name servers. When empty, the transfer will be done on default name servers.|
|registrant|[RegistrantInput](#schemaregistrantinput)|false|none|none|

<h2 id="tocS_UpdateAliasRequest">UpdateAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatealiasrequest"></a>
<a id="schema_UpdateAliasRequest"></a>
<a id="tocSupdatealiasrequest"></a>
<a id="tocsupdatealiasrequest"></a>

```json
{
  "destinations": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinations|[string]|false|none|The alias destination e-mail addresses|

<h2 id="tocS_UpdateAntiSpamRequest">UpdateAntiSpamRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateantispamrequest"></a>
<a id="schema_UpdateAntiSpamRequest"></a>
<a id="tocSupdateantispamrequest"></a>
<a id="tocsupdateantispamrequest"></a>

```json
{
  "type": "none"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[AntiSpamTypes](#schemaantispamtypes)|false|none|Types of anti-spam scanning|

#### Enumerated Values

|Property|Value|
|---|---|
|type|none|
|type|advanced|
|type|basic|

<h2 id="tocS_UpdateMailboxPasswordRequest">UpdateMailboxPasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemailboxpasswordrequest"></a>
<a id="schema_UpdateMailboxPasswordRequest"></a>
<a id="tocSupdatemailboxpasswordrequest"></a>
<a id="tocsupdatemailboxpasswordrequest"></a>

```json
{
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|false|none|The password for the database user.<br /><br>Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>|

<h2 id="tocS_UpdatePhpAPcuRequest">UpdatePhpAPcuRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatephpapcurequest"></a>
<a id="schema_UpdatePhpAPcuRequest"></a>
<a id="tocSupdatephpapcurequest"></a>
<a id="tocsupdatephpapcurequest"></a>

```json
{
  "apcu_size": 0,
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apcu_size|integer(int32)|false|none|The APcu size.|
|enabled|boolean|false|none|Enables or disables APC.|

<h2 id="tocS_UpdatePhpMemoryLimitRequest">UpdatePhpMemoryLimitRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatephpmemorylimitrequest"></a>
<a id="schema_UpdatePhpMemoryLimitRequest"></a>
<a id="tocSupdatephpmemorylimitrequest"></a>
<a id="tocsupdatephpmemorylimitrequest"></a>

```json
{
  "memory_limit": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memory_limit|integer(int32)|false|none|The php memory limit|

<h2 id="tocS_UpdateSmtpDomainRequest">UpdateSmtpDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesmtpdomainrequest"></a>
<a id="schema_UpdateSmtpDomainRequest"></a>
<a id="tocSupdatesmtpdomainrequest"></a>
<a id="tocsupdatesmtpdomainrequest"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Enabled|

<h2 id="tocS_UpdateUserPasswordRequest">UpdateUserPasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserpasswordrequest"></a>
<a id="schema_UpdateUserPasswordRequest"></a>
<a id="tocSupdateuserpasswordrequest"></a>
<a id="tocsupdateuserpasswordrequest"></a>

```json
{
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|false|none|The password for the database user.<br /><br>Passwords have to adhere to following rules:<br /><ul><li>Between 8-20 characters.</li><li>Must be a mix of letters and digits.</li><li>Must contain at least one digit (0-9).</li><li>Must contain at least one letter (a-z).</li><li>Cannot contain spaces.</li><li>Cannot contain characters: * € $ & + } { ' " \ </li></ul>|

<h2 id="tocS_UpdateUserStatusRequest">UpdateUserStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserstatusrequest"></a>
<a id="schema_UpdateUserStatusRequest"></a>
<a id="tocSupdateuserstatusrequest"></a>
<a id="tocsupdateuserstatusrequest"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Enabled|

<h2 id="tocS_UserRights">UserRights</h2>
<!-- backwards compatibility -->
<a id="schemauserrights"></a>
<a id="schema_UserRights"></a>
<a id="tocSuserrights"></a>
<a id="tocsuserrights"></a>

```json
"read_and_write"
```

User rights

<h2 id="tocS_ValidationErrorMessage">ValidationErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerrormessage"></a>
<a id="schema_ValidationErrorMessage"></a>
<a id="tocSvalidationerrormessage"></a>
<a id="tocsvalidationerrormessage"></a>

```json
{
  "error_code": "string",
  "error_text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_code|string|false|none|none|
|error_text|string|false|none|none|

<h2 id="tocS_WindowsHosting">WindowsHosting</h2>
<!-- backwards compatibility -->
<a id="schemawindowshosting"></a>
<a id="schema_WindowsHosting"></a>
<a id="tocSwindowshosting"></a>
<a id="tocswindowshosting"></a>

```json
{
  "domain_name": "string",
  "servicepack_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain_name|string|false|none|Domain name for the Windows hosting account.|
|servicepack_id|integer(int32)|false|none|Id of Windows hosting service package.|

<h2 id="tocS_WindowsHostingDetail">WindowsHostingDetail</h2>
<!-- backwards compatibility -->
<a id="schemawindowshostingdetail"></a>
<a id="schema_WindowsHostingDetail"></a>
<a id="tocSwindowshostingdetail"></a>
<a id="tocswindowshostingdetail"></a>

```json
{
  "actual_size": 0,
  "application_pool": {
    "installed_net_core_runtimes": [
      "string"
    ],
    "pipeline_mode": "string",
    "runtime": "string"
  },
  "domain_name": "string",
  "ftp_username": "string",
  "ip": "string",
  "ip_type": "dedicated",
  "max_size": 0,
  "mssql_database_names": [
    "string"
  ],
  "servicepack_id": 0,
  "sites": [
    {
      "bindings": [
        {
          "cert_thumbprint": "string",
          "host_name": "string",
          "ip_address": "string",
          "port": 0,
          "protocol": "string",
          "ssl_enabled": true
        }
      ],
      "name": "string",
      "path": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actual_size|integer(int32)|false|none|Used webspace size in MB|
|application_pool|[ApplicationPool](#schemaapplicationpool)|false|none|The application pool for the hosting account.|
|domain_name|string|false|none|Domain name for the Windows hosting account.|
|ftp_username|string|false|none|Ftp username|
|ip|string|false|none|Windows hosting IP address|
|ip_type|[WindowsIpType](#schemawindowsiptype)|false|none|Type of the hosting IP address (dedicated or shared)|
|max_size|integer(int32)|false|none|Maximum webspace size in MB|
|mssql_database_names|[string]|false|none|A list of mssql databases linked to the hosting account.<br />|
|servicepack_id|integer(int32)|false|none|Id of Windows hosting service package.|
|sites|[[WindowsSite](#schemawindowssite)]|false|none|A list of websites on the hosting account.|

#### Enumerated Values

|Property|Value|
|---|---|
|ip_type|dedicated|
|ip_type|shared|

<h2 id="tocS_WindowsIpType">WindowsIpType</h2>
<!-- backwards compatibility -->
<a id="schemawindowsiptype"></a>
<a id="schema_WindowsIpType"></a>
<a id="tocSwindowsiptype"></a>
<a id="tocswindowsiptype"></a>

```json
"dedicated"
```

Type of the hosting IP address (dedicated or shared)

<h2 id="tocS_WindowsSite">WindowsSite</h2>
<!-- backwards compatibility -->
<a id="schemawindowssite"></a>
<a id="schema_WindowsSite"></a>
<a id="tocSwindowssite"></a>
<a id="tocswindowssite"></a>

```json
{
  "bindings": [
    {
      "cert_thumbprint": "string",
      "host_name": "string",
      "ip_address": "string",
      "port": 0,
      "protocol": "string",
      "ssl_enabled": true
    }
  ],
  "name": "string",
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bindings|[[SiteBinding](#schemasitebinding)]|false|none|The bindings for the website.|
|name|string|false|none|The name of the website.|
|path|string|false|none|The path of the website.|
