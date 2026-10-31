import { createRoute, z } from '@hono/zod-openapi'

const GoogleTypePostalAddressSchema = z
  .object({
    addressLines: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).',
      }),
    administrativeArea: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don\'t use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address\' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".',
      }),
    locality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines.',
      }),
    organization: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The name of the organization at the address.' }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).',
      }),
    recipients: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.',
      }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.',
      }),
    revision: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.',
      }),
    sortingCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d\'Ivoire).',
      }),
    sublocality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.',
      }),
  })
  .openapi({
    description:
      'Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478',
    required: [],
  })
  .openapi('GoogleTypePostalAddress')

const GoogleTypeDateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    required: [],
  })
  .openapi('GoogleTypeDate')

const GoogleTypeTimeZoneSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'IANA Time Zone Database time zone, e.g. "America/New_York".' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. IANA Time Zone Database version number, e.g. "2019a".' }),
  })
  .openapi({
    description:
      'Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).',
    required: [],
  })
  .openapi('GoogleTypeTimeZone')

const GoogleTypeDateTimeSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.',
      }),
    hours: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.',
      }),
    minutes: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.',
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.',
      }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.',
      }),
    seconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.',
      }),
    timeZone: GoogleTypeTimeZoneSchema.exactOptional().openapi({ description: 'Time zone.' }),
    utcOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.',
      }),
  })
  .openapi({
    description:
      "Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.",
    required: [],
  })
  .openapi('GoogleTypeDateTime')

const GoogleTypeMoneySchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The three-letter currency code defined in ISO 4217.' }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.',
      }),
    units: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.',
      }),
  })
  .openapi({ description: 'Represents an amount of money with its currency type.', required: [] })
  .openapi('GoogleTypeMoney')

const GoogleCloudDocumentaiV1beta1DocumentEntityNormalizedValueSchema = z
  .object({
    addressValue: GoogleTypePostalAddressSchema.exactOptional().openapi({
      description:
        'Postal address. See also: https://github.com/googleapis/googleapis/blob/master/google/type/postal_address.proto',
    }),
    booleanValue: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean value. Can be used for entities with binary values, or for checkboxes.',
      }),
    dateValue: GoogleTypeDateSchema.exactOptional().openapi({
      description:
        'Date value. Includes year, month, day. See also: https://github.com/googleapis/googleapis/blob/master/google/type/date.proto',
    }),
    datetimeValue: GoogleTypeDateTimeSchema.exactOptional().openapi({
      description:
        'DateTime value. Includes date, time, and timezone. See also: https://github.com/googleapis/googleapis/blob/master/google/type/datetime.proto',
    }),
    floatValue: z.float32().exactOptional().openapi({ description: 'Float value.' }),
    integerValue: z.int32().exactOptional().openapi({ description: 'Integer value.' }),
    moneyValue: GoogleTypeMoneySchema.exactOptional().openapi({
      description:
        'Money value. See also: https://github.com/googleapis/googleapis/blob/master/google/type/money.proto',
    }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional field to store a normalized string. For some entity types, one of respective `structured_value` fields may also be populated. Also not all the types of `structured_value` will be normalized. For example, some processors may not generate `float` or `integer` normalized text by default. Below are sample formats mapped to structured values. - Money/Currency type (`money_value`) is in the ISO 4217 text format. - Date type (`date_value`) is in the ISO 8601 text format. - Datetime type (`datetime_value`) is in the ISO 8601 text format.',
      }),
  })
  .openapi({ description: 'Parsed and normalized entity value.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentEntityNormalizedValue')

const GoogleCloudDocumentaiV1beta1NormalizedVertexSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Y coordinate (starts from the top of the image).' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1NormalizedVertex')

const GoogleCloudDocumentaiV1beta1VertexSchema = z
  .object({
    x: z.int32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Y coordinate (starts from the top of the image).' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1Vertex')

const GoogleCloudDocumentaiV1beta1BoundingPolySchema = z
  .object({
    normalizedVertices: z
      .array(GoogleCloudDocumentaiV1beta1NormalizedVertexSchema)
      .exactOptional()
      .openapi({ description: 'The bounding polygon normalized vertices.' }),
    vertices: z
      .array(GoogleCloudDocumentaiV1beta1VertexSchema)
      .exactOptional()
      .openapi({ description: 'The bounding polygon vertices.' }),
  })
  .openapi({ description: 'A bounding polygon for the detected image annotation.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1BoundingPoly')

const GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRefSchema = z
  .object({
    boundingPoly: GoogleCloudDocumentaiV1beta1BoundingPolySchema.exactOptional().openapi({
      description: 'Optional. Identifies the bounding polygon of a layout element on the page.',
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Confidence of detected page element, if applicable. Range `[0, 1]`.',
      }),
    layoutId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Deprecated. Use PageRef.bounding_poly instead.' }),
    layoutType: z
      .enum([
        'LAYOUT_TYPE_UNSPECIFIED',
        'BLOCK',
        'PARAGRAPH',
        'LINE',
        'TOKEN',
        'VISUAL_ELEMENT',
        'TABLE',
        'FORM_FIELD',
      ])
      .exactOptional()
      .openapi({
        description: 'Optional. The type of the layout element that is being referenced if any.',
      }),
    page: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Index into the Document.pages element, for example using `Document.pages` to locate the related page element. This field is skipped when its value is the default `0`. See https://developers.google.com/protocol-buffers/docs/proto3#json.',
      }),
  })
  .openapi({
    description: 'Represents a weak reference to a page element within a document.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRef')

const GoogleCloudDocumentaiV1beta1DocumentPageAnchorSchema = z
  .object({
    pageRefs: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageAnchorPageRefSchema)
      .exactOptional()
      .openapi({ description: 'One or more references to visual page elements' }),
  })
  .openapi({
    description:
      'Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageAnchor')

const GoogleCloudDocumentaiV1beta1DocumentProvenanceParentSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: 'The id of the parent provenance.' }),
    index: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The index of the parent item in the corresponding item list (eg. list of entities, properties within entities, etc.) in the parent revision.',
      }),
    revision: z
      .int32()
      .exactOptional()
      .openapi({ description: "The index of the index into current revision's parent_ids list." }),
  })
  .openapi({
    description:
      'The parent element the current element is based on. Used for referencing/aligning, removal and replacement operations.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentProvenanceParent')

const GoogleCloudDocumentaiV1beta1DocumentProvenanceSchema = z
  .object({
    id: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The Id of this operation. Needs to be unique within the scope of the revision.',
      }),
    parents: z
      .array(GoogleCloudDocumentaiV1beta1DocumentProvenanceParentSchema)
      .exactOptional()
      .openapi({ description: 'References to the original elements that are replaced.' }),
    revision: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The index of the revision that produced this element.' }),
    type: z
      .enum([
        'OPERATION_TYPE_UNSPECIFIED',
        'ADD',
        'REMOVE',
        'UPDATE',
        'REPLACE',
        'EVAL_REQUESTED',
        'EVAL_APPROVED',
        'EVAL_SKIPPED',
      ])
      .exactOptional()
      .openapi({ description: 'The type of provenance operation.' }),
  })
  .openapi({
    description:
      'Structure to identify provenance relationships between annotations in different revisions.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentProvenance')

const GoogleCloudDocumentaiV1beta1DocumentTextAnchorTextSegmentSchema = z
  .object({
    endIndex: z
      .string()
      .exactOptional()
      .openapi({ description: 'TextSegment half open end UTF-8 char index in the Document.text.' }),
    startIndex: z
      .string()
      .exactOptional()
      .openapi({ description: 'TextSegment start UTF-8 char index in the Document.text.' }),
  })
  .openapi({
    description:
      'A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentTextAnchorTextSegment')

const GoogleCloudDocumentaiV1beta1DocumentTextAnchorSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains the content of the text span so that users do not have to look it up in the text_segments. It is always populated for formFields.',
      }),
    textSegments: z
      .array(GoogleCloudDocumentaiV1beta1DocumentTextAnchorTextSegmentSchema)
      .exactOptional()
      .openapi({ description: 'The text segments from the Document.text.' }),
  })
  .openapi({ description: 'Text reference indexing into the Document.text.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentTextAnchor')

type GoogleCloudDocumentaiV1beta1DocumentEntityType = {
  confidence?: number
  id?: string
  mentionId?: string
  mentionText?: string
  normalizedValue?: z.infer<typeof GoogleCloudDocumentaiV1beta1DocumentEntityNormalizedValueSchema>
  pageAnchor?: z.infer<typeof GoogleCloudDocumentaiV1beta1DocumentPageAnchorSchema>
  properties?: GoogleCloudDocumentaiV1beta1DocumentEntityType[]
  provenance?: z.infer<typeof GoogleCloudDocumentaiV1beta1DocumentProvenanceSchema>
  redacted?: boolean
  textAnchor?: z.infer<typeof GoogleCloudDocumentaiV1beta1DocumentTextAnchorSchema>
  type?: string
}

const GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValueSchema = z
  .object({
    addressValue: GoogleTypePostalAddressSchema.exactOptional().openapi({
      description:
        'Postal address. See also: https://github.com/googleapis/googleapis/blob/master/google/type/postal_address.proto',
    }),
    booleanValue: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean value. Can be used for entities with binary values, or for checkboxes.',
      }),
    dateValue: GoogleTypeDateSchema.exactOptional().openapi({
      description:
        'Date value. Includes year, month, day. See also: https://github.com/googleapis/googleapis/blob/master/google/type/date.proto',
    }),
    datetimeValue: GoogleTypeDateTimeSchema.exactOptional().openapi({
      description:
        'DateTime value. Includes date, time, and timezone. See also: https://github.com/googleapis/googleapis/blob/master/google/type/datetime.proto',
    }),
    floatValue: z.float32().exactOptional().openapi({ description: 'Float value.' }),
    integerValue: z.int32().exactOptional().openapi({ description: 'Integer value.' }),
    moneyValue: GoogleTypeMoneySchema.exactOptional().openapi({
      description:
        'Money value. See also: https://github.com/googleapis/googleapis/blob/master/google/type/money.proto',
    }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional field to store a normalized string. For some entity types, one of respective `structured_value` fields may also be populated. Also not all the types of `structured_value` will be normalized. For example, some processors may not generate `float` or `integer` normalized text by default. Below are sample formats mapped to structured values. - Money/Currency type (`money_value`) is in the ISO 4217 text format. - Date type (`date_value`) is in the ISO 8601 text format. - Datetime type (`datetime_value`) is in the ISO 8601 text format.',
      }),
  })
  .openapi({ description: 'Parsed and normalized entity value.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue')

const GoogleCloudDocumentaiV1beta2NormalizedVertexSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Y coordinate (starts from the top of the image).' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2NormalizedVertex')

const GoogleCloudDocumentaiV1beta2VertexSchema = z
  .object({
    x: z.int32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Y coordinate (starts from the top of the image).' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2Vertex')

const GoogleCloudDocumentaiV1beta2BoundingPolySchema = z
  .object({
    normalizedVertices: z
      .array(GoogleCloudDocumentaiV1beta2NormalizedVertexSchema)
      .exactOptional()
      .openapi({ description: 'The bounding polygon normalized vertices.' }),
    vertices: z
      .array(GoogleCloudDocumentaiV1beta2VertexSchema)
      .exactOptional()
      .openapi({ description: 'The bounding polygon vertices.' }),
  })
  .openapi({ description: 'A bounding polygon for the detected image annotation.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2BoundingPoly')

const GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefSchema = z
  .object({
    boundingPoly: GoogleCloudDocumentaiV1beta2BoundingPolySchema.exactOptional().openapi({
      description: 'Optional. Identifies the bounding polygon of a layout element on the page.',
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Confidence of detected page element, if applicable. Range `[0, 1]`.',
      }),
    layoutId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Deprecated. Use PageRef.bounding_poly instead.' }),
    layoutType: z
      .enum([
        'LAYOUT_TYPE_UNSPECIFIED',
        'BLOCK',
        'PARAGRAPH',
        'LINE',
        'TOKEN',
        'VISUAL_ELEMENT',
        'TABLE',
        'FORM_FIELD',
      ])
      .exactOptional()
      .openapi({
        description: 'Optional. The type of the layout element that is being referenced if any.',
      }),
    page: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Index into the Document.pages element, for example using `Document.pages` to locate the related page element. This field is skipped when its value is the default `0`. See https://developers.google.com/protocol-buffers/docs/proto3#json.',
      }),
  })
  .openapi({
    description: 'Represents a weak reference to a page element within a document.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef')

const GoogleCloudDocumentaiV1beta2DocumentPageAnchorSchema = z
  .object({
    pageRefs: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefSchema)
      .exactOptional()
      .openapi({ description: 'One or more references to visual page elements' }),
  })
  .openapi({
    description:
      'Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageAnchor')

const GoogleCloudDocumentaiV1beta2DocumentProvenanceParentSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: 'The id of the parent provenance.' }),
    index: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The index of the parent item in the corresponding item list (eg. list of entities, properties within entities, etc.) in the parent revision.',
      }),
    revision: z
      .int32()
      .exactOptional()
      .openapi({ description: "The index of the index into current revision's parent_ids list." }),
  })
  .openapi({
    description:
      'The parent element the current element is based on. Used for referencing/aligning, removal and replacement operations.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentProvenanceParent')

const GoogleCloudDocumentaiV1beta2DocumentProvenanceSchema = z
  .object({
    id: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The Id of this operation. Needs to be unique within the scope of the revision.',
      }),
    parents: z
      .array(GoogleCloudDocumentaiV1beta2DocumentProvenanceParentSchema)
      .exactOptional()
      .openapi({ description: 'References to the original elements that are replaced.' }),
    revision: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The index of the revision that produced this element.' }),
    type: z
      .enum([
        'OPERATION_TYPE_UNSPECIFIED',
        'ADD',
        'REMOVE',
        'UPDATE',
        'REPLACE',
        'EVAL_REQUESTED',
        'EVAL_APPROVED',
        'EVAL_SKIPPED',
      ])
      .exactOptional()
      .openapi({ description: 'The type of provenance operation.' }),
  })
  .openapi({
    description:
      'Structure to identify provenance relationships between annotations in different revisions.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentProvenance')

const GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegmentSchema = z
  .object({
    endIndex: z
      .string()
      .exactOptional()
      .openapi({ description: 'TextSegment half open end UTF-8 char index in the Document.text.' }),
    startIndex: z
      .string()
      .exactOptional()
      .openapi({ description: 'TextSegment start UTF-8 char index in the Document.text.' }),
  })
  .openapi({
    description:
      'A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment')

const GoogleCloudDocumentaiV1beta2DocumentTextAnchorSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains the content of the text span so that users do not have to look it up in the text_segments. It is always populated for formFields.',
      }),
    textSegments: z
      .array(GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegmentSchema)
      .exactOptional()
      .openapi({ description: 'The text segments from the Document.text.' }),
  })
  .openapi({ description: 'Text reference indexing into the Document.text.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentTextAnchor')

type GoogleCloudDocumentaiV1beta2DocumentEntityType = {
  confidence?: number
  id?: string
  mentionId?: string
  mentionText?: string
  normalizedValue?: z.infer<typeof GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValueSchema>
  pageAnchor?: z.infer<typeof GoogleCloudDocumentaiV1beta2DocumentPageAnchorSchema>
  properties?: GoogleCloudDocumentaiV1beta2DocumentEntityType[]
  provenance?: z.infer<typeof GoogleCloudDocumentaiV1beta2DocumentProvenanceSchema>
  redacted?: boolean
  textAnchor?: z.infer<typeof GoogleCloudDocumentaiV1beta2DocumentTextAnchorSchema>
  type?: string
}

const GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValueSchema = z
  .object({
    addressValue: GoogleTypePostalAddressSchema.exactOptional().openapi({
      description:
        'Postal address. See also: https://github.com/googleapis/googleapis/blob/master/google/type/postal_address.proto',
    }),
    booleanValue: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean value. Can be used for entities with binary values, or for checkboxes.',
      }),
    dateValue: GoogleTypeDateSchema.exactOptional().openapi({
      description:
        'Date value. Includes year, month, day. See also: https://github.com/googleapis/googleapis/blob/master/google/type/date.proto',
    }),
    datetimeValue: GoogleTypeDateTimeSchema.exactOptional().openapi({
      description:
        'DateTime value. Includes date, time, and timezone. See also: https://github.com/googleapis/googleapis/blob/master/google/type/datetime.proto',
    }),
    floatValue: z.float32().exactOptional().openapi({ description: 'Float value.' }),
    integerValue: z.int32().exactOptional().openapi({ description: 'Integer value.' }),
    moneyValue: GoogleTypeMoneySchema.exactOptional().openapi({
      description:
        'Money value. See also: https://github.com/googleapis/googleapis/blob/master/google/type/money.proto',
    }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional field to store a normalized string. For some entity types, one of respective `structured_value` fields may also be populated. Also not all the types of `structured_value` will be normalized. For example, some processors may not generate `float` or `integer` normalized text by default. Below are sample formats mapped to structured values. - Money/Currency type (`money_value`) is in the ISO 4217 text format. - Date type (`date_value`) is in the ISO 8601 text format. - Datetime type (`datetime_value`) is in the ISO 8601 text format.',
      }),
  })
  .openapi({ description: 'Parsed and normalized entity value.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue')

const GoogleCloudDocumentaiV1beta3NormalizedVertexSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Y coordinate (starts from the top of the image).' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3NormalizedVertex')

const GoogleCloudDocumentaiV1beta3VertexSchema = z
  .object({
    x: z.int32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Y coordinate (starts from the top of the image).' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3Vertex')

const GoogleCloudDocumentaiV1beta3BoundingPolySchema = z
  .object({
    normalizedVertices: z
      .array(GoogleCloudDocumentaiV1beta3NormalizedVertexSchema)
      .exactOptional()
      .openapi({ description: 'The bounding polygon normalized vertices.' }),
    vertices: z
      .array(GoogleCloudDocumentaiV1beta3VertexSchema)
      .exactOptional()
      .openapi({ description: 'The bounding polygon vertices.' }),
  })
  .openapi({ description: 'A bounding polygon for the detected image annotation.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3BoundingPoly')

const GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefSchema = z
  .object({
    boundingPoly: GoogleCloudDocumentaiV1beta3BoundingPolySchema.exactOptional().openapi({
      description: 'Optional. Identifies the bounding polygon of a layout element on the page.',
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Confidence of detected page element, if applicable. Range `[0, 1]`.',
      }),
    layoutId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Deprecated. Use PageRef.bounding_poly instead.' }),
    layoutType: z
      .enum([
        'LAYOUT_TYPE_UNSPECIFIED',
        'BLOCK',
        'PARAGRAPH',
        'LINE',
        'TOKEN',
        'VISUAL_ELEMENT',
        'TABLE',
        'FORM_FIELD',
      ])
      .exactOptional()
      .openapi({
        description: 'Optional. The type of the layout element that is being referenced if any.',
      }),
    page: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Index into the Document.pages element, for example using `Document.pages` to locate the related page element. This field is skipped when its value is the default `0`. See https://developers.google.com/protocol-buffers/docs/proto3#json.',
      }),
  })
  .openapi({
    description: 'Represents a weak reference to a page element within a document.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef')

const GoogleCloudDocumentaiV1beta3DocumentPageAnchorSchema = z
  .object({
    pageRefs: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefSchema)
      .exactOptional()
      .openapi({ description: 'One or more references to visual page elements' }),
  })
  .openapi({
    description:
      'Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageAnchor')

const GoogleCloudDocumentaiV1beta3DocumentProvenanceParentSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: 'The id of the parent provenance.' }),
    index: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The index of the parent item in the corresponding item list (eg. list of entities, properties within entities, etc.) in the parent revision.',
      }),
    revision: z
      .int32()
      .exactOptional()
      .openapi({ description: "The index of the index into current revision's parent_ids list." }),
  })
  .openapi({
    description:
      'The parent element the current element is based on. Used for referencing/aligning, removal and replacement operations.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentProvenanceParent')

const GoogleCloudDocumentaiV1beta3DocumentProvenanceSchema = z
  .object({
    id: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The Id of this operation. Needs to be unique within the scope of the revision.',
      }),
    parents: z
      .array(GoogleCloudDocumentaiV1beta3DocumentProvenanceParentSchema)
      .exactOptional()
      .openapi({ description: 'References to the original elements that are replaced.' }),
    revision: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The index of the revision that produced this element.' }),
    type: z
      .enum([
        'OPERATION_TYPE_UNSPECIFIED',
        'ADD',
        'REMOVE',
        'UPDATE',
        'REPLACE',
        'EVAL_REQUESTED',
        'EVAL_APPROVED',
        'EVAL_SKIPPED',
      ])
      .exactOptional()
      .openapi({ description: 'The type of provenance operation.' }),
  })
  .openapi({
    description:
      'Structure to identify provenance relationships between annotations in different revisions.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentProvenance')

const GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegmentSchema = z
  .object({
    endIndex: z
      .string()
      .exactOptional()
      .openapi({ description: 'TextSegment half open end UTF-8 char index in the Document.text.' }),
    startIndex: z
      .string()
      .exactOptional()
      .openapi({ description: 'TextSegment start UTF-8 char index in the Document.text.' }),
  })
  .openapi({
    description:
      'A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment')

const GoogleCloudDocumentaiV1beta3DocumentTextAnchorSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains the content of the text span so that users do not have to look it up in the text_segments. It is always populated for formFields.',
      }),
    textSegments: z
      .array(GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegmentSchema)
      .exactOptional()
      .openapi({ description: 'The text segments from the Document.text.' }),
  })
  .openapi({ description: 'Text reference indexing into the Document.text.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentTextAnchor')

type GoogleCloudDocumentaiV1beta3DocumentEntityType = {
  confidence?: number
  id?: string
  mentionId?: string
  mentionText?: string
  normalizedValue?: z.infer<typeof GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValueSchema>
  pageAnchor?: z.infer<typeof GoogleCloudDocumentaiV1beta3DocumentPageAnchorSchema>
  properties?: GoogleCloudDocumentaiV1beta3DocumentEntityType[]
  provenance?: z.infer<typeof GoogleCloudDocumentaiV1beta3DocumentProvenanceSchema>
  redacted?: boolean
  textAnchor?: z.infer<typeof GoogleCloudDocumentaiV1beta3DocumentTextAnchorSchema>
  type?: string
}

const GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The creation time of the operation.' }),
    resource: z
      .string()
      .exactOptional()
      .openapi({ description: 'A related resource to this operation.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'RUNNING', 'CANCELLING', 'SUCCEEDED', 'FAILED', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: 'The state of the operation.' }),
    stateMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A message providing more details about the current state of processing.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last update time of the operation.' }),
  })
  .openapi({ description: 'The common metadata for long running operations.', required: [] })
  .openapi('GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata')

const GoogleRpcStatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('GoogleRpcStatus')

const GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatusSchema = z
  .object({
    gcsUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The gcs_uri of the auto-labeling document, which uniquely identifies a dataset document.',
      }),
    status: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'The status of the document auto-labeling.',
    }),
  })
  .openapi({
    description: 'The status of individual documents in the auto-labeling process.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatus')

const GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
    individualAutoLabelStatuses: z
      .array(
        GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatusSchema,
      )
      .exactOptional()
      .openapi({
        description: 'The list of individual auto-labeling statuses of the dataset documents.',
      }),
    totalDocumentCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of the auto-labeling documents.' }),
  })
  .openapi({ description: 'Metadata of the auto-labeling documents operation.', required: [] })
  .openapi('GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadata')

const GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsResponseSchema = z
  .object({})
  .openapi({ description: 'The response proto of AutoLabelDocuments method.' })
  .openapi('GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsResponse')

const GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentIdSchema = z
  .object({
    cwDocId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of the document (indexed) managed by Content Warehouse.' }),
    gcsUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The Cloud Storage uri where the actual document is stored.',
      }),
  })
  .openapi({
    description:
      'Identifies a document uniquely within the scope of a dataset in the Cloud Storage option.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentId')

const GoogleCloudDocumentaiUiv1beta3RevisionRefSchema = z
  .object({
    latestProcessorVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reads the revision generated by the processor version. The format takes the full resource name of processor version. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`',
      }),
    revisionCase: z
      .enum([
        'REVISION_CASE_UNSPECIFIED',
        'LATEST_HUMAN_REVIEW',
        'LATEST_TIMESTAMP',
        'BASE_OCR_REVISION',
      ])
      .exactOptional()
      .openapi({ description: 'Reads the revision by the predefined case.' }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reads the revision given by the id.' }),
  })
  .openapi({
    description: 'The revision reference specifies which revision on the document to read.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3RevisionRef')

const GoogleCloudDocumentaiUiv1beta3DocumentIdSchema = z
  .object({
    gcsManagedDocId:
      GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentIdSchema.exactOptional(),
    revisionRef: GoogleCloudDocumentaiUiv1beta3RevisionRefSchema.exactOptional().openapi({
      description: 'Points to a specific revision of the document if set.',
    }),
  })
  .openapi({ description: 'Document Identifier.', required: [] })
  .openapi('GoogleCloudDocumentaiUiv1beta3DocumentId')

const GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatusSchema =
  z
    .object({
      documentId: GoogleCloudDocumentaiUiv1beta3DocumentIdSchema.exactOptional().openapi({
        description: 'The document id of the document.',
      }),
      status: GoogleRpcStatusSchema.exactOptional().openapi({
        description: 'The status of deleting the document in storage.',
      }),
    })
    .openapi({
      description: 'The status of each individual document in the batch delete process.',
      required: [],
    })
    .openapi(
      'GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus',
    )

const GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
    errorDocumentCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of documents that failed to be deleted in storage.' }),
    individualBatchDeleteStatuses: z
      .array(
        GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatusSchema,
      )
      .exactOptional()
      .openapi({ description: 'The list of response details of each document.' }),
    totalDocumentCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of documents deleting from dataset.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadata')

const GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsResponseSchema = z
  .object({})
  .openapi({ description: 'Response of the delete documents operation.' })
  .openapi('GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsResponse')

const GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataIndividualBatchMoveStatusSchema = z
  .object({
    documentId: GoogleCloudDocumentaiUiv1beta3DocumentIdSchema.exactOptional().openapi({
      description: 'The document id of the document.',
    }),
    status: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'The status of moving the document.',
    }),
  })
  .openapi({
    description: 'The status of each individual document in the batch move process.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataIndividualBatchMoveStatus')

const GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
    destDatasetType: z
      .enum([
        'DATASET_SPLIT_TYPE_UNSPECIFIED',
        'DATASET_SPLIT_TRAIN',
        'DATASET_SPLIT_TEST',
        'DATASET_SPLIT_UNASSIGNED',
      ])
      .exactOptional()
      .openapi({ description: 'The destination dataset split type.' }),
    destSplitType: z
      .enum([
        'DATASET_SPLIT_TYPE_UNSPECIFIED',
        'DATASET_SPLIT_TRAIN',
        'DATASET_SPLIT_TEST',
        'DATASET_SPLIT_UNASSIGNED',
      ])
      .exactOptional()
      .openapi({ description: 'The destination dataset split type.' }),
    individualBatchMoveStatuses: z
      .array(
        GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataIndividualBatchMoveStatusSchema,
      )
      .exactOptional()
      .openapi({ description: 'The list of response details of each document.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadata')

const GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsResponseSchema = z
  .object({})
  .openapi({ description: 'Response of the batch move documents operation.' })
  .openapi('GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsResponse')

const GoogleCloudDocumentaiUiv1beta3CreateLabelerPoolOperationMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for CreateLabelerPool.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3CreateLabelerPoolOperationMetadata')

const GoogleCloudDocumentaiUiv1beta3DeleteLabelerPoolOperationMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for DeleteLabelerPool.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3DeleteLabelerPoolOperationMetadata')

const GoogleCloudDocumentaiUiv1beta3DeleteProcessorMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for delete processor method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3DeleteProcessorMetadata')

const GoogleCloudDocumentaiUiv1beta3DeleteProcessorVersionMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for delete processor version method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3DeleteProcessorVersionMetadata')

const GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for deploy processor version method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionMetadata')

const GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionResponseSchema = z
  .object({})
  .openapi({ description: 'Response message for the deploy processor version method.' })
  .openapi('GoogleCloudDocumentaiUiv1beta3DeployProcessorVersionResponse')

const GoogleCloudDocumentaiUiv1beta3DisableProcessorMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for disable processor method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3DisableProcessorMetadata')

const GoogleCloudDocumentaiUiv1beta3DisableProcessorResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response message for the disable processor method. Intentionally empty proto for adding fields in future.',
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3DisableProcessorResponse')

const GoogleCloudDocumentaiUiv1beta3EnableProcessorMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for enable processor method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3EnableProcessorMetadata')

const GoogleCloudDocumentaiUiv1beta3EnableProcessorResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response message for the enable processor method. Intentionally empty proto for adding fields in future.',
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3EnableProcessorResponse')

const GoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({ description: 'Metadata of the EvaluateProcessorVersion method.', required: [] })
  .openapi('GoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionMetadata')

const GoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionResponseSchema = z
  .object({
    evaluation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The resource name of the created evaluation.' }),
  })
  .openapi({ description: 'Metadata of the EvaluateProcessorVersion method.', required: [] })
  .openapi('GoogleCloudDocumentaiUiv1beta3EvaluateProcessorVersionResponse')

const GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataIndividualExportStatusSchema = z
  .object({
    documentId: GoogleCloudDocumentaiUiv1beta3DocumentIdSchema.exactOptional().openapi({
      description: 'The path to source docproto of the document.',
    }),
    outputGcsDestination: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The output_gcs_destination of the exported document if it was successful, otherwise empty.',
      }),
    status: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'The status of the exporting of the document.',
    }),
  })
  .openapi({
    description: 'The status of each individual document in the export process.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataIndividualExportStatus')

const GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStatSchema = z
  .object({
    splitType: z
      .enum([
        'DATASET_SPLIT_TYPE_UNSPECIFIED',
        'DATASET_SPLIT_TRAIN',
        'DATASET_SPLIT_TEST',
        'DATASET_SPLIT_UNASSIGNED',
      ])
      .exactOptional()
      .openapi({ description: 'The dataset split type.' }),
    totalDocumentCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Total number of documents with the given dataset split type to be exported.',
      }),
  })
  .openapi({
    description: 'The statistic representing a dataset split type for this export.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStat')

const GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
    individualExportStatuses: z
      .array(GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataIndividualExportStatusSchema)
      .exactOptional()
      .openapi({ description: 'The list of response details of each document.' }),
    splitExportStats: z
      .array(GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStatSchema)
      .exactOptional()
      .openapi({ description: 'The list of statistics for each dataset split type.' }),
  })
  .openapi({ description: 'Metadata of the batch export documents operation.', required: [] })
  .openapi('GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadata')

const GoogleCloudDocumentaiUiv1beta3ExportDocumentsResponseSchema = z
  .object({})
  .openapi({ description: 'The response proto of ExportDocuments method.' })
  .openapi('GoogleCloudDocumentaiUiv1beta3ExportDocumentsResponse')

const GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The common metadata about the operation.',
      }),
  })
  .openapi({
    description: 'Metadata message associated with the ExportProcessorVersion operation.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionMetadata')

const GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionResponseSchema = z
  .object({
    gcsUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Cloud Storage URI containing the output artifacts.' }),
  })
  .openapi({
    description: 'Response message associated with the ExportProcessorVersion operation.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionResponse')

const GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResultSchema = z
  .object({
    inputGcsSource: z
      .string()
      .exactOptional()
      .openapi({ description: 'The source Cloud Storage URI specified in the import config.' }),
    status: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'The validation status of import config.',
    }),
  })
  .openapi({
    description:
      'The validation status of each import config. Status is set to errors if there is no documents to import in the import_config, or OK if the operation will try to proceed at least one document.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResult')

const GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatusSchema = z
  .object({
    inputGcsSource: z
      .string()
      .exactOptional()
      .openapi({ description: 'The source Cloud Storage URI of the document.' }),
    outputGcsDestination: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The output_gcs_destination of the processed document if it was successful, otherwise empty.',
      }),
    status: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'The status of the importing of the document.',
    }),
  })
  .openapi({
    description: 'The status of each individual document in the import process.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatus')

const GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
    importConfigValidationResults: z
      .array(
        GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResultSchema,
      )
      .exactOptional()
      .openapi({ description: 'Validation statuses of the batch documents import config.' }),
    individualImportStatuses: z
      .array(GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatusSchema)
      .exactOptional()
      .openapi({ description: 'The list of response details of each document.' }),
    totalDocumentCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of the documents that are qualified for importing.' }),
  })
  .openapi({ description: 'Metadata of the import document operation.', required: [] })
  .openapi('GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadata')

const GoogleCloudDocumentaiUiv1beta3ImportDocumentsResponseSchema = z
  .object({})
  .openapi({ description: 'Response of the import document operation.' })
  .openapi('GoogleCloudDocumentaiUiv1beta3ImportDocumentsResponse')

const GoogleCloudDocumentaiUiv1beta3ImportProcessorVersionMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata for the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for the ImportProcessorVersion method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3ImportProcessorVersionMetadata')

const GoogleCloudDocumentaiUiv1beta3ImportProcessorVersionResponseSchema = z
  .object({
    processorVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The destination processor version name.' }),
  })
  .openapi({
    description: 'The response message for the ImportProcessorVersion method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3ImportProcessorVersionResponse')

const GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatusSchema = z
  .object({
    datasetInconsistencyType: z
      .enum([
        'DATASET_INCONSISTENCY_TYPE_UNSPECIFIED',
        'DATASET_INCONSISTENCY_TYPE_NO_STORAGE_MARKER',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the inconsistency of the dataset.' }),
    status: GoogleRpcStatusSchema.exactOptional().openapi({
      description:
        'The status of resyncing the dataset with regards to the detected inconsistency. Empty if `validate_only` is true in the request.',
    }),
  })
  .openapi({
    description: 'Resync status against inconsistency types on the dataset level.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatus')

const GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatusSchema = z
  .object({
    documentId: GoogleCloudDocumentaiUiv1beta3DocumentIdSchema.exactOptional().openapi({
      description: 'The document identifier.',
    }),
    documentInconsistencyType: z
      .enum([
        'DOCUMENT_INCONSISTENCY_TYPE_UNSPECIFIED',
        'DOCUMENT_INCONSISTENCY_TYPE_INVALID_DOCPROTO',
        'DOCUMENT_INCONSISTENCY_TYPE_MISMATCHED_METADATA',
        'DOCUMENT_INCONSISTENCY_TYPE_NO_PAGE_IMAGE',
      ])
      .exactOptional()
      .openapi({ description: 'The type of document inconsistency.' }),
    status: GoogleRpcStatusSchema.exactOptional().openapi({
      description:
        'The status of resyncing the document with regards to the detected inconsistency. Empty if `validate_only` is true in the request.',
    }),
  })
  .openapi({ description: 'Resync status for each document per inconsistency type.', required: [] })
  .openapi('GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatus')

const GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
    datasetResyncStatuses: z
      .array(GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of dataset resync statuses. Not checked when `dataset_documents` is specified in ResyncRequest.',
      }),
    individualDocumentResyncStatuses: z
      .array(
        GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatusSchema,
      )
      .exactOptional()
      .openapi({
        description:
          'The list of document resync statuses. The same document could have multiple `individual_document_resync_statuses` if it has multiple inconsistencies.',
      }),
  })
  .openapi({ description: 'The metadata proto of ResyncDataset method.', required: [] })
  .openapi('GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadata')

const GoogleCloudDocumentaiUiv1beta3ResyncDatasetResponseSchema = z
  .object({})
  .openapi({ description: 'The response proto of ResyncDataset method.' })
  .openapi('GoogleCloudDocumentaiUiv1beta3ResyncDatasetResponse')

const GoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for set default processor version method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionMetadata')

const GoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionResponseSchema = z
  .object({})
  .openapi({ description: 'Response message for set default processor version method.' })
  .openapi('GoogleCloudDocumentaiUiv1beta3SetDefaultProcessorVersionResponse')

const GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataDatasetValidationSchema = z
  .object({
    datasetErrorCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of dataset errors.' }),
    datasetErrors: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Error information for the dataset as a whole. A maximum of 10 dataset errors will be returned. A single dataset error is terminal for training.',
      }),
    documentErrorCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of document errors.' }),
    documentErrors: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Error information pertaining to specific documents. A maximum of 10 document errors will be returned. Any document with errors will not be used throughout training.',
      }),
  })
  .openapi({
    description:
      'The dataset validation information. This includes any and all errors with documents and the dataset.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataDatasetValidation')

const GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
    testDatasetValidation:
      GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataDatasetValidationSchema.exactOptional().openapi(
        { description: 'The test dataset validation information.' },
      ),
    trainingDatasetValidation:
      GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadataDatasetValidationSchema.exactOptional().openapi(
        { description: 'The training dataset validation information.' },
      ),
  })
  .openapi({
    description: 'The metadata that represents a processor version being created.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionMetadata')

const GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionResponseSchema = z
  .object({
    processorVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The resource name of the processor version produced by training.' }),
  })
  .openapi({ description: 'The response for the TrainProcessorVersion method.', required: [] })
  .openapi('GoogleCloudDocumentaiUiv1beta3TrainProcessorVersionResponse')

const GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for the undeploy processor version method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionMetadata')

const GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionResponseSchema = z
  .object({})
  .openapi({ description: 'Response message for the undeploy processor version method.' })
  .openapi('GoogleCloudDocumentaiUiv1beta3UndeployProcessorVersionResponse')

const GoogleCloudDocumentaiUiv1beta3UpdateDatasetOperationMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudDocumentaiUiv1beta3UpdateDatasetOperationMetadata')

const GoogleCloudDocumentaiUiv1beta3UpdateHumanReviewConfigMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for updating the human review configuration.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3UpdateHumanReviewConfigMetadata')

const GoogleCloudDocumentaiUiv1beta3UpdateLabelerPoolOperationMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiUiv1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for UpdateLabelerPool.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiUiv1beta3UpdateLabelerPoolOperationMetadata')

const GoogleCloudDocumentaiV1HumanReviewStatusSchema = z
  .object({
    humanReviewOperation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the operation triggered by the processed document. This field is populated only when the [state] is [HUMAN_REVIEW_IN_PROGRESS]. It has the same response type and metadata as the long running operation returned by [ReviewDocument] method.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'SKIPPED', 'VALIDATION_PASSED', 'IN_PROGRESS', 'ERROR'])
      .exactOptional()
      .openapi({ description: 'The state of human review on the processing request.' }),
    stateMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'A message providing more details about the human review state.' }),
  })
  .openapi({ description: 'The status of human review on a processed document.', required: [] })
  .openapi('GoogleCloudDocumentaiV1HumanReviewStatus')

const GoogleCloudDocumentaiV1BatchProcessMetadataIndividualProcessStatusSchema = z
  .object({
    humanReviewStatus: GoogleCloudDocumentaiV1HumanReviewStatusSchema.exactOptional().openapi({
      description: 'The status of human review on the processed document.',
    }),
    inputGcsSource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The source of the document, same as the [input_gcs_source] field in the request when the batch process started. The batch process is started by take snapshot of that document, since a user can move or change that document during the process.',
      }),
    outputGcsDestination: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The output_gcs_destination (in the request as `output_gcs_destination`) of the processed document if it was successful, otherwise empty.',
      }),
    status: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'The status processing the document.',
    }),
  })
  .openapi({
    description: 'The status of a each individual document in the batch process.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1BatchProcessMetadataIndividualProcessStatus')

const GoogleCloudDocumentaiV1BatchProcessMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The creation time of the operation.' }),
    individualProcessStatuses: z
      .array(GoogleCloudDocumentaiV1BatchProcessMetadataIndividualProcessStatusSchema)
      .exactOptional()
      .openapi({ description: 'The list of response details of each document.' }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'WAITING',
        'RUNNING',
        'SUCCEEDED',
        'CANCELLING',
        'CANCELLED',
        'FAILED',
      ])
      .exactOptional()
      .openapi({ description: 'The state of the current batch processing.' }),
    stateMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A message providing more details about the current state of processing. For example, the error message if the operation is failed.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last update time of the operation.' }),
  })
  .openapi({
    description: 'The long running operation metadata for batch process method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1BatchProcessMetadata')

const GoogleCloudDocumentaiV1BatchProcessResponseSchema = z
  .object({})
  .openapi({ description: 'Response message for batch process document method.' })
  .openapi('GoogleCloudDocumentaiV1BatchProcessResponse')

const GoogleCloudDocumentaiV1CommonOperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The creation time of the operation.' }),
    resource: z
      .string()
      .exactOptional()
      .openapi({ description: 'A related resource to this operation.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'RUNNING', 'CANCELLING', 'SUCCEEDED', 'FAILED', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: 'The state of the operation.' }),
    stateMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A message providing more details about the current state of processing.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last update time of the operation.' }),
  })
  .openapi({ description: 'The common metadata for long running operations.', required: [] })
  .openapi('GoogleCloudDocumentaiV1CommonOperationMetadata')

const GoogleCloudDocumentaiV1DeleteProcessorMetadataSchema = z
  .object({
    commonMetadata: GoogleCloudDocumentaiV1CommonOperationMetadataSchema.exactOptional().openapi({
      description: 'The basic metadata of the long running operation.',
    }),
  })
  .openapi({
    description: 'The long running operation metadata for delete processor method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1DeleteProcessorMetadata')

const GoogleCloudDocumentaiV1DeleteProcessorVersionMetadataSchema = z
  .object({
    commonMetadata: GoogleCloudDocumentaiV1CommonOperationMetadataSchema.exactOptional().openapi({
      description: 'The basic metadata of the long running operation.',
    }),
  })
  .openapi({
    description: 'The long running operation metadata for delete processor version method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1DeleteProcessorVersionMetadata')

const GoogleCloudDocumentaiV1DeployProcessorVersionMetadataSchema = z
  .object({
    commonMetadata: GoogleCloudDocumentaiV1CommonOperationMetadataSchema.exactOptional().openapi({
      description: 'The basic metadata of the long running operation.',
    }),
  })
  .openapi({
    description: 'The long running operation metadata for deploy processor version method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1DeployProcessorVersionMetadata')

const GoogleCloudDocumentaiV1DeployProcessorVersionResponseSchema = z
  .object({})
  .openapi({ description: 'Response message for the deploy processor version method.' })
  .openapi('GoogleCloudDocumentaiV1DeployProcessorVersionResponse')

const GoogleCloudDocumentaiV1DisableProcessorMetadataSchema = z
  .object({
    commonMetadata: GoogleCloudDocumentaiV1CommonOperationMetadataSchema.exactOptional().openapi({
      description: 'The basic metadata of the long running operation.',
    }),
  })
  .openapi({
    description: 'The long running operation metadata for disable processor method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1DisableProcessorMetadata')

const GoogleCloudDocumentaiV1DisableProcessorResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response message for the disable processor method. Intentionally empty proto for adding fields in future.',
  })
  .openapi('GoogleCloudDocumentaiV1DisableProcessorResponse')

const GoogleCloudDocumentaiV1EnableProcessorMetadataSchema = z
  .object({
    commonMetadata: GoogleCloudDocumentaiV1CommonOperationMetadataSchema.exactOptional().openapi({
      description: 'The basic metadata of the long running operation.',
    }),
  })
  .openapi({
    description: 'The long running operation metadata for enable processor method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1EnableProcessorMetadata')

const GoogleCloudDocumentaiV1EnableProcessorResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response message for the enable processor method. Intentionally empty proto for adding fields in future.',
  })
  .openapi('GoogleCloudDocumentaiV1EnableProcessorResponse')

const GoogleCloudDocumentaiV1EvaluateProcessorVersionMetadataSchema = z
  .object({
    commonMetadata: GoogleCloudDocumentaiV1CommonOperationMetadataSchema.exactOptional().openapi({
      description: 'The basic metadata of the long running operation.',
    }),
  })
  .openapi({ description: 'Metadata of the EvaluateProcessorVersion method.', required: [] })
  .openapi('GoogleCloudDocumentaiV1EvaluateProcessorVersionMetadata')

const GoogleCloudDocumentaiV1EvaluateProcessorVersionResponseSchema = z
  .object({
    evaluation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The resource name of the created evaluation.' }),
  })
  .openapi({ description: 'Metadata of the EvaluateProcessorVersion method.', required: [] })
  .openapi('GoogleCloudDocumentaiV1EvaluateProcessorVersionResponse')

const GoogleCloudDocumentaiV1ReviewDocumentOperationMetadataSchema = z
  .object({
    commonMetadata: GoogleCloudDocumentaiV1CommonOperationMetadataSchema.exactOptional().openapi({
      description: 'The basic metadata of the long running operation.',
    }),
    questionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Crowd Compute question ID.' }),
  })
  .openapi({
    description: 'The long running operation metadata for review document method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1ReviewDocumentOperationMetadata')

const GoogleCloudDocumentaiV1ReviewDocumentResponseSchema = z
  .object({
    gcsDestination: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Cloud Storage uri for the human reviewed document if the review is succeeded.',
      }),
    rejectionReason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason why the review is rejected by reviewer.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'REJECTED', 'SUCCEEDED'])
      .exactOptional()
      .openapi({ description: 'The state of the review operation.' }),
  })
  .openapi({ description: 'Response message for review document method.', required: [] })
  .openapi('GoogleCloudDocumentaiV1ReviewDocumentResponse')

const GoogleCloudDocumentaiV1SetDefaultProcessorVersionMetadataSchema = z
  .object({
    commonMetadata: GoogleCloudDocumentaiV1CommonOperationMetadataSchema.exactOptional().openapi({
      description: 'The basic metadata of the long running operation.',
    }),
  })
  .openapi({
    description: 'The long running operation metadata for set default processor version method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1SetDefaultProcessorVersionMetadata')

const GoogleCloudDocumentaiV1SetDefaultProcessorVersionResponseSchema = z
  .object({})
  .openapi({ description: 'Response message for set default processor version method.' })
  .openapi('GoogleCloudDocumentaiV1SetDefaultProcessorVersionResponse')

const GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidationSchema = z
  .object({
    datasetErrorCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of dataset errors.' }),
    datasetErrors: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Error information for the dataset as a whole. A maximum of 10 dataset errors will be returned. A single dataset error is terminal for training.',
      }),
    documentErrorCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of document errors.' }),
    documentErrors: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Error information pertaining to specific documents. A maximum of 10 document errors will be returned. Any document with errors will not be used throughout training.',
      }),
  })
  .openapi({
    description:
      'The dataset validation information. This includes any and all errors with documents and the dataset.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidation')

const GoogleCloudDocumentaiV1TrainProcessorVersionMetadataSchema = z
  .object({
    commonMetadata: GoogleCloudDocumentaiV1CommonOperationMetadataSchema.exactOptional().openapi({
      description: 'The basic metadata of the long running operation.',
    }),
    testDatasetValidation:
      GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidationSchema.exactOptional().openapi(
        { description: 'The test dataset validation information.' },
      ),
    trainingDatasetValidation:
      GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidationSchema.exactOptional().openapi(
        { description: 'The training dataset validation information.' },
      ),
  })
  .openapi({
    description: 'The metadata that represents a processor version being created.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1TrainProcessorVersionMetadata')

const GoogleCloudDocumentaiV1TrainProcessorVersionResponseSchema = z
  .object({
    processorVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The resource name of the processor version produced by training.' }),
  })
  .openapi({ description: 'The response for the TrainProcessorVersion method.', required: [] })
  .openapi('GoogleCloudDocumentaiV1TrainProcessorVersionResponse')

const GoogleCloudDocumentaiV1UndeployProcessorVersionMetadataSchema = z
  .object({
    commonMetadata: GoogleCloudDocumentaiV1CommonOperationMetadataSchema.exactOptional().openapi({
      description: 'The basic metadata of the long running operation.',
    }),
  })
  .openapi({
    description: 'The long running operation metadata for the undeploy processor version method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1UndeployProcessorVersionMetadata')

const GoogleCloudDocumentaiV1UndeployProcessorVersionResponseSchema = z
  .object({})
  .openapi({ description: 'Response message for the undeploy processor version method.' })
  .openapi('GoogleCloudDocumentaiV1UndeployProcessorVersionResponse')

const GoogleCloudDocumentaiV1beta1BarcodeSchema = z
  .object({
    format: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Format of a barcode. The supported formats are: - `CODE_128`: Code 128 type. - `CODE_39`: Code 39 type. - `CODE_93`: Code 93 type. - `CODABAR`: Codabar type. - `DATA_MATRIX`: 2D Data Matrix type. - `ITF`: ITF type. - `EAN_13`: EAN-13 type. - `EAN_8`: EAN-8 type. - `QR_CODE`: 2D QR code type. - `UPC_A`: UPC-A type. - `UPC_E`: UPC-E type. - `PDF417`: PDF417 type. - `AZTEC`: 2D Aztec code type. - `DATABAR`: GS1 DataBar code type.',
      }),
    rawValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Raw value encoded in the barcode. For example: `'MEBKM:TITLE:Google;URL:https://www.google.com;;'`.",
      }),
    valueFormat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Value format describes the format of the value that a barcode encodes. The supported formats are: - `CONTACT_INFO`: Contact information. - `EMAIL`: Email address. - `ISBN`: ISBN identifier. - `PHONE`: Phone number. - `PRODUCT`: Product. - `SMS`: SMS message. - `TEXT`: Text string. - `URL`: URL address. - `WIFI`: Wifi information. - `GEO`: Geo-localization. - `CALENDAR_EVENT`: Calendar event. - `DRIVER_LICENSE`: Driver's license.",
      }),
  })
  .openapi({ description: 'Encodes the detailed information of a barcode.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1Barcode')

const GoogleCloudDocumentaiV1beta1GcsSourceSchema = z
  .object({ uri: z.string().exactOptional() })
  .openapi({
    description: 'The Google Cloud Storage location where the input file will be read from.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1GcsSource')

const GoogleCloudDocumentaiV1beta1InputConfigSchema = z
  .object({
    gcsSource: GoogleCloudDocumentaiV1beta1GcsSourceSchema.exactOptional().openapi({
      description:
        'The Google Cloud Storage location to read the input from. This must be a single file.',
    }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Mimetype of the input. Current supported mimetypes are application/pdf, image/tiff, and image/gif. In addition, application/json type is supported for requests with ProcessDocumentRequest.automl_params field set. The JSON file needs to be in Document format.',
      }),
  })
  .openapi({ description: 'The desired input location and metadata.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1InputConfig')

const GoogleCloudDocumentaiV1beta1GcsDestinationSchema = z
  .object({ uri: z.string().exactOptional() })
  .openapi({
    description: 'The Google Cloud Storage location where the output file will be written to.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1GcsDestination')

const GoogleCloudDocumentaiV1beta1OutputConfigSchema = z
  .object({
    gcsDestination: GoogleCloudDocumentaiV1beta1GcsDestinationSchema.exactOptional().openapi({
      description: 'The Google Cloud Storage location to write the output to.',
    }),
    pagesPerShard: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The max number of pages to include into each output Document shard JSON on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 parsed pages will be produced. If `pages_per_shard` = 20, then 5 Document shard JSON files each containing 20 parsed pages will be written under the prefix OutputConfig.gcs_destination.uri and suffix pages-x-to-y.json where x and y are 1-indexed page numbers. Example GCS outputs with 157 pages and pages_per_shard = 50: pages-001-to-050.json pages-051-to-100.json pages-101-to-150.json pages-151-to-157.json',
      }),
  })
  .openapi({ description: 'The desired output location and metadata.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1OutputConfig')

const GoogleCloudDocumentaiV1beta1ProcessDocumentResponseSchema = z
  .object({
    inputConfig: GoogleCloudDocumentaiV1beta1InputConfigSchema.exactOptional().openapi({
      description:
        'Information about the input file. This is the same as the corresponding input config in the request.',
    }),
    outputConfig: GoogleCloudDocumentaiV1beta1OutputConfigSchema.exactOptional().openapi({
      description:
        'The output location of the parsed responses. The responses are written to this location as JSON-serialized `Document` objects.',
    }),
  })
  .openapi({ description: 'Response to a single document processing request.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1ProcessDocumentResponse')

const GoogleCloudDocumentaiV1beta1BatchProcessDocumentsResponseSchema = z
  .object({
    responses: z
      .array(GoogleCloudDocumentaiV1beta1ProcessDocumentResponseSchema)
      .exactOptional()
      .openapi({ description: 'Responses for each individual document.' }),
  })
  .openapi({
    description:
      'Response to an batch document processing request. This is returned in the LRO Operation after the operation is complete.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1BatchProcessDocumentsResponse')

const GoogleCloudDocumentaiV1beta1DocumentEntitySchema: z.ZodType<GoogleCloudDocumentaiV1beta1DocumentEntityType> =
  z
    .lazy(() =>
      z
        .object({
          confidence: z
            .float32()
            .exactOptional()
            .openapi({
              description: 'Optional. Confidence of detected Schema entity. Range `[0, 1]`.',
            }),
          id: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Optional. Canonical id. This will be a unique value in the entity list for this document.',
            }),
          mentionId: z
            .string()
            .exactOptional()
            .openapi({ description: 'Optional. Deprecated. Use `id` field instead.' }),
          mentionText: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Optional. Text value of the entity e.g. `1600 Amphitheatre Pkwy`.',
            }),
          normalizedValue:
            GoogleCloudDocumentaiV1beta1DocumentEntityNormalizedValueSchema.exactOptional().openapi(
              {
                description:
                  'Optional. Normalized entity value. Absent if the extracted value could not be converted or the type (e.g. address) is not supported for certain parsers. This field is also only populated for certain supported document types.',
              },
            ),
          pageAnchor: GoogleCloudDocumentaiV1beta1DocumentPageAnchorSchema.exactOptional().openapi({
            description:
              'Optional. Represents the provenance of this entity wrt. the location on the page where it was found.',
          }),
          properties: z
            .array(GoogleCloudDocumentaiV1beta1DocumentEntitySchema)
            .exactOptional()
            .openapi({
              description:
                'Optional. Entities can be nested to form a hierarchical data structure representing the content in the document.',
            }),
          provenance: GoogleCloudDocumentaiV1beta1DocumentProvenanceSchema.exactOptional().openapi({
            description: 'Optional. The history of this annotation.',
          }),
          redacted: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'Optional. Whether the entity will be redacted for de-identification purposes.',
            }),
          textAnchor: GoogleCloudDocumentaiV1beta1DocumentTextAnchorSchema.exactOptional().openapi({
            description:
              'Optional. Provenance of the entity. Text anchor indexing into the Document.text.',
          }),
          type: z
            .string()
            .exactOptional()
            .openapi({ description: 'Required. Entity type from a schema e.g. `Address`.' }),
        })
        .openapi({
          description:
            'An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.',
          required: [],
        }),
    )
    .openapi('GoogleCloudDocumentaiV1beta1DocumentEntity')

const GoogleCloudDocumentaiV1beta1DocumentEntityRelationSchema = z
  .object({
    objectId: z.string().exactOptional().openapi({ description: 'Object entity id.' }),
    relation: z.string().exactOptional().openapi({ description: 'Relationship description.' }),
    subjectId: z.string().exactOptional().openapi({ description: 'Subject entity id.' }),
  })
  .openapi({ description: 'Relationship between Entities.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentEntityRelation')

const GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguageSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of detected language. Range `[0, 1]`.' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as `en-US` or `sr-Latn`. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
  })
  .openapi({ description: 'Detected language for a structural component.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage')

const GoogleCloudDocumentaiV1beta1DocumentPageLayoutSchema = z
  .object({
    boundingPoly: GoogleCloudDocumentaiV1beta1BoundingPolySchema.exactOptional().openapi({
      description: 'The bounding polygon for the Layout.',
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range `[0, 1]`.',
      }),
    orientation: z
      .enum(['ORIENTATION_UNSPECIFIED', 'PAGE_UP', 'PAGE_RIGHT', 'PAGE_DOWN', 'PAGE_LEFT'])
      .exactOptional()
      .openapi({ description: 'Detected orientation for the Layout.' }),
    textAnchor: GoogleCloudDocumentaiV1beta1DocumentTextAnchorSchema.exactOptional().openapi({
      description: 'Text anchor indexing into the Document.text.',
    }),
  })
  .openapi({ description: 'Visual element describing a layout unit on a page.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageLayout')

const GoogleCloudDocumentaiV1beta1DocumentPageBlockSchema = z
  .object({
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta1DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for Block.',
    }),
    provenance: GoogleCloudDocumentaiV1beta1DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this annotation.',
    }),
  })
  .openapi({
    description:
      'A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageBlock')

const GoogleCloudDocumentaiV1beta1DocumentPageDetectedBarcodeSchema = z
  .object({
    barcode: GoogleCloudDocumentaiV1beta1BarcodeSchema.exactOptional().openapi({
      description: 'Detailed barcode information of the DetectedBarcode.',
    }),
    layout: GoogleCloudDocumentaiV1beta1DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for DetectedBarcode.',
    }),
  })
  .openapi({ description: 'A detected barcode.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageDetectedBarcode')

const GoogleCloudDocumentaiV1beta1DocumentPageDimensionSchema = z
  .object({
    height: z.float32().exactOptional().openapi({ description: 'Page height.' }),
    unit: z.string().exactOptional().openapi({ description: 'Dimension unit.' }),
    width: z.float32().exactOptional().openapi({ description: 'Page width.' }),
  })
  .openapi({ description: 'Dimension for the page.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageDimension')

const GoogleCloudDocumentaiV1beta1DocumentPageFormFieldSchema = z
  .object({
    correctedKeyText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Created for Labeling UI to export key text. If corrections were made to the text identified by the `field_name.text_anchor`, this field will contain the correction.',
      }),
    correctedValueText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Created for Labeling UI to export value text. If corrections were made to the text identified by the `field_value.text_anchor`, this field will contain the correction.',
      }),
    fieldName: GoogleCloudDocumentaiV1beta1DocumentPageLayoutSchema.exactOptional().openapi({
      description:
        'Layout for the FormField name. e.g. `Address`, `Email`, `Grand total`, `Phone number`, etc.',
    }),
    fieldValue: GoogleCloudDocumentaiV1beta1DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for the FormField value.',
    }),
    nameDetectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages for name together with confidence.' }),
    provenance: GoogleCloudDocumentaiV1beta1DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this annotation.',
    }),
    valueDetectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages for value together with confidence.' }),
    valueType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the value is non-textual, this field represents the type. Current valid values are: - blank (this indicates the `field_value` is normal text) - `unfilled_checkbox` - `filled_checkbox`',
      }),
  })
  .openapi({ description: 'A form field detected on the page.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageFormField')

const GoogleCloudDocumentaiV1beta1DocumentPageImageSchema = z
  .object({
    content: z.string().exactOptional().openapi({ description: 'Raw byte content of the image.' }),
    height: z.int32().exactOptional().openapi({ description: 'Height of the image in pixels.' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Encoding mime type for the image.' }),
    width: z.int32().exactOptional().openapi({ description: 'Width of the image in pixels.' }),
  })
  .openapi({ description: 'Rendered image contents for this page.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageImage')

const GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScoresDetectedDefectSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Confidence of detected defect. Range `[0, 1]` where 1 indicates strong confidence of that the defect exists.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the defect type. Supported values are: - `quality/defect_blurry` - `quality/defect_noisy` - `quality/defect_dark` - `quality/defect_faint` - `quality/defect_text_too_small` - `quality/defect_document_cutoff` - `quality/defect_text_cutoff` - `quality/defect_glare`',
      }),
  })
  .openapi({ description: 'Image Quality Defects', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScoresDetectedDefect')

const GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScoresSchema = z
  .object({
    detectedDefects: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScoresDetectedDefectSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected defects.' }),
    qualityScore: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The overall quality score. Range `[0, 1]` where 1 is perfect quality.',
      }),
  })
  .openapi({ description: 'Image Quality Scores for the page image', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScores')

const GoogleCloudDocumentaiV1beta1DocumentPageLineSchema = z
  .object({
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta1DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for Line.',
    }),
    provenance: GoogleCloudDocumentaiV1beta1DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this annotation.',
    }),
  })
  .openapi({
    description:
      'A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageLine')

const GoogleCloudDocumentaiV1beta1DocumentPageParagraphSchema = z
  .object({
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta1DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for Paragraph.',
    }),
    provenance: GoogleCloudDocumentaiV1beta1DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this annotation.',
    }),
  })
  .openapi({
    description: 'A collection of lines that a human would perceive as a paragraph.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageParagraph')

const GoogleCloudDocumentaiV1beta1DocumentPageSymbolSchema = z
  .object({
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta1DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for Symbol.',
    }),
  })
  .openapi({ description: 'A detected symbol.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageSymbol')

const GoogleCloudDocumentaiV1beta1DocumentPageTableTableCellSchema = z
  .object({
    colSpan: z
      .int32()
      .exactOptional()
      .openapi({ description: 'How many columns this cell spans.' }),
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta1DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for TableCell.',
    }),
    rowSpan: z.int32().exactOptional().openapi({ description: 'How many rows this cell spans.' }),
  })
  .openapi({ description: 'A cell representation inside the table.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageTableTableCell')

const GoogleCloudDocumentaiV1beta1DocumentPageTableTableRowSchema = z
  .object({
    cells: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageTableTableCellSchema)
      .exactOptional()
      .openapi({ description: 'Cells that make up this row.' }),
  })
  .openapi({ description: 'A row of table cells.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageTableTableRow')

const GoogleCloudDocumentaiV1beta1DocumentPageTableSchema = z
  .object({
    bodyRows: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageTableTableRowSchema)
      .exactOptional()
      .openapi({ description: 'Body rows of the table.' }),
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    headerRows: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageTableTableRowSchema)
      .exactOptional()
      .openapi({ description: 'Header rows of the table.' }),
    layout: GoogleCloudDocumentaiV1beta1DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for Table.',
    }),
    provenance: GoogleCloudDocumentaiV1beta1DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this table.',
    }),
  })
  .openapi({ description: 'A table representation similar to HTML table structure.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageTable')

const GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreakSchema = z
  .object({
    type: z
      .enum(['TYPE_UNSPECIFIED', 'SPACE', 'WIDE_SPACE', 'HYPHEN'])
      .exactOptional()
      .openapi({ description: 'Detected break type.' }),
  })
  .openapi({ description: 'Detected break at the end of a Token.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreak')

const GoogleCloudDocumentaiV1beta1DocumentPageTokenSchema = z
  .object({
    detectedBreak:
      GoogleCloudDocumentaiV1beta1DocumentPageTokenDetectedBreakSchema.exactOptional().openapi({
        description: 'Detected break at the end of a Token.',
      }),
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta1DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for Token.',
    }),
    provenance: GoogleCloudDocumentaiV1beta1DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this annotation.',
    }),
  })
  .openapi({ description: 'A detected token.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageToken')

const GoogleCloudDocumentaiV1beta1DocumentPageMatrixSchema = z
  .object({
    cols: z.int32().exactOptional().openapi({ description: 'Number of columns in the matrix.' }),
    data: z.string().exactOptional().openapi({ description: 'The matrix data.' }),
    rows: z.int32().exactOptional().openapi({ description: 'Number of rows in the matrix.' }),
    type: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'This encodes information about what data type the matrix uses. For example, 0 (CV_8U) is an unsigned 8-bit image. For the full list of OpenCV primitive data types, please refer to https://docs.opencv.org/4.3.0/d1/d1b/group__core__hal__interface.html',
      }),
  })
  .openapi({
    description:
      'Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageMatrix')

const GoogleCloudDocumentaiV1beta1DocumentPageVisualElementSchema = z
  .object({
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta1DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for VisualElement.',
    }),
    type: z.string().exactOptional().openapi({ description: 'Type of the VisualElement.' }),
  })
  .openapi({
    description: 'Detected non-text visual elements e.g. checkbox, signature etc. on the page.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPageVisualElement')

const GoogleCloudDocumentaiV1beta1DocumentPageSchema = z
  .object({
    blocks: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageBlockSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.',
      }),
    detectedBarcodes: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageDetectedBarcodeSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected barcodes.' }),
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    dimension: GoogleCloudDocumentaiV1beta1DocumentPageDimensionSchema.exactOptional().openapi({
      description: 'Physical dimension of the page.',
    }),
    formFields: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageFormFieldSchema)
      .exactOptional()
      .openapi({ description: 'A list of visually detected form fields on the page.' }),
    image: GoogleCloudDocumentaiV1beta1DocumentPageImageSchema.exactOptional().openapi({
      description:
        'Rendered image for this page. This image is preprocessed to remove any skew, rotation, and distortions such that the annotation bounding boxes can be upright and axis-aligned.',
    }),
    imageQualityScores:
      GoogleCloudDocumentaiV1beta1DocumentPageImageQualityScoresSchema.exactOptional().openapi({
        description: 'Image Quality Scores.',
      }),
    layout: GoogleCloudDocumentaiV1beta1DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for the page.',
    }),
    lines: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageLineSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line.',
      }),
    pageNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing.',
      }),
    paragraphs: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageParagraphSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph.',
      }),
    provenance: GoogleCloudDocumentaiV1beta1DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this page.',
    }),
    symbols: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageSymbolSchema)
      .exactOptional()
      .openapi({ description: 'A list of visually detected symbols on the page.' }),
    tables: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageTableSchema)
      .exactOptional()
      .openapi({ description: 'A list of visually detected tables on the page.' }),
    tokens: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageTokenSchema)
      .exactOptional()
      .openapi({ description: 'A list of visually detected tokens on the page.' }),
    transforms: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageMatrixSchema)
      .exactOptional()
      .openapi({
        description:
          'Transformation matrices that were applied to the original document image to produce Page.image.',
      }),
    visualElements: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageVisualElementSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of detected non-text visual elements e.g. checkbox, signature etc. on the page.',
      }),
  })
  .openapi({ description: 'A page in a Document.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentPage')

const GoogleCloudDocumentaiV1beta1DocumentRevisionHumanReviewSchema = z
  .object({
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human review state. e.g. `requested`, `succeeded`, `rejected`.' }),
    stateMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A message providing more details about the current state of processing. For example, the rejection reason when the state is `rejected`.',
      }),
  })
  .openapi({ description: 'Human Review information of the document.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentRevisionHumanReview')

const GoogleCloudDocumentaiV1beta1DocumentRevisionSchema = z
  .object({
    agent: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If the change was made by a person specify the name or id of that person.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time that the revision was created, internally generated by doc proto storage at the time of create.',
      }),
    humanReview:
      GoogleCloudDocumentaiV1beta1DocumentRevisionHumanReviewSchema.exactOptional().openapi({
        description: 'Human Review information of this revision.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the revision, internally generated by doc proto storage. Unique within the context of the document.',
      }),
    parent: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'The revisions that this revision is based on. This can include one or more parent (when documents are merged.) This field represents the index into the `revisions` field.',
      }),
    parentIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The revisions that this revision is based on. Must include all the ids that have anything to do with this revision - eg. there are `provenance.parent.revision` fields that index into this field.',
      }),
    processor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the annotation was made by processor identify the processor by its resource name.',
      }),
  })
  .openapi({ description: 'Contains past or forward revisions of this document.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentRevision')

const GoogleCloudDocumentaiV1beta1DocumentShardInfoSchema = z
  .object({
    shardCount: z.string().exactOptional().openapi({ description: 'Total number of shards.' }),
    shardIndex: z
      .string()
      .exactOptional()
      .openapi({ description: 'The 0-based index of this shard.' }),
    textOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The index of the first character in Document.text in the overall document global text.',
      }),
  })
  .openapi({
    description:
      'For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentShardInfo')

const GoogleCloudDocumentaiV1beta1DocumentTextChangeSchema = z
  .object({
    changedText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text that replaces the text identified in the `text_anchor`.' }),
    provenance: z
      .array(GoogleCloudDocumentaiV1beta1DocumentProvenanceSchema)
      .exactOptional()
      .openapi({ description: 'The history of this annotation.' }),
    textAnchor: GoogleCloudDocumentaiV1beta1DocumentTextAnchorSchema.exactOptional().openapi({
      description:
        'Provenance of the correction. Text anchor indexing into the Document.text. There can only be a single `TextAnchor.text_segments` element. If the start and end index of the text segment are the same, the text change is inserted before that index.',
    }),
  })
  .openapi({
    description: 'This message is used for text changes aka. OCR corrections.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentTextChange')

const GoogleTypeColorSchema = z
  .object({
    alpha: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).',
      }),
    blue: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The amount of blue in the color as a value in the interval [0, 1].',
      }),
    green: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The amount of green in the color as a value in the interval [0, 1].',
      }),
    red: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The amount of red in the color as a value in the interval [0, 1].',
      }),
  })
  .openapi({
    description:
      "Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most 1e-5. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ...",
    required: [],
  })
  .openapi('GoogleTypeColor')

const GoogleCloudDocumentaiV1beta1DocumentStyleFontSizeSchema = z
  .object({
    size: z.float32().exactOptional().openapi({ description: 'Font size for the text.' }),
    unit: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unit for the font size. Follows CSS naming (in, px, pt, etc.).' }),
  })
  .openapi({ description: 'Font size with unit.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentStyleFontSize')

const GoogleCloudDocumentaiV1beta1DocumentStyleSchema = z
  .object({
    backgroundColor: GoogleTypeColorSchema.exactOptional().openapi({
      description: 'Text background color.',
    }),
    color: GoogleTypeColorSchema.exactOptional().openapi({ description: 'Text color.' }),
    fontFamily: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Font family such as `Arial`, `Times New Roman`. https://www.w3schools.com/cssref/pr_font_font-family.asp',
      }),
    fontSize: GoogleCloudDocumentaiV1beta1DocumentStyleFontSizeSchema.exactOptional().openapi({
      description: 'Font size.',
    }),
    fontWeight: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Font weight. Possible values are normal, bold, bolder, and lighter. https://www.w3schools.com/cssref/pr_font_weight.asp',
      }),
    textAnchor: GoogleCloudDocumentaiV1beta1DocumentTextAnchorSchema.exactOptional().openapi({
      description: 'Text anchor indexing into the Document.text.',
    }),
    textDecoration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text decoration. Follows CSS standard. https://www.w3schools.com/cssref/pr_text_text-decoration.asp',
      }),
    textStyle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text style. Possible values are normal, italic, and oblique. https://www.w3schools.com/cssref/pr_font_font-style.asp',
      }),
  })
  .openapi({
    description:
      'Annotation for common text style attributes. This adheres to CSS conventions as much as possible.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1DocumentStyle')

const GoogleCloudDocumentaiV1beta1DocumentSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Inline document content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.',
      }),
    entities: z
      .array(GoogleCloudDocumentaiV1beta1DocumentEntitySchema)
      .exactOptional()
      .openapi({
        description:
          'A list of entities detected on Document.text. For document shards, entities in this list may cross shard boundaries.',
      }),
    entityRelations: z
      .array(GoogleCloudDocumentaiV1beta1DocumentEntityRelationSchema)
      .exactOptional()
      .openapi({ description: 'Placeholder. Relationship among Document.entities.' }),
    error: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'Any error that occurred while processing this document.',
    }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An IANA published MIME type (also referred to as media type). For more information, see https://www.iana.org/assignments/media-types/media-types.xhtml.',
      }),
    pages: z
      .array(GoogleCloudDocumentaiV1beta1DocumentPageSchema)
      .exactOptional()
      .openapi({ description: 'Visual page layout for the Document.' }),
    revisions: z
      .array(GoogleCloudDocumentaiV1beta1DocumentRevisionSchema)
      .exactOptional()
      .openapi({ description: 'Placeholder. Revision history of this document.' }),
    shardInfo: GoogleCloudDocumentaiV1beta1DocumentShardInfoSchema.exactOptional().openapi({
      description:
        'Information about the sharding if this document is sharded part of a larger document. If the document is not sharded, this message is not specified.',
    }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. UTF-8 encoded text in reading order from the document.' }),
    textChanges: z
      .array(GoogleCloudDocumentaiV1beta1DocumentTextChangeSchema)
      .exactOptional()
      .openapi({
        description:
          'Placeholder. A list of text corrections made to Document.text. This is usually used for annotating corrections to OCR mistakes. Text changes for a given revision may not overlap with each other.',
      }),
    textStyles: z
      .array(GoogleCloudDocumentaiV1beta1DocumentStyleSchema)
      .exactOptional()
      .openapi({ description: 'Styles for the Document.text.' }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Currently supports Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info.',
      }),
  })
  .openapi({
    description:
      'Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1Document')

const GoogleCloudDocumentaiV1beta1OperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The creation time of the operation.' }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'ACCEPTED',
        'WAITING',
        'RUNNING',
        'SUCCEEDED',
        'CANCELLED',
        'FAILED',
      ])
      .exactOptional()
      .openapi({ description: 'The state of the current batch processing.' }),
    stateMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A message providing more details about the current state of processing.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last update time of the operation.' }),
  })
  .openapi({
    description: 'Contains metadata for the BatchProcessDocuments operation.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta1OperationMetadata')

const GoogleCloudDocumentaiV1beta2BarcodeSchema = z
  .object({
    format: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Format of a barcode. The supported formats are: - `CODE_128`: Code 128 type. - `CODE_39`: Code 39 type. - `CODE_93`: Code 93 type. - `CODABAR`: Codabar type. - `DATA_MATRIX`: 2D Data Matrix type. - `ITF`: ITF type. - `EAN_13`: EAN-13 type. - `EAN_8`: EAN-8 type. - `QR_CODE`: 2D QR code type. - `UPC_A`: UPC-A type. - `UPC_E`: UPC-E type. - `PDF417`: PDF417 type. - `AZTEC`: 2D Aztec code type. - `DATABAR`: GS1 DataBar code type.',
      }),
    rawValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Raw value encoded in the barcode. For example: `'MEBKM:TITLE:Google;URL:https://www.google.com;;'`.",
      }),
    valueFormat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Value format describes the format of the value that a barcode encodes. The supported formats are: - `CONTACT_INFO`: Contact information. - `EMAIL`: Email address. - `ISBN`: ISBN identifier. - `PHONE`: Phone number. - `PRODUCT`: Product. - `SMS`: SMS message. - `TEXT`: Text string. - `URL`: URL address. - `WIFI`: Wifi information. - `GEO`: Geo-localization. - `CALENDAR_EVENT`: Calendar event. - `DRIVER_LICENSE`: Driver's license.",
      }),
  })
  .openapi({ description: 'Encodes the detailed information of a barcode.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2Barcode')

const GoogleCloudDocumentaiV1beta2GcsSourceSchema = z
  .object({ uri: z.string().exactOptional() })
  .openapi({
    description: 'The Google Cloud Storage location where the input file will be read from.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2GcsSource')

const GoogleCloudDocumentaiV1beta2InputConfigSchema = z
  .object({
    contents: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Content in bytes, represented as a stream of bytes. Note: As with all `bytes` fields, proto buffer messages use a pure binary representation, whereas JSON representations use base64. This field only works for synchronous ProcessDocument method.',
      }),
    gcsSource: GoogleCloudDocumentaiV1beta2GcsSourceSchema.exactOptional().openapi({
      description:
        'The Google Cloud Storage location to read the input from. This must be a single file.',
    }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Mimetype of the input. Current supported mimetypes are application/pdf, image/tiff, and image/gif. In addition, application/json type is supported for requests with ProcessDocumentRequest.automl_params field set. The JSON file needs to be in Document format.',
      }),
  })
  .openapi({ description: 'The desired input location and metadata.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2InputConfig')

const GoogleCloudDocumentaiV1beta2GcsDestinationSchema = z
  .object({ uri: z.string().exactOptional() })
  .openapi({
    description: 'The Google Cloud Storage location where the output file will be written to.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2GcsDestination')

const GoogleCloudDocumentaiV1beta2OutputConfigSchema = z
  .object({
    gcsDestination: GoogleCloudDocumentaiV1beta2GcsDestinationSchema.exactOptional().openapi({
      description: 'The Google Cloud Storage location to write the output to.',
    }),
    pagesPerShard: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The max number of pages to include into each output Document shard JSON on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 parsed pages will be produced. If `pages_per_shard` = 20, then 5 Document shard JSON files each containing 20 parsed pages will be written under the prefix OutputConfig.gcs_destination.uri and suffix pages-x-to-y.json where x and y are 1-indexed page numbers. Example GCS outputs with 157 pages and pages_per_shard = 50: pages-001-to-050.json pages-051-to-100.json pages-101-to-150.json pages-151-to-157.json',
      }),
  })
  .openapi({ description: 'The desired output location and metadata.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2OutputConfig')

const GoogleCloudDocumentaiV1beta2ProcessDocumentResponseSchema = z
  .object({
    inputConfig: GoogleCloudDocumentaiV1beta2InputConfigSchema.exactOptional().openapi({
      description:
        'Information about the input file. This is the same as the corresponding input config in the request.',
    }),
    outputConfig: GoogleCloudDocumentaiV1beta2OutputConfigSchema.exactOptional().openapi({
      description:
        'The output location of the parsed responses. The responses are written to this location as JSON-serialized `Document` objects.',
    }),
  })
  .openapi({ description: 'Response to a single document processing request.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2ProcessDocumentResponse')

const GoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponseSchema = z
  .object({
    responses: z
      .array(GoogleCloudDocumentaiV1beta2ProcessDocumentResponseSchema)
      .exactOptional()
      .openapi({ description: 'Responses for each individual document.' }),
  })
  .openapi({
    description:
      'Response to an batch document processing request. This is returned in the LRO Operation after the operation is complete.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponse')

const GoogleCloudDocumentaiV1beta2DocumentEntitySchema: z.ZodType<GoogleCloudDocumentaiV1beta2DocumentEntityType> =
  z
    .lazy(() =>
      z
        .object({
          confidence: z
            .float32()
            .exactOptional()
            .openapi({
              description: 'Optional. Confidence of detected Schema entity. Range `[0, 1]`.',
            }),
          id: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Optional. Canonical id. This will be a unique value in the entity list for this document.',
            }),
          mentionId: z
            .string()
            .exactOptional()
            .openapi({ description: 'Optional. Deprecated. Use `id` field instead.' }),
          mentionText: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Optional. Text value of the entity e.g. `1600 Amphitheatre Pkwy`.',
            }),
          normalizedValue:
            GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValueSchema.exactOptional().openapi(
              {
                description:
                  'Optional. Normalized entity value. Absent if the extracted value could not be converted or the type (e.g. address) is not supported for certain parsers. This field is also only populated for certain supported document types.',
              },
            ),
          pageAnchor: GoogleCloudDocumentaiV1beta2DocumentPageAnchorSchema.exactOptional().openapi({
            description:
              'Optional. Represents the provenance of this entity wrt. the location on the page where it was found.',
          }),
          properties: z
            .array(GoogleCloudDocumentaiV1beta2DocumentEntitySchema)
            .exactOptional()
            .openapi({
              description:
                'Optional. Entities can be nested to form a hierarchical data structure representing the content in the document.',
            }),
          provenance: GoogleCloudDocumentaiV1beta2DocumentProvenanceSchema.exactOptional().openapi({
            description: 'Optional. The history of this annotation.',
          }),
          redacted: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'Optional. Whether the entity will be redacted for de-identification purposes.',
            }),
          textAnchor: GoogleCloudDocumentaiV1beta2DocumentTextAnchorSchema.exactOptional().openapi({
            description:
              'Optional. Provenance of the entity. Text anchor indexing into the Document.text.',
          }),
          type: z
            .string()
            .exactOptional()
            .openapi({ description: 'Required. Entity type from a schema e.g. `Address`.' }),
        })
        .openapi({
          description:
            'An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.',
          required: [],
        }),
    )
    .openapi('GoogleCloudDocumentaiV1beta2DocumentEntity')

const GoogleCloudDocumentaiV1beta2DocumentEntityRelationSchema = z
  .object({
    objectId: z.string().exactOptional().openapi({ description: 'Object entity id.' }),
    relation: z.string().exactOptional().openapi({ description: 'Relationship description.' }),
    subjectId: z.string().exactOptional().openapi({ description: 'Subject entity id.' }),
  })
  .openapi({ description: 'Relationship between Entities.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentEntityRelation')

const GoogleCloudDocumentaiV1beta2DocumentLabelSchema = z
  .object({
    automlModel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Label is generated AutoML model. This field stores the full resource name of the AutoML model. Format: `projects/{project-id}/locations/{location-id}/models/{model-id}`',
      }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence score between 0 and 1 for label assignment.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the label. When the label is generated from AutoML Text Classification model, this field represents the name of the category.',
      }),
  })
  .openapi({
    description:
      'Label attaches schema information and/or other metadata to segments within a Document. Multiple Labels on a single field can denote either different labels, different instances of the same label created at different times, or some combination of both.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentLabel')

const GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguageSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of detected language. Range `[0, 1]`.' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as `en-US` or `sr-Latn`. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
  })
  .openapi({ description: 'Detected language for a structural component.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage')

const GoogleCloudDocumentaiV1beta2DocumentPageLayoutSchema = z
  .object({
    boundingPoly: GoogleCloudDocumentaiV1beta2BoundingPolySchema.exactOptional().openapi({
      description: 'The bounding polygon for the Layout.',
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range `[0, 1]`.',
      }),
    orientation: z
      .enum(['ORIENTATION_UNSPECIFIED', 'PAGE_UP', 'PAGE_RIGHT', 'PAGE_DOWN', 'PAGE_LEFT'])
      .exactOptional()
      .openapi({ description: 'Detected orientation for the Layout.' }),
    textAnchor: GoogleCloudDocumentaiV1beta2DocumentTextAnchorSchema.exactOptional().openapi({
      description: 'Text anchor indexing into the Document.text.',
    }),
  })
  .openapi({ description: 'Visual element describing a layout unit on a page.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageLayout')

const GoogleCloudDocumentaiV1beta2DocumentPageBlockSchema = z
  .object({
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta2DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for Block.',
    }),
    provenance: GoogleCloudDocumentaiV1beta2DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this annotation.',
    }),
  })
  .openapi({
    description:
      'A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageBlock')

const GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcodeSchema = z
  .object({
    barcode: GoogleCloudDocumentaiV1beta2BarcodeSchema.exactOptional().openapi({
      description: 'Detailed barcode information of the DetectedBarcode.',
    }),
    layout: GoogleCloudDocumentaiV1beta2DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for DetectedBarcode.',
    }),
  })
  .openapi({ description: 'A detected barcode.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode')

const GoogleCloudDocumentaiV1beta2DocumentPageDimensionSchema = z
  .object({
    height: z.float32().exactOptional().openapi({ description: 'Page height.' }),
    unit: z.string().exactOptional().openapi({ description: 'Dimension unit.' }),
    width: z.float32().exactOptional().openapi({ description: 'Page width.' }),
  })
  .openapi({ description: 'Dimension for the page.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageDimension')

const GoogleCloudDocumentaiV1beta2DocumentPageFormFieldSchema = z
  .object({
    correctedKeyText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Created for Labeling UI to export key text. If corrections were made to the text identified by the `field_name.text_anchor`, this field will contain the correction.',
      }),
    correctedValueText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Created for Labeling UI to export value text. If corrections were made to the text identified by the `field_value.text_anchor`, this field will contain the correction.',
      }),
    fieldName: GoogleCloudDocumentaiV1beta2DocumentPageLayoutSchema.exactOptional().openapi({
      description:
        'Layout for the FormField name. e.g. `Address`, `Email`, `Grand total`, `Phone number`, etc.',
    }),
    fieldValue: GoogleCloudDocumentaiV1beta2DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for the FormField value.',
    }),
    nameDetectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages for name together with confidence.' }),
    provenance: GoogleCloudDocumentaiV1beta2DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this annotation.',
    }),
    valueDetectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages for value together with confidence.' }),
    valueType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the value is non-textual, this field represents the type. Current valid values are: - blank (this indicates the `field_value` is normal text) - `unfilled_checkbox` - `filled_checkbox`',
      }),
  })
  .openapi({ description: 'A form field detected on the page.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageFormField')

const GoogleCloudDocumentaiV1beta2DocumentPageImageSchema = z
  .object({
    content: z.string().exactOptional().openapi({ description: 'Raw byte content of the image.' }),
    height: z.int32().exactOptional().openapi({ description: 'Height of the image in pixels.' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Encoding mime type for the image.' }),
    width: z.int32().exactOptional().openapi({ description: 'Width of the image in pixels.' }),
  })
  .openapi({ description: 'Rendered image contents for this page.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageImage')

const GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefectSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Confidence of detected defect. Range `[0, 1]` where 1 indicates strong confidence of that the defect exists.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the defect type. Supported values are: - `quality/defect_blurry` - `quality/defect_noisy` - `quality/defect_dark` - `quality/defect_faint` - `quality/defect_text_too_small` - `quality/defect_document_cutoff` - `quality/defect_text_cutoff` - `quality/defect_glare`',
      }),
  })
  .openapi({ description: 'Image Quality Defects', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect')

const GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresSchema = z
  .object({
    detectedDefects: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefectSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected defects.' }),
    qualityScore: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The overall quality score. Range `[0, 1]` where 1 is perfect quality.',
      }),
  })
  .openapi({ description: 'Image Quality Scores for the page image', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores')

const GoogleCloudDocumentaiV1beta2DocumentPageLineSchema = z
  .object({
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta2DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for Line.',
    }),
    provenance: GoogleCloudDocumentaiV1beta2DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this annotation.',
    }),
  })
  .openapi({
    description:
      'A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageLine')

const GoogleCloudDocumentaiV1beta2DocumentPageParagraphSchema = z
  .object({
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta2DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for Paragraph.',
    }),
    provenance: GoogleCloudDocumentaiV1beta2DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this annotation.',
    }),
  })
  .openapi({
    description: 'A collection of lines that a human would perceive as a paragraph.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageParagraph')

const GoogleCloudDocumentaiV1beta2DocumentPageSymbolSchema = z
  .object({
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta2DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for Symbol.',
    }),
  })
  .openapi({ description: 'A detected symbol.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageSymbol')

const GoogleCloudDocumentaiV1beta2DocumentPageTableTableCellSchema = z
  .object({
    colSpan: z
      .int32()
      .exactOptional()
      .openapi({ description: 'How many columns this cell spans.' }),
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta2DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for TableCell.',
    }),
    rowSpan: z.int32().exactOptional().openapi({ description: 'How many rows this cell spans.' }),
  })
  .openapi({ description: 'A cell representation inside the table.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell')

const GoogleCloudDocumentaiV1beta2DocumentPageTableTableRowSchema = z
  .object({
    cells: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageTableTableCellSchema)
      .exactOptional()
      .openapi({ description: 'Cells that make up this row.' }),
  })
  .openapi({ description: 'A row of table cells.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow')

const GoogleCloudDocumentaiV1beta2DocumentPageTableSchema = z
  .object({
    bodyRows: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageTableTableRowSchema)
      .exactOptional()
      .openapi({ description: 'Body rows of the table.' }),
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    headerRows: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageTableTableRowSchema)
      .exactOptional()
      .openapi({ description: 'Header rows of the table.' }),
    layout: GoogleCloudDocumentaiV1beta2DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for Table.',
    }),
    provenance: GoogleCloudDocumentaiV1beta2DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this table.',
    }),
  })
  .openapi({ description: 'A table representation similar to HTML table structure.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageTable')

const GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreakSchema = z
  .object({
    type: z
      .enum(['TYPE_UNSPECIFIED', 'SPACE', 'WIDE_SPACE', 'HYPHEN'])
      .exactOptional()
      .openapi({ description: 'Detected break type.' }),
  })
  .openapi({ description: 'Detected break at the end of a Token.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak')

const GoogleCloudDocumentaiV1beta2DocumentPageTokenSchema = z
  .object({
    detectedBreak:
      GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreakSchema.exactOptional().openapi({
        description: 'Detected break at the end of a Token.',
      }),
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta2DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for Token.',
    }),
    provenance: GoogleCloudDocumentaiV1beta2DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this annotation.',
    }),
  })
  .openapi({ description: 'A detected token.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageToken')

const GoogleCloudDocumentaiV1beta2DocumentPageMatrixSchema = z
  .object({
    cols: z.int32().exactOptional().openapi({ description: 'Number of columns in the matrix.' }),
    data: z.string().exactOptional().openapi({ description: 'The matrix data.' }),
    rows: z.int32().exactOptional().openapi({ description: 'Number of rows in the matrix.' }),
    type: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'This encodes information about what data type the matrix uses. For example, 0 (CV_8U) is an unsigned 8-bit image. For the full list of OpenCV primitive data types, please refer to https://docs.opencv.org/4.3.0/d1/d1b/group__core__hal__interface.html',
      }),
  })
  .openapi({
    description:
      'Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageMatrix')

const GoogleCloudDocumentaiV1beta2DocumentPageVisualElementSchema = z
  .object({
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta2DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for VisualElement.',
    }),
    type: z.string().exactOptional().openapi({ description: 'Type of the VisualElement.' }),
  })
  .openapi({
    description: 'Detected non-text visual elements e.g. checkbox, signature etc. on the page.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPageVisualElement')

const GoogleCloudDocumentaiV1beta2DocumentPageSchema = z
  .object({
    blocks: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageBlockSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.',
      }),
    detectedBarcodes: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcodeSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected barcodes.' }),
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    dimension: GoogleCloudDocumentaiV1beta2DocumentPageDimensionSchema.exactOptional().openapi({
      description: 'Physical dimension of the page.',
    }),
    formFields: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageFormFieldSchema)
      .exactOptional()
      .openapi({ description: 'A list of visually detected form fields on the page.' }),
    image: GoogleCloudDocumentaiV1beta2DocumentPageImageSchema.exactOptional().openapi({
      description:
        'Rendered image for this page. This image is preprocessed to remove any skew, rotation, and distortions such that the annotation bounding boxes can be upright and axis-aligned.',
    }),
    imageQualityScores:
      GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresSchema.exactOptional().openapi({
        description: 'Image Quality Scores.',
      }),
    layout: GoogleCloudDocumentaiV1beta2DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for the page.',
    }),
    lines: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageLineSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line.',
      }),
    pageNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing.',
      }),
    paragraphs: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageParagraphSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph.',
      }),
    provenance: GoogleCloudDocumentaiV1beta2DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this page.',
    }),
    symbols: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageSymbolSchema)
      .exactOptional()
      .openapi({ description: 'A list of visually detected symbols on the page.' }),
    tables: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageTableSchema)
      .exactOptional()
      .openapi({ description: 'A list of visually detected tables on the page.' }),
    tokens: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageTokenSchema)
      .exactOptional()
      .openapi({ description: 'A list of visually detected tokens on the page.' }),
    transforms: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageMatrixSchema)
      .exactOptional()
      .openapi({
        description:
          'Transformation matrices that were applied to the original document image to produce Page.image.',
      }),
    visualElements: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageVisualElementSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of detected non-text visual elements e.g. checkbox, signature etc. on the page.',
      }),
  })
  .openapi({ description: 'A page in a Document.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentPage')

const GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReviewSchema = z
  .object({
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human review state. e.g. `requested`, `succeeded`, `rejected`.' }),
    stateMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A message providing more details about the current state of processing. For example, the rejection reason when the state is `rejected`.',
      }),
  })
  .openapi({ description: 'Human Review information of the document.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview')

const GoogleCloudDocumentaiV1beta2DocumentRevisionSchema = z
  .object({
    agent: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If the change was made by a person specify the name or id of that person.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time that the revision was created, internally generated by doc proto storage at the time of create.',
      }),
    humanReview:
      GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReviewSchema.exactOptional().openapi({
        description: 'Human Review information of this revision.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the revision, internally generated by doc proto storage. Unique within the context of the document.',
      }),
    parent: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'The revisions that this revision is based on. This can include one or more parent (when documents are merged.) This field represents the index into the `revisions` field.',
      }),
    parentIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The revisions that this revision is based on. Must include all the ids that have anything to do with this revision - eg. there are `provenance.parent.revision` fields that index into this field.',
      }),
    processor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the annotation was made by processor identify the processor by its resource name.',
      }),
  })
  .openapi({ description: 'Contains past or forward revisions of this document.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentRevision')

const GoogleCloudDocumentaiV1beta2DocumentShardInfoSchema = z
  .object({
    shardCount: z.string().exactOptional().openapi({ description: 'Total number of shards.' }),
    shardIndex: z
      .string()
      .exactOptional()
      .openapi({ description: 'The 0-based index of this shard.' }),
    textOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The index of the first character in Document.text in the overall document global text.',
      }),
  })
  .openapi({
    description:
      'For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentShardInfo')

const GoogleCloudDocumentaiV1beta2DocumentTextChangeSchema = z
  .object({
    changedText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text that replaces the text identified in the `text_anchor`.' }),
    provenance: z
      .array(GoogleCloudDocumentaiV1beta2DocumentProvenanceSchema)
      .exactOptional()
      .openapi({ description: 'The history of this annotation.' }),
    textAnchor: GoogleCloudDocumentaiV1beta2DocumentTextAnchorSchema.exactOptional().openapi({
      description:
        'Provenance of the correction. Text anchor indexing into the Document.text. There can only be a single `TextAnchor.text_segments` element. If the start and end index of the text segment are the same, the text change is inserted before that index.',
    }),
  })
  .openapi({
    description: 'This message is used for text changes aka. OCR corrections.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentTextChange')

const GoogleCloudDocumentaiV1beta2DocumentStyleFontSizeSchema = z
  .object({
    size: z.float32().exactOptional().openapi({ description: 'Font size for the text.' }),
    unit: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unit for the font size. Follows CSS naming (in, px, pt, etc.).' }),
  })
  .openapi({ description: 'Font size with unit.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentStyleFontSize')

const GoogleCloudDocumentaiV1beta2DocumentStyleSchema = z
  .object({
    backgroundColor: GoogleTypeColorSchema.exactOptional().openapi({
      description: 'Text background color.',
    }),
    color: GoogleTypeColorSchema.exactOptional().openapi({ description: 'Text color.' }),
    fontFamily: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Font family such as `Arial`, `Times New Roman`. https://www.w3schools.com/cssref/pr_font_font-family.asp',
      }),
    fontSize: GoogleCloudDocumentaiV1beta2DocumentStyleFontSizeSchema.exactOptional().openapi({
      description: 'Font size.',
    }),
    fontWeight: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Font weight. Possible values are normal, bold, bolder, and lighter. https://www.w3schools.com/cssref/pr_font_weight.asp',
      }),
    textAnchor: GoogleCloudDocumentaiV1beta2DocumentTextAnchorSchema.exactOptional().openapi({
      description: 'Text anchor indexing into the Document.text.',
    }),
    textDecoration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text decoration. Follows CSS standard. https://www.w3schools.com/cssref/pr_text_text-decoration.asp',
      }),
    textStyle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text style. Possible values are normal, italic, and oblique. https://www.w3schools.com/cssref/pr_font_font-style.asp',
      }),
  })
  .openapi({
    description:
      'Annotation for common text style attributes. This adheres to CSS conventions as much as possible.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2DocumentStyle')

const GoogleCloudDocumentaiV1beta2DocumentSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Inline document content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.',
      }),
    entities: z
      .array(GoogleCloudDocumentaiV1beta2DocumentEntitySchema)
      .exactOptional()
      .openapi({
        description:
          'A list of entities detected on Document.text. For document shards, entities in this list may cross shard boundaries.',
      }),
    entityRelations: z
      .array(GoogleCloudDocumentaiV1beta2DocumentEntityRelationSchema)
      .exactOptional()
      .openapi({ description: 'Placeholder. Relationship among Document.entities.' }),
    error: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'Any error that occurred while processing this document.',
    }),
    labels: z
      .array(GoogleCloudDocumentaiV1beta2DocumentLabelSchema)
      .exactOptional()
      .openapi({ description: 'Labels for this document.' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An IANA published MIME type (also referred to as media type). For more information, see https://www.iana.org/assignments/media-types/media-types.xhtml.',
      }),
    pages: z
      .array(GoogleCloudDocumentaiV1beta2DocumentPageSchema)
      .exactOptional()
      .openapi({ description: 'Visual page layout for the Document.' }),
    revisions: z
      .array(GoogleCloudDocumentaiV1beta2DocumentRevisionSchema)
      .exactOptional()
      .openapi({ description: 'Placeholder. Revision history of this document.' }),
    shardInfo: GoogleCloudDocumentaiV1beta2DocumentShardInfoSchema.exactOptional().openapi({
      description:
        'Information about the sharding if this document is sharded part of a larger document. If the document is not sharded, this message is not specified.',
    }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. UTF-8 encoded text in reading order from the document.' }),
    textChanges: z
      .array(GoogleCloudDocumentaiV1beta2DocumentTextChangeSchema)
      .exactOptional()
      .openapi({
        description:
          'Placeholder. A list of text corrections made to Document.text. This is usually used for annotating corrections to OCR mistakes. Text changes for a given revision may not overlap with each other.',
      }),
    textStyles: z
      .array(GoogleCloudDocumentaiV1beta2DocumentStyleSchema)
      .exactOptional()
      .openapi({ description: 'Styles for the Document.text.' }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Currently supports Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info.',
      }),
  })
  .openapi({
    description:
      'Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2Document')

const GoogleCloudDocumentaiV1beta2OperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The creation time of the operation.' }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'ACCEPTED',
        'WAITING',
        'RUNNING',
        'SUCCEEDED',
        'CANCELLED',
        'FAILED',
      ])
      .exactOptional()
      .openapi({ description: 'The state of the current batch processing.' }),
    stateMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A message providing more details about the current state of processing.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last update time of the operation.' }),
  })
  .openapi({
    description: 'Contains metadata for the BatchProcessDocuments operation.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta2OperationMetadata')

const GoogleCloudDocumentaiV1beta3BarcodeSchema = z
  .object({
    format: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Format of a barcode. The supported formats are: - `CODE_128`: Code 128 type. - `CODE_39`: Code 39 type. - `CODE_93`: Code 93 type. - `CODABAR`: Codabar type. - `DATA_MATRIX`: 2D Data Matrix type. - `ITF`: ITF type. - `EAN_13`: EAN-13 type. - `EAN_8`: EAN-8 type. - `QR_CODE`: 2D QR code type. - `UPC_A`: UPC-A type. - `UPC_E`: UPC-E type. - `PDF417`: PDF417 type. - `AZTEC`: 2D Aztec code type. - `DATABAR`: GS1 DataBar code type.',
      }),
    rawValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Raw value encoded in the barcode. For example: `'MEBKM:TITLE:Google;URL:https://www.google.com;;'`.",
      }),
    valueFormat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Value format describes the format of the value that a barcode encodes. The supported formats are: - `CONTACT_INFO`: Contact information. - `EMAIL`: Email address. - `ISBN`: ISBN identifier. - `PHONE`: Phone number. - `PRODUCT`: Product. - `SMS`: SMS message. - `TEXT`: Text string. - `URL`: URL address. - `WIFI`: Wifi information. - `GEO`: Geo-localization. - `CALENDAR_EVENT`: Calendar event. - `DRIVER_LICENSE`: Driver's license.",
      }),
  })
  .openapi({ description: 'Encodes the detailed information of a barcode.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3Barcode')

const GoogleCloudDocumentaiV1beta3GcsDocumentSchema = z
  .object({
    gcsUri: z.string().exactOptional().openapi({ description: 'The Cloud Storage object uri.' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'An IANA MIME type (RFC6838) of the content.' }),
  })
  .openapi({ description: 'Specifies a document stored on Cloud Storage.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3GcsDocument')

const GoogleCloudDocumentaiV1beta3GcsDocumentsSchema = z
  .object({
    documents: z
      .array(GoogleCloudDocumentaiV1beta3GcsDocumentSchema)
      .exactOptional()
      .openapi({ description: 'The list of documents.' }),
  })
  .openapi({ description: 'Specifies a set of documents on Cloud Storage.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3GcsDocuments')

const GoogleCloudDocumentaiV1beta3GcsPrefixSchema = z
  .object({ gcsUriPrefix: z.string().exactOptional().openapi({ description: 'The URI prefix.' }) })
  .openapi({
    description: 'Specifies all documents on Cloud Storage with a common prefix.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3GcsPrefix')

const GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfigSchema = z
  .object({
    gcsDocuments: GoogleCloudDocumentaiV1beta3GcsDocumentsSchema.exactOptional().openapi({
      description: 'The set of documents individually specified on Cloud Storage.',
    }),
    gcsPrefix: GoogleCloudDocumentaiV1beta3GcsPrefixSchema.exactOptional().openapi({
      description: 'The set of documents that match the specified Cloud Storage `gcs_prefix`.',
    }),
  })
  .openapi({
    description: 'The common config to specify a set of documents used as input.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig')

const GoogleCloudDocumentaiV1beta3HumanReviewStatusSchema = z
  .object({
    humanReviewOperation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the operation triggered by the processed document. This field is populated only when the [state] is [HUMAN_REVIEW_IN_PROGRESS]. It has the same response type and metadata as the long running operation returned by [ReviewDocument] method.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'SKIPPED', 'VALIDATION_PASSED', 'IN_PROGRESS', 'ERROR'])
      .exactOptional()
      .openapi({ description: 'The state of human review on the processing request.' }),
    stateMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'A message providing more details about the human review state.' }),
  })
  .openapi({ description: 'The status of human review on a processed document.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3HumanReviewStatus')

const GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatusSchema = z
  .object({
    humanReviewOperation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the operation triggered by the processed document. If the human review process is not triggered, this field will be empty. It has the same response type and metadata as the long running operation returned by ReviewDocument method.',
      }),
    humanReviewStatus: GoogleCloudDocumentaiV1beta3HumanReviewStatusSchema.exactOptional().openapi({
      description: 'The status of human review on the processed document.',
    }),
    inputGcsSource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The source of the document, same as the [input_gcs_source] field in the request when the batch process started. The batch process is started by take snapshot of that document, since a user can move or change that document during the process.',
      }),
    outputGcsDestination: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The output_gcs_destination (in the request as `output_gcs_destination`) of the processed document if it was successful, otherwise empty.',
      }),
    status: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'The status processing the document.',
    }),
  })
  .openapi({
    description: 'The status of a each individual document in the batch process.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus')

const GoogleCloudDocumentaiV1beta3BatchProcessMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The creation time of the operation.' }),
    individualProcessStatuses: z
      .array(GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatusSchema)
      .exactOptional()
      .openapi({ description: 'The list of response details of each document.' }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'WAITING',
        'RUNNING',
        'SUCCEEDED',
        'CANCELLING',
        'CANCELLED',
        'FAILED',
      ])
      .exactOptional()
      .openapi({ description: 'The state of the current batch processing.' }),
    stateMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A message providing more details about the current state of processing. For example, the error message if the operation is failed.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last update time of the operation.' }),
  })
  .openapi({
    description: 'The long running operation metadata for batch process method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3BatchProcessMetadata')

const GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigShardingConfigSchema = z
  .object({
    pagesOverlap: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of overlapping pages between consecutive shards.' }),
    pagesPerShard: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of pages per shard.' }),
  })
  .openapi({ description: 'The sharding config for the output document.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigShardingConfig')

const GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigSchema = z
  .object({
    fieldMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies which fields to include in the output documents. Only supports top level document and pages field so it must be in the form of `{document_field_name}` or `pages.{page_field_name}`.',
      }),
    gcsUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Cloud Storage uri (a directory) of the output.' }),
    shardingConfig:
      GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigShardingConfigSchema.exactOptional().openapi(
        { description: 'Specifies the sharding config for the output document.' },
      ),
  })
  .openapi({ description: 'The configuration used when outputting documents.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig')

const GoogleCloudDocumentaiV1beta3DocumentOutputConfigSchema = z
  .object({
    gcsOutputConfig:
      GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigSchema.exactOptional().openapi(
        { description: 'Output config to write the results to Cloud Storage.' },
      ),
  })
  .openapi({
    description:
      'Config that controls the output of documents. All documents will be written as a JSON file.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentOutputConfig')

const GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfigSchema = z
  .object({
    gcsSource: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Cloud Storage location as the source of the document.' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Mimetype of the input. If the input is a raw document, the supported mimetypes are application/pdf, image/tiff, and image/gif. If the input is a [Document] proto, the type should be application/json.',
      }),
  })
  .openapi({ description: 'The message for input config in batch process.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig')

const GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfigSchema = z
  .object({
    gcsDestination: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The output Cloud Storage directory to put the processed documents.',
      }),
  })
  .openapi({ description: 'The message for output config in batch process.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig')

const GoogleCloudDocumentaiV1beta3OcrConfigHintsSchema = z
  .object({
    languageHints: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of BCP-47 language codes to use for OCR. In most cases, not specifying it yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting hints is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong).',
      }),
  })
  .openapi({ description: 'Hints for OCR Engine', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3OcrConfigHints')

const GoogleCloudDocumentaiV1beta3OcrConfigSchema = z
  .object({
    advancedOcrOptions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of advanced OCR options to further fine-tune OCR behavior. Current valid values are: - `legacy_layout`: a heuristics layout detection algorithm, which serves as an alternative to the current ML-based layout detection algorithm. Customers can choose the best suitable layout algorithm based on their situation.',
      }),
    enableImageQualityScores: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enables intelligent document quality scores after OCR. Can help with diagnosing why OCR responses are of poor quality for a given input. Adds additional latency comparable to regular OCR to the process call.',
      }),
    enableNativePdfParsing: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enables special handling for PDFs with existing text information. Results in better text extraction quality in such PDF inputs.',
      }),
    enableSymbol: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Includes symbol level OCR information if set to true.' }),
    hints: GoogleCloudDocumentaiV1beta3OcrConfigHintsSchema.exactOptional().openapi({
      description: 'Hints for the OCR model.',
    }),
  })
  .openapi({ description: 'Config for Document OCR.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3OcrConfig')

const GoogleCloudDocumentaiV1beta3ProcessOptionsSchema = z
  .object({
    ocrConfig: GoogleCloudDocumentaiV1beta3OcrConfigSchema.exactOptional().openapi({
      description:
        'Only applicable to "Document OCR Processor". Returns error if set on other processor types.',
    }),
  })
  .openapi({ description: 'Options for Process API', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3ProcessOptions')

const GoogleCloudDocumentaiV1beta3BatchProcessRequestSchema = z
  .object({
    documentOutputConfig:
      GoogleCloudDocumentaiV1beta3DocumentOutputConfigSchema.exactOptional().openapi({
        description: 'The overall output config for batch process.',
      }),
    inputConfigs: z
      .array(GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfigSchema)
      .exactOptional()
      .openapi({ description: 'The input config for each single document in the batch process.' }),
    inputDocuments:
      GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfigSchema.exactOptional().openapi({
        description: 'The input documents for batch process.',
      }),
    outputConfig:
      GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfigSchema.exactOptional().openapi(
        { description: 'The overall output config for batch process.' },
      ),
    processOptions: GoogleCloudDocumentaiV1beta3ProcessOptionsSchema.exactOptional().openapi({
      description: 'Inference-time options for the process API',
    }),
    skipHumanReview: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether Human Review feature should be skipped for this request. Default to false.',
      }),
  })
  .openapi({ description: 'Request message for batch process document method.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3BatchProcessRequest')

const GoogleCloudDocumentaiV1beta3BatchProcessResponseSchema = z
  .object({})
  .openapi({ description: 'Response message for batch process document method.' })
  .openapi('GoogleCloudDocumentaiV1beta3BatchProcessResponse')

const GoogleCloudDocumentaiV1beta3CommonOperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The creation time of the operation.' }),
    resource: z
      .string()
      .exactOptional()
      .openapi({ description: 'A related resource to this operation.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'RUNNING', 'CANCELLING', 'SUCCEEDED', 'FAILED', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: 'The state of the operation.' }),
    stateMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A message providing more details about the current state of processing.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last update time of the operation.' }),
  })
  .openapi({ description: 'The common metadata for long running operations.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3CommonOperationMetadata')

const GoogleCloudDocumentaiV1beta3DeleteProcessorMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiV1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for delete processor method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DeleteProcessorMetadata')

const GoogleCloudDocumentaiV1beta3DeleteProcessorVersionMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiV1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for delete processor version method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DeleteProcessorVersionMetadata')

const GoogleCloudDocumentaiV1beta3DeployProcessorVersionMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiV1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for deploy processor version method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DeployProcessorVersionMetadata')

const GoogleCloudDocumentaiV1beta3DeployProcessorVersionRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for the deploy processor version method.' })
  .openapi('GoogleCloudDocumentaiV1beta3DeployProcessorVersionRequest')

const GoogleCloudDocumentaiV1beta3DeployProcessorVersionResponseSchema = z
  .object({})
  .openapi({ description: 'Response message for the deploy processor version method.' })
  .openapi('GoogleCloudDocumentaiV1beta3DeployProcessorVersionResponse')

const GoogleCloudDocumentaiV1beta3DisableProcessorMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiV1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for disable processor method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DisableProcessorMetadata')

const GoogleCloudDocumentaiV1beta3DisableProcessorRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for the disable processor method.' })
  .openapi('GoogleCloudDocumentaiV1beta3DisableProcessorRequest')

const GoogleCloudDocumentaiV1beta3DisableProcessorResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response message for the disable processor method. Intentionally empty proto for adding fields in future.',
  })
  .openapi('GoogleCloudDocumentaiV1beta3DisableProcessorResponse')

const GoogleCloudDocumentaiV1beta3DocumentEntitySchema: z.ZodType<GoogleCloudDocumentaiV1beta3DocumentEntityType> =
  z
    .lazy(() =>
      z
        .object({
          confidence: z
            .float32()
            .exactOptional()
            .openapi({
              description: 'Optional. Confidence of detected Schema entity. Range `[0, 1]`.',
            }),
          id: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Optional. Canonical id. This will be a unique value in the entity list for this document.',
            }),
          mentionId: z
            .string()
            .exactOptional()
            .openapi({ description: 'Optional. Deprecated. Use `id` field instead.' }),
          mentionText: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Optional. Text value of the entity e.g. `1600 Amphitheatre Pkwy`.',
            }),
          normalizedValue:
            GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValueSchema.exactOptional().openapi(
              {
                description:
                  'Optional. Normalized entity value. Absent if the extracted value could not be converted or the type (e.g. address) is not supported for certain parsers. This field is also only populated for certain supported document types.',
              },
            ),
          pageAnchor: GoogleCloudDocumentaiV1beta3DocumentPageAnchorSchema.exactOptional().openapi({
            description:
              'Optional. Represents the provenance of this entity wrt. the location on the page where it was found.',
          }),
          properties: z
            .array(GoogleCloudDocumentaiV1beta3DocumentEntitySchema)
            .exactOptional()
            .openapi({
              description:
                'Optional. Entities can be nested to form a hierarchical data structure representing the content in the document.',
            }),
          provenance: GoogleCloudDocumentaiV1beta3DocumentProvenanceSchema.exactOptional().openapi({
            description: 'Optional. The history of this annotation.',
          }),
          redacted: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'Optional. Whether the entity will be redacted for de-identification purposes.',
            }),
          textAnchor: GoogleCloudDocumentaiV1beta3DocumentTextAnchorSchema.exactOptional().openapi({
            description:
              'Optional. Provenance of the entity. Text anchor indexing into the Document.text.',
          }),
          type: z
            .string()
            .exactOptional()
            .openapi({ description: 'Required. Entity type from a schema e.g. `Address`.' }),
        })
        .openapi({
          description:
            'An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.',
          required: [],
        }),
    )
    .openapi('GoogleCloudDocumentaiV1beta3DocumentEntity')

const GoogleCloudDocumentaiV1beta3DocumentEntityRelationSchema = z
  .object({
    objectId: z.string().exactOptional().openapi({ description: 'Object entity id.' }),
    relation: z.string().exactOptional().openapi({ description: 'Relationship description.' }),
    subjectId: z.string().exactOptional().openapi({ description: 'Subject entity id.' }),
  })
  .openapi({ description: 'Relationship between Entities.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentEntityRelation')

const GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguageSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of detected language. Range `[0, 1]`.' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as `en-US` or `sr-Latn`. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
  })
  .openapi({ description: 'Detected language for a structural component.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage')

const GoogleCloudDocumentaiV1beta3DocumentPageLayoutSchema = z
  .object({
    boundingPoly: GoogleCloudDocumentaiV1beta3BoundingPolySchema.exactOptional().openapi({
      description: 'The bounding polygon for the Layout.',
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range `[0, 1]`.',
      }),
    orientation: z
      .enum(['ORIENTATION_UNSPECIFIED', 'PAGE_UP', 'PAGE_RIGHT', 'PAGE_DOWN', 'PAGE_LEFT'])
      .exactOptional()
      .openapi({ description: 'Detected orientation for the Layout.' }),
    textAnchor: GoogleCloudDocumentaiV1beta3DocumentTextAnchorSchema.exactOptional().openapi({
      description: 'Text anchor indexing into the Document.text.',
    }),
  })
  .openapi({ description: 'Visual element describing a layout unit on a page.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageLayout')

const GoogleCloudDocumentaiV1beta3DocumentPageBlockSchema = z
  .object({
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta3DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for Block.',
    }),
    provenance: GoogleCloudDocumentaiV1beta3DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this annotation.',
    }),
  })
  .openapi({
    description:
      'A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageBlock')

const GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcodeSchema = z
  .object({
    barcode: GoogleCloudDocumentaiV1beta3BarcodeSchema.exactOptional().openapi({
      description: 'Detailed barcode information of the DetectedBarcode.',
    }),
    layout: GoogleCloudDocumentaiV1beta3DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for DetectedBarcode.',
    }),
  })
  .openapi({ description: 'A detected barcode.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode')

const GoogleCloudDocumentaiV1beta3DocumentPageDimensionSchema = z
  .object({
    height: z.float32().exactOptional().openapi({ description: 'Page height.' }),
    unit: z.string().exactOptional().openapi({ description: 'Dimension unit.' }),
    width: z.float32().exactOptional().openapi({ description: 'Page width.' }),
  })
  .openapi({ description: 'Dimension for the page.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageDimension')

const GoogleCloudDocumentaiV1beta3DocumentPageFormFieldSchema = z
  .object({
    correctedKeyText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Created for Labeling UI to export key text. If corrections were made to the text identified by the `field_name.text_anchor`, this field will contain the correction.',
      }),
    correctedValueText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Created for Labeling UI to export value text. If corrections were made to the text identified by the `field_value.text_anchor`, this field will contain the correction.',
      }),
    fieldName: GoogleCloudDocumentaiV1beta3DocumentPageLayoutSchema.exactOptional().openapi({
      description:
        'Layout for the FormField name. e.g. `Address`, `Email`, `Grand total`, `Phone number`, etc.',
    }),
    fieldValue: GoogleCloudDocumentaiV1beta3DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for the FormField value.',
    }),
    nameDetectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages for name together with confidence.' }),
    provenance: GoogleCloudDocumentaiV1beta3DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this annotation.',
    }),
    valueDetectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages for value together with confidence.' }),
    valueType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the value is non-textual, this field represents the type. Current valid values are: - blank (this indicates the `field_value` is normal text) - `unfilled_checkbox` - `filled_checkbox`',
      }),
  })
  .openapi({ description: 'A form field detected on the page.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageFormField')

const GoogleCloudDocumentaiV1beta3DocumentPageImageSchema = z
  .object({
    content: z.string().exactOptional().openapi({ description: 'Raw byte content of the image.' }),
    height: z.int32().exactOptional().openapi({ description: 'Height of the image in pixels.' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Encoding mime type for the image.' }),
    width: z.int32().exactOptional().openapi({ description: 'Width of the image in pixels.' }),
  })
  .openapi({ description: 'Rendered image contents for this page.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageImage')

const GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefectSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Confidence of detected defect. Range `[0, 1]` where 1 indicates strong confidence of that the defect exists.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the defect type. Supported values are: - `quality/defect_blurry` - `quality/defect_noisy` - `quality/defect_dark` - `quality/defect_faint` - `quality/defect_text_too_small` - `quality/defect_document_cutoff` - `quality/defect_text_cutoff` - `quality/defect_glare`',
      }),
  })
  .openapi({ description: 'Image Quality Defects', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect')

const GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresSchema = z
  .object({
    detectedDefects: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefectSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected defects.' }),
    qualityScore: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The overall quality score. Range `[0, 1]` where 1 is perfect quality.',
      }),
  })
  .openapi({ description: 'Image Quality Scores for the page image', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores')

const GoogleCloudDocumentaiV1beta3DocumentPageLineSchema = z
  .object({
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta3DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for Line.',
    }),
    provenance: GoogleCloudDocumentaiV1beta3DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this annotation.',
    }),
  })
  .openapi({
    description:
      'A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageLine')

const GoogleCloudDocumentaiV1beta3DocumentPageParagraphSchema = z
  .object({
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta3DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for Paragraph.',
    }),
    provenance: GoogleCloudDocumentaiV1beta3DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this annotation.',
    }),
  })
  .openapi({
    description: 'A collection of lines that a human would perceive as a paragraph.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageParagraph')

const GoogleCloudDocumentaiV1beta3DocumentPageSymbolSchema = z
  .object({
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta3DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for Symbol.',
    }),
  })
  .openapi({ description: 'A detected symbol.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageSymbol')

const GoogleCloudDocumentaiV1beta3DocumentPageTableTableCellSchema = z
  .object({
    colSpan: z
      .int32()
      .exactOptional()
      .openapi({ description: 'How many columns this cell spans.' }),
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta3DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for TableCell.',
    }),
    rowSpan: z.int32().exactOptional().openapi({ description: 'How many rows this cell spans.' }),
  })
  .openapi({ description: 'A cell representation inside the table.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell')

const GoogleCloudDocumentaiV1beta3DocumentPageTableTableRowSchema = z
  .object({
    cells: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageTableTableCellSchema)
      .exactOptional()
      .openapi({ description: 'Cells that make up this row.' }),
  })
  .openapi({ description: 'A row of table cells.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow')

const GoogleCloudDocumentaiV1beta3DocumentPageTableSchema = z
  .object({
    bodyRows: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageTableTableRowSchema)
      .exactOptional()
      .openapi({ description: 'Body rows of the table.' }),
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    headerRows: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageTableTableRowSchema)
      .exactOptional()
      .openapi({ description: 'Header rows of the table.' }),
    layout: GoogleCloudDocumentaiV1beta3DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for Table.',
    }),
    provenance: GoogleCloudDocumentaiV1beta3DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this table.',
    }),
  })
  .openapi({ description: 'A table representation similar to HTML table structure.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageTable')

const GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreakSchema = z
  .object({
    type: z
      .enum(['TYPE_UNSPECIFIED', 'SPACE', 'WIDE_SPACE', 'HYPHEN'])
      .exactOptional()
      .openapi({ description: 'Detected break type.' }),
  })
  .openapi({ description: 'Detected break at the end of a Token.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak')

const GoogleCloudDocumentaiV1beta3DocumentPageTokenSchema = z
  .object({
    detectedBreak:
      GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreakSchema.exactOptional().openapi({
        description: 'Detected break at the end of a Token.',
      }),
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta3DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for Token.',
    }),
    provenance: GoogleCloudDocumentaiV1beta3DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this annotation.',
    }),
  })
  .openapi({ description: 'A detected token.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageToken')

const GoogleCloudDocumentaiV1beta3DocumentPageMatrixSchema = z
  .object({
    cols: z.int32().exactOptional().openapi({ description: 'Number of columns in the matrix.' }),
    data: z.string().exactOptional().openapi({ description: 'The matrix data.' }),
    rows: z.int32().exactOptional().openapi({ description: 'Number of rows in the matrix.' }),
    type: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'This encodes information about what data type the matrix uses. For example, 0 (CV_8U) is an unsigned 8-bit image. For the full list of OpenCV primitive data types, please refer to https://docs.opencv.org/4.3.0/d1/d1b/group__core__hal__interface.html',
      }),
  })
  .openapi({
    description:
      'Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageMatrix')

const GoogleCloudDocumentaiV1beta3DocumentPageVisualElementSchema = z
  .object({
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    layout: GoogleCloudDocumentaiV1beta3DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for VisualElement.',
    }),
    type: z.string().exactOptional().openapi({ description: 'Type of the VisualElement.' }),
  })
  .openapi({
    description: 'Detected non-text visual elements e.g. checkbox, signature etc. on the page.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPageVisualElement')

const GoogleCloudDocumentaiV1beta3DocumentPageSchema = z
  .object({
    blocks: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageBlockSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.',
      }),
    detectedBarcodes: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcodeSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected barcodes.' }),
    detectedLanguages: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
    dimension: GoogleCloudDocumentaiV1beta3DocumentPageDimensionSchema.exactOptional().openapi({
      description: 'Physical dimension of the page.',
    }),
    formFields: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageFormFieldSchema)
      .exactOptional()
      .openapi({ description: 'A list of visually detected form fields on the page.' }),
    image: GoogleCloudDocumentaiV1beta3DocumentPageImageSchema.exactOptional().openapi({
      description:
        'Rendered image for this page. This image is preprocessed to remove any skew, rotation, and distortions such that the annotation bounding boxes can be upright and axis-aligned.',
    }),
    imageQualityScores:
      GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresSchema.exactOptional().openapi({
        description: 'Image Quality Scores.',
      }),
    layout: GoogleCloudDocumentaiV1beta3DocumentPageLayoutSchema.exactOptional().openapi({
      description: 'Layout for the page.',
    }),
    lines: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageLineSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line.',
      }),
    pageNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing.',
      }),
    paragraphs: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageParagraphSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph.',
      }),
    provenance: GoogleCloudDocumentaiV1beta3DocumentProvenanceSchema.exactOptional().openapi({
      description: 'The history of this page.',
    }),
    symbols: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageSymbolSchema)
      .exactOptional()
      .openapi({ description: 'A list of visually detected symbols on the page.' }),
    tables: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageTableSchema)
      .exactOptional()
      .openapi({ description: 'A list of visually detected tables on the page.' }),
    tokens: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageTokenSchema)
      .exactOptional()
      .openapi({ description: 'A list of visually detected tokens on the page.' }),
    transforms: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageMatrixSchema)
      .exactOptional()
      .openapi({
        description:
          'Transformation matrices that were applied to the original document image to produce Page.image.',
      }),
    visualElements: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageVisualElementSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of detected non-text visual elements e.g. checkbox, signature etc. on the page.',
      }),
  })
  .openapi({ description: 'A page in a Document.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentPage')

const GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReviewSchema = z
  .object({
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human review state. e.g. `requested`, `succeeded`, `rejected`.' }),
    stateMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A message providing more details about the current state of processing. For example, the rejection reason when the state is `rejected`.',
      }),
  })
  .openapi({ description: 'Human Review information of the document.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview')

const GoogleCloudDocumentaiV1beta3DocumentRevisionSchema = z
  .object({
    agent: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If the change was made by a person specify the name or id of that person.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time that the revision was created, internally generated by doc proto storage at the time of create.',
      }),
    humanReview:
      GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReviewSchema.exactOptional().openapi({
        description: 'Human Review information of this revision.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the revision, internally generated by doc proto storage. Unique within the context of the document.',
      }),
    parent: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'The revisions that this revision is based on. This can include one or more parent (when documents are merged.) This field represents the index into the `revisions` field.',
      }),
    parentIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The revisions that this revision is based on. Must include all the ids that have anything to do with this revision - eg. there are `provenance.parent.revision` fields that index into this field.',
      }),
    processor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the annotation was made by processor identify the processor by its resource name.',
      }),
  })
  .openapi({ description: 'Contains past or forward revisions of this document.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentRevision')

const GoogleCloudDocumentaiV1beta3DocumentShardInfoSchema = z
  .object({
    shardCount: z.string().exactOptional().openapi({ description: 'Total number of shards.' }),
    shardIndex: z
      .string()
      .exactOptional()
      .openapi({ description: 'The 0-based index of this shard.' }),
    textOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The index of the first character in Document.text in the overall document global text.',
      }),
  })
  .openapi({
    description:
      'For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentShardInfo')

const GoogleCloudDocumentaiV1beta3DocumentTextChangeSchema = z
  .object({
    changedText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text that replaces the text identified in the `text_anchor`.' }),
    provenance: z
      .array(GoogleCloudDocumentaiV1beta3DocumentProvenanceSchema)
      .exactOptional()
      .openapi({ description: 'The history of this annotation.' }),
    textAnchor: GoogleCloudDocumentaiV1beta3DocumentTextAnchorSchema.exactOptional().openapi({
      description:
        'Provenance of the correction. Text anchor indexing into the Document.text. There can only be a single `TextAnchor.text_segments` element. If the start and end index of the text segment are the same, the text change is inserted before that index.',
    }),
  })
  .openapi({
    description: 'This message is used for text changes aka. OCR corrections.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentTextChange')

const GoogleCloudDocumentaiV1beta3DocumentStyleFontSizeSchema = z
  .object({
    size: z.float32().exactOptional().openapi({ description: 'Font size for the text.' }),
    unit: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unit for the font size. Follows CSS naming (in, px, pt, etc.).' }),
  })
  .openapi({ description: 'Font size with unit.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentStyleFontSize')

const GoogleCloudDocumentaiV1beta3DocumentStyleSchema = z
  .object({
    backgroundColor: GoogleTypeColorSchema.exactOptional().openapi({
      description: 'Text background color.',
    }),
    color: GoogleTypeColorSchema.exactOptional().openapi({ description: 'Text color.' }),
    fontFamily: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Font family such as `Arial`, `Times New Roman`. https://www.w3schools.com/cssref/pr_font_font-family.asp',
      }),
    fontSize: GoogleCloudDocumentaiV1beta3DocumentStyleFontSizeSchema.exactOptional().openapi({
      description: 'Font size.',
    }),
    fontWeight: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Font weight. Possible values are normal, bold, bolder, and lighter. https://www.w3schools.com/cssref/pr_font_weight.asp',
      }),
    textAnchor: GoogleCloudDocumentaiV1beta3DocumentTextAnchorSchema.exactOptional().openapi({
      description: 'Text anchor indexing into the Document.text.',
    }),
    textDecoration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text decoration. Follows CSS standard. https://www.w3schools.com/cssref/pr_text_text-decoration.asp',
      }),
    textStyle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text style. Possible values are normal, italic, and oblique. https://www.w3schools.com/cssref/pr_font_font-style.asp',
      }),
  })
  .openapi({
    description:
      'Annotation for common text style attributes. This adheres to CSS conventions as much as possible.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentStyle')

const GoogleCloudDocumentaiV1beta3DocumentSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Inline document content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.',
      }),
    entities: z
      .array(GoogleCloudDocumentaiV1beta3DocumentEntitySchema)
      .exactOptional()
      .openapi({
        description:
          'A list of entities detected on Document.text. For document shards, entities in this list may cross shard boundaries.',
      }),
    entityRelations: z
      .array(GoogleCloudDocumentaiV1beta3DocumentEntityRelationSchema)
      .exactOptional()
      .openapi({ description: 'Placeholder. Relationship among Document.entities.' }),
    error: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'Any error that occurred while processing this document.',
    }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An IANA published MIME type (also referred to as media type). For more information, see https://www.iana.org/assignments/media-types/media-types.xhtml.',
      }),
    pages: z
      .array(GoogleCloudDocumentaiV1beta3DocumentPageSchema)
      .exactOptional()
      .openapi({ description: 'Visual page layout for the Document.' }),
    revisions: z
      .array(GoogleCloudDocumentaiV1beta3DocumentRevisionSchema)
      .exactOptional()
      .openapi({ description: 'Placeholder. Revision history of this document.' }),
    shardInfo: GoogleCloudDocumentaiV1beta3DocumentShardInfoSchema.exactOptional().openapi({
      description:
        'Information about the sharding if this document is sharded part of a larger document. If the document is not sharded, this message is not specified.',
    }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. UTF-8 encoded text in reading order from the document.' }),
    textChanges: z
      .array(GoogleCloudDocumentaiV1beta3DocumentTextChangeSchema)
      .exactOptional()
      .openapi({
        description:
          'Placeholder. A list of text corrections made to Document.text. This is usually used for annotating corrections to OCR mistakes. Text changes for a given revision may not overlap with each other.',
      }),
    textStyles: z
      .array(GoogleCloudDocumentaiV1beta3DocumentStyleSchema)
      .exactOptional()
      .openapi({ description: 'Styles for the Document.text.' }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Currently supports Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info.',
      }),
  })
  .openapi({
    description:
      'Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3Document')

const GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValuesSchema = z
  .object({
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The individual values that this enum values type can include.' }),
  })
  .openapi({ description: 'Defines the a list of enum values.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues')

const GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertySchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the property. Follows the same guidelines as the EntityType name.',
      }),
    occurrenceType: z
      .enum([
        'OCCURRENCE_TYPE_UNSPECIFIED',
        'OPTIONAL_ONCE',
        'OPTIONAL_MULTIPLE',
        'REQUIRED_ONCE',
        'REQUIRED_MULTIPLE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Occurrence type limits the number of instances an entity type appears in the document.',
      }),
    valueType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A reference to the value type of the property. This type is subject to the same conventions as the `Entity.base_types` field.',
      }),
  })
  .openapi({ description: 'Defines properties that can be part of the entity type.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty')

const GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeSchema = z
  .object({
    baseTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The entity type that this type is derived from. For now, one and only one should be set.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'User defined name for the type.' }),
    enumValues:
      GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValuesSchema.exactOptional().openapi({
        description:
          'If specified, lists all the possible values for this entity. This should not be more than a handful of values. If the number of values is >10 or could change frequently use the `EntityType.value_ontology` field and specify a list of all possible values in a value ontology file.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Name of the type. It must be unique within the schema file and cannot be a 'Common Type'. Besides that we use the following naming conventions: - *use `snake_casing`* - name matching is case-sensitive - Maximum 64 characters. - Must start with a letter. - Allowed characters: ASCII letters `[a-z0-9_-]`. (For backward compatibility internal infrastructure and tooling can handle any ascii character) - The `/` is sometimes used to denote a property of a type. For example `line_item/amount`. This convention is deprecated, but will still be honored for backward compatibility.",
      }),
    properties: z
      .array(GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertySchema)
      .exactOptional()
      .openapi({ description: 'Description the nested structure, or composition of an entity.' }),
  })
  .openapi({
    description:
      'EntityType is the wrapper of a label of the corresponding model with detailed attributes and limitations for entity-based processors. Multiple types can also compose a dependency tree to represent nested types.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType')

const GoogleCloudDocumentaiV1beta3DocumentSchemaMetadataSchema = z
  .object({
    documentAllowMultipleLabels: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, on a given page, there can be multiple `document` annotations covering it.',
      }),
    documentSplitter: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, a `document` entity type can be applied to subdocument ( splitting). Otherwise, it can only be applied to the entire document (classification).',
      }),
    prefixedNamingOnProperties: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If set, all the nested entities must be prefixed with the parents.',
      }),
    skipNamingValidation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set, we will skip the naming format validation in the schema. So the string values in `DocumentSchema.EntityType.name` and `DocumentSchema.EntityType.Property.name` will not be checked.',
      }),
  })
  .openapi({ description: 'Metadata for global schema behavior.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata')

const GoogleCloudDocumentaiV1beta3DocumentSchemaSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'Description of the schema.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name to show to users.' }),
    entityTypes: z
      .array(GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeSchema)
      .exactOptional()
      .openapi({ description: 'Entity types of the schema.' }),
    metadata: GoogleCloudDocumentaiV1beta3DocumentSchemaMetadataSchema.exactOptional().openapi({
      description: 'Metadata of the schema.',
    }),
  })
  .openapi({
    description: 'The schema defines the output of the processed document by a processor.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3DocumentSchema')

const GoogleCloudDocumentaiV1beta3EnableProcessorMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiV1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for enable processor method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3EnableProcessorMetadata')

const GoogleCloudDocumentaiV1beta3EnableProcessorRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for the enable processor method.' })
  .openapi('GoogleCloudDocumentaiV1beta3EnableProcessorRequest')

const GoogleCloudDocumentaiV1beta3EnableProcessorResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response message for the enable processor method. Intentionally empty proto for adding fields in future.',
  })
  .openapi('GoogleCloudDocumentaiV1beta3EnableProcessorResponse')

const GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiV1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({ description: 'Metadata of the EvaluateProcessorVersion method.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionMetadata')

const GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionRequestSchema = z
  .object({
    evaluationDocuments:
      GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfigSchema.exactOptional().openapi({
        description:
          "Optional. The documents used in the evaluation. If unspecified, use the processor's dataset as evaluation input.",
      }),
  })
  .openapi({
    description: 'Evaluates the given ProcessorVersion against the supplied documents.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest')

const GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionResponseSchema = z
  .object({
    evaluation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The resource name of the created evaluation.' }),
  })
  .openapi({ description: 'Metadata of the EvaluateProcessorVersion method.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionResponse')

const GoogleCloudDocumentaiV1beta3EvaluationMetricsSchema = z
  .object({
    f1Score: z.float32().exactOptional().openapi({ description: 'The calculated f1 score.' }),
    falseNegativesCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The amount of false negatives.' }),
    falsePositivesCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The amount of false positives.' }),
    groundTruthDocumentCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The amount of documents with a ground truth occurrence.' }),
    groundTruthOccurrencesCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The amount of occurrences in ground truth documents.' }),
    precision: z.float32().exactOptional().openapi({ description: 'The calculated precision.' }),
    predictedDocumentCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The amount of documents with a predicted occurrence.' }),
    predictedOccurrencesCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The amount of occurrences in predicted documents.' }),
    recall: z.float32().exactOptional().openapi({ description: 'The calculated recall.' }),
    totalDocumentsCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The amount of documents that had an occurrence of this label.' }),
    truePositivesCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The amount of true positives.' }),
  })
  .openapi({
    description: 'Evaluation metrics, either in aggregate or about a specific entity.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3EvaluationMetrics')

const GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetricsSchema = z
  .object({
    confidenceLevel: z.float32().exactOptional().openapi({ description: 'The confidence level.' }),
    metrics: GoogleCloudDocumentaiV1beta3EvaluationMetricsSchema.exactOptional().openapi({
      description: 'The metrics at the specific confidence level.',
    }),
  })
  .openapi({ description: 'Evaluations metrics, at a specific confidence level.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics')

const GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsSchema = z
  .object({
    auprc: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The calculated area under the precision recall curve (AUPRC), computed by integrating over all confidence thresholds.',
      }),
    auprcExact: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The AUPRC for metrics with fuzzy matching disabled, i.e., exact matching only.',
      }),
    confidenceLevelMetrics: z
      .array(GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetricsSchema)
      .exactOptional()
      .openapi({ description: 'Metrics across confidence levels with fuzzy matching enabled.' }),
    confidenceLevelMetricsExact: z
      .array(GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetricsSchema)
      .exactOptional()
      .openapi({ description: 'Metrics across confidence levels with only exact matching.' }),
    estimatedCalibrationError: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The Estimated Calibration Error (ECE) of the confidence of the predicted entities.',
      }),
    estimatedCalibrationErrorExact: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The ECE for the predicted entities with fuzzy matching disabled, i.e., exact matching only.',
      }),
    metricsType: z
      .enum(['METRICS_TYPE_UNSPECIFIED', 'AGGREGATE'])
      .exactOptional()
      .openapi({ description: 'The metrics type for the label.' }),
  })
  .openapi({ description: 'Metrics across multiple confidence levels.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics')

const GoogleCloudDocumentaiV1beta3EvaluationCountersSchema = z
  .object({
    evaluatedDocumentsCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'How many documents were used in the evaluation.' }),
    failedDocumentsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'How many documents were not included in the evaluation as Document AI failed to process them.',
      }),
    inputDocumentsCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'How many documents were sent for evaluation.' }),
    invalidDocumentsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "How many documents were not included in the evaluation as they didn't pass validation.",
      }),
  })
  .openapi({ description: 'Evaluation counters for the documents that were used.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3EvaluationCounters')

const GoogleCloudDocumentaiV1beta3EvaluationSchema = z
  .object({
    allEntitiesMetrics:
      GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsSchema.exactOptional().openapi({
        description: 'Metrics for all the entities in aggregate.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time that the evaluation was created.' }),
    documentCounters: GoogleCloudDocumentaiV1beta3EvaluationCountersSchema.exactOptional().openapi({
      description: 'Counters for the documents used in the evaluation.',
    }),
    entityMetrics: z
      .record(z.string(), GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsSchema)
      .exactOptional()
      .openapi({ description: 'Metrics across confidence levels, for different entities.' }),
    kmsKeyName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The KMS key name used for encryption.' }),
    kmsKeyVersionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The KMS key version with which data is encrypted.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the evaluation. Format: `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processor_version}/evaluations/{evaluation}`',
      }),
  })
  .openapi({ description: "An evaluation of a ProcessorVersion's performance.", required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3Evaluation')

const GoogleCloudDocumentaiV1beta3EvaluationReferenceSchema = z
  .object({
    aggregateMetrics: GoogleCloudDocumentaiV1beta3EvaluationMetricsSchema.exactOptional().openapi({
      description: 'An aggregate of the statistics for the evaluation with fuzzy matching on.',
    }),
    aggregateMetricsExact:
      GoogleCloudDocumentaiV1beta3EvaluationMetricsSchema.exactOptional().openapi({
        description: 'An aggregate of the statistics for the evaluation with fuzzy matching off.',
      }),
    evaluation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The resource name of the evaluation.' }),
    operation: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The resource name of the Long Running Operation for the evaluation.',
      }),
  })
  .openapi({
    description: 'Gives a short summary of an evaluation, and links to the evaluation itself.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3EvaluationReference')

const GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfoSchema = z
  .object({
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The location id, currently must be one of [us, eu].' }),
  })
  .openapi({
    description: 'The location information about where the processor is available.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo')

const GoogleCloudDocumentaiV1beta3ProcessorTypeSchema = z
  .object({
    allowCreation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the processor type allows creation. If true, users can create a processor of this processor type. Otherwise, users need to request access.',
      }),
    availableLocations: z
      .array(GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfoSchema)
      .exactOptional()
      .openapi({ description: 'The locations in which this processor is available.' }),
    category: z
      .string()
      .exactOptional()
      .openapi({ description: 'The processor category, used by UI to group processor types.' }),
    launchStage: z
      .enum([
        'LAUNCH_STAGE_UNSPECIFIED',
        'UNIMPLEMENTED',
        'PRELAUNCH',
        'EARLY_ACCESS',
        'ALPHA',
        'BETA',
        'GA',
        'DEPRECATED',
      ])
      .exactOptional()
      .openapi({ description: 'Launch stage of the processor type' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the processor type. Format: `projects/{project}/processorTypes/{processor_type}`',
      }),
    sampleDocumentUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A set of Cloud Storage URIs of sample documents for this processor.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The processor type, e.g., `OCR_PROCESSOR`, `INVOICE_PROCESSOR`, etc.',
      }),
  })
  .openapi({
    description:
      'A processor type is responsible for performing a certain document understanding task on a certain type of document.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3ProcessorType')

const GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponseSchema = z
  .object({
    processorTypes: z
      .array(GoogleCloudDocumentaiV1beta3ProcessorTypeSchema)
      .exactOptional()
      .openapi({ description: 'The list of processor types.' }),
  })
  .openapi({ description: 'Response message for fetch processor types.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse')

const GoogleCloudDocumentaiV1beta3ImportProcessorVersionMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiV1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata for the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for the ImportProcessorVersion method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3ImportProcessorVersionMetadata')

const GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequestSchema = z
  .object({
    processorVersionSource: z
      .string()
      .exactOptional()
      .openapi({ description: 'The source processor version to import from.' }),
  })
  .openapi({
    description:
      "The request message for the ImportProcessorVersion method. This method requires source processor version and destination processor are in the same location. This method requires Document AI Service Agent of the destination project in the source project's IAM with [Document AI Editor role](https://cloud.google.com/document-ai/docs/access-control/iam-roles). The destination project is specified as part of the `parent` field. The source project is specified as part of `source` field. The Service Agent for Document AI can be found in https://cloud.google.com/iam/docs/service-agents.",
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequest')

const GoogleCloudDocumentaiV1beta3ImportProcessorVersionResponseSchema = z
  .object({
    processorVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The destination processor version name.' }),
  })
  .openapi({
    description: 'The response message for the ImportProcessorVersion method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3ImportProcessorVersionResponse')

const GoogleCloudDocumentaiV1beta3ListEvaluationsResponseSchema = z
  .object({
    evaluations: z
      .array(GoogleCloudDocumentaiV1beta3EvaluationSchema)
      .exactOptional()
      .openapi({ description: 'The evaluations requested.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'The response from ListEvaluations.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3ListEvaluationsResponse')

const GoogleCloudDocumentaiV1beta3ListProcessorTypesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Points to the next page, otherwise empty.' }),
    processorTypes: z
      .array(GoogleCloudDocumentaiV1beta3ProcessorTypeSchema)
      .exactOptional()
      .openapi({ description: 'The processor types.' }),
  })
  .openapi({ description: 'Response message for list processor types.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse')

const GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfoSchema = z
  .object({
    deprecationTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which this processor version will be deprecated.' }),
    replacementProcessorVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If set, the processor version that will be used as a replacement.',
      }),
  })
  .openapi({
    description: 'Information about the upcoming deprecation of this processor version.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo')

const GoogleCloudDocumentaiV1beta3ProcessorVersionSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the processor version was created.' }),
    deprecationInfo:
      GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfoSchema.exactOptional().openapi({
        description: 'If set, information about the eventual deprecation of this version.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the processor version.' }),
    documentSchema: GoogleCloudDocumentaiV1beta3DocumentSchemaSchema.exactOptional().openapi({
      description: 'The schema of the processor version. Describes the output.',
    }),
    googleManaged: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Denotes that this ProcessorVersion is managed by google.' }),
    kmsKeyName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The KMS key name used for encryption.' }),
    kmsKeyVersionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The KMS key version with which data is encrypted.' }),
    latestEvaluation: GoogleCloudDocumentaiV1beta3EvaluationReferenceSchema.exactOptional().openapi(
      { description: 'The most recently invoked evaluation for the processor version.' },
    ),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the processor version. Format: `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processor_version}`',
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'DEPLOYED',
        'DEPLOYING',
        'UNDEPLOYED',
        'UNDEPLOYING',
        'CREATING',
        'DELETING',
        'FAILED',
        'IMPORTING',
      ])
      .exactOptional()
      .openapi({ description: 'The state of the processor version.' }),
  })
  .openapi({
    description:
      "A processor version is an implementation of a processor. Each processor can have multiple versions, pre-trained by Google internally or up-trained by the customer. At a time, a processor can only have one default version version. So the processor's behavior (when processing documents) is defined by a default version",
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3ProcessorVersion')

const GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Points to the next processor, otherwise empty.' }),
    processorVersions: z
      .array(GoogleCloudDocumentaiV1beta3ProcessorVersionSchema)
      .exactOptional()
      .openapi({ description: 'The list of processors.' }),
  })
  .openapi({ description: 'Response message for list processors.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse')

const GoogleCloudDocumentaiV1beta3ProcessorSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the processor was created.' }),
    defaultProcessorVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default processor version.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the processor.' }),
    kmsKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The KMS key used for encryption/decryption in CMEK scenarios. See https://cloud.google.com/security-key-management.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. The resource name of the processor. Format: `projects/{project}/locations/{location}/processors/{processor}`',
        readOnly: true,
      }),
    processEndpoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. The http endpoint that can be called to invoke processing.',
        readOnly: true,
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'ENABLED',
        'DISABLED',
        'ENABLING',
        'DISABLING',
        'CREATING',
        'FAILED',
        'DELETING',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The state of the processor.', readOnly: true }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The processor type, e.g., `OCR_PROCESSOR`, `INVOICE_PROCESSOR`, etc. To get a list of processors types, see FetchProcessorTypes.',
      }),
  })
  .openapi({
    description:
      'The first-class citizen for Document AI. Each processor defines how to extract structural information from a document.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3Processor')

const GoogleCloudDocumentaiV1beta3ListProcessorsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Points to the next processor, otherwise empty.' }),
    processors: z
      .array(GoogleCloudDocumentaiV1beta3ProcessorSchema)
      .exactOptional()
      .openapi({ description: 'The list of processors.' }),
  })
  .openapi({ description: 'Response message for list processors.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3ListProcessorsResponse')

const GoogleCloudDocumentaiV1beta3RawDocumentSchema = z
  .object({
    content: z.string().exactOptional().openapi({ description: 'Inline document content.' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An IANA MIME type (RFC6838) indicating the nature and format of the content.',
      }),
  })
  .openapi({ description: 'Payload message of raw document content (bytes).', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3RawDocument')

const GoogleCloudDocumentaiV1beta3ProcessRequestSchema = z
  .object({
    document: GoogleCloudDocumentaiV1beta3DocumentSchema.exactOptional().openapi({
      description: 'The document payload, the [content] and [mime_type] fields must be set.',
    }),
    fieldMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Specifies which fields to include in ProcessResponse's document. Only supports top level document and pages field so it must be in the form of `{document_field_name}` or `pages.{page_field_name}`.",
      }),
    inlineDocument: GoogleCloudDocumentaiV1beta3DocumentSchema.exactOptional().openapi({
      description: 'An inline document proto.',
    }),
    processOptions: GoogleCloudDocumentaiV1beta3ProcessOptionsSchema.exactOptional().openapi({
      description: 'Inference-time options for the process API',
    }),
    rawDocument: GoogleCloudDocumentaiV1beta3RawDocumentSchema.exactOptional().openapi({
      description: 'A raw document content (bytes).',
    }),
    skipHumanReview: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether Human Review feature should be skipped for this request. Default to false.',
      }),
  })
  .openapi({ description: 'Request message for the process document method.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3ProcessRequest')

const GoogleCloudDocumentaiV1beta3ProcessResponseSchema = z
  .object({
    document: GoogleCloudDocumentaiV1beta3DocumentSchema.exactOptional().openapi({
      description: "The document payload, will populate fields based on the processor's behavior.",
    }),
    humanReviewOperation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the operation triggered by the processed document. If the human review process is not triggered, this field will be empty. It has the same response type and metadata as the long running operation returned by ReviewDocument method.',
      }),
    humanReviewStatus: GoogleCloudDocumentaiV1beta3HumanReviewStatusSchema.exactOptional().openapi({
      description: 'The status of human review on the processed document.',
    }),
  })
  .openapi({ description: 'Response message for the process document method.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3ProcessResponse')

const GoogleCloudDocumentaiV1beta3ReviewDocumentOperationMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiV1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The creation time of the operation.' }),
    questionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Crowd Compute question ID.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'RUNNING', 'CANCELLING', 'SUCCEEDED', 'FAILED', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: 'Used only when Operation.done is false.' }),
    stateMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A message providing more details about the current state of processing. For example, the error message if the operation is failed.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last update time of the operation.' }),
  })
  .openapi({
    description: 'The long running operation metadata for review document method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3ReviewDocumentOperationMetadata')

const GoogleCloudDocumentaiV1beta3ReviewDocumentRequestSchema = z
  .object({
    document: GoogleCloudDocumentaiV1beta3DocumentSchema.exactOptional().openapi({
      description: 'The document that needs human review.',
    }),
    documentSchema: GoogleCloudDocumentaiV1beta3DocumentSchemaSchema.exactOptional().openapi({
      description: 'The document schema of the human review task.',
    }),
    enableSchemaValidation: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the validation should be performed on the ad-hoc review request.',
      }),
    inlineDocument: GoogleCloudDocumentaiV1beta3DocumentSchema.exactOptional().openapi({
      description: 'An inline document proto.',
    }),
    priority: z
      .enum(['DEFAULT', 'URGENT'])
      .exactOptional()
      .openapi({ description: 'The priority of the human review task.' }),
  })
  .openapi({ description: 'Request message for review document method.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3ReviewDocumentRequest')

const GoogleCloudDocumentaiV1beta3ReviewDocumentResponseSchema = z
  .object({
    gcsDestination: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Cloud Storage uri for the human reviewed document if the review is succeeded.',
      }),
    rejectionReason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason why the review is rejected by reviewer.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'REJECTED', 'SUCCEEDED'])
      .exactOptional()
      .openapi({ description: 'The state of the review operation.' }),
  })
  .openapi({ description: 'Response message for review document method.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3ReviewDocumentResponse')

const GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiV1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for set default processor version method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionMetadata')

const GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequestSchema = z
  .object({
    defaultProcessorVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name of child ProcessorVersion to use as default. Format: `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{version}`',
      }),
  })
  .openapi({
    description: 'Request message for the set default processor version method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest')

const GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionResponseSchema = z
  .object({})
  .openapi({ description: 'Response message for set default processor version method.' })
  .openapi('GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionResponse')

const GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidationSchema = z
  .object({
    datasetErrorCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of dataset errors.' }),
    datasetErrors: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Error information for the dataset as a whole. A maximum of 10 dataset errors will be returned. A single dataset error is terminal for training.',
      }),
    documentErrorCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of document errors.' }),
    documentErrors: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Error information pertaining to specific documents. A maximum of 10 document errors will be returned. Any document with errors will not be used throughout training.',
      }),
  })
  .openapi({
    description:
      'The dataset validation information. This includes any and all errors with documents and the dataset.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidation')

const GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiV1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
    testDatasetValidation:
      GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidationSchema.exactOptional().openapi(
        { description: 'The test dataset validation information.' },
      ),
    trainingDatasetValidation:
      GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidationSchema.exactOptional().openapi(
        { description: 'The training dataset validation information.' },
      ),
  })
  .openapi({
    description: 'The metadata that represents a processor version being created.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadata')

const GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputDataSchema = z
  .object({
    testDocuments:
      GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfigSchema.exactOptional().openapi({
        description: 'The documents used for testing the trained version.',
      }),
    trainingDocuments:
      GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfigSchema.exactOptional().openapi({
        description: 'The documents used for training the new version.',
      }),
  })
  .openapi({ description: 'The input data used to train a new `ProcessorVersion`.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData')

const GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestSchema = z
  .object({
    baseProcessorVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The processor version to use as a base for training. This processor version must be a child of `parent`. Format: `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`.',
      }),
    documentSchema: GoogleCloudDocumentaiV1beta3DocumentSchemaSchema.exactOptional().openapi({
      description: 'Optional. The schema the processor version will be trained with.',
    }),
    inputData:
      GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputDataSchema.exactOptional().openapi(
        { description: 'Optional. The input data used to train the `ProcessorVersion`.' },
      ),
    processorVersion: GoogleCloudDocumentaiV1beta3ProcessorVersionSchema.exactOptional().openapi({
      description: 'Required. The processor version to be created.',
    }),
  })
  .openapi({
    description: 'Request message for the create processor version method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest')

const GoogleCloudDocumentaiV1beta3TrainProcessorVersionResponseSchema = z
  .object({
    processorVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The resource name of the processor version produced by training.' }),
  })
  .openapi({ description: 'The response for the TrainProcessorVersion method.', required: [] })
  .openapi('GoogleCloudDocumentaiV1beta3TrainProcessorVersionResponse')

const GoogleCloudDocumentaiV1beta3UndeployProcessorVersionMetadataSchema = z
  .object({
    commonMetadata:
      GoogleCloudDocumentaiV1beta3CommonOperationMetadataSchema.exactOptional().openapi({
        description: 'The basic metadata of the long running operation.',
      }),
  })
  .openapi({
    description: 'The long running operation metadata for the undeploy processor version method.',
    required: [],
  })
  .openapi('GoogleCloudDocumentaiV1beta3UndeployProcessorVersionMetadata')

const GoogleCloudDocumentaiV1beta3UndeployProcessorVersionRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for the undeploy processor version method.' })
  .openapi('GoogleCloudDocumentaiV1beta3UndeployProcessorVersionRequest')

const GoogleCloudDocumentaiV1beta3UndeployProcessorVersionResponseSchema = z
  .object({})
  .openapi({ description: 'Response message for the undeploy processor version method.' })
  .openapi('GoogleCloudDocumentaiV1beta3UndeployProcessorVersionResponse')

const GoogleCloudLocationLocationSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The friendly name for this location, typically a nearby city name. For example, "Tokyo".',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical id for this location. For example: `"us-east1"`.' }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata. For example the available capacity at the given location.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`',
      }),
  })
  .openapi({
    description: 'A resource that represents Google Cloud Platform location.',
    required: [],
  })
  .openapi('GoogleCloudLocationLocation')

const GoogleCloudLocationListLocationsResponseSchema = z
  .object({
    locations: z
      .array(GoogleCloudLocationLocationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of locations that matches the specified filter in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
  })
  .openapi({ description: 'The response message for Locations.ListLocations.', required: [] })
  .openapi('GoogleCloudLocationListLocationsResponse')

const GoogleLongrunningOperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('GoogleLongrunningOperation')

const GoogleLongrunningListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(GoogleLongrunningOperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('GoogleLongrunningListOperationsResponse')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1beta3HumanReviewConfigReviewDocumentRoute = createRoute({
  method: 'post',
  path: '/v1beta3/{humanReviewConfig}:reviewDocument',
  tags: ['projects'],
  description:
    'Send a document for Human Review. The input document should be processed by the specified processor.',
  operationId: 'documentai.projects.locations.processors.humanReviewConfig.reviewDocument',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      humanReviewConfig: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the HumanReviewConfig that the document will be reviewed with.',
            in: 'path',
            name: 'humanReviewConfig',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudDocumentaiV1beta3ReviewDocumentRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta3NameRoute = createRoute({
  method: 'get',
  path: '/v1beta3/{name}',
  tags: ['projects'],
  description: 'Gets a processor type detail.',
  operationId: 'documentai.projects.locations.processorTypes.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list filter.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The processor type resource name.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDocumentaiV1beta3ProcessorTypeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1beta3NameRoute = createRoute({
  method: 'delete',
  path: '/v1beta3/{name}',
  tags: ['projects'],
  description:
    'Deletes the processor version, all artifacts under the processor version will be deleted.',
  operationId: 'documentai.projects.locations.processors.processorVersions.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The processor version resource name to be deleted.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta3NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1beta3/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'documentai.projects.locations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of results to return. If not set, the service selects a default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The resource that owns the locations collection, if applicable.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudLocationListLocationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta3NameBatchProcessRoute = createRoute({
  method: 'post',
  path: '/v1beta3/{name}:batchProcess',
  tags: ['projects'],
  description:
    'LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.',
  operationId: 'documentai.projects.locations.processors.processorVersions.batchProcess',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of Processor or ProcessorVersion. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudDocumentaiV1beta3BatchProcessRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta3NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1beta3/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'documentai.projects.locations.operations.cancel',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta3NameDeployRoute = createRoute({
  method: 'post',
  path: '/v1beta3/{name}:deploy',
  tags: ['projects'],
  description: 'Deploys the processor version.',
  operationId: 'documentai.projects.locations.processors.processorVersions.deploy',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The processor version resource name to be deployed.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudDocumentaiV1beta3DeployProcessorVersionRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta3NameDisableRoute = createRoute({
  method: 'post',
  path: '/v1beta3/{name}:disable',
  tags: ['projects'],
  description: 'Disables a processor',
  operationId: 'documentai.projects.locations.processors.disable',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The processor resource name to be disabled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudDocumentaiV1beta3DisableProcessorRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta3NameEnableRoute = createRoute({
  method: 'post',
  path: '/v1beta3/{name}:enable',
  tags: ['projects'],
  description: 'Enables a processor',
  operationId: 'documentai.projects.locations.processors.enable',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The processor resource name to be enabled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudDocumentaiV1beta3EnableProcessorRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta3NameProcessRoute = createRoute({
  method: 'post',
  path: '/v1beta3/{name}:process',
  tags: ['projects'],
  description: 'Processes a single document.',
  operationId: 'documentai.projects.locations.processors.processorVersions.process',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the Processor or ProcessorVersion to use for processing. If a Processor is specified, the server will use its default version. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudDocumentaiV1beta3ProcessRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDocumentaiV1beta3ProcessResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta3NameUndeployRoute = createRoute({
  method: 'post',
  path: '/v1beta3/{name}:undeploy',
  tags: ['projects'],
  description: 'Undeploys the processor version.',
  operationId: 'documentai.projects.locations.processors.processorVersions.undeploy',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The processor version resource name to be undeployed.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudDocumentaiV1beta3UndeployProcessorVersionRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta3ParentEvaluationsRoute = createRoute({
  method: 'get',
  path: '/v1beta3/{parent}/evaluations',
  tags: ['projects'],
  description: 'Retrieves a set of evaluations for a given processor version.',
  operationId: 'documentai.projects.locations.processors.processorVersions.evaluations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The standard list page size. If unspecified, at most 5 evaluations will be returned. The maximum value is 100; values above 100 will be coerced to 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListEvaluations` call. Provide this to retrieve the subsequent page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the ProcessorVersion to list evaluations for. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDocumentaiV1beta3ListEvaluationsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta3ParentProcessorTypesRoute = createRoute({
  method: 'get',
  path: '/v1beta3/{parent}/processorTypes',
  tags: ['projects'],
  description: 'Lists the processor types that exist.',
  operationId: 'documentai.projects.locations.processorTypes.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of processor types to return. If unspecified, at most 100 processor types will be returned. The maximum value is 500; values above 500 will be coerced to 500.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to retrieve the next page of results, empty if at the end of the list.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The location of processor type to list. The available processor types may depend on the allow-listing on projects. Format: `projects/{project}/locations/{location}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudDocumentaiV1beta3ListProcessorTypesResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta3ParentProcessorVersionsRoute = createRoute({
  method: 'get',
  path: '/v1beta3/{parent}/processorVersions',
  tags: ['projects'],
  description: 'Lists all versions of a processor.',
  operationId: 'documentai.projects.locations.processors.processorVersions.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of processor versions to return. If unspecified, at most 10 processor versions will be returned. The maximum value is 20; values above 20 will be coerced to 20.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'We will return the processor versions sorted by creation time. The page token will point to the next processor version.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent (project, location and processor) to list all versions. Format: `projects/{project}/locations/{location}/processors/{processor}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta3ParentProcessorVersionsImportProcessorVersionRoute = createRoute({
  method: 'post',
  path: '/v1beta3/{parent}/processorVersions:importProcessorVersion',
  tags: ['projects'],
  description: 'Imports a processor version from source processor version.',
  operationId: 'documentai.projects.locations.processors.processorVersions.importProcessorVersion',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The destination processor name to create the processor version in. Format: `projects/{project}/locations/{location}/processors/{processor}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta3ParentProcessorVersionsTrainRoute = createRoute({
  method: 'post',
  path: '/v1beta3/{parent}/processorVersions:train',
  tags: ['projects'],
  description:
    'Trains a new processor version. Operation metadata is returned as cloud_documentai_core.TrainProcessorVersionMetadata.',
  operationId: 'documentai.projects.locations.processors.processorVersions.train',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent (project, location and processor) to create the new version for. Format: `projects/{project}/locations/{location}/processors/{processor}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta3ParentProcessorsRoute = createRoute({
  method: 'get',
  path: '/v1beta3/{parent}/processors',
  tags: ['projects'],
  description: 'Lists all processors which belong to this project.',
  operationId: 'documentai.projects.locations.processors.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of processors to return. If unspecified, at most 50 processors will be returned. The maximum value is 100; values above 100 will be coerced to 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'We will return the processors sorted by creation time. The page token will point to the next processor.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent (project and location) which owns this collection of Processors. Format: `projects/{project}/locations/{location}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDocumentaiV1beta3ListProcessorsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta3ParentProcessorsRoute = createRoute({
  method: 'post',
  path: '/v1beta3/{parent}/processors',
  tags: ['projects'],
  description:
    'Creates a processor from the type processor that the user chose. The processor will be at "ENABLED" state by default after its creation.',
  operationId: 'documentai.projects.locations.processors.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent (project and location) under which to create the processor. Format: `projects/{project}/locations/{location}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudDocumentaiV1beta3ProcessorSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDocumentaiV1beta3ProcessorSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta3ParentFetchProcessorTypesRoute = createRoute({
  method: 'get',
  path: '/v1beta3/{parent}:fetchProcessorTypes',
  tags: ['projects'],
  description:
    'Fetches processor types. Note that we do not use ListProcessorTypes here because it is not paginated.',
  operationId: 'documentai.projects.locations.fetchProcessorTypes',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The project of processor type to list. The available processor types may depend on the allow-listing on projects. Format: `projects/{project}/locations/{location}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta3ProcessorVersionEvaluateProcessorVersionRoute = createRoute({
  method: 'post',
  path: '/v1beta3/{processorVersion}:evaluateProcessorVersion',
  tags: ['projects'],
  description: 'Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.',
  operationId:
    'documentai.projects.locations.processors.processorVersions.evaluateProcessorVersion',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      processorVersion: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the ProcessorVersion to evaluate. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`',
            in: 'path',
            name: 'processorVersion',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta3ProcessorSetDefaultProcessorVersionRoute = createRoute({
  method: 'post',
  path: '/v1beta3/{processor}:setDefaultProcessorVersion',
  tags: ['projects'],
  description:
    'Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.',
  operationId: 'documentai.projects.locations.processors.setDefaultProcessorVersion',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      processor: z
        .string()
        .openapi({
          param: {
            description: 'Required. The resource name of the Processor to change default version.',
            in: 'path',
            name: 'processor',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
