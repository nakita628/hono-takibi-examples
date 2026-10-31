import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudRetailV2alphaCustomAttributeSchema = z
  .object({
    indexable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "This field is normally ignored unless AttributesConfig.attribute_config_level of the Catalog is set to the deprecated 'PRODUCT_LEVEL_ATTRIBUTE_CONFIG' mode. For information about product-level attribute configuration, see [Configuration modes](https://cloud.google.com/retail/docs/attribute-config#config-modes). If true, custom attribute values are indexed, so that they can be filtered, faceted or boosted in SearchService.Search. This field is ignored in a UserEvent. See SearchRequest.filter, SearchRequest.facet_specs and SearchRequest.boost_spec for more details.",
      }),
    numbers: z
      .array(z.float64())
      .exactOptional()
      .openapi({
        description:
          'The numerical values of this custom attribute. For example, `[2.3, 15.4]` when the key is "lengths_cm". Exactly one of text or numbers should be set. Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
    searchable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "This field is normally ignored unless AttributesConfig.attribute_config_level of the Catalog is set to the deprecated 'PRODUCT_LEVEL_ATTRIBUTE_CONFIG' mode. For information about product-level attribute configuration, see [Configuration modes](https://cloud.google.com/retail/docs/attribute-config#config-modes). If true, custom attribute values are searchable by text queries in SearchService.Search. This field is ignored in a UserEvent. Only set if type text is set. Otherwise, a INVALID_ARGUMENT error is returned.",
      }),
    text: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The textual values of this custom attribute. For example, `["yellow", "green"]` when the key is "color". Empty string is not allowed. Otherwise, an INVALID_ARGUMENT error is returned. Exactly one of text or numbers should be set. Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
  })
  .openapi({
    description: 'A custom attribute that is not explicitly modeled in Product.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaCustomAttribute')

const GoogleCloudRetailV2alphaAudienceSchema = z
  .object({
    ageGroups: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The age groups of the audience. Strongly encouraged to use the standard values: "newborn" (up to 3 months old), "infant" (3–12 months old), "toddler" (1–5 years old), "kids" (5–13 years old), "adult" (typically teens or older). At most 5 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [age_group](https://support.google.com/merchants/answer/6324463). Schema.org property [Product.audience.suggestedMinAge](https://schema.org/suggestedMinAge) and [Product.audience.suggestedMaxAge](https://schema.org/suggestedMaxAge).',
      }),
    genders: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The genders of the audience. Strongly encouraged to use the standard values: "male", "female", "unisex". At most 5 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [gender](https://support.google.com/merchants/answer/6324479). Schema.org property [Product.audience.suggestedGender](https://schema.org/suggestedGender).',
      }),
  })
  .openapi({ description: "An intended audience of the Product for whom it's sold.", required: [] })
  .openapi('GoogleCloudRetailV2alphaAudience')

const GoogleCloudRetailV2alphaColorInfoSchema = z
  .object({
    colorFamilies: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The standard color families. Strongly recommended to use the following standard color groups: "Red", "Pink", "Orange", "Yellow", "Purple", "Green", "Cyan", "Blue", "Brown", "White", "Gray", "Black" and "Mixed". Normally it is expected to have only 1 color family. May consider using single "Mixed" instead of multiple values. A maximum of 5 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [color](https://support.google.com/merchants/answer/6324487). Schema.org property [Product.color](https://schema.org/color).',
      }),
    colors: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The color display names, which may be different from standard color family names, such as the color aliases used in the website frontend. Normally it is expected to have only 1 color. May consider using single "Mixed" instead of multiple values. A maximum of 75 colors are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [color](https://support.google.com/merchants/answer/6324487). Schema.org property [Product.color](https://schema.org/color).',
      }),
  })
  .openapi({ description: 'The color information of a Product.', required: [] })
  .openapi('GoogleCloudRetailV2alphaColorInfo')

const GoogleCloudRetailV2alphaFulfillmentInfoSchema = z
  .object({
    placeIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The IDs for this type, such as the store IDs for FulfillmentInfo.type.pickup-in-store or the region IDs for FulfillmentInfo.type.same-day-delivery. A maximum of 3000 values are allowed. Each value must be a string with a length limit of 30 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Customers have to map custom types to their display names before rendering UI. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned.',
      }),
  })
  .openapi({
    description:
      'Fulfillment information, such as the store IDs for in-store pickup or region IDs for different shipping methods.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaFulfillmentInfo')

const GoogleCloudRetailV2alphaImageSchema = z
  .object({
    height: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Height of the image in number of pixels. This field must be nonnegative. Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. URI of the image. This field must be a valid UTF-8 encoded URI with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [image_link](https://support.google.com/merchants/answer/6324350). Schema.org property [Product.image](https://schema.org/image).',
      }),
    width: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Width of the image in number of pixels. This field must be nonnegative. Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
  })
  .openapi({
    description:
      'Product image. Recommendations AI and Retail Search do not use product images to improve prediction and search results. However, product images can be returned in results, and are shown in prediction or search previews in the console.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaImage')

const GoogleCloudRetailV2alphaIntervalSchema = z
  .object({
    exclusiveMaximum: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Exclusive upper bound.' }),
    exclusiveMinimum: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Exclusive lower bound.' }),
    maximum: z.float64().exactOptional().openapi({ description: 'Inclusive upper bound.' }),
    minimum: z.float64().exactOptional().openapi({ description: 'Inclusive lower bound.' }),
  })
  .openapi({ description: 'A floating point interval.', required: [] })
  .openapi('GoogleCloudRetailV2alphaInterval')

const GoogleCloudRetailV2alphaPriceInfoPriceRangeSchema = z
  .object({
    originalPrice: GoogleCloudRetailV2alphaIntervalSchema.exactOptional().openapi({
      description:
        'The inclusive Product.pricing_info.original_price internal of all variant Product having the same Product.primary_product_id.',
    }),
    price: GoogleCloudRetailV2alphaIntervalSchema.exactOptional().openapi({
      description:
        'The inclusive Product.pricing_info.price interval of all variant Product having the same Product.primary_product_id.',
    }),
  })
  .openapi({
    description:
      'The price range of all variant Product having the same Product.primary_product_id.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaPriceInfoPriceRange')

const GoogleCloudRetailV2alphaPriceInfoSchema = z
  .object({
    cost: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The costs associated with the sale of a particular product. Used for gross profit reporting. * Profit = price - cost Google Merchant Center property [cost_of_goods_sold](https://support.google.com/merchants/answer/9017895).',
      }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The 3-letter currency code defined in [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html). If this field is an unrecognizable currency code, an INVALID_ARGUMENT error is returned. The Product.Type.VARIANT Products with the same Product.primary_product_id must share the same currency_code. Otherwise, a FAILED_PRECONDITION error is returned.',
      }),
    originalPrice: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Price of the product without any discount. If zero, by default set to be the price. If set, original_price should be greater than or equal to price, otherwise an INVALID_ARGUMENT error is thrown.',
      }),
    price: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Price of the product. Google Merchant Center property [price](https://support.google.com/merchants/answer/6324371). Schema.org property [Offer.price](https://schema.org/price).',
      }),
    priceEffectiveTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timestamp when the price starts to be effective. This can be set as a future timestamp, and the price is only used for search after price_effective_time. If so, the original_price must be set and original_price is used before price_effective_time. Do not set if price is always effective because it will cause additional latency during search.',
      }),
    priceExpireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timestamp when the price stops to be effective. The price is used for search before price_expire_time. If this field is set, the original_price must be set and original_price is used after price_expire_time. Do not set if price is always effective because it will cause additional latency during search.',
      }),
    priceRange: GoogleCloudRetailV2alphaPriceInfoPriceRangeSchema.exactOptional().openapi({
      description:
        'Output only. The price range of all the child Product.Type.VARIANT Products grouped together on the Product.Type.PRIMARY Product. Only populated for Product.Type.PRIMARY Products. Note: This field is OUTPUT_ONLY for ProductService.GetProduct. Do not set this field in API requests.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'The price information of a Product.', required: [] })
  .openapi('GoogleCloudRetailV2alphaPriceInfo')

const GoogleCloudRetailV2alphaLocalInventorySchema = z
  .object({
    attributes: z
      .record(z.string(), GoogleCloudRetailV2alphaCustomAttributeSchema)
      .exactOptional()
      .openapi({
        description:
          'Additional local inventory attributes, for example, store name, promotion tags, etc. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * At most 30 attributes are allowed. * The key must be a UTF-8 encoded string with a length limit of 32 characters. * The key must match the pattern: `a-zA-Z0-9*`. For example, key0LikeThis or KEY_1_LIKE_THIS. * The attribute values must be of the same type (text or number). * Only 1 value is allowed for each attribute. * For text values, the length limit is 256 UTF-8 characters. * The attribute does not support search. The `searchable` field should be unset or set to false. * The max summed total bytes of custom attribute keys and values per product is 5MiB.',
      }),
    fulfillmentTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Input only. Supported fulfillment types. Valid fulfillment type values include commonly used types (such as pickup in store and same day delivery), and custom types. Customers have to map custom types to their display names before rendering UI. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. All the elements must be distinct. Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
    placeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The place ID for the current set of inventory information.' }),
    priceInfo: GoogleCloudRetailV2alphaPriceInfoSchema.exactOptional().openapi({
      description:
        'Product price and cost information. Google Merchant Center property [price](https://support.google.com/merchants/answer/6324371).',
    }),
  })
  .openapi({
    description: 'The inventory information at a place (e.g. a store) identified by a place ID.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaLocalInventory')

const GoogleCloudRetailV2alphaPromotionSchema = z
  .object({
    promotionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Promotion identifier, which is the final component of name. For example, this field is "free_gift", if name is `projects/*/locations/global/catalogs/default_catalog/promotions/free_gift`. The value must be a UTF-8 encoded string with a length limit of 128 characters, and match the pattern: `a-zA-Z*`. For example, id0LikeThis or ID_1_LIKE_THIS. Otherwise, an INVALID_ARGUMENT error is returned. Corresponds to Google Merchant Center property [promotion_id](https://support.google.com/merchants/answer/7050148).',
      }),
  })
  .openapi({ description: 'Promotion specification.', required: [] })
  .openapi('GoogleCloudRetailV2alphaPromotion')

const GoogleCloudRetailV2alphaRatingSchema = z
  .object({
    averageRating: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The average rating of the Product. The rating is scaled at 1-5. Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
    ratingCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of ratings. This value is independent of the value of rating_histogram. This value must be nonnegative. Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
    ratingHistogram: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'List of rating counts per rating value (index = rating - 1). The list is empty if there is no rating. If the list is non-empty, its size is always 5. Otherwise, an INVALID_ARGUMENT error is returned. For example, [41, 14, 13, 47, 303]. It means that the Product got 41 ratings with 1 star, 14 ratings with 2 star, and so on.',
      }),
  })
  .openapi({ description: 'The rating of a Product.', required: [] })
  .openapi('GoogleCloudRetailV2alphaRating')

type GoogleCloudRetailV2alphaProductType = {
  attributes?: { [key: string]: z.infer<typeof GoogleCloudRetailV2alphaCustomAttributeSchema> }
  audience?: z.infer<typeof GoogleCloudRetailV2alphaAudienceSchema>
  availability?: 'AVAILABILITY_UNSPECIFIED' | 'IN_STOCK' | 'OUT_OF_STOCK' | 'PREORDER' | 'BACKORDER'
  availableQuantity?: number
  availableTime?: string
  brands?: string[]
  categories?: string[]
  collectionMemberIds?: string[]
  colorInfo?: z.infer<typeof GoogleCloudRetailV2alphaColorInfoSchema>
  conditions?: string[]
  description?: string
  expireTime?: string
  fulfillmentInfo?: z.infer<typeof GoogleCloudRetailV2alphaFulfillmentInfoSchema>[]
  gtin?: string
  id?: string
  images?: z.infer<typeof GoogleCloudRetailV2alphaImageSchema>[]
  languageCode?: string
  localInventories?: z.infer<typeof GoogleCloudRetailV2alphaLocalInventorySchema>[]
  materials?: string[]
  name?: string
  patterns?: string[]
  priceInfo?: z.infer<typeof GoogleCloudRetailV2alphaPriceInfoSchema>
  primaryProductId?: string
  promotions?: z.infer<typeof GoogleCloudRetailV2alphaPromotionSchema>[]
  publishTime?: string
  rating?: z.infer<typeof GoogleCloudRetailV2alphaRatingSchema>
  retrievableFields?: string
  sizes?: string[]
  tags?: string[]
  title?: string
  ttl?: string
  type?: 'TYPE_UNSPECIFIED' | 'PRIMARY' | 'VARIANT' | 'COLLECTION'
  uri?: string
  variants?: GoogleCloudRetailV2alphaProductType[]
}

const GoogleApiHttpBodySchema = z
  .object({
    contentType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The HTTP Content-Type header value specifying the content type of the body.',
      }),
    data: z
      .string()
      .exactOptional()
      .openapi({ description: 'The HTTP request/response body as raw binary.' }),
    extensions: z
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
          'Application specific response metadata. Must be set in the first response for streaming APIs.',
      }),
  })
  .openapi({
    description:
      "Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.",
    required: [],
  })
  .openapi('GoogleApiHttpBody')

const GoogleCloudRetailLoggingHttpRequestContextSchema = z
  .object({
    responseStatusCode: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The HTTP response status code for the request.' }),
  })
  .openapi({ description: 'HTTP request data that is related to a reported error.', required: [] })
  .openapi('GoogleCloudRetailLoggingHttpRequestContext')

const GoogleCloudRetailLoggingSourceLocationSchema = z
  .object({
    functionName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Human-readable name of a function or method. For example, "google.cloud.retail.v2.UserEventService.ImportUserEvents".',
      }),
  })
  .openapi({
    description:
      'Indicates a location in the source code of the service for which errors are reported.',
    required: [],
  })
  .openapi('GoogleCloudRetailLoggingSourceLocation')

const GoogleCloudRetailLoggingErrorContextSchema = z
  .object({
    httpRequest: GoogleCloudRetailLoggingHttpRequestContextSchema.exactOptional().openapi({
      description: 'The HTTP request which was processed when the error was triggered.',
    }),
    reportLocation: GoogleCloudRetailLoggingSourceLocationSchema.exactOptional().openapi({
      description:
        'The location in the source code where the decision was made to report the error, usually the place where it was logged.',
    }),
  })
  .openapi({
    description: 'A description of the context in which an error occurred.',
    required: [],
  })
  .openapi('GoogleCloudRetailLoggingErrorContext')

const GoogleCloudRetailLoggingImportErrorContextSchema = z
  .object({
    catalogItem: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The detailed content which caused the error on importing a catalog item.',
      }),
    gcsPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cloud Storage file path of the import source. Can be set for batch operation error.',
      }),
    lineNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Line number of the content in file. Should be empty for permission or batch operation error.',
      }),
    operationName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The operation resource name of the LRO.' }),
    product: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The detailed content which caused the error on importing a product.',
      }),
    userEvent: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The detailed content which caused the error on importing a user event.',
      }),
  })
  .openapi({
    description:
      'The error payload that is populated on LRO import APIs, including "google.cloud.retail.v2.ProductService.ImportProducts" and "google.cloud.retail.v2.EventService.ImportUserEvents".',
    required: [],
  })
  .openapi('GoogleCloudRetailLoggingImportErrorContext')

const GoogleCloudRetailLoggingServiceContextSchema = z
  .object({
    service: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An identifier of the service. For example, "retail.googleapis.com".',
      }),
  })
  .openapi({ description: 'Describes a running service that sends errors.', required: [] })
  .openapi('GoogleCloudRetailLoggingServiceContext')

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

const GoogleCloudRetailLoggingErrorLogSchema = z
  .object({
    context: GoogleCloudRetailLoggingErrorContextSchema.exactOptional().openapi({
      description: 'A description of the context in which the error occurred.',
    }),
    importPayload: GoogleCloudRetailLoggingImportErrorContextSchema.exactOptional().openapi({
      description: 'The error payload that is populated on LRO import APIs.',
    }),
    message: z.string().exactOptional().openapi({ description: 'A message describing the error.' }),
    requestPayload: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'The API request payload, represented as a protocol buffer. Most API request types are supported. For example: "type.googleapis.com/google.cloud.retail.v2.ProductService.CreateProductRequest" "type.googleapis.com/google.cloud.retail.v2.UserEventService.WriteUserEventRequest"',
      }),
    responsePayload: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'The API response payload, represented as a protocol buffer. This is used to log some "soft errors", where the response is valid but we consider there are some quality issues like unjoined events. The following API responses are supported and no PII is included: "google.cloud.retail.v2.PredictionService.Predict" "google.cloud.retail.v2.UserEventService.WriteUserEvent" "google.cloud.retail.v2.UserEventService.CollectUserEvent"',
      }),
    serviceContext: GoogleCloudRetailLoggingServiceContextSchema.exactOptional().openapi({
      description: 'The service context in which this error has occurred.',
    }),
    status: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'The RPC status associated with the error log.',
    }),
  })
  .openapi({
    description:
      'An error log which is reported to the Error Reporting system. This proto a superset of google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.',
    required: [],
  })
  .openapi('GoogleCloudRetailLoggingErrorLog')

const GoogleCloudRetailV2AddFulfillmentPlacesMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Metadata related to the progress of the AddFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddFulfillmentPlaces method.',
  })
  .openapi('GoogleCloudRetailV2AddFulfillmentPlacesMetadata')

const GoogleCloudRetailV2AddFulfillmentPlacesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response of the AddFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.AddFulfillmentPlaces method.',
  })
  .openapi('GoogleCloudRetailV2AddFulfillmentPlacesResponse')

const GoogleCloudRetailV2AddLocalInventoriesMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Metadata related to the progress of the AddLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddLocalInventories method.',
  })
  .openapi('GoogleCloudRetailV2AddLocalInventoriesMetadata')

const GoogleCloudRetailV2AddLocalInventoriesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response of the ProductService.AddLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.AddLocalInventories method.',
  })
  .openapi('GoogleCloudRetailV2AddLocalInventoriesResponse')

const GoogleCloudRetailV2CreateModelMetadataSchema = z
  .object({
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the model that this create applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`',
      }),
  })
  .openapi({ description: 'Metadata associated with a create operation.', required: [] })
  .openapi('GoogleCloudRetailV2CreateModelMetadata')

const GoogleCloudRetailV2ImportCompletionDataResponseSchema = z
  .object({
    errorSamples: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({ description: 'A sample of errors encountered while processing the request.' }),
  })
  .openapi({
    description:
      'Response of the ImportCompletionDataRequest. If the long running operation is done, this message is returned by the google.longrunning.Operations.response field if the operation is successful.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2ImportCompletionDataResponse')

const GoogleCloudRetailV2ImportErrorsConfigSchema = z
  .object({
    gcsPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message.',
      }),
  })
  .openapi({ description: 'Configuration of destination for Import related errors.', required: [] })
  .openapi('GoogleCloudRetailV2ImportErrorsConfig')

const GoogleCloudRetailV2ImportMetadataSchema = z
  .object({
    createTime: z.string().exactOptional().openapi({ description: 'Operation create time.' }),
    failureCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Count of entries that encountered errors while processing.' }),
    notificationPubsubTopic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. This field is never set.' }),
    successCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Count of entries that were processed successfully.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Operation last update time. If the operation is done, this is also the finish time.',
      }),
  })
  .openapi({
    description:
      'Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2ImportMetadata')

const GoogleCloudRetailV2ImportProductsResponseSchema = z
  .object({
    errorSamples: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({ description: 'A sample of errors encountered while processing the request.' }),
    errorsConfig: GoogleCloudRetailV2ImportErrorsConfigSchema.exactOptional().openapi({
      description: 'Echoes the destination for the complete errors in the request if set.',
    }),
  })
  .openapi({
    description:
      'Response of the ImportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2ImportProductsResponse')

const GoogleCloudRetailV2UserEventImportSummarySchema = z
  .object({
    joinedEventsCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Count of user events imported with complete existing catalog information.',
      }),
    unjoinedEventsCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Count of user events imported, but with catalog information not found in the imported catalog.',
      }),
  })
  .openapi({
    description:
      'A summary of import result. The UserEventImportSummary summarizes the import status for user events.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2UserEventImportSummary')

const GoogleCloudRetailV2ImportUserEventsResponseSchema = z
  .object({
    errorSamples: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({ description: 'A sample of errors encountered while processing the request.' }),
    errorsConfig: GoogleCloudRetailV2ImportErrorsConfigSchema.exactOptional().openapi({
      description:
        'Echoes the destination for the complete errors if this field was set in the request.',
    }),
    importSummary: GoogleCloudRetailV2UserEventImportSummarySchema.exactOptional().openapi({
      description: 'Aggregated statistics of user event import status.',
    }),
  })
  .openapi({
    description:
      'Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2ImportUserEventsResponse')

const GoogleCloudRetailV2ModelServingConfigListSchema = z
  .object({
    servingConfigIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A set of valid serving configs that may be used for `PAGE_OPTIMIZATION`.',
      }),
  })
  .openapi({
    description:
      'Represents an ordered combination of valid serving configs, which can be used for `PAGE_OPTIMIZATION` recommendations.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2ModelServingConfigList')

const GoogleCloudRetailV2ModelSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp the Recommendation Model was created at.',
        readOnly: true,
      }),
    dataState: z
      .enum(['DATA_STATE_UNSPECIFIED', 'DATA_OK', 'DATA_ERROR'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The state of data requirements for this model: `DATA_OK` and `DATA_ERROR`. Recommendation model cannot be trained if the data is in `DATA_ERROR` state. Recommendation model can have `DATA_ERROR` state even if serving state is `ACTIVE`: models were trained successfully before, but cannot be refreshed because model no longer has sufficient data for training.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the model. Should be human readable, used to display Recommendation Models in the Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024 characters.',
      }),
    filteringOption: z
      .enum([
        'RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED',
        'RECOMMENDATIONS_FILTERING_DISABLED',
        'RECOMMENDATIONS_FILTERING_ENABLED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering by attributes is enabled for the model.',
      }),
    lastTuneTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the latest successful tune finished.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The fully qualified resource name of the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` catalog_id has char limit of 50. recommendation_model_id has char limit of 40.',
      }),
    optimizationObjective: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The optimization objective e.g. `cvr`. Currently supported values: `ctr`, `cvr`, `revenue-per-order`. If not specified, we choose default based on model type. Default depends on type of recommendation: `recommended-for-you` => `ctr` `others-you-may-like` => `ctr` `frequently-bought-together` => `revenue_per_order` This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.',
      }),
    periodicTuningState: z
      .enum([
        'PERIODIC_TUNING_STATE_UNSPECIFIED',
        'PERIODIC_TUNING_DISABLED',
        'ALL_TUNING_DISABLED',
        'PERIODIC_TUNING_ENABLED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the `TuneModel` method. Default value is `PERIODIC_TUNING_ENABLED`.',
      }),
    servingConfigLists: z
      .array(GoogleCloudRetailV2ModelServingConfigListSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The list of valid serving configs associated with the PageOptimizationConfig.',
        readOnly: true,
      }),
    servingState: z
      .enum(['SERVING_STATE_UNSPECIFIED', 'INACTIVE', 'ACTIVE', 'TUNED'])
      .exactOptional()
      .openapi({
        description: 'Output only. The serving state of the model: `ACTIVE`, `NOT_ACTIVE`.',
        readOnly: true,
      }),
    trainingState: z
      .enum(['TRAINING_STATE_UNSPECIFIED', 'PAUSED', 'TRAINING'])
      .exactOptional()
      .openapi({
        description:
          'Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before.',
      }),
    tuningOperation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The tune operation associated with the model. Can be used to determine if there is an ongoing tune for this recommendation. Empty field implies no tune is goig on.',
        readOnly: true,
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The type of model e.g. `home-page`. Currently supported values: `recommended-for-you`, `others-you-may-like`, `frequently-bought-together`, `page-optimization`, `similar-items`, `buy-it-again`, `on-sale-items`, and `recently-viewed`(readonly value). This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Timestamp the Recommendation Model was last updated. E.g. if a Recommendation Model was paused - this would be the time the pause was initiated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2Model')

const GoogleCloudRetailV2PurgeMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Metadata related to the progress of the Purge operation. This will be returned by the google.longrunning.Operation.metadata field.',
  })
  .openapi('GoogleCloudRetailV2PurgeMetadata')

const GoogleCloudRetailV2PurgeUserEventsResponseSchema = z
  .object({
    purgedEventsCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total count of events purged as a result of the operation.' }),
  })
  .openapi({
    description:
      'Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2PurgeUserEventsResponse')

const GoogleCloudRetailV2RejoinUserEventsMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata for `RejoinUserEvents` method.' })
  .openapi('GoogleCloudRetailV2RejoinUserEventsMetadata')

const GoogleCloudRetailV2RejoinUserEventsResponseSchema = z
  .object({
    rejoinedUserEventsCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of user events that were joined with latest product catalog.',
      }),
  })
  .openapi({ description: 'Response message for `RejoinUserEvents` method.', required: [] })
  .openapi('GoogleCloudRetailV2RejoinUserEventsResponse')

const GoogleCloudRetailV2RemoveFulfillmentPlacesMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Metadata related to the progress of the RemoveFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveFulfillmentPlaces method.',
  })
  .openapi('GoogleCloudRetailV2RemoveFulfillmentPlacesMetadata')

const GoogleCloudRetailV2RemoveFulfillmentPlacesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response of the RemoveFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.RemoveFulfillmentPlaces method.',
  })
  .openapi('GoogleCloudRetailV2RemoveFulfillmentPlacesResponse')

const GoogleCloudRetailV2RemoveLocalInventoriesMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Metadata related to the progress of the RemoveLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveLocalInventories method.',
  })
  .openapi('GoogleCloudRetailV2RemoveLocalInventoriesMetadata')

const GoogleCloudRetailV2RemoveLocalInventoriesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response of the ProductService.RemoveLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.RemoveLocalInventories method.',
  })
  .openapi('GoogleCloudRetailV2RemoveLocalInventoriesResponse')

const GoogleCloudRetailV2SetInventoryMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Metadata related to the progress of the SetInventory operation. Currently empty because there is no meaningful metadata populated from the ProductService.SetInventory method.',
  })
  .openapi('GoogleCloudRetailV2SetInventoryMetadata')

const GoogleCloudRetailV2SetInventoryResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response of the SetInventoryRequest. Currently empty because there is no meaningful response populated from the ProductService.SetInventory method.',
  })
  .openapi('GoogleCloudRetailV2SetInventoryResponse')

const GoogleCloudRetailV2TuneModelMetadataSchema = z
  .object({
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the model that this tune applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`',
      }),
  })
  .openapi({ description: 'Metadata associated with a tune operation.', required: [] })
  .openapi('GoogleCloudRetailV2TuneModelMetadata')

const GoogleCloudRetailV2TuneModelResponseSchema = z
  .object({})
  .openapi({ description: 'Response associated with a tune operation.' })
  .openapi('GoogleCloudRetailV2TuneModelResponse')

const GoogleCloudRetailV2alphaCatalogAttributeSchema = z
  .object({
    dynamicFacetableOption: z
      .enum([
        'DYNAMIC_FACETABLE_OPTION_UNSPECIFIED',
        'DYNAMIC_FACETABLE_ENABLED',
        'DYNAMIC_FACETABLE_DISABLED',
      ])
      .exactOptional()
      .openapi({
        description:
          'If DYNAMIC_FACETABLE_ENABLED, attribute values are available for dynamic facet. Could only be DYNAMIC_FACETABLE_DISABLED if CatalogAttribute.indexable_option is INDEXABLE_DISABLED. Otherwise, an INVALID_ARGUMENT error is returned. Must be specified, otherwise throws INVALID_FORMAT error.',
      }),
    exactSearchableOption: z
      .enum([
        'EXACT_SEARCHABLE_OPTION_UNSPECIFIED',
        'EXACT_SEARCHABLE_ENABLED',
        'EXACT_SEARCHABLE_DISABLED',
      ])
      .exactOptional()
      .openapi({
        description:
          'If EXACT_SEARCHABLE_ENABLED, attribute values will be exact searchable. This property only applies to textual custom attributes and requires indexable set to enabled to enable exact-searchable. If unset, the server behavior defaults to EXACT_SEARCHABLE_DISABLED.',
      }),
    inUse: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates whether this attribute has been used by any products. `True` if at least one Product is using this attribute in Product.attributes. Otherwise, this field is `False`. CatalogAttribute can be pre-loaded by using CatalogService.AddCatalogAttribute, CatalogService.ImportCatalogAttributes, or CatalogService.UpdateAttributesConfig APIs. This field is `False` for pre-loaded CatalogAttributes. Only pre-loaded catalog attributes that are neither in use by products nor predefined can be deleted. Catalog attributes that are either in use by products or are predefined attributes cannot be deleted; however, their configuration properties will reset to default values upon removal request. After catalog changes, it takes about 10 minutes for this field to update.',
        readOnly: true,
      }),
    indexableOption: z
      .enum(['INDEXABLE_OPTION_UNSPECIFIED', 'INDEXABLE_ENABLED', 'INDEXABLE_DISABLED'])
      .exactOptional()
      .openapi({
        description:
          'When AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, if INDEXABLE_ENABLED attribute values are indexed so that it can be filtered, faceted, or boosted in SearchService.Search. Must be specified, otherwise throws INVALID_FORMAT error.',
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Attribute name. For example: `color`, `brands`, `attributes.custom_attribute`, such as `attributes.xyz`. To be indexable, the attribute name can contain only alpha-numeric characters and underscores. For example, an attribute named `attributes.abc_xyz` can be indexed, but an attribute named `attributes.abc-xyz` cannot be indexed. If the attribute key starts with `attributes.`, then the attribute is a custom attribute. Attributes such as `brands`, `patterns`, and `title` are built-in and called system attributes.',
      }),
    recommendationsFilteringOption: z
      .enum([
        'RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED',
        'RECOMMENDATIONS_FILTERING_DISABLED',
        'RECOMMENDATIONS_FILTERING_ENABLED',
      ])
      .exactOptional()
      .openapi({
        description:
          'When AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, if RECOMMENDATIONS_FILTERING_ENABLED, attribute values are filterable for recommendations. This option works for categorical features only, does not work for numerical features, inventory filtering.',
      }),
    retrievableOption: z
      .enum(['RETRIEVABLE_OPTION_UNSPECIFIED', 'RETRIEVABLE_ENABLED', 'RETRIEVABLE_DISABLED'])
      .exactOptional()
      .openapi({
        description:
          'If RETRIEVABLE_ENABLED, attribute values are retrievable in the search results. If unset, the server behavior defaults to RETRIEVABLE_DISABLED.',
      }),
    searchableOption: z
      .enum(['SEARCHABLE_OPTION_UNSPECIFIED', 'SEARCHABLE_ENABLED', 'SEARCHABLE_DISABLED'])
      .exactOptional()
      .openapi({
        description:
          'When AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, if SEARCHABLE_ENABLED, attribute values are searchable by text queries in SearchService.Search. If SEARCHABLE_ENABLED but attribute type is numerical, attribute values will not be searchable by text queries in SearchService.Search, as there are no text values associated to numerical attributes. Must be specified, otherwise throws INVALID_FORMAT error.',
      }),
    type: z
      .enum(['UNKNOWN', 'TEXTUAL', 'NUMERICAL'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The type of this attribute. This is derived from the attribute in Product.attributes.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaCatalogAttribute')

const GoogleCloudRetailV2alphaAddCatalogAttributeRequestSchema = z
  .object({
    catalogAttribute: GoogleCloudRetailV2alphaCatalogAttributeSchema.exactOptional().openapi({
      description: 'Required. The CatalogAttribute to add.',
    }),
  })
  .openapi({ description: 'Request for CatalogService.AddCatalogAttribute method.', required: [] })
  .openapi('GoogleCloudRetailV2alphaAddCatalogAttributeRequest')

const GoogleCloudRetailV2alphaAddControlRequestSchema = z
  .object({
    controlId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The id of the control to apply. Assumed to be in the same catalog as the serving config - if id is not found a NOT_FOUND error is returned.',
      }),
  })
  .openapi({ description: 'Request for AddControl method.', required: [] })
  .openapi('GoogleCloudRetailV2alphaAddControlRequest')

const GoogleCloudRetailV2alphaAddFulfillmentPlacesMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Metadata related to the progress of the AddFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddFulfillmentPlaces method.',
  })
  .openapi('GoogleCloudRetailV2alphaAddFulfillmentPlacesMetadata')

const GoogleCloudRetailV2alphaAddFulfillmentPlacesRequestSchema = z
  .object({
    addTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used.',
      }),
    allowMissing: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to true, and the Product is not found, the fulfillment information will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found.',
      }),
    placeIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery" to be added for this type. Duplicate IDs will be automatically ignored. At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID_ARGUMENT error is returned. If the total number of place IDs exceeds 2000 for this type after adding, then the update will be rejected.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. This field directly corresponds to Product.fulfillment_info.type.',
      }),
  })
  .openapi({
    description: 'Request message for ProductService.AddFulfillmentPlaces method.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest')

const GoogleCloudRetailV2alphaAddFulfillmentPlacesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response of the AddFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.AddFulfillmentPlaces method.',
  })
  .openapi('GoogleCloudRetailV2alphaAddFulfillmentPlacesResponse')

const GoogleCloudRetailV2alphaAddLocalInventoriesMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Metadata related to the progress of the AddLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddLocalInventories method.',
  })
  .openapi('GoogleCloudRetailV2alphaAddLocalInventoriesMetadata')

const GoogleCloudRetailV2alphaAddLocalInventoriesRequestSchema = z
  .object({
    addMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates which inventory fields in the provided list of LocalInventory to update. The field is updated to the provided value. If a field is set while the place does not have a previous local inventory, the local inventory at that store is created. If a field is set while the value of that field is not provided, the original field value, if it exists, is deleted. If the mask is not set or set with empty paths, all inventory fields will be updated. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned and the entire update will be ignored.',
      }),
    addTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when the inventory updates are issued. Used to prevent out-of-order updates on local inventory fields. If not provided, the internal system time will be used.',
      }),
    allowMissing: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to true, and the Product is not found, the local inventory will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found.',
      }),
    localInventories: z
      .array(GoogleCloudRetailV2alphaLocalInventorySchema)
      .exactOptional()
      .openapi({
        description:
          'Required. A list of inventory information at difference places. Each place is identified by its place ID. At most 3000 inventories are allowed per request.',
      }),
  })
  .openapi({
    description: 'Request message for ProductService.AddLocalInventories method.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaAddLocalInventoriesRequest')

const GoogleCloudRetailV2alphaAddLocalInventoriesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response of the ProductService.AddLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.AddLocalInventories method.',
  })
  .openapi('GoogleCloudRetailV2alphaAddLocalInventoriesResponse')

const GoogleCloudRetailV2alphaAttributesConfigSchema = z
  .object({
    attributeConfigLevel: z
      .enum([
        'ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED',
        'PRODUCT_LEVEL_ATTRIBUTE_CONFIG',
        'CATALOG_LEVEL_ATTRIBUTE_CONFIG',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The AttributeConfigLevel used for this catalog.',
        readOnly: true,
      }),
    catalogAttributes: z
      .record(z.string(), GoogleCloudRetailV2alphaCatalogAttributeSchema)
      .exactOptional()
      .openapi({
        description:
          "Enable attribute(s) config at catalog level. For example, indexable, dynamic_facetable, or searchable for each attribute. The key is catalog attribute's name. For example: `color`, `brands`, `attributes.custom_attribute`, such as `attributes.xyz`. The maximum number of catalog attributes allowed in a request is 1000.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The fully qualified resource name of the attribute config. Format: `projects/*/locations/*/catalogs/*/attributesConfig`',
      }),
  })
  .openapi({ description: 'Catalog level attribute config.', required: [] })
  .openapi('GoogleCloudRetailV2alphaAttributesConfig')

const GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequestSchema = z
  .object({
    attributeKeys: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The attribute name keys of the CatalogAttributes to delete. A maximum of 1000 catalog attributes can be deleted in a batch.',
      }),
  })
  .openapi({
    description: 'Request for CatalogService.BatchRemoveCatalogAttributes method.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest')

const GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponseSchema = z
  .object({
    deletedCatalogAttributes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Catalog attributes that were deleted. Only pre-loaded catalog attributes that are neither in use by products nor predefined can be deleted.',
      }),
    resetCatalogAttributes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Catalog attributes that were reset. Catalog attributes that are either in use by products or are predefined attributes cannot be deleted; however, their configuration properties will reset to default values upon removal request.',
      }),
  })
  .openapi({
    description: 'Response of the CatalogService.BatchRemoveCatalogAttributes.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse')

const GoogleCloudRetailV2alphaBigQueryOutputResultSchema = z
  .object({
    datasetId: z.string().exactOptional().openapi({ description: 'The ID of a BigQuery Dataset.' }),
    tableId: z.string().exactOptional().openapi({ description: 'The ID of a BigQuery Table.' }),
  })
  .openapi({ description: 'A BigQuery output result.', required: [] })
  .openapi('GoogleCloudRetailV2alphaBigQueryOutputResult')

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

const GoogleCloudRetailV2alphaBigQuerySourceSchema = z
  .object({
    dataSchema: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The schema to use when parsing the data from the source. Supported values for product imports: * `product` (default): One JSON Product per line. Each product must have a valid Product.id. * `product_merchant_center`: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mc). Supported values for user events imports: * `user_event` (default): One JSON UserEvent per line. * `user_event_ga360`: The schema is available here: https://support.google.com/analytics/answer/3437719. * `user_event_ga4`: The schema is available here: https://support.google.com/analytics/answer/7029846. Supported values for autocomplete imports: * `suggestions` (default): One JSON completion suggestion per line. * `denylist`: One JSON deny suggestion per line. * `allowlist`: One JSON allow suggestion per line.',
      }),
    datasetId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The BigQuery data set to copy the data from with a length limit of 1,024 characters.',
      }),
    gcsStagingDir: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory.',
      }),
    partitionDate: GoogleTypeDateSchema.exactOptional().openapi({
      description:
        "BigQuery time partitioned table's _PARTITIONDATE in YYYY-MM-DD format. Only supported in ImportProductsRequest.",
    }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The project ID (can be project # or ID) that the BigQuery source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request.',
      }),
    tableId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The BigQuery table to copy the data from with a length limit of 1,024 characters.',
      }),
  })
  .openapi({ description: 'BigQuery source import data from.', required: [] })
  .openapi('GoogleCloudRetailV2alphaBigQuerySource')

const GoogleCloudRetailV2alphaMerchantCenterFeedFilterSchema = z
  .object({
    primaryFeedId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Merchant Center primary feed ID.' }),
    primaryFeedName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Merchant Center primary feed name. The name is used for the display purposes only.',
      }),
  })
  .openapi({ description: 'Merchant Center Feed filter criterion.', required: [] })
  .openapi('GoogleCloudRetailV2alphaMerchantCenterFeedFilter')

const GoogleCloudRetailV2alphaMerchantCenterLinkSchema = z
  .object({
    branchId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The branch ID (e.g. 0/1/2) within this catalog that products from merchant_center_account_id are streamed to. When updating this field, an empty value will use the currently configured default branch. However, changing the default branch later on won't change the linked branch here. A single branch ID can only have one linked merchant center account ID.",
      }),
    destinations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'String representing the destination to import for, all if left empty. List of possible values is given in [Included destination](https://support.google.com/merchants/answer/7501026). List of allowed string values: "Shopping_ads", "Buy_on_google_listings", "Display_ads", "Local_inventory _ads", "Free_listings", "Free_local_listings" NOTE: The string values are case sensitive.',
      }),
    feeds: z
      .array(GoogleCloudRetailV2alphaMerchantCenterFeedFilterSchema)
      .exactOptional()
      .openapi({
        description:
          'Criteria for the Merchant Center feeds to be ingested via the link. All offers will be ingested if the list is empty. Otherwise the offers will be ingested from selected feeds.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). ISO 639-1. This specifies the language of offers in Merchant Center that will be accepted. If empty no language filtering will be performed. Example value: `en`.',
      }),
    merchantCenterAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The linked [Merchant center account ID](https://developers.google.com/shopping-content/guides/accountstatuses). The account must be a standalone account or a sub-account of a MCA.',
      }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Region code of offers to accept. 2-letter Uppercase ISO 3166-1 alpha-2 code. List of values can be found [here](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) under the `region` tag. If left blank no region filtering will be performed. Example value: `US`.',
      }),
  })
  .openapi({
    description:
      'Represents a link between a Merchant Center account and a branch. Once a link is established, products from the linked merchant center account will be streamed to the linked branch.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaMerchantCenterLink')

const GoogleCloudRetailV2alphaMerchantCenterLinkingConfigSchema = z
  .object({
    links: z
      .array(GoogleCloudRetailV2alphaMerchantCenterLinkSchema)
      .exactOptional()
      .openapi({ description: 'Links between Merchant Center accounts and branches.' }),
  })
  .openapi({
    description:
      'Configures Merchant Center linking. Links contained in the config will be used to sync data from a Merchant Center account to a Cloud Retail branch.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaMerchantCenterLinkingConfig')

const GoogleCloudRetailV2alphaProductLevelConfigSchema = z
  .object({
    ingestionProductType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of Products allowed to be ingested into the catalog. Acceptable values are: * `primary` (default): You can ingest Products of all types. When ingesting a Product, its type will default to Product.Type.PRIMARY if unset. * `variant` (incompatible with Retail Search): You can only ingest Product.Type.VARIANT Products. This means Product.primary_product_id cannot be empty. If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. If this field is `variant` and merchant_center_product_id_field is `itemGroupId`, an INVALID_ARGUMENT error is returned. See [Product levels](https://cloud.google.com/retail/docs/catalog#product-levels) for more details.',
      }),
    merchantCenterProductIdField: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Which field of [Merchant Center Product](/bigquery-transfer/docs/merchant-center-products-schema) should be imported as Product.id. Acceptable values are: * `offerId` (default): Import `offerId` as the product ID. * `itemGroupId`: Import `itemGroupId` as the product ID. Notice that Retail API will choose one item from the ones with the same `itemGroupId`, and use it to represent the item group. If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. If this field is `itemGroupId` and ingestion_product_type is `variant`, an INVALID_ARGUMENT error is returned. See [Product levels](https://cloud.google.com/retail/docs/catalog#product-levels) for more details.',
      }),
  })
  .openapi({
    description:
      'Configures what level the product should be uploaded with regards to how users will be send events and how predictions will be made.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaProductLevelConfig')

const GoogleCloudRetailV2alphaCatalogSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The catalog display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
    merchantCenterLinkingConfig:
      GoogleCloudRetailV2alphaMerchantCenterLinkingConfigSchema.exactOptional().openapi({
        description:
          'The Merchant Center linking configuration. Once a link is added, the data stream from Merchant Center to Cloud Retail will be enabled automatically. The requester must have access to the merchant center account in order to make changes to this field.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Immutable. The fully qualified resource name of the catalog.',
      }),
    productLevelConfig: GoogleCloudRetailV2alphaProductLevelConfigSchema.exactOptional().openapi({
      description: 'Required. The product level configuration.',
    }),
  })
  .openapi({ description: 'The catalog configuration.', required: [] })
  .openapi('GoogleCloudRetailV2alphaCatalog')

const GoogleCloudRetailV2alphaCompleteQueryResponseAttributeResultSchema = z
  .object({
    suggestions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of suggestions for the attribute.' }),
  })
  .openapi({ description: 'Resource that represents attribute results.', required: [] })
  .openapi('GoogleCloudRetailV2alphaCompleteQueryResponseAttributeResult')

const GoogleCloudRetailV2alphaSearchResponseFacetFacetValueSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of items that have this facet value.' }),
    interval: GoogleCloudRetailV2alphaIntervalSchema.exactOptional().openapi({
      description: 'Interval value for a facet, such as [10, 20) for facet "price".',
    }),
    maxValue: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The maximum value in the FacetValue.interval. Only supported on numerical facets and returned if SearchRequest.FacetSpec.FacetKey.return_min_max is true.',
      }),
    minValue: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The minimum value in the FacetValue.interval. Only supported on numerical facets and returned if SearchRequest.FacetSpec.FacetKey.return_min_max is true.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Text value of a facet, such as "Black" for facet "colorFamilies".',
      }),
  })
  .openapi({
    description: 'A facet value which contains value names and their count.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaSearchResponseFacetFacetValue')

const GoogleCloudRetailV2alphaSearchResponseFacetSchema = z
  .object({
    dynamicFacet: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the facet is dynamically generated.' }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The key for this facet. E.g., "colorFamilies" or "price" or "attributes.attr1".',
      }),
    values: z
      .array(GoogleCloudRetailV2alphaSearchResponseFacetFacetValueSchema)
      .exactOptional()
      .openapi({ description: 'The facet values for this field.' }),
  })
  .openapi({ description: 'A facet result.', required: [] })
  .openapi('GoogleCloudRetailV2alphaSearchResponseFacet')

const GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResultSchema = z
  .object({
    attributes: z
      .record(z.string(), GoogleCloudRetailV2alphaCustomAttributeSchema)
      .exactOptional()
      .openapi({
        description:
          'Custom attributes for the suggestion term. * For "user-data", the attributes are additional custom attributes ingested through BigQuery. * For "cloud-retail", the attributes are product attributes generated by Cloud Retail. It requires UserEvent.product_details is imported properly.',
      }),
    facets: z
      .array(GoogleCloudRetailV2alphaSearchResponseFacetSchema)
      .exactOptional()
      .openapi({
        description:
          'Facet information for the suggestion term. Gives the number of items resulting from a search with this suggestion term for each facet. This is an experimental feature for limited customers. If you want to receive this facet information, reach out to the Retail support team.',
      }),
    suggestion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The suggestion for the query.' }),
    totalProductCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Total number of products associated with a search with this suggestion. This is an experimental feature for limited customers. If you want to receive this product count information, reach out to the Retail support team.',
      }),
  })
  .openapi({ description: 'Resource that represents completion results.', required: [] })
  .openapi('GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult')

const GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResultSchema = z
  .object({
    recentSearch: z.string().exactOptional().openapi({ description: 'The recent search query.' }),
  })
  .openapi({ description: 'Recent search of this user.', required: [] })
  .openapi('GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult')

const GoogleCloudRetailV2alphaCompleteQueryResponseSchema = z
  .object({
    attributeResults: z
      .record(z.string(), GoogleCloudRetailV2alphaCompleteQueryResponseAttributeResultSchema)
      .exactOptional()
      .openapi({
        description:
          'A map of matched attribute suggestions. This field is only available for "cloud-retail" dataset. Current supported keys: * `brands` * `categories`',
      }),
    attributionToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique complete token. This should be included in the UserEvent.completion_detail for search events resulting from this completion, which enables accurate attribution of complete model performance.',
      }),
    completionResults: z
      .array(GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResultSchema)
      .exactOptional()
      .openapi({
        description:
          'Results of the matching suggestions. The result list is ordered and the first result is top suggestion.',
      }),
    recentSearchResults: z
      .array(GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResultSchema)
      .exactOptional()
      .openapi({
        description:
          'Matched recent searches of this user. The maximum number of recent searches is 10. This field is a restricted feature. Contact Retail Search support team if you are interested in enabling it. This feature is only available when CompleteQueryRequest.visitor_id field is set and UserEvent is imported. The recent searches satisfy the follow rules: * They are ordered from latest to oldest. * They are matched with CompleteQueryRequest.query case insensitively. * They are transformed to lower case. * They are UTF-8 safe. Recent searches are deduplicated. More recent searches will be reserved when duplication happens.',
      }),
  })
  .openapi({ description: 'Response of the autocomplete query.', required: [] })
  .openapi('GoogleCloudRetailV2alphaCompleteQueryResponse')

const GoogleCloudRetailV2alphaCompletionDataInputConfigSchema = z
  .object({
    bigQuerySource: GoogleCloudRetailV2alphaBigQuerySourceSchema.exactOptional().openapi({
      description:
        'Required. BigQuery input source. Add the IAM permission "BigQuery Data Viewer" for cloud-retail-customer-data-access@system.gserviceaccount.com before using this feature otherwise an error is thrown.',
    }),
  })
  .openapi({ description: 'The input config source for completion data.', required: [] })
  .openapi('GoogleCloudRetailV2alphaCompletionDataInputConfig')

const GoogleCloudRetailV2alphaCompletionConfigSchema = z
  .object({
    allowlistInputConfig:
      GoogleCloudRetailV2alphaCompletionDataInputConfigSchema.exactOptional().openapi({
        description:
          'Output only. The source data for the latest import of the autocomplete allowlist phrases.',
        readOnly: true,
      }),
    autoLearning: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to true, the auto learning function is enabled. Auto learning uses user data to generate suggestions using ML techniques. Default value is false. Only after enabling auto learning can users use `cloud-retail` data in CompleteQueryRequest.',
      }),
    denylistInputConfig:
      GoogleCloudRetailV2alphaCompletionDataInputConfigSchema.exactOptional().openapi({
        description:
          'Output only. The source data for the latest import of the autocomplete denylist phrases.',
        readOnly: true,
      }),
    lastAllowlistImportOperation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Name of the LRO corresponding to the latest allowlist import. Can use GetOperation API to retrieve the latest state of the Long Running Operation.',
        readOnly: true,
      }),
    lastDenylistImportOperation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Name of the LRO corresponding to the latest denylist import. Can use GetOperation API to retrieve the latest state of the Long Running Operation.',
        readOnly: true,
      }),
    lastSuggestionsImportOperation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Name of the LRO corresponding to the latest suggestion terms list import. Can use GetOperation API to retrieve the latest state of the Long Running Operation.',
        readOnly: true,
      }),
    matchingOrder: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Specifies the matching order for autocomplete suggestions, e.g., a query consisting of 'sh' with 'out-of-order' specified would suggest \"women's shoes\", whereas a query of 'red s' with 'exact-prefix' specified would suggest \"red shoes\". Currently supported values: * 'out-of-order' * 'exact-prefix' Default value: 'exact-prefix'.",
      }),
    maxSuggestions: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of autocomplete suggestions returned per term. Default value is 20. If left unset or set to 0, then will fallback to default value. Value range is 1 to 20.',
      }),
    minPrefixLength: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The minimum number of characters needed to be typed in order to get suggestions. Default value is 2. If left unset or set to 0, then will fallback to default value. Value range is 1 to 20.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. Fully qualified name `projects/*/locations/*/catalogs/*/completionConfig`',
      }),
    suggestionsInputConfig:
      GoogleCloudRetailV2alphaCompletionDataInputConfigSchema.exactOptional().openapi({
        description:
          'Output only. The source data for the latest import of the autocomplete suggestion phrases.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      "Catalog level autocomplete config for customers to customize autocomplete feature's settings.",
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaCompletionConfig')

const GoogleCloudRetailV2alphaCompletionDetailSchema = z
  .object({
    completionAttributionToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Completion attribution token in CompleteQueryResponse.attribution_token.',
      }),
    selectedPosition: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'End user selected CompleteQueryResponse.CompletionResult.suggestion position, starting from 0.',
      }),
    selectedSuggestion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'End user selected CompleteQueryResponse.CompletionResult.suggestion.',
      }),
  })
  .openapi({
    description:
      'Detailed completion information including completion attribution token and clicked completion info.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaCompletionDetail')

const GoogleCloudRetailV2alphaConditionTimeRangeSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'End of time range. Range is inclusive.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Start of time range. Range is inclusive.' }),
  })
  .openapi({
    description:
      'Used for time-dependent conditions. Example: Want to have rule applied for week long sale.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaConditionTimeRange')

const GoogleCloudRetailV2alphaConditionQueryTermSchema = z
  .object({
    fullMatch: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this is supposed to be a full or partial match.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of the term to match on. Value cannot be empty. Value can have at most 3 terms if specified as a partial match. Each space separated string is considered as one term. For example, "a b c" is 3 terms and allowed, but " a b c d" is 4 terms and not allowed for a partial match.',
      }),
  })
  .openapi({ description: 'Query terms that we want to match on.', required: [] })
  .openapi('GoogleCloudRetailV2alphaConditionQueryTerm')

const GoogleCloudRetailV2alphaConditionSchema = z
  .object({
    activeTimeRange: z
      .array(GoogleCloudRetailV2alphaConditionTimeRangeSchema)
      .exactOptional()
      .openapi({
        description:
          'Range of time(s) specifying when Condition is active. Condition true if any time range matches.',
      }),
    queryTerms: z
      .array(GoogleCloudRetailV2alphaConditionQueryTermSchema)
      .exactOptional()
      .openapi({
        description:
          'A list (up to 10 entries) of terms to match the query on. If not specified, match all queries. If many query terms are specified, the condition is matched if any of the terms is a match (i.e. using the OR operator).',
      }),
  })
  .openapi({
    description:
      "Metadata that is used to define a condition that triggers an action. A valid condition must specify at least one of 'query_terms' or 'products_filter'. If multiple fields are specified, the condition is met if all the fields are satisfied e.g. if a set of query terms and product_filter are set, then only items matching the product_filter for requests with a query matching the query terms wil get boosted.",
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaCondition')

const GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKeySchema = z
  .object({
    caseInsensitive: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True to make facet keys case insensitive when getting faceting values with prefixes or contains; false otherwise.',
      }),
    contains: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only get facet values that contains the given strings. For example, suppose "categories" has three values "Women > Shoe", "Women > Dress" and "Men > Shoe". If set "contains" to "Shoe", the "categories" facet will give only "Women > Shoe" and "Men > Shoe". Only supported on textual fields. Maximum is 10.',
      }),
    intervals: z
      .array(GoogleCloudRetailV2alphaIntervalSchema)
      .exactOptional()
      .openapi({
        description:
          'Set only if values should be bucketized into intervals. Must be set for facets with numerical values. Must not be set for facet with text values. Maximum number of intervals is 40. For all numerical facet keys that appear in the list of products from the catalog, the percentiles 0, 10, 30, 50, 70, 90 and 100 are computed from their distribution weekly. If the model assigns a high score to a numerical facet key and its intervals are not specified in the search request, these percentiles will become the bounds for its intervals and will be returned in the response. If the facet key intervals are specified in the request, then the specified intervals will be returned instead.',
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Supported textual and numerical facet keys in Product object, over which the facet values are computed. Facet key is case-sensitive. Allowed facet keys when FacetKey.query is not specified: * textual_field = * "brands" * "categories" * "genders" * "ageGroups" * "availability" * "colorFamilies" * "colors" * "sizes" * "materials" * "patterns" * "conditions" * "attributes.key" * "pickupInStore" * "shipToStore" * "sameDayDelivery" * "nextDayDelivery" * "customFulfillment1" * "customFulfillment2" * "customFulfillment3" * "customFulfillment4" * "customFulfillment5" * "inventory(place_id,attributes.key)" * numerical_field = * "price" * "discount" * "rating" * "ratingCount" * "attributes.key" * "inventory(place_id,price)" * "inventory(place_id,original_price)" * "inventory(place_id,attributes.key)"',
      }),
    orderBy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The order in which SearchResponse.Facet.values are returned. Allowed values are: * "count desc", which means order by SearchResponse.Facet.values.count descending. * "value desc", which means order by SearchResponse.Facet.values.value descending. Only applies to textual facets. If not set, textual values are sorted in [natural order](https://en.wikipedia.org/wiki/Natural_sort_order); numerical intervals are sorted in the order given by FacetSpec.FacetKey.intervals; FulfillmentInfo.place_ids are sorted in the order given by FacetSpec.FacetKey.restricted_values.',
      }),
    prefixes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only get facet values that start with the given string prefix. For example, suppose "categories" has three values "Women > Shoe", "Women > Dress" and "Men > Shoe". If set "prefixes" to "Women", the "categories" facet will give only "Women > Shoe" and "Women > Dress". Only supported on textual fields. Maximum is 10.',
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The query that is used to compute facet for the given facet key. When provided, it will override the default behavior of facet computation. The query syntax is the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Notice that there is no limitation on FacetKey.key when query is specified. In the response, SearchResponse.Facet.values.value will be always "1" and SearchResponse.Facet.values.count will be the number of results that match the query. For example, you can set a customized facet for "shipToStore", where FacetKey.key is "customizedShipToStore", and FacetKey.query is "availability: ANY(\\"IN_STOCK\\") AND shipToStore: ANY(\\"123\\")". Then the facet will count the products that are both in stock and ship to store "123".',
      }),
    restrictedValues: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only get facet for the given restricted values. For example, when using "pickupInStore" as key and set restricted values to ["store123", "store456"], only facets for "store123" and "store456" are returned. Only supported on predefined textual fields, custom textual attributes and fulfillments. Maximum is 20. Must be set for the fulfillment facet keys: * pickupInStore * shipToStore * sameDayDelivery * nextDayDelivery * customFulfillment1 * customFulfillment2 * customFulfillment3 * customFulfillment4 * customFulfillment5',
      }),
    returnMinMax: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Returns the min and max value for each numerical facet intervals. Ignored for textual facets.',
      }),
  })
  .openapi({ description: 'Specifies how a facet is computed.', required: [] })
  .openapi('GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey')

const GoogleCloudRetailV2alphaSearchRequestFacetSpecSchema = z
  .object({
    enableDynamicPosition: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enables dynamic position for this facet. If set to true, the position of this facet among all facets in the response is determined by Google Retail Search. It will be ordered together with dynamic facets if dynamic facets is enabled. If set to false, the position of this facet in the response will be the same as in the request, and it will be ranked before the facets with dynamic position enable and all dynamic facets. For example, you may always want to have rating facet returned in the response, but it\'s not necessarily to always display the rating facet at the top. In that case, you can set enable_dynamic_position to true so that the position of rating facet in response will be determined by Google Retail Search. Another example, assuming you have the following facets in the request: * "rating", enable_dynamic_position = true * "price", enable_dynamic_position = false * "brands", enable_dynamic_position = false And also you have a dynamic facets enable, which will generate a facet \'gender\'. Then the final order of the facets in the response can be ("price", "brands", "rating", "gender") or ("price", "brands", "gender", "rating") depends on how Google Retail Search orders "gender" and "rating" facets. However, notice that "price" and "brands" will always be ranked at 1st and 2nd position since their enable_dynamic_position are false.',
      }),
    excludedFilterKeys: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of keys to exclude when faceting. By default, FacetKey.key is not excluded from the filter unless it is listed in this field. Listing a facet key in this field allows its values to appear as facet results, even when they are filtered out of search results. Using this field does not affect what search results are returned. For example, suppose there are 100 products with the color facet "Red" and 200 products with the color facet "Blue". A query containing the filter "colorFamilies:ANY("Red")" and having "colorFamilies" as FacetKey.key would by default return only "Red" products in the search results, and also return "Red" with count 100 as the only color facet. Although there are also blue products available, "Blue" would not be shown as an available facet value. If "colorFamilies" is listed in "excludedFilterKeys", then the query returns the facet values "Red" with count 100 and "Blue" with count 200, because the "colorFamilies" key is now excluded from the filter. Because this field doesn\'t affect search results, the search results are still correctly filtered to return only "Red" products. A maximum of 100 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
    facetKey: GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKeySchema.exactOptional().openapi({
      description: 'Required. The facet key specification.',
    }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum of facet values that should be returned for this facet. If unspecified, defaults to 50. The maximum allowed value is 300. Values above 300 will be coerced to 300. If this field is negative, an INVALID_ARGUMENT is returned.',
      }),
  })
  .openapi({ description: 'A facet specification to perform faceted search.', required: [] })
  .openapi('GoogleCloudRetailV2alphaSearchRequestFacetSpec')

const GoogleCloudRetailV2alphaRuleBoostActionSchema = z
  .object({
    boost: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Strength of the condition boost, which must be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the item a big promotion. However, it does not necessarily mean that the boosted item will be the top result at all times, nor that other items will be excluded. Results could still be shown even when none of them matches the condition. And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant items. Setting to -1.0 gives the item a big demotion. However, results that are deeply relevant might still be shown. The item will have an upstream battle to get a fairly high ranking, but it is not blocked out completely. Setting to 0.0 means no boost applied. The boosting condition is ignored.',
      }),
    productsFilter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The filter can have a max size of 5000 characters. An expression which specifies which products to apply an action to. The syntax and supported fields are the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Examples: * To boost products with product ID "product_1" or "product_2", and color "Red" or "Blue": *(id: ANY("product_1", "product_2")) * *AND * *(colorFamilies: ANY("Red", "Blue")) *',
      }),
  })
  .openapi({
    description: 'A boost action to apply to results matching condition specified above.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaRuleBoostAction')

const GoogleCloudRetailV2alphaRuleDoNotAssociateActionSchema = z
  .object({
    doNotAssociateTerms: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Cannot contain duplicates or the query term. Can specify up to 100 terms.',
      }),
    queryTerms: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Terms from the search query. Will not consider do_not_associate_terms for search if in search query. Can specify up to 100 terms.',
      }),
    terms: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Will be [deprecated = true] post migration;' }),
  })
  .openapi({
    description:
      'Prevents `query_term` from being associated with specified terms during search. Example: Don\'t associate "gShoe" and "cheap".',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaRuleDoNotAssociateAction')

const GoogleCloudRetailV2alphaRuleFilterActionSchema = z
  .object({
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A filter to apply on the matching condition results. Supported features: * filter must be set. * Filter syntax is identical to SearchRequest.filter. See more details at the Retail Search [user guide](/retail/search/docs/filter-and-order#filter). * To filter products with product ID "product_1" or "product_2", and color "Red" or "Blue": *(id: ANY("product_1", "product_2")) * *AND * *(colorFamilies: ANY("Red", "Blue")) *',
      }),
  })
  .openapi({
    description:
      "* Rule Condition: - No Condition.query_terms provided is a global match. - 1 or more Condition.query_terms provided are combined with OR operator. * Action Input: The request query and filter that are applied to the retrieved products, in addition to any filters already provided with the SearchRequest. The AND operator is used to combine the query's existing filters with the filter rule(s). NOTE: May result in 0 results when filters conflict. * Action Result: Filters the returned objects to be ONLY those that passed the filter.",
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaRuleFilterAction')

const GoogleCloudRetailV2alphaRuleIgnoreActionSchema = z
  .object({
    ignoreTerms: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Terms to ignore in the search query.' }),
  })
  .openapi({
    description:
      'Prevents a term in the query from being used in search. Example: Don\'t search for "shoddy".',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaRuleIgnoreAction')

const GoogleCloudRetailV2alphaRuleOnewaySynonymsActionSchema = z
  .object({
    onewayTerms: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Will be [deprecated = true] post migration;' }),
    queryTerms: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Terms from the search query. Will treat synonyms as their synonyms. Not themselves synonyms of the synonyms. Can specify up to 100 terms.',
      }),
    synonyms: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Defines a set of synonyms. Cannot contain duplicates. Can specify up to 100 synonyms.',
      }),
  })
  .openapi({
    description:
      'Maps a set of terms to a set of synonyms. Set of synonyms will be treated as synonyms of each query term only. `query_terms` will not be treated as synonyms of each other. Example: "sneakers" will use a synonym of "shoes". "shoes" will not use a synonym of "sneakers".',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaRuleOnewaySynonymsAction')

const GoogleCloudRetailV2alphaRuleRedirectActionSchema = z
  .object({
    redirectUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL must have length equal or less than 2000 characters.' }),
  })
  .openapi({
    description:
      'Redirects a shopper to a specific page. * Rule Condition: - Must specify Condition.query_terms. * Action Input: Request Query * Action Result: Redirects shopper to provided uri.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaRuleRedirectAction')

const GoogleCloudRetailV2alphaRuleReplacementActionSchema = z
  .object({
    queryTerms: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Terms from the search query. Will be replaced by replacement term. Can specify up to 100 terms.',
      }),
    replacementTerm: z
      .string()
      .exactOptional()
      .openapi({ description: 'Term that will be used for replacement.' }),
    term: z
      .string()
      .exactOptional()
      .openapi({ description: 'Will be [deprecated = true] post migration;' }),
  })
  .openapi({
    description:
      'Replaces a term in the query. Multiple replacement candidates can be specified. All `query_terms` will be replaced with the replacement term. Example: Replace "gShoe" with "google shoe".',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaRuleReplacementAction')

const GoogleCloudRetailV2alphaRuleTwowaySynonymsActionSchema = z
  .object({
    synonyms: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Defines a set of synonyms. Can specify up to 100 synonyms. Must specify at least 2 synonyms.',
      }),
  })
  .openapi({
    description:
      'Creates a set of terms that will be treated as synonyms of each other. Example: synonyms of "sneakers" and "shoes": * "sneakers" will use a synonym of "shoes". * "shoes" will use a synonym of "sneakers".',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaRuleTwowaySynonymsAction')

const GoogleCloudRetailV2alphaRuleSchema = z
  .object({
    boostAction: GoogleCloudRetailV2alphaRuleBoostActionSchema.exactOptional().openapi({
      description: 'A boost action.',
    }),
    condition: GoogleCloudRetailV2alphaConditionSchema.exactOptional().openapi({
      description:
        'Required. The condition that triggers the rule. If the condition is empty, the rule will always apply.',
    }),
    doNotAssociateAction:
      GoogleCloudRetailV2alphaRuleDoNotAssociateActionSchema.exactOptional().openapi({
        description: 'Prevents term from being associated with other terms.',
      }),
    filterAction: GoogleCloudRetailV2alphaRuleFilterActionSchema.exactOptional().openapi({
      description: 'Filters results.',
    }),
    ignoreAction: GoogleCloudRetailV2alphaRuleIgnoreActionSchema.exactOptional().openapi({
      description: 'Ignores specific terms from query during search.',
    }),
    onewaySynonymsAction:
      GoogleCloudRetailV2alphaRuleOnewaySynonymsActionSchema.exactOptional().openapi({
        description:
          'Treats specific term as a synonym with a group of terms. Group of terms will not be treated as synonyms with the specific term.',
      }),
    redirectAction: GoogleCloudRetailV2alphaRuleRedirectActionSchema.exactOptional().openapi({
      description: 'Redirects a shopper to a specific page.',
    }),
    replacementAction: GoogleCloudRetailV2alphaRuleReplacementActionSchema.exactOptional().openapi({
      description: 'Replaces specific terms in the query.',
    }),
    twowaySynonymsAction:
      GoogleCloudRetailV2alphaRuleTwowaySynonymsActionSchema.exactOptional().openapi({
        description: 'Treats a set of terms as synonyms of one another.',
      }),
  })
  .openapi({
    description:
      'A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaRule')

const GoogleCloudRetailV2alphaControlSchema = z
  .object({
    associatedServingConfigIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. List of serving config ids that are associated with this control in the same Catalog. Note the association is managed via the ServingConfig, this is an output only denormalized view.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The human readable control display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is thrown.',
      }),
    facetSpec: GoogleCloudRetailV2alphaSearchRequestFacetSpecSchema.exactOptional().openapi({
      description:
        'A facet specification to perform faceted search. Note that this field is deprecated and will throw NOT_IMPLEMENTED if used for creating a control.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Fully qualified name `projects/*/locations/global/catalogs/*/controls/*`',
      }),
    rule: GoogleCloudRetailV2alphaRuleSchema.exactOptional().openapi({
      description:
        'A rule control - a condition-action pair. Enacts a set action when the condition is triggered. For example: Boost "gShoe" when query full matches "Running Shoes".',
    }),
    searchSolutionUseCase: z
      .array(
        z.enum([
          'SEARCH_SOLUTION_USE_CASE_UNSPECIFIED',
          'SEARCH_SOLUTION_USE_CASE_SEARCH',
          'SEARCH_SOLUTION_USE_CASE_BROWSE',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Specifies the use case for the control. Affects what condition fields can be set. Only settable by search controls. Will default to SEARCH_SOLUTION_USE_CASE_SEARCH if not specified. Currently only allow one search_solution_use_case per control.',
      }),
    solutionTypes: z
      .array(
        z.enum([
          'SOLUTION_TYPE_UNSPECIFIED',
          'SOLUTION_TYPE_RECOMMENDATION',
          'SOLUTION_TYPE_SEARCH',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The solution types that the control is used for. Currently we support setting only one type of solution at creation time. Only `SOLUTION_TYPE_SEARCH` value is supported at the moment. If no solution type is provided at creation time, will default to SOLUTION_TYPE_SEARCH.',
      }),
  })
  .openapi({
    description:
      'Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaControl')

const GoogleCloudRetailV2alphaCreateMerchantCenterAccountLinkMetadataSchema = z
  .object({
    createTime: z.string().exactOptional().openapi({ description: 'Operation create time.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Operation last update time. If the operation is done, this is also the finish time.',
      }),
  })
  .openapi({
    description: 'Common metadata related to the progress of the operations.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaCreateMerchantCenterAccountLinkMetadata')

const GoogleCloudRetailV2alphaCreateModelMetadataSchema = z
  .object({
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the model that this create applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`',
      }),
  })
  .openapi({ description: 'Metadata associated with a create operation.', required: [] })
  .openapi('GoogleCloudRetailV2alphaCreateModelMetadata')

const GoogleCloudRetailV2alphaExperimentInfoServingConfigExperimentSchema = z
  .object({
    experimentServingConfig: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully qualified resource name of the serving config VariantArm.serving_config_id responsible for generating the search response. For example: `projects/*/locations/*/catalogs/*/servingConfigs/*`.',
      }),
    originalServingConfig: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully qualified resource name of the original SearchRequest.placement in the search request prior to reassignment by experiment API. For example: `projects/*/locations/*/catalogs/*/servingConfigs/*`.',
      }),
  })
  .openapi({ description: 'Metadata for active serving config A/B tests.', required: [] })
  .openapi('GoogleCloudRetailV2alphaExperimentInfoServingConfigExperiment')

const GoogleCloudRetailV2alphaExperimentInfoSchema = z
  .object({
    experiment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully qualified resource name of the experiment that provides the serving config under test, should an active experiment exist. For example: `projects/*/locations/global/catalogs/default_catalog/experiments/experiment_id`',
      }),
    servingConfigExperiment:
      GoogleCloudRetailV2alphaExperimentInfoServingConfigExperimentSchema.exactOptional().openapi({
        description: 'A/B test between existing Cloud Retail Search ServingConfigs.',
      }),
  })
  .openapi({ description: 'Metadata for active A/B testing Experiments.', required: [] })
  .openapi('GoogleCloudRetailV2alphaExperimentInfo')

const GoogleCloudRetailV2alphaExportErrorsConfigSchema = z
  .object({
    gcsPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Export errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message.',
      }),
  })
  .openapi({ description: 'Configuration of destination for Export related errors.', required: [] })
  .openapi('GoogleCloudRetailV2alphaExportErrorsConfig')

const GoogleCloudRetailV2alphaExportMetadataSchema = z
  .object({
    createTime: z.string().exactOptional().openapi({ description: 'Operation create time.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Operation last update time. If the operation is done, this is also the finish time.',
      }),
  })
  .openapi({
    description:
      'Metadata related to the progress of the Export operation. This is returned by the google.longrunning.Operation.metadata field.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaExportMetadata')

const GoogleCloudRetailV2alphaGcsOutputResultSchema = z
  .object({
    outputUri: z.string().exactOptional().openapi({ description: 'The uri of Gcs output' }),
  })
  .openapi({ description: 'A Gcs output result.', required: [] })
  .openapi('GoogleCloudRetailV2alphaGcsOutputResult')

const GoogleCloudRetailV2alphaOutputResultSchema = z
  .object({
    bigqueryResult: z
      .array(GoogleCloudRetailV2alphaBigQueryOutputResultSchema)
      .exactOptional()
      .openapi({ description: 'The BigQuery location where the result is stored.' }),
    gcsResult: z
      .array(GoogleCloudRetailV2alphaGcsOutputResultSchema)
      .exactOptional()
      .openapi({ description: 'The Google Cloud Storage location where the result is stored.' }),
  })
  .openapi({
    description:
      'Output result that stores the information about where the exported data is stored.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaOutputResult')

const GoogleCloudRetailV2alphaExportProductsResponseSchema = z
  .object({
    errorSamples: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({ description: 'A sample of errors encountered while processing the request.' }),
    errorsConfig: GoogleCloudRetailV2alphaExportErrorsConfigSchema.exactOptional().openapi({
      description: 'This field is never set.',
    }),
    outputResult: GoogleCloudRetailV2alphaOutputResultSchema.exactOptional().openapi({
      description: 'Output result indicating where the data were exported to.',
    }),
  })
  .openapi({
    description:
      'Response of the ExportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaExportProductsResponse')

const GoogleCloudRetailV2alphaExportUserEventsResponseSchema = z
  .object({
    errorSamples: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({ description: 'A sample of errors encountered while processing the request.' }),
    errorsConfig: GoogleCloudRetailV2alphaExportErrorsConfigSchema.exactOptional().openapi({
      description: 'This field is never set.',
    }),
    outputResult: GoogleCloudRetailV2alphaOutputResultSchema.exactOptional().openapi({
      description: 'Output result indicating where the data were exported to.',
    }),
  })
  .openapi({
    description:
      'Response of the ExportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaExportUserEventsResponse')

const GoogleCloudRetailV2alphaGcsSourceSchema = z
  .object({
    dataSchema: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The schema to use when parsing the data from the source. Supported values for product imports: * `product` (default): One JSON Product per line. Each product must have a valid Product.id. * `product_merchant_center`: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mc). Supported values for user events imports: * `user_event` (default): One JSON UserEvent per line. * `user_event_ga360`: Using https://support.google.com/analytics/answer/3437719. Supported values for control imports: * `control` (default): One JSON Control per line. Supported values for catalog attribute imports: * `catalog_attribute` (default): One CSV CatalogAttribute per line.',
      }),
    inputUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. Google Cloud Storage URIs to input files. URI can be up to 2000 characters long. URIs can match the full object path (for example, `gs://bucket/directory/object.json`) or a pattern matching one or more files, such as `gs://bucket/directory/*.json`. A request can contain at most 100 files, and each file can be up to 2 GB. See [Importing product information](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog) for the expected file format and setup instructions.',
      }),
  })
  .openapi({ description: 'Google Cloud Storage location for input content.', required: [] })
  .openapi('GoogleCloudRetailV2alphaGcsSource')

const GoogleCloudRetailV2alphaGetDefaultBranchResponseSchema = z
  .object({
    branch: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Full resource name of the branch id currently set as default branch.',
      }),
    note: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This corresponds to SetDefaultBranchRequest.note field, when this branch was set as default.',
      }),
    setTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when this branch is set to default.' }),
  })
  .openapi({ description: 'Response message of CatalogService.GetDefaultBranch.', required: [] })
  .openapi('GoogleCloudRetailV2alphaGetDefaultBranchResponse')

const GoogleCloudRetailV2alphaImportCompletionDataRequestSchema = z
  .object({
    inputConfig: GoogleCloudRetailV2alphaCompletionDataInputConfigSchema.exactOptional().openapi({
      description: 'Required. The desired input location of the data.',
    }),
    notificationPubsubTopic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`.',
      }),
  })
  .openapi({ description: 'Request message for ImportCompletionData methods.', required: [] })
  .openapi('GoogleCloudRetailV2alphaImportCompletionDataRequest')

const GoogleCloudRetailV2alphaImportCompletionDataResponseSchema = z
  .object({
    errorSamples: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({ description: 'A sample of errors encountered while processing the request.' }),
  })
  .openapi({
    description:
      'Response of the ImportCompletionDataRequest. If the long running operation is done, this message is returned by the google.longrunning.Operations.response field if the operation is successful.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaImportCompletionDataResponse')

const GoogleCloudRetailV2alphaImportErrorsConfigSchema = z
  .object({
    gcsPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message.',
      }),
  })
  .openapi({ description: 'Configuration of destination for Import related errors.', required: [] })
  .openapi('GoogleCloudRetailV2alphaImportErrorsConfig')

const GoogleCloudRetailV2alphaTransformedUserEventsMetadataSchema = z
  .object({
    sourceEventsCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Count of entries in the source user events BigQuery table.' }),
    transformedEventsCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Count of entries in the transformed user events BigQuery table, which could be different from the actually imported number of user events.',
      }),
  })
  .openapi({ description: 'Metadata related to transform user events operation.', required: [] })
  .openapi('GoogleCloudRetailV2alphaTransformedUserEventsMetadata')

const GoogleCloudRetailV2alphaImportMetadataSchema = z
  .object({
    createTime: z.string().exactOptional().openapi({ description: 'Operation create time.' }),
    failureCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Count of entries that encountered errors while processing.' }),
    notificationPubsubTopic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. This field is never set.' }),
    successCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Count of entries that were processed successfully.' }),
    transformedUserEventsMetadata:
      GoogleCloudRetailV2alphaTransformedUserEventsMetadataSchema.exactOptional().openapi({
        description: 'Metadata related to transform user events.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Operation last update time. If the operation is done, this is also the finish time.',
      }),
  })
  .openapi({
    description:
      'Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaImportMetadata')

const GoogleCloudRetailV2alphaProductSchema: z.ZodType<GoogleCloudRetailV2alphaProductType> = z
  .lazy(() =>
    z
      .object({
        attributes: z
          .record(z.string(), GoogleCloudRetailV2alphaCustomAttributeSchema)
          .exactOptional()
          .openapi({
            description:
              'Highly encouraged. Extra product attributes to be included. For example, for products, this could include the store name, vendor, style, color, etc. These are very strong signals for recommendation model, thus we highly recommend providing the attributes here. Features that can take on one of a limited number of possible values. Two types of features can be set are: Textual features. some examples would be the brand/maker of a product, or country of a customer. Numerical features. Some examples would be the height/weight of a product, or age of a customer. For example: `{ "vendor": {"text": ["vendor123", "vendor456"]}, "lengths_cm": {"numbers":[2.3, 15.4]}, "heights_cm": {"numbers":[8.1, 6.4]} }`. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * Max entries count: 200. * The key must be a UTF-8 encoded string with a length limit of 128 characters. * For indexable attribute, the key must match the pattern: `a-zA-Z0-9*`. For example, `key0LikeThis` or `KEY_1_LIKE_THIS`. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a non-empty UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed.',
          }),
        audience: GoogleCloudRetailV2alphaAudienceSchema.exactOptional().openapi({
          description:
            'The target group associated with a given audience (e.g. male, veterans, car owners, musicians, etc.) of the product.',
        }),
        availability: z
          .enum(['AVAILABILITY_UNSPECIFIED', 'IN_STOCK', 'OUT_OF_STOCK', 'PREORDER', 'BACKORDER'])
          .exactOptional()
          .openapi({
            description:
              'The online availability of the Product. Default to Availability.IN_STOCK. Corresponding properties: Google Merchant Center property [availability](https://support.google.com/merchants/answer/6324448). Schema.org property [Offer.availability](https://schema.org/availability).',
          }),
        availableQuantity: z
          .int32()
          .exactOptional()
          .openapi({ description: 'The available quantity of the item.' }),
        availableTime: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The timestamp when this Product becomes available for SearchService.Search. Note that this is only applicable to Type.PRIMARY and Type.COLLECTION, and ignored for Type.VARIANT.',
          }),
        brands: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'The brands of the product. A maximum of 30 brands are allowed. Each brand must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [brand](https://support.google.com/merchants/answer/6324351). Schema.org property [Product.brand](https://schema.org/brand).',
          }),
        categories: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'Product categories. This field is repeated for supporting one product belonging to several parallel categories. Strongly recommended using the full path for better search / recommendation quality. To represent full path of category, use \'>\' sign to separate different hierarchies. If \'>\' is part of the category name, replace it with other character(s). For example, if a shoes product belongs to both ["Shoes & Accessories" -> "Shoes"] and ["Sports & Fitness" -> "Athletic Clothing" -> "Shoes"], it could be represented as: "categories": [ "Shoes & Accessories > Shoes", "Sports & Fitness > Athletic Clothing > Shoes" ] Must be set for Type.PRIMARY Product otherwise an INVALID_ARGUMENT error is returned. At most 250 values are allowed per Product. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property google_product_category. Schema.org property [Product.category] (https://schema.org/category). [mc_google_product_category]: https://support.google.com/merchants/answer/6324436',
          }),
        collectionMemberIds: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'The id of the collection members when type is Type.COLLECTION. Non-existent product ids are allowed. The type of the members must be either Type.PRIMARY or Type.VARIANT otherwise an INVALID_ARGUMENT error is thrown. Should not set it for other types. A maximum of 1000 values are allowed. Otherwise, an INVALID_ARGUMENT error is return.',
          }),
        colorInfo: GoogleCloudRetailV2alphaColorInfoSchema.exactOptional().openapi({
          description:
            'The color of the product. Corresponding properties: Google Merchant Center property [color](https://support.google.com/merchants/answer/6324487). Schema.org property [Product.color](https://schema.org/color).',
        }),
        conditions: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'The condition of the product. Strongly encouraged to use the standard values: "new", "refurbished", "used". A maximum of 1 value is allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [condition](https://support.google.com/merchants/answer/6324469). Schema.org property [Offer.itemCondition](https://schema.org/itemCondition).',
          }),
        description: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Product description. This field must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [description](https://support.google.com/merchants/answer/6324468). Schema.org property [Product.description](https://schema.org/description).',
          }),
        expireTime: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The timestamp when this product becomes unavailable for SearchService.Search. Note that this is only applicable to Type.PRIMARY and Type.COLLECTION, and ignored for Type.VARIANT. In general, we suggest the users to delete the stale products explicitly, instead of using this field to determine staleness. If it is set, the Product is not available for SearchService.Search after expire_time. However, the product can still be retrieved by ProductService.GetProduct and ProductService.ListProducts. expire_time must be later than available_time and publish_time, otherwise an INVALID_ARGUMENT error is thrown. Corresponding properties: Google Merchant Center property [expiration_date](https://support.google.com/merchants/answer/6324499).',
          }),
        fulfillmentInfo: z
          .array(GoogleCloudRetailV2alphaFulfillmentInfoSchema)
          .exactOptional()
          .openapi({
            description:
              'Fulfillment information, such as the store IDs for in-store pickup or region IDs for different shipping methods. All the elements must have distinct FulfillmentInfo.type. Otherwise, an INVALID_ARGUMENT error is returned.',
          }),
        gtin: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The Global Trade Item Number (GTIN) of the product. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. This field must be a Unigram. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [gtin](https://support.google.com/merchants/answer/6324461). Schema.org property [Product.isbn](https://schema.org/isbn), [Product.gtin8](https://schema.org/gtin8), [Product.gtin12](https://schema.org/gtin12), [Product.gtin13](https://schema.org/gtin13), or [Product.gtin14](https://schema.org/gtin14). If the value is not a valid GTIN, an INVALID_ARGUMENT error is returned.',
          }),
        id: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Immutable. Product identifier, which is the final component of name. For example, this field is "id_1", if name is `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/id_1`. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [id](https://support.google.com/merchants/answer/6324405). Schema.org property [Product.sku](https://schema.org/sku).',
          }),
        images: z
          .array(GoogleCloudRetailV2alphaImageSchema)
          .exactOptional()
          .openapi({
            description:
              'Product images for the product. We highly recommend putting the main image first. A maximum of 300 images are allowed. Corresponding properties: Google Merchant Center property [image_link](https://support.google.com/merchants/answer/6324350). Schema.org property [Product.image](https://schema.org/image).',
          }),
        languageCode: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). For product prediction, this field is ignored and the model automatically detects the text language. The Product can include text in different languages, but duplicating Products to provide text in multiple languages can result in degraded model performance. For product search this field is in use. It defaults to "en-US" if unset.',
          }),
        localInventories: z
          .array(GoogleCloudRetailV2alphaLocalInventorySchema)
          .exactOptional()
          .openapi({
            description:
              'Output only. A list of local inventories specific to different places. This field can be managed by ProductService.AddLocalInventories and ProductService.RemoveLocalInventories APIs if fine-grained, high-volume updates are necessary.',
            readOnly: true,
          }),
        materials: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'The material of the product. For example, "leather", "wooden". A maximum of 20 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 200 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [material](https://support.google.com/merchants/answer/6324410). Schema.org property [Product.material](https://schema.org/material).',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Immutable. Full resource name of the product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`.',
          }),
        patterns: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'The pattern or graphic print of the product. For example, "striped", "polka dot", "paisley". A maximum of 20 values are allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [pattern](https://support.google.com/merchants/answer/6324483). Schema.org property [Product.pattern](https://schema.org/pattern).',
          }),
        priceInfo: GoogleCloudRetailV2alphaPriceInfoSchema.exactOptional().openapi({
          description:
            'Product price and cost information. Corresponding properties: Google Merchant Center property [price](https://support.google.com/merchants/answer/6324371).',
        }),
        primaryProductId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Variant group identifier. Must be an id, with the same parent branch with this product. Otherwise, an error is thrown. For Type.PRIMARY Products, this field can only be empty or set to the same value as id. For VARIANT Products, this field cannot be empty. A maximum of 2,000 products are allowed to share the same Type.PRIMARY Product. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [item_group_id](https://support.google.com/merchants/answer/6324507). Schema.org property [Product.inProductGroupWithID](https://schema.org/inProductGroupWithID).',
          }),
        promotions: z
          .array(GoogleCloudRetailV2alphaPromotionSchema)
          .exactOptional()
          .openapi({
            description:
              'The promotions applied to the product. A maximum of 10 values are allowed per Product. Only Promotion.promotion_id will be used, other fields will be ignored if set.',
          }),
        publishTime: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The timestamp when the product is published by the retailer for the first time, which indicates the freshness of the products. Note that this field is different from available_time, given it purely describes product freshness regardless of when it is available on search and recommendation.',
          }),
        rating: GoogleCloudRetailV2alphaRatingSchema.exactOptional().openapi({
          description: 'The rating of this product.',
        }),
        retrievableFields: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Indicates which fields in the Products are returned in SearchResponse. Supported fields for all types: * audience * availability * brands * color_info * conditions * gtin * materials * name * patterns * price_info * rating * sizes * title * uri Supported fields only for Type.PRIMARY and Type.COLLECTION: * categories * description * images Supported fields only for Type.VARIANT: * Only the first image in images To mark attributes as retrievable, include paths of the form "attributes.key" where "key" is the key of a custom attribute, as specified in attributes. For Type.PRIMARY and Type.COLLECTION, the following fields are always returned in SearchResponse by default: * name For Type.VARIANT, the following fields are always returned in by default: * name * color_info The maximum number of paths is 30. Otherwise, an INVALID_ARGUMENT error is returned. Note: Returning more fields in SearchResponse can increase response payload size and serving latency. This field is deprecated. Use the retrievable site-wide control instead.',
          }),
        sizes: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'The size of the product. To represent different size systems or size types, consider using this format: [[[size_system:]size_type:]size_value]. For example, in "US:MENS:M", "US" represents size system; "MENS" represents size type; "M" represents size value. In "GIRLS:27", size system is empty; "GIRLS" represents size type; "27" represents size value. In "32 inches", both size system and size type are empty, while size value is "32 inches". A maximum of 20 values are allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [size](https://support.google.com/merchants/answer/6324492), [size_type](https://support.google.com/merchants/answer/6324497), and [size_system](https://support.google.com/merchants/answer/6324502). Schema.org property [Product.size](https://schema.org/size).',
          }),
        tags: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'Custom tags associated with the product. At most 250 values are allowed per Product. This value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This tag can be used for filtering recommendation results by passing the tag as part of the PredictRequest.filter. Corresponding properties: Google Merchant Center property [custom_label_0–4](https://support.google.com/merchants/answer/6324473).',
          }),
        title: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Required. Product title. This field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [title](https://support.google.com/merchants/answer/6324415). Schema.org property [Product.name](https://schema.org/name).',
          }),
        ttl: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Input only. The TTL (time to live) of the product. Note that this is only applicable to Type.PRIMARY and Type.COLLECTION, and ignored for Type.VARIANT. In general, we suggest the users to delete the stale products explicitly, instead of using this field to determine staleness. If it is set, it must be a non-negative value, and expire_time is set as current timestamp plus ttl. The derived expire_time is returned in the output and ttl is left blank when retrieving the Product. If it is set, the product is not available for SearchService.Search after current timestamp plus ttl. However, the product can still be retrieved by ProductService.GetProduct and ProductService.ListProducts.',
          }),
        type: z
          .enum(['TYPE_UNSPECIFIED', 'PRIMARY', 'VARIANT', 'COLLECTION'])
          .exactOptional()
          .openapi({
            description:
              'Immutable. The type of the product. Default to Catalog.product_level_config.ingestion_product_type if unset.',
          }),
        uri: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Canonical URL directly linking to the product detail page. It is strongly recommended to provide a valid uri for the product, otherwise the service performance could be significantly degraded. This field must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [link](https://support.google.com/merchants/answer/6324416). Schema.org property [Offer.url](https://schema.org/url).',
          }),
        variants: z
          .array(GoogleCloudRetailV2alphaProductSchema)
          .exactOptional()
          .openapi({
            description:
              "Output only. Product variants grouped together on primary product which share similar product attributes. It's automatically grouped by primary_product_id for all the product variants. Only populated for Type.PRIMARY Products. Note: This field is OUTPUT_ONLY for ProductService.GetProduct. Do not set this field in API requests.",
            readOnly: true,
          }),
      })
      .openapi({
        description:
          'Product captures all metadata information of items to be recommended or searched.',
        required: [],
      }),
  )
  .openapi('GoogleCloudRetailV2alphaProduct')

const GoogleCloudRetailV2alphaProductInlineSourceSchema = z
  .object({
    products: z
      .array(GoogleCloudRetailV2alphaProductSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. A list of products to update/create. Each product must have a valid Product.id. Recommended max of 100 items.',
      }),
  })
  .openapi({
    description: 'The inline source for the input config for ImportProducts method.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaProductInlineSource')

const GoogleCloudRetailV2alphaProductInputConfigSchema = z
  .object({
    bigQuerySource: GoogleCloudRetailV2alphaBigQuerySourceSchema.exactOptional().openapi({
      description: 'BigQuery input source.',
    }),
    gcsSource: GoogleCloudRetailV2alphaGcsSourceSchema.exactOptional().openapi({
      description: 'Google Cloud Storage location for the input content.',
    }),
    productInlineSource: GoogleCloudRetailV2alphaProductInlineSourceSchema.exactOptional().openapi({
      description: 'The Inline source for the input content for products.',
    }),
  })
  .openapi({ description: 'The input config source for products.', required: [] })
  .openapi('GoogleCloudRetailV2alphaProductInputConfig')

const GoogleCloudRetailV2alphaImportProductsRequestSchema = z
  .object({
    errorsConfig: GoogleCloudRetailV2alphaImportErrorsConfigSchema.exactOptional().openapi({
      description: 'The desired location of errors incurred during the Import.',
    }),
    inputConfig: GoogleCloudRetailV2alphaProductInputConfigSchema.exactOptional().openapi({
      description: 'Required. The desired input location of the data.',
    }),
    notificationPubsubTopic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full Pub/Sub topic name for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`. It has to be within the same project as ImportProductsRequest.parent. Make sure that `service-@gcp-sa-retail.iam.gserviceaccount.com` has the `pubsub.topics.publish` IAM permission on the topic.',
      }),
    reconciliationMode: z
      .enum(['RECONCILIATION_MODE_UNSPECIFIED', 'INCREMENTAL', 'FULL'])
      .exactOptional()
      .openapi({
        description:
          'The mode of reconciliation between existing products and the products to be imported. Defaults to ReconciliationMode.INCREMENTAL.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. This field has no effect.' }),
    skipDefaultBranchProtection: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, this performs the FULL import even if it would delete a large proportion of the products in the default branch, which could potentially cause outages if you have live predict/search traffic. Only supported when ImportProductsRequest.reconciliation_mode is set to `FULL`.',
      }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates which fields in the provided imported `products` to update. If not set, all fields are updated.',
      }),
  })
  .openapi({ description: 'Request message for Import methods.', required: [] })
  .openapi('GoogleCloudRetailV2alphaImportProductsRequest')

const GoogleCloudRetailV2alphaImportProductsResponseSchema = z
  .object({
    errorSamples: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({ description: 'A sample of errors encountered while processing the request.' }),
    errorsConfig: GoogleCloudRetailV2alphaImportErrorsConfigSchema.exactOptional().openapi({
      description: 'Echoes the destination for the complete errors in the request if set.',
    }),
  })
  .openapi({
    description:
      'Response of the ImportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaImportProductsResponse')

const GoogleCloudRetailV2alphaProductDetailSchema = z
  .object({
    product: GoogleCloudRetailV2alphaProductSchema.exactOptional().openapi({
      description:
        'Required. Product information. Required field(s): * Product.id Optional override field(s): * Product.price_info If any supported optional fields are provided, we will treat them as a full override when looking up product information from the catalog. Thus, it is important to ensure that the overriding fields are accurate and complete. All other product fields are ignored and instead populated via catalog lookup after event ingestion.',
    }),
    quantity: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Quantity of the product associated with the user event. For example, this field will be 2 if two products are added to the shopping cart for `purchase-complete` event. Required for `add-to-cart` and `purchase-complete` event types.',
      }),
  })
  .openapi({
    description: 'Detailed product information associated with a user event.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaProductDetail')

const GoogleCloudRetailV2alphaPurchaseTransactionSchema = z
  .object({
    cost: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'All the costs associated with the products. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs, such that: * Profit = revenue - tax - cost',
      }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Currency code. Use three-character ISO-4217 code.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The transaction ID with a length limit of 128 characters.' }),
    revenue: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Required. Total non-zero revenue or grand total associated with the transaction. This value include shipping, tax, or other adjustments to total revenue that you want to include as part of your revenue calculations.',
      }),
    tax: z
      .float32()
      .exactOptional()
      .openapi({ description: 'All the taxes associated with the transaction.' }),
  })
  .openapi({
    description: 'A transaction represents the entire purchase transaction.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaPurchaseTransaction')

const GoogleCloudRetailV2alphaUserInfoSchema = z
  .object({
    directUserRequest: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the request is made directly from the end user, in which case the ip_address and user_agent can be populated from the HTTP request. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events). This should not be set when using the JavaScript tag in UserEventService.CollectUserEvent.',
      }),
    ipAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The end user\'s IP address. This field is used to extract location information for personalization. This field must be either an IPv4 address (e.g. "104.133.9.80") or an IPv6 address (e.g. "2001:0db8:85a3:0000:0000:8a2e:0370:7334"). Otherwise, an INVALID_ARGUMENT error is returned. This should not be set when: * setting SearchRequest.user_info. * using the JavaScript tag in UserEventService.CollectUserEvent or if direct_user_request is set.',
      }),
    userAgent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User agent as included in the HTTP header. Required for getting SearchResponse.sponsored_results. The field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This should not be set when using the client side event reporting with GTM or JavaScript tag in UserEventService.CollectUserEvent or if direct_user_request is set.',
      }),
    userId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Highly recommended for logged-in users. Unique identifier for logged-in user, such as a user name. Don't set for anonymous users. Always use a hashed value for this ID. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.",
      }),
  })
  .openapi({ description: 'Information of an end user.', required: [] })
  .openapi('GoogleCloudRetailV2alphaUserInfo')

const GoogleCloudRetailV2alphaUserEventSchema = z
  .object({
    attributes: z
      .record(z.string(), GoogleCloudRetailV2alphaCustomAttributeSchema)
      .exactOptional()
      .openapi({
        description:
          'Extra user event features to include in the recommendation model. If you provide custom attributes for ingested user events, also include them in the user events that you associate with prediction requests. Custom attribute formatting must be consistent between imported events and events provided with prediction requests. This lets the Retail API use those custom attributes when training models and serving predictions, which helps improve recommendation quality. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * The key must be a UTF-8 encoded string with a length limit of 5,000 characters. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed. For product recommendations, an example of extra user information is traffic_channel, which is how a user arrives at the site. Users can arrive at the site by coming to the site directly, coming through Google search, or in other ways.',
      }),
    attributionToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Highly recommended for user events that are the result of PredictionService.Predict. This field enables accurate attribution of recommendation model performance. The value must be a valid PredictResponse.attribution_token for user events that are the result of PredictionService.Predict. The value must be a valid SearchResponse.attribution_token for user events that are the result of SearchService.Search. This token enables us to accurately attribute page view or purchase back to the event and the particular predict response containing this clicked/purchased product. If user clicks on product K in the recommendation results, pass PredictResponse.attribution_token as a URL parameter to product K's page. When recording events on product K's page, log the PredictResponse.attribution_token to this field.",
      }),
    cartId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID or name of the associated shopping cart. This ID is used to associate multiple items added or present in the cart before purchase. This can only be set for `add-to-cart`, `purchase-complete`, or `shopping-cart-page-view` events.',
      }),
    completionDetail: GoogleCloudRetailV2alphaCompletionDetailSchema.exactOptional().openapi({
      description:
        'The main auto-completion details related to the event. This field should be set for `search` event when autocomplete function is enabled and the user clicks a suggestion for search.',
    }),
    entity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The entity for customers that may run multiple different entities, domains, sites or regions, for example, `Google US`, `Google Ads`, `Waymo`, `google.com`, `youtube.com`, etc. It is recommended to set this field to get better per-entity search, completion and prediction results.',
      }),
    eventTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Only required for UserEventService.ImportUserEvents method. Timestamp of when the user event happened.',
      }),
    eventType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. User event type. Allowed values are: * `add-to-cart`: Products being added to cart. * `category-page-view`: Special pages such as sale or promotion pages viewed. * `detail-page-view`: Products detail page viewed. * `home-page-view`: Homepage viewed. * `promotion-offered`: Promotion is offered to a user. * `promotion-not-offered`: Promotion is not offered to a user. * `purchase-complete`: User finishing a purchase. * `search`: Product search. * `shopping-cart-page-view`: User viewing a shopping cart.',
      }),
    experimentIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups (e.g. using Retail API, using different recommendation models).',
      }),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered. See SearchRequest.filter for definition and syntax. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
    offset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer that specifies the current offset for pagination (the 0-indexed starting location, amongst the products deemed by the API as relevant). See SearchRequest.offset for definition. If this field is negative, an INVALID_ARGUMENT is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
    orderBy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The order in which products are returned. See SearchRequest.order_by for definition and syntax. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
    pageCategories: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The categories associated with a category page. To represent full path of category, use \'>\' sign to separate different hierarchies. If \'>\' is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : ["Sales > 2017 Black Friday Deals"]. Required for `category-page-view` events. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
    pageViewId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique ID of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageViewId` property should be kept the same for all these events so that they can be grouped together properly. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically.',
      }),
    productDetails: z
      .array(GoogleCloudRetailV2alphaProductDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'The main product details related to the event. This field is optional except for the following event types: * `add-to-cart` * `detail-page-view` * `purchase-complete` In a `search` event, this field represents the products returned to the end user on the current page (the end user may have not finished browsing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new `search` event with different product_details is desired. The end user may have not finished browsing the whole page yet.',
      }),
    purchaseTransaction: GoogleCloudRetailV2alphaPurchaseTransactionSchema.exactOptional().openapi({
      description:
        'A transaction represents the entire purchase transaction. Required for `purchase-complete` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.',
    }),
    referrerUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The referrer URL of the current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically.',
      }),
    searchQuery: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The user's search query. See SearchRequest.query for definition. The value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.",
      }),
    sessionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for tracking a visitor session with a length limit of 128 bytes. A session is an aggregation of an end user behavior in a time span. A general guideline to populate the sesion_id: 1. If user has no activity for 30 min, a new session_id should be assigned. 2. The session_id should be unique across users, suggest use uuid or add visitor_id as prefix.',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Complete URL (window.location.href) of the user's current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. Maximum length 5,000 characters.",
      }),
    userInfo: GoogleCloudRetailV2alphaUserInfoSchema.exactOptional().openapi({
      description: 'User information.',
    }),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. The field should not contain PII or user-data. We recommend to use Google Analytics [Client ID](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#clientId) for this field.",
      }),
  })
  .openapi({
    description:
      "UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.",
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaUserEvent')

const GoogleCloudRetailV2alphaUserEventInlineSourceSchema = z
  .object({
    userEvents: z
      .array(GoogleCloudRetailV2alphaUserEventSchema)
      .exactOptional()
      .openapi({
        description: 'Required. A list of user events to import. Recommended max of 10k items.',
      }),
  })
  .openapi({
    description: 'The inline source for the input config for ImportUserEvents method.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaUserEventInlineSource')

const GoogleCloudRetailV2alphaUserEventInputConfigSchema = z
  .object({
    bigQuerySource: GoogleCloudRetailV2alphaBigQuerySourceSchema.exactOptional().openapi({
      description: 'Required. BigQuery input source.',
    }),
    gcsSource: GoogleCloudRetailV2alphaGcsSourceSchema.exactOptional().openapi({
      description: 'Required. Google Cloud Storage location for the input content.',
    }),
    userEventInlineSource:
      GoogleCloudRetailV2alphaUserEventInlineSourceSchema.exactOptional().openapi({
        description: 'Required. The Inline source for the input content for UserEvents.',
      }),
  })
  .openapi({ description: 'The input config source for user events.', required: [] })
  .openapi('GoogleCloudRetailV2alphaUserEventInputConfig')

const GoogleCloudRetailV2alphaImportUserEventsRequestSchema = z
  .object({
    errorsConfig: GoogleCloudRetailV2alphaImportErrorsConfigSchema.exactOptional().openapi({
      description:
        'The desired location of errors incurred during the Import. Cannot be set for inline user event imports.',
    }),
    inputConfig: GoogleCloudRetailV2alphaUserEventInputConfigSchema.exactOptional().openapi({
      description: 'Required. The desired input location of the data.',
    }),
  })
  .openapi({ description: 'Request message for the ImportUserEvents request.', required: [] })
  .openapi('GoogleCloudRetailV2alphaImportUserEventsRequest')

const GoogleCloudRetailV2alphaUserEventImportSummarySchema = z
  .object({
    joinedEventsCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Count of user events imported with complete existing catalog information.',
      }),
    unjoinedEventsCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Count of user events imported, but with catalog information not found in the imported catalog.',
      }),
  })
  .openapi({
    description:
      'A summary of import result. The UserEventImportSummary summarizes the import status for user events.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaUserEventImportSummary')

const GoogleCloudRetailV2alphaImportUserEventsResponseSchema = z
  .object({
    errorSamples: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({ description: 'A sample of errors encountered while processing the request.' }),
    errorsConfig: GoogleCloudRetailV2alphaImportErrorsConfigSchema.exactOptional().openapi({
      description:
        'Echoes the destination for the complete errors if this field was set in the request.',
    }),
    importSummary: GoogleCloudRetailV2alphaUserEventImportSummarySchema.exactOptional().openapi({
      description: 'Aggregated statistics of user event import status.',
    }),
  })
  .openapi({
    description:
      'Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaImportUserEventsResponse')

const GoogleCloudRetailV2alphaListCatalogsResponseSchema = z
  .object({
    catalogs: z
      .array(GoogleCloudRetailV2alphaCatalogSchema)
      .exactOptional()
      .openapi({ description: "All the customer's Catalogs." }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as ListCatalogsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response for CatalogService.ListCatalogs method.', required: [] })
  .openapi('GoogleCloudRetailV2alphaListCatalogsResponse')

const GoogleCloudRetailV2alphaListControlsResponseSchema = z
  .object({
    controls: z
      .array(GoogleCloudRetailV2alphaControlSchema)
      .exactOptional()
      .openapi({ description: 'All the Controls for a given catalog.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token, if not returned indicates the last page.' }),
  })
  .openapi({ description: 'Response for ListControls method.', required: [] })
  .openapi('GoogleCloudRetailV2alphaListControlsResponse')

const GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilterSchema = z
  .object({
    primaryFeedId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Merchant Center primary feed ID.' }),
    primaryFeedName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Merchant Center primary feed name. The name is used for the display purposes only.',
      }),
  })
  .openapi({ description: 'Merchant Center Feed filter criterion.', required: [] })
  .openapi('GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter')

const GoogleCloudRetailV2alphaMerchantCenterAccountLinkSchema = z
  .object({
    branchId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The branch id (e.g. 0/1/2) within the catalog that products from merchant_center_account_id are streamed to. When updating this field, an empty value will use the currently configured default branch. However, changing the default branch later on won't change the linked branch here. A single branch id can only have one linked merchant center account id.",
      }),
    feedFilters: z
      .array(GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilterSchema)
      .exactOptional()
      .openapi({
        description:
          'Criteria for the Merchant Center feeds to be ingested via the link. All offers will be ingested if the list is empty. Otherwise the offers will be ingested from selected feeds.',
      }),
    feedLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The FeedLabel used to perform filtering. Note: this replaces [region_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.feed_label). Example value: `US`. Example value: `FeedLabel1`.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. MerchantCenterAccountLink identifier, which is the final component of name. This field is auto generated and follows the convention: `BranchId_MerchantCenterAccountId`. `projects/*/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/id_1`.',
        readOnly: true,
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). ISO 639-1. This specifies the language of offers in Merchant Center that will be accepted. If empty, no language filtering will be performed. Example value: `en`.',
      }),
    merchantCenterAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The linked [Merchant center account id](https://developers.google.com/shopping-content/guides/accountstatuses). The account must be a standalone account or a sub-account of a MCA.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. Full resource name of the Merchant Center Account Link, such as `projects/*/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/merchant_center_account_link`.',
        readOnly: true,
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Google Cloud project ID.', readOnly: true }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'PENDING', 'ACTIVE', 'FAILED'])
      .exactOptional()
      .openapi({ description: 'Output only. Represents the state of the link.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a link between a Merchant Center account and a branch. Once a link is established, products from the linked merchant center account will be streamed to the linked branch.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaMerchantCenterAccountLink')

const GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponseSchema = z
  .object({
    merchantCenterAccountLinks: z
      .array(GoogleCloudRetailV2alphaMerchantCenterAccountLinkSchema)
      .exactOptional()
      .openapi({ description: 'The links.' }),
  })
  .openapi({
    description:
      'Response for MerchantCenterAccountLinkService.ListMerchantCenterAccountLinks method.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponse')

const GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidateSchema = z
  .object({
    servingConfigId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This has to be a valid ServingConfig identifier. For example, for a ServingConfig with full name: `projects/*/locations/global/catalogs/default_catalog/servingConfigs/my_candidate_config`, this would be `my_candidate_config`.',
      }),
  })
  .openapi({
    description:
      'A candidate to consider for a given panel. Currently only ServingConfig are valid candidates.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate')

const GoogleCloudRetailV2alphaModelPageOptimizationConfigPanelSchema = z
  .object({
    candidates: z
      .array(GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidateSchema)
      .exactOptional()
      .openapi({ description: 'Required. The candidates to consider on the panel.' }),
    defaultCandidate:
      GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidateSchema.exactOptional().openapi({
        description:
          'Required. The default candidate. If the model fails at serving time, we fall back to the default.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The name to display for the panel.' }),
  })
  .openapi({
    description: 'An individual panel with a list of ServingConfigs to consider for it.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel')

const GoogleCloudRetailV2alphaModelPageOptimizationConfigSchema = z
  .object({
    pageOptimizationEventType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The type of UserEvent this page optimization is shown for. Each page has an associated event type - this will be the corresponding event type for the page that the page optimization model is used on. Supported types: * `add-to-cart`: Products being added to cart. * `detail-page-view`: Products detail page viewed. * `home-page-view`: Homepage viewed * `category-page-view`: Homepage viewed * `shopping-cart-page-view`: User viewing a shopping cart. `home-page-view` only allows models with type `recommended-for-you`. All other page_optimization_event_type allow all Model.types.',
      }),
    panels: z
      .array(GoogleCloudRetailV2alphaModelPageOptimizationConfigPanelSchema)
      .exactOptional()
      .openapi({ description: 'Required. A list of panel configurations. Limit = 5.' }),
    restriction: z
      .enum([
        'RESTRICTION_UNSPECIFIED',
        'NO_RESTRICTION',
        'UNIQUE_SERVING_CONFIG_RESTRICTION',
        'UNIQUE_MODEL_RESTRICTION',
        'UNIQUE_MODEL_TYPE_RESTRICTION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Optional. How to restrict results across panels e.g. can the same ServingConfig be shown on multiple panels at once. If unspecified, default to `UNIQUE_MODEL_RESTRICTION`.',
      }),
  })
  .openapi({
    description:
      'The PageOptimizationConfig for model training. This determines how many panels to optimize for, and which serving configs to consider for each panel. The purpose of this model is to optimize which ServingConfig to show on which panels in way that optimizes the visitors shopping journey.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaModelPageOptimizationConfig')

const GoogleCloudRetailV2alphaModelServingConfigListSchema = z
  .object({
    servingConfigIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A set of valid serving configs that may be used for `PAGE_OPTIMIZATION`.',
      }),
  })
  .openapi({
    description:
      'Represents an ordered combination of valid serving configs, which can be used for `PAGE_OPTIMIZATION` recommendations.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaModelServingConfigList')

const GoogleCloudRetailV2alphaModelSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp the Recommendation Model was created at.',
        readOnly: true,
      }),
    dataState: z
      .enum(['DATA_STATE_UNSPECIFIED', 'DATA_OK', 'DATA_ERROR'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The state of data requirements for this model: `DATA_OK` and `DATA_ERROR`. Recommendation model cannot be trained if the data is in `DATA_ERROR` state. Recommendation model can have `DATA_ERROR` state even if serving state is `ACTIVE`: models were trained successfully before, but cannot be refreshed because model no longer has sufficient data for training.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the model. Should be human readable, used to display Recommendation Models in the Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024 characters.',
      }),
    filteringOption: z
      .enum([
        'RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED',
        'RECOMMENDATIONS_FILTERING_DISABLED',
        'RECOMMENDATIONS_FILTERING_ENABLED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering by attributes is enabled for the model.',
      }),
    lastTuneTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the latest successful tune finished.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The fully qualified resource name of the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` catalog_id has char limit of 50. recommendation_model_id has char limit of 40.',
      }),
    optimizationObjective: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The optimization objective e.g. `cvr`. Currently supported values: `ctr`, `cvr`, `revenue-per-order`. If not specified, we choose default based on model type. Default depends on type of recommendation: `recommended-for-you` => `ctr` `others-you-may-like` => `ctr` `frequently-bought-together` => `revenue_per_order` This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.',
      }),
    pageOptimizationConfig:
      GoogleCloudRetailV2alphaModelPageOptimizationConfigSchema.exactOptional().openapi({
        description: 'Optional. The page optimization config.',
      }),
    periodicTuningState: z
      .enum([
        'PERIODIC_TUNING_STATE_UNSPECIFIED',
        'PERIODIC_TUNING_DISABLED',
        'ALL_TUNING_DISABLED',
        'PERIODIC_TUNING_ENABLED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the `TuneModel` method. Default value is `PERIODIC_TUNING_ENABLED`.',
      }),
    servingConfigLists: z
      .array(GoogleCloudRetailV2alphaModelServingConfigListSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The list of valid serving configs associated with the PageOptimizationConfig.',
        readOnly: true,
      }),
    servingState: z
      .enum(['SERVING_STATE_UNSPECIFIED', 'INACTIVE', 'ACTIVE', 'TUNED'])
      .exactOptional()
      .openapi({
        description: 'Output only. The serving state of the model: `ACTIVE`, `NOT_ACTIVE`.',
        readOnly: true,
      }),
    trainingState: z
      .enum(['TRAINING_STATE_UNSPECIFIED', 'PAUSED', 'TRAINING'])
      .exactOptional()
      .openapi({
        description:
          'Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before.',
      }),
    tuningOperation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The tune operation associated with the model. Can be used to determine if there is an ongoing tune for this recommendation. Empty field implies no tune is goig on.',
        readOnly: true,
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The type of model e.g. `home-page`. Currently supported values: `recommended-for-you`, `others-you-may-like`, `frequently-bought-together`, `page-optimization`, `similar-items`, `buy-it-again`, `on-sale-items`, and `recently-viewed`(readonly value). This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Timestamp the Recommendation Model was last updated. E.g. if a Recommendation Model was paused - this would be the time the pause was initiated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaModel')

const GoogleCloudRetailV2alphaListModelsResponseSchema = z
  .object({
    models: z
      .array(GoogleCloudRetailV2alphaModelSchema)
      .exactOptional()
      .openapi({ description: 'List of Models.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token, if not returned indicates the last page.' }),
  })
  .openapi({ description: 'Response to a ListModelRequest.', required: [] })
  .openapi('GoogleCloudRetailV2alphaListModelsResponse')

const GoogleCloudRetailV2alphaListProductsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as ListProductsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    products: z
      .array(GoogleCloudRetailV2alphaProductSchema)
      .exactOptional()
      .openapi({ description: 'The Products.' }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total count of matched Products irrespective of pagination. The total number of Products returned by pagination may be less than the total_size that matches. This field is ignored if ListProductsRequest.require_total_size is not set or ListProductsRequest.page_token is not empty.',
      }),
  })
  .openapi({
    description: 'Response message for ProductService.ListProducts method.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaListProductsResponse')

const GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecSchema = z
  .object({
    mode: z
      .enum(['MODE_UNSPECIFIED', 'DISABLED', 'ENABLED'])
      .exactOptional()
      .openapi({
        description: "Mode of the DynamicFacet feature. Defaults to Mode.DISABLED if it's unset.",
      }),
  })
  .openapi({ description: 'The specifications of dynamically generated facets.', required: [] })
  .openapi('GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec')

const GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecSchema = z
  .object({
    mode: z
      .enum(['MODE_UNSPECIFIED', 'AUTO', 'DISABLED'])
      .exactOptional()
      .openapi({ description: 'Defaults to Mode.AUTO.' }),
  })
  .openapi({ description: 'The specification for personalization.', required: [] })
  .openapi('GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec')

const GoogleCloudRetailV2alphaServingConfigSchema = z
  .object({
    boostControlIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost_control_ids and SearchRequest.boost_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The human readable serving config display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
    diversityLevel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'How much diversity to use in recommendation model results e.g. `medium-diversity` or `high-diversity`. Currently supported values: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` If not specified, we choose default based on recommendation model type. Default value: `no-diversity`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.',
      }),
    diversityType: z
      .enum(['DIVERSITY_TYPE_UNSPECIFIED', 'RULE_BASED_DIVERSITY', 'DATA_DRIVEN_DIVERSITY'])
      .exactOptional()
      .openapi({
        description:
          'What kind of diversity to use - data driven or rule based. If unset, the server behavior defaults to RULE_BASED_DIVERSITY.',
      }),
    doNotAssociateControlIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.',
      }),
    dynamicFacetSpec:
      GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecSchema.exactOptional().openapi({
        description:
          'The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.',
      }),
    enableCategoryFilterLevel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Whether to add additional category filters on the `similar-items` model. If not specified, we enable it by default. Allowed values are: * `no-category-match`: No additional filtering of original results from the model and the customer's filters. * `relaxed-category-match`: Only keep results with categories that match at least one item categories in the PredictRequests's context item. * If customer also sends filters in the PredictRequest, then the results will satisfy both conditions (user given and category match). Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.",
      }),
    facetControlIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.',
      }),
    filterControlIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.',
      }),
    ignoreControlIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.',
      }),
    modelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the model in the same Catalog to use at serving time. Currently only RecommendationModels are supported: https://cloud.google.com/retail/recommendations-ai/docs/create-models Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when solution_types is SOLUTION_TYPE_RECOMMENDATION.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Fully qualified name `projects/*/locations/global/catalogs/*/servingConfig/*`',
      }),
    onewaySynonymsControlIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.',
      }),
    personalizationSpec:
      GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecSchema.exactOptional().openapi({
        description:
          'The specification for personalization spec. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. Notice that if both ServingConfig.personalization_spec and SearchRequest.personalization_spec are set. SearchRequest.personalization_spec will override ServingConfig.personalization_spec.',
      }),
    priceRerankingLevel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'How much price ranking we want in serving results. Price reranking causes product items with a similar recommendation probability to be ordered by price, with the highest-priced items first. This setting could result in a decrease in click-through and conversion rates. Allowed values are: * `no-price-reranking` * `low-price-reranking` * `medium-price-reranking` * `high-price-reranking` If not specified, we choose default based on model type. Default value: `no-price-reranking`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.',
      }),
    redirectControlIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.',
      }),
    replacementControlIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Condition replacement specifications. - Applied according to the order in the list. - A previously replaced term can not be re-replaced. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.',
      }),
    solutionTypes: z
      .array(
        z.enum([
          'SOLUTION_TYPE_UNSPECIFIED',
          'SOLUTION_TYPE_RECOMMENDATION',
          'SOLUTION_TYPE_SEARCH',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.',
      }),
    twowaySynonymsControlIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.',
      }),
  })
  .openapi({
    description:
      'Configures metadata that is used to generate serving time results (e.g. search results or recommendation predictions).',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaServingConfig')

const GoogleCloudRetailV2alphaListServingConfigsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token, if not returned indicates the last page.' }),
    servingConfigs: z
      .array(GoogleCloudRetailV2alphaServingConfigSchema)
      .exactOptional()
      .openapi({ description: 'All the ServingConfigs for a given catalog.' }),
  })
  .openapi({ description: 'Response for ListServingConfigs method.', required: [] })
  .openapi('GoogleCloudRetailV2alphaListServingConfigsResponse')

const GoogleCloudRetailV2alphaPauseModelRequestSchema = z
  .object({})
  .openapi({ description: 'Request for pausing training of a model.' })
  .openapi('GoogleCloudRetailV2alphaPauseModelRequest')

const GoogleCloudRetailV2alphaPredictRequestSchema = z
  .object({
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Filter for restricting prediction results with a length limit of 5,000 characters. Accepts values for tags and the `filterOutOfStockItems` flag. * Tag expressions. Restricts predictions to products that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1,000 characters. Note: "Recently viewed" models don\'t support tag filtering at the moment. * filterOutOfStockItems. Restricts predictions to products that do not have a stockState value of OUT_OF_STOCK. Examples: * tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional") * filterOutOfStockItems tag=(-"promotional") * filterOutOfStockItems If your filter blocks all prediction results, the API will return *no* results. If instead you want empty result sets to return generic (unfiltered) popular products, set `strictFiltering` to False in `PredictRequest.params`. Note that the API will never return items with storageStatus of "EXPIRED" or "DELETED" regardless of filter choices. If `filterSyntaxV2` is set to true under the `params` field, then attribute-based expressions are expected instead of the above described tag-based syntax. Examples: * (colors: ANY("Red", "Blue")) AND NOT (categories: ANY("Phones")) * (availability: ANY("IN_STOCK")) AND (colors: ANY("Red") OR categories: ANY("Phones")) For more information, see [Filter recommendations](https://cloud.google.com/retail/docs/filter-recs).',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.',
      }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of results to return. Set this property to the number of prediction results needed. If zero, the service will choose a reasonable default. The maximum allowed value is 100. Values above 100 will be coerced to 100.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'This field is not used; leave it unset.' }),
    params: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          "Additional domain specific parameters for the predictions. Allowed values: * `returnProduct`: Boolean. If set to true, the associated product object will be returned in the `results.metadata` field in the prediction response. * `returnScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned product will be set in the `results.metadata` field in the prediction response. The given 'score' indicates the probability of a product being clicked/purchased given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular products instead of empty if your filter blocks all prediction results. * `priceRerankLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-price-reranking', 'low-price-reranking', 'medium-price-reranking', 'high-price-reranking'}. This gives request-level control and adjusts prediction results based on product price. * `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-diversity', 'low-diversity', 'medium-diversity', 'high-diversity', 'auto-diversity'}. This gives request-level control and adjusts prediction results based on product category. * `filterSyntaxV2`: Boolean. False by default. If set to true, the `filter` field is interpreteted according to the new, attribute-based syntax.",
      }),
    userEvent: GoogleCloudRetailV2alphaUserEventSchema.exactOptional().openapi({
      description:
        "Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging. Don't set UserEvent.visitor_id or UserInfo.user_id to the same fixed ID for different users. If you are trying to receive non-personalized recommendations (not recommended; this can negatively impact model performance), instead set UserEvent.visitor_id to a random unique ID and leave UserInfo.user_id unset.",
    }),
    validateOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Use validate only mode for this prediction query. If set to true, a dummy model will be used that returns arbitrary products. Note that the validate only mode should only be used for testing the API, or if the model is not ready.',
      }),
  })
  .openapi({ description: 'Request message for Predict method.', required: [] })
  .openapi('GoogleCloudRetailV2alphaPredictRequest')

const GoogleCloudRetailV2alphaPredictResponsePredictionResultSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'ID of the recommended product' }),
    metadata: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'Additional product metadata / annotations. Possible values: * `product`: JSON representation of the product. Is set if `returnProduct` is set to true in `PredictRequest.params`. * `score`: Prediction score in double value. Is set if `returnScore` is set to true in `PredictRequest.params`.',
      }),
  })
  .openapi({
    description: 'PredictionResult represents the recommendation prediction results.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaPredictResponsePredictionResult')

const GoogleCloudRetailV2alphaPredictResponseSchema = z
  .object({
    attributionToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique attribution token. This should be included in the UserEvent logs resulting from this recommendation, which enables accurate attribution of recommendation model performance.',
      }),
    missingIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'IDs of products in the request that were missing from the inventory.',
      }),
    results: z
      .array(GoogleCloudRetailV2alphaPredictResponsePredictionResultSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of recommended products. The order represents the ranking (from the most relevant product to the least).',
      }),
    validateOnly: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the validateOnly property was set in the request.' }),
  })
  .openapi({ description: 'Response message for predict method.', required: [] })
  .openapi('GoogleCloudRetailV2alphaPredictResponse')

const GoogleCloudRetailV2alphaPurgeMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Metadata related to the progress of the Purge operation. This will be returned by the google.longrunning.Operation.metadata field.',
  })
  .openapi('GoogleCloudRetailV2alphaPurgeMetadata')

const GoogleCloudRetailV2alphaPurgeProductsMetadataSchema = z
  .object({
    createTime: z.string().exactOptional().openapi({ description: 'Operation create time.' }),
    failureCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Count of entries that encountered errors while processing.' }),
    successCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Count of entries that were deleted successfully.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Operation last update time. If the operation is done, this is also the finish time.',
      }),
  })
  .openapi({
    description:
      'Metadata related to the progress of the PurgeProducts operation. This will be returned by the google.longrunning.Operation.metadata field.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaPurgeProductsMetadata')

const GoogleCloudRetailV2alphaPurgeProductsRequestSchema = z
  .object({
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The filter string to specify the products to be deleted with a length limit of 5,000 characters. Empty string filter is not allowed. "*" implies delete all items in a branch. The eligible fields for filtering are: * `availability`: Double quoted Product.availability string. * `create_time` : in ISO 8601 "zulu" format. Supported syntax: * Comparators (">", "<", ">=", "<=", "="). Examples: * create_time <= "2015-02-13T17:05:46Z" * availability = "IN_STOCK" * Conjunctions ("AND") Examples: * create_time <= "2015-02-13T17:05:46Z" AND availability = "PREORDER" * Disjunctions ("OR") Examples: * create_time <= "2015-02-13T17:05:46Z" OR availability = "IN_STOCK" * Can support nested queries. Examples: * (create_time <= "2015-02-13T17:05:46Z" AND availability = "PREORDER") OR (create_time >= "2015-02-14T13:03:32Z" AND availability = "IN_STOCK") * Filter Limits: * Filter should not contain more than 6 conditions. * Max nesting depth should not exceed 2 levels. Examples queries: * Delete back order products created before a timestamp. create_time <= "2015-02-13T17:05:46Z" OR availability = "BACKORDER"',
      }),
    force: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Actually perform the purge. If `force` is set to false, the method will return the expected purge count without deleting any products.',
      }),
  })
  .openapi({ description: 'Request message for PurgeProducts method.', required: [] })
  .openapi('GoogleCloudRetailV2alphaPurgeProductsRequest')

const GoogleCloudRetailV2alphaPurgeProductsResponseSchema = z
  .object({
    purgeCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total count of products purged as a result of the operation.' }),
    purgeSample: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A sample of the product names that will be deleted. Only populated if `force` is set to false. A max of 100 names will be returned and the names are chosen at random.',
      }),
  })
  .openapi({
    description:
      'Response of the PurgeProductsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaPurgeProductsResponse')

const GoogleCloudRetailV2alphaPurgeUserEventsRequestSchema = z
  .object({
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The filter string to specify the events to be deleted with a length limit of 5,000 characters. Empty string filter is not allowed. The eligible fields for filtering are: * `eventType`: Double quoted UserEvent.event_type string. * `eventTime`: in ISO 8601 "zulu" format. * `visitorId`: Double quoted string. Specifying this will delete all events associated with a visitor. * `userId`: Double quoted string. Specifying this will delete all events associated with a user. Examples: * Deleting all events in a time range: `eventTime > "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z"` * Deleting specific eventType in time range: `eventTime > "2012-04-23T18:25:43.511Z" eventType = "detail-page-view"` * Deleting all events for a specific visitor: `visitorId = "visitor1024"` The filtering fields are assumed to have an implicit AND.',
      }),
    force: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Actually perform the purge. If `force` is set to false, the method will return the expected purge count without deleting any user events.',
      }),
  })
  .openapi({ description: 'Request message for PurgeUserEvents method.', required: [] })
  .openapi('GoogleCloudRetailV2alphaPurgeUserEventsRequest')

const GoogleCloudRetailV2alphaPurgeUserEventsResponseSchema = z
  .object({
    purgedEventsCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total count of events purged as a result of the operation.' }),
  })
  .openapi({
    description:
      'Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaPurgeUserEventsResponse')

const GoogleCloudRetailV2alphaRejoinUserEventsMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata for `RejoinUserEvents` method.' })
  .openapi('GoogleCloudRetailV2alphaRejoinUserEventsMetadata')

const GoogleCloudRetailV2alphaRejoinUserEventsRequestSchema = z
  .object({
    userEventRejoinScope: z
      .enum(['USER_EVENT_REJOIN_SCOPE_UNSPECIFIED', 'JOINED_EVENTS', 'UNJOINED_EVENTS'])
      .exactOptional()
      .openapi({
        description:
          'The type of the user event rejoin to define the scope and range of the user events to be rejoined with the latest product catalog. Defaults to `USER_EVENT_REJOIN_SCOPE_UNSPECIFIED` if this field is not set, or set to an invalid integer value.',
      }),
  })
  .openapi({ description: 'Request message for RejoinUserEvents method.', required: [] })
  .openapi('GoogleCloudRetailV2alphaRejoinUserEventsRequest')

const GoogleCloudRetailV2alphaRejoinUserEventsResponseSchema = z
  .object({
    rejoinedUserEventsCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of user events that were joined with latest product catalog.',
      }),
  })
  .openapi({ description: 'Response message for `RejoinUserEvents` method.', required: [] })
  .openapi('GoogleCloudRetailV2alphaRejoinUserEventsResponse')

const GoogleCloudRetailV2alphaRemoveCatalogAttributeRequestSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The attribute name key of the CatalogAttribute to remove.',
      }),
  })
  .openapi({
    description: 'Request for CatalogService.RemoveCatalogAttribute method.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest')

const GoogleCloudRetailV2alphaRemoveControlRequestSchema = z
  .object({
    controlId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The id of the control to apply. Assumed to be in the same catalog as the serving config.',
      }),
  })
  .openapi({ description: 'Request for RemoveControl method.', required: [] })
  .openapi('GoogleCloudRetailV2alphaRemoveControlRequest')

const GoogleCloudRetailV2alphaRemoveFulfillmentPlacesMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Metadata related to the progress of the RemoveFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveFulfillmentPlaces method.',
  })
  .openapi('GoogleCloudRetailV2alphaRemoveFulfillmentPlacesMetadata')

const GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequestSchema = z
  .object({
    allowMissing: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to true, and the Product is not found, the fulfillment information will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found.',
      }),
    placeIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery", to be removed for this type. At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
    removeTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. This field directly corresponds to Product.fulfillment_info.type.',
      }),
  })
  .openapi({
    description: 'Request message for ProductService.RemoveFulfillmentPlaces method.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest')

const GoogleCloudRetailV2alphaRemoveFulfillmentPlacesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response of the RemoveFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.RemoveFulfillmentPlaces method.',
  })
  .openapi('GoogleCloudRetailV2alphaRemoveFulfillmentPlacesResponse')

const GoogleCloudRetailV2alphaRemoveLocalInventoriesMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Metadata related to the progress of the RemoveLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveLocalInventories method.',
  })
  .openapi('GoogleCloudRetailV2alphaRemoveLocalInventoriesMetadata')

const GoogleCloudRetailV2alphaRemoveLocalInventoriesRequestSchema = z
  .object({
    allowMissing: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to true, and the Product is not found, the local inventory removal request will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found.',
      }),
    placeIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. A list of place IDs to have their inventory deleted. At most 3000 place IDs are allowed per request.',
      }),
    removeTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when the inventory deletions are issued. Used to prevent out-of-order updates and deletions on local inventory fields. If not provided, the internal system time will be used.',
      }),
  })
  .openapi({
    description: 'Request message for ProductService.RemoveLocalInventories method.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest')

const GoogleCloudRetailV2alphaRemoveLocalInventoriesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response of the ProductService.RemoveLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.RemoveLocalInventories method.',
  })
  .openapi('GoogleCloudRetailV2alphaRemoveLocalInventoriesResponse')

const GoogleCloudRetailV2alphaReplaceCatalogAttributeRequestSchema = z
  .object({
    catalogAttribute: GoogleCloudRetailV2alphaCatalogAttributeSchema.exactOptional().openapi({
      description: 'Required. The updated CatalogAttribute.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates which fields in the provided CatalogAttribute to update. The following are NOT supported: * CatalogAttribute.key If not set, all supported fields are updated.',
      }),
  })
  .openapi({
    description: 'Request for CatalogService.ReplaceCatalogAttribute method.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaReplaceCatalogAttributeRequest')

const GoogleCloudRetailV2alphaResumeModelRequestSchema = z
  .object({})
  .openapi({ description: 'Request for resuming training of a model.' })
  .openapi('GoogleCloudRetailV2alphaResumeModelRequest')

const GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpecSchema = z
  .object({
    boost: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Strength of the condition boost, which should be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the item a big promotion. However, it does not necessarily mean that the boosted item will be the top result at all times, nor that other items will be excluded. Results could still be shown even when none of them matches the condition. And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant items. Setting to -1.0 gives the item a big demotion. However, results that are deeply relevant might still be shown. The item will have an upstream battle to get a fairly high ranking, but it is not blocked out completely. Setting to 0.0 means no boost applied. The boosting condition is ignored.',
      }),
    condition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An expression which specifies a boost condition. The syntax and supported fields are the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Examples: * To boost products with product ID "product_1" or "product_2", and color "Red" or "Blue": * (id: ANY("product_1", "product_2")) AND (colorFamilies: ANY("Red","Blue"))',
      }),
  })
  .openapi({ description: 'Boost applies to products which match a condition.', required: [] })
  .openapi('GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec')

const GoogleCloudRetailV2alphaSearchRequestBoostSpecSchema = z
  .object({
    conditionBoostSpecs: z
      .array(GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpecSchema)
      .exactOptional()
      .openapi({
        description:
          'Condition boost specifications. If a product matches multiple conditions in the specifictions, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 20.',
      }),
    skipBoostSpecValidation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to skip boostspec validation. If this field is set to true, invalid BoostSpec.condition_boost_specs will be ignored and valid BoostSpec.condition_boost_specs will still be applied.',
      }),
  })
  .openapi({ description: 'Boost specification to boost certain items.', required: [] })
  .openapi('GoogleCloudRetailV2alphaSearchRequestBoostSpec')

const GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecSchema = z
  .object({
    condition: z
      .enum(['CONDITION_UNSPECIFIED', 'DISABLED', 'AUTO'])
      .exactOptional()
      .openapi({
        description:
          'The condition under which query expansion should occur. Default to Condition.DISABLED.',
      }),
    pinUnexpandedResults: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to pin unexpanded results. If this field is set to true, unexpanded products are always at the top of the search results, followed by the expanded results.',
      }),
  })
  .openapi({
    description: 'Specification to determine under which conditions query expansion should occur.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec')

const GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpecSchema = z
  .object({
    mode: z
      .enum(['MODE_UNSPECIFIED', 'SUGGESTION_ONLY', 'AUTO'])
      .exactOptional()
      .openapi({
        description:
          'The mode under which spell correction should take effect to replace the original search query. Default to Mode.AUTO.',
      }),
  })
  .openapi({ description: 'The specification for query spell correction.', required: [] })
  .openapi('GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec')

const GoogleCloudRetailV2alphaSearchRequestSchema = z
  .object({
    boostSpec: GoogleCloudRetailV2alphaSearchRequestBoostSpecSchema.exactOptional().openapi({
      description:
        'Boost specification to boost certain products. See more details at this [user guide](https://cloud.google.com/retail/docs/boosting). Notice that if both ServingConfig.boost_control_ids and SearchRequest.boost_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions.',
    }),
    branch: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The branch resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/0`. Use "default_branch" as the branch ID or leave this field empty, to search products under the default branch.',
      }),
    canonicalFilter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The default filter that is applied when a user performs a search without checking any filters on the search page. The filter applied to every search request when quality improvement such as query expansion is needed. For example, if a query does not have enough results, an expanded query with SearchRequest.canonical_filter will be returned as a supplement of the original query. This field is strongly recommended to achieve high search quality. See SearchRequest.filter for more details about filter syntax.',
      }),
    dynamicFacetSpec:
      GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecSchema.exactOptional().openapi({
        description:
          'Deprecated. Refer to https://cloud.google.com/retail/docs/configs#dynamic to enable dynamic facets. Do not set this field. The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated.',
      }),
    entity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The entity for customers that may run multiple different entities, domains, sites or regions, for example, `Google US`, `Google Ads`, `Waymo`, `google.com`, `youtube.com`, etc. If this is set, it should be exactly matched with UserEvent.entity to get search results boosted by entity.',
      }),
    facetSpecs: z
      .array(GoogleCloudRetailV2alphaSearchRequestFacetSpecSchema)
      .exactOptional()
      .openapi({
        description:
          'Facet specifications for faceted search. If empty, no facets are returned. A maximum of 200 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered. Filter expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#filter). If this field is unrecognizable, an INVALID_ARGUMENT is returned.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.',
      }),
    offset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'A 0-indexed integer that specifies the current offset (that is, starting result location, amongst the Products deemed by the API as relevant) in search results. This field is only considered if page_token is unset. If this field is negative, an INVALID_ARGUMENT is returned.',
      }),
    orderBy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The order in which products are returned. Products can be ordered by a field in an Product object. Leave it unset if ordered by relevance. OrderBy expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#order). If this field is unrecognizable, an INVALID_ARGUMENT is returned.',
      }),
    pageCategories: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The categories associated with a category page. Must be set for category navigation queries to achieve good search quality. The format should be the same as UserEvent.page_categories; To represent full path of category, use \'>\' sign to separate different hierarchies. If \'>\' is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : ["Sales > 2017 Black Friday Deals"].',
      }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of Products to return. If unspecified, defaults to a reasonable value. The maximum allowed value is 120. Values above 120 will be coerced to 120. If this field is negative, an INVALID_ARGUMENT is returned.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A page token SearchResponse.next_page_token, received from a previous SearchService.Search call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SearchService.Search must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
    personalizationSpec:
      GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecSchema.exactOptional().openapi({
        description:
          'The specification for personalization. Notice that if both ServingConfig.personalization_spec and SearchRequest.personalization_spec are set. SearchRequest.personalization_spec will override ServingConfig.personalization_spec.',
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Raw search query. If this field is empty, the request is considered a category browsing request and returned results are based on filter and page_categories.',
      }),
    queryExpansionSpec:
      GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecSchema.exactOptional().openapi({
        description:
          'The query expansion specification that specifies the conditions under which query expansion will occur. See more details at this [user guide](https://cloud.google.com/retail/docs/result-size#query_expansion).',
      }),
    relevanceThreshold: z
      .enum(['RELEVANCE_THRESHOLD_UNSPECIFIED', 'HIGH', 'MEDIUM', 'LOW', 'LOWEST'])
      .exactOptional()
      .openapi({
        description:
          'The relevance threshold of the search results. Defaults to RelevanceThreshold.HIGH, which means only the most relevant results are shown, and the least number of results are returned. See more details at this [user guide](https://cloud.google.com/retail/docs/result-size#relevance_thresholding).',
      }),
    searchMode: z
      .enum(['SEARCH_MODE_UNSPECIFIED', 'PRODUCT_SEARCH_ONLY', 'FACETED_SEARCH_ONLY'])
      .exactOptional()
      .openapi({
        description:
          'The search mode of the search request. If not specified, a single search request triggers both product search and faceted search.',
      }),
    spellCorrectionSpec:
      GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpecSchema.exactOptional().openapi({
        description:
          'The spell correction specification that specifies the mode under which spell correction will take effect.',
      }),
    userInfo: GoogleCloudRetailV2alphaUserInfoSchema.exactOptional().openapi({
      description: 'User information.',
    }),
    variantRollupKeys: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The keys to fetch and rollup the matching variant Products attributes, FulfillmentInfo or LocalInventorys attributes. The attributes from all the matching variant Products or LocalInventorys are merged and de-duplicated. Notice that rollup attributes will lead to extra query latency. Maximum number of keys is 30. For FulfillmentInfo, a fulfillment type and a fulfillment ID must be provided in the format of "fulfillmentType.fulfillmentId". E.g., in "pickupInStore.store123", "pickupInStore" is fulfillment type and "store123" is the store ID. Supported keys are: * colorFamilies * price * originalPrice * discount * variantId * inventory(place_id,price) * inventory(place_id,original_price) * inventory(place_id,attributes.key), where key is any key in the Product.local_inventories.attributes map. * attributes.key, where key is any key in the Product.attributes map. * pickupInStore.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "pickup-in-store". * shipToStore.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "ship-to-store". * sameDayDelivery.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "same-day-delivery". * nextDayDelivery.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "next-day-delivery". * customFulfillment1.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-1". * customFulfillment2.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-2". * customFulfillment3.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-3". * customFulfillment4.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-4". * customFulfillment5.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-5". If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned.',
      }),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This should be the same identifier as UserEvent.visitor_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
  })
  .openapi({ description: 'Request message for SearchService.Search method.', required: [] })
  .openapi('GoogleCloudRetailV2alphaSearchRequest')

const GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfoSchema = z
  .object({
    expandedQuery: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Bool describing whether query expansion has occurred.' }),
    pinnedResultCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of pinned results. This field will only be set when expansion happens and SearchRequest.QueryExpansionSpec.pin_unexpanded_results is set to true.',
      }),
  })
  .openapi({
    description: 'Information describing query expansion including whether expansion has occurred.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo')

const GoogleCloudRetailV2alphaSearchResponseSearchResultSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Product.id of the searched Product.' }),
    matchingVariantCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The count of matched variant Products.' }),
    matchingVariantFields: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'If a variant Product matches the search query, this map indicates which Product fields are matched. The key is the Product.name, the value is a field mask of the matched Product fields. If matched attributes cannot be determined, this map will be empty. For example, a key "sku1" with field mask "products.color_info" indicates there is a match between "sku1" ColorInfo and the query.',
      }),
    personalLabels: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies previous events related to this product for this user based on UserEvent with same SearchRequest.visitor_id or UserInfo.user_id. This is set only when SearchRequest.PersonalizationSpec.mode is SearchRequest.PersonalizationSpec.Mode.AUTO. Possible values: * `purchased`: Indicates that this product has been purchased before.',
      }),
    product: GoogleCloudRetailV2alphaProductSchema.exactOptional().openapi({
      description:
        'The product data snippet in the search response. Only Product.name is guaranteed to be populated. Product.variants contains the product variants that match the search query. If there are multiple product variants matching the query, top 5 most relevant product variants are returned and ordered by relevancy. If relevancy can be deternmined, use matching_variant_fields to look up matched product variants fields. If relevancy cannot be determined, e.g. when searching "shoe" all products in a shoe product can be a match, 5 product variants are returned but order is meaningless.',
    }),
    variantRollupValues: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'The rollup matching variant Product attributes. The key is one of the SearchRequest.variant_rollup_keys. The values are the merged and de-duplicated Product attributes. Notice that the rollup values are respect filter. For example, when filtering by "colorFamilies:ANY(\\"red\\")" and rollup "colorFamilies", only "red" is returned. For textual and numerical attributes, the rollup values is a list of string or double values with type google.protobuf.ListValue. For example, if there are two variants with colors "red" and "blue", the rollup values are { key: "colorFamilies" value { list_value { values { string_value: "red" } values { string_value: "blue" } } } } For FulfillmentInfo, the rollup values is a double value with type google.protobuf.Value. For example, `{key: "pickupInStore.store1" value { number_value: 10 }}` means a there are 10 variants in this product are available in the store "store1".',
      }),
  })
  .openapi({ description: 'Represents the search results.', required: [] })
  .openapi('GoogleCloudRetailV2alphaSearchResponseSearchResult')

const GoogleCloudRetailV2alphaSearchResponseSchema = z
  .object({
    appliedControls: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The fully qualified resource name of applied [controls](https://cloud.google.com/retail/docs/serving-control-rules).',
      }),
    attributionToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique search token. This should be included in the UserEvent logs resulting from this search, which enables accurate attribution of search model performance.',
      }),
    correctedQuery: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains the spell corrected query, if found. If the spell correction type is AUTOMATIC, then the search results are based on corrected_query. Otherwise the original query is used for search.',
      }),
    experimentInfo: z
      .array(GoogleCloudRetailV2alphaExperimentInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Metadata related to A/B testing Experiment associated with this response. Only exists when an experiment is triggered.',
      }),
    facets: z
      .array(GoogleCloudRetailV2alphaSearchResponseFacetSchema)
      .exactOptional()
      .openapi({ description: 'Results of facets requested by user.' }),
    invalidConditionBoostSpecs: z
      .array(GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpecSchema)
      .exactOptional()
      .openapi({
        description:
          'The invalid SearchRequest.BoostSpec.condition_boost_specs that are not applied during serving.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as SearchRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    queryExpansionInfo:
      GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfoSchema.exactOptional().openapi({
        description: 'Query expansion information for the returned results.',
      }),
    redirectUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URI of a customer-defined redirect page. If redirect action is triggered, no search is performed, and only redirect_uri and attribution_token are set in the response.',
      }),
    results: z
      .array(GoogleCloudRetailV2alphaSearchResponseSearchResultSchema)
      .exactOptional()
      .openapi({ description: 'A list of matched items. The order represents the ranking.' }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The estimated total count of matched items irrespective of pagination. The count of results returned by pagination may be less than the total_size that matches.',
      }),
  })
  .openapi({ description: 'Response message for SearchService.Search method.', required: [] })
  .openapi('GoogleCloudRetailV2alphaSearchResponse')

const GoogleCloudRetailV2alphaSetDefaultBranchRequestSchema = z
  .object({
    branchId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The final component of the resource name of a branch. This field must be one of "0", "1" or "2". Otherwise, an INVALID_ARGUMENT error is returned. If there are no sufficient active products in the targeted branch and force is not set, a FAILED_PRECONDITION error is returned.',
      }),
    force: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to true, it permits switching to a branch with branch_id even if it has no sufficient active products.',
      }),
    note: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Some note on this request, this can be retrieved by CatalogService.GetDefaultBranch before next valid default branch set occurs. This field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned.',
      }),
  })
  .openapi({
    description: 'Request message to set a specified branch as new default_branch.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2alphaSetDefaultBranchRequest')

const GoogleCloudRetailV2alphaSetInventoryMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Metadata related to the progress of the SetInventory operation. Currently empty because there is no meaningful metadata populated from the ProductService.SetInventory method.',
  })
  .openapi('GoogleCloudRetailV2alphaSetInventoryMetadata')

const GoogleCloudRetailV2alphaSetInventoryRequestSchema = z
  .object({
    allowMissing: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to true, and the Product with name Product.name is not found, the inventory update will still be processed and retained for at most 1 day until the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found.',
      }),
    inventory: GoogleCloudRetailV2alphaProductSchema.exactOptional().openapi({
      description:
        'Required. The inventory information to update. The allowable fields to update are: * Product.price_info * Product.availability * Product.available_quantity * Product.fulfillment_info The updated inventory fields must be specified in SetInventoryRequest.set_mask. If SetInventoryRequest.inventory.name is empty or invalid, an INVALID_ARGUMENT error is returned. If the caller does not have permission to update the Product named in Product.name, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the Product to update does not have existing inventory information, the provided inventory information will be inserted. If the Product to update has existing inventory information, the provided inventory information will be merged while respecting the last update time for each inventory field, using the provided or default value for SetInventoryRequest.set_time. The caller can replace place IDs for a subset of fulfillment types in the following ways: * Adds "fulfillment_info" in SetInventoryRequest.set_mask * Specifies only the desired fulfillment types and corresponding place IDs to update in SetInventoryRequest.inventory.fulfillment_info The caller can clear all place IDs from a subset of fulfillment types in the following ways: * Adds "fulfillment_info" in SetInventoryRequest.set_mask * Specifies only the desired fulfillment types to clear in SetInventoryRequest.inventory.fulfillment_info * Checks that only the desired fulfillment info types have empty SetInventoryRequest.inventory.fulfillment_info.place_ids The last update time is recorded for the following inventory fields: * Product.price_info * Product.availability * Product.available_quantity * Product.fulfillment_info If a full overwrite of inventory information while ignoring timestamps is needed, ProductService.UpdateProduct should be invoked instead.',
    }),
    setMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates which inventory fields in the provided Product to update. At least one field must be provided. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned and the entire update will be ignored.',
      }),
    setTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when the request is issued, used to prevent out-of-order updates on inventory fields with the last update time recorded. If not provided, the internal system time will be used.',
      }),
  })
  .openapi({ description: 'Request message for ProductService.SetInventory method.', required: [] })
  .openapi('GoogleCloudRetailV2alphaSetInventoryRequest')

const GoogleCloudRetailV2alphaSetInventoryResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response of the SetInventoryRequest. Currently empty because there is no meaningful response populated from the ProductService.SetInventory method.',
  })
  .openapi('GoogleCloudRetailV2alphaSetInventoryResponse')

const GoogleCloudRetailV2alphaTuneModelMetadataSchema = z
  .object({
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the model that this tune applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`',
      }),
  })
  .openapi({ description: 'Metadata associated with a tune operation.', required: [] })
  .openapi('GoogleCloudRetailV2alphaTuneModelMetadata')

const GoogleCloudRetailV2alphaTuneModelRequestSchema = z
  .object({})
  .openapi({
    description:
      'Request to manually start a tuning process now (instead of waiting for the periodically scheduled tuning to happen).',
  })
  .openapi('GoogleCloudRetailV2alphaTuneModelRequest')

const GoogleCloudRetailV2alphaTuneModelResponseSchema = z
  .object({})
  .openapi({ description: 'Response associated with a tune operation.' })
  .openapi('GoogleCloudRetailV2alphaTuneModelResponse')

const GoogleCloudRetailV2betaAddFulfillmentPlacesMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Metadata related to the progress of the AddFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddFulfillmentPlaces method.',
  })
  .openapi('GoogleCloudRetailV2betaAddFulfillmentPlacesMetadata')

const GoogleCloudRetailV2betaAddFulfillmentPlacesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response of the AddFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.AddFulfillmentPlaces method.',
  })
  .openapi('GoogleCloudRetailV2betaAddFulfillmentPlacesResponse')

const GoogleCloudRetailV2betaAddLocalInventoriesMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Metadata related to the progress of the AddLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddLocalInventories method.',
  })
  .openapi('GoogleCloudRetailV2betaAddLocalInventoriesMetadata')

const GoogleCloudRetailV2betaAddLocalInventoriesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response of the ProductService.AddLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.AddLocalInventories method.',
  })
  .openapi('GoogleCloudRetailV2betaAddLocalInventoriesResponse')

const GoogleCloudRetailV2betaBigQueryOutputResultSchema = z
  .object({
    datasetId: z.string().exactOptional().openapi({ description: 'The ID of a BigQuery Dataset.' }),
    tableId: z.string().exactOptional().openapi({ description: 'The ID of a BigQuery Table.' }),
  })
  .openapi({ description: 'A BigQuery output result.', required: [] })
  .openapi('GoogleCloudRetailV2betaBigQueryOutputResult')

const GoogleCloudRetailV2betaCreateMerchantCenterAccountLinkMetadataSchema = z
  .object({
    createTime: z.string().exactOptional().openapi({ description: 'Operation create time.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Operation last update time. If the operation is done, this is also the finish time.',
      }),
  })
  .openapi({
    description: 'Common metadata related to the progress of the operations.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2betaCreateMerchantCenterAccountLinkMetadata')

const GoogleCloudRetailV2betaCreateModelMetadataSchema = z
  .object({
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the model that this create applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`',
      }),
  })
  .openapi({ description: 'Metadata associated with a create operation.', required: [] })
  .openapi('GoogleCloudRetailV2betaCreateModelMetadata')

const GoogleCloudRetailV2betaExportErrorsConfigSchema = z
  .object({
    gcsPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Export errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message.',
      }),
  })
  .openapi({ description: 'Configuration of destination for Export related errors.', required: [] })
  .openapi('GoogleCloudRetailV2betaExportErrorsConfig')

const GoogleCloudRetailV2betaExportMetadataSchema = z
  .object({
    createTime: z.string().exactOptional().openapi({ description: 'Operation create time.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Operation last update time. If the operation is done, this is also the finish time.',
      }),
  })
  .openapi({
    description:
      'Metadata related to the progress of the Export operation. This is returned by the google.longrunning.Operation.metadata field.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2betaExportMetadata')

const GoogleCloudRetailV2betaGcsOutputResultSchema = z
  .object({
    outputUri: z.string().exactOptional().openapi({ description: 'The uri of Gcs output' }),
  })
  .openapi({ description: 'A Gcs output result.', required: [] })
  .openapi('GoogleCloudRetailV2betaGcsOutputResult')

const GoogleCloudRetailV2betaOutputResultSchema = z
  .object({
    bigqueryResult: z
      .array(GoogleCloudRetailV2betaBigQueryOutputResultSchema)
      .exactOptional()
      .openapi({ description: 'The BigQuery location where the result is stored.' }),
    gcsResult: z
      .array(GoogleCloudRetailV2betaGcsOutputResultSchema)
      .exactOptional()
      .openapi({ description: 'The Google Cloud Storage location where the result is stored.' }),
  })
  .openapi({
    description:
      'Output result that stores the information about where the exported data is stored.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2betaOutputResult')

const GoogleCloudRetailV2betaExportProductsResponseSchema = z
  .object({
    errorSamples: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({ description: 'A sample of errors encountered while processing the request.' }),
    errorsConfig: GoogleCloudRetailV2betaExportErrorsConfigSchema.exactOptional().openapi({
      description: 'This field is never set.',
    }),
    outputResult: GoogleCloudRetailV2betaOutputResultSchema.exactOptional().openapi({
      description: 'Output result indicating where the data were exported to.',
    }),
  })
  .openapi({
    description:
      'Response of the ExportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2betaExportProductsResponse')

const GoogleCloudRetailV2betaExportUserEventsResponseSchema = z
  .object({
    errorSamples: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({ description: 'A sample of errors encountered while processing the request.' }),
    errorsConfig: GoogleCloudRetailV2betaExportErrorsConfigSchema.exactOptional().openapi({
      description: 'This field is never set.',
    }),
    outputResult: GoogleCloudRetailV2betaOutputResultSchema.exactOptional().openapi({
      description: 'Output result indicating where the data were exported to.',
    }),
  })
  .openapi({
    description:
      'Response of the ExportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2betaExportUserEventsResponse')

const GoogleCloudRetailV2betaImportCompletionDataResponseSchema = z
  .object({
    errorSamples: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({ description: 'A sample of errors encountered while processing the request.' }),
  })
  .openapi({
    description:
      'Response of the ImportCompletionDataRequest. If the long running operation is done, this message is returned by the google.longrunning.Operations.response field if the operation is successful.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2betaImportCompletionDataResponse')

const GoogleCloudRetailV2betaImportErrorsConfigSchema = z
  .object({
    gcsPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message.',
      }),
  })
  .openapi({ description: 'Configuration of destination for Import related errors.', required: [] })
  .openapi('GoogleCloudRetailV2betaImportErrorsConfig')

const GoogleCloudRetailV2betaImportMetadataSchema = z
  .object({
    createTime: z.string().exactOptional().openapi({ description: 'Operation create time.' }),
    failureCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Count of entries that encountered errors while processing.' }),
    notificationPubsubTopic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. This field is never set.' }),
    successCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Count of entries that were processed successfully.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Operation last update time. If the operation is done, this is also the finish time.',
      }),
  })
  .openapi({
    description:
      'Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2betaImportMetadata')

const GoogleCloudRetailV2betaImportProductsResponseSchema = z
  .object({
    errorSamples: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({ description: 'A sample of errors encountered while processing the request.' }),
    errorsConfig: GoogleCloudRetailV2betaImportErrorsConfigSchema.exactOptional().openapi({
      description: 'Echoes the destination for the complete errors in the request if set.',
    }),
  })
  .openapi({
    description:
      'Response of the ImportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2betaImportProductsResponse')

const GoogleCloudRetailV2betaUserEventImportSummarySchema = z
  .object({
    joinedEventsCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Count of user events imported with complete existing catalog information.',
      }),
    unjoinedEventsCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Count of user events imported, but with catalog information not found in the imported catalog.',
      }),
  })
  .openapi({
    description:
      'A summary of import result. The UserEventImportSummary summarizes the import status for user events.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2betaUserEventImportSummary')

const GoogleCloudRetailV2betaImportUserEventsResponseSchema = z
  .object({
    errorSamples: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({ description: 'A sample of errors encountered while processing the request.' }),
    errorsConfig: GoogleCloudRetailV2betaImportErrorsConfigSchema.exactOptional().openapi({
      description:
        'Echoes the destination for the complete errors if this field was set in the request.',
    }),
    importSummary: GoogleCloudRetailV2betaUserEventImportSummarySchema.exactOptional().openapi({
      description: 'Aggregated statistics of user event import status.',
    }),
  })
  .openapi({
    description:
      'Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2betaImportUserEventsResponse')

const GoogleCloudRetailV2betaMerchantCenterAccountLinkMerchantCenterFeedFilterSchema = z
  .object({
    primaryFeedId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Merchant Center primary feed ID.' }),
    primaryFeedName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Merchant Center primary feed name. The name is used for the display purposes only.',
      }),
  })
  .openapi({ description: 'Merchant Center Feed filter criterion.', required: [] })
  .openapi('GoogleCloudRetailV2betaMerchantCenterAccountLinkMerchantCenterFeedFilter')

const GoogleCloudRetailV2betaMerchantCenterAccountLinkSchema = z
  .object({
    branchId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The branch id (e.g. 0/1/2) within the catalog that products from merchant_center_account_id are streamed to. When updating this field, an empty value will use the currently configured default branch. However, changing the default branch later on won't change the linked branch here. A single branch id can only have one linked merchant center account id.",
      }),
    feedFilters: z
      .array(GoogleCloudRetailV2betaMerchantCenterAccountLinkMerchantCenterFeedFilterSchema)
      .exactOptional()
      .openapi({
        description:
          'Criteria for the Merchant Center feeds to be ingested via the link. All offers will be ingested if the list is empty. Otherwise the offers will be ingested from selected feeds.',
      }),
    feedLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The FeedLabel used to perform filtering. Note: this replaces [region_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.feed_label). Example value: `US`. Example value: `FeedLabel1`.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. MerchantCenterAccountLink identifier, which is the final component of name. This field is auto generated and follows the convention: `BranchId_MerchantCenterAccountId`. `projects/*/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/id_1`.',
        readOnly: true,
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). ISO 639-1. This specifies the language of offers in Merchant Center that will be accepted. If empty, no language filtering will be performed. Example value: `en`.',
      }),
    merchantCenterAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The linked [Merchant center account id](https://developers.google.com/shopping-content/guides/accountstatuses). The account must be a standalone account or a sub-account of a MCA.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. Full resource name of the Merchant Center Account Link, such as `projects/*/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/merchant_center_account_link`.',
        readOnly: true,
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Google Cloud project ID.', readOnly: true }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'PENDING', 'ACTIVE', 'FAILED'])
      .exactOptional()
      .openapi({ description: 'Output only. Represents the state of the link.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a link between a Merchant Center account and a branch. Once a link is established, products from the linked merchant center account will be streamed to the linked branch.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2betaMerchantCenterAccountLink')

const GoogleCloudRetailV2betaModelServingConfigListSchema = z
  .object({
    servingConfigIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A set of valid serving configs that may be used for `PAGE_OPTIMIZATION`.',
      }),
  })
  .openapi({
    description:
      'Represents an ordered combination of valid serving configs, which can be used for `PAGE_OPTIMIZATION` recommendations.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2betaModelServingConfigList')

const GoogleCloudRetailV2betaModelSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp the Recommendation Model was created at.',
        readOnly: true,
      }),
    dataState: z
      .enum(['DATA_STATE_UNSPECIFIED', 'DATA_OK', 'DATA_ERROR'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The state of data requirements for this model: `DATA_OK` and `DATA_ERROR`. Recommendation model cannot be trained if the data is in `DATA_ERROR` state. Recommendation model can have `DATA_ERROR` state even if serving state is `ACTIVE`: models were trained successfully before, but cannot be refreshed because model no longer has sufficient data for training.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the model. Should be human readable, used to display Recommendation Models in the Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024 characters.',
      }),
    filteringOption: z
      .enum([
        'RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED',
        'RECOMMENDATIONS_FILTERING_DISABLED',
        'RECOMMENDATIONS_FILTERING_ENABLED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering by attributes is enabled for the model.',
      }),
    lastTuneTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the latest successful tune finished.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The fully qualified resource name of the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` catalog_id has char limit of 50. recommendation_model_id has char limit of 40.',
      }),
    optimizationObjective: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The optimization objective e.g. `cvr`. Currently supported values: `ctr`, `cvr`, `revenue-per-order`. If not specified, we choose default based on model type. Default depends on type of recommendation: `recommended-for-you` => `ctr` `others-you-may-like` => `ctr` `frequently-bought-together` => `revenue_per_order` This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.',
      }),
    periodicTuningState: z
      .enum([
        'PERIODIC_TUNING_STATE_UNSPECIFIED',
        'PERIODIC_TUNING_DISABLED',
        'ALL_TUNING_DISABLED',
        'PERIODIC_TUNING_ENABLED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the `TuneModel` method. Default value is `PERIODIC_TUNING_ENABLED`.',
      }),
    servingConfigLists: z
      .array(GoogleCloudRetailV2betaModelServingConfigListSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The list of valid serving configs associated with the PageOptimizationConfig.',
        readOnly: true,
      }),
    servingState: z
      .enum(['SERVING_STATE_UNSPECIFIED', 'INACTIVE', 'ACTIVE', 'TUNED'])
      .exactOptional()
      .openapi({
        description: 'Output only. The serving state of the model: `ACTIVE`, `NOT_ACTIVE`.',
        readOnly: true,
      }),
    trainingState: z
      .enum(['TRAINING_STATE_UNSPECIFIED', 'PAUSED', 'TRAINING'])
      .exactOptional()
      .openapi({
        description:
          'Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before.',
      }),
    tuningOperation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The tune operation associated with the model. Can be used to determine if there is an ongoing tune for this recommendation. Empty field implies no tune is goig on.',
        readOnly: true,
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The type of model e.g. `home-page`. Currently supported values: `recommended-for-you`, `others-you-may-like`, `frequently-bought-together`, `page-optimization`, `similar-items`, `buy-it-again`, `on-sale-items`, and `recently-viewed`(readonly value). This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Timestamp the Recommendation Model was last updated. E.g. if a Recommendation Model was paused - this would be the time the pause was initiated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2betaModel')

const GoogleCloudRetailV2betaPurgeMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Metadata related to the progress of the Purge operation. This will be returned by the google.longrunning.Operation.metadata field.',
  })
  .openapi('GoogleCloudRetailV2betaPurgeMetadata')

const GoogleCloudRetailV2betaPurgeUserEventsResponseSchema = z
  .object({
    purgedEventsCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total count of events purged as a result of the operation.' }),
  })
  .openapi({
    description:
      'Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.',
    required: [],
  })
  .openapi('GoogleCloudRetailV2betaPurgeUserEventsResponse')

const GoogleCloudRetailV2betaRejoinUserEventsMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata for `RejoinUserEvents` method.' })
  .openapi('GoogleCloudRetailV2betaRejoinUserEventsMetadata')

const GoogleCloudRetailV2betaRejoinUserEventsResponseSchema = z
  .object({
    rejoinedUserEventsCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of user events that were joined with latest product catalog.',
      }),
  })
  .openapi({ description: 'Response message for `RejoinUserEvents` method.', required: [] })
  .openapi('GoogleCloudRetailV2betaRejoinUserEventsResponse')

const GoogleCloudRetailV2betaRemoveFulfillmentPlacesMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Metadata related to the progress of the RemoveFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveFulfillmentPlaces method.',
  })
  .openapi('GoogleCloudRetailV2betaRemoveFulfillmentPlacesMetadata')

const GoogleCloudRetailV2betaRemoveFulfillmentPlacesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response of the RemoveFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.RemoveFulfillmentPlaces method.',
  })
  .openapi('GoogleCloudRetailV2betaRemoveFulfillmentPlacesResponse')

const GoogleCloudRetailV2betaRemoveLocalInventoriesMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Metadata related to the progress of the RemoveLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveLocalInventories method.',
  })
  .openapi('GoogleCloudRetailV2betaRemoveLocalInventoriesMetadata')

const GoogleCloudRetailV2betaRemoveLocalInventoriesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response of the ProductService.RemoveLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.RemoveLocalInventories method.',
  })
  .openapi('GoogleCloudRetailV2betaRemoveLocalInventoriesResponse')

const GoogleCloudRetailV2betaSetInventoryMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Metadata related to the progress of the SetInventory operation. Currently empty because there is no meaningful metadata populated from the ProductService.SetInventory method.',
  })
  .openapi('GoogleCloudRetailV2betaSetInventoryMetadata')

const GoogleCloudRetailV2betaSetInventoryResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response of the SetInventoryRequest. Currently empty because there is no meaningful response populated from the ProductService.SetInventory method.',
  })
  .openapi('GoogleCloudRetailV2betaSetInventoryResponse')

const GoogleCloudRetailV2betaTuneModelMetadataSchema = z
  .object({
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the model that this tune applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`',
      }),
  })
  .openapi({ description: 'Metadata associated with a tune operation.', required: [] })
  .openapi('GoogleCloudRetailV2betaTuneModelMetadata')

const GoogleCloudRetailV2betaTuneModelResponseSchema = z
  .object({})
  .openapi({ description: 'Response associated with a tune operation.' })
  .openapi('GoogleCloudRetailV2betaTuneModelResponse')

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

export const postV2alphaAttributesConfigAddCatalogAttributeRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{attributesConfig}:addCatalogAttribute',
  tags: ['projects'],
  description:
    'Adds the specified CatalogAttribute to the AttributesConfig. If the CatalogAttribute to add already exists, an ALREADY_EXISTS error is returned.',
  operationId: 'retail.projects.locations.catalogs.attributesConfig.addCatalogAttribute',
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
      attributesConfig: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Full AttributesConfig resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`',
            in: 'path',
            name: 'attributesConfig',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRetailV2alphaAddCatalogAttributeRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaAttributesConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2alphaAttributesConfigBatchRemoveCatalogAttributesRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{attributesConfig}:batchRemoveCatalogAttributes',
  tags: ['projects'],
  description: 'Removes all specified CatalogAttributes from the AttributesConfig.',
  operationId: 'retail.projects.locations.catalogs.attributesConfig.batchRemoveCatalogAttributes',
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
      attributesConfig: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The attributes config resource shared by all catalog attributes being deleted. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`',
            in: 'path',
            name: 'attributesConfig',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponseSchema,
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

export const postV2alphaAttributesConfigRemoveCatalogAttributeRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{attributesConfig}:removeCatalogAttribute',
  tags: ['projects'],
  description:
    'Removes the specified CatalogAttribute from the AttributesConfig. If the CatalogAttribute to remove does not exist, a NOT_FOUND error is returned.',
  operationId: 'retail.projects.locations.catalogs.attributesConfig.removeCatalogAttribute',
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
      attributesConfig: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Full AttributesConfig resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`',
            in: 'path',
            name: 'attributesConfig',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRetailV2alphaRemoveCatalogAttributeRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaAttributesConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2alphaAttributesConfigReplaceCatalogAttributeRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{attributesConfig}:replaceCatalogAttribute',
  tags: ['projects'],
  description:
    'Replaces the specified CatalogAttribute in the AttributesConfig by updating the catalog attribute with the same CatalogAttribute.key. If the CatalogAttribute to replace does not exist, a NOT_FOUND error is returned.',
  operationId: 'retail.projects.locations.catalogs.attributesConfig.replaceCatalogAttribute',
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
      attributesConfig: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Full AttributesConfig resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`',
            in: 'path',
            name: 'attributesConfig',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudRetailV2alphaReplaceCatalogAttributeRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaAttributesConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2alphaCatalogCompleteQueryRoute = createRoute({
  method: 'get',
  path: '/v2alpha/{catalog}:completeQuery',
  tags: ['projects'],
  description:
    'Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.',
  operationId: 'retail.projects.locations.catalogs.completeQuery',
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
      dataset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Determines which dataset to use for fetching completion. "user-data" will use the imported dataset through CompletionService.ImportCompletionData. "cloud-retail" will use the dataset generated by cloud retail based on user events. If leave empty, it will use the "user-data". Current supported values: * user-data * cloud-retail: This option requires enabling auto-learning function first. See [guidelines](https://cloud.google.com/retail/docs/completion-overview#generated-completion-dataset).',
            in: 'query',
            name: 'dataset',
            schema: { type: 'string' },
            required: false,
          },
        }),
      deviceType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The device type context for completion suggestions. We recommend that you leave this field empty. It can apply different suggestions on different device types, e.g. `DESKTOP`, `MOBILE`. If it is empty, the suggestions are across all device types. Supported formats: * `UNKNOWN_DEVICE_TYPE` * `DESKTOP` * `MOBILE` * A customized string starts with `OTHER_`, e.g. `OTHER_IPHONE`.',
            in: 'query',
            name: 'deviceType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      enableAttributeSuggestions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, attribute suggestions are enabled and provided in response. This field is only available for "cloud-retail" dataset.',
            in: 'query',
            name: 'enableAttributeSuggestions',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      entity: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The entity for customers that may run multiple different entities, domains, sites or regions, for example, `Google US`, `Google Ads`, `Waymo`, `google.com`, `youtube.com`, etc. If this is set, it should be exactly matched with UserEvent.entity to get per-entity autocomplete results.',
            in: 'query',
            name: 'entity',
            schema: { type: 'string' },
            required: false,
          },
        }),
      languageCodes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Note that this field applies for `user-data` dataset only. For requests with `cloud-retail` dataset, setting this field has no effect. The language filters applied to the output suggestions. If set, it should contain the language of the query. If not set, suggestions are returned without considering language restrictions. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). The maximum number of language codes is 3.',
            explode: true,
            in: 'query',
            name: 'languageCodes',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxSuggestions: z
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
              'Completion max suggestions. If left unset or set to 0, then will fallback to the configured value CompletionConfig.max_suggestions. The maximum allowed max suggestions is 20. If it is set higher, it will be capped by 20.',
            in: 'query',
            name: 'maxSuggestions',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The query used to generate suggestions. The maximum number of allowed characters is 255.',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      visitorId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required field. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.',
            in: 'query',
            name: 'visitorId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      catalog: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Catalog for which the completion is performed. Full resource name of catalog, such as `projects/*/locations/global/catalogs/default_catalog`.',
            in: 'path',
            name: 'catalog',
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
        'application/json': { schema: GoogleCloudRetailV2alphaCompleteQueryResponseSchema },
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

export const getV2alphaCatalogGetDefaultBranchRoute = createRoute({
  method: 'get',
  path: '/v2alpha/{catalog}:getDefaultBranch',
  tags: ['projects'],
  description:
    'Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.',
  operationId: 'retail.projects.locations.catalogs.getDefaultBranch',
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
      catalog: z
        .string()
        .openapi({
          param: {
            description:
              'The parent catalog resource name, such as `projects/*/locations/global/catalogs/default_catalog`.',
            in: 'path',
            name: 'catalog',
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
        'application/json': { schema: GoogleCloudRetailV2alphaGetDefaultBranchResponseSchema },
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

export const postV2alphaCatalogSetDefaultBranchRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{catalog}:setDefaultBranch',
  tags: ['projects'],
  description:
    'Set a specified branch id as default branch. API methods such as SearchService.Search, ProductService.GetProduct, ProductService.ListProducts will treat requests using "default_branch" to the actual branch id set as default. For example, if `projects/*/locations/*/catalogs/*/branches/1` is set as default, setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/default_branch` is equivalent to setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/1`. Using multiple branches can be useful when developers would like to have a staging branch to test and verify for future usage. When it becomes ready, developers switch on the staging branch using this API while keeping using `projects/*/locations/*/catalogs/*/branches/default_branch` as SearchRequest.branch to route the traffic to this staging branch. CAUTION: If you have live predict/search traffic, switching the default branch could potentially cause outages if the ID space of the new branch is very different from the old one. More specifically: * PredictionService will only return product IDs from branch {newBranch}. * SearchService will only return product IDs from branch {newBranch} (if branch is not explicitly set). * UserEventService will only join events with products from branch {newBranch}.',
  operationId: 'retail.projects.locations.catalogs.setDefaultBranch',
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
      catalog: z
        .string()
        .openapi({
          param: {
            description:
              'Full resource name of the catalog, such as `projects/*/locations/global/catalogs/default_catalog`.',
            in: 'path',
            name: 'catalog',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRetailV2alphaSetDefaultBranchRequestSchema },
      },
    },
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

export const getV2alphaNameRoute = createRoute({
  method: 'get',
  path: '/v2alpha/{name}',
  tags: ['projects'],
  description:
    'Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.',
  operationId: 'retail.projects.operations.get',
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
            description: 'The name of the operation resource.',
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

export const postV2alphaNameRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{name}',
  tags: ['projects'],
  description:
    'Creates a MerchantCenterAccountLink. MerchantCenterAccountLink cannot be set to a different oneof field, if so an INVALID_ARGUMENT is returned.',
  operationId:
    'retail.projects.locations.catalogs.merchantCenterAccountLinks.createMerchantCenterAccountLink',
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
      parent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The branch resource where this MerchantCenterAccountLink will be created. Format: projects/{PROJECT_NUMBER}/locations/global/catalogs/{CATALOG_ID}}',
            in: 'query',
            name: 'parent',
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
            description:
              'Output only. Immutable. Full resource name of the Merchant Center Account Link, such as `projects/*/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/merchant_center_account_link`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRetailV2alphaMerchantCenterAccountLinkSchema },
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

export const deleteV2alphaNameRoute = createRoute({
  method: 'delete',
  path: '/v2alpha/{name}',
  tags: ['projects'],
  description:
    'Deletes a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.',
  operationId: 'retail.projects.locations.catalogs.servingConfigs.delete',
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
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This value only applies to the case when the target product is of type PRIMARY. When deleting a product of VARIANT/COLLECTION type, this value will be ignored. When set to true, the subsequent variant products will be deleted. When set to false, if the primary product has active variant products, an error will be returned.',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the ServingConfig to delete. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`',
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

export const patchV2alphaNameRoute = createRoute({
  method: 'patch',
  path: '/v2alpha/{name}',
  tags: ['projects'],
  description: 'Updates a ServingConfig.',
  operationId: 'retail.projects.locations.catalogs.servingConfigs.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates which fields in the provided ServingConfig to update. The following are NOT supported: * ServingConfig.name If not set, all supported fields are updated.',
            in: 'query',
            name: 'updateMask',
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
            description:
              'Immutable. Fully qualified name `projects/*/locations/global/catalogs/*/servingConfig/*`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaServingConfigSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaServingConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2alphaNameOperationsRoute = createRoute({
  method: 'get',
  path: '/v2alpha/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'retail.projects.operations.list',
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
            description: "The name of the operation's parent resource.",
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
      content: { 'application/json': { schema: GoogleLongrunningListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2alphaNamePauseRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{name}:pause',
  tags: ['projects'],
  description: 'Pauses the training of an existing model.',
  operationId: 'retail.projects.locations.catalogs.models.pause',
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
              'Required. The name of the model to pause. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaPauseModelRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaModelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2alphaNameResumeRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{name}:resume',
  tags: ['projects'],
  description: 'Resumes the training of an existing model.',
  operationId: 'retail.projects.locations.catalogs.models.resume',
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
              'Required. The name of the model to resume. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaResumeModelRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaModelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2alphaNameSetInventoryRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{name}:setInventory',
  tags: ['projects'],
  description:
    'Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete.',
  operationId: 'retail.projects.locations.catalogs.branches.products.setInventory',
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
              'Immutable. Full resource name of the product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRetailV2alphaSetInventoryRequestSchema },
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

export const postV2alphaNameTuneRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{name}:tune',
  tags: ['projects'],
  description: 'Tunes an existing model.',
  operationId: 'retail.projects.locations.catalogs.models.tune',
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
              'Required. The resource name of the model to tune. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaTuneModelRequestSchema } },
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

export const getV2alphaParentCatalogsRoute = createRoute({
  method: 'get',
  path: '/v2alpha/{parent}/catalogs',
  tags: ['projects'],
  description: 'Lists all the Catalogs associated with the project.',
  operationId: 'retail.projects.locations.catalogs.list',
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
              'Maximum number of Catalogs to return. If unspecified, defaults to 50. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT is returned.',
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
              'A page token ListCatalogsResponse.next_page_token, received from a previous CatalogService.ListCatalogs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to CatalogService.ListCatalogs must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.',
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
              'Required. The account resource name with an associated location. If the caller does not have permission to list Catalogs under this location, regardless of whether or not this location exists, a PERMISSION_DENIED error is returned.',
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
        'application/json': { schema: GoogleCloudRetailV2alphaListCatalogsResponseSchema },
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

export const postV2alphaParentCompletionDataImportRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{parent}/completionData:import',
  tags: ['projects'],
  description:
    'Bulk import of processed completion dataset. Request processing is asynchronous. Partial updating is not supported. The operation is successfully finished only after the imported suggestions are indexed successfully and ready for serving. The process takes hours. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.',
  operationId: 'retail.projects.locations.catalogs.completionData.import',
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
              'Required. The catalog which the suggestions dataset belongs to. Format: `projects/1234/locations/global/catalogs/default_catalog`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRetailV2alphaImportCompletionDataRequestSchema },
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

export const getV2alphaParentControlsRoute = createRoute({
  method: 'get',
  path: '/v2alpha/{parent}/controls',
  tags: ['projects'],
  description: 'Lists all Controls by their parent Catalog.',
  operationId: 'retail.projects.locations.catalogs.controls.list',
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
              'Optional. A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. * List controls that are used in a single ServingConfig: \'serving_config = "boosted_home_page_cvr"\'',
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
              'Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.',
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
              'Optional. A page token, received from a previous `ListControls` call. Provide this to retrieve the subsequent page.',
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
              'Required. The catalog resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`',
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
        'application/json': { schema: GoogleCloudRetailV2alphaListControlsResponseSchema },
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

export const postV2alphaParentControlsRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{parent}/controls',
  tags: ['projects'],
  description:
    'Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.',
  operationId: 'retail.projects.locations.catalogs.controls.create',
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
      controlId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID to use for the Control, which will become the final component of the Control's resource name. This value should be 4-63 characters, and valid characters are /a-z-_/.",
            in: 'query',
            name: 'controlId',
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
              'Required. Full resource name of parent catalog. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudRetailV2alphaControlSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaControlSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2alphaParentMerchantCenterAccountLinksRoute = createRoute({
  method: 'get',
  path: '/v2alpha/{parent}/merchantCenterAccountLinks',
  tags: ['projects'],
  description: 'Lists all MerchantCenterAccountLinks under the specified parent Catalog.',
  operationId: 'retail.projects.locations.catalogs.merchantCenterAccountLinks.list',
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
              'Required. The parent Catalog of the resource. It must match this format: projects/{PROJECT_NUMBER}/locations/global/catalogs/{CATALOG_ID}',
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
          schema: GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponseSchema,
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

export const getV2alphaParentModelsRoute = createRoute({
  method: 'get',
  path: '/v2alpha/{parent}/models',
  tags: ['projects'],
  description: 'Lists all the models linked to this event store.',
  operationId: 'retail.projects.locations.catalogs.models.list',
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
              'Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.',
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
              'Optional. A page token, received from a previous `ListModels` call. Provide this to retrieve the subsequent page.',
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
              'Required. The parent for which to list models. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`',
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
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaListModelsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2alphaParentModelsRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{parent}/models',
  tags: ['projects'],
  description: 'Creates a new model.',
  operationId: 'retail.projects.locations.catalogs.models.create',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Whether to run a dry run to validate the request (without actually creating the model).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
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
              'Required. The parent resource under which to create the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudRetailV2alphaModelSchema } } },
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

export const getV2alphaParentProductsRoute = createRoute({
  method: 'get',
  path: '/v2alpha/{parent}/products',
  tags: ['projects'],
  description: 'Gets a list of Products.',
  operationId: 'retail.projects.locations.catalogs.branches.products.list',
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
              'A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. * List Product.Type.VARIANT Products sharing the same Product.Type.PRIMARY Product. For example: `primary_product_id = "some_product_id"` * List Products bundled in a Product.Type.COLLECTION Product. For example: `collection_product_id = "some_product_id"` * List Products with a partibular type. For example: `type = "PRIMARY"` `type = "VARIANT"` `type = "COLLECTION"` If the field is unrecognizable, an INVALID_ARGUMENT error is returned. If the specified Product.Type.PRIMARY Product or Product.Type.COLLECTION Product does not exist, a NOT_FOUND error is returned.',
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
              'Maximum number of Products to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned.',
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
              'A page token ListProductsResponse.next_page_token, received from a previous ProductService.ListProducts call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ProductService.ListProducts must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      readMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The fields of Product to return in the responses. If not set or empty, the following fields are returned: * Product.name * Product.id * Product.title * Product.uri * Product.images * Product.price_info * Product.brands If "*" is provided, all fields are returned. Product.name is always returned no matter what mask is set. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.',
            in: 'query',
            name: 'readMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
      requireTotalSize: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true and page_token is empty, ListProductsResponse.total_size is set to the total count of matched items irrespective of pagination. Notice that setting this field to true affects the performance.',
            in: 'query',
            name: 'requireTotalSize',
            schema: { type: 'boolean' },
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
              'Required. The parent branch resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/0`. Use `default_branch` as the branch ID, to list products under the default branch. If the caller does not have permission to list Products under this branch, regardless of whether or not this branch exists, a PERMISSION_DENIED error is returned.',
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
        'application/json': { schema: GoogleCloudRetailV2alphaListProductsResponseSchema },
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

export const postV2alphaParentProductsRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{parent}/products',
  tags: ['projects'],
  description: 'Creates a Product.',
  operationId: 'retail.projects.locations.catalogs.branches.products.create',
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
      productId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The ID to use for the Product, which will become the final component of the Product.name. If the caller does not have permission to create the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. This field must be unique among all Products with the same parent. Otherwise, an ALREADY_EXISTS error is returned. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.',
            in: 'query',
            name: 'productId',
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
              'Required. The parent catalog resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudRetailV2alphaProductSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaProductSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2alphaParentProductsImportRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{parent}/products:import',
  tags: ['projects'],
  description:
    'Bulk import of multiple Products. Request processing may be synchronous. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.',
  operationId: 'retail.projects.locations.catalogs.branches.products.import',
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
              'Required. `projects/1234/locations/global/catalogs/default_catalog/branches/default_branch` If no updateMask is specified, requires products.create permission. If updateMask is specified, requires products.update permission.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRetailV2alphaImportProductsRequestSchema },
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

export const postV2alphaParentProductsPurgeRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{parent}/products:purge',
  tags: ['projects'],
  description:
    'Permanently deletes all selected Products under a branch. This process is asynchronous. If the request is valid, the removal will be enqueued and processed offline. Depending on the number of Products, this operation could take hours to complete. Before the operation completes, some Products may still be returned by ProductService.GetProduct or ProductService.ListProducts. Depending on the number of Products, this operation could take hours to complete. To get a sample of Products that would be deleted, set PurgeProductsRequest.force to false.',
  operationId: 'retail.projects.locations.catalogs.branches.products.purge',
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
              'Required. The resource name of the branch under which the products are created. The format is `projects/${projectId}/locations/global/catalogs/${catalogId}/branches/${branchId}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRetailV2alphaPurgeProductsRequestSchema },
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

export const getV2alphaParentServingConfigsRoute = createRoute({
  method: 'get',
  path: '/v2alpha/{parent}/servingConfigs',
  tags: ['projects'],
  description: 'Lists all ServingConfigs linked to this catalog.',
  operationId: 'retail.projects.locations.catalogs.servingConfigs.list',
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
              'Optional. Maximum number of results to return. If unspecified, defaults to 100. If a value greater than 100 is provided, at most 100 results are returned.',
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
              'Optional. A page token, received from a previous `ListServingConfigs` call. Provide this to retrieve the subsequent page.',
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
              'Required. The catalog resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`',
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
        'application/json': { schema: GoogleCloudRetailV2alphaListServingConfigsResponseSchema },
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

export const postV2alphaParentServingConfigsRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{parent}/servingConfigs',
  tags: ['projects'],
  description:
    'Creates a ServingConfig. A maximum of 100 ServingConfigs are allowed in a Catalog, otherwise a FAILED_PRECONDITION error is returned.',
  operationId: 'retail.projects.locations.catalogs.servingConfigs.create',
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
      servingConfigId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID to use for the ServingConfig, which will become the final component of the ServingConfig's resource name. This value should be 4-63 characters, and valid characters are /a-z-_/.",
            in: 'query',
            name: 'servingConfigId',
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
              'Required. Full resource name of parent. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaServingConfigSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaServingConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2alphaParentUserEventsCollectRoute = createRoute({
  method: 'get',
  path: '/v2alpha/{parent}/userEvents:collect',
  tags: ['projects'],
  description:
    'Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.',
  operationId: 'retail.projects.locations.catalogs.userEvents.collect',
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
      ets: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.',
            in: 'query',
            name: 'ets',
            schema: { type: 'string' },
            required: false,
          },
        }),
      prebuiltRule: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The prebuilt rule name that can convert a specific type of raw_json. For example: "ga4_bq" rule for the GA4 user event schema.',
            in: 'query',
            name: 'prebuiltRule',
            schema: { type: 'string' },
            required: false,
          },
        }),
      rawJson: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An arbitrary serialized JSON string that contains necessary information that can comprise a user event. When this field is specified, the user_event field will be ignored. Note: line-delimited JSON is not supported, a single JSON only.',
            in: 'query',
            name: 'rawJson',
            schema: { type: 'string' },
            required: false,
          },
        }),
      uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for 3rd party requests.',
            in: 'query',
            name: 'uri',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userEvent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters.',
            in: 'query',
            name: 'userEvent',
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
              'Required. The parent catalog name, such as `projects/1234/locations/global/catalogs/default_catalog`.',
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
      content: { 'application/json': { schema: GoogleApiHttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2alphaParentUserEventsImportRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{parent}/userEvents:import',
  tags: ['projects'],
  description:
    'Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. `Operation.response` is of type `ImportResponse`. Note that it is possible for a subset of the items to be successfully inserted. `Operation.metadata` is of type `ImportMetadata`.',
  operationId: 'retail.projects.locations.catalogs.userEvents.import',
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
            description: 'Required. `projects/1234/locations/global/catalogs/default_catalog`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRetailV2alphaImportUserEventsRequestSchema },
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

export const postV2alphaParentUserEventsPurgeRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{parent}/userEvents:purge',
  tags: ['projects'],
  description:
    'Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.',
  operationId: 'retail.projects.locations.catalogs.userEvents.purge',
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
              'Required. The resource name of the catalog under which the events are created. The format is `projects/${projectId}/locations/global/catalogs/${catalogId}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRetailV2alphaPurgeUserEventsRequestSchema },
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

export const postV2alphaParentUserEventsRejoinRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{parent}/userEvents:rejoin',
  tags: ['projects'],
  description:
    'Starts a user-event rejoin operation with latest product catalog. Events are not annotated with detailed product information for products that are missing from the catalog when the user event is ingested. These events are stored as unjoined events with limited usage on training and serving. You can use this method to start a join operation on specified events with the latest version of product catalog. You can also use this method to correct events joined with the wrong product catalog. A rejoin operation can take hours or days to complete.',
  operationId: 'retail.projects.locations.catalogs.userEvents.rejoin',
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
              'Required. The parent catalog resource name, such as `projects/1234/locations/global/catalogs/default_catalog`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRetailV2alphaRejoinUserEventsRequestSchema },
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

export const postV2alphaParentUserEventsWriteRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{parent}/userEvents:write',
  tags: ['projects'],
  description: 'Writes a single user event.',
  operationId: 'retail.projects.locations.catalogs.userEvents.write',
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
      writeAsync: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to true, the user event will be written asynchronously after validation, and the API will respond without waiting for the write. Therefore, silent failures can occur even if the API returns success. In case of silent failures, error messages can be found in Stackdriver logs.',
            in: 'query',
            name: 'writeAsync',
            schema: { type: 'boolean' },
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
              'Required. The parent catalog resource name, such as `projects/1234/locations/global/catalogs/default_catalog`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudRetailV2alphaUserEventSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaUserEventSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2alphaPlacementPredictRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{placement}:predict',
  tags: ['projects'],
  description: 'Makes a recommendation prediction.',
  operationId: 'retail.projects.locations.catalogs.servingConfigs.predict',
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
      placement: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Full resource name of the format: `{placement=projects/*/locations/global/catalogs/default_catalog/servingConfigs/*}` or `{placement=projects/*/locations/global/catalogs/default_catalog/placements/*}`. We recommend using the `servingConfigs` resource. `placements` is a legacy resource. The ID of the Recommendations AI serving config or placement. Before you can request predictions from your model, you must create at least one serving config or placement for it. For more information, see [Manage serving configs] (https://cloud.google.com/retail/docs/manage-configs). The full list of available serving configs can be seen at https://console.cloud.google.com/ai/retail/catalogs/default_catalog/configs',
            in: 'path',
            name: 'placement',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaPredictRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaPredictResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2alphaPlacementSearchRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{placement}:search',
  tags: ['projects'],
  description:
    'Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.',
  operationId: 'retail.projects.locations.catalogs.servingConfigs.search',
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
      placement: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the Retail Search serving config, such as `projects/*/locations/global/catalogs/default_catalog/servingConfigs/default_serving_config` or the name of the legacy placement resource, such as `projects/*/locations/global/catalogs/default_catalog/placements/default_search`. This field is used to identify the serving config name and the set of models that will be used to make the search.',
            in: 'path',
            name: 'placement',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaSearchRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaSearchResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2alphaProductAddFulfillmentPlacesRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{product}:addFulfillmentPlaces',
  tags: ['projects'],
  description:
    'It is recommended to use the ProductService.AddLocalInventories method instead of ProductService.AddFulfillmentPlaces. ProductService.AddLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally adds place IDs to Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.',
  operationId: 'retail.projects.locations.catalogs.branches.products.addFulfillmentPlaces',
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
      product: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.',
            in: 'path',
            name: 'product',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRetailV2alphaAddFulfillmentPlacesRequestSchema },
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

export const postV2alphaProductAddLocalInventoriesRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{product}:addLocalInventories',
  tags: ['projects'],
  description:
    'Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be modified using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.',
  operationId: 'retail.projects.locations.catalogs.branches.products.addLocalInventories',
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
      product: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.',
            in: 'path',
            name: 'product',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRetailV2alphaAddLocalInventoriesRequestSchema },
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

export const postV2alphaProductRemoveFulfillmentPlacesRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{product}:removeFulfillmentPlaces',
  tags: ['projects'],
  description:
    'It is recommended to use the ProductService.RemoveLocalInventories method instead of ProductService.RemoveFulfillmentPlaces. ProductService.RemoveLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally removes place IDs from a Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.',
  operationId: 'retail.projects.locations.catalogs.branches.products.removeFulfillmentPlaces',
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
      product: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.',
            in: 'path',
            name: 'product',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequestSchema,
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

export const postV2alphaProductRemoveLocalInventoriesRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{product}:removeLocalInventories',
  tags: ['projects'],
  description:
    'Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.',
  operationId: 'retail.projects.locations.catalogs.branches.products.removeLocalInventories',
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
      product: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.',
            in: 'path',
            name: 'product',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRetailV2alphaRemoveLocalInventoriesRequestSchema },
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

export const postV2alphaServingConfigAddControlRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{servingConfig}:addControl',
  tags: ['projects'],
  description:
    "Enables a Control on the specified ServingConfig. The control is added in the last position of the list of controls it belongs to (e.g. if it's a facet spec control it will be applied in the last position of servingConfig.facetSpecIds) Returns a ALREADY_EXISTS error if the control has already been applied. Returns a FAILED_PRECONDITION error if the addition could exceed maximum number of control allowed for that type of control.",
  operationId: 'retail.projects.locations.catalogs.servingConfigs.addControl',
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
      servingConfig: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The source ServingConfig resource name . Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`',
            in: 'path',
            name: 'servingConfig',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaAddControlRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaServingConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2alphaServingConfigRemoveControlRoute = createRoute({
  method: 'post',
  path: '/v2alpha/{servingConfig}:removeControl',
  tags: ['projects'],
  description:
    'Disables a Control on the specified ServingConfig. The control is removed from the ServingConfig. Returns a NOT_FOUND error if the Control is not enabled for the ServingConfig.',
  operationId: 'retail.projects.locations.catalogs.servingConfigs.removeControl',
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
      servingConfig: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The source ServingConfig resource name . Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`',
            in: 'path',
            name: 'servingConfig',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRetailV2alphaRemoveControlRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudRetailV2alphaServingConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
