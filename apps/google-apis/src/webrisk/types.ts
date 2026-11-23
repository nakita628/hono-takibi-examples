type GoogleCloudWebriskV1SearchHashesResponseThreatHash = {
  expireTime?: string | undefined
  hash?: string | undefined
  threatTypes?:
    | (
        | 'THREAT_TYPE_UNSPECIFIED'
        | 'MALWARE'
        | 'SOCIAL_ENGINEERING'
        | 'UNWANTED_SOFTWARE'
        | 'SOCIAL_ENGINEERING_EXTENDED_COVERAGE'
      )[]
    | undefined
}
type GoogleCloudWebriskV1SearchHashesResponse = {
  negativeExpireTime?: string | undefined
  threats?: GoogleCloudWebriskV1SearchHashesResponseThreatHash[] | undefined
}
type GoogleCloudWebriskV1RawHashes = {
  prefixSize?: number | undefined
  rawHashes?: string | undefined
}
type GoogleCloudWebriskV1RiceDeltaEncoding = {
  encodedData?: string | undefined
  entryCount?: number | undefined
  firstValue?: string | undefined
  riceParameter?: number | undefined
}
type GoogleCloudWebriskV1ThreatEntryAdditions = {
  rawHashes?: GoogleCloudWebriskV1RawHashes[] | undefined
  riceHashes?: GoogleCloudWebriskV1RiceDeltaEncoding | undefined
}
type GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum = { sha256?: string | undefined }
type GoogleCloudWebriskV1RawIndices = { indices?: number[] | undefined }
type GoogleCloudWebriskV1ThreatEntryRemovals = {
  rawIndices?: GoogleCloudWebriskV1RawIndices | undefined
  riceIndices?: GoogleCloudWebriskV1RiceDeltaEncoding | undefined
}
type GoogleCloudWebriskV1ComputeThreatListDiffResponse = {
  additions?: GoogleCloudWebriskV1ThreatEntryAdditions | undefined
  checksum?: GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum | undefined
  newVersionToken?: string | undefined
  recommendedNextDiff?: string | undefined
  removals?: GoogleCloudWebriskV1ThreatEntryRemovals | undefined
  responseType?: 'RESPONSE_TYPE_UNSPECIFIED' | 'DIFF' | 'RESET' | undefined
}
type GoogleCloudWebriskV1SearchUrisResponseThreatUri = {
  expireTime?: string | undefined
  threatTypes?:
    | (
        | 'THREAT_TYPE_UNSPECIFIED'
        | 'MALWARE'
        | 'SOCIAL_ENGINEERING'
        | 'UNWANTED_SOFTWARE'
        | 'SOCIAL_ENGINEERING_EXTENDED_COVERAGE'
      )[]
    | undefined
}
type GoogleCloudWebriskV1SearchUrisResponse = {
  threat?: GoogleCloudWebriskV1SearchUrisResponseThreatUri | undefined
}
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
type GoogleLongrunningListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: GoogleLongrunningOperation[] | undefined
}
type GoogleLongrunningCancelOperationRequest = { [x: string]: unknown }
type GoogleCloudWebriskV1Submission = { uri?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/hashes:search': {
      $get: {
        input: {
          query: {
            hashPrefix?: string | undefined
            threatTypes?:
              | (
                  | 'THREAT_TYPE_UNSPECIFIED'
                  | 'MALWARE'
                  | 'SOCIAL_ENGINEERING'
                  | 'UNWANTED_SOFTWARE'
                  | 'SOCIAL_ENGINEERING_EXTENDED_COVERAGE'
                )[]
              | undefined
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
        output: GoogleCloudWebriskV1SearchHashesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/threatLists:computeDiff': {
      $get: {
        input: {
          query: {
            'constraints.maxDatabaseEntries'?: number | undefined
            'constraints.maxDiffEntries'?: number | undefined
            'constraints.supportedCompressions'?:
              | ('COMPRESSION_TYPE_UNSPECIFIED' | 'RAW' | 'RICE')[]
              | undefined
            threatType?:
              | 'THREAT_TYPE_UNSPECIFIED'
              | 'MALWARE'
              | 'SOCIAL_ENGINEERING'
              | 'UNWANTED_SOFTWARE'
              | 'SOCIAL_ENGINEERING_EXTENDED_COVERAGE'
              | undefined
            versionToken?: string | undefined
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
        output: GoogleCloudWebriskV1ComputeThreatListDiffResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/uris:search': {
      $get: {
        input: {
          query: {
            threatTypes?:
              | (
                  | 'THREAT_TYPE_UNSPECIFIED'
                  | 'MALWARE'
                  | 'SOCIAL_ENGINEERING'
                  | 'UNWANTED_SOFTWARE'
                  | 'SOCIAL_ENGINEERING_EXTENDED_COVERAGE'
                )[]
              | undefined
            uri?: string | undefined
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
        output: GoogleCloudWebriskV1SearchUrisResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
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
    '/v1/:parent/submissions': {
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
        } & { json: GoogleCloudWebriskV1Submission }
        output: GoogleCloudWebriskV1Submission
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
