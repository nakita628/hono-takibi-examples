type Application = {
  deletionTimestamp?: (string | null) | undefined
  objectId?: string | undefined
  objectType: string
}
type ApplicationListResult = {
  'odata.nextLink'?: string | undefined
  value?: Application[] | undefined
}
type ErrorMessage = { value?: string | undefined }
type OdataError = { code?: string | undefined; message?: ErrorMessage | undefined }
type GraphError = { 'odata.error'?: OdataError | undefined }
type AppRole = {
  allowedMemberTypes?: string[] | undefined
  description?: string | undefined
  displayName?: string | undefined
  id?: string | undefined
  isEnabled?: boolean | undefined
  value?: string | undefined
}
type GroupMembershipClaims = 'None' | 'SecurityGroup' | 'All'
type InformationalUrl = {
  marketing?: string | undefined
  privacy?: string | undefined
  support?: string | undefined
  termsOfService?: string | undefined
}
type KeyCredential = {
  customKeyIdentifier?: string | undefined
  endDate?: string | undefined
  keyId?: string | undefined
  startDate?: string | undefined
  type?: string | undefined
  usage?: string | undefined
  value?: string | undefined
}
type OAuth2Permission = {
  adminConsentDescription?: string | undefined
  adminConsentDisplayName?: string | undefined
  id?: string | undefined
  isEnabled?: boolean | undefined
  type?: string | undefined
  userConsentDescription?: string | undefined
  userConsentDisplayName?: string | undefined
  value?: string | undefined
}
type OptionalClaim = {
  additionalProperties?: { [x: string]: unknown } | undefined
  essential?: boolean | undefined
  name?: string | undefined
  source?: string | undefined
}
type OptionalClaims = {
  accessToken?: OptionalClaim[] | undefined
  idToken?: OptionalClaim[] | undefined
  samlToken?: OptionalClaim[] | undefined
}
type PasswordCredential = {
  customKeyIdentifier?: string | undefined
  endDate?: string | undefined
  keyId?: string | undefined
  startDate?: string | undefined
  value?: string | undefined
}
type PreAuthorizedApplicationExtension = { conditions?: string[] | undefined }
type PreAuthorizedApplicationPermission = {
  accessGrants?: string[] | undefined
  directAccessGrant?: boolean | undefined
}
type PreAuthorizedApplication = {
  appId?: string | undefined
  extensions?: PreAuthorizedApplicationExtension[] | undefined
  permissions?: PreAuthorizedApplicationPermission[] | undefined
}
type ResourceAccess = { id: string; type?: string | undefined }
type RequiredResourceAccess = {
  resourceAccess: ResourceAccess[]
  resourceAppId?: string | undefined
}
type ApplicationCreateParameters = {
  allowGuestsSignIn?: boolean | undefined
  allowPassthroughUsers?: boolean | undefined
  appLogoUrl?: string | undefined
  appPermissions?: string[] | undefined
  appRoles?: AppRole[] | undefined
  availableToOtherTenants?: boolean | undefined
  errorUrl?: string | undefined
  groupMembershipClaims?: GroupMembershipClaims | undefined
  homepage?: string | undefined
  informationalUrls?: InformationalUrl | undefined
  isDeviceOnlyAuthSupported?: boolean | undefined
  keyCredentials?: KeyCredential[] | undefined
  knownClientApplications?: string[] | undefined
  logoutUrl?: string | undefined
  oauth2AllowImplicitFlow?: boolean | undefined
  oauth2AllowUrlPathMatching?: boolean | undefined
  oauth2Permissions?: OAuth2Permission[] | undefined
  oauth2RequirePostResponse?: boolean | undefined
  optionalClaims?: OptionalClaims | undefined
  orgRestrictions?: string[] | undefined
  passwordCredentials?: PasswordCredential[] | undefined
  preAuthorizedApplications?: PreAuthorizedApplication[] | undefined
  publicClient?: boolean | undefined
  publisherDomain?: string | undefined
  replyUrls?: string[] | undefined
  requiredResourceAccess?: RequiredResourceAccess[] | undefined
  samlMetadataUrl?: string | undefined
  signInAudience?: string | undefined
  wwwHomepage?: string | undefined
}
type ApplicationUpdateParameters = {
  allowGuestsSignIn?: boolean | undefined
  allowPassthroughUsers?: boolean | undefined
  appLogoUrl?: string | undefined
  appPermissions?: string[] | undefined
  appRoles?: AppRole[] | undefined
  availableToOtherTenants?: boolean | undefined
  errorUrl?: string | undefined
  groupMembershipClaims?: GroupMembershipClaims | undefined
  homepage?: string | undefined
  informationalUrls?: InformationalUrl | undefined
  isDeviceOnlyAuthSupported?: boolean | undefined
  keyCredentials?: KeyCredential[] | undefined
  knownClientApplications?: string[] | undefined
  logoutUrl?: string | undefined
  oauth2AllowImplicitFlow?: boolean | undefined
  oauth2AllowUrlPathMatching?: boolean | undefined
  oauth2Permissions?: OAuth2Permission[] | undefined
  oauth2RequirePostResponse?: boolean | undefined
  optionalClaims?: OptionalClaims | undefined
  orgRestrictions?: string[] | undefined
  passwordCredentials?: PasswordCredential[] | undefined
  preAuthorizedApplications?: PreAuthorizedApplication[] | undefined
  publicClient?: boolean | undefined
  publisherDomain?: string | undefined
  replyUrls?: string[] | undefined
  requiredResourceAccess?: RequiredResourceAccess[] | undefined
  samlMetadataUrl?: string | undefined
  signInAudience?: string | undefined
  wwwHomepage?: string | undefined
}
type AddOwnerParameters = { url: string }
type KeyCredentialListResult = { value?: KeyCredential[] | undefined }
type KeyCredentialsUpdateParameters = { value: KeyCredential[] }
type DirectoryObject = {
  deletionTimestamp?: (string | null) | undefined
  objectId?: string | undefined
  objectType: string
}
type DirectoryObjectListResult = {
  'odata.nextLink'?: string | undefined
  value?: DirectoryObject[] | undefined
}
type PasswordCredentialListResult = { value?: PasswordCredential[] | undefined }
type PasswordCredentialsUpdateParameters = { value: PasswordCredential[] }
type Domain = {
  authenticationType?: string | undefined
  isDefault?: boolean | undefined
  isVerified?: boolean | undefined
  name: string
}
type DomainListResult = { value?: Domain[] | undefined }
type GetObjectsParameters = {
  includeDirectoryObjectReferences?: boolean | undefined
  objectIds?: string[] | undefined
  types?: string[] | undefined
}
type ADGroup = {
  deletionTimestamp?: (string | null) | undefined
  objectId?: string | undefined
  objectType: string
}
type GroupListResult = { 'odata.nextLink'?: string | undefined; value?: ADGroup[] | undefined }
type GroupCreateParameters = {
  displayName: string
  mailEnabled: false
  mailNickname: string
  securityEnabled: true
}
type GroupAddMemberParameters = { url: string }
type GroupGetMemberGroupsParameters = { securityEnabledOnly: boolean }
type GroupGetMemberGroupsResult = { value?: string[] | undefined }
type CheckGroupMembershipParameters = { groupId: string; memberId: string }
type CheckGroupMembershipResult = { value?: boolean | undefined }
type User = {
  deletionTimestamp?: (string | null) | undefined
  objectId?: string | undefined
  objectType: string
}
type OAuth2PermissionGrant = {
  clientId?: string | undefined
  consentType?: 'AllPrincipals' | 'Principal' | undefined
  expiryTime?: string | undefined
  objectId?: string | undefined
  'odata.type'?: string | undefined
  principalId?: string | undefined
  resourceId?: string | undefined
  scope?: string | undefined
  startTime?: string | undefined
}
type OAuth2PermissionGrantListResult = {
  'odata.nextLink'?: string | undefined
  value?: OAuth2PermissionGrant[] | undefined
}
type ServicePrincipal = {
  deletionTimestamp?: (string | null) | undefined
  objectId?: string | undefined
  objectType: string
}
type ServicePrincipalListResult = {
  'odata.nextLink'?: string | undefined
  value?: ServicePrincipal[] | undefined
}
type ServicePrincipalCreateParameters = {
  accountEnabled?: boolean | undefined
  appRoleAssignmentRequired?: boolean | undefined
  keyCredentials?: KeyCredential[] | undefined
  passwordCredentials?: PasswordCredential[] | undefined
  servicePrincipalType?: string | undefined
  tags?: string[] | undefined
}
type ServicePrincipalUpdateParameters = {
  accountEnabled?: boolean | undefined
  appRoleAssignmentRequired?: boolean | undefined
  keyCredentials?: KeyCredential[] | undefined
  passwordCredentials?: PasswordCredential[] | undefined
  servicePrincipalType?: string | undefined
  tags?: string[] | undefined
}
type AppRoleAssignment = {
  deletionTimestamp?: (string | null) | undefined
  objectId?: string | undefined
  objectType: string
}
type AppRoleAssignmentListResult = {
  'odata.nextLink'?: string | undefined
  value?: AppRoleAssignment[] | undefined
}
type ServicePrincipalObjectResult = {
  'odata.metadata'?: string | undefined
  value?: string | undefined
}
type UserListResult = { 'odata.nextLink'?: string | undefined; value?: User[] | undefined }
type UserCreateParameters = {
  givenName?: string | undefined
  immutableId?: string | undefined
  surname?: string | undefined
  usageLocation?: string | undefined
  userType?: 'Member' | 'Guest' | undefined
}
type UserGetMemberGroupsParameters = { securityEnabledOnly: boolean }
type UserGetMemberGroupsResult = { value?: string[] | undefined }
type UserUpdateParameters = {
  givenName?: string | undefined
  immutableId?: string | undefined
  surname?: string | undefined
  usageLocation?: string | undefined
  userType?: 'Member' | 'Guest' | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:tenantID/applications': {
      $get:
        | {
            input: { param: { tenantID: string } } & {
              query: { $filter?: string | undefined; 'api-version': string }
            }
            output: ApplicationListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & {
              query: { $filter?: string | undefined; 'api-version': string }
            }
            output: ApplicationListResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & {
              query: { $filter?: string | undefined; 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & {
              query: { $filter?: string | undefined; 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: ApplicationCreateParameters
            }
            output: Application
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: ApplicationCreateParameters
            }
            output: Application
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: ApplicationCreateParameters
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: ApplicationCreateParameters
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/applications/:applicationObjectId': {
      $delete:
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: Application
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: Application
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: ApplicationUpdateParameters }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: ApplicationUpdateParameters }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: ApplicationUpdateParameters }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/applications/:applicationObjectId/$links/owners': {
      $post:
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: AddOwnerParameters }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: AddOwnerParameters }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: AddOwnerParameters }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/applications/:applicationObjectId/$links/owners/:ownerObjectId': {
      $delete:
        | {
            input: {
              param: { applicationObjectId: string; ownerObjectId: string; tenantID: string }
            } & { query: { 'api-version': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { applicationObjectId: string; ownerObjectId: string; tenantID: string }
            } & { query: { 'api-version': string } }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { applicationObjectId: string; ownerObjectId: string; tenantID: string }
            } & { query: { 'api-version': string } }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/applications/:applicationObjectId/keyCredentials': {
      $get:
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: KeyCredentialListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: KeyCredentialListResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: KeyCredentialsUpdateParameters }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: KeyCredentialsUpdateParameters }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: KeyCredentialsUpdateParameters }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/applications/:applicationObjectId/owners': {
      $get:
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: DirectoryObjectListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: DirectoryObjectListResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/applications/:applicationObjectId/passwordCredentials': {
      $get:
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: PasswordCredentialListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: PasswordCredentialListResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: PasswordCredentialsUpdateParameters }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: PasswordCredentialsUpdateParameters }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: PasswordCredentialsUpdateParameters }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/deletedApplications': {
      $get:
        | {
            input: { param: { tenantID: string } } & {
              query: { $filter?: string | undefined; 'api-version': string }
            }
            output: ApplicationListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & {
              query: { $filter?: string | undefined; 'api-version': string }
            }
            output: ApplicationListResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & {
              query: { $filter?: string | undefined; 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & {
              query: { $filter?: string | undefined; 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/deletedApplications/:applicationObjectId': {
      $delete:
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/deletedApplications/:objectId/restore': {
      $post:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: Application
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: Application
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/domains': {
      $get:
        | {
            input: { param: { tenantID: string } } & {
              query: { $filter?: string | undefined; 'api-version': string }
            }
            output: DomainListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & {
              query: { $filter?: string | undefined; 'api-version': string }
            }
            output: DomainListResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/domains/:domainName': {
      $get:
        | {
            input: { param: { domainName: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: Domain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainName: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: Domain
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/getObjectsByObjectIds': {
      $post:
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: GetObjectsParameters
            }
            output: DirectoryObjectListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: GetObjectsParameters
            }
            output: DirectoryObjectListResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/groups': {
      $get:
        | {
            input: { param: { tenantID: string } } & {
              query: { $filter?: string | undefined; 'api-version': string }
            }
            output: GroupListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & {
              query: { $filter?: string | undefined; 'api-version': string }
            }
            output: GroupListResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & {
              query: { $filter?: string | undefined; 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & {
              query: { $filter?: string | undefined; 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: GroupCreateParameters
            }
            output: ADGroup
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: GroupCreateParameters
            }
            output: ADGroup
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: GroupCreateParameters
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: GroupCreateParameters
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/groups/:groupObjectId/$links/members': {
      $post:
        | {
            input: { param: { groupObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: GroupAddMemberParameters }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: GroupAddMemberParameters }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: GroupAddMemberParameters }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/groups/:groupObjectId/$links/members/:memberObjectId': {
      $delete:
        | {
            input: {
              param: { groupObjectId: string; memberObjectId: string; tenantID: string }
            } & { query: { 'api-version': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { groupObjectId: string; memberObjectId: string; tenantID: string }
            } & { query: { 'api-version': string } }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { groupObjectId: string; memberObjectId: string; tenantID: string }
            } & { query: { 'api-version': string } }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/groups/:objectId': {
      $delete:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: ADGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: ADGroup
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/groups/:objectId/$links/owners': {
      $post:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: AddOwnerParameters }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: AddOwnerParameters }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: AddOwnerParameters }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/groups/:objectId/$links/owners/:ownerObjectId': {
      $delete:
        | {
            input: { param: { objectId: string; ownerObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { objectId: string; ownerObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; ownerObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/groups/:objectId/getMemberGroups': {
      $post:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: GroupGetMemberGroupsParameters }
            output: GroupGetMemberGroupsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: GroupGetMemberGroupsParameters }
            output: GroupGetMemberGroupsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: GroupGetMemberGroupsParameters }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: GroupGetMemberGroupsParameters }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/groups/:objectId/members': {
      $get:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: DirectoryObjectListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: DirectoryObjectListResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/groups/:objectId/owners': {
      $get:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: DirectoryObjectListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: DirectoryObjectListResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/isMemberOf': {
      $post:
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: CheckGroupMembershipParameters
            }
            output: CheckGroupMembershipResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: CheckGroupMembershipParameters
            }
            output: CheckGroupMembershipResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: CheckGroupMembershipParameters
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: CheckGroupMembershipParameters
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/me': {
      $get:
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } }
            output: User
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/me/ownedObjects': {
      $get:
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } }
            output: DirectoryObjectListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } }
            output: DirectoryObjectListResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/oauth2PermissionGrants': {
      $get: {
        input: { param: { tenantID: string } } & {
          query: { $filter?: string | undefined; 'api-version': string }
        }
        output: OAuth2PermissionGrantListResult
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
          json: OAuth2PermissionGrant
        }
        output: OAuth2PermissionGrant
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/:tenantID/oauth2PermissionGrants/:objectId': {
      $delete:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/servicePrincipals': {
      $get:
        | {
            input: { param: { tenantID: string } } & {
              query: { $filter?: string | undefined; 'api-version': string }
            }
            output: ServicePrincipalListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & {
              query: { $filter?: string | undefined; 'api-version': string }
            }
            output: ServicePrincipalListResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & {
              query: { $filter?: string | undefined; 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & {
              query: { $filter?: string | undefined; 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: ServicePrincipalCreateParameters
            }
            output: ServicePrincipal
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: ServicePrincipalCreateParameters
            }
            output: ServicePrincipal
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: ServicePrincipalCreateParameters
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: ServicePrincipalCreateParameters
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/servicePrincipals/:objectId': {
      $delete:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: ServicePrincipal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: ServicePrincipal
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: ServicePrincipalUpdateParameters }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: ServicePrincipalUpdateParameters }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: ServicePrincipalUpdateParameters }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/servicePrincipals/:objectId/$links/owners': {
      $post:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: AddOwnerParameters }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: AddOwnerParameters }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: AddOwnerParameters }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/servicePrincipals/:objectId/$links/owners/:ownerObjectId': {
      $delete:
        | {
            input: { param: { objectId: string; ownerObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { objectId: string; ownerObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; ownerObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/servicePrincipals/:objectId/appRoleAssignedTo': {
      $get:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: AppRoleAssignmentListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: AppRoleAssignmentListResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/servicePrincipals/:objectId/appRoleAssignments': {
      $get:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: AppRoleAssignmentListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: AppRoleAssignmentListResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/servicePrincipals/:objectId/keyCredentials': {
      $get:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: KeyCredentialListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: KeyCredentialListResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: KeyCredentialsUpdateParameters }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: KeyCredentialsUpdateParameters }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: KeyCredentialsUpdateParameters }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/servicePrincipals/:objectId/owners': {
      $get:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: DirectoryObjectListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: DirectoryObjectListResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/servicePrincipals/:objectId/passwordCredentials': {
      $get:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: PasswordCredentialListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: PasswordCredentialListResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: PasswordCredentialsUpdateParameters }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: PasswordCredentialsUpdateParameters }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: PasswordCredentialsUpdateParameters }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/servicePrincipalsByAppId/:applicationID/objectId': {
      $get:
        | {
            input: { param: { tenantID: string; applicationID: string } } & {
              query: { 'api-version': string }
            }
            output: ServicePrincipalObjectResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string; applicationID: string } } & {
              query: { 'api-version': string }
            }
            output: ServicePrincipalObjectResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantID: string; applicationID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string; applicationID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/users': {
      $get:
        | {
            input: { param: { tenantID: string } } & {
              query: {
                $filter?: string | undefined
                $expand?: string | undefined
                $top?: number | undefined
                'api-version': string
              }
            }
            output: UserListResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & {
              query: {
                $filter?: string | undefined
                $expand?: string | undefined
                $top?: number | undefined
                'api-version': string
              }
            }
            output: UserListResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & {
              query: {
                $filter?: string | undefined
                $expand?: string | undefined
                $top?: number | undefined
                'api-version': string
              }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & {
              query: {
                $filter?: string | undefined
                $expand?: string | undefined
                $top?: number | undefined
                'api-version': string
              }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: UserCreateParameters
            }
            output: User
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: UserCreateParameters
            }
            output: User
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: UserCreateParameters
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantID: string } } & { query: { 'api-version': string } } & {
              json: UserCreateParameters
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/users/:objectId/getMemberGroups': {
      $post:
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: UserGetMemberGroupsParameters }
            output: UserGetMemberGroupsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: UserGetMemberGroupsParameters }
            output: UserGetMemberGroupsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: UserGetMemberGroupsParameters }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: UserGetMemberGroupsParameters }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/:tenantID/users/:upnOrObjectId': {
      $delete:
        | {
            input: { param: { upnOrObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { upnOrObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upnOrObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { upnOrObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upnOrObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: User
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { upnOrObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upnOrObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { upnOrObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: UserUpdateParameters }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { upnOrObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: UserUpdateParameters }
            output: GraphError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upnOrObjectId: string; tenantID: string } } & {
              query: { 'api-version': string }
            } & { json: UserUpdateParameters }
            output: GraphError
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
