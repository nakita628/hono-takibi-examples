type Tag = { Key: {}; Value: {} }
type AssociateAwsAccountWithPartnerAccountResponse = {
  Sidewalk?: { AmazonId?: {} | undefined; AppServerPrivateKey?: {} | undefined } | undefined
  Arn?: {} | undefined
}
type ValidationException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type InternalServerException = { [x: string]: unknown }
type ThrottlingException = { [x: string]: unknown }
type ConflictException = { [x: string]: unknown }
type AccessDeniedException = { [x: string]: unknown }
type ListPartnerAccountsResponse = { NextToken?: {} | undefined; Sidewalk?: {} | undefined }
type AssociateMulticastGroupWithFuotaTaskResponse = { [x: string]: unknown }
type AssociateWirelessDeviceWithFuotaTaskResponse = { [x: string]: unknown }
type AssociateWirelessDeviceWithMulticastGroupResponse = { [x: string]: unknown }
type AssociateWirelessDeviceWithThingResponse = { [x: string]: unknown }
type DisassociateWirelessDeviceFromThingResponse = { [x: string]: unknown }
type AssociateWirelessGatewayWithCertificateResponse = { IotCertificateId?: {} | undefined }
type DisassociateWirelessGatewayFromCertificateResponse = { [x: string]: unknown }
type GetWirelessGatewayCertificateResponse = {
  IotCertificateId?: {} | undefined
  LoRaWANNetworkServerCertificateId?: {} | undefined
}
type AssociateWirelessGatewayWithThingResponse = { [x: string]: unknown }
type DisassociateWirelessGatewayFromThingResponse = { [x: string]: unknown }
type CancelMulticastGroupSessionResponse = { [x: string]: unknown }
type DlDr = number
type DlFreq = number
type SessionStartTimeTimestamp = string
type SessionTimeout = number
type LoRaWANMulticastSession = {
  DlDr?: DlDr | undefined
  DlFreq?: DlFreq | undefined
  SessionStartTime?: SessionStartTimeTimestamp | undefined
  SessionTimeout?: SessionTimeout | undefined
  PingSlotPeriod?: {} | undefined
}
type GetMulticastGroupSessionResponse = { LoRaWAN?: LoRaWANMulticastSession | undefined }
type StartMulticastGroupSessionResponse = { [x: string]: unknown }
type CreateDestinationResponse = { Arn?: {} | undefined; Name?: {} | undefined }
type ListDestinationsResponse = { NextToken?: {} | undefined; DestinationList?: {} | undefined }
type CreateDeviceProfileResponse = { Arn?: {} | undefined; Id?: {} | undefined }
type ListDeviceProfilesResponse = { NextToken?: {} | undefined; DeviceProfileList?: {} | undefined }
type SupportedRfRegion =
  | 'EU868'
  | 'US915'
  | 'AU915'
  | 'AS923-1'
  | 'AS923-2'
  | 'AS923-3'
  | 'AS923-4'
  | 'EU433'
  | 'CN470'
  | 'CN779'
  | 'RU864'
  | 'KR920'
  | 'IN865'
type FuotaTaskArn = string
type FuotaTaskId = string
type CreateFuotaTaskResponse = { Arn?: FuotaTaskArn | undefined; Id?: FuotaTaskId | undefined }
type FuotaTaskName = string
type FuotaTask = {
  Id?: FuotaTaskId | undefined
  Arn?: FuotaTaskArn | undefined
  Name?: FuotaTaskName | undefined
}
type FuotaTaskList = FuotaTask[]
type ListFuotaTasksResponse = {
  NextToken?: {} | undefined
  FuotaTaskList?: FuotaTaskList | undefined
}
type DlClass = 'ClassB' | 'ClassC'
type MulticastGroupArn = string
type MulticastGroupId = string
type CreateMulticastGroupResponse = {
  Arn?: MulticastGroupArn | undefined
  Id?: MulticastGroupId | undefined
}
type MulticastGroupName = string
type MulticastGroup = {
  Id?: MulticastGroupId | undefined
  Arn?: MulticastGroupArn | undefined
  Name?: MulticastGroupName | undefined
}
type MulticastGroupList = MulticastGroup[]
type ListMulticastGroupsResponse = {
  NextToken?: {} | undefined
  MulticastGroupList?: MulticastGroupList | undefined
}
type WirelessDeviceFrameInfo = 'ENABLED' | 'DISABLED'
type LogLevel = 'INFO' | 'ERROR' | 'DISABLED'
type WirelessDeviceId = string
type WirelessGatewayId = string
type NetworkAnalyzerConfigurationName = string
type CreateNetworkAnalyzerConfigurationResponse = {
  Arn?: {} | undefined
  Name?: NetworkAnalyzerConfigurationName | undefined
}
type ListNetworkAnalyzerConfigurationsResponse = {
  NextToken?: {} | undefined
  NetworkAnalyzerConfigurationList?: {} | undefined
}
type CreateServiceProfileResponse = { Arn?: {} | undefined; Id?: {} | undefined }
type ListServiceProfilesResponse = {
  NextToken?: {} | undefined
  ServiceProfileList?: {} | undefined
}
type FPort = number
type FPorts = {
  Fuota?: FPort | undefined
  Multicast?: FPort | undefined
  ClockSync?: FPort | undefined
  Positioning?:
    | { ClockSync?: FPort | undefined; Stream?: FPort | undefined; Gnss?: FPort | undefined }
    | undefined
  Applications?: {} | undefined
}
type CreateWirelessDeviceResponse = { Arn?: {} | undefined; Id?: {} | undefined }
type ListWirelessDevicesResponse = {
  NextToken?: {} | undefined
  WirelessDeviceList?: {} | undefined
}
type JoinEui = string
type JoinEuiRange = JoinEui[]
type JoinEuiFilters = JoinEuiRange[]
type NetId = string
type NetIdFilters = NetId[]
type SubBand = number
type SubBands = SubBand[]
type CreateWirelessGatewayResponse = { Arn?: {} | undefined; Id?: {} | undefined }
type ListWirelessGatewaysResponse = {
  NextToken?: {} | undefined
  WirelessGatewayList?: {} | undefined
}
type CreateWirelessGatewayTaskResponse = {
  WirelessGatewayTaskDefinitionId?: {} | undefined
  Status?: {} | undefined
}
type DeleteWirelessGatewayTaskResponse = { [x: string]: unknown }
type GetWirelessGatewayTaskResponse = {
  WirelessGatewayId?: {} | undefined
  WirelessGatewayTaskDefinitionId?: {} | undefined
  LastUplinkReceivedAt?: {} | undefined
  TaskCreatedAt?: {} | undefined
  Status?: {} | undefined
}
type CreateWirelessGatewayTaskDefinitionResponse = { Id?: {} | undefined; Arn?: {} | undefined }
type ListWirelessGatewayTaskDefinitionsResponse = {
  NextToken?: {} | undefined
  TaskDefinitions?: {} | undefined
}
type DeleteDestinationResponse = { [x: string]: unknown }
type GetDestinationResponse = {
  Arn?: {} | undefined
  Name?: {} | undefined
  Expression?: {} | undefined
  ExpressionType?: {} | undefined
  Description?: {} | undefined
  RoleArn?: {} | undefined
}
type UpdateDestinationResponse = { [x: string]: unknown }
type DeleteDeviceProfileResponse = { [x: string]: unknown }
type GetDeviceProfileResponse = {
  Arn?: {} | undefined
  Name?: {} | undefined
  Id?: {} | undefined
  LoRaWAN?:
    | {
        SupportsClassB?: {} | undefined
        ClassBTimeout?: {} | undefined
        PingSlotPeriod?: {} | undefined
        PingSlotDr?: {} | undefined
        PingSlotFreq?: {} | undefined
        SupportsClassC?: {} | undefined
        ClassCTimeout?: {} | undefined
        MacVersion?: {} | undefined
        RegParamsRevision?: {} | undefined
        RxDelay1?: {} | undefined
        RxDrOffset1?: {} | undefined
        RxDataRate2?: {} | undefined
        RxFreq2?: {} | undefined
        FactoryPresetFreqsList?: {} | undefined
        MaxEirp?: {} | undefined
        MaxDutyCycle?: {} | undefined
        RfRegion?: {} | undefined
        SupportsJoin?: {} | undefined
        Supports32BitFCnt?: {} | undefined
      }
    | undefined
  Sidewalk?:
    | {
        ApplicationServerPublicKey?: {} | undefined
        QualificationStatus?: {} | undefined
        DakCertificateMetadata?: {} | undefined
      }
    | undefined
}
type DeleteFuotaTaskResponse = { [x: string]: unknown }
type FuotaTaskStatus =
  | 'Pending'
  | 'FuotaSession_Waiting'
  | 'In_FuotaSession'
  | 'FuotaDone'
  | 'Delete_Waiting'
type Description = string
type RfRegion = string
type StartTime = string
type LoRaWANFuotaTaskGetInfo = {
  RfRegion?: RfRegion | undefined
  StartTime?: StartTime | undefined
}
type FirmwareUpdateImage = string
type FirmwareUpdateRole = string
type CreatedAt = string
type RedundancyPercent = number
type FragmentSizeBytes = number
type FragmentIntervalMS = number
type GetFuotaTaskResponse = {
  Arn?: FuotaTaskArn | undefined
  Id?: FuotaTaskId | undefined
  Status?: FuotaTaskStatus | undefined
  Name?: FuotaTaskName | undefined
  Description?: Description | undefined
  LoRaWAN?: LoRaWANFuotaTaskGetInfo | undefined
  FirmwareUpdateImage?: FirmwareUpdateImage | undefined
  FirmwareUpdateRole?: FirmwareUpdateRole | undefined
  CreatedAt?: CreatedAt | undefined
  RedundancyPercent?: RedundancyPercent | undefined
  FragmentSizeBytes?: FragmentSizeBytes | undefined
  FragmentIntervalMS?: FragmentIntervalMS | undefined
}
type StartFuotaTaskResponse = { [x: string]: unknown }
type UpdateFuotaTaskResponse = { [x: string]: unknown }
type DeleteMulticastGroupResponse = { [x: string]: unknown }
type MulticastGroupStatus = string
type NumberOfDevicesRequested = number
type NumberOfDevicesInGroup = number
type LoRaWANMulticastGet = {
  RfRegion?: SupportedRfRegion | undefined
  DlClass?: DlClass | undefined
  NumberOfDevicesRequested?: NumberOfDevicesRequested | undefined
  NumberOfDevicesInGroup?: NumberOfDevicesInGroup | undefined
}
type GetMulticastGroupResponse = {
  Arn?: MulticastGroupArn | undefined
  Id?: MulticastGroupId | undefined
  Name?: MulticastGroupName | undefined
  Description?: Description | undefined
  Status?: MulticastGroupStatus | undefined
  LoRaWAN?: LoRaWANMulticastGet | undefined
  CreatedAt?: CreatedAt | undefined
}
type UpdateMulticastGroupResponse = { [x: string]: unknown }
type DeleteNetworkAnalyzerConfigurationResponse = { [x: string]: unknown }
type TraceContent = {
  WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | undefined
  LogLevel?: LogLevel | undefined
}
type GetNetworkAnalyzerConfigurationResponse = {
  TraceContent?: TraceContent | undefined
  WirelessDevices?: {} | undefined
  WirelessGateways?: {} | undefined
  Description?: Description | undefined
  Arn?: {} | undefined
  Name?: NetworkAnalyzerConfigurationName | undefined
}
type UpdateNetworkAnalyzerConfigurationResponse = { [x: string]: unknown }
type DeleteQueuedMessagesResponse = { [x: string]: unknown }
type DeleteServiceProfileResponse = { [x: string]: unknown }
type GetServiceProfileResponse = {
  Arn?: {} | undefined
  Name?: {} | undefined
  Id?: {} | undefined
  LoRaWAN?:
    | {
        UlRate?: {} | undefined
        UlBucketSize?: {} | undefined
        UlRatePolicy?: {} | undefined
        DlRate?: {} | undefined
        DlBucketSize?: {} | undefined
        DlRatePolicy?: {} | undefined
        AddGwMetadata?: {} | undefined
        DevStatusReqFreq?: {} | undefined
        ReportDevStatusBattery?: {} | undefined
        ReportDevStatusMargin?: {} | undefined
        DrMin?: {} | undefined
        DrMax?: {} | undefined
        ChannelMask?: {} | undefined
        PrAllowed?: {} | undefined
        HrAllowed?: {} | undefined
        RaAllowed?: {} | undefined
        NwkGeoLoc?: {} | undefined
        TargetPer?: {} | undefined
        MinGwDiversity?: {} | undefined
      }
    | undefined
}
type DeleteWirelessDeviceResponse = { [x: string]: unknown }
type UpdateWirelessDeviceResponse = { [x: string]: unknown }
type DeleteWirelessDeviceImportTaskResponse = { [x: string]: unknown }
type GetWirelessDeviceImportTaskResponse = {
  Id?: {} | undefined
  Arn?: {} | undefined
  DestinationName?: {} | undefined
  Sidewalk?: { DeviceCreationFileList?: {} | undefined; Role?: {} | undefined } | undefined
  CreationTime?: {} | undefined
  Status?: {} | undefined
  StatusReason?: {} | undefined
  InitializedImportedDeviceCount?: {} | undefined
  PendingImportedDeviceCount?: {} | undefined
  OnboardedImportedDeviceCount?: {} | undefined
  FailedImportedDeviceCount?: {} | undefined
}
type UpdateWirelessDeviceImportTaskResponse = { [x: string]: unknown }
type DeleteWirelessGatewayResponse = { [x: string]: unknown }
type UpdateWirelessGatewayResponse = { [x: string]: unknown }
type DeleteWirelessGatewayTaskDefinitionResponse = { [x: string]: unknown }
type GetWirelessGatewayTaskDefinitionResponse = {
  AutoCreateTasks?: {} | undefined
  Name?: {} | undefined
  Update?:
    | {
        UpdateDataSource?: {} | undefined
        UpdateDataRole?: {} | undefined
        LoRaWAN?:
          | {
              UpdateSignature?: {} | undefined
              SigKeyCrc?: {} | undefined
              CurrentVersion?:
                | {
                    PackageVersion?: {} | undefined
                    Model?: {} | undefined
                    Station?: {} | undefined
                  }
                | undefined
              UpdateVersion?:
                | {
                    PackageVersion?: {} | undefined
                    Model?: {} | undefined
                    Station?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  Arn?: {} | undefined
}
type DeregisterWirelessDeviceResponse = { [x: string]: unknown }
type DisassociateAwsAccountFromPartnerAccountResponse = { [x: string]: unknown }
type GetPartnerAccountResponse = {
  Sidewalk?:
    | { AmazonId?: {} | undefined; Fingerprint?: {} | undefined; Arn?: {} | undefined }
    | undefined
  AccountLinked?: {} | undefined
}
type UpdatePartnerAccountResponse = { [x: string]: unknown }
type DisassociateMulticastGroupFromFuotaTaskResponse = { [x: string]: unknown }
type DisassociateWirelessDeviceFromFuotaTaskResponse = { [x: string]: unknown }
type DisassociateWirelessDeviceFromMulticastGroupResponse = { [x: string]: unknown }
type SidewalkResourceTypeEventConfiguration = { WirelessDeviceEventTopic?: {} | undefined }
type GetEventConfigurationByResourceTypesResponse = {
  DeviceRegistrationState?:
    | { Sidewalk?: { WirelessDeviceEventTopic?: {} | undefined } | undefined }
    | undefined
  Proximity?: { Sidewalk?: { WirelessDeviceEventTopic?: {} | undefined } | undefined } | undefined
  Join?: { LoRaWAN?: { WirelessDeviceEventTopic?: {} | undefined } | undefined } | undefined
  ConnectionStatus?:
    | { LoRaWAN?: { WirelessGatewayEventTopic?: {} | undefined } | undefined }
    | undefined
  MessageDeliveryStatus?:
    | { Sidewalk?: SidewalkResourceTypeEventConfiguration | undefined }
    | undefined
}
type UpdateEventConfigurationByResourceTypesResponse = { [x: string]: unknown }
type WirelessGatewayType = 'LoRaWAN'
type WirelessGatewayEvent = 'CUPS_Request' | 'Certificate'
type WirelessGatewayEventLogOption = { Event: WirelessGatewayEvent; LogLevel: LogLevel }
type WirelessGatewayEventLogOptionList = WirelessGatewayEventLogOption[]
type WirelessGatewayLogOption = {
  Type: WirelessGatewayType
  LogLevel: LogLevel
  Events?: WirelessGatewayEventLogOptionList | undefined
}
type WirelessGatewayLogOptionList = WirelessGatewayLogOption[]
type WirelessDeviceEvent = 'Join' | 'Rejoin' | 'Uplink_Data' | 'Downlink_Data' | 'Registration'
type WirelessDeviceEventLogOption = { Event: WirelessDeviceEvent; LogLevel: LogLevel }
type WirelessDeviceEventLogOptionList = WirelessDeviceEventLogOption[]
type WirelessDeviceLogOption = {
  Type: {}
  LogLevel: LogLevel
  Events?: WirelessDeviceEventLogOptionList | undefined
}
type WirelessDeviceLogOptionList = WirelessDeviceLogOption[]
type GetLogLevelsByResourceTypesResponse = {
  DefaultLogLevel?: LogLevel | undefined
  WirelessGatewayLogOptions?: WirelessGatewayLogOptionList | undefined
  WirelessDeviceLogOptions?: WirelessDeviceLogOptionList | undefined
}
type ResetAllResourceLogLevelsResponse = { [x: string]: unknown }
type UpdateLogLevelsByResourceTypesResponse = { [x: string]: unknown }
type GetPositionResponse = {
  Position?: {} | undefined
  Accuracy?: { HorizontalAccuracy?: {} | undefined; VerticalAccuracy?: {} | undefined } | undefined
  SolverType?: {} | undefined
  SolverProvider?: {} | undefined
  SolverVersion?: {} | undefined
  Timestamp?: {} | undefined
}
type PositionCoordinateValue = number
type UpdatePositionResponse = { [x: string]: unknown }
type GetPositionConfigurationResponse = {
  Solvers?:
    | {
        SemtechGnss?:
          | {
              Provider?: {} | undefined
              Type?: {} | undefined
              Status?: {} | undefined
              Fec?: {} | undefined
            }
          | undefined
      }
    | undefined
  Destination?: {} | undefined
}
type PutPositionConfigurationResponse = { [x: string]: unknown }
type WiFiAccessPoint = { MacAddress: {}; Rss: {} }
type GetPositionEstimateResponse = { GeoJsonPayload?: {} | undefined }
type SidewalkEventNotificationConfigurations = { AmazonIdEventTopic?: {} | undefined }
type GetResourceEventConfigurationResponse = {
  DeviceRegistrationState?:
    | {
        Sidewalk?: { AmazonIdEventTopic?: {} | undefined } | undefined
        WirelessDeviceIdEventTopic?: {} | undefined
      }
    | undefined
  Proximity?:
    | {
        Sidewalk?: { AmazonIdEventTopic?: {} | undefined } | undefined
        WirelessDeviceIdEventTopic?: {} | undefined
      }
    | undefined
  Join?:
    | {
        LoRaWAN?: { DevEuiEventTopic?: {} | undefined } | undefined
        WirelessDeviceIdEventTopic?: {} | undefined
      }
    | undefined
  ConnectionStatus?:
    | {
        LoRaWAN?: { GatewayEuiEventTopic?: {} | undefined } | undefined
        WirelessGatewayIdEventTopic?: {} | undefined
      }
    | undefined
  MessageDeliveryStatus?:
    | {
        Sidewalk?: SidewalkEventNotificationConfigurations | undefined
        WirelessDeviceIdEventTopic?: {} | undefined
      }
    | undefined
}
type UpdateResourceEventConfigurationResponse = { [x: string]: unknown }
type GetResourceLogLevelResponse = { LogLevel?: LogLevel | undefined }
type PutResourceLogLevelResponse = { [x: string]: unknown }
type ResetResourceLogLevelResponse = { [x: string]: unknown }
type GetResourcePositionResponse = { GeoJsonPayload?: {} | undefined }
type UpdateResourcePositionResponse = { [x: string]: unknown }
type GetServiceEndpointResponse = {
  ServiceType?: {} | undefined
  ServiceEndpoint?: {} | undefined
  ServerTrust?: {} | undefined
}
type AmazonId = string
type GetWirelessDeviceResponse = {
  Type?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  DestinationName?: {} | undefined
  Id?: {} | undefined
  Arn?: {} | undefined
  ThingName?: {} | undefined
  ThingArn?: {} | undefined
  LoRaWAN?:
    | {
        DevEui?: {} | undefined
        DeviceProfileId?: {} | undefined
        ServiceProfileId?: {} | undefined
        OtaaV1_1?:
          | { AppKey?: {} | undefined; NwkKey?: {} | undefined; JoinEui?: {} | undefined }
          | undefined
        OtaaV1_0_x?:
          | { AppKey?: {} | undefined; AppEui?: {} | undefined; GenAppKey?: {} | undefined }
          | undefined
        AbpV1_1?:
          | {
              DevAddr?: {} | undefined
              SessionKeys?:
                | {
                    FNwkSIntKey?: {} | undefined
                    SNwkSIntKey?: {} | undefined
                    NwkSEncKey?: {} | undefined
                    AppSKey?: {} | undefined
                  }
                | undefined
              FCntStart?: {} | undefined
            }
          | undefined
        AbpV1_0_x?:
          | {
              DevAddr?: {} | undefined
              SessionKeys?: { NwkSKey?: {} | undefined; AppSKey?: {} | undefined } | undefined
              FCntStart?: {} | undefined
            }
          | undefined
        FPorts?: FPorts | undefined
      }
    | undefined
  Sidewalk?:
    | {
        AmazonId?: AmazonId | undefined
        SidewalkId?: {} | undefined
        SidewalkManufacturingSn?: {} | undefined
        DeviceCertificates?: {} | undefined
        PrivateKeys?: {} | undefined
        DeviceProfileId?: {} | undefined
        CertificateId?: {} | undefined
        Status?: {} | undefined
      }
    | undefined
  Positioning?: {} | undefined
}
type GetWirelessDeviceStatisticsResponse = {
  WirelessDeviceId?: {} | undefined
  LastUplinkReceivedAt?: {} | undefined
  LoRaWAN?:
    | {
        DevEui?: {} | undefined
        FPort?: {} | undefined
        DataRate?: {} | undefined
        Frequency?: {} | undefined
        Timestamp?: {} | undefined
        Gateways?: {} | undefined
      }
    | undefined
  Sidewalk?:
    | {
        Rssi?: {} | undefined
        BatteryLevel?: {} | undefined
        Event?: {} | undefined
        DeviceState?: {} | undefined
      }
    | undefined
}
type GetWirelessGatewayResponse = {
  Name?: {} | undefined
  Id?: {} | undefined
  Description?: {} | undefined
  LoRaWAN?:
    | {
        GatewayEui?: {} | undefined
        RfRegion?: {} | undefined
        JoinEuiFilters?: JoinEuiFilters | undefined
        NetIdFilters?: NetIdFilters | undefined
        SubBands?: SubBands | undefined
        Beaconing?: { DataRate?: {} | undefined; Frequencies?: {} | undefined } | undefined
        MaxEirp?: {} | undefined
      }
    | undefined
  Arn?: {} | undefined
  ThingName?: {} | undefined
  ThingArn?: {} | undefined
}
type GetWirelessGatewayFirmwareInformationResponse = {
  LoRaWAN?:
    | {
        CurrentVersion?:
          | { PackageVersion?: {} | undefined; Model?: {} | undefined; Station?: {} | undefined }
          | undefined
      }
    | undefined
}
type GetWirelessGatewayStatisticsResponse = {
  WirelessGatewayId?: {} | undefined
  LastUplinkReceivedAt?: {} | undefined
  ConnectionStatus?: {} | undefined
}
type ListDevicesForWirelessDeviceImportTaskResponse = {
  NextToken?: {} | undefined
  DestinationName?: {} | undefined
  ImportedWirelessDeviceList?: {} | undefined
}
type ListEventConfigurationsResponse = {
  NextToken?: {} | undefined
  EventConfigurationsList?: {} | undefined
}
type MulticastGroupByFuotaTask = { Id?: MulticastGroupId | undefined }
type MulticastGroupListByFuotaTask = MulticastGroupByFuotaTask[]
type ListMulticastGroupsByFuotaTaskResponse = {
  NextToken?: {} | undefined
  MulticastGroupList?: MulticastGroupListByFuotaTask | undefined
}
type ListPositionConfigurationsResponse = {
  PositionConfigurationList?: {} | undefined
  NextToken?: {} | undefined
}
type ListQueuedMessagesResponse = {
  NextToken?: {} | undefined
  DownlinkQueueMessagesList?: {} | undefined
}
type MessageType =
  | 'CUSTOM_COMMAND_ID_NOTIFY'
  | 'CUSTOM_COMMAND_ID_GET'
  | 'CUSTOM_COMMAND_ID_SET'
  | 'CUSTOM_COMMAND_ID_RESP'
type SendDataToWirelessDeviceResponse = { MessageId?: {} | undefined }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type TooManyTagsException = { [x: string]: unknown }
type ListWirelessDeviceImportTasksResponse = {
  NextToken?: {} | undefined
  WirelessDeviceImportTaskList?: {} | undefined
}
type LoRaWANMulticastMetadata = { FPort?: FPort | undefined }
type MulticastGroupMessageId = string
type SendDataToMulticastGroupResponse = { MessageId?: MulticastGroupMessageId | undefined }
type StartBulkAssociateWirelessDeviceWithMulticastGroupResponse = { [x: string]: unknown }
type StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse = { [x: string]: unknown }
type StartSingleWirelessDeviceImportTaskResponse = { Id?: {} | undefined; Arn?: {} | undefined }
type StartWirelessDeviceImportTaskResponse = { Id?: {} | undefined; Arn?: {} | undefined }
type TestWirelessDeviceResponse = { Result?: {} | undefined }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/partner-accounts': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Sidewalk: { AmazonId?: {} | undefined; AppServerPrivateKey?: {} | undefined }
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: AssociateAwsAccountWithPartnerAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Sidewalk: { AmazonId?: {} | undefined; AppServerPrivateKey?: {} | undefined }
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Sidewalk: { AmazonId?: {} | undefined; AppServerPrivateKey?: {} | undefined }
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Sidewalk: { AmazonId?: {} | undefined; AppServerPrivateKey?: {} | undefined }
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Sidewalk: { AmazonId?: {} | undefined; AppServerPrivateKey?: {} | undefined }
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Sidewalk: { AmazonId?: {} | undefined; AppServerPrivateKey?: {} | undefined }
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Sidewalk: { AmazonId?: {} | undefined; AppServerPrivateKey?: {} | undefined }
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListPartnerAccountsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/fuota-tasks/:Id/multicast-group': {
      $put:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { MulticastGroupId: string } }
            output: AssociateMulticastGroupWithFuotaTaskResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { MulticastGroupId: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { MulticastGroupId: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { MulticastGroupId: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { MulticastGroupId: string } }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { MulticastGroupId: string } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { MulticastGroupId: string } }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/fuota-tasks/:Id/wireless-device': {
      $put:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessDeviceId: string } }
            output: AssociateWirelessDeviceWithFuotaTaskResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessDeviceId: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessDeviceId: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessDeviceId: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessDeviceId: string } }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessDeviceId: string } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessDeviceId: string } }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/multicast-groups/:Id/wireless-device': {
      $put:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessDeviceId: string } }
            output: AssociateWirelessDeviceWithMulticastGroupResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessDeviceId: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessDeviceId: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessDeviceId: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessDeviceId: string } }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessDeviceId: string } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessDeviceId: string } }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/wireless-devices/:Id/thing': {
      $put:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ThingArn: string } }
            output: AssociateWirelessDeviceWithThingResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ThingArn: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ThingArn: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ThingArn: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ThingArn: string } }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ThingArn: string } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ThingArn: string } }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
      $delete:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DisassociateWirelessDeviceFromThingResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/wireless-gateways/:Id/certificate': {
      $put:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { IotCertificateId: string } }
            output: AssociateWirelessGatewayWithCertificateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { IotCertificateId: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { IotCertificateId: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { IotCertificateId: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { IotCertificateId: string } }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { IotCertificateId: string } }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { IotCertificateId: string } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
      $delete:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DisassociateWirelessGatewayFromCertificateResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetWirelessGatewayCertificateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/wireless-gateways/:Id/thing': {
      $put:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ThingArn: string } }
            output: AssociateWirelessGatewayWithThingResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ThingArn: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ThingArn: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ThingArn: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ThingArn: string } }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ThingArn: string } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ThingArn: string } }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
      $delete:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DisassociateWirelessGatewayFromThingResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/multicast-groups/:Id/session': {
      $delete:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CancelMulticastGroupSessionResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetMulticastGroupSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $put:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                LoRaWAN: {
                  DlDr?: DlDr | undefined
                  DlFreq?: DlFreq | undefined
                  SessionStartTime?: SessionStartTimeTimestamp | undefined
                  SessionTimeout?: SessionTimeout | undefined
                  PingSlotPeriod?: {} | undefined
                }
              }
            }
            output: StartMulticastGroupSessionResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                LoRaWAN: {
                  DlDr?: DlDr | undefined
                  DlFreq?: DlFreq | undefined
                  SessionStartTime?: SessionStartTimeTimestamp | undefined
                  SessionTimeout?: SessionTimeout | undefined
                  PingSlotPeriod?: {} | undefined
                }
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                LoRaWAN: {
                  DlDr?: DlDr | undefined
                  DlFreq?: DlFreq | undefined
                  SessionStartTime?: SessionStartTimeTimestamp | undefined
                  SessionTimeout?: SessionTimeout | undefined
                  PingSlotPeriod?: {} | undefined
                }
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                LoRaWAN: {
                  DlDr?: DlDr | undefined
                  DlFreq?: DlFreq | undefined
                  SessionStartTime?: SessionStartTimeTimestamp | undefined
                  SessionTimeout?: SessionTimeout | undefined
                  PingSlotPeriod?: {} | undefined
                }
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                LoRaWAN: {
                  DlDr?: DlDr | undefined
                  DlFreq?: DlFreq | undefined
                  SessionStartTime?: SessionStartTimeTimestamp | undefined
                  SessionTimeout?: SessionTimeout | undefined
                  PingSlotPeriod?: {} | undefined
                }
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                LoRaWAN: {
                  DlDr?: DlDr | undefined
                  DlFreq?: DlFreq | undefined
                  SessionStartTime?: SessionStartTimeTimestamp | undefined
                  SessionTimeout?: SessionTimeout | undefined
                  PingSlotPeriod?: {} | undefined
                }
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                LoRaWAN: {
                  DlDr?: DlDr | undefined
                  DlFreq?: DlFreq | undefined
                  SessionStartTime?: SessionStartTimeTimestamp | undefined
                  SessionTimeout?: SessionTimeout | undefined
                  PingSlotPeriod?: {} | undefined
                }
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/destinations': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name: string
                ExpressionType: 'RuleName' | 'MqttTopic'
                Expression: string
                Description?: string | undefined
                RoleArn: string
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: CreateDestinationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name: string
                ExpressionType: 'RuleName' | 'MqttTopic'
                Expression: string
                Description?: string | undefined
                RoleArn: string
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name: string
                ExpressionType: 'RuleName' | 'MqttTopic'
                Expression: string
                Description?: string | undefined
                RoleArn: string
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name: string
                ExpressionType: 'RuleName' | 'MqttTopic'
                Expression: string
                Description?: string | undefined
                RoleArn: string
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name: string
                ExpressionType: 'RuleName' | 'MqttTopic'
                Expression: string
                Description?: string | undefined
                RoleArn: string
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name: string
                ExpressionType: 'RuleName' | 'MqttTopic'
                Expression: string
                Description?: string | undefined
                RoleArn: string
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name: string
                ExpressionType: 'RuleName' | 'MqttTopic'
                Expression: string
                Description?: string | undefined
                RoleArn: string
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListDestinationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/device-profiles': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                LoRaWAN?:
                  | {
                      SupportsClassB?: {} | undefined
                      ClassBTimeout?: {} | undefined
                      PingSlotPeriod?: {} | undefined
                      PingSlotDr?: {} | undefined
                      PingSlotFreq?: {} | undefined
                      SupportsClassC?: {} | undefined
                      ClassCTimeout?: {} | undefined
                      MacVersion?: {} | undefined
                      RegParamsRevision?: {} | undefined
                      RxDelay1?: {} | undefined
                      RxDrOffset1?: {} | undefined
                      RxDataRate2?: {} | undefined
                      RxFreq2?: {} | undefined
                      FactoryPresetFreqsList?: {} | undefined
                      MaxEirp?: {} | undefined
                      MaxDutyCycle?: {} | undefined
                      RfRegion?: {} | undefined
                      SupportsJoin?: {} | undefined
                      Supports32BitFCnt?: {} | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
                Sidewalk?: { [x: string]: unknown } | undefined
              }
            }
            output: CreateDeviceProfileResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                LoRaWAN?:
                  | {
                      SupportsClassB?: {} | undefined
                      ClassBTimeout?: {} | undefined
                      PingSlotPeriod?: {} | undefined
                      PingSlotDr?: {} | undefined
                      PingSlotFreq?: {} | undefined
                      SupportsClassC?: {} | undefined
                      ClassCTimeout?: {} | undefined
                      MacVersion?: {} | undefined
                      RegParamsRevision?: {} | undefined
                      RxDelay1?: {} | undefined
                      RxDrOffset1?: {} | undefined
                      RxDataRate2?: {} | undefined
                      RxFreq2?: {} | undefined
                      FactoryPresetFreqsList?: {} | undefined
                      MaxEirp?: {} | undefined
                      MaxDutyCycle?: {} | undefined
                      RfRegion?: {} | undefined
                      SupportsJoin?: {} | undefined
                      Supports32BitFCnt?: {} | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
                Sidewalk?: { [x: string]: unknown } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                LoRaWAN?:
                  | {
                      SupportsClassB?: {} | undefined
                      ClassBTimeout?: {} | undefined
                      PingSlotPeriod?: {} | undefined
                      PingSlotDr?: {} | undefined
                      PingSlotFreq?: {} | undefined
                      SupportsClassC?: {} | undefined
                      ClassCTimeout?: {} | undefined
                      MacVersion?: {} | undefined
                      RegParamsRevision?: {} | undefined
                      RxDelay1?: {} | undefined
                      RxDrOffset1?: {} | undefined
                      RxDataRate2?: {} | undefined
                      RxFreq2?: {} | undefined
                      FactoryPresetFreqsList?: {} | undefined
                      MaxEirp?: {} | undefined
                      MaxDutyCycle?: {} | undefined
                      RfRegion?: {} | undefined
                      SupportsJoin?: {} | undefined
                      Supports32BitFCnt?: {} | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
                Sidewalk?: { [x: string]: unknown } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                LoRaWAN?:
                  | {
                      SupportsClassB?: {} | undefined
                      ClassBTimeout?: {} | undefined
                      PingSlotPeriod?: {} | undefined
                      PingSlotDr?: {} | undefined
                      PingSlotFreq?: {} | undefined
                      SupportsClassC?: {} | undefined
                      ClassCTimeout?: {} | undefined
                      MacVersion?: {} | undefined
                      RegParamsRevision?: {} | undefined
                      RxDelay1?: {} | undefined
                      RxDrOffset1?: {} | undefined
                      RxDataRate2?: {} | undefined
                      RxFreq2?: {} | undefined
                      FactoryPresetFreqsList?: {} | undefined
                      MaxEirp?: {} | undefined
                      MaxDutyCycle?: {} | undefined
                      RfRegion?: {} | undefined
                      SupportsJoin?: {} | undefined
                      Supports32BitFCnt?: {} | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
                Sidewalk?: { [x: string]: unknown } | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                LoRaWAN?:
                  | {
                      SupportsClassB?: {} | undefined
                      ClassBTimeout?: {} | undefined
                      PingSlotPeriod?: {} | undefined
                      PingSlotDr?: {} | undefined
                      PingSlotFreq?: {} | undefined
                      SupportsClassC?: {} | undefined
                      ClassCTimeout?: {} | undefined
                      MacVersion?: {} | undefined
                      RegParamsRevision?: {} | undefined
                      RxDelay1?: {} | undefined
                      RxDrOffset1?: {} | undefined
                      RxDataRate2?: {} | undefined
                      RxFreq2?: {} | undefined
                      FactoryPresetFreqsList?: {} | undefined
                      MaxEirp?: {} | undefined
                      MaxDutyCycle?: {} | undefined
                      RfRegion?: {} | undefined
                      SupportsJoin?: {} | undefined
                      Supports32BitFCnt?: {} | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
                Sidewalk?: { [x: string]: unknown } | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                LoRaWAN?:
                  | {
                      SupportsClassB?: {} | undefined
                      ClassBTimeout?: {} | undefined
                      PingSlotPeriod?: {} | undefined
                      PingSlotDr?: {} | undefined
                      PingSlotFreq?: {} | undefined
                      SupportsClassC?: {} | undefined
                      ClassCTimeout?: {} | undefined
                      MacVersion?: {} | undefined
                      RegParamsRevision?: {} | undefined
                      RxDelay1?: {} | undefined
                      RxDrOffset1?: {} | undefined
                      RxDataRate2?: {} | undefined
                      RxFreq2?: {} | undefined
                      FactoryPresetFreqsList?: {} | undefined
                      MaxEirp?: {} | undefined
                      MaxDutyCycle?: {} | undefined
                      RfRegion?: {} | undefined
                      SupportsJoin?: {} | undefined
                      Supports32BitFCnt?: {} | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
                Sidewalk?: { [x: string]: unknown } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                deviceProfileType?: 'Sidewalk' | 'LoRaWAN' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListDeviceProfilesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                deviceProfileType?: 'Sidewalk' | 'LoRaWAN' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                deviceProfileType?: 'Sidewalk' | 'LoRaWAN' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                deviceProfileType?: 'Sidewalk' | 'LoRaWAN' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                deviceProfileType?: 'Sidewalk' | 'LoRaWAN' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/fuota-tasks': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                ClientRequestToken?: string | undefined
                LoRaWAN?: { RfRegion?: SupportedRfRegion | undefined } | undefined
                FirmwareUpdateImage: string
                FirmwareUpdateRole: string
                Tags?: Tag[] | undefined
                RedundancyPercent?: number | undefined
                FragmentSizeBytes?: number | undefined
                FragmentIntervalMS?: number | undefined
              }
            }
            output: CreateFuotaTaskResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                ClientRequestToken?: string | undefined
                LoRaWAN?: { RfRegion?: SupportedRfRegion | undefined } | undefined
                FirmwareUpdateImage: string
                FirmwareUpdateRole: string
                Tags?: Tag[] | undefined
                RedundancyPercent?: number | undefined
                FragmentSizeBytes?: number | undefined
                FragmentIntervalMS?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                ClientRequestToken?: string | undefined
                LoRaWAN?: { RfRegion?: SupportedRfRegion | undefined } | undefined
                FirmwareUpdateImage: string
                FirmwareUpdateRole: string
                Tags?: Tag[] | undefined
                RedundancyPercent?: number | undefined
                FragmentSizeBytes?: number | undefined
                FragmentIntervalMS?: number | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                ClientRequestToken?: string | undefined
                LoRaWAN?: { RfRegion?: SupportedRfRegion | undefined } | undefined
                FirmwareUpdateImage: string
                FirmwareUpdateRole: string
                Tags?: Tag[] | undefined
                RedundancyPercent?: number | undefined
                FragmentSizeBytes?: number | undefined
                FragmentIntervalMS?: number | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                ClientRequestToken?: string | undefined
                LoRaWAN?: { RfRegion?: SupportedRfRegion | undefined } | undefined
                FirmwareUpdateImage: string
                FirmwareUpdateRole: string
                Tags?: Tag[] | undefined
                RedundancyPercent?: number | undefined
                FragmentSizeBytes?: number | undefined
                FragmentIntervalMS?: number | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                ClientRequestToken?: string | undefined
                LoRaWAN?: { RfRegion?: SupportedRfRegion | undefined } | undefined
                FirmwareUpdateImage: string
                FirmwareUpdateRole: string
                Tags?: Tag[] | undefined
                RedundancyPercent?: number | undefined
                FragmentSizeBytes?: number | undefined
                FragmentIntervalMS?: number | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                ClientRequestToken?: string | undefined
                LoRaWAN?: { RfRegion?: SupportedRfRegion | undefined } | undefined
                FirmwareUpdateImage: string
                FirmwareUpdateRole: string
                Tags?: Tag[] | undefined
                RedundancyPercent?: number | undefined
                FragmentSizeBytes?: number | undefined
                FragmentIntervalMS?: number | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListFuotaTasksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/multicast-groups': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                ClientRequestToken?: string | undefined
                LoRaWAN: { RfRegion?: SupportedRfRegion | undefined; DlClass?: DlClass | undefined }
                Tags?: Tag[] | undefined
              }
            }
            output: CreateMulticastGroupResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                ClientRequestToken?: string | undefined
                LoRaWAN: { RfRegion?: SupportedRfRegion | undefined; DlClass?: DlClass | undefined }
                Tags?: Tag[] | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                ClientRequestToken?: string | undefined
                LoRaWAN: { RfRegion?: SupportedRfRegion | undefined; DlClass?: DlClass | undefined }
                Tags?: Tag[] | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                ClientRequestToken?: string | undefined
                LoRaWAN: { RfRegion?: SupportedRfRegion | undefined; DlClass?: DlClass | undefined }
                Tags?: Tag[] | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                ClientRequestToken?: string | undefined
                LoRaWAN: { RfRegion?: SupportedRfRegion | undefined; DlClass?: DlClass | undefined }
                Tags?: Tag[] | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                ClientRequestToken?: string | undefined
                LoRaWAN: { RfRegion?: SupportedRfRegion | undefined; DlClass?: DlClass | undefined }
                Tags?: Tag[] | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                ClientRequestToken?: string | undefined
                LoRaWAN: { RfRegion?: SupportedRfRegion | undefined; DlClass?: DlClass | undefined }
                Tags?: Tag[] | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListMulticastGroupsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/network-analyzer-configurations': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name: string
                TraceContent?:
                  | {
                      WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | undefined
                      LogLevel?: LogLevel | undefined
                    }
                  | undefined
                WirelessDevices?: WirelessDeviceId[] | undefined
                WirelessGateways?: WirelessGatewayId[] | undefined
                Description?: string | undefined
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: CreateNetworkAnalyzerConfigurationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name: string
                TraceContent?:
                  | {
                      WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | undefined
                      LogLevel?: LogLevel | undefined
                    }
                  | undefined
                WirelessDevices?: WirelessDeviceId[] | undefined
                WirelessGateways?: WirelessGatewayId[] | undefined
                Description?: string | undefined
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name: string
                TraceContent?:
                  | {
                      WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | undefined
                      LogLevel?: LogLevel | undefined
                    }
                  | undefined
                WirelessDevices?: WirelessDeviceId[] | undefined
                WirelessGateways?: WirelessGatewayId[] | undefined
                Description?: string | undefined
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name: string
                TraceContent?:
                  | {
                      WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | undefined
                      LogLevel?: LogLevel | undefined
                    }
                  | undefined
                WirelessDevices?: WirelessDeviceId[] | undefined
                WirelessGateways?: WirelessGatewayId[] | undefined
                Description?: string | undefined
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name: string
                TraceContent?:
                  | {
                      WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | undefined
                      LogLevel?: LogLevel | undefined
                    }
                  | undefined
                WirelessDevices?: WirelessDeviceId[] | undefined
                WirelessGateways?: WirelessGatewayId[] | undefined
                Description?: string | undefined
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name: string
                TraceContent?:
                  | {
                      WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | undefined
                      LogLevel?: LogLevel | undefined
                    }
                  | undefined
                WirelessDevices?: WirelessDeviceId[] | undefined
                WirelessGateways?: WirelessGatewayId[] | undefined
                Description?: string | undefined
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name: string
                TraceContent?:
                  | {
                      WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | undefined
                      LogLevel?: LogLevel | undefined
                    }
                  | undefined
                WirelessDevices?: WirelessDeviceId[] | undefined
                WirelessGateways?: WirelessGatewayId[] | undefined
                Description?: string | undefined
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListNetworkAnalyzerConfigurationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/service-profiles': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                LoRaWAN?:
                  | {
                      AddGwMetadata?: {} | undefined
                      DrMin?: {} | undefined
                      DrMax?: {} | undefined
                      PrAllowed?: {} | undefined
                      RaAllowed?: {} | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: CreateServiceProfileResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                LoRaWAN?:
                  | {
                      AddGwMetadata?: {} | undefined
                      DrMin?: {} | undefined
                      DrMax?: {} | undefined
                      PrAllowed?: {} | undefined
                      RaAllowed?: {} | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                LoRaWAN?:
                  | {
                      AddGwMetadata?: {} | undefined
                      DrMin?: {} | undefined
                      DrMax?: {} | undefined
                      PrAllowed?: {} | undefined
                      RaAllowed?: {} | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                LoRaWAN?:
                  | {
                      AddGwMetadata?: {} | undefined
                      DrMin?: {} | undefined
                      DrMax?: {} | undefined
                      PrAllowed?: {} | undefined
                      RaAllowed?: {} | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                LoRaWAN?:
                  | {
                      AddGwMetadata?: {} | undefined
                      DrMin?: {} | undefined
                      DrMax?: {} | undefined
                      PrAllowed?: {} | undefined
                      RaAllowed?: {} | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                LoRaWAN?:
                  | {
                      AddGwMetadata?: {} | undefined
                      DrMin?: {} | undefined
                      DrMax?: {} | undefined
                      PrAllowed?: {} | undefined
                      RaAllowed?: {} | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListServiceProfilesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/wireless-devices': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Type: 'Sidewalk' | 'LoRaWAN'
                Name?: string | undefined
                Description?: string | undefined
                DestinationName: string
                ClientRequestToken?: string | undefined
                LoRaWAN?:
                  | {
                      DevEui?: {} | undefined
                      DeviceProfileId?: {} | undefined
                      ServiceProfileId?: {} | undefined
                      OtaaV1_1?:
                        | {
                            AppKey?: {} | undefined
                            NwkKey?: {} | undefined
                            JoinEui?: {} | undefined
                          }
                        | undefined
                      OtaaV1_0_x?:
                        | {
                            AppKey?: {} | undefined
                            AppEui?: {} | undefined
                            GenAppKey?: {} | undefined
                          }
                        | undefined
                      AbpV1_1?:
                        | {
                            DevAddr?: {} | undefined
                            SessionKeys?:
                              | {
                                  FNwkSIntKey?: {} | undefined
                                  SNwkSIntKey?: {} | undefined
                                  NwkSEncKey?: {} | undefined
                                  AppSKey?: {} | undefined
                                }
                              | undefined
                            FCntStart?: {} | undefined
                          }
                        | undefined
                      AbpV1_0_x?:
                        | {
                            DevAddr?: {} | undefined
                            SessionKeys?:
                              | { NwkSKey?: {} | undefined; AppSKey?: {} | undefined }
                              | undefined
                            FCntStart?: {} | undefined
                          }
                        | undefined
                      FPorts?: FPorts | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                Positioning?: 'Enabled' | 'Disabled' | undefined
                Sidewalk?: { DeviceProfileId?: {} | undefined } | undefined
              }
            }
            output: CreateWirelessDeviceResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Type: 'Sidewalk' | 'LoRaWAN'
                Name?: string | undefined
                Description?: string | undefined
                DestinationName: string
                ClientRequestToken?: string | undefined
                LoRaWAN?:
                  | {
                      DevEui?: {} | undefined
                      DeviceProfileId?: {} | undefined
                      ServiceProfileId?: {} | undefined
                      OtaaV1_1?:
                        | {
                            AppKey?: {} | undefined
                            NwkKey?: {} | undefined
                            JoinEui?: {} | undefined
                          }
                        | undefined
                      OtaaV1_0_x?:
                        | {
                            AppKey?: {} | undefined
                            AppEui?: {} | undefined
                            GenAppKey?: {} | undefined
                          }
                        | undefined
                      AbpV1_1?:
                        | {
                            DevAddr?: {} | undefined
                            SessionKeys?:
                              | {
                                  FNwkSIntKey?: {} | undefined
                                  SNwkSIntKey?: {} | undefined
                                  NwkSEncKey?: {} | undefined
                                  AppSKey?: {} | undefined
                                }
                              | undefined
                            FCntStart?: {} | undefined
                          }
                        | undefined
                      AbpV1_0_x?:
                        | {
                            DevAddr?: {} | undefined
                            SessionKeys?:
                              | { NwkSKey?: {} | undefined; AppSKey?: {} | undefined }
                              | undefined
                            FCntStart?: {} | undefined
                          }
                        | undefined
                      FPorts?: FPorts | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                Positioning?: 'Enabled' | 'Disabled' | undefined
                Sidewalk?: { DeviceProfileId?: {} | undefined } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Type: 'Sidewalk' | 'LoRaWAN'
                Name?: string | undefined
                Description?: string | undefined
                DestinationName: string
                ClientRequestToken?: string | undefined
                LoRaWAN?:
                  | {
                      DevEui?: {} | undefined
                      DeviceProfileId?: {} | undefined
                      ServiceProfileId?: {} | undefined
                      OtaaV1_1?:
                        | {
                            AppKey?: {} | undefined
                            NwkKey?: {} | undefined
                            JoinEui?: {} | undefined
                          }
                        | undefined
                      OtaaV1_0_x?:
                        | {
                            AppKey?: {} | undefined
                            AppEui?: {} | undefined
                            GenAppKey?: {} | undefined
                          }
                        | undefined
                      AbpV1_1?:
                        | {
                            DevAddr?: {} | undefined
                            SessionKeys?:
                              | {
                                  FNwkSIntKey?: {} | undefined
                                  SNwkSIntKey?: {} | undefined
                                  NwkSEncKey?: {} | undefined
                                  AppSKey?: {} | undefined
                                }
                              | undefined
                            FCntStart?: {} | undefined
                          }
                        | undefined
                      AbpV1_0_x?:
                        | {
                            DevAddr?: {} | undefined
                            SessionKeys?:
                              | { NwkSKey?: {} | undefined; AppSKey?: {} | undefined }
                              | undefined
                            FCntStart?: {} | undefined
                          }
                        | undefined
                      FPorts?: FPorts | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                Positioning?: 'Enabled' | 'Disabled' | undefined
                Sidewalk?: { DeviceProfileId?: {} | undefined } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Type: 'Sidewalk' | 'LoRaWAN'
                Name?: string | undefined
                Description?: string | undefined
                DestinationName: string
                ClientRequestToken?: string | undefined
                LoRaWAN?:
                  | {
                      DevEui?: {} | undefined
                      DeviceProfileId?: {} | undefined
                      ServiceProfileId?: {} | undefined
                      OtaaV1_1?:
                        | {
                            AppKey?: {} | undefined
                            NwkKey?: {} | undefined
                            JoinEui?: {} | undefined
                          }
                        | undefined
                      OtaaV1_0_x?:
                        | {
                            AppKey?: {} | undefined
                            AppEui?: {} | undefined
                            GenAppKey?: {} | undefined
                          }
                        | undefined
                      AbpV1_1?:
                        | {
                            DevAddr?: {} | undefined
                            SessionKeys?:
                              | {
                                  FNwkSIntKey?: {} | undefined
                                  SNwkSIntKey?: {} | undefined
                                  NwkSEncKey?: {} | undefined
                                  AppSKey?: {} | undefined
                                }
                              | undefined
                            FCntStart?: {} | undefined
                          }
                        | undefined
                      AbpV1_0_x?:
                        | {
                            DevAddr?: {} | undefined
                            SessionKeys?:
                              | { NwkSKey?: {} | undefined; AppSKey?: {} | undefined }
                              | undefined
                            FCntStart?: {} | undefined
                          }
                        | undefined
                      FPorts?: FPorts | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                Positioning?: 'Enabled' | 'Disabled' | undefined
                Sidewalk?: { DeviceProfileId?: {} | undefined } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Type: 'Sidewalk' | 'LoRaWAN'
                Name?: string | undefined
                Description?: string | undefined
                DestinationName: string
                ClientRequestToken?: string | undefined
                LoRaWAN?:
                  | {
                      DevEui?: {} | undefined
                      DeviceProfileId?: {} | undefined
                      ServiceProfileId?: {} | undefined
                      OtaaV1_1?:
                        | {
                            AppKey?: {} | undefined
                            NwkKey?: {} | undefined
                            JoinEui?: {} | undefined
                          }
                        | undefined
                      OtaaV1_0_x?:
                        | {
                            AppKey?: {} | undefined
                            AppEui?: {} | undefined
                            GenAppKey?: {} | undefined
                          }
                        | undefined
                      AbpV1_1?:
                        | {
                            DevAddr?: {} | undefined
                            SessionKeys?:
                              | {
                                  FNwkSIntKey?: {} | undefined
                                  SNwkSIntKey?: {} | undefined
                                  NwkSEncKey?: {} | undefined
                                  AppSKey?: {} | undefined
                                }
                              | undefined
                            FCntStart?: {} | undefined
                          }
                        | undefined
                      AbpV1_0_x?:
                        | {
                            DevAddr?: {} | undefined
                            SessionKeys?:
                              | { NwkSKey?: {} | undefined; AppSKey?: {} | undefined }
                              | undefined
                            FCntStart?: {} | undefined
                          }
                        | undefined
                      FPorts?: FPorts | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                Positioning?: 'Enabled' | 'Disabled' | undefined
                Sidewalk?: { DeviceProfileId?: {} | undefined } | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Type: 'Sidewalk' | 'LoRaWAN'
                Name?: string | undefined
                Description?: string | undefined
                DestinationName: string
                ClientRequestToken?: string | undefined
                LoRaWAN?:
                  | {
                      DevEui?: {} | undefined
                      DeviceProfileId?: {} | undefined
                      ServiceProfileId?: {} | undefined
                      OtaaV1_1?:
                        | {
                            AppKey?: {} | undefined
                            NwkKey?: {} | undefined
                            JoinEui?: {} | undefined
                          }
                        | undefined
                      OtaaV1_0_x?:
                        | {
                            AppKey?: {} | undefined
                            AppEui?: {} | undefined
                            GenAppKey?: {} | undefined
                          }
                        | undefined
                      AbpV1_1?:
                        | {
                            DevAddr?: {} | undefined
                            SessionKeys?:
                              | {
                                  FNwkSIntKey?: {} | undefined
                                  SNwkSIntKey?: {} | undefined
                                  NwkSEncKey?: {} | undefined
                                  AppSKey?: {} | undefined
                                }
                              | undefined
                            FCntStart?: {} | undefined
                          }
                        | undefined
                      AbpV1_0_x?:
                        | {
                            DevAddr?: {} | undefined
                            SessionKeys?:
                              | { NwkSKey?: {} | undefined; AppSKey?: {} | undefined }
                              | undefined
                            FCntStart?: {} | undefined
                          }
                        | undefined
                      FPorts?: FPorts | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                Positioning?: 'Enabled' | 'Disabled' | undefined
                Sidewalk?: { DeviceProfileId?: {} | undefined } | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Type: 'Sidewalk' | 'LoRaWAN'
                Name?: string | undefined
                Description?: string | undefined
                DestinationName: string
                ClientRequestToken?: string | undefined
                LoRaWAN?:
                  | {
                      DevEui?: {} | undefined
                      DeviceProfileId?: {} | undefined
                      ServiceProfileId?: {} | undefined
                      OtaaV1_1?:
                        | {
                            AppKey?: {} | undefined
                            NwkKey?: {} | undefined
                            JoinEui?: {} | undefined
                          }
                        | undefined
                      OtaaV1_0_x?:
                        | {
                            AppKey?: {} | undefined
                            AppEui?: {} | undefined
                            GenAppKey?: {} | undefined
                          }
                        | undefined
                      AbpV1_1?:
                        | {
                            DevAddr?: {} | undefined
                            SessionKeys?:
                              | {
                                  FNwkSIntKey?: {} | undefined
                                  SNwkSIntKey?: {} | undefined
                                  NwkSEncKey?: {} | undefined
                                  AppSKey?: {} | undefined
                                }
                              | undefined
                            FCntStart?: {} | undefined
                          }
                        | undefined
                      AbpV1_0_x?:
                        | {
                            DevAddr?: {} | undefined
                            SessionKeys?:
                              | { NwkSKey?: {} | undefined; AppSKey?: {} | undefined }
                              | undefined
                            FCntStart?: {} | undefined
                          }
                        | undefined
                      FPorts?: FPorts | undefined
                    }
                  | undefined
                Tags?: Tag[] | undefined
                Positioning?: 'Enabled' | 'Disabled' | undefined
                Sidewalk?: { DeviceProfileId?: {} | undefined } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                destinationName?: string | undefined
                deviceProfileId?: string | undefined
                serviceProfileId?: string | undefined
                wirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined
                fuotaTaskId?: string | undefined
                multicastGroupId?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListWirelessDevicesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                destinationName?: string | undefined
                deviceProfileId?: string | undefined
                serviceProfileId?: string | undefined
                wirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined
                fuotaTaskId?: string | undefined
                multicastGroupId?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                destinationName?: string | undefined
                deviceProfileId?: string | undefined
                serviceProfileId?: string | undefined
                wirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined
                fuotaTaskId?: string | undefined
                multicastGroupId?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                destinationName?: string | undefined
                deviceProfileId?: string | undefined
                serviceProfileId?: string | undefined
                wirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined
                fuotaTaskId?: string | undefined
                multicastGroupId?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                destinationName?: string | undefined
                deviceProfileId?: string | undefined
                serviceProfileId?: string | undefined
                wirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined
                fuotaTaskId?: string | undefined
                multicastGroupId?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/wireless-gateways': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN: {
                  GatewayEui?: {} | undefined
                  RfRegion?: {} | undefined
                  JoinEuiFilters?: JoinEuiFilters | undefined
                  NetIdFilters?: NetIdFilters | undefined
                  SubBands?: SubBands | undefined
                  Beaconing?:
                    | { DataRate?: {} | undefined; Frequencies?: {} | undefined }
                    | undefined
                  MaxEirp?: {} | undefined
                }
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: CreateWirelessGatewayResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN: {
                  GatewayEui?: {} | undefined
                  RfRegion?: {} | undefined
                  JoinEuiFilters?: JoinEuiFilters | undefined
                  NetIdFilters?: NetIdFilters | undefined
                  SubBands?: SubBands | undefined
                  Beaconing?:
                    | { DataRate?: {} | undefined; Frequencies?: {} | undefined }
                    | undefined
                  MaxEirp?: {} | undefined
                }
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN: {
                  GatewayEui?: {} | undefined
                  RfRegion?: {} | undefined
                  JoinEuiFilters?: JoinEuiFilters | undefined
                  NetIdFilters?: NetIdFilters | undefined
                  SubBands?: SubBands | undefined
                  Beaconing?:
                    | { DataRate?: {} | undefined; Frequencies?: {} | undefined }
                    | undefined
                  MaxEirp?: {} | undefined
                }
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN: {
                  GatewayEui?: {} | undefined
                  RfRegion?: {} | undefined
                  JoinEuiFilters?: JoinEuiFilters | undefined
                  NetIdFilters?: NetIdFilters | undefined
                  SubBands?: SubBands | undefined
                  Beaconing?:
                    | { DataRate?: {} | undefined; Frequencies?: {} | undefined }
                    | undefined
                  MaxEirp?: {} | undefined
                }
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN: {
                  GatewayEui?: {} | undefined
                  RfRegion?: {} | undefined
                  JoinEuiFilters?: JoinEuiFilters | undefined
                  NetIdFilters?: NetIdFilters | undefined
                  SubBands?: SubBands | undefined
                  Beaconing?:
                    | { DataRate?: {} | undefined; Frequencies?: {} | undefined }
                    | undefined
                  MaxEirp?: {} | undefined
                }
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN: {
                  GatewayEui?: {} | undefined
                  RfRegion?: {} | undefined
                  JoinEuiFilters?: JoinEuiFilters | undefined
                  NetIdFilters?: NetIdFilters | undefined
                  SubBands?: SubBands | undefined
                  Beaconing?:
                    | { DataRate?: {} | undefined; Frequencies?: {} | undefined }
                    | undefined
                  MaxEirp?: {} | undefined
                }
                Tags?: Tag[] | undefined
                ClientRequestToken?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListWirelessGatewaysResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/wireless-gateways/:Id/tasks': {
      $post:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessGatewayTaskDefinitionId: string } }
            output: CreateWirelessGatewayTaskResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessGatewayTaskDefinitionId: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessGatewayTaskDefinitionId: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessGatewayTaskDefinitionId: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessGatewayTaskDefinitionId: string } }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessGatewayTaskDefinitionId: string } }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { WirelessGatewayTaskDefinitionId: string } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
      $delete:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteWirelessGatewayTaskResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetWirelessGatewayTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/wireless-gateway-task-definitions': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                AutoCreateTasks: boolean
                Name?: string | undefined
                Update?:
                  | {
                      UpdateDataSource?: {} | undefined
                      UpdateDataRole?: {} | undefined
                      LoRaWAN?:
                        | {
                            UpdateSignature?: {} | undefined
                            SigKeyCrc?: {} | undefined
                            CurrentVersion?:
                              | {
                                  PackageVersion?: {} | undefined
                                  Model?: {} | undefined
                                  Station?: {} | undefined
                                }
                              | undefined
                            UpdateVersion?:
                              | {
                                  PackageVersion?: {} | undefined
                                  Model?: {} | undefined
                                  Station?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: CreateWirelessGatewayTaskDefinitionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                AutoCreateTasks: boolean
                Name?: string | undefined
                Update?:
                  | {
                      UpdateDataSource?: {} | undefined
                      UpdateDataRole?: {} | undefined
                      LoRaWAN?:
                        | {
                            UpdateSignature?: {} | undefined
                            SigKeyCrc?: {} | undefined
                            CurrentVersion?:
                              | {
                                  PackageVersion?: {} | undefined
                                  Model?: {} | undefined
                                  Station?: {} | undefined
                                }
                              | undefined
                            UpdateVersion?:
                              | {
                                  PackageVersion?: {} | undefined
                                  Model?: {} | undefined
                                  Station?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                AutoCreateTasks: boolean
                Name?: string | undefined
                Update?:
                  | {
                      UpdateDataSource?: {} | undefined
                      UpdateDataRole?: {} | undefined
                      LoRaWAN?:
                        | {
                            UpdateSignature?: {} | undefined
                            SigKeyCrc?: {} | undefined
                            CurrentVersion?:
                              | {
                                  PackageVersion?: {} | undefined
                                  Model?: {} | undefined
                                  Station?: {} | undefined
                                }
                              | undefined
                            UpdateVersion?:
                              | {
                                  PackageVersion?: {} | undefined
                                  Model?: {} | undefined
                                  Station?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                AutoCreateTasks: boolean
                Name?: string | undefined
                Update?:
                  | {
                      UpdateDataSource?: {} | undefined
                      UpdateDataRole?: {} | undefined
                      LoRaWAN?:
                        | {
                            UpdateSignature?: {} | undefined
                            SigKeyCrc?: {} | undefined
                            CurrentVersion?:
                              | {
                                  PackageVersion?: {} | undefined
                                  Model?: {} | undefined
                                  Station?: {} | undefined
                                }
                              | undefined
                            UpdateVersion?:
                              | {
                                  PackageVersion?: {} | undefined
                                  Model?: {} | undefined
                                  Station?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                AutoCreateTasks: boolean
                Name?: string | undefined
                Update?:
                  | {
                      UpdateDataSource?: {} | undefined
                      UpdateDataRole?: {} | undefined
                      LoRaWAN?:
                        | {
                            UpdateSignature?: {} | undefined
                            SigKeyCrc?: {} | undefined
                            CurrentVersion?:
                              | {
                                  PackageVersion?: {} | undefined
                                  Model?: {} | undefined
                                  Station?: {} | undefined
                                }
                              | undefined
                            UpdateVersion?:
                              | {
                                  PackageVersion?: {} | undefined
                                  Model?: {} | undefined
                                  Station?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                AutoCreateTasks: boolean
                Name?: string | undefined
                Update?:
                  | {
                      UpdateDataSource?: {} | undefined
                      UpdateDataRole?: {} | undefined
                      LoRaWAN?:
                        | {
                            UpdateSignature?: {} | undefined
                            SigKeyCrc?: {} | undefined
                            CurrentVersion?:
                              | {
                                  PackageVersion?: {} | undefined
                                  Model?: {} | undefined
                                  Station?: {} | undefined
                                }
                              | undefined
                            UpdateVersion?:
                              | {
                                  PackageVersion?: {} | undefined
                                  Model?: {} | undefined
                                  Station?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                AutoCreateTasks: boolean
                Name?: string | undefined
                Update?:
                  | {
                      UpdateDataSource?: {} | undefined
                      UpdateDataRole?: {} | undefined
                      LoRaWAN?:
                        | {
                            UpdateSignature?: {} | undefined
                            SigKeyCrc?: {} | undefined
                            CurrentVersion?:
                              | {
                                  PackageVersion?: {} | undefined
                                  Model?: {} | undefined
                                  Station?: {} | undefined
                                }
                              | undefined
                            UpdateVersion?:
                              | {
                                  PackageVersion?: {} | undefined
                                  Model?: {} | undefined
                                  Station?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                taskDefinitionType?: 'UPDATE' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListWirelessGatewayTaskDefinitionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                taskDefinitionType?: 'UPDATE' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                taskDefinitionType?: 'UPDATE' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                taskDefinitionType?: 'UPDATE' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                taskDefinitionType?: 'UPDATE' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/destinations/:Name': {
      $delete:
        | {
            input: { param: { Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteDestinationResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetDestinationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $patch:
        | {
            input: { param: { Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ExpressionType?: 'RuleName' | 'MqttTopic' | undefined
                Expression?: string | undefined
                Description?: string | undefined
                RoleArn?: string | undefined
              }
            }
            output: UpdateDestinationResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ExpressionType?: 'RuleName' | 'MqttTopic' | undefined
                Expression?: string | undefined
                Description?: string | undefined
                RoleArn?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ExpressionType?: 'RuleName' | 'MqttTopic' | undefined
                Expression?: string | undefined
                Description?: string | undefined
                RoleArn?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ExpressionType?: 'RuleName' | 'MqttTopic' | undefined
                Expression?: string | undefined
                Description?: string | undefined
                RoleArn?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ExpressionType?: 'RuleName' | 'MqttTopic' | undefined
                Expression?: string | undefined
                Description?: string | undefined
                RoleArn?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                ExpressionType?: 'RuleName' | 'MqttTopic' | undefined
                Expression?: string | undefined
                Description?: string | undefined
                RoleArn?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/device-profiles/:Id': {
      $delete:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteDeviceProfileResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetDeviceProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/fuota-tasks/:Id': {
      $delete:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteFuotaTaskResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetFuotaTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $put:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { LoRaWAN?: { StartTime?: StartTime | undefined } | undefined } }
            output: StartFuotaTaskResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { LoRaWAN?: { StartTime?: StartTime | undefined } | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { LoRaWAN?: { StartTime?: StartTime | undefined } | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { LoRaWAN?: { StartTime?: StartTime | undefined } | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { LoRaWAN?: { StartTime?: StartTime | undefined } | undefined } }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { LoRaWAN?: { StartTime?: StartTime | undefined } | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { LoRaWAN?: { StartTime?: StartTime | undefined } | undefined } }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
      $patch:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?: { RfRegion?: SupportedRfRegion | undefined } | undefined
                FirmwareUpdateImage?: string | undefined
                FirmwareUpdateRole?: string | undefined
                RedundancyPercent?: number | undefined
                FragmentSizeBytes?: number | undefined
                FragmentIntervalMS?: number | undefined
              }
            }
            output: UpdateFuotaTaskResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?: { RfRegion?: SupportedRfRegion | undefined } | undefined
                FirmwareUpdateImage?: string | undefined
                FirmwareUpdateRole?: string | undefined
                RedundancyPercent?: number | undefined
                FragmentSizeBytes?: number | undefined
                FragmentIntervalMS?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?: { RfRegion?: SupportedRfRegion | undefined } | undefined
                FirmwareUpdateImage?: string | undefined
                FirmwareUpdateRole?: string | undefined
                RedundancyPercent?: number | undefined
                FragmentSizeBytes?: number | undefined
                FragmentIntervalMS?: number | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?: { RfRegion?: SupportedRfRegion | undefined } | undefined
                FirmwareUpdateImage?: string | undefined
                FirmwareUpdateRole?: string | undefined
                RedundancyPercent?: number | undefined
                FragmentSizeBytes?: number | undefined
                FragmentIntervalMS?: number | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?: { RfRegion?: SupportedRfRegion | undefined } | undefined
                FirmwareUpdateImage?: string | undefined
                FirmwareUpdateRole?: string | undefined
                RedundancyPercent?: number | undefined
                FragmentSizeBytes?: number | undefined
                FragmentIntervalMS?: number | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?: { RfRegion?: SupportedRfRegion | undefined } | undefined
                FirmwareUpdateImage?: string | undefined
                FirmwareUpdateRole?: string | undefined
                RedundancyPercent?: number | undefined
                FragmentSizeBytes?: number | undefined
                FragmentIntervalMS?: number | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?: { RfRegion?: SupportedRfRegion | undefined } | undefined
                FirmwareUpdateImage?: string | undefined
                FirmwareUpdateRole?: string | undefined
                RedundancyPercent?: number | undefined
                FragmentSizeBytes?: number | undefined
                FragmentIntervalMS?: number | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/multicast-groups/:Id': {
      $delete:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteMulticastGroupResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetMulticastGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $patch:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?:
                  | { RfRegion?: SupportedRfRegion | undefined; DlClass?: DlClass | undefined }
                  | undefined
              }
            }
            output: UpdateMulticastGroupResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?:
                  | { RfRegion?: SupportedRfRegion | undefined; DlClass?: DlClass | undefined }
                  | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?:
                  | { RfRegion?: SupportedRfRegion | undefined; DlClass?: DlClass | undefined }
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?:
                  | { RfRegion?: SupportedRfRegion | undefined; DlClass?: DlClass | undefined }
                  | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?:
                  | { RfRegion?: SupportedRfRegion | undefined; DlClass?: DlClass | undefined }
                  | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?:
                  | { RfRegion?: SupportedRfRegion | undefined; DlClass?: DlClass | undefined }
                  | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?:
                  | { RfRegion?: SupportedRfRegion | undefined; DlClass?: DlClass | undefined }
                  | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/network-analyzer-configurations/:ConfigurationName': {
      $delete:
        | {
            input: { param: { ConfigurationName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteNetworkAnalyzerConfigurationResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { ConfigurationName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ConfigurationName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ConfigurationName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ConfigurationName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { ConfigurationName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { ConfigurationName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetNetworkAnalyzerConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConfigurationName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ConfigurationName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ConfigurationName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ConfigurationName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $patch:
        | {
            input: { param: { ConfigurationName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                TraceContent?:
                  | {
                      WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | undefined
                      LogLevel?: LogLevel | undefined
                    }
                  | undefined
                WirelessDevicesToAdd?: WirelessDeviceId[] | undefined
                WirelessDevicesToRemove?: WirelessDeviceId[] | undefined
                WirelessGatewaysToAdd?: WirelessGatewayId[] | undefined
                WirelessGatewaysToRemove?: WirelessGatewayId[] | undefined
                Description?: string | undefined
              }
            }
            output: UpdateNetworkAnalyzerConfigurationResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { ConfigurationName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                TraceContent?:
                  | {
                      WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | undefined
                      LogLevel?: LogLevel | undefined
                    }
                  | undefined
                WirelessDevicesToAdd?: WirelessDeviceId[] | undefined
                WirelessDevicesToRemove?: WirelessDeviceId[] | undefined
                WirelessGatewaysToAdd?: WirelessGatewayId[] | undefined
                WirelessGatewaysToRemove?: WirelessGatewayId[] | undefined
                Description?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ConfigurationName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                TraceContent?:
                  | {
                      WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | undefined
                      LogLevel?: LogLevel | undefined
                    }
                  | undefined
                WirelessDevicesToAdd?: WirelessDeviceId[] | undefined
                WirelessDevicesToRemove?: WirelessDeviceId[] | undefined
                WirelessGatewaysToAdd?: WirelessGatewayId[] | undefined
                WirelessGatewaysToRemove?: WirelessGatewayId[] | undefined
                Description?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConfigurationName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                TraceContent?:
                  | {
                      WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | undefined
                      LogLevel?: LogLevel | undefined
                    }
                  | undefined
                WirelessDevicesToAdd?: WirelessDeviceId[] | undefined
                WirelessDevicesToRemove?: WirelessDeviceId[] | undefined
                WirelessGatewaysToAdd?: WirelessGatewayId[] | undefined
                WirelessGatewaysToRemove?: WirelessGatewayId[] | undefined
                Description?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ConfigurationName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                TraceContent?:
                  | {
                      WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | undefined
                      LogLevel?: LogLevel | undefined
                    }
                  | undefined
                WirelessDevicesToAdd?: WirelessDeviceId[] | undefined
                WirelessDevicesToRemove?: WirelessDeviceId[] | undefined
                WirelessGatewaysToAdd?: WirelessGatewayId[] | undefined
                WirelessGatewaysToRemove?: WirelessGatewayId[] | undefined
                Description?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ConfigurationName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                TraceContent?:
                  | {
                      WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo | undefined
                      LogLevel?: LogLevel | undefined
                    }
                  | undefined
                WirelessDevicesToAdd?: WirelessDeviceId[] | undefined
                WirelessDevicesToRemove?: WirelessDeviceId[] | undefined
                WirelessGatewaysToAdd?: WirelessGatewayId[] | undefined
                WirelessGatewaysToRemove?: WirelessGatewayId[] | undefined
                Description?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/wireless-devices/:Id/data#messageId': {
      $delete:
        | {
            input: { param: { Id: string } } & {
              query: { messageId: string; WirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteQueuedMessagesResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              query: { messageId: string; WirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              query: { messageId: string; WirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              query: { messageId: string; WirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              query: { messageId: string; WirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              query: { messageId: string; WirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/service-profiles/:Id': {
      $delete:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteServiceProfileResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetServiceProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/wireless-devices/:Id': {
      $delete:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteWirelessDeviceResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $patch:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName?: string | undefined
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?:
                  | {
                      DeviceProfileId?: {} | undefined
                      ServiceProfileId?: {} | undefined
                      AbpV1_1?: { FCntStart?: {} | undefined } | undefined
                      AbpV1_0_x?: { FCntStart?: {} | undefined } | undefined
                      FPorts?:
                        | {
                            Positioning?:
                              | {
                                  ClockSync?: FPort | undefined
                                  Stream?: FPort | undefined
                                  Gnss?: FPort | undefined
                                }
                              | undefined
                            Applications?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                Positioning?: 'Enabled' | 'Disabled' | undefined
              }
            }
            output: UpdateWirelessDeviceResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName?: string | undefined
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?:
                  | {
                      DeviceProfileId?: {} | undefined
                      ServiceProfileId?: {} | undefined
                      AbpV1_1?: { FCntStart?: {} | undefined } | undefined
                      AbpV1_0_x?: { FCntStart?: {} | undefined } | undefined
                      FPorts?:
                        | {
                            Positioning?:
                              | {
                                  ClockSync?: FPort | undefined
                                  Stream?: FPort | undefined
                                  Gnss?: FPort | undefined
                                }
                              | undefined
                            Applications?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                Positioning?: 'Enabled' | 'Disabled' | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName?: string | undefined
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?:
                  | {
                      DeviceProfileId?: {} | undefined
                      ServiceProfileId?: {} | undefined
                      AbpV1_1?: { FCntStart?: {} | undefined } | undefined
                      AbpV1_0_x?: { FCntStart?: {} | undefined } | undefined
                      FPorts?:
                        | {
                            Positioning?:
                              | {
                                  ClockSync?: FPort | undefined
                                  Stream?: FPort | undefined
                                  Gnss?: FPort | undefined
                                }
                              | undefined
                            Applications?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                Positioning?: 'Enabled' | 'Disabled' | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName?: string | undefined
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?:
                  | {
                      DeviceProfileId?: {} | undefined
                      ServiceProfileId?: {} | undefined
                      AbpV1_1?: { FCntStart?: {} | undefined } | undefined
                      AbpV1_0_x?: { FCntStart?: {} | undefined } | undefined
                      FPorts?:
                        | {
                            Positioning?:
                              | {
                                  ClockSync?: FPort | undefined
                                  Stream?: FPort | undefined
                                  Gnss?: FPort | undefined
                                }
                              | undefined
                            Applications?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                Positioning?: 'Enabled' | 'Disabled' | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName?: string | undefined
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?:
                  | {
                      DeviceProfileId?: {} | undefined
                      ServiceProfileId?: {} | undefined
                      AbpV1_1?: { FCntStart?: {} | undefined } | undefined
                      AbpV1_0_x?: { FCntStart?: {} | undefined } | undefined
                      FPorts?:
                        | {
                            Positioning?:
                              | {
                                  ClockSync?: FPort | undefined
                                  Stream?: FPort | undefined
                                  Gnss?: FPort | undefined
                                }
                              | undefined
                            Applications?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                Positioning?: 'Enabled' | 'Disabled' | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName?: string | undefined
                Name?: string | undefined
                Description?: string | undefined
                LoRaWAN?:
                  | {
                      DeviceProfileId?: {} | undefined
                      ServiceProfileId?: {} | undefined
                      AbpV1_1?: { FCntStart?: {} | undefined } | undefined
                      AbpV1_0_x?: { FCntStart?: {} | undefined } | undefined
                      FPorts?:
                        | {
                            Positioning?:
                              | {
                                  ClockSync?: FPort | undefined
                                  Stream?: FPort | undefined
                                  Gnss?: FPort | undefined
                                }
                              | undefined
                            Applications?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                Positioning?: 'Enabled' | 'Disabled' | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/wireless_device_import_task/:Id': {
      $delete:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteWirelessDeviceImportTaskResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetWirelessDeviceImportTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
      $patch:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Sidewalk: { DeviceCreationFile?: {} | undefined } } }
            output: UpdateWirelessDeviceImportTaskResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Sidewalk: { DeviceCreationFile?: {} | undefined } } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Sidewalk: { DeviceCreationFile?: {} | undefined } } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Sidewalk: { DeviceCreationFile?: {} | undefined } } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Sidewalk: { DeviceCreationFile?: {} | undefined } } }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Sidewalk: { DeviceCreationFile?: {} | undefined } } }
            output: ConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Sidewalk: { DeviceCreationFile?: {} | undefined } } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/wireless-gateways/:Id': {
      $delete:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteWirelessGatewayResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $patch:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                JoinEuiFilters?: JoinEuiRange[] | undefined
                NetIdFilters?: NetId[] | undefined
                MaxEirp?: number | undefined
              }
            }
            output: UpdateWirelessGatewayResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                JoinEuiFilters?: JoinEuiRange[] | undefined
                NetIdFilters?: NetId[] | undefined
                MaxEirp?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                JoinEuiFilters?: JoinEuiRange[] | undefined
                NetIdFilters?: NetId[] | undefined
                MaxEirp?: number | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                JoinEuiFilters?: JoinEuiRange[] | undefined
                NetIdFilters?: NetId[] | undefined
                MaxEirp?: number | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                JoinEuiFilters?: JoinEuiRange[] | undefined
                NetIdFilters?: NetId[] | undefined
                MaxEirp?: number | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Name?: string | undefined
                Description?: string | undefined
                JoinEuiFilters?: JoinEuiRange[] | undefined
                NetIdFilters?: NetId[] | undefined
                MaxEirp?: number | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/wireless-gateway-task-definitions/:Id': {
      $delete:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteWirelessGatewayTaskDefinitionResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetWirelessGatewayTaskDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/wireless-devices/:Identifier/deregister': {
      $patch:
        | {
            input: { param: { Identifier: string } } & {
              query: { WirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeregisterWirelessDeviceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Identifier: string } } & {
              query: { WirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Identifier: string } } & {
              query: { WirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Identifier: string } } & {
              query: { WirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Identifier: string } } & {
              query: { WirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/partner-accounts/:PartnerAccountId#partnerType': {
      $delete:
        | {
            input: { param: { PartnerAccountId: string } } & {
              query: { partnerType: 'Sidewalk' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DisassociateAwsAccountFromPartnerAccountResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { PartnerAccountId: string } } & {
              query: { partnerType: 'Sidewalk' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { PartnerAccountId: string } } & {
              query: { partnerType: 'Sidewalk' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { PartnerAccountId: string } } & {
              query: { partnerType: 'Sidewalk' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { PartnerAccountId: string } } & {
              query: { partnerType: 'Sidewalk' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { param: { PartnerAccountId: string } } & {
              query: { partnerType: 'Sidewalk' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetPartnerAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PartnerAccountId: string } } & {
              query: { partnerType: 'Sidewalk' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { PartnerAccountId: string } } & {
              query: { partnerType: 'Sidewalk' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { PartnerAccountId: string } } & {
              query: { partnerType: 'Sidewalk' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { PartnerAccountId: string } } & {
              query: { partnerType: 'Sidewalk' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
      $patch:
        | {
            input: { param: { PartnerAccountId: string } } & {
              query: { partnerType: 'Sidewalk' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Sidewalk: { AppServerPrivateKey?: {} | undefined } } }
            output: UpdatePartnerAccountResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { PartnerAccountId: string } } & {
              query: { partnerType: 'Sidewalk' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Sidewalk: { AppServerPrivateKey?: {} | undefined } } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { PartnerAccountId: string } } & {
              query: { partnerType: 'Sidewalk' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Sidewalk: { AppServerPrivateKey?: {} | undefined } } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { PartnerAccountId: string } } & {
              query: { partnerType: 'Sidewalk' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Sidewalk: { AppServerPrivateKey?: {} | undefined } } }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { PartnerAccountId: string } } & {
              query: { partnerType: 'Sidewalk' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Sidewalk: { AppServerPrivateKey?: {} | undefined } } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/fuota-tasks/:Id/multicast-groups/:MulticastGroupId': {
      $delete:
        | {
            input: { param: { Id: string; MulticastGroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DisassociateMulticastGroupFromFuotaTaskResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string; MulticastGroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string; MulticastGroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string; MulticastGroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string; MulticastGroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string; MulticastGroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/fuota-tasks/:Id/wireless-devices/:WirelessDeviceId': {
      $delete:
        | {
            input: { param: { Id: string; WirelessDeviceId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DisassociateWirelessDeviceFromFuotaTaskResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string; WirelessDeviceId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string; WirelessDeviceId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string; WirelessDeviceId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string; WirelessDeviceId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string; WirelessDeviceId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string; WirelessDeviceId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/multicast-groups/:Id/wireless-devices/:WirelessDeviceId': {
      $delete:
        | {
            input: { param: { Id: string; WirelessDeviceId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DisassociateWirelessDeviceFromMulticastGroupResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string; WirelessDeviceId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string; WirelessDeviceId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string; WirelessDeviceId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string; WirelessDeviceId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string; WirelessDeviceId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/event-configurations-resource-types': {
      $get:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetEventConfigurationByResourceTypesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
      $patch:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceRegistrationState?:
                  | { Sidewalk?: { WirelessDeviceEventTopic?: {} | undefined } | undefined }
                  | undefined
                Proximity?:
                  | { Sidewalk?: { WirelessDeviceEventTopic?: {} | undefined } | undefined }
                  | undefined
                Join?:
                  | { LoRaWAN?: { WirelessDeviceEventTopic?: {} | undefined } | undefined }
                  | undefined
                ConnectionStatus?:
                  | { LoRaWAN?: { WirelessGatewayEventTopic?: {} | undefined } | undefined }
                  | undefined
                MessageDeliveryStatus?:
                  | { Sidewalk?: SidewalkResourceTypeEventConfiguration | undefined }
                  | undefined
              }
            }
            output: UpdateEventConfigurationByResourceTypesResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceRegistrationState?:
                  | { Sidewalk?: { WirelessDeviceEventTopic?: {} | undefined } | undefined }
                  | undefined
                Proximity?:
                  | { Sidewalk?: { WirelessDeviceEventTopic?: {} | undefined } | undefined }
                  | undefined
                Join?:
                  | { LoRaWAN?: { WirelessDeviceEventTopic?: {} | undefined } | undefined }
                  | undefined
                ConnectionStatus?:
                  | { LoRaWAN?: { WirelessGatewayEventTopic?: {} | undefined } | undefined }
                  | undefined
                MessageDeliveryStatus?:
                  | { Sidewalk?: SidewalkResourceTypeEventConfiguration | undefined }
                  | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceRegistrationState?:
                  | { Sidewalk?: { WirelessDeviceEventTopic?: {} | undefined } | undefined }
                  | undefined
                Proximity?:
                  | { Sidewalk?: { WirelessDeviceEventTopic?: {} | undefined } | undefined }
                  | undefined
                Join?:
                  | { LoRaWAN?: { WirelessDeviceEventTopic?: {} | undefined } | undefined }
                  | undefined
                ConnectionStatus?:
                  | { LoRaWAN?: { WirelessGatewayEventTopic?: {} | undefined } | undefined }
                  | undefined
                MessageDeliveryStatus?:
                  | { Sidewalk?: SidewalkResourceTypeEventConfiguration | undefined }
                  | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceRegistrationState?:
                  | { Sidewalk?: { WirelessDeviceEventTopic?: {} | undefined } | undefined }
                  | undefined
                Proximity?:
                  | { Sidewalk?: { WirelessDeviceEventTopic?: {} | undefined } | undefined }
                  | undefined
                Join?:
                  | { LoRaWAN?: { WirelessDeviceEventTopic?: {} | undefined } | undefined }
                  | undefined
                ConnectionStatus?:
                  | { LoRaWAN?: { WirelessGatewayEventTopic?: {} | undefined } | undefined }
                  | undefined
                MessageDeliveryStatus?:
                  | { Sidewalk?: SidewalkResourceTypeEventConfiguration | undefined }
                  | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceRegistrationState?:
                  | { Sidewalk?: { WirelessDeviceEventTopic?: {} | undefined } | undefined }
                  | undefined
                Proximity?:
                  | { Sidewalk?: { WirelessDeviceEventTopic?: {} | undefined } | undefined }
                  | undefined
                Join?:
                  | { LoRaWAN?: { WirelessDeviceEventTopic?: {} | undefined } | undefined }
                  | undefined
                ConnectionStatus?:
                  | { LoRaWAN?: { WirelessGatewayEventTopic?: {} | undefined } | undefined }
                  | undefined
                MessageDeliveryStatus?:
                  | { Sidewalk?: SidewalkResourceTypeEventConfiguration | undefined }
                  | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/log-levels': {
      $get:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetLogLevelsByResourceTypesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 484
          }
      $delete:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResetAllResourceLogLevelsResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 484
          }
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DefaultLogLevel?: 'INFO' | 'ERROR' | 'DISABLED' | undefined
                WirelessDeviceLogOptions?: WirelessDeviceLogOption[] | undefined
                WirelessGatewayLogOptions?: WirelessGatewayLogOption[] | undefined
              }
            }
            output: UpdateLogLevelsByResourceTypesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DefaultLogLevel?: 'INFO' | 'ERROR' | 'DISABLED' | undefined
                WirelessDeviceLogOptions?: WirelessDeviceLogOption[] | undefined
                WirelessGatewayLogOptions?: WirelessGatewayLogOption[] | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DefaultLogLevel?: 'INFO' | 'ERROR' | 'DISABLED' | undefined
                WirelessDeviceLogOptions?: WirelessDeviceLogOption[] | undefined
                WirelessGatewayLogOptions?: WirelessGatewayLogOption[] | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DefaultLogLevel?: 'INFO' | 'ERROR' | 'DISABLED' | undefined
                WirelessDeviceLogOptions?: WirelessDeviceLogOption[] | undefined
                WirelessGatewayLogOptions?: WirelessGatewayLogOption[] | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DefaultLogLevel?: 'INFO' | 'ERROR' | 'DISABLED' | undefined
                WirelessDeviceLogOptions?: WirelessDeviceLogOption[] | undefined
                WirelessGatewayLogOptions?: WirelessGatewayLogOption[] | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DefaultLogLevel?: 'INFO' | 'ERROR' | 'DISABLED' | undefined
                WirelessDeviceLogOptions?: WirelessDeviceLogOption[] | undefined
                WirelessGatewayLogOptions?: WirelessGatewayLogOption[] | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DefaultLogLevel?: 'INFO' | 'ERROR' | 'DISABLED' | undefined
                WirelessDeviceLogOptions?: WirelessDeviceLogOption[] | undefined
                WirelessGatewayLogOptions?: WirelessGatewayLogOption[] | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/positions/:ResourceIdentifier#resourceType': {
      $get:
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetPositionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
      $patch:
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Position: PositionCoordinateValue[] } }
            output: UpdatePositionResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Position: PositionCoordinateValue[] } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Position: PositionCoordinateValue[] } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Position: PositionCoordinateValue[] } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Position: PositionCoordinateValue[] } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Position: PositionCoordinateValue[] } }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/position-configurations/:ResourceIdentifier#resourceType': {
      $get:
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetPositionConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
      $put:
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Solvers?: { SemtechGnss?: { Status: {}; Fec: {} } | undefined } | undefined
                Destination?: string | undefined
              }
            }
            output: PutPositionConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Solvers?: { SemtechGnss?: { Status: {}; Fec: {} } | undefined } | undefined
                Destination?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Solvers?: { SemtechGnss?: { Status: {}; Fec: {} } | undefined } | undefined
                Destination?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Solvers?: { SemtechGnss?: { Status: {}; Fec: {} } | undefined } | undefined
                Destination?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Solvers?: { SemtechGnss?: { Status: {}; Fec: {} } | undefined } | undefined
                Destination?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                Solvers?: { SemtechGnss?: { Status: {}; Fec: {} } | undefined } | undefined
                Destination?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/position-estimate': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                WiFiAccessPoints?: WiFiAccessPoint[] | undefined
                CellTowers?:
                  | {
                      Gsm?: {} | undefined
                      Wcdma?: {} | undefined
                      Tdscdma?: {} | undefined
                      Lte?: {} | undefined
                      Cdma?: {} | undefined
                    }
                  | undefined
                Ip?: { IpAddress?: {} | undefined } | undefined
                Gnss?:
                  | {
                      Payload?: {} | undefined
                      CaptureTime?: {} | undefined
                      CaptureTimeAccuracy?: {} | undefined
                      AssistPosition?: {} | undefined
                      AssistAltitude?: {} | undefined
                      Use2DSolver?: {} | undefined
                    }
                  | undefined
                Timestamp?: string | undefined
              }
            }
            output: GetPositionEstimateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                WiFiAccessPoints?: WiFiAccessPoint[] | undefined
                CellTowers?:
                  | {
                      Gsm?: {} | undefined
                      Wcdma?: {} | undefined
                      Tdscdma?: {} | undefined
                      Lte?: {} | undefined
                      Cdma?: {} | undefined
                    }
                  | undefined
                Ip?: { IpAddress?: {} | undefined } | undefined
                Gnss?:
                  | {
                      Payload?: {} | undefined
                      CaptureTime?: {} | undefined
                      CaptureTimeAccuracy?: {} | undefined
                      AssistPosition?: {} | undefined
                      AssistAltitude?: {} | undefined
                      Use2DSolver?: {} | undefined
                    }
                  | undefined
                Timestamp?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                WiFiAccessPoints?: WiFiAccessPoint[] | undefined
                CellTowers?:
                  | {
                      Gsm?: {} | undefined
                      Wcdma?: {} | undefined
                      Tdscdma?: {} | undefined
                      Lte?: {} | undefined
                      Cdma?: {} | undefined
                    }
                  | undefined
                Ip?: { IpAddress?: {} | undefined } | undefined
                Gnss?:
                  | {
                      Payload?: {} | undefined
                      CaptureTime?: {} | undefined
                      CaptureTimeAccuracy?: {} | undefined
                      AssistPosition?: {} | undefined
                      AssistAltitude?: {} | undefined
                      Use2DSolver?: {} | undefined
                    }
                  | undefined
                Timestamp?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                WiFiAccessPoints?: WiFiAccessPoint[] | undefined
                CellTowers?:
                  | {
                      Gsm?: {} | undefined
                      Wcdma?: {} | undefined
                      Tdscdma?: {} | undefined
                      Lte?: {} | undefined
                      Cdma?: {} | undefined
                    }
                  | undefined
                Ip?: { IpAddress?: {} | undefined } | undefined
                Gnss?:
                  | {
                      Payload?: {} | undefined
                      CaptureTime?: {} | undefined
                      CaptureTimeAccuracy?: {} | undefined
                      AssistPosition?: {} | undefined
                      AssistAltitude?: {} | undefined
                      Use2DSolver?: {} | undefined
                    }
                  | undefined
                Timestamp?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                WiFiAccessPoints?: WiFiAccessPoint[] | undefined
                CellTowers?:
                  | {
                      Gsm?: {} | undefined
                      Wcdma?: {} | undefined
                      Tdscdma?: {} | undefined
                      Lte?: {} | undefined
                      Cdma?: {} | undefined
                    }
                  | undefined
                Ip?: { IpAddress?: {} | undefined } | undefined
                Gnss?:
                  | {
                      Payload?: {} | undefined
                      CaptureTime?: {} | undefined
                      CaptureTimeAccuracy?: {} | undefined
                      AssistPosition?: {} | undefined
                      AssistAltitude?: {} | undefined
                      Use2DSolver?: {} | undefined
                    }
                  | undefined
                Timestamp?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                WiFiAccessPoints?: WiFiAccessPoint[] | undefined
                CellTowers?:
                  | {
                      Gsm?: {} | undefined
                      Wcdma?: {} | undefined
                      Tdscdma?: {} | undefined
                      Lte?: {} | undefined
                      Cdma?: {} | undefined
                    }
                  | undefined
                Ip?: { IpAddress?: {} | undefined } | undefined
                Gnss?:
                  | {
                      Payload?: {} | undefined
                      CaptureTime?: {} | undefined
                      CaptureTimeAccuracy?: {} | undefined
                      AssistPosition?: {} | undefined
                      AssistAltitude?: {} | undefined
                      Use2DSolver?: {} | undefined
                    }
                  | undefined
                Timestamp?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/event-configurations/:Identifier#identifierType': {
      $get:
        | {
            input: { param: { Identifier: string } } & {
              query: {
                identifierType:
                  | 'PartnerAccountId'
                  | 'DevEui'
                  | 'GatewayEui'
                  | 'WirelessDeviceId'
                  | 'WirelessGatewayId'
                partnerType?: 'Sidewalk' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetResourceEventConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Identifier: string } } & {
              query: {
                identifierType:
                  | 'PartnerAccountId'
                  | 'DevEui'
                  | 'GatewayEui'
                  | 'WirelessDeviceId'
                  | 'WirelessGatewayId'
                partnerType?: 'Sidewalk' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Identifier: string } } & {
              query: {
                identifierType:
                  | 'PartnerAccountId'
                  | 'DevEui'
                  | 'GatewayEui'
                  | 'WirelessDeviceId'
                  | 'WirelessGatewayId'
                partnerType?: 'Sidewalk' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Identifier: string } } & {
              query: {
                identifierType:
                  | 'PartnerAccountId'
                  | 'DevEui'
                  | 'GatewayEui'
                  | 'WirelessDeviceId'
                  | 'WirelessGatewayId'
                partnerType?: 'Sidewalk' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Identifier: string } } & {
              query: {
                identifierType:
                  | 'PartnerAccountId'
                  | 'DevEui'
                  | 'GatewayEui'
                  | 'WirelessDeviceId'
                  | 'WirelessGatewayId'
                partnerType?: 'Sidewalk' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Identifier: string } } & {
              query: {
                identifierType:
                  | 'PartnerAccountId'
                  | 'DevEui'
                  | 'GatewayEui'
                  | 'WirelessDeviceId'
                  | 'WirelessGatewayId'
                partnerType?: 'Sidewalk' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
      $patch:
        | {
            input: { param: { Identifier: string } } & {
              query: {
                identifierType:
                  | 'PartnerAccountId'
                  | 'DevEui'
                  | 'GatewayEui'
                  | 'WirelessDeviceId'
                  | 'WirelessGatewayId'
                partnerType?: 'Sidewalk' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceRegistrationState?:
                  | {
                      Sidewalk?: { AmazonIdEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                Proximity?:
                  | {
                      Sidewalk?: { AmazonIdEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                Join?:
                  | {
                      LoRaWAN?: { DevEuiEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                ConnectionStatus?:
                  | {
                      LoRaWAN?: { GatewayEuiEventTopic?: {} | undefined } | undefined
                      WirelessGatewayIdEventTopic?: {} | undefined
                    }
                  | undefined
                MessageDeliveryStatus?:
                  | {
                      Sidewalk?: SidewalkEventNotificationConfigurations | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
              }
            }
            output: UpdateResourceEventConfigurationResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Identifier: string } } & {
              query: {
                identifierType:
                  | 'PartnerAccountId'
                  | 'DevEui'
                  | 'GatewayEui'
                  | 'WirelessDeviceId'
                  | 'WirelessGatewayId'
                partnerType?: 'Sidewalk' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceRegistrationState?:
                  | {
                      Sidewalk?: { AmazonIdEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                Proximity?:
                  | {
                      Sidewalk?: { AmazonIdEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                Join?:
                  | {
                      LoRaWAN?: { DevEuiEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                ConnectionStatus?:
                  | {
                      LoRaWAN?: { GatewayEuiEventTopic?: {} | undefined } | undefined
                      WirelessGatewayIdEventTopic?: {} | undefined
                    }
                  | undefined
                MessageDeliveryStatus?:
                  | {
                      Sidewalk?: SidewalkEventNotificationConfigurations | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Identifier: string } } & {
              query: {
                identifierType:
                  | 'PartnerAccountId'
                  | 'DevEui'
                  | 'GatewayEui'
                  | 'WirelessDeviceId'
                  | 'WirelessGatewayId'
                partnerType?: 'Sidewalk' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceRegistrationState?:
                  | {
                      Sidewalk?: { AmazonIdEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                Proximity?:
                  | {
                      Sidewalk?: { AmazonIdEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                Join?:
                  | {
                      LoRaWAN?: { DevEuiEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                ConnectionStatus?:
                  | {
                      LoRaWAN?: { GatewayEuiEventTopic?: {} | undefined } | undefined
                      WirelessGatewayIdEventTopic?: {} | undefined
                    }
                  | undefined
                MessageDeliveryStatus?:
                  | {
                      Sidewalk?: SidewalkEventNotificationConfigurations | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Identifier: string } } & {
              query: {
                identifierType:
                  | 'PartnerAccountId'
                  | 'DevEui'
                  | 'GatewayEui'
                  | 'WirelessDeviceId'
                  | 'WirelessGatewayId'
                partnerType?: 'Sidewalk' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceRegistrationState?:
                  | {
                      Sidewalk?: { AmazonIdEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                Proximity?:
                  | {
                      Sidewalk?: { AmazonIdEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                Join?:
                  | {
                      LoRaWAN?: { DevEuiEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                ConnectionStatus?:
                  | {
                      LoRaWAN?: { GatewayEuiEventTopic?: {} | undefined } | undefined
                      WirelessGatewayIdEventTopic?: {} | undefined
                    }
                  | undefined
                MessageDeliveryStatus?:
                  | {
                      Sidewalk?: SidewalkEventNotificationConfigurations | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Identifier: string } } & {
              query: {
                identifierType:
                  | 'PartnerAccountId'
                  | 'DevEui'
                  | 'GatewayEui'
                  | 'WirelessDeviceId'
                  | 'WirelessGatewayId'
                partnerType?: 'Sidewalk' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceRegistrationState?:
                  | {
                      Sidewalk?: { AmazonIdEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                Proximity?:
                  | {
                      Sidewalk?: { AmazonIdEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                Join?:
                  | {
                      LoRaWAN?: { DevEuiEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                ConnectionStatus?:
                  | {
                      LoRaWAN?: { GatewayEuiEventTopic?: {} | undefined } | undefined
                      WirelessGatewayIdEventTopic?: {} | undefined
                    }
                  | undefined
                MessageDeliveryStatus?:
                  | {
                      Sidewalk?: SidewalkEventNotificationConfigurations | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Identifier: string } } & {
              query: {
                identifierType:
                  | 'PartnerAccountId'
                  | 'DevEui'
                  | 'GatewayEui'
                  | 'WirelessDeviceId'
                  | 'WirelessGatewayId'
                partnerType?: 'Sidewalk' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceRegistrationState?:
                  | {
                      Sidewalk?: { AmazonIdEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                Proximity?:
                  | {
                      Sidewalk?: { AmazonIdEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                Join?:
                  | {
                      LoRaWAN?: { DevEuiEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                ConnectionStatus?:
                  | {
                      LoRaWAN?: { GatewayEuiEventTopic?: {} | undefined } | undefined
                      WirelessGatewayIdEventTopic?: {} | undefined
                    }
                  | undefined
                MessageDeliveryStatus?:
                  | {
                      Sidewalk?: SidewalkEventNotificationConfigurations | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Identifier: string } } & {
              query: {
                identifierType:
                  | 'PartnerAccountId'
                  | 'DevEui'
                  | 'GatewayEui'
                  | 'WirelessDeviceId'
                  | 'WirelessGatewayId'
                partnerType?: 'Sidewalk' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceRegistrationState?:
                  | {
                      Sidewalk?: { AmazonIdEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                Proximity?:
                  | {
                      Sidewalk?: { AmazonIdEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                Join?:
                  | {
                      LoRaWAN?: { DevEuiEventTopic?: {} | undefined } | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
                ConnectionStatus?:
                  | {
                      LoRaWAN?: { GatewayEuiEventTopic?: {} | undefined } | undefined
                      WirelessGatewayIdEventTopic?: {} | undefined
                    }
                  | undefined
                MessageDeliveryStatus?:
                  | {
                      Sidewalk?: SidewalkEventNotificationConfigurations | undefined
                      WirelessDeviceIdEventTopic?: {} | undefined
                    }
                  | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/log-levels/:ResourceIdentifier#resourceType': {
      $get:
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetResourceLogLevelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 484
          }
      $put:
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { LogLevel: 'INFO' | 'ERROR' | 'DISABLED' } }
            output: PutResourceLogLevelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { LogLevel: 'INFO' | 'ERROR' | 'DISABLED' } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { LogLevel: 'INFO' | 'ERROR' | 'DISABLED' } }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { LogLevel: 'INFO' | 'ERROR' | 'DISABLED' } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { LogLevel: 'INFO' | 'ERROR' | 'DISABLED' } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { LogLevel: 'INFO' | 'ERROR' | 'DISABLED' } }
            output: ValidationException
            outputFormat: 'json'
            status: 484
          }
      $delete:
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResetResourceLogLevelResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/resource-positions/:ResourceIdentifier#resourceType': {
      $get:
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetResourcePositionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
      $patch:
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { GeoJsonPayload?: string | undefined } }
            output: UpdateResourcePositionResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { GeoJsonPayload?: string | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { GeoJsonPayload?: string | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { GeoJsonPayload?: string | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { GeoJsonPayload?: string | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ResourceIdentifier: string } } & {
              query: { resourceType: 'WirelessDevice' | 'WirelessGateway' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { GeoJsonPayload?: string | undefined } }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/service-endpoint': {
      $get:
        | {
            input: { query: { serviceType?: 'CUPS' | 'LNS' | undefined } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetServiceEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { serviceType?: 'CUPS' | 'LNS' | undefined } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { serviceType?: 'CUPS' | 'LNS' | undefined } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { serviceType?: 'CUPS' | 'LNS' | undefined } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { serviceType?: 'CUPS' | 'LNS' | undefined } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/wireless-devices/:Identifier#identifierType': {
      $get:
        | {
            input: { param: { Identifier: string } } & {
              query: {
                identifierType:
                  | 'WirelessDeviceId'
                  | 'DevEui'
                  | 'ThingName'
                  | 'SidewalkManufacturingSn'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetWirelessDeviceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Identifier: string } } & {
              query: {
                identifierType:
                  | 'WirelessDeviceId'
                  | 'DevEui'
                  | 'ThingName'
                  | 'SidewalkManufacturingSn'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Identifier: string } } & {
              query: {
                identifierType:
                  | 'WirelessDeviceId'
                  | 'DevEui'
                  | 'ThingName'
                  | 'SidewalkManufacturingSn'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Identifier: string } } & {
              query: {
                identifierType:
                  | 'WirelessDeviceId'
                  | 'DevEui'
                  | 'ThingName'
                  | 'SidewalkManufacturingSn'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Identifier: string } } & {
              query: {
                identifierType:
                  | 'WirelessDeviceId'
                  | 'DevEui'
                  | 'ThingName'
                  | 'SidewalkManufacturingSn'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Identifier: string } } & {
              query: {
                identifierType:
                  | 'WirelessDeviceId'
                  | 'DevEui'
                  | 'ThingName'
                  | 'SidewalkManufacturingSn'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/wireless-devices/:Id/statistics': {
      $get:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetWirelessDeviceStatisticsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/wireless-gateways/:Identifier#identifierType': {
      $get:
        | {
            input: { param: { Identifier: string } } & {
              query: { identifierType: 'GatewayEui' | 'WirelessGatewayId' | 'ThingName' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetWirelessGatewayResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Identifier: string } } & {
              query: { identifierType: 'GatewayEui' | 'WirelessGatewayId' | 'ThingName' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Identifier: string } } & {
              query: { identifierType: 'GatewayEui' | 'WirelessGatewayId' | 'ThingName' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Identifier: string } } & {
              query: { identifierType: 'GatewayEui' | 'WirelessGatewayId' | 'ThingName' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Identifier: string } } & {
              query: { identifierType: 'GatewayEui' | 'WirelessGatewayId' | 'ThingName' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Identifier: string } } & {
              query: { identifierType: 'GatewayEui' | 'WirelessGatewayId' | 'ThingName' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/wireless-gateways/:Id/firmware-information': {
      $get:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetWirelessGatewayFirmwareInformationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/wireless-gateways/:Id/statistics': {
      $get:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetWirelessGatewayStatisticsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/wireless_device_import_task#id': {
      $get:
        | {
            input: {
              query: {
                id: string
                maxResults?: number | undefined
                nextToken?: string | undefined
                status?: 'INITIALIZED' | 'PENDING' | 'ONBOARDED' | 'FAILED' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListDevicesForWirelessDeviceImportTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id: string
                maxResults?: number | undefined
                nextToken?: string | undefined
                status?: 'INITIALIZED' | 'PENDING' | 'ONBOARDED' | 'FAILED' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                id: string
                maxResults?: number | undefined
                nextToken?: string | undefined
                status?: 'INITIALIZED' | 'PENDING' | 'ONBOARDED' | 'FAILED' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                id: string
                maxResults?: number | undefined
                nextToken?: string | undefined
                status?: 'INITIALIZED' | 'PENDING' | 'ONBOARDED' | 'FAILED' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                id: string
                maxResults?: number | undefined
                nextToken?: string | undefined
                status?: 'INITIALIZED' | 'PENDING' | 'ONBOARDED' | 'FAILED' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: {
                id: string
                maxResults?: number | undefined
                nextToken?: string | undefined
                status?: 'INITIALIZED' | 'PENDING' | 'ONBOARDED' | 'FAILED' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: {
                id: string
                maxResults?: number | undefined
                nextToken?: string | undefined
                status?: 'INITIALIZED' | 'PENDING' | 'ONBOARDED' | 'FAILED' | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/event-configurations#resourceType': {
      $get:
        | {
            input: {
              query: {
                resourceType: 'SidewalkAccount' | 'WirelessDevice' | 'WirelessGateway'
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListEventConfigurationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                resourceType: 'SidewalkAccount' | 'WirelessDevice' | 'WirelessGateway'
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                resourceType: 'SidewalkAccount' | 'WirelessDevice' | 'WirelessGateway'
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                resourceType: 'SidewalkAccount' | 'WirelessDevice' | 'WirelessGateway'
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                resourceType: 'SidewalkAccount' | 'WirelessDevice' | 'WirelessGateway'
                maxResults?: number | undefined
                nextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/fuota-tasks/:Id/multicast-groups': {
      $get:
        | {
            input: { param: { Id: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListMulticastGroupsByFuotaTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/position-configurations': {
      $get:
        | {
            input: {
              query: {
                resourceType?: 'WirelessDevice' | 'WirelessGateway' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListPositionConfigurationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                resourceType?: 'WirelessDevice' | 'WirelessGateway' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                resourceType?: 'WirelessDevice' | 'WirelessGateway' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                resourceType?: 'WirelessDevice' | 'WirelessGateway' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                resourceType?: 'WirelessDevice' | 'WirelessGateway' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/wireless-devices/:Id/data': {
      $get:
        | {
            input: { param: { Id: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                WirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListQueuedMessagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                WirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                WirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                WirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                WirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                WirelessDeviceType?: 'Sidewalk' | 'LoRaWAN' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
      $post:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                TransmitMode: number
                PayloadData: string
                WirelessMetadata?:
                  | {
                      LoRaWAN?:
                        | {
                            FPort?: FPort | undefined
                            ParticipatingGateways?:
                              | { DownlinkMode: {}; GatewayList: {}; TransmissionInterval: {} }
                              | undefined
                          }
                        | undefined
                      Sidewalk?:
                        | {
                            Seq?: {} | undefined
                            MessageType?: MessageType | undefined
                            AckModeRetryDurationSecs?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: SendDataToWirelessDeviceResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                TransmitMode: number
                PayloadData: string
                WirelessMetadata?:
                  | {
                      LoRaWAN?:
                        | {
                            FPort?: FPort | undefined
                            ParticipatingGateways?:
                              | { DownlinkMode: {}; GatewayList: {}; TransmissionInterval: {} }
                              | undefined
                          }
                        | undefined
                      Sidewalk?:
                        | {
                            Seq?: {} | undefined
                            MessageType?: MessageType | undefined
                            AckModeRetryDurationSecs?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                TransmitMode: number
                PayloadData: string
                WirelessMetadata?:
                  | {
                      LoRaWAN?:
                        | {
                            FPort?: FPort | undefined
                            ParticipatingGateways?:
                              | { DownlinkMode: {}; GatewayList: {}; TransmissionInterval: {} }
                              | undefined
                          }
                        | undefined
                      Sidewalk?:
                        | {
                            Seq?: {} | undefined
                            MessageType?: MessageType | undefined
                            AckModeRetryDurationSecs?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                TransmitMode: number
                PayloadData: string
                WirelessMetadata?:
                  | {
                      LoRaWAN?:
                        | {
                            FPort?: FPort | undefined
                            ParticipatingGateways?:
                              | { DownlinkMode: {}; GatewayList: {}; TransmissionInterval: {} }
                              | undefined
                          }
                        | undefined
                      Sidewalk?:
                        | {
                            Seq?: {} | undefined
                            MessageType?: MessageType | undefined
                            AckModeRetryDurationSecs?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                TransmitMode: number
                PayloadData: string
                WirelessMetadata?:
                  | {
                      LoRaWAN?:
                        | {
                            FPort?: FPort | undefined
                            ParticipatingGateways?:
                              | { DownlinkMode: {}; GatewayList: {}; TransmissionInterval: {} }
                              | undefined
                          }
                        | undefined
                      Sidewalk?:
                        | {
                            Seq?: {} | undefined
                            MessageType?: MessageType | undefined
                            AckModeRetryDurationSecs?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/tags#resourceArn': {
      $get:
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListTagsForResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $post:
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Tags: Tag[] } }
            output: TagResourceResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Tags: Tag[] } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Tags: Tag[] } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Tags: Tag[] } }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Tags: Tag[] } }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Tags: Tag[] } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Tags: Tag[] } }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/wireless_device_import_tasks': {
      $get:
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListWirelessDeviceImportTasksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/multicast-groups/:Id/data': {
      $post:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                PayloadData: string
                WirelessMetadata: { LoRaWAN?: LoRaWANMulticastMetadata | undefined }
              }
            }
            output: SendDataToMulticastGroupResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                PayloadData: string
                WirelessMetadata: { LoRaWAN?: LoRaWANMulticastMetadata | undefined }
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                PayloadData: string
                WirelessMetadata: { LoRaWAN?: LoRaWANMulticastMetadata | undefined }
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                PayloadData: string
                WirelessMetadata: { LoRaWAN?: LoRaWANMulticastMetadata | undefined }
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                PayloadData: string
                WirelessMetadata: { LoRaWAN?: LoRaWANMulticastMetadata | undefined }
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                PayloadData: string
                WirelessMetadata: { LoRaWAN?: LoRaWANMulticastMetadata | undefined }
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                PayloadData: string
                WirelessMetadata: { LoRaWAN?: LoRaWANMulticastMetadata | undefined }
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/multicast-groups/:Id/bulk': {
      $patch:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { QueryString?: string | undefined; Tags?: Tag[] | undefined } }
            output: StartBulkAssociateWirelessDeviceWithMulticastGroupResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { QueryString?: string | undefined; Tags?: Tag[] | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { QueryString?: string | undefined; Tags?: Tag[] | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { QueryString?: string | undefined; Tags?: Tag[] | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { QueryString?: string | undefined; Tags?: Tag[] | undefined } }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { QueryString?: string | undefined; Tags?: Tag[] | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $post:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { QueryString?: string | undefined; Tags?: Tag[] | undefined } }
            output: StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { QueryString?: string | undefined; Tags?: Tag[] | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { QueryString?: string | undefined; Tags?: Tag[] | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { QueryString?: string | undefined; Tags?: Tag[] | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { QueryString?: string | undefined; Tags?: Tag[] | undefined } }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { QueryString?: string | undefined; Tags?: Tag[] | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/wireless_single_device_import_task': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName: string
                ClientRequestToken?: string | undefined
                DeviceName?: string | undefined
                Tags?: Tag[] | undefined
                Sidewalk: { SidewalkManufacturingSn?: {} | undefined }
              }
            }
            output: StartSingleWirelessDeviceImportTaskResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName: string
                ClientRequestToken?: string | undefined
                DeviceName?: string | undefined
                Tags?: Tag[] | undefined
                Sidewalk: { SidewalkManufacturingSn?: {} | undefined }
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName: string
                ClientRequestToken?: string | undefined
                DeviceName?: string | undefined
                Tags?: Tag[] | undefined
                Sidewalk: { SidewalkManufacturingSn?: {} | undefined }
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName: string
                ClientRequestToken?: string | undefined
                DeviceName?: string | undefined
                Tags?: Tag[] | undefined
                Sidewalk: { SidewalkManufacturingSn?: {} | undefined }
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName: string
                ClientRequestToken?: string | undefined
                DeviceName?: string | undefined
                Tags?: Tag[] | undefined
                Sidewalk: { SidewalkManufacturingSn?: {} | undefined }
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName: string
                ClientRequestToken?: string | undefined
                DeviceName?: string | undefined
                Tags?: Tag[] | undefined
                Sidewalk: { SidewalkManufacturingSn?: {} | undefined }
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName: string
                ClientRequestToken?: string | undefined
                DeviceName?: string | undefined
                Tags?: Tag[] | undefined
                Sidewalk: { SidewalkManufacturingSn?: {} | undefined }
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/wireless_device_import_task': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName: string
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
                Sidewalk: { DeviceCreationFile?: {} | undefined; Role?: {} | undefined }
              }
            }
            output: StartWirelessDeviceImportTaskResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName: string
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
                Sidewalk: { DeviceCreationFile?: {} | undefined; Role?: {} | undefined }
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName: string
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
                Sidewalk: { DeviceCreationFile?: {} | undefined; Role?: {} | undefined }
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName: string
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
                Sidewalk: { DeviceCreationFile?: {} | undefined; Role?: {} | undefined }
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName: string
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
                Sidewalk: { DeviceCreationFile?: {} | undefined; Role?: {} | undefined }
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName: string
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
                Sidewalk: { DeviceCreationFile?: {} | undefined; Role?: {} | undefined }
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DestinationName: string
                ClientRequestToken?: string | undefined
                Tags?: Tag[] | undefined
                Sidewalk: { DeviceCreationFile?: {} | undefined; Role?: {} | undefined }
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/wireless-devices/:Id/test': {
      $post:
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TestWirelessDeviceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/tags#resourceArn&tagKeys': {
      $delete:
        | {
            input: { query: { resourceArn: string; tagKeys: TagKey[] } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UntagResourceResponse
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { query: { resourceArn: string; tagKeys: TagKey[] } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { resourceArn: string; tagKeys: TagKey[] } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { resourceArn: string; tagKeys: TagKey[] } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { resourceArn: string; tagKeys: TagKey[] } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { resourceArn: string; tagKeys: TagKey[] } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  },
  '/'
>
export default routes
