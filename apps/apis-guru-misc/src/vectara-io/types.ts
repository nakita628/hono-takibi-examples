type AdminDimension = {
  description?: string | undefined
  indexingDefault?: number | undefined
  name?: string | undefined
  servingDefault?: number | undefined
}
type AdminFilterAttributeLevel =
  | 'FILTER_ATTRIBUTE_LEVEL__UNDEFINED'
  | 'FILTER_ATTRIBUTE_LEVEL__DOCUMENT'
  | 'FILTER_ATTRIBUTE_LEVEL__DOCUMENT_PART'
type AdminFilterAttributeType =
  | 'FILTER_ATTRIBUTE_TYPE__UNDEFINED'
  | 'FILTER_ATTRIBUTE_TYPE__INTEGER'
  | 'FILTER_ATTRIBUTE_TYPE__INTEGER_LIST'
  | 'FILTER_ATTRIBUTE_TYPE__REAL'
  | 'FILTER_ATTRIBUTE_TYPE__REAL_LIST'
  | 'FILTER_ATTRIBUTE_TYPE__TEXT'
  | 'FILTER_ATTRIBUTE_TYPE__TEXT_LIST'
type AdminFilterAttribute = {
  description?: string | undefined
  indexed?: boolean | undefined
  level?: AdminFilterAttributeLevel | undefined
  name?: string | undefined
  type?: AdminFilterAttributeType | undefined
}
type AdminCorpus = {
  customDimensions?: AdminDimension[] | undefined
  description?: string | undefined
  dtProvision?: string | undefined
  enabled?: boolean | undefined
  encoderId?: string | undefined
  encrypted?: boolean | undefined
  filterAttributes?: AdminFilterAttribute[] | undefined
  id?: bigint | undefined
  metadataMaxBytes?: bigint | undefined
  name?: string | undefined
  swapIenc?: boolean | undefined
  swapQenc?: boolean | undefined
  textless?: boolean | undefined
}
type AdminCreateCorpusRequest = { corpus?: AdminCorpus | undefined }
type VectaraStatusCode =
  | 'OK'
  | 'FAILURE'
  | 'UNKNOWN'
  | 'INVALID_ARGUMENT'
  | 'DEADLINE_EXCEEDED'
  | 'ALREADY_EXISTS'
  | 'PERMISSION_DENIED'
  | 'RESOURCE_EXHAUSTED'
  | 'FAILED_PRECONDITION'
  | 'ABORTED'
  | 'OUT_OF_RANGE'
  | 'UNIMPLEMENTED'
  | 'INTERNAL'
  | 'UNAVAILABLE'
  | 'DATA_LOSS'
  | 'UNAUTHENTICATED'
  | 'BAD_REQUEST'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'NOT_FOUND'
  | 'METHOD_NOT_ALLOWED'
  | 'CONFLICT'
  | 'UNSUPPORTED_MEDIA_TYPE'
  | 'TOO_MANY_REQUESTS'
  | 'INTERNAL_SERVER_ERROR'
  | 'NOT_IMPLEMENTED'
  | 'SERVICE_UNAVAILABLE'
  | 'INSUFFICIENT_STORAGE'
  | 'UNPARSEABLE_RESPONSE'
  | 'DISABLED_CUSTOMER'
  | 'INVALID_CUSTOMER_ID'
  | 'DISABLED_CORPUS'
  | 'INVALID_CORPUS_ID'
  | 'DISABLED_API_KEY'
  | 'EXPIRED_API_KEY'
  | 'INVALID_API_KEY'
  | 'CMK_INACCESSIBLE'
  | 'QRY__DISABLED_CORPUS'
  | 'QRY__DOCUMENT_DB_FAILURE'
  | 'QRY__ENCODER_FAILURE'
  | 'QRY__INTERRUPTED'
  | 'QRY__INVALID_CORPUS'
  | 'QRY__INVALID_START'
  | 'QRY__INVALID_NUM_RESULTS'
  | 'QRY__INVALID_CONTEXT'
  | 'QRY__MISSING_QUERY'
  | 'QRY__MISSING_CORPUS'
  | 'QRY__TIMEOUT'
  | 'QRY__TOO_MANY_CORPORA'
  | 'QRY__TOO_MANY_QUERIES'
  | 'QRY__VECTOR_INDEX_FAILURE'
  | 'QRY__INVALID_DIMENSION'
  | 'QRY__INVALID_CLIENTKEY'
  | 'QRY__DECRYPTION_FAILURE'
  | 'QRY__INVALID_RERANKER'
  | 'QRY__PARTIAL_RERANK'
  | 'QRY__RERANK_FAILURE'
  | 'QRY__TOO_MANY_RESULT_ROWS'
  | 'QRY__PARTIAL_RETRIEVAL'
  | 'CX_SPECS__INVALID_JSON'
  | 'CX_SPECS__UNREGISTERED_TYPE'
  | 'CX_SPECS__MISSING_SPEC'
  | 'CX_SPECS__MISSING_TYPE'
  | 'CX_SPECS__UNPARSEABLE_SPEC'
  | 'ADM__INVALID_CUSTOMER_ID'
  | 'ADM__INVALID_CORPUS_ID'
  | 'ADM__INVALID_ENCODER_ID'
  | 'ADM__INVALID_ROLE_ID'
  | 'ADM__ROLE_ALREADY_EXISTS'
  | 'ADM__ONLY_ONE_OWNER_SUPPORTED'
  | 'ADM__INVALID_PERMISSION'
  | 'ADM__ROLECREATION_FAILURE'
  | 'ADM__USER_EMAIL_NOT_AVAIALBLE'
  | 'ADM__USERNAME_NOT_AVAILABLE'
  | 'ADM__SIGNUP_MISSING_NAME'
  | 'ADM__SIGNUP_MISSING_ORG'
  | 'ADM__SIGNUP_MISSING_EMAIL'
  | 'ADM__SIGNUP_MISSING_PAYMENT'
  | 'ADM__SIGNUP_MISSING_PLAN'
  | 'ADM__SIGNUP_MISSING_PASSWORD'
  | 'ADM__SIGNUP_INVALID_NAME'
  | 'ADM__SIGNUP_INVALID_ORG'
  | 'ADM__SIGNUP_INVALID_EMAIL'
  | 'ADM__SIGNUP_INVALID_PAYMENT'
  | 'ADM__SIGNUP_INVALID_PLAN'
  | 'ADM__SIGNUP_INVALID_PASSWORD'
  | 'ADM__SIGNUP_INVALID_ACCOUNT_ALIAS'
  | 'ADM__SIGNUP_INVALID_EMAIL_VALIDATION_CODE'
  | 'ADM__SIGNUP_MISSING_COUNTRY_CODE'
  | 'ADM__SIGNUP_ROOT_EMAIL_NOT_AVAILABLE'
  | 'ADM__CUST_MARK_DELETE_FAILED'
  | 'ADM__CUST_FAISS_DEALLOC_FAILED'
  | 'ADM__CORPUS_LIMIT_REACHED'
  | 'ADM__STRIPE_CARD_DECLINED'
  | 'ADM__STRIPE_PROCESSING_ERROR'
  | 'ADM__EMAIL_VALIDATION_REQUEST_NOT_FOUND'
  | 'ADM__EMAIL_NOT_VALIDATED'
  | 'ADM__CHANGE_PLAN__NO_CURRENT_PLAN'
  | 'ADM__CHANGE_PLAN__REQUIRES_MANUAL_CHANGE'
  | 'ADM__CHANGE_PLAN__INVALID_PLAN_ID'
  | 'ADM__CHANGE_PLAN__NO_PAYMENT_SOURCE'
  | 'ADM__CHANGE_PLAN__INVALID_EFFECTIVE_DATE'
  | 'ADM__CHANGE_PLAN__CONFLICTING_CHANGE'
  | 'SCM__MISCONFIGURED_CONNECTION'
  | 'STATS_DB_READ_FAILURE'
  | 'VDB__TEXT_READ_FAILURE'
  | 'REBUILD__LOW_RECALL'
  | 'REBUILD__INDEX_UPLOAD_FAILURE'
  | 'REBUILD__UPDATE_JOURNAL_FAILURE'
  | 'REBUILD__UPDATE_FAISSPARAMS_FAILURE'
  | 'REBUILD__NO_DATA'
  | 'REBUILD__EVALUATION'
  | 'IDX__TRANSIENT_PARTIAL_DELETION_FAILURE'
  | 'IDX__PERMANENT_PARTIAL_DELETION_FAILURE'
type ComvectaraStatus = { code?: VectaraStatusCode | undefined; statusDetail?: string | undefined }
type AdminCreateCorpusResponse = {
  corpusId?: bigint | undefined
  status?: ComvectaraStatus | undefined
}
type ProtobufAny = { typeUrl?: string | undefined; value?: string | undefined }
type GooglerpcStatus = {
  code?: number | undefined
  details?: ProtobufAny[] | undefined
  message?: string | undefined
}
type AdminDeleteCorpusRequest = { corpusId?: bigint | undefined; customerId?: bigint | undefined }
type AdminDeleteCorpusResponse = { status?: ComvectaraStatus | undefined }
type VectaraDeleteDocumentRequest = {
  corpusId?: string | undefined
  customerId?: string | undefined
  documentId?: string | undefined
}
type VectaraDeleteDocumentResponse = { [x: string]: unknown }
type VectaraindexingCustomDimension = { name?: string | undefined; value?: number | undefined }
type IndexingSection = {
  customDims?: VectaraindexingCustomDimension[] | undefined
  id?: number | undefined
  metadataJson?: string | undefined
  section?: IndexingSection[] | undefined
  text?: string | undefined
  title?: string | undefined
}
type VectaraindexingDocument = {
  customDims?: VectaraindexingCustomDimension[] | undefined
  description?: string | undefined
  documentId?: string | undefined
  metadataJson?: string | undefined
  section?: IndexingSection[] | undefined
  title?: string | undefined
}
type VectaraIndexDocumentRequest = {
  corpusId?: string | undefined
  customerId?: string | undefined
  document?: VectaraindexingDocument | undefined
}
type VectaraStorageQuota = { numChars?: string | undefined; numMetadataChars?: string | undefined }
type VectaraIndexDocumentResponse = {
  quotaConsumed?: VectaraStorageQuota | undefined
  status?: ComvectaraStatus | undefined
}
type AdminListCorporaRequest = {
  filter?: string | undefined
  numResults?: bigint | undefined
  pageKey?: string | undefined
}
type AdminListCorporaResponse = {
  corpus?: AdminCorpus[] | undefined
  pageKey?: string | undefined
  status?: ComvectaraStatus | undefined
}
type VectaraservingCustomDimension = { name?: string | undefined; weight?: number | undefined }
type CorpusKeySemantics = 'DEFAULT' | 'QUERY' | 'RESPONSE'
type ServingCorpusKey = {
  corpusId?: bigint | undefined
  customerId?: bigint | undefined
  dim?: VectaraservingCustomDimension[] | undefined
  metadataFilter?: string | undefined
  semantics?: CorpusKeySemantics | undefined
}
type QueryRequestRerankingConfig = { rerankerId?: bigint | undefined }
type ServingQueryRequest = {
  corpusKey?: ServingCorpusKey[] | undefined
  numResults?: bigint | undefined
  query?: string | undefined
  rerankingConfig?: QueryRequestRerankingConfig | undefined
  start?: bigint | undefined
}
type ServingBatchQueryRequest = { query?: ServingQueryRequest[] | undefined }
type ServingPerformanceMetrics = {
  queryEncodeMs?: bigint | undefined
  rerankMs?: bigint | undefined
  retrievalMs?: bigint | undefined
  userdataRetrievalMs?: bigint | undefined
}
type ServingAttribute = { name?: string | undefined; value?: string | undefined }
type ServingResponseSetDocument = {
  id?: string | undefined
  metadata?: ServingAttribute[] | undefined
}
type ServingResponse = {
  corpusKey?: ServingCorpusKey | undefined
  documentIndex?: bigint | undefined
  metadata?: ServingAttribute[] | undefined
  score?: number | undefined
  text?: string | undefined
}
type ServingResponseSet = {
  document?: ServingResponseSetDocument[] | undefined
  response?: ServingResponse[] | undefined
  status?: ComvectaraStatus[] | undefined
}
type ServingBatchQueryResponse = {
  metrics?: ServingPerformanceMetrics | undefined
  responseSet?: ServingResponseSet[] | undefined
  status?: ComvectaraStatus[] | undefined
}
type AdminResetCorpusRequest = { corpusId?: bigint | undefined; customerId?: bigint | undefined }
type AdminResetCorpusResponse = { status?: ComvectaraStatus | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/create-corpus': {
      $post:
        | {
            input: { header: { 'customer-id': number } } & { json: AdminCreateCorpusRequest }
            output: AdminCreateCorpusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'customer-id': number } } & { json: AdminCreateCorpusRequest }
            output: GooglerpcStatus
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/delete-corpus': {
      $post:
        | {
            input: { header: { 'customer-id': number } } & { json: AdminDeleteCorpusRequest }
            output: AdminDeleteCorpusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'customer-id': number } } & { json: AdminDeleteCorpusRequest }
            output: GooglerpcStatus
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/delete-doc': {
      $post:
        | {
            input: { header: { 'customer-id': number } } & { json: VectaraDeleteDocumentRequest }
            output: VectaraDeleteDocumentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'customer-id': number } } & { json: VectaraDeleteDocumentRequest }
            output: GooglerpcStatus
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/index': {
      $post:
        | {
            input: { header: { 'customer-id': number } } & { json: VectaraIndexDocumentRequest }
            output: VectaraIndexDocumentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'customer-id': number } } & { json: VectaraIndexDocumentRequest }
            output: GooglerpcStatus
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/list-corpora': {
      $post:
        | {
            input: { header: { 'customer-id': number } } & { json: AdminListCorporaRequest }
            output: AdminListCorporaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'customer-id': number } } & { json: AdminListCorporaRequest }
            output: GooglerpcStatus
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/query': {
      $post:
        | {
            input: { header: { 'customer-id': number } } & { json: ServingBatchQueryRequest }
            output: ServingBatchQueryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'customer-id': number } } & { json: ServingBatchQueryRequest }
            output: GooglerpcStatus
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/reset-corpus': {
      $post:
        | {
            input: { header: { 'customer-id': number } } & { json: AdminResetCorpusRequest }
            output: AdminResetCorpusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'customer-id': number } } & { json: AdminResetCorpusRequest }
            output: GooglerpcStatus
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/stream-query': {
      $post:
        | {
            input: { header: { 'customer-id': number } } & { json: ServingBatchQueryRequest }
            output: { error?: GooglerpcStatus | undefined; result?: ServingResponseSet | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'customer-id': number } } & { json: ServingBatchQueryRequest }
            output: GooglerpcStatus
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/upload': {
      $post:
        | {
            input: { query: { c: number; o: number; d?: boolean | undefined } } & {
              form: { doc_metadata?: string | undefined; file?: File | undefined }
            }
            output: {
              response?:
                | {
                    quotaConsumed?:
                      | { numChars?: string | undefined; numMetadataChars?: string | undefined }
                      | undefined
                    status?: { [x: string]: unknown } | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { c: number; o: number; d?: boolean | undefined } } & {
              form: { doc_metadata?: string | undefined; file?: File | undefined }
            }
            output: { httpCode?: number | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { c: number; o: number; d?: boolean | undefined } } & {
              form: { doc_metadata?: string | undefined; file?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { c: number; o: number; d?: boolean | undefined } } & {
              form: { doc_metadata?: string | undefined; file?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { c: number; o: number; d?: boolean | undefined } } & {
              form: { doc_metadata?: string | undefined; file?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { query: { c: number; o: number; d?: boolean | undefined } } & {
              form: { doc_metadata?: string | undefined; file?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 507
          }
    }
  },
  '/'
>
export default routes
