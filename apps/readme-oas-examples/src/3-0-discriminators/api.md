<h1 id="discriminator-support">Discriminator support v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#discriminatorObject

Base URLs:

* <a href="https://httpbin.org/anything">https://httpbin.org/anything</a>

<h1 id="discriminator-support-quirks">Quirks</h1>

## oneOf with a discriminator that is referencing a property up a level

<a id="opIdoneOfWithImproperlyPlacedDiscriminator"></a>

> Code samples

```bash
curl https://example.com/improper-discriminator-placement \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "connector_type": "s3Import",
    "connector_properties": {
      "gcs_bucket": "string",
      "gcs_prefix": "string"
    }
  }'
```

`PATCH /improper-discriminator-placement`

This operation has a `discriminator` that's in reference to a property a level above it. **This is an improper use of discriminators.** Though this is improper, in this case we should ignore the discriminator instead of failing to render the operation.

> Body parameter

```json
{
  "connector_type": "s3Import",
  "connector_properties": {
    "gcs_bucket": "string",
    "gcs_prefix": "string"
  }
}
```

<h3 id="oneof-with-a-discriminator-that-is-referencing-a-property-up-a-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» connector_type|body|string|false|none|
|» connector_properties|body|object|false|none|
|» » *oneOf*|body|[gcsImport](#schemagcsimport)|false|none|
|» » *oneOf*|body|[s3Import](#schemas3import)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connector_type|s3Import|
|» connector_type|gcsImport|

<h3 id="oneof-with-a-discriminator-that-is-referencing-a-property-up-a-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Discriminator without `anyOf` or `oneOf` that Redocly supports

<a id="opIdredoclyQuirk"></a>

> Code samples

```bash
curl https://example.com/redocly-flavored-discriminator \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "vehicle": {
      "vehicleType": "bicycle",
      "idealTerrain": "roads",
      "powerSource": "pedaling",
      "topSpeed": 83,
      "range": 100
    },
    "some_other_property": "default-value"
  }'
```

`PATCH /redocly-flavored-discriminator`

Redocly allows users to define [a discriminator mapping without an `anyOf` or `oneOf` that contains the discriminated objects](https://redocly.com/docs/resources/discriminator#allof-for-inheritance). This endpoint demonstrates that.

> Body parameter

```json
{
  "vehicle": {
    "vehicleType": "bicycle",
    "idealTerrain": "roads",
    "powerSource": "pedaling",
    "topSpeed": 83,
    "range": 100
  },
  "some_other_property": "default-value"
}
```

<h3 id="discriminator-without-anyof-or-oneof-that-redocly-supports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» vehicle|body|[BaseVehicle](#schemabasevehicle)|false|Vehicle (from [Redocly example](https://redocly.com/docs/resources/discriminator#when-to-use-the-openapi-discriminator))|
|» some_other_property|body|string|false|Some other property that should render alongside the discriminated property|

<h3 id="discriminator-without-anyof-or-oneof-that-redocly-supports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Handling for potentially undefined formData

> Code samples

```bash
curl https://example.com/potentially-undefined-formData \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "event_type": "application_approved",
    "event_id": "string",
    "buyer_id": "string",
    "order_id": "string"
  }'
```

`POST /potentially-undefined-formData`

This operation contains a schema that at one point produced an edgecase within the form system where `formData` was `undefined`.

> Body parameter

```json
{
  "event_type": "application_approved",
  "event_id": "string",
  "buyer_id": "string",
  "order_id": "string"
}
```

<h3 id="handling-for-potentially-undefined-formdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApplicationApprovedEvent](#schemaapplicationapprovedevent) \| [ApplicationDeniedEvent](#schemaapplicationdeniedevent)|true|none|
|» *oneOf*|body|[ApplicationApprovedEvent](#schemaapplicationapprovedevent)|false|Emitted when an application is underwritten and approved.|
|» *oneOf*|body|[ApplicationDeniedEvent](#schemaapplicationdeniedevent)|false|Emitted when an application is underwritten and denied.|

<h3 id="handling-for-potentially-undefined-formdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="discriminator-support-default">Default</h1>

## oneOf with discriminator and mapping

<a id="opIdoneOfWithTopLevelDiscriminatorAndMapping"></a>

> Code samples

```bash
curl https://example.com/discriminator-with-mapping \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "discrim": "string",
    "optionone": 0
  }'
```

`PATCH /discriminator-with-mapping`

Polymorphic `oneOf` schema with a top-level discriminator and a mapping definition.

> Body parameter

```json
{
  "discrim": "string",
  "optionone": 0
}
```

<h3 id="oneof-with-discriminator-and-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OptionOneNoDisc](#schemaoptiononenodisc) \| [OptionTwoNoDisc](#schemaoptiontwonodisc)|false|none|
|» *oneOf*|body|[OptionOneNoDisc](#schemaoptiononenodisc)|false|none|
|» *oneOf*|body|[OptionTwoNoDisc](#schemaoptiontwonodisc)|false|none|

<h3 id="oneof-with-discriminator-and-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|None|

<aside class="success">
This operation does not require authentication
</aside>

## oneOf with top-level discriminator (no mapping)

<a id="opIdoneOfWithTopLevelDiscriminatorNoMapping"></a>

> Code samples

```bash
curl https://example.com/discriminator-with-no-mapping \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "discrim": "string",
    "optionone": 0
  }'
```

`PATCH /discriminator-with-no-mapping`

Polymorphic `oneOf` schema with a top-level discriminator and **no** mapping definition.

> Body parameter

```json
{
  "discrim": "string",
  "optionone": 0
}
```

<h3 id="oneof-with-top-level-discriminator-no-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OptionOneNoDisc](#schemaoptiononenodisc) \| [OptionTwoNoDisc](#schemaoptiontwonodisc)|false|none|
|» *oneOf*|body|[OptionOneNoDisc](#schemaoptiononenodisc)|false|none|
|» *oneOf*|body|[OptionTwoNoDisc](#schemaoptiontwonodisc)|false|none|

<h3 id="oneof-with-top-level-discriminator-no-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|None|

<aside class="success">
This operation does not require authentication
</aside>

## oneOf request with a nested allOf and embedded discriminator

> Code samples

```bash
curl https://example.com/embedded-discriminator \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "pet_type": "string",
    "hunts": true,
    "age": 0
  }'
```

`PATCH /embedded-discriminator`

This operation contains a request schema of a `oneOf` that itself contains an `allOf` with a discriminator for the afformentioned `allOf`. This is considered an embedded discriminator.

> Body parameter

```json
{
  "pet_type": "string",
  "hunts": true,
  "age": 0
}
```

<h3 id="oneof-request-with-a-nested-allof-and-embedded-discriminator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Cat](#schemacat) \| [Dog](#schemadog)|false|none|
|» *oneOf*|body|[Cat](#schemacat)|false|none|
|» *oneOf*|body|[Dog](#schemadog)|false|none|

<h3 id="oneof-request-with-a-nested-allof-and-embedded-discriminator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|None|

<aside class="success">
This operation does not require authentication
</aside>

## oneOf request with a nested allOf and top level discriminator

> Code samples

```bash
curl https://example.com/oneof-allof-top-level-disc \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "pet_type": "string",
    "hunts": true,
    "age": 0
  }'
```

`PATCH /oneof-allof-top-level-disc`

This operation has a `oneOf`, with a discriminator, but its `oneOf` contents contain an `allOf` where that discriminator `propertyName` is in reference to.

> Body parameter

```json
{
  "pet_type": "string",
  "hunts": true,
  "age": 0
}
```

<h3 id="oneof-request-with-a-nested-allof-and-top-level-discriminator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CatNoDisc](#schemacatnodisc) \| [DogNoDisc](#schemadognodisc)|false|none|
|» *oneOf*|body|[CatNoDisc](#schemacatnodisc)|false|none|
|» *oneOf*|body|[DogNoDisc](#schemadognodisc)|false|none|

<h3 id="oneof-request-with-a-nested-allof-and-top-level-discriminator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|None|

<aside class="success">
This operation does not require authentication
</aside>

## oneOf request with a nested oneOf, and embedded discriminator

> Code samples

```bash
curl https://example.com/nested-one-of-object-with-nested-one-of \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "config": {
      "a": "string",
      "b": "string"
    }
  }'
```

`PATCH /nested-one-of-object-with-nested-one-of`

> Body parameter

```json
{
  "config": {
    "a": "string",
    "b": "string"
  }
}
```

<h3 id="oneof-request-with-a-nested-oneof-and-embedded-discriminator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» config|body|[object1](#schemaobject1) \| [object2](#schemaobject2) \| [Cat](#schemacat) \| [Dog](#schemadog)|false|none|
|» » *oneOf*|body|[object1](#schemaobject1)|false|none|
|» » *oneOf*|body|[object2](#schemaobject2)|false|none|
|» » *oneOf*|body|[Cat](#schemacat) \| [Dog](#schemadog)|false|none|
|» » *oneOf*|body|[Cat](#schemacat)|false|none|
|» » *oneOf*|body|[Dog](#schemadog)|false|none|

<h3 id="oneof-request-with-a-nested-oneof-and-embedded-discriminator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Handle a schema with duplicate mapping schemas

> Code samples

```bash
curl https://example.com/mapping-with-duplicate-schemas \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "discrim": "string",
    "optionone": 0,
    "discrimValue": "oneA"
  }'
```

`PATCH /mapping-with-duplicate-schemas`

Render a schema with a discriminator, where the mapping reuses a schema more than once.
> **Note:** the discriminator is `discrimValue`, not `discrim`.

> Body parameter

```json
{
  "discrim": "string",
  "optionone": 0,
  "discrimValue": "oneA"
}
```

<h3 id="handle-a-schema-with-duplicate-mapping-schemas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» discrimValue|body|string|false|none|
|» *oneOf*|body|[OptionOneNoDisc](#schemaoptiononenodisc)|false|none|
|» *oneOf*|body|[OptionTwoNoDisc](#schemaoptiontwonodisc)|false|none|
|» *oneOf*|body|[OptionThreeNoDisc](#schemaoptionthreenodisc)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» discrimValue|oneA|
|» discrimValue|oneB|
|» discrimValue|oneC|
|» discrimValue|twoA|
|» discrimValue|twoB|
|» discrimValue|three|

<h3 id="handle-a-schema-with-duplicate-mapping-schemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Discriminator with a schema name mapping

> Code samples

```bash
curl https://example.com/mapping-of-schema-names \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "discrim": "string",
    "optionone": 0
  }'
```

`PATCH /mapping-of-schema-names`

Schema names, instead of `$ref` pointers, can be used in discriminator mappings.

> Body parameter

```json
{
  "discrim": "string",
  "optionone": 0
}
```

<h3 id="discriminator-with-a-schema-name-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OptionOneNoDisc](#schemaoptiononenodisc) \| [OptionTwoNoDisc](#schemaoptiontwonodisc)|false|none|
|» *oneOf*|body|[OptionOneNoDisc](#schemaoptiononenodisc)|false|none|
|» *oneOf*|body|[OptionTwoNoDisc](#schemaoptiontwonodisc)|false|none|

<h3 id="discriminator-with-a-schema-name-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_OptionOneNoDisc">OptionOneNoDisc</h2>
<!-- backwards compatibility -->
<a id="schemaoptiononenodisc"></a>
<a id="schema_OptionOneNoDisc"></a>
<a id="tocSoptiononenodisc"></a>
<a id="tocsoptiononenodisc"></a>

```json
{
  "discrim": "string",
  "optionone": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discrim|string|true|none|none|
|optionone|number|false|none|none|

<h2 id="tocS_OptionTwoNoDisc">OptionTwoNoDisc</h2>
<!-- backwards compatibility -->
<a id="schemaoptiontwonodisc"></a>
<a id="schema_OptionTwoNoDisc"></a>
<a id="tocSoptiontwonodisc"></a>
<a id="tocsoptiontwonodisc"></a>

```json
{
  "discrim": "string",
  "optiontwo": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discrim|string|true|none|none|
|optiontwo|string|false|none|none|

<h2 id="tocS_OptionThreeNoDisc">OptionThreeNoDisc</h2>
<!-- backwards compatibility -->
<a id="schemaoptionthreenodisc"></a>
<a id="schema_OptionThreeNoDisc"></a>
<a id="tocSoptionthreenodisc"></a>
<a id="tocsoptionthreenodisc"></a>

```json
{
  "discrim": "string",
  "optionthree": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discrim|string|true|none|none|
|optionthree|string|false|none|none|

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

<h2 id="tocS_PetNoDisc">PetNoDisc</h2>
<!-- backwards compatibility -->
<a id="schemapetnodisc"></a>
<a id="schema_PetNoDisc"></a>
<a id="tocSpetnodisc"></a>
<a id="tocspetnodisc"></a>

```json
{
  "pet_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pet_type|string|true|none|none|

<h2 id="tocS_DogNoDisc">DogNoDisc</h2>
<!-- backwards compatibility -->
<a id="schemadognodisc"></a>
<a id="schema_DogNoDisc"></a>
<a id="tocSdognodisc"></a>
<a id="tocsdognodisc"></a>

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

<h2 id="tocS_CatNoDisc">CatNoDisc</h2>
<!-- backwards compatibility -->
<a id="schemacatnodisc"></a>
<a id="schema_CatNoDisc"></a>
<a id="tocScatnodisc"></a>
<a id="tocscatnodisc"></a>

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

<h2 id="tocS_gcsImport">gcsImport</h2>
<!-- backwards compatibility -->
<a id="schemagcsimport"></a>
<a id="schema_gcsImport"></a>
<a id="tocSgcsimport"></a>
<a id="tocsgcsimport"></a>

```json
{
  "gcs_bucket": "string",
  "gcs_prefix": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcs_bucket|string|false|none|none|
|gcs_prefix|string|false|none|none|

<h2 id="tocS_s3Import">s3Import</h2>
<!-- backwards compatibility -->
<a id="schemas3import"></a>
<a id="schema_s3Import"></a>
<a id="tocSs3import"></a>
<a id="tocss3import"></a>

```json
{
  "s3_bucket": "string",
  "s3_prefix": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3_bucket|string|false|none|none|
|s3_prefix|string|false|none|none|

<h2 id="tocS_ApplicationApprovedEvent">ApplicationApprovedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationapprovedevent"></a>
<a id="schema_ApplicationApprovedEvent"></a>
<a id="tocSapplicationapprovedevent"></a>
<a id="tocsapplicationapprovedevent"></a>

```json
{
  "event_type": "application_approved",
  "event_id": "string",
  "buyer_id": "string",
  "order_id": "string"
}
```

Emitted when an application is underwritten and approved.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|Type of the webhook event.|
|event_id|string|true|none|ID of the event.|
|buyer_id|string|true|none|ID of the buyer the event corresponds to.|
|order_id|string|false|none|Provided Partner Order ID.|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|application_approved|
|event_type|application_denied|

<h2 id="tocS_ApplicationDeniedEvent">ApplicationDeniedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationdeniedevent"></a>
<a id="schema_ApplicationDeniedEvent"></a>
<a id="tocSapplicationdeniedevent"></a>
<a id="tocsapplicationdeniedevent"></a>

```json
{
  "event_type": "application_approved",
  "event_id": "string",
  "buyer_id": "string",
  "order_id": "string"
}
```

Emitted when an application is underwritten and denied.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|Type of the webhook event.|
|event_id|string|true|none|ID of the event.|
|buyer_id|string|true|none|ID of the buyer the event corresponds to.|
|order_id|string|false|none|Provided Partner Order ID.|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|application_approved|
|event_type|application_denied|

<h2 id="tocS_BasePurchaseWebhookEvent">BasePurchaseWebhookEvent</h2>
<!-- backwards compatibility -->
<a id="schemabasepurchasewebhookevent"></a>
<a id="schema_BasePurchaseWebhookEvent"></a>
<a id="tocSbasepurchasewebhookevent"></a>
<a id="tocsbasepurchasewebhookevent"></a>

```json
{
  "event_type": "application_approved",
  "event_id": "string",
  "buyer_id": "string",
  "order_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|Type of the webhook event.|
|event_id|string|true|none|ID of the event.|
|buyer_id|string|true|none|ID of the buyer the event corresponds to.|
|order_id|string|false|none|Provided Partner Order ID.|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|application_approved|
|event_type|application_denied|

<h2 id="tocS_BaseBuyerWebhookEvent">BaseBuyerWebhookEvent</h2>
<!-- backwards compatibility -->
<a id="schemabasebuyerwebhookevent"></a>
<a id="schema_BaseBuyerWebhookEvent"></a>
<a id="tocSbasebuyerwebhookevent"></a>
<a id="tocsbasebuyerwebhookevent"></a>

```json
{
  "event_type": "application_approved",
  "event_id": "string",
  "buyer_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|Type of the webhook event.|
|event_id|string|true|none|ID of the event.|
|buyer_id|string|true|none|ID of the buyer the event corresponds to.|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|application_approved|
|event_type|application_denied|

<h2 id="tocS_BaseWebhookEvent">BaseWebhookEvent</h2>
<!-- backwards compatibility -->
<a id="schemabasewebhookevent"></a>
<a id="schema_BaseWebhookEvent"></a>
<a id="tocSbasewebhookevent"></a>
<a id="tocsbasewebhookevent"></a>

```json
{
  "event_type": "application_approved",
  "event_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|Type of the webhook event.|
|event_id|string|true|none|ID of the event.|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|application_approved|
|event_type|application_denied|

<h2 id="tocS_BaseVehicle">BaseVehicle</h2>
<!-- backwards compatibility -->
<a id="schemabasevehicle"></a>
<a id="schema_BaseVehicle"></a>
<a id="tocSbasevehicle"></a>
<a id="tocsbasevehicle"></a>

```json
{
  "vehicleType": "bicycle",
  "idealTerrain": "roads",
  "powerSource": "pedaling",
  "topSpeed": 83,
  "range": 100
}
```

Vehicle (from [Redocly example](https://redocly.com/docs/resources/discriminator#when-to-use-the-openapi-discriminator))

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vehicleType|string|false|none|The type of vehicle.|
|idealTerrain|string|false|none|A road, river, air... Where does this vehicle thrive?|
|powerSource|string|false|none|How is the vehicle powered.|
|topSpeed|integer|false|none|The top speed in kilometers per hour rounded to the nearest integer.|
|range|integer|false|none|The 95th percentile range of a trip in kilometers.|

<h2 id="tocS_ElectricVehicle">ElectricVehicle</h2>
<!-- backwards compatibility -->
<a id="schemaelectricvehicle"></a>
<a id="schema_ElectricVehicle"></a>
<a id="tocSelectricvehicle"></a>
<a id="tocselectricvehicle"></a>

```json
{
  "vehicleType": "bicycle",
  "idealTerrain": "roads",
  "powerSource": "pedaling",
  "topSpeed": 83,
  "range": 100,
  "chargeSpeed": 0,
  "chargeAmps": 0,
  "chargeVoltage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vehicleType|string|false|none|The type of vehicle.|
|idealTerrain|string|false|none|A road, river, air... Where does this vehicle thrive?|
|powerSource|string|false|none|How is the vehicle powered.|
|topSpeed|integer|false|none|The top speed in kilometers per hour rounded to the nearest integer.|
|range|integer|false|none|The 95th percentile range of a trip in kilometers.|
|chargeSpeed|integer|false|none|In range kilometers per hour.|
|chargeAmps|integer|false|none|Amps recommended for charging.|
|chargeVoltage|integer|false|none|Voltage recommended for charging.|

<h2 id="tocS_FueledVehicle">FueledVehicle</h2>
<!-- backwards compatibility -->
<a id="schemafueledvehicle"></a>
<a id="schema_FueledVehicle"></a>
<a id="tocSfueledvehicle"></a>
<a id="tocsfueledvehicle"></a>

```json
{
  "vehicleType": "bicycle",
  "idealTerrain": "roads",
  "powerSource": "pedaling",
  "topSpeed": 83,
  "range": 100,
  "tankCapacity": 0,
  "milesPerGallon": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vehicleType|string|false|none|The type of vehicle.|
|idealTerrain|string|false|none|A road, river, air... Where does this vehicle thrive?|
|powerSource|string|false|none|How is the vehicle powered.|
|topSpeed|integer|false|none|The top speed in kilometers per hour rounded to the nearest integer.|
|range|integer|false|none|The 95th percentile range of a trip in kilometers.|
|tankCapacity|number(double)|false|none|Capacity of the fuel tank in gallons.|
|milesPerGallon|number(double)|false|none|Miles per gallon on the highway.|

<h2 id="tocS_PedaledVehicle">PedaledVehicle</h2>
<!-- backwards compatibility -->
<a id="schemapedaledvehicle"></a>
<a id="schema_PedaledVehicle"></a>
<a id="tocSpedaledvehicle"></a>
<a id="tocspedaledvehicle"></a>

```json
{
  "vehicleType": "bicycle",
  "idealTerrain": "roads",
  "powerSource": "pedaling",
  "topSpeed": 83,
  "range": 100,
  "handlebars": "flat"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vehicleType|string|false|none|The type of vehicle.|
|idealTerrain|string|false|none|A road, river, air... Where does this vehicle thrive?|
|powerSource|string|false|none|How is the vehicle powered.|
|topSpeed|integer|false|none|The top speed in kilometers per hour rounded to the nearest integer.|
|range|integer|false|none|The 95th percentile range of a trip in kilometers.|
|handlebars|string|false|none|Type of handlebars|

#### Enumerated Values

|Property|Value|
|---|---|
|handlebars|flat|
|handlebars|riser|
|handlebars|bullhorn|
|handlebars|drop|
|handlebars|aero|
|handlebars|cruiser|
