type AccessPolicy = {
  name?: string | undefined
  parent?: string | undefined
  title?: string | undefined
}
type ListAccessPoliciesResponse = {
  accessPolicies?: AccessPolicy[] | undefined
  nextPageToken?: string | undefined
}
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
type VpcAccessibleServices = {
  allowedServices?: string[] | undefined
  enableRestriction?: boolean | undefined
}
type ServicePerimeterConfig = {
  accessLevels?: string[] | undefined
  resources?: string[] | undefined
  restrictedServices?: string[] | undefined
  unrestrictedServices?: string[] | undefined
  vpcAccessibleServices?: VpcAccessibleServices | undefined
}
type ServicePerimeter = {
  description?: string | undefined
  name?: string | undefined
  perimeterType?: 'PERIMETER_TYPE_REGULAR' | 'PERIMETER_TYPE_BRIDGE' | undefined
  status?: ServicePerimeterConfig | undefined
  title?: string | undefined
}
type OsConstraint = {
  minimumVersion?: string | undefined
  osType?:
    | 'OS_UNSPECIFIED'
    | 'DESKTOP_MAC'
    | 'DESKTOP_WINDOWS'
    | 'DESKTOP_LINUX'
    | 'DESKTOP_CHROME_OS'
    | 'ANDROID'
    | 'IOS'
    | undefined
  requireVerifiedChromeOs?: boolean | undefined
}
type DevicePolicy = {
  allowedDeviceManagementLevels?:
    | ('MANAGEMENT_UNSPECIFIED' | 'NONE' | 'BASIC' | 'COMPLETE')[]
    | undefined
  allowedEncryptionStatuses?:
    | ('ENCRYPTION_UNSPECIFIED' | 'ENCRYPTION_UNSUPPORTED' | 'UNENCRYPTED' | 'ENCRYPTED')[]
    | undefined
  osConstraints?: OsConstraint[] | undefined
  requireAdminApproval?: boolean | undefined
  requireCorpOwned?: boolean | undefined
  requireScreenlock?: boolean | undefined
}
type Condition = {
  devicePolicy?: DevicePolicy | undefined
  ipSubnetworks?: string[] | undefined
  members?: string[] | undefined
  negate?: boolean | undefined
  regions?: string[] | undefined
  requiredAccessLevels?: string[] | undefined
}
type BasicLevel = {
  combiningFunction?: 'AND' | 'OR' | undefined
  conditions?: Condition[] | undefined
}
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type CustomLevel = { expr?: Expr | undefined }
type AccessLevel = {
  basic?: BasicLevel | undefined
  custom?: CustomLevel | undefined
  description?: string | undefined
  name?: string | undefined
  title?: string | undefined
}
type ListAccessLevelsResponse = {
  accessLevels?: AccessLevel[] | undefined
  nextPageToken?: string | undefined
}
type ListServicePerimetersResponse = {
  nextPageToken?: string | undefined
  servicePerimeters?: ServicePerimeter[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta/accessPolicies': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            parent?: string | undefined
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
        output: ListAccessPoliciesResponse
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
        } & { json: AccessPolicy }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name': {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            accessLevelFormat?: 'LEVEL_FORMAT_UNSPECIFIED' | 'AS_DEFINED' | 'CEL' | undefined
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
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: ServicePerimeter }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/accessLevels': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            accessLevelFormat?: 'LEVEL_FORMAT_UNSPECIFIED' | 'AS_DEFINED' | 'CEL' | undefined
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
        output: ListAccessLevelsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: AccessLevel }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/servicePerimeters': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListServicePerimetersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: ServicePerimeter }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
