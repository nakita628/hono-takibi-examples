import { createRoute, z } from '@hono/zod-openapi'

const ActionSchema = z
  .enum([
    'DROP',
    'FORWARD_DECAPSULATED',
    'FORWARD_AS_IS',
    'PASSTHROUGH',
    'DUPLICATED_DECAPSULATED',
    'DUPLICATE_AS_IS',
  ])
  .openapi({
    description:
      "'Identifies the action of the MEC host data plane, when a packet matches the trafficFilter.'",
  })
  .openapi('Action')

const AlgorithmSchema = z
  .string()
  .openapi({
    description:
      ' Name of the algorithm used to generate the checksum,  as defined in ETSI GS NFV-SOL 004. For example, SHA-256, SHA-512.',
  })
  .openapi('Algorithm')

const IpAddressTypeSchema = z
  .enum(['IP_V6', 'IP_V4'])
  .openapi({ description: 'Specifies the IP address type' })
  .openapi('IpAddressType')

const DNSRuleDescriptorSchema = z
  .object({
    dnsRuleId: z
      .string()
      .openapi({
        description: 'Identifies the DNS Rule',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
    domainName: z
      .string()
      .openapi({
        description: 'FQDN of the DNS rule',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
    ipAddress: z
      .string()
      .openapi({
        description: 'IP address given by the DNS rule',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
    ipAddressType: IpAddressTypeSchema,
    ttl: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Time-to-live value',
        'x-etsi-mec-cardinality': '0..1',
        'x-etsi-mec-origin-type': 'Int',
      }),
  })
  .openapi({
    required: ['dnsRuleId', 'domainName', 'ipAddressType', 'ipAddress'],
    'x-etsi-ref': '6.2.1.13',
  })
  .openapi('DNSRuleDescriptor')

const VirtualNetworkInterfaceRequirementsSchema = z
  .string()
  .openapi('VirtualNetworkInterfaceRequirements')

const AppExternalCpdSchema = z
  .object({
    inherited_attributes: z
      .object({})
      .openapi({
        description: 'All attributes inherited from Cpd.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'inherited_attributes',
      }),
    virtualNetworkInterfaceRequirements: z
      .array(VirtualNetworkInterfaceRequirementsSchema)
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'Specifies requirements on a virtual network interface realizing the CPs instantiated from this CPD.',
        'x-etsi-mec-cardinality': '0..N',
      }),
  })
  .openapi({ required: ['inherited_attributes'], 'x-etsi-ref': '6.2.1.6' })
  .openapi('AppExternalCpd')

const FeatureDependencySchema = z
  .object({
    featureName: z
      .string()
      .openapi({
        description: 'The name of the feature, for example, UserApps, UEIdentity, etc.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
    version: z
      .string()
      .openapi({
        description: 'The version of the feature.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
  })
  .openapi({ required: ['featureName', 'version'], 'x-etsi-ref': '6.2.1.8' })
  .openapi('FeatureDependency')

const LatencyDescriptorSchema = z
  .object({
    maxLatency: z
      .int()
      .openapi({
        description:
          'The value of the maximum latency in nano seconds tolerated by the MEC application. See note.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'Uint32',
      }),
  })
  .openapi({
    required: ['maxLatency'],
    'x-etsi-notes':
      'NOTE:\tThe latency is considered to be the one way end-to-end latency between the client application (e.g. in a device) and the service (i.e. the MEC Application instance).',
    'x-etsi-ref': '6.2.1.14',
  })
  .openapi('LatencyDescriptor')

const NotSpecifiedSchema = z.string().openapi('NotSpecified')

const CategoryRefSchema = z.any().openapi({ description: 'See MEC011' }).openapi('CategoryRef')

const SerializerTypesSchema = z.string().openapi('SerializerTypes')

const SecurityInfoSchema = z.any().openapi({ description: 'See MEC011' }).openapi('SecurityInfo')

const TransportTypesSchema = z.string().openapi('TransportTypes')

const TransportDescriptorSchema = z
  .object({
    protocol: z
      .string()
      .openapi({
        description: 'The name of the protocol used. Shall be set to HTTP for a REST API.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
    security: SecurityInfoSchema,
    type: TransportTypesSchema,
    version: z
      .string()
      .openapi({
        description: 'The version of the protocol used.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
  })
  .openapi({ required: ['type', 'protocol', 'version', 'security'], 'x-etsi-ref': '6.2.1.19' })
  .openapi('TransportDescriptor')

const TransportDependencySchema = z
  .object({
    labels: z
      .array(z.string())
      .min(1)
      .openapi({
        description:
          'Set of labels that allow to define groups of transport bindings. The mechanism of the grouping is defined below this table.',
        'x-etsi-mec-cardinality': '1..N',
        'x-etsi-mec-origin-type': 'String',
      }),
    serializers: z
      .array(SerializerTypesSchema)
      .min(1)
      .openapi({
        description:
          'Information about the serializers in this transport binding, as defined in the SerializerTypes type in ETSI GS MEC 011 [i.4]. Support for at least one of the entries is required in conjunction with the transport.',
        'x-etsi-mec-cardinality': '1..N',
        'x-etsi-mec-origin-type': 'SerializerTypes',
      }),
    transport: TransportDescriptorSchema,
  })
  .openapi({ required: ['transport', 'serializers', 'labels'], 'x-etsi-ref': '6.2.1.18' })
  .openapi('TransportDependency')

const ServiceDependencySchema = z
  .object({
    requestedPermissions: z
      .array(NotSpecifiedSchema)
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'Requested permissions regarding the access of the application to the service. See clause 8.2 of ETSI GS MEC 009 [4].\nThe format of this attribute is left for the data model design stage.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'Not_specified',
      }),
    serCategory: CategoryRefSchema.exactOptional(),
    serName: z
      .string()
      .openapi({
        description: 'The name of the service, for example, RNIS, LocationService, etc.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
    serTransportDependencies: z
      .array(TransportDependencySchema)
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'Indicates transport and serialization format dependencies of consuming the service. Defaults to REST + JSON if absent. See note.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'TransportDependency',
      }),
    version: z
      .string()
      .openapi({
        description: 'The version of the service.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
  })
  .openapi({
    required: ['serName', 'version'],
    'x-etsi-notes':
      'NOTE:\tThis attribute indicates groups of transport bindings that a service-consuming MEC application supports for the consumption of the MEC service defined by this ServiceDependency structure. If at least one of the indicated groups is supported by the service it may be consumed by the application.',
    'x-etsi-ref': '6.2.1.17',
  })
  .openapi('ServiceDependency')

const SerNameSchema = z
  .string()
  .openapi({ description: 'The name of the service, for example, RNIS, LocationService, etc.' })
  .openapi('SerName')

const SerializersSchema = z
  .array(SerializerTypesSchema)
  .min(1)
  .openapi({
    description:
      "'Information about the serializers in this binding, as defined in the SerializerTypes type in ETSI GS MEC 011 '",
  })
  .openapi('Serializers')

const TransportsSupportedSchema = z
  .object({
    serializers: SerializersSchema.exactOptional(),
    transport: TransportDescriptorSchema.exactOptional(),
  })
  .openapi({
    description:
      "'Indicates transports and serialization formats supported made available to the service-consuming application. Defaults to REST + JSON if absent.'",
    required: ['featureName', 'version'],
  })
  .openapi('TransportsSupported')

const SerVersionSchema = z
  .string()
  .openapi({ description: 'The version of the service.' })
  .openapi('SerVersion')

const ServiceDescriptorSchema = z
  .object({
    serCategory: CategoryRefSchema.exactOptional(),
    serName: SerNameSchema,
    transportsSupported: TransportsSupportedSchema.exactOptional(),
    version: SerVersionSchema,
  })
  .openapi({
    description:
      "'The ServiceDescriptor data type describes a MEC service produced by a service-providing MEC application.'",
    required: ['serName', 'version'],
  })
  .openapi('ServiceDescriptor')

const InterfaceTypeSchema = z
  .enum(['TUNNEL', 'MAC', 'IP'])
  .openapi({ description: 'Type of interface.' })
  .openapi('InterfaceType')

const TunnelTypeSchema = z
  .enum(['GTP-U', 'GRE'])
  .openapi({ description: 'Type of tunnel.' })
  .openapi('TunnelType')

const TunnelInfoSchema = z
  .object({
    tunnelDstAddress: z
      .string()
      .openapi({
        description: 'Destination address of the tunnel.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
    tunnelSpecificData: NotSpecifiedSchema.exactOptional(),
    tunnelSrcAddress: z
      .string()
      .openapi({
        description: 'Source address of the tunnel.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
    tunnelType: TunnelTypeSchema,
  })
  .openapi({
    required: ['tunnelType', 'tunnelDstAddress', 'tunnelSrcAddress'],
    'x-etsi-ref': '6.2.1.12',
  })
  .openapi('TunnelInfo')

const InterfaceDescriptorSchema = z
  .object({
    dstIPAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the interface type is IP, the destination address identifies the IP address of the destination. Only used for dstInterface.',
        'x-etsi-mec-cardinality': '0..1',
        'x-etsi-mec-origin-type': 'String',
      }),
    dstMACAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the interface type is MAC, the destination address identifies the MAC address of the destination. Only used for dstInterface.',
        'x-etsi-mec-cardinality': '0..1',
        'x-etsi-mec-origin-type': 'String',
      }),
    interfaceType: InterfaceTypeSchema,
    srcMACAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the interface type is MAC, the source address identifies the MAC address of the interface.',
        'x-etsi-mec-cardinality': '0..1',
        'x-etsi-mec-origin-type': 'String',
      }),
    tunnelInfo: TunnelInfoSchema.exactOptional(),
  })
  .openapi({ required: ['interfaceType'], 'x-etsi-ref': '6.2.1.11' })
  .openapi('InterfaceDescriptor')

const FilterTypeSchema = z
  .enum(['FLOW', 'PACKET'])
  .openapi({ description: 'Definition of filter type: per FLOW or PACKET' })
  .openapi('FilterType')

const TrafficFilterSchema = z
  .object({
    dSCP: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Used to match all IPv4 packets that have the same DSCP.',
        'x-etsi-mec-cardinality': '0..1',
        'x-etsi-mec-origin-type': 'Int',
      }),
    dstAddress: z
      .array(z.string())
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'A IP address or a range of IP addresses.For IPv4, the IP address could be an IP address plus mask, or an individual IP address, or a range of IP addresses.For IPv6, the IP address could be an IP prefix, or a range of IP prefixes.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'String',
      }),
    dstPort: z
      .array(z.string())
      .min(0)
      .exactOptional()
      .openapi({
        description: 'A port or a range of ports.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'String',
      }),
    dstTunnelPort: z
      .array(z.string())
      .min(0)
      .exactOptional()
      .openapi({
        description: 'Used for GTP tunnel based traffic rule.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'String',
      }),
    protocol: z
      .array(z.string())
      .min(0)
      .exactOptional()
      .openapi({
        description: 'Specify the protocol of the traffic filter.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'String',
      }),
    qCI: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Used to match all packets that have the same QCI.',
        'x-etsi-mec-cardinality': '0..1',
        'x-etsi-mec-origin-type': 'Int',
      }),
    srcAddress: z
      .array(z.string())
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'An IP address or a range of IP addresses.For IPv4, the IP address could be an IP address plus mask, or an individual IP address, or a range of IP addresses.For IPv6, the IP address could be an IP prefix, or a range of IP prefixes.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'String',
      }),
    srcPort: z
      .array(z.string())
      .min(0)
      .exactOptional()
      .openapi({
        description: 'A port or a range of ports.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'String',
      }),
    srcTunnelAddress: z
      .array(z.string())
      .min(0)
      .exactOptional()
      .openapi({
        description: 'Used for GTP tunnel based traffic rule.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'String',
      }),
    srcTunnelPort: z
      .array(z.string())
      .min(0)
      .exactOptional()
      .openapi({
        description: 'Used for GTP tunnel based traffic rule.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'String',
      }),
    tC: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Used to match all IPv6 packets that have the same TC.',
        'x-etsi-mec-cardinality': '0..1',
        'x-etsi-mec-origin-type': 'Int',
      }),
    tag: z
      .array(z.string())
      .min(0)
      .exactOptional()
      .openapi({
        description: 'Used for tag based traffic rule.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'String',
      }),
    tgtTunnelAddress: z
      .array(z.string())
      .min(0)
      .exactOptional()
      .openapi({
        description: 'Used for GTP tunnel based traffic rule.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'String',
      }),
  })
  .openapi({ 'x-etsi-ref': '6.2.1.10', required: [] })
  .openapi('TrafficFilter')

const TrafficRuleDescriptorSchema = z
  .object({
    action: ActionSchema,
    dstInterface: z.array(InterfaceDescriptorSchema).min(0).max(2).exactOptional(),
    filterType: FilterTypeSchema,
    priority: z
      .int()
      .openapi({
        description:
          'Priority of this traffic rule. If traffic rule conflicts, the one with higher priority take precedence.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'Int',
      }),
    trafficFilter: z
      .array(TrafficFilterSchema)
      .min(1)
      .openapi({
        description:
          'The filter used to identify specific flow/packets that need to be handled by the MEC host.',
        'x-etsi-mec-cardinality': '1..N',
        'x-etsi-mec-origin-type': 'TrafficFilter',
      }),
    trafficRuleId: z
      .string()
      .openapi({
        description: 'Identifies the traffic rule.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
  })
  .openapi({
    required: ['trafficRuleId', 'filterType', 'priority', 'trafficFilter', 'action'],
    'x-etsi-ref': '6.2.1.9',
  })
  .openapi('TrafficRuleDescriptor')

const ChangeAppInstanceStateOpConfigSchema = z
  .string()
  .openapi({ description: 'NFV' })
  .openapi('ChangeAppInstanceStateOpConfig')

const SwImageDescriptorSchema = z
  .string()
  .openapi({ description: 'Ref NFV' })
  .openapi('SwImageDescriptor')

const TerminateAppInstanceOpConfigSchema = z
  .string()
  .openapi({ description: 'NFV', 'x-etsi-ref': '6.2.2.9' })
  .openapi('TerminateAppInstanceOpConfig')

const VirtualComputeDescriptionSchema = z
  .string()
  .openapi({ description: 'Ref NFV' })
  .openapi('VirtualComputeDescription')

const VirtualStorageDescriptorSchema = z
  .string()
  .openapi({ description: 'Ref NFV' })
  .openapi('VirtualStorageDescriptor')

const AppDSchema = z
  .object({
    appDId: z
      .string()
      .openapi({
        description:
          'Identifier of this MEC application descriptor. This attribute shall be globally unique. See note 1.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
    appDNSRule: z
      .array(DNSRuleDescriptorSchema)
      .min(0)
      .exactOptional()
      .openapi({
        description: 'Describes DNS rules the MEC application requires.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'DNSRuleDescriptor',
      }),
    appDVersion: z
      .string()
      .openapi({
        description: 'Identifies the version of the application descriptor.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
    appDescription: z
      .string()
      .openapi({
        description: 'Human readable description of the MEC application.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
    appExtCpd: z
      .array(AppExternalCpdSchema)
      .min(0)
      .exactOptional()
      .openapi({
        description: 'Describes external interface(s) exposed by this MEC application.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'AppExternalCpd',
      }),
    appFeatureOptional: z
      .array(FeatureDependencySchema)
      .min(0)
      .exactOptional()
      .openapi({
        description: 'Describes features a MEC application may use if available.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'FeatureDependency',
      }),
    appFeatureRequired: z
      .array(FeatureDependencySchema)
      .min(0)
      .exactOptional()
      .openapi({
        description: 'Describes features a MEC application requires to run.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'FeatureDependency',
      }),
    appInfoName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Human readable name for the MEC application.',
        'x-etsi-mec-cardinality': '0..1',
        'x-etsi-mec-origin-type': 'String',
      }),
    appLatency: LatencyDescriptorSchema.exactOptional(),
    appName: z
      .string()
      .openapi({
        description: 'Name to identify the MEC application.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
    appProvider: z
      .string()
      .openapi({
        description: 'Provider of the application and of the AppD.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
    appServiceOptional: z
      .array(ServiceDependencySchema)
      .min(0)
      .exactOptional()
      .openapi({
        description: 'Describes services a MEC application may use if available.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'ServiceDependency',
      }),
    appServiceProduced: z
      .array(ServiceDescriptorSchema)
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'Describes services a MEC application is able to produce to the platform or other MEC applications. Only relevant for service-producing apps.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'ServiceDescriptor',
      }),
    appServiceRequired: z
      .array(ServiceDependencySchema)
      .min(0)
      .exactOptional()
      .openapi({
        description: 'Describes services a MEC application requires to run.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'ServiceDependency',
      }),
    appSoftVersion: z
      .string()
      .openapi({
        description: 'Identifies the version of software of the MEC application.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
    appTrafficRule: z
      .array(TrafficRuleDescriptorSchema)
      .min(0)
      .exactOptional()
      .openapi({
        description: 'Describes traffic rules the MEC application requires.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'TrafficRuleDescriptor',
      }),
    changeAppInstanceStateOpConfig: ChangeAppInstanceStateOpConfigSchema.exactOptional(),
    mecVersion: z
      .array(z.string())
      .min(1)
      .openapi({
        description:
          'Identifies version(s) of MEC system compatible with the MEC application described in this version of the AppD.',
        'x-etsi-mec-cardinality': '1..N',
        'x-etsi-mec-origin-type': 'String',
      }),
    swImageDescriptor: SwImageDescriptorSchema,
    terminateAppInstanceOpConfig: TerminateAppInstanceOpConfigSchema.exactOptional(),
    transportDependencies: z
      .array(TransportDependencySchema)
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'Transports, if any, that this application requires to be provided by the platform. These transports will be used by the application to deliver services provided by this application. Only relevant for service-producing apps. See note 2.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'TransportDependency',
      }),
    virtualComputeDescriptor: VirtualComputeDescriptionSchema,
    virtualStorageDescriptor: z
      .array(VirtualStorageDescriptorSchema)
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'Defines descriptors of virtual storage resources to be used by the MEC application.',
        'x-etsi-mec-cardinality': '0..N',
        'x-etsi-mec-origin-type': 'VirtualStorageDescriptor',
      }),
  })
  .openapi({
    required: [
      'appDId',
      'appName',
      'appProvider',
      'appSoftVersion',
      'appDVersion',
      'mecVersion',
      'appDescription',
      'virtualComputeDescriptor',
      'swImageDescriptor',
    ],
    'x-etsi-notes':
      'NOTE 1:\tThe appDId shall be used as the unique identifier of the application package that contains this AppD.\nNOTE 2:\tThis attribute indicates groups of transport bindings which a service-producing MEC application requires to be supported by the platform in order to be able to produce its services. At least one of the indicated groups needs to be supported to fulfil the requirements.',
    'x-etsi-ref': '6.2.1.2',
  })
  .openapi('AppD')

const AppDIdSchema = z
  .string()
  .openapi({
    description:
      'Identifier of this MEC application descriptor. This attribute shall be globally unique.',
  })
  .openapi('AppDId')

const AppDVersionSchema = z
  .string()
  .openapi({ description: 'Identifies the version of the application descriptor.' })
  .openapi('AppDVersion')

const AppNameSchema = z
  .string()
  .openapi({ description: 'Name to identify the MEC application.' })
  .openapi('AppName')

const AppPkgNotificationTypeSchema = z
  .enum(['AppPackageOnBoarded', 'AppPacakgeEnabled', 'AppPacakgeDisabled', 'AppPackageDeleted'])
  .openapi({ description: 'Discriminator for the different notification types' })
  .openapi('AppPkgNotificationType')

const AppPkgOperationalStateSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      'Operational state of the onboarded application package: Ã¢â‚¬Â¢ENABLED: the application package can be used for instantiation of new application instances. Ã¢â‚¬Â¢DISABLED: the application package cannot be used for further application instantiation requests.',
  })
  .openapi('AppPkgOperationalState')

const AppPkgSubscriptionTypeSchema = z
  .enum(['AppPackageOnBoarding', 'AppPacakgeOperationChange', 'AppPackageDeletion'])
  .openapi({ description: 'Subscribed notification type.' })
  .openapi('AppPkgSubscriptionType')

const AppPkgArtifactInfoSchema = z
  .any()
  .openapi({
    description:
      'Additional information of application package artifacts that are not application software images. Type is TBD',
  })
  .openapi('AppPkgArtifactInfo')

const AppPkgFilterSchema = z
  .string()
  .openapi({
    description:
      'The attribute-based filter is to filter application packages on which the query applies.',
  })
  .openapi('AppPkgFilter')

const AppPkgIdSchema = z
  .string()
  .openapi({ description: 'Identifier of the onboarded application package.' })
  .openapi('AppPkgId')

const LinkTypeSchema = z
  .object({
    href: z
      .url()
      .openapi({
        description: 'URI referring to a resource',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'URI',
      }),
  })
  .openapi({ required: ['href'], 'x-etsi-ref': '6.5.2' })
  .openapi('LinkType')

const AppPkgInfoLinksSchema = z
  .object({ appD: LinkTypeSchema, appPkgContent: LinkTypeSchema, self: LinkTypeSchema })
  .openapi({
    description: 'Links to resources related to this resource.',
    required: ['self', 'appD', 'appPkgContent'],
  })
  .openapi('AppPkgInfoLinks')

const AppProviderSchema = z
  .string()
  .openapi({ description: 'Provider of the application and of the AppD.' })
  .openapi('AppProvider')

const AppSoftwareVersionSchema = z
  .string()
  .openapi({
    description:
      'Software version of the application. This is updated when there is any change to the software in the onboarded application package.',
  })
  .openapi('AppSoftwareVersion')

const HashSchema = z
  .string()
  .openapi({ description: "'String 1 The hexadecimal value of the checksum'" })
  .openapi('Hash')

const ChecksumSchema = z
  .object({ algorithm: AlgorithmSchema, hash: HashSchema })
  .openapi({ description: '', required: ['algorithm', 'hash'] })
  .openapi('Checksum')

const OnboardingStateSchema = z
  .enum(['CREATED', 'UPLOADING', 'PROCESSING', 'ONBOARDED'])
  .openapi({ description: 'Onboarding state of application package' })
  .openapi('OnboardingState')

const AppPkgSWImageInfoSchema = z
  .any()
  .openapi({
    description: 'Information of application software image in application package. Type is TBD',
  })
  .openapi('AppPkgSWImageInfo')

const UsageStateSchema = z
  .enum(['IN_USE', 'NOT_IN_USE'])
  .openapi({ description: 'Usage state of the onboarded instance of the application package' })
  .openapi('UsageState')

const KeyValuePairsSchema = z
  .looseObject({})
  .openapi({
    description:
      "'This data type represents a list of key-value pairs. The order of the pairs in the list is not significant. In JSON, a set of key-value pairs is represented as an object. It shall comply with the provisions defined in clause 4 of IETF RFC 8259'",
  })
  .openapi('KeyValuePairs')

const AppPkgInfoSchema = z
  .object({
    _links: AppPkgInfoLinksSchema,
    additionalArtifacts: AppPkgArtifactInfoSchema.exactOptional(),
    appDId: AppDIdSchema,
    appDVersion: AppDVersionSchema,
    appName: AppNameSchema,
    appProvider: AppProviderSchema.exactOptional(),
    appSoftwareVersion: AppSoftwareVersionSchema,
    checksum: ChecksumSchema,
    id: AppPkgIdSchema,
    onboardingState: OnboardingStateSchema,
    operationalState: AppPkgOperationalStateSchema,
    softwareImages: AppPkgSWImageInfoSchema,
    usageState: UsageStateSchema,
    userDefinedData: KeyValuePairsSchema.exactOptional(),
  })
  .openapi({
    description:
      "'The data type AppPkgInfo represents the parameters for an application package resource'",
    required: [
      'id',
      'appDId',
      'appName',
      'appSoftwareVersion',
      'appDVersion',
      'checksum',
      'softwareImages',
      'onboardingState',
      'operationalState',
      'usageState',
      '_links',
    ],
  })
  .openapi('AppPkgInfo')

const AppPkgInfoModificationsSchema = z
  .object({ operationState: z.enum(['DISABLED', 'ENABLED']) })
  .openapi({
    description:
      "'The data type represents the operational state for an application package resource'",
    required: ['operationState'],
  })
  .openapi('AppPkgInfoModifications')

const AppPkgNotificationLinksSchema = z
  .object({ subscription: LinkTypeSchema })
  .openapi({
    description: 'Links to resources related to this resource.',
    required: ['subscription'],
  })
  .openapi('AppPkgNotificationLinks')

const AppPkgNotificationIdSchema = z
  .string()
  .openapi({ description: "''" })
  .openapi('AppPkgNotificationId')

const SubscriptionIdSchema = z
  .string()
  .openapi({ description: 'Identifier of the subscription related to this notification.' })
  .openapi('SubscriptionId')

const TimeStampSchema = z
  .object({
    nanoSeconds: z
      .int()
      .openapi({
        description:
          'The nanoseconds part of the Time. Time is defined as Unix-time since January 1, 1970, 00:00:00 UTC.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'Uint32',
      }),
    seconds: z
      .int()
      .openapi({
        description:
          'The seconds part of the Time. Time is defined as Unix-time since January 1, 1970, 00:00:00 UTC.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'Uint32',
      }),
  })
  .openapi({ required: ['seconds', 'nanoSeconds'], 'x-etsi-ref': '6.2.5.4' })
  .openapi('TimeStamp')

const AppPkgNotificationSchema = z
  .object({
    _links: AppPkgNotificationLinksSchema,
    appDId: AppDIdSchema,
    appPkgId: AppPkgIdSchema,
    id: AppPkgNotificationIdSchema,
    notificationType: AppPkgNotificationTypeSchema,
    operationalState: z.enum(['DISABLED', 'ENABLED']),
    subscriptionId: SubscriptionIdSchema,
    timeStamp: TimeStampSchema,
  })
  .openapi({
    description:
      "'This data type represents an application package management notification for informing the subscribers about onboarding application package resources. The notification is triggered when a new application package is onboarded'",
    required: [
      'id',
      'notificationType',
      'subscriptionId',
      'timeStamp',
      'appPkgId',
      'appDId',
      'operationalState',
      '_links',
    ],
  })
  .openapi('AppPkgNotification')

const CallbackUriSchema = z
  .url()
  .openapi({ description: 'The URI of the endpoint for the notification to be sent to.' })
  .openapi('CallbackUri')

const SubsctiptionTypeAppPkgSchema = z
  .enum(['AppPackageOnBoarding', 'AppPacakgeOperationChange', 'AppPackageDeletion'])
  .openapi({ description: "'Subscribed notification type'" })
  .openapi('SubsctiptionTypeAppPkg')

const AppPkgSubscriptionSchema = z
  .object({
    appPkgFilter: z.array(AppPkgFilterSchema).exactOptional(),
    callbackUri: CallbackUriSchema,
    subsctiptionType: SubsctiptionTypeAppPkgSchema,
  })
  .openapi({
    description:
      '\'The data type represents the input parameters of "subscription operation" to notification of application package management for the onboarding, or operational state change of application package.\'',
    required: ['callbackUri', 'subsctiptionType'],
  })
  .openapi('AppPkgSubscription')

const AppPkgSubscriptionInfoLinksSchema = z
  .object({ self: LinkTypeSchema })
  .openapi({ description: 'Links to resources related to this resource.', required: ['self'] })
  .openapi('AppPkgSubscriptionInfoLinks')

const AppPkgSubscriptionInfoIdSchema = z
  .string()
  .openapi({ description: "''" })
  .openapi('AppPkgSubscriptionInfoId')

const AppPkgSubscriptionInfoSchema = z
  .object({
    _links: AppPkgSubscriptionInfoLinksSchema,
    callbackUri: CallbackUriSchema,
    id: AppPkgSubscriptionInfoIdSchema,
    subscriptionType: AppPkgSubscriptionTypeSchema,
  })
  .openapi({
    description:
      "'The data type represents a subscription to notification of application package management for the onboarding, or operational state change of application package'",
    required: ['id', 'subscriptionType', 'callbackUri', '_links'],
  })
  .openapi('AppPkgSubscriptionInfo')

const HrefSchema = z
  .url()
  .openapi({ description: 'The URI referring to the subscription.' })
  .openapi('Href')

const SubscriptionsAppPkgSubscriptionSchema = z
  .object({ href: HrefSchema, subsctiptionType: SubsctiptionTypeAppPkgSchema })
  .openapi({
    description:
      '\'The data type represents the input parameters of "subscription operation" to notification of application package management for the onboarding, or operational state change of application package.\'',
    required: ['href', 'subsctiptionType'],
  })
  .openapi('SubscriptionsAppPkgSubscription')

const AppPkgSubscriptionLinkListLinksSchema = z
  .object({
    self: LinkTypeSchema,
    subscriptions: z.array(SubscriptionsAppPkgSubscriptionSchema).exactOptional(),
  })
  .openapi({ description: 'Links to resources related to this resource.', required: ['self'] })
  .openapi('AppPkgSubscriptionLinkListLinks')

const AppPkgSubscriptionLinkListSchema = z
  .object({ _links: AppPkgSubscriptionLinkListLinksSchema })
  .openapi({
    description:
      "'The data type represents a subscription link list of notification on application package management'",
    required: ['_links'],
  })
  .openapi('AppPkgSubscriptionLinkList')

const URISchema = z.string().openapi('URI')

const CreateAppPkgSchema = z
  .object({
    appPkgName: z
      .string()
      .openapi({
        description: 'Name of the application package to be onboarded.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
    appPkgPath: URISchema,
    appPkgVersion: z
      .string()
      .openapi({
        description:
          'Version of the application package to be onboarded.\nThe appPkgName with appPkgVersion can be used to uniquely identify the application package.',
        'x-etsi-mec-cardinality': '1',
        'x-etsi-mec-origin-type': 'String',
      }),
    appProvider: z
      .string()
      .exactOptional()
      .openapi({
        description: "The provider's name of the application package to be onboarded.",
        'x-etsi-mec-cardinality': '0..1',
        'x-etsi-mec-origin-type': 'String',
      }),
    checksum: ChecksumSchema,
    userDefinedData: KeyValuePairsSchema.exactOptional(),
  })
  .openapi({
    required: ['appPkgName', 'appPkgVersion', 'checksum', 'appPkgPath'],
    'x-etsi-notes':
      'NOTE:\tIt is for further study how to convey appPkgPath, and align with ETSI GS NFV-SOL 005 [i.7].',
    'x-etsi-ref': '6.2.3.2',
  })
  .openapi('CreateAppPkg')

const ProblemDetailsSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable explanation specific to this occurrence of the problem',
        'x-etsi-mec-cardinality': '0..1',
        'x-etsi-mec-origin-type': 'String',
      }),
    instance: z
      .url()
      .exactOptional()
      .openapi({
        description: 'A URI reference that identifies the specific occurrence of the problem',
        'x-etsi-mec-cardinality': '0..1',
        'x-etsi-mec-origin-type': 'URI',
      }),
    status: z
      .uint32()
      .exactOptional()
      .openapi({
        description: 'The HTTP status code for this occurrence of the problem',
        'x-etsi-mec-cardinality': '0..1',
        'x-etsi-mec-origin-type': 'Uint32',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A short, human-readable summary of the problem type',
        'x-etsi-mec-cardinality': '0..1',
        'x-etsi-mec-origin-type': 'String',
      }),
    type: z
      .url()
      .exactOptional()
      .openapi({
        description: 'A URI reference according to IETF RFC 3986 that identifies the problem type',
        'x-etsi-mec-cardinality': '0..1',
        'x-etsi-mec-origin-type': 'URI',
      }),
  })
  .openapi({ required: [] })
  .openapi('ProblemDetails')

const _204Response = { description: 'No Content' }

const _206Response = { description: 'Partial content' }

const _400Response = {
  description:
    'Bad Request : used to indicate that incorrect parameters were passed to the request.',
  content: { 'application/json': { schema: ProblemDetailsSchema } },
}

const _401Response = {
  description: 'Unauthorized :  used when the client did not submit credentials.',
  content: { 'application/json': { schema: ProblemDetailsSchema } },
}

const _403Response = {
  description: 'Forbidden :  operation is not allowed given the current status of the resource.',
  content: { 'application/json': { schema: ProblemDetailsSchema } },
}

const _404Response = {
  description:
    'Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI.',
  content: { 'application/json': { schema: ProblemDetailsSchema } },
}

const _406Response = {
  description:
    'Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client.',
  content: { 'application/json': { schema: ProblemDetailsSchema } },
}

const _409Response = {
  description:
    'Conflict : The operation cannot be executed currently, due to a conflict with the state of the resource',
  content: { 'application/json': { schema: ProblemDetailsSchema } },
}

const _412Response = {
  description:
    'Precondition failed :  used when a condition has failed during conditional requests, e.g. when using ETags to avoid write conflicts when using PUT',
  content: { 'application/json': { schema: ProblemDetailsSchema } },
}

const _414Response = {
  description:
    'URI Too Long : used to indicate that the server is refusing to process the request because the request URI is longer than the server is willing or able to process.',
  content: { 'application/json': { schema: ProblemDetailsSchema } },
}

const _415Response = {
  description:
    'Unsupported Media Type :  used to indicate that the server or the client does not support the content type of the entity body.',
  content: { 'application/json': { schema: ProblemDetailsSchema } },
}

const _416Response = { description: 'Range Not Satisfiable .' }

const _422Response = {
  description:
    'Unprocessable Entity : used to indicate that the server understands the content type of the request entity and that the syntax of the request entity is correct but that the server is unable to process the contained instructions. This error condition can occur if an JSON request body is syntactically correct but semantically incorrect, for example if the target area for the request is considered too large. This error condition can also occur if the capabilities required by the request are not supported.',
  content: {
    'application/json': {
      schema: ProblemDetailsSchema,
      example: {
        'application/problem+json': {
          problemDetails: {
            detail: 'The target area for the request is considered too large',
            instance: '/meAppClient.example.com/77777/msgs/abc',
            status: '422',
            title: 'Too many targets',
            type: 'https://meAppServer.example.com/rni/v2/probs/too-many targets',
          },
        },
      },
    },
  },
}

const _429Response = {
  description: 'Too Many Requests : used when a rate limiter has triggered.',
  content: { 'application/json': { schema: ProblemDetailsSchema } },
}

const AppPkgContent_200Response = {
  description:
    'The payload body shall contain a copy of the file representing the AppD or a ZIP file that contains the file or multiple files representing the AppD.',
}

export const getAppPackagesRoute = createRoute({
  method: 'get',
  path: '/app_packages',
  tags: ['app-pkgm'],
  summary: 'Queries information relating to on-boarded application packages in the MEO',
  description: 'queries information relating to on-boarded application packages in the MEO',
  operationId: 'app_packagesGET',
  request: {
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Attribute-based filtering parameters according to ETSI GS MEC 009',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      all_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include all complex attributes in the response.',
            in: 'query',
            name: 'all_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Complex attributes of AppPkgInfo to be included into the response',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Complex attributes of AppPkgInfo to be excluded from the response.',
            in: 'query',
            name: 'exclude_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_default: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates to exclude the following complex attributes of AppPkgInfo from the response.',
            in: 'query',
            name: 'exclude_default',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Contains a representation of the application package resource',
      content: { 'application/json': { schema: z.array(AppPkgInfoSchema) } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    406: _406Response,
    429: _429Response,
  },
})

export const postAppPackagesRoute = createRoute({
  method: 'post',
  path: '/app_packages',
  tags: ['app-pkgm'],
  summary: 'Create a resource for on-boarding an application package to a MEO',
  description: 'Create a resource for on-boarding an application package to a MEO',
  operationId: 'app_packagesPOST',
  request: {
    body: {
      description: 'Resource to be created',
      content: { 'application/json': { schema: CreateAppPkgSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response for resource creation',
      content: { 'application/json': { schema: z.array(AppPkgInfoSchema) } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    406: _406Response,
    429: _429Response,
  },
})

export const getAppPackagesAppPkgIdRoute = createRoute({
  method: 'get',
  path: '/app_packages/{appPkgId}',
  tags: ['app-pkgm'],
  summary: 'Queries the information related to individual application package resources',
  description: 'Queries the information related to individual application package resources',
  operationId: 'app_packageGET',
  request: {
    params: z.object({
      appPkgId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of an individual application package resource',
            in: 'path',
            name: 'appPkgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Contains a representation of the application package resource',
      content: { 'application/json': { schema: AppPkgInfoSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    406: _406Response,
    429: _429Response,
  },
})

export const deleteAppPackagesAppPkgIdRoute = createRoute({
  method: 'delete',
  path: '/app_packages/{appPkgId}',
  tags: ['app-pkgm'],
  summary: 'Deletes an individual application package resources',
  description: 'Deletes an individual application package resources',
  operationId: 'app_packageDELETE',
  request: {
    params: z.object({
      appPkgId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of an individual application package resource',
            in: 'path',
            name: 'appPkgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: _204Response,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    406: _406Response,
    429: _429Response,
  },
})

export const patchAppPackagesAppPkgIdRoute = createRoute({
  method: 'patch',
  path: '/app_packages/{appPkgId}',
  tags: ['app-pkgm'],
  summary: 'Updates the operational state of an individual application package resource',
  description: 'Updates the operational state of an individual application package resources',
  operationId: 'app_packagePATCH',
  request: {
    params: z.object({
      appPkgId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of an individual application package resource',
            in: 'path',
            name: 'appPkgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Operational state to be set',
      content: { 'application/json': { schema: AppPkgInfoModificationsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Shows that the operation has been completed successfully',
      content: { 'application/json': { schema: AppPkgInfoModificationsSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    406: _406Response,
    409: _409Response,
    429: _429Response,
  },
})

export const getAppPackagesAppPkgIdAppdRoute = createRoute({
  method: 'get',
  path: '/app_packages/{appPkgId}/appd',
  tags: ['app-pkgm'],
  summary: 'Reads the content of the AppD of on-boarded individual application package resources.',
  description:
    'Reads the content of the AppD of on-boarded individual application package resources.',
  operationId: 'appPkgIdGET',
  request: {
    params: z.object({
      appPkgId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of an on-boarded individual application package',
            in: 'path',
            name: 'appPkgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Attribute-based filtering parameters according to ETSI GS MEC 009',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      all_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include all complex attributes in the response.',
            in: 'query',
            name: 'all_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Complex attributes of AppPkgInfo to be included into the response',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Complex attributes of AppPkgInfo to be excluded from the response.',
            in: 'query',
            name: 'exclude_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_default: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates to exclude the following complex attributes of AppPkgInfo from the response.',
            in: 'query',
            name: 'exclude_default',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Content of the AppD is returned.',
      content: { 'application/zip': { schema: AppDSchema }, 'text/plain': { schema: AppDSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    406: _406Response,
    429: _429Response,
  },
})

export const getAppPackagesAppPkgIdPackageContentRoute = createRoute({
  method: 'get',
  path: '/app_packages/{appPkgId}/package_content',
  tags: ['app-pkgm'],
  summary: 'Fetch the onboarded application package content identified by appPkgId or appDId.',
  description: 'Fetch the onboarded application package content identified by appPkgId or appDId.',
  operationId: 'appPkgGET',
  request: {
    params: z.object({
      appPkgId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of an on-boarded individual application package',
            in: 'path',
            name: 'appPkgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: AppPkgContent_200Response,
    206: _206Response,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    406: _406Response,
    416: _416Response,
    429: _429Response,
  },
})

export const putAppPackagesAppPkgIdPackageContentRoute = createRoute({
  method: 'put',
  path: '/app_packages/{appPkgId}/package_content',
  tags: ['app-pkgm'],
  summary: 'Uploads the content of application package.',
  description: 'Uploads the content of application package.',
  operationId: 'appPkgPUT',
  request: {
    params: z.object({
      appPkgId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of an on-boarded individual application package',
            in: 'path',
            name: 'appPkgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/zip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
  responses: {
    202: {
      description:
        'The application package has been accepted for uploading, but the processing has not been completed.',
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    406: _406Response,
    409: _409Response,
    429: _429Response,
  },
})

export const getOnboardedAppPackagesAppDIdAppdRoute = createRoute({
  method: 'get',
  path: '/onboarded_app_packages/{appDId}/appd',
  tags: ['app-pkgm'],
  summary: 'Reads the content of the AppD of on-boarded individual application package resources.',
  description:
    'Reads the content of the AppD of on-boarded individual application package resources.',
  operationId: 'appDGET',
  request: {
    params: z.object({
      appDId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of an application descriptor',
            in: 'path',
            name: 'appDId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Attribute-based filtering parameters according to ETSI GS MEC 009',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      all_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include all complex attributes in the response.',
            in: 'query',
            name: 'all_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Complex attributes of AppPkgInfo to be included into the response',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Complex attributes of AppPkgInfo to be excluded from the response.',
            in: 'query',
            name: 'exclude_fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_default: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates to exclude the following complex attributes of AppPkgInfo from the response.',
            in: 'query',
            name: 'exclude_default',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Content of the AppD is returned.',
      content: { 'application/zip': { schema: AppDSchema }, 'text/plain': { schema: AppDSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    406: _406Response,
    429: _429Response,
  },
})

export const getOnboardedAppPackagesAppDIdPackageContentRoute = createRoute({
  method: 'get',
  path: '/onboarded_app_packages/{appDId}/package_content',
  tags: ['app-pkgm'],
  summary: 'Fetch the onboarded application package content identified by appPkgId or appDId.',
  description: 'Fetch the onboarded application package content identified by appPkgId or appDId.',
  operationId: 'appDIdGET',
  request: {
    params: z.object({
      appDId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of an application descriptor',
            in: 'path',
            name: 'appDId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: AppPkgContent_200Response,
    206: _206Response,
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    406: _406Response,
    416: _416Response,
    429: _429Response,
  },
})

export const putOnboardedAppPackagesAppDIdPackageContentRoute = createRoute({
  method: 'put',
  path: '/onboarded_app_packages/{appDId}/package_content',
  tags: ['app-pkgm'],
  summary: 'Uploads the content of application package.',
  description: 'Uploads the content of application package.',
  operationId: 'appDIdPUT',
  request: {
    params: z.object({
      appDId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of an application descriptor',
            in: 'path',
            name: 'appDId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/zip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
  responses: {
    202: {
      description:
        'The application package has been accepted for uploading, but the processing has not been completed.',
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    406: _406Response,
    409: _409Response,
    429: _429Response,
  },
})

export const getSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/subscriptions',
  tags: ['app-pkgm'],
  summary:
    'used to retrieve the information of subscriptions to individual application package resource in MEO',
  description:
    'used to retrieve the information of subscriptions to individual application package resource in MEO package',
  operationId: 'subscriptionsGET',
  responses: {
    200: {
      description: 'List of zero or more subscriptions',
      content: { 'application/json': { schema: AppPkgSubscriptionLinkListSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    406: _406Response,
    429: _429Response,
  },
})

export const postSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/subscriptions',
  tags: ['app-pkgm'],
  summary: 'Subscribe to notifications about on-boarding an application package',
  description: 'Subscribe to notifications about on-boarding an application package',
  operationId: 'subscriptionsPOST',
  request: {
    body: {
      description: 'The input parameters of subscribe operation to notifications',
      content: { 'application/json': { schema: AppPkgSubscriptionSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response for created subscription',
      content: { 'application/json': { schema: AppPkgSubscriptionInfoSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    406: _406Response,
    429: _429Response,
  },
  callbacks: {
    notification: {
      '{$request.body#/subscription.href}': {
        post: {
          summary: 'Callback POST used to send a notification',
          description: ' The notification is triggered when a new application package is onboarded',
          operationId: 'notificationPOST',
          requestBody: {
            description: 'Subscription notification',
            content: { 'application/json': { schema: AppPkgNotificationSchema } },
            required: true,
          },
          responses: { 204: _204Response },
        },
      },
    },
  },
})

export const getSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{subscriptionId}',
  tags: ['app-pkgm'],
  summary:
    'Used to represent an individual subscription to notifications about application package changes.',
  description:
    'Used to represent an individual subscription to notifications about application package changes.',
  operationId: 'individualSubscriptionGET',
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of an individual subscription to notifications about application package changes',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Representation of the resource.',
      content: { 'application/json': { schema: AppPkgSubscriptionInfoSchema } },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    406: _406Response,
    429: _429Response,
  },
})

export const deleteSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'delete',
  path: '/subscriptions/{subscriptionId}',
  tags: ['app-pkgm'],
  summary:
    'Deletes the individual subscription to notifications about application package changes in MEO.',
  description:
    'Deletes the individual subscription to notifications about application package changes in MEO.',
  operationId: 'individualSubscriptionDELETE',
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of an individual subscription to notifications about application package changes',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: _204Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
  },
})

export const postUserDefinedNotificationRoute = createRoute({
  method: 'post',
  path: '/user_defined_notification',
  tags: ['app-pkgm-notifications'],
  summary: 'Registers a notification endpoint to notify application package operations',
  description: 'Registers a notification endpoint to notify application package operations',
  operationId: 'app_pkg_notificationPOST',
  request: {
    body: {
      description: 'Notification endpoint to be created',
      content: { 'application/json': { schema: AppPkgNotificationSchema } },
      required: true,
    },
  },
  responses: {
    204: _204Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    429: _429Response,
  },
})
