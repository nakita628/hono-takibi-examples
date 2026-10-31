import { createRoute, z } from '@hono/zod-openapi'

const DriveExportOptionsSchema = z
  .object({
    includeAccessInfo: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'To include access level information for users with [indirect access](https://support.google.com/vault/answer/6099459#metadata) to files, set to **true**.',
      }),
  })
  .openapi({ description: 'Options for Drive exports.', required: [] })
  .openapi('DriveExportOptions')

const GroupsExportOptionsSchema = z
  .object({
    exportFormat: z
      .enum(['EXPORT_FORMAT_UNSPECIFIED', 'MBOX', 'PST'])
      .exactOptional()
      .openapi({ description: 'The file format for exported messages.' }),
  })
  .openapi({ description: 'Options for Groups exports.', required: [] })
  .openapi('GroupsExportOptions')

const HangoutsChatExportOptionsSchema = z
  .object({
    exportFormat: z
      .enum(['EXPORT_FORMAT_UNSPECIFIED', 'MBOX', 'PST'])
      .exactOptional()
      .openapi({ description: 'The file format for exported messages.' }),
  })
  .openapi({ description: 'Options for Chat exports.', required: [] })
  .openapi('HangoutsChatExportOptions')

const MailExportOptionsSchema = z
  .object({
    exportFormat: z
      .enum(['EXPORT_FORMAT_UNSPECIFIED', 'MBOX', 'PST'])
      .exactOptional()
      .openapi({ description: 'The file format for exported messages.' }),
    showConfidentialModeContent: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'To export confidential mode content, set to **true**.' }),
    useNewExport: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'To use the new export system, set to **true**.' }),
  })
  .openapi({ description: 'Options for Gmail exports.', required: [] })
  .openapi('MailExportOptions')

const VoiceExportOptionsSchema = z
  .object({
    exportFormat: z
      .enum(['EXPORT_FORMAT_UNSPECIFIED', 'MBOX', 'PST'])
      .exactOptional()
      .openapi({ description: 'The file format for exported text messages.' }),
  })
  .openapi({ description: 'The options for Voice exports.', required: [] })
  .openapi('VoiceExportOptions')

type ExportOptionsType = {
  driveOptions?: z.infer<typeof DriveExportOptionsSchema>
  groupsOptions?: z.infer<typeof GroupsExportOptionsSchema>
  hangoutsChatOptions?: z.infer<typeof HangoutsChatExportOptionsSchema>
  mailOptions?: z.infer<typeof MailExportOptionsSchema>
  region?: 'EXPORT_REGION_UNSPECIFIED' | 'ANY' | 'US' | 'EUROPE'
  voiceOptions?: z.infer<typeof VoiceExportOptionsSchema>
}

const UserInfoSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The displayed name of the user.' }),
    email: z.string().exactOptional().openapi({ description: 'The email address of the user.' }),
  })
  .openapi({ description: "User's information.", required: [] })
  .openapi('UserInfo')

const AccountCountSchema = z
  .object({
    account: UserInfoSchema.exactOptional().openapi({ description: 'Account owner.' }),
    count: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number of results (messages or files) found for this account.',
      }),
  })
  .openapi({ description: 'The results count for each account.', required: [] })
  .openapi('AccountCount')

const AccountCountErrorSchema = z
  .object({
    account: UserInfoSchema.exactOptional().openapi({ description: 'Account owner.' }),
    errorType: z
      .enum([
        'ERROR_TYPE_UNSPECIFIED',
        'WILDCARD_TOO_BROAD',
        'TOO_MANY_TERMS',
        'LOCATION_UNAVAILABLE',
        'UNKNOWN',
        'DEADLINE_EXCEEDED',
      ])
      .exactOptional()
      .openapi({ description: 'Account query error.' }),
  })
  .openapi({ description: 'An error that occurred when querying a specific account', required: [] })
  .openapi('AccountCountError')

const AccountInfoSchema = z
  .object({
    emails: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A set of accounts to search.' }),
  })
  .openapi({ description: 'The accounts to search', required: [] })
  .openapi('AccountInfo')

const HeldAccountSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The account ID, as provided by the [Admin SDK](https://developers.google.com/admin-sdk/).',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The primary email address of the account. If used as an input, this takes precedence over **accountId**.',
      }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The first name of the account holder.' }),
    holdTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. When the account was put on hold.' }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The last name of the account holder.' }),
  })
  .openapi({
    description:
      'An account covered by a hold. This structure is immutable. It can be an individual account or a Google Group, depending on the service. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.',
    required: [],
  })
  .openapi('HeldAccount')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const AddHeldAccountResultSchema = z
  .object({
    account: HeldAccountSchema.exactOptional().openapi({
      description: 'Returned when the account was successfully created.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description: 'Reports the request status. If it failed, returns an error message.',
    }),
  })
  .openapi({
    description: 'The status of each account creation, and the **HeldAccount**, if successful.',
    required: [],
  })
  .openapi('AddHeldAccountResult')

const AddHeldAccountsRequestSchema = z
  .object({
    accountIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A comma-separated list of the account IDs of the accounts to add to the hold. Specify either **emails** or **account_ids**, but not both.',
      }),
    emails: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A comma-separated list of the emails of the accounts to add to the hold. Specify either **emails** or **account_ids**, but not both.',
      }),
  })
  .openapi({ description: 'Add a list of accounts to a hold.', required: [] })
  .openapi('AddHeldAccountsRequest')

const AddHeldAccountsResponseSchema = z
  .object({
    responses: z
      .array(AddHeldAccountResultSchema)
      .exactOptional()
      .openapi({ description: 'The list of responses, in the same order as the batch request.' }),
  })
  .openapi({ description: 'Response for batch create held accounts.', required: [] })
  .openapi('AddHeldAccountsResponse')

const MatterPermissionSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The account ID, as provided by the [Admin SDK](https://developers.google.com/admin-sdk/).',
      }),
    role: z
      .enum(['ROLE_UNSPECIFIED', 'COLLABORATOR', 'OWNER'])
      .exactOptional()
      .openapi({ description: "The user's role for the matter." }),
  })
  .openapi({
    description:
      'Users can be matter owners or collaborators. Each matter has only one owner. All others users who can access the matter are collaborators. When an account is purged, its corresponding MatterPermission resources cease to exist.',
    required: [],
  })
  .openapi('MatterPermission')

const AddMatterPermissionsRequestSchema = z
  .object({
    ccMe: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Only relevant if **sendEmails** is **true**. To CC the requestor in the email message, set to **true**. To not CC requestor, set to **false**.',
      }),
    matterPermission: MatterPermissionSchema.exactOptional().openapi({
      description: 'The account and its role to add.',
    }),
    sendEmails: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'To send a notification email to the added account, set to **true**. To not send a notification email, set to **false**.',
      }),
  })
  .openapi({
    description:
      'Add an account with the permission specified. The role cannot be owner. If an account already has a role in the matter, the existing role is overwritten.',
    required: [],
  })
  .openapi('AddMatterPermissionsRequest')

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const CloseMatterRequestSchema = z
  .object({})
  .openapi({ description: 'Close a matter by ID.' })
  .openapi('CloseMatterRequest')

const MatterSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional description for the matter.' }),
    matterId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The matter ID, which is generated by the server. Leave blank when creating a matter.',
      }),
    matterPermissions: z
      .array(MatterPermissionSchema)
      .exactOptional()
      .openapi({
        description:
          'Lists the users and their permission for the matter. Currently there is no programmer defined limit on the number of permissions a matter can have.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the matter.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'OPEN', 'CLOSED', 'DELETED'])
      .exactOptional()
      .openapi({ description: 'The state of the matter.' }),
  })
  .openapi({
    description:
      'Represents a matter. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.',
    required: [],
  })
  .openapi('Matter')

const CloseMatterResponseSchema = z
  .object({
    matter: MatterSchema.exactOptional().openapi({
      description: 'The updated matter, with state **CLOSED**.',
    }),
  })
  .openapi({ description: 'Response to a CloseMatterRequest.', required: [] })
  .openapi('CloseMatterResponse')

const CloudStorageFileSchema = z
  .object({
    bucketName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the Cloud Storage bucket for the export file. You can use this value in the [Cloud Storage JSON or XML APIs](https://cloud.google.com/storage/docs/apis), but not to list the bucket contents. Instead, you can [get individual export files](https://cloud.google.com/storage/docs/json_api/v1/objects/get) by object name.',
      }),
    md5Hash: z.string().exactOptional().openapi({ description: 'The md5 hash of the file.' }),
    objectName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the Cloud Storage object for the export file. You can use this value in the [Cloud Storage JSON or XML APIs](https://cloud.google.com/storage/docs/apis).',
      }),
    size: z.string().exactOptional().openapi({ description: 'The export file size.' }),
  })
  .openapi({ description: 'The export file in Cloud Storage', required: [] })
  .openapi('CloudStorageFile')

const CloudStorageSinkSchema = z
  .object({
    files: z
      .array(CloudStorageFileSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The exported files in Cloud Storage.' }),
  })
  .openapi({ description: 'Export sink for Cloud Storage files.', required: [] })
  .openapi('CloudStorageSink')

const HeldDriveQuerySchema = z
  .object({
    includeSharedDriveFiles: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'To include files in shared drives in the hold, set to **true**.' }),
    includeTeamDriveFiles: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'To include files in Team Drives in the hold, set to **true**.' }),
  })
  .openapi({ description: 'Options for Drive holds.', required: [] })
  .openapi('HeldDriveQuery')

const HeldGroupsQuerySchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The end time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The start time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.',
      }),
    terms: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [search operators](https://support.google.com/vault/answer/2474474) used to refine the messages covered by the hold.',
      }),
  })
  .openapi({ description: 'Query options for group holds.', required: [] })
  .openapi('HeldGroupsQuery')

const HeldHangoutsChatQuerySchema = z
  .object({
    includeRooms: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'To include messages in Chat spaces the user was a member of, set to **true**.',
      }),
  })
  .openapi({ description: 'Options for Chat holds.', required: [] })
  .openapi('HeldHangoutsChatQuery')

const HeldMailQuerySchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The end time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The start time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.',
      }),
    terms: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [search operators](https://support.google.com/vault/answer/2474474) used to refine the messages covered by the hold.',
      }),
  })
  .openapi({ description: 'Query options for Gmail holds.', required: [] })
  .openapi('HeldMailQuery')

const HeldVoiceQuerySchema = z
  .object({
    coveredData: z
      .array(z.enum(['COVERED_DATA_UNSPECIFIED', 'TEXT_MESSAGES', 'VOICEMAILS', 'CALL_LOGS']))
      .exactOptional()
      .openapi({
        description:
          'A list of data types covered by the hold. Should be non-empty. Order does not matter and duplicates are ignored.',
      }),
  })
  .openapi({ description: 'Options for Voice holds.', required: [] })
  .openapi('HeldVoiceQuery')

const CorpusQuerySchema = z
  .object({
    driveQuery: HeldDriveQuerySchema.exactOptional().openapi({
      description:
        'Service-specific options for Drive holds. If set, **CorpusType** must be **DRIVE**.',
    }),
    groupsQuery: HeldGroupsQuerySchema.exactOptional().openapi({
      description:
        'Service-specific options for Groups holds. If set, **CorpusType** must be **GROUPS**.',
    }),
    hangoutsChatQuery: HeldHangoutsChatQuerySchema.exactOptional().openapi({
      description:
        'Service-specific options for Chat holds. If set, **CorpusType** must be **HANGOUTS_CHAT**.',
    }),
    mailQuery: HeldMailQuerySchema.exactOptional().openapi({
      description:
        'Service-specific options for Gmail holds. If set, **CorpusType** must be **MAIL**.',
    }),
    voiceQuery: HeldVoiceQuerySchema.exactOptional().openapi({
      description:
        'Service-specific options for Voice holds. If set, **CorpusType** must be **VOICE**.',
    }),
  })
  .openapi({ description: 'Service-specific options for holds.', required: [] })
  .openapi('CorpusQuery')

const DriveOptionsSchema = z
  .object({
    clientSideEncryptedOption: z
      .enum([
        'CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED',
        'CLIENT_SIDE_ENCRYPTED_OPTION_ANY',
        'CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED',
        'CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Set whether the results include only content encrypted with [Google Workspace Client-side encryption](https://support.google.com/a?p=cse_ov) content, only unencrypted content, or both. Defaults to both. Currently supported for Drive.',
      }),
    includeSharedDrives: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Set to **true** to include shared drives.' }),
    includeTeamDrives: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Set to true to include Team Drive.' }),
    versionDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Search the current version of the Drive file, but export the contents of the last version saved before 12:00 AM UTC on the specified date. Enter the date in UTC.',
      }),
  })
  .openapi({ description: 'Additional options for Drive search', required: [] })
  .openapi('DriveOptions')

const HangoutsChatInfoSchema = z
  .object({
    roomId: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of Chat spaces IDs, as provided by the [Chat API](https://developers.google.com/chat). There is a limit of exporting from 500 Chat spaces per request.',
      }),
  })
  .openapi({ description: 'The Chat spaces to search', required: [] })
  .openapi('HangoutsChatInfo')

const HangoutsChatOptionsSchema = z
  .object({
    includeRooms: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For searches by account or organizational unit, set to **true** to include rooms.',
      }),
  })
  .openapi({ description: 'Additional options for Google Chat search', required: [] })
  .openapi('HangoutsChatOptions')

const MailOptionsSchema = z
  .object({
    clientSideEncryptedOption: z
      .enum([
        'CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED',
        'CLIENT_SIDE_ENCRYPTED_OPTION_ANY',
        'CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED',
        'CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Specifies whether the results should include encrypted content, unencrypted content, or both. Defaults to including both.',
      }),
    excludeDrafts: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Set to **true** to exclude drafts.' }),
  })
  .openapi({ description: 'Additional options for Gmail search', required: [] })
  .openapi('MailOptions')

const OrgUnitInfoSchema = z
  .object({
    orgUnitId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the organizational unit to search, as provided by the [Admin SDK Directory API](https://developers.google.com/admin-sdk/directory/).',
      }),
  })
  .openapi({ description: 'The organizational unit to search', required: [] })
  .openapi('OrgUnitInfo')

const SharedDriveInfoSchema = z
  .object({
    sharedDriveIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of shared drive IDs, as provided by the [Drive API](https://developers.google.com/drive).',
      }),
  })
  .openapi({ description: 'The shared drives to search', required: [] })
  .openapi('SharedDriveInfo')

const SitesUrlInfoSchema = z
  .object({
    urls: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of published site URLs.' }),
  })
  .openapi({ description: 'The published site URLs of new Google Sites to search', required: [] })
  .openapi('SitesUrlInfo')

const TeamDriveInfoSchema = z
  .object({
    teamDriveIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of Team Drive IDs, as provided by the [Drive API](https://developers.google.com/drive).',
      }),
  })
  .openapi({ description: 'Team Drives to search', required: [] })
  .openapi('TeamDriveInfo')

const VoiceOptionsSchema = z
  .object({
    coveredData: z
      .array(z.enum(['COVERED_DATA_UNSPECIFIED', 'TEXT_MESSAGES', 'VOICEMAILS', 'CALL_LOGS']))
      .exactOptional()
      .openapi({ description: 'Datatypes to search' }),
  })
  .openapi({ description: 'Additional options for Voice search', required: [] })
  .openapi('VoiceOptions')

const QuerySchema = z
  .object({
    accountInfo: AccountInfoSchema.exactOptional().openapi({
      description: 'Required when **SearchMethod** is **ACCOUNT**.',
    }),
    corpus: z
      .enum(['CORPUS_TYPE_UNSPECIFIED', 'DRIVE', 'MAIL', 'GROUPS', 'HANGOUTS_CHAT', 'VOICE'])
      .exactOptional()
      .openapi({ description: 'The Google Workspace service to search.' }),
    dataScope: z
      .enum(['DATA_SCOPE_UNSPECIFIED', 'ALL_DATA', 'HELD_DATA', 'UNPROCESSED_DATA'])
      .exactOptional()
      .openapi({ description: 'The data source to search.' }),
    driveOptions: DriveOptionsSchema.exactOptional().openapi({
      description: 'Set Drive search-specific options.',
    }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The end time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date.',
      }),
    hangoutsChatInfo: HangoutsChatInfoSchema.exactOptional().openapi({
      description: 'Required when **SearchMethod** is **ROOM**. (read-only)',
    }),
    hangoutsChatOptions: HangoutsChatOptionsSchema.exactOptional().openapi({
      description: 'Set Chat search-specific options. (read-only)',
    }),
    mailOptions: MailOptionsSchema.exactOptional().openapi({
      description: 'Set Gmail search-specific options.',
    }),
    method: z
      .enum([
        'SEARCH_METHOD_UNSPECIFIED',
        'ACCOUNT',
        'ORG_UNIT',
        'TEAM_DRIVE',
        'ENTIRE_ORG',
        'ROOM',
        'SITES_URL',
        'SHARED_DRIVE',
      ])
      .exactOptional()
      .openapi({
        description:
          'The entity to search. This field replaces **searchMethod** to support shared drives. When **searchMethod** is **TEAM_DRIVE**, the response of this field is **SHARED_DRIVE**.',
      }),
    orgUnitInfo: OrgUnitInfoSchema.exactOptional().openapi({
      description: 'Required when **SearchMethod** is **ORG_UNIT**.',
    }),
    searchMethod: z
      .enum([
        'SEARCH_METHOD_UNSPECIFIED',
        'ACCOUNT',
        'ORG_UNIT',
        'TEAM_DRIVE',
        'ENTIRE_ORG',
        'ROOM',
        'SITES_URL',
        'SHARED_DRIVE',
      ])
      .exactOptional()
      .openapi({ description: 'The search method to use.' }),
    sharedDriveInfo: SharedDriveInfoSchema.exactOptional().openapi({
      description: 'Required when **SearchMethod** is **SHARED_DRIVE**.',
    }),
    sitesUrlInfo: SitesUrlInfoSchema.exactOptional().openapi({
      description: 'Required when **SearchMethod** is **SITES_URL**.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The start time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date.',
      }),
    teamDriveInfo: TeamDriveInfoSchema.exactOptional().openapi({
      description: 'Required when **SearchMethod** is **TEAM_DRIVE**.',
    }),
    terms: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Service-specific [search operators](https://support.google.com/vault/answer/2474474) to filter search results.',
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time zone name. It should be an IANA TZ name, such as "America/Los_Angeles". For a list of time zone names, see [Time Zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For more information about how Vault uses time zones, see [the Vault help center](https://support.google.com/vault/answer/6092995#time).',
      }),
    voiceOptions: VoiceOptionsSchema.exactOptional().openapi({
      description: 'Set Voice search-specific options.',
    }),
  })
  .openapi({ description: 'The query definition used for search and export.', required: [] })
  .openapi('Query')

const CountArtifactsMetadataSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'End time of count operation. Available when operation is done.' }),
    matterId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The matter ID of the associated matter.' }),
    query: QuerySchema.exactOptional().openapi({
      description: 'The search query from the request.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Creation time of count operation.' }),
  })
  .openapi({ description: 'Long running operation metadata for CountArtifacts.', required: [] })
  .openapi('CountArtifactsMetadata')

const CountArtifactsRequestSchema = z
  .object({
    query: QuerySchema.exactOptional().openapi({ description: 'The search query.' }),
    view: z
      .enum(['COUNT_RESULT_VIEW_UNSPECIFIED', 'TOTAL_COUNT', 'ALL'])
      .exactOptional()
      .openapi({ description: 'Sets the granularity of the count results.' }),
  })
  .openapi({ description: 'Count artifacts request.', required: [] })
  .openapi('CountArtifactsRequest')

const GroupsCountResultSchema = z
  .object({
    accountCountErrors: z
      .array(AccountCountErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error occurred when querying these accounts.' }),
    accountCounts: z
      .array(AccountCountSchema)
      .exactOptional()
      .openapi({
        description: 'Subtotal count per matching account that have more than zero messages.',
      }),
    matchingAccountsCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Total number of accounts that can be queried and have more than zero messages.',
      }),
    nonQueryableAccounts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'When **DataScope** is **HELD_DATA**, these accounts in the request are not queried because they are not on hold. For other data scope, this field is not set.',
      }),
    queriedAccountsCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total number of accounts involved in this count operation.' }),
  })
  .openapi({ description: 'Groups specific count metrics.', required: [] })
  .openapi('GroupsCountResult')

const MailCountResultSchema = z
  .object({
    accountCountErrors: z
      .array(AccountCountErrorSchema)
      .exactOptional()
      .openapi({ description: 'Errors occurred when querying these accounts.' }),
    accountCounts: z
      .array(AccountCountSchema)
      .exactOptional()
      .openapi({
        description: 'Subtotal count per matching account that have more than zero messages.',
      }),
    matchingAccountsCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Total number of accounts that can be queried and have more than zero messages.',
      }),
    nonQueryableAccounts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'When **DataScope** is **HELD_DATA** and when account emails are passed in explicitly, the list of accounts in the request that are not queried because they are not on hold in the matter. For other data scopes, this field is not set.',
      }),
    queriedAccountsCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total number of accounts involved in this count operation.' }),
  })
  .openapi({ description: 'Gmail and classic Hangouts-specific count metrics.', required: [] })
  .openapi('MailCountResult')

const CountArtifactsResponseSchema = z
  .object({
    groupsCountResult: GroupsCountResultSchema.exactOptional().openapi({
      description: 'Count metrics for Groups.',
    }),
    mailCountResult: MailCountResultSchema.exactOptional().openapi({
      description: 'Count metrics for Gmail and classic Hangouts.',
    }),
    totalCount: z.string().exactOptional().openapi({ description: 'Total count of messages.' }),
  })
  .openapi({ description: 'Definition of the response for method CountArtifacts.', required: [] })
  .openapi('CountArtifactsResponse')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const ExportOptionsSchema: z.ZodType<ExportOptionsType> = z
  .lazy(() =>
    z
      .object({
        driveOptions: DriveExportOptionsSchema.exactOptional().openapi({
          description: 'Options for Drive exports.',
        }),
        groupsOptions: GroupsExportOptionsSchema.exactOptional().openapi({
          description: 'Options for Groups exports.',
        }),
        hangoutsChatOptions: HangoutsChatExportOptionsSchema.exactOptional().openapi({
          description: 'Options for Chat exports.',
        }),
        mailOptions: MailExportOptionsSchema.exactOptional().openapi({
          description: 'Options for Gmail exports.',
        }),
        region: z
          .enum(['EXPORT_REGION_UNSPECIFIED', 'ANY', 'US', 'EUROPE'])
          .exactOptional()
          .openapi({ description: 'The requested data region for the export.' }),
        voiceOptions: VoiceExportOptionsSchema.exactOptional().openapi({
          description: 'Options for Voice exports.',
        }),
      })
      .openapi({ description: 'Additional options for exports', required: [] }),
  )
  .openapi('ExportOptions')

const ExportStatsSchema = z
  .object({
    exportedArtifactCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of messages or files already processed for export.' }),
    sizeInBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The size of export in bytes.' }),
    totalArtifactCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of messages or files to be exported.' }),
  })
  .openapi({ description: 'Progress information for an export.', required: [] })
  .openapi('ExportStats')

const ExportSchema = z
  .object({
    cloudStorageSink: CloudStorageSinkSchema.exactOptional().openapi({
      description: 'Output only. The sink for export files in Cloud Storage.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the export was created.' }),
    exportOptions: ExportOptionsSchema.exactOptional().openapi({
      description: 'Additional export options.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The generated export ID.' }),
    matterId: z.string().exactOptional().openapi({ description: 'Output only. The matter ID.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The export name. Don't use special characters (~!$'(),;@:/?) in the name, they can prevent you from downloading exports.",
      }),
    query: QuerySchema.exactOptional().openapi({
      description: 'The query parameters used to create the export.',
    }),
    requester: UserInfoSchema.exactOptional().openapi({
      description: 'Output only. The requester of the export.',
    }),
    stats: ExportStatsSchema.exactOptional().openapi({
      description: 'Output only. Details about the export progress and size.',
    }),
    status: z
      .enum(['EXPORT_STATUS_UNSPECIFIED', 'COMPLETED', 'FAILED', 'IN_PROGRESS'])
      .exactOptional()
      .openapi({ description: 'Output only. The status of the export.' }),
  })
  .openapi({
    description:
      'An export. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.',
    required: [],
  })
  .openapi('Export')

const HeldOrgUnitSchema = z
  .object({
    holdTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'When the organizational unit was put on hold. This property is immutable.',
      }),
    orgUnitId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The organizational unit's immutable ID as provided by the [Admin SDK](https://developers.google.com/admin-sdk/).",
      }),
  })
  .openapi({
    description: 'The organizational unit covered by a hold. This structure is immutable.',
    required: [],
  })
  .openapi('HeldOrgUnit')

const HoldSchema = z
  .object({
    accounts: z
      .array(HeldAccountSchema)
      .exactOptional()
      .openapi({
        description:
          'If set, the hold applies to the specified accounts and **orgUnit** must be empty.',
      }),
    corpus: z
      .enum(['CORPUS_TYPE_UNSPECIFIED', 'DRIVE', 'MAIL', 'GROUPS', 'HANGOUTS_CHAT', 'VOICE'])
      .exactOptional()
      .openapi({ description: 'The service to be searched.' }),
    holdId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique immutable ID of the hold. Assigned during creation.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the hold.' }),
    orgUnit: HeldOrgUnitSchema.exactOptional().openapi({
      description:
        'If set, the hold applies to all members of the organizational unit and **accounts** must be empty. This property is mutable. For Groups holds, set **accounts**.',
    }),
    query: CorpusQuerySchema.exactOptional().openapi({
      description: 'Service-specific options. If set, **CorpusQuery** must match **CorpusType**.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last time this hold was modified.' }),
  })
  .openapi({
    description:
      'A hold. A hold prevents the specified Google Workspace service from purging data for specific accounts or all members of an organizational unit. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.',
    required: [],
  })
  .openapi('Hold')

const ListExportsResponseSchema = z
  .object({
    exports: z.array(ExportSchema).exactOptional().openapi({ description: 'The list of exports.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Page token to retrieve the next page of results in the list.' }),
  })
  .openapi({ description: 'The exports for a matter.', required: [] })
  .openapi('ListExportsResponse')

const ListHeldAccountsResponseSchema = z
  .object({
    accounts: z
      .array(HeldAccountSchema)
      .exactOptional()
      .openapi({ description: 'The held accounts on a hold.' }),
  })
  .openapi({ description: 'Returns a list of the accounts covered by a hold.', required: [] })
  .openapi('ListHeldAccountsResponse')

const ListHoldsResponseSchema = z
  .object({
    holds: z.array(HoldSchema).exactOptional().openapi({ description: 'The list of holds.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Page token to retrieve the next page of results in the list. If this is empty, then there are no more holds to list.',
      }),
  })
  .openapi({ description: 'The holds for a matter.', required: [] })
  .openapi('ListHoldsResponse')

const ListMattersResponseSchema = z
  .object({
    matters: z.array(MatterSchema).exactOptional().openapi({ description: 'List of matters.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Page token to retrieve the next page of results in the list.' }),
  })
  .openapi({ description: 'Provides the list of matters.', required: [] })
  .openapi('ListMattersResponse')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const ListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('ListOperationsResponse')

const SavedQuerySchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The server-generated timestamp when the saved query was created.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the saved query.' }),
    matterId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The matter ID of the matter the saved query is saved in. The server does not use this field during create and always uses matter ID in the URL.',
      }),
    query: QuerySchema.exactOptional().openapi({
      description: 'The search parameters of the saved query.',
    }),
    savedQueryId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier for the saved query.' }),
  })
  .openapi({
    description:
      'The definition of a saved query. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.',
    required: [],
  })
  .openapi('SavedQuery')

const ListSavedQueriesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Page token to retrieve the next page of results in the list. If this is empty, then there are no more saved queries to list.',
      }),
    savedQueries: z
      .array(SavedQuerySchema)
      .exactOptional()
      .openapi({ description: 'List of saved queries.' }),
  })
  .openapi({ description: 'Definition of the response for method ListSaveQuery.', required: [] })
  .openapi('ListSavedQueriesResponse')

const RemoveHeldAccountsRequestSchema = z
  .object({
    accountIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The account IDs of the accounts to remove from the hold.' }),
  })
  .openapi({ description: 'Remove a list of accounts from a hold.', required: [] })
  .openapi('RemoveHeldAccountsRequest')

const RemoveHeldAccountsResponseSchema = z
  .object({
    statuses: z
      .array(StatusSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of statuses for the deleted accounts. Results have the same order as the request.',
      }),
  })
  .openapi({ description: 'Response for batch delete held accounts.', required: [] })
  .openapi('RemoveHeldAccountsResponse')

const RemoveMatterPermissionsRequestSchema = z
  .object({ accountId: z.string().exactOptional().openapi({ description: 'The account ID.' }) })
  .openapi({ description: 'Remove an account as a matter collaborator.', required: [] })
  .openapi('RemoveMatterPermissionsRequest')

const ReopenMatterRequestSchema = z
  .object({})
  .openapi({ description: 'Reopen a matter by ID.' })
  .openapi('ReopenMatterRequest')

const ReopenMatterResponseSchema = z
  .object({
    matter: MatterSchema.exactOptional().openapi({
      description: 'The updated matter, with state **OPEN**.',
    }),
  })
  .openapi({ description: 'Response to a ReopenMatterRequest.', required: [] })
  .openapi('ReopenMatterResponse')

const UndeleteMatterRequestSchema = z
  .object({})
  .openapi({ description: 'Undelete a matter by ID.' })
  .openapi('UndeleteMatterRequest')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/ediscovery': 'Manage your eDiscovery data',
        'https://www.googleapis.com/auth/ediscovery.readonly': 'View your eDiscovery data',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/ediscovery': 'Manage your eDiscovery data',
        'https://www.googleapis.com/auth/ediscovery.readonly': 'View your eDiscovery data',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1MattersRoute = createRoute({
  method: 'get',
  path: '/v1/matters',
  tags: ['matters'],
  description: 'Lists matters the requestor has access to.',
  operationId: 'vault.matters.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of matters to return in the response. Default and maximum are 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The pagination token as returned in the response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      state: z
        .enum(['STATE_UNSPECIFIED', 'OPEN', 'CLOSED', 'DELETED'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, lists only matters with the specified state. The default lists matters of all states.',
            in: 'query',
            name: 'state',
            schema: { enum: ['STATE_UNSPECIFIED', 'OPEN', 'CLOSED', 'DELETED'], type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['VIEW_UNSPECIFIED', 'BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies how much information about the matter to return in response.',
            in: 'query',
            name: 'view',
            schema: { enum: ['VIEW_UNSPECIFIED', 'BASIC', 'FULL'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListMattersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery.readonly'],
    },
  ],
})

export const postV1MattersRoute = createRoute({
  method: 'post',
  path: '/v1/matters',
  tags: ['matters'],
  description:
    'Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.',
  operationId: 'vault.matters.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: MatterSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MatterSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const getV1MattersMatterIdRoute = createRoute({
  method: 'get',
  path: '/v1/matters/{matterId}',
  tags: ['matters'],
  description: 'Gets the specified matter.',
  operationId: 'vault.matters.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      view: z
        .enum(['VIEW_UNSPECIFIED', 'BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies how much information about the matter to return in the response.',
            in: 'query',
            name: 'view',
            schema: { enum: ['VIEW_UNSPECIFIED', 'BASIC', 'FULL'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MatterSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery.readonly'],
    },
  ],
})

export const putV1MattersMatterIdRoute = createRoute({
  method: 'put',
  path: '/v1/matters/{matterId}',
  tags: ['matters'],
  description:
    'Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.',
  operationId: 'vault.matters.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MatterSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MatterSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const deleteV1MattersMatterIdRoute = createRoute({
  method: 'delete',
  path: '/v1/matters/{matterId}',
  tags: ['matters'],
  description: 'Deletes the specified matter. Returns the matter with updated state.',
  operationId: 'vault.matters.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MatterSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const getV1MattersMatterIdExportsRoute = createRoute({
  method: 'get',
  path: '/v1/matters/{matterId}/exports',
  tags: ['matters'],
  description: 'Lists details about the exports in the specified matter.',
  operationId: 'vault.matters.exports.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of exports to return in the response.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The pagination token as returned in the response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListExportsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery.readonly'],
    },
  ],
})

export const postV1MattersMatterIdExportsRoute = createRoute({
  method: 'post',
  path: '/v1/matters/{matterId}/exports',
  tags: ['matters'],
  description: 'Creates an export.',
  operationId: 'vault.matters.exports.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ExportSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ExportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const getV1MattersMatterIdExportsExportIdRoute = createRoute({
  method: 'get',
  path: '/v1/matters/{matterId}/exports/{exportId}',
  tags: ['matters'],
  description: 'Gets an export.',
  operationId: 'vault.matters.exports.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      exportId: z
        .string()
        .openapi({
          param: {
            description: 'The export ID.',
            in: 'path',
            name: 'exportId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ExportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery.readonly'],
    },
  ],
})

export const deleteV1MattersMatterIdExportsExportIdRoute = createRoute({
  method: 'delete',
  path: '/v1/matters/{matterId}/exports/{exportId}',
  tags: ['matters'],
  description: 'Deletes an export.',
  operationId: 'vault.matters.exports.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      exportId: z
        .string()
        .openapi({
          param: {
            description: 'The export ID.',
            in: 'path',
            name: 'exportId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const getV1MattersMatterIdHoldsRoute = createRoute({
  method: 'get',
  path: '/v1/matters/{matterId}/holds',
  tags: ['matters'],
  description: 'Lists the holds in a matter.',
  operationId: 'vault.matters.holds.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of holds to return in the response, between 0 and 100 inclusive. Leaving this empty, or as 0, is the same as **page_size** = 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The pagination token as returned in the response. An empty token means start from the beginning.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['HOLD_VIEW_UNSPECIFIED', 'BASIC_HOLD', 'FULL_HOLD'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The amount of detail to return for a hold.',
            in: 'query',
            name: 'view',
            schema: { enum: ['HOLD_VIEW_UNSPECIFIED', 'BASIC_HOLD', 'FULL_HOLD'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListHoldsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery.readonly'],
    },
  ],
})

export const postV1MattersMatterIdHoldsRoute = createRoute({
  method: 'post',
  path: '/v1/matters/{matterId}/holds',
  tags: ['matters'],
  description: 'Creates a hold in the specified matter.',
  operationId: 'vault.matters.holds.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: HoldSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HoldSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const getV1MattersMatterIdHoldsHoldIdRoute = createRoute({
  method: 'get',
  path: '/v1/matters/{matterId}/holds/{holdId}',
  tags: ['matters'],
  description: 'Gets the specified hold.',
  operationId: 'vault.matters.holds.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      view: z
        .enum(['HOLD_VIEW_UNSPECIFIED', 'BASIC_HOLD', 'FULL_HOLD'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The amount of detail to return for a hold.',
            in: 'query',
            name: 'view',
            schema: { enum: ['HOLD_VIEW_UNSPECIFIED', 'BASIC_HOLD', 'FULL_HOLD'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      holdId: z
        .string()
        .openapi({
          param: {
            description: 'The hold ID.',
            in: 'path',
            name: 'holdId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HoldSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery.readonly'],
    },
  ],
})

export const putV1MattersMatterIdHoldsHoldIdRoute = createRoute({
  method: 'put',
  path: '/v1/matters/{matterId}/holds/{holdId}',
  tags: ['matters'],
  description:
    'Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.',
  operationId: 'vault.matters.holds.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      holdId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the hold.',
            in: 'path',
            name: 'holdId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: HoldSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HoldSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const deleteV1MattersMatterIdHoldsHoldIdRoute = createRoute({
  method: 'delete',
  path: '/v1/matters/{matterId}/holds/{holdId}',
  tags: ['matters'],
  description:
    'Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.',
  operationId: 'vault.matters.holds.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      holdId: z
        .string()
        .openapi({
          param: {
            description: 'The hold ID.',
            in: 'path',
            name: 'holdId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const getV1MattersMatterIdHoldsHoldIdAccountsRoute = createRoute({
  method: 'get',
  path: '/v1/matters/{matterId}/holds/{holdId}/accounts',
  tags: ['matters'],
  description:
    'Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.',
  operationId: 'vault.matters.holds.accounts.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      holdId: z
        .string()
        .openapi({
          param: {
            description: 'The hold ID.',
            in: 'path',
            name: 'holdId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListHeldAccountsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery.readonly'],
    },
  ],
})

export const postV1MattersMatterIdHoldsHoldIdAccountsRoute = createRoute({
  method: 'post',
  path: '/v1/matters/{matterId}/holds/{holdId}/accounts',
  tags: ['matters'],
  description:
    'Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.',
  operationId: 'vault.matters.holds.accounts.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      holdId: z
        .string()
        .openapi({
          param: {
            description: 'The hold ID.',
            in: 'path',
            name: 'holdId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: HeldAccountSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HeldAccountSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const deleteV1MattersMatterIdHoldsHoldIdAccountsAccountIdRoute = createRoute({
  method: 'delete',
  path: '/v1/matters/{matterId}/holds/{holdId}/accounts/{accountId}',
  tags: ['matters'],
  description: 'Removes an account from a hold.',
  operationId: 'vault.matters.holds.accounts.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      holdId: z
        .string()
        .openapi({
          param: {
            description: 'The hold ID.',
            in: 'path',
            name: 'holdId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the account to remove from the hold.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const postV1MattersMatterIdHoldsHoldIdAddHeldAccountsRoute = createRoute({
  method: 'post',
  path: '/v1/matters/{matterId}/holds/{holdId}:addHeldAccounts',
  tags: ['matters'],
  description:
    'Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.',
  operationId: 'vault.matters.holds.addHeldAccounts',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      holdId: z
        .string()
        .openapi({
          param: {
            description: 'The hold ID.',
            in: 'path',
            name: 'holdId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddHeldAccountsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AddHeldAccountsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const postV1MattersMatterIdHoldsHoldIdRemoveHeldAccountsRoute = createRoute({
  method: 'post',
  path: '/v1/matters/{matterId}/holds/{holdId}:removeHeldAccounts',
  tags: ['matters'],
  description:
    'Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.',
  operationId: 'vault.matters.holds.removeHeldAccounts',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      holdId: z
        .string()
        .openapi({
          param: {
            description: 'The hold ID.',
            in: 'path',
            name: 'holdId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RemoveHeldAccountsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RemoveHeldAccountsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const getV1MattersMatterIdSavedQueriesRoute = createRoute({
  method: 'get',
  path: '/v1/matters/{matterId}/savedQueries',
  tags: ['matters'],
  description: 'Lists the saved queries in a matter.',
  operationId: 'vault.matters.savedQueries.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of saved queries to return.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The pagination token as returned in the previous response. An empty token means start from the beginning.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the matter to get the saved queries for.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListSavedQueriesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery.readonly'],
    },
  ],
})

export const postV1MattersMatterIdSavedQueriesRoute = createRoute({
  method: 'post',
  path: '/v1/matters/{matterId}/savedQueries',
  tags: ['matters'],
  description: 'Creates a saved query.',
  operationId: 'vault.matters.savedQueries.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the matter to create the saved query in.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SavedQuerySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SavedQuerySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const getV1MattersMatterIdSavedQueriesSavedQueryIdRoute = createRoute({
  method: 'get',
  path: '/v1/matters/{matterId}/savedQueries/{savedQueryId}',
  tags: ['matters'],
  description: 'Retrieves the specified saved query.',
  operationId: 'vault.matters.savedQueries.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the matter to get the saved query from.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      savedQueryId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the saved query to retrieve.',
            in: 'path',
            name: 'savedQueryId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SavedQuerySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery.readonly'],
    },
  ],
})

export const deleteV1MattersMatterIdSavedQueriesSavedQueryIdRoute = createRoute({
  method: 'delete',
  path: '/v1/matters/{matterId}/savedQueries/{savedQueryId}',
  tags: ['matters'],
  description: 'Deletes the specified saved query.',
  operationId: 'vault.matters.savedQueries.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the matter to delete the saved query from.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      savedQueryId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the saved query to delete.',
            in: 'path',
            name: 'savedQueryId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const postV1MattersMatterIdAddPermissionsRoute = createRoute({
  method: 'post',
  path: '/v1/matters/{matterId}:addPermissions',
  tags: ['matters'],
  description: 'Adds an account as a matter collaborator.',
  operationId: 'vault.matters.addPermissions',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddMatterPermissionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MatterPermissionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const postV1MattersMatterIdCloseRoute = createRoute({
  method: 'post',
  path: '/v1/matters/{matterId}:close',
  tags: ['matters'],
  description: 'Closes the specified matter. Returns the matter with updated state.',
  operationId: 'vault.matters.close',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CloseMatterRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CloseMatterResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const postV1MattersMatterIdCountRoute = createRoute({
  method: 'post',
  path: '/v1/matters/{matterId}:count',
  tags: ['matters'],
  description: 'Counts the accounts processed by the specified query.',
  operationId: 'vault.matters.count',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CountArtifactsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const postV1MattersMatterIdRemovePermissionsRoute = createRoute({
  method: 'post',
  path: '/v1/matters/{matterId}:removePermissions',
  tags: ['matters'],
  description: 'Removes an account as a matter collaborator.',
  operationId: 'vault.matters.removePermissions',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RemoveMatterPermissionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const postV1MattersMatterIdReopenRoute = createRoute({
  method: 'post',
  path: '/v1/matters/{matterId}:reopen',
  tags: ['matters'],
  description: 'Reopens the specified matter. Returns the matter with updated state.',
  operationId: 'vault.matters.reopen',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReopenMatterRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReopenMatterResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const postV1MattersMatterIdUndeleteRoute = createRoute({
  method: 'post',
  path: '/v1/matters/{matterId}:undelete',
  tags: ['matters'],
  description: 'Undeletes the specified matter. Returns the matter with updated state.',
  operationId: 'vault.matters.undelete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      matterId: z
        .string()
        .openapi({
          param: {
            description: 'The matter ID.',
            in: 'path',
            name: 'matterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UndeleteMatterRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MatterSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ediscovery'],
      Oauth2c: ['https://www.googleapis.com/auth/ediscovery'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['operations'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'vault.operations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list filter.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "The name of the operation's parent resource.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListOperationsResponseSchema } },
    },
  },
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['operations'],
  description:
    "Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.",
  operationId: 'vault.operations.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource to be deleted.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})

export const postV1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:cancel',
  tags: ['operations'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'vault.operations.cancel',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelOperationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})
