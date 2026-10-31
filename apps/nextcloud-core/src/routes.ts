import { createRoute, z } from '@hono/zod-openapi'

const AutocompleteResultSchema = z
  .object({
    id: z.string(),
    label: z.string(),
    icon: z.string(),
    source: z.string(),
    status: z.xor([
      z
        .object({
          status: z.string(),
          message: z.string().nullable(),
          icon: z.string().nullable(),
          clearAt: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .nullable()
            .openapi({ type: ['integer', 'null'], format: 'int64' }),
        })
        .openapi({ required: ['status', 'message', 'icon', 'clearAt'] }),
      z.string(),
    ]),
    subline: z.string(),
    shareWithDisplayNameUnique: z.string(),
  })
  .openapi({
    required: ['id', 'label', 'icon', 'source', 'status', 'subline', 'shareWithDisplayNameUnique'],
  })
  .openapi('AutocompleteResult')

const CapabilitiesSchema = z
  .object({
    core: z
      .object({
        pollinterval: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        'webdav-root': z.string(),
        'reference-api': z.boolean(),
        'reference-regex': z.string(),
        'mod-rewrite-working': z.boolean(),
        previews: z
          .object({
            enabled_providers: z.array(z.string()),
            max_width: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
            max_height: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          })
          .openapi({ required: ['enabled_providers', 'max_width', 'max_height'] }),
        user: z
          .object({ language: z.string(), locale: z.string(), timezone: z.string() })
          .exactOptional()
          .openapi({ required: ['language', 'locale', 'timezone'] }),
        'can-create-app-token': z.boolean().exactOptional(),
      })
      .openapi({
        required: [
          'pollinterval',
          'webdav-root',
          'reference-api',
          'reference-regex',
          'mod-rewrite-working',
          'previews',
        ],
      }),
  })
  .openapi({ required: ['core'] })
  .openapi('Capabilities')

const OpenGraphObjectSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    thumb: z.string().nullable(),
    link: z.string(),
  })
  .openapi({ required: ['id', 'name', 'description', 'thumb', 'link'] })
  .openapi('OpenGraphObject')

const ResourceSchema = z
  .object({
    richObjectType: z.string(),
    richObject: z.record(z.string(), z.object({}).nullable()),
    openGraphObject: OpenGraphObjectSchema,
    accessible: z.boolean(),
  })
  .openapi({ required: ['richObjectType', 'richObject', 'openGraphObject', 'accessible'] })
  .openapi('Resource')

const CollectionSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string(),
    resources: z.array(ResourceSchema),
  })
  .openapi({ required: ['id', 'name', 'resources'] })
  .openapi('Collection')

const ContactsActionSchema = z
  .object({ title: z.string(), icon: z.string(), hyperlink: z.string(), appId: z.string() })
  .openapi({ required: ['title', 'icon', 'hyperlink', 'appId'] })
  .openapi('ContactsAction')

const LoginFlowV2Schema = z
  .object({
    poll: z
      .object({ token: z.string(), endpoint: z.string() })
      .openapi({ required: ['token', 'endpoint'] }),
    login: z.string(),
  })
  .openapi({ required: ['poll', 'login'] })
  .openapi('LoginFlowV2')

const LoginFlowV2CredentialsSchema = z
  .object({ server: z.string(), loginName: z.string(), appPassword: z.string() })
  .openapi({ required: ['server', 'loginName', 'appPassword'] })
  .openapi('LoginFlowV2Credentials')

const NavigationEntrySchema = z
  .object({
    id: z.string(),
    order: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    href: z.string(),
    icon: z.string(),
    type: z.literal('link'),
    name: z.string(),
    app: z.string().exactOptional(),
    default: z.boolean().exactOptional(),
    active: z.boolean(),
    classes: z.string(),
    unread: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['id', 'href', 'icon', 'type', 'name', 'active', 'classes', 'unread'] })
  .openapi('NavigationEntry')

const NavigationSettingsEntrySchema = z
  .object({
    id: z.string(),
    order: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    href: z.string(),
    icon: z.string(),
    type: z.literal('settings'),
    name: z.string(),
    app: z.string().exactOptional(),
    default: z.boolean().exactOptional(),
    active: z.boolean(),
    classes: z.string(),
    unread: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['id', 'href', 'icon', 'type', 'name', 'active', 'classes', 'unread'] })
  .openapi('NavigationSettingsEntry')

const OCSMetaSchema = z
  .object({
    status: z.string(),
    statuscode: z.int(),
    message: z.string().exactOptional(),
    totalitems: z.string().exactOptional(),
    itemsperpage: z.string().exactOptional(),
  })
  .openapi({ required: ['status', 'statuscode'] })
  .openapi('OCSMeta')

const ProfileActionSchema = z
  .object({ id: z.string(), icon: z.string(), title: z.string(), target: z.string().nullable() })
  .openapi({ required: ['id', 'icon', 'title', 'target'] })
  .openapi('ProfileAction')

const ProfileFieldsSchema = z
  .object({
    userId: z.string(),
    address: z.string().nullable().exactOptional(),
    biography: z.string().nullable().exactOptional(),
    displayname: z.string().nullable().exactOptional(),
    headline: z.string().nullable().exactOptional(),
    isUserAvatarVisible: z.boolean().exactOptional(),
    organisation: z.string().nullable().exactOptional(),
    pronouns: z.string().nullable().exactOptional(),
    role: z.string().nullable().exactOptional(),
    actions: z.array(ProfileActionSchema),
  })
  .openapi({ required: ['userId', 'actions'] })
  .openapi('ProfileFields')

const ProfileDataSchema = ProfileFieldsSchema.and(
  z
    .object({
      timezone: z
        .string()
        .openapi({
          description: 'Timezone identifier like Europe/Berlin or America/North_Dakota/Beulah',
        }),
      timezoneOffset: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({
          type: 'integer',
          format: 'int64',
          description: 'Offset in seconds, negative when behind UTC, positive otherwise',
        }),
    })
    .openapi({ required: ['timezone', 'timezoneOffset'] }),
).openapi('ProfileData')

const PublicCapabilitiesSchema = z
  .object({
    bruteforce: z
      .object({
        delay: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        'allow-listed': z.boolean(),
      })
      .openapi({ required: ['delay', 'allow-listed'] }),
  })
  .openapi({ required: ['bruteforce'] })
  .openapi('PublicCapabilities')

const ReferenceSchema = z
  .object({
    richObjectType: z.string(),
    richObject: z.record(z.string(), z.object({}).nullable()),
    openGraphObject: OpenGraphObjectSchema,
    accessible: z.boolean(),
  })
  .openapi({ required: ['richObjectType', 'richObject', 'openGraphObject', 'accessible'] })
  .openapi('Reference')

const ReferenceProviderSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    icon_url: z.string(),
    order: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    search_providers_ids: z.array(z.string()).nullable(),
  })
  .openapi({ required: ['id', 'title', 'icon_url', 'order', 'search_providers_ids'] })
  .openapi('ReferenceProvider')

const StatusSchema = z
  .object({
    installed: z.boolean(),
    maintenance: z.boolean(),
    needsDbUpgrade: z.boolean(),
    version: z.string(),
    versionstring: z.string(),
    edition: z.string(),
    productname: z.string(),
    extendedSupport: z.boolean(),
  })
  .openapi({
    required: [
      'installed',
      'maintenance',
      'needsDbUpgrade',
      'version',
      'versionstring',
      'edition',
      'productname',
      'extendedSupport',
    ],
  })
  .openapi('Status')

const TaskProcessingIOSchema = z
  .record(z.string(), z.union([z.number(), z.array(z.number()), z.string(), z.array(z.string())]))
  .openapi('TaskProcessingIO')

const TaskProcessingShapeSchema = z
  .object({
    name: z.string(),
    description: z.string(),
    type: z.enum([
      'Number',
      'Text',
      'Audio',
      'Image',
      'Video',
      'File',
      'Enum',
      'ListOfNumbers',
      'ListOfTexts',
      'ListOfImages',
      'ListOfAudios',
      'ListOfVideos',
      'ListOfFiles',
    ]),
  })
  .openapi({ required: ['name', 'description', 'type'] })
  .openapi('TaskProcessingShape')

const TaskProcessingTaskSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    lastUpdated: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    type: z.string(),
    status: z.enum([
      'STATUS_CANCELLED',
      'STATUS_FAILED',
      'STATUS_SUCCESSFUL',
      'STATUS_RUNNING',
      'STATUS_SCHEDULED',
      'STATUS_UNKNOWN',
    ]),
    userId: z.string().nullable(),
    appId: z.string(),
    input: TaskProcessingIOSchema,
    output: TaskProcessingIOSchema.nullable(),
    customId: z.string().nullable(),
    completionExpectedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    progress: z.float64().nullable(),
    scheduledAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    startedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    endedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    allowCleanup: z.boolean(),
    includeWatermark: z.boolean(),
    userFacingErrorMessage: z.string().nullable(),
    preferStreaming: z.boolean(),
  })
  .openapi({
    required: [
      'id',
      'lastUpdated',
      'type',
      'status',
      'userId',
      'appId',
      'input',
      'output',
      'customId',
      'completionExpectedAt',
      'progress',
      'scheduledAt',
      'startedAt',
      'endedAt',
      'allowCleanup',
      'includeWatermark',
      'userFacingErrorMessage',
      'preferStreaming',
    ],
  })
  .openapi('TaskProcessingTask')

const TaskProcessingTaskTypeSchema = z
  .object({
    name: z.string(),
    description: z.string(),
    inputShape: z.record(z.string(), TaskProcessingShapeSchema),
    inputShapeEnumValues: z.record(
      z.string(),
      z.array(
        z.object({ name: z.string(), value: z.string() }).openapi({ required: ['name', 'value'] }),
      ),
    ),
    inputShapeDefaults: z.record(z.string(), z.xor([z.number(), z.string()])),
    optionalInputShape: z.record(z.string(), TaskProcessingShapeSchema),
    optionalInputShapeEnumValues: z.record(
      z.string(),
      z.array(
        z.object({ name: z.string(), value: z.string() }).openapi({ required: ['name', 'value'] }),
      ),
    ),
    optionalInputShapeDefaults: z.record(z.string(), z.xor([z.number(), z.string()])),
    outputShape: z.record(z.string(), TaskProcessingShapeSchema),
    outputShapeEnumValues: z.record(
      z.string(),
      z.array(
        z.object({ name: z.string(), value: z.string() }).openapi({ required: ['name', 'value'] }),
      ),
    ),
    optionalOutputShape: z.record(z.string(), TaskProcessingShapeSchema),
    optionalOutputShapeEnumValues: z.record(
      z.string(),
      z.array(
        z.object({ name: z.string(), value: z.string() }).openapi({ required: ['name', 'value'] }),
      ),
    ),
  })
  .openapi({
    required: [
      'name',
      'description',
      'inputShape',
      'inputShapeEnumValues',
      'inputShapeDefaults',
      'optionalInputShape',
      'optionalInputShapeEnumValues',
      'optionalInputShapeDefaults',
      'outputShape',
      'outputShapeEnumValues',
      'optionalOutputShape',
      'optionalOutputShapeEnumValues',
    ],
  })
  .openapi('TaskProcessingTaskType')

const TeamSchema = z
  .object({ teamId: z.string(), displayName: z.string(), link: z.string().nullable() })
  .openapi({ required: ['teamId', 'displayName', 'link'] })
  .openapi('Team')

const TeamResourceSchema = z
  .object({
    id: z.string(),
    label: z.string(),
    url: z.string(),
    iconSvg: z.string().nullable(),
    iconURL: z.string().nullable(),
    iconEmoji: z.string().nullable(),
    provider: z
      .object({ id: z.string(), name: z.string(), icon: z.string() })
      .openapi({ required: ['id', 'name', 'icon'] }),
  })
  .openapi({ required: ['id', 'label', 'url', 'iconSvg', 'iconURL', 'iconEmoji', 'provider'] })
  .openapi('TeamResource')

const TeamWithResourcesSchema = TeamSchema.and(
  z.object({ resources: z.array(TeamResourceSchema) }).openapi({ required: ['resources'] }),
).openapi('TeamWithResources')

const TextProcessingTaskSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    type: z.string(),
    status: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.union([z.literal(0n), z.literal(1n), z.literal(2n), z.literal(3n), z.literal(4n)]),
      )
      .openapi({ type: 'integer', format: 'int64', enum: [0, 1, 2, 3, 4] }),
    userId: z.string().nullable(),
    appId: z.string(),
    input: z.string(),
    output: z.string().nullable(),
    identifier: z.string(),
    completionExpectedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
  })
  .openapi({
    required: [
      'id',
      'type',
      'status',
      'userId',
      'appId',
      'input',
      'output',
      'identifier',
      'completionExpectedAt',
    ],
  })
  .openapi('TextProcessingTask')

const TextToImageTaskSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    status: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.union([z.literal(0n), z.literal(1n), z.literal(2n), z.literal(3n), z.literal(4n)]),
      )
      .openapi({ type: 'integer', format: 'int64', enum: [0, 1, 2, 3, 4] }),
    userId: z.string().nullable(),
    appId: z.string(),
    input: z.string(),
    identifier: z.string().nullable(),
    numberOfImages: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    completionExpectedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
  })
  .openapi({
    required: [
      'id',
      'status',
      'userId',
      'appId',
      'input',
      'identifier',
      'numberOfImages',
      'completionExpectedAt',
    ],
  })
  .openapi('TextToImageTask')

const UnifiedSearchProviderSchema = z
  .object({
    id: z.string(),
    appId: z.string(),
    name: z.string(),
    icon: z.string(),
    order: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    isExternalProvider: z.boolean(),
    triggers: z.array(z.string()),
    filters: z.record(z.string(), z.string()),
    inAppSearch: z.boolean(),
  })
  .openapi({
    required: [
      'id',
      'appId',
      'name',
      'icon',
      'order',
      'isExternalProvider',
      'triggers',
      'filters',
      'inAppSearch',
    ],
  })
  .openapi('UnifiedSearchProvider')

const UnifiedSearchResultEntrySchema = z
  .object({
    thumbnailUrl: z.string(),
    title: z.string(),
    subline: z.string(),
    resourceUrl: z.string(),
    icon: z.string(),
    rounded: z.boolean(),
    attributes: z.array(z.string()),
  })
  .openapi({
    required: ['thumbnailUrl', 'title', 'subline', 'resourceUrl', 'icon', 'rounded', 'attributes'],
  })
  .openapi('UnifiedSearchResultEntry')

const UnifiedSearchResultSchema = z
  .object({
    name: z.string(),
    isPaginated: z.boolean(),
    entries: z.array(UnifiedSearchResultEntrySchema),
    cursor: z
      .xor([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .nullable(),
  })
  .openapi({ required: ['name', 'isPaginated', 'entries', 'cursor'] })
  .openapi('UnifiedSearchResult')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getOcsV2PhpCoreGetapppasswordRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/core/getapppassword',
  tags: ['app_password'],
  summary: 'Create app password',
  description: 'This endpoint requires password confirmation',
  operationId: 'app_password-get-app-password',
  request: {
    headers: z.object({
      'user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'user-agent', in: 'header', schema: { type: 'string' }, required: false },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'App password returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ apppassword: z.string() })
                    .openapi({ required: ['apppassword'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Creating app password is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpCoreApppasswordRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/core/apppassword',
  tags: ['app_password'],
  summary: 'Delete app password',
  operationId: 'app_password-delete-app-password',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'App password deleted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Deleting app password is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpCoreApppasswordRotateRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/core/apppassword/rotate',
  tags: ['app_password'],
  summary: 'Rotate app password',
  operationId: 'app_password-rotate-app-password',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'App password returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ apppassword: z.string() })
                    .openapi({ required: ['apppassword'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Rotating app password is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpCoreApppasswordConfirmRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/core/apppassword/confirm',
  tags: ['app_password'],
  summary: 'Confirm the user password',
  operationId: 'app_password-confirm-user-password',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              password: z.string().min(1).openapi({ description: 'The password of the user' }),
            })
            .openapi({ required: ['password'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Password confirmation succeeded',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      lastLogin: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(1n),
                        )
                        .openapi({ type: 'integer', format: 'int64', minimum: 1 }),
                    })
                    .openapi({ required: ['lastLogin'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Password confirmation failed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpCoreGetapppasswordOnetimeRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/core/getapppassword-onetime',
  tags: ['app_password'],
  summary: 'Get app password with one-time password',
  operationId: 'app_password-get-app-password-with-one-time-password',
  request: {
    headers: z.object({
      'user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'user-agent', in: 'header', schema: { type: 'string' }, required: false },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'App password returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ apppassword: z.string().min(1) })
                    .openapi({ required: ['apppassword'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Creating app password is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpCoreAutocompleteGetRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/core/autocomplete/get',
  tags: ['auto_complete'],
  summary: 'Autocomplete a query',
  operationId: 'auto_complete-get',
  request: {
    query: z.object({
      search: z
        .string()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'Text to search for',
            required: true,
            schema: { type: 'string' },
          },
        }),
      itemType: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'itemType',
            in: 'query',
            description: 'Type of the items to search for',
            schema: { type: 'string', nullable: true },
            required: false,
          },
        }),
      itemId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'itemId',
            in: 'query',
            description: 'ID of the items to search for',
            schema: { type: 'string', nullable: true },
            required: false,
          },
        }),
      sorter: z
        .string()
        .nullable()
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'sorter',
            in: 'query',
            description: 'can be piped, top priority first, e.g.: "commenters|share-recipients"',
            schema: { type: 'string', nullable: true, default: null },
            required: false,
          },
        }),
      'shareTypes[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .preprocess((val) => {
                if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                  return val
                if (/^-?\d+$/.test(val)) return BigInt(val)
                const num = Number(val)
                return Number.isSafeInteger(num) ? BigInt(num) : val
              }, z.int64().min(0n))
              .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
          ),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'shareTypes[]',
            in: 'query',
            description: 'Types of shares to search for',
            schema: {
              type: 'array',
              default: [],
              items: { type: 'integer', format: 'int64', minimum: 0 },
            },
            required: false,
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of results to return',
            schema: { type: 'integer', format: 'int64', default: 10, minimum: 1 },
            required: false,
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: 'Offset for searching',
            schema: { type: 'integer', format: 'int64', default: 0, minimum: 0 },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Autocomplete results returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(AutocompleteResultSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        Link: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/collaboration/resources/collections/{collectionId}',
  tags: ['collaboration_resources'],
  summary: 'Get a collection',
  operationId: 'collaboration_resources-list-collection',
  request: {
    params: z.object({
      collectionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'collectionId',
            in: 'path',
            description: 'ID of the collection',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Collection returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: CollectionSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Collection not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/collaboration/resources/collections/{collectionId}',
  tags: ['collaboration_resources'],
  summary: 'Rename a collection',
  operationId: 'collaboration_resources-rename-collection',
  request: {
    params: z.object({
      collectionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'collectionId',
            in: 'path',
            description: 'ID of the collection',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ collectionName: z.string().openapi({ description: 'New name' }) })
            .openapi({ required: ['collectionName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Collection returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: CollectionSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Collection not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/collaboration/resources/collections/{collectionId}',
  tags: ['collaboration_resources'],
  summary: 'Add a resource to a collection',
  operationId: 'collaboration_resources-add-resource',
  request: {
    params: z.object({
      collectionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'collectionId',
            in: 'path',
            description: 'ID of the collection',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resourceType: z.string().openapi({ description: 'Name of the resource' }),
              resourceId: z.string().openapi({ description: 'ID of the resource' }),
            })
            .openapi({ required: ['resourceType', 'resourceId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Collection returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: CollectionSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Collection not found or resource inaccessible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/collaboration/resources/collections/{collectionId}',
  tags: ['collaboration_resources'],
  summary: 'Remove a resource from a collection',
  operationId: 'collaboration_resources-remove-resource',
  request: {
    params: z.object({
      collectionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'collectionId',
            in: 'path',
            description: 'ID of the collection',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    query: z.object({
      resourceType: z
        .string()
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            description: 'Name of the resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
      resourceId: z
        .string()
        .openapi({
          param: {
            name: 'resourceId',
            in: 'query',
            description: 'ID of the resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Collection returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: CollectionSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Collection or resource not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpCollaborationResourcesCollectionsSearchFilterRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/collaboration/resources/collections/search/{filter}',
  tags: ['collaboration_resources'],
  summary: 'Search for collections',
  operationId: 'collaboration_resources-search-collections',
  request: {
    params: z.object({
      filter: z
        .string()
        .openapi({
          param: {
            name: 'filter',
            in: 'path',
            description: 'Filter collections',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Collections returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(CollectionSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Collection not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpCollaborationResourcesResourceTypeResourceIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/collaboration/resources/{resourceType}/{resourceId}',
  tags: ['collaboration_resources'],
  summary: 'Get collections by resource',
  operationId: 'collaboration_resources-get-collections-by-resource',
  request: {
    params: z.object({
      resourceType: z
        .string()
        .openapi({
          param: {
            name: 'resourceType',
            in: 'path',
            description: 'Type of the resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
      resourceId: z
        .string()
        .openapi({
          param: {
            name: 'resourceId',
            in: 'path',
            description: 'ID of the resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Collections returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(CollectionSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Resource not accessible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpCollaborationResourcesBaseResourceTypeBaseResourceIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/collaboration/resources/{baseResourceType}/{baseResourceId}',
  tags: ['collaboration_resources'],
  summary: 'Create a collection for a resource',
  operationId: 'collaboration_resources-create-collection-on-resource',
  request: {
    params: z.object({
      baseResourceType: z
        .string()
        .openapi({
          param: {
            name: 'baseResourceType',
            in: 'path',
            description: 'Type of the base resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
      baseResourceId: z
        .string()
        .openapi({
          param: {
            name: 'baseResourceId',
            in: 'path',
            description: 'ID of the base resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ name: z.string().openapi({ description: 'Name of the collection' }) })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Collection returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: CollectionSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Creating collection is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Resource inaccessible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpHovercardV1UserIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/hovercard/v1/{userId}',
  tags: ['hover_card'],
  summary: 'Get the account details for a hovercard',
  operationId: 'hover_card-get-user',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Account details returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      userId: z.string(),
                      displayName: z.string(),
                      actions: z.array(ContactsActionSchema),
                    })
                    .openapi({ required: ['userId', 'displayName', 'actions'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Account not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpCoreNavigationAppsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/core/navigation/apps',
  tags: ['navigation'],
  summary: 'Get the apps navigation',
  operationId: 'navigation-get-apps-navigation',
  request: {
    query: z.object({
      absolute: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'absolute',
            in: 'query',
            description: 'Rewrite URLs to absolute ones',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Apps navigation returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(NavigationEntrySchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    304: { description: 'No apps navigation changed' },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpCoreNavigationSettingsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/core/navigation/settings',
  tags: ['navigation'],
  summary: 'Get the settings navigation',
  operationId: 'navigation-get-settings-navigation',
  request: {
    query: z.object({
      absolute: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'absolute',
            in: 'query',
            description: 'Rewrite URLs to absolute ones',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Apps navigation returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(NavigationSettingsEntrySchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    304: { description: 'No apps navigation changed' },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpCloudCapabilitiesRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/cloud/capabilities',
  tags: ['ocs'],
  summary: 'Get the capabilities',
  operationId: 'ocs-get-capabilities',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Capabilities returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      version: z
                        .object({
                          major: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64(),
                            )
                            .openapi({ type: 'integer', format: 'int64' }),
                          minor: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64(),
                            )
                            .openapi({ type: 'integer', format: 'int64' }),
                          micro: z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64(),
                            )
                            .openapi({ type: 'integer', format: 'int64' }),
                          string: z.string(),
                          edition: z.string(),
                          extendedSupport: z.boolean(),
                        })
                        .openapi({
                          required: [
                            'major',
                            'minor',
                            'micro',
                            'string',
                            'edition',
                            'extendedSupport',
                          ],
                        }),
                      capabilities: z.record(z.string(), z.object({})),
                    })
                    .openapi({ required: ['version', 'capabilities'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpProfileTargetUserIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/profile/{targetUserId}',
  tags: ['profile_api'],
  summary: 'Get profile fields for another user',
  operationId: 'profile_api-get-profile-fields',
  request: {
    params: z.object({
      targetUserId: z
        .string()
        .openapi({
          param: {
            name: 'targetUserId',
            in: 'path',
            description: 'ID of the user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Profile data returned successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ProfileDataSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Profile is disabled',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Account not found or disabled',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpProfileTargetUserIdRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/profile/{targetUserId}',
  tags: ['profile_api'],
  summary: 'Update the visibility of a parameter',
  description: 'This endpoint requires password confirmation',
  operationId: 'profile_api-set-visibility',
  request: {
    params: z.object({
      targetUserId: z
        .string()
        .openapi({
          param: {
            name: 'targetUserId',
            in: 'path',
            description: 'ID of the user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              paramId: z.string().openapi({ description: 'ID of the parameter' }),
              visibility: z.string().openapi({ description: 'New visibility' }),
            })
            .openapi({ required: ['paramId', 'visibility'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Visibility updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Updating visibility is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Not allowed to edit other users visibility',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Account not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpReferencesExtractRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/references/extract',
  tags: ['reference_api'],
  summary: 'Extract references from a text',
  operationId: 'reference_api-extract',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              text: z.string().openapi({ description: 'Text to extract from' }),
              resolve: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Resolve the references' }),
              limit: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .default(1n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  default: 1,
                  description: 'Maximum amount of references to extract',
                }),
            })
            .openapi({ required: ['text'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'References returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ references: z.record(z.string(), ReferenceSchema.nullable()) })
                    .openapi({ required: ['references'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpReferencesExtractPublicRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/references/extractPublic',
  tags: ['reference_api'],
  summary: 'Extract references from a text',
  operationId: 'reference_api-extract-public',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              text: z.string().openapi({ description: 'Text to extract from' }),
              sharingToken: z.string().openapi({ description: 'Token of the public share' }),
              resolve: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Resolve the references' }),
              limit: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .default(1n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  default: 1,
                  description: 'Maximum amount of references to extract, limited to 15',
                }),
            })
            .openapi({ required: ['text', 'sharingToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'References returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ references: z.record(z.string(), ReferenceSchema.nullable()) })
                    .openapi({ required: ['references'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpReferencesResolveRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/references/resolve',
  tags: ['reference_api'],
  summary: 'Resolve a reference',
  operationId: 'reference_api-resolve-one',
  request: {
    query: z.object({
      reference: z
        .string()
        .openapi({
          param: {
            name: 'reference',
            in: 'query',
            description: 'Reference to resolve',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Reference returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ references: z.record(z.string(), ReferenceSchema.nullable()) })
                    .openapi({ required: ['references'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpReferencesResolveRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/references/resolve',
  tags: ['reference_api'],
  summary: 'Resolve multiple references',
  operationId: 'reference_api-resolve',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              references: z.array(z.string()).openapi({ description: 'References to resolve' }),
              limit: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .default(1n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  default: 1,
                  description: 'Maximum amount of references to resolve',
                }),
            })
            .openapi({ required: ['references'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'References returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ references: z.record(z.string(), ReferenceSchema.nullable()) })
                    .openapi({ required: ['references'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpReferencesResolvePublicRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/references/resolvePublic',
  tags: ['reference_api'],
  summary: 'Resolve from a public page',
  operationId: 'reference_api-resolve-one-public',
  request: {
    query: z.object({
      reference: z
        .string()
        .openapi({
          param: {
            name: 'reference',
            in: 'query',
            description: 'Reference to resolve',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sharingToken: z
        .string()
        .openapi({
          param: {
            name: 'sharingToken',
            in: 'query',
            description: 'Token of the public share',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Reference returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ references: z.record(z.string(), ReferenceSchema.nullable()) })
                    .openapi({ required: ['references'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpReferencesResolvePublicRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/references/resolvePublic',
  tags: ['reference_api'],
  summary: 'Resolve multiple references from a public page',
  operationId: 'reference_api-resolve-public',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              references: z.array(z.string()).openapi({ description: 'References to resolve' }),
              sharingToken: z.string().openapi({ description: 'Token of the public share' }),
              limit: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .default(1n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  default: 1,
                  description: 'Maximum amount of references to resolve, limited to 15',
                }),
            })
            .openapi({ required: ['references', 'sharingToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'References returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ references: z.record(z.string(), ReferenceSchema.nullable()) })
                    .openapi({ required: ['references'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpReferencesProvidersRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/references/providers',
  tags: ['reference_api'],
  summary: 'Get the providers',
  operationId: 'reference_api-get-providers-info',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Providers returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ReferenceProviderSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpReferencesProviderProviderIdRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/references/provider/{providerId}',
  tags: ['reference_api'],
  summary: 'Touch a provider',
  operationId: 'reference_api-touch-provider',
  request: {
    params: z.object({
      providerId: z
        .string()
        .openapi({
          param: {
            name: 'providerId',
            in: 'path',
            description: 'ID of the provider',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              timestamp: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  type: ['integer', 'null'],
                  format: 'int64',
                  default: null,
                  description: 'Timestamp of the last usage',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Provider touched',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ success: z.boolean() }).openapi({ required: ['success'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpTaskprocessingTasktypesRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/taskprocessing/tasktypes',
  tags: ['task_processing_api'],
  summary: 'Returns all available TaskProcessing task types',
  operationId: 'task_processing_api-task-types',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task types returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ types: z.record(z.string(), TaskProcessingTaskTypeSchema) })
                    .openapi({ required: ['types'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpTaskprocessingScheduleRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/taskprocessing/schedule',
  tags: ['task_processing_api'],
  summary: 'Schedules a task',
  operationId: 'task_processing_api-schedule',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              input: z
                .record(z.string(), z.object({}))
                .openapi({ description: "Task's input parameters" }),
              type: z.string().openapi({ description: 'Type of the task' }),
              appId: z
                .string()
                .openapi({ description: 'ID of the app that will execute the task' }),
              customId: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'An arbitrary identifier for the task' }),
              webhookUri: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'URI to be requested when the task finishes' }),
              webhookMethod: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description:
                    'Method used for the webhook request (HTTP:GET, HTTP:POST, HTTP:PUT, HTTP:DELETE or AppAPI:APP_ID:GET, AppAPI:APP_ID:POST...)',
                }),
              includeWatermark: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description: 'Whether to include a watermark in the output file or not',
                }),
              preferStreaming: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Whether to prefer getting a progressive output from the provider or not',
                }),
            })
            .openapi({ required: ['input', 'type', 'appId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task scheduled successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ task: TaskProcessingTaskSchema })
                    .openapi({ required: ['task'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Scheduling task is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description:
        "Cannot schedule task because it references files in its input that the user doesn't have access to",
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    412: {
      description: 'Scheduling task is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpTaskprocessingTaskIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/taskprocessing/task/{id}',
  tags: ['task_processing_api'],
  summary: 'Gets a task including status and result',
  description: 'Tasks are removed 1 week after receiving their last update',
  operationId: 'task_processing_api-get-task',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The id of the task',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ task: TaskProcessingTaskSchema })
                    .openapi({ required: ['task'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Task not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpTaskprocessingTaskIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/taskprocessing/task/{id}',
  tags: ['task_processing_api'],
  summary: 'Deletes a task',
  operationId: 'task_processing_api-delete-task',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The id of the task',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task deleted',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpTaskprocessingTasksAppAppIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/taskprocessing/tasks/app/{appId}',
  tags: ['task_processing_api'],
  summary: 'Returns tasks for the current user filtered by the appId and optional customId',
  operationId: 'task_processing_api-list-tasks-by-app',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'ID of the app',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      customId: z
        .string()
        .nullable()
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'customId',
            in: 'query',
            description: 'An arbitrary identifier for the task',
            schema: { type: 'string', nullable: true, default: null },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Tasks returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ tasks: z.array(TaskProcessingTaskSchema) })
                    .openapi({ required: ['tasks'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpTaskprocessingTasksRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/taskprocessing/tasks',
  tags: ['task_processing_api'],
  summary:
    'Returns tasks for the current user filtered by the optional taskType and optional customId',
  operationId: 'task_processing_api-list-tasks',
  request: {
    query: z.object({
      taskType: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'taskType',
            in: 'query',
            description: 'The task type to filter by',
            schema: { type: 'string', nullable: true },
            required: false,
          },
        }),
      customId: z
        .string()
        .nullable()
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'customId',
            in: 'query',
            description: 'An arbitrary identifier for the task',
            schema: { type: 'string', nullable: true, default: null },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Tasks returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ tasks: z.array(TaskProcessingTaskSchema) })
                    .openapi({ required: ['tasks'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/taskprocessing/tasks/{taskId}/file/{fileId}',
  tags: ['task_processing_api'],
  summary: 'Returns the contents of a file referenced in a task',
  operationId: 'task_processing_api-get-file-contents',
  request: {
    params: z.object({
      taskId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'taskId',
            in: 'path',
            description: 'The id of the task',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
      fileId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'fileId',
            in: 'path',
            description: 'The file id of the file to retrieve',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'File content returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Task or file not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpTaskprocessingTasksTaskIdCancelRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/taskprocessing/tasks/{taskId}/cancel',
  tags: ['task_processing_api'],
  summary: 'Cancels a task',
  operationId: 'task_processing_api-cancel-task',
  request: {
    params: z.object({
      taskId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'taskId',
            in: 'path',
            description: 'The id of the task',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task canceled successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ task: TaskProcessingTaskSchema })
                    .openapi({ required: ['task'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Task not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/taskprocessing/tasks/{taskId}/queue_position',
  tags: ['task_processing_api'],
  summary: "Get a task's position in the queue",
  operationId: 'task_processing_api-get-task-queue-position',
  request: {
    params: z.object({
      taskId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'taskId',
            in: 'path',
            description: 'The id of the task',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The position was found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64(),
                    )
                    .openapi({ type: 'integer', format: 'int64' }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Task not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    412: {
      description: 'The task is not scheduled',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpTeamsTeamIdResourcesRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/teams/{teamId}/resources',
  tags: ['teams_api'],
  summary: 'Get all resources of a team',
  operationId: 'teams_api-resolve-one',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            in: 'path',
            description: 'Unique id of the team',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Resources returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ resources: z.array(TeamResourceSchema) })
                    .openapi({ required: ['resources'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpTeamsResourcesProviderIdResourceIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/teams/resources/{providerId}/{resourceId}',
  tags: ['teams_api'],
  summary: 'Get all teams of a resource',
  operationId: 'teams_api-list-teams',
  request: {
    params: z.object({
      providerId: z
        .string()
        .openapi({
          param: {
            name: 'providerId',
            in: 'path',
            description: 'Identifier of the provider (e.g. deck, talk, collectives)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      resourceId: z
        .string()
        .openapi({
          param: {
            name: 'resourceId',
            in: 'path',
            description: 'Unique id of the resource to list teams for (e.g. deck board id)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Teams returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ teams: z.array(TeamWithResourcesSchema) })
                    .openapi({ required: ['teams'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpTextprocessingTasktypesRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/textprocessing/tasktypes',
  tags: ['text_processing_api'],
  summary: 'This endpoint returns all available LanguageModel task types',
  operationId: 'text_processing_api-task-types',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task types returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      types: z.array(
                        z
                          .object({ id: z.string(), name: z.string(), description: z.string() })
                          .openapi({ required: ['id', 'name', 'description'] }),
                      ),
                    })
                    .openapi({ required: ['types'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpTextprocessingScheduleRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/textprocessing/schedule',
  tags: ['text_processing_api'],
  summary: 'This endpoint allows scheduling a language model task',
  operationId: 'text_processing_api-schedule',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              input: z.string().openapi({ description: 'Input text' }),
              type: z.string().openapi({ description: 'Type of the task' }),
              appId: z
                .string()
                .openapi({ description: 'ID of the app that will execute the task' }),
              identifier: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'An arbitrary identifier for the task' }),
            })
            .openapi({ required: ['input', 'type', 'appId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task scheduled successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ task: TextProcessingTaskSchema })
                    .openapi({ required: ['task'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Scheduling task is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    412: {
      description: 'Scheduling task is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpTextprocessingTaskIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/textprocessing/task/{id}',
  tags: ['text_processing_api'],
  summary:
    'This endpoint allows checking the status and results of a task. Tasks are removed 1 week after receiving their last update.',
  operationId: 'text_processing_api-get-task',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The id of the task',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ task: TextProcessingTaskSchema })
                    .openapi({ required: ['task'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Task not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpTextprocessingTaskIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/textprocessing/task/{id}',
  tags: ['text_processing_api'],
  summary: 'This endpoint allows to delete a scheduled task for a user',
  operationId: 'text_processing_api-delete-task',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The id of the task',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ task: TextProcessingTaskSchema })
                    .openapi({ required: ['task'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Task not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpTextprocessingTasksAppAppIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/textprocessing/tasks/app/{appId}',
  tags: ['text_processing_api'],
  summary:
    'This endpoint returns a list of tasks of a user that are related with a specific appId and optionally with an identifier',
  operationId: 'text_processing_api-list-tasks-by-app',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'ID of the app',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      identifier: z
        .string()
        .nullable()
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'identifier',
            in: 'query',
            description: 'An arbitrary identifier for the task',
            schema: { type: 'string', nullable: true, default: null },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task list returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ tasks: z.array(TextProcessingTaskSchema) })
                    .openapi({ required: ['tasks'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpText2imageIsAvailableRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/text2image/is_available',
  tags: ['text_to_image_api'],
  summary: 'Check whether this feature is available',
  operationId: 'text_to_image_api-is-available',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns availability status',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ isAvailable: z.boolean() })
                    .openapi({ required: ['isAvailable'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpText2imageScheduleRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/text2image/schedule',
  tags: ['text_to_image_api'],
  summary: 'This endpoint allows scheduling a text to image task',
  operationId: 'text_to_image_api-schedule',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              input: z.string().openapi({ description: 'Input text' }),
              appId: z
                .string()
                .openapi({ description: 'ID of the app that will execute the task' }),
              identifier: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'An arbitrary identifier for the task' }),
              numberOfImages: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .default(8n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  default: 8,
                  description: 'The number of images to generate',
                }),
            })
            .openapi({ required: ['input', 'appId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task scheduled successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ task: TextToImageTaskSchema }).openapi({ required: ['task'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    412: {
      description: 'Scheduling task is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpText2imageTaskIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/text2image/task/{id}',
  tags: ['text_to_image_api'],
  summary:
    'This endpoint allows checking the status and results of a task. Tasks are removed 1 week after receiving their last update.',
  operationId: 'text_to_image_api-get-task',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The id of the task',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ task: TextToImageTaskSchema }).openapi({ required: ['task'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Task not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpText2imageTaskIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/text2image/task/{id}',
  tags: ['text_to_image_api'],
  summary: 'This endpoint allows to delete a scheduled task for a user',
  operationId: 'text_to_image_api-delete-task',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The id of the task',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ task: TextToImageTaskSchema }).openapi({ required: ['task'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Task not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpText2imageTaskIdImageIndexRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/text2image/task/{id}/image/{index}',
  tags: ['text_to_image_api'],
  summary: 'This endpoint allows downloading the resulting image of a task',
  operationId: 'text_to_image_api-get-image',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The id of the task',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
      index: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'index',
            in: 'path',
            description: 'The index of the image to retrieve',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Image returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Task or image not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpText2imageTasksAppAppIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/text2image/tasks/app/{appId}',
  tags: ['text_to_image_api'],
  summary:
    'This endpoint returns a list of tasks of a user that are related with a specific appId and optionally with an identifier',
  operationId: 'text_to_image_api-list-tasks-by-app',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'ID of the app',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      identifier: z
        .string()
        .nullable()
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'identifier',
            in: 'query',
            description: 'An arbitrary identifier for the task',
            schema: { type: 'string', nullable: true, default: null },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task list returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ tasks: z.array(TextToImageTaskSchema) })
                    .openapi({ required: ['tasks'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpTranslationLanguagesRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/translation/languages',
  tags: ['translation_api'],
  summary: 'Get the list of supported languages',
  operationId: 'translation_api-languages',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Supported languages returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      languages: z.array(
                        z
                          .object({
                            from: z.string(),
                            fromLabel: z.string(),
                            to: z.string(),
                            toLabel: z.string(),
                          })
                          .openapi({ required: ['from', 'fromLabel', 'to', 'toLabel'] }),
                      ),
                      languageDetection: z.boolean(),
                    })
                    .openapi({ required: ['languages', 'languageDetection'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpTranslationTranslateRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/translation/translate',
  tags: ['translation_api'],
  summary: 'Translate a text',
  operationId: 'translation_api-translate',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              text: z.string().openapi({ description: 'Text to be translated' }),
              fromLanguage: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Language to translate from' }),
              toLanguage: z.string().openapi({ description: 'Language to translate to' }),
            })
            .openapi({ required: ['text', 'toLanguage'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Translated text returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ text: z.string(), from: z.string().nullable() })
                    .openapi({ required: ['text', 'from'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Language not detected or unable to translate',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ message: z.string(), from: z.string().nullable().exactOptional() })
                    .openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    412: {
      description: 'Translating is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ message: z.string(), from: z.string().nullable().exactOptional() })
                    .openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ message: z.string(), from: z.string().nullable().exactOptional() })
                    .openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpSearchProvidersRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/search/providers',
  tags: ['unified_search'],
  summary: 'Get the providers for unified search',
  operationId: 'unified_search-get-providers',
  request: {
    query: z.object({
      from: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'from',
            in: 'query',
            description: 'the url the user is currently at',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Providers returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(UnifiedSearchProviderSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpSearchProvidersProviderIdSearchRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/search/providers/{providerId}/search',
  tags: ['unified_search'],
  summary: 'Launch a search for a specific search provider.',
  description:
    'Additional filters are available for each provider. Send a request to /providers endpoint to list providers with their available filters.',
  operationId: 'unified_search-search',
  request: {
    params: z.object({
      providerId: z
        .string()
        .openapi({
          param: {
            name: 'providerId',
            in: 'path',
            description: 'ID of the provider',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      term: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'term',
            in: 'query',
            description: 'Term to search',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
      sortOrder: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .nullable(),
        )
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'sortOrder',
            in: 'query',
            description: 'Order of entries',
            schema: { type: 'integer', format: 'int64', nullable: true, default: null },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .nullable(),
        )
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'Maximum amount of entries (capped by configurable unified-search.max-results-per-request, default: 25)',
            schema: { type: 'integer', format: 'int64', nullable: true, default: null },
            required: false,
          },
        }),
      cursor: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        ((schema) =>
          z.union([
            z.preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, schema),
            schema,
          ]))(
          z.xor([
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
            z.string(),
          ]),
        ).nullable(),
      )
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            description: 'Offset for searching',
            schema: {
              nullable: true,
              default: null,
              oneOf: [{ type: 'integer', format: 'int64' }, { type: 'string' }],
            },
            required: false,
          },
        }),
      from: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'from',
            in: 'query',
            description: 'The current user URL',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Search entries returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: UnifiedSearchResultSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Searching is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getIndexPhpAvatarUserIdSizeDarkRoute = createRoute({
  method: 'get',
  path: '/index.php/avatar/{userId}/{size}/dark',
  tags: ['avatar'],
  summary: 'Get the dark avatar',
  operationId: 'avatar-get-avatar-dark',
  request: {
    params: z.object({
      userId: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
            required: true,
            schema: { type: 'string', minLength: 1 },
          },
        }),
      size: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          },
          z.union([z.literal(64n), z.literal(512n)]),
        )
        .openapi({
          param: {
            name: 'size',
            in: 'path',
            description: 'Size of the avatar',
            required: true,
            schema: { type: 'integer', format: 'int64', enum: [64, 512] },
          },
        }),
    }),
    query: z.object({
      guestFallback: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'guestFallback',
            in: 'query',
            description: 'Fallback to guest avatar if not found',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      v: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'v',
            in: 'query',
            description:
              'Avatar version, which lets the response be cached for longer. A stale version still returns the current avatar',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Avatar returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
      headers: z.object({
        'X-NC-IsCustomAvatar': {
          schema: z
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
            .openapi({ param: { required: false }, type: 'integer', format: 'int64' }),
        },
      }),
    },
    201: {
      description: 'Avatar returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
      headers: z.object({
        'X-NC-IsCustomAvatar': {
          schema: z
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
            .openapi({ param: { required: false }, type: 'integer', format: 'int64' }),
        },
      }),
    },
    404: { description: 'Avatar not found', content: { 'application/json': { schema: z.any() } } },
    500: { description: '' },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getIndexPhpAvatarUserIdSizeRoute = createRoute({
  method: 'get',
  path: '/index.php/avatar/{userId}/{size}',
  tags: ['avatar'],
  summary: 'Get the avatar',
  operationId: 'avatar-get-avatar',
  request: {
    params: z.object({
      userId: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
            required: true,
            schema: { type: 'string', minLength: 1 },
          },
        }),
      size: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          },
          z.union([z.literal(64n), z.literal(512n)]),
        )
        .openapi({
          param: {
            name: 'size',
            in: 'path',
            description: 'Size of the avatar',
            required: true,
            schema: { type: 'integer', format: 'int64', enum: [64, 512] },
          },
        }),
    }),
    query: z.object({
      guestFallback: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'guestFallback',
            in: 'query',
            description: 'Fallback to guest avatar if not found',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      v: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'v',
            in: 'query',
            description:
              'Avatar version, which lets the response be cached for longer. A stale version still returns the current avatar',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Avatar returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
      headers: z.object({
        'X-NC-IsCustomAvatar': {
          schema: z
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
            .openapi({ param: { required: false }, type: 'integer', format: 'int64' }),
        },
      }),
    },
    201: {
      description: 'Avatar returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
      headers: z.object({
        'X-NC-IsCustomAvatar': {
          schema: z
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
            .openapi({ param: { required: false }, type: 'integer', format: 'int64' }),
        },
      }),
    },
    404: { description: 'Avatar not found', content: { 'application/json': { schema: z.any() } } },
    500: { description: '' },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getIndexPhpCsrftokenRoute = createRoute({
  method: 'get',
  path: '/index.php/csrftoken',
  tags: ['csrf_token'],
  summary: 'Returns a new CSRF token.',
  operationId: 'csrf_token-index',
  responses: {
    200: {
      description: 'CSRF token returned',
      content: {
        'application/json': {
          schema: z.object({ token: z.string() }).openapi({ required: ['token'] }),
        },
      },
    },
    403: {
      description: 'Strict cookie check failed',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postIndexPhpLoginV2PollRoute = createRoute({
  method: 'post',
  path: '/index.php/login/v2/poll',
  tags: ['client_flow_login_v2'],
  summary: 'Poll the login flow credentials',
  operationId: 'client_flow_login_v2-poll',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ token: z.string().openapi({ description: 'Token of the flow' }) })
            .openapi({ required: ['token'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Login flow credentials returned',
      content: { 'application/json': { schema: LoginFlowV2CredentialsSchema } },
    },
    404: {
      description: 'Login flow not found or completed',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postIndexPhpLoginV2Route = createRoute({
  method: 'post',
  path: '/index.php/login/v2',
  tags: ['client_flow_login_v2'],
  summary: 'Init a login flow',
  operationId: 'client_flow_login_v2-init',
  request: {
    headers: z.object({
      'user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'user-agent', in: 'header', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Login flow init returned',
      content: { 'application/json': { schema: LoginFlowV2Schema } },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getIndexPhpAvatarGuestGuestNameSizeRoute = createRoute({
  method: 'get',
  path: '/index.php/avatar/guest/{guestName}/{size}',
  tags: ['guest_avatar'],
  summary: 'Returns a guest avatar image response',
  operationId: 'guest_avatar-get-avatar',
  request: {
    params: z.object({
      guestName: z
        .string()
        .openapi({
          param: {
            name: 'guestName',
            in: 'path',
            description: 'The guest name, e.g. "Albert"',
            required: true,
            schema: { type: 'string' },
          },
        }),
      size: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          },
          z.union([z.literal(64n), z.literal(512n)]),
        )
        .openapi({
          param: {
            name: 'size',
            in: 'path',
            description: 'The desired avatar size, e.g. 64 for 64x64px',
            required: true,
            schema: { type: 'integer', format: 'int64', enum: [64, 512] },
          },
        }),
    }),
    query: z.object({
      darkTheme: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'darkTheme',
            in: 'query',
            description: 'Return dark avatar',
            schema: { type: 'boolean', nullable: true, default: false },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Custom avatar returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
      headers: z.object({
        'X-NC-IsCustomAvatar': {
          schema: z
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
            .openapi({ param: { required: false }, type: 'integer', format: 'int64' }),
        },
      }),
    },
    201: {
      description: 'Avatar returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
      headers: z.object({
        'X-NC-IsCustomAvatar': {
          schema: z
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
            .openapi({ param: { required: false }, type: 'integer', format: 'int64' }),
        },
      }),
    },
    500: { description: '' },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getIndexPhpAvatarGuestGuestNameSizeDarkRoute = createRoute({
  method: 'get',
  path: '/index.php/avatar/guest/{guestName}/{size}/dark',
  tags: ['guest_avatar'],
  summary: 'Returns a dark guest avatar image response',
  operationId: 'guest_avatar-get-avatar-dark',
  request: {
    params: z.object({
      guestName: z
        .string()
        .openapi({
          param: {
            name: 'guestName',
            in: 'path',
            description: 'The guest name, e.g. "Albert"',
            required: true,
            schema: { type: 'string' },
          },
        }),
      size: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          },
          z.union([z.literal(64n), z.literal(512n)]),
        )
        .openapi({
          param: {
            name: 'size',
            in: 'path',
            description: 'The desired avatar size, e.g. 64 for 64x64px',
            required: true,
            schema: { type: 'integer', format: 'int64', enum: [64, 512] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Custom avatar returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
      headers: z.object({
        'X-NC-IsCustomAvatar': {
          schema: z
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
            .openapi({ param: { required: false }, type: 'integer', format: 'int64' }),
        },
      }),
    },
    201: {
      description: 'Avatar returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
      headers: z.object({
        'X-NC-IsCustomAvatar': {
          schema: z
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
            .openapi({ param: { required: false }, type: 'integer', format: 'int64' }),
        },
      }),
    },
    500: { description: '' },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postIndexPhpLoginConfirmRoute = createRoute({
  method: 'post',
  path: '/index.php/login/confirm',
  tags: ['login'],
  summary: 'Confirm the user password',
  operationId: 'login-confirm-password',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ password: z.string().openapi({ description: 'The password of the user' }) })
            .openapi({ required: ['password'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Password confirmation succeeded',
      content: {
        'application/json': {
          schema: z
            .object({
              lastLogin: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .openapi({ type: 'integer', format: 'int64' }),
            })
            .openapi({ required: ['lastLogin'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z.object({ message: z.string() }).openapi({ required: ['message'] }),
        },
      },
    },
    403: {
      description: 'Password confirmation failed',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getIndexPhpOcmProviderRoute = createRoute({
  method: 'get',
  path: '/index.php/ocm-provider',
  tags: ['ocm'],
  summary:
    'generate a OCMProvider with local data and send it as DataResponse. This replaces the old PHP file ocm-provider/index.php',
  operationId: 'ocm-discovery',
  responses: {
    200: {
      description: 'OCM Provider details returned',
      content: {
        'application/json': {
          schema: z
            .object({
              enabled: z.boolean(),
              apiVersion: z.string(),
              endPoint: z.string(),
              resourceTypes: z.array(
                z
                  .object({
                    name: z.string(),
                    shareTypes: z.array(z.string()),
                    protocols: z.object({ webdav: z.string() }).openapi({ required: ['webdav'] }),
                  })
                  .openapi({ required: ['name', 'shareTypes', 'protocols'] }),
              ),
            })
            .openapi({ required: ['enabled', 'apiVersion', 'endPoint', 'resourceTypes'] }),
        },
      },
      headers: z.object({
        'X-NEXTCLOUD-OCM-PROVIDERS': {
          schema: z
            .literal(true)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    500: {
      description: 'OCM not supported',
      content: {
        'application/json': {
          schema: z.object({ message: z.string() }).openapi({ required: ['message'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getIndexPhpCorePreviewPngRoute = createRoute({
  method: 'get',
  path: '/index.php/core/preview.png',
  tags: ['preview'],
  summary: 'Get a preview by file path',
  operationId: 'preview-get-preview',
  request: {
    query: z.object({
      file: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'file',
            in: 'query',
            description: 'Path of the file',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
      x: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(-1n))
        .default(32n)
        .exactOptional()
        .openapi({
          param: {
            name: 'x',
            in: 'query',
            description: 'Width of the preview. A width of -1 will use the original image width.',
            schema: { type: 'integer', format: 'int64', default: 32, minimum: -1 },
            required: false,
          },
        }),
      y: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(-1n))
        .default(32n)
        .exactOptional()
        .openapi({
          param: {
            name: 'y',
            in: 'query',
            description:
              'Height of the preview. A height of -1 will use the original image height.',
            schema: { type: 'integer', format: 'int64', default: 32, minimum: -1 },
            required: false,
          },
        }),
      a: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'a',
            in: 'query',
            description: 'Preserve the aspect ratio',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      forceIcon: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceIcon',
            in: 'query',
            description: 'Force returning an icon',
            schema: { type: 'boolean', default: true },
            required: false,
          },
        }),
      mode: z
        .enum(['fill', 'cover'])
        .default('fill')
        .exactOptional()
        .openapi({
          param: {
            name: 'mode',
            in: 'query',
            description: 'How to crop the image',
            schema: { type: 'string', default: 'fill', enum: ['fill', 'cover'] },
            required: false,
          },
        }),
      mimeFallback: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'mimeFallback',
            in: 'query',
            description: 'Whether to fallback to the mime icon if no preview is available',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Preview returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    303: {
      description: 'Redirect to the mime icon url if mimeFallback is true',
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Getting preview is not possible',
      content: { 'application/json': { schema: z.any() } },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z.object({ message: z.string() }).openapi({ required: ['message'] }),
        },
      },
    },
    403: {
      description: 'Getting preview is not allowed',
      content: { 'application/json': { schema: z.any() } },
    },
    404: { description: 'Preview not found', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getIndexPhpCorePreviewRoute = createRoute({
  method: 'get',
  path: '/index.php/core/preview',
  tags: ['preview'],
  summary: 'Get a preview by file ID',
  operationId: 'preview-get-preview-by-file-id',
  request: {
    query: z.object({
      fileId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'fileId',
            in: 'query',
            description: 'ID of the file',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
      x: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(-1n))
        .default(32n)
        .exactOptional()
        .openapi({
          param: {
            name: 'x',
            in: 'query',
            description: 'Width of the preview. A width of -1 will use the original image width.',
            schema: { type: 'integer', format: 'int64', default: 32, minimum: -1 },
            required: false,
          },
        }),
      y: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(-1n))
        .default(32n)
        .exactOptional()
        .openapi({
          param: {
            name: 'y',
            in: 'query',
            description:
              'Height of the preview. A height of -1 will use the original image height.',
            schema: { type: 'integer', format: 'int64', default: 32, minimum: -1 },
            required: false,
          },
        }),
      a: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'a',
            in: 'query',
            description: 'Preserve the aspect ratio',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      forceIcon: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceIcon',
            in: 'query',
            description: 'Force returning an icon',
            schema: { type: 'boolean', default: true },
            required: false,
          },
        }),
      mode: z
        .enum(['fill', 'cover'])
        .default('fill')
        .exactOptional()
        .openapi({
          param: {
            name: 'mode',
            in: 'query',
            description: 'How to crop the image',
            schema: { type: 'string', default: 'fill', enum: ['fill', 'cover'] },
            required: false,
          },
        }),
      mimeFallback: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'mimeFallback',
            in: 'query',
            description: 'Whether to fallback to the mime icon if no preview is available',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Preview returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    303: {
      description: 'Redirect to the mime icon url if mimeFallback is true',
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Getting preview is not possible',
      content: { 'application/json': { schema: z.any() } },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z.object({ message: z.string() }).openapi({ required: ['message'] }),
        },
      },
    },
    403: {
      description: 'Getting preview is not allowed',
      content: { 'application/json': { schema: z.any() } },
    },
    404: { description: 'Preview not found', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getIndexPhpCoreMimeiconRoute = createRoute({
  method: 'get',
  path: '/index.php/core/mimeicon',
  tags: ['preview'],
  summary: 'Get a preview by mime',
  operationId: 'preview-get-mime-icon-url',
  request: {
    query: z.object({
      mime: z
        .string()
        .default('application/octet-stream')
        .exactOptional()
        .openapi({
          param: {
            name: 'mime',
            in: 'query',
            description: 'Mime type',
            schema: { type: 'string', default: 'application/octet-stream' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    303: {
      description: 'The mime icon url',
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getIndexPhpCoreReferencesPreviewReferenceIdRoute = createRoute({
  method: 'get',
  path: '/index.php/core/references/preview/{referenceId}',
  tags: ['reference'],
  summary: 'Get a preview for a reference',
  operationId: 'reference-preview',
  request: {
    params: z.object({
      referenceId: z
        .string()
        .openapi({
          param: {
            name: 'referenceId',
            in: 'path',
            description: 'the reference cache key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Preview returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    404: {
      description: 'Reference not found',
      content: { 'application/json': { schema: z.string() } },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postIndexPhpCoreWipeCheckRoute = createRoute({
  method: 'post',
  path: '/index.php/core/wipe/check',
  tags: ['wipe'],
  summary: 'Check if the device should be wiped',
  operationId: 'wipe-check-wipe',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ token: z.string().openapi({ description: 'App password' }) })
            .openapi({ required: ['token'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Device should be wiped',
      content: {
        'application/json': {
          schema: z.object({ wipe: z.boolean() }).openapi({ required: ['wipe'] }),
        },
      },
    },
    404: {
      description: 'Device should not be wiped',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postIndexPhpCoreWipeSuccessRoute = createRoute({
  method: 'post',
  path: '/index.php/core/wipe/success',
  tags: ['wipe'],
  summary: 'Finish the wipe',
  operationId: 'wipe-wipe-done',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ token: z.string().openapi({ description: 'App password' }) })
            .openapi({ required: ['token'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Wipe finished successfully',
      content: { 'application/json': { schema: z.any() } },
    },
    404: {
      description: 'Device should not be wiped',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getStatusPhpRoute = createRoute({
  method: 'get',
  path: '/status.php',
  operationId: 'get-status',
  responses: {
    200: {
      description: 'Status returned',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getOcsV2PhpTaskprocessingTasksConsumerTasktypesRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/taskprocessing/tasks_consumer/tasktypes',
  tags: ['task_processing_api'],
  summary: 'Returns all available TaskProcessing task types',
  description: 'Endpoint for ExApp usage without user context\nThis endpoint requires admin access',
  operationId: 'task_processing_api-task-types-ex-app-endpoint',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task types returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ types: z.record(z.string(), TaskProcessingTaskTypeSchema) })
                    .openapi({ required: ['types'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpTaskprocessingTasksConsumerScheduleRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/taskprocessing/tasks_consumer/schedule',
  tags: ['task_processing_api'],
  summary: 'Schedules a task',
  description:
    'Endpoint for ExApp usage without user context. Files cannot be referenced in this case.\nThis endpoint requires admin access',
  operationId: 'task_processing_api-schedule-ex-app-endpoint',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              input: z
                .record(z.string(), z.object({}))
                .openapi({ description: "Task's input parameters" }),
              type: z.string().openapi({ description: 'Type of the task' }),
              appId: z
                .string()
                .openapi({ description: 'ID of the app that will execute the task' }),
              customId: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'An arbitrary identifier for the task' }),
              webhookUri: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'URI to be requested when the task finishes' }),
              webhookMethod: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description:
                    'Method used for the webhook request (HTTP:GET, HTTP:POST, HTTP:PUT, HTTP:DELETE or AppAPI:APP_ID:GET, AppAPI:APP_ID:POST...)',
                }),
              includeWatermark: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description: 'Whether to include a watermark in the output file or not',
                }),
              preferStreaming: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Whether to prefer getting a progressive output from the provider or not',
                }),
            })
            .openapi({ required: ['input', 'type', 'appId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task scheduled successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ task: TaskProcessingTaskSchema })
                    .openapi({ required: ['task'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Scheduling task is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Cannot schedule task because it references files in its input',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    412: {
      description: 'Scheduling task is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpTaskprocessingTasksConsumerTaskIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/taskprocessing/tasks_consumer/task/{id}',
  tags: ['task_processing_api'],
  summary: 'Gets a task including status and result',
  description:
    'Endpoint for ExApp usage without user context\nTasks are removed 1 week after receiving their last update\nThis endpoint requires admin access',
  operationId: 'task_processing_api-get-task-ex-app-endpoint',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The id of the task',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ task: TaskProcessingTaskSchema })
                    .openapi({ required: ['task'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Task not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpTaskprocessingTasksConsumerTaskIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/taskprocessing/tasks_consumer/task/{id}',
  tags: ['task_processing_api'],
  summary: 'Deletes a task',
  description: 'Endpoint for ExApp usage without user context\nThis endpoint requires admin access',
  operationId: 'task_processing_api-delete-task-ex-app-endpoint',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The id of the task',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task deleted',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/taskprocessing/tasks_provider/{taskId}/file/{fileId}',
  tags: ['task_processing_api'],
  summary: 'Returns the contents of a file referenced in a task(ExApp route version)',
  description: 'This endpoint requires admin access',
  operationId: 'task_processing_api-get-file-contents-ex-app',
  request: {
    params: z.object({
      taskId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'taskId',
            in: 'path',
            description: 'The id of the task',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
      fileId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'fileId',
            in: 'path',
            description: 'The file id of the file to retrieve',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'File content returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Task or file not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpTaskprocessingTasksProviderTaskIdFileRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/taskprocessing/tasks_provider/{taskId}/file',
  tags: ['task_processing_api'],
  summary: 'Upload a file so it can be referenced in a task result (ExApp route version)',
  description: "Use field 'file' for the file upload\nThis endpoint requires admin access",
  operationId: 'task_processing_api-set-file-contents-ex-app',
  request: {
    params: z.object({
      taskId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'taskId',
            in: 'path',
            description: 'The id of the task',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'File created',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      fileId: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64(),
                        )
                        .openapi({ type: 'integer', format: 'int64' }),
                    })
                    .openapi({ required: ['fileId'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'File upload failed or no file was uploaded',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Task not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpTaskprocessingTasksProviderTaskIdProgressRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/taskprocessing/tasks_provider/{taskId}/progress',
  tags: ['task_processing_api'],
  summary: 'Sets the task progress',
  description: 'This endpoint requires admin access',
  operationId: 'task_processing_api-set-progress',
  request: {
    params: z.object({
      taskId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'taskId',
            in: 'path',
            description: 'The id of the task',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ progress: z.float64().openapi({ description: 'The progress' }) })
            .openapi({ required: ['progress'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Progress updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ task: TaskProcessingTaskSchema })
                    .openapi({ required: ['task'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Task not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpTaskprocessingTasksProviderTaskIdResultRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/taskprocessing/tasks_provider/{taskId}/result',
  tags: ['task_processing_api'],
  summary: 'Sets the task result',
  description: 'This endpoint requires admin access',
  operationId: 'task_processing_api-set-result',
  request: {
    params: z.object({
      taskId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'taskId',
            in: 'path',
            description: 'The id of the task',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              output: z
                .record(z.string(), z.object({}))
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description: 'The resulting task output, files are represented by their IDs',
                }),
              errorMessage: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'An error message if the task failed' }),
              userFacingErrorMessage: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'An error message that will be shown to the user' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Result updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ task: TaskProcessingTaskSchema })
                    .openapi({ required: ['task'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Task not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpTaskprocessingTasksProviderTaskIdStreamResultRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/taskprocessing/tasks_provider/{taskId}/stream-result',
  tags: ['task_processing_api'],
  summary: 'Sets the task intermediate result while it is running',
  description: 'This endpoint requires admin access',
  operationId: 'task_processing_api-set-intermediate-result',
  request: {
    params: z.object({
      taskId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'taskId',
            in: 'path',
            description: 'The id of the task',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              output: z
                .record(z.string(), z.object({}))
                .openapi({
                  description: 'The intermediate task output, files are represented by their IDs',
                }),
            })
            .openapi({ required: ['output'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Result updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ task: TaskProcessingTaskSchema })
                    .openapi({ required: ['task'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Task not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpTaskprocessingTasksConsumerTasksTaskIdCancelRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/taskprocessing/tasks_consumer/tasks/{taskId}/cancel',
  tags: ['task_processing_api'],
  summary: 'Cancels a task',
  description: 'Endpoint for ExApp usage without user context\nThis endpoint requires admin access',
  operationId: 'task_processing_api-cancel-task-ex-app-endpoint',
  request: {
    params: z.object({
      taskId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'taskId',
            in: 'path',
            description: 'The id of the task',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task canceled successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ task: TaskProcessingTaskSchema })
                    .openapi({ required: ['task'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Task not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpTaskprocessingTasksProviderNextRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/taskprocessing/tasks_provider/next',
  tags: ['task_processing_api'],
  summary: 'Returns the next scheduled task for the taskTypeId',
  description: 'This endpoint requires admin access',
  operationId: 'task_processing_api-get-next-scheduled-task',
  request: {
    query: z.object({
      'providerIds[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'providerIds[]',
            in: 'query',
            description: 'The ids of the providers',
            required: true,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      'taskTypeIds[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'taskTypeIds[]',
            in: 'query',
            description: 'The ids of the task types',
            required: true,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      task: TaskProcessingTaskSchema,
                      provider: z.object({ name: z.string() }).openapi({ required: ['name'] }),
                    })
                    .openapi({ required: ['task', 'provider'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    204: { description: 'No task found' },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpTaskprocessingTasksProviderNextBatchRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/taskprocessing/tasks_provider/next_batch',
  tags: ['task_processing_api'],
  summary:
    'Returns the next n scheduled tasks for the specified set of taskTypes and providers The returned tasks are capped at ~50MiB',
  description: 'This endpoint requires admin access',
  operationId: 'task_processing_api-get-next-scheduled-task-batch',
  request: {
    query: z.object({
      'providerIds[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'providerIds[]',
            in: 'query',
            description: 'The ids of the providers',
            required: true,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      'taskTypeIds[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'taskTypeIds[]',
            in: 'query',
            description: 'The ids of the task types',
            required: true,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      numberOfTasks: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            name: 'numberOfTasks',
            in: 'query',
            description: 'The number of tasks to return',
            schema: { type: 'integer', format: 'int64', default: 1 },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Tasks returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      tasks: z.array(
                        z
                          .object({ task: TaskProcessingTaskSchema, provider: z.string() })
                          .openapi({ required: ['task', 'provider'] }),
                      ),
                      has_more: z.boolean(),
                    })
                    .openapi({ required: ['tasks', 'has_more'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpTaskprocessingQueueStatsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/taskprocessing/queue_stats',
  tags: ['task_processing_api'],
  summary: 'Returns queue statistics for task processing',
  description:
    'Returns the count of scheduled and running tasks, optionally filtered by task type(s). Designed for external scalers (e.g. KEDA) to poll for task queue depth. Admin-only endpoint authenticated via app_password.\nThis endpoint requires admin access',
  operationId: 'task_processing_api-queue-stats',
  request: {
    query: z.object({
      'taskTypeIds[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'taskTypeIds[]',
            in: 'query',
            description: 'List of task type IDs to filter by',
            schema: { type: 'array', default: [], items: { type: 'string' } },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Queue stats returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      scheduled_count: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64(),
                        )
                        .openapi({ type: 'integer', format: 'int64' }),
                      running_count: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64(),
                        )
                        .openapi({ type: 'integer', format: 'int64' }),
                    })
                    .openapi({ required: ['scheduled_count', 'running_count'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpTwofactorStateRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/twofactor/state',
  tags: ['two_factor_api'],
  summary: 'Get two factor authentication provider states',
  description: 'This endpoint requires admin access',
  operationId: 'two_factor_api-state',
  request: {
    query: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'query',
            description: 'system user id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'provider states',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.record(z.string(), z.boolean()) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'user not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpTwofactorEnableRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/twofactor/enable',
  tags: ['two_factor_api'],
  summary: 'Enable two factor authentication providers for specific user',
  description: 'This endpoint requires admin access\nThis endpoint requires password confirmation',
  operationId: 'two_factor_api-enable',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              user: z.string().openapi({ description: 'system user identifier' }),
              providers: z
                .array(z.string())
                .default([])
                .exactOptional()
                .openapi({ description: 'collection of TFA provider ids' }),
            })
            .openapi({ required: ['user'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'provider states',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.record(z.string(), z.boolean()) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'user not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpTwofactorDisableRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/twofactor/disable',
  tags: ['two_factor_api'],
  summary: 'Disable two factor authentication providers for specific user',
  description: 'This endpoint requires admin access\nThis endpoint requires password confirmation',
  operationId: 'two_factor_api-disable',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              user: z.string().openapi({ description: 'system user identifier' }),
              providers: z
                .array(z.string())
                .default([])
                .exactOptional()
                .openapi({ description: 'collection of TFA provider ids' }),
            })
            .openapi({ required: ['user'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'provider states',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.record(z.string(), z.boolean()) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'user not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})
