import { createRoute, z } from '@hono/zod-openapi'

const AWSAccountIdSchema = z
  .string()
  .regex(/^[0-9]+$/)
  .min(1)
  .max(1024)
  .openapi('AWSAccountId')

const AssociateAdminAccountRequestSchema = z
  .object({
    AdminAccount: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID to associate with Firewall Manager as the Firewall Manager default administrator account. This account must be a member account of the organization in Organizations whose resources you want to protect. For more information about Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the Amazon Web Services Accounts in Your Organization</a>. ',
        }),
    ),
  })
  .openapi({ required: ['AdminAccount'], title: 'AssociateAdminAccountRequest' })
  .openapi('AssociateAdminAccountRequest')

const InvalidOperationExceptionSchema = z.any().openapi('InvalidOperationException')

const InvalidInputExceptionSchema = z.any().openapi('InvalidInputException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InternalErrorExceptionSchema = z.any().openapi('InternalErrorException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ThirdPartyFirewallAssociationStatusSchema = z
  .enum(['ONBOARDING', 'ONBOARD_COMPLETE', 'OFFBOARDING', 'OFFBOARD_COMPLETE', 'NOT_EXIST'])
  .openapi('ThirdPartyFirewallAssociationStatus')

const AssociateThirdPartyFirewallResponseSchema = z
  .object({
    ThirdPartyFirewallStatus: ThirdPartyFirewallAssociationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The current status for setting a Firewall Manager policy administrator's account as an administrator of the third-party firewall tenant.</p> <ul> <li> <p> <code>ONBOARDING</code> - The Firewall Manager policy administrator is being designated as a tenant administrator.</p> </li> <li> <p> <code>ONBOARD_COMPLETE</code> - The Firewall Manager policy administrator is designated as a tenant administrator.</p> </li> <li> <p> <code>OFFBOARDING</code> - The Firewall Manager policy administrator is being removed as a tenant administrator.</p> </li> <li> <p> <code>OFFBOARD_COMPLETE</code> - The Firewall Manager policy administrator has been removed as a tenant administrator.</p> </li> <li> <p> <code>NOT_EXIST</code> - The Firewall Manager policy administrator doesn't exist as a tenant administrator.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateThirdPartyFirewallResponse')

const ThirdPartyFirewallSchema = z
  .enum(['PALO_ALTO_NETWORKS_CLOUD_NGFW', 'FORTIGATE_CLOUD_NATIVE_FIREWALL'])
  .openapi('ThirdPartyFirewall')

const AssociateThirdPartyFirewallRequestSchema = z
  .object({
    ThirdPartyFirewall: ThirdPartyFirewallSchema.and(
      z.any().openapi({ description: 'The name of the third-party firewall vendor.' }),
    ),
  })
  .openapi({ required: ['ThirdPartyFirewall'], title: 'AssociateThirdPartyFirewallRequest' })
  .openapi('AssociateThirdPartyFirewallRequest')

const IdentifierSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(2048)
  .openapi('Identifier')

const FailedItemReasonSchema = z
  .enum([
    'NOT_VALID_ARN',
    'NOT_VALID_PARTITION',
    'NOT_VALID_REGION',
    'NOT_VALID_SERVICE',
    'NOT_VALID_RESOURCE_TYPE',
    'NOT_VALID_ACCOUNT_ID',
  ])
  .openapi('FailedItemReason')

const FailedItemSchema = z
  .object({
    URI: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The univeral resource indicator (URI) of the resource that failed.',
        }),
    ).exactOptional(),
    Reason: FailedItemReasonSchema.and(
      z
        .any()
        .openapi({ description: "The reason the resource's association could not be updated." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Details of a resource that failed when trying to update it's association to a resource set.",
    required: [],
  })
  .openapi('FailedItem')

const FailedItemListSchema = z.array(FailedItemSchema).openapi('FailedItemList')

const BatchAssociateResourceResponseSchema = z
  .object({
    ResourceSetIdentifier: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the resource set, used in a request to refer to the resource set.',
        }),
    ),
    FailedItems: FailedItemListSchema.and(
      z
        .any()
        .openapi({ description: 'The resources that failed to associate to the resource set.' }),
    ),
  })
  .openapi({ required: ['ResourceSetIdentifier', 'FailedItems'] })
  .openapi('BatchAssociateResourceResponse')

const IdentifierListSchema = z.array(IdentifierSchema).openapi('IdentifierList')

const BatchAssociateResourceRequestSchema = z
  .object({
    ResourceSetIdentifier: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the resource set, used in a request to refer to the resource set.',
        }),
    ),
    Items: IdentifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The uniform resource identifiers (URIs) of resources that should be associated to the resource set. The URIs must be Amazon Resource Names (ARNs).',
        }),
    ),
  })
  .openapi({ required: ['ResourceSetIdentifier', 'Items'], title: 'BatchAssociateResourceRequest' })
  .openapi('BatchAssociateResourceRequest')

const BatchDisassociateResourceResponseSchema = z
  .object({
    ResourceSetIdentifier: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the resource set, used in a request to refer to the resource set.',
        }),
    ),
    FailedItems: FailedItemListSchema.and(
      z
        .any()
        .openapi({
          description: 'The resources that failed to disassociate from the resource set.',
        }),
    ),
  })
  .openapi({ required: ['ResourceSetIdentifier', 'FailedItems'] })
  .openapi('BatchDisassociateResourceResponse')

const BatchDisassociateResourceRequestSchema = z
  .object({
    ResourceSetIdentifier: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the resource set, used in a request to refer to the resource set.',
        }),
    ),
    Items: IdentifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The uniform resource identifiers (URI) of resources that should be disassociated from the resource set. The URIs must be Amazon Resource Names (ARNs).',
        }),
    ),
  })
  .openapi({
    required: ['ResourceSetIdentifier', 'Items'],
    title: 'BatchDisassociateResourceRequest',
  })
  .openapi('BatchDisassociateResourceRequest')

const ListIdSchema = z
  .string()
  .regex(/^[a-z0-9A-Z-]{36}$/)
  .length(36)
  .openapi('ListId')

const DeleteAppsListRequestSchema = z
  .object({
    ListId: ListIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the applications list that you want to delete. You can retrieve this ID from <code>PutAppsList</code>, <code>ListAppsLists</code>, and <code>GetAppsList</code>.',
        }),
    ),
  })
  .openapi({ required: ['ListId'], title: 'DeleteAppsListRequest' })
  .openapi('DeleteAppsListRequest')

const DeleteNotificationChannelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteNotificationChannelRequest' })
  .openapi('DeleteNotificationChannelRequest')

const PolicyIdSchema = z
  .string()
  .regex(/^[a-z0-9A-Z-]{36}$/)
  .length(36)
  .openapi('PolicyId')

const BooleanSchema = z.boolean().openapi('Boolean')

const DeletePolicyRequestSchema = z
  .object({
    PolicyId: PolicyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the policy that you want to delete. You can retrieve this ID from <code>PutPolicy</code> and <code>ListPolicies</code>.',
        }),
    ),
    DeleteAllPolicyResources: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If <code>True</code>, the request performs cleanup according to the policy type. </p> <p>For WAF and Shield Advanced policies, the cleanup does the following:</p> <ul> <li> <p>Deletes rule groups created by Firewall Manager</p> </li> <li> <p>Removes web ACLs from in-scope resources</p> </li> <li> <p>Deletes web ACLs that contain no rules or rule groups</p> </li> </ul> <p>For security group policies, the cleanup does the following for each security group in the policy:</p> <ul> <li> <p>Disassociates the security group from in-scope resources </p> </li> <li> <p>Deletes the security group if it was created through Firewall Manager and if it's no longer associated with any resources through another policy</p> </li> </ul> <p>After the cleanup, in-scope resources are no longer protected by web ACLs in this policy. Protection of out-of-scope resources remains unchanged. Scope is determined by tags that you create and accounts that you associate with the policy. When creating the policy, if you specify that only resources in specific accounts or with specific tags are in scope of the policy, those accounts and resources are handled by the policy. All others are out of scope. If you don't specify tags or accounts, all resources are in scope. </p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PolicyId'], title: 'DeletePolicyRequest' })
  .openapi('DeletePolicyRequest')

const DeleteProtocolsListRequestSchema = z
  .object({
    ListId: ListIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the protocols list that you want to delete. You can retrieve this ID from <code>PutProtocolsList</code>, <code>ListProtocolsLists</code>, and <code>GetProtocolsLost</code>.',
        }),
    ),
  })
  .openapi({ required: ['ListId'], title: 'DeleteProtocolsListRequest' })
  .openapi('DeleteProtocolsListRequest')

const Base62IdSchema = z
  .string()
  .regex(/^[a-z0-9A-Z]{22}$/)
  .length(22)
  .openapi('Base62Id')

const DeleteResourceSetRequestSchema = z
  .object({
    Identifier: Base62IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the resource set, used in a request to refer to the resource set.',
        }),
    ),
  })
  .openapi({ required: ['Identifier'], title: 'DeleteResourceSetRequest' })
  .openapi('DeleteResourceSetRequest')

const DisassociateAdminAccountRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateAdminAccountRequest' })
  .openapi('DisassociateAdminAccountRequest')

const DisassociateThirdPartyFirewallResponseSchema = z
  .object({
    ThirdPartyFirewallStatus: ThirdPartyFirewallAssociationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status for the disassociation of a Firewall Manager administrators account with a third-party firewall.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociateThirdPartyFirewallResponse')

const DisassociateThirdPartyFirewallRequestSchema = z
  .object({
    ThirdPartyFirewall: ThirdPartyFirewallSchema.and(
      z.any().openapi({ description: 'The name of the third-party firewall vendor.' }),
    ),
  })
  .openapi({ required: ['ThirdPartyFirewall'], title: 'DisassociateThirdPartyFirewallRequest' })
  .openapi('DisassociateThirdPartyFirewallRequest')

const AccountRoleStatusSchema = z
  .enum(['READY', 'CREATING', 'PENDING_DELETION', 'DELETING', 'DELETED'])
  .openapi('AccountRoleStatus')

const GetAdminAccountResponseSchema = z
  .object({
    AdminAccount: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The account that is set as the Firewall Manager default administrator.',
        }),
    ).exactOptional(),
    RoleStatus: AccountRoleStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the account that you set as the Firewall Manager default administrator.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAdminAccountResponse')

const GetAdminAccountRequestSchema = z
  .object({})
  .openapi({ title: 'GetAdminAccountRequest' })
  .openapi('GetAdminAccountRequest')

const AccountIdListSchema = z.array(AWSAccountIdSchema).openapi('AccountIdList')

const AccountScopeSchema = z
  .object({
    Accounts: AccountIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of accounts within the organization that the specified Firewall Manager administrator either can or cannot apply policies to, based on the value of <code>ExcludeSpecifiedAccounts</code>. If <code>ExcludeSpecifiedAccounts</code> is set to <code>true</code>, then the Firewall Manager administrator can apply policies to all members of the organization except for the accounts in this list. If <code>ExcludeSpecifiedAccounts</code> is set to <code>false</code>, then the Firewall Manager administrator can only apply policies to the accounts in this list.',
        }),
    ).exactOptional(),
    AllAccountsEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean value that indicates if the administrator can apply policies to all accounts within an organization. If true, the administrator can apply policies to all accounts within the organization. You can either enable management of all accounts through this operation, or you can specify a list of accounts to manage in <code>AccountScope$Accounts</code>. You cannot specify both.',
        }),
    ).exactOptional(),
    ExcludeSpecifiedAccounts: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "A boolean value that excludes the accounts in <code>AccountScope$Accounts</code> from the administrator's scope. If true, the Firewall Manager administrator can apply policies to all members of the organization except for the accounts listed in <code>AccountScope$Accounts</code>. You can either specify a list of accounts to exclude by <code>AccountScope$Accounts</code>, or you can enable management of all accounts by <code>AccountScope$AllAccountsEnabled</code>. You cannot specify both.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Configures the accounts within the administrator's Organizations organization that the specified Firewall Manager administrator can apply policies to.",
    required: [],
  })
  .openapi('AccountScope')

const OrganizationalUnitIdSchema = z
  .string()
  .regex(/^ou-[0-9a-z]{4,32}-[a-z0-9]{8,32}$/)
  .min(16)
  .max(68)
  .openapi('OrganizationalUnitId')

const OrganizationalUnitIdListSchema = z
  .array(OrganizationalUnitIdSchema)
  .openapi('OrganizationalUnitIdList')

const OrganizationalUnitScopeSchema = z
  .object({
    OrganizationalUnits: OrganizationalUnitIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of OUs within the organization that the specified Firewall Manager administrator either can or cannot apply policies to, based on the value of <code>OrganizationalUnitScope$ExcludeSpecifiedOrganizationalUnits</code>. If <code>OrganizationalUnitScope$ExcludeSpecifiedOrganizationalUnits</code> is set to <code>true</code>, then the Firewall Manager administrator can apply policies to all OUs in the organization except for the OUs in this list. If <code>OrganizationalUnitScope$ExcludeSpecifiedOrganizationalUnits</code> is set to <code>false</code>, then the Firewall Manager administrator can only apply policies to the OUs in this list.',
        }),
    ).exactOptional(),
    AllOrganizationalUnitsEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean value that indicates if the administrator can apply policies to all OUs within an organization. If true, the administrator can manage all OUs within the organization. You can either enable management of all OUs through this operation, or you can specify OUs to manage in <code>OrganizationalUnitScope$OrganizationalUnits</code>. You cannot specify both.',
        }),
    ).exactOptional(),
    ExcludeSpecifiedOrganizationalUnits: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "A boolean value that excludes the OUs in <code>OrganizationalUnitScope$OrganizationalUnits</code> from the administrator's scope. If true, the Firewall Manager administrator can apply policies to all OUs in the organization except for the OUs listed in <code>OrganizationalUnitScope$OrganizationalUnits</code>. You can either specify a list of OUs to exclude by <code>OrganizationalUnitScope$OrganizationalUnits</code>, or you can enable management of all OUs by <code>OrganizationalUnitScope$AllOrganizationalUnitsEnabled</code>. You cannot specify both.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Defines the Organizations organizational units (OUs) that the specified Firewall Manager administrator can apply policies to. For more information about OUs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing organizational units (OUs) </a> in the <i>Organizations User Guide</i>.',
    required: [],
  })
  .openapi('OrganizationalUnitScope')

const AWSRegionSchema = z
  .string()
  .regex(/^(af|ap|ca|eu|il|me|mx|sa|us|cn|us-gov)-\w+-\d+$/)
  .min(6)
  .max(32)
  .openapi('AWSRegion')

const AWSRegionListSchema = z.array(AWSRegionSchema).min(0).max(64).openapi('AWSRegionList')

const RegionScopeSchema = z
  .object({
    Regions: AWSRegionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services Regions that the specified Firewall Manager administrator can perform actions in.',
        }),
    ).exactOptional(),
    AllRegionsEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Allows the specified Firewall Manager administrator to manage all Amazon Web Services Regions.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Defines the Amazon Web Services Regions that the specified Firewall Manager administrator can manage.',
    required: [],
  })
  .openapi('RegionScope')

const SecurityServiceTypeSchema = z
  .enum([
    'WAF',
    'WAFV2',
    'SHIELD_ADVANCED',
    'SECURITY_GROUPS_COMMON',
    'SECURITY_GROUPS_CONTENT_AUDIT',
    'SECURITY_GROUPS_USAGE_AUDIT',
    'NETWORK_FIREWALL',
    'DNS_FIREWALL',
    'THIRD_PARTY_FIREWALL',
    'IMPORT_NETWORK_FIREWALL',
  ])
  .openapi('SecurityServiceType')

const SecurityServiceTypeListSchema = z
  .array(SecurityServiceTypeSchema)
  .min(0)
  .max(32)
  .openapi('SecurityServiceTypeList')

const PolicyTypeScopeSchema = z
  .object({
    PolicyTypes: SecurityServiceTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of policy types that the specified Firewall Manager administrator can manage.',
        }),
    ).exactOptional(),
    AllPolicyTypesEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Allows the specified Firewall Manager administrator to manage all Firewall Manager policy types, except for third-party policy types. Third-party policy types can only be managed by the Firewall Manager default administrator.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Defines the policy types that the specified Firewall Manager administrator can manage.',
    required: [],
  })
  .openapi('PolicyTypeScope')

const AdminScopeSchema = z
  .object({
    AccountScope: AccountScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the accounts that the specified Firewall Manager administrator can apply policies to.',
        }),
    ).exactOptional(),
    OrganizationalUnitScope: OrganizationalUnitScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the Organizations organizational units that the specified Firewall Manager administrator can apply policies to. For more information about OUs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing organizational units (OUs) </a> in the <i>Organizations User Guide</i>.',
        }),
    ).exactOptional(),
    RegionScope: RegionScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the Amazon Web Services Regions that the specified Firewall Manager administrator can perform actions in.',
        }),
    ).exactOptional(),
    PolicyTypeScope: PolicyTypeScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the Firewall Manager policy types that the specified Firewall Manager administrator can create and manage.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Defines the resources that the Firewall Manager administrator can manage. For more information about administrative scope, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>.',
    required: [],
  })
  .openapi('AdminScope')

const OrganizationStatusSchema = z
  .enum(['ONBOARDING', 'ONBOARDING_COMPLETE', 'OFFBOARDING', 'OFFBOARDING_COMPLETE'])
  .openapi('OrganizationStatus')

const GetAdminScopeResponseSchema = z
  .object({
    AdminScope: AdminScopeSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains details about the administrative scope of the requested account.',
        }),
    ).exactOptional(),
    Status: OrganizationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the request to onboard a member account as an Firewall Manager administator.</p> <ul> <li> <p> <code>ONBOARDING</code> - The account is onboarding to Firewall Manager as an administrator.</p> </li> <li> <p> <code>ONBOARDING_COMPLETE</code> - Firewall Manager The account is onboarded to Firewall Manager as an administrator, and can perform actions on the resources defined in their <a>AdminScope</a>.</p> </li> <li> <p> <code>OFFBOARDING</code> - The account is being removed as an Firewall Manager administrator.</p> </li> <li> <p> <code>OFFBOARDING_COMPLETE</code> - The account has been removed as an Firewall Manager administrator.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAdminScopeResponse')

const GetAdminScopeRequestSchema = z
  .object({
    AdminAccount: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({ description: 'The administator account that you want to get the details for.' }),
    ),
  })
  .openapi({ required: ['AdminAccount'], title: 'GetAdminScopeRequest' })
  .openapi('GetAdminScopeRequest')

const ResourceNameSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('ResourceName')

const UpdateTokenSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(1024)
  .openapi('UpdateToken')

const TimeStampSchema = z.iso.datetime({ offset: true }).openapi('TimeStamp')

const ProtocolSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(20)
  .openapi('Protocol')

const IPPortNumberSchema = z.int().min(0).max(65535).openapi('IPPortNumber')

const AppSchema = z
  .object({
    AppName: ResourceNameSchema.and(z.any().openapi({ description: "The application's name." })),
    Protocol: ProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP protocol name or number. The name can be one of <code>tcp</code>, <code>udp</code>, or <code>icmp</code>. For information on possible numbers, see <a href="https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>.',
        }),
    ),
    Port: IPPortNumberSchema.and(
      z
        .any()
        .openapi({ description: "The application's port number, for example <code>80</code>." }),
    ),
  })
  .openapi({
    required: ['AppName', 'Protocol', 'Port'],
    description: 'An individual Firewall Manager application.',
  })
  .openapi('App')

const AppsListSchema = z.array(AppSchema).openapi('AppsList')

const PreviousAppsListSchema = z.record(z.string(), AppsListSchema).openapi('PreviousAppsList')

const AppsListDataSchema = z
  .object({
    ListId: ListIdSchema.and(
      z.any().openapi({ description: 'The ID of the Firewall Manager applications list.' }),
    ).exactOptional(),
    ListName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Firewall Manager applications list.' }),
    ),
    ListUpdateToken: UpdateTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for each update to the list. When you update the list, the update token must match the token of the current version of the application list. You can retrieve the update token by getting the list. ',
        }),
    ).exactOptional(),
    CreateTime: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time that the Firewall Manager applications list was created.',
        }),
    ).exactOptional(),
    LastUpdateTime: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time that the Firewall Manager applications list was last updated.',
        }),
    ).exactOptional(),
    AppsList: AppsListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of applications in the Firewall Manager applications list.',
        }),
    ),
    PreviousAppsList: PreviousAppsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of previous version numbers to their corresponding <code>App</code> object arrays.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ListName', 'AppsList'],
    description: 'An Firewall Manager applications list.',
  })
  .openapi('AppsListData')

const ResourceArnSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(1024)
  .openapi('ResourceArn')

const GetAppsListResponseSchema = z
  .object({
    AppsList: AppsListDataSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the specified Firewall Manager applications list.',
        }),
    ).exactOptional(),
    AppsListArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the applications list.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAppsListResponse')

const GetAppsListRequestSchema = z
  .object({
    ListId: ListIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Firewall Manager applications list that you want the details for.',
        }),
    ),
    DefaultList: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the list to retrieve is a default list owned by Firewall Manager.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ListId'], title: 'GetAppsListRequest' })
  .openapi('GetAppsListRequest')

const ResourceIdSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(1024)
  .openapi('ResourceId')

const ViolationReasonSchema = z
  .enum([
    'WEB_ACL_MISSING_RULE_GROUP',
    'RESOURCE_MISSING_WEB_ACL',
    'RESOURCE_INCORRECT_WEB_ACL',
    'RESOURCE_MISSING_SHIELD_PROTECTION',
    'RESOURCE_MISSING_WEB_ACL_OR_SHIELD_PROTECTION',
    'RESOURCE_MISSING_SECURITY_GROUP',
    'RESOURCE_VIOLATES_AUDIT_SECURITY_GROUP',
    'SECURITY_GROUP_UNUSED',
    'SECURITY_GROUP_REDUNDANT',
    'FMS_CREATED_SECURITY_GROUP_EDITED',
    'MISSING_FIREWALL',
    'MISSING_FIREWALL_SUBNET_IN_AZ',
    'MISSING_EXPECTED_ROUTE_TABLE',
    'NETWORK_FIREWALL_POLICY_MODIFIED',
    'FIREWALL_SUBNET_IS_OUT_OF_SCOPE',
    'INTERNET_GATEWAY_MISSING_EXPECTED_ROUTE',
    'FIREWALL_SUBNET_MISSING_EXPECTED_ROUTE',
    'UNEXPECTED_FIREWALL_ROUTES',
    'UNEXPECTED_TARGET_GATEWAY_ROUTES',
    'TRAFFIC_INSPECTION_CROSSES_AZ_BOUNDARY',
    'INVALID_ROUTE_CONFIGURATION',
    'MISSING_TARGET_GATEWAY',
    'INTERNET_TRAFFIC_NOT_INSPECTED',
    'BLACK_HOLE_ROUTE_DETECTED',
    'BLACK_HOLE_ROUTE_DETECTED_IN_FIREWALL_SUBNET',
    'RESOURCE_MISSING_DNS_FIREWALL',
    'ROUTE_HAS_OUT_OF_SCOPE_ENDPOINT',
    'FIREWALL_SUBNET_MISSING_VPCE_ENDPOINT',
  ])
  .openapi('ViolationReason')

const ResourceTypeSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('ResourceType')

const LengthBoundedStringSchema = z.string().min(0).max(1024).openapi('LengthBoundedString')

const ComplianceViolatorMetadataSchema = z
  .record(z.string(), LengthBoundedStringSchema)
  .openapi('ComplianceViolatorMetadata')

const ComplianceViolatorSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The resource ID.' }),
    ).exactOptional(),
    ViolationReason: ViolationReasonSchema.and(
      z
        .any()
        .openapi({ description: 'The reason that the resource is not protected by the policy.' }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource type. This is in the format shown in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services Resource Types Reference</a>. For example: <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code>, <code>AWS::CloudFront::Distribution</code>, or <code>AWS::NetworkFirewall::FirewallPolicy</code>.',
        }),
    ).exactOptional(),
    Metadata: ComplianceViolatorMetadataSchema.and(
      z
        .any()
        .openapi({
          description: "Metadata about the resource that doesn't comply with the policy scope.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Details of the resource that is not protected by the policy.',
    required: [],
  })
  .openapi('ComplianceViolator')

const ComplianceViolatorsSchema = z.array(ComplianceViolatorSchema).openapi('ComplianceViolators')

const DetailedInfoSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=,+\-@]*)$/u)
  .min(1)
  .max(4096)
  .openapi('DetailedInfo')

const IssueInfoMapSchema = z.record(z.string(), DetailedInfoSchema).openapi('IssueInfoMap')

const PolicyComplianceDetailSchema = z
  .object({
    PolicyOwner: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services account that created the Firewall Manager policy.',
        }),
    ).exactOptional(),
    PolicyId: PolicyIdSchema.and(
      z.any().openapi({ description: 'The ID of the Firewall Manager policy.' }),
    ).exactOptional(),
    MemberAccount: AWSAccountIdSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services account ID.' }),
    ).exactOptional(),
    Violators: ComplianceViolatorsSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of resources that aren't protected by the WAF or Shield Advanced policy or that aren't in compliance with the security group policy.",
        }),
    ).exactOptional(),
    EvaluationLimitExceeded: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates if over 100 resources are noncompliant with the Firewall Manager policy.',
        }),
    ).exactOptional(),
    ExpiredAt: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A timestamp that indicates when the returned information should be considered out of date.',
        }),
    ).exactOptional(),
    IssueInfoMap: IssueInfoMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details about problems with dependent services, such as WAF or Config, and the error message received that indicates the problem with the service.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the noncompliant resources in a member account for a specific Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are noncompliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>.',
    required: [],
  })
  .openapi('PolicyComplianceDetail')

const GetComplianceDetailResponseSchema = z
  .object({
    PolicyComplianceDetail: PolicyComplianceDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the resources and the policy that you specified in the <code>GetComplianceDetail</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetComplianceDetailResponse')

const GetComplianceDetailRequestSchema = z
  .object({
    PolicyId: PolicyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the policy that you want to get the details for. <code>PolicyId</code> is returned by <code>PutPolicy</code> and by <code>ListPolicies</code>.',
        }),
    ),
    MemberAccount: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account that owns the resources that you want to get the details for.',
        }),
    ),
  })
  .openapi({ required: ['PolicyId', 'MemberAccount'], title: 'GetComplianceDetailRequest' })
  .openapi('GetComplianceDetailRequest')

const GetNotificationChannelResponseSchema = z
  .object({
    SnsTopicArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The SNS topic that records Firewall Manager activity. ' }),
    ).exactOptional(),
    SnsRoleName: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The IAM role that is used by Firewall Manager to record activity to SNS.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetNotificationChannelResponse')

const GetNotificationChannelRequestSchema = z
  .object({})
  .openapi({ title: 'GetNotificationChannelRequest' })
  .openapi('GetNotificationChannelRequest')

const PolicyUpdateTokenSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(1024)
  .openapi('PolicyUpdateToken')

const ManagedServiceDataSchema = z
  .string()
  .regex(/^((?!\\[nr]).)+/)
  .min(1)
  .max(10000)
  .openapi('ManagedServiceData')

const FirewallDeploymentModelSchema = z
  .enum(['CENTRALIZED', 'DISTRIBUTED'])
  .openapi('FirewallDeploymentModel')

const NetworkFirewallPolicySchema = z
  .object({
    FirewallDeploymentModel: FirewallDeploymentModelSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the deployment model to use for the firewall policy. To use a distributed model, set <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html">PolicyOption</a> to <code>NULL</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Configures the firewall policy deployment model of Network Firewall. For information about Network Firewall deployment models, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/architectures.html">Network Firewall example architectures with routing</a> in the <i>Network Firewall Developer Guide</i>.',
    required: [],
  })
  .openapi('NetworkFirewallPolicy')

const ThirdPartyFirewallPolicySchema = z
  .object({
    FirewallDeploymentModel: FirewallDeploymentModelSchema.and(
      z
        .any()
        .openapi({
          description: 'Defines the deployment model to use for the third-party firewall policy.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Configures the deployment model for the third-party firewall.',
    required: [],
  })
  .openapi('ThirdPartyFirewallPolicy')

const PolicyOptionSchema = z
  .object({
    NetworkFirewallPolicy: NetworkFirewallPolicySchema.and(
      z
        .any()
        .openapi({ description: 'Defines the deployment model to use for the firewall policy.' }),
    ).exactOptional(),
    ThirdPartyFirewallPolicy: ThirdPartyFirewallPolicySchema.and(
      z
        .any()
        .openapi({ description: 'Defines the policy options for a third-party firewall policy.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Contains the Network Firewall firewall policy options to configure the policy's deployment model and third-party firewall policy settings.",
    required: [],
  })
  .openapi('PolicyOption')

const SecurityServicePolicyDataSchema = z
  .object({
    Type: SecurityServiceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The service that the policy is using to protect the resources. This specifies the type of policy that is created, either an WAF policy, a Shield Advanced policy, or a security group policy. For security group policies, Firewall Manager supports one security group for each common policy and for each content audit policy. This is an adjustable limit that you can increase by contacting Amazon Web Services Support.',
        }),
    ),
    ManagedServiceData: ManagedServiceDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Details about the service that are specific to the service type, in JSON format. </p> <ul> <li> <p>Example: <code>DNS_FIREWALL</code> </p> <p> <code>"{\\"type\\":\\"DNS_FIREWALL\\",\\"preProcessRuleGroups\\":[{\\"ruleGroupId\\":\\"rslvr-frg-1\\",\\"priority\\":10}],\\"postProcessRuleGroups\\":[{\\"ruleGroupId\\":\\"rslvr-frg-2\\",\\"priority\\":9911}]}"</code> </p> <note> <p>Valid values for <code>preProcessRuleGroups</code> are between 1 and 99. Valid values for <code>postProcessRuleGroups</code> are between 9901 and 10000.</p> </note> </li> <li> <p>Example: <code>IMPORT_NETWORK_FIREWALL</code> <code>"{\\"type\\":\\"IMPORT_NETWORK_FIREWALL\\",\\"awsNetworkFirewallConfig\\":{\\"networkFirewallStatelessRuleGroupReferences\\":[{\\"resourceARN\\":\\"arn:aws:network-firewall:us-west-2:000000000000:stateless-rulegroup\\/rg1\\",\\"priority\\":1}],\\"networkFirewallStatelessDefaultActions\\":[\\"aws:drop\\"],\\"networkFirewallStatelessFragmentDefaultActions\\":[\\"aws:pass\\"],\\"networkFirewallStatelessCustomActions\\":[],\\"networkFirewallStatefulRuleGroupReferences\\":[{\\"resourceARN\\":\\"arn:aws:network-firewall:us-west-2:aws-managed:stateful-rulegroup\\/ThreatSignaturesEmergingEventsStrictOrder\\",\\"priority\\":8}],\\"networkFirewallStatefulEngineOptions\\":{\\"ruleOrder\\":\\"STRICT_ORDER\\"},\\"networkFirewallStatefulDefaultActions\\":[\\"aws:drop_strict\\"]}}"</code> </p> <p> <code>"{\\"type\\":\\"DNS_FIREWALL\\",\\"preProcessRuleGroups\\":[{\\"ruleGroupId\\":\\"rslvr-frg-1\\",\\"priority\\":10}],\\"postProcessRuleGroups\\":[{\\"ruleGroupId\\":\\"rslvr-frg-2\\",\\"priority\\":9911}]}"</code> </p> <note> <p>Valid values for <code>preProcessRuleGroups</code> are between 1 and 99. Valid values for <code>postProcessRuleGroups</code> are between 9901 and 10000.</p> </note> </li> <li> <p>Example: <code>NETWORK_FIREWALL</code> - Centralized deployment model</p> <p> <code>"{\\"type\\":\\"NETWORK_FIREWALL\\",\\"awsNetworkFirewallConfig\\":{\\"networkFirewallStatelessRuleGroupReferences\\":[{\\"resourceARN\\":\\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\\",\\"priority\\":1}],\\"networkFirewallStatelessDefaultActions\\":[\\"aws:forward_to_sfe\\",\\"customActionName\\"],\\"networkFirewallStatelessFragmentDefaultActions\\":[\\"aws:forward_to_sfe\\",\\"customActionName\\"],\\"networkFirewallStatelessCustomActions\\":[{\\"actionName\\":\\"customActionName\\",\\"actionDefinition\\":{\\"publishMetricAction\\":{\\"dimensions\\":[{\\"value\\":\\"metricdimensionvalue\\"}]}}}],\\"networkFirewallStatefulRuleGroupReferences\\":[{\\"resourceARN\\":\\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\\"}],\\"networkFirewallLoggingConfiguration\\":{\\"logDestinationConfigs\\":[{\\"logDestinationType\\":\\"S3\\",\\"logType\\":\\"ALERT\\",\\"logDestination\\":{\\"bucketName\\":\\"s3-bucket-name\\"}},{\\"logDestinationType\\":\\"S3\\",\\"logType\\":\\"FLOW\\",\\"logDestination\\":{\\"bucketName\\":\\"s3-bucket-name\\"}}],\\"overrideExistingConfig\\":true}},\\"firewallDeploymentModel\\":{\\"centralizedFirewallDeploymentModel\\":{\\"centralizedFirewallOrchestrationConfig\\":{\\"inspectionVpcIds\\":[{\\"resourceId\\":\\"vpc-1234\\",\\"accountId\\":\\"123456789011\\"}],\\"firewallCreationConfig\\":{\\"endpointLocation\\":{\\"availabilityZoneConfigList\\":[{\\"availabilityZoneId\\":null,\\"availabilityZoneName\\":\\"us-east-1a\\",\\"allowedIPV4CidrList\\":[\\"10.0.0.0/28\\"]}]}},\\"allowedIPV4CidrList\\":[]}}}}"</code> </p> <p> To use the centralized deployment model, you must set <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html">PolicyOption</a> to <code>CENTRALIZED</code>. </p> </li> <li> <p>Example: <code>NETWORK_FIREWALL</code> - Distributed deployment model with automatic Availability Zone configuration</p> <p> <code> "{\\"type\\":\\"NETWORK_FIREWALL\\",\\"networkFirewallStatelessRuleGroupReferences\\":[{\\"resourceARN\\":\\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\\",\\"priority\\":1}],\\"networkFirewallStatelessDefaultActions\\":[\\"aws:forward_to_sfe\\",\\"customActionName\\"],\\"networkFirewallStatelessFragmentDefaultActions\\":[\\"aws:forward_to_sfe\\",\\"customActionName\\"],\\"networkFirewallStatelessCustomActions\\":[{\\"actionName\\":\\"customActionName\\",\\"actionDefinition\\":{\\"publishMetricAction\\":{\\"dimensions\\":[{\\"value\\":\\"metricdimensionvalue\\"}]}}}],\\"networkFirewallStatefulRuleGroupReferences\\":[{\\"resourceARN\\":\\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\\"}],\\"networkFirewallOrchestrationConfig\\":{\\"singleFirewallEndpointPerVPC\\":false,\\"allowedIPV4CidrList\\":[\\"10.0.0.0/28\\",\\"192.168.0.0/28\\"],\\"routeManagementAction\\":\\"OFF\\"},\\"networkFirewallLoggingConfiguration\\":{\\"logDestinationConfigs\\":[{\\"logDestinationType\\":\\"S3\\",\\"logType\\":\\"ALERT\\",\\"logDestination\\":{\\"bucketName\\":\\"s3-bucket-name\\"}},{\\"logDestinationType\\":\\"S3\\",\\"logType\\":\\"FLOW\\",\\"logDestination\\":{\\"bucketName\\":\\"s3-bucket-name\\"}}],\\"overrideExistingConfig\\":true}}" </code> </p> <p> With automatic Availbility Zone configuration, Firewall Manager chooses which Availability Zones to create the endpoints in. To use the distributed deployment model, you must set <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html">PolicyOption</a> to <code>NULL</code>. </p> </li> <li> <p>Example: <code>NETWORK_FIREWALL</code> - Distributed deployment model with automatic Availability Zone configuration and route management</p> <p> <code> "{\\"type\\":\\"NETWORK_FIREWALL\\",\\"networkFirewallStatelessRuleGroupReferences\\":[{\\"resourceARN\\":\\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\\",\\"priority\\":1}],\\"networkFirewallStatelessDefaultActions\\":[\\"aws:forward_to_sfe\\",\\"customActionName\\"],\\"networkFirewallStatelessFragmentDefaultActions\\":[\\"aws:forward_to_sfe\\",\\"customActionName\\"],\\"networkFirewallStatelessCustomActions\\":[{\\"actionName\\":\\"customActionName\\",\\"actionDefinition\\":{\\"publishMetricAction\\":{\\"dimensions\\":[{\\"value\\":\\"metricdimensionvalue\\"}]}}}],\\"networkFirewallStatefulRuleGroupReferences\\":[{\\"resourceARN\\":\\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\\"}],\\"networkFirewallOrchestrationConfig\\":{\\"singleFirewallEndpointPerVPC\\":false,\\"allowedIPV4CidrList\\":[\\"10.0.0.0/28\\",\\"192.168.0.0/28\\"],\\"routeManagementAction\\":\\"MONITOR\\",\\"routeManagementTargetTypes\\":[\\"InternetGateway\\"]},\\"networkFirewallLoggingConfiguration\\":{\\"logDestinationConfigs\\":[{\\"logDestinationType\\":\\"S3\\",\\"logType\\":\\"ALERT\\",\\"logDestination\\":{\\"bucketName\\":\\"s3-bucket-name\\"}},{\\"logDestinationType\\":\\"S3\\",\\"logType\\": \\"FLOW\\",\\"logDestination\\":{\\"bucketName\\":\\"s3-bucket-name\\"}}],\\"overrideExistingConfig\\":true}}" </code> </p> <p>To use the distributed deployment model, you must set <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html">PolicyOption</a> to <code>NULL</code>. </p> </li> <li> <p>Example: <code>NETWORK_FIREWALL</code> - Distributed deployment model with custom Availability Zone configuration</p> <p> <code>"{\\"type\\":\\"NETWORK_FIREWALL\\",\\"networkFirewallStatelessRuleGroupReferences\\":[{\\"resourceARN\\":\\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\\",\\"priority\\":1}],\\"networkFirewallStatelessDefaultActions\\":[\\"aws:forward_to_sfe\\",\\"customActionName\\"],\\"networkFirewallStatelessFragmentDefaultActions\\":[\\"aws:forward_to_sfe\\",\\"fragmentcustomactionname\\"],\\"networkFirewallStatelessCustomActions\\":[{\\"actionName\\":\\"customActionName\\", \\"actionDefinition\\":{\\"publishMetricAction\\":{\\"dimensions\\":[{\\"value\\":\\"metricdimensionvalue\\"}]}}},{\\"actionName\\":\\"fragmentcustomactionname\\",\\"actionDefinition\\":{\\"publishMetricAction\\":{\\"dimensions\\":[{\\"value\\":\\"fragmentmetricdimensionvalue\\"}]}}}],\\"networkFirewallStatefulRuleGroupReferences\\":[{\\"resourceARN\\":\\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\\"}],\\"networkFirewallOrchestrationConfig\\":{\\"firewallCreationConfig\\":{ \\"endpointLocation\\":{\\"availabilityZoneConfigList\\":[{\\"availabilityZoneName\\":\\"us-east-1a\\",\\"allowedIPV4CidrList\\":[\\"10.0.0.0/28\\"]},{\\"availabilityZoneName\\":\\"us-east-1b\\",\\"allowedIPV4CidrList\\":[ \\"10.0.0.0/28\\"]}]} },\\"singleFirewallEndpointPerVPC\\":false,\\"allowedIPV4CidrList\\":null,\\"routeManagementAction\\":\\"OFF\\",\\"networkFirewallLoggingConfiguration\\":{\\"logDestinationConfigs\\":[{\\"logDestinationType\\":\\"S3\\",\\"logType\\":\\"ALERT\\",\\"logDestination\\":{\\"bucketName\\":\\"s3-bucket-name\\"}},{\\"logDestinationType\\":\\"S3\\",\\"logType\\":\\"FLOW\\",\\"logDestination\\":{\\"bucketName\\":\\"s3-bucket-name\\"}}],\\"overrideExistingConfig\\":boolean}}" </code> </p> <p> With custom Availability Zone configuration, you define which specific Availability Zones to create endpoints in by configuring <code>firewallCreationConfig</code>. To configure the Availability Zones in <code>firewallCreationConfig</code>, specify either the <code>availabilityZoneName</code> or <code>availabilityZoneId</code> parameter, not both parameters. </p> <p>To use the distributed deployment model, you must set <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html">PolicyOption</a> to <code>NULL</code>. </p> </li> <li> <p>Example: <code>NETWORK_FIREWALL</code> - Distributed deployment model with custom Availability Zone configuration and route management</p> <p> <code>"{\\"type\\":\\"NETWORK_FIREWALL\\",\\"networkFirewallStatelessRuleGroupReferences\\":[{\\"resourceARN\\":\\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\\",\\"priority\\":1}],\\"networkFirewallStatelessDefaultActions\\":[\\"aws:forward_to_sfe\\",\\"customActionName\\"],\\"networkFirewallStatelessFragmentDefaultActions\\":[\\"aws:forward_to_sfe\\",\\"fragmentcustomactionname\\"],\\"networkFirewallStatelessCustomActions\\":[{\\"actionName\\":\\"customActionName\\",\\"actionDefinition\\":{\\"publishMetricAction\\":{\\"dimensions\\":[{\\"value\\":\\"metricdimensionvalue\\"}]}}},{\\"actionName\\":\\"fragmentcustomactionname\\",\\"actionDefinition\\":{\\"publishMetricAction\\":{\\"dimensions\\":[{\\"value\\":\\"fragmentmetricdimensionvalue\\"}]}}}],\\"networkFirewallStatefulRuleGroupReferences\\":[{\\"resourceARN\\":\\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\\"}],\\"networkFirewallOrchestrationConfig\\":{\\"firewallCreationConfig\\":{\\"endpointLocation\\":{\\"availabilityZoneConfigList\\":[{\\"availabilityZoneName\\":\\"us-east-1a\\",\\"allowedIPV4CidrList\\":[\\"10.0.0.0/28\\"]},{\\"availabilityZoneName\\":\\"us-east-1b\\",\\"allowedIPV4CidrList\\":[\\"10.0.0.0/28\\"]}]}},\\"singleFirewallEndpointPerVPC\\":false,\\"allowedIPV4CidrList\\":null,\\"routeManagementAction\\":\\"MONITOR\\",\\"routeManagementTargetTypes\\":[\\"InternetGateway\\"],\\"routeManagementConfig\\":{\\"allowCrossAZTrafficIfNoEndpoint\\":true}},\\"networkFirewallLoggingConfiguration\\":{\\"logDestinationConfigs\\":[{\\"logDestinationType\\":\\"S3\\",\\"logType\\":\\"ALERT\\",\\"logDestination\\":{\\"bucketName\\":\\"s3-bucket-name\\"}},{\\"logDestinationType\\":\\"S3\\",\\"logType\\":\\"FLOW\\",\\"logDestination\\":{\\"bucketName\\":\\"s3-bucket-name\\"}}],\\"overrideExistingConfig\\":boolean}}" </code> </p> <p>To use the distributed deployment model, you must set <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html">PolicyOption</a> to <code>NULL</code>. </p> </li> <li> <p>Example: <code>THIRD_PARTY_FIREWALL</code> </p> <p> <code>"{ "type":"THIRD_PARTY_FIREWALL", "thirdPartyFirewall":"PALO_ALTO_NETWORKS_CLOUD_NGFW", "thirdPartyFirewallConfig":{ "thirdPartyFirewallPolicyList":["global-1"] }, "firewallDeploymentModel":{ "distributedFirewallDeploymentModel":{ "distributedFirewallOrchestrationConfig":{ "firewallCreationConfig":{ "endpointLocation":{ "availabilityZoneConfigList":[ { "availabilityZoneName":"${AvailabilityZone}" } ] } }, "allowedIPV4CidrList":[ ] } } } }"</code> </p> </li> <li> <p>Example: <code>SECURITY_GROUPS_COMMON</code> </p> <p> <code>"{\\"type\\":\\"SECURITY_GROUPS_COMMON\\",\\"revertManualSecurityGroupChanges\\":false,\\"exclusiveResourceSecurityGroupManagement\\":false, \\"applyToAllEC2InstanceENIs\\":false,\\"securityGroups\\":[{\\"id\\":\\" sg-000e55995d61a06bd\\"}]}"</code> </p> </li> <li> <p>Example: <code>SECURITY_GROUPS_COMMON</code> - Security group tag distribution </p> <p> <code>""{\\"type\\":\\"SECURITY_GROUPS_COMMON\\",\\"securityGroups\\":[{\\"id\\":\\"sg-000e55995d61a06bd\\"}],\\"revertManualSecurityGroupChanges\\":true,\\"exclusiveResourceSecurityGroupManagement\\":false,\\"applyToAllEC2InstanceENIs\\":false,\\"includeSharedVPC\\":false,\\"enableTagDistribution\\":true}""</code> </p> <p> Firewall Manager automatically distributes tags from the primary group to the security groups created by this policy. To use security group tag distribution, you must also set <code>revertManualSecurityGroupChanges</code> to <code>true</code>, otherwise Firewall Manager won\'t be able to create the policy. When you enable <code>revertManualSecurityGroupChanges</code>, Firewall Manager identifies and reports when the security groups created by this policy become non-compliant. </p> <p> Firewall Manager won\'t distrubute system tags added by Amazon Web Services services into the replica security groups. System tags begin with the <code>aws:</code> prefix. </p> </li> <li> <p>Example: Shared VPCs. Apply the preceding policy to resources in shared VPCs as well as to those in VPCs that the account owns </p> <p> <code>"{\\"type\\":\\"SECURITY_GROUPS_COMMON\\",\\"revertManualSecurityGroupChanges\\":false,\\"exclusiveResourceSecurityGroupManagement\\":false, \\"applyToAllEC2InstanceENIs\\":false,\\"includeSharedVPC\\":true,\\"securityGroups\\":[{\\"id\\":\\" sg-000e55995d61a06bd\\"}]}"</code> </p> </li> <li> <p>Example: <code>SECURITY_GROUPS_CONTENT_AUDIT</code> </p> <p> <code>"{\\"type\\":\\"SECURITY_GROUPS_CONTENT_AUDIT\\",\\"securityGroups\\":[{\\"id\\":\\"sg-000e55995d61a06bd\\"}],\\"securityGroupAction\\":{\\"type\\":\\"ALLOW\\"}}"</code> </p> <p>The security group action for content audit can be <code>ALLOW</code> or <code>DENY</code>. For <code>ALLOW</code>, all in-scope security group rules must be within the allowed range of the policy\'s security group rules. For <code>DENY</code>, all in-scope security group rules must not contain a value or a range that matches a rule value or range in the policy security group.</p> </li> <li> <p>Example: <code>SECURITY_GROUPS_USAGE_AUDIT</code> </p> <p> <code>"{\\"type\\":\\"SECURITY_GROUPS_USAGE_AUDIT\\",\\"deleteUnusedSecurityGroups\\":true,\\"coalesceRedundantSecurityGroups\\":true}"</code> </p> </li> <li> <p>Specification for <code>SHIELD_ADVANCED</code> for Amazon CloudFront distributions </p> <p> <code>"{\\"type\\":\\"SHIELD_ADVANCED\\",\\"automaticResponseConfiguration\\": {\\"automaticResponseStatus\\":\\"ENABLED|IGNORED|DISABLED\\", \\"automaticResponseAction\\":\\"BLOCK|COUNT\\"}, \\"overrideCustomerWebaclClassic\\":true|false}"</code> </p> <p>For example: <code>"{\\"type\\":\\"SHIELD_ADVANCED\\",\\"automaticResponseConfiguration\\": {\\"automaticResponseStatus\\":\\"ENABLED\\", \\"automaticResponseAction\\":\\"COUNT\\"}}"</code> </p> <p>The default value for <code>automaticResponseStatus</code> is <code>IGNORED</code>. The value for <code>automaticResponseAction</code> is only required when <code>automaticResponseStatus</code> is set to <code>ENABLED</code>. The default value for <code>overrideCustomerWebaclClassic</code> is <code>false</code>.</p> <p>For other resource types that you can protect with a Shield Advanced policy, this <code>ManagedServiceData</code> configuration is an empty string.</p> </li> <li> <p>Example: <code>WAFV2</code> - Account takeover prevention and Bot Control managed rule groups, and rule action override </p> <p> <code>"{\\"type\\":\\"WAFV2\\",\\"preProcessRuleGroups\\":[{\\"ruleGroupArn\\":null,\\"overrideAction\\":{\\"type\\":\\"NONE\\"},\\"managedRuleGroupIdentifier\\":{\\"versionEnabled\\":null,\\"version\\":null,\\"vendorName\\":\\"AWS\\",\\"managedRuleGroupName\\":\\"AWSManagedRulesATPRuleSet\\",\\"managedRuleGroupConfigs\\":[{\\"awsmanagedRulesATPRuleSet\\":{\\"loginPath\\":\\"/loginpath\\",\\"requestInspection\\":{\\"payloadType\\":\\"FORM_ENCODED|JSON\\",\\"usernameField\\":{\\"identifier\\":\\"/form/username\\"},\\"passwordField\\":{\\"identifier\\":\\"/form/password\\"}}}}]},\\"ruleGroupType\\":\\"ManagedRuleGroup\\",\\"excludeRules\\":[],\\"sampledRequestsEnabled\\":true},{\\"ruleGroupArn\\":null,\\"overrideAction\\":{\\"type\\":\\"NONE\\"},\\"managedRuleGroupIdentifier\\":{\\"versionEnabled\\":null,\\"version\\":null,\\"vendorName\\":\\"AWS\\",\\"managedRuleGroupName\\":\\"AWSManagedRulesBotControlRuleSet\\",\\"managedRuleGroupConfigs\\":[{\\"awsmanagedRulesBotControlRuleSet\\":{\\"inspectionLevel\\":\\"TARGETED|COMMON\\"}}]},\\"ruleGroupType\\":\\"ManagedRuleGroup\\",\\"excludeRules\\":[],\\"sampledRequestsEnabled\\":true,\\"ruleActionOverrides\\":[{\\"name\\":\\"Rule1\\",\\"actionToUse\\":{\\"allow|block|count|captcha|challenge\\":{}}},{\\"name\\":\\"Rule2\\",\\"actionToUse\\":{\\"allow|block|count|captcha|challenge\\":{}}}]}],\\"postProcessRuleGroups\\":[],\\"defaultAction\\":{\\"type\\":\\"ALLOW\\"},\\"customRequestHandling\\":null,\\"customResponse\\":null,\\"overrideCustomerWebACLAssociation\\":false,\\"loggingConfiguration\\":null,\\"sampledRequestsEnabledForDefaultActions\\":true}"</code> </p> <ul> <li> <p>Fraud Control account takeover prevention (ATP) - For information about the properties available for <code>AWSManagedRulesATPRuleSet</code> managed rule groups, see <a href="https://docs.aws.amazon.com/waf/latest/APIReference/API_AWSManagedRulesATPRuleSet.html">AWSManagedRulesATPRuleSet</a> in the <i>WAF API Reference</i>.</p> </li> <li> <p>Bot Control - For information about <code>AWSManagedRulesBotControlRuleSet</code> managed rule groups, see <a href="https://docs.aws.amazon.com/waf/latest/APIReference/API_AWSManagedRulesBotControlRuleSet.html">AWSManagedRulesBotControlRuleSet</a> in the <i>WAF API Reference</i>.</p> </li> <li> <p>Rule action overrides - Firewall Manager supports rule action overrides only for managed rule groups. To configure a <code>RuleActionOverrides</code> add the <code>Name</code> of the rule to override, and <code>ActionToUse</code>, which is the new action to use for the rule. For information about using rule action override, see <a href="https://docs.aws.amazon.com/waf/latest/APIReference/API_RuleActionOverride.html">RuleActionOverride</a> in the <i>WAF API Reference</i>.</p> </li> </ul> </li> <li> <p>Example: <code>WAFV2</code> - <code>CAPTCHA</code> and <code>Challenge</code> configs </p> <p> <code>"{\\"type\\":\\"WAFV2\\",\\"preProcessRuleGroups\\":[{\\"ruleGroupArn\\":null,\\"overrideAction\\":{\\"type\\":\\"NONE\\"},\\"managedRuleGroupIdentifier\\":{\\"versionEnabled\\":null,\\"version\\":null,\\"vendorName\\":\\"AWS\\",\\"managedRuleGroupName\\":\\"AWSManagedRulesAdminProtectionRuleSet\\"},\\"ruleGroupType\\":\\"ManagedRuleGroup\\",\\"excludeRules\\":[],\\"sampledRequestsEnabled\\":true}],\\"postProcessRuleGroups\\":[],\\"defaultAction\\":{\\"type\\":\\"ALLOW\\"},\\"customRequestHandling\\":null,\\"customResponse\\":null,\\"overrideCustomerWebACLAssociation\\":false,\\"loggingConfiguration\\":null,\\"sampledRequestsEnabledForDefaultActions\\":true,\\"captchaConfig\\":{\\"immunityTimeProperty\\":{\\"immunityTime\\":500}},\\"challengeConfig\\":{\\"immunityTimeProperty\\":{\\"immunityTime\\":800}},\\"tokenDomains\\":[\\"google.com\\",\\"amazon.com\\"]}"</code> </p> <p>If you update the policy\'s values for <code>captchaConfig</code>, <code>challengeConfig</code>, or <code>tokenDomains</code>, Firewall Manager will overwrite your local web ACLs to contain the new value(s). However, if you don\'t update the policy\'s <code>captchaConfig</code>, <code>challengeConfig</code>, or <code>tokenDomains</code> values, the values in your local web ACLs will remain unchanged. For information about CAPTCHA and Challenge configs, see <a href="https://docs.aws.amazon.com/waf/latest/APIReference/API_CaptchaConfig.html">CaptchaConfig</a> and <a href="https://docs.aws.amazon.com/waf/latest/APIReference/API_ChallengeConfig.html">ChallengeConfig</a> in the <i>WAF API Reference</i>.</p> </li> <li> <p>Example: <code>WAFV2</code> - Firewall Manager support for WAF managed rule group versioning </p> <p> <code>"{\\"type\\":\\"WAFV2\\",\\"preProcessRuleGroups\\":[{\\"ruleGroupArn\\":null,\\"overrideAction\\":{\\"type\\":\\"NONE\\"},\\"managedRuleGroupIdentifier\\":{\\"versionEnabled\\":true,\\"version\\":\\"Version_2.0\\",\\"vendorName\\":\\"AWS\\",\\"managedRuleGroupName\\":\\"AWSManagedRulesCommonRuleSet\\"},\\"ruleGroupType\\":\\"ManagedRuleGroup\\",\\"excludeRules\\":[{\\"name\\":\\"NoUserAgent_HEADER\\"}]}],\\"postProcessRuleGroups\\":[],\\"defaultAction\\":{\\"type\\":\\"ALLOW\\"},\\"overrideCustomerWebACLAssociation\\":false,\\"loggingConfiguration\\":{\\"logDestinationConfigs\\":[\\"arn:aws:firehose:us-west-2:12345678912:deliverystream/aws-waf-logs-fms-admin-destination\\"],\\"redactedFields\\":[{\\"redactedFieldType\\":\\"SingleHeader\\",\\"redactedFieldValue\\":\\"Cookies\\"},{\\"redactedFieldType\\":\\"Method\\"}]}}"</code> </p> <p> To use a specific version of a WAF managed rule group in your Firewall Manager policy, you must set <code>versionEnabled</code> to <code>true</code>, and set <code>version</code> to the version you\'d like to use. If you don\'t set <code>versionEnabled</code> to <code>true</code>, or if you omit <code>versionEnabled</code>, then Firewall Manager uses the default version of the WAF managed rule group. </p> </li> <li> <p>Example: <code>WAFV2</code> - Logging configurations </p> <p> <code>"{\\"type\\":\\"WAFV2\\",\\"preProcessRuleGroups\\":[{\\"ruleGroupArn\\":null, \\"overrideAction\\":{\\"type\\":\\"NONE\\"},\\"managedRuleGroupIdentifier\\": {\\"versionEnabled\\":null,\\"version\\":null,\\"vendorName\\":\\"AWS\\", \\"managedRuleGroupName\\":\\"AWSManagedRulesAdminProtectionRuleSet\\"} ,\\"ruleGroupType\\":\\"ManagedRuleGroup\\",\\"excludeRules\\":[], \\"sampledRequestsEnabled\\":true}],\\"postProcessRuleGroups\\":[], \\"defaultAction\\":{\\"type\\":\\"ALLOW\\"},\\"customRequestHandling\\" :null,\\"customResponse\\":null,\\"overrideCustomerWebACLAssociation\\" :false,\\"loggingConfiguration\\":{\\"logDestinationConfigs\\": [\\"arn:aws:s3:::aws-waf-logs-example-bucket\\"] ,\\"redactedFields\\":[],\\"loggingFilterConfigs\\":{\\"defaultBehavior\\":\\"KEEP\\", \\"filters\\":[{\\"behavior\\":\\"KEEP\\",\\"requirement\\":\\"MEETS_ALL\\", \\"conditions\\":[{\\"actionCondition\\":\\"CAPTCHA\\"},{\\"actionCondition\\": \\"CHALLENGE\\"}, {\\"actionCondition\\":\\"EXCLUDED_AS_COUNT\\"}]}]}},\\"sampledRequestsEnabledForDefaultActions\\":true}"</code> </p> <p>Firewall Manager supports Amazon Kinesis Data Firehose and Amazon S3 as the <code>logDestinationConfigs</code> in your <code>loggingConfiguration</code>. For information about WAF logging configurations, see <a href="https://docs.aws.amazon.com/waf/latest/APIReference/API_LoggingConfiguration.html">LoggingConfiguration</a> in the <i>WAF API Reference</i> </p> <p>In the <code>loggingConfiguration</code>, you can specify one <code>logDestinationConfigs</code>. Optionally provide as many as 20 <code>redactedFields</code>. The <code>RedactedFieldType</code> must be one of <code>URI</code>, <code>QUERY_STRING</code>, <code>HEADER</code>, or <code>METHOD</code>.</p> </li> <li> <p>Example: <code>WAF Classic</code> </p> <p> <code>"{\\"type\\": \\"WAF\\", \\"ruleGroups\\": [{\\"id\\":\\"12345678-1bcd-9012-efga-0987654321ab\\", \\"overrideAction\\" : {\\"type\\": \\"COUNT\\"}}], \\"defaultAction\\": {\\"type\\": \\"BLOCK\\"}}"</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    PolicyOption: PolicyOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the Network Firewall firewall policy options to configure a centralized deployment model.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Type'],
    description: 'Details about the security service that is being used to protect the resources.',
  })
  .openapi('SecurityServicePolicyData')

const ResourceTypeListSchema = z.array(ResourceTypeSchema).openapi('ResourceTypeList')

const ResourceTagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('ResourceTagKey')

const ResourceTagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .max(256)
  .openapi('ResourceTagValue')

const ResourceTagSchema = z
  .object({
    Key: ResourceTagKeySchema.and(z.any().openapi({ description: 'The resource tag key.' })),
    Value: ResourceTagValueSchema.and(
      z.any().openapi({ description: 'The resource tag value.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Key'],
    description:
      'The resource tags that Firewall Manager uses to determine if a particular resource should be included or excluded from the Firewall Manager policy. Tags enable you to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value. Firewall Manager combines the tags with "AND" so that, if you add more than one tag to a policy scope, a resource must have all the specified tags to be included or excluded. For more information, see <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html">Working with Tag Editor</a>.',
  })
  .openapi('ResourceTag')

const ResourceTagsSchema = z.array(ResourceTagSchema).min(0).max(8).openapi('ResourceTags')

const CustomerPolicyScopeIdSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(1024)
  .openapi('CustomerPolicyScopeId')

const CustomerPolicyScopeIdListSchema = z
  .array(CustomerPolicyScopeIdSchema)
  .openapi('CustomerPolicyScopeIdList')

const CustomerPolicyScopeMapSchema = z
  .record(z.string(), CustomerPolicyScopeIdListSchema)
  .openapi('CustomerPolicyScopeMap')

const ResourceSetIdsSchema = z.array(Base62IdSchema).openapi('ResourceSetIds')

const ResourceDescriptionSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .max(256)
  .openapi('ResourceDescription')

const CustomerPolicyStatusSchema = z
  .enum(['ACTIVE', 'OUT_OF_ADMIN_SCOPE'])
  .openapi('CustomerPolicyStatus')

const PolicySchema = z
  .object({
    PolicyId: PolicyIdSchema.and(
      z.any().openapi({ description: 'The ID of the Firewall Manager policy.' }),
    ).exactOptional(),
    PolicyName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Firewall Manager policy.' }),
    ),
    PolicyUpdateToken: PolicyUpdateTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for each update to the policy. When issuing a <code>PutPolicy</code> request, the <code>PolicyUpdateToken</code> in the request must match the <code>PolicyUpdateToken</code> of the current policy version. To get the <code>PolicyUpdateToken</code> of the current policy version, use a <code>GetPolicy</code> request.',
        }),
    ).exactOptional(),
    SecurityServicePolicyData: SecurityServicePolicyDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details about the security service that is being used to protect the resources.',
        }),
    ),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of resource protected by or in scope of the policy. This is in the format shown in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services Resource Types Reference</a>. To apply this policy to multiple resource types, specify a resource type of <code>ResourceTypeList</code> and then specify the resource types in a <code>ResourceTypeList</code>.</p> <p>For WAF and Shield Advanced, resource types include <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code>, <code>AWS::ElasticLoadBalancing::LoadBalancer</code>, <code>AWS::EC2::EIP</code>, and <code>AWS::CloudFront::Distribution</code>. For a security group common policy, valid values are <code>AWS::EC2::NetworkInterface</code> and <code>AWS::EC2::Instance</code>. For a security group content audit policy, valid values are <code>AWS::EC2::SecurityGroup</code>, <code>AWS::EC2::NetworkInterface</code>, and <code>AWS::EC2::Instance</code>. For a security group usage audit policy, the value is <code>AWS::EC2::SecurityGroup</code>. For an Network Firewall policy or DNS Firewall policy, the value is <code>AWS::EC2::VPC</code>.</p>',
        }),
    ),
    ResourceTypeList: ResourceTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>ResourceType</code> objects. Use this only to specify multiple resource types. To specify a single resource type, use <code>ResourceType</code>.',
        }),
    ).exactOptional(),
    ResourceTags: ResourceTagsSchema.and(
      z.any().openapi({ description: 'An array of <code>ResourceTag</code> objects.' }),
    ).exactOptional(),
    ExcludeResourceTags: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If set to <code>True</code>, resources with the tags that are specified in the <code>ResourceTag</code> array are not in scope of the policy. If set to <code>False</code>, and the <code>ResourceTag</code> array is not null, only resources with the specified tags are in scope of the policy.',
        }),
    ),
    RemediationEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates if the policy should be automatically applied to new resources.',
        }),
    ),
    DeleteUnusedFMManagedResources: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates whether Firewall Manager should automatically remove protections from resources that leave the policy scope and clean up resources that Firewall Manager is managing for accounts when those accounts leave policy scope. For example, Firewall Manager will disassociate a Firewall Manager managed web ACL from a protected customer resource when the customer resource leaves policy scope. </p> <p>By default, Firewall Manager doesn't remove protections or delete Firewall Manager managed resources. </p> <p>This option is not available for Shield Advanced or WAF Classic policies.</p>",
        }),
    ).exactOptional(),
    IncludeMap: CustomerPolicyScopeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the Amazon Web Services account IDs and Organizations organizational units (OUs) to include in the policy. Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time.</p> <p>You can specify inclusions or exclusions, but not both. If you specify an <code>IncludeMap</code>, Firewall Manager applies the policy to all accounts specified by the <code>IncludeMap</code>, and does not evaluate any <code>ExcludeMap</code> specifications. If you do not specify an <code>IncludeMap</code>, then Firewall Manager applies the policy to all accounts except for those specified by the <code>ExcludeMap</code>.</p> <p>You can specify account IDs, OUs, or a combination: </p> <ul> <li> <p>Specify account IDs by setting the key to <code>ACCOUNT</code>. For example, the following is a valid map: <code>{“ACCOUNT” : [“accountID1”, “accountID2”]}</code>.</p> </li> <li> <p>Specify OUs by setting the key to <code>ORG_UNIT</code>. For example, the following is a valid map: <code>{“ORG_UNIT” : [“ouid111”, “ouid112”]}</code>.</p> </li> <li> <p>Specify accounts and OUs together in a single map, separated with a comma. For example, the following is a valid map: <code>{“ACCOUNT” : [“accountID1”, “accountID2”], “ORG_UNIT” : [“ouid111”, “ouid112”]}</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ExcludeMap: CustomerPolicyScopeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the Amazon Web Services account IDs and Organizations organizational units (OUs) to exclude from the policy. Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time.</p> <p>You can specify inclusions or exclusions, but not both. If you specify an <code>IncludeMap</code>, Firewall Manager applies the policy to all accounts specified by the <code>IncludeMap</code>, and does not evaluate any <code>ExcludeMap</code> specifications. If you do not specify an <code>IncludeMap</code>, then Firewall Manager applies the policy to all accounts except for those specified by the <code>ExcludeMap</code>.</p> <p>You can specify account IDs, OUs, or a combination: </p> <ul> <li> <p>Specify account IDs by setting the key to <code>ACCOUNT</code>. For example, the following is a valid map: <code>{“ACCOUNT” : [“accountID1”, “accountID2”]}</code>.</p> </li> <li> <p>Specify OUs by setting the key to <code>ORG_UNIT</code>. For example, the following is a valid map: <code>{“ORG_UNIT” : [“ouid111”, “ouid112”]}</code>.</p> </li> <li> <p>Specify accounts and OUs together in a single map, separated with a comma. For example, the following is a valid map: <code>{“ACCOUNT” : [“accountID1”, “accountID2”], “ORG_UNIT” : [“ouid111”, “ouid112”]}</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ResourceSetIds: ResourceSetIdsSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifiers of the resource sets used by the policy.',
        }),
    ).exactOptional(),
    PolicyDescription: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'The definition of the Network Firewall firewall policy.' }),
    ).exactOptional(),
    PolicyStatus: CustomerPolicyStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates whether the policy is in or out of an admin's policy or Region scope.</p> <ul> <li> <p> <code>ACTIVE</code> - The administrator can manage and delete the policy.</p> </li> <li> <p> <code>OUT_OF_ADMIN_SCOPE</code> - The administrator can view the policy, but they can't edit or delete the policy. Existing policy protections stay in place. Any new resources that come into scope of the policy won't be protected.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'PolicyName',
      'SecurityServicePolicyData',
      'ResourceType',
      'ExcludeResourceTags',
      'RemediationEnabled',
    ],
    description: 'An Firewall Manager policy.',
  })
  .openapi('Policy')

const GetPolicyResponseSchema = z
  .object({
    Policy: PolicySchema.and(
      z.any().openapi({ description: 'Information about the specified Firewall Manager policy.' }),
    ).exactOptional(),
    PolicyArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the specified policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPolicyResponse')

const GetPolicyRequestSchema = z
  .object({
    PolicyId: PolicyIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Firewall Manager policy that you want the details for.',
        }),
    ),
  })
  .openapi({ required: ['PolicyId'], title: 'GetPolicyRequest' })
  .openapi('GetPolicyRequest')

const InvalidTypeExceptionSchema = z.any().openapi('InvalidTypeException')

const ProtectionDataSchema = z.string().openapi('ProtectionData')

const PaginationTokenSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(4096)
  .openapi('PaginationToken')

const GetProtectionStatusResponseSchema = z
  .object({
    AdminAccountId: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Firewall Manager administrator account for this policy.',
        }),
    ).exactOptional(),
    ServiceType: SecurityServiceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The service type that is protected by the policy. Currently, this is always <code>SHIELD_ADVANCED</code>.',
        }),
    ).exactOptional(),
    Data: ProtectionDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Details about the attack, including the following:</p> <ul> <li> <p>Attack type</p> </li> <li> <p>Account ID</p> </li> <li> <p>ARN of the resource attacked</p> </li> <li> <p>Start time of the attack</p> </li> <li> <p>End time of the attack (ongoing attacks will not have an end time)</p> </li> </ul> <p>The details are in JSON format. </p>',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you have more objects than the number that you specified for <code>MaxResults</code> in the request, the response includes a <code>NextToken</code> value. To list more objects, submit another <code>GetProtectionStatus</code> request, and specify the <code>NextToken</code> value from the response in the <code>NextToken</code> value in the next request.</p> <p>Amazon Web Services SDKs provide auto-pagination that identify <code>NextToken</code> in a response and make subsequent request calls automatically on your behalf. However, this feature is not supported by <code>GetProtectionStatus</code>. You must submit subsequent requests with <code>NextToken</code> using your own processes. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetProtectionStatusResponse')

const PaginationMaxResultsSchema = z.int().min(1).max(100).openapi('PaginationMaxResults')

const GetProtectionStatusRequestSchema = z
  .object({
    PolicyId: PolicyIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the policy for which you want to get the attack information.',
        }),
    ),
    MemberAccountId: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account that is in scope of the policy that you want to get the details for.',
        }),
    ).exactOptional(),
    StartTime: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start of the time period to query for the attacks. This is a <code>timestamp</code> type. The request syntax listing indicates a <code>number</code> type because the default used by Firewall Manager is Unix time in seconds. However, any valid <code>timestamp</code> format is allowed.',
        }),
    ).exactOptional(),
    EndTime: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end of the time period to query for the attacks. This is a <code>timestamp</code> type. The request syntax listing indicates a <code>number</code> type because the default used by Firewall Manager is Unix time in seconds. However, any valid <code>timestamp</code> format is allowed.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>MaxResults</code> and you have more objects than the number that you specify for <code>MaxResults</code>, Firewall Manager returns a <code>NextToken</code> value in the response, which you can use to retrieve another group of objects. For the second and subsequent <code>GetProtectionStatus</code> requests, specify the value of <code>NextToken</code> from the previous response to get information about another batch of objects.',
        }),
    ).exactOptional(),
    MaxResults: PaginationMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of objects that you want Firewall Manager to return for this request. If you have more objects than the number that you specify for <code>MaxResults</code>, the response includes a <code>NextToken</code> value that you can use to get another batch of objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PolicyId'], title: 'GetProtectionStatusRequest' })
  .openapi('GetProtectionStatusRequest')

const ProtocolsListSchema = z.array(ProtocolSchema).openapi('ProtocolsList')

const PreviousProtocolsListSchema = z
  .record(z.string(), ProtocolsListSchema)
  .openapi('PreviousProtocolsList')

const ProtocolsListDataSchema = z
  .object({
    ListId: ListIdSchema.and(
      z.any().openapi({ description: 'The ID of the Firewall Manager protocols list.' }),
    ).exactOptional(),
    ListName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Firewall Manager protocols list.' }),
    ),
    ListUpdateToken: UpdateTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for each update to the list. When you update the list, the update token must match the token of the current version of the application list. You can retrieve the update token by getting the list. ',
        }),
    ).exactOptional(),
    CreateTime: TimeStampSchema.and(
      z
        .any()
        .openapi({ description: 'The time that the Firewall Manager protocols list was created.' }),
    ).exactOptional(),
    LastUpdateTime: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time that the Firewall Manager protocols list was last updated.',
        }),
    ).exactOptional(),
    ProtocolsList: ProtocolsListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of protocols in the Firewall Manager protocols list.' }),
    ),
    PreviousProtocolsList: PreviousProtocolsListSchema.and(
      z
        .any()
        .openapi({
          description: 'A map of previous version numbers to their corresponding protocol arrays.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ListName', 'ProtocolsList'],
    description: 'An Firewall Manager protocols list.',
  })
  .openapi('ProtocolsListData')

const GetProtocolsListResponseSchema = z
  .object({
    ProtocolsList: ProtocolsListDataSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the specified Firewall Manager protocols list.',
        }),
    ).exactOptional(),
    ProtocolsListArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the specified protocols list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetProtocolsListResponse')

const GetProtocolsListRequestSchema = z
  .object({
    ListId: ListIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Firewall Manager protocols list that you want the details for.',
        }),
    ),
    DefaultList: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the list to retrieve is a default list owned by Firewall Manager.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ListId'], title: 'GetProtocolsListRequest' })
  .openapi('GetProtocolsListRequest')

const NameSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('Name')

const DescriptionSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .max(256)
  .openapi('Description')

const ResourceSetStatusSchema = z
  .enum(['ACTIVE', 'OUT_OF_ADMIN_SCOPE'])
  .openapi('ResourceSetStatus')

const ResourceSetSchema = z
  .object({
    Id: Base62IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the resource set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ).exactOptional(),
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The descriptive name of the resource set. You can't change the name of a resource set after you create it.",
        }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the resource set.' }),
    ).exactOptional(),
    UpdateToken: UpdateTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An optional token that you can use for optimistic locking. Firewall Manager returns a token to your requests that access the resource set. The token marks the state of the resource set resource at the time of the request. Update tokens are not allowed when creating a resource set. After creation, each subsequent update call to the resource set requires the update token. </p> <p>To make an unconditional change to the resource set, omit the token in your update request. Without the token, Firewall Manager performs your updates regardless of whether the resource set has changed since you last retrieved it.</p> <p>To make a conditional change to the resource set, provide the token in your update request. Firewall Manager uses the token to ensure that the resource set hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the resource set again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>",
        }),
    ).exactOptional(),
    ResourceTypeList: ResourceTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines the resources that can be associated to the resource set. Depending on your setting for max results and the number of resource sets, a single call might not return the full list.',
        }),
    ),
    LastUpdateTime: TimeStampSchema.and(
      z.any().openapi({ description: 'The last time that the resource set was changed.' }),
    ).exactOptional(),
    ResourceSetStatus: ResourceSetStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates whether the resource set is in or out of an admin's Region scope.</p> <ul> <li> <p> <code>ACTIVE</code> - The administrator can manage and delete the resource set.</p> </li> <li> <p> <code>OUT_OF_ADMIN_SCOPE</code> - The administrator can view the resource set, but they can't edit or delete the resource set. Existing protections stay in place. Any new resource that come into scope of the resource set won't be protected.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'ResourceTypeList'],
    description: 'A set of resources to include in a policy.',
  })
  .openapi('ResourceSet')

const GetResourceSetResponseSchema = z
  .object({
    ResourceSet: ResourceSetSchema.and(
      z.any().openapi({ description: 'Information about the specified resource set.' }),
    ),
    ResourceSetArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource set.' }),
    ),
  })
  .openapi({ required: ['ResourceSet', 'ResourceSetArn'] })
  .openapi('GetResourceSetResponse')

const GetResourceSetRequestSchema = z
  .object({
    Identifier: Base62IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the resource set, used in a request to refer to the resource set.',
        }),
    ),
  })
  .openapi({ required: ['Identifier'], title: 'GetResourceSetRequest' })
  .openapi('GetResourceSetRequest')

const MarketplaceSubscriptionOnboardingStatusSchema = z
  .enum(['NO_SUBSCRIPTION', 'NOT_COMPLETE', 'COMPLETE'])
  .openapi('MarketplaceSubscriptionOnboardingStatus')

const GetThirdPartyFirewallAssociationStatusResponseSchema = z
  .object({
    ThirdPartyFirewallStatus: ThirdPartyFirewallAssociationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The current status for setting a Firewall Manager policy administrators account as an administrator of the third-party firewall tenant.</p> <ul> <li> <p> <code>ONBOARDING</code> - The Firewall Manager policy administrator is being designated as a tenant administrator.</p> </li> <li> <p> <code>ONBOARD_COMPLETE</code> - The Firewall Manager policy administrator is designated as a tenant administrator.</p> </li> <li> <p> <code>OFFBOARDING</code> - The Firewall Manager policy administrator is being removed as a tenant administrator.</p> </li> <li> <p> <code>OFFBOARD_COMPLETE</code> - The Firewall Manager policy administrator has been removed as a tenant administrator.</p> </li> <li> <p> <code>NOT_EXIST</code> - The Firewall Manager policy administrator doesn't exist as a tenant administrator.</p> </li> </ul>",
        }),
    ).exactOptional(),
    MarketplaceOnboardingStatus: MarketplaceSubscriptionOnboardingStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status for subscribing to the third-party firewall vendor in the Amazon Web Services Marketplace.</p> <ul> <li> <p> <code>NO_SUBSCRIPTION</code> - The Firewall Manager policy administrator isn't subscribed to the third-party firewall service in the Amazon Web Services Marketplace.</p> </li> <li> <p> <code>NOT_COMPLETE</code> - The Firewall Manager policy administrator is in the process of subscribing to the third-party firewall service in the Amazon Web Services Marketplace, but doesn't yet have an active subscription.</p> </li> <li> <p> <code>COMPLETE</code> - The Firewall Manager policy administrator has an active subscription to the third-party firewall service in the Amazon Web Services Marketplace.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetThirdPartyFirewallAssociationStatusResponse')

const GetThirdPartyFirewallAssociationStatusRequestSchema = z
  .object({
    ThirdPartyFirewall: ThirdPartyFirewallSchema.and(
      z.any().openapi({ description: 'The name of the third-party firewall vendor.' }),
    ),
  })
  .openapi({
    required: ['ThirdPartyFirewall'],
    title: 'GetThirdPartyFirewallAssociationStatusRequest',
  })
  .openapi('GetThirdPartyFirewallAssociationStatusRequest')

const ViolationTargetSchema = z.string().regex(/.*/).min(0).max(1024).openapi('ViolationTarget')

const ReferenceRuleSchema = z.string().openapi('ReferenceRule')

const TargetViolationReasonSchema = z
  .string()
  .regex(/\w+/)
  .min(0)
  .max(256)
  .openapi('TargetViolationReason')

const TargetViolationReasonsSchema = z
  .array(TargetViolationReasonSchema)
  .openapi('TargetViolationReasons')

const PartialMatchSchema = z
  .object({
    Reference: ReferenceRuleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reference rule from the primary security group of the Firewall Manager policy.',
        }),
    ).exactOptional(),
    TargetViolationReasons: TargetViolationReasonsSchema.and(
      z.any().openapi({ description: 'The violation reason.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The reference rule that partially matches the <code>ViolationTarget</code> rule and violation reason.',
    required: [],
  })
  .openapi('PartialMatch')

const PartialMatchesSchema = z.array(PartialMatchSchema).openapi('PartialMatches')

const RemediationActionTypeSchema = z.enum(['REMOVE', 'MODIFY']).openapi('RemediationActionType')

const RemediationActionDescriptionSchema = z
  .string()
  .regex(/.*/)
  .min(0)
  .max(1024)
  .openapi('RemediationActionDescription')

const CIDRSchema = z
  .string()
  .regex(/[a-f0-9:.\/]+/)
  .min(0)
  .max(256)
  .openapi('CIDR')

const SecurityGroupRuleDescriptionSchema = z
  .object({
    IPV4Range: CIDRSchema.and(
      z.any().openapi({ description: 'The IPv4 ranges for the security group rule.' }),
    ).exactOptional(),
    IPV6Range: CIDRSchema.and(
      z.any().openapi({ description: 'The IPv6 ranges for the security group rule.' }),
    ).exactOptional(),
    PrefixListId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the prefix list for the security group rule.' }),
    ).exactOptional(),
    Protocol: LengthBoundedStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>, <code>icmpv6</code>) or number.',
        }),
    ).exactOptional(),
    FromPort: IPPortNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number. A value of <code>-1</code> indicates all ICMP/ICMPv6 types.',
        }),
    ).exactOptional(),
    ToPort: IPPortNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. A value of <code>-1</code> indicates all ICMP/ICMPv6 codes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes a set of permissions for a security group rule.',
    required: [],
  })
  .openapi('SecurityGroupRuleDescription')

const SecurityGroupRemediationActionSchema = z
  .object({
    RemediationActionType: RemediationActionTypeSchema.and(
      z.any().openapi({ description: 'The remediation action that will be performed.' }),
    ).exactOptional(),
    Description: RemediationActionDescriptionSchema.and(
      z.any().openapi({ description: 'Brief description of the action that will be performed.' }),
    ).exactOptional(),
    RemediationResult: SecurityGroupRuleDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The final state of the rule specified in the <code>ViolationTarget</code> after it is remediated.',
        }),
    ).exactOptional(),
    IsDefaultAction: BooleanSchema.and(
      z.any().openapi({ description: 'Indicates if the current action is the default action.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Remediation option for the rule specified in the <code>ViolationTarget</code>.',
    required: [],
  })
  .openapi('SecurityGroupRemediationAction')

const SecurityGroupRemediationActionsSchema = z
  .array(SecurityGroupRemediationActionSchema)
  .openapi('SecurityGroupRemediationActions')

const AwsVPCSecurityGroupViolationSchema = z
  .object({
    ViolationTarget: ViolationTargetSchema.and(
      z.any().openapi({ description: 'The security group rule that is being evaluated.' }),
    ).exactOptional(),
    ViolationTargetDescription: LengthBoundedStringSchema.and(
      z
        .any()
        .openapi({ description: 'A description of the security group that violates the policy.' }),
    ).exactOptional(),
    PartialMatches: PartialMatchesSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of rules specified in the security group of the Firewall Manager policy that partially match the <code>ViolationTarget</code> rule.',
        }),
    ).exactOptional(),
    PossibleSecurityGroupRemediationActions: SecurityGroupRemediationActionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Remediation options for the rule specified in the <code>ViolationTarget</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Violation detail for the rule violation in a security group when compared to the primary security group of the Firewall Manager policy.',
    required: [],
  })
  .openapi('AwsVPCSecurityGroupViolation')

const ResourceIdListSchema = z.array(ResourceIdSchema).openapi('ResourceIdList')

const AwsEc2NetworkInterfaceViolationSchema = z
  .object({
    ViolationTarget: ViolationTargetSchema.and(
      z.any().openapi({ description: 'The resource ID of the network interface.' }),
    ).exactOptional(),
    ViolatingSecurityGroups: ResourceIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of security groups that violate the rules specified in the primary security group of the Firewall Manager policy.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Violation detail for network interfaces associated with an EC2 instance.',
    required: [],
  })
  .openapi('AwsEc2NetworkInterfaceViolation')

const AwsEc2NetworkInterfaceViolationsSchema = z
  .array(AwsEc2NetworkInterfaceViolationSchema)
  .openapi('AwsEc2NetworkInterfaceViolations')

const AwsEc2InstanceViolationSchema = z
  .object({
    ViolationTarget: ViolationTargetSchema.and(
      z.any().openapi({ description: 'The resource ID of the EC2 instance.' }),
    ).exactOptional(),
    AwsEc2NetworkInterfaceViolations: AwsEc2NetworkInterfaceViolationsSchema.and(
      z
        .any()
        .openapi({
          description: 'Violation detail for network interfaces associated with the EC2 instance.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Violation detail for an EC2 instance resource.', required: [] })
  .openapi('AwsEc2InstanceViolation')

const NetworkFirewallMissingFirewallViolationSchema = z
  .object({
    ViolationTarget: ViolationTargetSchema.and(
      z
        .any()
        .openapi({
          description: "The ID of the Network Firewall or VPC resource that's in violation.",
        }),
    ).exactOptional(),
    VPC: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The resource ID of the VPC associated with a violating subnet.' }),
    ).exactOptional(),
    AvailabilityZone: LengthBoundedStringSchema.and(
      z.any().openapi({ description: 'The Availability Zone of a violating subnet. ' }),
    ).exactOptional(),
    TargetViolationReason: TargetViolationReasonSchema.and(
      z
        .any()
        .openapi({
          description: 'The reason the resource has this violation, if one is available. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Violation detail for Network Firewall for a subnet that doesn't have a Firewall Manager managed firewall in its VPC. ",
    required: [],
  })
  .openapi('NetworkFirewallMissingFirewallViolation')

const NetworkFirewallMissingSubnetViolationSchema = z
  .object({
    ViolationTarget: ViolationTargetSchema.and(
      z
        .any()
        .openapi({
          description: "The ID of the Network Firewall or VPC resource that's in violation.",
        }),
    ).exactOptional(),
    VPC: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The resource ID of the VPC associated with a violating subnet.' }),
    ).exactOptional(),
    AvailabilityZone: LengthBoundedStringSchema.and(
      z.any().openapi({ description: 'The Availability Zone of a violating subnet. ' }),
    ).exactOptional(),
    TargetViolationReason: TargetViolationReasonSchema.and(
      z
        .any()
        .openapi({
          description: 'The reason the resource has this violation, if one is available. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Violation detail for Network Firewall for an Availability Zone that's missing the expected Firewall Manager managed subnet.",
    required: [],
  })
  .openapi('NetworkFirewallMissingSubnetViolation')

const NetworkFirewallMissingExpectedRTViolationSchema = z
  .object({
    ViolationTarget: ViolationTargetSchema.and(
      z
        .any()
        .openapi({
          description: "The ID of the Network Firewall or VPC resource that's in violation.",
        }),
    ).exactOptional(),
    VPC: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The resource ID of the VPC associated with a violating subnet.' }),
    ).exactOptional(),
    AvailabilityZone: LengthBoundedStringSchema.and(
      z.any().openapi({ description: 'The Availability Zone of a violating subnet. ' }),
    ).exactOptional(),
    CurrentRouteTable: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The resource ID of the current route table that's associated with the subnet, if one is available.",
        }),
    ).exactOptional(),
    ExpectedRouteTable: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource ID of the route table that should be associated with the subnet.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Violation detail for Network Firewall for a subnet that's not associated to the expected Firewall Manager managed route table.",
    required: [],
  })
  .openapi('NetworkFirewallMissingExpectedRTViolation')

const NetworkFirewallResourceNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-]+$/)
  .min(1)
  .max(128)
  .openapi('NetworkFirewallResourceName')

const StatelessRuleGroupPrioritySchema = z
  .int()
  .min(1)
  .max(65535)
  .openapi('StatelessRuleGroupPriority')

const StatelessRuleGroupSchema = z
  .object({
    RuleGroupName: NetworkFirewallResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the rule group.' }),
    ).exactOptional(),
    ResourceId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The resource ID of the rule group.' }),
    ).exactOptional(),
    Priority: StatelessRuleGroupPrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            'The priority of the rule group. Network Firewall evaluates the stateless rule groups in a firewall policy starting from the lowest priority setting. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Network Firewall stateless rule group, used in a <a>NetworkFirewallPolicyDescription</a>. ',
    required: [],
  })
  .openapi('StatelessRuleGroup')

const StatelessRuleGroupListSchema = z
  .array(StatelessRuleGroupSchema)
  .openapi('StatelessRuleGroupList')

const NetworkFirewallActionSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]+$/)
  .min(1)
  .max(128)
  .openapi('NetworkFirewallAction')

const NetworkFirewallActionListSchema = z
  .array(NetworkFirewallActionSchema)
  .openapi('NetworkFirewallActionList')

const PriorityNumberSchema = z.int().openapi('PriorityNumber')

const NetworkFirewallOverrideActionSchema = z
  .literal('DROP_TO_ALERT')
  .openapi('NetworkFirewallOverrideAction')

const NetworkFirewallStatefulRuleGroupOverrideSchema = z
  .object({
    Action: NetworkFirewallOverrideActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The action that changes the rule group from <code>DROP</code> to <code>ALERT</code>. This only applies to managed rule groups.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The setting that allows the policy owner to change the behavior of the rule group within a policy.',
    required: [],
  })
  .openapi('NetworkFirewallStatefulRuleGroupOverride')

const StatefulRuleGroupSchema = z
  .object({
    RuleGroupName: NetworkFirewallResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the rule group.' }),
    ).exactOptional(),
    ResourceId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The resource ID of the rule group.' }),
    ).exactOptional(),
    Priority: PriorityNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An integer setting that indicates the order in which to run the stateful rule groups in a single Network Firewall firewall policy. This setting only applies to firewall policies that specify the <code>STRICT_ORDER</code> rule order in the stateful engine options settings.</p> <p> Network Firewall evalutes each stateful rule group against a packet starting with the group that has the lowest priority setting. You must ensure that the priority settings are unique within each policy. For information about </p> <p> You can change the priority settings of your rule groups at any time. To make it easier to insert rule groups later, number them so there's a wide range in between, for example use 100, 200, and so on. </p>",
        }),
    ).exactOptional(),
    Override: NetworkFirewallStatefulRuleGroupOverrideSchema.and(
      z
        .any()
        .openapi({
          description:
            'The action that allows the policy owner to override the behavior of the rule group within a policy.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Network Firewall stateful rule group, used in a <a>NetworkFirewallPolicyDescription</a>. ',
    required: [],
  })
  .openapi('StatefulRuleGroup')

const StatefulRuleGroupListSchema = z
  .array(StatefulRuleGroupSchema)
  .openapi('StatefulRuleGroupList')

const RuleOrderSchema = z.enum(['STRICT_ORDER', 'DEFAULT_ACTION_ORDER']).openapi('RuleOrder')

const StatefulEngineOptionsSchema = z
  .object({
    RuleOrder: RuleOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates how to manage the order of stateful rule evaluation for the policy. <code>DEFAULT_ACTION_ORDER</code> is the default behavior. Stateful rules are provided to the rule engine as Suricata compatible strings, and Suricata evaluates them based on certain settings. For more information, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html">Evaluation order for stateful rules</a> in the <i>Network Firewall Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Configuration settings for the handling of the stateful rule groups in a Network Firewall firewall policy.',
    required: [],
  })
  .openapi('StatefulEngineOptions')

const NetworkFirewallPolicyDescriptionSchema = z
  .object({
    StatelessRuleGroups: StatelessRuleGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The stateless rule groups that are used in the Network Firewall firewall policy. ',
        }),
    ).exactOptional(),
    StatelessDefaultActions: NetworkFirewallActionListSchema.and(
      z
        .any()
        .openapi({
          description:
            "The actions to take on packets that don't match any of the stateless rule groups. ",
        }),
    ).exactOptional(),
    StatelessFragmentDefaultActions: NetworkFirewallActionListSchema.and(
      z
        .any()
        .openapi({
          description:
            "The actions to take on packet fragments that don't match any of the stateless rule groups. ",
        }),
    ).exactOptional(),
    StatelessCustomActions: NetworkFirewallActionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Names of custom actions that are available for use in the stateless default actions settings.',
        }),
    ).exactOptional(),
    StatefulRuleGroups: StatefulRuleGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The stateful rule groups that are used in the Network Firewall firewall policy. ',
        }),
    ).exactOptional(),
    StatefulDefaultActions: NetworkFirewallActionListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The default actions to take on a packet that doesn't match any stateful rules. The stateful default action is optional, and is only valid when using the strict rule order.</p> <p> Valid values of the stateful default action: </p> <ul> <li> <p>aws:drop_strict</p> </li> <li> <p>aws:drop_established</p> </li> <li> <p>aws:alert_strict</p> </li> <li> <p>aws:alert_established</p> </li> </ul>",
        }),
    ).exactOptional(),
    StatefulEngineOptions: StatefulEngineOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional options governing how Network Firewall handles stateful rules. The stateful rule groups that you use in your policy must have stateful rule options settings that are compatible with these settings.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The definition of the Network Firewall firewall policy.', required: [] })
  .openapi('NetworkFirewallPolicyDescription')

const NetworkFirewallPolicyModifiedViolationSchema = z
  .object({
    ViolationTarget: ViolationTargetSchema.and(
      z
        .any()
        .openapi({
          description: "The ID of the Network Firewall or VPC resource that's in violation.",
        }),
    ).exactOptional(),
    CurrentPolicyDescription: NetworkFirewallPolicyDescriptionSchema.and(
      z
        .any()
        .openapi({ description: "The policy that's currently in use in the individual account. " }),
    ).exactOptional(),
    ExpectedPolicyDescription: NetworkFirewallPolicyDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The policy that should be in use in the individual account in order to be compliant. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Violation detail for Network Firewall for a firewall policy that has a different <a>NetworkFirewallPolicyDescription</a> than is required by the Firewall Manager policy. ',
    required: [],
  })
  .openapi('NetworkFirewallPolicyModifiedViolation')

const DestinationTypeSchema = z.enum(['IPV4', 'IPV6', 'PREFIX_LIST']).openapi('DestinationType')

const TargetTypeSchema = z
  .enum([
    'GATEWAY',
    'CARRIER_GATEWAY',
    'INSTANCE',
    'LOCAL_GATEWAY',
    'NAT_GATEWAY',
    'NETWORK_INTERFACE',
    'VPC_ENDPOINT',
    'VPC_PEERING_CONNECTION',
    'EGRESS_ONLY_INTERNET_GATEWAY',
    'TRANSIT_GATEWAY',
  ])
  .openapi('TargetType')

const RouteSchema = z
  .object({
    DestinationType: DestinationTypeSchema.and(
      z.any().openapi({ description: 'The type of destination for the route.' }),
    ).exactOptional(),
    TargetType: TargetTypeSchema.and(
      z.any().openapi({ description: 'The type of target for the route.' }),
    ).exactOptional(),
    Destination: LengthBoundedStringSchema.and(
      z.any().openapi({ description: 'The destination of the route.' }),
    ).exactOptional(),
    Target: LengthBoundedStringSchema.and(
      z.any().openapi({ description: "The route's target." }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a route in a route table.', required: [] })
  .openapi('Route')

const RoutesSchema = z.array(RouteSchema).openapi('Routes')

const LengthBoundedStringListSchema = z
  .array(LengthBoundedStringSchema)
  .openapi('LengthBoundedStringList')

const ExpectedRouteSchema = z
  .object({
    IpV4Cidr: CIDRSchema.and(
      z.any().openapi({ description: 'Information about the IPv4 CIDR block.' }),
    ).exactOptional(),
    PrefixListId: CIDRSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the ID of the prefix list for the route.' }),
    ).exactOptional(),
    IpV6Cidr: CIDRSchema.and(
      z.any().openapi({ description: 'Information about the IPv6 CIDR block.' }),
    ).exactOptional(),
    ContributingSubnets: ResourceIdListSchema.and(
      z.any().openapi({ description: 'Information about the contributing subnets.' }),
    ).exactOptional(),
    AllowedTargets: LengthBoundedStringListSchema.and(
      z.any().openapi({ description: 'Information about the allowed targets.' }),
    ).exactOptional(),
    RouteTableId: ResourceIdSchema.and(
      z.any().openapi({ description: 'Information about the route table ID.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the expected route in the route table.',
    required: [],
  })
  .openapi('ExpectedRoute')

const ExpectedRoutesSchema = z.array(ExpectedRouteSchema).openapi('ExpectedRoutes')

const NetworkFirewallInternetTrafficNotInspectedViolationSchema = z
  .object({
    SubnetId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The subnet ID.' }),
    ).exactOptional(),
    SubnetAvailabilityZone: LengthBoundedStringSchema.and(
      z.any().openapi({ description: 'The subnet Availability Zone.' }),
    ).exactOptional(),
    RouteTableId: ResourceIdSchema.and(
      z.any().openapi({ description: 'Information about the route table ID.' }),
    ).exactOptional(),
    ViolatingRoutes: RoutesSchema.and(
      z.any().openapi({ description: 'The route or routes that are in violation.' }),
    ).exactOptional(),
    IsRouteTableUsedInDifferentAZ: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about whether the route table is used in another Availability Zone.',
        }),
    ).exactOptional(),
    CurrentFirewallSubnetRouteTable: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the subnet route table for the current firewall.',
        }),
    ).exactOptional(),
    ExpectedFirewallEndpoint: ResourceIdSchema.and(
      z.any().openapi({ description: 'The expected endpoint for the current firewall.' }),
    ).exactOptional(),
    FirewallSubnetId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The firewall subnet ID.' }),
    ).exactOptional(),
    ExpectedFirewallSubnetRoutes: ExpectedRoutesSchema.and(
      z.any().openapi({ description: 'The firewall subnet routes that are expected.' }),
    ).exactOptional(),
    ActualFirewallSubnetRoutes: RoutesSchema.and(
      z.any().openapi({ description: 'The actual firewall subnet routes.' }),
    ).exactOptional(),
    InternetGatewayId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The internet gateway ID.' }),
    ).exactOptional(),
    CurrentInternetGatewayRouteTable: ResourceIdSchema.and(
      z.any().openapi({ description: 'The current route table for the internet gateway.' }),
    ).exactOptional(),
    ExpectedInternetGatewayRoutes: ExpectedRoutesSchema.and(
      z.any().openapi({ description: 'The internet gateway routes that are expected.' }),
    ).exactOptional(),
    ActualInternetGatewayRoutes: RoutesSchema.and(
      z.any().openapi({ description: 'The actual internet gateway routes.' }),
    ).exactOptional(),
    VpcId: ResourceIdSchema.and(
      z.any().openapi({ description: 'Information about the VPC ID.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Violation detail for the subnet for which internet traffic that hasn't been inspected.",
    required: [],
  })
  .openapi('NetworkFirewallInternetTrafficNotInspectedViolation')

const NetworkFirewallInvalidRouteConfigurationViolationSchema = z
  .object({
    AffectedSubnets: ResourceIdListSchema.and(
      z.any().openapi({ description: 'The subnets that are affected.' }),
    ).exactOptional(),
    RouteTableId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The route table ID.' }),
    ).exactOptional(),
    IsRouteTableUsedInDifferentAZ: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about whether the route table is used in another Availability Zone.',
        }),
    ).exactOptional(),
    ViolatingRoute: RouteSchema.and(
      z.any().openapi({ description: "The route that's in violation." }),
    ).exactOptional(),
    CurrentFirewallSubnetRouteTable: ResourceIdSchema.and(
      z.any().openapi({ description: 'The subnet route table for the current firewall.' }),
    ).exactOptional(),
    ExpectedFirewallEndpoint: ResourceIdSchema.and(
      z.any().openapi({ description: "The firewall endpoint that's expected." }),
    ).exactOptional(),
    ActualFirewallEndpoint: ResourceIdSchema.and(
      z.any().openapi({ description: 'The actual firewall endpoint.' }),
    ).exactOptional(),
    ExpectedFirewallSubnetId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The expected subnet ID for the firewall.' }),
    ).exactOptional(),
    ActualFirewallSubnetId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The actual subnet ID for the firewall.' }),
    ).exactOptional(),
    ExpectedFirewallSubnetRoutes: ExpectedRoutesSchema.and(
      z.any().openapi({ description: 'The firewall subnet routes that are expected.' }),
    ).exactOptional(),
    ActualFirewallSubnetRoutes: RoutesSchema.and(
      z.any().openapi({ description: 'The actual firewall subnet routes that are expected.' }),
    ).exactOptional(),
    InternetGatewayId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The internet gateway ID.' }),
    ).exactOptional(),
    CurrentInternetGatewayRouteTable: ResourceIdSchema.and(
      z.any().openapi({ description: 'The route table for the current internet gateway.' }),
    ).exactOptional(),
    ExpectedInternetGatewayRoutes: ExpectedRoutesSchema.and(
      z.any().openapi({ description: 'The expected routes for the internet gateway.' }),
    ).exactOptional(),
    ActualInternetGatewayRoutes: RoutesSchema.and(
      z.any().openapi({ description: 'The actual internet gateway routes.' }),
    ).exactOptional(),
    VpcId: ResourceIdSchema.and(
      z.any().openapi({ description: 'Information about the VPC ID.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Violation detail for the improperly configured subnet route. It's possible there is a missing route table route, or a configuration that causes traffic to cross an Availability Zone boundary.",
    required: [],
  })
  .openapi('NetworkFirewallInvalidRouteConfigurationViolation')

const NetworkFirewallBlackHoleRouteDetectedViolationSchema = z
  .object({
    ViolationTarget: ViolationTargetSchema.and(
      z.any().openapi({ description: 'The subnet that has an inactive state.' }),
    ).exactOptional(),
    RouteTableId: ResourceIdSchema.and(
      z.any().openapi({ description: 'Information about the route table ID.' }),
    ).exactOptional(),
    VpcId: ResourceIdSchema.and(
      z.any().openapi({ description: 'Information about the VPC ID.' }),
    ).exactOptional(),
    ViolatingRoutes: RoutesSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the route or routes that are in violation.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table.',
    required: [],
  })
  .openapi('NetworkFirewallBlackHoleRouteDetectedViolation')

const NetworkFirewallUnexpectedFirewallRoutesViolationSchema = z
  .object({
    FirewallSubnetId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The subnet ID for the firewall.' }),
    ).exactOptional(),
    ViolatingRoutes: RoutesSchema.and(
      z.any().openapi({ description: 'The routes that are in violation.' }),
    ).exactOptional(),
    RouteTableId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the route table.' }),
    ).exactOptional(),
    FirewallEndpoint: ResourceIdSchema.and(
      z.any().openapi({ description: 'The endpoint of the firewall.' }),
    ).exactOptional(),
    VpcId: ResourceIdSchema.and(
      z.any().openapi({ description: 'Information about the VPC ID.' }),
    ).exactOptional(),
  })
  .openapi({
    description: "Violation detail for an unexpected route that's present in a route table.",
    required: [],
  })
  .openapi('NetworkFirewallUnexpectedFirewallRoutesViolation')

const NetworkFirewallUnexpectedGatewayRoutesViolationSchema = z
  .object({
    GatewayId: ResourceIdSchema.and(
      z.any().openapi({ description: 'Information about the gateway ID.' }),
    ).exactOptional(),
    ViolatingRoutes: RoutesSchema.and(
      z.any().openapi({ description: 'The routes that are in violation.' }),
    ).exactOptional(),
    RouteTableId: ResourceIdSchema.and(
      z.any().openapi({ description: 'Information about the route table.' }),
    ).exactOptional(),
    VpcId: ResourceIdSchema.and(
      z.any().openapi({ description: 'Information about the VPC ID.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Violation detail for an unexpected gateway route that’s present in a route table.',
    required: [],
  })
  .openapi('NetworkFirewallUnexpectedGatewayRoutesViolation')

const NetworkFirewallMissingExpectedRoutesViolationSchema = z
  .object({
    ViolationTarget: ViolationTargetSchema.and(
      z.any().openapi({ description: 'The target of the violation.' }),
    ).exactOptional(),
    ExpectedRoutes: ExpectedRoutesSchema.and(
      z.any().openapi({ description: 'The expected routes.' }),
    ).exactOptional(),
    VpcId: ResourceIdSchema.and(
      z.any().openapi({ description: 'Information about the VPC ID.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Violation detail for an expected route missing in Network Firewall.',
    required: [],
  })
  .openapi('NetworkFirewallMissingExpectedRoutesViolation')

const DnsRuleGroupPrioritySchema = z.int().min(0).max(10000).openapi('DnsRuleGroupPriority')

const DnsRuleGroupPrioritiesSchema = z
  .array(DnsRuleGroupPrioritySchema)
  .openapi('DnsRuleGroupPriorities')

const DnsRuleGroupPriorityConflictViolationSchema = z
  .object({
    ViolationTarget: ViolationTargetSchema.and(
      z.any().openapi({ description: 'Information about the VPC ID. ' }),
    ).exactOptional(),
    ViolationTargetDescription: LengthBoundedStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A description of the violation that specifies the VPC and the rule group that's already associated with it.",
        }),
    ).exactOptional(),
    ConflictingPriority: DnsRuleGroupPrioritySchema.and(
      z.any().openapi({ description: 'The priority setting of the two conflicting rule groups.' }),
    ).exactOptional(),
    ConflictingPolicyId: PolicyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the Firewall Manager DNS Firewall policy that was already applied to the VPC. This policy contains the rule group that's already associated with the VPC. ",
        }),
    ).exactOptional(),
    UnavailablePriorities: DnsRuleGroupPrioritiesSchema.and(
      z
        .any()
        .openapi({
          description:
            "The priorities of rule groups that are already associated with the VPC. To retry your operation, choose priority settings that aren't in this list for the rule groups in your new DNS Firewall policy. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A rule group that Firewall Manager tried to associate with a VPC has the same priority as a rule group that's already associated. ",
    required: [],
  })
  .openapi('DnsRuleGroupPriorityConflictViolation')

const DnsDuplicateRuleGroupViolationSchema = z
  .object({
    ViolationTarget: ViolationTargetSchema.and(
      z.any().openapi({ description: 'Information about the VPC ID. ' }),
    ).exactOptional(),
    ViolationTargetDescription: LengthBoundedStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A description of the violation that specifies the rule group and VPC.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A DNS Firewall rule group that Firewall Manager tried to associate with a VPC is already associated with the VPC and can't be associated again. ",
    required: [],
  })
  .openapi('DnsDuplicateRuleGroupViolation')

const BasicIntegerSchema = z.int().min(-2147483648).max(2147483647).openapi('BasicInteger')

const DnsRuleGroupLimitExceededViolationSchema = z
  .object({
    ViolationTarget: ViolationTargetSchema.and(
      z.any().openapi({ description: 'Information about the VPC ID. ' }),
    ).exactOptional(),
    ViolationTargetDescription: LengthBoundedStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A description of the violation that specifies the rule group and VPC.',
        }),
    ).exactOptional(),
    NumberOfRuleGroupsAlreadyAssociated: BasicIntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of rule groups currently associated with the VPC. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The VPC that Firewall Manager was applying a DNS Fireall policy to reached the limit for associated DNS Firewall rule groups. Firewall Manager tried to associate another rule group with the VPC and failed due to the limit. ',
    required: [],
  })
  .openapi('DnsRuleGroupLimitExceededViolation')

const ActionTargetSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the remediation target.' }),
    ).exactOptional(),
    Description: LengthBoundedStringSchema.and(
      z.any().openapi({ description: 'A description of the remediation action target.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a remediation action target.', required: [] })
  .openapi('ActionTarget')

const EC2CreateRouteActionSchema = z
  .object({
    Description: LengthBoundedStringSchema.and(
      z.any().openapi({ description: 'A description of CreateRoute action in Amazon EC2.' }),
    ).exactOptional(),
    DestinationCidrBlock: CIDRSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the IPv4 CIDR address block used for the destination match.',
        }),
    ).exactOptional(),
    DestinationPrefixListId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the ID of a prefix list used for the destination match.',
        }),
    ).exactOptional(),
    DestinationIpv6CidrBlock: CIDRSchema.and(
      z.any().openapi({ description: 'Information about the IPv6 CIDR block destination.' }),
    ).exactOptional(),
    VpcEndpointId: ActionTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.',
        }),
    ).exactOptional(),
    GatewayId: ActionTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the ID of an internet gateway or virtual private gateway attached to your VPC.',
        }),
    ).exactOptional(),
    RouteTableId: ActionTargetSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the ID of the route table for the route.' }),
    ),
  })
  .openapi({
    required: ['RouteTableId'],
    description: 'Information about the CreateRoute action in Amazon EC2.',
  })
  .openapi('EC2CreateRouteAction')

const EC2ReplaceRouteActionSchema = z
  .object({
    Description: LengthBoundedStringSchema.and(
      z.any().openapi({ description: 'A description of the ReplaceRoute action in Amazon EC2.' }),
    ).exactOptional(),
    DestinationCidrBlock: CIDRSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the IPv4 CIDR address block used for the destination match. The value that you provide must match the CIDR of an existing route in the table.',
        }),
    ).exactOptional(),
    DestinationPrefixListId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the ID of the prefix list for the route.' }),
    ).exactOptional(),
    DestinationIpv6CidrBlock: CIDRSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the IPv6 CIDR address block used for the destination match. The value that you provide must match the CIDR of an existing route in the table.',
        }),
    ).exactOptional(),
    GatewayId: ActionTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the ID of an internet gateway or virtual private gateway.',
        }),
    ).exactOptional(),
    RouteTableId: ActionTargetSchema.and(
      z.any().openapi({ description: 'Information about the ID of the route table.' }),
    ),
  })
  .openapi({
    required: ['RouteTableId'],
    description: 'Information about the ReplaceRoute action in Amazon EC2.',
  })
  .openapi('EC2ReplaceRouteAction')

const EC2DeleteRouteActionSchema = z
  .object({
    Description: LengthBoundedStringSchema.and(
      z.any().openapi({ description: 'A description of the DeleteRoute action.' }),
    ).exactOptional(),
    DestinationCidrBlock: CIDRSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the IPv4 CIDR range for the route. The value you specify must match the CIDR for the route exactly.',
        }),
    ).exactOptional(),
    DestinationPrefixListId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the ID of the prefix list for the route.' }),
    ).exactOptional(),
    DestinationIpv6CidrBlock: CIDRSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the IPv6 CIDR range for the route. The value you specify must match the CIDR for the route exactly.',
        }),
    ).exactOptional(),
    RouteTableId: ActionTargetSchema.and(
      z.any().openapi({ description: 'Information about the ID of the route table.' }),
    ),
  })
  .openapi({
    required: ['RouteTableId'],
    description: 'Information about the DeleteRoute action in Amazon EC2.',
  })
  .openapi('EC2DeleteRouteAction')

const EC2CopyRouteTableActionSchema = z
  .object({
    Description: LengthBoundedStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the copied EC2 route table that is associated with the remediation action.',
        }),
    ).exactOptional(),
    VpcId: ActionTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            'The VPC ID of the copied EC2 route table that is associated with the remediation action.',
        }),
    ),
    RouteTableId: ActionTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the copied EC2 route table that is associated with the remediation action.',
        }),
    ),
  })
  .openapi({
    required: ['VpcId', 'RouteTableId'],
    description: 'An action that copies the EC2 route table for use in remediation.',
  })
  .openapi('EC2CopyRouteTableAction')

const EC2ReplaceRouteTableAssociationActionSchema = z
  .object({
    Description: LengthBoundedStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A description of the ReplaceRouteTableAssociation action in Amazon EC2.',
        }),
    ).exactOptional(),
    AssociationId: ActionTargetSchema.and(
      z.any().openapi({ description: 'Information about the association ID.' }),
    ),
    RouteTableId: ActionTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the ID of the new route table to associate with the subnet.',
        }),
    ),
  })
  .openapi({
    required: ['AssociationId', 'RouteTableId'],
    description: 'Information about the ReplaceRouteTableAssociation action in Amazon EC2.',
  })
  .openapi('EC2ReplaceRouteTableAssociationAction')

const EC2AssociateRouteTableActionSchema = z
  .object({
    Description: LengthBoundedStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the EC2 route table that is associated with the remediation action.',
        }),
    ).exactOptional(),
    RouteTableId: ActionTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the EC2 route table that is associated with the remediation action.',
        }),
    ),
    SubnetId: ActionTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the subnet for the EC2 route table that is associated with the remediation action.',
        }),
    ).exactOptional(),
    GatewayId: ActionTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the gateway to be used with the EC2 route table that is associated with the remediation action.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RouteTableId'],
    description:
      'The action of associating an EC2 resource, such as a subnet or internet gateway, with a route table.',
  })
  .openapi('EC2AssociateRouteTableAction')

const EC2CreateRouteTableActionSchema = z
  .object({
    Description: LengthBoundedStringSchema.and(
      z.any().openapi({ description: 'A description of the CreateRouteTable action.' }),
    ).exactOptional(),
    VpcId: ActionTargetSchema.and(
      z.any().openapi({ description: 'Information about the ID of a VPC.' }),
    ),
  })
  .openapi({
    required: ['VpcId'],
    description: 'Information about the CreateRouteTable action in Amazon EC2.',
  })
  .openapi('EC2CreateRouteTableAction')

const FMSPolicyUpdateFirewallCreationConfigActionSchema = z
  .object({
    Description: LengthBoundedStringSchema.and(
      z.any().openapi({ description: 'Describes the remedial action.' }),
    ).exactOptional(),
    FirewallCreationConfig: ManagedServiceDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>FirewallCreationConfig</code> that you can copy into your current policy\'s <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_SecurityServicePolicyData.html">SecurityServiceData</a> in order to remedy scope violations.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Contains information about the actions that you can take to remediate scope violations caused by your policy's <code>FirewallCreationConfig</code>. <code>FirewallCreationConfig</code> is an optional configuration that you can use to choose which Availability Zones Firewall Manager creates Network Firewall endpoints in.",
    required: [],
  })
  .openapi('FMSPolicyUpdateFirewallCreationConfigAction')

const RemediationActionSchema = z
  .object({
    Description: LengthBoundedStringSchema.and(
      z.any().openapi({ description: 'A description of a remediation action.' }),
    ).exactOptional(),
    EC2CreateRouteAction: EC2CreateRouteActionSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the CreateRoute action in the Amazon EC2 API.',
        }),
    ).exactOptional(),
    EC2ReplaceRouteAction: EC2ReplaceRouteActionSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the ReplaceRoute action in the Amazon EC2 API.',
        }),
    ).exactOptional(),
    EC2DeleteRouteAction: EC2DeleteRouteActionSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the DeleteRoute action in the Amazon EC2 API.',
        }),
    ).exactOptional(),
    EC2CopyRouteTableAction: EC2CopyRouteTableActionSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the CopyRouteTable action in the Amazon EC2 API.',
        }),
    ).exactOptional(),
    EC2ReplaceRouteTableAssociationAction: EC2ReplaceRouteTableAssociationActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the ReplaceRouteTableAssociation action in the Amazon EC2 API.',
        }),
    ).exactOptional(),
    EC2AssociateRouteTableAction: EC2AssociateRouteTableActionSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the AssociateRouteTable action in the Amazon EC2 API.',
        }),
    ).exactOptional(),
    EC2CreateRouteTableAction: EC2CreateRouteTableActionSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the CreateRouteTable action in the Amazon EC2 API.',
        }),
    ).exactOptional(),
    FMSPolicyUpdateFirewallCreationConfigAction:
      FMSPolicyUpdateFirewallCreationConfigActionSchema.and(
        z
          .any()
          .openapi({
            description: 'The remedial action to take when updating a firewall configuration.',
          }),
      ).exactOptional(),
  })
  .openapi({
    description: 'Information about an individual action you can take to remediate a violation.',
    required: [],
  })
  .openapi('RemediationAction')

const RemediationActionWithOrderSchema = z
  .object({
    RemediationAction: RemediationActionSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about an action you can take to remediate a violation.',
        }),
    ).exactOptional(),
    Order: BasicIntegerSchema.and(
      z.any().openapi({ description: 'The order of the remediation actions in the list.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An ordered list of actions you can take to remediate a violation.',
    required: [],
  })
  .openapi('RemediationActionWithOrder')

const OrderedRemediationActionsSchema = z
  .array(RemediationActionWithOrderSchema)
  .openapi('OrderedRemediationActions')

const PossibleRemediationActionSchema = z
  .object({
    Description: LengthBoundedStringSchema.and(
      z.any().openapi({ description: 'A description of the list of remediation actions.' }),
    ).exactOptional(),
    OrderedRemediationActions: OrderedRemediationActionsSchema.and(
      z.any().openapi({ description: 'The ordered list of remediation actions.' }),
    ),
    IsDefaultAction: BooleanSchema.and(
      z.any().openapi({ description: 'Information about whether an action is taken by default.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OrderedRemediationActions'],
    description: 'A list of remediation actions.',
  })
  .openapi('PossibleRemediationAction')

const PossibleRemediationActionListSchema = z
  .array(PossibleRemediationActionSchema)
  .openapi('PossibleRemediationActionList')

const PossibleRemediationActionsSchema = z
  .object({
    Description: LengthBoundedStringSchema.and(
      z.any().openapi({ description: 'A description of the possible remediation actions list.' }),
    ).exactOptional(),
    Actions: PossibleRemediationActionListSchema.and(
      z.any().openapi({ description: 'Information about the actions.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions.',
    required: [],
  })
  .openapi('PossibleRemediationActions')

const FirewallSubnetIsOutOfScopeViolationSchema = z
  .object({
    FirewallSubnetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the firewall subnet that violates the policy scope.' }),
    ).exactOptional(),
    VpcId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The VPC ID of the firewall subnet that violates the policy scope.',
        }),
    ).exactOptional(),
    SubnetAvailabilityZone: LengthBoundedStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Availability Zone of the firewall subnet that violates the policy scope.',
        }),
    ).exactOptional(),
    SubnetAvailabilityZoneId: LengthBoundedStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Availability Zone ID of the firewall subnet that violates the policy scope.',
        }),
    ).exactOptional(),
    VpcEndpointId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The VPC endpoint ID of the firewall subnet that violates the policy scope.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains details about the firewall subnet that violates the policy scope.',
    required: [],
  })
  .openapi('FirewallSubnetIsOutOfScopeViolation')

const RouteHasOutOfScopeEndpointViolationSchema = z
  .object({
    SubnetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the subnet associated with the route that violates the policy scope.',
        }),
    ).exactOptional(),
    VpcId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The VPC ID of the route that violates the policy scope.' }),
    ).exactOptional(),
    RouteTableId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the route table.' }),
    ).exactOptional(),
    ViolatingRoutes: RoutesSchema.and(
      z.any().openapi({ description: 'The list of routes that violate the route table.' }),
    ).exactOptional(),
    SubnetAvailabilityZone: LengthBoundedStringSchema.and(
      z.any().openapi({ description: "The subnet's Availability Zone." }),
    ).exactOptional(),
    SubnetAvailabilityZoneId: LengthBoundedStringSchema.and(
      z.any().openapi({ description: "The ID of the subnet's Availability Zone." }),
    ).exactOptional(),
    CurrentFirewallSubnetRouteTable: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The route table associated with the current firewall subnet.' }),
    ).exactOptional(),
    FirewallSubnetId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the firewall subnet.' }),
    ).exactOptional(),
    FirewallSubnetRoutes: RoutesSchema.and(
      z.any().openapi({ description: 'The list of firewall subnet routes.' }),
    ).exactOptional(),
    InternetGatewayId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the Internet Gateway.' }),
    ).exactOptional(),
    CurrentInternetGatewayRouteTable: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The current route table associated with the Internet Gateway.' }),
    ).exactOptional(),
    InternetGatewayRoutes: RoutesSchema.and(
      z
        .any()
        .openapi({
          description: 'The routes in the route table associated with the Internet Gateway.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains details about the route endpoint that violates the policy scope.',
    required: [],
  })
  .openapi('RouteHasOutOfScopeEndpointViolation')

const ThirdPartyFirewallMissingFirewallViolationSchema = z
  .object({
    ViolationTarget: ViolationTargetSchema.and(
      z
        .any()
        .openapi({
          description: "The ID of the third-party firewall that's causing the violation.",
        }),
    ).exactOptional(),
    VPC: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The resource ID of the VPC associated with a third-party firewall.',
        }),
    ).exactOptional(),
    AvailabilityZone: LengthBoundedStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Availability Zone of the third-party firewall that's causing the violation.",
        }),
    ).exactOptional(),
    TargetViolationReason: TargetViolationReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason the resource is causing this violation, if a reason is available.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "The violation details about a third-party firewall's subnet that doesn't have a Firewall Manager managed firewall in its VPC.",
    required: [],
  })
  .openapi('ThirdPartyFirewallMissingFirewallViolation')

const ThirdPartyFirewallMissingSubnetViolationSchema = z
  .object({
    ViolationTarget: ViolationTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the third-party firewall or VPC resource that's causing the violation.",
        }),
    ).exactOptional(),
    VPC: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The resource ID of the VPC associated with a subnet that's causing the violation.",
        }),
    ).exactOptional(),
    AvailabilityZone: LengthBoundedStringSchema.and(
      z
        .any()
        .openapi({
          description: "The Availability Zone of a subnet that's causing the violation.",
        }),
    ).exactOptional(),
    TargetViolationReason: TargetViolationReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason the resource is causing the violation, if a reason is available.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "The violation details for a third-party firewall for an Availability Zone that's missing the Firewall Manager managed subnet.",
    required: [],
  })
  .openapi('ThirdPartyFirewallMissingSubnetViolation')

const ThirdPartyFirewallMissingExpectedRouteTableViolationSchema = z
  .object({
    ViolationTarget: ViolationTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the third-party firewall or VPC resource that's causing the violation.",
        }),
    ).exactOptional(),
    VPC: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The resource ID of the VPC associated with a fireawll subnet that's causing the violation.",
        }),
    ).exactOptional(),
    AvailabilityZone: LengthBoundedStringSchema.and(
      z
        .any()
        .openapi({
          description: "The Availability Zone of the firewall subnet that's causing the violation.",
        }),
    ).exactOptional(),
    CurrentRouteTable: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The resource ID of the current route table that's associated with the subnet, if one is available.",
        }),
    ).exactOptional(),
    ExpectedRouteTable: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource ID of the route table that should be associated with the subnet.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "The violation details for a third-party firewall that's not associated with an Firewall Manager managed route table.",
    required: [],
  })
  .openapi('ThirdPartyFirewallMissingExpectedRouteTableViolation')

const FirewallSubnetMissingVPCEndpointViolationSchema = z
  .object({
    FirewallSubnetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the firewall that this VPC endpoint is associated with.',
        }),
    ).exactOptional(),
    VpcId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The resource ID of the VPC associated with the deleted VPC subnet.',
        }),
    ).exactOptional(),
    SubnetAvailabilityZone: LengthBoundedStringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the Availability Zone of the deleted VPC subnet.' }),
    ).exactOptional(),
    SubnetAvailabilityZoneId: LengthBoundedStringSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the Availability Zone of the deleted VPC subnet.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "The violation details for a firewall subnet's VPC endpoint that's deleted or missing.",
    required: [],
  })
  .openapi('FirewallSubnetMissingVPCEndpointViolation')

const ResourceViolationSchema = z
  .object({
    AwsVPCSecurityGroupViolation: AwsVPCSecurityGroupViolationSchema.and(
      z.any().openapi({ description: 'Violation detail for security groups.' }),
    ).exactOptional(),
    AwsEc2NetworkInterfaceViolation: AwsEc2NetworkInterfaceViolationSchema.and(
      z.any().openapi({ description: 'Violation detail for a network interface.' }),
    ).exactOptional(),
    AwsEc2InstanceViolation: AwsEc2InstanceViolationSchema.and(
      z.any().openapi({ description: 'Violation detail for an EC2 instance.' }),
    ).exactOptional(),
    NetworkFirewallMissingFirewallViolation: NetworkFirewallMissingFirewallViolationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Violation detail for an Network Firewall policy that indicates that a subnet has no Firewall Manager managed firewall in its VPC. ',
        }),
    ).exactOptional(),
    NetworkFirewallMissingSubnetViolation: NetworkFirewallMissingSubnetViolationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Violation detail for an Network Firewall policy that indicates that an Availability Zone is missing the expected Firewall Manager managed subnet.',
        }),
    ).exactOptional(),
    NetworkFirewallMissingExpectedRTViolation: NetworkFirewallMissingExpectedRTViolationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Violation detail for an Network Firewall policy that indicates that a subnet is not associated with the expected Firewall Manager managed route table. ',
        }),
    ).exactOptional(),
    NetworkFirewallPolicyModifiedViolation: NetworkFirewallPolicyModifiedViolationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Violation detail for an Network Firewall policy that indicates that a firewall policy in an individual account has been modified in a way that makes it noncompliant. For example, the individual account owner might have deleted a rule group, changed the priority of a stateless rule group, or changed a policy default action.',
        }),
    ).exactOptional(),
    NetworkFirewallInternetTrafficNotInspectedViolation:
      NetworkFirewallInternetTrafficNotInspectedViolationSchema.and(
        z
          .any()
          .openapi({
            description:
              "Violation detail for the subnet for which internet traffic hasn't been inspected.",
          }),
      ).exactOptional(),
    NetworkFirewallInvalidRouteConfigurationViolation:
      NetworkFirewallInvalidRouteConfigurationViolationSchema.and(
        z.any().openapi({ description: 'The route configuration is invalid.' }),
      ).exactOptional(),
    NetworkFirewallBlackHoleRouteDetectedViolation:
      NetworkFirewallBlackHoleRouteDetectedViolationSchema.exactOptional(),
    NetworkFirewallUnexpectedFirewallRoutesViolation:
      NetworkFirewallUnexpectedFirewallRoutesViolationSchema.and(
        z.any().openapi({ description: "There's an unexpected firewall route." }),
      ).exactOptional(),
    NetworkFirewallUnexpectedGatewayRoutesViolation:
      NetworkFirewallUnexpectedGatewayRoutesViolationSchema.and(
        z.any().openapi({ description: "There's an unexpected gateway route." }),
      ).exactOptional(),
    NetworkFirewallMissingExpectedRoutesViolation:
      NetworkFirewallMissingExpectedRoutesViolationSchema.and(
        z.any().openapi({ description: 'Expected routes are missing from Network Firewall.' }),
      ).exactOptional(),
    DnsRuleGroupPriorityConflictViolation: DnsRuleGroupPriorityConflictViolationSchema.and(
      z
        .any()
        .openapi({
          description:
            "Violation detail for a DNS Firewall policy that indicates that a rule group that Firewall Manager tried to associate with a VPC has the same priority as a rule group that's already associated. ",
        }),
    ).exactOptional(),
    DnsDuplicateRuleGroupViolation: DnsDuplicateRuleGroupViolationSchema.and(
      z
        .any()
        .openapi({
          description:
            "Violation detail for a DNS Firewall policy that indicates that a rule group that Firewall Manager tried to associate with a VPC is already associated with the VPC and can't be associated again. ",
        }),
    ).exactOptional(),
    DnsRuleGroupLimitExceededViolation: DnsRuleGroupLimitExceededViolationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Violation detail for a DNS Firewall policy that indicates that the VPC reached the limit for associated DNS Firewall rule groups. Firewall Manager tried to associate another rule group with the VPC and failed. ',
        }),
    ).exactOptional(),
    PossibleRemediationActions: PossibleRemediationActionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions.',
        }),
    ).exactOptional(),
    FirewallSubnetIsOutOfScopeViolation: FirewallSubnetIsOutOfScopeViolationSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains details about the firewall subnet that violates the policy scope.',
        }),
    ).exactOptional(),
    RouteHasOutOfScopeEndpointViolation: RouteHasOutOfScopeEndpointViolationSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains details about the route endpoint that violates the policy scope.',
        }),
    ).exactOptional(),
    ThirdPartyFirewallMissingFirewallViolation:
      ThirdPartyFirewallMissingFirewallViolationSchema.and(
        z
          .any()
          .openapi({
            description: "The violation details for a third-party firewall that's been deleted.",
          }),
      ).exactOptional(),
    ThirdPartyFirewallMissingSubnetViolation: ThirdPartyFirewallMissingSubnetViolationSchema.and(
      z
        .any()
        .openapi({
          description:
            "The violation details for a third-party firewall's subnet that's been deleted.",
        }),
    ).exactOptional(),
    ThirdPartyFirewallMissingExpectedRouteTableViolation:
      ThirdPartyFirewallMissingExpectedRouteTableViolationSchema.and(
        z
          .any()
          .openapi({
            description:
              'The violation details for a third-party firewall that has the Firewall Manager managed route table that was associated with the third-party firewall has been deleted.',
          }),
      ).exactOptional(),
    FirewallSubnetMissingVPCEndpointViolation: FirewallSubnetMissingVPCEndpointViolationSchema.and(
      z
        .any()
        .openapi({
          description:
            "The violation details for a third-party firewall's VPC endpoint subnet that was deleted.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Violation detail based on resource type.', required: [] })
  .openapi('ResourceViolation')

const ResourceViolationsSchema = z.array(ResourceViolationSchema).openapi('ResourceViolations')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive. ',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'A collection of key:value pairs associated with an Amazon Web Services resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each Amazon Web Services resource. ',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const ViolationDetailSchema = z
  .object({
    PolicyId: PolicyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Firewall Manager policy that the violation details were requested for.',
        }),
    ),
    MemberAccount: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account that the violation details were requested for.',
        }),
    ),
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The resource ID that the violation details were requested for.' }),
    ),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The resource type that the violation details were requested for.',
        }),
    ),
    ResourceViolations: ResourceViolationsSchema.and(
      z.any().openapi({ description: 'List of violations for the requested resource.' }),
    ),
    ResourceTags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'The <code>ResourceTag</code> objects associated with the resource.',
        }),
    ).exactOptional(),
    ResourceDescription: LengthBoundedStringSchema.and(
      z.any().openapi({ description: 'Brief description for the requested resource.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PolicyId', 'MemberAccount', 'ResourceId', 'ResourceType', 'ResourceViolations'],
    description:
      'Violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.',
  })
  .openapi('ViolationDetail')

const GetViolationDetailsResponseSchema = z
  .object({
    ViolationDetail: ViolationDetailSchema.and(
      z.any().openapi({ description: 'Violation detail for a resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetViolationDetailsResponse')

const GetViolationDetailsRequestSchema = z
  .object({
    PolicyId: PolicyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Firewall Manager policy that you want the details for. This currently only supports security group content audit policies.',
        }),
    ),
    MemberAccount: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services account ID that you want the details for.',
        }),
    ),
    ResourceId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the resource that has violations.' }),
    ),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource type. This is in the format shown in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services Resource Types Reference</a>. Supported resource types are: <code>AWS::EC2::Instance</code>, <code>AWS::EC2::NetworkInterface</code>, <code>AWS::EC2::SecurityGroup</code>, <code>AWS::NetworkFirewall::FirewallPolicy</code>, and <code>AWS::EC2::Subnet</code>. ',
        }),
    ),
  })
  .openapi({
    required: ['PolicyId', 'MemberAccount', 'ResourceId', 'ResourceType'],
    title: 'GetViolationDetailsRequest',
  })
  .openapi('GetViolationDetailsRequest')

const AdminAccountSummarySchema = z
  .object({
    AdminAccount: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Web Services account ID of the Firewall Manager administrator's account.",
        }),
    ).exactOptional(),
    DefaultAdmin: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean value that indicates if the administrator is the default administrator. If true, then this is the default administrator account. The default administrator can manage third-party firewalls and has full administrative scope. There is only one default administrator account per organization. For information about Firewall Manager default administrator accounts, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>.',
        }),
    ).exactOptional(),
    Status: OrganizationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the request to onboard a member account as an Firewall Manager administator.</p> <ul> <li> <p> <code>ONBOARDING</code> - The account is onboarding to Firewall Manager as an administrator.</p> </li> <li> <p> <code>ONBOARDING_COMPLETE</code> - Firewall Manager The account is onboarded to Firewall Manager as an administrator, and can perform actions on the resources defined in their <a>AdminScope</a>.</p> </li> <li> <p> <code>OFFBOARDING</code> - The account is being removed as an Firewall Manager administrator.</p> </li> <li> <p> <code>OFFBOARDING_COMPLETE</code> - The account has been removed as an Firewall Manager administrator.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains high level information about the Firewall Manager administrator account.',
    required: [],
  })
  .openapi('AdminAccountSummary')

const AdminAccountSummaryListSchema = z
  .array(AdminAccountSummarySchema)
  .openapi('AdminAccountSummaryList')

const ListAdminAccountsForOrganizationResponseSchema = z
  .object({
    AdminAccounts: AdminAccountSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Firewall Manager administrator accounts within the organization that were onboarded as administrators by <a>AssociateAdminAccount</a> or <a>PutAdminAccount</a>.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAdminAccountsForOrganizationResponse')

const ListAdminAccountsForOrganizationRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
        }),
    ).exactOptional(),
    MaxResults: PaginationMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects that you want Firewall Manager to return for this request. If more objects are available, in the response, Firewall Manager provides a <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListAdminAccountsForOrganizationRequest', required: [] })
  .openapi('ListAdminAccountsForOrganizationRequest')

const ListAdminsManagingAccountResponseSchema = z
  .object({
    AdminAccounts: AccountIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of accounts who manage member accounts within their <a>AdminScope</a>.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAdminsManagingAccountResponse')

const ListAdminsManagingAccountRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
        }),
    ).exactOptional(),
    MaxResults: PaginationMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects that you want Firewall Manager to return for this request. If more objects are available, in the response, Firewall Manager provides a <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListAdminsManagingAccountRequest', required: [] })
  .openapi('ListAdminsManagingAccountRequest')

const AppsListDataSummarySchema = z
  .object({
    ListArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the applications list.' }),
    ).exactOptional(),
    ListId: ListIdSchema.and(
      z.any().openapi({ description: 'The ID of the applications list.' }),
    ).exactOptional(),
    ListName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the applications list.' }),
    ).exactOptional(),
    AppsList: AppsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>App</code> objects in the Firewall Manager applications list.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details of the Firewall Manager applications list.', required: [] })
  .openapi('AppsListDataSummary')

const AppsListsDataSchema = z.array(AppsListDataSummarySchema).openapi('AppsListsData')

const ListAppsListsResponseSchema = z
  .object({
    AppsLists: AppsListsDataSchema.and(
      z.any().openapi({ description: 'An array of <code>AppsListDataSummary</code> objects.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>MaxResults</code> in your list request, and you have more objects than the maximum, Firewall Manager returns this token in the response. You can use this token in subsequent requests to retrieve the next batch of objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAppsListsResponse')

const ListAppsListsRequestSchema = z
  .object({
    DefaultLists: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the lists to retrieve are default lists owned by Firewall Manager.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>MaxResults</code> in your list request, and you have more objects than the maximum, Firewall Manager returns this token in the response. For all but the first request, you provide the token returned by the prior request in the request parameters, to retrieve the next batch of objects.',
        }),
    ).exactOptional(),
    MaxResults: PaginationMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum number of objects that you want Firewall Manager to return for this request. If more objects are available, in the response, Firewall Manager provides a <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p> <p>If you don't specify this, Firewall Manager returns all available objects.</p>",
        }),
    ),
  })
  .openapi({ required: ['MaxResults'], title: 'ListAppsListsRequest' })
  .openapi('ListAppsListsRequest')

const PolicyComplianceStatusTypeSchema = z
  .enum(['COMPLIANT', 'NON_COMPLIANT'])
  .openapi('PolicyComplianceStatusType')

const ResourceCountSchema = z.int().min(0).openapi('ResourceCount')

const EvaluationResultSchema = z
  .object({
    ComplianceStatus: PolicyComplianceStatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Describes an Amazon Web Services account's compliance with the Firewall Manager policy.",
        }),
    ).exactOptional(),
    ViolatorCount: ResourceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of resources that are noncompliant with the specified policy. For WAF and Shield Advanced policies, a resource is considered noncompliant if it is not associated with the policy. For security group policies, a resource is considered noncompliant if it doesn't comply with the rules of the policy and remediation is disabled or not possible.",
        }),
    ).exactOptional(),
    EvaluationLimitExceeded: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates that over 100 resources are noncompliant with the Firewall Manager policy.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Describes the compliance status for the account. An account is considered noncompliant if it includes resources that are not protected by the specified policy or that don't comply with the policy.",
    required: [],
  })
  .openapi('EvaluationResult')

const EvaluationResultsSchema = z.array(EvaluationResultSchema).openapi('EvaluationResults')

const PolicyComplianceStatusSchema = z
  .object({
    PolicyOwner: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services account that created the Firewall Manager policy.',
        }),
    ).exactOptional(),
    PolicyId: PolicyIdSchema.and(
      z.any().openapi({ description: 'The ID of the Firewall Manager policy.' }),
    ).exactOptional(),
    PolicyName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Firewall Manager policy.' }),
    ).exactOptional(),
    MemberAccount: AWSAccountIdSchema.and(
      z.any().openapi({ description: 'The member account ID.' }),
    ).exactOptional(),
    EvaluationResults: EvaluationResultsSchema.and(
      z.any().openapi({ description: 'An array of <code>EvaluationResult</code> objects.' }),
    ).exactOptional(),
    LastUpdated: TimeStampSchema.and(
      z
        .any()
        .openapi({
          description: 'Timestamp of the last update to the <code>EvaluationResult</code> objects.',
        }),
    ).exactOptional(),
    IssueInfoMap: IssueInfoMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details about problems with dependent services, such as WAF or Config, and the error message received that indicates the problem with the service.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Indicates whether the account is compliant with the specified policy. An account is considered noncompliant if it includes resources that are not protected by the policy, for WAF and Shield Advanced policies, or that are noncompliant with the policy, for security group policies.',
    required: [],
  })
  .openapi('PolicyComplianceStatus')

const PolicyComplianceStatusListSchema = z
  .array(PolicyComplianceStatusSchema)
  .openapi('PolicyComplianceStatusList')

const ListComplianceStatusResponseSchema = z
  .object({
    PolicyComplianceStatusList: PolicyComplianceStatusListSchema.and(
      z.any().openapi({ description: 'An array of <code>PolicyComplianceStatus</code> objects.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you have more <code>PolicyComplianceStatus</code> objects than the number that you specified for <code>MaxResults</code> in the request, the response includes a <code>NextToken</code> value. To list more <code>PolicyComplianceStatus</code> objects, submit another <code>ListComplianceStatus</code> request, and specify the <code>NextToken</code> value from the response in the <code>NextToken</code> value in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListComplianceStatusResponse')

const ListComplianceStatusRequestSchema = z
  .object({
    PolicyId: PolicyIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Firewall Manager policy that you want the details for.',
        }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>MaxResults</code> and you have more <code>PolicyComplianceStatus</code> objects than the number that you specify for <code>MaxResults</code>, Firewall Manager returns a <code>NextToken</code> value in the response that allows you to list another group of <code>PolicyComplianceStatus</code> objects. For the second and subsequent <code>ListComplianceStatus</code> requests, specify the value of <code>NextToken</code> from the previous response to get information about another batch of <code>PolicyComplianceStatus</code> objects.',
        }),
    ).exactOptional(),
    MaxResults: PaginationMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of <code>PolicyComplianceStatus</code> objects that you want Firewall Manager to return for this request. If you have more <code>PolicyComplianceStatus</code> objects than the number that you specify for <code>MaxResults</code>, the response includes a <code>NextToken</code> value that you can use to get another batch of <code>PolicyComplianceStatus</code> objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PolicyId'], title: 'ListComplianceStatusRequest' })
  .openapi('ListComplianceStatusRequest')

const DiscoveredResourceSchema = z
  .object({
    URI: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The universal resource identifier (URI) of the discovered resource.',
        }),
    ).exactOptional(),
    AccountId: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID associated with the discovered resource.',
        }),
    ).exactOptional(),
    Type: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of the discovered resource.' }),
    ).exactOptional(),
    Name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the discovered resource.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A resource in the organization that's available to be associated with a Firewall Manager resource set.",
    required: [],
  })
  .openapi('DiscoveredResource')

const DiscoveredResourceListSchema = z
  .array(DiscoveredResourceSchema)
  .openapi('DiscoveredResourceList')

const ListDiscoveredResourcesResponseSchema = z
  .object({
    Items: DiscoveredResourceListSchema.and(
      z.any().openapi({ description: 'Details of the resources that were discovered.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDiscoveredResourcesResponse')

const AWSAccountIdListSchema = z.array(AWSAccountIdSchema).openapi('AWSAccountIdList')

const ListDiscoveredResourcesRequestSchema = z
  .object({
    MemberAccountIds: AWSAccountIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account IDs to discover resources in. Only one account is supported per request. The account must be a member of your organization.',
        }),
    ),
    ResourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of resources to discover.' }),
    ),
    MaxResults: PaginationMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects that you want Firewall Manager to return for this request. If more objects are available, in the response, Firewall Manager provides a <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MemberAccountIds', 'ResourceType'],
    title: 'ListDiscoveredResourcesRequest',
  })
  .openapi('ListDiscoveredResourcesRequest')

const MemberAccountsSchema = z.array(AWSAccountIdSchema).openapi('MemberAccounts')

const ListMemberAccountsResponseSchema = z
  .object({
    MemberAccounts: MemberAccountsSchema.and(
      z.any().openapi({ description: 'An array of account IDs.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you have more member account IDs than the number that you specified for <code>MaxResults</code> in the request, the response includes a <code>NextToken</code> value. To list more IDs, submit another <code>ListMemberAccounts</code> request, and specify the <code>NextToken</code> value from the response in the <code>NextToken</code> value in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMemberAccountsResponse')

const ListMemberAccountsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>MaxResults</code> and you have more account IDs than the number that you specify for <code>MaxResults</code>, Firewall Manager returns a <code>NextToken</code> value in the response that allows you to list another group of IDs. For the second and subsequent <code>ListMemberAccountsRequest</code> requests, specify the value of <code>NextToken</code> from the previous response to get information about another batch of member account IDs.',
        }),
    ).exactOptional(),
    MaxResults: PaginationMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of member account IDs that you want Firewall Manager to return for this request. If you have more IDs than the number that you specify for <code>MaxResults</code>, the response includes a <code>NextToken</code> value that you can use to get another batch of member account IDs.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListMemberAccountsRequest', required: [] })
  .openapi('ListMemberAccountsRequest')

const PolicySummarySchema = z
  .object({
    PolicyArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the specified policy.' }),
    ).exactOptional(),
    PolicyId: PolicyIdSchema.and(
      z.any().openapi({ description: 'The ID of the specified policy.' }),
    ).exactOptional(),
    PolicyName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the specified policy.' }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of resource protected by or in scope of the policy. This is in the format shown in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services Resource Types Reference</a>. For WAF and Shield Advanced, examples include <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code> and <code>AWS::CloudFront::Distribution</code>. For a security group common policy, valid values are <code>AWS::EC2::NetworkInterface</code> and <code>AWS::EC2::Instance</code>. For a security group content audit policy, valid values are <code>AWS::EC2::SecurityGroup</code>, <code>AWS::EC2::NetworkInterface</code>, and <code>AWS::EC2::Instance</code>. For a security group usage audit policy, the value is <code>AWS::EC2::SecurityGroup</code>. For an Network Firewall policy or DNS Firewall policy, the value is <code>AWS::EC2::VPC</code>.',
        }),
    ).exactOptional(),
    SecurityServiceType: SecurityServiceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The service that the policy is using to protect the resources. This specifies the type of policy that is created, either an WAF policy, a Shield Advanced policy, or a security group policy.',
        }),
    ).exactOptional(),
    RemediationEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates if the policy should be automatically applied to new resources.',
        }),
    ).exactOptional(),
    DeleteUnusedFMManagedResources: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates whether Firewall Manager should automatically remove protections from resources that leave the policy scope and clean up resources that Firewall Manager is managing for accounts when those accounts leave policy scope. For example, Firewall Manager will disassociate a Firewall Manager managed web ACL from a protected customer resource when the customer resource leaves policy scope. </p> <p>By default, Firewall Manager doesn't remove protections or delete Firewall Manager managed resources. </p> <p>This option is not available for Shield Advanced or WAF Classic policies.</p>",
        }),
    ).exactOptional(),
    PolicyStatus: CustomerPolicyStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates whether the policy is in or out of an admin's policy or Region scope.</p> <ul> <li> <p> <code>ACTIVE</code> - The administrator can manage and delete the policy.</p> </li> <li> <p> <code>OUT_OF_ADMIN_SCOPE</code> - The administrator can view the policy, but they can't edit or delete the policy. Existing policy protections stay in place. Any new resources that come into scope of the policy won't be protected.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details of the Firewall Manager policy. ', required: [] })
  .openapi('PolicySummary')

const PolicySummaryListSchema = z.array(PolicySummarySchema).openapi('PolicySummaryList')

const ListPoliciesResponseSchema = z
  .object({
    PolicyList: PolicySummaryListSchema.and(
      z.any().openapi({ description: 'An array of <code>PolicySummary</code> objects.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you have more <code>PolicySummary</code> objects than the number that you specified for <code>MaxResults</code> in the request, the response includes a <code>NextToken</code> value. To list more <code>PolicySummary</code> objects, submit another <code>ListPolicies</code> request, and specify the <code>NextToken</code> value from the response in the <code>NextToken</code> value in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPoliciesResponse')

const ListPoliciesRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>MaxResults</code> and you have more <code>PolicySummary</code> objects than the number that you specify for <code>MaxResults</code>, Firewall Manager returns a <code>NextToken</code> value in the response that allows you to list another group of <code>PolicySummary</code> objects. For the second and subsequent <code>ListPolicies</code> requests, specify the value of <code>NextToken</code> from the previous response to get information about another batch of <code>PolicySummary</code> objects.',
        }),
    ).exactOptional(),
    MaxResults: PaginationMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of <code>PolicySummary</code> objects that you want Firewall Manager to return for this request. If you have more <code>PolicySummary</code> objects than the number that you specify for <code>MaxResults</code>, the response includes a <code>NextToken</code> value that you can use to get another batch of <code>PolicySummary</code> objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListPoliciesRequest', required: [] })
  .openapi('ListPoliciesRequest')

const ProtocolsListDataSummarySchema = z
  .object({
    ListArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the specified protocols list.',
        }),
    ).exactOptional(),
    ListId: ListIdSchema.and(
      z.any().openapi({ description: 'The ID of the specified protocols list.' }),
    ).exactOptional(),
    ListName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the specified protocols list.' }),
    ).exactOptional(),
    ProtocolsList: ProtocolsListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of protocols in the Firewall Manager protocols list.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details of the Firewall Manager protocols list.', required: [] })
  .openapi('ProtocolsListDataSummary')

const ProtocolsListsDataSchema = z
  .array(ProtocolsListDataSummarySchema)
  .openapi('ProtocolsListsData')

const ListProtocolsListsResponseSchema = z
  .object({
    ProtocolsLists: ProtocolsListsDataSchema.and(
      z
        .any()
        .openapi({ description: 'An array of <code>ProtocolsListDataSummary</code> objects.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>MaxResults</code> in your list request, and you have more objects than the maximum, Firewall Manager returns this token in the response. You can use this token in subsequent requests to retrieve the next batch of objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListProtocolsListsResponse')

const ListProtocolsListsRequestSchema = z
  .object({
    DefaultLists: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the lists to retrieve are default lists owned by Firewall Manager.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify a value for <code>MaxResults</code> in your list request, and you have more objects than the maximum, Firewall Manager returns this token in the response. For all but the first request, you provide the token returned by the prior request in the request parameters, to retrieve the next batch of objects.',
        }),
    ).exactOptional(),
    MaxResults: PaginationMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum number of objects that you want Firewall Manager to return for this request. If more objects are available, in the response, Firewall Manager provides a <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p> <p>If you don't specify this, Firewall Manager returns all available objects.</p>",
        }),
    ),
  })
  .openapi({ required: ['MaxResults'], title: 'ListProtocolsListsRequest' })
  .openapi('ListProtocolsListsRequest')

const ResourceSchema = z
  .object({
    URI: IdentifierSchema.and(
      z.any().openapi({ description: "The resource's universal resource indicator (URI)." }),
    ),
    AccountId: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID that the associated resource belongs to.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['URI'],
    description: 'Details of a resource that is associated to an Firewall Manager resource set.',
  })
  .openapi('Resource')

const ResourceListSchema = z.array(ResourceSchema).openapi('ResourceList')

const ListResourceSetResourcesResponseSchema = z
  .object({
    Items: ResourceListSchema.and(
      z
        .any()
        .openapi({
          description: "An array of the associated resources' uniform resource identifiers (URI).",
        }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Items'] })
  .openapi('ListResourceSetResourcesResponse')

const ListResourceSetResourcesRequestSchema = z
  .object({
    Identifier: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the resource set, used in a request to refer to the resource set.',
        }),
    ),
    MaxResults: PaginationMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects that you want Firewall Manager to return for this request. If more objects are available, in the response, Firewall Manager provides a <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Identifier'], title: 'ListResourceSetResourcesRequest' })
  .openapi('ListResourceSetResourcesRequest')

const ResourceSetSummarySchema = z
  .object({
    Id: Base62IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the resource set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.',
        }),
    ).exactOptional(),
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The descriptive name of the resource set. You can't change the name of a resource set after you create it.",
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the resource set.' }),
    ).exactOptional(),
    LastUpdateTime: TimeStampSchema.and(
      z.any().openapi({ description: 'The last time that the resource set was changed.' }),
    ).exactOptional(),
    ResourceSetStatus: ResourceSetStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates whether the resource set is in or out of an admin's Region scope.</p> <ul> <li> <p> <code>ACTIVE</code> - The administrator can manage and delete the resource set.</p> </li> <li> <p> <code>OUT_OF_ADMIN_SCOPE</code> - The administrator can view the resource set, but they can't edit or delete the resource set. Existing protections stay in place. Any new resource that come into scope of the resource set won't be protected.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summarizes the resource sets used in a policy.', required: [] })
  .openapi('ResourceSetSummary')

const ResourceSetSummaryListSchema = z
  .array(ResourceSetSummarySchema)
  .openapi('ResourceSetSummaryList')

const ListResourceSetsResponseSchema = z
  .object({
    ResourceSets: ResourceSetSummaryListSchema.and(
      z.any().openapi({ description: 'An array of <code>ResourceSetSummary</code> objects.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResourceSetsResponse')

const ListResourceSetsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.',
        }),
    ).exactOptional(),
    MaxResults: PaginationMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects that you want Firewall Manager to return for this request. If more objects are available, in the response, Firewall Manager provides a <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListResourceSetsRequest', required: [] })
  .openapi('ListResourceSetsRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    TagList: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource to return tags for. The Firewall Manager resources that support tagging are policies, applications lists, and protocols lists. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const FirewallPolicyIdSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(1024)
  .openapi('FirewallPolicyId')

const FirewallPolicyNameSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(1024)
  .openapi('FirewallPolicyName')

const ThirdPartyFirewallFirewallPolicySchema = z
  .object({
    FirewallPolicyId: FirewallPolicyIdSchema.and(
      z.any().openapi({ description: 'The ID of the specified firewall policy.' }),
    ).exactOptional(),
    FirewallPolicyName: FirewallPolicyNameSchema.and(
      z.any().openapi({ description: 'The name of the specified firewall policy.' }),
    ).exactOptional(),
  })
  .openapi({ description: "Configures the third-party firewall's firewall policy.", required: [] })
  .openapi('ThirdPartyFirewallFirewallPolicy')

const ThirdPartyFirewallFirewallPoliciesSchema = z
  .array(ThirdPartyFirewallFirewallPolicySchema)
  .openapi('ThirdPartyFirewallFirewallPolicies')

const ListThirdPartyFirewallFirewallPoliciesResponseSchema = z
  .object({
    ThirdPartyFirewallFirewallPolicies: ThirdPartyFirewallFirewallPoliciesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that contains one <code>ThirdPartyFirewallFirewallPolicies</code> element for each third-party firewall policies that the specified third-party firewall vendor is associated with. Each <code>ThirdPartyFirewallFirewallPolicies</code> element contains the firewall policy name and ID.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value that you will use for <code>NextToken</code> in the next <code>ListThirdPartyFirewallFirewallPolicies</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListThirdPartyFirewallFirewallPoliciesResponse')

const ListThirdPartyFirewallFirewallPoliciesRequestSchema = z
  .object({
    ThirdPartyFirewall: ThirdPartyFirewallSchema.and(
      z.any().openapi({ description: 'The name of the third-party firewall vendor.' }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If the previous response included a <code>NextToken</code> element, the specified third-party firewall vendor is associated with more third-party firewall policies. To get more third-party firewall policies, submit another <code>ListThirdPartyFirewallFirewallPoliciesRequest</code> request.</p> <p> For the value of <code>NextToken</code>, specify the value of <code>NextToken</code> from the previous response. If the previous response didn't include a <code>NextToken</code> element, there are no more third-party firewall policies to get. </p>",
        }),
    ).exactOptional(),
    MaxResults: PaginationMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of third-party firewall policies that you want Firewall Manager to return. If the specified third-party firewall vendor is associated with more than <code>MaxResults</code> firewall policies, the response includes a <code>NextToken</code> element. <code>NextToken</code> contains an encrypted token that identifies the first third-party firewall policies that Firewall Manager will return if you submit another request.',
        }),
    ),
  })
  .openapi({
    required: ['ThirdPartyFirewall', 'MaxResults'],
    title: 'ListThirdPartyFirewallFirewallPoliciesRequest',
  })
  .openapi('ListThirdPartyFirewallFirewallPoliciesRequest')

const PutAdminAccountRequestSchema = z
  .object({
    AdminAccount: AWSAccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID to add as an Firewall Manager administrator account. The account must be a member of the organization that was onboarded to Firewall Manager by <a>AssociateAdminAccount</a>. For more information about Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the Amazon Web Services Accounts in Your Organization</a>.',
        }),
    ),
    AdminScope: AdminScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configures the resources that the specified Firewall Manager administrator can manage. As a best practice, set the administrative scope according to the principles of least privilege. Only grant the administrator the specific resources or permissions that they need to perform the duties of their role.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AdminAccount'], title: 'PutAdminAccountRequest' })
  .openapi('PutAdminAccountRequest')

const PutAppsListResponseSchema = z
  .object({
    AppsList: AppsListDataSchema.and(
      z.any().openapi({ description: 'The details of the Firewall Manager applications list.' }),
    ).exactOptional(),
    AppsListArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the applications list.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutAppsListResponse')

const PutAppsListRequestSchema = z
  .object({
    AppsList: AppsListDataSchema.and(
      z
        .any()
        .openapi({
          description: 'The details of the Firewall Manager applications list to be created.',
        }),
    ),
    TagList: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['AppsList'], title: 'PutAppsListRequest' })
  .openapi('PutAppsListRequest')

const PutNotificationChannelRequestSchema = z
  .object({
    SnsTopicArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the SNS topic that collects notifications from Firewall Manager.',
        }),
    ),
    SnsRoleName: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role that allows Amazon SNS to record Firewall Manager activity. ',
        }),
    ),
  })
  .openapi({ required: ['SnsTopicArn', 'SnsRoleName'], title: 'PutNotificationChannelRequest' })
  .openapi('PutNotificationChannelRequest')

const PutPolicyResponseSchema = z
  .object({
    Policy: PolicySchema.and(
      z.any().openapi({ description: 'The details of the Firewall Manager policy.' }),
    ).exactOptional(),
    PolicyArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the policy.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutPolicyResponse')

const PutPolicyRequestSchema = z
  .object({
    Policy: PolicySchema.and(
      z.any().openapi({ description: 'The details of the Firewall Manager policy to be created.' }),
    ),
    TagList: TagListSchema.and(
      z.any().openapi({ description: 'The tags to add to the Amazon Web Services resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Policy'], title: 'PutPolicyRequest' })
  .openapi('PutPolicyRequest')

const PutProtocolsListResponseSchema = z
  .object({
    ProtocolsList: ProtocolsListDataSchema.and(
      z.any().openapi({ description: 'The details of the Firewall Manager protocols list.' }),
    ).exactOptional(),
    ProtocolsListArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the protocols list.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutProtocolsListResponse')

const PutProtocolsListRequestSchema = z
  .object({
    ProtocolsList: ProtocolsListDataSchema.and(
      z
        .any()
        .openapi({
          description: 'The details of the Firewall Manager protocols list to be created.',
        }),
    ),
    TagList: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ProtocolsList'], title: 'PutProtocolsListRequest' })
  .openapi('PutProtocolsListRequest')

const PutResourceSetResponseSchema = z
  .object({
    ResourceSet: ResourceSetSchema.and(
      z.any().openapi({ description: 'Details about the resource set.' }),
    ),
    ResourceSetArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource set.' }),
    ),
  })
  .openapi({ required: ['ResourceSet', 'ResourceSetArn'] })
  .openapi('PutResourceSetResponse')

const PutResourceSetRequestSchema = z
  .object({
    ResourceSet: ResourceSetSchema.and(
      z
        .any()
        .openapi({ description: 'Details about the resource set to be created or updated.&gt;' }),
    ),
    TagList: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Retrieves the tags associated with the specified resource set. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceSet'], title: 'PutResourceSetRequest' })
  .openapi('PutResourceSetRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource to return tags for. The Firewall Manager resources that support tagging are policies, applications lists, and protocols lists. ',
        }),
    ),
    TagList: TagListSchema.and(
      z.any().openapi({ description: 'The tags to add to the resource.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagList'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource to return tags for. The Firewall Manager resources that support tagging are policies, applications lists, and protocols lists. ',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The keys of the tags to remove from the resource. ' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const CustomerPolicyScopeIdTypeSchema = z
  .enum(['ACCOUNT', 'ORG_UNIT'])
  .openapi('CustomerPolicyScopeIdType')

const DependentServiceNameSchema = z
  .enum(['AWSCONFIG', 'AWSWAF', 'AWSSHIELD_ADVANCED', 'AWSVPC'])
  .openapi('DependentServiceName')

const PreviousListVersionSchema = z
  .string()
  .regex(/^\d{1,2}$/)
  .min(1)
  .max(2)
  .openapi('PreviousListVersion')

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

export const postXAmzTargetAWSFMS20180101AssociateAdminAccountRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount',
  description:
    '<p>Sets a Firewall Manager default administrator account. The Firewall Manager default administrator account can manage third-party firewalls and has full administrative scope that allows administration of all policy types, accounts, organizational units, and Regions. This account must be a member account of the organization in Organizations whose resources you want to protect.</p> <p>For information about working with Firewall Manager administrator accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>.</p>',
  operationId: 'AssociateAdminAccount',
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
        .literal('AWSFMS_20180101.AssociateAdminAccount')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.AssociateAdminAccount'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateAdminAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101AssociateThirdPartyFirewallRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall',
  description:
    "Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.",
  operationId: 'AssociateThirdPartyFirewall',
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
        .literal('AWSFMS_20180101.AssociateThirdPartyFirewall')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.AssociateThirdPartyFirewall'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateThirdPartyFirewallRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateThirdPartyFirewallResponseSchema } },
    },
    480: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101BatchAssociateResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource',
  description: 'Associate resources to a Firewall Manager resource set.',
  operationId: 'BatchAssociateResource',
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
        .literal('AWSFMS_20180101.BatchAssociateResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.BatchAssociateResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchAssociateResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchAssociateResourceResponseSchema } },
    },
    480: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101BatchDisassociateResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource',
  description: 'Disassociates resources from a Firewall Manager resource set.',
  operationId: 'BatchDisassociateResource',
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
        .literal('AWSFMS_20180101.BatchDisassociateResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.BatchDisassociateResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchDisassociateResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDisassociateResourceResponseSchema } },
    },
    480: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101DeleteAppsListRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.DeleteAppsList',
  description: 'Permanently deletes an Firewall Manager applications list.',
  operationId: 'DeleteAppsList',
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
        .literal('AWSFMS_20180101.DeleteAppsList')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.DeleteAppsList'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteAppsListRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101DeleteNotificationChannelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel',
  description:
    'Deletes an Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.',
  operationId: 'DeleteNotificationChannel',
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
        .literal('AWSFMS_20180101.DeleteNotificationChannel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.DeleteNotificationChannel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteNotificationChannelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101DeletePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.DeletePolicy',
  description: 'Permanently deletes an Firewall Manager policy. ',
  operationId: 'DeletePolicy',
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
        .literal('AWSFMS_20180101.DeletePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.DeletePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeletePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101DeleteProtocolsListRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList',
  description: 'Permanently deletes an Firewall Manager protocols list.',
  operationId: 'DeleteProtocolsList',
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
        .literal('AWSFMS_20180101.DeleteProtocolsList')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.DeleteProtocolsList'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteProtocolsListRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101DeleteResourceSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet',
  description: 'Deletes the specified <a>ResourceSet</a>.',
  operationId: 'DeleteResourceSet',
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
        .literal('AWSFMS_20180101.DeleteResourceSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.DeleteResourceSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteResourceSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101DisassociateAdminAccountRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount',
  description:
    '<p>Disassociates an Firewall Manager administrator account. To set a different account as an Firewall Manager administrator, submit a <a>PutAdminAccount</a> request. To set an account as a default administrator account, you must submit an <a>AssociateAdminAccount</a> request.</p> <p>Disassociation of the default administrator account follows the first in, last out principle. If you are the default administrator, all Firewall Manager administrators within the organization must first disassociate their accounts before you can disassociate your account.</p>',
  operationId: 'DisassociateAdminAccount',
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
        .literal('AWSFMS_20180101.DisassociateAdminAccount')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.DisassociateAdminAccount'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateAdminAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101DisassociateThirdPartyFirewallRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall',
  description:
    'Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call <code>DisassociateThirdPartyFirewall</code>, the third-party firewall vendor deletes all of the firewalls that are associated with the account.',
  operationId: 'DisassociateThirdPartyFirewall',
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
        .literal('AWSFMS_20180101.DisassociateThirdPartyFirewall')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.DisassociateThirdPartyFirewall'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateThirdPartyFirewallRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateThirdPartyFirewallResponseSchema } },
    },
    480: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101GetAdminAccountRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.GetAdminAccount',
  description:
    'Returns the Organizations account that is associated with Firewall Manager as the Firewall Manager default administrator.',
  operationId: 'GetAdminAccount',
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
        .literal('AWSFMS_20180101.GetAdminAccount')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.GetAdminAccount'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetAdminAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAdminAccountResponseSchema } },
    },
    480: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101GetAdminScopeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.GetAdminScope',
  description:
    "Returns information about the specified account's administrative scope. The admistrative scope defines the resources that an Firewall Manager administrator can manage.",
  operationId: 'GetAdminScope',
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
        .literal('AWSFMS_20180101.GetAdminScope')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.GetAdminScope'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetAdminScopeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAdminScopeResponseSchema } },
    },
    480: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101GetAppsListRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.GetAppsList',
  description: 'Returns information about the specified Firewall Manager applications list.',
  operationId: 'GetAppsList',
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
        .literal('AWSFMS_20180101.GetAppsList')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.GetAppsList'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetAppsListRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAppsListResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101GetComplianceDetailRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail',
  description:
    "<p>Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. </p> <ul> <li> <p>Resources are considered noncompliant for WAF and Shield Advanced policies if the specified policy has not been applied to them.</p> </li> <li> <p>Resources are considered noncompliant for security group policies if they are in scope of the policy, they violate one or more of the policy rules, and remediation is disabled or not possible.</p> </li> <li> <p>Resources are considered noncompliant for Network Firewall policies if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet, if a subnet created by the Firewall Manager doesn't have the expected route table, and for modifications to a firewall policy that violate the Firewall Manager policy's rules.</p> </li> <li> <p>Resources are considered noncompliant for DNS Firewall policies if a DNS Firewall rule group is missing from the rule group associations for the VPC. </p> </li> </ul>",
  operationId: 'GetComplianceDetail',
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
        .literal('AWSFMS_20180101.GetComplianceDetail')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.GetComplianceDetail'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetComplianceDetailRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetComplianceDetailResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101GetNotificationChannelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel',
  description:
    'Information about the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.',
  operationId: 'GetNotificationChannel',
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
        .literal('AWSFMS_20180101.GetNotificationChannel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.GetNotificationChannel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetNotificationChannelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetNotificationChannelResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101GetPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.GetPolicy',
  description: 'Returns information about the specified Firewall Manager policy.',
  operationId: 'GetPolicy',
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
        .literal('AWSFMS_20180101.GetPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.GetPolicy'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetPolicyRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPolicyResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'InvalidTypeException',
      content: { 'application/json': { schema: InvalidTypeExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101GetProtectionStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus',
  description:
    'If you created a Shield Advanced policy, returns policy-level attack summary information in the event of a potential DDoS attack. Other policy types are currently unsupported.',
  operationId: 'GetProtectionStatus',
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
        .literal('AWSFMS_20180101.GetProtectionStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.GetProtectionStatus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetProtectionStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetProtectionStatusResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101GetProtocolsListRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.GetProtocolsList',
  description: 'Returns information about the specified Firewall Manager protocols list.',
  operationId: 'GetProtocolsList',
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
        .literal('AWSFMS_20180101.GetProtocolsList')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.GetProtocolsList'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetProtocolsListRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetProtocolsListResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101GetResourceSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.GetResourceSet',
  description: 'Gets information about a specific resource set.',
  operationId: 'GetResourceSet',
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
        .literal('AWSFMS_20180101.GetResourceSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.GetResourceSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetResourceSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourceSetResponseSchema } },
    },
    480: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101GetThirdPartyFirewallAssociationStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus',
  description:
    'The onboarding status of a Firewall Manager admin account to third-party firewall vendor tenant.',
  operationId: 'GetThirdPartyFirewallAssociationStatus',
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
        .literal('AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus'],
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GetThirdPartyFirewallAssociationStatusRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: GetThirdPartyFirewallAssociationStatusResponseSchema },
      },
    },
    480: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101GetViolationDetailsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.GetViolationDetails',
  description:
    'Retrieves violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.',
  operationId: 'GetViolationDetails',
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
        .literal('AWSFMS_20180101.GetViolationDetails')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.GetViolationDetails'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetViolationDetailsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetViolationDetailsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101ListAdminAccountsForOrganizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization',
  description:
    "<p>Returns a <code>AdminAccounts</code> object that lists the Firewall Manager administrators within the organization that are onboarded to Firewall Manager by <a>AssociateAdminAccount</a>.</p> <p>This operation can be called only from the organization's management account.</p>",
  operationId: 'ListAdminAccountsForOrganization',
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
        .literal('AWSFMS_20180101.ListAdminAccountsForOrganization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.ListAdminAccountsForOrganization'] },
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
      content: { 'application/json': { schema: ListAdminAccountsForOrganizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAdminAccountsForOrganizationResponseSchema } },
    },
    480: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101ListAdminsManagingAccountRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount',
  description:
    'Lists the accounts that are managing the specified Organizations member account. This is useful for any member account so that they can view the accounts who are managing their account. This operation only returns the managing administrators that have the requested account within their <a>AdminScope</a>.',
  operationId: 'ListAdminsManagingAccount',
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
        .literal('AWSFMS_20180101.ListAdminsManagingAccount')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.ListAdminsManagingAccount'] },
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
      content: { 'application/json': { schema: ListAdminsManagingAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAdminsManagingAccountResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101ListAppsListsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.ListAppsLists',
  description: 'Returns an array of <code>AppsListDataSummary</code> objects.',
  operationId: 'ListAppsLists',
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
        .literal('AWSFMS_20180101.ListAppsLists')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.ListAppsLists'] },
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
      content: { 'application/json': { schema: ListAppsListsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAppsListsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101ListComplianceStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus',
  description:
    'Returns an array of <code>PolicyComplianceStatus</code> objects. Use <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected by the specified policy. ',
  operationId: 'ListComplianceStatus',
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
        .literal('AWSFMS_20180101.ListComplianceStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.ListComplianceStatus'] },
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
      content: { 'application/json': { schema: ListComplianceStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListComplianceStatusResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101ListDiscoveredResourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources',
  description:
    "Returns an array of resources in the organization's accounts that are available to be associated with a resource set.",
  operationId: 'ListDiscoveredResources',
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
        .literal('AWSFMS_20180101.ListDiscoveredResources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.ListDiscoveredResources'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListDiscoveredResourcesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDiscoveredResourcesResponseSchema } },
    },
    480: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101ListMemberAccountsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts',
  description:
    "<p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the administrator's Amazon Web Services organization.</p> <p>Either an Firewall Manager administrator or the organization's management account can make this request.</p>",
  operationId: 'ListMemberAccounts',
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
        .literal('AWSFMS_20180101.ListMemberAccounts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.ListMemberAccounts'] },
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
      content: { 'application/json': { schema: ListMemberAccountsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMemberAccountsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101ListPoliciesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.ListPolicies',
  description: 'Returns an array of <code>PolicySummary</code> objects.',
  operationId: 'ListPolicies',
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
        .literal('AWSFMS_20180101.ListPolicies')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.ListPolicies'] },
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
      content: { 'application/json': { schema: ListPoliciesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPoliciesResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101ListProtocolsListsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists',
  description: 'Returns an array of <code>ProtocolsListDataSummary</code> objects.',
  operationId: 'ListProtocolsLists',
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
        .literal('AWSFMS_20180101.ListProtocolsLists')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.ListProtocolsLists'] },
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
      content: { 'application/json': { schema: ListProtocolsListsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProtocolsListsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101ListResourceSetResourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources',
  description: 'Returns an array of resources that are currently associated to a resource set.',
  operationId: 'ListResourceSetResources',
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
        .literal('AWSFMS_20180101.ListResourceSetResources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.ListResourceSetResources'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListResourceSetResourcesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResourceSetResourcesResponseSchema } },
    },
    480: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101ListResourceSetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.ListResourceSets',
  description: 'Returns an array of <code>ResourceSetSummary</code> objects.',
  operationId: 'ListResourceSets',
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
        .literal('AWSFMS_20180101.ListResourceSets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.ListResourceSets'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListResourceSetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResourceSetsResponseSchema } },
    },
    480: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.ListTagsForResource',
  description: 'Retrieves the list of tags for the specified Amazon Web Services resource. ',
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
        .literal('AWSFMS_20180101.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.ListTagsForResource'] },
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
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101ListThirdPartyFirewallFirewallPoliciesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies',
  description:
    "Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.",
  operationId: 'ListThirdPartyFirewallFirewallPolicies',
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
        .literal('AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies'],
            },
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
      content: {
        'application/json': { schema: ListThirdPartyFirewallFirewallPoliciesRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ListThirdPartyFirewallFirewallPoliciesResponseSchema },
      },
    },
    480: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101PutAdminAccountRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.PutAdminAccount',
  description:
    'Creates or updates an Firewall Manager administrator account. The account must be a member of the organization that was onboarded to Firewall Manager by <a>AssociateAdminAccount</a>. Only the organization\'s management account can create an Firewall Manager administrator account. When you create an Firewall Manager administrator account, the service checks to see if the account is already a delegated administrator within Organizations. If the account isn\'t a delegated administrator, Firewall Manager calls Organizations to delegate the account within Organizations. For more information about administrator accounts within Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the Amazon Web Services Accounts in Your Organization</a>.',
  operationId: 'PutAdminAccount',
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
        .literal('AWSFMS_20180101.PutAdminAccount')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.PutAdminAccount'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutAdminAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101PutAppsListRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.PutAppsList',
  description: 'Creates an Firewall Manager applications list.',
  operationId: 'PutAppsList',
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
        .literal('AWSFMS_20180101.PutAppsList')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.PutAppsList'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PutAppsListRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutAppsListResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101PutNotificationChannelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel',
  description:
    '<p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that Firewall Manager uses to record SNS logs.</p> <p>To perform this action outside of the console, you must first configure the SNS topic\'s access policy to allow the <code>SnsRoleName</code> to publish SNS logs. If the <code>SnsRoleName</code> provided is a role other than the <code>AWSServiceRoleForFMS</code> service-linked role, this role must have a trust relationship configured to allow the Firewall Manager service principal <code>fms.amazonaws.com</code> to assume this role. For information about configuring an SNS access policy, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-security_iam_service-with-iam.html#fms-security_iam_service-with-iam-roles-service">Service roles for Firewall Manager</a> in the <i>Firewall Manager Developer Guide</i>.</p>',
  operationId: 'PutNotificationChannel',
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
        .literal('AWSFMS_20180101.PutNotificationChannel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.PutNotificationChannel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutNotificationChannelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101PutPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.PutPolicy',
  description:
    '<p>Creates an Firewall Manager policy.</p> <p>Firewall Manager provides the following types of policies: </p> <ul> <li> <p>An WAF policy (type WAFV2), which defines rule groups to run first in the corresponding WAF web ACL and rule groups to run last in the web ACL.</p> </li> <li> <p>An WAF Classic policy (type WAF), which defines a rule group. </p> </li> <li> <p>A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources.</p> </li> <li> <p>A security group policy, which manages VPC security groups across your Amazon Web Services organization. </p> </li> <li> <p>An Network Firewall policy, which provides firewall rules to filter network traffic in specified Amazon VPCs.</p> </li> <li> <p>A DNS Firewall policy, which provides Route 53 Resolver DNS Firewall rules to filter DNS queries for specified VPCs.</p> </li> </ul> <p>Each policy is specific to one of the types. If you want to enforce more than one policy type across accounts, create multiple policies. You can create multiple policies for each type.</p> <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information about subscribing to Shield Advanced, see <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>',
  operationId: 'PutPolicy',
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
        .literal('AWSFMS_20180101.PutPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.PutPolicy'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PutPolicyRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutPolicyResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    485: {
      description: 'InvalidTypeException',
      content: { 'application/json': { schema: InvalidTypeExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101PutProtocolsListRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.PutProtocolsList',
  description: 'Creates an Firewall Manager protocols list.',
  operationId: 'PutProtocolsList',
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
        .literal('AWSFMS_20180101.PutProtocolsList')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.PutProtocolsList'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutProtocolsListRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutProtocolsListResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101PutResourceSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.PutResourceSet',
  description:
    '<p>Creates the resource set.</p> <p>An Firewall Manager resource set defines the resources to import into an Firewall Manager policy from another Amazon Web Services service.</p>',
  operationId: 'PutResourceSet',
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
        .literal('AWSFMS_20180101.PutResourceSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.PutResourceSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutResourceSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutResourceSetResponseSchema } },
    },
    480: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.TagResource',
  description: 'Adds one or more tags to an Amazon Web Services resource.',
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
        .literal('AWSFMS_20180101.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.TagResource'] },
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
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSFMS20180101UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSFMS_20180101.UntagResource',
  description: 'Removes one or more tags from an Amazon Web Services resource.',
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
        .literal('AWSFMS_20180101.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSFMS_20180101.UntagResource'] },
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
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    483: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})
