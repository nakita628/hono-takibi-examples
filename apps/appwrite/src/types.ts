type Target = {
  $id: string
  $createdAt: string
  $updatedAt: string
  name: string
  userId: string
  providerId?: (string | null) | undefined
  providerType: string
  identifier: string
  expired: boolean
}
type User = {
  $id: string
  $createdAt: string
  $updatedAt: string
  name: string
  password?: (string | null) | undefined
  hash?: (string | null) | undefined
  hashOptions?: ({ [x: string]: unknown } | null) | undefined
  registration: string
  status: boolean
  labels: string[]
  passwordUpdate: string
  email: string
  phone: string
  emailVerification: boolean
  phoneVerification: boolean
  mfa: boolean
  prefs: { [x: string]: unknown }
  targets: Target[]
  accessedAt: string
}
type Identity = {
  $id: string
  $createdAt: string
  $updatedAt: string
  userId: string
  provider: string
  providerUid: string
  providerEmail: string
  providerAccessToken: string
  providerAccessTokenExpiry: string
  providerRefreshToken: string
}
type IdentityList = { total: number; identities: Identity[] }
type Jwt = { jwt: string }
type Log = {
  event: string
  userId: string
  userEmail: string
  userName: string
  mode: string
  ip: string
  time: string
  osCode: string
  osName: string
  osVersion: string
  clientType: string
  clientCode: string
  clientName: string
  clientVersion: string
  clientEngine: string
  clientEngineVersion: string
  deviceName: string
  deviceBrand: string
  deviceModel: string
  countryCode: string
  countryName: string
}
type LogList = { total: number; logs: Log[] }
type MfaType = { secret: string; uri: string }
type MfaChallenge = { $id: string; $createdAt: string; userId: string; expire: string }
type Session = {
  $id: string
  $createdAt: string
  $updatedAt: string
  userId: string
  expire: string
  provider: string
  providerUid: string
  providerAccessToken: string
  providerAccessTokenExpiry: string
  providerRefreshToken: string
  ip: string
  osCode: string
  osName: string
  osVersion: string
  clientType: string
  clientCode: string
  clientName: string
  clientVersion: string
  clientEngine: string
  clientEngineVersion: string
  deviceName: string
  deviceBrand: string
  deviceModel: string
  countryCode: string
  countryName: string
  current: boolean
  factors: string[]
  secret: string
  mfaUpdatedAt: string
}
type MfaFactors = { totp: boolean; phone: boolean; email: boolean; recoveryCode: boolean }
type MfaRecoveryCodes = { recoveryCodes: string[] }
type Preferences = { [x: string]: unknown }
type Token = {
  $id: string
  $createdAt: string
  userId: string
  secret: string
  expire: string
  phrase: string
}
type SessionList = { total: number; sessions: Session[] }
type Database = {
  $id: string
  name: string
  $createdAt: string
  $updatedAt: string
  enabled: boolean
}
type DatabaseList = { total: number; databases: Database[] }
type AttributeBoolean = {
  key: string
  type: string
  status: string
  error: string
  required: boolean
  array?: (boolean | null) | undefined
  $createdAt: string
  $updatedAt: string
  default?: (boolean | null) | undefined
}
type AttributeInteger = {
  key: string
  type: string
  status: string
  error: string
  required: boolean
  array?: (boolean | null) | undefined
  $createdAt: string
  $updatedAt: string
  min?: (number | null) | undefined
  max?: (number | null) | undefined
  default?: (number | null) | undefined
}
type AttributeFloat = {
  key: string
  type: string
  status: string
  error: string
  required: boolean
  array?: (boolean | null) | undefined
  $createdAt: string
  $updatedAt: string
  min?: (number | null) | undefined
  max?: (number | null) | undefined
  default?: (number | null) | undefined
}
type AttributeEmail = {
  key: string
  type: string
  status: string
  error: string
  required: boolean
  array?: (boolean | null) | undefined
  $createdAt: string
  $updatedAt: string
  format: string
  default?: (string | null) | undefined
}
type AttributeEnum = {
  key: string
  type: string
  status: string
  error: string
  required: boolean
  array?: (boolean | null) | undefined
  $createdAt: string
  $updatedAt: string
  elements: string[]
  format: string
  default?: (string | null) | undefined
}
type AttributeUrl = {
  key: string
  type: string
  status: string
  error: string
  required: boolean
  array?: (boolean | null) | undefined
  $createdAt: string
  $updatedAt: string
  format: string
  default?: (string | null) | undefined
}
type AttributeIp = {
  key: string
  type: string
  status: string
  error: string
  required: boolean
  array?: (boolean | null) | undefined
  $createdAt: string
  $updatedAt: string
  format: string
  default?: (string | null) | undefined
}
type AttributeDatetime = {
  key: string
  type: string
  status: string
  error: string
  required: boolean
  array?: (boolean | null) | undefined
  $createdAt: string
  $updatedAt: string
  format: string
  default?: (string | null) | undefined
}
type AttributeRelationship = {
  key: string
  type: string
  status: string
  error: string
  required: boolean
  array?: (boolean | null) | undefined
  $createdAt: string
  $updatedAt: string
  relatedCollection: string
  relationType: string
  twoWay: boolean
  twoWayKey: string
  onDelete: string
  side: string
}
type AttributeString = {
  key: string
  type: string
  status: string
  error: string
  required: boolean
  array?: (boolean | null) | undefined
  $createdAt: string
  $updatedAt: string
  size: number
  default?: (string | null) | undefined
  encrypt?: (boolean | null) | undefined
}
type Index = {
  key: string
  type: string
  status: string
  error: string
  attributes: string[]
  lengths: number[]
  orders?: (string[] | null) | undefined
  $createdAt: string
  $updatedAt: string
}
type Collection = {
  $id: string
  $createdAt: string
  $updatedAt: string
  $permissions: string[]
  databaseId: string
  name: string
  enabled: boolean
  documentSecurity: boolean
  attributes: (
    | AttributeBoolean
    | AttributeInteger
    | AttributeFloat
    | AttributeEmail
    | AttributeEnum
    | AttributeUrl
    | AttributeIp
    | AttributeDatetime
    | AttributeRelationship
    | AttributeString
  )[]
  indexes: Index[]
}
type CollectionList = { total: number; collections: Collection[] }
type AttributeList = {
  total: number
  attributes: (
    | AttributeBoolean
    | AttributeInteger
    | AttributeFloat
    | AttributeEmail
    | AttributeEnum
    | AttributeUrl
    | AttributeIp
    | AttributeDatetime
    | AttributeRelationship
    | AttributeString
  )[]
}
type Document = {
  $id: string
  $sequence: number
  $collectionId: string
  $databaseId: string
  $createdAt: string
  $updatedAt: string
  $permissions: string[]
}
type DocumentList = { total: number; documents: Document[] }
type IndexList = { total: number; indexes: Index[] }
type Variable = {
  $id: string
  $createdAt: string
  $updatedAt: string
  key: string
  value: string
  secret: boolean
  resourceType: string
  resourceId: string
}
type Function = {
  $id: string
  $createdAt: string
  $updatedAt: string
  execute: string[]
  name: string
  enabled: boolean
  live: boolean
  logging: boolean
  runtime: string
  deploymentId: string
  deploymentCreatedAt: string
  latestDeploymentId: string
  latestDeploymentCreatedAt: string
  latestDeploymentStatus: string
  scopes: string[]
  vars: Variable[]
  events: string[]
  schedule: string
  timeout: number
  entrypoint: string
  commands: string
  version: string
  installationId: string
  providerRepositoryId: string
  providerBranch: string
  providerRootDirectory: string
  providerSilentMode: boolean
  specification: string
}
type FunctionList = { total: number; functions: Function[] }
type Runtime = {
  $id: string
  key: string
  name: string
  version: string
  base: string
  image: string
  logo: string
  supports: string[]
}
type RuntimeList = { total: number; runtimes: Runtime[] }
type Specification = { memory: number; cpus: number; enabled: boolean; slug: string }
type SpecificationList = { total: number; specifications: Specification[] }
type Deployment = {
  $id: string
  $createdAt: string
  $updatedAt: string
  type: string
  resourceId: string
  resourceType: string
  entrypoint: string
  sourceSize: number
  buildSize: number
  totalSize: number
  buildId: string
  activate: boolean
  screenshotLight: string
  screenshotDark: string
  status: string
  buildLogs: string
  buildDuration: number
  providerRepositoryName: string
  providerRepositoryOwner: string
  providerRepositoryUrl: string
  providerBranch: string
  providerCommitHash: string
  providerCommitAuthorUrl: string
  providerCommitAuthor: string
  providerCommitMessage: string
  providerCommitUrl: string
  providerBranchUrl: string
}
type DeploymentList = { total: number; deployments: Deployment[] }
type Headers = { name: string; value: string }
type Execution = {
  $id: string
  $createdAt: string
  $updatedAt: string
  $permissions: string[]
  functionId: string
  deploymentId: string
  trigger: string
  status: string
  requestMethod: string
  requestPath: string
  requestHeaders: Headers[]
  responseStatusCode: number
  responseBody: string
  responseHeaders: Headers[]
  logs: string
  errors: string
  duration: number
  scheduledAt?: (string | null) | undefined
}
type ExecutionList = { total: number; executions: Execution[] }
type VariableList = { total: number; variables: Variable[] }
type Any = { [x: string]: unknown }
type HealthStatus = { name: string; ping: number; status: string }
type HealthAntivirus = { version: string; status: string }
type HealthCertificate = {
  name: string
  subjectSN: string
  issuerOrganisation: string
  validFrom: string
  validTo: string
  signatureTypeSN: string
}
type HealthQueue = { size: number }
type HealthTime = { remoteTime: number; localTime: number; diff: number }
type Locale = {
  ip: string
  countryCode: string
  country: string
  continentCode: string
  continent: string
  eu: boolean
  currency: string
}
type LocaleCode = { code: string; name: string }
type LocaleCodeList = { total: number; localeCodes: LocaleCode[] }
type Continent = { name: string; code: string }
type ContinentList = { total: number; continents: Continent[] }
type Country = { name: string; code: string }
type CountryList = { total: number; countries: Country[] }
type Phone = { code: string; countryCode: string; countryName: string }
type PhoneList = { total: number; phones: Phone[] }
type Currency = {
  symbol: string
  name: string
  symbolNative: string
  decimalDigits: number
  rounding: number
  code: string
  namePlural: string
}
type CurrencyList = { total: number; currencies: Currency[] }
type Language = { name: string; code: string; nativeName: string }
type LanguageList = { total: number; languages: Language[] }
type Message = {
  $id: string
  $createdAt: string
  $updatedAt: string
  providerType: string
  topics: string[]
  users: string[]
  targets: string[]
  scheduledAt?: (string | null) | undefined
  deliveredAt?: (string | null) | undefined
  deliveryErrors?: (string[] | null) | undefined
  deliveredTotal: number
  data: { [x: string]: unknown }
  status: string
}
type MessageList = { total: number; messages: Message[] }
type TargetList = { total: number; targets: Target[] }
type Provider = {
  $id: string
  $createdAt: string
  $updatedAt: string
  name: string
  provider: string
  enabled: boolean
  type: string
  credentials: { [x: string]: unknown }
  options?: ({ [x: string]: unknown } | null) | undefined
}
type ProviderList = { total: number; providers: Provider[] }
type Topic = {
  $id: string
  $createdAt: string
  $updatedAt: string
  name: string
  emailTotal: number
  smsTotal: number
  pushTotal: number
  subscribe: string[]
}
type TopicList = { total: number; topics: Topic[] }
type Subscriber = {
  $id: string
  $createdAt: string
  $updatedAt: string
  targetId: string
  target: { [x: string]: unknown }
  userId: string
  userName: string
  topicId: string
  providerType: string
}
type SubscriberList = { total: number; subscribers: Subscriber[] }
type Site = {
  $id: string
  $createdAt: string
  $updatedAt: string
  name: string
  enabled: boolean
  live: boolean
  logging: boolean
  framework: string
  deploymentId: string
  deploymentCreatedAt: string
  deploymentScreenshotLight: string
  deploymentScreenshotDark: string
  latestDeploymentId: string
  latestDeploymentCreatedAt: string
  latestDeploymentStatus: string
  vars: Variable[]
  timeout: number
  installCommand: string
  buildCommand: string
  outputDirectory: string
  installationId: string
  providerRepositoryId: string
  providerBranch: string
  providerRootDirectory: string
  providerSilentMode: boolean
  specification: string
  buildRuntime: string
  adapter: string
  fallbackFile: string
}
type SiteList = { total: number; sites: Site[] }
type FrameworkAdapter = {
  key: string
  installCommand: string
  buildCommand: string
  outputDirectory: string
  fallbackFile: string
}
type Framework = {
  key: string
  name: string
  buildRuntime: string
  runtimes: string[]
  adapters: FrameworkAdapter[]
}
type FrameworkList = { total: number; frameworks: Framework[] }
type Bucket = {
  $id: string
  $createdAt: string
  $updatedAt: string
  $permissions: string[]
  fileSecurity: boolean
  name: string
  enabled: boolean
  maximumFileSize: number
  allowedFileExtensions: string[]
  compression: string
  encryption: boolean
  antivirus: boolean
}
type BucketList = { total: number; buckets: Bucket[] }
type File2 = {
  $id: string
  bucketId: string
  $createdAt: string
  $updatedAt: string
  $permissions: string[]
  name: string
  signature: string
  mimeType: string
  sizeOriginal: number
  chunksTotal: number
  chunksUploaded: number
}
type FileList = { total: number; files: File2[] }
type Team = {
  $id: string
  $createdAt: string
  $updatedAt: string
  name: string
  total: number
  prefs: { [x: string]: unknown }
}
type TeamList = { total: number; teams: Team[] }
type Membership = {
  $id: string
  $createdAt: string
  $updatedAt: string
  userId: string
  userName: string
  userEmail: string
  teamId: string
  teamName: string
  invited: string
  joined: string
  confirm: boolean
  mfa: boolean
  roles: string[]
}
type MembershipList = { total: number; memberships: Membership[] }
type ResourceToken = {
  $id: string
  $createdAt: string
  resourceId: string
  resourceType: string
  expire: string
  secret: string
  accessedAt: string
}
type ResourceTokenList = { total: number; tokens: ResourceToken[] }
type UserList = { total: number; users: User[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account': {
      $get: { input: {}; output: User; outputFormat: 'json'; status: 200 }
      $post: {
        input: {
          json: { userId: string; email: string; password: string; name?: string | undefined }
        }
        output: User
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/account/email': {
      $patch: {
        input: { json: { email: string; password: string } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/identities': {
      $get: {
        input: { query: { queries?: string[] | undefined } }
        output: IdentityList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/identities/:identityId': {
      $delete: {
        input: { param: { identityId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/account/jwts': { $post: { input: {}; output: Jwt; outputFormat: 'json'; status: 201 } }
  } & {
    '/account/logs': {
      $get: {
        input: { query: { queries?: string[] | undefined } }
        output: LogList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/mfa': {
      $patch: { input: { json: { mfa: boolean } }; output: User; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/account/mfa/authenticators/:type': {
      $post: {
        input: { param: { type: 'totp' } }
        output: MfaType
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { type: 'totp' } } & { json: { otp: string } }
        output: User
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { type: 'totp' } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/account/mfa/challenge': {
      $post: {
        input: { json: { factor: 'email' | 'phone' | 'totp' | 'recoverycode' } }
        output: MfaChallenge
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: { challengeId: string; otp: string } }
        output: Session
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/mfa/factors': {
      $get: { input: {}; output: MfaFactors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/account/mfa/recovery-codes': {
      $get: { input: {}; output: MfaRecoveryCodes; outputFormat: 'json'; status: 200 }
      $post: { input: {}; output: MfaRecoveryCodes; outputFormat: 'json'; status: 201 }
      $patch: { input: {}; output: MfaRecoveryCodes; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/account/name': {
      $patch: { input: { json: { name: string } }; output: User; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/account/password': {
      $patch: {
        input: { json: { password: string; oldPassword?: string | undefined } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/phone': {
      $patch: {
        input: { json: { phone: string; password: string } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/prefs': {
      $get: { input: {}; output: Preferences; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { json: { prefs: { [x: string]: unknown } } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/recovery': {
      $post: {
        input: { json: { email: string; url: string } }
        output: Token
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: { userId: string; secret: string; password: string } }
        output: Token
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/sessions': {
      $get: { input: {}; output: SessionList; outputFormat: 'json'; status: 200 }
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/account/sessions/anonymous': {
      $post: { input: {}; output: Session; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/account/sessions/email': {
      $post: {
        input: { json: { email: string; password: string } }
        output: Session
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/account/sessions/magic-url': {
      $put: {
        input: { json: { userId: string; secret: string } }
        output: Session
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/account/sessions/phone': {
      $put: {
        input: { json: { userId: string; secret: string } }
        output: Session
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/account/sessions/token': {
      $post: {
        input: { json: { userId: string; secret: string } }
        output: Session
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/account/sessions/:sessionId': {
      $get: {
        input: { param: { sessionId: string } }
        output: Session
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { sessionId: string } }
        output: Session
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { sessionId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/account/status': { $patch: { input: {}; output: User; outputFormat: 'json'; status: 200 } }
  } & {
    '/account/tokens/email': {
      $post: {
        input: { json: { userId: string; email: string; phrase?: boolean | undefined } }
        output: Token
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/account/tokens/magic-url': {
      $post: {
        input: {
          json: {
            userId: string
            email: string
            url?: string | undefined
            phrase?: boolean | undefined
          }
        }
        output: Token
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/account/tokens/oauth2/:provider': {
      $get: {
        input: {
          param: {
            provider:
              | 'amazon'
              | 'apple'
              | 'auth0'
              | 'authentik'
              | 'autodesk'
              | 'bitbucket'
              | 'bitly'
              | 'box'
              | 'dailymotion'
              | 'discord'
              | 'disqus'
              | 'dropbox'
              | 'etsy'
              | 'facebook'
              | 'figma'
              | 'github'
              | 'gitlab'
              | 'google'
              | 'linkedin'
              | 'microsoft'
              | 'notion'
              | 'oidc'
              | 'okta'
              | 'paypal'
              | 'paypalSandbox'
              | 'podio'
              | 'salesforce'
              | 'slack'
              | 'spotify'
              | 'stripe'
              | 'tradeshift'
              | 'tradeshiftBox'
              | 'twitch'
              | 'wordpress'
              | 'yahoo'
              | 'yammer'
              | 'yandex'
              | 'zoho'
              | 'zoom'
              | 'mock'
          }
        } & {
          query: {
            success?: string | undefined
            failure?: string | undefined
            scopes?: string[] | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 301
      }
    }
  } & {
    '/account/tokens/phone': {
      $post: {
        input: { json: { userId: string; phone: string } }
        output: Token
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/account/verification': {
      $post: { input: { json: { url: string } }; output: Token; outputFormat: 'json'; status: 201 }
      $put: {
        input: { json: { userId: string; secret: string } }
        output: Token
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/verification/phone': {
      $post: { input: {}; output: Token; outputFormat: 'json'; status: 201 }
      $put: {
        input: { json: { userId: string; secret: string } }
        output: Token
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/avatars/browsers/:code': {
      $get: {
        input: {
          param: {
            code:
              | 'aa'
              | 'an'
              | 'ch'
              | 'ci'
              | 'cm'
              | 'cr'
              | 'ff'
              | 'sf'
              | 'mf'
              | 'ps'
              | 'oi'
              | 'om'
              | 'op'
              | 'on'
          }
        } & {
          query: {
            width?: number | undefined
            height?: number | undefined
            quality?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/avatars/credit-cards/:code': {
      $get: {
        input: {
          param: {
            code:
              | 'amex'
              | 'argencard'
              | 'cabal'
              | 'cencosud'
              | 'diners'
              | 'discover'
              | 'elo'
              | 'hipercard'
              | 'jcb'
              | 'mastercard'
              | 'naranja'
              | 'targeta-shopping'
              | 'unionpay'
              | 'visa'
              | 'mir'
              | 'maestro'
              | 'rupay'
          }
        } & {
          query: {
            width?: number | undefined
            height?: number | undefined
            quality?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/avatars/favicon': {
      $get: { input: { query: { url: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/avatars/flags/:code': {
      $get: {
        input: {
          param: {
            code:
              | 'af'
              | 'ao'
              | 'al'
              | 'ad'
              | 'ae'
              | 'ar'
              | 'am'
              | 'ag'
              | 'au'
              | 'at'
              | 'az'
              | 'bi'
              | 'be'
              | 'bj'
              | 'bf'
              | 'bd'
              | 'bg'
              | 'bh'
              | 'bs'
              | 'ba'
              | 'by'
              | 'bz'
              | 'bo'
              | 'br'
              | 'bb'
              | 'bn'
              | 'bt'
              | 'bw'
              | 'cf'
              | 'ca'
              | 'ch'
              | 'cl'
              | 'cn'
              | 'ci'
              | 'cm'
              | 'cd'
              | 'cg'
              | 'co'
              | 'km'
              | 'cv'
              | 'cr'
              | 'cu'
              | 'cy'
              | 'cz'
              | 'de'
              | 'dj'
              | 'dm'
              | 'dk'
              | 'do'
              | 'dz'
              | 'ec'
              | 'eg'
              | 'er'
              | 'es'
              | 'ee'
              | 'et'
              | 'fi'
              | 'fj'
              | 'fr'
              | 'fm'
              | 'ga'
              | 'gb'
              | 'ge'
              | 'gh'
              | 'gn'
              | 'gm'
              | 'gw'
              | 'gq'
              | 'gr'
              | 'gd'
              | 'gt'
              | 'gy'
              | 'hn'
              | 'hr'
              | 'ht'
              | 'hu'
              | 'id'
              | 'in'
              | 'ie'
              | 'ir'
              | 'iq'
              | 'is'
              | 'il'
              | 'it'
              | 'jm'
              | 'jo'
              | 'jp'
              | 'kz'
              | 'ke'
              | 'kg'
              | 'kh'
              | 'ki'
              | 'kn'
              | 'kr'
              | 'kw'
              | 'la'
              | 'lb'
              | 'lr'
              | 'ly'
              | 'lc'
              | 'li'
              | 'lk'
              | 'ls'
              | 'lt'
              | 'lu'
              | 'lv'
              | 'ma'
              | 'mc'
              | 'md'
              | 'mg'
              | 'mv'
              | 'mx'
              | 'mh'
              | 'mk'
              | 'ml'
              | 'mt'
              | 'mm'
              | 'me'
              | 'mn'
              | 'mz'
              | 'mr'
              | 'mu'
              | 'mw'
              | 'my'
              | 'na'
              | 'ne'
              | 'ng'
              | 'ni'
              | 'nl'
              | 'no'
              | 'np'
              | 'nr'
              | 'nz'
              | 'om'
              | 'pk'
              | 'pa'
              | 'pe'
              | 'ph'
              | 'pw'
              | 'pg'
              | 'pl'
              | 'pf'
              | 'kp'
              | 'pt'
              | 'py'
              | 'qa'
              | 'ro'
              | 'ru'
              | 'rw'
              | 'sa'
              | 'sd'
              | 'sn'
              | 'sg'
              | 'sb'
              | 'sl'
              | 'sv'
              | 'sm'
              | 'so'
              | 'rs'
              | 'ss'
              | 'st'
              | 'sr'
              | 'sk'
              | 'si'
              | 'se'
              | 'sz'
              | 'sc'
              | 'sy'
              | 'td'
              | 'tg'
              | 'th'
              | 'tj'
              | 'tm'
              | 'tl'
              | 'to'
              | 'tt'
              | 'tn'
              | 'tr'
              | 'tv'
              | 'tz'
              | 'ug'
              | 'ua'
              | 'uy'
              | 'us'
              | 'uz'
              | 'va'
              | 'vc'
              | 've'
              | 'vn'
              | 'vu'
              | 'ws'
              | 'ye'
              | 'za'
              | 'zm'
              | 'zw'
          }
        } & {
          query: {
            width?: number | undefined
            height?: number | undefined
            quality?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/avatars/image': {
      $get: {
        input: { query: { url: string; width?: number | undefined; height?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/avatars/initials': {
      $get: {
        input: {
          query: {
            name?: string | undefined
            width?: number | undefined
            height?: number | undefined
            background?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/avatars/qr': {
      $get: {
        input: {
          query: {
            text: string
            size?: number | undefined
            margin?: number | undefined
            download?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/databases': {
      $get: {
        input: { query: { queries?: string[] | undefined; search?: string | undefined } }
        output: DatabaseList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { databaseId: string; name: string; enabled?: boolean | undefined } }
        output: Database
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/databases/:databaseId': {
      $get: {
        input: { param: { databaseId: string } }
        output: Database
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { databaseId: string } } & {
          json: { name: string; enabled?: boolean | undefined }
        }
        output: Database
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { databaseId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/databases/:databaseId/collections': {
      $get: {
        input: { param: { databaseId: string } } & {
          query: { queries?: string[] | undefined; search?: string | undefined }
        }
        output: CollectionList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { databaseId: string } } & {
          json: {
            collectionId: string
            name: string
            permissions?: string[] | undefined
            documentSecurity?: boolean | undefined
            enabled?: boolean | undefined
          }
        }
        output: Collection
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId': {
      $get: {
        input: { param: { databaseId: string; collectionId: string } }
        output: Collection
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { databaseId: string; collectionId: string } } & {
          json: {
            name: string
            permissions?: string[] | undefined
            documentSecurity?: boolean | undefined
            enabled?: boolean | undefined
          }
        }
        output: Collection
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { databaseId: string; collectionId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes': {
      $get: {
        input: { param: { databaseId: string; collectionId: string } } & {
          query: { queries?: string[] | undefined }
        }
        output: AttributeList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/boolean': {
      $post: {
        input: { param: { databaseId: string; collectionId: string } } & {
          json: {
            key: string
            required: boolean
            default?: boolean | undefined
            array?: boolean | undefined
          }
        }
        output: AttributeBoolean
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/boolean/:key': {
      $patch: {
        input: { param: { databaseId: string; collectionId: string; key: string } } & {
          json: { required: boolean; default: boolean; newKey?: string | undefined }
        }
        output: AttributeBoolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/datetime': {
      $post: {
        input: { param: { databaseId: string; collectionId: string } } & {
          json: {
            key: string
            required: boolean
            default?: string | undefined
            array?: boolean | undefined
          }
        }
        output: AttributeDatetime
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/datetime/:key': {
      $patch: {
        input: { param: { databaseId: string; collectionId: string; key: string } } & {
          json: { required: boolean; default: string; newKey?: string | undefined }
        }
        output: AttributeDatetime
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/email': {
      $post: {
        input: { param: { databaseId: string; collectionId: string } } & {
          json: {
            key: string
            required: boolean
            default?: string | undefined
            array?: boolean | undefined
          }
        }
        output: AttributeEmail
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/email/:key': {
      $patch: {
        input: { param: { databaseId: string; collectionId: string; key: string } } & {
          json: { required: boolean; default: string; newKey?: string | undefined }
        }
        output: AttributeEmail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/enum': {
      $post: {
        input: { param: { databaseId: string; collectionId: string } } & {
          json: {
            key: string
            elements: string[]
            required: boolean
            default?: string | undefined
            array?: boolean | undefined
          }
        }
        output: AttributeEnum
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/enum/:key': {
      $patch: {
        input: { param: { databaseId: string; collectionId: string; key: string } } & {
          json: {
            elements: string[]
            required: boolean
            default: string
            newKey?: string | undefined
          }
        }
        output: AttributeEnum
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/float': {
      $post: {
        input: { param: { databaseId: string; collectionId: string } } & {
          json: {
            key: string
            required: boolean
            min?: number | undefined
            max?: number | undefined
            default?: number | undefined
            array?: boolean | undefined
          }
        }
        output: AttributeFloat
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/float/:key': {
      $patch: {
        input: { param: { databaseId: string; collectionId: string; key: string } } & {
          json: {
            required: boolean
            min?: number | undefined
            max?: number | undefined
            default: number
            newKey?: string | undefined
          }
        }
        output: AttributeFloat
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/integer': {
      $post: {
        input: { param: { databaseId: string; collectionId: string } } & {
          json: {
            key: string
            required: boolean
            min?: number | undefined
            max?: number | undefined
            default?: number | undefined
            array?: boolean | undefined
          }
        }
        output: AttributeInteger
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/integer/:key': {
      $patch: {
        input: { param: { databaseId: string; collectionId: string; key: string } } & {
          json: {
            required: boolean
            min?: number | undefined
            max?: number | undefined
            default: number
            newKey?: string | undefined
          }
        }
        output: AttributeInteger
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/ip': {
      $post: {
        input: { param: { databaseId: string; collectionId: string } } & {
          json: {
            key: string
            required: boolean
            default?: string | undefined
            array?: boolean | undefined
          }
        }
        output: AttributeIp
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/ip/:key': {
      $patch: {
        input: { param: { databaseId: string; collectionId: string; key: string } } & {
          json: { required: boolean; default: string; newKey?: string | undefined }
        }
        output: AttributeIp
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/relationship': {
      $post: {
        input: { param: { databaseId: string; collectionId: string } } & {
          json: {
            relatedCollectionId: string
            type: 'oneToOne' | 'manyToOne' | 'manyToMany' | 'oneToMany'
            twoWay?: boolean | undefined
            key?: string | undefined
            twoWayKey?: string | undefined
            onDelete?: 'cascade' | 'restrict' | 'setNull' | undefined
          }
        }
        output: AttributeRelationship
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/string': {
      $post: {
        input: { param: { databaseId: string; collectionId: string } } & {
          json: {
            key: string
            size: number
            required: boolean
            default?: string | undefined
            array?: boolean | undefined
            encrypt?: boolean | undefined
          }
        }
        output: AttributeString
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/string/:key': {
      $patch: {
        input: { param: { databaseId: string; collectionId: string; key: string } } & {
          json: {
            required: boolean
            default: string
            size?: number | undefined
            newKey?: string | undefined
          }
        }
        output: AttributeString
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/url': {
      $post: {
        input: { param: { databaseId: string; collectionId: string } } & {
          json: {
            key: string
            required: boolean
            default?: string | undefined
            array?: boolean | undefined
          }
        }
        output: AttributeUrl
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/url/:key': {
      $patch: {
        input: { param: { databaseId: string; collectionId: string; key: string } } & {
          json: { required: boolean; default: string; newKey?: string | undefined }
        }
        output: AttributeUrl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/:key': {
      $get: {
        input: { param: { databaseId: string; collectionId: string; key: string } }
        output:
          | AttributeBoolean
          | AttributeInteger
          | AttributeFloat
          | AttributeEmail
          | AttributeEnum
          | AttributeUrl
          | AttributeIp
          | AttributeDatetime
          | AttributeRelationship
          | AttributeString
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { databaseId: string; collectionId: string; key: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/attributes/:key/relationship': {
      $patch: {
        input: { param: { databaseId: string; collectionId: string; key: string } } & {
          json: {
            onDelete?: 'cascade' | 'restrict' | 'setNull' | undefined
            newKey?: string | undefined
          }
        }
        output: AttributeRelationship
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/documents': {
      $get: {
        input: { param: { databaseId: string; collectionId: string } } & {
          query: { queries?: string[] | undefined }
        }
        output: DocumentList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { databaseId: string; collectionId: string } } & {
          json: {
            documentId?: string | undefined
            data?: { [x: string]: unknown } | undefined
            permissions?: string[] | undefined
            documents?: { [x: string]: unknown }[] | undefined
          }
        }
        output: Document
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { param: { databaseId: string; collectionId: string } } & {
          json: { documents: { [x: string]: unknown }[] }
        }
        output: DocumentList
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { databaseId: string; collectionId: string } } & {
          json: { data?: { [x: string]: unknown } | undefined; queries?: string[] | undefined }
        }
        output: DocumentList
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { databaseId: string; collectionId: string } } & {
          json: { queries?: string[] | undefined }
        }
        output: DocumentList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/documents/:documentId': {
      $get: {
        input: { param: { databaseId: string; collectionId: string; documentId: string } } & {
          query: { queries?: string[] | undefined }
        }
        output: Document
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { databaseId: string; collectionId: string; documentId: string } } & {
          json: { data: { [x: string]: unknown }; permissions?: string[] | undefined }
        }
        output: Document
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { databaseId: string; collectionId: string; documentId: string } } & {
          json: { data?: { [x: string]: unknown } | undefined; permissions?: string[] | undefined }
        }
        output: Document
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { databaseId: string; collectionId: string; documentId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/documents/:documentId/:attribute/decrement': {
      $patch: {
        input: {
          param: { databaseId: string; collectionId: string; documentId: string; attribute: string }
        } & { json: { value?: number | undefined; min?: number | undefined } }
        output: Document
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/documents/:documentId/:attribute/increment': {
      $patch: {
        input: {
          param: { databaseId: string; collectionId: string; documentId: string; attribute: string }
        } & { json: { value?: number | undefined; max?: number | undefined } }
        output: Document
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/indexes': {
      $get: {
        input: { param: { databaseId: string; collectionId: string } } & {
          query: { queries?: string[] | undefined }
        }
        output: IndexList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { databaseId: string; collectionId: string } } & {
          json: {
            key: string
            type: 'key' | 'fulltext' | 'unique'
            attributes: string[]
            orders?: string[] | undefined
            lengths?: number[] | undefined
          }
        }
        output: Index
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/databases/:databaseId/collections/:collectionId/indexes/:key': {
      $get: {
        input: { param: { databaseId: string; collectionId: string; key: string } }
        output: Index
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { databaseId: string; collectionId: string; key: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/functions': {
      $get: {
        input: { query: { queries?: string[] | undefined; search?: string | undefined } }
        output: FunctionList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            functionId: string
            name: string
            runtime:
              | 'node-14.5'
              | 'node-16.0'
              | 'node-18.0'
              | 'node-19.0'
              | 'node-20.0'
              | 'node-21.0'
              | 'node-22'
              | 'php-8.0'
              | 'php-8.1'
              | 'php-8.2'
              | 'php-8.3'
              | 'ruby-3.0'
              | 'ruby-3.1'
              | 'ruby-3.2'
              | 'ruby-3.3'
              | 'python-3.8'
              | 'python-3.9'
              | 'python-3.10'
              | 'python-3.11'
              | 'python-3.12'
              | 'python-ml-3.11'
              | 'python-ml-3.12'
              | 'deno-1.21'
              | 'deno-1.24'
              | 'deno-1.35'
              | 'deno-1.40'
              | 'deno-1.46'
              | 'deno-2.0'
              | 'dart-2.15'
              | 'dart-2.16'
              | 'dart-2.17'
              | 'dart-2.18'
              | 'dart-2.19'
              | 'dart-3.0'
              | 'dart-3.1'
              | 'dart-3.3'
              | 'dart-3.5'
              | 'dart-3.8'
              | 'dotnet-6.0'
              | 'dotnet-7.0'
              | 'dotnet-8.0'
              | 'java-8.0'
              | 'java-11.0'
              | 'java-17.0'
              | 'java-18.0'
              | 'java-21.0'
              | 'java-22'
              | 'swift-5.5'
              | 'swift-5.8'
              | 'swift-5.9'
              | 'swift-5.10'
              | 'kotlin-1.6'
              | 'kotlin-1.8'
              | 'kotlin-1.9'
              | 'kotlin-2.0'
              | 'cpp-17'
              | 'cpp-20'
              | 'bun-1.0'
              | 'bun-1.1'
              | 'go-1.23'
              | 'static-1'
              | 'flutter-3.24'
              | 'flutter-3.27'
              | 'flutter-3.29'
              | 'flutter-3.32'
            execute?: string[] | undefined
            events?: string[] | undefined
            schedule?: string | undefined
            timeout?: number | undefined
            enabled?: boolean | undefined
            logging?: boolean | undefined
            entrypoint?: string | undefined
            commands?: string | undefined
            scopes?: string[] | undefined
            installationId?: string | undefined
            providerRepositoryId?: string | undefined
            providerBranch?: string | undefined
            providerSilentMode?: boolean | undefined
            providerRootDirectory?: string | undefined
            specification?: string | undefined
          }
        }
        output: Function
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/functions/runtimes': {
      $get: { input: {}; output: RuntimeList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/functions/specifications': {
      $get: { input: {}; output: SpecificationList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/functions/:functionId': {
      $get: {
        input: { param: { functionId: string } }
        output: Function
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { functionId: string } } & {
          json: {
            name: string
            runtime?:
              | 'node-14.5'
              | 'node-16.0'
              | 'node-18.0'
              | 'node-19.0'
              | 'node-20.0'
              | 'node-21.0'
              | 'node-22'
              | 'php-8.0'
              | 'php-8.1'
              | 'php-8.2'
              | 'php-8.3'
              | 'ruby-3.0'
              | 'ruby-3.1'
              | 'ruby-3.2'
              | 'ruby-3.3'
              | 'python-3.8'
              | 'python-3.9'
              | 'python-3.10'
              | 'python-3.11'
              | 'python-3.12'
              | 'python-ml-3.11'
              | 'python-ml-3.12'
              | 'deno-1.21'
              | 'deno-1.24'
              | 'deno-1.35'
              | 'deno-1.40'
              | 'deno-1.46'
              | 'deno-2.0'
              | 'dart-2.15'
              | 'dart-2.16'
              | 'dart-2.17'
              | 'dart-2.18'
              | 'dart-2.19'
              | 'dart-3.0'
              | 'dart-3.1'
              | 'dart-3.3'
              | 'dart-3.5'
              | 'dart-3.8'
              | 'dotnet-6.0'
              | 'dotnet-7.0'
              | 'dotnet-8.0'
              | 'java-8.0'
              | 'java-11.0'
              | 'java-17.0'
              | 'java-18.0'
              | 'java-21.0'
              | 'java-22'
              | 'swift-5.5'
              | 'swift-5.8'
              | 'swift-5.9'
              | 'swift-5.10'
              | 'kotlin-1.6'
              | 'kotlin-1.8'
              | 'kotlin-1.9'
              | 'kotlin-2.0'
              | 'cpp-17'
              | 'cpp-20'
              | 'bun-1.0'
              | 'bun-1.1'
              | 'go-1.23'
              | 'static-1'
              | 'flutter-3.24'
              | 'flutter-3.27'
              | 'flutter-3.29'
              | 'flutter-3.32'
              | undefined
            execute?: string[] | undefined
            events?: string[] | undefined
            schedule?: string | undefined
            timeout?: number | undefined
            enabled?: boolean | undefined
            logging?: boolean | undefined
            entrypoint?: string | undefined
            commands?: string | undefined
            scopes?: string[] | undefined
            installationId?: string | undefined
            providerRepositoryId?: string | undefined
            providerBranch?: string | undefined
            providerSilentMode?: boolean | undefined
            providerRootDirectory?: string | undefined
            specification?: string | undefined
          }
        }
        output: Function
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { functionId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/functions/:functionId/deployment': {
      $patch: {
        input: { param: { functionId: string } } & { json: { deploymentId: string } }
        output: Function
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/functions/:functionId/deployments': {
      $get: {
        input: { param: { functionId: string } } & {
          query: { queries?: string[] | undefined; search?: string | undefined }
        }
        output: DeploymentList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { functionId: string } } & {
          form: {
            entrypoint?: string | undefined
            commands?: string | undefined
            code: string
            activate: boolean
          }
        }
        output: Deployment
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/functions/:functionId/deployments/duplicate': {
      $post: {
        input: { param: { functionId: string } } & {
          json: { deploymentId: string; buildId?: string | undefined }
        }
        output: Deployment
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/functions/:functionId/deployments/template': {
      $post: {
        input: { param: { functionId: string } } & {
          json: {
            repository: string
            owner: string
            rootDirectory: string
            version: string
            activate?: boolean | undefined
          }
        }
        output: Deployment
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/functions/:functionId/deployments/vcs': {
      $post: {
        input: { param: { functionId: string } } & {
          json: { type: 'branch' | 'commit'; reference: string; activate?: boolean | undefined }
        }
        output: Deployment
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/functions/:functionId/deployments/:deploymentId': {
      $get: {
        input: { param: { functionId: string; deploymentId: string } }
        output: Deployment
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { functionId: string; deploymentId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/functions/:functionId/deployments/:deploymentId/download': {
      $get: {
        input: { param: { functionId: string; deploymentId: string } } & {
          query: { type?: 'source' | 'output' | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/functions/:functionId/deployments/:deploymentId/status': {
      $patch: {
        input: { param: { functionId: string; deploymentId: string } }
        output: Deployment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/functions/:functionId/executions': {
      $get: {
        input: { param: { functionId: string } } & { query: { queries?: string[] | undefined } }
        output: ExecutionList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { functionId: string } } & {
          json: {
            body?: string | undefined
            async?: boolean | undefined
            path?: string | undefined
            method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | undefined
            headers?: string | undefined
            scheduledAt?: string | undefined
          }
        }
        output: Execution
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/functions/:functionId/executions/:executionId': {
      $get: {
        input: { param: { functionId: string; executionId: string } }
        output: Execution
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { functionId: string; executionId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/functions/:functionId/variables': {
      $get: {
        input: { param: { functionId: string } }
        output: VariableList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { functionId: string } } & {
          json: { key: string; value: string; secret?: boolean | undefined }
        }
        output: Variable
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/functions/:functionId/variables/:variableId': {
      $get: {
        input: { param: { functionId: string; variableId: string } }
        output: Variable
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { functionId: string; variableId: string } } & {
          json: { key: string; value?: string | undefined; secret?: boolean | undefined }
        }
        output: Variable
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { functionId: string; variableId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & { '/graphql': { $post: { input: {}; output: Any; outputFormat: 'json'; status: 200 } } } & {
    '/graphql/mutation': { $post: { input: {}; output: Any; outputFormat: 'json'; status: 200 } }
  } & {
    '/health': { $get: { input: {}; output: HealthStatus; outputFormat: 'json'; status: 200 } }
  } & {
    '/health/anti-virus': {
      $get: { input: {}; output: HealthAntivirus; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/health/cache': {
      $get: { input: {}; output: HealthStatus; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/health/certificate': {
      $get: {
        input: { query: { domain?: string | undefined } }
        output: HealthCertificate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/health/db': { $get: { input: {}; output: HealthStatus; outputFormat: 'json'; status: 200 } }
  } & {
    '/health/pubsub': {
      $get: { input: {}; output: HealthStatus; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/health/queue/builds': {
      $get: {
        input: { query: { threshold?: number | undefined } }
        output: HealthQueue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/health/queue/certificates': {
      $get: {
        input: { query: { threshold?: number | undefined } }
        output: HealthQueue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/health/queue/databases': {
      $get: {
        input: { query: { name?: string | undefined; threshold?: number | undefined } }
        output: HealthQueue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/health/queue/deletes': {
      $get: {
        input: { query: { threshold?: number | undefined } }
        output: HealthQueue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/health/queue/failed/:name': {
      $get: {
        input: {
          param: {
            name:
              | 'v1-database'
              | 'v1-deletes'
              | 'v1-audits'
              | 'v1-mails'
              | 'v1-functions'
              | 'v1-stats-resources'
              | 'v1-stats-usage'
              | 'v1-webhooks'
              | 'v1-certificates'
              | 'v1-builds'
              | 'v1-messaging'
              | 'v1-migrations'
          }
        } & { query: { threshold?: number | undefined } }
        output: HealthQueue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/health/queue/functions': {
      $get: {
        input: { query: { threshold?: number | undefined } }
        output: HealthQueue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/health/queue/logs': {
      $get: {
        input: { query: { threshold?: number | undefined } }
        output: HealthQueue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/health/queue/mails': {
      $get: {
        input: { query: { threshold?: number | undefined } }
        output: HealthQueue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/health/queue/messaging': {
      $get: {
        input: { query: { threshold?: number | undefined } }
        output: HealthQueue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/health/queue/migrations': {
      $get: {
        input: { query: { threshold?: number | undefined } }
        output: HealthQueue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/health/queue/stats-resources': {
      $get: {
        input: { query: { threshold?: number | undefined } }
        output: HealthQueue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/health/queue/stats-usage': {
      $get: {
        input: { query: { threshold?: number | undefined } }
        output: HealthQueue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/health/queue/webhooks': {
      $get: {
        input: { query: { threshold?: number | undefined } }
        output: HealthQueue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/health/storage': {
      $get: { input: {}; output: HealthStatus; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/health/storage/local': {
      $get: { input: {}; output: HealthStatus; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/health/time': { $get: { input: {}; output: HealthTime; outputFormat: 'json'; status: 200 } }
  } & { '/locale': { $get: { input: {}; output: Locale; outputFormat: 'json'; status: 200 } } } & {
    '/locale/codes': {
      $get: { input: {}; output: LocaleCodeList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/locale/continents': {
      $get: { input: {}; output: ContinentList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/locale/countries': {
      $get: { input: {}; output: CountryList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/locale/countries/eu': {
      $get: { input: {}; output: CountryList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/locale/countries/phones': {
      $get: { input: {}; output: PhoneList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/locale/currencies': {
      $get: { input: {}; output: CurrencyList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/locale/languages': {
      $get: { input: {}; output: LanguageList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/messaging/messages': {
      $get: {
        input: { query: { queries?: string[] | undefined; search?: string | undefined } }
        output: MessageList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/messages/email': {
      $post: {
        input: {
          json: {
            messageId: string
            subject: string
            content: string
            topics?: string[] | undefined
            users?: string[] | undefined
            targets?: string[] | undefined
            cc?: string[] | undefined
            bcc?: string[] | undefined
            attachments?: string[] | undefined
            draft?: boolean | undefined
            html?: boolean | undefined
            scheduledAt?: string | undefined
          }
        }
        output: Message
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/messaging/messages/email/:messageId': {
      $patch: {
        input: { param: { messageId: string } } & {
          json: {
            topics?: string[] | undefined
            users?: string[] | undefined
            targets?: string[] | undefined
            subject?: string | undefined
            content?: string | undefined
            draft?: boolean | undefined
            html?: boolean | undefined
            cc?: string[] | undefined
            bcc?: string[] | undefined
            scheduledAt?: string | undefined
            attachments?: string[] | undefined
          }
        }
        output: Message
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/messages/push': {
      $post: {
        input: {
          json: {
            messageId: string
            title?: string | undefined
            body?: string | undefined
            topics?: string[] | undefined
            users?: string[] | undefined
            targets?: string[] | undefined
            data?: { [x: string]: unknown } | undefined
            action?: string | undefined
            image?: string | undefined
            icon?: string | undefined
            sound?: string | undefined
            color?: string | undefined
            tag?: string | undefined
            badge?: number | undefined
            draft?: boolean | undefined
            scheduledAt?: string | undefined
            contentAvailable?: boolean | undefined
            critical?: boolean | undefined
            priority?: 'normal' | 'high' | undefined
          }
        }
        output: Message
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/messaging/messages/push/:messageId': {
      $patch: {
        input: { param: { messageId: string } } & {
          json: {
            topics?: string[] | undefined
            users?: string[] | undefined
            targets?: string[] | undefined
            title?: string | undefined
            body?: string | undefined
            data?: { [x: string]: unknown } | undefined
            action?: string | undefined
            image?: string | undefined
            icon?: string | undefined
            sound?: string | undefined
            color?: string | undefined
            tag?: string | undefined
            badge?: number | undefined
            draft?: boolean | undefined
            scheduledAt?: string | undefined
            contentAvailable?: boolean | undefined
            critical?: boolean | undefined
            priority?: 'normal' | 'high' | undefined
          }
        }
        output: Message
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/messages/sms': {
      $post: {
        input: {
          json: {
            messageId: string
            content: string
            topics?: string[] | undefined
            users?: string[] | undefined
            targets?: string[] | undefined
            draft?: boolean | undefined
            scheduledAt?: string | undefined
          }
        }
        output: Message
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/messaging/messages/sms/:messageId': {
      $patch: {
        input: { param: { messageId: string } } & {
          json: {
            topics?: string[] | undefined
            users?: string[] | undefined
            targets?: string[] | undefined
            content?: string | undefined
            draft?: boolean | undefined
            scheduledAt?: string | undefined
          }
        }
        output: Message
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/messages/:messageId': {
      $get: {
        input: { param: { messageId: string } }
        output: Message
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { messageId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/messaging/messages/:messageId/logs': {
      $get: {
        input: { param: { messageId: string } } & { query: { queries?: string[] | undefined } }
        output: LogList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/messages/:messageId/targets': {
      $get: {
        input: { param: { messageId: string } } & { query: { queries?: string[] | undefined } }
        output: TargetList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/providers': {
      $get: {
        input: { query: { queries?: string[] | undefined; search?: string | undefined } }
        output: ProviderList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/providers/apns': {
      $post: {
        input: {
          json: {
            providerId: string
            name: string
            authKey?: string | undefined
            authKeyId?: string | undefined
            teamId?: string | undefined
            bundleId?: string | undefined
            sandbox?: boolean | undefined
            enabled?: boolean | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/messaging/providers/apns/:providerId': {
      $patch: {
        input: { param: { providerId: string } } & {
          json: {
            name?: string | undefined
            enabled?: boolean | undefined
            authKey?: string | undefined
            authKeyId?: string | undefined
            teamId?: string | undefined
            bundleId?: string | undefined
            sandbox?: boolean | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/providers/fcm': {
      $post: {
        input: {
          json: {
            providerId: string
            name: string
            serviceAccountJSON?: { [x: string]: unknown } | undefined
            enabled?: boolean | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/messaging/providers/fcm/:providerId': {
      $patch: {
        input: { param: { providerId: string } } & {
          json: {
            name?: string | undefined
            enabled?: boolean | undefined
            serviceAccountJSON?: { [x: string]: unknown } | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/providers/mailgun': {
      $post: {
        input: {
          json: {
            providerId: string
            name: string
            apiKey?: string | undefined
            domain?: string | undefined
            isEuRegion?: boolean | undefined
            fromName?: string | undefined
            fromEmail?: string | undefined
            replyToName?: string | undefined
            replyToEmail?: string | undefined
            enabled?: boolean | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/messaging/providers/mailgun/:providerId': {
      $patch: {
        input: { param: { providerId: string } } & {
          json: {
            name?: string | undefined
            apiKey?: string | undefined
            domain?: string | undefined
            isEuRegion?: boolean | undefined
            enabled?: boolean | undefined
            fromName?: string | undefined
            fromEmail?: string | undefined
            replyToName?: string | undefined
            replyToEmail?: string | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/providers/msg91': {
      $post: {
        input: {
          json: {
            providerId: string
            name: string
            templateId?: string | undefined
            senderId?: string | undefined
            authKey?: string | undefined
            enabled?: boolean | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/messaging/providers/msg91/:providerId': {
      $patch: {
        input: { param: { providerId: string } } & {
          json: {
            name?: string | undefined
            enabled?: boolean | undefined
            templateId?: string | undefined
            senderId?: string | undefined
            authKey?: string | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/providers/sendgrid': {
      $post: {
        input: {
          json: {
            providerId: string
            name: string
            apiKey?: string | undefined
            fromName?: string | undefined
            fromEmail?: string | undefined
            replyToName?: string | undefined
            replyToEmail?: string | undefined
            enabled?: boolean | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/messaging/providers/sendgrid/:providerId': {
      $patch: {
        input: { param: { providerId: string } } & {
          json: {
            name?: string | undefined
            enabled?: boolean | undefined
            apiKey?: string | undefined
            fromName?: string | undefined
            fromEmail?: string | undefined
            replyToName?: string | undefined
            replyToEmail?: string | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/providers/smtp': {
      $post: {
        input: {
          json: {
            providerId: string
            name: string
            host: string
            port?: number | undefined
            username?: string | undefined
            password?: string | undefined
            encryption?: 'none' | 'ssl' | 'tls' | undefined
            autoTLS?: boolean | undefined
            mailer?: string | undefined
            fromName?: string | undefined
            fromEmail?: string | undefined
            replyToName?: string | undefined
            replyToEmail?: string | undefined
            enabled?: boolean | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/messaging/providers/smtp/:providerId': {
      $patch: {
        input: { param: { providerId: string } } & {
          json: {
            name?: string | undefined
            host?: string | undefined
            port?: number | undefined
            username?: string | undefined
            password?: string | undefined
            encryption?: 'none' | 'ssl' | 'tls' | undefined
            autoTLS?: boolean | undefined
            mailer?: string | undefined
            fromName?: string | undefined
            fromEmail?: string | undefined
            replyToName?: string | undefined
            replyToEmail?: string | undefined
            enabled?: boolean | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/providers/telesign': {
      $post: {
        input: {
          json: {
            providerId: string
            name: string
            from?: string | undefined
            customerId?: string | undefined
            apiKey?: string | undefined
            enabled?: boolean | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/messaging/providers/telesign/:providerId': {
      $patch: {
        input: { param: { providerId: string } } & {
          json: {
            name?: string | undefined
            enabled?: boolean | undefined
            customerId?: string | undefined
            apiKey?: string | undefined
            from?: string | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/providers/textmagic': {
      $post: {
        input: {
          json: {
            providerId: string
            name: string
            from?: string | undefined
            username?: string | undefined
            apiKey?: string | undefined
            enabled?: boolean | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/messaging/providers/textmagic/:providerId': {
      $patch: {
        input: { param: { providerId: string } } & {
          json: {
            name?: string | undefined
            enabled?: boolean | undefined
            username?: string | undefined
            apiKey?: string | undefined
            from?: string | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/providers/twilio': {
      $post: {
        input: {
          json: {
            providerId: string
            name: string
            from?: string | undefined
            accountSid?: string | undefined
            authToken?: string | undefined
            enabled?: boolean | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/messaging/providers/twilio/:providerId': {
      $patch: {
        input: { param: { providerId: string } } & {
          json: {
            name?: string | undefined
            enabled?: boolean | undefined
            accountSid?: string | undefined
            authToken?: string | undefined
            from?: string | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/providers/vonage': {
      $post: {
        input: {
          json: {
            providerId: string
            name: string
            from?: string | undefined
            apiKey?: string | undefined
            apiSecret?: string | undefined
            enabled?: boolean | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/messaging/providers/vonage/:providerId': {
      $patch: {
        input: { param: { providerId: string } } & {
          json: {
            name?: string | undefined
            enabled?: boolean | undefined
            apiKey?: string | undefined
            apiSecret?: string | undefined
            from?: string | undefined
          }
        }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/providers/:providerId': {
      $get: {
        input: { param: { providerId: string } }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { providerId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/messaging/providers/:providerId/logs': {
      $get: {
        input: { param: { providerId: string } } & { query: { queries?: string[] | undefined } }
        output: LogList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/subscribers/:subscriberId/logs': {
      $get: {
        input: { param: { subscriberId: string } } & { query: { queries?: string[] | undefined } }
        output: LogList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/topics': {
      $get: {
        input: { query: { queries?: string[] | undefined; search?: string | undefined } }
        output: TopicList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { topicId: string; name: string; subscribe?: string[] | undefined } }
        output: Topic
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/messaging/topics/:topicId': {
      $get: {
        input: { param: { topicId: string } }
        output: Topic
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { topicId: string } } & {
          json: { name?: string | undefined; subscribe?: string[] | undefined }
        }
        output: Topic
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { topicId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/messaging/topics/:topicId/logs': {
      $get: {
        input: { param: { topicId: string } } & { query: { queries?: string[] | undefined } }
        output: LogList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messaging/topics/:topicId/subscribers': {
      $get: {
        input: { param: { topicId: string } } & {
          query: { queries?: string[] | undefined; search?: string | undefined }
        }
        output: SubscriberList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { topicId: string } } & { json: { subscriberId: string; targetId: string } }
        output: Subscriber
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/messaging/topics/:topicId/subscribers/:subscriberId': {
      $get: {
        input: { param: { topicId: string; subscriberId: string } }
        output: Subscriber
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { topicId: string; subscriberId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sites': {
      $get: {
        input: { query: { queries?: string | undefined; search?: string | undefined } }
        output: SiteList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            siteId: string
            name: string
            framework:
              | 'analog'
              | 'angular'
              | 'nextjs'
              | 'react'
              | 'nuxt'
              | 'vue'
              | 'sveltekit'
              | 'astro'
              | 'remix'
              | 'lynx'
              | 'flutter'
              | 'react-native'
              | 'vite'
              | 'other'
            enabled?: boolean | undefined
            logging?: boolean | undefined
            timeout?: number | undefined
            installCommand?: string | undefined
            buildCommand?: string | undefined
            outputDirectory?: string | undefined
            buildRuntime:
              | 'node-14.5'
              | 'node-16.0'
              | 'node-18.0'
              | 'node-19.0'
              | 'node-20.0'
              | 'node-21.0'
              | 'node-22'
              | 'php-8.0'
              | 'php-8.1'
              | 'php-8.2'
              | 'php-8.3'
              | 'ruby-3.0'
              | 'ruby-3.1'
              | 'ruby-3.2'
              | 'ruby-3.3'
              | 'python-3.8'
              | 'python-3.9'
              | 'python-3.10'
              | 'python-3.11'
              | 'python-3.12'
              | 'python-ml-3.11'
              | 'python-ml-3.12'
              | 'deno-1.21'
              | 'deno-1.24'
              | 'deno-1.35'
              | 'deno-1.40'
              | 'deno-1.46'
              | 'deno-2.0'
              | 'dart-2.15'
              | 'dart-2.16'
              | 'dart-2.17'
              | 'dart-2.18'
              | 'dart-2.19'
              | 'dart-3.0'
              | 'dart-3.1'
              | 'dart-3.3'
              | 'dart-3.5'
              | 'dart-3.8'
              | 'dotnet-6.0'
              | 'dotnet-7.0'
              | 'dotnet-8.0'
              | 'java-8.0'
              | 'java-11.0'
              | 'java-17.0'
              | 'java-18.0'
              | 'java-21.0'
              | 'java-22'
              | 'swift-5.5'
              | 'swift-5.8'
              | 'swift-5.9'
              | 'swift-5.10'
              | 'kotlin-1.6'
              | 'kotlin-1.8'
              | 'kotlin-1.9'
              | 'kotlin-2.0'
              | 'cpp-17'
              | 'cpp-20'
              | 'bun-1.0'
              | 'bun-1.1'
              | 'go-1.23'
              | 'static-1'
              | 'flutter-3.24'
              | 'flutter-3.27'
              | 'flutter-3.29'
              | 'flutter-3.32'
            adapter?: 'static' | 'ssr' | undefined
            installationId?: string | undefined
            fallbackFile?: string | undefined
            providerRepositoryId?: string | undefined
            providerBranch?: string | undefined
            providerSilentMode?: boolean | undefined
            providerRootDirectory?: string | undefined
            specification?: string | undefined
          }
        }
        output: Site
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/sites/frameworks': {
      $get: { input: {}; output: FrameworkList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sites/specifications': {
      $get: { input: {}; output: SpecificationList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sites/:siteId': {
      $get: {
        input: { param: { siteId: string } }
        output: Site
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { siteId: string } } & {
          json: {
            name: string
            framework:
              | 'analog'
              | 'angular'
              | 'nextjs'
              | 'react'
              | 'nuxt'
              | 'vue'
              | 'sveltekit'
              | 'astro'
              | 'remix'
              | 'lynx'
              | 'flutter'
              | 'react-native'
              | 'vite'
              | 'other'
            enabled?: boolean | undefined
            logging?: boolean | undefined
            timeout?: number | undefined
            installCommand?: string | undefined
            buildCommand?: string | undefined
            outputDirectory?: string | undefined
            buildRuntime?:
              | 'node-14.5'
              | 'node-16.0'
              | 'node-18.0'
              | 'node-19.0'
              | 'node-20.0'
              | 'node-21.0'
              | 'node-22'
              | 'php-8.0'
              | 'php-8.1'
              | 'php-8.2'
              | 'php-8.3'
              | 'ruby-3.0'
              | 'ruby-3.1'
              | 'ruby-3.2'
              | 'ruby-3.3'
              | 'python-3.8'
              | 'python-3.9'
              | 'python-3.10'
              | 'python-3.11'
              | 'python-3.12'
              | 'python-ml-3.11'
              | 'python-ml-3.12'
              | 'deno-1.21'
              | 'deno-1.24'
              | 'deno-1.35'
              | 'deno-1.40'
              | 'deno-1.46'
              | 'deno-2.0'
              | 'dart-2.15'
              | 'dart-2.16'
              | 'dart-2.17'
              | 'dart-2.18'
              | 'dart-2.19'
              | 'dart-3.0'
              | 'dart-3.1'
              | 'dart-3.3'
              | 'dart-3.5'
              | 'dart-3.8'
              | 'dotnet-6.0'
              | 'dotnet-7.0'
              | 'dotnet-8.0'
              | 'java-8.0'
              | 'java-11.0'
              | 'java-17.0'
              | 'java-18.0'
              | 'java-21.0'
              | 'java-22'
              | 'swift-5.5'
              | 'swift-5.8'
              | 'swift-5.9'
              | 'swift-5.10'
              | 'kotlin-1.6'
              | 'kotlin-1.8'
              | 'kotlin-1.9'
              | 'kotlin-2.0'
              | 'cpp-17'
              | 'cpp-20'
              | 'bun-1.0'
              | 'bun-1.1'
              | 'go-1.23'
              | 'static-1'
              | 'flutter-3.24'
              | 'flutter-3.27'
              | 'flutter-3.29'
              | 'flutter-3.32'
              | undefined
            adapter?: 'static' | 'ssr' | undefined
            fallbackFile?: string | undefined
            installationId?: string | undefined
            providerRepositoryId?: string | undefined
            providerBranch?: string | undefined
            providerSilentMode?: boolean | undefined
            providerRootDirectory?: string | undefined
            specification?: string | undefined
          }
        }
        output: Site
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { siteId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sites/:siteId/deployment': {
      $patch: {
        input: { param: { siteId: string } } & { json: { deploymentId: string } }
        output: Site
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sites/:siteId/deployments': {
      $get: {
        input: { param: { siteId: string } } & {
          query: { queries?: string[] | undefined; search?: string | undefined }
        }
        output: DeploymentList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { siteId: string } } & {
          form: {
            installCommand?: string | undefined
            buildCommand?: string | undefined
            outputDirectory?: string | undefined
            code: string
            activate: boolean
          }
        }
        output: Deployment
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/sites/:siteId/deployments/duplicate': {
      $post: {
        input: { param: { siteId: string } } & { json: { deploymentId: string } }
        output: Deployment
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/sites/:siteId/deployments/template': {
      $post: {
        input: { param: { siteId: string } } & {
          json: {
            repository: string
            owner: string
            rootDirectory: string
            version: string
            activate?: boolean | undefined
          }
        }
        output: Deployment
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/sites/:siteId/deployments/vcs': {
      $post: {
        input: { param: { siteId: string } } & {
          json: {
            type: 'branch' | 'commit' | 'tag'
            reference: string
            activate?: boolean | undefined
          }
        }
        output: Deployment
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/sites/:siteId/deployments/:deploymentId': {
      $get: {
        input: { param: { siteId: string; deploymentId: string } }
        output: Deployment
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { siteId: string; deploymentId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sites/:siteId/deployments/:deploymentId/download': {
      $get: {
        input: { param: { siteId: string; deploymentId: string } } & {
          query: { type?: 'source' | 'output' | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sites/:siteId/deployments/:deploymentId/status': {
      $patch: {
        input: { param: { siteId: string; deploymentId: string } }
        output: Deployment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sites/:siteId/logs': {
      $get: {
        input: { param: { siteId: string } } & { query: { queries?: string | undefined } }
        output: ExecutionList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sites/:siteId/logs/:logId': {
      $get: {
        input: { param: { siteId: string; logId: string } }
        output: Execution
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { siteId: string; logId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sites/:siteId/variables': {
      $get: {
        input: { param: { siteId: string } }
        output: VariableList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { siteId: string } } & {
          json: { key: string; value: string; secret?: boolean | undefined }
        }
        output: Variable
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/sites/:siteId/variables/:variableId': {
      $get: {
        input: { param: { siteId: string; variableId: string } }
        output: Variable
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { siteId: string; variableId: string } } & {
          json: { key: string; value?: string | undefined; secret?: boolean | undefined }
        }
        output: Variable
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { siteId: string; variableId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/storage/buckets': {
      $get: {
        input: { query: { queries?: string[] | undefined; search?: string | undefined } }
        output: BucketList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            bucketId: string
            name: string
            permissions?: string[] | undefined
            fileSecurity?: boolean | undefined
            enabled?: boolean | undefined
            maximumFileSize?: number | undefined
            allowedFileExtensions?: string[] | undefined
            compression?: 'none' | 'gzip' | 'zstd' | undefined
            encryption?: boolean | undefined
            antivirus?: boolean | undefined
          }
        }
        output: Bucket
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/storage/buckets/:bucketId': {
      $get: {
        input: { param: { bucketId: string } }
        output: Bucket
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { bucketId: string } } & {
          json: {
            name: string
            permissions?: string[] | undefined
            fileSecurity?: boolean | undefined
            enabled?: boolean | undefined
            maximumFileSize?: number | undefined
            allowedFileExtensions?: string[] | undefined
            compression?: 'none' | 'gzip' | 'zstd' | undefined
            encryption?: boolean | undefined
            antivirus?: boolean | undefined
          }
        }
        output: Bucket
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { bucketId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/storage/buckets/:bucketId/files': {
      $get: {
        input: { param: { bucketId: string } } & {
          query: { queries?: string[] | undefined; search?: string | undefined }
        }
        output: FileList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { bucketId: string } } & {
          form: { fileId: string; file: string; permissions?: string[] | undefined }
        }
        output: File2
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/storage/buckets/:bucketId/files/:fileId': {
      $get: {
        input: { param: { bucketId: string; fileId: string } }
        output: File2
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { bucketId: string; fileId: string } } & {
          json: { name?: string | undefined; permissions?: string[] | undefined }
        }
        output: File2
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { bucketId: string; fileId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/storage/buckets/:bucketId/files/:fileId/download': {
      $get: {
        input: { param: { bucketId: string; fileId: string } } & {
          query: { token?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/storage/buckets/:bucketId/files/:fileId/preview': {
      $get: {
        input: { param: { bucketId: string; fileId: string } } & {
          query: {
            width?: number | undefined
            height?: number | undefined
            gravity?:
              | 'center'
              | 'top-left'
              | 'top'
              | 'top-right'
              | 'left'
              | 'right'
              | 'bottom-left'
              | 'bottom'
              | 'bottom-right'
              | undefined
            quality?: number | undefined
            borderWidth?: number | undefined
            borderColor?: string | undefined
            borderRadius?: number | undefined
            opacity?: number | undefined
            rotation?: number | undefined
            background?: string | undefined
            output?: 'jpg' | 'jpeg' | 'png' | 'webp' | 'heic' | 'avif' | 'gif' | undefined
            token?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/storage/buckets/:bucketId/files/:fileId/view': {
      $get: {
        input: { param: { bucketId: string; fileId: string } } & {
          query: { token?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/teams': {
      $get: {
        input: { query: { queries?: string[] | undefined; search?: string | undefined } }
        output: TeamList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { teamId: string; name: string; roles?: string[] | undefined } }
        output: Team
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/teams/:teamId': {
      $get: {
        input: { param: { teamId: string } }
        output: Team
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { teamId: string } } & { json: { name: string } }
        output: Team
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { teamId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/teams/:teamId/memberships': {
      $get: {
        input: { param: { teamId: string } } & {
          query: { queries?: string[] | undefined; search?: string | undefined }
        }
        output: MembershipList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { teamId: string } } & {
          json: {
            email?: string | undefined
            userId?: string | undefined
            phone?: string | undefined
            roles: string[]
            url?: string | undefined
            name?: string | undefined
          }
        }
        output: Membership
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/teams/:teamId/memberships/:membershipId': {
      $get: {
        input: { param: { teamId: string; membershipId: string } }
        output: Membership
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { teamId: string; membershipId: string } } & { json: { roles: string[] } }
        output: Membership
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { teamId: string; membershipId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/teams/:teamId/memberships/:membershipId/status': {
      $patch: {
        input: { param: { teamId: string; membershipId: string } } & {
          json: { userId: string; secret: string }
        }
        output: Membership
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/teams/:teamId/prefs': {
      $get: {
        input: { param: { teamId: string } }
        output: Preferences
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { teamId: string } } & { json: { prefs: { [x: string]: unknown } } }
        output: Preferences
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tokens/buckets/:bucketId/files/:fileId': {
      $get: {
        input: { param: { bucketId: string; fileId: string } } & {
          query: { queries?: string | undefined }
        }
        output: ResourceTokenList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { bucketId: string; fileId: string } } & {
          json: { expire?: string | undefined }
        }
        output: ResourceToken
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/tokens/:tokenId': {
      $get: {
        input: { param: { tokenId: string } }
        output: ResourceToken
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { tokenId: string } } & { json: { expire?: string | undefined } }
        output: ResourceToken
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { tokenId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/users': {
      $get: {
        input: { query: { queries?: string[] | undefined; search?: string | undefined } }
        output: UserList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            userId: string
            email?: string | undefined
            phone?: string | undefined
            password?: string | undefined
            name?: string | undefined
          }
        }
        output: User
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/users/argon2': {
      $post: {
        input: {
          json: { userId: string; email: string; password: string; name?: string | undefined }
        }
        output: User
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/users/bcrypt': {
      $post: {
        input: {
          json: { userId: string; email: string; password: string; name?: string | undefined }
        }
        output: User
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/users/identities': {
      $get: {
        input: { query: { queries?: string[] | undefined; search?: string | undefined } }
        output: IdentityList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/identities/:identityId': {
      $delete: {
        input: { param: { identityId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/users/md5': {
      $post: {
        input: {
          json: { userId: string; email: string; password: string; name?: string | undefined }
        }
        output: User
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/users/phpass': {
      $post: {
        input: {
          json: { userId: string; email: string; password: string; name?: string | undefined }
        }
        output: User
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/users/scrypt': {
      $post: {
        input: {
          json: {
            userId: string
            email: string
            password: string
            passwordSalt: string
            passwordCpu: number
            passwordMemory: number
            passwordParallel: number
            passwordLength: number
            name?: string | undefined
          }
        }
        output: User
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/users/scrypt-modified': {
      $post: {
        input: {
          json: {
            userId: string
            email: string
            password: string
            passwordSalt: string
            passwordSaltSeparator: string
            passwordSignerKey: string
            name?: string | undefined
          }
        }
        output: User
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/users/sha': {
      $post: {
        input: {
          json: {
            userId: string
            email: string
            password: string
            passwordVersion?:
              | 'sha1'
              | 'sha224'
              | 'sha256'
              | 'sha384'
              | 'sha512/224'
              | 'sha512/256'
              | 'sha512'
              | 'sha3-224'
              | 'sha3-256'
              | 'sha3-384'
              | 'sha3-512'
              | undefined
            name?: string | undefined
          }
        }
        output: User
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/users/:userId': {
      $get: {
        input: { param: { userId: string } }
        output: User
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { userId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/users/:userId/email': {
      $patch: {
        input: { param: { userId: string } } & { json: { email: string } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:userId/jwts': {
      $post: {
        input: { param: { userId: string } } & {
          json: { sessionId?: string | undefined; duration?: number | undefined }
        }
        output: Jwt
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/users/:userId/labels': {
      $put: {
        input: { param: { userId: string } } & { json: { labels: string[] } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:userId/logs': {
      $get: {
        input: { param: { userId: string } } & { query: { queries?: string[] | undefined } }
        output: LogList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:userId/memberships': {
      $get: {
        input: { param: { userId: string } } & {
          query: { queries?: string[] | undefined; search?: string | undefined }
        }
        output: MembershipList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:userId/mfa': {
      $patch: {
        input: { param: { userId: string } } & { json: { mfa: boolean } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:userId/mfa/authenticators/:type': {
      $delete: {
        input: { param: { userId: string; type: 'totp' } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/users/:userId/mfa/factors': {
      $get: {
        input: { param: { userId: string } }
        output: MfaFactors
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:userId/mfa/recovery-codes': {
      $get: {
        input: { param: { userId: string } }
        output: MfaRecoveryCodes
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { userId: string } }
        output: MfaRecoveryCodes
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { userId: string } }
        output: MfaRecoveryCodes
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/users/:userId/name': {
      $patch: {
        input: { param: { userId: string } } & { json: { name: string } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:userId/password': {
      $patch: {
        input: { param: { userId: string } } & { json: { password: string } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:userId/phone': {
      $patch: {
        input: { param: { userId: string } } & { json: { number: string } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:userId/prefs': {
      $get: {
        input: { param: { userId: string } }
        output: Preferences
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { userId: string } } & { json: { prefs: { [x: string]: unknown } } }
        output: Preferences
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:userId/sessions': {
      $get: {
        input: { param: { userId: string } }
        output: SessionList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { userId: string } }
        output: Session
        outputFormat: 'json'
        status: 201
      }
      $delete: {
        input: { param: { userId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/users/:userId/sessions/:sessionId': {
      $delete: {
        input: { param: { userId: string; sessionId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/users/:userId/status': {
      $patch: {
        input: { param: { userId: string } } & { json: { status: boolean } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:userId/targets': {
      $get: {
        input: { param: { userId: string } } & { query: { queries?: string[] | undefined } }
        output: TargetList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { userId: string } } & {
          json: {
            targetId: string
            providerType: 'email' | 'sms' | 'push'
            identifier: string
            providerId?: string | undefined
            name?: string | undefined
          }
        }
        output: Target
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/users/:userId/targets/:targetId': {
      $get: {
        input: { param: { userId: string; targetId: string } }
        output: Target
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { userId: string; targetId: string } } & {
          json: {
            identifier?: string | undefined
            providerId?: string | undefined
            name?: string | undefined
          }
        }
        output: Target
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { userId: string; targetId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/users/:userId/tokens': {
      $post: {
        input: { param: { userId: string } } & {
          json: { length?: number | undefined; expire?: number | undefined }
        }
        output: Token
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/users/:userId/verification': {
      $patch: {
        input: { param: { userId: string } } & { json: { emailVerification: boolean } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:userId/verification/phone': {
      $patch: {
        input: { param: { userId: string } } & { json: { phoneVerification: boolean } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
