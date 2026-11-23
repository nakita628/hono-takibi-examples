type ApiInfoResource = {
  current?: (string | null) | undefined
  deprecated?: (string[] | null) | undefined
}
type SelectOption = {
  value?: number | undefined
  name?: (string | null) | undefined
  order?: number | undefined
  hint?: (string | null) | undefined
  parentValue?: (number | null) | undefined
}
type PrivacyLevel = 'normal' | 'password' | 'apiKey' | 'userName'
type Field = {
  order?: number | undefined
  name?: (string | null) | undefined
  label?: (string | null) | undefined
  unit?: (string | null) | undefined
  helpText?: (string | null) | undefined
  helpTextWarning?: (string | null) | undefined
  helpLink?: (string | null) | undefined
  value?: ({ [x: string]: unknown } | null) | undefined
  type?: (string | null) | undefined
  advanced?: boolean | undefined
  selectOptions?: (SelectOption[] | null) | undefined
  selectOptionsProviderAction?: (string | null) | undefined
  section?: (string | null) | undefined
  hidden?: (string | null) | undefined
  privacy?: PrivacyLevel | undefined
  placeholder?: (string | null) | undefined
  isFloat?: boolean | undefined
}
type ProviderMessageType = 'info' | 'warning' | 'error'
type ProviderMessage = {
  message?: (string | null) | undefined
  type?: ProviderMessageType | undefined
}
type ApplicationSyncLevel = 'disabled' | 'addOnly' | 'fullSync'
type ApplicationResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  fields?: (Field[] | null) | undefined
  implementationName?: (string | null) | undefined
  implementation?: (string | null) | undefined
  configContract?: (string | null) | undefined
  infoLink?: (string | null) | undefined
  message?: ProviderMessage | undefined
  tags?: (number[] | null) | undefined
  presets?: (ApplicationResource[] | null) | undefined
  syncLevel?: ApplicationSyncLevel | undefined
  testCommand?: (string | null) | undefined
}
type ApplyTags = 'add' | 'remove' | 'replace'
type ApplicationBulkResource = {
  ids?: (number[] | null) | undefined
  tags?: (number[] | null) | undefined
  applyTags?: ApplyTags | undefined
  syncLevel?: ApplicationSyncLevel | undefined
}
type AppProfileResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  enableRss?: boolean | undefined
  enableAutomaticSearch?: boolean | undefined
  enableInteractiveSearch?: boolean | undefined
  minimumSeeders?: number | undefined
}
type BackupType = 'scheduled' | 'manual' | 'update'
type BackupResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  path?: (string | null) | undefined
  type?: BackupType | undefined
  size?: bigint | undefined
  time?: string | undefined
}
type CommandTrigger = 'unspecified' | 'manual' | 'scheduled'
type Command = {
  sendUpdatesToClient?: boolean | undefined
  updateScheduledTask?: boolean | undefined
  completionMessage?: (string | null) | undefined
  requiresDiskAccess?: boolean | undefined
  isExclusive?: boolean | undefined
  isTypeExclusive?: boolean | undefined
  name?: (string | null) | undefined
  lastExecutionTime?: (string | null) | undefined
  lastStartTime?: (string | null) | undefined
  trigger?: CommandTrigger | undefined
  suppressMessages?: boolean | undefined
  clientUserAgent?: (string | null) | undefined
}
type CommandPriority = 'normal' | 'high' | 'low'
type CommandStatus =
  | 'queued'
  | 'started'
  | 'completed'
  | 'failed'
  | 'aborted'
  | 'cancelled'
  | 'orphaned'
type CommandResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  commandName?: (string | null) | undefined
  message?: (string | null) | undefined
  body?: Command | undefined
  priority?: CommandPriority | undefined
  status?: CommandStatus | undefined
  queued?: string | undefined
  started?: (string | null) | undefined
  ended?: (string | null) | undefined
  duration?: (string | null) | undefined
  exception?: (string | null) | undefined
  trigger?: CommandTrigger | undefined
  clientUserAgent?: (string | null) | undefined
  stateChangeTime?: (string | null) | undefined
  sendUpdatesToClient?: boolean | undefined
  updateScheduledTask?: boolean | undefined
  lastExecutionTime?: (string | null) | undefined
}
type CustomFilterResource = {
  id?: number | undefined
  type?: (string | null) | undefined
  label?: (string | null) | undefined
  filters?: ({ [x: string]: { [x: string]: unknown } }[] | null) | undefined
}
type DevelopmentConfigResource = {
  id?: number | undefined
  consoleLogLevel?: (string | null) | undefined
  logSql?: boolean | undefined
  logIndexerResponse?: boolean | undefined
  logRotate?: number | undefined
  filterSentryEvents?: boolean | undefined
}
type DownloadProtocol = 'unknown' | 'usenet' | 'torrent'
type DownloadClientCategory = {
  clientCategory?: (string | null) | undefined
  categories?: (number[] | null) | undefined
}
type DownloadClientResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  fields?: (Field[] | null) | undefined
  implementationName?: (string | null) | undefined
  implementation?: (string | null) | undefined
  configContract?: (string | null) | undefined
  infoLink?: (string | null) | undefined
  message?: ProviderMessage | undefined
  tags?: (number[] | null) | undefined
  presets?: (DownloadClientResource[] | null) | undefined
  enable?: boolean | undefined
  protocol?: DownloadProtocol | undefined
  priority?: number | undefined
  categories?: (DownloadClientCategory[] | null) | undefined
  supportsCategories?: boolean | undefined
}
type DownloadClientBulkResource = {
  ids?: (number[] | null) | undefined
  tags?: (number[] | null) | undefined
  applyTags?: ApplyTags | undefined
  enable?: (boolean | null) | undefined
  priority?: (number | null) | undefined
}
type DownloadClientConfigResource = { id?: number | undefined }
type HealthCheckResult = 'ok' | 'notice' | 'warning' | 'error'
type HealthResource = {
  id?: number | undefined
  source?: (string | null) | undefined
  type?: HealthCheckResult | undefined
  message?: (string | null) | undefined
  wikiUrl?: (string | null) | undefined
}
type SortDirection = 'default' | 'ascending' | 'descending'
type HistoryEventType =
  | 'unknown'
  | 'releaseGrabbed'
  | 'indexerQuery'
  | 'indexerRss'
  | 'indexerAuth'
  | 'indexerInfo'
type HistoryResource = {
  id?: number | undefined
  indexerId?: number | undefined
  date?: string | undefined
  downloadId?: (string | null) | undefined
  successful?: boolean | undefined
  eventType?: HistoryEventType | undefined
  data?: ({ [x: string]: string | null } | null) | undefined
}
type HistoryResourcePagingResource = {
  page?: number | undefined
  pageSize?: number | undefined
  sortKey?: (string | null) | undefined
  sortDirection?: SortDirection | undefined
  totalRecords?: number | undefined
  records?: (HistoryResource[] | null) | undefined
}
type AuthenticationType = 'none' | 'basic' | 'forms' | 'external'
type AuthenticationRequiredType = 'enabled' | 'disabledForLocalAddresses'
type UpdateMechanism = 'builtIn' | 'script' | 'external' | 'apt' | 'docker'
type ProxyType = 'http' | 'socks4' | 'socks5'
type CertificateValidationType = 'enabled' | 'disabledForLocalAddresses' | 'disabled'
type HostConfigResource = {
  id?: number | undefined
  bindAddress?: (string | null) | undefined
  port?: number | undefined
  sslPort?: number | undefined
  enableSsl?: boolean | undefined
  launchBrowser?: boolean | undefined
  authenticationMethod?: AuthenticationType | undefined
  authenticationRequired?: AuthenticationRequiredType | undefined
  analyticsEnabled?: boolean | undefined
  username?: (string | null) | undefined
  password?: (string | null) | undefined
  passwordConfirmation?: (string | null) | undefined
  logLevel?: (string | null) | undefined
  logSizeLimit?: number | undefined
  consoleLogLevel?: (string | null) | undefined
  branch?: (string | null) | undefined
  apiKey?: (string | null) | undefined
  sslCertPath?: (string | null) | undefined
  sslCertPassword?: (string | null) | undefined
  urlBase?: (string | null) | undefined
  instanceName?: (string | null) | undefined
  applicationUrl?: (string | null) | undefined
  updateAutomatically?: boolean | undefined
  updateMechanism?: UpdateMechanism | undefined
  updateScriptPath?: (string | null) | undefined
  proxyEnabled?: boolean | undefined
  proxyType?: ProxyType | undefined
  proxyHostname?: (string | null) | undefined
  proxyPort?: number | undefined
  proxyUsername?: (string | null) | undefined
  proxyPassword?: (string | null) | undefined
  proxyBypassFilter?: (string | null) | undefined
  proxyBypassLocalAddresses?: boolean | undefined
  certificateValidation?: CertificateValidationType | undefined
  backupFolder?: (string | null) | undefined
  backupInterval?: number | undefined
  backupRetention?: number | undefined
  historyCleanupDays?: number | undefined
  trustCgnatIpAddresses?: boolean | undefined
}
type IndexerPrivacy = 'public' | 'semiPrivate' | 'private'
type IndexerCategory = {
  id?: number | undefined
  name?: (string | null) | undefined
  description?: (string | null) | undefined
  subCategories?: (IndexerCategory[] | null) | undefined
}
type SearchParam = 'q'
type TvSearchParam =
  | 'q'
  | 'season'
  | 'ep'
  | 'imdbId'
  | 'tvdbId'
  | 'rId'
  | 'tvMazeId'
  | 'traktId'
  | 'tmdbId'
  | 'doubanId'
  | 'genre'
  | 'year'
type MovieSearchParam =
  | 'q'
  | 'imdbId'
  | 'tmdbId'
  | 'imdbTitle'
  | 'imdbYear'
  | 'traktId'
  | 'genre'
  | 'doubanId'
  | 'year'
type MusicSearchParam = 'q' | 'album' | 'artist' | 'label' | 'year' | 'genre' | 'track'
type BookSearchParam = 'q' | 'title' | 'author' | 'publisher' | 'genre' | 'year'
type IndexerCapabilityResource = {
  id?: number | undefined
  limitsMax?: (number | null) | undefined
  limitsDefault?: (number | null) | undefined
  categories?: (IndexerCategory[] | null) | undefined
  supportsRawSearch?: boolean | undefined
  searchParams?: (SearchParam[] | null) | undefined
  tvSearchParams?: (TvSearchParam[] | null) | undefined
  movieSearchParams?: (MovieSearchParam[] | null) | undefined
  musicSearchParams?: (MusicSearchParam[] | null) | undefined
  bookSearchParams?: (BookSearchParam[] | null) | undefined
}
type IndexerStatusResource = {
  id?: number | undefined
  indexerId?: number | undefined
  disabledTill?: (string | null) | undefined
  mostRecentFailure?: (string | null) | undefined
  initialFailure?: (string | null) | undefined
}
type IndexerResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  fields?: (Field[] | null) | undefined
  implementationName?: (string | null) | undefined
  implementation?: (string | null) | undefined
  configContract?: (string | null) | undefined
  infoLink?: (string | null) | undefined
  message?: ProviderMessage | undefined
  tags?: (number[] | null) | undefined
  presets?: (IndexerResource[] | null) | undefined
  indexerUrls?: (string[] | null) | undefined
  legacyUrls?: (string[] | null) | undefined
  definitionName?: (string | null) | undefined
  description?: (string | null) | undefined
  language?: (string | null) | undefined
  encoding?: (string | null) | undefined
  enable?: boolean | undefined
  redirect?: boolean | undefined
  supportsRss?: boolean | undefined
  supportsSearch?: boolean | undefined
  supportsRedirect?: boolean | undefined
  supportsPagination?: boolean | undefined
  appProfileId?: number | undefined
  protocol?: DownloadProtocol | undefined
  privacy?: IndexerPrivacy | undefined
  capabilities?: IndexerCapabilityResource | undefined
  priority?: number | undefined
  downloadClientId?: number | undefined
  added?: string | undefined
  status?: IndexerStatusResource | undefined
  sortName?: (string | null) | undefined
}
type IndexerBulkResource = {
  ids?: (number[] | null) | undefined
  tags?: (number[] | null) | undefined
  applyTags?: ApplyTags | undefined
  enable?: (boolean | null) | undefined
  appProfileId?: (number | null) | undefined
  priority?: (number | null) | undefined
  minimumSeeders?: (number | null) | undefined
  seedRatio?: (number | null) | undefined
  seedTime?: (number | null) | undefined
  packSeedTime?: (number | null) | undefined
  preferMagnetUrl?: (boolean | null) | undefined
}
type IndexerProxyResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  fields?: (Field[] | null) | undefined
  implementationName?: (string | null) | undefined
  implementation?: (string | null) | undefined
  configContract?: (string | null) | undefined
  infoLink?: (string | null) | undefined
  message?: ProviderMessage | undefined
  tags?: (number[] | null) | undefined
  presets?: (IndexerProxyResource[] | null) | undefined
  link?: (string | null) | undefined
  onHealthIssue?: boolean | undefined
  supportsOnHealthIssue?: boolean | undefined
  includeHealthWarnings?: boolean | undefined
  testCommand?: (string | null) | undefined
}
type IndexerStatistics = {
  indexerId?: number | undefined
  indexerName?: (string | null) | undefined
  averageResponseTime?: number | undefined
  averageGrabResponseTime?: number | undefined
  numberOfQueries?: number | undefined
  numberOfGrabs?: number | undefined
  numberOfRssQueries?: number | undefined
  numberOfAuthQueries?: number | undefined
  numberOfFailedQueries?: number | undefined
  numberOfFailedGrabs?: number | undefined
  numberOfFailedRssQueries?: number | undefined
  numberOfFailedAuthQueries?: number | undefined
}
type UserAgentStatistics = {
  userAgent?: (string | null) | undefined
  numberOfQueries?: number | undefined
  numberOfGrabs?: number | undefined
}
type HostStatistics = {
  host?: (string | null) | undefined
  numberOfQueries?: number | undefined
  numberOfGrabs?: number | undefined
}
type IndexerStatsResource = {
  id?: number | undefined
  indexers?: (IndexerStatistics[] | null) | undefined
  userAgents?: (UserAgentStatistics[] | null) | undefined
  hosts?: (HostStatistics[] | null) | undefined
}
type LocalizationOption = {
  name?: (string | null) | undefined
  value?: (string | null) | undefined
}
type LogResource = {
  id?: number | undefined
  time?: string | undefined
  exception?: (string | null) | undefined
  exceptionType?: (string | null) | undefined
  level?: (string | null) | undefined
  logger?: (string | null) | undefined
  message?: (string | null) | undefined
  method?: (string | null) | undefined
}
type LogResourcePagingResource = {
  page?: number | undefined
  pageSize?: number | undefined
  sortKey?: (string | null) | undefined
  sortDirection?: SortDirection | undefined
  totalRecords?: number | undefined
  records?: (LogResource[] | null) | undefined
}
type LogFileResource = {
  id?: number | undefined
  filename?: (string | null) | undefined
  lastWriteTime?: string | undefined
  contentsUrl?: (string | null) | undefined
  downloadUrl?: (string | null) | undefined
}
type IActionResult = {}
type NotificationResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  fields?: (Field[] | null) | undefined
  implementationName?: (string | null) | undefined
  implementation?: (string | null) | undefined
  configContract?: (string | null) | undefined
  infoLink?: (string | null) | undefined
  message?: ProviderMessage | undefined
  tags?: (number[] | null) | undefined
  presets?: (NotificationResource[] | null) | undefined
  link?: (string | null) | undefined
  onGrab?: boolean | undefined
  onHealthIssue?: boolean | undefined
  onHealthRestored?: boolean | undefined
  onApplicationUpdate?: boolean | undefined
  supportsOnGrab?: boolean | undefined
  includeManualGrabs?: boolean | undefined
  supportsOnHealthIssue?: boolean | undefined
  supportsOnHealthRestored?: boolean | undefined
  includeHealthWarnings?: boolean | undefined
  supportsOnApplicationUpdate?: boolean | undefined
  testCommand?: (string | null) | undefined
}
type PingResource = { status?: (string | null) | undefined }
type ReleaseResource = {
  id?: number | undefined
  guid?: (string | null) | undefined
  age?: number | undefined
  ageHours?: number | undefined
  ageMinutes?: number | undefined
  size?: bigint | undefined
  files?: (number | null) | undefined
  grabs?: (number | null) | undefined
  indexerId?: number | undefined
  indexer?: (string | null) | undefined
  subGroup?: (string | null) | undefined
  releaseHash?: (string | null) | undefined
  title?: (string | null) | undefined
  sortTitle?: (string | null) | undefined
  imdbId?: number | undefined
  tmdbId?: number | undefined
  tvdbId?: number | undefined
  tvMazeId?: number | undefined
  publishDate?: string | undefined
  commentUrl?: (string | null) | undefined
  downloadUrl?: (string | null) | undefined
  infoUrl?: (string | null) | undefined
  posterUrl?: (string | null) | undefined
  indexerFlags?: (string[] | null) | undefined
  categories?: (IndexerCategory[] | null) | undefined
  magnetUrl?: (string | null) | undefined
  infoHash?: (string | null) | undefined
  seeders?: (number | null) | undefined
  leechers?: (number | null) | undefined
  protocol?: DownloadProtocol | undefined
  fileName?: (string | null) | undefined
  downloadClientId?: (number | null) | undefined
}
type RuntimeMode = 'console' | 'service' | 'tray'
type DatabaseType = 'sqLite' | 'postgreSQL'
type SystemResource = {
  appName?: (string | null) | undefined
  instanceName?: (string | null) | undefined
  version?: (string | null) | undefined
  buildTime?: string | undefined
  isDebug?: boolean | undefined
  isProduction?: boolean | undefined
  isAdmin?: boolean | undefined
  isUserInteractive?: boolean | undefined
  startupPath?: (string | null) | undefined
  appData?: (string | null) | undefined
  osName?: (string | null) | undefined
  osVersion?: (string | null) | undefined
  isNetCore?: boolean | undefined
  isLinux?: boolean | undefined
  isOsx?: boolean | undefined
  isWindows?: boolean | undefined
  isDocker?: boolean | undefined
  mode?: RuntimeMode | undefined
  branch?: (string | null) | undefined
  databaseType?: DatabaseType | undefined
  databaseVersion?: (string | null) | undefined
  authentication?: AuthenticationType | undefined
  migrationVersion?: number | undefined
  urlBase?: (string | null) | undefined
  runtimeVersion?: (string | null) | undefined
  runtimeName?: (string | null) | undefined
  startTime?: string | undefined
  packageVersion?: (string | null) | undefined
  packageAuthor?: (string | null) | undefined
  packageUpdateMechanism?: UpdateMechanism | undefined
  packageUpdateMechanismMessage?: (string | null) | undefined
}
type TagResource = { id?: number | undefined; label?: (string | null) | undefined }
type TagDetailsResource = {
  id?: number | undefined
  label?: (string | null) | undefined
  notificationIds?: (number[] | null) | undefined
  indexerIds?: (number[] | null) | undefined
  indexerProxyIds?: (number[] | null) | undefined
  applicationIds?: (number[] | null) | undefined
}
type TaskResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  taskName?: (string | null) | undefined
  interval?: number | undefined
  lastExecution?: string | undefined
  lastStartTime?: string | undefined
  nextExecution?: string | undefined
  lastDuration?: string | undefined
}
type UiConfigResource = {
  id?: number | undefined
  firstDayOfWeek?: number | undefined
  calendarWeekColumnHeader?: (string | null) | undefined
  shortDateFormat?: (string | null) | undefined
  longDateFormat?: (string | null) | undefined
  timeFormat?: (string | null) | undefined
  showRelativeDates?: boolean | undefined
  enableColorImpairedMode?: boolean | undefined
  uiLanguage?: (string | null) | undefined
  theme?: (string | null) | undefined
}
type UpdateChanges = { new?: (string[] | null) | undefined; fixed?: (string[] | null) | undefined }
type UpdateResource = {
  id?: number | undefined
  version?: (string | null) | undefined
  branch?: (string | null) | undefined
  releaseDate?: string | undefined
  fileName?: (string | null) | undefined
  url?: (string | null) | undefined
  installed?: boolean | undefined
  installedOn?: (string | null) | undefined
  installable?: boolean | undefined
  latest?: boolean | undefined
  changes?: UpdateChanges | undefined
  hash?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api': { $get: { input: {}; output: ApiInfoResource; outputFormat: 'json'; status: 200 } }
  } & {
    '/api/v1/applications/:id': {
      $get: {
        input: { param: { id: number } }
        output: ApplicationResource
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { query: { forceSave?: boolean | undefined } } & {
          json: ApplicationResource
        }
        output: ApplicationResource
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/applications': {
      $get: { input: {}; output: ApplicationResource[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { query: { forceSave?: boolean | undefined } } & { json: ApplicationResource }
        output: ApplicationResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/applications/bulk': {
      $put: {
        input: { json: ApplicationBulkResource }
        output: ApplicationResource
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { json: ApplicationBulkResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/applications/schema': {
      $get: { input: {}; output: ApplicationResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/applications/test': {
      $post: {
        input: { query: { forceTest?: boolean | undefined } } & { json: ApplicationResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/applications/testall': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/applications/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: ApplicationResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/appprofile': {
      $post: {
        input: { json: AppProfileResource }
        output: AppProfileResource
        outputFormat: 'json'
        status: 200
      }
      $get: { input: {}; output: AppProfileResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/appprofile/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $put: {
        input: { param: { id: string } } & { json: AppProfileResource }
        output: AppProfileResource
        outputFormat: 'json'
        status: 200
      }
      $get:
        | {
            input: { param: { id: number } }
            output: AppProfileResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: { [x: string]: string }
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/v1/appprofile/schema': {
      $get: { input: {}; output: AppProfileResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/login': {
      $post: {
        input: { query: { returnUrl?: string | undefined } } & {
          form: {
            username?: string | undefined
            password?: string | undefined
            rememberMe?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & { '/logout': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/api/v1/system/backup': {
      $get: { input: {}; output: BackupResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/system/backup/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/system/backup/restore/:id': {
      $post: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/system/backup/restore/upload': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/command/:id': {
      $get: {
        input: { param: { id: number } }
        output: CommandResource
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/command': {
      $post: {
        input: { json: CommandResource }
        output: CommandResource
        outputFormat: 'json'
        status: 200
      }
      $get: { input: {}; output: CommandResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/customfilter/:id': {
      $get: {
        input: { param: { id: number } }
        output: CustomFilterResource
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: CustomFilterResource }
        output: CustomFilterResource
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/customfilter': {
      $get: { input: {}; output: CustomFilterResource[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: CustomFilterResource }
        output: CustomFilterResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/config/development/:id': {
      $put: {
        input: { param: { id: string } } & { json: DevelopmentConfigResource }
        output: DevelopmentConfigResource
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: number } }
        output: DevelopmentConfigResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/config/development': {
      $get: { input: {}; output: DevelopmentConfigResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/downloadclient/:id': {
      $get: {
        input: { param: { id: number } }
        output: DownloadClientResource
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { query: { forceSave?: boolean | undefined } } & {
          json: DownloadClientResource
        }
        output: DownloadClientResource
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/downloadclient': {
      $get: { input: {}; output: DownloadClientResource[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { query: { forceSave?: boolean | undefined } } & { json: DownloadClientResource }
        output: DownloadClientResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/downloadclient/bulk': {
      $put: {
        input: { json: DownloadClientBulkResource }
        output: DownloadClientResource
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { json: DownloadClientBulkResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/downloadclient/schema': {
      $get: { input: {}; output: DownloadClientResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/downloadclient/test': {
      $post: {
        input: { query: { forceTest?: boolean | undefined } } & { json: DownloadClientResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/downloadclient/testall': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/downloadclient/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: DownloadClientResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/config/downloadclient/:id': {
      $get: {
        input: { param: { id: number } }
        output: DownloadClientConfigResource
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: DownloadClientConfigResource }
        output: DownloadClientConfigResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/config/downloadclient': {
      $get: { input: {}; output: DownloadClientConfigResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/filesystem': {
      $get: {
        input: {
          query: {
            path?: string | undefined
            includeFiles?: boolean | undefined
            allowFoldersWithoutTrailingSlashes?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/filesystem/type': {
      $get: {
        input: { query: { path?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/health': {
      $get: { input: {}; output: HealthResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/history': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            sortKey?: string | undefined
            sortDirection?: SortDirection | undefined
            eventType?: number[] | undefined
            successful?: boolean | undefined
            downloadId?: string | undefined
            indexerIds?: number[] | undefined
          }
        }
        output: HistoryResourcePagingResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/history/since': {
      $get: {
        input: { query: { date?: string | undefined; eventType?: HistoryEventType | undefined } }
        output: HistoryResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/history/indexer': {
      $get: {
        input: {
          query: {
            indexerId?: number | undefined
            eventType?: HistoryEventType | undefined
            limit?: number | undefined
          }
        }
        output: HistoryResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/config/host/:id': {
      $get: {
        input: { param: { id: number } }
        output: HostConfigResource
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: HostConfigResource }
        output: HostConfigResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/config/host': {
      $get: { input: {}; output: HostConfigResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/indexer/:id': {
      $get: {
        input: { param: { id: number } }
        output: IndexerResource
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { query: { forceSave?: boolean | undefined } } & {
          json: IndexerResource
        }
        output: IndexerResource
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/indexer': {
      $get: { input: {}; output: IndexerResource[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { query: { forceSave?: boolean | undefined } } & { json: IndexerResource }
        output: IndexerResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/indexer/bulk': {
      $put: {
        input: { json: IndexerBulkResource }
        output: IndexerResource
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { json: IndexerBulkResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/indexer/schema': {
      $get: { input: {}; output: IndexerResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/indexer/test': {
      $post: {
        input: { query: { forceTest?: boolean | undefined } } & { json: IndexerResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/indexer/testall': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/indexer/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: IndexerResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/indexer/categories': {
      $get: { input: {}; output: IndexerCategory[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/indexerproxy/:id': {
      $get: {
        input: { param: { id: number } }
        output: IndexerProxyResource
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { query: { forceSave?: boolean | undefined } } & {
          json: IndexerProxyResource
        }
        output: IndexerProxyResource
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/indexerproxy': {
      $get: { input: {}; output: IndexerProxyResource[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { query: { forceSave?: boolean | undefined } } & { json: IndexerProxyResource }
        output: IndexerProxyResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/indexerproxy/schema': {
      $get: { input: {}; output: IndexerProxyResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/indexerproxy/test': {
      $post: {
        input: { query: { forceTest?: boolean | undefined } } & { json: IndexerProxyResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/indexerproxy/testall': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/indexerproxy/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: IndexerProxyResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/indexerstats': {
      $get: {
        input: {
          query: {
            startDate?: string | undefined
            endDate?: string | undefined
            indexers?: string | undefined
            protocols?: string | undefined
            tags?: string | undefined
          }
        }
        output: IndexerStatsResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/indexerstatus': {
      $get: { input: {}; output: IndexerStatusResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/localization': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/api/v1/localization/options': {
      $get: { input: {}; output: LocalizationOption[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/log': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            sortKey?: string | undefined
            sortDirection?: SortDirection | undefined
            level?: string | undefined
          }
        }
        output: LogResourcePagingResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/log/file': {
      $get: { input: {}; output: LogFileResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/log/file/:filename': {
      $get: {
        input: { param: { filename: string } }
        output: IActionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/v1/indexer/:id/newznab': {
      $get: {
        input: { param: { id: number } } & {
          query: {
            t?: string | undefined
            q?: string | undefined
            cat?: string | undefined
            imdbid?: string | undefined
            tmdbid?: number | undefined
            extended?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            minage?: number | undefined
            maxage?: number | undefined
            minsize?: bigint | undefined
            maxsize?: bigint | undefined
            rid?: number | undefined
            tvmazeid?: number | undefined
            traktid?: number | undefined
            tvdbid?: number | undefined
            doubanid?: number | undefined
            season?: number | undefined
            ep?: string | undefined
            album?: string | undefined
            artist?: string | undefined
            label?: string | undefined
            track?: string | undefined
            year?: number | undefined
            genre?: string | undefined
            author?: string | undefined
            title?: string | undefined
            publisher?: string | undefined
            configured?: string | undefined
            source?: string | undefined
            host?: string | undefined
            server?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:id/api': {
      $get: {
        input: { param: { id: number } } & {
          query: {
            t?: string | undefined
            q?: string | undefined
            cat?: string | undefined
            imdbid?: string | undefined
            tmdbid?: number | undefined
            extended?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            minage?: number | undefined
            maxage?: number | undefined
            minsize?: bigint | undefined
            maxsize?: bigint | undefined
            rid?: number | undefined
            tvmazeid?: number | undefined
            traktid?: number | undefined
            tvdbid?: number | undefined
            doubanid?: number | undefined
            season?: number | undefined
            ep?: string | undefined
            album?: string | undefined
            artist?: string | undefined
            label?: string | undefined
            track?: string | undefined
            year?: number | undefined
            genre?: string | undefined
            author?: string | undefined
            title?: string | undefined
            publisher?: string | undefined
            configured?: string | undefined
            source?: string | undefined
            host?: string | undefined
            server?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/indexer/:id/download': {
      $get: {
        input: { param: { id: number } } & {
          query: { link?: string | undefined; file?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:id/download': {
      $get: {
        input: { param: { id: number } } & {
          query: { link?: string | undefined; file?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/notification/:id': {
      $get: {
        input: { param: { id: number } }
        output: NotificationResource
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { query: { forceSave?: boolean | undefined } } & {
          json: NotificationResource
        }
        output: NotificationResource
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/notification': {
      $get: { input: {}; output: NotificationResource[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { query: { forceSave?: boolean | undefined } } & { json: NotificationResource }
        output: NotificationResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/notification/schema': {
      $get: { input: {}; output: NotificationResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/notification/test': {
      $post: {
        input: { query: { forceTest?: boolean | undefined } } & { json: NotificationResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/notification/testall': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/notification/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: NotificationResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/ping': {
      $get: { input: {}; output: PingResource; outputFormat: 'json'; status: 200 }
      $head: { input: {}; output: PingResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/search': {
      $post: {
        input: { json: ReleaseResource }
        output: ReleaseResource
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            query?: string | undefined
            type?: string | undefined
            indexerIds?: number[] | undefined
            categories?: number[] | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: ReleaseResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/search/bulk': {
      $post: {
        input: { json: ReleaseResource[] }
        output: ReleaseResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/content/:path': {
      $get: { input: { param: { path: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & { '/': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/:path': {
      $get: { input: { param: { path: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/system/status': {
      $get: { input: {}; output: SystemResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/system/routes': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/api/v1/system/routes/duplicate': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/system/shutdown': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/system/restart': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/tag/:id': {
      $get: {
        input: { param: { id: number } }
        output: TagResource
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: TagResource }
        output: TagResource
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/tag': {
      $get: { input: {}; output: TagResource[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: TagResource }
        output: TagResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/tag/detail/:id': {
      $get: {
        input: { param: { id: number } }
        output: TagDetailsResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/tag/detail': {
      $get: { input: {}; output: TagDetailsResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/system/task': {
      $get: { input: {}; output: TaskResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/system/task/:id': {
      $get: {
        input: { param: { id: number } }
        output: TaskResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/config/ui/:id': {
      $put: {
        input: { param: { id: string } } & { json: UiConfigResource }
        output: UiConfigResource
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: number } }
        output: UiConfigResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/config/ui': {
      $get: { input: {}; output: UiConfigResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/update': {
      $get: { input: {}; output: UpdateResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/log/file/update': {
      $get: { input: {}; output: LogFileResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/log/file/update/:filename': {
      $get: {
        input: { param: { filename: string } }
        output: IActionResult
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
