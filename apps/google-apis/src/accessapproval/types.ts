type Empty = { [x: string]: unknown }
type SignatureInfo = {
  customerKmsKeyVersion?: string | undefined
  googlePublicKeyPem?: string | undefined
  signature?: string | undefined
}
type ApproveDecision = {
  approveTime?: string | undefined
  autoApproved?: boolean | undefined
  expireTime?: string | undefined
  invalidateTime?: string | undefined
  signatureInfo?: SignatureInfo | undefined
}
type DismissDecision = { dismissTime?: string | undefined; implicit?: boolean | undefined }
type AccessLocations = {
  principalOfficeCountry?: string | undefined
  principalPhysicalLocationCountry?: string | undefined
}
type AccessReason = {
  detail?: string | undefined
  type?:
    | 'TYPE_UNSPECIFIED'
    | 'CUSTOMER_INITIATED_SUPPORT'
    | 'GOOGLE_INITIATED_SERVICE'
    | 'GOOGLE_INITIATED_REVIEW'
    | 'THIRD_PARTY_DATA_REQUEST'
    | 'GOOGLE_RESPONSE_TO_PRODUCTION_ALERT'
    | undefined
}
type ResourceProperties = { excludesDescendants?: boolean | undefined }
type ApprovalRequest = {
  approve?: ApproveDecision | undefined
  dismiss?: DismissDecision | undefined
  name?: string | undefined
  requestTime?: string | undefined
  requestedExpiration?: string | undefined
  requestedLocations?: AccessLocations | undefined
  requestedReason?: AccessReason | undefined
  requestedResourceName?: string | undefined
  requestedResourceProperties?: ResourceProperties | undefined
}
type EnrolledService = {
  cloudProduct?: string | undefined
  enrollmentLevel?: 'ENROLLMENT_LEVEL_UNSPECIFIED' | 'BLOCK_ALL' | undefined
}
type AccessApprovalSettings = {
  activeKeyVersion?: string | undefined
  ancestorHasActiveKeyVersion?: boolean | undefined
  enrolledAncestor?: boolean | undefined
  enrolledServices?: EnrolledService[] | undefined
  invalidKeyVersion?: boolean | undefined
  name?: string | undefined
  notificationEmails?: string[] | undefined
}
type ApproveApprovalRequestMessage = { expireTime?: string | undefined }
type DismissApprovalRequestMessage = { [x: string]: unknown }
type InvalidateApprovalRequestMessage = { [x: string]: unknown }
type ListApprovalRequestsResponse = {
  approvalRequests?: ApprovalRequest[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
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
        output: Empty
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
        output: ApprovalRequest
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
        } & { json: AccessApprovalSettings }
        output: AccessApprovalSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:approve': {
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
        } & { json: ApproveApprovalRequestMessage }
        output: ApprovalRequest
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:dismiss': {
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
        } & { json: DismissApprovalRequestMessage }
        output: ApprovalRequest
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:invalidate': {
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
        } & { json: InvalidateApprovalRequestMessage }
        output: ApprovalRequest
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/approvalRequests': {
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
        output: ListApprovalRequestsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
