type ApiKey = {
  authorizedEntities: string[]
  clientId: string
  clientName: string
  clientSecret: string
  dailyQuota?: bigint | undefined
  enabled: boolean
  metadata?: { [x: string]: string } | undefined
  monthlyQuota?: bigint | undefined
  throttlingQuota?: bigint | undefined
}
type LdapAuthModuleConfig = {
  adminPassword: string
  adminUsername: string
  desc: string
  emailField: string
  groupFilter: string
  id: string
  name: string
  nameField: string
  otoroshiDataField?: string | undefined
  searchBase: string
  searchFilter: string
  serverUrl: string
  sessionMaxAge: number
  type: string
  userBase: string
}
type InMemoryUser = {
  email: string
  metadata: { [x: string]: string }
  name: string
  password: string
}
type InMemoryAuthModuleConfig = {
  desc: string
  id: string
  name: string
  sessionMaxAge: string
  type: string
  users: InMemoryUser[]
}
type HSAlgoSettings = { secret: string; size: number; type: string }
type RSAlgoSettings = {
  privateKey?: string | undefined
  publicKey: string
  size: number
  type: string
}
type ESAlgoSettings = {
  privateKey?: string | undefined
  publicKey: string
  size: number
  type: string
}
type JWKSAlgoSettings = {
  headers?: { [x: string]: string } | undefined
  kty?: string | undefined
  timeout?: bigint | undefined
  ttl?: bigint | undefined
  type: string
  url?: string | undefined
}
type GenericOauth2ModuleConfig = {
  accessTokenField: string
  authorizeUrl: string
  callbackUrl: string
  claims?: string | undefined
  clientId: string
  clientSecret: string
  desc: string
  emailField: string
  id: string
  jwtVerifier?: HSAlgoSettings | RSAlgoSettings | ESAlgoSettings | JWKSAlgoSettings | undefined
  loginUrl: string
  logoutUrl: string
  name: string
  nameField: string
  oidConfig?: string | undefined
  otoroshiDataField: string
  readProfileFromToken?: boolean | undefined
  scope?: string | undefined
  sessionMaxAge: number
  tokenUrl: string
  type: string
  useCookies?: boolean | undefined
  useJson?: boolean | undefined
  userInfoUrl: string
}
type Deleted = { deleted: boolean }
type Patch = {
  op: 'add' | 'replace' | 'remove' | 'copy' | 'test'
  path: string
  value?: { [x: string]: unknown } | undefined
}[]
type Certificate = {
  autoRenew: string
  ca: string
  caRef: string
  chain: string
  domain: string
  from: string
  id: string
  privateKey: string
  selfSigned: string
  subject: string
  to: string
  valid: string
}
type ValidationAuthority = {
  alwaysValid: boolean
  badTtl: bigint
  description: string
  goodTtl: bigint
  headers: { [x: string]: string }
  host: string
  id: string
  method: string
  name: string
  noCache: boolean
  path: string
  timeout: bigint
  url: string
}
type ElasticConfig = {
  clusterUri: string
  headers: { [x: string]: string }
  index: string
  password: string
  type: string
  user: string
}
type KafkaConfig = {
  keyPass?: string | undefined
  keyStore?: string | undefined
  servers: string[]
  topic?: string | undefined
  trustore?: string | undefined
}
type PulsarDataExporterConfig = { namespace: string; tenant: string; topic: string; uri: string[] }
type FileDataExporterConfig = { path: string }
type MailerGenericExporterConfig = {
  headers?: { [x: string]: string } | undefined
  to?: string[] | undefined
  type: 'generic'
  url?: string | undefined
}
type MailerConsoleExporterConfig = { type?: 'generic' | undefined }
type MailerMailgunExporterConfig = {
  apiKey?: string | undefined
  domain?: string | undefined
  eu?: boolean | undefined
  to?: string[] | undefined
  type: 'mailgun'
}
type MailerMailjetExporterConfig = {
  apiKeyPrivate?: string | undefined
  apiKeyPublic?: string | undefined
  to?: string[] | undefined
  type: 'mailjet'
}
type MailerSendgridExporterConfig = {
  apiKeyPublic?: string | undefined
  to?: string[] | undefined
  type: 'sendgrid'
}
type ConsoleDataExporterConfig = { [x: string]: unknown }
type CustomDataExporterConfig = { config: { [x: string]: string }; ref: string }
type Filtering = {
  exclude?: { [x: string]: string }[] | undefined
  include?: { [x: string]: string }[] | undefined
}
type Location = { teams: { [x: string]: string }[]; tenant: string }
type DataExporterConfig = {
  bufferSize?: number | undefined
  config?:
    | ElasticConfig
    | KafkaConfig
    | PulsarDataExporterConfig
    | FileDataExporterConfig
    | MailerGenericExporterConfig
    | MailerConsoleExporterConfig
    | MailerMailgunExporterConfig
    | MailerMailjetExporterConfig
    | MailerSendgridExporterConfig
    | ConsoleDataExporterConfig
    | CustomDataExporterConfig
    | undefined
  desc?: string | undefined
  enabled?: string | undefined
  filtering?: Filtering | undefined
  groupDuration?: bigint | undefined
  groupSize?: number | undefined
  id?: string | undefined
  jsonWorkers?: number | undefined
  location?: Location | undefined
  metadata?: { [x: string]: string } | undefined
  name?: string | undefined
  projection?: { [x: string]: string } | undefined
  sendWorkers?: number | undefined
  typ?: 'kafka' | 'pulsar' | 'file' | 'mailer' | 'elastic' | 'console' | 'custom' | undefined
}
type Webhook = { headers: { [x: string]: string }; url: string }
type Auth0Config = { callbackUrl: string; clientId: string; clientSecret: string; domain: string }
type CleverSettings = {
  consumerKey: string
  consumerSecret: string
  orgaId: string
  secret: string
  token: string
}
type IpFiltering = { blacklist: string[]; whitelist: string[] }
type MailerSettings = {
  apiKey: string
  apiKeyPrivate?: string | undefined
  apiKeyPublic?: string | undefined
  domain: string
  eu?: boolean | undefined
  header?: { [x: string]: string } | undefined
  type?: string | undefined
  url?: string | undefined
}
type GlobalConfig = {
  alertsEmails: string[]
  alertsWebhooks: Webhook[]
  analyticsWebhooks: Webhook[]
  apiReadOnly: boolean
  autoLinkToDefaultGroup: boolean
  backofficeAuth0Config?: Auth0Config | undefined
  cleverSettings?: CleverSettings | undefined
  elasticReadsConfig?: ElasticConfig | undefined
  elasticWritesConfigs?: ElasticConfig[] | undefined
  endlessIpAddresses: string[]
  ipFiltering: IpFiltering
  limitConcurrentRequests: boolean
  lines?: string[] | undefined
  mailerSettings?: MailerSettings | undefined
  maxConcurrentRequests: bigint
  maxHttp10ResponseSize?: bigint | undefined
  maxLogsSize?: number | undefined
  middleFingers?: boolean | undefined
  perIpThrottlingQuota: bigint
  privateAppsAuth0Config?: Auth0Config | undefined
  streamEntityOnly: boolean
  throttlingQuota: bigint
  u2fLoginOnly: boolean
  useCircuitBreakers: boolean
}
type Group = { description?: string | undefined; id: string; name: string }
type Quotas = {
  authorizedCallsPerDay: bigint
  authorizedCallsPerMonth: bigint
  authorizedCallsPerSec: bigint
  currentCallsPerDay: bigint
  currentCallsPerMonth: bigint
  currentCallsPerSec: bigint
  remainingCallsPerDay: bigint
  remainingCallsPerMonth: bigint
  remainingCallsPerSec: bigint
}
type Target = { host: string; scheme: string }
type Canary = { enabled: boolean; root: string; targets: Target[]; traffic: number }
type ExposedApi = { exposeApi: boolean; openApiDescriptorUrl?: string | undefined }
type BadResponse = { body: string; headers: { [x: string]: string }; status: number }
type BadResponsesFaultConfig = { ratio: number; responses: BadResponse[] }
type LargeRequestFaultConfig = { additionalRequestSize: number; ratio: number }
type LargeResponseFaultConfig = { additionalRequestSize?: number | undefined; ratio: number }
type LatencyInjectionFaultConfig = { from: number; ratio: number; to: number }
type ChaosConfig = {
  badResponsesFaultConfig?: BadResponsesFaultConfig | undefined
  enabled: boolean
  largeRequestFaultConfig?: LargeRequestFaultConfig | undefined
  largeResponseFaultConfig?: LargeResponseFaultConfig | undefined
  latencyInjectionFaultConfig?: LatencyInjectionFaultConfig | undefined
}
type ClientConfig = {
  backoffFactor: number
  callTimeout: number
  globalTimeout: number
  maxErrors: number
  retries: number
  retryInitialDelay: number
  sampleInterval: number
  useCircuitBreaker: boolean
}
type CorsSettings = {
  allowCredentials: boolean
  allowHeaders: string[]
  allowMethods: string[]
  allowOrigin: string
  enabled: boolean
  excludedPatterns: string[]
  exposeHeaders: string[]
  maxAge: number
}
type Gzip = {
  blackList: string[]
  bufferSize: bigint
  chunkedThreshold: bigint
  compressionLevel: number
  enabled: boolean
  excludedPatterns: string[]
  whiteList: string[]
}
type HealthCheck = { enabled: boolean; url?: string | undefined }
type InQueryParam = { name: string; type: string }
type InHeader = { name: string; remove: string; type: string }
type InCookie = { name: string; type: string }
type MappingSettings = {
  map: { [x: string]: string }
  remove: string[]
  values: { [x: string]: string }
}
type VerificationSettings = {
  fields: { [x: string]: string }
  mappingSettings?: MappingSettings | undefined
}
type PassThrough = { type: string; verificationSettings: VerificationSettings }
type Sign = {
  algoSettings: HSAlgoSettings | RSAlgoSettings | ESAlgoSettings | JWKSAlgoSettings
  type: string
  verificationSettings: VerificationSettings
}
type TransformSettings = {
  location: InQueryParam | InHeader | InCookie
  mappingSettings: MappingSettings
}
type Transform = {
  algoSettings: HSAlgoSettings | RSAlgoSettings | ESAlgoSettings | JWKSAlgoSettings
  transformSettings?: TransformSettings | undefined
  type: string
  verificationSettings: VerificationSettings
}
type LocalJwtVerifier = {
  algoSettings: HSAlgoSettings | RSAlgoSettings | ESAlgoSettings | JWKSAlgoSettings
  enabled: boolean
  source: InQueryParam | InHeader | InCookie
  strategy: PassThrough | Sign | Transform
  strict: boolean
  type: string
}
type RefJwtVerifier = { enabled: boolean; id: string; type: string }
type RedirectionSettings = { code: number; enabled: boolean; to: string }
type StatsdConfig = { datadog: boolean; host: string; port: number }
type ImportExportStats = { calls: bigint; dataIn: bigint; dataOut: bigint }
type ImportExport = {
  admins: {
    createdAt: bigint
    label: string
    password: string
    registration: { [x: string]: string }
    username: string
  }[]
  apiKeys: {
    authorizedEntities: string[]
    clientId: string
    clientName: string
    clientSecret: string
    dailyQuota?: bigint | undefined
    enabled: boolean
    metadata?: { [x: string]: string } | undefined
    monthlyQuota?: bigint | undefined
    throttlingQuota?: bigint | undefined
  }[]
  appConfig?: { [x: string]: string } | undefined
  config: GlobalConfig
  date: string
  dateRaw: bigint
  errorTemplates: {
    messages: { [x: string]: string }
    serviceId: string
    template40x: string
    template50x: string
    templateBuild: string
    templateMaintenance: string
  }[]
  label: string
  serviceDescriptors: {
    Canary?: Canary | undefined
    additionalHeaders?: { [x: string]: string } | undefined
    api?: ExposedApi | undefined
    authConfigRef?: string | undefined
    buildMode: boolean
    chaosConfig?: ChaosConfig | undefined
    clientConfig?: ClientConfig | undefined
    clientValidatorRef?: string | undefined
    cors?: CorsSettings | undefined
    domain: string
    enabled: boolean
    enforceSecureCommunication: boolean
    env: string
    forceHttps: boolean
    groups: string[]
    gzip?: Gzip | undefined
    headersVerification?: { [x: string]: string } | undefined
    healthCheck?: HealthCheck | undefined
    id: string
    ipFiltering?: IpFiltering | undefined
    jwtVerifier?: LocalJwtVerifier | RefJwtVerifier | undefined
    localHost?: string | undefined
    localScheme?: string | undefined
    maintenanceMode: boolean
    matchingHeaders?: { [x: string]: string } | undefined
    matchingRoot?: string | undefined
    metadata?: { [x: string]: string } | undefined
    name: string
    overrideHost?: boolean | undefined
    privateApp: boolean
    privatePatterns?: string[] | undefined
    publicPatterns?: string[] | undefined
    redirectToLocal?: boolean | undefined
    redirection?: RedirectionSettings | undefined
    root: string
    secComExcludedPatterns?: string[] | undefined
    secComSettings?: HSAlgoSettings | RSAlgoSettings | ESAlgoSettings | JWKSAlgoSettings | undefined
    sendOtoroshiHeadersBack?: boolean | undefined
    statsdConfig?: StatsdConfig | undefined
    subdomain: string
    targets: Target[]
    transformerRef?: string | undefined
    userFacing?: boolean | undefined
    xForwardedHeaders?: boolean | undefined
  }[]
  serviceGroups: { description?: string | undefined; id: string; name: string }[]
  simpleAdmins: { createdAt: bigint; label: string; password: string; username: string }[]
  stats: ImportExportStats
}
type Done = { done: boolean }
type Stats = {
  calls: bigint
  concurrentHandledRequests: bigint
  dataIn: bigint
  dataInRate: number
  dataOut: bigint
  dataOutRate: number
  duration: number
  overhead: number
  rate: number
}
type Script = {
  code: { [x: string]: string }
  desc: { [x: string]: string }
  id: string
  name: string
}
type ScriptCompilationError = {
  column: string
  file: { [x: string]: string }
  line: string
  message: { [x: string]: string }
  rawMessage: { [x: string]: string }
}
type ScriptCompilationResult = { done: boolean; error?: ScriptCompilationError | undefined }
type Service = {
  Canary?: Canary | undefined
  additionalHeaders?: { [x: string]: string } | undefined
  api?: ExposedApi | undefined
  authConfigRef?: string | undefined
  buildMode: boolean
  chaosConfig?: ChaosConfig | undefined
  clientConfig?: ClientConfig | undefined
  clientValidatorRef?: string | undefined
  cors?: CorsSettings | undefined
  domain: string
  enabled: boolean
  enforceSecureCommunication: boolean
  env: string
  forceHttps: boolean
  groups: string[]
  gzip?: Gzip | undefined
  headersVerification?: { [x: string]: string } | undefined
  healthCheck?: HealthCheck | undefined
  id: string
  ipFiltering?: IpFiltering | undefined
  jwtVerifier?: LocalJwtVerifier | RefJwtVerifier | undefined
  localHost?: string | undefined
  localScheme?: string | undefined
  maintenanceMode: boolean
  matchingHeaders?: { [x: string]: string } | undefined
  matchingRoot?: string | undefined
  metadata?: { [x: string]: string } | undefined
  name: string
  overrideHost?: boolean | undefined
  privateApp: boolean
  privatePatterns?: string[] | undefined
  publicPatterns?: string[] | undefined
  redirectToLocal?: boolean | undefined
  redirection?: RedirectionSettings | undefined
  root: string
  secComExcludedPatterns?: string[] | undefined
  secComSettings?: HSAlgoSettings | RSAlgoSettings | ESAlgoSettings | JWKSAlgoSettings | undefined
  sendOtoroshiHeadersBack?: boolean | undefined
  statsdConfig?: StatsdConfig | undefined
  subdomain: string
  targets: Target[]
  transformerRef?: string | undefined
  userFacing?: boolean | undefined
  xForwardedHeaders?: boolean | undefined
}
type ErrorTemplate = {
  messages: { [x: string]: string }
  serviceId: string
  template40x: string
  template50x: string
  templateBuild: string
  templateMaintenance: string
}
type OutageStrategy = 'OneServicePerGroup' | 'AllServicesPerGroup'
type SnowMonkeyConfig = {
  chaosConfig: ChaosConfig
  dryRun: boolean
  enabled: boolean
  includeUserFacingDescriptors: boolean
  outageDurationFrom: number
  outageDurationTo: number
  outageStrategy: OutageStrategy
  startTime: string
  stopTime: string
  targetGroups: string[]
  timesPerDay: number
}
type Outage = { descriptorId: string; descriptorName: string; duration: number; until: string }
type GlobalJwtVerifier = {
  algoSettings: HSAlgoSettings | RSAlgoSettings | ESAlgoSettings | JWKSAlgoSettings
  desc: string
  enabled: boolean
  id: string
  name: string
  source: InQueryParam | InHeader | InCookie
  strategy: PassThrough | Sign | Transform
  strict: boolean
}
type OtoroshiHealth = {
  datastore: 'healthy' | 'unhealthy' | 'unreachable'
  otoroshi: 'healthy' | 'unhealthy' | 'down'
}
type Environment = string
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/apikeys': {
      $get:
        | { input: {}; output: ApiKey[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/auths': {
      $get:
        | {
            input: {}
            output: (LdapAuthModuleConfig | InMemoryAuthModuleConfig | GenericOauth2ModuleConfig)[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: {
              json: LdapAuthModuleConfig | InMemoryAuthModuleConfig | GenericOauth2ModuleConfig
            }
            output: LdapAuthModuleConfig | InMemoryAuthModuleConfig | GenericOauth2ModuleConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: LdapAuthModuleConfig | InMemoryAuthModuleConfig | GenericOauth2ModuleConfig
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: LdapAuthModuleConfig | InMemoryAuthModuleConfig | GenericOauth2ModuleConfig
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: LdapAuthModuleConfig | InMemoryAuthModuleConfig | GenericOauth2ModuleConfig
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/auths/:id': {
      $delete:
        | { input: { param: { id: string } }; output: Deleted; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { id: string } }
            output: LdapAuthModuleConfig | InMemoryAuthModuleConfig | GenericOauth2ModuleConfig
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: { param: { id: string } } & { json: Patch }
            output: LdapAuthModuleConfig | InMemoryAuthModuleConfig | GenericOauth2ModuleConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              json: LdapAuthModuleConfig | InMemoryAuthModuleConfig | GenericOauth2ModuleConfig
            }
            output: LdapAuthModuleConfig | InMemoryAuthModuleConfig | GenericOauth2ModuleConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: LdapAuthModuleConfig | InMemoryAuthModuleConfig | GenericOauth2ModuleConfig
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: LdapAuthModuleConfig | InMemoryAuthModuleConfig | GenericOauth2ModuleConfig
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: LdapAuthModuleConfig | InMemoryAuthModuleConfig | GenericOauth2ModuleConfig
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/certificates': {
      $get:
        | { input: {}; output: Certificate[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $post:
        | { input: { json: Certificate }; output: Certificate; outputFormat: 'json'; status: 200 }
        | { input: { json: Certificate }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Certificate }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: Certificate }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/certificates/:id': {
      $delete:
        | { input: { param: { id: string } }; output: Deleted; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { id: string } }
            output: Certificate
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: { param: { id: string } } & { json: Patch }
            output: Certificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { json: Certificate }
            output: Certificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: Certificate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: Certificate }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: Certificate }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/client-validators': {
      $get:
        | { input: {}; output: ValidationAuthority[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { json: ValidationAuthority }
            output: ValidationAuthority
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ValidationAuthority }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ValidationAuthority }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ValidationAuthority }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/client-validators/:id': {
      $delete:
        | { input: { param: { id: string } }; output: Deleted; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { id: string } }
            output: ValidationAuthority
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: { param: { id: string } } & { json: Patch }
            output: ValidationAuthority
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { json: ValidationAuthority }
            output: ValidationAuthority
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ValidationAuthority }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ValidationAuthority }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ValidationAuthority }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/data-exporter-configs': {
      $get:
        | { input: {}; output: DataExporterConfig[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { json: DataExporterConfig }
            output: DataExporterConfig
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: DataExporterConfig }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: DataExporterConfig }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: DataExporterConfig }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/data-exporter-configs/_bulk': {
      $delete:
        | {
            input: { json: Patch }
            output: {
              deleted?: boolean | undefined
              id?: boolean | undefined
              status?: '200' | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: Patch }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Patch }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: Patch }; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: { json: Patch }
            output: {
              id?: boolean | undefined
              status?: '200' | undefined
              updated?: boolean | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: Patch }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Patch }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: Patch }; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { json: DataExporterConfig }
            output: {
              created?: boolean | undefined
              id?: boolean | undefined
              status?: '201' | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: DataExporterConfig }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: DataExporterConfig }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: DataExporterConfig }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { json: DataExporterConfig }
            output: {
              id?: boolean | undefined
              status?: '200' | undefined
              updated?: boolean | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: DataExporterConfig }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: DataExporterConfig }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: DataExporterConfig }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/data-exporter-configs/_template': {
      $get:
        | {
            input: { query: { type?: string | undefined } }
            output: DataExporterConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { type?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { type?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/data-exporter-configs/:dataExporterConfigId': {
      $delete:
        | {
            input: { param: { dataExporterConfigId: string } }
            output: Deleted
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataExporterConfigId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { dataExporterConfigId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { dataExporterConfigId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { dataExporterConfigId: string } }
            output: DataExporterConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataExporterConfigId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { dataExporterConfigId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { dataExporterConfigId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { dataExporterConfigId: string } } & { json: Patch }
            output: DataExporterConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataExporterConfigId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { dataExporterConfigId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { dataExporterConfigId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { dataExporterConfigId: string } } & { json: DataExporterConfig }
            output: DataExporterConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataExporterConfigId: string } } & { json: DataExporterConfig }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { dataExporterConfigId: string } } & { json: DataExporterConfig }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { dataExporterConfigId: string } } & { json: DataExporterConfig }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/globalconfig': {
      $get:
        | { input: {}; output: GlobalConfig; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $patch:
        | { input: { json: Patch }; output: GlobalConfig; outputFormat: 'json'; status: 200 }
        | { input: { json: Patch }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Patch }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: Patch }; output: {}; outputFormat: string; status: 404 }
      $put:
        | { input: { json: GlobalConfig }; output: GlobalConfig; outputFormat: 'json'; status: 200 }
        | { input: { json: GlobalConfig }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: GlobalConfig }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: GlobalConfig }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/groups': {
      $get:
        | { input: {}; output: Group[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $post:
        | { input: { json: Group }; output: Group; outputFormat: 'json'; status: 200 }
        | { input: { json: Group }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Group }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: Group }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/groups/:groupId/apikeys': {
      $get:
        | {
            input: { param: { groupId: string } }
            output: ApiKey[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { groupId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { groupId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { groupId: string } }; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { param: { groupId: string } } & { json: ApiKey }
            output: ApiKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string } } & { json: ApiKey }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { groupId: string } } & { json: ApiKey }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { groupId: string } } & { json: ApiKey }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/groups/:groupId/apikeys/:clientId': {
      $delete:
        | {
            input: { param: { groupId: string; clientId: string } }
            output: Deleted
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { groupId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { groupId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { groupId: string; clientId: string } }
            output: ApiKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { groupId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { groupId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { groupId: string; clientId: string } } & { json: Patch }
            output: ApiKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string; clientId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { groupId: string; clientId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { groupId: string; clientId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { groupId: string; clientId: string } } & { json: ApiKey }
            output: ApiKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string; clientId: string } } & { json: ApiKey }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { groupId: string; clientId: string } } & { json: ApiKey }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { groupId: string; clientId: string } } & { json: ApiKey }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/groups/:groupId/apikeys/:clientId/quotas': {
      $delete:
        | {
            input: { param: { groupId: string; clientId: string } }
            output: Quotas
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { groupId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { groupId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { groupId: string; clientId: string } }
            output: Quotas
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { groupId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { groupId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/groups/:serviceGroupId': {
      $delete:
        | {
            input: { param: { serviceGroupId: string } }
            output: Deleted
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceGroupId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceGroupId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceGroupId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { serviceGroupId: string } }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceGroupId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceGroupId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceGroupId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { serviceGroupId: string } } & { json: Patch }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceGroupId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceGroupId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceGroupId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { serviceGroupId: string } } & { json: Group }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceGroupId: string } } & { json: Group }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceGroupId: string } } & { json: Group }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceGroupId: string } } & { json: Group }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/groups/:serviceGroupId/services': {
      $get:
        | {
            input: { param: { serviceGroupId: string } }
            output: ApiKey[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceGroupId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceGroupId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceGroupId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/import': {
      $post:
        | { input: { json: ImportExport }; output: Done; outputFormat: 'json'; status: 200 }
        | { input: { json: ImportExport }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ImportExport }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ImportExport }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/live': {
      $get:
        | { input: {}; output: Stats; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/live/:id': {
      $get:
        | { input: { param: { id: string } }; output: Stats; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Stats; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/otoroshi.json': {
      $get:
        | { input: {}; output: ImportExport; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $post:
        | { input: { json: ImportExport }; output: Done; outputFormat: 'json'; status: 200 }
        | { input: { json: ImportExport }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ImportExport }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ImportExport }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/scripts': {
      $get:
        | { input: {}; output: Script[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $post:
        | { input: { json: Script }; output: Script; outputFormat: 'json'; status: 200 }
        | { input: { json: Script }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Script }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: Script }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/scripts/_compile': {
      $post:
        | {
            input: { json: Script }
            output: ScriptCompilationResult
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: Script }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Script }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: Script }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/scripts/:scriptId': {
      $delete:
        | {
            input: { param: { scriptId: string } }
            output: Deleted
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { scriptId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { scriptId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { scriptId: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { scriptId: string } }
            output: Script
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { scriptId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { scriptId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { scriptId: string } }; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: { param: { scriptId: string } } & { json: Patch }
            output: Script
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scriptId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { scriptId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { scriptId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { scriptId: string } } & { json: Script }
            output: Script
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scriptId: string } } & { json: Script }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { scriptId: string } } & { json: Script }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { scriptId: string } } & { json: Script }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/services': {
      $get:
        | { input: {}; output: Service[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $post:
        | { input: { json: Service }; output: Service; outputFormat: 'json'; status: 200 }
        | { input: { json: Service }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Service }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: Service }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/services/:serviceId': {
      $delete:
        | {
            input: { param: { serviceId: string } }
            output: Deleted
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { serviceId: string } }
            output: Service
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: { param: { serviceId: string } } & { json: Patch }
            output: Service
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { serviceId: string } } & { json: Service }
            output: Service
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & { json: Service }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & { json: Service }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & { json: Service }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/services/:serviceId/apikeys': {
      $get:
        | {
            input: { param: { serviceId: string } }
            output: ApiKey[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { param: { serviceId: string } } & { json: ApiKey }
            output: ApiKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & { json: ApiKey }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & { json: ApiKey }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & { json: ApiKey }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/services/:serviceId/apikeys/:clientId': {
      $delete:
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: Deleted
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: ApiKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { serviceId: string; clientId: string } } & { json: Patch }
            output: ApiKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string; clientId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceId: string; clientId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceId: string; clientId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { serviceId: string; clientId: string } } & { json: ApiKey }
            output: ApiKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string; clientId: string } } & { json: ApiKey }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceId: string; clientId: string } } & { json: ApiKey }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceId: string; clientId: string } } & { json: ApiKey }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/services/:serviceId/apikeys/:clientId/group': {
      $get:
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/services/:serviceId/apikeys/:clientId/quotas': {
      $delete:
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: Quotas
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: Quotas
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceId: string; clientId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/services/:serviceId/targets': {
      $delete:
        | {
            input: { param: { serviceId: string } }
            output: Target[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { serviceId: string } }
            output: Target[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: { param: { serviceId: string } } & { json: Patch }
            output: Target[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { serviceId: string } } & { json: Target }
            output: Target[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & { json: Target }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & { json: Target }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & { json: Target }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/services/:serviceId/template': {
      $delete:
        | {
            input: { param: { serviceId: string } }
            output: Deleted
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { serviceId: string } }
            output: ErrorTemplate
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { param: { serviceId: string } } & { json: ErrorTemplate }
            output: ErrorTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & { json: ErrorTemplate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & { json: ErrorTemplate }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & { json: ErrorTemplate }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { serviceId: string } } & { json: ErrorTemplate }
            output: ErrorTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & { json: ErrorTemplate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & { json: ErrorTemplate }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & { json: ErrorTemplate }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/snowmonkey/_start': {
      $post:
        | { input: {}; output: Done; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/snowmonkey/_stop': {
      $post:
        | { input: {}; output: Done; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/snowmonkey/config': {
      $get:
        | { input: {}; output: SnowMonkeyConfig; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $patch:
        | { input: { json: Group }; output: SnowMonkeyConfig; outputFormat: 'json'; status: 200 }
        | { input: { json: Group }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Group }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: Group }; output: {}; outputFormat: string; status: 404 }
      $put:
        | { input: { json: Group }; output: SnowMonkeyConfig; outputFormat: 'json'; status: 200 }
        | { input: { json: Group }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Group }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: Group }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/snowmonkey/outages': {
      $delete:
        | { input: {}; output: Done; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $get:
        | { input: {}; output: Outage[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/verifiers': {
      $get:
        | { input: {}; output: GlobalJwtVerifier[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { json: GlobalJwtVerifier }
            output: GlobalJwtVerifier
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: GlobalJwtVerifier }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: GlobalJwtVerifier }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: GlobalJwtVerifier }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/verifiers/:verifierId': {
      $delete:
        | {
            input: { param: { verifierId: string } }
            output: Deleted
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { verifierId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { verifierId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { verifierId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { verifierId: string } }
            output: GlobalJwtVerifier
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { verifierId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { verifierId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { verifierId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { verifierId: string } } & { json: Patch }
            output: GlobalJwtVerifier
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { verifierId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { verifierId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { verifierId: string } } & { json: Patch }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { verifierId: string } } & { json: GlobalJwtVerifier }
            output: GlobalJwtVerifier
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { verifierId: string } } & { json: GlobalJwtVerifier }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { verifierId: string } } & { json: GlobalJwtVerifier }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { verifierId: string } } & { json: GlobalJwtVerifier }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/health': {
      $get:
        | { input: {}; output: OtoroshiHealth; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lines': {
      $get:
        | { input: {}; output: Environment; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lines/:line/services': {
      $get:
        | {
            input: { param: { line: string } }
            output: Service[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { line: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { line: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { line: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/new/apikey': {
      $get:
        | { input: {}; output: ApiKey; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/new/group': {
      $get:
        | { input: {}; output: Group; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/new/service': {
      $get:
        | { input: {}; output: Service; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  },
  '/'
>
export default routes
