type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleRpcStatus = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type GoogleLongrunningOperation = {
  done?: boolean | undefined
  error?: GoogleRpcStatus | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy = {
  categories?: string[] | undefined
}
type GoogleCloudRecommendationengineV1beta1FeatureMapStringList = { value?: string[] | undefined }
type GoogleCloudRecommendationengineV1beta1FeatureMapFloatList = { value?: number[] | undefined }
type GoogleCloudRecommendationengineV1beta1FeatureMap = {
  categoricalFeatures?:
    | { [x: string]: GoogleCloudRecommendationengineV1beta1FeatureMapStringList }
    | undefined
  numericalFeatures?:
    | { [x: string]: GoogleCloudRecommendationengineV1beta1FeatureMapFloatList }
    | undefined
}
type GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice = {
  displayPrice?: number | undefined
  originalPrice?: number | undefined
}
type GoogleCloudRecommendationengineV1beta1Image = {
  height?: number | undefined
  uri?: string | undefined
  width?: number | undefined
}
type GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange = {
  max?: number | undefined
  min?: number | undefined
}
type GoogleCloudRecommendationengineV1beta1ProductCatalogItem = {
  availableQuantity?: string | undefined
  canonicalProductUri?: string | undefined
  costs?: { [x: string]: number } | undefined
  currencyCode?: string | undefined
  exactPrice?: GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice | undefined
  images?: GoogleCloudRecommendationengineV1beta1Image[] | undefined
  priceRange?: GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange | undefined
  stockState?:
    | 'STOCK_STATE_UNSPECIFIED'
    | 'IN_STOCK'
    | 'OUT_OF_STOCK'
    | 'PREORDER'
    | 'BACKORDER'
    | undefined
}
type GoogleCloudRecommendationengineV1beta1CatalogItem = {
  categoryHierarchies?:
    | GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[]
    | undefined
  description?: string | undefined
  id?: string | undefined
  itemAttributes?: GoogleCloudRecommendationengineV1beta1FeatureMap | undefined
  itemGroupId?: string | undefined
  languageCode?: string | undefined
  productMetadata?: GoogleCloudRecommendationengineV1beta1ProductCatalogItem | undefined
  tags?: string[] | undefined
  title?: string | undefined
}
type GoogleLongrunningListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: GoogleLongrunningOperation[] | undefined
}
type GoogleCloudRecommendationengineV1beta1EventDetail = {
  eventAttributes?: GoogleCloudRecommendationengineV1beta1FeatureMap | undefined
  experimentIds?: string[] | undefined
  pageViewId?: string | undefined
  recommendationToken?: string | undefined
  referrerUri?: string | undefined
  uri?: string | undefined
}
type GoogleCloudRecommendationengineV1beta1ProductDetail = {
  availableQuantity?: number | undefined
  currencyCode?: string | undefined
  displayPrice?: number | undefined
  id?: string | undefined
  itemAttributes?: GoogleCloudRecommendationengineV1beta1FeatureMap | undefined
  originalPrice?: number | undefined
  quantity?: number | undefined
  stockState?:
    | 'STOCK_STATE_UNSPECIFIED'
    | 'IN_STOCK'
    | 'OUT_OF_STOCK'
    | 'PREORDER'
    | 'BACKORDER'
    | undefined
}
type GoogleCloudRecommendationengineV1beta1PurchaseTransaction = {
  costs?: { [x: string]: number } | undefined
  currencyCode?: string | undefined
  id?: string | undefined
  revenue?: number | undefined
  taxes?: { [x: string]: number } | undefined
}
type GoogleCloudRecommendationengineV1beta1ProductEventDetail = {
  cartId?: string | undefined
  listId?: string | undefined
  pageCategories?: GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[] | undefined
  productDetails?: GoogleCloudRecommendationengineV1beta1ProductDetail[] | undefined
  purchaseTransaction?: GoogleCloudRecommendationengineV1beta1PurchaseTransaction | undefined
  searchQuery?: string | undefined
}
type GoogleCloudRecommendationengineV1beta1UserInfo = {
  directUserRequest?: boolean | undefined
  ipAddress?: string | undefined
  userAgent?: string | undefined
  userId?: string | undefined
  visitorId?: string | undefined
}
type GoogleCloudRecommendationengineV1beta1UserEvent = {
  eventDetail?: GoogleCloudRecommendationengineV1beta1EventDetail | undefined
  eventSource?: 'EVENT_SOURCE_UNSPECIFIED' | 'AUTOML' | 'ECOMMERCE' | 'BATCH_UPLOAD' | undefined
  eventTime?: string | undefined
  eventType?: string | undefined
  productEventDetail?: GoogleCloudRecommendationengineV1beta1ProductEventDetail | undefined
  userInfo?: GoogleCloudRecommendationengineV1beta1UserInfo | undefined
}
type GoogleCloudRecommendationengineV1beta1PredictRequest = {
  dryRun?: boolean | undefined
  filter?: string | undefined
  labels?: { [x: string]: string } | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
  params?: { [x: string]: { [x: string]: unknown } } | undefined
  userEvent?: GoogleCloudRecommendationengineV1beta1UserEvent | undefined
}
type GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult = {
  id?: string | undefined
  itemMetadata?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleCloudRecommendationengineV1beta1PredictResponse = {
  dryRun?: boolean | undefined
  itemsMissingInCatalog?: string[] | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  nextPageToken?: string | undefined
  recommendationToken?: string | undefined
  results?: GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult[] | undefined
}
type GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse = {
  catalogItems?: GoogleCloudRecommendationengineV1beta1CatalogItem[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudRecommendationengineV1beta1ImportErrorsConfig = { gcsPrefix?: string | undefined }
type GoogleCloudRecommendationengineV1beta1BigQuerySource = {
  dataSchema?: string | undefined
  datasetId?: string | undefined
  gcsStagingDir?: string | undefined
  projectId?: string | undefined
  tableId?: string | undefined
}
type GoogleCloudRecommendationengineV1beta1CatalogInlineSource = {
  catalogItems?: GoogleCloudRecommendationengineV1beta1CatalogItem[] | undefined
}
type GoogleCloudRecommendationengineV1beta1GcsSource = {
  inputUris?: string[] | undefined
  jsonSchema?: string | undefined
}
type GoogleCloudRecommendationengineV1beta1UserEventInlineSource = {
  userEvents?: GoogleCloudRecommendationengineV1beta1UserEvent[] | undefined
}
type GoogleCloudRecommendationengineV1beta1InputConfig = {
  bigQuerySource?: GoogleCloudRecommendationengineV1beta1BigQuerySource | undefined
  catalogInlineSource?: GoogleCloudRecommendationengineV1beta1CatalogInlineSource | undefined
  gcsSource?: GoogleCloudRecommendationengineV1beta1GcsSource | undefined
  userEventInlineSource?: GoogleCloudRecommendationengineV1beta1UserEventInlineSource | undefined
}
type GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest = {
  errorsConfig?: GoogleCloudRecommendationengineV1beta1ImportErrorsConfig | undefined
  inputConfig?: GoogleCloudRecommendationengineV1beta1InputConfig | undefined
  requestId?: string | undefined
  updateMask?: string | undefined
}
type GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig = {
  eventItemLevel?: 'CATALOG_ITEM_LEVEL_UNSPECIFIED' | 'VARIANT' | 'MASTER' | undefined
  predictItemLevel?: 'CATALOG_ITEM_LEVEL_UNSPECIFIED' | 'VARIANT' | 'MASTER' | undefined
}
type GoogleCloudRecommendationengineV1beta1Catalog = {
  catalogItemLevelConfig?: GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig | undefined
  defaultEventStoreId?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
}
type GoogleCloudRecommendationengineV1beta1ListCatalogsResponse = {
  catalogs?: GoogleCloudRecommendationengineV1beta1Catalog[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration = {
  apiKey?: string | undefined
}
type GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse = {
  nextPageToken?: string | undefined
  predictionApiKeyRegistrations?:
    | GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration[]
    | undefined
}
type GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest = {
  predictionApiKeyRegistration?:
    | GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration
    | undefined
}
type GoogleCloudRecommendationengineV1beta1ListUserEventsResponse = {
  nextPageToken?: string | undefined
  userEvents?: GoogleCloudRecommendationengineV1beta1UserEvent[] | undefined
}
type GoogleApiHttpBody = {
  contentType?: string | undefined
  data?: string | undefined
  extensions?: { [x: string]: { [x: string]: unknown } }[] | undefined
}
type GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest = {
  errorsConfig?: GoogleCloudRecommendationengineV1beta1ImportErrorsConfig | undefined
  inputConfig?: GoogleCloudRecommendationengineV1beta1InputConfig | undefined
  requestId?: string | undefined
}
type GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest = {
  filter?: string | undefined
  force?: boolean | undefined
}
type GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest = {
  userEventRejoinScope?:
    | 'USER_EVENT_REJOIN_SCOPE_UNSPECIFIED'
    | 'JOINED_EVENTS'
    | 'UNJOINED_EVENTS'
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRecommendationengineV1beta1CatalogItem }
        output: GoogleCloudRecommendationengineV1beta1CatalogItem
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/operations': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleLongrunningListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:predict': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRecommendationengineV1beta1PredictRequest }
        output: GoogleCloudRecommendationengineV1beta1PredictResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/catalogItems': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRecommendationengineV1beta1CatalogItem }
        output: GoogleCloudRecommendationengineV1beta1CatalogItem
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/catalogItems:import': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/catalogs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudRecommendationengineV1beta1ListCatalogsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/predictionApiKeyRegistrations': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & {
          json: GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest
        }
        output: GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/userEvents': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudRecommendationengineV1beta1ListUserEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/userEvents:collect': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            ets?: string | undefined
            uri?: string | undefined
            userEvent?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleApiHttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/userEvents:import': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/userEvents:purge': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/userEvents:rejoin': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/userEvents:write': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudRecommendationengineV1beta1UserEvent }
        output: GoogleCloudRecommendationengineV1beta1UserEvent
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
