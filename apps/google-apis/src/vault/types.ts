type MatterPermission = {
  accountId?: string | undefined
  role?: 'ROLE_UNSPECIFIED' | 'COLLABORATOR' | 'OWNER' | undefined
}
type Matter = {
  description?: string | undefined
  matterId?: string | undefined
  matterPermissions?: MatterPermission[] | undefined
  name?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'OPEN' | 'CLOSED' | 'DELETED' | undefined
}
type ListMattersResponse = { matters?: Matter[] | undefined; nextPageToken?: string | undefined }
type CloudStorageFile = {
  bucketName?: string | undefined
  md5Hash?: string | undefined
  objectName?: string | undefined
  size?: string | undefined
}
type CloudStorageSink = { files?: CloudStorageFile[] | undefined }
type DriveExportOptions = { includeAccessInfo?: boolean | undefined }
type GroupsExportOptions = {
  exportFormat?: 'EXPORT_FORMAT_UNSPECIFIED' | 'MBOX' | 'PST' | undefined
}
type HangoutsChatExportOptions = {
  exportFormat?: 'EXPORT_FORMAT_UNSPECIFIED' | 'MBOX' | 'PST' | undefined
}
type MailExportOptions = {
  exportFormat?: 'EXPORT_FORMAT_UNSPECIFIED' | 'MBOX' | 'PST' | undefined
  showConfidentialModeContent?: boolean | undefined
  useNewExport?: boolean | undefined
}
type VoiceExportOptions = {
  exportFormat?: 'EXPORT_FORMAT_UNSPECIFIED' | 'MBOX' | 'PST' | undefined
}
type ExportOptions = {
  driveOptions?: DriveExportOptions | undefined
  groupsOptions?: GroupsExportOptions | undefined
  hangoutsChatOptions?: HangoutsChatExportOptions | undefined
  mailOptions?: MailExportOptions | undefined
  region?: 'EXPORT_REGION_UNSPECIFIED' | 'ANY' | 'US' | 'EUROPE' | undefined
  voiceOptions?: VoiceExportOptions | undefined
}
type AccountInfo = { emails?: string[] | undefined }
type DriveOptions = {
  clientSideEncryptedOption?:
    | 'CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED'
    | 'CLIENT_SIDE_ENCRYPTED_OPTION_ANY'
    | 'CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED'
    | 'CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED'
    | undefined
  includeSharedDrives?: boolean | undefined
  includeTeamDrives?: boolean | undefined
  versionDate?: string | undefined
}
type HangoutsChatInfo = { roomId?: string[] | undefined }
type HangoutsChatOptions = { includeRooms?: boolean | undefined }
type MailOptions = {
  clientSideEncryptedOption?:
    | 'CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED'
    | 'CLIENT_SIDE_ENCRYPTED_OPTION_ANY'
    | 'CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED'
    | 'CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED'
    | undefined
  excludeDrafts?: boolean | undefined
}
type OrgUnitInfo = { orgUnitId?: string | undefined }
type SharedDriveInfo = { sharedDriveIds?: string[] | undefined }
type SitesUrlInfo = { urls?: string[] | undefined }
type TeamDriveInfo = { teamDriveIds?: string[] | undefined }
type VoiceOptions = {
  coveredData?:
    | ('COVERED_DATA_UNSPECIFIED' | 'TEXT_MESSAGES' | 'VOICEMAILS' | 'CALL_LOGS')[]
    | undefined
}
type Query = {
  accountInfo?: AccountInfo | undefined
  corpus?:
    | 'CORPUS_TYPE_UNSPECIFIED'
    | 'DRIVE'
    | 'MAIL'
    | 'GROUPS'
    | 'HANGOUTS_CHAT'
    | 'VOICE'
    | undefined
  dataScope?: 'DATA_SCOPE_UNSPECIFIED' | 'ALL_DATA' | 'HELD_DATA' | 'UNPROCESSED_DATA' | undefined
  driveOptions?: DriveOptions | undefined
  endTime?: string | undefined
  hangoutsChatInfo?: HangoutsChatInfo | undefined
  hangoutsChatOptions?: HangoutsChatOptions | undefined
  mailOptions?: MailOptions | undefined
  method?:
    | 'SEARCH_METHOD_UNSPECIFIED'
    | 'ACCOUNT'
    | 'ORG_UNIT'
    | 'TEAM_DRIVE'
    | 'ENTIRE_ORG'
    | 'ROOM'
    | 'SITES_URL'
    | 'SHARED_DRIVE'
    | undefined
  orgUnitInfo?: OrgUnitInfo | undefined
  searchMethod?:
    | 'SEARCH_METHOD_UNSPECIFIED'
    | 'ACCOUNT'
    | 'ORG_UNIT'
    | 'TEAM_DRIVE'
    | 'ENTIRE_ORG'
    | 'ROOM'
    | 'SITES_URL'
    | 'SHARED_DRIVE'
    | undefined
  sharedDriveInfo?: SharedDriveInfo | undefined
  sitesUrlInfo?: SitesUrlInfo | undefined
  startTime?: string | undefined
  teamDriveInfo?: TeamDriveInfo | undefined
  terms?: string | undefined
  timeZone?: string | undefined
  voiceOptions?: VoiceOptions | undefined
}
type UserInfo = { displayName?: string | undefined; email?: string | undefined }
type ExportStats = {
  exportedArtifactCount?: string | undefined
  sizeInBytes?: string | undefined
  totalArtifactCount?: string | undefined
}
type Export = {
  cloudStorageSink?: CloudStorageSink | undefined
  createTime?: string | undefined
  exportOptions?: ExportOptions | undefined
  id?: string | undefined
  matterId?: string | undefined
  name?: string | undefined
  query?: Query | undefined
  requester?: UserInfo | undefined
  stats?: ExportStats | undefined
  status?: 'EXPORT_STATUS_UNSPECIFIED' | 'COMPLETED' | 'FAILED' | 'IN_PROGRESS' | undefined
}
type ListExportsResponse = { exports?: Export[] | undefined; nextPageToken?: string | undefined }
type Empty = { [x: string]: unknown }
type HeldAccount = {
  accountId?: string | undefined
  email?: string | undefined
  firstName?: string | undefined
  holdTime?: string | undefined
  lastName?: string | undefined
}
type HeldOrgUnit = { holdTime?: string | undefined; orgUnitId?: string | undefined }
type HeldDriveQuery = {
  includeSharedDriveFiles?: boolean | undefined
  includeTeamDriveFiles?: boolean | undefined
}
type HeldGroupsQuery = {
  endTime?: string | undefined
  startTime?: string | undefined
  terms?: string | undefined
}
type HeldHangoutsChatQuery = { includeRooms?: boolean | undefined }
type HeldMailQuery = {
  endTime?: string | undefined
  startTime?: string | undefined
  terms?: string | undefined
}
type HeldVoiceQuery = {
  coveredData?:
    | ('COVERED_DATA_UNSPECIFIED' | 'TEXT_MESSAGES' | 'VOICEMAILS' | 'CALL_LOGS')[]
    | undefined
}
type CorpusQuery = {
  driveQuery?: HeldDriveQuery | undefined
  groupsQuery?: HeldGroupsQuery | undefined
  hangoutsChatQuery?: HeldHangoutsChatQuery | undefined
  mailQuery?: HeldMailQuery | undefined
  voiceQuery?: HeldVoiceQuery | undefined
}
type Hold = {
  accounts?: HeldAccount[] | undefined
  corpus?:
    | 'CORPUS_TYPE_UNSPECIFIED'
    | 'DRIVE'
    | 'MAIL'
    | 'GROUPS'
    | 'HANGOUTS_CHAT'
    | 'VOICE'
    | undefined
  holdId?: string | undefined
  name?: string | undefined
  orgUnit?: HeldOrgUnit | undefined
  query?: CorpusQuery | undefined
  updateTime?: string | undefined
}
type ListHoldsResponse = { holds?: Hold[] | undefined; nextPageToken?: string | undefined }
type ListHeldAccountsResponse = { accounts?: HeldAccount[] | undefined }
type AddHeldAccountsRequest = { accountIds?: string[] | undefined; emails?: string[] | undefined }
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type AddHeldAccountResult = { account?: HeldAccount | undefined; status?: Status | undefined }
type AddHeldAccountsResponse = { responses?: AddHeldAccountResult[] | undefined }
type RemoveHeldAccountsRequest = { accountIds?: string[] | undefined }
type RemoveHeldAccountsResponse = { statuses?: Status[] | undefined }
type SavedQuery = {
  createTime?: string | undefined
  displayName?: string | undefined
  matterId?: string | undefined
  query?: Query | undefined
  savedQueryId?: string | undefined
}
type ListSavedQueriesResponse = {
  nextPageToken?: string | undefined
  savedQueries?: SavedQuery[] | undefined
}
type AddMatterPermissionsRequest = {
  ccMe?: boolean | undefined
  matterPermission?: MatterPermission | undefined
  sendEmails?: boolean | undefined
}
type CloseMatterRequest = { [x: string]: unknown }
type CloseMatterResponse = { matter?: Matter | undefined }
type CountArtifactsRequest = {
  query?: Query | undefined
  view?: 'COUNT_RESULT_VIEW_UNSPECIFIED' | 'TOTAL_COUNT' | 'ALL' | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type RemoveMatterPermissionsRequest = { accountId?: string | undefined }
type ReopenMatterRequest = { [x: string]: unknown }
type ReopenMatterResponse = { matter?: Matter | undefined }
type UndeleteMatterRequest = { [x: string]: unknown }
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type CancelOperationRequest = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/matters': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            state?: 'STATE_UNSPECIFIED' | 'OPEN' | 'CLOSED' | 'DELETED' | undefined
            view?: 'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
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
        output: ListMattersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
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
        } & { json: Matter }
        output: Matter
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/matters/:matterId': {
      $delete: {
        input: { param: { matterId: string } } & {
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
        output: Matter
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { matterId: string } } & {
          query: {
            view?: 'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
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
        output: Matter
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { matterId: string } } & {
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
        } & { json: Matter }
        output: Matter
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/matters/:matterId/exports': {
      $get: {
        input: { param: { matterId: string } } & {
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
        output: ListExportsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { matterId: string } } & {
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
        } & { json: Export }
        output: Export
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/matters/:matterId/exports/:exportId': {
      $delete: {
        input: { param: { matterId: string; exportId: string } } & {
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
        input: { param: { matterId: string; exportId: string } } & {
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
        output: Export
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/matters/:matterId/holds': {
      $get: {
        input: { param: { matterId: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?: 'HOLD_VIEW_UNSPECIFIED' | 'BASIC_HOLD' | 'FULL_HOLD' | undefined
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
        output: ListHoldsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { matterId: string } } & {
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
        } & { json: Hold }
        output: Hold
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/matters/:matterId/holds/:holdId': {
      $delete: {
        input: { param: { matterId: string; holdId: string } } & {
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
        input: { param: { matterId: string; holdId: string } } & {
          query: {
            view?: 'HOLD_VIEW_UNSPECIFIED' | 'BASIC_HOLD' | 'FULL_HOLD' | undefined
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
        output: Hold
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { matterId: string; holdId: string } } & {
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
        } & { json: Hold }
        output: Hold
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/matters/:matterId/holds/:holdId/accounts': {
      $get: {
        input: { param: { matterId: string; holdId: string } } & {
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
        output: ListHeldAccountsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { matterId: string; holdId: string } } & {
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
        } & { json: HeldAccount }
        output: HeldAccount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/matters/:matterId/holds/:holdId/accounts/:accountId': {
      $delete: {
        input: { param: { matterId: string; holdId: string; accountId: string } } & {
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
    }
  } & {
    '/v1/matters/:matterId/holds/:holdId:addHeldAccounts': {
      $post: {
        input: { param: { matterId: string; holdId: string } } & {
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
        } & { json: AddHeldAccountsRequest }
        output: AddHeldAccountsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/matters/:matterId/holds/:holdId:removeHeldAccounts': {
      $post: {
        input: { param: { matterId: string; holdId: string } } & {
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
        } & { json: RemoveHeldAccountsRequest }
        output: RemoveHeldAccountsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/matters/:matterId/savedQueries': {
      $get: {
        input: { param: { matterId: string } } & {
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
        output: ListSavedQueriesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { matterId: string } } & {
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
        } & { json: SavedQuery }
        output: SavedQuery
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/matters/:matterId/savedQueries/:savedQueryId': {
      $delete: {
        input: { param: { matterId: string; savedQueryId: string } } & {
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
        input: { param: { matterId: string; savedQueryId: string } } & {
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
        output: SavedQuery
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/matters/:matterId:addPermissions': {
      $post: {
        input: { param: { matterId: string } } & {
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
        } & { json: AddMatterPermissionsRequest }
        output: MatterPermission
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/matters/:matterId:close': {
      $post: {
        input: { param: { matterId: string } } & {
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
        } & { json: CloseMatterRequest }
        output: CloseMatterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/matters/:matterId:count': {
      $post: {
        input: { param: { matterId: string } } & {
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
        } & { json: CountArtifactsRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/matters/:matterId:removePermissions': {
      $post: {
        input: { param: { matterId: string } } & {
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
        } & { json: RemoveMatterPermissionsRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/matters/:matterId:reopen': {
      $post: {
        input: { param: { matterId: string } } & {
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
        } & { json: ReopenMatterRequest }
        output: ReopenMatterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/matters/:matterId:undelete': {
      $post: {
        input: { param: { matterId: string } } & {
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
        } & { json: UndeleteMatterRequest }
        output: Matter
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
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
        output: ListOperationsResponse
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
        } & { json: CancelOperationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
