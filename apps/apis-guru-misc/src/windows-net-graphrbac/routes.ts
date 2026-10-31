import { createRoute, z } from '@hono/zod-openapi'

const DirectoryObjectSchema = z
  .object({
    deletionTimestamp: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The time at which the directory object was deleted.',
        readOnly: true,
      }),
    objectId: z.string().exactOptional().openapi({ description: 'The object ID.', readOnly: true }),
    objectType: z.string().openapi({ description: 'The object type.' }),
  })
  .catchall(z.object({}))
  .openapi({
    description: 'Represents an Azure Active Directory object.',
    discriminator: { propertyName: 'objectType' },
    required: ['objectType'],
  })
  .openapi('DirectoryObject')

type ApplicationType = z.infer<typeof DirectoryObjectSchema>

const ADGroupSchema = DirectoryObjectSchema.and(
  z
    .object({
      displayName: z
        .string()
        .exactOptional()
        .openapi({ description: 'The display name of the group.' }),
      mail: z
        .string()
        .exactOptional()
        .openapi({ description: 'The primary email address of the group.' }),
      mailEnabled: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Whether the group is mail-enabled. Must be false. This is because only pure security groups can be created using the Graph API.',
        }),
      mailNickname: z
        .string()
        .exactOptional()
        .openapi({ description: 'The mail alias for the group. ' }),
      securityEnabled: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'Whether the group is security-enable.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'Active Directory group information.',
    'x-ms-discriminator-value': 'Group',
  })
  .openapi('ADGroup')

const AddOwnerParametersSchema = z
  .object({
    url: z
      .string()
      .openapi({
        description:
          'A owner object URL, such as "https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd", where "0b1f9851-1bf0-433f-aec3-cb9272f093dc" is the tenantId and "f260bbc4-c254-447b-94cf-293b5ec434dd" is the objectId of the owner (user, application, servicePrincipal, group) to be added.',
      }),
  })
  .catchall(z.object({}))
  .openapi({
    description: 'Request parameters for adding a owner to an application.',
    required: ['url'],
  })
  .openapi('AddOwnerParameters')

const AppRoleSchema = z
  .object({
    allowedMemberTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Specifies whether this app role definition can be assigned to users and groups by setting to 'User', or to other applications (that are accessing this application in daemon service scenarios) by setting to 'Application', or to both. ",
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Permission help text that appears in the admin app assignment and consent experiences.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Display name for the permission that appears in the admin consent and app assignment experiences.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique role identifier inside the appRoles collection.' }),
    isEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When creating or updating a role definition, this must be set to true (which is the default). To delete a role, this must first be set to false. At that point, in a subsequent call, this role may be removed.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the value of the roles claim that the application should expect in the authentication and access tokens.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AppRole')

const AppRoleAssignmentSchema = DirectoryObjectSchema.and(
  z
    .object({
      id: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The role id that was assigned to the principal. This role must be declared by the target resource application resourceId in its appRoles property.',
        }),
      principalDisplayName: z
        .string()
        .exactOptional()
        .openapi({ description: 'The display name of the principal that was granted the access.' }),
      principalId: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The unique identifier (objectId) for the principal being granted the access.',
        }),
      principalType: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The type of principal. This can either be "User", "Group" or "ServicePrincipal".',
        }),
      resourceDisplayName: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The display name of the resource to which the assignment was made.',
        }),
      resourceId: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The unique identifier (objectId) for the target resource (service principal) for which the assignment was made.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'AppRoleAssignment information.',
    'x-ms-discriminator-value': 'AppRoleAssignment',
  })
  .openapi('AppRoleAssignment')

const AppRoleAssignmentListResultSchema = z
  .object({
    'odata.nextLink': z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL to get the next set of results.' }),
    value: z
      .array(AppRoleAssignmentSchema)
      .exactOptional()
      .openapi({ description: 'A collection of AppRoleAssignment.' }),
  })
  .openapi({ description: 'AppRoleAssignment list operation result.', required: [] })
  .openapi('AppRoleAssignmentListResult')

const ApplicationSchema: z.ZodType<ApplicationType> = z
  .lazy(() =>
    DirectoryObjectSchema.and(
      z
        .object({
          allowGuestsSignIn: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'A property on the application to indicate if the application accepts other IDPs or not or partially accepts.',
            }),
          allowPassthroughUsers: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'Indicates that the application supports pass through users who have no presence in the resource tenant.',
            }),
          appId: z.string().exactOptional().openapi({ description: 'The application ID.' }),
          appLogoUrl: z
            .string()
            .exactOptional()
            .openapi({ description: 'The url for the application logo image stored in a CDN.' }),
          appPermissions: z
            .array(z.string())
            .exactOptional()
            .openapi({ description: 'The application permissions.' }),
          appRoles: z
            .array(AppRoleSchema)
            .exactOptional()
            .openapi({
              description:
                'The collection of application roles that an application may declare. These roles can be assigned to users, groups or service principals.',
            }),
          availableToOtherTenants: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'Whether the application is available to other tenants.' }),
          displayName: z
            .string()
            .exactOptional()
            .openapi({ description: 'The display name of the application.' }),
          errorUrl: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A URL provided by the author of the application to report errors when using the application.',
            }),
          groupMembershipClaims: GroupMembershipClaimsSchema.exactOptional(),
          homepage: z
            .string()
            .exactOptional()
            .openapi({ description: 'The home page of the application.' }),
          identifierUris: z
            .array(z.string())
            .exactOptional()
            .openapi({ description: 'A collection of URIs for the application.' }),
          informationalUrls: InformationalUrlSchema.exactOptional(),
          isDeviceOnlyAuthSupported: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'Specifies whether this application supports device authentication without a user. The default is false.',
            }),
          keyCredentials: z
            .array(KeyCredentialSchema)
            .exactOptional()
            .openapi({ description: 'A collection of KeyCredential objects.' }),
          knownClientApplications: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'Client applications that are tied to this resource application. Consent to any of the known client applications will result in implicit consent to the resource application through a combined consent dialog (showing the OAuth permission scopes required by the client and the resource).',
            }),
          logoutUrl: z
            .string()
            .exactOptional()
            .openapi({ description: 'the url of the logout page' }),
          oauth2AllowImplicitFlow: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'Whether to allow implicit grant flow for OAuth2' }),
          oauth2AllowUrlPathMatching: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'Specifies whether during a token Request Azure AD will allow path matching of the redirect URI against the applications collection of replyURLs. The default is false.',
            }),
          oauth2Permissions: z
            .array(OAuth2PermissionSchema)
            .exactOptional()
            .openapi({
              description:
                'The collection of OAuth 2.0 permission scopes that the web API (resource) application exposes to client applications. These permission scopes may be granted to client applications during consent.',
            }),
          oauth2RequirePostResponse: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'Specifies whether, as part of OAuth 2.0 token requests, Azure AD will allow POST requests, as opposed to GET requests. The default is false, which specifies that only GET requests will be allowed.',
            }),
          optionalClaims: OptionalClaimsSchema.exactOptional(),
          orgRestrictions: z
            .array(z.string())
            .exactOptional()
            .openapi({ description: 'A list of tenants allowed to access application.' }),
          passwordCredentials: z
            .array(PasswordCredentialSchema)
            .exactOptional()
            .openapi({ description: 'A collection of PasswordCredential objects' }),
          preAuthorizedApplications: z
            .array(PreAuthorizedApplicationSchema)
            .exactOptional()
            .openapi({ description: 'list of pre-authorized applications.' }),
          publicClient: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'Specifies whether this application is a public client (such as an installed application running on a mobile device). Default is false.',
            }),
          publisherDomain: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Reliable domain which can be used to identify an application.',
            }),
          replyUrls: z
            .array(z.string())
            .exactOptional()
            .openapi({ description: 'A collection of reply URLs for the application.' }),
          requiredResourceAccess: z
            .array(RequiredResourceAccessSchema)
            .exactOptional()
            .openapi({
              description:
                'Specifies resources that this application requires access to and the set of OAuth permission scopes and application roles that it needs under each of those resources. This pre-configuration of required resource access drives the consent experience.',
            }),
          samlMetadataUrl: z
            .string()
            .exactOptional()
            .openapi({ description: 'The URL to the SAML metadata for the application.' }),
          signInAudience: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Audience for signing in to the application (AzureADMyOrganization, AzureADAllOrganizations, AzureADAndMicrosoftAccounts).',
            }),
          wwwHomepage: z.string().exactOptional().openapi({ description: 'The primary Web page.' }),
        })
        .openapi({ required: [] }),
    ).openapi({ description: 'Active Directory application information.' }),
  )
  .openapi('Application')

const GroupMembershipClaimsSchema = z
  .enum(['None', 'SecurityGroup', 'All'])
  .openapi({
    description:
      'Configures the groups claim issued in a user or OAuth 2.0 access token that the app expects.',
    'x-ms-enum': { modelAsString: true, name: 'GroupMembershipClaimTypes' },
  })
  .openapi('GroupMembershipClaims')

const InformationalUrlSchema = z
  .object({
    marketing: z.string().exactOptional().openapi({ description: 'The marketing URI' }),
    privacy: z.string().exactOptional().openapi({ description: 'The privacy policy URI' }),
    support: z.string().exactOptional().openapi({ description: 'The support URI' }),
    termsOfService: z.string().exactOptional().openapi({ description: 'The terms of service URI' }),
  })
  .openapi({
    description:
      'Represents a group of URIs that provide terms of service, marketing, support and privacy policy information about an application. The default value for each string is null.',
    required: [],
  })
  .openapi('InformationalUrl')

const KeyCredentialSchema = z
  .object({
    customKeyIdentifier: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom Key Identifier' }),
    endDate: z.iso.datetime({ offset: true }).exactOptional().openapi({ description: 'End date.' }),
    keyId: z.string().exactOptional().openapi({ description: 'Key ID.' }),
    startDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Start date.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: "Type. Acceptable values are 'AsymmetricX509Cert' and 'Symmetric'.",
      }),
    usage: z
      .string()
      .exactOptional()
      .openapi({ description: "Usage. Acceptable values are 'Verify' and 'Sign'." }),
    value: z.string().exactOptional().openapi({ description: 'Key value.' }),
  })
  .catchall(z.object({}))
  .openapi({ description: 'Active Directory Key Credential information.' })
  .openapi('KeyCredential')

const OAuth2PermissionSchema = z
  .object({
    adminConsentDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Permission help text that appears in the admin consent and app assignment experiences.',
      }),
    adminConsentDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Display name for the permission that appears in the admin consent and app assignment experiences.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique scope permission identifier inside the oauth2Permissions collection.',
      }),
    isEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When creating or updating a permission, this property must be set to true (which is the default). To delete a permission, this property must first be set to false. At that point, in a subsequent call, the permission may be removed. ',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether this scope permission can be consented to by an end user, or whether it is a tenant-wide permission that must be consented to by a Company Administrator. Possible values are "User" or "Admin".',
      }),
    userConsentDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Permission help text that appears in the end user consent experience.',
      }),
    userConsentDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Display name for the permission that appears in the end user consent experience.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of the scope claim that the resource application should expect in the OAuth 2.0 access token.',
      }),
  })
  .openapi({
    description:
      'Represents an OAuth 2.0 delegated permission scope. The specified OAuth 2.0 delegated permission scopes may be requested by client applications (through the requiredResourceAccess collection on the Application object) when calling a resource application. The oauth2Permissions property of the ServicePrincipal entity and of the Application entity is a collection of OAuth2Permission.',
    required: [],
  })
  .openapi('OAuth2Permission')

const OptionalClaimSchema = z
  .object({
    additionalProperties: z.object({}).exactOptional(),
    essential: z.boolean().exactOptional().openapi({ description: 'Is this a required claim.' }),
    name: z.string().exactOptional().openapi({ description: 'Claim name.' }),
    source: z.string().exactOptional().openapi({ description: 'Claim source.' }),
  })
  .openapi({ description: 'Specifying the claims to be included in a token.', required: [] })
  .openapi('OptionalClaim')

const OptionalClaimsSchema = z
  .object({
    accessToken: z
      .array(OptionalClaimSchema)
      .exactOptional()
      .openapi({ description: 'Optional claims requested to be included in the access token.' }),
    idToken: z
      .array(OptionalClaimSchema)
      .exactOptional()
      .openapi({ description: 'Optional claims requested to be included in the id token.' }),
    samlToken: z
      .array(OptionalClaimSchema)
      .exactOptional()
      .openapi({ description: 'Optional claims requested to be included in the saml token.' }),
  })
  .openapi({ description: 'Specifying the claims to be included in the token.', required: [] })
  .openapi('OptionalClaims')

const PasswordCredentialSchema = z
  .object({
    customKeyIdentifier: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom Key Identifier' }),
    endDate: z.iso.datetime({ offset: true }).exactOptional().openapi({ description: 'End date.' }),
    keyId: z.string().exactOptional().openapi({ description: 'Key ID.' }),
    startDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Start date.' }),
    value: z.string().exactOptional().openapi({ description: 'Key value.' }),
  })
  .catchall(z.object({}))
  .openapi({ description: 'Active Directory Password Credential information.' })
  .openapi('PasswordCredential')

const PreAuthorizedApplicationExtensionSchema = z
  .object({
    conditions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: "The extension's conditions." }),
  })
  .openapi({
    description:
      'Representation of an app PreAuthorizedApplicationExtension required by a pre authorized client app.',
    required: [],
  })
  .openapi('PreAuthorizedApplicationExtension')

const PreAuthorizedApplicationPermissionSchema = z
  .object({
    accessGrants: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of permissions.' }),
    directAccessGrant: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the permission set is DirectAccess or impersonation.',
      }),
  })
  .openapi({
    description: 'Contains information about the pre-authorized permissions.',
    required: [],
  })
  .openapi('PreAuthorizedApplicationPermission')

const PreAuthorizedApplicationSchema = z
  .object({
    appId: z.string().exactOptional().openapi({ description: 'Represents the application id.' }),
    extensions: z
      .array(PreAuthorizedApplicationExtensionSchema)
      .exactOptional()
      .openapi({ description: 'Collection of extensions from the resource application.' }),
    permissions: z
      .array(PreAuthorizedApplicationPermissionSchema)
      .exactOptional()
      .openapi({
        description:
          'Collection of required app permissions/entitlements from the resource application.',
      }),
  })
  .openapi({
    description: 'Contains information about pre authorized client application.',
    required: [],
  })
  .openapi('PreAuthorizedApplication')

const ResourceAccessSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'The unique identifier for one of the OAuth2Permission or AppRole instances that the resource application exposes.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether the id property references an OAuth2Permission or an AppRole. Possible values are "scope" or "role".',
      }),
  })
  .catchall(z.object({}))
  .openapi({
    description:
      'Specifies an OAuth 2.0 permission scope or an app role that an application requires. The resourceAccess property of the RequiredResourceAccess type is a collection of ResourceAccess.',
    required: ['id'],
  })
  .openapi('ResourceAccess')

const RequiredResourceAccessSchema = z
  .object({
    resourceAccess: z
      .array(ResourceAccessSchema)
      .openapi({
        description:
          'The list of OAuth2.0 permission scopes and app roles that the application requires from the specified resource.',
      }),
    resourceAppId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application.',
      }),
  })
  .catchall(z.object({}))
  .openapi({
    description:
      'Specifies the set of OAuth 2.0 permission scopes and app roles under the specified resource that an application requires access to. The specified OAuth 2.0 permission scopes may be requested by client applications (through the requiredResourceAccess collection) when calling a resource application. The requiredResourceAccess property of the Application entity is a collection of RequiredResourceAccess.',
    required: ['resourceAccess'],
  })
  .openapi('RequiredResourceAccess')

const ApplicationBaseSchema = z
  .object({
    allowGuestsSignIn: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A property on the application to indicate if the application accepts other IDPs or not or partially accepts.',
      }),
    allowPassthroughUsers: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates that the application supports pass through users who have no presence in the resource tenant.',
      }),
    appLogoUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url for the application logo image stored in a CDN.' }),
    appPermissions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The application permissions.' }),
    appRoles: z
      .array(AppRoleSchema)
      .exactOptional()
      .openapi({
        description:
          'The collection of application roles that an application may declare. These roles can be assigned to users, groups or service principals.',
      }),
    availableToOtherTenants: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the application is available to other tenants.' }),
    errorUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL provided by the author of the application to report errors when using the application.',
      }),
    groupMembershipClaims: GroupMembershipClaimsSchema.exactOptional(),
    homepage: z
      .string()
      .exactOptional()
      .openapi({ description: 'The home page of the application.' }),
    informationalUrls: InformationalUrlSchema.exactOptional(),
    isDeviceOnlyAuthSupported: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether this application supports device authentication without a user. The default is false.',
      }),
    keyCredentials: z
      .array(KeyCredentialSchema)
      .exactOptional()
      .openapi({ description: 'A collection of KeyCredential objects.' }),
    knownClientApplications: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Client applications that are tied to this resource application. Consent to any of the known client applications will result in implicit consent to the resource application through a combined consent dialog (showing the OAuth permission scopes required by the client and the resource).',
      }),
    logoutUrl: z.string().exactOptional().openapi({ description: 'the url of the logout page' }),
    oauth2AllowImplicitFlow: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to allow implicit grant flow for OAuth2' }),
    oauth2AllowUrlPathMatching: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether during a token Request Azure AD will allow path matching of the redirect URI against the applications collection of replyURLs. The default is false.',
      }),
    oauth2Permissions: z
      .array(OAuth2PermissionSchema)
      .exactOptional()
      .openapi({
        description:
          'The collection of OAuth 2.0 permission scopes that the web API (resource) application exposes to client applications. These permission scopes may be granted to client applications during consent.',
      }),
    oauth2RequirePostResponse: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether, as part of OAuth 2.0 token requests, Azure AD will allow POST requests, as opposed to GET requests. The default is false, which specifies that only GET requests will be allowed.',
      }),
    optionalClaims: OptionalClaimsSchema.exactOptional(),
    orgRestrictions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of tenants allowed to access application.' }),
    passwordCredentials: z
      .array(PasswordCredentialSchema)
      .exactOptional()
      .openapi({ description: 'A collection of PasswordCredential objects' }),
    preAuthorizedApplications: z
      .array(PreAuthorizedApplicationSchema)
      .exactOptional()
      .openapi({ description: 'list of pre-authorized applications.' }),
    publicClient: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether this application is a public client (such as an installed application running on a mobile device). Default is false.',
      }),
    publisherDomain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reliable domain which can be used to identify an application.' }),
    replyUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A collection of reply URLs for the application.' }),
    requiredResourceAccess: z
      .array(RequiredResourceAccessSchema)
      .exactOptional()
      .openapi({
        description:
          'Specifies resources that this application requires access to and the set of OAuth permission scopes and application roles that it needs under each of those resources. This pre-configuration of required resource access drives the consent experience.',
      }),
    samlMetadataUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL to the SAML metadata for the application.' }),
    signInAudience: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Audience for signing in to the application (AzureADMyOrganization, AzureADAllOrganizations, AzureADAndMicrosoftAccounts).',
      }),
    wwwHomepage: z.string().exactOptional().openapi({ description: 'The primary Web page.' }),
  })
  .openapi({
    description: 'Active Directive Application common properties shared among GET, POST and PATCH',
    required: [],
  })
  .openapi('ApplicationBase')

const ApplicationCreateParametersSchema = ApplicationBaseSchema.and(
  z
    .object({
      displayName: z.string().openapi({ description: 'The display name of the application.' }),
      identifierUris: z
        .array(z.string())
        .exactOptional()
        .openapi({ description: 'A collection of URIs for the application.' }),
    })
    .openapi({ required: ['displayName'] }),
)
  .openapi({
    description: 'Request parameters for creating a new application.',
    required: ['displayName'],
  })
  .openapi('ApplicationCreateParameters')

const ApplicationListResultSchema = z
  .object({
    'odata.nextLink': z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL to get the next set of results.' }),
    value: z
      .array(ApplicationSchema)
      .exactOptional()
      .openapi({ description: 'A collection of applications.' }),
  })
  .openapi({ description: 'Application list operation result.', required: [] })
  .openapi('ApplicationListResult')

const ApplicationUpdateParametersSchema = ApplicationBaseSchema.and(
  z
    .object({
      displayName: z
        .string()
        .exactOptional()
        .openapi({ description: 'The display name of the application.' }),
      identifierUris: z
        .array(z.string())
        .exactOptional()
        .openapi({ description: 'A collection of URIs for the application.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Request parameters for updating a new application.' })
  .openapi('ApplicationUpdateParameters')

const CheckGroupMembershipParametersSchema = z
  .object({
    groupId: z.string().openapi({ description: 'The object ID of the group to check.' }),
    memberId: z
      .string()
      .openapi({
        description:
          'The object ID of the contact, group, user, or service principal to check for membership in the specified group.',
      }),
  })
  .catchall(z.object({}))
  .openapi({
    description: 'Request parameters for IsMemberOf API call.',
    required: ['groupId', 'memberId'],
  })
  .openapi('CheckGroupMembershipParameters')

const CheckGroupMembershipResultSchema = z
  .object({
    value: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the specified user, group, contact, or service principal has either direct or transitive membership in the specified group; otherwise, false.',
      }),
  })
  .catchall(z.object({}))
  .openapi({ description: 'Server response for IsMemberOf API call' })
  .openapi('CheckGroupMembershipResult')

const DirectoryObjectListResultSchema = z
  .object({
    'odata.nextLink': z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL to get the next set of results.' }),
    value: z
      .array(DirectoryObjectSchema)
      .exactOptional()
      .openapi({ description: 'A collection of DirectoryObject.' }),
  })
  .openapi({ description: 'DirectoryObject list operation result.', required: [] })
  .openapi('DirectoryObjectListResult')

const DomainSchema = z
  .object({
    authenticationType: z
      .string()
      .exactOptional()
      .openapi({ description: 'the type of the authentication into the domain.', readOnly: true }),
    isDefault: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'if this is the default domain in the tenant.', readOnly: true }),
    isVerified: z
      .boolean()
      .exactOptional()
      .openapi({ description: "if this domain's ownership is verified.", readOnly: true }),
    name: z.string().openapi({ description: 'the domain name.' }),
  })
  .catchall(z.object({}))
  .openapi({ description: 'Active Directory Domain information.', required: ['name'] })
  .openapi('Domain')

const DomainListResultSchema = z
  .object({
    value: z.array(DomainSchema).exactOptional().openapi({ description: 'the list of domains.' }),
  })
  .openapi({ description: 'Server response for Get tenant domains API call.', required: [] })
  .openapi('DomainListResult')

const ErrorMessageSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message value.', 'x-ms-client-name': 'message' }),
  })
  .openapi({ description: 'Active Directory error message.', required: [] })
  .openapi('ErrorMessage')

const GetObjectsParametersSchema = z
  .object({
    includeDirectoryObjectReferences: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, also searches for object IDs in the partner tenant.' }),
    objectIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The requested object IDs.' }),
    types: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The requested object types.' }),
  })
  .catchall(z.object({}))
  .openapi({ description: 'Request parameters for the GetObjectsByObjectIds API.' })
  .openapi('GetObjectsParameters')

const OdataErrorSchema = z
  .object({
    code: z.string().exactOptional().openapi({ description: 'Error code.' }),
    message: ErrorMessageSchema.exactOptional(),
  })
  .openapi({ description: 'Active Directory OData error information.', required: [] })
  .openapi('OdataError')

const GraphErrorSchema = z
  .object({ 'odata.error': OdataErrorSchema.exactOptional() })
  .openapi({ description: 'Active Directory error information.', required: [] })
  .openapi('GraphError')

const GroupAddMemberParametersSchema = z
  .object({
    url: z
      .string()
      .openapi({
        description:
          'A member object URL, such as "https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd", where "0b1f9851-1bf0-433f-aec3-cb9272f093dc" is the tenantId and "f260bbc4-c254-447b-94cf-293b5ec434dd" is the objectId of the member (user, application, servicePrincipal, group) to be added.',
      }),
  })
  .catchall(z.object({}))
  .openapi({ description: 'Request parameters for adding a member to a group.', required: ['url'] })
  .openapi('GroupAddMemberParameters')

const GroupCreateParametersSchema = z
  .object({
    displayName: z.string().openapi({ description: 'Group display name' }),
    mailEnabled: z
      .literal(false)
      .openapi({
        description:
          'Whether the group is mail-enabled. Must be false. This is because only pure security groups can be created using the Graph API.',
      }),
    mailNickname: z.string().openapi({ description: 'Mail nickname' }),
    securityEnabled: z
      .literal(true)
      .openapi({
        description:
          'Whether the group is a security group. Must be true. This is because only pure security groups can be created using the Graph API.',
      }),
  })
  .catchall(z.object({}))
  .openapi({
    description: 'Request parameters for creating a new group.',
    required: ['displayName', 'mailEnabled', 'mailNickname', 'securityEnabled'],
  })
  .openapi('GroupCreateParameters')

const GroupGetMemberGroupsParametersSchema = z
  .object({
    securityEnabledOnly: z
      .boolean()
      .openapi({
        description:
          'If true, only membership in security-enabled groups should be checked. Otherwise, membership in all groups should be checked.',
      }),
  })
  .catchall(z.object({}))
  .openapi({
    description: 'Request parameters for GetMemberGroups API call.',
    required: ['securityEnabledOnly'],
  })
  .openapi('GroupGetMemberGroupsParameters')

const GroupGetMemberGroupsResultSchema = z
  .object({
    value: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A collection of group IDs of which the group is a member.' }),
  })
  .openapi({ description: 'Server response for GetMemberGroups API call.', required: [] })
  .openapi('GroupGetMemberGroupsResult')

const GroupListResultSchema = z
  .object({
    'odata.nextLink': z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL to get the next set of results.' }),
    value: z
      .array(ADGroupSchema)
      .exactOptional()
      .openapi({ description: 'A collection of Active Directory groups.' }),
  })
  .openapi({ description: 'Server response for Get tenant groups API call', required: [] })
  .openapi('GroupListResult')

const KeyCredentialListResultSchema = z
  .object({
    value: z
      .array(KeyCredentialSchema)
      .exactOptional()
      .openapi({ description: 'A collection of KeyCredentials.' }),
  })
  .openapi({ description: 'KeyCredential list operation result.', required: [] })
  .openapi('KeyCredentialListResult')

const KeyCredentialsUpdateParametersSchema = z
  .object({
    value: z.array(KeyCredentialSchema).openapi({ description: 'A collection of KeyCredentials.' }),
  })
  .openapi({
    description: 'Request parameters for a KeyCredentials update operation',
    required: ['value'],
  })
  .openapi('KeyCredentialsUpdateParameters')

const OAuth2PermissionGrantSchema = z
  .object({
    clientId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The id of the resource's service principal granted consent to impersonate the user when accessing the resource (represented by the resourceId property).",
      }),
    consentType: z
      .enum(['AllPrincipals', 'Principal'])
      .exactOptional()
      .openapi({
        description:
          'Indicates if consent was provided by the administrator (on behalf of the organization) or by an individual.',
        'x-ms-enum': { modelAsString: true, name: 'ConsentType' },
      }),
    expiryTime: z.string().exactOptional().openapi({ description: 'Expiry time for TTL' }),
    objectId: z.string().exactOptional().openapi({ description: 'The id of the permission grant' }),
    'odata.type': z
      .string()
      .exactOptional()
      .openapi({ description: 'Microsoft.DirectoryServices.OAuth2PermissionGrant' }),
    principalId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When consent type is Principal, this property specifies the id of the user that granted consent and applies only for that user.',
      }),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object Id of the resource you want to grant' }),
    scope: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the value of the scope claim that the resource application should expect in the OAuth 2.0 access token. For example, User.Read',
      }),
    startTime: z.string().exactOptional().openapi({ description: 'Start time for TTL' }),
  })
  .openapi({
    example: {
      clientId: 'clientId',
      consentType: 'consentType',
      expiryTime: 'expiryTime',
      'odata.type': 'odata.type',
      principalId: '',
      resourceId: 'resourceId',
      scope: 'scope',
      startTime: 'startTime',
    },
    required: [],
  })
  .openapi('OAuth2PermissionGrant')

const OAuth2PermissionGrantListResultSchema = z
  .object({
    'odata.nextLink': z
      .string()
      .exactOptional()
      .openapi({ description: 'the URL to get the next set of results.' }),
    value: z
      .array(OAuth2PermissionGrantSchema)
      .exactOptional()
      .openapi({ description: 'the list of oauth2 permissions grants' }),
  })
  .openapi({ description: 'Server response for get oauth2 permissions grants', required: [] })
  .openapi('OAuth2PermissionGrantListResult')

const PasswordCredentialListResultSchema = z
  .object({
    value: z
      .array(PasswordCredentialSchema)
      .exactOptional()
      .openapi({ description: 'A collection of PasswordCredentials.' }),
  })
  .openapi({ description: 'PasswordCredential list operation result.', required: [] })
  .openapi('PasswordCredentialListResult')

const PasswordCredentialsUpdateParametersSchema = z
  .object({
    value: z
      .array(PasswordCredentialSchema)
      .openapi({ description: 'A collection of PasswordCredentials.' }),
  })
  .openapi({
    description: 'Request parameters for a PasswordCredentials update operation.',
    required: ['value'],
  })
  .openapi('PasswordCredentialsUpdateParameters')

const PasswordProfileSchema = z
  .object({
    forceChangePasswordNextLogin: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to force a password change on next login.' }),
    password: z.string().openapi({ description: 'Password' }),
  })
  .catchall(z.object({}))
  .openapi({ description: 'The password profile associated with a user.', required: ['password'] })
  .openapi('PasswordProfile')

const ServicePrincipalSchema = DirectoryObjectSchema.and(
  z
    .object({
      accountEnabled: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'whether or not the service principal account is enabled' }),
      alternativeNames: z
        .array(z.string())
        .exactOptional()
        .openapi({ description: 'alternative names' }),
      appDisplayName: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The display name exposed by the associated application.',
          readOnly: true,
        }),
      appId: z.string().exactOptional().openapi({ description: 'The application ID.' }),
      appOwnerTenantId: z.string().exactOptional().openapi({ readOnly: true }),
      appRoleAssignmentRequired: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Specifies whether an AppRoleAssignment to a user or group is required before Azure AD will issue a user or access token to the application.',
        }),
      appRoles: z
        .array(AppRoleSchema)
        .exactOptional()
        .openapi({
          description:
            'The collection of application roles that an application may declare. These roles can be assigned to users, groups or service principals.',
        }),
      displayName: z
        .string()
        .exactOptional()
        .openapi({ description: 'The display name of the service principal.' }),
      errorUrl: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'A URL provided by the author of the associated application to report errors when using the application.',
        }),
      homepage: z
        .string()
        .exactOptional()
        .openapi({ description: 'The URL to the homepage of the associated application.' }),
      keyCredentials: z
        .array(KeyCredentialSchema)
        .exactOptional()
        .openapi({
          description: 'The collection of key credentials associated with the service principal.',
        }),
      logoutUrl: z
        .string()
        .exactOptional()
        .openapi({
          description: 'A URL provided by the author of the associated application to logout',
        }),
      oauth2Permissions: z
        .array(OAuth2PermissionSchema)
        .exactOptional()
        .openapi({
          description: 'The OAuth 2.0 permissions exposed by the associated application.',
          readOnly: true,
        }),
      passwordCredentials: z
        .array(PasswordCredentialSchema)
        .exactOptional()
        .openapi({
          description:
            'The collection of password credentials associated with the service principal.',
        }),
      preferredTokenSigningKeyThumbprint: z
        .string()
        .exactOptional()
        .openapi({ description: 'The thumbprint of preferred certificate to sign the token' }),
      publisherName: z
        .string()
        .exactOptional()
        .openapi({ description: "The publisher's name of the associated application" }),
      replyUrls: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description:
            'The URLs that user tokens are sent to for sign in with the associated application.  The redirect URIs that the oAuth 2.0 authorization code and access tokens are sent to for the associated application.',
        }),
      samlMetadataUrl: z
        .string()
        .exactOptional()
        .openapi({ description: 'The URL to the SAML metadata of the associated application' }),
      servicePrincipalNames: z
        .array(z.string())
        .exactOptional()
        .openapi({ description: 'A collection of service principal names.' }),
      servicePrincipalType: z
        .string()
        .exactOptional()
        .openapi({ description: 'the type of the service principal' }),
      tags: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description:
            'Optional list of tags that you can apply to your service principals. Not nullable.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Active Directory service principal information.' })
  .openapi('ServicePrincipal')

const ServicePrincipalBaseSchema = z
  .object({
    accountEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'whether or not the service principal account is enabled' }),
    appRoleAssignmentRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether an AppRoleAssignment to a user or group is required before Azure AD will issue a user or access token to the application.',
      }),
    keyCredentials: z
      .array(KeyCredentialSchema)
      .exactOptional()
      .openapi({
        description: 'The collection of key credentials associated with the service principal.',
      }),
    passwordCredentials: z
      .array(PasswordCredentialSchema)
      .exactOptional()
      .openapi({
        description:
          'The collection of password credentials associated with the service principal.',
      }),
    servicePrincipalType: z
      .string()
      .exactOptional()
      .openapi({ description: 'the type of the service principal' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional list of tags that you can apply to your service principals. Not nullable.',
      }),
  })
  .openapi({
    description:
      'Active Directory service principal common properties shared among GET, POST and PATCH',
    required: [],
  })
  .openapi('ServicePrincipalBase')

const ServicePrincipalCreateParametersSchema = ServicePrincipalBaseSchema.and(
  z
    .object({ appId: z.string().openapi({ description: 'The application ID.' }) })
    .openapi({ required: ['appId'] }),
)
  .openapi({
    description: 'Request parameters for creating a new service principal.',
    required: ['appId'],
  })
  .openapi('ServicePrincipalCreateParameters')

const ServicePrincipalListResultSchema = z
  .object({
    'odata.nextLink': z
      .string()
      .exactOptional()
      .openapi({ description: 'the URL to get the next set of results.' }),
    value: z
      .array(ServicePrincipalSchema)
      .exactOptional()
      .openapi({ description: 'the list of service principals.' }),
  })
  .openapi({
    description: 'Server response for get tenant service principals API call.',
    required: [],
  })
  .openapi('ServicePrincipalListResult')

const ServicePrincipalObjectResultSchema = z
  .object({
    'odata.metadata': z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL representing edm equivalent.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Object ID of the service principal with the specified application ID.',
      }),
  })
  .openapi({ description: 'Service Principal Object Result.', required: [] })
  .openapi('ServicePrincipalObjectResult')

const ServicePrincipalUpdateParametersSchema = ServicePrincipalBaseSchema.openapi({
  description: 'Request parameters for update an existing service principal.',
}).openapi('ServicePrincipalUpdateParameters')

const SignInNameSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A string value that can be used to classify user sign-in types in your directory, such as 'emailAddress' or 'userName'.",
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The sign-in used by the local account. Must be unique across the company/tenant. For example, 'johnc@example.com'.",
      }),
  })
  .catchall(z.object({}))
  .openapi({
    description:
      'Contains information about a sign-in name of a local account user in an Azure Active Directory B2C tenant.',
  })
  .openapi('SignInName')

const UserSchema = DirectoryObjectSchema.and(
  z
    .object({
      accountEnabled: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'Whether the account is enabled.' }),
      displayName: z
        .string()
        .exactOptional()
        .openapi({ description: 'The display name of the user.' }),
      givenName: z
        .string()
        .exactOptional()
        .openapi({ description: 'The given name for the user.' }),
      immutableId: z
        .string()
        .exactOptional()
        .openapi({
          description:
            "This must be specified if you are using a federated domain for the user's userPrincipalName (UPN) property when creating a new user account. It is used to associate an on-premises Active Directory user account with their Azure AD user object.",
        }),
      mail: z
        .string()
        .exactOptional()
        .openapi({ description: 'The primary email address of the user.' }),
      mailNickname: z
        .string()
        .exactOptional()
        .openapi({ description: 'The mail alias for the user.' }),
      signInNames: z
        .array(SignInNameSchema)
        .exactOptional()
        .openapi({ description: 'The sign-in names of the user.' }),
      surname: z
        .string()
        .exactOptional()
        .openapi({ description: "The user's surname (family name or last name)." }),
      usageLocation: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. Examples include: "US", "JP", and "GB".',
        }),
      userPrincipalName: z
        .string()
        .exactOptional()
        .openapi({ description: 'The principal name of the user.' }),
      userType: z
        .enum(['Member', 'Guest'])
        .exactOptional()
        .openapi({
          description:
            "A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'.",
          'x-ms-enum': { modelAsString: true, name: 'UserType' },
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Active Directory user information.' })
  .openapi('User')

const UserBaseSchema = z
  .object({
    givenName: z.string().exactOptional().openapi({ description: 'The given name for the user.' }),
    immutableId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This must be specified if you are using a federated domain for the user's userPrincipalName (UPN) property when creating a new user account. It is used to associate an on-premises Active Directory user account with their Azure AD user object.",
      }),
    surname: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's surname (family name or last name)." }),
    usageLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. Examples include: "US", "JP", and "GB".',
      }),
    userType: z
      .enum(['Member', 'Guest'])
      .exactOptional()
      .openapi({
        description:
          "A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'.",
        'x-ms-enum': { modelAsString: true, name: 'UserType' },
      }),
  })
  .catchall(z.object({}))
  .openapi('UserBase')

const UserCreateParametersSchema = UserBaseSchema.and(
  z
    .object({
      accountEnabled: z.boolean().openapi({ description: 'Whether the account is enabled.' }),
      displayName: z.string().openapi({ description: 'The display name of the user.' }),
      mail: z
        .string()
        .exactOptional()
        .openapi({ description: 'The primary email address of the user.' }),
      mailNickname: z.string().openapi({ description: 'The mail alias for the user.' }),
      passwordProfile: PasswordProfileSchema,
      userPrincipalName: z
        .string()
        .openapi({
          description:
            'The user principal name (someuser@contoso.com). It must contain one of the verified domains for the tenant.',
        }),
    })
    .openapi({
      required: [
        'accountEnabled',
        'displayName',
        'passwordProfile',
        'userPrincipalName',
        'mailNickname',
      ],
    }),
)
  .openapi({
    description: 'Request parameters for creating a new work or school account user.',
    required: [
      'accountEnabled',
      'displayName',
      'passwordProfile',
      'userPrincipalName',
      'mailNickname',
    ],
  })
  .openapi('UserCreateParameters')

const UserGetMemberGroupsParametersSchema = z
  .object({
    securityEnabledOnly: z
      .boolean()
      .openapi({
        description:
          'If true, only membership in security-enabled groups should be checked. Otherwise, membership in all groups should be checked.',
      }),
  })
  .catchall(z.object({}))
  .openapi({
    description: 'Request parameters for GetMemberGroups API call.',
    required: ['securityEnabledOnly'],
  })
  .openapi('UserGetMemberGroupsParameters')

const UserGetMemberGroupsResultSchema = z
  .object({
    value: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A collection of group IDs of which the user is a member.' }),
  })
  .openapi({ description: 'Server response for GetMemberGroups API call.', required: [] })
  .openapi('UserGetMemberGroupsResult')

const UserListResultSchema = z
  .object({
    'odata.nextLink': z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL to get the next set of results.' }),
    value: z.array(UserSchema).exactOptional().openapi({ description: 'the list of users.' }),
  })
  .openapi({ description: 'Server response for Get tenant users API call.', required: [] })
  .openapi('UserListResult')

const UserUpdateParametersSchema = UserBaseSchema.and(
  z
    .object({
      accountEnabled: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'Whether the account is enabled.' }),
      displayName: z
        .string()
        .exactOptional()
        .openapi({ description: 'The display name of the user.' }),
      mail: z
        .string()
        .exactOptional()
        .openapi({ description: 'The primary email address of the user.' }),
      mailNickname: z
        .string()
        .exactOptional()
        .openapi({ description: 'The mail alias for the user.' }),
      passwordProfile: PasswordProfileSchema.exactOptional(),
      userPrincipalName: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The user principal name (someuser@contoso.com). It must contain one of the verified domains for the tenant.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'Request parameters for updating an existing work or school account user.',
  })
  .openapi('UserUpdateParameters')

const ApiVersionParameterParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Client API version.',
      in: 'query',
      name: 'api-version',
      required: true,
      schema: { type: 'string' },
    },
  })

const TenantIDInPathParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The tenant ID.',
      in: 'path',
      name: 'tenantID',
      required: true,
      schema: { type: 'string' },
      'x-ms-parameter-location': 'client',
    },
  })

const TopParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(999),
  )
  .default(100)
  .exactOptional()
  .openapi({
    param: {
      description: '(Optional) Set the maximum number of results per response.',
      in: 'query',
      name: '$top',
      required: false,
      schema: { default: 100, maximum: 999, minimum: 1, type: 'integer' },
      'x-ms-parameter-location': 'method',
    },
  })

const AddOwnerParametersRequestBody = {
  description:
    'The URL of the owner object, such as https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.',
  content: {
    'application/json': { schema: AddOwnerParametersSchema },
    'text/json': { schema: AddOwnerParametersSchema },
  },
  required: true,
}

const AzureAuthSecurityScheme = {
  description: 'Azure Active Directory OAuth2 Flow',
  flows: {
    implicit: {
      authorizationUrl: 'https://login.microsoftonline.com/common/oauth2/authorize',
      scopes: { user_impersonation: 'impersonate your user account' },
    },
  },
  type: 'oauth2',
}

export const getTenantIDApplicationsRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/applications',
  tags: ['Application'],
  description: 'Lists applications by filter parameters.',
  operationId: 'Applications_List',
  request: {
    query: z.object({
      $filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The filters to apply to the operation.',
            in: 'query',
            name: '$filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'api-version': ApiVersionParameterParamsSchema,
    }),
    params: z.object({ tenantID: TenantIDInPathParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: ApplicationListResultSchema },
        'text/json': { schema: ApplicationListResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const postTenantIDApplicationsRoute = createRoute({
  method: 'post',
  path: '/{tenantID}/applications',
  tags: ['Application'],
  description: 'Create a new application.',
  operationId: 'Applications_Create',
  request: {
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    params: z.object({ tenantID: TenantIDInPathParamsSchema }),
    body: {
      description: 'The parameters for creating an application.',
      content: {
        'application/json': { schema: ApplicationCreateParametersSchema },
        'text/json': { schema: ApplicationCreateParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The application was created successfully.',
      content: {
        'application/json': { schema: ApplicationSchema },
        'text/json': { schema: ApplicationSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDApplicationsApplicationObjectIdRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/applications/{applicationObjectId}',
  tags: ['Application'],
  description: 'Get an application by object ID.',
  operationId: 'Applications_Get',
  request: {
    params: z.object({
      applicationObjectId: z
        .string()
        .openapi({
          param: {
            description: 'Application object ID.',
            in: 'path',
            name: 'applicationObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: ApplicationSchema },
        'text/json': { schema: ApplicationSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const deleteTenantIDApplicationsApplicationObjectIdRoute = createRoute({
  method: 'delete',
  path: '/{tenantID}/applications/{applicationObjectId}',
  tags: ['Application'],
  description: 'Delete an application.',
  operationId: 'Applications_Delete',
  request: {
    params: z.object({
      applicationObjectId: z
        .string()
        .openapi({
          param: {
            description: 'Application object ID.',
            in: 'path',
            name: 'applicationObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const patchTenantIDApplicationsApplicationObjectIdRoute = createRoute({
  method: 'patch',
  path: '/{tenantID}/applications/{applicationObjectId}',
  tags: ['Application'],
  description: 'Update an existing application.',
  operationId: 'Applications_Patch',
  request: {
    params: z.object({
      applicationObjectId: z
        .string()
        .openapi({
          param: {
            description: 'Application object ID.',
            in: 'path',
            name: 'applicationObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    body: {
      description: 'Parameters to update an existing application.',
      content: {
        'application/json': { schema: ApplicationUpdateParametersSchema },
        'text/json': { schema: ApplicationUpdateParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const postTenantIDApplicationsApplicationObjectIdLinksOwnersRoute = createRoute({
  method: 'post',
  path: '/{tenantID}/applications/{applicationObjectId}/$links/owners',
  tags: ['ApplicationOwners'],
  description: 'Add an owner to an application.',
  operationId: 'Applications_AddOwner',
  request: {
    params: z.object({
      applicationObjectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the application to which to add the owner.',
            in: 'path',
            name: 'applicationObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    body: AddOwnerParametersRequestBody,
  },
  responses: {
    204: { description: 'No Content. Indicates success. No response body is returned.' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const deleteTenantIDApplicationsApplicationObjectIdLinksOwnersOwnerObjectIdRoute =
  createRoute({
    method: 'delete',
    path: '/{tenantID}/applications/{applicationObjectId}/$links/owners/{ownerObjectId}',
    tags: ['ApplicationOwners'],
    description: 'Remove a member from owners.',
    operationId: 'Applications_RemoveOwner',
    request: {
      params: z.object({
        applicationObjectId: z
          .string()
          .openapi({
            param: {
              description: 'The object ID of the application from which to remove the owner.',
              in: 'path',
              name: 'applicationObjectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        ownerObjectId: z
          .string()
          .openapi({
            param: {
              description: 'Owner object id',
              in: 'path',
              name: 'ownerObjectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        tenantID: TenantIDInPathParamsSchema,
      }),
      query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    },
    responses: {
      204: { description: 'No Content. Indicates success. No response body is returned.' },
      default: {
        description: 'Error response describing why the operation failed.',
        content: {
          'application/json': { schema: GraphErrorSchema },
          'text/json': { schema: GraphErrorSchema },
        },
      },
    },
  })

export const getTenantIDApplicationsApplicationObjectIdKeyCredentialsRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/applications/{applicationObjectId}/keyCredentials',
  tags: ['ApplicationKeyCredentials'],
  description: 'Get the keyCredentials associated with an application.',
  operationId: 'Applications_ListKeyCredentials',
  request: {
    params: z.object({
      applicationObjectId: z
        .string()
        .openapi({
          param: {
            description: 'Application object ID.',
            in: 'path',
            name: 'applicationObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: KeyCredentialListResultSchema },
        'text/json': { schema: KeyCredentialListResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const patchTenantIDApplicationsApplicationObjectIdKeyCredentialsRoute = createRoute({
  method: 'patch',
  path: '/{tenantID}/applications/{applicationObjectId}/keyCredentials',
  tags: ['ApplicationKeyCredentials'],
  description: 'Update the keyCredentials associated with an application.',
  operationId: 'Applications_UpdateKeyCredentials',
  request: {
    params: z.object({
      applicationObjectId: z
        .string()
        .openapi({
          param: {
            description: 'Application object ID.',
            in: 'path',
            name: 'applicationObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    body: {
      description: 'Parameters to update the keyCredentials of an existing application.',
      content: {
        'application/json': { schema: KeyCredentialsUpdateParametersSchema },
        'text/json': { schema: KeyCredentialsUpdateParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDApplicationsApplicationObjectIdOwnersRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/applications/{applicationObjectId}/owners',
  tags: ['ApplicationOwners'],
  summary: 'Directory objects that are owners of the application.',
  description: 'The owners are a set of non-admin users who are allowed to modify this object.',
  operationId: 'Applications_ListOwners',
  request: {
    params: z.object({
      applicationObjectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the application for which to get owners.',
            in: 'path',
            name: 'applicationObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: DirectoryObjectListResultSchema },
        'text/json': { schema: DirectoryObjectListResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDApplicationsApplicationObjectIdPasswordCredentialsRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/applications/{applicationObjectId}/passwordCredentials',
  tags: ['ApplicationPasswordCredentials'],
  description: 'Get the passwordCredentials associated with an application.',
  operationId: 'Applications_ListPasswordCredentials',
  request: {
    params: z.object({
      applicationObjectId: z
        .string()
        .openapi({
          param: {
            description: 'Application object ID.',
            in: 'path',
            name: 'applicationObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: PasswordCredentialListResultSchema },
        'text/json': { schema: PasswordCredentialListResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const patchTenantIDApplicationsApplicationObjectIdPasswordCredentialsRoute = createRoute({
  method: 'patch',
  path: '/{tenantID}/applications/{applicationObjectId}/passwordCredentials',
  tags: ['ApplicationPasswordCredentials'],
  description: 'Update passwordCredentials associated with an application.',
  operationId: 'Applications_UpdatePasswordCredentials',
  request: {
    params: z.object({
      applicationObjectId: z
        .string()
        .openapi({
          param: {
            description: 'Application object ID.',
            in: 'path',
            name: 'applicationObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    body: {
      description: 'Parameters to update passwordCredentials of an existing application.',
      content: {
        'application/json': { schema: PasswordCredentialsUpdateParametersSchema },
        'text/json': { schema: PasswordCredentialsUpdateParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDDeletedApplicationsRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/deletedApplications',
  tags: ['deletedApplications'],
  description: 'Gets a list of deleted applications in the directory.',
  operationId: 'DeletedApplications_List',
  request: {
    query: z.object({
      $filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The filter to apply to the operation.',
            in: 'query',
            name: '$filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'api-version': ApiVersionParameterParamsSchema,
    }),
    params: z.object({ tenantID: TenantIDInPathParamsSchema }),
  },
  responses: {
    200: {
      description: 'The applications were retrieved successfully.',
      content: {
        'application/json': { schema: ApplicationListResultSchema },
        'text/json': { schema: ApplicationListResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const deleteTenantIDDeletedApplicationsApplicationObjectIdRoute = createRoute({
  method: 'delete',
  path: '/{tenantID}/deletedApplications/{applicationObjectId}',
  tags: ['Application'],
  description: 'Hard-delete an application.',
  operationId: 'DeletedApplications_HardDelete',
  request: {
    params: z.object({
      applicationObjectId: z
        .string()
        .openapi({
          param: {
            description: 'Application object ID.',
            in: 'path',
            name: 'applicationObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const postTenantIDDeletedApplicationsObjectIdRestoreRoute = createRoute({
  method: 'post',
  path: '/{tenantID}/deletedApplications/{objectId}/restore',
  tags: ['deletedApplications'],
  description: 'Restores the deleted application in the directory.',
  operationId: 'DeletedApplications_Restore',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'Application object ID.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'The application was restored successfully.',
      content: {
        'application/json': { schema: ApplicationSchema },
        'text/json': { schema: ApplicationSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDDomainsRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/domains',
  tags: ['Domain'],
  description: 'Gets a list of domains for the current tenant.',
  operationId: 'Domains_List',
  request: {
    query: z.object({
      $filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The filter to apply to the operation.',
            in: 'query',
            name: '$filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'api-version': ApiVersionParameterParamsSchema,
    }),
    params: z.object({ tenantID: TenantIDInPathParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: DomainListResultSchema },
        'text/json': { schema: DomainListResultSchema },
      },
    },
  },
})

export const getTenantIDDomainsDomainNameRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/domains/{domainName}',
  tags: ['Domain'],
  description: 'Gets a specific domain in the current tenant.',
  operationId: 'Domains_Get',
  request: {
    params: z.object({
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'name of the domain.',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: DomainSchema },
        'text/json': { schema: DomainSchema },
      },
    },
  },
})

export const postTenantIDGetObjectsByObjectIdsRoute = createRoute({
  method: 'post',
  path: '/{tenantID}/getObjectsByObjectIds',
  tags: ['Objects'],
  description:
    'Gets the directory objects specified in a list of object IDs. You can also specify which resource collections (users, groups, etc.) should be searched by specifying the optional types parameter.',
  operationId: 'Objects_GetObjectsByObjectIds',
  request: {
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    params: z.object({ tenantID: TenantIDInPathParamsSchema }),
    body: {
      description: 'Objects filtering parameters.',
      content: {
        'application/json': { schema: GetObjectsParametersSchema },
        'text/json': { schema: GetObjectsParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: DirectoryObjectListResultSchema },
        'text/json': { schema: DirectoryObjectListResultSchema },
      },
    },
  },
})

export const getTenantIDGroupsRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/groups',
  tags: ['Group'],
  description: 'Gets list of groups for the current tenant.',
  operationId: 'Groups_List',
  request: {
    query: z.object({
      $filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The filter to apply to the operation.',
            in: 'query',
            name: '$filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'api-version': ApiVersionParameterParamsSchema,
    }),
    params: z.object({ tenantID: TenantIDInPathParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: GroupListResultSchema },
        'text/json': { schema: GroupListResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const postTenantIDGroupsRoute = createRoute({
  method: 'post',
  path: '/{tenantID}/groups',
  tags: ['Group'],
  description: 'Create a group in the directory.',
  operationId: 'Groups_Create',
  request: {
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    params: z.object({ tenantID: TenantIDInPathParamsSchema }),
    body: {
      description: 'The parameters for the group to create.',
      content: {
        'application/json': { schema: GroupCreateParametersSchema },
        'text/json': { schema: GroupCreateParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': { schema: ADGroupSchema },
        'text/json': { schema: ADGroupSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const postTenantIDGroupsGroupObjectIdLinksMembersRoute = createRoute({
  method: 'post',
  path: '/{tenantID}/groups/{groupObjectId}/$links/members',
  tags: ['Group'],
  description: 'Add a member to a group.',
  operationId: 'Groups_AddMember',
  request: {
    params: z.object({
      groupObjectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the group to which to add the member.',
            in: 'path',
            name: 'groupObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    body: {
      description:
        'The URL of the member object, such as https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.',
      content: {
        'application/json': { schema: GroupAddMemberParametersSchema },
        'text/json': { schema: GroupAddMemberParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content. Indicates success. No response body is returned.' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const deleteTenantIDGroupsGroupObjectIdLinksMembersMemberObjectIdRoute = createRoute({
  method: 'delete',
  path: '/{tenantID}/groups/{groupObjectId}/$links/members/{memberObjectId}',
  tags: ['Group'],
  description: 'Remove a member from a group.',
  operationId: 'Groups_RemoveMember',
  request: {
    params: z.object({
      groupObjectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the group from which to remove the member.',
            in: 'path',
            name: 'groupObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      memberObjectId: z
        .string()
        .openapi({
          param: {
            description: 'Member object id',
            in: 'path',
            name: 'memberObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    204: { description: 'No Content. Indicates success. No response body is returned.' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDGroupsObjectIdRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/groups/{objectId}',
  tags: ['Group'],
  description: 'Gets group information from the directory.',
  operationId: 'Groups_Get',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the user for which to get group information.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: ADGroupSchema },
        'text/json': { schema: ADGroupSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const deleteTenantIDGroupsObjectIdRoute = createRoute({
  method: 'delete',
  path: '/{tenantID}/groups/{objectId}',
  tags: ['Group'],
  description: 'Delete a group from the directory.',
  operationId: 'Groups_Delete',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the group to delete.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const postTenantIDGroupsObjectIdLinksOwnersRoute = createRoute({
  method: 'post',
  path: '/{tenantID}/groups/{objectId}/$links/owners',
  tags: ['GroupsOwners'],
  description: 'Add an owner to a group.',
  operationId: 'Groups_AddOwner',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the application to which to add the owner.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    body: AddOwnerParametersRequestBody,
  },
  responses: {
    204: { description: 'No Content. Indicates success. No response body is returned.' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const deleteTenantIDGroupsObjectIdLinksOwnersOwnerObjectIdRoute = createRoute({
  method: 'delete',
  path: '/{tenantID}/groups/{objectId}/$links/owners/{ownerObjectId}',
  tags: ['GroupsOwners'],
  description: 'Remove a member from owners.',
  operationId: 'Groups_RemoveOwner',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the group from which to remove the owner.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ownerObjectId: z
        .string()
        .openapi({
          param: {
            description: 'Owner object id',
            in: 'path',
            name: 'ownerObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    204: { description: 'No Content. Indicates success. No response body is returned.' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const postTenantIDGroupsObjectIdGetMemberGroupsRoute = createRoute({
  method: 'post',
  path: '/{tenantID}/groups/{objectId}/getMemberGroups',
  tags: ['Group'],
  description:
    'Gets a collection of object IDs of groups of which the specified group is a member.',
  operationId: 'Groups_GetMemberGroups',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the group for which to get group membership.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    body: {
      description: 'Group filtering parameters.',
      content: {
        'application/json': { schema: GroupGetMemberGroupsParametersSchema },
        'text/json': { schema: GroupGetMemberGroupsParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: GroupGetMemberGroupsResultSchema },
        'text/json': { schema: GroupGetMemberGroupsResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDGroupsObjectIdMembersRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/groups/{objectId}/members',
  tags: ['Group'],
  description: 'Gets the members of a group.',
  operationId: 'Groups_GetGroupMembers',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the group whose members should be retrieved.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: DirectoryObjectListResultSchema },
        'text/json': { schema: DirectoryObjectListResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDGroupsObjectIdOwnersRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/groups/{objectId}/owners',
  tags: ['GroupOwners'],
  summary: 'Directory objects that are owners of the group.',
  description: 'The owners are a set of non-admin users who are allowed to modify this object.',
  operationId: 'Groups_ListOwners',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the group for which to get owners.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: DirectoryObjectListResultSchema },
        'text/json': { schema: DirectoryObjectListResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const postTenantIDIsMemberOfRoute = createRoute({
  method: 'post',
  path: '/{tenantID}/isMemberOf',
  tags: ['Group'],
  description:
    'Checks whether the specified user, group, contact, or service principal is a direct or transitive member of the specified group.',
  operationId: 'Groups_IsMemberOf',
  request: {
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    params: z.object({ tenantID: TenantIDInPathParamsSchema }),
    body: {
      description: 'The check group membership parameters.',
      content: {
        'application/json': { schema: CheckGroupMembershipParametersSchema },
        'text/json': { schema: CheckGroupMembershipParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'OK. Indicates success. Returns true if the user, contact, group, or service principal is a direct or a transitive member of the specified group; otherwise, false.',
      content: {
        'application/json': { schema: CheckGroupMembershipResultSchema },
        'text/json': { schema: CheckGroupMembershipResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDMeRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/me',
  tags: ['SignedInUser'],
  description: 'Gets the details for the currently logged-in user.',
  operationId: 'SignedInUser_Get',
  request: {
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    params: z.object({ tenantID: TenantIDInPathParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: { 'application/json': { schema: UserSchema }, 'text/json': { schema: UserSchema } },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDMeOwnedObjectsRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/me/ownedObjects',
  tags: ['SignedInUser'],
  description: 'Get the list of directory objects that are owned by the user.',
  operationId: 'SignedInUser_ListOwnedObjects',
  request: {
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    params: z.object({ tenantID: TenantIDInPathParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: DirectoryObjectListResultSchema },
        'text/json': { schema: DirectoryObjectListResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDOauth2PermissionGrantsRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/oauth2PermissionGrants',
  tags: ['OAuth2PermissionGrant_List'],
  description: 'Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.',
  operationId: 'OAuth2PermissionGrant_List',
  request: {
    query: z.object({
      $filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'This is the Service Principal ObjectId associated with the app',
            example: "clientId+eq+'61ed44c3-5a1d-4639-a215-07f25129c6c3",
            in: 'query',
            name: '$filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'api-version': ApiVersionParameterParamsSchema,
    }),
    params: z.object({ tenantID: TenantIDInPathParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: { 'application/json': { schema: OAuth2PermissionGrantListResultSchema } },
    },
  },
})

export const postTenantIDOauth2PermissionGrantsRoute = createRoute({
  method: 'post',
  path: '/{tenantID}/oauth2PermissionGrants',
  tags: ['OAuth2PermissionGrant_Create'],
  description: 'Grants OAuth2 permissions for the relevant resource Ids of an app.',
  operationId: 'OAuth2PermissionGrant_Create',
  request: {
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    params: z.object({ tenantID: TenantIDInPathParamsSchema }),
    body: {
      description:
        'The relevant app Service Principal Object Id and the Service Principal Object Id you want to grant.',
      content: { 'application/json': { schema: OAuth2PermissionGrantSchema } },
    },
  },
  responses: {
    201: {
      description: 'OK. The operation was successful.',
      content: { 'application/json': { schema: OAuth2PermissionGrantSchema } },
    },
  },
})

export const deleteTenantIDOauth2PermissionGrantsObjectIdRoute = createRoute({
  method: 'delete',
  path: '/{tenantID}/oauth2PermissionGrants/{objectId}',
  tags: ['OAuth2PermissionGrant_delete'],
  description: 'Delete a OAuth2 permission grant for the relevant resource Ids of an app.',
  operationId: 'OAuth2PermissionGrant_Delete',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of a permission grant.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDServicePrincipalsRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/servicePrincipals',
  tags: ['ServicePrincipal'],
  description: 'Gets a list of service principals from the current tenant.',
  operationId: 'ServicePrincipals_List',
  request: {
    query: z.object({
      $filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The filter to apply to the operation.',
            in: 'query',
            name: '$filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'api-version': ApiVersionParameterParamsSchema,
    }),
    params: z.object({ tenantID: TenantIDInPathParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: ServicePrincipalListResultSchema },
        'text/json': { schema: ServicePrincipalListResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const postTenantIDServicePrincipalsRoute = createRoute({
  method: 'post',
  path: '/{tenantID}/servicePrincipals',
  tags: ['ServicePrincipal'],
  description: 'Creates a service principal in the directory.',
  operationId: 'ServicePrincipals_Create',
  request: {
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    params: z.object({ tenantID: TenantIDInPathParamsSchema }),
    body: {
      description: 'Parameters to create a service principal.',
      content: {
        'application/json': { schema: ServicePrincipalCreateParametersSchema },
        'text/json': { schema: ServicePrincipalCreateParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The service principal was created successfully.',
      content: {
        'application/json': { schema: ServicePrincipalSchema },
        'text/json': { schema: ServicePrincipalSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDServicePrincipalsObjectIdRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/servicePrincipals/{objectId}',
  tags: ['ServicePrincipal'],
  description:
    'Gets service principal information from the directory. Query by objectId or pass a filter to query by appId',
  operationId: 'ServicePrincipals_Get',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the service principal to get.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: ServicePrincipalSchema },
        'text/json': { schema: ServicePrincipalSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const deleteTenantIDServicePrincipalsObjectIdRoute = createRoute({
  method: 'delete',
  path: '/{tenantID}/servicePrincipals/{objectId}',
  tags: ['ServicePrincipal'],
  description: 'Deletes a service principal from the directory.',
  operationId: 'ServicePrincipals_Delete',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the service principal to delete.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const patchTenantIDServicePrincipalsObjectIdRoute = createRoute({
  method: 'patch',
  path: '/{tenantID}/servicePrincipals/{objectId}',
  tags: ['ServicePrincipal'],
  description: 'Updates a service principal in the directory.',
  operationId: 'ServicePrincipals_Update',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the service principal to delete.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    body: {
      description: 'Parameters to update a service principal.',
      content: {
        'application/json': { schema: ServicePrincipalUpdateParametersSchema },
        'text/json': { schema: ServicePrincipalUpdateParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const postTenantIDServicePrincipalsObjectIdLinksOwnersRoute = createRoute({
  method: 'post',
  path: '/{tenantID}/servicePrincipals/{objectId}/$links/owners',
  tags: ['ServicePrincipalOwners'],
  description: 'Add an owner to a service principal.',
  operationId: 'ServicePrincipals_AddOwner',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the service principal to which to add the owner.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    body: AddOwnerParametersRequestBody,
  },
  responses: {
    204: { description: 'No Content. Indicates success. No response body is returned.' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const deleteTenantIDServicePrincipalsObjectIdLinksOwnersOwnerObjectIdRoute = createRoute({
  method: 'delete',
  path: '/{tenantID}/servicePrincipals/{objectId}/$links/owners/{ownerObjectId}',
  tags: ['ServicePrincipalOwners'],
  description: 'Remove a member from owners.',
  operationId: 'ServicePrincipals_RemoveOwner',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the service principal from which to remove the owner.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ownerObjectId: z
        .string()
        .openapi({
          param: {
            description: 'Owner object id',
            in: 'path',
            name: 'ownerObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    204: { description: 'No Content. Indicates success. No response body is returned.' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDServicePrincipalsObjectIdAppRoleAssignedToRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/servicePrincipals/{objectId}/appRoleAssignedTo',
  tags: ['ServicePrincipalAppRoleAssignedTo'],
  summary:
    'Principals (users, groups, and service principals) that are assigned to this service principal.',
  operationId: 'ServicePrincipals_ListAppRoleAssignedTo',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the service principal for which to get owners.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: AppRoleAssignmentListResultSchema },
        'text/json': { schema: AppRoleAssignmentListResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/servicePrincipals/{objectId}/appRoleAssignments',
  tags: ['ServicePrincipalAppRoleAssignments'],
  summary: 'Applications that the service principal is assigned to.',
  operationId: 'ServicePrincipals_ListAppRoleAssignments',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the service principal for which to get owners.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: AppRoleAssignmentListResultSchema },
        'text/json': { schema: AppRoleAssignmentListResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDServicePrincipalsObjectIdKeyCredentialsRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/servicePrincipals/{objectId}/keyCredentials',
  tags: ['ServicePrincipalKeyCredentials'],
  description: 'Get the keyCredentials associated with the specified service principal.',
  operationId: 'ServicePrincipals_ListKeyCredentials',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the service principal for which to get keyCredentials.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: KeyCredentialListResultSchema },
        'text/json': { schema: KeyCredentialListResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const patchTenantIDServicePrincipalsObjectIdKeyCredentialsRoute = createRoute({
  method: 'patch',
  path: '/{tenantID}/servicePrincipals/{objectId}/keyCredentials',
  tags: ['ServicePrincipalKeyCredentials'],
  description: 'Update the keyCredentials associated with a service principal.',
  operationId: 'ServicePrincipals_UpdateKeyCredentials',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID for which to get service principal information.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    body: {
      description: 'Parameters to update the keyCredentials of an existing service principal.',
      content: {
        'application/json': { schema: KeyCredentialsUpdateParametersSchema },
        'text/json': { schema: KeyCredentialsUpdateParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDServicePrincipalsObjectIdOwnersRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/servicePrincipals/{objectId}/owners',
  tags: ['ServicePrincipalOwners'],
  summary: 'Directory objects that are owners of this service principal.',
  description: 'The owners are a set of non-admin users who are allowed to modify this object.',
  operationId: 'ServicePrincipals_ListOwners',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the service principal for which to get owners.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: DirectoryObjectListResultSchema },
        'text/json': { schema: DirectoryObjectListResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDServicePrincipalsObjectIdPasswordCredentialsRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/servicePrincipals/{objectId}/passwordCredentials',
  tags: ['ServicePrincipalPasswordCredentials'],
  description: 'Gets the passwordCredentials associated with a service principal.',
  operationId: 'ServicePrincipals_ListPasswordCredentials',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the service principal.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: PasswordCredentialListResultSchema },
        'text/json': { schema: PasswordCredentialListResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const patchTenantIDServicePrincipalsObjectIdPasswordCredentialsRoute = createRoute({
  method: 'patch',
  path: '/{tenantID}/servicePrincipals/{objectId}/passwordCredentials',
  tags: ['ServicePrincipalPasswordCredentials'],
  description: 'Updates the passwordCredentials associated with a service principal.',
  operationId: 'ServicePrincipals_UpdatePasswordCredentials',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the service principal.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    body: {
      description: 'Parameters to update the passwordCredentials of an existing service principal.',
      content: {
        'application/json': { schema: PasswordCredentialsUpdateParametersSchema },
        'text/json': { schema: PasswordCredentialsUpdateParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/servicePrincipalsByAppId/{applicationID}/objectId',
  tags: ['ServicePrincipalsByAppId'],
  description: 'Gets an object id for a given application id from the current tenant.',
  operationId: 'Applications_GetServicePrincipalsIdByAppId',
  request: {
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    params: z.object({
      tenantID: TenantIDInPathParamsSchema,
      applicationID: z
        .string()
        .openapi({
          param: {
            description: 'The application ID.',
            in: 'path',
            name: 'applicationID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: ServicePrincipalObjectResultSchema },
        'text/json': { schema: ServicePrincipalObjectResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDUsersRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/users',
  tags: ['User'],
  description: 'Gets list of users for the current tenant.',
  operationId: 'Users_List',
  request: {
    query: z.object({
      $filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The filter to apply to the operation.',
            in: 'query',
            name: '$filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      $expand: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The expand value for the operation result.',
            in: 'query',
            name: '$expand',
            required: false,
            schema: { type: 'string' },
          },
        }),
      $top: TopParamsSchema,
      'api-version': ApiVersionParameterParamsSchema,
    }),
    params: z.object({ tenantID: TenantIDInPathParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: UserListResultSchema },
        'text/json': { schema: UserListResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const postTenantIDUsersRoute = createRoute({
  method: 'post',
  path: '/{tenantID}/users',
  tags: ['User'],
  description: 'Create a new user.',
  operationId: 'Users_Create',
  request: {
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    params: z.object({ tenantID: TenantIDInPathParamsSchema }),
    body: {
      description: 'Parameters to create a user.',
      content: {
        'application/json': { schema: UserCreateParametersSchema },
        'text/json': { schema: UserCreateParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created. Indicates success. The new user is returned in the response body.',
      content: { 'application/json': { schema: UserSchema }, 'text/json': { schema: UserSchema } },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const postTenantIDUsersObjectIdGetMemberGroupsRoute = createRoute({
  method: 'post',
  path: '/{tenantID}/users/{objectId}/getMemberGroups',
  tags: ['User'],
  description:
    'Gets a collection that contains the object IDs of the groups of which the user is a member.',
  operationId: 'Users_GetMemberGroups',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID of the user for which to get group membership.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    body: {
      description: 'User filtering parameters.',
      content: {
        'application/json': { schema: UserGetMemberGroupsParametersSchema },
        'text/json': { schema: UserGetMemberGroupsParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: {
        'application/json': { schema: UserGetMemberGroupsResultSchema },
        'text/json': { schema: UserGetMemberGroupsResultSchema },
      },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const getTenantIDUsersUpnOrObjectIdRoute = createRoute({
  method: 'get',
  path: '/{tenantID}/users/{upnOrObjectId}',
  tags: ['User'],
  description: 'Gets user information from the directory.',
  operationId: 'Users_Get',
  request: {
    params: z.object({
      upnOrObjectId: z
        .string()
        .openapi({
          param: {
            description:
              'The object ID or principal name of the user for which to get information.',
            in: 'path',
            name: 'upnOrObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK. The operation was successful.',
      content: { 'application/json': { schema: UserSchema }, 'text/json': { schema: UserSchema } },
    },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const deleteTenantIDUsersUpnOrObjectIdRoute = createRoute({
  method: 'delete',
  path: '/{tenantID}/users/{upnOrObjectId}',
  tags: ['User'],
  description: 'Delete a user.',
  operationId: 'Users_Delete',
  request: {
    params: z.object({
      upnOrObjectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID or principal name of the user to delete.',
            in: 'path',
            name: 'upnOrObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
  },
  responses: {
    204: { description: 'No Content' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})

export const patchTenantIDUsersUpnOrObjectIdRoute = createRoute({
  method: 'patch',
  path: '/{tenantID}/users/{upnOrObjectId}',
  tags: ['User'],
  description: 'Updates a user.',
  operationId: 'Users_Update',
  request: {
    params: z.object({
      upnOrObjectId: z
        .string()
        .openapi({
          param: {
            description: 'The object ID or principal name of the user to update.',
            in: 'path',
            name: 'upnOrObjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tenantID: TenantIDInPathParamsSchema,
    }),
    query: z.object({ 'api-version': ApiVersionParameterParamsSchema }),
    body: {
      description: 'Parameters to update an existing user.',
      content: {
        'application/json': { schema: UserUpdateParametersSchema },
        'text/json': { schema: UserUpdateParametersSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content.' },
    default: {
      description: 'Error response describing why the operation failed.',
      content: {
        'application/json': { schema: GraphErrorSchema },
        'text/json': { schema: GraphErrorSchema },
      },
    },
  },
})
