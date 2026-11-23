type Job = {
  createTime?: string | undefined
  expireTime?: string | undefined
  id?: string | undefined
  name?: string | undefined
  reportTypeId?: string | undefined
  systemManaged?: boolean | undefined
}
type ListJobsResponse = { jobs?: Job[] | undefined; nextPageToken?: string | undefined }
type Empty = { [x: string]: unknown }
type Report = {
  createTime?: string | undefined
  downloadUrl?: string | undefined
  endTime?: string | undefined
  id?: string | undefined
  jobExpireTime?: string | undefined
  jobId?: string | undefined
  startTime?: string | undefined
}
type ListReportsResponse = { nextPageToken?: string | undefined; reports?: Report[] | undefined }
type GdataBlobstore2Info = {
  blobGeneration?: string | undefined
  blobId?: string | undefined
  downloadReadHandle?: string | undefined
  readToken?: string | undefined
  uploadMetadataContainer?: string | undefined
}
type GdataObjectId = {
  bucketName?: string | undefined
  generation?: string | undefined
  objectName?: string | undefined
}
type GdataCompositeMedia = {
  blobRef?: string | undefined
  blobstore2Info?: GdataBlobstore2Info | undefined
  cosmoBinaryReference?: string | undefined
  crc32cHash?: number | undefined
  inline?: string | undefined
  length?: string | undefined
  md5Hash?: string | undefined
  objectId?: GdataObjectId | undefined
  path?: string | undefined
  referenceType?:
    | 'PATH'
    | 'BLOB_REF'
    | 'INLINE'
    | 'BIGSTORE_REF'
    | 'COSMO_BINARY_REFERENCE'
    | undefined
  sha1Hash?: string | undefined
}
type GdataContentTypeInfo = {
  bestGuess?: string | undefined
  fromBytes?: string | undefined
  fromFileName?: string | undefined
  fromHeader?: string | undefined
  fromUrlPath?: string | undefined
}
type GdataDiffChecksumsResponse = {
  checksumsLocation?: GdataCompositeMedia | undefined
  chunkSizeBytes?: string | undefined
  objectLocation?: GdataCompositeMedia | undefined
  objectSizeBytes?: string | undefined
  objectVersion?: string | undefined
}
type GdataDiffDownloadResponse = { objectLocation?: GdataCompositeMedia | undefined }
type GdataDiffUploadRequest = {
  checksumsInfo?: GdataCompositeMedia | undefined
  objectInfo?: GdataCompositeMedia | undefined
  objectVersion?: string | undefined
}
type GdataDiffUploadResponse = {
  objectVersion?: string | undefined
  originalObject?: GdataCompositeMedia | undefined
}
type GdataDiffVersionResponse = {
  objectSizeBytes?: string | undefined
  objectVersion?: string | undefined
}
type GdataDownloadParameters = {
  allowGzipCompression?: boolean | undefined
  ignoreRange?: boolean | undefined
}
type GdataMedia = {
  algorithm?: string | undefined
  bigstoreObjectRef?: string | undefined
  blobRef?: string | undefined
  blobstore2Info?: GdataBlobstore2Info | undefined
  compositeMedia?: GdataCompositeMedia[] | undefined
  contentType?: string | undefined
  contentTypeInfo?: GdataContentTypeInfo | undefined
  cosmoBinaryReference?: string | undefined
  crc32cHash?: number | undefined
  diffChecksumsResponse?: GdataDiffChecksumsResponse | undefined
  diffDownloadResponse?: GdataDiffDownloadResponse | undefined
  diffUploadRequest?: GdataDiffUploadRequest | undefined
  diffUploadResponse?: GdataDiffUploadResponse | undefined
  diffVersionResponse?: GdataDiffVersionResponse | undefined
  downloadParameters?: GdataDownloadParameters | undefined
  filename?: string | undefined
  hash?: string | undefined
  hashVerified?: boolean | undefined
  inline?: string | undefined
  isPotentialRetry?: boolean | undefined
  length?: string | undefined
  md5Hash?: string | undefined
  mediaId?: string | undefined
  objectId?: GdataObjectId | undefined
  path?: string | undefined
  referenceType?:
    | 'PATH'
    | 'BLOB_REF'
    | 'INLINE'
    | 'GET_MEDIA'
    | 'COMPOSITE_MEDIA'
    | 'BIGSTORE_REF'
    | 'DIFF_VERSION_RESPONSE'
    | 'DIFF_CHECKSUMS_RESPONSE'
    | 'DIFF_DOWNLOAD_RESPONSE'
    | 'DIFF_UPLOAD_REQUEST'
    | 'DIFF_UPLOAD_RESPONSE'
    | 'COSMO_BINARY_REFERENCE'
    | 'ARBITRARY_BYTES'
    | undefined
  sha1Hash?: string | undefined
  sha256Hash?: string | undefined
  timestamp?: string | undefined
  token?: string | undefined
}
type ReportType = {
  deprecateTime?: string | undefined
  id?: string | undefined
  name?: string | undefined
  systemManaged?: boolean | undefined
}
type ListReportTypesResponse = {
  nextPageToken?: string | undefined
  reportTypes?: ReportType[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/jobs': {
      $get: {
        input: {
          query: {
            includeSystemManaged?: boolean | undefined
            onBehalfOfContentOwner?: string | undefined
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
        output: ListJobsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            onBehalfOfContentOwner?: string | undefined
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
        } & { json: Job }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/jobs/:jobId': {
      $delete: {
        input: { param: { jobId: string } } & {
          query: {
            onBehalfOfContentOwner?: string | undefined
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { jobId: string } } & {
          query: {
            onBehalfOfContentOwner?: string | undefined
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
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/jobs/:jobId/reports': {
      $get: {
        input: { param: { jobId: string } } & {
          query: {
            createdAfter?: string | undefined
            onBehalfOfContentOwner?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            startTimeAtOrAfter?: string | undefined
            startTimeBefore?: string | undefined
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
        output: ListReportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/jobs/:jobId/reports/:reportId': {
      $get: {
        input: { param: { jobId: string; reportId: string } } & {
          query: {
            onBehalfOfContentOwner?: string | undefined
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
        output: Report
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/media/:resourceName': {
      $get: {
        input: { param: { resourceName: string } } & {
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
        output: GdataMedia
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/reportTypes': {
      $get: {
        input: {
          query: {
            includeSystemManaged?: boolean | undefined
            onBehalfOfContentOwner?: string | undefined
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
        output: ListReportTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
