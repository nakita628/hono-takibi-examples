<h1 id="cloud-hypervisor-api">Cloud Hypervisor API v0.3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Local HTTP based API for managing and inspecting a cloud-hypervisor virtual machine.

Base URLs:

* <a href="http://localhost/api/v1">http://localhost/api/v1</a>

License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<h1 id="cloud-hypervisor-api-default">Default</h1>

## Ping the VMM to check for API server availability

> Code samples

```bash
curl http://localhost/api/v1/vmm.ping \
  -H 'Accept: application/json'
```

`GET /vmm.ping`

> Example responses

> 200 Response

```json
{
  "build_version": "string",
  "version": "string",
  "pid": 0,
  "features": [
    "string"
  ]
}
```

<h3 id="ping-the-vmm-to-check-for-api-server-availability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The VMM information|[VmmPingResponse](#schemavmmpingresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Shuts the cloud-hypervisor VMM.

<a id="opIdshutdownVMM"></a>

> Code samples

```bash
curl http://localhost/api/v1/vmm.shutdown \
  -X PUT
```

`PUT /vmm.shutdown`

<h3 id="shuts-the-cloud-hypervisor-vmm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The VMM successfully shutdown.|None|
|409|Conflict|The operation conflicts with the current state of the VM.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns general information about the cloud-hypervisor Virtual Machine (VM) instance.

> Code samples

```bash
curl http://localhost/api/v1/vm.info \
  -H 'Accept: application/json'
```

`GET /vm.info`

> Example responses

> 200 Response

```json
{
  "config": {
    "cpus": {
      "boot_vcpus": 1,
      "max_vcpus": 1,
      "topology": {
        "threads_per_core": 0,
        "cores_per_die": 0,
        "dies_per_package": 0,
        "packages": 0
      },
      "kvm_hyperv": false,
      "max_phys_bits": 0,
      "nested": false,
      "affinity": [
        {
          "vcpu": 0,
          "host_cpus": [
            0
          ]
        }
      ],
      "features": {
        "amx": true
      },
      "core_scheduling": "Vm",
      "profile": "Host",
      "x-cpuid-overrides": []
    },
    "memory": {
      "size": 0,
      "hotplug_size": 0,
      "hotplugged_size": 0,
      "mergeable": false,
      "hotplug_method": "Acpi",
      "shared": false,
      "hugepages": false,
      "hugepage_size": 0,
      "prefault": false,
      "reserve": false,
      "thp": true,
      "zones": [
        {
          "id": "string",
          "size": 0,
          "file": "string",
          "mergeable": false,
          "shared": false,
          "hugepages": false,
          "hugepage_size": 0,
          "host_numa_node": 0,
          "hotplug_size": 0,
          "hotplugged_size": 0,
          "prefault": false,
          "reserve": false
        }
      ]
    },
    "payload": {
      "firmware": "string",
      "kernel": "string",
      "cmdline": "string",
      "initramfs": "string",
      "igvm": "string",
      "host_data": "string"
    },
    "rate_limit_groups": [
      {
        "id": "string",
        "rate_limiter_config": {
          "bandwidth": {
            "size": 0,
            "one_time_burst": 0,
            "refill_time": 0
          },
          "ops": {
            "size": 0,
            "one_time_burst": 0,
            "refill_time": 0
          }
        }
      }
    ],
    "disks": [
      {
        "path": "string",
        "readonly": false,
        "direct": false,
        "iommu": "Off",
        "num_queues": 1,
        "queue_size": 128,
        "vhost_user": false,
        "vhost_socket": "string",
        "rate_limiter_config": {
          "bandwidth": {
            "size": 0,
            "one_time_burst": 0,
            "refill_time": 0
          },
          "ops": {
            "size": 0,
            "one_time_burst": 0,
            "refill_time": 0
          }
        },
        "pci_segment": 0,
        "pci_device_id": 0,
        "id": "string",
        "serial": "string",
        "rate_limit_group": "string",
        "queue_affinity": [
          {
            "queue_index": 0,
            "host_cpus": [
              0
            ]
          }
        ],
        "backing_files": false,
        "sparse": true,
        "image_type": "FlatVmdk",
        "lock_granularity": "ByteRange",
        "guest_block_size": 0
      }
    ],
    "net": [
      {
        "tap": "string",
        "ip": "192.168.249.1",
        "mask": "255.255.255.0",
        "mac": "string",
        "host_mac": "string",
        "mtu": 0,
        "iommu": "Off",
        "num_queues": 2,
        "queue_size": 256,
        "vhost_user": false,
        "vhost_socket": "string",
        "vhost_mode": "Client",
        "id": "string",
        "pci_segment": 0,
        "pci_device_id": 0,
        "rate_limiter_config": {
          "bandwidth": {
            "size": 0,
            "one_time_burst": 0,
            "refill_time": 0
          },
          "ops": {
            "size": 0,
            "one_time_burst": 0,
            "refill_time": 0
          }
        },
        "offload_tso": false,
        "offload_ufo": false,
        "offload_csum": false
      }
    ],
    "rng": {
      "id": "string",
      "pci_segment": 0,
      "pci_device_id": 0,
      "iommu": "Off",
      "src": "string"
    },
    "balloon": {
      "id": "string",
      "pci_segment": 0,
      "pci_device_id": 0,
      "iommu": "Off",
      "size": 0,
      "deflate_on_oom": false,
      "free_page_reporting": false
    },
    "fs": [
      {
        "tag": "string",
        "socket": "string",
        "num_queues": 1,
        "queue_size": 1024,
        "pci_segment": 0,
        "pci_device_id": 0,
        "id": "string"
      }
    ],
    "generic_vhost_user": [
      {
        "socket": "string",
        "queue_sizes": [
          0
        ],
        "pci_segment": 0,
        "pci_device_id": 0,
        "id": "string",
        "device_type": 0
      }
    ],
    "pmem": [
      {
        "file": "string",
        "size": 0,
        "iommu": "Off",
        "discard_writes": false,
        "pci_segment": 0,
        "pci_device_id": 0,
        "id": "string"
      }
    ],
    "serial": {
      "file": "string",
      "socket": "string",
      "tcp": {
        "address": "127.0.0.1:4444",
        "server": true
      },
      "mode": "Off"
    },
    "console": {
      "file": "string",
      "socket": "string",
      "tcp": {
        "address": "127.0.0.1:4444",
        "server": true
      },
      "mode": "Off",
      "iommu": "Off",
      "id": "string",
      "pci_segment": 0,
      "pci_device_id": 0
    },
    "debug_console": {
      "file": "string",
      "mode": "Off",
      "iobase": 0
    },
    "devices": [
      {
        "path": "string",
        "iommu": "Off",
        "pci_segment": 0,
        "pci_device_id": 0,
        "id": "string",
        "x_nv_gpudirect_clique": 0,
        "x_exclude_mmap_bars": [
          0
        ]
      }
    ],
    "user_devices": [
      {
        "socket": "string",
        "id": "string",
        "pci_segment": 0,
        "pci_device_id": 0
      }
    ],
    "vdpa": [
      {
        "path": "string",
        "num_queues": 1,
        "iommu": "Off",
        "pci_segment": 0,
        "pci_device_id": 0,
        "id": "string"
      }
    ],
    "vsock": {
      "cid": 3,
      "socket": "string",
      "iommu": "Off",
      "pci_segment": 0,
      "pci_device_id": 0,
      "id": "string"
    },
    "numa": [
      {
        "guest_numa_id": 0,
        "cpus": [
          0
        ],
        "distances": [
          {
            "destination": 0,
            "distance": 0
          }
        ],
        "memory_zones": [
          "string"
        ],
        "pci_segments": [
          0
        ],
        "device_id": "string"
      }
    ],
    "watchdog": false,
    "rtc": {
      "id": "string",
      "pci_segment": 0,
      "pci_device_id": 0,
      "iommu": "Off"
    },
    "pvpanic": false,
    "pci_segments": [
      {
        "pci_segment": 0,
        "mmio32_aperture_weight": 0,
        "mmio64_aperture_weight": 0
      }
    ],
    "platform": {
      "num_pci_segments": 0,
      "iommu_segments": [
        0
      ],
      "iommu_address_width_bits": 0,
      "system_serial_number": "string",
      "system_uuid": "string",
      "oem_strings": [
        "string"
      ],
      "system_manufacturer": "string",
      "system_product_name": "string",
      "system_version": "string",
      "system_family": "string",
      "system_sku_number": "string",
      "chassis_asset_tag": "string",
      "sev_snp": false,
      "iommufd": false,
      "vfio_p2p_dma": true
    },
    "tpm": {
      "socket": "string"
    },
    "landlock_enable": false,
    "landlock_rules": [
      {
        "path": "string",
        "access": "string"
      }
    ]
  },
  "state": "Created",
  "memory_actual_size": 0,
  "device_tree": {
    "property1": {
      "id": "string",
      "resources": [
        {}
      ],
      "children": [
        "string"
      ],
      "pci_bdf": "string"
    },
    "property2": {
      "id": "string",
      "resources": [
        {}
      ],
      "children": [
        "string"
      ],
      "pci_bdf": "string"
    }
  }
}
```

<h3 id="returns-general-information-about-the-cloud-hypervisor-virtual-machine-vm-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The VM information|[VmInfo](#schemavminfo)|
|404|Not Found|The VM information is not available because the VM is not created.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get counters from the VM

> Code samples

```bash
curl http://localhost/api/v1/vm.counters \
  -H 'Accept: application/json'
```

`GET /vm.counters`

> Example responses

> 200 Response

```json
{
  "property1": {
    "property1": 0,
    "property2": 0
  },
  "property2": {
    "property1": 0,
    "property2": 0
  }
}
```

<h3 id="get-counters-from-the-vm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The VM counters|[VmCounters](#schemavmcounters)|
|409|Conflict|The operation conflicts with the current state of the VM.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get cached statistics from the virtio-balloon device

> Code samples

```bash
curl http://localhost/api/v1/vm.balloon-stats \
  -H 'Accept: application/json'
```

`GET /vm.balloon-stats`

> Example responses

> 200 Response

```json
{
  "balloon_actual": 0,
  "last_update": 0,
  "stats": {
    "swap_in": 0,
    "swap_out": 0,
    "major_faults": 0,
    "minor_faults": 0,
    "free_memory": 0,
    "total_memory": 0,
    "available_memory": 0,
    "disk_caches": 0,
    "hugetlb_allocations": 0,
    "hugetlb_failures": 0,
    "oom_kills": 0,
    "alloc_stalls": 0,
    "async_scans": 0,
    "direct_scans": 0,
    "async_reclaims": 0,
    "direct_reclaims": 0
  }
}
```

<h3 id="get-cached-statistics-from-the-virtio-balloon-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Most recently reported virtio-balloon statistics|[BalloonStatsResponse](#schemaballoonstatsresponse)|
|409|Conflict|The operation conflicts with the current state of the VM.|None|
|500|Internal Server Error|The statistics could not be retrieved, e.g. the statistics feature was not negotiated with the guest driver.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create the cloud-hypervisor Virtual Machine (VM) instance. The instance is not booted, only created.

<a id="opIdcreateVM"></a>

> Code samples

```bash
curl http://localhost/api/v1/vm.create \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "cpus": {
      "boot_vcpus": 1,
      "max_vcpus": 1,
      "topology": {
        "threads_per_core": 0,
        "cores_per_die": 0,
        "dies_per_package": 0,
        "packages": 0
      },
      "kvm_hyperv": false,
      "max_phys_bits": 0,
      "nested": false,
      "affinity": [
        {
          "vcpu": 0,
          "host_cpus": [
            0
          ]
        }
      ],
      "features": {
        "amx": true
      },
      "core_scheduling": "Vm",
      "profile": "Host",
      "x-cpuid-overrides": []
    },
    "memory": {
      "size": 0,
      "hotplug_size": 0,
      "hotplugged_size": 0,
      "mergeable": false,
      "hotplug_method": "Acpi",
      "shared": false,
      "hugepages": false,
      "hugepage_size": 0,
      "prefault": false,
      "reserve": false,
      "thp": true,
      "zones": [
        {
          "id": "string",
          "size": 0,
          "file": "string",
          "mergeable": false,
          "shared": false,
          "hugepages": false,
          "hugepage_size": 0,
          "host_numa_node": 0,
          "hotplug_size": 0,
          "hotplugged_size": 0,
          "prefault": false,
          "reserve": false
        }
      ]
    },
    "payload": {
      "firmware": "string",
      "kernel": "string",
      "cmdline": "string",
      "initramfs": "string",
      "igvm": "string",
      "host_data": "string"
    },
    "rate_limit_groups": [
      {
        "id": "string",
        "rate_limiter_config": {
          "bandwidth": {
            "size": 0,
            "one_time_burst": 0,
            "refill_time": 0
          },
          "ops": {
            "size": 0,
            "one_time_burst": 0,
            "refill_time": 0
          }
        }
      }
    ],
    "disks": [
      {
        "path": "string",
        "readonly": false,
        "direct": false,
        "iommu": "Off",
        "num_queues": 1,
        "queue_size": 128,
        "vhost_user": false,
        "vhost_socket": "string",
        "rate_limiter_config": {
          "bandwidth": {
            "size": 0,
            "one_time_burst": 0,
            "refill_time": 0
          },
          "ops": {
            "size": 0,
            "one_time_burst": 0,
            "refill_time": 0
          }
        },
        "pci_segment": 0,
        "pci_device_id": 0,
        "id": "string",
        "serial": "string",
        "rate_limit_group": "string",
        "queue_affinity": [
          {
            "queue_index": 0,
            "host_cpus": [
              0
            ]
          }
        ],
        "backing_files": false,
        "sparse": true,
        "image_type": "FlatVmdk",
        "lock_granularity": "ByteRange",
        "guest_block_size": 0
      }
    ],
    "net": [
      {
        "tap": "string",
        "ip": "192.168.249.1",
        "mask": "255.255.255.0",
        "mac": "string",
        "host_mac": "string",
        "mtu": 0,
        "iommu": "Off",
        "num_queues": 2,
        "queue_size": 256,
        "vhost_user": false,
        "vhost_socket": "string",
        "vhost_mode": "Client",
        "id": "string",
        "pci_segment": 0,
        "pci_device_id": 0,
        "rate_limiter_config": {
          "bandwidth": {
            "size": 0,
            "one_time_burst": 0,
            "refill_time": 0
          },
          "ops": {
            "size": 0,
            "one_time_burst": 0,
            "refill_time": 0
          }
        },
        "offload_tso": false,
        "offload_ufo": false,
        "offload_csum": false
      }
    ],
    "rng": {
      "id": "string",
      "pci_segment": 0,
      "pci_device_id": 0,
      "iommu": "Off",
      "src": "string"
    },
    "balloon": {
      "id": "string",
      "pci_segment": 0,
      "pci_device_id": 0,
      "iommu": "Off",
      "size": 0,
      "deflate_on_oom": false,
      "free_page_reporting": false
    },
    "fs": [
      {
        "tag": "string",
        "socket": "string",
        "num_queues": 1,
        "queue_size": 1024,
        "pci_segment": 0,
        "pci_device_id": 0,
        "id": "string"
      }
    ],
    "generic_vhost_user": [
      {
        "socket": "string",
        "queue_sizes": [
          0
        ],
        "pci_segment": 0,
        "pci_device_id": 0,
        "id": "string",
        "device_type": 0
      }
    ],
    "pmem": [
      {
        "file": "string",
        "size": 0,
        "iommu": "Off",
        "discard_writes": false,
        "pci_segment": 0,
        "pci_device_id": 0,
        "id": "string"
      }
    ],
    "serial": {
      "file": "string",
      "socket": "string",
      "tcp": {
        "address": "127.0.0.1:4444",
        "server": true
      },
      "mode": "Off"
    },
    "console": {
      "file": "string",
      "socket": "string",
      "tcp": {
        "address": "127.0.0.1:4444",
        "server": true
      },
      "mode": "Off",
      "iommu": "Off",
      "id": "string",
      "pci_segment": 0,
      "pci_device_id": 0
    },
    "debug_console": {
      "file": "string",
      "mode": "Off",
      "iobase": 0
    },
    "devices": [
      {
        "path": "string",
        "iommu": "Off",
        "pci_segment": 0,
        "pci_device_id": 0,
        "id": "string",
        "x_nv_gpudirect_clique": 0,
        "x_exclude_mmap_bars": [
          0
        ]
      }
    ],
    "user_devices": [
      {
        "socket": "string",
        "id": "string",
        "pci_segment": 0,
        "pci_device_id": 0
      }
    ],
    "vdpa": [
      {
        "path": "string",
        "num_queues": 1,
        "iommu": "Off",
        "pci_segment": 0,
        "pci_device_id": 0,
        "id": "string"
      }
    ],
    "vsock": {
      "cid": 3,
      "socket": "string",
      "iommu": "Off",
      "pci_segment": 0,
      "pci_device_id": 0,
      "id": "string"
    },
    "numa": [
      {
        "guest_numa_id": 0,
        "cpus": [
          0
        ],
        "distances": [
          {
            "destination": 0,
            "distance": 0
          }
        ],
        "memory_zones": [
          "string"
        ],
        "pci_segments": [
          0
        ],
        "device_id": "string"
      }
    ],
    "watchdog": false,
    "rtc": {
      "id": "string",
      "pci_segment": 0,
      "pci_device_id": 0,
      "iommu": "Off"
    },
    "pvpanic": false,
    "pci_segments": [
      {
        "pci_segment": 0,
        "mmio32_aperture_weight": 0,
        "mmio64_aperture_weight": 0
      }
    ],
    "platform": {
      "num_pci_segments": 0,
      "iommu_segments": [
        0
      ],
      "iommu_address_width_bits": 0,
      "system_serial_number": "string",
      "system_uuid": "string",
      "oem_strings": [
        "string"
      ],
      "system_manufacturer": "string",
      "system_product_name": "string",
      "system_version": "string",
      "system_family": "string",
      "system_sku_number": "string",
      "chassis_asset_tag": "string",
      "sev_snp": false,
      "iommufd": false,
      "vfio_p2p_dma": true
    },
    "tpm": {
      "socket": "string"
    },
    "landlock_enable": false,
    "landlock_rules": [
      {
        "path": "string",
        "access": "string"
      }
    ]
  }'
```

`PUT /vm.create`

> Body parameter

```json
{
  "cpus": {
    "boot_vcpus": 1,
    "max_vcpus": 1,
    "topology": {
      "threads_per_core": 0,
      "cores_per_die": 0,
      "dies_per_package": 0,
      "packages": 0
    },
    "kvm_hyperv": false,
    "max_phys_bits": 0,
    "nested": false,
    "affinity": [
      {
        "vcpu": 0,
        "host_cpus": [
          0
        ]
      }
    ],
    "features": {
      "amx": true
    },
    "core_scheduling": "Vm",
    "profile": "Host",
    "x-cpuid-overrides": []
  },
  "memory": {
    "size": 0,
    "hotplug_size": 0,
    "hotplugged_size": 0,
    "mergeable": false,
    "hotplug_method": "Acpi",
    "shared": false,
    "hugepages": false,
    "hugepage_size": 0,
    "prefault": false,
    "reserve": false,
    "thp": true,
    "zones": [
      {
        "id": "string",
        "size": 0,
        "file": "string",
        "mergeable": false,
        "shared": false,
        "hugepages": false,
        "hugepage_size": 0,
        "host_numa_node": 0,
        "hotplug_size": 0,
        "hotplugged_size": 0,
        "prefault": false,
        "reserve": false
      }
    ]
  },
  "payload": {
    "firmware": "string",
    "kernel": "string",
    "cmdline": "string",
    "initramfs": "string",
    "igvm": "string",
    "host_data": "string"
  },
  "rate_limit_groups": [
    {
      "id": "string",
      "rate_limiter_config": {
        "bandwidth": {
          "size": 0,
          "one_time_burst": 0,
          "refill_time": 0
        },
        "ops": {
          "size": 0,
          "one_time_burst": 0,
          "refill_time": 0
        }
      }
    }
  ],
  "disks": [
    {
      "path": "string",
      "readonly": false,
      "direct": false,
      "iommu": "Off",
      "num_queues": 1,
      "queue_size": 128,
      "vhost_user": false,
      "vhost_socket": "string",
      "rate_limiter_config": {
        "bandwidth": {
          "size": 0,
          "one_time_burst": 0,
          "refill_time": 0
        },
        "ops": {
          "size": 0,
          "one_time_burst": 0,
          "refill_time": 0
        }
      },
      "pci_segment": 0,
      "pci_device_id": 0,
      "id": "string",
      "serial": "string",
      "rate_limit_group": "string",
      "queue_affinity": [
        {
          "queue_index": 0,
          "host_cpus": [
            0
          ]
        }
      ],
      "backing_files": false,
      "sparse": true,
      "image_type": "FlatVmdk",
      "lock_granularity": "ByteRange",
      "guest_block_size": 0
    }
  ],
  "net": [
    {
      "tap": "string",
      "ip": "192.168.249.1",
      "mask": "255.255.255.0",
      "mac": "string",
      "host_mac": "string",
      "mtu": 0,
      "iommu": "Off",
      "num_queues": 2,
      "queue_size": 256,
      "vhost_user": false,
      "vhost_socket": "string",
      "vhost_mode": "Client",
      "id": "string",
      "pci_segment": 0,
      "pci_device_id": 0,
      "rate_limiter_config": {
        "bandwidth": {
          "size": 0,
          "one_time_burst": 0,
          "refill_time": 0
        },
        "ops": {
          "size": 0,
          "one_time_burst": 0,
          "refill_time": 0
        }
      },
      "offload_tso": false,
      "offload_ufo": false,
      "offload_csum": false
    }
  ],
  "rng": {
    "id": "string",
    "pci_segment": 0,
    "pci_device_id": 0,
    "iommu": "Off",
    "src": "string"
  },
  "balloon": {
    "id": "string",
    "pci_segment": 0,
    "pci_device_id": 0,
    "iommu": "Off",
    "size": 0,
    "deflate_on_oom": false,
    "free_page_reporting": false
  },
  "fs": [
    {
      "tag": "string",
      "socket": "string",
      "num_queues": 1,
      "queue_size": 1024,
      "pci_segment": 0,
      "pci_device_id": 0,
      "id": "string"
    }
  ],
  "generic_vhost_user": [
    {
      "socket": "string",
      "queue_sizes": [
        0
      ],
      "pci_segment": 0,
      "pci_device_id": 0,
      "id": "string",
      "device_type": 0
    }
  ],
  "pmem": [
    {
      "file": "string",
      "size": 0,
      "iommu": "Off",
      "discard_writes": false,
      "pci_segment": 0,
      "pci_device_id": 0,
      "id": "string"
    }
  ],
  "serial": {
    "file": "string",
    "socket": "string",
    "tcp": {
      "address": "127.0.0.1:4444",
      "server": true
    },
    "mode": "Off"
  },
  "console": {
    "file": "string",
    "socket": "string",
    "tcp": {
      "address": "127.0.0.1:4444",
      "server": true
    },
    "mode": "Off",
    "iommu": "Off",
    "id": "string",
    "pci_segment": 0,
    "pci_device_id": 0
  },
  "debug_console": {
    "file": "string",
    "mode": "Off",
    "iobase": 0
  },
  "devices": [
    {
      "path": "string",
      "iommu": "Off",
      "pci_segment": 0,
      "pci_device_id": 0,
      "id": "string",
      "x_nv_gpudirect_clique": 0,
      "x_exclude_mmap_bars": [
        0
      ]
    }
  ],
  "user_devices": [
    {
      "socket": "string",
      "id": "string",
      "pci_segment": 0,
      "pci_device_id": 0
    }
  ],
  "vdpa": [
    {
      "path": "string",
      "num_queues": 1,
      "iommu": "Off",
      "pci_segment": 0,
      "pci_device_id": 0,
      "id": "string"
    }
  ],
  "vsock": {
    "cid": 3,
    "socket": "string",
    "iommu": "Off",
    "pci_segment": 0,
    "pci_device_id": 0,
    "id": "string"
  },
  "numa": [
    {
      "guest_numa_id": 0,
      "cpus": [
        0
      ],
      "distances": [
        {
          "destination": 0,
          "distance": 0
        }
      ],
      "memory_zones": [
        "string"
      ],
      "pci_segments": [
        0
      ],
      "device_id": "string"
    }
  ],
  "watchdog": false,
  "rtc": {
    "id": "string",
    "pci_segment": 0,
    "pci_device_id": 0,
    "iommu": "Off"
  },
  "pvpanic": false,
  "pci_segments": [
    {
      "pci_segment": 0,
      "mmio32_aperture_weight": 0,
      "mmio64_aperture_weight": 0
    }
  ],
  "platform": {
    "num_pci_segments": 0,
    "iommu_segments": [
      0
    ],
    "iommu_address_width_bits": 0,
    "system_serial_number": "string",
    "system_uuid": "string",
    "oem_strings": [
      "string"
    ],
    "system_manufacturer": "string",
    "system_product_name": "string",
    "system_version": "string",
    "system_family": "string",
    "system_sku_number": "string",
    "chassis_asset_tag": "string",
    "sev_snp": false,
    "iommufd": false,
    "vfio_p2p_dma": true
  },
  "tpm": {
    "socket": "string"
  },
  "landlock_enable": false,
  "landlock_rules": [
    {
      "path": "string",
      "access": "string"
    }
  ]
}
```

<h3 id="create-the-cloud-hypervisor-virtual-machine-vm-instance-the-instance-is-not-booted-only-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VmConfig](#schemavmconfig)|true|The VM configuration|
|» cpus|body|[CpusConfig](#schemacpusconfig)|false|none|
|» memory|body|[MemoryConfig](#schemamemoryconfig)|false|none|
|» payload|body|[PayloadConfig](#schemapayloadconfig)|true|Payloads to boot in guest|
|» rate_limit_groups|body|[[RateLimitGroupConfig](#schemaratelimitgroupconfig)]|false|none|
|» disks|body|[[DiskConfig](#schemadiskconfig)]|false|none|
|» net|body|[[NetConfig](#schemanetconfig)]|false|none|
|» rng|body|[RngConfig](#schemarngconfig)|false|none|
|» balloon|body|[BalloonConfig](#schemaballoonconfig)|false|none|
|» fs|body|[[FsConfig](#schemafsconfig)]|false|none|
|» generic_vhost_user|body|[[GenericVhostUserConfig](#schemagenericvhostuserconfig)]|false|none|
|» pmem|body|[[PmemConfig](#schemapmemconfig)]|false|none|
|» serial|body|[SerialConfig](#schemaserialconfig)|false|none|
|» console|body|[ConsoleConfig](#schemaconsoleconfig)|false|none|
|» debug_console|body|[DebugConsoleConfig](#schemadebugconsoleconfig)|false|none|
|» devices|body|[[DeviceConfig](#schemadeviceconfig)]|false|none|
|» user_devices|body|[[UserDeviceConfig](#schemauserdeviceconfig)]|false|none|
|» vdpa|body|[[VdpaConfig](#schemavdpaconfig)]|false|none|
|» vsock|body|[VsockConfig](#schemavsockconfig)|false|none|
|» numa|body|[[NumaConfig](#schemanumaconfig)]|false|none|
|» watchdog|body|boolean|false|none|
|» rtc|body|[RtcConfig](#schemartcconfig)|false|none|
|» pvpanic|body|boolean|false|none|
|» pci_segments|body|[[PciSegmentConfig](#schemapcisegmentconfig)]|false|none|
|» platform|body|[PlatformConfig](#schemaplatformconfig)|false|none|
|» tpm|body|[TpmConfig](#schematpmconfig)|false|none|
|» landlock_enable|body|boolean|false|none|
|» landlock_rules|body|[[LandlockConfig](#schemalandlockconfig)]|false|none|

<h3 id="create-the-cloud-hypervisor-virtual-machine-vm-instance-the-instance-is-not-booted-only-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The VM instance was successfully created.|None|
|409|Conflict|The operation conflicts with the current state of the VM.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete the cloud-hypervisor Virtual Machine (VM) instance.

<a id="opIddeleteVM"></a>

> Code samples

```bash
curl http://localhost/api/v1/vm.delete \
  -X PUT
```

`PUT /vm.delete`

<h3 id="delete-the-cloud-hypervisor-virtual-machine-vm-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The VM instance was successfully deleted.|None|
|409|Conflict|The operation conflicts with the current state of the VM.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Boot the previously created VM instance.

<a id="opIdbootVM"></a>

> Code samples

```bash
curl http://localhost/api/v1/vm.boot \
  -X PUT
```

`PUT /vm.boot`

<h3 id="boot-the-previously-created-vm-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The VM instance successfully booted.|None|
|404|Not Found|The VM instance could not boot because it is not created yet|None|
|409|Conflict|The operation conflicts with the current state of the VM.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Pause a previously booted VM instance.

<a id="opIdpauseVM"></a>

> Code samples

```bash
curl http://localhost/api/v1/vm.pause \
  -X PUT
```

`PUT /vm.pause`

<h3 id="pause-a-previously-booted-vm-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The VM instance successfully paused.|None|
|404|Not Found|The VM instance could not pause because it is not created yet|None|
|405|Method Not Allowed|The VM instance could not pause because it is not booted.|None|
|409|Conflict|The operation conflicts with the current state of the VM.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Resume a previously paused VM instance.

<a id="opIdresumeVM"></a>

> Code samples

```bash
curl http://localhost/api/v1/vm.resume \
  -X PUT
```

`PUT /vm.resume`

<h3 id="resume-a-previously-paused-vm-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The VM instance successfully paused.|None|
|404|Not Found|The VM instance could not resume because it is not booted yet|None|
|405|Method Not Allowed|The VM instance could not resume because it is not paused.|None|
|409|Conflict|The operation conflicts with the current state of the VM.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Shut the VM instance down.

<a id="opIdshutdownVM"></a>

> Code samples

```bash
curl http://localhost/api/v1/vm.shutdown \
  -X PUT
```

`PUT /vm.shutdown`

<h3 id="shut-the-vm-instance-down-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The VM instance successfully shut down.|None|
|404|Not Found|The VM instance could not shut down because is not created.|None|
|405|Method Not Allowed|The VM instance could not shut down because it is not started.|None|
|409|Conflict|The operation conflicts with the current state of the VM.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Reboot the VM instance.

<a id="opIdrebootVM"></a>

> Code samples

```bash
curl http://localhost/api/v1/vm.reboot \
  -X PUT
```

`PUT /vm.reboot`

<h3 id="reboot-the-vm-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The VM instance successfully rebooted.|None|
|404|Not Found|The VM instance could not reboot because it is not created.|None|
|405|Method Not Allowed|The VM instance could not reboot because it is not booted.|None|
|409|Conflict|The operation conflicts with the current state of the VM.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Trigger a power button in the VM

<a id="opIdpower-buttonVM"></a>

> Code samples

```bash
curl http://localhost/api/v1/vm.power-button \
  -X PUT
```

`PUT /vm.power-button`

<h3 id="trigger-a-power-button-in-the-vm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Power button successfully triggered in the VM|None|
|404|Not Found|The button could not be triggered because it is not created yet|None|
|405|Method Not Allowed|The button could not be triggered because it is not booted.|None|
|409|Conflict|The operation conflicts with the current state of the VM.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Resize the VM

> Code samples

```bash
curl http://localhost/api/v1/vm.resize \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "desired_vcpus": 1,
    "desired_ram": 0,
    "desired_balloon": 0
  }'
```

`PUT /vm.resize`

> Body parameter

```json
{
  "desired_vcpus": 1,
  "desired_ram": 0,
  "desired_balloon": 0
}
```

<h3 id="resize-the-vm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VmResize](#schemavmresize)|true|The target size for the VM|
|» desired_vcpus|body|integer|false|none|
|» desired_ram|body|integer(int64)|false|desired memory ram in bytes|
|» desired_balloon|body|integer(int64)|false|desired balloon size in bytes|

<h3 id="resize-the-vm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The VM instance was successfully resized.|None|
|404|Not Found|The VM instance could not be resized because it is not created.|None|
|409|Conflict|The operation conflicts with the current state of the VM.|None|
|429|Too Many Requests|The VM instance could not be resized because a cpu removal is still pending.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Resize a disk

> Code samples

```bash
curl http://localhost/api/v1/vm.resize-disk \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "id": "string",
    "desired_size": 0
  }'
```

`PUT /vm.resize-disk`

> Body parameter

```json
{
  "id": "string",
  "desired_size": 0
}
```

<h3 id="resize-a-disk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VmResizeDisk](#schemavmresizedisk)|true|Resizes a disk attached to the VM|
|» id|body|string|false|disk identifier|
|» desired_size|body|integer(int64)|false|desired disk size in bytes|

<h3 id="resize-a-disk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The disk was successfully resized.|None|
|404|Not Found|The disk could not be resized because the VM is not created, or no disk with the given identifier exists.|None|
|409|Conflict|The operation conflicts with the current state of the VM.|None|
|500|Internal Server Error|The disk could not be resized.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Resize a memory zone

> Code samples

```bash
curl http://localhost/api/v1/vm.resize-zone \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "id": "string",
    "desired_ram": 0
  }'
```

`PUT /vm.resize-zone`

> Body parameter

```json
{
  "id": "string",
  "desired_ram": 0
}
```

<h3 id="resize-a-memory-zone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VmResizeZone](#schemavmresizezone)|true|The target size for the memory zone|
|» id|body|string|false|none|
|» desired_ram|body|integer(int64)|false|desired memory zone size in bytes|

<h3 id="resize-a-memory-zone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The memory zone was successfully resized.|None|
|404|Not Found|The memory zone could not be resized because the VM is not created.|None|
|409|Conflict|The operation conflicts with the current state of the VM.|None|
|500|Internal Server Error|The memory zone could not be resized.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add a new device to the VM

> Code samples

```bash
curl http://localhost/api/v1/vm.add-device \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "path": "string",
    "iommu": "Off",
    "pci_segment": 0,
    "pci_device_id": 0,
    "id": "string",
    "x_nv_gpudirect_clique": 0,
    "x_exclude_mmap_bars": [
      0
    ]
  }'
```

`PUT /vm.add-device`

> Body parameter

```json
{
  "path": "string",
  "iommu": "Off",
  "pci_segment": 0,
  "pci_device_id": 0,
  "id": "string",
  "x_nv_gpudirect_clique": 0,
  "x_exclude_mmap_bars": [
    0
  ]
}
```

<h3 id="add-a-new-device-to-the-vm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeviceConfig](#schemadeviceconfig)|true|The path of the new device|
|» path|body|string|false|Sysfs path of the VFIO device. Exactly one of `path` or an<br>externally-opened cdev FD must be supplied; an FD is passed<br>out of band via SCM_RIGHTS on the UNIX domain socket, never<br>in this body.<br>|
|» iommu|body|[IommuType](#schemaiommutype)|false|Virtual IOMMU the device is attached to.|
|» pci_segment|body|integer(int16)|false|none|
|» pci_device_id|body|integer(uint8)|false|none|
|» id|body|string|false|none|
|» x_nv_gpudirect_clique|body|integer(int8)|false|none|
|» x_exclude_mmap_bars|body|[integer(int64)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» iommu|Off|
|» iommu|Virtio|
|» iommu|Smmuv3|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "bdf": "string"
}
```

<h3 id="add-a-new-device-to-the-vm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new device was successfully added to the VM instance.|[PciDeviceInfo](#schemapcideviceinfo)|
|204|No Content|The new device was successfully (cold) added to the VM instance.|None|
|400|Bad Request|The new device could not be added because the configuration is not valid.|None|
|404|Not Found|The new device could not be added to the VM instance.|None|
|409|Conflict|The new device could not be added because a device with the same identifier or path already exists, or because the operation conflicts with the current state of the VM.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a device from the VM

> Code samples

```bash
curl http://localhost/api/v1/vm.remove-device \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "id": "string"
  }'
```

`PUT /vm.remove-device`

> Body parameter

```json
{
  "id": "string"
}
```

<h3 id="remove-a-device-from-the-vm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VmRemoveDevice](#schemavmremovedevice)|true|The identifier of the device|
|» id|body|string|false|none|

<h3 id="remove-a-device-from-the-vm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The device was successfully removed from the VM instance.|None|
|404|Not Found|The device could not be removed because the VM is not created, or no device with the given identifier exists.|None|
|409|Conflict|The operation conflicts with the current state of the VM.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add a new disk to the VM

> Code samples

```bash
curl http://localhost/api/v1/vm.add-disk \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "path": "string",
    "readonly": false,
    "direct": false,
    "iommu": "Off",
    "num_queues": 1,
    "queue_size": 128,
    "vhost_user": false,
    "vhost_socket": "string",
    "rate_limiter_config": {
      "bandwidth": {
        "size": 0,
        "one_time_burst": 0,
        "refill_time": 0
      },
      "ops": {
        "size": 0,
        "one_time_burst": 0,
        "refill_time": 0
      }
    },
    "pci_segment": 0,
    "pci_device_id": 0,
    "id": "string",
    "serial": "string",
    "rate_limit_group": "string",
    "queue_affinity": [
      {
        "queue_index": 0,
        "host_cpus": [
          0
        ]
      }
    ],
    "backing_files": false,
    "sparse": true,
    "image_type": "FlatVmdk",
    "lock_granularity": "ByteRange",
    "guest_block_size": 0
  }'
```

`PUT /vm.add-disk`

> Body parameter

```json
{
  "path": "string",
  "readonly": false,
  "direct": false,
  "iommu": "Off",
  "num_queues": 1,
  "queue_size": 128,
  "vhost_user": false,
  "vhost_socket": "string",
  "rate_limiter_config": {
    "bandwidth": {
      "size": 0,
      "one_time_burst": 0,
      "refill_time": 0
    },
    "ops": {
      "size": 0,
      "one_time_burst": 0,
      "refill_time": 0
    }
  },
  "pci_segment": 0,
  "pci_device_id": 0,
  "id": "string",
  "serial": "string",
  "rate_limit_group": "string",
  "queue_affinity": [
    {
      "queue_index": 0,
      "host_cpus": [
        0
      ]
    }
  ],
  "backing_files": false,
  "sparse": true,
  "image_type": "FlatVmdk",
  "lock_granularity": "ByteRange",
  "guest_block_size": 0
}
```

<h3 id="add-a-new-disk-to-the-vm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DiskConfig](#schemadiskconfig)|true|The details of the new disk|
|» path|body|string|false|none|
|» readonly|body|boolean|false|none|
|» direct|body|boolean|false|none|
|» iommu|body|[IommuType](#schemaiommutype)|false|Virtual IOMMU the device is attached to.|
|» num_queues|body|integer(uint16)|false|none|
|» queue_size|body|integer|false|none|
|» vhost_user|body|boolean|false|none|
|» vhost_socket|body|string|false|none|
|» rate_limiter_config|body|[RateLimiterConfig](#schemaratelimiterconfig)|false|Defines an IO rate limiter with independent bytes/s and ops/s limits. Limits are defined by configuring each of the _bandwidth_ and _ops_ token buckets.|
|» pci_segment|body|integer(int16)|false|none|
|» pci_device_id|body|integer(uint8)|false|none|
|» id|body|string|false|none|
|» serial|body|string|false|none|
|» rate_limit_group|body|string|false|none|
|» queue_affinity|body|[[VirtQueueAffinity](#schemavirtqueueaffinity)]|false|none|
|» backing_files|body|boolean|false|none|
|» sparse|body|boolean|false|none|
|» image_type|body|[ImageType](#schemaimagetype)|false|Unknown is only valid for vhost-user disks.|
|» lock_granularity|body|[LockGranularity](#schemalockgranularity)|false|none|
|» guest_block_size|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» iommu|Off|
|» iommu|Virtio|
|» iommu|Smmuv3|
|» image_type|FlatVmdk|
|» image_type|FixedVhd|
|» image_type|Qcow2|
|» image_type|Raw|
|» image_type|Vhdx|
|» image_type|Unknown|
|» lock_granularity|ByteRange|
|» lock_granularity|Full|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "bdf": "string"
}
```

<h3 id="add-a-new-disk-to-the-vm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new disk was successfully added to the VM instance.|[PciDeviceInfo](#schemapcideviceinfo)|
|204|No Content|The new disk was successfully (cold) added to the VM instance.|None|
|400|Bad Request|The new disk could not be added because the configuration is not valid.|None|
|404|Not Found|The new disk could not be added because the VM is not created.|None|
|409|Conflict|The new disk could not be added because a device with the same identifier already exists, or because the operation conflicts with the current state of the VM.|None|
|500|Internal Server Error|The new disk could not be added to the VM instance.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add a new virtio-fs device to the VM

> Code samples

```bash
curl http://localhost/api/v1/vm.add-fs \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "tag": "string",
    "socket": "string",
    "num_queues": 1,
    "queue_size": 1024,
    "pci_segment": 0,
    "pci_device_id": 0,
    "id": "string"
  }'
```

`PUT /vm.add-fs`

> Body parameter

```json
{
  "tag": "string",
  "socket": "string",
  "num_queues": 1,
  "queue_size": 1024,
  "pci_segment": 0,
  "pci_device_id": 0,
  "id": "string"
}
```

<h3 id="add-a-new-virtio-fs-device-to-the-vm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FsConfig](#schemafsconfig)|true|The details of the new virtio-fs|
|» tag|body|string|true|none|
|» socket|body|string|true|none|
|» num_queues|body|integer(uint16)|true|none|
|» queue_size|body|integer|true|none|
|» pci_segment|body|integer(int16)|false|none|
|» pci_device_id|body|integer(uint8)|false|none|
|» id|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "bdf": "string"
}
```

<h3 id="add-a-new-virtio-fs-device-to-the-vm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new device was successfully added to the VM instance.|[PciDeviceInfo](#schemapcideviceinfo)|
|204|No Content|The new device was successfully (cold) added to the VM instance.|None|
|400|Bad Request|The new device could not be added because the configuration is not valid.|None|
|404|Not Found|The new device could not be added because the VM is not created.|None|
|409|Conflict|The new device could not be added because a device with the same identifier already exists, or because the operation conflicts with the current state of the VM.|None|
|500|Internal Server Error|The new device could not be added to the VM instance.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add a new generic vhost-user device to the VM

> Code samples

```bash
curl http://localhost/api/v1/vm.add-generic-vhost-user \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "socket": "string",
    "queue_sizes": [
      0
    ],
    "pci_segment": 0,
    "pci_device_id": 0,
    "id": "string",
    "device_type": 0
  }'
```

`PUT /vm.add-generic-vhost-user`

> Body parameter

```json
{
  "socket": "string",
  "queue_sizes": [
    0
  ],
  "pci_segment": 0,
  "pci_device_id": 0,
  "id": "string",
  "device_type": 0
}
```

<h3 id="add-a-new-generic-vhost-user-device-to-the-vm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GenericVhostUserConfig](#schemagenericvhostuserconfig)|true|The details of the new generic vhost-user device|
|» socket|body|string|true|none|
|» queue_sizes|body|[integer(uint16)]|true|none|
|» pci_segment|body|integer(int16)|false|none|
|» pci_device_id|body|integer(uint8)|false|none|
|» id|body|string|false|none|
|» device_type|body|integer(uint32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "bdf": "string"
}
```

<h3 id="add-a-new-generic-vhost-user-device-to-the-vm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new device was successfully added to the VM instance.|[PciDeviceInfo](#schemapcideviceinfo)|
|204|No Content|The new device was successfully (cold) added to the VM instance.|None|
|400|Bad Request|The new device could not be added because the configuration is not valid.|None|
|404|Not Found|The new device could not be added because the VM is not created.|None|
|409|Conflict|The new device could not be added because a device with the same identifier already exists, or because the operation conflicts with the current state of the VM.|None|
|500|Internal Server Error|The new device could not be added to the VM instance.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add a new pmem device to the VM

> Code samples

```bash
curl http://localhost/api/v1/vm.add-pmem \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "file": "string",
    "size": 0,
    "iommu": "Off",
    "discard_writes": false,
    "pci_segment": 0,
    "pci_device_id": 0,
    "id": "string"
  }'
```

`PUT /vm.add-pmem`

> Body parameter

```json
{
  "file": "string",
  "size": 0,
  "iommu": "Off",
  "discard_writes": false,
  "pci_segment": 0,
  "pci_device_id": 0,
  "id": "string"
}
```

<h3 id="add-a-new-pmem-device-to-the-vm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PmemConfig](#schemapmemconfig)|true|The details of the new pmem device|
|» file|body|string|true|none|
|» size|body|integer(int64)|false|none|
|» iommu|body|[IommuType](#schemaiommutype)|false|Virtual IOMMU the device is attached to.|
|» discard_writes|body|boolean|false|none|
|» pci_segment|body|integer(int16)|false|none|
|» pci_device_id|body|integer(uint8)|false|none|
|» id|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» iommu|Off|
|» iommu|Virtio|
|» iommu|Smmuv3|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "bdf": "string"
}
```

<h3 id="add-a-new-pmem-device-to-the-vm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new device was successfully added to the VM instance.|[PciDeviceInfo](#schemapcideviceinfo)|
|204|No Content|The new device was successfully (cold) added to the VM instance.|None|
|400|Bad Request|The new device could not be added because the configuration is not valid.|None|
|404|Not Found|The new device could not be added because the VM is not created.|None|
|409|Conflict|The new device could not be added because a device with the same identifier already exists, or because the operation conflicts with the current state of the VM.|None|
|500|Internal Server Error|The new device could not be added to the VM instance.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add a new network device to the VM

> Code samples

```bash
curl http://localhost/api/v1/vm.add-net \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "tap": "string",
    "ip": "192.168.249.1",
    "mask": "255.255.255.0",
    "mac": "string",
    "host_mac": "string",
    "mtu": 0,
    "iommu": "Off",
    "num_queues": 2,
    "queue_size": 256,
    "vhost_user": false,
    "vhost_socket": "string",
    "vhost_mode": "Client",
    "id": "string",
    "pci_segment": 0,
    "pci_device_id": 0,
    "rate_limiter_config": {
      "bandwidth": {
        "size": 0,
        "one_time_burst": 0,
        "refill_time": 0
      },
      "ops": {
        "size": 0,
        "one_time_burst": 0,
        "refill_time": 0
      }
    },
    "offload_tso": false,
    "offload_ufo": false,
    "offload_csum": false
  }'
```

`PUT /vm.add-net`

> Body parameter

```json
{
  "tap": "string",
  "ip": "192.168.249.1",
  "mask": "255.255.255.0",
  "mac": "string",
  "host_mac": "string",
  "mtu": 0,
  "iommu": "Off",
  "num_queues": 2,
  "queue_size": 256,
  "vhost_user": false,
  "vhost_socket": "string",
  "vhost_mode": "Client",
  "id": "string",
  "pci_segment": 0,
  "pci_device_id": 0,
  "rate_limiter_config": {
    "bandwidth": {
      "size": 0,
      "one_time_burst": 0,
      "refill_time": 0
    },
    "ops": {
      "size": 0,
      "one_time_burst": 0,
      "refill_time": 0
    }
  },
  "offload_tso": false,
  "offload_ufo": false,
  "offload_csum": false
}
```

<h3 id="add-a-new-network-device-to-the-vm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NetConfig](#schemanetconfig)|true|The details of the new network device|
|» tap|body|string|false|none|
|» ip|body|string|false|IPv4 or IPv6 address|
|» mask|body|string|false|Must be a valid IPv4 netmask if ip is an IPv4 address or a valid IPv6 netmask if ip is an IPv6 address.|
|» mac|body|string|false|none|
|» host_mac|body|string|false|none|
|» mtu|body|integer|false|none|
|» iommu|body|[IommuType](#schemaiommutype)|false|Virtual IOMMU the device is attached to.|
|» num_queues|body|integer(uint16)|false|none|
|» queue_size|body|integer|false|none|
|» vhost_user|body|boolean|false|none|
|» vhost_socket|body|string|false|none|
|» vhost_mode|body|string|false|none|
|» id|body|string|false|none|
|» pci_segment|body|integer(int16)|false|none|
|» pci_device_id|body|integer(uint8)|false|none|
|» rate_limiter_config|body|[RateLimiterConfig](#schemaratelimiterconfig)|false|Defines an IO rate limiter with independent bytes/s and ops/s limits. Limits are defined by configuring each of the _bandwidth_ and _ops_ token buckets.|
|» offload_tso|body|boolean|false|none|
|» offload_ufo|body|boolean|false|none|
|» offload_csum|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» iommu|Off|
|» iommu|Virtio|
|» iommu|Smmuv3|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "bdf": "string"
}
```

<h3 id="add-a-new-network-device-to-the-vm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new device was successfully added to the VM instance.|[PciDeviceInfo](#schemapcideviceinfo)|
|204|No Content|The new device was successfully (cold) added to the VM instance.|None|
|400|Bad Request|The new device could not be added because the configuration is not valid.|None|
|404|Not Found|The new device could not be added because the VM is not created.|None|
|409|Conflict|The new device could not be added because a device with the same identifier already exists, or because the operation conflicts with the current state of the VM.|None|
|500|Internal Server Error|The new device could not be added to the VM instance.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add a new vsock device to the VM

> Code samples

```bash
curl http://localhost/api/v1/vm.add-vsock \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cid": 3,
    "socket": "string",
    "iommu": "Off",
    "pci_segment": 0,
    "pci_device_id": 0,
    "id": "string"
  }'
```

`PUT /vm.add-vsock`

> Body parameter

```json
{
  "cid": 3,
  "socket": "string",
  "iommu": "Off",
  "pci_segment": 0,
  "pci_device_id": 0,
  "id": "string"
}
```

<h3 id="add-a-new-vsock-device-to-the-vm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VsockConfig](#schemavsockconfig)|true|The details of the new vsock device|
|» cid|body|integer(int64)|true|Guest Vsock CID|
|» socket|body|string|true|Path to UNIX domain socket, used to proxy vsock connections.|
|» iommu|body|[IommuType](#schemaiommutype)|false|Virtual IOMMU the device is attached to.|
|» pci_segment|body|integer(int16)|false|none|
|» pci_device_id|body|integer(uint8)|false|none|
|» id|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» iommu|Off|
|» iommu|Virtio|
|» iommu|Smmuv3|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "bdf": "string"
}
```

<h3 id="add-a-new-vsock-device-to-the-vm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new device was successfully added to the VM instance.|[PciDeviceInfo](#schemapcideviceinfo)|
|204|No Content|The new device was successfully (cold) added to the VM instance.|None|
|400|Bad Request|The new device could not be added because the configuration is not valid.|None|
|404|Not Found|The new device could not be added because the VM is not created.|None|
|409|Conflict|The new device could not be added because a device with the same identifier already exists, or because the operation conflicts with the current state of the VM.|None|
|500|Internal Server Error|The new device could not be added to the VM instance.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add a new vDPA device to the VM

> Code samples

```bash
curl http://localhost/api/v1/vm.add-vdpa \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "path": "string",
    "num_queues": 1,
    "iommu": "Off",
    "pci_segment": 0,
    "pci_device_id": 0,
    "id": "string"
  }'
```

`PUT /vm.add-vdpa`

> Body parameter

```json
{
  "path": "string",
  "num_queues": 1,
  "iommu": "Off",
  "pci_segment": 0,
  "pci_device_id": 0,
  "id": "string"
}
```

<h3 id="add-a-new-vdpa-device-to-the-vm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VdpaConfig](#schemavdpaconfig)|true|The details of the new vDPA device|
|» path|body|string|true|none|
|» num_queues|body|integer(uint16)|true|none|
|» iommu|body|[IommuType](#schemaiommutype)|false|Virtual IOMMU the device is attached to.|
|» pci_segment|body|integer(int16)|false|none|
|» pci_device_id|body|integer(uint8)|false|none|
|» id|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» iommu|Off|
|» iommu|Virtio|
|» iommu|Smmuv3|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "bdf": "string"
}
```

<h3 id="add-a-new-vdpa-device-to-the-vm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new vDPA device was successfully added to the VM instance.|[PciDeviceInfo](#schemapcideviceinfo)|
|204|No Content|The new vDPA device was successfully (cold) added to the VM instance.|None|
|400|Bad Request|The new vDPA device could not be added because the configuration is not valid.|None|
|404|Not Found|The new vDPA device could not be added because the VM is not created.|None|
|409|Conflict|The new vDPA device could not be added because a device with the same identifier already exists, or because the operation conflicts with the current state of the VM.|None|
|500|Internal Server Error|The new vDPA device could not be added to the VM instance.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add a new userspace device to the VM

> Code samples

```bash
curl http://localhost/api/v1/vm.add-user-device \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "socket": "string",
    "pci_segment": 0,
    "pci_device_id": 0
  }'
```

`PUT /vm.add-user-device`

> Body parameter

```json
{
  "socket": "string",
  "pci_segment": 0,
  "pci_device_id": 0
}
```

<h3 id="add-a-new-userspace-device-to-the-vm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VmAddUserDevice](#schemavmadduserdevice)|true|The path of the new device|
|» socket|body|string|true|none|
|» pci_segment|body|integer(int16)|false|none|
|» pci_device_id|body|integer(uint8)|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "bdf": "string"
}
```

<h3 id="add-a-new-userspace-device-to-the-vm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new device was successfully added to the VM instance.|[PciDeviceInfo](#schemapcideviceinfo)|
|204|No Content|The new device was successfully (cold) added to the VM instance.|None|
|400|Bad Request|The new device could not be added because the configuration is not valid.|None|
|404|Not Found|The new device could not be added to the VM instance.|None|
|409|Conflict|The new device could not be added because a device with the same identifier already exists, or because the operation conflicts with the current state of the VM.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a VM snapshot.

> Code samples

```bash
curl http://localhost/api/v1/vm.snapshot \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "destination_url": "string"
  }'
```

`PUT /vm.snapshot`

> Body parameter

```json
{
  "destination_url": "string"
}
```

<h3 id="returns-a-vm-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VmSnapshotConfig](#schemavmsnapshotconfig)|true|The snapshot configuration|
|» destination_url|body|string|false|none|

<h3 id="returns-a-vm-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The VM instance was successfully snapshotted.|None|
|404|Not Found|The VM instance could not be snapshotted because it is not created.|None|
|405|Method Not Allowed|The VM instance could not be snapshotted because it is not booted.|None|
|409|Conflict|The operation conflicts with the current state of the VM.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Takes a VM coredump.

> Code samples

```bash
curl http://localhost/api/v1/vm.coredump \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "destination_url": "string"
  }'
```

`PUT /vm.coredump`

> Body parameter

```json
{
  "destination_url": "string"
}
```

<h3 id="takes-a-vm-coredump-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VmCoredumpData](#schemavmcoredumpdata)|true|The coredump configuration|
|» destination_url|body|string|false|none|

<h3 id="takes-a-vm-coredump-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The VM instance was successfully coredumped.|None|
|404|Not Found|The VM instance could not be coredumped because it is not created.|None|
|405|Method Not Allowed|The VM instance could not be coredumped because it is not booted.|None|
|409|Conflict|The operation conflicts with the current state of the VM.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Inject an NMI.

> Code samples

```bash
curl http://localhost/api/v1/vm.nmi \
  -X PUT
```

`PUT /vm.nmi`

<h3 id="inject-an-nmi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The NMI successfully injected.|None|
|409|Conflict|The operation conflicts with the current state of the VM.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Restore a VM from a snapshot.

> Code samples

```bash
curl http://localhost/api/v1/vm.restore \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "source_url": "string",
    "prefault": true,
    "memory_restore_mode": "Copy",
    "resume": true,
    "zone_updates": [
      {
        "id": "string",
        "host_numa_node": 0
      }
    ]
  }'
```

`PUT /vm.restore`

> Body parameter

```json
{
  "source_url": "string",
  "prefault": true,
  "memory_restore_mode": "Copy",
  "resume": true,
  "zone_updates": [
    {
      "id": "string",
      "host_numa_node": 0
    }
  ]
}
```

<h3 id="restore-a-vm-from-a-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RestoreConfig](#schemarestoreconfig)|true|The restore configuration|
|» source_url|body|string|true|none|
|» prefault|body|boolean|false|none|
|» memory_restore_mode|body|[MemoryRestoreMode](#schemamemoryrestoremode)|false|none|
|» resume|body|boolean|false|none|
|» zone_updates|body|[[VmMemoryZoneUpdateData](#schemavmmemoryzoneupdatedata)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» memory_restore_mode|Copy|
|» memory_restore_mode|OnDemand|
|» memory_restore_mode|CopyOnWrite|

<h3 id="restore-a-vm-from-a-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The VM instance was successfully restored.|None|
|400|Bad Request|The VM could not be restored because the restore configuration is not valid.|None|
|404|Not Found|The VM instance could not be restored because it is already created.|None|
|409|Conflict|The VM could not be restored because a device with the same identifier or path already exists, or because the operation conflicts with the current state of the VM.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Receive a VM migration from URL

> Code samples

```bash
curl http://localhost/api/v1/vm.receive-migration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "receiver_url": "string",
    "tls_dir": "string",
    "zone_updates": [
      {
        "id": "string",
        "host_numa_node": 0
      }
    ],
    "background_fetch_pages": true
  }'
```

`PUT /vm.receive-migration`

> Body parameter

```json
{
  "receiver_url": "string",
  "tls_dir": "string",
  "zone_updates": [
    {
      "id": "string",
      "host_numa_node": 0
    }
  ],
  "background_fetch_pages": true
}
```

<h3 id="receive-a-vm-migration-from-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReceiveMigrationData](#schemareceivemigrationdata)|true|The URL for the reception of migration state|
|» receiver_url|body|string|true|none|
|» tls_dir|body|string|false|Directory containing the TLS server certificate (server-cert.pem), the TLS server key (server-key.pem), and the client TLS root CA certificate (ca-cert.pem). TLS is only supported with tcp:<host>:<port> receiver URLs. Recommended for all TCP migrations. Omitting it is only intended for development and testing, as TCP migration is then unencrypted and unauthenticated.<br>|
|» zone_updates|body|[[VmMemoryZoneUpdateData](#schemavmmemoryzoneupdatedata)]|false|none|
|» background_fetch_pages|body|boolean|false|Enable the background thread for faulting all remaining pages.|

<h3 id="receive-a-vm-migration-from-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The VM migration was successfully received.|None|
|409|Conflict|The operation conflicts with the current state of the VMM.|None|
|500|Internal Server Error|The VM migration could not be received.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Send a VM migration to URL

> Code samples

```bash
curl http://localhost/api/v1/vm.send-migration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "destination_url": "string",
    "local": false,
    "preserve_source": false,
    "downtime_ms": 300,
    "timeout_s": 3600,
    "timeout_strategy": "Cancel",
    "connections": 1,
    "tls_dir": "string",
    "memory_mode": "Precopy"
  }'
```

`PUT /vm.send-migration`

> Body parameter

```json
{
  "destination_url": "string",
  "local": false,
  "preserve_source": false,
  "downtime_ms": 300,
  "timeout_s": 3600,
  "timeout_strategy": "Cancel",
  "connections": 1,
  "tls_dir": "string",
  "memory_mode": "Precopy"
}
```

<h3 id="send-a-vm-migration-to-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SendMigrationData](#schemasendmigrationdata)|true|The URL for sending the migration state|
|» destination_url|body|string|true|none|
|» local|body|boolean|false|**Deprecated.** Deprecated: set memory_mode to "MemFDs" instead. If true, the request is treated as if memory_mode were "MemFDs".<br>|
|» preserve_source|body|boolean|false|Keep the source VM alive in a paused state after migration completes. This is only supported when memory_mode is "MemFDs" or the deprecated local property is true.<br>|
|» downtime_ms|body|integer(int64)|false|The maximum downtime the migration aims for, in milliseconds. Defaults to 300ms.<br>|
|» timeout_s|body|integer(int64)|false|The timeout for the migration (maximum total duration), in seconds. Defaults to 3600s (one hour).<br>|
|» timeout_strategy|body|[TimeoutStrategy](#schematimeoutstrategy)|false|The strategy to apply when the migration timeout is reached. Cancel will abort the migration and keep the VM running on the source. Ignore will proceed with the migration regardless of the downtime requirement.<br>|
|» connections|body|integer(int64)|false|The number of parallel TCP connections to use for migration. Must be between 1 and 128. Multiple connections are not supported with UNIX domain socket migration.<br>|
|» tls_dir|body|string|false|Directory containing the TLS root CA certificate (ca-cert.pem), the TLS client certificate (client-cert.pem), and TLS client key (client-key.pem). TLS is only supported with tcp:<host>:<port> destination URLs. Recommended for all TCP migrations. Omitting it is only intended for development and testing, as TCP migration is then unencrypted and unauthenticated.<br>|
|» memory_mode|body|[MigrationMode](#schemamigrationmode)|false|Memory transfer mode. MemFDs passes the guest memory backing file descriptors to the destination over a UNIX socket. MemFDs requires every guest memory region to use shared memory or hugepage backing. Precopy transfers all guest memory before the destination resumes. Postcopy resumes the destination first and faults guest pages in on demand.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» timeout_strategy|Cancel|
|» timeout_strategy|Ignore|
|» memory_mode|MemFDs|
|» memory_mode|Precopy|
|» memory_mode|Postcopy|

<h3 id="send-a-vm-migration-to-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The VM migration was successfully sent.|None|
|409|Conflict|The operation conflicts with the current state of the VMM.|None|
|500|Internal Server Error|The VM migration could not be sent.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Cancel an ongoing VM migration

> Code samples

```bash
curl http://localhost/api/v1/vm.cancel-migration \
  -X PUT
```

`PUT /vm.cancel-migration`

Requests the cancellation of an ongoing migration on a best effort basis. A successful response only indicates that the request was accepted, not that the migration was actually cancelled: The migration may have progressed too far to be stopped. The actual outcome must be observed externally via the event monitor.


<h3 id="cancel-an-ongoing-vm-migration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The cancellation request was successfully submitted.|None|
|500|Internal Server Error|The cancellation request could not be submitted because there is no ongoing migration.|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_VmmPingResponse">VmmPingResponse</h2>
<!-- backwards compatibility -->
<a id="schemavmmpingresponse"></a>
<a id="schema_VmmPingResponse"></a>
<a id="tocSvmmpingresponse"></a>
<a id="tocsvmmpingresponse"></a>

```json
{
  "build_version": "string",
  "version": "string",
  "pid": 0,
  "features": [
    "string"
  ]
}
```

Virtual Machine Monitor information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build_version|string|false|none|none|
|version|string|true|none|none|
|pid|integer(int64)|false|none|none|
|features|[string]|false|none|none|

<h2 id="tocS_VmState">VmState</h2>
<!-- backwards compatibility -->
<a id="schemavmstate"></a>
<a id="schema_VmState"></a>
<a id="tocSvmstate"></a>
<a id="tocsvmstate"></a>

```json
"Created"
```

<h2 id="tocS_VmInfo">VmInfo</h2>
<!-- backwards compatibility -->
<a id="schemavminfo"></a>
<a id="schema_VmInfo"></a>
<a id="tocSvminfo"></a>
<a id="tocsvminfo"></a>

```json
{
  "config": {
    "cpus": {
      "boot_vcpus": 1,
      "max_vcpus": 1,
      "topology": {
        "threads_per_core": 0,
        "cores_per_die": 0,
        "dies_per_package": 0,
        "packages": 0
      },
      "kvm_hyperv": false,
      "max_phys_bits": 0,
      "nested": false,
      "affinity": [
        {
          "vcpu": 0,
          "host_cpus": [
            0
          ]
        }
      ],
      "features": {
        "amx": true
      },
      "core_scheduling": "Vm",
      "profile": "Host",
      "x-cpuid-overrides": []
    },
    "memory": {
      "size": 0,
      "hotplug_size": 0,
      "hotplugged_size": 0,
      "mergeable": false,
      "hotplug_method": "Acpi",
      "shared": false,
      "hugepages": false,
      "hugepage_size": 0,
      "prefault": false,
      "reserve": false,
      "thp": true,
      "zones": [
        {
          "id": "string",
          "size": 0,
          "file": "string",
          "mergeable": false,
          "shared": false,
          "hugepages": false,
          "hugepage_size": 0,
          "host_numa_node": 0,
          "hotplug_size": 0,
          "hotplugged_size": 0,
          "prefault": false,
          "reserve": false
        }
      ]
    },
    "payload": {
      "firmware": "string",
      "kernel": "string",
      "cmdline": "string",
      "initramfs": "string",
      "igvm": "string",
      "host_data": "string"
    },
    "rate_limit_groups": [
      {
        "id": "string",
        "rate_limiter_config": {
          "bandwidth": {
            "size": 0,
            "one_time_burst": 0,
            "refill_time": 0
          },
          "ops": {
            "size": 0,
            "one_time_burst": 0,
            "refill_time": 0
          }
        }
      }
    ],
    "disks": [
      {
        "path": "string",
        "readonly": false,
        "direct": false,
        "iommu": "Off",
        "num_queues": 1,
        "queue_size": 128,
        "vhost_user": false,
        "vhost_socket": "string",
        "rate_limiter_config": {
          "bandwidth": {
            "size": 0,
            "one_time_burst": 0,
            "refill_time": 0
          },
          "ops": {
            "size": 0,
            "one_time_burst": 0,
            "refill_time": 0
          }
        },
        "pci_segment": 0,
        "pci_device_id": 0,
        "id": "string",
        "serial": "string",
        "rate_limit_group": "string",
        "queue_affinity": [
          {
            "queue_index": 0,
            "host_cpus": [
              0
            ]
          }
        ],
        "backing_files": false,
        "sparse": true,
        "image_type": "FlatVmdk",
        "lock_granularity": "ByteRange",
        "guest_block_size": 0
      }
    ],
    "net": [
      {
        "tap": "string",
        "ip": "192.168.249.1",
        "mask": "255.255.255.0",
        "mac": "string",
        "host_mac": "string",
        "mtu": 0,
        "iommu": "Off",
        "num_queues": 2,
        "queue_size": 256,
        "vhost_user": false,
        "vhost_socket": "string",
        "vhost_mode": "Client",
        "id": "string",
        "pci_segment": 0,
        "pci_device_id": 0,
        "rate_limiter_config": {
          "bandwidth": {
            "size": 0,
            "one_time_burst": 0,
            "refill_time": 0
          },
          "ops": {
            "size": 0,
            "one_time_burst": 0,
            "refill_time": 0
          }
        },
        "offload_tso": false,
        "offload_ufo": false,
        "offload_csum": false
      }
    ],
    "rng": {
      "id": "string",
      "pci_segment": 0,
      "pci_device_id": 0,
      "iommu": "Off",
      "src": "string"
    },
    "balloon": {
      "id": "string",
      "pci_segment": 0,
      "pci_device_id": 0,
      "iommu": "Off",
      "size": 0,
      "deflate_on_oom": false,
      "free_page_reporting": false
    },
    "fs": [
      {
        "tag": "string",
        "socket": "string",
        "num_queues": 1,
        "queue_size": 1024,
        "pci_segment": 0,
        "pci_device_id": 0,
        "id": "string"
      }
    ],
    "generic_vhost_user": [
      {
        "socket": "string",
        "queue_sizes": [
          0
        ],
        "pci_segment": 0,
        "pci_device_id": 0,
        "id": "string",
        "device_type": 0
      }
    ],
    "pmem": [
      {
        "file": "string",
        "size": 0,
        "iommu": "Off",
        "discard_writes": false,
        "pci_segment": 0,
        "pci_device_id": 0,
        "id": "string"
      }
    ],
    "serial": {
      "file": "string",
      "socket": "string",
      "tcp": {
        "address": "127.0.0.1:4444",
        "server": true
      },
      "mode": "Off"
    },
    "console": {
      "file": "string",
      "socket": "string",
      "tcp": {
        "address": "127.0.0.1:4444",
        "server": true
      },
      "mode": "Off",
      "iommu": "Off",
      "id": "string",
      "pci_segment": 0,
      "pci_device_id": 0
    },
    "debug_console": {
      "file": "string",
      "mode": "Off",
      "iobase": 0
    },
    "devices": [
      {
        "path": "string",
        "iommu": "Off",
        "pci_segment": 0,
        "pci_device_id": 0,
        "id": "string",
        "x_nv_gpudirect_clique": 0,
        "x_exclude_mmap_bars": [
          0
        ]
      }
    ],
    "user_devices": [
      {
        "socket": "string",
        "id": "string",
        "pci_segment": 0,
        "pci_device_id": 0
      }
    ],
    "vdpa": [
      {
        "path": "string",
        "num_queues": 1,
        "iommu": "Off",
        "pci_segment": 0,
        "pci_device_id": 0,
        "id": "string"
      }
    ],
    "vsock": {
      "cid": 3,
      "socket": "string",
      "iommu": "Off",
      "pci_segment": 0,
      "pci_device_id": 0,
      "id": "string"
    },
    "numa": [
      {
        "guest_numa_id": 0,
        "cpus": [
          0
        ],
        "distances": [
          {
            "destination": 0,
            "distance": 0
          }
        ],
        "memory_zones": [
          "string"
        ],
        "pci_segments": [
          0
        ],
        "device_id": "string"
      }
    ],
    "watchdog": false,
    "rtc": {
      "id": "string",
      "pci_segment": 0,
      "pci_device_id": 0,
      "iommu": "Off"
    },
    "pvpanic": false,
    "pci_segments": [
      {
        "pci_segment": 0,
        "mmio32_aperture_weight": 0,
        "mmio64_aperture_weight": 0
      }
    ],
    "platform": {
      "num_pci_segments": 0,
      "iommu_segments": [
        0
      ],
      "iommu_address_width_bits": 0,
      "system_serial_number": "string",
      "system_uuid": "string",
      "oem_strings": [
        "string"
      ],
      "system_manufacturer": "string",
      "system_product_name": "string",
      "system_version": "string",
      "system_family": "string",
      "system_sku_number": "string",
      "chassis_asset_tag": "string",
      "sev_snp": false,
      "iommufd": false,
      "vfio_p2p_dma": true
    },
    "tpm": {
      "socket": "string"
    },
    "landlock_enable": false,
    "landlock_rules": [
      {
        "path": "string",
        "access": "string"
      }
    ]
  },
  "state": "Created",
  "memory_actual_size": 0,
  "device_tree": {
    "property1": {
      "id": "string",
      "resources": [
        {}
      ],
      "children": [
        "string"
      ],
      "pci_bdf": "string"
    },
    "property2": {
      "id": "string",
      "resources": [
        {}
      ],
      "children": [
        "string"
      ],
      "pci_bdf": "string"
    }
  }
}
```

Virtual Machine information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[VmConfig](#schemavmconfig)|true|none|Virtual machine configuration|
|state|[VmState](#schemavmstate)|true|none|none|
|memory_actual_size|integer(int64)|false|none|none|
|device_tree|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|Created|
|state|Running|
|state|Shutdown|
|state|Paused|
|state|BreakPoint|

<h2 id="tocS_DeviceNode">DeviceNode</h2>
<!-- backwards compatibility -->
<a id="schemadevicenode"></a>
<a id="schema_DeviceNode"></a>
<a id="tocSdevicenode"></a>
<a id="tocsdevicenode"></a>

```json
{
  "id": "string",
  "resources": [
    {}
  ],
  "children": [
    "string"
  ],
  "pci_bdf": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|resources|[object]|false|none|none|
|children|[string]|false|none|none|
|pci_bdf|string|false|none|none|

<h2 id="tocS_VmCounters">VmCounters</h2>
<!-- backwards compatibility -->
<a id="schemavmcounters"></a>
<a id="schema_VmCounters"></a>
<a id="tocSvmcounters"></a>
<a id="tocsvmcounters"></a>

```json
{
  "property1": {
    "property1": 0,
    "property2": 0
  },
  "property2": {
    "property1": 0,
    "property2": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_BalloonStatsResponse">BalloonStatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaballoonstatsresponse"></a>
<a id="schema_BalloonStatsResponse"></a>
<a id="tocSballoonstatsresponse"></a>
<a id="tocsballoonstatsresponse"></a>

```json
{
  "balloon_actual": 0,
  "last_update": 0,
  "stats": {
    "swap_in": 0,
    "swap_out": 0,
    "major_faults": 0,
    "minor_faults": 0,
    "free_memory": 0,
    "total_memory": 0,
    "available_memory": 0,
    "disk_caches": 0,
    "hugetlb_allocations": 0,
    "hugetlb_failures": 0,
    "oom_kills": 0,
    "alloc_stalls": 0,
    "async_scans": 0,
    "direct_scans": 0,
    "async_reclaims": 0,
    "direct_reclaims": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balloon_actual|integer(int64)|true|none|Current balloon size in bytes|
|last_update|integer(int64)|true|none|Host UNIX timestamp in milliseconds when statistics were last updated, or zero before the first sample|
|stats|[BalloonStats](#schemaballoonstats)|true|none|none|

<h2 id="tocS_BalloonStats">BalloonStats</h2>
<!-- backwards compatibility -->
<a id="schemaballoonstats"></a>
<a id="schema_BalloonStats"></a>
<a id="tocSballoonstats"></a>
<a id="tocsballoonstats"></a>

```json
{
  "swap_in": 0,
  "swap_out": 0,
  "major_faults": 0,
  "minor_faults": 0,
  "free_memory": 0,
  "total_memory": 0,
  "available_memory": 0,
  "disk_caches": 0,
  "hugetlb_allocations": 0,
  "hugetlb_failures": 0,
  "oom_kills": 0,
  "alloc_stalls": 0,
  "async_scans": 0,
  "direct_scans": 0,
  "async_reclaims": 0,
  "direct_reclaims": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|swap_in|integer(int64)|false|none|Memory swapped into the guest in bytes|
|swap_out|integer(int64)|false|none|Memory swapped out by the guest in bytes|
|major_faults|integer(int64)|false|none|Number of major page faults|
|minor_faults|integer(int64)|false|none|Number of minor page faults|
|free_memory|integer(int64)|false|none|Unused guest memory in bytes|
|total_memory|integer(int64)|false|none|Total guest memory in bytes|
|available_memory|integer(int64)|false|none|Guest memory available without swapping in bytes|
|disk_caches|integer(int64)|false|none|Reclaimable guest disk caches in bytes|
|hugetlb_allocations|integer(int64)|false|none|Number of successful hugetlb allocations|
|hugetlb_failures|integer(int64)|false|none|Number of failed hugetlb allocations|
|oom_kills|integer(int64)|false|none|Number of guest OOM kills reported by Linux|
|alloc_stalls|integer(int64)|false|none|Number of guest memory allocation stalls reported by Linux|
|async_scans|integer(int64)|false|none|Memory scanned asynchronously by Linux in bytes|
|direct_scans|integer(int64)|false|none|Memory scanned directly by Linux in bytes|
|async_reclaims|integer(int64)|false|none|Memory reclaimed asynchronously by Linux in bytes|
|direct_reclaims|integer(int64)|false|none|Memory reclaimed directly by Linux in bytes|

<h2 id="tocS_PciDeviceInfo">PciDeviceInfo</h2>
<!-- backwards compatibility -->
<a id="schemapcideviceinfo"></a>
<a id="schema_PciDeviceInfo"></a>
<a id="tocSpcideviceinfo"></a>
<a id="tocspcideviceinfo"></a>

```json
{
  "id": "string",
  "bdf": "string"
}
```

Information about a PCI device

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|bdf|string|true|none|none|

<h2 id="tocS_PayloadConfig">PayloadConfig</h2>
<!-- backwards compatibility -->
<a id="schemapayloadconfig"></a>
<a id="schema_PayloadConfig"></a>
<a id="tocSpayloadconfig"></a>
<a id="tocspayloadconfig"></a>

```json
{
  "firmware": "string",
  "kernel": "string",
  "cmdline": "string",
  "initramfs": "string",
  "igvm": "string",
  "host_data": "string"
}
```

Payloads to boot in guest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firmware|string|false|none|none|
|kernel|string|false|none|none|
|cmdline|string|false|none|none|
|initramfs|string|false|none|none|
|igvm|string|false|none|none|
|host_data|string|false|none|none|

<h2 id="tocS_VmConfig">VmConfig</h2>
<!-- backwards compatibility -->
<a id="schemavmconfig"></a>
<a id="schema_VmConfig"></a>
<a id="tocSvmconfig"></a>
<a id="tocsvmconfig"></a>

```json
{
  "cpus": {
    "boot_vcpus": 1,
    "max_vcpus": 1,
    "topology": {
      "threads_per_core": 0,
      "cores_per_die": 0,
      "dies_per_package": 0,
      "packages": 0
    },
    "kvm_hyperv": false,
    "max_phys_bits": 0,
    "nested": false,
    "affinity": [
      {
        "vcpu": 0,
        "host_cpus": [
          0
        ]
      }
    ],
    "features": {
      "amx": true
    },
    "core_scheduling": "Vm",
    "profile": "Host",
    "x-cpuid-overrides": []
  },
  "memory": {
    "size": 0,
    "hotplug_size": 0,
    "hotplugged_size": 0,
    "mergeable": false,
    "hotplug_method": "Acpi",
    "shared": false,
    "hugepages": false,
    "hugepage_size": 0,
    "prefault": false,
    "reserve": false,
    "thp": true,
    "zones": [
      {
        "id": "string",
        "size": 0,
        "file": "string",
        "mergeable": false,
        "shared": false,
        "hugepages": false,
        "hugepage_size": 0,
        "host_numa_node": 0,
        "hotplug_size": 0,
        "hotplugged_size": 0,
        "prefault": false,
        "reserve": false
      }
    ]
  },
  "payload": {
    "firmware": "string",
    "kernel": "string",
    "cmdline": "string",
    "initramfs": "string",
    "igvm": "string",
    "host_data": "string"
  },
  "rate_limit_groups": [
    {
      "id": "string",
      "rate_limiter_config": {
        "bandwidth": {
          "size": 0,
          "one_time_burst": 0,
          "refill_time": 0
        },
        "ops": {
          "size": 0,
          "one_time_burst": 0,
          "refill_time": 0
        }
      }
    }
  ],
  "disks": [
    {
      "path": "string",
      "readonly": false,
      "direct": false,
      "iommu": "Off",
      "num_queues": 1,
      "queue_size": 128,
      "vhost_user": false,
      "vhost_socket": "string",
      "rate_limiter_config": {
        "bandwidth": {
          "size": 0,
          "one_time_burst": 0,
          "refill_time": 0
        },
        "ops": {
          "size": 0,
          "one_time_burst": 0,
          "refill_time": 0
        }
      },
      "pci_segment": 0,
      "pci_device_id": 0,
      "id": "string",
      "serial": "string",
      "rate_limit_group": "string",
      "queue_affinity": [
        {
          "queue_index": 0,
          "host_cpus": [
            0
          ]
        }
      ],
      "backing_files": false,
      "sparse": true,
      "image_type": "FlatVmdk",
      "lock_granularity": "ByteRange",
      "guest_block_size": 0
    }
  ],
  "net": [
    {
      "tap": "string",
      "ip": "192.168.249.1",
      "mask": "255.255.255.0",
      "mac": "string",
      "host_mac": "string",
      "mtu": 0,
      "iommu": "Off",
      "num_queues": 2,
      "queue_size": 256,
      "vhost_user": false,
      "vhost_socket": "string",
      "vhost_mode": "Client",
      "id": "string",
      "pci_segment": 0,
      "pci_device_id": 0,
      "rate_limiter_config": {
        "bandwidth": {
          "size": 0,
          "one_time_burst": 0,
          "refill_time": 0
        },
        "ops": {
          "size": 0,
          "one_time_burst": 0,
          "refill_time": 0
        }
      },
      "offload_tso": false,
      "offload_ufo": false,
      "offload_csum": false
    }
  ],
  "rng": {
    "id": "string",
    "pci_segment": 0,
    "pci_device_id": 0,
    "iommu": "Off",
    "src": "string"
  },
  "balloon": {
    "id": "string",
    "pci_segment": 0,
    "pci_device_id": 0,
    "iommu": "Off",
    "size": 0,
    "deflate_on_oom": false,
    "free_page_reporting": false
  },
  "fs": [
    {
      "tag": "string",
      "socket": "string",
      "num_queues": 1,
      "queue_size": 1024,
      "pci_segment": 0,
      "pci_device_id": 0,
      "id": "string"
    }
  ],
  "generic_vhost_user": [
    {
      "socket": "string",
      "queue_sizes": [
        0
      ],
      "pci_segment": 0,
      "pci_device_id": 0,
      "id": "string",
      "device_type": 0
    }
  ],
  "pmem": [
    {
      "file": "string",
      "size": 0,
      "iommu": "Off",
      "discard_writes": false,
      "pci_segment": 0,
      "pci_device_id": 0,
      "id": "string"
    }
  ],
  "serial": {
    "file": "string",
    "socket": "string",
    "tcp": {
      "address": "127.0.0.1:4444",
      "server": true
    },
    "mode": "Off"
  },
  "console": {
    "file": "string",
    "socket": "string",
    "tcp": {
      "address": "127.0.0.1:4444",
      "server": true
    },
    "mode": "Off",
    "iommu": "Off",
    "id": "string",
    "pci_segment": 0,
    "pci_device_id": 0
  },
  "debug_console": {
    "file": "string",
    "mode": "Off",
    "iobase": 0
  },
  "devices": [
    {
      "path": "string",
      "iommu": "Off",
      "pci_segment": 0,
      "pci_device_id": 0,
      "id": "string",
      "x_nv_gpudirect_clique": 0,
      "x_exclude_mmap_bars": [
        0
      ]
    }
  ],
  "user_devices": [
    {
      "socket": "string",
      "id": "string",
      "pci_segment": 0,
      "pci_device_id": 0
    }
  ],
  "vdpa": [
    {
      "path": "string",
      "num_queues": 1,
      "iommu": "Off",
      "pci_segment": 0,
      "pci_device_id": 0,
      "id": "string"
    }
  ],
  "vsock": {
    "cid": 3,
    "socket": "string",
    "iommu": "Off",
    "pci_segment": 0,
    "pci_device_id": 0,
    "id": "string"
  },
  "numa": [
    {
      "guest_numa_id": 0,
      "cpus": [
        0
      ],
      "distances": [
        {
          "destination": 0,
          "distance": 0
        }
      ],
      "memory_zones": [
        "string"
      ],
      "pci_segments": [
        0
      ],
      "device_id": "string"
    }
  ],
  "watchdog": false,
  "rtc": {
    "id": "string",
    "pci_segment": 0,
    "pci_device_id": 0,
    "iommu": "Off"
  },
  "pvpanic": false,
  "pci_segments": [
    {
      "pci_segment": 0,
      "mmio32_aperture_weight": 0,
      "mmio64_aperture_weight": 0
    }
  ],
  "platform": {
    "num_pci_segments": 0,
    "iommu_segments": [
      0
    ],
    "iommu_address_width_bits": 0,
    "system_serial_number": "string",
    "system_uuid": "string",
    "oem_strings": [
      "string"
    ],
    "system_manufacturer": "string",
    "system_product_name": "string",
    "system_version": "string",
    "system_family": "string",
    "system_sku_number": "string",
    "chassis_asset_tag": "string",
    "sev_snp": false,
    "iommufd": false,
    "vfio_p2p_dma": true
  },
  "tpm": {
    "socket": "string"
  },
  "landlock_enable": false,
  "landlock_rules": [
    {
      "path": "string",
      "access": "string"
    }
  ]
}
```

Virtual machine configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpus|[CpusConfig](#schemacpusconfig)|false|none|none|
|memory|[MemoryConfig](#schemamemoryconfig)|false|none|none|
|payload|[PayloadConfig](#schemapayloadconfig)|true|none|Payloads to boot in guest|
|rate_limit_groups|[[RateLimitGroupConfig](#schemaratelimitgroupconfig)]|false|none|none|
|disks|[[DiskConfig](#schemadiskconfig)]|false|none|none|
|net|[[NetConfig](#schemanetconfig)]|false|none|none|
|rng|[RngConfig](#schemarngconfig)|false|none|none|
|balloon|[BalloonConfig](#schemaballoonconfig)|false|none|none|
|fs|[[FsConfig](#schemafsconfig)]|false|none|none|
|generic_vhost_user|[[GenericVhostUserConfig](#schemagenericvhostuserconfig)]|false|none|none|
|pmem|[[PmemConfig](#schemapmemconfig)]|false|none|none|
|serial|[SerialConfig](#schemaserialconfig)|false|none|none|
|console|[ConsoleConfig](#schemaconsoleconfig)|false|none|none|
|debug_console|[DebugConsoleConfig](#schemadebugconsoleconfig)|false|none|none|
|devices|[[DeviceConfig](#schemadeviceconfig)]|false|none|none|
|user_devices|[[UserDeviceConfig](#schemauserdeviceconfig)]|false|none|none|
|vdpa|[[VdpaConfig](#schemavdpaconfig)]|false|none|none|
|vsock|[VsockConfig](#schemavsockconfig)|false|none|none|
|numa|[[NumaConfig](#schemanumaconfig)]|false|none|none|
|watchdog|boolean|false|none|none|
|rtc|[RtcConfig](#schemartcconfig)|false|none|none|
|pvpanic|boolean|false|none|none|
|pci_segments|[[PciSegmentConfig](#schemapcisegmentconfig)]|false|none|none|
|platform|[PlatformConfig](#schemaplatformconfig)|false|none|none|
|tpm|[TpmConfig](#schematpmconfig)|false|none|none|
|landlock_enable|boolean|false|none|none|
|landlock_rules|[[LandlockConfig](#schemalandlockconfig)]|false|none|none|

<h2 id="tocS_CpuAffinity">CpuAffinity</h2>
<!-- backwards compatibility -->
<a id="schemacpuaffinity"></a>
<a id="schema_CpuAffinity"></a>
<a id="tocScpuaffinity"></a>
<a id="tocscpuaffinity"></a>

```json
{
  "vcpu": 0,
  "host_cpus": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vcpu|integer|true|none|none|
|host_cpus|[integer]|true|none|none|

<h2 id="tocS_CpuFeatures">CpuFeatures</h2>
<!-- backwards compatibility -->
<a id="schemacpufeatures"></a>
<a id="schema_CpuFeatures"></a>
<a id="tocScpufeatures"></a>
<a id="tocscpufeatures"></a>

```json
{
  "amx": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amx|boolean|false|none|none|

<h2 id="tocS_CpuTopology">CpuTopology</h2>
<!-- backwards compatibility -->
<a id="schemacputopology"></a>
<a id="schema_CpuTopology"></a>
<a id="tocScputopology"></a>
<a id="tocscputopology"></a>

```json
{
  "threads_per_core": 0,
  "cores_per_die": 0,
  "dies_per_package": 0,
  "packages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|threads_per_core|integer|false|none|none|
|cores_per_die|integer|false|none|none|
|dies_per_package|integer|false|none|none|
|packages|integer|false|none|none|

<h2 id="tocS_CoreSchedulingMode">CoreSchedulingMode</h2>
<!-- backwards compatibility -->
<a id="schemacoreschedulingmode"></a>
<a id="schema_CoreSchedulingMode"></a>
<a id="tocScoreschedulingmode"></a>
<a id="tocscoreschedulingmode"></a>

```json
"Vm"
```

<h2 id="tocS_CpuProfileConfig">CpuProfileConfig</h2>
<!-- backwards compatibility -->
<a id="schemacpuprofileconfig"></a>
<a id="schema_CpuProfileConfig"></a>
<a id="tocScpuprofileconfig"></a>
<a id="tocscpuprofileconfig"></a>

```json
"Host"
```

CPU profile. File selects a JSON profile by path and is supported on x86-64 with KVM. Other platforms support Host only.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|object|false|none|none|
|File|string|true|none|Path to a JSON CPU profile on the VMM host. The file must remain available with unchanged contents for reboot and restore, including at a migration destination.|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|Host|

<h2 id="tocS_CpusConfig">CpusConfig</h2>
<!-- backwards compatibility -->
<a id="schemacpusconfig"></a>
<a id="schema_CpusConfig"></a>
<a id="tocScpusconfig"></a>
<a id="tocscpusconfig"></a>

```json
{
  "boot_vcpus": 1,
  "max_vcpus": 1,
  "topology": {
    "threads_per_core": 0,
    "cores_per_die": 0,
    "dies_per_package": 0,
    "packages": 0
  },
  "kvm_hyperv": false,
  "max_phys_bits": 0,
  "nested": false,
  "affinity": [
    {
      "vcpu": 0,
      "host_cpus": [
        0
      ]
    }
  ],
  "features": {
    "amx": true
  },
  "core_scheduling": "Vm",
  "profile": "Host",
  "x-cpuid-overrides": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boot_vcpus|integer|true|none|none|
|max_vcpus|integer|true|none|none|
|topology|[CpuTopology](#schemacputopology)|false|none|none|
|kvm_hyperv|boolean|false|none|none|
|max_phys_bits|integer|false|none|none|
|nested|boolean|false|none|none|
|affinity|[[CpuAffinity](#schemacpuaffinity)]|false|none|none|
|features|[CpuFeatures](#schemacpufeatures)|false|none|none|
|core_scheduling|[CoreSchedulingMode](#schemacoreschedulingmode)|false|none|none|
|profile|[CpuProfileConfig](#schemacpuprofileconfig)|false|none|CPU profile. File selects a JSON profile by path and is supported on x86-64 with KVM. Other platforms support Host only.|
|x-cpuid-overrides|[[CpuidOverride](#schemacpuidoverride)]|false|none|Experimental x86-64 common CPUID register overrides, applied in order after the selected CPU profile and before per-vCPU adjustments. The caller must ensure host compatibility.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|core_scheduling|Vm|
|core_scheduling|Vcpu|
|core_scheduling|Off|

<h2 id="tocS_CpuidValue">CpuidValue</h2>
<!-- backwards compatibility -->
<a id="schemacpuidvalue"></a>
<a id="schema_CpuidValue"></a>
<a id="tocScpuidvalue"></a>
<a id="tocscpuidvalue"></a>

```json
"string"
```

Unsigned 32-bit value encoded as a 0x-prefixed hex string.

<h2 id="tocS_CpuidOverride">CpuidOverride</h2>
<!-- backwards compatibility -->
<a id="schemacpuidoverride"></a>
<a id="schema_CpuidOverride"></a>
<a id="tocScpuidoverride"></a>
<a id="tocscpuidoverride"></a>

```json
{
  "leaf": "string",
  "subleaf": "string",
  "eax": "string",
  "ebx": "string",
  "ecx": "string",
  "edx": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leaf|[CpuidValue](#schemacpuidvalue)|true|none|Unsigned 32-bit value encoded as a 0x-prefixed hex string.|
|subleaf|[CpuidValue](#schemacpuidvalue)|true|none|Unsigned 32-bit value encoded as a 0x-prefixed hex string.|
|eax|[CpuidValue](#schemacpuidvalue)|true|none|Unsigned 32-bit value encoded as a 0x-prefixed hex string.|
|ebx|[CpuidValue](#schemacpuidvalue)|true|none|Unsigned 32-bit value encoded as a 0x-prefixed hex string.|
|ecx|[CpuidValue](#schemacpuidvalue)|true|none|Unsigned 32-bit value encoded as a 0x-prefixed hex string.|
|edx|[CpuidValue](#schemacpuidvalue)|true|none|Unsigned 32-bit value encoded as a 0x-prefixed hex string.|

<h2 id="tocS_PciSegmentConfig">PciSegmentConfig</h2>
<!-- backwards compatibility -->
<a id="schemapcisegmentconfig"></a>
<a id="schema_PciSegmentConfig"></a>
<a id="tocSpcisegmentconfig"></a>
<a id="tocspcisegmentconfig"></a>

```json
{
  "pci_segment": 0,
  "mmio32_aperture_weight": 0,
  "mmio64_aperture_weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pci_segment|integer(int16)|true|none|none|
|mmio32_aperture_weight|integer(int32)|false|none|none|
|mmio64_aperture_weight|integer(int32)|false|none|none|

<h2 id="tocS_IommuType">IommuType</h2>
<!-- backwards compatibility -->
<a id="schemaiommutype"></a>
<a id="schema_IommuType"></a>
<a id="tocSiommutype"></a>
<a id="tocsiommutype"></a>

```json
"Off"
```

Virtual IOMMU the device is attached to.

<h2 id="tocS_PlatformConfig">PlatformConfig</h2>
<!-- backwards compatibility -->
<a id="schemaplatformconfig"></a>
<a id="schema_PlatformConfig"></a>
<a id="tocSplatformconfig"></a>
<a id="tocsplatformconfig"></a>

```json
{
  "num_pci_segments": 0,
  "iommu_segments": [
    0
  ],
  "iommu_address_width_bits": 0,
  "system_serial_number": "string",
  "system_uuid": "string",
  "oem_strings": [
    "string"
  ],
  "system_manufacturer": "string",
  "system_product_name": "string",
  "system_version": "string",
  "system_family": "string",
  "system_sku_number": "string",
  "chassis_asset_tag": "string",
  "sev_snp": false,
  "iommufd": false,
  "vfio_p2p_dma": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|num_pci_segments|integer(int16)|false|none|none|
|iommu_segments|[integer(int16)]|false|none|none|
|iommu_address_width_bits|integer(uint8)|false|none|none|
|system_serial_number|string|false|none|none|
|system_uuid|string|false|none|none|
|oem_strings|[string]|false|none|none|
|system_manufacturer|string|false|none|none|
|system_product_name|string|false|none|none|
|system_version|string|false|none|none|
|system_family|string|false|none|none|
|system_sku_number|string|false|none|none|
|chassis_asset_tag|string|false|none|none|
|sev_snp|boolean|false|none|none|
|iommufd|boolean|false|none|none|
|vfio_p2p_dma|boolean|false|none|none|

<h2 id="tocS_MemoryZoneConfig">MemoryZoneConfig</h2>
<!-- backwards compatibility -->
<a id="schemamemoryzoneconfig"></a>
<a id="schema_MemoryZoneConfig"></a>
<a id="tocSmemoryzoneconfig"></a>
<a id="tocsmemoryzoneconfig"></a>

```json
{
  "id": "string",
  "size": 0,
  "file": "string",
  "mergeable": false,
  "shared": false,
  "hugepages": false,
  "hugepage_size": 0,
  "host_numa_node": 0,
  "hotplug_size": 0,
  "hotplugged_size": 0,
  "prefault": false,
  "reserve": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|size|integer(int64)|true|none|none|
|file|string|false|none|none|
|mergeable|boolean|false|none|none|
|shared|boolean|false|none|none|
|hugepages|boolean|false|none|none|
|hugepage_size|integer(int64)|false|none|none|
|host_numa_node|integer(int32)|false|none|none|
|hotplug_size|integer(int64)|false|none|none|
|hotplugged_size|integer(int64)|false|none|none|
|prefault|boolean|false|none|none|
|reserve|boolean|false|none|none|

<h2 id="tocS_MemoryConfig">MemoryConfig</h2>
<!-- backwards compatibility -->
<a id="schemamemoryconfig"></a>
<a id="schema_MemoryConfig"></a>
<a id="tocSmemoryconfig"></a>
<a id="tocsmemoryconfig"></a>

```json
{
  "size": 0,
  "hotplug_size": 0,
  "hotplugged_size": 0,
  "mergeable": false,
  "hotplug_method": "Acpi",
  "shared": false,
  "hugepages": false,
  "hugepage_size": 0,
  "prefault": false,
  "reserve": false,
  "thp": true,
  "zones": [
    {
      "id": "string",
      "size": 0,
      "file": "string",
      "mergeable": false,
      "shared": false,
      "hugepages": false,
      "hugepage_size": 0,
      "host_numa_node": 0,
      "hotplug_size": 0,
      "hotplugged_size": 0,
      "prefault": false,
      "reserve": false
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|integer(int64)|true|none|none|
|hotplug_size|integer(int64)|false|none|none|
|hotplugged_size|integer(int64)|false|none|none|
|mergeable|boolean|false|none|none|
|hotplug_method|string|false|none|none|
|shared|boolean|false|none|none|
|hugepages|boolean|false|none|none|
|hugepage_size|integer(int64)|false|none|none|
|prefault|boolean|false|none|none|
|reserve|boolean|false|none|none|
|thp|boolean|false|none|none|
|zones|[[MemoryZoneConfig](#schemamemoryzoneconfig)]|false|none|none|

<h2 id="tocS_TokenBucket">TokenBucket</h2>
<!-- backwards compatibility -->
<a id="schematokenbucket"></a>
<a id="schema_TokenBucket"></a>
<a id="tocStokenbucket"></a>
<a id="tocstokenbucket"></a>

```json
{
  "size": 0,
  "one_time_burst": 0,
  "refill_time": 0
}
```

Defines a token bucket with a maximum capacity (_size_), an initial burst size (_one_time_burst_) and an interval for refilling purposes (_refill_time_). The refill-rate is derived from _size_ and _refill_time_, and it is the constant rate at which the tokens replenish. The refill process only starts happening after the initial burst budget is consumed. Consumption from the token bucket is unbounded in speed which allows for bursts bound in size by the amount of tokens available. Once the token bucket is empty, consumption speed is bound by the refill-rate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|integer(int64)|true|none|The total number of tokens this bucket can hold.|
|one_time_burst|integer(int64)|false|none|The initial size of a token bucket.|
|refill_time|integer(int64)|true|none|The amount of milliseconds it takes for the bucket to refill.|

<h2 id="tocS_RateLimiterConfig">RateLimiterConfig</h2>
<!-- backwards compatibility -->
<a id="schemaratelimiterconfig"></a>
<a id="schema_RateLimiterConfig"></a>
<a id="tocSratelimiterconfig"></a>
<a id="tocsratelimiterconfig"></a>

```json
{
  "bandwidth": {
    "size": 0,
    "one_time_burst": 0,
    "refill_time": 0
  },
  "ops": {
    "size": 0,
    "one_time_burst": 0,
    "refill_time": 0
  }
}
```

Defines an IO rate limiter with independent bytes/s and ops/s limits. Limits are defined by configuring each of the _bandwidth_ and _ops_ token buckets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidth|[TokenBucket](#schematokenbucket)|false|none|Defines a token bucket with a maximum capacity (_size_), an initial burst size (_one_time_burst_) and an interval for refilling purposes (_refill_time_). The refill-rate is derived from _size_ and _refill_time_, and it is the constant rate at which the tokens replenish. The refill process only starts happening after the initial burst budget is consumed. Consumption from the token bucket is unbounded in speed which allows for bursts bound in size by the amount of tokens available. Once the token bucket is empty, consumption speed is bound by the refill-rate.|
|ops|[TokenBucket](#schematokenbucket)|false|none|Defines a token bucket with a maximum capacity (_size_), an initial burst size (_one_time_burst_) and an interval for refilling purposes (_refill_time_). The refill-rate is derived from _size_ and _refill_time_, and it is the constant rate at which the tokens replenish. The refill process only starts happening after the initial burst budget is consumed. Consumption from the token bucket is unbounded in speed which allows for bursts bound in size by the amount of tokens available. Once the token bucket is empty, consumption speed is bound by the refill-rate.|

<h2 id="tocS_RateLimitGroupConfig">RateLimitGroupConfig</h2>
<!-- backwards compatibility -->
<a id="schemaratelimitgroupconfig"></a>
<a id="schema_RateLimitGroupConfig"></a>
<a id="tocSratelimitgroupconfig"></a>
<a id="tocsratelimitgroupconfig"></a>

```json
{
  "id": "string",
  "rate_limiter_config": {
    "bandwidth": {
      "size": 0,
      "one_time_burst": 0,
      "refill_time": 0
    },
    "ops": {
      "size": 0,
      "one_time_burst": 0,
      "refill_time": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|rate_limiter_config|[RateLimiterConfig](#schemaratelimiterconfig)|true|none|Defines an IO rate limiter with independent bytes/s and ops/s limits. Limits are defined by configuring each of the _bandwidth_ and _ops_ token buckets.|

<h2 id="tocS_VirtQueueAffinity">VirtQueueAffinity</h2>
<!-- backwards compatibility -->
<a id="schemavirtqueueaffinity"></a>
<a id="schema_VirtQueueAffinity"></a>
<a id="tocSvirtqueueaffinity"></a>
<a id="tocsvirtqueueaffinity"></a>

```json
{
  "queue_index": 0,
  "host_cpus": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queue_index|integer|true|none|none|
|host_cpus|[integer]|true|none|none|

<h2 id="tocS_ImageType">ImageType</h2>
<!-- backwards compatibility -->
<a id="schemaimagetype"></a>
<a id="schema_ImageType"></a>
<a id="tocSimagetype"></a>
<a id="tocsimagetype"></a>

```json
"FlatVmdk"
```

Unknown is only valid for vhost-user disks.

<h2 id="tocS_LockGranularity">LockGranularity</h2>
<!-- backwards compatibility -->
<a id="schemalockgranularity"></a>
<a id="schema_LockGranularity"></a>
<a id="tocSlockgranularity"></a>
<a id="tocslockgranularity"></a>

```json
"ByteRange"
```

<h2 id="tocS_DiskConfig">DiskConfig</h2>
<!-- backwards compatibility -->
<a id="schemadiskconfig"></a>
<a id="schema_DiskConfig"></a>
<a id="tocSdiskconfig"></a>
<a id="tocsdiskconfig"></a>

```json
{
  "path": "string",
  "readonly": false,
  "direct": false,
  "iommu": "Off",
  "num_queues": 1,
  "queue_size": 128,
  "vhost_user": false,
  "vhost_socket": "string",
  "rate_limiter_config": {
    "bandwidth": {
      "size": 0,
      "one_time_burst": 0,
      "refill_time": 0
    },
    "ops": {
      "size": 0,
      "one_time_burst": 0,
      "refill_time": 0
    }
  },
  "pci_segment": 0,
  "pci_device_id": 0,
  "id": "string",
  "serial": "string",
  "rate_limit_group": "string",
  "queue_affinity": [
    {
      "queue_index": 0,
      "host_cpus": [
        0
      ]
    }
  ],
  "backing_files": false,
  "sparse": true,
  "image_type": "FlatVmdk",
  "lock_granularity": "ByteRange",
  "guest_block_size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|false|none|none|
|readonly|boolean|false|none|none|
|direct|boolean|false|none|none|
|iommu|[IommuType](#schemaiommutype)|false|none|Virtual IOMMU the device is attached to.|
|num_queues|integer(uint16)|false|none|none|
|queue_size|integer|false|none|none|
|vhost_user|boolean|false|none|none|
|vhost_socket|string|false|none|none|
|rate_limiter_config|[RateLimiterConfig](#schemaratelimiterconfig)|false|none|Defines an IO rate limiter with independent bytes/s and ops/s limits. Limits are defined by configuring each of the _bandwidth_ and _ops_ token buckets.|
|pci_segment|integer(int16)|false|none|none|
|pci_device_id|integer(uint8)|false|none|none|
|id|string|false|none|none|
|serial|string|false|none|none|
|rate_limit_group|string|false|none|none|
|queue_affinity|[[VirtQueueAffinity](#schemavirtqueueaffinity)]|false|none|none|
|backing_files|boolean|false|none|none|
|sparse|boolean|false|none|none|
|image_type|[ImageType](#schemaimagetype)|false|none|Unknown is only valid for vhost-user disks.|
|lock_granularity|[LockGranularity](#schemalockgranularity)|false|none|none|
|guest_block_size|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|iommu|Off|
|iommu|Virtio|
|iommu|Smmuv3|
|image_type|FlatVmdk|
|image_type|FixedVhd|
|image_type|Qcow2|
|image_type|Raw|
|image_type|Vhdx|
|image_type|Unknown|
|lock_granularity|ByteRange|
|lock_granularity|Full|

<h2 id="tocS_NetConfig">NetConfig</h2>
<!-- backwards compatibility -->
<a id="schemanetconfig"></a>
<a id="schema_NetConfig"></a>
<a id="tocSnetconfig"></a>
<a id="tocsnetconfig"></a>

```json
{
  "tap": "string",
  "ip": "192.168.249.1",
  "mask": "255.255.255.0",
  "mac": "string",
  "host_mac": "string",
  "mtu": 0,
  "iommu": "Off",
  "num_queues": 2,
  "queue_size": 256,
  "vhost_user": false,
  "vhost_socket": "string",
  "vhost_mode": "Client",
  "id": "string",
  "pci_segment": 0,
  "pci_device_id": 0,
  "rate_limiter_config": {
    "bandwidth": {
      "size": 0,
      "one_time_burst": 0,
      "refill_time": 0
    },
    "ops": {
      "size": 0,
      "one_time_burst": 0,
      "refill_time": 0
    }
  },
  "offload_tso": false,
  "offload_ufo": false,
  "offload_csum": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tap|string|false|none|none|
|ip|string|false|none|IPv4 or IPv6 address|
|mask|string|false|none|Must be a valid IPv4 netmask if ip is an IPv4 address or a valid IPv6 netmask if ip is an IPv6 address.|
|mac|string|false|none|none|
|host_mac|string|false|none|none|
|mtu|integer|false|none|none|
|iommu|[IommuType](#schemaiommutype)|false|none|Virtual IOMMU the device is attached to.|
|num_queues|integer(uint16)|false|none|none|
|queue_size|integer|false|none|none|
|vhost_user|boolean|false|none|none|
|vhost_socket|string|false|none|none|
|vhost_mode|string|false|none|none|
|id|string|false|none|none|
|pci_segment|integer(int16)|false|none|none|
|pci_device_id|integer(uint8)|false|none|none|
|rate_limiter_config|[RateLimiterConfig](#schemaratelimiterconfig)|false|none|Defines an IO rate limiter with independent bytes/s and ops/s limits. Limits are defined by configuring each of the _bandwidth_ and _ops_ token buckets.|
|offload_tso|boolean|false|none|none|
|offload_ufo|boolean|false|none|none|
|offload_csum|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|iommu|Off|
|iommu|Virtio|
|iommu|Smmuv3|

<h2 id="tocS_RngConfig">RngConfig</h2>
<!-- backwards compatibility -->
<a id="schemarngconfig"></a>
<a id="schema_RngConfig"></a>
<a id="tocSrngconfig"></a>
<a id="tocsrngconfig"></a>

```json
{
  "id": "string",
  "pci_segment": 0,
  "pci_device_id": 0,
  "iommu": "Off",
  "src": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|pci_segment|integer(int16)|false|none|none|
|pci_device_id|integer(uint8)|false|none|none|
|iommu|[IommuType](#schemaiommutype)|false|none|Virtual IOMMU the device is attached to.|
|src|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|iommu|Off|
|iommu|Virtio|
|iommu|Smmuv3|

<h2 id="tocS_RtcConfig">RtcConfig</h2>
<!-- backwards compatibility -->
<a id="schemartcconfig"></a>
<a id="schema_RtcConfig"></a>
<a id="tocSrtcconfig"></a>
<a id="tocsrtcconfig"></a>

```json
{
  "id": "string",
  "pci_segment": 0,
  "pci_device_id": 0,
  "iommu": "Off"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|pci_segment|integer(int16)|false|none|none|
|pci_device_id|integer(uint8)|false|none|none|
|iommu|[IommuType](#schemaiommutype)|false|none|Virtual IOMMU the device is attached to.|

#### Enumerated Values

|Property|Value|
|---|---|
|iommu|Off|
|iommu|Virtio|
|iommu|Smmuv3|

<h2 id="tocS_BalloonConfig">BalloonConfig</h2>
<!-- backwards compatibility -->
<a id="schemaballoonconfig"></a>
<a id="schema_BalloonConfig"></a>
<a id="tocSballoonconfig"></a>
<a id="tocsballoonconfig"></a>

```json
{
  "id": "string",
  "pci_segment": 0,
  "pci_device_id": 0,
  "iommu": "Off",
  "size": 0,
  "deflate_on_oom": false,
  "free_page_reporting": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|pci_segment|integer(int16)|false|none|none|
|pci_device_id|integer(uint8)|false|none|none|
|iommu|[IommuType](#schemaiommutype)|false|none|Virtual IOMMU the device is attached to.|
|size|integer(int64)|true|none|none|
|deflate_on_oom|boolean|false|none|Deflate balloon when the guest is under memory pressure.|
|free_page_reporting|boolean|false|none|Enable guest to report free pages.|

#### Enumerated Values

|Property|Value|
|---|---|
|iommu|Off|
|iommu|Virtio|
|iommu|Smmuv3|

<h2 id="tocS_FsConfig">FsConfig</h2>
<!-- backwards compatibility -->
<a id="schemafsconfig"></a>
<a id="schema_FsConfig"></a>
<a id="tocSfsconfig"></a>
<a id="tocsfsconfig"></a>

```json
{
  "tag": "string",
  "socket": "string",
  "num_queues": 1,
  "queue_size": 1024,
  "pci_segment": 0,
  "pci_device_id": 0,
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|string|true|none|none|
|socket|string|true|none|none|
|num_queues|integer(uint16)|true|none|none|
|queue_size|integer|true|none|none|
|pci_segment|integer(int16)|false|none|none|
|pci_device_id|integer(uint8)|false|none|none|
|id|string|false|none|none|

<h2 id="tocS_GenericVhostUserConfig">GenericVhostUserConfig</h2>
<!-- backwards compatibility -->
<a id="schemagenericvhostuserconfig"></a>
<a id="schema_GenericVhostUserConfig"></a>
<a id="tocSgenericvhostuserconfig"></a>
<a id="tocsgenericvhostuserconfig"></a>

```json
{
  "socket": "string",
  "queue_sizes": [
    0
  ],
  "pci_segment": 0,
  "pci_device_id": 0,
  "id": "string",
  "device_type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|socket|string|true|none|none|
|queue_sizes|[integer(uint16)]|true|none|none|
|pci_segment|integer(int16)|false|none|none|
|pci_device_id|integer(uint8)|false|none|none|
|id|string|false|none|none|
|device_type|integer(uint32)|true|none|none|

<h2 id="tocS_PmemConfig">PmemConfig</h2>
<!-- backwards compatibility -->
<a id="schemapmemconfig"></a>
<a id="schema_PmemConfig"></a>
<a id="tocSpmemconfig"></a>
<a id="tocspmemconfig"></a>

```json
{
  "file": "string",
  "size": 0,
  "iommu": "Off",
  "discard_writes": false,
  "pci_segment": 0,
  "pci_device_id": 0,
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|true|none|none|
|size|integer(int64)|false|none|none|
|iommu|[IommuType](#schemaiommutype)|false|none|Virtual IOMMU the device is attached to.|
|discard_writes|boolean|false|none|none|
|pci_segment|integer(int16)|false|none|none|
|pci_device_id|integer(uint8)|false|none|none|
|id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|iommu|Off|
|iommu|Virtio|
|iommu|Smmuv3|

<h2 id="tocS_ConsoleMode">ConsoleMode</h2>
<!-- backwards compatibility -->
<a id="schemaconsolemode"></a>
<a id="schema_ConsoleMode"></a>
<a id="tocSconsolemode"></a>
<a id="tocsconsolemode"></a>

```json
"Off"
```

<h2 id="tocS_TcpConsoleConfig">TcpConsoleConfig</h2>
<!-- backwards compatibility -->
<a id="schematcpconsoleconfig"></a>
<a id="schema_TcpConsoleConfig"></a>
<a id="tocStcpconsoleconfig"></a>
<a id="tocstcpconsoleconfig"></a>

```json
{
  "address": "127.0.0.1:4444",
  "server": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|Loopback IPv4 or IPv6 literal and a nonzero port.<br>IPv6 addresses must be enclosed in brackets.<br>Hostnames are not accepted.<br>|
|server|boolean|false|none|Only server mode is supported.|

#### Enumerated Values

|Property|Value|
|---|---|
|server|true|

<h2 id="tocS_ConsoleConfig">ConsoleConfig</h2>
<!-- backwards compatibility -->
<a id="schemaconsoleconfig"></a>
<a id="schema_ConsoleConfig"></a>
<a id="tocSconsoleconfig"></a>
<a id="tocsconsoleconfig"></a>

```json
{
  "file": "string",
  "socket": "string",
  "tcp": {
    "address": "127.0.0.1:4444",
    "server": true
  },
  "mode": "Off",
  "iommu": "Off",
  "id": "string",
  "pci_segment": 0,
  "pci_device_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|false|none|none|
|socket|string|false|none|none|
|tcp|[TcpConsoleConfig](#schematcpconsoleconfig)|false|none|none|
|mode|[ConsoleMode](#schemaconsolemode)|true|none|none|
|iommu|[IommuType](#schemaiommutype)|false|none|Virtual IOMMU the device is attached to.|
|id|string|false|none|none|
|pci_segment|integer(int16)|false|none|none|
|pci_device_id|integer(uint8)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|Off|
|mode|Pty|
|mode|Tty|
|mode|File|
|mode|Socket|
|mode|Tcp|
|mode|Null|
|iommu|Off|
|iommu|Virtio|
|iommu|Smmuv3|

<h2 id="tocS_SerialConfig">SerialConfig</h2>
<!-- backwards compatibility -->
<a id="schemaserialconfig"></a>
<a id="schema_SerialConfig"></a>
<a id="tocSserialconfig"></a>
<a id="tocsserialconfig"></a>

```json
{
  "file": "string",
  "socket": "string",
  "tcp": {
    "address": "127.0.0.1:4444",
    "server": true
  },
  "mode": "Off"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|false|none|none|
|socket|string|false|none|none|
|tcp|[TcpConsoleConfig](#schematcpconsoleconfig)|false|none|none|
|mode|[ConsoleMode](#schemaconsolemode)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|Off|
|mode|Pty|
|mode|Tty|
|mode|File|
|mode|Socket|
|mode|Tcp|
|mode|Null|

<h2 id="tocS_DebugConsoleConfig">DebugConsoleConfig</h2>
<!-- backwards compatibility -->
<a id="schemadebugconsoleconfig"></a>
<a id="schema_DebugConsoleConfig"></a>
<a id="tocSdebugconsoleconfig"></a>
<a id="tocsdebugconsoleconfig"></a>

```json
{
  "file": "string",
  "mode": "Off",
  "iobase": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|false|none|none|
|mode|[ConsoleMode](#schemaconsolemode)|true|none|none|
|iobase|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|Off|
|mode|Pty|
|mode|Tty|
|mode|File|
|mode|Socket|
|mode|Tcp|
|mode|Null|

<h2 id="tocS_DeviceConfig">DeviceConfig</h2>
<!-- backwards compatibility -->
<a id="schemadeviceconfig"></a>
<a id="schema_DeviceConfig"></a>
<a id="tocSdeviceconfig"></a>
<a id="tocsdeviceconfig"></a>

```json
{
  "path": "string",
  "iommu": "Off",
  "pci_segment": 0,
  "pci_device_id": 0,
  "id": "string",
  "x_nv_gpudirect_clique": 0,
  "x_exclude_mmap_bars": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|false|none|Sysfs path of the VFIO device. Exactly one of `path` or an<br>externally-opened cdev FD must be supplied; an FD is passed<br>out of band via SCM_RIGHTS on the UNIX domain socket, never<br>in this body.<br>|
|iommu|[IommuType](#schemaiommutype)|false|none|Virtual IOMMU the device is attached to.|
|pci_segment|integer(int16)|false|none|none|
|pci_device_id|integer(uint8)|false|none|none|
|id|string|false|none|none|
|x_nv_gpudirect_clique|integer(int8)|false|none|none|
|x_exclude_mmap_bars|[integer(int64)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|iommu|Off|
|iommu|Virtio|
|iommu|Smmuv3|

<h2 id="tocS_UserDeviceConfig">UserDeviceConfig</h2>
<!-- backwards compatibility -->
<a id="schemauserdeviceconfig"></a>
<a id="schema_UserDeviceConfig"></a>
<a id="tocSuserdeviceconfig"></a>
<a id="tocsuserdeviceconfig"></a>

```json
{
  "socket": "string",
  "id": "string",
  "pci_segment": 0,
  "pci_device_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|socket|string|true|none|none|
|id|string|false|none|none|
|pci_segment|integer(int16)|false|none|none|
|pci_device_id|integer(uint8)|false|none|none|

<h2 id="tocS_TpmConfig">TpmConfig</h2>
<!-- backwards compatibility -->
<a id="schematpmconfig"></a>
<a id="schema_TpmConfig"></a>
<a id="tocStpmconfig"></a>
<a id="tocstpmconfig"></a>

```json
{
  "socket": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|socket|string|true|none|none|

<h2 id="tocS_VdpaConfig">VdpaConfig</h2>
<!-- backwards compatibility -->
<a id="schemavdpaconfig"></a>
<a id="schema_VdpaConfig"></a>
<a id="tocSvdpaconfig"></a>
<a id="tocsvdpaconfig"></a>

```json
{
  "path": "string",
  "num_queues": 1,
  "iommu": "Off",
  "pci_segment": 0,
  "pci_device_id": 0,
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|none|
|num_queues|integer(uint16)|true|none|none|
|iommu|[IommuType](#schemaiommutype)|false|none|Virtual IOMMU the device is attached to.|
|pci_segment|integer(int16)|false|none|none|
|pci_device_id|integer(uint8)|false|none|none|
|id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|iommu|Off|
|iommu|Virtio|
|iommu|Smmuv3|

<h2 id="tocS_VsockConfig">VsockConfig</h2>
<!-- backwards compatibility -->
<a id="schemavsockconfig"></a>
<a id="schema_VsockConfig"></a>
<a id="tocSvsockconfig"></a>
<a id="tocsvsockconfig"></a>

```json
{
  "cid": 3,
  "socket": "string",
  "iommu": "Off",
  "pci_segment": 0,
  "pci_device_id": 0,
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cid|integer(int64)|true|none|Guest Vsock CID|
|socket|string|true|none|Path to UNIX domain socket, used to proxy vsock connections.|
|iommu|[IommuType](#schemaiommutype)|false|none|Virtual IOMMU the device is attached to.|
|pci_segment|integer(int16)|false|none|none|
|pci_device_id|integer(uint8)|false|none|none|
|id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|iommu|Off|
|iommu|Virtio|
|iommu|Smmuv3|

<h2 id="tocS_NumaDistance">NumaDistance</h2>
<!-- backwards compatibility -->
<a id="schemanumadistance"></a>
<a id="schema_NumaDistance"></a>
<a id="tocSnumadistance"></a>
<a id="tocsnumadistance"></a>

```json
{
  "destination": 0,
  "distance": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|integer(int32)|true|none|none|
|distance|integer(int32)|true|none|none|

<h2 id="tocS_NumaConfig">NumaConfig</h2>
<!-- backwards compatibility -->
<a id="schemanumaconfig"></a>
<a id="schema_NumaConfig"></a>
<a id="tocSnumaconfig"></a>
<a id="tocsnumaconfig"></a>

```json
{
  "guest_numa_id": 0,
  "cpus": [
    0
  ],
  "distances": [
    {
      "destination": 0,
      "distance": 0
    }
  ],
  "memory_zones": [
    "string"
  ],
  "pci_segments": [
    0
  ],
  "device_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guest_numa_id|integer(int32)|true|none|none|
|cpus|[integer(int32)]|false|none|none|
|distances|[[NumaDistance](#schemanumadistance)]|false|none|none|
|memory_zones|[string]|false|none|none|
|pci_segments|[integer(int32)]|false|none|none|
|device_id|string|false|none|none|

<h2 id="tocS_VmResize">VmResize</h2>
<!-- backwards compatibility -->
<a id="schemavmresize"></a>
<a id="schema_VmResize"></a>
<a id="tocSvmresize"></a>
<a id="tocsvmresize"></a>

```json
{
  "desired_vcpus": 1,
  "desired_ram": 0,
  "desired_balloon": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|desired_vcpus|integer|false|none|none|
|desired_ram|integer(int64)|false|none|desired memory ram in bytes|
|desired_balloon|integer(int64)|false|none|desired balloon size in bytes|

<h2 id="tocS_VmResizeDisk">VmResizeDisk</h2>
<!-- backwards compatibility -->
<a id="schemavmresizedisk"></a>
<a id="schema_VmResizeDisk"></a>
<a id="tocSvmresizedisk"></a>
<a id="tocsvmresizedisk"></a>

```json
{
  "id": "string",
  "desired_size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|disk identifier|
|desired_size|integer(int64)|false|none|desired disk size in bytes|

<h2 id="tocS_VmResizeZone">VmResizeZone</h2>
<!-- backwards compatibility -->
<a id="schemavmresizezone"></a>
<a id="schema_VmResizeZone"></a>
<a id="tocSvmresizezone"></a>
<a id="tocsvmresizezone"></a>

```json
{
  "id": "string",
  "desired_ram": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|desired_ram|integer(int64)|false|none|desired memory zone size in bytes|

<h2 id="tocS_VmRemoveDevice">VmRemoveDevice</h2>
<!-- backwards compatibility -->
<a id="schemavmremovedevice"></a>
<a id="schema_VmRemoveDevice"></a>
<a id="tocSvmremovedevice"></a>
<a id="tocsvmremovedevice"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|

<h2 id="tocS_VmSnapshotConfig">VmSnapshotConfig</h2>
<!-- backwards compatibility -->
<a id="schemavmsnapshotconfig"></a>
<a id="schema_VmSnapshotConfig"></a>
<a id="tocSvmsnapshotconfig"></a>
<a id="tocsvmsnapshotconfig"></a>

```json
{
  "destination_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination_url|string|false|none|none|

<h2 id="tocS_VmCoredumpData">VmCoredumpData</h2>
<!-- backwards compatibility -->
<a id="schemavmcoredumpdata"></a>
<a id="schema_VmCoredumpData"></a>
<a id="tocSvmcoredumpdata"></a>
<a id="tocsvmcoredumpdata"></a>

```json
{
  "destination_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination_url|string|false|none|none|

<h2 id="tocS_MemoryRestoreMode">MemoryRestoreMode</h2>
<!-- backwards compatibility -->
<a id="schemamemoryrestoremode"></a>
<a id="schema_MemoryRestoreMode"></a>
<a id="tocSmemoryrestoremode"></a>
<a id="tocsmemoryrestoremode"></a>

```json
"Copy"
```

<h2 id="tocS_RestoreConfig">RestoreConfig</h2>
<!-- backwards compatibility -->
<a id="schemarestoreconfig"></a>
<a id="schema_RestoreConfig"></a>
<a id="tocSrestoreconfig"></a>
<a id="tocsrestoreconfig"></a>

```json
{
  "source_url": "string",
  "prefault": true,
  "memory_restore_mode": "Copy",
  "resume": true,
  "zone_updates": [
    {
      "id": "string",
      "host_numa_node": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_url|string|true|none|none|
|prefault|boolean|false|none|none|
|memory_restore_mode|[MemoryRestoreMode](#schemamemoryrestoremode)|false|none|none|
|resume|boolean|false|none|none|
|zone_updates|[[VmMemoryZoneUpdateData](#schemavmmemoryzoneupdatedata)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|memory_restore_mode|Copy|
|memory_restore_mode|OnDemand|
|memory_restore_mode|CopyOnWrite|

<h2 id="tocS_ReceiveMigrationData">ReceiveMigrationData</h2>
<!-- backwards compatibility -->
<a id="schemareceivemigrationdata"></a>
<a id="schema_ReceiveMigrationData"></a>
<a id="tocSreceivemigrationdata"></a>
<a id="tocsreceivemigrationdata"></a>

```json
{
  "receiver_url": "string",
  "tls_dir": "string",
  "zone_updates": [
    {
      "id": "string",
      "host_numa_node": 0
    }
  ],
  "background_fetch_pages": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|receiver_url|string|true|none|none|
|tls_dir|string|false|none|Directory containing the TLS server certificate (server-cert.pem), the TLS server key (server-key.pem), and the client TLS root CA certificate (ca-cert.pem). TLS is only supported with tcp:<host>:<port> receiver URLs. Recommended for all TCP migrations. Omitting it is only intended for development and testing, as TCP migration is then unencrypted and unauthenticated.<br>|
|zone_updates|[[VmMemoryZoneUpdateData](#schemavmmemoryzoneupdatedata)]|false|none|none|
|background_fetch_pages|boolean|false|none|Enable the background thread for faulting all remaining pages.|

<h2 id="tocS_MigrationMode">MigrationMode</h2>
<!-- backwards compatibility -->
<a id="schemamigrationmode"></a>
<a id="schema_MigrationMode"></a>
<a id="tocSmigrationmode"></a>
<a id="tocsmigrationmode"></a>

```json
"Precopy"
```

Memory transfer mode. MemFDs passes the guest memory backing file descriptors to the destination over a UNIX socket. MemFDs requires every guest memory region to use shared memory or hugepage backing. Precopy transfers all guest memory before the destination resumes. Postcopy resumes the destination first and faults guest pages in on demand.

<h2 id="tocS_VmMemoryZoneUpdateData">VmMemoryZoneUpdateData</h2>
<!-- backwards compatibility -->
<a id="schemavmmemoryzoneupdatedata"></a>
<a id="schema_VmMemoryZoneUpdateData"></a>
<a id="tocSvmmemoryzoneupdatedata"></a>
<a id="tocsvmmemoryzoneupdatedata"></a>

```json
{
  "id": "string",
  "host_numa_node": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|host_numa_node|integer(uint32)|true|none|none|

<h2 id="tocS_TimeoutStrategy">TimeoutStrategy</h2>
<!-- backwards compatibility -->
<a id="schematimeoutstrategy"></a>
<a id="schema_TimeoutStrategy"></a>
<a id="tocStimeoutstrategy"></a>
<a id="tocstimeoutstrategy"></a>

```json
"Cancel"
```

The strategy to apply when the migration timeout is reached. Cancel will abort the migration and keep the VM running on the source. Ignore will proceed with the migration regardless of the downtime requirement.

<h2 id="tocS_SendMigrationData">SendMigrationData</h2>
<!-- backwards compatibility -->
<a id="schemasendmigrationdata"></a>
<a id="schema_SendMigrationData"></a>
<a id="tocSsendmigrationdata"></a>
<a id="tocssendmigrationdata"></a>

```json
{
  "destination_url": "string",
  "local": false,
  "preserve_source": false,
  "downtime_ms": 300,
  "timeout_s": 3600,
  "timeout_strategy": "Cancel",
  "connections": 1,
  "tls_dir": "string",
  "memory_mode": "Precopy"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination_url|string|true|none|none|
|local|boolean|false|none|**Deprecated.** Deprecated: set memory_mode to "MemFDs" instead. If true, the request is treated as if memory_mode were "MemFDs".<br>|
|preserve_source|boolean|false|none|Keep the source VM alive in a paused state after migration completes. This is only supported when memory_mode is "MemFDs" or the deprecated local property is true.<br>|
|downtime_ms|integer(int64)|false|none|The maximum downtime the migration aims for, in milliseconds. Defaults to 300ms.<br>|
|timeout_s|integer(int64)|false|none|The timeout for the migration (maximum total duration), in seconds. Defaults to 3600s (one hour).<br>|
|timeout_strategy|[TimeoutStrategy](#schematimeoutstrategy)|false|none|The strategy to apply when the migration timeout is reached. Cancel will abort the migration and keep the VM running on the source. Ignore will proceed with the migration regardless of the downtime requirement.<br>|
|connections|integer(int64)|false|none|The number of parallel TCP connections to use for migration. Must be between 1 and 128. Multiple connections are not supported with UNIX domain socket migration.<br>|
|tls_dir|string|false|none|Directory containing the TLS root CA certificate (ca-cert.pem), the TLS client certificate (client-cert.pem), and TLS client key (client-key.pem). TLS is only supported with tcp:<host>:<port> destination URLs. Recommended for all TCP migrations. Omitting it is only intended for development and testing, as TCP migration is then unencrypted and unauthenticated.<br>|
|memory_mode|[MigrationMode](#schemamigrationmode)|false|none|Memory transfer mode. MemFDs passes the guest memory backing file descriptors to the destination over a UNIX socket. MemFDs requires every guest memory region to use shared memory or hugepage backing. Precopy transfers all guest memory before the destination resumes. Postcopy resumes the destination first and faults guest pages in on demand.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|timeout_strategy|Cancel|
|timeout_strategy|Ignore|
|memory_mode|MemFDs|
|memory_mode|Precopy|
|memory_mode|Postcopy|

<h2 id="tocS_VmAddUserDevice">VmAddUserDevice</h2>
<!-- backwards compatibility -->
<a id="schemavmadduserdevice"></a>
<a id="schema_VmAddUserDevice"></a>
<a id="tocSvmadduserdevice"></a>
<a id="tocsvmadduserdevice"></a>

```json
{
  "socket": "string",
  "pci_segment": 0,
  "pci_device_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|socket|string|true|none|none|
|pci_segment|integer(int16)|false|none|none|
|pci_device_id|integer(uint8)|false|none|none|

<h2 id="tocS_LandlockConfig">LandlockConfig</h2>
<!-- backwards compatibility -->
<a id="schemalandlockconfig"></a>
<a id="schema_LandlockConfig"></a>
<a id="tocSlandlockconfig"></a>
<a id="tocslandlockconfig"></a>

```json
{
  "path": "string",
  "access": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|none|
|access|string|true|none|none|
