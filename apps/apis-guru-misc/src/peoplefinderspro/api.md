<h1 id="self-service-developer-api">Self Service Developer API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Self Service Developer API documentation and demo.

##Getting Started

You will need an API access profile user and password in order to access search endpoints.
Your access profile user and password is used for authenticating all requests to our search API. 
You MUST pass the user and password each time you perform a search request.

Base URLs:

* <a href="https://api.peoplefinderspro.com">https://api.peoplefinderspro.com</a>

<h1 id="self-service-developer-api-default">Default</h1>

## Search

> Code samples

```bash
curl https://example.com/address/autocomplete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Input": "1821 Q"
  }'
```

`POST /address/autocomplete`

###### *Click on the grey search box above, to view sample request/response objects for Address Autocomplete Search*

Perform a search:

1. Add your key and key secret to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPIAddressAutoComplete

2.  Add search criteria to your request.
    ~~~html
            {
                "Input":"1821 Q"
            }
    ~~~

3.  Submit your search

The JSON request should have parts of the address.

+ <code>Input</code> = null (optional, string) ... address.

> Body parameter

```json
{
  "Input": "1821 Q"
}
```

<h3 id="search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|galaxy-ap-name|header|string|false|e.g. Key|
|galaxy-ap-password|header|string|false|e.g. Secret|
|galaxy-search-type|header|string|false|e.g. DevAPIAddressAutoComplete|
|body|body|object|false|none|
|» Input|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "suggestions": [
    {
      "addressLine1": "house number, street, possible apt",
      "addressLine2": "City, State",
      "city": "",
      "fullAddress": "full address",
      "houseNumber": "",
      "id": "id",
      "postDirection": "",
      "preDirection": "",
      "state": "",
      "streetName": "",
      "streetType": ""
    }
  ]
}
```

<h3 id="search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search

> Code samples

```bash
curl https://example.com/contact/enrich \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Address": {
      "addressLine1": "",
      "addressLine2": ""
    },
    "Age": 0,
    "Dob": "",
    "Email": "",
    "FirstName": "",
    "LastName": "",
    "MiddleName": "",
    "PhoneNumber": ""
  }'
```

`POST /contact/enrich`

###### *Click on the grey search box above, to view sample request/response objects for Contact Enrichment Search*

Perform a search:

1. Add your key and key secret to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPIContactEnrich

2.  Add search criteria to your request. At least two are required: Name, Phone, Address, or Email.
    ~~~html
            {
                "FirstName": "John",
                "MiddleName": "T",
                "LastName": "Lawrence",
                "Dob":"",
                "Age": 0,
                "Address": {
                    "addressLine1":"123 Q Street",
                    "addressLine2":"Sacramento, CA"
                },
                "PhoneNumber":"",
                "Email":""
            }
    ~~~

3.  Submit your search

A complete list of JSON request properties follows.

+ <code>FirstName</code>= null (optional, string) ... First name.

+ <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.

+ <code>LastName</code> = null (optional, string) ... Last name.

+ <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).

+ <code>Age</code> = null (optional, int) ... Age.

+ <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
    + <code>Members</code>
        + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
        + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).

+ <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).

+ <code>Email</code> = null (optional, string) ... E-mail address.

> Body parameter

```json
{
  "Address": {
    "addressLine1": "",
    "addressLine2": ""
  },
  "Age": 0,
  "Dob": "",
  "Email": "",
  "FirstName": "",
  "LastName": "",
  "MiddleName": "",
  "PhoneNumber": ""
}
```

<h3 id="search-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|galaxy-ap-name|header|string|false|e.g. Key|
|galaxy-ap-password|header|string|false|e.g. Secret|
|galaxy-search-type|header|string|false|e.g. DevAPIContactEnrich|
|body|body|object|false|none|
|» Address|body|object|false|none|
|» » addressLine1|body|string|false|none|
|» » addressLine2|body|string|false|none|
|» Age|body|number|false|none|
|» Dob|body|string|false|none|
|» Email|body|string|false|none|
|» FirstName|body|string|false|none|
|» LastName|body|string|false|none|
|» MiddleName|body|string|false|none|
|» PhoneNumber|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "person": {
    "addresses": [
      {
        "city": "city",
        "firstReportedDate": "date",
        "lastReportedDate": "date",
        "state": "state",
        "street": "street",
        "unit": "unit",
        "zip": "zip"
      }
    ],
    "age": "age",
    "emails": [
      {
        "email": "email"
      }
    ],
    "name": {
      "firstName": "firstName",
      "lastName": "lastname",
      "middleName": "middlename"
    },
    "phones": [
      {
        "firstReportedDate": "date",
        "isConnected": true,
        "lastReportedDate": "date",
        "number": "phone",
        "type": "mobile"
      }
    ]
  }
}
```

<h3 id="search-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search

> Code samples

```bash
curl https://example.com/email/enrich \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Email": ""
  }'
```

`POST /email/enrich`

###### *Click on the grey search box above, to view sample request/response objects for Email Enrichment Search*

Perform a search:

1. Add your Access Profile username and password to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPIEmailID

2.  Add search criteria to your request.
    ~~~html
            {
                "Email":"johnsmith@somedomain"
            }
    ~~~

3.  Submit your search

The JSON request should have an email.

+ <code>Email</code> = null (optional, string) ... E-mail address.

> Body parameter

```json
{
  "Email": ""
}
```

<h3 id="search-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|galaxy-ap-name|header|string|false|e.g. Key|
|galaxy-ap-password|header|string|false|e.g. Secret|
|galaxy-search-type|header|string|false|e.g. DevAPIEmailID|
|body|body|object|false|none|
|» Email|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "person": {
    "address": {
      "city": "city",
      "state": "state",
      "street": "street",
      "unit": "unit",
      "zip": "zip"
    },
    "age": "age",
    "email": "email",
    "name": {
      "firstName": "John",
      "lastName": "Smith",
      "middleName": "A"
    }
  }
}
```

<h3 id="search-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search

<a id="opIdSearch"></a>

> Code samples

```bash
curl https://example.com/identity/verify_id \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Address": {
      "addressLine1": "",
      "addressLine2": ""
    },
    "Age": 0,
    "Dob": "",
    "Email": "",
    "FirstName": "",
    "LastName": "",
    "MiddleName": "",
    "PhoneNumber": ""
  }'
```

`POST /identity/verify_id`

###### *Click on the grey search box above, to view sample request/response objects for the Identity Verification Search*

Perform a search:

1. Add your key and key secret to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPIIDVerification

2.  Add search criteria to your request. At least two are required: SSN, Name, Phone, Address or Email.
    ~~~html
            {
                "FirstName": "John",
                "MiddleName": "T",
                "LastName": "Lawrence",
                "Dob":"",
                "Age": 0,
                "Address": {
                    "addressLine1":"123 Q Street, Unit 102",
                    "addressLine2":"Sacramento, CA"
                },
                "PhoneNumber":"",
                "Email":""
            }
    ~~~

3.  Submit your search

A complete list of JSON request properties follows.

+ <code>FirstName</code>= null (optional, string) ... First name.

+ <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.

+ <code>LastName</code> = null (optional, string) ... Last name.

+ <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).

+ <code>Age</code> = null (optional, int) ... Age.

+ <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
    + <code>Members</code>
        + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
        + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).

+ <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).

+ <code>Email</code> = null (optional, string) ... E-mail address.

> Body parameter

```json
{
  "Address": {
    "addressLine1": "",
    "addressLine2": ""
  },
  "Age": 0,
  "Dob": "",
  "Email": "",
  "FirstName": "",
  "LastName": "",
  "MiddleName": "",
  "PhoneNumber": ""
}
```

<h3 id="search-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|galaxy-ap-name|header|string|false|e.g. Key|
|galaxy-ap-password|header|string|false|e.g. Secret|
|galaxy-search-type|header|string|false|e.g. DevAPIIDVerification|
|body|body|object|false|none|
|» Address|body|object|false|none|
|» » addressLine1|body|string|false|none|
|» » addressLine2|body|string|false|none|
|» Age|body|number|false|none|
|» Dob|body|string|false|none|
|» Email|body|string|false|none|
|» FirstName|body|string|false|none|
|» LastName|body|string|false|none|
|» MiddleName|body|string|false|none|
|» PhoneNumber|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "identityVerified": true,
  "verifiedPeople": [
    {
      "addresses": [
        {
          "matchTypeCode": "Match",
          "value": "address"
        }
      ],
      "age": {
        "matchTypeCode": "NA",
        "value": "age"
      },
      "dob": {
        "day": {
          "matchTypeCode": "NA",
          "value": "day"
        },
        "month": {
          "matchTypeCode": "NA",
          "value": "month"
        },
        "year": {
          "matchTypeCode": "NA",
          "value": "year"
        }
      },
      "emails": [
        {
          "matchTypeCode": "NA",
          "value": "email"
        }
      ],
      "firstName": {
        "matchTypeCode": "Match",
        "value": "firstname"
      },
      "identityScore": 100,
      "lastName": {
        "matchTypeCode": "Match",
        "value": "lastname"
      },
      "middleName": {
        "matchTypeCode": "Match",
        "value": "middlename"
      },
      "phones": [
        {
          "matchTypeCode": "NA",
          "value": "phone"
        }
      ]
    }
  ]
}
```

<h3 id="search-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search

> Code samples

```bash
curl https://example.com/phone/enrich \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Phone": ""
  }'
```

`POST /phone/enrich`

###### *Click on the grey search box above, to view sample request/response objects for Phone Enrichment Search*

Perform a search:

1. Add your key and key secret to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPICallerID

2.  Add search criteria to your request.
    ~~~html
            {
                "Phone":"(123) 456-7890"
            }
    ~~~

3.  Submit your search

The JSON request should have a phone number.

+ <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).

> Body parameter

```json
{
  "Phone": ""
}
```

<h3 id="search-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|galaxy-ap-name|header|string|false|e.g. Key|
|galaxy-ap-password|header|string|false|e.g. Secret|
|galaxy-search-type|header|string|false|e.g. DevAPICallerID|
|body|body|object|false|none|
|» Phone|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "person": {
    "address": {
      "city": "city",
      "state": "state",
      "street": "street",
      "unit": "unit",
      "zip": "zip"
    },
    "age": "age",
    "email": "email",
    "name": {
      "firstName": "fistname",
      "lastName": "lastname",
      "middleName": "m"
    }
  }
}
```

<h3 id="search-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Address_AutoComplete">Address_AutoComplete</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_autocomplete"></a>
<a id="schema_Address_AutoComplete"></a>
<a id="tocSaddress_autocomplete"></a>
<a id="tocsaddress_autocomplete"></a>

```json
null
```

<h2 id="tocS_Caller_ID">Caller_ID</h2>
<!-- backwards compatibility -->
<a id="schemacaller_id"></a>
<a id="schema_Caller_ID"></a>
<a id="tocScaller_id"></a>
<a id="tocscaller_id"></a>

```json
null
```

<h2 id="tocS_Contact_Enrichment">Contact_Enrichment</h2>
<!-- backwards compatibility -->
<a id="schemacontact_enrichment"></a>
<a id="schema_Contact_Enrichment"></a>
<a id="tocScontact_enrichment"></a>
<a id="tocscontact_enrichment"></a>

```json
null
```

<h2 id="tocS_Email_ID">Email_ID</h2>
<!-- backwards compatibility -->
<a id="schemaemail_id"></a>
<a id="schema_Email_ID"></a>
<a id="tocSemail_id"></a>
<a id="tocsemail_id"></a>

```json
null
```

<h2 id="tocS_ID_Verification">ID_Verification</h2>
<!-- backwards compatibility -->
<a id="schemaid_verification"></a>
<a id="schema_ID_Verification"></a>
<a id="tocSid_verification"></a>
<a id="tocsid_verification"></a>

```json
null
```
