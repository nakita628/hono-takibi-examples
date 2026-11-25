type VmmPingResponse = { build_version: string; version: string; pid: bigint; features: string[] }
type CpuTopology = {
  threads_per_core: number
  cores_per_die: number
  dies_per_package: number
  packages: number
}
type CpuAffinity = { vcpu: number; host_cpus: number[] }
type CpuFeatures = { amx?: boolean | undefined }
type CoreSchedulingMode = 'Vm' | 'Vcpu' | 'Off'
type CpuProfileConfig = 'Host' | { File: string }
type CpuidValue = string
type CpuidOverride = {
  leaf: CpuidValue
  subleaf: CpuidValue
  eax: CpuidValue
  ebx: CpuidValue
  ecx: CpuidValue
  edx: CpuidValue
}
type CpusConfig = {
  boot_vcpus: number
  max_vcpus: number
  topology?: CpuTopology | undefined
  kvm_hyperv?: boolean | undefined
  kvm_hint_realtime?: boolean | undefined
  max_phys_bits?: number | undefined
  nested?: boolean | undefined
  affinity?: CpuAffinity[] | undefined
  features?: CpuFeatures | undefined
  core_scheduling?: CoreSchedulingMode | undefined
  profile?: CpuProfileConfig | undefined
  'x-cpuid-overrides'?: CpuidOverride[] | undefined
}
type MemoryZoneConfig = {
  id: string
  size: bigint
  file?: string | undefined
  mergeable?: boolean | undefined
  shared?: boolean | undefined
  hugepages?: boolean | undefined
  hugepage_size?: bigint | undefined
  host_numa_node?: number | undefined
  hotplug_size?: bigint | undefined
  hotplugged_size?: bigint | undefined
  prefault?: boolean | undefined
  reserve?: boolean | undefined
}
type MemoryConfig = {
  size: bigint
  hotplug_size?: bigint | undefined
  hotplugged_size?: bigint | undefined
  mergeable?: boolean | undefined
  hotplug_method?: 'Acpi' | 'VirtioMem' | undefined
  shared?: boolean | undefined
  hugepages?: boolean | undefined
  hugepage_size?: bigint | undefined
  prefault?: boolean | undefined
  reserve?: boolean | undefined
  thp?: boolean | undefined
  zones?: MemoryZoneConfig[] | undefined
}
type PayloadConfig = {
  firmware?: string | undefined
  kernel?: string | undefined
  cmdline?: string | undefined
  initramfs?: string | undefined
  igvm?: string | undefined
  host_data?: string | undefined
}
type TokenBucket = {
  size: bigint
  one_time_burst?: bigint | undefined
  refill_time: bigint
  burst_rate?: bigint | undefined
  burst_seconds?: bigint | undefined
  burst_recharge_seconds?: bigint | undefined
}
type RateLimiterConfig = { bandwidth?: TokenBucket | undefined; ops?: TokenBucket | undefined }
type RateLimitGroupConfig = { id: string; rate_limiter_config: RateLimiterConfig }
type IommuType = 'Off' | 'Virtio' | 'Smmuv3'
type VirtQueueAffinity = { queue_index: number; host_cpus: number[] }
type ImageType = 'FlatVmdk' | 'FixedVhd' | 'Qcow2' | 'Raw' | 'Vhdx' | 'Unknown'
type LockGranularity = 'ByteRange' | 'Full'
type DiskConfig = {
  path?: string | undefined
  readonly?: boolean | undefined
  direct?: boolean | undefined
  iommu?: IommuType | undefined
  num_queues?: number | undefined
  queue_size?: number | undefined
  vhost_user?: boolean | undefined
  vhost_socket?: string | undefined
  rate_limiter_config?: RateLimiterConfig | undefined
  pci_segment?: number | undefined
  pci_device_id?: number | undefined
  id?: string | undefined
  serial?: string | undefined
  rate_limit_group?: string | undefined
  queue_affinity?: VirtQueueAffinity[] | undefined
  backing_files?: boolean | undefined
  sparse?: boolean | undefined
  image_type?: ImageType | undefined
  lock_granularity?: LockGranularity | undefined
  guest_block_size?: number | undefined
}
type NetConfig = {
  tap?: string | undefined
  ip?: string | undefined
  mask?: string | undefined
  mac?: string | undefined
  host_mac?: string | undefined
  mtu?: number | undefined
  iommu?: IommuType | undefined
  num_queues?: number | undefined
  queue_size?: number | undefined
  vhost_user?: boolean | undefined
  vhost_socket?: string | undefined
  vhost_mode?: 'Client' | 'Server' | undefined
  id?: string | undefined
  pci_segment?: number | undefined
  pci_device_id?: number | undefined
  rate_limiter_config?: RateLimiterConfig | undefined
  offload_tso?: boolean | undefined
  offload_ufo?: boolean | undefined
  offload_csum?: boolean | undefined
}
type RngConfig = {
  id?: string | undefined
  pci_segment?: number | undefined
  pci_device_id?: number | undefined
  iommu?: IommuType | undefined
  src: string
}
type BalloonConfig = {
  id?: string | undefined
  pci_segment?: number | undefined
  pci_device_id?: number | undefined
  iommu?: IommuType | undefined
  size: bigint
  deflate_on_oom?: boolean | undefined
  free_page_reporting?: boolean | undefined
}
type FsConfig = {
  tag: string
  socket: string
  num_queues?: number | undefined
  queue_size?: number | undefined
  pci_segment?: number | undefined
  pci_device_id?: number | undefined
  id?: string | undefined
}
type GenericVhostUserConfig = {
  socket: string
  queue_sizes: number[]
  pci_segment?: number | undefined
  pci_device_id?: number | undefined
  id?: string | undefined
  device_type: number
}
type PmemConfig = {
  file: string
  size?: bigint | undefined
  iommu?: IommuType | undefined
  discard_writes?: boolean | undefined
  pci_segment?: number | undefined
  pci_device_id?: number | undefined
  id?: string | undefined
}
type TcpConsoleConfig = { address: string; server?: true | undefined }
type ConsoleMode = 'Off' | 'Pty' | 'Tty' | 'File' | 'Socket' | 'Tcp' | 'Null'
type SerialConfig = {
  file?: string | undefined
  socket?: string | undefined
  tcp?: TcpConsoleConfig | undefined
  mode: ConsoleMode
}
type ConsoleConfig = {
  file?: string | undefined
  socket?: string | undefined
  tcp?: TcpConsoleConfig | undefined
  mode: ConsoleMode
  iommu?: IommuType | undefined
  id?: string | undefined
  pci_segment?: number | undefined
  pci_device_id?: number | undefined
}
type DebugConsoleConfig = {
  file?: string | undefined
  mode: 'Off' | 'Tty' | 'File' | 'Null'
  iobase?: number | undefined
}
type DeviceConfig = {
  path?: string | undefined
  iommu?: IommuType | undefined
  pci_segment?: number | undefined
  pci_device_id?: number | undefined
  id?: string | undefined
  x_nv_gpudirect_clique?: number | undefined
  x_exclude_mmap_bars?: bigint[] | undefined
}
type UserDeviceConfig = {
  socket: string
  id?: string | undefined
  pci_segment?: number | undefined
  pci_device_id?: number | undefined
}
type VdpaConfig = {
  path: string
  num_queues?: number | undefined
  iommu?: IommuType | undefined
  pci_segment?: number | undefined
  pci_device_id?: number | undefined
  id?: string | undefined
}
type VsockConfig = {
  cid: bigint
  socket: string
  socket_type?: 'Stream' | 'SeqPacket' | undefined
  iommu?: IommuType | undefined
  pci_segment?: number | undefined
  pci_device_id?: number | undefined
  id?: string | undefined
}
type NumaDistance = { destination: number; distance: number }
type NumaConfig = {
  guest_numa_id: number
  cpus?: number[] | undefined
  distances?: NumaDistance[] | undefined
  memory_zones?: string[] | undefined
  pci_segments?: number[] | undefined
  device_id?: string | undefined
}
type RtcConfig = {
  id?: string | undefined
  pci_segment?: number | undefined
  pci_device_id?: number | undefined
  iommu?: IommuType | undefined
}
type PciSegmentConfig = {
  pci_segment?: number | undefined
  mmio32_aperture_weight?: number | undefined
  mmio64_aperture_weight?: number | undefined
}
type PlatformConfig = {
  num_pci_segments?: number | undefined
  iommu_segments?: number[] | undefined
  iommu_address_width_bits?: number | undefined
  system_serial_number?: string | undefined
  system_uuid?: string | undefined
  oem_strings?: string[] | undefined
  system_manufacturer?: string | undefined
  system_product_name?: string | undefined
  system_version?: string | undefined
  system_family?: string | undefined
  system_sku_number?: string | undefined
  chassis_asset_tag?: string | undefined
  sev_snp?: boolean | undefined
  iommufd?: boolean | undefined
  vfio_p2p_dma?: boolean | undefined
}
type TpmConfig = { socket: string }
type LandlockConfig = { path: string; access: string }
type VmConfig = {
  cpus?: CpusConfig | undefined
  memory?: MemoryConfig | undefined
  payload: PayloadConfig
  rate_limit_groups?: RateLimitGroupConfig[] | undefined
  disks?: DiskConfig[] | undefined
  net?: NetConfig[] | undefined
  rng?: RngConfig | undefined
  balloon?: BalloonConfig | undefined
  fs?: FsConfig[] | undefined
  generic_vhost_user?: GenericVhostUserConfig[] | undefined
  pmem?: PmemConfig[] | undefined
  serial?: SerialConfig | undefined
  console?: ConsoleConfig | undefined
  debug_console?: DebugConsoleConfig | undefined
  devices?: DeviceConfig[] | undefined
  user_devices?: UserDeviceConfig[] | undefined
  vdpa?: VdpaConfig[] | undefined
  vsock?: VsockConfig | undefined
  numa?: NumaConfig[] | undefined
  watchdog?: boolean | undefined
  rtc?: RtcConfig | undefined
  pvpanic?: boolean | undefined
  pci_segments?: PciSegmentConfig[] | undefined
  platform?: PlatformConfig | undefined
  tpm?: TpmConfig | undefined
  landlock_enable?: boolean | undefined
  landlock_rules?: LandlockConfig[] | undefined
}
type VmState = 'Created' | 'Running' | 'Shutdown' | 'Paused' | 'BreakPoint'
type DeviceNode = {
  id: string
  resources: { [key: string]: unknown }[]
  parent?: string | undefined
  children: string[]
  pci_bdf?: string | undefined
}
type VmInfo = {
  config: VmConfig
  state: VmState
  memory_actual_size: bigint
  device_tree?: { [key: string]: DeviceNode } | undefined
}
type VmCounters = { [key: string]: { device_type: string } }
type BalloonStats = {
  swap_in?: bigint | undefined
  swap_out?: bigint | undefined
  major_faults?: bigint | undefined
  minor_faults?: bigint | undefined
  free_memory?: bigint | undefined
  total_memory?: bigint | undefined
  available_memory?: bigint | undefined
  disk_caches?: bigint | undefined
  hugetlb_allocations?: bigint | undefined
  hugetlb_failures?: bigint | undefined
  oom_kills?: bigint | undefined
  alloc_stalls?: bigint | undefined
  async_scans?: bigint | undefined
  direct_scans?: bigint | undefined
  async_reclaims?: bigint | undefined
  direct_reclaims?: bigint | undefined
}
type BalloonStatsResponse = { balloon_actual: bigint; last_update: bigint; stats: BalloonStats }
type CpuTopologyInput = {
  threads_per_core: number
  cores_per_die: number
  dies_per_package: number
  packages: number
}
type CpuAffinityInput = { vcpu: number; host_cpus: number[] }
type CpuFeaturesInput = { amx?: boolean }
type CoreSchedulingModeInput = 'Vm' | 'Vcpu' | 'Off'
type CpuProfileConfigInput = 'Host' | { File: string }
type CpuidValueInput = string
type CpuidOverrideInput = {
  leaf: CpuidValueInput
  subleaf: CpuidValueInput
  eax: CpuidValueInput
  ebx: CpuidValueInput
  ecx: CpuidValueInput
  edx: CpuidValueInput
}
type CpusConfigInput = {
  boot_vcpus: number
  max_vcpus: number
  topology?: CpuTopologyInput
  kvm_hyperv?: boolean
  kvm_hint_realtime?: boolean
  max_phys_bits?: number
  nested?: boolean
  affinity?: CpuAffinityInput[]
  features?: CpuFeaturesInput
  core_scheduling?: CoreSchedulingModeInput
  profile?: CpuProfileConfigInput
  'x-cpuid-overrides'?: CpuidOverrideInput[]
}
type MemoryZoneConfigInput = {
  id: string
  size: bigint
  file?: string
  mergeable?: boolean
  shared?: boolean
  hugepages?: boolean
  hugepage_size?: bigint
  host_numa_node?: number
  hotplug_size?: bigint
  hotplugged_size?: bigint
  prefault?: boolean
  reserve?: boolean
}
type MemoryConfigInput = {
  size: bigint
  hotplug_size?: bigint
  hotplugged_size?: bigint
  mergeable?: boolean
  hotplug_method?: 'Acpi' | 'VirtioMem'
  shared?: boolean
  hugepages?: boolean
  hugepage_size?: bigint
  prefault?: boolean
  reserve?: boolean
  thp?: boolean
  zones?: MemoryZoneConfigInput[]
}
type PayloadConfigInput = {
  firmware?: string
  kernel?: string
  cmdline?: string
  initramfs?: string
  igvm?: string
  host_data?: string
}
type TokenBucketInput = {
  size: bigint
  one_time_burst?: bigint
  refill_time: bigint
  burst_rate?: bigint
  burst_seconds?: bigint
  burst_recharge_seconds?: bigint
}
type RateLimiterConfigInput = { bandwidth?: TokenBucketInput; ops?: TokenBucketInput }
type RateLimitGroupConfigInput = { id: string; rate_limiter_config: RateLimiterConfigInput }
type IommuTypeInput = 'Off' | 'Virtio' | 'Smmuv3'
type VirtQueueAffinityInput = { queue_index: number; host_cpus: number[] }
type ImageTypeInput = 'FlatVmdk' | 'FixedVhd' | 'Qcow2' | 'Raw' | 'Vhdx' | 'Unknown'
type LockGranularityInput = 'ByteRange' | 'Full'
type DiskConfigInput = {
  path?: string
  readonly?: boolean
  direct?: boolean
  iommu?: IommuTypeInput
  num_queues?: number
  queue_size?: number
  vhost_user?: boolean
  vhost_socket?: string
  rate_limiter_config?: RateLimiterConfigInput
  pci_segment?: number
  pci_device_id?: number
  id?: string
  serial?: string
  rate_limit_group?: string
  queue_affinity?: VirtQueueAffinityInput[]
  backing_files?: boolean
  sparse?: boolean
  image_type?: ImageTypeInput
  lock_granularity?: LockGranularityInput
  guest_block_size?: number
}
type NetConfigInput = {
  tap?: string
  ip?: string
  mask?: string
  mac?: string
  host_mac?: string
  mtu?: number
  iommu?: IommuTypeInput
  num_queues?: number
  queue_size?: number
  vhost_user?: boolean
  vhost_socket?: string
  vhost_mode?: 'Client' | 'Server'
  id?: string
  pci_segment?: number
  pci_device_id?: number
  rate_limiter_config?: RateLimiterConfigInput
  offload_tso?: boolean
  offload_ufo?: boolean
  offload_csum?: boolean
}
type RngConfigInput = {
  id?: string
  pci_segment?: number
  pci_device_id?: number
  iommu?: IommuTypeInput
  src: string
}
type BalloonConfigInput = {
  id?: string
  pci_segment?: number
  pci_device_id?: number
  iommu?: IommuTypeInput
  size: bigint
  deflate_on_oom?: boolean
  free_page_reporting?: boolean
}
type FsConfigInput = {
  tag: string
  socket: string
  num_queues?: number
  queue_size?: number
  pci_segment?: number
  pci_device_id?: number
  id?: string
}
type GenericVhostUserConfigInput = {
  socket: string
  queue_sizes: number[]
  pci_segment?: number
  pci_device_id?: number
  id?: string
  device_type: number
}
type PmemConfigInput = {
  file: string
  size?: bigint
  iommu?: IommuTypeInput
  discard_writes?: boolean
  pci_segment?: number
  pci_device_id?: number
  id?: string
}
type TcpConsoleConfigInput = { address: string; server?: true }
type ConsoleModeInput = 'Off' | 'Pty' | 'Tty' | 'File' | 'Socket' | 'Tcp' | 'Null'
type SerialConfigInput = {
  file?: string
  socket?: string
  tcp?: TcpConsoleConfigInput
  mode: ConsoleModeInput
}
type ConsoleConfigInput = {
  file?: string
  socket?: string
  tcp?: TcpConsoleConfigInput
  mode: ConsoleModeInput
  iommu?: IommuTypeInput
  id?: string
  pci_segment?: number
  pci_device_id?: number
}
type DebugConsoleConfigInput = {
  file?: string
  mode: 'Off' | 'Tty' | 'File' | 'Null'
  iobase?: number
}
type DeviceConfigInput = {
  path?: string
  iommu?: IommuTypeInput
  pci_segment?: number
  pci_device_id?: number
  id?: string
  x_nv_gpudirect_clique?: number
  x_exclude_mmap_bars?: bigint[]
}
type UserDeviceConfigInput = {
  socket: string
  id?: string
  pci_segment?: number
  pci_device_id?: number
}
type VdpaConfigInput = {
  path: string
  num_queues?: number
  iommu?: IommuTypeInput
  pci_segment?: number
  pci_device_id?: number
  id?: string
}
type VsockConfigInput = {
  cid: bigint
  socket: string
  socket_type?: 'Stream' | 'SeqPacket'
  iommu?: IommuTypeInput
  pci_segment?: number
  pci_device_id?: number
  id?: string
}
type NumaDistanceInput = { destination: number; distance: number }
type NumaConfigInput = {
  guest_numa_id: number
  cpus?: number[]
  distances?: NumaDistanceInput[]
  memory_zones?: string[]
  pci_segments?: number[]
  device_id?: string
}
type RtcConfigInput = {
  id?: string
  pci_segment?: number
  pci_device_id?: number
  iommu?: IommuTypeInput
}
type PciSegmentConfigInput = {
  pci_segment?: number
  mmio32_aperture_weight?: number
  mmio64_aperture_weight?: number
}
type PlatformConfigInput = {
  num_pci_segments?: number
  iommu_segments?: number[]
  iommu_address_width_bits?: number
  system_serial_number?: string
  system_uuid?: string
  oem_strings?: string[]
  system_manufacturer?: string
  system_product_name?: string
  system_version?: string
  system_family?: string
  system_sku_number?: string
  chassis_asset_tag?: string
  sev_snp?: boolean
  iommufd?: boolean
  vfio_p2p_dma?: boolean
}
type TpmConfigInput = { socket: string }
type LandlockConfigInput = { path: string; access: string }
type VmConfigInput = {
  cpus?: CpusConfigInput
  memory?: MemoryConfigInput
  payload: PayloadConfigInput
  rate_limit_groups?: RateLimitGroupConfigInput[]
  disks?: DiskConfigInput[]
  net?: NetConfigInput[]
  rng?: RngConfigInput
  balloon?: BalloonConfigInput
  fs?: FsConfigInput[]
  generic_vhost_user?: GenericVhostUserConfigInput[]
  pmem?: PmemConfigInput[]
  serial?: SerialConfigInput
  console?: ConsoleConfigInput
  debug_console?: DebugConsoleConfigInput
  devices?: DeviceConfigInput[]
  user_devices?: UserDeviceConfigInput[]
  vdpa?: VdpaConfigInput[]
  vsock?: VsockConfigInput
  numa?: NumaConfigInput[]
  watchdog?: boolean
  rtc?: RtcConfigInput
  pvpanic?: boolean
  pci_segments?: PciSegmentConfigInput[]
  platform?: PlatformConfigInput
  tpm?: TpmConfigInput
  landlock_enable?: boolean
  landlock_rules?: LandlockConfigInput[]
}
type VmResizeInput = { desired_vcpus?: number; desired_ram?: bigint; desired_balloon?: bigint }
type VmResizeDiskInput = { id: string; desired_size: bigint }
type VmResizeZoneInput = { id: string; desired_ram: bigint }
type PciDeviceInfo = { id: string; bdf: string }
type VmRemoveDeviceInput = { id: string }
type VmAddUserDeviceInput = {
  socket: string
  pci_segment?: number
  pci_device_id?: number
  id?: string
}
type VmSnapshotConfigInput = { destination_url: string }
type VmCoredumpDataInput = { destination_url: string }
type MemoryRestoreModeInput = 'Copy' | 'OnDemand' | 'OnDemandNoBackgroundFetchPages' | 'CopyOnWrite'
type RestoredNetConfigInput = { id: string; num_fds?: bigint; fds?: number[] }
type RestoredVfioConfigInput = { id: string; fd?: number }
type SnapshotClockModeInput = 'Advance' | 'Preserve'
type VmMemoryZoneUpdateDataInput = { id: string; host_numa_node: number }
type ExternalFdDeviceIdInput = { id: string }
type ExternalFdNetTargetInput = { Net: ExternalFdDeviceIdInput }
type ExternalFdVfioTargetInput = { Vfio: ExternalFdDeviceIdInput }
type ExternalFdDeviceTargetInput = ExternalFdNetTargetInput | ExternalFdVfioTargetInput
type ExternalFdVmTargetInput = 'Iommu'
type ExternalFdTargetInput = ExternalFdDeviceTargetInput | ExternalFdVmTargetInput
type RestoreConfigInput = {
  source_url: string
  prefault?: boolean
  memory_restore_mode?: MemoryRestoreModeInput
  net_fds?: RestoredNetConfigInput[]
  vfio_fds?: RestoredVfioConfigInput[]
  iommufd_fd?: number
  resume?: boolean
  clock_restore_mode?: SnapshotClockModeInput
  zone_updates?: VmMemoryZoneUpdateDataInput[]
  serial?: SerialConfigInput
  console?: SerialConfigInput
  external_fds?: { target: ExternalFdTargetInput; expected_fds: bigint }[]
}
type ReceiveMigrationDataInput = {
  receiver_url: string
  clock_restore_mode?: SnapshotClockModeInput
  vfio_fds?: RestoredVfioConfigInput[]
  iommufd_fd?: number
  tls_dir?: string
  zone_updates?: VmMemoryZoneUpdateDataInput[]
  background_fetch_pages?: boolean
  serial?: SerialConfigInput
  console?: SerialConfigInput
  external_fds?: { target: ExternalFdTargetInput; expected_fds: bigint }[]
}
type TimeoutStrategyInput = 'Cancel' | 'Ignore'
type MigrationModeInput = 'MemFDs' | 'Precopy' | 'Postcopy'
type SendMigrationDataInput = {
  destination_url: string
  local?: boolean
  preserve_source?: boolean
  downtime_ms?: bigint
  timeout_s?: bigint
  timeout_strategy?: TimeoutStrategyInput
  connections?: bigint
  tls_dir?: string
  memory_mode?: MigrationModeInput
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/vmm.ping': { $get: { input: {}; output: VmmPingResponse; outputFormat: 'json'; status: 200 } }
  } & {
    '/vmm.shutdown': {
      $put:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.info': {
      $get:
        | { input: {}; output: VmInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/vm.counters': {
      $get:
        | { input: {}; output: VmCounters; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.balloon-stats': {
      $get:
        | { input: {}; output: BalloonStatsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 409 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.create': {
      $put:
        | { input: { json: VmConfigInput }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VmConfigInput }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.delete': {
      $put:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.boot': {
      $put:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.pause': {
      $put:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.resume': {
      $put:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.shutdown': {
      $put:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.reboot': {
      $put:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.power-button': {
      $put:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.resize': {
      $put:
        | { input: { json: VmResizeInput }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VmResizeInput }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: VmResizeInput }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: VmResizeInput }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/vm.resize-disk': {
      $put:
        | { input: { json: VmResizeDiskInput }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VmResizeDiskInput }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: VmResizeDiskInput }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: VmResizeDiskInput }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.resize-zone': {
      $put:
        | { input: { json: VmResizeZoneInput }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VmResizeZoneInput }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: VmResizeZoneInput }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: VmResizeZoneInput }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.add-device': {
      $put:
        | {
            input: { json: DeviceConfigInput }
            output: PciDeviceInfo
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: DeviceConfigInput }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: DeviceConfigInput }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: DeviceConfigInput }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: DeviceConfigInput }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.remove-device': {
      $put:
        | { input: { json: VmRemoveDeviceInput }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VmRemoveDeviceInput }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: VmRemoveDeviceInput }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.add-disk': {
      $put:
        | {
            input: { json: DiskConfigInput }
            output: PciDeviceInfo
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: DiskConfigInput }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: DiskConfigInput }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: DiskConfigInput }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: DiskConfigInput }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: DiskConfigInput }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.add-fs': {
      $put:
        | {
            input: { json: FsConfigInput }
            output: PciDeviceInfo
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: FsConfigInput }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: FsConfigInput }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: FsConfigInput }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: FsConfigInput }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: FsConfigInput }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.add-generic-vhost-user': {
      $put:
        | {
            input: { json: GenericVhostUserConfigInput }
            output: PciDeviceInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GenericVhostUserConfigInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: GenericVhostUserConfigInput }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: GenericVhostUserConfigInput }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: GenericVhostUserConfigInput }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: GenericVhostUserConfigInput }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/vm.add-pmem': {
      $put:
        | {
            input: { json: PmemConfigInput }
            output: PciDeviceInfo
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: PmemConfigInput }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: PmemConfigInput }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: PmemConfigInput }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: PmemConfigInput }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: PmemConfigInput }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.add-net': {
      $put:
        | {
            input: { json: NetConfigInput }
            output: PciDeviceInfo
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: NetConfigInput }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: NetConfigInput }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: NetConfigInput }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: NetConfigInput }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: NetConfigInput }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.add-vsock': {
      $put:
        | {
            input: { json: VsockConfigInput }
            output: PciDeviceInfo
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: VsockConfigInput }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VsockConfigInput }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: VsockConfigInput }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: VsockConfigInput }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: VsockConfigInput }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.add-vdpa': {
      $put:
        | {
            input: { json: VdpaConfigInput }
            output: PciDeviceInfo
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: VdpaConfigInput }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VdpaConfigInput }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: VdpaConfigInput }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: VdpaConfigInput }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: VdpaConfigInput }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.add-user-device': {
      $put:
        | {
            input: { json: VmAddUserDeviceInput }
            output: PciDeviceInfo
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: VmAddUserDeviceInput }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VmAddUserDeviceInput }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: VmAddUserDeviceInput }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: VmAddUserDeviceInput }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.snapshot': {
      $put:
        | { input: { json: VmSnapshotConfigInput }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VmSnapshotConfigInput }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: VmSnapshotConfigInput }; output: {}; outputFormat: string; status: 405 }
        | { input: { json: VmSnapshotConfigInput }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.coredump': {
      $put:
        | { input: { json: VmCoredumpDataInput }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VmCoredumpDataInput }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: VmCoredumpDataInput }; output: {}; outputFormat: string; status: 405 }
        | { input: { json: VmCoredumpDataInput }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.nmi': {
      $put:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.restore': {
      $put:
        | { input: { json: RestoreConfigInput }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: RestoreConfigInput }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: RestoreConfigInput }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: RestoreConfigInput }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.receive-migration': {
      $put:
        | {
            input: { json: ReceiveMigrationDataInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: ReceiveMigrationDataInput }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: ReceiveMigrationDataInput }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/vm.send-migration': {
      $put:
        | { input: { json: SendMigrationDataInput }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: SendMigrationDataInput }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: SendMigrationDataInput }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.cancel-migration': {
      $put:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  },
  '/'
>
export default routes
