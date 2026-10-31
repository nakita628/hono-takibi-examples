import { createRoute, z } from '@hono/zod-openapi'

const AssociateDelegateToResourceResponseSchema = z
  .object({})
  .openapi('AssociateDelegateToResourceResponse')

const OrganizationIdSchema = z
  .string()
  .regex(/^m-[0-9a-f]{32}$/)
  .length(34)
  .openapi('OrganizationId')

const ResourceIdSchema = z
  .string()
  .regex(/^r-[0-9a-f]{32}$/)
  .length(34)
  .openapi('ResourceId')

const WorkMailIdentifierSchema = z.string().min(12).max(256).openapi('WorkMailIdentifier')

const AssociateDelegateToResourceRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The organization under which the resource exists.' }),
    ),
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The resource for which members (users or groups) are associated.',
        }),
    ),
    EntityId: WorkMailIdentifierSchema.and(
      z.any().openapi({ description: 'The member (user or group) to associate to the resource.' }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'ResourceId', 'EntityId'],
    title: 'AssociateDelegateToResourceRequest',
  })
  .openapi('AssociateDelegateToResourceRequest')

const EntityNotFoundExceptionSchema = z.any().openapi('EntityNotFoundException')

const EntityStateExceptionSchema = z.any().openapi('EntityStateException')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const OrganizationNotFoundExceptionSchema = z.any().openapi('OrganizationNotFoundException')

const OrganizationStateExceptionSchema = z.any().openapi('OrganizationStateException')

const AssociateMemberToGroupResponseSchema = z.object({}).openapi('AssociateMemberToGroupResponse')

const AssociateMemberToGroupRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The organization under which the group exists.' }),
    ),
    GroupId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({ description: 'The group to which the member (user or group) is associated.' }),
    ),
    MemberId: WorkMailIdentifierSchema.and(
      z.any().openapi({ description: 'The member (user or group) to associate to the group.' }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'GroupId', 'MemberId'],
    title: 'AssociateMemberToGroupRequest',
  })
  .openapi('AssociateMemberToGroupRequest')

const DirectoryServiceAuthenticationFailedExceptionSchema = z
  .any()
  .openapi('DirectoryServiceAuthenticationFailedException')

const DirectoryUnavailableExceptionSchema = z.any().openapi('DirectoryUnavailableException')

const UnsupportedOperationExceptionSchema = z.any().openapi('UnsupportedOperationException')

const ImpersonationTokenSchema = z
  .string()
  .regex(/[\x21-\x7e]+/)
  .min(1)
  .max(256)
  .openapi('ImpersonationToken')

const ExpiresInSchema = z.int().openapi('ExpiresIn')

const AssumeImpersonationRoleResponseSchema = z
  .object({
    Token: ImpersonationTokenSchema.and(
      z.any().openapi({ description: 'The authentication token for the impersonation role.' }),
    ).exactOptional(),
    ExpiresIn: ExpiresInSchema.and(
      z.any().openapi({ description: "The authentication token's validity, in seconds." }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssumeImpersonationRoleResponse')

const ImpersonationRoleIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9_-]+/)
  .min(1)
  .max(64)
  .openapi('ImpersonationRoleId')

const AssumeImpersonationRoleRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The WorkMail organization under which the impersonation role will be assumed.',
        }),
    ),
    ImpersonationRoleId: ImpersonationRoleIdSchema.and(
      z.any().openapi({ description: 'The impersonation role ID to assume.' }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'ImpersonationRoleId'],
    title: 'AssumeImpersonationRoleRequest',
  })
  .openapi('AssumeImpersonationRoleRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const CancelMailboxExportJobResponseSchema = z.object({}).openapi('CancelMailboxExportJobResponse')

const IdempotencyClientTokenSchema = z
  .string()
  .regex(/[\x21-\x7e]+/)
  .min(1)
  .max(128)
  .openapi('IdempotencyClientToken')

const MailboxExportJobIdSchema = z
  .string()
  .regex(/[A-Za-z0-9-]+/)
  .min(1)
  .max(63)
  .openapi('MailboxExportJobId')

const CancelMailboxExportJobRequestSchema = z
  .object({
    ClientToken: IdempotencyClientTokenSchema.and(
      z.any().openapi({ description: 'The idempotency token for the client request.' }),
    ),
    JobId: MailboxExportJobIdSchema.and(z.any().openapi({ description: 'The job ID.' })),
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The organization ID.' }),
    ),
  })
  .openapi({
    required: ['ClientToken', 'JobId', 'OrganizationId'],
    title: 'CancelMailboxExportJobRequest',
  })
  .openapi('CancelMailboxExportJobRequest')

const CreateAliasResponseSchema = z.object({}).openapi('CreateAliasResponse')

const EmailAddressSchema = z
  .string()
  .regex(/[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]+\.[a-zA-Z-]{2,}/)
  .min(1)
  .max(254)
  .openapi('EmailAddress')

const CreateAliasRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The organization under which the member (user or group) exists.',
        }),
    ),
    EntityId: WorkMailIdentifierSchema.and(
      z.any().openapi({ description: 'The member (user or group) to which this alias is added.' }),
    ),
    Alias: EmailAddressSchema.and(
      z.any().openapi({ description: 'The alias to add to the member set.' }),
    ),
  })
  .openapi({ required: ['OrganizationId', 'EntityId', 'Alias'], title: 'CreateAliasRequest' })
  .openapi('CreateAliasRequest')

const EmailAddressInUseExceptionSchema = z.any().openapi('EmailAddressInUseException')

const MailDomainNotFoundExceptionSchema = z.any().openapi('MailDomainNotFoundException')

const MailDomainStateExceptionSchema = z.any().openapi('MailDomainStateException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const CreateAvailabilityConfigurationResponseSchema = z
  .object({})
  .openapi('CreateAvailabilityConfigurationResponse')

const DomainNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9.-]+\.[a-zA-Z-]{2,}/)
  .min(3)
  .max(255)
  .openapi('DomainName')

const UrlSchema = z
  .string()
  .regex(/https?:\/\/[A-Za-z0-9.-]+(:[0-9]+)?\/.*/)
  .max(256)
  .openapi('Url')

const ExternalUserNameSchema = z
  .string()
  .regex(/[\u0020-\u00FF]+/)
  .max(256)
  .openapi('ExternalUserName')

const PasswordSchema = z
  .string()
  .regex(/[\u0020-\u00FF]+/)
  .max(256)
  .openapi('Password')

const EwsAvailabilityProviderSchema = z
  .object({
    EwsEndpoint: UrlSchema.and(
      z.any().openapi({ description: 'The endpoint of the remote EWS server.' }),
    ),
    EwsUsername: ExternalUserNameSchema.and(
      z.any().openapi({ description: 'The username used to authenticate the remote EWS server.' }),
    ),
    EwsPassword: PasswordSchema.and(
      z.any().openapi({ description: 'The password used to authenticate the remote EWS server.' }),
    ),
  })
  .openapi({
    required: ['EwsEndpoint', 'EwsUsername', 'EwsPassword'],
    description:
      'Describes an EWS based availability provider. This is only used as input to the service.',
  })
  .openapi('EwsAvailabilityProvider')

const LambdaArnSchema = z
  .string()
  .regex(
    /arn:aws:lambda:[a-z]{2}-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9\-_\.]+(:(\$LATEST|[a-zA-Z0-9\-_]+))?/,
  )
  .min(49)
  .max(256)
  .openapi('LambdaArn')

const LambdaAvailabilityProviderSchema = z
  .object({
    LambdaArn: LambdaArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Lambda that acts as the availability provider.',
        }),
    ),
  })
  .openapi({
    required: ['LambdaArn'],
    description: 'Describes a Lambda based availability provider.',
  })
  .openapi('LambdaAvailabilityProvider')

const CreateAvailabilityConfigurationRequestSchema = z
  .object({
    ClientToken: IdempotencyClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An idempotent token that ensures that an API request is executed only once.',
        }),
    ).exactOptional(),
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The WorkMail organization for which the <code>AvailabilityConfiguration</code> will be created.',
        }),
    ),
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The domain to which the provider applies.' }),
    ),
    EwsProvider: EwsAvailabilityProviderSchema.and(
      z
        .any()
        .openapi({
          description:
            'Exchange Web Services (EWS) availability provider definition. The request must contain exactly one provider definition, either <code>EwsProvider</code> or <code>LambdaProvider</code>.',
        }),
    ).exactOptional(),
    LambdaProvider: LambdaAvailabilityProviderSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lambda availability provider definition. The request must contain exactly one provider definition, either <code>EwsProvider</code> or <code>LambdaProvider</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OrganizationId', 'DomainName'],
    title: 'CreateAvailabilityConfigurationRequest',
  })
  .openapi('CreateAvailabilityConfigurationRequest')

const NameAvailabilityExceptionSchema = z.any().openapi('NameAvailabilityException')

const CreateGroupResponseSchema = z
  .object({
    GroupId: WorkMailIdentifierSchema.and(
      z.any().openapi({ description: 'The identifier of the group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateGroupResponse')

const GroupNameSchema = z
  .string()
  .regex(/[\u0020-\u00FF]+/)
  .min(1)
  .max(256)
  .openapi('GroupName')

const CreateGroupRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The organization under which the group is to be created.' }),
    ),
    Name: GroupNameSchema.and(z.any().openapi({ description: 'The name of the group.' })),
  })
  .openapi({ required: ['OrganizationId', 'Name'], title: 'CreateGroupRequest' })
  .openapi('CreateGroupRequest')

const ReservedNameExceptionSchema = z.any().openapi('ReservedNameException')

const CreateImpersonationRoleResponseSchema = z
  .object({
    ImpersonationRoleId: ImpersonationRoleIdSchema.and(
      z.any().openapi({ description: 'The new impersonation role ID.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateImpersonationRoleResponse')

const ImpersonationRoleNameSchema = z
  .string()
  .regex(/[^\x00-\x1F\x7F\x3C\x3E\x5C]+/)
  .min(1)
  .max(64)
  .openapi('ImpersonationRoleName')

const ImpersonationRoleTypeSchema = z
  .enum(['FULL_ACCESS', 'READ_ONLY'])
  .openapi('ImpersonationRoleType')

const ImpersonationRoleDescriptionSchema = z
  .string()
  .regex(/[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F\x3C\x3E\x5C]+/)
  .min(1)
  .max(256)
  .openapi('ImpersonationRoleDescription')

const ImpersonationRuleIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9_-]+/)
  .min(1)
  .max(64)
  .openapi('ImpersonationRuleId')

const ImpersonationRuleNameSchema = z
  .string()
  .regex(/[^\x00-\x1F\x7F\x3C\x3E\x5C]+/)
  .min(1)
  .max(64)
  .openapi('ImpersonationRuleName')

const ImpersonationRuleDescriptionSchema = z
  .string()
  .regex(/[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F\x3C\x3E\x5C]+/)
  .min(1)
  .max(256)
  .openapi('ImpersonationRuleDescription')

const AccessEffectSchema = z.enum(['ALLOW', 'DENY']).openapi('AccessEffect')

const EntityIdentifierSchema = z
  .string()
  .regex(/[a-zA-Z0-9._%+@-]+/)
  .min(1)
  .max(256)
  .openapi('EntityIdentifier')

const TargetUsersSchema = z.array(EntityIdentifierSchema).min(1).max(10).openapi('TargetUsers')

const ImpersonationRuleSchema = z
  .object({
    ImpersonationRuleId: ImpersonationRuleIdSchema.and(
      z.any().openapi({ description: 'The identifier of the rule.' }),
    ),
    Name: ImpersonationRuleNameSchema.and(
      z.any().openapi({ description: 'The rule name.' }),
    ).exactOptional(),
    Description: ImpersonationRuleDescriptionSchema.and(
      z.any().openapi({ description: 'The rule description.' }),
    ).exactOptional(),
    Effect: AccessEffectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The effect of the rule when it matches the input. Allowed effect values are <code>ALLOW</code> or <code>DENY</code>.',
        }),
    ),
    TargetUsers: TargetUsersSchema.and(
      z.any().openapi({ description: 'A list of user IDs that match the rule.' }),
    ).exactOptional(),
    NotTargetUsers: TargetUsersSchema.and(
      z.any().openapi({ description: "A list of user IDs that don't match the rule." }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ImpersonationRuleId', 'Effect'],
    description: 'The rules for the given impersonation role.',
  })
  .openapi('ImpersonationRule')

const ImpersonationRuleListSchema = z
  .array(ImpersonationRuleSchema)
  .min(0)
  .max(10)
  .openapi('ImpersonationRuleList')

const CreateImpersonationRoleRequestSchema = z
  .object({
    ClientToken: IdempotencyClientTokenSchema.and(
      z.any().openapi({ description: 'The idempotency token for the client request.' }),
    ).exactOptional(),
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The WorkMail organization to create the new impersonation role within.',
        }),
    ),
    Name: ImpersonationRoleNameSchema.and(
      z.any().openapi({ description: 'The name of the new impersonation role.' }),
    ),
    Type: ImpersonationRoleTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The impersonation role's type. The available impersonation role types are <code>READ_ONLY</code> or <code>FULL_ACCESS</code>.",
        }),
    ),
    Description: ImpersonationRoleDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the new impersonation role.' }),
    ).exactOptional(),
    Rules: ImpersonationRuleListSchema.and(
      z.any().openapi({ description: 'The list of rules for the impersonation role.' }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'Name', 'Type', 'Rules'],
    title: 'CreateImpersonationRoleRequest',
  })
  .openapi('CreateImpersonationRoleRequest')

const MobileDeviceAccessRuleIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9_-]+/)
  .min(1)
  .max(64)
  .openapi('MobileDeviceAccessRuleId')

const CreateMobileDeviceAccessRuleResponseSchema = z
  .object({
    MobileDeviceAccessRuleId: MobileDeviceAccessRuleIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for the newly created mobile device access rule.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateMobileDeviceAccessRuleResponse')

const MobileDeviceAccessRuleNameSchema = z
  .string()
  .regex(/[\S\s]+/)
  .min(1)
  .max(64)
  .openapi('MobileDeviceAccessRuleName')

const MobileDeviceAccessRuleDescriptionSchema = z
  .string()
  .regex(/[\S\s]+/)
  .min(1)
  .max(256)
  .openapi('MobileDeviceAccessRuleDescription')

const MobileDeviceAccessRuleEffectSchema = z
  .enum(['ALLOW', 'DENY'])
  .openapi('MobileDeviceAccessRuleEffect')

const DeviceTypeSchema = z
  .string()
  .regex(/[\u0020-\u00FF]+/)
  .min(1)
  .max(256)
  .openapi('DeviceType')

const DeviceTypeListSchema = z.array(DeviceTypeSchema).min(1).max(10).openapi('DeviceTypeList')

const DeviceModelSchema = z
  .string()
  .regex(/[\u0020-\u00FF]+/)
  .min(1)
  .max(256)
  .openapi('DeviceModel')

const DeviceModelListSchema = z.array(DeviceModelSchema).min(1).max(10).openapi('DeviceModelList')

const DeviceOperatingSystemSchema = z
  .string()
  .regex(/[\u0020-\u00FF]+/)
  .min(1)
  .max(256)
  .openapi('DeviceOperatingSystem')

const DeviceOperatingSystemListSchema = z
  .array(DeviceOperatingSystemSchema)
  .min(1)
  .max(10)
  .openapi('DeviceOperatingSystemList')

const DeviceUserAgentSchema = z
  .string()
  .regex(/[\u0020-\u00FF]+/)
  .min(1)
  .max(256)
  .openapi('DeviceUserAgent')

const DeviceUserAgentListSchema = z
  .array(DeviceUserAgentSchema)
  .min(1)
  .max(10)
  .openapi('DeviceUserAgentList')

const CreateMobileDeviceAccessRuleRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The WorkMail organization under which the rule will be created.',
        }),
    ),
    ClientToken: IdempotencyClientTokenSchema.and(
      z.any().openapi({ description: 'The idempotency token for the client request.' }),
    ).exactOptional(),
    Name: MobileDeviceAccessRuleNameSchema.and(z.any().openapi({ description: 'The rule name.' })),
    Description: MobileDeviceAccessRuleDescriptionSchema.and(
      z.any().openapi({ description: 'The rule description.' }),
    ).exactOptional(),
    Effect: MobileDeviceAccessRuleEffectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The effect of the rule when it matches. Allowed values are <code>ALLOW</code> or <code>DENY</code>.',
        }),
    ),
    DeviceTypes: DeviceTypeListSchema.and(
      z.any().openapi({ description: 'Device types that the rule will match.' }),
    ).exactOptional(),
    NotDeviceTypes: DeviceTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Device types that the rule <b>will not</b> match. All other device types will match.',
        }),
    ).exactOptional(),
    DeviceModels: DeviceModelListSchema.and(
      z.any().openapi({ description: 'Device models that the rule will match.' }),
    ).exactOptional(),
    NotDeviceModels: DeviceModelListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Device models that the rule <b>will not</b> match. All other device models will match.',
        }),
    ).exactOptional(),
    DeviceOperatingSystems: DeviceOperatingSystemListSchema.and(
      z.any().openapi({ description: 'Device operating systems that the rule will match.' }),
    ).exactOptional(),
    NotDeviceOperatingSystems: DeviceOperatingSystemListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Device operating systems that the rule <b>will not</b> match. All other device operating systems will match.',
        }),
    ).exactOptional(),
    DeviceUserAgents: DeviceUserAgentListSchema.and(
      z.any().openapi({ description: 'Device user agents that the rule will match.' }),
    ).exactOptional(),
    NotDeviceUserAgents: DeviceUserAgentListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Device user agents that the rule <b>will not</b> match. All other device user agents will match.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OrganizationId', 'Name', 'Effect'],
    title: 'CreateMobileDeviceAccessRuleRequest',
  })
  .openapi('CreateMobileDeviceAccessRuleRequest')

const CreateOrganizationResponseSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The organization ID.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateOrganizationResponse')

const DirectoryIdSchema = z
  .string()
  .regex(/^d-[0-9a-f]{10}$/)
  .length(12)
  .openapi('DirectoryId')

const OrganizationNameSchema = z
  .string()
  .regex(/^(?!d-)([\da-zA-Z]+)([-][\da-zA-Z]+)*/)
  .min(1)
  .max(62)
  .openapi('OrganizationName')

const HostedZoneIdSchema = z
  .string()
  .regex(/[\S\s]*/)
  .min(1)
  .max(32)
  .openapi('HostedZoneId')

const DomainSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The fully qualified domain name.' }),
    ).exactOptional(),
    HostedZoneId: HostedZoneIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The hosted zone ID for a domain hosted in Route 53. Required when configuring a domain hosted in Route 53.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The domain to associate with an WorkMail organization.</p> <p>When you configure a domain hosted in Amazon Route 53 (Route 53), all recommended DNS records are added to the organization when you create it. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> in the <i>WorkMail Administrator Guide</i>.</p>',
    required: [],
  })
  .openapi('Domain')

const DomainsSchema = z.array(DomainSchema).min(0).max(5).openapi('Domains')

const KmsKeyArnSchema = z
  .string()
  .regex(/arn:aws:kms:[a-z0-9-]*:[a-z0-9-]+:[A-Za-z0-9][A-Za-z0-9:_\/+=,@.-]{0,1023}/)
  .min(20)
  .max(2048)
  .openapi('KmsKeyArn')

const BooleanSchema = z.boolean().openapi('Boolean')

const CreateOrganizationRequestSchema = z
  .object({
    DirectoryId: DirectoryIdSchema.and(
      z.any().openapi({ description: 'The AWS Directory Service directory ID.' }),
    ).exactOptional(),
    Alias: OrganizationNameSchema.and(z.any().openapi({ description: 'The organization alias.' })),
    ClientToken: IdempotencyClientTokenSchema.and(
      z.any().openapi({ description: 'The idempotency token associated with the request.' }),
    ).exactOptional(),
    Domains: DomainsSchema.and(
      z.any().openapi({ description: 'The email domains to associate with the organization.' }),
    ).exactOptional(),
    KmsKeyArn: KmsKeyArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of a customer managed key from AWS KMS.',
        }),
    ).exactOptional(),
    EnableInteroperability: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When <code>true</code>, allows organization interoperability between WorkMail and Microsoft Exchange. If <code>true</code>, you must include a AD Connector directory ID in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Alias'], title: 'CreateOrganizationRequest' })
  .openapi('CreateOrganizationRequest')

const DirectoryInUseExceptionSchema = z.any().openapi('DirectoryInUseException')

const CreateResourceResponseSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the new resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateResourceResponse')

const ResourceNameSchema = z
  .string()
  .regex(/[\w\-.]+(@[a-zA-Z0-9.\-]+\.[a-zA-Z0-9-]{2,})?/)
  .min(1)
  .max(20)
  .openapi('ResourceName')

const ResourceTypeSchema = z.enum(['ROOM', 'EQUIPMENT']).openapi('ResourceType')

const CreateResourceRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier associated with the organization for which the resource is created.',
        }),
    ),
    Name: ResourceNameSchema.and(z.any().openapi({ description: 'The name of the new resource.' })),
    Type: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the new resource. The available types are <code>equipment</code> and <code>room</code>.',
        }),
    ),
  })
  .openapi({ required: ['OrganizationId', 'Name', 'Type'], title: 'CreateResourceRequest' })
  .openapi('CreateResourceRequest')

const CreateUserResponseSchema = z
  .object({
    UserId: WorkMailIdentifierSchema.and(
      z.any().openapi({ description: 'The identifier for the new user.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateUserResponse')

const UserNameSchema = z
  .string()
  .regex(/[\w\-.]+(@[a-zA-Z0-9.\-]+\.[a-zA-Z0-9-]{2,})?/)
  .min(1)
  .max(64)
  .openapi('UserName')

const StringSchema = z.string().max(256).openapi('String')

const CreateUserRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the organization for which the user is created.',
        }),
    ),
    Name: UserNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name for the new user. WorkMail directory user names have a maximum length of 64. All others have a maximum length of 20.',
        }),
    ),
    DisplayName: StringSchema.and(
      z.any().openapi({ description: 'The display name for the new user.' }),
    ),
    Password: PasswordSchema.and(
      z.any().openapi({ description: 'The password for the new user.' }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'Name', 'DisplayName', 'Password'],
    title: 'CreateUserRequest',
  })
  .openapi('CreateUserRequest')

const InvalidPasswordExceptionSchema = z.any().openapi('InvalidPasswordException')

const DeleteAccessControlRuleResponseSchema = z
  .object({})
  .openapi('DeleteAccessControlRuleResponse')

const AccessControlRuleNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_-]+/)
  .min(1)
  .max(64)
  .openapi('AccessControlRuleName')

const DeleteAccessControlRuleRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The identifier for the organization.' }),
    ),
    Name: AccessControlRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the access control rule.' }),
    ),
  })
  .openapi({ required: ['OrganizationId', 'Name'], title: 'DeleteAccessControlRuleRequest' })
  .openapi('DeleteAccessControlRuleRequest')

const DeleteAliasResponseSchema = z.object({}).openapi('DeleteAliasResponse')

const DeleteAliasRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for the organization under which the user exists.',
        }),
    ),
    EntityId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the member (user or group) from which to have the aliases removed.',
        }),
    ),
    Alias: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            "The aliases to be removed from the user's set of aliases. Duplicate entries in the list are collapsed into single entries (the list is transformed into a set).",
        }),
    ),
  })
  .openapi({ required: ['OrganizationId', 'EntityId', 'Alias'], title: 'DeleteAliasRequest' })
  .openapi('DeleteAliasRequest')

const DeleteAvailabilityConfigurationResponseSchema = z
  .object({})
  .openapi('DeleteAvailabilityConfigurationResponse')

const DeleteAvailabilityConfigurationRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The WorkMail organization for which the <code>AvailabilityConfiguration</code> will be deleted.',
        }),
    ),
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain for which the <code>AvailabilityConfiguration</code> will be deleted.',
        }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'DomainName'],
    title: 'DeleteAvailabilityConfigurationRequest',
  })
  .openapi('DeleteAvailabilityConfigurationRequest')

const DeleteEmailMonitoringConfigurationResponseSchema = z
  .object({})
  .openapi('DeleteEmailMonitoringConfigurationResponse')

const DeleteEmailMonitoringConfigurationRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the organization from which the email monitoring configuration is deleted.',
        }),
    ),
  })
  .openapi({ required: ['OrganizationId'], title: 'DeleteEmailMonitoringConfigurationRequest' })
  .openapi('DeleteEmailMonitoringConfigurationRequest')

const DeleteGroupResponseSchema = z.object({}).openapi('DeleteGroupResponse')

const DeleteGroupRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The organization that contains the group.' }),
    ),
    GroupId: WorkMailIdentifierSchema.and(
      z.any().openapi({ description: 'The identifier of the group to be deleted.' }),
    ),
  })
  .openapi({ required: ['OrganizationId', 'GroupId'], title: 'DeleteGroupRequest' })
  .openapi('DeleteGroupRequest')

const DeleteImpersonationRoleResponseSchema = z
  .object({})
  .openapi('DeleteImpersonationRoleResponse')

const DeleteImpersonationRoleRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The WorkMail organization from which to delete the impersonation role.',
        }),
    ),
    ImpersonationRoleId: ImpersonationRoleIdSchema.and(
      z.any().openapi({ description: 'The ID of the impersonation role to delete.' }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'ImpersonationRoleId'],
    title: 'DeleteImpersonationRoleRequest',
  })
  .openapi('DeleteImpersonationRoleRequest')

const DeleteMailboxPermissionsResponseSchema = z
  .object({})
  .openapi('DeleteMailboxPermissionsResponse')

const DeleteMailboxPermissionsRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the organization under which the member (user or group) exists.',
        }),
    ),
    EntityId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the member (user or group) that owns the mailbox.',
        }),
    ),
    GranteeId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the member (user or group) for which to delete granted permissions.',
        }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'EntityId', 'GranteeId'],
    title: 'DeleteMailboxPermissionsRequest',
  })
  .openapi('DeleteMailboxPermissionsRequest')

const DeleteMobileDeviceAccessOverrideResponseSchema = z
  .object({})
  .openapi('DeleteMobileDeviceAccessOverrideResponse')

const DeviceIdSchema = z
  .string()
  .regex(/[A-Za-z0-9]+/)
  .min(1)
  .max(32)
  .openapi('DeviceId')

const DeleteMobileDeviceAccessOverrideRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The WorkMail organization for which the access override will be deleted.',
        }),
    ),
    UserId: EntityIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The WorkMail user for which you want to delete the override. Accepts the following types of user identities:</p> <ul> <li> <p>User ID: <code>12345678-1234-1234-1234-123456789012</code> or <code>S-1-1-12-1234567890-123456789-123456789-1234</code> </p> </li> <li> <p>Email address: <code>user@domain.tld</code> </p> </li> <li> <p>User name: <code>user</code> </p> </li> </ul>',
        }),
    ),
    DeviceId: DeviceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The mobile device for which you delete the override. <code>DeviceId</code> is case insensitive.',
        }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'UserId', 'DeviceId'],
    title: 'DeleteMobileDeviceAccessOverrideRequest',
  })
  .openapi('DeleteMobileDeviceAccessOverrideRequest')

const DeleteMobileDeviceAccessRuleResponseSchema = z
  .object({})
  .openapi('DeleteMobileDeviceAccessRuleResponse')

const DeleteMobileDeviceAccessRuleRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The WorkMail organization under which the rule will be deleted.',
        }),
    ),
    MobileDeviceAccessRuleId: MobileDeviceAccessRuleIdSchema.and(
      z.any().openapi({ description: 'The identifier of the rule to be deleted.' }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'MobileDeviceAccessRuleId'],
    title: 'DeleteMobileDeviceAccessRuleRequest',
  })
  .openapi('DeleteMobileDeviceAccessRuleRequest')

const DeleteOrganizationResponseSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The organization ID.' }),
    ).exactOptional(),
    State: StringSchema.and(
      z.any().openapi({ description: 'The state of the organization.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteOrganizationResponse')

const DeleteOrganizationRequestSchema = z
  .object({
    ClientToken: IdempotencyClientTokenSchema.and(
      z.any().openapi({ description: 'The idempotency token associated with the request.' }),
    ).exactOptional(),
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The organization ID.' }),
    ),
    DeleteDirectory: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If true, deletes the AWS Directory Service directory associated with the organization.',
        }),
    ),
  })
  .openapi({ required: ['OrganizationId', 'DeleteDirectory'], title: 'DeleteOrganizationRequest' })
  .openapi('DeleteOrganizationRequest')

const DeleteResourceResponseSchema = z.object({}).openapi('DeleteResourceResponse')

const DeleteResourceRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier associated with the organization from which the resource is deleted.',
        }),
    ),
    ResourceId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the resource to be deleted.' }),
    ),
  })
  .openapi({ required: ['OrganizationId', 'ResourceId'], title: 'DeleteResourceRequest' })
  .openapi('DeleteResourceRequest')

const DeleteRetentionPolicyResponseSchema = z.object({}).openapi('DeleteRetentionPolicyResponse')

const ShortStringSchema = z
  .string()
  .regex(/[a-zA-Z0-9_-]+/)
  .min(1)
  .max(64)
  .openapi('ShortString')

const DeleteRetentionPolicyRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The organization ID.' }),
    ),
    Id: ShortStringSchema.and(z.any().openapi({ description: 'The retention policy ID.' })),
  })
  .openapi({ required: ['OrganizationId', 'Id'], title: 'DeleteRetentionPolicyRequest' })
  .openapi('DeleteRetentionPolicyRequest')

const DeleteUserResponseSchema = z.object({}).openapi('DeleteUserResponse')

const DeleteUserRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The organization that contains the user to be deleted.' }),
    ),
    UserId: WorkMailIdentifierSchema.and(
      z.any().openapi({ description: 'The identifier of the user to be deleted.' }),
    ),
  })
  .openapi({ required: ['OrganizationId', 'UserId'], title: 'DeleteUserRequest' })
  .openapi('DeleteUserRequest')

const DeregisterFromWorkMailResponseSchema = z.object({}).openapi('DeregisterFromWorkMailResponse')

const DeregisterFromWorkMailRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the organization under which the WorkMail entity exists.',
        }),
    ),
    EntityId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier for the member (user or group) to be updated.' }),
    ),
  })
  .openapi({ required: ['OrganizationId', 'EntityId'], title: 'DeregisterFromWorkMailRequest' })
  .openapi('DeregisterFromWorkMailRequest')

const DeregisterMailDomainResponseSchema = z.object({}).openapi('DeregisterMailDomainResponse')

const WorkMailDomainNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9.-]+\.[a-zA-Z-]{2,}/)
  .min(3)
  .max(209)
  .openapi('WorkMailDomainName')

const DeregisterMailDomainRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The WorkMail organization for which the domain will be deregistered.',
        }),
    ),
    DomainName: WorkMailDomainNameSchema.and(
      z.any().openapi({ description: 'The domain to deregister in WorkMail and SES.' }),
    ),
  })
  .openapi({ required: ['OrganizationId', 'DomainName'], title: 'DeregisterMailDomainRequest' })
  .openapi('DeregisterMailDomainRequest')

const MailDomainInUseExceptionSchema = z.any().openapi('MailDomainInUseException')

const InvalidCustomSesConfigurationExceptionSchema = z
  .any()
  .openapi('InvalidCustomSesConfigurationException')

const RoleArnSchema = z.string().min(20).max(2048).openapi('RoleArn')

const LogGroupArnSchema = z
  .string()
  .regex(/arn:aws:logs:[a-z\-0-9]*:[0-9]{12}:log-group:([\.\-_\/#A-Za-z0-9]+):\*$/)
  .min(47)
  .max(562)
  .openapi('LogGroupArn')

const DescribeEmailMonitoringConfigurationResponseSchema = z
  .object({
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM Role associated with the email monitoring configuration.',
        }),
    ).exactOptional(),
    LogGroupArn: LogGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the CloudWatch Log group associated with the email monitoring configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEmailMonitoringConfigurationResponse')

const DescribeEmailMonitoringConfigurationRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the organization for which the email monitoring configuration is described.',
        }),
    ),
  })
  .openapi({ required: ['OrganizationId'], title: 'DescribeEmailMonitoringConfigurationRequest' })
  .openapi('DescribeEmailMonitoringConfigurationRequest')

const EntityStateSchema = z.enum(['ENABLED', 'DISABLED', 'DELETED']).openapi('EntityState')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const DescribeGroupResponseSchema = z
  .object({
    GroupId: WorkMailIdentifierSchema.and(
      z.any().openapi({ description: 'The identifier of the described group.' }),
    ).exactOptional(),
    Name: GroupNameSchema.and(
      z.any().openapi({ description: 'The name of the described group.' }),
    ).exactOptional(),
    Email: EmailAddressSchema.and(
      z.any().openapi({ description: 'The email of the described group.' }),
    ).exactOptional(),
    State: EntityStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state of the user: enabled (registered to WorkMail) or disabled (deregistered or never registered to WorkMail).',
        }),
    ).exactOptional(),
    EnabledDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when a user was registered to WorkMail, in UNIX epoch time format.',
        }),
    ).exactOptional(),
    DisabledDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when a user was deregistered from WorkMail, in UNIX epoch time format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeGroupResponse')

const DescribeGroupRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for the organization under which the group exists.',
        }),
    ),
    GroupId: WorkMailIdentifierSchema.and(
      z.any().openapi({ description: 'The identifier for the group to be described.' }),
    ),
  })
  .openapi({ required: ['OrganizationId', 'GroupId'], title: 'DescribeGroupRequest' })
  .openapi('DescribeGroupRequest')

const DescribeInboundDmarcSettingsResponseSchema = z
  .object({
    Enforced: BooleanSchema.and(
      z.any().openapi({ description: 'Lists the enforcement setting of the applied policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeInboundDmarcSettingsResponse')

const DescribeInboundDmarcSettingsRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'Lists the ID of the given organization.' }),
    ),
  })
  .openapi({ required: ['OrganizationId'], title: 'DescribeInboundDmarcSettingsRequest' })
  .openapi('DescribeInboundDmarcSettingsRequest')

const DescriptionSchema = z
  .string()
  .regex(/[\S\s]*/)
  .min(0)
  .max(1023)
  .openapi('Description')

const S3BucketNameSchema = z
  .string()
  .regex(/[A-Za-z0-9.-]+/)
  .min(1)
  .max(63)
  .openapi('S3BucketName')

const S3ObjectKeySchema = z
  .string()
  .regex(/[A-Za-z0-9!_.*'()\/-]+/)
  .min(1)
  .max(1023)
  .openapi('S3ObjectKey')

const PercentageSchema = z.int().min(0).max(100).openapi('Percentage')

const MailboxExportJobStateSchema = z
  .enum(['RUNNING', 'COMPLETED', 'FAILED', 'CANCELLED'])
  .openapi('MailboxExportJobState')

const MailboxExportErrorInfoSchema = z
  .string()
  .regex(/[\S\s]*/)
  .min(1)
  .max(1024)
  .openapi('MailboxExportErrorInfo')

const DescribeMailboxExportJobResponseSchema = z
  .object({
    EntityId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the user or resource associated with the mailbox.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The mailbox export job description.' }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the AWS Identity and Access Management (IAM) role that grants write permission to the Amazon Simple Storage Service (Amazon S3) bucket.',
        }),
    ).exactOptional(),
    KmsKeyArn: KmsKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the symmetric AWS Key Management Service (AWS KMS) key that encrypts the exported mailbox content.',
        }),
    ).exactOptional(),
    S3BucketName: S3BucketNameSchema.and(
      z.any().openapi({ description: 'The name of the S3 bucket.' }),
    ).exactOptional(),
    S3Prefix: S3ObjectKeySchema.and(
      z.any().openapi({ description: 'The S3 bucket prefix.' }),
    ).exactOptional(),
    S3Path: S3ObjectKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The path to the S3 bucket and file that the mailbox export job is exporting to.',
        }),
    ).exactOptional(),
    EstimatedProgress: PercentageSchema.and(
      z
        .any()
        .openapi({
          description: 'The estimated progress of the mailbox export job, in percentage points.',
        }),
    ).exactOptional(),
    State: MailboxExportJobStateSchema.and(
      z.any().openapi({ description: 'The state of the mailbox export job.' }),
    ).exactOptional(),
    ErrorInfo: MailboxExportErrorInfoSchema.and(
      z.any().openapi({ description: 'Error information for failed mailbox export jobs.' }),
    ).exactOptional(),
    StartTime: TimestampSchema.and(
      z.any().openapi({ description: 'The mailbox export job start timestamp.' }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The mailbox export job end timestamp.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeMailboxExportJobResponse')

const DescribeMailboxExportJobRequestSchema = z
  .object({
    JobId: MailboxExportJobIdSchema.and(
      z.any().openapi({ description: 'The mailbox export job ID.' }),
    ),
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The organization ID.' }),
    ),
  })
  .openapi({ required: ['JobId', 'OrganizationId'], title: 'DescribeMailboxExportJobRequest' })
  .openapi('DescribeMailboxExportJobRequest')

const AmazonResourceNameSchema = z.string().min(1).max(1011).openapi('AmazonResourceName')

const DescribeOrganizationResponseSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The identifier of an organization.' }),
    ).exactOptional(),
    Alias: OrganizationNameSchema.and(
      z.any().openapi({ description: 'The alias for an organization.' }),
    ).exactOptional(),
    State: StringSchema.and(
      z.any().openapi({ description: 'The state of an organization.' }),
    ).exactOptional(),
    DirectoryId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for the directory associated with an WorkMail organization.',
        }),
    ).exactOptional(),
    DirectoryType: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of directory associated with the WorkMail organization.',
        }),
    ).exactOptional(),
    DefaultMailDomain: StringSchema.and(
      z.any().openapi({ description: 'The default mail domain associated with the organization.' }),
    ).exactOptional(),
    CompletedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date at which the organization became usable in the WorkMail context, in UNIX epoch time format.',
        }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) The error message indicating if unexpected behavior was encountered with regards to the organization.',
        }),
    ).exactOptional(),
    ARN: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the organization.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeOrganizationResponse')

const DescribeOrganizationRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The identifier for the organization to be described.' }),
    ),
  })
  .openapi({ required: ['OrganizationId'], title: 'DescribeOrganizationRequest' })
  .openapi('DescribeOrganizationRequest')

const BookingOptionsSchema = z
  .object({
    AutoAcceptRequests: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "The resource's ability to automatically reply to requests. If disabled, delegates must be associated to the resource.",
        }),
    ).exactOptional(),
    AutoDeclineRecurringRequests: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: "The resource's ability to automatically decline any recurring requests.",
        }),
    ).exactOptional(),
    AutoDeclineConflictingRequests: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: "The resource's ability to automatically decline any conflicting requests.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'At least one delegate must be associated to the resource to disable automatic replies from the resource.',
    required: [],
  })
  .openapi('BookingOptions')

const DescribeResourceResponseSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the described resource.' }),
    ).exactOptional(),
    Email: EmailAddressSchema.and(
      z.any().openapi({ description: 'The email of the described resource.' }),
    ).exactOptional(),
    Name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the described resource.' }),
    ).exactOptional(),
    Type: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of the described resource.' }),
    ).exactOptional(),
    BookingOptions: BookingOptionsSchema.and(
      z.any().openapi({ description: 'The booking options for the described resource.' }),
    ).exactOptional(),
    State: EntityStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state of the resource: enabled (registered to WorkMail), disabled (deregistered or never registered to WorkMail), or deleted.',
        }),
    ).exactOptional(),
    EnabledDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when a resource was enabled for WorkMail, in UNIX epoch time format.',
        }),
    ).exactOptional(),
    DisabledDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when a resource was disabled from WorkMail, in UNIX epoch time format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeResourceResponse')

const DescribeResourceRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier associated with the organization for which the resource is described.',
        }),
    ),
    ResourceId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the resource to be described.' }),
    ),
  })
  .openapi({ required: ['OrganizationId', 'ResourceId'], title: 'DescribeResourceRequest' })
  .openapi('DescribeResourceRequest')

const UserRoleSchema = z.enum(['USER', 'RESOURCE', 'SYSTEM_USER']).openapi('UserRole')

const DescribeUserResponseSchema = z
  .object({
    UserId: WorkMailIdentifierSchema.and(
      z.any().openapi({ description: 'The identifier for the described user.' }),
    ).exactOptional(),
    Name: UserNameSchema.and(
      z.any().openapi({ description: 'The name for the user.' }),
    ).exactOptional(),
    Email: EmailAddressSchema.and(
      z.any().openapi({ description: 'The email of the user.' }),
    ).exactOptional(),
    DisplayName: StringSchema.and(
      z.any().openapi({ description: 'The display name of the user.' }),
    ).exactOptional(),
    State: EntityStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state of a user: enabled (registered to WorkMail) or disabled (deregistered or never registered to WorkMail).',
        }),
    ).exactOptional(),
    UserRole: UserRoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'In certain cases, other entities are modeled as users. If interoperability is enabled, resources are imported into WorkMail as users. Because different WorkMail organizations rely on different directory types, administrators can distinguish between an unregistered user (account is disabled and has a user role) and the directory administrators. The values are USER, RESOURCE, and SYSTEM_USER.',
        }),
    ).exactOptional(),
    EnabledDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time at which the user was enabled for WorkMailusage, in UNIX epoch time format.',
        }),
    ).exactOptional(),
    DisabledDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time at which the user was disabled for WorkMail usage, in UNIX epoch time format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeUserResponse')

const DescribeUserRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for the organization under which the user exists.',
        }),
    ),
    UserId: WorkMailIdentifierSchema.and(
      z.any().openapi({ description: 'The identifier for the user to be described.' }),
    ),
  })
  .openapi({ required: ['OrganizationId', 'UserId'], title: 'DescribeUserRequest' })
  .openapi('DescribeUserRequest')

const DisassociateDelegateFromResourceResponseSchema = z
  .object({})
  .openapi('DisassociateDelegateFromResourceResponse')

const DisassociateDelegateFromResourceRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for the organization under which the resource exists.',
        }),
    ),
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier of the resource from which delegates' set members are removed. ",
        }),
    ),
    EntityId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier for the member (user, group) to be removed from the resource's delegates.",
        }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'ResourceId', 'EntityId'],
    title: 'DisassociateDelegateFromResourceRequest',
  })
  .openapi('DisassociateDelegateFromResourceRequest')

const DisassociateMemberFromGroupResponseSchema = z
  .object({})
  .openapi('DisassociateMemberFromGroupResponse')

const DisassociateMemberFromGroupRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for the organization under which the group exists.',
        }),
    ),
    GroupId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier for the group from which members are removed.' }),
    ),
    MemberId: WorkMailIdentifierSchema.and(
      z.any().openapi({ description: 'The identifier for the member to be removed to the group.' }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'GroupId', 'MemberId'],
    title: 'DisassociateMemberFromGroupRequest',
  })
  .openapi('DisassociateMemberFromGroupRequest')

const AccessControlRuleEffectSchema = z.enum(['ALLOW', 'DENY']).openapi('AccessControlRuleEffect')

const AccessControlRuleNameListSchema = z
  .array(AccessControlRuleNameSchema)
  .min(0)
  .max(10)
  .openapi('AccessControlRuleNameList')

const GetAccessControlEffectResponseSchema = z
  .object({
    Effect: AccessControlRuleEffectSchema.and(
      z.any().openapi({ description: 'The rule effect.' }),
    ).exactOptional(),
    MatchedRules: AccessControlRuleNameListSchema.and(
      z
        .any()
        .openapi({
          description: 'The rules that match the given parameters, resulting in an effect.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAccessControlEffectResponse')

const IpAddressSchema = z
  .string()
  .regex(
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,
  )
  .min(1)
  .max(15)
  .openapi('IpAddress')

const AccessControlRuleActionSchema = z
  .string()
  .regex(/[a-zA-Z]+/)
  .min(1)
  .max(64)
  .openapi('AccessControlRuleAction')

const GetAccessControlEffectRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The identifier for the organization.' }),
    ),
    IpAddress: IpAddressSchema.and(z.any().openapi({ description: 'The IPv4 address.' })),
    Action: AccessControlRuleActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The access protocol action. Valid values include <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>, <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.',
        }),
    ),
    UserId: WorkMailIdentifierSchema.and(
      z.any().openapi({ description: 'The user ID.' }),
    ).exactOptional(),
    ImpersonationRoleId: ImpersonationRoleIdSchema.and(
      z.any().openapi({ description: 'The impersonation role ID.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OrganizationId', 'IpAddress', 'Action'],
    title: 'GetAccessControlEffectRequest',
  })
  .openapi('GetAccessControlEffectRequest')

const FolderNameSchema = z
  .enum(['INBOX', 'DELETED_ITEMS', 'SENT_ITEMS', 'DRAFTS', 'JUNK_EMAIL'])
  .openapi('FolderName')

const RetentionActionSchema = z
  .enum(['NONE', 'DELETE', 'PERMANENTLY_DELETE'])
  .openapi('RetentionAction')

const RetentionPeriodSchema = z.int().min(1).max(730).openapi('RetentionPeriod')

const FolderConfigurationSchema = z
  .object({
    Name: FolderNameSchema.and(z.any().openapi({ description: 'The folder name.' })),
    Action: RetentionActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The action to take on the folder contents at the end of the folder configuration period.',
        }),
    ),
    Period: RetentionPeriodSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of days for which the folder-configuration action applies.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Action'],
    description: "The configuration applied to an organization's folders by its retention policy.",
  })
  .openapi('FolderConfiguration')

const FolderConfigurationsSchema = z
  .array(FolderConfigurationSchema)
  .openapi('FolderConfigurations')

const GetDefaultRetentionPolicyResponseSchema = z
  .object({
    Id: ShortStringSchema.and(
      z.any().openapi({ description: 'The retention policy ID.' }),
    ).exactOptional(),
    Name: ShortStringSchema.and(
      z.any().openapi({ description: 'The retention policy name.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The retention policy description.' }),
    ).exactOptional(),
    FolderConfigurations: FolderConfigurationsSchema.and(
      z.any().openapi({ description: 'The retention policy folder configurations.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDefaultRetentionPolicyResponse')

const GetDefaultRetentionPolicyRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The organization ID.' }),
    ),
  })
  .openapi({ required: ['OrganizationId'], title: 'GetDefaultRetentionPolicyRequest' })
  .openapi('GetDefaultRetentionPolicyRequest')

const GetImpersonationRoleResponseSchema = z
  .object({
    ImpersonationRoleId: ImpersonationRoleIdSchema.and(
      z.any().openapi({ description: 'The impersonation role ID.' }),
    ).exactOptional(),
    Name: ImpersonationRoleNameSchema.and(
      z.any().openapi({ description: 'The impersonation role name.' }),
    ).exactOptional(),
    Type: ImpersonationRoleTypeSchema.and(
      z.any().openapi({ description: 'The impersonation role type.' }),
    ).exactOptional(),
    Description: ImpersonationRoleDescriptionSchema.and(
      z.any().openapi({ description: 'The impersonation role description.' }),
    ).exactOptional(),
    Rules: ImpersonationRuleListSchema.and(
      z.any().openapi({ description: 'The list of rules for the given impersonation role.' }),
    ).exactOptional(),
    DateCreated: TimestampSchema.and(
      z.any().openapi({ description: 'The date when the impersonation role was created.' }),
    ).exactOptional(),
    DateModified: TimestampSchema.and(
      z.any().openapi({ description: 'The date when the impersonation role was last modified.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetImpersonationRoleResponse')

const GetImpersonationRoleRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The WorkMail organization from which to retrieve the impersonation role.',
        }),
    ),
    ImpersonationRoleId: ImpersonationRoleIdSchema.and(
      z.any().openapi({ description: 'The impersonation role ID to retrieve.' }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'ImpersonationRoleId'],
    title: 'GetImpersonationRoleRequest',
  })
  .openapi('GetImpersonationRoleRequest')

const ImpersonationMatchedRuleSchema = z
  .object({
    ImpersonationRuleId: ImpersonationRuleIdSchema.and(
      z.any().openapi({ description: 'The ID of the rule that matched the input' }),
    ).exactOptional(),
    Name: ImpersonationRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the rule that matched the input.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The impersonation rule that matched the input.', required: [] })
  .openapi('ImpersonationMatchedRule')

const ImpersonationMatchedRuleListSchema = z
  .array(ImpersonationMatchedRuleSchema)
  .min(0)
  .max(10)
  .openapi('ImpersonationMatchedRuleList')

const GetImpersonationRoleEffectResponseSchema = z
  .object({
    Type: ImpersonationRoleTypeSchema.and(
      z.any().openapi({ description: 'The impersonation role type.' }),
    ).exactOptional(),
    Effect: AccessEffectSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code/>Effect of the impersonation role on the target user based on its rules. Available effects are <code>ALLOW</code> or <code>DENY</code>.',
        }),
    ).exactOptional(),
    MatchedRules: ImpersonationMatchedRuleListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the rules that match the input and produce the configured effect.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetImpersonationRoleEffectResponse')

const GetImpersonationRoleEffectRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The WorkMail organization where the impersonation role is defined.',
        }),
    ),
    ImpersonationRoleId: ImpersonationRoleIdSchema.and(
      z.any().openapi({ description: 'The impersonation role ID to test.' }),
    ),
    TargetUser: EntityIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The WorkMail organization user chosen to test the impersonation role. The following identity formats are available:</p> <ul> <li> <p>User ID: <code>12345678-1234-1234-1234-123456789012</code> or <code>S-1-1-12-1234567890-123456789-123456789-1234</code> </p> </li> <li> <p>Email address: <code>user@domain.tld</code> </p> </li> <li> <p>User name: <code>user</code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'ImpersonationRoleId', 'TargetUser'],
    title: 'GetImpersonationRoleEffectRequest',
  })
  .openapi('GetImpersonationRoleEffectRequest')

const DnsRecordSchema = z
  .object({
    Type: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The RFC 1035 record type. Possible values: <code>CNAME</code>, <code>A</code>, <code>MX</code>.',
        }),
    ).exactOptional(),
    Hostname: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The DNS hostname.- For example, <code>domain.example.com</code>.',
        }),
    ).exactOptional(),
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value returned by the DNS for a query to that hostname and record type.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A DNS record uploaded to your DNS provider.', required: [] })
  .openapi('DnsRecord')

const DnsRecordsSchema = z.array(DnsRecordSchema).openapi('DnsRecords')

const DnsRecordVerificationStatusSchema = z
  .enum(['PENDING', 'VERIFIED', 'FAILED'])
  .openapi('DnsRecordVerificationStatus')

const GetMailDomainResponseSchema = z
  .object({
    Records: DnsRecordsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the DNS records that WorkMail recommends adding in your DNS provider for the best user experience. The records configure your domain with DMARC, SPF, DKIM, and direct incoming email traffic to SES. See admin guide for more details.',
        }),
    ).exactOptional(),
    IsTestDomain: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the domain is a test domain provided by WorkMail, or a custom domain.',
        }),
    ).exactOptional(),
    IsDefault: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether the domain is the default domain for your organization.',
        }),
    ).exactOptional(),
    OwnershipVerificationStatus: DnsRecordVerificationStatusSchema.and(
      z
        .any()
        .openapi({ description: ' Indicates the status of the domain ownership verification.' }),
    ).exactOptional(),
    DkimVerificationStatus: DnsRecordVerificationStatusSchema.and(
      z.any().openapi({ description: 'Indicates the status of a DKIM verification.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMailDomainResponse')

const GetMailDomainRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({ description: 'The WorkMail organization for which the domain is retrieved.' }),
    ),
    DomainName: WorkMailDomainNameSchema.and(
      z.any().openapi({ description: 'The domain from which you want to retrieve details.' }),
    ),
  })
  .openapi({ required: ['OrganizationId', 'DomainName'], title: 'GetMailDomainRequest' })
  .openapi('GetMailDomainRequest')

const MailboxQuotaSchema = z.int().min(1).openapi('MailboxQuota')

const MailboxSizeSchema = z.float64().min(0).openapi('MailboxSize')

const GetMailboxDetailsResponseSchema = z
  .object({
    MailboxQuota: MailboxQuotaSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum allowed mailbox size, in MB, for the specified user.',
        }),
    ).exactOptional(),
    MailboxSize: MailboxSizeSchema.and(
      z.any().openapi({ description: 'The current mailbox size, in MB, for the specified user.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMailboxDetailsResponse')

const GetMailboxDetailsRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the organization that contains the user whose mailbox details are being requested.',
        }),
    ),
    UserId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for the user whose mailbox details are being requested.',
        }),
    ),
  })
  .openapi({ required: ['OrganizationId', 'UserId'], title: 'GetMailboxDetailsRequest' })
  .openapi('GetMailboxDetailsRequest')

const MobileDeviceAccessMatchedRuleSchema = z
  .object({
    MobileDeviceAccessRuleId: MobileDeviceAccessRuleIdSchema.and(
      z.any().openapi({ description: 'Identifier of the rule that a simulated user matches.' }),
    ).exactOptional(),
    Name: MobileDeviceAccessRuleNameSchema.and(
      z.any().openapi({ description: 'Name of a rule that a simulated user matches.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The rule that a simulated user matches.', required: [] })
  .openapi('MobileDeviceAccessMatchedRule')

const MobileDeviceAccessMatchedRuleListSchema = z
  .array(MobileDeviceAccessMatchedRuleSchema)
  .min(0)
  .max(10)
  .openapi('MobileDeviceAccessMatchedRuleList')

const GetMobileDeviceAccessEffectResponseSchema = z
  .object({
    Effect: MobileDeviceAccessRuleEffectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The effect of the simulated access, <code>ALLOW</code> or <code>DENY</code>, after evaluating mobile device access rules in the WorkMail organization for the simulated user parameters.',
        }),
    ).exactOptional(),
    MatchedRules: MobileDeviceAccessMatchedRuleListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the rules which matched the simulated user input and produced the effect.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMobileDeviceAccessEffectResponse')

const GetMobileDeviceAccessEffectRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({ description: 'The WorkMail organization to simulate the access effect for.' }),
    ),
    DeviceType: DeviceTypeSchema.and(
      z.any().openapi({ description: 'Device type the simulated user will report.' }),
    ).exactOptional(),
    DeviceModel: DeviceModelSchema.and(
      z.any().openapi({ description: 'Device model the simulated user will report.' }),
    ).exactOptional(),
    DeviceOperatingSystem: DeviceOperatingSystemSchema.and(
      z.any().openapi({ description: 'Device operating system the simulated user will report.' }),
    ).exactOptional(),
    DeviceUserAgent: DeviceUserAgentSchema.and(
      z.any().openapi({ description: 'Device user agent the simulated user will report.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['OrganizationId'], title: 'GetMobileDeviceAccessEffectRequest' })
  .openapi('GetMobileDeviceAccessEffectRequest')

const GetMobileDeviceAccessOverrideResponseSchema = z
  .object({
    UserId: WorkMailIdentifierSchema.and(
      z.any().openapi({ description: 'The WorkMail user to which the access override applies.' }),
    ).exactOptional(),
    DeviceId: DeviceIdSchema.and(
      z.any().openapi({ description: 'The device to which the access override applies.' }),
    ).exactOptional(),
    Effect: MobileDeviceAccessRuleEffectSchema.and(
      z
        .any()
        .openapi({
          description: 'The effect of the override, <code>ALLOW</code> or <code>DENY</code>.',
        }),
    ).exactOptional(),
    Description: MobileDeviceAccessRuleDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the override.' }),
    ).exactOptional(),
    DateCreated: TimestampSchema.and(
      z.any().openapi({ description: 'The date the override was first created.' }),
    ).exactOptional(),
    DateModified: TimestampSchema.and(
      z.any().openapi({ description: 'The date the description was last modified.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMobileDeviceAccessOverrideResponse')

const GetMobileDeviceAccessOverrideRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The WorkMail organization to which you want to apply the override.',
        }),
    ),
    UserId: EntityIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Identifies the WorkMail user for the override. Accepts the following types of user identities: </p> <ul> <li> <p>User ID: <code>12345678-1234-1234-1234-123456789012</code> or <code>S-1-1-12-1234567890-123456789-123456789-1234</code> </p> </li> <li> <p>Email address: <code>user@domain.tld</code> </p> </li> <li> <p>User name: <code>user</code> </p> </li> </ul>',
        }),
    ),
    DeviceId: DeviceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The mobile device to which the override applies. <code>DeviceId</code> is case insensitive.',
        }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'UserId', 'DeviceId'],
    title: 'GetMobileDeviceAccessOverrideRequest',
  })
  .openapi('GetMobileDeviceAccessOverrideRequest')

const AccessControlRuleDescriptionSchema = z
  .string()
  .regex(/[\u0020-\u00FF]+/)
  .min(0)
  .max(255)
  .openapi('AccessControlRuleDescription')

const IpRangeSchema = z
  .string()
  .regex(
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\/([0-9]|[12][0-9]|3[0-2])$/,
  )
  .min(1)
  .max(18)
  .openapi('IpRange')

const IpRangeListSchema = z.array(IpRangeSchema).min(0).max(1024).openapi('IpRangeList')

const ActionsListSchema = z
  .array(AccessControlRuleActionSchema)
  .min(0)
  .max(10)
  .openapi('ActionsList')

const UserIdListSchema = z.array(WorkMailIdentifierSchema).min(0).max(10).openapi('UserIdList')

const ImpersonationRoleIdListSchema = z
  .array(ImpersonationRoleIdSchema)
  .min(0)
  .max(10)
  .openapi('ImpersonationRoleIdList')

const AccessControlRuleSchema = z
  .object({
    Name: AccessControlRuleNameSchema.and(
      z.any().openapi({ description: 'The rule name.' }),
    ).exactOptional(),
    Effect: AccessControlRuleEffectSchema.and(
      z.any().openapi({ description: 'The rule effect.' }),
    ).exactOptional(),
    Description: AccessControlRuleDescriptionSchema.and(
      z.any().openapi({ description: 'The rule description.' }),
    ).exactOptional(),
    IpRanges: IpRangeListSchema.and(
      z.any().openapi({ description: 'IPv4 CIDR ranges to include in the rule.' }),
    ).exactOptional(),
    NotIpRanges: IpRangeListSchema.and(
      z.any().openapi({ description: 'IPv4 CIDR ranges to exclude from the rule.' }),
    ).exactOptional(),
    Actions: ActionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Access protocol actions to include in the rule. Valid values include <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>, <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.',
        }),
    ).exactOptional(),
    NotActions: ActionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Access protocol actions to exclude from the rule. Valid values include <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>, <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.',
        }),
    ).exactOptional(),
    UserIds: UserIdListSchema.and(
      z.any().openapi({ description: 'User IDs to include in the rule.' }),
    ).exactOptional(),
    NotUserIds: UserIdListSchema.and(
      z.any().openapi({ description: 'User IDs to exclude from the rule.' }),
    ).exactOptional(),
    DateCreated: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the rule was created.' }),
    ).exactOptional(),
    DateModified: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the rule was modified.' }),
    ).exactOptional(),
    ImpersonationRoleIds: ImpersonationRoleIdListSchema.and(
      z.any().openapi({ description: 'Impersonation role IDs to include in the rule.' }),
    ).exactOptional(),
    NotImpersonationRoleIds: ImpersonationRoleIdListSchema.and(
      z.any().openapi({ description: 'Impersonation role IDs to exclude from the rule.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A rule that controls access to an WorkMail organization.',
    required: [],
  })
  .openapi('AccessControlRule')

const AccessControlRulesListSchema = z
  .array(AccessControlRuleSchema)
  .min(0)
  .max(10)
  .openapi('AccessControlRulesList')

const ListAccessControlRulesResponseSchema = z
  .object({
    Rules: AccessControlRulesListSchema.and(
      z.any().openapi({ description: 'The access control rules.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAccessControlRulesResponse')

const ListAccessControlRulesRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The identifier for the organization.' }),
    ),
  })
  .openapi({ required: ['OrganizationId'], title: 'ListAccessControlRulesRequest' })
  .openapi('ListAccessControlRulesRequest')

const AliasesSchema = z.array(EmailAddressSchema).openapi('Aliases')

const NextTokenSchema = z
  .string()
  .regex(/[\S\s]*|[a-zA-Z0-9\/+=]{1,1024}/)
  .min(1)
  .max(1024)
  .openapi('NextToken')

const ListAliasesResponseSchema = z
  .object({
    Aliases: AliasesSchema.and(
      z.any().openapi({ description: "The entity's paginated aliases." }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAliasesResponse')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListAliasesRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for the organization under which the entity exists.',
        }),
    ),
    EntityId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier for the entity for which to list the aliases.' }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. The first call does not contain any tokens.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in a single call.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['OrganizationId', 'EntityId'], title: 'ListAliasesRequest' })
  .openapi('ListAliasesRequest')

const AvailabilityProviderTypeSchema = z.enum(['EWS', 'LAMBDA']).openapi('AvailabilityProviderType')

const RedactedEwsAvailabilityProviderSchema = z
  .object({
    EwsEndpoint: UrlSchema.and(
      z.any().openapi({ description: 'The endpoint of the remote EWS server.' }),
    ).exactOptional(),
    EwsUsername: ExternalUserNameSchema.and(
      z.any().openapi({ description: 'The username used to authenticate the remote EWS server.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes an EWS based availability provider when returned from the service. It does not contain the password of the endpoint.',
    required: [],
  })
  .openapi('RedactedEwsAvailabilityProvider')

const AvailabilityConfigurationSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'Displays the domain to which the provider applies.' }),
    ).exactOptional(),
    ProviderType: AvailabilityProviderTypeSchema.and(
      z.any().openapi({ description: 'Displays the provider type that applies to this domain.' }),
    ).exactOptional(),
    EwsProvider: RedactedEwsAvailabilityProviderSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>ProviderType</code> is <code>EWS</code>, then this field contains <code>RedactedEwsAvailabilityProvider</code>. Otherwise, it is not required.',
        }),
    ).exactOptional(),
    LambdaProvider: LambdaAvailabilityProviderSchema.and(
      z
        .any()
        .openapi({
          description:
            'If ProviderType is <code>LAMBDA</code> then this field contains <code>LambdaAvailabilityProvider</code>. Otherwise, it is not required.',
        }),
    ).exactOptional(),
    DateCreated: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time at which the availability configuration was created.',
        }),
    ).exactOptional(),
    DateModified: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time at which the availability configuration was last modified.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail organization.",
    required: [],
  })
  .openapi('AvailabilityConfiguration')

const AvailabilityConfigurationListSchema = z
  .array(AvailabilityConfigurationSchema)
  .openapi('AvailabilityConfigurationList')

const ListAvailabilityConfigurationsResponseSchema = z
  .object({
    AvailabilityConfigurations: AvailabilityConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            "The list of <code>AvailabilityConfiguration</code>'s that exist for the specified WorkMail organization.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. The value is <code>null</code> when there are no further results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAvailabilityConfigurationsResponse')

const ListAvailabilityConfigurationsRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The WorkMail organization for which the <code>AvailabilityConfiguration</code>'s will be listed.",
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in a single call.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. The first call does not require a token.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['OrganizationId'], title: 'ListAvailabilityConfigurationsRequest' })
  .openapi('ListAvailabilityConfigurationsRequest')

const MemberTypeSchema = z.enum(['GROUP', 'USER']).openapi('MemberType')

const MemberSchema = z
  .object({
    Id: StringSchema.and(
      z.any().openapi({ description: 'The identifier of the member.' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the member.' }),
    ).exactOptional(),
    Type: MemberTypeSchema.and(
      z.any().openapi({ description: 'A member can be a user or group.' }),
    ).exactOptional(),
    State: EntityStateSchema.and(
      z
        .any()
        .openapi({
          description: 'The state of the member, which can be ENABLED, DISABLED, or DELETED.',
        }),
    ).exactOptional(),
    EnabledDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date indicating when the member was enabled for WorkMail use.',
        }),
    ).exactOptional(),
    DisabledDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date indicating when the member was disabled from WorkMail use.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The representation of a user or group.', required: [] })
  .openapi('Member')

const MembersSchema = z.array(MemberSchema).openapi('Members')

const ListGroupMembersResponseSchema = z
  .object({
    Members: MembersSchema.and(
      z.any().openapi({ description: 'The members associated to the group.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. The first call does not contain any tokens.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListGroupMembersResponse')

const ListGroupMembersRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for the organization under which the group exists.',
        }),
    ),
    GroupId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the group to which the members (users or groups) are associated.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The token to use to retrieve the next page of results. The first call does not contain any tokens.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in a single call.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['OrganizationId', 'GroupId'], title: 'ListGroupMembersRequest' })
  .openapi('ListGroupMembersRequest')

const GroupSchema = z
  .object({
    Id: WorkMailIdentifierSchema.and(
      z.any().openapi({ description: 'The identifier of the group.' }),
    ).exactOptional(),
    Email: EmailAddressSchema.and(
      z.any().openapi({ description: 'The email of the group.' }),
    ).exactOptional(),
    Name: GroupNameSchema.and(
      z.any().openapi({ description: 'The name of the group.' }),
    ).exactOptional(),
    State: EntityStateSchema.and(
      z
        .any()
        .openapi({
          description: 'The state of the group, which can be ENABLED, DISABLED, or DELETED.',
        }),
    ).exactOptional(),
    EnabledDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date indicating when the group was enabled for WorkMail use.',
        }),
    ).exactOptional(),
    DisabledDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date indicating when the group was disabled from WorkMail use.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The representation of an WorkMail group.', required: [] })
  .openapi('Group')

const GroupsSchema = z.array(GroupSchema).openapi('Groups')

const ListGroupsResponseSchema = z
  .object({
    Groups: GroupsSchema.and(
      z.any().openapi({ description: 'The overview of groups for an organization.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListGroupsResponse')

const ListGroupsRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for the organization under which the groups exist.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. The first call does not contain any tokens.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in a single call.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['OrganizationId'], title: 'ListGroupsRequest' })
  .openapi('ListGroupsRequest')

const ImpersonationRoleSchema = z
  .object({
    ImpersonationRoleId: ImpersonationRoleIdSchema.and(
      z.any().openapi({ description: 'The identifier of the impersonation role.' }),
    ).exactOptional(),
    Name: ImpersonationRoleNameSchema.and(
      z.any().openapi({ description: 'The impersonation role name.' }),
    ).exactOptional(),
    Type: ImpersonationRoleTypeSchema.and(
      z.any().openapi({ description: 'The impersonation role type.' }),
    ).exactOptional(),
    DateCreated: TimestampSchema.and(
      z.any().openapi({ description: 'The date when the impersonation role was created.' }),
    ).exactOptional(),
    DateModified: TimestampSchema.and(
      z.any().openapi({ description: 'The date when the impersonation role was last modified.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An impersonation role for the given WorkMail organization.',
    required: [],
  })
  .openapi('ImpersonationRole')

const ImpersonationRoleListSchema = z
  .array(ImpersonationRoleSchema)
  .min(0)
  .max(20)
  .openapi('ImpersonationRoleList')

const ListImpersonationRolesResponseSchema = z
  .object({
    Roles: ImpersonationRoleListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of impersonation roles under the given WorkMail organization.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next page of results. The value is <code>null</code> when there are no results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListImpersonationRolesResponse')

const ListImpersonationRolesRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The WorkMail organization to which the listed impersonation roles belong.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The token used to retrieve the next page of results. The first call doesn't require a token.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results returned in a single call.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['OrganizationId'], title: 'ListImpersonationRolesRequest' })
  .openapi('ListImpersonationRolesRequest')

const MailDomainSummarySchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The domain name.' }),
    ).exactOptional(),
    DefaultDomain: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the domain is default or not.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The data for a given domain.', required: [] })
  .openapi('MailDomainSummary')

const MailDomainsSchema = z.array(MailDomainSummarySchema).openapi('MailDomains')

const ListMailDomainsResponseSchema = z
  .object({
    MailDomains: MailDomainsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The list of mail domain summaries, specifying domains that exist in the specified WorkMail organization, along with the information about whether the domain is or isn't the default.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. The value becomes <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMailDomainsResponse')

const ListMailDomainsRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The WorkMail organization for which to list domains.' }),
    ),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in a single call.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. The first call does not require a token.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['OrganizationId'], title: 'ListMailDomainsRequest' })
  .openapi('ListMailDomainsRequest')

const MailboxExportJobSchema = z
  .object({
    JobId: MailboxExportJobIdSchema.and(
      z.any().openapi({ description: 'The identifier of the mailbox export job.' }),
    ).exactOptional(),
    EntityId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the user or resource associated with the mailbox.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The mailbox export job description.' }),
    ).exactOptional(),
    S3BucketName: S3BucketNameSchema.and(
      z.any().openapi({ description: 'The name of the S3 bucket.' }),
    ).exactOptional(),
    S3Path: S3ObjectKeySchema.and(
      z
        .any()
        .openapi({
          description: 'The path to the S3 bucket and file that the mailbox export job exports to.',
        }),
    ).exactOptional(),
    EstimatedProgress: PercentageSchema.and(
      z
        .any()
        .openapi({
          description: 'The estimated progress of the mailbox export job, in percentage points.',
        }),
    ).exactOptional(),
    State: MailboxExportJobStateSchema.and(
      z.any().openapi({ description: 'The state of the mailbox export job.' }),
    ).exactOptional(),
    StartTime: TimestampSchema.and(
      z.any().openapi({ description: 'The mailbox export job start timestamp.' }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The mailbox export job end timestamp.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The details of a mailbox export job, including the user or resource ID associated with the mailbox and the S3 bucket that the mailbox contents are exported to.',
    required: [],
  })
  .openapi('MailboxExportJob')

const JobsSchema = z.array(MailboxExportJobSchema).openapi('Jobs')

const ListMailboxExportJobsResponseSchema = z
  .object({
    Jobs: JobsSchema.and(
      z.any().openapi({ description: 'The mailbox export job details.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The token to use to retrieve the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMailboxExportJobsResponse')

const ListMailboxExportJobsRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The organization ID.' }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The token to use to retrieve the next page of results.' }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in a single call.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['OrganizationId'], title: 'ListMailboxExportJobsRequest' })
  .openapi('ListMailboxExportJobsRequest')

const PermissionTypeSchema = z
  .enum(['FULL_ACCESS', 'SEND_AS', 'SEND_ON_BEHALF'])
  .openapi('PermissionType')

const PermissionValuesSchema = z.array(PermissionTypeSchema).openapi('PermissionValues')

const PermissionSchema = z
  .object({
    GranteeId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the user, group, or resource to which the permissions are granted.',
        }),
    ),
    GranteeType: MemberTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The type of user, group, or resource referred to in GranteeId.' }),
    ),
    PermissionValues: PermissionValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The permissions granted to the grantee. SEND_AS allows the grantee to send email as the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full access to the mailbox, irrespective of other folder-level permissions set on the mailbox.',
        }),
    ),
  })
  .openapi({
    required: ['GranteeId', 'GranteeType', 'PermissionValues'],
    description:
      'Permission granted to a user, group, or resource to access a certain aspect of another user, group, or resource mailbox.',
  })
  .openapi('Permission')

const PermissionsSchema = z.array(PermissionSchema).openapi('Permissions')

const ListMailboxPermissionsResponseSchema = z
  .object({
    Permissions: PermissionsSchema.and(
      z
        .any()
        .openapi({ description: 'One page of the user, group, or resource mailbox permissions.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMailboxPermissionsResponse')

const ListMailboxPermissionsRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the organization under which the user, group, or resource exists.',
        }),
    ),
    EntityId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the user, group, or resource for which to list mailbox permissions.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. The first call does not contain any tokens.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in a single call.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['OrganizationId', 'EntityId'], title: 'ListMailboxPermissionsRequest' })
  .openapi('ListMailboxPermissionsRequest')

const MobileDeviceAccessOverrideSchema = z
  .object({
    UserId: WorkMailIdentifierSchema.and(
      z.any().openapi({ description: 'The WorkMail user to which the access override applies.' }),
    ).exactOptional(),
    DeviceId: DeviceIdSchema.and(
      z.any().openapi({ description: 'The device to which the override applies.' }),
    ).exactOptional(),
    Effect: MobileDeviceAccessRuleEffectSchema.and(
      z
        .any()
        .openapi({
          description: 'The effect of the override, <code>ALLOW</code> or <code>DENY</code>.',
        }),
    ).exactOptional(),
    Description: MobileDeviceAccessRuleDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the override.' }),
    ).exactOptional(),
    DateCreated: TimestampSchema.and(
      z.any().openapi({ description: 'The date the override was first created.' }),
    ).exactOptional(),
    DateModified: TimestampSchema.and(
      z.any().openapi({ description: 'The date the override was last modified.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The override object.', required: [] })
  .openapi('MobileDeviceAccessOverride')

const MobileDeviceAccessOverridesListSchema = z
  .array(MobileDeviceAccessOverrideSchema)
  .openapi('MobileDeviceAccessOverridesList')

const ListMobileDeviceAccessOverridesResponseSchema = z
  .object({
    Overrides: MobileDeviceAccessOverridesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of mobile device access overrides that exist for the specified WorkMail organization and user.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. The value is “null” when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMobileDeviceAccessOverridesResponse')

const ListMobileDeviceAccessOverridesRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The WorkMail organization under which to list mobile device access overrides.',
        }),
    ),
    UserId: EntityIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The WorkMail user under which you list the mobile device access overrides. Accepts the following types of user identities:</p> <ul> <li> <p>User ID: <code>12345678-1234-1234-1234-123456789012</code> or <code>S-1-1-12-1234567890-123456789-123456789-1234</code> </p> </li> <li> <p>Email address: <code>user@domain.tld</code> </p> </li> <li> <p>User name: <code>user</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    DeviceId: DeviceIdSchema.and(
      z.any().openapi({ description: 'The mobile device to which the access override applies.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. The first call does not require a token.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in a single call.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['OrganizationId'], title: 'ListMobileDeviceAccessOverridesRequest' })
  .openapi('ListMobileDeviceAccessOverridesRequest')

const MobileDeviceAccessRuleSchema = z
  .object({
    MobileDeviceAccessRuleId: MobileDeviceAccessRuleIdSchema.and(
      z.any().openapi({ description: 'The ID assigned to a mobile access rule.' }),
    ).exactOptional(),
    Name: MobileDeviceAccessRuleNameSchema.and(
      z.any().openapi({ description: 'The name of a mobile access rule.' }),
    ).exactOptional(),
    Description: MobileDeviceAccessRuleDescriptionSchema.and(
      z.any().openapi({ description: 'The description of a mobile access rule.' }),
    ).exactOptional(),
    Effect: MobileDeviceAccessRuleEffectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The effect of the rule when it matches. Allowed values are <code>ALLOW</code> or <code>DENY</code>.',
        }),
    ).exactOptional(),
    DeviceTypes: DeviceTypeListSchema.and(
      z.any().openapi({ description: 'Device types that a rule will match.' }),
    ).exactOptional(),
    NotDeviceTypes: DeviceTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Device types that a rule <b>will not</b> match. All other device types will match.',
        }),
    ).exactOptional(),
    DeviceModels: DeviceModelListSchema.and(
      z.any().openapi({ description: 'Device models that a rule will match.' }),
    ).exactOptional(),
    NotDeviceModels: DeviceModelListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Device models that a rule <b>will not</b> match. All other device models will match.',
        }),
    ).exactOptional(),
    DeviceOperatingSystems: DeviceOperatingSystemListSchema.and(
      z.any().openapi({ description: 'Device operating systems that a rule will match.' }),
    ).exactOptional(),
    NotDeviceOperatingSystems: DeviceOperatingSystemListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Device operating systems that a rule <b>will not</b> match. All other device types will match.',
        }),
    ).exactOptional(),
    DeviceUserAgents: DeviceUserAgentListSchema.and(
      z.any().openapi({ description: 'Device user agents that a rule will match.' }),
    ).exactOptional(),
    NotDeviceUserAgents: DeviceUserAgentListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Device user agents that a rule <b>will not</b> match. All other device user agents will match.',
        }),
    ).exactOptional(),
    DateCreated: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time at which an access rule was created.' }),
    ).exactOptional(),
    DateModified: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time at which an access rule was modified.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A rule that controls access to mobile devices for an WorkMail group.',
    required: [],
  })
  .openapi('MobileDeviceAccessRule')

const MobileDeviceAccessRulesListSchema = z
  .array(MobileDeviceAccessRuleSchema)
  .min(0)
  .max(10)
  .openapi('MobileDeviceAccessRulesList')

const ListMobileDeviceAccessRulesResponseSchema = z
  .object({
    Rules: MobileDeviceAccessRulesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of mobile device access rules that exist under the specified WorkMail organization.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMobileDeviceAccessRulesResponse')

const ListMobileDeviceAccessRulesRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The WorkMail organization for which to list the rules.' }),
    ),
  })
  .openapi({ required: ['OrganizationId'], title: 'ListMobileDeviceAccessRulesRequest' })
  .openapi('ListMobileDeviceAccessRulesRequest')

const OrganizationSummarySchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The identifier associated with the organization.' }),
    ).exactOptional(),
    Alias: OrganizationNameSchema.and(
      z.any().openapi({ description: 'The alias associated with the organization.' }),
    ).exactOptional(),
    DefaultMailDomain: DomainNameSchema.and(
      z
        .any()
        .openapi({ description: 'The default email domain associated with the organization.' }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error message associated with the organization. It is only present if unexpected behavior has occurred with regards to the organization. It provides insight or solutions regarding unexpected behavior.',
        }),
    ).exactOptional(),
    State: StringSchema.and(
      z.any().openapi({ description: 'The state associated with the organization.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The representation of an organization.', required: [] })
  .openapi('OrganizationSummary')

const OrganizationSummariesSchema = z
  .array(OrganizationSummarySchema)
  .openapi('OrganizationSummaries')

const ListOrganizationsResponseSchema = z
  .object({
    OrganizationSummaries: OrganizationSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The overview of owned organizations presented as a list of organization summaries.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListOrganizationsResponse')

const ListOrganizationsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. The first call does not contain any tokens.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in a single call.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListOrganizationsRequest', required: [] })
  .openapi('ListOrganizationsRequest')

const DelegateSchema = z
  .object({
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier for the user or group associated as the resource's delegate.",
        }),
    ),
    Type: MemberTypeSchema.and(
      z.any().openapi({ description: 'The type of the delegate: user or group.' }),
    ),
  })
  .openapi({
    required: ['Id', 'Type'],
    description:
      'The name of the attribute, which is one of the values defined in the UserAttribute enumeration.',
  })
  .openapi('Delegate')

const ResourceDelegatesSchema = z.array(DelegateSchema).openapi('ResourceDelegates')

const ListResourceDelegatesResponseSchema = z
  .object({
    Delegates: ResourceDelegatesSchema.and(
      z.any().openapi({ description: "One page of the resource's delegates." }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token used to paginate through the delegates associated with a resource. While results are still available, it has an associated value. When the last page is reached, the token is empty.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResourceDelegatesResponse')

const ListResourceDelegatesRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the organization that contains the resource for which delegates are listed.',
        }),
    ),
    ResourceId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier for the resource whose delegates are listed.' }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token used to paginate through the delegates associated with a resource.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The number of maximum results in a page.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['OrganizationId', 'ResourceId'], title: 'ListResourceDelegatesRequest' })
  .openapi('ListResourceDelegatesRequest')

const ResourceSchema = z
  .object({
    Id: WorkMailIdentifierSchema.and(
      z.any().openapi({ description: 'The identifier of the resource.' }),
    ).exactOptional(),
    Email: EmailAddressSchema.and(
      z.any().openapi({ description: 'The email of the resource.' }),
    ).exactOptional(),
    Name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the resource.' }),
    ).exactOptional(),
    Type: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of the resource: equipment or room.' }),
    ).exactOptional(),
    State: EntityStateSchema.and(
      z
        .any()
        .openapi({
          description: 'The state of the resource, which can be ENABLED, DISABLED, or DELETED.',
        }),
    ).exactOptional(),
    EnabledDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date indicating when the resource was enabled for WorkMail use.',
        }),
    ).exactOptional(),
    DisabledDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date indicating when the resource was disabled from WorkMail use.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The representation of a resource.', required: [] })
  .openapi('Resource')

const ResourcesSchema = z.array(ResourceSchema).openapi('Resources')

const ListResourcesResponseSchema = z
  .object({
    Resources: ResourcesSchema.and(
      z.any().openapi({ description: "One page of the organization's resource representation." }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            " The token used to paginate through all the organization's resources. While results are still available, it has an associated value. When the last page is reached, the token is empty.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResourcesResponse')

const ListResourcesRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for the organization under which the resources exist.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. The first call does not contain any tokens.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in a single call.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['OrganizationId'], title: 'ListResourcesRequest' })
  .openapi('ListResourcesRequest')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(z.any().openapi({ description: 'The key of the tag.' })),
    Value: TagValueSchema.and(z.any().openapi({ description: 'The value of the tag.' })),
  })
  .openapi({ required: ['Key', 'Value'], description: 'Describes a tag applied to a resource.' })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(50).openapi('TagList')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'A list of tag key-value pairs.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The resource ARN.' }),
    ),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const UserSchema = z
  .object({
    Id: WorkMailIdentifierSchema.and(
      z.any().openapi({ description: 'The identifier of the user.' }),
    ).exactOptional(),
    Email: EmailAddressSchema.and(
      z.any().openapi({ description: 'The email of the user.' }),
    ).exactOptional(),
    Name: UserNameSchema.and(
      z.any().openapi({ description: 'The name of the user.' }),
    ).exactOptional(),
    DisplayName: StringSchema.and(
      z.any().openapi({ description: 'The display name of the user.' }),
    ).exactOptional(),
    State: EntityStateSchema.and(
      z
        .any()
        .openapi({
          description: 'The state of the user, which can be ENABLED, DISABLED, or DELETED.',
        }),
    ).exactOptional(),
    UserRole: UserRoleSchema.and(
      z.any().openapi({ description: 'The role of the user.' }),
    ).exactOptional(),
    EnabledDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date indicating when the user was enabled for WorkMail use.',
        }),
    ).exactOptional(),
    DisabledDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date indicating when the user was disabled from WorkMail use.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The representation of an WorkMail user.', required: [] })
  .openapi('User')

const UsersSchema = z.array(UserSchema).openapi('Users')

const ListUsersResponseSchema = z
  .object({
    Users: UsersSchema.and(
      z.any().openapi({ description: 'The overview of users for an organization.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListUsersResponse')

const ListUsersRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for the organization under which the users exist.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. The first call does not contain any tokens.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in a single call.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['OrganizationId'], title: 'ListUsersRequest' })
  .openapi('ListUsersRequest')

const PutAccessControlRuleResponseSchema = z.object({}).openapi('PutAccessControlRuleResponse')

const PutAccessControlRuleRequestSchema = z
  .object({
    Name: AccessControlRuleNameSchema.and(z.any().openapi({ description: 'The rule name.' })),
    Effect: AccessControlRuleEffectSchema.and(z.any().openapi({ description: 'The rule effect.' })),
    Description: AccessControlRuleDescriptionSchema.and(
      z.any().openapi({ description: 'The rule description.' }),
    ),
    IpRanges: IpRangeListSchema.and(
      z.any().openapi({ description: 'IPv4 CIDR ranges to include in the rule.' }),
    ).exactOptional(),
    NotIpRanges: IpRangeListSchema.and(
      z.any().openapi({ description: 'IPv4 CIDR ranges to exclude from the rule.' }),
    ).exactOptional(),
    Actions: ActionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Access protocol actions to include in the rule. Valid values include <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>, <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.',
        }),
    ).exactOptional(),
    NotActions: ActionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Access protocol actions to exclude from the rule. Valid values include <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>, <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.',
        }),
    ).exactOptional(),
    UserIds: UserIdListSchema.and(
      z.any().openapi({ description: 'User IDs to include in the rule.' }),
    ).exactOptional(),
    NotUserIds: UserIdListSchema.and(
      z.any().openapi({ description: 'User IDs to exclude from the rule.' }),
    ).exactOptional(),
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The identifier of the organization.' }),
    ),
    ImpersonationRoleIds: ImpersonationRoleIdListSchema.and(
      z.any().openapi({ description: 'Impersonation role IDs to include in the rule.' }),
    ).exactOptional(),
    NotImpersonationRoleIds: ImpersonationRoleIdListSchema.and(
      z.any().openapi({ description: 'Impersonation role IDs to exclude from the rule.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Effect', 'Description', 'OrganizationId'],
    title: 'PutAccessControlRuleRequest',
  })
  .openapi('PutAccessControlRuleRequest')

const PutEmailMonitoringConfigurationResponseSchema = z
  .object({})
  .openapi('PutEmailMonitoringConfigurationResponse')

const PutEmailMonitoringConfigurationRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the organization for which the email monitoring configuration is set.',
        }),
    ),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM Role associated with the email monitoring configuration.',
        }),
    ),
    LogGroupArn: LogGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the CloudWatch Log group associated with the email monitoring configuration.',
        }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'RoleArn', 'LogGroupArn'],
    title: 'PutEmailMonitoringConfigurationRequest',
  })
  .openapi('PutEmailMonitoringConfigurationRequest')

const PutInboundDmarcSettingsResponseSchema = z
  .object({})
  .openapi('PutInboundDmarcSettingsResponse')

const BooleanObjectSchema = z.boolean().openapi('BooleanObject')

const PutInboundDmarcSettingsRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the organization that you are applying the DMARC policy to.',
        }),
    ),
    Enforced: BooleanObjectSchema.and(
      z.any().openapi({ description: "Enforces or suspends a policy after it's applied." }),
    ),
  })
  .openapi({ required: ['OrganizationId', 'Enforced'], title: 'PutInboundDmarcSettingsRequest' })
  .openapi('PutInboundDmarcSettingsRequest')

const PutMailboxPermissionsResponseSchema = z.object({}).openapi('PutMailboxPermissionsResponse')

const PutMailboxPermissionsRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the organization under which the user, group, or resource exists.',
        }),
    ),
    EntityId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the user, group, or resource for which to update mailbox permissions.',
        }),
    ),
    GranteeId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the user, group, or resource to which to grant the permissions.',
        }),
    ),
    PermissionValues: PermissionValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The permissions granted to the grantee. SEND_AS allows the grantee to send email as the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full access to the mailbox, irrespective of other folder-level permissions set on the mailbox.',
        }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'EntityId', 'GranteeId', 'PermissionValues'],
    title: 'PutMailboxPermissionsRequest',
  })
  .openapi('PutMailboxPermissionsRequest')

const PutMobileDeviceAccessOverrideResponseSchema = z
  .object({})
  .openapi('PutMobileDeviceAccessOverrideResponse')

const PutMobileDeviceAccessOverrideRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifies the WorkMail organization for which you create the override.',
        }),
    ),
    UserId: EntityIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The WorkMail user for which you create the override. Accepts the following types of user identities:</p> <ul> <li> <p>User ID: <code>12345678-1234-1234-1234-123456789012</code> or <code>S-1-1-12-1234567890-123456789-123456789-1234</code> </p> </li> <li> <p>Email address: <code>user@domain.tld</code> </p> </li> <li> <p>User name: <code>user</code> </p> </li> </ul>',
        }),
    ),
    DeviceId: DeviceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The mobile device for which you create the override. <code>DeviceId</code> is case insensitive.',
        }),
    ),
    Effect: MobileDeviceAccessRuleEffectSchema.and(
      z
        .any()
        .openapi({
          description: 'The effect of the override, <code>ALLOW</code> or <code>DENY</code>.',
        }),
    ),
    Description: MobileDeviceAccessRuleDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the override.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OrganizationId', 'UserId', 'DeviceId', 'Effect'],
    title: 'PutMobileDeviceAccessOverrideRequest',
  })
  .openapi('PutMobileDeviceAccessOverrideRequest')

const PutRetentionPolicyResponseSchema = z.object({}).openapi('PutRetentionPolicyResponse')

const PolicyDescriptionSchema = z
  .string()
  .regex(/[\w\d\s\S\-!?=,.;:'_]+/)
  .max(256)
  .openapi('PolicyDescription')

const PutRetentionPolicyRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The organization ID.' }),
    ),
    Id: ShortStringSchema.and(
      z.any().openapi({ description: 'The retention policy ID.' }),
    ).exactOptional(),
    Name: ShortStringSchema.and(z.any().openapi({ description: 'The retention policy name.' })),
    Description: PolicyDescriptionSchema.and(
      z.any().openapi({ description: 'The retention policy description.' }),
    ).exactOptional(),
    FolderConfigurations: FolderConfigurationsSchema.and(
      z.any().openapi({ description: 'The retention policy folder configurations.' }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'Name', 'FolderConfigurations'],
    title: 'PutRetentionPolicyRequest',
  })
  .openapi('PutRetentionPolicyRequest')

const RegisterMailDomainResponseSchema = z.object({}).openapi('RegisterMailDomainResponse')

const RegisterMailDomainRequestSchema = z
  .object({
    ClientToken: IdempotencyClientTokenSchema.and(
      z.any().openapi({ description: 'Idempotency token used when retrying requests.' }),
    ).exactOptional(),
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: "The WorkMail organization under which you're creating the domain.",
        }),
    ),
    DomainName: WorkMailDomainNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the mail domain to create in WorkMail and SES.' }),
    ),
  })
  .openapi({ required: ['OrganizationId', 'DomainName'], title: 'RegisterMailDomainRequest' })
  .openapi('RegisterMailDomainRequest')

const RegisterToWorkMailResponseSchema = z.object({}).openapi('RegisterToWorkMailResponse')

const RegisterToWorkMailRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the organization under which the user, group, or resource exists.',
        }),
    ),
    EntityId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier for the user, group, or resource to be updated.' }),
    ),
    Email: EmailAddressSchema.and(
      z.any().openapi({ description: 'The email for the user, group, or resource to be updated.' }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'EntityId', 'Email'],
    title: 'RegisterToWorkMailRequest',
  })
  .openapi('RegisterToWorkMailRequest')

const EntityAlreadyRegisteredExceptionSchema = z.any().openapi('EntityAlreadyRegisteredException')

const ResetPasswordResponseSchema = z.object({}).openapi('ResetPasswordResponse')

const ResetPasswordRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the organization that contains the user for which the password is reset.',
        }),
    ),
    UserId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the user for whom the password is reset.' }),
    ),
    Password: PasswordSchema.and(
      z.any().openapi({ description: 'The new password for the user.' }),
    ),
  })
  .openapi({ required: ['OrganizationId', 'UserId', 'Password'], title: 'ResetPasswordRequest' })
  .openapi('ResetPasswordRequest')

const StartMailboxExportJobResponseSchema = z
  .object({
    JobId: MailboxExportJobIdSchema.and(
      z.any().openapi({ description: 'The job ID.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartMailboxExportJobResponse')

const StartMailboxExportJobRequestSchema = z
  .object({
    ClientToken: IdempotencyClientTokenSchema.and(
      z.any().openapi({ description: 'The idempotency token for the client request.' }),
    ),
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The identifier associated with the organization.' }),
    ),
    EntityId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the user or resource associated with the mailbox.',
        }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The mailbox export job description.' }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the AWS Identity and Access Management (IAM) role that grants write permission to the S3 bucket.',
        }),
    ),
    KmsKeyArn: KmsKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the symmetric AWS Key Management Service (AWS KMS) key that encrypts the exported mailbox content.',
        }),
    ),
    S3BucketName: S3BucketNameSchema.and(
      z.any().openapi({ description: 'The name of the S3 bucket.' }),
    ),
    S3Prefix: S3ObjectKeySchema.and(z.any().openapi({ description: 'The S3 bucket prefix.' })),
  })
  .openapi({
    required: [
      'ClientToken',
      'OrganizationId',
      'EntityId',
      'RoleArn',
      'KmsKeyArn',
      'S3BucketName',
      'S3Prefix',
    ],
    title: 'StartMailboxExportJobRequest',
  })
  .openapi('StartMailboxExportJobRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The resource ARN.' }),
    ),
    Tags: TagListSchema.and(z.any().openapi({ description: 'The tag key-value pairs.' })),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const TestAvailabilityConfigurationResponseSchema = z
  .object({
    TestPassed: BooleanSchema.and(
      z.any().openapi({ description: 'Boolean indicating whether the test passed or failed.' }),
    ).exactOptional(),
    FailureReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'String containing the reason for a failed test if <code>TestPassed</code> is false.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TestAvailabilityConfigurationResponse')

const TestAvailabilityConfigurationRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The WorkMail organization where the availability provider will be tested.',
        }),
    ),
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain to which the provider applies. If this field is provided, a stored availability provider associated to this domain name will be tested.',
        }),
    ).exactOptional(),
    EwsProvider: EwsAvailabilityProviderSchema.exactOptional(),
    LambdaProvider: LambdaAvailabilityProviderSchema.exactOptional(),
  })
  .openapi({ required: ['OrganizationId'], title: 'TestAvailabilityConfigurationRequest' })
  .openapi('TestAvailabilityConfigurationRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(50).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The resource ARN.' }),
    ),
    TagKeys: TagKeyListSchema.and(z.any().openapi({ description: 'The tag keys.' })),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAvailabilityConfigurationResponseSchema = z
  .object({})
  .openapi('UpdateAvailabilityConfigurationResponse')

const UpdateAvailabilityConfigurationRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The WorkMail organization for which the <code>AvailabilityConfiguration</code> will be updated.',
        }),
    ),
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The domain to which the provider applies the availability configuration.',
        }),
    ),
    EwsProvider: EwsAvailabilityProviderSchema.and(
      z
        .any()
        .openapi({
          description:
            'The EWS availability provider definition. The request must contain exactly one provider definition, either <code>EwsProvider</code> or <code>LambdaProvider</code>. The previously stored provider will be overridden by the one provided.',
        }),
    ).exactOptional(),
    LambdaProvider: LambdaAvailabilityProviderSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Lambda availability provider definition. The request must contain exactly one provider definition, either <code>EwsProvider</code> or <code>LambdaProvider</code>. The previously stored provider will be overridden by the one provided.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OrganizationId', 'DomainName'],
    title: 'UpdateAvailabilityConfigurationRequest',
  })
  .openapi('UpdateAvailabilityConfigurationRequest')

const UpdateDefaultMailDomainResponseSchema = z
  .object({})
  .openapi('UpdateDefaultMailDomainResponse')

const UpdateDefaultMailDomainRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z.any().openapi({ description: 'The WorkMail organization for which to list domains.' }),
    ),
    DomainName: WorkMailDomainNameSchema.and(
      z.any().openapi({ description: 'The domain name that will become the default domain.' }),
    ),
  })
  .openapi({ required: ['OrganizationId', 'DomainName'], title: 'UpdateDefaultMailDomainRequest' })
  .openapi('UpdateDefaultMailDomainRequest')

const UpdateImpersonationRoleResponseSchema = z
  .object({})
  .openapi('UpdateImpersonationRoleResponse')

const UpdateImpersonationRoleRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The WorkMail organization that contains the impersonation role to update.',
        }),
    ),
    ImpersonationRoleId: ImpersonationRoleIdSchema.and(
      z.any().openapi({ description: 'The ID of the impersonation role to update.' }),
    ),
    Name: ImpersonationRoleNameSchema.and(
      z.any().openapi({ description: 'The updated impersonation role name.' }),
    ),
    Type: ImpersonationRoleTypeSchema.and(
      z.any().openapi({ description: 'The updated impersonation role type.' }),
    ),
    Description: ImpersonationRoleDescriptionSchema.and(
      z.any().openapi({ description: 'The updated impersonation role description.' }),
    ).exactOptional(),
    Rules: ImpersonationRuleListSchema.and(
      z.any().openapi({ description: 'The updated list of rules.' }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'ImpersonationRoleId', 'Name', 'Type', 'Rules'],
    title: 'UpdateImpersonationRoleRequest',
  })
  .openapi('UpdateImpersonationRoleRequest')

const UpdateMailboxQuotaResponseSchema = z.object({}).openapi('UpdateMailboxQuotaResponse')

const UpdateMailboxQuotaRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the organization that contains the user for whom to update the mailbox quota.',
        }),
    ),
    UserId: WorkMailIdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifer for the user for whom to update the mailbox quota.',
        }),
    ),
    MailboxQuota: MailboxQuotaSchema.and(
      z.any().openapi({ description: 'The updated mailbox quota, in MB, for the specified user.' }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'UserId', 'MailboxQuota'],
    title: 'UpdateMailboxQuotaRequest',
  })
  .openapi('UpdateMailboxQuotaRequest')

const UpdateMobileDeviceAccessRuleResponseSchema = z
  .object({})
  .openapi('UpdateMobileDeviceAccessRuleResponse')

const UpdateMobileDeviceAccessRuleRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The WorkMail organization under which the rule will be updated.',
        }),
    ),
    MobileDeviceAccessRuleId: MobileDeviceAccessRuleIdSchema.and(
      z.any().openapi({ description: 'The identifier of the rule to be updated.' }),
    ),
    Name: MobileDeviceAccessRuleNameSchema.and(
      z.any().openapi({ description: 'The updated rule name.' }),
    ),
    Description: MobileDeviceAccessRuleDescriptionSchema.and(
      z.any().openapi({ description: 'The updated rule description.' }),
    ).exactOptional(),
    Effect: MobileDeviceAccessRuleEffectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The effect of the rule when it matches. Allowed values are <code>ALLOW</code> or <code>DENY</code>.',
        }),
    ),
    DeviceTypes: DeviceTypeListSchema.and(
      z.any().openapi({ description: 'Device types that the updated rule will match.' }),
    ).exactOptional(),
    NotDeviceTypes: DeviceTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Device types that the updated rule <b>will not</b> match. All other device types will match.',
        }),
    ).exactOptional(),
    DeviceModels: DeviceModelListSchema.and(
      z.any().openapi({ description: 'Device models that the updated rule will match.' }),
    ).exactOptional(),
    NotDeviceModels: DeviceModelListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Device models that the updated rule <b>will not</b> match. All other device models will match.',
        }),
    ).exactOptional(),
    DeviceOperatingSystems: DeviceOperatingSystemListSchema.and(
      z
        .any()
        .openapi({ description: 'Device operating systems that the updated rule will match.' }),
    ).exactOptional(),
    NotDeviceOperatingSystems: DeviceOperatingSystemListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Device operating systems that the updated rule <b>will not</b> match. All other device operating systems will match.',
        }),
    ).exactOptional(),
    DeviceUserAgents: DeviceUserAgentListSchema.and(
      z.any().openapi({ description: 'User agents that the updated rule will match.' }),
    ).exactOptional(),
    NotDeviceUserAgents: DeviceUserAgentListSchema.and(
      z
        .any()
        .openapi({
          description:
            'User agents that the updated rule <b>will not</b> match. All other user agents will match.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OrganizationId', 'MobileDeviceAccessRuleId', 'Name', 'Effect'],
    title: 'UpdateMobileDeviceAccessRuleRequest',
  })
  .openapi('UpdateMobileDeviceAccessRuleRequest')

const UpdatePrimaryEmailAddressResponseSchema = z
  .object({})
  .openapi('UpdatePrimaryEmailAddressResponse')

const UpdatePrimaryEmailAddressRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The organization that contains the user, group, or resource to update.',
        }),
    ),
    EntityId: WorkMailIdentifierSchema.and(
      z.any().openapi({ description: 'The user, group, or resource to update.' }),
    ),
    Email: EmailAddressSchema.and(
      z.any().openapi({ description: 'The value of the email to be updated as primary.' }),
    ),
  })
  .openapi({
    required: ['OrganizationId', 'EntityId', 'Email'],
    title: 'UpdatePrimaryEmailAddressRequest',
  })
  .openapi('UpdatePrimaryEmailAddressRequest')

const UpdateResourceResponseSchema = z.object({}).openapi('UpdateResourceResponse')

const UpdateResourceRequestSchema = z
  .object({
    OrganizationId: OrganizationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier associated with the organization for which the resource is updated.',
        }),
    ),
    ResourceId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the resource to be updated.' }),
    ),
    Name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the resource to be updated.' }),
    ).exactOptional(),
    BookingOptions: BookingOptionsSchema.and(
      z.any().openapi({ description: "The resource's booking options to be updated." }),
    ).exactOptional(),
  })
  .openapi({ required: ['OrganizationId', 'ResourceId'], title: 'UpdateResourceRequest' })
  .openapi('UpdateResourceRequest')

const InvalidConfigurationExceptionSchema = z.any().openapi('InvalidConfigurationException')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const postXAmzTargetWorkMailServiceAssociateDelegateToResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.AssociateDelegateToResource',
  description: "Adds a member (user or group) to the resource's set of delegates.",
  operationId: 'AssociateDelegateToResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.AssociateDelegateToResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.AssociateDelegateToResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateDelegateToResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateDelegateToResourceResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    484: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceAssociateMemberToGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.AssociateMemberToGroup',
  description: "Adds a member (user or group) to the group's set.",
  operationId: 'AssociateMemberToGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.AssociateMemberToGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.AssociateMemberToGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateMemberToGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateMemberToGroupResponseSchema } },
    },
    480: {
      description: 'DirectoryServiceAuthenticationFailedException',
      content: {
        'application/json': { schema: DirectoryServiceAuthenticationFailedExceptionSchema },
      },
    },
    481: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    482: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    483: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    485: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    486: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    487: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceAssumeImpersonationRoleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.AssumeImpersonationRole',
  description:
    'Assumes an impersonation role for the given WorkMail organization. This method returns an authentication token you can use to make impersonated calls.',
  operationId: 'AssumeImpersonationRole',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.AssumeImpersonationRole')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.AssumeImpersonationRole'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssumeImpersonationRoleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssumeImpersonationRoleResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceCancelMailboxExportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.CancelMailboxExportJob',
  description:
    '<p>Cancels a mailbox export job.</p> <note> <p>If the mailbox export job is near completion, it might not be possible to cancel it.</p> </note>',
  operationId: 'CancelMailboxExportJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.CancelMailboxExportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.CancelMailboxExportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CancelMailboxExportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelMailboxExportJobResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceCreateAliasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.CreateAlias',
  description: 'Adds an alias to the set of a given member (user or group) of WorkMail.',
  operationId: 'CreateAlias',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.CreateAlias')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.CreateAlias'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateAliasRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAliasResponseSchema } },
    },
    480: {
      description: 'EmailAddressInUseException',
      content: { 'application/json': { schema: EmailAddressInUseExceptionSchema } },
    },
    481: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    482: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'MailDomainNotFoundException',
      content: { 'application/json': { schema: MailDomainNotFoundExceptionSchema } },
    },
    485: {
      description: 'MailDomainStateException',
      content: { 'application/json': { schema: MailDomainStateExceptionSchema } },
    },
    486: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    487: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    488: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceCreateAvailabilityConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration',
  description:
    'Creates an <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.',
  operationId: 'CreateAvailabilityConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.CreateAvailabilityConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.CreateAvailabilityConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateAvailabilityConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAvailabilityConfigurationResponseSchema } },
    },
    480: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    481: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    482: {
      description: 'NameAvailabilityException',
      content: { 'application/json': { schema: NameAvailabilityExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceCreateGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.CreateGroup',
  description:
    'Creates a group that can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.',
  operationId: 'CreateGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.CreateGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.CreateGroup'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateGroupRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGroupResponseSchema } },
    },
    480: {
      description: 'DirectoryServiceAuthenticationFailedException',
      content: {
        'application/json': { schema: DirectoryServiceAuthenticationFailedExceptionSchema },
      },
    },
    481: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'NameAvailabilityException',
      content: { 'application/json': { schema: NameAvailabilityExceptionSchema } },
    },
    484: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    485: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    486: {
      description: 'ReservedNameException',
      content: { 'application/json': { schema: ReservedNameExceptionSchema } },
    },
    487: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceCreateImpersonationRoleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.CreateImpersonationRole',
  description:
    '<p>Creates an impersonation role for the given WorkMail organization.</p> <p> <i>Idempotency</i> ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries also complete successfully without performing any further actions.</p>',
  operationId: 'CreateImpersonationRole',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.CreateImpersonationRole')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.CreateImpersonationRole'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateImpersonationRoleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateImpersonationRoleResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    484: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceCreateMobileDeviceAccessRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule',
  description: 'Creates a new mobile device access rule for the specified WorkMail organization.',
  operationId: 'CreateMobileDeviceAccessRule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.CreateMobileDeviceAccessRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.CreateMobileDeviceAccessRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateMobileDeviceAccessRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMobileDeviceAccessRuleResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    483: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceCreateOrganizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.CreateOrganization',
  description:
    '<p>Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>You can associate multiple email domains with an organization, then choose your default email domain from the WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>Optionally, you can use a customer managed key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don\'t associate an AWS KMS key, WorkMail creates a default, AWS managed key for you.</p>',
  operationId: 'CreateOrganization',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.CreateOrganization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.CreateOrganization'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateOrganizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateOrganizationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DirectoryInUseException',
      content: { 'application/json': { schema: DirectoryInUseExceptionSchema } },
    },
    482: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'NameAvailabilityException',
      content: { 'application/json': { schema: NameAvailabilityExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceCreateResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.CreateResource',
  description: 'Creates a new WorkMail resource.',
  operationId: 'CreateResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.CreateResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.CreateResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateResourceResponseSchema } },
    },
    480: {
      description: 'DirectoryServiceAuthenticationFailedException',
      content: {
        'application/json': { schema: DirectoryServiceAuthenticationFailedExceptionSchema },
      },
    },
    481: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'NameAvailabilityException',
      content: { 'application/json': { schema: NameAvailabilityExceptionSchema } },
    },
    484: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    485: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    486: {
      description: 'ReservedNameException',
      content: { 'application/json': { schema: ReservedNameExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceCreateUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.CreateUser',
  description:
    'Creates a user who can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.',
  operationId: 'CreateUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.CreateUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.CreateUser'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateUserRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUserResponseSchema } },
    },
    480: {
      description: 'DirectoryServiceAuthenticationFailedException',
      content: {
        'application/json': { schema: DirectoryServiceAuthenticationFailedExceptionSchema },
      },
    },
    481: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidPasswordException',
      content: { 'application/json': { schema: InvalidPasswordExceptionSchema } },
    },
    484: {
      description: 'NameAvailabilityException',
      content: { 'application/json': { schema: NameAvailabilityExceptionSchema } },
    },
    485: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    486: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    487: {
      description: 'ReservedNameException',
      content: { 'application/json': { schema: ReservedNameExceptionSchema } },
    },
    488: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDeleteAccessControlRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DeleteAccessControlRule',
  description:
    '<p>Deletes an access control rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>',
  operationId: 'DeleteAccessControlRule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DeleteAccessControlRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DeleteAccessControlRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteAccessControlRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAccessControlRuleResponseSchema } },
    },
    480: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    481: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDeleteAliasRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DeleteAlias',
  description: 'Remove one or more specified aliases from a set of aliases for a given user.',
  operationId: 'DeleteAlias',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DeleteAlias')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DeleteAlias'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteAliasRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAliasResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    484: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDeleteAvailabilityConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration',
  description:
    'Deletes the <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.',
  operationId: 'DeleteAvailabilityConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DeleteAvailabilityConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DeleteAvailabilityConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteAvailabilityConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAvailabilityConfigurationResponseSchema } },
    },
    480: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    481: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDeleteEmailMonitoringConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration',
  description: 'Deletes the email monitoring configuration for a specified organization.',
  operationId: 'DeleteEmailMonitoringConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DeleteEmailMonitoringConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['WorkMailService.DeleteEmailMonitoringConfiguration'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteEmailMonitoringConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEmailMonitoringConfigurationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDeleteGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DeleteGroup',
  description: 'Deletes a group from WorkMail.',
  operationId: 'DeleteGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DeleteGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DeleteGroup'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteGroupRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteGroupResponseSchema } },
    },
    480: {
      description: 'DirectoryServiceAuthenticationFailedException',
      content: {
        'application/json': { schema: DirectoryServiceAuthenticationFailedExceptionSchema },
      },
    },
    481: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    482: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    485: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    486: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDeleteImpersonationRoleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DeleteImpersonationRole',
  description: 'Deletes an impersonation role for the given WorkMail organization.',
  operationId: 'DeleteImpersonationRole',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DeleteImpersonationRole')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DeleteImpersonationRole'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteImpersonationRoleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteImpersonationRoleResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDeleteMailboxPermissionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DeleteMailboxPermissions',
  description: 'Deletes permissions granted to a member (user or group).',
  operationId: 'DeleteMailboxPermissions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DeleteMailboxPermissions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DeleteMailboxPermissions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteMailboxPermissionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteMailboxPermissionsResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    484: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDeleteMobileDeviceAccessOverrideRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride',
  description:
    '<p>Deletes the mobile device access override for the given WorkMail organization, user, and device.</p> <note> <p>Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>',
  operationId: 'DeleteMobileDeviceAccessOverride',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DeleteMobileDeviceAccessOverride')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DeleteMobileDeviceAccessOverride'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteMobileDeviceAccessOverrideRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteMobileDeviceAccessOverrideResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDeleteMobileDeviceAccessRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule',
  description:
    '<p>Deletes a mobile device access rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>',
  operationId: 'DeleteMobileDeviceAccessRule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DeleteMobileDeviceAccessRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DeleteMobileDeviceAccessRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteMobileDeviceAccessRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteMobileDeviceAccessRuleResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDeleteOrganizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DeleteOrganization',
  description:
    'Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>WorkMail Administrator Guide</i>.',
  operationId: 'DeleteOrganization',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DeleteOrganization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DeleteOrganization'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteOrganizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteOrganizationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDeleteResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DeleteResource',
  description: 'Deletes the specified resource.',
  operationId: 'DeleteResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DeleteResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DeleteResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteResourceResponseSchema } },
    },
    480: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    483: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDeleteRetentionPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DeleteRetentionPolicy',
  description: 'Deletes the specified retention policy from the specified organization.',
  operationId: 'DeleteRetentionPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DeleteRetentionPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DeleteRetentionPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRetentionPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRetentionPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDeleteUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DeleteUser',
  description:
    '<p>Deletes a user from WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>',
  operationId: 'DeleteUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DeleteUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DeleteUser'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteUserRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteUserResponseSchema } },
    },
    480: {
      description: 'DirectoryServiceAuthenticationFailedException',
      content: {
        'application/json': { schema: DirectoryServiceAuthenticationFailedExceptionSchema },
      },
    },
    481: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    482: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    485: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    486: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDeregisterFromWorkMailRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DeregisterFromWorkMail',
  description:
    'Mark a user, group, or resource as no longer used in WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.',
  operationId: 'DeregisterFromWorkMail',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DeregisterFromWorkMail')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DeregisterFromWorkMail'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeregisterFromWorkMailRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeregisterFromWorkMailResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    484: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDeregisterMailDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DeregisterMailDomain',
  description:
    'Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first remove any email address used by WorkMail entities before you remove the domain.',
  operationId: 'DeregisterMailDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DeregisterMailDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DeregisterMailDomain'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeregisterMailDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeregisterMailDomainResponseSchema } },
    },
    480: {
      description: 'MailDomainInUseException',
      content: { 'application/json': { schema: MailDomainInUseExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'InvalidCustomSesConfigurationException',
      content: { 'application/json': { schema: InvalidCustomSesConfigurationExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDescribeEmailMonitoringConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration',
  description: 'Describes the current email monitoring configuration for a specified organization.',
  operationId: 'DescribeEmailMonitoringConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DescribeEmailMonitoringConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['WorkMailService.DescribeEmailMonitoringConfiguration'],
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: DescribeEmailMonitoringConfigurationRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DescribeEmailMonitoringConfigurationResponseSchema },
      },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    483: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDescribeGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DescribeGroup',
  description: 'Returns the data available for the group.',
  operationId: 'DescribeGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DescribeGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DescribeGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGroupResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    483: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDescribeInboundDmarcSettingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings',
  description: 'Lists the settings in a DMARC policy for a specified organization.',
  operationId: 'DescribeInboundDmarcSettings',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DescribeInboundDmarcSettings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DescribeInboundDmarcSettings'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeInboundDmarcSettingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeInboundDmarcSettingsResponseSchema } },
    },
    480: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    481: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDescribeMailboxExportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DescribeMailboxExportJob',
  description: 'Describes the current status of a mailbox export job.',
  operationId: 'DescribeMailboxExportJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DescribeMailboxExportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DescribeMailboxExportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeMailboxExportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMailboxExportJobResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDescribeOrganizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DescribeOrganization',
  description: 'Provides more information regarding a given organization based on its identifier.',
  operationId: 'DescribeOrganization',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DescribeOrganization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DescribeOrganization'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeOrganizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeOrganizationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDescribeResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DescribeResource',
  description: 'Returns the data available for the resource.',
  operationId: 'DescribeResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DescribeResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DescribeResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeResourceResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    483: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDescribeUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DescribeUser',
  description: 'Provides information regarding the user.',
  operationId: 'DescribeUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DescribeUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DescribeUser'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeUserRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeUserResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    483: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDisassociateDelegateFromResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource',
  description: "Removes a member from the resource's set of delegates.",
  operationId: 'DisassociateDelegateFromResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DisassociateDelegateFromResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DisassociateDelegateFromResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateDelegateFromResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateDelegateFromResourceResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    484: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceDisassociateMemberFromGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup',
  description: 'Removes a member from a group.',
  operationId: 'DisassociateMemberFromGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.DisassociateMemberFromGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.DisassociateMemberFromGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateMemberFromGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateMemberFromGroupResponseSchema } },
    },
    480: {
      description: 'DirectoryServiceAuthenticationFailedException',
      content: {
        'application/json': { schema: DirectoryServiceAuthenticationFailedExceptionSchema },
      },
    },
    481: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    482: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    483: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    485: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    486: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    487: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceGetAccessControlEffectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.GetAccessControlEffect',
  description:
    "Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, and user ID or impersonation role ID. You must provide either the user ID or impersonation role ID. Impersonation role ID can only be used with Action EWS.",
  operationId: 'GetAccessControlEffect',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.GetAccessControlEffect')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.GetAccessControlEffect'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetAccessControlEffectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAccessControlEffectResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    484: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceGetDefaultRetentionPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy',
  description: 'Gets the default retention policy details for the specified organization.',
  operationId: 'GetDefaultRetentionPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.GetDefaultRetentionPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.GetDefaultRetentionPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDefaultRetentionPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDefaultRetentionPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceGetImpersonationRoleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.GetImpersonationRole',
  description: 'Gets the impersonation role details for the given WorkMail organization.',
  operationId: 'GetImpersonationRole',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.GetImpersonationRole')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.GetImpersonationRole'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetImpersonationRoleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetImpersonationRoleResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceGetImpersonationRoleEffectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect',
  description: 'Tests whether the given impersonation role can impersonate a target user.',
  operationId: 'GetImpersonationRoleEffect',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.GetImpersonationRoleEffect')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.GetImpersonationRoleEffect'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetImpersonationRoleEffectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetImpersonationRoleEffectResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    485: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceGetMailDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.GetMailDomain',
  description:
    'Gets details for a mail domain, including domain records required to configure your domain with recommended security.',
  operationId: 'GetMailDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.GetMailDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.GetMailDomain'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetMailDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMailDomainResponseSchema } },
    },
    480: {
      description: 'MailDomainNotFoundException',
      content: { 'application/json': { schema: MailDomainNotFoundExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceGetMailboxDetailsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.GetMailboxDetails',
  description: "Requests a user's mailbox details for a specified organization and user.",
  operationId: 'GetMailboxDetails',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.GetMailboxDetails')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.GetMailboxDetails'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetMailboxDetailsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMailboxDetailsResponseSchema } },
    },
    480: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    481: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    482: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceGetMobileDeviceAccessEffectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect',
  description:
    "Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the WorkMail organization for a particular user's attributes.",
  operationId: 'GetMobileDeviceAccessEffect',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.GetMobileDeviceAccessEffect')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.GetMobileDeviceAccessEffect'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetMobileDeviceAccessEffectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMobileDeviceAccessEffectResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceGetMobileDeviceAccessOverrideRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride',
  description:
    'Gets the mobile device access override for the given WorkMail organization, user, and device.',
  operationId: 'GetMobileDeviceAccessOverride',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.GetMobileDeviceAccessOverride')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.GetMobileDeviceAccessOverride'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetMobileDeviceAccessOverrideRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMobileDeviceAccessOverrideResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceListAccessControlRulesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.ListAccessControlRules',
  description: 'Lists the access control rules for the specified organization.',
  operationId: 'ListAccessControlRules',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.ListAccessControlRules')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.ListAccessControlRules'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListAccessControlRulesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAccessControlRulesResponseSchema } },
    },
    480: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    481: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceListAliasesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.ListAliases',
  description: 'Creates a paginated call to list the aliases associated with a given entity.',
  operationId: 'ListAliases',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.ListAliases')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.ListAliases'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListAliasesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAliasesResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    484: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceListAvailabilityConfigurationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations',
  description:
    "List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail organization.",
  operationId: 'ListAvailabilityConfigurations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.ListAvailabilityConfigurations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.ListAvailabilityConfigurations'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListAvailabilityConfigurationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAvailabilityConfigurationsResponseSchema } },
    },
    480: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    481: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceListGroupMembersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.ListGroupMembers',
  description:
    'Returns an overview of the members of a group. Users and groups can be members of a group.',
  operationId: 'ListGroupMembers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.ListGroupMembers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.ListGroupMembers'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListGroupMembersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGroupMembersResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    484: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceListGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.ListGroups',
  description: "Returns summaries of the organization's groups.",
  operationId: 'ListGroups',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.ListGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.ListGroups'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListGroupsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGroupsResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    483: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceListImpersonationRolesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.ListImpersonationRoles',
  description: 'Lists all the impersonation roles for the given WorkMail organization.',
  operationId: 'ListImpersonationRoles',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.ListImpersonationRoles')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.ListImpersonationRoles'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListImpersonationRolesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListImpersonationRolesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceListMailDomainsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.ListMailDomains',
  description: 'Lists the mail domains in a given WorkMail organization.',
  operationId: 'ListMailDomains',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.ListMailDomains')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.ListMailDomains'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListMailDomainsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMailDomainsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceListMailboxExportJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.ListMailboxExportJobs',
  description:
    'Lists the mailbox export jobs started for the specified organization within the last seven days.',
  operationId: 'ListMailboxExportJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.ListMailboxExportJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.ListMailboxExportJobs'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListMailboxExportJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMailboxExportJobsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceListMailboxPermissionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.ListMailboxPermissions',
  description: 'Lists the mailbox permissions associated with a user, group, or resource mailbox.',
  operationId: 'ListMailboxPermissions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.ListMailboxPermissions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.ListMailboxPermissions'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListMailboxPermissionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMailboxPermissionsResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    483: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceListMobileDeviceAccessOverridesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides',
  description:
    'Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.',
  operationId: 'ListMobileDeviceAccessOverrides',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.ListMobileDeviceAccessOverrides')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.ListMobileDeviceAccessOverrides'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListMobileDeviceAccessOverridesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMobileDeviceAccessOverridesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceListMobileDeviceAccessRulesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules',
  description: 'Lists the mobile device access rules for the specified WorkMail organization.',
  operationId: 'ListMobileDeviceAccessRules',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.ListMobileDeviceAccessRules')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.ListMobileDeviceAccessRules'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListMobileDeviceAccessRulesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMobileDeviceAccessRulesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceListOrganizationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.ListOrganizations',
  description: "Returns summaries of the customer's organizations.",
  operationId: 'ListOrganizations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.ListOrganizations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.ListOrganizations'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListOrganizationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListOrganizationsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceListResourceDelegatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.ListResourceDelegates',
  description:
    'Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.',
  operationId: 'ListResourceDelegates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.ListResourceDelegates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.ListResourceDelegates'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListResourceDelegatesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResourceDelegatesResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    484: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceListResourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.ListResources',
  description: "Returns summaries of the organization's resources.",
  operationId: 'ListResources',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.ListResources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.ListResources'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListResourcesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResourcesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.ListTagsForResource',
  description: 'Lists the tags applied to an WorkMail organization resource.',
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.ListTagsForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceListUsersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.ListUsers',
  description: "Returns summaries of the organization's users.",
  operationId: 'ListUsers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.ListUsers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.ListUsers'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListUsersRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListUsersResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServicePutAccessControlRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.PutAccessControlRule',
  description:
    'Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces the older rule.',
  operationId: 'PutAccessControlRule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.PutAccessControlRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.PutAccessControlRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutAccessControlRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutAccessControlRuleResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    485: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServicePutEmailMonitoringConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration',
  description:
    'Creates or updates the email monitoring configuration for a specified organization.',
  operationId: 'PutEmailMonitoringConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.PutEmailMonitoringConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.PutEmailMonitoringConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutEmailMonitoringConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutEmailMonitoringConfigurationResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    483: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServicePutInboundDmarcSettingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.PutInboundDmarcSettings',
  description: 'Enables or disables a DMARC policy for a given organization.',
  operationId: 'PutInboundDmarcSettings',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.PutInboundDmarcSettings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.PutInboundDmarcSettings'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutInboundDmarcSettingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutInboundDmarcSettingsResponseSchema } },
    },
    480: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    481: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServicePutMailboxPermissionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.PutMailboxPermissions',
  description:
    'Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.',
  operationId: 'PutMailboxPermissions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.PutMailboxPermissions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.PutMailboxPermissions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutMailboxPermissionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutMailboxPermissionsResponseSchema } },
    },
    480: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    481: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    484: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServicePutMobileDeviceAccessOverrideRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride',
  description:
    'Creates or updates a mobile device access override for the given WorkMail organization, user, and device.',
  operationId: 'PutMobileDeviceAccessOverride',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.PutMobileDeviceAccessOverride')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.PutMobileDeviceAccessOverride'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutMobileDeviceAccessOverrideRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutMobileDeviceAccessOverrideResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    484: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServicePutRetentionPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.PutRetentionPolicy',
  description: 'Puts a retention policy to the specified organization.',
  operationId: 'PutRetentionPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.PutRetentionPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.PutRetentionPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutRetentionPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutRetentionPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceRegisterMailDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.RegisterMailDomain',
  description:
    "Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has permanent permission to use the specified domain for sending your users' emails.",
  operationId: 'RegisterMailDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.RegisterMailDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.RegisterMailDomain'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterMailDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterMailDomainResponseSchema } },
    },
    480: {
      description: 'MailDomainInUseException',
      content: { 'application/json': { schema: MailDomainInUseExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceRegisterToWorkMailRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.RegisterToWorkMail',
  description:
    '<p>Registers an existing and disabled user, group, or resource for WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>.</p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>',
  operationId: 'RegisterToWorkMail',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.RegisterToWorkMail')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.RegisterToWorkMail'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterToWorkMailRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterToWorkMailResponseSchema } },
    },
    480: {
      description: 'DirectoryServiceAuthenticationFailedException',
      content: {
        'application/json': { schema: DirectoryServiceAuthenticationFailedExceptionSchema },
      },
    },
    481: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    482: {
      description: 'EmailAddressInUseException',
      content: { 'application/json': { schema: EmailAddressInUseExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    484: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    485: {
      description: 'EntityAlreadyRegisteredException',
      content: { 'application/json': { schema: EntityAlreadyRegisteredExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    487: {
      description: 'MailDomainNotFoundException',
      content: { 'application/json': { schema: MailDomainNotFoundExceptionSchema } },
    },
    488: {
      description: 'MailDomainStateException',
      content: { 'application/json': { schema: MailDomainStateExceptionSchema } },
    },
    489: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    490: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceResetPasswordRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.ResetPassword',
  description: 'Allows the administrator to reset the password for a user.',
  operationId: 'ResetPassword',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.ResetPassword')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.ResetPassword'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ResetPasswordRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResetPasswordResponseSchema } },
    },
    480: {
      description: 'DirectoryServiceAuthenticationFailedException',
      content: {
        'application/json': { schema: DirectoryServiceAuthenticationFailedExceptionSchema },
      },
    },
    481: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    482: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    483: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    485: {
      description: 'InvalidPasswordException',
      content: { 'application/json': { schema: InvalidPasswordExceptionSchema } },
    },
    486: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    487: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    488: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceStartMailboxExportJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.StartMailboxExportJob',
  description:
    'Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in the <i>WorkMail Administrator Guide</i>.',
  operationId: 'StartMailboxExportJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.StartMailboxExportJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.StartMailboxExportJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartMailboxExportJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartMailboxExportJobResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.TagResource',
  description: 'Applies the specified tags to the specified WorkMailorganization resource.',
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceTestAvailabilityConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration',
  description:
    '<p>Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a <code>SourceArn</code> or <code>SourceAccount</code> header.</p> <note> <p>The request must contain either one provider definition (<code>EwsProvider</code> or <code>LambdaProvider</code>) or the <code>DomainName</code> parameter. If the <code>DomainName</code> parameter is provided, the configuration stored under the <code>DomainName</code> will be tested.</p> </note>',
  operationId: 'TestAvailabilityConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.TestAvailabilityConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.TestAvailabilityConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TestAvailabilityConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TestAvailabilityConfigurationResponseSchema } },
    },
    480: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    481: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.UntagResource',
  description: 'Untags the specified tags from the specified WorkMail organization resource.',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceUpdateAvailabilityConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration',
  description:
    'Updates an existing <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.',
  operationId: 'UpdateAvailabilityConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.UpdateAvailabilityConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.UpdateAvailabilityConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateAvailabilityConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAvailabilityConfigurationResponseSchema } },
    },
    480: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    481: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceUpdateDefaultMailDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain',
  description:
    'Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.',
  operationId: 'UpdateDefaultMailDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.UpdateDefaultMailDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.UpdateDefaultMailDomain'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDefaultMailDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDefaultMailDomainResponseSchema } },
    },
    480: {
      description: 'MailDomainNotFoundException',
      content: { 'application/json': { schema: MailDomainNotFoundExceptionSchema } },
    },
    481: {
      description: 'MailDomainStateException',
      content: { 'application/json': { schema: MailDomainStateExceptionSchema } },
    },
    482: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    483: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceUpdateImpersonationRoleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.UpdateImpersonationRole',
  description: 'Updates an impersonation role for the given WorkMail organization.',
  operationId: 'UpdateImpersonationRole',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.UpdateImpersonationRole')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.UpdateImpersonationRole'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateImpersonationRoleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateImpersonationRoleResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    485: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    486: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceUpdateMailboxQuotaRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.UpdateMailboxQuota',
  description: "Updates a user's current mailbox quota for a specified organization and user.",
  operationId: 'UpdateMailboxQuota',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.UpdateMailboxQuota')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.UpdateMailboxQuota'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateMailboxQuotaRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateMailboxQuotaResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    484: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceUpdateMobileDeviceAccessRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule',
  description: 'Updates a mobile device access rule for the specified WorkMail organization.',
  operationId: 'UpdateMobileDeviceAccessRule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.UpdateMobileDeviceAccessRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.UpdateMobileDeviceAccessRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateMobileDeviceAccessRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateMobileDeviceAccessRuleResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    482: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    483: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceUpdatePrimaryEmailAddressRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress',
  description:
    'Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.',
  operationId: 'UpdatePrimaryEmailAddress',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.UpdatePrimaryEmailAddress')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.UpdatePrimaryEmailAddress'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdatePrimaryEmailAddressRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePrimaryEmailAddressResponseSchema } },
    },
    480: {
      description: 'DirectoryServiceAuthenticationFailedException',
      content: {
        'application/json': { schema: DirectoryServiceAuthenticationFailedExceptionSchema },
      },
    },
    481: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    482: {
      description: 'EmailAddressInUseException',
      content: { 'application/json': { schema: EmailAddressInUseExceptionSchema } },
    },
    483: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    484: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    486: {
      description: 'MailDomainNotFoundException',
      content: { 'application/json': { schema: MailDomainNotFoundExceptionSchema } },
    },
    487: {
      description: 'MailDomainStateException',
      content: { 'application/json': { schema: MailDomainStateExceptionSchema } },
    },
    488: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    489: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    490: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
    491: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetWorkMailServiceUpdateResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=WorkMailService.UpdateResource',
  description:
    'Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.',
  operationId: 'UpdateResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('WorkMailService.UpdateResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['WorkMailService.UpdateResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateResourceResponseSchema } },
    },
    480: {
      description: 'DirectoryUnavailableException',
      content: { 'application/json': { schema: DirectoryUnavailableExceptionSchema } },
    },
    481: {
      description: 'EntityNotFoundException',
      content: { 'application/json': { schema: EntityNotFoundExceptionSchema } },
    },
    482: {
      description: 'EntityStateException',
      content: { 'application/json': { schema: EntityStateExceptionSchema } },
    },
    483: {
      description: 'InvalidConfigurationException',
      content: { 'application/json': { schema: InvalidConfigurationExceptionSchema } },
    },
    484: {
      description: 'EmailAddressInUseException',
      content: { 'application/json': { schema: EmailAddressInUseExceptionSchema } },
    },
    485: {
      description: 'MailDomainNotFoundException',
      content: { 'application/json': { schema: MailDomainNotFoundExceptionSchema } },
    },
    486: {
      description: 'MailDomainStateException',
      content: { 'application/json': { schema: MailDomainStateExceptionSchema } },
    },
    487: {
      description: 'NameAvailabilityException',
      content: { 'application/json': { schema: NameAvailabilityExceptionSchema } },
    },
    488: {
      description: 'OrganizationNotFoundException',
      content: { 'application/json': { schema: OrganizationNotFoundExceptionSchema } },
    },
    489: {
      description: 'OrganizationStateException',
      content: { 'application/json': { schema: OrganizationStateExceptionSchema } },
    },
  },
})
