import { createRoute, z } from '@hono/zod-openapi'

const VmmPingResponseSchema = z
  .object({
    build_version: z.string(),
    version: z.string(),
    pid: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    features: z.array(z.string()),
  })
  .openapi({
    required: ['build_version', 'version', 'pid', 'features'],
    description: 'Virtual Machine Monitor information',
  })
  .openapi('VmmPingResponse')

const VmStateSchema = z
  .enum(['Created', 'Running', 'Shutdown', 'Paused', 'BreakPoint'])
  .openapi('VmState')

const CpuTopologySchema = z
  .object({
    threads_per_core: z.int(),
    cores_per_die: z.int(),
    dies_per_package: z.int(),
    packages: z.int(),
  })
  .openapi({ required: ['threads_per_core', 'cores_per_die', 'dies_per_package', 'packages'] })
  .openapi('CpuTopology')

const CpuAffinitySchema = z
  .object({ vcpu: z.int(), host_cpus: z.array(z.int()) })
  .openapi({ required: ['vcpu', 'host_cpus'] })
  .openapi('CpuAffinity')

const CpuFeaturesSchema = z
  .object({ amx: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('CpuFeatures')

const CoreSchedulingModeSchema = z
  .enum(['Vm', 'Vcpu', 'Off'])
  .default('Vm')
  .openapi('CoreSchedulingMode')

const CpuProfileConfigSchema = z
  .xor([
    z.literal('Host'),
    z
      .strictObject({
        File: z
          .string()
          .openapi({
            description:
              'Path to a JSON CPU profile on the VMM host. The file must remain available with unchanged contents for reboot and restore, including at a migration destination.',
          }),
      })
      .openapi({ required: ['File'] }),
  ])
  .default('Host')
  .openapi({
    description:
      'CPU profile. File selects a JSON profile by path and is supported on x86-64 with KVM. Other platforms support Host only.',
  })
  .openapi('CpuProfileConfig')

const CpuidValueSchema = z
  .string()
  .regex(/^0x[0-9a-fA-F]{1,8}$/)
  .openapi({ description: 'Unsigned 32-bit value encoded as a 0x-prefixed hex string.' })
  .openapi('CpuidValue')

const CpuidOverrideSchema = z
  .object({
    leaf: CpuidValueSchema,
    subleaf: CpuidValueSchema,
    eax: CpuidValueSchema,
    ebx: CpuidValueSchema,
    ecx: CpuidValueSchema,
    edx: CpuidValueSchema,
  })
  .openapi({ required: ['leaf', 'subleaf', 'eax', 'ebx', 'ecx', 'edx'] })
  .openapi('CpuidOverride')

const CpusConfigSchema = z
  .object({
    boot_vcpus: z.int().min(1),
    max_vcpus: z.int().min(1),
    topology: CpuTopologySchema.exactOptional(),
    kvm_hyperv: z.boolean().default(false).exactOptional(),
    kvm_hint_realtime: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Advertise KVM_HINTS_REALTIME to the guest (x86-64 with KVM only)' }),
    max_phys_bits: z.int().exactOptional(),
    nested: z.boolean().default(false).exactOptional(),
    affinity: z.array(CpuAffinitySchema).exactOptional(),
    features: CpuFeaturesSchema.exactOptional(),
    core_scheduling: CoreSchedulingModeSchema.exactOptional(),
    profile: CpuProfileConfigSchema.exactOptional(),
    'x-cpuid-overrides': z
      .array(CpuidOverrideSchema)
      .default([])
      .exactOptional()
      .openapi({
        description:
          'Experimental x86-64 common CPUID register overrides, applied in order after the selected CPU profile and before per-vCPU adjustments. The caller must ensure host compatibility.\n',
      }),
  })
  .openapi({ required: ['boot_vcpus', 'max_vcpus'] })
  .openapi('CpusConfig')

const MemoryZoneConfigSchema = z
  .object({
    id: z.string(),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    file: z.string().exactOptional(),
    mergeable: z.boolean().default(false).exactOptional(),
    shared: z.boolean().default(false).exactOptional(),
    hugepages: z.boolean().default(false).exactOptional(),
    hugepage_size: z
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
    host_numa_node: z.int32().exactOptional(),
    hotplug_size: z
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
    hotplugged_size: z
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
    prefault: z.boolean().default(false).exactOptional(),
    reserve: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defaults to the value of hugepages.' }),
  })
  .openapi({ required: ['id', 'size'] })
  .openapi('MemoryZoneConfig')

const MemoryConfigSchema = z
  .object({
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    hotplug_size: z
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
    hotplugged_size: z
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
    mergeable: z.boolean().default(false).exactOptional(),
    hotplug_method: z
      .enum(['Acpi', 'VirtioMem'])
      .default('Acpi')
      .exactOptional()
      .openapi({
        description:
          'ACPI memory hotplug is deprecated and will be removed in a future release. Use VirtioMem instead.',
      }),
    shared: z.boolean().default(false).exactOptional(),
    hugepages: z.boolean().default(false).exactOptional(),
    hugepage_size: z
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
    prefault: z.boolean().default(false).exactOptional(),
    reserve: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defaults to the value of hugepages.' }),
    thp: z.boolean().default(true).exactOptional(),
    zones: z.array(MemoryZoneConfigSchema).exactOptional(),
  })
  .openapi({ required: ['size'] })
  .openapi('MemoryConfig')

const PayloadConfigSchema = z
  .object({
    firmware: z.string().exactOptional(),
    kernel: z.string().exactOptional(),
    cmdline: z.string().exactOptional(),
    initramfs: z.string().exactOptional(),
    igvm: z.string().exactOptional(),
    host_data: z.string().exactOptional(),
  })
  .openapi({ description: 'Payloads to boot in guest', required: [] })
  .openapi('PayloadConfig')

const TokenBucketSchema = z
  .object({
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description: 'The total number of tokens this bucket can hold.',
      }),
    one_time_burst: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description: 'The initial size of a token bucket.',
      }),
    refill_time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description: 'The amount of milliseconds it takes for the bucket to refill.',
      }),
    burst_rate: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        description:
          'The peak rate in tokens per second (bytes/s for bandwidth, operations/s for ops). Enables bounded bursts.',
      }),
    burst_seconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        description:
          'The burst length in seconds, with depth equal to burst_rate times burst_seconds. Requires burst_rate and defaults to 1 when burst_rate is set.',
      }),
    burst_recharge_seconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        description:
          'The seconds to regain full burst credit from empty while idle. Requires burst_rate and defaults to burst_rate times burst_seconds divided by the sustained rate.',
      }),
  })
  .openapi({
    required: ['size', 'refill_time'],
    description:
      'A plain bucket holds _size_ tokens, refills over _refill_time_ milliseconds, and allows initial _one_time_burst_ credit that does not replenish. Available tokens can be consumed at device speed. With bounded bursts, _size_ and _refill_time_ define the sustained rate, and the full initial depth is _burst_rate_ times _burst_seconds_. A peak bucket holds _burst_rate_ tokens and refills at _burst_rate_ tokens/s; requests need both meters. This is a token-bucket envelope, not a strict per-second ceiling, and oversized requests carry debt. Optional _burst_recharge_seconds_ changes idle recharge time without increasing the rate under continuous demand.',
  })
  .openapi('TokenBucket')

const RateLimiterConfigSchema = z
  .object({ bandwidth: TokenBucketSchema.exactOptional(), ops: TokenBucketSchema.exactOptional() })
  .openapi({
    description:
      'Defines an IO rate limiter with independent bytes/s and ops/s limits. Limits are defined by configuring each of the _bandwidth_ and _ops_ token buckets.',
    required: [],
  })
  .openapi('RateLimiterConfig')

const RateLimitGroupConfigSchema = z
  .object({ id: z.string(), rate_limiter_config: RateLimiterConfigSchema })
  .openapi({ required: ['id', 'rate_limiter_config'] })
  .openapi('RateLimitGroupConfig')

const IommuTypeSchema = z
  .enum(['Off', 'Virtio', 'Smmuv3'])
  .default('Off')
  .openapi({ description: 'Virtual IOMMU the device is attached to.' })
  .openapi('IommuType')

const VirtQueueAffinitySchema = z
  .object({ queue_index: z.int(), host_cpus: z.array(z.int()) })
  .openapi({ required: ['queue_index', 'host_cpus'] })
  .openapi('VirtQueueAffinity')

const ImageTypeSchema = z
  .enum(['FlatVmdk', 'FixedVhd', 'Qcow2', 'Raw', 'Vhdx', 'Unknown'])
  .openapi({ description: 'Unknown is only valid for vhost-user disks.' })
  .openapi('ImageType')

const LockGranularitySchema = z
  .enum(['ByteRange', 'Full'])
  .default('ByteRange')
  .openapi('LockGranularity')

const DiskConfigSchema = z
  .object({
    path: z.string().exactOptional(),
    readonly: z.boolean().default(false).exactOptional(),
    direct: z.boolean().default(false).exactOptional(),
    iommu: IommuTypeSchema.exactOptional(),
    num_queues: z.int().default(1).exactOptional(),
    queue_size: z.int().default(128).exactOptional(),
    vhost_user: z.boolean().default(false).exactOptional(),
    vhost_socket: z.string().exactOptional(),
    rate_limiter_config: RateLimiterConfigSchema.exactOptional(),
    pci_segment: z.int().exactOptional(),
    pci_device_id: z.int().exactOptional(),
    id: z.string().exactOptional(),
    serial: z.string().exactOptional(),
    rate_limit_group: z.string().exactOptional(),
    queue_affinity: z.array(VirtQueueAffinitySchema).exactOptional(),
    backing_files: z.boolean().default(false).exactOptional(),
    sparse: z.boolean().default(true).exactOptional(),
    image_type: ImageTypeSchema.exactOptional(),
    lock_granularity: LockGranularitySchema.exactOptional(),
    guest_block_size: z.int().exactOptional(),
  })
  .openapi({ description: 'image_type is required unless vhost_user is true.', required: [] })
  .openapi('DiskConfig')

const NetConfigSchema = z
  .object({
    tap: z.string().exactOptional(),
    ip: z
      .string()
      .exactOptional()
      .openapi({
        description: 'IPv4 or IPv6 address. If omitted, no address is assigned to the TAP device.',
      }),
    mask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Must be a valid IPv4 netmask if ip is an IPv4 address or a valid IPv6 netmask if ip is an IPv6 address.',
      }),
    mac: z.string().exactOptional(),
    host_mac: z.string().exactOptional(),
    mtu: z.int().exactOptional(),
    iommu: IommuTypeSchema.exactOptional(),
    num_queues: z.int().default(2).exactOptional(),
    queue_size: z.int().default(256).exactOptional(),
    vhost_user: z.boolean().default(false).exactOptional(),
    vhost_socket: z.string().exactOptional(),
    vhost_mode: z.enum(['Client', 'Server']).default('Client').exactOptional(),
    id: z.string().exactOptional(),
    pci_segment: z.int().exactOptional(),
    pci_device_id: z.int().exactOptional(),
    rate_limiter_config: RateLimiterConfigSchema.exactOptional(),
    offload_tso: z.boolean().default(false).exactOptional(),
    offload_ufo: z.boolean().default(false).exactOptional(),
    offload_csum: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NetConfig')

const RngConfigSchema = z
  .object({
    id: z.string().exactOptional(),
    pci_segment: z.int().exactOptional(),
    pci_device_id: z.int().exactOptional(),
    iommu: IommuTypeSchema.exactOptional(),
    src: z.string(),
  })
  .openapi({ required: ['src'] })
  .openapi('RngConfig')

const BalloonConfigSchema = z
  .object({
    id: z.string().exactOptional(),
    pci_segment: z.int().exactOptional(),
    pci_device_id: z.int().exactOptional(),
    iommu: IommuTypeSchema.exactOptional(),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    deflate_on_oom: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Deflate balloon when the guest is under memory pressure.' }),
    free_page_reporting: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Enable guest to report free pages.' }),
  })
  .openapi({ required: ['size'] })
  .openapi('BalloonConfig')

const FsConfigSchema = z
  .object({
    tag: z.string(),
    socket: z.string(),
    num_queues: z.int().default(1).exactOptional(),
    queue_size: z.int().default(1024).exactOptional(),
    pci_segment: z.int().exactOptional(),
    pci_device_id: z.int().exactOptional(),
    id: z.string().exactOptional(),
  })
  .openapi({ required: ['socket', 'tag'] })
  .openapi('FsConfig')

const GenericVhostUserConfigSchema = z
  .object({
    socket: z.string(),
    queue_sizes: z.array(z.int()),
    pci_segment: z.int().exactOptional(),
    pci_device_id: z.int().exactOptional(),
    id: z.string().exactOptional(),
    device_type: z.uint32(),
  })
  .openapi({ required: ['queue_sizes', 'socket', 'device_type'] })
  .openapi('GenericVhostUserConfig')

const PmemConfigSchema = z
  .object({
    file: z.string(),
    size: z
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
    iommu: IommuTypeSchema.exactOptional(),
    discard_writes: z.boolean().default(false).exactOptional(),
    pci_segment: z.int().exactOptional(),
    pci_device_id: z.int().exactOptional(),
    id: z.string().exactOptional(),
  })
  .openapi({ required: ['file'] })
  .openapi('PmemConfig')

const TcpConsoleConfigSchema = z
  .strictObject({
    address: z
      .string()
      .openapi({
        description:
          'Loopback IPv4 or IPv6 literal and a nonzero port.\nIPv6 addresses must be enclosed in brackets.\nHostnames are not accepted.\n',
        example: '127.0.0.1:4444',
      }),
    server: z
      .literal(true)
      .default(true)
      .exactOptional()
      .openapi({ description: 'Only server mode is supported.' }),
  })
  .openapi({ required: ['address'] })
  .openapi('TcpConsoleConfig')

const ConsoleModeSchema = z
  .enum(['Off', 'Pty', 'Tty', 'File', 'Socket', 'Tcp', 'Null'])
  .openapi('ConsoleMode')

const SerialConfigSchema = z
  .object({
    file: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if `mode` is `File`. For `Pty`, it holds the path of the\nPTY once the device has been created.\n',
      }),
    socket: z.string().exactOptional().openapi({ description: 'Required if `mode` is `Socket`.' }),
    tcp: TcpConsoleConfigSchema.exactOptional().openapi({
      description: 'Required if `mode` is `Tcp`.',
    }),
    mode: ConsoleModeSchema,
  })
  .openapi({ required: ['mode'] })
  .openapi('SerialConfig')

const ConsoleConfigSchema = z
  .object({
    file: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if `mode` is `File`. For `Pty`, it holds the path of the\nPTY once the device has been created.\n',
      }),
    socket: z.string().exactOptional().openapi({ description: 'Required if `mode` is `Socket`.' }),
    tcp: TcpConsoleConfigSchema.exactOptional().openapi({
      description: 'Required if `mode` is `Tcp`.',
    }),
    mode: ConsoleModeSchema,
    iommu: IommuTypeSchema.exactOptional(),
    id: z.string().exactOptional(),
    pci_segment: z.int().exactOptional(),
    pci_device_id: z.int().exactOptional(),
  })
  .openapi({ required: ['mode'] })
  .openapi('ConsoleConfig')

const DebugConsoleConfigSchema = z
  .object({
    file: z.string().exactOptional().openapi({ description: 'Required if `mode` is `File`.' }),
    mode: z.enum(['Off', 'Tty', 'File', 'Null']),
    iobase: z.int().exactOptional(),
  })
  .openapi({ required: ['mode'] })
  .openapi('DebugConsoleConfig')

const DeviceConfigSchema = z
  .object({
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Sysfs path of the VFIO device. Exactly one of `path` or an\nexternally-opened cdev FD must be supplied; an FD is passed\nout of band via SCM_RIGHTS on the UNIX domain socket, never\nin this body.\n',
      }),
    iommu: IommuTypeSchema.exactOptional(),
    pci_segment: z.int().exactOptional(),
    pci_device_id: z.int().exactOptional(),
    id: z.string().exactOptional(),
    x_nv_gpudirect_clique: z.int().exactOptional(),
    x_exclude_mmap_bars: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeviceConfig')

const UserDeviceConfigSchema = z
  .object({
    socket: z.string(),
    id: z.string().exactOptional(),
    pci_segment: z.int().exactOptional(),
    pci_device_id: z.int().exactOptional(),
  })
  .openapi({ required: ['socket'] })
  .openapi('UserDeviceConfig')

const VdpaConfigSchema = z
  .object({
    path: z.string(),
    num_queues: z.int().default(1).exactOptional(),
    iommu: IommuTypeSchema.exactOptional(),
    pci_segment: z.int().exactOptional(),
    pci_device_id: z.int().exactOptional(),
    id: z.string().exactOptional(),
  })
  .openapi({ required: ['path'] })
  .openapi('VdpaConfig')

const VsockConfigSchema = z
  .object({
    cid: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(3n).max(4294967294n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 3,
        maximum: 4294967294,
        description: 'Guest Vsock CID',
      }),
    socket: z
      .string()
      .openapi({ description: 'Path to UNIX domain socket, used to proxy vsock connections.' }),
    socket_type: z
      .enum(['Stream', 'SeqPacket'])
      .default('Stream')
      .exactOptional()
      .openapi({ description: 'UNIX listener socket type for host initiated connections.' }),
    iommu: IommuTypeSchema.exactOptional(),
    pci_segment: z.int().exactOptional(),
    pci_device_id: z.int().exactOptional(),
    id: z.string().exactOptional(),
  })
  .openapi({ required: ['cid', 'socket'] })
  .openapi('VsockConfig')

const NumaDistanceSchema = z
  .object({ destination: z.int32(), distance: z.int() })
  .openapi({ required: ['destination', 'distance'] })
  .openapi('NumaDistance')

const NumaConfigSchema = z
  .object({
    guest_numa_id: z.int32(),
    cpus: z.array(z.int32()).exactOptional(),
    distances: z.array(NumaDistanceSchema).exactOptional(),
    memory_zones: z.array(z.string()).exactOptional(),
    pci_segments: z.array(z.int()).exactOptional(),
    device_id: z.string().exactOptional(),
  })
  .openapi({ required: ['guest_numa_id'] })
  .openapi('NumaConfig')

const RtcConfigSchema = z
  .object({
    id: z.string().exactOptional(),
    pci_segment: z.int().exactOptional(),
    pci_device_id: z.int().exactOptional(),
    iommu: IommuTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RtcConfig')

const PciSegmentConfigSchema = z
  .object({
    pci_segment: z.int().default(0).exactOptional(),
    mmio32_aperture_weight: z.int32().exactOptional(),
    mmio64_aperture_weight: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PciSegmentConfig')

const PlatformConfigSchema = z
  .object({
    num_pci_segments: z.int().exactOptional(),
    iommu_segments: z.array(z.int()).exactOptional(),
    iommu_address_width_bits: z.int().exactOptional(),
    system_serial_number: z.string().exactOptional(),
    system_uuid: z.string().exactOptional(),
    oem_strings: z.array(z.string()).exactOptional(),
    system_manufacturer: z.string().exactOptional(),
    system_product_name: z.string().exactOptional(),
    system_version: z.string().exactOptional(),
    system_family: z.string().exactOptional(),
    system_sku_number: z.string().exactOptional(),
    chassis_asset_tag: z.string().exactOptional(),
    sev_snp: z.boolean().default(false).exactOptional(),
    iommufd: z.boolean().default(false).exactOptional(),
    vfio_p2p_dma: z.boolean().default(true).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlatformConfig')

const TpmConfigSchema = z
  .object({ socket: z.string() })
  .openapi({ required: ['socket'] })
  .openapi('TpmConfig')

const LandlockConfigSchema = z
  .object({ path: z.string(), access: z.string() })
  .openapi({ required: ['path', 'access'] })
  .openapi('LandlockConfig')

const VmConfigSchema = z
  .object({
    cpus: CpusConfigSchema.exactOptional(),
    memory: MemoryConfigSchema.exactOptional(),
    payload: PayloadConfigSchema,
    rate_limit_groups: z.array(RateLimitGroupConfigSchema).exactOptional(),
    disks: z.array(DiskConfigSchema).exactOptional(),
    net: z.array(NetConfigSchema).exactOptional(),
    rng: RngConfigSchema.exactOptional(),
    balloon: BalloonConfigSchema.exactOptional(),
    fs: z.array(FsConfigSchema).exactOptional(),
    generic_vhost_user: z.array(GenericVhostUserConfigSchema).exactOptional(),
    pmem: z.array(PmemConfigSchema).exactOptional(),
    serial: SerialConfigSchema.exactOptional(),
    console: ConsoleConfigSchema.exactOptional(),
    debug_console: DebugConsoleConfigSchema.exactOptional(),
    devices: z.array(DeviceConfigSchema).exactOptional(),
    user_devices: z.array(UserDeviceConfigSchema).exactOptional(),
    vdpa: z.array(VdpaConfigSchema).exactOptional(),
    vsock: VsockConfigSchema.exactOptional(),
    numa: z.array(NumaConfigSchema).exactOptional(),
    watchdog: z.boolean().default(false).exactOptional(),
    rtc: RtcConfigSchema.exactOptional(),
    pvpanic: z.boolean().default(false).exactOptional(),
    pci_segments: z.array(PciSegmentConfigSchema).exactOptional(),
    platform: PlatformConfigSchema.exactOptional(),
    tpm: TpmConfigSchema.exactOptional(),
    landlock_enable: z.boolean().default(false).exactOptional(),
    landlock_rules: z.array(LandlockConfigSchema).exactOptional(),
  })
  .openapi({ required: ['payload'], description: 'Virtual machine configuration' })
  .openapi('VmConfig')

const DeviceNodeSchema = z
  .object({
    id: z.string(),
    resources: z.array(z.looseObject({})),
    parent: z.string().exactOptional(),
    children: z.array(z.string()),
    pci_bdf: z.string().exactOptional(),
  })
  .openapi({ required: ['id', 'resources', 'children'] })
  .openapi('DeviceNode')

const VmInfoSchema = z
  .object({
    config: VmConfigSchema,
    state: VmStateSchema,
    memory_actual_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    device_tree: z.record(z.string(), DeviceNodeSchema).exactOptional(),
  })
  .openapi({
    required: ['config', 'state', 'memory_actual_size'],
    description: 'Virtual Machine information',
  })
  .openapi('VmInfo')

const VmCountersSchema = z
  .record(
    z.string(),
    z
      .object({
        device_type: z
          .string()
          .openapi({ description: 'The virtio device type, such as block or net' }),
      })
      .catchall(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64(),
          )
          .openapi({ type: 'integer', format: 'uint64' }),
      )
      .openapi({ required: ['device_type'] }),
  )
  .openapi('VmCounters')

const BalloonStatsSchema = z
  .object({
    swap_in: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Memory swapped into the guest in bytes',
      }),
    swap_out: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Memory swapped out by the guest in bytes',
      }),
    major_faults: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Number of major page faults' }),
    minor_faults: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Number of minor page faults' }),
    free_memory: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Unused guest memory in bytes' }),
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
      .openapi({ type: 'integer', format: 'int64', description: 'Total guest memory in bytes' }),
    available_memory: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Guest memory available without swapping in bytes',
      }),
    disk_caches: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Reclaimable guest disk caches in bytes',
      }),
    hugetlb_allocations: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Number of successful hugetlb allocations',
      }),
    hugetlb_failures: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Number of failed hugetlb allocations',
      }),
    oom_kills: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Number of guest OOM kills reported by Linux',
      }),
    alloc_stalls: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Number of guest memory allocation stalls reported by Linux',
      }),
    async_scans: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Memory scanned asynchronously by Linux in bytes',
      }),
    direct_scans: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Memory scanned directly by Linux in bytes',
      }),
    async_reclaims: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Memory reclaimed asynchronously by Linux in bytes',
      }),
    direct_reclaims: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Memory reclaimed directly by Linux in bytes',
      }),
  })
  .openapi({ required: [] })
  .openapi('BalloonStats')

const BalloonStatsResponseSchema = z
  .object({
    balloon_actual: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Current balloon size in bytes' }),
    last_update: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Host UNIX timestamp in milliseconds when statistics were last updated, or zero before the first sample',
      }),
    stats: BalloonStatsSchema,
  })
  .openapi({ required: ['balloon_actual', 'last_update', 'stats'] })
  .openapi('BalloonStatsResponse')

const PciDeviceInfoSchema = z
  .object({ id: z.string(), bdf: z.string() })
  .openapi({ required: ['id', 'bdf'], description: 'Information about a PCI device' })
  .openapi('PciDeviceInfo')

const VmResizeSchema = z
  .object({
    desired_vcpus: z.int().min(1).exactOptional(),
    desired_ram: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'desired memory ram in bytes' }),
    desired_balloon: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'desired balloon size in bytes' }),
  })
  .openapi({ required: [] })
  .openapi('VmResize')

const VmResizeDiskSchema = z
  .object({
    id: z.string().openapi({ description: 'disk identifier' }),
    desired_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'desired disk size in bytes' }),
  })
  .openapi({ required: ['id', 'desired_size'] })
  .openapi('VmResizeDisk')

const VmResizeZoneSchema = z
  .object({
    id: z.string(),
    desired_ram: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'desired memory zone size in bytes',
      }),
  })
  .openapi({ required: ['id', 'desired_ram'] })
  .openapi('VmResizeZone')

const VmRemoveDeviceSchema = z
  .object({ id: z.string() })
  .openapi({ required: ['id'] })
  .openapi('VmRemoveDevice')

const VmSnapshotConfigSchema = z
  .object({ destination_url: z.string() })
  .openapi({ required: ['destination_url'] })
  .openapi('VmSnapshotConfig')

const VmCoredumpDataSchema = z
  .object({ destination_url: z.string() })
  .openapi({ required: ['destination_url'] })
  .openapi('VmCoredumpData')

const MemoryRestoreModeSchema = z
  .enum(['Copy', 'OnDemand', 'OnDemandNoBackgroundFetchPages', 'CopyOnWrite'])
  .default('Copy')
  .openapi('MemoryRestoreMode')

const ExternalFdTargetSchema = z
  .xor([
    z
      .object({ Net: z.object({ id: z.string() }).openapi({ required: ['id'] }) })
      .openapi({ required: ['Net'] }),
    z
      .object({ Vfio: z.object({ id: z.string() }).openapi({ required: ['id'] }) })
      .openapi({ required: ['Vfio'] }),
    z.literal('Iommu'),
  ])
  .openapi('ExternalFdTarget')

const RestoredNetConfigSchema = z
  .object({
    id: z.string(),
    num_fds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .default(0n)
      .exactOptional()
      .openapi({ type: 'integer', format: 'uint64', default: 0 }),
    fds: z
      .array(z.int32())
      .exactOptional()
      .openapi({ description: 'Descriptor numbers in JSON are ignored; use SCM_RIGHTS.' }),
  })
  .openapi({ required: ['id'] })
  .openapi('RestoredNetConfig')

const RestoredVfioConfigSchema = z
  .object({
    id: z.string(),
    fd: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The descriptor number in JSON is ignored; use SCM_RIGHTS.' }),
  })
  .openapi({ required: ['id'] })
  .openapi('RestoredVfioConfig')

const VmMemoryZoneUpdateDataSchema = z
  .object({ id: z.string().min(1), host_numa_node: z.uint32().min(0) })
  .openapi({ required: ['id', 'host_numa_node'] })
  .openapi('VmMemoryZoneUpdateData')

const RestoreConfigSchema = z
  .object({
    source_url: z.string(),
    prefault: z.boolean().exactOptional(),
    memory_restore_mode: MemoryRestoreModeSchema.exactOptional(),
    net_fds: z
      .array(RestoredNetConfigSchema)
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Deprecated: use external_fds with Net targets instead.\n',
      }),
    vfio_fds: z
      .array(RestoredVfioConfigSchema)
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Deprecated: use external_fds with Vfio targets instead.\n',
      }),
    iommufd_fd: z
      .int32()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Deprecated: use external_fds with an Iommu target instead.\n',
      }),
    resume: z.boolean().exactOptional(),
    zone_updates: z.array(VmMemoryZoneUpdateDataSchema).exactOptional(),
    serial: SerialConfigSchema.exactOptional().openapi({
      description: 'New output of the serial console, in the mode of the snapshot.',
    }),
    console: SerialConfigSchema.exactOptional().openapi({
      description: 'New output of the virtio console, in the mode of the snapshot.',
    }),
    external_fds: z
      .array(
        z
          .object({
            target: ExternalFdTargetSchema,
            expected_fds: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.uint64(),
              )
              .openapi({
                type: 'integer',
                format: 'uint64',
                description: 'Number of file descriptors expected for this entry.',
              }),
          })
          .openapi({ required: ['target', 'expected_fds'] }),
      )
      .exactOptional()
      .openapi({
        description:
          'File descriptor entries and counts. The corresponding descriptors must be supplied out of band via SCM_RIGHTS on the API UNIX socket. Do not combine external_fds with legacy FD fields.\n',
      }),
  })
  .openapi({ required: ['source_url'] })
  .openapi('RestoreConfig')

const ReceiveMigrationDataSchema = z
  .object({
    receiver_url: z.string(),
    vfio_fds: z
      .array(RestoredVfioConfigSchema)
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Deprecated: use external_fds with Vfio targets instead.\n',
      }),
    iommufd_fd: z
      .int32()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Deprecated: use external_fds with an Iommu target instead.\n',
      }),
    tls_dir: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Directory containing the TLS server certificate (server-cert.pem), the TLS server key (server-key.pem), and the client TLS root CA certificate (ca-cert.pem). TLS is only supported with tcp:<host>:<port> receiver URLs. Recommended for all TCP migrations. Omitting it is only intended for development and testing, as TCP migration is then unencrypted and unauthenticated.\n',
      }),
    zone_updates: z.array(VmMemoryZoneUpdateDataSchema).exactOptional(),
    background_fetch_pages: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Enable the background thread for faulting all remaining pages.' }),
    serial: SerialConfigSchema.exactOptional().openapi({
      description: 'New output of the serial console, in the mode of the source VM.',
    }),
    console: SerialConfigSchema.exactOptional().openapi({
      description: 'New output of the virtio console, in the mode of the source VM.',
    }),
    external_fds: z
      .array(
        z
          .object({
            target: ExternalFdTargetSchema,
            expected_fds: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.uint64(),
              )
              .openapi({
                type: 'integer',
                format: 'uint64',
                description: 'Number of file descriptors expected for this entry.',
              }),
          })
          .openapi({ required: ['target', 'expected_fds'] }),
      )
      .exactOptional()
      .openapi({
        description:
          'File descriptor entries and counts. The corresponding descriptors must be supplied out of band via SCM_RIGHTS on the API UNIX socket. Do not combine external_fds with legacy FD fields.\n',
      }),
  })
  .openapi({ required: ['receiver_url'] })
  .openapi('ReceiveMigrationData')

const MigrationModeSchema = z
  .enum(['MemFDs', 'Precopy', 'Postcopy'])
  .default('Precopy')
  .openapi({
    description:
      'Memory transfer mode. MemFDs passes the guest memory backing file descriptors to the destination over a UNIX socket. MemFDs requires every guest memory region to use shared memory or hugepage backing. Precopy transfers all guest memory before the destination resumes. Postcopy resumes the destination first and faults guest pages in on demand.\n',
  })
  .openapi('MigrationMode')

const TimeoutStrategySchema = z
  .enum(['Cancel', 'Ignore'])
  .default('Cancel')
  .openapi({
    description:
      'The strategy to apply when the migration timeout is reached. Cancel will abort the migration and keep the VM running on the source. Ignore will proceed with the migration regardless of the downtime requirement.\n',
  })
  .openapi('TimeoutStrategy')

const SendMigrationDataSchema = z
  .object({
    destination_url: z.string(),
    local: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Deprecated: set memory_mode to "MemFDs" instead. If true, the request is treated as if memory_mode were "MemFDs".\n',
      }),
    preserve_source: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Keep the source VM alive in a paused state after migration completes. This is only supported when memory_mode is "MemFDs" or the deprecated local property is true.\n',
      }),
    downtime_ms: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .default(300n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        default: 300,
        description:
          'The maximum downtime the migration aims for, in milliseconds. Defaults to 300ms.\n',
      }),
    timeout_s: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .default(3600n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        default: 3600,
        description:
          'The timeout for the migration (maximum total duration), in seconds. Defaults to 3600s (one hour).\n',
      }),
    timeout_strategy: TimeoutStrategySchema.exactOptional(),
    connections: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(128n),
      )
      .default(1n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 128,
        default: 1,
        description:
          'The number of parallel TCP connections to use for migration. Must be between 1 and 128. Multiple connections are not supported with UNIX domain socket migration.\n',
      }),
    tls_dir: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Directory containing the TLS root CA certificate (ca-cert.pem), the TLS client certificate (client-cert.pem), and TLS client key (client-key.pem). TLS is only supported with tcp:<host>:<port> destination URLs. Recommended for all TCP migrations. Omitting it is only intended for development and testing, as TCP migration is then unencrypted and unauthenticated.\n',
      }),
    memory_mode: MigrationModeSchema.exactOptional(),
  })
  .openapi({ required: ['destination_url'] })
  .openapi('SendMigrationData')

const VmAddUserDeviceSchema = z
  .object({
    socket: z.string(),
    pci_segment: z.int().exactOptional(),
    pci_device_id: z.int().exactOptional(),
    id: z.string().exactOptional(),
  })
  .openapi({ required: ['socket'] })
  .openapi('VmAddUserDevice')

export const getVmmPingRoute = createRoute({
  method: 'get',
  path: '/vmm.ping',
  summary: 'Ping the VMM to check for API server availability',
  responses: {
    200: {
      description: 'The VMM information',
      content: { 'application/json': { schema: VmmPingResponseSchema } },
    },
  },
})

export const putVmmShutdownRoute = createRoute({
  method: 'put',
  path: '/vmm.shutdown',
  summary: 'Shuts the cloud-hypervisor VMM.',
  operationId: 'shutdownVMM',
  responses: {
    204: { description: 'The VMM successfully shutdown.' },
    409: { description: 'The operation conflicts with the current state of the VM.' },
  },
})

export const getVmInfoRoute = createRoute({
  method: 'get',
  path: '/vm.info',
  summary: 'Returns general information about the cloud-hypervisor Virtual Machine (VM) instance.',
  responses: {
    200: {
      description: 'The VM information',
      content: { 'application/json': { schema: VmInfoSchema } },
    },
    404: { description: 'The VM information is not available because the VM is not created.' },
  },
})

export const getVmCountersRoute = createRoute({
  method: 'get',
  path: '/vm.counters',
  summary: 'Get counters from the VM',
  responses: {
    200: {
      description: 'The VM counters',
      content: { 'application/json': { schema: VmCountersSchema } },
    },
    409: { description: 'The operation conflicts with the current state of the VM.' },
  },
})

export const getVmBalloonStatsRoute = createRoute({
  method: 'get',
  path: '/vm.balloon-stats',
  summary: 'Get cached statistics from the virtio-balloon device',
  responses: {
    200: {
      description: 'Most recently reported virtio-balloon statistics',
      content: { 'application/json': { schema: BalloonStatsResponseSchema } },
    },
    409: { description: 'The operation conflicts with the current state of the VM.' },
    500: {
      description:
        'The statistics could not be retrieved, e.g. the statistics feature was not negotiated with the guest driver.',
    },
  },
})

export const putVmCreateRoute = createRoute({
  method: 'put',
  path: '/vm.create',
  summary:
    'Create the cloud-hypervisor Virtual Machine (VM) instance. The instance is not booted, only created.',
  operationId: 'createVM',
  request: {
    body: {
      description: 'The VM configuration',
      content: { 'application/json': { schema: VmConfigSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The VM instance was successfully created.' },
    409: { description: 'The operation conflicts with the current state of the VM.' },
  },
})

export const putVmDeleteRoute = createRoute({
  method: 'put',
  path: '/vm.delete',
  summary: 'Delete the cloud-hypervisor Virtual Machine (VM) instance.',
  operationId: 'deleteVM',
  responses: {
    204: { description: 'The VM instance was successfully deleted.' },
    409: { description: 'The operation conflicts with the current state of the VM.' },
  },
})

export const putVmBootRoute = createRoute({
  method: 'put',
  path: '/vm.boot',
  summary: 'Boot the previously created VM instance.',
  operationId: 'bootVM',
  responses: {
    204: { description: 'The VM instance successfully booted.' },
    404: { description: 'The VM instance could not boot because it is not created yet' },
    409: { description: 'The operation conflicts with the current state of the VM.' },
  },
})

export const putVmPauseRoute = createRoute({
  method: 'put',
  path: '/vm.pause',
  summary: 'Pause a previously booted VM instance.',
  operationId: 'pauseVM',
  responses: {
    204: { description: 'The VM instance successfully paused.' },
    404: { description: 'The VM instance could not pause because it is not created yet' },
    405: { description: 'The VM instance could not pause because it is not booted.' },
    409: { description: 'The operation conflicts with the current state of the VM.' },
  },
})

export const putVmResumeRoute = createRoute({
  method: 'put',
  path: '/vm.resume',
  summary: 'Resume a previously paused VM instance.',
  operationId: 'resumeVM',
  responses: {
    204: { description: 'The VM instance successfully resumed.' },
    404: { description: 'The VM instance could not resume because it is not booted yet' },
    405: { description: 'The VM instance could not resume because it is not paused.' },
    409: { description: 'The operation conflicts with the current state of the VM.' },
  },
})

export const putVmShutdownRoute = createRoute({
  method: 'put',
  path: '/vm.shutdown',
  summary: 'Shut the VM instance down.',
  operationId: 'shutdownVM',
  responses: {
    204: { description: 'The VM instance successfully shut down.' },
    404: { description: 'The VM instance could not shut down because is not created.' },
    405: { description: 'The VM instance could not shut down because it is not started.' },
    409: { description: 'The operation conflicts with the current state of the VM.' },
  },
})

export const putVmRebootRoute = createRoute({
  method: 'put',
  path: '/vm.reboot',
  summary: 'Reboot the VM instance.',
  operationId: 'rebootVM',
  responses: {
    204: { description: 'The VM instance successfully rebooted.' },
    404: { description: 'The VM instance could not reboot because it is not created.' },
    405: { description: 'The VM instance could not reboot because it is not booted.' },
    409: { description: 'The operation conflicts with the current state of the VM.' },
  },
})

export const putVmPowerButtonRoute = createRoute({
  method: 'put',
  path: '/vm.power-button',
  summary: 'Trigger a power button in the VM',
  operationId: 'power-buttonVM',
  responses: {
    204: { description: 'Power button successfully triggered in the VM' },
    404: { description: 'The button could not be triggered because it is not created yet' },
    405: { description: 'The button could not be triggered because it is not booted.' },
    409: { description: 'The operation conflicts with the current state of the VM.' },
  },
})

export const putVmResizeRoute = createRoute({
  method: 'put',
  path: '/vm.resize',
  summary: 'Resize the VM',
  request: {
    body: {
      description: 'The target size for the VM',
      content: { 'application/json': { schema: VmResizeSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The VM instance was successfully resized.' },
    404: { description: 'The VM instance could not be resized because it is not created.' },
    409: { description: 'The operation conflicts with the current state of the VM.' },
    429: {
      description: 'The VM instance could not be resized because a cpu removal is still pending.',
    },
  },
})

export const putVmResizeDiskRoute = createRoute({
  method: 'put',
  path: '/vm.resize-disk',
  summary: 'Resize a disk',
  description: 'Requires a booted VM.',
  request: {
    body: {
      description: 'Resizes a disk attached to the VM',
      content: { 'application/json': { schema: VmResizeDiskSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The disk was successfully resized.' },
    404: {
      description:
        'The disk could not be resized because the VM is not created, or no disk with the given identifier exists.',
    },
    409: { description: 'The operation conflicts with the current state of the VM.' },
    500: { description: 'The disk could not be resized.' },
  },
})

export const putVmResizeZoneRoute = createRoute({
  method: 'put',
  path: '/vm.resize-zone',
  summary: 'Resize a memory zone',
  request: {
    body: {
      description: 'The target size for the memory zone',
      content: { 'application/json': { schema: VmResizeZoneSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The memory zone was successfully resized.' },
    404: { description: 'The memory zone could not be resized because the VM is not created.' },
    409: { description: 'The operation conflicts with the current state of the VM.' },
    500: { description: 'The memory zone could not be resized.' },
  },
})

export const putVmAddDeviceRoute = createRoute({
  method: 'put',
  path: '/vm.add-device',
  summary: 'Add a new device to the VM',
  request: {
    body: {
      description: 'The path of the new device',
      content: { 'application/json': { schema: DeviceConfigSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The new device was successfully added to the VM instance.',
      content: { 'application/json': { schema: PciDeviceInfoSchema } },
    },
    204: { description: 'The new device was successfully (cold) added to the VM instance.' },
    400: {
      description: 'The new device could not be added because the configuration is not valid.',
    },
    404: { description: 'The new device could not be added to the VM instance.' },
    409: {
      description:
        'The new device could not be added because a device with the same identifier or path already exists, or because the operation conflicts with the current state of the VM.',
    },
  },
})

export const putVmRemoveDeviceRoute = createRoute({
  method: 'put',
  path: '/vm.remove-device',
  summary: 'Remove a device from the VM',
  request: {
    body: {
      description: 'The identifier of the device',
      content: { 'application/json': { schema: VmRemoveDeviceSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The device was successfully removed from the VM instance.' },
    404: {
      description:
        'The device could not be removed because the VM is not created, or no device with the given identifier exists.',
    },
    409: { description: 'The operation conflicts with the current state of the VM.' },
  },
})

export const putVmAddDiskRoute = createRoute({
  method: 'put',
  path: '/vm.add-disk',
  summary: 'Add a new disk to the VM',
  request: {
    body: {
      description: 'The details of the new disk',
      content: { 'application/json': { schema: DiskConfigSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The new disk was successfully added to the VM instance.',
      content: { 'application/json': { schema: PciDeviceInfoSchema } },
    },
    204: { description: 'The new disk was successfully (cold) added to the VM instance.' },
    400: { description: 'The new disk could not be added because the configuration is not valid.' },
    404: { description: 'The new disk could not be added because the VM is not created.' },
    409: {
      description:
        'The new disk could not be added because a device with the same identifier already exists, or because the operation conflicts with the current state of the VM.',
    },
    500: { description: 'The new disk could not be added to the VM instance.' },
  },
})

export const putVmAddFsRoute = createRoute({
  method: 'put',
  path: '/vm.add-fs',
  summary: 'Add a new virtio-fs device to the VM',
  request: {
    body: {
      description: 'The details of the new virtio-fs',
      content: { 'application/json': { schema: FsConfigSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The new device was successfully added to the VM instance.',
      content: { 'application/json': { schema: PciDeviceInfoSchema } },
    },
    204: { description: 'The new device was successfully (cold) added to the VM instance.' },
    400: {
      description: 'The new device could not be added because the configuration is not valid.',
    },
    404: { description: 'The new device could not be added because the VM is not created.' },
    409: {
      description:
        'The new device could not be added because a device with the same identifier already exists, or because the operation conflicts with the current state of the VM.',
    },
    500: { description: 'The new device could not be added to the VM instance.' },
  },
})

export const putVmAddGenericVhostUserRoute = createRoute({
  method: 'put',
  path: '/vm.add-generic-vhost-user',
  summary: 'Add a new generic vhost-user device to the VM',
  request: {
    body: {
      description: 'The details of the new generic vhost-user device',
      content: { 'application/json': { schema: GenericVhostUserConfigSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The new device was successfully added to the VM instance.',
      content: { 'application/json': { schema: PciDeviceInfoSchema } },
    },
    204: { description: 'The new device was successfully (cold) added to the VM instance.' },
    400: {
      description: 'The new device could not be added because the configuration is not valid.',
    },
    404: { description: 'The new device could not be added because the VM is not created.' },
    409: {
      description:
        'The new device could not be added because a device with the same identifier already exists, or because the operation conflicts with the current state of the VM.',
    },
    500: { description: 'The new device could not be added to the VM instance.' },
  },
})

export const putVmAddPmemRoute = createRoute({
  method: 'put',
  path: '/vm.add-pmem',
  summary: 'Add a new pmem device to the VM',
  request: {
    body: {
      description: 'The details of the new pmem device',
      content: { 'application/json': { schema: PmemConfigSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The new device was successfully added to the VM instance.',
      content: { 'application/json': { schema: PciDeviceInfoSchema } },
    },
    204: { description: 'The new device was successfully (cold) added to the VM instance.' },
    400: {
      description: 'The new device could not be added because the configuration is not valid.',
    },
    404: { description: 'The new device could not be added because the VM is not created.' },
    409: {
      description:
        'The new device could not be added because a device with the same identifier already exists, or because the operation conflicts with the current state of the VM.',
    },
    500: { description: 'The new device could not be added to the VM instance.' },
  },
})

export const putVmAddNetRoute = createRoute({
  method: 'put',
  path: '/vm.add-net',
  summary: 'Add a new network device to the VM',
  request: {
    body: {
      description: 'The details of the new network device',
      content: { 'application/json': { schema: NetConfigSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The new device was successfully added to the VM instance.',
      content: { 'application/json': { schema: PciDeviceInfoSchema } },
    },
    204: { description: 'The new device was successfully (cold) added to the VM instance.' },
    400: {
      description: 'The new device could not be added because the configuration is not valid.',
    },
    404: { description: 'The new device could not be added because the VM is not created.' },
    409: {
      description:
        'The new device could not be added because a device with the same identifier already exists, or because the operation conflicts with the current state of the VM.',
    },
    500: { description: 'The new device could not be added to the VM instance.' },
  },
})

export const putVmAddVsockRoute = createRoute({
  method: 'put',
  path: '/vm.add-vsock',
  summary: 'Add a new vsock device to the VM',
  request: {
    body: {
      description: 'The details of the new vsock device',
      content: { 'application/json': { schema: VsockConfigSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The new device was successfully added to the VM instance.',
      content: { 'application/json': { schema: PciDeviceInfoSchema } },
    },
    204: { description: 'The new device was successfully (cold) added to the VM instance.' },
    400: {
      description: 'The new device could not be added because the configuration is not valid.',
    },
    404: { description: 'The new device could not be added because the VM is not created.' },
    409: {
      description:
        'The new device could not be added because a device with the same identifier already exists, or because the operation conflicts with the current state of the VM.',
    },
    500: { description: 'The new device could not be added to the VM instance.' },
  },
})

export const putVmAddVdpaRoute = createRoute({
  method: 'put',
  path: '/vm.add-vdpa',
  summary: 'Add a new vDPA device to the VM',
  request: {
    body: {
      description: 'The details of the new vDPA device',
      content: { 'application/json': { schema: VdpaConfigSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The new vDPA device was successfully added to the VM instance.',
      content: { 'application/json': { schema: PciDeviceInfoSchema } },
    },
    204: { description: 'The new vDPA device was successfully (cold) added to the VM instance.' },
    400: {
      description: 'The new vDPA device could not be added because the configuration is not valid.',
    },
    404: { description: 'The new vDPA device could not be added because the VM is not created.' },
    409: {
      description:
        'The new vDPA device could not be added because a device with the same identifier already exists, or because the operation conflicts with the current state of the VM.',
    },
    500: { description: 'The new vDPA device could not be added to the VM instance.' },
  },
})

export const putVmAddUserDeviceRoute = createRoute({
  method: 'put',
  path: '/vm.add-user-device',
  summary: 'Add a new userspace device to the VM',
  request: {
    body: {
      description: 'The path of the new device',
      content: { 'application/json': { schema: VmAddUserDeviceSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The new device was successfully added to the VM instance.',
      content: { 'application/json': { schema: PciDeviceInfoSchema } },
    },
    204: { description: 'The new device was successfully (cold) added to the VM instance.' },
    400: {
      description: 'The new device could not be added because the configuration is not valid.',
    },
    404: { description: 'The new device could not be added to the VM instance.' },
    409: {
      description:
        'The new device could not be added because a device with the same identifier already exists, or because the operation conflicts with the current state of the VM.',
    },
  },
})

export const putVmSnapshotRoute = createRoute({
  method: 'put',
  path: '/vm.snapshot',
  summary: 'Returns a VM snapshot.',
  request: {
    body: {
      description: 'The snapshot configuration',
      content: { 'application/json': { schema: VmSnapshotConfigSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The VM instance was successfully snapshotted.' },
    404: { description: 'The VM instance could not be snapshotted because it is not created.' },
    405: { description: 'The VM instance could not be snapshotted because it is not booted.' },
    409: { description: 'The operation conflicts with the current state of the VM.' },
  },
})

export const putVmCoredumpRoute = createRoute({
  method: 'put',
  path: '/vm.coredump',
  summary: 'Takes a VM coredump.',
  request: {
    body: {
      description: 'The coredump configuration',
      content: { 'application/json': { schema: VmCoredumpDataSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The VM instance was successfully coredumped.' },
    404: { description: 'The VM instance could not be coredumped because it is not created.' },
    405: { description: 'The VM instance could not be coredumped because it is not booted.' },
    409: { description: 'The operation conflicts with the current state of the VM.' },
  },
})

export const putVmNmiRoute = createRoute({
  method: 'put',
  path: '/vm.nmi',
  summary: 'Inject an NMI.',
  responses: {
    204: { description: 'The NMI successfully injected.' },
    409: { description: 'The operation conflicts with the current state of the VM.' },
  },
})

export const putVmRestoreRoute = createRoute({
  method: 'put',
  path: '/vm.restore',
  summary: 'Restore a VM from a snapshot.',
  request: {
    body: {
      description: 'The restore configuration',
      content: { 'application/json': { schema: RestoreConfigSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The VM instance was successfully restored.' },
    400: {
      description: 'The VM could not be restored because the restore configuration is not valid.',
    },
    404: { description: 'The VM instance could not be restored because it is already created.' },
    409: {
      description:
        'The VM could not be restored because a device with the same identifier or path already exists, or because the operation conflicts with the current state of the VM.',
    },
  },
})

export const putVmReceiveMigrationRoute = createRoute({
  method: 'put',
  path: '/vm.receive-migration',
  summary: 'Receive a VM migration from URL',
  request: {
    body: {
      description: 'The URL for the reception of migration state',
      content: { 'application/json': { schema: ReceiveMigrationDataSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The VM migration was successfully received.' },
    409: { description: 'The operation conflicts with the current state of the VMM.' },
    500: { description: 'The VM migration could not be received.' },
  },
})

export const putVmSendMigrationRoute = createRoute({
  method: 'put',
  path: '/vm.send-migration',
  summary: 'Send a VM migration to URL',
  request: {
    body: {
      description: 'The URL for sending the migration state',
      content: { 'application/json': { schema: SendMigrationDataSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The VM migration was started. The result is reported through events.' },
    409: { description: 'The operation conflicts with the current state of the VMM.' },
    500: { description: 'The VM migration could not be started.' },
  },
})

export const putVmCancelMigrationRoute = createRoute({
  method: 'put',
  path: '/vm.cancel-migration',
  summary: 'Cancel an ongoing VM migration',
  description:
    'Requests the cancellation of an ongoing migration on a best effort basis. A successful response only indicates that the request was accepted, not that the migration was actually cancelled: The migration may have progressed too far to be stopped. The actual outcome must be observed externally via the event monitor.\n',
  responses: {
    204: { description: 'The cancellation request was successfully submitted.' },
    500: {
      description:
        'The cancellation request could not be submitted because there is no ongoing migration.',
    },
  },
})
