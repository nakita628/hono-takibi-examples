import { createRoute, z } from '@hono/zod-openapi'

const DNSConfigSchema = z
  .object({
    Options: z.array(z.string()).exactOptional(),
    Searches: z.array(z.string()).exactOptional(),
    Servers: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DNSConfig')

const PortSchema = z
  .object({
    HostNetwork: z.string().exactOptional(),
    Label: z.string().exactOptional(),
    To: z.int().exactOptional(),
    Value: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Port')

const NetworkResourceSchema = z
  .object({
    CIDR: z.string().exactOptional(),
    DNS: DNSConfigSchema.exactOptional(),
    Device: z.string().exactOptional(),
    DynamicPorts: z.array(PortSchema).exactOptional(),
    Hostname: z.string().exactOptional(),
    IP: z.string().exactOptional(),
    MBits: z.int().exactOptional(),
    Mode: z.string().exactOptional(),
    ReservedPorts: z.array(PortSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NetworkResource')

const PortMappingSchema = z
  .object({
    HostIP: z.string().exactOptional(),
    Label: z.string().exactOptional(),
    To: z.int().exactOptional(),
    Value: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PortMapping')

const AllocatedSharedResourcesSchema = z
  .object({
    DiskMB: z
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
    Networks: z.array(NetworkResourceSchema).exactOptional(),
    Ports: z.array(PortMappingSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AllocatedSharedResources')

const AllocatedCpuResourcesSchema = z
  .object({
    CpuShares: z
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
  .openapi('AllocatedCpuResources')

const AllocatedDeviceResourceSchema = z
  .object({
    DeviceIDs: z.array(z.string()).exactOptional(),
    Name: z.string().exactOptional(),
    Type: z.string().exactOptional(),
    Vendor: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AllocatedDeviceResource')

const AllocatedMemoryResourcesSchema = z
  .object({
    MemoryMB: z
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
    MemoryMaxMB: z
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
  .openapi('AllocatedMemoryResources')

const AllocatedTaskResourcesSchema = z
  .object({
    Cpu: AllocatedCpuResourcesSchema.exactOptional(),
    Devices: z.array(AllocatedDeviceResourceSchema).exactOptional(),
    Memory: AllocatedMemoryResourcesSchema.exactOptional(),
    Networks: z.array(NetworkResourceSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AllocatedTaskResources')

const AllocatedResourcesSchema = z
  .object({
    Shared: AllocatedSharedResourcesSchema.exactOptional(),
    Tasks: z.record(z.string(), AllocatedTaskResourcesSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AllocatedResources')

const AllocDeploymentStatusSchema = z
  .object({
    Canary: z.boolean().exactOptional(),
    Healthy: z.boolean().exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Timestamp: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AllocDeploymentStatus')

const DesiredTransitionSchema = z
  .object({ Migrate: z.boolean().exactOptional(), Reschedule: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('DesiredTransition')

const AffinitySchema = z
  .object({
    LTarget: z.string().exactOptional(),
    Operand: z.string().exactOptional(),
    RTarget: z.string().exactOptional(),
    Weight: z.int().min(-128).max(127).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Affinity')

const ConstraintSchema = z
  .object({
    LTarget: z.string().exactOptional(),
    Operand: z.string().exactOptional(),
    RTarget: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Constraint')

const MigrateStrategySchema = z
  .object({
    HealthCheck: z.string().exactOptional(),
    HealthyDeadline: z
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
    MaxParallel: z.int().exactOptional(),
    MinHealthyTime: z
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
  .openapi('MigrateStrategy')

const MultiregionRegionSchema = z
  .object({
    Count: z.int().exactOptional(),
    Datacenters: z.array(z.string()).exactOptional(),
    Meta: z.record(z.string(), z.string()).exactOptional(),
    Name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MultiregionRegion')

const MultiregionStrategySchema = z
  .object({ MaxParallel: z.int().exactOptional(), OnFailure: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('MultiregionStrategy')

const MultiregionSchema = z
  .object({
    Regions: z.array(MultiregionRegionSchema).exactOptional(),
    Strategy: MultiregionStrategySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Multiregion')

const ParameterizedJobConfigSchema = z
  .object({
    MetaOptional: z.array(z.string()).exactOptional(),
    MetaRequired: z.array(z.string()).exactOptional(),
    Payload: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ParameterizedJobConfig')

const PeriodicConfigSchema = z
  .object({
    Enabled: z.boolean().exactOptional(),
    ProhibitOverlap: z.boolean().exactOptional(),
    Spec: z.string().exactOptional(),
    SpecType: z.string().exactOptional(),
    TimeZone: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PeriodicConfig')

const ReschedulePolicySchema = z
  .object({
    Attempts: z.int().exactOptional(),
    Delay: z
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
    DelayFunction: z.string().exactOptional(),
    Interval: z
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
    MaxDelay: z
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
    Unlimited: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReschedulePolicy')

const SpreadTargetSchema = z
  .object({ Percent: z.int().min(0).max(255).exactOptional(), Value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('SpreadTarget')

const SpreadSchema = z
  .object({
    Attribute: z.string().exactOptional(),
    SpreadTarget: z.array(SpreadTargetSchema).exactOptional(),
    Weight: z.int().min(-128).max(127).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Spread')

const ConsulSchema = z
  .object({ Namespace: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Consul')

const EphemeralDiskSchema = z
  .object({
    Migrate: z.boolean().exactOptional(),
    SizeMB: z.int().exactOptional(),
    Sticky: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EphemeralDisk')

const RestartPolicySchema = z
  .object({
    Attempts: z.int().exactOptional(),
    Delay: z
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
    Interval: z
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
    Mode: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RestartPolicy')

const ScalingPolicySchema = z
  .object({
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Enabled: z.boolean().exactOptional(),
    ID: z.string().exactOptional(),
    Max: z
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
    Min: z
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
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Namespace: z.string().exactOptional(),
    Policy: z.record(z.string(), z.any()).exactOptional(),
    Target: z.record(z.string(), z.string()).exactOptional(),
    Type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScalingPolicy')

const CheckRestartSchema = z
  .object({
    Grace: z
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
    IgnoreWarnings: z.boolean().exactOptional(),
    Limit: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CheckRestart')

const ServiceCheckSchema = z
  .object({
    AddressMode: z.string().exactOptional(),
    Advertise: z.string().exactOptional(),
    Args: z.array(z.string()).exactOptional(),
    Body: z.string().exactOptional(),
    CheckRestart: CheckRestartSchema.exactOptional(),
    Command: z.string().exactOptional(),
    Expose: z.boolean().exactOptional(),
    FailuresBeforeCritical: z.int().exactOptional(),
    GRPCService: z.string().exactOptional(),
    GRPCUseTLS: z.boolean().exactOptional(),
    Header: z.record(z.string(), z.array(z.string())).exactOptional(),
    InitialStatus: z.string().exactOptional(),
    Interval: z
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
    Method: z.string().exactOptional(),
    Name: z.string().exactOptional(),
    OnUpdate: z.string().exactOptional(),
    Path: z.string().exactOptional(),
    PortLabel: z.string().exactOptional(),
    Protocol: z.string().exactOptional(),
    SuccessBeforePassing: z.int().exactOptional(),
    TLSSkipVerify: z.boolean().exactOptional(),
    TaskName: z.string().exactOptional(),
    Timeout: z
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
    Type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceCheck')

const ConsulIngressServiceSchema = z
  .object({ Hosts: z.array(z.string()).exactOptional(), Name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ConsulIngressService')

const ConsulIngressListenerSchema = z
  .object({
    Port: z.int().exactOptional(),
    Protocol: z.string().exactOptional(),
    Services: z.array(ConsulIngressServiceSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConsulIngressListener')

const ConsulGatewayTLSConfigSchema = z
  .object({
    CipherSuites: z.array(z.string()).exactOptional(),
    Enabled: z.boolean().exactOptional(),
    TLSMaxVersion: z.string().exactOptional(),
    TLSMinVersion: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConsulGatewayTLSConfig')

const ConsulIngressConfigEntrySchema = z
  .object({
    Listeners: z.array(ConsulIngressListenerSchema).exactOptional(),
    TLS: ConsulGatewayTLSConfigSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConsulIngressConfigEntry')

const ConsulGatewayBindAddressSchema = z
  .object({
    Address: z.string().exactOptional(),
    Name: z.string().exactOptional(),
    Port: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConsulGatewayBindAddress')

const ConsulGatewayProxySchema = z
  .object({
    Config: z.record(z.string(), z.any()).exactOptional(),
    ConnectTimeout: z
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
    EnvoyDNSDiscoveryType: z.string().exactOptional(),
    EnvoyGatewayBindAddresses: z.record(z.string(), ConsulGatewayBindAddressSchema).exactOptional(),
    EnvoyGatewayBindTaggedAddresses: z.boolean().exactOptional(),
    EnvoyGatewayNoDefaultBind: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConsulGatewayProxy')

const ConsulLinkedServiceSchema = z
  .object({
    CAFile: z.string().exactOptional(),
    CertFile: z.string().exactOptional(),
    KeyFile: z.string().exactOptional(),
    Name: z.string().exactOptional(),
    SNI: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConsulLinkedService')

const ConsulTerminatingConfigEntrySchema = z
  .object({ Services: z.array(ConsulLinkedServiceSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ConsulTerminatingConfigEntry')

const ConsulGatewaySchema = z
  .object({
    Ingress: ConsulIngressConfigEntrySchema.exactOptional(),
    Mesh: z.any().exactOptional(),
    Proxy: ConsulGatewayProxySchema.exactOptional(),
    Terminating: ConsulTerminatingConfigEntrySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConsulGateway')

const ConsulExposePathSchema = z
  .object({
    ListenerPort: z.string().exactOptional(),
    LocalPathPort: z.int().exactOptional(),
    Path: z.string().exactOptional(),
    Protocol: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConsulExposePath')

const ConsulExposeConfigSchema = z
  .object({ Path: z.array(ConsulExposePathSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ConsulExposeConfig')

const ConsulMeshGatewaySchema = z
  .object({ Mode: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ConsulMeshGateway')

const ConsulUpstreamSchema = z
  .object({
    Datacenter: z.string().exactOptional(),
    DestinationName: z.string().exactOptional(),
    DestinationNamespace: z.string().exactOptional(),
    LocalBindAddress: z.string().exactOptional(),
    LocalBindPort: z.int().exactOptional(),
    MeshGateway: ConsulMeshGatewaySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConsulUpstream')

const ConsulProxySchema = z
  .object({
    Config: z.record(z.string(), z.any()).exactOptional(),
    ExposeConfig: ConsulExposeConfigSchema.exactOptional(),
    LocalServiceAddress: z.string().exactOptional(),
    LocalServicePort: z.int().exactOptional(),
    Upstreams: z.array(ConsulUpstreamSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConsulProxy')

const ConsulSidecarServiceSchema = z
  .object({
    DisableDefaultTCPCheck: z.boolean().exactOptional(),
    Port: z.string().exactOptional(),
    Proxy: ConsulProxySchema.exactOptional(),
    Tags: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConsulSidecarService')

const LogConfigSchema = z
  .object({ MaxFileSizeMB: z.int().exactOptional(), MaxFiles: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('LogConfig')

const RequestedDeviceSchema = z
  .object({
    Affinities: z.array(AffinitySchema).exactOptional(),
    Constraints: z.array(ConstraintSchema).exactOptional(),
    Count: z.int().min(0).max(18446744073709552000).exactOptional(),
    Name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RequestedDevice')

const ResourcesSchema = z
  .object({
    CPU: z.int().exactOptional(),
    Cores: z.int().exactOptional(),
    Devices: z.array(RequestedDeviceSchema).exactOptional(),
    DiskMB: z.int().exactOptional(),
    IOPS: z.int().exactOptional(),
    MemoryMB: z.int().exactOptional(),
    MemoryMaxMB: z.int().exactOptional(),
    Networks: z.array(NetworkResourceSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Resources')

const SidecarTaskSchema = z
  .object({
    Config: z.record(z.string(), z.any()).exactOptional(),
    Driver: z.string().exactOptional(),
    Env: z.record(z.string(), z.string()).exactOptional(),
    KillSignal: z.string().exactOptional(),
    KillTimeout: z
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
    LogConfig: LogConfigSchema.exactOptional(),
    Meta: z.record(z.string(), z.string()).exactOptional(),
    Name: z.string().exactOptional(),
    Resources: ResourcesSchema.exactOptional(),
    ShutdownDelay: z
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
    User: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SidecarTask')

type ConsulConnectType = {
  Gateway?: z.infer<typeof ConsulGatewaySchema>
  Native?: boolean
  SidecarService?: z.infer<typeof ConsulSidecarServiceSchema>
  SidecarTask?: z.infer<typeof SidecarTaskSchema>
}

const ConsulConnectSchema: z.ZodType<ConsulConnectType> = z
  .object({
    Gateway: ConsulGatewaySchema.exactOptional(),
    Native: z.boolean().exactOptional(),
    SidecarService: ConsulSidecarServiceSchema.exactOptional(),
    SidecarTask: SidecarTaskSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConsulConnect')

type ServiceType = {
  Address?: string
  AddressMode?: string
  CanaryMeta?: { [key: string]: string }
  CanaryTags?: string[]
  CheckRestart?: z.infer<typeof CheckRestartSchema>
  Checks?: z.infer<typeof ServiceCheckSchema>[]
  Connect?: z.infer<typeof ConsulConnectSchema>
  EnableTagOverride?: boolean
  Meta?: { [key: string]: string }
  Name?: string
  OnUpdate?: string
  PortLabel?: string
  Provider?: string
  TaggedAddresses?: { [key: string]: string }
  Tags?: string[]
  TaskName?: string
}

const ServiceSchema: z.ZodType<ServiceType> = z
  .object({
    Address: z.string().exactOptional(),
    AddressMode: z.string().exactOptional(),
    CanaryMeta: z.record(z.string(), z.string()).exactOptional(),
    CanaryTags: z.array(z.string()).exactOptional(),
    CheckRestart: CheckRestartSchema.exactOptional(),
    Checks: z.array(ServiceCheckSchema).exactOptional(),
    Connect: ConsulConnectSchema.exactOptional(),
    EnableTagOverride: z.boolean().exactOptional(),
    Meta: z.record(z.string(), z.string()).exactOptional(),
    Name: z.string().exactOptional(),
    OnUpdate: z.string().exactOptional(),
    PortLabel: z.string().exactOptional(),
    Provider: z.string().exactOptional(),
    TaggedAddresses: z.record(z.string(), z.string()).exactOptional(),
    Tags: z.array(z.string()).exactOptional(),
    TaskName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Service')

const TaskArtifactSchema = z
  .object({
    GetterHeaders: z.record(z.string(), z.string()).exactOptional(),
    GetterMode: z.string().exactOptional(),
    GetterOptions: z.record(z.string(), z.string()).exactOptional(),
    GetterSource: z.string().exactOptional(),
    RelativeDest: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaskArtifact')

const TaskCSIPluginConfigSchema = z
  .object({
    HealthTimeout: z
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
    ID: z.string().exactOptional(),
    MountDir: z.string().exactOptional(),
    StagePublishBaseDir: z.string().exactOptional(),
    Type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaskCSIPluginConfig')

const DispatchPayloadConfigSchema = z
  .object({ File: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('DispatchPayloadConfig')

const TaskLifecycleSchema = z
  .object({ Hook: z.string().exactOptional(), Sidecar: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('TaskLifecycle')

const ChangeScriptSchema = z
  .object({
    Args: z.array(z.string()).exactOptional(),
    Command: z.string().exactOptional(),
    FailOnError: z.boolean().exactOptional(),
    Timeout: z
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
  .openapi('ChangeScript')

const WaitConfigSchema = z
  .object({
    Max: z
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
    Min: z
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
  .openapi('WaitConfig')

const TemplateSchema = z
  .object({
    ChangeMode: z.string().exactOptional(),
    ChangeScript: ChangeScriptSchema.exactOptional(),
    ChangeSignal: z.string().exactOptional(),
    DestPath: z.string().exactOptional(),
    EmbeddedTmpl: z.string().exactOptional(),
    Envvars: z.boolean().exactOptional(),
    Gid: z.int().exactOptional(),
    LeftDelim: z.string().exactOptional(),
    Perms: z.string().exactOptional(),
    RightDelim: z.string().exactOptional(),
    SourcePath: z.string().exactOptional(),
    Splay: z
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
    Uid: z.int().exactOptional(),
    VaultGrace: z
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
    Wait: WaitConfigSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Template')

const VaultSchema = z
  .object({
    ChangeMode: z.string().exactOptional(),
    ChangeSignal: z.string().exactOptional(),
    Env: z.boolean().exactOptional(),
    Namespace: z.string().exactOptional(),
    Policies: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Vault')

const VolumeMountSchema = z
  .object({
    Destination: z.string().exactOptional(),
    PropagationMode: z.string().exactOptional(),
    ReadOnly: z.boolean().exactOptional(),
    Volume: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VolumeMount')

type TaskType = {
  Affinities?: z.infer<typeof AffinitySchema>[]
  Artifacts?: z.infer<typeof TaskArtifactSchema>[]
  CSIPluginConfig?: z.infer<typeof TaskCSIPluginConfigSchema>
  Config?: { [key: string]: unknown }
  Constraints?: z.infer<typeof ConstraintSchema>[]
  DispatchPayload?: z.infer<typeof DispatchPayloadConfigSchema>
  Driver?: string
  Env?: { [key: string]: string }
  KillSignal?: string
  KillTimeout?: bigint
  Kind?: string
  Leader?: boolean
  Lifecycle?: z.infer<typeof TaskLifecycleSchema>
  LogConfig?: z.infer<typeof LogConfigSchema>
  Meta?: { [key: string]: string }
  Name?: string
  Resources?: z.infer<typeof ResourcesSchema>
  RestartPolicy?: z.infer<typeof RestartPolicySchema>
  ScalingPolicies?: z.infer<typeof ScalingPolicySchema>[]
  Services?: z.infer<typeof ServiceSchema>[]
  ShutdownDelay?: bigint
  Templates?: z.infer<typeof TemplateSchema>[]
  User?: string
  Vault?: z.infer<typeof VaultSchema>
  VolumeMounts?: z.infer<typeof VolumeMountSchema>[]
}

const TaskSchema: z.ZodType<TaskType> = z
  .object({
    Affinities: z.array(AffinitySchema).exactOptional(),
    Artifacts: z.array(TaskArtifactSchema).exactOptional(),
    CSIPluginConfig: TaskCSIPluginConfigSchema.exactOptional(),
    Config: z.record(z.string(), z.any()).exactOptional(),
    Constraints: z.array(ConstraintSchema).exactOptional(),
    DispatchPayload: DispatchPayloadConfigSchema.exactOptional(),
    Driver: z.string().exactOptional(),
    Env: z.record(z.string(), z.string()).exactOptional(),
    KillSignal: z.string().exactOptional(),
    KillTimeout: z
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
    Kind: z.string().exactOptional(),
    Leader: z.boolean().exactOptional(),
    Lifecycle: TaskLifecycleSchema.exactOptional(),
    LogConfig: LogConfigSchema.exactOptional(),
    Meta: z.record(z.string(), z.string()).exactOptional(),
    Name: z.string().exactOptional(),
    Resources: ResourcesSchema.exactOptional(),
    RestartPolicy: RestartPolicySchema.exactOptional(),
    ScalingPolicies: z.array(ScalingPolicySchema).exactOptional(),
    Services: z.array(ServiceSchema).exactOptional(),
    ShutdownDelay: z
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
    Templates: z.array(TemplateSchema).exactOptional(),
    User: z.string().exactOptional(),
    Vault: VaultSchema.exactOptional(),
    VolumeMounts: z.array(VolumeMountSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Task')

const UpdateStrategySchema = z
  .object({
    AutoPromote: z.boolean().exactOptional(),
    AutoRevert: z.boolean().exactOptional(),
    Canary: z.int().exactOptional(),
    HealthCheck: z.string().exactOptional(),
    HealthyDeadline: z
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
    MaxParallel: z.int().exactOptional(),
    MinHealthyTime: z
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
    ProgressDeadline: z
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
    Stagger: z
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
  .openapi('UpdateStrategy')

const CSIMountOptionsSchema = z
  .object({ FSType: z.string().exactOptional(), MountFlags: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('CSIMountOptions')

const VolumeRequestSchema = z
  .object({
    AccessMode: z.string().exactOptional(),
    AttachmentMode: z.string().exactOptional(),
    MountOptions: CSIMountOptionsSchema.exactOptional(),
    Name: z.string().exactOptional(),
    PerAlloc: z.boolean().exactOptional(),
    ReadOnly: z.boolean().exactOptional(),
    Source: z.string().exactOptional(),
    Type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VolumeRequest')

type TaskGroupType = {
  Affinities?: z.infer<typeof AffinitySchema>[]
  Constraints?: z.infer<typeof ConstraintSchema>[]
  Consul?: z.infer<typeof ConsulSchema>
  Count?: number
  EphemeralDisk?: z.infer<typeof EphemeralDiskSchema>
  MaxClientDisconnect?: bigint
  Meta?: { [key: string]: string }
  Migrate?: z.infer<typeof MigrateStrategySchema>
  Name?: string
  Networks?: z.infer<typeof NetworkResourceSchema>[]
  ReschedulePolicy?: z.infer<typeof ReschedulePolicySchema>
  RestartPolicy?: z.infer<typeof RestartPolicySchema>
  Scaling?: z.infer<typeof ScalingPolicySchema>
  Services?: z.infer<typeof ServiceSchema>[]
  ShutdownDelay?: bigint
  Spreads?: z.infer<typeof SpreadSchema>[]
  StopAfterClientDisconnect?: bigint
  Tasks?: z.infer<typeof TaskSchema>[]
  Update?: z.infer<typeof UpdateStrategySchema>
  Volumes?: { [key: string]: z.infer<typeof VolumeRequestSchema> }
}

const TaskGroupSchema: z.ZodType<TaskGroupType> = z
  .object({
    Affinities: z.array(AffinitySchema).exactOptional(),
    Constraints: z.array(ConstraintSchema).exactOptional(),
    Consul: ConsulSchema.exactOptional(),
    Count: z.int().exactOptional(),
    EphemeralDisk: EphemeralDiskSchema.exactOptional(),
    MaxClientDisconnect: z
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
    Meta: z.record(z.string(), z.string()).exactOptional(),
    Migrate: MigrateStrategySchema.exactOptional(),
    Name: z.string().exactOptional(),
    Networks: z.array(NetworkResourceSchema).exactOptional(),
    ReschedulePolicy: ReschedulePolicySchema.exactOptional(),
    RestartPolicy: RestartPolicySchema.exactOptional(),
    Scaling: ScalingPolicySchema.exactOptional(),
    Services: z.array(ServiceSchema).exactOptional(),
    ShutdownDelay: z
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
    Spreads: z.array(SpreadSchema).exactOptional(),
    StopAfterClientDisconnect: z
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
    Tasks: z.array(TaskSchema).exactOptional(),
    Update: UpdateStrategySchema.exactOptional(),
    Volumes: z.record(z.string(), VolumeRequestSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaskGroup')

type JobType = {
  Affinities?: z.infer<typeof AffinitySchema>[]
  AllAtOnce?: boolean
  Constraints?: z.infer<typeof ConstraintSchema>[]
  ConsulNamespace?: string
  ConsulToken?: string
  CreateIndex?: number
  Datacenters?: string[]
  DispatchIdempotencyToken?: string
  Dispatched?: boolean
  ID?: string
  JobModifyIndex?: number
  Meta?: { [key: string]: string }
  Migrate?: z.infer<typeof MigrateStrategySchema>
  ModifyIndex?: number
  Multiregion?: z.infer<typeof MultiregionSchema>
  Name?: string
  Namespace?: string
  NomadTokenID?: string
  ParameterizedJob?: z.infer<typeof ParameterizedJobConfigSchema>
  ParentID?: string
  Payload?: string
  Periodic?: z.infer<typeof PeriodicConfigSchema>
  Priority?: number
  Region?: string
  Reschedule?: z.infer<typeof ReschedulePolicySchema>
  Spreads?: z.infer<typeof SpreadSchema>[]
  Stable?: boolean
  Status?: string
  StatusDescription?: string
  Stop?: boolean
  SubmitTime?: bigint
  TaskGroups?: z.infer<typeof TaskGroupSchema>[]
  Type?: string
  Update?: z.infer<typeof UpdateStrategySchema>
  VaultNamespace?: string
  VaultToken?: string
  Version?: number
}

const JobSchema: z.ZodType<JobType> = z
  .object({
    Affinities: z.array(AffinitySchema).exactOptional(),
    AllAtOnce: z.boolean().exactOptional(),
    Constraints: z.array(ConstraintSchema).exactOptional(),
    ConsulNamespace: z.string().exactOptional(),
    ConsulToken: z.string().exactOptional(),
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Datacenters: z.array(z.string()).exactOptional(),
    DispatchIdempotencyToken: z.string().exactOptional(),
    Dispatched: z.boolean().exactOptional(),
    ID: z.string().exactOptional(),
    JobModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Meta: z.record(z.string(), z.string()).exactOptional(),
    Migrate: MigrateStrategySchema.exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Multiregion: MultiregionSchema.exactOptional(),
    Name: z.string().exactOptional(),
    Namespace: z.string().exactOptional(),
    NomadTokenID: z.string().exactOptional(),
    ParameterizedJob: ParameterizedJobConfigSchema.exactOptional(),
    ParentID: z.string().exactOptional(),
    Payload: z.string().exactOptional(),
    Periodic: PeriodicConfigSchema.exactOptional(),
    Priority: z.int().exactOptional(),
    Region: z.string().exactOptional(),
    Reschedule: ReschedulePolicySchema.exactOptional(),
    Spreads: z.array(SpreadSchema).exactOptional(),
    Stable: z.boolean().exactOptional(),
    Status: z.string().exactOptional(),
    StatusDescription: z.string().exactOptional(),
    Stop: z.boolean().exactOptional(),
    SubmitTime: z
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
    TaskGroups: z.array(TaskGroupSchema).exactOptional(),
    Type: z.string().exactOptional(),
    Update: UpdateStrategySchema.exactOptional(),
    VaultNamespace: z.string().exactOptional(),
    VaultToken: z.string().exactOptional(),
    Version: z.int().min(0).max(18446744073709552000).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Job')

const NodeScoreMetaSchema = z
  .object({
    NodeID: z.string().exactOptional(),
    NormScore: z.float64().exactOptional(),
    Scores: z.record(z.string(), z.float64()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NodeScoreMeta')

const AllocationMetricSchema = z
  .object({
    AllocationTime: z
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
    ClassExhausted: z.record(z.string(), z.int()).exactOptional(),
    ClassFiltered: z.record(z.string(), z.int()).exactOptional(),
    CoalescedFailures: z.int().exactOptional(),
    ConstraintFiltered: z.record(z.string(), z.int()).exactOptional(),
    DimensionExhausted: z.record(z.string(), z.int()).exactOptional(),
    NodesAvailable: z.record(z.string(), z.int()).exactOptional(),
    NodesEvaluated: z.int().exactOptional(),
    NodesExhausted: z.int().exactOptional(),
    NodesFiltered: z.int().exactOptional(),
    QuotaExhausted: z.array(z.string()).exactOptional(),
    ResourcesExhausted: z.record(z.string(), ResourcesSchema).exactOptional(),
    ScoreMetaData: z.array(NodeScoreMetaSchema).exactOptional(),
    Scores: z.record(z.string(), z.float64()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AllocationMetric')

const RescheduleEventSchema = z
  .object({
    PrevAllocID: z.string().exactOptional(),
    PrevNodeID: z.string().exactOptional(),
    RescheduleTime: z
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
  .openapi('RescheduleEvent')

const RescheduleTrackerSchema = z
  .object({ Events: z.array(RescheduleEventSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('RescheduleTracker')

const TaskEventSchema = z
  .object({
    Details: z.record(z.string(), z.string()).exactOptional(),
    DiskLimit: z
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
    DiskSize: z
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
    DisplayMessage: z.string().exactOptional(),
    DownloadError: z.string().exactOptional(),
    DriverError: z.string().exactOptional(),
    DriverMessage: z.string().exactOptional(),
    ExitCode: z.int().exactOptional(),
    FailedSibling: z.string().exactOptional(),
    FailsTask: z.boolean().exactOptional(),
    GenericSource: z.string().exactOptional(),
    KillError: z.string().exactOptional(),
    KillReason: z.string().exactOptional(),
    KillTimeout: z
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
    Message: z.string().exactOptional(),
    RestartReason: z.string().exactOptional(),
    SetupError: z.string().exactOptional(),
    Signal: z.int().exactOptional(),
    StartDelay: z
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
    TaskSignal: z.string().exactOptional(),
    TaskSignalReason: z.string().exactOptional(),
    Time: z
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
    Type: z.string().exactOptional(),
    ValidationError: z.string().exactOptional(),
    VaultError: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaskEvent')

const TaskHandleSchema = z
  .object({ DriverState: z.string().exactOptional(), Version: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('TaskHandle')

const TaskStateSchema = z
  .object({
    Events: z.array(TaskEventSchema).exactOptional(),
    Failed: z.boolean().exactOptional(),
    FinishedAt: z.iso.datetime({ offset: true }).exactOptional(),
    LastRestart: z.iso.datetime({ offset: true }).exactOptional(),
    Restarts: z.int().min(0).max(18446744073709552000).exactOptional(),
    StartedAt: z.iso.datetime({ offset: true }).exactOptional(),
    State: z.string().exactOptional(),
    TaskHandle: TaskHandleSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaskState')

type AllocationType = {
  AllocModifyIndex?: number
  AllocatedResources?: z.infer<typeof AllocatedResourcesSchema>
  ClientDescription?: string
  ClientStatus?: string
  CreateIndex?: number
  CreateTime?: bigint
  DeploymentID?: string
  DeploymentStatus?: z.infer<typeof AllocDeploymentStatusSchema>
  DesiredDescription?: string
  DesiredStatus?: string
  DesiredTransition?: z.infer<typeof DesiredTransitionSchema>
  EvalID?: string
  FollowupEvalID?: string
  ID?: string
  Job?: z.infer<typeof JobSchema>
  JobID?: string
  Metrics?: z.infer<typeof AllocationMetricSchema>
  ModifyIndex?: number
  ModifyTime?: bigint
  Name?: string
  Namespace?: string
  NextAllocation?: string
  NodeID?: string
  NodeName?: string
  PreemptedAllocations?: string[]
  PreemptedByAllocation?: string
  PreviousAllocation?: string
  RescheduleTracker?: z.infer<typeof RescheduleTrackerSchema>
  Resources?: z.infer<typeof ResourcesSchema>
  Services?: { [key: string]: string }
  TaskGroup?: string
  TaskResources?: { [key: string]: z.infer<typeof ResourcesSchema> }
  TaskStates?: { [key: string]: z.infer<typeof TaskStateSchema> }
}

type AllocationListStubType = {
  AllocatedResources?: z.infer<typeof AllocatedResourcesSchema>
  ClientDescription?: string
  ClientStatus?: string
  CreateIndex?: number
  CreateTime?: bigint
  DeploymentStatus?: z.infer<typeof AllocDeploymentStatusSchema>
  DesiredDescription?: string
  DesiredStatus?: string
  EvalID?: string
  FollowupEvalID?: string
  ID?: string
  JobID?: string
  JobType?: string
  JobVersion?: number
  ModifyIndex?: number
  ModifyTime?: bigint
  Name?: string
  Namespace?: string
  NodeID?: string
  NodeName?: string
  PreemptedAllocations?: string[]
  PreemptedByAllocation?: string
  RescheduleTracker?: z.infer<typeof RescheduleTrackerSchema>
  TaskGroup?: string
  TaskStates?: { [key: string]: z.infer<typeof TaskStateSchema> }
}

const AllocationListStubSchema: z.ZodType<AllocationListStubType> = z
  .object({
    AllocatedResources: AllocatedResourcesSchema.exactOptional(),
    ClientDescription: z.string().exactOptional(),
    ClientStatus: z.string().exactOptional(),
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    CreateTime: z
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
    DeploymentStatus: AllocDeploymentStatusSchema.exactOptional(),
    DesiredDescription: z.string().exactOptional(),
    DesiredStatus: z.string().exactOptional(),
    EvalID: z.string().exactOptional(),
    FollowupEvalID: z.string().exactOptional(),
    ID: z.string().exactOptional(),
    JobID: z.string().exactOptional(),
    JobType: z.string().exactOptional(),
    JobVersion: z.int().min(0).max(18446744073709552000).exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    ModifyTime: z
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
    Name: z.string().exactOptional(),
    Namespace: z.string().exactOptional(),
    NodeID: z.string().exactOptional(),
    NodeName: z.string().exactOptional(),
    PreemptedAllocations: z.array(z.string()).exactOptional(),
    PreemptedByAllocation: z.string().exactOptional(),
    RescheduleTracker: RescheduleTrackerSchema.exactOptional(),
    TaskGroup: z.string().exactOptional(),
    TaskStates: z.record(z.string(), TaskStateSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AllocationListStub')

const CSIControllerInfoSchema = z
  .object({
    SupportsAttachDetach: z.boolean().exactOptional(),
    SupportsClone: z.boolean().exactOptional(),
    SupportsCondition: z.boolean().exactOptional(),
    SupportsCreateDelete: z.boolean().exactOptional(),
    SupportsCreateDeleteSnapshot: z.boolean().exactOptional(),
    SupportsExpand: z.boolean().exactOptional(),
    SupportsGet: z.boolean().exactOptional(),
    SupportsGetCapacity: z.boolean().exactOptional(),
    SupportsListSnapshots: z.boolean().exactOptional(),
    SupportsListVolumes: z.boolean().exactOptional(),
    SupportsListVolumesAttachedNodes: z.boolean().exactOptional(),
    SupportsReadOnlyAttach: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CSIControllerInfo')

const CSITopologySchema = z
  .object({ Segments: z.record(z.string(), z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('CSITopology')

const CSINodeInfoSchema = z
  .object({
    AccessibleTopology: CSITopologySchema.exactOptional(),
    ID: z.string().exactOptional(),
    MaxVolumes: z
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
    RequiresNodeStageVolume: z.boolean().exactOptional(),
    SupportsCondition: z.boolean().exactOptional(),
    SupportsExpand: z.boolean().exactOptional(),
    SupportsStats: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CSINodeInfo')

const CSIInfoSchema = z
  .object({
    AllocID: z.string().exactOptional(),
    ControllerInfo: CSIControllerInfoSchema.exactOptional(),
    HealthDescription: z.string().exactOptional(),
    Healthy: z.boolean().exactOptional(),
    NodeInfo: CSINodeInfoSchema.exactOptional(),
    PluginID: z.string().exactOptional(),
    RequiresControllerPlugin: z.boolean().exactOptional(),
    RequiresTopologies: z.boolean().exactOptional(),
    UpdateTime: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CSIInfo')

type CSIPluginType = {
  Allocations?: z.infer<typeof AllocationListStubSchema>[]
  ControllerRequired?: boolean
  Controllers?: { [key: string]: z.infer<typeof CSIInfoSchema> }
  ControllersExpected?: number
  ControllersHealthy?: number
  CreateIndex?: number
  ID?: string
  ModifyIndex?: number
  Nodes?: { [key: string]: z.infer<typeof CSIInfoSchema> }
  NodesExpected?: number
  NodesHealthy?: number
  Provider?: string
  Version?: string
}

const AllocationSchema: z.ZodType<AllocationType> = z
  .object({
    AllocModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    AllocatedResources: AllocatedResourcesSchema.exactOptional(),
    ClientDescription: z.string().exactOptional(),
    ClientStatus: z.string().exactOptional(),
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    CreateTime: z
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
    DeploymentID: z.string().exactOptional(),
    DeploymentStatus: AllocDeploymentStatusSchema.exactOptional(),
    DesiredDescription: z.string().exactOptional(),
    DesiredStatus: z.string().exactOptional(),
    DesiredTransition: DesiredTransitionSchema.exactOptional(),
    EvalID: z.string().exactOptional(),
    FollowupEvalID: z.string().exactOptional(),
    ID: z.string().exactOptional(),
    Job: JobSchema.exactOptional(),
    JobID: z.string().exactOptional(),
    Metrics: AllocationMetricSchema.exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    ModifyTime: z
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
    Name: z.string().exactOptional(),
    Namespace: z.string().exactOptional(),
    NextAllocation: z.string().exactOptional(),
    NodeID: z.string().exactOptional(),
    NodeName: z.string().exactOptional(),
    PreemptedAllocations: z.array(z.string()).exactOptional(),
    PreemptedByAllocation: z.string().exactOptional(),
    PreviousAllocation: z.string().exactOptional(),
    RescheduleTracker: RescheduleTrackerSchema.exactOptional(),
    Resources: ResourcesSchema.exactOptional(),
    Services: z.record(z.string(), z.string()).exactOptional(),
    TaskGroup: z.string().exactOptional(),
    TaskResources: z.record(z.string(), ResourcesSchema).exactOptional(),
    TaskStates: z.record(z.string(), TaskStateSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Allocation')

const CSIVolumeCapabilitySchema = z
  .object({ AccessMode: z.string().exactOptional(), AttachmentMode: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('CSIVolumeCapability')

const CSITopologyRequestSchema = z
  .object({
    Preferred: z.array(CSITopologySchema).exactOptional(),
    Required: z.array(CSITopologySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CSITopologyRequest')

const CSISecretsSchema = z.record(z.string(), z.string()).openapi('CSISecrets')

type CSIVolumeType = {
  AccessMode?: string
  Allocations?: z.infer<typeof AllocationListStubSchema>[]
  AttachmentMode?: string
  Capacity?: bigint
  CloneID?: string
  Context?: { [key: string]: string }
  ControllerRequired?: boolean
  ControllersExpected?: number
  ControllersHealthy?: number
  CreateIndex?: number
  ExternalID?: string
  ID?: string
  ModifyIndex?: number
  MountOptions?: z.infer<typeof CSIMountOptionsSchema>
  Name?: string
  Namespace?: string
  NodesExpected?: number
  NodesHealthy?: number
  Parameters?: { [key: string]: string }
  PluginID?: string
  Provider?: string
  ProviderVersion?: string
  ReadAllocs?: { [key: string]: z.infer<typeof AllocationSchema> }
  RequestedCapabilities?: z.infer<typeof CSIVolumeCapabilitySchema>[]
  RequestedCapacityMax?: bigint
  RequestedCapacityMin?: bigint
  RequestedTopologies?: z.infer<typeof CSITopologyRequestSchema>
  ResourceExhausted?: string
  Schedulable?: boolean
  Secrets?: z.infer<typeof CSISecretsSchema>
  SnapshotID?: string
  Topologies?: z.infer<typeof CSITopologySchema>[]
  WriteAllocs?: { [key: string]: z.infer<typeof AllocationSchema> }
}

const CSIVolumeSchema: z.ZodType<CSIVolumeType> = z
  .object({
    AccessMode: z.string().exactOptional(),
    Allocations: z.array(AllocationListStubSchema).exactOptional(),
    AttachmentMode: z.string().exactOptional(),
    Capacity: z
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
    CloneID: z.string().exactOptional(),
    Context: z.record(z.string(), z.string()).exactOptional(),
    ControllerRequired: z.boolean().exactOptional(),
    ControllersExpected: z.int().exactOptional(),
    ControllersHealthy: z.int().exactOptional(),
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    ExternalID: z.string().exactOptional(),
    ID: z.string().exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    MountOptions: CSIMountOptionsSchema.exactOptional(),
    Name: z.string().exactOptional(),
    Namespace: z.string().exactOptional(),
    NodesExpected: z.int().exactOptional(),
    NodesHealthy: z.int().exactOptional(),
    Parameters: z.record(z.string(), z.string()).exactOptional(),
    PluginID: z.string().exactOptional(),
    Provider: z.string().exactOptional(),
    ProviderVersion: z.string().exactOptional(),
    ReadAllocs: z.record(z.string(), AllocationSchema).exactOptional(),
    RequestedCapabilities: z.array(CSIVolumeCapabilitySchema).exactOptional(),
    RequestedCapacityMax: z
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
    RequestedCapacityMin: z
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
    RequestedTopologies: CSITopologyRequestSchema.exactOptional(),
    ResourceExhausted: z.iso.datetime({ offset: true }).exactOptional(),
    Schedulable: z.boolean().exactOptional(),
    Secrets: CSISecretsSchema.exactOptional(),
    SnapshotID: z.string().exactOptional(),
    Topologies: z.array(CSITopologySchema).exactOptional(),
    WriteAllocs: z.record(z.string(), AllocationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CSIVolume')

type CSIVolumeCreateRequestType = {
  Namespace?: string
  Region?: string
  SecretID?: string
  Volumes?: z.infer<typeof CSIVolumeSchema>[]
}

type CSIVolumeRegisterRequestType = {
  Namespace?: string
  Region?: string
  SecretID?: string
  Volumes?: z.infer<typeof CSIVolumeSchema>[]
}

const EvaluationStubSchema = z
  .object({
    BlockedEval: z.string().exactOptional(),
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    CreateTime: z
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
    DeploymentID: z.string().exactOptional(),
    ID: z.string().exactOptional(),
    JobID: z.string().exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    ModifyTime: z
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
    Namespace: z.string().exactOptional(),
    NextEval: z.string().exactOptional(),
    NodeID: z.string().exactOptional(),
    PreviousEval: z.string().exactOptional(),
    Priority: z.int().exactOptional(),
    Status: z.string().exactOptional(),
    StatusDescription: z.string().exactOptional(),
    TriggeredBy: z.string().exactOptional(),
    Type: z.string().exactOptional(),
    WaitUntil: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EvaluationStub')

type EvaluationType = {
  AnnotatePlan?: boolean
  BlockedEval?: string
  ClassEligibility?: { [key: string]: boolean }
  CreateIndex?: number
  CreateTime?: bigint
  DeploymentID?: string
  EscapedComputedClass?: boolean
  FailedTGAllocs?: { [key: string]: z.infer<typeof AllocationMetricSchema> }
  ID?: string
  JobID?: string
  JobModifyIndex?: number
  ModifyIndex?: number
  ModifyTime?: bigint
  Namespace?: string
  NextEval?: string
  NodeID?: string
  NodeModifyIndex?: number
  PreviousEval?: string
  Priority?: number
  QueuedAllocations?: { [key: string]: number }
  QuotaLimitReached?: string
  RelatedEvals?: z.infer<typeof EvaluationStubSchema>[]
  SnapshotIndex?: number
  Status?: string
  StatusDescription?: string
  TriggeredBy?: string
  Type?: string
  Wait?: bigint
  WaitUntil?: string
}

const FieldDiffSchema = z
  .object({
    Annotations: z.array(z.string()).exactOptional(),
    Name: z.string().exactOptional(),
    New: z.string().exactOptional(),
    Old: z.string().exactOptional(),
    Type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FieldDiff')

const ObjectDiffSchema: z.ZodType<ObjectDiffType> = z
  .lazy(() =>
    z
      .object({
        Fields: z.array(FieldDiffSchema).exactOptional(),
        Name: z.string().exactOptional(),
        Objects: z.array(ObjectDiffSchema).exactOptional(),
        Type: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ObjectDiff')

const TaskDiffSchema = z
  .object({
    Annotations: z.array(z.string()).exactOptional(),
    Fields: z.array(FieldDiffSchema).exactOptional(),
    Name: z.string().exactOptional(),
    Objects: z.array(ObjectDiffSchema).exactOptional(),
    Type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaskDiff')

type TaskGroupDiffType = {
  Fields?: z.infer<typeof FieldDiffSchema>[]
  Name?: string
  Objects?: z.infer<typeof ObjectDiffSchema>[]
  Tasks?: z.infer<typeof TaskDiffSchema>[]
  Type?: string
  Updates?: { [key: string]: number }
}

const TaskGroupDiffSchema: z.ZodType<TaskGroupDiffType> = z
  .object({
    Fields: z.array(FieldDiffSchema).exactOptional(),
    Name: z.string().exactOptional(),
    Objects: z.array(ObjectDiffSchema).exactOptional(),
    Tasks: z.array(TaskDiffSchema).exactOptional(),
    Type: z.string().exactOptional(),
    Updates: z.record(z.string(), z.int().min(0).max(18446744073709552000)).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaskGroupDiff')

type JobDiffType = {
  Fields?: z.infer<typeof FieldDiffSchema>[]
  ID?: string
  Objects?: z.infer<typeof ObjectDiffSchema>[]
  TaskGroups?: z.infer<typeof TaskGroupDiffSchema>[]
  Type?: string
}

type JobPlanRequestType = {
  Diff?: boolean
  Job?: z.infer<typeof JobSchema>
  Namespace?: string
  PolicyOverride?: boolean
  Region?: string
  SecretID?: string
}

const DesiredUpdatesSchema = z
  .object({
    Canary: z.int().min(0).max(18446744073709552000).exactOptional(),
    DestructiveUpdate: z.int().min(0).max(18446744073709552000).exactOptional(),
    Ignore: z.int().min(0).max(18446744073709552000).exactOptional(),
    InPlaceUpdate: z.int().min(0).max(18446744073709552000).exactOptional(),
    Migrate: z.int().min(0).max(18446744073709552000).exactOptional(),
    Place: z.int().min(0).max(18446744073709552000).exactOptional(),
    Preemptions: z.int().min(0).max(18446744073709552000).exactOptional(),
    Stop: z.int().min(0).max(18446744073709552000).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DesiredUpdates')

type PlanAnnotationsType = {
  DesiredTGUpdates?: { [key: string]: z.infer<typeof DesiredUpdatesSchema> }
  PreemptedAllocs?: z.infer<typeof AllocationListStubSchema>[]
}

const PlanAnnotationsSchema: z.ZodType<PlanAnnotationsType> = z
  .object({
    DesiredTGUpdates: z.record(z.string(), DesiredUpdatesSchema).exactOptional(),
    PreemptedAllocs: z.array(AllocationListStubSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlanAnnotations')

const EvaluationSchema: z.ZodType<EvaluationType> = z
  .object({
    AnnotatePlan: z.boolean().exactOptional(),
    BlockedEval: z.string().exactOptional(),
    ClassEligibility: z.record(z.string(), z.boolean()).exactOptional(),
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    CreateTime: z
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
    DeploymentID: z.string().exactOptional(),
    EscapedComputedClass: z.boolean().exactOptional(),
    FailedTGAllocs: z.record(z.string(), AllocationMetricSchema).exactOptional(),
    ID: z.string().exactOptional(),
    JobID: z.string().exactOptional(),
    JobModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    ModifyTime: z
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
    Namespace: z.string().exactOptional(),
    NextEval: z.string().exactOptional(),
    NodeID: z.string().exactOptional(),
    NodeModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    PreviousEval: z.string().exactOptional(),
    Priority: z.int().exactOptional(),
    QueuedAllocations: z.record(z.string(), z.int()).exactOptional(),
    QuotaLimitReached: z.string().exactOptional(),
    RelatedEvals: z.array(EvaluationStubSchema).exactOptional(),
    SnapshotIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Status: z.string().exactOptional(),
    StatusDescription: z.string().exactOptional(),
    TriggeredBy: z.string().exactOptional(),
    Type: z.string().exactOptional(),
    Wait: z
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
    WaitUntil: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Evaluation')

const JobDiffSchema: z.ZodType<JobDiffType> = z
  .object({
    Fields: z.array(FieldDiffSchema).exactOptional(),
    ID: z.string().exactOptional(),
    Objects: z.array(ObjectDiffSchema).exactOptional(),
    TaskGroups: z.array(TaskGroupDiffSchema).exactOptional(),
    Type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobDiff')

type JobPlanResponseType = {
  Annotations?: z.infer<typeof PlanAnnotationsSchema>
  CreatedEvals?: z.infer<typeof EvaluationSchema>[]
  Diff?: z.infer<typeof JobDiffSchema>
  FailedTGAllocs?: { [key: string]: z.infer<typeof AllocationMetricSchema> }
  JobModifyIndex?: number
  NextPeriodicLaunch?: string
  Warnings?: string
}

type JobRegisterRequestType = {
  EnforceIndex?: boolean
  EvalPriority?: number
  Job?: z.infer<typeof JobSchema>
  JobModifyIndex?: number
  Namespace?: string
  PolicyOverride?: boolean
  PreserveCounts?: boolean
  Region?: string
  SecretID?: string
}

type JobValidateRequestType = {
  Job?: z.infer<typeof JobSchema>
  Namespace?: string
  Region?: string
  SecretID?: string
}

type JobVersionsResponseType = {
  Diffs?: z.infer<typeof JobDiffSchema>[]
  KnownLeader?: boolean
  LastContact?: bigint
  LastIndex?: number
  NextToken?: string
  RequestTime?: bigint
  Versions?: z.infer<typeof JobSchema>[]
}

type ObjectDiffType = {
  Fields?: z.infer<typeof FieldDiffSchema>[]
  Name?: string
  Objects?: ObjectDiffType[]
  Type?: string
}

const QuotaLimitSchema = z
  .object({
    Hash: z.string().exactOptional(),
    Region: z.string().exactOptional(),
    RegionLimit: ResourcesSchema.exactOptional(),
    VariablesLimit: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QuotaLimit')

type QuotaSpecType = {
  CreateIndex?: number
  Description?: string
  Limits?: z.infer<typeof QuotaLimitSchema>[]
  ModifyIndex?: number
  Name?: string
}

const JobACLSchema = z
  .object({
    Group: z.string().exactOptional(),
    JobID: z.string().exactOptional(),
    Namespace: z.string().exactOptional(),
    Task: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobACL')

const ACLPolicySchema = z
  .object({
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Description: z.string().exactOptional(),
    JobACL: JobACLSchema.exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Name: z.string().exactOptional(),
    Rules: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ACLPolicy')

const ACLPolicyListStubSchema = z
  .object({
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Description: z.string().exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ACLPolicyListStub')

const ACLTokenRoleLinkSchema = z
  .object({ ID: z.string().exactOptional(), Name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ACLTokenRoleLink')

const ACLTokenSchema = z
  .object({
    AccessorID: z.string().exactOptional(),
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    CreateTime: z.iso.datetime({ offset: true }).exactOptional(),
    ExpirationTTL: z
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
    ExpirationTime: z.iso.datetime({ offset: true }).exactOptional(),
    Global: z.boolean().exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Name: z.string().exactOptional(),
    Policies: z.array(z.string()).exactOptional(),
    Roles: z.array(ACLTokenRoleLinkSchema).exactOptional(),
    SecretID: z.string().exactOptional(),
    Type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ACLToken')

const ACLTokenListStubSchema = z
  .object({
    AccessorID: z.string().exactOptional(),
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    CreateTime: z.iso.datetime({ offset: true }).exactOptional(),
    Global: z.boolean().exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Name: z.string().exactOptional(),
    Policies: z.array(z.string()).exactOptional(),
    Roles: z.array(ACLTokenRoleLinkSchema).exactOptional(),
    Type: z.string().exactOptional(),
    expiration_time: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ACLTokenListStub')

const AllocStopResponseSchema = z
  .object({
    EvalID: z.string().exactOptional(),
    Index: z.int().min(0).max(18446744073709552000).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AllocStopResponse')

const AttributeSchema = z
  .object({
    Bool: z.boolean().exactOptional(),
    Float: z.float64().exactOptional(),
    Int: z
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
    String: z.string().exactOptional(),
    Unit: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Attribute')

const AutopilotConfigurationSchema = z
  .object({
    CleanupDeadServers: z.boolean().exactOptional(),
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    DisableUpgradeMigration: z.boolean().exactOptional(),
    EnableCustomUpgrades: z.boolean().exactOptional(),
    EnableRedundancyZones: z.boolean().exactOptional(),
    LastContactThreshold: z.string().exactOptional(),
    MaxTrailingLogs: z.int().min(0).max(18446744073709552000).exactOptional(),
    MinQuorum: z.int().min(0).exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    ServerStabilizationTime: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AutopilotConfiguration')

const CSIPluginSchema: z.ZodType<CSIPluginType> = z
  .object({
    Allocations: z.array(AllocationListStubSchema).exactOptional(),
    ControllerRequired: z.boolean().exactOptional(),
    Controllers: z.record(z.string(), CSIInfoSchema).exactOptional(),
    ControllersExpected: z.int().exactOptional(),
    ControllersHealthy: z.int().exactOptional(),
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    ID: z.string().exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Nodes: z.record(z.string(), CSIInfoSchema).exactOptional(),
    NodesExpected: z.int().exactOptional(),
    NodesHealthy: z.int().exactOptional(),
    Provider: z.string().exactOptional(),
    Version: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CSIPlugin')

const CSIPluginListStubSchema = z
  .object({
    ControllerRequired: z.boolean().exactOptional(),
    ControllersExpected: z.int().exactOptional(),
    ControllersHealthy: z.int().exactOptional(),
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    ID: z.string().exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    NodesExpected: z.int().exactOptional(),
    NodesHealthy: z.int().exactOptional(),
    Provider: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CSIPluginListStub')

const CSIPluginTypeSchema = z.string().openapi('CSIPluginType')

const CSISnapshotSchema = z
  .object({
    CreateTime: z
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
    ExternalSourceVolumeID: z.string().exactOptional(),
    ID: z.string().exactOptional(),
    IsReady: z.boolean().exactOptional(),
    Name: z.string().exactOptional(),
    Parameters: z.record(z.string(), z.string()).exactOptional(),
    PluginID: z.string().exactOptional(),
    Secrets: CSISecretsSchema.exactOptional(),
    SizeBytes: z
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
    SourceVolumeID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CSISnapshot')

const CSISnapshotCreateRequestSchema = z
  .object({
    Namespace: z.string().exactOptional(),
    Region: z.string().exactOptional(),
    SecretID: z.string().exactOptional(),
    Snapshots: z.array(CSISnapshotSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CSISnapshotCreateRequest')

const CSISnapshotCreateResponseSchema = z
  .object({
    KnownLeader: z.boolean().exactOptional(),
    LastContact: z
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
    LastIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    NextToken: z.string().exactOptional(),
    RequestTime: z
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
    Snapshots: z.array(CSISnapshotSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CSISnapshotCreateResponse')

const CSISnapshotListResponseSchema = z
  .object({
    KnownLeader: z.boolean().exactOptional(),
    LastContact: z
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
    LastIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    NextToken: z.string().exactOptional(),
    RequestTime: z
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
    Snapshots: z.array(CSISnapshotSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CSISnapshotListResponse')

const CSIVolumeAccessModeSchema = z.string().openapi('CSIVolumeAccessMode')

const CSIVolumeAttachmentModeSchema = z.string().openapi('CSIVolumeAttachmentMode')

const CSIVolumeCreateRequestSchema: z.ZodType<CSIVolumeCreateRequestType> = z
  .object({
    Namespace: z.string().exactOptional(),
    Region: z.string().exactOptional(),
    SecretID: z.string().exactOptional(),
    Volumes: z.array(CSIVolumeSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CSIVolumeCreateRequest')

const CSIVolumeExternalStubSchema = z
  .object({
    CapacityBytes: z
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
    CloneID: z.string().exactOptional(),
    ExternalID: z.string().exactOptional(),
    IsAbnormal: z.boolean().exactOptional(),
    PublishedExternalNodeIDs: z.array(z.string()).exactOptional(),
    SnapshotID: z.string().exactOptional(),
    Status: z.string().exactOptional(),
    VolumeContext: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CSIVolumeExternalStub')

const CSIVolumeListExternalResponseSchema = z
  .object({
    NextToken: z.string().exactOptional(),
    Volumes: z.array(CSIVolumeExternalStubSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CSIVolumeListExternalResponse')

const CSIVolumeListStubSchema = z
  .object({
    AccessMode: z.string().exactOptional(),
    AttachmentMode: z.string().exactOptional(),
    ControllerRequired: z.boolean().exactOptional(),
    ControllersExpected: z.int().exactOptional(),
    ControllersHealthy: z.int().exactOptional(),
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    CurrentReaders: z.int().exactOptional(),
    CurrentWriters: z.int().exactOptional(),
    ExternalID: z.string().exactOptional(),
    ID: z.string().exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Name: z.string().exactOptional(),
    Namespace: z.string().exactOptional(),
    NodesExpected: z.int().exactOptional(),
    NodesHealthy: z.int().exactOptional(),
    PluginID: z.string().exactOptional(),
    Provider: z.string().exactOptional(),
    ResourceExhausted: z.iso.datetime({ offset: true }).exactOptional(),
    Schedulable: z.boolean().exactOptional(),
    Topologies: z.array(CSITopologySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CSIVolumeListStub')

const CSIVolumeRegisterRequestSchema: z.ZodType<CSIVolumeRegisterRequestType> = z
  .object({
    Namespace: z.string().exactOptional(),
    Region: z.string().exactOptional(),
    SecretID: z.string().exactOptional(),
    Volumes: z.array(CSIVolumeSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CSIVolumeRegisterRequest')

const ConsulMeshConfigEntrySchema = z.any().openapi('ConsulMeshConfigEntry')

const ContextSchema = z.string().openapi('Context')

const DeploymentStateSchema = z
  .object({
    AutoRevert: z.boolean().exactOptional(),
    DesiredCanaries: z.int().exactOptional(),
    DesiredTotal: z.int().exactOptional(),
    HealthyAllocs: z.int().exactOptional(),
    PlacedAllocs: z.int().exactOptional(),
    PlacedCanaries: z.array(z.string()).exactOptional(),
    ProgressDeadline: z
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
    Promoted: z.boolean().exactOptional(),
    RequireProgressBy: z.iso.datetime({ offset: true }).exactOptional(),
    UnhealthyAllocs: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeploymentState')

const DeploymentSchema = z
  .object({
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    ID: z.string().exactOptional(),
    IsMultiregion: z.boolean().exactOptional(),
    JobCreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    JobID: z.string().exactOptional(),
    JobModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    JobSpecModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    JobVersion: z.int().min(0).max(18446744073709552000).exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Namespace: z.string().exactOptional(),
    Status: z.string().exactOptional(),
    StatusDescription: z.string().exactOptional(),
    TaskGroups: z.record(z.string(), DeploymentStateSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Deployment')

const DeploymentAllocHealthRequestSchema = z
  .object({
    DeploymentID: z.string().exactOptional(),
    HealthyAllocationIDs: z.array(z.string()).exactOptional(),
    Namespace: z.string().exactOptional(),
    Region: z.string().exactOptional(),
    SecretID: z.string().exactOptional(),
    UnhealthyAllocationIDs: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeploymentAllocHealthRequest')

const DeploymentPauseRequestSchema = z
  .object({
    DeploymentID: z.string().exactOptional(),
    Namespace: z.string().exactOptional(),
    Pause: z.boolean().exactOptional(),
    Region: z.string().exactOptional(),
    SecretID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeploymentPauseRequest')

const DeploymentPromoteRequestSchema = z
  .object({
    All: z.boolean().exactOptional(),
    DeploymentID: z.string().exactOptional(),
    Groups: z.array(z.string()).exactOptional(),
    Namespace: z.string().exactOptional(),
    Region: z.string().exactOptional(),
    SecretID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeploymentPromoteRequest')

const DeploymentUnblockRequestSchema = z
  .object({
    DeploymentID: z.string().exactOptional(),
    Namespace: z.string().exactOptional(),
    Region: z.string().exactOptional(),
    SecretID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeploymentUnblockRequest')

const DeploymentUpdateResponseSchema = z
  .object({
    DeploymentModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    EvalCreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    EvalID: z.string().exactOptional(),
    LastIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    RequestTime: z
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
    RevertedJobVersion: z.int().min(0).max(18446744073709552000).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeploymentUpdateResponse')

const DrainMetadataSchema = z
  .object({
    AccessorID: z.string().exactOptional(),
    Meta: z.record(z.string(), z.string()).exactOptional(),
    StartedAt: z.iso.datetime({ offset: true }).exactOptional(),
    Status: z.string().exactOptional(),
    UpdatedAt: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DrainMetadata')

const DrainSpecSchema = z
  .object({
    Deadline: z
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
    IgnoreSystemJobs: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DrainSpec')

const DrainStatusSchema = z.string().openapi('DrainStatus')

const DrainStrategySchema = z
  .object({
    Deadline: z
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
    ForceDeadline: z.iso.datetime({ offset: true }).exactOptional(),
    IgnoreSystemJobs: z.boolean().exactOptional(),
    StartedAt: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DrainStrategy')

const DriverInfoSchema = z
  .object({
    Attributes: z.record(z.string(), z.string()).exactOptional(),
    Detected: z.boolean().exactOptional(),
    HealthDescription: z.string().exactOptional(),
    Healthy: z.boolean().exactOptional(),
    UpdateTime: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DriverInfo')

const DurationSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({ type: 'integer', format: 'int64' })
  .openapi('Duration')

const EvalOptionsSchema = z
  .object({ ForceReschedule: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('EvalOptions')

const FuzzyMatchSchema = z
  .object({ ID: z.string().exactOptional(), Scope: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('FuzzyMatch')

const FuzzySearchRequestSchema = z
  .object({
    AllowStale: z.boolean().exactOptional(),
    AuthToken: z.string().exactOptional(),
    Context: z.string().exactOptional(),
    Filter: z.string().exactOptional(),
    Headers: z.record(z.string(), z.string()).exactOptional(),
    Namespace: z.string().exactOptional(),
    NextToken: z.string().exactOptional(),
    Params: z.record(z.string(), z.string()).exactOptional(),
    PerPage: z.int32().exactOptional(),
    Prefix: z.string().exactOptional(),
    Region: z.string().exactOptional(),
    Reverse: z.boolean().exactOptional(),
    Text: z.string().exactOptional(),
    WaitIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    WaitTime: z
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
  .openapi('FuzzySearchRequest')

const FuzzySearchResponseSchema = z
  .object({
    KnownLeader: z.boolean().exactOptional(),
    LastContact: z
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
    LastIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Matches: z.record(z.string(), z.array(FuzzyMatchSchema)).exactOptional(),
    NextToken: z.string().exactOptional(),
    RequestTime: z
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
    Truncations: z.record(z.string(), z.boolean()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FuzzySearchResponse')

const GaugeValueSchema = z
  .object({
    Labels: z.record(z.string(), z.string()).exactOptional(),
    Name: z.string().exactOptional(),
    Value: z.float32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GaugeValue')

const HostNetworkInfoSchema = z
  .object({
    CIDR: z.string().exactOptional(),
    Interface: z.string().exactOptional(),
    Name: z.string().exactOptional(),
    ReservedPorts: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HostNetworkInfo')

const HostVolumeInfoSchema = z
  .object({ Path: z.string().exactOptional(), ReadOnly: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('HostVolumeInfo')

const JobChildrenSummarySchema = z
  .object({
    Dead: z
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
    Pending: z
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
    Running: z
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
  .openapi('JobChildrenSummary')

const JobDeregisterResponseSchema = z
  .object({
    EvalCreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    EvalID: z.string().exactOptional(),
    JobModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    KnownLeader: z.boolean().exactOptional(),
    LastContact: z
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
    LastIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    NextToken: z.string().exactOptional(),
    RequestTime: z
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
  .openapi('JobDeregisterResponse')

const JobDispatchRequestSchema = z
  .object({
    JobID: z.string().exactOptional(),
    Meta: z.record(z.string(), z.string()).exactOptional(),
    Payload: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobDispatchRequest')

const JobDispatchResponseSchema = z
  .object({
    DispatchedJobID: z.string().exactOptional(),
    EvalCreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    EvalID: z.string().exactOptional(),
    JobCreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    LastIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    RequestTime: z
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
  .openapi('JobDispatchResponse')

const JobEvaluateRequestSchema = z
  .object({
    EvalOptions: EvalOptionsSchema.exactOptional(),
    JobID: z.string().exactOptional(),
    Namespace: z.string().exactOptional(),
    Region: z.string().exactOptional(),
    SecretID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobEvaluateRequest')

const TaskGroupSummarySchema = z
  .object({
    Complete: z.int().exactOptional(),
    Failed: z.int().exactOptional(),
    Lost: z.int().exactOptional(),
    Queued: z.int().exactOptional(),
    Running: z.int().exactOptional(),
    Starting: z.int().exactOptional(),
    Unknown: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaskGroupSummary')

const JobSummarySchema = z
  .object({
    Children: JobChildrenSummarySchema.exactOptional(),
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    JobID: z.string().exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Namespace: z.string().exactOptional(),
    Summary: z.record(z.string(), TaskGroupSummarySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobSummary')

const JobListStubSchema = z
  .object({
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Datacenters: z.array(z.string()).exactOptional(),
    ID: z.string().exactOptional(),
    JobModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    JobSummary: JobSummarySchema.exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Name: z.string().exactOptional(),
    Namespace: z.string().exactOptional(),
    ParameterizedJob: z.boolean().exactOptional(),
    ParentID: z.string().exactOptional(),
    Periodic: z.boolean().exactOptional(),
    Priority: z.int().exactOptional(),
    Status: z.string().exactOptional(),
    StatusDescription: z.string().exactOptional(),
    Stop: z.boolean().exactOptional(),
    SubmitTime: z
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
    Type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobListStub')

const JobPlanRequestSchema: z.ZodType<JobPlanRequestType> = z
  .object({
    Diff: z.boolean().exactOptional(),
    Job: JobSchema.exactOptional(),
    Namespace: z.string().exactOptional(),
    PolicyOverride: z.boolean().exactOptional(),
    Region: z.string().exactOptional(),
    SecretID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobPlanRequest')

const JobPlanResponseSchema: z.ZodType<JobPlanResponseType> = z
  .object({
    Annotations: PlanAnnotationsSchema.exactOptional(),
    CreatedEvals: z.array(EvaluationSchema).exactOptional(),
    Diff: JobDiffSchema.exactOptional(),
    FailedTGAllocs: z.record(z.string(), AllocationMetricSchema).exactOptional(),
    JobModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    NextPeriodicLaunch: z.iso.datetime({ offset: true }).exactOptional(),
    Warnings: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobPlanResponse')

const JobRegisterRequestSchema: z.ZodType<JobRegisterRequestType> = z
  .object({
    EnforceIndex: z.boolean().exactOptional(),
    EvalPriority: z.int().exactOptional(),
    Job: JobSchema.exactOptional(),
    JobModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Namespace: z.string().exactOptional(),
    PolicyOverride: z.boolean().exactOptional(),
    PreserveCounts: z.boolean().exactOptional(),
    Region: z.string().exactOptional(),
    SecretID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobRegisterRequest')

const JobRegisterResponseSchema = z
  .object({
    EvalCreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    EvalID: z.string().exactOptional(),
    JobModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    KnownLeader: z.boolean().exactOptional(),
    LastContact: z
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
    LastIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    NextToken: z.string().exactOptional(),
    RequestTime: z
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
    Warnings: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobRegisterResponse')

const JobRevertRequestSchema = z
  .object({
    ConsulToken: z.string().exactOptional(),
    EnforcePriorVersion: z.int().min(0).max(18446744073709552000).exactOptional(),
    JobID: z.string().exactOptional(),
    JobVersion: z.int().min(0).max(18446744073709552000).exactOptional(),
    Namespace: z.string().exactOptional(),
    Region: z.string().exactOptional(),
    SecretID: z.string().exactOptional(),
    VaultToken: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobRevertRequest')

const ScalingEventSchema = z
  .object({
    Count: z
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
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Error: z.boolean().exactOptional(),
    EvalID: z.string().exactOptional(),
    Message: z.string().exactOptional(),
    Meta: z.record(z.string(), z.any()).exactOptional(),
    PreviousCount: z
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
    Time: z.int().min(0).max(18446744073709552000).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScalingEvent')

const TaskGroupScaleStatusSchema = z
  .object({
    Desired: z.int().exactOptional(),
    Events: z.array(ScalingEventSchema).exactOptional(),
    Healthy: z.int().exactOptional(),
    Placed: z.int().exactOptional(),
    Running: z.int().exactOptional(),
    Unhealthy: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaskGroupScaleStatus')

const JobScaleStatusResponseSchema = z
  .object({
    JobCreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    JobID: z.string().exactOptional(),
    JobModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    JobStopped: z.boolean().exactOptional(),
    Namespace: z.string().exactOptional(),
    TaskGroups: z.record(z.string(), TaskGroupScaleStatusSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobScaleStatusResponse')

const JobStabilityRequestSchema = z
  .object({
    JobID: z.string().exactOptional(),
    JobVersion: z.int().min(0).max(18446744073709552000).exactOptional(),
    Namespace: z.string().exactOptional(),
    Region: z.string().exactOptional(),
    SecretID: z.string().exactOptional(),
    Stable: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobStabilityRequest')

const JobStabilityResponseSchema = z
  .object({ Index: z.int().min(0).max(18446744073709552000).exactOptional() })
  .openapi({ required: [] })
  .openapi('JobStabilityResponse')

const JobValidateRequestSchema: z.ZodType<JobValidateRequestType> = z
  .object({
    Job: JobSchema.exactOptional(),
    Namespace: z.string().exactOptional(),
    Region: z.string().exactOptional(),
    SecretID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobValidateRequest')

const JobValidateResponseSchema = z
  .object({
    DriverConfigValidated: z.boolean().exactOptional(),
    Error: z.string().exactOptional(),
    ValidationErrors: z.array(z.string()).exactOptional(),
    Warnings: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobValidateResponse')

const JobVersionsResponseSchema: z.ZodType<JobVersionsResponseType> = z
  .object({
    Diffs: z.array(JobDiffSchema).exactOptional(),
    KnownLeader: z.boolean().exactOptional(),
    LastContact: z
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
    LastIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    NextToken: z.string().exactOptional(),
    RequestTime: z
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
    Versions: z.array(JobSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobVersionsResponse')

const JobsParseRequestSchema = z
  .object({
    Canonicalize: z.boolean().exactOptional(),
    JobHCL: z.string().exactOptional(),
    hclv1: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobsParseRequest')

const SampledValueSchema = z
  .object({
    Count: z.int().exactOptional(),
    Labels: z.record(z.string(), z.string()).exactOptional(),
    Max: z.float64().exactOptional(),
    Mean: z.float64().exactOptional(),
    Min: z.float64().exactOptional(),
    Name: z.string().exactOptional(),
    Rate: z.float64().exactOptional(),
    Stddev: z.float64().exactOptional(),
    Sum: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SampledValue')

const PointValueSchema = z
  .object({ Name: z.string().exactOptional(), Points: z.array(z.float32()).exactOptional() })
  .openapi({ required: [] })
  .openapi('PointValue')

const MetricsSummarySchema = z
  .object({
    Counters: z.array(SampledValueSchema).exactOptional(),
    Gauges: z.array(GaugeValueSchema).exactOptional(),
    Points: z.array(PointValueSchema).exactOptional(),
    Samples: z.array(SampledValueSchema).exactOptional(),
    Timestamp: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MetricsSummary')

const NamespaceCapabilitiesSchema = z
  .object({
    DisabledTaskDrivers: z.array(z.string()).exactOptional(),
    EnabledTaskDrivers: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NamespaceCapabilities')

const NamespaceSchema = z
  .object({
    Capabilities: NamespaceCapabilitiesSchema.exactOptional(),
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Description: z.string().exactOptional(),
    Meta: z.record(z.string(), z.string()).exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Name: z.string().exactOptional(),
    Quota: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Namespace')

const NodeEventSchema = z
  .object({
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Details: z.record(z.string(), z.string()).exactOptional(),
    Message: z.string().exactOptional(),
    Subsystem: z.string().exactOptional(),
    Timestamp: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NodeEvent')

const NodeCpuResourcesSchema = z
  .object({
    CpuShares: z
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
    ReservableCpuCores: z.array(z.int().min(0).max(65535)).exactOptional(),
    TotalCpuCores: z.int().min(0).max(65535).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NodeCpuResources')

const NodeDeviceLocalitySchema = z
  .object({ PciBusID: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('NodeDeviceLocality')

const NodeDeviceSchema = z
  .object({
    HealthDescription: z.string().exactOptional(),
    Healthy: z.boolean().exactOptional(),
    ID: z.string().exactOptional(),
    Locality: NodeDeviceLocalitySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NodeDevice')

const NodeDeviceResourceSchema = z
  .object({
    Attributes: z.record(z.string(), AttributeSchema).exactOptional(),
    Instances: z.array(NodeDeviceSchema).exactOptional(),
    Name: z.string().exactOptional(),
    Type: z.string().exactOptional(),
    Vendor: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NodeDeviceResource')

const NodeDiskResourcesSchema = z
  .object({
    DiskMB: z
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
  .openapi('NodeDiskResources')

const NodeMemoryResourcesSchema = z
  .object({
    MemoryMB: z
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
  .openapi('NodeMemoryResources')

const NodeResourcesSchema = z
  .object({
    Cpu: NodeCpuResourcesSchema.exactOptional(),
    Devices: z.array(NodeDeviceResourceSchema).exactOptional(),
    Disk: NodeDiskResourcesSchema.exactOptional(),
    MaxDynamicPort: z.int().exactOptional(),
    Memory: NodeMemoryResourcesSchema.exactOptional(),
    MinDynamicPort: z.int().exactOptional(),
    Networks: z.array(NetworkResourceSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NodeResources')

const NodeReservedCpuResourcesSchema = z
  .object({ CpuShares: z.int().min(0).max(18446744073709552000).exactOptional() })
  .openapi({ required: [] })
  .openapi('NodeReservedCpuResources')

const NodeReservedDiskResourcesSchema = z
  .object({ DiskMB: z.int().min(0).max(18446744073709552000).exactOptional() })
  .openapi({ required: [] })
  .openapi('NodeReservedDiskResources')

const NodeReservedMemoryResourcesSchema = z
  .object({ MemoryMB: z.int().min(0).max(18446744073709552000).exactOptional() })
  .openapi({ required: [] })
  .openapi('NodeReservedMemoryResources')

const NodeReservedNetworkResourcesSchema = z
  .object({ ReservedHostPorts: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('NodeReservedNetworkResources')

const NodeReservedResourcesSchema = z
  .object({
    Cpu: NodeReservedCpuResourcesSchema.exactOptional(),
    Disk: NodeReservedDiskResourcesSchema.exactOptional(),
    Memory: NodeReservedMemoryResourcesSchema.exactOptional(),
    Networks: NodeReservedNetworkResourcesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NodeReservedResources')

const NodeSchema = z
  .object({
    Attributes: z.record(z.string(), z.string()).exactOptional(),
    CSIControllerPlugins: z.record(z.string(), CSIInfoSchema).exactOptional(),
    CSINodePlugins: z.record(z.string(), CSIInfoSchema).exactOptional(),
    CgroupParent: z.string().exactOptional(),
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Datacenter: z.string().exactOptional(),
    Drain: z.boolean().exactOptional(),
    DrainStrategy: DrainStrategySchema.exactOptional(),
    Drivers: z.record(z.string(), DriverInfoSchema).exactOptional(),
    Events: z.array(NodeEventSchema).exactOptional(),
    HTTPAddr: z.string().exactOptional(),
    HostNetworks: z.record(z.string(), HostNetworkInfoSchema).exactOptional(),
    HostVolumes: z.record(z.string(), HostVolumeInfoSchema).exactOptional(),
    ID: z.string().exactOptional(),
    LastDrain: DrainMetadataSchema.exactOptional(),
    Links: z.record(z.string(), z.string()).exactOptional(),
    Meta: z.record(z.string(), z.string()).exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Name: z.string().exactOptional(),
    NodeClass: z.string().exactOptional(),
    NodeResources: NodeResourcesSchema.exactOptional(),
    Reserved: ResourcesSchema.exactOptional(),
    ReservedResources: NodeReservedResourcesSchema.exactOptional(),
    Resources: ResourcesSchema.exactOptional(),
    SchedulingEligibility: z.string().exactOptional(),
    Status: z.string().exactOptional(),
    StatusDescription: z.string().exactOptional(),
    StatusUpdatedAt: z
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
    TLSEnabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Node')

const NodeDrainUpdateResponseSchema = z
  .object({
    EvalCreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    EvalIDs: z.array(z.string()).exactOptional(),
    LastIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    NodeModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    RequestTime: z
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
  .openapi('NodeDrainUpdateResponse')

const NodeEligibilityUpdateResponseSchema = z
  .object({
    EvalCreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    EvalIDs: z.array(z.string()).exactOptional(),
    LastIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    NodeModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    RequestTime: z
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
  .openapi('NodeEligibilityUpdateResponse')

const NodeListStubSchema = z
  .object({
    Address: z.string().exactOptional(),
    Attributes: z.record(z.string(), z.string()).exactOptional(),
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Datacenter: z.string().exactOptional(),
    Drain: z.boolean().exactOptional(),
    Drivers: z.record(z.string(), DriverInfoSchema).exactOptional(),
    ID: z.string().exactOptional(),
    LastDrain: DrainMetadataSchema.exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Name: z.string().exactOptional(),
    NodeClass: z.string().exactOptional(),
    NodeResources: NodeResourcesSchema.exactOptional(),
    ReservedResources: NodeReservedResourcesSchema.exactOptional(),
    SchedulingEligibility: z.string().exactOptional(),
    Status: z.string().exactOptional(),
    StatusDescription: z.string().exactOptional(),
    Version: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NodeListStub')

const NodePurgeResponseSchema = z
  .object({
    EvalCreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    EvalIDs: z.array(z.string()).exactOptional(),
    NodeModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NodePurgeResponse')

const NodeUpdateDrainRequestSchema = z
  .object({
    DrainSpec: DrainSpecSchema.exactOptional(),
    MarkEligible: z.boolean().exactOptional(),
    Meta: z.record(z.string(), z.string()).exactOptional(),
    NodeID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NodeUpdateDrainRequest')

const NodeUpdateEligibilityRequestSchema = z
  .object({ Eligibility: z.string().exactOptional(), NodeID: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('NodeUpdateEligibilityRequest')

const OneTimeTokenSchema = z
  .object({
    AccessorID: z.string().exactOptional(),
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    ExpiresAt: z.iso.datetime({ offset: true }).exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    OneTimeSecretID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OneTimeToken')

const OneTimeTokenExchangeRequestSchema = z
  .object({ OneTimeSecretID: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('OneTimeTokenExchangeRequest')

const ServerHealthSchema = z
  .object({
    Address: z.string().exactOptional(),
    Healthy: z.boolean().exactOptional(),
    ID: z.string().exactOptional(),
    LastContact: z
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
    LastIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    LastTerm: z.int().min(0).max(18446744073709552000).exactOptional(),
    Leader: z.boolean().exactOptional(),
    Name: z.string().exactOptional(),
    SerfStatus: z.string().exactOptional(),
    StableSince: z.iso.datetime({ offset: true }).exactOptional(),
    Version: z.string().exactOptional(),
    Voter: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServerHealth')

const OperatorHealthReplySchema = z
  .object({
    FailureTolerance: z.int().exactOptional(),
    Healthy: z.boolean().exactOptional(),
    Servers: z.array(ServerHealthSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OperatorHealthReply')

const PeriodicForceResponseSchema = z
  .object({
    EvalCreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    EvalID: z.string().exactOptional(),
    Index: z.int().min(0).max(18446744073709552000).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PeriodicForceResponse')

const PreemptionConfigSchema = z
  .object({
    BatchSchedulerEnabled: z.boolean().exactOptional(),
    ServiceSchedulerEnabled: z.boolean().exactOptional(),
    SysBatchSchedulerEnabled: z.boolean().exactOptional(),
    SystemSchedulerEnabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PreemptionConfig')

const QuotaSpecSchema: z.ZodType<QuotaSpecType> = z
  .object({
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Description: z.string().exactOptional(),
    Limits: z.array(QuotaLimitSchema).exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QuotaSpec')

const QuotasSchema = z.any().openapi('Quotas')

const RaftServerSchema = z
  .object({
    Address: z.string().exactOptional(),
    ID: z.string().exactOptional(),
    Leader: z.boolean().exactOptional(),
    Node: z.string().exactOptional(),
    RaftProtocol: z.string().exactOptional(),
    Voter: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RaftServer')

const RaftConfigurationSchema = z
  .object({
    Index: z.int().min(0).max(18446744073709552000).exactOptional(),
    Servers: z.array(RaftServerSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RaftConfiguration')

const ScalingPolicyListStubSchema = z
  .object({
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Enabled: z.boolean().exactOptional(),
    ID: z.string().exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Target: z.record(z.string(), z.string()).exactOptional(),
    Type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScalingPolicyListStub')

const ScalingRequestSchema = z
  .object({
    Count: z
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
    Error: z.boolean().exactOptional(),
    Message: z.string().exactOptional(),
    Meta: z.record(z.string(), z.any()).exactOptional(),
    Namespace: z.string().exactOptional(),
    PolicyOverride: z.boolean().exactOptional(),
    Region: z.string().exactOptional(),
    SecretID: z.string().exactOptional(),
    Target: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScalingRequest')

const SchedulerAlgorithmSchema = z.string().openapi('SchedulerAlgorithm')

const SchedulerConfigurationSchema = z
  .object({
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    MemoryOversubscriptionEnabled: z.boolean().exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    PauseEvalBroker: z.boolean().exactOptional(),
    PreemptionConfig: PreemptionConfigSchema.exactOptional(),
    RejectJobRegistration: z.boolean().exactOptional(),
    SchedulerAlgorithm: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SchedulerConfiguration')

const SchedulerConfigurationResponseSchema = z
  .object({
    KnownLeader: z.boolean().exactOptional(),
    LastContact: z
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
    LastIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    NextToken: z.string().exactOptional(),
    RequestTime: z
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
    SchedulerConfig: SchedulerConfigurationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SchedulerConfigurationResponse')

const SchedulerSetConfigurationResponseSchema = z
  .object({
    LastIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    RequestTime: z
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
    Updated: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SchedulerSetConfigurationResponse')

const SearchRequestSchema = z
  .object({
    AllowStale: z.boolean().exactOptional(),
    AuthToken: z.string().exactOptional(),
    Context: z.string().exactOptional(),
    Filter: z.string().exactOptional(),
    Headers: z.record(z.string(), z.string()).exactOptional(),
    Namespace: z.string().exactOptional(),
    NextToken: z.string().exactOptional(),
    Params: z.record(z.string(), z.string()).exactOptional(),
    PerPage: z.int32().exactOptional(),
    Prefix: z.string().exactOptional(),
    Region: z.string().exactOptional(),
    Reverse: z.boolean().exactOptional(),
    WaitIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    WaitTime: z
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
  .openapi('SearchRequest')

const SearchResponseSchema = z
  .object({
    KnownLeader: z.boolean().exactOptional(),
    LastContact: z
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
    LastIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Matches: z.record(z.string(), z.array(z.string())).exactOptional(),
    NextToken: z.string().exactOptional(),
    RequestTime: z
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
    Truncations: z.record(z.string(), z.boolean()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchResponse')

const ServiceRegistrationSchema = z
  .object({
    Address: z.string().exactOptional(),
    AllocID: z.string().exactOptional(),
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Datacenter: z.string().exactOptional(),
    ID: z.string().exactOptional(),
    JobID: z.string().exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    Namespace: z.string().exactOptional(),
    NodeID: z.string().exactOptional(),
    Port: z.int().exactOptional(),
    ServiceName: z.string().exactOptional(),
    Tags: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceRegistration')

const TimeSchema = z.iso.datetime({ offset: true }).openapi('Time')

const VariableItemsSchema = z.record(z.string(), z.string()).openapi('VariableItems')

const VariableSchema = z
  .object({
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    CreateTime: z
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
    Items: VariableItemsSchema.exactOptional(),
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    ModifyTime: z
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
    Namespace: z.string().exactOptional(),
    Path: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Variable')

const VariableMetadataSchema = z
  .object({
    CreateIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    CreateTime: z
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
    ModifyIndex: z.int().min(0).max(18446744073709552000).exactOptional(),
    ModifyTime: z
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
    Namespace: z.string().exactOptional(),
    Path: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VariableMetadata')

const Float32Schema = z.float32().openapi('Float32')

const Float64Schema = z.float64().openapi('Float64')

const IntSchema = z.int().openapi('Int')

const Int8Schema = z.int().min(-128).max(127).openapi('Int8')

const Int32Schema = z.int32().openapi('Int32')

const Int64Schema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({ type: 'integer', format: 'int64' })
  .openapi('Int64')

const UintSchema = z.int().min(0).openapi('Uint')

const Uint8Schema = z.int().min(0).max(255).openapi('Uint8')

const Uint16Schema = z.int().min(0).max(65535).openapi('Uint16')

const Uint64Schema = z.int().min(0).max(18446744073709552000).openapi('Uint64')

const BadRequestResponseResponse = { description: 'Bad request' }

const CreateNamespaceResponseResponse = {
  description: '',
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const CreateQuotaSpecResponseResponse = {
  description: '',
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const DeleteACLPolicyResponseResponse = {
  description: '',
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const DeleteACLTokenResponseResponse = {
  description: '',
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const DeleteJobResponseResponse = {
  description: '',
  content: { 'application/json': { schema: JobDeregisterResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const DeleteNamespaceResponseResponse = {
  description: '',
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const DeleteOperatorRaftPeerResponseResponse = { description: '' }

const DeleteSnapshotResponseResponse = {
  description: '',
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const DeleteVariableResponseResponse = {
  description: '',
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const DeleteVolumeRegistrationResponseResponse = {
  description: '',
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const DetachOrDeleteVolumeResponseResponse = {
  description: '',
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const ForbiddenResponseResponse = { description: 'Forbidden' }

const GetACLPoliciesResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(ACLPolicyListStubSchema) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetACLPolicyResponseResponse = {
  description: '',
  content: { 'application/json': { schema: ACLPolicySchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetACLTokenResponseResponse = {
  description: '',
  content: { 'application/json': { schema: ACLTokenSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetACLTokenSelfResponseResponse = {
  description: '',
  content: { 'application/json': { schema: ACLTokenSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetACLTokensResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(ACLTokenListStubSchema) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetAllocationResponseResponse = {
  description: '',
  content: { 'application/json': { schema: AllocationSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetAllocationServicesResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(ServiceRegistrationSchema) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetAllocationsResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(AllocationListStubSchema) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetDeploymentAllocationsResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(AllocationListStubSchema) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetDeploymentResponseResponse = {
  description: '',
  content: { 'application/json': { schema: DeploymentSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetDeploymentsResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(DeploymentSchema) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetEvaluationAllocationsResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(AllocationListStubSchema) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetEvaluationResponseResponse = {
  description: '',
  content: { 'application/json': { schema: EvaluationSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetEvaluationsResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(EvaluationSchema) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetExternalVolumesResponseResponse = {
  description: '',
  content: { 'application/json': { schema: CSIVolumeListExternalResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetFuzzySearchResponseResponse = {
  description: '',
  content: { 'application/json': { schema: FuzzySearchResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetJobAllocationsResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(AllocationListStubSchema) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetJobDeploymentResponseResponse = {
  description: '',
  content: { 'application/json': { schema: DeploymentSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetJobDeploymentsResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(DeploymentSchema) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetJobEvaluationsResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(EvaluationSchema) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetJobResponseResponse = {
  description: '',
  content: { 'application/json': { schema: JobSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetJobScaleStatusResponseResponse = {
  description: '',
  content: { 'application/json': { schema: JobScaleStatusResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetJobSummaryResponseResponse = {
  description: '',
  content: { 'application/json': { schema: JobSummarySchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetJobVersionsResponseResponse = {
  description: '',
  content: { 'application/json': { schema: JobVersionsResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetJobsResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(JobListStubSchema) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetMetricsSummaryResponseResponse = {
  description: '',
  content: { 'application/json': { schema: MetricsSummarySchema } },
}

const GetNamespaceResponseResponse = {
  description: '',
  content: { 'application/json': { schema: NamespaceSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetNamespacesResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(NamespaceSchema) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetNodeAllocationsResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(AllocationListStubSchema) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetNodeResponseResponse = {
  description: '',
  content: { 'application/json': { schema: NodeSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetNodesResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(NodeListStubSchema) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetOperatorAutopilotConfigurationResponseResponse = {
  description: '',
  content: { 'application/json': { schema: AutopilotConfigurationSchema } },
}

const GetOperatorAutopilotHealthResponseResponse = {
  description: '',
  content: { 'application/json': { schema: OperatorHealthReplySchema } },
}

const GetOperatorRaftConfigurationResponseResponse = {
  description: '',
  content: { 'application/json': { schema: RaftConfigurationSchema } },
}

const GetOperatorSchedulerConfigurationResponseResponse = {
  description: '',
  content: { 'application/json': { schema: SchedulerConfigurationResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetPluginCSIResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(CSIPluginSchema) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetPluginsResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(CSIPluginListStubSchema) } },
}

const GetQuotaSpecResponseResponse = {
  description: '',
  content: { 'application/json': { schema: QuotaSpecSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetQuotasResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(z.any()) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetRegionsResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(z.string()) } },
}

const GetScalingPoliciesResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(ScalingPolicyListStubSchema) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetScalingPolicyResponseResponse = {
  description: '',
  content: { 'application/json': { schema: ScalingPolicySchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetSearchResponseResponse = {
  description: '',
  content: { 'application/json': { schema: SearchResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetSnapshotsResponseResponse = {
  description: '',
  content: { 'application/json': { schema: CSISnapshotListResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetStatusLeaderResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.string() } },
}

const GetStatusPeersResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(z.string()) } },
}

const GetVariableResponseResponse = {
  description: '',
  content: { 'application/json': { schema: VariableSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetVariablesListResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(VariableMetadataSchema) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetVolumeResponseResponse = {
  description: '',
  content: { 'application/json': { schema: CSIVolumeSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const GetVolumesResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.array(CSIVolumeListStubSchema) } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const InternalServerErrorResponseResponse = { description: 'Internal server error' }

const MethodNotAllowedResponseResponse = { description: 'Method not allowed' }

const NodeDrainUpdateResponseResponse = {
  description: '',
  content: { 'application/json': { schema: NodeDrainUpdateResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const NodeEligibilityUpdateResponseResponse = {
  description: '',
  content: { 'application/json': { schema: NodeEligibilityUpdateResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const NodePurgeResponseResponse = {
  description: '',
  content: { 'application/json': { schema: NodePurgeResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostACLBootstrapResponseResponse = {
  description: '',
  content: { 'application/json': { schema: ACLTokenSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostACLPolicyResponseResponse = {
  description: '',
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostACLTokenOnetimeExchangeResponseResponse = {
  description: '',
  content: { 'application/json': { schema: ACLTokenSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostACLTokenOnetimeResponseResponse = {
  description: '',
  content: { 'application/json': { schema: OneTimeTokenSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostACLTokenResponseResponse = {
  description: '',
  content: { 'application/json': { schema: ACLTokenSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostAllocationStopResponseResponse = {
  description: '',
  content: { 'application/json': { schema: AllocStopResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostDeploymentAllocationHealthResponseResponse = {
  description: '',
  content: { 'application/json': { schema: DeploymentUpdateResponseSchema } },
}

const PostDeploymentFailResponseResponse = {
  description: '',
  content: { 'application/json': { schema: DeploymentUpdateResponseSchema } },
}

const PostDeploymentPauseResponseResponse = {
  description: '',
  content: { 'application/json': { schema: DeploymentUpdateResponseSchema } },
}

const PostDeploymentPromoteResponseResponse = {
  description: '',
  content: { 'application/json': { schema: DeploymentUpdateResponseSchema } },
}

const PostDeploymentUnblockResponseResponse = {
  description: '',
  content: { 'application/json': { schema: DeploymentUpdateResponseSchema } },
}

const PostJobDispatchResponseResponse = {
  description: '',
  content: { 'application/json': { schema: JobDispatchResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostJobEvaluateResponseResponse = {
  description: '',
  content: { 'application/json': { schema: JobRegisterResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostJobParseResponseResponse = {
  description: '',
  content: { 'application/json': { schema: JobSchema } },
}

const PostJobPeriodicForceResponseResponse = {
  description: '',
  content: { 'application/json': { schema: PeriodicForceResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostJobPlanResponseResponse = {
  description: '',
  content: { 'application/json': { schema: JobPlanResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostJobResponseResponse = {
  description: '',
  content: { 'application/json': { schema: JobRegisterResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const PostJobRevertResponseResponse = {
  description: '',
  content: { 'application/json': { schema: JobRegisterResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostJobScalingResponseResponse = {
  description: '',
  content: { 'application/json': { schema: JobRegisterResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostJobStabilityResponseResponse = {
  description: '',
  content: { 'application/json': { schema: JobStabilityResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostJobValidateResponseResponse = {
  description: '',
  content: { 'application/json': { schema: JobValidateResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostNamespaceResponseResponse = {
  description: '',
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostOperatorSchedulerConfigurationResponseResponse = {
  description: '',
  content: { 'application/json': { schema: SchedulerSetConfigurationResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostQuotaSpecResponseResponse = {
  description: '',
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostSnapshotResponseResponse = {
  description: '',
  content: { 'application/json': { schema: CSISnapshotCreateResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostVariableResponseResponse = {
  description: '',
  content: { 'application/json': { schema: VariableSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostVolumeRegistrationResponseResponse = {
  description: '',
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const PostVolumeResponseResponse = {
  description: '',
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const PutOperatorAutopilotConfigurationResponseResponse = {
  description: '',
  content: { 'application/json': { schema: z.boolean() } },
}

const PutSystemGCResponseResponse = { description: '' }

const PutSystemReconcileSummariesResponseResponse = { description: '' }

const PutVariableResponseResponse = {
  description: '',
  content: { 'application/json': { schema: VariableSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
  }),
}

const RegisterJobResponseResponse = {
  description: '',
  content: { 'application/json': { schema: JobRegisterResponseSchema } },
  headers: z.object({
    'X-Nomad-Index': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier representing the current state of the requested resource. On a new Nomad cluster the value of this index starts at 1.',
        param: { required: false },
      }),
    'X-Nomad-KnownLeader': z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if there is a known cluster leader.',
        param: { required: false },
      }),
    'X-Nomad-LastContact': z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds that a server was last contacted by the leader node.',
        param: { required: false },
      }),
  }),
}

const DefaultResponse = { description: '' }

const ACLPolicyNameParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The ACL policy name.',
      in: 'path',
      name: 'policyName',
      required: true,
      schema: { type: 'string' },
    },
  })

const ACLTokenAccessorParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The token accessor ID.',
      in: 'path',
      name: 'tokenAccessor',
      required: true,
      schema: { type: 'string' },
    },
  })

const AllParamParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'Flag indicating whether to constrain by job creation index or not.',
      in: 'query',
      name: 'all',
      schema: { type: 'integer' },
      required: false,
    },
  })

const AllocIDParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Allocation ID.',
      in: 'path',
      name: 'allocID',
      required: true,
      schema: { type: 'string' },
    },
  })

const AllocNoShutdownDelayParamParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Flag indicating whether to delay shutdown when requesting an allocation stop.',
      in: 'query',
      name: 'no_shutdown_delay',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const AllocationResourcesParamParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Flag indicating whether to include resources in response.',
      in: 'query',
      name: 'resources',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const AllocationsTasksStatesParamParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Flag indicating whether to include task states in response.',
      in: 'query',
      name: 'task_states',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const DeploymentIDParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Deployment ID.',
      in: 'path',
      name: 'deploymentID',
      required: true,
      schema: { type: 'string' },
    },
  })

const EvalIDParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Evaluation ID.',
      in: 'path',
      name: 'evalID',
      required: true,
      schema: { type: 'string' },
    },
  })

const IdempotencyTokenParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Can be used to ensure operations are only run once.',
      in: 'query',
      name: 'idempotency_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const IndexHeaderParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'If set, wait until query exceeds given index. Must be provided with WaitParam.',
      in: 'header',
      name: 'index',
      schema: { type: 'integer' },
      required: false,
    },
  })

const JobAllocationsParamParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Specifies whether the list of allocations should include allocations from a previously registered job with the same ID. This is possible if the job is deregistered and reregistered.',
      in: 'query',
      name: 'all',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const JobDiffsParamParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Boolean flag indicating whether to compute job diffs.',
      in: 'query',
      name: 'diffs',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const JobGlobalParamParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Boolean flag indicating whether the operation should apply to all instances of the job globally.',
      in: 'query',
      name: 'global',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const JobNameParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The job identifier.',
      in: 'path',
      name: 'jobName',
      required: true,
      schema: { type: 'string' },
    },
  })

const JobPurgeParamParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Boolean flag indicating whether to purge allocations of the job after deleting.',
      in: 'query',
      name: 'purge',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const MetricsFormatParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The format the user requested for the metrics summary (e.g. prometheus)',
      in: 'query',
      name: 'format',
      schema: { type: 'string' },
      required: false,
    },
  })

const NamespaceNameParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The namespace identifier.',
      in: 'path',
      name: 'namespaceName',
      required: true,
      schema: { type: 'string' },
    },
  })

const NamespaceParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filters results based on the specified namespace.',
      in: 'query',
      name: 'namespace',
      schema: { type: 'string' },
      required: false,
    },
  })

const NextTokenParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Indicates where to start paging for queries that support pagination.',
      in: 'query',
      name: 'next_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const NodeIdParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The ID of the node.',
      in: 'path',
      name: 'nodeId',
      required: true,
      schema: { type: 'string' },
    },
  })

const NodeResourcesParamParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Whether or not to include the NodeResources and ReservedResources fields in the response.',
      in: 'query',
      name: 'resources',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const NomadTokenHeaderParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'A Nomad ACL token.',
      in: 'header',
      name: 'X-Nomad-Token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PerPageParamParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'Maximum number of results to return.',
      in: 'query',
      name: 'per_page',
      schema: { type: 'integer' },
      required: false,
    },
  })

const PluginIDParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The CSI plugin identifier.',
      in: 'path',
      name: 'pluginID',
      required: true,
      schema: { type: 'string' },
    },
  })

const PrefixParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Constrains results to jobs that start with the defined prefix',
      in: 'query',
      name: 'prefix',
      schema: { type: 'string' },
      required: false,
    },
  })

const QuotaSpecNameParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The quota spec identifier.',
      in: 'path',
      name: 'specName',
      required: true,
      schema: { type: 'string' },
    },
  })

const RegionParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filters results based on the specified region.',
      in: 'query',
      name: 'region',
      schema: { type: 'string' },
      required: false,
    },
  })

const ScalingPolicyIDParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The scaling policy identifier.',
      in: 'path',
      name: 'policyID',
      required: true,
      schema: { type: 'string' },
    },
  })

const SnapshotIDParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The ID of the snapshot to target.',
      in: 'query',
      name: 'snapshot_id',
      schema: { type: 'string' },
      required: false,
    },
  })

const StaleParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'If present, results will include stale reads.',
      in: 'query',
      name: 'stale',
      schema: { type: 'string' },
      required: false,
    },
  })

const VariableCASParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'A compare-and-set parameter for Nomad Variables',
      in: 'query',
      name: 'cas',
      schema: { type: 'integer' },
      required: false,
    },
  })

const VariablePathParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'A path to a Nomad Variable',
      in: 'path',
      name: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

const VolumeActionParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The action to perform on the Volume (create, detach, delete).',
      in: 'path',
      name: 'action',
      required: true,
      schema: { type: 'string' },
    },
  })

const VolumeForceParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Used to force the de-registration of a volume.',
      in: 'query',
      name: 'force',
      schema: { type: 'string' },
      required: false,
    },
  })

const VolumeIDParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Volume unique identifier.',
      in: 'path',
      name: 'volumeId',
      required: true,
      schema: { type: 'string' },
    },
  })

const VolumeNodeIDParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filters volume lists by node ID.',
      in: 'query',
      name: 'node_id',
      schema: { type: 'string' },
      required: false,
    },
  })

const VolumeNodeParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Specifies node to target volume operation for.',
      in: 'query',
      name: 'node',
      schema: { type: 'string' },
      required: false,
    },
  })

const VolumePluginIDParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filters volume lists by plugin ID.',
      in: 'query',
      name: 'plugin_id',
      schema: { type: 'string' },
      required: false,
    },
  })

const VolumeTypeParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filters volume lists to a specific type.',
      in: 'query',
      name: 'type',
      schema: { type: 'string' },
      required: false,
    },
  })

const WaitParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Provided with IndexParam to wait for change.',
      in: 'query',
      name: 'wait',
      schema: { type: 'string' },
      required: false,
    },
  })

const ACLPolicyRequestBody = {
  content: { 'application/json': { schema: ACLPolicySchema } },
  required: true,
}

const ACLTokenRequestBody = {
  content: { 'application/json': { schema: ACLTokenSchema } },
  required: true,
}

const AutopilotConfigurationRequestBody = {
  content: { 'application/json': { schema: AutopilotConfigurationSchema } },
  required: true,
}

const CSISnapshotCreateRequestRequestBody = {
  content: { 'application/json': { schema: CSISnapshotCreateRequestSchema } },
  required: true,
}

const CSIVolumeCreateRequestRequestBody = {
  content: { 'application/json': { schema: CSIVolumeCreateRequestSchema } },
  required: true,
}

const CSIVolumeRegisterRequestRequestBody = {
  content: { 'application/json': { schema: CSIVolumeRegisterRequestSchema } },
  required: true,
}

const DeploymentAllocHealthRequestRequestBody = {
  content: { 'application/json': { schema: DeploymentAllocHealthRequestSchema } },
  required: true,
}

const DeploymentPauseRequestRequestBody = {
  content: { 'application/json': { schema: DeploymentPauseRequestSchema } },
  required: true,
}

const DeploymentPromoteRequestRequestBody = {
  content: { 'application/json': { schema: DeploymentPromoteRequestSchema } },
  required: true,
}

const DeploymentUnblockRequestRequestBody = {
  content: { 'application/json': { schema: DeploymentUnblockRequestSchema } },
  required: true,
}

const FuzzySearchRequestRequestBody = {
  content: { 'application/json': { schema: FuzzySearchRequestSchema } },
  required: true,
}

const JobDispatchRequestRequestBody = {
  content: { 'application/json': { schema: JobDispatchRequestSchema } },
  required: true,
}

const JobEvaluateRequestRequestBody = {
  content: { 'application/json': { schema: JobEvaluateRequestSchema } },
  required: true,
}

const JobPlanRequestRequestBody = {
  content: { 'application/json': { schema: JobPlanRequestSchema } },
  required: true,
}

const JobRegisterRequestRequestBody = {
  content: { 'application/json': { schema: JobRegisterRequestSchema } },
  required: true,
}

const JobRevertRequestRequestBody = {
  content: { 'application/json': { schema: JobRevertRequestSchema } },
  required: true,
}

const JobStabilityRequestRequestBody = {
  content: { 'application/json': { schema: JobStabilityRequestSchema } },
  required: true,
}

const JobValidateRequestRequestBody = {
  content: { 'application/json': { schema: JobValidateRequestSchema } },
  required: true,
}

const JobsParseRequestRequestBody = {
  content: { 'application/json': { schema: JobsParseRequestSchema } },
  required: true,
}

const NamespaceRequestBody = {
  content: { 'application/json': { schema: NamespaceSchema } },
  required: true,
}

const NodeUpdateDrainRequestRequestBody = {
  content: { 'application/json': { schema: NodeUpdateDrainRequestSchema } },
  required: true,
}

const NodeUpdateEligibilityRequestRequestBody = {
  content: { 'application/json': { schema: NodeUpdateEligibilityRequestSchema } },
  required: true,
}

const OneTimeTokenExchangeRequestRequestBody = {
  content: { 'application/json': { schema: OneTimeTokenExchangeRequestSchema } },
  required: true,
}

const QuotaSpecRequestBody = {
  content: { 'application/json': { schema: QuotaSpecSchema } },
  required: true,
}

const ScalingRequestRequestBody = {
  content: { 'application/json': { schema: ScalingRequestSchema } },
  required: true,
}

const SchedulerConfigurationRequestBody = {
  content: { 'application/json': { schema: SchedulerConfigurationSchema } },
  required: true,
}

const SearchRequestRequestBody = {
  content: { 'application/json': { schema: SearchRequestSchema } },
  required: true,
}

const VariableRequestBody = {
  content: { 'application/json': { schema: VariableSchema } },
  required: true,
}

const XNomadTokenSecurityScheme = { in: 'header', name: 'X-Nomad-Token', type: 'apiKey' }

export const postAclBootstrapRoute = createRoute({
  method: 'post',
  path: '/acl/bootstrap',
  tags: ['ACL'],
  operationId: 'PostACLBootstrap',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
  },
  responses: {
    200: PostACLBootstrapResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getAclPoliciesRoute = createRoute({
  method: 'get',
  path: '/acl/policies',
  tags: ['ACL'],
  operationId: 'GetACLPolicies',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetACLPoliciesResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getAclPolicyPolicyNameRoute = createRoute({
  method: 'get',
  path: '/acl/policy/{policyName}',
  tags: ['ACL'],
  operationId: 'GetACLPolicy',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ policyName: ACLPolicyNameParamParamsSchema }),
  },
  responses: {
    200: GetACLPolicyResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postAclPolicyPolicyNameRoute = createRoute({
  method: 'post',
  path: '/acl/policy/{policyName}',
  tags: ['ACL'],
  operationId: 'PostACLPolicy',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ policyName: ACLPolicyNameParamParamsSchema }),
    body: { content: { 'application/json': { schema: ACLPolicySchema } }, required: true },
  },
  responses: {
    200: PostACLPolicyResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const deleteAclPolicyPolicyNameRoute = createRoute({
  method: 'delete',
  path: '/acl/policy/{policyName}',
  tags: ['ACL'],
  operationId: 'DeleteACLPolicy',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ policyName: ACLPolicyNameParamParamsSchema }),
  },
  responses: {
    200: DeleteACLPolicyResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getAclTokenRoute = createRoute({
  method: 'get',
  path: '/acl/token',
  tags: ['ACL'],
  operationId: 'GetACLTokenSelf',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetACLTokenSelfResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getAclTokenTokenAccessorRoute = createRoute({
  method: 'get',
  path: '/acl/token/{tokenAccessor}',
  tags: ['ACL'],
  operationId: 'GetACLToken',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ tokenAccessor: ACLTokenAccessorParamParamsSchema }),
  },
  responses: {
    200: GetACLTokenResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postAclTokenTokenAccessorRoute = createRoute({
  method: 'post',
  path: '/acl/token/{tokenAccessor}',
  tags: ['ACL'],
  operationId: 'PostACLToken',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ tokenAccessor: ACLTokenAccessorParamParamsSchema }),
    body: { content: { 'application/json': { schema: ACLTokenSchema } }, required: true },
  },
  responses: {
    200: PostACLTokenResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const deleteAclTokenTokenAccessorRoute = createRoute({
  method: 'delete',
  path: '/acl/token/{tokenAccessor}',
  tags: ['ACL'],
  operationId: 'DeleteACLToken',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ tokenAccessor: ACLTokenAccessorParamParamsSchema }),
  },
  responses: {
    200: DeleteACLTokenResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postAclTokenOnetimeRoute = createRoute({
  method: 'post',
  path: '/acl/token/onetime',
  tags: ['ACL'],
  operationId: 'PostACLTokenOnetime',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
  },
  responses: {
    200: PostACLTokenOnetimeResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postAclTokenOnetimeExchangeRoute = createRoute({
  method: 'post',
  path: '/acl/token/onetime/exchange',
  tags: ['ACL'],
  operationId: 'PostACLTokenOnetimeExchange',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    body: {
      content: { 'application/json': { schema: OneTimeTokenExchangeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: PostACLTokenOnetimeExchangeResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getAclTokensRoute = createRoute({
  method: 'get',
  path: '/acl/tokens',
  tags: ['ACL'],
  operationId: 'GetACLTokens',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetACLTokensResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getAllocationAllocIDRoute = createRoute({
  method: 'get',
  path: '/allocation/{allocID}',
  tags: ['Allocations'],
  operationId: 'GetAllocation',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ allocID: AllocIDParamParamsSchema }),
  },
  responses: {
    200: GetAllocationResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getAllocationAllocIDServicesRoute = createRoute({
  method: 'get',
  path: '/allocation/{allocID}/services',
  tags: ['Allocations'],
  operationId: 'GetAllocationServices',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ allocID: AllocIDParamParamsSchema }),
  },
  responses: {
    200: GetAllocationServicesResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postAllocationAllocIDStopRoute = createRoute({
  method: 'post',
  path: '/allocation/{allocID}/stop',
  tags: ['Allocations'],
  operationId: 'PostAllocationStop',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
      no_shutdown_delay: AllocNoShutdownDelayParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ allocID: AllocIDParamParamsSchema }),
  },
  responses: {
    200: PostAllocationStopResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getAllocationsRoute = createRoute({
  method: 'get',
  path: '/allocations',
  tags: ['Allocations'],
  operationId: 'GetAllocations',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
      resources: AllocationResourcesParamParamsSchema,
      task_states: AllocationsTasksStatesParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetAllocationsResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getDeploymentDeploymentIDRoute = createRoute({
  method: 'get',
  path: '/deployment/{deploymentID}',
  tags: ['Deployments'],
  operationId: 'GetDeployment',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ deploymentID: DeploymentIDParamParamsSchema }),
  },
  responses: {
    200: GetDeploymentResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postDeploymentAllocationHealthDeploymentIDRoute = createRoute({
  method: 'post',
  path: '/deployment/allocation-health/{deploymentID}',
  tags: ['Deployments'],
  operationId: 'PostDeploymentAllocationHealth',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ deploymentID: DeploymentIDParamParamsSchema }),
    body: {
      content: { 'application/json': { schema: DeploymentAllocHealthRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: PostDeploymentAllocationHealthResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getDeploymentAllocationsDeploymentIDRoute = createRoute({
  method: 'get',
  path: '/deployment/allocations/{deploymentID}',
  tags: ['Deployments'],
  operationId: 'GetDeploymentAllocations',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ deploymentID: DeploymentIDParamParamsSchema }),
  },
  responses: {
    200: GetDeploymentAllocationsResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postDeploymentFailDeploymentIDRoute = createRoute({
  method: 'post',
  path: '/deployment/fail/{deploymentID}',
  tags: ['Deployments'],
  operationId: 'PostDeploymentFail',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ deploymentID: DeploymentIDParamParamsSchema }),
  },
  responses: {
    200: PostDeploymentFailResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postDeploymentPauseDeploymentIDRoute = createRoute({
  method: 'post',
  path: '/deployment/pause/{deploymentID}',
  tags: ['Deployments'],
  operationId: 'PostDeploymentPause',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ deploymentID: DeploymentIDParamParamsSchema }),
    body: {
      content: { 'application/json': { schema: DeploymentPauseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: PostDeploymentPauseResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postDeploymentPromoteDeploymentIDRoute = createRoute({
  method: 'post',
  path: '/deployment/promote/{deploymentID}',
  tags: ['Deployments'],
  operationId: 'PostDeploymentPromote',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ deploymentID: DeploymentIDParamParamsSchema }),
    body: {
      content: { 'application/json': { schema: DeploymentPromoteRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: PostDeploymentPromoteResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postDeploymentUnblockDeploymentIDRoute = createRoute({
  method: 'post',
  path: '/deployment/unblock/{deploymentID}',
  tags: ['Deployments'],
  operationId: 'PostDeploymentUnblock',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ deploymentID: DeploymentIDParamParamsSchema }),
    body: {
      content: { 'application/json': { schema: DeploymentUnblockRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: PostDeploymentUnblockResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getDeploymentsRoute = createRoute({
  method: 'get',
  path: '/deployments',
  tags: ['Deployments'],
  operationId: 'GetDeployments',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetDeploymentsResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getEvaluationEvalIDRoute = createRoute({
  method: 'get',
  path: '/evaluation/{evalID}',
  tags: ['Evaluations'],
  operationId: 'GetEvaluation',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ evalID: EvalIDParamParamsSchema }),
  },
  responses: {
    200: GetEvaluationResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getEvaluationEvalIDAllocationsRoute = createRoute({
  method: 'get',
  path: '/evaluation/{evalID}/allocations',
  tags: ['Evaluations'],
  operationId: 'GetEvaluationAllocations',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ evalID: EvalIDParamParamsSchema }),
  },
  responses: {
    200: GetEvaluationAllocationsResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getEvaluationsRoute = createRoute({
  method: 'get',
  path: '/evaluations',
  tags: ['Evaluations'],
  operationId: 'GetEvaluations',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetEvaluationsResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getJobJobNameRoute = createRoute({
  method: 'get',
  path: '/job/{jobName}',
  tags: ['Jobs'],
  operationId: 'GetJob',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ jobName: JobNameParamParamsSchema }),
  },
  responses: {
    200: GetJobResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postJobJobNameRoute = createRoute({
  method: 'post',
  path: '/job/{jobName}',
  tags: ['Jobs'],
  operationId: 'PostJob',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ jobName: JobNameParamParamsSchema }),
    body: { content: { 'application/json': { schema: JobRegisterRequestSchema } }, required: true },
  },
  responses: {
    200: PostJobResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const deleteJobJobNameRoute = createRoute({
  method: 'delete',
  path: '/job/{jobName}',
  tags: ['Jobs'],
  operationId: 'DeleteJob',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
      purge: JobPurgeParamParamsSchema,
      global: JobGlobalParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ jobName: JobNameParamParamsSchema }),
  },
  responses: {
    200: DeleteJobResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getJobJobNameAllocationsRoute = createRoute({
  method: 'get',
  path: '/job/{jobName}/allocations',
  tags: ['Jobs'],
  operationId: 'GetJobAllocations',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
      all: JobAllocationsParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ jobName: JobNameParamParamsSchema }),
  },
  responses: {
    200: GetJobAllocationsResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getJobJobNameDeploymentRoute = createRoute({
  method: 'get',
  path: '/job/{jobName}/deployment',
  tags: ['Jobs'],
  operationId: 'GetJobDeployment',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ jobName: JobNameParamParamsSchema }),
  },
  responses: {
    200: GetJobDeploymentResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getJobJobNameDeploymentsRoute = createRoute({
  method: 'get',
  path: '/job/{jobName}/deployments',
  tags: ['Jobs'],
  operationId: 'GetJobDeployments',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
      all: AllParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ jobName: JobNameParamParamsSchema }),
  },
  responses: {
    200: GetJobDeploymentsResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postJobJobNameDispatchRoute = createRoute({
  method: 'post',
  path: '/job/{jobName}/dispatch',
  tags: ['Jobs'],
  operationId: 'PostJobDispatch',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ jobName: JobNameParamParamsSchema }),
    body: { content: { 'application/json': { schema: JobDispatchRequestSchema } }, required: true },
  },
  responses: {
    200: PostJobDispatchResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postJobJobNameEvaluateRoute = createRoute({
  method: 'post',
  path: '/job/{jobName}/evaluate',
  tags: ['Jobs'],
  operationId: 'PostJobEvaluate',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ jobName: JobNameParamParamsSchema }),
    body: { content: { 'application/json': { schema: JobEvaluateRequestSchema } }, required: true },
  },
  responses: {
    200: PostJobEvaluateResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getJobJobNameEvaluationsRoute = createRoute({
  method: 'get',
  path: '/job/{jobName}/evaluations',
  tags: ['Jobs'],
  operationId: 'GetJobEvaluations',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ jobName: JobNameParamParamsSchema }),
  },
  responses: {
    200: GetJobEvaluationsResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postJobJobNamePeriodicForceRoute = createRoute({
  method: 'post',
  path: '/job/{jobName}/periodic/force',
  tags: ['Jobs'],
  operationId: 'PostJobPeriodicForce',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ jobName: JobNameParamParamsSchema }),
  },
  responses: {
    200: PostJobPeriodicForceResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postJobJobNamePlanRoute = createRoute({
  method: 'post',
  path: '/job/{jobName}/plan',
  tags: ['Jobs'],
  operationId: 'PostJobPlan',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ jobName: JobNameParamParamsSchema }),
    body: { content: { 'application/json': { schema: JobPlanRequestSchema } }, required: true },
  },
  responses: {
    200: PostJobPlanResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postJobJobNameRevertRoute = createRoute({
  method: 'post',
  path: '/job/{jobName}/revert',
  tags: ['Jobs'],
  operationId: 'PostJobRevert',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ jobName: JobNameParamParamsSchema }),
    body: { content: { 'application/json': { schema: JobRevertRequestSchema } }, required: true },
  },
  responses: {
    200: PostJobRevertResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getJobJobNameScaleRoute = createRoute({
  method: 'get',
  path: '/job/{jobName}/scale',
  tags: ['Jobs'],
  operationId: 'GetJobScaleStatus',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ jobName: JobNameParamParamsSchema }),
  },
  responses: {
    200: GetJobScaleStatusResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postJobJobNameScaleRoute = createRoute({
  method: 'post',
  path: '/job/{jobName}/scale',
  tags: ['Jobs'],
  operationId: 'PostJobScalingRequest',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ jobName: JobNameParamParamsSchema }),
    body: { content: { 'application/json': { schema: ScalingRequestSchema } }, required: true },
  },
  responses: {
    200: PostJobScalingResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postJobJobNameStableRoute = createRoute({
  method: 'post',
  path: '/job/{jobName}/stable',
  tags: ['Jobs'],
  operationId: 'PostJobStability',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ jobName: JobNameParamParamsSchema }),
    body: {
      content: { 'application/json': { schema: JobStabilityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: PostJobStabilityResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getJobJobNameSummaryRoute = createRoute({
  method: 'get',
  path: '/job/{jobName}/summary',
  tags: ['Jobs'],
  operationId: 'GetJobSummary',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ jobName: JobNameParamParamsSchema }),
  },
  responses: {
    200: GetJobSummaryResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getJobJobNameVersionsRoute = createRoute({
  method: 'get',
  path: '/job/{jobName}/versions',
  tags: ['Jobs'],
  operationId: 'GetJobVersions',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
      diffs: JobDiffsParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ jobName: JobNameParamParamsSchema }),
  },
  responses: {
    200: GetJobVersionsResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getJobsRoute = createRoute({
  method: 'get',
  path: '/jobs',
  tags: ['Jobs'],
  operationId: 'GetJobs',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetJobsResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postJobsRoute = createRoute({
  method: 'post',
  path: '/jobs',
  tags: ['Jobs'],
  operationId: 'RegisterJob',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    body: { content: { 'application/json': { schema: JobRegisterRequestSchema } }, required: true },
  },
  responses: {
    200: RegisterJobResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postJobsParseRoute = createRoute({
  method: 'post',
  path: '/jobs/parse',
  tags: ['Jobs'],
  operationId: 'PostJobParse',
  request: {
    body: { content: { 'application/json': { schema: JobsParseRequestSchema } }, required: true },
  },
  responses: {
    200: PostJobParseResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getMetricsRoute = createRoute({
  method: 'get',
  path: '/metrics',
  tags: ['Metrics'],
  operationId: 'GetMetricsSummary',
  request: { query: z.object({ format: MetricsFormatParamParamsSchema }) },
  responses: {
    200: GetMetricsSummaryResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postNamespaceRoute = createRoute({
  method: 'post',
  path: '/namespace',
  tags: ['Namespaces'],
  operationId: 'CreateNamespace',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
  },
  responses: {
    200: CreateNamespaceResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getNamespaceNamespaceNameRoute = createRoute({
  method: 'get',
  path: '/namespace/{namespaceName}',
  tags: ['Namespaces'],
  operationId: 'GetNamespace',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ namespaceName: NamespaceNameParamParamsSchema }),
  },
  responses: {
    200: GetNamespaceResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postNamespaceNamespaceNameRoute = createRoute({
  method: 'post',
  path: '/namespace/{namespaceName}',
  tags: ['Namespaces'],
  operationId: 'PostNamespace',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ namespaceName: NamespaceNameParamParamsSchema }),
    body: { content: { 'application/json': { schema: NamespaceSchema } }, required: true },
  },
  responses: {
    200: PostNamespaceResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const deleteNamespaceNamespaceNameRoute = createRoute({
  method: 'delete',
  path: '/namespace/{namespaceName}',
  tags: ['Namespaces'],
  operationId: 'DeleteNamespace',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ namespaceName: NamespaceNameParamParamsSchema }),
  },
  responses: {
    200: DeleteNamespaceResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getNamespacesRoute = createRoute({
  method: 'get',
  path: '/namespaces',
  tags: ['Namespaces'],
  operationId: 'GetNamespaces',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetNamespacesResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getNodeNodeIdRoute = createRoute({
  method: 'get',
  path: '/node/{nodeId}',
  tags: ['Nodes'],
  operationId: 'GetNode',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ nodeId: NodeIdParamParamsSchema }),
  },
  responses: {
    200: GetNodeResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getNodeNodeIdAllocationsRoute = createRoute({
  method: 'get',
  path: '/node/{nodeId}/allocations',
  tags: ['Nodes'],
  operationId: 'GetNodeAllocations',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ nodeId: NodeIdParamParamsSchema }),
  },
  responses: {
    200: GetNodeAllocationsResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postNodeNodeIdDrainRoute = createRoute({
  method: 'post',
  path: '/node/{nodeId}/drain',
  tags: ['Nodes'],
  operationId: 'UpdateNodeDrain',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ nodeId: NodeIdParamParamsSchema }),
    body: {
      content: { 'application/json': { schema: NodeUpdateDrainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: NodeDrainUpdateResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postNodeNodeIdEligibilityRoute = createRoute({
  method: 'post',
  path: '/node/{nodeId}/eligibility',
  tags: ['Nodes'],
  operationId: 'UpdateNodeEligibility',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ nodeId: NodeIdParamParamsSchema }),
    body: {
      content: { 'application/json': { schema: NodeUpdateEligibilityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: NodeEligibilityUpdateResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postNodeNodeIdPurgeRoute = createRoute({
  method: 'post',
  path: '/node/{nodeId}/purge',
  tags: ['Nodes'],
  operationId: 'UpdateNodePurge',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ nodeId: NodeIdParamParamsSchema }),
  },
  responses: {
    200: NodePurgeResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getNodesRoute = createRoute({
  method: 'get',
  path: '/nodes',
  tags: ['Nodes'],
  operationId: 'GetNodes',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
      resources: NodeResourcesParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetNodesResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getOperatorAutopilotConfigurationRoute = createRoute({
  method: 'get',
  path: '/operator/autopilot/configuration',
  tags: ['Operator'],
  operationId: 'GetOperatorAutopilotConfiguration',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetOperatorAutopilotConfigurationResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const putOperatorAutopilotConfigurationRoute = createRoute({
  method: 'put',
  path: '/operator/autopilot/configuration',
  tags: ['Operator'],
  operationId: 'PutOperatorAutopilotConfiguration',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    body: {
      content: { 'application/json': { schema: AutopilotConfigurationSchema } },
      required: true,
    },
  },
  responses: {
    200: PutOperatorAutopilotConfigurationResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getOperatorAutopilotHealthRoute = createRoute({
  method: 'get',
  path: '/operator/autopilot/health',
  tags: ['Operator'],
  operationId: 'GetOperatorAutopilotHealth',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetOperatorAutopilotHealthResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getOperatorRaftConfigurationRoute = createRoute({
  method: 'get',
  path: '/operator/raft/configuration',
  tags: ['Operator'],
  operationId: 'GetOperatorRaftConfiguration',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetOperatorRaftConfigurationResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const deleteOperatorRaftPeerRoute = createRoute({
  method: 'delete',
  path: '/operator/raft/peer',
  tags: ['Operator'],
  operationId: 'DeleteOperatorRaftPeer',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
  },
  responses: {
    200: DeleteOperatorRaftPeerResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getOperatorSchedulerConfigurationRoute = createRoute({
  method: 'get',
  path: '/operator/scheduler/configuration',
  tags: ['Operator'],
  operationId: 'GetOperatorSchedulerConfiguration',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetOperatorSchedulerConfigurationResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postOperatorSchedulerConfigurationRoute = createRoute({
  method: 'post',
  path: '/operator/scheduler/configuration',
  tags: ['Operator'],
  operationId: 'PostOperatorSchedulerConfiguration',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    body: {
      content: { 'application/json': { schema: SchedulerConfigurationSchema } },
      required: true,
    },
  },
  responses: {
    200: PostOperatorSchedulerConfigurationResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getPluginCsiPluginIDRoute = createRoute({
  method: 'get',
  path: '/plugin/csi/{pluginID}',
  tags: ['Plugins'],
  operationId: 'GetPluginCSI',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ pluginID: PluginIDParamParamsSchema }),
  },
  responses: {
    200: GetPluginCSIResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getPluginsRoute = createRoute({
  method: 'get',
  path: '/plugins',
  tags: ['Plugins'],
  operationId: 'GetPlugins',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetPluginsResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postQuotaRoute = createRoute({
  method: 'post',
  path: '/quota',
  tags: ['Enterprise'],
  operationId: 'CreateQuotaSpec',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    body: { content: { 'application/json': { schema: QuotaSpecSchema } }, required: true },
  },
  responses: {
    200: CreateQuotaSpecResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getQuotaSpecNameRoute = createRoute({
  method: 'get',
  path: '/quota/{specName}',
  tags: ['Enterprise'],
  operationId: 'GetQuotaSpec',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ specName: QuotaSpecNameParamParamsSchema }),
  },
  responses: {
    200: GetQuotaSpecResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postQuotaSpecNameRoute = createRoute({
  method: 'post',
  path: '/quota/{specName}',
  tags: ['Enterprise'],
  operationId: 'PostQuotaSpec',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ specName: QuotaSpecNameParamParamsSchema }),
    body: { content: { 'application/json': { schema: QuotaSpecSchema } }, required: true },
  },
  responses: {
    200: PostQuotaSpecResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const deleteQuotaSpecNameRoute = createRoute({
  method: 'delete',
  path: '/quota/{specName}',
  tags: ['Enterprise'],
  operationId: 'DeleteQuotaSpec',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ specName: QuotaSpecNameParamParamsSchema }),
  },
  responses: {
    200: DeleteNamespaceResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getQuotasRoute = createRoute({
  method: 'get',
  path: '/quotas',
  tags: ['Enterprise'],
  operationId: 'GetQuotas',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetQuotasResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getRegionsRoute = createRoute({
  method: 'get',
  path: '/regions',
  tags: ['Regions'],
  operationId: 'GetRegions',
  responses: {
    200: GetRegionsResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getScalingPoliciesRoute = createRoute({
  method: 'get',
  path: '/scaling/policies',
  tags: ['Scaling'],
  operationId: 'GetScalingPolicies',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetScalingPoliciesResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getScalingPolicyPolicyIDRoute = createRoute({
  method: 'get',
  path: '/scaling/policy/{policyID}',
  tags: ['Scaling'],
  operationId: 'GetScalingPolicy',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ policyID: ScalingPolicyIDParamParamsSchema }),
  },
  responses: {
    200: GetScalingPolicyResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postSearchRoute = createRoute({
  method: 'post',
  path: '/search',
  tags: ['Search'],
  operationId: 'GetSearch',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    body: { content: { 'application/json': { schema: SearchRequestSchema } }, required: true },
  },
  responses: {
    200: GetSearchResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postSearchFuzzyRoute = createRoute({
  method: 'post',
  path: '/search/fuzzy',
  tags: ['Search'],
  operationId: 'GetFuzzySearch',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    body: { content: { 'application/json': { schema: FuzzySearchRequestSchema } }, required: true },
  },
  responses: {
    200: GetFuzzySearchResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getStatusLeaderRoute = createRoute({
  method: 'get',
  path: '/status/leader',
  tags: ['Status'],
  operationId: 'GetStatusLeader',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetStatusLeaderResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getStatusPeersRoute = createRoute({
  method: 'get',
  path: '/status/peers',
  tags: ['Status'],
  operationId: 'GetStatusPeers',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetStatusPeersResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const putSystemGcRoute = createRoute({
  method: 'put',
  path: '/system/gc',
  tags: ['System'],
  operationId: 'PutSystemGC',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
  },
  responses: {
    200: PutSystemGCResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const putSystemReconcileSummariesRoute = createRoute({
  method: 'put',
  path: '/system/reconcile/summaries',
  tags: ['System'],
  operationId: 'PutSystemReconcileSummaries',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
  },
  responses: {
    200: PutSystemReconcileSummariesResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postValidateJobRoute = createRoute({
  method: 'post',
  path: '/validate/job',
  tags: ['Jobs'],
  operationId: 'PostJobValidateRequest',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    body: { content: { 'application/json': { schema: JobValidateRequestSchema } }, required: true },
  },
  responses: {
    200: PostJobValidateResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getVarPathRoute = createRoute({
  method: 'get',
  path: '/var/{path}',
  tags: ['Variables'],
  operationId: 'GetVariableQuery',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ path: VariablePathParamsSchema }),
  },
  responses: {
    200: GetVariableResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const putVarPathRoute = createRoute({
  method: 'put',
  path: '/var/{path}',
  tags: ['Variables'],
  operationId: 'PutVariable',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
      cas: VariableCASParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ path: VariablePathParamsSchema }),
    body: { content: { 'application/json': { schema: VariableSchema } }, required: true },
  },
  responses: {
    200: PutVariableResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postVarPathRoute = createRoute({
  method: 'post',
  path: '/var/{path}',
  tags: ['Variables'],
  operationId: 'PostVariable',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
      cas: VariableCASParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ path: VariablePathParamsSchema }),
    body: { content: { 'application/json': { schema: VariableSchema } }, required: true },
  },
  responses: {
    200: PostVariableResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const deleteVarPathRoute = createRoute({
  method: 'delete',
  path: '/var/{path}',
  tags: ['Variables'],
  operationId: 'DeleteVariable',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
      cas: VariableCASParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ path: VariablePathParamsSchema }),
    body: { content: { 'application/json': { schema: VariableSchema } }, required: true },
  },
  responses: {
    200: DeleteVariableResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getVarsRoute = createRoute({
  method: 'get',
  path: '/vars',
  tags: ['Variables'],
  operationId: 'GetVariablesListRequest',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetVariablesListResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getVolumeCsiVolumeIdRoute = createRoute({
  method: 'get',
  path: '/volume/csi/{volumeId}',
  tags: ['Volumes'],
  operationId: 'GetVolume',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
    params: z.object({ volumeId: VolumeIDParamParamsSchema }),
  },
  responses: {
    200: GetVolumeResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postVolumeCsiVolumeIdRoute = createRoute({
  method: 'post',
  path: '/volume/csi/{volumeId}',
  tags: ['Volumes'],
  operationId: 'PostVolumeRegistration',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ volumeId: VolumeIDParamParamsSchema }),
    body: {
      content: { 'application/json': { schema: CSIVolumeRegisterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: PostVolumeRegistrationResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const deleteVolumeCsiVolumeIdRoute = createRoute({
  method: 'delete',
  path: '/volume/csi/{volumeId}',
  tags: ['Volumes'],
  operationId: 'DeleteVolumeRegistration',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
      force: VolumeForceParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({ volumeId: VolumeIDParamParamsSchema }),
  },
  responses: {
    200: DeleteVolumeRegistrationResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postVolumeCsiVolumeIdActionRoute = createRoute({
  method: 'post',
  path: '/volume/csi/{volumeId}/{action}',
  tags: ['Volumes'],
  operationId: 'CreateVolume',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({
      volumeId: VolumeIDParamParamsSchema,
      action: VolumeActionParamParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: CSIVolumeCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: PostVolumeResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const deleteVolumeCsiVolumeIdActionRoute = createRoute({
  method: 'delete',
  path: '/volume/csi/{volumeId}/{action}',
  tags: ['Volumes'],
  operationId: 'DetachOrDeleteVolume',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
      node: VolumeNodeParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    params: z.object({
      volumeId: VolumeIDParamParamsSchema,
      action: VolumeActionParamParamsSchema,
    }),
  },
  responses: {
    200: DetachOrDeleteVolumeResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getVolumesRoute = createRoute({
  method: 'get',
  path: '/volumes',
  tags: ['Volumes'],
  operationId: 'GetVolumes',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
      node_id: VolumeNodeIDParamParamsSchema,
      plugin_id: VolumePluginIDParamParamsSchema,
      type: VolumeTypeParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetVolumesResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postVolumesRoute = createRoute({
  method: 'post',
  path: '/volumes',
  tags: ['Volumes'],
  operationId: 'PostVolume',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    body: {
      content: { 'application/json': { schema: CSIVolumeRegisterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: PostVolumeResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getVolumesExternalRoute = createRoute({
  method: 'get',
  path: '/volumes/external',
  tags: ['Volumes'],
  operationId: 'GetExternalVolumes',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
      plugin_id: VolumePluginIDParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetExternalVolumesResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const getVolumesSnapshotRoute = createRoute({
  method: 'get',
  path: '/volumes/snapshot',
  tags: ['Volumes'],
  operationId: 'GetSnapshots',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      wait: WaitParamParamsSchema,
      stale: StaleParamParamsSchema,
      prefix: PrefixParamParamsSchema,
      per_page: PerPageParamParamsSchema,
      next_token: NextTokenParamParamsSchema,
      plugin_id: VolumePluginIDParamParamsSchema,
    }),
    headers: z.object({
      index: IndexHeaderParamsSchema,
      'X-Nomad-Token': NomadTokenHeaderParamsSchema,
    }),
  },
  responses: {
    200: GetSnapshotsResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const postVolumesSnapshotRoute = createRoute({
  method: 'post',
  path: '/volumes/snapshot',
  tags: ['Volumes'],
  operationId: 'PostSnapshot',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
    body: {
      content: { 'application/json': { schema: CSISnapshotCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: PostSnapshotResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})

export const deleteVolumesSnapshotRoute = createRoute({
  method: 'delete',
  path: '/volumes/snapshot',
  tags: ['Volumes'],
  operationId: 'DeleteSnapshot',
  request: {
    query: z.object({
      region: RegionParamParamsSchema,
      namespace: NamespaceParamParamsSchema,
      idempotency_token: IdempotencyTokenParamParamsSchema,
      plugin_id: VolumePluginIDParamParamsSchema,
      snapshot_id: SnapshotIDParamParamsSchema,
    }),
    headers: z.object({ 'X-Nomad-Token': NomadTokenHeaderParamsSchema }),
  },
  responses: {
    200: DeleteSnapshotResponseResponse,
    400: BadRequestResponseResponse,
    403: ForbiddenResponseResponse,
    405: MethodNotAllowedResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
  security: [{ 'X-Nomad-Token': [] }],
})
