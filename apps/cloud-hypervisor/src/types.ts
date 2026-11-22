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
type ConsoleMode = 'Off' | 'Pty' | 'Tty' | 'File' | 'Socket' | 'Tcp' | 'Null'
type SerialConfig = {
  file?: string | undefined
  socket?: string | undefined
  tcp?: { address: string; server?: true | undefined } | undefined
  mode: ConsoleMode
}
type ConsoleConfig = {
  file?: string | undefined
  socket?: string | undefined
  tcp?: { address: string; server?: true | undefined } | undefined
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
  resources: { [x: string]: unknown }[]
  parent?: string | undefined
  children: string[]
  pci_bdf?: string | undefined
}
type VmInfo = {
  config: VmConfig
  state: VmState
  memory_actual_size: bigint
  device_tree?: { [x: string]: DeviceNode } | undefined
}
type VmCounters = { [x: string]: { device_type: string } }
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
type VmResize = {
  desired_vcpus?: number | undefined
  desired_ram?: bigint | undefined
  desired_balloon?: bigint | undefined
}
type VmResizeDisk = { id: string; desired_size: bigint }
type VmResizeZone = { id: string; desired_ram: bigint }
type PciDeviceInfo = { id: string; bdf: string }
type VmRemoveDevice = { id: string }
type VmAddUserDevice = {
  socket: string
  pci_segment?: number | undefined
  pci_device_id?: number | undefined
  id?: string | undefined
}
type VmSnapshotConfig = { destination_url: string }
type VmCoredumpData = { destination_url: string }
type MemoryRestoreMode = 'Copy' | 'OnDemand' | 'OnDemandNoBackgroundFetchPages' | 'CopyOnWrite'
type RestoredNetConfig = { id: string; num_fds?: bigint | undefined; fds?: number[] | undefined }
type RestoredVfioConfig = { id: string; fd?: number | undefined }
type VmMemoryZoneUpdateData = { id: string; host_numa_node: number }
type ExternalFdTarget = { Net: { id: string } } | { Vfio: { id: string } } | 'Iommu'
type RestoreConfig = {
  source_url: string
  prefault?: boolean | undefined
  memory_restore_mode?: MemoryRestoreMode | undefined
  net_fds?: RestoredNetConfig[] | undefined
  vfio_fds?: RestoredVfioConfig[] | undefined
  iommufd_fd?: number | undefined
  resume?: boolean | undefined
  zone_updates?: VmMemoryZoneUpdateData[] | undefined
  serial?:
    | {
        file?: string | undefined
        socket?: string | undefined
        tcp?: { address: string; server?: true | undefined } | undefined
        mode: ConsoleMode
      }
    | undefined
  console?:
    | {
        file?: string | undefined
        socket?: string | undefined
        tcp?: { address: string; server?: true | undefined } | undefined
        mode: ConsoleMode
      }
    | undefined
  external_fds?: { target: ExternalFdTarget; expected_fds: bigint }[] | undefined
}
type ReceiveMigrationData = {
  receiver_url: string
  vfio_fds?: RestoredVfioConfig[] | undefined
  iommufd_fd?: number | undefined
  tls_dir?: string | undefined
  zone_updates?: VmMemoryZoneUpdateData[] | undefined
  background_fetch_pages?: boolean | undefined
  serial?:
    | {
        file?: string | undefined
        socket?: string | undefined
        tcp?: { address: string; server?: true | undefined } | undefined
        mode: ConsoleMode
      }
    | undefined
  console?:
    | {
        file?: string | undefined
        socket?: string | undefined
        tcp?: { address: string; server?: true | undefined } | undefined
        mode: ConsoleMode
      }
    | undefined
  external_fds?: { target: ExternalFdTarget; expected_fds: bigint }[] | undefined
}
type TimeoutStrategy = 'Cancel' | 'Ignore'
type MigrationMode = 'MemFDs' | 'Precopy' | 'Postcopy'
type SendMigrationData = {
  destination_url: string
  local?: boolean | undefined
  preserve_source?: boolean | undefined
  downtime_ms?: bigint | undefined
  timeout_s?: bigint | undefined
  timeout_strategy?: TimeoutStrategy | undefined
  connections?: bigint | undefined
  tls_dir?: string | undefined
  memory_mode?: MigrationMode | undefined
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
        | { input: { json: VmConfig }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VmConfig }; output: {}; outputFormat: string; status: 409 }
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
        | { input: { json: VmResize }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VmResize }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: VmResize }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: VmResize }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/vm.resize-disk': {
      $put:
        | { input: { json: VmResizeDisk }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VmResizeDisk }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: VmResizeDisk }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: VmResizeDisk }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.resize-zone': {
      $put:
        | { input: { json: VmResizeZone }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VmResizeZone }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: VmResizeZone }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: VmResizeZone }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.add-device': {
      $put:
        | {
            input: { json: DeviceConfig }
            output: PciDeviceInfo
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: DeviceConfig }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: DeviceConfig }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: DeviceConfig }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: DeviceConfig }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.remove-device': {
      $put:
        | { input: { json: VmRemoveDevice }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VmRemoveDevice }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: VmRemoveDevice }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.add-disk': {
      $put:
        | { input: { json: DiskConfig }; output: PciDeviceInfo; outputFormat: 'json'; status: 200 }
        | { input: { json: DiskConfig }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: DiskConfig }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: DiskConfig }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: DiskConfig }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: DiskConfig }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.add-fs': {
      $put:
        | { input: { json: FsConfig }; output: PciDeviceInfo; outputFormat: 'json'; status: 200 }
        | { input: { json: FsConfig }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: FsConfig }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: FsConfig }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: FsConfig }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: FsConfig }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.add-generic-vhost-user': {
      $put:
        | {
            input: { json: GenericVhostUserConfig }
            output: PciDeviceInfo
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: GenericVhostUserConfig }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: GenericVhostUserConfig }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: GenericVhostUserConfig }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: GenericVhostUserConfig }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: GenericVhostUserConfig }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.add-pmem': {
      $put:
        | { input: { json: PmemConfig }; output: PciDeviceInfo; outputFormat: 'json'; status: 200 }
        | { input: { json: PmemConfig }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: PmemConfig }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: PmemConfig }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: PmemConfig }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: PmemConfig }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.add-net': {
      $put:
        | { input: { json: NetConfig }; output: PciDeviceInfo; outputFormat: 'json'; status: 200 }
        | { input: { json: NetConfig }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: NetConfig }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: NetConfig }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: NetConfig }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: NetConfig }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.add-vsock': {
      $put:
        | { input: { json: VsockConfig }; output: PciDeviceInfo; outputFormat: 'json'; status: 200 }
        | { input: { json: VsockConfig }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VsockConfig }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: VsockConfig }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: VsockConfig }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: VsockConfig }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.add-vdpa': {
      $put:
        | { input: { json: VdpaConfig }; output: PciDeviceInfo; outputFormat: 'json'; status: 200 }
        | { input: { json: VdpaConfig }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VdpaConfig }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: VdpaConfig }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: VdpaConfig }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: VdpaConfig }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.add-user-device': {
      $put:
        | {
            input: { json: VmAddUserDevice }
            output: PciDeviceInfo
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: VmAddUserDevice }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VmAddUserDevice }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: VmAddUserDevice }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: VmAddUserDevice }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.snapshot': {
      $put:
        | { input: { json: VmSnapshotConfig }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VmSnapshotConfig }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: VmSnapshotConfig }; output: {}; outputFormat: string; status: 405 }
        | { input: { json: VmSnapshotConfig }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.coredump': {
      $put:
        | { input: { json: VmCoredumpData }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: VmCoredumpData }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: VmCoredumpData }; output: {}; outputFormat: string; status: 405 }
        | { input: { json: VmCoredumpData }; output: {}; outputFormat: string; status: 409 }
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
        | { input: { json: RestoreConfig }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: RestoreConfig }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: RestoreConfig }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: RestoreConfig }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/vm.receive-migration': {
      $put:
        | { input: { json: ReceiveMigrationData }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: ReceiveMigrationData }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: ReceiveMigrationData }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/vm.send-migration': {
      $put:
        | { input: { json: SendMigrationData }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: SendMigrationData }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: SendMigrationData }; output: {}; outputFormat: string; status: 500 }
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
