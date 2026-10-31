import { createRoute, z } from '@hono/zod-openapi'

const GenericStringSchema = z.string().max(255).openapi('GenericString')

const CustomRoutingEndpointDescriptionSchema = z
  .object({
    EndpointId: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ID for the endpoint. For custom routing accelerators, this is the virtual private cloud (VPC) subnet ID. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A complex type for an endpoint for a custom routing accelerator. Each endpoint group can include one or more endpoints, which are virtual private cloud (VPC) subnets.',
    required: [],
  })
  .openapi('CustomRoutingEndpointDescription')

const CustomRoutingEndpointDescriptionsSchema = z
  .array(CustomRoutingEndpointDescriptionSchema)
  .openapi('CustomRoutingEndpointDescriptions')

const AddCustomRoutingEndpointsResponseSchema = z
  .object({
    EndpointDescriptions: CustomRoutingEndpointDescriptionsSchema.and(
      z
        .any()
        .openapi({ description: 'The endpoint objects added to the custom routing accelerator.' }),
    ).exactOptional(),
    EndpointGroupArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the endpoint group for the custom routing endpoint.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddCustomRoutingEndpointsResponse')

const CustomRoutingEndpointConfigurationSchema = z
  .object({
    EndpointId: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ID for the endpoint. For custom routing accelerators, this is the virtual private cloud (VPC) subnet ID. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The list of endpoint objects. For custom routing, this is a list of virtual private cloud (VPC) subnet IDs.',
    required: [],
  })
  .openapi('CustomRoutingEndpointConfiguration')

const CustomRoutingEndpointConfigurationsSchema = z
  .array(CustomRoutingEndpointConfigurationSchema)
  .min(1)
  .max(20)
  .openapi('CustomRoutingEndpointConfigurations')

const AddCustomRoutingEndpointsRequestSchema = z
  .object({
    EndpointConfigurations: CustomRoutingEndpointConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of endpoint objects to add to a custom routing accelerator.',
        }),
    ),
    EndpointGroupArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the endpoint group for the custom routing endpoint.',
        }),
    ),
  })
  .openapi({
    required: ['EndpointConfigurations', 'EndpointGroupArn'],
    title: 'AddCustomRoutingEndpointsRequest',
  })
  .openapi('AddCustomRoutingEndpointsRequest')

const EndpointAlreadyExistsExceptionSchema = z.any().openapi('EndpointAlreadyExistsException')

const EndpointGroupNotFoundExceptionSchema = z.any().openapi('EndpointGroupNotFoundException')

const InternalServiceErrorExceptionSchema = z.any().openapi('InternalServiceErrorException')

const InvalidArgumentExceptionSchema = z.any().openapi('InvalidArgumentException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const EndpointWeightSchema = z.int().min(0).max(255).openapi('EndpointWeight')

const HealthStateSchema = z.enum(['INITIAL', 'HEALTHY', 'UNHEALTHY']).openapi('HealthState')

const GenericBooleanSchema = z.boolean().openapi('GenericBoolean')

const EndpointDescriptionSchema = z
  .object({
    EndpointId: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An ID for the endpoint. If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address allocation ID. For Amazon EC2 instances, this is the EC2 instance ID. </p> <p>An Application Load Balancer can be either internal or internet-facing.</p>',
        }),
    ).exactOptional(),
    Weight: EndpointWeightSchema.and(
      z
        .any()
        .openapi({
          description:
            'The weight associated with the endpoint. When you add weights to endpoints, you configure Global Accelerator to route traffic based on proportions that you specify. For example, you might specify endpoint weights of 4, 5, 5, and 6 (sum=20). The result is that 4/20 of your traffic, on average, is routed to the first endpoint, 5/20 is routed both to the second and third endpoints, and 6/20 is routed to the last endpoint. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html">Endpoint weights</a> in the <i>Global Accelerator Developer Guide</i>. ',
        }),
    ).exactOptional(),
    HealthState: HealthStateSchema.and(
      z.any().openapi({ description: 'The health status of the endpoint.' }),
    ).exactOptional(),
    HealthReason: GenericStringSchema.and(
      z.any().openapi({ description: 'Returns a null result.' }),
    ).exactOptional(),
    ClientIPPreservationEnabled: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether client IP address preservation is enabled for an endpoint. The value is true or false. The default value is true for new accelerators. </p> <p>If the value is set to true, the client\'s IP address is preserved in the <code>X-Forwarded-For</code> request header as traffic travels to applications on the endpoint fronted by the accelerator.</p> <p>Client IP address preservation is supported, in specific Amazon Web Services Regions, for endpoints that are Application Load Balancers and Amazon EC2 instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/preserve-client-ip-address.html"> Preserve client IP addresses in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A complex type for an endpoint. Each endpoint group can include one or more endpoints, such as load balancers.',
    required: [],
  })
  .openapi('EndpointDescription')

const EndpointDescriptionsSchema = z
  .array(EndpointDescriptionSchema)
  .openapi('EndpointDescriptions')

const AddEndpointsResponseSchema = z
  .object({
    EndpointDescriptions: EndpointDescriptionsSchema.and(
      z.any().openapi({ description: 'The list of endpoint objects.' }),
    ).exactOptional(),
    EndpointGroupArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the endpoint group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddEndpointsResponse')

const EndpointConfigurationSchema = z
  .object({
    EndpointId: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An ID for the endpoint. If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address allocation ID. For Amazon EC2 instances, this is the EC2 instance ID. A resource must be valid and active when you add it as an endpoint.</p> <p>An Application Load Balancer can be either internal or internet-facing.</p>',
        }),
    ).exactOptional(),
    Weight: EndpointWeightSchema.and(
      z
        .any()
        .openapi({
          description:
            'The weight associated with the endpoint. When you add weights to endpoints, you configure Global Accelerator to route traffic based on proportions that you specify. For example, you might specify endpoint weights of 4, 5, 5, and 6 (sum=20). The result is that 4/20 of your traffic, on average, is routed to the first endpoint, 5/20 is routed both to the second and third endpoints, and 6/20 is routed to the last endpoint. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html">Endpoint weights</a> in the <i>Global Accelerator Developer Guide</i>.',
        }),
    ).exactOptional(),
    ClientIPPreservationEnabled: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether client IP address preservation is enabled for an endpoint. The value is true or false. The default value is true for new accelerators. </p> <p>If the value is set to true, the client\'s IP address is preserved in the <code>X-Forwarded-For</code> request header as traffic travels to applications on the endpoint fronted by the accelerator.</p> <p>Client IP address preservation is supported, in specific Amazon Web Services Regions, for endpoints that are Application Load Balancers and Amazon EC2 instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/preserve-client-ip-address.html"> Preserve client IP addresses in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A complex type for endpoints. A resource must be valid and active when you add it as an endpoint.',
    required: [],
  })
  .openapi('EndpointConfiguration')

const EndpointConfigurationsSchema = z
  .array(EndpointConfigurationSchema)
  .min(0)
  .max(10)
  .openapi('EndpointConfigurations')

const AddEndpointsRequestSchema = z
  .object({
    EndpointConfigurations: EndpointConfigurationsSchema.and(
      z.any().openapi({ description: 'The list of endpoint objects.' }),
    ),
    EndpointGroupArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the endpoint group.' }),
    ),
  })
  .openapi({
    required: ['EndpointConfigurations', 'EndpointGroupArn'],
    title: 'AddEndpointsRequest',
  })
  .openapi('AddEndpointsRequest')

const TransactionInProgressExceptionSchema = z.any().openapi('TransactionInProgressException')

const ByoipCidrStateSchema = z
  .enum([
    'PENDING_PROVISIONING',
    'READY',
    'PENDING_ADVERTISING',
    'ADVERTISING',
    'PENDING_WITHDRAWING',
    'PENDING_DEPROVISIONING',
    'DEPROVISIONED',
    'FAILED_PROVISION',
    'FAILED_ADVERTISING',
    'FAILED_WITHDRAW',
    'FAILED_DEPROVISION',
  ])
  .openapi('ByoipCidrState')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ByoipCidrEventSchema = z
  .object({
    Message: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string that contains an <code>Event</code> message describing changes that you make in the status of an IP address range that you bring to Global Accelerator through bring your own IP address (BYOIP).',
        }),
    ).exactOptional(),
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A timestamp for when you make a status change for an IP address range that you bring to Global Accelerator through bring your own IP address (BYOIP).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A complex type that contains a <code>Message</code> and a <code>Timestamp</code> value for changes that you make in the status of an IP address range that you bring to Global Accelerator through bring your own IP address (BYOIP).',
    required: [],
  })
  .openapi('ByoipCidrEvent')

const ByoipCidrEventsSchema = z.array(ByoipCidrEventSchema).openapi('ByoipCidrEvents')

const ByoipCidrSchema = z
  .object({
    Cidr: GenericStringSchema.and(
      z.any().openapi({ description: 'The address range, in CIDR notation.' }),
    ).exactOptional(),
    State: ByoipCidrStateSchema.and(
      z.any().openapi({ description: 'The state of the address pool.' }),
    ).exactOptional(),
    Events: ByoipCidrEventsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A history of status changes for an IP address range that you bring to Global Accelerator through bring your own IP address (BYOIP).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Information about an IP address range that is provisioned for use with your Amazon Web Services resources through bring your own IP address (BYOIP).</p> <p>The following describes each BYOIP <code>State</code> that your IP address range can be in.</p> <ul> <li> <p> <b>PENDING_PROVISIONING</b> — You’ve submitted a request to provision an IP address range but it is not yet provisioned with Global Accelerator.</p> </li> <li> <p> <b>READY</b> — The address range is provisioned with Global Accelerator and can be advertised.</p> </li> <li> <p> <b>PENDING_ADVERTISING</b> — You’ve submitted a request for Global Accelerator to advertise an address range but it is not yet being advertised.</p> </li> <li> <p> <b>ADVERTISING</b> — The address range is being advertised by Global Accelerator.</p> </li> <li> <p> <b>PENDING_WITHDRAWING</b> — You’ve submitted a request to withdraw an address range from being advertised but it is still being advertised by Global Accelerator.</p> </li> <li> <p> <b>PENDING_DEPROVISIONING</b> — You’ve submitted a request to deprovision an address range from Global Accelerator but it is still provisioned.</p> </li> <li> <p> <b>DEPROVISIONED</b> — The address range is deprovisioned from Global Accelerator.</p> </li> <li> <p> <b>FAILED_PROVISION </b> — The request to provision the address range from Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.</p> </li> <li> <p> <b>FAILED_ADVERTISING</b> — The request for Global Accelerator to advertise the address range was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.</p> </li> <li> <p> <b>FAILED_WITHDRAW</b> — The request to withdraw the address range from advertising by Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.</p> </li> <li> <p> <b>FAILED_DEPROVISION </b> — The request to deprovision the address range from Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.</p> </li> </ul>',
    required: [],
  })
  .openapi('ByoipCidr')

const AdvertiseByoipCidrResponseSchema = z
  .object({
    ByoipCidr: ByoipCidrSchema.and(
      z.any().openapi({ description: 'Information about the address range.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdvertiseByoipCidrResponse')

const AdvertiseByoipCidrRequestSchema = z
  .object({
    Cidr: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The address range, in CIDR notation. This must be the exact range that you provisioned. You can't advertise only a portion of the provisioned range.",
        }),
    ),
  })
  .openapi({ required: ['Cidr'], title: 'AdvertiseByoipCidrRequest' })
  .openapi('AdvertiseByoipCidrRequest')

const ByoipCidrNotFoundExceptionSchema = z.any().openapi('ByoipCidrNotFoundException')

const IncorrectCidrStateExceptionSchema = z.any().openapi('IncorrectCidrStateException')

const IpAddressSchema = z.string().max(45).openapi('IpAddress')

const DestinationAddressesSchema = z.array(IpAddressSchema).max(100).openapi('DestinationAddresses')

const PortNumberSchema = z.int().min(1).max(65535).openapi('PortNumber')

const DestinationPortsSchema = z.array(PortNumberSchema).max(100).openapi('DestinationPorts')

const AllowCustomRoutingTrafficRequestSchema = z
  .object({
    EndpointGroupArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the endpoint group.' }),
    ),
    EndpointId: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ID for the endpoint. For custom routing accelerators, this is the virtual private cloud (VPC) subnet ID.',
        }),
    ),
    DestinationAddresses: DestinationAddressesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of specific Amazon EC2 instance IP addresses (destination addresses) in a subnet that you want to allow to receive traffic. The IP addresses must be a subset of the IP addresses that you specified for the endpoint group.</p> <p> <code>DestinationAddresses</code> is required if <code>AllowAllTrafficToEndpoint</code> is <code>FALSE</code> or is not specified.</p>',
        }),
    ).exactOptional(),
    DestinationPorts: DestinationPortsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of specific Amazon EC2 instance ports (destination ports) that you want to allow to receive traffic.',
        }),
    ).exactOptional(),
    AllowAllTrafficToEndpoint: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates whether all destination IP addresses and ports for a specified VPC subnet endpoint can receive traffic from a custom routing accelerator. The value is TRUE or FALSE. </p> <p>When set to TRUE, <i>all</i> destinations in the custom routing VPC subnet can receive traffic. Note that you cannot specify destination IP addresses and ports when the value is set to TRUE.</p> <p>When set to FALSE (or not specified), you <i>must</i> specify a list of destination IP addresses that are allowed to receive traffic. A list of ports is optional. If you don't specify a list of ports, the ports that can accept traffic is the same as the ports configured for the endpoint group.</p> <p>The default value is FALSE.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EndpointGroupArn', 'EndpointId'],
    title: 'AllowCustomRoutingTrafficRequest',
  })
  .openapi('AllowCustomRoutingTrafficRequest')

const IpAddressTypeSchema = z.enum(['IPV4', 'DUAL_STACK']).openapi('IpAddressType')

const IpAddressesSchema = z.array(IpAddressSchema).min(0).max(2).openapi('IpAddresses')

const IpAddressFamilySchema = z.enum(['IPv4', 'IPv6']).openapi('IpAddressFamily')

const IpSetSchema = z
  .object({
    IpFamily: GenericStringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'IpFamily is deprecated and has been replaced by IpAddressFamily.IpFamily has been replaced by IpAddressFamily',
        }),
    ).exactOptional(),
    IpAddresses: IpAddressesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of IP addresses in the IP address set. An IP address set can have a maximum of two IP addresses.',
        }),
    ).exactOptional(),
    IpAddressFamily: IpAddressFamilySchema.and(
      z.any().openapi({ description: 'The types of IP addresses included in this IP set. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A complex type for the set of IP addresses for an accelerator.',
    required: [],
  })
  .openapi('IpSet')

const IpSetsSchema = z.array(IpSetSchema).openapi('IpSets')

const AcceleratorStatusSchema = z.enum(['DEPLOYED', 'IN_PROGRESS']).openapi('AcceleratorStatus')

const AcceleratorEventSchema = z
  .object({
    Message: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string that contains an <code>Event</code> message describing changes or errors when you update an accelerator in Global Accelerator from IPv4 to dual-stack, or dual-stack to IPv4.',
        }),
    ).exactOptional(),
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A timestamp for when you update an accelerator in Global Accelerator from IPv4 to dual-stack, or dual-stack to IPv4.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A complex type that contains a <code>Timestamp</code> value and <code>Message</code> for changes that you make to an accelerator in Global Accelerator. Messages stored here provide progress or error information when you update an accelerator from IPv4 to dual-stack, or from dual-stack to IPv4. Global Accelerator stores a maximum of ten event messages. ',
    required: [],
  })
  .openapi('AcceleratorEvent')

const AcceleratorEventsSchema = z.array(AcceleratorEventSchema).openapi('AcceleratorEvents')

const AcceleratorSchema = z
  .object({
    AcceleratorArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the accelerator.' }),
    ).exactOptional(),
    Name: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the accelerator. The name must contain only alphanumeric characters or hyphens (-), and must not begin or end with a hyphen.',
        }),
    ).exactOptional(),
    IpAddressType: IpAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address type that an accelerator supports. For a standard accelerator, the value can be IPV4 or DUAL_STACK.',
        }),
    ).exactOptional(),
    Enabled: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the accelerator is enabled. The value is true or false. The default value is true. </p> <p>If the value is set to true, the accelerator cannot be deleted. If set to false, accelerator can be deleted.</p>',
        }),
    ).exactOptional(),
    IpSets: IpSetsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The static IP addresses that Global Accelerator associates with the accelerator.',
        }),
    ).exactOptional(),
    DnsName: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Domain Name System (DNS) name that Global Accelerator creates that points to an accelerator\'s static IPv4 addresses.</p> <p>The naming convention for the DNS name for an accelerator is the following: A lowercase letter a, followed by a 16-bit random hex string, followed by .awsglobalaccelerator.com. For example: a1234567890abcdef.awsglobalaccelerator.com.</p> <p>If you have a dual-stack accelerator, you also have a second DNS name, <code>DualStackDnsName</code>, that points to both the A record and the AAAA record for all four static addresses for the accelerator: two IPv4 addresses and two IPv6 addresses.</p> <p>For more information about the default DNS name, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/dns-addressing-custom-domains.dns-addressing.html"> Support for DNS addressing in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    Status: AcceleratorStatusSchema.and(
      z.any().openapi({ description: 'Describes the deployment status of the accelerator.' }),
    ).exactOptional(),
    CreatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the accelerator was created.' }),
    ).exactOptional(),
    LastModifiedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the accelerator was last modified.' }),
    ).exactOptional(),
    DualStackDnsName: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Domain Name System (DNS) name that Global Accelerator creates that points to a dual-stack accelerator\'s four static IP addresses: two IPv4 addresses and two IPv6 addresses.</p> <p>The naming convention for the dual-stack DNS name is the following: A lowercase letter a, followed by a 16-bit random hex string, followed by .dualstack.awsglobalaccelerator.com. For example: a1234567890abcdef.dualstack.awsglobalaccelerator.com.</p> <p>Note: Global Accelerator also assigns a default DNS name, <code>DnsName</code>, to your accelerator that points just to the static IPv4 addresses. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-accelerators.html#about-accelerators.dns-addressing"> Support for DNS addressing in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    Events: AcceleratorEventsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A history of changes that you make to an accelerator in Global Accelerator.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers.',
    required: [],
  })
  .openapi('Accelerator')

const CreateAcceleratorResponseSchema = z
  .object({
    Accelerator: AcceleratorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The accelerator that is created by specifying a listener and the supported IP address types.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAcceleratorResponse')

const IdempotencyTokenSchema = z.string().max(255).openapi('IdempotencyToken')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z.any().openapi({ description: 'A string that contains a <code>Tag</code> key.' }),
    ),
    Value: TagValueSchema.and(
      z.any().openapi({ description: 'A string that contains a <code>Tag</code> value.' }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description: 'A complex type that contains a <code>Tag</code> key and <code>Tag</code> value.',
  })
  .openapi('Tag')

const TagsSchema = z.array(TagSchema).openapi('Tags')

const CreateAcceleratorRequestSchema = z
  .object({
    Name: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the accelerator. The name can have a maximum of 64 characters, must contain only alphanumeric characters, periods (.), or hyphens (-), and must not begin or end with a hyphen or period.',
        }),
    ),
    IpAddressType: IpAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address type that an accelerator supports. For a standard accelerator, the value can be IPV4 or DUAL_STACK.',
        }),
    ).exactOptional(),
    IpAddresses: IpAddressesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Optionally, if you've added your own IP address pool to Global Accelerator (BYOIP), you can choose an IPv4 address from your own pool to use for the accelerator's static IPv4 address when you create an accelerator. </p> <p>After you bring an address range to Amazon Web Services, it appears in your account as an address pool. When you create an accelerator, you can assign one IPv4 address from your range to it. Global Accelerator assigns you a second static IPv4 address from an Amazon IP address range. If you bring two IPv4 address ranges to Amazon Web Services, you can assign one IPv4 address from each range to your accelerator. This restriction is because Global Accelerator assigns each address range to a different network zone, for high availability.</p> <p>You can specify one or two addresses, separated by a space. Do not include the /32 suffix.</p> <p>Note that you can't update IP addresses for an existing accelerator. To change them, you must create a new accelerator with the new addresses.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html\">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>",
        }),
    ).exactOptional(),
    Enabled: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether an accelerator is enabled. The value is true or false. The default value is true. </p> <p>If the value is set to true, an accelerator cannot be deleted. If set to false, the accelerator can be deleted.</p>',
        }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of an accelerator.',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Create tags for an accelerator.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'IdempotencyToken'], title: 'CreateAcceleratorRequest' })
  .openapi('CreateAcceleratorRequest')

const CustomRoutingAcceleratorStatusSchema = z
  .enum(['DEPLOYED', 'IN_PROGRESS'])
  .openapi('CustomRoutingAcceleratorStatus')

const CustomRoutingAcceleratorSchema = z
  .object({
    AcceleratorArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the custom routing accelerator.',
        }),
    ).exactOptional(),
    Name: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the accelerator. The name must contain only alphanumeric characters or hyphens (-), and must not begin or end with a hyphen.',
        }),
    ).exactOptional(),
    IpAddressType: IpAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address type that an accelerator supports. For a custom routing accelerator, the value must be IPV4.',
        }),
    ).exactOptional(),
    Enabled: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the accelerator is enabled. The value is true or false. The default value is true. </p> <p>If the value is set to true, the accelerator cannot be deleted. If set to false, accelerator can be deleted.</p>',
        }),
    ).exactOptional(),
    IpSets: IpSetsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The static IP addresses that Global Accelerator associates with the accelerator.',
        }),
    ).exactOptional(),
    DnsName: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Domain Name System (DNS) name that Global Accelerator creates that points to an accelerator\'s static IPv4 addresses. </p> <p>The naming convention for the DNS name is the following: A lowercase letter a, followed by a 16-bit random hex string, followed by .awsglobalaccelerator.com. For example: a1234567890abcdef.awsglobalaccelerator.com.</p> <p>If you have a dual-stack accelerator, you also have a second DNS name, <code>DualStackDnsName</code>, that points to both the A record and the AAAA record for all four static addresses for the accelerator: two IPv4 addresses and two IPv6 addresses.</p> <p>For more information about the default DNS name, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/dns-addressing-custom-domains.dns-addressing.html"> Support for DNS addressing in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    Status: CustomRoutingAcceleratorStatusSchema.and(
      z.any().openapi({ description: 'Describes the deployment status of the accelerator.' }),
    ).exactOptional(),
    CreatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the accelerator was created.' }),
    ).exactOptional(),
    LastModifiedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the accelerator was last modified.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Attributes of a custom routing accelerator.', required: [] })
  .openapi('CustomRoutingAccelerator')

const CreateCustomRoutingAcceleratorResponseSchema = z
  .object({
    Accelerator: CustomRoutingAcceleratorSchema.and(
      z.any().openapi({ description: 'The accelerator that is created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateCustomRoutingAcceleratorResponse')

const CreateCustomRoutingAcceleratorRequestSchema = z
  .object({
    Name: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a custom routing accelerator. The name can have a maximum of 64 characters, must contain only alphanumeric characters or hyphens (-), and must not begin or end with a hyphen.',
        }),
    ),
    IpAddressType: IpAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address type that an accelerator supports. For a custom routing accelerator, the value must be IPV4.',
        }),
    ).exactOptional(),
    IpAddresses: IpAddressesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Optionally, if you've added your own IP address pool to Global Accelerator (BYOIP), you can choose an IPv4 address from your own pool to use for the accelerator's static IPv4 address when you create an accelerator. </p> <p>After you bring an address range to Amazon Web Services, it appears in your account as an address pool. When you create an accelerator, you can assign one IPv4 address from your range to it. Global Accelerator assigns you a second static IPv4 address from an Amazon IP address range. If you bring two IPv4 address ranges to Amazon Web Services, you can assign one IPv4 address from each range to your accelerator. This restriction is because Global Accelerator assigns each address range to a different network zone, for high availability.</p> <p>You can specify one or two addresses, separated by a space. Do not include the /32 suffix.</p> <p>Note that you can't update IP addresses for an existing accelerator. To change them, you must create a new accelerator with the new addresses.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html\">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>",
        }),
    ).exactOptional(),
    Enabled: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether an accelerator is enabled. The value is true or false. The default value is true. </p> <p>If the value is set to true, an accelerator cannot be deleted. If set to false, the accelerator can be deleted.</p>',
        }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of the request.',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Create tags for an accelerator.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'IdempotencyToken'],
    title: 'CreateCustomRoutingAcceleratorRequest',
  })
  .openapi('CreateCustomRoutingAcceleratorRequest')

const ProtocolSchema = z.enum(['TCP', 'UDP']).openapi('Protocol')

const ProtocolsSchema = z.array(ProtocolSchema).openapi('Protocols')

const CustomRoutingDestinationDescriptionSchema = z
  .object({
    FromPort: PortNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The first port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.',
        }),
    ).exactOptional(),
    ToPort: PortNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The last port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.',
        }),
    ).exactOptional(),
    Protocols: ProtocolsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol for the endpoint group that is associated with a custom routing accelerator. The protocol can be either TCP or UDP.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'For a custom routing accelerator, describes the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.',
    required: [],
  })
  .openapi('CustomRoutingDestinationDescription')

const CustomRoutingDestinationDescriptionsSchema = z
  .array(CustomRoutingDestinationDescriptionSchema)
  .openapi('CustomRoutingDestinationDescriptions')

const CustomRoutingEndpointGroupSchema = z
  .object({
    EndpointGroupArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the endpoint group.' }),
    ).exactOptional(),
    EndpointGroupRegion: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services Region where the endpoint group is located.',
        }),
    ).exactOptional(),
    DestinationDescriptions: CustomRoutingDestinationDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'For a custom routing accelerator, describes the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.',
        }),
    ).exactOptional(),
    EndpointDescriptions: CustomRoutingEndpointDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'For a custom routing accelerator, describes the endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A complex type for the endpoint group for a custom routing accelerator. An Amazon Web Services Region can have only one endpoint group for a specific listener. ',
    required: [],
  })
  .openapi('CustomRoutingEndpointGroup')

const CreateCustomRoutingEndpointGroupResponseSchema = z
  .object({
    EndpointGroup: CustomRoutingEndpointGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'The information about the endpoint group created for a custom routing accelerator.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateCustomRoutingEndpointGroupResponse')

const CustomRoutingProtocolSchema = z.enum(['TCP', 'UDP']).openapi('CustomRoutingProtocol')

const CustomRoutingProtocolsSchema = z
  .array(CustomRoutingProtocolSchema)
  .min(1)
  .max(2)
  .openapi('CustomRoutingProtocols')

const CustomRoutingDestinationConfigurationSchema = z
  .object({
    FromPort: PortNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The first port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.',
        }),
    ),
    ToPort: PortNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The last port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.',
        }),
    ),
    Protocols: CustomRoutingProtocolsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol for the endpoint group that is associated with a custom routing accelerator. The protocol can be either TCP or UDP.',
        }),
    ),
  })
  .openapi({
    required: ['FromPort', 'ToPort', 'Protocols'],
    description:
      'For a custom routing accelerator, sets the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.',
  })
  .openapi('CustomRoutingDestinationConfiguration')

const CustomRoutingDestinationConfigurationsSchema = z
  .array(CustomRoutingDestinationConfigurationSchema)
  .min(1)
  .max(100)
  .openapi('CustomRoutingDestinationConfigurations')

const CreateCustomRoutingEndpointGroupRequestSchema = z
  .object({
    ListenerArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the listener for a custom routing endpoint.',
        }),
    ),
    EndpointGroupRegion: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services Region where the endpoint group is located. A listener can have only one endpoint group in a specific Region.',
        }),
    ),
    DestinationConfigurations: CustomRoutingDestinationConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets the port range and protocol for all endpoints (virtual private cloud subnets) in a custom routing endpoint group to accept client traffic on.',
        }),
    ),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of the request.',
        }),
    ),
  })
  .openapi({
    required: [
      'ListenerArn',
      'EndpointGroupRegion',
      'DestinationConfigurations',
      'IdempotencyToken',
    ],
    title: 'CreateCustomRoutingEndpointGroupRequest',
  })
  .openapi('CreateCustomRoutingEndpointGroupRequest')

const AcceleratorNotFoundExceptionSchema = z.any().openapi('AcceleratorNotFoundException')

const EndpointGroupAlreadyExistsExceptionSchema = z
  .any()
  .openapi('EndpointGroupAlreadyExistsException')

const ListenerNotFoundExceptionSchema = z.any().openapi('ListenerNotFoundException')

const InvalidPortRangeExceptionSchema = z.any().openapi('InvalidPortRangeException')

const PortRangeSchema = z
  .object({
    FromPort: PortNumberSchema.and(
      z.any().openapi({ description: 'The first port in the range of ports, inclusive.' }),
    ).exactOptional(),
    ToPort: PortNumberSchema.and(
      z.any().openapi({ description: 'The last port in the range of ports, inclusive.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A complex type for a range of ports for a listener.', required: [] })
  .openapi('PortRange')

const PortRangesSchema = z.array(PortRangeSchema).min(1).max(10).openapi('PortRanges')

const CustomRoutingListenerSchema = z
  .object({
    ListenerArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the listener.' }),
    ).exactOptional(),
    PortRanges: PortRangesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The port range to support for connections from clients to your accelerator.</p> <p>Separately, you set port ranges for endpoints. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-custom-routing-endpoints.html">About endpoints for custom routing accelerators</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A complex type for a listener for a custom routing accelerator.',
    required: [],
  })
  .openapi('CustomRoutingListener')

const CreateCustomRoutingListenerResponseSchema = z
  .object({
    Listener: CustomRoutingListenerSchema.and(
      z
        .any()
        .openapi({
          description: "The listener that you've created for a custom routing accelerator.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateCustomRoutingListenerResponse')

const CreateCustomRoutingListenerRequestSchema = z
  .object({
    AcceleratorArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the accelerator for a custom routing listener.',
        }),
    ),
    PortRanges: PortRangesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The port range to support for connections from clients to your accelerator.</p> <p>Separately, you set port ranges for endpoints. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-custom-routing-endpoints.html">About endpoints for custom routing accelerators</a>.</p>',
        }),
    ),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of the request.',
        }),
    ),
  })
  .openapi({
    required: ['AcceleratorArn', 'PortRanges', 'IdempotencyToken'],
    title: 'CreateCustomRoutingListenerRequest',
  })
  .openapi('CreateCustomRoutingListenerRequest')

const TrafficDialPercentageSchema = z.float32().min(0).max(100).openapi('TrafficDialPercentage')

const HealthCheckPortSchema = z.int().min(1).max(65535).openapi('HealthCheckPort')

const HealthCheckProtocolSchema = z.enum(['TCP', 'HTTP', 'HTTPS']).openapi('HealthCheckProtocol')

const HealthCheckPathSchema = z
  .string()
  .regex(/^\/[-a-zA-Z0-9@:%_\\+.~#?&\/=]*$/)
  .max(255)
  .openapi('HealthCheckPath')

const HealthCheckIntervalSecondsSchema = z
  .int()
  .min(10)
  .max(30)
  .openapi('HealthCheckIntervalSeconds')

const ThresholdCountSchema = z.int().min(1).max(10).openapi('ThresholdCount')

const PortOverrideSchema = z
  .object({
    ListenerPort: PortNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The listener port that you want to map to a specific endpoint port. This is the port that user traffic arrives to the Global Accelerator on.',
        }),
    ).exactOptional(),
    EndpointPort: PortNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint port that you want a listener port to be mapped to. This is the port on the endpoint, such as the Application Load Balancer or Amazon EC2 instance.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Override specific listener ports used to route traffic to endpoints that are part of an endpoint group. For example, you can create a port override in which the listener receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080 and 1443, respectively, on the endpoints.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-port-override.html"> Overriding listener ports</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
    required: [],
  })
  .openapi('PortOverride')

const PortOverridesSchema = z.array(PortOverrideSchema).min(0).max(10).openapi('PortOverrides')

const EndpointGroupSchema = z
  .object({
    EndpointGroupArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the endpoint group.' }),
    ).exactOptional(),
    EndpointGroupRegion: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services Region where the endpoint group is located.',
        }),
    ).exactOptional(),
    EndpointDescriptions: EndpointDescriptionsSchema.and(
      z.any().openapi({ description: 'The list of endpoint objects.' }),
    ).exactOptional(),
    TrafficDialPercentage: TrafficDialPercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The percentage of traffic to send to an Amazon Web Services Region. Additional traffic is distributed to other endpoint groups for this listener. </p> <p>Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is applied to the traffic that would otherwise have been routed to the Region based on optimal routing.</p> <p>The default value is 100.</p>',
        }),
    ).exactOptional(),
    HealthCheckPort: HealthCheckPortSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The port that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group. </p> <p>The default port is the port for the listener that this endpoint group is associated with. If the listener port is a list, Global Accelerator uses the first specified port in the list of ports.</p>',
        }),
    ).exactOptional(),
    HealthCheckProtocol: HealthCheckProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group. The default value is TCP.',
        }),
    ).exactOptional(),
    HealthCheckPath: HealthCheckPathSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the protocol is HTTP/S, then this value provides the ping path that Global Accelerator uses for the destination on the endpoints for health checks. The default is slash (/).',
        }),
    ).exactOptional(),
    HealthCheckIntervalSeconds: HealthCheckIntervalSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time—10 seconds or 30 seconds—between health checks for each endpoint. The default value is 30.',
        }),
    ).exactOptional(),
    ThresholdCount: ThresholdCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3.',
        }),
    ).exactOptional(),
    PortOverrides: PortOverridesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Allows you to override the destination ports used to route traffic to an endpoint. Using a port override lets you map a list of external destination ports (that your users send traffic to) to a list of internal destination ports that you want an application endpoint to receive traffic on. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A complex type for the endpoint group. An Amazon Web Services Region can have only one endpoint group for a specific listener. ',
    required: [],
  })
  .openapi('EndpointGroup')

const CreateEndpointGroupResponseSchema = z
  .object({
    EndpointGroup: EndpointGroupSchema.and(
      z
        .any()
        .openapi({ description: 'The information about the endpoint group that was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateEndpointGroupResponse')

const CreateEndpointGroupRequestSchema = z
  .object({
    ListenerArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the listener.' }),
    ),
    EndpointGroupRegion: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services Region where the endpoint group is located. A listener can have only one endpoint group in a specific Region.',
        }),
    ),
    EndpointConfigurations: EndpointConfigurationsSchema.and(
      z.any().openapi({ description: 'The list of endpoint objects.' }),
    ).exactOptional(),
    TrafficDialPercentage: TrafficDialPercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The percentage of traffic to send to an Amazon Web Services Region. Additional traffic is distributed to other endpoint groups for this listener. </p> <p>Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is applied to the traffic that would otherwise have been routed to the Region based on optimal routing.</p> <p>The default value is 100.</p>',
        }),
    ).exactOptional(),
    HealthCheckPort: HealthCheckPortSchema.and(
      z
        .any()
        .openapi({
          description:
            'The port that Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port is the listener port that this endpoint group is associated with. If listener port is a list of ports, Global Accelerator uses the first port in the list.',
        }),
    ).exactOptional(),
    HealthCheckProtocol: HealthCheckProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol that Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default value is TCP.',
        }),
    ).exactOptional(),
    HealthCheckPath: HealthCheckPathSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The default value is slash (/).',
        }),
    ).exactOptional(),
    HealthCheckIntervalSeconds: HealthCheckIntervalSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time—10 seconds or 30 seconds—between each health check for an endpoint. The default value is 30.',
        }),
    ).exactOptional(),
    ThresholdCount: ThresholdCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3.',
        }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of the request.',
        }),
    ),
    PortOverrides: PortOverridesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Override specific listener ports used to route traffic to endpoints that are part of this endpoint group. For example, you can create a port override in which the listener receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080 and 1443, respectively, on the endpoints.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-port-override.html"> Overriding listener ports</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ListenerArn', 'EndpointGroupRegion', 'IdempotencyToken'],
    title: 'CreateEndpointGroupRequest',
  })
  .openapi('CreateEndpointGroupRequest')

const ClientAffinitySchema = z.enum(['NONE', 'SOURCE_IP']).openapi('ClientAffinity')

const ListenerSchema = z
  .object({
    ListenerArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the listener.' }),
    ).exactOptional(),
    PortRanges: PortRangesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of port ranges for the connections from clients to the accelerator.',
        }),
    ).exactOptional(),
    Protocol: ProtocolSchema.and(
      z
        .any()
        .openapi({
          description: 'The protocol for the connections from clients to the accelerator.',
        }),
    ).exactOptional(),
    ClientAffinity: ClientAffinitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications, regardless of the port and protocol of the client request. Client affinity gives you control over whether to always route each client to the same specific endpoint.</p> <p>Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client affinity is <code>NONE</code>, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port, destination IP address, destination port, and protocol—to select the hash value, and then chooses the best endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not be always routed to the same endpoint because the hash value changes. </p> <p>If you want a given client to always be routed to the same endpoint, set client affinity to <code>SOURCE_IP</code> instead. When you use the <code>SOURCE_IP</code> setting, Global Accelerator uses the "two-tuple" (2-tuple) properties— source (client) IP address and destination IP address—to select the hash value.</p> <p>The default value is <code>NONE</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A complex type for a listener.', required: [] })
  .openapi('Listener')

const CreateListenerResponseSchema = z
  .object({
    Listener: ListenerSchema.and(
      z.any().openapi({ description: "The listener that you've created." }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateListenerResponse')

const CreateListenerRequestSchema = z
  .object({
    AcceleratorArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of your accelerator.' }),
    ),
    PortRanges: PortRangesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of port ranges to support for connections from clients to your accelerator.',
        }),
    ),
    Protocol: ProtocolSchema.and(
      z
        .any()
        .openapi({ description: 'The protocol for connections from clients to your accelerator.' }),
    ),
    ClientAffinity: ClientAffinitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications, regardless of the port and protocol of the client request. Client affinity gives you control over whether to always route each client to the same specific endpoint.</p> <p>Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client affinity is <code>NONE</code>, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port, destination IP address, destination port, and protocol—to select the hash value, and then chooses the best endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not be always routed to the same endpoint because the hash value changes. </p> <p>If you want a given client to always be routed to the same endpoint, set client affinity to <code>SOURCE_IP</code> instead. When you use the <code>SOURCE_IP</code> setting, Global Accelerator uses the "two-tuple" (2-tuple) properties— source (client) IP address and destination IP address—to select the hash value.</p> <p>The default value is <code>NONE</code>.</p>',
        }),
    ).exactOptional(),
    IdempotencyToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of the request.',
        }),
    ),
  })
  .openapi({
    required: ['AcceleratorArn', 'PortRanges', 'Protocol', 'IdempotencyToken'],
    title: 'CreateListenerRequest',
  })
  .openapi('CreateListenerRequest')

const DeleteAcceleratorRequestSchema = z
  .object({
    AcceleratorArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of an accelerator.' }),
    ),
  })
  .openapi({ required: ['AcceleratorArn'], title: 'DeleteAcceleratorRequest' })
  .openapi('DeleteAcceleratorRequest')

const AcceleratorNotDisabledExceptionSchema = z.any().openapi('AcceleratorNotDisabledException')

const AssociatedListenerFoundExceptionSchema = z.any().openapi('AssociatedListenerFoundException')

const DeleteCustomRoutingAcceleratorRequestSchema = z
  .object({
    AcceleratorArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the custom routing accelerator to delete.',
        }),
    ),
  })
  .openapi({ required: ['AcceleratorArn'], title: 'DeleteCustomRoutingAcceleratorRequest' })
  .openapi('DeleteCustomRoutingAcceleratorRequest')

const DeleteCustomRoutingEndpointGroupRequestSchema = z
  .object({
    EndpointGroupArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the endpoint group to delete.',
        }),
    ),
  })
  .openapi({ required: ['EndpointGroupArn'], title: 'DeleteCustomRoutingEndpointGroupRequest' })
  .openapi('DeleteCustomRoutingEndpointGroupRequest')

const DeleteCustomRoutingListenerRequestSchema = z
  .object({
    ListenerArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the listener to delete.' }),
    ),
  })
  .openapi({ required: ['ListenerArn'], title: 'DeleteCustomRoutingListenerRequest' })
  .openapi('DeleteCustomRoutingListenerRequest')

const AssociatedEndpointGroupFoundExceptionSchema = z
  .any()
  .openapi('AssociatedEndpointGroupFoundException')

const DeleteEndpointGroupRequestSchema = z
  .object({
    EndpointGroupArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the endpoint group to delete.',
        }),
    ),
  })
  .openapi({ required: ['EndpointGroupArn'], title: 'DeleteEndpointGroupRequest' })
  .openapi('DeleteEndpointGroupRequest')

const DeleteListenerRequestSchema = z
  .object({
    ListenerArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the listener.' }),
    ),
  })
  .openapi({ required: ['ListenerArn'], title: 'DeleteListenerRequest' })
  .openapi('DeleteListenerRequest')

const DenyCustomRoutingTrafficRequestSchema = z
  .object({
    EndpointGroupArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the endpoint group.' }),
    ),
    EndpointId: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ID for the endpoint. For custom routing accelerators, this is the virtual private cloud (VPC) subnet ID.',
        }),
    ),
    DestinationAddresses: DestinationAddressesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of specific Amazon EC2 instance IP addresses (destination addresses) in a subnet that you want to prevent from receiving traffic. The IP addresses must be a subset of the IP addresses allowed for the VPC subnet associated with the endpoint group.',
        }),
    ).exactOptional(),
    DestinationPorts: DestinationPortsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of specific Amazon EC2 instance ports (destination ports) in a subnet endpoint that you want to prevent from receiving traffic.',
        }),
    ).exactOptional(),
    DenyAllTrafficToEndpoint: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates whether all destination IP addresses and ports for a specified VPC subnet endpoint <i>cannot</i> receive traffic from a custom routing accelerator. The value is TRUE or FALSE. </p> <p>When set to TRUE, <i>no</i> destinations in the custom routing VPC subnet can receive traffic. Note that you cannot specify destination IP addresses and ports when the value is set to TRUE.</p> <p>When set to FALSE (or not specified), you <i>must</i> specify a list of destination IP addresses that cannot receive traffic. A list of ports is optional. If you don't specify a list of ports, the ports that can accept traffic is the same as the ports configured for the endpoint group.</p> <p>The default value is FALSE.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EndpointGroupArn', 'EndpointId'],
    title: 'DenyCustomRoutingTrafficRequest',
  })
  .openapi('DenyCustomRoutingTrafficRequest')

const DeprovisionByoipCidrResponseSchema = z
  .object({
    ByoipCidr: ByoipCidrSchema.and(
      z.any().openapi({ description: 'Information about the address range.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeprovisionByoipCidrResponse')

const DeprovisionByoipCidrRequestSchema = z
  .object({
    Cidr: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The address range, in CIDR notation. The prefix must be the same prefix that you specified when you provisioned the address range.',
        }),
    ),
  })
  .openapi({ required: ['Cidr'], title: 'DeprovisionByoipCidrRequest' })
  .openapi('DeprovisionByoipCidrRequest')

const DescribeAcceleratorResponseSchema = z
  .object({
    Accelerator: AcceleratorSchema.and(
      z.any().openapi({ description: 'The description of the accelerator.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAcceleratorResponse')

const DescribeAcceleratorRequestSchema = z
  .object({
    AcceleratorArn: GenericStringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the accelerator to describe.' }),
    ),
  })
  .openapi({ required: ['AcceleratorArn'], title: 'DescribeAcceleratorRequest' })
  .openapi('DescribeAcceleratorRequest')

const AcceleratorAttributesSchema = z
  .object({
    FlowLogsEnabled: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether flow logs are enabled. The default value is false. If the value is true, <code>FlowLogsS3Bucket</code> and <code>FlowLogsS3Prefix</code> must be specified.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html">Flow logs</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    FlowLogsS3Bucket: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is <code>true</code>. The bucket must exist and have a bucket policy that grants Global Accelerator permission to write to the bucket.',
        }),
    ).exactOptional(),
    FlowLogsS3Prefix: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is <code>true</code>.</p> <p>If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//), like the following:</p> <p>s3-bucket_name//AWSLogs/aws_account_id</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Attributes of an accelerator.', required: [] })
  .openapi('AcceleratorAttributes')

const DescribeAcceleratorAttributesResponseSchema = z
  .object({
    AcceleratorAttributes: AcceleratorAttributesSchema.and(
      z.any().openapi({ description: 'The attributes of the accelerator.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAcceleratorAttributesResponse')

const DescribeAcceleratorAttributesRequestSchema = z
  .object({
    AcceleratorArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the accelerator with the attributes that you want to describe.',
        }),
    ),
  })
  .openapi({ required: ['AcceleratorArn'], title: 'DescribeAcceleratorAttributesRequest' })
  .openapi('DescribeAcceleratorAttributesRequest')

const DescribeCustomRoutingAcceleratorResponseSchema = z
  .object({
    Accelerator: CustomRoutingAcceleratorSchema.and(
      z.any().openapi({ description: 'The description of the custom routing accelerator.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCustomRoutingAcceleratorResponse')

const DescribeCustomRoutingAcceleratorRequestSchema = z
  .object({
    AcceleratorArn: GenericStringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the accelerator to describe.' }),
    ),
  })
  .openapi({ required: ['AcceleratorArn'], title: 'DescribeCustomRoutingAcceleratorRequest' })
  .openapi('DescribeCustomRoutingAcceleratorRequest')

const CustomRoutingAcceleratorAttributesSchema = z
  .object({
    FlowLogsEnabled: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether flow logs are enabled. The default value is false. If the value is true, <code>FlowLogsS3Bucket</code> and <code>FlowLogsS3Prefix</code> must be specified.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html">Flow logs</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    FlowLogsS3Bucket: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is <code>true</code>. The bucket must exist and have a bucket policy that grants Global Accelerator permission to write to the bucket.',
        }),
    ).exactOptional(),
    FlowLogsS3Prefix: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is <code>true</code>.</p> <p>If you don’t specify a prefix, the flow logs are stored in the root of the bucket. If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//), like the following:</p> <p>DOC-EXAMPLE-BUCKET//AWSLogs/aws_account_id</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Attributes of a custom routing accelerator.', required: [] })
  .openapi('CustomRoutingAcceleratorAttributes')

const DescribeCustomRoutingAcceleratorAttributesResponseSchema = z
  .object({
    AcceleratorAttributes: CustomRoutingAcceleratorAttributesSchema.and(
      z.any().openapi({ description: 'The attributes of the custom routing accelerator.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCustomRoutingAcceleratorAttributesResponse')

const DescribeCustomRoutingAcceleratorAttributesRequestSchema = z
  .object({
    AcceleratorArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the custom routing accelerator to describe the attributes for.',
        }),
    ),
  })
  .openapi({
    required: ['AcceleratorArn'],
    title: 'DescribeCustomRoutingAcceleratorAttributesRequest',
  })
  .openapi('DescribeCustomRoutingAcceleratorAttributesRequest')

const DescribeCustomRoutingEndpointGroupResponseSchema = z
  .object({
    EndpointGroup: CustomRoutingEndpointGroupSchema.and(
      z
        .any()
        .openapi({
          description: 'The description of an endpoint group for a custom routing accelerator.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCustomRoutingEndpointGroupResponse')

const DescribeCustomRoutingEndpointGroupRequestSchema = z
  .object({
    EndpointGroupArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the endpoint group to describe.',
        }),
    ),
  })
  .openapi({ required: ['EndpointGroupArn'], title: 'DescribeCustomRoutingEndpointGroupRequest' })
  .openapi('DescribeCustomRoutingEndpointGroupRequest')

const DescribeCustomRoutingListenerResponseSchema = z
  .object({
    Listener: CustomRoutingListenerSchema.and(
      z
        .any()
        .openapi({
          description: 'The description of a listener for a custom routing accelerator.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCustomRoutingListenerResponse')

const DescribeCustomRoutingListenerRequestSchema = z
  .object({
    ListenerArn: GenericStringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the listener to describe.' }),
    ),
  })
  .openapi({ required: ['ListenerArn'], title: 'DescribeCustomRoutingListenerRequest' })
  .openapi('DescribeCustomRoutingListenerRequest')

const DescribeEndpointGroupResponseSchema = z
  .object({
    EndpointGroup: EndpointGroupSchema.and(
      z.any().openapi({ description: 'The description of an endpoint group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEndpointGroupResponse')

const DescribeEndpointGroupRequestSchema = z
  .object({
    EndpointGroupArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the endpoint group to describe.',
        }),
    ),
  })
  .openapi({ required: ['EndpointGroupArn'], title: 'DescribeEndpointGroupRequest' })
  .openapi('DescribeEndpointGroupRequest')

const DescribeListenerResponseSchema = z
  .object({
    Listener: ListenerSchema.and(
      z.any().openapi({ description: 'The description of a listener.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeListenerResponse')

const DescribeListenerRequestSchema = z
  .object({
    ListenerArn: GenericStringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the listener to describe.' }),
    ),
  })
  .openapi({ required: ['ListenerArn'], title: 'DescribeListenerRequest' })
  .openapi('DescribeListenerRequest')

const AcceleratorsSchema = z.array(AcceleratorSchema).openapi('Accelerators')

const ListAcceleratorsResponseSchema = z
  .object({
    Accelerators: AcceleratorsSchema.and(
      z.any().openapi({ description: 'The list of accelerators for a customer account.' }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results. You receive this token from a previous call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAcceleratorsResponse')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListAcceleratorsRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of Global Accelerator objects that you want to return with this call. The default value is 10.',
        }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results. You receive this token from a previous call.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListAcceleratorsRequest', required: [] })
  .openapi('ListAcceleratorsRequest')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const ByoipCidrsSchema = z.array(ByoipCidrSchema).openapi('ByoipCidrs')

const ListByoipCidrsResponseSchema = z
  .object({
    ByoipCidrs: ByoipCidrsSchema.and(
      z.any().openapi({ description: 'Information about your address ranges.' }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z.any().openapi({ description: 'The token for the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListByoipCidrsResponse')

const ListByoipCidrsRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.',
        }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z.any().openapi({ description: 'The token for the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListByoipCidrsRequest', required: [] })
  .openapi('ListByoipCidrsRequest')

const CustomRoutingAcceleratorsSchema = z
  .array(CustomRoutingAcceleratorSchema)
  .openapi('CustomRoutingAccelerators')

const ListCustomRoutingAcceleratorsResponseSchema = z
  .object({
    Accelerators: CustomRoutingAcceleratorsSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of custom routing accelerators for a customer account.',
        }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results. You receive this token from a previous call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCustomRoutingAcceleratorsResponse')

const ListCustomRoutingAcceleratorsRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of custom routing Global Accelerator objects that you want to return with this call. The default value is 10.',
        }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results. You receive this token from a previous call.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListCustomRoutingAcceleratorsRequest', required: [] })
  .openapi('ListCustomRoutingAcceleratorsRequest')

const CustomRoutingEndpointGroupsSchema = z
  .array(CustomRoutingEndpointGroupSchema)
  .openapi('CustomRoutingEndpointGroups')

const ListCustomRoutingEndpointGroupsResponseSchema = z
  .object({
    EndpointGroups: CustomRoutingEndpointGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of the endpoint groups associated with a listener for a custom routing accelerator.',
        }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results. You receive this token from a previous call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCustomRoutingEndpointGroupsResponse')

const ListCustomRoutingEndpointGroupsRequestSchema = z
  .object({
    ListenerArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the listener to list endpoint groups for.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of endpoint group objects that you want to return with this call. The default value is 10.',
        }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results. You receive this token from a previous call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ListenerArn'], title: 'ListCustomRoutingEndpointGroupsRequest' })
  .openapi('ListCustomRoutingEndpointGroupsRequest')

const CustomRoutingListenersSchema = z
  .array(CustomRoutingListenerSchema)
  .openapi('CustomRoutingListeners')

const ListCustomRoutingListenersResponseSchema = z
  .object({
    Listeners: CustomRoutingListenersSchema.and(
      z.any().openapi({ description: 'The list of listeners for a custom routing accelerator.' }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results. You receive this token from a previous call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCustomRoutingListenersResponse')

const ListCustomRoutingListenersRequestSchema = z
  .object({
    AcceleratorArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the accelerator to list listeners for.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of listener objects that you want to return with this call. The default value is 10.',
        }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results. You receive this token from a previous call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AcceleratorArn'], title: 'ListCustomRoutingListenersRequest' })
  .openapi('ListCustomRoutingListenersRequest')

const SocketAddressSchema = z
  .object({
    IpAddress: GenericStringSchema.and(
      z.any().openapi({ description: 'The IP address for the socket address.' }),
    ).exactOptional(),
    Port: PortNumberSchema.and(
      z.any().openapi({ description: 'The port for the socket address.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An IP address/port combination.', required: [] })
  .openapi('SocketAddress')

const CustomRoutingDestinationTrafficStateSchema = z
  .enum(['ALLOW', 'DENY'])
  .openapi('CustomRoutingDestinationTrafficState')

const PortMappingSchema = z
  .object({
    AcceleratorPort: PortNumberSchema.and(
      z.any().openapi({ description: 'The accelerator port.' }),
    ).exactOptional(),
    EndpointGroupArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the endpoint group.' }),
    ).exactOptional(),
    EndpointId: GenericStringSchema.and(
      z.any().openapi({ description: 'The IP address of the VPC subnet (the subnet ID).' }),
    ).exactOptional(),
    DestinationSocketAddress: SocketAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The EC2 instance IP address and port number in the virtual private cloud (VPC) subnet.',
        }),
    ).exactOptional(),
    Protocols: CustomRoutingProtocolsSchema.and(
      z.any().openapi({ description: 'The protocols supported by the endpoint group.' }),
    ).exactOptional(),
    DestinationTrafficState: CustomRoutingDestinationTrafficStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether or not a port mapping destination can receive traffic. The value is either ALLOW, if traffic is allowed to the destination, or DENY, if traffic is not allowed to the destination.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns the ports and associated IP addresses and ports of Amazon EC2 instances in your virtual private cloud (VPC) subnets. Custom routing is a port mapping protocol in Global Accelerator that statically associates port ranges with VPC subnets, which allows Global Accelerator to route to specific instances and ports within one or more subnets. ',
    required: [],
  })
  .openapi('PortMapping')

const PortMappingsSchema = z.array(PortMappingSchema).openapi('PortMappings')

const ListCustomRoutingPortMappingsResponseSchema = z
  .object({
    PortMappings: PortMappingsSchema.and(
      z.any().openapi({ description: 'The port mappings for a custom routing accelerator.' }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results. You receive this token from a previous call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCustomRoutingPortMappingsResponse')

const PortMappingsMaxResultsSchema = z.int().min(1).max(20000).openapi('PortMappingsMaxResults')

const ListCustomRoutingPortMappingsRequestSchema = z
  .object({
    AcceleratorArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the accelerator to list the custom routing port mappings for.',
        }),
    ),
    EndpointGroupArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the endpoint group to list the custom routing port mappings for.',
        }),
    ).exactOptional(),
    MaxResults: PortMappingsMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of destination port mappings that you want to return with this call. The default value is 10.',
        }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results. You receive this token from a previous call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AcceleratorArn'], title: 'ListCustomRoutingPortMappingsRequest' })
  .openapi('ListCustomRoutingPortMappingsRequest')

const SocketAddressesSchema = z.array(SocketAddressSchema).openapi('SocketAddresses')

const DestinationPortMappingSchema = z
  .object({
    AcceleratorArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the custom routing accelerator that you have port mappings for.',
        }),
    ).exactOptional(),
    AcceleratorSocketAddresses: SocketAddressesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address/port combinations (sockets) that map to a given destination socket address.',
        }),
    ).exactOptional(),
    EndpointGroupArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the endpoint group.' }),
    ).exactOptional(),
    EndpointId: GenericStringSchema.and(
      z.any().openapi({ description: 'The ID for the virtual private cloud (VPC) subnet.' }),
    ).exactOptional(),
    EndpointGroupRegion: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services Region for the endpoint group.' }),
    ).exactOptional(),
    DestinationSocketAddress: SocketAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint IP address/port combination for traffic received on the accelerator socket address.',
        }),
    ).exactOptional(),
    IpAddressType: IpAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address type that an accelerator supports. For a custom routing accelerator, the value must be IPV4.',
        }),
    ).exactOptional(),
    DestinationTrafficState: CustomRoutingDestinationTrafficStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether or not a port mapping destination can receive traffic. The value is either ALLOW, if traffic is allowed to the destination, or DENY, if traffic is not allowed to the destination.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The port mappings for a specified endpoint IP address (destination).',
    required: [],
  })
  .openapi('DestinationPortMapping')

const DestinationPortMappingsSchema = z
  .array(DestinationPortMappingSchema)
  .openapi('DestinationPortMappings')

const ListCustomRoutingPortMappingsByDestinationResponseSchema = z
  .object({
    DestinationPortMappings: DestinationPortMappingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The port mappings for the endpoint IP address that you specified in the request.',
        }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results. You receive this token from a previous call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCustomRoutingPortMappingsByDestinationResponse')

const ListCustomRoutingPortMappingsByDestinationRequestSchema = z
  .object({
    EndpointId: GenericStringSchema.and(
      z.any().openapi({ description: 'The ID for the virtual private cloud (VPC) subnet.' }),
    ),
    DestinationAddress: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint IP address in a virtual private cloud (VPC) subnet for which you want to receive back port mappings.',
        }),
    ),
    MaxResults: PortMappingsMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of destination port mappings that you want to return with this call. The default value is 10.',
        }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results. You receive this token from a previous call.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EndpointId', 'DestinationAddress'],
    title: 'ListCustomRoutingPortMappingsByDestinationRequest',
  })
  .openapi('ListCustomRoutingPortMappingsByDestinationRequest')

const EndpointNotFoundExceptionSchema = z.any().openapi('EndpointNotFoundException')

const EndpointGroupsSchema = z.array(EndpointGroupSchema).openapi('EndpointGroups')

const ListEndpointGroupsResponseSchema = z
  .object({
    EndpointGroups: EndpointGroupsSchema.and(
      z
        .any()
        .openapi({ description: 'The list of the endpoint groups associated with a listener.' }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results. You receive this token from a previous call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEndpointGroupsResponse')

const ListEndpointGroupsRequestSchema = z
  .object({
    ListenerArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the listener.' }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of endpoint group objects that you want to return with this call. The default value is 10.',
        }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results. You receive this token from a previous call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ListenerArn'], title: 'ListEndpointGroupsRequest' })
  .openapi('ListEndpointGroupsRequest')

const ListenersSchema = z.array(ListenerSchema).openapi('Listeners')

const ListListenersResponseSchema = z
  .object({
    Listeners: ListenersSchema.and(
      z.any().openapi({ description: 'The list of listeners for an accelerator.' }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results. You receive this token from a previous call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListListenersResponse')

const ListListenersRequestSchema = z
  .object({
    AcceleratorArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the accelerator for which you want to list listener objects.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of listener objects that you want to return with this call. The default value is 10.',
        }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results. You receive this token from a previous call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AcceleratorArn'], title: 'ListListenersRequest' })
  .openapi('ListListenersRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'Root level tag for the Tags parameters.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ResourceArnSchema = z.string().min(1).max(1011).openapi('ResourceArn')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the accelerator to list tags for. An ARN uniquely identifies an accelerator.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ProvisionByoipCidrResponseSchema = z
  .object({
    ByoipCidr: ByoipCidrSchema.and(
      z.any().openapi({ description: 'Information about the address range.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProvisionByoipCidrResponse')

const CidrAuthorizationContextSchema = z
  .object({
    Message: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The plain-text authorization message for the prefix and account.',
        }),
    ),
    Signature: GenericStringSchema.and(
      z
        .any()
        .openapi({ description: 'The signed authorization message for the prefix and account.' }),
    ),
  })
  .openapi({
    required: ['Message', 'Signature'],
    description:
      '<p>Provides authorization for Amazon to bring a specific IP address range to a specific Amazon Web Services account using bring your own IP addresses (BYOIP). </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
  })
  .openapi('CidrAuthorizationContext')

const ProvisionByoipCidrRequestSchema = z
  .object({
    Cidr: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The public IPv4 address range, in CIDR notation. The most specific IP prefix that you can specify is /24. The address range cannot overlap with another address range that you've brought to this or another Region.",
        }),
    ),
    CidrAuthorizationContext: CidrAuthorizationContextSchema.and(
      z
        .any()
        .openapi({
          description:
            'A signed document that proves that you are authorized to bring the specified IP address range to Amazon using BYOIP. ',
        }),
    ),
  })
  .openapi({ required: ['Cidr', 'CidrAuthorizationContext'], title: 'ProvisionByoipCidrRequest' })
  .openapi('ProvisionByoipCidrRequest')

const EndpointIdsSchema = z.array(GenericStringSchema).openapi('EndpointIds')

const RemoveCustomRoutingEndpointsRequestSchema = z
  .object({
    EndpointIds: EndpointIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IDs for the endpoints. For custom routing accelerators, endpoint IDs are the virtual private cloud (VPC) subnet IDs. ',
        }),
    ),
    EndpointGroupArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the endpoint group to remove endpoints from.',
        }),
    ),
  })
  .openapi({
    required: ['EndpointIds', 'EndpointGroupArn'],
    title: 'RemoveCustomRoutingEndpointsRequest',
  })
  .openapi('RemoveCustomRoutingEndpointsRequest')

const EndpointIdentifierSchema = z
  .object({
    EndpointId: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An ID for the endpoint. If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address allocation ID. For Amazon EC2 instances, this is the EC2 instance ID. </p> <p>An Application Load Balancer can be either internal or internet-facing.</p>',
        }),
    ),
    ClientIPPreservationEnabled: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates whether client IP address preservation is enabled for an endpoint. The value is true or false. </p> <p>If the value is set to true, the client's IP address is preserved in the <code>X-Forwarded-For</code> request header as traffic travels to applications on the endpoint fronted by the accelerator.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EndpointId'],
    description:
      'A complex type for an endpoint. Specifies information about the endpoint to remove from the endpoint group.',
  })
  .openapi('EndpointIdentifier')

const EndpointIdentifiersSchema = z
  .array(EndpointIdentifierSchema)
  .min(1)
  .max(10)
  .openapi('EndpointIdentifiers')

const RemoveEndpointsRequestSchema = z
  .object({
    EndpointIdentifiers: EndpointIdentifiersSchema.and(
      z.any().openapi({ description: 'The identifiers of the endpoints that you want to remove.' }),
    ),
    EndpointGroupArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the endpoint group.' }),
    ),
  })
  .openapi({
    required: ['EndpointIdentifiers', 'EndpointGroupArn'],
    title: 'RemoveEndpointsRequest',
  })
  .openapi('RemoveEndpointsRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Global Accelerator resource to add tags to. An ARN uniquely identifies a resource.',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to add to a resource. A tag consists of a key and a value that you define.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeysSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeys')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Global Accelerator resource to remove tags from. An ARN uniquely identifies a resource.',
        }),
    ),
    TagKeys: TagKeysSchema.and(
      z
        .any()
        .openapi({
          description: 'The tag key pairs that you want to remove from the specified resources.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAcceleratorResponseSchema = z
  .object({
    Accelerator: AcceleratorSchema.and(
      z.any().openapi({ description: 'Information about the updated accelerator.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateAcceleratorResponse')

const UpdateAcceleratorRequestSchema = z
  .object({
    AcceleratorArn: GenericStringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the accelerator to update.' }),
    ),
    Name: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the accelerator. The name can have a maximum of 64 characters, must contain only alphanumeric characters, periods (.), or hyphens (-), and must not begin or end with a hyphen or period.',
        }),
    ).exactOptional(),
    IpAddressType: IpAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address type that an accelerator supports. For a standard accelerator, the value can be IPV4 or DUAL_STACK.',
        }),
    ).exactOptional(),
    Enabled: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether an accelerator is enabled. The value is true or false. The default value is true. </p> <p>If the value is set to true, the accelerator cannot be deleted. If set to false, the accelerator can be deleted.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AcceleratorArn'], title: 'UpdateAcceleratorRequest' })
  .openapi('UpdateAcceleratorRequest')

const UpdateAcceleratorAttributesResponseSchema = z
  .object({
    AcceleratorAttributes: AcceleratorAttributesSchema.and(
      z.any().openapi({ description: 'Updated attributes for the accelerator.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateAcceleratorAttributesResponse')

const UpdateAcceleratorAttributesRequestSchema = z
  .object({
    AcceleratorArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the accelerator that you want to update.',
        }),
    ),
    FlowLogsEnabled: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Update whether flow logs are enabled. The default value is false. If the value is true, <code>FlowLogsS3Bucket</code> and <code>FlowLogsS3Prefix</code> must be specified.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html">Flow Logs</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    FlowLogsS3Bucket: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is <code>true</code>. The bucket must exist and have a bucket policy that grants Global Accelerator permission to write to the bucket.',
        }),
    ).exactOptional(),
    FlowLogsS3Prefix: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Update the prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is <code>true</code>. </p> <p>If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//), like the following:</p> <p>s3-bucket_name//AWSLogs/aws_account_id</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AcceleratorArn'], title: 'UpdateAcceleratorAttributesRequest' })
  .openapi('UpdateAcceleratorAttributesRequest')

const UpdateCustomRoutingAcceleratorResponseSchema = z
  .object({
    Accelerator: CustomRoutingAcceleratorSchema.and(
      z.any().openapi({ description: 'Information about the updated custom routing accelerator.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateCustomRoutingAcceleratorResponse')

const UpdateCustomRoutingAcceleratorRequestSchema = z
  .object({
    AcceleratorArn: GenericStringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the accelerator to update.' }),
    ),
    Name: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the accelerator. The name can have a maximum of 64 characters, must contain only alphanumeric characters, periods (.), or hyphens (-), and must not begin or end with a hyphen or period.',
        }),
    ).exactOptional(),
    IpAddressType: IpAddressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address type that an accelerator supports. For a custom routing accelerator, the value must be IPV4.',
        }),
    ).exactOptional(),
    Enabled: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether an accelerator is enabled. The value is true or false. The default value is true. </p> <p>If the value is set to true, the accelerator cannot be deleted. If set to false, the accelerator can be deleted.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AcceleratorArn'], title: 'UpdateCustomRoutingAcceleratorRequest' })
  .openapi('UpdateCustomRoutingAcceleratorRequest')

const UpdateCustomRoutingAcceleratorAttributesResponseSchema = z
  .object({
    AcceleratorAttributes: CustomRoutingAcceleratorAttributesSchema.and(
      z.any().openapi({ description: 'Updated custom routing accelerator.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateCustomRoutingAcceleratorAttributesResponse')

const UpdateCustomRoutingAcceleratorAttributesRequestSchema = z
  .object({
    AcceleratorArn: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the custom routing accelerator to update attributes for.',
        }),
    ),
    FlowLogsEnabled: GenericBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Update whether flow logs are enabled. The default value is false. If the value is true, <code>FlowLogsS3Bucket</code> and <code>FlowLogsS3Prefix</code> must be specified.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html">Flow logs</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    FlowLogsS3Bucket: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is <code>true</code>. The bucket must exist and have a bucket policy that grants Global Accelerator permission to write to the bucket.',
        }),
    ).exactOptional(),
    FlowLogsS3Prefix: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Update the prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is <code>true</code>. </p> <p>If you don’t specify a prefix, the flow logs are stored in the root of the bucket. If you specify slash (/) for the S3 bucket prefix, the log file bucket folder structure will include a double slash (//), like the following:</p> <p>DOC-EXAMPLE-BUCKET//AWSLogs/aws_account_id</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AcceleratorArn'],
    title: 'UpdateCustomRoutingAcceleratorAttributesRequest',
  })
  .openapi('UpdateCustomRoutingAcceleratorAttributesRequest')

const UpdateCustomRoutingListenerResponseSchema = z
  .object({
    Listener: CustomRoutingListenerSchema.and(
      z
        .any()
        .openapi({
          description: 'Information for the updated listener for a custom routing accelerator.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateCustomRoutingListenerResponse')

const UpdateCustomRoutingListenerRequestSchema = z
  .object({
    ListenerArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the listener to update.' }),
    ),
    PortRanges: PortRangesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The updated port range to support for connections from clients to your accelerator. If you remove ports that are currently being used by a subnet endpoint, the call fails.</p> <p>Separately, you set port ranges for endpoints. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-custom-routing-endpoints.html">About endpoints for custom routing accelerators</a>.</p>',
        }),
    ),
  })
  .openapi({ required: ['ListenerArn', 'PortRanges'], title: 'UpdateCustomRoutingListenerRequest' })
  .openapi('UpdateCustomRoutingListenerRequest')

const UpdateEndpointGroupResponseSchema = z
  .object({
    EndpointGroup: EndpointGroupSchema.and(
      z
        .any()
        .openapi({ description: 'The information about the endpoint group that was updated.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateEndpointGroupResponse')

const UpdateEndpointGroupRequestSchema = z
  .object({
    EndpointGroupArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the endpoint group.' }),
    ),
    EndpointConfigurations: EndpointConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of endpoint objects. A resource must be valid and active when you add it as an endpoint.',
        }),
    ).exactOptional(),
    TrafficDialPercentage: TrafficDialPercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The percentage of traffic to send to an Amazon Web Services Region. Additional traffic is distributed to other endpoint groups for this listener. </p> <p>Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is applied to the traffic that would otherwise have been routed to the Region based on optimal routing.</p> <p>The default value is 100.</p>',
        }),
    ).exactOptional(),
    HealthCheckPort: HealthCheckPortSchema.and(
      z
        .any()
        .openapi({
          description:
            'The port that Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port is the listener port that this endpoint group is associated with. If the listener port is a list of ports, Global Accelerator uses the first port in the list.',
        }),
    ).exactOptional(),
    HealthCheckProtocol: HealthCheckProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol that Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default value is TCP.',
        }),
    ).exactOptional(),
    HealthCheckPath: HealthCheckPathSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The default value is slash (/).',
        }),
    ).exactOptional(),
    HealthCheckIntervalSeconds: HealthCheckIntervalSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time—10 seconds or 30 seconds—between each health check for an endpoint. The default value is 30.',
        }),
    ).exactOptional(),
    ThresholdCount: ThresholdCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3.',
        }),
    ).exactOptional(),
    PortOverrides: PortOverridesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Override specific listener ports used to route traffic to endpoints that are part of this endpoint group. For example, you can create a port override in which the listener receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080 and 1443, respectively, on the endpoints.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-port-override.html"> Overriding listener ports</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['EndpointGroupArn'], title: 'UpdateEndpointGroupRequest' })
  .openapi('UpdateEndpointGroupRequest')

const UpdateListenerResponseSchema = z
  .object({
    Listener: ListenerSchema.and(
      z.any().openapi({ description: 'Information for the updated listener.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateListenerResponse')

const UpdateListenerRequestSchema = z
  .object({
    ListenerArn: GenericStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the listener to update.' }),
    ),
    PortRanges: PortRangesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated list of port ranges for the connections from clients to the accelerator.',
        }),
    ).exactOptional(),
    Protocol: ProtocolSchema.and(
      z
        .any()
        .openapi({
          description: 'The updated protocol for the connections from clients to the accelerator.',
        }),
    ).exactOptional(),
    ClientAffinity: ClientAffinitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications, regardless of the port and protocol of the client request. Client affinity gives you control over whether to always route each client to the same specific endpoint.</p> <p>Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client affinity is <code>NONE</code>, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port, destination IP address, destination port, and protocol—to select the hash value, and then chooses the best endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not be always routed to the same endpoint because the hash value changes. </p> <p>If you want a given client to always be routed to the same endpoint, set client affinity to <code>SOURCE_IP</code> instead. When you use the <code>SOURCE_IP</code> setting, Global Accelerator uses the "two-tuple" (2-tuple) properties— source (client) IP address and destination IP address—to select the hash value.</p> <p>The default value is <code>NONE</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ListenerArn'], title: 'UpdateListenerRequest' })
  .openapi('UpdateListenerRequest')

const WithdrawByoipCidrResponseSchema = z
  .object({
    ByoipCidr: ByoipCidrSchema.and(
      z.any().openapi({ description: 'Information about the address pool.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WithdrawByoipCidrResponse')

const WithdrawByoipCidrRequestSchema = z
  .object({
    Cidr: GenericStringSchema.and(
      z.any().openapi({ description: 'The address range, in CIDR notation.' }),
    ),
  })
  .openapi({ required: ['Cidr'], title: 'WithdrawByoipCidrRequest' })
  .openapi('WithdrawByoipCidrRequest')

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

export const postXAmzTargetGlobalAcceleratorV20180706AddCustomRoutingEndpointsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints',
  description:
    '<p>Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator.</p> <p>The listener port range must be large enough to support the number of IP addresses that can be specified in your subnet. The number of ports required is: subnet size times the number of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener port range of at least 255 ports. </p> <p>Note: You must have enough remaining listener ports available to map to the subnet ports, or the call will fail with a LimitExceededException.</p> <p>By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p>',
  operationId: 'AddCustomRoutingEndpoints',
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
        .literal('GlobalAccelerator_V20180706.AddCustomRoutingEndpoints')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['GlobalAccelerator_V20180706.AddCustomRoutingEndpoints'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddCustomRoutingEndpointsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddCustomRoutingEndpointsResponseSchema } },
    },
    480: {
      description: 'EndpointAlreadyExistsException',
      content: { 'application/json': { schema: EndpointAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'EndpointGroupNotFoundException',
      content: { 'application/json': { schema: EndpointGroupNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706AddEndpointsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints',
  description:
    '<p>Add endpoints to an endpoint group. The <code>AddEndpoints</code> API operation is the recommended option for adding endpoints. The alternative options are to add endpoints when you create an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html">CreateEndpointGroup</a> API) or when you update an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API). </p> <p>There are two advantages to using <code>AddEndpoints</code> to add endpoints:</p> <ul> <li> <p>It\'s faster, because Global Accelerator only has to resolve the new endpoints that you\'re adding.</p> </li> <li> <p>It\'s more convenient, because you don\'t need to specify all of the current endpoints that are already in the endpoint group in addition to the new endpoints that you want to add.</p> </li> </ul>',
  operationId: 'AddEndpoints',
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
        .literal('GlobalAccelerator_V20180706.AddEndpoints')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.AddEndpoints'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddEndpointsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddEndpointsResponseSchema } },
    },
    480: {
      description: 'TransactionInProgressException',
      content: { 'application/json': { schema: TransactionInProgressExceptionSchema } },
    },
    481: {
      description: 'EndpointGroupNotFoundException',
      content: { 'application/json': { schema: EndpointGroupNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706AdvertiseByoipCidrRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr',
  description:
    '<p>Advertises an IPv4 address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to the specified addresses starts routing to Amazon Web Services because of propagation delays. </p> <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html"> WithdrawByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
  operationId: 'AdvertiseByoipCidr',
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
        .literal('GlobalAccelerator_V20180706.AdvertiseByoipCidr')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.AdvertiseByoipCidr'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AdvertiseByoipCidrRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AdvertiseByoipCidrResponseSchema } },
    },
    480: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ByoipCidrNotFoundException',
      content: { 'application/json': { schema: ByoipCidrNotFoundExceptionSchema } },
    },
    484: {
      description: 'IncorrectCidrStateException',
      content: { 'application/json': { schema: IncorrectCidrStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706AllowCustomRoutingTrafficRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic',
  description:
    '<p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>',
  operationId: 'AllowCustomRoutingTraffic',
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
        .literal('GlobalAccelerator_V20180706.AllowCustomRoutingTraffic')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['GlobalAccelerator_V20180706.AllowCustomRoutingTraffic'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AllowCustomRoutingTrafficRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'EndpointGroupNotFoundException',
      content: { 'application/json': { schema: EndpointGroupNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706CreateAcceleratorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator',
  description:
    '<p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>',
  operationId: 'CreateAccelerator',
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
        .literal('GlobalAccelerator_V20180706.CreateAccelerator')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.CreateAccelerator'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateAcceleratorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAcceleratorResponseSchema } },
    },
    480: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingAcceleratorRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator',
    description:
      '<p>Create a custom routing accelerator. A custom routing accelerator directs traffic to one of possibly thousands of Amazon EC2 instance destinations running in a single or multiple virtual private clouds (VPC) subnet endpoints.</p> <p>Be aware that, by default, all destination EC2 instances in a VPC subnet endpoint cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>',
    operationId: 'CreateCustomRoutingAccelerator',
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
          .literal('GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateCustomRoutingAcceleratorRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateCustomRoutingAcceleratorResponseSchema } },
      },
      480: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
      481: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
      482: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroupRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup',
    description:
      'Create an endpoint group for the specified listener for a custom routing accelerator. An endpoint group is a collection of endpoints in one Amazon Web Services Region. ',
    operationId: 'CreateCustomRoutingEndpointGroup',
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
          .literal('GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateCustomRoutingEndpointGroupRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateCustomRoutingEndpointGroupResponseSchema } },
      },
      480: {
        description: 'AcceleratorNotFoundException',
        content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
      },
      481: {
        description: 'EndpointGroupAlreadyExistsException',
        content: { 'application/json': { schema: EndpointGroupAlreadyExistsExceptionSchema } },
      },
      482: {
        description: 'ListenerNotFoundException',
        content: { 'application/json': { schema: ListenerNotFoundExceptionSchema } },
      },
      483: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
      484: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
      485: {
        description: 'InvalidPortRangeException',
        content: { 'application/json': { schema: InvalidPortRangeExceptionSchema } },
      },
      486: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      487: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingListenerRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener',
    description:
      'Create a listener to process inbound connections from clients to a custom routing accelerator. Connections arrive to assigned static IP addresses on the port range that you specify. ',
    operationId: 'CreateCustomRoutingListener',
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
          .literal('GlobalAccelerator_V20180706.CreateCustomRoutingListener')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.CreateCustomRoutingListener'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateCustomRoutingListenerRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateCustomRoutingListenerResponseSchema } },
      },
      480: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
      481: {
        description: 'AcceleratorNotFoundException',
        content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
      },
      482: {
        description: 'InvalidPortRangeException',
        content: { 'application/json': { schema: InvalidPortRangeExceptionSchema } },
      },
      483: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
      484: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetGlobalAcceleratorV20180706CreateEndpointGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup',
  description:
    'Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one Amazon Web Services Region. A resource must be valid and active when you add it as an endpoint.',
  operationId: 'CreateEndpointGroup',
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
        .literal('GlobalAccelerator_V20180706.CreateEndpointGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.CreateEndpointGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateEndpointGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEndpointGroupResponseSchema } },
    },
    480: {
      description: 'AcceleratorNotFoundException',
      content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
    },
    481: {
      description: 'EndpointGroupAlreadyExistsException',
      content: { 'application/json': { schema: EndpointGroupAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ListenerNotFoundException',
      content: { 'application/json': { schema: ListenerNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706CreateListenerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener',
  description:
    'Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify. ',
  operationId: 'CreateListener',
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
        .literal('GlobalAccelerator_V20180706.CreateListener')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.CreateListener'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateListenerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateListenerResponseSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'AcceleratorNotFoundException',
      content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidPortRangeException',
      content: { 'application/json': { schema: InvalidPortRangeExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706DeleteAcceleratorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator',
  description:
    '<p>Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>',
  operationId: 'DeleteAccelerator',
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
        .literal('GlobalAccelerator_V20180706.DeleteAccelerator')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.DeleteAccelerator'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteAcceleratorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'AcceleratorNotFoundException',
      content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
    },
    481: {
      description: 'AcceleratorNotDisabledException',
      content: { 'application/json': { schema: AcceleratorNotDisabledExceptionSchema } },
    },
    482: {
      description: 'AssociatedListenerFoundException',
      content: { 'application/json': { schema: AssociatedListenerFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingAcceleratorRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator',
    description:
      '<p>Delete a custom routing accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create a custom routing accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>',
    operationId: 'DeleteCustomRoutingAccelerator',
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
          .literal('GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteCustomRoutingAcceleratorRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'AcceleratorNotFoundException',
        content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
      },
      481: {
        description: 'AcceleratorNotDisabledException',
        content: { 'application/json': { schema: AcceleratorNotDisabledExceptionSchema } },
      },
      482: {
        description: 'AssociatedListenerFoundException',
        content: { 'application/json': { schema: AssociatedListenerFoundExceptionSchema } },
      },
      483: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
      484: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
    },
  })

export const postXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroupRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup',
    description: 'Delete an endpoint group from a listener for a custom routing accelerator.',
    operationId: 'DeleteCustomRoutingEndpointGroup',
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
          .literal('GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteCustomRoutingEndpointGroupRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
      481: {
        description: 'EndpointGroupNotFoundException',
        content: { 'application/json': { schema: EndpointGroupNotFoundExceptionSchema } },
      },
      482: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingListenerRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener',
    description: 'Delete a listener for a custom routing accelerator.',
    operationId: 'DeleteCustomRoutingListener',
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
          .literal('GlobalAccelerator_V20180706.DeleteCustomRoutingListener')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.DeleteCustomRoutingListener'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteCustomRoutingListenerRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
      481: {
        description: 'ListenerNotFoundException',
        content: { 'application/json': { schema: ListenerNotFoundExceptionSchema } },
      },
      482: {
        description: 'AssociatedEndpointGroupFoundException',
        content: { 'application/json': { schema: AssociatedEndpointGroupFoundExceptionSchema } },
      },
      483: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetGlobalAcceleratorV20180706DeleteEndpointGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup',
  description: 'Delete an endpoint group from a listener.',
  operationId: 'DeleteEndpointGroup',
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
        .literal('GlobalAccelerator_V20180706.DeleteEndpointGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.DeleteEndpointGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteEndpointGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'EndpointGroupNotFoundException',
      content: { 'application/json': { schema: EndpointGroupNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706DeleteListenerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener',
  description: 'Delete a listener from an accelerator.',
  operationId: 'DeleteListener',
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
        .literal('GlobalAccelerator_V20180706.DeleteListener')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.DeleteListener'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteListenerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ListenerNotFoundException',
      content: { 'application/json': { schema: ListenerNotFoundExceptionSchema } },
    },
    482: {
      description: 'AssociatedEndpointGroupFoundException',
      content: { 'application/json': { schema: AssociatedEndpointGroupFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706DenyCustomRoutingTrafficRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic',
  description:
    '<p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a specified list of destination IP addresses and ports. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>',
  operationId: 'DenyCustomRoutingTraffic',
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
        .literal('GlobalAccelerator_V20180706.DenyCustomRoutingTraffic')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['GlobalAccelerator_V20180706.DenyCustomRoutingTraffic'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DenyCustomRoutingTrafficRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'EndpointGroupNotFoundException',
      content: { 'application/json': { schema: EndpointGroupNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706DeprovisionByoipCidrRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr',
  description:
    '<p>Releases the specified address range that you provisioned to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. </p> <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have any accelerators that are using static IP addresses allocated from its address range. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
  operationId: 'DeprovisionByoipCidr',
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
        .literal('GlobalAccelerator_V20180706.DeprovisionByoipCidr')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.DeprovisionByoipCidr'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeprovisionByoipCidrRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeprovisionByoipCidrResponseSchema } },
    },
    480: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ByoipCidrNotFoundException',
      content: { 'application/json': { schema: ByoipCidrNotFoundExceptionSchema } },
    },
    484: {
      description: 'IncorrectCidrStateException',
      content: { 'application/json': { schema: IncorrectCidrStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator',
  description: 'Describe an accelerator. ',
  operationId: 'DescribeAccelerator',
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
        .literal('GlobalAccelerator_V20180706.DescribeAccelerator')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.DescribeAccelerator'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAcceleratorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAcceleratorResponseSchema } },
    },
    480: {
      description: 'AcceleratorNotFoundException',
      content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorAttributesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes',
    description: 'Describe the attributes of an accelerator. ',
    operationId: 'DescribeAcceleratorAttributes',
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
          .literal('GlobalAccelerator_V20180706.DescribeAcceleratorAttributes')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.DescribeAcceleratorAttributes'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeAcceleratorAttributesRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeAcceleratorAttributesResponseSchema } },
      },
      480: {
        description: 'AcceleratorNotFoundException',
        content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
      },
      481: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
      482: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
    },
  })

export const postXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator',
    description: 'Describe a custom routing accelerator. ',
    operationId: 'DescribeCustomRoutingAccelerator',
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
          .literal('GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeCustomRoutingAcceleratorRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeCustomRoutingAcceleratorResponseSchema } },
      },
      480: {
        description: 'AcceleratorNotFoundException',
        content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
      },
      481: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
      482: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
    },
  })

export const postXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes',
    description: 'Describe the attributes of a custom routing accelerator. ',
    operationId: 'DescribeCustomRoutingAcceleratorAttributes',
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
          .literal('GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeCustomRoutingAcceleratorAttributesRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeCustomRoutingAcceleratorAttributesResponseSchema },
        },
      },
      480: {
        description: 'AcceleratorNotFoundException',
        content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
      },
      481: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
      482: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
    },
  })

export const postXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroupRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup',
    description: 'Describe an endpoint group for a custom routing accelerator. ',
    operationId: 'DescribeCustomRoutingEndpointGroup',
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
          .literal('GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeCustomRoutingEndpointGroupRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeCustomRoutingEndpointGroupResponseSchema },
        },
      },
      480: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
      481: {
        description: 'EndpointGroupNotFoundException',
        content: { 'application/json': { schema: EndpointGroupNotFoundExceptionSchema } },
      },
      482: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingListenerRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener',
    description: 'The description of a listener for a custom routing accelerator.',
    operationId: 'DescribeCustomRoutingListener',
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
          .literal('GlobalAccelerator_V20180706.DescribeCustomRoutingListener')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.DescribeCustomRoutingListener'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeCustomRoutingListenerRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeCustomRoutingListenerResponseSchema } },
      },
      480: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
      481: {
        description: 'ListenerNotFoundException',
        content: { 'application/json': { schema: ListenerNotFoundExceptionSchema } },
      },
      482: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetGlobalAcceleratorV20180706DescribeEndpointGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup',
  description: 'Describe an endpoint group. ',
  operationId: 'DescribeEndpointGroup',
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
        .literal('GlobalAccelerator_V20180706.DescribeEndpointGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.DescribeEndpointGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEndpointGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEndpointGroupResponseSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'EndpointGroupNotFoundException',
      content: { 'application/json': { schema: EndpointGroupNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706DescribeListenerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener',
  description: 'Describe a listener. ',
  operationId: 'DescribeListener',
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
        .literal('GlobalAccelerator_V20180706.DescribeListener')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.DescribeListener'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeListenerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeListenerResponseSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ListenerNotFoundException',
      content: { 'application/json': { schema: ListenerNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706ListAcceleratorsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators',
  description: 'List the accelerators for an Amazon Web Services account. ',
  operationId: 'ListAccelerators',
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
        .literal('GlobalAccelerator_V20180706.ListAccelerators')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.ListAccelerators'] },
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
      content: { 'application/json': { schema: ListAcceleratorsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAcceleratorsResponseSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706ListByoipCidrsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs',
  description:
    'Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including the current state and a history of state changes.',
  operationId: 'ListByoipCidrs',
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
        .literal('GlobalAccelerator_V20180706.ListByoipCidrs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.ListByoipCidrs'] },
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
      content: { 'application/json': { schema: ListByoipCidrsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListByoipCidrsResponseSchema } },
    },
    480: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingAcceleratorsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators',
    description: 'List the custom routing accelerators for an Amazon Web Services account. ',
    operationId: 'ListCustomRoutingAccelerators',
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
          .literal('GlobalAccelerator_V20180706.ListCustomRoutingAccelerators')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.ListCustomRoutingAccelerators'],
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
        content: { 'application/json': { schema: ListCustomRoutingAcceleratorsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListCustomRoutingAcceleratorsResponseSchema } },
      },
      480: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
      481: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      482: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingEndpointGroupsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups',
    description:
      'List the endpoint groups that are associated with a listener for a custom routing accelerator. ',
    operationId: 'ListCustomRoutingEndpointGroups',
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
          .literal('GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups'],
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
        content: { 'application/json': { schema: ListCustomRoutingEndpointGroupsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListCustomRoutingEndpointGroupsResponseSchema } },
      },
      480: {
        description: 'ListenerNotFoundException',
        content: { 'application/json': { schema: ListenerNotFoundExceptionSchema } },
      },
      481: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      482: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
      483: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingListenersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners',
  description: 'List the listeners for a custom routing accelerator. ',
  operationId: 'ListCustomRoutingListeners',
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
        .literal('GlobalAccelerator_V20180706.ListCustomRoutingListeners')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['GlobalAccelerator_V20180706.ListCustomRoutingListeners'],
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
      content: { 'application/json': { schema: ListCustomRoutingListenersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCustomRoutingListenersResponseSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'AcceleratorNotFoundException',
      content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings',
    description:
      "<p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator. For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p> <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p> <p>The mappings also include a flag for each destination denoting which destination IP addresses and ports are allowed or denied traffic.</p>",
    operationId: 'ListCustomRoutingPortMappings',
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
          .literal('GlobalAccelerator_V20180706.ListCustomRoutingPortMappings')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.ListCustomRoutingPortMappings'],
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
        content: { 'application/json': { schema: ListCustomRoutingPortMappingsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListCustomRoutingPortMappingsResponseSchema } },
      },
      480: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
      481: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      482: {
        description: 'EndpointGroupNotFoundException',
        content: { 'application/json': { schema: EndpointGroupNotFoundExceptionSchema } },
      },
      483: {
        description: 'AcceleratorNotFoundException',
        content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
      },
      484: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestinationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination',
    description:
      'List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that span multiple custom routing accelerators in your account, or for scenarios where you only want to list the port mappings for a specific destination instance.',
    operationId: 'ListCustomRoutingPortMappingsByDestination',
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
          .literal('GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination'],
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
          'application/json': { schema: ListCustomRoutingPortMappingsByDestinationRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListCustomRoutingPortMappingsByDestinationResponseSchema },
        },
      },
      480: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
      481: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      482: {
        description: 'EndpointNotFoundException',
        content: { 'application/json': { schema: EndpointNotFoundExceptionSchema } },
      },
      483: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetGlobalAcceleratorV20180706ListEndpointGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups',
  description: 'List the endpoint groups that are associated with a listener. ',
  operationId: 'ListEndpointGroups',
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
        .literal('GlobalAccelerator_V20180706.ListEndpointGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.ListEndpointGroups'] },
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
      content: { 'application/json': { schema: ListEndpointGroupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEndpointGroupsResponseSchema } },
    },
    480: {
      description: 'ListenerNotFoundException',
      content: { 'application/json': { schema: ListenerNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706ListListenersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners',
  description: 'List the listeners for an accelerator. ',
  operationId: 'ListListeners',
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
        .literal('GlobalAccelerator_V20180706.ListListeners')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.ListListeners'] },
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
      content: { 'application/json': { schema: ListListenersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListListenersResponseSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'AcceleratorNotFoundException',
      content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource',
  description:
    '<p>List all tags for an accelerator. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>',
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
        .literal('GlobalAccelerator_V20180706.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.ListTagsForResource'] },
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
      description: 'AcceleratorNotFoundException',
      content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706ProvisionByoipCidrRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr',
  description:
    '<p>Provisions an IP address range to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html"> AdvertiseByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
  operationId: 'ProvisionByoipCidr',
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
        .literal('GlobalAccelerator_V20180706.ProvisionByoipCidr')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.ProvisionByoipCidr'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ProvisionByoipCidrRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ProvisionByoipCidrResponseSchema } },
    },
    480: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
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
      description: 'IncorrectCidrStateException',
      content: { 'application/json': { schema: IncorrectCidrStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706RemoveCustomRoutingEndpointsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints',
    description: 'Remove endpoints from a custom routing accelerator.',
    operationId: 'RemoveCustomRoutingEndpoints',
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
          .literal('GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: RemoveCustomRoutingEndpointsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'EndpointGroupNotFoundException',
        content: { 'application/json': { schema: EndpointGroupNotFoundExceptionSchema } },
      },
      481: {
        description: 'EndpointNotFoundException',
        content: { 'application/json': { schema: EndpointNotFoundExceptionSchema } },
      },
      482: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
      483: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
      484: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      485: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  })

export const postXAmzTargetGlobalAcceleratorV20180706RemoveEndpointsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints',
  description:
    "<p>Remove endpoints from an endpoint group. </p> <p>The <code>RemoveEndpoints</code> API operation is the recommended option for removing endpoints. The alternative is to remove endpoints by updating an endpoint group by using the <a href=\"https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html\">UpdateEndpointGroup</a> API operation. There are two advantages to using <code>AddEndpoints</code> to remove endpoints instead:</p> <ul> <li> <p>It's more convenient, because you only need to specify the endpoints that you want to remove. With the <code>UpdateEndpointGroup</code> API operation, you must specify all of the endpoints in the endpoint group except the ones that you want to remove from the group.</p> </li> <li> <p>It's faster, because Global Accelerator doesn't need to resolve any endpoints. With the <code>UpdateEndpointGroup</code> API operation, Global Accelerator must resolve all of the endpoints that remain in the group.</p> </li> </ul>",
  operationId: 'RemoveEndpoints',
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
        .literal('GlobalAccelerator_V20180706.RemoveEndpoints')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.RemoveEndpoints'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RemoveEndpointsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'EndpointGroupNotFoundException',
      content: { 'application/json': { schema: EndpointGroupNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'TransactionInProgressException',
      content: { 'application/json': { schema: TransactionInProgressExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.TagResource',
  description:
    '<p>Add tags to an accelerator resource. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>',
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
        .literal('GlobalAccelerator_V20180706.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.TagResource'] },
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
      description: 'AcceleratorNotFoundException',
      content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource',
  description:
    '<p>Remove tags from a Global Accelerator resource. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from an accelerator that was already removed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
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
        .literal('GlobalAccelerator_V20180706.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.UntagResource'] },
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
      description: 'AcceleratorNotFoundException',
      content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator',
  description:
    '<p>Update an accelerator. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>',
  operationId: 'UpdateAccelerator',
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
        .literal('GlobalAccelerator_V20180706.UpdateAccelerator')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.UpdateAccelerator'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateAcceleratorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAcceleratorResponseSchema } },
    },
    480: {
      description: 'AcceleratorNotFoundException',
      content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
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
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorAttributesRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes',
    description: 'Update the attributes for an accelerator. ',
    operationId: 'UpdateAcceleratorAttributes',
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
          .literal('GlobalAccelerator_V20180706.UpdateAcceleratorAttributes')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.UpdateAcceleratorAttributes'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateAcceleratorAttributesRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateAcceleratorAttributesResponseSchema } },
      },
      480: {
        description: 'AcceleratorNotFoundException',
        content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
      },
      481: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
      482: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator',
    description: 'Update a custom routing accelerator. ',
    operationId: 'UpdateCustomRoutingAccelerator',
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
          .literal('GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateCustomRoutingAcceleratorRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateCustomRoutingAcceleratorResponseSchema } },
      },
      480: {
        description: 'AcceleratorNotFoundException',
        content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
      },
      481: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
      482: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
    },
  })

export const postXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes',
    description: 'Update the attributes for a custom routing accelerator. ',
    operationId: 'UpdateCustomRoutingAcceleratorAttributes',
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
          .literal('GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: UpdateCustomRoutingAcceleratorAttributesRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: UpdateCustomRoutingAcceleratorAttributesResponseSchema },
        },
      },
      480: {
        description: 'AcceleratorNotFoundException',
        content: { 'application/json': { schema: AcceleratorNotFoundExceptionSchema } },
      },
      481: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
      482: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingListenerRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener',
    description: 'Update a listener for a custom routing accelerator. ',
    operationId: 'UpdateCustomRoutingListener',
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
          .literal('GlobalAccelerator_V20180706.UpdateCustomRoutingListener')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['GlobalAccelerator_V20180706.UpdateCustomRoutingListener'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateCustomRoutingListenerRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateCustomRoutingListenerResponseSchema } },
      },
      480: {
        description: 'InvalidArgumentException',
        content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
      },
      481: {
        description: 'InvalidPortRangeException',
        content: { 'application/json': { schema: InvalidPortRangeExceptionSchema } },
      },
      482: {
        description: 'ListenerNotFoundException',
        content: { 'application/json': { schema: ListenerNotFoundExceptionSchema } },
      },
      483: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
      484: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetGlobalAcceleratorV20180706UpdateEndpointGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup',
  description:
    'Update an endpoint group. A resource must be valid and active when you add it as an endpoint.',
  operationId: 'UpdateEndpointGroup',
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
        .literal('GlobalAccelerator_V20180706.UpdateEndpointGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.UpdateEndpointGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateEndpointGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateEndpointGroupResponseSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'EndpointGroupNotFoundException',
      content: { 'application/json': { schema: EndpointGroupNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706UpdateListenerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener',
  description: 'Update a listener. ',
  operationId: 'UpdateListener',
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
        .literal('GlobalAccelerator_V20180706.UpdateListener')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.UpdateListener'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateListenerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateListenerResponseSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'InvalidPortRangeException',
      content: { 'application/json': { schema: InvalidPortRangeExceptionSchema } },
    },
    482: {
      description: 'ListenerNotFoundException',
      content: { 'application/json': { schema: ListenerNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetGlobalAcceleratorV20180706WithdrawByoipCidrRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr',
  description:
    '<p>Stops advertising an address range that is provisioned as an address pool. You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time.</p> <p>It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services because of propagation delays.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>',
  operationId: 'WithdrawByoipCidr',
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
        .literal('GlobalAccelerator_V20180706.WithdrawByoipCidr')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['GlobalAccelerator_V20180706.WithdrawByoipCidr'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: WithdrawByoipCidrRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WithdrawByoipCidrResponseSchema } },
    },
    480: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ByoipCidrNotFoundException',
      content: { 'application/json': { schema: ByoipCidrNotFoundExceptionSchema } },
    },
    484: {
      description: 'IncorrectCidrStateException',
      content: { 'application/json': { schema: IncorrectCidrStateExceptionSchema } },
    },
  },
})
