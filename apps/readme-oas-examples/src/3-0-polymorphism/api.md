<h1 id="polymorphism-support">Polymorphism support v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#schema-object

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

<h1 id="polymorphism-support-default">Default</h1>

## oneOf request with a nested allOf

> Code samples

```bash
curl https://example.com/pets \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "pet_type": "string",
    "hunts": true,
    "age": 0
  }'
```

`PATCH /pets`

> Body parameter

```json
{
  "pet_type": "string",
  "hunts": true,
  "age": 0
}
```

<h3 id="oneof-request-with-a-nested-allof-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Cat](#schemacat) \| [Dog](#schemadog)|false|none|
|» *oneOf*|body|[Cat](#schemacat)|false|none|
|» *oneOf*|body|[Dog](#schemadog)|false|none|

<h3 id="oneof-request-with-a-nested-allof-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|None|

<aside class="success">
This operation does not require authentication
</aside>

## allOf with listed objects

> Code samples

```bash
curl https://example.com/anything/all-of-object \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "a": "string",
    "b": "string",
    "c": "string",
    "d": "string"
  }'
```

`POST /anything/all-of-object`

> Body parameter

```json
{
  "a": "string",
  "b": "string",
  "c": "string",
  "d": "string"
}
```

<h3 id="allof-with-listed-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» a|body|string|false|none|
|» b|body|string|false|none|
|» c|body|string|false|none|
|» d|body|string|false|none|

<h3 id="allof-with-listed-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## anyOf object

> Code samples

```bash
curl https://example.com/anything/any-of-object \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "a": "string",
    "b": "string"
  }'
```

`POST /anything/any-of-object`

> Body parameter

```json
{
  "a": "string",
  "b": "string"
}
```

<h3 id="anyof-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» *anyOf*|body|object|false|none|
|» a|body|string|false|none|
|» b|body|string|false|none|
|» *anyOf*|body|object|false|none|
|» c|body|string|false|none|
|» d|body|string|false|none|

<h3 id="anyof-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## anyOf primitive

> Code samples

```bash
curl https://example.com/anything/any-of-primitive \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '"string"'
```

`POST /anything/any-of-primitive`

> Body parameter

```json
"string"
```

<h3 id="anyof-primitive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string \| integer|false|none|
|» *anyOf*|body|string|false|none|
|» *anyOf*|body|integer|false|none|

<h3 id="anyof-primitive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## anyOf With Type

> Code samples

```bash
curl https://example.com/any-of-with-type \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "event": "string"
  }'
```

`POST /any-of-with-type`

AnyOf's with a top level type parameter should not render that type outside of their options

> Body parameter

```json
{
  "event": "string"
}
```

<h3 id="anyof-with-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» event|body|string|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|string|false|none|

<h3 id="anyof-with-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Provides no response body|None|

<aside class="success">
This operation does not require authentication
</aside>

## oneOf object

> Code samples

```bash
curl https://example.com/anything/one-of-object \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "a": "string",
    "b": "string"
  }'
```

`POST /anything/one-of-object`

> Body parameter

```json
{
  "a": "string",
  "b": "string"
}
```

<h3 id="oneof-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» a|body|string|false|none|
|» b|body|string|false|none|
|» *oneOf*|body|object|false|none|
|» c|body|string|false|none|
|» d|body|string|false|none|

<h3 id="oneof-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## oneOf primitive

> Code samples

```bash
curl https://example.com/anything/one-of-primitive \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '"string"'
```

`POST /anything/one-of-primitive`

> Body parameter

```json
"string"
```

<h3 id="oneof-primitive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string \| integer|false|none|
|» *oneOf*|body|string|false|none|
|» *oneOf*|body|integer|false|none|

<h3 id="oneof-primitive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## oneOf object with $ref pointers

> Code samples

```bash
curl https://example.com/anything/one-of-object-ref \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "a": "string",
    "b": "string"
  }'
```

`POST /anything/one-of-object-ref`

> Body parameter

```json
{
  "a": "string",
  "b": "string"
}
```

<h3 id="oneof-object-with-ref-pointers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[object1](#schemaobject1) \| [object2](#schemaobject2)|false|none|
|» *oneOf*|body|[object1](#schemaobject1)|false|none|
|» *oneOf*|body|[object2](#schemaobject2)|false|none|

<h3 id="oneof-object-with-ref-pointers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## oneOf object with a complex schema

> Code samples

```bash
curl https://example.com/one-of-complex \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "listing_id": 0,
    "regulatory_body": "string",
    "registration": {
      "permit_number": "string",
      "registration_ownership": "OWNER",
      "email": "string",
      "full_name": "string",
      "identification_number": "string"
    },
    "exemption": {
      "reason": "LISTING_TYPE_NOT_INCLUDED",
      "registration_ownership": "OWNER",
      "email": "string",
      "full_name": "string",
      "identification_number": "string"
    }
  }'
```

`POST /one-of-complex`

> Body parameter

```json
{
  "listing_id": 0,
  "regulatory_body": "string",
  "registration": {
    "permit_number": "string",
    "registration_ownership": "OWNER",
    "email": "string",
    "full_name": "string",
    "identification_number": "string"
  },
  "exemption": {
    "reason": "LISTING_TYPE_NOT_INCLUDED",
    "registration_ownership": "OWNER",
    "email": "string",
    "full_name": "string",
    "identification_number": "string"
  }
}
```

<h3 id="oneof-object-with-a-complex-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» *oneOf*|body|object|false|none|
|» listing_id|body|integer|true|none|
|» regulatory_body|body|string|true|none|
|» registration|body|object|false|none|
|» » permit_number|body|string|true|none|
|» » registration_ownership|body|string|true|none|
|» » email|body|string|true|none|
|» » full_name|body|string|true|none|
|» » identification_number|body|string|true|none|
|» exemption|body|object|false|none|
|» » reason|body|string|true|none|
|» » registration_ownership|body|string|true|none|
|» » email|body|string|true|none|
|» » full_name|body|string|true|none|
|» » identification_number|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» listing_id|body|integer|true|none|
|» regulatory_body|body|string|true|none|
|» registration|body|object|false|none|
|» » permit_number|body|string|true|none|
|» » expiration_date|body|string|true|none|
|» » full_name|body|string|true|none|
|» » email|body|string|true|none|
|» » listing_address|body|string|true|none|
|» » attestation_existing_registration|body|boolean|true|none|
|» exemption|body|object|false|none|
|» » exemption_reason|body|string|true|none|
|» » full_name|body|string|true|none|
|» » email|body|string|true|none|
|» » attestation_exemption_claim|body|boolean|true|none|
|» *oneOf*|body|object|false|none|
|» listing_id|body|integer|true|none|
|» regulatory_body|body|string|true|none|
|» registration|body|object|false|none|
|» » permit_number|body|string|true|none|
|» » email|body|string|true|none|
|» » full_name|body|string|true|none|
|» » listing_address|body|string|true|none|
|» » attestation|body|boolean|true|none|
|» exemption|body|object|false|none|
|» » exemption_reason|body|string|true|none|
|» » listing_address|body|string|true|none|
|» » attestation|body|boolean|true|none|
|» *oneOf*|body|object|false|none|
|» listing_id|body|integer|true|none|
|» regulatory_body|body|string|true|none|
|» registration|body|object|false|none|
|» » permit_number|body|string|true|none|
|» » registration_ownership|body|string|true|none|
|» » email|body|string|true|none|
|» » full_name|body|string|true|none|
|» » identification_number|body|string|true|none|
|» exemption|body|object|false|none|
|» » reason|body|string|true|none|
|» » registration_ownership|body|string|true|none|
|» » email|body|string|true|none|
|» » full_name|body|string|true|none|
|» » identification_number|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» listing_id|body|integer|true|none|
|» regulatory_body|body|string|true|none|
|» registration|body|object|true|none|
|» » permit_number|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» listing_id|body|integer|true|none|
|» regulatory_body|body|string|true|none|
|» affiliation|body|object|true|none|
|» » attestation_entrepreneur|body|boolean|true|none|
|» » listing_address|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» listing_id|body|integer|true|none|
|» regulatory_body|body|string|true|none|
|» categorization|body|object|true|none|
|» » listing_type|body|string|true|none|
|» » data_reporting_status|body|string|false|none|
|» » data_reporting_bbr|body|string|false|none|
|» » attestation|body|boolean|false|none|
|» » attestation_conditional|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » registration_ownership|OWNER|
|» » registration_ownership|PROPERTY_MANAGER|
|» » reason|LISTING_TYPE_NOT_INCLUDED|
|» » reason|LISTING_NOT_TOURIST_ACCOMMODATION|
|» » registration_ownership|OWNER|
|» » registration_ownership|PROPERTY_MANAGER|
|» » exemption_reason|hotel_motel|
|» » exemption_reason|hotel_motel|
|» » exemption_reason|bed_breakfast_lodging|
|» » exemption_reason|institutional_business|
|» » exemption_reason|hospitals|
|» » reason|listing_not_full_building|
|» » reason|listing_is_shared_room|
|» » reason|other_exemption_reason|
|» » registration_ownership|OWNER|
|» » registration_ownership|PROPERTY_MANAGER|
|» » listing_type|primary_residence|
|» » listing_type|houseboat|
|» » listing_type|tent|
|» » listing_type|tree_house|
|» » listing_type|hotel_or_hostel|
|» » listing_type|serviced_apartment|
|» » listing_type|trailer|
|» » listing_type|mobile_home|
|» » listing_type|summer_house|
|» » data_reporting_status|private_activity|
|» » data_reporting_status|business_activity|

<h3 id="oneof-object-with-a-complex-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## nested oneOf object with $ref pointers

> Code samples

```bash
curl https://example.com/anything/nested-one-of-object-ref \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "config": {
      "a": "string",
      "b": "string"
    }
  }'
```

`POST /anything/nested-one-of-object-ref`

> Body parameter

```json
{
  "config": {
    "a": "string",
    "b": "string"
  }
}
```

<h3 id="nested-oneof-object-with-ref-pointers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» config|body|[object1](#schemaobject1) \| [object2](#schemaobject2)|false|none|
|» » *oneOf*|body|[object1](#schemaobject1)|false|none|
|» » *oneOf*|body|[object2](#schemaobject2)|false|none|

<h3 id="nested-oneof-object-with-ref-pointers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/anything/nested-one-of-ref

> Code samples

```bash
curl https://example.com/anything/nested-one-of-ref \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "config": "string"
  }'
```

`POST /anything/nested-one-of-ref`

> Body parameter

```json
{
  "config": "string"
}
```

<h3 id="postanythingnested-one-of-ref-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» config|body|[string1](#schemastring1) \| [string2](#schemastring2)|false|none|
|» » *oneOf*|body|[string1](#schemastring1)|false|none|
|» » *oneOf*|body|[string2](#schemastring2)|false|none|

<h3 id="postanythingnested-one-of-ref-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/anything/nested-one-of-object-with-nested-one-of

> Code samples

```bash
curl https://example.com/anything/nested-one-of-object-with-nested-one-of \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "config": {
      "a": "string",
      "b": "string"
    }
  }'
```

`POST /anything/nested-one-of-object-with-nested-one-of`

> Body parameter

```json
{
  "config": {
    "a": "string",
    "b": "string"
  }
}
```

<h3 id="postanythingnested-one-of-object-with-nested-one-of-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» config|body|[object1](#schemaobject1) \| [object2](#schemaobject2) \| [Cat](#schemacat) \| [Dog](#schemadog)|false|none|
|» » *oneOf*|body|[object1](#schemaobject1)|false|none|
|» » *oneOf*|body|[object2](#schemaobject2)|false|none|
|» » *oneOf*|body|[Cat](#schemacat) \| [Dog](#schemadog)|false|none|
|» » *oneOf*|body|[Cat](#schemacat)|false|none|
|» » *oneOf*|body|[Dog](#schemadog)|false|none|

<h3 id="postanythingnested-one-of-object-with-nested-one-of-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## One Of With Type

> Code samples

```bash
curl https://example.com/one-of-with-type \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "event": null
  }'
```

`POST /one-of-with-type`

OneOf's with a top level type parameter should not render that type outside of their options

> Body parameter

```json
{
  "event": null
}
```

<h3 id="one-of-with-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» event|body|string|false|none|
|» » *oneOf*|body|object|false|oneof one|
|» » *oneOf*|body|object|false|oneof two|

<h3 id="one-of-with-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Provides no response body|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Pet">Pet</h2>
<!-- backwards compatibility -->
<a id="schemapet"></a>
<a id="schema_Pet"></a>
<a id="tocSpet"></a>
<a id="tocspet"></a>

```json
{
  "pet_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pet_type|string|true|none|none|

<h2 id="tocS_Dog">Dog</h2>
<!-- backwards compatibility -->
<a id="schemadog"></a>
<a id="schema_Dog"></a>
<a id="tocSdog"></a>
<a id="tocsdog"></a>

```json
{
  "pet_type": "string",
  "bark": true,
  "breed": "Dingo"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pet_type|string|true|none|none|
|bark|boolean|false|none|none|
|breed|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|breed|Dingo|
|breed|Husky|
|breed|Retriever|
|breed|Shepherd|

<h2 id="tocS_Cat">Cat</h2>
<!-- backwards compatibility -->
<a id="schemacat"></a>
<a id="schema_Cat"></a>
<a id="tocScat"></a>
<a id="tocscat"></a>

```json
{
  "pet_type": "string",
  "hunts": true,
  "age": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pet_type|string|true|none|none|
|hunts|boolean|false|none|none|
|age|integer|false|none|none|

<h2 id="tocS_object1">object1</h2>
<!-- backwards compatibility -->
<a id="schemaobject1"></a>
<a id="schema_object1"></a>
<a id="tocSobject1"></a>
<a id="tocsobject1"></a>

```json
{
  "a": "string",
  "b": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|a|string|false|none|none|
|b|string|false|none|none|

<h2 id="tocS_object2">object2</h2>
<!-- backwards compatibility -->
<a id="schemaobject2"></a>
<a id="schema_object2"></a>
<a id="tocSobject2"></a>
<a id="tocsobject2"></a>

```json
{
  "c": "string",
  "d": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|string|false|none|none|
|d|string|false|none|none|

<h2 id="tocS_string1">string1</h2>
<!-- backwards compatibility -->
<a id="schemastring1"></a>
<a id="schema_string1"></a>
<a id="tocSstring1"></a>
<a id="tocsstring1"></a>

```json
"string"
```

<h2 id="tocS_string2">string2</h2>
<!-- backwards compatibility -->
<a id="schemastring2"></a>
<a id="schema_string2"></a>
<a id="tocSstring2"></a>
<a id="tocsstring2"></a>

```json
"string"
```
