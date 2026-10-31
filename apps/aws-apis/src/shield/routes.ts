import { createRoute, z } from '@hono/zod-openapi'

const AssociateDRTLogBucketResponseSchema = z.object({}).openapi('AssociateDRTLogBucketResponse')

const LogBucketSchema = z
  .string()
  .regex(
    /^([a-z]|(\d(?!\d{0,2}\.\d{1,3}\.\d{1,3}\.\d{1,3})))([a-z\d]|(\.(?!(\.|-)))|(-(?!\.))){1,61}[a-z\d]$/,
  )
  .min(3)
  .max(63)
  .openapi('LogBucket')

const AssociateDRTLogBucketRequestSchema = z
  .object({
    LogBucket: LogBucketSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon S3 bucket that contains the logs that you want to share.',
        }),
    ),
  })
  .openapi({ required: ['LogBucket'], title: 'AssociateDRTLogBucketRequest' })
  .openapi('AssociateDRTLogBucketRequest')

const InternalErrorExceptionSchema = z.any().openapi('InternalErrorException')

const InvalidOperationExceptionSchema = z.any().openapi('InvalidOperationException')

const NoAssociatedRoleExceptionSchema = z.any().openapi('NoAssociatedRoleException')

const LimitsExceededExceptionSchema = z.any().openapi('LimitsExceededException')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const AccessDeniedForDependencyExceptionSchema = z
  .any()
  .openapi('AccessDeniedForDependencyException')

const OptimisticLockExceptionSchema = z.any().openapi('OptimisticLockException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const AssociateDRTRoleResponseSchema = z.object({}).openapi('AssociateDRTRoleResponse')

const RoleArnSchema = z
  .string()
  .regex(/^arn:aws:iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+/)
  .min(1)
  .max(2048)
  .openapi('RoleArn')

const AssociateDRTRoleRequestSchema = z
  .object({
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the role the SRT will use to access your Amazon Web Services account.</p> <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a> managed policy to this role. For more information see <a href=" https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Attaching and Detaching IAM Policies</a>.</p>',
        }),
    ),
  })
  .openapi({ required: ['RoleArn'], title: 'AssociateDRTRoleRequest' })
  .openapi('AssociateDRTRoleRequest')

const AssociateHealthCheckResponseSchema = z.object({}).openapi('AssociateHealthCheckResponse')

const ProtectionIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9\\-]*/)
  .length(36)
  .openapi('ProtectionId')

const HealthCheckArnSchema = z
  .string()
  .regex(/^arn:aws:route53:::healthcheck\/\S{36}$/)
  .min(1)
  .max(2048)
  .openapi('HealthCheckArn')

const AssociateHealthCheckRequestSchema = z
  .object({
    ProtectionId: ProtectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier (ID) for the <a>Protection</a> object to add the health check association to. ',
        }),
    ),
    HealthCheckArn: HealthCheckArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the health check to associate with the protection.',
        }),
    ),
  })
  .openapi({ required: ['ProtectionId', 'HealthCheckArn'], title: 'AssociateHealthCheckRequest' })
  .openapi('AssociateHealthCheckRequest')

const InvalidResourceExceptionSchema = z.any().openapi('InvalidResourceException')

const AssociateProactiveEngagementDetailsResponseSchema = z
  .object({})
  .openapi('AssociateProactiveEngagementDetailsResponse')

const EmailAddressSchema = z
  .string()
  .regex(/^\S+@\S+\.\S+$/)
  .min(1)
  .max(150)
  .openapi('EmailAddress')

const PhoneNumberSchema = z
  .string()
  .regex(/^\+[1-9]\d{1,14}$/)
  .min(1)
  .max(16)
  .openapi('PhoneNumber')

const ContactNotesSchema = z
  .string()
  .regex(/^[\w\s\.\-,:\/()+@]*$/)
  .min(1)
  .max(1024)
  .openapi('ContactNotes')

const EmergencyContactSchema = z
  .object({
    EmailAddress: EmailAddressSchema.and(
      z.any().openapi({ description: 'The email address for the contact.' }),
    ),
    PhoneNumber: PhoneNumberSchema.and(
      z.any().openapi({ description: 'The phone number for the contact.' }),
    ).exactOptional(),
    ContactNotes: ContactNotesSchema.and(
      z.any().openapi({ description: 'Additional notes regarding the contact. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EmailAddress'],
    description:
      'Contact information that the SRT can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.',
  })
  .openapi('EmergencyContact')

const EmergencyContactListSchema = z
  .array(EmergencyContactSchema)
  .min(0)
  .max(10)
  .openapi('EmergencyContactList')

const AssociateProactiveEngagementDetailsRequestSchema = z
  .object({
    EmergencyContactList: EmergencyContactListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support. </p> <p>To enable proactive engagement, the contact list must include at least one phone number.</p> <note> <p>The contacts that you provide here replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it here. </p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['EmergencyContactList'],
    title: 'AssociateProactiveEngagementDetailsRequest',
  })
  .openapi('AssociateProactiveEngagementDetailsRequest')

const CreateProtectionResponseSchema = z
  .object({
    ProtectionId: ProtectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier (ID) for the <a>Protection</a> object that is created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateProtectionResponse')

const ProtectionNameSchema = z
  .string()
  .regex(/[ a-zA-Z0-9_\\.\\-]*/)
  .min(1)
  .max(128)
  .openapi('ProtectionName')

const ResourceArnSchema = z
  .string()
  .regex(/^arn:aws.*/)
  .min(1)
  .max(2048)
  .openapi('ResourceArn')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.',
        }),
    ).exactOptional(),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A tag associated with an Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.',
    required: [],
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const CreateProtectionRequestSchema = z
  .object({
    Name: ProtectionNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Friendly name for the <code>Protection</code> you are creating.',
        }),
    ),
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN (Amazon Resource Name) of the resource to be protected.</p> <p>The ARN should be in one of the following formats:</p> <ul> <li> <p>For an Application Load Balancer: <code>arn:aws:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/app/<i>load-balancer-name</i>/<i>load-balancer-id</i> </code> </p> </li> <li> <p>For an Elastic Load Balancer (Classic Load Balancer): <code>arn:aws:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/<i>load-balancer-name</i> </code> </p> </li> <li> <p>For an Amazon CloudFront distribution: <code>arn:aws:cloudfront::<i>account-id</i>:distribution/<i>distribution-id</i> </code> </p> </li> <li> <p>For an Global Accelerator standard accelerator: <code>arn:aws:globalaccelerator::<i>account-id</i>:accelerator/<i>accelerator-id</i> </code> </p> </li> <li> <p>For Amazon Route 53: <code>arn:aws:route53:::hostedzone/<i>hosted-zone-id</i> </code> </p> </li> <li> <p>For an Elastic IP address: <code>arn:aws:ec2:<i>region</i>:<i>account-id</i>:eip-allocation/<i>allocation-id</i> </code> </p> </li> </ul>',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more tag key-value pairs for the <a>Protection</a> object that is created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'ResourceArn'], title: 'CreateProtectionRequest' })
  .openapi('CreateProtectionRequest')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const CreateProtectionGroupResponseSchema = z.object({}).openapi('CreateProtectionGroupResponse')

const ProtectionGroupIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9\\-]*/)
  .min(1)
  .max(36)
  .openapi('ProtectionGroupId')

const ProtectionGroupAggregationSchema = z
  .enum(['SUM', 'MEAN', 'MAX'])
  .openapi('ProtectionGroupAggregation')

const ProtectionGroupPatternSchema = z
  .enum(['ALL', 'ARBITRARY', 'BY_RESOURCE_TYPE'])
  .openapi('ProtectionGroupPattern')

const ProtectedResourceTypeSchema = z
  .enum([
    'CLOUDFRONT_DISTRIBUTION',
    'ROUTE_53_HOSTED_ZONE',
    'ELASTIC_IP_ALLOCATION',
    'CLASSIC_LOAD_BALANCER',
    'APPLICATION_LOAD_BALANCER',
    'GLOBAL_ACCELERATOR',
  ])
  .openapi('ProtectedResourceType')

const ProtectionGroupMembersSchema = z
  .array(ResourceArnSchema)
  .min(0)
  .max(10000)
  .openapi('ProtectionGroupMembers')

const CreateProtectionGroupRequestSchema = z
  .object({
    ProtectionGroupId: ProtectionGroupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. ',
        }),
    ),
    Aggregation: ProtectionGroupAggregationSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Defines how Shield combines resource data for the group in order to detect, mitigate, and report events.</p> <ul> <li> <p>Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.</p> </li> <li> <p>Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.</p> </li> <li> <p>Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include Amazon CloudFront and origin resources for CloudFront distributions.</p> </li> </ul>",
        }),
    ),
    Pattern: ProtectionGroupPatternSchema.and(
      z
        .any()
        .openapi({
          description:
            'The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource Amazon Resource Names (ARNs), or include all resources of a specified resource type. ',
        }),
    ),
    ResourceType: ProtectedResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource type to include in the protection group. All protected resources of this type are included in the protection group. Newly protected resources of this type are automatically added to the group. You must set this when you set <code>Pattern</code> to <code>BY_RESOURCE_TYPE</code> and you must not set it for any other <code>Pattern</code> setting. ',
        }),
    ).exactOptional(),
    Members: ProtectionGroupMembersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set <code>Pattern</code> to <code>ARBITRARY</code> and you must not set it for any other <code>Pattern</code> setting. ',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'One or more tag key-value pairs for the protection group.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProtectionGroupId', 'Aggregation', 'Pattern'],
    title: 'CreateProtectionGroupRequest',
  })
  .openapi('CreateProtectionGroupRequest')

const CreateSubscriptionResponseSchema = z.object({}).openapi('CreateSubscriptionResponse')

const CreateSubscriptionRequestSchema = z
  .object({})
  .openapi({ title: 'CreateSubscriptionRequest' })
  .openapi('CreateSubscriptionRequest')

const DeleteProtectionResponseSchema = z.object({}).openapi('DeleteProtectionResponse')

const DeleteProtectionRequestSchema = z
  .object({
    ProtectionId: ProtectionIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier (ID) for the <a>Protection</a> object to be deleted.',
        }),
    ),
  })
  .openapi({ required: ['ProtectionId'], title: 'DeleteProtectionRequest' })
  .openapi('DeleteProtectionRequest')

const DeleteProtectionGroupResponseSchema = z.object({}).openapi('DeleteProtectionGroupResponse')

const DeleteProtectionGroupRequestSchema = z
  .object({
    ProtectionGroupId: ProtectionGroupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. ',
        }),
    ),
  })
  .openapi({ required: ['ProtectionGroupId'], title: 'DeleteProtectionGroupRequest' })
  .openapi('DeleteProtectionGroupRequest')

const DeleteSubscriptionResponseSchema = z
  .object({})
  .openapi({ deprecated: true })
  .openapi('DeleteSubscriptionResponse')

const DeleteSubscriptionRequestSchema = z
  .object({})
  .openapi({ deprecated: true, title: 'DeleteSubscriptionRequest' })
  .openapi('DeleteSubscriptionRequest')

const LockedSubscriptionExceptionSchema = z.any().openapi('LockedSubscriptionException')

const AttackIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9\\-]*/)
  .min(1)
  .max(128)
  .openapi('AttackId')

const SubResourceTypeSchema = z.enum(['IP', 'URL']).openapi('SubResourceType')

const StringSchema = z.string().openapi('String')

const DoubleSchema = z.float64().openapi('Double')

const IntegerSchema = z.int().openapi('Integer')

const SummarizedCounterSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'The counter name.' })).exactOptional(),
    Max: DoubleSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum value of the counter for a specified time period.' }),
    ).exactOptional(),
    Average: DoubleSchema.and(
      z
        .any()
        .openapi({ description: 'The average value of the counter for a specified time period.' }),
    ).exactOptional(),
    Sum: DoubleSchema.and(
      z.any().openapi({ description: 'The total of counter values for a specified time period.' }),
    ).exactOptional(),
    N: IntegerSchema.and(
      z.any().openapi({ description: 'The number of counters for a specified time period.' }),
    ).exactOptional(),
    Unit: StringSchema.and(
      z.any().openapi({ description: 'The unit of the counters.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The counter that describes a DDoS attack.', required: [] })
  .openapi('SummarizedCounter')

const SummarizedCounterListSchema = z
  .array(SummarizedCounterSchema)
  .openapi('SummarizedCounterList')

const SummarizedAttackVectorSchema = z
  .object({
    VectorType: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The attack type, for example, SNMP reflection or SYN flood.' }),
    ),
    VectorCounters: SummarizedCounterListSchema.and(
      z
        .any()
        .openapi({ description: 'The list of counters that describe the details of the attack.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['VectorType'], description: 'A summary of information about the attack.' })
  .openapi('SummarizedAttackVector')

const SummarizedAttackVectorListSchema = z
  .array(SummarizedAttackVectorSchema)
  .openapi('SummarizedAttackVectorList')

const SubResourceSummarySchema = z
  .object({
    Type: SubResourceTypeSchema.and(
      z.any().openapi({ description: 'The <code>SubResource</code> type.' }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier (ID) of the <code>SubResource</code>.' }),
    ).exactOptional(),
    AttackVectors: SummarizedAttackVectorListSchema.and(
      z.any().openapi({ description: 'The list of attack types and associated counters.' }),
    ).exactOptional(),
    Counters: SummarizedCounterListSchema.and(
      z.any().openapi({ description: 'The counters that describe the details of the attack.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The attack information for the specified SubResource.', required: [] })
  .openapi('SubResourceSummary')

const SubResourceSummaryListSchema = z
  .array(SubResourceSummarySchema)
  .openapi('SubResourceSummaryList')

const AttackTimestampSchema = z.iso.datetime({ offset: true }).openapi('AttackTimestamp')

const AttackLayerSchema = z.enum(['NETWORK', 'APPLICATION']).openapi('AttackLayer')

const AttackPropertyIdentifierSchema = z
  .enum([
    'DESTINATION_URL',
    'REFERRER',
    'SOURCE_ASN',
    'SOURCE_COUNTRY',
    'SOURCE_IP_ADDRESS',
    'SOURCE_USER_AGENT',
    'WORDPRESS_PINGBACK_REFLECTOR',
    'WORDPRESS_PINGBACK_SOURCE',
  ])
  .openapi('AttackPropertyIdentifier')

const LongSchema = z.int().openapi('Long')

const ContributorSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the contributor. The type of name that you'll find here depends on the <code>AttackPropertyIdentifier</code> setting in the <code>AttackProperty</code> where this contributor is defined. For example, if the <code>AttackPropertyIdentifier</code> is <code>SOURCE_COUNTRY</code>, the <code>Name</code> could be <code>United States</code>.",
        }),
    ).exactOptional(),
    Value: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The contribution of this contributor expressed in <a>Protection</a> units. For example <code>10,000</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A contributor to the attack and their contribution. ', required: [] })
  .openapi('Contributor')

const TopContributorsSchema = z.array(ContributorSchema).openapi('TopContributors')

const UnitSchema = z.enum(['BITS', 'BYTES', 'PACKETS', 'REQUESTS']).openapi('Unit')

const AttackPropertySchema = z
  .object({
    AttackLayer: AttackLayerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of Shield event that was observed. <code>NETWORK</code> indicates layer 3 and layer 4 events and <code>APPLICATION</code> indicates layer 7 events.</p> <p>For infrastructure layer events (L3 and L4 events), you can view metrics for top contributors in Amazon CloudWatch metrics. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#set-ddos-alarms">Shield metrics and alarms</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ).exactOptional(),
    AttackPropertyIdentifier: AttackPropertyIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the Shield event property information that is provided. The <code>WORDPRESS_PINGBACK_REFLECTOR</code> and <code>WORDPRESS_PINGBACK_SOURCE</code> values are valid only for WordPress reflective pingback events.',
        }),
    ).exactOptional(),
    TopContributors: TopContributorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contributor objects for the top five contributors to a Shield event. A contributor is a source of traffic that Shield Advanced identifies as responsible for some or all of an event.',
        }),
    ).exactOptional(),
    Unit: UnitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unit used for the <code>Contributor</code> <code>Value</code> property. ',
        }),
    ).exactOptional(),
    Total: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The total contributions made to this Shield event by all contributors.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Details of a Shield event. This is provided as part of an <a>AttackDetail</a>.',
    required: [],
  })
  .openapi('AttackProperty')

const AttackPropertiesSchema = z.array(AttackPropertySchema).openapi('AttackProperties')

const MitigationSchema = z
  .object({
    MitigationName: StringSchema.and(
      z.any().openapi({ description: 'The name of the mitigation taken for this attack.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The mitigation applied to a DDoS attack.', required: [] })
  .openapi('Mitigation')

const MitigationListSchema = z.array(MitigationSchema).openapi('MitigationList')

const AttackDetailSchema = z
  .object({
    AttackId: AttackIdSchema.and(
      z.any().openapi({ description: 'The unique identifier (ID) of the attack.' }),
    ).exactOptional(),
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN (Amazon Resource Name) of the resource that was attacked.',
        }),
    ).exactOptional(),
    SubResources: SubResourceSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If applicable, additional detail about the resource being attacked, for example, IP address or URL.',
        }),
    ).exactOptional(),
    StartTime: AttackTimestampSchema.and(
      z.any().openapi({ description: 'The time the attack started, in Unix time in seconds. ' }),
    ).exactOptional(),
    EndTime: AttackTimestampSchema.and(
      z.any().openapi({ description: 'The time the attack ended, in Unix time in seconds. ' }),
    ).exactOptional(),
    AttackCounters: SummarizedCounterListSchema.and(
      z
        .any()
        .openapi({
          description: 'List of counters that describe the attack for the specified time period.',
        }),
    ).exactOptional(),
    AttackProperties: AttackPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The array of objects that provide details of the Shield event. </p> <p>For infrastructure layer events (L3 and L4 events), you can view metrics for top contributors in Amazon CloudWatch metrics. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#set-ddos-alarms">Shield metrics and alarms</a> in the <i>WAF Developer Guide</i>. </p>',
        }),
    ).exactOptional(),
    Mitigations: MitigationListSchema.and(
      z.any().openapi({ description: 'List of mitigation actions taken for the attack.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details of a DDoS attack.', required: [] })
  .openapi('AttackDetail')

const DescribeAttackResponseSchema = z
  .object({
    Attack: AttackDetailSchema.and(
      z.any().openapi({ description: 'The attack that you requested. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAttackResponse')

const DescribeAttackRequestSchema = z
  .object({
    AttackId: AttackIdSchema.and(
      z.any().openapi({ description: 'The unique identifier (ID) for the attack.' }),
    ),
  })
  .openapi({ required: ['AttackId'], title: 'DescribeAttackRequest' })
  .openapi('DescribeAttackRequest')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const TimeRangeSchema = z
  .object({
    FromInclusive: TimestampSchema.and(
      z.any().openapi({ description: 'The start time, in Unix time in seconds. ' }),
    ).exactOptional(),
    ToExclusive: TimestampSchema.and(
      z.any().openapi({ description: 'The end time, in Unix time in seconds. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The time range. ', required: [] })
  .openapi('TimeRange')

const AttackVolumeStatisticsSchema = z
  .object({
    Max: DoubleSchema.and(
      z.any().openapi({ description: 'The maximum attack volume observed for the given unit.' }),
    ),
  })
  .openapi({
    required: ['Max'],
    description: 'Statistics objects for the various data types in <a>AttackVolume</a>. ',
  })
  .openapi('AttackVolumeStatistics')

const AttackVolumeSchema = z
  .object({
    BitsPerSecond: AttackVolumeStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A statistics object that uses bits per second as the unit. This is included for network level attacks. ',
        }),
    ).exactOptional(),
    PacketsPerSecond: AttackVolumeStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A statistics object that uses packets per second as the unit. This is included for network level attacks. ',
        }),
    ).exactOptional(),
    RequestsPerSecond: AttackVolumeStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A statistics object that uses requests per second as the unit. This is included for application level attacks, and is only available for accounts that are subscribed to Shield Advanced.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the volume of attacks during the time period, included in an <a>AttackStatisticsDataItem</a>. If the accompanying <code>AttackCount</code> in the statistics object is zero, this setting might be empty.',
    required: [],
  })
  .openapi('AttackVolume')

const AttackStatisticsDataItemSchema = z
  .object({
    AttackVolume: AttackVolumeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the volume of attacks during the time period. If the accompanying <code>AttackCount</code> is zero, this setting might be empty.',
        }),
    ).exactOptional(),
    AttackCount: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of attacks detected during the time period. This is always present, but might be zero. ',
        }),
    ),
  })
  .openapi({
    required: ['AttackCount'],
    description:
      'A single attack statistics data record. This is returned by <a>DescribeAttackStatistics</a> along with a time range indicating the time period that the attack statistics apply to. ',
  })
  .openapi('AttackStatisticsDataItem')

const AttackStatisticsDataListSchema = z
  .array(AttackStatisticsDataItemSchema)
  .openapi('AttackStatisticsDataList')

const DescribeAttackStatisticsResponseSchema = z
  .object({
    TimeRange: TimeRangeSchema.and(
      z.any().openapi({ description: 'The time range of the attack.' }),
    ),
    DataItems: AttackStatisticsDataListSchema.and(
      z
        .any()
        .openapi({
          description: 'The data that describes the attacks detected during the time period.',
        }),
    ),
  })
  .openapi({ required: ['TimeRange', 'DataItems'] })
  .openapi('DescribeAttackStatisticsResponse')

const DescribeAttackStatisticsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeAttackStatisticsRequest' })
  .openapi('DescribeAttackStatisticsRequest')

const LogBucketListSchema = z.array(LogBucketSchema).min(0).max(10).openapi('LogBucketList')

const DescribeDRTAccessResponseSchema = z
  .object({
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the role the SRT used to access your Amazon Web Services account.',
        }),
    ).exactOptional(),
    LogBucketList: LogBucketListSchema.and(
      z.any().openapi({ description: 'The list of Amazon S3 buckets accessed by the SRT.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDRTAccessResponse')

const DescribeDRTAccessRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeDRTAccessRequest' })
  .openapi('DescribeDRTAccessRequest')

const DescribeEmergencyContactSettingsResponseSchema = z
  .object({
    EmergencyContactList: EmergencyContactListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEmergencyContactSettingsResponse')

const DescribeEmergencyContactSettingsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeEmergencyContactSettingsRequest' })
  .openapi('DescribeEmergencyContactSettingsRequest')

const HealthCheckIdSchema = z.string().openapi('HealthCheckId')

const HealthCheckIdsSchema = z.array(HealthCheckIdSchema).openapi('HealthCheckIds')

const ApplicationLayerAutomaticResponseStatusSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi('ApplicationLayerAutomaticResponseStatus')

const BlockActionSchema = z
  .object({})
  .openapi({
    description:
      '<p>Specifies that Shield Advanced should configure its WAF rules with the WAF <code>Block</code> action. </p> <p>This is only used in the context of the <code>ResponseAction</code> setting. </p> <p>JSON specification: <code>"Block": {}</code> </p>',
  })
  .openapi('BlockAction')

const CountActionSchema = z
  .object({})
  .openapi({
    description:
      '<p>Specifies that Shield Advanced should configure its WAF rules with the WAF <code>Count</code> action. </p> <p>This is only used in the context of the <code>ResponseAction</code> setting. </p> <p>JSON specification: <code>"Count": {}</code> </p>',
  })
  .openapi('CountAction')

const ResponseActionSchema = z
  .object({
    Block: BlockActionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies that Shield Advanced should configure its WAF rules with the WAF <code>Block</code> action. </p> <p>You must specify exactly one action, either <code>Block</code> or <code>Count</code>.</p>',
        }),
    ).exactOptional(),
    Count: CountActionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies that Shield Advanced should configure its WAF rules with the WAF <code>Count</code> action. </p> <p>You must specify exactly one action, either <code>Block</code> or <code>Count</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource. ',
    required: [],
  })
  .openapi('ResponseAction')

const ApplicationLayerAutomaticResponseConfigurationSchema = z
  .object({
    Status: ApplicationLayerAutomaticResponseStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether automatic application layer DDoS mitigation is enabled for the protection. ',
        }),
    ),
    Action: ResponseActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource. ',
        }),
    ),
  })
  .openapi({
    required: ['Status', 'Action'],
    description:
      'The automatic application layer DDoS mitigation settings for a <a>Protection</a>. This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks. ',
  })
  .openapi('ApplicationLayerAutomaticResponseConfiguration')

const ProtectionSchema = z
  .object({
    Id: ProtectionIdSchema.and(
      z.any().openapi({ description: 'The unique identifier (ID) of the protection.' }),
    ).exactOptional(),
    Name: ProtectionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the protection. For example, <code>My CloudFront distributions</code>.',
        }),
    ).exactOptional(),
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN (Amazon Resource Name) of the Amazon Web Services resource that is protected.',
        }),
    ).exactOptional(),
    HealthCheckIds: HealthCheckIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique identifier (ID) for the Route 53 health check that's associated with the protection. ",
        }),
    ).exactOptional(),
    ProtectionArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The ARN (Amazon Resource Name) of the protection.' }),
    ).exactOptional(),
    ApplicationLayerAutomaticResponseConfiguration:
      ApplicationLayerAutomaticResponseConfigurationSchema.and(
        z
          .any()
          .openapi({
            description:
              'The automatic application layer DDoS mitigation settings for the protection. This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks. ',
          }),
      ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents a resource that is under DDoS protection.',
    required: [],
  })
  .openapi('Protection')

const DescribeProtectionResponseSchema = z
  .object({
    Protection: ProtectionSchema.and(
      z.any().openapi({ description: 'The <a>Protection</a> that you requested. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeProtectionResponse')

const DescribeProtectionRequestSchema = z
  .object({
    ProtectionId: ProtectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier (ID) for the <a>Protection</a> object to describe. You must provide either the <code>ResourceArn</code> of the protected resource or the <code>ProtectionID</code> of the protection, but not both.',
        }),
    ).exactOptional(),
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN (Amazon Resource Name) of the protected Amazon Web Services resource. You must provide either the <code>ResourceArn</code> of the protected resource or the <code>ProtectionID</code> of the protection, but not both.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeProtectionRequest', required: [] })
  .openapi('DescribeProtectionRequest')

const ProtectionGroupSchema = z
  .object({
    ProtectionGroupId: ProtectionGroupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. ',
        }),
    ),
    Aggregation: ProtectionGroupAggregationSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Defines how Shield combines resource data for the group in order to detect, mitigate, and report events.</p> <ul> <li> <p>Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.</p> </li> <li> <p>Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.</p> </li> <li> <p>Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include Amazon CloudFront distributions and origin resources for CloudFront distributions.</p> </li> </ul>",
        }),
    ),
    Pattern: ProtectionGroupPatternSchema.and(
      z
        .any()
        .openapi({
          description:
            'The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource ARNs (Amazon Resource Names), or include all resources of a specified resource type.',
        }),
    ),
    ResourceType: ProtectedResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource type to include in the protection group. All protected resources of this type are included in the protection group. You must set this when you set <code>Pattern</code> to <code>BY_RESOURCE_TYPE</code> and you must not set it for any other <code>Pattern</code> setting. ',
        }),
    ).exactOptional(),
    Members: ProtectionGroupMembersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARNs (Amazon Resource Names) of the resources to include in the protection group. You must set this when you set <code>Pattern</code> to <code>ARBITRARY</code> and you must not set it for any other <code>Pattern</code> setting. ',
        }),
    ),
    ProtectionGroupArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The ARN (Amazon Resource Name) of the protection group.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProtectionGroupId', 'Aggregation', 'Pattern', 'Members'],
    description:
      'A grouping of protected resources that you and Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives. ',
  })
  .openapi('ProtectionGroup')

const DescribeProtectionGroupResponseSchema = z
  .object({
    ProtectionGroup: ProtectionGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'A grouping of protected resources that you and Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives. ',
        }),
    ),
  })
  .openapi({ required: ['ProtectionGroup'] })
  .openapi('DescribeProtectionGroupResponse')

const DescribeProtectionGroupRequestSchema = z
  .object({
    ProtectionGroupId: ProtectionGroupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. ',
        }),
    ),
  })
  .openapi({ required: ['ProtectionGroupId'], title: 'DescribeProtectionGroupRequest' })
  .openapi('DescribeProtectionGroupRequest')

const DurationInSecondsSchema = z.int().min(0).openapi('DurationInSeconds')

const AutoRenewSchema = z.enum(['ENABLED', 'DISABLED']).openapi('AutoRenew')

const LimitSchema = z
  .object({
    Type: StringSchema.and(
      z.any().openapi({ description: 'The type of protection.' }),
    ).exactOptional(),
    Max: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of protections that can be created for the specified <code>Type</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies how many protections of a given type you can create.',
    required: [],
  })
  .openapi('Limit')

const LimitsSchema = z.array(LimitSchema).openapi('Limits')

const ProactiveEngagementStatusSchema = z
  .enum(['ENABLED', 'DISABLED', 'PENDING'])
  .openapi('ProactiveEngagementStatus')

const ProtectionLimitsSchema = z
  .object({
    ProtectedResourceTypeLimits: LimitsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of resource types that you can specify in a protection.',
        }),
    ),
  })
  .openapi({
    required: ['ProtectedResourceTypeLimits'],
    description: 'Limits settings on protections for your subscription. ',
  })
  .openapi('ProtectionLimits')

const ProtectionGroupArbitraryPatternLimitsSchema = z
  .object({
    MaxMembers: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of resources you can specify for a single arbitrary pattern in a protection group.',
        }),
    ),
  })
  .openapi({
    required: ['MaxMembers'],
    description: 'Limits settings on protection groups with arbitrary pattern type. ',
  })
  .openapi('ProtectionGroupArbitraryPatternLimits')

const ProtectionGroupPatternTypeLimitsSchema = z
  .object({
    ArbitraryPatternLimits: ProtectionGroupArbitraryPatternLimitsSchema.and(
      z
        .any()
        .openapi({
          description: 'Limits settings on protection groups with arbitrary pattern type. ',
        }),
    ),
  })
  .openapi({
    required: ['ArbitraryPatternLimits'],
    description: 'Limits settings by pattern type in the protection groups for your subscription. ',
  })
  .openapi('ProtectionGroupPatternTypeLimits')

const ProtectionGroupLimitsSchema = z
  .object({
    MaxProtectionGroups: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of protection groups that you can have at one time. ',
        }),
    ),
    PatternTypeLimits: ProtectionGroupPatternTypeLimitsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Limits settings by pattern type in the protection groups for your subscription. ',
        }),
    ),
  })
  .openapi({
    required: ['MaxProtectionGroups', 'PatternTypeLimits'],
    description: 'Limits settings on protection groups for your subscription. ',
  })
  .openapi('ProtectionGroupLimits')

const SubscriptionLimitsSchema = z
  .object({
    ProtectionLimits: ProtectionLimitsSchema.and(
      z.any().openapi({ description: 'Limits settings on protections for your subscription. ' }),
    ),
    ProtectionGroupLimits: ProtectionGroupLimitsSchema.and(
      z
        .any()
        .openapi({ description: 'Limits settings on protection groups for your subscription. ' }),
    ),
  })
  .openapi({
    required: ['ProtectionLimits', 'ProtectionGroupLimits'],
    description: 'Limits settings for your subscription. ',
  })
  .openapi('SubscriptionLimits')

const SubscriptionSchema = z
  .object({
    StartTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The start time of the subscription, in Unix time in seconds. ' }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time your subscription will end.' }),
    ).exactOptional(),
    TimeCommitmentInSeconds: DurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The length, in seconds, of the Shield Advanced subscription for the account.',
        }),
    ).exactOptional(),
    AutoRenew: AutoRenewSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If <code>ENABLED</code>, the subscription will be automatically renewed at the end of the existing subscription period.</p> <p>When you initally create a subscription, <code>AutoRenew</code> is set to <code>ENABLED</code>. You can change this by submitting an <code>UpdateSubscription</code> request. If the <code>UpdateSubscription</code> request does not included a value for <code>AutoRenew</code>, the existing value for <code>AutoRenew</code> remains unchanged.</p>',
        }),
    ).exactOptional(),
    Limits: LimitsSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies how many protections of a given type you can create.' }),
    ).exactOptional(),
    ProactiveEngagementStatus: ProactiveEngagementStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If <code>ENABLED</code>, the Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.</p> <p>If <code>PENDING</code>, you have requested proactive engagement and the request is pending. The status changes to <code>ENABLED</code> when your request is fully processed.</p> <p>If <code>DISABLED</code>, the SRT will not proactively notify contacts about escalations or to initiate proactive customer support. </p>',
        }),
    ).exactOptional(),
    SubscriptionLimits: SubscriptionLimitsSchema.and(
      z.any().openapi({ description: 'Limits settings for your subscription. ' }),
    ),
    SubscriptionArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The ARN (Amazon Resource Name) of the subscription.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SubscriptionLimits'],
    description: 'Information about the Shield Advanced subscription for an account.',
  })
  .openapi('Subscription')

const DescribeSubscriptionResponseSchema = z
  .object({
    Subscription: SubscriptionSchema.and(
      z.any().openapi({ description: 'The Shield Advanced subscription details for an account.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSubscriptionResponse')

const DescribeSubscriptionRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeSubscriptionRequest' })
  .openapi('DescribeSubscriptionRequest')

const DisableApplicationLayerAutomaticResponseResponseSchema = z
  .object({})
  .openapi('DisableApplicationLayerAutomaticResponseResponse')

const DisableApplicationLayerAutomaticResponseRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The ARN (Amazon Resource Name) of the protected resource.' }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'DisableApplicationLayerAutomaticResponseRequest' })
  .openapi('DisableApplicationLayerAutomaticResponseRequest')

const DisableProactiveEngagementResponseSchema = z
  .object({})
  .openapi('DisableProactiveEngagementResponse')

const DisableProactiveEngagementRequestSchema = z
  .object({})
  .openapi({ title: 'DisableProactiveEngagementRequest' })
  .openapi('DisableProactiveEngagementRequest')

const DisassociateDRTLogBucketResponseSchema = z
  .object({})
  .openapi('DisassociateDRTLogBucketResponse')

const DisassociateDRTLogBucketRequestSchema = z
  .object({
    LogBucket: LogBucketSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon S3 bucket that contains the logs that you want to share.',
        }),
    ),
  })
  .openapi({ required: ['LogBucket'], title: 'DisassociateDRTLogBucketRequest' })
  .openapi('DisassociateDRTLogBucketRequest')

const DisassociateDRTRoleResponseSchema = z.object({}).openapi('DisassociateDRTRoleResponse')

const DisassociateDRTRoleRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateDRTRoleRequest' })
  .openapi('DisassociateDRTRoleRequest')

const DisassociateHealthCheckResponseSchema = z
  .object({})
  .openapi('DisassociateHealthCheckResponse')

const DisassociateHealthCheckRequestSchema = z
  .object({
    ProtectionId: ProtectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier (ID) for the <a>Protection</a> object to remove the health check association from. ',
        }),
    ),
    HealthCheckArn: HealthCheckArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the health check that is associated with the protection.',
        }),
    ),
  })
  .openapi({
    required: ['ProtectionId', 'HealthCheckArn'],
    title: 'DisassociateHealthCheckRequest',
  })
  .openapi('DisassociateHealthCheckRequest')

const EnableApplicationLayerAutomaticResponseResponseSchema = z
  .object({})
  .openapi('EnableApplicationLayerAutomaticResponseResponse')

const EnableApplicationLayerAutomaticResponseRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The ARN (Amazon Resource Name) of the protected resource.' }),
    ),
    Action: ResponseActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource. ',
        }),
    ),
  })
  .openapi({
    required: ['ResourceArn', 'Action'],
    title: 'EnableApplicationLayerAutomaticResponseRequest',
  })
  .openapi('EnableApplicationLayerAutomaticResponseRequest')

const EnableProactiveEngagementResponseSchema = z
  .object({})
  .openapi('EnableProactiveEngagementResponse')

const EnableProactiveEngagementRequestSchema = z
  .object({})
  .openapi({ title: 'EnableProactiveEngagementRequest' })
  .openapi('EnableProactiveEngagementRequest')

const SubscriptionStateSchema = z.enum(['ACTIVE', 'INACTIVE']).openapi('SubscriptionState')

const GetSubscriptionStateResponseSchema = z
  .object({
    SubscriptionState: SubscriptionStateSchema.and(
      z.any().openapi({ description: 'The status of the subscription.' }),
    ),
  })
  .openapi({ required: ['SubscriptionState'] })
  .openapi('GetSubscriptionStateResponse')

const GetSubscriptionStateRequestSchema = z
  .object({})
  .openapi({ title: 'GetSubscriptionStateRequest' })
  .openapi('GetSubscriptionStateRequest')

const AttackVectorDescriptionSchema = z
  .object({
    VectorType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The attack type. Valid values:</p> <ul> <li> <p>UDP_TRAFFIC</p> </li> <li> <p>UDP_FRAGMENT</p> </li> <li> <p>GENERIC_UDP_REFLECTION</p> </li> <li> <p>DNS_REFLECTION</p> </li> <li> <p>NTP_REFLECTION</p> </li> <li> <p>CHARGEN_REFLECTION</p> </li> <li> <p>SSDP_REFLECTION</p> </li> <li> <p>PORT_MAPPER</p> </li> <li> <p>RIP_REFLECTION</p> </li> <li> <p>SNMP_REFLECTION</p> </li> <li> <p>MSSQL_REFLECTION</p> </li> <li> <p>NET_BIOS_REFLECTION</p> </li> <li> <p>SYN_FLOOD</p> </li> <li> <p>ACK_FLOOD</p> </li> <li> <p>REQUEST_FLOOD</p> </li> <li> <p>HTTP_REFLECTION</p> </li> <li> <p>UDS_REFLECTION</p> </li> <li> <p>MEMCACHED_REFLECTION</p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['VectorType'], description: 'Describes the attack.' })
  .openapi('AttackVectorDescription')

const AttackVectorDescriptionListSchema = z
  .array(AttackVectorDescriptionSchema)
  .openapi('AttackVectorDescriptionList')

const AttackSummarySchema = z
  .object({
    AttackId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier (ID) of the attack.' }),
    ).exactOptional(),
    ResourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN (Amazon Resource Name) of the resource that was attacked.',
        }),
    ).exactOptional(),
    StartTime: AttackTimestampSchema.and(
      z.any().openapi({ description: 'The start time of the attack, in Unix time in seconds. ' }),
    ).exactOptional(),
    EndTime: AttackTimestampSchema.and(
      z.any().openapi({ description: 'The end time of the attack, in Unix time in seconds. ' }),
    ).exactOptional(),
    AttackVectors: AttackVectorDescriptionListSchema.and(
      z.any().openapi({ description: 'The list of attacks for a specified time period.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Summarizes all DDoS attacks for a specified time period.',
    required: [],
  })
  .openapi('AttackSummary')

const AttackSummariesSchema = z.array(AttackSummarySchema).openapi('AttackSummaries')

const TokenSchema = z.string().regex(/^.*$/).min(1).max(4096).openapi('Token')

const ListAttacksResponseSchema = z
  .object({
    AttackSummaries: AttackSummariesSchema.and(
      z.any().openapi({ description: 'The attack information for the specified time range.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects, Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and providing the token that was returned by the prior call in your request. </p> <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code> setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p> <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAttacksResponse')

const ResourceArnFilterListSchema = z.array(ResourceArnSchema).openapi('ResourceArnFilterList')

const MaxResultsSchema = z.int().min(0).max(10000).openapi('MaxResults')

const ListAttacksRequestSchema = z
  .object({
    ResourceArns: ResourceArnFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARNs (Amazon Resource Names) of the resources that were attacked. If you leave this blank, all applicable resources for this account will be included.',
        }),
    ).exactOptional(),
    StartTime: TimeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start of the time period for the attacks. This is a <code>timestamp</code> type. The request syntax listing for this call indicates a <code>number</code> type, but you can provide the time in any valid <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">timestamp format</a> setting. ',
        }),
    ).exactOptional(),
    EndTime: TimeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end of the time period for the attacks. This is a <code>timestamp</code> type. The request syntax listing for this call indicates a <code>number</code> type, but you can provide the time in any valid <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">timestamp format</a> setting. ',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects, Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and providing the token that was returned by the prior call in your request. </p> <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code> setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p> <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p> <p>On your first call to a list operation, leave this setting empty.</p>',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The greatest number of objects that you want Shield Advanced to return to the list request. Shield Advanced might return fewer objects than you indicate in this setting, even if more objects are available. If there are more objects remaining, Shield Advanced will always also return a <code>NextToken</code> value in the response.</p> <p>The default setting is 20.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListAttacksRequest', required: [] })
  .openapi('ListAttacksRequest')

const ProtectionGroupsSchema = z.array(ProtectionGroupSchema).openapi('ProtectionGroups')

const ListProtectionGroupsResponseSchema = z
  .object({
    ProtectionGroups: ProtectionGroupsSchema.and(z.any().openapi({ description: '<p/>' })),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects, Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and providing the token that was returned by the prior call in your request. </p> <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code> setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p> <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ProtectionGroups'] })
  .openapi('ListProtectionGroupsResponse')

const ProtectionGroupIdFiltersSchema = z
  .array(ProtectionGroupIdSchema)
  .length(1)
  .openapi('ProtectionGroupIdFilters')

const ProtectionGroupPatternFiltersSchema = z
  .array(ProtectionGroupPatternSchema)
  .length(1)
  .openapi('ProtectionGroupPatternFilters')

const ProtectedResourceTypeFiltersSchema = z
  .array(ProtectedResourceTypeSchema)
  .length(1)
  .openapi('ProtectedResourceTypeFilters')

const ProtectionGroupAggregationFiltersSchema = z
  .array(ProtectionGroupAggregationSchema)
  .length(1)
  .openapi('ProtectionGroupAggregationFilters')

const InclusionProtectionGroupFiltersSchema = z
  .object({
    ProtectionGroupIds: ProtectionGroupIdFiltersSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the protection group that you want to retrieve. ' }),
    ).exactOptional(),
    Patterns: ProtectionGroupPatternFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pattern specification of the protection groups that you want to retrieve. ',
        }),
    ).exactOptional(),
    ResourceTypes: ProtectedResourceTypeFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            "The resource type configuration of the protection groups that you want to retrieve. In the protection group configuration, you specify the resource type when you set the group's <code>Pattern</code> to <code>BY_RESOURCE_TYPE</code>. ",
        }),
    ).exactOptional(),
    Aggregations: ProtectionGroupAggregationFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The aggregation setting of the protection groups that you want to retrieve. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Narrows the set of protection groups that the call retrieves. You can retrieve a single protection group by its name and you can retrieve all protection groups that are configured with a specific pattern, aggregation, or resource type. You can provide up to one criteria per filter type. Shield Advanced returns the protection groups that exactly match all of the search criteria that you provide.',
    required: [],
  })
  .openapi('InclusionProtectionGroupFilters')

const ListProtectionGroupsRequestSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects, Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and providing the token that was returned by the prior call in your request. </p> <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code> setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p> <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p> <p>On your first call to a list operation, leave this setting empty.</p>',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The greatest number of objects that you want Shield Advanced to return to the list request. Shield Advanced might return fewer objects than you indicate in this setting, even if more objects are available. If there are more objects remaining, Shield Advanced will always also return a <code>NextToken</code> value in the response.</p> <p>The default setting is 20.</p>',
        }),
    ).exactOptional(),
    InclusionFilters: InclusionProtectionGroupFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Narrows the set of protection groups that the call retrieves. You can retrieve a single protection group by its name and you can retrieve all protection groups that are configured with specific pattern or aggregation settings. You can provide up to one criteria per filter type. Shield Advanced returns the protection groups that exactly match all of the search criteria that you provide.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListProtectionGroupsRequest', required: [] })
  .openapi('ListProtectionGroupsRequest')

const InvalidPaginationTokenExceptionSchema = z.any().openapi('InvalidPaginationTokenException')

const ProtectionsSchema = z.array(ProtectionSchema).openapi('Protections')

const ListProtectionsResponseSchema = z
  .object({
    Protections: ProtectionsSchema.and(
      z.any().openapi({ description: 'The array of enabled <a>Protection</a> objects.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects, Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and providing the token that was returned by the prior call in your request. </p> <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code> setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p> <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListProtectionsResponse')

const ResourceArnFiltersSchema = z.array(ResourceArnSchema).length(1).openapi('ResourceArnFilters')

const ProtectionNameFiltersSchema = z
  .array(ProtectionNameSchema)
  .length(1)
  .openapi('ProtectionNameFilters')

const InclusionProtectionFiltersSchema = z
  .object({
    ResourceArns: ResourceArnFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN (Amazon Resource Name) of the resource whose protection you want to retrieve. ',
        }),
    ).exactOptional(),
    ProtectionNames: ProtectionNameFiltersSchema.and(
      z.any().openapi({ description: 'The name of the protection that you want to retrieve. ' }),
    ).exactOptional(),
    ResourceTypes: ProtectedResourceTypeFiltersSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of protected resource whose protections you want to retrieve. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Narrows the set of protections that the call retrieves. You can retrieve a single protection by providing its name or the ARN (Amazon Resource Name) of its protected resource. You can also retrieve all protections for a specific resource type. You can provide up to one criteria per filter type. Shield Advanced returns protections that exactly match all of the filter criteria that you provide.',
    required: [],
  })
  .openapi('InclusionProtectionFilters')

const ListProtectionsRequestSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects, Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and providing the token that was returned by the prior call in your request. </p> <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code> setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p> <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p> <p>On your first call to a list operation, leave this setting empty.</p>',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The greatest number of objects that you want Shield Advanced to return to the list request. Shield Advanced might return fewer objects than you indicate in this setting, even if more objects are available. If there are more objects remaining, Shield Advanced will always also return a <code>NextToken</code> value in the response.</p> <p>The default setting is 20.</p>',
        }),
    ).exactOptional(),
    InclusionFilters: InclusionProtectionFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Narrows the set of protections that the call retrieves. You can retrieve a single protection by providing its name or the ARN (Amazon Resource Name) of its protected resource. You can also retrieve all protections for a specific resource type. You can provide up to one criteria per filter type. Shield Advanced returns protections that exactly match all of the filter criteria that you provide.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListProtectionsRequest', required: [] })
  .openapi('ListProtectionsRequest')

const ResourceArnListSchema = z.array(ResourceArnSchema).openapi('ResourceArnList')

const ListResourcesInProtectionGroupResponseSchema = z
  .object({
    ResourceArns: ResourceArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the resources that are included in the protection group.',
        }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects, Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and providing the token that was returned by the prior call in your request. </p> <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code> setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p> <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceArns'] })
  .openapi('ListResourcesInProtectionGroupResponse')

const ListResourcesInProtectionGroupRequestSchema = z
  .object({
    ProtectionGroupId: ProtectionGroupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. ',
        }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects, Shield Advanced includes a <code>NextToken</code> value in the response. You can retrieve the next batch of objects by requesting the list again and providing the token that was returned by the prior call in your request. </p> <p>You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the <code>MaxResults</code> setting. Shield Advanced will not return more than <code>MaxResults</code> objects, but may return fewer, even if more objects are still available.</p> <p>Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a <code>NextToken</code> value.</p> <p>On your first call to a list operation, leave this setting empty.</p>',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The greatest number of objects that you want Shield Advanced to return to the list request. Shield Advanced might return fewer objects than you indicate in this setting, even if more objects are available. If there are more objects remaining, Shield Advanced will always also return a <code>NextToken</code> value in the response.</p> <p>The default setting is 20.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ProtectionGroupId'], title: 'ListResourcesInProtectionGroupRequest' })
  .openapi('ListResourcesInProtectionGroupRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of tag key and value pairs associated with the specified resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceARN: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the resource to get tags for.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource that you want to add or update tags for.',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags that you want to modify or add to the resource.' }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource that you want to remove tags from.',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description: 'The tag key for each tag that you want to remove from the resource.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateApplicationLayerAutomaticResponseResponseSchema = z
  .object({})
  .openapi('UpdateApplicationLayerAutomaticResponseResponse')

const UpdateApplicationLayerAutomaticResponseRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The ARN (Amazon Resource Name) of the resource.' }),
    ),
    Action: ResponseActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource. ',
        }),
    ),
  })
  .openapi({
    required: ['ResourceArn', 'Action'],
    title: 'UpdateApplicationLayerAutomaticResponseRequest',
  })
  .openapi('UpdateApplicationLayerAutomaticResponseRequest')

const UpdateEmergencyContactSettingsResponseSchema = z
  .object({})
  .openapi('UpdateEmergencyContactSettingsResponse')

const UpdateEmergencyContactSettingsRequestSchema = z
  .object({
    EmergencyContactList: EmergencyContactListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.</p> <p>If you have proactive engagement enabled, the contact list must include at least one phone number.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateEmergencyContactSettingsRequest', required: [] })
  .openapi('UpdateEmergencyContactSettingsRequest')

const UpdateProtectionGroupResponseSchema = z.object({}).openapi('UpdateProtectionGroupResponse')

const UpdateProtectionGroupRequestSchema = z
  .object({
    ProtectionGroupId: ProtectionGroupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. ',
        }),
    ),
    Aggregation: ProtectionGroupAggregationSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Defines how Shield combines resource data for the group in order to detect, mitigate, and report events.</p> <ul> <li> <p>Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.</p> </li> <li> <p>Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.</p> </li> <li> <p>Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include Amazon CloudFront distributions and origin resources for CloudFront distributions.</p> </li> </ul>",
        }),
    ),
    Pattern: ProtectionGroupPatternSchema.and(
      z
        .any()
        .openapi({
          description:
            'The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource Amazon Resource Names (ARNs), or include all resources of a specified resource type.',
        }),
    ),
    ResourceType: ProtectedResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource type to include in the protection group. All protected resources of this type are included in the protection group. You must set this when you set <code>Pattern</code> to <code>BY_RESOURCE_TYPE</code> and you must not set it for any other <code>Pattern</code> setting. ',
        }),
    ).exactOptional(),
    Members: ProtectionGroupMembersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set <code>Pattern</code> to <code>ARBITRARY</code> and you must not set it for any other <code>Pattern</code> setting. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProtectionGroupId', 'Aggregation', 'Pattern'],
    title: 'UpdateProtectionGroupRequest',
  })
  .openapi('UpdateProtectionGroupRequest')

const UpdateSubscriptionResponseSchema = z.object({}).openapi('UpdateSubscriptionResponse')

const UpdateSubscriptionRequestSchema = z
  .object({
    AutoRenew: AutoRenewSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you initally create a subscription, <code>AutoRenew</code> is set to <code>ENABLED</code>. If <code>ENABLED</code>, the subscription will be automatically renewed at the end of the existing subscription period. You can change this by submitting an <code>UpdateSubscription</code> request. If the <code>UpdateSubscription</code> request does not included a value for <code>AutoRenew</code>, the existing value for <code>AutoRenew</code> remains unchanged.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateSubscriptionRequest', required: [] })
  .openapi('UpdateSubscriptionRequest')

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

export const postXAmzTargetAWSShield20160616AssociateDRTLogBucketRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket',
  description:
    '<p>Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10 Amazon S3 buckets with your subscription.</p> <p>To use the services of the SRT and make an <code>AssociateDRTLogBucket</code> request, you must be subscribed to the <a href="http://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="http://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>',
  operationId: 'AssociateDRTLogBucket',
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
        .literal('AWSShield_20160616.AssociateDRTLogBucket')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.AssociateDRTLogBucket'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateDRTLogBucketRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateDRTLogBucketResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'NoAssociatedRoleException',
      content: { 'application/json': { schema: NoAssociatedRoleExceptionSchema } },
    },
    483: {
      description: 'LimitsExceededException',
      content: { 'application/json': { schema: LimitsExceededExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedForDependencyException',
      content: { 'application/json': { schema: AccessDeniedForDependencyExceptionSchema } },
    },
    486: {
      description: 'OptimisticLockException',
      content: { 'application/json': { schema: OptimisticLockExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616AssociateDRTRoleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.AssociateDRTRole',
  description:
    '<p>Authorizes the Shield Response Team (SRT) using the specified role, to access your Amazon Web Services account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your WAF configuration and create or update WAF rules and web ACLs.</p> <p>You can associate only one <code>RoleArn</code> with your subscription. If you submit an <code>AssociateDRTRole</code> request for an account that already has an associated role, the new <code>RoleArn</code> will replace the existing <code>RoleArn</code>. </p> <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <code>AWSShieldDRTAccessPolicy</code> managed policy to the role that you\'ll specify in the request. You can access this policy in the IAM console at <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a>. For more information see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Adding and removing IAM identity permissions</a>. The role must also trust the service principal <code>drt.shield.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM JSON policy elements: Principal</a>.</p> <p>The SRT will have access only to your WAF and Shield resources. By submitting this request, you authorize the SRT to inspect your WAF and Shield configuration and create and update WAF rules and web ACLs on your behalf. The SRT takes these actions only if explicitly authorized by you.</p> <p>You must have the <code>iam:PassRole</code> permission to make an <code>AssociateDRTRole</code> request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a user permissions to pass a role to an Amazon Web Services service</a>. </p> <p>To use the services of the SRT and make an <code>AssociateDRTRole</code> request, you must be subscribed to the <a href="http://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="http://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>',
  operationId: 'AssociateDRTRole',
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
        .literal('AWSShield_20160616.AssociateDRTRole')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.AssociateDRTRole'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateDRTRoleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateDRTRoleResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedForDependencyException',
      content: { 'application/json': { schema: AccessDeniedForDependencyExceptionSchema } },
    },
    484: {
      description: 'OptimisticLockException',
      content: { 'application/json': { schema: OptimisticLockExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616AssociateHealthCheckRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck',
  description:
    '<p>Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. </p> <p>You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>',
  operationId: 'AssociateHealthCheck',
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
        .literal('AWSShield_20160616.AssociateHealthCheck')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.AssociateHealthCheck'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateHealthCheckRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateHealthCheckResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'LimitsExceededException',
      content: { 'application/json': { schema: LimitsExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'OptimisticLockException',
      content: { 'application/json': { schema: OptimisticLockExceptionSchema } },
    },
    485: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616AssociateProactiveEngagementDetailsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails',
  description:
    '<p>Initializes proactive engagement and sets the list of contacts for the Shield Response Team (SRT) to use. You must provide at least one phone number in the emergency contact list. </p> <p>After you have initialized proactive engagement using this call, to disable or enable proactive engagement, use the calls <code>DisableProactiveEngagement</code> and <code>EnableProactiveEngagement</code>. </p> <note> <p>This call defines the list of email addresses and phone numbers that the SRT can use to contact you for escalations to the SRT and to initiate proactive customer support.</p> <p>The contacts that you provide in the request replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it to this call. </p> </note>',
  operationId: 'AssociateProactiveEngagementDetails',
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
        .literal('AWSShield_20160616.AssociateProactiveEngagementDetails')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSShield_20160616.AssociateProactiveEngagementDetails'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateProactiveEngagementDetailsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AssociateProactiveEngagementDetailsResponseSchema },
      },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'OptimisticLockException',
      content: { 'application/json': { schema: OptimisticLockExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616CreateProtectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.CreateProtection',
  description:
    '<p>Enables Shield Advanced for a specific Amazon Web Services resource. The resource can be an Amazon CloudFront distribution, Amazon Route 53 hosted zone, Global Accelerator standard accelerator, Elastic IP Address, Application Load Balancer, or a Classic Load Balancer. You can protect Amazon EC2 instances and Network Load Balancers by association with protected Amazon EC2 Elastic IP addresses.</p> <p>You can add protection to only a single resource with each <code>CreateProtection</code> request. You can add protection to multiple resources at once through the Shield Advanced console at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a> and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/configure-new-protection.html">Adding Shield Advanced protection to Amazon Web Services resources</a>.</p>',
  operationId: 'CreateProtection',
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
        .literal('AWSShield_20160616.CreateProtection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.CreateProtection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateProtectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProtectionResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
    482: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    483: {
      description: 'LimitsExceededException',
      content: { 'application/json': { schema: LimitsExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    485: {
      description: 'OptimisticLockException',
      content: { 'application/json': { schema: OptimisticLockExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616CreateProtectionGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup',
  description:
    'Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. ',
  operationId: 'CreateProtectionGroup',
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
        .literal('AWSShield_20160616.CreateProtectionGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.CreateProtectionGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateProtectionGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProtectionGroupResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'OptimisticLockException',
      content: { 'application/json': { schema: OptimisticLockExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    485: {
      description: 'LimitsExceededException',
      content: { 'application/json': { schema: LimitsExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616CreateSubscriptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.CreateSubscription',
  description:
    "<p>Activates Shield Advanced for an account.</p> <note> <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. </p> </note> <p>When you initially create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period. You can change this by submitting an <code>UpdateSubscription</code> request. </p>",
  operationId: 'CreateSubscription',
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
        .literal('AWSShield_20160616.CreateSubscription')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.CreateSubscription'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSubscriptionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSubscriptionResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616DeleteProtectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.DeleteProtection',
  description: 'Deletes an Shield Advanced <a>Protection</a>.',
  operationId: 'DeleteProtection',
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
        .literal('AWSShield_20160616.DeleteProtection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.DeleteProtection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteProtectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProtectionResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'OptimisticLockException',
      content: { 'application/json': { schema: OptimisticLockExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616DeleteProtectionGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup',
  description: 'Removes the specified protection group.',
  operationId: 'DeleteProtectionGroup',
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
        .literal('AWSShield_20160616.DeleteProtectionGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.DeleteProtectionGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteProtectionGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProtectionGroupResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'OptimisticLockException',
      content: { 'application/json': { schema: OptimisticLockExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616DeleteSubscriptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.DeleteSubscription',
  description:
    'Removes Shield Advanced from an account. Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment. ',
  operationId: 'DeleteSubscription',
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
        .literal('AWSShield_20160616.DeleteSubscription')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.DeleteSubscription'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteSubscriptionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSubscriptionResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'LockedSubscriptionException',
      content: { 'application/json': { schema: LockedSubscriptionExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetAWSShield20160616DescribeAttackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.DescribeAttack',
  description: 'Describes the details of a DDoS attack. ',
  operationId: 'DescribeAttack',
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
        .literal('AWSShield_20160616.DescribeAttack')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.DescribeAttack'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAttackRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAttackResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616DescribeAttackStatisticsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics',
  description:
    "<p>Provides information about the number and type of attacks Shield has detected in the last year for all resources that belong to your account, regardless of whether you've defined Shield protections for them. This operation is available to Shield customers as well as to Shield Advanced customers.</p> <p>The operation returns data for the time range of midnight UTC, one year ago, to midnight UTC, today. For example, if the current time is <code>2020-10-26 15:39:32 PDT</code>, equal to <code>2020-10-26 22:39:32 UTC</code>, then the time range for the attack data returned is from <code>2019-10-26 00:00:00 UTC</code> to <code>2020-10-26 00:00:00 UTC</code>. </p> <p>The time range indicates the period covered by the attack statistics data items.</p>",
  operationId: 'DescribeAttackStatistics',
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
        .literal('AWSShield_20160616.DescribeAttackStatistics')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.DescribeAttackStatistics'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAttackStatisticsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAttackStatisticsResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616DescribeDRTAccessRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess',
  description:
    'Returns the current role and list of Amazon S3 log buckets used by the Shield Response Team (SRT) to access your Amazon Web Services account while assisting with attack mitigation.',
  operationId: 'DescribeDRTAccess',
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
        .literal('AWSShield_20160616.DescribeDRTAccess')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.DescribeDRTAccess'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDRTAccessRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDRTAccessResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616DescribeEmergencyContactSettingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings',
  description:
    'A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.',
  operationId: 'DescribeEmergencyContactSettings',
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
        .literal('AWSShield_20160616.DescribeEmergencyContactSettings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSShield_20160616.DescribeEmergencyContactSettings'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEmergencyContactSettingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEmergencyContactSettingsResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616DescribeProtectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.DescribeProtection',
  description: 'Lists the details of a <a>Protection</a> object.',
  operationId: 'DescribeProtection',
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
        .literal('AWSShield_20160616.DescribeProtection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.DescribeProtection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeProtectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeProtectionResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616DescribeProtectionGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup',
  description: 'Returns the specification for the specified protection group.',
  operationId: 'DescribeProtectionGroup',
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
        .literal('AWSShield_20160616.DescribeProtectionGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.DescribeProtectionGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeProtectionGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeProtectionGroupResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616DescribeSubscriptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.DescribeSubscription',
  description: 'Provides details about the Shield Advanced subscription for an account.',
  operationId: 'DescribeSubscription',
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
        .literal('AWSShield_20160616.DescribeSubscription')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.DescribeSubscription'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeSubscriptionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSubscriptionResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616DisableApplicationLayerAutomaticResponseRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse',
    description:
      'Disable the Shield Advanced automatic application layer DDoS mitigation feature for the protected resource. This stops Shield Advanced from creating, verifying, and applying WAF rules for attacks that it detects for the resource. ',
    operationId: 'DisableApplicationLayerAutomaticResponse',
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
          .literal('AWSShield_20160616.DisableApplicationLayerAutomaticResponse')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSShield_20160616.DisableApplicationLayerAutomaticResponse'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DisableApplicationLayerAutomaticResponseRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DisableApplicationLayerAutomaticResponseResponseSchema },
        },
      },
      480: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'OptimisticLockException',
        content: { 'application/json': { schema: OptimisticLockExceptionSchema } },
      },
      484: {
        description: 'InvalidOperationException',
        content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSShield20160616DisableProactiveEngagementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement',
  description:
    'Removes authorization from the Shield Response Team (SRT) to notify contacts about escalations to the SRT and to initiate proactive customer support.',
  operationId: 'DisableProactiveEngagement',
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
        .literal('AWSShield_20160616.DisableProactiveEngagement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.DisableProactiveEngagement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisableProactiveEngagementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisableProactiveEngagementResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'OptimisticLockException',
      content: { 'application/json': { schema: OptimisticLockExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616DisassociateDRTLogBucketRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket',
  description:
    "Removes the Shield Response Team's (SRT) access to the specified Amazon S3 bucket containing the logs that you shared previously.",
  operationId: 'DisassociateDRTLogBucket',
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
        .literal('AWSShield_20160616.DisassociateDRTLogBucket')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.DisassociateDRTLogBucket'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateDRTLogBucketRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateDRTLogBucketResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'NoAssociatedRoleException',
      content: { 'application/json': { schema: NoAssociatedRoleExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedForDependencyException',
      content: { 'application/json': { schema: AccessDeniedForDependencyExceptionSchema } },
    },
    484: {
      description: 'OptimisticLockException',
      content: { 'application/json': { schema: OptimisticLockExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616DisassociateDRTRoleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole',
  description:
    "Removes the Shield Response Team's (SRT) access to your Amazon Web Services account.",
  operationId: 'DisassociateDRTRole',
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
        .literal('AWSShield_20160616.DisassociateDRTRole')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.DisassociateDRTRole'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateDRTRoleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateDRTRoleResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'OptimisticLockException',
      content: { 'application/json': { schema: OptimisticLockExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616DisassociateHealthCheckRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck',
  description:
    '<p>Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. </p> <p>You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>',
  operationId: 'DisassociateHealthCheck',
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
        .literal('AWSShield_20160616.DisassociateHealthCheck')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.DisassociateHealthCheck'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateHealthCheckRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateHealthCheckResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'OptimisticLockException',
      content: { 'application/json': { schema: OptimisticLockExceptionSchema } },
    },
    484: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616EnableApplicationLayerAutomaticResponseRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse',
    description:
      '<p>Enable the Shield Advanced automatic application layer DDoS mitigation for the protected resource. </p> <note> <p>This feature is available for Amazon CloudFront distributions and Application Load Balancers only.</p> </note> <p>This causes Shield Advanced to create, verify, and apply WAF rules for DDoS attacks that it detects for the resource. Shield Advanced applies the rules in a Shield rule group inside the web ACL that you\'ve associated with the resource. For information about how automatic mitigation works and the requirements for using it, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced-automatic-app-layer-response.html">Shield Advanced automatic application layer DDoS mitigation</a>.</p> <note> <p>Don\'t use this action to make changes to automatic mitigation settings when it\'s already enabled for a resource. Instead, use <a>UpdateApplicationLayerAutomaticResponse</a>.</p> </note> <p>To use this feature, you must associate a web ACL with the protected resource. The web ACL must be created using the latest version of WAF (v2). You can associate the web ACL through the Shield Advanced console at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a>. You can also associate the web ACL to the resource through the WAF console or the WAF API, but you must manage Shield Advanced automatic mitigation through Shield Advanced. For information about WAF, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">WAF Developer Guide</a>.</p>',
    operationId: 'EnableApplicationLayerAutomaticResponse',
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
          .literal('AWSShield_20160616.EnableApplicationLayerAutomaticResponse')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSShield_20160616.EnableApplicationLayerAutomaticResponse'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: EnableApplicationLayerAutomaticResponseRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: EnableApplicationLayerAutomaticResponseResponseSchema },
        },
      },
      480: {
        description: 'LimitsExceededException',
        content: { 'application/json': { schema: LimitsExceededExceptionSchema } },
      },
      481: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      484: {
        description: 'OptimisticLockException',
        content: { 'application/json': { schema: OptimisticLockExceptionSchema } },
      },
      485: {
        description: 'InvalidOperationException',
        content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSShield20160616EnableProactiveEngagementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement',
  description:
    'Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.',
  operationId: 'EnableProactiveEngagement',
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
        .literal('AWSShield_20160616.EnableProactiveEngagement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.EnableProactiveEngagement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: EnableProactiveEngagementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EnableProactiveEngagementResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'OptimisticLockException',
      content: { 'application/json': { schema: OptimisticLockExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616GetSubscriptionStateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.GetSubscriptionState',
  description:
    'Returns the <code>SubscriptionState</code>, either <code>Active</code> or <code>Inactive</code>.',
  operationId: 'GetSubscriptionState',
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
        .literal('AWSShield_20160616.GetSubscriptionState')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.GetSubscriptionState'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetSubscriptionStateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSubscriptionStateResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616ListAttacksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.ListAttacks',
  description:
    'Returns all ongoing DDoS attacks or all DDoS attacks during a specified time period.',
  operationId: 'ListAttacks',
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
        .literal('AWSShield_20160616.ListAttacks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.ListAttacks'] },
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
    body: { content: { 'application/json': { schema: ListAttacksRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAttacksResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616ListProtectionGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.ListProtectionGroups',
  description:
    'Retrieves <a>ProtectionGroup</a> objects for the account. You can retrieve all protection groups or you can provide filtering criteria and retrieve just the subset of protection groups that match the criteria. ',
  operationId: 'ListProtectionGroups',
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
        .literal('AWSShield_20160616.ListProtectionGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.ListProtectionGroups'] },
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
      content: { 'application/json': { schema: ListProtectionGroupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProtectionGroupsResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616ListProtectionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.ListProtections',
  description:
    'Retrieves <a>Protection</a> objects for the account. You can retrieve all protections or you can provide filtering criteria and retrieve just the subset of protections that match the criteria. ',
  operationId: 'ListProtections',
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
        .literal('AWSShield_20160616.ListProtections')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.ListProtections'] },
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
      content: { 'application/json': { schema: ListProtectionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProtectionsResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616ListResourcesInProtectionGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup',
  description: 'Retrieves the resources that are included in the protection group. ',
  operationId: 'ListResourcesInProtectionGroup',
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
        .literal('AWSShield_20160616.ListResourcesInProtectionGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.ListResourcesInProtectionGroup'] },
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
      content: { 'application/json': { schema: ListResourcesInProtectionGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResourcesInProtectionGroupResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.ListTagsForResource',
  description:
    'Gets information about Amazon Web Services tags for a specified Amazon Resource Name (ARN) in Shield.',
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
        .literal('AWSShield_20160616.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.ListTagsForResource'] },
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
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.TagResource',
  description: 'Adds or updates tags for a resource in Shield.',
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
        .literal('AWSShield_20160616.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.TagResource'] },
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
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.UntagResource',
  description: 'Removes tags from a resource in Shield.',
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
        .literal('AWSShield_20160616.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.UntagResource'] },
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
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidResourceException',
      content: { 'application/json': { schema: InvalidResourceExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616UpdateApplicationLayerAutomaticResponseRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse',
    description:
      'Updates an existing Shield Advanced automatic application layer DDoS mitigation configuration for the specified resource.',
    operationId: 'UpdateApplicationLayerAutomaticResponse',
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
          .literal('AWSShield_20160616.UpdateApplicationLayerAutomaticResponse')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSShield_20160616.UpdateApplicationLayerAutomaticResponse'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: UpdateApplicationLayerAutomaticResponseRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: UpdateApplicationLayerAutomaticResponseResponseSchema },
        },
      },
      480: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
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
        description: 'OptimisticLockException',
        content: { 'application/json': { schema: OptimisticLockExceptionSchema } },
      },
      484: {
        description: 'InvalidOperationException',
        content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSShield20160616UpdateEmergencyContactSettingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings',
  description:
    'Updates the details of the list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.',
  operationId: 'UpdateEmergencyContactSettings',
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
        .literal('AWSShield_20160616.UpdateEmergencyContactSettings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.UpdateEmergencyContactSettings'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateEmergencyContactSettingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateEmergencyContactSettingsResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'OptimisticLockException',
      content: { 'application/json': { schema: OptimisticLockExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616UpdateProtectionGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup',
  description:
    'Updates an existing protection group. A protection group is a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. ',
  operationId: 'UpdateProtectionGroup',
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
        .literal('AWSShield_20160616.UpdateProtectionGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.UpdateProtectionGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateProtectionGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateProtectionGroupResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'OptimisticLockException',
      content: { 'application/json': { schema: OptimisticLockExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShield20160616UpdateSubscriptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShield_20160616.UpdateSubscription',
  description:
    "<p>Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated.</p> <note> <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. </p> </note>",
  operationId: 'UpdateSubscription',
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
        .literal('AWSShield_20160616.UpdateSubscription')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShield_20160616.UpdateSubscription'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSubscriptionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSubscriptionResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'LockedSubscriptionException',
      content: { 'application/json': { schema: LockedSubscriptionExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'OptimisticLockException',
      content: { 'application/json': { schema: OptimisticLockExceptionSchema } },
    },
  },
})
