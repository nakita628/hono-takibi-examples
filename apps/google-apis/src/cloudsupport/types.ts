type CaseClassification = { displayName?: string | undefined; id?: string | undefined }
type SearchCaseClassificationsResponse = {
  caseClassifications?: CaseClassification[] | undefined
  nextPageToken?: string | undefined
}
type Actor = {
  displayName?: string | undefined
  email?: string | undefined
  googleSupport?: boolean | undefined
}
type Case = {
  classification?: CaseClassification | undefined
  contactEmail?: string | undefined
  createTime?: string | undefined
  creator?: Actor | undefined
  description?: string | undefined
  displayName?: string | undefined
  escalated?: boolean | undefined
  languageCode?: string | undefined
  name?: string | undefined
  priority?: 'PRIORITY_UNSPECIFIED' | 'P0' | 'P1' | 'P2' | 'P3' | 'P4' | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'S0' | 'S1' | 'S2' | 'S3' | 'S4' | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'NEW'
    | 'IN_PROGRESS_GOOGLE_SUPPORT'
    | 'ACTION_REQUIRED'
    | 'SOLUTION_PROVIDED'
    | 'CLOSED'
    | undefined
  subscriberEmailAddresses?: string[] | undefined
  testCase?: boolean | undefined
  timeZone?: string | undefined
  updateTime?: string | undefined
}
type SearchCasesResponse = { cases?: Case[] | undefined; nextPageToken?: string | undefined }
type CloseCaseRequest = { [x: string]: unknown }
type Blobstore2Info = {
  blobGeneration?: string | undefined
  blobId?: string | undefined
  downloadReadHandle?: string | undefined
  readToken?: string | undefined
  uploadMetadataContainer?: string | undefined
}
type ObjectId = {
  bucketName?: string | undefined
  generation?: string | undefined
  objectName?: string | undefined
}
type CompositeMedia = {
  blobRef?: string | undefined
  blobstore2Info?: Blobstore2Info | undefined
  cosmoBinaryReference?: string | undefined
  crc32cHash?: number | undefined
  inline?: string | undefined
  length?: string | undefined
  md5Hash?: string | undefined
  objectId?: ObjectId | undefined
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
type ContentTypeInfo = {
  bestGuess?: string | undefined
  fromBytes?: string | undefined
  fromFileName?: string | undefined
  fromHeader?: string | undefined
  fromUrlPath?: string | undefined
}
type DiffChecksumsResponse = {
  checksumsLocation?: CompositeMedia | undefined
  chunkSizeBytes?: string | undefined
  objectLocation?: CompositeMedia | undefined
  objectSizeBytes?: string | undefined
  objectVersion?: string | undefined
}
type DiffDownloadResponse = { objectLocation?: CompositeMedia | undefined }
type DiffUploadRequest = {
  checksumsInfo?: CompositeMedia | undefined
  objectInfo?: CompositeMedia | undefined
  objectVersion?: string | undefined
}
type DiffUploadResponse = {
  objectVersion?: string | undefined
  originalObject?: CompositeMedia | undefined
}
type DiffVersionResponse = {
  objectSizeBytes?: string | undefined
  objectVersion?: string | undefined
}
type DownloadParameters = {
  allowGzipCompression?: boolean | undefined
  ignoreRange?: boolean | undefined
}
type Media = {
  algorithm?: string | undefined
  bigstoreObjectRef?: string | undefined
  blobRef?: string | undefined
  blobstore2Info?: Blobstore2Info | undefined
  compositeMedia?: CompositeMedia[] | undefined
  contentType?: string | undefined
  contentTypeInfo?: ContentTypeInfo | undefined
  cosmoBinaryReference?: string | undefined
  crc32cHash?: number | undefined
  diffChecksumsResponse?: DiffChecksumsResponse | undefined
  diffDownloadResponse?: DiffDownloadResponse | undefined
  diffUploadRequest?: DiffUploadRequest | undefined
  diffUploadResponse?: DiffUploadResponse | undefined
  diffVersionResponse?: DiffVersionResponse | undefined
  downloadParameters?: DownloadParameters | undefined
  filename?: string | undefined
  hash?: string | undefined
  hashVerified?: boolean | undefined
  inline?: string | undefined
  isPotentialRetry?: boolean | undefined
  length?: string | undefined
  md5Hash?: string | undefined
  mediaId?: string | undefined
  objectId?: ObjectId | undefined
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
type Escalation = {
  justification?: string | undefined
  reason?:
    | 'REASON_UNSPECIFIED'
    | 'RESOLUTION_TIME'
    | 'TECHNICAL_EXPERTISE'
    | 'BUSINESS_IMPACT'
    | undefined
}
type EscalateCaseRequest = { escalation?: Escalation | undefined }
type Attachment = {
  createTime?: string | undefined
  creator?: Actor | undefined
  filename?: string | undefined
  mimeType?: string | undefined
  name?: string | undefined
  sizeBytes?: string | undefined
}
type ListAttachmentsResponse = {
  attachments?: Attachment[] | undefined
  nextPageToken?: string | undefined
}
type CreateAttachmentRequest = { attachment?: Attachment | undefined }
type ListCasesResponse = { cases?: Case[] | undefined; nextPageToken?: string | undefined }
type Comment = {
  body?: string | undefined
  createTime?: string | undefined
  creator?: Actor | undefined
  name?: string | undefined
  plainTextBody?: string | undefined
}
type ListCommentsResponse = { comments?: Comment[] | undefined; nextPageToken?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2beta/caseClassifications:search': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            query?: string | undefined
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
        output: SearchCaseClassificationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta/cases:search': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            query?: string | undefined
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
        output: SearchCasesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta/:name': {
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
        output: Case
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
        } & { json: Case }
        output: Case
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta/:name:close': {
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
        } & { json: CloseCaseRequest }
        output: Case
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta/:name:download': {
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
        output: Media
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta/:name:escalate': {
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
        } & { json: EscalateCaseRequest }
        output: Case
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta/:parent/attachments': {
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
        output: ListAttachmentsResponse
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
        } & { json: CreateAttachmentRequest }
        output: Attachment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta/:parent/cases': {
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
        output: ListCasesResponse
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
        } & { json: Case }
        output: Case
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta/:parent/comments': {
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
        output: ListCommentsResponse
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
        } & { json: Comment }
        output: Comment
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
