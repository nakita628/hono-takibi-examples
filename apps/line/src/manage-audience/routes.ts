import { createRoute, z } from '@hono/zod-openapi'

const AudienceSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A user ID or IFA. You can specify an empty array.' }),
  })
  .openapi({ description: 'Audience', required: [] })
  .openapi('Audience')

const CreateAudienceGroupRequestSchema = z
  .object({
    description: z
      .string()
      .max(120)
      .exactOptional()
      .openapi({
        description:
          "The audience's name. This is case-insensitive, meaning AUDIENCE and audience are considered identical.\nMax character limit: 120\n",
      }),
    isIfaAudience: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'To specify recipients by IFAs: set true.\nTo specify recipients by user IDs: set false or omit isIfaAudience property.\n',
      }),
    uploadDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description to register for the job (in jobs[].description).\n',
      }),
    audiences: z
      .array(AudienceSchema)
      .max(10000)
      .exactOptional()
      .openapi({ description: 'An array of user IDs or IFAs.\nMax number: 10,000\n' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group',
    },
    description: 'Create audience for uploading user IDs (by JSON)',
    required: [],
  })
  .openapi('CreateAudienceGroupRequest')

const AudienceGroupTypeSchema = z
  .enum([
    'UPLOAD',
    'CLICK',
    'IMP',
    'CHAT_TAG',
    'FRIEND_PATH',
    'RESERVATION',
    'APP_EVENT',
    'VIDEO_VIEW',
    'WEBTRAFFIC',
    'IMAGE_CLICK',
    'RICHMENU_IMP',
    'RICHMENU_CLICK',
    'POP_AD_IMP',
    'TRACKINGTAG_WEBTRAFFIC',
  ])
  .openapi({ description: 'Audience group type' })
  .openapi('AudienceGroupType')

const CreateAudienceGroupResponseSchema = z
  .object({
    audienceGroupId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'The audience ID.' }),
    createRoute: z
      .literal('MESSAGING_API')
      .exactOptional()
      .openapi({
        description:
          'How the audience was created.\n\n`MESSAGING_API`: An audience created with Messaging API.\n',
      }),
    type: AudienceGroupTypeSchema.exactOptional(),
    description: z.string().exactOptional().openapi({ description: "The audience's name." }),
    created: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'When the audience was created (in UNIX time).',
      }),
    permission: z
      .enum(['READ', 'READ_WRITE'])
      .exactOptional()
      .openapi({
        description:
          "Audience's update permission. Audiences linked to the same channel will be READ_WRITE.\n\n`READ`: Can use only.\n`READ_WRITE`: Can use and update.\n",
      }),
    expireTimestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Time of audience expiration. Only returned for specific audiences.\n',
      }),
    isIfaAudience: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The value indicating the type of account to be sent, as specified when creating the audience for uploading user IDs. One of:\n\n`true`: Accounts are specified with IFAs.\n`false` (default): Accounts are specified with user IDs.\n',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group',
    },
    description: 'Create audience for uploading user IDs (by JSON)',
    required: [],
  })
  .openapi('CreateAudienceGroupResponse')

const AddAudienceToAudienceGroupRequestSchema = z
  .object({
    audienceGroupId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'The audience ID.' }),
    uploadDescription: z.string().exactOptional().openapi({ description: "The audience's name." }),
    audiences: z
      .array(AudienceSchema)
      .max(10000)
      .exactOptional()
      .openapi({ description: 'An array of up to 10,000 user IDs or IFAs.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#update-upload-audience-group',
    },
    description:
      'Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by JSON)',
    required: [],
  })
  .openapi('AddAudienceToAudienceGroupRequest')

const CreateClickBasedAudienceGroupRequestSchema = z
  .object({
    description: z
      .string()
      .max(120)
      .exactOptional()
      .openapi({
        description:
          "The audience's name. This is case-insensitive, meaning AUDIENCE and audience are considered identical.\nMax character limit: 120\n",
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The request ID of a broadcast or narrowcast message sent in the past 60 days.\nEach Messaging API request has a request ID.\n',
      }),
    clickUrl: z
      .url()
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'The URL clicked by the user. If empty, users who clicked any URL in the message are added to the list of recipients.\nMax character limit: 2,000\n',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#create-click-audience-group',
    },
    description: 'Create audience for click-based retargeting',
    required: [],
  })
  .openapi('CreateClickBasedAudienceGroupRequest')

const CreateClickBasedAudienceGroupResponseSchema = z
  .object({
    audienceGroupId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'The audience ID.' }),
    type: AudienceGroupTypeSchema.exactOptional(),
    description: z.string().exactOptional().openapi({ description: "The audience's name." }),
    created: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'When the audience was created (in UNIX time).',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The request ID that was specified when the audience was created.' }),
    clickUrl: z
      .url()
      .exactOptional()
      .openapi({ description: 'The URL that was specified when the audience was created.' }),
    createRoute: z
      .literal('MESSAGING_API')
      .exactOptional()
      .openapi({
        description:
          'How the audience was created.\n`MESSAGING_API`: An audience created with Messaging API.\n',
      }),
    permission: z
      .enum(['READ', 'READ_WRITE'])
      .exactOptional()
      .openapi({
        description:
          "Audience's update permission. Audiences linked to the same channel will be READ_WRITE.\n\n- `READ`: Can use only.\n- `READ_WRITE`: Can use and update.\n",
      }),
    expireTimestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Time of audience expiration. Only returned for specific audiences.',
      }),
    isIfaAudience: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'The value indicating the type of account to be sent, as specified when creating the audience for uploading user IDs. One of:\n\ntrue: Accounts are specified with IFAs.\nfalse (default): Accounts are specified with user IDs.\n',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#create-click-audience-group',
    },
    description: 'Create audience for click-based retargeting',
    required: [],
  })
  .openapi('CreateClickBasedAudienceGroupResponse')

const CreateImpBasedAudienceGroupRequestSchema = z
  .object({
    description: z
      .string()
      .min(1)
      .max(120)
      .exactOptional()
      .openapi({
        description:
          "The audience's name.\nThis is case-insensitive, meaning `AUDIENCE` and `audience` are considered identical.\nMax character limit: 120\n",
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The request ID of a broadcast or narrowcast message sent in the past 60 days.\nEach Messaging API request has a request ID.\n',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#create-imp-audience-group',
    },
    description: 'Create audience for impression-based retargeting',
    required: [],
  })
  .openapi('CreateImpBasedAudienceGroupRequest')

const CreateImpBasedAudienceGroupResponseSchema = z
  .object({
    audienceGroupId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'The audience ID.' }),
    type: AudienceGroupTypeSchema.exactOptional(),
    description: z.string().exactOptional().openapi({ description: "The audience's name." }),
    created: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'When the audience was created (in UNIX time).',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The request ID that was specified when the audience was created.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#create-imp-audience-group',
    },
    description: 'Create audience for impression-based retargeting',
    required: [],
  })
  .openapi('CreateImpBasedAudienceGroupResponse')

const UpdateAudienceGroupDescriptionRequestSchema = z
  .object({
    description: z
      .string()
      .min(1)
      .max(120)
      .exactOptional()
      .openapi({
        description:
          "The audience's name. This is case-insensitive, meaning AUDIENCE and audience are considered identical.\nMax character limit: 120\n",
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#set-description-audience-group',
    },
    description: 'Rename an audience',
    required: [],
  })
  .openapi('UpdateAudienceGroupDescriptionRequest')

const AudienceGroupStatusSchema = z
  .enum(['IN_PROGRESS', 'READY', 'FAILED', 'EXPIRED', 'INACTIVE', 'ACTIVATING'])
  .openapi({ description: 'Status' })
  .openapi('AudienceGroupStatus')

const AudienceGroupFailedTypeSchema = z
  .enum(['AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT', 'INTERNAL_ERROR'])
  .nullable()
  .openapi({ description: 'Failed type' })
  .openapi('AudienceGroupFailedType')

const AudienceGroupPermissionSchema = z
  .enum(['READ', 'READ_WRITE'])
  .openapi({ description: 'Permission' })
  .openapi('AudienceGroupPermission')

const AudienceGroupCreateRouteSchema = z
  .enum(['OA_MANAGER', 'MESSAGING_API', 'POINT_AD', 'AD_MANAGER'])
  .openapi({
    description:
      'How the audience was created. One of:\n\n- `OA_MANAGER`: Audience created with [LINE Official Account Manager](https://manager.line.biz/).\n- `MESSAGING_API`: Audience created with Messaging API.\n- `POINT_AD`: Audience created with [LINE Points Ads](https://www.linebiz.com/jp/service/line-point-ad/) (Japanese only).\n- `AD_MANAGER`: Audience created with [LINE Ads](https://admanager.line.biz/).\n',
  })
  .openapi('AudienceGroupCreateRoute')

const AudienceGroupSchema = z
  .object({
    audienceGroupId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'The audience ID.' }),
    type: AudienceGroupTypeSchema.exactOptional(),
    description: z.string().exactOptional().openapi({ description: "The audience's name." }),
    status: AudienceGroupStatusSchema.exactOptional(),
    failedType: AudienceGroupFailedTypeSchema.exactOptional(),
    audienceCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The number of users included in the audience.',
      }),
    created: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'When the audience was created (in UNIX time).',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The request ID that was specified when the audience was created.\nThis is only included when `audienceGroup.type` is CLICK or IMP.\n',
      }),
    clickUrl: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'The URL that was specified when the audience was created.\nThis is only included when `audienceGroup.type` is CLICK and link URL is specified.\n',
      }),
    isIfaAudience: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The value indicating the type of account to be sent, as specified when creating the audience for uploading user IDs.\n',
      }),
    permission: AudienceGroupPermissionSchema.exactOptional(),
    createRoute: AudienceGroupCreateRouteSchema.exactOptional(),
  })
  .openapi({ description: 'Audience group', required: [] })
  .openapi('AudienceGroup')

const AudienceGroupJobTypeSchema = z
  .literal('DIFF_ADD')
  .openapi({ description: 'Job Type' })
  .openapi('AudienceGroupJobType')

const AudienceGroupJobStatusSchema = z
  .enum(['QUEUED', 'WORKING', 'FINISHED', 'FAILED'])
  .openapi({ description: 'Job status' })
  .openapi('AudienceGroupJobStatus')

const AudienceGroupJobFailedTypeSchema = z
  .enum(['INTERNAL_ERROR', 'AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT'])
  .openapi({ description: 'Failed type' })
  .openapi('AudienceGroupJobFailedType')

const AudienceGroupJobSchema = z
  .object({
    audienceGroupJobId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'A job ID.' }),
    audienceGroupId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'An audience ID.' }),
    description: z.string().exactOptional().openapi({ description: "The job's description." }),
    type: AudienceGroupJobTypeSchema.exactOptional(),
    jobStatus: AudienceGroupJobStatusSchema.exactOptional(),
    failedType: AudienceGroupJobFailedTypeSchema.exactOptional(),
    audienceCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The number of accounts (recipients) that were added or removed.',
      }),
    created: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'When the job was created (in UNIX time).',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-audience-group',
    },
    description: 'Audience group job',
    required: [],
  })
  .openapi('AudienceGroupJob')

const AdaccountSchema = z
  .object({ name: z.string().exactOptional().openapi({ description: 'Ad account name.' }) })
  .openapi({ description: 'Adaccount', required: [] })
  .openapi('Adaccount')

const GetAudienceDataResponseSchema = z
  .object({
    audienceGroup: AudienceGroupSchema.exactOptional(),
    jobs: z
      .array(AudienceGroupJobSchema)
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'An array of jobs.\nThis array is used to keep track of each attempt to add new user IDs or IFAs to an audience for uploading user IDs.\nEmpty array is returned for any other type of audience.\nMax: 50\n',
      }),
    adaccount: AdaccountSchema.exactOptional(),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-audience-group',
    },
    description: 'Get audience data',
    required: [],
  })
  .openapi('GetAudienceDataResponse')

const DetailedOwnerSchema = z
  .object({
    serviceType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Service name where the audience group has been created.',
        example: 'lap',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Owner ID in the service.', example: 'A012345678' }),
    name: z.string().exactOptional().openapi({ description: 'Owner account name.' }),
  })
  .openapi({ description: 'Owner of this audience group.', required: [] })
  .openapi('DetailedOwner')

const GetSharedAudienceDataResponseSchema = z
  .object({
    audienceGroup: AudienceGroupSchema.exactOptional(),
    jobs: z
      .array(AudienceGroupJobSchema)
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'An array of jobs.\nThis array is used to keep track of each attempt to add new user IDs or IFAs to an audience for uploading user IDs.\nEmpty array is returned for any other type of audience.\nMax: 50\n',
      }),
    owner: DetailedOwnerSchema.exactOptional(),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-audience-group',
    },
    description: 'Get audience data',
    required: [],
  })
  .openapi('GetSharedAudienceDataResponse')

const GetAudienceGroupsResponseSchema = z
  .object({
    audienceGroups: z
      .array(AudienceGroupSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of audience data. If there are no audiences that match the specified filter, an empty array will be returned.',
      }),
    hasNextPage: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'true when this is not the last page.' }),
    totalCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The total number of audiences that can be returned with the specified filter.',
      }),
    readWriteAudienceGroupTotalCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Of the audiences you can get with the specified filter, the number of audiences with the update permission set to READ_WRITE.',
      }),
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'The current page number.' }),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The maximum number of audiences on the current page.',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-audience-groups',
    },
    description: 'Gets data for more than one audience.',
    required: [],
  })
  .openapi('GetAudienceGroupsResponse')

const GetSharedAudienceGroupsResponseSchema = z
  .object({
    audienceGroups: z
      .array(AudienceGroupSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of audience data. If there are no audiences that match the specified filter, an empty array will be returned.',
      }),
    hasNextPage: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'true when this is not the last page.' }),
    totalCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The total number of audiences that can be returned with the specified filter.',
      }),
    readWriteAudienceGroupTotalCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Of the audiences you can get with the specified filter, the number of audiences with the update permission set to READ_WRITE.',
      }),
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'The current page number.' }),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The maximum number of audiences on the current page.',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-audience-groups',
    },
    description: 'Gets data for more than one audience.',
    required: [],
  })
  .openapi('GetSharedAudienceGroupsResponse')

const ErrorDetailSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Details of the error. Not included in the response under certain situations.',
      }),
    property: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Location of where the error occurred. Returns the JSON field name or query parameter name of the request. Not included in the response under certain situations.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ErrorDetail')

const ErrorResponseSchema = z
  .object({
    message: z.string().openapi({ description: 'Message containing information about the error.' }),
    details: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of error details. If the array is empty, this property will not be included in the response.',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#error-responses',
    },
    required: ['message'],
  })
  .openapi('ErrorResponse')

const BearerSecurityScheme = { type: 'http', scheme: 'bearer', description: 'Channel access token' }

export const putV2BotAudienceGroupUploadRoute = createRoute({
  method: 'put',
  path: '/v2/bot/audienceGroup/upload',
  tags: ['manage-audience'],
  description:
    'Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by JSON)',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#update-upload-audience-group',
  },
  operationId: 'addAudienceToAudienceGroup',
  request: {
    body: {
      content: { 'application/json': { schema: AddAudienceToAudienceGroupRequestSchema } },
      required: true,
    },
  },
  responses: { 202: { description: 'OK' } },
})

export const postV2BotAudienceGroupUploadRoute = createRoute({
  method: 'post',
  path: '/v2/bot/audienceGroup/upload',
  tags: ['manage-audience'],
  description: 'Create audience for uploading user IDs (by JSON)',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group',
  },
  operationId: 'createAudienceGroup',
  request: {
    body: {
      content: { 'application/json': { schema: CreateAudienceGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CreateAudienceGroupResponseSchema,
          example: {
            audienceGroupId: 1234567890123,
            createRoute: 'MESSAGING_API',
            type: 'UPLOAD',
            description: 'audienceGroupName_01',
            created: 1613698278,
            permission: 'READ_WRITE',
            expireTimestamp: 1629250278,
            isIfaAudience: false,
          },
        },
      },
    },
  },
})

export const putV2BotAudienceGroupUploadByFileRoute = createRoute({
  method: 'put',
  path: '/v2/bot/audienceGroup/upload/byFile',
  tags: ['manage-audience-blob'],
  description:
    'Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by file).',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#update-upload-audience-group-by-file',
  },
  operationId: 'addUserIdsToAudience',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              audienceGroupId: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64', description: 'The audience ID.' }),
              uploadDescription: z
                .string()
                .exactOptional()
                .openapi({ description: 'The description to register with the job' }),
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'A text file with one user ID or IFA entered per line. Specify text/plain as Content-Type. Max file number: 1\nMax number: 1,500,000\n',
                }),
            })
            .openapi({ description: 'Request of the addUserIdsToAudience', required: ['file'] }),
          encoding: { file: { contentType: 'text/plain' } },
        },
      },
      required: true,
    },
  },
  responses: { 202: { description: 'OK' } },
  servers: [{ url: 'https://api-data.line.me' }],
})

export const postV2BotAudienceGroupUploadByFileRoute = createRoute({
  method: 'post',
  path: '/v2/bot/audienceGroup/upload/byFile',
  tags: ['manage-audience-blob'],
  description: 'Create audience for uploading user IDs (by file).',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group-by-file',
  },
  operationId: 'createAudienceForUploadingUserIds',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              description: z
                .string()
                .max(120)
                .exactOptional()
                .openapi({
                  description:
                    "The audience's name. This is case-insensitive, meaning AUDIENCE and audience are considered identical.\nMax character limit: 120\n",
                }),
              isIfaAudience: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'To specify recipients by IFAs: set `true`.\nTo specify recipients by user IDs: set `false` or omit isIfaAudience property.\n',
                }),
              uploadDescription: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The description to register for the job (in `jobs[].description`).\n',
                }),
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'A text file with one user ID or IFA entered per line. Specify text/plain as Content-Type. Max file number: 1\nMax number: 1,500,000\n',
                }),
            })
            .openapi({
              description: 'Request for createAudienceForUploadingUserIds',
              required: ['file'],
            }),
          encoding: { file: { contentType: 'text/plain' } },
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CreateAudienceGroupResponseSchema,
          example: {
            audienceGroupId: 1234567890123,
            createRoute: 'MESSAGING_API',
            type: 'UPLOAD',
            description: 'audienceGroupName_01',
            created: 1613700237,
            permission: 'READ_WRITE',
            expireTimestamp: 1629252237,
            isIfaAudience: false,
          },
        },
      },
    },
  },
  servers: [{ url: 'https://api-data.line.me' }],
})

export const postV2BotAudienceGroupClickRoute = createRoute({
  method: 'post',
  path: '/v2/bot/audienceGroup/click',
  tags: ['manage-audience'],
  description: 'Create audience for click-based retargeting',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#create-click-audience-group',
  },
  operationId: 'createClickBasedAudienceGroup',
  request: {
    body: {
      content: { 'application/json': { schema: CreateClickBasedAudienceGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CreateClickBasedAudienceGroupResponseSchema,
          example: {
            audienceGroupId: 1234567890123,
            createRoute: 'MESSAGING_API',
            type: 'CLICK',
            description: 'audienceGroupName_01',
            created: 1613705240,
            permission: 'READ_WRITE',
            expireTimestamp: 1629257239,
            isIfaAudience: false,
            requestId: 'bb9744f9-47fa-4a29-941e-1234567890ab',
            clickUrl: 'https://developers.line.biz/',
          },
        },
      },
    },
  },
})

export const postV2BotAudienceGroupImpRoute = createRoute({
  method: 'post',
  path: '/v2/bot/audienceGroup/imp',
  tags: ['manage-audience'],
  description: 'Create audience for impression-based retargeting',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#create-imp-audience-group',
  },
  operationId: 'createImpBasedAudienceGroup',
  request: {
    body: {
      content: { 'application/json': { schema: CreateImpBasedAudienceGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CreateImpBasedAudienceGroupResponseSchema,
          example: {
            audienceGroupId: 1234567890123,
            createRoute: 'MESSAGING_API',
            type: 'IMP',
            description: 'audienceGroupName_01',
            created: 1613707097,
            permission: 'READ_WRITE',
            expireTimestamp: 1629259095,
            isIfaAudience: false,
            requestId: 'bb9744f9-47fa-4a29-941e-1234567890ab',
          },
        },
      },
    },
  },
})

export const putV2BotAudienceGroupAudienceGroupIdUpdateDescriptionRoute = createRoute({
  method: 'put',
  path: '/v2/bot/audienceGroup/{audienceGroupId}/updateDescription',
  tags: ['manage-audience'],
  description: 'Renames an existing audience.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#set-description-audience-group',
  },
  operationId: 'updateAudienceGroupDescription',
  request: {
    params: z.object({
      audienceGroupId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'audienceGroupId',
            in: 'path',
            required: true,
            description: 'The audience ID.',
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateAudienceGroupDescriptionRequestSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getV2BotAudienceGroupAudienceGroupIdRoute = createRoute({
  method: 'get',
  path: '/v2/bot/audienceGroup/{audienceGroupId}',
  tags: ['manage-audience'],
  description: 'Gets audience data.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-audience-group',
  },
  operationId: 'getAudienceData',
  request: {
    params: z.object({
      audienceGroupId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'audienceGroupId',
            in: 'path',
            required: true,
            description: 'The audience ID.',
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetAudienceDataResponseSchema,
          examples: {
            UPLOADING_USER_IDS: {
              summary: 'Example of an audience used for uploading user IDs',
              value: {
                audienceGroup: {
                  audienceGroupId: 1234567890123,
                  createRoute: 'OA_MANAGER',
                  type: 'UPLOAD',
                  description: 'audienceGroupName_01',
                  status: 'READY',
                  audienceCount: 1887,
                  created: 1608617466,
                  permission: 'READ',
                  isIfaAudience: false,
                  expireTimestamp: 1624342266,
                },
                jobs: [
                  {
                    audienceGroupJobId: 12345678,
                    audienceGroupId: 1234567890123,
                    description: 'audience_list.txt',
                    type: 'DIFF_ADD',
                    status: 'FINISHED',
                    failedType: 'AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT',
                    audienceCount: 0,
                    created: 1608617472,
                    jobStatus: 'FINISHED',
                  },
                ],
              },
            },
            CLICK_BASED: {
              summary: 'Example of an audience used for click-based retargeting',
              value: {
                audienceGroup: {
                  audienceGroupId: 1234567890987,
                  createRoute: 'OA_MANAGER',
                  type: 'CLICK',
                  description: 'audienceGroupName_02',
                  status: 'IN_PROGRESS',
                  audienceCount: 8619,
                  created: 1611114828,
                  permission: 'READ',
                  isIfaAudience: false,
                  expireTimestamp: 1626753228,
                  requestId: 'c10c3d86-f565-...',
                  clickUrl: 'https://example.com/',
                },
                jobs: [],
              },
            },
            APP_EVENTS: {
              summary: 'Example of an audience used for app events',
              value: {
                audienceGroup: {
                  audienceGroupId: 2345678909876,
                  createRoute: 'AD_MANAGER',
                  type: 'APP_EVENT',
                  description: 'audienceGroupName_03',
                  status: 'READY',
                  audienceCount: 8619,
                  created: 1608619802,
                  permission: 'READ',
                  activated: 1610068515,
                  inactiveTimestamp: 1625620516,
                  isIfaAudience: false,
                },
                jobs: [],
                adaccount: { name: 'Ad Account Name' },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: {
            message: 'audience group not found',
            details: [{ message: 'AUDIENCE_GROUP_NOT_FOUND' }],
          },
        },
      },
    },
  },
})

export const deleteV2BotAudienceGroupAudienceGroupIdRoute = createRoute({
  method: 'delete',
  path: '/v2/bot/audienceGroup/{audienceGroupId}',
  tags: ['manage-audience'],
  description: 'Delete audience',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#delete-audience-group',
  },
  operationId: 'deleteAudienceGroup',
  request: {
    params: z.object({
      audienceGroupId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'audienceGroupId',
            in: 'path',
            required: true,
            description: 'The audience ID.',
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getV2BotAudienceGroupListRoute = createRoute({
  method: 'get',
  path: '/v2/bot/audienceGroup/list',
  tags: ['manage-audience'],
  description: 'Gets data for more than one audience.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-audience-groups',
  },
  operationId: 'getAudienceGroups',
  request: {
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 1 },
            description:
              'The page to return when getting (paginated) results. Must be 1 or higher.',
          },
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'description',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description:
              'The name of the audience(s) to return.\nYou can search for partial matches.\nThis is case-insensitive, meaning AUDIENCE and audience are considered identical.\nIf omitted, the name of the audience(s) will not be used as a search criterion.\n',
          },
        }),
      status: AudienceGroupStatusSchema.openapi({
        param: {
          name: 'status',
          in: 'query',
          required: false,
          schema: { $ref: '#/components/schemas/AudienceGroupStatus' },
          description:
            'The status of the audience(s) to return. If omitted, the status of the audience(s) will not be used as a search criterion.\n',
        },
      }).exactOptional(),
      size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().max(40n))
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int64', example: 20, maximum: 40 },
            description: 'The number of audiences per page. Default: 20\nMax: 40\n',
          },
          example: 20,
        }),
      includesExternalPublicGroups: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includesExternalPublicGroups',
            in: 'query',
            required: false,
            schema: { type: 'boolean', example: true },
            description:
              'true (default): Get public audiences created in all channels linked to the same bot.\nfalse: Get audiences created in the same channel.\n',
          },
          example: true,
        }),
      createRoute: AudienceGroupCreateRouteSchema.openapi({
        param: {
          name: 'createRoute',
          in: 'query',
          required: false,
          schema: { $ref: '#/components/schemas/AudienceGroupCreateRoute' },
          description:
            'How the audience was created. If omitted, all audiences are included.\n\n`OA_MANAGER`: Return only audiences created with LINE Official Account Manager (opens new window).\n`MESSAGING_API`: Return only audiences created with Messaging API.\n',
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetAudienceGroupsResponseSchema,
          examples: {
            TWO_AUDIENCES: {
              summary: 'Example of when there are two audiences that match the specified filter',
              value: {
                audienceGroups: [
                  {
                    audienceGroupId: 1234567890123,
                    createRoute: 'OA_MANAGER',
                    type: 'CLICK',
                    description: 'audienceGroupName_01',
                    status: 'IN_PROGRESS',
                    audienceCount: 8619,
                    created: 1611114828,
                    permission: 'READ',
                    isIfaAudience: false,
                    expireTimestamp: 1626753228,
                    requestId: 'c10c3d86-f565-...',
                    clickUrl: 'https://example.com/',
                  },
                  {
                    audienceGroupId: 2345678901234,
                    createRoute: 'AD_MANAGER',
                    type: 'APP_EVENT',
                    description: 'audienceGroupName_02',
                    status: 'READY',
                    audienceCount: 3368,
                    created: 1608619802,
                    permission: 'READ',
                    activated: 1610068515,
                    inactiveTimestamp: 1625620516,
                    isIfaAudience: false,
                  },
                ],
                hasNextPage: false,
                totalCount: 2,
                readWriteAudienceGroupTotalCount: 0,
                size: 40,
                page: 1,
              },
            },
            NO_AUDIENCE: {
              summary: 'Example of when there is no audience that matches the specified filter',
              value: {
                audienceGroups: [],
                hasNextPage: false,
                totalCount: 0,
                readWriteAudienceGroupTotalCount: 0,
                size: 40,
                page: 1,
              },
            },
          },
        },
      },
    },
  },
})

export const getV2BotAudienceGroupSharedAudienceGroupIdRoute = createRoute({
  method: 'get',
  path: '/v2/bot/audienceGroup/shared/{audienceGroupId}',
  tags: ['manage-audience'],
  description: 'Gets audience data.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-shared-audience',
  },
  operationId: 'getSharedAudienceData',
  request: {
    params: z.object({
      audienceGroupId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'audienceGroupId',
            in: 'path',
            required: true,
            description: 'The audience ID.',
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetSharedAudienceDataResponseSchema,
          examples: {
            UPLOADING_USER_IDS: {
              summary: 'Example of an audience used for uploading user IDs',
              value: {
                audienceGroup: {
                  audienceGroupId: 1234567890123,
                  createRoute: 'OA_MANAGER',
                  type: 'UPLOAD',
                  description: 'audienceGroupName_01',
                  status: 'READY',
                  audienceCount: 1887,
                  created: 1608617466,
                  permission: 'READ',
                  isIfaAudience: false,
                  expireTimestamp: 1624342266,
                },
                jobs: [
                  {
                    audienceGroupJobId: 12345678,
                    audienceGroupId: 1234567890123,
                    description: 'audience_list.txt',
                    type: 'DIFF_ADD',
                    status: 'FINISHED',
                    failedType: 'AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT',
                    audienceCount: 0,
                    created: 1608617472,
                    jobStatus: 'FINISHED',
                  },
                ],
              },
            },
            CLICK_BASED: {
              summary: 'Example of an audience used for click-based retargeting',
              value: {
                audienceGroup: {
                  audienceGroupId: 1234567890987,
                  createRoute: 'OA_MANAGER',
                  type: 'CLICK',
                  description: 'audienceGroupName_02',
                  status: 'IN_PROGRESS',
                  audienceCount: 8619,
                  created: 1611114828,
                  permission: 'READ',
                  isIfaAudience: false,
                  expireTimestamp: 1626753228,
                  requestId: 'c10c3d86-f565-...',
                  clickUrl: 'https://example.com/',
                },
                jobs: [],
              },
            },
            APP_EVENTS: {
              summary: 'Example of an audience used for app events',
              value: {
                audienceGroup: {
                  audienceGroupId: 2345678909876,
                  createRoute: 'AD_MANAGER',
                  type: 'APP_EVENT',
                  description: 'audienceGroupName_03',
                  status: 'READY',
                  audienceCount: 8619,
                  created: 1608619802,
                  permission: 'READ',
                  activated: 1610068515,
                  inactiveTimestamp: 1625620516,
                  isIfaAudience: false,
                },
                jobs: [],
                owner: { serviceType: 'lap', id: 'A012345678', name: 'Ad Account Name' },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: {
            message: 'audience group not found',
            details: [{ message: 'AUDIENCE_GROUP_NOT_FOUND' }],
          },
        },
      },
    },
  },
})

export const getV2BotAudienceGroupSharedListRoute = createRoute({
  method: 'get',
  path: '/v2/bot/audienceGroup/shared/list',
  tags: ['manage-audience'],
  description:
    'Gets data for more than one audience, including those shared by the Business Manager.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-shared-audience-list',
  },
  operationId: 'getSharedAudienceGroups',
  request: {
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 1 },
            description:
              'The page to return when getting (paginated) results. Must be 1 or higher.',
          },
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'description',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description:
              'The name of the audience(s) to return.\nYou can search for partial matches.\nThis is case-insensitive, meaning AUDIENCE and audience are considered identical.\nIf omitted, the name of the audience(s) will not be used as a search criterion.\n',
          },
        }),
      status: AudienceGroupStatusSchema.openapi({
        param: {
          name: 'status',
          in: 'query',
          required: false,
          schema: { $ref: '#/components/schemas/AudienceGroupStatus' },
          description:
            'The status of the audience(s) to return. If omitted, the status of the audience(s) will not be used as a search criterion.\n',
        },
      }).exactOptional(),
      size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().max(40n))
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int64', example: 20, maximum: 40 },
            description: 'The number of audiences per page. Default: 20\nMax: 40\n',
          },
          example: 20,
        }),
      createRoute: AudienceGroupCreateRouteSchema.openapi({
        param: {
          name: 'createRoute',
          in: 'query',
          required: false,
          schema: { $ref: '#/components/schemas/AudienceGroupCreateRoute' },
          description:
            'How the audience was created. If omitted, all audiences are included.\n\n`OA_MANAGER`: Return only audiences created with LINE Official Account Manager (opens new window).\n`MESSAGING_API`: Return only audiences created with Messaging API.\n',
        },
      }).exactOptional(),
      includesOwnedAudienceGroups: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includesOwnedAudienceGroups',
            in: 'query',
            required: false,
            schema: { type: 'boolean', default: false },
            description:
              'true: Include audienceGroups owned by LINE Official Account Manager\nfalse: Respond only audienceGroups shared by Business Manager\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetSharedAudienceGroupsResponseSchema,
          examples: {
            TWO_AUDIENCES: {
              summary: 'Example of when there are two audiences that match the specified filter',
              value: {
                audienceGroups: [
                  {
                    audienceGroupId: 1234567890123,
                    createRoute: 'OA_MANAGER',
                    type: 'CLICK',
                    description: 'audienceGroupName_01',
                    status: 'IN_PROGRESS',
                    audienceCount: 8619,
                    created: 1611114828,
                    permission: 'READ',
                    isIfaAudience: false,
                    expireTimestamp: 1626753228,
                    requestId: 'c10c3d86-f565-...',
                    clickUrl: 'https://example.com/',
                  },
                  {
                    audienceGroupId: 2345678901234,
                    createRoute: 'AD_MANAGER',
                    type: 'APP_EVENT',
                    description: 'audienceGroupName_02',
                    status: 'READY',
                    audienceCount: 3368,
                    created: 1608619802,
                    permission: 'READ',
                    activated: 1610068515,
                    inactiveTimestamp: 1625620516,
                    isIfaAudience: false,
                  },
                ],
                hasNextPage: false,
                totalCount: 2,
                readWriteAudienceGroupTotalCount: 0,
                size: 40,
                page: 1,
              },
            },
            NO_AUDIENCE: {
              summary: 'Example of when there is no audience that matches the specified filter',
              value: {
                audienceGroups: [],
                hasNextPage: false,
                totalCount: 0,
                readWriteAudienceGroupTotalCount: 0,
                size: 40,
                page: 1,
              },
            },
          },
        },
      },
    },
  },
})
