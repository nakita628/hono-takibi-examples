import { createRoute, z } from '@hono/zod-openapi'

const EntityTypeSchema = z
  .enum([
    'VirtualMachine',
    'EC2Instance',
    'Host',
    'Vnic',
    'Vmknic',
    'VxlanLayer2Network',
    'VlanL2Network',
    'Cluster',
    'SecurityTag',
    'ResourcePool',
    'NSXIPSet',
    'EC2IPSet',
    'NSXSecurityGroup',
    'EC2SecurityGroup',
    'Flow',
    'ProblemEvent',
    'Application',
    'Tier',
    'NSXFirewallRule',
    'EC2SGFirewallRule',
    'NSXRedirectRule',
    'VCenterManager',
    'NSXVManager',
    'NSXService',
    'EC2Service',
    'VPC',
    'NSXDistributedFirewall',
    'EC2Firewall',
    'NSXServiceGroup',
    'DistributedVirtualSwitch',
    'DistributedVirtualPortgroup',
    'VCDatacenter',
    'Datastore',
    'Folder',
  ])
  .openapi('EntityType')

const BaseEntitySchema = z
  .object({
    entity_id: z.string().exactOptional(),
    entity_type: EntityTypeSchema.exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ discriminator: { propertyName: 'entity_type' }, required: [] })
  .openapi('BaseEntity')

const ReferenceSchema = z
  .object({ entity_id: z.string().exactOptional(), entity_type: EntityTypeSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Reference')

const RuleSetSchema = z
  .object({
    firewall: ReferenceSchema.exactOptional(),
    rule_set_type: z.enum(['NSX_STANDARD', 'NSX_REDIRECT', 'AWS_STANDARD']).exactOptional(),
    rules: z.array(ReferenceSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RuleSet')

const IpV4AddressSchema = z
  .object({
    ip_address: z.string().exactOptional(),
    netmask: z.string().exactOptional(),
    network_address: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IpV4Address')

const BaseVirtualMachineSchema = BaseEntitySchema.and(
  z
    .object({
      default_gateway: z.string().exactOptional(),
      destination_firewall_rules: z.array(RuleSetSchema).exactOptional(),
      ip_addresses: z.array(IpV4AddressSchema).exactOptional(),
      ip_sets: z.array(ReferenceSchema).exactOptional(),
      security_groups: z.array(ReferenceSchema).exactOptional(),
      source_firewall_rules: z.array(RuleSetSchema).exactOptional(),
      vnics: z.array(ReferenceSchema).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('BaseVirtualMachine')

const VlanSchema = z
  .object({
    begin: z.int().exactOptional().openapi({ 'x-searchable': true }),
    end: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Vlan')

type VirtualMachineType = z.infer<typeof BaseVirtualMachineSchema> & {
  applied_to_destination_rules?: z.infer<typeof RuleSetSchema>[]
  applied_to_source_rules?: z.infer<typeof RuleSetSchema>[]
  cluster?: z.infer<typeof ReferenceSchema>
  datacenter?: z.infer<typeof ReferenceSchema>
  datastores?: z.infer<typeof ReferenceSchema>[]
  destination_inversion_rules?: z.infer<typeof RuleSetSchema>[]
  folders?: z.infer<typeof ReferenceSchema>[]
  host?: z.infer<typeof ReferenceSchema>
  layer2_networks?: z.infer<typeof ReferenceSchema>[]
  nsx_manager?: z.infer<typeof ReferenceSchema>
  resource_pool?: z.infer<typeof ReferenceSchema>
  security_tags?: z.infer<typeof ReferenceSchema>[]
  source_inversion_rules?: z.infer<typeof RuleSetSchema>[]
  vcenter_manager?: z.infer<typeof ReferenceSchema>
  vendor_id?: string
  vlans?: z.infer<typeof VlanSchema>[]
}

const BaseVnicSchema = BaseEntitySchema.and(
  z
    .object({
      ip_addresses: z.array(IpV4AddressSchema).exactOptional(),
      layer2_network: ReferenceSchema.exactOptional(),
      vlan: VlanSchema.exactOptional(),
      vm: ReferenceSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('BaseVnic')

type VnicType = z.infer<typeof BaseVnicSchema>

const AllEntityTypeSchema = z
  .enum([
    'Group',
    'BaseSecurityGroup',
    'BaseEvent',
    'BaseVirtualMachine',
    'BaseFirewallRule',
    'BaseIPSet',
    'BaseL2Network',
    'BaseFirewall',
    'BaseService',
    'BaseServiceGroup',
    'BaseVnic',
    'VirtualMachine',
    'EC2Instance',
    'Host',
    'Vnic',
    'Vmknic',
    'VxlanLayer2Network',
    'VlanL2Network',
    'Cluster',
    'SecurityTag',
    'ResourcePool',
    'NSXIPSet',
    'EC2IPSet',
    'NSXSecurityGroup',
    'EC2SecurityGroup',
    'Flow',
    'ProblemEvent',
    'Application',
    'Tier',
    'NSXFirewallRule',
    'EC2SGFirewallRule',
    'NSXRedirectRule',
    'VCenterManager',
    'NSXVManager',
    'BaseManager',
    'BaseNSXManager',
    'NSXService',
    'EC2Service',
    'VPC',
    'NSXDistributedFirewall',
    'EC2Firewall',
    'NSXServiceGroup',
    'DistributedVirtualSwitch',
    'DistributedVirtualPortgroup',
    'VCDatacenter',
    'Datastore',
    'Folder',
  ])
  .openapi('AllEntityType')

const ErrorDetailSchema = z
  .object({
    code: z.int32().exactOptional(),
    message: z.string().exactOptional(),
    target: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErrorDetail')

const ApiErrorSchema = z
  .object({
    code: z.int32().exactOptional(),
    details: z.array(ErrorDetailSchema).exactOptional(),
    message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiError')

const ApplicationSchema = BaseEntitySchema.and(
  z
    .object({
      create_time: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .exactOptional()
        .openapi({ type: 'integer', format: 'int64' }),
      created_by: z.string().exactOptional(),
      last_modified_by: z.string().exactOptional(),
      last_modified_time: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .exactOptional()
        .openapi({ type: 'integer', format: 'int64' }),
    })
    .openapi({ required: [] }),
).openapi('Application')

const ApplicationRequestSchema = z
  .object({ name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ApplicationRequest')

const DataSourceTypeSchema = z
  .enum([
    'CiscoSwitchDataSource',
    'DellSwitchDataSource',
    'AristaSwitchDataSource',
    'BrocadeSwitchDataSource',
    'JuniperSwitchDataSource',
    'VCenterDataSource',
    'NSXVManagerDataSource',
    'UCSManagerDataSource',
    'HPVCManagerDataSource',
    'HPOneViewDataSource',
    'PanFirewallDataSource',
    'CheckpointFirewallDataSource',
  ])
  .openapi('DataSourceType')

const BaseDataSourceSchema = z
  .object({
    enabled: z.boolean().default(true).exactOptional(),
    entity_id: z.string().exactOptional(),
    entity_type: DataSourceTypeSchema.exactOptional(),
    fqdn: z.string().exactOptional().openapi({ example: 'your.domain.com' }),
    ip: z.string().exactOptional().openapi({ example: '192.168.10.1' }),
    nickname: z.string().exactOptional().openapi({ example: 'vc1' }),
    notes: z.string().exactOptional(),
    proxy_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'proxy vm which should register this vcenter',
        example: '1000:104:12313412',
      }),
  })
  .openapi({ discriminator: { propertyName: 'entity_type' }, required: [] })
  .openapi('BaseDataSource')

const PasswordCredentialsSchema = z
  .object({ password: z.string(), username: z.string() })
  .openapi({ required: ['username', 'password'] })
  .openapi('PasswordCredentials')

const SwitchDataSourceSchema = BaseDataSourceSchema.and(
  z.object({ credentials: PasswordCredentialsSchema.exactOptional() }).openapi({ required: [] }),
).openapi('SwitchDataSource')

const AristaSwitchDataSourceSchema = SwitchDataSourceSchema.openapi('AristaSwitchDataSource')

const BaseDataSourceRequestSchema = z
  .object({
    enabled: z.boolean().default(true).exactOptional(),
    fqdn: z.string().exactOptional().openapi({ example: 'your.domain.com' }),
    ip: z.string().exactOptional().openapi({ example: '192.168.10.1' }),
    nickname: z.string().openapi({ example: 'vc1' }),
    notes: z.string().exactOptional(),
    proxy_id: z
      .string()
      .openapi({
        description: 'proxy vm which should register this vcenter',
        example: '1000:104:12313412',
      }),
  })
  .openapi({ required: ['proxy_id', 'nickname'] })
  .openapi('BaseDataSourceRequest')

const SwitchDataSourceRequestSchema = BaseDataSourceRequestSchema.and(
  z.object({ credentials: PasswordCredentialsSchema.exactOptional() }).openapi({ required: [] }),
).openapi('SwitchDataSourceRequest')

const AristaSwitchDataSourceRequestSchema = SwitchDataSourceRequestSchema.openapi(
  'AristaSwitchDataSourceRequest',
)

const BaseEventSchema = BaseEntitySchema.and(
  z
    .object({
      admin_state: z.enum(['ENABLED', 'DISABLED']).exactOptional(),
      anchor_entities: z.array(ReferenceSchema).exactOptional(),
      archived: z.boolean().exactOptional(),
      event_tags: z.array(z.string()).exactOptional(),
      event_time_epoch_ms: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .exactOptional()
        .openapi({ type: 'integer', format: 'int64' }),
      message: z.string().exactOptional(),
      related_entities: z.array(ReferenceSchema).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('BaseEvent')

const BaseFirewallSchema = BaseEntitySchema.and(
  z
    .object({
      exclusions: z.array(ReferenceSchema).exactOptional(),
      firewall_rules: z.array(RuleSetSchema).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('BaseFirewall')

const FirewallActionSchema = z
  .enum(['ALLOW', 'ACCEPT', 'DENY', 'DROP', 'REJECT', 'REDIRECT', 'DO_NOT_REDIRECT'])
  .openapi('FirewallAction')

const PortRangeSchema = z
  .object({
    display: z.string().exactOptional(),
    end: z.int32().exactOptional(),
    iana_name: z.string().exactOptional(),
    iana_port_display: z.string().exactOptional(),
    start: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PortRange')

const BaseFirewallRuleSchema = BaseEntitySchema.and(
  z
    .object({
      action: FirewallActionSchema.exactOptional(),
      destination_any: z.boolean().exactOptional(),
      destination_inversion: z.boolean().exactOptional(),
      destinations: z.array(ReferenceSchema).exactOptional(),
      disabled: z.boolean().exactOptional(),
      port_ranges: z.array(PortRangeSchema).exactOptional(),
      rule_id: z.string().exactOptional(),
      section_id: z.string().exactOptional(),
      section_name: z.string().exactOptional(),
      sequence_number: z.int().exactOptional(),
      service_any: z.boolean().exactOptional(),
      services: z.array(ReferenceSchema).exactOptional(),
      source_any: z.boolean().exactOptional(),
      source_inversion: z.boolean().exactOptional(),
      sources: z.array(ReferenceSchema).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('BaseFirewallRule')

const IpNumericRangeSchema = z
  .object({
    end: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    start: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('IpNumericRange')

const IpAddressRangeSchema = z
  .object({ end_ip: z.string().exactOptional(), start_ip: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('IpAddressRange')

const BaseIPSetSchema = BaseEntitySchema.and(
  z
    .object({
      direct_destination_rules: z.array(RuleSetSchema).exactOptional(),
      direct_source_rules: z.array(RuleSetSchema).exactOptional(),
      indirect_destination_rules: z.array(RuleSetSchema).exactOptional(),
      indirect_source_rules: z.array(RuleSetSchema).exactOptional(),
      ip_addresses: z.array(IpV4AddressSchema).exactOptional(),
      ip_numeric_ranges: z.array(IpNumericRangeSchema).exactOptional(),
      ip_ranges: z.array(IpAddressRangeSchema).exactOptional(),
      parent_security_groups: z.array(ReferenceSchema).exactOptional(),
      translated_vm_count: z.int32().exactOptional(),
      vendor: z.string().exactOptional(),
      vendor_id: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('BaseIPSet')

const BaseL2NetworkSchema = BaseEntitySchema.and(
  z
    .object({
      gateways: z.array(z.string()).exactOptional(),
      network_addresses: z.array(z.string()).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('BaseL2Network')

const BaseManagerSchema = BaseEntitySchema.openapi('BaseManager')

const BaseNSXManagerSchema = BaseManagerSchema.openapi('BaseNSXManager')

const GroupSchema = BaseEntitySchema.and(
  z.object({ members: z.array(ReferenceSchema).exactOptional() }).openapi({ required: [] }),
).openapi('Group')

const BaseSecurityGroupSchema = GroupSchema.and(
  z
    .object({
      direct_destination_rules: z.array(RuleSetSchema).exactOptional(),
      direct_members: z.array(ReferenceSchema).exactOptional(),
      direct_source_rules: z.array(RuleSetSchema).exactOptional(),
      excluded_members: z.array(ReferenceSchema).exactOptional(),
      indirect_destination_rules: z.array(RuleSetSchema).exactOptional(),
      indirect_source_rules: z.array(RuleSetSchema).exactOptional(),
      members: z.array(ReferenceSchema).exactOptional(),
      parents: z.array(ReferenceSchema).exactOptional(),
      translated_vm_count: z.int().exactOptional(),
      vendor_id: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('BaseSecurityGroup')

const BaseServiceSchema = BaseEntitySchema.and(
  z
    .object({
      port_ranges: z.array(PortRangeSchema).exactOptional(),
      protocol: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('BaseService')

const BaseServiceGroupSchema = GroupSchema.openapi('BaseServiceGroup')

const BrocadeSwitchDataSourceSchema = SwitchDataSourceSchema.openapi('BrocadeSwitchDataSource')

const BrocadeSwitchDataSourceRequestSchema = SwitchDataSourceRequestSchema.openapi(
  'BrocadeSwitchDataSourceRequest',
)

const CheckpointFirewallDataSourceSchema = SwitchDataSourceSchema.openapi(
  'CheckpointFirewallDataSource',
)

const CheckpointFirewallDataSourceRequestSchema = SwitchDataSourceRequestSchema.openapi(
  'CheckpointFirewallDataSourceRequest',
)

const CiscoSwitchTypeSchema = z
  .enum(['CATALYST_3000', 'CATALYST_4500', 'CATALYST_6500', 'NEXUS_5K', 'NEXUS_7K', 'NEXUS_9K'])
  .openapi('CiscoSwitchType')

const CiscoSwitchDataSourceSchema = SwitchDataSourceSchema.and(
  z.object({ switch_type: CiscoSwitchTypeSchema.exactOptional() }).openapi({ required: [] }),
).openapi('CiscoSwitchDataSource')

const CiscoSwitchDataSourceRequestSchema = SwitchDataSourceRequestSchema.and(
  z.object({ switch_type: CiscoSwitchTypeSchema.exactOptional() }).openapi({ required: [] }),
).openapi('CiscoSwitchDataSourceRequest')

const ClusterSchema = BaseEntitySchema.and(
  z
    .object({
      nsx_manager: ReferenceSchema.exactOptional(),
      num_cpu_cores: z.int32().exactOptional(),
      num_datastores: z.int32().exactOptional(),
      num_hosts: z.int32().exactOptional(),
      total_cpus: z.int32().exactOptional(),
      total_memory: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .exactOptional()
        .openapi({ type: 'integer', format: 'int64' }),
      vcenter_manager: ReferenceSchema.exactOptional(),
      vendor_id: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Cluster')

const DataSourceEntityIdSchema = z
  .object({
    entity_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Entity Identifier', example: '1000:104:12213212' }),
    entity_type: DataSourceTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DataSourceEntityId')

const DataSourceListResponseSchema = z
  .object({
    results: z.array(DataSourceEntityIdSchema).exactOptional(),
    total_count: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('DataSourceListResponse')

const DatasourceHealthSchema = z
  .object({
    health_error_code: z.string().exactOptional(),
    health_message: z.string().exactOptional(),
    health_status: z.enum(['HEALTHY', 'HEALTHY_WITH_WARNINGS', 'UNHEALTHY']).exactOptional(),
  })
  .openapi({ description: 'Datasource Health state', required: [] })
  .openapi('DatasourceHealth')

const DatastoreSchema = BaseEntitySchema.and(
  z
    .object({
      vcenter_manager: ReferenceSchema.exactOptional(),
      vendor_id: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Datastore')

const DellSwitchTypeSchema = z
  .enum(['FORCE_10_MXL_10', 'POWERCONNECT_8024', 'S4048', 'Z9100', 'S6000'])
  .openapi('DellSwitchType')

const DellSwitchDataSourceSchema = SwitchDataSourceSchema.and(
  z.object({ switch_type: DellSwitchTypeSchema.exactOptional() }).openapi({ required: [] }),
).openapi('DellSwitchDataSource')

const DellSwitchDataSourceRequestSchema = SwitchDataSourceRequestSchema.and(
  z.object({ switch_type: DellSwitchTypeSchema.exactOptional() }).openapi({ required: [] }),
).openapi('DellSwitchDataSourceRequest')

const DistributedVirtualPortgroupSchema = BaseEntitySchema.and(
  z
    .object({
      distributed_virtual_switch: ReferenceSchema.exactOptional(),
      vcenter_manager: ReferenceSchema.exactOptional(),
      vendor_id: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('DistributedVirtualPortgroup')

const DistributedVirtualSwitchSchema = BaseEntitySchema.and(
  z
    .object({
      hosts: z.array(ReferenceSchema).exactOptional(),
      vcenter_manager: ReferenceSchema.exactOptional(),
      vendor_id: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('DistributedVirtualSwitch')

const DomainSchema = z
  .object({
    domain_type: z.enum(['LDAP', 'LOCAL']).exactOptional().openapi({ example: 'LDAP' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'domain value, not required for LOCAL domain',
        example: 'example.com',
      }),
  })
  .openapi({ required: [] })
  .openapi('Domain')

const EC2FirewallSchema = BaseFirewallSchema.openapi('EC2Firewall')

const EC2FirewallDirectionSchema = z.enum(['INBOUND', 'OUTBOUND']).openapi('EC2FirewallDirection')

const EC2IPSetSchema = BaseIPSetSchema.openapi('EC2IPSet')

const EC2InstanceSchema = BaseVirtualMachineSchema.and(
  z
    .object({ region: z.string().exactOptional(), vpc: ReferenceSchema.exactOptional() })
    .openapi({ required: [] }),
).openapi('EC2Instance')

const EC2NetworkInterfaceSchema = BaseVnicSchema.openapi('EC2NetworkInterface')

const EC2SGFirewallRuleSchema = BaseFirewallRuleSchema.and(
  z
    .object({
      direction: EC2FirewallDirectionSchema.exactOptional(),
      owner_security_group: ReferenceSchema.exactOptional(),
      vpc: ReferenceSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('EC2SGFirewallRule')

const EC2SecurityGroupSchema = BaseSecurityGroupSchema.and(
  z
    .object({ region: z.string().exactOptional(), vpc: ReferenceSchema.exactOptional() })
    .openapi({ required: [] }),
).openapi('EC2SecurityGroup')

const EC2ServiceSchema = BaseServiceSchema.openapi('EC2Service')

const EntityIdSchema = z
  .object({
    entity_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Entity Identifier', example: '1000:104:12213212' }),
    entity_type: EntityTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EntityId')

const EntityIdWithTimeSchema = z
  .object({
    entity_id: z.string().exactOptional().openapi({ description: 'Entity Identifier' }),
    entity_type: EntityTypeSchema.exactOptional(),
    time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('EntityIdWithTime')

const EntityNameSchema = EntityIdWithTimeSchema.and(
  z.object({ name: z.string().exactOptional() }).openapi({ required: [] }),
).openapi('EntityName')

const FirewallDirectionSchema = z.enum(['IN', 'OUT', 'INOUT']).openapi('FirewallDirection')

const FlowTagSchema = z
  .enum([
    'TAG_TRAFFIC_TYPE_UNKNOWN',
    'TAG_INTERNET_TRAFFIC',
    'TAG_EAST_WEST_TRAFFIC',
    'TAG_VM_VM_TRAFFIC',
    'TAG_VM_PHY_TRAFFIC',
    'TAG_PHY_PHY_TRAFFIC',
    'TAG_SRC_IP_VMKNIC',
    'TAG_DST_IP_VMKNIC',
    'TAG_SRC_IP_VM',
    'TAG_DST_IP_VM',
    'TAG_SRC_IP_INTERNET',
    'TAG_DST_IP_INTERNET',
    'TAG_SRC_IP_PHYSICAL',
    'TAG_DST_IP_PHYSICAL',
    'TAG_SAME_HOST',
    'TAG_DIFF_HOST',
    'TAG_SHARED_SERVICE',
    'TAG_NOT_SHARED_SERVICE',
    'TAG_NETWORK_SWITCHED',
    'TAG_NETWORK_ROUTED',
    'TAG_NETWORK_UNKNOWN',
    'TAG_SRC_IP_VTEP',
    'TAG_DST_IP_VTEP',
    'TAG_UNICAST',
    'TAG_BROADCAST',
    'TAG_MULTICAST',
    'TAG_SRC_IP_LINK_LOCAL',
    'TAG_DST_IP_LINK_LOCAL',
    'TAG_SRC_IP_CLASS_E',
    'TAG_DST_IP_CLASS_E',
    'TAG_SRC_IP_CLASS_A_RESERVED',
    'TAG_DST_IP_CLASS_A_RESERVED',
    'TAG_INVALID_IP_PACKETS',
    'TAG_NOT_ANALYZED',
    'TAG_GENERIC_INTERNET_SRC_IP',
    'TAG_SNAT_DNAT_FLOW',
    'TAG_MULTINICS',
    'TAG_SRC_VC',
    'TAG_DST_VC',
    'TAG_SRC_AWS',
    'TAG_DST_AWS',
    'TAG_WITHIN_DC',
    'TAG_DIFF_DC',
    'TAG_WITHIN_VPC',
    'TAG_DIFF_VPC',
  ])
  .openapi('FlowTag')

const ProtocolSchema = z.enum(['TCP', 'UDP', 'OTHER']).openapi('Protocol')

const FlowTrafficTypeSchema = z
  .enum(['INTERNET_TRAFFIC', 'EAST_WEST_TRAFFIC'])
  .openapi('FlowTrafficType')

const FlowSchema = BaseEntitySchema.and(
  z
    .object({
      destination_cluster: ReferenceSchema.exactOptional(),
      destination_datacenter: ReferenceSchema.exactOptional(),
      destination_folders: z.array(ReferenceSchema).exactOptional(),
      destination_host: ReferenceSchema.exactOptional(),
      destination_ip: IpV4AddressSchema.exactOptional(),
      destination_ip_sets: z.array(ReferenceSchema).exactOptional(),
      destination_l2_network: ReferenceSchema.exactOptional(),
      destination_resource_pool: ReferenceSchema.exactOptional(),
      destination_security_groups: z.array(ReferenceSchema).exactOptional(),
      destination_security_tags: z.array(ReferenceSchema).exactOptional(),
      destination_vm: ReferenceSchema.exactOptional(),
      destination_vm_tags: z.array(z.string()).exactOptional(),
      destination_vnic: ReferenceSchema.exactOptional(),
      destination_vpc: ReferenceSchema.exactOptional(),
      firewall_action: FirewallActionSchema.exactOptional(),
      flow_tag: z.array(FlowTagSchema).exactOptional(),
      port: PortRangeSchema.exactOptional(),
      protocol: ProtocolSchema.exactOptional(),
      source_cluster: ReferenceSchema.exactOptional(),
      source_datacenter: ReferenceSchema.exactOptional(),
      source_folders: z.array(ReferenceSchema).exactOptional(),
      source_host: ReferenceSchema.exactOptional(),
      source_ip: IpV4AddressSchema.exactOptional(),
      source_ip_sets: z.array(ReferenceSchema).exactOptional(),
      source_l2_network: ReferenceSchema.exactOptional(),
      source_resource_pool: ReferenceSchema.exactOptional(),
      source_security_groups: z.array(ReferenceSchema).exactOptional(),
      source_security_tags: z.array(ReferenceSchema).exactOptional(),
      source_vm: ReferenceSchema.exactOptional(),
      source_vm_tags: z.array(z.string()).exactOptional(),
      source_vnic: ReferenceSchema.exactOptional(),
      source_vpc: ReferenceSchema.exactOptional(),
      traffic_type: FlowTrafficTypeSchema.exactOptional(),
      within_host: z.boolean().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Flow')

const FolderSchema = BaseEntitySchema.and(
  z
    .object({
      vcenter_manager: ReferenceSchema.exactOptional(),
      vendor_id: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Folder')

const IpAddressMembershipCriteriaSchema = z
  .object({ ip_addresses: z.array(z.string()).exactOptional() })
  .openapi({ description: 'Ip Address membership definition', required: [] })
  .openapi('IpAddressMembershipCriteria')

const SearchMembershipCriteriaSchema = z
  .object({
    entity_type: AllEntityTypeSchema.exactOptional(),
    filter: z.string().exactOptional().openapi({ description: 'As defined in search end point' }),
  })
  .openapi({ required: [] })
  .openapi('SearchMembershipCriteria')

const GroupMembershipCriteriaSchema = z
  .object({
    ip_address_membership_criteria: IpAddressMembershipCriteriaSchema.exactOptional(),
    membership_type: z
      .enum(['SearchMembershipCriteria', 'IPAddressMembershipCriteria'])
      .exactOptional(),
    search_membership_criteria: SearchMembershipCriteriaSchema.exactOptional(),
  })
  .openapi({ description: 'EntityType currently restricted to VirtualMachine', required: [] })
  .openapi('GroupMembershipCriteria')

const HPOneViewManagerDataSourceSchema = SwitchDataSourceSchema.openapi(
  'HPOneViewManagerDataSource',
)

const HPOneViewManagerDataSourceRequestSchema = SwitchDataSourceSchema.openapi(
  'HPOneViewManagerDataSourceRequest',
)

const HPVCManagerDataSourceSchema = SwitchDataSourceSchema.openapi('HPVCManagerDataSource')

const HPVCManagerDataSourceRequestSchema = SwitchDataSourceSchema.openapi(
  'HPVCManagerDataSourceRequest',
)

const HostSchema = BaseEntitySchema.and(
  z
    .object({
      cluster: ReferenceSchema.exactOptional(),
      connection_state: z.string().exactOptional(),
      datastores: z.array(ReferenceSchema).exactOptional(),
      maintenance_mode: z.string().exactOptional(),
      nsx_manager: ReferenceSchema.exactOptional(),
      service_tag: z.string().exactOptional(),
      vcenter_manager: ReferenceSchema.exactOptional(),
      vendor_id: z.string().exactOptional(),
      vm_count: z.int32().exactOptional(),
      vmknics: z.array(ReferenceSchema).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Host')

const JuniperSwitchDataSourceSchema = SwitchDataSourceSchema.openapi('JuniperSwitchDataSource')

const JuniperSwitchDataSourceRequestSchema = SwitchDataSourceRequestSchema.openapi(
  'JuniperSwitchDataSourceRequest',
)

const MetaEntityTypeSchema = z
  .enum([
    'Group',
    'BaseSecurityGroup',
    'BaseEvent',
    'BaseVirtualMachine',
    'BaseFirewallRule',
    'BaseIPSet',
    'BaseL2Network',
    'BaseManager',
    'BaseNSXManager',
    'BaseFirewall',
    'BaseService',
    'BaseServiceGroup',
    'BaseVnic',
  ])
  .openapi('MetaEntityType')

const MicroSecGroupSchema = z
  .object({ entity: ReferenceSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('MicroSecGroup')

const NSXControllerDataCollectionSchema = z
  .object({
    controller_password: z.string().exactOptional(),
    enabled: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NSXControllerDataCollection')

const NSXDistributedFirewallSchema = BaseFirewallSchema.and(
  z.object({ vendor_id: z.string().exactOptional() }).openapi({ required: [] }),
).openapi('NSXDistributedFirewall')

const ScopeEnumSchema = z.enum(['UNIVERSAL', 'GLOBAL']).openapi('ScopeEnum')

const NSXFirewallRuleSchema = BaseFirewallRuleSchema.and(
  z
    .object({
      direction: FirewallDirectionSchema.exactOptional(),
      logging_enabled: z.boolean().exactOptional(),
      nsx_managers: z.array(ReferenceSchema).exactOptional(),
      scope: ScopeEnumSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('NSXFirewallRule')

const NSXIPSetSchema = BaseIPSetSchema.and(
  z
    .object({
      nsx_managers: z.array(ReferenceSchema).exactOptional(),
      scope: ScopeEnumSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('NSXIPSet')

const NSXRedirectRuleSchema = BaseFirewallRuleSchema.and(
  z
    .object({
      direction: FirewallDirectionSchema.exactOptional(),
      logging_enabled: z.boolean().exactOptional(),
      service_profile: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('NSXRedirectRule')

const NSXSecurityGroupSchema = BaseSecurityGroupSchema.and(
  z
    .object({
      ip_sets: z.array(ReferenceSchema).exactOptional(),
      nsx_managers: z.array(ReferenceSchema).exactOptional(),
      scope: ScopeEnumSchema.exactOptional(),
      security_tags: z.array(ReferenceSchema).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('NSXSecurityGroup')

const NSXServiceSchema = BaseServiceSchema.and(
  z
    .object({
      nsx_managers: z.array(ReferenceSchema).exactOptional(),
      scope: ScopeEnumSchema.exactOptional(),
      vendor_id: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('NSXService')

const NSXServiceGroupSchema = BaseServiceGroupSchema.and(
  z
    .object({
      nsx_managers: z.array(ReferenceSchema).exactOptional(),
      scope: ScopeEnumSchema.exactOptional(),
      vendor_id: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('NSXServiceGroup')

const NSXVManagerSchema = BaseNSXManagerSchema.and(
  z
    .object({
      fqdn: z.string().exactOptional(),
      ip_address: IpV4AddressSchema.exactOptional(),
      primary_nsx_manager: ReferenceSchema.exactOptional(),
      role: z.string().exactOptional(),
      version: z.string().exactOptional(),
      vm: ReferenceSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('NSXVManager')

const NSXVManagerDataSourceSchema = BaseDataSourceSchema.and(
  z
    .object({
      central_cli_enabled: z.boolean().default(false).exactOptional(),
      credentials: PasswordCredentialsSchema.exactOptional(),
      ipfix_enabled: z.boolean().default(false).exactOptional(),
      vcenter_id: z
        .string()
        .exactOptional()
        .openapi({ description: 'Associated vcenter data source entity Id' }),
    })
    .openapi({ required: [] }),
).openapi('NSXVManagerDataSource')

const NSXVManagerDataSourceRequestSchema = BaseDataSourceRequestSchema.and(
  z
    .object({
      central_cli_enabled: z.boolean().default(false).exactOptional(),
      credentials: PasswordCredentialsSchema,
      ipfix_enabled: z.boolean().default(false).exactOptional(),
      vcenter_id: z.string().openapi({ description: 'Associated vcenter data source entity Id' }),
    })
    .openapi({ required: ['vcenter_id', 'credentials'] }),
).openapi('NSXVManagerDataSourceRequest')

const NameRequestParamSchema = z
  .object({
    entity_id: z.string().exactOptional(),
    time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('NameRequestParam')

const NamesRequestSchema = z
  .object({ entities: z.array(NameRequestParamSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('NamesRequest')

const NamesResponseSchema = z
  .object({ entities: z.array(EntityNameSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('NamesResponse')

const NodeTypeSchema = z.literal('Node').openapi('NodeType')

const NodeSchema = z
  .object({
    entity_type: NodeTypeSchema.exactOptional(),
    id: z.string().exactOptional(),
    ip_address: z.string().exactOptional(),
    name: z.string().exactOptional(),
    node_id: z.string().exactOptional(),
    node_type: z.enum(['PROXY_VM', 'PLATFORM_VM']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Node')

const NodeIdSchema = z
  .object({
    entity_type: NodeTypeSchema.exactOptional(),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Entity Identifier', example: '1000:104:12213212' }),
  })
  .openapi({ required: [] })
  .openapi('NodeId')

const NodeListResultSchema = z
  .object({
    results: z.array(NodeIdSchema).exactOptional(),
    total_count: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('NodeListResult')

const PagedListResponseSchema = z
  .object({
    cursor: z.string().exactOptional(),
    end_time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    results: z.array(EntityIdSchema).exactOptional(),
    start_time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    total_count: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PagedListResponse')

const PagedListResponseWithTimeSchema = z
  .object({
    cursor: z.string().exactOptional().openapi({ example: 'ML12eu02==' }),
    end_time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1504739809 }),
    results: z.array(EntityIdWithTimeSchema).exactOptional(),
    start_time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1504739809 }),
    total_count: z.int().exactOptional().openapi({ example: 100 }),
  })
  .openapi({ required: [] })
  .openapi('PagedListResponseWithTime')

const PanFirewallDataSourceSchema = SwitchDataSourceSchema.openapi('PanFirewallDataSource')

const PanFirewallDataSourceRequestSchema = SwitchDataSourceRequestSchema.openapi(
  'PanFirewallDataSourceRequest',
)

const ProblemEventSchema = BaseEventSchema.and(
  z
    .object({
      event_close_time_epoch_ms: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .exactOptional()
        .openapi({ type: 'integer', format: 'int64' }),
      severity: z.enum(['CRITICAL', 'MODERATE', 'WARNING', 'INFO']).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('ProblemEvent')

const SimplePortRangeSchema = z
  .object({ end: z.int32().exactOptional(), start: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('SimplePortRange')

const RecommendedRuleSchema = z
  .object({
    action: z.enum(['ALLOW', 'DROP']).exactOptional(),
    destinations: z.array(ReferenceSchema).exactOptional(),
    port_ranges: z.array(SimplePortRangeSchema).exactOptional(),
    protocols: z.array(z.string()).exactOptional(),
    sources: z.array(ReferenceSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RecommendedRule')

const TimeRangeSchema = z
  .object({
    end_time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    start_time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('TimeRange')

const RecommendedRulesSchema = z
  .object({
    results: z.array(RecommendedRuleSchema).exactOptional(),
    time_range: TimeRangeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RecommendedRules')

const RecommendedRulesRequestSchema = z
  .object({
    group_1: MicroSecGroupSchema.exactOptional(),
    group_2: MicroSecGroupSchema.exactOptional(),
    time_range: TimeRangeSchema.exactOptional(),
  })
  .openapi({
    example: {
      group_1: { entity: { entity_id: '10000:562:1904698621', entity_type: 'Tier' } },
      group_2: { entity: { entity_id: '10000:562:1780351215', entity_type: 'Tier' } },
    },
    required: [],
  })
  .openapi('RecommendedRulesRequest')

const ResourcePoolSchema = BaseEntitySchema.and(
  z
    .object({
      vcenter_manager: ReferenceSchema.exactOptional(),
      vendor_id: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('ResourcePool')

const SNMP2cConfigSchema = z
  .object({ community_string: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('SNMP2cConfig')

const SNMP3ConfigSchema = z
  .object({
    authentication_password: z.string().exactOptional(),
    authentication_type: z.enum(['NO_AUTH', 'MD5', 'SHA']).exactOptional(),
    context_name: z.string().exactOptional(),
    privacy_password: z.string().exactOptional(),
    privacy_type: z
      .enum(['AES', 'DES', 'AES128', 'AES192', 'AES256', '3DES', 'NO_PRIV'])
      .exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SNMP3Config')

const SNMPConfigSchema = z
  .object({
    config_snmp_2c: SNMP2cConfigSchema.exactOptional(),
    config_snmp_3: SNMP3ConfigSchema.exactOptional(),
    snmp_enabled: z.boolean().default(false).exactOptional(),
    snmp_version: z.enum(['v2c', 'v3']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SNMPConfig')

const SortByClauseSchema = z
  .object({ field: z.string().exactOptional(), order: z.enum(['ASC', 'DESC']).exactOptional() })
  .openapi({ required: [] })
  .openapi('SortByClause')

const SearchRequestSchema = z
  .object({
    cursor: z.string().exactOptional(),
    entity_type: AllEntityTypeSchema.exactOptional(),
    filter: z.string().exactOptional().openapi({ description: 'query filter' }),
    size: z.int32().exactOptional(),
    sort_by: SortByClauseSchema.exactOptional(),
    time_range: TimeRangeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchRequest')

const SecurityTagSchema = BaseEntitySchema.and(
  z
    .object({
      description: z.string().exactOptional(),
      direct_security_groups: z.array(ReferenceSchema).exactOptional(),
      nsx_manager: ReferenceSchema.exactOptional(),
      security_groups: z.array(ReferenceSchema).exactOptional(),
      vendor_id: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('SecurityTag')

const SimpleListResponseSchema = z
  .object({
    results: z.array(EntityIdSchema).exactOptional(),
    total_count: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SimpleListResponse')

const TierSchema = BaseEntitySchema.and(
  z
    .object({
      application: ReferenceSchema.exactOptional(),
      group_membership_criteria: z.array(GroupMembershipCriteriaSchema).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Tier')

const TierListResponseSchema = z
  .object({ results: z.array(TierSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('TierListResponse')

const TierRequestSchema = z
  .object({
    group_membership_criteria: z.array(GroupMembershipCriteriaSchema).exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({
    example: {
      group_membership_criteria: [
        {
          membership_type: 'SearchMembershipCriteria',
          search_membership_criteria: {
            entity_type: 'VirtualMachine',
            filter: "security_groups.entity_id = '18230:82:604573173'",
          },
        },
      ],
      name: 'tier-1',
    },
    required: [],
  })
  .openapi('TierRequest')

const TokenSchema = z
  .object({
    expiry: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'expiry epoch time in secs.' }),
    token: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Token')

const UCSManagerDataSourceSchema = SwitchDataSourceSchema.openapi('UCSManagerDataSource')

const UCSManagerDataSourceRequestSchema = SwitchDataSourceSchema.openapi(
  'UCSManagerDataSourceRequest',
)

const UserCredentialSchema = z
  .object({
    domain: DomainSchema.exactOptional(),
    password: z.string().exactOptional().openapi({ example: 'password' }),
    username: z.string().exactOptional().openapi({ example: 'admin@vrni.com' }),
  })
  .openapi({ required: [] })
  .openapi('UserCredential')

const VCDatacenterSchema = BaseEntitySchema.and(
  z
    .object({
      vcenter_manager: ReferenceSchema.exactOptional(),
      vendor_id: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('VCDatacenter')

const VCenterDataSourceSchema = BaseDataSourceSchema.and(
  z.object({ credentials: PasswordCredentialsSchema.exactOptional() }).openapi({ required: [] }),
)
  .openapi({
    example: {
      credentials: { password: 'thePassword', username: 'admin@vsphere.local' },
      enabled: true,
      entity_type: 'VCenterDataSource',
      fqdn: 'go.vc.org',
      id: '1000:33:12890123',
      ip: '192.168.10.1',
      nickname: 'vc1',
      notes: 'VC 1',
      proxy_id: '1000:104:12313412',
    },
  })
  .openapi('VCenterDataSource')

const VCenterDataSourceRequestSchema = BaseDataSourceRequestSchema.and(
  z.object({ credentials: PasswordCredentialsSchema.exactOptional() }).openapi({ required: [] }),
).openapi('VCenterDataSourceRequest')

const VCenterManagerSchema = BaseManagerSchema.and(
  z
    .object({
      fqdn: z.string().exactOptional(),
      ip_address: IpV4AddressSchema.exactOptional(),
      nsx_manager: ReferenceSchema.exactOptional(),
      vm: ReferenceSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('VCenterManager')

const VPCSchema = BaseEntitySchema.and(
  z
    .object({
      cidr_block: IpV4AddressSchema.exactOptional(),
      default_vpc: z.boolean().exactOptional(),
      last_synched_time: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .exactOptional()
        .openapi({ type: 'integer', format: 'int64' }),
      region: z.string().exactOptional(),
      state: z.string().exactOptional(),
      vendor_id: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('VPC')

const VersionResponseSchema = z
  .object({ api_version: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('VersionResponse')

const VirtualMachineSchema: z.ZodType<VirtualMachineType> = z
  .lazy(() =>
    BaseVirtualMachineSchema.and(
      z
        .object({
          applied_to_destination_rules: z.array(RuleSetSchema).exactOptional(),
          applied_to_source_rules: z.array(RuleSetSchema).exactOptional(),
          cluster: ReferenceSchema.exactOptional(),
          datacenter: ReferenceSchema.exactOptional(),
          datastores: z.array(ReferenceSchema).exactOptional(),
          destination_inversion_rules: z.array(RuleSetSchema).exactOptional(),
          folders: z.array(ReferenceSchema).exactOptional(),
          host: ReferenceSchema.exactOptional(),
          layer2_networks: z.array(ReferenceSchema).exactOptional(),
          nsx_manager: ReferenceSchema.exactOptional(),
          resource_pool: ReferenceSchema.exactOptional(),
          security_tags: z.array(ReferenceSchema).exactOptional(),
          source_inversion_rules: z.array(RuleSetSchema).exactOptional(),
          vcenter_manager: ReferenceSchema.exactOptional(),
          vendor_id: z.string().exactOptional(),
          vlans: z.array(VlanSchema).exactOptional(),
        })
        .openapi({ required: [] }),
    ),
  )
  .openapi('VirtualMachine')

const VlanL2NetworkSchema = BaseL2NetworkSchema.and(
  z
    .object({
      distributed_virtual_portgroups: z.array(ReferenceSchema).exactOptional(),
      distributed_virtual_switches: z.array(ReferenceSchema).exactOptional(),
      vlan_id: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('VlanL2Network')

const VmknicSchema = BaseEntitySchema.and(
  z
    .object({
      host: ReferenceSchema.exactOptional(),
      ip_addresses: z.array(IpV4AddressSchema).exactOptional(),
      layer2_network: ReferenceSchema.exactOptional(),
      vlan: VlanSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Vmknic')

const VnicSchema: z.ZodType<VnicType> = z.lazy(() => BaseVnicSchema).openapi('Vnic')

const VxlanLayer2NetworkSchema = BaseL2NetworkSchema.and(
  z
    .object({
      nsx_managers: z.array(ReferenceSchema).exactOptional(),
      scope: ScopeEnumSchema.exactOptional(),
      segment_id: z.int32().exactOptional(),
      vteps: z.array(ReferenceSchema).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('VxlanLayer2Network')

const CursorParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'cursor from previous response',
      in: 'query',
      name: 'cursor',
      required: false,
      schema: { type: 'string' },
    },
  })

const EndTimeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number(),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'end time for query in epoch seconds',
      in: 'query',
      name: 'end_time',
      required: false,
      schema: { type: 'number' },
    },
  })

const IdentifierParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'entity id',
      in: 'path',
      name: 'id',
      required: true,
      schema: { type: 'string' },
    },
  })

const SizeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number(),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      description: 'page size of results',
      in: 'query',
      name: 'size',
      required: false,
      schema: { default: 10, type: 'number' },
    },
  })

const StartTimeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number(),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'start time for query in epoch seconds',
      in: 'query',
      name: 'start_time',
      required: false,
      schema: { type: 'number' },
    },
  })

const TimeParamsSchema = z
  .preprocess((val) => {
    if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)) return val
    if (/^-?\d+$/.test(val)) return BigInt(val)
    const num = Number(val)
    return Number.isSafeInteger(num) ? BigInt(num) : val
  }, z.int64())
  .exactOptional()
  .openapi({
    param: {
      description: 'time in epoch seconds',
      in: 'query',
      name: 'time',
      required: false,
      schema: { format: 'int64', type: 'integer' },
    },
  })

const SNMPConfigRequestBody = { content: { 'application/json': { schema: SNMPConfigSchema } } }

const ApiKeyAuthSecurityScheme = {
  description: 'API Key - NetworkInsight {token}',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

export const postAuthTokenRoute = createRoute({
  method: 'post',
  path: '/auth/token',
  tags: ['Authentication'],
  summary: 'Create an auth token',
  description:
    '<html><body> vRealize Network Insight supports token based authentication.Tokens are non-modifiable identifiers returned by the system when the user has successfully authenticated using valid credentials. Token expires after expiry time returned in the response. All API requests must provide the auth token in Authorization header in following format.<br> Authorization &#58; NetworkInsight {token} <br> If a token is invalid or expired, 401-Unauthorized error gets returned in the response of the API request. </body></html>',
  operationId: 'create',
  request: {
    body: {
      description: 'User Credentials',
      content: { 'application/json': { schema: UserCredentialSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: TokenSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
})

export const deleteAuthTokenRoute = createRoute({
  method: 'delete',
  path: '/auth/token',
  tags: ['Authentication'],
  summary: 'Delete an auth token.',
  description:
    'Deletes the auth token provided in Authorization header.\nDeleting an expired or invalid token will result in 401 Unauthorized error.',
  operationId: 'delete',
  responses: {
    204: { description: 'Success' },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesAristaSwitchesRoute = createRoute({
  method: 'get',
  path: '/data-sources/arista-switches',
  tags: ['Data Sources'],
  summary: 'List arista switch data sources',
  description: 'List arista switch data sources',
  operationId: 'listAristaSwitches',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DataSourceListResponseSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesAristaSwitchesRoute = createRoute({
  method: 'post',
  path: '/data-sources/arista-switches',
  tags: ['Data Sources'],
  summary: 'Create an arista switch data source',
  description: 'Add arista switch data source',
  operationId: 'addAristaSwitch',
  request: {
    body: {
      description: 'Add a cisco switch as datasource',
      content: { 'application/json': { schema: AristaSwitchDataSourceRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: AristaSwitchDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesAristaSwitchesIdRoute = createRoute({
  method: 'get',
  path: '/data-sources/arista-switches/{id}',
  tags: ['Data Sources'],
  summary: 'Show arista switch data source details',
  description: 'Show arista switch data source details',
  operationId: 'getAristaSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AristaSwitchDataSourceSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putDataSourcesAristaSwitchesIdRoute = createRoute({
  method: 'put',
  path: '/data-sources/arista-switches/{id}',
  tags: ['Data Sources'],
  summary: 'Update an arista switch data source',
  description: 'Update an switch data source',
  operationId: 'updateAristaSwitch',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    body: { content: { 'application/json': { schema: AristaSwitchDataSourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AristaSwitchDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteDataSourcesAristaSwitchesIdRoute = createRoute({
  method: 'delete',
  path: '/data-sources/arista-switches/{id}',
  tags: ['Data Sources'],
  summary: 'Delete an arista switch data source',
  description: 'Delete an arista switch data source',
  operationId: 'deleteAristaSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesAristaSwitchesIdDisableRoute = createRoute({
  method: 'post',
  path: '/data-sources/arista-switches/{id}/disable',
  tags: ['Data Sources'],
  summary: 'Disable an arista switch data source',
  description: 'Disable an arista switch data source',
  operationId: 'disableAristaSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesAristaSwitchesIdEnableRoute = createRoute({
  method: 'post',
  path: '/data-sources/arista-switches/{id}/enable',
  tags: ['Data Sources'],
  summary: 'Enable an arista switch data source',
  description: 'Enable an arista switch data source',
  operationId: 'enableAristaSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesAristaSwitchesIdSnmpConfigRoute = createRoute({
  method: 'get',
  path: '/data-sources/arista-switches/{id}/snmp-config',
  tags: ['Data Sources'],
  summary: 'Show snmp config for arista switch data source',
  description: 'Show snmp config for arista switch data source',
  operationId: 'getAristaSwitchSnmpConfig',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SNMPConfigSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putDataSourcesAristaSwitchesIdSnmpConfigRoute = createRoute({
  method: 'put',
  path: '/data-sources/arista-switches/{id}/snmp-config',
  tags: ['Data Sources'],
  summary: 'Update snmp config for arista switch data source',
  description: 'Update snmp config for arista switch data source',
  operationId: 'updateAristaSwitchSnmpConfig',
  request: { params: z.object({ id: IdentifierParamsSchema }), body: SNMPConfigRequestBody },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SNMPConfigSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesBrocadeSwitchesRoute = createRoute({
  method: 'get',
  path: '/data-sources/brocade-switches',
  tags: ['Data Sources'],
  summary: 'List brocade switch data sources',
  description: 'List brocade switch data sources',
  operationId: 'listBrocadeSwitches',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DataSourceListResponseSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesBrocadeSwitchesRoute = createRoute({
  method: 'post',
  path: '/data-sources/brocade-switches',
  tags: ['Data Sources'],
  summary: 'Create a brocade switch data source',
  description: 'Add brocade switch as a data source',
  operationId: 'addBrocadeSwitch',
  request: {
    body: { content: { 'application/json': { schema: BrocadeSwitchDataSourceRequestSchema } } },
  },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: BrocadeSwitchDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesBrocadeSwitchesIdRoute = createRoute({
  method: 'get',
  path: '/data-sources/brocade-switches/{id}',
  tags: ['Data Sources'],
  summary: 'Show brocade switch data source details',
  description: 'Show brocade switch data source details',
  operationId: 'getBrocadeSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BrocadeSwitchDataSourceSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putDataSourcesBrocadeSwitchesIdRoute = createRoute({
  method: 'put',
  path: '/data-sources/brocade-switches/{id}',
  tags: ['Data Sources'],
  summary: 'Update a brocade switch data source',
  description:
    'Update a brocade switch data source. Only credentials, nickname and notes can be updated.',
  operationId: 'updateBrocadeSwitch',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    body: { content: { 'application/json': { schema: BrocadeSwitchDataSourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BrocadeSwitchDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteDataSourcesBrocadeSwitchesIdRoute = createRoute({
  method: 'delete',
  path: '/data-sources/brocade-switches/{id}',
  tags: ['Data Sources'],
  summary: 'Delete a brocade switch data source',
  description: 'Delete a brocade switch data source',
  operationId: 'deleteBrocadeSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesBrocadeSwitchesIdDisableRoute = createRoute({
  method: 'post',
  path: '/data-sources/brocade-switches/{id}/disable',
  tags: ['Data Sources'],
  summary: 'Disable a brocade switch data source',
  operationId: 'disableBrocadeSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesBrocadeSwitchesIdEnableRoute = createRoute({
  method: 'post',
  path: '/data-sources/brocade-switches/{id}/enable',
  tags: ['Data Sources'],
  summary: 'Enable a brocade switch data source',
  operationId: 'enableBrocadeSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesBrocadeSwitchesIdSnmpConfigRoute = createRoute({
  method: 'get',
  path: '/data-sources/brocade-switches/{id}/snmp-config',
  tags: ['Data Sources'],
  summary: 'Show snmp config for brocade switch data source',
  description: 'Show snmp config for brocade switch data source',
  operationId: 'getBrocadeSwitchSnmpConfig',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SNMPConfigSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putDataSourcesBrocadeSwitchesIdSnmpConfigRoute = createRoute({
  method: 'put',
  path: '/data-sources/brocade-switches/{id}/snmp-config',
  tags: ['Data Sources'],
  summary: 'Update snmp config for brocade switch data source',
  description: 'Update snmp config for brocade switch data source',
  operationId: 'updateBrocadeSwitchSnmpConfig',
  request: { params: z.object({ id: IdentifierParamsSchema }), body: SNMPConfigRequestBody },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SNMPConfigSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesCheckpointFirewallsRoute = createRoute({
  method: 'get',
  path: '/data-sources/checkpoint-firewalls',
  tags: ['Data Sources'],
  summary: 'List checkpoint firewall data sources',
  description: 'List checkpoint firewall data sources',
  operationId: 'listCheckpointFirewalls',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DataSourceListResponseSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesCheckpointFirewallsRoute = createRoute({
  method: 'post',
  path: '/data-sources/checkpoint-firewalls',
  tags: ['Data Sources'],
  summary: 'Create a checkpoint firewall',
  description: 'Add checkpoint firewall as data source',
  operationId: 'addCheckpointFirewall',
  request: {
    body: {
      description: 'Add a vSec Checkpoint firewall as data source',
      content: { 'application/json': { schema: CheckpointFirewallDataSourceRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: CheckpointFirewallDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesCheckpointFirewallsIdRoute = createRoute({
  method: 'get',
  path: '/data-sources/checkpoint-firewalls/{id}',
  tags: ['Data Sources'],
  summary: 'Show checkpoint firewall data source details',
  description: 'Show checkpoint firewall data source details',
  operationId: 'getCheckpointFirewall',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CheckpointFirewallDataSourceSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putDataSourcesCheckpointFirewallsIdRoute = createRoute({
  method: 'put',
  path: '/data-sources/checkpoint-firewalls/{id}',
  tags: ['Data Sources'],
  summary: 'Update a checkpoint firewall data source',
  description: 'Update a checkpoint firewall data source',
  operationId: 'updateCheckpointFirewall',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    body: { content: { 'application/json': { schema: CheckpointFirewallDataSourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CheckpointFirewallDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteDataSourcesCheckpointFirewallsIdRoute = createRoute({
  method: 'delete',
  path: '/data-sources/checkpoint-firewalls/{id}',
  tags: ['Data Sources'],
  summary: 'Delete a checkpoint firewall data source',
  description: 'Delete a checkpoint firewall data source',
  operationId: 'deleteCheckpointFirewall',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesCheckpointFirewallsIdDisableRoute = createRoute({
  method: 'post',
  path: '/data-sources/checkpoint-firewalls/{id}/disable',
  tags: ['Data Sources'],
  summary: 'Disable a checkpoint firewall data source',
  description: 'Disable a checkpoint firewall data source',
  operationId: 'disableCheckpointFirewall',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesCheckpointFirewallsIdEnableRoute = createRoute({
  method: 'post',
  path: '/data-sources/checkpoint-firewalls/{id}/enable',
  tags: ['Data Sources'],
  summary: 'Enable a checkpoint firewall data source',
  description: 'Enable a checkpoint firewall data source',
  operationId: 'enableCheckpointFirewall',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesCiscoSwitchesRoute = createRoute({
  method: 'get',
  path: '/data-sources/cisco-switches',
  tags: ['Data Sources'],
  summary: 'List cisco switch data sources',
  description: 'List cisco switch data sources',
  operationId: 'listCiscoSwitches',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DataSourceListResponseSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesCiscoSwitchesRoute = createRoute({
  method: 'post',
  path: '/data-sources/cisco-switches',
  tags: ['Data Sources'],
  summary: 'Create a cisco switch data source',
  description:
    'Add cisco switch as data source. User must provide one of ip or fqdn field in the request body.\nAppropriate proxy id is retrieved from infra/nodes URL to select the proxy node.',
  operationId: 'addCiscoSwitch',
  request: {
    body: {
      description: 'Add a cisco switch as datasource.',
      content: { 'application/json': { schema: CiscoSwitchDataSourceRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: CiscoSwitchDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesCiscoSwitchesIdRoute = createRoute({
  method: 'get',
  path: '/data-sources/cisco-switches/{id}',
  tags: ['Data Sources'],
  summary: 'Show cisco switch data source details',
  description: 'Show cisco switch data source details',
  operationId: 'getCiscoSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CiscoSwitchDataSourceSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putDataSourcesCiscoSwitchesIdRoute = createRoute({
  method: 'put',
  path: '/data-sources/cisco-switches/{id}',
  tags: ['Data Sources'],
  summary: 'Update a cisco switch data source',
  description:
    'Update a cisco switch data source. Only credentials, nickname and notes can be updated.',
  operationId: 'updateCiscoSwitch',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    body: { content: { 'application/json': { schema: CiscoSwitchDataSourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CiscoSwitchDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteDataSourcesCiscoSwitchesIdRoute = createRoute({
  method: 'delete',
  path: '/data-sources/cisco-switches/{id}',
  tags: ['Data Sources'],
  summary: 'Delete a cisco switch data source',
  description: 'Delete a cisco switch data source',
  operationId: 'deleteCiscoSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesCiscoSwitchesIdDisableRoute = createRoute({
  method: 'post',
  path: '/data-sources/cisco-switches/{id}/disable',
  tags: ['Data Sources'],
  summary: 'Disable a cisco switch data source',
  description: 'Disable a cisco switch data source',
  operationId: 'disableCiscoSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesCiscoSwitchesIdEnableRoute = createRoute({
  method: 'post',
  path: '/data-sources/cisco-switches/{id}/enable',
  tags: ['Data Sources'],
  summary: 'Enable a cisco switch data source',
  description: 'Enable a cisco switch data source',
  operationId: 'enableCiscoSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesCiscoSwitchesIdSnmpConfigRoute = createRoute({
  method: 'get',
  path: '/data-sources/cisco-switches/{id}/snmp-config',
  tags: ['Data Sources'],
  summary: 'Show snmp config for cisco switch data source',
  description: 'Show snmp config for cisco switch data source',
  operationId: 'getCiscoSwitchSnmpConfig',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SNMPConfigSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putDataSourcesCiscoSwitchesIdSnmpConfigRoute = createRoute({
  method: 'put',
  path: '/data-sources/cisco-switches/{id}/snmp-config',
  tags: ['Data Sources'],
  summary: 'Update snmp config for cisco switch data source',
  description: 'Update snmp config for cisco switch data source',
  operationId: 'updateCiscoSwitchSnmpConfig',
  request: { params: z.object({ id: IdentifierParamsSchema }), body: SNMPConfigRequestBody },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SNMPConfigSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesDellSwitchesRoute = createRoute({
  method: 'get',
  path: '/data-sources/dell-switches',
  tags: ['Data Sources'],
  summary: 'List dell switch data sources',
  description: 'List dell switch data sources',
  operationId: 'listDellSwitches',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DataSourceListResponseSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesDellSwitchesRoute = createRoute({
  method: 'post',
  path: '/data-sources/dell-switches',
  tags: ['Data Sources'],
  summary: 'Create a dell switch data source',
  description: 'Add a dell switch as data source',
  operationId: 'addDellSwitch',
  request: {
    body: { content: { 'application/json': { schema: DellSwitchDataSourceRequestSchema } } },
  },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: DellSwitchDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesDellSwitchesIdRoute = createRoute({
  method: 'get',
  path: '/data-sources/dell-switches/{id}',
  tags: ['Data Sources'],
  summary: 'Show dell switch data source details',
  description: 'Get a dell switch data source details',
  operationId: 'getDellSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DellSwitchDataSourceSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putDataSourcesDellSwitchesIdRoute = createRoute({
  method: 'put',
  path: '/data-sources/dell-switches/{id}',
  tags: ['Data Sources'],
  summary: 'Update a dell switch data source',
  description:
    'Update a dell switch data source. Only credentials, nickname and notes can be updated',
  operationId: 'updateDellSwitch',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    body: { content: { 'application/json': { schema: DellSwitchDataSourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DellSwitchDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteDataSourcesDellSwitchesIdRoute = createRoute({
  method: 'delete',
  path: '/data-sources/dell-switches/{id}',
  tags: ['Data Sources'],
  summary: 'Delete a dell switch data source',
  description: 'Delete a data source',
  operationId: 'deleteDellSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesDellSwitchesIdDisableRoute = createRoute({
  method: 'post',
  path: '/data-sources/dell-switches/{id}/disable',
  tags: ['Data Sources'],
  summary: 'Disable a dell switch data source',
  description: 'Disable a dell switch data source',
  operationId: 'disableDellSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesDellSwitchesIdEnableRoute = createRoute({
  method: 'post',
  path: '/data-sources/dell-switches/{id}/enable',
  tags: ['Data Sources'],
  summary: 'Enable a dell switch data source',
  description: 'Enable a dell switch data source',
  operationId: 'enableDellSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesDellSwitchesIdSnmpConfigRoute = createRoute({
  method: 'get',
  path: '/data-sources/dell-switches/{id}/snmp-config',
  tags: ['Data Sources'],
  summary: 'Show snmp config for dell switch data source',
  description: 'Show snmp config for dell switch data source',
  operationId: 'getDellSwitchSnmpConfig',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SNMPConfigSchema } } },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putDataSourcesDellSwitchesIdSnmpConfigRoute = createRoute({
  method: 'put',
  path: '/data-sources/dell-switches/{id}/snmp-config',
  tags: ['Data Sources'],
  summary: 'Update snmp config for dell switch data source',
  description: 'Update snmp config for dell switch data source',
  operationId: 'updateDellSwitchSnmpConfig',
  request: { params: z.object({ id: IdentifierParamsSchema }), body: SNMPConfigRequestBody },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SNMPConfigSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesHpovManagersRoute = createRoute({
  method: 'get',
  path: '/data-sources/hpov-managers',
  tags: ['Data Sources'],
  summary: 'List hp oneview manager data sources',
  description: 'List hp oneview manager data sources',
  operationId: 'listHpovManagers',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DataSourceListResponseSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesHpovManagersRoute = createRoute({
  method: 'post',
  path: '/data-sources/hpov-managers',
  tags: ['Data Sources'],
  summary: 'Create a hp oneview manager data source',
  description: 'Add a hp oneview manager data source',
  operationId: 'addHpovManager',
  request: {
    body: { content: { 'application/json': { schema: HPOneViewManagerDataSourceRequestSchema } } },
  },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: HPOneViewManagerDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesHpovManagersIdRoute = createRoute({
  method: 'get',
  path: '/data-sources/hpov-managers/{id}',
  tags: ['Data Sources'],
  summary: 'Show hp oneview data source details',
  description: 'Show hp oneview data source details',
  operationId: 'getHpovManager',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: HPOneViewManagerDataSourceSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putDataSourcesHpovManagersIdRoute = createRoute({
  method: 'put',
  path: '/data-sources/hpov-managers/{id}',
  tags: ['Data Sources'],
  summary: 'Update a hp oneview data source',
  description: 'Update a hp oneview data source',
  operationId: 'updateHpovManager',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    body: { content: { 'application/json': { schema: HPOneViewManagerDataSourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: HPOneViewManagerDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteDataSourcesHpovManagersIdRoute = createRoute({
  method: 'delete',
  path: '/data-sources/hpov-managers/{id}',
  tags: ['Data Sources'],
  summary: 'Delete a hp oneview data source',
  description: 'Delete a hp oneview data source',
  operationId: 'deleteHpovManager',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesHpovManagersIdDisableRoute = createRoute({
  method: 'post',
  path: '/data-sources/hpov-managers/{id}/disable',
  tags: ['Data Sources'],
  summary: 'Disable a hp oneview data source',
  description: 'Disable a hp oneview data source',
  operationId: 'disableHpovManager',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesHpovManagersIdEnableRoute = createRoute({
  method: 'post',
  path: '/data-sources/hpov-managers/{id}/enable',
  tags: ['Data Sources'],
  summary: 'Enable a hp oneview data source',
  description: 'Enable a hp oneview data source',
  operationId: 'enableHpovManager',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesHpvcManagersRoute = createRoute({
  method: 'get',
  path: '/data-sources/hpvc-managers',
  tags: ['Data Sources'],
  summary: 'List hpvc manager data sources',
  description: 'List hpvc manager data sources',
  operationId: 'listHpvcManagers',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DataSourceListResponseSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesHpvcManagersRoute = createRoute({
  method: 'post',
  path: '/data-sources/hpvc-managers',
  tags: ['Data Sources'],
  summary: 'Create a hpvc manager data source',
  description: 'Add hpvc manager data source',
  operationId: 'addHpvcManager',
  request: {
    body: {
      description: 'Add a switch as datasource',
      content: { 'application/json': { schema: HPVCManagerDataSourceRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: HPVCManagerDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesHpvcManagersIdRoute = createRoute({
  method: 'get',
  path: '/data-sources/hpvc-managers/{id}',
  tags: ['Data Sources'],
  summary: 'Show hpvc data source details',
  description: 'Show hpvc data source details',
  operationId: 'getHpvcManager',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: HPVCManagerDataSourceSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putDataSourcesHpvcManagersIdRoute = createRoute({
  method: 'put',
  path: '/data-sources/hpvc-managers/{id}',
  tags: ['Data Sources'],
  summary: 'Update a hpvc manager data source',
  description: 'Update a hpvc manager data source',
  operationId: 'updateHpvcManager',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    body: { content: { 'application/json': { schema: HPVCManagerDataSourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: HPVCManagerDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteDataSourcesHpvcManagersIdRoute = createRoute({
  method: 'delete',
  path: '/data-sources/hpvc-managers/{id}',
  tags: ['Data Sources'],
  summary: 'Delete a hpvc manager data source',
  description: 'Delete a hpvc manager data source',
  operationId: 'deleteHpvcManager',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesHpvcManagersIdDisableRoute = createRoute({
  method: 'post',
  path: '/data-sources/hpvc-managers/{id}/disable',
  tags: ['Data Sources'],
  summary: 'Disable a hpvc manager data source',
  description: 'Disable a hpvc manager data source',
  operationId: 'disableHpvcManager',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesHpvcManagersIdEnableRoute = createRoute({
  method: 'post',
  path: '/data-sources/hpvc-managers/{id}/enable',
  tags: ['Data Sources'],
  summary: 'Enable a hpvc manager data source',
  description: 'Enable a hpvc manager data source',
  operationId: 'enableHpvcManager',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesJuniperSwitchesRoute = createRoute({
  method: 'get',
  path: '/data-sources/juniper-switches',
  tags: ['Data Sources'],
  summary: 'List juniper switch data sources',
  description: 'List juniper switch data sources',
  operationId: 'listJuniperSwitches',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DataSourceListResponseSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesJuniperSwitchesRoute = createRoute({
  method: 'post',
  path: '/data-sources/juniper-switches',
  tags: ['Data Sources'],
  summary: 'Add a juniper switch as data source',
  description: 'Add switch Datasource',
  operationId: 'addJuniperSwitch',
  request: {
    body: {
      description: 'Add a cisco switch as datasource',
      content: { 'application/json': { schema: JuniperSwitchDataSourceRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: JuniperSwitchDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesJuniperSwitchesIdRoute = createRoute({
  method: 'get',
  path: '/data-sources/juniper-switches/{id}',
  tags: ['Data Sources'],
  summary: 'Show juniper switch data source details',
  description: 'Show juniper switch data source details',
  operationId: 'getJuniperSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: JuniperSwitchDataSourceSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putDataSourcesJuniperSwitchesIdRoute = createRoute({
  method: 'put',
  path: '/data-sources/juniper-switches/{id}',
  tags: ['Data Sources'],
  summary: 'Update a juniper switch data source',
  description: 'Update a juniper switch data source',
  operationId: 'updateJuniperSwitch',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    body: { content: { 'application/json': { schema: JuniperSwitchDataSourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: JuniperSwitchDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteDataSourcesJuniperSwitchesIdRoute = createRoute({
  method: 'delete',
  path: '/data-sources/juniper-switches/{id}',
  tags: ['Data Sources'],
  summary: 'Delete a juniper switch data source',
  description: 'Delete a juniper switch data source',
  operationId: 'deleteJuniperSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesJuniperSwitchesIdDisableRoute = createRoute({
  method: 'post',
  path: '/data-sources/juniper-switches/{id}/disable',
  tags: ['Data Sources'],
  summary: 'Disable a juniper switch data source',
  description: 'Disable a juniper switch data source',
  operationId: 'disableJuniperSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesJuniperSwitchesIdEnableRoute = createRoute({
  method: 'post',
  path: '/data-sources/juniper-switches/{id}/enable',
  tags: ['Data Sources'],
  summary: 'Enable a juniper switch data source',
  description: 'Enable a juniper switch data source',
  operationId: 'enableJuniperSwitch',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesJuniperSwitchesIdSnmpConfigRoute = createRoute({
  method: 'get',
  path: '/data-sources/juniper-switches/{id}/snmp-config',
  tags: ['Data Sources'],
  summary: 'Show snmp config for juniper switch data source',
  description: 'Show snmp config for juniper switch data source',
  operationId: 'getJuniperSwitchSnmpConfig',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SNMPConfigSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putDataSourcesJuniperSwitchesIdSnmpConfigRoute = createRoute({
  method: 'put',
  path: '/data-sources/juniper-switches/{id}/snmp-config',
  tags: ['Data Sources'],
  summary: 'Update snmp config for a juniper switch data source',
  description: 'Update snmp config for a juniper switch data source',
  operationId: 'updateJuniperSwitchSnmpConfig',
  request: { params: z.object({ id: IdentifierParamsSchema }), body: SNMPConfigRequestBody },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SNMPConfigSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesNsxvManagersRoute = createRoute({
  method: 'get',
  path: '/data-sources/nsxv-managers',
  tags: ['Data Sources'],
  summary: 'List nsx-v manager data sources',
  description: 'List nsx-v manager data sources',
  operationId: 'listNsxvManagers',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DataSourceListResponseSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesNsxvManagersRoute = createRoute({
  method: 'post',
  path: '/data-sources/nsxv-managers',
  tags: ['Data Sources'],
  summary: 'Create a nsx-v manager data source',
  description: 'Add a nsx-v manager data source',
  operationId: 'addNsxvManagerDatasource',
  request: {
    body: { content: { 'application/json': { schema: NSXVManagerDataSourceRequestSchema } } },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: NSXVManagerDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesNsxvManagersIdRoute = createRoute({
  method: 'get',
  path: '/data-sources/nsxv-managers/{id}',
  tags: ['Data Sources'],
  summary: 'Show nsx-v manager data source details',
  description: 'Show nsx-v manager data source details',
  operationId: 'getNsxvManager',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: NSXVManagerDataSourceSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putDataSourcesNsxvManagersIdRoute = createRoute({
  method: 'put',
  path: '/data-sources/nsxv-managers/{id}',
  tags: ['Data Sources'],
  summary: 'Update a nsx-v manager data source',
  description: 'Update a nsx-v manager data source',
  operationId: 'updateNsxvManager',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    body: { content: { 'application/json': { schema: NSXVManagerDataSourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: NSXVManagerDataSourceSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteDataSourcesNsxvManagersIdRoute = createRoute({
  method: 'delete',
  path: '/data-sources/nsxv-managers/{id}',
  tags: ['Data Sources'],
  summary: 'Delete a nsx-v manager data source',
  description: 'Delete a nsx-v manager data source',
  operationId: 'deleteNsxvManager',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesNsxvManagersIdControllerClusterRoute = createRoute({
  method: 'get',
  path: '/data-sources/nsxv-managers/{id}/controller-cluster',
  tags: ['Data Sources'],
  summary: 'Show nsx controller-cluster details',
  description: 'Show nsx controller-cluster details',
  operationId: 'getNsxvControllerCluster',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: NSXControllerDataCollectionSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putDataSourcesNsxvManagersIdControllerClusterRoute = createRoute({
  method: 'put',
  path: '/data-sources/nsxv-managers/{id}/controller-cluster',
  tags: ['Data Sources'],
  summary: 'Update nsx controller-cluster details',
  description: 'Update nsx controller-cluster details',
  operationId: 'updateNsxvControllerCluster',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    body: { content: { 'application/json': { schema: NSXControllerDataCollectionSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: NSXControllerDataCollectionSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesNsxvManagersIdDisableRoute = createRoute({
  method: 'post',
  path: '/data-sources/nsxv-managers/{id}/disable',
  tags: ['Data Sources'],
  summary: 'Disable a nsx-v manager data source',
  description: 'Disable a nsx-v manager data source',
  operationId: 'disableNsxvManager',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesNsxvManagersIdEnableRoute = createRoute({
  method: 'post',
  path: '/data-sources/nsxv-managers/{id}/enable',
  tags: ['Data Sources'],
  summary: 'Enable a nsx-v manager data source',
  description: 'Enable a nsx-v manager data source',
  operationId: 'enableNsxvManager',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesPanoramaFirewallsRoute = createRoute({
  method: 'get',
  path: '/data-sources/panorama-firewalls',
  tags: ['Data Sources'],
  summary: 'List panorama firewall data sources',
  description: 'List panorama firewall data sources',
  operationId: 'listPanoramaFirewalls',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DataSourceListResponseSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesPanoramaFirewallsRoute = createRoute({
  method: 'post',
  path: '/data-sources/panorama-firewalls',
  tags: ['Data Sources'],
  summary: 'Create panorama firewall data source',
  description: 'Add panorama firewall as data source',
  operationId: 'addPanoramaFirewall',
  request: {
    body: {
      description: 'Add a panorama firewall as datasource',
      content: { 'application/json': { schema: PanFirewallDataSourceRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: PanFirewallDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesPanoramaFirewallsIdRoute = createRoute({
  method: 'get',
  path: '/data-sources/panorama-firewalls/{id}',
  tags: ['Data Sources'],
  summary: 'Show panorama firewall data source details',
  description: 'Show panorama firewall data source details',
  operationId: 'getPanoramaFirewall',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PanFirewallDataSourceSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putDataSourcesPanoramaFirewallsIdRoute = createRoute({
  method: 'put',
  path: '/data-sources/panorama-firewalls/{id}',
  tags: ['Data Sources'],
  summary: 'Update a panorama firewall data source',
  description: 'Update a panorama firewall data source',
  operationId: 'updatePanoramaFirewall',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    body: { content: { 'application/json': { schema: PanFirewallDataSourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PanFirewallDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteDataSourcesPanoramaFirewallsIdRoute = createRoute({
  method: 'delete',
  path: '/data-sources/panorama-firewalls/{id}',
  tags: ['Data Sources'],
  summary: 'Delete a panorama firewall data source',
  description: 'Delete a panorama firewall data source',
  operationId: 'deletePanoramaFirewall',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesPanoramaFirewallsIdDisableRoute = createRoute({
  method: 'post',
  path: '/data-sources/panorama-firewalls/{id}/disable',
  tags: ['Data Sources'],
  summary: 'Disable a panorama firewall data source',
  description: 'Disable a panorama firewall data source',
  operationId: 'disablePanoramaFirewall',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesPanoramaFirewallsIdEnableRoute = createRoute({
  method: 'post',
  path: '/data-sources/panorama-firewalls/{id}/enable',
  tags: ['Data Sources'],
  summary: 'Enable a panorama firewall data source',
  description: 'Enable a panorama firewall data source',
  operationId: 'enablePanoramaFirewall',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesUcsManagersRoute = createRoute({
  method: 'get',
  path: '/data-sources/ucs-managers',
  tags: ['Data Sources'],
  summary: 'List ucs manager data sources',
  description: 'List ucs manager data sources',
  operationId: 'listUcsManagers',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DataSourceListResponseSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesUcsManagersRoute = createRoute({
  method: 'post',
  path: '/data-sources/ucs-managers',
  tags: ['Data Sources'],
  summary: 'Create an ucs manager data source',
  description: 'Add an ucs manager as data source',
  operationId: 'addUcsManager',
  request: {
    body: { content: { 'application/json': { schema: UCSManagerDataSourceRequestSchema } } },
  },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: UCSManagerDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesUcsManagersIdRoute = createRoute({
  method: 'get',
  path: '/data-sources/ucs-managers/{id}',
  tags: ['Data Sources'],
  summary: 'Show ucs manager data source details',
  description: 'Show ucs manager data source details',
  operationId: 'getUcsManager',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UCSManagerDataSourceSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putDataSourcesUcsManagersIdRoute = createRoute({
  method: 'put',
  path: '/data-sources/ucs-managers/{id}',
  tags: ['Data Sources'],
  summary: 'Update an ucs manager data source',
  description: 'Update an ucs manager data source',
  operationId: 'updateUcsManager',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    body: { content: { 'application/json': { schema: UCSManagerDataSourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UCSManagerDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteDataSourcesUcsManagersIdRoute = createRoute({
  method: 'delete',
  path: '/data-sources/ucs-managers/{id}',
  tags: ['Data Sources'],
  summary: 'Delete an ucs manager data source',
  description: 'Delete an ucs manager data source',
  operationId: 'deleteUcsManager',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesUcsManagersIdDisableRoute = createRoute({
  method: 'post',
  path: '/data-sources/ucs-managers/{id}/disable',
  tags: ['Data Sources'],
  summary: 'Disable an ucs manager data source',
  description: 'Disable an ucs manager data source',
  operationId: 'disableUcsManager',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesUcsManagersIdEnableRoute = createRoute({
  method: 'post',
  path: '/data-sources/ucs-managers/{id}/enable',
  tags: ['Data Sources'],
  summary: 'Enable an ucs manager data source',
  description: 'Enable an ucs manager data source',
  operationId: 'enableUcsManager',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesUcsManagersIdSnmpConfigRoute = createRoute({
  method: 'get',
  path: '/data-sources/ucs-managers/{id}/snmp-config',
  tags: ['Data Sources'],
  summary: 'Show snmp config for ucs fabric interconnects',
  description: 'Show snmp config for ucs fabric interconnects',
  operationId: 'getUcsSnmpConfig',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SNMPConfigSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putDataSourcesUcsManagersIdSnmpConfigRoute = createRoute({
  method: 'put',
  path: '/data-sources/ucs-managers/{id}/snmp-config',
  tags: ['Data Sources'],
  summary: 'Update snmp config for ucs fabric interconnects',
  description: 'Update snmp config for ucs fabric interconnects',
  operationId: 'updateUcsSnmpConfig',
  request: { params: z.object({ id: IdentifierParamsSchema }), body: SNMPConfigRequestBody },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SNMPConfigSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesVcentersRoute = createRoute({
  method: 'get',
  path: '/data-sources/vcenters',
  tags: ['Data Sources'],
  summary: 'List vCenter data sources',
  description: 'List vCenter data sources',
  operationId: 'listVcenters',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DataSourceListResponseSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesVcentersRoute = createRoute({
  method: 'post',
  path: '/data-sources/vcenters',
  tags: ['Data Sources'],
  summary: 'Create a vCenter data source',
  description:
    'Add a vcenter data source. User must provide one of ip or fqdn field in the request body.\nAppropriate proxy id is retrieved from infra/nodes URL to select the proxy node.',
  operationId: 'addVcenterDatasource',
  request: {
    body: {
      description: 'VCenter Credentials',
      content: { 'application/json': { schema: VCenterDataSourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: VCenterDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getDataSourcesVcentersIdRoute = createRoute({
  method: 'get',
  path: '/data-sources/vcenters/{id}',
  tags: ['Data Sources'],
  summary: 'Show vCenter data source details',
  description: 'Show vCenter data source details',
  operationId: 'getVcenter',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: VCenterDataSourceSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putDataSourcesVcentersIdRoute = createRoute({
  method: 'put',
  path: '/data-sources/vcenters/{id}',
  tags: ['Data Sources'],
  summary: 'Update a vCenter data source.',
  description: 'Update a vcenter data source. Only nickname, notes and credentials can be updated.',
  operationId: 'updateVcenter',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    body: { content: { 'application/json': { schema: VCenterDataSourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: VCenterDataSourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteDataSourcesVcentersIdRoute = createRoute({
  method: 'delete',
  path: '/data-sources/vcenters/{id}',
  tags: ['Data Sources'],
  summary: 'Delete a vCenter data source',
  description: 'Delete a data source',
  operationId: 'deleteVcenter',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    204: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesVcentersIdDisableRoute = createRoute({
  method: 'post',
  path: '/data-sources/vcenters/{id}/disable',
  tags: ['Data Sources'],
  summary: 'Disable a vCenter data source',
  description: 'Disable a vCenter data source',
  operationId: 'disableVcenter',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postDataSourcesVcentersIdEnableRoute = createRoute({
  method: 'post',
  path: '/data-sources/vcenters/{id}/enable',
  tags: ['Data Sources'],
  summary: 'Enable a vCenter data source',
  description: 'Enable a vCenter data source',
  operationId: 'enableVcenter',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesClustersRoute = createRoute({
  method: 'get',
  path: '/entities/clusters',
  tags: ['Entities'],
  summary: 'List clusters',
  description: 'List clusters',
  operationId: 'listClusters',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesClustersIdRoute = createRoute({
  method: 'get',
  path: '/entities/clusters/{id}',
  tags: ['Entities'],
  summary: 'Show cluster details',
  description: 'Show cluster details',
  operationId: 'getCluster',
  request: {
    query: z.object({ time: TimeParamsSchema }),
    params: z.object({ id: IdentifierParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ClusterSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesDatastoresRoute = createRoute({
  method: 'get',
  path: '/entities/datastores',
  tags: ['Entities'],
  summary: 'List datastores',
  description: 'List datastores',
  operationId: 'listDatastores',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesDatastoresIdRoute = createRoute({
  method: 'get',
  path: '/entities/datastores/{id}',
  tags: ['Entities'],
  summary: 'Show datastore details',
  description: 'Show datastore details',
  operationId: 'getDatastore',
  request: {
    query: z.object({ time: TimeParamsSchema }),
    params: z.object({ id: IdentifierParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DatastoreSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesDistributedVirtualPortgroupsRoute = createRoute({
  method: 'get',
  path: '/entities/distributed-virtual-portgroups',
  tags: ['Entities'],
  summary: 'List distributed virtual portgroups',
  description: 'List distributed virtual portgroups',
  operationId: 'listDistributedVirtualPortgroups',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesDistributedVirtualPortgroupsIdRoute = createRoute({
  method: 'get',
  path: '/entities/distributed-virtual-portgroups/{id}',
  tags: ['Entities'],
  summary: 'Show distributed virtual portgroup details',
  description: 'Show distributed virtual portgroup details',
  operationId: 'getDistributedVirtualPortgroup',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    query: z.object({ time: TimeParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DistributedVirtualPortgroupSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesDistributedVirtualSwitchesRoute = createRoute({
  method: 'get',
  path: '/entities/distributed-virtual-switches',
  tags: ['Entities'],
  summary: 'List distributed virtual switches',
  description: 'List distributed virtual switches',
  operationId: 'listDistributedVirtualSwitches',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesDistributedVirtualSwitchesIdRoute = createRoute({
  method: 'get',
  path: '/entities/distributed-virtual-switches/{id}',
  tags: ['Entities'],
  summary: 'Show distributed virtual switch details',
  description: 'Show distributed virtual switch details',
  operationId: 'getDistributedVirtualSwitch',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    query: z.object({ time: TimeParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DistributedVirtualSwitchSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesFirewallRulesRoute = createRoute({
  method: 'get',
  path: '/entities/firewall-rules',
  tags: ['Entities'],
  summary: 'List firewall rules',
  description: 'List firewall rules',
  operationId: 'listFirewallRules',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesFirewallRulesIdRoute = createRoute({
  method: 'get',
  path: '/entities/firewall-rules/{id}',
  tags: ['Entities'],
  summary: 'Show firewall rule details',
  description: 'Show firewall rule details',
  operationId: 'getFirewallRule',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    query: z.object({ time: TimeParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BaseFirewallRuleSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesFirewallsRoute = createRoute({
  method: 'get',
  path: '/entities/firewalls',
  tags: ['Entities'],
  summary: 'List firewalls',
  description: 'List firewalls',
  operationId: 'listFirewalls',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesFirewallsIdRoute = createRoute({
  method: 'get',
  path: '/entities/firewalls/{id}',
  tags: ['Entities'],
  summary: 'Show firewall details',
  description: 'Show firewall details',
  operationId: 'getFirewall',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    query: z.object({ time: TimeParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BaseFirewallRuleSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesFlowsRoute = createRoute({
  method: 'get',
  path: '/entities/flows',
  tags: ['Entities'],
  summary: 'List flows',
  description: 'List flows',
  operationId: 'getFlows',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesFlowsIdRoute = createRoute({
  method: 'get',
  path: '/entities/flows/{id}',
  tags: ['Entities'],
  summary: 'Show flow details',
  description: 'Show flow details',
  operationId: 'getFlow',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    query: z.object({ time: TimeParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: FlowSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesFoldersRoute = createRoute({
  method: 'get',
  path: '/entities/folders',
  tags: ['Entities'],
  summary: 'List folders',
  description: 'List folders',
  operationId: 'listFolders',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesFoldersIdRoute = createRoute({
  method: 'get',
  path: '/entities/folders/{id}',
  tags: ['Entities'],
  summary: 'Show folder details',
  description: 'Show folder details',
  operationId: 'getFolder',
  request: {
    query: z.object({ time: TimeParamsSchema }),
    params: z.object({ id: IdentifierParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: FolderSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesHostsRoute = createRoute({
  method: 'get',
  path: '/entities/hosts',
  tags: ['Entities'],
  summary: 'List hosts',
  description: 'List hosts',
  operationId: 'listHosts',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesHostsIdRoute = createRoute({
  method: 'get',
  path: '/entities/hosts/{id}',
  tags: ['Entities'],
  summary: 'Show host details',
  description: 'Show host details',
  operationId: 'getHost',
  request: {
    query: z.object({ time: TimeParamsSchema }),
    params: z.object({ id: IdentifierParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: HostSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesIpSetsRoute = createRoute({
  method: 'get',
  path: '/entities/ip-sets',
  tags: ['Entities'],
  summary: 'List ip sets',
  description: 'List ip sets',
  operationId: 'listIPSets',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesIpSetsIdRoute = createRoute({
  method: 'get',
  path: '/entities/ip-sets/{id}',
  tags: ['Entities'],
  summary: 'Show ip set details',
  description: 'Show ip set details',
  operationId: 'getIPSet',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    query: z.object({ time: TimeParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BaseIPSetSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesLayer2NetworksRoute = createRoute({
  method: 'get',
  path: '/entities/layer2-networks',
  tags: ['Entities'],
  summary: 'List layer2 networks',
  description: 'List layer2 networks',
  operationId: 'listLayer2Networks',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesLayer2NetworksIdRoute = createRoute({
  method: 'get',
  path: '/entities/layer2-networks/{id}',
  tags: ['Entities'],
  summary: 'Show layer2 network details',
  description: 'Show layer2 network details',
  operationId: 'getLayer2Network',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    query: z.object({ time: TimeParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BaseL2NetworkSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postEntitiesNamesRoute = createRoute({
  method: 'post',
  path: '/entities/names',
  tags: ['Entities'],
  summary: 'Get names for entities',
  description: 'Get names for entities.Limit of 1000 entities in a single request.',
  operationId: 'getNames',
  request: {
    body: {
      description: 'Names Request',
      content: { 'application/json': { schema: NamesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: NamesResponseSchema } } },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesNamesIdRoute = createRoute({
  method: 'get',
  path: '/entities/names/{id}',
  tags: ['Entities'],
  summary: 'Get name of an entity',
  description: 'Get name of an entity',
  operationId: 'getName',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    query: z.object({ time: TimeParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: EntityNameSchema } } },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesNsxManagersRoute = createRoute({
  method: 'get',
  path: '/entities/nsx-managers',
  tags: ['Entities'],
  summary: 'List nsx managers',
  description: 'List nsx managers',
  operationId: 'listNSXManagers',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesNsxManagersIdRoute = createRoute({
  method: 'get',
  path: '/entities/nsx-managers/{id}',
  tags: ['Entities'],
  summary: 'Show nsx manager details',
  description: 'Show nsx manager details',
  operationId: 'getNSXManager',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    query: z.object({ time: TimeParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BaseNSXManagerSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesProblemsRoute = createRoute({
  method: 'get',
  path: '/entities/problems',
  tags: ['Entities'],
  summary: 'List problems',
  description: 'List problem events.',
  operationId: 'listProblemEvents',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesProblemsIdRoute = createRoute({
  method: 'get',
  path: '/entities/problems/{id}',
  tags: ['Entities'],
  summary: 'Show problem details',
  description: 'Show problem event details.',
  operationId: 'getProblemEvent',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    query: z.object({ time: TimeParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ProblemEventSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesSecurityGroupsRoute = createRoute({
  method: 'get',
  path: '/entities/security-groups',
  tags: ['Entities'],
  summary: 'List security groups',
  description: 'List security groups',
  operationId: 'listSecurityGroups',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesSecurityGroupsIdRoute = createRoute({
  method: 'get',
  path: '/entities/security-groups/{id}',
  tags: ['Entities'],
  summary: 'Show security group details',
  description: 'Show security group details',
  operationId: 'getSecurityGroup',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    query: z.object({ time: TimeParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BaseSecurityGroupSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesSecurityTagsRoute = createRoute({
  method: 'get',
  path: '/entities/security-tags',
  tags: ['Entities'],
  summary: 'List security tags',
  description: 'List security tags',
  operationId: 'listSecurityTags',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesSecurityTagsIdRoute = createRoute({
  method: 'get',
  path: '/entities/security-tags/{id}',
  tags: ['Entities'],
  summary: 'Show security tag details',
  description: 'Show security tag details',
  operationId: 'getSecurityTag',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    query: z.object({ time: TimeParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SecurityTagSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesServiceGroupsRoute = createRoute({
  method: 'get',
  path: '/entities/service-groups',
  tags: ['Entities'],
  summary: 'List service groups',
  description: 'List service groups',
  operationId: 'listServiceGroups',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesServiceGroupsIdRoute = createRoute({
  method: 'get',
  path: '/entities/service-groups/{id}',
  tags: ['Entities'],
  summary: 'Show service group details',
  description: 'Show service group details',
  operationId: 'getServiceGroup',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    query: z.object({ time: TimeParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BaseServiceGroupSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesServicesRoute = createRoute({
  method: 'get',
  path: '/entities/services',
  tags: ['Entities'],
  summary: 'List services',
  description: 'List services',
  operationId: 'listServices',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesServicesIdRoute = createRoute({
  method: 'get',
  path: '/entities/services/{id}',
  tags: ['Entities'],
  summary: 'Show service details',
  description: 'Show service details',
  operationId: 'getService',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    query: z.object({ time: TimeParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BaseServiceSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesVcDatacentersRoute = createRoute({
  method: 'get',
  path: '/entities/vc-datacenters',
  tags: ['Entities'],
  summary: 'List vCenter datacenters',
  description: 'List vCenter datacenters',
  operationId: 'listDatacenters',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesVcDatacentersIdRoute = createRoute({
  method: 'get',
  path: '/entities/vc-datacenters/{id}',
  tags: ['Entities'],
  summary: 'Show vCenter datacenter details',
  description: 'Show vCenter datacenter details',
  operationId: 'getDatacenter',
  request: {
    query: z.object({ time: TimeParamsSchema }),
    params: z.object({ id: IdentifierParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: VCDatacenterSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesVcenterManagersRoute = createRoute({
  method: 'get',
  path: '/entities/vcenter-managers',
  tags: ['Entities'],
  summary: 'List vCenter managers',
  description: 'List vCenter managers',
  operationId: 'listVcenterManagers',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesVcenterManagersIdRoute = createRoute({
  method: 'get',
  path: '/entities/vcenter-managers/{id}',
  tags: ['Entities'],
  summary: 'Show vCenter manager details',
  description: 'Show vCenter manager details',
  operationId: 'getVcenterManager',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    query: z.object({ time: TimeParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: VCenterManagerSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesVmknicsRoute = createRoute({
  method: 'get',
  path: '/entities/vmknics',
  tags: ['Entities'],
  summary: 'List vmknics',
  description: 'List vmknics',
  operationId: 'listVmknics',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesVmknicsIdRoute = createRoute({
  method: 'get',
  path: '/entities/vmknics/{id}',
  tags: ['Entities'],
  summary: 'Show vmknic details',
  description: 'Show vmknic details',
  operationId: 'getVmknic',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    query: z.object({ time: TimeParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: VmknicSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesVmsRoute = createRoute({
  method: 'get',
  path: '/entities/vms',
  tags: ['Entities'],
  summary: 'List vms',
  description: 'List vms',
  operationId: 'listVms',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesVmsIdRoute = createRoute({
  method: 'get',
  path: '/entities/vms/{id}',
  tags: ['Entities'],
  summary: 'Show vm details',
  description: 'Show vm details',
  operationId: 'getVm',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    query: z.object({ time: TimeParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BaseVirtualMachineSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesVnicsRoute = createRoute({
  method: 'get',
  path: '/entities/vnics',
  tags: ['Entities'],
  summary: 'List vnics',
  description: 'List vnics',
  operationId: 'listVnics',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getEntitiesVnicsIdRoute = createRoute({
  method: 'get',
  path: '/entities/vnics/{id}',
  tags: ['Entities'],
  summary: 'Show vnic details',
  description: 'Show vnic details',
  operationId: 'getVnic',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    query: z.object({ time: TimeParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BaseVnicSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getGroupsApplicationsRoute = createRoute({
  method: 'get',
  path: '/groups/applications',
  tags: ['Applications'],
  summary: 'List applications',
  description: 'List applications',
  operationId: 'listApplications',
  request: {
    query: z.object({
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      start_time: StartTimeParamsSchema,
      end_time: EndTimeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagedListResponseSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postGroupsApplicationsRoute = createRoute({
  method: 'post',
  path: '/groups/applications',
  tags: ['Applications'],
  summary: 'Create an application',
  description:
    'Application is a group of tiers. A tier is a group of virtual machines based on membership criteria. Tiers are bound to single\napplication. An application name is unique and should not conflict with another application name.',
  operationId: 'addApplication',
  request: {
    body: { content: { 'application/json': { schema: ApplicationRequestSchema } }, required: true },
  },
  responses: {
    201: { description: 'OK', content: { 'application/json': { schema: ApplicationSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getGroupsApplicationsIdRoute = createRoute({
  method: 'get',
  path: '/groups/applications/{id}',
  tags: ['Applications'],
  summary: 'Show application details',
  description: 'Show application details',
  operationId: 'getApplication',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ApplicationSchema } } },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteGroupsApplicationsIdRoute = createRoute({
  method: 'delete',
  path: '/groups/applications/{id}',
  tags: ['Applications'],
  summary: 'Delete an application',
  description:
    'Deleting an application deletes all the tiers of the application along with the application',
  operationId: 'deleteApplication',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    204: { description: 'Success' },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getGroupsApplicationsIdTiersRoute = createRoute({
  method: 'get',
  path: '/groups/applications/{id}/tiers',
  tags: ['Applications'],
  summary: 'List tiers of an application',
  description: 'List tiers of an application',
  operationId: 'listApplicationTiers',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: TierListResponseSchema } } },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postGroupsApplicationsIdTiersRoute = createRoute({
  method: 'post',
  path: '/groups/applications/{id}/tiers',
  tags: ['Applications'],
  summary: 'Create tier in application',
  description:
    'Create a tier of an application by with specified membership criteria. The membership criteria id defined in terms of\nvirtual machines or ip addresses/subnet. Please refer to API Guide on how to construct membership criteria.',
  operationId: 'addTier',
  request: {
    params: z.object({ id: IdentifierParamsSchema }),
    body: { content: { 'application/json': { schema: TierRequestSchema } }, required: true },
  },
  responses: {
    201: { description: 'OK', content: { 'application/json': { schema: TierSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getGroupsApplicationsIdTiersTierIdRoute = createRoute({
  method: 'get',
  path: '/groups/applications/{id}/tiers/{tier-id}',
  tags: ['Applications'],
  summary: 'Show tier details',
  description: 'Show tier details',
  operationId: 'getApplicationTier',
  request: {
    params: z.object({
      id: IdentifierParamsSchema,
      'tier-id': z
        .string()
        .openapi({
          param: { in: 'path', name: 'tier-id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: TierSchema } } },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteGroupsApplicationsIdTiersTierIdRoute = createRoute({
  method: 'delete',
  path: '/groups/applications/{id}/tiers/{tier-id}',
  tags: ['Applications'],
  summary: 'Delete tier',
  description: 'Delete tier of an application',
  operationId: 'deleteTier',
  request: {
    params: z.object({
      id: IdentifierParamsSchema,
      'tier-id': z
        .string()
        .openapi({
          param: { in: 'path', name: 'tier-id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'OK' },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getGroupsTiersTierIdRoute = createRoute({
  method: 'get',
  path: '/groups/tiers/{tier-id}',
  tags: ['Applications'],
  summary: 'Show tier details',
  description: 'Show tier details',
  operationId: 'getTier',
  request: {
    params: z.object({
      'tier-id': z
        .string()
        .openapi({
          param: { in: 'path', name: 'tier-id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'Authorization Header',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { format: 'NetworkInsight <token>', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: TierSchema } } },
    401: { description: 'Unauthorized' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getInfoVersionRoute = createRoute({
  method: 'get',
  path: '/info/version',
  tags: ['Info'],
  summary: 'Show version info',
  description: 'Show version info',
  operationId: 'getVersion',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: VersionResponseSchema } } },
    401: { description: 'Unauthorized' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getInfraNodesRoute = createRoute({
  method: 'get',
  path: '/infra/nodes',
  tags: ['Infrastructure'],
  summary: 'List nodes',
  description: 'Get list of infrastructure nodes. Only admin users can retrieve this information.',
  operationId: 'listNodes',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: NodeListResultSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getInfraNodesIdRoute = createRoute({
  method: 'get',
  path: '/infra/nodes/{id}',
  tags: ['Infrastructure'],
  summary: 'Show node details',
  description:
    'Get details of infrastructure nodes. Only admin users can get this information. The proxy id is\nrequired for adding a data source for selecting appropriate proxy node to add the data source.',
  operationId: 'getNode',
  request: { params: z.object({ id: IdentifierParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: NodeSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postMicroSegRecommendedRulesRoute = createRoute({
  method: 'post',
  path: '/micro-seg/recommended-rules',
  tags: ['Microsegmentation'],
  summary: 'Get logical recommended rules',
  description:
    'Get recommended firewall rules based on the flow data gathered by vRealize Network Insight.\nThis API provides service to retrieve recommended rules based on flow traffic that is observed between\ntwo groups OR for a single group based on all the inbound and outboud traffic for that group.\nIn case two groups are provided, both the groups should be of same type.\nCurrently supported groups are Application, Tier, NSXSecurityGroup, EC2SecurityGroup.',
  operationId: 'listRecommendedRules',
  request: {
    body: {
      description: 'Recommended Rules Request',
      content: { 'application/json': { schema: RecommendedRulesRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RecommendedRulesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postMicroSegRecommendedRulesNsxRoute = createRoute({
  method: 'post',
  path: '/micro-seg/recommended-rules/nsx',
  tags: ['Microsegmentation'],
  summary: 'Export recommended rules for NSX-V',
  description:
    'Export recommended firewall rules based on the flow data gathered by vRealize Network Insight in NSX-V compatible\nformat',
  operationId: 'exportNsxRecommendedRules',
  request: {
    body: {
      description: 'NSX Recommended Rules Request',
      content: { 'application/json': { schema: RecommendedRulesRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/octet-stream': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postSearchRoute = createRoute({
  method: 'post',
  path: '/search',
  tags: ['Search'],
  summary: 'Search entities',
  description:
    'Using search API you can search vRealize Network Insight entities by specifying entity type and filter expression.\nA filter expression is a predicate expression (similar to SQL where clause) used to define the search criteria.\nPlease refer to API Guide on details of how to construct filter expression. A successful search request will return a\nlist of entity ids that matches the search criteria.',
  operationId: 'searchEntities',
  request: {
    body: {
      description: 'Search Request',
      content: { 'application/json': { schema: SearchRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PagedListResponseWithTimeSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Error' },
  },
  security: [{ ApiKeyAuth: [] }],
})
