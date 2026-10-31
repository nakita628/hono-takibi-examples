import { createRoute, z } from '@hono/zod-openapi'

const ResourceIdSchema = z.string().min(1).max(64).openapi('ResourceId')

const ArnSchema = z.string().min(1).max(255).openapi('Arn')

const NameSchema = z
  .string()
  .regex(/(?!^[0-9]+$)([a-zA-Z0-9\-_' ']+)/)
  .max(64)
  .openapi('Name')

const PrioritySchema = z.int().openapi('Priority')

const MutationProtectionStatusSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi('MutationProtectionStatus')

const ServicePrincipleSchema = z.string().min(1).max(512).openapi('ServicePrinciple')

const FirewallRuleGroupAssociationStatusSchema = z
  .enum(['COMPLETE', 'DELETING', 'UPDATING'])
  .openapi('FirewallRuleGroupAssociationStatus')

const StatusMessageSchema = z.string().max(255).openapi('StatusMessage')

const CreatorRequestIdSchema = z.string().min(1).max(255).openapi('CreatorRequestId')

const Rfc3339TimeStringSchema = z.string().min(20).max(40).openapi('Rfc3339TimeString')

const FirewallRuleGroupAssociationSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The identifier for the association.' }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the firewall rule group association.',
        }),
    ).exactOptional(),
    FirewallRuleGroupId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the firewall rule group. ' }),
    ).exactOptional(),
    VpcId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier of the VPC that is associated with the rule group. ',
        }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the association.' }),
    ).exactOptional(),
    Priority: PrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            'The setting that determines the processing order of the rule group among the rule groups that are associated with a single VPC. DNS Firewall filters VPC traffic starting from rule group with the lowest numeric priority setting. ',
        }),
    ).exactOptional(),
    MutationProtection: MutationProtectionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections. ',
        }),
    ).exactOptional(),
    ManagedOwnerName: ServicePrincipleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The owner of the association, used only for associations that are not managed by you. If you use Firewall Manager to manage your DNS Firewalls, then this reports Firewall Manager as the managed owner.',
        }),
    ).exactOptional(),
    Status: FirewallRuleGroupAssociationStatusSchema.and(
      z.any().openapi({ description: 'The current status of the association.' }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'Additional information about the status of the response, if available.',
        }),
    ).exactOptional(),
    CreatorRequestId: CreatorRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp. ',
        }),
    ).exactOptional(),
    CreationTime: Rfc3339TimeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the association was created, in Unix time format and Coordinated Universal Time (UTC). ',
        }),
    ).exactOptional(),
    ModificationTime: Rfc3339TimeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the association was last modified, in Unix time format and Coordinated Universal Time (UTC).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An association between a firewall rule group and a VPC, which enables DNS filtering for the VPC. ',
    required: [],
  })
  .openapi('FirewallRuleGroupAssociation')

const AssociateFirewallRuleGroupResponseSchema = z
  .object({
    FirewallRuleGroupAssociation: FirewallRuleGroupAssociationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The association that you just created. The association has an ID that you can use to identify it in other requests, like update and delete.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateFirewallRuleGroupResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The name for the tag. For example, if you want to associate Resolver resources with the account IDs of your customers for billing purposes, the value of <code>Key</code> might be <code>account-id</code>.',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "The value for the tag. For example, if <code>Key</code> is <code>account-id</code>, then <code>Value</code> might be the ID of the customer account that you're creating the resource for.",
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'One tag that you want to add to the specified resource. A tag consists of a <code>Key</code> (a name for the tag) and a <code>Value</code>.',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).max(200).openapi('TagList')

const AssociateFirewallRuleGroupRequestSchema = z
  .object({
    CreatorRequestId: CreatorRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request and that allows failed requests to be retried without the risk of running the operation twice. <code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp. ',
        }),
    ),
    FirewallRuleGroupId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the firewall rule group. ' }),
    ),
    VpcId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the VPC that you want to associate with the rule group. ',
        }),
    ),
    Priority: PrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The setting that determines the processing order of the rule group among the rule groups that you associate with the specified VPC. DNS Firewall filters VPC traffic starting from the rule group with the lowest numeric priority setting. </p> <p>You must specify a unique priority for each rule group that you associate with a single VPC. To make it easier to insert rule groups later, leave space between the numbers, for example, use 101, 200, and so on. You can change the priority setting for a rule group association after you create it.</p> <p>The allowed values for <code>Priority</code> are between 100 and 9900.</p>',
        }),
    ),
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description: 'A name that lets you identify the association, to manage and use it.',
        }),
    ),
    MutationProtection: MutationProtectionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections. When you create the association, the default setting is <code>DISABLED</code>. ',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the tag keys and values that you want to associate with the rule group association. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CreatorRequestId', 'FirewallRuleGroupId', 'VpcId', 'Priority', 'Name'],
    title: 'AssociateFirewallRuleGroupRequest',
  })
  .openapi('AssociateFirewallRuleGroupRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const InternalServiceErrorExceptionSchema = z.any().openapi('InternalServiceErrorException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const SecurityGroupIdsSchema = z.array(ResourceIdSchema).openapi('SecurityGroupIds')

const ResolverEndpointDirectionSchema = z
  .enum(['INBOUND', 'OUTBOUND'])
  .openapi('ResolverEndpointDirection')

const IpAddressCountSchema = z.int().openapi('IpAddressCount')

const ResolverEndpointStatusSchema = z
  .enum(['CREATING', 'OPERATIONAL', 'UPDATING', 'AUTO_RECOVERING', 'ACTION_NEEDED', 'DELETING'])
  .openapi('ResolverEndpointStatus')

const ResolverEndpointTypeSchema = z
  .enum(['IPV6', 'IPV4', 'DUALSTACK'])
  .openapi('ResolverEndpointType')

const ResolverEndpointSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the Resolver endpoint.' }),
    ).exactOptional(),
    CreatorRequestId: CreatorRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request that created the Resolver endpoint. The <code>CreatorRequestId</code> allows failed requests to be retried without the risk of running the operation twice.',
        }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN (Amazon Resource Name) for the Resolver endpoint.' }),
    ).exactOptional(),
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name that you assigned to the Resolver endpoint when you submitted a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a> request.',
        }),
    ).exactOptional(),
    SecurityGroupIds: SecurityGroupIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound rules (for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.",
        }),
    ).exactOptional(),
    Direction: ResolverEndpointDirectionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the Resolver endpoint allows inbound or outbound DNS queries:</p> <ul> <li> <p> <code>INBOUND</code>: allows DNS queries to your VPC from your network</p> </li> <li> <p> <code>OUTBOUND</code>: allows DNS queries from your VPC to your network</p> </li> </ul>',
        }),
    ).exactOptional(),
    IpAddressCount: IpAddressCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of IP addresses that the Resolver endpoint can use for DNS queries.',
        }),
    ).exactOptional(),
    HostVPCId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the VPC that you want to create the Resolver endpoint in.',
        }),
    ).exactOptional(),
    Status: ResolverEndpointStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A code that specifies the current status of the Resolver endpoint. Valid values include the following:</p> <ul> <li> <p> <code>CREATING</code>: Resolver is creating and configuring one or more Amazon VPC network interfaces for this endpoint.</p> </li> <li> <p> <code>OPERATIONAL</code>: The Amazon VPC network interfaces for this endpoint are correctly configured and able to pass inbound or outbound DNS queries between your network and Resolver.</p> </li> <li> <p> <code>UPDATING</code>: Resolver is associating or disassociating one or more network interfaces with this endpoint.</p> </li> <li> <p> <code>AUTO_RECOVERING</code>: Resolver is trying to recover one or more of the network interfaces that are associated with this endpoint. During the recovery process, the endpoint functions with limited capacity because of the limit on the number of DNS queries per IP address (per network interface). For the current limit, see <a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html#limits-api-entities-resolver\">Limits on Route 53 Resolver</a>.</p> </li> <li> <p> <code>ACTION_NEEDED</code>: This endpoint is unhealthy, and Resolver can't automatically recover it. To resolve the problem, we recommend that you check each IP address that you associated with the endpoint. For each IP address that isn't available, add another IP address and then delete the IP address that isn't available. (An endpoint must always include at least two IP addresses.) A status of <code>ACTION_NEEDED</code> can have a variety of causes. Here are two common causes:</p> <ul> <li> <p>One or more of the network interfaces that are associated with the endpoint were deleted using Amazon VPC.</p> </li> <li> <p>The network interface couldn't be created for some reason that's outside the control of Resolver.</p> </li> </ul> </li> <li> <p> <code>DELETING</code>: Resolver is deleting this endpoint and the associated network interfaces.</p> </li> </ul>",
        }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({ description: 'A detailed description of the status of the Resolver endpoint.' }),
    ).exactOptional(),
    CreationTime: Rfc3339TimeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the endpoint was created, in Unix time format and Coordinated Universal Time (UTC).',
        }),
    ).exactOptional(),
    ModificationTime: Rfc3339TimeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the endpoint was last modified, in Unix time format and Coordinated Universal Time (UTC).',
        }),
    ).exactOptional(),
    ResolverEndpointType: ResolverEndpointTypeSchema.and(
      z.any().openapi({ description: ' The Resolver endpoint IP address type. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html">DeleteResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>, Updates the name, or ResolverEndpointType for an endpoint, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound Resolver endpoint.',
    required: [],
  })
  .openapi('ResolverEndpoint')

const AssociateResolverEndpointIpAddressResponseSchema = z
  .object({
    ResolverEndpoint: ResolverEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The response to an <code>AssociateResolverEndpointIpAddress</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateResolverEndpointIpAddressResponse')

const SubnetIdSchema = z.string().min(1).max(32).openapi('SubnetId')

const IpSchema = z.string().min(7).max(36).openapi('Ip')

const Ipv6Schema = z.string().min(7).max(39).openapi('Ipv6')

const IpAddressUpdateSchema = z
  .object({
    IpId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <i>Only when removing an IP address from a Resolver endpoint</i>: The ID of the IP address that you want to remove. To get this ID, use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>.',
        }),
    ).exactOptional(),
    SubnetId: SubnetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the subnet that includes the IP address that you want to update. To get this ID, use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>.',
        }),
    ).exactOptional(),
    Ip: IpSchema.and(z.any().openapi({ description: 'The new IPv4 address.' })).exactOptional(),
    Ipv6: Ipv6Schema.and(
      z.any().openapi({ description: ' The new IPv6 address. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, information about an IP address to update.',
    required: [],
  })
  .openapi('IpAddressUpdate')

const AssociateResolverEndpointIpAddressRequestSchema = z
  .object({
    ResolverEndpointId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Resolver endpoint that you want to associate IP addresses with.',
        }),
    ),
    IpAddress: IpAddressUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Either the IPv4 address that you want to add to a Resolver endpoint or a subnet ID. If you specify a subnet ID, Resolver chooses an IP address for you from the available IPs in the specified subnet.',
        }),
    ),
  })
  .openapi({
    required: ['ResolverEndpointId', 'IpAddress'],
    title: 'AssociateResolverEndpointIpAddressRequest',
  })
  .openapi('AssociateResolverEndpointIpAddressRequest')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const ResourceExistsExceptionSchema = z.any().openapi('ResourceExistsException')

const ResolverQueryLogConfigAssociationStatusSchema = z
  .enum(['CREATING', 'ACTIVE', 'ACTION_NEEDED', 'DELETING', 'FAILED'])
  .openapi('ResolverQueryLogConfigAssociationStatus')

const ResolverQueryLogConfigAssociationErrorSchema = z
  .enum(['NONE', 'DESTINATION_NOT_FOUND', 'ACCESS_DENIED', 'INTERNAL_SERVICE_ERROR'])
  .openapi('ResolverQueryLogConfigAssociationError')

const ResolverQueryLogConfigAssociationErrorMessageSchema = z
  .string()
  .openapi('ResolverQueryLogConfigAssociationErrorMessage')

const ResolverQueryLogConfigAssociationSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the query logging association.' }),
    ).exactOptional(),
    ResolverQueryLogConfigId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the query logging configuration that a VPC is associated with.',
        }),
    ).exactOptional(),
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon VPC that is associated with the query logging configuration.',
        }),
    ).exactOptional(),
    Status: ResolverQueryLogConfigAssociationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the specified query logging association. Valid values include the following:</p> <ul> <li> <p> <code>CREATING</code>: Resolver is creating an association between an Amazon VPC and a query logging configuration.</p> </li> <li> <p> <code>CREATED</code>: The association between an Amazon VPC and a query logging configuration was successfully created. Resolver is logging queries that originate in the specified VPC.</p> </li> <li> <p> <code>DELETING</code>: Resolver is deleting this query logging association.</p> </li> <li> <p> <code>FAILED</code>: Resolver either couldn't create or couldn't delete the query logging association.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Error: ResolverQueryLogConfigAssociationErrorSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If the value of <code>Status</code> is <code>FAILED</code>, the value of <code>Error</code> indicates the cause:</p> <ul> <li> <p> <code>DESTINATION_NOT_FOUND</code>: The specified destination (for example, an Amazon S3 bucket) was deleted.</p> </li> <li> <p> <code>ACCESS_DENIED</code>: Permissions don't allow sending logs to the destination.</p> </li> </ul> <p>If the value of <code>Status</code> is a value other than <code>FAILED</code>, <code>Error</code> is null. </p>",
        }),
    ).exactOptional(),
    ErrorMessage: ResolverQueryLogConfigAssociationErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains additional information about the error. If the value or <code>Error</code> is null, the value of <code>ErrorMessage</code> also is null.',
        }),
    ).exactOptional(),
    CreationTime: Rfc3339TimeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the VPC was associated with the query logging configuration, in Unix time format and Coordinated Universal Time (UTC).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'In the response to an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigAssociation.html">GetResolverQueryLogConfigAssociation</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>, request, a complex type that contains settings for a specified association between an Amazon VPC and a query logging configuration.',
    required: [],
  })
  .openapi('ResolverQueryLogConfigAssociation')

const AssociateResolverQueryLogConfigResponseSchema = z
  .object({
    ResolverQueryLogConfigAssociation: ResolverQueryLogConfigAssociationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains settings for a specified association between an Amazon VPC and a query logging configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateResolverQueryLogConfigResponse')

const AssociateResolverQueryLogConfigRequestSchema = z
  .object({
    ResolverQueryLogConfigId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the query logging configuration that you want to associate a VPC with.',
        }),
    ),
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of an Amazon VPC that you want this query logging configuration to log queries for.</p> <note> <p>The VPCs and the query logging configuration must be in the same Region.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['ResolverQueryLogConfigId', 'ResourceId'],
    title: 'AssociateResolverQueryLogConfigRequest',
  })
  .openapi('AssociateResolverQueryLogConfigRequest')

const ResolverRuleAssociationStatusSchema = z
  .enum(['CREATING', 'COMPLETE', 'DELETING', 'FAILED', 'OVERRIDDEN'])
  .openapi('ResolverRuleAssociationStatus')

const ResolverRuleAssociationSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the association between a Resolver rule and a VPC. Resolver assigns this value when you submit an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a> request.',
        }),
    ).exactOptional(),
    ResolverRuleId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Resolver rule that you associated with the VPC that is specified by <code>VPCId</code>.',
        }),
    ).exactOptional(),
    Name: NameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of an association between a Resolver rule and a VPC.' }),
    ).exactOptional(),
    VPCId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the VPC that you associated the Resolver rule with.' }),
    ).exactOptional(),
    Status: ResolverRuleAssociationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'A code that specifies the current status of the association between a Resolver rule and a VPC.',
        }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'A detailed description of the status of the association between a Resolver rule and a VPC.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'In the response to an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a> request, provides information about an association between a Resolver rule and a VPC. The association determines which DNS queries that originate in the VPC are forwarded to your network. ',
    required: [],
  })
  .openapi('ResolverRuleAssociation')

const AssociateResolverRuleResponseSchema = z
  .object({
    ResolverRuleAssociation: ResolverRuleAssociationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the <code>AssociateResolverRule</code> request, including the status of the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateResolverRuleResponse')

const AssociateResolverRuleRequestSchema = z
  .object({
    ResolverRuleId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Resolver rule that you want to associate with the VPC. To list the existing Resolver rules, use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>.',
        }),
    ),
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A name for the association that you're creating between a Resolver rule and a VPC.",
        }),
    ).exactOptional(),
    VPCId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the VPC that you want to associate the Resolver rule with.',
        }),
    ),
  })
  .openapi({ required: ['ResolverRuleId', 'VPCId'], title: 'AssociateResolverRuleRequest' })
  .openapi('AssociateResolverRuleRequest')

const ResourceUnavailableExceptionSchema = z.any().openapi('ResourceUnavailableException')

const UnsignedSchema = z.int().openapi('Unsigned')

const FirewallDomainListStatusSchema = z
  .enum(['COMPLETE', 'COMPLETE_IMPORT_FAILED', 'IMPORTING', 'DELETING', 'UPDATING'])
  .openapi('FirewallDomainListStatus')

const FirewallDomainListSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the domain list. ' }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the firewall domain list.' }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the domain list. ' }),
    ).exactOptional(),
    DomainCount: UnsignedSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of domain names that are specified in the domain list.',
        }),
    ).exactOptional(),
    Status: FirewallDomainListStatusSchema.and(
      z.any().openapi({ description: 'The status of the domain list. ' }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'Additional information about the status of the list, if available.',
        }),
    ).exactOptional(),
    ManagedOwnerName: ServicePrincipleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The owner of the list, used only for lists that are not managed by you. For example, the managed domain list <code>AWSManagedDomainsMalwareDomainList</code> has the managed owner name <code>Route 53 Resolver DNS Firewall</code>.',
        }),
    ).exactOptional(),
    CreatorRequestId: CreatorRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp. ',
        }),
    ).exactOptional(),
    CreationTime: Rfc3339TimeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the domain list was created, in Unix time format and Coordinated Universal Time (UTC). ',
        }),
    ).exactOptional(),
    ModificationTime: Rfc3339TimeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the domain list was last modified, in Unix time format and Coordinated Universal Time (UTC). ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>High-level information about a list of firewall domains for use in a <a>FirewallRule</a>. This is returned by <a>GetFirewallDomainList</a>.</p> <p>To retrieve the domains that are defined for this domain list, call <a>ListFirewallDomains</a>.</p>',
    required: [],
  })
  .openapi('FirewallDomainList')

const CreateFirewallDomainListResponseSchema = z
  .object({
    FirewallDomainList: FirewallDomainListSchema.and(
      z.any().openapi({ description: 'The domain list that you just created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFirewallDomainListResponse')

const CreateFirewallDomainListRequestSchema = z
  .object({
    CreatorRequestId: CreatorRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request and that allows you to retry failed requests without the risk of running the operation twice. <code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp. ',
        }),
    ),
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description: 'A name that lets you identify the domain list to manage and use it.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the tag keys and values that you want to associate with the domain list. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CreatorRequestId', 'Name'], title: 'CreateFirewallDomainListRequest' })
  .openapi('CreateFirewallDomainListRequest')

const ActionSchema = z.enum(['ALLOW', 'BLOCK', 'ALERT']).openapi('Action')

const BlockResponseSchema = z.enum(['NODATA', 'NXDOMAIN', 'OVERRIDE']).openapi('BlockResponse')

const BlockOverrideDomainSchema = z.string().min(1).max(255).openapi('BlockOverrideDomain')

const BlockOverrideDnsTypeSchema = z.literal('CNAME').openapi('BlockOverrideDnsType')

const FirewallRuleSchema = z
  .object({
    FirewallRuleGroupId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier of the firewall rule group of the rule. ' }),
    ).exactOptional(),
    FirewallDomainListId: ResourceIdSchema.and(
      z.any().openapi({ description: "The ID of the domain list that's used in the rule. " }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the rule. ' }),
    ).exactOptional(),
    Priority: PrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            'The priority of the rule in the rule group. This value must be unique within the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.',
        }),
    ).exactOptional(),
    Action: ActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list:</p> <ul> <li> <p> <code>ALLOW</code> - Permit the request to go through.</p> </li> <li> <p> <code>ALERT</code> - Permit the request to go through but send an alert to the logs.</p> </li> <li> <p> <code>BLOCK</code> - Disallow the request. If this is specified, additional handling details are provided in the rule's <code>BlockResponse</code> setting. </p> </li> </ul>",
        }),
    ).exactOptional(),
    BlockResponse: BlockResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The way that you want DNS Firewall to block the request. Used for the rule action setting <code>BLOCK</code>.</p> <ul> <li> <p> <code>NODATA</code> - Respond indicating that the query was successful, but no response is available for it.</p> </li> <li> <p> <code>NXDOMAIN</code> - Respond indicating that the domain name that's in the query doesn't exist.</p> </li> <li> <p> <code>OVERRIDE</code> - Provide a custom override in the response. This option requires custom handling details in the rule's <code>BlockOverride*</code> settings. </p> </li> </ul>",
        }),
    ).exactOptional(),
    BlockOverrideDomain: BlockOverrideDomainSchema.and(
      z
        .any()
        .openapi({
          description:
            'The custom DNS record to send back in response to the query. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.',
        }),
    ).exactOptional(),
    BlockOverrideDnsType: BlockOverrideDnsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The DNS record's type. This determines the format of the record value that you provided in <code>BlockOverrideDomain</code>. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.",
        }),
    ).exactOptional(),
    BlockOverrideTtl: UnsignedSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.',
        }),
    ).exactOptional(),
    CreatorRequestId: CreatorRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of executing the operation twice. This can be any unique string, for example, a timestamp. ',
        }),
    ).exactOptional(),
    CreationTime: Rfc3339TimeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the rule was created, in Unix time format and Coordinated Universal Time (UTC). ',
        }),
    ).exactOptional(),
    ModificationTime: Rfc3339TimeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the rule was last modified, in Unix time format and Coordinated Universal Time (UTC).',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A single firewall rule in a rule group.', required: [] })
  .openapi('FirewallRule')

const CreateFirewallRuleResponseSchema = z
  .object({
    FirewallRule: FirewallRuleSchema.and(
      z.any().openapi({ description: 'The firewall rule that you just created. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFirewallRuleResponse')

const BlockOverrideTtlSchema = z.int().min(0).max(604800).openapi('BlockOverrideTtl')

const CreateFirewallRuleRequestSchema = z
  .object({
    CreatorRequestId: CreatorRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request and that allows you to retry failed requests without the risk of running the operation twice. <code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp. ',
        }),
    ),
    FirewallRuleGroupId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the firewall rule group where you want to create the rule. ',
        }),
    ),
    FirewallDomainListId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the domain list that you want to use in the rule. ' }),
    ),
    Priority: PrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The setting that determines the processing order of the rule in the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.</p> <p>You must specify a unique priority for each rule in a rule group. To make it easier to insert rules later, leave space between the numbers, for example, use 100, 200, and so on. You can change the priority setting for the rules in a rule group at any time.</p>',
        }),
    ),
    Action: ActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list:</p> <ul> <li> <p> <code>ALLOW</code> - Permit the request to go through.</p> </li> <li> <p> <code>ALERT</code> - Permit the request and send metrics and logs to Cloud Watch.</p> </li> <li> <p> <code>BLOCK</code> - Disallow the request. This option requires additional details in the rule's <code>BlockResponse</code>. </p> </li> </ul>",
        }),
    ),
    BlockResponse: BlockResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The way that you want DNS Firewall to block the request, used with the rule action setting <code>BLOCK</code>. </p> <ul> <li> <p> <code>NODATA</code> - Respond indicating that the query was successful, but no response is available for it.</p> </li> <li> <p> <code>NXDOMAIN</code> - Respond indicating that the domain name that's in the query doesn't exist.</p> </li> <li> <p> <code>OVERRIDE</code> - Provide a custom override in the response. This option requires custom handling details in the rule's <code>BlockOverride*</code> settings. </p> </li> </ul> <p>This setting is required if the rule action setting is <code>BLOCK</code>.</p>",
        }),
    ).exactOptional(),
    BlockOverrideDomain: BlockOverrideDomainSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The custom DNS record to send back in response to the query. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p> <p>This setting is required if the <code>BlockResponse</code> setting is <code>OVERRIDE</code>.</p>',
        }),
    ).exactOptional(),
    BlockOverrideDnsType: BlockOverrideDnsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The DNS record's type. This determines the format of the record value that you provided in <code>BlockOverrideDomain</code>. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p> <p>This setting is required if the <code>BlockResponse</code> setting is <code>OVERRIDE</code>.</p>",
        }),
    ).exactOptional(),
    BlockOverrideTtl: BlockOverrideTtlSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.</p> <p>This setting is required if the <code>BlockResponse</code> setting is <code>OVERRIDE</code>.</p>',
        }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'A name that lets you identify the rule in the rule group.' }),
    ),
  })
  .openapi({
    required: [
      'CreatorRequestId',
      'FirewallRuleGroupId',
      'FirewallDomainListId',
      'Priority',
      'Action',
      'Name',
    ],
    title: 'CreateFirewallRuleRequest',
  })
  .openapi('CreateFirewallRuleRequest')

const FirewallRuleGroupStatusSchema = z
  .enum(['COMPLETE', 'DELETING', 'UPDATING'])
  .openapi('FirewallRuleGroupStatus')

const AccountIdSchema = z.string().min(12).max(32).openapi('AccountId')

const ShareStatusSchema = z
  .enum(['NOT_SHARED', 'SHARED_WITH_ME', 'SHARED_BY_ME'])
  .openapi('ShareStatus')

const FirewallRuleGroupSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the rule group. ' }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN (Amazon Resource Name) of the rule group.' }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the rule group.' }),
    ).exactOptional(),
    RuleCount: UnsignedSchema.and(
      z.any().openapi({ description: 'The number of rules in the rule group.' }),
    ).exactOptional(),
    Status: FirewallRuleGroupStatusSchema.and(
      z.any().openapi({ description: 'The status of the domain list. ' }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'Additional information about the status of the rule group, if available.',
        }),
    ).exactOptional(),
    OwnerId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID for the account that created the rule group. When a rule group is shared with your account, this is the account that has shared the rule group with you. ',
        }),
    ).exactOptional(),
    CreatorRequestId: CreatorRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp. ',
        }),
    ).exactOptional(),
    ShareStatus: ShareStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the rule group is shared with other Amazon Web Services accounts, or was shared with the current account by another Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM).',
        }),
    ).exactOptional(),
    CreationTime: Rfc3339TimeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the rule group was created, in Unix time format and Coordinated Universal Time (UTC). ',
        }),
    ).exactOptional(),
    ModificationTime: Rfc3339TimeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the rule group was last modified, in Unix time format and Coordinated Universal Time (UTC).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'High-level information for a firewall rule group. A firewall rule group is a collection of rules that DNS Firewall uses to filter DNS network traffic for a VPC. To retrieve the rules for the rule group, call <a>ListFirewallRules</a>.',
    required: [],
  })
  .openapi('FirewallRuleGroup')

const CreateFirewallRuleGroupResponseSchema = z
  .object({
    FirewallRuleGroup: FirewallRuleGroupSchema.and(
      z
        .any()
        .openapi({ description: 'A collection of rules used to filter DNS network traffic. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFirewallRuleGroupResponse')

const CreateFirewallRuleGroupRequestSchema = z
  .object({
    CreatorRequestId: CreatorRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp. ',
        }),
    ),
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description: 'A name that lets you identify the rule group, to manage and use it.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the tag keys and values that you want to associate with the rule group. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CreatorRequestId', 'Name'], title: 'CreateFirewallRuleGroupRequest' })
  .openapi('CreateFirewallRuleGroupRequest')

const CreateResolverEndpointResponseSchema = z
  .object({
    ResolverEndpoint: ResolverEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the <code>CreateResolverEndpoint</code> request, including the status of the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateResolverEndpointResponse')

const IpAddressRequestSchema = z
  .object({
    SubnetId: SubnetIdSchema.and(
      z.any().openapi({ description: 'The ID of the subnet that contains the IP address. ' }),
    ),
    Ip: IpSchema.and(
      z.any().openapi({ description: 'The IPv4 address that you want to use for DNS queries.' }),
    ).exactOptional(),
    Ipv6: Ipv6Schema.and(
      z.any().openapi({ description: ' The IPv6 address that you want to use for DNS queries. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SubnetId'],
    description:
      'In a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a> request, the IP address that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). <code>IpAddressRequest</code> also includes the ID of the subnet that contains the IP address.',
  })
  .openapi('IpAddressRequest')

const IpAddressesRequestSchema = z
  .array(IpAddressRequestSchema)
  .min(1)
  .max(20)
  .openapi('IpAddressesRequest')

const CreateResolverEndpointRequestSchema = z
  .object({
    CreatorRequestId: CreatorRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request and that allows failed requests to be retried without the risk of running the operation twice. <code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp. ',
        }),
    ),
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.',
        }),
    ).exactOptional(),
    SecurityGroupIds: SecurityGroupIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of one or more security groups that you want to use to control access to this VPC. The security group that you specify must include one or more inbound rules (for inbound Resolver endpoints) or outbound rules (for outbound Resolver endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.",
        }),
    ),
    Direction: ResolverEndpointDirectionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify the applicable value:</p> <ul> <li> <p> <code>INBOUND</code>: Resolver forwards DNS queries to the DNS service for a VPC from your network</p> </li> <li> <p> <code>OUTBOUND</code>: Resolver forwards DNS queries from the DNS service for a VPC to your network</p> </li> </ul>',
        }),
    ),
    IpAddresses: IpAddressesRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            'The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). The subnet ID uniquely identifies a VPC. ',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the tag keys and values that you want to associate with the endpoint.',
        }),
    ).exactOptional(),
    ResolverEndpointType: ResolverEndpointTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' For the endpoint type you can choose either IPv4, IPv6. or dual-stack. A dual-stack endpoint means that it will resolve via both IPv4 and IPv6. This endpoint type is applied to all IP addresses. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CreatorRequestId', 'SecurityGroupIds', 'Direction', 'IpAddresses'],
    title: 'CreateResolverEndpointRequest',
  })
  .openapi('CreateResolverEndpointRequest')

const ResolverQueryLogConfigStatusSchema = z
  .enum(['CREATING', 'CREATED', 'DELETING', 'FAILED'])
  .openapi('ResolverQueryLogConfigStatus')

const CountSchema = z.int().openapi('Count')

const ResolverQueryLogConfigNameSchema = z
  .string()
  .regex(/(?!^[0-9]+$)([a-zA-Z0-9\-_' ']+)/)
  .min(1)
  .max(64)
  .openapi('ResolverQueryLogConfigName')

const DestinationArnSchema = z.string().min(1).max(600).openapi('DestinationArn')

const ResolverQueryLogConfigSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID for the query logging configuration.' }),
    ).exactOptional(),
    OwnerId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID for the account that created the query logging configuration. ',
        }),
    ).exactOptional(),
    Status: ResolverQueryLogConfigStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the specified query logging configuration. Valid values include the following:</p> <ul> <li> <p> <code>CREATING</code>: Resolver is creating the query logging configuration.</p> </li> <li> <p> <code>CREATED</code>: The query logging configuration was successfully created. Resolver is logging queries that originate in the specified VPC.</p> </li> <li> <p> <code>DELETING</code>: Resolver is deleting this query logging configuration.</p> </li> <li> <p> <code>FAILED</code>: Resolver can't deliver logs to the location that is specified in the query logging configuration. Here are two common causes:</p> <ul> <li> <p>The specified destination (for example, an Amazon S3 bucket) was deleted.</p> </li> <li> <p>Permissions don't allow sending logs to the destination.</p> </li> </ul> </li> </ul>",
        }),
    ).exactOptional(),
    ShareStatus: ShareStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'An indication of whether the query logging configuration is shared with other Amazon Web Services accounts, or was shared with the current account by another Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM).',
        }),
    ).exactOptional(),
    AssociationCount: CountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of VPCs that are associated with the query logging configuration.',
        }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN for the query logging configuration.' }),
    ).exactOptional(),
    Name: ResolverQueryLogConfigNameSchema.and(
      z.any().openapi({ description: 'The name of the query logging configuration. ' }),
    ).exactOptional(),
    DestinationArn: DestinationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the resource that you want Resolver to send query logs: an Amazon S3 bucket, a CloudWatch Logs log group, or a Kinesis Data Firehose delivery stream.',
        }),
    ).exactOptional(),
    CreatorRequestId: CreatorRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request that created the query logging configuration. The <code>CreatorRequestId</code> allows failed requests to be retried without the risk of running the operation twice.',
        }),
    ).exactOptional(),
    CreationTime: Rfc3339TimeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the query logging configuration was created, in Unix time format and Coordinated Universal Time (UTC).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverQueryLogConfig.html">CreateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverQueryLogConfig.html">DeleteResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfig.html">GetResolverQueryLogConfig</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a> request, a complex type that contains settings for one query logging configuration.',
    required: [],
  })
  .openapi('ResolverQueryLogConfig')

const CreateResolverQueryLogConfigResponseSchema = z
  .object({
    ResolverQueryLogConfig: ResolverQueryLogConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the <code>CreateResolverQueryLogConfig</code> request, including the status of the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateResolverQueryLogConfigResponse')

const CreateResolverQueryLogConfigRequestSchema = z
  .object({
    Name: ResolverQueryLogConfigNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name that you want to give the query logging configuration.',
        }),
    ),
    DestinationArn: DestinationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the resource that you want Resolver to send query logs. You can send query logs to an S3 bucket, a CloudWatch Logs log group, or a Kinesis Data Firehose delivery stream. Examples of valid values include the following:</p> <ul> <li> <p> <b>S3 bucket</b>: </p> <p> <code>arn:aws:s3:::examplebucket</code> </p> <p>You can optionally append a file prefix to the end of the ARN.</p> <p> <code>arn:aws:s3:::examplebucket/development/</code> </p> </li> <li> <p> <b>CloudWatch Logs log group</b>: </p> <p> <code>arn:aws:logs:us-west-1:123456789012:log-group:/mystack-testgroup-12ABC1AB12A1:*</code> </p> </li> <li> <p> <b>Kinesis Data Firehose delivery stream</b>:</p> <p> <code>arn:aws:kinesis:us-east-2:0123456789:stream/my_stream_name</code> </p> </li> </ul>',
        }),
    ),
    CreatorRequestId: CreatorRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request and that allows failed requests to be retried without the risk of running the operation twice. <code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp. ',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the tag keys and values that you want to associate with the query logging configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'DestinationArn', 'CreatorRequestId'],
    title: 'CreateResolverQueryLogConfigRequest',
  })
  .openapi('CreateResolverQueryLogConfigRequest')

const DomainNameSchema = z.string().min(1).max(256).openapi('DomainName')

const ResolverRuleStatusSchema = z
  .enum(['COMPLETE', 'DELETING', 'UPDATING', 'FAILED'])
  .openapi('ResolverRuleStatus')

const RuleTypeOptionSchema = z.enum(['FORWARD', 'SYSTEM', 'RECURSIVE']).openapi('RuleTypeOption')

const PortSchema = z.int().min(0).max(65535).openapi('Port')

const TargetAddressSchema = z
  .object({
    Ip: IpSchema.and(
      z.any().openapi({ description: 'One IPv4 address that you want to forward DNS queries to.' }),
    ).exactOptional(),
    Port: PortSchema.and(
      z
        .any()
        .openapi({
          description: 'The port at <code>Ip</code> that you want to forward DNS queries to.',
        }),
    ).exactOptional(),
    Ipv6: Ipv6Schema.and(
      z
        .any()
        .openapi({ description: ' One IPv6 address that you want to forward DNS queries to. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'In a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a> request, an array of the IPs that you want to forward DNS queries to.',
    required: [],
  })
  .openapi('TargetAddress')

const TargetListSchema = z.array(TargetAddressSchema).min(1).openapi('TargetList')

const ResolverRuleSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID that Resolver assigned to the Resolver rule when you created it.',
        }),
    ).exactOptional(),
    CreatorRequestId: CreatorRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that you specified when you created the Resolver rule. <code>CreatorRequestId</code> identifies the request and allows failed requests to be retried without the risk of running the operation twice. ',
        }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN (Amazon Resource Name) for the Resolver rule specified by <code>Id</code>.',
        }),
    ).exactOptional(),
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'DNS queries for this domain name are forwarded to the IP addresses that are specified in <code>TargetIps</code>. If a query matches multiple Resolver rules (example.com and www.example.com), the query is routed using the Resolver rule that contains the most specific domain name (www.example.com).',
        }),
    ).exactOptional(),
    Status: ResolverRuleStatusSchema.and(
      z
        .any()
        .openapi({ description: 'A code that specifies the current status of the Resolver rule.' }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z.any().openapi({ description: 'A detailed description of the status of a Resolver rule.' }),
    ).exactOptional(),
    RuleType: RuleTypeOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When you want to forward DNS queries for specified domain name to resolvers on your network, specify <code>FORWARD</code>.</p> <p>When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify <code>SYSTEM</code>.</p> <p>For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify <code>FORWARD</code> for <code>RuleType</code>. To then have Resolver process queries for apex.example.com, you create a rule and specify <code>SYSTEM</code> for <code>RuleType</code>.</p> <p>Currently, only Resolver can create rules that have a value of <code>RECURSIVE</code> for <code>RuleType</code>.</p>',
        }),
    ).exactOptional(),
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name for the Resolver rule, which you specified when you created the Resolver rule.',
        }),
    ).exactOptional(),
    TargetIps: TargetListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. Typically, these are the IP addresses of DNS resolvers on your network. Specify IPv4 addresses. IPv6 is not supported.',
        }),
    ).exactOptional(),
    ResolverEndpointId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the endpoint that the rule is associated with.' }),
    ).exactOptional(),
    OwnerId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'When a rule is shared with another Amazon Web Services account, the account ID of the account that the rule is shared with.',
        }),
    ).exactOptional(),
    ShareStatus: ShareStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the rule is shared and, if so, whether the current account is sharing the rule with another account, or another account is sharing the rule with the current account.',
        }),
    ).exactOptional(),
    CreationTime: Rfc3339TimeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the Resolver rule was created, in Unix time format and Coordinated Universal Time (UTC).',
        }),
    ).exactOptional(),
    ModificationTime: Rfc3339TimeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the Resolver rule was last updated, in Unix time format and Coordinated Universal Time (UTC).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'For queries that originate in your VPC, detailed information about a Resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html">DeleteResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request.',
    required: [],
  })
  .openapi('ResolverRule')

const CreateResolverRuleResponseSchema = z
  .object({
    ResolverRule: ResolverRuleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the <code>CreateResolverRule</code> request, including the status of the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateResolverRuleResponse')

const CreateResolverRuleRequestSchema = z
  .object({
    CreatorRequestId: CreatorRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string that identifies the request and that allows failed requests to be retried without the risk of running the operation twice. <code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp. ',
        }),
    ),
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console.',
        }),
    ).exactOptional(),
    RuleType: RuleTypeOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When you want to forward DNS queries for specified domain name to resolvers on your network, specify <code>FORWARD</code>.</p> <p>When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify <code>SYSTEM</code>.</p> <p>For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify <code>FORWARD</code> for <code>RuleType</code>. To then have Resolver process queries for apex.example.com, you create a rule and specify <code>SYSTEM</code> for <code>RuleType</code>.</p> <p>Currently, only Resolver can create rules that have a value of <code>RECURSIVE</code> for <code>RuleType</code>.</p>',
        }),
    ),
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'DNS queries for this domain name are forwarded to the IP addresses that you specify in <code>TargetIps</code>. If a query matches multiple Resolver rules (example.com and www.example.com), outbound DNS queries are routed using the Resolver rule that contains the most specific domain name (www.example.com).',
        }),
    ),
    TargetIps: TargetListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IPs that you want Resolver to forward DNS queries to. You can specify only IPv4 addresses. Separate IP addresses with a space.</p> <p> <code>TargetIps</code> is available only when the value of <code>Rule type</code> is <code>FORWARD</code>.</p>',
        }),
    ).exactOptional(),
    ResolverEndpointId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the outbound Resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify in <code>TargetIps</code>.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the tag keys and values that you want to associate with the endpoint.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CreatorRequestId', 'RuleType', 'DomainName'],
    title: 'CreateResolverRuleRequest',
  })
  .openapi('CreateResolverRuleRequest')

const DeleteFirewallDomainListResponseSchema = z
  .object({
    FirewallDomainList: FirewallDomainListSchema.and(
      z.any().openapi({ description: 'The domain list that you just deleted. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteFirewallDomainListResponse')

const DeleteFirewallDomainListRequestSchema = z
  .object({
    FirewallDomainListId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the domain list that you want to delete. ' }),
    ),
  })
  .openapi({ required: ['FirewallDomainListId'], title: 'DeleteFirewallDomainListRequest' })
  .openapi('DeleteFirewallDomainListRequest')

const DeleteFirewallRuleResponseSchema = z
  .object({
    FirewallRule: FirewallRuleSchema.and(
      z
        .any()
        .openapi({ description: 'The specification for the firewall rule that you just deleted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteFirewallRuleResponse')

const DeleteFirewallRuleRequestSchema = z
  .object({
    FirewallRuleGroupId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the firewall rule group that you want to delete the rule from. ',
        }),
    ),
    FirewallDomainListId: ResourceIdSchema.and(
      z.any().openapi({ description: "The ID of the domain list that's used in the rule. " }),
    ),
  })
  .openapi({
    required: ['FirewallRuleGroupId', 'FirewallDomainListId'],
    title: 'DeleteFirewallRuleRequest',
  })
  .openapi('DeleteFirewallRuleRequest')

const DeleteFirewallRuleGroupResponseSchema = z
  .object({
    FirewallRuleGroup: FirewallRuleGroupSchema.and(
      z
        .any()
        .openapi({ description: 'A collection of rules used to filter DNS network traffic. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteFirewallRuleGroupResponse')

const DeleteFirewallRuleGroupRequestSchema = z
  .object({
    FirewallRuleGroupId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier of the firewall rule group that you want to delete. ',
        }),
    ),
  })
  .openapi({ required: ['FirewallRuleGroupId'], title: 'DeleteFirewallRuleGroupRequest' })
  .openapi('DeleteFirewallRuleGroupRequest')

const DeleteResolverEndpointResponseSchema = z
  .object({
    ResolverEndpoint: ResolverEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the <code>DeleteResolverEndpoint</code> request, including the status of the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteResolverEndpointResponse')

const DeleteResolverEndpointRequestSchema = z
  .object({
    ResolverEndpointId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the Resolver endpoint that you want to delete.' }),
    ),
  })
  .openapi({ required: ['ResolverEndpointId'], title: 'DeleteResolverEndpointRequest' })
  .openapi('DeleteResolverEndpointRequest')

const DeleteResolverQueryLogConfigResponseSchema = z
  .object({
    ResolverQueryLogConfig: ResolverQueryLogConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the query logging configuration that you deleted, including the status of the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteResolverQueryLogConfigResponse')

const DeleteResolverQueryLogConfigRequestSchema = z
  .object({
    ResolverQueryLogConfigId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the query logging configuration that you want to delete.',
        }),
    ),
  })
  .openapi({ required: ['ResolverQueryLogConfigId'], title: 'DeleteResolverQueryLogConfigRequest' })
  .openapi('DeleteResolverQueryLogConfigRequest')

const DeleteResolverRuleResponseSchema = z
  .object({
    ResolverRule: ResolverRuleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the <code>DeleteResolverRule</code> request, including the status of the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteResolverRuleResponse')

const DeleteResolverRuleRequestSchema = z
  .object({
    ResolverRuleId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the Resolver rule that you want to delete.' }),
    ),
  })
  .openapi({ required: ['ResolverRuleId'], title: 'DeleteResolverRuleRequest' })
  .openapi('DeleteResolverRuleRequest')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const DisassociateFirewallRuleGroupResponseSchema = z
  .object({
    FirewallRuleGroupAssociation: FirewallRuleGroupAssociationSchema.and(
      z
        .any()
        .openapi({ description: 'The firewall rule group association that you just removed. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociateFirewallRuleGroupResponse')

const DisassociateFirewallRuleGroupRequestSchema = z
  .object({
    FirewallRuleGroupAssociationId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the <a>FirewallRuleGroupAssociation</a>. ' }),
    ),
  })
  .openapi({
    required: ['FirewallRuleGroupAssociationId'],
    title: 'DisassociateFirewallRuleGroupRequest',
  })
  .openapi('DisassociateFirewallRuleGroupRequest')

const DisassociateResolverEndpointIpAddressResponseSchema = z
  .object({
    ResolverEndpoint: ResolverEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The response to an <code>DisassociateResolverEndpointIpAddress</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociateResolverEndpointIpAddressResponse')

const DisassociateResolverEndpointIpAddressRequestSchema = z
  .object({
    ResolverEndpointId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Resolver endpoint that you want to disassociate an IP address from.',
        }),
    ),
    IpAddress: IpAddressUpdateSchema.and(
      z
        .any()
        .openapi({
          description: 'The IPv4 address that you want to remove from a Resolver endpoint.',
        }),
    ),
  })
  .openapi({
    required: ['ResolverEndpointId', 'IpAddress'],
    title: 'DisassociateResolverEndpointIpAddressRequest',
  })
  .openapi('DisassociateResolverEndpointIpAddressRequest')

const DisassociateResolverQueryLogConfigResponseSchema = z
  .object({
    ResolverQueryLogConfigAssociation: ResolverQueryLogConfigAssociationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains settings for the association that you deleted between an Amazon VPC and a query logging configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociateResolverQueryLogConfigResponse')

const DisassociateResolverQueryLogConfigRequestSchema = z
  .object({
    ResolverQueryLogConfigId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the query logging configuration that you want to disassociate a specified VPC from.',
        }),
    ),
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon VPC that you want to disassociate from a specified query logging configuration.',
        }),
    ),
  })
  .openapi({
    required: ['ResolverQueryLogConfigId', 'ResourceId'],
    title: 'DisassociateResolverQueryLogConfigRequest',
  })
  .openapi('DisassociateResolverQueryLogConfigRequest')

const DisassociateResolverRuleResponseSchema = z
  .object({
    ResolverRuleAssociation: ResolverRuleAssociationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the <code>DisassociateResolverRule</code> request, including the status of the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociateResolverRuleResponse')

const DisassociateResolverRuleRequestSchema = z
  .object({
    VPCId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the VPC that you want to disassociate the Resolver rule from.',
        }),
    ),
    ResolverRuleId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Resolver rule that you want to disassociate from the specified VPC.',
        }),
    ),
  })
  .openapi({ required: ['VPCId', 'ResolverRuleId'], title: 'DisassociateResolverRuleRequest' })
  .openapi('DisassociateResolverRuleRequest')

const FirewallFailOpenStatusSchema = z
  .enum(['ENABLED', 'DISABLED', 'USE_LOCAL_RESOURCE_SETTING'])
  .openapi('FirewallFailOpenStatus')

const FirewallConfigSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the firewall configuration.' }),
    ).exactOptional(),
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the VPC that this firewall configuration applies to.' }),
    ).exactOptional(),
    OwnerId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID of the owner of the VPC that this firewall configuration applies to.',
        }),
    ).exactOptional(),
    FirewallFailOpen: FirewallFailOpenStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines how DNS Firewall operates during failures, for example when all traffic that is sent to DNS Firewall fails to receive a reply. </p> <ul> <li> <p>By default, fail open is disabled, which means the failure mode is closed. This approach favors security over availability. DNS Firewall returns a failure error when it is unable to properly evaluate a query. </p> </li> <li> <p>If you enable this option, the failure mode is open. This approach favors availability over security. DNS Firewall allows queries to proceed if it is unable to properly evaluate them. </p> </li> </ul> <p>This behavior is only enforced for VPCs that have at least one DNS Firewall rule group association. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). ',
    required: [],
  })
  .openapi('FirewallConfig')

const GetFirewallConfigResponseSchema = z
  .object({
    FirewallConfig: FirewallConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration of the firewall behavior provided by DNS Firewall for a single VPC from AmazonVPC. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFirewallConfigResponse')

const GetFirewallConfigRequestSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the VPC from Amazon VPC that the configuration is for.',
        }),
    ),
  })
  .openapi({ required: ['ResourceId'], title: 'GetFirewallConfigRequest' })
  .openapi('GetFirewallConfigRequest')

const GetFirewallDomainListResponseSchema = z
  .object({
    FirewallDomainList: FirewallDomainListSchema.and(
      z.any().openapi({ description: 'The domain list that you requested. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFirewallDomainListResponse')

const GetFirewallDomainListRequestSchema = z
  .object({
    FirewallDomainListId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the domain list. ' }),
    ),
  })
  .openapi({ required: ['FirewallDomainListId'], title: 'GetFirewallDomainListRequest' })
  .openapi('GetFirewallDomainListRequest')

const GetFirewallRuleGroupResponseSchema = z
  .object({
    FirewallRuleGroup: FirewallRuleGroupSchema.and(
      z
        .any()
        .openapi({ description: 'A collection of rules used to filter DNS network traffic. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFirewallRuleGroupResponse')

const GetFirewallRuleGroupRequestSchema = z
  .object({
    FirewallRuleGroupId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the firewall rule group. ' }),
    ),
  })
  .openapi({ required: ['FirewallRuleGroupId'], title: 'GetFirewallRuleGroupRequest' })
  .openapi('GetFirewallRuleGroupRequest')

const GetFirewallRuleGroupAssociationResponseSchema = z
  .object({
    FirewallRuleGroupAssociation: FirewallRuleGroupAssociationSchema.and(
      z.any().openapi({ description: 'The association that you requested. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFirewallRuleGroupAssociationResponse')

const GetFirewallRuleGroupAssociationRequestSchema = z
  .object({
    FirewallRuleGroupAssociationId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the <a>FirewallRuleGroupAssociation</a>. ' }),
    ),
  })
  .openapi({
    required: ['FirewallRuleGroupAssociationId'],
    title: 'GetFirewallRuleGroupAssociationRequest',
  })
  .openapi('GetFirewallRuleGroupAssociationRequest')

const FirewallRuleGroupPolicySchema = z.string().max(30000).openapi('FirewallRuleGroupPolicy')

const GetFirewallRuleGroupPolicyResponseSchema = z
  .object({
    FirewallRuleGroupPolicy: FirewallRuleGroupPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'The Identity and Access Management (Amazon Web Services IAM) policy for sharing the specified rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFirewallRuleGroupPolicyResponse')

const GetFirewallRuleGroupPolicyRequestSchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN (Amazon Resource Name) for the rule group.' }),
    ),
  })
  .openapi({ required: ['Arn'], title: 'GetFirewallRuleGroupPolicyRequest' })
  .openapi('GetFirewallRuleGroupPolicyRequest')

const ResolverAutodefinedReverseStatusSchema = z
  .enum([
    'ENABLING',
    'ENABLED',
    'DISABLING',
    'DISABLED',
    'UPDATING_TO_USE_LOCAL_RESOURCE_SETTING',
    'USE_LOCAL_RESOURCE_SETTING',
  ])
  .openapi('ResolverAutodefinedReverseStatus')

const ResolverConfigSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'ID for the Resolver configuration.' }),
    ).exactOptional(),
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the Amazon Virtual Private Cloud VPC that you're configuring Resolver for.",
        }),
    ).exactOptional(),
    OwnerId: AccountIdSchema.and(
      z
        .any()
        .openapi({ description: 'The owner account ID of the Amazon Virtual Private Cloud VPC.' }),
    ).exactOptional(),
    AutodefinedReverse: ResolverAutodefinedReverseStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The status of whether or not the Resolver will create autodefined rules for reverse DNS lookups. This is enabled by default. The status can be one of following:</p> <ul> <li> <p> <b>ENABLING:</b> Autodefined rules for reverse DNS lookups are being enabled but are not complete.</p> </li> <li> <p> <b>ENABLED:</b> Autodefined rules for reverse DNS lookups are enabled.</p> </li> <li> <p> <b>DISABLING:</b> Autodefined rules for reverse DNS lookups are being disabled but are not complete.</p> </li> <li> <p> <b>DISABLED:</b> Autodefined rules for reverse DNS lookups are disabled.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A complex type that contains information about a Resolver configuration for a VPC.',
    required: [],
  })
  .openapi('ResolverConfig')

const GetResolverConfigResponseSchema = z
  .object({
    ResolverConfig: ResolverConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the behavior configuration of Route 53 Resolver behavior for the VPC you specified in the <code>GetResolverConfig</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResolverConfigResponse')

const GetResolverConfigRequestSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Resource ID of the Amazon VPC that you want to get information about.',
        }),
    ),
  })
  .openapi({ required: ['ResourceId'], title: 'GetResolverConfigRequest' })
  .openapi('GetResolverConfigRequest')

const ResolverDNSSECValidationStatusSchema = z
  .enum([
    'ENABLING',
    'ENABLED',
    'DISABLING',
    'DISABLED',
    'UPDATING_TO_USE_LOCAL_RESOURCE_SETTING',
    'USE_LOCAL_RESOURCE_SETTING',
  ])
  .openapi('ResolverDNSSECValidationStatus')

const ResolverDnssecConfigSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID for a configuration for DNSSEC validation.' }),
    ).exactOptional(),
    OwnerId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The owner account ID of the virtual private cloud (VPC) for a configuration for DNSSEC validation.',
        }),
    ).exactOptional(),
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the virtual private cloud (VPC) that you're configuring the DNSSEC validation status for.",
        }),
    ).exactOptional(),
    ValidationStatus: ResolverDNSSECValidationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The validation status for a DNSSEC configuration. The status can be one of the following:</p> <ul> <li> <p> <b>ENABLING:</b> DNSSEC validation is being enabled but is not complete.</p> </li> <li> <p> <b>ENABLED:</b> DNSSEC validation is enabled.</p> </li> <li> <p> <b>DISABLING:</b> DNSSEC validation is being disabled but is not complete.</p> </li> <li> <p> <b>DISABLED</b> DNSSEC validation is disabled.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A complex type that contains information about a configuration for DNSSEC validation.',
    required: [],
  })
  .openapi('ResolverDnssecConfig')

const GetResolverDnssecConfigResponseSchema = z
  .object({
    ResolverDNSSECConfig: ResolverDnssecConfigSchema.and(
      z
        .any()
        .openapi({ description: 'The information about a configuration for DNSSEC validation.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResolverDnssecConfigResponse')

const GetResolverDnssecConfigRequestSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the virtual private cloud (VPC) for the DNSSEC validation status.',
        }),
    ),
  })
  .openapi({ required: ['ResourceId'], title: 'GetResolverDnssecConfigRequest' })
  .openapi('GetResolverDnssecConfigRequest')

const GetResolverEndpointResponseSchema = z
  .object({
    ResolverEndpoint: ResolverEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the Resolver endpoint that you specified in a <code>GetResolverEndpoint</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResolverEndpointResponse')

const GetResolverEndpointRequestSchema = z
  .object({
    ResolverEndpointId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Resolver endpoint that you want to get information about.',
        }),
    ),
  })
  .openapi({ required: ['ResolverEndpointId'], title: 'GetResolverEndpointRequest' })
  .openapi('GetResolverEndpointRequest')

const GetResolverQueryLogConfigResponseSchema = z
  .object({
    ResolverQueryLogConfig: ResolverQueryLogConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the Resolver query logging configuration that you specified in a <code>GetQueryLogConfig</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResolverQueryLogConfigResponse')

const GetResolverQueryLogConfigRequestSchema = z
  .object({
    ResolverQueryLogConfigId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Resolver query logging configuration that you want to get information about.',
        }),
    ),
  })
  .openapi({ required: ['ResolverQueryLogConfigId'], title: 'GetResolverQueryLogConfigRequest' })
  .openapi('GetResolverQueryLogConfigRequest')

const GetResolverQueryLogConfigAssociationResponseSchema = z
  .object({
    ResolverQueryLogConfigAssociation: ResolverQueryLogConfigAssociationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the Resolver query logging configuration association that you specified in a <code>GetQueryLogConfigAssociation</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResolverQueryLogConfigAssociationResponse')

const GetResolverQueryLogConfigAssociationRequestSchema = z
  .object({
    ResolverQueryLogConfigAssociationId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Resolver query logging configuration association that you want to get information about.',
        }),
    ),
  })
  .openapi({
    required: ['ResolverQueryLogConfigAssociationId'],
    title: 'GetResolverQueryLogConfigAssociationRequest',
  })
  .openapi('GetResolverQueryLogConfigAssociationRequest')

const ResolverQueryLogConfigPolicySchema = z
  .string()
  .max(30000)
  .openapi('ResolverQueryLogConfigPolicy')

const GetResolverQueryLogConfigPolicyResponseSchema = z
  .object({
    ResolverQueryLogConfigPolicy: ResolverQueryLogConfigPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the query logging policy for the query logging configuration that you specified in a <code>GetResolverQueryLogConfigPolicy</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResolverQueryLogConfigPolicyResponse')

const GetResolverQueryLogConfigPolicyRequestSchema = z
  .object({
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the query logging configuration that you want to get the query logging policy for.',
        }),
    ),
  })
  .openapi({ required: ['Arn'], title: 'GetResolverQueryLogConfigPolicyRequest' })
  .openapi('GetResolverQueryLogConfigPolicyRequest')

const UnknownResourceExceptionSchema = z.any().openapi('UnknownResourceException')

const GetResolverRuleResponseSchema = z
  .object({
    ResolverRule: ResolverRuleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the Resolver rule that you specified in a <code>GetResolverRule</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResolverRuleResponse')

const GetResolverRuleRequestSchema = z
  .object({
    ResolverRuleId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Resolver rule that you want to get information about.',
        }),
    ),
  })
  .openapi({ required: ['ResolverRuleId'], title: 'GetResolverRuleRequest' })
  .openapi('GetResolverRuleRequest')

const GetResolverRuleAssociationResponseSchema = z
  .object({
    ResolverRuleAssociation: ResolverRuleAssociationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the Resolver rule association that you specified in a <code>GetResolverRuleAssociation</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResolverRuleAssociationResponse')

const GetResolverRuleAssociationRequestSchema = z
  .object({
    ResolverRuleAssociationId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Resolver rule association that you want to get information about.',
        }),
    ),
  })
  .openapi({ required: ['ResolverRuleAssociationId'], title: 'GetResolverRuleAssociationRequest' })
  .openapi('GetResolverRuleAssociationRequest')

const ResolverRulePolicySchema = z.string().max(30000).openapi('ResolverRulePolicy')

const GetResolverRulePolicyResponseSchema = z
  .object({
    ResolverRulePolicy: ResolverRulePolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'The Resolver rule policy for the rule that you specified in a <code>GetResolverRulePolicy</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResolverRulePolicyResponse')

const GetResolverRulePolicyRequestSchema = z
  .object({
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Resolver rule that you want to get the Resolver rule policy for.',
        }),
    ),
  })
  .openapi({ required: ['Arn'], title: 'GetResolverRulePolicyRequest' })
  .openapi('GetResolverRulePolicyRequest')

const ImportFirewallDomainsResponseSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The Id of the firewall domain list that DNS Firewall just updated.',
        }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the domain list. ' }),
    ).exactOptional(),
    Status: FirewallDomainListStatusSchema.and(
      z.any().openapi({ description: 'Status of the import request.' }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'Additional information about the status of the list, if available.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportFirewallDomainsResponse')

const FirewallDomainImportOperationSchema = z
  .literal('REPLACE')
  .openapi('FirewallDomainImportOperation')

const DomainListFileUrlSchema = z.string().min(1).max(1024).openapi('DomainListFileUrl')

const ImportFirewallDomainsRequestSchema = z
  .object({
    FirewallDomainListId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the domain list that you want to modify with the import operation.',
        }),
    ),
    Operation: FirewallDomainImportOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'What you want DNS Firewall to do with the domains that are listed in the file. This must be set to <code>REPLACE</code>, which updates the domain list to exactly match the list in the file. ',
        }),
    ),
    DomainFileUrl: DomainListFileUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The fully qualified URL or URI of the file stored in Amazon Simple Storage Service (Amazon S3) that contains the list of domains to import.</p> <p>The file must be in an S3 bucket that's in the same Region as your DNS Firewall. The file must be a text file and must contain a single domain per line.</p>",
        }),
    ),
  })
  .openapi({
    required: ['FirewallDomainListId', 'Operation', 'DomainFileUrl'],
    title: 'ImportFirewallDomainsRequest',
  })
  .openapi('ImportFirewallDomainsRequest')

const NextTokenSchema = z.string().openapi('NextToken')

const FirewallConfigListSchema = z.array(FirewallConfigSchema).openapi('FirewallConfigList')

const ListFirewallConfigsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If objects are still available for retrieval, Resolver returns this token in the response. To retrieve the next batch of objects, provide this token in your next request.',
        }),
    ).exactOptional(),
    FirewallConfigs: FirewallConfigListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configurations for the firewall behavior provided by DNS Firewall for VPCs from Amazon Virtual Private Cloud (Amazon VPC). ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFirewallConfigsResponse')

const ListFirewallConfigsMaxResultSchema = z
  .int()
  .min(5)
  .max(10)
  .openapi('ListFirewallConfigsMaxResult')

const ListFirewallConfigsRequestSchema = z
  .object({
    MaxResults: ListFirewallConfigsMaxResultSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum number of objects that you want Resolver to return for this request. If more objects are available, in the response, Resolver provides a <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p> <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For the first call to this list request, omit this value.</p> <p>When you request a list of objects, Resolver returns at most the number of objects specified in <code>MaxResults</code>. If more objects are available for retrieval, Resolver returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListFirewallConfigsRequest', required: [] })
  .openapi('ListFirewallConfigsRequest')

const FirewallDomainListMetadataSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the domain list. ' }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the firewall domain list metadata.',
        }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the domain list. ' }),
    ).exactOptional(),
    CreatorRequestId: CreatorRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp. ',
        }),
    ).exactOptional(),
    ManagedOwnerName: ServicePrincipleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The owner of the list, used only for lists that are not managed by you. For example, the managed domain list <code>AWSManagedDomainsMalwareDomainList</code> has the managed owner name <code>Route 53 Resolver DNS Firewall</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Minimal high-level information for a firewall domain list. The action <a>ListFirewallDomainLists</a> returns an array of these objects. </p> <p>To retrieve full information for a firewall domain list, call <a>GetFirewallDomainList</a> and <a>ListFirewallDomains</a>.</p>',
    required: [],
  })
  .openapi('FirewallDomainListMetadata')

const FirewallDomainListMetadataListSchema = z
  .array(FirewallDomainListMetadataSchema)
  .openapi('FirewallDomainListMetadataList')

const ListFirewallDomainListsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If objects are still available for retrieval, Resolver returns this token in the response. To retrieve the next batch of objects, provide this token in your next request.',
        }),
    ).exactOptional(),
    FirewallDomainLists: FirewallDomainListMetadataListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of the domain lists that you have defined. </p> <p>This might be a partial list of the domain lists that you've defined. For information, see <code>MaxResults</code>. </p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFirewallDomainListsResponse')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListFirewallDomainListsRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum number of objects that you want Resolver to return for this request. If more objects are available, in the response, Resolver provides a <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p> <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For the first call to this list request, omit this value.</p> <p>When you request a list of objects, Resolver returns at most the number of objects specified in <code>MaxResults</code>. If more objects are available for retrieval, Resolver returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListFirewallDomainListsRequest', required: [] })
  .openapi('ListFirewallDomainListsRequest')

const FirewallDomainNameSchema = z.string().min(1).max(255).openapi('FirewallDomainName')

const FirewallDomainsSchema = z.array(FirewallDomainNameSchema).openapi('FirewallDomains')

const ListFirewallDomainsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If objects are still available for retrieval, Resolver returns this token in the response. To retrieve the next batch of objects, provide this token in your next request.',
        }),
    ).exactOptional(),
    Domains: FirewallDomainsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of the domains in the firewall domain list. </p> <p>This might be a partial list of the domains that you've defined in the domain list. For information, see <code>MaxResults</code>. </p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFirewallDomainsResponse')

const ListDomainMaxResultsSchema = z.int().min(1).max(5000).openapi('ListDomainMaxResults')

const ListFirewallDomainsRequestSchema = z
  .object({
    FirewallDomainListId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the domain list whose domains you want to retrieve. ' }),
    ),
    MaxResults: ListDomainMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum number of objects that you want Resolver to return for this request. If more objects are available, in the response, Resolver provides a <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p> <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For the first call to this list request, omit this value.</p> <p>When you request a list of objects, Resolver returns at most the number of objects specified in <code>MaxResults</code>. If more objects are available for retrieval, Resolver returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FirewallDomainListId'], title: 'ListFirewallDomainsRequest' })
  .openapi('ListFirewallDomainsRequest')

const FirewallRuleGroupAssociationsSchema = z
  .array(FirewallRuleGroupAssociationSchema)
  .openapi('FirewallRuleGroupAssociations')

const ListFirewallRuleGroupAssociationsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If objects are still available for retrieval, Resolver returns this token in the response. To retrieve the next batch of objects, provide this token in your next request.',
        }),
    ).exactOptional(),
    FirewallRuleGroupAssociations: FirewallRuleGroupAssociationsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of your firewall rule group associations.</p> <p>This might be a partial list of the associations that you have defined. For information, see <code>MaxResults</code>. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFirewallRuleGroupAssociationsResponse')

const ListFirewallRuleGroupAssociationsRequestSchema = z
  .object({
    FirewallRuleGroupId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the firewall rule group that you want to retrieve the associations for. Leave this blank to retrieve associations for any rule group. ',
        }),
    ).exactOptional(),
    VpcId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the VPC that you want to retrieve the associations for. Leave this blank to retrieve associations for any VPC. ',
        }),
    ).exactOptional(),
    Priority: PrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            'The setting that determines the processing order of the rule group among the rule groups that are associated with a single VPC. DNS Firewall filters VPC traffic starting from the rule group with the lowest numeric priority setting. ',
        }),
    ).exactOptional(),
    Status: FirewallRuleGroupAssociationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The association <code>Status</code> setting that you want DNS Firewall to filter on for the list. If you don't specify this, then DNS Firewall returns all associations, regardless of status.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum number of objects that you want Resolver to return for this request. If more objects are available, in the response, Resolver provides a <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p> <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For the first call to this list request, omit this value.</p> <p>When you request a list of objects, Resolver returns at most the number of objects specified in <code>MaxResults</code>. If more objects are available for retrieval, Resolver returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListFirewallRuleGroupAssociationsRequest', required: [] })
  .openapi('ListFirewallRuleGroupAssociationsRequest')

const FirewallRuleGroupMetadataSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the rule group. ' }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN (Amazon Resource Name) of the rule group.' }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the rule group.' }),
    ).exactOptional(),
    OwnerId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID for the account that created the rule group. When a rule group is shared with your account, this is the account that has shared the rule group with you. ',
        }),
    ).exactOptional(),
    CreatorRequestId: CreatorRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp. ',
        }),
    ).exactOptional(),
    ShareStatus: ShareStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the rule group is shared with other Amazon Web Services accounts, or was shared with the current account by another Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Minimal high-level information for a firewall rule group. The action <a>ListFirewallRuleGroups</a> returns an array of these objects. </p> <p>To retrieve full information for a firewall rule group, call <a>GetFirewallRuleGroup</a> and <a>ListFirewallRules</a>.</p>',
    required: [],
  })
  .openapi('FirewallRuleGroupMetadata')

const FirewallRuleGroupMetadataListSchema = z
  .array(FirewallRuleGroupMetadataSchema)
  .openapi('FirewallRuleGroupMetadataList')

const ListFirewallRuleGroupsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If objects are still available for retrieval, Resolver returns this token in the response. To retrieve the next batch of objects, provide this token in your next request.',
        }),
    ).exactOptional(),
    FirewallRuleGroups: FirewallRuleGroupMetadataListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of your firewall rule groups.</p> <p>This might be a partial list of the rule groups that you have defined. For information, see <code>MaxResults</code>. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFirewallRuleGroupsResponse')

const ListFirewallRuleGroupsRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum number of objects that you want Resolver to return for this request. If more objects are available, in the response, Resolver provides a <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p> <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For the first call to this list request, omit this value.</p> <p>When you request a list of objects, Resolver returns at most the number of objects specified in <code>MaxResults</code>. If more objects are available for retrieval, Resolver returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListFirewallRuleGroupsRequest', required: [] })
  .openapi('ListFirewallRuleGroupsRequest')

const FirewallRulesSchema = z.array(FirewallRuleSchema).openapi('FirewallRules')

const ListFirewallRulesResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If objects are still available for retrieval, Resolver returns this token in the response. To retrieve the next batch of objects, provide this token in your next request.',
        }),
    ).exactOptional(),
    FirewallRules: FirewallRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of the rules that you have defined. </p> <p>This might be a partial list of the firewall rules that you've defined. For information, see <code>MaxResults</code>. </p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFirewallRulesResponse')

const ListFirewallRulesRequestSchema = z
  .object({
    FirewallRuleGroupId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the firewall rule group that you want to retrieve the rules for. ',
        }),
    ),
    Priority: PrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Optional additional filter for the rules to retrieve.</p> <p>The setting that determines the processing order of the rules in a rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.</p>',
        }),
    ).exactOptional(),
    Action: ActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Optional additional filter for the rules to retrieve.</p> <p>The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list:</p> <ul> <li> <p> <code>ALLOW</code> - Permit the request to go through.</p> </li> <li> <p> <code>ALERT</code> - Permit the request to go through but send an alert to the logs.</p> </li> <li> <p> <code>BLOCK</code> - Disallow the request. If this is specified, additional handling details are provided in the rule's <code>BlockResponse</code> setting. </p> </li> </ul>",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum number of objects that you want Resolver to return for this request. If more objects are available, in the response, Resolver provides a <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p> <p>If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 objects. </p>",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For the first call to this list request, omit this value.</p> <p>When you request a list of objects, Resolver returns at most the number of objects specified in <code>MaxResults</code>. If more objects are available for retrieval, Resolver returns a <code>NextToken</code> value in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['FirewallRuleGroupId'], title: 'ListFirewallRulesRequest' })
  .openapi('ListFirewallRulesRequest')

const ResolverConfigListSchema = z.array(ResolverConfigSchema).openapi('ResolverConfigList')

const ListResolverConfigsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If a response includes the last of the Resolver configurations that are associated with the current Amazon Web Services account, <code>NextToken</code> doesn't appear in the response.</p> <p>If a response doesn't include the last of the configurations, you can get more configurations by submitting another <code>ListResolverConfigs</code> request. Get the value of <code>NextToken</code> that Amazon Route 53 returned in the previous response and include it in <code>NextToken</code> in the next request.</p>",
        }),
    ).exactOptional(),
    ResolverConfigs: ResolverConfigListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that contains one <code>ResolverConfigs</code> element for each Resolver configuration that is associated with the current Amazon Web Services account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResolverConfigsResponse')

const ListResolverConfigsMaxResultSchema = z
  .int()
  .min(5)
  .max(100)
  .openapi('ListResolverConfigsMaxResult')

const ListResolverConfigsRequestSchema = z
  .object({
    MaxResults: ListResolverConfigsMaxResultSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of Resolver configurations that you want to return in the response to a <code>ListResolverConfigs</code> request. If you don't specify a value for <code>MaxResults</code>, up to 100 Resolver configurations are returned.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>(Optional) If the current Amazon Web Services account has more than <code>MaxResults</code> Resolver configurations, use <code>NextToken</code> to get the second and subsequent pages of results.</p> <p>For the first <code>ListResolverConfigs</code> request, omit this value.</p> <p>For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListResolverConfigsRequest', required: [] })
  .openapi('ListResolverConfigsRequest')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const ResolverDnssecConfigListSchema = z
  .array(ResolverDnssecConfigSchema)
  .openapi('ResolverDnssecConfigList')

const ListResolverDnssecConfigsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If a response includes the last of the DNSSEC configurations that are associated with the current Amazon Web Services account, <code>NextToken</code> doesn\'t appear in the response.</p> <p>If a response doesn\'t include the last of the configurations, you can get more configurations by submitting another <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListResolverDnssecConfigs.html">ListResolverDnssecConfigs</a> request. Get the value of <code>NextToken</code> that Amazon Route 53 returned in the previous response and include it in <code>NextToken</code> in the next request.</p>',
        }),
    ).exactOptional(),
    ResolverDnssecConfigs: ResolverDnssecConfigListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that contains one <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ResolverDnssecConfig.html">ResolverDnssecConfig</a> element for each configuration for DNSSEC validation that is associated with the current Amazon Web Services account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResolverDnssecConfigsResponse')

const FilterNameSchema = z.string().min(1).max(64).openapi('FilterName')

const FilterValueSchema = z.string().min(1).max(600).openapi('FilterValue')

const FilterValuesSchema = z.array(FilterValueSchema).openapi('FilterValues')

const FilterSchema = z
  .object({
    Name: FilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the parameter that you want to use to filter objects.</p> <p>The valid values for <code>Name</code> depend on the action that you\'re including the filter in, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>.</p> <note> <p>In early versions of Resolver, values for <code>Name</code> were listed as uppercase, with underscore (_) delimiters. For example, <code>CreatorRequestId</code> was originally listed as <code>CREATOR_REQUEST_ID</code>. Uppercase values for <code>Name</code> are still supported.</p> </note> <p> <b>ListResolverEndpoints</b> </p> <p>Valid values for <code>Name</code> include the following:</p> <ul> <li> <p> <code>CreatorRequestId</code>: The value that you specified when you created the Resolver endpoint.</p> </li> <li> <p> <code>Direction</code>: Whether you want to return inbound or outbound Resolver endpoints. If you specify <code>DIRECTION</code> for <code>Name</code>, specify <code>INBOUND</code> or <code>OUTBOUND</code> for <code>Values</code>.</p> </li> <li> <p> <code>HostVPCId</code>: The ID of the VPC that inbound DNS queries pass through on the way from your network to your VPCs in a region, or the VPC that outbound queries pass through on the way from your VPCs to your network. In a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a> request, <code>SubnetId</code> indirectly identifies the VPC. In a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a> request, the VPC ID for a Resolver endpoint is returned in the <code>HostVPCId</code> element. </p> </li> <li> <p> <code>IpAddressCount</code>: The number of IP addresses that you have associated with the Resolver endpoint.</p> </li> <li> <p> <code>Name</code>: The name of the Resolver endpoint.</p> </li> <li> <p> <code>SecurityGroupIds</code>: The IDs of the VPC security groups that you specified when you created the Resolver endpoint.</p> </li> <li> <p> <code>Status</code>: The status of the Resolver endpoint. If you specify <code>Status</code> for <code>Name</code>, specify one of the following status codes for <code>Values</code>: <code>CREATING</code>, <code>OPERATIONAL</code>, <code>UPDATING</code>, <code>AUTO_RECOVERING</code>, <code>ACTION_NEEDED</code>, or <code>DELETING</code>. For more information, see <code>Status</code> in <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ResolverEndpoint.html">ResolverEndpoint</a>.</p> </li> </ul> <p> <b>ListResolverRules</b> </p> <p>Valid values for <code>Name</code> include the following:</p> <ul> <li> <p> <code>CreatorRequestId</code>: The value that you specified when you created the Resolver rule.</p> </li> <li> <p> <code>DomainName</code>: The domain name for which Resolver is forwarding DNS queries to your network. In the value that you specify for <code>Values</code>, include a trailing dot (.) after the domain name. For example, if the domain name is example.com, specify the following value. Note the "." after <code>com</code>:</p> <p> <code>example.com.</code> </p> </li> <li> <p> <code>Name</code>: The name of the Resolver rule.</p> </li> <li> <p> <code>ResolverEndpointId</code>: The ID of the Resolver endpoint that the Resolver rule is associated with.</p> <note> <p>You can filter on the Resolver endpoint only for rules that have a value of <code>FORWARD</code> for <code>RuleType</code>.</p> </note> </li> <li> <p> <code>Status</code>: The status of the Resolver rule. If you specify <code>Status</code> for <code>Name</code>, specify one of the following status codes for <code>Values</code>: <code>COMPLETE</code>, <code>DELETING</code>, <code>UPDATING</code>, or <code>FAILED</code>.</p> </li> <li> <p> <code>Type</code>: The type of the Resolver rule. If you specify <code>TYPE</code> for <code>Name</code>, specify <code>FORWARD</code> or <code>SYSTEM</code> for <code>Values</code>.</p> </li> </ul> <p> <b>ListResolverRuleAssociations</b> </p> <p>Valid values for <code>Name</code> include the following:</p> <ul> <li> <p> <code>Name</code>: The name of the Resolver rule association.</p> </li> <li> <p> <code>ResolverRuleId</code>: The ID of the Resolver rule that is associated with one or more VPCs.</p> </li> <li> <p> <code>Status</code>: The status of the Resolver rule association. If you specify <code>Status</code> for <code>Name</code>, specify one of the following status codes for <code>Values</code>: <code>CREATING</code>, <code>COMPLETE</code>, <code>DELETING</code>, or <code>FAILED</code>.</p> </li> <li> <p> <code>VPCId</code>: The ID of the VPC that the Resolver rule is associated with.</p> </li> </ul> <p> <b>ListResolverQueryLogConfigs</b> </p> <p>Valid values for <code>Name</code> include the following:</p> <ul> <li> <p> <code>Arn</code>: The ARN for the query logging configuration.</p> </li> <li> <p> <code>AssociationCount</code>: The number of VPCs that are associated with the query logging configuration.</p> </li> <li> <p> <code>CreationTime</code>: The date and time that the query logging configuration was created, in Unix time format and Coordinated Universal Time (UTC). </p> </li> <li> <p> <code>CreatorRequestId</code>: A unique string that identifies the request that created the query logging configuration.</p> </li> <li> <p> <code>Destination</code>: The Amazon Web Services service that you want to forward query logs to. Valid values include the following:</p> <ul> <li> <p> <code>S3</code> </p> </li> <li> <p> <code>CloudWatchLogs</code> </p> </li> <li> <p> <code>KinesisFirehose</code> </p> </li> </ul> </li> <li> <p> <code>DestinationArn</code>: The ARN of the location that Resolver is sending query logs to. This value can be the ARN for an S3 bucket, a CloudWatch Logs log group, or a Kinesis Data Firehose delivery stream.</p> </li> <li> <p> <code>Id</code>: The ID of the query logging configuration</p> </li> <li> <p> <code>Name</code>: The name of the query logging configuration</p> </li> <li> <p> <code>OwnerId</code>: The Amazon Web Services account ID for the account that created the query logging configuration.</p> </li> <li> <p> <code>ShareStatus</code>: An indication of whether the query logging configuration is shared with other Amazon Web Services accounts, or was shared with the current account by another Amazon Web Services account. Valid values include: <code>NOT_SHARED</code>, <code>SHARED_WITH_ME</code>, or <code>SHARED_BY_ME</code>.</p> </li> <li> <p> <code>Status</code>: The status of the query logging configuration. If you specify <code>Status</code> for <code>Name</code>, specify the applicable status code for <code>Values</code>: <code>CREATING</code>, <code>CREATED</code>, <code>DELETING</code>, or <code>FAILED</code>. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ResolverQueryLogConfig.html#Route53Resolver-Type-route53resolver_ResolverQueryLogConfig-Status">Status</a>. </p> </li> </ul> <p> <b>ListResolverQueryLogConfigAssociations</b> </p> <p>Valid values for <code>Name</code> include the following:</p> <ul> <li> <p> <code>CreationTime</code>: The date and time that the VPC was associated with the query logging configuration, in Unix time format and Coordinated Universal Time (UTC).</p> </li> <li> <p> <code>Error</code>: If the value of <code>Status</code> is <code>FAILED</code>, specify the cause: <code>DESTINATION_NOT_FOUND</code> or <code>ACCESS_DENIED</code>.</p> </li> <li> <p> <code>Id</code>: The ID of the query logging association.</p> </li> <li> <p> <code>ResolverQueryLogConfigId</code>: The ID of the query logging configuration that a VPC is associated with.</p> </li> <li> <p> <code>ResourceId</code>: The ID of the Amazon VPC that is associated with the query logging configuration.</p> </li> <li> <p> <code>Status</code>: The status of the query logging association. If you specify <code>Status</code> for <code>Name</code>, specify the applicable status code for <code>Values</code>: <code>CREATING</code>, <code>CREATED</code>, <code>DELETING</code>, or <code>FAILED</code>. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ResolverQueryLogConfigAssociation.html#Route53Resolver-Type-route53resolver_ResolverQueryLogConfigAssociation-Status">Status</a>. </p> </li> </ul>',
        }),
    ).exactOptional(),
    Values: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            "When you're using a <code>List</code> operation and you want the operation to return a subset of objects, such as Resolver endpoints or Resolver rules, the value of the parameter that you want to use to filter objects. For example, to list only inbound Resolver endpoints, specify <code>Direction</code> for <code>Name</code> and specify <code>INBOUND</code> for <code>Values</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>For Resolver list operations (<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>), and <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverDnssecConfigs.html">ListResolverDnssecConfigs</a>), an optional specification to return a subset of objects.</p> <p>To filter objects, such as Resolver endpoints or Resolver rules, you specify <code>Name</code> and <code>Values</code>. For example, to list only inbound Resolver endpoints, specify <code>Direction</code> for <code>Name</code> and specify <code>INBOUND</code> for <code>Values</code>. </p>',
    required: [],
  })
  .openapi('Filter')

const FiltersSchema = z.array(FilterSchema).openapi('Filters')

const ListResolverDnssecConfigsRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            " <i>Optional</i>: An integer that specifies the maximum number of DNSSEC configuration results that you want Amazon Route 53 to return. If you don't specify a value for <code>MaxResults</code>, Route 53 returns up to 100 configuration per page.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>(Optional) If the current Amazon Web Services account has more than <code>MaxResults</code> DNSSEC configurations, use <code>NextToken</code> to get the second and subsequent pages of results.</p> <p>For the first <code>ListResolverDnssecConfigs</code> request, omit this value.</p> <p>For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request.</p>',
        }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z.any().openapi({ description: 'An optional specification to return a subset of objects.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListResolverDnssecConfigsRequest', required: [] })
  .openapi('ListResolverDnssecConfigsRequest')

const IpAddressStatusSchema = z
  .enum([
    'CREATING',
    'FAILED_CREATION',
    'ATTACHING',
    'ATTACHED',
    'REMAP_DETACHING',
    'REMAP_ATTACHING',
    'DETACHING',
    'FAILED_RESOURCE_GONE',
    'DELETING',
    'DELETE_FAILED_FAS_EXPIRED',
    'UPDATING',
  ])
  .openapi('IpAddressStatus')

const IpAddressResponseSchema = z
  .object({
    IpId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of one IP address.' }),
    ).exactOptional(),
    SubnetId: SubnetIdSchema.and(
      z.any().openapi({ description: 'The ID of one subnet.' }),
    ).exactOptional(),
    Ip: IpSchema.and(
      z
        .any()
        .openapi({
          description: 'One IPv4 address that the Resolver endpoint uses for DNS queries.',
        }),
    ).exactOptional(),
    Ipv6: Ipv6Schema.and(
      z
        .any()
        .openapi({
          description: ' One IPv6 address that the Resolver endpoint uses for DNS queries. ',
        }),
    ).exactOptional(),
    Status: IpAddressStatusSchema.and(
      z
        .any()
        .openapi({ description: 'A status code that gives the current status of the request.' }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'A message that provides additional information about the status of the request.',
        }),
    ).exactOptional(),
    CreationTime: Rfc3339TimeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the IP address was created, in Unix time format and Coordinated Universal Time (UTC).',
        }),
    ).exactOptional(),
    ModificationTime: Rfc3339TimeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the IP address was last modified, in Unix time format and Coordinated Universal Time (UTC).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a> request, information about the IP addresses that the Resolver endpoint uses for DNS queries.',
    required: [],
  })
  .openapi('IpAddressResponse')

const IpAddressesResponseSchema = z.array(IpAddressResponseSchema).openapi('IpAddressesResponse')

const ListResolverEndpointIpAddressesResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the specified endpoint has more than <code>MaxResults</code> IP addresses, you can submit another <code>ListResolverEndpointIpAddresses</code> request to get the next group of IP addresses. In the next request, specify the value of <code>NextToken</code> from the previous response. ',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'The value that you specified for <code>MaxResults</code> in the request.',
        }),
    ).exactOptional(),
    IpAddresses: IpAddressesResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints).',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResolverEndpointIpAddressesResponse')

const ListResolverEndpointIpAddressesRequestSchema = z
  .object({
    ResolverEndpointId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Resolver endpoint that you want to get IP addresses for.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of IP addresses that you want to return in the response to a <code>ListResolverEndpointIpAddresses</code> request. If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 IP addresses. ",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For the first <code>ListResolverEndpointIpAddresses</code> request, omit this value.</p> <p>If the specified Resolver endpoint has more than <code>MaxResults</code> IP addresses, you can submit another <code>ListResolverEndpointIpAddresses</code> request to get the next group of IP addresses. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResolverEndpointId'], title: 'ListResolverEndpointIpAddressesRequest' })
  .openapi('ListResolverEndpointIpAddressesRequest')

const ResolverEndpointsSchema = z.array(ResolverEndpointSchema).openapi('ResolverEndpoints')

const ListResolverEndpointsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If more than <code>MaxResults</code> IP addresses match the specified criteria, you can submit another <code>ListResolverEndpoint</code> request to get the next group of results. In the next request, specify the value of <code>NextToken</code> from the previous response. ',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'The value that you specified for <code>MaxResults</code> in the request.',
        }),
    ).exactOptional(),
    ResolverEndpoints: ResolverEndpointsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Resolver endpoints that were created by using the current Amazon Web Services account, and that match the specified filters, if any.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResolverEndpointsResponse')

const ListResolverEndpointsRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of Resolver endpoints that you want to return in the response to a <code>ListResolverEndpoints</code> request. If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 Resolver endpoints. ",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For the first <code>ListResolverEndpoints</code> request, omit this value.</p> <p>If you have more than <code>MaxResults</code> Resolver endpoints, you can submit another <code>ListResolverEndpoints</code> request to get the next group of Resolver endpoints. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>',
        }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional specification to return a subset of Resolver endpoints, such as all inbound Resolver endpoints.</p> <note> <p>If you submit a second or subsequent <code>ListResolverEndpoints</code> request and specify the <code>NextToken</code> parameter, you must use the same values for <code>Filters</code>, if any, as in the previous request.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListResolverEndpointsRequest', required: [] })
  .openapi('ListResolverEndpointsRequest')

const ResolverQueryLogConfigAssociationListSchema = z
  .array(ResolverQueryLogConfigAssociationSchema)
  .openapi('ResolverQueryLogConfigAssociationList')

const ListResolverQueryLogConfigAssociationsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more than <code>MaxResults</code> query logging associations, you can submit another <code>ListResolverQueryLogConfigAssociations</code> request to get the next group of associations. In the next request, specify the value of <code>NextToken</code> from the previous response. ',
        }),
    ).exactOptional(),
    TotalCount: CountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of query logging associations that were created by the current account in the specified Region. This count can differ from the number of associations that are returned in a <code>ListResolverQueryLogConfigAssociations</code> response, depending on the values that you specify in the request.',
        }),
    ).exactOptional(),
    TotalFilteredCount: CountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of query logging associations that were created by the current account in the specified Region and that match the filters that were specified in the <code>ListResolverQueryLogConfigAssociations</code> request. For the total number of associations that were created by the current account in the specified Region, see <code>TotalCount</code>.',
        }),
    ).exactOptional(),
    ResolverQueryLogConfigAssociations: ResolverQueryLogConfigAssociationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that contains one <code>ResolverQueryLogConfigAssociations</code> element for each query logging association that matches the values that you specified for <code>Filter</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResolverQueryLogConfigAssociationsResponse')

const SortByKeySchema = z.string().min(1).max(64).openapi('SortByKey')

const SortOrderSchema = z.enum(['ASCENDING', 'DESCENDING']).openapi('SortOrder')

const ListResolverQueryLogConfigAssociationsRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of query logging associations that you want to return in the response to a <code>ListResolverQueryLogConfigAssociations</code> request. If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 query logging associations. ",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For the first <code>ListResolverQueryLogConfigAssociations</code> request, omit this value.</p> <p>If there are more than <code>MaxResults</code> query logging associations that match the values that you specify for <code>Filters</code>, you can submit another <code>ListResolverQueryLogConfigAssociations</code> request to get the next group of associations. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>',
        }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional specification to return a subset of query logging associations.</p> <note> <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigAssociations</code> request and specify the <code>NextToken</code> parameter, you must use the same values for <code>Filters</code>, if any, as in the previous request.</p> </note>',
        }),
    ).exactOptional(),
    SortBy: SortByKeySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The element that you want Resolver to sort query logging associations by. </p> <note> <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigAssociations</code> request and specify the <code>NextToken</code> parameter, you must use the same value for <code>SortBy</code>, if any, as in the previous request.</p> </note> <p>Valid values include the following elements:</p> <ul> <li> <p> <code>CreationTime</code>: The ID of the query logging association.</p> </li> <li> <p> <code>Error</code>: If the value of <code>Status</code> is <code>FAILED</code>, the value of <code>Error</code> indicates the cause: </p> <ul> <li> <p> <code>DESTINATION_NOT_FOUND</code>: The specified destination (for example, an Amazon S3 bucket) was deleted.</p> </li> <li> <p> <code>ACCESS_DENIED</code>: Permissions don't allow sending logs to the destination.</p> </li> </ul> <p>If <code>Status</code> is a value other than <code>FAILED</code>, <code>ERROR</code> is null.</p> </li> <li> <p> <code>Id</code>: The ID of the query logging association</p> </li> <li> <p> <code>ResolverQueryLogConfigId</code>: The ID of the query logging configuration</p> </li> <li> <p> <code>ResourceId</code>: The ID of the VPC that is associated with the query logging configuration</p> </li> <li> <p> <code>Status</code>: The current status of the configuration. Valid values include the following:</p> <ul> <li> <p> <code>CREATING</code>: Resolver is creating an association between an Amazon VPC and a query logging configuration.</p> </li> <li> <p> <code>CREATED</code>: The association between an Amazon VPC and a query logging configuration was successfully created. Resolver is logging queries that originate in the specified VPC.</p> </li> <li> <p> <code>DELETING</code>: Resolver is deleting this query logging association.</p> </li> <li> <p> <code>FAILED</code>: Resolver either couldn't create or couldn't delete the query logging association. Here are two common causes:</p> <ul> <li> <p>The specified destination (for example, an Amazon S3 bucket) was deleted.</p> </li> <li> <p>Permissions don't allow sending logs to the destination.</p> </li> </ul> </li> </ul> </li> </ul>",
        }),
    ).exactOptional(),
    SortOrder: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you specified a value for <code>SortBy</code>, the order that you want query logging associations to be listed in, <code>ASCENDING</code> or <code>DESCENDING</code>.</p> <note> <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigAssociations</code> request and specify the <code>NextToken</code> parameter, you must use the same value for <code>SortOrder</code>, if any, as in the previous request.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListResolverQueryLogConfigAssociationsRequest', required: [] })
  .openapi('ListResolverQueryLogConfigAssociationsRequest')

const ResolverQueryLogConfigListSchema = z
  .array(ResolverQueryLogConfigSchema)
  .openapi('ResolverQueryLogConfigList')

const ListResolverQueryLogConfigsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more than <code>MaxResults</code> query logging configurations, you can submit another <code>ListResolverQueryLogConfigs</code> request to get the next group of configurations. In the next request, specify the value of <code>NextToken</code> from the previous response. ',
        }),
    ).exactOptional(),
    TotalCount: CountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of query logging configurations that were created by the current account in the specified Region. This count can differ from the number of query logging configurations that are returned in a <code>ListResolverQueryLogConfigs</code> response, depending on the values that you specify in the request.',
        }),
    ).exactOptional(),
    TotalFilteredCount: CountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of query logging configurations that were created by the current account in the specified Region and that match the filters that were specified in the <code>ListResolverQueryLogConfigs</code> request. For the total number of query logging configurations that were created by the current account in the specified Region, see <code>TotalCount</code>.',
        }),
    ).exactOptional(),
    ResolverQueryLogConfigs: ResolverQueryLogConfigListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that contains one <code>ResolverQueryLogConfig</code> element for each query logging configuration that matches the values that you specified for <code>Filter</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResolverQueryLogConfigsResponse')

const ListResolverQueryLogConfigsRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of query logging configurations that you want to return in the response to a <code>ListResolverQueryLogConfigs</code> request. If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 query logging configurations. ",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For the first <code>ListResolverQueryLogConfigs</code> request, omit this value.</p> <p>If there are more than <code>MaxResults</code> query logging configurations that match the values that you specify for <code>Filters</code>, you can submit another <code>ListResolverQueryLogConfigs</code> request to get the next group of configurations. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>',
        }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional specification to return a subset of query logging configurations.</p> <note> <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigs</code> request and specify the <code>NextToken</code> parameter, you must use the same values for <code>Filters</code>, if any, as in the previous request.</p> </note>',
        }),
    ).exactOptional(),
    SortBy: SortByKeySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The element that you want Resolver to sort query logging configurations by. </p> <note> <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigs</code> request and specify the <code>NextToken</code> parameter, you must use the same value for <code>SortBy</code>, if any, as in the previous request.</p> </note> <p>Valid values include the following elements:</p> <ul> <li> <p> <code>Arn</code>: The ARN of the query logging configuration</p> </li> <li> <p> <code>AssociationCount</code>: The number of VPCs that are associated with the specified configuration </p> </li> <li> <p> <code>CreationTime</code>: The date and time that Resolver returned when the configuration was created</p> </li> <li> <p> <code>CreatorRequestId</code>: The value that was specified for <code>CreatorRequestId</code> when the configuration was created</p> </li> <li> <p> <code>DestinationArn</code>: The location that logs are sent to</p> </li> <li> <p> <code>Id</code>: The ID of the configuration</p> </li> <li> <p> <code>Name</code>: The name of the configuration</p> </li> <li> <p> <code>OwnerId</code>: The Amazon Web Services account number of the account that created the configuration</p> </li> <li> <p> <code>ShareStatus</code>: Whether the configuration is shared with other Amazon Web Services accounts or shared with the current account by another Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM).</p> </li> <li> <p> <code>Status</code>: The current status of the configuration. Valid values include the following:</p> <ul> <li> <p> <code>CREATING</code>: Resolver is creating the query logging configuration.</p> </li> <li> <p> <code>CREATED</code>: The query logging configuration was successfully created. Resolver is logging queries that originate in the specified VPC.</p> </li> <li> <p> <code>DELETING</code>: Resolver is deleting this query logging configuration.</p> </li> <li> <p> <code>FAILED</code>: Resolver either couldn't create or couldn't delete the query logging configuration. Here are two common causes:</p> <ul> <li> <p>The specified destination (for example, an Amazon S3 bucket) was deleted.</p> </li> <li> <p>Permissions don't allow sending logs to the destination.</p> </li> </ul> </li> </ul> </li> </ul>",
        }),
    ).exactOptional(),
    SortOrder: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you specified a value for <code>SortBy</code>, the order that you want query logging configurations to be listed in, <code>ASCENDING</code> or <code>DESCENDING</code>.</p> <note> <p>If you submit a second or subsequent <code>ListResolverQueryLogConfigs</code> request and specify the <code>NextToken</code> parameter, you must use the same value for <code>SortOrder</code>, if any, as in the previous request.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListResolverQueryLogConfigsRequest', required: [] })
  .openapi('ListResolverQueryLogConfigsRequest')

const ResolverRuleAssociationsSchema = z
  .array(ResolverRuleAssociationSchema)
  .openapi('ResolverRuleAssociations')

const ListResolverRuleAssociationsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If more than <code>MaxResults</code> rule associations match the specified criteria, you can submit another <code>ListResolverRuleAssociation</code> request to get the next group of results. In the next request, specify the value of <code>NextToken</code> from the previous response. ',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'The value that you specified for <code>MaxResults</code> in the request.',
        }),
    ).exactOptional(),
    ResolverRuleAssociations: ResolverRuleAssociationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The associations that were created between Resolver rules and VPCs using the current Amazon Web Services account, and that match the specified filters, if any.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResolverRuleAssociationsResponse')

const ListResolverRuleAssociationsRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of rule associations that you want to return in the response to a <code>ListResolverRuleAssociations</code> request. If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 rule associations. ",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For the first <code>ListResolverRuleAssociation</code> request, omit this value.</p> <p>If you have more than <code>MaxResults</code> rule associations, you can submit another <code>ListResolverRuleAssociation</code> request to get the next group of rule associations. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>',
        }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional specification to return a subset of Resolver rules, such as Resolver rules that are associated with the same VPC ID.</p> <note> <p>If you submit a second or subsequent <code>ListResolverRuleAssociations</code> request and specify the <code>NextToken</code> parameter, you must use the same values for <code>Filters</code>, if any, as in the previous request.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListResolverRuleAssociationsRequest', required: [] })
  .openapi('ListResolverRuleAssociationsRequest')

const ResolverRulesSchema = z.array(ResolverRuleSchema).openapi('ResolverRules')

const ListResolverRulesResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If more than <code>MaxResults</code> Resolver rules match the specified criteria, you can submit another <code>ListResolverRules</code> request to get the next group of results. In the next request, specify the value of <code>NextToken</code> from the previous response. ',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'The value that you specified for <code>MaxResults</code> in the request.',
        }),
    ).exactOptional(),
    ResolverRules: ResolverRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Resolver rules that were created using the current Amazon Web Services account and that match the specified filters, if any.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResolverRulesResponse')

const ListResolverRulesRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of Resolver rules that you want to return in the response to a <code>ListResolverRules</code> request. If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 Resolver rules.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For the first <code>ListResolverRules</code> request, omit this value.</p> <p>If you have more than <code>MaxResults</code> Resolver rules, you can submit another <code>ListResolverRules</code> request to get the next group of Resolver rules. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>',
        }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional specification to return a subset of Resolver rules, such as all Resolver rules that are associated with the same Resolver endpoint.</p> <note> <p>If you submit a second or subsequent <code>ListResolverRules</code> request and specify the <code>NextToken</code> parameter, you must use the same values for <code>Filters</code>, if any, as in the previous request.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListResolverRulesRequest', required: [] })
  .openapi('ListResolverRulesRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags that are associated with the resource that you specified in the <code>ListTagsForResource</code> request.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If more than <code>MaxResults</code> tags match the specified criteria, you can submit another <code>ListTagsForResource</code> request to get the next group of results. In the next request, specify the value of <code>NextToken</code> from the previous response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the resource that you want to list tags for.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of tags that you want to return in the response to a <code>ListTagsForResource</code> request. If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 tags.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For the first <code>ListTagsForResource</code> request, omit this value.</p> <p>If you have more than <code>MaxResults</code> tags, you can submit another <code>ListTagsForResource</code> request to get the next group of tags for the resource. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const BooleanSchema = z.boolean().openapi('Boolean')

const PutFirewallRuleGroupPolicyResponseSchema = z
  .object({
    ReturnValue: BooleanSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutFirewallRuleGroupPolicyResponse')

const PutFirewallRuleGroupPolicyRequestSchema = z
  .object({
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN (Amazon Resource Name) for the rule group that you want to share.',
        }),
    ),
    FirewallRuleGroupPolicy: FirewallRuleGroupPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'The Identity and Access Management (Amazon Web Services IAM) policy to attach to the rule group.',
        }),
    ),
  })
  .openapi({
    required: ['Arn', 'FirewallRuleGroupPolicy'],
    title: 'PutFirewallRuleGroupPolicyRequest',
  })
  .openapi('PutFirewallRuleGroupPolicyRequest')

const PutResolverQueryLogConfigPolicyResponseSchema = z
  .object({
    ReturnValue: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the <code>PutResolverQueryLogConfigPolicy</code> request was successful.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The response to a <code>PutResolverQueryLogConfigPolicy</code> request.',
    required: [],
  })
  .openapi('PutResolverQueryLogConfigPolicyResponse')

const PutResolverQueryLogConfigPolicyRequestSchema = z
  .object({
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the account that you want to share rules with.',
        }),
    ),
    ResolverQueryLogConfigPolicy: ResolverQueryLogConfigPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An Identity and Access Management policy statement that lists the query logging configurations that you want to share with another Amazon Web Services account and the operations that you want the account to be able to perform. You can specify the following operations in the <code>Actions</code> section of the statement:</p> <ul> <li> <p> <code>route53resolver:AssociateResolverQueryLogConfig</code> </p> </li> <li> <p> <code>route53resolver:DisassociateResolverQueryLogConfig</code> </p> </li> <li> <p> <code>route53resolver:ListResolverQueryLogConfigAssociations</code> </p> </li> <li> <p> <code>route53resolver:ListResolverQueryLogConfigs</code> </p> </li> </ul> <p>In the <code>Resource</code> section of the statement, you specify the ARNs for the query logging configurations that you want to share with the account that you specified in <code>Arn</code>. </p>',
        }),
    ),
  })
  .openapi({
    required: ['Arn', 'ResolverQueryLogConfigPolicy'],
    title: 'PutResolverQueryLogConfigPolicyRequest',
  })
  .openapi('PutResolverQueryLogConfigPolicyRequest')

const InvalidPolicyDocumentSchema = z.any().openapi('InvalidPolicyDocument')

const PutResolverRulePolicyResponseSchema = z
  .object({
    ReturnValue: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the <code>PutResolverRulePolicy</code> request was successful.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The response to a <code>PutResolverRulePolicy</code> request.',
    required: [],
  })
  .openapi('PutResolverRulePolicyResponse')

const PutResolverRulePolicyRequestSchema = z
  .object({
    Arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the rule that you want to share with another account.',
        }),
    ),
    ResolverRulePolicy: ResolverRulePolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An Identity and Access Management policy statement that lists the rules that you want to share with another Amazon Web Services account and the operations that you want the account to be able to perform. You can specify the following operations in the <code>Action</code> section of the statement:</p> <ul> <li> <p> <code>route53resolver:GetResolverRule</code> </p> </li> <li> <p> <code>route53resolver:AssociateResolverRule</code> </p> </li> <li> <p> <code>route53resolver:DisassociateResolverRule</code> </p> </li> <li> <p> <code>route53resolver:ListResolverRules</code> </p> </li> <li> <p> <code>route53resolver:ListResolverRuleAssociations</code> </p> </li> </ul> <p>In the <code>Resource</code> section of the statement, specify the ARN for the rule that you want to share with another account. Specify the same ARN that you specified in <code>Arn</code>.</p>',
        }),
    ),
  })
  .openapi({ required: ['Arn', 'ResolverRulePolicy'], title: 'PutResolverRulePolicyRequest' })
  .openapi('PutResolverRulePolicyRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the resource that you want to add tags to. To get the ARN for a resource, use the applicable <code>Get</code> or <code>List</code> command: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRuleAssociation.html">GetResolverRuleAssociation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a> </p> </li> </ul>',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags that you want to add to the specified resource.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const InvalidTagExceptionSchema = z.any().openapi('InvalidTagException')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).max(200).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the resource that you want to remove tags from. To get the ARN for a resource, use the applicable <code>Get</code> or <code>List</code> command: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRuleAssociation.html">GetResolverRuleAssociation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a> </p> </li> </ul>',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({ description: 'The tags that you want to remove to the specified resource.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateFirewallConfigResponseSchema = z
  .object({
    FirewallConfig: FirewallConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration of the firewall behavior provided by DNS Firewall for a single VPC. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFirewallConfigResponse')

const UpdateFirewallConfigRequestSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the VPC that the configuration is for.' }),
    ),
    FirewallFailOpen: FirewallFailOpenStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines how Route 53 Resolver handles queries during failures, for example when all traffic that is sent to DNS Firewall fails to receive a reply. </p> <ul> <li> <p>By default, fail open is disabled, which means the failure mode is closed. This approach favors security over availability. DNS Firewall blocks queries that it is unable to evaluate properly. </p> </li> <li> <p>If you enable this option, the failure mode is open. This approach favors availability over security. DNS Firewall allows queries to proceed if it is unable to properly evaluate them. </p> </li> </ul> <p>This behavior is only enforced for VPCs that have at least one DNS Firewall rule group association. </p>',
        }),
    ),
  })
  .openapi({ required: ['ResourceId', 'FirewallFailOpen'], title: 'UpdateFirewallConfigRequest' })
  .openapi('UpdateFirewallConfigRequest')

const UpdateFirewallDomainsResponseSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the firewall domain list that DNS Firewall just updated.',
        }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the domain list. ' }),
    ).exactOptional(),
    Status: FirewallDomainListStatusSchema.and(
      z.any().openapi({ description: 'Status of the <code>UpdateFirewallDomains</code> request.' }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description: 'Additional information about the status of the list, if available.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFirewallDomainsResponse')

const FirewallDomainUpdateOperationSchema = z
  .enum(['ADD', 'REMOVE', 'REPLACE'])
  .openapi('FirewallDomainUpdateOperation')

const UpdateFirewallDomainsRequestSchema = z
  .object({
    FirewallDomainListId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the domain list whose domains you want to update. ' }),
    ),
    Operation: FirewallDomainUpdateOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>What you want DNS Firewall to do with the domains that you are providing: </p> <ul> <li> <p> <code>ADD</code> - Add the domains to the ones that are already in the domain list. </p> </li> <li> <p> <code>REMOVE</code> - Search the domain list for the domains and remove them from the list.</p> </li> <li> <p> <code>REPLACE</code> - Update the domain list to exactly match the list that you are providing. </p> </li> </ul>',
        }),
    ),
    Domains: FirewallDomainsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of domains to use in the update operation.</p> <important> <p>There is a limit of 1000 domains per request.</p> </important> <p>Each domain specification in your domain list must satisfy the following requirements: </p> <ul> <li> <p>It can optionally start with <code>*</code> (asterisk).</p> </li> <li> <p>With the exception of the optional starting asterisk, it must only contain the following characters: <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>-</code> (hyphen).</p> </li> <li> <p>It must be from 1-255 characters in length. </p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['FirewallDomainListId', 'Operation', 'Domains'],
    title: 'UpdateFirewallDomainsRequest',
  })
  .openapi('UpdateFirewallDomainsRequest')

const UpdateFirewallRuleResponseSchema = z
  .object({
    FirewallRule: FirewallRuleSchema.and(
      z.any().openapi({ description: 'The firewall rule that you just updated. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFirewallRuleResponse')

const UpdateFirewallRuleRequestSchema = z
  .object({
    FirewallRuleGroupId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier of the firewall rule group for the rule. ',
        }),
    ),
    FirewallDomainListId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the domain list to use in the rule. ' }),
    ),
    Priority: PrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The setting that determines the processing order of the rule in the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.</p> <p>You must specify a unique priority for each rule in a rule group. To make it easier to insert rules later, leave space between the numbers, for example, use 100, 200, and so on. You can change the priority setting for the rules in a rule group at any time.</p>',
        }),
    ).exactOptional(),
    Action: ActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list:</p> <ul> <li> <p> <code>ALLOW</code> - Permit the request to go through.</p> </li> <li> <p> <code>ALERT</code> - Permit the request to go through but send an alert to the logs.</p> </li> <li> <p> <code>BLOCK</code> - Disallow the request. This option requires additional details in the rule's <code>BlockResponse</code>. </p> </li> </ul>",
        }),
    ).exactOptional(),
    BlockResponse: BlockResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The way that you want DNS Firewall to block the request. Used for the rule action setting <code>BLOCK</code>.</p> <ul> <li> <p> <code>NODATA</code> - Respond indicating that the query was successful, but no response is available for it.</p> </li> <li> <p> <code>NXDOMAIN</code> - Respond indicating that the domain name that's in the query doesn't exist.</p> </li> <li> <p> <code>OVERRIDE</code> - Provide a custom override in the response. This option requires custom handling details in the rule's <code>BlockOverride*</code> settings. </p> </li> </ul>",
        }),
    ).exactOptional(),
    BlockOverrideDomain: BlockOverrideDomainSchema.and(
      z
        .any()
        .openapi({
          description:
            'The custom DNS record to send back in response to the query. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.',
        }),
    ).exactOptional(),
    BlockOverrideDnsType: BlockOverrideDnsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The DNS record's type. This determines the format of the record value that you provided in <code>BlockOverrideDomain</code>. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.",
        }),
    ).exactOptional(),
    BlockOverrideTtl: BlockOverrideTtlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action <code>BLOCK</code> with a <code>BlockResponse</code> setting of <code>OVERRIDE</code>.',
        }),
    ).exactOptional(),
    Name: NameSchema.and(z.any().openapi({ description: 'The name of the rule.' })).exactOptional(),
  })
  .openapi({
    required: ['FirewallRuleGroupId', 'FirewallDomainListId'],
    title: 'UpdateFirewallRuleRequest',
  })
  .openapi('UpdateFirewallRuleRequest')

const UpdateFirewallRuleGroupAssociationResponseSchema = z
  .object({
    FirewallRuleGroupAssociation: FirewallRuleGroupAssociationSchema.and(
      z.any().openapi({ description: 'The association that you just updated. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFirewallRuleGroupAssociationResponse')

const UpdateFirewallRuleGroupAssociationRequestSchema = z
  .object({
    FirewallRuleGroupAssociationId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the <a>FirewallRuleGroupAssociation</a>. ' }),
    ),
    Priority: PrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The setting that determines the processing order of the rule group among the rule groups that you associate with the specified VPC. DNS Firewall filters VPC traffic starting from the rule group with the lowest numeric priority setting. </p> <p>You must specify a unique priority for each rule group that you associate with a single VPC. To make it easier to insert rule groups later, leave space between the numbers, for example, use 100, 200, and so on. You can change the priority setting for a rule group association after you create it.</p>',
        }),
    ).exactOptional(),
    MutationProtection: MutationProtectionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections. ',
        }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the rule group association.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FirewallRuleGroupAssociationId'],
    title: 'UpdateFirewallRuleGroupAssociationRequest',
  })
  .openapi('UpdateFirewallRuleGroupAssociationRequest')

const UpdateResolverConfigResponseSchema = z
  .object({
    ResolverConfig: ResolverConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'An array that contains settings for the specified Resolver configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateResolverConfigResponse')

const AutodefinedReverseFlagSchema = z
  .enum(['ENABLE', 'DISABLE', 'USE_LOCAL_RESOURCE_SETTING'])
  .openapi('AutodefinedReverseFlag')

const UpdateResolverConfigRequestSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Resource ID of the Amazon VPC that you want to update the Resolver configuration for.',
        }),
    ),
    AutodefinedReverseFlag: AutodefinedReverseFlagSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether or not the Resolver will create autodefined rules for reverse DNS lookups. This is enabled by default. Disabling this option will also affect EC2-Classic instances using ClassicLink. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon EC2 guide</i>.</p> <important> <p>We are retiring EC2-Classic on August 15, 2022. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 guide</i> and the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring – Here’s How to Prepare</a>.</p> </important> <note> <p>It can take some time for the status change to be completed.</p> </note> <p/>',
        }),
    ),
  })
  .openapi({
    required: ['ResourceId', 'AutodefinedReverseFlag'],
    title: 'UpdateResolverConfigRequest',
  })
  .openapi('UpdateResolverConfigRequest')

const UpdateResolverDnssecConfigResponseSchema = z
  .object({
    ResolverDNSSECConfig: ResolverDnssecConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains settings for the specified DNSSEC configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateResolverDnssecConfigResponse')

const ValidationSchema = z
  .enum(['ENABLE', 'DISABLE', 'USE_LOCAL_RESOURCE_SETTING'])
  .openapi('Validation')

const UpdateResolverDnssecConfigRequestSchema = z
  .object({
    ResourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the virtual private cloud (VPC) that you're updating the DNSSEC validation status for.",
        }),
    ),
    Validation: ValidationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new value that you are specifying for DNSSEC validation for the VPC. The value can be <code>ENABLE</code> or <code>DISABLE</code>. Be aware that it can take time for a validation status change to be completed.',
        }),
    ),
  })
  .openapi({ required: ['ResourceId', 'Validation'], title: 'UpdateResolverDnssecConfigRequest' })
  .openapi('UpdateResolverDnssecConfigRequest')

const UpdateResolverEndpointResponseSchema = z
  .object({
    ResolverEndpoint: ResolverEndpointSchema.and(
      z
        .any()
        .openapi({
          description: 'The response to an <code>UpdateResolverEndpoint</code> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateResolverEndpointResponse')

const UpdateIpAddressSchema = z
  .object({
    IpId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ID of the IP address, specified by the <code>ResolverEndpointId</code>. ',
        }),
    ),
    Ipv6: Ipv6Schema.and(
      z.any().openapi({ description: ' The IPv6 address that you want to use for DNS queries. ' }),
    ),
  })
  .openapi({
    required: ['IpId', 'Ipv6'],
    description:
      ' Provides information about the IP address type in response to <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a>. ',
  })
  .openapi('UpdateIpAddress')

const UpdateIpAddressesSchema = z
  .array(UpdateIpAddressSchema)
  .min(0)
  .max(50)
  .openapi('UpdateIpAddresses')

const UpdateResolverEndpointRequestSchema = z
  .object({
    ResolverEndpointId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the Resolver endpoint that you want to update.' }),
    ),
    Name: NameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the Resolver endpoint that you want to update.' }),
    ).exactOptional(),
    ResolverEndpointType: ResolverEndpointTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the endpoint type for what type of IP address the endpoint uses to forward DNS queries. ',
        }),
    ).exactOptional(),
    UpdateIpAddresses: UpdateIpAddressesSchema.and(
      z
        .any()
        .openapi({
          description: ' Updates the Resolver endpoint type to IpV4, Ipv6, or dual-stack. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResolverEndpointId'], title: 'UpdateResolverEndpointRequest' })
  .openapi('UpdateResolverEndpointRequest')

const UpdateResolverRuleResponseSchema = z
  .object({
    ResolverRule: ResolverRuleSchema.and(
      z
        .any()
        .openapi({ description: 'The response to an <code>UpdateResolverRule</code> request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateResolverRuleResponse')

const ResolverRuleConfigSchema = z
  .object({
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new name for the Resolver rule. The name that you specify appears in the Resolver dashboard in the Route 53 console. ',
        }),
    ).exactOptional(),
    TargetIps: TargetListSchema.and(
      z
        .any()
        .openapi({
          description:
            'For DNS queries that originate in your VPC, the new IP addresses that you want to route outbound DNS queries to.',
        }),
    ).exactOptional(),
    ResolverEndpointId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the new outbound Resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify in <code>TargetIps</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request, information about the changes that you want to make.',
    required: [],
  })
  .openapi('ResolverRuleConfig')

const UpdateResolverRuleRequestSchema = z
  .object({
    ResolverRuleId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the Resolver rule that you want to update.' }),
    ),
    Config: ResolverRuleConfigSchema.and(
      z.any().openapi({ description: 'The new settings for the Resolver rule.' }),
    ),
  })
  .openapi({ required: ['ResolverRuleId', 'Config'], title: 'UpdateResolverRuleRequest' })
  .openapi('UpdateResolverRuleRequest')

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

export const postXAmzTargetRoute53ResolverAssociateFirewallRuleGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup',
  description:
    'Associates a <a>FirewallRuleGroup</a> with a VPC, to provide DNS filtering for the VPC. ',
  operationId: 'AssociateFirewallRuleGroup',
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
        .literal('Route53Resolver.AssociateFirewallRuleGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.AssociateFirewallRuleGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateFirewallRuleGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateFirewallRuleGroupResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverAssociateResolverEndpointIpAddressRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress',
  description:
    '<p>Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address, submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To remove an IP address from an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html">DisassociateResolverEndpointIpAddress</a>. </p>',
  operationId: 'AssociateResolverEndpointIpAddress',
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
        .literal('Route53Resolver.AssociateResolverEndpointIpAddress')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Route53Resolver.AssociateResolverEndpointIpAddress'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateResolverEndpointIpAddressRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateResolverEndpointIpAddressResponseSchema } },
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    484: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverAssociateResolverQueryLogConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig',
  description:
    '<p>Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one <code>AssociateResolverQueryLogConfig</code> request for each VPC.</p> <note> <p>The VPCs that you associate with a query logging configuration must be in the same Region as the configuration.</p> </note> <p>To remove a VPC from a query logging configuration, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>. </p>',
  operationId: 'AssociateResolverQueryLogConfig',
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
        .literal('Route53Resolver.AssociateResolverQueryLogConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.AssociateResolverQueryLogConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateResolverQueryLogConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateResolverQueryLogConfigResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    487: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverAssociateResolverRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.AssociateResolverRule',
  description:
    'Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>. ',
  operationId: 'AssociateResolverRule',
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
        .literal('Route53Resolver.AssociateResolverRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.AssociateResolverRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateResolverRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateResolverRuleResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    486: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    487: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverCreateFirewallDomainListRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.CreateFirewallDomainList',
  description:
    'Creates an empty firewall domain list for use in DNS Firewall rules. You can populate the domains for the new list with a file, using <a>ImportFirewallDomains</a>, or with domain strings, using <a>UpdateFirewallDomains</a>. ',
  operationId: 'CreateFirewallDomainList',
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
        .literal('Route53Resolver.CreateFirewallDomainList')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.CreateFirewallDomainList'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateFirewallDomainListRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFirewallDomainListResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverCreateFirewallRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.CreateFirewallRule',
  description:
    'Creates a single DNS Firewall rule in the specified rule group, using the specified domain list.',
  operationId: 'CreateFirewallRule',
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
        .literal('Route53Resolver.CreateFirewallRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.CreateFirewallRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateFirewallRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFirewallRuleResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverCreateFirewallRuleGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup',
  description:
    'Creates an empty DNS Firewall rule group for filtering DNS network traffic in a VPC. You can add rules to the new rule group by calling <a>CreateFirewallRule</a>. ',
  operationId: 'CreateFirewallRuleGroup',
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
        .literal('Route53Resolver.CreateFirewallRuleGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.CreateFirewallRuleGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateFirewallRuleGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFirewallRuleGroupResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverCreateResolverEndpointRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.CreateResolverEndpoint',
  description:
    '<p>Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:</p> <ul> <li> <p>An <i>inbound Resolver endpoint</i> forwards DNS queries to the DNS service for a VPC from your network.</p> </li> <li> <p>An <i>outbound Resolver endpoint</i> forwards DNS queries from the DNS service for a VPC to your network.</p> </li> </ul>',
  operationId: 'CreateResolverEndpoint',
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
        .literal('Route53Resolver.CreateResolverEndpoint')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.CreateResolverEndpoint'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateResolverEndpointRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateResolverEndpointResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverCreateResolverQueryLogConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig',
  description:
    '<p>Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs. Resolver can log queries only for VPCs that are in the same Region as the query logging configuration.</p> <p>To specify which VPCs you want to log queries for, you use <code>AssociateResolverQueryLogConfig</code>. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>. </p> <p>You can optionally use Resource Access Manager (RAM) to share a query logging configuration with other Amazon Web Services accounts. The other accounts can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all VPCs that are associated with the configuration.</p>',
  operationId: 'CreateResolverQueryLogConfig',
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
        .literal('Route53Resolver.CreateResolverQueryLogConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.CreateResolverQueryLogConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateResolverQueryLogConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateResolverQueryLogConfigResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    487: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverCreateResolverRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.CreateResolverRule',
  description:
    'For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.',
  operationId: 'CreateResolverRule',
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
        .literal('Route53Resolver.CreateResolverRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.CreateResolverRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateResolverRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateResolverRuleResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    485: {
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    487: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverDeleteFirewallDomainListRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList',
  description: 'Deletes the specified domain list. ',
  operationId: 'DeleteFirewallDomainList',
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
        .literal('Route53Resolver.DeleteFirewallDomainList')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.DeleteFirewallDomainList'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteFirewallDomainListRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFirewallDomainListResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverDeleteFirewallRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.DeleteFirewallRule',
  description: 'Deletes the specified firewall rule.',
  operationId: 'DeleteFirewallRule',
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
        .literal('Route53Resolver.DeleteFirewallRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.DeleteFirewallRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteFirewallRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFirewallRuleResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverDeleteFirewallRuleGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup',
  description: 'Deletes the specified firewall rule group. ',
  operationId: 'DeleteFirewallRuleGroup',
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
        .literal('Route53Resolver.DeleteFirewallRuleGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.DeleteFirewallRuleGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteFirewallRuleGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFirewallRuleGroupResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverDeleteResolverEndpointRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint',
  description:
    "<p>Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound Resolver endpoint:</p> <ul> <li> <p> <b>Inbound</b>: DNS queries from your network are no longer routed to the DNS service for the specified VPC.</p> </li> <li> <p> <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network.</p> </li> </ul>",
  operationId: 'DeleteResolverEndpoint',
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
        .literal('Route53Resolver.DeleteResolverEndpoint')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.DeleteResolverEndpoint'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteResolverEndpointRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteResolverEndpointResponseSchema } },
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverDeleteResolverQueryLogConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig',
  description:
    '<p>Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are associated with the configuration. This also applies if the query logging configuration is shared with other Amazon Web Services accounts, and the other accounts have associated VPCs with the shared configuration.</p> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.</p> <p>If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs that they associated with the configuration, but that\'s not necessary. If you stop sharing the configuration, those VPCs are automatically disassociated from the configuration.</p>',
  operationId: 'DeleteResolverQueryLogConfig',
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
        .literal('Route53Resolver.DeleteResolverQueryLogConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.DeleteResolverQueryLogConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteResolverQueryLogConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteResolverQueryLogConfigResponseSchema } },
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverDeleteResolverRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.DeleteResolverRule',
  description:
    'Deletes a Resolver rule. Before you can delete a Resolver rule, you must disassociate it from all the VPCs that you associated the Resolver rule with. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>.',
  operationId: 'DeleteResolverRule',
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
        .literal('Route53Resolver.DeleteResolverRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.DeleteResolverRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteResolverRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteResolverRuleResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverDisassociateFirewallRuleGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup',
  description:
    'Disassociates a <a>FirewallRuleGroup</a> from a VPC, to remove DNS filtering from the VPC. ',
  operationId: 'DisassociateFirewallRuleGroup',
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
        .literal('Route53Resolver.DisassociateFirewallRuleGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.DisassociateFirewallRuleGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateFirewallRuleGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateFirewallRuleGroupResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverDisassociateResolverEndpointIpAddressRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress',
  description:
    '<p>Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address, submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To add an IP address to an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html">AssociateResolverEndpointIpAddress</a>. </p>',
  operationId: 'DisassociateResolverEndpointIpAddress',
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
        .literal('Route53Resolver.DisassociateResolverEndpointIpAddress')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Route53Resolver.DisassociateResolverEndpointIpAddress'],
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: DisassociateResolverEndpointIpAddressRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DisassociateResolverEndpointIpAddressResponseSchema },
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceExistsException',
      content: { 'application/json': { schema: ResourceExistsExceptionSchema } },
    },
    484: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverDisassociateResolverQueryLogConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig',
  description:
    '<p>Disassociates a VPC from a query logging configuration.</p> <note> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, VPCs can be disassociated from the configuration in the following ways:</p> <ul> <li> <p>The accounts that you shared the configuration with can disassociate VPCs from the configuration.</p> </li> <li> <p>You can stop sharing the configuration.</p> </li> </ul> </note>',
  operationId: 'DisassociateResolverQueryLogConfig',
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
        .literal('Route53Resolver.DisassociateResolverQueryLogConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Route53Resolver.DisassociateResolverQueryLogConfig'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateResolverQueryLogConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateResolverQueryLogConfigResponseSchema } },
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverDisassociateResolverRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.DisassociateResolverRule',
  description:
    '<p>Removes the association between a specified Resolver rule and a specified VPC.</p> <important> <p>If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the Resolver rule. </p> </important>',
  operationId: 'DisassociateResolverRule',
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
        .literal('Route53Resolver.DisassociateResolverRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.DisassociateResolverRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateResolverRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateResolverRuleResponseSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverGetFirewallConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.GetFirewallConfig',
  description:
    'Retrieves the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). ',
  operationId: 'GetFirewallConfig',
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
        .literal('Route53Resolver.GetFirewallConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.GetFirewallConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetFirewallConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFirewallConfigResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverGetFirewallDomainListRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.GetFirewallDomainList',
  description: 'Retrieves the specified firewall domain list.',
  operationId: 'GetFirewallDomainList',
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
        .literal('Route53Resolver.GetFirewallDomainList')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.GetFirewallDomainList'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetFirewallDomainListRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFirewallDomainListResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverGetFirewallRuleGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup',
  description: 'Retrieves the specified firewall rule group. ',
  operationId: 'GetFirewallRuleGroup',
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
        .literal('Route53Resolver.GetFirewallRuleGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.GetFirewallRuleGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetFirewallRuleGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFirewallRuleGroupResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverGetFirewallRuleGroupAssociationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation',
  description:
    'Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.',
  operationId: 'GetFirewallRuleGroupAssociation',
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
        .literal('Route53Resolver.GetFirewallRuleGroupAssociation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.GetFirewallRuleGroupAssociation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetFirewallRuleGroupAssociationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFirewallRuleGroupAssociationResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverGetFirewallRuleGroupPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy',
  description:
    'Returns the Identity and Access Management (Amazon Web Services IAM) policy for sharing the specified rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). ',
  operationId: 'GetFirewallRuleGroupPolicy',
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
        .literal('Route53Resolver.GetFirewallRuleGroupPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.GetFirewallRuleGroupPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetFirewallRuleGroupPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFirewallRuleGroupPolicyResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverGetResolverConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.GetResolverConfig',
  description:
    'Retrieves the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.',
  operationId: 'GetResolverConfig',
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
        .literal('Route53Resolver.GetResolverConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.GetResolverConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetResolverConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResolverConfigResponseSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverGetResolverDnssecConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig',
  description: 'Gets DNSSEC validation information for a specified resource.',
  operationId: 'GetResolverDnssecConfig',
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
        .literal('Route53Resolver.GetResolverDnssecConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.GetResolverDnssecConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetResolverDnssecConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResolverDnssecConfigResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverGetResolverEndpointRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.GetResolverEndpoint',
  description:
    "Gets information about a specified Resolver endpoint, such as whether it's an inbound or an outbound Resolver endpoint, and the current status of the endpoint.",
  operationId: 'GetResolverEndpoint',
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
        .literal('Route53Resolver.GetResolverEndpoint')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.GetResolverEndpoint'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetResolverEndpointRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResolverEndpointResponseSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverGetResolverQueryLogConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig',
  description:
    'Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to. ',
  operationId: 'GetResolverQueryLogConfig',
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
        .literal('Route53Resolver.GetResolverQueryLogConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.GetResolverQueryLogConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetResolverQueryLogConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResolverQueryLogConfigResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverGetResolverQueryLogConfigAssociationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation',
  description:
    'Gets information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC.',
  operationId: 'GetResolverQueryLogConfigAssociation',
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
        .literal('Route53Resolver.GetResolverQueryLogConfigAssociation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Route53Resolver.GetResolverQueryLogConfigAssociation'],
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GetResolverQueryLogConfigAssociationRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: GetResolverQueryLogConfigAssociationResponseSchema },
      },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverGetResolverQueryLogConfigPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy',
  description:
    'Gets information about a query logging policy. A query logging policy specifies the Resolver query logging operations and resources that you want to allow another Amazon Web Services account to be able to use.',
  operationId: 'GetResolverQueryLogConfigPolicy',
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
        .literal('Route53Resolver.GetResolverQueryLogConfigPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.GetResolverQueryLogConfigPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetResolverQueryLogConfigPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResolverQueryLogConfigPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverGetResolverRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.GetResolverRule',
  description:
    'Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound Resolver endpoint that the rule is associated with.',
  operationId: 'GetResolverRule',
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
        .literal('Route53Resolver.GetResolverRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.GetResolverRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetResolverRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResolverRuleResponseSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverGetResolverRuleAssociationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation',
  description:
    'Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>. ',
  operationId: 'GetResolverRuleAssociation',
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
        .literal('Route53Resolver.GetResolverRuleAssociation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.GetResolverRuleAssociation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetResolverRuleAssociationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResolverRuleAssociationResponseSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverGetResolverRulePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.GetResolverRulePolicy',
  description:
    'Gets information about the Resolver rule policy for a specified rule. A Resolver rule policy includes the rule that you want to share with another account, the account that you want to share the rule with, and the Resolver operations that you want to allow the account to use. ',
  operationId: 'GetResolverRulePolicy',
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
        .literal('Route53Resolver.GetResolverRulePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.GetResolverRulePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetResolverRulePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResolverRulePolicyResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverImportFirewallDomainsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.ImportFirewallDomains',
  description:
    '<p>Imports domain names from a file into a domain list, for use in a DNS firewall rule group. </p> <p>Each domain specification in your domain list must satisfy the following requirements: </p> <ul> <li> <p>It can optionally start with <code>*</code> (asterisk).</p> </li> <li> <p>With the exception of the optional starting asterisk, it must only contain the following characters: <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>-</code> (hyphen).</p> </li> <li> <p>It must be from 1-255 characters in length. </p> </li> </ul>',
  operationId: 'ImportFirewallDomains',
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
        .literal('Route53Resolver.ImportFirewallDomains')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.ImportFirewallDomains'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ImportFirewallDomainsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportFirewallDomainsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverListFirewallConfigsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.ListFirewallConfigs',
  description:
    '<p>Retrieves the firewall configurations that you have defined. DNS Firewall uses the configurations to manage firewall behavior for your VPCs. </p> <p>A single call might return only a partial list of the configurations. For information, see <code>MaxResults</code>. </p>',
  operationId: 'ListFirewallConfigs',
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
        .literal('Route53Resolver.ListFirewallConfigs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.ListFirewallConfigs'] },
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
      content: { 'application/json': { schema: ListFirewallConfigsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFirewallConfigsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverListFirewallDomainListsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.ListFirewallDomainLists',
  description:
    '<p>Retrieves the firewall domain lists that you have defined. For each firewall domain list, you can retrieve the domains that are defined for a list by calling <a>ListFirewallDomains</a>. </p> <p>A single call to this list operation might return only a partial list of the domain lists. For information, see <code>MaxResults</code>. </p>',
  operationId: 'ListFirewallDomainLists',
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
        .literal('Route53Resolver.ListFirewallDomainLists')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.ListFirewallDomainLists'] },
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
      content: { 'application/json': { schema: ListFirewallDomainListsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFirewallDomainListsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverListFirewallDomainsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.ListFirewallDomains',
  description:
    '<p>Retrieves the domains that you have defined for the specified firewall domain list. </p> <p>A single call might return only a partial list of the domains. For information, see <code>MaxResults</code>. </p>',
  operationId: 'ListFirewallDomains',
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
        .literal('Route53Resolver.ListFirewallDomains')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.ListFirewallDomains'] },
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
      content: { 'application/json': { schema: ListFirewallDomainsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFirewallDomainsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverListFirewallRuleGroupAssociationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations',
  description:
    '<p>Retrieves the firewall rule group associations that you have defined. Each association enables DNS filtering for a VPC with one rule group. </p> <p>A single call might return only a partial list of the associations. For information, see <code>MaxResults</code>. </p>',
  operationId: 'ListFirewallRuleGroupAssociations',
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
        .literal('Route53Resolver.ListFirewallRuleGroupAssociations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.ListFirewallRuleGroupAssociations'] },
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
      content: { 'application/json': { schema: ListFirewallRuleGroupAssociationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFirewallRuleGroupAssociationsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverListFirewallRuleGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups',
  description:
    '<p>Retrieves the minimal high-level information for the rule groups that you have defined. </p> <p>A single call might return only a partial list of the rule groups. For information, see <code>MaxResults</code>. </p>',
  operationId: 'ListFirewallRuleGroups',
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
        .literal('Route53Resolver.ListFirewallRuleGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.ListFirewallRuleGroups'] },
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
      content: { 'application/json': { schema: ListFirewallRuleGroupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFirewallRuleGroupsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverListFirewallRulesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.ListFirewallRules',
  description:
    '<p>Retrieves the firewall rules that you have defined for the specified firewall rule group. DNS Firewall uses the rules in a rule group to filter DNS network traffic for a VPC. </p> <p>A single call might return only a partial list of the rules. For information, see <code>MaxResults</code>. </p>',
  operationId: 'ListFirewallRules',
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
        .literal('Route53Resolver.ListFirewallRules')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.ListFirewallRules'] },
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
      content: { 'application/json': { schema: ListFirewallRulesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFirewallRulesResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverListResolverConfigsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.ListResolverConfigs',
  description:
    'Retrieves the Resolver configurations that you have defined. Route 53 Resolver uses the configurations to manage DNS resolution behavior for your VPCs.',
  operationId: 'ListResolverConfigs',
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
        .literal('Route53Resolver.ListResolverConfigs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.ListResolverConfigs'] },
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
      content: { 'application/json': { schema: ListResolverConfigsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResolverConfigsResponseSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverListResolverDnssecConfigsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs',
  description:
    'Lists the configurations for DNSSEC validation that are associated with the current Amazon Web Services account.',
  operationId: 'ListResolverDnssecConfigs',
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
        .literal('Route53Resolver.ListResolverDnssecConfigs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.ListResolverDnssecConfigs'] },
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
      content: { 'application/json': { schema: ListResolverDnssecConfigsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResolverDnssecConfigsResponseSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverListResolverEndpointIpAddressesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses',
  description: 'Gets the IP addresses for a specified Resolver endpoint.',
  operationId: 'ListResolverEndpointIpAddresses',
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
        .literal('Route53Resolver.ListResolverEndpointIpAddresses')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.ListResolverEndpointIpAddresses'] },
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
      content: { 'application/json': { schema: ListResolverEndpointIpAddressesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResolverEndpointIpAddressesResponseSchema } },
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverListResolverEndpointsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.ListResolverEndpoints',
  description:
    'Lists all the Resolver endpoints that were created using the current Amazon Web Services account.',
  operationId: 'ListResolverEndpoints',
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
        .literal('Route53Resolver.ListResolverEndpoints')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.ListResolverEndpoints'] },
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
      content: { 'application/json': { schema: ListResolverEndpointsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResolverEndpointsResponseSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverListResolverQueryLogConfigAssociationsRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations',
    description:
      'Lists information about associations between Amazon VPCs and query logging configurations.',
    operationId: 'ListResolverQueryLogConfigAssociations',
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
          .literal('Route53Resolver.ListResolverQueryLogConfigAssociations')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['Route53Resolver.ListResolverQueryLogConfigAssociations'],
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
          'application/json': { schema: ListResolverQueryLogConfigAssociationsRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListResolverQueryLogConfigAssociationsResponseSchema },
        },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      482: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      483: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
      484: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      485: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetRoute53ResolverListResolverQueryLogConfigsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs',
  description:
    'Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save DNS query logs and specifies the VPCs that you want to log queries for.',
  operationId: 'ListResolverQueryLogConfigs',
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
        .literal('Route53Resolver.ListResolverQueryLogConfigs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.ListResolverQueryLogConfigs'] },
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
      content: { 'application/json': { schema: ListResolverQueryLogConfigsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResolverQueryLogConfigsResponseSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverListResolverRuleAssociationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations',
  description:
    'Lists the associations that were created between Resolver rules and VPCs using the current Amazon Web Services account.',
  operationId: 'ListResolverRuleAssociations',
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
        .literal('Route53Resolver.ListResolverRuleAssociations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.ListResolverRuleAssociations'] },
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
      content: { 'application/json': { schema: ListResolverRuleAssociationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResolverRuleAssociationsResponseSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverListResolverRulesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.ListResolverRules',
  description:
    'Lists the Resolver rules that were created using the current Amazon Web Services account.',
  operationId: 'ListResolverRules',
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
        .literal('Route53Resolver.ListResolverRules')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.ListResolverRules'] },
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
      content: { 'application/json': { schema: ListResolverRulesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResolverRulesResponseSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.ListTagsForResource',
  description: 'Lists the tags that you associated with the specified resource.',
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
        .literal('Route53Resolver.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.ListTagsForResource'] },
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverPutFirewallRuleGroupPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy',
  description:
    'Attaches an Identity and Access Management (Amazon Web Services IAM) policy for sharing the rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). ',
  operationId: 'PutFirewallRuleGroupPolicy',
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
        .literal('Route53Resolver.PutFirewallRuleGroupPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.PutFirewallRuleGroupPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutFirewallRuleGroupPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutFirewallRuleGroupPolicyResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverPutResolverQueryLogConfigPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy',
  description:
    'Specifies an Amazon Web Services account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration.',
  operationId: 'PutResolverQueryLogConfigPolicy',
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
        .literal('Route53Resolver.PutResolverQueryLogConfigPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.PutResolverQueryLogConfigPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutResolverQueryLogConfigPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutResolverQueryLogConfigPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidPolicyDocument',
      content: { 'application/json': { schema: InvalidPolicyDocumentSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    484: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverPutResolverRulePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.PutResolverRulePolicy',
  description:
    'Specifies an Amazon Web Services rule that you want to share with another account, the account that you want to share the rule with, and the operations that you want the account to be able to perform on the rule.',
  operationId: 'PutResolverRulePolicy',
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
        .literal('Route53Resolver.PutResolverRulePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.PutResolverRulePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutResolverRulePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutResolverRulePolicyResponseSchema } },
    },
    480: {
      description: 'InvalidPolicyDocument',
      content: { 'application/json': { schema: InvalidPolicyDocumentSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'UnknownResourceException',
      content: { 'application/json': { schema: UnknownResourceExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.TagResource',
  description: 'Adds one or more tags to a specified resource.',
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
        .literal('Route53Resolver.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.TagResource'] },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidTagException',
      content: { 'application/json': { schema: InvalidTagExceptionSchema } },
    },
    485: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.UntagResource',
  description: 'Removes one or more tags from a specified resource.',
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
        .literal('Route53Resolver.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.UntagResource'] },
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverUpdateFirewallConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.UpdateFirewallConfig',
  description:
    'Updates the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). ',
  operationId: 'UpdateFirewallConfig',
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
        .literal('Route53Resolver.UpdateFirewallConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.UpdateFirewallConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateFirewallConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFirewallConfigResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverUpdateFirewallDomainsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.UpdateFirewallDomains',
  description: 'Updates the firewall domain list from an array of domain specifications. ',
  operationId: 'UpdateFirewallDomains',
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
        .literal('Route53Resolver.UpdateFirewallDomains')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.UpdateFirewallDomains'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateFirewallDomainsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFirewallDomainsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverUpdateFirewallRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.UpdateFirewallRule',
  description: 'Updates the specified firewall rule. ',
  operationId: 'UpdateFirewallRule',
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
        .literal('Route53Resolver.UpdateFirewallRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.UpdateFirewallRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateFirewallRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFirewallRuleResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverUpdateFirewallRuleGroupAssociationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation',
  description:
    'Changes the association of a <a>FirewallRuleGroup</a> with a VPC. The association enables DNS filtering for the VPC. ',
  operationId: 'UpdateFirewallRuleGroupAssociation',
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
        .literal('Route53Resolver.UpdateFirewallRuleGroupAssociation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Route53Resolver.UpdateFirewallRuleGroupAssociation'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateFirewallRuleGroupAssociationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFirewallRuleGroupAssociationResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverUpdateResolverConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.UpdateResolverConfig',
  description:
    'Updates the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.',
  operationId: 'UpdateResolverConfig',
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
        .literal('Route53Resolver.UpdateResolverConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.UpdateResolverConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateResolverConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateResolverConfigResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    487: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    488: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverUpdateResolverDnssecConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig',
  description:
    'Updates an existing DNSSEC validation configuration. If there is no existing DNSSEC validation configuration, one is created.',
  operationId: 'UpdateResolverDnssecConfig',
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
        .literal('Route53Resolver.UpdateResolverDnssecConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.UpdateResolverDnssecConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateResolverDnssecConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateResolverDnssecConfigResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverUpdateResolverEndpointRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint',
  description:
    "Updates the name, or enpoint type for an inbound or an outbound Resolver endpoint. You can only update between IPV4 and DUALSTACK, IPV6 endpoint type can't be updated to other type. ",
  operationId: 'UpdateResolverEndpoint',
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
        .literal('Route53Resolver.UpdateResolverEndpoint')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.UpdateResolverEndpoint'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateResolverEndpointRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateResolverEndpointResponseSchema } },
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRoute53ResolverUpdateResolverRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Resolver.UpdateResolverRule',
  description:
    "Updates settings for a specified Resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.",
  operationId: 'UpdateResolverRule',
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
        .literal('Route53Resolver.UpdateResolverRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Resolver.UpdateResolverRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateResolverRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateResolverRuleResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
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
      description: 'ResourceUnavailableException',
      content: { 'application/json': { schema: ResourceUnavailableExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})
