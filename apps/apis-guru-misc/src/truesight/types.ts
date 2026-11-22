type ActionResponse = { pslOutput?: string | undefined }
type ErrorResponse = {
  code?: string | undefined
  date?: string | undefined
  message?: string | undefined
}
type ReinitializeActionConfiguration = {
  resetAlertActions?: 0 | 1 | undefined
  resetAlertAfterNTimes?: 0 | 1 | undefined
  resetDebugMode?: 0 | 1 | undefined
  resetDiscoveryAndPollingIntervals?: 0 | 1 | undefined
  resetJavaSettings?: 0 | 1 | undefined
  resetOtherAlertSettings?: 0 | 1 | undefined
  resetRemovedPausedObjectList?: 0 | 1 | undefined
  resetReportSettings?: 0 | 1 | undefined
  resetThresholds?: 0 | 1 | undefined
}
type ResultPage = {
  items?: { [x: string]: unknown }[] | undefined
  restrictedRights?: boolean | undefined
  total?: bigint | undefined
}
type DeviceSummary = {
  agentId?: number | undefined
  agentName?: string | undefined
  ambientTemperature?: number | undefined
  collectTime?: string | undefined
  deviceTSMOKey?: string | undefined
  deviceUrl?: string | undefined
  heatingMargin?: number | undefined
  heatingMarginUnit?: string | undefined
  id?: number | undefined
  name?: string | undefined
  powerConsumption?: number | undefined
  powerConsumptionUnit?: string | undefined
  productVersion?: string | undefined
  serverId?: number | undefined
  serverName?: string | undefined
  sid?: string | undefined
  type?:
    | 'DEFAULT'
    | 'ESX_HOST'
    | 'VIRTUAL_MACHINE'
    | 'VIRTUAL_CENTER'
    | 'XEN_HOST'
    | 'XEN_MASTER_SERVER'
    | 'XEN_VIRTUAL_MACHINE'
    | 'XENAPP_CONTROLLER'
    | 'XENAPP_MACHINE'
    | 'VBLOCK_ESX'
    | 'VBLOCK_VIRTUAL_MACHINE'
    | 'VBLOCK_SWITCH'
    | 'VBLOCK_STORAGE'
    | 'VBLOCK_CHASSIS'
    | 'VBLOCK_BLADE'
    | 'VBLOCK_ENV'
    | 'AIX_BOX'
    | 'AIX_HARD_PARTITION'
    | 'AIX_POOL'
    | 'AIX_LPAR'
    | 'AIX_WPAR'
    | 'SOL_SYSTEM'
    | 'SOL_FRAME'
    | 'SOL_ZONE'
    | 'SOL_LDOM'
    | 'REDHAT_KVM_HOST'
    | 'REDHAT_KVM_GUEST_INSTANCE'
    | 'REDHAT_XEN_HOST'
    | 'REDHAT_VM'
    | 'HP_SYSTEM'
    | 'HP_NPAR'
    | 'HP_VPAR'
    | 'HP_INT_VM'
    | 'HP_INT_HOST'
    | 'MS_HOST'
    | 'MS_VM'
    | 'AZURE_VIRTUALMACHINE'
    | 'AMAZON_EC2'
    | 'OS400_HOST'
    | 'DOCKER_HOST'
    | 'DOCKER_NODE'
    | 'DOCKER_CONTAINER'
    | 'ROUTER'
    | 'HUB'
    | 'PRINTER'
    | 'REPEATER'
    | 'WORKSTATION'
    | 'NTSERVER'
    | 'PRINETSERVER'
    | 'RMONPROBE'
    | 'WEBSERVER'
    | 'DBSERVER'
    | 'MAILSERVER'
    | 'FIREWALL'
    | 'OTHERS'
    | 'APPSERVER'
    | 'DEDICATEDAGENT'
    | 'REMOTEAGENT'
    | 'LAYER_3_SWITCH'
    | 'CENTRAL_OFFICE_SWITCH'
    | 'ACCESS_SERVER'
    | 'I_O'
    | 'WEB_CACHING'
    | 'MANAGEMENT'
    | 'BLOCK_SERVER'
    | 'FILE_SERVER'
    | 'MOBILE_USER_DEVICE'
    | 'BRIDGE_OR_EXTENDER'
    | 'GATEWAY'
    | 'LOADBALANCER'
    | 'MAINFRAME'
    | 'SANSWITCH'
    | 'SANHUB'
    | 'SANBRIDGE'
    | 'SANROUTER'
    | 'SANDIRECTOR'
    | 'RAIDSTORAGEDEVICE'
    | 'VIRTUAL_TAPE_LIBRARY'
    | 'JBOD'
    | 'STORAGESUBSYSTEM'
    | 'STORAGE_VIRTUALIZER'
    | 'MEDIA_LIBRARY'
    | 'EXTENDERNODE'
    | 'NAS_HEAD'
    | 'SELFCONTAINED_NAS'
    | 'UPS'
    | 'IP_PHONE'
    | 'MANAGEMENT_CONTROLLER'
    | 'CHASSIS_MANAGER'
    | 'HOSTBASED_RAID_CONTROLLER'
    | 'STORAGE_DEVICE_ENCLOSURE'
    | 'DESKTOP'
    | 'LAPTOP'
    | 'VIRTUAL_LIBRARY_SYSTEM'
    | 'BLADE_SYSTEM'
    | 'BLADE_SERVER'
    | 'VPN_CONCENTRATOR'
    | 'PROXY_SERVER'
    | 'LAYER_3_PROXY_SERVER'
    | 'WAN_ACCELERATOR'
    | 'SAN_PROCESSOR'
    | 'VIRTUAL_SERVER_RHL'
    | 'VIRTUAL_SERVER_WINDOWS'
    | 'ESXi'
    | 'VIRTUAL_SERVER'
    | 'HYPERVISOR'
    | 'AWS_AMI'
    | 'MS_AZURE'
    | 'UNKNOWN'
    | undefined
  updateTimestamp?: bigint | undefined
}
type ApplicationSummary = {
  costUnit?: string | undefined
  deviceSummaries?: DeviceSummary[] | undefined
  emittedCo2Unit?: string | undefined
  energyConsumptionUnit?: string | undefined
  heatingMargin?: number | undefined
  heatingMarginCoverage?: number | undefined
  heatingMarginDeviceName?: string | undefined
  heatingMarginDeviceUrl?: string | undefined
  heatingMarginUnit?: string | undefined
  historyParentIdKey?: string | undefined
  id?: string | undefined
  name?: string | undefined
  numberOfDevices?: number | undefined
  oneDayConfidence?: number | undefined
  oneDayCost?: number | undefined
  oneDayEmittedCo2?: number | undefined
  oneDayEnergyConsumption?: number | undefined
  oneMonthConfidence?: number | undefined
  oneMonthCost?: number | undefined
  oneMonthEmittedCo2?: number | undefined
  oneMonthEnergyConsumption?: number | undefined
  oneYearConfidence?: number | undefined
  oneYearCost?: number | undefined
  oneYearEmittedCo2?: number | undefined
  oneYearEnergyConsumption?: number | undefined
  totalPowerConsumption?: number | undefined
  totalPowerConsumptionUnit?: string | undefined
  updateTimestamp?: bigint | undefined
  url?: string | undefined
}
type GlobalSummary = {
  co2Emission?: number | undefined
  co2EmissionUnit?: string | undefined
  editable?: boolean | undefined
  energyCost?: number | undefined
  energyCostUnit?: string | undefined
  groupNameFilter?: string | undefined
  heatingMargin?: number | undefined
  heatingMarginCoverage?: number | undefined
  heatingMarginDeviceName?: string | undefined
  heatingMarginDeviceUrl?: string | undefined
  heatingMarginUnit?: string | undefined
  id?: string | undefined
  totalPowerConsumption?: number | undefined
  totalPowerConsumptionUnit?: string | undefined
  updateTimestamp?: bigint | undefined
}
type DeviceAgent = {
  connectionStatus?: string | undefined
  id?: string | undefined
  name?: string | undefined
  os?: string | undefined
  port?: string | undefined
  url?: string | undefined
  version?: string | undefined
}
type GroupSummary = {
  ambientTemperature?: number | undefined
  ambientTemperatureUnit?: string | undefined
  co2Emission?: number | undefined
  co2EmissionUnit?: string | undefined
  costUnit?: string | undefined
  deviceSummaries?: DeviceSummary[] | undefined
  editable?: boolean | undefined
  emittedCo2Unit?: string | undefined
  energyConsumptionUnit?: string | undefined
  energyCost?: number | undefined
  energyCostUnit?: string | undefined
  heatingMargin?: number | undefined
  heatingMarginCoverage?: number | undefined
  heatingMarginDeviceName?: string | undefined
  heatingMarginDeviceUrl?: string | undefined
  heatingMarginUnit?: string | undefined
  historyParentIdKey?: string | undefined
  id?: string | undefined
  name?: string | undefined
  numberOfDevices?: number | undefined
  oneDayConfidence?: number | undefined
  oneDayCost?: number | undefined
  oneDayEmittedCo2?: number | undefined
  oneDayEnergyConsumption?: number | undefined
  oneMonthConfidence?: number | undefined
  oneMonthCost?: number | undefined
  oneMonthEmittedCo2?: number | undefined
  oneMonthEnergyConsumption?: number | undefined
  oneYearConfidence?: number | undefined
  oneYearCost?: number | undefined
  oneYearEmittedCo2?: number | undefined
  oneYearEnergyConsumption?: number | undefined
  serverId?: number | undefined
  totalPowerConsumption?: number | undefined
  totalPowerConsumptionUnit?: string | undefined
  updateTimestamp?: bigint | undefined
  url?: string | undefined
}
type GroupConfiguration = {
  co2Emission?: number | undefined
  energyCost?: number | undefined
  groupNameFilter?: string | undefined
}
type ServiceSummary = {
  costUnit?: string | undefined
  deviceSummaries?: DeviceSummary[] | undefined
  emittedCo2Unit?: string | undefined
  energyConsumptionUnit?: string | undefined
  heatingMargin?: number | undefined
  heatingMarginCoverage?: number | undefined
  heatingMarginDeviceName?: string | undefined
  heatingMarginDeviceUrl?: string | undefined
  heatingMarginUnit?: string | undefined
  historyParentIdKey?: string | undefined
  id?: string | undefined
  name?: string | undefined
  numberOfDevices?: number | undefined
  oneDayConfidence?: number | undefined
  oneDayCost?: number | undefined
  oneDayEmittedCo2?: number | undefined
  oneDayEnergyConsumption?: number | undefined
  oneMonthConfidence?: number | undefined
  oneMonthCost?: number | undefined
  oneMonthEmittedCo2?: number | undefined
  oneMonthEnergyConsumption?: number | undefined
  oneYearConfidence?: number | undefined
  oneYearCost?: number | undefined
  oneYearEmittedCo2?: number | undefined
  oneYearEnergyConsumption?: number | undefined
  providerId?: string | undefined
  totalPowerConsumption?: number | undefined
  totalPowerConsumptionUnit?: string | undefined
  updateTimestamp?: bigint | undefined
  url?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/hardware/actions/:deviceId/collect-now': {
      $post:
        | {
            input: { param: { deviceId: number } } & { query: { monitorClass: string } }
            output: ActionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { deviceId: number } } & { query: { monitorClass: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { deviceId: number } } & { query: { monitorClass: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/hardware/actions/:deviceId/rediscover': {
      $post:
        | {
            input: { param: { deviceId: number } }
            output: ActionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { deviceId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { deviceId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/hardware/actions/:deviceId/reinitialize': {
      $post:
        | {
            input: { param: { deviceId: number } } & { json: ReinitializeActionConfiguration }
            output: ActionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { deviceId: number } } & { json: ReinitializeActionConfiguration }
            output: ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { deviceId: number } } & { json: ReinitializeActionConfiguration }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/hardware/actions/:deviceId/remove': {
      $post:
        | {
            input: { param: { deviceId: number } } & {
              query: { monitorClass: string; monitorSid: string }
            }
            output: ActionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { deviceId: number } } & {
              query: { monitorClass: string; monitorSid: string }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { deviceId: number } } & {
              query: { monitorClass: string; monitorSid: string }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/hardware/actions/:deviceId/reset-error-count': {
      $post:
        | {
            input: { param: { deviceId: number } } & {
              query: { monitorClass: string; monitorSid: string }
            }
            output: ActionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { deviceId: number } } & {
              query: { monitorClass: string; monitorSid: string }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { deviceId: number } } & {
              query: { monitorClass: string; monitorSid: string }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/hardware/applications': {
      $get:
        | {
            input: {
              query: {
                page?: string | undefined
                limit?: number | undefined
                direction?: 'asc' | 'desc' | undefined
                sort?: string | undefined
              }
            }
            output: ResultPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: string | undefined
                limit?: number | undefined
                direction?: 'asc' | 'desc' | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                page?: string | undefined
                limit?: number | undefined
                direction?: 'asc' | 'desc' | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/hardware/applications/:applicationId': {
      $get:
        | {
            input: { param: { applicationId: string } }
            output: ApplicationSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { applicationId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { applicationId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/hardware/device-monitors/:deviceId': {
      $get: {
        input: { param: { deviceId: number } }
        output: ErrorResponse
        outputFormat: 'text'
        status: 500
      }
    }
  } & {
    '/hardware/devices': {
      $get:
        | {
            input: {
              query: {
                page?: string | undefined
                limit?: number | undefined
                direction?: 'asc' | 'desc' | undefined
                sort?: string | undefined
                groupId?: string | undefined
                applicationId?: string | undefined
                serviceId?: string | undefined
              }
            }
            output: ResultPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: string | undefined
                limit?: number | undefined
                direction?: 'asc' | 'desc' | undefined
                sort?: string | undefined
                groupId?: string | undefined
                applicationId?: string | undefined
                serviceId?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                page?: string | undefined
                limit?: number | undefined
                direction?: 'asc' | 'desc' | undefined
                sort?: string | undefined
                groupId?: string | undefined
                applicationId?: string | undefined
                serviceId?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/hardware/devices-summary': {
      $get:
        | { input: {}; output: GlobalSummary; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/hardware/devices/:deviceId': {
      $get:
        | {
            input: { param: { deviceId: number } }
            output: DeviceSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { deviceId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { deviceId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/hardware/devices/:deviceId/agent': {
      $get:
        | {
            input: { param: { deviceId: number } }
            output: DeviceAgent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { deviceId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/hardware/devices/:deviceId/agent-devices': {
      $get:
        | {
            input: { param: { deviceId: number } }
            output: ResultPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { deviceId: number } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/hardware/devices/:deviceId/parameter-history': {
      $get:
        | {
            input: { param: { deviceId: number } } & {
              query: {
                parameterName: string
                monitorType: string
                from?: bigint | undefined
                to?: bigint | undefined
                monitorSid?: string | undefined
              }
            }
            output: ResultPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { deviceId: number } } & {
              query: {
                parameterName: string
                monitorType: string
                from?: bigint | undefined
                to?: bigint | undefined
                monitorSid?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/hardware/energy-usage/:deviceId': {
      $get:
        | {
            input: { param: { deviceId: number } } & {
              query: {
                rollPeriod?:
                  | 'ONE_DAY'
                  | 'ONE_WEEK'
                  | 'ONE_MONTH'
                  | 'SIX_MONTHS'
                  | 'ONE_YEAR'
                  | undefined
                basis?: 'MONTHLY' | 'DAILY' | 'HOURLY' | undefined
              }
            }
            output: ResultPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { deviceId: number } } & {
              query: {
                rollPeriod?:
                  | 'ONE_DAY'
                  | 'ONE_WEEK'
                  | 'ONE_MONTH'
                  | 'SIX_MONTHS'
                  | 'ONE_YEAR'
                  | undefined
                basis?: 'MONTHLY' | 'DAILY' | 'HOURLY' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/hardware/groups': {
      $get:
        | {
            input: {
              query: {
                page?: string | undefined
                limit?: number | undefined
                direction?: 'asc' | 'desc' | undefined
                sort?: string | undefined
              }
            }
            output: ResultPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: string | undefined
                limit?: number | undefined
                direction?: 'asc' | 'desc' | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                page?: string | undefined
                limit?: number | undefined
                direction?: 'asc' | 'desc' | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/hardware/groups/:groupId': {
      $get:
        | {
            input: { param: { groupId: string } }
            output: GroupSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { groupId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { groupId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { groupId: string } } & { json: GroupConfiguration }
            output: GlobalSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { groupId: string } } & { json: GroupConfiguration }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { groupId: string } } & { json: GroupConfiguration }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/hardware/heating-margin-devices': {
      $get:
        | {
            input: {
              query: {
                covered?: boolean | undefined
                page?: string | undefined
                limit?: number | undefined
                direction?: 'asc' | 'desc' | undefined
                sort?: string | undefined
                groupId?: string | undefined
                applicationId?: string | undefined
                serviceId?: string | undefined
              }
            }
            output: ResultPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                covered?: boolean | undefined
                page?: string | undefined
                limit?: number | undefined
                direction?: 'asc' | 'desc' | undefined
                sort?: string | undefined
                groupId?: string | undefined
                applicationId?: string | undefined
                serviceId?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                covered?: boolean | undefined
                page?: string | undefined
                limit?: number | undefined
                direction?: 'asc' | 'desc' | undefined
                sort?: string | undefined
                groupId?: string | undefined
                applicationId?: string | undefined
                serviceId?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/hardware/history': {
      $get:
        | {
            input: {
              query: {
                groupId?: string | undefined
                applicationId?: string | undefined
                serviceId?: string | undefined
                from?: bigint | undefined
                to?: bigint | undefined
              }
            }
            output: ResultPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                groupId?: string | undefined
                applicationId?: string | undefined
                serviceId?: string | undefined
                from?: bigint | undefined
                to?: bigint | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/hardware/search-devices': {
      $get:
        | {
            input: {
              query: {
                searchTerms: string
                groupId?: string | undefined
                applicationId?: string | undefined
                serviceId?: string | undefined
                page?: string | undefined
                limit?: number | undefined
              }
            }
            output: ResultPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                searchTerms: string
                groupId?: string | undefined
                applicationId?: string | undefined
                serviceId?: string | undefined
                page?: string | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                searchTerms: string
                groupId?: string | undefined
                applicationId?: string | undefined
                serviceId?: string | undefined
                page?: string | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/hardware/services': {
      $get:
        | {
            input: {
              query: {
                page?: string | undefined
                limit?: number | undefined
                direction?: 'asc' | 'desc' | undefined
                sort?: string | undefined
              }
            }
            output: ResultPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: string | undefined
                limit?: number | undefined
                direction?: 'asc' | 'desc' | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                page?: string | undefined
                limit?: number | undefined
                direction?: 'asc' | 'desc' | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/hardware/services/:serviceId': {
      $get:
        | {
            input: { param: { serviceId: string } }
            output: ServiceSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serviceId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { serviceId: string } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes
