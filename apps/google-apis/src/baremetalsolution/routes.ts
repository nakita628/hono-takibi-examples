import { createRoute, z } from '@hono/zod-openapi'

const AllowedClientSchema = z
  .object({
    allowDev: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Allow dev flag. Which controls whether to allow creation of devices.',
      }),
    allowSuid: z.boolean().exactOptional().openapi({ description: 'Allow the setuid flag.' }),
    allowedClientsCidr: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subnet of IP addresses permitted to access the share.' }),
    mountPermissions: z
      .enum(['MOUNT_PERMISSIONS_UNSPECIFIED', 'READ', 'READ_WRITE'])
      .exactOptional()
      .openapi({ description: 'Mount permissions.' }),
    network: z
      .string()
      .exactOptional()
      .openapi({ description: 'The network the access point sits on.' }),
    nfsPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The path to access NFS, in format shareIP:/InstanceID InstanceID is the generated ID instead of customer provided name. example like "10.0.0.0:/g123456789-nfs001"',
        readOnly: true,
      }),
    noRootSquash: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Disable root squashing, which is a feature of NFS. Root squash is a special mapping of the remote superuser (root) identity when using identity authentication.',
      }),
    shareIp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The IP address of the share on this network. Assigned automatically during provisioning based on the network's services_cidr.",
        readOnly: true,
      }),
  })
  .openapi({ description: "Represents an 'access point' for the share.", required: [] })
  .openapi('AllowedClient')

const DetachLunRequestSchema = z
  .object({
    lun: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Name of the Lun to detach.' }),
    skipReboot: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, performs lun unmapping without instance reboot.' }),
  })
  .openapi({ description: 'Message for detach specific LUN from an Instance.', required: [] })
  .openapi('DetachLunRequest')

const DisableInteractiveSerialConsoleRequestSchema = z
  .object({})
  .openapi({ description: 'Message for disabling the interactive serial console on an instance.' })
  .openapi('DisableInteractiveSerialConsoleRequest')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const EnableInteractiveSerialConsoleRequestSchema = z
  .object({})
  .openapi({ description: 'Message for enabling the interactive serial console on an instance.' })
  .openapi('EnableInteractiveSerialConsoleRequest')

const EvictLunRequestSchema = z
  .object({})
  .openapi({ description: 'Request for skip lun cooloff and delete it.' })
  .openapi('EvictLunRequest')

const EvictVolumeRequestSchema = z
  .object({})
  .openapi({ description: 'Request for skip volume cooloff and delete it.' })
  .openapi('EvictVolumeRequest')

const GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Interface name. This is not a globally unique identifier. Name is unique only inside the ServerNetworkTemplate. This is of syntax or and forms part of the network template name.',
      }),
    required: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, interface must have network connected.' }),
    type: z
      .enum(['INTERFACE_TYPE_UNSPECIFIED', 'BOND', 'NIC'])
      .exactOptional()
      .openapi({ description: 'Interface type.' }),
  })
  .openapi({ description: 'Logical interface.', required: [] })
  .openapi('GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface')

const ServerNetworkTemplateSchema = z
  .object({
    applicableInstanceTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Instance types this template is applicable to.' }),
    logicalInterfaces: z
      .array(GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceSchema)
      .exactOptional()
      .openapi({ description: 'Logical interfaces.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Template\'s unique name. The full resource name follows the pattern: `projects/{project}/locations/{location}/serverNetworkTemplate/{server_network_template}` Generally, the {server_network_template} follows the syntax of "bond" or "nic".',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Network template.', required: [] })
  .openapi('ServerNetworkTemplate')

const OSImageSchema = z
  .object({
    applicableInstanceTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Instance types this image is applicable to. [Available types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)',
      }),
    code: z.string().exactOptional().openapi({ description: 'OS Image code.' }),
    description: z.string().exactOptional().openapi({ description: 'OS Image description.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. OS Image's unique name.", readOnly: true }),
    supportedNetworkTemplates: z
      .array(ServerNetworkTemplateSchema)
      .exactOptional()
      .openapi({ description: 'Network templates that can be used with this OS Image.' }),
  })
  .openapi({ description: 'Operation System image.', required: [] })
  .openapi('OSImage')

const FetchInstanceProvisioningSettingsResponseSchema = z
  .object({
    images: z
      .array(OSImageSchema)
      .exactOptional()
      .openapi({ description: 'The OS images available.' }),
  })
  .openapi({ description: 'Response with all provisioning settings.', required: [] })
  .openapi('FetchInstanceProvisioningSettingsResponse')

const LogicalNetworkInterfaceSchema = z
  .object({
    defaultGateway: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this interface is the default gateway for the instance. Only one interface can be the default gateway for the instance.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'An identifier for the `Network`, generated by the backend.' }),
    ipAddress: z.string().exactOptional().openapi({ description: 'IP address in the network' }),
    network: z.string().exactOptional().openapi({ description: 'Name of the network' }),
    networkType: z
      .enum(['TYPE_UNSPECIFIED', 'CLIENT', 'PRIVATE'])
      .exactOptional()
      .openapi({ description: 'Type of network.' }),
  })
  .openapi({
    description: 'Each logical network interface is effectively a network and IP pair.',
    required: [],
  })
  .openapi('LogicalNetworkInterface')

const GoogleCloudBaremetalsolutionV2LogicalInterfaceSchema = z
  .object({
    interfaceIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The index of the logical interface mapping to the index of the hardware bond or nic on the chosen network template. This field is deprecated.',
      }),
    logicalNetworkInterfaces: z
      .array(LogicalNetworkInterfaceSchema)
      .exactOptional()
      .openapi({ description: 'List of logical network interfaces within a logical interface.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Interface name. This is of syntax or and forms part of the network template name.',
      }),
  })
  .openapi({
    description:
      'Each logical interface represents a logical abstraction of the underlying physical interface (for eg. bond, nic) of the instance. Each logical interface can effectively map to multiple network-IP pairs and still be mapped to one underlying physical interface.',
    required: [],
  })
  .openapi('GoogleCloudBaremetalsolutionV2LogicalInterface')

const LunSchema = z
  .object({
    bootLun: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Display if this LUN is a boot LUN.' }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time after which LUN will be fully deleted. It is filled only for LUNs in COOL_OFF state.',
        readOnly: true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'An identifier for the LUN, generated by the backend.' }),
    instances: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Output only. Instances this Lun is attached to.', readOnly: true }),
    multiprotocolType: z
      .enum(['MULTIPROTOCOL_TYPE_UNSPECIFIED', 'LINUX'])
      .exactOptional()
      .openapi({
        description:
          'The LUN multiprotocol type ensures the characteristics of the LUN are optimized for each operating system.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the LUN.', readOnly: true }),
    shareable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Display if this LUN can be shared between multiple physical servers.',
      }),
    sizeGb: z
      .string()
      .exactOptional()
      .openapi({ description: 'The size of this LUN, in gigabytes.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'UPDATING', 'READY', 'DELETING', 'COOL_OFF'])
      .exactOptional()
      .openapi({ description: 'The state of this storage volume.' }),
    storageType: z
      .enum(['STORAGE_TYPE_UNSPECIFIED', 'SSD', 'HDD'])
      .exactOptional()
      .openapi({ description: 'The storage type for this LUN.' }),
    storageVolume: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display the storage volume for this LUN.' }),
    wwid: z.string().exactOptional().openapi({ description: 'The WWID for this LUN.' }),
  })
  .openapi({ description: 'A storage volume logical unit number (LUN).', required: [] })
  .openapi('Lun')

const NetworkMountPointSchema = z
  .object({
    defaultGateway: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Network should be a default gateway.' }),
    instance: z.string().exactOptional().openapi({ description: 'Instance to attach network to.' }),
    ipAddress: z.string().exactOptional().openapi({ description: 'Ip address of the server.' }),
    logicalInterface: z
      .string()
      .exactOptional()
      .openapi({ description: 'Logical interface to detach from.' }),
  })
  .openapi({ description: 'Mount point for a network.', required: [] })
  .openapi('NetworkMountPoint')

const NetworkAddressReservationSchema = z
  .object({
    endAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The last address of this reservation block, inclusive. I.e., for cases when reservations are only single addresses, end_address and start_address will be the same. Must be specified as a single IPv4 address, e.g. 10.1.2.2.',
      }),
    note: z
      .string()
      .exactOptional()
      .openapi({ description: 'A note about this reservation, intended for human consumption.' }),
    startAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The first address of this reservation block. Must be specified as a single IPv4 address, e.g. 10.1.2.2.',
      }),
  })
  .openapi({ description: 'A reservation of one or more addresses in a network.', required: [] })
  .openapi('NetworkAddressReservation')

const QosPolicySchema = z
  .object({
    bandwidthGbps: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The bandwidth permitted by the QOS policy, in gbps.' }),
  })
  .openapi({ description: 'QOS policy parameters.', required: [] })
  .openapi('QosPolicy')

const VlanAttachmentSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Immutable. The identifier of the attachment within vrf.' }),
    pairingKey: z.string().exactOptional().openapi({ description: 'Input only. Pairing key.' }),
    peerIp: z.string().exactOptional().openapi({ description: 'The peer IP of the attachment.' }),
    peerVlanId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The peer vlan ID of the attachment.' }),
    qosPolicy: QosPolicySchema.exactOptional().openapi({
      description:
        'The QOS policy applied to this VLAN attachment. This value should be preferred to using qos at vrf level.',
    }),
    routerIp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The router IP of the attachment.' }),
  })
  .openapi({ description: 'VLAN attachment details.', required: [] })
  .openapi('VlanAttachment')

const VRFSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the VRF.' }),
    qosPolicy: QosPolicySchema.exactOptional().openapi({
      description:
        'The QOS policy applied to this VRF. The value is only meaningful when all the vlan attachments have the same QoS. This field should not be used for new integrations, use vlan attachment level qos instead. The field is left for backward-compatibility.',
    }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'PROVISIONING', 'PROVISIONED'])
      .exactOptional()
      .openapi({ description: 'The possible state of VRF.' }),
    vlanAttachments: z
      .array(VlanAttachmentSchema)
      .exactOptional()
      .openapi({ description: 'The list of VLAN attachments for the VRF.' }),
  })
  .openapi({ description: 'A network VRF.', required: [] })
  .openapi('VRF')

const NetworkSchema = z
  .object({
    cidr: z.string().exactOptional().openapi({ description: 'The cidr of the Network.' }),
    gatewayIp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Gateway ip address.', readOnly: true }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'An identifier for the `Network`, generated by the backend.' }),
    ipAddress: z.string().exactOptional().openapi({ description: 'IP address configured.' }),
    jumboFramesEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether network uses standard frames or jumbo ones.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Labels as key value pairs.' }),
    macAddress: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of physical interfaces.' }),
    mountPoints: z
      .array(NetworkMountPointSchema)
      .exactOptional()
      .openapi({ description: 'Input only. List of mount points to attach the network to.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of this `Network`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/networks/{network}`',
        readOnly: true,
      }),
    pod: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Pod name.', readOnly: true }),
    reservations: z
      .array(NetworkAddressReservationSchema)
      .exactOptional()
      .openapi({
        description:
          'List of IP address reservations in this network. When updating this field, an error will be generated if a reservation conflicts with an IP address already allocated to a physical server.',
      }),
    servicesCidr: z
      .string()
      .exactOptional()
      .openapi({ description: 'IP range for reserved for services (e.g. NFS).' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'PROVISIONING', 'PROVISIONED', 'DEPROVISIONING', 'UPDATING'])
      .exactOptional()
      .openapi({ description: 'The Network state.' }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'CLIENT', 'PRIVATE'])
      .exactOptional()
      .openapi({ description: 'The type of this network.' }),
    vlanId: z.string().exactOptional().openapi({ description: 'The vlan id of the Network.' }),
    vrf: VRFSchema.exactOptional().openapi({ description: 'The vrf for the Network.' }),
  })
  .openapi({ description: 'A Network.', required: [] })
  .openapi('Network')

const SnapshotReservationDetailSchema = z
  .object({
    reservedSpaceGib: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The space on this storage volume reserved for snapshots, shown in GiB.',
      }),
    reservedSpacePercent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Percent of the total Volume size reserved for snapshot copies. Enabling snapshots requires reserving 20% or more of the storage volume space for snapshots. Maximum reserved space for snapshots is 40%. Setting this field will effectively set snapshot_enabled to true.',
      }),
    reservedSpaceRemainingGib: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The amount, in GiB, of available space in this storage volume's reserved snapshot space.",
      }),
    reservedSpaceUsedPercent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The percent of snapshot space on this storage volume actually being used by the snapshot copies. This value might be higher than 100% if the snapshot copies have overflowed into the data portion of the storage volume.',
      }),
  })
  .openapi({
    description: 'Details about snapshot space reservation and usage on the storage volume.',
    required: [],
  })
  .openapi('SnapshotReservationDetail')

const VolumeSchema = z
  .object({
    attached: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Is the Volume attached at at least one instance. This field is a lightweight counterpart of `instances` field. It is filled in List responses as well.',
        readOnly: true,
      }),
    autoGrownSizeGib: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The size, in GiB, that this storage volume has expanded as a result of an auto grow policy. In the absence of auto-grow, the value is 0.',
      }),
    bootVolume: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether this volume is a boot volume. A boot volume is one which contains a boot LUN.',
        readOnly: true,
      }),
    currentSizeGib: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The current size of this storage volume, in GiB, including space reserved for snapshots. This size might be different than the requested size if the storage volume has been configured with auto grow or auto shrink.',
      }),
    emergencySizeGib: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional emergency size that was requested for this Volume, in GiB. current_size_gib includes this value.',
      }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time after which volume will be fully deleted. It is filled only for volumes in COOLOFF state.',
        readOnly: true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'An identifier for the `Volume`, generated by the backend.' }),
    instances: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. Instances this Volume is attached to. This field is set only in Get requests.',
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Labels as key value pairs.' }),
    maxSizeGib: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Maximum size volume can be expanded to in case of evergency, in GiB.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of this `Volume`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/volumes/{volume}`',
        readOnly: true,
      }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. User-specified notes for new Volume. Used to provision Volumes that require manual intervention.',
      }),
    originallyRequestedSizeGib: z
      .string()
      .exactOptional()
      .openapi({ description: 'Originally requested size, in GiB.' }),
    performanceTier: z
      .enum([
        'VOLUME_PERFORMANCE_TIER_UNSPECIFIED',
        'VOLUME_PERFORMANCE_TIER_SHARED',
        'VOLUME_PERFORMANCE_TIER_ASSIGNED',
        'VOLUME_PERFORMANCE_TIER_HT',
      ])
      .exactOptional()
      .openapi({ description: 'Immutable. Performance tier of the Volume. Default is SHARED.' }),
    pod: z.string().exactOptional().openapi({ description: 'Immutable. Pod name.' }),
    protocol: z
      .enum(['PROTOCOL_UNSPECIFIED', 'FIBRE_CHANNEL', 'NFS'])
      .exactOptional()
      .openapi({ description: 'Output only. Storage protocol for the Volume.', readOnly: true }),
    remainingSpaceGib: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The space remaining in the storage volume for new LUNs, in GiB, excluding space reserved for snapshots.',
      }),
    requestedSizeGib: z
      .string()
      .exactOptional()
      .openapi({ description: 'The requested size of this storage volume, in GiB.' }),
    snapshotAutoDeleteBehavior: z
      .enum([
        'SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED',
        'DISABLED',
        'OLDEST_FIRST',
        'NEWEST_FIRST',
      ])
      .exactOptional()
      .openapi({ description: 'The behavior to use when snapshot reserved space is full.' }),
    snapshotEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether snapshots are enabled.' }),
    snapshotReservationDetail: SnapshotReservationDetailSchema.exactOptional().openapi({
      description: 'Details about snapshot space reservation and usage on the storage volume.',
    }),
    snapshotSchedulePolicy: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the snapshot schedule policy in use for this volume, if any.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'READY', 'DELETING', 'UPDATING', 'COOL_OFF'])
      .exactOptional()
      .openapi({ description: 'The state of this storage volume.' }),
    storageAggregatePool: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. Name of the storage aggregate pool to allocate the volume in. Can be used only for VOLUME_PERFORMANCE_TIER_ASSIGNED volumes.',
      }),
    storageType: z
      .enum(['STORAGE_TYPE_UNSPECIFIED', 'SSD', 'HDD'])
      .exactOptional()
      .openapi({ description: 'The storage type for this volume.' }),
    workloadProfile: z
      .enum(['WORKLOAD_PROFILE_UNSPECIFIED', 'GENERIC', 'HANA'])
      .exactOptional()
      .openapi({ description: 'The workload profile for the volume.' }),
  })
  .openapi({ description: 'A storage volume.', required: [] })
  .openapi('Volume')

const InstanceSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Create a time stamp.', readOnly: true }),
    firmwareVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The firmware version for the instance.',
        readOnly: true,
      }),
    hyperthreadingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if you enable hyperthreading for the server, otherwise false. The default value is false.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. An identifier for the `Instance`, generated by the backend.',
        readOnly: true,
      }),
    interactiveSerialConsoleEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. True if the interactive serial console feature is enabled for the instance, false otherwise. The default value is false.',
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Labels as key value pairs.' }),
    logicalInterfaces: z
      .array(GoogleCloudBaremetalsolutionV2LogicalInterfaceSchema)
      .exactOptional()
      .openapi({
        description:
          'List of logical interfaces for the instance. The number of logical interfaces will be the same as number of hardware bond/nic on the chosen network template. For the non-multivlan configurations (for eg, existing servers) that use existing default network template (bondaa-bondaa), both the Instance.networks field and the Instance.logical_interfaces fields will be filled to ensure backward compatibility. For the others, only Instance.logical_interfaces will be filled.',
      }),
    loginInfo: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Text field about info for logging in.',
        readOnly: true,
      }),
    luns: z
      .array(LunSchema)
      .exactOptional()
      .openapi({ description: 'Immutable. List of LUNs associated with this server.' }),
    machineType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The server type. [Available server types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of this `Instance`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/instances/{instance}`',
      }),
    networkTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Instance network template name. For eg, bondaa-bondaa, bondab-nic, etc. Generally, the template name follows the syntax of "bond" or "nic".',
      }),
    networks: z
      .array(NetworkSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. List of networks associated with this server.',
        readOnly: true,
      }),
    osImage: z
      .string()
      .exactOptional()
      .openapi({ description: 'The OS image currently installed on the server.' }),
    pod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Pod name. Pod is an independent part of infrastructure. Instance can be connected to the assets (networks, volumes) allocated in the same pod only.',
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'PROVISIONING',
        'RUNNING',
        'DELETED',
        'UPDATING',
        'STARTING',
        'STOPPING',
        'SHUTDOWN',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The state of the server.', readOnly: true }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Update a time stamp.', readOnly: true }),
    volumes: z
      .array(VolumeSchema)
      .exactOptional()
      .openapi({
        description:
          "Input only. List of Volumes to attach to this Instance on creation. This field won't be populated in Get/List responses.",
      }),
    workloadProfile: z
      .enum(['WORKLOAD_PROFILE_UNSPECIFIED', 'WORKLOAD_PROFILE_GENERIC', 'WORKLOAD_PROFILE_HANA'])
      .exactOptional()
      .openapi({ description: 'The workload profile for the instance.' }),
  })
  .openapi({ description: 'A server.', required: [] })
  .openapi('Instance')

const NetworkAddressSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({ description: 'IPv4 address to be assigned to the server.' }),
    existingNetworkId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the existing network to use.' }),
    networkId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Id of the network to use, within the same ProvisioningConfig request.',
      }),
  })
  .openapi({ description: 'A network.', required: [] })
  .openapi('NetworkAddress')

const InstanceConfigSchema = z
  .object({
    accountNetworksEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true networks can be from different projects of the same vendor account.',
      }),
    clientNetwork: NetworkAddressSchema.exactOptional().openapi({
      description: 'Client network address. Filled if InstanceConfig.multivlan_config is false.',
    }),
    hyperthreading: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the instance should be provisioned with Hyperthreading enabled.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A transient unique identifier to idenfity an instance within an ProvisioningConfig request.',
      }),
    instanceType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Instance type. [Available types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)',
      }),
    logicalInterfaces: z
      .array(GoogleCloudBaremetalsolutionV2LogicalInterfaceSchema)
      .exactOptional()
      .openapi({
        description:
          'List of logical interfaces for the instance. The number of logical interfaces will be the same as number of hardware bond/nic on the chosen network template. Filled if InstanceConfig.multivlan_config is true.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the instance config.', readOnly: true }),
    networkConfig: z
      .enum(['NETWORKCONFIG_UNSPECIFIED', 'SINGLE_VLAN', 'MULTI_VLAN'])
      .exactOptional()
      .openapi({ description: 'The type of network configuration on the instance.' }),
    networkTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Server network template name. Filled if InstanceConfig.multivlan_config is true.',
      }),
    osImage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OS image to initialize the instance. [Available images](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)',
      }),
    privateNetwork: NetworkAddressSchema.exactOptional().openapi({
      description:
        'Private network address, if any. Filled if InstanceConfig.multivlan_config is false.',
    }),
    userNote: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User note field, it can be used by customers to add additional information for the BMS Ops team .',
      }),
  })
  .openapi({ description: 'Configuration parameters for a new instance.', required: [] })
  .openapi('InstanceConfig')

const InstanceQuotaSchema = z
  .object({
    availableMachineCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of machines than can be created for the given location and instance_type.',
      }),
    gcpService: z
      .string()
      .exactOptional()
      .openapi({ description: 'The gcp service of the provisioning quota.' }),
    instanceType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Instance type. Deprecated: use gcp_service.' }),
    location: z
      .string()
      .exactOptional()
      .openapi({ description: 'Location where the quota applies.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the instance quota.', readOnly: true }),
  })
  .openapi({ description: 'A resource budget.', required: [] })
  .openapi('InstanceQuota')

const IntakeVlanAttachmentSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Identifier of the VLAN attachment.' }),
    pairingKey: z.string().exactOptional().openapi({ description: 'Attachment pairing key.' }),
  })
  .openapi({ description: 'A GCP vlan attachment.', required: [] })
  .openapi('IntakeVlanAttachment')

const ListInstancesResponseSchema = z
  .object({
    instances: z
      .array(InstanceSchema)
      .exactOptional()
      .openapi({ description: 'The list of servers.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token identifying a page of results from the server.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response message for the list of servers.', required: [] })
  .openapi('ListInstancesResponse')

const LocationSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The friendly name for this location, typically a nearby city name. For example, "Tokyo".',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical id for this location. For example: `"us-east1"`.' }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata. For example the available capacity at the given location.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`',
      }),
  })
  .openapi({
    description: 'A resource that represents Google Cloud Platform location.',
    required: [],
  })
  .openapi('Location')

const ListLocationsResponseSchema = z
  .object({
    locations: z
      .array(LocationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of locations that matches the specified filter in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
  })
  .openapi({ description: 'The response message for Locations.ListLocations.', required: [] })
  .openapi('ListLocationsResponse')

const ListLunsResponseSchema = z
  .object({
    luns: z.array(LunSchema).exactOptional().openapi({ description: 'The list of luns.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token identifying a page of results from the server.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({
    description: 'Response message containing the list of storage volume luns.',
    required: [],
  })
  .openapi('ListLunsResponse')

const NetworkUsageSchema = z
  .object({
    network: NetworkSchema.exactOptional().openapi({ description: 'Network.' }),
    usedIps: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'All used IP addresses in this network.' }),
  })
  .openapi({ description: 'Network with all used IP addresses.', required: [] })
  .openapi('NetworkUsage')

const ListNetworkUsageResponseSchema = z
  .object({
    networks: z
      .array(NetworkUsageSchema)
      .exactOptional()
      .openapi({ description: 'Networks with IPs.' }),
  })
  .openapi({ description: 'Response with Networks with IPs', required: [] })
  .openapi('ListNetworkUsageResponse')

const ListNetworksResponseSchema = z
  .object({
    networks: z
      .array(NetworkSchema)
      .exactOptional()
      .openapi({ description: 'The list of networks.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token identifying a page of results from the server.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response message containing the list of networks.', required: [] })
  .openapi('ListNetworksResponse')

const NfsShareSchema = z
  .object({
    allowedClients: z
      .array(AllowedClientSchema)
      .exactOptional()
      .openapi({ description: 'List of allowed access points.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. An identifier for the NFS share, generated by the backend. This is the same value as nfs_share_id and will replace it in the future.',
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Labels as key value pairs.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Immutable. The name of the NFS share.' }),
    nfsShareId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. An identifier for the NFS share, generated by the backend. This field will be deprecated in the future, use `id` instead.',
        readOnly: true,
      }),
    requestedSizeGib: z
      .string()
      .exactOptional()
      .openapi({ description: 'The requested size, in GiB.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'PROVISIONED', 'CREATING', 'UPDATING', 'DELETING'])
      .exactOptional()
      .openapi({ description: 'Output only. The state of the NFS share.', readOnly: true }),
    storageType: z
      .enum(['STORAGE_TYPE_UNSPECIFIED', 'SSD', 'HDD'])
      .exactOptional()
      .openapi({ description: 'Immutable. The storage type of the underlying volume.' }),
    volume: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The underlying volume of the share. Created automatically during provisioning.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'An NFS share.', required: [] })
  .openapi('NfsShare')

const ListNfsSharesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token identifying a page of results from the server.' }),
    nfsShares: z
      .array(NfsShareSchema)
      .exactOptional()
      .openapi({ description: 'The list of NFS shares.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response message containing the list of NFS shares.', required: [] })
  .openapi('ListNfsSharesResponse')

const ProvisioningQuotaSchema = z
  .object({
    assetType: z
      .enum([
        'ASSET_TYPE_UNSPECIFIED',
        'ASSET_TYPE_SERVER',
        'ASSET_TYPE_STORAGE',
        'ASSET_TYPE_NETWORK',
      ])
      .exactOptional()
      .openapi({ description: 'The asset type of this provisioning quota.' }),
    availableCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The available count of the provisioning quota.' }),
    gcpService: z
      .string()
      .exactOptional()
      .openapi({ description: 'The gcp service of the provisioning quota.' }),
    instanceQuota: InstanceQuotaSchema.exactOptional().openapi({ description: 'Instance quota.' }),
    location: z
      .string()
      .exactOptional()
      .openapi({ description: 'The specific location of the provisioining quota.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the provisioning quota.', readOnly: true }),
    networkBandwidth: z
      .string()
      .exactOptional()
      .openapi({ description: 'Network bandwidth, Gbps' }),
    serverCount: z.string().exactOptional().openapi({ description: 'Server count.' }),
    storageGib: z.string().exactOptional().openapi({ description: 'Storage size (GB).' }),
  })
  .openapi({ description: 'A provisioning quota for a given project.', required: [] })
  .openapi('ProvisioningQuota')

const ListProvisioningQuotasResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    provisioningQuotas: z
      .array(ProvisioningQuotaSchema)
      .exactOptional()
      .openapi({ description: 'The provisioning quotas registered in this project.' }),
  })
  .openapi({ description: 'Response message for the list of provisioning quotas.', required: [] })
  .openapi('ListProvisioningQuotasResponse')

const SSHKeySchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of this SSH key. Currently, the only valid value for the location is "global".',
        readOnly: true,
      }),
    publicKey: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The public SSH key. This must be in OpenSSH .authorized_keys format.',
      }),
  })
  .openapi({
    description: 'An SSH key, used for authorizing with the interactive serial console feature.',
    required: [],
  })
  .openapi('SSHKey')

const ListSSHKeysResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    sshKeys: z
      .array(SSHKeySchema)
      .exactOptional()
      .openapi({ description: 'The SSH keys registered in the project.' }),
  })
  .openapi({ description: 'Message for response of ListSSHKeys.', required: [] })
  .openapi('ListSSHKeysResponse')

const VolumeSnapshotSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The creation time of the snapshot.', readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the snapshot.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. An identifier for the snapshot, generated by the backend.',
        readOnly: true,
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the snapshot.' }),
    storageVolume: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of the volume which this snapshot belongs to.',
        readOnly: true,
      }),
    type: z
      .enum(['SNAPSHOT_TYPE_UNSPECIFIED', 'AD_HOC', 'SCHEDULED'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The type of the snapshot which indicates whether it was scheduled or manual/ad-hoc.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A snapshot of a volume. Only boot volumes can have snapshots.',
    required: [],
  })
  .openapi('VolumeSnapshot')

const ListVolumeSnapshotsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token identifying a page of results from the server.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
    volumeSnapshots: z
      .array(VolumeSnapshotSchema)
      .exactOptional()
      .openapi({ description: 'The list of snapshots.' }),
  })
  .openapi({
    description: 'Response message containing the list of volume snapshots.',
    required: [],
  })
  .openapi('ListVolumeSnapshotsResponse')

const ListVolumesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token identifying a page of results from the server.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
    volumes: z
      .array(VolumeSchema)
      .exactOptional()
      .openapi({ description: 'The list of storage volumes.' }),
  })
  .openapi({
    description: 'Response message containing the list of storage volumes.',
    required: [],
  })
  .openapi('ListVolumesResponse')

const LunRangeSchema = z
  .object({
    quantity: z.int32().exactOptional().openapi({ description: 'Number of LUNs to create.' }),
    sizeGb: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The requested size of each LUN, in GB.' }),
  })
  .openapi({ description: 'A LUN(Logical Unit Number) range.', required: [] })
  .openapi('LunRange')

const NetworkConfigSchema = z
  .object({
    bandwidth: z
      .enum(['BANDWIDTH_UNSPECIFIED', 'BW_1_GBPS', 'BW_2_GBPS', 'BW_5_GBPS', 'BW_10_GBPS'])
      .exactOptional()
      .openapi({ description: 'Interconnect bandwidth. Set only when type is CLIENT.' }),
    cidr: z.string().exactOptional().openapi({ description: 'CIDR range of the network.' }),
    gcpService: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The GCP service of the network. Available gcp_service are in https://cloud.google.com/bare-metal/docs/bms-planning.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A transient unique identifier to identify a volume within an ProvisioningConfig request.',
      }),
    jumboFramesEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The JumboFramesEnabled option for customer to set.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the network config.', readOnly: true }),
    serviceCidr: z
      .enum(['SERVICE_CIDR_UNSPECIFIED', 'DISABLED', 'HIGH_26', 'HIGH_27', 'HIGH_28'])
      .exactOptional()
      .openapi({ description: 'Service CIDR, if any.' }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'CLIENT', 'PRIVATE'])
      .exactOptional()
      .openapi({ description: 'The type of this network, either Client or Private.' }),
    userNote: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User note field, it can be used by customers to add additional information for the BMS Ops team .',
      }),
    vlanAttachments: z
      .array(IntakeVlanAttachmentSchema)
      .exactOptional()
      .openapi({
        description:
          'List of VLAN attachments. As of now there are always 2 attachments, but it is going to change in the future (multi vlan).',
      }),
    vlanSameProject: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the VLAN attachment pair is located in the same project.' }),
  })
  .openapi({ description: 'Configuration parameters for a new network.', required: [] })
  .openapi('NetworkConfig')

const NfsExportSchema = z
  .object({
    allowDev: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Allow dev flag in NfsShare AllowedClientsRequest.' }),
    allowSuid: z.boolean().exactOptional().openapi({ description: 'Allow the setuid flag.' }),
    cidr: z.string().exactOptional().openapi({ description: 'A CIDR range.' }),
    machineId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Either a single machine, identified by an ID, or a comma-separated list of machine IDs.',
      }),
    networkId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Network to use to publish the export.' }),
    noRootSquash: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Disable root squashing, which is a feature of NFS. Root squash is a special mapping of the remote superuser (root) identity when using identity authentication.',
      }),
    permissions: z
      .enum(['PERMISSIONS_UNSPECIFIED', 'READ_ONLY', 'READ_WRITE'])
      .exactOptional()
      .openapi({ description: 'Export permissions.' }),
  })
  .openapi({ description: 'A NFS export entry.', required: [] })
  .openapi('NfsExport')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const VolumeConfigSchema = z
  .object({
    gcpService: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The GCP service of the storage volume. Available gcp_service are in https://cloud.google.com/bare-metal/docs/bms-planning.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A transient unique identifier to identify a volume within an ProvisioningConfig request.',
      }),
    lunRanges: z
      .array(LunRangeSchema)
      .exactOptional()
      .openapi({
        description: 'LUN ranges to be configured. Set only when protocol is PROTOCOL_FC.',
      }),
    machineIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Machine ids connected to this volume. Set only when protocol is PROTOCOL_FC.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the volume config.', readOnly: true }),
    nfsExports: z
      .array(NfsExportSchema)
      .exactOptional()
      .openapi({ description: 'NFS exports. Set only when protocol is PROTOCOL_NFS.' }),
    performanceTier: z
      .enum([
        'VOLUME_PERFORMANCE_TIER_UNSPECIFIED',
        'VOLUME_PERFORMANCE_TIER_SHARED',
        'VOLUME_PERFORMANCE_TIER_ASSIGNED',
        'VOLUME_PERFORMANCE_TIER_HT',
      ])
      .exactOptional()
      .openapi({ description: 'Performance tier of the Volume. Default is SHARED.' }),
    protocol: z
      .enum(['PROTOCOL_UNSPECIFIED', 'PROTOCOL_FC', 'PROTOCOL_NFS'])
      .exactOptional()
      .openapi({ description: 'Volume protocol.' }),
    sizeGb: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The requested size of this volume, in GB.' }),
    snapshotsEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether snapshots should be enabled.' }),
    storageAggregatePool: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. Name of the storage aggregate pool to allocate the volume in. Can be used only for VOLUME_PERFORMANCE_TIER_ASSIGNED volumes.',
      }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'FLASH', 'DISK'])
      .exactOptional()
      .openapi({ description: 'The type of this Volume.' }),
    userNote: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User note field, it can be used by customers to add additional information for the BMS Ops team .',
      }),
  })
  .openapi({ description: 'Configuration parameters for a new volume.', required: [] })
  .openapi('VolumeConfig')

const ProvisioningConfigSchema = z
  .object({
    cloudConsoleUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. URI to Cloud Console UI view of this provisioning config.',
        readOnly: true,
      }),
    customId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The user-defined identifier of the provisioning config.',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email provided to send a confirmation with provisioning config to. Deprecated in favour of email field in request messages.',
      }),
    handoverServiceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A service account to enable customers to access instance credentials upon handover.',
      }),
    instances: z
      .array(InstanceConfigSchema)
      .exactOptional()
      .openapi({ description: 'Instances to be created.' }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Location name of this ProvisioningConfig. It is optional only for Intake UI transition period.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The system-generated name of the provisioning config. This follows the UUID format.',
        readOnly: true,
      }),
    networks: z
      .array(NetworkConfigSchema)
      .exactOptional()
      .openapi({ description: 'Networks to be created.' }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'DRAFT',
        'SUBMITTED',
        'PROVISIONING',
        'PROVISIONED',
        'VALIDATED',
        'CANCELLED',
        'FAILED',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. State of ProvisioningConfig.', readOnly: true }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional status messages associated with the FAILED state.' }),
    ticketId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A generated ticket id to track provisioning request.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Last update timestamp.', readOnly: true }),
    volumes: z
      .array(VolumeConfigSchema)
      .exactOptional()
      .openapi({ description: 'Volumes to be created.' }),
    vpcScEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, VPC SC is enabled for the cluster.' }),
  })
  .openapi({ description: 'A provisioning configuration.', required: [] })
  .openapi('ProvisioningConfig')

const RenameInstanceRequestSchema = z
  .object({
    newInstanceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The new `id` of the instance.' }),
  })
  .openapi({ description: 'Message requesting rename of a server.', required: [] })
  .openapi('RenameInstanceRequest')

const RenameNetworkRequestSchema = z
  .object({
    newNetworkId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The new `id` of the network.' }),
  })
  .openapi({ description: 'Message requesting rename of a server.', required: [] })
  .openapi('RenameNetworkRequest')

const RenameNfsShareRequestSchema = z
  .object({
    newNfsshareId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The new `id` of the nfsshare.' }),
  })
  .openapi({ description: 'Message requesting rename of a server.', required: [] })
  .openapi('RenameNfsShareRequest')

const RenameVolumeRequestSchema = z
  .object({
    newVolumeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The new `id` of the volume.' }),
  })
  .openapi({ description: 'Message requesting rename of a server.', required: [] })
  .openapi('RenameVolumeRequest')

const ResetInstanceRequestSchema = z
  .object({})
  .openapi({ description: 'Message requesting to reset a server.' })
  .openapi('ResetInstanceRequest')

const ResizeVolumeRequestSchema = z
  .object({
    sizeGib: z.string().exactOptional().openapi({ description: 'New Volume size, in GiB.' }),
  })
  .openapi({ description: 'Request for emergency resize Volume.', required: [] })
  .openapi('ResizeVolumeRequest')

const RestoreVolumeSnapshotRequestSchema = z
  .object({})
  .openapi({ description: 'Message for restoring a volume snapshot.' })
  .openapi('RestoreVolumeSnapshotRequest')

const StartInstanceRequestSchema = z
  .object({})
  .openapi({ description: 'Message requesting to start a server.' })
  .openapi('StartInstanceRequest')

const StopInstanceRequestSchema = z
  .object({})
  .openapi({ description: 'Message requesting to stop a server.' })
  .openapi('StopInstanceRequest')

const SubmitProvisioningConfigRequestSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. Email provided to send a confirmation with provisioning config to.',
      }),
    provisioningConfig: ProvisioningConfigSchema.exactOptional().openapi({
      description: 'Required. The ProvisioningConfig to create.',
    }),
  })
  .openapi({ description: 'Request for SubmitProvisioningConfig.', required: [] })
  .openapi('SubmitProvisioningConfigRequest')

const SubmitProvisioningConfigResponseSchema = z
  .object({
    provisioningConfig: ProvisioningConfigSchema.exactOptional().openapi({
      description: 'The submitted provisioning config.',
    }),
  })
  .openapi({ description: 'Response for SubmitProvisioningConfig.', required: [] })
  .openapi('SubmitProvisioningConfigResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV2InstanceDetachLunRoute = createRoute({
  method: 'post',
  path: '/v2/{instance}:detachLun',
  tags: ['projects'],
  description: 'Detach LUN from Instance.',
  operationId: 'baremetalsolution.projects.locations.instances.detachLun',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the instance.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DetachLunRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2LocationInstanceProvisioningSettingsFetchRoute = createRoute({
  method: 'get',
  path: '/v2/{location}/instanceProvisioningSettings:fetch',
  tags: ['projects'],
  description:
    'Get instance provisioning settings for a given project. This is hidden method used by UI only.',
  operationId: 'baremetalsolution.projects.locations.instanceProvisioningSettings.fetch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      location: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent project and location containing the ProvisioningSettings.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FetchInstanceProvisioningSettingsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2LocationNetworksListNetworkUsageRoute = createRoute({
  method: 'get',
  path: '/v2/{location}/networks:listNetworkUsage',
  tags: ['projects'],
  description:
    'List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.',
  operationId: 'baremetalsolution.projects.locations.networks.listNetworkUsage',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      location: z
        .string()
        .openapi({
          param: {
            description: 'Required. Parent value (project and location).',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListNetworkUsageResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2NameRoute = createRoute({
  method: 'get',
  path: '/v2/{name}',
  tags: ['projects'],
  description:
    'Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.',
  operationId: 'baremetalsolution.projects.locations.volumes.snapshots.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the snapshot.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VolumeSnapshotSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV2NameRoute = createRoute({
  method: 'delete',
  path: '/v2/{name}',
  tags: ['projects'],
  description:
    'Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.',
  operationId: 'baremetalsolution.projects.locations.volumes.snapshots.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the snapshot to delete.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV2NameRoute = createRoute({
  method: 'patch',
  path: '/v2/{name}',
  tags: ['projects'],
  description: 'Update details of a single storage volume.',
  operationId: 'baremetalsolution.projects.locations.volumes.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The list of fields to update. The only currently supported fields are: 'labels'",
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Output only. The resource name of this `Volume`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/volumes/{volume}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: VolumeSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v2/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'baremetalsolution.projects.locations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description:
              'The maximum number of results to return. If not set, the service selects a default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The resource that owns the locations collection, if applicable.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListLocationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameDisableInteractiveSerialConsoleRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:disableInteractiveSerialConsole',
  tags: ['projects'],
  description: 'Disable the interactive serial console feature on an instance.',
  operationId: 'baremetalsolution.projects.locations.instances.disableInteractiveSerialConsole',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the resource.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisableInteractiveSerialConsoleRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameEnableInteractiveSerialConsoleRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:enableInteractiveSerialConsole',
  tags: ['projects'],
  description: 'Enable the interactive serial console feature on an instance.',
  operationId: 'baremetalsolution.projects.locations.instances.enableInteractiveSerialConsole',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the resource.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: EnableInteractiveSerialConsoleRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameEvictRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:evict',
  tags: ['projects'],
  description: "Skips lun's cooloff and deletes it now. Lun must be in cooloff state.",
  operationId: 'baremetalsolution.projects.locations.volumes.luns.evict',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the lun.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EvictLunRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameRenameRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:rename',
  tags: ['projects'],
  description:
    'RenameVolume sets a new name for a volume. Use with caution, previous names become immediately invalidated.',
  operationId: 'baremetalsolution.projects.locations.volumes.rename',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The `name` field is used to identify the volume. Format: projects/{project}/locations/{location}/volumes/{volume}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RenameVolumeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VolumeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameResetRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:reset',
  tags: ['projects'],
  description:
    'Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.',
  operationId: 'baremetalsolution.projects.locations.instances.reset',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the resource.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResetInstanceRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameStartRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:start',
  tags: ['projects'],
  description: 'Starts a server that was shutdown.',
  operationId: 'baremetalsolution.projects.locations.instances.start',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the resource.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StartInstanceRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameStopRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:stop',
  tags: ['projects'],
  description: 'Stop a running server.',
  operationId: 'baremetalsolution.projects.locations.instances.stop',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the resource.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StopInstanceRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentInstancesRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/instances',
  tags: ['projects'],
  description: 'List servers in a given project and location.',
  operationId: 'baremetalsolution.projects.locations.instances.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'List filter.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description:
              'Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A token identifying a page of results from the server.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Parent value for ListInstancesRequest.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListInstancesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentInstancesRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/instances',
  tags: ['projects'],
  description: 'Create an Instance.',
  operationId: 'baremetalsolution.projects.locations.instances.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent project and location.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InstanceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentLunsRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/luns',
  tags: ['projects'],
  description: 'List storage volume luns for given storage volume.',
  operationId: 'baremetalsolution.projects.locations.volumes.luns.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
            description:
              'Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A token identifying a page of results from the server.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Parent value for ListLunsRequest.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListLunsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentNetworksRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/networks',
  tags: ['projects'],
  description: 'List network in a given project and location.',
  operationId: 'baremetalsolution.projects.locations.networks.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'List filter.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description:
              'Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A token identifying a page of results from the server.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Parent value for ListNetworksRequest.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListNetworksResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentNfsSharesRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/nfsShares',
  tags: ['projects'],
  description: 'List NFS shares.',
  operationId: 'baremetalsolution.projects.locations.nfsShares.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'List filter.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description:
              'Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A token identifying a page of results from the server.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Parent value for ListNfsSharesRequest.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListNfsSharesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentNfsSharesRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/nfsShares',
  tags: ['projects'],
  description: 'Create an NFS share.',
  operationId: 'baremetalsolution.projects.locations.nfsShares.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent project and location.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NfsShareSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentProvisioningConfigsRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/provisioningConfigs',
  tags: ['projects'],
  description: 'Create new ProvisioningConfig.',
  operationId: 'baremetalsolution.projects.locations.provisioningConfigs.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Email provided to send a confirmation with provisioning config to.',
            in: 'query',
            name: 'email',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent project and location containing the ProvisioningConfig.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ProvisioningConfigSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProvisioningConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentProvisioningConfigsSubmitRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/provisioningConfigs:submit',
  tags: ['projects'],
  description: 'Submit a provisiong configuration for a given project.',
  operationId: 'baremetalsolution.projects.locations.provisioningConfigs.submit',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent project and location containing the ProvisioningConfig.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SubmitProvisioningConfigRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SubmitProvisioningConfigResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentProvisioningQuotasRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/provisioningQuotas',
  tags: ['projects'],
  description: 'List the budget details to provision resources on a given project.',
  operationId: 'baremetalsolution.projects.locations.provisioningQuotas.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
            description:
              "Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default. Notice that page_size field is not supported and won't be respected in the API request for now, will be updated when pagination is supported.",
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A token identifying a page of results from the server.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Parent value for ListProvisioningQuotasRequest.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListProvisioningQuotasResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentSnapshotsRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/snapshots',
  tags: ['projects'],
  description:
    'Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.',
  operationId: 'baremetalsolution.projects.locations.volumes.snapshots.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
            description:
              'Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A token identifying a page of results from the server.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Parent value for ListVolumesRequest.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListVolumeSnapshotsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentSnapshotsRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/snapshots',
  tags: ['projects'],
  description:
    'Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.',
  operationId: 'baremetalsolution.projects.locations.volumes.snapshots.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The volume to snapshot.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: VolumeSnapshotSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VolumeSnapshotSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentSshKeysRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/sshKeys',
  tags: ['projects'],
  description:
    'Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.',
  operationId: 'baremetalsolution.projects.locations.sshKeys.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
            description: 'The maximum number of items to return.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The next_page_token value returned from a previous List request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent containing the SSH keys. Currently, the only valid value for the location is "global".',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListSSHKeysResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentSshKeysRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/sshKeys',
  tags: ['projects'],
  description:
    'Register a public SSH key in the specified project for use with the interactive serial console feature.',
  operationId: 'baremetalsolution.projects.locations.sshKeys.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      sshKeyId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID to use for the key, which will become the final component of the key's resource name. This value must match the regex: [a-zA-Z0-9@.\\-_]{1,64}",
            in: 'query',
            name: 'sshKeyId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent containing the SSH keys.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SSHKeySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SSHKeySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentVolumesRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/volumes',
  tags: ['projects'],
  description: 'List storage volumes in a given project and location.',
  operationId: 'baremetalsolution.projects.locations.volumes.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'List filter.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description:
              'Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A token identifying a page of results from the server.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Parent value for ListVolumesRequest.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListVolumesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2VolumeSnapshotRestoreVolumeSnapshotRoute = createRoute({
  method: 'post',
  path: '/v2/{volumeSnapshot}:restoreVolumeSnapshot',
  tags: ['projects'],
  description:
    'Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.',
  operationId: 'baremetalsolution.projects.locations.volumes.snapshots.restoreVolumeSnapshot',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      volumeSnapshot: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the snapshot which will be used to restore its parent volume.',
            in: 'path',
            name: 'volumeSnapshot',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RestoreVolumeSnapshotRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2VolumeResizeRoute = createRoute({
  method: 'post',
  path: '/v2/{volume}:resize',
  tags: ['projects'],
  description: 'Emergency Volume resize.',
  operationId: 'baremetalsolution.projects.locations.volumes.resize',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      volume: z
        .string()
        .openapi({
          param: {
            description: 'Required. Volume to resize.',
            in: 'path',
            name: 'volume',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResizeVolumeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
