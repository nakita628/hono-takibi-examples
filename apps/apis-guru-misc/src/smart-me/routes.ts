import { createRoute, z } from '@hono/zod-openapi'

const AutoExportSettingsSchema = z
  .object({
    ExportFormat: z.string().exactOptional().openapi({ description: 'The export format' }),
    ExportInterval: z
      .enum([
        'NoExport',
        'Hourly',
        'Daily',
        'Weekly',
        'Monthly',
        'QuaterYearly',
        'HalfYearly',
        'Yearly',
      ])
      .exactOptional()
      .openapi({ description: 'The export interval of the auto export' }),
    MeterPointId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The meter point id set by the user' }),
    UploadType: z.string().exactOptional().openapi({ description: 'The upload type' }),
  })
  .openapi({ description: 'Settings for the auto export functionality of a meter', required: [] })
  .openapi('AutoExportSettings')

type FolderMenuItemType = {
  AutoExportSettings?: z.infer<typeof AutoExportSettingsSchema>
  Children?: FolderMenuItemType[]
  Description?: string
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
  Icon?: string
  Id?: string
  MeterSerialNumber?: string
  Name?: string
  UserId?: string
}

type UserType = {
  ChildUsers?: UserType[]
  Email?: string
  Id?: bigint
  IdAsString?: string
  IsAdmin?: boolean
  Permissions?: string[]
  Username?: string
}

const AccessTokenToPutSchema = z
  .object({
    CardId: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'The ID of the Card' }),
    UserId: z
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
          'The ID of the User. The credentials provided must have permission to edit the user.\r\n            If no ID is provided, the user in the credentials is taken.',
      }),
  })
  .openapi({ description: 'Container Class for the Put action of an Access Token', required: [] })
  .openapi('AccessTokenToPut')

const ActionInformationSchema = z
  .object({
    ActionType: z
      .enum(['OnOffAction', 'AnalogAction'])
      .exactOptional()
      .openapi({ description: 'The Type of this action.' }),
    MaxValue: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The maximum value of this action (e.g. for an AnalogAction)' }),
    MinValue: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The minimum value of this action (e.g. for an AnalogAction)' }),
    Name: z.string().exactOptional().openapi({ description: 'The Name of this action' }),
    ObisCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Obis Code of this action. This is used as ID.' }),
  })
  .openapi({ description: 'The Information about an Action of a device', required: [] })
  .openapi('ActionInformation')

const ActionToPostItemSchema = z
  .object({
    ObisCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ObisCode (ID) of the Action' }),
    Value: z.float64().exactOptional().openapi({ description: 'The Value to Post' }),
  })
  .openapi({ description: 'Container class for an action item', required: [] })
  .openapi('ActionToPostItem')

const ActionToPostSchema = z
  .object({
    Actions: z
      .array(ActionToPostItemSchema)
      .exactOptional()
      .openapi({ description: 'List with all Actions for this device' }),
    DeviceID: z.string().exactOptional().openapi({ description: 'The ID of the Device' }),
  })
  .openapi({ description: 'Container Class for an action to post', required: [] })
  .openapi('ActionToPost')

const AdditionalDeviceInformationSchema = z
  .object({
    AdditionalMeterSerialNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An additional Meter serial number. e.g. the number of a meter a smart-me device is connected to.',
      }),
    FirmwareVersion: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The Firmware Version of a Meter' }),
    HardwareVersion: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The Hardware Version of a Meter.' }),
    ID: z.string().exactOptional().openapi({ description: 'The ID of the device' }),
    NetworkConnection: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The mode how the device is connected to the network. Valid values are:\r\n            wifi, gprs, ltecatm1, ltenbiot, meshmobile, meshwifi',
      }),
    NetworkConnectionRSSI: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The connection RSSI value (0 is bad, 100 is best)' }),
  })
  .openapi({ description: 'Additional Information For a device', required: [] })
  .openapi('AdditionalDeviceInformation')

const CustomDeviceValuesSchema = z
  .object({
    Name: z.string().exactOptional().openapi({ description: 'The Name of the Value.' }),
    Value: z.float64().exactOptional().openapi({ description: 'The Value' }),
  })
  .openapi({ description: 'Container Class for the Custom Device Values', required: [] })
  .openapi('CustomDeviceValues')

const CustomDeviceToPostSchema = z
  .object({
    Id: z.string().exactOptional().openapi({ description: 'The ID of the device' }),
    Name: z.string().exactOptional().openapi({ description: 'The Name of the Device' }),
    Serial: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'The Serial number' }),
    ValueDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The Date of the Value (in UTC). If this is null the Server Time is used.',
      }),
    Values: z
      .array(CustomDeviceValuesSchema)
      .exactOptional()
      .openapi({ description: 'The Values of the custom Device' }),
  })
  .openapi({ description: 'Container Class for the Web API', required: [] })
  .openapi('CustomDeviceToPost')

const DeviceSchema = z
  .object({
    ActivePower: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Actvie Power or current flow rate' }),
    ActivePowerL1: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Actvie Power Phase L1' }),
    ActivePowerL2: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Actvie Power Phase L2' }),
    ActivePowerL3: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Actvie Power Phase L3' }),
    ActivePowerUnit: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Unit of the Active Power Value' }),
    ActiveTariff: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The Number of the Active Tariff' }),
    AdditionalMeterSerialNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An additional Meter serial number. e.g. the number of a meter a smart-me device is connected to.',
      }),
    AnalogOutput1: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The analog output number 1 (PWM signal) (0 - 32183)' }),
    AnalogOutput2: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The analog output number 2 (PWM signal) (0 - 32183)' }),
    ChargingStationState: z
      .enum([
        'Booting',
        'ReadyNoCarConnected',
        'ReadyCarConnected',
        'StartedWaitForCar',
        'Charging',
        'Installation',
        'Authorize',
        'Offline',
      ])
      .exactOptional()
      .openapi({
        description:
          'The state of a pico charging station. (Only available for pico charging stations)',
      }),
    CounterReading: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading (Total Energy used)' }),
    CounterReadingExport: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading only export' }),
    CounterReadingImport: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading only import' }),
    CounterReadingT1: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Tariff 1' }),
    CounterReadingT2: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Tariff 2' }),
    CounterReadingT3: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Tariff 3' }),
    CounterReadingT4: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Tariff 4' }),
    CounterReadingUnit: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Unit of the Counter Reading' }),
    Current: z.float64().exactOptional().openapi({ description: 'The Current (in A)' }),
    CurrentL1: z.float64().exactOptional().openapi({ description: 'The Current Phase L1 (in A)' }),
    CurrentL2: z.float64().exactOptional().openapi({ description: 'The Current Phase L2 (in A)' }),
    CurrentL3: z.float64().exactOptional().openapi({ description: 'The Current Phase L3 (in A)' }),
    DeviceEnergyType: z
      .enum([
        'MeterTypeUnknown',
        'MeterTypeElectricity',
        'MeterTypeWater',
        'MeterTypeGas',
        'MeterTypeHeat',
        'MeterTypeHCA',
        'MeterTypeAllMeters',
        'MeterTypeTemperature',
        'MeterTypeMBusGateway',
        'MeterTypeRS485Gateway',
        'MeterTypeCustomDevice',
        'MeterTypeCompressedAir',
        'MeterTypeSolarLog',
        'MeterTypeVirtualMeter',
        'MeterTypeWMBusGateway',
      ])
      .exactOptional()
      .openapi({ description: 'The Energy Type of this device' }),
    DigitalInput1: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The digital input number 1' }),
    DigitalInput2: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The digital input number 2' }),
    DigitalOutput1: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The digital output number 1' }),
    DigitalOutput2: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The digital output number 2' }),
    FamilyType: z
      .enum([
        'MeterFamilyTypeUnknown',
        'MeterFamilyTypeSmartMeConnectV1',
        'MeterFamiliyTypeSmartMeMeter',
        'MeterFamiliyTypeSmartMeMeterWithSwitch',
        'MeterFamilyTypeMBusGatewayV1',
        'MeterFamilyTypeRS485GatewayV1',
        'MeterFamilyTypeKamstrupModule',
        'MeterFamilyTypeSmartMe3PhaseMeter80A',
        'MeterFamilyTypeSmartMe3PhaseMeter32A',
        'MeterFamilyTypeSmartMe3PhaseTelstarTransformer',
        'MeterFamilyTypeLandisGyrModule',
        'MeterFamilyTypeFnnOpticalModule',
        'MeterFamilyTypeSmartMe3PhaseTelstar80AWiFi',
        'MeterFamilyTypeSmartMe3PhaseTelstar80AMobile',
        'MeterFamilyTypeSmartMe1PhaseMeter80AV2WiFi',
        'MeterFamilyTypeSmartMe1PhaseMeter32AV2WiFi',
        'MeterFamilyTypeSmartMe1PhaseMeter80AGprs',
        'MeterFamilyTypeSmartMe1PhaseMeter32AGprs',
        'MeterFamilyTypeWMBusGatewayV1',
        'MeterFamilyTypeSmartMe3PhaseTelstarTransformerMobile',
        'MeterFamilyTypeMithralHallV1',
        'MeterFamilyTypeRestApiMeter',
        'MeterFamilyTypeVirtualBillingMeter',
      ])
      .exactOptional()
      .openapi({ description: 'The Family Type of the device.' }),
    FlowRate: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The current flow rate (e.g. m3/h)' }),
    Id: z.string().exactOptional().openapi({ description: 'The ID of the device' }),
    MeterSubType: z
      .enum([
        'MeterSubTypeUnknown',
        'MeterSubTypeCold',
        'MeterSubTypeHeat',
        'MeterSubTypeChargingStation',
        'MeterSubTypeElectricity',
        'MeterSubTypeWater',
        'MeterSubTypeGas',
        'MeterSubTypeElectricityHeat',
        'MeterSubTypeTemperature',
        'MeterSubTypeVirtualBattery',
      ])
      .exactOptional()
      .openapi({ description: 'The sub meter type (e.g. warmwater or coldwater)' }),
    Name: z.string().exactOptional().openapi({ description: 'The Name of the Device' }),
    PowerFactor: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Power Factor (cos phi). Range: 0 - 1' }),
    PowerFactorL1: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Power Factor (cos phi) Phase L1. Range: 0 - 1' }),
    PowerFactorL2: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Power Factor (cos phi) Phase L2. Range: 0 - 1' }),
    PowerFactorL3: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Power Factor (cos phi) Phase L3. Range: 0 - 1' }),
    Serial: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'The Serial number' }),
    SwitchOn: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag if the Switch is on on this device.' }),
    SwitchPhaseL1On: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag if the Phase L1 is on on this device.' }),
    SwitchPhaseL2On: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag if the Phase L2 is on on this device.' }),
    SwitchPhaseL3On: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag if the Phase L3 is on on this device.' }),
    Temperature: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Temperature (in degree celsius)' }),
    ValueDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time of last successful connection the the smart-me Cloud.' }),
    Voltage: z.float64().exactOptional().openapi({ description: 'The Voltage (in V)' }),
    VoltageL1: z.float64().exactOptional().openapi({ description: 'The Voltage Phase L1 (in V)' }),
    VoltageL2: z.float64().exactOptional().openapi({ description: 'The Voltage Phase L2 (in V)' }),
    VoltageL3: z.float64().exactOptional().openapi({ description: 'The Voltage Phase L3 (in V)' }),
  })
  .openapi({ description: 'Container Class for the Web API', required: [] })
  .openapi('Device')

const DeviceInPastSchema = z
  .object({
    CounterReading: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading (Total Energy used)' }),
    CounterReadingExport: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Export' }),
    CounterReadingExportT1: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Export Tariff 1' }),
    CounterReadingExportT2: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Export Tariff 2' }),
    CounterReadingExportT3: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Export Tariff 3' }),
    CounterReadingExportT4: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Export Tariff 4' }),
    CounterReadingImport: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Import' }),
    CounterReadingImportT1: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Import Tariff 1' }),
    CounterReadingImportT2: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Import Tariff 2' }),
    CounterReadingImportT3: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Import Tariff 3' }),
    CounterReadingImportT4: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Import Tariff 4' }),
    CounterReadingT1: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Tariff 1' }),
    CounterReadingT2: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Tariff 2' }),
    CounterReadingT3: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Tariff 3' }),
    CounterReadingT4: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Tariff 4' }),
    CounterReadingUnit: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Unit of the Counter Reading' }),
    Date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The Date of the Values' }),
    Id: z.string().exactOptional().openapi({ description: 'The ID of the device' }),
    Serial: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'The Serial number' }),
  })
  .openapi({
    description: 'Container Class for the Web API. Conatinas the MeterValues in the Past',
    required: [],
  })
  .openapi('DeviceInPast')

const DeviceToPostSchema = z
  .object({
    ActivePower: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Active Power or current flow rate. In kW or m3/h' }),
    CounterReading: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading (Total Energy used) in kWh or m3.' }),
    CounterReadingExport: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading only export' }),
    CounterReadingExportT1: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading only export (Tariff 1)' }),
    CounterReadingExportT2: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading only export (Tariff 2)' }),
    CounterReadingT1: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Tariff 1 in kWh or m3.' }),
    CounterReadingT2: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Meter Counter Reading Tariff 2 in kWh or m3.' }),
    Current: z.float64().exactOptional().openapi({ description: 'The Current (in A)' }),
    CurrentL1: z.float64().exactOptional().openapi({ description: 'The Current Phase L1 (in A)' }),
    CurrentL2: z.float64().exactOptional().openapi({ description: 'The Current Phase L2 (in A)' }),
    CurrentL3: z.float64().exactOptional().openapi({ description: 'The Current Phase L3 (in A)' }),
    DeviceEnergyType: z
      .enum([
        'MeterTypeUnknown',
        'MeterTypeElectricity',
        'MeterTypeWater',
        'MeterTypeGas',
        'MeterTypeHeat',
        'MeterTypeHCA',
        'MeterTypeAllMeters',
        'MeterTypeTemperature',
        'MeterTypeMBusGateway',
        'MeterTypeRS485Gateway',
        'MeterTypeCustomDevice',
        'MeterTypeCompressedAir',
        'MeterTypeSolarLog',
        'MeterTypeVirtualMeter',
        'MeterTypeWMBusGateway',
      ])
      .exactOptional()
      .openapi({ description: 'The Energy Type of this device' }),
    DigitalInput1: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The digital input number 1' }),
    Id: z.string().exactOptional().openapi({ description: 'The ID of the device' }),
    MeterSubType: z
      .enum([
        'MeterSubTypeUnknown',
        'MeterSubTypeCold',
        'MeterSubTypeHeat',
        'MeterSubTypeChargingStation',
        'MeterSubTypeElectricity',
        'MeterSubTypeWater',
        'MeterSubTypeGas',
        'MeterSubTypeElectricityHeat',
        'MeterSubTypeTemperature',
        'MeterSubTypeVirtualBattery',
      ])
      .exactOptional()
      .openapi({ description: 'The Sub Type of this Meter.' }),
    Name: z.string().exactOptional().openapi({ description: 'The Name of the Device' }),
    PowerFactor: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Power Factor (cos phi). Range: 0 - 1' }),
    PowerFactorL1: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Power Factor (cos phi) Phase L1. Range: 0 - 1' }),
    PowerFactorL2: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Power Factor (cos phi) Phase L2. Range: 0 - 1' }),
    PowerFactorL3: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Power Factor (cos phi) Phase L3. Range: 0 - 1' }),
    Serial: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'The Serial number' }),
    Temperature: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Temperature (in degree celsius)' }),
    ValueDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The Date of the Value (in UTC). If this is null the Server Time is used.',
      }),
    Voltage: z.float64().exactOptional().openapi({ description: 'The Voltage (in V)' }),
    VoltageL1: z.float64().exactOptional().openapi({ description: 'The Voltage Phase L1 (in V)' }),
    VoltageL2: z.float64().exactOptional().openapi({ description: 'The Voltage Phase L2 (in V)' }),
    VoltageL3: z.float64().exactOptional().openapi({ description: 'The Voltage Phase L3 (in V)' }),
  })
  .openapi({ description: 'Container Class for the Web API', required: [] })
  .openapi('DeviceToPost')

const FolderDataSchema = z
  .object({
    ElectricityCounterValue: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Counter values for electricity (kWh)' }),
    ElectricityPower: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Power for electricity (kW)' }),
    GasCounterValue: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Counter values for Gas (m3)' }),
    GasFlowRate: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Flow Rate for Gas (m3/h)' }),
    HeatCounterValue: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Counter values for Heat (kWh)' }),
    HeatPower: z.float64().exactOptional().openapi({ description: 'The Power for Heat (kW)' }),
    WaterCounterValue: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Counter values for Water (m3)' }),
    WaterFlowRate: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The Flow Rate for Water (m3/h)' }),
  })
  .openapi({ description: 'Container class for the folder API', required: [] })
  .openapi('FolderData')

const FolderMenuItemSchema: z.ZodType<FolderMenuItemType> = z
  .lazy(() =>
    z
      .object({
        AutoExportSettings: AutoExportSettingsSchema.exactOptional(),
        Children: z
          .array(FolderMenuItemSchema)
          .exactOptional()
          .openapi({ description: 'Children folder menu items (sub folder menu items)' }),
        Description: z
          .string()
          .exactOptional()
          .openapi({ description: 'The Description of the folder' }),
        FolderType: z
          .enum([
            'Folder',
            'Location',
            'Factory',
            'House',
            'Office',
            'Machine',
            'VirtualMeter',
            'ElecticityFolder',
            'WaterFolder',
            'HeatFolder',
            'GasFolder',
            'TemperatureFolder',
            'Sun',
            'Light',
            'Ice',
            'Sofa',
            'Food',
            'Coffee',
            'Car',
            'ChargingStation',
            'Meter',
            'User',
            'Trash',
            'GridPhotovoltaicPowerSystem',
          ])
          .exactOptional()
          .openapi({ description: 'The folder type of the item' }),
        Icon: z
          .string()
          .exactOptional()
          .openapi({ description: 'The path to the Icon of this folder' }),
        Id: z.string().exactOptional().openapi({ description: 'The id of the folder menu item' }),
        MeterSerialNumber: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The serial number if the folder menu item is a meter. \r\n            Serial number is handled as a string, as javascript on client side cannot handle long integers properly.',
          }),
        Name: z.string().exactOptional().openapi({ description: 'The Name of the item' }),
        UserId: z
          .string()
          .exactOptional()
          .openapi({ description: 'The ID of the user of this folder (only for foldertype user)' }),
      })
      .openapi({ description: 'A folder menu item', required: [] }),
  )
  .openapi('FolderMenuItem')

const FolderMenuConfigurationSchema = z
  .object({
    BrowserTimeZoneName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time zone name taken from the browser' }),
    BrowserUtcTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The UTC time taken from the browser' }),
    Items: z.array(FolderMenuItemSchema).exactOptional(),
  })
  .openapi({
    description: "Container Class for the Web API representing a folder menu and it's items",
    required: [],
  })
  .openapi('FolderMenuConfiguration')

const FolderSettingsSchema = z
  .object({
    Description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Description of the folder or meter' }),
    Enable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag if the meter is enabled (folder not supported yet)' }),
    FolderType: z
      .enum([
        'Folder',
        'Location',
        'Factory',
        'House',
        'Office',
        'Machine',
        'VirtualMeter',
        'ElecticityFolder',
        'WaterFolder',
        'HeatFolder',
        'GasFolder',
        'TemperatureFolder',
        'Sun',
        'Light',
        'Ice',
        'Sofa',
        'Food',
        'Coffee',
        'Car',
        'ChargingStation',
        'Meter',
        'User',
        'Trash',
        'GridPhotovoltaicPowerSystem',
      ])
      .exactOptional()
      .openapi({ description: 'The Type of the folder' }),
    Name: z.string().exactOptional().openapi({ description: 'The Name of the folder or meter' }),
    ParentFolderId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The parent folder ID of this item' }),
    SerialNumber: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'The serial number (meter only)' }),
    UseableForVirtualBillingMeters: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag if the meter is usable for virtual billing meters (e.g. washroom)',
      }),
    ValueCorrection: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The value correction on this meter' }),
    ValueCorrectionParentFolder: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The value correction on all parent folders. but not on the meter itself',
      }),
    VisualizationName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the visualization of the folder' }),
  })
  .openapi({ description: 'Container for the folder settings', required: [] })
  .openapi('FolderSettings')

const InputConfigurationContainerSchema = z
  .object({
    Name: z.string().exactOptional().openapi({ description: 'The Name of the Input' }),
    Number: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of the Input. (1 for Input 1)' }),
    OffText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visualization text for an OFF action' }),
    OnText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The visualization text for an ON action' }),
    Type: z
      .enum(['TariffInput', 'DigitalInput'])
      .exactOptional()
      .openapi({ description: 'The Type of the output' }),
  })
  .openapi({ description: 'Configuration for the input of a meter (digital inputs)', required: [] })
  .openapi('InputConfigurationContainer')

const InputInformationSchema = z
  .object({
    Name: z.string().exactOptional().openapi({ description: 'The Name of the Input' }),
    Number: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The Number of this Input. Use this as ID to switch it on or off.' }),
  })
  .openapi({ description: 'Informations about the Inputs of a Meter or Folder', required: [] })
  .openapi('InputInformation')

const MBusDataSchema = z
  .object({
    Date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The Date of the M-BUS Telegram Readout (in UTC). If this is null the Server Time is used.',
      }),
    Telegram: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The M-BUS Telegram as Hex string. \r\n            Example: 68 1F 1F 68 08 02 72 78 56 34 12 24 40 01 07 55 00 00 00 03 13 15 31 00 DA 02 3B 13 01 8B 60 04 37 18 02 18 16',
      }),
  })
  .openapi({ required: [] })
  .openapi('MBusData')

const OutputInformationSchema = z
  .object({
    ActionType: z
      .enum(['OnOffAction', 'AnalogAction'])
      .exactOptional()
      .openapi({ description: 'The type of the Output' }),
    Name: z.string().exactOptional().openapi({ description: 'The Name of the Output' }),
    Number: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The Number of this Output. Use this as ID to switch it on or off.',
      }),
    ObisCode: z.string().exactOptional().openapi({ description: 'The Obis Code for this Output' }),
  })
  .openapi({ description: 'Informations about the Outputs of a Meter or Folder', required: [] })
  .openapi('OutputInformation')

const MeterFolderInformationSchema = z
  .object({
    CommunicationModuleFirmwareVersion: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The Version of the Communication Module (if exists)' }),
    CommunicationModuleHardwareVersion: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The Version of the Communication Module (if exists)' }),
    FirmwareVersion: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The Firmware Version of a Meter' }),
    HardwareVersion: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The Hardware Version of a Meter.' }),
    InputInformations: z
      .array(InputInformationSchema)
      .exactOptional()
      .openapi({ description: 'Informations about the available Inputs' }),
    IsFolder: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Flag if it's a Folder or a Meter" }),
    Name: z.string().exactOptional().openapi({ description: 'Name of the Meter or Folder' }),
    OutputInformations: z
      .array(OutputInformationSchema)
      .exactOptional()
      .openapi({ description: 'Informations about the available Outputs' }),
  })
  .openapi({ description: 'Container Class for the Web API', required: [] })
  .openapi('MeterFolderInformation')

const MeterFolderInformationToPostSchema = z
  .object({
    Id: z.string().exactOptional().openapi({ description: 'The ID of the device or folder' }),
    Name: z.string().exactOptional().openapi({ description: 'Name of the Meter or Folder' }),
  })
  .openapi({ description: 'Container for a Meter or Folder Information to Post', required: [] })
  .openapi('MeterFolderInformationToPost')

const ObjectSchema = z.object({}).openapi('Object')

const OutputConfigurationContainerSchema = z
  .object({
    DigitalOutputNoConnectionAction: z
      .enum(['Nothing', 'TurnOff', 'TurnOn', 'SetPwmValue'])
      .exactOptional()
      .openapi({ description: 'The Action when the device has lost the connection' }),
    Name: z.string().exactOptional().openapi({ description: 'The Name of the Output' }),
    Number: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of the Output. (1 for Output 1, 2 for Output 2)' }),
    S0PulseValue: z
      .enum(['PulseValue1000Kwh', 'PulseValue10000Kwh'])
      .exactOptional()
      .openapi({ description: 'The S0 Pulse Value' }),
    Type: z
      .enum([
        'ImpulseOutputActiveEnergy',
        'ImpulseOutputActiveEnergyImport',
        'ImpulseOutputActiveEnergyExport',
        'ImpulseOutputReactiveEnergy',
        'DigitalOutput',
        'AnalogPwmSignalOutput',
        'Disabled',
      ])
      .exactOptional()
      .openapi({ description: 'The Type of the output' }),
  })
  .openapi({
    description: 'Configuration for the outputs of a meter (analog/digital outputs)',
    required: [],
  })
  .openapi('OutputConfigurationContainer')

const PicoChargingDataSchema = z
  .object({
    ActiveChargingEnergy: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The energy used by this active charging (in kWh)' }),
    ActiveChargingPower: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The power of the active charging (in kW)' }),
    ConnectionMode: z
      .enum([
        'NetworkToCloudConnectionMode_NoConnection',
        'NetworkToCloudConnectionMode_DirectWiFiConnection',
        'NetworkToCloudConnectionMode_GPRSConnection',
        'NetworkToCloudConnectionMode_NBIotConnection',
        'NetworkToCloudConnectionMode_LteCatM1Connection',
        'NetworkToCloudConnectionMode_MeshWiFiConnection',
        'NetworkToCloudConnectionMode_MeshMobileConnection',
      ])
      .exactOptional()
      .openapi({ description: 'The mode how this station is connected to the cloud' }),
    Duration: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The duration of this charging in seconds' }),
    LastWarningOrError: z
      .enum([
        'MeterDataloggerEvent',
        'MeterRestart',
        'PowerDown',
        'MissingPhaseL1',
        'MissingPhaseL2',
        'MissingPhaseL3',
        'TamperDetectionCover',
        'MagneticFieldDetection',
        'ClockAdjusted',
        'Overvoltage',
        'Undervoltage',
        'OvervoltageL1',
        'OvervoltageL2',
        'OvervoltageL3',
        'ChargingTransaction',
        'PicoErrorControllerPanic',
        'PicoErrorMidServicePanic',
        'PicoWarningRcdTriggered',
        'PicoWarningCableLockError',
        'PicoWarningDiodeFailure',
        'PicoWarningOverload',
        'PicoWarningHighTemperature',
      ])
      .exactOptional()
      .openapi({
        description:
          'The last warning or error of the station. This message is only shown if the warning or error happend in the last 5 minutes.',
      }),
    LastWarningOrErrorMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'The message of the last warning or error of the station.' }),
    LastWarningOrErrorTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the LastWarningOrError happend' }),
    LoadSheddingState: z
      .enum(['MaxCurrent', 'HalfCurrent', 'MinCurrent', 'NoCurrent'])
      .exactOptional()
      .openapi({
        description:
          'Max. dynamic current (e.g. set over API or Modbus TCP) of this station or the loadmanagement group of the station if the station is in a group. in A',
      }),
    LoadmanagementGroupName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the loadmanagement group. Or string.empty if the station is not in a group',
      }),
    MaxAllowedChargingCurrent: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Max allowed charging current in A' }),
    MaxDynamicCurrent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Max. dynamic current (e.g. set over API or Modbus TCP) of this station or the loadmanagement group of the station if the station is in a group. in A',
      }),
    MaxLoadmanagementGroupCurrent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Max. current of the loadmanagement group of this station (if there is any) in A',
      }),
    MaxStationCurrent: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Max. current of the station in A' }),
    MinStationCurrent: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Min. current of the station in A' }),
    State: z
      .enum([
        'Booting',
        'ReadyNoCarConnected',
        'ReadyCarConnected',
        'StartedWaitForCar',
        'Charging',
        'Installation',
        'Authorize',
        'Offline',
      ])
      .exactOptional()
      .openapi({ description: 'The state of the charging station', readOnly: true }),
    ValueDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date of this values' }),
  })
  .openapi({ description: 'Container class for the pico charging station API', required: [] })
  .openapi('PicoChargingData')

const PicoChargingHistoryDataSchema = z
  .object({
    Duration: z.int32().exactOptional().openapi({ description: 'The duration in seconds' }),
    EnergyUsed: z.float64().exactOptional().openapi({ description: 'The energy used (in kWh)' }),
    StartTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The starttime of the charging (in UTC)' }),
  })
  .openapi({ description: 'Api container for the charging station history', required: [] })
  .openapi('PicoChargingHistoryData')

const PicoLoadmanagementGroupDtoSchema = z
  .object({
    Id: z.string().exactOptional().openapi({ description: 'The ID of the loadmanagement group' }),
    MaxCurrent: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The max current of this loadmanagement group' }),
    Name: z.string().exactOptional().openapi({ description: 'The name of the station' }),
    NumberOfStations: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of assigned stations' }),
  })
  .openapi({ description: 'DTO for the pico loadmanagement group', required: [] })
  .openapi('PicoLoadmanagementGroupDto')

const PicoSettingsDtoSchema = z
  .object({
    AuthenticationType: z
      .enum(['None', 'Backend'])
      .exactOptional()
      .openapi({ description: 'The authentication type' }),
    CarIdDetection: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag if the car id detection is enabled' }),
    DisplayBrightness: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Brightness of the LCD Matrix display. 0 = minimum, 255 = maximum',
      }),
    DnsName: z
      .string()
      .exactOptional()
      .openapi({ description: "The DNS name of the pico's internal ip" }),
    FixCableLockEnable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable the fix lock of the charging cable' }),
    IdleImageUrl: z.string().exactOptional().openapi({ description: 'The url of the idle image' }),
    InternalIp: z.string().exactOptional().openapi({ description: 'The internal IP address' }),
    LoadmanagementGroupId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the loadmanagement group' }),
    MaxCurrent: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The max current of this station (in A)' }),
    MinCurrent: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The max current of this station (in A)' }),
    ModbusTcp: z.boolean().exactOptional().openapi({ description: 'Flag if ModbusTcp is enabled' }),
    Name: z.string().exactOptional().openapi({ description: 'The name of the station' }),
    SerialNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Serial number of the station' }),
  })
  .openapi({ description: 'DTO for the pico charging station settings', required: [] })
  .openapi('PicoSettingsDto')

const RegisterRealtimeApiDataSchema = z
  .object({
    ApiUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL of your endpoint. To this endpoint all the values are send to.',
      }),
    BasicAuthPassword: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Password (basic auth) of your endpoint. Leave empty of none.' }),
    BasicAuthUsername: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Username (basic auth) of your endpoint. Leave empty of none.' }),
    Id: z.string().exactOptional().openapi({ description: 'The ID of the registration' }),
    MeterId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the Meter. Just used if the RegistrationType is "SingleMeterRegistration".',
      }),
    RegistrationType: z
      .enum(['Disabled', 'SingleMeterRegistration', 'UserRegistration'])
      .exactOptional()
      .openapi({ description: 'The Type of this registration (per meter, per user, ...)' }),
    SerialNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The serial number of the Meter. Just used if the RegistrationType is "SingleMeterRegistration" and the MeterId is null. \r\n            Example: 1 SME 01 63000000 or 6300000',
      }),
  })
  .openapi({ description: 'Container class for the register realtime API API', required: [] })
  .openapi('RegisterRealtimeApiData')

const SwitchConfigurationContainerSchema = z
  .object({
    CanSwitchOff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag if the switch can be turned off or is always on.' }),
    Number: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of the phase. (e.g. 1 for Phase L1)' }),
  })
  .openapi({ description: 'The configuration for a phase switch', required: [] })
  .openapi('SwitchConfigurationContainer')

const SmartMeDeviceConfigurationContainerSchema = z
  .object({
    DeviceEncryptionKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The encryption key used to decrypt messages received from an external meter (used only for the smart-me modules)',
      }),
    DevicePinCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'PIN code to enter on a external meter (e.g. for the FNN meters)' }),
    DnsUpdateState: z
      .enum(['NoUpdate', 'DnsUpdatePublicIp', 'DnsUpdateInternalIp'])
      .exactOptional()
      .openapi({
        description:
          'Configuration of the dynamic DNS service. More information: http://wiki.smart-me.com/index.php/Dynamisches_DNS',
      }),
    EnableModbusTcp: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enables or disables Modbus TCP (if the meter supports it).' }),
    Id: z.string().exactOptional().openapi({ description: 'The ID of the device' }),
    InputConfiguration: z
      .array(InputConfigurationContainerSchema)
      .exactOptional()
      .openapi({ description: 'The configuration for the intput outputs' }),
    OutputConfiguration: z
      .array(OutputConfigurationContainerSchema)
      .exactOptional()
      .openapi({ description: 'The configuration for the external outputs' }),
    ShowReactiveEnergy: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Shows the reactive energy values (if the meter supports it).' }),
    SwitchConfiguration: z
      .array(SwitchConfigurationContainerSchema)
      .exactOptional()
      .openapi({ description: 'The configuration for the phase switches' }),
    UploadInterval: z
      .enum([
        'UploadInterval_1s',
        'UploadInterval_5s',
        'UploadInterval_10s',
        'UploadInterval_30s',
        'UploadInterval_60s',
        'UploadInterval_5min',
        'UploadInterval_15min',
        'UploadInterval_30min',
        'UploadInterval_60min',
        'UploadInterval_6h',
        'UploadInterval_12h',
        'UploadInterval_24h',
      ])
      .exactOptional()
      .openapi({
        description:
          'Number of seconds the device will upload the data. For smaller values maybe a professional license is needed.',
      }),
  })
  .openapi({ description: 'API Container class for the meter configuration', required: [] })
  .openapi('SmartMeDeviceConfigurationContainer')

const SubUserDataSchema = z
  .object({
    AccessEndDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The end date. until this date the user has access' }),
    AccessTimeStartDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The start date. From this date the user has access' }),
    Email: z.string().exactOptional().openapi({ description: 'The Email adress' }),
    Id: z.string().exactOptional().openapi({ description: 'The ID of the user' }),
    NewPassword: z
      .string()
      .exactOptional()
      .openapi({ description: 'If set this is used a new password' }),
    PermissionLevel: z
      .enum(['SelectedFolderAndSubfoldersMeters', 'SelectedFolderOnly'])
      .exactOptional()
      .openapi({ description: 'The permission level of the user' }),
    Username: z.string().exactOptional().openapi({ description: 'The username' }),
  })
  .openapi({ description: 'Container data for the sub user', required: [] })
  .openapi('SubUserData')

const UserSchema: z.ZodType<UserType> = z
  .lazy(() =>
    z
      .object({
        ChildUsers: z
          .array(UserSchema)
          .exactOptional()
          .openapi({ description: 'The Users created by this users.' }),
        Email: z.string().exactOptional().openapi({ description: 'The EMail Address of the User' }),
        Id: z
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
          .openapi({ type: 'integer', format: 'int64', description: 'The ID of the User' }),
        IdAsString: z
          .string()
          .exactOptional()
          .openapi({ description: 'The ID of the user as string' }),
        IsAdmin: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Flag if this User is an Admin User' }),
        Permissions: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'Additional Permissions' }),
        Username: z.string().exactOptional().openapi({ description: 'The Username of the User' }),
      })
      .openapi({ description: 'Container Class for the Web API', required: [] }),
  )
  .openapi('User')

const VMeterToActivateSchema = z
  .object({
    SerialNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Serialnumber of the Meter to activate.' }),
  })
  .openapi({ description: 'Actives a virtual Meter', required: [] })
  .openapi('VMeterToActivate')

const VMeterToDeactivateSchema = z
  .object({
    ID: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the Virtual meter to deactivate' }),
  })
  .openapi({ description: 'Deactivates a virtual Meter', required: [] })
  .openapi('VMeterToDeactivate')

const ValueDataSchema = z
  .object({
    Obis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Obis code of this value. \r\n            A description you can find here:\r\n            http://wiki.smart-me.com/index.php/Obis_codes',
      }),
    Value: z.float64().exactOptional().openapi({ description: 'The Value' }),
  })
  .openapi({ description: 'API Container for a (Device) Value', required: [] })
  .openapi('ValueData')

const ValuesDataSchema = z
  .object({
    Date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The Date of the Value' }),
    DeviceId: z.string().exactOptional().openapi({ description: 'The ID of the device' }),
    Values: z.array(ValueDataSchema).exactOptional().openapi({ description: 'All values' }),
  })
  .openapi({ description: 'API Container for a Meter Value', required: [] })
  .openapi('ValuesData')

const VirtualTariffSchema = z
  .object({
    Factor: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Says how many of the active power is used in this tariff. This is calculated from the last meter values.',
      }),
    Id: z.string().exactOptional(),
    Name: z.string().exactOptional(),
    Type: z.enum(['Battery', 'Solar', 'Normal']).exactOptional(),
    Unit: z.string().exactOptional(),
    Value: z.float64().exactOptional().openapi({ description: 'The Counter Value of this tariff' }),
  })
  .openapi({ required: [] })
  .openapi('VirtualTariff')

const VirtualTariffConsumptionDataSchema = z
  .object({
    Consumption: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The consumption (e.g. kWh) of this tariff' }),
    Currency: z.string().exactOptional().openapi({ description: 'The currency of the price' }),
    Name: z.string().exactOptional().openapi({ description: 'The Name of this virtual tariff' }),
    Price: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The price of the energy in this timerange' }),
    TariffType: z
      .enum(['Battery', 'Solar', 'Normal'])
      .exactOptional()
      .openapi({ description: 'The type of the virtual tariff (e.g. solar)' }),
  })
  .openapi({ description: 'Container class for the virtual tariff consumption', required: [] })
  .openapi('VirtualTariffConsumptionData')

const VirtualTariffsOfFolderSchema = z
  .object({
    Date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The DateTime (UTC) of this virtual tarfifs', readOnly: true }),
    FolderId: z.string().exactOptional().openapi({ readOnly: true }),
    Name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of this folder', readOnly: true }),
    VirtualTariffs: z.array(VirtualTariffSchema).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('VirtualTariffsOfFolder')

const BasicSecurityScheme = {
  description: 'Basic HTTP Authentication',
  scheme: 'basic',
  type: 'http',
}

export const putApiAccessTokenRoute = createRoute({
  method: 'put',
  path: '/api/AccessToken',
  tags: ['AccessToken'],
  summary: 'Creates a Access Token to write on a Card (e.g. NFC)',
  description: 'Creates a Access Token to write on a Card (e.g. NFC)',
  operationId: 'AccessToken_Put',
  request: {
    body: {
      content: {
        'application/json': { schema: AccessTokenToPutSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              CardId: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64', description: 'The ID of the Card' }),
              UserId: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'The ID of the User. The credentials provided must have permission to edit the user.\r\n            If no ID is provided, the user in the credentials is taken.',
                }),
            })
            .openapi({
              description: 'Container Class for the Put action of an Access Token',
              required: [],
            }),
        },
        'application/xml': { schema: AccessTokenToPutSchema },
        'text/json': { schema: AccessTokenToPutSchema },
        'text/xml': { schema: AccessTokenToPutSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
  },
})

export const getApiAccountLoginRoute = createRoute({
  method: 'get',
  path: '/api/Account/login',
  tags: ['Account'],
  operationId: 'Account_Login',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ObjectSchema },
        'application/xml': { schema: ObjectSchema },
        'text/json': { schema: ObjectSchema },
        'text/xml': { schema: ObjectSchema },
      },
    },
  },
})

export const postApiAccountLoginRoute = createRoute({
  method: 'post',
  path: '/api/Account/login',
  tags: ['Account'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ObjectSchema },
        'application/xml': { schema: ObjectSchema },
        'text/json': { schema: ObjectSchema },
        'text/xml': { schema: ObjectSchema },
      },
    },
  },
})

export const postApiActionsRoute = createRoute({
  method: 'post',
  path: '/api/Actions',
  tags: ['Actions'],
  summary: 'Set an action for the specified device.',
  description: 'Set an action for the specified device.',
  operationId: 'Actions_Post',
  request: {
    body: {
      description: 'The Action Data',
      content: {
        'application/json': { schema: ActionToPostSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Actions: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        ObisCode: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The ObisCode (ID) of the Action' }),
                        Value: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The Value to Post' }),
                      })
                      .openapi({ description: 'Container class for an action item', required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'List with all Actions for this device' }),
              DeviceID: z.string().exactOptional().openapi({ description: 'The ID of the Device' }),
            })
            .openapi({ description: 'Container Class for an action to post', required: [] }),
        },
        'application/xml': { schema: ActionToPostSchema },
        'text/json': { schema: ActionToPostSchema },
        'text/xml': { schema: ActionToPostSchema },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiActionsIdRoute = createRoute({
  method: 'get',
  path: '/api/Actions/{id}',
  tags: ['Actions'],
  summary: 'Gets all available Actions of a Device',
  description: 'Gets all available Actions of a Device',
  operationId: 'Actions_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the device',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(ActionInformationSchema) },
        'application/xml': { schema: z.array(ActionInformationSchema) },
        'text/json': { schema: z.array(ActionInformationSchema) },
        'text/xml': { schema: z.array(ActionInformationSchema) },
      },
    },
  },
})

export const getApiAdditionalDeviceInformationIdRoute = createRoute({
  method: 'get',
  path: '/api/AdditionalDeviceInformation/{id}',
  tags: ['AdditionalDeviceInformation'],
  summary: 'Gets the additional information (e.g. Firmware Version) about a device.',
  description: 'Gets the additional information (e.g. Firmware Version) about a device.',
  operationId: 'AdditionalDeviceInformation_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the device',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: AdditionalDeviceInformationSchema },
        'text/json': { schema: AdditionalDeviceInformationSchema },
      },
    },
  },
})

export const getApiCustomDeviceRoute = createRoute({
  method: 'get',
  path: '/api/CustomDevice',
  tags: ['CustomDevice'],
  summary: 'Gets all Custom Devices',
  description: 'Gets all Devices',
  operationId: 'CustomDevice_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(CustomDeviceToPostSchema) },
        'application/xml': { schema: z.array(CustomDeviceToPostSchema) },
        'text/json': { schema: z.array(CustomDeviceToPostSchema) },
        'text/xml': { schema: z.array(CustomDeviceToPostSchema) },
      },
    },
  },
})

export const postApiCustomDeviceRoute = createRoute({
  method: 'post',
  path: '/api/CustomDevice',
  tags: ['CustomDevice'],
  summary: "Creates or updates a Custom Device or updates it's values.",
  description:
    "Creates or updates a Custom Device or updates it's values.\r\n            A Custom Device can be any device that like to add some measurement values to the smart-me Cloud.\r\n            Only use a custom device for all non meters.\r\n            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.\r\n            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)",
  operationId: 'CustomDevice_Post',
  request: {
    body: {
      description: 'Device object with all the data',
      content: {
        'application/json': { schema: CustomDeviceToPostSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Id: z.string().exactOptional().openapi({ description: 'The ID of the device' }),
              Name: z.string().exactOptional().openapi({ description: 'The Name of the Device' }),
              Serial: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64', description: 'The Serial number' }),
              ValueDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'The Date of the Value (in UTC). If this is null the Server Time is used.',
                }),
              Values: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Name: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The Name of the Value.' }),
                        Value: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.float64(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The Value' }),
                      })
                      .openapi({
                        description: 'Container Class for the Custom Device Values',
                        required: [],
                      }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'The Values of the custom Device' }),
            })
            .openapi({ description: 'Container Class for the Web API', required: [] }),
        },
        'application/xml': { schema: CustomDeviceToPostSchema },
        'text/json': { schema: CustomDeviceToPostSchema },
        'text/xml': { schema: CustomDeviceToPostSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: CustomDeviceToPostSchema },
        'application/xml': { schema: CustomDeviceToPostSchema },
        'text/json': { schema: CustomDeviceToPostSchema },
        'text/xml': { schema: CustomDeviceToPostSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApiCustomDeviceIdRoute = createRoute({
  method: 'get',
  path: '/api/CustomDevice/{id}',
  tags: ['CustomDevice'],
  summary: "Gets a Custom Device by it's ID",
  description: "Gets a Device by it's ID",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the device',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: CustomDeviceToPostSchema },
        'application/xml': { schema: CustomDeviceToPostSchema },
        'text/json': { schema: CustomDeviceToPostSchema },
        'text/xml': { schema: CustomDeviceToPostSchema },
      },
    },
  },
})

export const getApiDeviceBySerialRoute = createRoute({
  method: 'get',
  path: '/api/DeviceBySerial',
  tags: ['DeviceBySerial'],
  summary: 'Gets a Device by it\'s Serial Number. The Serial is the part before the "-".',
  description: 'Gets a Device by it\'s Serial Number. The Serial is the part before the "-".',
  operationId: 'DeviceBySerial_Get',
  request: {
    query: z.object({
      serial: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The Serial Number of the device',
            in: 'query',
            name: 'serial',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: DeviceSchema },
        'application/xml': { schema: DeviceSchema },
        'text/json': { schema: DeviceSchema },
        'text/xml': { schema: DeviceSchema },
      },
    },
  },
})

export const getApiDevicesRoute = createRoute({
  method: 'get',
  path: '/api/Devices',
  tags: ['Devices'],
  summary: 'Gets all Devices',
  description: 'Gets all Devices',
  operationId: 'Devices_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(DeviceSchema) },
        'application/xml': { schema: z.array(DeviceSchema) },
        'text/json': { schema: z.array(DeviceSchema) },
        'text/xml': { schema: z.array(DeviceSchema) },
      },
    },
  },
})

export const postApiDevicesRoute = createRoute({
  method: 'post',
  path: '/api/Devices',
  tags: ['Devices'],
  summary: "Creates or updates a Device or updates it's values.",
  description:
    "Creates or updates a Device or updates it's values. \r\n            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.\r\n            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)",
  operationId: 'Devices_Post',
  request: {
    body: {
      description: 'Device object with all the data',
      content: {
        'application/json': { schema: DeviceToPostSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ActivePower: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The Active Power or current flow rate. In kW or m3/h' }),
              CounterReading: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({
                  description: 'The Meter Counter Reading (Total Energy used) in kWh or m3.',
                }),
              CounterReadingExport: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The Meter Counter Reading only export' }),
              CounterReadingExportT1: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The Meter Counter Reading only export (Tariff 1)' }),
              CounterReadingExportT2: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The Meter Counter Reading only export (Tariff 2)' }),
              CounterReadingT1: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The Meter Counter Reading Tariff 1 in kWh or m3.' }),
              CounterReadingT2: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The Meter Counter Reading Tariff 2 in kWh or m3.' }),
              Current: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The Current (in A)' }),
              CurrentL1: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The Current Phase L1 (in A)' }),
              CurrentL2: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The Current Phase L2 (in A)' }),
              CurrentL3: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The Current Phase L3 (in A)' }),
              DeviceEnergyType: z
                .enum([
                  'MeterTypeUnknown',
                  'MeterTypeElectricity',
                  'MeterTypeWater',
                  'MeterTypeGas',
                  'MeterTypeHeat',
                  'MeterTypeHCA',
                  'MeterTypeAllMeters',
                  'MeterTypeTemperature',
                  'MeterTypeMBusGateway',
                  'MeterTypeRS485Gateway',
                  'MeterTypeCustomDevice',
                  'MeterTypeCompressedAir',
                  'MeterTypeSolarLog',
                  'MeterTypeVirtualMeter',
                  'MeterTypeWMBusGateway',
                ])
                .exactOptional()
                .openapi({ description: 'The Energy Type of this device' }),
              DigitalInput1: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'The digital input number 1' }),
              Id: z.string().exactOptional().openapi({ description: 'The ID of the device' }),
              MeterSubType: z
                .enum([
                  'MeterSubTypeUnknown',
                  'MeterSubTypeCold',
                  'MeterSubTypeHeat',
                  'MeterSubTypeChargingStation',
                  'MeterSubTypeElectricity',
                  'MeterSubTypeWater',
                  'MeterSubTypeGas',
                  'MeterSubTypeElectricityHeat',
                  'MeterSubTypeTemperature',
                  'MeterSubTypeVirtualBattery',
                ])
                .exactOptional()
                .openapi({ description: 'The Sub Type of this Meter.' }),
              Name: z.string().exactOptional().openapi({ description: 'The Name of the Device' }),
              PowerFactor: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The Power Factor (cos phi). Range: 0 - 1' }),
              PowerFactorL1: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The Power Factor (cos phi) Phase L1. Range: 0 - 1' }),
              PowerFactorL2: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The Power Factor (cos phi) Phase L2. Range: 0 - 1' }),
              PowerFactorL3: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The Power Factor (cos phi) Phase L3. Range: 0 - 1' }),
              Serial: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64', description: 'The Serial number' }),
              Temperature: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The Temperature (in degree celsius)' }),
              ValueDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'The Date of the Value (in UTC). If this is null the Server Time is used.',
                }),
              Voltage: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The Voltage (in V)' }),
              VoltageL1: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The Voltage Phase L1 (in V)' }),
              VoltageL2: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The Voltage Phase L2 (in V)' }),
              VoltageL3: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The Voltage Phase L3 (in V)' }),
            })
            .openapi({ description: 'Container Class for the Web API', required: [] }),
        },
        'application/xml': { schema: DeviceToPostSchema },
        'text/json': { schema: DeviceToPostSchema },
        'text/xml': { schema: DeviceToPostSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: DeviceToPostSchema },
        'application/xml': { schema: DeviceToPostSchema },
        'text/json': { schema: DeviceToPostSchema },
        'text/xml': { schema: DeviceToPostSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApiDevicesIdRoute = createRoute({
  method: 'get',
  path: '/api/Devices/{id}',
  tags: ['Devices'],
  summary: "Gets a Device by it's ID",
  description: "Gets a Device by it's ID",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the device',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: DeviceSchema },
        'application/xml': { schema: DeviceSchema },
        'text/json': { schema: DeviceSchema },
        'text/xml': { schema: DeviceSchema },
      },
    },
  },
})

export const putApiDevicesIdRoute = createRoute({
  method: 'put',
  path: '/api/Devices/{id}',
  tags: ['Devices'],
  summary:
    'Updates the On/Off Switch on a device. \r\n            For new implementations please use the "actions" command',
  description:
    'Updates the On/Off Switch on a device\r\n            For new implementations please use the "actions" command',
  operationId: 'Devices_Put',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the device',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      switchState: z
        .stringbool()
        .openapi({
          param: {
            description: 'The new state of the switch',
            in: 'query',
            name: 'switchState',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
      switchNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of the switch if there are multiple (1 for L1, 3 for L3)',
            in: 'query',
            name: 'switchNumber',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ObjectSchema },
        'application/xml': { schema: ObjectSchema },
        'text/json': { schema: ObjectSchema },
        'text/xml': { schema: ObjectSchema },
      },
    },
    401: { description: 'Unauthorized' },
    405: { description: 'MethodNotAllowed' },
  },
})

export const getApiDevicesByEnergyRoute = createRoute({
  method: 'get',
  path: '/api/DevicesByEnergy',
  tags: ['DevicesByEnergy'],
  summary: 'Gets all Devices for an Energy Type',
  description: 'Gets all Devices for an Energy Type',
  operationId: 'DevicesByEnergy_Get',
  request: {
    query: z.object({
      meterEnergyType: z
        .enum([
          'MeterTypeUnknown',
          'MeterTypeElectricity',
          'MeterTypeWater',
          'MeterTypeGas',
          'MeterTypeHeat',
          'MeterTypeHCA',
          'MeterTypeAllMeters',
          'MeterTypeTemperature',
          'MeterTypeMBusGateway',
          'MeterTypeRS485Gateway',
          'MeterTypeCustomDevice',
          'MeterTypeCompressedAir',
          'MeterTypeSolarLog',
          'MeterTypeVirtualMeter',
          'MeterTypeWMBusGateway',
        ])
        .openapi({
          param: {
            in: 'query',
            name: 'meterEnergyType',
            required: true,
            schema: {
              enum: [
                'MeterTypeUnknown',
                'MeterTypeElectricity',
                'MeterTypeWater',
                'MeterTypeGas',
                'MeterTypeHeat',
                'MeterTypeHCA',
                'MeterTypeAllMeters',
                'MeterTypeTemperature',
                'MeterTypeMBusGateway',
                'MeterTypeRS485Gateway',
                'MeterTypeCustomDevice',
                'MeterTypeCompressedAir',
                'MeterTypeSolarLog',
                'MeterTypeVirtualMeter',
                'MeterTypeWMBusGateway',
              ],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(DeviceSchema) },
        'application/xml': { schema: z.array(DeviceSchema) },
        'text/json': { schema: z.array(DeviceSchema) },
        'text/xml': { schema: z.array(DeviceSchema) },
      },
    },
  },
})

export const getApiDevicesBySubTypeRoute = createRoute({
  method: 'get',
  path: '/api/DevicesBySubType',
  tags: ['DevicesBySubType'],
  summary: "Gets all Devices by it's Sub Type (e.g. E-Charging Station)",
  description: "Gets all Devices by it's Sub Type (e.g. E-Charging Station)",
  operationId: 'DevicesBySubType_Get',
  request: {
    query: z.object({
      meterSubType: z
        .enum([
          'MeterSubTypeUnknown',
          'MeterSubTypeCold',
          'MeterSubTypeHeat',
          'MeterSubTypeChargingStation',
          'MeterSubTypeElectricity',
          'MeterSubTypeWater',
          'MeterSubTypeGas',
          'MeterSubTypeElectricityHeat',
          'MeterSubTypeTemperature',
          'MeterSubTypeVirtualBattery',
        ])
        .openapi({
          param: {
            in: 'query',
            name: 'meterSubType',
            required: true,
            schema: {
              enum: [
                'MeterSubTypeUnknown',
                'MeterSubTypeCold',
                'MeterSubTypeHeat',
                'MeterSubTypeChargingStation',
                'MeterSubTypeElectricity',
                'MeterSubTypeWater',
                'MeterSubTypeGas',
                'MeterSubTypeElectricityHeat',
                'MeterSubTypeTemperature',
                'MeterSubTypeVirtualBattery',
              ],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(DeviceSchema) },
        'application/xml': { schema: z.array(DeviceSchema) },
        'text/json': { schema: z.array(DeviceSchema) },
        'text/xml': { schema: z.array(DeviceSchema) },
      },
    },
  },
})

export const getApiFastSendDeviceValuesIdRoute = createRoute({
  method: 'get',
  path: '/api/FastSendDeviceValues/{id}',
  tags: ['FastSendDeviceValues'],
  summary:
    "Force a device to send the data every second (if supported). This for about 30s.\r\n            Don't use this call to force a device to send the data every second for a longer time.",
  operationId: 'FastSendDeviceValues_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiFolderIdRoute = createRoute({
  method: 'get',
  path: '/api/Folder/{id}',
  tags: ['Folder'],
  summary: 'Gets the Values for a folder or a meter',
  description: 'Gets the Values for a folder or a meter',
  operationId: 'Folder_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: FolderDataSchema },
        'text/json': { schema: FolderDataSchema },
      },
    },
  },
})

export const getApiFolderMenuRoute = createRoute({
  method: 'get',
  path: '/api/FolderMenu',
  tags: ['FolderMenu'],
  summary: 'Gets the folder menu items (each item might contain child items)',
  operationId: 'FolderMenu_Get',
  request: {
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '(optional) Filter for the folders and meters: \r\n            all: load everything\r\n            assigned: load only folders and meters that are assigend to a folder\r\n            unassigend: load only meters that are not assigend to a folder\r\n            user: load only folder and all users assigned to this folders\r\n            subuserlist: load all subusers as a list',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: FolderMenuConfigurationSchema },
        'application/xml': { schema: FolderMenuConfigurationSchema },
        'text/json': { schema: FolderMenuConfigurationSchema },
        'text/xml': { schema: FolderMenuConfigurationSchema },
      },
    },
  },
})

export const postApiFolderMenuRoute = createRoute({
  method: 'post',
  path: '/api/FolderMenu',
  tags: ['FolderMenu'],
  summary: 'Creates and updates the folder menu items',
  operationId: 'FolderMenu_Post',
  request: {
    body: {
      content: {
        'application/json': { schema: FolderMenuConfigurationSchema },
        'application/x-www-form-urlencoded': { schema: FolderMenuConfigurationSchema },
        'application/xml': { schema: FolderMenuConfigurationSchema },
        'text/json': { schema: FolderMenuConfigurationSchema },
        'text/xml': { schema: FolderMenuConfigurationSchema },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiHealthRoute = createRoute({
  method: 'get',
  path: '/api/Health',
  tags: ['Health'],
  summary:
    'A method returning HTTP 200 OK when queried.\r\n            It is used by Kubernetes probes to determine whether the app is healthy.',
  operationId: 'Health_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ObjectSchema },
        'application/xml': { schema: ObjectSchema },
        'text/json': { schema: ObjectSchema },
        'text/xml': { schema: ObjectSchema },
      },
    },
  },
})

export const postApiMBusRoute = createRoute({
  method: 'post',
  path: '/api/MBus',
  tags: ['MBus'],
  summary:
    'M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.\r\n            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.',
  description:
    'M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.\r\n            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.',
  operationId: 'MBus_Post',
  request: {
    body: {
      description: 'The M-BUS Telegram',
      content: {
        'application/json': { schema: MBusDataSchema },
        'application/x-www-form-urlencoded': { schema: MBusDataSchema },
        'application/xml': { schema: MBusDataSchema },
        'text/json': { schema: MBusDataSchema },
        'text/xml': { schema: MBusDataSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ObjectSchema },
        'application/xml': { schema: ObjectSchema },
        'text/json': { schema: ObjectSchema },
        'text/xml': { schema: ObjectSchema },
      },
    },
    400: { description: 'BadRequest' },
    401: { description: 'Unauthorized' },
  },
})

export const postApiMeterFolderInformationRoute = createRoute({
  method: 'post',
  path: '/api/MeterFolderInformation',
  tags: ['MeterFolderInformation'],
  summary: 'Sets the Name of a Meter or a Folder',
  description: 'Sets the Name of a Meter or a Folder',
  operationId: 'MeterFolderInformation_Post',
  request: {
    body: {
      content: {
        'application/json': { schema: MeterFolderInformationToPostSchema },
        'application/x-www-form-urlencoded': { schema: MeterFolderInformationToPostSchema },
        'application/xml': { schema: MeterFolderInformationToPostSchema },
        'text/json': { schema: MeterFolderInformationToPostSchema },
        'text/xml': { schema: MeterFolderInformationToPostSchema },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiMeterFolderInformationIdRoute = createRoute({
  method: 'get',
  path: '/api/MeterFolderInformation/{id}',
  tags: ['MeterFolderInformation'],
  summary: 'Beta: Gets the General Information for a Meter or a Folder',
  description: 'Beta: Gets the General Information for a Meter or a Folder',
  operationId: 'MeterFolderInformation_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: MeterFolderInformationSchema },
        'application/xml': { schema: MeterFolderInformationSchema },
        'text/json': { schema: MeterFolderInformationSchema },
        'text/xml': { schema: MeterFolderInformationSchema },
      },
    },
  },
})

export const getApiMeterValuesIdRoute = createRoute({
  method: 'get',
  path: '/api/MeterValues/{id}',
  tags: ['MeterValues'],
  summary:
    'Gets the Values for a Meter at a given Date. \r\n            The first Value found before the given Date is returned.',
  description:
    'Gets the Values for a Meter at a given Date. The first Value found before the given Date is returned.',
  operationId: 'MeterValues_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      date: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            in: 'query',
            name: 'date',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: DeviceInPastSchema },
        'application/xml': { schema: DeviceInPastSchema },
        'text/json': { schema: DeviceInPastSchema },
        'text/xml': { schema: DeviceInPastSchema },
      },
    },
  },
})

export const getApiRegisterForRealtimeApiRoute = createRoute({
  method: 'get',
  path: '/api/RegisterForRealtimeApi',
  tags: ['RegisterForRealtimeApi'],
  summary: 'Gets all registrations for the Realtime API.',
  description: 'Gets all registrations for the Realtime API.',
  operationId: 'RegisterForRealtimeApi_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(RegisterRealtimeApiDataSchema) },
        'application/xml': { schema: z.array(RegisterRealtimeApiDataSchema) },
        'text/json': { schema: z.array(RegisterRealtimeApiDataSchema) },
        'text/xml': { schema: z.array(RegisterRealtimeApiDataSchema) },
      },
    },
  },
})

export const postApiRegisterForRealtimeApiRoute = createRoute({
  method: 'post',
  path: '/api/RegisterForRealtimeApi',
  tags: ['RegisterForRealtimeApi'],
  summary:
    'Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.\r\n             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx',
  description:
    'Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud. More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx',
  operationId: 'RegisterForRealtimeApi_Post',
  request: {
    body: {
      content: {
        'application/json': { schema: RegisterRealtimeApiDataSchema },
        'application/x-www-form-urlencoded': { schema: RegisterRealtimeApiDataSchema },
        'application/xml': { schema: RegisterRealtimeApiDataSchema },
        'text/json': { schema: RegisterRealtimeApiDataSchema },
        'text/xml': { schema: RegisterRealtimeApiDataSchema },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const deleteApiRegisterForRealtimeApiIdRoute = createRoute({
  method: 'delete',
  path: '/api/RegisterForRealtimeApi/{id}',
  tags: ['RegisterForRealtimeApi'],
  summary: 'Deletes a realtime API registration.',
  description: 'Deletes a realtime API registration.',
  operationId: 'RegisterForRealtimeApi_Delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the realtime API registration',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const postApiSmartMeDeviceConfigurationRoute = createRoute({
  method: 'post',
  path: '/api/SmartMeDeviceConfiguration',
  tags: ['SmartMeDeviceConfiguration'],
  summary: 'Sets the configuration of a smart-me device. The device needs to be online.',
  operationId: 'SmartMeDeviceConfiguration_Post',
  request: {
    body: {
      content: {
        'application/json': { schema: SmartMeDeviceConfigurationContainerSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              DeviceEncryptionKey: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The encryption key used to decrypt messages received from an external meter (used only for the smart-me modules)',
                }),
              DevicePinCode: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'PIN code to enter on a external meter (e.g. for the FNN meters)',
                }),
              DnsUpdateState: z
                .enum(['NoUpdate', 'DnsUpdatePublicIp', 'DnsUpdateInternalIp'])
                .exactOptional()
                .openapi({
                  description:
                    'Configuration of the dynamic DNS service. More information: http://wiki.smart-me.com/index.php/Dynamisches_DNS',
                }),
              EnableModbusTcp: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Enables or disables Modbus TCP (if the meter supports it).',
                }),
              Id: z.string().exactOptional().openapi({ description: 'The ID of the device' }),
              InputConfiguration: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Name: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The Name of the Input' }),
                        Number: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({ description: 'The number of the Input. (1 for Input 1)' }),
                        OffText: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The visualization text for an OFF action' }),
                        OnText: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The visualization text for an ON action' }),
                        Type: z
                          .enum(['TariffInput', 'DigitalInput'])
                          .exactOptional()
                          .openapi({ description: 'The Type of the output' }),
                      })
                      .openapi({
                        description: 'Configuration for the input of a meter (digital inputs)',
                        required: [],
                      }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'The configuration for the intput outputs' }),
              OutputConfiguration: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        DigitalOutputNoConnectionAction: z
                          .enum(['Nothing', 'TurnOff', 'TurnOn', 'SetPwmValue'])
                          .exactOptional()
                          .openapi({
                            description: 'The Action when the device has lost the connection',
                          }),
                        Name: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The Name of the Output' }),
                        Number: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'The number of the Output. (1 for Output 1, 2 for Output 2)',
                          }),
                        S0PulseValue: z
                          .enum(['PulseValue1000Kwh', 'PulseValue10000Kwh'])
                          .exactOptional()
                          .openapi({ description: 'The S0 Pulse Value' }),
                        Type: z
                          .enum([
                            'ImpulseOutputActiveEnergy',
                            'ImpulseOutputActiveEnergyImport',
                            'ImpulseOutputActiveEnergyExport',
                            'ImpulseOutputReactiveEnergy',
                            'DigitalOutput',
                            'AnalogPwmSignalOutput',
                            'Disabled',
                          ])
                          .exactOptional()
                          .openapi({ description: 'The Type of the output' }),
                      })
                      .openapi({
                        description:
                          'Configuration for the outputs of a meter (analog/digital outputs)',
                        required: [],
                      }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'The configuration for the external outputs' }),
              ShowReactiveEnergy: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Shows the reactive energy values (if the meter supports it).',
                }),
              SwitchConfiguration: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        CanSwitchOff: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .exactOptional()
                          .openapi({
                            description: 'Flag if the switch can be turned off or is always on.',
                          }),
                        Number: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional()
                          .openapi({
                            description: 'The number of the phase. (e.g. 1 for Phase L1)',
                          }),
                      })
                      .openapi({
                        description: 'The configuration for a phase switch',
                        required: [],
                      }),
                  ),
                )
                .exactOptional()
                .openapi({ description: 'The configuration for the phase switches' }),
              UploadInterval: z
                .enum([
                  'UploadInterval_1s',
                  'UploadInterval_5s',
                  'UploadInterval_10s',
                  'UploadInterval_30s',
                  'UploadInterval_60s',
                  'UploadInterval_5min',
                  'UploadInterval_15min',
                  'UploadInterval_30min',
                  'UploadInterval_60min',
                  'UploadInterval_6h',
                  'UploadInterval_12h',
                  'UploadInterval_24h',
                ])
                .exactOptional()
                .openapi({
                  description:
                    'Number of seconds the device will upload the data. For smaller values maybe a professional license is needed.',
                }),
            })
            .openapi({
              description: 'API Container class for the meter configuration',
              required: [],
            }),
        },
        'application/xml': { schema: SmartMeDeviceConfigurationContainerSchema },
        'text/json': { schema: SmartMeDeviceConfigurationContainerSchema },
        'text/xml': { schema: SmartMeDeviceConfigurationContainerSchema },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiSmartMeDeviceConfigurationIdRoute = createRoute({
  method: 'get',
  path: '/api/SmartMeDeviceConfiguration/{id}',
  tags: ['SmartMeDeviceConfiguration'],
  summary: 'Gets the configuration of a smart-me device.',
  operationId: 'SmartMeDeviceConfiguration_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SmartMeDeviceConfigurationContainerSchema },
        'application/xml': { schema: SmartMeDeviceConfigurationContainerSchema },
        'text/json': { schema: SmartMeDeviceConfigurationContainerSchema },
        'text/xml': { schema: SmartMeDeviceConfigurationContainerSchema },
      },
    },
  },
})

export const postApiSubUserRoute = createRoute({
  method: 'post',
  path: '/api/SubUser',
  tags: ['SubUser'],
  summary: 'Creates or updates a subuser.\r\n            To create a new user set no ID (empty)',
  operationId: 'SubUser_Post',
  request: {
    body: {
      content: {
        'application/json': { schema: SubUserDataSchema },
        'application/x-www-form-urlencoded': { schema: SubUserDataSchema },
        'application/xml': { schema: SubUserDataSchema },
        'text/json': { schema: SubUserDataSchema },
        'text/xml': { schema: SubUserDataSchema },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiSubUserIdRoute = createRoute({
  method: 'get',
  path: '/api/SubUser/{id}',
  tags: ['SubUser'],
  summary: 'Get a sub user. The user must be assigend to the user that makes this call.',
  operationId: 'SubUser_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SubUserDataSchema },
        'application/xml': { schema: SubUserDataSchema },
        'text/json': { schema: SubUserDataSchema },
        'text/xml': { schema: SubUserDataSchema },
      },
    },
  },
})

export const deleteApiSubUserIdRoute = createRoute({
  method: 'delete',
  path: '/api/SubUser/{id}',
  tags: ['SubUser'],
  summary: 'Delete a subuser',
  operationId: 'SubUser_Delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiUserRoute = createRoute({
  method: 'get',
  path: '/api/User',
  tags: ['User'],
  summary: 'Gets the informations for the user.',
  description: 'Gets the informations for the user.',
  operationId: 'User_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: UserSchema },
        'application/xml': { schema: UserSchema },
        'text/json': { schema: UserSchema },
        'text/xml': { schema: UserSchema },
      },
    },
  },
})

export const deleteApiUserRoute = createRoute({
  method: 'delete',
  path: '/api/User',
  tags: ['User'],
  summary: 'Triggers user account deletion.',
  operationId: 'User_Delete',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ObjectSchema },
        'application/xml': { schema: ObjectSchema },
        'text/json': { schema: ObjectSchema },
        'text/xml': { schema: ObjectSchema },
      },
    },
  },
})

export const getApiValuesIdRoute = createRoute({
  method: 'get',
  path: '/api/Values/{id}',
  tags: ['Values'],
  summary: 'Gets all (last) values of a device',
  operationId: 'Values_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the device',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ValuesDataSchema },
        'text/json': { schema: ValuesDataSchema },
      },
    },
  },
})

export const getApiValuesInPastIdRoute = createRoute({
  method: 'get',
  path: '/api/ValuesInPast/{id}',
  tags: ['ValuesInPast'],
  summary:
    'Gets all (last) values of a device\r\n            The first Value found before the given Date is returned.',
  description:
    'Gets the Values for a device at a given Date. The first Value found before the given Date is returned.',
  operationId: 'ValuesInPast_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the device',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      date: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'the date of the value',
            in: 'query',
            name: 'date',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ValuesDataSchema },
        'text/json': { schema: ValuesDataSchema },
      },
    },
  },
})

export const getApiValuesInPastMultipleIdRoute = createRoute({
  method: 'get',
  path: '/api/ValuesInPastMultiple/{id}',
  tags: ['ValuesInPastMultiple'],
  summary: 'Gets multiple values of a device. This call needs a smart-me professional licence.',
  operationId: 'ValuesInPastMultiple_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the device',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      startDate: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'The date when the first value should start',
            in: 'query',
            name: 'startDate',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'The date when the last value should start',
            in: 'query',
            name: 'endDate',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      interval: z
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
            description:
              'The interval in minutes betwenn the values. 0 means as fast as possible. Only 1000 values can be get in one call.',
            in: 'query',
            name: 'interval',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(ValuesDataSchema) },
        'application/xml': { schema: z.array(ValuesDataSchema) },
        'text/json': { schema: z.array(ValuesDataSchema) },
        'text/xml': { schema: z.array(ValuesDataSchema) },
      },
    },
  },
})

export const getApiVirtualBillingMeterActiveRoute = createRoute({
  method: 'get',
  path: '/api/VirtualBillingMeterActive',
  tags: ['VirtualBillingMeterActive'],
  summary: 'Beta: Gets all active virtual meters',
  description: 'Beta: Gets all active virtual meters.',
  operationId: 'VirtualBillingMeterActive_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(DeviceSchema) },
        'application/xml': { schema: z.array(DeviceSchema) },
        'text/json': { schema: z.array(DeviceSchema) },
        'text/xml': { schema: z.array(DeviceSchema) },
      },
    },
  },
})

export const postApiVirtualBillingMeterActiveRoute = createRoute({
  method: 'post',
  path: '/api/VirtualBillingMeterActive',
  tags: ['VirtualBillingMeterActive'],
  summary:
    'Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.',
  description:
    'Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.',
  operationId: 'VirtualBillingMeterActive_Post',
  request: {
    body: {
      description: 'The Meter to activate',
      content: {
        'application/json': { schema: VMeterToActivateSchema },
        'application/x-www-form-urlencoded': { schema: VMeterToActivateSchema },
        'application/xml': { schema: VMeterToActivateSchema },
        'text/json': { schema: VMeterToActivateSchema },
        'text/xml': { schema: VMeterToActivateSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: DeviceSchema },
        'application/xml': { schema: DeviceSchema },
        'text/json': { schema: DeviceSchema },
        'text/xml': { schema: DeviceSchema },
      },
    },
    400: { description: 'BadRequest' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
})

export const postApiVirtualBillingMeterDeactivateRoute = createRoute({
  method: 'post',
  path: '/api/VirtualBillingMeterDeactivate',
  tags: ['VirtualBillingMeterDeactivate'],
  summary: 'Beta: Virtual Meter API: Deactivates a Virtual Meter.',
  description: 'Beta: Virtual Meter API: Deactivates a Virtual Meter.',
  operationId: 'VirtualBillingMeterDeactivate_Post',
  request: {
    body: {
      description: 'The Meter to activate',
      content: {
        'application/json': { schema: VMeterToDeactivateSchema },
        'application/x-www-form-urlencoded': { schema: VMeterToDeactivateSchema },
        'application/xml': { schema: VMeterToDeactivateSchema },
        'text/json': { schema: VMeterToDeactivateSchema },
        'text/xml': { schema: VMeterToDeactivateSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ObjectSchema },
        'application/xml': { schema: ObjectSchema },
        'text/json': { schema: ObjectSchema },
        'text/xml': { schema: ObjectSchema },
      },
    },
    400: { description: 'BadRequest' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
})

export const getApiVirtualBillingMetersRoute = createRoute({
  method: 'get',
  path: '/api/VirtualBillingMeters',
  tags: ['VirtualBillingMeters'],
  summary: 'Beta: Gets all Meters available to activate as a Virtual Meter.',
  description: 'Beta: Gets all Meters available to activate as a Virtual Meter.',
  operationId: 'VirtualBillingMeters_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(DeviceSchema) },
        'application/xml': { schema: z.array(DeviceSchema) },
        'text/json': { schema: z.array(DeviceSchema) },
        'text/xml': { schema: z.array(DeviceSchema) },
      },
    },
  },
})

export const getApiVirtualMeterCalculateFormulaRoute = createRoute({
  method: 'get',
  path: '/api/VirtualMeterCalculateFormula',
  tags: ['VirtualMeterCalculateFormula'],
  summary:
    'Calculates a virtual meter from a formula. \r\n            A meter is coded as ID("METERID")',
  description:
    'Calculates a virtual meter from a formula.\r\n            \r\n            A meter is coded as ID("METERID")\r\n            Ariphmetical operators:\r\n             ()  parentheses;  \r\n             +   plus (a + b); \r\n             -  minus (a - b); \r\n             *  multiplycation symbol (a * b); \r\n             /  divide symbol (a / b); \r\n            Example: (ID("63ac09cb-4e5f-4f3e-bd27-ad8c30bdfc0c") + ID("0209555e-9dc4-4e84-a166-a864488b4b12")) * 2',
  operationId: 'VirtualMeterCalculateFormula_Get',
  request: {
    query: z.object({
      formula: z
        .string()
        .openapi({
          param: { in: 'query', name: 'formula', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: DeviceSchema },
        'application/xml': { schema: DeviceSchema },
        'text/json': { schema: DeviceSchema },
        'text/xml': { schema: DeviceSchema },
      },
    },
  },
})

export const getApiVirtualTariffRoute = createRoute({
  method: 'get',
  path: '/api/VirtualTariff',
  tags: ['VirtualTariff'],
  summary: 'Gets all Virtual Tariffs of a user',
  description: 'Gets all Virtual Tariffs of a user',
  operationId: 'VirtualTariff_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(VirtualTariffsOfFolderSchema) },
        'application/xml': { schema: z.array(VirtualTariffsOfFolderSchema) },
        'text/json': { schema: z.array(VirtualTariffsOfFolderSchema) },
        'text/xml': { schema: z.array(VirtualTariffsOfFolderSchema) },
      },
    },
  },
})

export const getApiVirtualTariffIdRoute = createRoute({
  method: 'get',
  path: '/api/VirtualTariff/{id}',
  tags: ['VirtualTariff'],
  summary: 'Gets all virtual tariffs of a folder',
  description: 'Gets all virtual tariffs of a folder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: VirtualTariffsOfFolderSchema },
        'text/json': { schema: VirtualTariffsOfFolderSchema },
      },
    },
  },
})

export const getApiVirtualTariffConsumptionRoute = createRoute({
  method: 'get',
  path: '/api/VirtualTariffConsumption',
  tags: ['VirtualTariffConsumption'],
  summary: 'Gets the consumption of a folder with a virtuall tariffs.',
  description: 'Gets the consumption of a folder with a virtuall tariffs.',
  operationId: 'VirtualTariffConsumption_Get',
  request: {
    query: z.object({
      folderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Folder',
            in: 'query',
            name: 'folderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      startDate: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'The start date (UTC)',
            in: 'query',
            name: 'startDate',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'The end date (UTC)',
            in: 'query',
            name: 'endDate',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(VirtualTariffConsumptionDataSchema) },
        'application/xml': { schema: z.array(VirtualTariffConsumptionDataSchema) },
        'text/json': { schema: z.array(VirtualTariffConsumptionDataSchema) },
        'text/xml': { schema: z.array(VirtualTariffConsumptionDataSchema) },
      },
    },
  },
})

export const getApiVirtualTariffsForPropertyIdRoute = createRoute({
  method: 'get',
  path: '/api/VirtualTariffsForProperty/{id}',
  tags: ['VirtualTariffsForProperty'],
  summary: 'Gets all Virtual Tariffs for a property (folder)',
  description: 'Gets all Virtual Tariffs for a property (folder)',
  operationId: 'VirtualTariffsForProperty_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(VirtualTariffsOfFolderSchema) },
        'application/xml': { schema: z.array(VirtualTariffsOfFolderSchema) },
        'text/json': { schema: z.array(VirtualTariffsOfFolderSchema) },
        'text/xml': { schema: z.array(VirtualTariffsOfFolderSchema) },
      },
    },
  },
})

export const getApiVirtualTariffsStatusForPropertyIdRoute = createRoute({
  method: 'get',
  path: '/api/VirtualTariffsStatusForProperty/{id}',
  tags: ['VirtualTariffsStatusForProperty'],
  summary: 'Gets the calculation status for a virtual tariff property',
  operationId: 'VirtualTariffsStatusForProperty_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
  },
})

export const postApiFolderAssignRoute = createRoute({
  method: 'post',
  path: '/api/folder/assign',
  tags: ['FolderAssign'],
  summary:
    'Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.',
  operationId: 'FolderAssign_Post',
  request: {
    query: z.object({
      source: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the meter or folder that should be assign',
            in: 'query',
            name: 'source',
            required: true,
            schema: { type: 'string' },
          },
        }),
      target: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the meter or folder that should be the parent',
            in: 'query',
            name: 'target',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiFolderSettingsIdRoute = createRoute({
  method: 'get',
  path: '/api/folder/settings/{id}',
  tags: ['FolderSettings'],
  summary: 'Gets the settings of a folder or meter',
  operationId: 'FolderSettings_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: FolderSettingsSchema },
        'application/xml': { schema: FolderSettingsSchema },
        'text/json': { schema: FolderSettingsSchema },
        'text/xml': { schema: FolderSettingsSchema },
      },
    },
  },
})

export const postApiFolderSettingsIdRoute = createRoute({
  method: 'post',
  path: '/api/folder/settings/{id}',
  tags: ['FolderSettings'],
  summary: 'Add or edit a folder or a meter. To add a new folder use and empty ID',
  operationId: 'FolderSettings_Post',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the folder or meter to edit. Use and empty ID to add a new folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The folder or meter data',
      content: {
        'application/json': { schema: FolderSettingsSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Description: z
                .string()
                .exactOptional()
                .openapi({ description: 'The Description of the folder or meter' }),
              Enable: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Flag if the meter is enabled (folder not supported yet)',
                }),
              FolderType: z
                .enum([
                  'Folder',
                  'Location',
                  'Factory',
                  'House',
                  'Office',
                  'Machine',
                  'VirtualMeter',
                  'ElecticityFolder',
                  'WaterFolder',
                  'HeatFolder',
                  'GasFolder',
                  'TemperatureFolder',
                  'Sun',
                  'Light',
                  'Ice',
                  'Sofa',
                  'Food',
                  'Coffee',
                  'Car',
                  'ChargingStation',
                  'Meter',
                  'User',
                  'Trash',
                  'GridPhotovoltaicPowerSystem',
                ])
                .exactOptional()
                .openapi({ description: 'The Type of the folder' }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The Name of the folder or meter' }),
              ParentFolderId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The parent folder ID of this item' }),
              SerialNumber: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description: 'The serial number (meter only)',
                }),
              UseableForVirtualBillingMeters: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Flag if the meter is usable for virtual billing meters (e.g. washroom)',
                }),
              ValueCorrection: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'The value correction on this meter' }),
              ValueCorrectionParentFolder: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The value correction on all parent folders. but not on the meter itself',
                }),
              VisualizationName: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the visualization of the folder' }),
            })
            .openapi({ description: 'Container for the folder settings', required: [] }),
        },
        'application/xml': { schema: FolderSettingsSchema },
        'text/json': { schema: FolderSettingsSchema },
        'text/xml': { schema: FolderSettingsSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: FolderMenuItemSchema },
        'application/xml': { schema: FolderMenuItemSchema },
        'text/json': { schema: FolderMenuItemSchema },
        'text/xml': { schema: FolderMenuItemSchema },
      },
    },
  },
})

export const deleteApiFolderSettingsIdRoute = createRoute({
  method: 'delete',
  path: '/api/folder/settings/{id}',
  tags: ['FolderSettings'],
  summary: 'Deletes a folder',
  operationId: 'FolderSettings_Delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the folder',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const postApiFolderUserAssignRoute = createRoute({
  method: 'post',
  path: '/api/folder/user/assign',
  tags: ['UserToFolderAssign'],
  summary: 'Assign a user to a folder',
  operationId: 'UserToFolderAssign_Post',
  request: {
    query: z.object({
      source: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the user that should be assign',
            in: 'query',
            name: 'source',
            required: true,
            schema: { type: 'string' },
          },
        }),
      target: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the folder that should be the parent',
            in: 'query',
            name: 'target',
            required: true,
            schema: { type: 'string' },
          },
        }),
      oldFolder: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the old folder (in case of a drag and drop to a new folder)',
            in: 'query',
            name: 'oldFolder',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const deleteApiFolderUserAssignRoute = createRoute({
  method: 'delete',
  path: '/api/folder/user/assign',
  tags: ['UserToFolderAssign'],
  summary: 'Deletes a user to folder assignement',
  operationId: 'UserToFolderAssign_Delete',
  request: {
    query: z.object({
      source: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the user that should be de-assign',
            in: 'query',
            name: 'source',
            required: true,
            schema: { type: 'string' },
          },
        }),
      target: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the folder',
            in: 'query',
            name: 'target',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiOauthAuthorizeRoute = createRoute({
  method: 'get',
  path: '/api/oauth/authorize',
  tags: ['OAuth'],
  operationId: 'OAuth_Authorize',
  request: {
    query: z.object({
      client_id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'client_id', required: true, schema: { type: 'string' } },
        }),
      redirect_uri: z
        .string()
        .openapi({
          param: { in: 'query', name: 'redirect_uri', required: true, schema: { type: 'string' } },
        }),
      state: z
        .string()
        .openapi({
          param: { in: 'query', name: 'state', required: true, schema: { type: 'string' } },
        }),
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'scope', required: false, schema: { type: 'string' } },
        }),
      client_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'client_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ObjectSchema },
        'application/xml': { schema: ObjectSchema },
        'text/json': { schema: ObjectSchema },
        'text/xml': { schema: ObjectSchema },
      },
    },
  },
})

export const postApiOauthAuthorizeRoute = createRoute({
  method: 'post',
  path: '/api/oauth/authorize',
  tags: ['OAuth'],
  request: {
    query: z.object({
      client_id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'client_id', required: true, schema: { type: 'string' } },
        }),
      redirect_uri: z
        .string()
        .openapi({
          param: { in: 'query', name: 'redirect_uri', required: true, schema: { type: 'string' } },
        }),
      state: z
        .string()
        .openapi({
          param: { in: 'query', name: 'state', required: true, schema: { type: 'string' } },
        }),
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'scope', required: false, schema: { type: 'string' } },
        }),
      client_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'client_secret',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ObjectSchema },
        'application/xml': { schema: ObjectSchema },
        'text/json': { schema: ObjectSchema },
        'text/xml': { schema: ObjectSchema },
      },
    },
  },
})

export const getApiPicoRoute = createRoute({
  method: 'get',
  path: '/api/pico',
  tags: ['Pico'],
  summary: 'Gets all pico charging stations for this user',
  operationId: 'Pico_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(DeviceSchema) },
        'application/xml': { schema: z.array(DeviceSchema) },
        'text/json': { schema: z.array(DeviceSchema) },
        'text/xml': { schema: z.array(DeviceSchema) },
      },
    },
  },
})

export const getApiPicoChargingIdRoute = createRoute({
  method: 'get',
  path: '/api/pico/charging/{id}',
  tags: ['PicoCharging'],
  summary: 'Gets the active charging data of a pico station',
  operationId: 'PicoCharging_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PicoChargingDataSchema },
        'text/json': { schema: PicoChargingDataSchema },
      },
    },
  },
})

export const getApiPicoHistoryIdRoute = createRoute({
  method: 'get',
  path: '/api/pico/history/{id}',
  tags: ['PicoChargingHistory'],
  summary: 'Gets the last charging history for a pico station',
  operationId: 'PicoChargingHistory_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(PicoChargingHistoryDataSchema) },
        'application/xml': { schema: z.array(PicoChargingHistoryDataSchema) },
        'text/json': { schema: z.array(PicoChargingHistoryDataSchema) },
        'text/xml': { schema: z.array(PicoChargingHistoryDataSchema) },
      },
    },
  },
})

export const getApiPicoLoadmanagementgroupRoute = createRoute({
  method: 'get',
  path: '/api/pico/loadmanagementgroup',
  tags: ['PicoLoadmanagementGroup'],
  summary:
    'GET: api/pico/loadmanagementgroup\r\n            \r\n            Returns all available load management groups',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(PicoLoadmanagementGroupDtoSchema) },
        'application/xml': { schema: z.array(PicoLoadmanagementGroupDtoSchema) },
        'text/json': { schema: z.array(PicoLoadmanagementGroupDtoSchema) },
        'text/xml': { schema: z.array(PicoLoadmanagementGroupDtoSchema) },
      },
    },
  },
})

export const postApiPicoLoadmanagementgroupCurrentSerialRoute = createRoute({
  method: 'post',
  path: '/api/pico/loadmanagementgroup/current/{serial}',
  tags: ['PicoLoadmanagementSetDynamicCurrent'],
  summary: 'Sets the dynamic current of a load management group or a single station.',
  operationId: 'PicoLoadmanagementSetDynamicCurrent_Post',
  request: {
    params: z.object({
      serial: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The serial number can be any pico serial in the group (e.g. 700001)',
            in: 'path',
            name: 'serial',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      current: z
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
            description: 'The dynamic current of the group (in mA)',
            in: 'query',
            name: 'current',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ObjectSchema },
        'application/xml': { schema: ObjectSchema },
        'text/json': { schema: ObjectSchema },
        'text/xml': { schema: ObjectSchema },
      },
    },
  },
})

export const getApiPicoLoadmanagementgroupIdRoute = createRoute({
  method: 'get',
  path: '/api/pico/loadmanagementgroup/{id}',
  tags: ['PicoLoadmanagementGroup'],
  summary:
    "GET: api/pico/loadmanagementgroup\r\n            \r\n            Returns a pico load management group by it's id",
  operationId: 'PicoLoadmanagementGroup_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PicoLoadmanagementGroupDtoSchema },
        'application/xml': { schema: PicoLoadmanagementGroupDtoSchema },
        'text/json': { schema: PicoLoadmanagementGroupDtoSchema },
        'text/xml': { schema: PicoLoadmanagementGroupDtoSchema },
      },
    },
  },
})

export const getApiPicoSettingsIdRoute = createRoute({
  method: 'get',
  path: '/api/pico/settings/{id}',
  tags: ['PicoSettings'],
  summary:
    'GET: api/pico/settings\r\n            \r\n            Returns the settings of a pico charging station.',
  operationId: 'PicoSettings_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PicoSettingsDtoSchema },
        'application/xml': { schema: PicoSettingsDtoSchema },
        'text/json': { schema: PicoSettingsDtoSchema },
        'text/xml': { schema: PicoSettingsDtoSchema },
      },
    },
  },
})

export const postApiPicoTryenablecablelockIdRoute = createRoute({
  method: 'post',
  path: '/api/pico/tryenablecablelock/{id}',
  tags: ['PicoEnableFixCableLock'],
  summary:
    'Try to fix lock the cable of a pico. The pico must be online and a cable (without car) needs to be connected. Otherwise this will fail.',
  operationId: 'PicoEnableFixCableLock_Post',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the pico',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ObjectSchema },
        'application/xml': { schema: ObjectSchema },
        'text/json': { schema: ObjectSchema },
        'text/xml': { schema: ObjectSchema },
      },
    },
  },
})
