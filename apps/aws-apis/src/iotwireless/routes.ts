import { createRoute, z } from '@hono/zod-openapi'

const DevAddrSchema = z
  .string()
  .regex(/[a-fA-F0-9]{8}/)
  .openapi('DevAddr')

const FNwkSIntKeySchema = z
  .string()
  .regex(/[a-fA-F0-9]{32}/)
  .openapi('FNwkSIntKey')

const SNwkSIntKeySchema = z
  .string()
  .regex(/[a-fA-F0-9]{32}/)
  .openapi('SNwkSIntKey')

const NwkSEncKeySchema = z
  .string()
  .regex(/[a-fA-F0-9]{32}/)
  .openapi('NwkSEncKey')

const AppSKeySchema = z
  .string()
  .regex(/[a-fA-F0-9]{32}/)
  .openapi('AppSKey')

const SessionKeysAbpV1_1Schema = z
  .object({
    FNwkSIntKey: FNwkSIntKeySchema.and(
      z.any().openapi({ description: 'The FNwkSIntKey value.' }),
    ).exactOptional(),
    SNwkSIntKey: SNwkSIntKeySchema.and(
      z.any().openapi({ description: 'The SNwkSIntKey value.' }),
    ).exactOptional(),
    NwkSEncKey: NwkSEncKeySchema.and(
      z.any().openapi({ description: 'The NwkSEncKey value.' }),
    ).exactOptional(),
    AppSKey: AppSKeySchema.and(
      z.any().openapi({ description: 'The AppSKey value.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Session keys for ABP v1.1', required: [] })
  .openapi('SessionKeysAbpV1_1')

const FCntStartSchema = z
  .int()
  .min(0)
  .max(65535)
  .openapi({ description: 'The FCnt init value.' })
  .openapi('FCntStart')

type AbpV1_1Type = {
  DevAddr?: z.infer<typeof DevAddrSchema> & { [key: string]: unknown }
  SessionKeys?: z.infer<typeof SessionKeysAbpV1_1Schema> & { [key: string]: unknown }
  FCntStart?: z.infer<typeof FCntStartSchema> & { [key: string]: unknown }
}

const NwkSKeySchema = z
  .string()
  .regex(/[a-fA-F0-9]{32}/)
  .openapi('NwkSKey')

const SessionKeysAbpV1_0XSchema = z
  .object({
    NwkSKey: NwkSKeySchema.and(
      z.any().openapi({ description: 'The NwkSKey value.' }),
    ).exactOptional(),
    AppSKey: AppSKeySchema.and(
      z.any().openapi({ description: 'The AppSKey value.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Session keys for ABP v1.1', required: [] })
  .openapi('SessionKeysAbpV1_0X')

type AbpV1_0XType = {
  DevAddr?: z.infer<typeof DevAddrSchema> & { [key: string]: unknown }
  SessionKeys?: z.infer<typeof SessionKeysAbpV1_0XSchema> & { [key: string]: unknown }
  FCntStart?: z.infer<typeof FCntStartSchema> & { [key: string]: unknown }
}

const HorizontalAccuracySchema = z.float32().min(0).openapi('HorizontalAccuracy')

const VerticalAccuracySchema = z.float32().min(0).openapi('VerticalAccuracy')

type AccuracyType = {
  HorizontalAccuracy?: z.infer<typeof HorizontalAccuracySchema> & { [key: string]: unknown }
  VerticalAccuracy?: z.infer<typeof VerticalAccuracySchema> & { [key: string]: unknown }
}

const EventNotificationTopicStatusSchema = z
  .enum(['Enabled', 'Disabled'])
  .openapi('EventNotificationTopicStatus')

const LoRaWANConnectionStatusResourceTypeEventConfigurationSchema = z
  .object({
    WirelessGatewayEventTopic: EventNotificationTopicStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Denotes whether the wireless gateway connection status event topic is enabled or disabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Object for LoRaWAN connection status resource type event configuration.',
    required: [],
  })
  .openapi('LoRaWANConnectionStatusResourceTypeEventConfiguration')

type ConnectionStatusResourceTypeEventConfigurationType = {
  LoRaWAN?: z.infer<typeof LoRaWANConnectionStatusResourceTypeEventConfigurationSchema> & {
    [key: string]: unknown
  }
}

const LoRaWANJoinResourceTypeEventConfigurationSchema = z
  .object({
    WirelessDeviceEventTopic: EventNotificationTopicStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Denotes whether the wireless device join event topic is enabled or disabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Object for LoRaWAN join resource type event configuration.',
    required: [],
  })
  .openapi('LoRaWANJoinResourceTypeEventConfiguration')

type JoinResourceTypeEventConfigurationType = {
  LoRaWAN?: z.infer<typeof LoRaWANJoinResourceTypeEventConfigurationSchema> & {
    [key: string]: unknown
  }
}

const AmazonIdSchema = z
  .string()
  .max(2048)
  .openapi({ description: 'The Sidewalk Amazon ID.' })
  .openapi('AmazonId')

const AppServerPrivateKeySchema = z
  .string()
  .regex(/[a-fA-F0-9]{64}/)
  .min(1)
  .max(4096)
  .openapi('AppServerPrivateKey')

const SidewalkAccountInfoSchema = z
  .object({
    AmazonId: AmazonIdSchema.and(
      z.any().openapi({ description: 'The Sidewalk Amazon ID.' }),
    ).exactOptional(),
    AppServerPrivateKey: AppServerPrivateKeySchema.and(
      z.any().openapi({ description: 'The Sidewalk application server private key.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a Sidewalk account.', required: [] })
  .openapi('SidewalkAccountInfo')

const PartnerAccountArnSchema = z.string().openapi('PartnerAccountArn')

const AssociateAwsAccountWithPartnerAccountResponseSchema = z
  .object({
    Sidewalk: SidewalkAccountInfoSchema.and(
      z.any().openapi({ description: 'The Sidewalk account credentials.' }),
    ).exactOptional(),
    Arn: PartnerAccountArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateAwsAccountWithPartnerAccountResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(z.any().openapi({ description: "The tag's key value." })),
    Value: TagValueSchema.and(z.any().openapi({ description: "The tag's value." })),
  })
  .openapi({
    required: ['Key', 'Value'],
    description: 'A simple label consisting of a customer-defined key-value pair',
  })
  .openapi('Tag')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const AssociateMulticastGroupWithFuotaTaskResponseSchema = z
  .object({})
  .openapi('AssociateMulticastGroupWithFuotaTaskResponse')

const AssociateWirelessDeviceWithFuotaTaskResponseSchema = z
  .object({})
  .openapi('AssociateWirelessDeviceWithFuotaTaskResponse')

const AssociateWirelessDeviceWithMulticastGroupResponseSchema = z
  .object({})
  .openapi('AssociateWirelessDeviceWithMulticastGroupResponse')

const AssociateWirelessDeviceWithThingResponseSchema = z
  .object({})
  .openapi('AssociateWirelessDeviceWithThingResponse')

const IotCertificateIdSchema = z.string().min(1).max(4096).openapi('IotCertificateId')

const AssociateWirelessGatewayWithCertificateResponseSchema = z
  .object({
    IotCertificateId: IotCertificateIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the certificate associated with the wireless gateway.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateWirelessGatewayWithCertificateResponse')

const AssociateWirelessGatewayWithThingResponseSchema = z
  .object({})
  .openapi('AssociateWirelessGatewayWithThingResponse')

const CancelMulticastGroupSessionResponseSchema = z
  .object({})
  .openapi('CancelMulticastGroupSessionResponse')

const DestinationArnSchema = z.string().openapi('DestinationArn')

const DestinationNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9-_]+/)
  .max(128)
  .openapi('DestinationName')

const CreateDestinationResponseSchema = z
  .object({
    Arn: DestinationArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the new resource.' }),
    ).exactOptional(),
    Name: DestinationNameSchema.and(
      z.any().openapi({ description: 'The name of the new resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDestinationResponse')

const DeviceProfileArnSchema = z.string().openapi('DeviceProfileArn')

const DeviceProfileIdSchema = z.string().max(256).openapi('DeviceProfileId')

const CreateDeviceProfileResponseSchema = z
  .object({
    Arn: DeviceProfileArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the new resource.' }),
    ).exactOptional(),
    Id: DeviceProfileIdSchema.and(
      z.any().openapi({ description: 'The ID of the new device profile.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDeviceProfileResponse')

const SupportsClassBSchema = z.boolean().openapi('SupportsClassB')

const ClassBTimeoutSchema = z.int().min(0).max(1000).openapi('ClassBTimeout')

const PingSlotPeriodSchema = z.int().min(32).max(4096).openapi('PingSlotPeriod')

const PingSlotDrSchema = z.int().min(0).max(15).openapi('PingSlotDr')

const PingSlotFreqSchema = z.int().min(1000000).max(16700000).openapi('PingSlotFreq')

const SupportsClassCSchema = z.boolean().openapi('SupportsClassC')

const ClassCTimeoutSchema = z.int().min(0).max(1000).openapi('ClassCTimeout')

const MacVersionSchema = z.string().max(64).openapi('MacVersion')

const RegParamsRevisionSchema = z.string().max(64).openapi('RegParamsRevision')

const RxDelay1Schema = z.int().min(0).max(15).openapi('RxDelay1')

const RxDrOffset1Schema = z.int().min(0).max(7).openapi('RxDrOffset1')

const RxDataRate2Schema = z.int().min(0).max(15).openapi('RxDataRate2')

const RxFreq2Schema = z.int().min(1000000).max(16700000).openapi('RxFreq2')

const PresetFreqSchema = z.int().min(1000000).max(16700000).openapi('PresetFreq')

const FactoryPresetFreqsListSchema = z
  .array(PresetFreqSchema)
  .min(0)
  .max(20)
  .openapi('FactoryPresetFreqsList')

const MaxEirpSchema = z.int().min(0).max(15).openapi('MaxEirp')

const MaxDutyCycleSchema = z.int().min(0).max(100).openapi('MaxDutyCycle')

const RfRegionSchema = z
  .string()
  .max(64)
  .openapi({ description: 'The frequency band (RFRegion) value.' })
  .openapi('RfRegion')

const SupportsJoinSchema = z.boolean().openapi('SupportsJoin')

const Supports32BitFCntSchema = z.boolean().openapi('Supports32BitFCnt')

const FuotaTaskArnSchema = z
  .string()
  .max(128)
  .openapi({ description: 'The arn of a FUOTA task.' })
  .openapi('FuotaTaskArn')

const FuotaTaskIdSchema = z
  .string()
  .max(256)
  .openapi({ description: 'The ID of a FUOTA task.' })
  .openapi('FuotaTaskId')

const CreateFuotaTaskResponseSchema = z
  .object({ Arn: FuotaTaskArnSchema.exactOptional(), Id: FuotaTaskIdSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateFuotaTaskResponse')

const SupportedRfRegionSchema = z
  .enum([
    'EU868',
    'US915',
    'AU915',
    'AS923-1',
    'AS923-2',
    'AS923-3',
    'AS923-4',
    'EU433',
    'CN470',
    'CN779',
    'RU864',
    'KR920',
    'IN865',
  ])
  .openapi({ description: 'Supported RfRegions' })
  .openapi('SupportedRfRegion')

const MulticastGroupArnSchema = z
  .string()
  .max(128)
  .openapi({ description: 'The arn of the multicast group.' })
  .openapi('MulticastGroupArn')

const MulticastGroupIdSchema = z
  .string()
  .max(256)
  .openapi({ description: 'The ID of the multicast group.' })
  .openapi('MulticastGroupId')

const CreateMulticastGroupResponseSchema = z
  .object({
    Arn: MulticastGroupArnSchema.exactOptional(),
    Id: MulticastGroupIdSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateMulticastGroupResponse')

const DlClassSchema = z
  .enum(['ClassB', 'ClassC'])
  .openapi({ description: 'DlClass for LoRaWAM, valid values are ClassB and ClassC.' })
  .openapi('DlClass')

const NetworkAnalyzerConfigurationArnSchema = z
  .string()
  .max(1124)
  .openapi('NetworkAnalyzerConfigurationArn')

const NetworkAnalyzerConfigurationNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9-_]+/)
  .min(1)
  .max(1024)
  .openapi({ description: 'Name of the network analyzer configuration.' })
  .openapi('NetworkAnalyzerConfigurationName')

const CreateNetworkAnalyzerConfigurationResponseSchema = z
  .object({
    Arn: NetworkAnalyzerConfigurationArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the new resource.' }),
    ).exactOptional(),
    Name: NetworkAnalyzerConfigurationNameSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateNetworkAnalyzerConfigurationResponse')

const WirelessDeviceFrameInfoSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      ' <code>FrameInfo</code> of your wireless device resources for the trace content. Use FrameInfo to debug the communication between your LoRaWAN end devices and the network server.',
  })
  .openapi('WirelessDeviceFrameInfo')

const LogLevelSchema = z
  .enum(['INFO', 'ERROR', 'DISABLED'])
  .openapi({
    description:
      'The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.',
  })
  .openapi('LogLevel')

const WirelessDeviceIdSchema = z
  .string()
  .max(256)
  .openapi({ description: 'The ID of the wireless device.' })
  .openapi('WirelessDeviceId')

const WirelessGatewayIdSchema = z.string().max(256).openapi('WirelessGatewayId')

const ServiceProfileArnSchema = z.string().openapi('ServiceProfileArn')

const ServiceProfileIdSchema = z.string().max(256).openapi('ServiceProfileId')

const CreateServiceProfileResponseSchema = z
  .object({
    Arn: ServiceProfileArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the new resource.' }),
    ).exactOptional(),
    Id: ServiceProfileIdSchema.and(
      z.any().openapi({ description: 'The ID of the new service profile.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateServiceProfileResponse')

const AddGwMetadataSchema = z.boolean().openapi('AddGwMetadata')

const DrMinBoxSchema = z.int().min(0).max(15).openapi('DrMinBox')

const DrMaxBoxSchema = z.int().min(0).max(15).openapi('DrMaxBox')

const PrAllowedSchema = z.boolean().openapi('PrAllowed')

const RaAllowedSchema = z.boolean().openapi('RaAllowed')

const WirelessDeviceArnSchema = z.string().openapi('WirelessDeviceArn')

const CreateWirelessDeviceResponseSchema = z
  .object({
    Arn: WirelessDeviceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the new resource.' }),
    ).exactOptional(),
    Id: WirelessDeviceIdSchema.and(
      z.any().openapi({ description: 'The ID of the new wireless device.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateWirelessDeviceResponse')

const DevEuiSchema = z
  .string()
  .regex(/[a-fA-F0-9]{16}/)
  .openapi('DevEui')

const AppKeySchema = z
  .string()
  .regex(/[a-fA-F0-9]{32}/)
  .openapi('AppKey')

const NwkKeySchema = z
  .string()
  .regex(/[a-fA-F0-9]{32}/)
  .openapi('NwkKey')

const JoinEuiSchema = z
  .string()
  .regex(/[a-fA-F0-9]{16}/)
  .openapi('JoinEui')

const OtaaV1_1Schema = z
  .object({
    AppKey: AppKeySchema.and(z.any().openapi({ description: 'The AppKey value.' })).exactOptional(),
    NwkKey: NwkKeySchema.and(z.any().openapi({ description: 'The NwkKey value.' })).exactOptional(),
    JoinEui: JoinEuiSchema.and(
      z.any().openapi({ description: 'The JoinEUI value.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'OTAA device object for v1.1', required: [] })
  .openapi('OtaaV1_1')

const AppEuiSchema = z
  .string()
  .regex(/[a-fA-F0-9]{16}/)
  .openapi('AppEui')

const GenAppKeySchema = z
  .string()
  .regex(/[a-fA-F0-9]{32}/)
  .openapi('GenAppKey')

const OtaaV1_0XSchema = z
  .object({
    AppKey: AppKeySchema.and(z.any().openapi({ description: 'The AppKey value.' })).exactOptional(),
    AppEui: AppEuiSchema.and(z.any().openapi({ description: 'The AppEUI value.' })).exactOptional(),
    GenAppKey: GenAppKeySchema.and(
      z.any().openapi({ description: 'The GenAppKey value.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'OTAA device object for v1.0.x', required: [] })
  .openapi('OtaaV1_0X')

const AbpV1_1Schema: z.ZodType<AbpV1_1Type> = z
  .lazy(() =>
    z
      .object({
        DevAddr: DevAddrSchema.and(
          z.any().openapi({ description: 'The DevAddr value.' }),
        ).exactOptional(),
        SessionKeys: SessionKeysAbpV1_1Schema.and(
          z.any().openapi({ description: 'Session keys for ABP v1.1' }),
        ).exactOptional(),
        FCntStart: FCntStartSchema.and(
          z.any().openapi({ description: 'The FCnt init value.' }),
        ).exactOptional(),
      })
      .openapi({ description: 'ABP device object for LoRaWAN specification v1.1', required: [] }),
  )
  .openapi('AbpV1_1')

const AbpV1_0XSchema: z.ZodType<AbpV1_0XType> = z
  .lazy(() =>
    z
      .object({
        DevAddr: DevAddrSchema.and(
          z.any().openapi({ description: 'The DevAddr value.' }),
        ).exactOptional(),
        SessionKeys: SessionKeysAbpV1_0XSchema.and(
          z.any().openapi({ description: 'Session keys for ABP v1.0.x' }),
        ).exactOptional(),
        FCntStart: FCntStartSchema.and(
          z.any().openapi({ description: 'The FCnt init value.' }),
        ).exactOptional(),
      })
      .openapi({ description: 'ABP device object for LoRaWAN specification v1.0.x', required: [] }),
  )
  .openapi('AbpV1_0X')

const FPortSchema = z
  .int()
  .min(1)
  .max(223)
  .openapi({ description: 'The Fport value.' })
  .openapi('FPort')

const PositioningSchema = z
  .object({
    ClockSync: FPortSchema.exactOptional(),
    Stream: FPortSchema.exactOptional(),
    Gnss: FPortSchema.exactOptional(),
  })
  .openapi({ description: 'The FPorts for the position information.', required: [] })
  .openapi('Positioning')

const ApplicationConfigTypeSchema = z.literal('SemtechGeolocation').openapi('ApplicationConfigType')

const ApplicationConfigSchema = z
  .object({
    FPort: FPortSchema.exactOptional(),
    Type: ApplicationConfigTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Application type, which can be specified to obtain real-time position information of your LoRaWAN device.',
        }),
    ).exactOptional(),
    DestinationName: DestinationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'LoRaWAN application configuration, which can be used to perform geolocation.',
    required: [],
  })
  .openapi('ApplicationConfig')

const ApplicationsSchema = z.array(ApplicationConfigSchema).openapi('Applications')

const FPortsSchema = z
  .object({
    Fuota: FPortSchema.exactOptional(),
    Multicast: FPortSchema.exactOptional(),
    ClockSync: FPortSchema.exactOptional(),
    Positioning: PositioningSchema.and(
      z
        .any()
        .openapi({
          description:
            'FPort values for the GNSS, stream, and ClockSync functions of the positioning information.',
        }),
    ).exactOptional(),
    Applications: ApplicationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional LoRaWAN application information, which can be used for geolocation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'List of FPort assigned for different LoRaWAN application packages to use',
    required: [],
  })
  .openapi('FPorts')

const WirelessGatewayArnSchema = z.string().openapi('WirelessGatewayArn')

const CreateWirelessGatewayResponseSchema = z
  .object({
    Arn: WirelessGatewayArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the new resource.' }),
    ).exactOptional(),
    Id: WirelessDeviceIdSchema.and(
      z.any().openapi({ description: 'The ID of the new wireless gateway.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateWirelessGatewayResponse')

const GatewayEuiSchema = z
  .string()
  .regex(
    /^(([0-9A-Fa-f]{2}-){7}|([0-9A-Fa-f]{2}:){7}|([0-9A-Fa-f]{2}\s){7}|([0-9A-Fa-f]{2}){7})([0-9A-Fa-f]{2})$/,
  )
  .openapi('GatewayEui')

const JoinEuiRangeSchema = z
  .array(JoinEuiSchema)
  .length(2)
  .openapi({
    description: 'A pair of join EUI describing a range [BegEui, EndEui], both ends are inclusive.',
  })
  .openapi('JoinEuiRange')

const JoinEuiFiltersSchema = z
  .array(JoinEuiRangeSchema)
  .min(0)
  .max(3)
  .openapi({ description: 'A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.' })
  .openapi('JoinEuiFilters')

const NetIdSchema = z
  .string()
  .regex(/[a-fA-F0-9]{6}/)
  .openapi({ description: 'LoRaWAN network ID.' })
  .openapi('NetId')

const NetIdFiltersSchema = z
  .array(NetIdSchema)
  .min(0)
  .max(10)
  .openapi({
    description:
      'A list of NetId values that are used by LoRa gateways to filter the uplink frames.',
  })
  .openapi('NetIdFilters')

const SubBandSchema = z
  .int()
  .min(1)
  .max(8)
  .openapi({ description: 'A subset of supported frequency channels in a certain RFRegion.' })
  .openapi('SubBand')

const SubBandsSchema = z
  .array(SubBandSchema)
  .min(0)
  .max(8)
  .openapi({
    description: 'A list of integer indicating which sub bands are supported by LoRa gateway.',
  })
  .openapi('SubBands')

const BeaconingDataRateSchema = z.int().min(0).max(15).openapi('BeaconingDataRate')

const BeaconingFrequencySchema = z
  .int()
  .min(100000000)
  .max(1000000000)
  .openapi('BeaconingFrequency')

const BeaconingFrequenciesSchema = z
  .array(BeaconingFrequencySchema)
  .min(0)
  .max(10)
  .openapi('BeaconingFrequencies')

const BeaconingSchema = z
  .object({
    DataRate: BeaconingDataRateSchema.and(
      z.any().openapi({ description: 'The data rate for gateways that are sending the beacons.' }),
    ).exactOptional(),
    Frequencies: BeaconingFrequenciesSchema.and(
      z.any().openapi({ description: 'The frequency list for the gateways to send the beacons.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Beaconing parameters for configuring the wireless gateways.',
    required: [],
  })
  .openapi('Beaconing')

const GatewayMaxEirpSchema = z.float32().min(0).max(30).openapi('GatewayMaxEirp')

const WirelessGatewayTaskDefinitionIdSchema = z
  .string()
  .regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/)
  .max(36)
  .openapi('WirelessGatewayTaskDefinitionId')

const WirelessGatewayTaskStatusSchema = z
  .enum(['PENDING', 'IN_PROGRESS', 'FIRST_RETRY', 'SECOND_RETRY', 'COMPLETED', 'FAILED'])
  .openapi('WirelessGatewayTaskStatus')

const CreateWirelessGatewayTaskResponseSchema = z
  .object({
    WirelessGatewayTaskDefinitionId: WirelessGatewayTaskDefinitionIdSchema.and(
      z.any().openapi({ description: 'The ID of the WirelessGatewayTaskDefinition.' }),
    ).exactOptional(),
    Status: WirelessGatewayTaskStatusSchema.and(
      z.any().openapi({ description: 'The status of the request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateWirelessGatewayTaskResponse')

const WirelessGatewayTaskDefinitionArnSchema = z
  .string()
  .openapi('WirelessGatewayTaskDefinitionArn')

const CreateWirelessGatewayTaskDefinitionResponseSchema = z
  .object({
    Id: WirelessGatewayTaskDefinitionIdSchema.and(
      z.any().openapi({ description: 'The ID of the new wireless gateway task definition.' }),
    ).exactOptional(),
    Arn: WirelessGatewayTaskDefinitionArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateWirelessGatewayTaskDefinitionResponse')

const UpdateDataSourceSchema = z.string().min(1).max(4096).openapi('UpdateDataSource')

const UpdateSignatureSchema = z.string().min(1).max(4096).openapi('UpdateSignature')

const CrcSchema = z.int().min(1).max(4294967295).openapi('Crc')

const PackageVersionSchema = z.string().min(1).max(32).openapi('PackageVersion')

const ModelSchema = z.string().min(1).max(4096).openapi('Model')

const StationSchema = z.string().min(1).max(4096).openapi('Station')

const LoRaWANGatewayVersionSchema = z
  .object({
    PackageVersion: PackageVersionSchema.and(
      z.any().openapi({ description: 'The version of the wireless gateway firmware.' }),
    ).exactOptional(),
    Model: ModelSchema.and(
      z.any().openapi({ description: 'The model number of the wireless gateway.' }),
    ).exactOptional(),
    Station: StationSchema.and(
      z.any().openapi({ description: 'The basic station version of the wireless gateway.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'LoRaWANGatewayVersion object.', required: [] })
  .openapi('LoRaWANGatewayVersion')

const LoRaWANUpdateGatewayTaskCreateSchema = z
  .object({
    UpdateSignature: UpdateSignatureSchema.and(
      z.any().openapi({ description: 'The signature used to verify the update firmware.' }),
    ).exactOptional(),
    SigKeyCrc: CrcSchema.and(
      z.any().openapi({ description: 'The CRC of the signature private key to check.' }),
    ).exactOptional(),
    CurrentVersion: LoRaWANGatewayVersionSchema.and(
      z
        .any()
        .openapi({ description: 'The version of the gateways that should receive the update.' }),
    ).exactOptional(),
    UpdateVersion: LoRaWANGatewayVersionSchema.and(
      z.any().openapi({ description: 'The firmware version to update the gateway to.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'LoRaWANUpdateGatewayTaskCreate object.', required: [] })
  .openapi('LoRaWANUpdateGatewayTaskCreate')

const DeleteDestinationResponseSchema = z.object({}).openapi('DeleteDestinationResponse')

const DeleteDeviceProfileResponseSchema = z.object({}).openapi('DeleteDeviceProfileResponse')

const DeleteFuotaTaskResponseSchema = z.object({}).openapi('DeleteFuotaTaskResponse')

const DeleteMulticastGroupResponseSchema = z.object({}).openapi('DeleteMulticastGroupResponse')

const DeleteNetworkAnalyzerConfigurationResponseSchema = z
  .object({})
  .openapi('DeleteNetworkAnalyzerConfigurationResponse')

const DeleteQueuedMessagesResponseSchema = z.object({}).openapi('DeleteQueuedMessagesResponse')

const DeleteServiceProfileResponseSchema = z.object({}).openapi('DeleteServiceProfileResponse')

const DeleteWirelessDeviceResponseSchema = z.object({}).openapi('DeleteWirelessDeviceResponse')

const DeleteWirelessDeviceImportTaskResponseSchema = z
  .object({})
  .openapi('DeleteWirelessDeviceImportTaskResponse')

const DeleteWirelessGatewayResponseSchema = z.object({}).openapi('DeleteWirelessGatewayResponse')

const DeleteWirelessGatewayTaskResponseSchema = z
  .object({})
  .openapi('DeleteWirelessGatewayTaskResponse')

const DeleteWirelessGatewayTaskDefinitionResponseSchema = z
  .object({})
  .openapi('DeleteWirelessGatewayTaskDefinitionResponse')

const DeregisterWirelessDeviceResponseSchema = z
  .object({})
  .openapi('DeregisterWirelessDeviceResponse')

const DisassociateAwsAccountFromPartnerAccountResponseSchema = z
  .object({})
  .openapi('DisassociateAwsAccountFromPartnerAccountResponse')

const DisassociateMulticastGroupFromFuotaTaskResponseSchema = z
  .object({})
  .openapi('DisassociateMulticastGroupFromFuotaTaskResponse')

const DisassociateWirelessDeviceFromFuotaTaskResponseSchema = z
  .object({})
  .openapi('DisassociateWirelessDeviceFromFuotaTaskResponse')

const DisassociateWirelessDeviceFromMulticastGroupResponseSchema = z
  .object({})
  .openapi('DisassociateWirelessDeviceFromMulticastGroupResponse')

const DisassociateWirelessDeviceFromThingResponseSchema = z
  .object({})
  .openapi('DisassociateWirelessDeviceFromThingResponse')

const DisassociateWirelessGatewayFromCertificateResponseSchema = z
  .object({})
  .openapi('DisassociateWirelessGatewayFromCertificateResponse')

const DisassociateWirelessGatewayFromThingResponseSchema = z
  .object({})
  .openapi('DisassociateWirelessGatewayFromThingResponse')

const ExpressionSchema = z.string().max(2048).openapi('Expression')

const ExpressionTypeSchema = z.enum(['RuleName', 'MqttTopic']).openapi('ExpressionType')

const DescriptionSchema = z
  .string()
  .max(2048)
  .openapi({ description: 'The description of the new resource.' })
  .openapi('Description')

const RoleArnSchema = z.string().min(20).max(2048).openapi('RoleArn')

const GetDestinationResponseSchema = z
  .object({
    Arn: DestinationArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the resource.' }),
    ).exactOptional(),
    Name: DestinationNameSchema.and(
      z.any().openapi({ description: 'The name of the resource.' }),
    ).exactOptional(),
    Expression: ExpressionSchema.and(
      z.any().openapi({ description: 'The rule name or topic rule to send messages to.' }),
    ).exactOptional(),
    ExpressionType: ExpressionTypeSchema.and(
      z.any().openapi({ description: 'The type of value in <code>Expression</code>.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the resource.' }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z.any().openapi({ description: 'The ARN of the IAM Role that authorizes the destination.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDestinationResponse')

const DeviceProfileNameSchema = z.string().max(256).openapi('DeviceProfileName')

const LoRaWANDeviceProfileSchema = z
  .object({
    SupportsClassB: SupportsClassBSchema.and(
      z.any().openapi({ description: 'The SupportsClassB value.' }),
    ).exactOptional(),
    ClassBTimeout: ClassBTimeoutSchema.and(
      z.any().openapi({ description: 'The ClassBTimeout value.' }),
    ).exactOptional(),
    PingSlotPeriod: PingSlotPeriodSchema.and(
      z.any().openapi({ description: 'The PingSlotPeriod value.' }),
    ).exactOptional(),
    PingSlotDr: PingSlotDrSchema.and(
      z.any().openapi({ description: 'The PingSlotDR value.' }),
    ).exactOptional(),
    PingSlotFreq: PingSlotFreqSchema.and(
      z.any().openapi({ description: 'The PingSlotFreq value.' }),
    ).exactOptional(),
    SupportsClassC: SupportsClassCSchema.and(
      z.any().openapi({ description: 'The SupportsClassC value.' }),
    ).exactOptional(),
    ClassCTimeout: ClassCTimeoutSchema.and(
      z.any().openapi({ description: 'The ClassCTimeout value.' }),
    ).exactOptional(),
    MacVersion: MacVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The MAC version (such as OTAA 1.1 or OTAA 1.0.3) to use with this device profile.',
        }),
    ).exactOptional(),
    RegParamsRevision: RegParamsRevisionSchema.and(
      z.any().openapi({ description: 'The version of regional parameters.' }),
    ).exactOptional(),
    RxDelay1: RxDelay1Schema.and(
      z.any().openapi({ description: 'The RXDelay1 value.' }),
    ).exactOptional(),
    RxDrOffset1: RxDrOffset1Schema.and(
      z.any().openapi({ description: 'The RXDROffset1 value.' }),
    ).exactOptional(),
    RxDataRate2: RxDataRate2Schema.and(
      z.any().openapi({ description: 'The RXDataRate2 value.' }),
    ).exactOptional(),
    RxFreq2: RxFreq2Schema.and(
      z.any().openapi({ description: 'The RXFreq2 value.' }),
    ).exactOptional(),
    FactoryPresetFreqsList: FactoryPresetFreqsListSchema.and(
      z
        .any()
        .openapi({ description: 'The list of values that make up the FactoryPresetFreqs value.' }),
    ).exactOptional(),
    MaxEirp: MaxEirpSchema.and(
      z.any().openapi({ description: 'The MaxEIRP value.' }),
    ).exactOptional(),
    MaxDutyCycle: MaxDutyCycleSchema.and(
      z.any().openapi({ description: 'The MaxDutyCycle value.' }),
    ).exactOptional(),
    RfRegion: RfRegionSchema.and(
      z.any().openapi({ description: 'The frequency band (RFRegion) value.' }),
    ).exactOptional(),
    SupportsJoin: SupportsJoinSchema.and(
      z.any().openapi({ description: 'The SupportsJoin value.' }),
    ).exactOptional(),
    Supports32BitFCnt: Supports32BitFCntSchema.and(
      z.any().openapi({ description: 'The Supports32BitFCnt value.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'LoRaWANDeviceProfile object.', required: [] })
  .openapi('LoRaWANDeviceProfile')

const ApplicationServerPublicKeySchema = z
  .string()
  .regex(/[a-fA-F0-9]{64}/)
  .min(1)
  .max(4096)
  .openapi('ApplicationServerPublicKey')

const QualificationStatusSchema = z.boolean().openapi('QualificationStatus')

const DakCertificateIdSchema = z.string().max(256).openapi('DakCertificateId')

const MaxAllowedSignatureSchema = z.int().openapi('MaxAllowedSignature')

const FactorySupportSchema = z.boolean().openapi('FactorySupport')

const ApIdSchema = z.string().max(256).openapi('ApId')

const DeviceTypeIdSchema = z.string().max(2048).openapi('DeviceTypeId')

const DakCertificateMetadataSchema = z
  .object({
    CertificateId: DakCertificateIdSchema.and(
      z.any().openapi({ description: 'The certificate ID for the DAK.' }),
    ),
    MaxAllowedSignature: MaxAllowedSignatureSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of signatures that the DAK can sign. A value of <code>-1</code> indicates that there's no device limit.",
        }),
    ).exactOptional(),
    FactorySupport: FactorySupportSchema.and(
      z.any().openapi({ description: 'Whether factory support has been enabled.' }),
    ).exactOptional(),
    ApId: ApIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The advertised product ID (APID) that's used for pre-production and production applications.",
        }),
    ).exactOptional(),
    DeviceTypeId: DeviceTypeIdSchema.and(
      z
        .any()
        .openapi({ description: "The device type ID that's used for prototyping applications." }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CertificateId'],
    description: 'The device attestation key (DAK) information.',
  })
  .openapi('DakCertificateMetadata')

const DakCertificateMetadataListSchema = z
  .array(DakCertificateMetadataSchema)
  .openapi('DakCertificateMetadataList')

const SidewalkGetDeviceProfileSchema = z
  .object({
    ApplicationServerPublicKey: ApplicationServerPublicKeySchema.and(
      z.any().openapi({ description: 'The Sidewalk application server public key.' }),
    ).exactOptional(),
    QualificationStatus: QualificationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Gets information about the certification status of a Sidewalk device profile.',
        }),
    ).exactOptional(),
    DakCertificateMetadata: DakCertificateMetadataListSchema.and(
      z
        .any()
        .openapi({
          description: 'The DAK certificate information of the Sidewalk device profile.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Gets information about a Sidewalk device profile.', required: [] })
  .openapi('SidewalkGetDeviceProfile')

const GetDeviceProfileResponseSchema = z
  .object({
    Arn: DeviceProfileArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the resource.' }),
    ).exactOptional(),
    Name: DeviceProfileNameSchema.and(
      z.any().openapi({ description: 'The name of the resource.' }),
    ).exactOptional(),
    Id: DeviceProfileIdSchema.and(
      z.any().openapi({ description: 'The ID of the device profile.' }),
    ).exactOptional(),
    LoRaWAN: LoRaWANDeviceProfileSchema.and(
      z.any().openapi({ description: 'Information about the device profile.' }),
    ).exactOptional(),
    Sidewalk: SidewalkGetDeviceProfileSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the Sidewalk parameters in the device profile.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDeviceProfileResponse')

const SidewalkResourceTypeEventConfigurationSchema = z
  .object({
    WirelessDeviceEventTopic: EventNotificationTopicStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Denotes whether the wireless device join event topic is enabled or disabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Sidewalk resource type event configuration object for enabling or disabling topic.',
    required: [],
  })
  .openapi('SidewalkResourceTypeEventConfiguration')

const DeviceRegistrationStateResourceTypeEventConfigurationSchema = z
  .object({
    Sidewalk: SidewalkResourceTypeEventConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Device registration resource type state event configuration object for enabling or disabling Sidewalk related event topics.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Device registration state resource type event configuration object for enabling or disabling topic.',
    required: [],
  })
  .openapi('DeviceRegistrationStateResourceTypeEventConfiguration')

const ProximityResourceTypeEventConfigurationSchema = z
  .object({
    Sidewalk: SidewalkResourceTypeEventConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Proximity resource type event configuration object for enabling and disabling wireless device topic.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Proximity resource type event configuration object for enabling or disabling topic.',
    required: [],
  })
  .openapi('ProximityResourceTypeEventConfiguration')

const JoinResourceTypeEventConfigurationSchema: z.ZodType<JoinResourceTypeEventConfigurationType> =
  z
    .lazy(() =>
      z
        .object({
          LoRaWAN: LoRaWANJoinResourceTypeEventConfigurationSchema.and(
            z
              .any()
              .openapi({
                description:
                  'Join resource type event configuration object for enabling or disabling LoRaWAN related event topics.',
              }),
          ).exactOptional(),
        })
        .openapi({
          description:
            'Join resource type event configuration object for enabling or disabling topic.',
          required: [],
        }),
    )
    .openapi('JoinResourceTypeEventConfiguration')

const ConnectionStatusResourceTypeEventConfigurationSchema: z.ZodType<ConnectionStatusResourceTypeEventConfigurationType> =
  z
    .lazy(() =>
      z
        .object({
          LoRaWAN: LoRaWANConnectionStatusResourceTypeEventConfigurationSchema.and(
            z
              .any()
              .openapi({
                description:
                  'Connection status resource type event configuration object for enabling or disabling LoRaWAN related event topics.',
              }),
          ).exactOptional(),
        })
        .openapi({
          description:
            'Connection status resource type event configuration object for enabling or disabling topic.',
          required: [],
        }),
    )
    .openapi('ConnectionStatusResourceTypeEventConfiguration')

const MessageDeliveryStatusResourceTypeEventConfigurationSchema = z
  .object({ Sidewalk: SidewalkResourceTypeEventConfigurationSchema.exactOptional() })
  .openapi({
    description:
      'Message delivery status resource type event configuration object for enabling or disabling relevant topic.',
    required: [],
  })
  .openapi('MessageDeliveryStatusResourceTypeEventConfiguration')

const GetEventConfigurationByResourceTypesResponseSchema = z
  .object({
    DeviceRegistrationState: DeviceRegistrationStateResourceTypeEventConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Resource type event configuration for the device registration state event.',
        }),
    ).exactOptional(),
    Proximity: ProximityResourceTypeEventConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'Resource type event configuration for the proximity event.' }),
    ).exactOptional(),
    Join: JoinResourceTypeEventConfigurationSchema.and(
      z.any().openapi({ description: 'Resource type event configuration for the join event.' }),
    ).exactOptional(),
    ConnectionStatus: ConnectionStatusResourceTypeEventConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Resource type event configuration for the connection status event.',
        }),
    ).exactOptional(),
    MessageDeliveryStatus: MessageDeliveryStatusResourceTypeEventConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Resource type event configuration object for the message delivery status event.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEventConfigurationByResourceTypesResponse')

const FuotaTaskStatusSchema = z
  .enum(['Pending', 'FuotaSession_Waiting', 'In_FuotaSession', 'FuotaDone', 'Delete_Waiting'])
  .openapi({ description: 'The status of a FUOTA task.' })
  .openapi('FuotaTaskStatus')

const FuotaTaskNameSchema = z
  .string()
  .max(256)
  .openapi({ description: 'The name of a FUOTA task.' })
  .openapi('FuotaTaskName')

const StartTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({ description: 'Start time of a FUOTA task.' })
  .openapi('StartTime')

const LoRaWANFuotaTaskGetInfoSchema = z
  .object({ RfRegion: RfRegionSchema.exactOptional(), StartTime: StartTimeSchema.exactOptional() })
  .openapi({
    description: 'The LoRaWAN information returned from getting a FUOTA task.',
    required: [],
  })
  .openapi('LoRaWANFuotaTaskGetInfo')

const FirmwareUpdateImageSchema = z
  .string()
  .min(1)
  .max(4096)
  .openapi({
    description:
      'The S3 URI points to a firmware update image that is to be used with a FUOTA task.',
  })
  .openapi('FirmwareUpdateImage')

const FirmwareUpdateRoleSchema = z
  .string()
  .min(1)
  .max(2048)
  .openapi({ description: 'The firmware update role that is to be used with a FUOTA task.' })
  .openapi('FirmwareUpdateRole')

const CreatedAtSchema = z.iso
  .datetime({ offset: true })
  .openapi({ description: 'Created at timestamp for the resource.' })
  .openapi('CreatedAt')

const RedundancyPercentSchema = z
  .int()
  .min(0)
  .max(100)
  .openapi({
    description:
      'The percentage of added redundant fragments. For example, if firmware file is 100 bytes and fragment size is 10 bytes, with <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.',
  })
  .openapi('RedundancyPercent')

const FragmentSizeBytesSchema = z
  .int()
  .min(1)
  .openapi({
    description:
      'The size of each fragment in bytes. Currently only supported in fuota tasks with multicast groups.',
  })
  .openapi('FragmentSizeBytes')

const FragmentIntervalMSSchema = z
  .int()
  .min(1)
  .openapi({
    description:
      "The interval of sending fragments in milliseconds. Currently the interval will be rounded to the nearest second. Note that this interval only controls the timing when the cloud sends the fragments down. The actual delay of receiving fragments at device side depends on the device's class and the communication delay with the cloud.",
  })
  .openapi('FragmentIntervalMS')

const GetFuotaTaskResponseSchema = z
  .object({
    Arn: FuotaTaskArnSchema.exactOptional(),
    Id: FuotaTaskIdSchema.exactOptional(),
    Status: FuotaTaskStatusSchema.exactOptional(),
    Name: FuotaTaskNameSchema.exactOptional(),
    Description: DescriptionSchema.exactOptional(),
    LoRaWAN: LoRaWANFuotaTaskGetInfoSchema.exactOptional(),
    FirmwareUpdateImage: FirmwareUpdateImageSchema.exactOptional(),
    FirmwareUpdateRole: FirmwareUpdateRoleSchema.exactOptional(),
    CreatedAt: CreatedAtSchema.exactOptional(),
    RedundancyPercent: RedundancyPercentSchema.exactOptional(),
    FragmentSizeBytes: FragmentSizeBytesSchema.exactOptional(),
    FragmentIntervalMS: FragmentIntervalMSSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFuotaTaskResponse')

const WirelessGatewayTypeSchema = z
  .literal('LoRaWAN')
  .openapi({ description: 'The wireless gateway type.' })
  .openapi('WirelessGatewayType')

const WirelessGatewayEventSchema = z
  .enum(['CUPS_Request', 'Certificate'])
  .openapi({
    description: 'The event for a log message, if the log message is tied to a wireless gateway.',
  })
  .openapi('WirelessGatewayEvent')

const WirelessGatewayEventLogOptionSchema = z
  .object({ Event: WirelessGatewayEventSchema, LogLevel: LogLevelSchema })
  .openapi({
    required: ['Event', 'LogLevel'],
    description:
      '<p>The log options for a wireless gateway event and can be used to set log levels for a specific wireless gateway event.</p> <p>For a LoRaWAN gateway, possible events for a log message are <code>CUPS_Request</code> and <code>Certificate</code>.</p>',
  })
  .openapi('WirelessGatewayEventLogOption')

const WirelessGatewayEventLogOptionListSchema = z
  .array(WirelessGatewayEventLogOptionSchema)
  .openapi({ description: 'The list of wireless gateway event log options.' })
  .openapi('WirelessGatewayEventLogOptionList')

const WirelessGatewayLogOptionSchema = z
  .object({
    Type: WirelessGatewayTypeSchema,
    LogLevel: LogLevelSchema,
    Events: WirelessGatewayEventLogOptionListSchema.exactOptional(),
  })
  .openapi({
    required: ['Type', 'LogLevel'],
    description:
      'The log options for wireless gateways and can be used to set log levels for a specific type of wireless gateway.',
  })
  .openapi('WirelessGatewayLogOption')

const WirelessGatewayLogOptionListSchema = z
  .array(WirelessGatewayLogOptionSchema)
  .openapi({ description: 'The list of wireless gateway log options.' })
  .openapi('WirelessGatewayLogOptionList')

const WirelessDeviceTypeSchema = z.enum(['Sidewalk', 'LoRaWAN']).openapi('WirelessDeviceType')

const WirelessDeviceEventSchema = z
  .enum(['Join', 'Rejoin', 'Uplink_Data', 'Downlink_Data', 'Registration'])
  .openapi({
    description: 'The event for a log message, if the log message is tied to a wireless device.',
  })
  .openapi('WirelessDeviceEvent')

const WirelessDeviceEventLogOptionSchema = z
  .object({ Event: WirelessDeviceEventSchema, LogLevel: LogLevelSchema })
  .openapi({
    required: ['Event', 'LogLevel'],
    description:
      '<p>The log options for a wireless device event and can be used to set log levels for a specific wireless device event.</p> <p>For a LoRaWAN device, possible events for a log messsage are: <code>Join</code>, <code>Rejoin</code>, <code>Downlink_Data</code>, and <code>Uplink_Data</code>. For a Sidewalk device, possible events for a log message are <code>Registration</code>, <code>Downlink_Data</code>, and <code>Uplink_Data</code>.</p>',
  })
  .openapi('WirelessDeviceEventLogOption')

const WirelessDeviceEventLogOptionListSchema = z
  .array(WirelessDeviceEventLogOptionSchema)
  .openapi({ description: 'The list of wireless device event log options.' })
  .openapi('WirelessDeviceEventLogOptionList')

const WirelessDeviceLogOptionSchema = z
  .object({
    Type: WirelessDeviceTypeSchema.and(
      z.any().openapi({ description: 'The wireless device type.' }),
    ),
    LogLevel: LogLevelSchema,
    Events: WirelessDeviceEventLogOptionListSchema.exactOptional(),
  })
  .openapi({
    required: ['Type', 'LogLevel'],
    description:
      'The log options for wireless devices and can be used to set log levels for a specific type of wireless device.',
  })
  .openapi('WirelessDeviceLogOption')

const WirelessDeviceLogOptionListSchema = z
  .array(WirelessDeviceLogOptionSchema)
  .openapi({ description: 'The list of wireless device log options.' })
  .openapi('WirelessDeviceLogOptionList')

const GetLogLevelsByResourceTypesResponseSchema = z
  .object({
    DefaultLogLevel: LogLevelSchema.exactOptional(),
    WirelessGatewayLogOptions: WirelessGatewayLogOptionListSchema.exactOptional(),
    WirelessDeviceLogOptions: WirelessDeviceLogOptionListSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLogLevelsByResourceTypesResponse')

const MulticastGroupNameSchema = z
  .string()
  .max(256)
  .openapi({ description: 'The name of the multicast group.' })
  .openapi('MulticastGroupName')

const MulticastGroupStatusSchema = z
  .string()
  .max(256)
  .openapi({ description: 'The status of the multicast group.' })
  .openapi('MulticastGroupStatus')

const NumberOfDevicesRequestedSchema = z
  .int()
  .openapi({
    description: 'Number of devices that are requested to be associated with the multicast group.',
  })
  .openapi('NumberOfDevicesRequested')

const NumberOfDevicesInGroupSchema = z
  .int()
  .openapi({ description: 'Number of devices that are associated to the multicast group.' })
  .openapi('NumberOfDevicesInGroup')

const LoRaWANMulticastGetSchema = z
  .object({
    RfRegion: SupportedRfRegionSchema.exactOptional(),
    DlClass: DlClassSchema.exactOptional(),
    NumberOfDevicesRequested: NumberOfDevicesRequestedSchema.exactOptional(),
    NumberOfDevicesInGroup: NumberOfDevicesInGroupSchema.exactOptional(),
  })
  .openapi({
    description:
      'The LoRaWAN information that is to be returned from getting multicast group information.',
    required: [],
  })
  .openapi('LoRaWANMulticastGet')

const GetMulticastGroupResponseSchema = z
  .object({
    Arn: MulticastGroupArnSchema.exactOptional(),
    Id: MulticastGroupIdSchema.exactOptional(),
    Name: MulticastGroupNameSchema.exactOptional(),
    Description: DescriptionSchema.exactOptional(),
    Status: MulticastGroupStatusSchema.exactOptional(),
    LoRaWAN: LoRaWANMulticastGetSchema.exactOptional(),
    CreatedAt: CreatedAtSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMulticastGroupResponse')

const DlDrSchema = z
  .int()
  .min(0)
  .max(15)
  .openapi({ description: 'Downlink data rate.' })
  .openapi('DlDr')

const DlFreqSchema = z
  .int()
  .min(100000000)
  .max(1000000000)
  .openapi({ description: 'Downlink frequency.' })
  .openapi('DlFreq')

const SessionStartTimeTimestampSchema = z.iso
  .datetime({ offset: true })
  .openapi({ description: 'Timestamp of when the multicast group session is to start.' })
  .openapi('SessionStartTimeTimestamp')

const SessionTimeoutSchema = z
  .int()
  .min(60)
  .max(172800)
  .openapi({ description: 'How long before a multicast group session is to timeout.' })
  .openapi('SessionTimeout')

const LoRaWANMulticastSessionSchema = z
  .object({
    DlDr: DlDrSchema.exactOptional(),
    DlFreq: DlFreqSchema.exactOptional(),
    SessionStartTime: SessionStartTimeTimestampSchema.exactOptional(),
    SessionTimeout: SessionTimeoutSchema.exactOptional(),
    PingSlotPeriod: PingSlotPeriodSchema.and(
      z.any().openapi({ description: 'The PingSlotPeriod value.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The LoRaWAN information used with the multicast session.',
    required: [],
  })
  .openapi('LoRaWANMulticastSession')

const GetMulticastGroupSessionResponseSchema = z
  .object({ LoRaWAN: LoRaWANMulticastSessionSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GetMulticastGroupSessionResponse')

const TraceContentSchema = z
  .object({
    WirelessDeviceFrameInfo: WirelessDeviceFrameInfoSchema.exactOptional(),
    LogLevel: LogLevelSchema.exactOptional(),
  })
  .openapi({
    description: 'Trace content for your wireless gateway and wireless device resources.',
    required: [],
  })
  .openapi('TraceContent')

const WirelessDeviceListSchema = z
  .array(WirelessDeviceIdSchema)
  .min(0)
  .max(250)
  .openapi('WirelessDeviceList')

const WirelessGatewayListSchema = z.array(WirelessGatewayIdSchema).openapi('WirelessGatewayList')

const GetNetworkAnalyzerConfigurationResponseSchema = z
  .object({
    TraceContent: TraceContentSchema.exactOptional(),
    WirelessDevices: WirelessDeviceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of wireless gateway resources that have been added to the network analyzer configuration.',
        }),
    ).exactOptional(),
    WirelessGateways: WirelessGatewayListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of wireless gateway resources that have been added to the network analyzer configuration.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.exactOptional(),
    Arn: NetworkAnalyzerConfigurationArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the new resource.' }),
    ).exactOptional(),
    Name: NetworkAnalyzerConfigurationNameSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetNetworkAnalyzerConfigurationResponse')

const FingerprintSchema = z
  .string()
  .regex(/[a-fA-F0-9]{64}/)
  .length(64)
  .openapi('Fingerprint')

const SidewalkAccountInfoWithFingerprintSchema = z
  .object({
    AmazonId: AmazonIdSchema.and(
      z.any().openapi({ description: 'The Sidewalk Amazon ID.' }),
    ).exactOptional(),
    Fingerprint: FingerprintSchema.and(
      z
        .any()
        .openapi({
          description: 'The fingerprint of the Sidewalk application server private key.',
        }),
    ).exactOptional(),
    Arn: PartnerAccountArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the resource.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a Sidewalk account.', required: [] })
  .openapi('SidewalkAccountInfoWithFingerprint')

const AccountLinkedSchema = z.boolean().openapi('AccountLinked')

const GetPartnerAccountResponseSchema = z
  .object({
    Sidewalk: SidewalkAccountInfoWithFingerprintSchema.and(
      z.any().openapi({ description: 'The Sidewalk account credentials.' }),
    ).exactOptional(),
    AccountLinked: AccountLinkedSchema.and(
      z.any().openapi({ description: 'Whether the partner account is linked to the AWS account.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPartnerAccountResponse')

const PositionCoordinateValueSchema = z.float32().openapi('PositionCoordinateValue')

const PositionCoordinateSchema = z
  .array(PositionCoordinateValueSchema)
  .openapi('PositionCoordinate')

const AccuracySchema: z.ZodType<AccuracyType> = z
  .lazy(() =>
    z
      .object({
        HorizontalAccuracy: HorizontalAccuracySchema.and(
          z
            .any()
            .openapi({
              description:
                'The horizontal accuracy of the estimated position, which is the difference between the estimated location and the actual device location.',
            }),
        ).exactOptional(),
        VerticalAccuracy: VerticalAccuracySchema.and(
          z
            .any()
            .openapi({
              description:
                'The vertical accuracy of the estimated position, which is the difference between the estimated altitude and actual device latitude in meters.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'The accuracy of the estimated position in meters. An empty value indicates that no position data is available. A value of ‘0.0’ value indicates that position data is available. This data corresponds to the position information that you specified instead of the position computed by solver.',
        required: [],
      }),
  )
  .openapi('Accuracy')

const PositionSolverTypeSchema = z.literal('GNSS').openapi('PositionSolverType')

const PositionSolverProviderSchema = z.literal('Semtech').openapi('PositionSolverProvider')

const PositionSolverVersionSchema = z.string().min(0).max(50).openapi('PositionSolverVersion')

const ISODateTimeStringSchema = z
  .string()
  .regex(
    /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,
  )
  .openapi('ISODateTimeString')

const GetPositionResponseSchema = z
  .object({
    Position: PositionCoordinateSchema.and(
      z.any().openapi({ description: 'The position information of the resource.' }),
    ).exactOptional(),
    Accuracy: AccuracySchema.and(
      z
        .any()
        .openapi({
          description:
            'The accuracy of the estimated position in meters. An empty value indicates that no position data is available. A value of ‘0.0’ value indicates that position data is available. This data corresponds to the position information that you specified instead of the position computed by solver.',
        }),
    ).exactOptional(),
    SolverType: PositionSolverTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of solver used to identify the position of the resource.',
        }),
    ).exactOptional(),
    SolverProvider: PositionSolverProviderSchema.and(
      z.any().openapi({ description: 'The vendor of the positioning solver.' }),
    ).exactOptional(),
    SolverVersion: PositionSolverVersionSchema.and(
      z.any().openapi({ description: 'The version of the positioning solver.' }),
    ).exactOptional(),
    Timestamp: ISODateTimeStringSchema.and(
      z
        .any()
        .openapi({ description: "The timestamp at which the device's position was determined." }),
    ).exactOptional(),
  })
  .openapi({
    deprecated: true,
    description: 'This operation is no longer supported.',
    required: [],
  })
  .openapi('GetPositionResponse')

const PositionConfigurationStatusSchema = z
  .enum(['Enabled', 'Disabled'])
  .openapi('PositionConfigurationStatus')

const PositionConfigurationFecSchema = z.enum(['ROSE', 'NONE']).openapi('PositionConfigurationFec')

const SemtechGnssDetailSchema = z
  .object({
    Provider: PositionSolverProviderSchema.and(
      z.any().openapi({ description: 'The vendor of the solver object.' }),
    ).exactOptional(),
    Type: PositionSolverTypeSchema.and(
      z.any().openapi({ description: 'The type of positioning solver used.' }),
    ).exactOptional(),
    Status: PositionConfigurationStatusSchema.and(
      z.any().openapi({ description: 'The status indicating whether the solver is enabled.' }),
    ).exactOptional(),
    Fec: PositionConfigurationFecSchema.and(
      z.any().openapi({ description: 'Whether forward error correction is enabled.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details of the Semtech GNSS solver object.', required: [] })
  .openapi('SemtechGnssDetail')

const PositionSolverDetailsSchema = z
  .object({
    SemtechGnss: SemtechGnssDetailSchema.and(
      z.any().openapi({ description: 'The Semtech GNSS solver object details.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The wrapper for position solver details.', required: [] })
  .openapi('PositionSolverDetails')

const GetPositionConfigurationResponseSchema = z
  .object({
    Solvers: PositionSolverDetailsSchema.and(
      z.any().openapi({ description: 'The wrapper for the solver configuration details object.' }),
    ).exactOptional(),
    Destination: DestinationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.",
        }),
    ).exactOptional(),
  })
  .openapi({
    deprecated: true,
    description: 'This operation is no longer supported.',
    required: [],
  })
  .openapi('GetPositionConfigurationResponse')

const GeoJsonPayloadSchema = z.string().openapi('GeoJsonPayload')

const GetPositionEstimateResponseSchema = z
  .object({
    GeoJsonPayload: GeoJsonPayloadSchema.and(
      z
        .any()
        .openapi({
          description:
            'The position information of the resource, displayed as a JSON payload. The payload uses the GeoJSON format, which a format that\'s used to encode geographic data structures. For more information, see <a href="https://geojson.org/">GeoJSON</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPositionEstimateResponse')

const MacAddressSchema = z
  .string()
  .regex(/^([0-9A-Fa-f]{2}[:-]?){5}([0-9A-Fa-f]{2})$/)
  .min(12)
  .max(17)
  .openapi('MacAddress')

const RSSSchema = z.int().min(-128).max(0).openapi('RSS')

const WiFiAccessPointSchema = z
  .object({
    MacAddress: MacAddressSchema.and(z.any().openapi({ description: 'Wi-Fi MAC Address.' })),
    Rss: RSSSchema.and(
      z
        .any()
        .openapi({ description: 'Received signal strength (dBm) of the WLAN measurement data.' }),
    ),
  })
  .openapi({ required: ['MacAddress', 'Rss'], description: 'Wi-Fi access point.' })
  .openapi('WiFiAccessPoint')

const MCCSchema = z.int().min(200).max(999).openapi('MCC')

const MNCSchema = z.int().min(0).max(999).openapi('MNC')

const LACSchema = z.int().min(1).max(65535).openapi('LAC')

const GeranCidSchema = z.int().min(0).max(65535).openapi('GeranCid')

const BSICSchema = z.int().min(0).max(63).openapi('BSIC')

const BCCHSchema = z.int().min(0).max(1023).openapi('BCCH')

const GsmLocalIdSchema = z
  .object({
    Bsic: BSICSchema.and(
      z.any().openapi({ description: 'GSM base station identity code (BSIC).' }),
    ),
    Bcch: BCCHSchema.and(z.any().openapi({ description: 'GSM broadcast control channel.' })),
  })
  .openapi({
    required: ['Bsic', 'Bcch'],
    description:
      'GSM local ID information, which corresponds to the local identification parameters of a GSM cell.',
  })
  .openapi('GsmLocalId')

const GsmTimingAdvanceSchema = z.int().min(0).max(63).openapi('GsmTimingAdvance')

const RxLevelSchema = z.int().min(-110).max(-25).openapi('RxLevel')

const GlobalIdentitySchema = z
  .object({
    Lac: LACSchema.and(
      z.any().openapi({ description: 'Location area code of the global identity.' }),
    ),
    GeranCid: GeranCidSchema.and(
      z
        .any()
        .openapi({ description: 'GERAN (GSM EDGE Radio Access Network) cell global identifier.' }),
    ),
  })
  .openapi({ required: ['Lac', 'GeranCid'], description: 'Global identity information.' })
  .openapi('GlobalIdentity')

const GsmNmrObjSchema = z
  .object({
    Bsic: BSICSchema.and(
      z.any().openapi({ description: 'GSM base station identity code (BSIC).' }),
    ),
    Bcch: BCCHSchema.and(z.any().openapi({ description: 'GSM broadcast control channel.' })),
    RxLevel: RxLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            'Rx level, which is the received signal power, measured in dBm (decibel-milliwatts).',
        }),
    ).exactOptional(),
    GlobalIdentity: GlobalIdentitySchema.and(
      z.any().openapi({ description: 'Global identity information of the GSM object.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Bsic', 'Bcch'],
    description: 'GSM object for network measurement reports.',
  })
  .openapi('GsmNmrObj')

const GsmNmrListSchema = z.array(GsmNmrObjSchema).min(1).max(32).openapi('GsmNmrList')

const GsmObjSchema = z
  .object({
    Mcc: MCCSchema.and(z.any().openapi({ description: 'Mobile Country Code.' })),
    Mnc: MNCSchema.and(z.any().openapi({ description: 'Mobile Network Code.' })),
    Lac: LACSchema.and(z.any().openapi({ description: 'Location area code.' })),
    GeranCid: GeranCidSchema.and(
      z
        .any()
        .openapi({ description: 'GERAN (GSM EDGE Radio Access Network) Cell Global Identifier.' }),
    ),
    GsmLocalId: GsmLocalIdSchema.and(
      z.any().openapi({ description: 'GSM local identification (local ID) information.' }),
    ).exactOptional(),
    GsmTimingAdvance: GsmTimingAdvanceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Timing advance value, which corresponds to the length of time a signal takes to reach the base station from a mobile phone.',
        }),
    ).exactOptional(),
    RxLevel: RxLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            'Rx level, which is the received signal power, measured in dBm (decibel-milliwatts).',
        }),
    ).exactOptional(),
    GsmNmr: GsmNmrListSchema.and(
      z.any().openapi({ description: 'GSM object for network measurement reports.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Mcc', 'Mnc', 'Lac', 'GeranCid'], description: 'GSM object.' })
  .openapi('GsmObj')

const GsmListSchema = z.array(GsmObjSchema).min(1).max(16).openapi('GsmList')

const UtranCidSchema = z.int().min(0).max(268435455).openapi('UtranCid')

const UARFCNDLSchema = z.int().min(0).max(16383).openapi('UARFCNDL')

const PSCSchema = z.int().min(0).max(511).openapi('PSC')

const WcdmaLocalIdSchema = z
  .object({
    Uarfcndl: UARFCNDLSchema.and(
      z.any().openapi({ description: 'WCDMA UTRA Absolute RF Channel Number downlink.' }),
    ),
    Psc: PSCSchema.and(z.any().openapi({ description: 'Primary Scrambling Code.' })),
  })
  .openapi({
    required: ['Uarfcndl', 'Psc'],
    description: 'WCDMA local identification (local ID) information.',
  })
  .openapi('WcdmaLocalId')

const RSCPSchema = z.int().min(-120).max(-25).openapi('RSCP')

const PathLossSchema = z.int().min(46).max(158).openapi('PathLoss')

const WcdmaNmrObjSchema = z
  .object({
    Uarfcndl: UARFCNDLSchema.and(
      z.any().openapi({ description: 'WCDMA UTRA Absolute RF Channel Number downlink.' }),
    ),
    Psc: PSCSchema.and(z.any().openapi({ description: 'Primary Scrambling Code.' })),
    UtranCid: UtranCidSchema.and(
      z
        .any()
        .openapi({
          description: 'UTRAN (UMTS Terrestrial Radio Access Network) Cell Global Identifier.',
        }),
    ),
    Rscp: RSCPSchema.and(
      z.any().openapi({ description: 'Received Signal Code Power (signal power) (dBm)' }),
    ).exactOptional(),
    PathLoss: PathLossSchema.and(
      z
        .any()
        .openapi({
          description:
            'Path loss, or path attenuation, is the reduction in power density of an electromagnetic wave as it propagates through space.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Uarfcndl', 'Psc', 'UtranCid'],
    description: 'Network Measurement Reports.',
  })
  .openapi('WcdmaNmrObj')

const WcdmaNmrListSchema = z.array(WcdmaNmrObjSchema).min(1).max(32).openapi('WcdmaNmrList')

const WcdmaObjSchema = z
  .object({
    Mcc: MCCSchema.and(z.any().openapi({ description: 'Mobile Country Code.' })),
    Mnc: MNCSchema.and(z.any().openapi({ description: 'Mobile Network Code.' })),
    Lac: LACSchema.and(z.any().openapi({ description: 'Location Area Code.' })).exactOptional(),
    UtranCid: UtranCidSchema.and(
      z
        .any()
        .openapi({
          description: 'UTRAN (UMTS Terrestrial Radio Access Network) Cell Global Identifier.',
        }),
    ),
    WcdmaLocalId: WcdmaLocalIdSchema.and(
      z.any().openapi({ description: 'WCDMA local ID information.' }),
    ).exactOptional(),
    Rscp: RSCPSchema.and(
      z.any().openapi({ description: 'Received Signal Code Power (signal power) (dBm).' }),
    ).exactOptional(),
    PathLoss: PathLossSchema.and(
      z
        .any()
        .openapi({
          description:
            'Path loss, or path attenuation, is the reduction in power density of an electromagnetic wave as it propagates through space.',
        }),
    ).exactOptional(),
    WcdmaNmr: WcdmaNmrListSchema.and(
      z.any().openapi({ description: 'WCDMA object for network measurement reports.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Mcc', 'Mnc', 'UtranCid'], description: 'WCDMA.' })
  .openapi('WcdmaObj')

const WcdmaListSchema = z.array(WcdmaObjSchema).min(1).max(16).openapi('WcdmaList')

const UARFCNSchema = z.int().min(0).max(16383).openapi('UARFCN')

const CellParamsSchema = z.int().min(0).max(127).openapi('CellParams')

const TdscdmaLocalIdSchema = z
  .object({
    Uarfcn: UARFCNSchema.and(
      z
        .any()
        .openapi({
          description:
            'TD-SCDMA UTRA (Universal Terrestrial Radio Access Network) absolute RF channel number (UARFCN).',
        }),
    ),
    CellParams: CellParamsSchema.and(
      z.any().openapi({ description: 'Cell parameters for TD-SCDMA.' }),
    ),
  })
  .openapi({
    required: ['Uarfcn', 'CellParams'],
    description: 'TD-SCDMA local identification (local Id) information.',
  })
  .openapi('TdscdmaLocalId')

const TdscdmaTimingAdvanceSchema = z.int().min(0).max(1530).openapi('TdscdmaTimingAdvance')

const TdscdmaNmrObjSchema = z
  .object({
    Uarfcn: UARFCNSchema.and(
      z
        .any()
        .openapi({
          description:
            'TD-SCDMA UTRA (Universal Terrestrial Radio Access Network) absolute RF channel number.',
        }),
    ),
    CellParams: CellParamsSchema.and(
      z
        .any()
        .openapi({
          description: 'Cell parameters for TD-SCDMA network measurement reports object.',
        }),
    ),
    UtranCid: UtranCidSchema.and(
      z
        .any()
        .openapi({
          description: 'UTRAN (UMTS Terrestrial Radio Access Network) cell global identifier.',
        }),
    ).exactOptional(),
    Rscp: RSCPSchema.and(
      z
        .any()
        .openapi({
          description: 'Code power of the received signal, measured in decibel-milliwatts (dBm).',
        }),
    ).exactOptional(),
    PathLoss: PathLossSchema.and(
      z
        .any()
        .openapi({
          description:
            'Path loss, or path attenuation, is the reduction in power density of an electromagnetic wave as it propagates through space.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Uarfcn', 'CellParams'],
    description: 'TD-SCDMA object for network measurement reports.',
  })
  .openapi('TdscdmaNmrObj')

const TdscdmaNmrListSchema = z.array(TdscdmaNmrObjSchema).min(1).max(32).openapi('TdscdmaNmrList')

const TdscdmaObjSchema = z
  .object({
    Mcc: MCCSchema.and(z.any().openapi({ description: 'Mobile Country Code.' })),
    Mnc: MNCSchema.and(z.any().openapi({ description: 'Mobile Network Code.' })),
    Lac: LACSchema.and(z.any().openapi({ description: 'Location Area Code.' })).exactOptional(),
    UtranCid: UtranCidSchema.and(
      z
        .any()
        .openapi({
          description: 'UTRAN (UMTS Terrestrial Radio Access Network) Cell Global Identifier.',
        }),
    ),
    TdscdmaLocalId: TdscdmaLocalIdSchema.and(
      z.any().openapi({ description: 'TD-SCDMA local identification (local ID) information.' }),
    ).exactOptional(),
    TdscdmaTimingAdvance: TdscdmaTimingAdvanceSchema.and(
      z.any().openapi({ description: 'TD-SCDMA Timing advance.' }),
    ).exactOptional(),
    Rscp: RSCPSchema.and(
      z
        .any()
        .openapi({
          description:
            'Signal power of the received signal (Received Signal Code Power), measured in decibel-milliwatts (dBm).',
        }),
    ).exactOptional(),
    PathLoss: PathLossSchema.and(
      z
        .any()
        .openapi({
          description:
            'Path loss, or path attenuation, is the reduction in power density of an electromagnetic wave as it propagates through space.',
        }),
    ).exactOptional(),
    TdscdmaNmr: TdscdmaNmrListSchema.and(
      z.any().openapi({ description: 'TD-SCDMA object for network measurement reports.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Mcc', 'Mnc', 'UtranCid'], description: 'TD-SCDMA object.' })
  .openapi('TdscdmaObj')

const TdscdmaListSchema = z.array(TdscdmaObjSchema).min(1).max(16).openapi('TdscdmaList')

const EutranCidSchema = z.int().min(0).max(268435455).openapi('EutranCid')

const TACSchema = z.int().min(0).max(65535).openapi('TAC')

const PCISchema = z.int().min(0).max(503).openapi('PCI')

const EARFCNSchema = z.int().min(0).max(262143).openapi('EARFCN')

const LteLocalIdSchema = z
  .object({
    Pci: PCISchema.and(z.any().openapi({ description: 'Physical cell ID.' })),
    Earfcn: EARFCNSchema.and(
      z
        .any()
        .openapi({
          description:
            'Evolved universal terrestrial radio access (E-UTRA) absolute radio frequency channel number (FCN).',
        }),
    ),
  })
  .openapi({
    required: ['Pci', 'Earfcn'],
    description: 'LTE local identification (local ID) information.',
  })
  .openapi('LteLocalId')

const LteTimingAdvanceSchema = z.int().min(0).max(1282).openapi('LteTimingAdvance')

const RSRPSchema = z.int().min(-140).max(-44).openapi('RSRP')

const RSRQSchema = z.float32().min(-19.5).max(-3).openapi('RSRQ')

const NRCapableSchema = z.boolean().openapi('NRCapable')

const LteNmrObjSchema = z
  .object({
    Pci: PCISchema.and(z.any().openapi({ description: 'Physical cell ID.' })),
    Earfcn: EARFCNSchema.and(
      z
        .any()
        .openapi({
          description:
            'E-UTRA (Evolved universal terrestrial Radio Access) absolute radio frequency channel Number (EARFCN).',
        }),
    ),
    EutranCid: EutranCidSchema.and(
      z
        .any()
        .openapi({
          description:
            'E-UTRAN (Evolved Universal Terrestrial Radio Access Network) cell global identifier (EUTRANCID).',
        }),
    ),
    Rsrp: RSRPSchema.and(
      z
        .any()
        .openapi({
          description:
            'Signal power of the reference signal received, measured in dBm (decibel-milliwatts).',
        }),
    ).exactOptional(),
    Rsrq: RSRQSchema.and(
      z
        .any()
        .openapi({
          description:
            'Signal quality of the reference Signal received, measured in decibels (dB).',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Pci', 'Earfcn', 'EutranCid'],
    description: 'LTE object for network measurement reports.',
  })
  .openapi('LteNmrObj')

const LteNmrListSchema = z.array(LteNmrObjSchema).min(1).max(32).openapi('LteNmrList')

const LteObjSchema = z
  .object({
    Mcc: MCCSchema.and(z.any().openapi({ description: 'Mobile Country Code.' })),
    Mnc: MNCSchema.and(z.any().openapi({ description: 'Mobile Network Code.' })),
    EutranCid: EutranCidSchema.and(
      z
        .any()
        .openapi({
          description:
            'E-UTRAN (Evolved Universal Terrestrial Radio Access Network) Cell Global Identifier.',
        }),
    ),
    Tac: TACSchema.and(z.any().openapi({ description: 'LTE tracking area code.' })).exactOptional(),
    LteLocalId: LteLocalIdSchema.and(
      z.any().openapi({ description: 'LTE local identification (local ID) information.' }),
    ).exactOptional(),
    LteTimingAdvance: LteTimingAdvanceSchema.and(
      z.any().openapi({ description: 'LTE timing advance.' }),
    ).exactOptional(),
    Rsrp: RSRPSchema.and(
      z
        .any()
        .openapi({
          description:
            'Signal power of the reference signal received, measured in dBm (decibel-milliwatts).',
        }),
    ).exactOptional(),
    Rsrq: RSRQSchema.and(
      z
        .any()
        .openapi({
          description:
            'Signal quality of the reference Signal received, measured in decibels (dB).',
        }),
    ).exactOptional(),
    NrCapable: NRCapableSchema.and(
      z
        .any()
        .openapi({
          description:
            'Parameter that determines whether the LTE object is capable of supporting NR (new radio).',
        }),
    ).exactOptional(),
    LteNmr: LteNmrListSchema.and(
      z.any().openapi({ description: 'LTE object for network measurement reports.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Mcc', 'Mnc', 'EutranCid'], description: 'LTE object.' })
  .openapi('LteObj')

const LteListSchema = z.array(LteObjSchema).min(1).max(16).openapi('LteList')

const SystemIdSchema = z.int().min(1).max(32767).openapi('SystemId')

const NetworkIdSchema = z.int().min(0).max(65535).openapi('NetworkId')

const BaseStationIdSchema = z.int().min(0).max(65535).openapi('BaseStationId')

const RegistrationZoneSchema = z.int().min(0).max(4095).openapi('RegistrationZone')

const PnOffsetSchema = z.int().min(0).max(511).openapi('PnOffset')

const CdmaChannelSchema = z.int().min(0).max(4095).openapi('CdmaChannel')

const CdmaLocalIdSchema = z
  .object({
    PnOffset: PnOffsetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Pseudo-noise offset, which is a characteristic of the signal from a cell on a radio tower.',
        }),
    ),
    CdmaChannel: CdmaChannelSchema.and(
      z.any().openapi({ description: 'CDMA channel information.' }),
    ),
  })
  .openapi({
    required: ['PnOffset', 'CdmaChannel'],
    description:
      'CDMA local ID information, which corresponds to the local identification parameters of a CDMA cell.',
  })
  .openapi('CdmaLocalId')

const PilotPowerSchema = z.int().min(-142).max(-49).openapi('PilotPower')

const BaseLatSchema = z.float32().min(-90).max(90).openapi('BaseLat')

const BaseLngSchema = z.float32().min(-180).max(180).openapi('BaseLng')

const CdmaNmrObjSchema = z
  .object({
    PnOffset: PnOffsetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Pseudo-noise offset, which is a characteristic of the signal from a cell on a radio tower.',
        }),
    ),
    CdmaChannel: CdmaChannelSchema.and(
      z.any().openapi({ description: 'CDMA channel information.' }),
    ),
    PilotPower: PilotPowerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Transmit power level of the pilot signal, measured in dBm (decibel-milliwatts).',
        }),
    ).exactOptional(),
    BaseStationId: BaseStationIdSchema.and(
      z.any().openapi({ description: 'CDMA base station ID (BSID).' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PnOffset', 'CdmaChannel'],
    description: 'CDMA object for network measurement reports.',
  })
  .openapi('CdmaNmrObj')

const CdmaNmrListSchema = z.array(CdmaNmrObjSchema).min(1).max(32).openapi('CdmaNmrList')

const CdmaObjSchema = z
  .object({
    SystemId: SystemIdSchema.and(z.any().openapi({ description: 'CDMA system ID (SID).' })),
    NetworkId: NetworkIdSchema.and(z.any().openapi({ description: 'CDMA network ID (NID).' })),
    BaseStationId: BaseStationIdSchema.and(
      z.any().openapi({ description: 'CDMA base station ID (BSID).' }),
    ),
    RegistrationZone: RegistrationZoneSchema.and(
      z.any().openapi({ description: 'CDMA registration zone (RZ).' }),
    ).exactOptional(),
    CdmaLocalId: CdmaLocalIdSchema.and(
      z.any().openapi({ description: 'CDMA local identification (local ID) parameters.' }),
    ).exactOptional(),
    PilotPower: PilotPowerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Transmit power level of the pilot signal, measured in dBm (decibel-milliwatts).',
        }),
    ).exactOptional(),
    BaseLat: BaseLatSchema.and(
      z.any().openapi({ description: 'CDMA base station latitude in degrees.' }),
    ).exactOptional(),
    BaseLng: BaseLngSchema.and(
      z.any().openapi({ description: 'CDMA base station longitude in degrees.' }),
    ).exactOptional(),
    CdmaNmr: CdmaNmrListSchema.and(
      z.any().openapi({ description: 'CDMA network measurement reports.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SystemId', 'NetworkId', 'BaseStationId'],
    description: 'CDMA (Code-division multiple access) object.',
  })
  .openapi('CdmaObj')

const CdmaListSchema = z.array(CdmaObjSchema).min(1).max(16).openapi('CdmaList')

const IPAddressSchema = z.string().openapi('IPAddress')

const GnssNavSchema = z.string().max(2048).openapi('GnssNav')

const GPSTSchema = z.float32().openapi('GPST')

const CaptureTimeAccuracySchema = z.float32().openapi('CaptureTimeAccuracy')

const CoordinateSchema = z.float32().openapi('Coordinate')

const AssistPositionSchema = z.array(CoordinateSchema).length(2).openapi('AssistPosition')

const Use2DSolverSchema = z.boolean().openapi('Use2DSolver')

const SidewalkEventNotificationConfigurationsSchema = z
  .object({
    AmazonIdEventTopic: EventNotificationTopicStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'Denotes whether the Amazon ID event topic is enabled or disabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' <code>SidewalkEventNotificationConfigurations</code> object, which is the event configuration object for Sidewalk-related event topics.',
    required: [],
  })
  .openapi('SidewalkEventNotificationConfigurations')

const DeviceRegistrationStateEventConfigurationSchema = z
  .object({
    Sidewalk: SidewalkEventNotificationConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Device registration state event configuration object for enabling or disabling Sidewalk related event topics.',
        }),
    ).exactOptional(),
    WirelessDeviceIdEventTopic: EventNotificationTopicStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Denotes whether the wireless device ID device registration state event topic is enabled or disabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Device registration state event configuration object for enabling and disabling relevant topics.',
    required: [],
  })
  .openapi('DeviceRegistrationStateEventConfiguration')

const ProximityEventConfigurationSchema = z
  .object({
    Sidewalk: SidewalkEventNotificationConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Proximity event configuration object for enabling or disabling Sidewalk related event topics.',
        }),
    ).exactOptional(),
    WirelessDeviceIdEventTopic: EventNotificationTopicStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Denotes whether the wireless device ID proximity event topic is enabled or disabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Proximity event configuration object for enabling and disabling relevant topics.',
    required: [],
  })
  .openapi('ProximityEventConfiguration')

const LoRaWANJoinEventNotificationConfigurationsSchema = z
  .object({
    DevEuiEventTopic: EventNotificationTopicStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'Denotes whether the Dev EUI join event topic is enabled or disabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Object for LoRaWAN join resource type event configuration.',
    required: [],
  })
  .openapi('LoRaWANJoinEventNotificationConfigurations')

const JoinEventConfigurationSchema = z
  .object({
    LoRaWAN: LoRaWANJoinEventNotificationConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Join event configuration object for enabling or disabling LoRaWAN related event topics.',
        }),
    ).exactOptional(),
    WirelessDeviceIdEventTopic: EventNotificationTopicStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Denotes whether the wireless device ID join event topic is enabled or disabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Join event configuration object for enabling or disabling topic.',
    required: [],
  })
  .openapi('JoinEventConfiguration')

const LoRaWANConnectionStatusEventNotificationConfigurationsSchema = z
  .object({
    GatewayEuiEventTopic: EventNotificationTopicStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Denotes whether the gateway EUI connection status event topic is enabled or disabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Object for LoRaWAN connection status resource type event configuration.',
    required: [],
  })
  .openapi('LoRaWANConnectionStatusEventNotificationConfigurations')

const ConnectionStatusEventConfigurationSchema = z
  .object({
    LoRaWAN: LoRaWANConnectionStatusEventNotificationConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Connection status event configuration object for enabling or disabling LoRaWAN related event topics.',
        }),
    ).exactOptional(),
    WirelessGatewayIdEventTopic: EventNotificationTopicStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Denotes whether the wireless gateway ID connection status event topic is enabled or disabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Connection status event configuration object for enabling or disabling topic.',
    required: [],
  })
  .openapi('ConnectionStatusEventConfiguration')

const MessageDeliveryStatusEventConfigurationSchema = z
  .object({
    Sidewalk: SidewalkEventNotificationConfigurationsSchema.exactOptional(),
    WirelessDeviceIdEventTopic: EventNotificationTopicStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Denotes whether the wireless device ID message delivery status event topic is enabled or disabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Message delivery status event configuration object for enabling and disabling relevant topics.',
    required: [],
  })
  .openapi('MessageDeliveryStatusEventConfiguration')

const GetResourceEventConfigurationResponseSchema = z
  .object({
    DeviceRegistrationState: DeviceRegistrationStateEventConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'Event configuration for the device registration state event.' }),
    ).exactOptional(),
    Proximity: ProximityEventConfigurationSchema.and(
      z.any().openapi({ description: 'Event configuration for the proximity event.' }),
    ).exactOptional(),
    Join: JoinEventConfigurationSchema.and(
      z.any().openapi({ description: 'Event configuration for the join event.' }),
    ).exactOptional(),
    ConnectionStatus: ConnectionStatusEventConfigurationSchema.and(
      z.any().openapi({ description: 'Event configuration for the connection status event.' }),
    ).exactOptional(),
    MessageDeliveryStatus: MessageDeliveryStatusEventConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'Event configuration for the message delivery status event.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResourceEventConfigurationResponse')

const GetResourceLogLevelResponseSchema = z
  .object({ LogLevel: LogLevelSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GetResourceLogLevelResponse')

const GetResourcePositionResponseSchema = z
  .object({
    GeoJsonPayload: GeoJsonPayloadSchema.and(
      z
        .any()
        .openapi({
          description:
            'The position information of the resource, displayed as a JSON payload. The payload uses the GeoJSON format, which a format that\'s used to encode geographic data structures. For more information, see <a href="https://geojson.org/">GeoJSON</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResourcePositionResponse')

const WirelessGatewayServiceTypeSchema = z
  .enum(['CUPS', 'LNS'])
  .openapi('WirelessGatewayServiceType')

const EndPointSchema = z.string().min(1).max(256).openapi('EndPoint')

const CertificatePEMSchema = z
  .string()
  .regex(/[^-A-Za-z0-9\+\/=]\|=[^=]\|=\{3,\}$\{1,4096\}/)
  .min(1)
  .max(4096)
  .openapi('CertificatePEM')

const GetServiceEndpointResponseSchema = z
  .object({
    ServiceType: WirelessGatewayServiceTypeSchema.and(
      z.any().openapi({ description: "The endpoint's service type." }),
    ).exactOptional(),
    ServiceEndpoint: EndPointSchema.and(
      z.any().openapi({ description: 'The service endpoint value.' }),
    ).exactOptional(),
    ServerTrust: CertificatePEMSchema.and(
      z.any().openapi({ description: 'The Root CA of the server trust certificate.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetServiceEndpointResponse')

const ServiceProfileNameSchema = z.string().max(256).openapi('ServiceProfileName')

const UlRateSchema = z.int().min(0).max(2147483647).openapi('UlRate')

const UlBucketSizeSchema = z.int().min(0).max(2147483647).openapi('UlBucketSize')

const UlRatePolicySchema = z.string().max(256).openapi('UlRatePolicy')

const DlRateSchema = z.int().min(0).max(2147483647).openapi('DlRate')

const DlBucketSizeSchema = z.int().min(0).max(2147483647).openapi('DlBucketSize')

const DlRatePolicySchema = z.string().max(256).openapi('DlRatePolicy')

const DevStatusReqFreqSchema = z.int().min(0).max(2147483647).openapi('DevStatusReqFreq')

const ReportDevStatusBatterySchema = z.boolean().openapi('ReportDevStatusBattery')

const ReportDevStatusMarginSchema = z.boolean().openapi('ReportDevStatusMargin')

const DrMinSchema = z.int().min(0).max(15).openapi('DrMin')

const DrMaxSchema = z.int().min(0).max(15).openapi('DrMax')

const ChannelMaskSchema = z.string().max(2048).openapi('ChannelMask')

const HrAllowedSchema = z.boolean().openapi('HrAllowed')

const NwkGeoLocSchema = z.boolean().openapi('NwkGeoLoc')

const TargetPerSchema = z.int().min(0).max(100).openapi('TargetPer')

const MinGwDiversitySchema = z.int().min(1).max(100).openapi('MinGwDiversity')

const LoRaWANGetServiceProfileInfoSchema = z
  .object({
    UlRate: UlRateSchema.and(z.any().openapi({ description: 'The ULRate value.' })).exactOptional(),
    UlBucketSize: UlBucketSizeSchema.and(
      z.any().openapi({ description: 'The ULBucketSize value.' }),
    ).exactOptional(),
    UlRatePolicy: UlRatePolicySchema.and(
      z.any().openapi({ description: 'The ULRatePolicy value.' }),
    ).exactOptional(),
    DlRate: DlRateSchema.and(z.any().openapi({ description: 'The DLRate value.' })).exactOptional(),
    DlBucketSize: DlBucketSizeSchema.and(
      z.any().openapi({ description: 'The DLBucketSize value.' }),
    ).exactOptional(),
    DlRatePolicy: DlRatePolicySchema.and(
      z.any().openapi({ description: 'The DLRatePolicy value.' }),
    ).exactOptional(),
    AddGwMetadata: AddGwMetadataSchema.and(
      z.any().openapi({ description: 'The AddGWMetaData value.' }),
    ).exactOptional(),
    DevStatusReqFreq: DevStatusReqFreqSchema.and(
      z.any().openapi({ description: 'The DevStatusReqFreq value.' }),
    ).exactOptional(),
    ReportDevStatusBattery: ReportDevStatusBatterySchema.and(
      z.any().openapi({ description: 'The ReportDevStatusBattery value.' }),
    ).exactOptional(),
    ReportDevStatusMargin: ReportDevStatusMarginSchema.and(
      z.any().openapi({ description: 'The ReportDevStatusMargin value.' }),
    ).exactOptional(),
    DrMin: DrMinSchema.and(z.any().openapi({ description: 'The DRMin value.' })).exactOptional(),
    DrMax: DrMaxSchema.and(z.any().openapi({ description: 'The DRMax value.' })).exactOptional(),
    ChannelMask: ChannelMaskSchema.and(
      z.any().openapi({ description: 'The ChannelMask value.' }),
    ).exactOptional(),
    PrAllowed: PrAllowedSchema.and(
      z
        .any()
        .openapi({
          description: 'The PRAllowed value that describes whether passive roaming is allowed.',
        }),
    ).exactOptional(),
    HrAllowed: HrAllowedSchema.and(
      z
        .any()
        .openapi({
          description: 'The HRAllowed value that describes whether handover roaming is allowed.',
        }),
    ).exactOptional(),
    RaAllowed: RaAllowedSchema.and(
      z
        .any()
        .openapi({
          description: 'The RAAllowed value that describes whether roaming activation is allowed.',
        }),
    ).exactOptional(),
    NwkGeoLoc: NwkGeoLocSchema.and(
      z.any().openapi({ description: 'The NwkGeoLoc value.' }),
    ).exactOptional(),
    TargetPer: TargetPerSchema.and(
      z.any().openapi({ description: 'The TargetPER value.' }),
    ).exactOptional(),
    MinGwDiversity: MinGwDiversitySchema.and(
      z.any().openapi({ description: 'The MinGwDiversity value.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'LoRaWANGetServiceProfileInfo object.', required: [] })
  .openapi('LoRaWANGetServiceProfileInfo')

const GetServiceProfileResponseSchema = z
  .object({
    Arn: ServiceProfileArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the resource.' }),
    ).exactOptional(),
    Name: ServiceProfileNameSchema.and(
      z.any().openapi({ description: 'The name of the resource.' }),
    ).exactOptional(),
    Id: ServiceProfileIdSchema.and(
      z.any().openapi({ description: 'The ID of the service profile.' }),
    ).exactOptional(),
    LoRaWAN: LoRaWANGetServiceProfileInfoSchema.and(
      z.any().openapi({ description: 'Information about the service profile.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetServiceProfileResponse')

const WirelessDeviceNameSchema = z.string().max(256).openapi('WirelessDeviceName')

const ThingNameSchema = z.string().openapi('ThingName')

const ThingArnSchema = z.string().openapi('ThingArn')

const LoRaWANDeviceSchema = z
  .object({
    DevEui: DevEuiSchema.and(z.any().openapi({ description: 'The DevEUI value.' })).exactOptional(),
    DeviceProfileId: DeviceProfileIdSchema.and(
      z.any().openapi({ description: 'The ID of the device profile for the new wireless device.' }),
    ).exactOptional(),
    ServiceProfileId: ServiceProfileIdSchema.and(
      z.any().openapi({ description: 'The ID of the service profile.' }),
    ).exactOptional(),
    OtaaV1_1: OtaaV1_1Schema.and(
      z.any().openapi({ description: 'OTAA device object for v1.1 for create APIs' }),
    ).exactOptional(),
    OtaaV1_0_x: OtaaV1_0XSchema.and(
      z.any().openapi({ description: 'OTAA device object for create APIs for v1.0.x' }),
    ).exactOptional(),
    AbpV1_1: AbpV1_1Schema.and(
      z.any().openapi({ description: 'ABP device object for create APIs for v1.1' }),
    ).exactOptional(),
    AbpV1_0_x: AbpV1_0XSchema.and(
      z.any().openapi({ description: 'LoRaWAN object for create APIs' }),
    ).exactOptional(),
    FPorts: FPortsSchema.exactOptional(),
  })
  .openapi({ description: 'LoRaWAN object for create functions.', required: [] })
  .openapi('LoRaWANDevice')

const SidewalkIdSchema = z
  .string()
  .max(256)
  .openapi({ description: 'The sidewalk device identification.' })
  .openapi('SidewalkId')

const SidewalkManufacturingSnSchema = z.string().max(64).openapi('SidewalkManufacturingSn')

const SigningAlgSchema = z
  .enum(['Ed25519', 'P256r1'])
  .openapi({ description: 'The certificate chain algorithm provided by sidewalk.' })
  .openapi('SigningAlg')

const CertificateValueSchema = z
  .string()
  .min(0)
  .max(2048)
  .openapi({ description: 'Certificate value.' })
  .openapi('CertificateValue')

const CertificateListSchema = z
  .object({
    SigningAlg: SigningAlgSchema.and(
      z.any().openapi({ description: 'The certificate chain algorithm provided by sidewalk.' }),
    ),
    Value: CertificateValueSchema.and(
      z.any().openapi({ description: 'The value of the chosen sidewalk certificate.' }),
    ),
  })
  .openapi({ required: ['SigningAlg', 'Value'], description: 'List of sidewalk certificates.' })
  .openapi('CertificateList')

const DeviceCertificateListSchema = z
  .array(CertificateListSchema)
  .openapi({ description: 'List of device certificate chain.' })
  .openapi('DeviceCertificateList')

const PrivateKeysListSchema = z.array(CertificateListSchema).openapi('PrivateKeysList')

const WirelessDeviceSidewalkStatusSchema = z
  .enum(['PROVISIONED', 'REGISTERED', 'ACTIVATED', 'UNKNOWN'])
  .openapi('WirelessDeviceSidewalkStatus')

const SidewalkDeviceSchema = z
  .object({
    AmazonId: AmazonIdSchema.exactOptional(),
    SidewalkId: SidewalkIdSchema.and(
      z.any().openapi({ description: 'The sidewalk device identification.' }),
    ).exactOptional(),
    SidewalkManufacturingSn: SidewalkManufacturingSnSchema.and(
      z.any().openapi({ description: 'The Sidewalk manufacturing series number.' }),
    ).exactOptional(),
    DeviceCertificates: DeviceCertificateListSchema.and(
      z.any().openapi({ description: 'The sidewalk device certificates for Ed25519 and P256r1.' }),
    ).exactOptional(),
    PrivateKeys: PrivateKeysListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Sidewalk device private keys that will be used for onboarding the device.',
        }),
    ).exactOptional(),
    DeviceProfileId: DeviceProfileIdSchema.and(
      z.any().openapi({ description: 'The ID of the Sidewalk device profile.' }),
    ).exactOptional(),
    CertificateId: DakCertificateIdSchema.and(
      z.any().openapi({ description: 'The ID of the Sidewalk device profile.' }),
    ).exactOptional(),
    Status: WirelessDeviceSidewalkStatusSchema.and(
      z
        .any()
        .openapi({ description: 'The Sidewalk device status, such as provisioned or registered.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Sidewalk device object.', required: [] })
  .openapi('SidewalkDevice')

const PositioningConfigStatusSchema = z
  .enum(['Enabled', 'Disabled'])
  .openapi('PositioningConfigStatus')

const GetWirelessDeviceResponseSchema = z
  .object({
    Type: WirelessDeviceTypeSchema.and(
      z.any().openapi({ description: 'The wireless device type.' }),
    ).exactOptional(),
    Name: WirelessDeviceNameSchema.and(
      z.any().openapi({ description: 'The name of the resource.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the resource.' }),
    ).exactOptional(),
    DestinationName: DestinationNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the destination to which the device is assigned.' }),
    ).exactOptional(),
    Id: WirelessDeviceIdSchema.and(
      z.any().openapi({ description: 'The ID of the wireless device.' }),
    ).exactOptional(),
    Arn: WirelessDeviceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the resource.' }),
    ).exactOptional(),
    ThingName: ThingNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the thing associated with the wireless device. The value is empty if a thing isn't associated with the device.",
        }),
    ).exactOptional(),
    ThingArn: ThingArnSchema.and(
      z.any().openapi({ description: 'The ARN of the thing associated with the wireless device.' }),
    ).exactOptional(),
    LoRaWAN: LoRaWANDeviceSchema.and(
      z.any().openapi({ description: 'Information about the wireless device.' }),
    ).exactOptional(),
    Sidewalk: SidewalkDeviceSchema.and(
      z.any().openapi({ description: 'Sidewalk device object.' }),
    ).exactOptional(),
    Positioning: PositioningConfigStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'FPort values for the GNSS, stream, and ClockSync functions of the positioning information.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetWirelessDeviceResponse')

const ImportTaskIdSchema = z.string().max(256).openapi('ImportTaskId')

const ImportTaskArnSchema = z.string().max(128).openapi('ImportTaskArn')

const DeviceCreationFileSchema = z.string().max(1024).openapi('DeviceCreationFile')

const DeviceCreationFileListSchema = z
  .array(DeviceCreationFileSchema)
  .openapi('DeviceCreationFileList')

const RoleSchema = z.string().max(2048).openapi('Role')

const SidewalkGetStartImportInfoSchema = z
  .object({
    DeviceCreationFileList: DeviceCreationFileListSchema.and(
      z
        .any()
        .openapi({ description: 'List of Sidewalk devices that are added to the import task.' }),
    ).exactOptional(),
    Role: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM role that allows AWS IoT Wireless to access the CSV file in the S3 bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Sidewalk-related information for devices in an import task that are being onboarded.',
    required: [],
  })
  .openapi('SidewalkGetStartImportInfo')

const CreationTimeSchema = z.iso.datetime({ offset: true }).openapi('CreationTime')

const ImportTaskStatusSchema = z
  .enum(['INITIALIZING', 'INITIALIZED', 'PENDING', 'COMPLETE', 'FAILED', 'DELETING'])
  .openapi('ImportTaskStatus')

const StatusReasonSchema = z.string().openapi('StatusReason')

const ImportedWirelessDeviceCountSchema = z.int().openapi('ImportedWirelessDeviceCount')

const GetWirelessDeviceImportTaskResponseSchema = z
  .object({
    Id: ImportTaskIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the import task for which information is retrieved.',
        }),
    ).exactOptional(),
    Arn: ImportTaskArnSchema.and(
      z.any().openapi({ description: 'The ARN (Amazon Resource Name) of the import task.' }),
    ).exactOptional(),
    DestinationName: DestinationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the destination that's assigned to the wireless devices in the import task.",
        }),
    ).exactOptional(),
    Sidewalk: SidewalkGetStartImportInfoSchema.and(
      z.any().openapi({ description: 'The Sidewalk-related information about an import task.' }),
    ).exactOptional(),
    CreationTime: CreationTimeSchema.and(
      z.any().openapi({ description: 'The time at which the import task was created.' }),
    ).exactOptional(),
    Status: ImportTaskStatusSchema.and(
      z.any().openapi({ description: 'The import task status.' }),
    ).exactOptional(),
    StatusReason: StatusReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason for the provided status information, such as a validation error that causes the import task to fail.',
        }),
    ).exactOptional(),
    InitializedImportedDeviceCount: ImportedWirelessDeviceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of devices in the import task that are waiting for the control log to start processing.',
        }),
    ).exactOptional(),
    PendingImportedDeviceCount: ImportedWirelessDeviceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of devices in the import task that are waiting in the import task queue to be onboarded.',
        }),
    ).exactOptional(),
    OnboardedImportedDeviceCount: ImportedWirelessDeviceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of devices in the import task that have been onboarded to the import task.',
        }),
    ).exactOptional(),
    FailedImportedDeviceCount: ImportedWirelessDeviceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of devices in the import task that failed to onboard to the import task.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetWirelessDeviceImportTaskResponse')

const IntegerSchema = z.int().openapi('Integer')

const DoubleSchema = z.float64().openapi('Double')

const LoRaWANGatewayMetadataSchema = z
  .object({
    GatewayEui: GatewayEuiSchema.and(
      z.any().openapi({ description: "The gateway's EUI value." }),
    ).exactOptional(),
    Snr: DoubleSchema.and(z.any().openapi({ description: 'The SNR value.' })).exactOptional(),
    Rssi: DoubleSchema.and(z.any().openapi({ description: 'The RSSI value.' })).exactOptional(),
  })
  .openapi({ description: 'LoRaWAN gateway metatdata.', required: [] })
  .openapi('LoRaWANGatewayMetadata')

const LoRaWANGatewayMetadataListSchema = z
  .array(LoRaWANGatewayMetadataSchema)
  .openapi('LoRaWANGatewayMetadataList')

const LoRaWANDeviceMetadataSchema = z
  .object({
    DevEui: DevEuiSchema.and(z.any().openapi({ description: 'The DevEUI value.' })).exactOptional(),
    FPort: IntegerSchema.and(z.any().openapi({ description: 'The FPort value.' })).exactOptional(),
    DataRate: IntegerSchema.and(
      z.any().openapi({ description: 'The DataRate value.' }),
    ).exactOptional(),
    Frequency: IntegerSchema.and(
      z.any().openapi({ description: "The device's channel frequency in Hz." }),
    ).exactOptional(),
    Timestamp: ISODateTimeStringSchema.and(
      z.any().openapi({ description: 'The date and time of the metadata.' }),
    ).exactOptional(),
    Gateways: LoRaWANGatewayMetadataListSchema.and(
      z.any().openapi({ description: 'Information about the gateways accessed by the device.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'LoRaWAN device metatdata.', required: [] })
  .openapi('LoRaWANDeviceMetadata')

const BatteryLevelSchema = z
  .enum(['normal', 'low', 'critical'])
  .openapi({ description: 'Sidewalk device battery level.' })
  .openapi('BatteryLevel')

const EventSchema = z
  .enum(['discovered', 'lost', 'ack', 'nack', 'passthrough'])
  .openapi({ description: 'Sidewalk device status notification.' })
  .openapi('Event')

const DeviceStateSchema = z
  .enum(['Provisioned', 'RegisteredNotSeen', 'RegisteredReachable', 'RegisteredUnreachable'])
  .openapi({ description: 'Device state defines the device status of sidewalk device.' })
  .openapi('DeviceState')

const SidewalkDeviceMetadataSchema = z
  .object({
    Rssi: IntegerSchema.and(z.any().openapi({ description: 'The RSSI value.' })).exactOptional(),
    BatteryLevel: BatteryLevelSchema.and(
      z.any().openapi({ description: 'Sidewalk device battery level.' }),
    ).exactOptional(),
    Event: EventSchema.and(
      z.any().openapi({ description: 'Sidewalk device status notification.' }),
    ).exactOptional(),
    DeviceState: DeviceStateSchema.and(
      z
        .any()
        .openapi({ description: 'Device state defines the device status of sidewalk device.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'MetaData for Sidewalk device.', required: [] })
  .openapi('SidewalkDeviceMetadata')

const GetWirelessDeviceStatisticsResponseSchema = z
  .object({
    WirelessDeviceId: WirelessDeviceIdSchema.and(
      z.any().openapi({ description: 'The ID of the wireless device.' }),
    ).exactOptional(),
    LastUplinkReceivedAt: ISODateTimeStringSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time when the most recent uplink was received.' }),
    ).exactOptional(),
    LoRaWAN: LoRaWANDeviceMetadataSchema.and(
      z.any().openapi({ description: "Information about the wireless device's operations." }),
    ).exactOptional(),
    Sidewalk: SidewalkDeviceMetadataSchema.and(
      z.any().openapi({ description: 'MetaData for Sidewalk device.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetWirelessDeviceStatisticsResponse')

const WirelessGatewayNameSchema = z.string().max(256).openapi('WirelessGatewayName')

const LoRaWANGatewaySchema = z
  .object({
    GatewayEui: GatewayEuiSchema.and(
      z.any().openapi({ description: "The gateway's EUI value." }),
    ).exactOptional(),
    RfRegion: RfRegionSchema.and(
      z.any().openapi({ description: 'The frequency band (RFRegion) value.' }),
    ).exactOptional(),
    JoinEuiFilters: JoinEuiFiltersSchema.exactOptional(),
    NetIdFilters: NetIdFiltersSchema.exactOptional(),
    SubBands: SubBandsSchema.exactOptional(),
    Beaconing: BeaconingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Beaconing object information, which consists of the data rate and frequency parameters.',
        }),
    ).exactOptional(),
    MaxEirp: GatewayMaxEirpSchema.and(
      z.any().openapi({ description: 'The MaxEIRP value.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'LoRaWANGateway object.', required: [] })
  .openapi('LoRaWANGateway')

const GetWirelessGatewayResponseSchema = z
  .object({
    Name: WirelessGatewayNameSchema.and(
      z.any().openapi({ description: 'The name of the resource.' }),
    ).exactOptional(),
    Id: WirelessGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the wireless gateway.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the resource.' }),
    ).exactOptional(),
    LoRaWAN: LoRaWANGatewaySchema.and(
      z.any().openapi({ description: 'Information about the wireless gateway.' }),
    ).exactOptional(),
    Arn: WirelessGatewayArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the resource.' }),
    ).exactOptional(),
    ThingName: ThingNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the thing associated with the wireless gateway. The value is empty if a thing isn't associated with the gateway.",
        }),
    ).exactOptional(),
    ThingArn: ThingArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the thing associated with the wireless gateway.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetWirelessGatewayResponse')

const GetWirelessGatewayCertificateResponseSchema = z
  .object({
    IotCertificateId: IotCertificateIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the certificate associated with the wireless gateway.',
        }),
    ).exactOptional(),
    LoRaWANNetworkServerCertificateId: IotCertificateIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the certificate that is associated with the wireless gateway and used for the LoRaWANNetworkServer endpoint.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetWirelessGatewayCertificateResponse')

const LoRaWANGatewayCurrentVersionSchema = z
  .object({
    CurrentVersion: LoRaWANGatewayVersionSchema.and(
      z
        .any()
        .openapi({ description: 'The version of the gateways that should receive the update.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'LoRaWANGatewayCurrentVersion object.', required: [] })
  .openapi('LoRaWANGatewayCurrentVersion')

const GetWirelessGatewayFirmwareInformationResponseSchema = z
  .object({
    LoRaWAN: LoRaWANGatewayCurrentVersionSchema.and(
      z.any().openapi({ description: "Information about the wireless gateway's firmware." }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetWirelessGatewayFirmwareInformationResponse')

const ConnectionStatusSchema = z.enum(['Connected', 'Disconnected']).openapi('ConnectionStatus')

const GetWirelessGatewayStatisticsResponseSchema = z
  .object({
    WirelessGatewayId: WirelessGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the wireless gateway.' }),
    ).exactOptional(),
    LastUplinkReceivedAt: ISODateTimeStringSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time when the most recent uplink was received.' }),
    ).exactOptional(),
    ConnectionStatus: ConnectionStatusSchema.and(
      z.any().openapi({ description: 'The connection status of the wireless gateway.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetWirelessGatewayStatisticsResponse')

const GetWirelessGatewayTaskResponseSchema = z
  .object({
    WirelessGatewayId: WirelessGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the wireless gateway.' }),
    ).exactOptional(),
    WirelessGatewayTaskDefinitionId: WirelessGatewayTaskDefinitionIdSchema.and(
      z.any().openapi({ description: 'The ID of the WirelessGatewayTask.' }),
    ).exactOptional(),
    LastUplinkReceivedAt: ISODateTimeStringSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time when the most recent uplink was received.' }),
    ).exactOptional(),
    TaskCreatedAt: ISODateTimeStringSchema.and(
      z.any().openapi({ description: 'The date and time when the task was created.' }),
    ).exactOptional(),
    Status: WirelessGatewayTaskStatusSchema.and(
      z.any().openapi({ description: 'The status of the request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetWirelessGatewayTaskResponse')

const AutoCreateTasksSchema = z.boolean().openapi('AutoCreateTasks')

const WirelessGatewayTaskNameSchema = z.string().min(1).max(2048).openapi('WirelessGatewayTaskName')

const UpdateWirelessGatewayTaskCreateSchema = z
  .object({
    UpdateDataSource: UpdateDataSourceSchema.and(
      z.any().openapi({ description: 'The link to the S3 bucket.' }),
    ).exactOptional(),
    UpdateDataRole: UpdateDataSourceSchema.and(
      z.any().openapi({ description: 'The IAM role used to read data from the S3 bucket.' }),
    ).exactOptional(),
    LoRaWAN: LoRaWANUpdateGatewayTaskCreateSchema.and(
      z
        .any()
        .openapi({ description: 'The properties that relate to the LoRaWAN wireless gateway.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'UpdateWirelessGatewayTaskCreate object.', required: [] })
  .openapi('UpdateWirelessGatewayTaskCreate')

const GetWirelessGatewayTaskDefinitionResponseSchema = z
  .object({
    AutoCreateTasks: AutoCreateTasksSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether to automatically create tasks using this task definition for all gateways with the specified current version. If <code>false</code>, the task must me created by calling <code>CreateWirelessGatewayTask</code>.',
        }),
    ).exactOptional(),
    Name: WirelessGatewayTaskNameSchema.and(
      z.any().openapi({ description: 'The name of the resource.' }),
    ).exactOptional(),
    Update: UpdateWirelessGatewayTaskCreateSchema.and(
      z.any().openapi({ description: 'Information about the gateways to update.' }),
    ).exactOptional(),
    Arn: WirelessGatewayTaskDefinitionArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetWirelessGatewayTaskDefinitionResponse')

const NextTokenSchema = z.string().max(4096).openapi('NextToken')

const DestinationsSchema = z
  .object({
    Arn: DestinationArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the resource.' }),
    ).exactOptional(),
    Name: DestinationNameSchema.and(
      z.any().openapi({ description: 'The name of the resource.' }),
    ).exactOptional(),
    ExpressionType: ExpressionTypeSchema.and(
      z.any().openapi({ description: 'The type of value in <code>Expression</code>.' }),
    ).exactOptional(),
    Expression: ExpressionSchema.and(
      z.any().openapi({ description: 'The rule name or topic rule to send messages to.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the resource.' }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z.any().openapi({ description: 'The ARN of the IAM Role that authorizes the destination.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a destination.', required: [] })
  .openapi('Destinations')

const DestinationListSchema = z.array(DestinationsSchema).openapi('DestinationList')

const ListDestinationsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to get the next set of results, or <b>null</b> if there are no additional results.',
        }),
    ).exactOptional(),
    DestinationList: DestinationListSchema.and(
      z.any().openapi({ description: 'The list of destinations.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDestinationsResponse')

const DeviceProfileSchema = z
  .object({
    Arn: DeviceProfileArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the resource.' }),
    ).exactOptional(),
    Name: DeviceProfileNameSchema.and(
      z.any().openapi({ description: 'The name of the resource.' }),
    ).exactOptional(),
    Id: DeviceProfileIdSchema.and(
      z.any().openapi({ description: 'The ID of the device profile.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a device profile.', required: [] })
  .openapi('DeviceProfile')

const DeviceProfileListSchema = z.array(DeviceProfileSchema).openapi('DeviceProfileList')

const ListDeviceProfilesResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to get the next set of results, or <b>null</b> if there are no additional results.',
        }),
    ).exactOptional(),
    DeviceProfileList: DeviceProfileListSchema.and(
      z.any().openapi({ description: 'The list of device profiles.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDeviceProfilesResponse')

const OnboardStatusSchema = z
  .enum(['INITIALIZED', 'PENDING', 'ONBOARDED', 'FAILED'])
  .openapi('OnboardStatus')

const OnboardStatusReasonSchema = z.string().openapi('OnboardStatusReason')

const LastUpdateTimeSchema = z.iso.datetime({ offset: true }).openapi('LastUpdateTime')

const ImportedSidewalkDeviceSchema = z
  .object({
    SidewalkManufacturingSn: SidewalkManufacturingSnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Sidewalk manufacturing serial number (SMSN) of the Sidewalk device.',
        }),
    ).exactOptional(),
    OnboardingStatus: OnboardStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The onboarding status of the Sidewalk device in the import task.',
        }),
    ).exactOptional(),
    OnboardingStatusReason: OnboardStatusReasonSchema.and(
      z
        .any()
        .openapi({
          description: 'The reason for the onboarding status information for the Sidewalk device.',
        }),
    ).exactOptional(),
    LastUpdateTime: LastUpdateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'The time at which the status information was last updated.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about a Sidewalk device that has been added to an import task.',
    required: [],
  })
  .openapi('ImportedSidewalkDevice')

const ImportedWirelessDeviceSchema = z
  .object({
    Sidewalk: ImportedSidewalkDeviceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Sidewalk-related information about a device that has been added to an import task.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about a wireless device that has been added to an import task.',
    required: [],
  })
  .openapi('ImportedWirelessDevice')

const ImportedWirelessDeviceListSchema = z
  .array(ImportedWirelessDeviceSchema)
  .openapi('ImportedWirelessDeviceList')

const ListDevicesForWirelessDeviceImportTaskResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to get the next set of results, or <code>null</code> if there are no additional results.',
        }),
    ).exactOptional(),
    DestinationName: DestinationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Sidewalk destination that describes the IoT rule to route messages received from devices in an import task that are onboarded to AWS IoT Wireless.',
        }),
    ).exactOptional(),
    ImportedWirelessDeviceList: ImportedWirelessDeviceListSchema.and(
      z
        .any()
        .openapi({
          description: 'List of wireless devices in an import task and their onboarding status.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDevicesForWirelessDeviceImportTaskResponse')

const IdentifierSchema = z.string().max(256).openapi('Identifier')

const IdentifierTypeSchema = z
  .enum(['PartnerAccountId', 'DevEui', 'GatewayEui', 'WirelessDeviceId', 'WirelessGatewayId'])
  .openapi('IdentifierType')

const EventNotificationPartnerTypeSchema = z
  .literal('Sidewalk')
  .openapi('EventNotificationPartnerType')

const EventNotificationItemConfigurationsSchema = z
  .object({
    DeviceRegistrationState: DeviceRegistrationStateEventConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Device registration state event configuration for an event configuration item.',
        }),
    ).exactOptional(),
    Proximity: ProximityEventConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'Proximity event configuration for an event configuration item.' }),
    ).exactOptional(),
    Join: JoinEventConfigurationSchema.and(
      z.any().openapi({ description: 'Join event configuration for an event configuration item.' }),
    ).exactOptional(),
    ConnectionStatus: ConnectionStatusEventConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Connection status event configuration for an event configuration item.',
        }),
    ).exactOptional(),
    MessageDeliveryStatus: MessageDeliveryStatusEventConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Message delivery status event configuration for an event configuration item.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Object of all event configurations and the status of the event topics.',
    required: [],
  })
  .openapi('EventNotificationItemConfigurations')

const EventConfigurationItemSchema = z
  .object({
    Identifier: IdentifierSchema.and(
      z.any().openapi({ description: 'Resource identifier opted in for event messaging.' }),
    ).exactOptional(),
    IdentifierType: IdentifierTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier type of the particular resource identifier for event configuration.',
        }),
    ).exactOptional(),
    PartnerType: EventNotificationPartnerTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Partner type of the resource if the identifier type is PartnerAccountId.',
        }),
    ).exactOptional(),
    Events: EventNotificationItemConfigurationsSchema.exactOptional(),
  })
  .openapi({ description: 'Event configuration object for a single resource.', required: [] })
  .openapi('EventConfigurationItem')

const EventConfigurationsListSchema = z
  .array(EventConfigurationItemSchema)
  .openapi('EventConfigurationsList')

const ListEventConfigurationsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.',
        }),
    ).exactOptional(),
    EventConfigurationsList: EventConfigurationsListSchema.and(
      z.any().openapi({ description: 'Event configurations of all events for a single resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEventConfigurationsResponse')

const FuotaTaskSchema = z
  .object({
    Id: FuotaTaskIdSchema.exactOptional(),
    Arn: FuotaTaskArnSchema.exactOptional(),
    Name: FuotaTaskNameSchema.exactOptional(),
  })
  .openapi({ description: 'A FUOTA task.', required: [] })
  .openapi('FuotaTask')

const FuotaTaskListSchema = z
  .array(FuotaTaskSchema)
  .openapi({ description: 'Lists the FUOTA tasks registered to your AWS account.' })
  .openapi('FuotaTaskList')

const ListFuotaTasksResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.',
        }),
    ).exactOptional(),
    FuotaTaskList: FuotaTaskListSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFuotaTasksResponse')

const MulticastGroupSchema = z
  .object({
    Id: MulticastGroupIdSchema.exactOptional(),
    Arn: MulticastGroupArnSchema.exactOptional(),
    Name: MulticastGroupNameSchema.exactOptional(),
  })
  .openapi({ description: 'A multicast group.', required: [] })
  .openapi('MulticastGroup')

const MulticastGroupListSchema = z
  .array(MulticastGroupSchema)
  .openapi({ description: 'List of multicast groups.' })
  .openapi('MulticastGroupList')

const ListMulticastGroupsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.',
        }),
    ).exactOptional(),
    MulticastGroupList: MulticastGroupListSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMulticastGroupsResponse')

const MulticastGroupByFuotaTaskSchema = z
  .object({ Id: MulticastGroupIdSchema.exactOptional() })
  .openapi({ description: 'A multicast group that is associated with a FUOTA task.', required: [] })
  .openapi('MulticastGroupByFuotaTask')

const MulticastGroupListByFuotaTaskSchema = z
  .array(MulticastGroupByFuotaTaskSchema)
  .openapi({ description: 'List of multicast groups associated with a FUOTA task.' })
  .openapi('MulticastGroupListByFuotaTask')

const ListMulticastGroupsByFuotaTaskResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.',
        }),
    ).exactOptional(),
    MulticastGroupList: MulticastGroupListByFuotaTaskSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMulticastGroupsByFuotaTaskResponse')

const NetworkAnalyzerConfigurationsSchema = z
  .object({
    Arn: NetworkAnalyzerConfigurationArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the new resource.' }),
    ).exactOptional(),
    Name: NetworkAnalyzerConfigurationNameSchema.exactOptional(),
  })
  .openapi({ description: 'Network analyzer configurations.', required: [] })
  .openapi('NetworkAnalyzerConfigurations')

const NetworkAnalyzerConfigurationListSchema = z
  .array(NetworkAnalyzerConfigurationsSchema)
  .openapi('NetworkAnalyzerConfigurationList')

const ListNetworkAnalyzerConfigurationsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to get the next set of results, or <b>null</b> if there are no additional results.',
        }),
    ).exactOptional(),
    NetworkAnalyzerConfigurationList: NetworkAnalyzerConfigurationListSchema.and(
      z.any().openapi({ description: 'The list of network analyzer configurations.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListNetworkAnalyzerConfigurationsResponse')

const SidewalkAccountListSchema = z
  .array(SidewalkAccountInfoWithFingerprintSchema)
  .openapi('SidewalkAccountList')

const ListPartnerAccountsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to get the next set of results, or <b>null</b> if there are no additional results.',
        }),
    ).exactOptional(),
    Sidewalk: SidewalkAccountListSchema.and(
      z.any().openapi({ description: 'The Sidewalk account credentials.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPartnerAccountsResponse')

const PositionResourceIdentifierSchema = z
  .string()
  .regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/)
  .openapi('PositionResourceIdentifier')

const PositionResourceTypeSchema = z
  .enum(['WirelessDevice', 'WirelessGateway'])
  .openapi('PositionResourceType')

const PositionConfigurationItemSchema = z
  .object({
    ResourceIdentifier: PositionResourceIdentifierSchema.and(
      z.any().openapi({ description: 'Resource identifier for the position configuration.' }),
    ).exactOptional(),
    ResourceType: PositionResourceTypeSchema.and(
      z
        .any()
        .openapi({ description: 'Resource type of the resource for the position configuration.' }),
    ).exactOptional(),
    Solvers: PositionSolverDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'The details of the positioning solver object used to compute the location.',
        }),
    ).exactOptional(),
    Destination: DestinationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The wrapper for a position configuration.', required: [] })
  .openapi('PositionConfigurationItem')

const PositionConfigurationListSchema = z
  .array(PositionConfigurationItemSchema)
  .openapi('PositionConfigurationList')

const ListPositionConfigurationsResponseSchema = z
  .object({
    PositionConfigurationList: PositionConfigurationListSchema.and(
      z.any().openapi({ description: 'A list of position configurations.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to get the next set of results, or <b>null</b> if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    deprecated: true,
    description: 'This operation is no longer supported.',
    required: [],
  })
  .openapi('ListPositionConfigurationsResponse')

const MessageIdSchema = z.string().openapi('MessageId')

const TransmitModeSchema = z.int().min(0).max(1).openapi('TransmitMode')

const DownlinkModeSchema = z
  .enum(['SEQUENTIAL', 'CONCURRENT', 'USING_UPLINK_GATEWAY'])
  .openapi('DownlinkMode')

const DownlinkFrequencySchema = z.int().min(100000000).max(1000000000).openapi('DownlinkFrequency')

const GatewayListItemSchema = z
  .object({
    GatewayId: WirelessGatewayIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the wireless gateways that you want to add to the list of gateways when sending downlink messages.',
        }),
    ),
    DownlinkFrequency: DownlinkFrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            'The frequency to use for the gateways when sending a downlink message to the wireless device.',
        }),
    ),
  })
  .openapi({
    required: ['GatewayId', 'DownlinkFrequency'],
    description:
      'Gateway list item object that specifies the frequency and list of gateways for which the downlink message should be sent.',
  })
  .openapi('GatewayListItem')

const GatewayListSchema = z.array(GatewayListItemSchema).openapi('GatewayList')

const TransmissionIntervalSchema = z.int().min(1).max(604800).openapi('TransmissionInterval')

const ParticipatingGatewaysSchema = z
  .object({
    DownlinkMode: DownlinkModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to send the downlink message in sequential mode or concurrent mode, or to use only the chosen gateways from the previous uplink message transmission.',
        }),
    ),
    GatewayList: GatewayListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of gateways that you want to use for sending the downlink data traffic.',
        }),
    ),
    TransmissionInterval: TransmissionIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The duration of time for which AWS IoT Core for LoRaWAN will wait before transmitting the payload to the next gateway.',
        }),
    ),
  })
  .openapi({
    required: ['DownlinkMode', 'GatewayList', 'TransmissionInterval'],
    description:
      'Specify the list of gateways to which you want to send downlink data traffic when the wireless device is running in class B or class C mode.',
  })
  .openapi('ParticipatingGateways')

const LoRaWANSendDataToDeviceSchema = z
  .object({
    FPort: FPortSchema.exactOptional(),
    ParticipatingGateways: ParticipatingGatewaysSchema.and(
      z
        .any()
        .openapi({
          description:
            'Choose the gateways that you want to use for the downlink data traffic when the wireless device is running in class B or class C mode.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'LoRaWAN router info.', required: [] })
  .openapi('LoRaWANSendDataToDevice')

const DownlinkQueueMessageSchema = z
  .object({
    MessageId: MessageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The message ID assigned by IoT Wireless to each downlink message, which helps identify the message.',
        }),
    ).exactOptional(),
    TransmitMode: TransmitModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The transmit mode to use for sending data to the wireless device. This can be <code>0</code> for UM (unacknowledge mode) or <code>1</code> for AM (acknowledge mode).',
        }),
    ).exactOptional(),
    ReceivedAt: ISODateTimeStringSchema.and(
      z
        .any()
        .openapi({ description: 'The time at which Iot Wireless received the downlink message.' }),
    ).exactOptional(),
    LoRaWAN: LoRaWANSendDataToDeviceSchema.exactOptional(),
  })
  .openapi({ description: 'The message in the downlink queue.', required: [] })
  .openapi('DownlinkQueueMessage')

const DownlinkQueueMessagesListSchema = z
  .array(DownlinkQueueMessageSchema)
  .openapi('DownlinkQueueMessagesList')

const ListQueuedMessagesResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.',
        }),
    ).exactOptional(),
    DownlinkQueueMessagesList: DownlinkQueueMessagesListSchema.and(
      z.any().openapi({ description: 'The messages in the downlink queue.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListQueuedMessagesResponse')

const ServiceProfileSchema = z
  .object({
    Arn: ServiceProfileArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the resource.' }),
    ).exactOptional(),
    Name: ServiceProfileNameSchema.and(
      z.any().openapi({ description: 'The name of the resource.' }),
    ).exactOptional(),
    Id: ServiceProfileIdSchema.and(
      z.any().openapi({ description: 'The ID of the service profile.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a service profile.', required: [] })
  .openapi('ServiceProfile')

const ServiceProfileListSchema = z.array(ServiceProfileSchema).openapi('ServiceProfileList')

const ListServiceProfilesResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to get the next set of results, or <b>null</b> if there are no additional results.',
        }),
    ).exactOptional(),
    ServiceProfileList: ServiceProfileListSchema.and(
      z.any().openapi({ description: 'The list of service profiles.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListServiceProfilesResponse')

const TagListSchema = z
  .array(TagSchema)
  .min(0)
  .max(200)
  .openapi({
    description:
      'The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.',
  })
  .openapi('TagList')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to attach to the specified resource. Tags are metadata that you can use to manage a resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const WirelessDeviceImportTaskSchema = z
  .object({
    Id: ImportTaskIdSchema.and(
      z.any().openapi({ description: 'The ID of the wireless device import task.' }),
    ).exactOptional(),
    Arn: ImportTaskArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN (Amazon Resource Name) of the wireless device import task.',
        }),
    ).exactOptional(),
    DestinationName: DestinationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Sidewalk destination that that describes the IoT rule to route messages from the device in the import task that will be onboarded to AWS IoT Wireless',
        }),
    ).exactOptional(),
    Sidewalk: SidewalkGetStartImportInfoSchema.and(
      z
        .any()
        .openapi({
          description: 'The Sidewalk-related information of the wireless device import task.',
        }),
    ).exactOptional(),
    CreationTime: CreationTimeSchema.and(
      z.any().openapi({ description: 'The time at which the import task was created.' }),
    ).exactOptional(),
    Status: ImportTaskStatusSchema.and(
      z
        .any()
        .openapi({ description: 'The status information of the wireless device import task.' }),
    ).exactOptional(),
    StatusReason: StatusReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason that provides additional information about the import task status.',
        }),
    ).exactOptional(),
    InitializedImportedDeviceCount: ImportedWirelessDeviceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The summary information of count of wireless devices that are waiting for the control log to be added to an import task.',
        }),
    ).exactOptional(),
    PendingImportedDeviceCount: ImportedWirelessDeviceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The summary information of count of wireless devices in an import task that are waiting in the queue to be onboarded.',
        }),
    ).exactOptional(),
    OnboardedImportedDeviceCount: ImportedWirelessDeviceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The summary information of count of wireless devices in an import task that have been onboarded to the import task.',
        }),
    ).exactOptional(),
    FailedImportedDeviceCount: ImportedWirelessDeviceCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The summary information of count of wireless devices in an import task that failed to onboarded to the import task.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an import task for wireless devices.', required: [] })
  .openapi('WirelessDeviceImportTask')

const WirelessDeviceImportTaskListSchema = z
  .array(WirelessDeviceImportTaskSchema)
  .openapi('WirelessDeviceImportTaskList')

const ListWirelessDeviceImportTasksResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to get the next set of results, or <code>null</code> if there are no additional results.',
        }),
    ).exactOptional(),
    WirelessDeviceImportTaskList: WirelessDeviceImportTaskListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of import tasks and summary information of onboarding status of devices in each import task.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListWirelessDeviceImportTasksResponse')

const LoRaWANListDeviceSchema = z
  .object({
    DevEui: DevEuiSchema.and(z.any().openapi({ description: 'The DevEUI value.' })).exactOptional(),
  })
  .openapi({ description: 'LoRaWAN object for list functions.', required: [] })
  .openapi('LoRaWANListDevice')

const SidewalkListDeviceSchema = z
  .object({
    AmazonId: AmazonIdSchema.and(
      z.any().openapi({ description: 'The Sidewalk Amazon ID.' }),
    ).exactOptional(),
    SidewalkId: SidewalkIdSchema.and(
      z.any().openapi({ description: 'The sidewalk device identification.' }),
    ).exactOptional(),
    SidewalkManufacturingSn: SidewalkManufacturingSnSchema.and(
      z.any().openapi({ description: 'The Sidewalk manufacturing series number.' }),
    ).exactOptional(),
    DeviceCertificates: DeviceCertificateListSchema.and(
      z.any().openapi({ description: 'The sidewalk device certificates for Ed25519 and P256r1.' }),
    ).exactOptional(),
    DeviceProfileId: DeviceProfileIdSchema.and(
      z.any().openapi({ description: 'Sidewalk object used by list functions.' }),
    ).exactOptional(),
    Status: WirelessDeviceSidewalkStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The status of the Sidewalk devices, such as provisioned or registered.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Sidewalk object used by list functions.', required: [] })
  .openapi('SidewalkListDevice')

const FuotaDeviceStatusSchema = z
  .enum([
    'Initial',
    'Package_Not_Supported',
    'FragAlgo_unsupported',
    'Not_enough_memory',
    'FragIndex_unsupported',
    'Wrong_descriptor',
    'SessionCnt_replay',
    'MissingFrag',
    'MemoryError',
    'MICError',
    'Successful',
  ])
  .openapi({ description: 'The status of a wireless device in a FUOTA task.' })
  .openapi('FuotaDeviceStatus')

const MulticastDeviceStatusSchema = z.string().max(256).openapi('MulticastDeviceStatus')

const McGroupIdSchema = z
  .int()
  .min(1)
  .max(256)
  .openapi({ description: 'Id of the multicast group.' })
  .openapi('McGroupId')

const WirelessDeviceStatisticsSchema = z
  .object({
    Arn: WirelessDeviceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the resource.' }),
    ).exactOptional(),
    Id: WirelessDeviceIdSchema.and(
      z.any().openapi({ description: 'The ID of the wireless device reporting the data.' }),
    ).exactOptional(),
    Type: WirelessDeviceTypeSchema.and(
      z.any().openapi({ description: 'The wireless device type.' }),
    ).exactOptional(),
    Name: WirelessDeviceNameSchema.and(
      z.any().openapi({ description: 'The name of the resource.' }),
    ).exactOptional(),
    DestinationName: DestinationNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the destination to which the device is assigned.' }),
    ).exactOptional(),
    LastUplinkReceivedAt: ISODateTimeStringSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time when the most recent uplink was received.' }),
    ).exactOptional(),
    LoRaWAN: LoRaWANListDeviceSchema.and(
      z.any().openapi({ description: 'LoRaWAN device info.' }),
    ).exactOptional(),
    Sidewalk: SidewalkListDeviceSchema.and(
      z.any().openapi({ description: 'The Sidewalk account credentials.' }),
    ).exactOptional(),
    FuotaDeviceStatus: FuotaDeviceStatusSchema.exactOptional(),
    MulticastDeviceStatus: MulticastDeviceStatusSchema.and(
      z.any().openapi({ description: 'The status of the wireless device in the multicast group.' }),
    ).exactOptional(),
    McGroupId: McGroupIdSchema.exactOptional(),
  })
  .openapi({ description: "Information about a wireless device's operation.", required: [] })
  .openapi('WirelessDeviceStatistics')

const WirelessDeviceStatisticsListSchema = z
  .array(WirelessDeviceStatisticsSchema)
  .openapi('WirelessDeviceStatisticsList')

const ListWirelessDevicesResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to get the next set of results, or <b>null</b> if there are no additional results.',
        }),
    ).exactOptional(),
    WirelessDeviceList: WirelessDeviceStatisticsListSchema.and(
      z.any().openapi({ description: 'The ID of the wireless device.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListWirelessDevicesResponse')

const LoRaWANUpdateGatewayTaskEntrySchema = z
  .object({
    CurrentVersion: LoRaWANGatewayVersionSchema.and(
      z
        .any()
        .openapi({ description: 'The version of the gateways that should receive the update.' }),
    ).exactOptional(),
    UpdateVersion: LoRaWANGatewayVersionSchema.and(
      z.any().openapi({ description: 'The firmware version to update the gateway to.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'LoRaWANUpdateGatewayTaskEntry object.', required: [] })
  .openapi('LoRaWANUpdateGatewayTaskEntry')

const UpdateWirelessGatewayTaskEntrySchema = z
  .object({
    Id: WirelessGatewayTaskDefinitionIdSchema.and(
      z.any().openapi({ description: 'The ID of the new wireless gateway task entry.' }),
    ).exactOptional(),
    LoRaWAN: LoRaWANUpdateGatewayTaskEntrySchema.and(
      z
        .any()
        .openapi({ description: 'The properties that relate to the LoRaWAN wireless gateway.' }),
    ).exactOptional(),
    Arn: WirelessGatewayTaskDefinitionArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the resource.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'UpdateWirelessGatewayTaskEntry object.', required: [] })
  .openapi('UpdateWirelessGatewayTaskEntry')

const WirelessGatewayTaskDefinitionListSchema = z
  .array(UpdateWirelessGatewayTaskEntrySchema)
  .openapi('WirelessGatewayTaskDefinitionList')

const ListWirelessGatewayTaskDefinitionsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to get the next set of results, or <b>null</b> if there are no additional results.',
        }),
    ).exactOptional(),
    TaskDefinitions: WirelessGatewayTaskDefinitionListSchema.and(
      z.any().openapi({ description: 'The list of task definitions.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListWirelessGatewayTaskDefinitionsResponse')

const WirelessGatewayStatisticsSchema = z
  .object({
    Arn: WirelessGatewayArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name of the resource.' }),
    ).exactOptional(),
    Id: WirelessGatewayIdSchema.and(
      z.any().openapi({ description: 'The ID of the wireless gateway reporting the data.' }),
    ).exactOptional(),
    Name: WirelessGatewayNameSchema.and(
      z.any().openapi({ description: 'The name of the resource.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the resource.' }),
    ).exactOptional(),
    LoRaWAN: LoRaWANGatewaySchema.and(
      z.any().openapi({ description: 'LoRaWAN gateway info.' }),
    ).exactOptional(),
    LastUplinkReceivedAt: ISODateTimeStringSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time when the most recent uplink was received.' }),
    ).exactOptional(),
  })
  .openapi({ description: "Information about a wireless gateway's operation.", required: [] })
  .openapi('WirelessGatewayStatistics')

const WirelessGatewayStatisticsListSchema = z
  .array(WirelessGatewayStatisticsSchema)
  .openapi('WirelessGatewayStatisticsList')

const ListWirelessGatewaysResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to get the next set of results, or <b>null</b> if there are no additional results.',
        }),
    ).exactOptional(),
    WirelessGatewayList: WirelessGatewayStatisticsListSchema.and(
      z.any().openapi({ description: 'The ID of the wireless gateway.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListWirelessGatewaysResponse')

const PutPositionConfigurationResponseSchema = z
  .object({})
  .openapi({ deprecated: true, description: 'This operation is no longer supported.' })
  .openapi('PutPositionConfigurationResponse')

const SemtechGnssConfigurationSchema = z
  .object({
    Status: PositionConfigurationStatusSchema.and(
      z.any().openapi({ description: 'The status indicating whether the solver is enabled.' }),
    ),
    Fec: PositionConfigurationFecSchema.and(
      z.any().openapi({ description: 'Whether forward error correction is enabled.' }),
    ),
  })
  .openapi({
    required: ['Status', 'Fec'],
    description: 'Information about the Semtech GNSS solver configuration.',
  })
  .openapi('SemtechGnssConfiguration')

const PutResourceLogLevelResponseSchema = z.object({}).openapi('PutResourceLogLevelResponse')

const ResetAllResourceLogLevelsResponseSchema = z
  .object({})
  .openapi('ResetAllResourceLogLevelsResponse')

const ResetResourceLogLevelResponseSchema = z.object({}).openapi('ResetResourceLogLevelResponse')

const MulticastGroupMessageIdSchema = z
  .string()
  .max(256)
  .openapi({ description: 'ID of a multicast group message.' })
  .openapi('MulticastGroupMessageId')

const SendDataToMulticastGroupResponseSchema = z
  .object({ MessageId: MulticastGroupMessageIdSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('SendDataToMulticastGroupResponse')

const LoRaWANMulticastMetadataSchema = z
  .object({ FPort: FPortSchema.exactOptional() })
  .openapi({
    description: 'The metadata information of the LoRaWAN multicast group.',
    required: [],
  })
  .openapi('LoRaWANMulticastMetadata')

const SendDataToWirelessDeviceResponseSchema = z
  .object({
    MessageId: MessageIdSchema.and(
      z.any().openapi({ description: 'The ID of the message sent to the wireless device.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SendDataToWirelessDeviceResponse')

const SeqSchema = z.int().min(0).max(16383).openapi('Seq')

const MessageTypeSchema = z
  .enum([
    'CUSTOM_COMMAND_ID_NOTIFY',
    'CUSTOM_COMMAND_ID_GET',
    'CUSTOM_COMMAND_ID_SET',
    'CUSTOM_COMMAND_ID_RESP',
  ])
  .openapi({
    description:
      'Sidewalk device message type. Default value is <code>CUSTOM_COMMAND_ID_NOTIFY</code>.',
  })
  .openapi('MessageType')

const AckModeRetryDurationSecsSchema = z
  .int()
  .min(0)
  .max(604800)
  .openapi('AckModeRetryDurationSecs')

const SidewalkSendDataToDeviceSchema = z
  .object({
    Seq: SeqSchema.and(z.any().openapi({ description: 'The sequence number.' })).exactOptional(),
    MessageType: MessageTypeSchema.exactOptional(),
    AckModeRetryDurationSecs: AckModeRetryDurationSecsSchema.and(
      z.any().openapi({ description: 'The duration of time in seconds to retry sending the ACK.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a Sidewalk router.', required: [] })
  .openapi('SidewalkSendDataToDevice')

const StartBulkAssociateWirelessDeviceWithMulticastGroupResponseSchema = z
  .object({})
  .openapi('StartBulkAssociateWirelessDeviceWithMulticastGroupResponse')

const StartBulkDisassociateWirelessDeviceFromMulticastGroupResponseSchema = z
  .object({})
  .openapi('StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse')

const StartFuotaTaskResponseSchema = z.object({}).openapi('StartFuotaTaskResponse')

const StartMulticastGroupSessionResponseSchema = z
  .object({})
  .openapi('StartMulticastGroupSessionResponse')

const StartSingleWirelessDeviceImportTaskResponseSchema = z
  .object({
    Id: ImportTaskIdSchema.and(
      z.any().openapi({ description: 'The import task ID.' }),
    ).exactOptional(),
    Arn: ImportTaskArnSchema.and(
      z.any().openapi({ description: 'The ARN (Amazon Resource Name) of the import task.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartSingleWirelessDeviceImportTaskResponse')

const StartWirelessDeviceImportTaskResponseSchema = z
  .object({
    Id: ImportTaskIdSchema.and(
      z.any().openapi({ description: 'The import task ID.' }),
    ).exactOptional(),
    Arn: ImportTaskArnSchema.and(
      z.any().openapi({ description: 'The ARN (Amazon Resource Name) of the import task.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartWirelessDeviceImportTaskResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const ResultSchema = z.string().max(2048).openapi('Result')

const TestWirelessDeviceResponseSchema = z
  .object({
    Result: ResultSchema.and(
      z.any().openapi({ description: 'The result returned by the test.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TestWirelessDeviceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const UpdateDestinationResponseSchema = z.object({}).openapi('UpdateDestinationResponse')

const UpdateEventConfigurationByResourceTypesResponseSchema = z
  .object({})
  .openapi('UpdateEventConfigurationByResourceTypesResponse')

const UpdateFuotaTaskResponseSchema = z.object({}).openapi('UpdateFuotaTaskResponse')

const UpdateLogLevelsByResourceTypesResponseSchema = z
  .object({})
  .openapi('UpdateLogLevelsByResourceTypesResponse')

const UpdateMulticastGroupResponseSchema = z.object({}).openapi('UpdateMulticastGroupResponse')

const UpdateNetworkAnalyzerConfigurationResponseSchema = z
  .object({})
  .openapi('UpdateNetworkAnalyzerConfigurationResponse')

const UpdatePartnerAccountResponseSchema = z.object({}).openapi('UpdatePartnerAccountResponse')

const UpdatePositionResponseSchema = z
  .object({})
  .openapi({ deprecated: true, description: 'This operation is no longer supported.' })
  .openapi('UpdatePositionResponse')

const UpdateResourceEventConfigurationResponseSchema = z
  .object({})
  .openapi('UpdateResourceEventConfigurationResponse')

const UpdateResourcePositionResponseSchema = z.object({}).openapi('UpdateResourcePositionResponse')

const UpdateWirelessDeviceResponseSchema = z.object({}).openapi('UpdateWirelessDeviceResponse')

const UpdateAbpV1_1Schema = z
  .object({
    FCntStart: FCntStartSchema.and(
      z.any().openapi({ description: 'The FCnt init value.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'ABP device object for LoRaWAN specification v1.1', required: [] })
  .openapi('UpdateAbpV1_1')

const UpdateAbpV1_0XSchema = z
  .object({
    FCntStart: FCntStartSchema.and(
      z.any().openapi({ description: 'The FCnt init value.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'ABP device object for LoRaWAN specification v1.0.x', required: [] })
  .openapi('UpdateAbpV1_0X')

const UpdateFPortsSchema = z
  .object({
    Positioning: PositioningSchema.and(
      z
        .any()
        .openapi({
          description: 'Positioning FPorts for the ClockSync, Stream, and GNSS functions.',
        }),
    ).exactOptional(),
    Applications: ApplicationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'LoRaWAN application, which can be used for geolocation by activating positioning.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Object for updating the FPorts information.', required: [] })
  .openapi('UpdateFPorts')

const UpdateWirelessDeviceImportTaskResponseSchema = z
  .object({})
  .openapi('UpdateWirelessDeviceImportTaskResponse')

const UpdateWirelessGatewayResponseSchema = z.object({}).openapi('UpdateWirelessGatewayResponse')

const AmazonResourceNameSchema = z.string().min(1).max(1011).openapi('AmazonResourceName')

const ClientRequestTokenSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_]+$/)
  .min(1)
  .max(64)
  .openapi({
    description:
      'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.',
  })
  .openapi('ClientRequestToken')

const AssociateAwsAccountWithPartnerAccountRequestSchema = z
  .object({
    Sidewalk: SidewalkAccountInfoSchema.and(
      z.any().openapi({ description: 'The Sidewalk account credentials.' }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. ',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to attach to the specified resource. Tags are metadata that you can use to manage a resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Sidewalk'], title: 'AssociateAwsAccountWithPartnerAccountRequest' })
  .openapi('AssociateAwsAccountWithPartnerAccountRequest')

const AssociateMulticastGroupWithFuotaTaskRequestSchema = z
  .object({ MulticastGroupId: MulticastGroupIdSchema })
  .openapi({ required: ['MulticastGroupId'], title: 'AssociateMulticastGroupWithFuotaTaskRequest' })
  .openapi('AssociateMulticastGroupWithFuotaTaskRequest')

const AssociateWirelessDeviceWithFuotaTaskRequestSchema = z
  .object({ WirelessDeviceId: WirelessDeviceIdSchema })
  .openapi({ required: ['WirelessDeviceId'], title: 'AssociateWirelessDeviceWithFuotaTaskRequest' })
  .openapi('AssociateWirelessDeviceWithFuotaTaskRequest')

const AssociateWirelessDeviceWithMulticastGroupRequestSchema = z
  .object({ WirelessDeviceId: WirelessDeviceIdSchema })
  .openapi({
    required: ['WirelessDeviceId'],
    title: 'AssociateWirelessDeviceWithMulticastGroupRequest',
  })
  .openapi('AssociateWirelessDeviceWithMulticastGroupRequest')

const AssociateWirelessDeviceWithThingRequestSchema = z
  .object({
    ThingArn: ThingArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the thing to associate with the wireless device.' }),
    ),
  })
  .openapi({ required: ['ThingArn'], title: 'AssociateWirelessDeviceWithThingRequest' })
  .openapi('AssociateWirelessDeviceWithThingRequest')

const AssociateWirelessGatewayWithCertificateRequestSchema = z
  .object({
    IotCertificateId: IotCertificateIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the certificate to associate with the wireless gateway.',
        }),
    ),
  })
  .openapi({
    required: ['IotCertificateId'],
    title: 'AssociateWirelessGatewayWithCertificateRequest',
  })
  .openapi('AssociateWirelessGatewayWithCertificateRequest')

const AssociateWirelessGatewayWithThingRequestSchema = z
  .object({
    ThingArn: ThingArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the thing to associate with the wireless gateway.' }),
    ),
  })
  .openapi({ required: ['ThingArn'], title: 'AssociateWirelessGatewayWithThingRequest' })
  .openapi('AssociateWirelessGatewayWithThingRequest')

const CancelMulticastGroupSessionRequestSchema = z
  .object({})
  .openapi({ title: 'CancelMulticastGroupSessionRequest' })
  .openapi('CancelMulticastGroupSessionRequest')

const CellTowersSchema = z
  .object({
    Gsm: GsmListSchema.and(
      z.any().openapi({ description: 'GSM object information.' }),
    ).exactOptional(),
    Wcdma: WcdmaListSchema.and(
      z.any().openapi({ description: 'WCDMA object information.' }),
    ).exactOptional(),
    Tdscdma: TdscdmaListSchema.and(
      z.any().openapi({ description: 'TD-SCDMA object information.' }),
    ).exactOptional(),
    Lte: LteListSchema.and(
      z.any().openapi({ description: 'LTE object information.' }),
    ).exactOptional(),
    Cdma: CdmaListSchema.and(
      z.any().openapi({ description: 'CDMA object information.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The cell towers that were used to perform the measurements.',
    required: [],
  })
  .openapi('CellTowers')

const CreateDestinationRequestSchema = z
  .object({
    Name: DestinationNameSchema.and(
      z.any().openapi({ description: 'The name of the new resource.' }),
    ),
    ExpressionType: ExpressionTypeSchema.and(
      z.any().openapi({ description: 'The type of value in <code>Expression</code>.' }),
    ),
    Expression: ExpressionSchema.and(
      z.any().openapi({ description: 'The rule name or topic rule to send messages to.' }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the new resource.' }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z.any().openapi({ description: 'The ARN of the IAM Role that authorizes the destination.' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to attach to the new destination. Tags are metadata that you can use to manage a resource.',
        }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'ExpressionType', 'Expression', 'RoleArn'],
    title: 'CreateDestinationRequest',
  })
  .openapi('CreateDestinationRequest')

const SidewalkCreateDeviceProfileSchema = z
  .object({})
  .openapi({ description: 'Sidewalk object for creating a device profile.' })
  .openapi('SidewalkCreateDeviceProfile')

const CreateDeviceProfileRequestSchema = z
  .object({
    Name: DeviceProfileNameSchema.and(
      z.any().openapi({ description: 'The name of the new resource.' }),
    ).exactOptional(),
    LoRaWAN: LoRaWANDeviceProfileSchema.and(
      z
        .any()
        .openapi({
          description: 'The device profile information to use to create the device profile.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to attach to the new device profile. Tags are metadata that you can use to manage a resource.',
        }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. ',
        }),
    ).exactOptional(),
    Sidewalk: SidewalkCreateDeviceProfileSchema.and(
      z
        .any()
        .openapi({
          description: 'The Sidewalk-related information for creating the Sidewalk device profile.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateDeviceProfileRequest', required: [] })
  .openapi('CreateDeviceProfileRequest')

const LoRaWANFuotaTaskSchema = z
  .object({ RfRegion: SupportedRfRegionSchema.exactOptional() })
  .openapi({ description: 'The LoRaWAN information used with a FUOTA task.', required: [] })
  .openapi('LoRaWANFuotaTask')

const CreateFuotaTaskRequestSchema = z
  .object({
    Name: FuotaTaskNameSchema.exactOptional(),
    Description: DescriptionSchema.exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    LoRaWAN: LoRaWANFuotaTaskSchema.exactOptional(),
    FirmwareUpdateImage: FirmwareUpdateImageSchema,
    FirmwareUpdateRole: FirmwareUpdateRoleSchema,
    Tags: TagListSchema.exactOptional(),
    RedundancyPercent: RedundancyPercentSchema.exactOptional(),
    FragmentSizeBytes: FragmentSizeBytesSchema.exactOptional(),
    FragmentIntervalMS: FragmentIntervalMSSchema.exactOptional(),
  })
  .openapi({
    required: ['FirmwareUpdateImage', 'FirmwareUpdateRole'],
    title: 'CreateFuotaTaskRequest',
  })
  .openapi('CreateFuotaTaskRequest')

const LoRaWANMulticastSchema = z
  .object({
    RfRegion: SupportedRfRegionSchema.exactOptional(),
    DlClass: DlClassSchema.exactOptional(),
  })
  .openapi({
    description: 'The LoRaWAN information that is to be used with the multicast group.',
    required: [],
  })
  .openapi('LoRaWANMulticast')

const CreateMulticastGroupRequestSchema = z
  .object({
    Name: MulticastGroupNameSchema.exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the multicast group.' }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. ',
        }),
    ).exactOptional(),
    LoRaWAN: LoRaWANMulticastSchema,
    Tags: TagListSchema.exactOptional(),
  })
  .openapi({ required: ['LoRaWAN'], title: 'CreateMulticastGroupRequest' })
  .openapi('CreateMulticastGroupRequest')

const CreateNetworkAnalyzerConfigurationRequestSchema = z
  .object({
    Name: NetworkAnalyzerConfigurationNameSchema,
    TraceContent: TraceContentSchema.exactOptional(),
    WirelessDevices: WirelessDeviceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Wireless device resources to add to the network analyzer configuration. Provide the <code>WirelessDeviceId</code> of the resource to add in the input array.',
        }),
    ).exactOptional(),
    WirelessGateways: WirelessGatewayListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Wireless gateway resources to add to the network analyzer configuration. Provide the <code>WirelessGatewayId</code> of the resource to add in the input array.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.exactOptional(),
    Tags: TagListSchema.exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateNetworkAnalyzerConfigurationRequest' })
  .openapi('CreateNetworkAnalyzerConfigurationRequest')

const LoRaWANServiceProfileSchema = z
  .object({
    AddGwMetadata: AddGwMetadataSchema.and(
      z.any().openapi({ description: 'The AddGWMetaData value.' }),
    ).exactOptional(),
    DrMin: DrMinBoxSchema.and(z.any().openapi({ description: 'The DrMin value.' })).exactOptional(),
    DrMax: DrMaxBoxSchema.and(z.any().openapi({ description: 'The DrMax value.' })).exactOptional(),
    PrAllowed: PrAllowedSchema.and(
      z
        .any()
        .openapi({
          description: 'The PRAllowed value that describes whether passive roaming is allowed.',
        }),
    ).exactOptional(),
    RaAllowed: RaAllowedSchema.and(
      z
        .any()
        .openapi({
          description: 'The RAAllowed value that describes whether roaming activation is allowed.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'LoRaWANServiceProfile object.', required: [] })
  .openapi('LoRaWANServiceProfile')

const CreateServiceProfileRequestSchema = z
  .object({
    Name: ServiceProfileNameSchema.and(
      z.any().openapi({ description: 'The name of the new resource.' }),
    ).exactOptional(),
    LoRaWAN: LoRaWANServiceProfileSchema.and(
      z
        .any()
        .openapi({
          description: 'The service profile information to use to create the service profile.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to attach to the new service profile. Tags are metadata that you can use to manage a resource.',
        }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateServiceProfileRequest', required: [] })
  .openapi('CreateServiceProfileRequest')

const SidewalkCreateWirelessDeviceSchema = z
  .object({
    DeviceProfileId: DeviceProfileIdSchema.and(
      z.any().openapi({ description: 'The ID of the Sidewalk device profile.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Sidewalk object for creating a wireless device.', required: [] })
  .openapi('SidewalkCreateWirelessDevice')

const CreateWirelessDeviceRequestSchema = z
  .object({
    Type: WirelessDeviceTypeSchema.and(
      z.any().openapi({ description: 'The wireless device type.' }),
    ),
    Name: WirelessDeviceNameSchema.and(
      z.any().openapi({ description: 'The name of the new resource.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the new resource.' }),
    ).exactOptional(),
    DestinationName: DestinationNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the destination to assign to the new wireless device.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. ',
        }),
    ).exactOptional(),
    LoRaWAN: LoRaWANDeviceSchema.and(
      z
        .any()
        .openapi({
          description: 'The device configuration information to use to create the wireless device.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to attach to the new wireless device. Tags are metadata that you can use to manage a resource.',
        }),
    ).exactOptional(),
    Positioning: PositioningConfigStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'FPort values for the GNSS, stream, and ClockSync functions of the positioning information.',
        }),
    ).exactOptional(),
    Sidewalk: SidewalkCreateWirelessDeviceSchema.and(
      z
        .any()
        .openapi({
          description: 'The device configuration information to use to create the Sidewalk device.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Type', 'DestinationName'], title: 'CreateWirelessDeviceRequest' })
  .openapi('CreateWirelessDeviceRequest')

const CreateWirelessGatewayRequestSchema = z
  .object({
    Name: WirelessGatewayNameSchema.and(
      z.any().openapi({ description: 'The name of the new resource.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the new resource.' }),
    ).exactOptional(),
    LoRaWAN: LoRaWANGatewaySchema.and(
      z
        .any()
        .openapi({
          description:
            'The gateway configuration information to use to create the wireless gateway.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to attach to the new wireless gateway. Tags are metadata that you can use to manage a resource.',
        }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['LoRaWAN'], title: 'CreateWirelessGatewayRequest' })
  .openapi('CreateWirelessGatewayRequest')

const CreateWirelessGatewayTaskDefinitionRequestSchema = z
  .object({
    AutoCreateTasks: AutoCreateTasksSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether to automatically create tasks using this task definition for all gateways with the specified current version. If <code>false</code>, the task must me created by calling <code>CreateWirelessGatewayTask</code>.',
        }),
    ),
    Name: WirelessGatewayTaskNameSchema.and(
      z.any().openapi({ description: 'The name of the new resource.' }),
    ).exactOptional(),
    Update: UpdateWirelessGatewayTaskCreateSchema.and(
      z.any().openapi({ description: 'Information about the gateways to update.' }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. ',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to attach to the specified resource. Tags are metadata that you can use to manage a resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AutoCreateTasks'], title: 'CreateWirelessGatewayTaskDefinitionRequest' })
  .openapi('CreateWirelessGatewayTaskDefinitionRequest')

const CreateWirelessGatewayTaskRequestSchema = z
  .object({
    WirelessGatewayTaskDefinitionId: WirelessGatewayTaskDefinitionIdSchema.and(
      z.any().openapi({ description: 'The ID of the WirelessGatewayTaskDefinition.' }),
    ),
  })
  .openapi({
    required: ['WirelessGatewayTaskDefinitionId'],
    title: 'CreateWirelessGatewayTaskRequest',
  })
  .openapi('CreateWirelessGatewayTaskRequest')

const CreationDateSchema = z.iso.datetime({ offset: true }).openapi('CreationDate')

const DeleteDestinationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDestinationRequest' })
  .openapi('DeleteDestinationRequest')

const DeleteDeviceProfileRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDeviceProfileRequest' })
  .openapi('DeleteDeviceProfileRequest')

const DeleteFuotaTaskRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteFuotaTaskRequest' })
  .openapi('DeleteFuotaTaskRequest')

const DeleteMulticastGroupRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteMulticastGroupRequest' })
  .openapi('DeleteMulticastGroupRequest')

const DeleteNetworkAnalyzerConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteNetworkAnalyzerConfigurationRequest' })
  .openapi('DeleteNetworkAnalyzerConfigurationRequest')

const DeleteQueuedMessagesRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteQueuedMessagesRequest' })
  .openapi('DeleteQueuedMessagesRequest')

const DeleteServiceProfileRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteServiceProfileRequest' })
  .openapi('DeleteServiceProfileRequest')

const DeleteWirelessDeviceImportTaskRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteWirelessDeviceImportTaskRequest' })
  .openapi('DeleteWirelessDeviceImportTaskRequest')

const DeleteWirelessDeviceRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteWirelessDeviceRequest' })
  .openapi('DeleteWirelessDeviceRequest')

const DeleteWirelessGatewayRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteWirelessGatewayRequest' })
  .openapi('DeleteWirelessGatewayRequest')

const DeleteWirelessGatewayTaskDefinitionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteWirelessGatewayTaskDefinitionRequest' })
  .openapi('DeleteWirelessGatewayTaskDefinitionRequest')

const DeleteWirelessGatewayTaskRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteWirelessGatewayTaskRequest' })
  .openapi('DeleteWirelessGatewayTaskRequest')

const DeregisterWirelessDeviceRequestSchema = z
  .object({})
  .openapi({ title: 'DeregisterWirelessDeviceRequest' })
  .openapi('DeregisterWirelessDeviceRequest')

const DeviceNameSchema = z.string().openapi('DeviceName')

const DeviceProfileTypeSchema = z.enum(['Sidewalk', 'LoRaWAN']).openapi('DeviceProfileType')

const PartnerAccountIdSchema = z.string().max(256).openapi('PartnerAccountId')

const PartnerTypeSchema = z.literal('Sidewalk').openapi('PartnerType')

const DisassociateAwsAccountFromPartnerAccountRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateAwsAccountFromPartnerAccountRequest' })
  .openapi('DisassociateAwsAccountFromPartnerAccountRequest')

const DisassociateMulticastGroupFromFuotaTaskRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateMulticastGroupFromFuotaTaskRequest' })
  .openapi('DisassociateMulticastGroupFromFuotaTaskRequest')

const DisassociateWirelessDeviceFromFuotaTaskRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateWirelessDeviceFromFuotaTaskRequest' })
  .openapi('DisassociateWirelessDeviceFromFuotaTaskRequest')

const DisassociateWirelessDeviceFromMulticastGroupRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateWirelessDeviceFromMulticastGroupRequest' })
  .openapi('DisassociateWirelessDeviceFromMulticastGroupRequest')

const DisassociateWirelessDeviceFromThingRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateWirelessDeviceFromThingRequest' })
  .openapi('DisassociateWirelessDeviceFromThingRequest')

const DisassociateWirelessGatewayFromCertificateRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateWirelessGatewayFromCertificateRequest' })
  .openapi('DisassociateWirelessGatewayFromCertificateRequest')

const DisassociateWirelessGatewayFromThingRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateWirelessGatewayFromThingRequest' })
  .openapi('DisassociateWirelessGatewayFromThingRequest')

const EventNotificationResourceTypeSchema = z
  .enum(['SidewalkAccount', 'WirelessDevice', 'WirelessGateway'])
  .openapi('EventNotificationResourceType')

const GetDestinationRequestSchema = z
  .object({})
  .openapi({ title: 'GetDestinationRequest' })
  .openapi('GetDestinationRequest')

const GetDeviceProfileRequestSchema = z
  .object({})
  .openapi({ title: 'GetDeviceProfileRequest' })
  .openapi('GetDeviceProfileRequest')

const GetEventConfigurationByResourceTypesRequestSchema = z
  .object({})
  .openapi({ title: 'GetEventConfigurationByResourceTypesRequest' })
  .openapi('GetEventConfigurationByResourceTypesRequest')

const GetFuotaTaskRequestSchema = z
  .object({})
  .openapi({ title: 'GetFuotaTaskRequest' })
  .openapi('GetFuotaTaskRequest')

const GetLogLevelsByResourceTypesRequestSchema = z
  .object({})
  .openapi({ title: 'GetLogLevelsByResourceTypesRequest' })
  .openapi('GetLogLevelsByResourceTypesRequest')

const GetMulticastGroupRequestSchema = z
  .object({})
  .openapi({ title: 'GetMulticastGroupRequest' })
  .openapi('GetMulticastGroupRequest')

const GetMulticastGroupSessionRequestSchema = z
  .object({})
  .openapi({ title: 'GetMulticastGroupSessionRequest' })
  .openapi('GetMulticastGroupSessionRequest')

const GetNetworkAnalyzerConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'GetNetworkAnalyzerConfigurationRequest' })
  .openapi('GetNetworkAnalyzerConfigurationRequest')

const GetPartnerAccountRequestSchema = z
  .object({})
  .openapi({ title: 'GetPartnerAccountRequest' })
  .openapi('GetPartnerAccountRequest')

const GetPositionConfigurationRequestSchema = z
  .object({})
  .openapi({
    deprecated: true,
    title: 'GetPositionConfigurationRequest',
    description: 'This operation is no longer supported.',
  })
  .openapi('GetPositionConfigurationRequest')

const WiFiAccessPointsSchema = z.array(WiFiAccessPointSchema).openapi('WiFiAccessPoints')

const IpSchema = z
  .object({
    IpAddress: IPAddressSchema.and(z.any().openapi({ description: 'IP address information.' })),
  })
  .openapi({
    required: ['IpAddress'],
    description: 'IP address used for resolving device location.',
  })
  .openapi('Ip')

const GnssSchema = z
  .object({
    Payload: GnssNavSchema.and(
      z
        .any()
        .openapi({
          description:
            'Payload that contains the GNSS scan result, or NAV message, in hexadecimal notation.',
        }),
    ),
    CaptureTime: GPSTSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional parameter that gives an estimate of the time when the GNSS scan information is taken, in seconds GPS time (GPST). If capture time is not specified, the local server time is used.',
        }),
    ).exactOptional(),
    CaptureTimeAccuracy: CaptureTimeAccuracySchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional value that gives the capture time estimate accuracy, in seconds. If capture time accuracy is not specified, default value of 300 is used.',
        }),
    ).exactOptional(),
    AssistPosition: AssistPositionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional assistance position information, specified using latitude and longitude values in degrees. The coordinates are inside the WGS84 reference frame.',
        }),
    ).exactOptional(),
    AssistAltitude: CoordinateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional assistance altitude, which is the altitude of the device at capture time, specified in meters above the WGS84 reference ellipsoid.',
        }),
    ).exactOptional(),
    Use2DSolver: Use2DSolverSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional parameter that forces 2D solve, which modifies the positioning algorithm to a 2D solution problem. When this parameter is specified, the assistance altitude should have an accuracy of at least 10 meters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Payload'],
    description: 'Global navigation satellite system (GNSS) object used for positioning.',
  })
  .openapi('Gnss')

const GetPositionEstimateRequestSchema = z
  .object({
    WiFiAccessPoints: WiFiAccessPointsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Retrieves an estimated device position by resolving WLAN measurement data. The position is resolved using HERE's Wi-Fi based solver.",
        }),
    ).exactOptional(),
    CellTowers: CellTowersSchema.and(
      z
        .any()
        .openapi({
          description:
            "Retrieves an estimated device position by resolving measurement data from cellular radio towers. The position is resolved using HERE's cellular-based solver.",
        }),
    ).exactOptional(),
    Ip: IpSchema.and(
      z
        .any()
        .openapi({
          description:
            "Retrieves an estimated device position by resolving the IP address information from the device. The position is resolved using MaxMind's IP-based solver.",
        }),
    ).exactOptional(),
    Gnss: GnssSchema.and(
      z
        .any()
        .openapi({
          description:
            'Retrieves an estimated device position by resolving the global navigation satellite system (GNSS) scan data. The position is resolved using the GNSS solver powered by LoRa Cloud.',
        }),
    ).exactOptional(),
    Timestamp: CreationDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional information that specifies the time when the position information will be resolved. It uses the Unix timestamp format. If not specified, the time at which the request was received will be used.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetPositionEstimateRequest', required: [] })
  .openapi('GetPositionEstimateRequest')

const GetPositionRequestSchema = z
  .object({})
  .openapi({
    deprecated: true,
    title: 'GetPositionRequest',
    description: 'This operation is no longer supported.',
  })
  .openapi('GetPositionRequest')

const GetResourceEventConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'GetResourceEventConfigurationRequest' })
  .openapi('GetResourceEventConfigurationRequest')

const ResourceIdentifierSchema = z
  .string()
  .max(256)
  .openapi({
    description:
      'The identifier of the resource. For a Wireless Device, it is the wireless device ID. For a wireless gateway, it is the wireless gateway ID.',
  })
  .openapi('ResourceIdentifier')

const ResourceTypeSchema = z.string().openapi('ResourceType')

const GetResourceLogLevelRequestSchema = z
  .object({})
  .openapi({ title: 'GetResourceLogLevelRequest' })
  .openapi('GetResourceLogLevelRequest')

const GetResourcePositionRequestSchema = z
  .object({})
  .openapi({ title: 'GetResourcePositionRequest' })
  .openapi('GetResourcePositionRequest')

const GetServiceEndpointRequestSchema = z
  .object({})
  .openapi({ title: 'GetServiceEndpointRequest' })
  .openapi('GetServiceEndpointRequest')

const GetServiceProfileRequestSchema = z
  .object({})
  .openapi({ title: 'GetServiceProfileRequest' })
  .openapi('GetServiceProfileRequest')

const GetWirelessDeviceImportTaskRequestSchema = z
  .object({})
  .openapi({ title: 'GetWirelessDeviceImportTaskRequest' })
  .openapi('GetWirelessDeviceImportTaskRequest')

const WirelessDeviceIdTypeSchema = z
  .enum(['WirelessDeviceId', 'DevEui', 'ThingName', 'SidewalkManufacturingSn'])
  .openapi('WirelessDeviceIdType')

const GetWirelessDeviceRequestSchema = z
  .object({})
  .openapi({ title: 'GetWirelessDeviceRequest' })
  .openapi('GetWirelessDeviceRequest')

const GetWirelessDeviceStatisticsRequestSchema = z
  .object({})
  .openapi({ title: 'GetWirelessDeviceStatisticsRequest' })
  .openapi('GetWirelessDeviceStatisticsRequest')

const GetWirelessGatewayCertificateRequestSchema = z
  .object({})
  .openapi({ title: 'GetWirelessGatewayCertificateRequest' })
  .openapi('GetWirelessGatewayCertificateRequest')

const GetWirelessGatewayFirmwareInformationRequestSchema = z
  .object({})
  .openapi({ title: 'GetWirelessGatewayFirmwareInformationRequest' })
  .openapi('GetWirelessGatewayFirmwareInformationRequest')

const WirelessGatewayIdTypeSchema = z
  .enum(['GatewayEui', 'WirelessGatewayId', 'ThingName'])
  .openapi('WirelessGatewayIdType')

const GetWirelessGatewayRequestSchema = z
  .object({})
  .openapi({ title: 'GetWirelessGatewayRequest' })
  .openapi('GetWirelessGatewayRequest')

const GetWirelessGatewayStatisticsRequestSchema = z
  .object({})
  .openapi({ title: 'GetWirelessGatewayStatisticsRequest' })
  .openapi('GetWirelessGatewayStatisticsRequest')

const GetWirelessGatewayTaskDefinitionRequestSchema = z
  .object({})
  .openapi({ title: 'GetWirelessGatewayTaskDefinitionRequest' })
  .openapi('GetWirelessGatewayTaskDefinitionRequest')

const GetWirelessGatewayTaskRequestSchema = z
  .object({})
  .openapi({ title: 'GetWirelessGatewayTaskRequest' })
  .openapi('GetWirelessGatewayTaskRequest')

const MaxResultsSchema = z
  .int()
  .min(0)
  .max(250)
  .openapi({ description: 'The maximum number of results to return in this operation.' })
  .openapi('MaxResults')

const ListDestinationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListDestinationsRequest' })
  .openapi('ListDestinationsRequest')

const ListDeviceProfilesRequestSchema = z
  .object({})
  .openapi({ title: 'ListDeviceProfilesRequest' })
  .openapi('ListDeviceProfilesRequest')

const ListDevicesForWirelessDeviceImportTaskRequestSchema = z
  .object({})
  .openapi({ title: 'ListDevicesForWirelessDeviceImportTaskRequest' })
  .openapi('ListDevicesForWirelessDeviceImportTaskRequest')

const ListEventConfigurationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListEventConfigurationsRequest' })
  .openapi('ListEventConfigurationsRequest')

const ListFuotaTasksRequestSchema = z
  .object({})
  .openapi({ title: 'ListFuotaTasksRequest' })
  .openapi('ListFuotaTasksRequest')

const ListMulticastGroupsByFuotaTaskRequestSchema = z
  .object({})
  .openapi({ title: 'ListMulticastGroupsByFuotaTaskRequest' })
  .openapi('ListMulticastGroupsByFuotaTaskRequest')

const ListMulticastGroupsRequestSchema = z
  .object({})
  .openapi({ title: 'ListMulticastGroupsRequest' })
  .openapi('ListMulticastGroupsRequest')

const ListNetworkAnalyzerConfigurationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListNetworkAnalyzerConfigurationsRequest' })
  .openapi('ListNetworkAnalyzerConfigurationsRequest')

const ListPartnerAccountsRequestSchema = z
  .object({})
  .openapi({ title: 'ListPartnerAccountsRequest' })
  .openapi('ListPartnerAccountsRequest')

const ListPositionConfigurationsRequestSchema = z
  .object({})
  .openapi({
    deprecated: true,
    title: 'ListPositionConfigurationsRequest',
    description: 'This operation is no longer supported.',
  })
  .openapi('ListPositionConfigurationsRequest')

const ListQueuedMessagesRequestSchema = z
  .object({})
  .openapi({ title: 'ListQueuedMessagesRequest' })
  .openapi('ListQueuedMessagesRequest')

const ListServiceProfilesRequestSchema = z
  .object({})
  .openapi({ title: 'ListServiceProfilesRequest' })
  .openapi('ListServiceProfilesRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ListWirelessDeviceImportTasksRequestSchema = z
  .object({})
  .openapi({ title: 'ListWirelessDeviceImportTasksRequest' })
  .openapi('ListWirelessDeviceImportTasksRequest')

const ListWirelessDevicesRequestSchema = z
  .object({})
  .openapi({ title: 'ListWirelessDevicesRequest' })
  .openapi('ListWirelessDevicesRequest')

const WirelessGatewayTaskDefinitionTypeSchema = z
  .literal('UPDATE')
  .openapi('WirelessGatewayTaskDefinitionType')

const ListWirelessGatewayTaskDefinitionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListWirelessGatewayTaskDefinitionsRequest' })
  .openapi('ListWirelessGatewayTaskDefinitionsRequest')

const ListWirelessGatewaysRequestSchema = z
  .object({})
  .openapi({ title: 'ListWirelessGatewaysRequest' })
  .openapi('ListWirelessGatewaysRequest')

const LoRaWANStartFuotaTaskSchema = z
  .object({ StartTime: StartTimeSchema.exactOptional() })
  .openapi({ description: 'The LoRaWAN information used to start a FUOTA task.', required: [] })
  .openapi('LoRaWANStartFuotaTask')

const LoRaWANUpdateDeviceSchema = z
  .object({
    DeviceProfileId: DeviceProfileIdSchema.and(
      z.any().openapi({ description: 'The ID of the device profile for the wireless device.' }),
    ).exactOptional(),
    ServiceProfileId: ServiceProfileIdSchema.and(
      z.any().openapi({ description: 'The ID of the service profile.' }),
    ).exactOptional(),
    AbpV1_1: UpdateAbpV1_1Schema.and(
      z.any().openapi({ description: 'ABP device object for update APIs for v1.1' }),
    ).exactOptional(),
    AbpV1_0_x: UpdateAbpV1_0XSchema.and(
      z.any().openapi({ description: 'ABP device object for update APIs for v1.0.x' }),
    ).exactOptional(),
    FPorts: UpdateFPortsSchema.and(
      z
        .any()
        .openapi({ description: 'FPorts object for the positioning information of the device.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'LoRaWAN object for update functions.', required: [] })
  .openapi('LoRaWANUpdateDevice')

const MulticastWirelessMetadataSchema = z
  .object({ LoRaWAN: LoRaWANMulticastMetadataSchema.exactOptional() })
  .openapi({
    description: 'Wireless metadata that is to be sent to multicast group.',
    required: [],
  })
  .openapi('MulticastWirelessMetadata')

const PayloadDataSchema = z
  .string()
  .regex(/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/)
  .max(2048)
  .openapi({ description: 'The binary to be sent to the end device, encoded in base64.' })
  .openapi('PayloadData')

const PositionSolverConfigurationsSchema = z
  .object({
    SemtechGnss: SemtechGnssConfigurationSchema.and(
      z.any().openapi({ description: 'The Semtech GNSS solver configuration object.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The wrapper for position solver configurations.', required: [] })
  .openapi('PositionSolverConfigurations')

const PutPositionConfigurationRequestSchema = z
  .object({
    Solvers: PositionSolverConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The positioning solvers used to update the position configuration of the resource.',
        }),
    ).exactOptional(),
    Destination: DestinationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.",
        }),
    ).exactOptional(),
  })
  .openapi({
    deprecated: true,
    title: 'PutPositionConfigurationRequest',
    description: 'This operation is no longer supported.',
    required: [],
  })
  .openapi('PutPositionConfigurationRequest')

const PutResourceLogLevelRequestSchema = z
  .object({ LogLevel: LogLevelSchema })
  .openapi({ required: ['LogLevel'], title: 'PutResourceLogLevelRequest' })
  .openapi('PutResourceLogLevelRequest')

const QueryStringSchema = z
  .string()
  .max(4096)
  .openapi({
    description:
      'Query string used to search for wireless devices as part of the bulk associate and disassociate process.',
  })
  .openapi('QueryString')

const ResetAllResourceLogLevelsRequestSchema = z
  .object({})
  .openapi({ title: 'ResetAllResourceLogLevelsRequest' })
  .openapi('ResetAllResourceLogLevelsRequest')

const ResetResourceLogLevelRequestSchema = z
  .object({})
  .openapi({ title: 'ResetResourceLogLevelRequest' })
  .openapi('ResetResourceLogLevelRequest')

const SendDataToMulticastGroupRequestSchema = z
  .object({ PayloadData: PayloadDataSchema, WirelessMetadata: MulticastWirelessMetadataSchema })
  .openapi({
    required: ['PayloadData', 'WirelessMetadata'],
    title: 'SendDataToMulticastGroupRequest',
  })
  .openapi('SendDataToMulticastGroupRequest')

const WirelessMetadataSchema = z
  .object({
    LoRaWAN: LoRaWANSendDataToDeviceSchema.and(
      z.any().openapi({ description: 'LoRaWAN device info.' }),
    ).exactOptional(),
    Sidewalk: SidewalkSendDataToDeviceSchema.and(
      z.any().openapi({ description: 'The Sidewalk account credentials.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'WirelessMetadata object.', required: [] })
  .openapi('WirelessMetadata')

const SendDataToWirelessDeviceRequestSchema = z
  .object({
    TransmitMode: TransmitModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The transmit mode to use to send data to the wireless device. Can be: <code>0</code> for UM (unacknowledge mode) or <code>1</code> for AM (acknowledge mode).',
        }),
    ),
    PayloadData: PayloadDataSchema,
    WirelessMetadata: WirelessMetadataSchema.and(
      z.any().openapi({ description: 'Metadata about the message request.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['TransmitMode', 'PayloadData'], title: 'SendDataToWirelessDeviceRequest' })
  .openapi('SendDataToWirelessDeviceRequest')

const SidewalkSingleStartImportInfoSchema = z
  .object({
    SidewalkManufacturingSn: SidewalkManufacturingSnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Sidewalk manufacturing serial number (SMSN) of the device added to the import task.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about an import task created for an individual Sidewalk device.',
    required: [],
  })
  .openapi('SidewalkSingleStartImportInfo')

const SidewalkStartImportInfoSchema = z
  .object({
    DeviceCreationFile: DeviceCreationFileSchema.and(
      z
        .any()
        .openapi({
          description:
            "The CSV file contained in an S3 bucket that's used for adding devices to an import task.",
        }),
    ).exactOptional(),
    Role: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM role that allows AWS IoT Wireless to access the CSV file in the S3 bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about an import task created for bulk provisioning.',
    required: [],
  })
  .openapi('SidewalkStartImportInfo')

const SidewalkUpdateAccountSchema = z
  .object({
    AppServerPrivateKey: AppServerPrivateKeySchema.and(
      z.any().openapi({ description: 'The new Sidewalk application server private key.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Sidewalk update.', required: [] })
  .openapi('SidewalkUpdateAccount')

const SidewalkUpdateImportInfoSchema = z
  .object({
    DeviceCreationFile: DeviceCreationFileSchema.and(
      z
        .any()
        .openapi({
          description:
            "The CSV file contained in an S3 bucket that's used for appending devices to an existing import task.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Sidewalk object information for updating an import task.',
    required: [],
  })
  .openapi('SidewalkUpdateImportInfo')

const StartBulkAssociateWirelessDeviceWithMulticastGroupRequestSchema = z
  .object({ QueryString: QueryStringSchema.exactOptional(), Tags: TagListSchema.exactOptional() })
  .openapi({ title: 'StartBulkAssociateWirelessDeviceWithMulticastGroupRequest', required: [] })
  .openapi('StartBulkAssociateWirelessDeviceWithMulticastGroupRequest')

const StartBulkDisassociateWirelessDeviceFromMulticastGroupRequestSchema = z
  .object({ QueryString: QueryStringSchema.exactOptional(), Tags: TagListSchema.exactOptional() })
  .openapi({ title: 'StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest', required: [] })
  .openapi('StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest')

const StartFuotaTaskRequestSchema = z
  .object({ LoRaWAN: LoRaWANStartFuotaTaskSchema.exactOptional() })
  .openapi({ title: 'StartFuotaTaskRequest', required: [] })
  .openapi('StartFuotaTaskRequest')

const StartMulticastGroupSessionRequestSchema = z
  .object({ LoRaWAN: LoRaWANMulticastSessionSchema })
  .openapi({ required: ['LoRaWAN'], title: 'StartMulticastGroupSessionRequest' })
  .openapi('StartMulticastGroupSessionRequest')

const StartSingleWirelessDeviceImportTaskRequestSchema = z
  .object({
    DestinationName: DestinationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Sidewalk destination that describes the IoT rule to route messages from the device in the import task that will be onboarded to AWS IoT Wireless.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    DeviceName: DeviceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the wireless device for which an import task is being started.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.exactOptional(),
    Sidewalk: SidewalkSingleStartImportInfoSchema.and(
      z
        .any()
        .openapi({
          description: 'The Sidewalk-related parameters for importing a single wireless device.',
        }),
    ),
  })
  .openapi({
    required: ['DestinationName', 'Sidewalk'],
    title: 'StartSingleWirelessDeviceImportTaskRequest',
  })
  .openapi('StartSingleWirelessDeviceImportTaskRequest')

const StartWirelessDeviceImportTaskRequestSchema = z
  .object({
    DestinationName: DestinationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Sidewalk destination that describes the IoT rule to route messages from the devices in the import task that are onboarded to AWS IoT Wireless.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
    Tags: TagListSchema.exactOptional(),
    Sidewalk: SidewalkStartImportInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Sidewalk-related parameters for importing wireless devices that need to be provisioned in bulk.',
        }),
    ),
  })
  .openapi({
    required: ['DestinationName', 'Sidewalk'],
    title: 'StartWirelessDeviceImportTaskRequest',
  })
  .openapi('StartWirelessDeviceImportTaskRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Adds to or modifies the tags of the given resource. Tags are metadata that you can use to manage a resource.',
        }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TestWirelessDeviceRequestSchema = z
  .object({})
  .openapi({ title: 'TestWirelessDeviceRequest' })
  .openapi('TestWirelessDeviceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateDestinationRequestSchema = z
  .object({
    ExpressionType: ExpressionTypeSchema.and(
      z.any().openapi({ description: 'The type of value in <code>Expression</code>.' }),
    ).exactOptional(),
    Expression: ExpressionSchema.and(
      z.any().openapi({ description: 'The new rule name or topic rule to send messages to.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A new description of the resource.' }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z.any().openapi({ description: 'The ARN of the IAM Role that authorizes the destination.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateDestinationRequest', required: [] })
  .openapi('UpdateDestinationRequest')

const UpdateEventConfigurationByResourceTypesRequestSchema = z
  .object({
    DeviceRegistrationState: DeviceRegistrationStateResourceTypeEventConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Device registration state resource type event configuration object for enabling and disabling wireless gateway topic.',
        }),
    ).exactOptional(),
    Proximity: ProximityResourceTypeEventConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Proximity resource type event configuration object for enabling and disabling wireless gateway topic.',
        }),
    ).exactOptional(),
    Join: JoinResourceTypeEventConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Join resource type event configuration object for enabling and disabling wireless device topic.',
        }),
    ).exactOptional(),
    ConnectionStatus: ConnectionStatusResourceTypeEventConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Connection status resource type event configuration object for enabling and disabling wireless gateway topic.',
        }),
    ).exactOptional(),
    MessageDeliveryStatus: MessageDeliveryStatusResourceTypeEventConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Message delivery status resource type event configuration object for enabling and disabling wireless device topic.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateEventConfigurationByResourceTypesRequest', required: [] })
  .openapi('UpdateEventConfigurationByResourceTypesRequest')

const UpdateFuotaTaskRequestSchema = z
  .object({
    Name: FuotaTaskNameSchema.exactOptional(),
    Description: DescriptionSchema.exactOptional(),
    LoRaWAN: LoRaWANFuotaTaskSchema.exactOptional(),
    FirmwareUpdateImage: FirmwareUpdateImageSchema.exactOptional(),
    FirmwareUpdateRole: FirmwareUpdateRoleSchema.exactOptional(),
    RedundancyPercent: RedundancyPercentSchema.exactOptional(),
    FragmentSizeBytes: FragmentSizeBytesSchema.exactOptional(),
    FragmentIntervalMS: FragmentIntervalMSSchema.exactOptional(),
  })
  .openapi({ title: 'UpdateFuotaTaskRequest', required: [] })
  .openapi('UpdateFuotaTaskRequest')

const UpdateLogLevelsByResourceTypesRequestSchema = z
  .object({
    DefaultLogLevel: LogLevelSchema.exactOptional(),
    WirelessDeviceLogOptions: WirelessDeviceLogOptionListSchema.exactOptional(),
    WirelessGatewayLogOptions: WirelessGatewayLogOptionListSchema.exactOptional(),
  })
  .openapi({ title: 'UpdateLogLevelsByResourceTypesRequest', required: [] })
  .openapi('UpdateLogLevelsByResourceTypesRequest')

const UpdateMulticastGroupRequestSchema = z
  .object({
    Name: MulticastGroupNameSchema.exactOptional(),
    Description: DescriptionSchema.exactOptional(),
    LoRaWAN: LoRaWANMulticastSchema.exactOptional(),
  })
  .openapi({ title: 'UpdateMulticastGroupRequest', required: [] })
  .openapi('UpdateMulticastGroupRequest')

const UpdateNetworkAnalyzerConfigurationRequestSchema = z
  .object({
    TraceContent: TraceContentSchema.exactOptional(),
    WirelessDevicesToAdd: WirelessDeviceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Wireless device resources to add to the network analyzer configuration. Provide the <code>WirelessDeviceId</code> of the resource to add in the input array.',
        }),
    ).exactOptional(),
    WirelessDevicesToRemove: WirelessDeviceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Wireless device resources to remove from the network analyzer configuration. Provide the <code>WirelessDeviceId</code> of the resources to remove in the input array.',
        }),
    ).exactOptional(),
    WirelessGatewaysToAdd: WirelessGatewayListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Wireless gateway resources to add to the network analyzer configuration. Provide the <code>WirelessGatewayId</code> of the resource to add in the input array.',
        }),
    ).exactOptional(),
    WirelessGatewaysToRemove: WirelessGatewayListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Wireless gateway resources to remove from the network analyzer configuration. Provide the <code>WirelessGatewayId</code> of the resources to remove in the input array.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.exactOptional(),
  })
  .openapi({ title: 'UpdateNetworkAnalyzerConfigurationRequest', required: [] })
  .openapi('UpdateNetworkAnalyzerConfigurationRequest')

const UpdatePartnerAccountRequestSchema = z
  .object({
    Sidewalk: SidewalkUpdateAccountSchema.and(
      z.any().openapi({ description: 'The Sidewalk account credentials.' }),
    ),
  })
  .openapi({ required: ['Sidewalk'], title: 'UpdatePartnerAccountRequest' })
  .openapi('UpdatePartnerAccountRequest')

const UpdatePositionRequestSchema = z
  .object({
    Position: PositionCoordinateSchema.and(
      z.any().openapi({ description: 'The position information of the resource.' }),
    ),
  })
  .openapi({
    required: ['Position'],
    deprecated: true,
    title: 'UpdatePositionRequest',
    description: 'This operation is no longer supported.',
  })
  .openapi('UpdatePositionRequest')

const UpdateResourceEventConfigurationRequestSchema = z
  .object({
    DeviceRegistrationState: DeviceRegistrationStateEventConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'Event configuration for the device registration state event.' }),
    ).exactOptional(),
    Proximity: ProximityEventConfigurationSchema.and(
      z.any().openapi({ description: 'Event configuration for the proximity event.' }),
    ).exactOptional(),
    Join: JoinEventConfigurationSchema.and(
      z.any().openapi({ description: 'Event configuration for the join event.' }),
    ).exactOptional(),
    ConnectionStatus: ConnectionStatusEventConfigurationSchema.and(
      z.any().openapi({ description: 'Event configuration for the connection status event.' }),
    ).exactOptional(),
    MessageDeliveryStatus: MessageDeliveryStatusEventConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'Event configuration for the message delivery status event.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateResourceEventConfigurationRequest', required: [] })
  .openapi('UpdateResourceEventConfigurationRequest')

const UpdateResourcePositionRequestSchema = z
  .object({
    GeoJsonPayload: GeoJsonPayloadSchema.and(
      z
        .any()
        .openapi({
          description:
            'The position information of the resource, displayed as a JSON payload. The payload uses the GeoJSON format, which a format that\'s used to encode geographic data structures. For more information, see <a href="https://geojson.org/">GeoJSON</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateResourcePositionRequest', required: [] })
  .openapi('UpdateResourcePositionRequest')

const UpdateWirelessDeviceImportTaskRequestSchema = z
  .object({
    Sidewalk: SidewalkUpdateImportInfoSchema.and(
      z
        .any()
        .openapi({
          description: 'The Sidewalk-related parameters of the import task to be updated.',
        }),
    ),
  })
  .openapi({ required: ['Sidewalk'], title: 'UpdateWirelessDeviceImportTaskRequest' })
  .openapi('UpdateWirelessDeviceImportTaskRequest')

const UpdateWirelessDeviceRequestSchema = z
  .object({
    DestinationName: DestinationNameSchema.and(
      z.any().openapi({ description: 'The name of the new destination for the device.' }),
    ).exactOptional(),
    Name: WirelessDeviceNameSchema.and(
      z.any().openapi({ description: 'The new name of the resource.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A new description of the resource.' }),
    ).exactOptional(),
    LoRaWAN: LoRaWANUpdateDeviceSchema.and(
      z.any().openapi({ description: "The updated wireless device's configuration." }),
    ).exactOptional(),
    Positioning: PositioningConfigStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'FPort values for the GNSS, stream, and ClockSync functions of the positioning information.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateWirelessDeviceRequest', required: [] })
  .openapi('UpdateWirelessDeviceRequest')

const UpdateWirelessGatewayRequestSchema = z
  .object({
    Name: WirelessGatewayNameSchema.and(
      z.any().openapi({ description: 'The new name of the resource.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A new description of the resource.' }),
    ).exactOptional(),
    JoinEuiFilters: JoinEuiFiltersSchema.exactOptional(),
    NetIdFilters: NetIdFiltersSchema.exactOptional(),
    MaxEirp: GatewayMaxEirpSchema.and(
      z.any().openapi({ description: 'The MaxEIRP value.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateWirelessGatewayRequest', required: [] })
  .openapi('UpdateWirelessGatewayRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const getPartnerAccountsRoute = createRoute({
  method: 'get',
  path: '/partner-accounts',
  description: 'Lists the partner accounts associated with your AWS account.',
  operationId: 'ListPartnerAccounts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      nextToken: z
        .string()
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.',
            schema: { type: 'string', maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in this operation.',
            schema: {
              type: 'integer',
              description: 'The maximum number of results to return in this operation.',
              minimum: 0,
              maximum: 250,
            },
          },
          description: 'The maximum number of results to return in this operation.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPartnerAccountsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postPartnerAccountsRoute = createRoute({
  method: 'post',
  path: '/partner-accounts',
  description: 'Associates a partner account with your AWS account.',
  operationId: 'AssociateAwsAccountWithPartnerAccount',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Sidewalk: z
                .object({
                  AmazonId: AmazonIdSchema.and(
                    z.any().openapi({ description: 'The Sidewalk Amazon ID.' }),
                  ).exactOptional(),
                  AppServerPrivateKey: AppServerPrivateKeySchema.and(
                    z
                      .any()
                      .openapi({ description: 'The Sidewalk application server private key.' }),
                  ).exactOptional(),
                })
                .openapi({ description: 'Information about a Sidewalk account.', required: [] }),
              ClientRequestToken: z
                .string()
                .regex(/^[a-zA-Z0-9-_]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.',
                }),
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.',
                }),
            })
            .openapi({ required: ['Sidewalk'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AssociateAwsAccountWithPartnerAccountResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const putFuotaTasksIdMulticastGroupRoute = createRoute({
  method: 'put',
  path: '/fuota-tasks/{Id}/multicast-group',
  description: 'Associate a multicast group with a FUOTA task.',
  operationId: 'AssociateMulticastGroupWithFuotaTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: { type: 'string', description: 'The ID of a FUOTA task.', maxLength: 256 },
          },
          description: 'The ID of a FUOTA task.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MulticastGroupId: z
                .string()
                .max(256)
                .openapi({ description: 'The ID of the multicast group.' }),
            })
            .openapi({ required: ['MulticastGroupId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: {
        'application/json': { schema: AssociateMulticastGroupWithFuotaTaskResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putFuotaTasksIdWirelessDeviceRoute = createRoute({
  method: 'put',
  path: '/fuota-tasks/{Id}/wireless-device',
  description: 'Associate a wireless device with a FUOTA task.',
  operationId: 'AssociateWirelessDeviceWithFuotaTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: { type: 'string', description: 'The ID of a FUOTA task.', maxLength: 256 },
          },
          description: 'The ID of a FUOTA task.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              WirelessDeviceId: z
                .string()
                .max(256)
                .openapi({ description: 'The ID of the wireless device.' }),
            })
            .openapi({ required: ['WirelessDeviceId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: {
        'application/json': { schema: AssociateWirelessDeviceWithFuotaTaskResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putMulticastGroupsIdWirelessDeviceRoute = createRoute({
  method: 'put',
  path: '/multicast-groups/{Id}/wireless-device',
  description: 'Associates a wireless device with a multicast group.',
  operationId: 'AssociateWirelessDeviceWithMulticastGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description: 'The ID of the multicast group.',
              maxLength: 256,
            },
          },
          description: 'The ID of the multicast group.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              WirelessDeviceId: z
                .string()
                .max(256)
                .openapi({ description: 'The ID of the wireless device.' }),
            })
            .openapi({ required: ['WirelessDeviceId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: {
        'application/json': { schema: AssociateWirelessDeviceWithMulticastGroupResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putWirelessDevicesIdThingRoute = createRoute({
  method: 'put',
  path: '/wireless-devices/{Id}/thing',
  description: 'Associates a wireless device with a thing.',
  operationId: 'AssociateWirelessDeviceWithThing',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to update.',
            schema: {
              type: 'string',
              description: 'The ID of the wireless device.',
              maxLength: 256,
            },
          },
          description: 'The ID of the wireless device.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ThingArn: z
                .string()
                .openapi({
                  description: 'The ARN of the thing to associate with the wireless device.',
                }),
            })
            .openapi({ required: ['ThingArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateWirelessDeviceWithThingResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteWirelessDevicesIdThingRoute = createRoute({
  method: 'delete',
  path: '/wireless-devices/{Id}/thing',
  description: 'Disassociates a wireless device from its currently associated thing.',
  operationId: 'DisassociateWirelessDeviceFromThing',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to update.',
            schema: {
              type: 'string',
              description: 'The ID of the wireless device.',
              maxLength: 256,
            },
          },
          description: 'The ID of the wireless device.',
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: {
        'application/json': { schema: DisassociateWirelessDeviceFromThingResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getWirelessGatewaysIdCertificateRoute = createRoute({
  method: 'get',
  path: '/wireless-gateways/{Id}/certificate',
  description:
    'Gets the ID of the certificate that is currently associated with a wireless gateway.',
  operationId: 'GetWirelessGatewayCertificate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to get.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetWirelessGatewayCertificateResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putWirelessGatewaysIdCertificateRoute = createRoute({
  method: 'put',
  path: '/wireless-gateways/{Id}/certificate',
  description: 'Associates a wireless gateway with a certificate.',
  operationId: 'AssociateWirelessGatewayWithCertificate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to update.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              IotCertificateId: z
                .string()
                .min(1)
                .max(4096)
                .openapi({
                  description: 'The ID of the certificate to associate with the wireless gateway.',
                }),
            })
            .openapi({ required: ['IotCertificateId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AssociateWirelessGatewayWithCertificateResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteWirelessGatewaysIdCertificateRoute = createRoute({
  method: 'delete',
  path: '/wireless-gateways/{Id}/certificate',
  description: 'Disassociates a wireless gateway from its currently associated certificate.',
  operationId: 'DisassociateWirelessGatewayFromCertificate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to update.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: {
        'application/json': { schema: DisassociateWirelessGatewayFromCertificateResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putWirelessGatewaysIdThingRoute = createRoute({
  method: 'put',
  path: '/wireless-gateways/{Id}/thing',
  description: 'Associates a wireless gateway with a thing.',
  operationId: 'AssociateWirelessGatewayWithThing',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to update.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ThingArn: z
                .string()
                .openapi({
                  description: 'The ARN of the thing to associate with the wireless gateway.',
                }),
            })
            .openapi({ required: ['ThingArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateWirelessGatewayWithThingResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteWirelessGatewaysIdThingRoute = createRoute({
  method: 'delete',
  path: '/wireless-gateways/{Id}/thing',
  description: 'Disassociates a wireless gateway from its currently associated thing.',
  operationId: 'DisassociateWirelessGatewayFromThing',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to update.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: {
        'application/json': { schema: DisassociateWirelessGatewayFromThingResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getMulticastGroupsIdSessionRoute = createRoute({
  method: 'get',
  path: '/multicast-groups/{Id}/session',
  description: 'Gets information about a multicast group session.',
  operationId: 'GetMulticastGroupSession',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description: 'The ID of the multicast group.',
              maxLength: 256,
            },
          },
          description: 'The ID of the multicast group.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMulticastGroupSessionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putMulticastGroupsIdSessionRoute = createRoute({
  method: 'put',
  path: '/multicast-groups/{Id}/session',
  description: 'Starts a multicast group session.',
  operationId: 'StartMulticastGroupSession',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description: 'The ID of the multicast group.',
              maxLength: 256,
            },
          },
          description: 'The ID of the multicast group.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              LoRaWAN: z
                .object({
                  DlDr: DlDrSchema.exactOptional(),
                  DlFreq: DlFreqSchema.exactOptional(),
                  SessionStartTime: SessionStartTimeTimestampSchema.exactOptional(),
                  SessionTimeout: SessionTimeoutSchema.exactOptional(),
                  PingSlotPeriod: PingSlotPeriodSchema.and(
                    z.any().openapi({ description: 'The PingSlotPeriod value.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'The LoRaWAN information used with the multicast session.',
                  required: [],
                }),
            })
            .openapi({ required: ['LoRaWAN'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: StartMulticastGroupSessionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteMulticastGroupsIdSessionRoute = createRoute({
  method: 'delete',
  path: '/multicast-groups/{Id}/session',
  description: 'Cancels an existing multicast group session.',
  operationId: 'CancelMulticastGroupSession',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description: 'The ID of the multicast group.',
              maxLength: 256,
            },
          },
          description: 'The ID of the multicast group.',
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: CancelMulticastGroupSessionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getDestinationsRoute = createRoute({
  method: 'get',
  path: '/destinations',
  description: 'Lists the destinations registered to your AWS account.',
  operationId: 'ListDestinations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in this operation.',
            schema: {
              type: 'integer',
              description: 'The maximum number of results to return in this operation.',
              minimum: 0,
              maximum: 250,
            },
          },
          description: 'The maximum number of results to return in this operation.',
        }),
      nextToken: z
        .string()
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.',
            schema: { type: 'string', maxLength: 4096 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDestinationsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postDestinationsRoute = createRoute({
  method: 'post',
  path: '/destinations',
  description: 'Creates a new destination that maps a device message to an AWS IoT rule.',
  operationId: 'CreateDestination',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/[a-zA-Z0-9-_]+/)
                .max(128)
                .openapi({ description: 'The name of the new resource.' }),
              ExpressionType: z
                .enum(['RuleName', 'MqttTopic'])
                .openapi({ description: 'The type of value in <code>Expression</code>.' }),
              Expression: z
                .string()
                .max(2048)
                .openapi({ description: 'The rule name or topic rule to send messages to.' }),
              Description: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The description of the new resource.' }),
              RoleArn: z
                .string()
                .min(20)
                .max(2048)
                .openapi({
                  description: 'The ARN of the IAM Role that authorizes the destination.',
                }),
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.',
                }),
              ClientRequestToken: z
                .string()
                .regex(/^[a-zA-Z0-9-_]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.',
                }),
            })
            .openapi({ required: ['Name', 'ExpressionType', 'Expression', 'RoleArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDestinationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getDeviceProfilesRoute = createRoute({
  method: 'get',
  path: '/device-profiles',
  description: 'Lists the device profiles registered to your AWS account.',
  operationId: 'ListDeviceProfiles',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      nextToken: z
        .string()
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.',
            schema: { type: 'string', maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in this operation.',
            schema: {
              type: 'integer',
              description: 'The maximum number of results to return in this operation.',
              minimum: 0,
              maximum: 250,
            },
          },
          description: 'The maximum number of results to return in this operation.',
        }),
      deviceProfileType: z
        .enum(['Sidewalk', 'LoRaWAN'])
        .exactOptional()
        .openapi({
          param: {
            name: 'deviceProfileType',
            in: 'query',
            required: false,
            description:
              'A filter to list only device profiles that use this type, which can be <code>LoRaWAN</code> or <code>Sidewalk</code>.',
            schema: { type: 'string', enum: ['Sidewalk', 'LoRaWAN'] },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDeviceProfilesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postDeviceProfilesRoute = createRoute({
  method: 'post',
  path: '/device-profiles',
  description: 'Creates a new device profile.',
  operationId: 'CreateDeviceProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .max(256)
                .exactOptional()
                .openapi({ description: 'The name of the new resource.' }),
              LoRaWAN: z
                .object({
                  SupportsClassB: SupportsClassBSchema.and(
                    z.any().openapi({ description: 'The SupportsClassB value.' }),
                  ).exactOptional(),
                  ClassBTimeout: ClassBTimeoutSchema.and(
                    z.any().openapi({ description: 'The ClassBTimeout value.' }),
                  ).exactOptional(),
                  PingSlotPeriod: PingSlotPeriodSchema.and(
                    z.any().openapi({ description: 'The PingSlotPeriod value.' }),
                  ).exactOptional(),
                  PingSlotDr: PingSlotDrSchema.and(
                    z.any().openapi({ description: 'The PingSlotDR value.' }),
                  ).exactOptional(),
                  PingSlotFreq: PingSlotFreqSchema.and(
                    z.any().openapi({ description: 'The PingSlotFreq value.' }),
                  ).exactOptional(),
                  SupportsClassC: SupportsClassCSchema.and(
                    z.any().openapi({ description: 'The SupportsClassC value.' }),
                  ).exactOptional(),
                  ClassCTimeout: ClassCTimeoutSchema.and(
                    z.any().openapi({ description: 'The ClassCTimeout value.' }),
                  ).exactOptional(),
                  MacVersion: MacVersionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The MAC version (such as OTAA 1.1 or OTAA 1.0.3) to use with this device profile.',
                      }),
                  ).exactOptional(),
                  RegParamsRevision: RegParamsRevisionSchema.and(
                    z.any().openapi({ description: 'The version of regional parameters.' }),
                  ).exactOptional(),
                  RxDelay1: RxDelay1Schema.and(
                    z.any().openapi({ description: 'The RXDelay1 value.' }),
                  ).exactOptional(),
                  RxDrOffset1: RxDrOffset1Schema.and(
                    z.any().openapi({ description: 'The RXDROffset1 value.' }),
                  ).exactOptional(),
                  RxDataRate2: RxDataRate2Schema.and(
                    z.any().openapi({ description: 'The RXDataRate2 value.' }),
                  ).exactOptional(),
                  RxFreq2: RxFreq2Schema.and(
                    z.any().openapi({ description: 'The RXFreq2 value.' }),
                  ).exactOptional(),
                  FactoryPresetFreqsList: FactoryPresetFreqsListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The list of values that make up the FactoryPresetFreqs value.',
                      }),
                  ).exactOptional(),
                  MaxEirp: MaxEirpSchema.and(
                    z.any().openapi({ description: 'The MaxEIRP value.' }),
                  ).exactOptional(),
                  MaxDutyCycle: MaxDutyCycleSchema.and(
                    z.any().openapi({ description: 'The MaxDutyCycle value.' }),
                  ).exactOptional(),
                  RfRegion: RfRegionSchema.and(
                    z.any().openapi({ description: 'The frequency band (RFRegion) value.' }),
                  ).exactOptional(),
                  SupportsJoin: SupportsJoinSchema.and(
                    z.any().openapi({ description: 'The SupportsJoin value.' }),
                  ).exactOptional(),
                  Supports32BitFCnt: Supports32BitFCntSchema.and(
                    z.any().openapi({ description: 'The Supports32BitFCnt value.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'LoRaWANDeviceProfile object.', required: [] }),
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.',
                }),
              ClientRequestToken: z
                .string()
                .regex(/^[a-zA-Z0-9-_]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.',
                }),
              Sidewalk: z
                .object({})
                .exactOptional()
                .openapi({ description: 'Sidewalk object for creating a device profile.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDeviceProfileResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getFuotaTasksRoute = createRoute({
  method: 'get',
  path: '/fuota-tasks',
  description: 'Lists the FUOTA tasks registered to your AWS account.',
  operationId: 'ListFuotaTasks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      nextToken: z
        .string()
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.',
            schema: { type: 'string', maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description: 'The maximum number of results to return in this operation.',
              minimum: 0,
              maximum: 250,
            },
          },
          description: 'The maximum number of results to return in this operation.',
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFuotaTasksResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postFuotaTasksRoute = createRoute({
  method: 'post',
  path: '/fuota-tasks',
  description: 'Creates a FUOTA task.',
  operationId: 'CreateFuotaTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .max(256)
                .exactOptional()
                .openapi({ description: 'The name of a FUOTA task.' }),
              Description: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The description of the new resource.' }),
              ClientRequestToken: z
                .string()
                .regex(/^[a-zA-Z0-9-_]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.',
                }),
              LoRaWAN: z
                .object({ RfRegion: SupportedRfRegionSchema.exactOptional() })
                .exactOptional()
                .openapi({
                  description: 'The LoRaWAN information used with a FUOTA task.',
                  required: [],
                }),
              FirmwareUpdateImage: z
                .string()
                .min(1)
                .max(4096)
                .openapi({
                  description:
                    'The S3 URI points to a firmware update image that is to be used with a FUOTA task.',
                }),
              FirmwareUpdateRole: z
                .string()
                .min(1)
                .max(2048)
                .openapi({
                  description: 'The firmware update role that is to be used with a FUOTA task.',
                }),
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.',
                }),
              RedundancyPercent: z
                .int()
                .min(0)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'The percentage of added redundant fragments. For example, if firmware file is 100 bytes and fragment size is 10 bytes, with <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.',
                }),
              FragmentSizeBytes: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The size of each fragment in bytes. Currently only supported in fuota tasks with multicast groups.',
                }),
              FragmentIntervalMS: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    "The interval of sending fragments in milliseconds. Currently the interval will be rounded to the nearest second. Note that this interval only controls the timing when the cloud sends the fragments down. The actual delay of receiving fragments at device side depends on the device's class and the communication delay with the cloud.",
                }),
            })
            .openapi({ required: ['FirmwareUpdateImage', 'FirmwareUpdateRole'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFuotaTaskResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getMulticastGroupsRoute = createRoute({
  method: 'get',
  path: '/multicast-groups',
  description: 'Lists the multicast groups registered to your AWS account.',
  operationId: 'ListMulticastGroups',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      nextToken: z
        .string()
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.',
            schema: { type: 'string', maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description: 'The maximum number of results to return in this operation.',
              minimum: 0,
              maximum: 250,
            },
          },
          description: 'The maximum number of results to return in this operation.',
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMulticastGroupsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postMulticastGroupsRoute = createRoute({
  method: 'post',
  path: '/multicast-groups',
  description: 'Creates a multicast group.',
  operationId: 'CreateMulticastGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .max(256)
                .exactOptional()
                .openapi({ description: 'The name of the multicast group.' }),
              Description: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The description of the new resource.' }),
              ClientRequestToken: z
                .string()
                .regex(/^[a-zA-Z0-9-_]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.',
                }),
              LoRaWAN: z
                .object({
                  RfRegion: SupportedRfRegionSchema.exactOptional(),
                  DlClass: DlClassSchema.exactOptional(),
                })
                .openapi({
                  description:
                    'The LoRaWAN information that is to be used with the multicast group.',
                  required: [],
                }),
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.',
                }),
            })
            .openapi({ required: ['LoRaWAN'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMulticastGroupResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getNetworkAnalyzerConfigurationsRoute = createRoute({
  method: 'get',
  path: '/network-analyzer-configurations',
  description: 'Lists the network analyzer configurations.',
  operationId: 'ListNetworkAnalyzerConfigurations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description: 'The maximum number of results to return in this operation.',
              minimum: 0,
              maximum: 250,
            },
          },
          description: 'The maximum number of results to return in this operation.',
        }),
      nextToken: z
        .string()
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.',
            schema: { type: 'string', maxLength: 4096 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListNetworkAnalyzerConfigurationsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postNetworkAnalyzerConfigurationsRoute = createRoute({
  method: 'post',
  path: '/network-analyzer-configurations',
  description: 'Creates a new network analyzer configuration.',
  operationId: 'CreateNetworkAnalyzerConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/[a-zA-Z0-9-_]+/)
                .min(1)
                .max(1024)
                .openapi({ description: 'Name of the network analyzer configuration.' }),
              TraceContent: z
                .object({
                  WirelessDeviceFrameInfo: WirelessDeviceFrameInfoSchema.exactOptional(),
                  LogLevel: LogLevelSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Trace content for your wireless gateway and wireless device resources.',
                  required: [],
                }),
              WirelessDevices: z
                .array(WirelessDeviceIdSchema)
                .min(0)
                .max(250)
                .exactOptional()
                .openapi({
                  description:
                    'Wireless device resources to add to the network analyzer configuration. Provide the <code>WirelessDeviceId</code> of the resource to add in the input array.',
                }),
              WirelessGateways: z
                .array(WirelessGatewayIdSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Wireless gateway resources to add to the network analyzer configuration. Provide the <code>WirelessGatewayId</code> of the resource to add in the input array.',
                }),
              Description: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The description of the new resource.' }),
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.',
                }),
              ClientRequestToken: z
                .string()
                .regex(/^[a-zA-Z0-9-_]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.',
                }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateNetworkAnalyzerConfigurationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getServiceProfilesRoute = createRoute({
  method: 'get',
  path: '/service-profiles',
  description: 'Lists the service profiles registered to your AWS account.',
  operationId: 'ListServiceProfiles',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      nextToken: z
        .string()
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.',
            schema: { type: 'string', maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in this operation.',
            schema: {
              type: 'integer',
              description: 'The maximum number of results to return in this operation.',
              minimum: 0,
              maximum: 250,
            },
          },
          description: 'The maximum number of results to return in this operation.',
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListServiceProfilesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postServiceProfilesRoute = createRoute({
  method: 'post',
  path: '/service-profiles',
  description: 'Creates a new service profile.',
  operationId: 'CreateServiceProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .max(256)
                .exactOptional()
                .openapi({ description: 'The name of the new resource.' }),
              LoRaWAN: z
                .object({
                  AddGwMetadata: AddGwMetadataSchema.and(
                    z.any().openapi({ description: 'The AddGWMetaData value.' }),
                  ).exactOptional(),
                  DrMin: DrMinBoxSchema.and(
                    z.any().openapi({ description: 'The DrMin value.' }),
                  ).exactOptional(),
                  DrMax: DrMaxBoxSchema.and(
                    z.any().openapi({ description: 'The DrMax value.' }),
                  ).exactOptional(),
                  PrAllowed: PrAllowedSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The PRAllowed value that describes whether passive roaming is allowed.',
                      }),
                  ).exactOptional(),
                  RaAllowed: RaAllowedSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The RAAllowed value that describes whether roaming activation is allowed.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'LoRaWANServiceProfile object.', required: [] }),
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.',
                }),
              ClientRequestToken: z
                .string()
                .regex(/^[a-zA-Z0-9-_]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateServiceProfileResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWirelessDevicesRoute = createRoute({
  method: 'get',
  path: '/wireless-devices',
  description: 'Lists the wireless devices registered to your AWS account.',
  operationId: 'ListWirelessDevices',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in this operation.',
            schema: {
              type: 'integer',
              description: 'The maximum number of results to return in this operation.',
              minimum: 0,
              maximum: 250,
            },
          },
          description: 'The maximum number of results to return in this operation.',
        }),
      nextToken: z
        .string()
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.',
            schema: { type: 'string', maxLength: 4096 },
          },
        }),
      destinationName: z
        .string()
        .regex(/[a-zA-Z0-9-_]+/)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'destinationName',
            in: 'query',
            required: false,
            description: 'A filter to list only the wireless devices that use this destination.',
            schema: { type: 'string', pattern: '[a-zA-Z0-9-_]+', maxLength: 128 },
          },
        }),
      deviceProfileId: z
        .string()
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'deviceProfileId',
            in: 'query',
            required: false,
            description: 'A filter to list only the wireless devices that use this device profile.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
      serviceProfileId: z
        .string()
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'serviceProfileId',
            in: 'query',
            required: false,
            description:
              'A filter to list only the wireless devices that use this service profile.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
      wirelessDeviceType: z
        .enum(['Sidewalk', 'LoRaWAN'])
        .exactOptional()
        .openapi({
          param: {
            name: 'wirelessDeviceType',
            in: 'query',
            required: false,
            description:
              'A filter to list only the wireless devices that use this wireless device type.',
            schema: { type: 'string', enum: ['Sidewalk', 'LoRaWAN'] },
          },
        }),
      fuotaTaskId: z
        .string()
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'fuotaTaskId',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'string', description: 'The ID of a FUOTA task.', maxLength: 256 },
          },
          description: 'The ID of a FUOTA task.',
        }),
      multicastGroupId: z
        .string()
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'multicastGroupId',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description: 'The ID of the multicast group.',
              maxLength: 256,
            },
          },
          description: 'The ID of the multicast group.',
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListWirelessDevicesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postWirelessDevicesRoute = createRoute({
  method: 'post',
  path: '/wireless-devices',
  description: 'Provisions a wireless device.',
  operationId: 'CreateWirelessDevice',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Type: z
                .enum(['Sidewalk', 'LoRaWAN'])
                .openapi({ description: 'The wireless device type.' }),
              Name: z
                .string()
                .max(256)
                .exactOptional()
                .openapi({ description: 'The name of the new resource.' }),
              Description: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The description of the new resource.' }),
              DestinationName: z
                .string()
                .regex(/[a-zA-Z0-9-_]+/)
                .max(128)
                .openapi({
                  description: 'The name of the destination to assign to the new wireless device.',
                }),
              ClientRequestToken: z
                .string()
                .regex(/^[a-zA-Z0-9-_]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.',
                }),
              LoRaWAN: z
                .object({
                  DevEui: DevEuiSchema.and(
                    z.any().openapi({ description: 'The DevEUI value.' }),
                  ).exactOptional(),
                  DeviceProfileId: DeviceProfileIdSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The ID of the device profile for the new wireless device.',
                      }),
                  ).exactOptional(),
                  ServiceProfileId: ServiceProfileIdSchema.and(
                    z.any().openapi({ description: 'The ID of the service profile.' }),
                  ).exactOptional(),
                  OtaaV1_1: OtaaV1_1Schema.and(
                    z.any().openapi({ description: 'OTAA device object for v1.1 for create APIs' }),
                  ).exactOptional(),
                  OtaaV1_0_x: OtaaV1_0XSchema.and(
                    z
                      .any()
                      .openapi({ description: 'OTAA device object for create APIs for v1.0.x' }),
                  ).exactOptional(),
                  AbpV1_1: AbpV1_1Schema.and(
                    z.any().openapi({ description: 'ABP device object for create APIs for v1.1' }),
                  ).exactOptional(),
                  AbpV1_0_x: AbpV1_0XSchema.and(
                    z.any().openapi({ description: 'LoRaWAN object for create APIs' }),
                  ).exactOptional(),
                  FPorts: FPortsSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'LoRaWAN object for create functions.', required: [] }),
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.',
                }),
              Positioning: z
                .enum(['Enabled', 'Disabled'])
                .exactOptional()
                .openapi({
                  description:
                    'FPort values for the GNSS, stream, and ClockSync functions of the positioning information.',
                }),
              Sidewalk: z
                .object({
                  DeviceProfileId: DeviceProfileIdSchema.and(
                    z.any().openapi({ description: 'The ID of the Sidewalk device profile.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Sidewalk object for creating a wireless device.',
                  required: [],
                }),
            })
            .openapi({ required: ['Type', 'DestinationName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWirelessDeviceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWirelessGatewaysRoute = createRoute({
  method: 'get',
  path: '/wireless-gateways',
  description: 'Lists the wireless gateways registered to your AWS account.',
  operationId: 'ListWirelessGateways',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      nextToken: z
        .string()
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.',
            schema: { type: 'string', maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in this operation.',
            schema: {
              type: 'integer',
              description: 'The maximum number of results to return in this operation.',
              minimum: 0,
              maximum: 250,
            },
          },
          description: 'The maximum number of results to return in this operation.',
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListWirelessGatewaysResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postWirelessGatewaysRoute = createRoute({
  method: 'post',
  path: '/wireless-gateways',
  description: 'Provisions a wireless gateway.',
  operationId: 'CreateWirelessGateway',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .max(256)
                .exactOptional()
                .openapi({ description: 'The name of the new resource.' }),
              Description: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The description of the new resource.' }),
              LoRaWAN: z
                .object({
                  GatewayEui: GatewayEuiSchema.and(
                    z.any().openapi({ description: "The gateway's EUI value." }),
                  ).exactOptional(),
                  RfRegion: RfRegionSchema.and(
                    z.any().openapi({ description: 'The frequency band (RFRegion) value.' }),
                  ).exactOptional(),
                  JoinEuiFilters: JoinEuiFiltersSchema.exactOptional(),
                  NetIdFilters: NetIdFiltersSchema.exactOptional(),
                  SubBands: SubBandsSchema.exactOptional(),
                  Beaconing: BeaconingSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Beaconing object information, which consists of the data rate and frequency parameters.',
                      }),
                  ).exactOptional(),
                  MaxEirp: GatewayMaxEirpSchema.and(
                    z.any().openapi({ description: 'The MaxEIRP value.' }),
                  ).exactOptional(),
                })
                .openapi({ description: 'LoRaWANGateway object.', required: [] }),
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.',
                }),
              ClientRequestToken: z
                .string()
                .regex(/^[a-zA-Z0-9-_]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.',
                }),
            })
            .openapi({ required: ['LoRaWAN'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWirelessGatewayResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWirelessGatewaysIdTasksRoute = createRoute({
  method: 'get',
  path: '/wireless-gateways/{Id}/tasks',
  description: 'Gets information about a wireless gateway task.',
  operationId: 'GetWirelessGatewayTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to get.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetWirelessGatewayTaskResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postWirelessGatewaysIdTasksRoute = createRoute({
  method: 'post',
  path: '/wireless-gateways/{Id}/tasks',
  description: 'Creates a task for a wireless gateway.',
  operationId: 'CreateWirelessGatewayTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to update.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              WirelessGatewayTaskDefinitionId: z
                .string()
                .regex(
                  /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/,
                )
                .max(36)
                .openapi({ description: 'The ID of the WirelessGatewayTaskDefinition.' }),
            })
            .openapi({ required: ['WirelessGatewayTaskDefinitionId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWirelessGatewayTaskResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteWirelessGatewaysIdTasksRoute = createRoute({
  method: 'delete',
  path: '/wireless-gateways/{Id}/tasks',
  description: 'Deletes a wireless gateway task.',
  operationId: 'DeleteWirelessGatewayTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to delete.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteWirelessGatewayTaskResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWirelessGatewayTaskDefinitionsRoute = createRoute({
  method: 'get',
  path: '/wireless-gateway-task-definitions',
  description: 'List the wireless gateway tasks definitions registered to your AWS account.',
  operationId: 'ListWirelessGatewayTaskDefinitions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in this operation.',
            schema: {
              type: 'integer',
              description: 'The maximum number of results to return in this operation.',
              minimum: 0,
              maximum: 250,
            },
          },
          description: 'The maximum number of results to return in this operation.',
        }),
      nextToken: z
        .string()
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.',
            schema: { type: 'string', maxLength: 4096 },
          },
        }),
      taskDefinitionType: z
        .literal('UPDATE')
        .exactOptional()
        .openapi({
          param: {
            name: 'taskDefinitionType',
            in: 'query',
            required: false,
            description:
              'A filter to list only the wireless gateway task definitions that use this task definition type.',
            schema: { type: 'string', enum: ['UPDATE'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListWirelessGatewayTaskDefinitionsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postWirelessGatewayTaskDefinitionsRoute = createRoute({
  method: 'post',
  path: '/wireless-gateway-task-definitions',
  description: 'Creates a gateway task definition.',
  operationId: 'CreateWirelessGatewayTaskDefinition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AutoCreateTasks: z
                .boolean()
                .openapi({
                  description:
                    'Whether to automatically create tasks using this task definition for all gateways with the specified current version. If <code>false</code>, the task must me created by calling <code>CreateWirelessGatewayTask</code>.',
                }),
              Name: z
                .string()
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The name of the new resource.' }),
              Update: z
                .object({
                  UpdateDataSource: UpdateDataSourceSchema.and(
                    z.any().openapi({ description: 'The link to the S3 bucket.' }),
                  ).exactOptional(),
                  UpdateDataRole: UpdateDataSourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The IAM role used to read data from the S3 bucket.',
                      }),
                  ).exactOptional(),
                  LoRaWAN: LoRaWANUpdateGatewayTaskCreateSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The properties that relate to the LoRaWAN wireless gateway.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'UpdateWirelessGatewayTaskCreate object.', required: [] }),
              ClientRequestToken: z
                .string()
                .regex(/^[a-zA-Z0-9-_]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.',
                }),
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.',
                }),
            })
            .openapi({ required: ['AutoCreateTasks'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: {
        'application/json': { schema: CreateWirelessGatewayTaskDefinitionResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getDestinationsNameRoute = createRoute({
  method: 'get',
  path: '/destinations/{Name}',
  description: 'Gets information about a destination.',
  operationId: 'GetDestination',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Name: z
        .string()
        .regex(/[a-zA-Z0-9-_]+/)
        .max(128)
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'The name of the resource to get.',
            schema: { type: 'string', pattern: '[a-zA-Z0-9-_]+', maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDestinationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteDestinationsNameRoute = createRoute({
  method: 'delete',
  path: '/destinations/{Name}',
  description: 'Deletes a destination.',
  operationId: 'DeleteDestination',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Name: z
        .string()
        .regex(/[a-zA-Z0-9-_]+/)
        .max(128)
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'The name of the resource to delete.',
            schema: { type: 'string', pattern: '[a-zA-Z0-9-_]+', maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDestinationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchDestinationsNameRoute = createRoute({
  method: 'patch',
  path: '/destinations/{Name}',
  description: 'Updates properties of a destination.',
  operationId: 'UpdateDestination',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Name: z
        .string()
        .regex(/[a-zA-Z0-9-_]+/)
        .max(128)
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'The new name of the resource.',
            schema: { type: 'string', pattern: '[a-zA-Z0-9-_]+', maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ExpressionType: z
                .enum(['RuleName', 'MqttTopic'])
                .exactOptional()
                .openapi({ description: 'The type of value in <code>Expression</code>.' }),
              Expression: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The new rule name or topic rule to send messages to.' }),
              Description: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The description of the new resource.' }),
              RoleArn: z
                .string()
                .min(20)
                .max(2048)
                .exactOptional()
                .openapi({
                  description: 'The ARN of the IAM Role that authorizes the destination.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDestinationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getDeviceProfilesIdRoute = createRoute({
  method: 'get',
  path: '/device-profiles/{Id}',
  description: 'Gets information about a device profile.',
  operationId: 'GetDeviceProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to get.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeviceProfileResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteDeviceProfilesIdRoute = createRoute({
  method: 'delete',
  path: '/device-profiles/{Id}',
  description: 'Deletes a device profile.',
  operationId: 'DeleteDeviceProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to delete.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDeviceProfileResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getFuotaTasksIdRoute = createRoute({
  method: 'get',
  path: '/fuota-tasks/{Id}',
  description: 'Gets information about a FUOTA task.',
  operationId: 'GetFuotaTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: { type: 'string', description: 'The ID of a FUOTA task.', maxLength: 256 },
          },
          description: 'The ID of a FUOTA task.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFuotaTaskResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putFuotaTasksIdRoute = createRoute({
  method: 'put',
  path: '/fuota-tasks/{Id}',
  description: 'Starts a FUOTA task.',
  operationId: 'StartFuotaTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: { type: 'string', description: 'The ID of a FUOTA task.', maxLength: 256 },
          },
          description: 'The ID of a FUOTA task.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              LoRaWAN: z
                .object({ StartTime: StartTimeSchema.exactOptional() })
                .exactOptional()
                .openapi({
                  description: 'The LoRaWAN information used to start a FUOTA task.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: StartFuotaTaskResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteFuotaTasksIdRoute = createRoute({
  method: 'delete',
  path: '/fuota-tasks/{Id}',
  description: 'Deletes a FUOTA task.',
  operationId: 'DeleteFuotaTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: { type: 'string', description: 'The ID of a FUOTA task.', maxLength: 256 },
          },
          description: 'The ID of a FUOTA task.',
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFuotaTaskResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchFuotaTasksIdRoute = createRoute({
  method: 'patch',
  path: '/fuota-tasks/{Id}',
  description: 'Updates properties of a FUOTA task.',
  operationId: 'UpdateFuotaTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: { type: 'string', description: 'The ID of a FUOTA task.', maxLength: 256 },
          },
          description: 'The ID of a FUOTA task.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .max(256)
                .exactOptional()
                .openapi({ description: 'The name of a FUOTA task.' }),
              Description: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The description of the new resource.' }),
              LoRaWAN: z
                .object({ RfRegion: SupportedRfRegionSchema.exactOptional() })
                .exactOptional()
                .openapi({
                  description: 'The LoRaWAN information used with a FUOTA task.',
                  required: [],
                }),
              FirmwareUpdateImage: z
                .string()
                .min(1)
                .max(4096)
                .exactOptional()
                .openapi({
                  description:
                    'The S3 URI points to a firmware update image that is to be used with a FUOTA task.',
                }),
              FirmwareUpdateRole: z
                .string()
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description: 'The firmware update role that is to be used with a FUOTA task.',
                }),
              RedundancyPercent: z
                .int()
                .min(0)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'The percentage of added redundant fragments. For example, if firmware file is 100 bytes and fragment size is 10 bytes, with <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.',
                }),
              FragmentSizeBytes: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The size of each fragment in bytes. Currently only supported in fuota tasks with multicast groups.',
                }),
              FragmentIntervalMS: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    "The interval of sending fragments in milliseconds. Currently the interval will be rounded to the nearest second. Note that this interval only controls the timing when the cloud sends the fragments down. The actual delay of receiving fragments at device side depends on the device's class and the communication delay with the cloud.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFuotaTaskResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getMulticastGroupsIdRoute = createRoute({
  method: 'get',
  path: '/multicast-groups/{Id}',
  description: 'Gets information about a multicast group.',
  operationId: 'GetMulticastGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description: 'The ID of the multicast group.',
              maxLength: 256,
            },
          },
          description: 'The ID of the multicast group.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMulticastGroupResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteMulticastGroupsIdRoute = createRoute({
  method: 'delete',
  path: '/multicast-groups/{Id}',
  description: 'Deletes a multicast group if it is not in use by a fuota task.',
  operationId: 'DeleteMulticastGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description: 'The ID of the multicast group.',
              maxLength: 256,
            },
          },
          description: 'The ID of the multicast group.',
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteMulticastGroupResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchMulticastGroupsIdRoute = createRoute({
  method: 'patch',
  path: '/multicast-groups/{Id}',
  description: 'Updates properties of a multicast group session.',
  operationId: 'UpdateMulticastGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description: 'The ID of the multicast group.',
              maxLength: 256,
            },
          },
          description: 'The ID of the multicast group.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .max(256)
                .exactOptional()
                .openapi({ description: 'The name of the multicast group.' }),
              Description: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The description of the new resource.' }),
              LoRaWAN: z
                .object({
                  RfRegion: SupportedRfRegionSchema.exactOptional(),
                  DlClass: DlClassSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The LoRaWAN information that is to be used with the multicast group.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateMulticastGroupResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getNetworkAnalyzerConfigurationsConfigurationNameRoute = createRoute({
  method: 'get',
  path: '/network-analyzer-configurations/{ConfigurationName}',
  description: 'Get network analyzer configuration.',
  operationId: 'GetNetworkAnalyzerConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      ConfigurationName: z
        .string()
        .regex(/[a-zA-Z0-9-_]+/)
        .min(1)
        .max(1024)
        .openapi({
          param: {
            name: 'ConfigurationName',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9-_]+',
              description: 'Name of the network analyzer configuration.',
              minLength: 1,
              maxLength: 1024,
            },
          },
          description: 'Name of the network analyzer configuration.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetNetworkAnalyzerConfigurationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteNetworkAnalyzerConfigurationsConfigurationNameRoute = createRoute({
  method: 'delete',
  path: '/network-analyzer-configurations/{ConfigurationName}',
  description: 'Deletes a network analyzer configuration.',
  operationId: 'DeleteNetworkAnalyzerConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      ConfigurationName: z
        .string()
        .regex(/[a-zA-Z0-9-_]+/)
        .min(1)
        .max(1024)
        .openapi({
          param: {
            name: 'ConfigurationName',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9-_]+',
              description: 'Name of the network analyzer configuration.',
              minLength: 1,
              maxLength: 1024,
            },
          },
          description: 'Name of the network analyzer configuration.',
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteNetworkAnalyzerConfigurationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchNetworkAnalyzerConfigurationsConfigurationNameRoute = createRoute({
  method: 'patch',
  path: '/network-analyzer-configurations/{ConfigurationName}',
  description: 'Update network analyzer configuration.',
  operationId: 'UpdateNetworkAnalyzerConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      ConfigurationName: z
        .string()
        .regex(/[a-zA-Z0-9-_]+/)
        .min(1)
        .max(1024)
        .openapi({
          param: {
            name: 'ConfigurationName',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[a-zA-Z0-9-_]+',
              description: 'Name of the network analyzer configuration.',
              minLength: 1,
              maxLength: 1024,
            },
          },
          description: 'Name of the network analyzer configuration.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TraceContent: z
                .object({
                  WirelessDeviceFrameInfo: WirelessDeviceFrameInfoSchema.exactOptional(),
                  LogLevel: LogLevelSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Trace content for your wireless gateway and wireless device resources.',
                  required: [],
                }),
              WirelessDevicesToAdd: z
                .array(WirelessDeviceIdSchema)
                .min(0)
                .max(250)
                .exactOptional()
                .openapi({
                  description:
                    'Wireless device resources to add to the network analyzer configuration. Provide the <code>WirelessDeviceId</code> of the resource to add in the input array.',
                }),
              WirelessDevicesToRemove: z
                .array(WirelessDeviceIdSchema)
                .min(0)
                .max(250)
                .exactOptional()
                .openapi({
                  description:
                    'Wireless device resources to remove from the network analyzer configuration. Provide the <code>WirelessDeviceId</code> of the resources to remove in the input array.',
                }),
              WirelessGatewaysToAdd: z
                .array(WirelessGatewayIdSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Wireless gateway resources to add to the network analyzer configuration. Provide the <code>WirelessGatewayId</code> of the resource to add in the input array.',
                }),
              WirelessGatewaysToRemove: z
                .array(WirelessGatewayIdSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Wireless gateway resources to remove from the network analyzer configuration. Provide the <code>WirelessGatewayId</code> of the resources to remove in the input array.',
                }),
              Description: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The description of the new resource.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateNetworkAnalyzerConfigurationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteWirelessDevicesIdDataMessageIdRoute = createRoute({
  method: 'delete',
  path: '/wireless-devices/{Id}/data#messageId',
  description: 'Remove queued messages from the downlink queue.',
  operationId: 'DeleteQueuedMessages',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The ID of a given wireless device for which downlink messages will be deleted.',
            schema: {
              type: 'string',
              description: 'The ID of the wireless device.',
              maxLength: 256,
            },
          },
          description: 'The ID of the wireless device.',
        }),
    }),
    query: z.object({
      messageId: z
        .string()
        .openapi({
          param: {
            name: 'messageId',
            in: 'query',
            required: true,
            description:
              'If message ID is <code>"*"</code>, it cleares the entire downlink queue for a given device, specified by the wireless device ID. Otherwise, the downlink message with the specified message ID will be deleted.',
            schema: { type: 'string' },
          },
        }),
      WirelessDeviceType: z
        .enum(['Sidewalk', 'LoRaWAN'])
        .exactOptional()
        .openapi({
          param: {
            name: 'WirelessDeviceType',
            in: 'query',
            required: false,
            description: 'The wireless device type, which can be either Sidewalk or LoRaWAN.',
            schema: { type: 'string', enum: ['Sidewalk', 'LoRaWAN'] },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteQueuedMessagesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getServiceProfilesIdRoute = createRoute({
  method: 'get',
  path: '/service-profiles/{Id}',
  description: 'Gets information about a service profile.',
  operationId: 'GetServiceProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to get.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetServiceProfileResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteServiceProfilesIdRoute = createRoute({
  method: 'delete',
  path: '/service-profiles/{Id}',
  description: 'Deletes a service profile.',
  operationId: 'DeleteServiceProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to delete.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteServiceProfileResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteWirelessDevicesIdRoute = createRoute({
  method: 'delete',
  path: '/wireless-devices/{Id}',
  description: 'Deletes a wireless device.',
  operationId: 'DeleteWirelessDevice',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to delete.',
            schema: {
              type: 'string',
              description: 'The ID of the wireless device.',
              maxLength: 256,
            },
          },
          description: 'The ID of the wireless device.',
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteWirelessDeviceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchWirelessDevicesIdRoute = createRoute({
  method: 'patch',
  path: '/wireless-devices/{Id}',
  description: 'Updates properties of a wireless device.',
  operationId: 'UpdateWirelessDevice',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to update.',
            schema: {
              type: 'string',
              description: 'The ID of the wireless device.',
              maxLength: 256,
            },
          },
          description: 'The ID of the wireless device.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DestinationName: z
                .string()
                .regex(/[a-zA-Z0-9-_]+/)
                .max(128)
                .exactOptional()
                .openapi({ description: 'The name of the new destination for the device.' }),
              Name: z
                .string()
                .max(256)
                .exactOptional()
                .openapi({ description: 'The new name of the resource.' }),
              Description: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The description of the new resource.' }),
              LoRaWAN: z
                .object({
                  DeviceProfileId: DeviceProfileIdSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The ID of the device profile for the wireless device.',
                      }),
                  ).exactOptional(),
                  ServiceProfileId: ServiceProfileIdSchema.and(
                    z.any().openapi({ description: 'The ID of the service profile.' }),
                  ).exactOptional(),
                  AbpV1_1: UpdateAbpV1_1Schema.and(
                    z.any().openapi({ description: 'ABP device object for update APIs for v1.1' }),
                  ).exactOptional(),
                  AbpV1_0_x: UpdateAbpV1_0XSchema.and(
                    z
                      .any()
                      .openapi({ description: 'ABP device object for update APIs for v1.0.x' }),
                  ).exactOptional(),
                  FPorts: UpdateFPortsSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'FPorts object for the positioning information of the device.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'LoRaWAN object for update functions.', required: [] }),
              Positioning: z
                .enum(['Enabled', 'Disabled'])
                .exactOptional()
                .openapi({
                  description:
                    'FPort values for the GNSS, stream, and ClockSync functions of the positioning information.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateWirelessDeviceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWirelessDeviceImportTaskIdRoute = createRoute({
  method: 'get',
  path: '/wireless_device_import_task/{Id}',
  description:
    'Get information about an import task and count of device onboarding summary information for the import task.',
  operationId: 'GetWirelessDeviceImportTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The identifier of the import task for which information is requested.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetWirelessDeviceImportTaskResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteWirelessDeviceImportTaskIdRoute = createRoute({
  method: 'delete',
  path: '/wireless_device_import_task/{Id}',
  description: 'Delete an import task.',
  operationId: 'DeleteWirelessDeviceImportTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The unique identifier of the import task to be deleted.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteWirelessDeviceImportTaskResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchWirelessDeviceImportTaskIdRoute = createRoute({
  method: 'patch',
  path: '/wireless_device_import_task/{Id}',
  description: 'Update an import task to add more devices to the task.',
  operationId: 'UpdateWirelessDeviceImportTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The identifier of the import task to be updated.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Sidewalk: z
                .object({
                  DeviceCreationFile: DeviceCreationFileSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The CSV file contained in an S3 bucket that's used for appending devices to an existing import task.",
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Sidewalk object information for updating an import task.',
                  required: [],
                }),
            })
            .openapi({ required: ['Sidewalk'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateWirelessDeviceImportTaskResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteWirelessGatewaysIdRoute = createRoute({
  method: 'delete',
  path: '/wireless-gateways/{Id}',
  description: 'Deletes a wireless gateway.',
  operationId: 'DeleteWirelessGateway',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to delete.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteWirelessGatewayResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchWirelessGatewaysIdRoute = createRoute({
  method: 'patch',
  path: '/wireless-gateways/{Id}',
  description: 'Updates properties of a wireless gateway.',
  operationId: 'UpdateWirelessGateway',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to update.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .max(256)
                .exactOptional()
                .openapi({ description: 'The new name of the resource.' }),
              Description: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The description of the new resource.' }),
              JoinEuiFilters: z
                .array(JoinEuiRangeSchema)
                .min(0)
                .max(3)
                .exactOptional()
                .openapi({
                  description:
                    'A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.',
                }),
              NetIdFilters: z
                .array(NetIdSchema)
                .min(0)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    'A list of NetId values that are used by LoRa gateways to filter the uplink frames.',
                }),
              MaxEirp: z
                .float32()
                .min(0)
                .max(30)
                .exactOptional()
                .openapi({ description: 'The MaxEIRP value.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateWirelessGatewayResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWirelessGatewayTaskDefinitionsIdRoute = createRoute({
  method: 'get',
  path: '/wireless-gateway-task-definitions/{Id}',
  description: 'Gets information about a wireless gateway task definition.',
  operationId: 'GetWirelessGatewayTaskDefinition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/)
        .max(36)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to get.',
            schema: {
              type: 'string',
              pattern:
                '[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}',
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetWirelessGatewayTaskDefinitionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteWirelessGatewayTaskDefinitionsIdRoute = createRoute({
  method: 'delete',
  path: '/wireless-gateway-task-definitions/{Id}',
  description:
    'Deletes a wireless gateway task definition. Deleting this task definition does not affect tasks that are currently in progress.',
  operationId: 'DeleteWirelessGatewayTaskDefinition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/)
        .max(36)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to delete.',
            schema: {
              type: 'string',
              pattern:
                '[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}',
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: {
        'application/json': { schema: DeleteWirelessGatewayTaskDefinitionResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchWirelessDevicesIdentifierDeregisterRoute = createRoute({
  method: 'patch',
  path: '/wireless-devices/{Identifier}/deregister',
  description: 'Deregister a wireless device from AWS IoT Wireless.',
  operationId: 'DeregisterWirelessDevice',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Identifier: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Identifier',
            in: 'path',
            required: true,
            description:
              'The identifier of the wireless device to deregister from AWS IoT Wireless.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
    query: z.object({
      WirelessDeviceType: z
        .enum(['Sidewalk', 'LoRaWAN'])
        .exactOptional()
        .openapi({
          param: {
            name: 'WirelessDeviceType',
            in: 'query',
            required: false,
            description:
              'The type of wireless device to deregister from AWS IoT Wireless, which can be <code>LoRaWAN</code> or <code>Sidewalk</code>.',
            schema: { type: 'string', enum: ['Sidewalk', 'LoRaWAN'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeregisterWirelessDeviceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getPartnerAccountsPartnerAccountIdPartnerTypeRoute = createRoute({
  method: 'get',
  path: '/partner-accounts/{PartnerAccountId}#partnerType',
  description:
    'Gets information about a partner account. If <code>PartnerAccountId</code> and <code>PartnerType</code> are <code>null</code>, returns all partner accounts.',
  operationId: 'GetPartnerAccount',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      PartnerAccountId: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'PartnerAccountId',
            in: 'path',
            required: true,
            description: 'The partner account ID to disassociate from the AWS account.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
    query: z.object({
      partnerType: z
        .literal('Sidewalk')
        .openapi({
          param: {
            name: 'partnerType',
            in: 'query',
            required: true,
            description: 'The partner type.',
            schema: { type: 'string', enum: ['Sidewalk'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPartnerAccountResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deletePartnerAccountsPartnerAccountIdPartnerTypeRoute = createRoute({
  method: 'delete',
  path: '/partner-accounts/{PartnerAccountId}#partnerType',
  description:
    'Disassociates your AWS account from a partner account. If <code>PartnerAccountId</code> and <code>PartnerType</code> are <code>null</code>, disassociates your AWS account from all partner accounts.',
  operationId: 'DisassociateAwsAccountFromPartnerAccount',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      PartnerAccountId: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'PartnerAccountId',
            in: 'path',
            required: true,
            description: 'The partner account ID to disassociate from the AWS account.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
    query: z.object({
      partnerType: z
        .literal('Sidewalk')
        .openapi({
          param: {
            name: 'partnerType',
            in: 'query',
            required: true,
            description: 'The partner type.',
            schema: { type: 'string', enum: ['Sidewalk'] },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: {
        'application/json': { schema: DisassociateAwsAccountFromPartnerAccountResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchPartnerAccountsPartnerAccountIdPartnerTypeRoute = createRoute({
  method: 'patch',
  path: '/partner-accounts/{PartnerAccountId}#partnerType',
  description: 'Updates properties of a partner account.',
  operationId: 'UpdatePartnerAccount',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      PartnerAccountId: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'PartnerAccountId',
            in: 'path',
            required: true,
            description: 'The ID of the partner account to update.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
    query: z.object({
      partnerType: z
        .literal('Sidewalk')
        .openapi({
          param: {
            name: 'partnerType',
            in: 'query',
            required: true,
            description: 'The partner type.',
            schema: { type: 'string', enum: ['Sidewalk'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Sidewalk: z
                .object({
                  AppServerPrivateKey: AppServerPrivateKeySchema.and(
                    z
                      .any()
                      .openapi({ description: 'The new Sidewalk application server private key.' }),
                  ).exactOptional(),
                })
                .openapi({ description: 'Sidewalk update.', required: [] }),
            })
            .openapi({ required: ['Sidewalk'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePartnerAccountResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteFuotaTasksIdMulticastGroupsMulticastGroupIdRoute = createRoute({
  method: 'delete',
  path: '/fuota-tasks/{Id}/multicast-groups/{MulticastGroupId}',
  description: 'Disassociates a multicast group from a fuota task.',
  operationId: 'DisassociateMulticastGroupFromFuotaTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: { type: 'string', description: 'The ID of a FUOTA task.', maxLength: 256 },
          },
          description: 'The ID of a FUOTA task.',
        }),
      MulticastGroupId: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'MulticastGroupId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description: 'The ID of the multicast group.',
              maxLength: 256,
            },
          },
          description: 'The ID of the multicast group.',
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: {
        'application/json': { schema: DisassociateMulticastGroupFromFuotaTaskResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteFuotaTasksIdWirelessDevicesWirelessDeviceIdRoute = createRoute({
  method: 'delete',
  path: '/fuota-tasks/{Id}/wireless-devices/{WirelessDeviceId}',
  description: 'Disassociates a wireless device from a FUOTA task.',
  operationId: 'DisassociateWirelessDeviceFromFuotaTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: { type: 'string', description: 'The ID of a FUOTA task.', maxLength: 256 },
          },
          description: 'The ID of a FUOTA task.',
        }),
      WirelessDeviceId: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'WirelessDeviceId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description: 'The ID of the wireless device.',
              maxLength: 256,
            },
          },
          description: 'The ID of the wireless device.',
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: {
        'application/json': { schema: DisassociateWirelessDeviceFromFuotaTaskResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteMulticastGroupsIdWirelessDevicesWirelessDeviceIdRoute = createRoute({
  method: 'delete',
  path: '/multicast-groups/{Id}/wireless-devices/{WirelessDeviceId}',
  description: 'Disassociates a wireless device from a multicast group.',
  operationId: 'DisassociateWirelessDeviceFromMulticastGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description: 'The ID of the multicast group.',
              maxLength: 256,
            },
          },
          description: 'The ID of the multicast group.',
        }),
      WirelessDeviceId: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'WirelessDeviceId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description: 'The ID of the wireless device.',
              maxLength: 256,
            },
          },
          description: 'The ID of the wireless device.',
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: {
        'application/json': { schema: DisassociateWirelessDeviceFromMulticastGroupResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getEventConfigurationsResourceTypesRoute = createRoute({
  method: 'get',
  path: '/event-configurations-resource-types',
  description: 'Get the event configuration based on resource types.',
  operationId: 'GetEventConfigurationByResourceTypes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: GetEventConfigurationByResourceTypesResponseSchema },
      },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchEventConfigurationsResourceTypesRoute = createRoute({
  method: 'patch',
  path: '/event-configurations-resource-types',
  description: 'Update the event configuration based on resource types.',
  operationId: 'UpdateEventConfigurationByResourceTypes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DeviceRegistrationState: z
                .object({
                  Sidewalk: SidewalkResourceTypeEventConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Device registration resource type state event configuration object for enabling or disabling Sidewalk related event topics.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Device registration state resource type event configuration object for enabling or disabling topic.',
                  required: [],
                }),
              Proximity: z
                .object({
                  Sidewalk: SidewalkResourceTypeEventConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Proximity resource type event configuration object for enabling and disabling wireless device topic.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Proximity resource type event configuration object for enabling or disabling topic.',
                  required: [],
                }),
              Join: z
                .object({
                  LoRaWAN: LoRaWANJoinResourceTypeEventConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Join resource type event configuration object for enabling or disabling LoRaWAN related event topics.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Join resource type event configuration object for enabling or disabling topic.',
                  required: [],
                }),
              ConnectionStatus: z
                .object({
                  LoRaWAN: LoRaWANConnectionStatusResourceTypeEventConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Connection status resource type event configuration object for enabling or disabling LoRaWAN related event topics.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Connection status resource type event configuration object for enabling or disabling topic.',
                  required: [],
                }),
              MessageDeliveryStatus: z
                .object({ Sidewalk: SidewalkResourceTypeEventConfigurationSchema.exactOptional() })
                .exactOptional()
                .openapi({
                  description:
                    'Message delivery status resource type event configuration object for enabling or disabling relevant topic.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: {
        'application/json': { schema: UpdateEventConfigurationByResourceTypesResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getLogLevelsRoute = createRoute({
  method: 'get',
  path: '/log-levels',
  description:
    'Returns current default log levels or log levels by resource types. Based on resource types, log levels can be for wireless device log options or wireless gateway log options.',
  operationId: 'GetLogLevelsByResourceTypes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLogLevelsByResourceTypesResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postLogLevelsRoute = createRoute({
  method: 'post',
  path: '/log-levels',
  description:
    "Set default log level, or log levels by resource types. This can be for wireless device log options or wireless gateways log options and is used to control the log messages that'll be displayed in CloudWatch.",
  operationId: 'UpdateLogLevelsByResourceTypes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DefaultLogLevel: z
                .enum(['INFO', 'ERROR', 'DISABLED'])
                .exactOptional()
                .openapi({
                  description:
                    'The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.',
                }),
              WirelessDeviceLogOptions: z
                .array(WirelessDeviceLogOptionSchema)
                .exactOptional()
                .openapi({ description: 'The list of wireless device log options.' }),
              WirelessGatewayLogOptions: z
                .array(WirelessGatewayLogOptionSchema)
                .exactOptional()
                .openapi({ description: 'The list of wireless gateway log options.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateLogLevelsByResourceTypesResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteLogLevelsRoute = createRoute({
  method: 'delete',
  path: '/log-levels',
  description:
    'Removes the log-level overrides for all resources; both wireless devices and wireless gateways.',
  operationId: 'ResetAllResourceLogLevels',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: ResetAllResourceLogLevelsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getPositionsResourceIdentifierResourceTypeRoute = createRoute({
  method: 'get',
  path: '/positions/{ResourceIdentifier}#resourceType',
  description:
    '<p>Get the position information for a given resource.</p> <important> <p>This action is no longer supported. Calls to retrieve the position information should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourcePosition.html">GetResourcePosition</a> API operation instead.</p> </important>',
  operationId: 'GetPosition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      ResourceIdentifier: z
        .string()
        .regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'ResourceIdentifier',
            in: 'path',
            required: true,
            description: 'Resource identifier used to retrieve the position information.',
            schema: {
              type: 'string',
              pattern:
                '[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
    query: z.object({
      resourceType: z
        .enum(['WirelessDevice', 'WirelessGateway'])
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: true,
            description:
              'Resource type of the resource for which position information is retrieved.',
            schema: { type: 'string', enum: ['WirelessDevice', 'WirelessGateway'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPositionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
  deprecated: true,
})

export const patchPositionsResourceIdentifierResourceTypeRoute = createRoute({
  method: 'patch',
  path: '/positions/{ResourceIdentifier}#resourceType',
  description:
    '<p>Update the position information of a resource.</p> <important> <p>This action is no longer supported. Calls to update the position information should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateResourcePosition.html">UpdateResourcePosition</a> API operation instead.</p> </important>',
  operationId: 'UpdatePosition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      ResourceIdentifier: z
        .string()
        .regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'ResourceIdentifier',
            in: 'path',
            required: true,
            description: 'Resource identifier of the resource for which position is updated.',
            schema: {
              type: 'string',
              pattern:
                '[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
    query: z.object({
      resourceType: z
        .enum(['WirelessDevice', 'WirelessGateway'])
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: true,
            description: 'Resource type of the resource for which position is updated.',
            schema: { type: 'string', enum: ['WirelessDevice', 'WirelessGateway'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Position: z
                .array(PositionCoordinateValueSchema)
                .openapi({ description: 'The position information of the resource.' }),
            })
            .openapi({ required: ['Position'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePositionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
  deprecated: true,
})

export const getPositionConfigurationsResourceIdentifierResourceTypeRoute = createRoute({
  method: 'get',
  path: '/position-configurations/{ResourceIdentifier}#resourceType',
  description:
    '<p>Get position configuration for a given resource.</p> <important> <p>This action is no longer supported. Calls to retrieve the position configuration should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourcePosition.html">GetResourcePosition</a> API operation instead.</p> </important>',
  operationId: 'GetPositionConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      ResourceIdentifier: z
        .string()
        .regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'ResourceIdentifier',
            in: 'path',
            required: true,
            description: 'Resource identifier used in a position configuration.',
            schema: {
              type: 'string',
              pattern:
                '[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
    query: z.object({
      resourceType: z
        .enum(['WirelessDevice', 'WirelessGateway'])
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: true,
            description:
              'Resource type of the resource for which position configuration is retrieved.',
            schema: { type: 'string', enum: ['WirelessDevice', 'WirelessGateway'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPositionConfigurationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
  deprecated: true,
})

export const putPositionConfigurationsResourceIdentifierResourceTypeRoute = createRoute({
  method: 'put',
  path: '/position-configurations/{ResourceIdentifier}#resourceType',
  description:
    '<p>Put position configuration for a given resource.</p> <important> <p>This action is no longer supported. Calls to update the position configuration should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateResourcePosition.html">UpdateResourcePosition</a> API operation instead.</p> </important>',
  operationId: 'PutPositionConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      ResourceIdentifier: z
        .string()
        .regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'ResourceIdentifier',
            in: 'path',
            required: true,
            description: 'Resource identifier used to update the position configuration.',
            schema: {
              type: 'string',
              pattern:
                '[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
    query: z.object({
      resourceType: z
        .enum(['WirelessDevice', 'WirelessGateway'])
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: true,
            description:
              'Resource type of the resource for which you want to update the position configuration.',
            schema: { type: 'string', enum: ['WirelessDevice', 'WirelessGateway'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Solvers: z
                .object({
                  SemtechGnss: SemtechGnssConfigurationSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The Semtech GNSS solver configuration object.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The wrapper for position solver configurations.',
                  required: [],
                }),
              Destination: z
                .string()
                .regex(/[a-zA-Z0-9-_]+/)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    "The position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutPositionConfigurationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postPositionEstimateRoute = createRoute({
  method: 'post',
  path: '/position-estimate',
  description:
    'Get estimated position information as a payload in GeoJSON format. The payload measurement data is resolved using solvers that are provided by third-party vendors.',
  operationId: 'GetPositionEstimate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              WiFiAccessPoints: z
                .array(WiFiAccessPointSchema)
                .exactOptional()
                .openapi({
                  description:
                    "Retrieves an estimated device position by resolving WLAN measurement data. The position is resolved using HERE's Wi-Fi based solver.",
                }),
              CellTowers: z
                .object({
                  Gsm: GsmListSchema.and(
                    z.any().openapi({ description: 'GSM object information.' }),
                  ).exactOptional(),
                  Wcdma: WcdmaListSchema.and(
                    z.any().openapi({ description: 'WCDMA object information.' }),
                  ).exactOptional(),
                  Tdscdma: TdscdmaListSchema.and(
                    z.any().openapi({ description: 'TD-SCDMA object information.' }),
                  ).exactOptional(),
                  Lte: LteListSchema.and(
                    z.any().openapi({ description: 'LTE object information.' }),
                  ).exactOptional(),
                  Cdma: CdmaListSchema.and(
                    z.any().openapi({ description: 'CDMA object information.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The cell towers that were used to perform the measurements.',
                  required: [],
                }),
              Ip: z
                .object({
                  IpAddress: IPAddressSchema.and(
                    z.any().openapi({ description: 'IP address information.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'IP address used for resolving device location.',
                  required: [],
                }),
              Gnss: z
                .object({
                  Payload: GnssNavSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Payload that contains the GNSS scan result, or NAV message, in hexadecimal notation.',
                      }),
                  ).exactOptional(),
                  CaptureTime: GPSTSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Optional parameter that gives an estimate of the time when the GNSS scan information is taken, in seconds GPS time (GPST). If capture time is not specified, the local server time is used.',
                      }),
                  ).exactOptional(),
                  CaptureTimeAccuracy: CaptureTimeAccuracySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Optional value that gives the capture time estimate accuracy, in seconds. If capture time accuracy is not specified, default value of 300 is used.',
                      }),
                  ).exactOptional(),
                  AssistPosition: AssistPositionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Optional assistance position information, specified using latitude and longitude values in degrees. The coordinates are inside the WGS84 reference frame.',
                      }),
                  ).exactOptional(),
                  AssistAltitude: CoordinateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Optional assistance altitude, which is the altitude of the device at capture time, specified in meters above the WGS84 reference ellipsoid.',
                      }),
                  ).exactOptional(),
                  Use2DSolver: Use2DSolverSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Optional parameter that forces 2D solve, which modifies the positioning algorithm to a 2D solution problem. When this parameter is specified, the assistance altitude should have an accuracy of at least 10 meters.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Global navigation satellite system (GNSS) object used for positioning.',
                  required: [],
                }),
              Timestamp: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Optional information that specifies the time when the position information will be resolved. It uses the Unix timestamp format. If not specified, the time at which the request was received will be used.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPositionEstimateResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getEventConfigurationsIdentifierIdentifierTypeRoute = createRoute({
  method: 'get',
  path: '/event-configurations/{Identifier}#identifierType',
  description: 'Get the event configuration for a particular resource identifier.',
  operationId: 'GetResourceEventConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Identifier: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Identifier',
            in: 'path',
            required: true,
            description: 'Resource identifier to opt in for event messaging.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
    query: z.object({
      identifierType: z
        .enum(['PartnerAccountId', 'DevEui', 'GatewayEui', 'WirelessDeviceId', 'WirelessGatewayId'])
        .openapi({
          param: {
            name: 'identifierType',
            in: 'query',
            required: true,
            description:
              'Identifier type of the particular resource identifier for event configuration.',
            schema: {
              type: 'string',
              enum: [
                'PartnerAccountId',
                'DevEui',
                'GatewayEui',
                'WirelessDeviceId',
                'WirelessGatewayId',
              ],
            },
          },
        }),
      partnerType: z
        .literal('Sidewalk')
        .exactOptional()
        .openapi({
          param: {
            name: 'partnerType',
            in: 'query',
            required: false,
            description:
              'Partner type of the resource if the identifier type is <code>PartnerAccountId</code>.',
            schema: { type: 'string', enum: ['Sidewalk'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourceEventConfigurationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchEventConfigurationsIdentifierIdentifierTypeRoute = createRoute({
  method: 'patch',
  path: '/event-configurations/{Identifier}#identifierType',
  description: 'Update the event configuration for a particular resource identifier.',
  operationId: 'UpdateResourceEventConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Identifier: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Identifier',
            in: 'path',
            required: true,
            description: 'Resource identifier to opt in for event messaging.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
    query: z.object({
      identifierType: z
        .enum(['PartnerAccountId', 'DevEui', 'GatewayEui', 'WirelessDeviceId', 'WirelessGatewayId'])
        .openapi({
          param: {
            name: 'identifierType',
            in: 'query',
            required: true,
            description:
              'Identifier type of the particular resource identifier for event configuration.',
            schema: {
              type: 'string',
              enum: [
                'PartnerAccountId',
                'DevEui',
                'GatewayEui',
                'WirelessDeviceId',
                'WirelessGatewayId',
              ],
            },
          },
        }),
      partnerType: z
        .literal('Sidewalk')
        .exactOptional()
        .openapi({
          param: {
            name: 'partnerType',
            in: 'query',
            required: false,
            description:
              'Partner type of the resource if the identifier type is <code>PartnerAccountId</code> ',
            schema: { type: 'string', enum: ['Sidewalk'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DeviceRegistrationState: z
                .object({
                  Sidewalk: SidewalkEventNotificationConfigurationsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Device registration state event configuration object for enabling or disabling Sidewalk related event topics.',
                      }),
                  ).exactOptional(),
                  WirelessDeviceIdEventTopic: EventNotificationTopicStatusSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Denotes whether the wireless device ID device registration state event topic is enabled or disabled.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Device registration state event configuration object for enabling and disabling relevant topics.',
                  required: [],
                }),
              Proximity: z
                .object({
                  Sidewalk: SidewalkEventNotificationConfigurationsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Proximity event configuration object for enabling or disabling Sidewalk related event topics.',
                      }),
                  ).exactOptional(),
                  WirelessDeviceIdEventTopic: EventNotificationTopicStatusSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Denotes whether the wireless device ID proximity event topic is enabled or disabled.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Proximity event configuration object for enabling and disabling relevant topics.',
                  required: [],
                }),
              Join: z
                .object({
                  LoRaWAN: LoRaWANJoinEventNotificationConfigurationsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Join event configuration object for enabling or disabling LoRaWAN related event topics.',
                      }),
                  ).exactOptional(),
                  WirelessDeviceIdEventTopic: EventNotificationTopicStatusSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Denotes whether the wireless device ID join event topic is enabled or disabled.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Join event configuration object for enabling or disabling topic.',
                  required: [],
                }),
              ConnectionStatus: z
                .object({
                  LoRaWAN: LoRaWANConnectionStatusEventNotificationConfigurationsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Connection status event configuration object for enabling or disabling LoRaWAN related event topics.',
                      }),
                  ).exactOptional(),
                  WirelessGatewayIdEventTopic: EventNotificationTopicStatusSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Denotes whether the wireless gateway ID connection status event topic is enabled or disabled.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Connection status event configuration object for enabling or disabling topic.',
                  required: [],
                }),
              MessageDeliveryStatus: z
                .object({
                  Sidewalk: SidewalkEventNotificationConfigurationsSchema.exactOptional(),
                  WirelessDeviceIdEventTopic: EventNotificationTopicStatusSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Denotes whether the wireless device ID message delivery status event topic is enabled or disabled.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Message delivery status event configuration object for enabling and disabling relevant topics.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateResourceEventConfigurationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getLogLevelsResourceIdentifierResourceTypeRoute = createRoute({
  method: 'get',
  path: '/log-levels/{ResourceIdentifier}#resourceType',
  description:
    'Fetches the log-level override, if any, for a given resource-ID and resource-type. It can be used for a wireless device or a wireless gateway.',
  operationId: 'GetResourceLogLevel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      ResourceIdentifier: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'ResourceIdentifier',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                'The identifier of the resource. For a Wireless Device, it is the wireless device ID. For a wireless gateway, it is the wireless gateway ID.',
              maxLength: 256,
            },
          },
          description:
            'The identifier of the resource. For a Wireless Device, it is the wireless device ID. For a wireless gateway, it is the wireless gateway ID.',
        }),
    }),
    query: z.object({
      resourceType: z
        .string()
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: true,
            description:
              'The type of the resource, which can be <code>WirelessDevice</code> or <code>WirelessGateway</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourceLogLevelResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const putLogLevelsResourceIdentifierResourceTypeRoute = createRoute({
  method: 'put',
  path: '/log-levels/{ResourceIdentifier}#resourceType',
  description:
    'Sets the log-level override for a resource-ID and resource-type. This option can be specified for a wireless gateway or a wireless device. A limit of 200 log level override can be set per account.',
  operationId: 'PutResourceLogLevel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      ResourceIdentifier: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'ResourceIdentifier',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                'The identifier of the resource. For a Wireless Device, it is the wireless device ID. For a wireless gateway, it is the wireless gateway ID.',
              maxLength: 256,
            },
          },
          description:
            'The identifier of the resource. For a Wireless Device, it is the wireless device ID. For a wireless gateway, it is the wireless gateway ID.',
        }),
    }),
    query: z.object({
      resourceType: z
        .string()
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: true,
            description:
              'The type of the resource, which can be <code>WirelessDevice</code> or <code>WirelessGateway</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              LogLevel: z
                .enum(['INFO', 'ERROR', 'DISABLED'])
                .openapi({
                  description:
                    'The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.',
                }),
            })
            .openapi({ required: ['LogLevel'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutResourceLogLevelResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteLogLevelsResourceIdentifierResourceTypeRoute = createRoute({
  method: 'delete',
  path: '/log-levels/{ResourceIdentifier}#resourceType',
  description:
    'Removes the log-level override, if any, for a specific resource-ID and resource-type. It can be used for a wireless device or a wireless gateway.',
  operationId: 'ResetResourceLogLevel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      ResourceIdentifier: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'ResourceIdentifier',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                'The identifier of the resource. For a Wireless Device, it is the wireless device ID. For a wireless gateway, it is the wireless gateway ID.',
              maxLength: 256,
            },
          },
          description:
            'The identifier of the resource. For a Wireless Device, it is the wireless device ID. For a wireless gateway, it is the wireless gateway ID.',
        }),
    }),
    query: z.object({
      resourceType: z
        .string()
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: true,
            description:
              'The type of the resource, which can be <code>WirelessDevice</code> or <code>WirelessGateway</code>.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: ResetResourceLogLevelResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getResourcePositionsResourceIdentifierResourceTypeRoute = createRoute({
  method: 'get',
  path: '/resource-positions/{ResourceIdentifier}#resourceType',
  description:
    'Get the position information for a given wireless device or a wireless gateway resource. The position information uses the <a href="https://gisgeography.com/wgs84-world-geodetic-system/"> World Geodetic System (WGS84)</a>.',
  operationId: 'GetResourcePosition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      ResourceIdentifier: z
        .string()
        .regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'ResourceIdentifier',
            in: 'path',
            required: true,
            description:
              'The identifier of the resource for which position information is retrieved. It can be the wireless device ID or the wireless gateway ID, depending on the resource type.',
            schema: {
              type: 'string',
              pattern:
                '[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
    query: z.object({
      resourceType: z
        .enum(['WirelessDevice', 'WirelessGateway'])
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: true,
            description:
              'The type of resource for which position information is retrieved, which can be a wireless device or a wireless gateway.',
            schema: { type: 'string', enum: ['WirelessDevice', 'WirelessGateway'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourcePositionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchResourcePositionsResourceIdentifierResourceTypeRoute = createRoute({
  method: 'patch',
  path: '/resource-positions/{ResourceIdentifier}#resourceType',
  description:
    'Update the position information of a given wireless device or a wireless gateway resource. The position coordinates are based on the <a href="https://gisgeography.com/wgs84-world-geodetic-system/"> World Geodetic System (WGS84)</a>.',
  operationId: 'UpdateResourcePosition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      ResourceIdentifier: z
        .string()
        .regex(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/)
        .openapi({
          param: {
            name: 'ResourceIdentifier',
            in: 'path',
            required: true,
            description:
              'The identifier of the resource for which position information is updated. It can be the wireless device ID or the wireless gateway ID, depending on the resource type.',
            schema: {
              type: 'string',
              pattern:
                '[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}',
            },
          },
        }),
    }),
    query: z.object({
      resourceType: z
        .enum(['WirelessDevice', 'WirelessGateway'])
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: true,
            description:
              'The type of resource for which position information is updated, which can be a wireless device or a wireless gateway.',
            schema: { type: 'string', enum: ['WirelessDevice', 'WirelessGateway'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              GeoJsonPayload: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The position information of the resource, displayed as a JSON payload. The payload uses the GeoJSON format, which a format that\'s used to encode geographic data structures. For more information, see <a href="https://geojson.org/">GeoJSON</a>.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateResourcePositionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getServiceEndpointRoute = createRoute({
  method: 'get',
  path: '/service-endpoint',
  description:
    'Gets the account-specific endpoint for Configuration and Update Server (CUPS) protocol or LoRaWAN Network Server (LNS) connections.',
  operationId: 'GetServiceEndpoint',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      serviceType: z
        .enum(['CUPS', 'LNS'])
        .exactOptional()
        .openapi({
          param: {
            name: 'serviceType',
            in: 'query',
            required: false,
            description:
              'The service type for which to get endpoint information about. Can be <code>CUPS</code> for the Configuration and Update Server endpoint, or <code>LNS</code> for the LoRaWAN Network Server endpoint or <code>CLAIM</code> for the global endpoint.',
            schema: { type: 'string', enum: ['CUPS', 'LNS'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetServiceEndpointResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWirelessDevicesIdentifierIdentifierTypeRoute = createRoute({
  method: 'get',
  path: '/wireless-devices/{Identifier}#identifierType',
  description: 'Gets information about a wireless device.',
  operationId: 'GetWirelessDevice',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Identifier: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Identifier',
            in: 'path',
            required: true,
            description: 'The identifier of the wireless device to get.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
    query: z.object({
      identifierType: z
        .enum(['WirelessDeviceId', 'DevEui', 'ThingName', 'SidewalkManufacturingSn'])
        .openapi({
          param: {
            name: 'identifierType',
            in: 'query',
            required: true,
            description: 'The type of identifier used in <code>identifier</code>.',
            schema: {
              type: 'string',
              enum: ['WirelessDeviceId', 'DevEui', 'ThingName', 'SidewalkManufacturingSn'],
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetWirelessDeviceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWirelessDevicesIdStatisticsRoute = createRoute({
  method: 'get',
  path: '/wireless-devices/{Id}/statistics',
  description: 'Gets operating information about a wireless device.',
  operationId: 'GetWirelessDeviceStatistics',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the wireless device for which to get the data.',
            schema: {
              type: 'string',
              description: 'The ID of the wireless device.',
              maxLength: 256,
            },
          },
          description: 'The ID of the wireless device.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetWirelessDeviceStatisticsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWirelessGatewaysIdentifierIdentifierTypeRoute = createRoute({
  method: 'get',
  path: '/wireless-gateways/{Identifier}#identifierType',
  description: 'Gets information about a wireless gateway.',
  operationId: 'GetWirelessGateway',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Identifier: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Identifier',
            in: 'path',
            required: true,
            description: 'The identifier of the wireless gateway to get.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
    query: z.object({
      identifierType: z
        .enum(['GatewayEui', 'WirelessGatewayId', 'ThingName'])
        .openapi({
          param: {
            name: 'identifierType',
            in: 'query',
            required: true,
            description: 'The type of identifier used in <code>identifier</code>.',
            schema: { type: 'string', enum: ['GatewayEui', 'WirelessGatewayId', 'ThingName'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetWirelessGatewayResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWirelessGatewaysIdFirmwareInformationRoute = createRoute({
  method: 'get',
  path: '/wireless-gateways/{Id}/firmware-information',
  description: 'Gets the firmware version and other information about a wireless gateway.',
  operationId: 'GetWirelessGatewayFirmwareInformation',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the resource to get.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: GetWirelessGatewayFirmwareInformationResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWirelessGatewaysIdStatisticsRoute = createRoute({
  method: 'get',
  path: '/wireless-gateways/{Id}/statistics',
  description: 'Gets operating information about a wireless gateway.',
  operationId: 'GetWirelessGatewayStatistics',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the wireless gateway for which to get the data.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetWirelessGatewayStatisticsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWirelessDeviceImportTaskId2Route = createRoute({
  method: 'get',
  path: '/wireless_device_import_task#id',
  description: 'List the Sidewalk devices in an import task and their onboarding status.',
  operationId: 'ListDevicesForWirelessDeviceImportTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            required: true,
            description: 'The identifier of the import task for which wireless devices are listed.',
            schema: { type: 'string', maxLength: 256 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description: 'The maximum number of results to return in this operation.',
              minimum: 0,
              maximum: 250,
            },
          },
          description: 'The maximum number of results to return in this operation.',
        }),
      nextToken: z
        .string()
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <code>null</code> to receive the first set of results.',
            schema: { type: 'string', maxLength: 4096 },
          },
        }),
      status: z
        .enum(['INITIALIZED', 'PENDING', 'ONBOARDED', 'FAILED'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            required: false,
            description: 'The status of the devices in the import task.',
            schema: { type: 'string', enum: ['INITIALIZED', 'PENDING', 'ONBOARDED', 'FAILED'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ListDevicesForWirelessDeviceImportTaskResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getEventConfigurationsResourceTypeRoute = createRoute({
  method: 'get',
  path: '/event-configurations#resourceType',
  description: 'List event configurations where at least one event topic has been enabled.',
  operationId: 'ListEventConfigurations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      resourceType: z
        .enum(['SidewalkAccount', 'WirelessDevice', 'WirelessGateway'])
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: true,
            description: 'Resource type to filter event configurations.',
            schema: {
              type: 'string',
              enum: ['SidewalkAccount', 'WirelessDevice', 'WirelessGateway'],
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description: 'The maximum number of results to return in this operation.',
              minimum: 0,
              maximum: 250,
            },
          },
          description: 'The maximum number of results to return in this operation.',
        }),
      nextToken: z
        .string()
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.',
            schema: { type: 'string', maxLength: 4096 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEventConfigurationsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getFuotaTasksIdMulticastGroupsRoute = createRoute({
  method: 'get',
  path: '/fuota-tasks/{Id}/multicast-groups',
  description: 'List all multicast groups associated with a fuota task.',
  operationId: 'ListMulticastGroupsByFuotaTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: { type: 'string', description: 'The ID of a FUOTA task.', maxLength: 256 },
          },
          description: 'The ID of a FUOTA task.',
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.',
            schema: { type: 'string', maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description: 'The maximum number of results to return in this operation.',
              minimum: 0,
              maximum: 250,
            },
          },
          description: 'The maximum number of results to return in this operation.',
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMulticastGroupsByFuotaTaskResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getPositionConfigurationsRoute = createRoute({
  method: 'get',
  path: '/position-configurations',
  description:
    '<p>List position configurations for a given resource, such as positioning solvers.</p> <important> <p>This action is no longer supported. Calls to retrieve position information should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourcePosition.html">GetResourcePosition</a> API operation instead.</p> </important>',
  operationId: 'ListPositionConfigurations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      resourceType: z
        .enum(['WirelessDevice', 'WirelessGateway'])
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: false,
            description: 'Resource type for which position configurations are listed.',
            schema: { type: 'string', enum: ['WirelessDevice', 'WirelessGateway'] },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description: 'The maximum number of results to return in this operation.',
              minimum: 0,
              maximum: 250,
            },
          },
          description: 'The maximum number of results to return in this operation.',
        }),
      nextToken: z
        .string()
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.',
            schema: { type: 'string', maxLength: 4096 },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPositionConfigurationsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
  deprecated: true,
})

export const getWirelessDevicesIdDataRoute = createRoute({
  method: 'get',
  path: '/wireless-devices/{Id}/data',
  description: 'List queued messages in the downlink queue.',
  operationId: 'ListQueuedMessages',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The ID of a given wireless device which the downlink message packets are being sent.',
            schema: {
              type: 'string',
              description: 'The ID of the wireless device.',
              maxLength: 256,
            },
          },
          description: 'The ID of the wireless device.',
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.',
            schema: { type: 'string', maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in this operation.',
            schema: {
              type: 'integer',
              description: 'The maximum number of results to return in this operation.',
              minimum: 0,
              maximum: 250,
            },
          },
          description: 'The maximum number of results to return in this operation.',
        }),
      WirelessDeviceType: z
        .enum(['Sidewalk', 'LoRaWAN'])
        .exactOptional()
        .openapi({
          param: {
            name: 'WirelessDeviceType',
            in: 'query',
            required: false,
            description: 'The wireless device type, whic can be either Sidewalk or LoRaWAN.',
            schema: { type: 'string', enum: ['Sidewalk', 'LoRaWAN'] },
          },
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListQueuedMessagesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postWirelessDevicesIdDataRoute = createRoute({
  method: 'post',
  path: '/wireless-devices/{Id}/data',
  description: 'Sends a decrypted application data frame to a device.',
  operationId: 'SendDataToWirelessDevice',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the wireless device to receive the data.',
            schema: {
              type: 'string',
              description: 'The ID of the wireless device.',
              maxLength: 256,
            },
          },
          description: 'The ID of the wireless device.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TransmitMode: z
                .int()
                .min(0)
                .max(1)
                .openapi({
                  description:
                    'The transmit mode to use to send data to the wireless device. Can be: <code>0</code> for UM (unacknowledge mode) or <code>1</code> for AM (acknowledge mode).',
                }),
              PayloadData: z
                .string()
                .regex(/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/)
                .max(2048)
                .openapi({
                  description: 'The binary to be sent to the end device, encoded in base64.',
                }),
              WirelessMetadata: z
                .object({
                  LoRaWAN: LoRaWANSendDataToDeviceSchema.and(
                    z.any().openapi({ description: 'LoRaWAN device info.' }),
                  ).exactOptional(),
                  Sidewalk: SidewalkSendDataToDeviceSchema.and(
                    z.any().openapi({ description: 'The Sidewalk account credentials.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'WirelessMetadata object.', required: [] }),
            })
            .openapi({ required: ['TransmitMode', 'PayloadData'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: SendDataToWirelessDeviceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags#resourceArn',
  description: 'Lists the tags (metadata) you have assigned to the resource.',
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      resourceArn: z
        .string()
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description: 'The ARN of the resource for which you want to list tags.',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags#resourceArn',
  description: 'Adds a tag to a resource.',
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      resourceArn: z
        .string()
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description: 'The ARN of the resource to add tags to.',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .openapi({
                  description:
                    'The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.',
                }),
            })
            .openapi({ required: ['Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const getWirelessDeviceImportTasksRoute = createRoute({
  method: 'get',
  path: '/wireless_device_import_tasks',
  description: 'List wireless devices that have been added to an import task.',
  operationId: 'ListWirelessDeviceImportTasks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description: 'The maximum number of results to return in this operation.',
              minimum: 0,
              maximum: 250,
            },
          },
          description: 'The maximum number of results to return in this operation.',
        }),
      nextToken: z
        .string()
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <code>null</code> to receive the first set of results.',
            schema: { type: 'string', maxLength: 4096 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListWirelessDeviceImportTasksResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postMulticastGroupsIdDataRoute = createRoute({
  method: 'post',
  path: '/multicast-groups/{Id}/data',
  description: 'Sends the specified data to a multicast group.',
  operationId: 'SendDataToMulticastGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description: 'The ID of the multicast group.',
              maxLength: 256,
            },
          },
          description: 'The ID of the multicast group.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              PayloadData: z
                .string()
                .regex(/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/)
                .max(2048)
                .openapi({
                  description: 'The binary to be sent to the end device, encoded in base64.',
                }),
              WirelessMetadata: z
                .object({ LoRaWAN: LoRaWANMulticastMetadataSchema.exactOptional() })
                .openapi({
                  description: 'Wireless metadata that is to be sent to multicast group.',
                  required: [],
                }),
            })
            .openapi({ required: ['PayloadData', 'WirelessMetadata'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: SendDataToMulticastGroupResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postMulticastGroupsIdBulkRoute = createRoute({
  method: 'post',
  path: '/multicast-groups/{Id}/bulk',
  description:
    'Starts a bulk disassociatin of all qualifying wireless devices from a multicast group.',
  operationId: 'StartBulkDisassociateWirelessDeviceFromMulticastGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description: 'The ID of the multicast group.',
              maxLength: 256,
            },
          },
          description: 'The ID of the multicast group.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              QueryString: z
                .string()
                .max(4096)
                .exactOptional()
                .openapi({
                  description:
                    'Query string used to search for wireless devices as part of the bulk associate and disassociate process.',
                }),
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: {
        'application/json': {
          schema: StartBulkDisassociateWirelessDeviceFromMulticastGroupResponseSchema,
        },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchMulticastGroupsIdBulkRoute = createRoute({
  method: 'patch',
  path: '/multicast-groups/{Id}/bulk',
  description:
    'Starts a bulk association of all qualifying wireless devices with a multicast group.',
  operationId: 'StartBulkAssociateWirelessDeviceWithMulticastGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description: 'The ID of the multicast group.',
              maxLength: 256,
            },
          },
          description: 'The ID of the multicast group.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              QueryString: z
                .string()
                .max(4096)
                .exactOptional()
                .openapi({
                  description:
                    'Query string used to search for wireless devices as part of the bulk associate and disassociate process.',
                }),
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: {
        'application/json': {
          schema: StartBulkAssociateWirelessDeviceWithMulticastGroupResponseSchema,
        },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postWirelessSingleDeviceImportTaskRoute = createRoute({
  method: 'post',
  path: '/wireless_single_device_import_task',
  description: 'Start import task for a single wireless device.',
  operationId: 'StartSingleWirelessDeviceImportTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DestinationName: z
                .string()
                .regex(/[a-zA-Z0-9-_]+/)
                .max(128)
                .openapi({
                  description:
                    'The name of the Sidewalk destination that describes the IoT rule to route messages from the device in the import task that will be onboarded to AWS IoT Wireless.',
                }),
              ClientRequestToken: z
                .string()
                .regex(/^[a-zA-Z0-9-_]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.',
                }),
              DeviceName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The name of the wireless device for which an import task is being started.',
                }),
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.',
                }),
              Sidewalk: z
                .object({
                  SidewalkManufacturingSn: SidewalkManufacturingSnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Sidewalk manufacturing serial number (SMSN) of the device added to the import task.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Information about an import task created for an individual Sidewalk device.',
                  required: [],
                }),
            })
            .openapi({ required: ['DestinationName', 'Sidewalk'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: {
        'application/json': { schema: StartSingleWirelessDeviceImportTaskResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postWirelessDeviceImportTaskRoute = createRoute({
  method: 'post',
  path: '/wireless_device_import_task',
  description: 'Start import task for provisioning Sidewalk devices in bulk using an S3 CSV file.',
  operationId: 'StartWirelessDeviceImportTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DestinationName: z
                .string()
                .regex(/[a-zA-Z0-9-_]+/)
                .max(128)
                .openapi({
                  description:
                    'The name of the Sidewalk destination that describes the IoT rule to route messages from the devices in the import task that are onboarded to AWS IoT Wireless.',
                }),
              ClientRequestToken: z
                .string()
                .regex(/^[a-zA-Z0-9-_]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'Each resource must have a unique client request token. If you try to create a new resource with the same token as a resource that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.',
                }),
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.',
                }),
              Sidewalk: z
                .object({
                  DeviceCreationFile: DeviceCreationFileSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The CSV file contained in an S3 bucket that's used for adding devices to an import task.",
                      }),
                  ).exactOptional(),
                  Role: RoleSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The IAM role that allows AWS IoT Wireless to access the CSV file in the S3 bucket.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Information about an import task created for bulk provisioning.',
                  required: [],
                }),
            })
            .openapi({ required: ['DestinationName', 'Sidewalk'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: StartWirelessDeviceImportTaskResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postWirelessDevicesIdTestRoute = createRoute({
  method: 'post',
  path: '/wireless-devices/{Id}/test',
  description:
    'Simulates a provisioned device by sending an uplink data payload of <code>Hello</code>.',
  operationId: 'TestWirelessDevice',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      Id: z
        .string()
        .max(256)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the wireless device to test.',
            schema: {
              type: 'string',
              description: 'The ID of the wireless device.',
              maxLength: 256,
            },
          },
          description: 'The ID of the wireless device.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TestWirelessDeviceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags#resourceArn&tagKeys',
  description: 'Removes one or more tags from a resource.',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      resourceArn: z
        .string()
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description: 'The ARN of the resource to remove tags from.',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
          },
        }),
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(0).max(200),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'A list of the keys of the tags to remove from the resource.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 0,
              maxItems: 200,
            },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})
