type AccessTokenToPut = { CardId?: bigint | undefined; UserId?: bigint | undefined }
type Object = { [x: string]: unknown }
type ActionToPostItem = { ObisCode?: string | undefined; Value?: number | undefined }
type ActionToPost = { Actions?: ActionToPostItem[] | undefined; DeviceID?: string | undefined }
type ActionInformation = {
  ActionType?: 'OnOffAction' | 'AnalogAction' | undefined
  MaxValue?: number | undefined
  MinValue?: number | undefined
  Name?: string | undefined
  ObisCode?: string | undefined
}
type AdditionalDeviceInformation = {
  AdditionalMeterSerialNumber?: string | undefined
  FirmwareVersion?: number | undefined
  HardwareVersion?: number | undefined
  ID?: string | undefined
  NetworkConnection?: string | undefined
  NetworkConnectionRSSI?: number | undefined
}
type CustomDeviceValues = { Name?: string | undefined; Value?: number | undefined }
type CustomDeviceToPost = {
  Id?: string | undefined
  Name?: string | undefined
  Serial?: bigint | undefined
  ValueDate?: string | undefined
  Values?: CustomDeviceValues[] | undefined
}
type Device = {
  ActivePower?: number | undefined
  ActivePowerL1?: number | undefined
  ActivePowerL2?: number | undefined
  ActivePowerL3?: number | undefined
  ActivePowerUnit?: string | undefined
  ActiveTariff?: number | undefined
  AdditionalMeterSerialNumber?: string | undefined
  AnalogOutput1?: number | undefined
  AnalogOutput2?: number | undefined
  ChargingStationState?:
    | 'Booting'
    | 'ReadyNoCarConnected'
    | 'ReadyCarConnected'
    | 'StartedWaitForCar'
    | 'Charging'
    | 'Installation'
    | 'Authorize'
    | 'Offline'
    | undefined
  CounterReading?: number | undefined
  CounterReadingExport?: number | undefined
  CounterReadingImport?: number | undefined
  CounterReadingT1?: number | undefined
  CounterReadingT2?: number | undefined
  CounterReadingT3?: number | undefined
  CounterReadingT4?: number | undefined
  CounterReadingUnit?: string | undefined
  Current?: number | undefined
  CurrentL1?: number | undefined
  CurrentL2?: number | undefined
  CurrentL3?: number | undefined
  DeviceEnergyType?:
    | 'MeterTypeUnknown'
    | 'MeterTypeElectricity'
    | 'MeterTypeWater'
    | 'MeterTypeGas'
    | 'MeterTypeHeat'
    | 'MeterTypeHCA'
    | 'MeterTypeAllMeters'
    | 'MeterTypeTemperature'
    | 'MeterTypeMBusGateway'
    | 'MeterTypeRS485Gateway'
    | 'MeterTypeCustomDevice'
    | 'MeterTypeCompressedAir'
    | 'MeterTypeSolarLog'
    | 'MeterTypeVirtualMeter'
    | 'MeterTypeWMBusGateway'
    | undefined
  DigitalInput1?: boolean | undefined
  DigitalInput2?: boolean | undefined
  DigitalOutput1?: boolean | undefined
  DigitalOutput2?: boolean | undefined
  FamilyType?:
    | 'MeterFamilyTypeUnknown'
    | 'MeterFamilyTypeSmartMeConnectV1'
    | 'MeterFamiliyTypeSmartMeMeter'
    | 'MeterFamiliyTypeSmartMeMeterWithSwitch'
    | 'MeterFamilyTypeMBusGatewayV1'
    | 'MeterFamilyTypeRS485GatewayV1'
    | 'MeterFamilyTypeKamstrupModule'
    | 'MeterFamilyTypeSmartMe3PhaseMeter80A'
    | 'MeterFamilyTypeSmartMe3PhaseMeter32A'
    | 'MeterFamilyTypeSmartMe3PhaseTelstarTransformer'
    | 'MeterFamilyTypeLandisGyrModule'
    | 'MeterFamilyTypeFnnOpticalModule'
    | 'MeterFamilyTypeSmartMe3PhaseTelstar80AWiFi'
    | 'MeterFamilyTypeSmartMe3PhaseTelstar80AMobile'
    | 'MeterFamilyTypeSmartMe1PhaseMeter80AV2WiFi'
    | 'MeterFamilyTypeSmartMe1PhaseMeter32AV2WiFi'
    | 'MeterFamilyTypeSmartMe1PhaseMeter80AGprs'
    | 'MeterFamilyTypeSmartMe1PhaseMeter32AGprs'
    | 'MeterFamilyTypeWMBusGatewayV1'
    | 'MeterFamilyTypeSmartMe3PhaseTelstarTransformerMobile'
    | 'MeterFamilyTypeMithralHallV1'
    | 'MeterFamilyTypeRestApiMeter'
    | 'MeterFamilyTypeVirtualBillingMeter'
    | undefined
  FlowRate?: number | undefined
  Id?: string | undefined
  MeterSubType?:
    | 'MeterSubTypeUnknown'
    | 'MeterSubTypeCold'
    | 'MeterSubTypeHeat'
    | 'MeterSubTypeChargingStation'
    | 'MeterSubTypeElectricity'
    | 'MeterSubTypeWater'
    | 'MeterSubTypeGas'
    | 'MeterSubTypeElectricityHeat'
    | 'MeterSubTypeTemperature'
    | 'MeterSubTypeVirtualBattery'
    | undefined
  Name?: string | undefined
  PowerFactor?: number | undefined
  PowerFactorL1?: number | undefined
  PowerFactorL2?: number | undefined
  PowerFactorL3?: number | undefined
  Serial?: bigint | undefined
  SwitchOn?: boolean | undefined
  SwitchPhaseL1On?: boolean | undefined
  SwitchPhaseL2On?: boolean | undefined
  SwitchPhaseL3On?: boolean | undefined
  Temperature?: number | undefined
  ValueDate?: string | undefined
  Voltage?: number | undefined
  VoltageL1?: number | undefined
  VoltageL2?: number | undefined
  VoltageL3?: number | undefined
}
type DeviceToPost = {
  ActivePower?: number | undefined
  CounterReading?: number | undefined
  CounterReadingExport?: number | undefined
  CounterReadingExportT1?: number | undefined
  CounterReadingExportT2?: number | undefined
  CounterReadingT1?: number | undefined
  CounterReadingT2?: number | undefined
  Current?: number | undefined
  CurrentL1?: number | undefined
  CurrentL2?: number | undefined
  CurrentL3?: number | undefined
  DeviceEnergyType?:
    | 'MeterTypeUnknown'
    | 'MeterTypeElectricity'
    | 'MeterTypeWater'
    | 'MeterTypeGas'
    | 'MeterTypeHeat'
    | 'MeterTypeHCA'
    | 'MeterTypeAllMeters'
    | 'MeterTypeTemperature'
    | 'MeterTypeMBusGateway'
    | 'MeterTypeRS485Gateway'
    | 'MeterTypeCustomDevice'
    | 'MeterTypeCompressedAir'
    | 'MeterTypeSolarLog'
    | 'MeterTypeVirtualMeter'
    | 'MeterTypeWMBusGateway'
    | undefined
  DigitalInput1?: boolean | undefined
  Id?: string | undefined
  MeterSubType?:
    | 'MeterSubTypeUnknown'
    | 'MeterSubTypeCold'
    | 'MeterSubTypeHeat'
    | 'MeterSubTypeChargingStation'
    | 'MeterSubTypeElectricity'
    | 'MeterSubTypeWater'
    | 'MeterSubTypeGas'
    | 'MeterSubTypeElectricityHeat'
    | 'MeterSubTypeTemperature'
    | 'MeterSubTypeVirtualBattery'
    | undefined
  Name?: string | undefined
  PowerFactor?: number | undefined
  PowerFactorL1?: number | undefined
  PowerFactorL2?: number | undefined
  PowerFactorL3?: number | undefined
  Serial?: bigint | undefined
  Temperature?: number | undefined
  ValueDate?: string | undefined
  Voltage?: number | undefined
  VoltageL1?: number | undefined
  VoltageL2?: number | undefined
  VoltageL3?: number | undefined
}
type FolderData = {
  ElectricityCounterValue?: number | undefined
  ElectricityPower?: number | undefined
  GasCounterValue?: number | undefined
  GasFlowRate?: number | undefined
  HeatCounterValue?: number | undefined
  HeatPower?: number | undefined
  WaterCounterValue?: number | undefined
  WaterFlowRate?: number | undefined
}
type AutoExportSettings = {
  ExportFormat?: string | undefined
  ExportInterval?:
    | 'NoExport'
    | 'Hourly'
    | 'Daily'
    | 'Weekly'
    | 'Monthly'
    | 'QuaterYearly'
    | 'HalfYearly'
    | 'Yearly'
    | undefined
  MeterPointId?: string | undefined
  UploadType?: string | undefined
}
type FolderMenuItem = {
  AutoExportSettings?: AutoExportSettings | undefined
  Children?: FolderMenuItem[] | undefined
  Description?: string | undefined
  FolderType?:
    | 'Folder'
    | 'Location'
    | 'Factory'
    | 'House'
    | 'Office'
    | 'Machine'
    | 'VirtualMeter'
    | 'ElecticityFolder'
    | 'WaterFolder'
    | 'HeatFolder'
    | 'GasFolder'
    | 'TemperatureFolder'
    | 'Sun'
    | 'Light'
    | 'Ice'
    | 'Sofa'
    | 'Food'
    | 'Coffee'
    | 'Car'
    | 'ChargingStation'
    | 'Meter'
    | 'User'
    | 'Trash'
    | 'GridPhotovoltaicPowerSystem'
    | undefined
  Icon?: string | undefined
  Id?: string | undefined
  MeterSerialNumber?: string | undefined
  Name?: string | undefined
  UserId?: string | undefined
}
type FolderMenuConfiguration = {
  BrowserTimeZoneName?: string | undefined
  BrowserUtcTime?: string | undefined
  Items?: FolderMenuItem[] | undefined
}
type MBusData = { Date?: string | undefined; Telegram?: string | undefined }
type MeterFolderInformationToPost = { Id?: string | undefined; Name?: string | undefined }
type InputInformation = { Name?: string | undefined; Number?: number | undefined }
type OutputInformation = {
  ActionType?: 'OnOffAction' | 'AnalogAction' | undefined
  Name?: string | undefined
  Number?: number | undefined
  ObisCode?: string | undefined
}
type MeterFolderInformation = {
  CommunicationModuleFirmwareVersion?: number | undefined
  CommunicationModuleHardwareVersion?: number | undefined
  FirmwareVersion?: number | undefined
  HardwareVersion?: number | undefined
  InputInformations?: InputInformation[] | undefined
  IsFolder?: boolean | undefined
  Name?: string | undefined
  OutputInformations?: OutputInformation[] | undefined
}
type DeviceInPast = {
  CounterReading?: number | undefined
  CounterReadingExport?: number | undefined
  CounterReadingExportT1?: number | undefined
  CounterReadingExportT2?: number | undefined
  CounterReadingExportT3?: number | undefined
  CounterReadingExportT4?: number | undefined
  CounterReadingImport?: number | undefined
  CounterReadingImportT1?: number | undefined
  CounterReadingImportT2?: number | undefined
  CounterReadingImportT3?: number | undefined
  CounterReadingImportT4?: number | undefined
  CounterReadingT1?: number | undefined
  CounterReadingT2?: number | undefined
  CounterReadingT3?: number | undefined
  CounterReadingT4?: number | undefined
  CounterReadingUnit?: string | undefined
  Date?: string | undefined
  Id?: string | undefined
  Serial?: bigint | undefined
}
type RegisterRealtimeApiData = {
  ApiUrl?: string | undefined
  BasicAuthPassword?: string | undefined
  BasicAuthUsername?: string | undefined
  Id?: string | undefined
  MeterId?: string | undefined
  RegistrationType?: 'Disabled' | 'SingleMeterRegistration' | 'UserRegistration' | undefined
  SerialNumber?: string | undefined
}
type InputConfigurationContainer = {
  Name?: string | undefined
  Number?: number | undefined
  OffText?: string | undefined
  OnText?: string | undefined
  Type?: 'TariffInput' | 'DigitalInput' | undefined
}
type OutputConfigurationContainer = {
  DigitalOutputNoConnectionAction?: 'Nothing' | 'TurnOff' | 'TurnOn' | 'SetPwmValue' | undefined
  Name?: string | undefined
  Number?: number | undefined
  S0PulseValue?: 'PulseValue1000Kwh' | 'PulseValue10000Kwh' | undefined
  Type?:
    | 'ImpulseOutputActiveEnergy'
    | 'ImpulseOutputActiveEnergyImport'
    | 'ImpulseOutputActiveEnergyExport'
    | 'ImpulseOutputReactiveEnergy'
    | 'DigitalOutput'
    | 'AnalogPwmSignalOutput'
    | 'Disabled'
    | undefined
}
type SwitchConfigurationContainer = {
  CanSwitchOff?: boolean | undefined
  Number?: number | undefined
}
type SmartMeDeviceConfigurationContainer = {
  DeviceEncryptionKey?: string | undefined
  DevicePinCode?: string | undefined
  DnsUpdateState?: 'NoUpdate' | 'DnsUpdatePublicIp' | 'DnsUpdateInternalIp' | undefined
  EnableModbusTcp?: boolean | undefined
  Id?: string | undefined
  InputConfiguration?: InputConfigurationContainer[] | undefined
  OutputConfiguration?: OutputConfigurationContainer[] | undefined
  ShowReactiveEnergy?: boolean | undefined
  SwitchConfiguration?: SwitchConfigurationContainer[] | undefined
  UploadInterval?:
    | 'UploadInterval_1s'
    | 'UploadInterval_5s'
    | 'UploadInterval_10s'
    | 'UploadInterval_30s'
    | 'UploadInterval_60s'
    | 'UploadInterval_5min'
    | 'UploadInterval_15min'
    | 'UploadInterval_30min'
    | 'UploadInterval_60min'
    | 'UploadInterval_6h'
    | 'UploadInterval_12h'
    | 'UploadInterval_24h'
    | undefined
}
type SubUserData = {
  AccessEndDate?: string | undefined
  AccessTimeStartDate?: string | undefined
  Email?: string | undefined
  Id?: string | undefined
  NewPassword?: string | undefined
  PermissionLevel?: 'SelectedFolderAndSubfoldersMeters' | 'SelectedFolderOnly' | undefined
  Username?: string | undefined
}
type User = {
  ChildUsers?: User[] | undefined
  Email?: string | undefined
  Id?: bigint | undefined
  IdAsString?: string | undefined
  IsAdmin?: boolean | undefined
  Permissions?: string[] | undefined
  Username?: string | undefined
}
type ValueData = { Obis?: string | undefined; Value?: number | undefined }
type ValuesData = {
  Date?: string | undefined
  DeviceId?: string | undefined
  Values?: ValueData[] | undefined
}
type VMeterToActivate = { SerialNumber?: string | undefined }
type VMeterToDeactivate = { ID?: string | undefined }
type VirtualTariff = {
  Factor?: number | undefined
  Id?: string | undefined
  Name?: string | undefined
  Type?: 'Battery' | 'Solar' | 'Normal' | undefined
  Unit?: string | undefined
  Value?: number | undefined
}
type VirtualTariffsOfFolder = {
  Date?: string | undefined
  FolderId?: string | undefined
  Name?: string | undefined
  VirtualTariffs?: VirtualTariff[] | undefined
}
type VirtualTariffConsumptionData = {
  Consumption?: number | undefined
  Currency?: string | undefined
  Name?: string | undefined
  Price?: number | undefined
  TariffType?: 'Battery' | 'Solar' | 'Normal' | undefined
}
type FolderSettings = {
  Description?: string | undefined
  Enable?: boolean | undefined
  FolderType?:
    | 'Folder'
    | 'Location'
    | 'Factory'
    | 'House'
    | 'Office'
    | 'Machine'
    | 'VirtualMeter'
    | 'ElecticityFolder'
    | 'WaterFolder'
    | 'HeatFolder'
    | 'GasFolder'
    | 'TemperatureFolder'
    | 'Sun'
    | 'Light'
    | 'Ice'
    | 'Sofa'
    | 'Food'
    | 'Coffee'
    | 'Car'
    | 'ChargingStation'
    | 'Meter'
    | 'User'
    | 'Trash'
    | 'GridPhotovoltaicPowerSystem'
    | undefined
  Name?: string | undefined
  ParentFolderId?: string | undefined
  SerialNumber?: bigint | undefined
  UseableForVirtualBillingMeters?: boolean | undefined
  ValueCorrection?: number | undefined
  ValueCorrectionParentFolder?: number | undefined
  VisualizationName?: string | undefined
}
type PicoChargingData = {
  ActiveChargingEnergy?: number | undefined
  ActiveChargingPower?: number | undefined
  ConnectionMode?:
    | 'NetworkToCloudConnectionMode_NoConnection'
    | 'NetworkToCloudConnectionMode_DirectWiFiConnection'
    | 'NetworkToCloudConnectionMode_GPRSConnection'
    | 'NetworkToCloudConnectionMode_NBIotConnection'
    | 'NetworkToCloudConnectionMode_LteCatM1Connection'
    | 'NetworkToCloudConnectionMode_MeshWiFiConnection'
    | 'NetworkToCloudConnectionMode_MeshMobileConnection'
    | undefined
  Duration?: number | undefined
  LastWarningOrError?:
    | 'MeterDataloggerEvent'
    | 'MeterRestart'
    | 'PowerDown'
    | 'MissingPhaseL1'
    | 'MissingPhaseL2'
    | 'MissingPhaseL3'
    | 'TamperDetectionCover'
    | 'MagneticFieldDetection'
    | 'ClockAdjusted'
    | 'Overvoltage'
    | 'Undervoltage'
    | 'OvervoltageL1'
    | 'OvervoltageL2'
    | 'OvervoltageL3'
    | 'ChargingTransaction'
    | 'PicoErrorControllerPanic'
    | 'PicoErrorMidServicePanic'
    | 'PicoWarningRcdTriggered'
    | 'PicoWarningCableLockError'
    | 'PicoWarningDiodeFailure'
    | 'PicoWarningOverload'
    | 'PicoWarningHighTemperature'
    | undefined
  LastWarningOrErrorMessage?: string | undefined
  LastWarningOrErrorTime?: string | undefined
  LoadSheddingState?: 'MaxCurrent' | 'HalfCurrent' | 'MinCurrent' | 'NoCurrent' | undefined
  LoadmanagementGroupName?: string | undefined
  MaxAllowedChargingCurrent?: number | undefined
  MaxDynamicCurrent?: number | undefined
  MaxLoadmanagementGroupCurrent?: number | undefined
  MaxStationCurrent?: number | undefined
  MinStationCurrent?: number | undefined
  State?:
    | 'Booting'
    | 'ReadyNoCarConnected'
    | 'ReadyCarConnected'
    | 'StartedWaitForCar'
    | 'Charging'
    | 'Installation'
    | 'Authorize'
    | 'Offline'
    | undefined
  ValueDate?: string | undefined
}
type PicoChargingHistoryData = {
  Duration?: number | undefined
  EnergyUsed?: number | undefined
  StartTime?: string | undefined
}
type PicoLoadmanagementGroupDto = {
  Id?: string | undefined
  MaxCurrent?: number | undefined
  Name?: string | undefined
  NumberOfStations?: number | undefined
}
type PicoSettingsDto = {
  AuthenticationType?: 'None' | 'Backend' | undefined
  CarIdDetection?: boolean | undefined
  DisplayBrightness?: string | undefined
  DnsName?: string | undefined
  FixCableLockEnable?: boolean | undefined
  IdleImageUrl?: string | undefined
  InternalIp?: string | undefined
  LoadmanagementGroupId?: string | undefined
  MaxCurrent?: number | undefined
  MinCurrent?: number | undefined
  ModbusTcp?: boolean | undefined
  Name?: string | undefined
  SerialNumber?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/AccessToken': {
      $put:
        | {
            input: { json: AccessTokenToPut } & { form: AccessTokenToPut }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccessTokenToPut } & { form: AccessTokenToPut }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AccessTokenToPut } & { form: AccessTokenToPut }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AccessTokenToPut } & { form: AccessTokenToPut }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Account/login': {
      $get:
        | { input: {}; output: Object; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Object; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Object; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Object; outputFormat: 'text'; status: 200 }
      $post:
        | { input: {}; output: Object; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Object; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Object; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Object; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Actions': {
      $post: {
        input: { json: ActionToPost } & { form: ActionToPost }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/Actions/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ActionInformation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ActionInformation[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ActionInformation[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ActionInformation[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/AdditionalDeviceInformation/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: AdditionalDeviceInformation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: AdditionalDeviceInformation
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/CustomDevice': {
      $get:
        | { input: {}; output: CustomDeviceToPost[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CustomDeviceToPost[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: CustomDeviceToPost[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: CustomDeviceToPost[]; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { json: CustomDeviceToPost } & { form: CustomDeviceToPost }
            output: CustomDeviceToPost
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CustomDeviceToPost } & { form: CustomDeviceToPost }
            output: CustomDeviceToPost
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CustomDeviceToPost } & { form: CustomDeviceToPost }
            output: CustomDeviceToPost
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CustomDeviceToPost } & { form: CustomDeviceToPost }
            output: CustomDeviceToPost
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CustomDeviceToPost } & { form: CustomDeviceToPost }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/CustomDevice/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: CustomDeviceToPost
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: CustomDeviceToPost
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: CustomDeviceToPost
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: CustomDeviceToPost
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/DeviceBySerial': {
      $get:
        | {
            input: { query: { serial: bigint } }
            output: Device
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { serial: bigint } }
            output: Device
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { serial: bigint } }
            output: Device
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { serial: bigint } }
            output: Device
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Devices': {
      $get:
        | { input: {}; output: Device[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Device[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Device[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Device[]; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { json: DeviceToPost } & { form: DeviceToPost }
            output: DeviceToPost
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DeviceToPost } & { form: DeviceToPost }
            output: DeviceToPost
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DeviceToPost } & { form: DeviceToPost }
            output: DeviceToPost
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DeviceToPost } & { form: DeviceToPost }
            output: DeviceToPost
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DeviceToPost } & { form: DeviceToPost }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/Devices/:id': {
      $get:
        | { input: { param: { id: string } }; output: Device; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Device; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: Device; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: Device; outputFormat: 'text'; status: 200 }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { switchState: boolean; switchNumber?: number | undefined }
            }
            output: Object
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { switchState: boolean; switchNumber?: number | undefined }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { switchState: boolean; switchNumber?: number | undefined }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { switchState: boolean; switchNumber?: number | undefined }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { switchState: boolean; switchNumber?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { switchState: boolean; switchNumber?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 405
          }
    }
  } & {
    '/api/DevicesByEnergy': {
      $get:
        | {
            input: {
              query: {
                meterEnergyType:
                  | 'MeterTypeUnknown'
                  | 'MeterTypeElectricity'
                  | 'MeterTypeWater'
                  | 'MeterTypeGas'
                  | 'MeterTypeHeat'
                  | 'MeterTypeHCA'
                  | 'MeterTypeAllMeters'
                  | 'MeterTypeTemperature'
                  | 'MeterTypeMBusGateway'
                  | 'MeterTypeRS485Gateway'
                  | 'MeterTypeCustomDevice'
                  | 'MeterTypeCompressedAir'
                  | 'MeterTypeSolarLog'
                  | 'MeterTypeVirtualMeter'
                  | 'MeterTypeWMBusGateway'
              }
            }
            output: Device[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                meterEnergyType:
                  | 'MeterTypeUnknown'
                  | 'MeterTypeElectricity'
                  | 'MeterTypeWater'
                  | 'MeterTypeGas'
                  | 'MeterTypeHeat'
                  | 'MeterTypeHCA'
                  | 'MeterTypeAllMeters'
                  | 'MeterTypeTemperature'
                  | 'MeterTypeMBusGateway'
                  | 'MeterTypeRS485Gateway'
                  | 'MeterTypeCustomDevice'
                  | 'MeterTypeCompressedAir'
                  | 'MeterTypeSolarLog'
                  | 'MeterTypeVirtualMeter'
                  | 'MeterTypeWMBusGateway'
              }
            }
            output: Device[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                meterEnergyType:
                  | 'MeterTypeUnknown'
                  | 'MeterTypeElectricity'
                  | 'MeterTypeWater'
                  | 'MeterTypeGas'
                  | 'MeterTypeHeat'
                  | 'MeterTypeHCA'
                  | 'MeterTypeAllMeters'
                  | 'MeterTypeTemperature'
                  | 'MeterTypeMBusGateway'
                  | 'MeterTypeRS485Gateway'
                  | 'MeterTypeCustomDevice'
                  | 'MeterTypeCompressedAir'
                  | 'MeterTypeSolarLog'
                  | 'MeterTypeVirtualMeter'
                  | 'MeterTypeWMBusGateway'
              }
            }
            output: Device[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                meterEnergyType:
                  | 'MeterTypeUnknown'
                  | 'MeterTypeElectricity'
                  | 'MeterTypeWater'
                  | 'MeterTypeGas'
                  | 'MeterTypeHeat'
                  | 'MeterTypeHCA'
                  | 'MeterTypeAllMeters'
                  | 'MeterTypeTemperature'
                  | 'MeterTypeMBusGateway'
                  | 'MeterTypeRS485Gateway'
                  | 'MeterTypeCustomDevice'
                  | 'MeterTypeCompressedAir'
                  | 'MeterTypeSolarLog'
                  | 'MeterTypeVirtualMeter'
                  | 'MeterTypeWMBusGateway'
              }
            }
            output: Device[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/DevicesBySubType': {
      $get:
        | {
            input: {
              query: {
                meterSubType:
                  | 'MeterSubTypeUnknown'
                  | 'MeterSubTypeCold'
                  | 'MeterSubTypeHeat'
                  | 'MeterSubTypeChargingStation'
                  | 'MeterSubTypeElectricity'
                  | 'MeterSubTypeWater'
                  | 'MeterSubTypeGas'
                  | 'MeterSubTypeElectricityHeat'
                  | 'MeterSubTypeTemperature'
                  | 'MeterSubTypeVirtualBattery'
              }
            }
            output: Device[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                meterSubType:
                  | 'MeterSubTypeUnknown'
                  | 'MeterSubTypeCold'
                  | 'MeterSubTypeHeat'
                  | 'MeterSubTypeChargingStation'
                  | 'MeterSubTypeElectricity'
                  | 'MeterSubTypeWater'
                  | 'MeterSubTypeGas'
                  | 'MeterSubTypeElectricityHeat'
                  | 'MeterSubTypeTemperature'
                  | 'MeterSubTypeVirtualBattery'
              }
            }
            output: Device[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                meterSubType:
                  | 'MeterSubTypeUnknown'
                  | 'MeterSubTypeCold'
                  | 'MeterSubTypeHeat'
                  | 'MeterSubTypeChargingStation'
                  | 'MeterSubTypeElectricity'
                  | 'MeterSubTypeWater'
                  | 'MeterSubTypeGas'
                  | 'MeterSubTypeElectricityHeat'
                  | 'MeterSubTypeTemperature'
                  | 'MeterSubTypeVirtualBattery'
              }
            }
            output: Device[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                meterSubType:
                  | 'MeterSubTypeUnknown'
                  | 'MeterSubTypeCold'
                  | 'MeterSubTypeHeat'
                  | 'MeterSubTypeChargingStation'
                  | 'MeterSubTypeElectricity'
                  | 'MeterSubTypeWater'
                  | 'MeterSubTypeGas'
                  | 'MeterSubTypeElectricityHeat'
                  | 'MeterSubTypeTemperature'
                  | 'MeterSubTypeVirtualBattery'
              }
            }
            output: Device[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/FastSendDeviceValues/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/Folder/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: FolderData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: FolderData
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/FolderMenu': {
      $get:
        | {
            input: { query: { filter?: string | undefined } }
            output: FolderMenuConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { filter?: string | undefined } }
            output: FolderMenuConfiguration
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { filter?: string | undefined } }
            output: FolderMenuConfiguration
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { filter?: string | undefined } }
            output: FolderMenuConfiguration
            outputFormat: 'text'
            status: 200
          }
      $post: {
        input: { json: FolderMenuConfiguration } & { form: FolderMenuConfiguration }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/Health': {
      $get:
        | { input: {}; output: Object; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Object; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Object; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Object; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/MBus': {
      $post:
        | {
            input: { json: MBusData } & { form: MBusData }
            output: Object
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MBusData } & { form: MBusData }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: MBusData } & { form: MBusData }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: MBusData } & { form: MBusData }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: MBusData } & { form: MBusData }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: MBusData } & { form: MBusData }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/MeterFolderInformation': {
      $post: {
        input: { json: MeterFolderInformationToPost } & { form: MeterFolderInformationToPost }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/MeterFolderInformation/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: MeterFolderInformation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: MeterFolderInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: MeterFolderInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: MeterFolderInformation
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/MeterValues/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { date: string } }
            output: DeviceInPast
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { date: string } }
            output: DeviceInPast
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { date: string } }
            output: DeviceInPast
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { date: string } }
            output: DeviceInPast
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/RegisterForRealtimeApi': {
      $get:
        | { input: {}; output: RegisterRealtimeApiData[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RegisterRealtimeApiData[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: RegisterRealtimeApiData[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: RegisterRealtimeApiData[]; outputFormat: 'text'; status: 200 }
      $post: {
        input: { json: RegisterRealtimeApiData } & { form: RegisterRealtimeApiData }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/RegisterForRealtimeApi/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/SmartMeDeviceConfiguration': {
      $post: {
        input: { json: SmartMeDeviceConfigurationContainer } & {
          form: SmartMeDeviceConfigurationContainer
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/SmartMeDeviceConfiguration/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SmartMeDeviceConfigurationContainer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: SmartMeDeviceConfigurationContainer
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: SmartMeDeviceConfigurationContainer
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: SmartMeDeviceConfigurationContainer
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/SubUser': {
      $post: {
        input: { json: SubUserData } & { form: SubUserData }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/SubUser/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get:
        | {
            input: { param: { id: string } }
            output: SubUserData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: SubUserData
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: SubUserData
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: SubUserData
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/User': {
      $delete:
        | { input: {}; output: Object; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Object; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Object; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Object; outputFormat: 'text'; status: 200 }
      $get:
        | { input: {}; output: User; outputFormat: 'json'; status: 200 }
        | { input: {}; output: User; outputFormat: 'text'; status: 200 }
        | { input: {}; output: User; outputFormat: 'text'; status: 200 }
        | { input: {}; output: User; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Values/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ValuesData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ValuesData
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ValuesInPast/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { date: string } }
            output: ValuesData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { date: string } }
            output: ValuesData
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ValuesInPastMultiple/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { startDate: string; endDate: string; interval: number }
            }
            output: ValuesData[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { startDate: string; endDate: string; interval: number }
            }
            output: ValuesData[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { startDate: string; endDate: string; interval: number }
            }
            output: ValuesData[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { startDate: string; endDate: string; interval: number }
            }
            output: ValuesData[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/VirtualBillingMeterActive': {
      $get:
        | { input: {}; output: Device[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Device[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Device[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Device[]; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { json: VMeterToActivate } & { form: VMeterToActivate }
            output: Device
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: VMeterToActivate } & { form: VMeterToActivate }
            output: Device
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: VMeterToActivate } & { form: VMeterToActivate }
            output: Device
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: VMeterToActivate } & { form: VMeterToActivate }
            output: Device
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: VMeterToActivate } & { form: VMeterToActivate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: VMeterToActivate } & { form: VMeterToActivate }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: VMeterToActivate } & { form: VMeterToActivate }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/VirtualBillingMeterDeactivate': {
      $post:
        | {
            input: { json: VMeterToDeactivate } & { form: VMeterToDeactivate }
            output: Object
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: VMeterToDeactivate } & { form: VMeterToDeactivate }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: VMeterToDeactivate } & { form: VMeterToDeactivate }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: VMeterToDeactivate } & { form: VMeterToDeactivate }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: VMeterToDeactivate } & { form: VMeterToDeactivate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: VMeterToDeactivate } & { form: VMeterToDeactivate }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: VMeterToDeactivate } & { form: VMeterToDeactivate }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/VirtualBillingMeters': {
      $get:
        | { input: {}; output: Device[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Device[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Device[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Device[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/VirtualMeterCalculateFormula': {
      $get:
        | {
            input: { query: { formula: string } }
            output: Device
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { formula: string } }
            output: Device
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { formula: string } }
            output: Device
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { formula: string } }
            output: Device
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/VirtualTariff': {
      $get:
        | { input: {}; output: VirtualTariffsOfFolder[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: VirtualTariffsOfFolder[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: VirtualTariffsOfFolder[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: VirtualTariffsOfFolder[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/VirtualTariff/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: VirtualTariffsOfFolder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: VirtualTariffsOfFolder
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/VirtualTariffConsumption': {
      $get:
        | {
            input: { query: { folderId: string; startDate: string; endDate: string } }
            output: VirtualTariffConsumptionData[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { folderId: string; startDate: string; endDate: string } }
            output: VirtualTariffConsumptionData[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { folderId: string; startDate: string; endDate: string } }
            output: VirtualTariffConsumptionData[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { folderId: string; startDate: string; endDate: string } }
            output: VirtualTariffConsumptionData[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/VirtualTariffsForProperty/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: VirtualTariffsOfFolder[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: VirtualTariffsOfFolder[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: VirtualTariffsOfFolder[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: VirtualTariffsOfFolder[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/VirtualTariffsStatusForProperty/:id': {
      $get:
        | { input: { param: { id: string } }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: string; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: string; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/folder/assign': {
      $post: {
        input: { query: { source: string; target: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/folder/settings/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get:
        | {
            input: { param: { id: string } }
            output: FolderSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: FolderSettings
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: FolderSettings
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: FolderSettings
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { id: string } } & { json: FolderSettings } & { form: FolderSettings }
            output: FolderMenuItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: FolderSettings } & { form: FolderSettings }
            output: FolderMenuItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: FolderSettings } & { form: FolderSettings }
            output: FolderMenuItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: FolderSettings } & { form: FolderSettings }
            output: FolderMenuItem
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/folder/user/assign': {
      $delete: {
        input: { query: { source: string; target: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { query: { source: string; target: string; oldFolder: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/oauth/authorize': {
      $get:
        | {
            input: {
              query: {
                client_id: string
                redirect_uri: string
                state: string
                scope?: string | undefined
                client_secret?: string | undefined
              }
            }
            output: Object
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                client_id: string
                redirect_uri: string
                state: string
                scope?: string | undefined
                client_secret?: string | undefined
              }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                client_id: string
                redirect_uri: string
                state: string
                scope?: string | undefined
                client_secret?: string | undefined
              }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                client_id: string
                redirect_uri: string
                state: string
                scope?: string | undefined
                client_secret?: string | undefined
              }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                client_id: string
                redirect_uri: string
                state: string
                scope?: string | undefined
                client_secret?: string | undefined
              }
            }
            output: Object
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                client_id: string
                redirect_uri: string
                state: string
                scope?: string | undefined
                client_secret?: string | undefined
              }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                client_id: string
                redirect_uri: string
                state: string
                scope?: string | undefined
                client_secret?: string | undefined
              }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                client_id: string
                redirect_uri: string
                state: string
                scope?: string | undefined
                client_secret?: string | undefined
              }
            }
            output: Object
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/pico': {
      $get:
        | { input: {}; output: Device[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Device[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Device[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Device[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/pico/charging/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: PicoChargingData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: PicoChargingData
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/pico/history/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: PicoChargingHistoryData[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: PicoChargingHistoryData[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: PicoChargingHistoryData[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: PicoChargingHistoryData[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/pico/loadmanagementgroup': {
      $get:
        | { input: {}; output: PicoLoadmanagementGroupDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: PicoLoadmanagementGroupDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: PicoLoadmanagementGroupDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: PicoLoadmanagementGroupDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/pico/loadmanagementgroup/current/:serial': {
      $post:
        | {
            input: { param: { serial: bigint } } & { query: { current: number } }
            output: Object
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serial: bigint } } & { query: { current: number } }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serial: bigint } } & { query: { current: number } }
            output: Object
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serial: bigint } } & { query: { current: number } }
            output: Object
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/pico/loadmanagementgroup/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: PicoLoadmanagementGroupDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: PicoLoadmanagementGroupDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: PicoLoadmanagementGroupDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: PicoLoadmanagementGroupDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/pico/settings/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: PicoSettingsDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: PicoSettingsDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: PicoSettingsDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: PicoSettingsDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/pico/tryenablecablelock/:id': {
      $post:
        | { input: { param: { id: string } }; output: Object; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Object; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: Object; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: Object; outputFormat: 'text'; status: 200 }
    }
  },
  '/'
>
export default routes
