import { createRoute, z } from '@hono/zod-openapi'

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

const GoogleCloudRecommendationengineV1alphaRejoinCatalogMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata for TriggerCatalogRejoin method.' })
  .openapi('GoogleCloudRecommendationengineV1alphaRejoinCatalogMetadata')

const GoogleCloudRecommendationengineV1alphaRejoinCatalogResponseSchema = z
  .object({
    rejoinedUserEventsCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of user events that were joined with latest catalog items.',
      }),
  })
  .openapi({ description: 'Response message for TriggerCatalogRejoin method.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1alphaRejoinCatalogResponse')

const GoogleCloudRecommendationengineV1alphaTuningMetadataSchema = z
  .object({
    recommendationModel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the recommendation model that this tune applies to. Format: projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/eventStores/{event_store_id}/recommendationModels/{recommendation_model_id}',
      }),
  })
  .openapi({ description: 'Metadata associated with a tune operation.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1alphaTuningMetadata')

const GoogleCloudRecommendationengineV1alphaTuningResponseSchema = z
  .object({})
  .openapi({ description: 'Response associated with a tune operation.' })
  .openapi('GoogleCloudRecommendationengineV1alphaTuningResponse')

const GoogleCloudRecommendationengineV1beta1BigQuerySourceSchema = z
  .object({
    dataSchema: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The schema to use when parsing the data from the source. Supported values for catalog imports: 1: "catalog_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#json (Default for catalogItems.import) 2: "catalog_merchant_center" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#mc Supported values for user event imports: 1: "user_events_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/manage-user-events#import (Default for userEvents.import) 2. "user_events_ga360" using https://support.google.com/analytics/answer/3437719?hl=en',
      }),
    datasetId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The BigQuery data set to copy the data from.' }),
    gcsStagingDir: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Intermediate Cloud Storage directory used for the import. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The project id (can be project # or id) that the BigQuery source is in. If not specified, inherits the project id from the parent request.',
      }),
    tableId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The BigQuery table to copy the data from.' }),
  })
  .openapi({ description: 'BigQuery source import data from.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1BigQuerySource')

const GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigSchema = z
  .object({
    eventItemLevel: z
      .enum(['CATALOG_ITEM_LEVEL_UNSPECIFIED', 'VARIANT', 'MASTER'])
      .exactOptional()
      .openapi({
        description:
          'Optional. Level of the catalog at which events are uploaded. See https://cloud.google.com/recommendations-ai/docs/catalog#catalog-levels for more details.',
      }),
    predictItemLevel: z
      .enum(['CATALOG_ITEM_LEVEL_UNSPECIFIED', 'VARIANT', 'MASTER'])
      .exactOptional()
      .openapi({
        description:
          'Optional. Level of the catalog at which predictions are made. See https://cloud.google.com/recommendations-ai/docs/catalog#catalog-levels for more details.',
      }),
  })
  .openapi({
    description:
      'Configures the catalog level that users send events to, and the level at which predictions are made.',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig')

const GoogleCloudRecommendationengineV1beta1CatalogSchema = z
  .object({
    catalogItemLevelConfig:
      GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigSchema.exactOptional().openapi({
        description: 'Required. The catalog item level configuration.',
      }),
    defaultEventStoreId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The ID of the default event store.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The catalog display name.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The fully qualified resource name of the catalog.' }),
  })
  .openapi({ description: 'The catalog configuration. Next ID: 5.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1Catalog')

const GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchySchema = z
  .object({
    categories: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. Catalog item categories. Each category should be a UTF-8 encoded string with a length limit of 2 KiB. Note that the order in the list denotes the specificity (from least to most specific).',
      }),
  })
  .openapi({ description: 'Category represents catalog item category hierarchy.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy')

const GoogleCloudRecommendationengineV1beta1FeatureMapStringListSchema = z
  .object({
    value: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'String feature value with a length limit of 128 bytes.' }),
  })
  .openapi({ description: 'A list of string features.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1FeatureMapStringList')

const GoogleCloudRecommendationengineV1beta1FeatureMapFloatListSchema = z
  .object({
    value: z.array(z.float32()).exactOptional().openapi({ description: 'Float feature value.' }),
  })
  .openapi({ description: 'A list of float features.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1FeatureMapFloatList')

const GoogleCloudRecommendationengineV1beta1FeatureMapSchema = z
  .object({
    categoricalFeatures: z
      .record(z.string(), GoogleCloudRecommendationengineV1beta1FeatureMapStringListSchema)
      .exactOptional()
      .openapi({
        description:
          'Categorical features that can take on one of a limited number of possible values. Some examples would be the brand/maker of a product, or country of a customer. Feature names and values must be UTF-8 encoded strings. For example: `{ "colors": {"value": ["yellow", "green"]}, "sizes": {"value":["S", "M"]}`',
      }),
    numericalFeatures: z
      .record(z.string(), GoogleCloudRecommendationengineV1beta1FeatureMapFloatListSchema)
      .exactOptional()
      .openapi({
        description:
          'Numerical features. Some examples would be the height/weight of a product, or age of a customer. Feature names must be UTF-8 encoded strings. For example: `{ "lengths_cm": {"value":[2.3, 15.4]}, "heights_cm": {"value":[8.1, 6.4]} }`',
      }),
  })
  .openapi({
    description:
      'FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features.',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1FeatureMap')

const GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPriceSchema = z
  .object({
    displayPrice: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Optional. Display price of the product.' }),
    originalPrice: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "Optional. Price of the product without any discount. If zero, by default set to be the 'displayPrice'.",
      }),
  })
  .openapi({ description: 'Exact product price.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice')

const GoogleCloudRecommendationengineV1beta1ImageSchema = z
  .object({
    height: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Optional. Height of the image in number of pixels.' }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. URL of the image with a length limit of 5 KiB.' }),
    width: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Optional. Width of the image in number of pixels.' }),
  })
  .openapi({ description: 'Catalog item thumbnail/detail image.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1Image')

const GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRangeSchema = z
  .object({
    max: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Required. The maximum product price.' }),
    min: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Required. The minimum product price.' }),
  })
  .openapi({
    description:
      'Product price range when there are a range of prices for different variations of the same product.',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange')

const GoogleCloudRecommendationengineV1beta1ProductCatalogItemSchema = z
  .object({
    availableQuantity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The available quantity of the item.' }),
    canonicalProductUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Canonical URL directly linking to the item detail page with a length limit of 5 KiB..',
      }),
    costs: z
      .record(z.string(), z.float32())
      .exactOptional()
      .openapi({
        description:
          "Optional. A map to pass the costs associated with the product. For example: {\"manufacturing\": 45.5} The profit of selling this item is computed like so: * If 'exactPrice' is provided, profit = displayPrice - sum(costs) * If 'priceRange' is provided, profit = minPrice - sum(costs)",
      }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Only required if the price is set. Currency code for price/costs. Use three-character ISO-4217 code.',
      }),
    exactPrice:
      GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPriceSchema.exactOptional().openapi(
        { description: 'Optional. The exact product price.' },
      ),
    images: z
      .array(GoogleCloudRecommendationengineV1beta1ImageSchema)
      .exactOptional()
      .openapi({ description: 'Optional. Product images for the catalog item.' }),
    priceRange:
      GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRangeSchema.exactOptional().openapi(
        { description: 'Optional. The product price range.' },
      ),
    stockState: z
      .enum(['STOCK_STATE_UNSPECIFIED', 'IN_STOCK', 'OUT_OF_STOCK', 'PREORDER', 'BACKORDER'])
      .exactOptional()
      .openapi({
        description: 'Optional. Online stock state of the catalog item. Default is `IN_STOCK`.',
      }),
  })
  .openapi({
    description: 'ProductCatalogItem captures item metadata specific to retail products.',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1ProductCatalogItem')

const GoogleCloudRecommendationengineV1beta1CatalogItemSchema = z
  .object({
    categoryHierarchies: z
      .array(GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchySchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Catalog item categories. This field is repeated for supporting one catalog item belonging to several parallel category hierarchies. For example, if a shoes product belongs to both ["Shoes & Accessories" -> "Shoes"] and ["Sports & Fitness" -> "Athletic Clothing" -> "Shoes"], it could be represented as: "categoryHierarchies": [ { "categories": ["Shoes & Accessories", "Shoes"]}, { "categories": ["Sports & Fitness", "Athletic Clothing", "Shoes"] } ]',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Catalog item description. UTF-8 encoded string with a length limit of 5 KiB.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Catalog item identifier. UTF-8 encoded string with a length limit of 128 bytes. This id must be unique among all catalog items within the same catalog. It should also be used when logging user events in order for the user events to be joined with the Catalog.',
      }),
    itemAttributes: GoogleCloudRecommendationengineV1beta1FeatureMapSchema.exactOptional().openapi({
      description:
        'Optional. Highly encouraged. Extra catalog item attributes to be included in the recommendation model. For example, for retail products, this could include the store name, vendor, style, color, etc. These are very strong signals for recommendation model, thus we highly recommend providing the item attributes here.',
    }),
    itemGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Variant group identifier for prediction results. UTF-8 encoded string with a length limit of 128 bytes. This field must be enabled before it can be used. [Learn more](/recommendations-ai/docs/catalog#item-group-id).',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Deprecated. The model automatically detects the text language. Your catalog can include text in different languages, but duplicating catalog items to provide text in multiple languages can result in degraded model performance.',
      }),
    productMetadata:
      GoogleCloudRecommendationengineV1beta1ProductCatalogItemSchema.exactOptional().openapi({
        description: 'Optional. Metadata specific to retail products.',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Filtering tags associated with the catalog item. Each tag should be a UTF-8 encoded string with a length limit of 1 KiB. This tag can be used for filtering recommendation results by passing the tag as part of the predict request filter.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Catalog item title. UTF-8 encoded string with a length limit of 1 KiB.',
      }),
  })
  .openapi({
    description: 'CatalogItem captures all metadata information of items to be recommended.',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1CatalogItem')

const GoogleCloudRecommendationengineV1beta1CatalogInlineSourceSchema = z
  .object({
    catalogItems: z
      .array(GoogleCloudRecommendationengineV1beta1CatalogItemSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. A list of catalog items to update/create. Recommended max of 10k items.',
      }),
  })
  .openapi({
    description: 'The inline source for the input config for ImportCatalogItems method.',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1CatalogInlineSource')

const GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistrationSchema = z
  .object({ apiKey: z.string().exactOptional().openapi({ description: 'The API key.' }) })
  .openapi({ description: 'Registered Api Key.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration')

const GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequestSchema = z
  .object({
    predictionApiKeyRegistration:
      GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistrationSchema.exactOptional().openapi(
        { description: 'Required. The prediction API key registration.' },
      ),
  })
  .openapi({
    description: 'Request message for the `CreatePredictionApiKeyRegistration` method.',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest')

const GoogleCloudRecommendationengineV1beta1EventDetailSchema = z
  .object({
    eventAttributes: GoogleCloudRecommendationengineV1beta1FeatureMapSchema.exactOptional().openapi(
      {
        description:
          'Optional. Extra user event features to include in the recommendation model. For product recommendation, an example of extra user information is traffic_channel, i.e. how user arrives at the site. Users can arrive at the site by coming to the site directly, or coming through Google search, and etc.',
      },
    ),
    experimentIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups (e.g. using Recommendation Engine system, using different recommendation models).',
      }),
    pageViewId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A unique id of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageViewId` property should be kept the same for all these events so that they can be grouped together properly. This `pageViewId` will be automatically generated if using the JavaScript pixel.',
      }),
    recommendationToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Recommendation token included in the recommendation prediction response. This field enables accurate attribution of recommendation model performance. This token enables us to accurately attribute page view or purchase back to the event and the particular predict response containing this clicked/purchased item. If user clicks on product K in the recommendation results, pass the `PredictResponse.recommendationToken` property as a url parameter to product K's page. When recording events on product K's page, log the PredictResponse.recommendation_token to this field. Optional, but highly encouraged for user events that are the result of a recommendation prediction query.",
      }),
    referrerUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The referrer url of the current page. When using the JavaScript pixel, this value is filled in automatically.',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Complete url (window.location.href) of the user's current page. When using the JavaScript pixel, this value is filled in automatically. Maximum length 5KB.",
      }),
  })
  .openapi({ description: 'User event details shared by all recommendation types.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1EventDetail')

const GoogleCloudRecommendationengineV1beta1GcsSourceSchema = z
  .object({
    inputUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. Google Cloud Storage URIs to input files. URI can be up to 2000 characters long. URIs can match the full object path (for example, `gs://bucket/directory/object.json`) or a pattern matching one or more files, such as `gs://bucket/directory/*.json`. A request can contain at most 100 files, and each file can be up to 2 GB. See [Importing catalog information](/recommendations-ai/docs/upload-catalog) for the expected file format and setup instructions.',
      }),
    jsonSchema: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The schema to use when parsing the data from the source. Supported values for catalog imports: 1: "catalog_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#json (Default for catalogItems.import) 2: "catalog_merchant_center" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#mc Supported values for user events imports: 1: "user_events_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/manage-user-events#import (Default for userEvents.import) 2. "user_events_ga360" using https://support.google.com/analytics/answer/3437719?hl=en',
      }),
  })
  .openapi({
    description: 'Google Cloud Storage location for input content. format.',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1GcsSource')

const GoogleCloudRecommendationengineV1beta1ImportErrorsConfigSchema = z
  .object({
    gcsPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Import errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message.',
      }),
  })
  .openapi({ description: 'Configuration of destination for Import related errors.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1ImportErrorsConfig')

const GoogleCloudRecommendationengineV1beta1ProductDetailSchema = z
  .object({
    availableQuantity: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Quantity of the products in stock when a user event happens. Optional. If provided, this overrides the available quantity in Catalog for this event. and can only be set if `stock_status` is set to `IN_STOCK`. Note that if an item is out of stock, you must set the `stock_state` field to be `OUT_OF_STOCK`. Leaving this field unspecified / as zero is not sufficient to mark the item out of stock.',
      }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Currency code for price/costs. Use three-character ISO-4217 code. Required only if originalPrice or displayPrice is set.',
      }),
    displayPrice: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Display price of the product (e.g. discounted price). If provided, this will override the display price in Catalog for this product.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Catalog item ID. UTF-8 encoded string with a length limit of 128 characters.',
      }),
    itemAttributes: GoogleCloudRecommendationengineV1beta1FeatureMapSchema.exactOptional().openapi({
      description: 'Optional. Extra features associated with a product in the user event.',
    }),
    originalPrice: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Original price of the product. If provided, this will override the original price in Catalog for this product.',
      }),
    quantity: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Quantity of the product associated with the user event. For example, this field will be 2 if two products are added to the shopping cart for `add-to-cart` event. Required for `add-to-cart`, `add-to-list`, `remove-from-cart`, `checkout-start`, `purchase-complete`, `refund` event types.',
      }),
    stockState: z
      .enum(['STOCK_STATE_UNSPECIFIED', 'IN_STOCK', 'OUT_OF_STOCK', 'PREORDER', 'BACKORDER'])
      .exactOptional()
      .openapi({
        description:
          'Optional. Item stock state. If provided, this overrides the stock state in Catalog for items in this event.',
      }),
  })
  .openapi({
    description: 'Detailed product information associated with a user event.',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1ProductDetail')

const GoogleCloudRecommendationengineV1beta1PurchaseTransactionSchema = z
  .object({
    costs: z
      .record(z.string(), z.float32())
      .exactOptional()
      .openapi({
        description:
          'Optional. All the costs associated with the product. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs. Total product cost such that profit = revenue - (sum(taxes) + sum(costs)) If product_cost is not set, then profit = revenue - tax - shipping - sum(CatalogItem.costs). If CatalogItem.cost is not specified for one of the items, CatalogItem.cost based profit *cannot* be calculated for this Transaction.',
      }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Currency code. Use three-character ISO-4217 code. This field is not required if the event type is `refund`.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The transaction ID with a length limit of 128 bytes.' }),
    revenue: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Required. Total revenue or grand total associated with the transaction. This value include shipping, tax, or other adjustments to total revenue that you want to include as part of your revenue calculations. This field is not required if the event type is `refund`.',
      }),
    taxes: z
      .record(z.string(), z.float32())
      .exactOptional()
      .openapi({ description: 'Optional. All the taxes associated with the transaction.' }),
  })
  .openapi({
    description: 'A transaction represents the entire purchase transaction.',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1PurchaseTransaction')

const GoogleCloudRecommendationengineV1beta1ProductEventDetailSchema = z
  .object({
    cartId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The id or name of the associated shopping cart. This id is used to associate multiple items added or present in the cart before purchase. This can only be set for `add-to-cart`, `remove-from-cart`, `checkout-start`, `purchase-complete`, or `shopping-cart-page-view` events.',
      }),
    listId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required for `add-to-list` and `remove-from-list` events. The id or name of the list that the item is being added to or removed from. Other event types should not set this field.',
      }),
    pageCategories: z
      .array(GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchySchema)
      .exactOptional()
      .openapi({
        description:
          'Required for `category-page-view` events. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. The categories associated with a category page. Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: categories : ["Sales", "2017 Black Friday Deals"].',
      }),
    productDetails: z
      .array(GoogleCloudRecommendationengineV1beta1ProductDetailSchema)
      .exactOptional()
      .openapi({
        description:
          "The main product details related to the event. This field is required for the following event types: * `add-to-cart` * `add-to-list` * `checkout-start` * `detail-page-view` * `purchase-complete` * `refund` * `remove-from-cart` * `remove-from-list` This field is optional for the following event types: * `page-visit` * `shopping-cart-page-view` - note that 'product_details' should be set for this unless the shopping cart is empty. * `search` (highly encouraged) In a `search` event, this field represents the products returned to the end user on the current page (the end user may have not finished broswing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new SEARCH event with different product_details is desired. The end user may have not finished broswing the whole page yet. This field is not allowed for the following event types: * `category-page-view` * `home-page-view`",
      }),
    purchaseTransaction:
      GoogleCloudRecommendationengineV1beta1PurchaseTransactionSchema.exactOptional().openapi({
        description:
          'Optional. A transaction represents the entire purchase transaction. Required for `purchase-complete` events. Optional for `checkout-start` events. Other event types should not set this field.',
      }),
    searchQuery: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. The user's search query as UTF-8 encoded text with a length limit of 5 KiB.",
      }),
  })
  .openapi({
    description: 'ProductEventDetail captures user event information specific to retail products.',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1ProductEventDetail')

const GoogleCloudRecommendationengineV1beta1UserInfoSchema = z
  .object({
    directUserRequest: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Indicates if the request is made directly from the end user in which case the user_agent and ip_address fields can be populated from the HTTP request. This should *not* be set when using the javascript pixel. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events).',
      }),
    ipAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. IP address of the user. This could be either IPv4 (e.g. 104.133.9.80) or IPv6 (e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334). This should *not* be set when using the javascript pixel or if `direct_user_request` is set. Used to extract location information for personalization.',
      }),
    userAgent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. User agent as included in the HTTP header. UTF-8 encoded string with a length limit of 1 KiB. This should *not* be set when using the JavaScript pixel or if `directUserRequest` is set.',
      }),
    userId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Unique identifier for logged-in user with a length limit of 128 bytes. Required only for logged-in users. Don't set for anonymous users. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality.",
      }),
    visitorId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. A unique identifier for tracking visitors with a length limit of 128 bytes. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. Maximum length 128 bytes. Cannot be empty. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality.",
      }),
  })
  .openapi({ description: 'Information of end users.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1UserInfo')

const GoogleCloudRecommendationengineV1beta1UserEventSchema = z
  .object({
    eventDetail: GoogleCloudRecommendationengineV1beta1EventDetailSchema.exactOptional().openapi({
      description:
        'Optional. User event detailed information common across different recommendation types.',
    }),
    eventSource: z
      .enum(['EVENT_SOURCE_UNSPECIFIED', 'AUTOML', 'ECOMMERCE', 'BATCH_UPLOAD'])
      .exactOptional()
      .openapi({
        description:
          'Optional. This field should *not* be set when using JavaScript pixel or the Recommendations AI Tag. Defaults to `EVENT_SOURCE_UNSPECIFIED`.',
      }),
    eventTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Only required for ImportUserEvents method. Timestamp of user event created.',
      }),
    eventType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. User event type. Allowed values are: * `add-to-cart` Products being added to cart. * `add-to-list` Items being added to a list (shopping list, favorites etc). * `category-page-view` Special pages such as sale or promotion pages viewed. * `checkout-start` User starting a checkout process. * `detail-page-view` Products detail page viewed. * `home-page-view` Homepage viewed. * `page-visit` Generic page visits not included in the event types above. * `purchase-complete` User finishing a purchase. * `refund` Purchased items being refunded or returned. * `remove-from-cart` Products being removed from cart. * `remove-from-list` Items being removed from a list. * `search` Product search. * `shopping-cart-page-view` User viewing a shopping cart. * `impression` List of items displayed. Used by Google Tag Manager.',
      }),
    productEventDetail:
      GoogleCloudRecommendationengineV1beta1ProductEventDetailSchema.exactOptional().openapi({
        description:
          "Optional. Retail product specific user event metadata. This field is required for the following event types: * `add-to-cart` * `add-to-list` * `category-page-view` * `checkout-start` * `detail-page-view` * `purchase-complete` * `refund` * `remove-from-cart` * `remove-from-list` * `search` This field is optional for the following event types: * `page-visit` * `shopping-cart-page-view` - note that 'product_event_detail' should be set for this unless the shopping cart is empty. This field is not allowed for the following event types: * `home-page-view`",
      }),
    userInfo: GoogleCloudRecommendationengineV1beta1UserInfoSchema.exactOptional().openapi({
      description: 'Required. User information.',
    }),
  })
  .openapi({
    description:
      "UserEvent captures all metadata information recommendation engine needs to know about how end users interact with customers' website.",
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1UserEvent')

const GoogleCloudRecommendationengineV1beta1UserEventInlineSourceSchema = z
  .object({
    userEvents: z
      .array(GoogleCloudRecommendationengineV1beta1UserEventSchema)
      .exactOptional()
      .openapi({
        description: 'Optional. A list of user events to import. Recommended max of 10k items.',
      }),
  })
  .openapi({
    description: 'The inline source for the input config for ImportUserEvents method.',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1UserEventInlineSource')

const GoogleCloudRecommendationengineV1beta1InputConfigSchema = z
  .object({
    bigQuerySource:
      GoogleCloudRecommendationengineV1beta1BigQuerySourceSchema.exactOptional().openapi({
        description: 'BigQuery input source.',
      }),
    catalogInlineSource:
      GoogleCloudRecommendationengineV1beta1CatalogInlineSourceSchema.exactOptional().openapi({
        description: 'The Inline source for the input content for Catalog items.',
      }),
    gcsSource: GoogleCloudRecommendationengineV1beta1GcsSourceSchema.exactOptional().openapi({
      description: 'Google Cloud Storage location for the input content.',
    }),
    userEventInlineSource:
      GoogleCloudRecommendationengineV1beta1UserEventInlineSourceSchema.exactOptional().openapi({
        description: 'The Inline source for the input content for UserEvents.',
      }),
  })
  .openapi({ description: 'The input config source.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1InputConfig')

const GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequestSchema = z
  .object({
    errorsConfig:
      GoogleCloudRecommendationengineV1beta1ImportErrorsConfigSchema.exactOptional().openapi({
        description: 'Optional. The desired location of errors incurred during the Import.',
      }),
    inputConfig: GoogleCloudRecommendationengineV1beta1InputConfigSchema.exactOptional().openapi({
      description: 'Required. The desired input location of the data.',
    }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Unique identifier provided by client, within the ancestor dataset scope. Ensures idempotency and used for request deduplication. Server-generated if unspecified. Up to 128 characters long. This is returned as google.longrunning.Operation.name in the response.',
      }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Indicates which fields in the provided imported 'items' to update. If not set, will by default update all fields.",
      }),
  })
  .openapi({ description: 'Request message for Import methods.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest')

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

const GoogleCloudRecommendationengineV1beta1ImportCatalogItemsResponseSchema = z
  .object({
    errorSamples: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({ description: 'A sample of errors encountered while processing the request.' }),
    errorsConfig:
      GoogleCloudRecommendationengineV1beta1ImportErrorsConfigSchema.exactOptional().openapi({
        description: 'Echoes the destination for the complete errors in the request if set.',
      }),
  })
  .openapi({
    description:
      'Response of the ImportCatalogItemsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1ImportCatalogItemsResponse')

const GoogleCloudRecommendationengineV1beta1ImportMetadataSchema = z
  .object({
    createTime: z.string().exactOptional().openapi({ description: 'Operation create time.' }),
    failureCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Count of entries that encountered errors while processing.' }),
    operationName: z.string().exactOptional().openapi({ description: 'Name of the operation.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the request / operation. This is parroting back the requestId that was passed in the request.',
      }),
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
      'Metadata related to the progress of the Import operation. This will be returned by the google.longrunning.Operation.metadata field.',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1ImportMetadata')

const GoogleCloudRecommendationengineV1beta1ImportUserEventsRequestSchema = z
  .object({
    errorsConfig:
      GoogleCloudRecommendationengineV1beta1ImportErrorsConfigSchema.exactOptional().openapi({
        description: 'Optional. The desired location of errors incurred during the Import.',
      }),
    inputConfig: GoogleCloudRecommendationengineV1beta1InputConfigSchema.exactOptional().openapi({
      description: 'Required. The desired input location of the data.',
    }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Unique identifier provided by client, within the ancestor dataset scope. Ensures idempotency for expensive long running operations. Server-generated if unspecified. Up to 128 characters long. This is returned as google.longrunning.Operation.name in the response. Note that this field must not be set if the desired input config is catalog_inline_source.',
      }),
  })
  .openapi({ description: 'Request message for the ImportUserEvents request.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest')

const GoogleCloudRecommendationengineV1beta1UserEventImportSummarySchema = z
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
  .openapi('GoogleCloudRecommendationengineV1beta1UserEventImportSummary')

const GoogleCloudRecommendationengineV1beta1ImportUserEventsResponseSchema = z
  .object({
    errorSamples: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({ description: 'A sample of errors encountered while processing the request.' }),
    errorsConfig:
      GoogleCloudRecommendationengineV1beta1ImportErrorsConfigSchema.exactOptional().openapi({
        description:
          'Echoes the destination for the complete errors if this field was set in the request.',
      }),
    importSummary:
      GoogleCloudRecommendationengineV1beta1UserEventImportSummarySchema.exactOptional().openapi({
        description: 'Aggregated statistics of user event import status.',
      }),
  })
  .openapi({
    description:
      'Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1ImportUserEventsResponse')

const GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponseSchema = z
  .object({
    catalogItems: z
      .array(GoogleCloudRecommendationengineV1beta1CatalogItemSchema)
      .exactOptional()
      .openapi({ description: 'The catalog items.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If empty, the list is complete. If nonempty, the token to pass to the next request's ListCatalogItemRequest.page_token.",
      }),
  })
  .openapi({ description: 'Response message for ListCatalogItems method.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse')

const GoogleCloudRecommendationengineV1beta1ListCatalogsResponseSchema = z
  .object({
    catalogs: z
      .array(GoogleCloudRecommendationengineV1beta1CatalogSchema)
      .exactOptional()
      .openapi({ description: "Output only. All the customer's catalogs.", readOnly: true }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token, if not returned indicates the last page.' }),
  })
  .openapi({ description: 'Response for ListCatalogs method.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1ListCatalogsResponse')

const GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If empty, the list is complete. If nonempty, pass the token to the next request's `ListPredictionApiKeysRegistrationsRequest.pageToken`.",
      }),
    predictionApiKeyRegistrations: z
      .array(GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistrationSchema)
      .exactOptional()
      .openapi({ description: 'The list of registered API keys.' }),
  })
  .openapi({
    description: 'Response message for the `ListPredictionApiKeyRegistrations`.',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse')

const GoogleCloudRecommendationengineV1beta1ListUserEventsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If empty, the list is complete. If nonempty, the token to pass to the next request's ListUserEvents.page_token.",
      }),
    userEvents: z
      .array(GoogleCloudRecommendationengineV1beta1UserEventSchema)
      .exactOptional()
      .openapi({ description: 'The user events.' }),
  })
  .openapi({ description: 'Response message for ListUserEvents method.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1ListUserEventsResponse')

const GoogleCloudRecommendationengineV1beta1PredictRequestSchema = z
  .object({
    dryRun: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Use dryRun mode for this prediction query. If set to true, a fake model will be used that returns arbitrary catalog items. Note that the dryRun mode should only be used for testing the API, or if the model is not ready.',
      }),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Filter for restricting prediction results. Accepts values for tags and the `filterOutOfStockItems` flag. * Tag expressions. Restricts predictions to items that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1 KiB. * filterOutOfStockItems. Restricts predictions to items that do not have a stockState value of OUT_OF_STOCK. Examples: * tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional") * filterOutOfStockItems tag=(-"promotional") * filterOutOfStockItems If your filter blocks all prediction results, nothing will be returned. If you want generic (unfiltered) popular items to be returned instead, set `strictFiltering` to false in `PredictRequest.params`.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The labels for the predict request. * Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit. * Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit. * No more than 64 labels can be associated with a given request. See https://goo.gl/xmQnxf for more information on and examples of labels.',
      }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Maximum number of results to return per page. Set this property to the number of prediction results required. If zero, the service will choose a reasonable default.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The previous PredictResponse.next_page_token.' }),
    params: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          "Optional. Additional domain specific parameters for the predictions. Allowed values: * `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response. * `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular items instead of empty if your filter blocks all prediction results. * `priceRerankLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-price-reranking', 'low-price-reranking', 'medium-price-reranking', 'high-price-reranking'}. This gives request level control and adjust prediction results based on product price. * `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-diversity', 'low-diversity', 'medium-diversity', 'high-diversity', 'auto-diversity'}. This gives request level control and adjust prediction results based on product category.",
      }),
    userEvent: GoogleCloudRecommendationengineV1beta1UserEventSchema.exactOptional().openapi({
      description:
        "Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging. Don't set UserInfo.visitor_id or UserInfo.user_id to the same fixed ID for different users. If you are trying to receive non-personalized recommendations (not recommended; this can negatively impact model performance), instead set UserInfo.visitor_id to a random unique ID and leave UserInfo.user_id unset.",
    }),
  })
  .openapi({
    description:
      'Request message for Predict method. Full resource name of the format: `{name=projects/*/locations/global/catalogs/default_catalog/eventStores/default_event_store/placements/*}` The id of the recommendation engine placement. This id is used to identify the set of models that will be used to make the prediction. We currently support three placements with the following IDs by default: // * `shopping_cart`: Predicts items frequently bought together with one or more catalog items in the same shopping session. Commonly displayed after `add-to-cart` event, on product detail pages, or on the shopping cart page. * `home_page`: Predicts the next product that a user will most likely engage with or purchase based on the shopping or viewing history of the specified `userId` or `visitorId`. For example - Recommendations for you. * `product_detail`: Predicts the next product that a user will most likely engage with or purchase. The prediction is based on the shopping or viewing history of the specified `userId` or `visitorId` and its relevance to a specified `CatalogItem`. Typically used on product detail pages. For example - More items like this. * `recently_viewed_default`: Returns up to 75 items recently viewed by the specified `userId` or `visitorId`, most recent ones first. Returns nothing if neither of them has viewed any items yet. For example - Recently viewed. The full list of available placements can be seen at https://console.cloud.google.com/recommendation/catalogs/default_catalog/placements',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1PredictRequest')

const GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResultSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'ID of the recommended catalog item' }),
    itemMetadata: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'Additional item metadata / annotations. Possible values: * `catalogItem`: JSON representation of the catalogItem. Will be set if `returnCatalogItem` is set to true in `PredictRequest.params`. * `score`: Prediction score in double value. Will be set if `returnItemScore` is set to true in `PredictRequest.params`.',
      }),
  })
  .openapi({
    description: 'PredictionResult represents the recommendation prediction results.',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult')

const GoogleCloudRecommendationengineV1beta1PredictResponseSchema = z
  .object({
    dryRun: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the dryRun property was set in the request.' }),
    itemsMissingInCatalog: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'IDs of items in the request that were missing from the catalog.' }),
    metadata: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'Additional domain specific prediction response metadata.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If empty, the list is complete. If nonempty, the token to pass to the next request's PredictRequest.page_token.",
      }),
    recommendationToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique recommendation token. This should be included in the user event logs resulting from this recommendation, which enables accurate attribution of recommendation model performance.',
      }),
    results: z
      .array(GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResultSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of recommended items. The order represents the ranking (from the most relevant item to the least).',
      }),
  })
  .openapi({ description: 'Response message for predict method.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1PredictResponse')

const GoogleCloudRecommendationengineV1beta1PurgeUserEventsMetadataSchema = z
  .object({
    createTime: z.string().exactOptional().openapi({ description: 'Operation create time.' }),
    operationName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the request / operation.' }),
  })
  .openapi({
    description:
      'Metadata related to the progress of the PurgeUserEvents operation. This will be returned by the google.longrunning.Operation.metadata field.',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1PurgeUserEventsMetadata')

const GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequestSchema = z
  .object({
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The filter string to specify the events to be deleted. Empty string filter is not allowed. The eligible fields for filtering are: * `eventType`: UserEvent.eventType field of type string. * `eventTime`: in ISO 8601 "zulu" format. * `visitorId`: field of type string. Specifying this will delete all events associated with a visitor. * `userId`: field of type string. Specifying this will delete all events associated with a user. Examples: * Deleting all events in a time range: `eventTime > "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z"` * Deleting specific eventType in time range: `eventTime > "2012-04-23T18:25:43.511Z" eventType = "detail-page-view"` * Deleting all events for a specific visitor: `visitorId = "visitor1024"` The filtering fields are assumed to have an implicit AND.',
      }),
    force: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. The default value is false. Override this flag to true to actually perform the purge. If the field is not set to true, a sampling of events to be deleted will be returned.',
      }),
  })
  .openapi({ description: 'Request message for PurgeUserEvents method.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest')

const GoogleCloudRecommendationengineV1beta1PurgeUserEventsResponseSchema = z
  .object({
    purgedEventsCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total count of events purged as a result of the operation.' }),
    userEventsSample: z
      .array(GoogleCloudRecommendationengineV1beta1UserEventSchema)
      .exactOptional()
      .openapi({
        description:
          'A sampling of events deleted (or will be deleted) depending on the `force` property in the request. Max of 500 items will be returned.',
      }),
  })
  .openapi({
    description:
      'Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.',
    required: [],
  })
  .openapi('GoogleCloudRecommendationengineV1beta1PurgeUserEventsResponse')

const GoogleCloudRecommendationengineV1beta1RejoinUserEventsMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata for RejoinUserEvents method.' })
  .openapi('GoogleCloudRecommendationengineV1beta1RejoinUserEventsMetadata')

const GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestSchema = z
  .object({
    userEventRejoinScope: z
      .enum(['USER_EVENT_REJOIN_SCOPE_UNSPECIFIED', 'JOINED_EVENTS', 'UNJOINED_EVENTS'])
      .exactOptional()
      .openapi({
        description:
          'Required. The type of the catalog rejoin to define the scope and range of the user events to be rejoined with catalog items.',
      }),
  })
  .openapi({ description: 'Request message for CatalogRejoin method.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest')

const GoogleCloudRecommendationengineV1beta1RejoinUserEventsResponseSchema = z
  .object({
    rejoinedUserEventsCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of user events that were joined with latest catalog items.',
      }),
  })
  .openapi({ description: 'Response message for RejoinUserEvents method.', required: [] })
  .openapi('GoogleCloudRecommendationengineV1beta1RejoinUserEventsResponse')

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

export const getV1beta1NameRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description:
    'Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.',
  operationId: 'recommendationengine.projects.locations.catalogs.operations.get',
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

export const deleteV1beta1NameRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description: 'Unregister an apiKey from using for predict method.',
  operationId:
    'recommendationengine.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.delete',
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
              'Required. The API key to unregister including full resource path. `projects/*/locations/global/catalogs/default_catalog/eventStores/default_event_store/predictionApiKeyRegistrations/`',
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

export const patchV1beta1NameRoute = createRoute({
  method: 'patch',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description:
    'Updates a catalog item. Partial updating is supported. Non-existing items will be created.',
  operationId: 'recommendationengine.projects.locations.catalogs.catalogItems.patch',
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
              "Optional. Indicates which fields in the provided 'item' to update. If not set, will by default update all fields.",
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
              'Required. Full resource name of catalog item, such as `projects/*/locations/global/catalogs/default_catalog/catalogItems/some_catalog_item_id`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRecommendationengineV1beta1CatalogItemSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudRecommendationengineV1beta1CatalogItemSchema },
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

export const getV1beta1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'recommendationengine.projects.locations.catalogs.operations.list',
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

export const postV1beta1NamePredictRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:predict',
  tags: ['projects'],
  description:
    'Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).',
  operationId: 'recommendationengine.projects.locations.catalogs.eventStores.placements.predict',
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
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRecommendationengineV1beta1PredictRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudRecommendationengineV1beta1PredictResponseSchema },
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

export const getV1beta1ParentCatalogItemsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/catalogItems',
  tags: ['projects'],
  description: 'Gets a list of catalog items.',
  operationId: 'recommendationengine.projects.locations.catalogs.catalogItems.list',
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
            description: 'Optional. Use of this field is not supported by version v1beta1.',
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
              'Optional. Maximum number of results to return per page. If zero, the service will choose a reasonable default.',
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
            description: 'Optional. The previous ListCatalogItemsResponse.next_page_token.',
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
              'Required. The parent catalog resource name, such as `projects/*/locations/global/catalogs/default_catalog`.',
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
          schema: GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponseSchema,
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

export const postV1beta1ParentCatalogItemsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/catalogItems',
  tags: ['projects'],
  description: 'Creates a catalog item.',
  operationId: 'recommendationengine.projects.locations.catalogs.catalogItems.create',
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
              'Required. The parent catalog resource name, such as `projects/*/locations/global/catalogs/default_catalog`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRecommendationengineV1beta1CatalogItemSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudRecommendationengineV1beta1CatalogItemSchema },
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

export const postV1beta1ParentCatalogItemsImportRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/catalogItems:import',
  tags: ['projects'],
  description:
    'Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.',
  operationId: 'recommendationengine.projects.locations.catalogs.catalogItems.import',
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
              'Required. `projects/1234/locations/global/catalogs/default_catalog` If no updateMask is specified, requires catalogItems.create permission. If updateMask is specified, requires catalogItems.update permission.',
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
          schema: GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequestSchema,
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

export const getV1beta1ParentCatalogsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/catalogs',
  tags: ['projects'],
  description: 'Lists all the catalog configurations associated with the project.',
  operationId: 'recommendationengine.projects.locations.catalogs.list',
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
              'Optional. A page token, received from a previous `ListCatalogs` call. Provide this to retrieve the subsequent page.',
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
            description: 'Required. The account resource name with an associated location.',
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
          schema: GoogleCloudRecommendationengineV1beta1ListCatalogsResponseSchema,
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

export const getV1beta1ParentPredictionApiKeyRegistrationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/predictionApiKeyRegistrations',
  tags: ['projects'],
  description: 'List the registered apiKeys for use with predict method.',
  operationId:
    'recommendationengine.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.list',
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
              'Optional. Maximum number of results to return per page. If unset, the service will choose a reasonable default.',
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
            description: 'Optional. The previous `ListPredictionApiKeyRegistration.nextPageToken`.',
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
              'Required. The parent placement resource name such as `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store`',
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
          schema:
            GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponseSchema,
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

export const postV1beta1ParentPredictionApiKeyRegistrationsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/predictionApiKeyRegistrations',
  tags: ['projects'],
  description: 'Register an API key for use with predict method.',
  operationId:
    'recommendationengine.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.create',
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
              'Required. The parent resource path. `projects/*/locations/global/catalogs/default_catalog/eventStores/default_event_store`.',
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
          schema:
            GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistrationSchema,
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

export const getV1beta1ParentUserEventsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/userEvents',
  tags: ['projects'],
  description:
    'Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.',
  operationId: 'recommendationengine.projects.locations.catalogs.eventStores.userEvents.list',
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
              'Optional. Filtering expression to specify restrictions over returned events. This is a sequence of terms, where each term applies some kind of a restriction to the returned user events. Use this expression to restrict results to a specific time range, or filter events by eventType. eg: eventTime > "2012-04-23T18:25:43.511Z" eventsMissingCatalogItems eventTime<"2012-04-23T18:25:43.511Z" eventType=search We expect only 3 types of fields: * eventTime: this can be specified a maximum of 2 times, once with a less than operator and once with a greater than operator. The eventTime restrict should result in one contiguous valid eventTime range. * eventType: only 1 eventType restriction can be specified. * eventsMissingCatalogItems: specififying this will restrict results to events for which catalog items were not found in the catalog. The default behavior is to return only those events for which catalog items were found. Some examples of valid filters expressions: * Example 1: eventTime > "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z" * Example 2: eventTime > "2012-04-23T18:25:43.511Z" eventType = detail-page-view * Example 3: eventsMissingCatalogItems eventType = search eventTime < "2018-04-23T18:30:43.511Z" * Example 4: eventTime > "2012-04-23T18:25:43.511Z" * Example 5: eventType = search * Example 6: eventsMissingCatalogItems',
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
              'Optional. Maximum number of results to return per page. If zero, the service will choose a reasonable default.',
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
            description: 'Optional. The previous ListUserEventsResponse.next_page_token.',
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
              'Required. The parent eventStore resource name, such as `projects/*/locations/*/catalogs/default_catalog/eventStores/default_event_store`.',
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
          schema: GoogleCloudRecommendationengineV1beta1ListUserEventsResponseSchema,
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

export const getV1beta1ParentUserEventsCollectRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/userEvents:collect',
  tags: ['projects'],
  description:
    'Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.',
  operationId: 'recommendationengine.projects.locations.catalogs.eventStores.userEvents.collect',
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
              'Optional. The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.',
            in: 'query',
            name: 'ets',
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
              'Optional. The url including cgi-parameters but excluding the hash fragment. The URL must be truncated to 1.5K bytes to conservatively be under the 2K bytes. This is often more useful than the referer url, because many browsers only send the domain for 3rd party requests.',
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
            description: 'Required. URL encoded UserEvent proto.',
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
              'Required. The parent eventStore name, such as `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store`.',
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

export const postV1beta1ParentUserEventsImportRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/userEvents:import',
  tags: ['projects'],
  description:
    'Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.',
  operationId: 'recommendationengine.projects.locations.catalogs.eventStores.userEvents.import',
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
              'Required. `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store`',
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
          schema: GoogleCloudRecommendationengineV1beta1ImportUserEventsRequestSchema,
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

export const postV1beta1ParentUserEventsPurgeRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/userEvents:purge',
  tags: ['projects'],
  description:
    'Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.',
  operationId: 'recommendationengine.projects.locations.catalogs.eventStores.userEvents.purge',
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
              'Required. The resource name of the event_store under which the events are created. The format is `projects/${projectId}/locations/global/catalogs/${catalogId}/eventStores/${eventStoreId}`',
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
          schema: GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequestSchema,
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

export const postV1beta1ParentUserEventsRejoinRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/userEvents:rejoin',
  tags: ['projects'],
  description:
    "Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.",
  operationId: 'recommendationengine.projects.locations.catalogs.eventStores.userEvents.rejoin',
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
              'Required. Full resource name of user event, such as `projects/*/locations/*/catalogs/default_catalog/eventStores/default_event_store`.',
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
          schema: GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestSchema,
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

export const postV1beta1ParentUserEventsWriteRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/userEvents:write',
  tags: ['projects'],
  description: 'Writes a single user event.',
  operationId: 'recommendationengine.projects.locations.catalogs.eventStores.userEvents.write',
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
              'Required. The parent eventStore resource name, such as "projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store".',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudRecommendationengineV1beta1UserEventSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudRecommendationengineV1beta1UserEventSchema },
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
