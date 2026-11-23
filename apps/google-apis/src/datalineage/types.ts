type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleCloudDatacatalogLineageV1EntityReference = { fullyQualifiedName?: string | undefined }
type GoogleCloudDatacatalogLineageV1EventLink = {
  source?: GoogleCloudDatacatalogLineageV1EntityReference | undefined
  target?: GoogleCloudDatacatalogLineageV1EntityReference | undefined
}
type GoogleCloudDatacatalogLineageV1LineageEvent = {
  endTime?: string | undefined
  links?: GoogleCloudDatacatalogLineageV1EventLink[] | undefined
  name?: string | undefined
  startTime?: string | undefined
}
type GoogleCloudDatacatalogLineageV1Run = {
  attributes?: { [x: string]: { [x: string]: unknown } } | undefined
  displayName?: string | undefined
  endTime?: string | undefined
  name?: string | undefined
  startTime?: string | undefined
  state?: 'UNKNOWN' | 'STARTED' | 'COMPLETED' | 'FAILED' | 'ABORTED' | undefined
}
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
type GoogleLongrunningListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: GoogleLongrunningOperation[] | undefined
}
type GoogleLongrunningCancelOperationRequest = { [x: string]: unknown }
type GoogleCloudDatacatalogLineageV1ListLineageEventsResponse = {
  lineageEvents?: GoogleCloudDatacatalogLineageV1LineageEvent[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDatacatalogLineageV1Origin = {
  name?: string | undefined
  sourceType?:
    | 'SOURCE_TYPE_UNSPECIFIED'
    | 'CUSTOM'
    | 'BIGQUERY'
    | 'DATA_FUSION'
    | 'COMPOSER'
    | 'LOOKER_STUDIO'
    | 'DATAPROC'
    | undefined
}
type GoogleCloudDatacatalogLineageV1Process = {
  attributes?: { [x: string]: { [x: string]: unknown } } | undefined
  displayName?: string | undefined
  name?: string | undefined
  origin?: GoogleCloudDatacatalogLineageV1Origin | undefined
}
type GoogleCloudDatacatalogLineageV1ListProcessesResponse = {
  nextPageToken?: string | undefined
  processes?: GoogleCloudDatacatalogLineageV1Process[] | undefined
}
type GoogleCloudDatacatalogLineageV1ListRunsResponse = {
  nextPageToken?: string | undefined
  runs?: GoogleCloudDatacatalogLineageV1Run[] | undefined
}
type GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest = {
  links?: string[] | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
}
type GoogleCloudDatacatalogLineageV1ProcessLinkInfo = {
  endTime?: string | undefined
  link?: string | undefined
  startTime?: string | undefined
}
type GoogleCloudDatacatalogLineageV1ProcessLinks = {
  links?: GoogleCloudDatacatalogLineageV1ProcessLinkInfo[] | undefined
  process?: string | undefined
}
type GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse = {
  nextPageToken?: string | undefined
  processLinks?: GoogleCloudDatacatalogLineageV1ProcessLinks[] | undefined
}
type GoogleCloudDatacatalogLineageV1SearchLinksRequest = {
  pageSize?: number | undefined
  pageToken?: string | undefined
  source?: GoogleCloudDatacatalogLineageV1EntityReference | undefined
  target?: GoogleCloudDatacatalogLineageV1EntityReference | undefined
}
type GoogleCloudDatacatalogLineageV1Link = {
  endTime?: string | undefined
  name?: string | undefined
  source?: GoogleCloudDatacatalogLineageV1EntityReference | undefined
  startTime?: string | undefined
  target?: GoogleCloudDatacatalogLineageV1EntityReference | undefined
}
type GoogleCloudDatacatalogLineageV1SearchLinksResponse = {
  links?: GoogleCloudDatacatalogLineageV1Link[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
      $delete: {
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
        output: GoogleCloudDatacatalogLineageV1LineageEvent
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            allowMissing?: boolean | undefined
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
        } & { json: GoogleCloudDatacatalogLineageV1Run }
        output: GoogleCloudDatacatalogLineageV1Run
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/operations': {
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
    '/v1/:name:cancel': {
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
        } & { json: GoogleLongrunningCancelOperationRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/lineageEvents': {
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
        output: GoogleCloudDatacatalogLineageV1ListLineageEventsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            requestId?: string | undefined
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
        } & { json: GoogleCloudDatacatalogLineageV1LineageEvent }
        output: GoogleCloudDatacatalogLineageV1LineageEvent
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/processes': {
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
        output: GoogleCloudDatacatalogLineageV1ListProcessesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            requestId?: string | undefined
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
        } & { json: GoogleCloudDatacatalogLineageV1Process }
        output: GoogleCloudDatacatalogLineageV1Process
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/runs': {
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
        output: GoogleCloudDatacatalogLineageV1ListRunsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            requestId?: string | undefined
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
        } & { json: GoogleCloudDatacatalogLineageV1Run }
        output: GoogleCloudDatacatalogLineageV1Run
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent:batchSearchLinkProcesses': {
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
        } & { json: GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest }
        output: GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent:searchLinks': {
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
        } & { json: GoogleCloudDatacatalogLineageV1SearchLinksRequest }
        output: GoogleCloudDatacatalogLineageV1SearchLinksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
