type Audience = { id?: string | undefined }
type CreateAudienceGroupRequest = {
  description?: string | undefined
  isIfaAudience?: boolean | undefined
  uploadDescription?: string | undefined
  audiences?: Audience[] | undefined
}
type AudienceGroupType =
  | 'UPLOAD'
  | 'CLICK'
  | 'IMP'
  | 'CHAT_TAG'
  | 'FRIEND_PATH'
  | 'RESERVATION'
  | 'APP_EVENT'
  | 'VIDEO_VIEW'
  | 'WEBTRAFFIC'
  | 'IMAGE_CLICK'
  | 'RICHMENU_IMP'
  | 'RICHMENU_CLICK'
  | 'POP_AD_IMP'
  | 'TRACKINGTAG_WEBTRAFFIC'
type CreateAudienceGroupResponse = {
  audienceGroupId?: bigint | undefined
  createRoute?: 'MESSAGING_API' | undefined
  type?: AudienceGroupType | undefined
  description?: string | undefined
  created?: bigint | undefined
  permission?: 'READ' | 'READ_WRITE' | undefined
  expireTimestamp?: bigint | undefined
  isIfaAudience?: boolean | undefined
}
type AddAudienceToAudienceGroupRequest = {
  audienceGroupId?: bigint | undefined
  uploadDescription?: string | undefined
  audiences?: Audience[] | undefined
}
type CreateClickBasedAudienceGroupRequest = {
  description?: string | undefined
  requestId?: string | undefined
  clickUrl?: string | undefined
}
type CreateClickBasedAudienceGroupResponse = {
  audienceGroupId?: bigint | undefined
  type?: AudienceGroupType | undefined
  description?: string | undefined
  created?: bigint | undefined
  requestId?: string | undefined
  clickUrl?: string | undefined
  createRoute?: 'MESSAGING_API' | undefined
  permission?: 'READ' | 'READ_WRITE' | undefined
  expireTimestamp?: bigint | undefined
  isIfaAudience?: boolean | undefined
}
type CreateImpBasedAudienceGroupRequest = {
  description?: string | undefined
  requestId?: string | undefined
}
type CreateImpBasedAudienceGroupResponse = {
  audienceGroupId?: bigint | undefined
  type?: AudienceGroupType | undefined
  description?: string | undefined
  created?: bigint | undefined
  requestId?: string | undefined
}
type UpdateAudienceGroupDescriptionRequest = { description?: string | undefined }
type AudienceGroupStatus =
  | 'IN_PROGRESS'
  | 'READY'
  | 'FAILED'
  | 'EXPIRED'
  | 'INACTIVE'
  | 'ACTIVATING'
type AudienceGroupFailedType = 'AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT' | 'INTERNAL_ERROR'
type AudienceGroupPermission = 'READ' | 'READ_WRITE'
type AudienceGroupCreateRoute = 'OA_MANAGER' | 'MESSAGING_API' | 'POINT_AD' | 'AD_MANAGER'
type AudienceGroup = {
  audienceGroupId?: bigint | undefined
  type?: AudienceGroupType | undefined
  description?: string | undefined
  status?: AudienceGroupStatus | undefined
  failedType?: AudienceGroupFailedType | undefined
  audienceCount?: bigint | undefined
  created?: bigint | undefined
  requestId?: string | undefined
  clickUrl?: string | undefined
  isIfaAudience?: boolean | undefined
  permission?: AudienceGroupPermission | undefined
  createRoute?: AudienceGroupCreateRoute | undefined
}
type AudienceGroupJobType = 'DIFF_ADD'
type AudienceGroupJobStatus = 'QUEUED' | 'WORKING' | 'FINISHED' | 'FAILED'
type AudienceGroupJobFailedType = 'INTERNAL_ERROR' | 'AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT'
type AudienceGroupJob = {
  audienceGroupJobId?: bigint | undefined
  audienceGroupId?: bigint | undefined
  description?: string | undefined
  type?: AudienceGroupJobType | undefined
  jobStatus?: AudienceGroupJobStatus | undefined
  failedType?: AudienceGroupJobFailedType | undefined
  audienceCount?: bigint | undefined
  created?: bigint | undefined
}
type Adaccount = { name?: string | undefined }
type GetAudienceDataResponse = {
  audienceGroup?: AudienceGroup | undefined
  jobs?: AudienceGroupJob[] | undefined
  adaccount?: Adaccount | undefined
}
type ErrorDetail = { message?: string | undefined; property?: string | undefined }
type ErrorResponse = { message: string; details?: ErrorDetail[] | undefined }
type GetAudienceGroupsResponse = {
  audienceGroups?: AudienceGroup[] | undefined
  hasNextPage?: boolean | undefined
  totalCount?: bigint | undefined
  readWriteAudienceGroupTotalCount?: bigint | undefined
  page?: bigint | undefined
  size?: bigint | undefined
}
type DetailedOwner = {
  serviceType?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type GetSharedAudienceDataResponse = {
  audienceGroup?: AudienceGroup | undefined
  jobs?: AudienceGroupJob[] | undefined
  owner?: DetailedOwner | undefined
}
type GetSharedAudienceGroupsResponse = {
  audienceGroups?: AudienceGroup[] | undefined
  hasNextPage?: boolean | undefined
  totalCount?: bigint | undefined
  readWriteAudienceGroupTotalCount?: bigint | undefined
  page?: bigint | undefined
  size?: bigint | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/bot/audienceGroup/upload': {
      $post: {
        input: { json: CreateAudienceGroupRequest }
        output: CreateAudienceGroupResponse
        outputFormat: 'json'
        status: 202
      }
      $put: {
        input: { json: AddAudienceToAudienceGroupRequest }
        output: {}
        outputFormat: string
        status: 202
      }
    }
  } & {
    '/v2/bot/audienceGroup/upload/byFile': {
      $post: {
        input: {
          form: {
            description?: string | undefined
            isIfaAudience?: boolean | undefined
            uploadDescription?: string | undefined
            file: File
          }
        }
        output: CreateAudienceGroupResponse
        outputFormat: 'json'
        status: 202
      }
      $put: {
        input: {
          form: {
            audienceGroupId?: bigint | undefined
            uploadDescription?: string | undefined
            file: File
          }
        }
        output: {}
        outputFormat: string
        status: 202
      }
    }
  } & {
    '/v2/bot/audienceGroup/click': {
      $post: {
        input: { json: CreateClickBasedAudienceGroupRequest }
        output: CreateClickBasedAudienceGroupResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v2/bot/audienceGroup/imp': {
      $post: {
        input: { json: CreateImpBasedAudienceGroupRequest }
        output: CreateImpBasedAudienceGroupResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v2/bot/audienceGroup/:audienceGroupId/updateDescription': {
      $put: {
        input: { param: { audienceGroupId: bigint } } & {
          json: UpdateAudienceGroupDescriptionRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/bot/audienceGroup/:audienceGroupId': {
      $delete: {
        input: { param: { audienceGroupId: bigint } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get:
        | {
            input: { param: { audienceGroupId: bigint } }
            output: GetAudienceDataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { audienceGroupId: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/bot/audienceGroup/list': {
      $get: {
        input: {
          query: {
            page: bigint
            description?: string | undefined
            status?: AudienceGroupStatus | undefined
            size?: bigint | undefined
            includesExternalPublicGroups?: boolean | undefined
            createRoute?: AudienceGroupCreateRoute | undefined
          }
        }
        output: GetAudienceGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/audienceGroup/shared/:audienceGroupId': {
      $get:
        | {
            input: { param: { audienceGroupId: bigint } }
            output: GetSharedAudienceDataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { audienceGroupId: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/bot/audienceGroup/shared/list': {
      $get: {
        input: {
          query: {
            page: bigint
            description?: string | undefined
            status?: AudienceGroupStatus | undefined
            size?: bigint | undefined
            createRoute?: AudienceGroupCreateRoute | undefined
            includesOwnedAudienceGroups?: boolean | undefined
          }
        }
        output: GetSharedAudienceGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
