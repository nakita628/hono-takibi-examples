import { createRoute, z } from '@hono/zod-openapi'

const ActionResponseSchema = z
  .object({
    pslOutput: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The output of the underlying PSL operation.',
        example: '!!!SUCCESS!!!',
      }),
  })
  .openapi({
    description: 'The object encapsulating the output of an operation affecting the PATROL Agent.',
    required: [],
  })
  .openapi('ActionResponse')

const DeviceSummarySchema = z
  .object({
    agentId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The ID of the PATROL Agent the device is attached to.',
        example: 42,
      }),
    agentName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the PATROL Agent the device is attached to.',
        example: 'name.domain',
      }),
    ambientTemperature: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The ambient temperature of the device.' }),
    collectTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The collection time of the heating margin (as an Epoch time, in seconds).<br><u>Note</u>:This field will only be present if a value could be found.',
      }),
    deviceTSMOKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The TSMOKey of the device.', example: '2+501040 462' }),
    deviceUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The link to the device details.',
        example: '#/hardware-sentry/devices/42/details',
      }),
    heatingMargin: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The heating margin of the device.<br><u>Note</u>:This field will only be present if a value could be found.',
      }),
    heatingMarginUnit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unit in which the heating margin of the device is being expressed.<br><u>Note</u>:This field will only be present if a value could be found.',
        example: 'Celsius degrees',
      }),
    id: z.int32().exactOptional().openapi({ description: 'The ID of the device.', example: 42 }),
    name: z.string().exactOptional().openapi({ description: 'The ID of the device.' }),
    powerConsumption: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The power consumption of the device.' }),
    powerConsumptionUnit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unit in which the power consumption of the device is being expressed.',
      }),
    productVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The Hardware Sentry KM version of the device's Monitor.<br><u>Note</u>:This field will only be present if a value could be found.",
      }),
    serverId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ID of the server the device is attached to.', example: 42 }),
    serverName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the server the device is attached to.',
        example: 'name.domain',
      }),
    sid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The SID of the device.', example: 'cisco-c240-imc' }),
    type: z
      .enum([
        'DEFAULT',
        'ESX_HOST',
        'VIRTUAL_MACHINE',
        'VIRTUAL_CENTER',
        'XEN_HOST',
        'XEN_MASTER_SERVER',
        'XEN_VIRTUAL_MACHINE',
        'XENAPP_CONTROLLER',
        'XENAPP_MACHINE',
        'VBLOCK_ESX',
        'VBLOCK_VIRTUAL_MACHINE',
        'VBLOCK_SWITCH',
        'VBLOCK_STORAGE',
        'VBLOCK_CHASSIS',
        'VBLOCK_BLADE',
        'VBLOCK_ENV',
        'AIX_BOX',
        'AIX_HARD_PARTITION',
        'AIX_POOL',
        'AIX_LPAR',
        'AIX_WPAR',
        'SOL_SYSTEM',
        'SOL_FRAME',
        'SOL_ZONE',
        'SOL_LDOM',
        'REDHAT_KVM_HOST',
        'REDHAT_KVM_GUEST_INSTANCE',
        'REDHAT_XEN_HOST',
        'REDHAT_VM',
        'HP_SYSTEM',
        'HP_NPAR',
        'HP_VPAR',
        'HP_INT_VM',
        'HP_INT_HOST',
        'MS_HOST',
        'MS_VM',
        'AZURE_VIRTUALMACHINE',
        'AMAZON_EC2',
        'OS400_HOST',
        'DOCKER_HOST',
        'DOCKER_NODE',
        'DOCKER_CONTAINER',
        'ROUTER',
        'HUB',
        'PRINTER',
        'REPEATER',
        'WORKSTATION',
        'NTSERVER',
        'PRINETSERVER',
        'RMONPROBE',
        'WEBSERVER',
        'DBSERVER',
        'MAILSERVER',
        'FIREWALL',
        'OTHERS',
        'APPSERVER',
        'DEDICATEDAGENT',
        'REMOTEAGENT',
        'LAYER_3_SWITCH',
        'CENTRAL_OFFICE_SWITCH',
        'ACCESS_SERVER',
        'I_O',
        'WEB_CACHING',
        'MANAGEMENT',
        'BLOCK_SERVER',
        'FILE_SERVER',
        'MOBILE_USER_DEVICE',
        'BRIDGE_OR_EXTENDER',
        'GATEWAY',
        'LOADBALANCER',
        'MAINFRAME',
        'SANSWITCH',
        'SANHUB',
        'SANBRIDGE',
        'SANROUTER',
        'SANDIRECTOR',
        'RAIDSTORAGEDEVICE',
        'VIRTUAL_TAPE_LIBRARY',
        'JBOD',
        'STORAGESUBSYSTEM',
        'STORAGE_VIRTUALIZER',
        'MEDIA_LIBRARY',
        'EXTENDERNODE',
        'NAS_HEAD',
        'SELFCONTAINED_NAS',
        'UPS',
        'IP_PHONE',
        'MANAGEMENT_CONTROLLER',
        'CHASSIS_MANAGER',
        'HOSTBASED_RAID_CONTROLLER',
        'STORAGE_DEVICE_ENCLOSURE',
        'DESKTOP',
        'LAPTOP',
        'VIRTUAL_LIBRARY_SYSTEM',
        'BLADE_SYSTEM',
        'BLADE_SERVER',
        'VPN_CONCENTRATOR',
        'PROXY_SERVER',
        'LAYER_3_PROXY_SERVER',
        'WAN_ACCELERATOR',
        'SAN_PROCESSOR',
        'VIRTUAL_SERVER_RHL',
        'VIRTUAL_SERVER_WINDOWS',
        'ESXi',
        'VIRTUAL_SERVER',
        'HYPERVISOR',
        'AWS_AMI',
        'MS_AZURE',
        'UNKNOWN',
      ])
      .exactOptional(),
    updateTimestamp: z
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
        description: 'The data collection time (as an Epoch time, in seconds).',
      }),
  })
  .openapi({ required: [] })
  .openapi('DeviceSummary')

const ApplicationSummarySchema = z
  .object({
    costUnit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The currency in which all energy cost values are being expressed.',
      }),
    deviceSummaries: z
      .array(DeviceSummarySchema)
      .exactOptional()
      .openapi({
        description:
          'The list of devices attached to the application.<br><u>Note</u>: when using the <b>Applications</b> service, this list is always empty. It is populated only when using the <b>Application Details</b> service.',
      }),
    emittedCo2Unit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unit in which all CO<sub>2</sub> emission values are being expressed.',
      }),
    energyConsumptionUnit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unit in which all energy consumption values are being expressed.',
      }),
    heatingMargin: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The lowest heating margin among the heating margins of the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be found.',
      }),
    heatingMarginCoverage: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The percentage of devices attached to the application, whose heating margin could be found.<br><u>Note</u>:This field will only be present if a value could be found.',
      }),
    heatingMarginDeviceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found.',
      }),
    heatingMarginDeviceUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The link to the details of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found.',
      }),
    heatingMarginUnit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unit in which the heating margin of the application is being expressed.',
      }),
    historyParentIdKey: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the key used to identify the application in the history table.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the application.', example: '42' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the application.' }),
    numberOfDevices: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of devices attached to the application.' }),
    oneDayConfidence: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The confidence score (percentage) for the daily energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.',
      }),
    oneDayCost: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The daily cost of the energy consumed by the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be computed.',
      }),
    oneDayEmittedCo2: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of CO<sub>2</sub> emitted by the devices attached to the application during one day.<br><u>Note</u>:This field will only be present if a value could be computed.',
      }),
    oneDayEnergyConsumption: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of energy consumed by the devices attached to the application during one day.',
      }),
    oneMonthConfidence: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The confidence score (percentage) for the monthly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.',
      }),
    oneMonthCost: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The monthly cost of the energy consumed by the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be computed.',
      }),
    oneMonthEmittedCo2: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of CO<sub>2</sub> emitted by the devices attached to the application during one month.<br><u>Note</u>:This field will only be present if a value could be computed.',
      }),
    oneMonthEnergyConsumption: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of energy consumed by the devices attached to the application during one month.',
      }),
    oneYearConfidence: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The confidence score (percentage) for the yearly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.',
      }),
    oneYearCost: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The yearly cost of the energy consumed by the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be computed.',
      }),
    oneYearEmittedCo2: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of CO<sub>2</sub> emitted by the devices attached to the application in one year.<br><u>Note</u>:This field will only be present if a value could be computed.',
      }),
    oneYearEnergyConsumption: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of energy consumed by the devices attached to the application during one year.',
      }),
    totalPowerConsumption: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The total power consumption of the devices attached to the application.',
      }),
    totalPowerConsumptionUnit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unit in which the total power consumption of the devices attached to the application is being expressed.',
      }),
    updateTimestamp: z
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
        description: 'The data collection time (as an Epoch time, in seconds).',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The link to the application details.',
        example: '#/green-it/applications/349676/details',
      }),
  })
  .openapi({ required: [] })
  .openapi('ApplicationSummary')

const DeviceAgentSchema = z
  .object({
    connectionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description: "The status of the PATROL Agent's connection.",
        example: 'Connection Active',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the PATROL Agent.', example: '9' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The FQDN of the PATROL Agent.', example: 'name.domain' }),
    os: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The operating system the PATROL Agent is running on.',
        example: 'Linux',
      }),
    port: z
      .string()
      .exactOptional()
      .openapi({ description: 'The port the PATROL Agent is running on.', example: '3181' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: "The link to the 'Monitors' tab of the PATROL Agent.",
        example: '#/devices/42/2/monitorTab',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of the PATROL Agent.', example: 'V11.3.02i' }),
  })
  .openapi({
    description: 'Contains all information regarding a specific PATROL Agent.',
    required: [],
  })
  .openapi('DeviceAgent')

const ErrorResponseSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: "The error's business identifier.", example: 'GENERAL_ERROR' }),
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The timestamp of the error.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error message.', example: 'No data found' }),
  })
  .openapi({ required: [] })
  .openapi('ErrorResponse')

const GlobalSummarySchema = z
  .object({
    co2Emission: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The CO<sub>2</sub> emissions for all devices. This value can be updated by users with sufficient permissions.',
      }),
    co2EmissionUnit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unit in which the CO<sub>2</sub> emission is being expressed.',
      }),
    editable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If <em>true</em>, indicates that you do not have sufficient rights to update the global settings. However, you may still have sufficient rights to update a specific group's setting.",
      }),
    energyCost: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The electricity rate for all devices. This value can be updated by users with sufficient permissions.',
      }),
    energyCostUnit: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unit in which the electricity rate is being expressed.' }),
    groupNameFilter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Regular expression used to filter the groups for which the power consumption will be reported.',
        example: 'Group [0-9]+',
      }),
    heatingMargin: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The lowest heating margin among the heating margins of all the devices.<br><u>Note</u>:This field will only be present if a value could be found.',
      }),
    heatingMarginCoverage: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The percentage of devices whose heating margin could be found.<br><u>Note</u>:This field will only be present if a value could be found.',
      }),
    heatingMarginDeviceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found.',
      }),
    heatingMarginDeviceUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The link to the details of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found.',
        example: '#/hardware-sentry/devices/3/details',
      }),
    heatingMarginUnit: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unit in which the heating margin is being expressed.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the global summary (this ID will always be "global").' }),
    totalPowerConsumption: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The total power consumption of all the devices.' }),
    totalPowerConsumptionUnit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unit in which the total power consumption is being expressed.',
      }),
    updateTimestamp: z
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
        description: 'The data collection time (as an Epoch time, in seconds).',
      }),
  })
  .openapi({ required: [] })
  .openapi('GlobalSummary')

const GroupConfigurationSchema = z
  .object({
    co2Emission: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Updates the CO<sub>2</sub> emission (unit: kg/kWh).',
        example: 0.3,
      }),
    energyCost: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Updates the electricity rate (unit: $/kWh).', example: 0.3 }),
    groupNameFilter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Updates the regular expression used to filter the groups for which the power consumption should be reported.',
        example: 'Group [0-9]+',
      }),
  })
  .openapi({
    description:
      "The deserialized form of the <b>Energy Footprint Update</b> service's request payload.",
    required: [],
  })
  .openapi('GroupConfiguration')

const GroupSummarySchema = z
  .object({
    ambientTemperature: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The average ambient temperature based on the ambient temperatures of the devices attached to the group.',
      }),
    ambientTemperatureUnit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unit in which the ambient temperature value is being expressed.',
      }),
    co2Emission: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The CO<sub>2</sub> emissions for all devices attached to the group. This value can be updated by users with sufficient permissions.',
      }),
    co2EmissionUnit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unit in which the user-defined CO<sub>2</sub> emission value is being expressed.',
      }),
    costUnit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The currency in which all energy cost values are being expressed.',
      }),
    deviceSummaries: z.array(DeviceSummarySchema).exactOptional(),
    editable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'The name of the key used to identify the group in the history table.',
      }),
    emittedCo2Unit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unit in which all emitted CO<sub>2</sub> quantities are being expressed.',
      }),
    energyConsumptionUnit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unit in which all energy consumption values are being expressed.',
      }),
    energyCost: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The electricity rate for all devices attached to the group. This value can be updated by users with sufficient permissions.',
      }),
    energyCostUnit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unit in which th euser-defined electricity rate value is being expressed.',
      }),
    heatingMargin: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The lowest heating margin among the heating margins of the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be found.',
      }),
    heatingMarginCoverage: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The percentage of devices attached to the group, whose heating margin could be found.<br><u>Note</u>:This field will only be present if a value could be found.',
      }),
    heatingMarginDeviceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found.',
      }),
    heatingMarginDeviceUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The link to the details of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found.',
      }),
    heatingMarginUnit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unit in which the heating margin of the group is being expressed.',
      }),
    historyParentIdKey: z.string().exactOptional(),
    id: z.string().exactOptional().openapi({ description: 'The ID of the group.', example: '42' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the group.' }),
    numberOfDevices: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of devices attached to the group.' }),
    oneDayConfidence: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The confidence score (percentage) for the daily energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.',
      }),
    oneDayCost: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The daily cost of the energy consumed by the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be computed.',
      }),
    oneDayEmittedCo2: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of CO<sub>2</sub> emitted by the devices attached to the group during one day.<br><u>Note</u>:This field will only be present if a value could be computed.',
      }),
    oneDayEnergyConsumption: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of energy consumed by the devices attached to the group during one day.',
      }),
    oneMonthConfidence: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The confidence score (percentage) for the monthly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.',
      }),
    oneMonthCost: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The monthly cost of the energy consumed by the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be computed.',
      }),
    oneMonthEmittedCo2: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of CO<sub>2</sub> emitted by the devices attached to the group during one month.<br><u>Note</u>:This field will only be present if a value could be computed.',
      }),
    oneMonthEnergyConsumption: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of energy consumed by the devices attached to the group during one month.',
      }),
    oneYearConfidence: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The confidence score (percentage) for the yearly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.',
      }),
    oneYearCost: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The yearly cost of the energy consumed by the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be computed.',
      }),
    oneYearEmittedCo2: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of CO<sub>2</sub> emitted by the devices attached to the group in one year.<br><u>Note</u>:This field will only be present if a value could be computed.',
      }),
    oneYearEnergyConsumption: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of energy consumed by the devices attached to the group during one year.',
      }),
    serverId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The ID of the server the group is attached to.', example: 42 }),
    totalPowerConsumption: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The total power consumption of the devices attached to the group.',
      }),
    totalPowerConsumptionUnit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unit in which the total power consumption of the devices attached to the group is being expressed.',
      }),
    updateTimestamp: z
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
        description: 'The data collection time (as an Epoch time, in seconds).',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The link to the group details.',
        example: '#/green-it/groups/13/details',
      }),
  })
  .openapi({ required: [] })
  .openapi('GroupSummary')

const ReinitializeActionConfigurationSchema = z
  .object({
    resetAlertActions: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        description:
          'When set to <em>1</em>, removes all manually set Alert Actions and reverts to basic default actions i.e. trigger a PATROL event and annotate a parameter graph.',
        example: 1,
      }),
    resetAlertAfterNTimes: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        description:
          'When set to <em>1</em>, resets the number of times thresholds can be breached before triggering an alert to their default values (1 time) for numeric, discrete, connector status and present parameters.',
        example: 1,
      }),
    resetDebugMode: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        description:
          'When set to <em>1</em>, deactivates the debug mode when it was manually enabled.',
        example: 1,
      }),
    resetDiscoveryAndPollingIntervals: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        description:
          'When set to <em>1</em>, removes all user-defined frequencies for discovery and polling processes to their default values (respectively 1 hour and 2 minutes).',
        example: 1,
      }),
    resetJavaSettings: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        description:
          'When set to <em>1</em>, removes the custom Java settings (path and credentials). The KM will try to automatically find a suitable JRE.',
        example: 1,
      }),
    resetOtherAlertSettings: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        description:
          'When set to <em>1</em>, reverts any manually performed configuration changes to the default Hardware Sentry values.',
        example: 1,
      }),
    resetRemovedPausedObjectList: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        description:
          'When set to <em>1</em>, reactivates the monitoring of all paused or removed objects.',
        example: 1,
      }),
    resetReportSettings: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ description: 'When set to <em>1</em>, clears the report schedule.', example: 1 }),
    resetThresholds: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ description: 'When set to <em>1</em>, resets all thresholds.', example: 1 }),
  })
  .openapi({
    description: "The deserialized form of the <b>Reinitialize</b> service's request payload.",
    required: [],
  })
  .openapi('ReinitializeActionConfiguration')

const ResultPageSchema = z
  .object({
    items: z
      .array(z.object({}))
      .exactOptional()
      .openapi({ description: 'The list of currently accessible results.' }),
    restrictedRights: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If <em>true</em>, indicates that you are denied access to part of, or all the results.',
        example: false,
      }),
    total: z
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
        description:
          'The total number of accessible results, including the results not listed in <em>items</em>.',
      }),
  })
  .openapi({ description: 'Encapsulates a list of results.', required: [] })
  .openapi('ResultPage')

const ServiceSummarySchema = z
  .object({
    costUnit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The currency in which all energy cost values are being expressed.',
      }),
    deviceSummaries: z
      .array(DeviceSummarySchema)
      .exactOptional()
      .openapi({
        description:
          'The list of devices attached to the service.<br><u>Note</u>: when using the <b>Services</b> service, this list is always empty. It is populated only when using the <b>Service Details</b> service.',
      }),
    emittedCo2Unit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unit in which all CO<sub>2</sub> emission values are being expressed.',
      }),
    energyConsumptionUnit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unit in which all energy consumption values are being expressed.',
      }),
    heatingMargin: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The lowest heating margin among the heating margins of the devices attached to the service.<br><u>Note</u>:This field will only be present if a value could be found.',
      }),
    heatingMarginCoverage: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The percentage of devices attached to the service, whose heating margin could be found.<br><u>Note</u>:This field will only be present if a value could be found.',
      }),
    heatingMarginDeviceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found.',
      }),
    heatingMarginDeviceUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The link to the details of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found.',
      }),
    heatingMarginUnit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unit in which the heating margin of the service is being expressed.',
      }),
    historyParentIdKey: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the key used to identify the service in the history table.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the service.',
        example: '2+mc.pncell_dev-tsim.internal.sentrysoftware.net.1f485a2f.0',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the service.' }),
    numberOfDevices: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of devices attached to the service.' }),
    oneDayConfidence: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The confidence score (percentage) for the daily energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.',
      }),
    oneDayCost: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The daily cost of the energy consumed by the devices attached to the service.<br><u>Note</u>:This field will only be present if a value could be computed.',
      }),
    oneDayEmittedCo2: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of CO<sub>2</sub> emitted by the devices attached to the service during one day.<br><u>Note</u>:This field will only be present if a value could be computed.',
      }),
    oneDayEnergyConsumption: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of energy consumed by the devices attached to the service during one day.',
      }),
    oneMonthConfidence: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The confidence score (percentage) for the monthly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.',
      }),
    oneMonthCost: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The monthly cost of the energy consumed by the devices attached to the service.<br><u>Note</u>:This field will only be present if a value could be computed.',
      }),
    oneMonthEmittedCo2: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of CO<sub>2</sub> emitted by the devices attached to the service during one month.<br><u>Note</u>:This field will only be present if a value could be computed.',
      }),
    oneMonthEnergyConsumption: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of energy consumed by the devices attached to the service during one month.',
      }),
    oneYearConfidence: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The confidence score (percentage) for the yearly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.',
      }),
    oneYearCost: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The yearly cost of the energy consumed by the devices attached to the service.<br><u>Note</u>:This field will only be present if a value could be computed.',
      }),
    oneYearEmittedCo2: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of CO<sub>2</sub> emitted by the devices attached to the service in one year.<br><u>Note</u>:This field will only be present if a value could be computed.',
      }),
    oneYearEnergyConsumption: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of energy consumed by the devices attached to the service during one year.',
      }),
    providerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the server providing the service.', example: '42' }),
    totalPowerConsumption: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The total power consumption of the devices attached to the service.',
      }),
    totalPowerConsumptionUnit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unit in which the total power consumption of the devices attached to the service is being expressed.',
      }),
    updateTimestamp: z
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
        description: 'The data collection time (as an Epoch time, in seconds).',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The link to the service details.',
        example:
          '#/green-it/services/2+mc.pncell_dev-tsim.internal.sentrysoftware.net.1f485a2f.0/details',
      }),
  })
  .openapi({ required: [] })
  .openapi('ServiceSummary')

const CookieSecurityScheme = { in: 'header', name: 'Cookie', type: 'apiKey' }

export const postHardwareActionsDeviceIdCollectNowRoute = createRoute({
  method: 'post',
  path: '/hardware/actions/{deviceId}/collect-now',
  tags: ['Actions'],
  summary: 'Triggers a new collect on a specific device.',
  description:
    'You need to provide the <b>Device ID</b> and <b>Monitor Class</b> parameters to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> of a device.',
  operationId: 'collectNow',
  request: {
    params: z.object({
      deviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the device.',
            example: 42,
            in: 'path',
            name: 'deviceId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      monitorClass: z
        .string()
        .openapi({
          param: {
            description: 'The Monitor Class of the device.',
            example: 'MS_HW_FAN',
            in: 'query',
            name: 'monitorClass',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { '*/*': { schema: ActionResponseSchema } },
    },
    403: {
      description: 'Forbidden operation',
      content: { '*/*': { schema: ErrorResponseSchema } },
    },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const postHardwareActionsDeviceIdRediscoverRoute = createRoute({
  method: 'post',
  path: '/hardware/actions/{deviceId}/rediscover',
  tags: ['Actions'],
  summary: 'Triggers a new discovery on a specific device.',
  description:
    'You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.',
  operationId: 'rediscover',
  request: {
    params: z.object({
      deviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the device.',
            example: 42,
            in: 'path',
            name: 'deviceId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { '*/*': { schema: ActionResponseSchema } },
    },
    403: {
      description: 'Forbidden operation',
      content: { '*/*': { schema: ErrorResponseSchema } },
    },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const postHardwareActionsDeviceIdReinitializeRoute = createRoute({
  method: 'post',
  path: '/hardware/actions/{deviceId}/reinitialize',
  tags: ['Actions'],
  summary: "Sends a 'Reinitialize KM' command.",
  description:
    "Launches a 'Reinitialize KM' command for the following parameters:<br>- resetDiscoveryAndPollingIntervals<br>- resetAlertAfterNTimes<br>- resetAlertActions<br>- resetOtherA<br>- resetSettings<br>- resetDebugMode<br>- resetRemovedPausedObjectList<br>- resetReportSettings<br>- resetJavaSettings<br>- resetThresholds<br><br>You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.",
  operationId: 'reinitialize',
  request: {
    params: z.object({
      deviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the device.',
            example: 42,
            in: 'path',
            name: 'deviceId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The request body as a JSON payload.',
      content: { 'application/json': { schema: ReinitializeActionConfigurationSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { '*/*': { schema: ActionResponseSchema } },
    },
    403: {
      description: 'Forbidden operation',
      content: { '*/*': { schema: ErrorResponseSchema } },
    },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const postHardwareActionsDeviceIdRemoveRoute = createRoute({
  method: 'post',
  path: '/hardware/actions/{deviceId}/remove',
  tags: ['Actions'],
  summary: 'Removes a specific instance from the monitoring environment.',
  description:
    'You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:"path":"/MS_HW_MAIN/10025150" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the Monitor SID).',
  operationId: 'remove',
  request: {
    params: z.object({
      deviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the device.',
            example: 42,
            in: 'path',
            name: 'deviceId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      monitorClass: z
        .string()
        .openapi({
          param: {
            description: 'The Monitor Class of the device.',
            example: 'MS_HW_FAN',
            in: 'query',
            name: 'monitorClass',
            required: true,
            schema: { type: 'string' },
          },
        }),
      monitorSid: z
        .string()
        .openapi({
          param: {
            description: 'The Monitor SID of the device.',
            example: 'cisco-c240-imc',
            in: 'query',
            name: 'monitorSid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { '*/*': { schema: ActionResponseSchema } },
    },
    403: {
      description: 'Forbidden operation',
      content: { '*/*': { schema: ErrorResponseSchema } },
    },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const postHardwareActionsDeviceIdResetErrorCountRoute = createRoute({
  method: 'post',
  path: '/hardware/actions/{deviceId}/reset-error-count',
  tags: ['Actions'],
  summary: 'Resets the Error Count parameter.',
  description:
    'Sets the Error Count parameter to 0.<br><br>You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:"path":"/MS_HW_MAIN/10025150" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the monitorSid).',
  operationId: 'reset',
  request: {
    params: z.object({
      deviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the device.',
            example: 42,
            in: 'path',
            name: 'deviceId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      monitorClass: z
        .string()
        .openapi({
          param: {
            description: 'The Monitor Class of the device.',
            example: 'MS_HW_FAN',
            in: 'query',
            name: 'monitorClass',
            required: true,
            schema: { type: 'string' },
          },
        }),
      monitorSid: z
        .string()
        .openapi({
          param: {
            description: 'The Monitor SID of the device.',
            example: 'cisco-c240-imc',
            in: 'query',
            name: 'monitorSid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { '*/*': { schema: ActionResponseSchema } },
    },
    403: {
      description: 'Forbidden operation',
      content: { '*/*': { schema: ErrorResponseSchema } },
    },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const getHardwareApplicationsRoute = createRoute({
  method: 'get',
  path: '/hardware/applications',
  tags: ['Applications'],
  summary: 'Gets summarized information about all monitored applications.',
  description: 'Lists all the available ApplicationSummary instances.',
  operationId: 'getApplications',
  request: {
    query: z.object({
      page: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'The page number to retrieve (first page is 0).',
            in: 'query',
            name: 'page',
            schema: { default: '0', format: 'int32', type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of entries per page.',
            in: 'query',
            name: 'limit',
            schema: { default: 100, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      direction: z
        .enum(['asc', 'desc'])
        .default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'The sorting order (case insensitive).',
            in: 'query',
            name: 'direction',
            schema: { default: 'asc', enum: ['asc', 'desc'], type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            description: 'The column to sort by (case insensitive).',
            in: 'query',
            name: 'sort',
            schema: { default: 'name', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful operation', content: { '*/*': { schema: ResultPageSchema } } },
    404: {
      description: 'No applications found',
      content: { '*/*': { schema: ErrorResponseSchema } },
    },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const getHardwareApplicationsApplicationIdRoute = createRoute({
  method: 'get',
  path: '/hardware/applications/{applicationId}',
  tags: ['Applications'],
  summary: 'Gets detailed information for a specific application.',
  description:
    'You need to provide an <b>Application ID</b>:<br>- use the <b>hardware/applications</b> service to retrieve all available application IDs.',
  operationId: 'getOneApplication',
  request: {
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the application.',
            example: '0',
            in: 'path',
            name: 'applicationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { '*/*': { schema: ApplicationSummarySchema } },
    },
    404: {
      description: 'No applications found',
      content: { '*/*': { schema: ErrorResponseSchema } },
    },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const getHardwareDeviceMonitorsDeviceIdRoute = createRoute({
  method: 'get',
  path: '/hardware/device-monitors/{deviceId}',
  tags: ['Devices'],
  summary: 'Gets the Monitors for a specific device.',
  description:
    'You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/devices</b> service to get all available device IDs.',
  operationId: 'getDeviceMonitors',
  request: {
    params: z.object({
      deviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the device.',
            example: 42,
            in: 'path',
            name: 'deviceId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful operation', content: {} },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const getHardwareDevicesRoute = createRoute({
  method: 'get',
  path: '/hardware/devices',
  tags: ['Devices'],
  summary: 'Gets summarized information about all monitored devices.',
  description:
    'Lists the available DeviceSummary instances.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>',
  operationId: 'getDevices',
  request: {
    query: z.object({
      page: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'The page number to retrieve (first page is 0).',
            in: 'query',
            name: 'page',
            schema: { default: '0', format: 'int32', type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of entries per page.',
            in: 'query',
            name: 'limit',
            schema: { default: 100, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      direction: z
        .enum(['asc', 'desc'])
        .default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'The sorting order (case insensitive).',
            in: 'query',
            name: 'direction',
            schema: { default: 'asc', enum: ['asc', 'desc'], type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            description: 'The column to sort by (case insensitive).',
            in: 'query',
            name: 'sort',
            schema: { default: 'name', type: 'string' },
            required: false,
          },
        }),
      groupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the group.',
            example: '0',
            in: 'query',
            name: 'groupId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      applicationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the application.',
            example: '0',
            in: 'query',
            name: 'applicationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serviceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the service.',
            example: '0',
            in: 'query',
            name: 'serviceId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful operation', content: { '*/*': { schema: ResultPageSchema } } },
    404: { description: 'No devices found', content: { '*/*': { schema: ErrorResponseSchema } } },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const getHardwareDevicesSummaryRoute = createRoute({
  method: 'get',
  path: '/hardware/devices-summary',
  tags: ['Devices'],
  summary: 'Gets overall information for all devices.',
  description: 'Lists the GlobalSummary instance for all the monitored devices.',
  operationId: 'getDevicesSummary',
  responses: {
    200: {
      description: 'Successful operation',
      content: { '*/*': { schema: GlobalSummarySchema } },
    },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const getHardwareDevicesDeviceIdRoute = createRoute({
  method: 'get',
  path: '/hardware/devices/{deviceId}',
  tags: ['Devices'],
  summary: 'Gets detailed information about a specific device.',
  description:
    'You need to provide a <b>Device ID</b>:<br>-use the <b>hardware/devices</b> service to get all available device IDs.',
  operationId: 'getDevice',
  request: {
    params: z.object({
      deviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the device.',
            example: 42,
            in: 'path',
            name: 'deviceId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { '*/*': { schema: DeviceSummarySchema } },
    },
    404: { description: 'No devices found', content: { '*/*': { schema: ErrorResponseSchema } } },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const getHardwareDevicesDeviceIdAgentRoute = createRoute({
  method: 'get',
  path: '/hardware/devices/{deviceId}/agent',
  tags: ['Devices'],
  summary: 'Gets detailed information about an Agent.',
  description:
    'You need to provide a <b>Device ID</b> to retrieve detailed information about the Agent that Monitors the device:<br>-use the <b>hardware/devices</b> service to get all available device IDs.',
  operationId: 'getDeviceAgent',
  request: {
    params: z.object({
      deviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the device.',
            example: 42,
            in: 'path',
            name: 'deviceId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful operation', content: { '*/*': { schema: DeviceAgentSchema } } },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const getHardwareDevicesDeviceIdAgentDevicesRoute = createRoute({
  method: 'get',
  path: '/hardware/devices/{deviceId}/agent-devices',
  tags: ['Devices'],
  summary: 'Gets a list of all the devices monitored by an Agent.',
  description:
    'You need to provide the <b>Device ID</b> of a device to retrieve any other devices monitored by the same Agent:<br>-use the <b>hardware/devices</b> service to get all available device IDs.',
  operationId: 'getAgentDevices',
  request: {
    params: z.object({
      deviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the device.',
            example: 42,
            in: 'path',
            name: 'deviceId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful operation', content: { '*/*': { schema: ResultPageSchema } } },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const getHardwareDevicesDeviceIdParameterHistoryRoute = createRoute({
  method: 'get',
  path: '/hardware/devices/{deviceId}/parameter-history',
  tags: ['Devices'],
  summary: 'Gets data history for a parameter of a specific device over a given period.',
  description:
    'You need to provide the <b>Device ID</b>, <b>Parameter Name</b>, <b>Monitor Type</b> and <b>Monitor SID</b>:<br>- use the <b>hardware/devices</b> service to get all available device IDs<br>- use the <b>/hardware/device-monitors/{deviceId}</b> to get the parameter name, the Monitor type and the Monitor SID.<br><br>Finally, define the period for which you wish to retrieve data history.',
  operationId: 'getDeviceParameterHistory',
  request: {
    params: z.object({
      deviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the device.',
            example: 42,
            in: 'path',
            name: 'deviceId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      parameterName: z
        .string()
        .openapi({
          param: {
            description: 'The name of the parameter.',
            example: 'Power Consumption',
            in: 'query',
            name: 'parameterName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      monitorType: z
        .string()
        .openapi({
          param: {
            description: 'The unique name of the Monitor type.',
            example: '_PATROL__MS_HW_REPORT',
            in: 'query',
            name: 'monitorType',
            required: true,
            schema: { type: 'string' },
          },
        }),
      from: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'Beginning of the period (Epoch time, in seconds).',
            example: 1608850800,
            in: 'query',
            name: 'from',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      to: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'End of the period (Epoch time, in seconds).',
            example: 1608850800,
            in: 'query',
            name: 'to',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      monitorSid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Monitor SID (to filter the list of Monitors).',
            example: 'cisco-c240-imc',
            in: 'query',
            name: 'monitorSid',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful operation', content: { '*/*': { schema: ResultPageSchema } } },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const getHardwareEnergyUsageDeviceIdRoute = createRoute({
  method: 'get',
  path: '/hardware/energy-usage/{deviceId}',
  tags: ['Devices'],
  summary: 'Gets the energy usage for a specific device and a given period.',
  description:
    'You need to provide the device ID:<br>- use the <b>hardware/devices</b> service to get all available device IDs.',
  operationId: 'getDeviceEnergyUsage',
  request: {
    params: z.object({
      deviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the device.',
            example: 42,
            in: 'path',
            name: 'deviceId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      rollPeriod: z
        .enum(['ONE_DAY', 'ONE_WEEK', 'ONE_MONTH', 'SIX_MONTHS', 'ONE_YEAR'])
        .default('ONE_DAY')
        .exactOptional()
        .openapi({
          param: {
            description: 'The period for which you wish to retrieve energy usage data.',
            in: 'query',
            name: 'rollPeriod',
            schema: {
              default: 'ONE_DAY',
              enum: ['ONE_DAY', 'ONE_WEEK', 'ONE_MONTH', 'SIX_MONTHS', 'ONE_YEAR'],
              type: 'string',
            },
            required: false,
          },
        }),
      basis: z
        .enum(['MONTHLY', 'DAILY', 'HOURLY'])
        .default('HOURLY')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Subdivision of the period for which you wish to retrieve energy usage data.',
            in: 'query',
            name: 'basis',
            schema: { default: 'HOURLY', enum: ['MONTHLY', 'DAILY', 'HOURLY'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful operation', content: { '*/*': { schema: ResultPageSchema } } },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const getHardwareGroupsRoute = createRoute({
  method: 'get',
  path: '/hardware/groups',
  tags: ['Groups'],
  summary: 'Gets all group summaries.',
  description: 'Lists the available GroupSummary instances.',
  operationId: 'getGroups',
  request: {
    query: z.object({
      page: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'The page number to retrieve (first page is 0).',
            in: 'query',
            name: 'page',
            schema: { default: '0', format: 'int32', type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of entries per page.',
            in: 'query',
            name: 'limit',
            schema: { default: 100, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      direction: z
        .enum(['asc', 'desc'])
        .default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'The sorting order (case insensitive).',
            in: 'query',
            name: 'direction',
            schema: { default: 'asc', enum: ['asc', 'desc'], type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            description: 'The column to sort by (case insensitive).',
            in: 'query',
            name: 'sort',
            schema: { default: 'name', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful operation', content: { '*/*': { schema: ResultPageSchema } } },
    404: { description: 'No groups found', content: { '*/*': { schema: ErrorResponseSchema } } },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const getHardwareGroupsGroupIdRoute = createRoute({
  method: 'get',
  path: '/hardware/groups/{groupId}',
  tags: ['Groups'],
  summary: 'Gets detailed information about a specific group.',
  description:
    'You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/groups</b> service to get all available group ID.',
  operationId: 'getOneGroup',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the group.',
            example: '0',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { '*/*': { schema: GroupSummarySchema } },
    },
    404: { description: 'No groups found', content: { '*/*': { schema: ErrorResponseSchema } } },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const putHardwareGroupsGroupIdRoute = createRoute({
  method: 'put',
  path: '/hardware/groups/{groupId}',
  tags: ['Groups'],
  summary: 'Updates the values of the energy footprint parameter for a specific group.',
  description:
    'You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/groups</b> service to get all available group ID.<br><br>If the ID is <em>"global"</em>, then the group being updated is the GlobalSummary.',
  operationId: 'updateEnergyCost',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the group.',
            example: '0',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The values you wish to assign.',
      content: { 'application/json': { schema: GroupConfigurationSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { '*/*': { schema: GlobalSummarySchema } },
    },
    404: {
      description: 'No settings or groups found',
      content: { '*/*': { schema: ErrorResponseSchema } },
    },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const getHardwareHeatingMarginDevicesRoute = createRoute({
  method: 'get',
  path: '/hardware/heating-margin-devices',
  tags: ['Devices'],
  summary: 'Gets the heating margin values for each monitored device, when available.',
  description:
    'If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>',
  operationId: 'getHeatingMarginCoverage',
  request: {
    query: z.object({
      covered: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to <em>true</em>, only gets devices whose heating margin information is available.<br>Otherwise, gets any other devices.',
            in: 'query',
            name: 'covered',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      page: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'The page number to retrieve (first page is 0).',
            in: 'query',
            name: 'page',
            schema: { default: '0', format: 'int32', type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of entries per page.',
            in: 'query',
            name: 'limit',
            schema: { default: 100, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      direction: z
        .enum(['asc', 'desc'])
        .default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'The sorting order (case insensitive).',
            in: 'query',
            name: 'direction',
            schema: { default: 'asc', enum: ['asc', 'desc'], type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            description: 'The column to sort by (case insensitive).',
            in: 'query',
            name: 'sort',
            schema: { default: 'name', type: 'string' },
            required: false,
          },
        }),
      groupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the group.',
            example: '0',
            in: 'query',
            name: 'groupId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      applicationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the application.',
            example: '0',
            in: 'query',
            name: 'applicationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serviceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the service.',
            example: '0',
            in: 'query',
            name: 'serviceId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful operation', content: { '*/*': { schema: ResultPageSchema } } },
    404: { description: 'No devices found', content: { '*/*': { schema: ErrorResponseSchema } } },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const getHardwareHistoryRoute = createRoute({
  method: 'get',
  path: '/hardware/history',
  tags: ['Historical Data'],
  summary: 'Gets historical data for a specific group, application or service.',
  description:
    'Gets the historical data for a specific group, application or service, for a given period.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>',
  operationId: 'getHistory',
  request: {
    query: z.object({
      groupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the group.',
            example: '0',
            in: 'query',
            name: 'groupId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      applicationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the application.',
            example: '0',
            in: 'query',
            name: 'applicationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serviceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the service.',
            example: '0',
            in: 'query',
            name: 'serviceId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      from: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'Beginning of the period (Epoch time, in seconds).',
            example: 1608850800,
            in: 'query',
            name: 'from',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      to: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'End of the period (Epoch time, in seconds).',
            example: 1608850800,
            in: 'query',
            name: 'to',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful operation', content: { '*/*': { schema: ResultPageSchema } } },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const getHardwareSearchDevicesRoute = createRoute({
  method: 'get',
  path: '/hardware/search-devices',
  tags: ['Devices'],
  summary: 'Searches devices by name, model, manufacturer or serial number.',
  description:
    'Gets the DeviceSummary instances whose name, model, manufacturer or serial number match the specified criteria.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>',
  operationId: 'searchDevices',
  request: {
    query: z.object({
      searchTerms: z
        .string()
        .openapi({
          param: {
            description: 'Space-separated search criteria.',
            example: 'EMC Unity',
            in: 'query',
            name: 'searchTerms',
            required: true,
            schema: { type: 'string' },
          },
        }),
      groupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the group.',
            example: '0',
            in: 'query',
            name: 'groupId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      applicationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the application.',
            example: '0',
            in: 'query',
            name: 'applicationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serviceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the service.',
            example: '0',
            in: 'query',
            name: 'serviceId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'The page number to retrieve (first page is 0).',
            in: 'query',
            name: 'page',
            schema: { default: '0', format: 'int32', type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of entries per page.',
            in: 'query',
            name: 'limit',
            schema: { default: 100, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful operation', content: { '*/*': { schema: ResultPageSchema } } },
    404: { description: 'No devices found', content: { '*/*': { schema: ErrorResponseSchema } } },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const getHardwareServicesRoute = createRoute({
  method: 'get',
  path: '/hardware/services',
  tags: ['Services'],
  summary: 'Gets summarized information about all monitored services.',
  description: 'Lists the available ServiceSummary instances.',
  operationId: 'getServices',
  request: {
    query: z.object({
      page: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'The page number to retrieve (first page is 0).',
            in: 'query',
            name: 'page',
            schema: { default: '0', format: 'int32', type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of entries per page.',
            in: 'query',
            name: 'limit',
            schema: { default: 100, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      direction: z
        .enum(['asc', 'desc'])
        .default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'The sorting order (case insensitive).',
            in: 'query',
            name: 'direction',
            schema: { default: 'asc', enum: ['asc', 'desc'], type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            description: 'The column to sort by (case insensitive).',
            in: 'query',
            name: 'sort',
            schema: { default: 'name', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful operation', content: { '*/*': { schema: ResultPageSchema } } },
    404: { description: 'No services found', content: { '*/*': { schema: ErrorResponseSchema } } },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const getHardwareServicesServiceIdRoute = createRoute({
  method: 'get',
  path: '/hardware/services/{serviceId}',
  tags: ['Services'],
  summary: 'Gets detailed information about a specific service.',
  description:
    'You need to provide a <b>Service ID</b> ID :<br>- use the <b>hardware/services</b> service to get all available service IDs.',
  operationId: 'getOneService',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the service.',
            example: '0',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { '*/*': { schema: ServiceSummarySchema } },
    },
    404: { description: 'No services found', content: { '*/*': { schema: ErrorResponseSchema } } },
    500: { description: 'Unexpected error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})
