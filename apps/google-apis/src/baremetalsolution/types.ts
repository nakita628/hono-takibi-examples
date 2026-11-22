type DetachLunRequest = { lun?: string | undefined; skipReboot?: boolean | undefined }
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface = {
  name?: string | undefined
  required?: boolean | undefined
  type?: 'INTERFACE_TYPE_UNSPECIFIED' | 'BOND' | 'NIC' | undefined
}
type ServerNetworkTemplate = {
  applicableInstanceTypes?: string[] | undefined
  logicalInterfaces?:
    | GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface[]
    | undefined
  name?: string | undefined
}
type OSImage = {
  applicableInstanceTypes?: string[] | undefined
  code?: string | undefined
  description?: string | undefined
  name?: string | undefined
  supportedNetworkTemplates?: ServerNetworkTemplate[] | undefined
}
type FetchInstanceProvisioningSettingsResponse = { images?: OSImage[] | undefined }
type NetworkMountPoint = {
  defaultGateway?: boolean | undefined
  instance?: string | undefined
  ipAddress?: string | undefined
  logicalInterface?: string | undefined
}
type NetworkAddressReservation = {
  endAddress?: string | undefined
  note?: string | undefined
  startAddress?: string | undefined
}
type QosPolicy = { bandwidthGbps?: number | undefined }
type VlanAttachment = {
  id?: string | undefined
  pairingKey?: string | undefined
  peerIp?: string | undefined
  peerVlanId?: string | undefined
  qosPolicy?: QosPolicy | undefined
  routerIp?: string | undefined
}
type VRF = {
  name?: string | undefined
  qosPolicy?: QosPolicy | undefined
  state?: 'STATE_UNSPECIFIED' | 'PROVISIONING' | 'PROVISIONED' | undefined
  vlanAttachments?: VlanAttachment[] | undefined
}
type Network = {
  cidr?: string | undefined
  gatewayIp?: string | undefined
  id?: string | undefined
  ipAddress?: string | undefined
  jumboFramesEnabled?: boolean | undefined
  labels?: { [x: string]: string } | undefined
  macAddress?: string[] | undefined
  mountPoints?: NetworkMountPoint[] | undefined
  name?: string | undefined
  pod?: string | undefined
  reservations?: NetworkAddressReservation[] | undefined
  servicesCidr?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'PROVISIONING'
    | 'PROVISIONED'
    | 'DEPROVISIONING'
    | 'UPDATING'
    | undefined
  type?: 'TYPE_UNSPECIFIED' | 'CLIENT' | 'PRIVATE' | undefined
  vlanId?: string | undefined
  vrf?: VRF | undefined
}
type NetworkUsage = { network?: Network | undefined; usedIps?: string[] | undefined }
type ListNetworkUsageResponse = { networks?: NetworkUsage[] | undefined }
type Empty = { [x: string]: unknown }
type VolumeSnapshot = {
  createTime?: string | undefined
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  storageVolume?: string | undefined
  type?: 'SNAPSHOT_TYPE_UNSPECIFIED' | 'AD_HOC' | 'SCHEDULED' | undefined
}
type SnapshotReservationDetail = {
  reservedSpaceGib?: string | undefined
  reservedSpacePercent?: number | undefined
  reservedSpaceRemainingGib?: string | undefined
  reservedSpaceUsedPercent?: number | undefined
}
type Volume = {
  attached?: boolean | undefined
  autoGrownSizeGib?: string | undefined
  bootVolume?: boolean | undefined
  currentSizeGib?: string | undefined
  emergencySizeGib?: string | undefined
  expireTime?: string | undefined
  id?: string | undefined
  instances?: string[] | undefined
  labels?: { [x: string]: string } | undefined
  maxSizeGib?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  originallyRequestedSizeGib?: string | undefined
  performanceTier?:
    | 'VOLUME_PERFORMANCE_TIER_UNSPECIFIED'
    | 'VOLUME_PERFORMANCE_TIER_SHARED'
    | 'VOLUME_PERFORMANCE_TIER_ASSIGNED'
    | 'VOLUME_PERFORMANCE_TIER_HT'
    | undefined
  pod?: string | undefined
  protocol?: 'PROTOCOL_UNSPECIFIED' | 'FIBRE_CHANNEL' | 'NFS' | undefined
  remainingSpaceGib?: string | undefined
  requestedSizeGib?: string | undefined
  snapshotAutoDeleteBehavior?:
    | 'SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED'
    | 'DISABLED'
    | 'OLDEST_FIRST'
    | 'NEWEST_FIRST'
    | undefined
  snapshotEnabled?: boolean | undefined
  snapshotReservationDetail?: SnapshotReservationDetail | undefined
  snapshotSchedulePolicy?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'READY'
    | 'DELETING'
    | 'UPDATING'
    | 'COOL_OFF'
    | undefined
  storageAggregatePool?: string | undefined
  storageType?: 'STORAGE_TYPE_UNSPECIFIED' | 'SSD' | 'HDD' | undefined
  workloadProfile?: 'WORKLOAD_PROFILE_UNSPECIFIED' | 'GENERIC' | 'HANA' | undefined
}
type Location = {
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type ListLocationsResponse = {
  locations?: Location[] | undefined
  nextPageToken?: string | undefined
}
type DisableInteractiveSerialConsoleRequest = { [x: string]: unknown }
type EnableInteractiveSerialConsoleRequest = { [x: string]: unknown }
type EvictLunRequest = { [x: string]: unknown }
type RenameVolumeRequest = { newVolumeId?: string | undefined }
type ResetInstanceRequest = { [x: string]: unknown }
type StartInstanceRequest = { [x: string]: unknown }
type StopInstanceRequest = { [x: string]: unknown }
type LogicalNetworkInterface = {
  defaultGateway?: boolean | undefined
  id?: string | undefined
  ipAddress?: string | undefined
  network?: string | undefined
  networkType?: 'TYPE_UNSPECIFIED' | 'CLIENT' | 'PRIVATE' | undefined
}
type GoogleCloudBaremetalsolutionV2LogicalInterface = {
  interfaceIndex?: number | undefined
  logicalNetworkInterfaces?: LogicalNetworkInterface[] | undefined
  name?: string | undefined
}
type Lun = {
  bootLun?: boolean | undefined
  expireTime?: string | undefined
  id?: string | undefined
  instances?: string[] | undefined
  multiprotocolType?: 'MULTIPROTOCOL_TYPE_UNSPECIFIED' | 'LINUX' | undefined
  name?: string | undefined
  shareable?: boolean | undefined
  sizeGb?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'UPDATING'
    | 'READY'
    | 'DELETING'
    | 'COOL_OFF'
    | undefined
  storageType?: 'STORAGE_TYPE_UNSPECIFIED' | 'SSD' | 'HDD' | undefined
  storageVolume?: string | undefined
  wwid?: string | undefined
}
type Instance = {
  createTime?: string | undefined
  firmwareVersion?: string | undefined
  hyperthreadingEnabled?: boolean | undefined
  id?: string | undefined
  interactiveSerialConsoleEnabled?: boolean | undefined
  labels?: { [x: string]: string } | undefined
  logicalInterfaces?: GoogleCloudBaremetalsolutionV2LogicalInterface[] | undefined
  loginInfo?: string | undefined
  luns?: Lun[] | undefined
  machineType?: string | undefined
  name?: string | undefined
  networkTemplate?: string | undefined
  networks?: Network[] | undefined
  osImage?: string | undefined
  pod?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'PROVISIONING'
    | 'RUNNING'
    | 'DELETED'
    | 'UPDATING'
    | 'STARTING'
    | 'STOPPING'
    | 'SHUTDOWN'
    | undefined
  updateTime?: string | undefined
  volumes?: Volume[] | undefined
  workloadProfile?:
    | 'WORKLOAD_PROFILE_UNSPECIFIED'
    | 'WORKLOAD_PROFILE_GENERIC'
    | 'WORKLOAD_PROFILE_HANA'
    | undefined
}
type ListInstancesResponse = {
  instances?: Instance[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type ListLunsResponse = {
  luns?: Lun[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type ListNetworksResponse = {
  networks?: Network[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type AllowedClient = {
  allowDev?: boolean | undefined
  allowSuid?: boolean | undefined
  allowedClientsCidr?: string | undefined
  mountPermissions?: 'MOUNT_PERMISSIONS_UNSPECIFIED' | 'READ' | 'READ_WRITE' | undefined
  network?: string | undefined
  nfsPath?: string | undefined
  noRootSquash?: boolean | undefined
  shareIp?: string | undefined
}
type NfsShare = {
  allowedClients?: AllowedClient[] | undefined
  id?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  nfsShareId?: string | undefined
  requestedSizeGib?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'PROVISIONED' | 'CREATING' | 'UPDATING' | 'DELETING' | undefined
  storageType?: 'STORAGE_TYPE_UNSPECIFIED' | 'SSD' | 'HDD' | undefined
  volume?: string | undefined
}
type ListNfsSharesResponse = {
  nextPageToken?: string | undefined
  nfsShares?: NfsShare[] | undefined
  unreachable?: string[] | undefined
}
type NetworkAddress = {
  address?: string | undefined
  existingNetworkId?: string | undefined
  networkId?: string | undefined
}
type InstanceConfig = {
  accountNetworksEnabled?: boolean | undefined
  clientNetwork?: NetworkAddress | undefined
  hyperthreading?: boolean | undefined
  id?: string | undefined
  instanceType?: string | undefined
  logicalInterfaces?: GoogleCloudBaremetalsolutionV2LogicalInterface[] | undefined
  name?: string | undefined
  networkConfig?: 'NETWORKCONFIG_UNSPECIFIED' | 'SINGLE_VLAN' | 'MULTI_VLAN' | undefined
  networkTemplate?: string | undefined
  osImage?: string | undefined
  privateNetwork?: NetworkAddress | undefined
  userNote?: string | undefined
}
type IntakeVlanAttachment = { id?: string | undefined; pairingKey?: string | undefined }
type NetworkConfig = {
  bandwidth?:
    | 'BANDWIDTH_UNSPECIFIED'
    | 'BW_1_GBPS'
    | 'BW_2_GBPS'
    | 'BW_5_GBPS'
    | 'BW_10_GBPS'
    | undefined
  cidr?: string | undefined
  gcpService?: string | undefined
  id?: string | undefined
  jumboFramesEnabled?: boolean | undefined
  name?: string | undefined
  serviceCidr?:
    | 'SERVICE_CIDR_UNSPECIFIED'
    | 'DISABLED'
    | 'HIGH_26'
    | 'HIGH_27'
    | 'HIGH_28'
    | undefined
  type?: 'TYPE_UNSPECIFIED' | 'CLIENT' | 'PRIVATE' | undefined
  userNote?: string | undefined
  vlanAttachments?: IntakeVlanAttachment[] | undefined
  vlanSameProject?: boolean | undefined
}
type LunRange = { quantity?: number | undefined; sizeGb?: number | undefined }
type NfsExport = {
  allowDev?: boolean | undefined
  allowSuid?: boolean | undefined
  cidr?: string | undefined
  machineId?: string | undefined
  networkId?: string | undefined
  noRootSquash?: boolean | undefined
  permissions?: 'PERMISSIONS_UNSPECIFIED' | 'READ_ONLY' | 'READ_WRITE' | undefined
}
type VolumeConfig = {
  gcpService?: string | undefined
  id?: string | undefined
  lunRanges?: LunRange[] | undefined
  machineIds?: string[] | undefined
  name?: string | undefined
  nfsExports?: NfsExport[] | undefined
  performanceTier?:
    | 'VOLUME_PERFORMANCE_TIER_UNSPECIFIED'
    | 'VOLUME_PERFORMANCE_TIER_SHARED'
    | 'VOLUME_PERFORMANCE_TIER_ASSIGNED'
    | 'VOLUME_PERFORMANCE_TIER_HT'
    | undefined
  protocol?: 'PROTOCOL_UNSPECIFIED' | 'PROTOCOL_FC' | 'PROTOCOL_NFS' | undefined
  sizeGb?: number | undefined
  snapshotsEnabled?: boolean | undefined
  storageAggregatePool?: string | undefined
  type?: 'TYPE_UNSPECIFIED' | 'FLASH' | 'DISK' | undefined
  userNote?: string | undefined
}
type ProvisioningConfig = {
  cloudConsoleUri?: string | undefined
  customId?: string | undefined
  email?: string | undefined
  handoverServiceAccount?: string | undefined
  instances?: InstanceConfig[] | undefined
  location?: string | undefined
  name?: string | undefined
  networks?: NetworkConfig[] | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'DRAFT'
    | 'SUBMITTED'
    | 'PROVISIONING'
    | 'PROVISIONED'
    | 'VALIDATED'
    | 'CANCELLED'
    | 'FAILED'
    | undefined
  statusMessage?: string | undefined
  ticketId?: string | undefined
  updateTime?: string | undefined
  volumes?: VolumeConfig[] | undefined
  vpcScEnabled?: boolean | undefined
}
type SubmitProvisioningConfigRequest = {
  email?: string | undefined
  provisioningConfig?: ProvisioningConfig | undefined
}
type SubmitProvisioningConfigResponse = { provisioningConfig?: ProvisioningConfig | undefined }
type InstanceQuota = {
  availableMachineCount?: number | undefined
  gcpService?: string | undefined
  instanceType?: string | undefined
  location?: string | undefined
  name?: string | undefined
}
type ProvisioningQuota = {
  assetType?:
    | 'ASSET_TYPE_UNSPECIFIED'
    | 'ASSET_TYPE_SERVER'
    | 'ASSET_TYPE_STORAGE'
    | 'ASSET_TYPE_NETWORK'
    | undefined
  availableCount?: number | undefined
  gcpService?: string | undefined
  instanceQuota?: InstanceQuota | undefined
  location?: string | undefined
  name?: string | undefined
  networkBandwidth?: string | undefined
  serverCount?: string | undefined
  storageGib?: string | undefined
}
type ListProvisioningQuotasResponse = {
  nextPageToken?: string | undefined
  provisioningQuotas?: ProvisioningQuota[] | undefined
}
type ListVolumeSnapshotsResponse = {
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
  volumeSnapshots?: VolumeSnapshot[] | undefined
}
type SSHKey = { name?: string | undefined; publicKey?: string | undefined }
type ListSSHKeysResponse = { nextPageToken?: string | undefined; sshKeys?: SSHKey[] | undefined }
type ListVolumesResponse = {
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
  volumes?: Volume[] | undefined
}
type RestoreVolumeSnapshotRequest = { [x: string]: unknown }
type ResizeVolumeRequest = { sizeGib?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/:instance:detachLun': {
      $post: {
        input: { param: { instance: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: DetachLunRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:location/instanceProvisioningSettings:fetch': {
      $get: {
        input: { param: { location: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: FetchInstanceProvisioningSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:location/networks:listNetworkUsage': {
      $get: {
        input: { param: { location: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListNetworkUsageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: VolumeSnapshot
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Volume }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name/locations': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:disableInteractiveSerialConsole': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: DisableInteractiveSerialConsoleRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:enableInteractiveSerialConsole': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: EnableInteractiveSerialConsoleRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:evict': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: EvictLunRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:rename': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: RenameVolumeRequest }
        output: Volume
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:reset': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ResetInstanceRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:start': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: StartInstanceRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:stop': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: StopInstanceRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/instances': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListInstancesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Instance }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/luns': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListLunsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/networks': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListNetworksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/nfsShares': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListNfsSharesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: NfsShare }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/provisioningConfigs': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            email?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ProvisioningConfig }
        output: ProvisioningConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/provisioningConfigs:submit': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SubmitProvisioningConfigRequest }
        output: SubmitProvisioningConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/provisioningQuotas': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListProvisioningQuotasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/snapshots': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListVolumeSnapshotsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: VolumeSnapshot }
        output: VolumeSnapshot
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/sshKeys': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListSSHKeysResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            sshKeyId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SSHKey }
        output: SSHKey
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/volumes': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListVolumesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:volumeSnapshot:restoreVolumeSnapshot': {
      $post: {
        input: { param: { volumeSnapshot: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: RestoreVolumeSnapshotRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:volume:resize': {
      $post: {
        input: { param: { volume: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ResizeVolumeRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
