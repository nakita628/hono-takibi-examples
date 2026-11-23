type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type ManagedService = { producerProjectId?: string | undefined; serviceName?: string | undefined }
type ListServicesResponse = {
  nextPageToken?: string | undefined
  services?: ManagedService[] | undefined
}
type Option = {
  name?: string | undefined
  value?: { [x: string]: { [x: string]: unknown } } | undefined
}
type Method = {
  name?: string | undefined
  options?: Option[] | undefined
  requestStreaming?: boolean | undefined
  requestTypeUrl?: string | undefined
  responseStreaming?: boolean | undefined
  responseTypeUrl?: string | undefined
  syntax?: 'SYNTAX_PROTO2' | 'SYNTAX_PROTO3' | 'SYNTAX_EDITIONS' | undefined
}
type Mixin = { name?: string | undefined; root?: string | undefined }
type SourceContext = { fileName?: string | undefined }
type Api = {
  methods?: Method[] | undefined
  mixins?: Mixin[] | undefined
  name?: string | undefined
  options?: Option[] | undefined
  sourceContext?: SourceContext | undefined
  syntax?: 'SYNTAX_PROTO2' | 'SYNTAX_PROTO3' | 'SYNTAX_EDITIONS' | undefined
  version?: string | undefined
}
type JwtLocation = {
  cookie?: string | undefined
  header?: string | undefined
  query?: string | undefined
  valuePrefix?: string | undefined
}
type AuthProvider = {
  audiences?: string | undefined
  authorizationUrl?: string | undefined
  id?: string | undefined
  issuer?: string | undefined
  jwksUri?: string | undefined
  jwtLocations?: JwtLocation[] | undefined
}
type OAuthRequirements = { canonicalScopes?: string | undefined }
type AuthRequirement = { audiences?: string | undefined; providerId?: string | undefined }
type AuthenticationRule = {
  allowWithoutCredential?: boolean | undefined
  oauth?: OAuthRequirements | undefined
  requirements?: AuthRequirement[] | undefined
  selector?: string | undefined
}
type Authentication = {
  providers?: AuthProvider[] | undefined
  rules?: AuthenticationRule[] | undefined
}
type BackendRule = {
  address?: string | undefined
  deadline?: number | undefined
  disableAuth?: boolean | undefined
  jwtAudience?: string | undefined
  minDeadline?: number | undefined
  operationDeadline?: number | undefined
  overridesByRequestProtocol?: { [x: string]: BackendRule } | undefined
  pathTranslation?:
    | 'PATH_TRANSLATION_UNSPECIFIED'
    | 'CONSTANT_ADDRESS'
    | 'APPEND_PATH_TO_ADDRESS'
    | undefined
  protocol?: string | undefined
  selector?: string | undefined
}
type Backend = { rules?: BackendRule[] | undefined }
type BillingDestination = { metrics?: string[] | undefined; monitoredResource?: string | undefined }
type Billing = { consumerDestinations?: BillingDestination[] | undefined }
type ContextRule = {
  allowedRequestExtensions?: string[] | undefined
  allowedResponseExtensions?: string[] | undefined
  provided?: string[] | undefined
  requested?: string[] | undefined
  selector?: string | undefined
}
type Context = { rules?: ContextRule[] | undefined }
type Control = { environment?: string | undefined }
type CustomErrorRule = { isErrorType?: boolean | undefined; selector?: string | undefined }
type CustomError = { rules?: CustomErrorRule[] | undefined; types?: string[] | undefined }
type Page = {
  content?: string | undefined
  name?: string | undefined
  subpages?: Page[] | undefined
}
type DocumentationRule = {
  deprecationDescription?: string | undefined
  description?: string | undefined
  selector?: string | undefined
}
type Documentation = {
  documentationRootUrl?: string | undefined
  overview?: string | undefined
  pages?: Page[] | undefined
  rules?: DocumentationRule[] | undefined
  serviceRootUrl?: string | undefined
  summary?: string | undefined
}
type Endpoint = {
  aliases?: string[] | undefined
  allowCors?: boolean | undefined
  name?: string | undefined
  target?: string | undefined
}
type EnumValue = {
  name?: string | undefined
  number?: number | undefined
  options?: Option[] | undefined
}
type Enum = {
  edition?: string | undefined
  enumvalue?: EnumValue[] | undefined
  name?: string | undefined
  options?: Option[] | undefined
  sourceContext?: SourceContext | undefined
  syntax?: 'SYNTAX_PROTO2' | 'SYNTAX_PROTO3' | 'SYNTAX_EDITIONS' | undefined
}
type CustomHttpPattern = { kind?: string | undefined; path?: string | undefined }
type HttpRule = {
  additionalBindings?: HttpRule[] | undefined
  body?: string | undefined
  custom?: CustomHttpPattern | undefined
  delete?: string | undefined
  get?: string | undefined
  patch?: string | undefined
  post?: string | undefined
  put?: string | undefined
  responseBody?: string | undefined
  selector?: string | undefined
}
type Http = { fullyDecodeReservedExpansion?: boolean | undefined; rules?: HttpRule[] | undefined }
type LoggingDestination = { logs?: string[] | undefined; monitoredResource?: string | undefined }
type Logging = {
  consumerDestinations?: LoggingDestination[] | undefined
  producerDestinations?: LoggingDestination[] | undefined
}
type LabelDescriptor = {
  description?: string | undefined
  key?: string | undefined
  valueType?: 'STRING' | 'BOOL' | 'INT64' | undefined
}
type LogDescriptor = {
  description?: string | undefined
  displayName?: string | undefined
  labels?: LabelDescriptor[] | undefined
  name?: string | undefined
}
type MetricDescriptorMetadata = {
  ingestDelay?: string | undefined
  launchStage?:
    | 'LAUNCH_STAGE_UNSPECIFIED'
    | 'UNIMPLEMENTED'
    | 'PRELAUNCH'
    | 'EARLY_ACCESS'
    | 'ALPHA'
    | 'BETA'
    | 'GA'
    | 'DEPRECATED'
    | undefined
  samplePeriod?: string | undefined
}
type MetricDescriptor = {
  description?: string | undefined
  displayName?: string | undefined
  labels?: LabelDescriptor[] | undefined
  launchStage?:
    | 'LAUNCH_STAGE_UNSPECIFIED'
    | 'UNIMPLEMENTED'
    | 'PRELAUNCH'
    | 'EARLY_ACCESS'
    | 'ALPHA'
    | 'BETA'
    | 'GA'
    | 'DEPRECATED'
    | undefined
  metadata?: MetricDescriptorMetadata | undefined
  metricKind?: 'METRIC_KIND_UNSPECIFIED' | 'GAUGE' | 'DELTA' | 'CUMULATIVE' | undefined
  monitoredResourceTypes?: string[] | undefined
  name?: string | undefined
  type?: string | undefined
  unit?: string | undefined
  valueType?:
    | 'VALUE_TYPE_UNSPECIFIED'
    | 'BOOL'
    | 'INT64'
    | 'DOUBLE'
    | 'STRING'
    | 'DISTRIBUTION'
    | 'MONEY'
    | undefined
}
type MonitoredResourceDescriptor = {
  description?: string | undefined
  displayName?: string | undefined
  labels?: LabelDescriptor[] | undefined
  launchStage?:
    | 'LAUNCH_STAGE_UNSPECIFIED'
    | 'UNIMPLEMENTED'
    | 'PRELAUNCH'
    | 'EARLY_ACCESS'
    | 'ALPHA'
    | 'BETA'
    | 'GA'
    | 'DEPRECATED'
    | undefined
  name?: string | undefined
  type?: string | undefined
}
type MonitoringDestination = {
  metrics?: string[] | undefined
  monitoredResource?: string | undefined
}
type Monitoring = {
  consumerDestinations?: MonitoringDestination[] | undefined
  producerDestinations?: MonitoringDestination[] | undefined
}
type CommonLanguageSettings = {
  destinations?:
    | ('CLIENT_LIBRARY_DESTINATION_UNSPECIFIED' | 'GITHUB' | 'PACKAGE_MANAGER')[]
    | undefined
  referenceDocsUri?: string | undefined
}
type CppSettings = { common?: CommonLanguageSettings | undefined }
type DotnetSettings = {
  common?: CommonLanguageSettings | undefined
  forcedNamespaceAliases?: string[] | undefined
  handwrittenSignatures?: string[] | undefined
  ignoredResources?: string[] | undefined
  renamedResources?: { [x: string]: string } | undefined
  renamedServices?: { [x: string]: string } | undefined
}
type GoSettings = { common?: CommonLanguageSettings | undefined }
type JavaSettings = {
  common?: CommonLanguageSettings | undefined
  libraryPackage?: string | undefined
  serviceClassNames?: { [x: string]: string } | undefined
}
type NodeSettings = { common?: CommonLanguageSettings | undefined }
type PhpSettings = { common?: CommonLanguageSettings | undefined }
type PythonSettings = { common?: CommonLanguageSettings | undefined }
type RubySettings = { common?: CommonLanguageSettings | undefined }
type ClientLibrarySettings = {
  cppSettings?: CppSettings | undefined
  dotnetSettings?: DotnetSettings | undefined
  goSettings?: GoSettings | undefined
  javaSettings?: JavaSettings | undefined
  launchStage?:
    | 'LAUNCH_STAGE_UNSPECIFIED'
    | 'UNIMPLEMENTED'
    | 'PRELAUNCH'
    | 'EARLY_ACCESS'
    | 'ALPHA'
    | 'BETA'
    | 'GA'
    | 'DEPRECATED'
    | undefined
  nodeSettings?: NodeSettings | undefined
  phpSettings?: PhpSettings | undefined
  pythonSettings?: PythonSettings | undefined
  restNumericEnums?: boolean | undefined
  rubySettings?: RubySettings | undefined
  version?: string | undefined
}
type LongRunning = {
  initialPollDelay?: string | undefined
  maxPollDelay?: string | undefined
  pollDelayMultiplier?: number | undefined
  totalPollTimeout?: string | undefined
}
type MethodSettings = { longRunning?: LongRunning | undefined; selector?: string | undefined }
type Publishing = {
  apiShortName?: string | undefined
  codeownerGithubTeams?: string[] | undefined
  docTagPrefix?: string | undefined
  documentationUri?: string | undefined
  githubLabel?: string | undefined
  librarySettings?: ClientLibrarySettings[] | undefined
  methodSettings?: MethodSettings[] | undefined
  newIssueUri?: string | undefined
  organization?:
    | 'CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED'
    | 'CLOUD'
    | 'ADS'
    | 'PHOTOS'
    | 'STREET_VIEW'
    | 'SHOPPING'
    | undefined
  protoReferenceDocumentationUri?: string | undefined
}
type QuotaLimit = {
  defaultLimit?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  duration?: string | undefined
  freeTier?: string | undefined
  maxLimit?: string | undefined
  metric?: string | undefined
  name?: string | undefined
  unit?: string | undefined
  values?: { [x: string]: string } | undefined
}
type MetricRule = {
  metricCosts?: { [x: string]: string } | undefined
  selector?: string | undefined
}
type Quota = { limits?: QuotaLimit[] | undefined; metricRules?: MetricRule[] | undefined }
type SourceInfo = { sourceFiles?: { [x: string]: { [x: string]: unknown } }[] | undefined }
type SystemParameter = {
  httpHeader?: string | undefined
  name?: string | undefined
  urlQueryParameter?: string | undefined
}
type SystemParameterRule = {
  parameters?: SystemParameter[] | undefined
  selector?: string | undefined
}
type SystemParameters = { rules?: SystemParameterRule[] | undefined }
type Field = {
  cardinality?:
    | 'CARDINALITY_UNKNOWN'
    | 'CARDINALITY_OPTIONAL'
    | 'CARDINALITY_REQUIRED'
    | 'CARDINALITY_REPEATED'
    | undefined
  defaultValue?: string | undefined
  jsonName?: string | undefined
  kind?:
    | 'TYPE_UNKNOWN'
    | 'TYPE_DOUBLE'
    | 'TYPE_FLOAT'
    | 'TYPE_INT64'
    | 'TYPE_UINT64'
    | 'TYPE_INT32'
    | 'TYPE_FIXED64'
    | 'TYPE_FIXED32'
    | 'TYPE_BOOL'
    | 'TYPE_STRING'
    | 'TYPE_GROUP'
    | 'TYPE_MESSAGE'
    | 'TYPE_BYTES'
    | 'TYPE_UINT32'
    | 'TYPE_ENUM'
    | 'TYPE_SFIXED32'
    | 'TYPE_SFIXED64'
    | 'TYPE_SINT32'
    | 'TYPE_SINT64'
    | undefined
  name?: string | undefined
  number?: number | undefined
  oneofIndex?: number | undefined
  options?: Option[] | undefined
  packed?: boolean | undefined
  typeUrl?: string | undefined
}
type Type = {
  edition?: string | undefined
  fields?: Field[] | undefined
  name?: string | undefined
  oneofs?: string[] | undefined
  options?: Option[] | undefined
  sourceContext?: SourceContext | undefined
  syntax?: 'SYNTAX_PROTO2' | 'SYNTAX_PROTO3' | 'SYNTAX_EDITIONS' | undefined
}
type UsageRule = {
  allowUnregisteredCalls?: boolean | undefined
  selector?: string | undefined
  skipServiceControl?: boolean | undefined
}
type Usage = {
  producerNotificationChannel?: string | undefined
  requirements?: string[] | undefined
  rules?: UsageRule[] | undefined
}
type Service = {
  apis?: Api[] | undefined
  authentication?: Authentication | undefined
  backend?: Backend | undefined
  billing?: Billing | undefined
  configVersion?: number | undefined
  context?: Context | undefined
  control?: Control | undefined
  customError?: CustomError | undefined
  documentation?: Documentation | undefined
  endpoints?: Endpoint[] | undefined
  enums?: Enum[] | undefined
  http?: Http | undefined
  id?: string | undefined
  logging?: Logging | undefined
  logs?: LogDescriptor[] | undefined
  metrics?: MetricDescriptor[] | undefined
  monitoredResources?: MonitoredResourceDescriptor[] | undefined
  monitoring?: Monitoring | undefined
  name?: string | undefined
  producerProjectId?: string | undefined
  publishing?: Publishing | undefined
  quota?: Quota | undefined
  sourceInfo?: SourceInfo | undefined
  systemParameters?: SystemParameters | undefined
  systemTypes?: Type[] | undefined
  title?: string | undefined
  types?: Type[] | undefined
  usage?: Usage | undefined
}
type ListServiceConfigsResponse = {
  nextPageToken?: string | undefined
  serviceConfigs?: Service[] | undefined
}
type ConfigFile = {
  fileContents?: string | undefined
  filePath?: string | undefined
  fileType?:
    | 'FILE_TYPE_UNSPECIFIED'
    | 'SERVICE_CONFIG_YAML'
    | 'OPEN_API_JSON'
    | 'OPEN_API_YAML'
    | 'FILE_DESCRIPTOR_SET_PROTO'
    | 'PROTO_FILE'
    | undefined
}
type ConfigSource = { files?: ConfigFile[] | undefined; id?: string | undefined }
type SubmitConfigSourceRequest = {
  configSource?: ConfigSource | undefined
  validateOnly?: boolean | undefined
}
type DeleteServiceStrategy = { [x: string]: unknown }
type TrafficPercentStrategy = { percentages?: { [x: string]: number } | undefined }
type Rollout = {
  createTime?: string | undefined
  createdBy?: string | undefined
  deleteServiceStrategy?: DeleteServiceStrategy | undefined
  rolloutId?: string | undefined
  serviceName?: string | undefined
  status?:
    | 'ROLLOUT_STATUS_UNSPECIFIED'
    | 'IN_PROGRESS'
    | 'SUCCESS'
    | 'CANCELLED'
    | 'FAILED'
    | 'PENDING'
    | 'FAILED_ROLLED_BACK'
    | undefined
  trafficPercentStrategy?: TrafficPercentStrategy | undefined
}
type ListServiceRolloutsResponse = {
  nextPageToken?: string | undefined
  rollouts?: Rollout[] | undefined
}
type GenerateConfigReportRequest = {
  newConfig?: { [x: string]: { [x: string]: unknown } } | undefined
  oldConfig?: { [x: string]: { [x: string]: unknown } } | undefined
}
type Advice = { description?: string | undefined }
type ConfigChange = {
  advices?: Advice[] | undefined
  changeType?: 'CHANGE_TYPE_UNSPECIFIED' | 'ADDED' | 'REMOVED' | 'MODIFIED' | undefined
  element?: string | undefined
  newValue?: string | undefined
  oldValue?: string | undefined
}
type ChangeReport = { configChanges?: ConfigChange[] | undefined }
type Diagnostic = {
  kind?: 'WARNING' | 'ERROR' | undefined
  location?: string | undefined
  message?: string | undefined
}
type GenerateConfigReportResponse = {
  changeReports?: ChangeReport[] | undefined
  diagnostics?: Diagnostic[] | undefined
  id?: string | undefined
  serviceName?: string | undefined
}
type GetPolicyOptions = { requestedPolicyVersion?: number | undefined }
type GetIamPolicyRequest = { options?: GetPolicyOptions | undefined }
type AuditLogConfig = {
  exemptedMembers?: string[] | undefined
  logType?: 'LOG_TYPE_UNSPECIFIED' | 'ADMIN_READ' | 'DATA_WRITE' | 'DATA_READ' | undefined
}
type AuditConfig = { auditLogConfigs?: AuditLogConfig[] | undefined; service?: string | undefined }
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type Binding = {
  condition?: Expr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type Policy = {
  auditConfigs?: AuditConfig[] | undefined
  bindings?: Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type SetIamPolicyRequest = { policy?: Policy | undefined; updateMask?: string | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/operations': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            name?: string | undefined
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
    '/v1/services': {
      $get: {
        input: {
          query: {
            consumerId?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            producerProjectId?: string | undefined
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
        output: ListServicesResponse
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
        } & { json: ManagedService }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/services/:serviceName': {
      $delete: {
        input: { param: { serviceName: string } } & {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { serviceName: string } } & {
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
        output: ManagedService
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/services/:serviceName/config': {
      $get: {
        input: { param: { serviceName: string } } & {
          query: {
            configId?: string | undefined
            view?: 'BASIC' | 'FULL' | undefined
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
        output: Service
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/services/:serviceName/configs': {
      $get: {
        input: { param: { serviceName: string } } & {
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
        output: ListServiceConfigsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { serviceName: string } } & {
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
        } & { json: Service }
        output: Service
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/services/:serviceName/configs/:configId': {
      $get: {
        input: { param: { serviceName: string; configId: string } } & {
          query: {
            view?: 'BASIC' | 'FULL' | undefined
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
        output: Service
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/services/:serviceName/configs:submit': {
      $post: {
        input: { param: { serviceName: string } } & {
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
        } & { json: SubmitConfigSourceRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/services/:serviceName/rollouts': {
      $get: {
        input: { param: { serviceName: string } } & {
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
        output: ListServiceRolloutsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { serviceName: string } } & {
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
        } & { json: Rollout }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/services/:serviceName/rollouts/:rolloutId': {
      $get: {
        input: { param: { serviceName: string; rolloutId: string } } & {
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
        output: Rollout
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/services/:serviceName:undelete': {
      $post: {
        input: { param: { serviceName: string } } & {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/services:generateConfigReport': {
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
        } & { json: GenerateConfigReportRequest }
        output: GenerateConfigReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:getIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
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
        } & { json: GetIamPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:setIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
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
        } & { json: SetIamPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:testIamPermissions': {
      $post: {
        input: { param: { resource: string } } & {
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
        } & { json: TestIamPermissionsRequest }
        output: TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
