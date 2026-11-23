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
type GoogleCloudDiscoveryengineV1betaDocument = {
  id?: string | undefined
  jsonData?: string | undefined
  name?: string | undefined
  parentDocumentId?: string | undefined
  schemaId?: string | undefined
  structData?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleLongrunningListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: GoogleLongrunningOperation[] | undefined
}
type GoogleCloudDiscoveryengineV1betaListDocumentsResponse = {
  documents?: GoogleCloudDiscoveryengineV1betaDocument[] | undefined
  nextPageToken?: string | undefined
}
type GoogleTypeDate = {
  day?: number | undefined
  month?: number | undefined
  year?: number | undefined
}
type GoogleCloudDiscoveryengineV1betaBigQuerySource = {
  dataSchema?: string | undefined
  datasetId?: string | undefined
  gcsStagingDir?: string | undefined
  partitionDate?: GoogleTypeDate | undefined
  projectId?: string | undefined
  tableId?: string | undefined
}
type GoogleCloudDiscoveryengineV1betaImportErrorConfig = { gcsPrefix?: string | undefined }
type GoogleCloudDiscoveryengineV1betaGcsSource = {
  dataSchema?: string | undefined
  inputUris?: string[] | undefined
}
type GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource = {
  documents?: GoogleCloudDiscoveryengineV1betaDocument[] | undefined
}
type GoogleCloudDiscoveryengineV1betaImportDocumentsRequest = {
  bigquerySource?: GoogleCloudDiscoveryengineV1betaBigQuerySource | undefined
  errorConfig?: GoogleCloudDiscoveryengineV1betaImportErrorConfig | undefined
  gcsSource?: GoogleCloudDiscoveryengineV1betaGcsSource | undefined
  inlineSource?: GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource | undefined
  reconciliationMode?: 'RECONCILIATION_MODE_UNSPECIFIED' | 'INCREMENTAL' | 'FULL' | undefined
}
type GoogleApiHttpBody = {
  contentType?: string | undefined
  data?: string | undefined
  extensions?: { [x: string]: { [x: string]: unknown } }[] | undefined
}
type GoogleCloudDiscoveryengineV1betaCustomAttribute = {
  numbers?: number[] | undefined
  text?: string[] | undefined
}
type GoogleCloudDiscoveryengineV1betaCompletionInfo = {
  selectedPosition?: number | undefined
  selectedSuggestion?: string | undefined
}
type GoogleCloudDiscoveryengineV1betaDocumentInfo = {
  id?: string | undefined
  name?: string | undefined
  promotionIds?: string[] | undefined
  quantity?: number | undefined
}
type GoogleCloudDiscoveryengineV1betaMediaInfo = {
  mediaProgressDuration?: string | undefined
  mediaProgressPercentage?: number | undefined
}
type GoogleCloudDiscoveryengineV1betaPageInfo = {
  pageCategory?: string | undefined
  pageviewId?: string | undefined
  referrerUri?: string | undefined
  uri?: string | undefined
}
type GoogleCloudDiscoveryengineV1betaPanelInfo = {
  displayName?: string | undefined
  panelId?: string | undefined
  panelPosition?: number | undefined
  totalPanels?: number | undefined
}
type GoogleCloudDiscoveryengineV1betaSearchInfo = {
  offset?: number | undefined
  orderBy?: string | undefined
  searchQuery?: string | undefined
}
type GoogleCloudDiscoveryengineV1betaTransactionInfo = {
  cost?: number | undefined
  currency?: string | undefined
  discountValue?: number | undefined
  tax?: number | undefined
  transactionId?: string | undefined
  value?: number | undefined
}
type GoogleCloudDiscoveryengineV1betaUserInfo = {
  userAgent?: string | undefined
  userId?: string | undefined
}
type GoogleCloudDiscoveryengineV1betaUserEvent = {
  attributes?: { [x: string]: GoogleCloudDiscoveryengineV1betaCustomAttribute } | undefined
  attributionToken?: string | undefined
  completionInfo?: GoogleCloudDiscoveryengineV1betaCompletionInfo | undefined
  directUserRequest?: boolean | undefined
  documents?: GoogleCloudDiscoveryengineV1betaDocumentInfo[] | undefined
  eventTime?: string | undefined
  eventType?: string | undefined
  filter?: string | undefined
  mediaInfo?: GoogleCloudDiscoveryengineV1betaMediaInfo | undefined
  pageInfo?: GoogleCloudDiscoveryengineV1betaPageInfo | undefined
  panel?: GoogleCloudDiscoveryengineV1betaPanelInfo | undefined
  promotionIds?: string[] | undefined
  searchInfo?: GoogleCloudDiscoveryengineV1betaSearchInfo | undefined
  sessionId?: string | undefined
  tagIds?: string[] | undefined
  transactionInfo?: GoogleCloudDiscoveryengineV1betaTransactionInfo | undefined
  userInfo?: GoogleCloudDiscoveryengineV1betaUserInfo | undefined
  userPseudoId?: string | undefined
}
type GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource = {
  userEvents?: GoogleCloudDiscoveryengineV1betaUserEvent[] | undefined
}
type GoogleCloudDiscoveryengineV1betaImportUserEventsRequest = {
  bigquerySource?: GoogleCloudDiscoveryengineV1betaBigQuerySource | undefined
  errorConfig?: GoogleCloudDiscoveryengineV1betaImportErrorConfig | undefined
  gcsSource?: GoogleCloudDiscoveryengineV1betaGcsSource | undefined
  inlineSource?: GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource | undefined
}
type GoogleCloudDiscoveryengineV1betaRecommendRequest = {
  filter?: string | undefined
  pageSize?: number | undefined
  params?: { [x: string]: { [x: string]: unknown } } | undefined
  userEvent?: GoogleCloudDiscoveryengineV1betaUserEvent | undefined
  userLabels?: { [x: string]: string } | undefined
  validateOnly?: boolean | undefined
}
type GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult = {
  document?: GoogleCloudDiscoveryengineV1betaDocument | undefined
  id?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleCloudDiscoveryengineV1betaRecommendResponse = {
  attributionToken?: string | undefined
  missingIds?: string[] | undefined
  results?: GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult[] | undefined
  validateOnly?: boolean | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta/:name': {
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
            allowMissing?: boolean | undefined
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
        } & { json: GoogleCloudDiscoveryengineV1betaDocument }
        output: GoogleCloudDiscoveryengineV1betaDocument
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name/operations': {
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
    '/v1beta/:parent/documents': {
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
        output: GoogleCloudDiscoveryengineV1betaListDocumentsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            documentId?: string | undefined
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
        } & { json: GoogleCloudDiscoveryengineV1betaDocument }
        output: GoogleCloudDiscoveryengineV1betaDocument
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/documents:import': {
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
        } & { json: GoogleCloudDiscoveryengineV1betaImportDocumentsRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/userEvents:collect': {
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
    '/v1beta/:parent/userEvents:import': {
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
        } & { json: GoogleCloudDiscoveryengineV1betaImportUserEventsRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/userEvents:write': {
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
        } & { json: GoogleCloudDiscoveryengineV1betaUserEvent }
        output: GoogleCloudDiscoveryengineV1betaUserEvent
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:servingConfig:recommend': {
      $post: {
        input: { param: { servingConfig: string } } & {
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
        } & { json: GoogleCloudDiscoveryengineV1betaRecommendRequest }
        output: GoogleCloudDiscoveryengineV1betaRecommendResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
