type AndroidAttributes = {
  enabledUnknownSources?: boolean | undefined
  ownerProfileAccount?: boolean | undefined
  ownershipPrivilege?:
    | 'OWNERSHIP_PRIVILEGE_UNSPECIFIED'
    | 'DEVICE_ADMINISTRATOR'
    | 'PROFILE_OWNER'
    | 'DEVICE_OWNER'
    | undefined
  supportsWorkProfile?: boolean | undefined
}
type CertificateTemplate = {
  id?: string | undefined
  majorVersion?: number | undefined
  minorVersion?: number | undefined
}
type CertificateAttributes = {
  certificateTemplate?: CertificateTemplate | undefined
  fingerprint?: string | undefined
  issuer?: string | undefined
  serialNumber?: string | undefined
  subject?: string | undefined
  thumbprint?: string | undefined
  validationState?:
    | 'CERTIFICATE_VALIDATION_STATE_UNSPECIFIED'
    | 'VALIDATION_SUCCESSFUL'
    | 'VALIDATION_FAILED'
    | undefined
  validityExpirationTime?: string | undefined
  validityStartTime?: string | undefined
}
type EndpointVerificationSpecificAttributes = {
  certificateAttributes?: CertificateAttributes[] | undefined
}
type Device = {
  androidSpecificAttributes?: AndroidAttributes | undefined
  assetTag?: string | undefined
  basebandVersion?: string | undefined
  bootloaderVersion?: string | undefined
  brand?: string | undefined
  buildNumber?: string | undefined
  clientTypes?:
    | (
        | 'CLIENT_TYPE_UNSPECIFIED'
        | 'DRIVE_FS'
        | 'FUNDAMENTAL'
        | 'ENDPOINT_VERIFICATION'
        | 'WINDOWS_ADVANCED'
        | 'GOOGLE_CREDENTIALS_PROVIDER_FOR_WINDOWS'
      )[]
    | undefined
  compromisedState?: 'COMPROMISED_STATE_UNSPECIFIED' | 'COMPROMISED' | 'UNCOMPROMISED' | undefined
  createTime?: string | undefined
  deviceId?: string | undefined
  deviceType?:
    | 'DEVICE_TYPE_UNSPECIFIED'
    | 'ANDROID'
    | 'IOS'
    | 'GOOGLE_SYNC'
    | 'WINDOWS'
    | 'MAC_OS'
    | 'LINUX'
    | 'CHROME_OS'
    | undefined
  enabledDeveloperOptions?: boolean | undefined
  enabledUsbDebugging?: boolean | undefined
  encryptionState?:
    | 'ENCRYPTION_STATE_UNSPECIFIED'
    | 'UNSUPPORTED_BY_DEVICE'
    | 'ENCRYPTED'
    | 'NOT_ENCRYPTED'
    | undefined
  endpointVerificationSpecificAttributes?: EndpointVerificationSpecificAttributes | undefined
  hostname?: string | undefined
  imei?: string | undefined
  kernelVersion?: string | undefined
  lastSyncTime?: string | undefined
  managementState?:
    | 'MANAGEMENT_STATE_UNSPECIFIED'
    | 'APPROVED'
    | 'BLOCKED'
    | 'PENDING'
    | 'UNPROVISIONED'
    | 'WIPING'
    | 'WIPED'
    | undefined
  manufacturer?: string | undefined
  meid?: string | undefined
  model?: string | undefined
  name?: string | undefined
  networkOperator?: string | undefined
  osVersion?: string | undefined
  otherAccounts?: string[] | undefined
  ownerType?: 'DEVICE_OWNERSHIP_UNSPECIFIED' | 'COMPANY' | 'BYOD' | undefined
  releaseVersion?: string | undefined
  securityPatchTime?: string | undefined
  serialNumber?: string | undefined
  wifiMacAddresses?: string[] | undefined
}
type ListDevicesResponse = { devices?: Device[] | undefined; nextPageToken?: string | undefined }
type CreateDeviceRequest = { customer?: string | undefined; device?: Device | undefined }
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
type EntityKey = { id?: string | undefined; namespace?: string | undefined }
type DynamicGroupQuery = {
  query?: string | undefined
  resourceType?: 'RESOURCE_TYPE_UNSPECIFIED' | 'USER' | undefined
}
type DynamicGroupStatus = {
  status?:
    | 'STATUS_UNSPECIFIED'
    | 'UP_TO_DATE'
    | 'UPDATING_MEMBERSHIPS'
    | 'INVALID_QUERY'
    | undefined
  statusTime?: string | undefined
}
type DynamicGroupMetadata = {
  queries?: DynamicGroupQuery[] | undefined
  status?: DynamicGroupStatus | undefined
}
type PosixGroup = {
  gid?: string | undefined
  name?: string | undefined
  systemId?: string | undefined
}
type Group = {
  additionalGroupKeys?: EntityKey[] | undefined
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  dynamicGroupMetadata?: DynamicGroupMetadata | undefined
  groupKey?: EntityKey | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  parent?: string | undefined
  posixGroups?: PosixGroup[] | undefined
  updateTime?: string | undefined
}
type ListGroupsResponse = { groups?: Group[] | undefined; nextPageToken?: string | undefined }
type LookupGroupNameResponse = { name?: string | undefined }
type SearchGroupsResponse = { groups?: Group[] | undefined; nextPageToken?: string | undefined }
type SamlIdpConfig = {
  changePasswordUri?: string | undefined
  entityId?: string | undefined
  logoutRedirectUri?: string | undefined
  singleSignOnServiceUri?: string | undefined
}
type SamlSpConfig = {
  assertionConsumerServiceUri?: string | undefined
  entityId?: string | undefined
}
type InboundSamlSsoProfile = {
  customer?: string | undefined
  displayName?: string | undefined
  idpConfig?: SamlIdpConfig | undefined
  name?: string | undefined
  spConfig?: SamlSpConfig | undefined
}
type ListInboundSamlSsoProfilesResponse = {
  inboundSamlSsoProfiles?: InboundSamlSsoProfile[] | undefined
  nextPageToken?: string | undefined
}
type SamlSsoInfo = { inboundSamlSsoProfile?: string | undefined }
type SignInBehavior = { redirectCondition?: 'REDIRECT_CONDITION_UNSPECIFIED' | 'NEVER' | undefined }
type InboundSsoAssignment = {
  customer?: string | undefined
  name?: string | undefined
  rank?: number | undefined
  samlSsoInfo?: SamlSsoInfo | undefined
  signInBehavior?: SignInBehavior | undefined
  ssoMode?:
    | 'SSO_MODE_UNSPECIFIED'
    | 'SSO_OFF'
    | 'SAML_SSO'
    | 'DOMAIN_WIDE_SAML_IF_ENABLED'
    | undefined
  targetGroup?: string | undefined
  targetOrgUnit?: string | undefined
}
type ListInboundSsoAssignmentsResponse = {
  inboundSsoAssignments?: InboundSsoAssignment[] | undefined
  nextPageToken?: string | undefined
}
type ApproveDeviceUserRequest = { customer?: string | undefined }
type BlockDeviceUserRequest = { customer?: string | undefined }
type CancelUserInvitationRequest = { [x: string]: unknown }
type CancelWipeDeviceUserRequest = { customer?: string | undefined }
type IsInvitableUserResponse = { isInvitableUser?: boolean | undefined }
type ExpiryDetail = { expireTime?: string | undefined }
type MembershipRoleRestrictionEvaluation = {
  state?:
    | 'STATE_UNSPECIFIED'
    | 'COMPLIANT'
    | 'FORWARD_COMPLIANT'
    | 'NON_COMPLIANT'
    | 'EVALUATING'
    | undefined
}
type RestrictionEvaluations = {
  memberRestrictionEvaluation?: MembershipRoleRestrictionEvaluation | undefined
}
type MembershipRole = {
  expiryDetail?: ExpiryDetail | undefined
  name?: string | undefined
  restrictionEvaluations?: RestrictionEvaluations | undefined
}
type UpdateMembershipRolesParams = {
  fieldMask?: string | undefined
  membershipRole?: MembershipRole | undefined
}
type ModifyMembershipRolesRequest = {
  addRoles?: MembershipRole[] | undefined
  removeRoles?: string[] | undefined
  updateRolesParams?: UpdateMembershipRolesParams[] | undefined
}
type Membership = {
  createTime?: string | undefined
  deliverySetting?:
    | 'DELIVERY_SETTING_UNSPECIFIED'
    | 'ALL_MAIL'
    | 'DIGEST'
    | 'DAILY'
    | 'NONE'
    | 'DISABLED'
    | undefined
  memberKey?: EntityKey | undefined
  name?: string | undefined
  preferredMemberKey?: EntityKey | undefined
  roles?: MembershipRole[] | undefined
  type?:
    | 'TYPE_UNSPECIFIED'
    | 'USER'
    | 'SERVICE_ACCOUNT'
    | 'GROUP'
    | 'SHARED_DRIVE'
    | 'OTHER'
    | undefined
  updateTime?: string | undefined
}
type ModifyMembershipRolesResponse = { membership?: Membership | undefined }
type MoveOrgMembershipRequest = {
  customer?: string | undefined
  destinationOrgUnit?: string | undefined
}
type SendUserInvitationRequest = { [x: string]: unknown }
type WipeDeviceUserRequest = { customer?: string | undefined }
type DeviceUser = {
  compromisedState?: 'COMPROMISED_STATE_UNSPECIFIED' | 'COMPROMISED' | 'NOT_COMPROMISED' | undefined
  createTime?: string | undefined
  firstSyncTime?: string | undefined
  languageCode?: string | undefined
  lastSyncTime?: string | undefined
  managementState?:
    | 'MANAGEMENT_STATE_UNSPECIFIED'
    | 'WIPING'
    | 'WIPED'
    | 'APPROVED'
    | 'BLOCKED'
    | 'PENDING_APPROVAL'
    | 'UNENROLLED'
    | undefined
  name?: string | undefined
  passwordState?: 'PASSWORD_STATE_UNSPECIFIED' | 'PASSWORD_SET' | 'PASSWORD_NOT_SET' | undefined
  userAgent?: string | undefined
  userEmail?: string | undefined
}
type ListDeviceUsersResponse = {
  deviceUsers?: DeviceUser[] | undefined
  nextPageToken?: string | undefined
}
type DsaPublicKeyInfo = { keySize?: number | undefined }
type RsaPublicKeyInfo = { keySize?: number | undefined }
type IdpCredential = {
  dsaKeyInfo?: DsaPublicKeyInfo | undefined
  name?: string | undefined
  rsaKeyInfo?: RsaPublicKeyInfo | undefined
  updateTime?: string | undefined
}
type ListIdpCredentialsResponse = {
  idpCredentials?: IdpCredential[] | undefined
  nextPageToken?: string | undefined
}
type AddIdpCredentialRequest = { pemData?: string | undefined }
type OrgMembership = {
  member?: string | undefined
  memberUri?: string | undefined
  name?: string | undefined
  type?: 'ENTITY_TYPE_UNSPECIFIED' | 'SHARED_DRIVE' | undefined
}
type ListOrgMembershipsResponse = {
  nextPageToken?: string | undefined
  orgMemberships?: OrgMembership[] | undefined
}
type CheckTransitiveMembershipResponse = { hasMembership?: boolean | undefined }
type LookupMembershipNameResponse = { name?: string | undefined }
type MembershipRelation = {
  description?: string | undefined
  displayName?: string | undefined
  group?: string | undefined
  groupKey?: EntityKey | undefined
  labels?: { [x: string]: string } | undefined
  membership?: string | undefined
  roles?: MembershipRole[] | undefined
}
type SearchDirectGroupsResponse = {
  memberships?: MembershipRelation[] | undefined
  nextPageToken?: string | undefined
}
type TransitiveMembershipRole = { role?: string | undefined }
type GroupRelation = {
  displayName?: string | undefined
  group?: string | undefined
  groupKey?: EntityKey | undefined
  labels?: { [x: string]: string } | undefined
  relationType?:
    | 'RELATION_TYPE_UNSPECIFIED'
    | 'DIRECT'
    | 'INDIRECT'
    | 'DIRECT_AND_INDIRECT'
    | undefined
  roles?: TransitiveMembershipRole[] | undefined
}
type SearchTransitiveGroupsResponse = {
  memberships?: GroupRelation[] | undefined
  nextPageToken?: string | undefined
}
type MemberRelation = {
  member?: string | undefined
  preferredMemberKey?: EntityKey[] | undefined
  relationType?:
    | 'RELATION_TYPE_UNSPECIFIED'
    | 'DIRECT'
    | 'INDIRECT'
    | 'DIRECT_AND_INDIRECT'
    | undefined
  roles?: TransitiveMembershipRole[] | undefined
}
type SearchTransitiveMembershipsResponse = {
  memberships?: MemberRelation[] | undefined
  nextPageToken?: string | undefined
}
type UserInvitation = {
  mailsSentCount?: string | undefined
  name?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'NOT_YET_SENT' | 'INVITED' | 'ACCEPTED' | 'DECLINED' | undefined
  updateTime?: string | undefined
}
type ListUserInvitationsResponse = {
  nextPageToken?: string | undefined
  userInvitations?: UserInvitation[] | undefined
}
type LookupSelfDeviceUsersResponse = {
  customer?: string | undefined
  names?: string[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/devices': {
      $get: {
        input: {
          query: {
            customer?: string | undefined
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?: 'VIEW_UNSPECIFIED' | 'COMPANY_INVENTORY' | 'USER_ASSIGNED_DEVICES' | undefined
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
        output: ListDevicesResponse
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
        } & { json: CreateDeviceRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/groups': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            parent?: string | undefined
            view?: 'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
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
        output: ListGroupsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            initialGroupConfig?:
              | 'INITIAL_GROUP_CONFIG_UNSPECIFIED'
              | 'WITH_INITIAL_OWNER'
              | 'EMPTY'
              | undefined
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
        } & { json: Group }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/groups:lookup': {
      $get: {
        input: {
          query: {
            'groupKey.id'?: string | undefined
            'groupKey.namespace'?: string | undefined
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
        output: LookupGroupNameResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/groups:search': {
      $get: {
        input: {
          query: {
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            query?: string | undefined
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
        output: SearchGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/inboundSamlSsoProfiles': {
      $get: {
        input: {
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
        output: ListInboundSamlSsoProfilesResponse
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
        } & { json: InboundSamlSsoProfile }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/inboundSsoAssignments': {
      $get: {
        input: {
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
        output: ListInboundSsoAssignmentsResponse
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
        } & { json: InboundSsoAssignment }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            customer?: string | undefined
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
            readMask?: string | undefined
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
        output: InboundSsoAssignment
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
        } & { json: InboundSsoAssignment }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:approve': {
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
        } & { json: ApproveDeviceUserRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:block': {
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
        } & { json: BlockDeviceUserRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:cancel': {
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
        } & { json: CancelUserInvitationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:cancelWipe': {
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
        } & { json: CancelWipeDeviceUserRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:isInvitableUser': {
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
        output: IsInvitableUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:modifyMembershipRoles': {
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
        } & { json: ModifyMembershipRolesRequest }
        output: ModifyMembershipRolesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:move': {
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
        } & { json: MoveOrgMembershipRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:send': {
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
        } & { json: SendUserInvitationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:wipe': {
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
        } & { json: WipeDeviceUserRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/deviceUsers': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            customer?: string | undefined
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListDeviceUsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/idpCredentials': {
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
        output: ListIdpCredentialsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/idpCredentials:add': {
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
        } & { json: AddIdpCredentialRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/memberships': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            customer?: string | undefined
            filter?: string | undefined
            pageSize?: 'BASIC' | 'FULL' | undefined
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
        output: ListOrgMembershipsResponse
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
        } & { json: Membership }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/memberships:checkTransitiveMembership': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: CheckTransitiveMembershipResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/memberships:getMembershipGraph': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/memberships:lookup': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            'memberKey.id'?: string | undefined
            'memberKey.namespace'?: string | undefined
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
        output: LookupMembershipNameResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/memberships:searchDirectGroups': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: SearchDirectGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/memberships:searchTransitiveGroups': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: SearchTransitiveGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/memberships:searchTransitiveMemberships': {
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
        output: SearchTransitiveMembershipsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/userinvitations': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListUserInvitationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent:lookup': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            androidId?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            rawResourceId?: string | undefined
            userId?: string | undefined
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
        output: LookupSelfDeviceUsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
