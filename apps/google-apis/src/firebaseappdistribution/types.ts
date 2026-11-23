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
type GoogleFirebaseAppdistroV1UploadReleaseRequest = { blob?: GdataMedia | undefined }
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
type GoogleFirebaseAppdistroV1BatchJoinGroupRequest = {
  createMissingTesters?: boolean | undefined
  emails?: string[] | undefined
}
type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleFirebaseAppdistroV1BatchLeaveGroupRequest = { emails?: string[] | undefined }
type GoogleFirebaseAppdistroV1Group = {
  displayName?: string | undefined
  inviteLinkCount?: number | undefined
  name?: string | undefined
  releaseCount?: number | undefined
  testerCount?: number | undefined
}
type GoogleFirebaseAppdistroV1Tester = {
  displayName?: string | undefined
  groups?: string[] | undefined
  lastActivityTime?: string | undefined
  name?: string | undefined
}
type GoogleLongrunningListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: GoogleLongrunningOperation[] | undefined
}
type GoogleLongrunningCancelOperationRequest = { [x: string]: unknown }
type GoogleFirebaseAppdistroV1DistributeReleaseRequest = {
  groupAliases?: string[] | undefined
  testerEmails?: string[] | undefined
}
type GoogleFirebaseAppdistroV1DistributeReleaseResponse = { [x: string]: unknown }
type GoogleLongrunningWaitOperationRequest = { timeout?: string | undefined }
type GoogleFirebaseAppdistroV1FeedbackReport = {
  createTime?: string | undefined
  firebaseConsoleUri?: string | undefined
  name?: string | undefined
  screenshotUri?: string | undefined
  tester?: string | undefined
  text?: string | undefined
}
type GoogleFirebaseAppdistroV1ListFeedbackReportsResponse = {
  feedbackReports?: GoogleFirebaseAppdistroV1FeedbackReport[] | undefined
  nextPageToken?: string | undefined
}
type GoogleFirebaseAppdistroV1ListGroupsResponse = {
  groups?: GoogleFirebaseAppdistroV1Group[] | undefined
  nextPageToken?: string | undefined
}
type GoogleFirebaseAppdistroV1ReleaseNotes = { text?: string | undefined }
type GoogleFirebaseAppdistroV1Release = {
  binaryDownloadUri?: string | undefined
  buildVersion?: string | undefined
  createTime?: string | undefined
  displayVersion?: string | undefined
  firebaseConsoleUri?: string | undefined
  name?: string | undefined
  releaseNotes?: GoogleFirebaseAppdistroV1ReleaseNotes | undefined
  testingUri?: string | undefined
}
type GoogleFirebaseAppdistroV1ListReleasesResponse = {
  nextPageToken?: string | undefined
  releases?: GoogleFirebaseAppdistroV1Release[] | undefined
}
type GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest = { names?: string[] | undefined }
type GoogleFirebaseAppdistroV1ListTestersResponse = {
  nextPageToken?: string | undefined
  testers?: GoogleFirebaseAppdistroV1Tester[] | undefined
}
type GoogleFirebaseAppdistroV1BatchAddTestersRequest = { emails?: string[] | undefined }
type GoogleFirebaseAppdistroV1BatchAddTestersResponse = {
  testers?: GoogleFirebaseAppdistroV1Tester[] | undefined
}
type GoogleFirebaseAppdistroV1BatchRemoveTestersRequest = { emails?: string[] | undefined }
type GoogleFirebaseAppdistroV1BatchRemoveTestersResponse = { emails?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:app/releases:upload': {
      $post: {
        input: { param: { app: string } } & {
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
        } & { json: GoogleFirebaseAppdistroV1UploadReleaseRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:group:batchJoin': {
      $post: {
        input: { param: { group: string } } & {
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
        } & { json: GoogleFirebaseAppdistroV1BatchJoinGroupRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:group:batchLeave': {
      $post: {
        input: { param: { group: string } } & {
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
        } & { json: GoogleFirebaseAppdistroV1BatchLeaveGroupRequest }
        output: GoogleProtobufEmpty
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
        output: GoogleFirebaseAppdistroV1Group
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
        } & { json: GoogleFirebaseAppdistroV1Tester }
        output: GoogleFirebaseAppdistroV1Tester
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
    '/v1/:name:distribute': {
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
        } & { json: GoogleFirebaseAppdistroV1DistributeReleaseRequest }
        output: GoogleFirebaseAppdistroV1DistributeReleaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:wait': {
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
        } & { json: GoogleLongrunningWaitOperationRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/feedbackReports': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: GoogleFirebaseAppdistroV1ListFeedbackReportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/groups': {
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
        output: GoogleFirebaseAppdistroV1ListGroupsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            groupId?: string | undefined
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
        } & { json: GoogleFirebaseAppdistroV1Group }
        output: GoogleFirebaseAppdistroV1Group
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/releases': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: GoogleFirebaseAppdistroV1ListReleasesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/releases:batchDelete': {
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
        } & { json: GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/testers': {
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
        output: GoogleFirebaseAppdistroV1ListTestersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:project/testers:batchAdd': {
      $post: {
        input: { param: { project: string } } & {
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
        } & { json: GoogleFirebaseAppdistroV1BatchAddTestersRequest }
        output: GoogleFirebaseAppdistroV1BatchAddTestersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:project/testers:batchRemove': {
      $post: {
        input: { param: { project: string } } & {
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
        } & { json: GoogleFirebaseAppdistroV1BatchRemoveTestersRequest }
        output: GoogleFirebaseAppdistroV1BatchRemoveTestersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
