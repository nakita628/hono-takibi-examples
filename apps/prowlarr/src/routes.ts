import { createRoute, z } from '@hono/zod-openapi'

const SelectOptionSchema = z
  .strictObject({
    value: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    order: z.int32().exactOptional(),
    hint: z.string().nullable().exactOptional(),
    parentValue: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SelectOption')

const PrivacyLevelSchema = z
  .enum(['normal', 'password', 'apiKey', 'userName'])
  .openapi('PrivacyLevel')

const FieldSchema = z
  .strictObject({
    order: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    label: z.string().nullable().exactOptional(),
    unit: z.string().nullable().exactOptional(),
    helpText: z.string().nullable().exactOptional(),
    helpTextWarning: z.string().nullable().exactOptional(),
    helpLink: z.string().nullable().exactOptional(),
    value: z.any().nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
    advanced: z.boolean().exactOptional(),
    selectOptions: z.array(SelectOptionSchema).nullable().exactOptional(),
    selectOptionsProviderAction: z.string().nullable().exactOptional(),
    section: z.string().nullable().exactOptional(),
    hidden: z.string().nullable().exactOptional(),
    privacy: PrivacyLevelSchema.exactOptional(),
    placeholder: z.string().nullable().exactOptional(),
    isFloat: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Field')

const ProviderMessageTypeSchema = z
  .enum(['info', 'warning', 'error'])
  .openapi('ProviderMessageType')

const ProviderMessageSchema = z
  .strictObject({
    message: z.string().nullable().exactOptional(),
    type: ProviderMessageTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProviderMessage')

const ApplicationSyncLevelSchema = z
  .enum(['disabled', 'addOnly', 'fullSync'])
  .openapi('ApplicationSyncLevel')

type ApplicationResourceType = {
  id?: number
  name?: string | null
  fields?: z.infer<typeof FieldSchema>[] | null
  implementationName?: string | null
  implementation?: string | null
  configContract?: string | null
  infoLink?: string | null
  message?: z.infer<typeof ProviderMessageSchema>
  tags?: number[] | null
  presets?: ApplicationResourceType[] | null
  syncLevel?: z.infer<typeof ApplicationSyncLevelSchema>
  testCommand?: string | null
}

const DownloadProtocolSchema = z.enum(['unknown', 'usenet', 'torrent']).openapi('DownloadProtocol')

const DownloadClientCategorySchema = z
  .strictObject({
    clientCategory: z.string().nullable().exactOptional(),
    categories: z.array(z.int32()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DownloadClientCategory')

type DownloadClientResourceType = {
  id?: number
  name?: string | null
  fields?: z.infer<typeof FieldSchema>[] | null
  implementationName?: string | null
  implementation?: string | null
  configContract?: string | null
  infoLink?: string | null
  message?: z.infer<typeof ProviderMessageSchema>
  tags?: number[] | null
  presets?: DownloadClientResourceType[] | null
  enable?: boolean
  protocol?: z.infer<typeof DownloadProtocolSchema>
  priority?: number
  categories?: z.infer<typeof DownloadClientCategorySchema>[] | null
  supportsCategories?: boolean
}

type IndexerCategoryType = {
  id?: number
  name?: string | null
  description?: string | null
  subCategories?: IndexerCategoryType[] | null
}

type IndexerProxyResourceType = {
  id?: number
  name?: string | null
  fields?: z.infer<typeof FieldSchema>[] | null
  implementationName?: string | null
  implementation?: string | null
  configContract?: string | null
  infoLink?: string | null
  message?: z.infer<typeof ProviderMessageSchema>
  tags?: number[] | null
  presets?: IndexerProxyResourceType[] | null
  link?: string | null
  onHealthIssue?: boolean
  supportsOnHealthIssue?: boolean
  includeHealthWarnings?: boolean
  testCommand?: string | null
}

const IndexerPrivacySchema = z.enum(['public', 'semiPrivate', 'private']).openapi('IndexerPrivacy')

const IndexerCategorySchema: z.ZodType<IndexerCategoryType> = z
  .lazy(() =>
    z
      .strictObject({
        id: z.int32().exactOptional(),
        name: z.string().nullable().exactOptional(),
        description: z.string().nullable().exactOptional(),
        subCategories: z
          .array(IndexerCategorySchema)
          .nullable()
          .exactOptional()
          .openapi({ readOnly: true }),
      })
      .openapi({ required: [] }),
  )
  .openapi('IndexerCategory')

const SearchParamSchema = z.literal('q').openapi('SearchParam')

const TvSearchParamSchema = z
  .enum([
    'q',
    'season',
    'ep',
    'imdbId',
    'tvdbId',
    'rId',
    'tvMazeId',
    'traktId',
    'tmdbId',
    'doubanId',
    'genre',
    'year',
  ])
  .openapi('TvSearchParam')

const MovieSearchParamSchema = z
  .enum(['q', 'imdbId', 'tmdbId', 'imdbTitle', 'imdbYear', 'traktId', 'genre', 'doubanId', 'year'])
  .openapi('MovieSearchParam')

const MusicSearchParamSchema = z
  .enum(['q', 'album', 'artist', 'label', 'year', 'genre', 'track'])
  .openapi('MusicSearchParam')

const BookSearchParamSchema = z
  .enum(['q', 'title', 'author', 'publisher', 'genre', 'year'])
  .openapi('BookSearchParam')

const IndexerCapabilityResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    limitsMax: z.int32().nullable().exactOptional(),
    limitsDefault: z.int32().nullable().exactOptional(),
    categories: z.array(IndexerCategorySchema).nullable().exactOptional(),
    supportsRawSearch: z.boolean().exactOptional(),
    searchParams: z.array(SearchParamSchema).nullable().exactOptional(),
    tvSearchParams: z.array(TvSearchParamSchema).nullable().exactOptional(),
    movieSearchParams: z.array(MovieSearchParamSchema).nullable().exactOptional(),
    musicSearchParams: z.array(MusicSearchParamSchema).nullable().exactOptional(),
    bookSearchParams: z.array(BookSearchParamSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IndexerCapabilityResource')

const IndexerStatusResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    indexerId: z.int32().exactOptional(),
    disabledTill: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    mostRecentFailure: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    initialFailure: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IndexerStatusResource')

type IndexerResourceType = {
  id?: number
  name?: string | null
  fields?: z.infer<typeof FieldSchema>[] | null
  implementationName?: string | null
  implementation?: string | null
  configContract?: string | null
  infoLink?: string | null
  message?: z.infer<typeof ProviderMessageSchema>
  tags?: number[] | null
  presets?: IndexerResourceType[] | null
  indexerUrls?: string[] | null
  legacyUrls?: string[] | null
  definitionName?: string | null
  description?: string | null
  language?: string | null
  encoding?: string | null
  enable?: boolean
  redirect?: boolean
  supportsRss?: boolean
  supportsSearch?: boolean
  supportsRedirect?: boolean
  supportsPagination?: boolean
  appProfileId?: number
  protocol?: z.infer<typeof DownloadProtocolSchema>
  privacy?: z.infer<typeof IndexerPrivacySchema>
  capabilities?: z.infer<typeof IndexerCapabilityResourceSchema>
  priority?: number
  downloadClientId?: number
  added?: string
  status?: z.infer<typeof IndexerStatusResourceSchema>
  sortName?: string | null
}

type NotificationResourceType = {
  id?: number
  name?: string | null
  fields?: z.infer<typeof FieldSchema>[] | null
  implementationName?: string | null
  implementation?: string | null
  configContract?: string | null
  infoLink?: string | null
  message?: z.infer<typeof ProviderMessageSchema>
  tags?: number[] | null
  presets?: NotificationResourceType[] | null
  link?: string | null
  onGrab?: boolean
  onHealthIssue?: boolean
  onHealthRestored?: boolean
  onApplicationUpdate?: boolean
  supportsOnGrab?: boolean
  includeManualGrabs?: boolean
  supportsOnHealthIssue?: boolean
  supportsOnHealthRestored?: boolean
  includeHealthWarnings?: boolean
  supportsOnApplicationUpdate?: boolean
  testCommand?: string | null
}

const ApiInfoResourceSchema = z
  .strictObject({
    current: z.string().nullable().exactOptional(),
    deprecated: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiInfoResource')

const AppProfileResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    enableRss: z.boolean().exactOptional(),
    enableAutomaticSearch: z.boolean().exactOptional(),
    enableInteractiveSearch: z.boolean().exactOptional(),
    minimumSeeders: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppProfileResource')

const ApplyTagsSchema = z.enum(['add', 'remove', 'replace']).openapi('ApplyTags')

const ApplicationBulkResourceSchema = z
  .strictObject({
    ids: z.array(z.int32()).nullable().exactOptional(),
    tags: z.array(z.int32()).nullable().exactOptional(),
    applyTags: ApplyTagsSchema.exactOptional(),
    syncLevel: ApplicationSyncLevelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApplicationBulkResource')

const ApplicationResourceSchema: z.ZodType<ApplicationResourceType> = z
  .lazy(() =>
    z
      .strictObject({
        id: z.int32().exactOptional(),
        name: z.string().nullable().exactOptional(),
        fields: z.array(FieldSchema).nullable().exactOptional(),
        implementationName: z.string().nullable().exactOptional(),
        implementation: z.string().nullable().exactOptional(),
        configContract: z.string().nullable().exactOptional(),
        infoLink: z.string().nullable().exactOptional(),
        message: ProviderMessageSchema.exactOptional(),
        tags: z
          .array(z.int32())
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .nullable()
          .exactOptional(),
        presets: z.array(ApplicationResourceSchema).nullable().exactOptional(),
        syncLevel: ApplicationSyncLevelSchema.exactOptional(),
        testCommand: z.string().nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ApplicationResource')

const AuthenticationRequiredTypeSchema = z
  .enum(['enabled', 'disabledForLocalAddresses'])
  .openapi('AuthenticationRequiredType')

const AuthenticationTypeSchema = z
  .enum(['none', 'basic', 'forms', 'external'])
  .openapi('AuthenticationType')

const BackupTypeSchema = z.enum(['scheduled', 'manual', 'update']).openapi('BackupType')

const BackupResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    path: z.string().nullable().exactOptional(),
    type: BackupTypeSchema.exactOptional(),
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
      .openapi({ type: 'integer', format: 'int64' }),
    time: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BackupResource')

const CertificateValidationTypeSchema = z
  .enum(['enabled', 'disabledForLocalAddresses', 'disabled'])
  .openapi('CertificateValidationType')

const CommandTriggerSchema = z
  .enum(['unspecified', 'manual', 'scheduled'])
  .openapi('CommandTrigger')

const CommandSchema = z
  .strictObject({
    sendUpdatesToClient: z.boolean().exactOptional(),
    updateScheduledTask: z.boolean().exactOptional().openapi({ readOnly: true }),
    completionMessage: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    requiresDiskAccess: z.boolean().exactOptional().openapi({ readOnly: true }),
    isExclusive: z.boolean().exactOptional().openapi({ readOnly: true }),
    isTypeExclusive: z.boolean().exactOptional().openapi({ readOnly: true }),
    name: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    lastExecutionTime: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    lastStartTime: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    trigger: CommandTriggerSchema.exactOptional(),
    suppressMessages: z.boolean().exactOptional(),
    clientUserAgent: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Command')

const CommandPrioritySchema = z.enum(['normal', 'high', 'low']).openapi('CommandPriority')

const CommandStatusSchema = z
  .enum(['queued', 'started', 'completed', 'failed', 'aborted', 'cancelled', 'orphaned'])
  .openapi('CommandStatus')

const CommandResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    commandName: z.string().nullable().exactOptional(),
    message: z.string().nullable().exactOptional(),
    body: CommandSchema.exactOptional(),
    priority: CommandPrioritySchema.exactOptional(),
    status: CommandStatusSchema.exactOptional(),
    queued: z.iso.datetime({ offset: true }).exactOptional(),
    started: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    ended: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    duration: z.string().nullable().exactOptional(),
    exception: z.string().nullable().exactOptional(),
    trigger: CommandTriggerSchema.exactOptional(),
    clientUserAgent: z.string().nullable().exactOptional(),
    stateChangeTime: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    sendUpdatesToClient: z.boolean().exactOptional(),
    updateScheduledTask: z.boolean().exactOptional(),
    lastExecutionTime: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CommandResource')

const CustomFilterResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    type: z.string().nullable().exactOptional(),
    label: z.string().nullable().exactOptional(),
    filters: z.array(z.record(z.string(), z.any())).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomFilterResource')

const DatabaseTypeSchema = z.enum(['sqLite', 'postgreSQL']).openapi('DatabaseType')

const DevelopmentConfigResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    consoleLogLevel: z.string().nullable().exactOptional(),
    logSql: z.boolean().exactOptional(),
    logIndexerResponse: z.boolean().exactOptional(),
    logRotate: z.int32().exactOptional(),
    filterSentryEvents: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DevelopmentConfigResource')

const DownloadClientBulkResourceSchema = z
  .strictObject({
    ids: z.array(z.int32()).nullable().exactOptional(),
    tags: z.array(z.int32()).nullable().exactOptional(),
    applyTags: ApplyTagsSchema.exactOptional(),
    enable: z.boolean().nullable().exactOptional(),
    priority: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DownloadClientBulkResource')

const DownloadClientConfigResourceSchema = z
  .strictObject({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('DownloadClientConfigResource')

const DownloadClientResourceSchema: z.ZodType<DownloadClientResourceType> = z
  .lazy(() =>
    z
      .strictObject({
        id: z.int32().exactOptional(),
        name: z.string().nullable().exactOptional(),
        fields: z.array(FieldSchema).nullable().exactOptional(),
        implementationName: z.string().nullable().exactOptional(),
        implementation: z.string().nullable().exactOptional(),
        configContract: z.string().nullable().exactOptional(),
        infoLink: z.string().nullable().exactOptional(),
        message: ProviderMessageSchema.exactOptional(),
        tags: z
          .array(z.int32())
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .nullable()
          .exactOptional(),
        presets: z.array(DownloadClientResourceSchema).nullable().exactOptional(),
        enable: z.boolean().exactOptional(),
        protocol: DownloadProtocolSchema.exactOptional(),
        priority: z.int32().exactOptional(),
        categories: z.array(DownloadClientCategorySchema).nullable().exactOptional(),
        supportsCategories: z.boolean().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('DownloadClientResource')

const HealthCheckResultSchema = z
  .enum(['ok', 'notice', 'warning', 'error'])
  .openapi('HealthCheckResult')

const HealthResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    source: z.string().nullable().exactOptional(),
    type: HealthCheckResultSchema.exactOptional(),
    message: z.string().nullable().exactOptional(),
    wikiUrl: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HealthResource')

const HistoryEventTypeSchema = z
  .enum(['unknown', 'releaseGrabbed', 'indexerQuery', 'indexerRss', 'indexerAuth', 'indexerInfo'])
  .openapi('HistoryEventType')

const HistoryResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    indexerId: z.int32().exactOptional(),
    date: z.iso.datetime({ offset: true }).exactOptional(),
    downloadId: z.string().nullable().exactOptional(),
    successful: z.boolean().exactOptional(),
    eventType: HistoryEventTypeSchema.exactOptional(),
    data: z.record(z.string(), z.string().nullable()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HistoryResource')

const SortDirectionSchema = z.enum(['default', 'ascending', 'descending']).openapi('SortDirection')

const HistoryResourcePagingResourceSchema = z
  .strictObject({
    page: z.int32().exactOptional(),
    pageSize: z.int32().exactOptional(),
    sortKey: z.string().nullable().exactOptional(),
    sortDirection: SortDirectionSchema.exactOptional(),
    totalRecords: z.int32().exactOptional(),
    records: z.array(HistoryResourceSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HistoryResourcePagingResource')

const UpdateMechanismSchema = z
  .enum(['builtIn', 'script', 'external', 'apt', 'docker'])
  .openapi('UpdateMechanism')

const ProxyTypeSchema = z.enum(['http', 'socks4', 'socks5']).openapi('ProxyType')

const HostConfigResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    bindAddress: z.string().nullable().exactOptional(),
    port: z.int32().exactOptional(),
    sslPort: z.int32().exactOptional(),
    enableSsl: z.boolean().exactOptional(),
    launchBrowser: z.boolean().exactOptional(),
    authenticationMethod: AuthenticationTypeSchema.exactOptional(),
    authenticationRequired: AuthenticationRequiredTypeSchema.exactOptional(),
    analyticsEnabled: z.boolean().exactOptional(),
    username: z.string().nullable().exactOptional(),
    password: z.string().nullable().exactOptional(),
    passwordConfirmation: z.string().nullable().exactOptional(),
    logLevel: z.string().nullable().exactOptional(),
    logSizeLimit: z.int32().exactOptional(),
    consoleLogLevel: z.string().nullable().exactOptional(),
    branch: z.string().nullable().exactOptional(),
    apiKey: z.string().nullable().exactOptional(),
    sslCertPath: z.string().nullable().exactOptional(),
    sslCertPassword: z.string().nullable().exactOptional(),
    urlBase: z.string().nullable().exactOptional(),
    instanceName: z.string().nullable().exactOptional(),
    applicationUrl: z.string().nullable().exactOptional(),
    updateAutomatically: z.boolean().exactOptional(),
    updateMechanism: UpdateMechanismSchema.exactOptional(),
    updateScriptPath: z.string().nullable().exactOptional(),
    proxyEnabled: z.boolean().exactOptional(),
    proxyType: ProxyTypeSchema.exactOptional(),
    proxyHostname: z.string().nullable().exactOptional(),
    proxyPort: z.int32().exactOptional(),
    proxyUsername: z.string().nullable().exactOptional(),
    proxyPassword: z.string().nullable().exactOptional(),
    proxyBypassFilter: z.string().nullable().exactOptional(),
    proxyBypassLocalAddresses: z.boolean().exactOptional(),
    certificateValidation: CertificateValidationTypeSchema.exactOptional(),
    backupFolder: z.string().nullable().exactOptional(),
    backupInterval: z.int32().exactOptional(),
    backupRetention: z.int32().exactOptional(),
    historyCleanupDays: z.int32().exactOptional(),
    trustCgnatIpAddresses: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HostConfigResource')

const HostStatisticsSchema = z
  .strictObject({
    host: z.string().nullable().exactOptional(),
    numberOfQueries: z.int32().exactOptional(),
    numberOfGrabs: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HostStatistics')

const IActionResultSchema = z.strictObject({}).openapi('IActionResult')

const IndexerBulkResourceSchema = z
  .strictObject({
    ids: z.array(z.int32()).nullable().exactOptional(),
    tags: z.array(z.int32()).nullable().exactOptional(),
    applyTags: ApplyTagsSchema.exactOptional(),
    enable: z.boolean().nullable().exactOptional(),
    appProfileId: z.int32().nullable().exactOptional(),
    priority: z.int32().nullable().exactOptional(),
    minimumSeeders: z.int32().nullable().exactOptional(),
    seedRatio: z.float64().nullable().exactOptional(),
    seedTime: z.int32().nullable().exactOptional(),
    packSeedTime: z.int32().nullable().exactOptional(),
    preferMagnetUrl: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IndexerBulkResource')

const IndexerProxyResourceSchema: z.ZodType<IndexerProxyResourceType> = z
  .lazy(() =>
    z
      .strictObject({
        id: z.int32().exactOptional(),
        name: z.string().nullable().exactOptional(),
        fields: z.array(FieldSchema).nullable().exactOptional(),
        implementationName: z.string().nullable().exactOptional(),
        implementation: z.string().nullable().exactOptional(),
        configContract: z.string().nullable().exactOptional(),
        infoLink: z.string().nullable().exactOptional(),
        message: ProviderMessageSchema.exactOptional(),
        tags: z
          .array(z.int32())
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .nullable()
          .exactOptional(),
        presets: z.array(IndexerProxyResourceSchema).nullable().exactOptional(),
        link: z.string().nullable().exactOptional(),
        onHealthIssue: z.boolean().exactOptional(),
        supportsOnHealthIssue: z.boolean().exactOptional(),
        includeHealthWarnings: z.boolean().exactOptional(),
        testCommand: z.string().nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('IndexerProxyResource')

const IndexerResourceSchema: z.ZodType<IndexerResourceType> = z
  .lazy(() =>
    z
      .strictObject({
        id: z.int32().exactOptional(),
        name: z.string().nullable().exactOptional(),
        fields: z.array(FieldSchema).nullable().exactOptional(),
        implementationName: z.string().nullable().exactOptional(),
        implementation: z.string().nullable().exactOptional(),
        configContract: z.string().nullable().exactOptional(),
        infoLink: z.string().nullable().exactOptional(),
        message: ProviderMessageSchema.exactOptional(),
        tags: z
          .array(z.int32())
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .nullable()
          .exactOptional(),
        presets: z.array(IndexerResourceSchema).nullable().exactOptional(),
        indexerUrls: z.array(z.string()).nullable().exactOptional(),
        legacyUrls: z.array(z.string()).nullable().exactOptional(),
        definitionName: z.string().nullable().exactOptional(),
        description: z.string().nullable().exactOptional(),
        language: z.string().nullable().exactOptional(),
        encoding: z.string().nullable().exactOptional(),
        enable: z.boolean().exactOptional(),
        redirect: z.boolean().exactOptional(),
        supportsRss: z.boolean().exactOptional(),
        supportsSearch: z.boolean().exactOptional(),
        supportsRedirect: z.boolean().exactOptional(),
        supportsPagination: z.boolean().exactOptional(),
        appProfileId: z.int32().exactOptional(),
        protocol: DownloadProtocolSchema.exactOptional(),
        privacy: IndexerPrivacySchema.exactOptional(),
        capabilities: IndexerCapabilityResourceSchema.exactOptional(),
        priority: z.int32().exactOptional(),
        downloadClientId: z.int32().exactOptional(),
        added: z.iso.datetime({ offset: true }).exactOptional(),
        status: IndexerStatusResourceSchema.exactOptional(),
        sortName: z.string().nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('IndexerResource')

const IndexerStatisticsSchema = z
  .strictObject({
    indexerId: z.int32().exactOptional(),
    indexerName: z.string().nullable().exactOptional(),
    averageResponseTime: z.int32().exactOptional(),
    averageGrabResponseTime: z.int32().exactOptional(),
    numberOfQueries: z.int32().exactOptional(),
    numberOfGrabs: z.int32().exactOptional(),
    numberOfRssQueries: z.int32().exactOptional(),
    numberOfAuthQueries: z.int32().exactOptional(),
    numberOfFailedQueries: z.int32().exactOptional(),
    numberOfFailedGrabs: z.int32().exactOptional(),
    numberOfFailedRssQueries: z.int32().exactOptional(),
    numberOfFailedAuthQueries: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IndexerStatistics')

const UserAgentStatisticsSchema = z
  .strictObject({
    userAgent: z.string().nullable().exactOptional(),
    numberOfQueries: z.int32().exactOptional(),
    numberOfGrabs: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserAgentStatistics')

const IndexerStatsResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    indexers: z.array(IndexerStatisticsSchema).nullable().exactOptional(),
    userAgents: z.array(UserAgentStatisticsSchema).nullable().exactOptional(),
    hosts: z.array(HostStatisticsSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IndexerStatsResource')

const LocalizationOptionSchema = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocalizationOption')

const LogFileResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    filename: z.string().nullable().exactOptional(),
    lastWriteTime: z.iso.datetime({ offset: true }).exactOptional(),
    contentsUrl: z.string().nullable().exactOptional(),
    downloadUrl: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LogFileResource')

const LogResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    time: z.iso.datetime({ offset: true }).exactOptional(),
    exception: z.string().nullable().exactOptional(),
    exceptionType: z.string().nullable().exactOptional(),
    level: z.string().nullable().exactOptional(),
    logger: z.string().nullable().exactOptional(),
    message: z.string().nullable().exactOptional(),
    method: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LogResource')

const LogResourcePagingResourceSchema = z
  .strictObject({
    page: z.int32().exactOptional(),
    pageSize: z.int32().exactOptional(),
    sortKey: z.string().nullable().exactOptional(),
    sortDirection: SortDirectionSchema.exactOptional(),
    totalRecords: z.int32().exactOptional(),
    records: z.array(LogResourceSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LogResourcePagingResource')

const NotificationResourceSchema: z.ZodType<NotificationResourceType> = z
  .lazy(() =>
    z
      .strictObject({
        id: z.int32().exactOptional(),
        name: z.string().nullable().exactOptional(),
        fields: z.array(FieldSchema).nullable().exactOptional(),
        implementationName: z.string().nullable().exactOptional(),
        implementation: z.string().nullable().exactOptional(),
        configContract: z.string().nullable().exactOptional(),
        infoLink: z.string().nullable().exactOptional(),
        message: ProviderMessageSchema.exactOptional(),
        tags: z
          .array(z.int32())
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .nullable()
          .exactOptional(),
        presets: z.array(NotificationResourceSchema).nullable().exactOptional(),
        link: z.string().nullable().exactOptional(),
        onGrab: z.boolean().exactOptional(),
        onHealthIssue: z.boolean().exactOptional(),
        onHealthRestored: z.boolean().exactOptional(),
        onApplicationUpdate: z.boolean().exactOptional(),
        supportsOnGrab: z.boolean().exactOptional(),
        includeManualGrabs: z.boolean().exactOptional(),
        supportsOnHealthIssue: z.boolean().exactOptional(),
        supportsOnHealthRestored: z.boolean().exactOptional(),
        includeHealthWarnings: z.boolean().exactOptional(),
        supportsOnApplicationUpdate: z.boolean().exactOptional(),
        testCommand: z.string().nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('NotificationResource')

const PingResourceSchema = z
  .strictObject({ status: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('PingResource')

const ReleaseResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    guid: z.string().nullable().exactOptional(),
    age: z.int32().exactOptional(),
    ageHours: z.float64().exactOptional(),
    ageMinutes: z.float64().exactOptional(),
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
      .openapi({ type: 'integer', format: 'int64' }),
    files: z.int32().nullable().exactOptional(),
    grabs: z.int32().nullable().exactOptional(),
    indexerId: z.int32().exactOptional(),
    indexer: z.string().nullable().exactOptional(),
    subGroup: z.string().nullable().exactOptional(),
    releaseHash: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    sortTitle: z.string().nullable().exactOptional(),
    imdbId: z.int32().exactOptional(),
    tmdbId: z.int32().exactOptional(),
    tvdbId: z.int32().exactOptional(),
    tvMazeId: z.int32().exactOptional(),
    publishDate: z.iso.datetime({ offset: true }).exactOptional(),
    commentUrl: z.string().nullable().exactOptional(),
    downloadUrl: z.string().nullable().exactOptional(),
    infoUrl: z.string().nullable().exactOptional(),
    posterUrl: z.string().nullable().exactOptional(),
    indexerFlags: z.array(z.string()).nullable().exactOptional(),
    categories: z.array(IndexerCategorySchema).nullable().exactOptional(),
    magnetUrl: z.string().nullable().exactOptional(),
    infoHash: z.string().nullable().exactOptional(),
    seeders: z.int32().nullable().exactOptional(),
    leechers: z.int32().nullable().exactOptional(),
    protocol: DownloadProtocolSchema.exactOptional(),
    fileName: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    downloadClientId: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReleaseResource')

const RuntimeModeSchema = z.enum(['console', 'service', 'tray']).openapi('RuntimeMode')

const SystemResourceSchema = z
  .strictObject({
    appName: z.string().nullable().exactOptional(),
    instanceName: z.string().nullable().exactOptional(),
    version: z.string().nullable().exactOptional(),
    buildTime: z.iso.datetime({ offset: true }).exactOptional(),
    isDebug: z.boolean().exactOptional(),
    isProduction: z.boolean().exactOptional(),
    isAdmin: z.boolean().exactOptional(),
    isUserInteractive: z.boolean().exactOptional(),
    startupPath: z.string().nullable().exactOptional(),
    appData: z.string().nullable().exactOptional(),
    osName: z.string().nullable().exactOptional(),
    osVersion: z.string().nullable().exactOptional(),
    isNetCore: z.boolean().exactOptional(),
    isLinux: z.boolean().exactOptional(),
    isOsx: z.boolean().exactOptional(),
    isWindows: z.boolean().exactOptional(),
    isDocker: z.boolean().exactOptional(),
    mode: RuntimeModeSchema.exactOptional(),
    branch: z.string().nullable().exactOptional(),
    databaseType: DatabaseTypeSchema.exactOptional(),
    databaseVersion: z.string().nullable().exactOptional(),
    authentication: AuthenticationTypeSchema.exactOptional(),
    migrationVersion: z.int32().exactOptional(),
    urlBase: z.string().nullable().exactOptional(),
    runtimeVersion: z.string().nullable().exactOptional(),
    runtimeName: z.string().nullable().exactOptional(),
    startTime: z.iso.datetime({ offset: true }).exactOptional(),
    packageVersion: z.string().nullable().exactOptional(),
    packageAuthor: z.string().nullable().exactOptional(),
    packageUpdateMechanism: UpdateMechanismSchema.exactOptional(),
    packageUpdateMechanismMessage: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SystemResource')

const TagDetailsResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    label: z.string().nullable().exactOptional(),
    notificationIds: z.array(z.int32()).nullable().exactOptional(),
    indexerIds: z.array(z.int32()).nullable().exactOptional(),
    indexerProxyIds: z.array(z.int32()).nullable().exactOptional(),
    applicationIds: z.array(z.int32()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagDetailsResource')

const TagResourceSchema = z
  .strictObject({ id: z.int32().exactOptional(), label: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('TagResource')

const TaskResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    taskName: z.string().nullable().exactOptional(),
    interval: z.int32().exactOptional(),
    lastExecution: z.iso.datetime({ offset: true }).exactOptional(),
    lastStartTime: z.iso.datetime({ offset: true }).exactOptional(),
    nextExecution: z.iso.datetime({ offset: true }).exactOptional(),
    lastDuration: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('TaskResource')

const UiConfigResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    firstDayOfWeek: z.int32().exactOptional(),
    calendarWeekColumnHeader: z.string().nullable().exactOptional(),
    shortDateFormat: z.string().nullable().exactOptional(),
    longDateFormat: z.string().nullable().exactOptional(),
    timeFormat: z.string().nullable().exactOptional(),
    showRelativeDates: z.boolean().exactOptional(),
    enableColorImpairedMode: z.boolean().exactOptional(),
    uiLanguage: z.string().nullable().exactOptional(),
    theme: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UiConfigResource')

const UpdateChangesSchema = z
  .strictObject({
    new: z.array(z.string()).nullable().exactOptional(),
    fixed: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateChanges')

const UpdateResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    version: z.string().nullable().exactOptional(),
    branch: z.string().nullable().exactOptional(),
    releaseDate: z.iso.datetime({ offset: true }).exactOptional(),
    fileName: z.string().nullable().exactOptional(),
    url: z.string().nullable().exactOptional(),
    installed: z.boolean().exactOptional(),
    installedOn: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    installable: z.boolean().exactOptional(),
    latest: z.boolean().exactOptional(),
    changes: UpdateChangesSchema.exactOptional(),
    hash: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateResource')

const XApiKeySecurityScheme = {
  type: 'apiKey',
  description: 'Apikey passed as header',
  name: 'X-Api-Key',
  in: 'header',
}

const ApikeySecurityScheme = {
  type: 'apiKey',
  description: 'Apikey passed as query parameter',
  name: 'apikey',
  in: 'query',
}

export const getApiRoute = createRoute({
  method: 'get',
  path: '/api',
  tags: ['ApiInfo'],
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ApiInfoResourceSchema } } },
  },
})

export const getApiV1ApplicationsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/applications/{id}',
  tags: ['Application'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ApplicationResourceSchema } },
    },
  },
})

export const putApiV1ApplicationsIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/applications/{id}',
  tags: ['Application'],
  request: {
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: ApplicationResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ApplicationResourceSchema } },
    },
  },
})

export const deleteApiV1ApplicationsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/applications/{id}',
  tags: ['Application'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1ApplicationsRoute = createRoute({
  method: 'get',
  path: '/api/v1/applications',
  tags: ['Application'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ApplicationResourceSchema) } },
    },
  },
})

export const postApiV1ApplicationsRoute = createRoute({
  method: 'post',
  path: '/api/v1/applications',
  tags: ['Application'],
  request: {
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ApplicationResourceSchema } },
    },
  },
})

export const putApiV1ApplicationsBulkRoute = createRoute({
  method: 'put',
  path: '/api/v1/applications/bulk',
  tags: ['Application'],
  request: { body: { content: { 'application/json': { schema: ApplicationBulkResourceSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ApplicationResourceSchema } },
    },
  },
})

export const deleteApiV1ApplicationsBulkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/applications/bulk',
  tags: ['Application'],
  request: { body: { content: { 'application/json': { schema: ApplicationBulkResourceSchema } } } },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1ApplicationsSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v1/applications/schema',
  tags: ['Application'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ApplicationResourceSchema) } },
    },
  },
})

export const postApiV1ApplicationsTestRoute = createRoute({
  method: 'post',
  path: '/api/v1/applications/test',
  tags: ['Application'],
  request: {
    query: z.object({
      forceTest: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceTest',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationResourceSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiV1ApplicationsTestallRoute = createRoute({
  method: 'post',
  path: '/api/v1/applications/testall',
  tags: ['Application'],
  responses: { 200: { description: 'OK' } },
})

export const postApiV1ApplicationsActionNameRoute = createRoute({
  method: 'post',
  path: '/api/v1/applications/action/{name}',
  tags: ['Application'],
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationResourceSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1AppprofileRoute = createRoute({
  method: 'get',
  path: '/api/v1/appprofile',
  tags: ['AppProfile'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AppProfileResourceSchema) } },
    },
  },
})

export const postApiV1AppprofileRoute = createRoute({
  method: 'post',
  path: '/api/v1/appprofile',
  tags: ['AppProfile'],
  request: { body: { content: { 'application/json': { schema: AppProfileResourceSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AppProfileResourceSchema } },
    },
  },
})

export const getApiV1AppprofileIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/appprofile/{id}',
  tags: ['AppProfile'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AppProfileResourceSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: z.record(z.string(), z.string()) } },
    },
    500: { description: 'Internal Server Error' },
  },
})

export const putApiV1AppprofileIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/appprofile/{id}',
  tags: ['AppProfile'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: AppProfileResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AppProfileResourceSchema } },
    },
  },
})

export const deleteApiV1AppprofileIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/appprofile/{id}',
  tags: ['AppProfile'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1AppprofileSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v1/appprofile/schema',
  tags: ['AppProfile'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AppProfileResourceSchema } },
    },
  },
})

export const getLoginRoute = createRoute({
  method: 'get',
  path: '/login',
  tags: ['StaticResource'],
  responses: { 200: { description: 'OK' } },
})

export const postLoginRoute = createRoute({
  method: 'post',
  path: '/login',
  tags: ['Authentication'],
  request: {
    query: z.object({
      returnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'returnUrl', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              username: z.string().exactOptional(),
              password: z.string().exactOptional(),
              rememberMe: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          encoding: { username: {}, password: {}, rememberMe: {} },
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getLogoutRoute = createRoute({
  method: 'get',
  path: '/logout',
  tags: ['Authentication'],
  responses: { 200: { description: 'OK' } },
})

export const getApiV1SystemBackupRoute = createRoute({
  method: 'get',
  path: '/api/v1/system/backup',
  tags: ['Backup'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(BackupResourceSchema) } },
    },
  },
})

export const deleteApiV1SystemBackupIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/system/backup/{id}',
  tags: ['Backup'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiV1SystemBackupRestoreIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/system/backup/restore/{id}',
  tags: ['Backup'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiV1SystemBackupRestoreUploadRoute = createRoute({
  method: 'post',
  path: '/api/v1/system/backup/restore/upload',
  tags: ['Backup'],
  responses: { 200: { description: 'OK' } },
})

export const getApiV1CommandIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/command/{id}',
  tags: ['Command'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CommandResourceSchema } } },
  },
})

export const deleteApiV1CommandIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/command/{id}',
  tags: ['Command'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1CommandRoute = createRoute({
  method: 'get',
  path: '/api/v1/command',
  tags: ['Command'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(CommandResourceSchema) } },
    },
  },
})

export const postApiV1CommandRoute = createRoute({
  method: 'post',
  path: '/api/v1/command',
  tags: ['Command'],
  request: { body: { content: { 'application/json': { schema: CommandResourceSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CommandResourceSchema } } },
  },
})

export const getApiV1CustomfilterIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/customfilter/{id}',
  tags: ['CustomFilter'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CustomFilterResourceSchema } },
    },
  },
})

export const putApiV1CustomfilterIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/customfilter/{id}',
  tags: ['CustomFilter'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: CustomFilterResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CustomFilterResourceSchema } },
    },
  },
})

export const deleteApiV1CustomfilterIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/customfilter/{id}',
  tags: ['CustomFilter'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1CustomfilterRoute = createRoute({
  method: 'get',
  path: '/api/v1/customfilter',
  tags: ['CustomFilter'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(CustomFilterResourceSchema) } },
    },
  },
})

export const postApiV1CustomfilterRoute = createRoute({
  method: 'post',
  path: '/api/v1/customfilter',
  tags: ['CustomFilter'],
  request: { body: { content: { 'application/json': { schema: CustomFilterResourceSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CustomFilterResourceSchema } },
    },
  },
})

export const getApiV1ConfigDevelopmentIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/development/{id}',
  tags: ['DevelopmentConfig'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DevelopmentConfigResourceSchema } },
    },
  },
})

export const putApiV1ConfigDevelopmentIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/config/development/{id}',
  tags: ['DevelopmentConfig'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: DevelopmentConfigResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DevelopmentConfigResourceSchema } },
    },
  },
})

export const getApiV1ConfigDevelopmentRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/development',
  tags: ['DevelopmentConfig'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DevelopmentConfigResourceSchema } },
    },
  },
})

export const getApiV1DownloadclientIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/downloadclient/{id}',
  tags: ['DownloadClient'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DownloadClientResourceSchema } },
    },
  },
})

export const putApiV1DownloadclientIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/downloadclient/{id}',
  tags: ['DownloadClient'],
  request: {
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: DownloadClientResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DownloadClientResourceSchema } },
    },
  },
})

export const deleteApiV1DownloadclientIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/downloadclient/{id}',
  tags: ['DownloadClient'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1DownloadclientRoute = createRoute({
  method: 'get',
  path: '/api/v1/downloadclient',
  tags: ['DownloadClient'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(DownloadClientResourceSchema) } },
    },
  },
})

export const postApiV1DownloadclientRoute = createRoute({
  method: 'post',
  path: '/api/v1/downloadclient',
  tags: ['DownloadClient'],
  request: {
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DownloadClientResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DownloadClientResourceSchema } },
    },
  },
})

export const putApiV1DownloadclientBulkRoute = createRoute({
  method: 'put',
  path: '/api/v1/downloadclient/bulk',
  tags: ['DownloadClient'],
  request: {
    body: { content: { 'application/json': { schema: DownloadClientBulkResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DownloadClientResourceSchema } },
    },
  },
})

export const deleteApiV1DownloadclientBulkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/downloadclient/bulk',
  tags: ['DownloadClient'],
  request: {
    body: { content: { 'application/json': { schema: DownloadClientBulkResourceSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1DownloadclientSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v1/downloadclient/schema',
  tags: ['DownloadClient'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(DownloadClientResourceSchema) } },
    },
  },
})

export const postApiV1DownloadclientTestRoute = createRoute({
  method: 'post',
  path: '/api/v1/downloadclient/test',
  tags: ['DownloadClient'],
  request: {
    query: z.object({
      forceTest: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceTest',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DownloadClientResourceSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiV1DownloadclientTestallRoute = createRoute({
  method: 'post',
  path: '/api/v1/downloadclient/testall',
  tags: ['DownloadClient'],
  responses: { 200: { description: 'OK' } },
})

export const postApiV1DownloadclientActionNameRoute = createRoute({
  method: 'post',
  path: '/api/v1/downloadclient/action/{name}',
  tags: ['DownloadClient'],
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: DownloadClientResourceSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1ConfigDownloadclientIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/downloadclient/{id}',
  tags: ['DownloadClientConfig'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DownloadClientConfigResourceSchema } },
    },
  },
})

export const putApiV1ConfigDownloadclientIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/config/downloadclient/{id}',
  tags: ['DownloadClientConfig'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: DownloadClientConfigResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DownloadClientConfigResourceSchema } },
    },
  },
})

export const getApiV1ConfigDownloadclientRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/downloadclient',
  tags: ['DownloadClientConfig'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DownloadClientConfigResourceSchema } },
    },
  },
})

export const getApiV1FilesystemRoute = createRoute({
  method: 'get',
  path: '/api/v1/filesystem',
  tags: ['FileSystem'],
  request: {
    query: z.object({
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'path', in: 'query', schema: { type: 'string' }, required: false },
        }),
      includeFiles: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeFiles',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      allowFoldersWithoutTrailingSlashes: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'allowFoldersWithoutTrailingSlashes',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1FilesystemTypeRoute = createRoute({
  method: 'get',
  path: '/api/v1/filesystem/type',
  tags: ['FileSystem'],
  request: {
    query: z.object({
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'path', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1HealthRoute = createRoute({
  method: 'get',
  path: '/api/v1/health',
  tags: ['Health'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(HealthResourceSchema) } },
    },
  },
})

export const getApiV1HistoryRoute = createRoute({
  method: 'get',
  path: '/api/v1/history',
  tags: ['History'],
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 1 },
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
          z.int32(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      sortKey: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sortKey', in: 'query', schema: { type: 'string' }, required: false },
        }),
      sortDirection: SortDirectionSchema.openapi({
        param: {
          name: 'sortDirection',
          in: 'query',
          schema: { $ref: '#/components/schemas/SortDirection' },
          required: false,
        },
      }).exactOptional(),
      eventType: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'eventType',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
      successful: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { name: 'successful', in: 'query', schema: { type: 'boolean' }, required: false },
        }),
      downloadId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'downloadId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      indexerIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'indexerIds',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: HistoryResourcePagingResourceSchema } },
    },
  },
})

export const getApiV1HistorySinceRoute = createRoute({
  method: 'get',
  path: '/api/v1/history/since',
  tags: ['History'],
  request: {
    query: z.object({
      date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'date',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      eventType: HistoryEventTypeSchema.openapi({
        param: {
          name: 'eventType',
          in: 'query',
          schema: { $ref: '#/components/schemas/HistoryEventType' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(HistoryResourceSchema) } },
    },
  },
})

export const getApiV1HistoryIndexerRoute = createRoute({
  method: 'get',
  path: '/api/v1/history/indexer',
  tags: ['History'],
  request: {
    query: z.object({
      indexerId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'indexerId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      eventType: HistoryEventTypeSchema.openapi({
        param: {
          name: 'eventType',
          in: 'query',
          schema: { $ref: '#/components/schemas/HistoryEventType' },
          required: false,
        },
      }).exactOptional(),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(HistoryResourceSchema) } },
    },
  },
})

export const getApiV1ConfigHostIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/host/{id}',
  tags: ['HostConfig'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: HostConfigResourceSchema } },
    },
  },
})

export const putApiV1ConfigHostIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/config/host/{id}',
  tags: ['HostConfig'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: HostConfigResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: HostConfigResourceSchema } },
    },
  },
})

export const getApiV1ConfigHostRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/host',
  tags: ['HostConfig'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: HostConfigResourceSchema } },
    },
  },
})

export const getApiV1IndexerIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/indexer/{id}',
  tags: ['Indexer'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: IndexerResourceSchema } } },
  },
})

export const putApiV1IndexerIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/indexer/{id}',
  tags: ['Indexer'],
  request: {
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: IndexerResourceSchema } } },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: IndexerResourceSchema } } },
  },
})

export const deleteApiV1IndexerIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/indexer/{id}',
  tags: ['Indexer'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1IndexerRoute = createRoute({
  method: 'get',
  path: '/api/v1/indexer',
  tags: ['Indexer'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(IndexerResourceSchema) } },
    },
  },
})

export const postApiV1IndexerRoute = createRoute({
  method: 'post',
  path: '/api/v1/indexer',
  tags: ['Indexer'],
  request: {
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IndexerResourceSchema } } },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: IndexerResourceSchema } } },
  },
})

export const putApiV1IndexerBulkRoute = createRoute({
  method: 'put',
  path: '/api/v1/indexer/bulk',
  tags: ['Indexer'],
  request: { body: { content: { 'application/json': { schema: IndexerBulkResourceSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: IndexerResourceSchema } } },
  },
})

export const deleteApiV1IndexerBulkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/indexer/bulk',
  tags: ['Indexer'],
  request: { body: { content: { 'application/json': { schema: IndexerBulkResourceSchema } } } },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1IndexerSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v1/indexer/schema',
  tags: ['Indexer'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(IndexerResourceSchema) } },
    },
  },
})

export const postApiV1IndexerTestRoute = createRoute({
  method: 'post',
  path: '/api/v1/indexer/test',
  tags: ['Indexer'],
  request: {
    query: z.object({
      forceTest: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceTest',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IndexerResourceSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiV1IndexerTestallRoute = createRoute({
  method: 'post',
  path: '/api/v1/indexer/testall',
  tags: ['Indexer'],
  responses: { 200: { description: 'OK' } },
})

export const postApiV1IndexerActionNameRoute = createRoute({
  method: 'post',
  path: '/api/v1/indexer/action/{name}',
  tags: ['Indexer'],
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: IndexerResourceSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1IndexerCategoriesRoute = createRoute({
  method: 'get',
  path: '/api/v1/indexer/categories',
  tags: ['IndexerDefaultCategories'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(IndexerCategorySchema) } },
    },
  },
})

export const getApiV1IndexerproxyIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/indexerproxy/{id}',
  tags: ['IndexerProxy'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: IndexerProxyResourceSchema } },
    },
  },
})

export const putApiV1IndexerproxyIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/indexerproxy/{id}',
  tags: ['IndexerProxy'],
  request: {
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: IndexerProxyResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: IndexerProxyResourceSchema } },
    },
  },
})

export const deleteApiV1IndexerproxyIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/indexerproxy/{id}',
  tags: ['IndexerProxy'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1IndexerproxyRoute = createRoute({
  method: 'get',
  path: '/api/v1/indexerproxy',
  tags: ['IndexerProxy'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(IndexerProxyResourceSchema) } },
    },
  },
})

export const postApiV1IndexerproxyRoute = createRoute({
  method: 'post',
  path: '/api/v1/indexerproxy',
  tags: ['IndexerProxy'],
  request: {
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IndexerProxyResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: IndexerProxyResourceSchema } },
    },
  },
})

export const getApiV1IndexerproxySchemaRoute = createRoute({
  method: 'get',
  path: '/api/v1/indexerproxy/schema',
  tags: ['IndexerProxy'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(IndexerProxyResourceSchema) } },
    },
  },
})

export const postApiV1IndexerproxyTestRoute = createRoute({
  method: 'post',
  path: '/api/v1/indexerproxy/test',
  tags: ['IndexerProxy'],
  request: {
    query: z.object({
      forceTest: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceTest',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IndexerProxyResourceSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiV1IndexerproxyTestallRoute = createRoute({
  method: 'post',
  path: '/api/v1/indexerproxy/testall',
  tags: ['IndexerProxy'],
  responses: { 200: { description: 'OK' } },
})

export const postApiV1IndexerproxyActionNameRoute = createRoute({
  method: 'post',
  path: '/api/v1/indexerproxy/action/{name}',
  tags: ['IndexerProxy'],
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: IndexerProxyResourceSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1IndexerstatsRoute = createRoute({
  method: 'get',
  path: '/api/v1/indexerstats',
  tags: ['IndexerStats'],
  request: {
    query: z.object({
      startDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'startDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'endDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      indexers: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'indexers', in: 'query', schema: { type: 'string' }, required: false },
        }),
      protocols: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'protocols', in: 'query', schema: { type: 'string' }, required: false },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'tags', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: IndexerStatsResourceSchema } },
    },
  },
})

export const getApiV1IndexerstatusRoute = createRoute({
  method: 'get',
  path: '/api/v1/indexerstatus',
  tags: ['IndexerStatus'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(IndexerStatusResourceSchema) } },
    },
  },
})

export const getApiV1LocalizationRoute = createRoute({
  method: 'get',
  path: '/api/v1/localization',
  tags: ['Localization'],
  responses: { 200: { description: 'OK' } },
})

export const getApiV1LocalizationOptionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/localization/options',
  tags: ['Localization'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(LocalizationOptionSchema) } },
    },
  },
})

export const getApiV1LogRoute = createRoute({
  method: 'get',
  path: '/api/v1/log',
  tags: ['Log'],
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 1 },
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
          z.int32(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      sortKey: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sortKey', in: 'query', schema: { type: 'string' }, required: false },
        }),
      sortDirection: SortDirectionSchema.openapi({
        param: {
          name: 'sortDirection',
          in: 'query',
          schema: { $ref: '#/components/schemas/SortDirection' },
          required: false,
        },
      }).exactOptional(),
      level: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'level', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: LogResourcePagingResourceSchema } },
    },
  },
})

export const getApiV1LogFileRoute = createRoute({
  method: 'get',
  path: '/api/v1/log/file',
  tags: ['LogFile'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(LogFileResourceSchema) } },
    },
  },
})

export const getApiV1LogFileFilenameRoute = createRoute({
  method: 'get',
  path: '/api/v1/log/file/{filename}',
  tags: ['LogFile'],
  request: {
    params: z.object({
      filename: z
        .string()
        .regex(/[-.a-zA-Z0-9]+?\.txt/)
        .openapi({
          param: {
            name: 'filename',
            in: 'path',
            required: true,
            schema: { pattern: '[-.a-zA-Z0-9]+?\\.txt', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'text/plain': { schema: IActionResultSchema } } },
  },
})

export const getApiV1IndexerIdNewznabRoute = createRoute({
  method: 'get',
  path: '/api/v1/indexer/{id}/newznab',
  tags: ['Newznab'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    query: z.object({
      t: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 't', in: 'query', schema: { type: 'string' }, required: false },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'q', in: 'query', schema: { type: 'string' }, required: false },
        }),
      cat: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'cat', in: 'query', schema: { type: 'string' }, required: false },
        }),
      imdbid: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'imdbid', in: 'query', schema: { type: 'string' }, required: false },
        }),
      tmdbid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'tmdbid',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      extended: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'extended', in: 'query', schema: { type: 'string' }, required: false },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      minage: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'minage',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      maxage: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxage',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      minsize: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'minsize',
            in: 'query',
            schema: { type: 'integer', format: 'int64' },
            required: false,
          },
        }),
      maxsize: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'maxsize',
            in: 'query',
            schema: { type: 'integer', format: 'int64' },
            required: false,
          },
        }),
      rid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'rid',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      tvmazeid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'tvmazeid',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      traktid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'traktid',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      tvdbid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'tvdbid',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      doubanid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'doubanid',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      season: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'season',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      ep: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'ep', in: 'query', schema: { type: 'string' }, required: false },
        }),
      album: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'album', in: 'query', schema: { type: 'string' }, required: false },
        }),
      artist: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'artist', in: 'query', schema: { type: 'string' }, required: false },
        }),
      label: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'label', in: 'query', schema: { type: 'string' }, required: false },
        }),
      track: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'track', in: 'query', schema: { type: 'string' }, required: false },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      genre: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'genre', in: 'query', schema: { type: 'string' }, required: false },
        }),
      author: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'author', in: 'query', schema: { type: 'string' }, required: false },
        }),
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'title', in: 'query', schema: { type: 'string' }, required: false },
        }),
      publisher: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'publisher', in: 'query', schema: { type: 'string' }, required: false },
        }),
      configured: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'configured', in: 'query', schema: { type: 'string' }, required: false },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'source', in: 'query', schema: { type: 'string' }, required: false },
        }),
      host: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'host', in: 'query', schema: { type: 'string' }, required: false },
        }),
      server: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'server', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getIdApiRoute = createRoute({
  method: 'get',
  path: '/{id}/api',
  tags: ['Newznab'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    query: z.object({
      t: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 't', in: 'query', schema: { type: 'string' }, required: false },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'q', in: 'query', schema: { type: 'string' }, required: false },
        }),
      cat: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'cat', in: 'query', schema: { type: 'string' }, required: false },
        }),
      imdbid: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'imdbid', in: 'query', schema: { type: 'string' }, required: false },
        }),
      tmdbid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'tmdbid',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      extended: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'extended', in: 'query', schema: { type: 'string' }, required: false },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      minage: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'minage',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      maxage: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxage',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      minsize: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'minsize',
            in: 'query',
            schema: { type: 'integer', format: 'int64' },
            required: false,
          },
        }),
      maxsize: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'maxsize',
            in: 'query',
            schema: { type: 'integer', format: 'int64' },
            required: false,
          },
        }),
      rid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'rid',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      tvmazeid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'tvmazeid',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      traktid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'traktid',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      tvdbid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'tvdbid',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      doubanid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'doubanid',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      season: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'season',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      ep: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'ep', in: 'query', schema: { type: 'string' }, required: false },
        }),
      album: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'album', in: 'query', schema: { type: 'string' }, required: false },
        }),
      artist: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'artist', in: 'query', schema: { type: 'string' }, required: false },
        }),
      label: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'label', in: 'query', schema: { type: 'string' }, required: false },
        }),
      track: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'track', in: 'query', schema: { type: 'string' }, required: false },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      genre: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'genre', in: 'query', schema: { type: 'string' }, required: false },
        }),
      author: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'author', in: 'query', schema: { type: 'string' }, required: false },
        }),
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'title', in: 'query', schema: { type: 'string' }, required: false },
        }),
      publisher: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'publisher', in: 'query', schema: { type: 'string' }, required: false },
        }),
      configured: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'configured', in: 'query', schema: { type: 'string' }, required: false },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'source', in: 'query', schema: { type: 'string' }, required: false },
        }),
      host: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'host', in: 'query', schema: { type: 'string' }, required: false },
        }),
      server: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'server', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1IndexerIdDownloadRoute = createRoute({
  method: 'get',
  path: '/api/v1/indexer/{id}/download',
  tags: ['Newznab'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    query: z.object({
      link: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'link', in: 'query', schema: { type: 'string' }, required: false },
        }),
      file: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'file', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getIdDownloadRoute = createRoute({
  method: 'get',
  path: '/{id}/download',
  tags: ['Newznab'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    query: z.object({
      link: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'link', in: 'query', schema: { type: 'string' }, required: false },
        }),
      file: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'file', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1NotificationIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/notification/{id}',
  tags: ['Notification'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: NotificationResourceSchema } },
    },
  },
})

export const putApiV1NotificationIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/notification/{id}',
  tags: ['Notification'],
  request: {
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: NotificationResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: NotificationResourceSchema } },
    },
  },
})

export const deleteApiV1NotificationIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/notification/{id}',
  tags: ['Notification'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1NotificationRoute = createRoute({
  method: 'get',
  path: '/api/v1/notification',
  tags: ['Notification'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(NotificationResourceSchema) } },
    },
  },
})

export const postApiV1NotificationRoute = createRoute({
  method: 'post',
  path: '/api/v1/notification',
  tags: ['Notification'],
  request: {
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NotificationResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: NotificationResourceSchema } },
    },
  },
})

export const getApiV1NotificationSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v1/notification/schema',
  tags: ['Notification'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(NotificationResourceSchema) } },
    },
  },
})

export const postApiV1NotificationTestRoute = createRoute({
  method: 'post',
  path: '/api/v1/notification/test',
  tags: ['Notification'],
  request: {
    query: z.object({
      forceTest: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceTest',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NotificationResourceSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiV1NotificationTestallRoute = createRoute({
  method: 'post',
  path: '/api/v1/notification/testall',
  tags: ['Notification'],
  responses: { 200: { description: 'OK' } },
})

export const postApiV1NotificationActionNameRoute = createRoute({
  method: 'post',
  path: '/api/v1/notification/action/{name}',
  tags: ['Notification'],
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: NotificationResourceSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const getPingRoute = createRoute({
  method: 'get',
  path: '/ping',
  tags: ['Ping'],
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PingResourceSchema } } },
  },
})

export const headPingRoute = createRoute({
  method: 'head',
  path: '/ping',
  tags: ['Ping'],
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PingResourceSchema } } },
  },
})

export const getApiV1SearchRoute = createRoute({
  method: 'get',
  path: '/api/v1/search',
  tags: ['Search'],
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'query', in: 'query', schema: { type: 'string' }, required: false },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'type', in: 'query', schema: { type: 'string' }, required: false },
        }),
      indexerIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'indexerIds',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
      categories: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'categories',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ReleaseResourceSchema) } },
    },
  },
})

export const postApiV1SearchRoute = createRoute({
  method: 'post',
  path: '/api/v1/search',
  tags: ['Search'],
  request: { body: { content: { 'application/json': { schema: ReleaseResourceSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ReleaseResourceSchema } } },
  },
})

export const postApiV1SearchBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/search/bulk',
  tags: ['Search'],
  request: {
    body: { content: { 'application/json': { schema: z.array(ReleaseResourceSchema) } } },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ReleaseResourceSchema } } },
  },
})

export const getContentPathRoute = createRoute({
  method: 'get',
  path: '/content/{path}',
  tags: ['StaticResource'],
  request: {
    params: z.object({
      path: z
        .string()
        .regex(/^(?!api\/).*/)
        .openapi({
          param: {
            name: 'path',
            in: 'path',
            required: true,
            schema: { pattern: '^(?!api/).*', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['StaticResource'],
  request: {
    params: z.object({
      path: z
        .string()
        .openapi({
          param: { name: 'path', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getPathRoute = createRoute({
  method: 'get',
  path: '/{path}',
  tags: ['StaticResource'],
  request: {
    params: z.object({
      path: z
        .string()
        .regex(/^(?!api\/).*/)
        .openapi({
          param: {
            name: 'path',
            in: 'path',
            required: true,
            schema: { pattern: '^(?!api/).*', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1SystemStatusRoute = createRoute({
  method: 'get',
  path: '/api/v1/system/status',
  tags: ['System'],
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SystemResourceSchema } } },
  },
})

export const getApiV1SystemRoutesRoute = createRoute({
  method: 'get',
  path: '/api/v1/system/routes',
  tags: ['System'],
  responses: { 200: { description: 'OK' } },
})

export const getApiV1SystemRoutesDuplicateRoute = createRoute({
  method: 'get',
  path: '/api/v1/system/routes/duplicate',
  tags: ['System'],
  responses: { 200: { description: 'OK' } },
})

export const postApiV1SystemShutdownRoute = createRoute({
  method: 'post',
  path: '/api/v1/system/shutdown',
  tags: ['System'],
  responses: { 200: { description: 'OK' } },
})

export const postApiV1SystemRestartRoute = createRoute({
  method: 'post',
  path: '/api/v1/system/restart',
  tags: ['System'],
  responses: { 200: { description: 'OK' } },
})

export const getApiV1TagIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/tag/{id}',
  tags: ['Tag'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: TagResourceSchema } } },
  },
})

export const putApiV1TagIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/tag/{id}',
  tags: ['Tag'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: TagResourceSchema } } },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: TagResourceSchema } } },
  },
})

export const deleteApiV1TagIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/tag/{id}',
  tags: ['Tag'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1TagRoute = createRoute({
  method: 'get',
  path: '/api/v1/tag',
  tags: ['Tag'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(TagResourceSchema) } },
    },
  },
})

export const postApiV1TagRoute = createRoute({
  method: 'post',
  path: '/api/v1/tag',
  tags: ['Tag'],
  request: { body: { content: { 'application/json': { schema: TagResourceSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: TagResourceSchema } } },
  },
})

export const getApiV1TagDetailIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/tag/detail/{id}',
  tags: ['TagDetails'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TagDetailsResourceSchema } },
    },
  },
})

export const getApiV1TagDetailRoute = createRoute({
  method: 'get',
  path: '/api/v1/tag/detail',
  tags: ['TagDetails'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(TagDetailsResourceSchema) } },
    },
  },
})

export const getApiV1SystemTaskRoute = createRoute({
  method: 'get',
  path: '/api/v1/system/task',
  tags: ['Task'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(TaskResourceSchema) } },
    },
  },
})

export const getApiV1SystemTaskIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/system/task/{id}',
  tags: ['Task'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: TaskResourceSchema } } },
  },
})

export const getApiV1ConfigUiIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/ui/{id}',
  tags: ['UiConfig'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UiConfigResourceSchema } } },
  },
})

export const putApiV1ConfigUiIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/config/ui/{id}',
  tags: ['UiConfig'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: UiConfigResourceSchema } } },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UiConfigResourceSchema } } },
  },
})

export const getApiV1ConfigUiRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/ui',
  tags: ['UiConfig'],
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UiConfigResourceSchema } } },
  },
})

export const getApiV1UpdateRoute = createRoute({
  method: 'get',
  path: '/api/v1/update',
  tags: ['Update'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(UpdateResourceSchema) } },
    },
  },
})

export const getApiV1LogFileUpdateRoute = createRoute({
  method: 'get',
  path: '/api/v1/log/file/update',
  tags: ['UpdateLogFile'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(LogFileResourceSchema) } },
    },
  },
})

export const getApiV1LogFileUpdateFilenameRoute = createRoute({
  method: 'get',
  path: '/api/v1/log/file/update/{filename}',
  tags: ['UpdateLogFile'],
  request: {
    params: z.object({
      filename: z
        .string()
        .regex(/[-.a-zA-Z0-9]+?\.txt/)
        .openapi({
          param: {
            name: 'filename',
            in: 'path',
            required: true,
            schema: { pattern: '[-.a-zA-Z0-9]+?\\.txt', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'text/plain': { schema: IActionResultSchema } } },
  },
})
