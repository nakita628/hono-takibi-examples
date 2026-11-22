type Money = {
  currencyCode?: string | undefined
  nanos?: number | undefined
  units?: string | undefined
}
type Domain = {
  domainName?: string | undefined
  resourceState?:
    | 'RESOURCE_STATE_UNSPECIFIED'
    | 'IMPORTABLE'
    | 'UNSUPPORTED'
    | 'SUSPENDED'
    | 'EXPIRED'
    | 'DELETED'
    | undefined
  yearlyPrice?: Money | undefined
}
type RetrieveImportableDomainsResponse = {
  domains?: Domain[] | undefined
  nextPageToken?: string | undefined
}
type RegisterParameters = {
  availability?:
    | 'AVAILABILITY_UNSPECIFIED'
    | 'AVAILABLE'
    | 'UNAVAILABLE'
    | 'UNSUPPORTED'
    | 'UNKNOWN'
    | undefined
  domainName?: string | undefined
  domainNotices?: ('DOMAIN_NOTICE_UNSPECIFIED' | 'HSTS_PRELOADED')[] | undefined
  supportedPrivacy?:
    | (
        | 'CONTACT_PRIVACY_UNSPECIFIED'
        | 'PUBLIC_CONTACT_DATA'
        | 'PRIVATE_CONTACT_DATA'
        | 'REDACTED_CONTACT_DATA'
      )[]
    | undefined
  yearlyPrice?: Money | undefined
}
type RetrieveRegisterParametersResponse = { registerParameters?: RegisterParameters | undefined }
type TransferParameters = {
  currentRegistrar?: string | undefined
  currentRegistrarUri?: string | undefined
  domainName?: string | undefined
  nameServers?: string[] | undefined
  supportedPrivacy?:
    | (
        | 'CONTACT_PRIVACY_UNSPECIFIED'
        | 'PUBLIC_CONTACT_DATA'
        | 'PRIVATE_CONTACT_DATA'
        | 'REDACTED_CONTACT_DATA'
      )[]
    | undefined
  transferLockState?: 'TRANSFER_LOCK_STATE_UNSPECIFIED' | 'UNLOCKED' | 'LOCKED' | undefined
  yearlyPrice?: Money | undefined
}
type RetrieveTransferParametersResponse = { transferParameters?: TransferParameters | undefined }
type SearchDomainsResponse = { registerParameters?: RegisterParameters[] | undefined }
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
type PostalAddress = {
  addressLines?: string[] | undefined
  administrativeArea?: string | undefined
  languageCode?: string | undefined
  locality?: string | undefined
  organization?: string | undefined
  postalCode?: string | undefined
  recipients?: string[] | undefined
  regionCode?: string | undefined
  revision?: number | undefined
  sortingCode?: string | undefined
  sublocality?: string | undefined
}
type Contact = {
  email?: string | undefined
  faxNumber?: string | undefined
  phoneNumber?: string | undefined
  postalAddress?: PostalAddress | undefined
}
type ContactSettings = {
  adminContact?: Contact | undefined
  privacy?:
    | 'CONTACT_PRIVACY_UNSPECIFIED'
    | 'PUBLIC_CONTACT_DATA'
    | 'PRIVATE_CONTACT_DATA'
    | 'REDACTED_CONTACT_DATA'
    | undefined
  registrantContact?: Contact | undefined
  technicalContact?: Contact | undefined
}
type DsRecord = {
  algorithm?:
    | 'ALGORITHM_UNSPECIFIED'
    | 'RSAMD5'
    | 'DH'
    | 'DSA'
    | 'ECC'
    | 'RSASHA1'
    | 'DSANSEC3SHA1'
    | 'RSASHA1NSEC3SHA1'
    | 'RSASHA256'
    | 'RSASHA512'
    | 'ECCGOST'
    | 'ECDSAP256SHA256'
    | 'ECDSAP384SHA384'
    | 'ED25519'
    | 'ED448'
    | 'INDIRECT'
    | 'PRIVATEDNS'
    | 'PRIVATEOID'
    | undefined
  digest?: string | undefined
  digestType?: 'DIGEST_TYPE_UNSPECIFIED' | 'SHA1' | 'SHA256' | 'GOST3411' | 'SHA384' | undefined
  keyTag?: number | undefined
}
type CustomDns = { dsRecords?: DsRecord[] | undefined; nameServers?: string[] | undefined }
type GlueRecord = {
  hostName?: string | undefined
  ipv4Addresses?: string[] | undefined
  ipv6Addresses?: string[] | undefined
}
type GoogleDomainsDns = {
  dsRecords?: DsRecord[] | undefined
  dsState?: 'DS_STATE_UNSPECIFIED' | 'DS_RECORDS_UNPUBLISHED' | 'DS_RECORDS_PUBLISHED' | undefined
  nameServers?: string[] | undefined
}
type DnsSettings = {
  customDns?: CustomDns | undefined
  glueRecords?: GlueRecord[] | undefined
  googleDomainsDns?: GoogleDomainsDns | undefined
}
type ManagementSettings = {
  renewalMethod?: 'RENEWAL_METHOD_UNSPECIFIED' | 'AUTOMATIC_RENEWAL' | 'MANUAL_RENEWAL' | undefined
  transferLockState?: 'TRANSFER_LOCK_STATE_UNSPECIFIED' | 'UNLOCKED' | 'LOCKED' | undefined
}
type Registration = {
  contactSettings?: ContactSettings | undefined
  createTime?: string | undefined
  dnsSettings?: DnsSettings | undefined
  domainName?: string | undefined
  expireTime?: string | undefined
  issues?: ('ISSUE_UNSPECIFIED' | 'CONTACT_SUPPORT' | 'UNVERIFIED_EMAIL')[] | undefined
  labels?: { [x: string]: string } | undefined
  managementSettings?: ManagementSettings | undefined
  name?: string | undefined
  pendingContactSettings?: ContactSettings | undefined
  registerFailureReason?:
    | 'REGISTER_FAILURE_REASON_UNSPECIFIED'
    | 'REGISTER_FAILURE_REASON_UNKNOWN'
    | 'DOMAIN_NOT_AVAILABLE'
    | 'INVALID_CONTACTS'
    | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'REGISTRATION_PENDING'
    | 'REGISTRATION_FAILED'
    | 'TRANSFER_PENDING'
    | 'TRANSFER_FAILED'
    | 'IMPORT_PENDING'
    | 'ACTIVE'
    | 'SUSPENDED'
    | 'EXPORTED'
    | undefined
  supportedPrivacy?:
    | (
        | 'CONTACT_PRIVACY_UNSPECIFIED'
        | 'PUBLIC_CONTACT_DATA'
        | 'PRIVATE_CONTACT_DATA'
        | 'REDACTED_CONTACT_DATA'
      )[]
    | undefined
  transferFailureReason?:
    | 'TRANSFER_FAILURE_REASON_UNSPECIFIED'
    | 'TRANSFER_FAILURE_REASON_UNKNOWN'
    | 'EMAIL_CONFIRMATION_FAILURE'
    | 'DOMAIN_NOT_REGISTERED'
    | 'DOMAIN_HAS_TRANSFER_LOCK'
    | 'INVALID_AUTHORIZATION_CODE'
    | 'TRANSFER_CANCELLED'
    | 'TRANSFER_REJECTED'
    | 'INVALID_REGISTRANT_EMAIL_ADDRESS'
    | 'DOMAIN_NOT_ELIGIBLE_FOR_TRANSFER'
    | 'TRANSFER_ALREADY_PENDING'
    | undefined
}
type Location = {
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type ListLocationsResponse = {
  locations?: Location[] | undefined
  nextPageToken?: string | undefined
}
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type ExportRegistrationRequest = { [x: string]: unknown }
type ListRegistrationsResponse = {
  nextPageToken?: string | undefined
  registrations?: Registration[] | undefined
}
type ImportDomainRequest = {
  domainName?: string | undefined
  labels?: { [x: string]: string } | undefined
}
type RegisterDomainRequest = {
  contactNotices?:
    | ('CONTACT_NOTICE_UNSPECIFIED' | 'PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT')[]
    | undefined
  domainNotices?: ('DOMAIN_NOTICE_UNSPECIFIED' | 'HSTS_PRELOADED')[] | undefined
  registration?: Registration | undefined
  validateOnly?: boolean | undefined
  yearlyPrice?: Money | undefined
}
type AuthorizationCode = { code?: string | undefined }
type TransferDomainRequest = {
  authorizationCode?: AuthorizationCode | undefined
  contactNotices?:
    | ('CONTACT_NOTICE_UNSPECIFIED' | 'PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT')[]
    | undefined
  registration?: Registration | undefined
  validateOnly?: boolean | undefined
  yearlyPrice?: Money | undefined
}
type ConfigureContactSettingsRequest = {
  contactNotices?:
    | ('CONTACT_NOTICE_UNSPECIFIED' | 'PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT')[]
    | undefined
  contactSettings?: ContactSettings | undefined
  updateMask?: string | undefined
  validateOnly?: boolean | undefined
}
type ConfigureDnsSettingsRequest = {
  dnsSettings?: DnsSettings | undefined
  updateMask?: string | undefined
  validateOnly?: boolean | undefined
}
type ConfigureManagementSettingsRequest = {
  managementSettings?: ManagementSettings | undefined
  updateMask?: string | undefined
}
type ResetAuthorizationCodeRequest = { [x: string]: unknown }
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
    '/v1beta1/:location/registrations:retrieveImportableDomains': {
      $get: {
        input: { param: { location: string } } & {
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
        output: RetrieveImportableDomainsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:location/registrations:retrieveRegisterParameters': {
      $get: {
        input: { param: { location: string } } & {
          query: {
            domainName?: string | undefined
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
        output: RetrieveRegisterParametersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:location/registrations:retrieveTransferParameters': {
      $get: {
        input: { param: { location: string } } & {
          query: {
            domainName?: string | undefined
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
        output: RetrieveTransferParametersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:location/registrations:searchDomains': {
      $get: {
        input: { param: { location: string } } & {
          query: {
            query?: string | undefined
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
        output: SearchDomainsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name': {
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
        output: Registration
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
        } & { json: Registration }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/locations': {
      $get: {
        input: { param: { name: string } } & {
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
        output: ListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/operations': {
      $get: {
        input: { param: { name: string } } & {
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
        output: ListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:export': {
      $post: {
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
        } & { json: ExportRegistrationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/registrations': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListRegistrationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/registrations:import': {
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
        } & { json: ImportDomainRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/registrations:register': {
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
        } & { json: RegisterDomainRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/registrations:transfer': {
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
        } & { json: TransferDomainRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:registration:configureContactSettings': {
      $post: {
        input: { param: { registration: string } } & {
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
        } & { json: ConfigureContactSettingsRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:registration:configureDnsSettings': {
      $post: {
        input: { param: { registration: string } } & {
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
        } & { json: ConfigureDnsSettingsRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:registration:configureManagementSettings': {
      $post: {
        input: { param: { registration: string } } & {
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
        } & { json: ConfigureManagementSettingsRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:registration:resetAuthorizationCode': {
      $post: {
        input: { param: { registration: string } } & {
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
        } & { json: ResetAuthorizationCodeRequest }
        output: AuthorizationCode
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:registration:retrieveAuthorizationCode': {
      $get: {
        input: { param: { registration: string } } & {
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
        output: AuthorizationCode
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:getIamPolicy': {
      $get: {
        input: { param: { resource: string } } & {
          query: {
            'options.requestedPolicyVersion'?: number | undefined
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
    '/v1beta1/:resource:setIamPolicy': {
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
    '/v1beta1/:resource:testIamPermissions': {
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
