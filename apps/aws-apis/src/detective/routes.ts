import { createRoute, z } from '@hono/zod-openapi'

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const AccountIdSchema = z
  .string()
  .regex(/^[0-9]+$/)
  .length(12)
  .openapi('AccountId')

const GraphArnSchema = z
  .string()
  .regex(/^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$/)
  .openapi('GraphArn')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const TimestampForCollectionSchema = z
  .object({
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data and time when data collection began for a source package. The value is an ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Details on when data collection began for a source package.',
    required: [],
  })
  .openapi('TimestampForCollection')

const LastIngestStateChangeDatesSchema = z
  .record(z.string(), TimestampForCollectionSchema)
  .openapi('LastIngestStateChangeDates')

const DatasourcePackageIngestHistorySchema = z
  .record(z.string(), LastIngestStateChangeDatesSchema)
  .openapi('DatasourcePackageIngestHistory')

const MembershipDatasourcesSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({ description: 'The account identifier of the Amazon Web Services account.' }),
    ).exactOptional(),
    GraphArn: GraphArnSchema.and(
      z.any().openapi({ description: 'The ARN of the organization behavior graph.' }),
    ).exactOptional(),
    DatasourcePackageIngestHistory: DatasourcePackageIngestHistorySchema.and(
      z
        .any()
        .openapi({
          description: 'Details on when a data source package was added to a behavior graph.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Details on data source packages for members of the behavior graph.',
    required: [],
  })
  .openapi('MembershipDatasources')

const MembershipDatasourcesListSchema = z
  .array(MembershipDatasourcesSchema)
  .openapi('MembershipDatasourcesList')

const UnprocessedReasonSchema = z.string().openapi('UnprocessedReason')

const UnprocessedAccountSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account identifier of the member account that was not processed.',
        }),
    ).exactOptional(),
    Reason: UnprocessedReasonSchema.and(
      z
        .any()
        .openapi({
          description: 'The reason that the member account request could not be processed.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A member account that was included in a request but for which the request could not be processed.',
    required: [],
  })
  .openapi('UnprocessedAccount')

const UnprocessedAccountListSchema = z
  .array(UnprocessedAccountSchema)
  .openapi('UnprocessedAccountList')

const BatchGetGraphMemberDatasourcesResponseSchema = z
  .object({
    MemberDatasources: MembershipDatasourcesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details on the status of data source packages for members of the behavior graph.',
        }),
    ).exactOptional(),
    UnprocessedAccounts: UnprocessedAccountListSchema.and(
      z
        .any()
        .openapi({
          description: 'Accounts that data source package information could not be retrieved for.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetGraphMemberDatasourcesResponse')

const UnprocessedGraphSchema = z
  .object({
    GraphArn: GraphArnSchema.and(
      z.any().openapi({ description: 'The ARN of the organization behavior graph.' }),
    ).exactOptional(),
    Reason: UnprocessedReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason data source package information could not be processed for a behavior graph.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Behavior graphs that could not be processed in the request.',
    required: [],
  })
  .openapi('UnprocessedGraph')

const UnprocessedGraphListSchema = z.array(UnprocessedGraphSchema).openapi('UnprocessedGraphList')

const BatchGetMembershipDatasourcesResponseSchema = z
  .object({
    MembershipDatasources: MembershipDatasourcesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details on the data source package history for an member of the behavior graph.',
        }),
    ).exactOptional(),
    UnprocessedGraphs: UnprocessedGraphListSchema.and(
      z
        .any()
        .openapi({
          description: 'Graphs that data source package information could not be retrieved for.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetMembershipDatasourcesResponse')

const CreateGraphResponseSchema = z
  .object({
    GraphArn: GraphArnSchema.and(
      z.any().openapi({ description: 'The ARN of the new behavior graph.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateGraphResponse')

const TagValueSchema = z.string().max(256).openapi('TagValue')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const EmailAddressSchema = z
  .string()
  .regex(/^.+@(?:(?:(?!-)[A-Za-z0-9-]{1,62})?[A-Za-z0-9]{1}\.)+[A-Za-z]{2,6}$/)
  .min(1)
  .max(64)
  .openapi('EmailAddress')

const MemberStatusSchema = z
  .enum([
    'INVITED',
    'VERIFICATION_IN_PROGRESS',
    'VERIFICATION_FAILED',
    'ENABLED',
    'ACCEPTED_BUT_DISABLED',
  ])
  .openapi('MemberStatus')

const MemberDisabledReasonSchema = z
  .enum(['VOLUME_TOO_HIGH', 'VOLUME_UNKNOWN'])
  .openapi('MemberDisabledReason')

const ByteValueSchema = z.int().openapi('ByteValue')

const PercentageSchema = z.float64().openapi('Percentage')

const InvitationTypeSchema = z.enum(['INVITATION', 'ORGANIZATION']).openapi('InvitationType')

const DatasourcePackageUsageInfoSchema = z
  .object({
    VolumeUsageInBytes: ByteValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'Total volume of data in bytes per day ingested for a given data source package.',
        }),
    ).exactOptional(),
    VolumeUsageUpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data and time when the member account data volume was last updated. The value is an ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information on the usage of a data source package in the behavior graph.',
    required: [],
  })
  .openapi('DatasourcePackageUsageInfo')

const VolumeUsageByDatasourcePackageSchema = z
  .record(z.string(), DatasourcePackageUsageInfoSchema)
  .openapi('VolumeUsageByDatasourcePackage')

const DatasourcePackageIngestStateSchema = z
  .enum(['STARTED', 'STOPPED', 'DISABLED'])
  .openapi('DatasourcePackageIngestState')

const DatasourcePackageIngestStatesSchema = z
  .record(z.string(), DatasourcePackageIngestStateSchema)
  .openapi('DatasourcePackageIngestStates')

const MemberDetailSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services account identifier for the member account.',
        }),
    ).exactOptional(),
    EmailAddress: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account root user email address for the member account.',
        }),
    ).exactOptional(),
    GraphArn: GraphArnSchema.and(
      z.any().openapi({ description: 'The ARN of the behavior graph.' }),
    ).exactOptional(),
    MasterId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The Amazon Web Services account identifier of the administrator account for the behavior graph.This property is deprecated. Use AdministratorId instead.',
        }),
    ).exactOptional(),
    AdministratorId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account identifier of the administrator account for the behavior graph.',
        }),
    ).exactOptional(),
    Status: MemberStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The current membership status of the member account. The status can have one of the following values:</p> <ul> <li> <p> <code>INVITED</code> - For invited accounts only. Indicates that the member was sent an invitation but has not yet responded.</p> </li> <li> <p> <code>VERIFICATION_IN_PROGRESS</code> - For invited accounts only, indicates that Detective is verifying that the account identifier and email address provided for the member account match. If they do match, then Detective sends the invitation. If the email address and account identifier don't match, then the member cannot be added to the behavior graph.</p> <p>For organization accounts in the organization behavior graph, indicates that Detective is verifying that the account belongs to the organization.</p> </li> <li> <p> <code>VERIFICATION_FAILED</code> - For invited accounts only. Indicates that the account and email address provided for the member account do not match, and Detective did not send an invitation to the account.</p> </li> <li> <p> <code>ENABLED</code> - Indicates that the member account currently contributes data to the behavior graph. For invited accounts, the member account accepted the invitation. For organization accounts in the organization behavior graph, the Detective administrator account enabled the organization account as a member account.</p> </li> <li> <p> <code>ACCEPTED_BUT_DISABLED</code> - The account accepted the invitation, or was enabled by the Detective administrator account, but is prevented from contributing data to the behavior graph. <code>DisabledReason</code> provides the reason why the member account is not enabled.</p> </li> </ul> <p>Invited accounts that declined an invitation or that were removed from the behavior graph are not included. In the organization behavior graph, organization accounts that the Detective administrator account did not enable are not included.</p>",
        }),
    ).exactOptional(),
    DisabledReason: MemberDisabledReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For member accounts with a status of <code>ACCEPTED_BUT_DISABLED</code>, the reason that the member account is not enabled.</p> <p>The reason can have one of the following values:</p> <ul> <li> <p> <code>VOLUME_TOO_HIGH</code> - Indicates that adding the member account would cause the data volume for the behavior graph to be too high.</p> </li> <li> <p> <code>VOLUME_UNKNOWN</code> - Indicates that Detective is unable to verify the data volume for the member account. This is usually because the member account is not enrolled in Amazon GuardDuty. </p> </li> </ul>',
        }),
    ).exactOptional(),
    InvitedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'For invited accounts, the date and time that Detective sent the invitation to the account. The value is an ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.',
        }),
    ).exactOptional(),
    UpdatedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the member account was last updated. The value is an ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.',
        }),
    ).exactOptional(),
    VolumeUsageInBytes: ByteValueSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The data volume in bytes per day for the member account.This property is deprecated. Use VolumeUsageByDatasourcePackage instead.',
        }),
    ).exactOptional(),
    VolumeUsageUpdatedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The data and time when the member account data volume was last updated. The value is an ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.This property is deprecated. Use VolumeUsageByDatasourcePackage instead.',
        }),
    ).exactOptional(),
    PercentOfGraphUtilization: PercentageSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>The member account data volume as a percentage of the maximum allowed data volume. 0 indicates 0 percent, and 100 indicates 100 percent.</p> <p>Note that this is not the percentage of the behavior graph data volume.</p> <p>For example, the data volume for the behavior graph is 80 GB per day. The maximum data volume is 160 GB per day. If the data volume for the member account is 40 GB per day, then <code>PercentOfGraphUtilization</code> is 25. It represents 25% of the maximum allowed data volume. </p>This property is deprecated. Use VolumeUsageByDatasourcePackage instead.',
        }),
    ).exactOptional(),
    PercentOfGraphUtilizationUpdatedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'The date and time when the graph utilization percentage was last updated. The value is an ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.This property is deprecated. Use VolumeUsageByDatasourcePackage instead.',
        }),
    ).exactOptional(),
    InvitationType: InvitationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of behavior graph membership.</p> <p>For an organization account in the organization behavior graph, the type is <code>ORGANIZATION</code>.</p> <p>For an account that was invited to a behavior graph, the type is <code>INVITATION</code>. </p>',
        }),
    ).exactOptional(),
    VolumeUsageByDatasourcePackage: VolumeUsageByDatasourcePackageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details on the volume of usage for each data source package in a behavior graph.',
        }),
    ).exactOptional(),
    DatasourcePackageIngestStates: DatasourcePackageIngestStatesSchema.and(
      z
        .any()
        .openapi({ description: 'The state of a data source package for the behavior graph.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about a member account in a behavior graph.', required: [] })
  .openapi('MemberDetail')

const MemberDetailListSchema = z.array(MemberDetailSchema).openapi('MemberDetailList')

const CreateMembersResponseSchema = z
  .object({
    Members: MemberDetailListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The set of member account invitation or enablement requests that Detective was able to process. This includes accounts that are being verified, that failed verification, and that passed verification and are being sent an invitation or are being enabled.',
        }),
    ).exactOptional(),
    UnprocessedAccounts: UnprocessedAccountListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of accounts for which Detective was unable to process the invitation or enablement request. For each account, the list provides the reason why the request could not be processed. The list includes accounts that are already member accounts in the behavior graph.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateMembersResponse')

const AccountSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({ description: 'The account identifier of the Amazon Web Services account.' }),
    ),
    EmailAddress: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account root user email address for the Amazon Web Services account.',
        }),
    ),
  })
  .openapi({
    required: ['AccountId', 'EmailAddress'],
    description:
      'An Amazon Web Services account that is the administrator account of or a member of a behavior graph.',
  })
  .openapi('Account')

const AccountIdListSchema = z.array(AccountIdSchema).min(1).max(50).openapi('AccountIdList')

const DeleteMembersResponseSchema = z
  .object({
    AccountIds: AccountIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of Amazon Web Services account identifiers for the member accounts that Detective successfully removed from the behavior graph.',
        }),
    ).exactOptional(),
    UnprocessedAccounts: UnprocessedAccountListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of member accounts that Detective was not able to remove from the behavior graph. For each member account, provides the reason that the deletion could not be processed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteMembersResponse')

const BooleanSchema = z.boolean().openapi('Boolean')

const DescribeOrganizationConfigurationResponseSchema = z
  .object({
    AutoEnable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to automatically enable new organization accounts as member accounts in the organization behavior graph.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeOrganizationConfigurationResponse')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const GetMembersResponseSchema = z
  .object({
    MemberDetails: MemberDetailListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The member account details that Detective is returning in response to the request.',
        }),
    ).exactOptional(),
    UnprocessedAccounts: UnprocessedAccountListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The requested member accounts for which Detective was unable to return member details.</p> <p>For each account, provides the reason why the request could not be processed.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMembersResponse')

const DatasourcePackageIngestDetailSchema = z
  .object({
    DatasourcePackageIngestState: DatasourcePackageIngestStateSchema.and(
      z
        .any()
        .openapi({
          description: 'Details on which data source packages are ingested for a member account.',
        }),
    ).exactOptional(),
    LastIngestStateChange: LastIngestStateChangeDatesSchema.and(
      z
        .any()
        .openapi({ description: 'The date a data source package was enabled for this account' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Details about the data source packages ingested by your behavior graph.',
    required: [],
  })
  .openapi('DatasourcePackageIngestDetail')

const DatasourcePackageIngestDetailsSchema = z
  .record(z.string(), DatasourcePackageIngestDetailSchema)
  .openapi('DatasourcePackageIngestDetails')

const PaginationTokenSchema = z.string().min(1).max(1024).openapi('PaginationToken')

const ListDatasourcePackagesResponseSchema = z
  .object({
    DatasourcePackages: DatasourcePackageIngestDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Details on the data source packages active in the behavior graph.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDatasourcePackagesResponse')

const GraphSchema = z
  .object({
    Arn: GraphArnSchema.and(
      z.any().openapi({ description: 'The ARN of the behavior graph.' }),
    ).exactOptional(),
    CreatedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the behavior graph was created. The value is an ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A behavior graph in Detective.', required: [] })
  .openapi('Graph')

const GraphListSchema = z.array(GraphSchema).openapi('GraphList')

const ListGraphsResponseSchema = z
  .object({
    GraphList: GraphListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of behavior graphs that the account is an administrator account for.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more behavior graphs remaining in the results, then this is the pagination token to use to request the next page of behavior graphs.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListGraphsResponse')

const ListInvitationsResponseSchema = z
  .object({
    Invitations: MemberDetailListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of behavior graphs for which the member account has open or accepted invitations.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more behavior graphs remaining in the results, then this is the pagination token to use to request the next page of behavior graphs.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListInvitationsResponse')

const ListMembersResponseSchema = z
  .object({
    MemberDetails: MemberDetailListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of member accounts in the behavior graph.</p> <p>For invited accounts, the results include member accounts that did not pass verification and member accounts that have not yet accepted the invitation to the behavior graph. The results do not include member accounts that were removed from the behavior graph.</p> <p>For the organization behavior graph, the results do not include organization accounts that the Detective administrator account has not enabled as member accounts.</p>',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more member accounts remaining in the results, then use this pagination token to request the next page of member accounts.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMembersResponse')

const AdministratorSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account identifier of the Detective administrator account for the organization.',
        }),
    ).exactOptional(),
    GraphArn: GraphArnSchema.and(
      z.any().openapi({ description: 'The ARN of the organization behavior graph.' }),
    ).exactOptional(),
    DelegationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the Detective administrator account was enabled. The value is an ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the Detective administrator account for an organization.',
    required: [],
  })
  .openapi('Administrator')

const AdministratorListSchema = z.array(AdministratorSchema).openapi('AdministratorList')

const ListOrganizationAdminAccountsResponseSchema = z
  .object({
    Administrators: AdministratorListSchema.and(
      z.any().openapi({ description: 'The list of Detective administrator accounts.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more accounts remaining in the results, then this is the pagination token to use to request the next page of accounts.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListOrganizationAdminAccountsResponse')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag values that are assigned to the behavior graph. The request returns up to 50 tag values.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[a-zA-Z+-=._:\/]+$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const DatasourcePackageSchema = z.enum(['DETECTIVE_CORE', 'EKS_AUDIT']).openapi('DatasourcePackage')

const AcceptInvitationRequestSchema = z
  .object({
    GraphArn: GraphArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the behavior graph that the member account is accepting the invitation for.</p> <p>The member account status in the behavior graph must be <code>INVITED</code>.</p>',
        }),
    ),
  })
  .openapi({ required: ['GraphArn'], title: 'AcceptInvitationRequest' })
  .openapi('AcceptInvitationRequest')

const AccountIdExtendedListSchema = z
  .array(AccountIdSchema)
  .min(1)
  .max(200)
  .openapi('AccountIdExtendedList')

const AccountListSchema = z.array(AccountSchema).min(1).max(50).openapi('AccountList')

const BatchGetGraphMemberDatasourcesRequestSchema = z
  .object({
    GraphArn: GraphArnSchema.and(
      z.any().openapi({ description: 'The ARN of the behavior graph.' }),
    ),
    AccountIds: AccountIdExtendedListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of Amazon Web Services accounts to get data source package information on.',
        }),
    ),
  })
  .openapi({ required: ['GraphArn', 'AccountIds'], title: 'BatchGetGraphMemberDatasourcesRequest' })
  .openapi('BatchGetGraphMemberDatasourcesRequest')

const GraphArnListSchema = z.array(GraphArnSchema).min(1).max(50).openapi('GraphArnList')

const BatchGetMembershipDatasourcesRequestSchema = z
  .object({
    GraphArns: GraphArnListSchema.and(
      z.any().openapi({ description: 'The ARN of the behavior graph.' }),
    ),
  })
  .openapi({ required: ['GraphArns'], title: 'BatchGetMembershipDatasourcesRequest' })
  .openapi('BatchGetMembershipDatasourcesRequest')

const CreateGraphRequestSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to assign to the new behavior graph. You can add up to 50 tags. For each tag, you provide the tag key and the tag value. Each tag key can contain up to 128 characters. Each tag value can contain up to 256 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateGraphRequest', required: [] })
  .openapi('CreateGraphRequest')

const EmailMessageSchema = z.string().min(1).max(1000).openapi('EmailMessage')

const CreateMembersRequestSchema = z
  .object({
    GraphArn: GraphArnSchema.and(
      z.any().openapi({ description: 'The ARN of the behavior graph.' }),
    ),
    Message: EmailMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Customized message text to include in the invitation email message to the invited member accounts.',
        }),
    ).exactOptional(),
    DisableEmailNotification: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>if set to <code>true</code>, then the invited accounts do not receive email notifications. By default, this is set to <code>false</code>, and the invited accounts receive email notifications.</p> <p>Organization accounts in the organization behavior graph do not receive email notifications.</p>',
        }),
    ).exactOptional(),
    Accounts: AccountListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of Amazon Web Services accounts to invite or to enable. You can invite or enable up to 50 accounts at a time. For each invited account, the account list contains the account identifier and the Amazon Web Services account root user email address. For organization accounts in the organization behavior graph, the email address is not required.',
        }),
    ),
  })
  .openapi({ required: ['GraphArn', 'Accounts'], title: 'CreateMembersRequest' })
  .openapi('CreateMembersRequest')

const DatasourcePackageListSchema = z
  .array(DatasourcePackageSchema)
  .min(1)
  .max(25)
  .openapi('DatasourcePackageList')

const DeleteGraphRequestSchema = z
  .object({
    GraphArn: GraphArnSchema.and(
      z.any().openapi({ description: 'The ARN of the behavior graph to disable.' }),
    ),
  })
  .openapi({ required: ['GraphArn'], title: 'DeleteGraphRequest' })
  .openapi('DeleteGraphRequest')

const DeleteMembersRequestSchema = z
  .object({
    GraphArn: GraphArnSchema.and(
      z.any().openapi({ description: 'The ARN of the behavior graph to remove members from.' }),
    ),
    AccountIds: AccountIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of Amazon Web Services account identifiers for the member accounts to remove from the behavior graph. You can remove up to 50 member accounts at a time.',
        }),
    ),
  })
  .openapi({ required: ['GraphArn', 'AccountIds'], title: 'DeleteMembersRequest' })
  .openapi('DeleteMembersRequest')

const DescribeOrganizationConfigurationRequestSchema = z
  .object({
    GraphArn: GraphArnSchema.and(
      z.any().openapi({ description: 'The ARN of the organization behavior graph.' }),
    ),
  })
  .openapi({ required: ['GraphArn'], title: 'DescribeOrganizationConfigurationRequest' })
  .openapi('DescribeOrganizationConfigurationRequest')

const DisassociateMembershipRequestSchema = z
  .object({
    GraphArn: GraphArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The ARN of the behavior graph to remove the member account from.</p> <p>The member account's member status in the behavior graph must be <code>ENABLED</code>.</p>",
        }),
    ),
  })
  .openapi({ required: ['GraphArn'], title: 'DisassociateMembershipRequest' })
  .openapi('DisassociateMembershipRequest')

const EnableOrganizationAdminAccountRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account identifier of the account to designate as the Detective administrator account for the organization.',
        }),
    ),
  })
  .openapi({ required: ['AccountId'], title: 'EnableOrganizationAdminAccountRequest' })
  .openapi('EnableOrganizationAdminAccountRequest')

const GetMembersRequestSchema = z
  .object({
    GraphArn: GraphArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the behavior graph for which to request the member details.',
        }),
    ),
    AccountIds: AccountIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of Amazon Web Services account identifiers for the member account for which to return member details. You can request details for up to 50 member accounts at a time.</p> <p>You cannot use <code>GetMembers</code> to retrieve information about member accounts that were removed from the behavior graph.</p>',
        }),
    ),
  })
  .openapi({ required: ['GraphArn', 'AccountIds'], title: 'GetMembersRequest' })
  .openapi('GetMembersRequest')

const MemberResultsLimitSchema = z.int().min(1).max(200).openapi('MemberResultsLimit')

const ListDatasourcePackagesRequestSchema = z
  .object({
    GraphArn: GraphArnSchema.and(
      z.any().openapi({ description: 'The ARN of the behavior graph.' }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.',
        }),
    ).exactOptional(),
    MaxResults: MemberResultsLimitSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['GraphArn'], title: 'ListDatasourcePackagesRequest' })
  .openapi('ListDatasourcePackagesRequest')

const ListGraphsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.',
        }),
    ).exactOptional(),
    MaxResults: MemberResultsLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of graphs to return at a time. The total must be less than the overall limit on the number of results to return, which is currently 200.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListGraphsRequest', required: [] })
  .openapi('ListGraphsRequest')

const ListInvitationsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'For requests to retrieve the next page of results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.',
        }),
    ).exactOptional(),
    MaxResults: MemberResultsLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of behavior graph invitations to return in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListInvitationsRequest', required: [] })
  .openapi('ListInvitationsRequest')

const ListMembersRequestSchema = z
  .object({
    GraphArn: GraphArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the behavior graph for which to retrieve the list of member accounts.',
        }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'For requests to retrieve the next page of member account results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.',
        }),
    ).exactOptional(),
    MaxResults: MemberResultsLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of member accounts to include in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GraphArn'], title: 'ListMembersRequest' })
  .openapi('ListMembersRequest')

const ListOrganizationAdminAccountsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.',
        }),
    ).exactOptional(),
    MaxResults: MemberResultsLimitSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListOrganizationAdminAccountsRequest', required: [] })
  .openapi('ListOrganizationAdminAccountsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const RejectInvitationRequestSchema = z
  .object({
    GraphArn: GraphArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The ARN of the behavior graph to reject the invitation to.</p> <p>The member account's current member status in the behavior graph must be <code>INVITED</code>.</p>",
        }),
    ),
  })
  .openapi({ required: ['GraphArn'], title: 'RejectInvitationRequest' })
  .openapi('RejectInvitationRequest')

const StartMonitoringMemberRequestSchema = z
  .object({
    GraphArn: GraphArnSchema.and(
      z.any().openapi({ description: 'The ARN of the behavior graph.' }),
    ),
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The account ID of the member account to try to enable.</p> <p>The account must be an invited member account with a status of <code>ACCEPTED_BUT_DISABLED</code>. </p>',
        }),
    ),
  })
  .openapi({ required: ['GraphArn', 'AccountId'], title: 'StartMonitoringMemberRequest' })
  .openapi('StartMonitoringMemberRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to assign to the behavior graph. You can add up to 50 tags. For each tag, you provide the tag key and the tag value. Each tag key can contain up to 128 characters. Each tag value can contain up to 256 characters.',
        }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateDatasourcePackagesRequestSchema = z
  .object({
    GraphArn: GraphArnSchema.and(
      z.any().openapi({ description: 'The ARN of the behavior graph.' }),
    ),
    DatasourcePackages: DatasourcePackageListSchema.and(
      z.any().openapi({ description: 'The data source package start for the behavior graph.' }),
    ),
  })
  .openapi({
    required: ['GraphArn', 'DatasourcePackages'],
    title: 'UpdateDatasourcePackagesRequest',
  })
  .openapi('UpdateDatasourcePackagesRequest')

const UpdateOrganizationConfigurationRequestSchema = z
  .object({
    GraphArn: GraphArnSchema.and(
      z.any().openapi({ description: 'The ARN of the organization behavior graph.' }),
    ),
    AutoEnable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to automatically enable new organization accounts as member accounts in the organization behavior graph.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GraphArn'], title: 'UpdateOrganizationConfigurationRequest' })
  .openapi('UpdateOrganizationConfigurationRequest')

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

export const putInvitationRoute = createRoute({
  method: 'put',
  path: '/invitation',
  description:
    '<p>Accepts an invitation for the member account to contribute data to a behavior graph. This operation can only be called by an invited member account. </p> <p>The request provides the ARN of behavior graph.</p> <p>The member account status in the graph must be <code>INVITED</code>.</p>',
  operationId: 'AcceptInvitation',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              GraphArn: z
                .string()
                .regex(/^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$/)
                .openapi({
                  description:
                    '<p>The ARN of the behavior graph that the member account is accepting the invitation for.</p> <p>The member account status in the behavior graph must be <code>INVITED</code>.</p>',
                }),
            })
            .openapi({ required: ['GraphArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postGraphDatasourcesGetRoute = createRoute({
  method: 'post',
  path: '/graph/datasources/get',
  description: 'Gets data source package information for the behavior graph.',
  operationId: 'BatchGetGraphMemberDatasources',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              GraphArn: z
                .string()
                .regex(/^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$/)
                .openapi({ description: 'The ARN of the behavior graph.' }),
              AccountIds: z
                .array(AccountIdSchema)
                .min(1)
                .max(200)
                .openapi({
                  description:
                    'The list of Amazon Web Services accounts to get data source package information on.',
                }),
            })
            .openapi({ required: ['GraphArn', 'AccountIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetGraphMemberDatasourcesResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postMembershipDatasourcesGetRoute = createRoute({
  method: 'post',
  path: '/membership/datasources/get',
  description: 'Gets information on the data source package history for an account.',
  operationId: 'BatchGetMembershipDatasources',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              GraphArns: z
                .array(GraphArnSchema)
                .min(1)
                .max(50)
                .openapi({ description: 'The ARN of the behavior graph.' }),
            })
            .openapi({ required: ['GraphArns'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetMembershipDatasourcesResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postGraphRoute = createRoute({
  method: 'post',
  path: '/graph',
  description:
    '<p>Creates a new behavior graph for the calling account, and sets that account as the administrator account. This operation is called by the account that is enabling Detective.</p> <p>Before you try to enable Detective, make sure that your account has been enrolled in Amazon GuardDuty for at least 48 hours. If you do not meet this requirement, you cannot enable Detective. If you do meet the GuardDuty prerequisite, then when you make the request to enable Detective, it checks whether your data volume is within the Detective quota. If it exceeds the quota, then you cannot enable Detective. </p> <p>The operation also enables Detective for the calling account in the currently selected Region. It returns the ARN of the new behavior graph.</p> <p> <code>CreateGraph</code> triggers a process to create the corresponding data tables for the new behavior graph.</p> <p>An account can only be the administrator account for one behavior graph within a Region. If the same account calls <code>CreateGraph</code> with the same administrator account, it always returns the same behavior graph ARN. It does not create a new behavior graph.</p>',
  operationId: 'CreateGraph',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'The tags to assign to the new behavior graph. You can add up to 50 tags. For each tag, you provide the tag key and the tag value. Each tag key can contain up to 128 characters. Each tag value can contain up to 256 characters.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGraphResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postGraphMembersRoute = createRoute({
  method: 'post',
  path: '/graph/members',
  description:
    '<p> <code>CreateMembers</code> is used to send invitations to accounts. For the organization behavior graph, the Detective administrator account uses <code>CreateMembers</code> to enable organization accounts as member accounts.</p> <p>For invited accounts, <code>CreateMembers</code> sends a request to invite the specified Amazon Web Services accounts to be member accounts in the behavior graph. This operation can only be called by the administrator account for a behavior graph. </p> <p> <code>CreateMembers</code> verifies the accounts and then invites the verified accounts. The administrator can optionally specify to not send invitation emails to the member accounts. This would be used when the administrator manages their member accounts centrally.</p> <p>For organization accounts in the organization behavior graph, <code>CreateMembers</code> attempts to enable the accounts. The organization accounts do not receive invitations.</p> <p>The request provides the behavior graph ARN and the list of accounts to invite or to enable.</p> <p>The response separates the requested accounts into two lists:</p> <ul> <li> <p>The accounts that <code>CreateMembers</code> was able to process. For invited accounts, includes member accounts that are being verified, that have passed verification and are to be invited, and that have failed verification. For organization accounts in the organization behavior graph, includes accounts that can be enabled and that cannot be enabled.</p> </li> <li> <p>The accounts that <code>CreateMembers</code> was unable to process. This list includes accounts that were already invited to be member accounts in the behavior graph.</p> </li> </ul>',
  operationId: 'CreateMembers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              GraphArn: z
                .string()
                .regex(/^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$/)
                .openapi({ description: 'The ARN of the behavior graph.' }),
              Message: z
                .string()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'Customized message text to include in the invitation email message to the invited member accounts.',
                }),
              DisableEmailNotification: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>if set to <code>true</code>, then the invited accounts do not receive email notifications. By default, this is set to <code>false</code>, and the invited accounts receive email notifications.</p> <p>Organization accounts in the organization behavior graph do not receive email notifications.</p>',
                }),
              Accounts: z
                .array(AccountSchema)
                .min(1)
                .max(50)
                .openapi({
                  description:
                    'The list of Amazon Web Services accounts to invite or to enable. You can invite or enable up to 50 accounts at a time. For each invited account, the account list contains the account identifier and the Amazon Web Services account root user email address. For organization accounts in the organization behavior graph, the email address is not required.',
                }),
            })
            .openapi({ required: ['GraphArn', 'Accounts'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMembersResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postGraphRemovalRoute = createRoute({
  method: 'post',
  path: '/graph/removal',
  description:
    "<p>Disables the specified behavior graph and queues it to be deleted. This operation removes the behavior graph from each member account's list of behavior graphs.</p> <p> <code>DeleteGraph</code> can only be called by the administrator account for a behavior graph.</p>",
  operationId: 'DeleteGraph',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              GraphArn: z
                .string()
                .regex(/^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$/)
                .openapi({ description: 'The ARN of the behavior graph to disable.' }),
            })
            .openapi({ required: ['GraphArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postGraphMembersRemovalRoute = createRoute({
  method: 'post',
  path: '/graph/members/removal',
  description:
    '<p>Removes the specified member accounts from the behavior graph. The removed accounts no longer contribute data to the behavior graph. This operation can only be called by the administrator account for the behavior graph.</p> <p>For invited accounts, the removed accounts are deleted from the list of accounts in the behavior graph. To restore the account, the administrator account must send another invitation.</p> <p>For organization accounts in the organization behavior graph, the Detective administrator account can always enable the organization account again. Organization accounts that are not enabled as member accounts are not included in the <code>ListMembers</code> results for the organization behavior graph.</p> <p>An administrator account cannot use <code>DeleteMembers</code> to remove their own account from the behavior graph. To disable a behavior graph, the administrator account uses the <code>DeleteGraph</code> API method.</p>',
  operationId: 'DeleteMembers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              GraphArn: z
                .string()
                .regex(/^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$/)
                .openapi({ description: 'The ARN of the behavior graph to remove members from.' }),
              AccountIds: z
                .array(AccountIdSchema)
                .min(1)
                .max(50)
                .openapi({
                  description:
                    'The list of Amazon Web Services account identifiers for the member accounts to remove from the behavior graph. You can remove up to 50 member accounts at a time.',
                }),
            })
            .openapi({ required: ['GraphArn', 'AccountIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteMembersResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postOrgsDescribeOrganizationConfigurationRoute = createRoute({
  method: 'post',
  path: '/orgs/describeOrganizationConfiguration',
  description:
    '<p>Returns information about the configuration for the organization behavior graph. Currently indicates whether to automatically enable new organization accounts as member accounts.</p> <p>Can only be called by the Detective administrator account for the organization. </p>',
  operationId: 'DescribeOrganizationConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              GraphArn: z
                .string()
                .regex(/^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$/)
                .openapi({ description: 'The ARN of the organization behavior graph.' }),
            })
            .openapi({ required: ['GraphArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeOrganizationConfigurationResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postOrgsDisableAdminAccountRoute = createRoute({
  method: 'post',
  path: '/orgs/disableAdminAccount',
  description:
    '<p>Removes the Detective administrator account in the current Region. Deletes the organization behavior graph.</p> <p>Can only be called by the organization management account.</p> <p>Removing the Detective administrator account does not affect the delegated administrator account for Detective in Organizations.</p> <p>To remove the delegated administrator account in Organizations, use the Organizations API. Removing the delegated administrator account also removes the Detective administrator account in all Regions, except for Regions where the Detective administrator account is the organization management account.</p>',
  operationId: 'DisableOrganizationAdminAccount',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postMembershipRemovalRoute = createRoute({
  method: 'post',
  path: '/membership/removal',
  description:
    '<p>Removes the member account from the specified behavior graph. This operation can only be called by an invited member account that has the <code>ENABLED</code> status.</p> <p> <code>DisassociateMembership</code> cannot be called by an organization account in the organization behavior graph. For the organization behavior graph, the Detective administrator account determines which organization accounts to enable or disable as member accounts.</p>',
  operationId: 'DisassociateMembership',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              GraphArn: z
                .string()
                .regex(/^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$/)
                .openapi({
                  description:
                    "<p>The ARN of the behavior graph to remove the member account from.</p> <p>The member account's member status in the behavior graph must be <code>ENABLED</code>.</p>",
                }),
            })
            .openapi({ required: ['GraphArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postOrgsEnableAdminAccountRoute = createRoute({
  method: 'post',
  path: '/orgs/enableAdminAccount',
  description:
    '<p>Designates the Detective administrator account for the organization in the current Region.</p> <p>If the account does not have Detective enabled, then enables Detective for that account and creates a new behavior graph.</p> <p>Can only be called by the organization management account.</p> <p>If the organization has a delegated administrator account in Organizations, then the Detective administrator account must be either the delegated administrator account or the organization management account.</p> <p>If the organization does not have a delegated administrator account in Organizations, then you can choose any account in the organization. If you choose an account other than the organization management account, Detective calls Organizations to make that account the delegated administrator account for Detective. The organization management account cannot be the delegated administrator account.</p>',
  operationId: 'EnableOrganizationAdminAccount',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AccountId: z
                .string()
                .regex(/^[0-9]+$/)
                .length(12)
                .openapi({
                  description:
                    'The Amazon Web Services account identifier of the account to designate as the Detective administrator account for the organization.',
                }),
            })
            .openapi({ required: ['AccountId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postGraphMembersGetRoute = createRoute({
  method: 'post',
  path: '/graph/members/get',
  description: 'Returns the membership details for specified member accounts for a behavior graph.',
  operationId: 'GetMembers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              GraphArn: z
                .string()
                .regex(/^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$/)
                .openapi({
                  description:
                    'The ARN of the behavior graph for which to request the member details.',
                }),
              AccountIds: z
                .array(AccountIdSchema)
                .min(1)
                .max(50)
                .openapi({
                  description:
                    '<p>The list of Amazon Web Services account identifiers for the member account for which to return member details. You can request details for up to 50 member accounts at a time.</p> <p>You cannot use <code>GetMembers</code> to retrieve information about member accounts that were removed from the behavior graph.</p>',
                }),
            })
            .openapi({ required: ['GraphArn', 'AccountIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMembersResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postGraphDatasourcesListRoute = createRoute({
  method: 'post',
  path: '/graph/datasources/list',
  description: 'Lists data source packages in the behavior graph.',
  operationId: 'ListDatasourcePackages',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
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
        'application/json': {
          schema: z
            .object({
              GraphArn: z
                .string()
                .regex(/^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$/)
                .openapi({ description: 'The ARN of the behavior graph.' }),
              NextToken: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(200)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to return.' }),
            })
            .openapi({ required: ['GraphArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDatasourcePackagesResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postGraphsListRoute = createRoute({
  method: 'post',
  path: '/graphs/list',
  description:
    '<p>Returns the list of behavior graphs that the calling account is an administrator account of. This operation can only be called by an administrator account.</p> <p>Because an account can currently only be the administrator of one behavior graph within a Region, the results always contain a single behavior graph.</p>',
  operationId: 'ListGraphs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
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
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of graphs to return at a time. The total must be less than the overall limit on the number of results to return, which is currently 200.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGraphsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postInvitationsListRoute = createRoute({
  method: 'post',
  path: '/invitations/list',
  description:
    '<p>Retrieves the list of open and accepted behavior graph invitations for the member account. This operation can only be called by an invited member account.</p> <p>Open invitations are invitations that the member account has not responded to.</p> <p>The results do not include behavior graphs for which the member account declined the invitation. The results also do not include behavior graphs that the member account resigned from or was removed from.</p>',
  operationId: 'ListInvitations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
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
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'For requests to retrieve the next page of results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of behavior graph invitations to return in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListInvitationsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postGraphMembersListRoute = createRoute({
  method: 'post',
  path: '/graph/members/list',
  description:
    '<p>Retrieves the list of member accounts for a behavior graph.</p> <p>For invited accounts, the results do not include member accounts that were removed from the behavior graph.</p> <p>For the organization behavior graph, the results do not include organization accounts that the Detective administrator account has not enabled as member accounts.</p>',
  operationId: 'ListMembers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
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
        'application/json': {
          schema: z
            .object({
              GraphArn: z
                .string()
                .regex(/^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$/)
                .openapi({
                  description:
                    'The ARN of the behavior graph for which to retrieve the list of member accounts.',
                }),
              NextToken: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'For requests to retrieve the next page of member account results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of member accounts to include in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.',
                }),
            })
            .openapi({ required: ['GraphArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMembersResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postOrgsAdminAccountslistRoute = createRoute({
  method: 'post',
  path: '/orgs/adminAccountslist',
  description:
    'Returns information about the Detective administrator account for an organization. Can only be called by the organization management account.',
  operationId: 'ListOrganizationAdminAccounts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
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
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(200)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to return.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListOrganizationAdminAccountsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{ResourceArn}',
  description: 'Returns the tag values that are assigned to a behavior graph.',
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
    }),
    params: z.object({
      ResourceArn: z
        .string()
        .regex(/^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$/)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the behavior graph for which to retrieve the tag values.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[-\\w]{0,10}?:detective:[-\\w]{2,20}?:\\d{12}?:graph:[abcdef\\d]{32}?$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{ResourceArn}',
  description: 'Applies tag values to a behavior graph.',
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
    }),
    params: z.object({
      ResourceArn: z
        .string()
        .regex(/^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$/)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the behavior graph to assign the tags to.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[-\\w]{0,10}?:detective:[-\\w]{2,20}?:\\d{12}?:graph:[abcdef\\d]{32}?$',
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({
                  description:
                    'The tags to assign to the behavior graph. You can add up to 50 tags. For each tag, you provide the tag key and the tag value. Each tag key can contain up to 128 characters. Each tag value can contain up to 256 characters.',
                }),
            })
            .openapi({ required: ['Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postInvitationRemovalRoute = createRoute({
  method: 'post',
  path: '/invitation/removal',
  description:
    '<p>Rejects an invitation to contribute the account data to a behavior graph. This operation must be called by an invited member account that has the <code>INVITED</code> status.</p> <p> <code>RejectInvitation</code> cannot be called by an organization account in the organization behavior graph. In the organization behavior graph, organization accounts do not receive an invitation.</p>',
  operationId: 'RejectInvitation',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              GraphArn: z
                .string()
                .regex(/^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$/)
                .openapi({
                  description:
                    "<p>The ARN of the behavior graph to reject the invitation to.</p> <p>The member account's current member status in the behavior graph must be <code>INVITED</code>.</p>",
                }),
            })
            .openapi({ required: ['GraphArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postGraphMemberMonitoringstateRoute = createRoute({
  method: 'post',
  path: '/graph/member/monitoringstate',
  description:
    '<p>Sends a request to enable data ingest for a member account that has a status of <code>ACCEPTED_BUT_DISABLED</code>.</p> <p>For valid member accounts, the status is updated as follows.</p> <ul> <li> <p>If Detective enabled the member account, then the new status is <code>ENABLED</code>.</p> </li> <li> <p>If Detective cannot enable the member account, the status remains <code>ACCEPTED_BUT_DISABLED</code>. </p> </li> </ul>',
  operationId: 'StartMonitoringMember',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              GraphArn: z
                .string()
                .regex(/^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$/)
                .openapi({ description: 'The ARN of the behavior graph.' }),
              AccountId: z
                .string()
                .regex(/^[0-9]+$/)
                .length(12)
                .openapi({
                  description:
                    '<p>The account ID of the member account to try to enable.</p> <p>The account must be an invited member account with a status of <code>ACCEPTED_BUT_DISABLED</code>. </p>',
                }),
            })
            .openapi({ required: ['GraphArn', 'AccountId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{ResourceArn}#tagKeys',
  description: 'Removes tags from a behavior graph.',
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
    }),
    params: z.object({
      ResourceArn: z
        .string()
        .regex(/^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$/)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the behavior graph to remove the tags from.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[-\\w]{0,10}?:detective:[-\\w]{2,20}?:\\d{12}?:graph:[abcdef\\d]{32}?$',
            },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(1).max(50),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description:
              'The tag keys of the tags to remove from the behavior graph. You can remove up to 50 tags at a time.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 1,
              maxItems: 50,
            },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postGraphDatasourcesUpdateRoute = createRoute({
  method: 'post',
  path: '/graph/datasources/update',
  description: 'Starts a data source packages for the behavior graph.',
  operationId: 'UpdateDatasourcePackages',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              GraphArn: z
                .string()
                .regex(/^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$/)
                .openapi({ description: 'The ARN of the behavior graph.' }),
              DatasourcePackages: z
                .array(DatasourcePackageSchema)
                .min(1)
                .max(25)
                .openapi({ description: 'The data source package start for the behavior graph.' }),
            })
            .openapi({ required: ['GraphArn', 'DatasourcePackages'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postOrgsUpdateOrganizationConfigurationRoute = createRoute({
  method: 'post',
  path: '/orgs/updateOrganizationConfiguration',
  description:
    'Updates the configuration for the Organizations integration in the current Region. Can only be called by the Detective administrator account for the organization.',
  operationId: 'UpdateOrganizationConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              GraphArn: z
                .string()
                .regex(/^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$/)
                .openapi({ description: 'The ARN of the organization behavior graph.' }),
              AutoEnable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether to automatically enable new organization accounts as member accounts in the organization behavior graph.',
                }),
            })
            .openapi({ required: ['GraphArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})
