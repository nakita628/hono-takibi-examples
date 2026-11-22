type CompositeTypeLabelEntry = { key?: string | undefined; value?: string | undefined }
type Operation = {
  clientOperationId?: string | undefined
  creationTimestamp?: string | undefined
  description?: string | undefined
  endTime?: string | undefined
  error?:
    | {
        errors?:
          | {
              code?: string | undefined
              location?: string | undefined
              message?: string | undefined
            }[]
          | undefined
      }
    | undefined
  httpErrorMessage?: string | undefined
  httpErrorStatusCode?: number | undefined
  id?: string | undefined
  insertTime?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  operationGroupId?: string | undefined
  operationType?: string | undefined
  progress?: number | undefined
  region?: string | undefined
  selfLink?: string | undefined
  startTime?: string | undefined
  status?: 'PENDING' | 'RUNNING' | 'DONE' | undefined
  statusMessage?: string | undefined
  targetId?: string | undefined
  targetLink?: string | undefined
  user?: string | undefined
  warnings?:
    | {
        code?:
          | 'DEPRECATED_RESOURCE_USED'
          | 'NO_RESULTS_ON_PAGE'
          | 'UNREACHABLE'
          | 'NEXT_HOP_ADDRESS_NOT_ASSIGNED'
          | 'NEXT_HOP_INSTANCE_NOT_FOUND'
          | 'NEXT_HOP_INSTANCE_NOT_ON_NETWORK'
          | 'NEXT_HOP_CANNOT_IP_FORWARD'
          | 'NEXT_HOP_NOT_RUNNING'
          | 'INJECTED_KERNELS_DEPRECATED'
          | 'REQUIRED_TOS_AGREEMENT'
          | 'DISK_SIZE_LARGER_THAN_IMAGE_SIZE'
          | 'RESOURCE_NOT_DELETED'
          | 'SINGLE_INSTANCE_PROPERTY_TEMPLATE'
          | 'NOT_CRITICAL_ERROR'
          | 'CLEANUP_FAILED'
          | 'FIELD_VALUE_OVERRIDEN'
          | 'RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING'
          | 'MISSING_TYPE_DEPENDENCY'
          | 'EXTERNAL_API_WARNING'
          | 'SCHEMA_VALIDATION_IGNORED'
          | 'UNDECLARED_PROPERTIES'
          | 'EXPERIMENTAL_TYPE_USED'
          | 'DEPRECATED_TYPE_USED'
          | 'PARTIAL_SUCCESS'
          | 'LARGE_DEPLOYMENT_WARNING'
          | 'NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE'
          | 'INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB'
          | undefined
        data?: { key?: string | undefined; value?: string | undefined }[] | undefined
        message?: string | undefined
      }[]
    | undefined
  zone?: string | undefined
}
type ImportFile = { content?: string | undefined; name?: string | undefined }
type TemplateContents = {
  imports?: ImportFile[] | undefined
  interpreter?: 'UNKNOWN_INTERPRETER' | 'PYTHON' | 'JINJA' | undefined
  mainTemplate?: string | undefined
  schema?: string | undefined
  template?: string | undefined
}
type CompositeType = {
  description?: string | undefined
  id?: string | undefined
  insertTime?: string | undefined
  labels?: CompositeTypeLabelEntry[] | undefined
  name?: string | undefined
  operation?: Operation | undefined
  selfLink?: string | undefined
  status?: 'UNKNOWN_STATUS' | 'DEPRECATED' | 'EXPERIMENTAL' | 'SUPPORTED' | undefined
  templateContents?: TemplateContents | undefined
}
type CompositeTypesListResponse = {
  compositeTypes?: CompositeType[] | undefined
  nextPageToken?: string | undefined
}
type DeploymentLabelEntry = { key?: string | undefined; value?: string | undefined }
type ConfigFile = { content?: string | undefined }
type TargetConfiguration = { config?: ConfigFile | undefined; imports?: ImportFile[] | undefined }
type DeploymentUpdateLabelEntry = { key?: string | undefined; value?: string | undefined }
type DeploymentUpdate = {
  description?: string | undefined
  labels?: DeploymentUpdateLabelEntry[] | undefined
  manifest?: string | undefined
}
type Deployment = {
  description?: string | undefined
  fingerprint?: string | undefined
  id?: string | undefined
  insertTime?: string | undefined
  labels?: DeploymentLabelEntry[] | undefined
  manifest?: string | undefined
  name?: string | undefined
  operation?: Operation | undefined
  selfLink?: string | undefined
  target?: TargetConfiguration | undefined
  update?: DeploymentUpdate | undefined
  updateTime?: string | undefined
}
type DeploymentsListResponse = {
  deployments?: Deployment[] | undefined
  nextPageToken?: string | undefined
}
type DeploymentsCancelPreviewRequest = { fingerprint?: string | undefined }
type Manifest = {
  config?: ConfigFile | undefined
  expandedConfig?: string | undefined
  id?: string | undefined
  imports?: ImportFile[] | undefined
  insertTime?: string | undefined
  layout?: string | undefined
  manifestSizeBytes?: string | undefined
  manifestSizeLimitBytes?: string | undefined
  name?: string | undefined
  selfLink?: string | undefined
}
type ManifestsListResponse = {
  manifests?: Manifest[] | undefined
  nextPageToken?: string | undefined
}
type ResourceAccessControl = { gcpIamPolicy?: string | undefined }
type ResourceUpdate = {
  accessControl?: ResourceAccessControl | undefined
  error?:
    | {
        errors?:
          | {
              code?: string | undefined
              location?: string | undefined
              message?: string | undefined
            }[]
          | undefined
      }
    | undefined
  finalProperties?: string | undefined
  intent?: 'CREATE_OR_ACQUIRE' | 'DELETE' | 'ACQUIRE' | 'UPDATE' | 'ABANDON' | 'CREATE' | undefined
  manifest?: string | undefined
  properties?: string | undefined
  state?: 'PENDING' | 'IN_PROGRESS' | 'IN_PREVIEW' | 'FAILED' | 'ABORTED' | undefined
  warnings?:
    | {
        code?:
          | 'DEPRECATED_RESOURCE_USED'
          | 'NO_RESULTS_ON_PAGE'
          | 'UNREACHABLE'
          | 'NEXT_HOP_ADDRESS_NOT_ASSIGNED'
          | 'NEXT_HOP_INSTANCE_NOT_FOUND'
          | 'NEXT_HOP_INSTANCE_NOT_ON_NETWORK'
          | 'NEXT_HOP_CANNOT_IP_FORWARD'
          | 'NEXT_HOP_NOT_RUNNING'
          | 'INJECTED_KERNELS_DEPRECATED'
          | 'REQUIRED_TOS_AGREEMENT'
          | 'DISK_SIZE_LARGER_THAN_IMAGE_SIZE'
          | 'RESOURCE_NOT_DELETED'
          | 'SINGLE_INSTANCE_PROPERTY_TEMPLATE'
          | 'NOT_CRITICAL_ERROR'
          | 'CLEANUP_FAILED'
          | 'FIELD_VALUE_OVERRIDEN'
          | 'RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING'
          | 'MISSING_TYPE_DEPENDENCY'
          | 'EXTERNAL_API_WARNING'
          | 'SCHEMA_VALIDATION_IGNORED'
          | 'UNDECLARED_PROPERTIES'
          | 'EXPERIMENTAL_TYPE_USED'
          | 'DEPRECATED_TYPE_USED'
          | 'PARTIAL_SUCCESS'
          | 'LARGE_DEPLOYMENT_WARNING'
          | 'NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE'
          | 'INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB'
          | undefined
        data?: { key?: string | undefined; value?: string | undefined }[] | undefined
        message?: string | undefined
      }[]
    | undefined
}
type Resource = {
  accessControl?: ResourceAccessControl | undefined
  finalProperties?: string | undefined
  id?: string | undefined
  insertTime?: string | undefined
  manifest?: string | undefined
  name?: string | undefined
  properties?: string | undefined
  type?: string | undefined
  update?: ResourceUpdate | undefined
  updateTime?: string | undefined
  url?: string | undefined
  warnings?:
    | {
        code?:
          | 'DEPRECATED_RESOURCE_USED'
          | 'NO_RESULTS_ON_PAGE'
          | 'UNREACHABLE'
          | 'NEXT_HOP_ADDRESS_NOT_ASSIGNED'
          | 'NEXT_HOP_INSTANCE_NOT_FOUND'
          | 'NEXT_HOP_INSTANCE_NOT_ON_NETWORK'
          | 'NEXT_HOP_CANNOT_IP_FORWARD'
          | 'NEXT_HOP_NOT_RUNNING'
          | 'INJECTED_KERNELS_DEPRECATED'
          | 'REQUIRED_TOS_AGREEMENT'
          | 'DISK_SIZE_LARGER_THAN_IMAGE_SIZE'
          | 'RESOURCE_NOT_DELETED'
          | 'SINGLE_INSTANCE_PROPERTY_TEMPLATE'
          | 'NOT_CRITICAL_ERROR'
          | 'CLEANUP_FAILED'
          | 'FIELD_VALUE_OVERRIDEN'
          | 'RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING'
          | 'MISSING_TYPE_DEPENDENCY'
          | 'EXTERNAL_API_WARNING'
          | 'SCHEMA_VALIDATION_IGNORED'
          | 'UNDECLARED_PROPERTIES'
          | 'EXPERIMENTAL_TYPE_USED'
          | 'DEPRECATED_TYPE_USED'
          | 'PARTIAL_SUCCESS'
          | 'LARGE_DEPLOYMENT_WARNING'
          | 'NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE'
          | 'INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB'
          | undefined
        data?: { key?: string | undefined; value?: string | undefined }[] | undefined
        message?: string | undefined
      }[]
    | undefined
}
type ResourcesListResponse = {
  nextPageToken?: string | undefined
  resources?: Resource[] | undefined
}
type DeploymentsStopRequest = { fingerprint?: string | undefined }
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
type GlobalSetPolicyRequest = {
  bindings?: Binding[] | undefined
  etag?: string | undefined
  policy?: Policy | undefined
}
type TestPermissionsRequest = { permissions?: string[] | undefined }
type TestPermissionsResponse = { permissions?: string[] | undefined }
type OperationsListResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type Diagnostic = {
  field?: string | undefined
  level?: 'UNKNOWN' | 'INFORMATION' | 'WARNING' | 'ERROR' | undefined
}
type PollingOptions = {
  diagnostics?: Diagnostic[] | undefined
  failCondition?: string | undefined
  finishCondition?: string | undefined
  pollingLink?: string | undefined
  targetLink?: string | undefined
}
type AsyncOptions = {
  methodMatch?: string | undefined
  pollingOptions?: PollingOptions | undefined
}
type InputMapping = {
  fieldName?: string | undefined
  location?: 'UNKNOWN' | 'PATH' | 'QUERY' | 'BODY' | 'HEADER' | undefined
  methodMatch?: string | undefined
  value?: string | undefined
}
type ValidationOptions = {
  schemaValidation?: 'UNKNOWN' | 'IGNORE' | 'IGNORE_WITH_WARNINGS' | 'FAIL' | undefined
  undeclaredProperties?:
    | 'UNKNOWN'
    | 'INCLUDE'
    | 'IGNORE'
    | 'INCLUDE_WITH_WARNINGS'
    | 'IGNORE_WITH_WARNINGS'
    | 'FAIL'
    | undefined
}
type Options = {
  asyncOptions?: AsyncOptions[] | undefined
  inputMappings?: InputMapping[] | undefined
  validationOptions?: ValidationOptions | undefined
  virtualProperties?: string | undefined
}
type CollectionOverride = { collection?: string | undefined; options?: Options | undefined }
type BasicAuth = { password?: string | undefined; user?: string | undefined }
type ServiceAccount = { email?: string | undefined }
type Credential = {
  basicAuth?: BasicAuth | undefined
  serviceAccount?: ServiceAccount | undefined
  useProjectDefault?: boolean | undefined
}
type TypeProviderLabelEntry = { key?: string | undefined; value?: string | undefined }
type TypeProvider = {
  collectionOverrides?: CollectionOverride[] | undefined
  credential?: Credential | undefined
  customCertificateAuthorityRoots?: string[] | undefined
  description?: string | undefined
  descriptorUrl?: string | undefined
  id?: string | undefined
  insertTime?: string | undefined
  labels?: TypeProviderLabelEntry[] | undefined
  name?: string | undefined
  operation?: Operation | undefined
  options?: Options | undefined
  selfLink?: string | undefined
}
type TypeProvidersListResponse = {
  nextPageToken?: string | undefined
  typeProviders?: TypeProvider[] | undefined
}
type TypeInfoSchemaInfo = { input?: string | undefined; output?: string | undefined }
type TypeInfo = {
  description?: string | undefined
  documentationLink?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  schema?: TypeInfoSchemaInfo | undefined
  selfLink?: string | undefined
  title?: string | undefined
}
type TypeProvidersListTypesResponse = {
  nextPageToken?: string | undefined
  types?: TypeInfo[] | undefined
}
type BaseType = {
  collectionOverrides?: CollectionOverride[] | undefined
  credential?: Credential | undefined
  descriptorUrl?: string | undefined
  options?: Options | undefined
}
type TypeLabelEntry = { key?: string | undefined; value?: string | undefined }
type Type = {
  base?: BaseType | undefined
  description?: string | undefined
  id?: string | undefined
  insertTime?: string | undefined
  labels?: TypeLabelEntry[] | undefined
  name?: string | undefined
  operation?: Operation | undefined
  selfLink?: string | undefined
}
type TypesListResponse = { nextPageToken?: string | undefined; types?: Type[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/deploymentmanager/v2beta/projects/:project/global/compositeTypes': {
      $get: {
        input: { param: { project: string } } & {
          query: {
            filter?: string | undefined
            maxResults?: number | undefined
            orderBy?: string | undefined
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
        output: CompositeTypesListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { project: string } } & {
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
        } & { json: CompositeType }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploymentmanager/v2beta/projects/:project/global/compositeTypes/:compositeType': {
      $delete: {
        input: { param: { project: string; compositeType: string } } & {
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
        input: { param: { project: string; compositeType: string } } & {
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
        output: CompositeType
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { project: string; compositeType: string } } & {
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
        } & { json: CompositeType }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; compositeType: string } } & {
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
        } & { json: CompositeType }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploymentmanager/v2beta/projects/:project/global/deployments': {
      $get: {
        input: { param: { project: string } } & {
          query: {
            filter?: string | undefined
            maxResults?: number | undefined
            orderBy?: string | undefined
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
        output: DeploymentsListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { project: string } } & {
          query: {
            createPolicy?: 'CREATE_OR_ACQUIRE' | 'ACQUIRE' | 'CREATE' | undefined
            preview?: boolean | undefined
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
        } & { json: Deployment }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment': {
      $delete: {
        input: { param: { project: string; deployment: string } } & {
          query: {
            deletePolicy?: 'DELETE' | 'ABANDON' | undefined
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
        input: { param: { project: string; deployment: string } } & {
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
        output: Deployment
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { project: string; deployment: string } } & {
          query: {
            createPolicy?: 'CREATE_OR_ACQUIRE' | 'ACQUIRE' | 'CREATE' | undefined
            deletePolicy?: 'DELETE' | 'ABANDON' | undefined
            preview?: boolean | undefined
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
        } & { json: Deployment }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; deployment: string } } & {
          query: {
            createPolicy?: 'CREATE_OR_ACQUIRE' | 'ACQUIRE' | 'CREATE' | undefined
            deletePolicy?: 'DELETE' | 'ABANDON' | undefined
            preview?: boolean | undefined
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
        } & { json: Deployment }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/cancelPreview': {
      $post: {
        input: { param: { project: string; deployment: string } } & {
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
        } & { json: DeploymentsCancelPreviewRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/manifests': {
      $get: {
        input: { param: { project: string; deployment: string } } & {
          query: {
            filter?: string | undefined
            maxResults?: number | undefined
            orderBy?: string | undefined
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
        output: ManifestsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/manifests/:manifest': {
      $get: {
        input: { param: { project: string; deployment: string; manifest: string } } & {
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
        output: Manifest
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/resources': {
      $get: {
        input: { param: { project: string; deployment: string } } & {
          query: {
            filter?: string | undefined
            maxResults?: number | undefined
            orderBy?: string | undefined
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
        output: ResourcesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/resources/:resource': {
      $get: {
        input: { param: { project: string; deployment: string; resource: string } } & {
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
        output: Resource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/stop': {
      $post: {
        input: { param: { project: string; deployment: string } } & {
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
        } & { json: DeploymentsStopRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:resource/getIamPolicy': {
      $get: {
        input: { param: { project: string; resource: string } } & {
          query: {
            optionsRequestedPolicyVersion?: number | undefined
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
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:resource/setIamPolicy': {
      $post: {
        input: { param: { project: string; resource: string } } & {
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
        } & { json: GlobalSetPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:resource/testIamPermissions': {
      $post: {
        input: { param: { project: string; resource: string } } & {
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
        } & { json: TestPermissionsRequest }
        output: TestPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploymentmanager/v2beta/projects/:project/global/operations': {
      $get: {
        input: { param: { project: string } } & {
          query: {
            filter?: string | undefined
            maxResults?: number | undefined
            orderBy?: string | undefined
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
        output: OperationsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploymentmanager/v2beta/projects/:project/global/operations/:operation': {
      $get: {
        input: { param: { project: string; operation: string } } & {
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
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders': {
      $get: {
        input: { param: { project: string } } & {
          query: {
            filter?: string | undefined
            maxResults?: number | undefined
            orderBy?: string | undefined
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
        output: TypeProvidersListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { project: string } } & {
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
        } & { json: TypeProvider }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders/:typeProvider': {
      $delete: {
        input: { param: { project: string; typeProvider: string } } & {
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
        input: { param: { project: string; typeProvider: string } } & {
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
        output: TypeProvider
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { project: string; typeProvider: string } } & {
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
        } & { json: TypeProvider }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; typeProvider: string } } & {
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
        } & { json: TypeProvider }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders/:typeProvider/types': {
      $get: {
        input: { param: { project: string; typeProvider: string } } & {
          query: {
            filter?: string | undefined
            maxResults?: number | undefined
            orderBy?: string | undefined
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
        output: TypeProvidersListTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders/:typeProvider/types/:type': {
      $get: {
        input: { param: { project: string; typeProvider: string; type: string } } & {
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
        output: TypeInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploymentmanager/v2beta/projects/:project/global/types': {
      $get: {
        input: { param: { project: string } } & {
          query: {
            filter?: string | undefined
            maxResults?: number | undefined
            orderBy?: string | undefined
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
        output: TypesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
