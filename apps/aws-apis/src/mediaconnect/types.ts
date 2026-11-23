type AddBridgeOutputRequest = {
  NetworkOutput?:
    | { IpAddress: {}; Name: {}; NetworkName: {}; Port: {}; Protocol: {}; Ttl: {} }
    | undefined
}
type AddBridgeOutputsResponse = { BridgeArn?: {} | undefined; Outputs?: {} | undefined }
type AddBridgeSourceRequest = {
  FlowSource?:
    | {
        FlowArn: {}
        FlowVpcInterfaceAttachment?: { VpcInterfaceName?: {} | undefined } | undefined
        Name: {}
      }
    | undefined
  NetworkSource?: { MulticastIp: {}; Name: {}; NetworkName: {}; Port: {}; Protocol: {} } | undefined
}
type AddBridgeSourcesResponse = { BridgeArn?: {} | undefined; Sources?: {} | undefined }
type AddMediaStreamRequest = {
  Attributes?:
    | {
        Fmtp?:
          | {
              ChannelOrder?: {} | undefined
              Colorimetry?: {} | undefined
              ExactFramerate?: {} | undefined
              Par?: {} | undefined
              Range?: {} | undefined
              ScanMode?: {} | undefined
              Tcs?: {} | undefined
            }
          | undefined
        Lang?: {} | undefined
      }
    | undefined
  ClockRate?: {} | undefined
  Description?: {} | undefined
  MediaStreamId: {}
  MediaStreamName: {}
  MediaStreamType: {}
  VideoFormat?: {} | undefined
}
type AddFlowMediaStreamsResponse = { FlowArn?: {} | undefined; MediaStreams?: {} | undefined }
type AddOutputRequest = {
  CidrAllowList?: {} | undefined
  Description?: {} | undefined
  Destination?: {} | undefined
  Encryption?:
    | {
        Algorithm?: {} | undefined
        ConstantInitializationVector?: {} | undefined
        DeviceId?: {} | undefined
        KeyType?: {} | undefined
        Region?: {} | undefined
        ResourceId?: {} | undefined
        RoleArn: {}
        SecretArn?: {} | undefined
        Url?: {} | undefined
      }
    | undefined
  MaxLatency?: {} | undefined
  MediaStreamOutputConfigurations?: {} | undefined
  MinLatency?: {} | undefined
  Name?: {} | undefined
  Port?: {} | undefined
  Protocol: {}
  RemoteId?: {} | undefined
  SenderControlPort?: {} | undefined
  SmoothingLatency?: {} | undefined
  StreamId?: {} | undefined
  VpcInterfaceAttachment?: { VpcInterfaceName?: {} | undefined } | undefined
}
type AddFlowOutputsResponse = { FlowArn?: {} | undefined; Outputs?: {} | undefined }
type SetSourceRequest = {
  Decryption?:
    | {
        Algorithm?: {} | undefined
        ConstantInitializationVector?: {} | undefined
        DeviceId?: {} | undefined
        KeyType?: {} | undefined
        Region?: {} | undefined
        ResourceId?: {} | undefined
        RoleArn: {}
        SecretArn?: {} | undefined
        Url?: {} | undefined
      }
    | undefined
  Description?: {} | undefined
  EntitlementArn?: {} | undefined
  IngestPort?: {} | undefined
  MaxBitrate?: {} | undefined
  MaxLatency?: {} | undefined
  MaxSyncBuffer?: {} | undefined
  MediaStreamSourceConfigurations?: {} | undefined
  MinLatency?: {} | undefined
  Name?: {} | undefined
  Protocol?: {} | undefined
  SenderControlPort?: {} | undefined
  SenderIpAddress?: {} | undefined
  SourceListenerAddress?: {} | undefined
  SourceListenerPort?: {} | undefined
  StreamId?: {} | undefined
  VpcInterfaceName?: {} | undefined
  WhitelistCidr?: {} | undefined
  GatewayBridgeSource?:
    | { BridgeArn: {}; VpcInterfaceAttachment?: { VpcInterfaceName?: {} | undefined } | undefined }
    | undefined
}
type AddFlowSourcesResponse = { FlowArn?: {} | undefined; Sources?: {} | undefined }
type VpcInterfaceRequest = {
  Name: {}
  NetworkInterfaceType?: {} | undefined
  RoleArn: {}
  SecurityGroupIds: {}
  SubnetId: {}
}
type AddFlowVpcInterfacesResponse = { FlowArn?: {} | undefined; VpcInterfaces?: {} | undefined }
type CreateBridgeResponse = {
  Bridge?:
    | {
        BridgeArn: {}
        BridgeMessages?: {} | undefined
        BridgeState: {}
        EgressGatewayBridge?: { InstanceId?: {} | undefined; MaxBitrate: {} } | undefined
        IngressGatewayBridge?:
          | { InstanceId?: {} | undefined; MaxBitrate: {}; MaxOutputs: {} }
          | undefined
        Name: {}
        Outputs?: {} | undefined
        PlacementArn: {}
        SourceFailoverConfig?:
          | {
              FailoverMode?: {} | undefined
              RecoveryWindow?: {} | undefined
              SourcePriority?: { PrimarySource?: {} | undefined } | undefined
              State?: {} | undefined
            }
          | undefined
        Sources?: {} | undefined
      }
    | undefined
}
type ListBridgesResponse = { Bridges?: {} | undefined; NextToken?: {} | undefined }
type GrantEntitlementRequest = {
  DataTransferSubscriberFeePercent?: {} | undefined
  Description?: {} | undefined
  Encryption?:
    | {
        Algorithm?: {} | undefined
        ConstantInitializationVector?: {} | undefined
        DeviceId?: {} | undefined
        KeyType?: {} | undefined
        Region?: {} | undefined
        ResourceId?: {} | undefined
        RoleArn: {}
        SecretArn?: {} | undefined
        Url?: {} | undefined
      }
    | undefined
  EntitlementStatus?: {} | undefined
  Name?: {} | undefined
  Subscribers: {}
}
type CreateFlowResponse = {
  Flow?:
    | {
        AvailabilityZone: {}
        Description?: {} | undefined
        EgressIp?: {} | undefined
        Entitlements: {}
        FlowArn: {}
        MediaStreams?: {} | undefined
        Name: {}
        Outputs: {}
        Source: {
          DataTransferSubscriberFeePercent?: {} | undefined
          Decryption?:
            | {
                Algorithm?: {} | undefined
                ConstantInitializationVector?: {} | undefined
                DeviceId?: {} | undefined
                KeyType?: {} | undefined
                Region?: {} | undefined
                ResourceId?: {} | undefined
                RoleArn: {}
                SecretArn?: {} | undefined
                Url?: {} | undefined
              }
            | undefined
          Description?: {} | undefined
          EntitlementArn?: {} | undefined
          IngestIp?: {} | undefined
          IngestPort?: {} | undefined
          MediaStreamSourceConfigurations?: {} | undefined
          Name: {}
          SenderControlPort?: {} | undefined
          SenderIpAddress?: {} | undefined
          SourceArn: {}
          Transport?:
            | {
                CidrAllowList?: {} | undefined
                MaxBitrate?: {} | undefined
                MaxLatency?: {} | undefined
                MaxSyncBuffer?: {} | undefined
                MinLatency?: {} | undefined
                Protocol: {}
                RemoteId?: {} | undefined
                SenderControlPort?: {} | undefined
                SenderIpAddress?: {} | undefined
                SmoothingLatency?: {} | undefined
                SourceListenerAddress?: {} | undefined
                SourceListenerPort?: {} | undefined
                StreamId?: {} | undefined
              }
            | undefined
          VpcInterfaceName?: {} | undefined
          WhitelistCidr?: {} | undefined
          GatewayBridgeSource?:
            | {
                BridgeArn: {}
                VpcInterfaceAttachment?: { VpcInterfaceName?: {} | undefined } | undefined
              }
            | undefined
        }
        SourceFailoverConfig?:
          | {
              FailoverMode?: {} | undefined
              RecoveryWindow?: {} | undefined
              SourcePriority?: { PrimarySource?: {} | undefined } | undefined
              State?: {} | undefined
            }
          | undefined
        Sources?: {} | undefined
        Status: {}
        VpcInterfaces?: {} | undefined
        Maintenance?:
          | {
              MaintenanceDay?: {} | undefined
              MaintenanceDeadline?: {} | undefined
              MaintenanceScheduledDate?: {} | undefined
              MaintenanceStartHour?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type ListFlowsResponse = { Flows?: {} | undefined; NextToken?: {} | undefined }
type String = string
type GatewayNetwork = { CidrBlock: {}; Name: {} }
type CreateGatewayResponse = {
  Gateway?:
    | {
        EgressCidrBlocks: {}
        GatewayArn: {}
        GatewayMessages?: {} | undefined
        GatewayState?: {} | undefined
        Name: {}
        Networks: {}
      }
    | undefined
}
type ListGatewaysResponse = { Gateways?: {} | undefined; NextToken?: {} | undefined }
type DeleteBridgeResponse = { BridgeArn?: {} | undefined }
type DescribeBridgeResponse = {
  Bridge?:
    | {
        BridgeArn: {}
        BridgeMessages?: {} | undefined
        BridgeState: {}
        EgressGatewayBridge?: { InstanceId?: {} | undefined; MaxBitrate: {} } | undefined
        IngressGatewayBridge?:
          | { InstanceId?: {} | undefined; MaxBitrate: {}; MaxOutputs: {} }
          | undefined
        Name: {}
        Outputs?: {} | undefined
        PlacementArn: {}
        SourceFailoverConfig?:
          | {
              FailoverMode?: {} | undefined
              RecoveryWindow?: {} | undefined
              SourcePriority?: { PrimarySource?: {} | undefined } | undefined
              State?: {} | undefined
            }
          | undefined
        Sources?: {} | undefined
      }
    | undefined
}
type UpdateBridgeResponse = {
  Bridge?:
    | {
        BridgeArn: {}
        BridgeMessages?: {} | undefined
        BridgeState: {}
        EgressGatewayBridge?: { InstanceId?: {} | undefined; MaxBitrate: {} } | undefined
        IngressGatewayBridge?:
          | { InstanceId?: {} | undefined; MaxBitrate: {}; MaxOutputs: {} }
          | undefined
        Name: {}
        Outputs?: {} | undefined
        PlacementArn: {}
        SourceFailoverConfig?:
          | {
              FailoverMode?: {} | undefined
              RecoveryWindow?: {} | undefined
              SourcePriority?: { PrimarySource?: {} | undefined } | undefined
              State?: {} | undefined
            }
          | undefined
        Sources?: {} | undefined
      }
    | undefined
}
type DeleteFlowResponse = { FlowArn?: {} | undefined; Status?: {} | undefined }
type DescribeFlowResponse = {
  Flow?:
    | {
        AvailabilityZone: {}
        Description?: {} | undefined
        EgressIp?: {} | undefined
        Entitlements: {}
        FlowArn: {}
        MediaStreams?: {} | undefined
        Name: {}
        Outputs: {}
        Source: {
          DataTransferSubscriberFeePercent?: {} | undefined
          Decryption?:
            | {
                Algorithm?: {} | undefined
                ConstantInitializationVector?: {} | undefined
                DeviceId?: {} | undefined
                KeyType?: {} | undefined
                Region?: {} | undefined
                ResourceId?: {} | undefined
                RoleArn: {}
                SecretArn?: {} | undefined
                Url?: {} | undefined
              }
            | undefined
          Description?: {} | undefined
          EntitlementArn?: {} | undefined
          IngestIp?: {} | undefined
          IngestPort?: {} | undefined
          MediaStreamSourceConfigurations?: {} | undefined
          Name: {}
          SenderControlPort?: {} | undefined
          SenderIpAddress?: {} | undefined
          SourceArn: {}
          Transport?:
            | {
                CidrAllowList?: {} | undefined
                MaxBitrate?: {} | undefined
                MaxLatency?: {} | undefined
                MaxSyncBuffer?: {} | undefined
                MinLatency?: {} | undefined
                Protocol: {}
                RemoteId?: {} | undefined
                SenderControlPort?: {} | undefined
                SenderIpAddress?: {} | undefined
                SmoothingLatency?: {} | undefined
                SourceListenerAddress?: {} | undefined
                SourceListenerPort?: {} | undefined
                StreamId?: {} | undefined
              }
            | undefined
          VpcInterfaceName?: {} | undefined
          WhitelistCidr?: {} | undefined
          GatewayBridgeSource?:
            | {
                BridgeArn: {}
                VpcInterfaceAttachment?: { VpcInterfaceName?: {} | undefined } | undefined
              }
            | undefined
        }
        SourceFailoverConfig?:
          | {
              FailoverMode?: {} | undefined
              RecoveryWindow?: {} | undefined
              SourcePriority?: { PrimarySource?: {} | undefined } | undefined
              State?: {} | undefined
            }
          | undefined
        Sources?: {} | undefined
        Status: {}
        VpcInterfaces?: {} | undefined
        Maintenance?:
          | {
              MaintenanceDay?: {} | undefined
              MaintenanceDeadline?: {} | undefined
              MaintenanceScheduledDate?: {} | undefined
              MaintenanceStartHour?: {} | undefined
            }
          | undefined
      }
    | undefined
  Messages?: { Errors: {} } | undefined
}
type UpdateFlowResponse = {
  Flow?:
    | {
        AvailabilityZone: {}
        Description?: {} | undefined
        EgressIp?: {} | undefined
        Entitlements: {}
        FlowArn: {}
        MediaStreams?: {} | undefined
        Name: {}
        Outputs: {}
        Source: {
          DataTransferSubscriberFeePercent?: {} | undefined
          Decryption?:
            | {
                Algorithm?: {} | undefined
                ConstantInitializationVector?: {} | undefined
                DeviceId?: {} | undefined
                KeyType?: {} | undefined
                Region?: {} | undefined
                ResourceId?: {} | undefined
                RoleArn: {}
                SecretArn?: {} | undefined
                Url?: {} | undefined
              }
            | undefined
          Description?: {} | undefined
          EntitlementArn?: {} | undefined
          IngestIp?: {} | undefined
          IngestPort?: {} | undefined
          MediaStreamSourceConfigurations?: {} | undefined
          Name: {}
          SenderControlPort?: {} | undefined
          SenderIpAddress?: {} | undefined
          SourceArn: {}
          Transport?:
            | {
                CidrAllowList?: {} | undefined
                MaxBitrate?: {} | undefined
                MaxLatency?: {} | undefined
                MaxSyncBuffer?: {} | undefined
                MinLatency?: {} | undefined
                Protocol: {}
                RemoteId?: {} | undefined
                SenderControlPort?: {} | undefined
                SenderIpAddress?: {} | undefined
                SmoothingLatency?: {} | undefined
                SourceListenerAddress?: {} | undefined
                SourceListenerPort?: {} | undefined
                StreamId?: {} | undefined
              }
            | undefined
          VpcInterfaceName?: {} | undefined
          WhitelistCidr?: {} | undefined
          GatewayBridgeSource?:
            | {
                BridgeArn: {}
                VpcInterfaceAttachment?: { VpcInterfaceName?: {} | undefined } | undefined
              }
            | undefined
        }
        SourceFailoverConfig?:
          | {
              FailoverMode?: {} | undefined
              RecoveryWindow?: {} | undefined
              SourcePriority?: { PrimarySource?: {} | undefined } | undefined
              State?: {} | undefined
            }
          | undefined
        Sources?: {} | undefined
        Status: {}
        VpcInterfaces?: {} | undefined
        Maintenance?:
          | {
              MaintenanceDay?: {} | undefined
              MaintenanceDeadline?: {} | undefined
              MaintenanceScheduledDate?: {} | undefined
              MaintenanceStartHour?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type DeleteGatewayResponse = { GatewayArn?: {} | undefined }
type DescribeGatewayResponse = {
  Gateway?:
    | {
        EgressCidrBlocks: {}
        GatewayArn: {}
        GatewayMessages?: {} | undefined
        GatewayState?: {} | undefined
        Name: {}
        Networks: {}
      }
    | undefined
}
type DeregisterGatewayInstanceResponse = {
  GatewayInstanceArn?: {} | undefined
  InstanceState?: {} | undefined
}
type DescribeGatewayInstanceResponse = {
  GatewayInstance?:
    | {
        BridgePlacement: {}
        ConnectionStatus: {}
        GatewayArn: {}
        GatewayInstanceArn: {}
        InstanceId: {}
        InstanceMessages?: {} | undefined
        InstanceState: {}
        RunningBridgeCount: {}
      }
    | undefined
}
type UpdateGatewayInstanceResponse = {
  BridgePlacement?: {} | undefined
  GatewayInstanceArn?: {} | undefined
}
type DescribeOfferingResponse = {
  Offering?:
    | {
        CurrencyCode: {}
        Duration: {}
        DurationUnits: {}
        OfferingArn: {}
        OfferingDescription: {}
        PricePerUnit: {}
        PriceUnits: {}
        ResourceSpecification: { ReservedBitrate?: {} | undefined; ResourceType: {} }
      }
    | undefined
}
type PurchaseOfferingResponse = {
  Reservation?:
    | {
        CurrencyCode: {}
        Duration: {}
        DurationUnits: {}
        End: {}
        OfferingArn: {}
        OfferingDescription: {}
        PricePerUnit: {}
        PriceUnits: {}
        ReservationArn: {}
        ReservationName: {}
        ReservationState: {}
        ResourceSpecification: { ReservedBitrate?: {} | undefined; ResourceType: {} }
        Start: {}
      }
    | undefined
}
type DescribeReservationResponse = {
  Reservation?:
    | {
        CurrencyCode: {}
        Duration: {}
        DurationUnits: {}
        End: {}
        OfferingArn: {}
        OfferingDescription: {}
        PricePerUnit: {}
        PriceUnits: {}
        ReservationArn: {}
        ReservationName: {}
        ReservationState: {}
        ResourceSpecification: { ReservedBitrate?: {} | undefined; ResourceType: {} }
        Start: {}
      }
    | undefined
}
type GrantFlowEntitlementsResponse = { Entitlements?: {} | undefined; FlowArn?: {} | undefined }
type ListEntitlementsResponse = { Entitlements?: {} | undefined; NextToken?: {} | undefined }
type ListGatewayInstancesResponse = { Instances?: {} | undefined; NextToken?: {} | undefined }
type ListOfferingsResponse = { NextToken?: {} | undefined; Offerings?: {} | undefined }
type ListReservationsResponse = { NextToken?: {} | undefined; Reservations?: {} | undefined }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type RemoveBridgeOutputResponse = { BridgeArn?: {} | undefined; OutputName?: {} | undefined }
type UpdateBridgeOutputResponse = {
  BridgeArn?: {} | undefined
  Output?:
    | {
        FlowOutput?: { FlowArn: {}; FlowSourceArn: {}; Name: {} } | undefined
        NetworkOutput?:
          | { IpAddress: {}; Name: {}; NetworkName: {}; Port: {}; Protocol: {}; Ttl: {} }
          | undefined
      }
    | undefined
}
type RemoveBridgeSourceResponse = { BridgeArn?: {} | undefined; SourceName?: {} | undefined }
type UpdateBridgeSourceResponse = {
  BridgeArn?: {} | undefined
  Source?:
    | {
        FlowSource?:
          | {
              FlowArn: {}
              FlowVpcInterfaceAttachment?: { VpcInterfaceName?: {} | undefined } | undefined
              Name: {}
              OutputArn?: {} | undefined
            }
          | undefined
        NetworkSource?:
          | { MulticastIp: {}; Name: {}; NetworkName: {}; Port: {}; Protocol: {} }
          | undefined
      }
    | undefined
}
type RemoveFlowMediaStreamResponse = { FlowArn?: {} | undefined; MediaStreamName?: {} | undefined }
type UpdateFlowMediaStreamResponse = {
  FlowArn?: {} | undefined
  MediaStream?:
    | {
        Attributes?:
          | {
              Fmtp: {
                ChannelOrder?: {} | undefined
                Colorimetry?: {} | undefined
                ExactFramerate?: {} | undefined
                Par?: {} | undefined
                Range?: {} | undefined
                ScanMode?: {} | undefined
                Tcs?: {} | undefined
              }
              Lang?: {} | undefined
            }
          | undefined
        ClockRate?: {} | undefined
        Description?: {} | undefined
        Fmt: {}
        MediaStreamId: {}
        MediaStreamName: {}
        MediaStreamType: {}
        VideoFormat?: {} | undefined
      }
    | undefined
}
type RemoveFlowOutputResponse = { FlowArn?: {} | undefined; OutputArn?: {} | undefined }
type MediaStreamOutputConfigurationRequest = {
  DestinationConfigurations?: {} | undefined
  EncodingName: {}
  EncodingParameters?: { CompressionFactor: {}; EncoderProfile: {} } | undefined
  MediaStreamName: {}
}
type UpdateFlowOutputResponse = {
  FlowArn?: {} | undefined
  Output?:
    | {
        DataTransferSubscriberFeePercent?: {} | undefined
        Description?: {} | undefined
        Destination?: {} | undefined
        Encryption?:
          | {
              Algorithm?: {} | undefined
              ConstantInitializationVector?: {} | undefined
              DeviceId?: {} | undefined
              KeyType?: {} | undefined
              Region?: {} | undefined
              ResourceId?: {} | undefined
              RoleArn: {}
              SecretArn?: {} | undefined
              Url?: {} | undefined
            }
          | undefined
        EntitlementArn?: {} | undefined
        ListenerAddress?: {} | undefined
        MediaLiveInputArn?: {} | undefined
        MediaStreamOutputConfigurations?: {} | undefined
        Name: {}
        OutputArn: {}
        Port?: {} | undefined
        Transport?:
          | {
              CidrAllowList?: {} | undefined
              MaxBitrate?: {} | undefined
              MaxLatency?: {} | undefined
              MaxSyncBuffer?: {} | undefined
              MinLatency?: {} | undefined
              Protocol: {}
              RemoteId?: {} | undefined
              SenderControlPort?: {} | undefined
              SenderIpAddress?: {} | undefined
              SmoothingLatency?: {} | undefined
              SourceListenerAddress?: {} | undefined
              SourceListenerPort?: {} | undefined
              StreamId?: {} | undefined
            }
          | undefined
        VpcInterfaceAttachment?: { VpcInterfaceName?: {} | undefined } | undefined
        BridgeArn?: {} | undefined
        BridgePorts?: {} | undefined
      }
    | undefined
}
type RemoveFlowSourceResponse = { FlowArn?: {} | undefined; SourceArn?: {} | undefined }
type MediaStreamSourceConfigurationRequest = {
  EncodingName: {}
  InputConfigurations?: {} | undefined
  MediaStreamName: {}
}
type UpdateFlowSourceResponse = {
  FlowArn?: {} | undefined
  Source?:
    | {
        DataTransferSubscriberFeePercent?: {} | undefined
        Decryption?:
          | {
              Algorithm?: {} | undefined
              ConstantInitializationVector?: {} | undefined
              DeviceId?: {} | undefined
              KeyType?: {} | undefined
              Region?: {} | undefined
              ResourceId?: {} | undefined
              RoleArn: {}
              SecretArn?: {} | undefined
              Url?: {} | undefined
            }
          | undefined
        Description?: {} | undefined
        EntitlementArn?: {} | undefined
        IngestIp?: {} | undefined
        IngestPort?: {} | undefined
        MediaStreamSourceConfigurations?: {} | undefined
        Name: {}
        SenderControlPort?: {} | undefined
        SenderIpAddress?: {} | undefined
        SourceArn: {}
        Transport?:
          | {
              CidrAllowList?: {} | undefined
              MaxBitrate?: {} | undefined
              MaxLatency?: {} | undefined
              MaxSyncBuffer?: {} | undefined
              MinLatency?: {} | undefined
              Protocol: {}
              RemoteId?: {} | undefined
              SenderControlPort?: {} | undefined
              SenderIpAddress?: {} | undefined
              SmoothingLatency?: {} | undefined
              SourceListenerAddress?: {} | undefined
              SourceListenerPort?: {} | undefined
              StreamId?: {} | undefined
            }
          | undefined
        VpcInterfaceName?: {} | undefined
        WhitelistCidr?: {} | undefined
        GatewayBridgeSource?:
          | {
              BridgeArn: {}
              VpcInterfaceAttachment?: { VpcInterfaceName?: {} | undefined } | undefined
            }
          | undefined
      }
    | undefined
}
type RemoveFlowVpcInterfaceResponse = {
  FlowArn?: {} | undefined
  NonDeletedNetworkInterfaceIds?: {} | undefined
  VpcInterfaceName?: {} | undefined
}
type RevokeFlowEntitlementResponse = { EntitlementArn?: {} | undefined; FlowArn?: {} | undefined }
type UpdateFlowEntitlementResponse = {
  Entitlement?:
    | {
        DataTransferSubscriberFeePercent?: {} | undefined
        Description?: {} | undefined
        Encryption?:
          | {
              Algorithm?: {} | undefined
              ConstantInitializationVector?: {} | undefined
              DeviceId?: {} | undefined
              KeyType?: {} | undefined
              Region?: {} | undefined
              ResourceId?: {} | undefined
              RoleArn: {}
              SecretArn?: {} | undefined
              Url?: {} | undefined
            }
          | undefined
        EntitlementArn: {}
        EntitlementStatus?: {} | undefined
        Name: {}
        Subscribers: {}
      }
    | undefined
  FlowArn?: {} | undefined
}
type StartFlowResponse = { FlowArn?: {} | undefined; Status?: {} | undefined }
type StopFlowResponse = { FlowArn?: {} | undefined; Status?: {} | undefined }
type UpdateBridgeStateResponse = { BridgeArn?: {} | undefined; DesiredState?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/bridges/:bridgeArn/outputs': {
      $post: {
        input: { param: { bridgeArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { outputs: AddBridgeOutputRequest[] } }
        output: AddBridgeOutputsResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/bridges/:bridgeArn/sources': {
      $post: {
        input: { param: { bridgeArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { sources: AddBridgeSourceRequest[] } }
        output: AddBridgeSourcesResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/flows/:flowArn/mediaStreams': {
      $post: {
        input: { param: { flowArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { mediaStreams: AddMediaStreamRequest[] } }
        output: AddFlowMediaStreamsResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/flows/:flowArn/outputs': {
      $post: {
        input: { param: { flowArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { outputs: AddOutputRequest[] } }
        output: AddFlowOutputsResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/flows/:flowArn/source': {
      $post: {
        input: { param: { flowArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { sources: SetSourceRequest[] } }
        output: AddFlowSourcesResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/flows/:flowArn/vpcInterfaces': {
      $post: {
        input: { param: { flowArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { vpcInterfaces: VpcInterfaceRequest[] } }
        output: AddFlowVpcInterfacesResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/bridges': {
      $post: {
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
            egressGatewayBridge?: { MaxBitrate?: {} | undefined } | undefined
            ingressGatewayBridge?:
              | { MaxBitrate?: {} | undefined; MaxOutputs?: {} | undefined }
              | undefined
            name: string
            outputs?: AddBridgeOutputRequest[] | undefined
            placementArn: string
            sourceFailoverConfig?:
              | {
                  FailoverMode?: {} | undefined
                  RecoveryWindow?: {} | undefined
                  SourcePriority?: { PrimarySource?: {} | undefined } | undefined
                  State?: {} | undefined
                }
              | undefined
            sources: AddBridgeSourceRequest[]
          }
        }
        output: CreateBridgeResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            filterArn?: string | undefined
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
        output: ListBridgesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/flows': {
      $post: {
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
            availabilityZone?: string | undefined
            entitlements?: GrantEntitlementRequest[] | undefined
            mediaStreams?: AddMediaStreamRequest[] | undefined
            name: string
            outputs?: AddOutputRequest[] | undefined
            source?:
              | {
                  Decryption?:
                    | {
                        Algorithm?: {} | undefined
                        ConstantInitializationVector?: {} | undefined
                        DeviceId?: {} | undefined
                        KeyType?: {} | undefined
                        Region?: {} | undefined
                        ResourceId?: {} | undefined
                        RoleArn: {}
                        SecretArn?: {} | undefined
                        Url?: {} | undefined
                      }
                    | undefined
                  Description?: {} | undefined
                  EntitlementArn?: {} | undefined
                  IngestPort?: {} | undefined
                  MaxBitrate?: {} | undefined
                  MaxLatency?: {} | undefined
                  MaxSyncBuffer?: {} | undefined
                  MediaStreamSourceConfigurations?: {} | undefined
                  MinLatency?: {} | undefined
                  Name?: {} | undefined
                  Protocol?: {} | undefined
                  SenderControlPort?: {} | undefined
                  SenderIpAddress?: {} | undefined
                  SourceListenerAddress?: {} | undefined
                  SourceListenerPort?: {} | undefined
                  StreamId?: {} | undefined
                  VpcInterfaceName?: {} | undefined
                  WhitelistCidr?: {} | undefined
                  GatewayBridgeSource?:
                    | {
                        BridgeArn: {}
                        VpcInterfaceAttachment?: { VpcInterfaceName?: {} | undefined } | undefined
                      }
                    | undefined
                }
              | undefined
            sourceFailoverConfig?:
              | {
                  FailoverMode?: {} | undefined
                  RecoveryWindow?: {} | undefined
                  SourcePriority?: { PrimarySource?: {} | undefined } | undefined
                  State?: {} | undefined
                }
              | undefined
            sources?: SetSourceRequest[] | undefined
            vpcInterfaces?: VpcInterfaceRequest[] | undefined
            maintenance?:
              | { MaintenanceDay?: {} | undefined; MaintenanceStartHour?: {} | undefined }
              | undefined
          }
        }
        output: CreateFlowResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
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
        output: ListFlowsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/gateways': {
      $post: {
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
        } & { json: { egressCidrBlocks: String[]; name: string; networks: GatewayNetwork[] } }
        output: CreateGatewayResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
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
        output: ListGatewaysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/bridges/:bridgeArn': {
      $delete: {
        input: { param: { bridgeArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteBridgeResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { bridgeArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeBridgeResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { bridgeArn: string } } & {
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
            egressGatewayBridge?: { MaxBitrate?: {} | undefined } | undefined
            ingressGatewayBridge?:
              | { MaxBitrate?: {} | undefined; MaxOutputs?: {} | undefined }
              | undefined
            sourceFailoverConfig?:
              | {
                  FailoverMode?: {} | undefined
                  RecoveryWindow?: {} | undefined
                  SourcePriority?: { PrimarySource?: {} | undefined } | undefined
                  State?: {} | undefined
                }
              | undefined
          }
        }
        output: UpdateBridgeResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/flows/:flowArn': {
      $delete: {
        input: { param: { flowArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteFlowResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { flowArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeFlowResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { flowArn: string } } & {
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
            sourceFailoverConfig?:
              | {
                  FailoverMode?: {} | undefined
                  RecoveryWindow?: {} | undefined
                  SourcePriority?: { PrimarySource?: {} | undefined } | undefined
                  State?: {} | undefined
                }
              | undefined
            maintenance?:
              | {
                  MaintenanceDay?: {} | undefined
                  MaintenanceScheduledDate?: {} | undefined
                  MaintenanceStartHour?: {} | undefined
                }
              | undefined
          }
        }
        output: UpdateFlowResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/gateways/:gatewayArn': {
      $delete: {
        input: { param: { gatewayArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteGatewayResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { gatewayArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeGatewayResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/gateway-instances/:gatewayInstanceArn': {
      $delete: {
        input: { param: { gatewayInstanceArn: string } } & {
          query: { force?: boolean | undefined }
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
        output: DeregisterGatewayInstanceResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { gatewayInstanceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeGatewayInstanceResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { gatewayInstanceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { bridgePlacement?: 'AVAILABLE' | 'LOCKED' | undefined } }
        output: UpdateGatewayInstanceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/offerings/:offeringArn': {
      $get: {
        input: { param: { offeringArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeOfferingResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { offeringArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { reservationName: string; start: string } }
        output: PurchaseOfferingResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/reservations/:reservationArn': {
      $get: {
        input: { param: { reservationArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeReservationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/flows/:flowArn/entitlements': {
      $post: {
        input: { param: { flowArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { entitlements: GrantEntitlementRequest[] } }
        output: GrantFlowEntitlementsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/entitlements': {
      $get: {
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
        output: ListEntitlementsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/gateway-instances': {
      $get: {
        input: {
          query: {
            filterArn?: string | undefined
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
        output: ListGatewayInstancesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/offerings': {
      $get: {
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
        output: ListOfferingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/reservations': {
      $get: {
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
        output: ListReservationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn': {
      $get: {
        input: { param: { resourceArn: string } } & {
          header: {
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
      $post: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: { [x: string]: String } } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/bridges/:bridgeArn/outputs/:outputName': {
      $delete: {
        input: { param: { bridgeArn: string; outputName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RemoveBridgeOutputResponse
        outputFormat: 'json'
        status: 202
      }
      $put: {
        input: { param: { bridgeArn: string; outputName: string } } & {
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
            networkOutput?:
              | {
                  IpAddress?: {} | undefined
                  NetworkName?: {} | undefined
                  Port?: {} | undefined
                  Protocol?: {} | undefined
                  Ttl?: {} | undefined
                }
              | undefined
          }
        }
        output: UpdateBridgeOutputResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/bridges/:bridgeArn/sources/:sourceName': {
      $delete: {
        input: { param: { bridgeArn: string; sourceName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RemoveBridgeSourceResponse
        outputFormat: 'json'
        status: 202
      }
      $put: {
        input: { param: { bridgeArn: string; sourceName: string } } & {
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
            flowSource?:
              | {
                  FlowArn?: {} | undefined
                  FlowVpcInterfaceAttachment?: { VpcInterfaceName?: {} | undefined } | undefined
                }
              | undefined
            networkSource?:
              | {
                  MulticastIp?: {} | undefined
                  NetworkName?: {} | undefined
                  Port?: {} | undefined
                  Protocol?: {} | undefined
                }
              | undefined
          }
        }
        output: UpdateBridgeSourceResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/flows/:flowArn/mediaStreams/:mediaStreamName': {
      $delete: {
        input: { param: { flowArn: string; mediaStreamName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RemoveFlowMediaStreamResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { flowArn: string; mediaStreamName: string } } & {
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
            attributes?:
              | {
                  Fmtp?:
                    | {
                        ChannelOrder?: {} | undefined
                        Colorimetry?: {} | undefined
                        ExactFramerate?: {} | undefined
                        Par?: {} | undefined
                        Range?: {} | undefined
                        ScanMode?: {} | undefined
                        Tcs?: {} | undefined
                      }
                    | undefined
                  Lang?: {} | undefined
                }
              | undefined
            clockRate?: number | undefined
            description?: string | undefined
            mediaStreamType?: 'video' | 'audio' | 'ancillary-data' | undefined
            videoFormat?: string | undefined
          }
        }
        output: UpdateFlowMediaStreamResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/flows/:flowArn/outputs/:outputArn': {
      $delete: {
        input: { param: { flowArn: string; outputArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RemoveFlowOutputResponse
        outputFormat: 'json'
        status: 202
      }
      $put: {
        input: { param: { flowArn: string; outputArn: string } } & {
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
            cidrAllowList?: String[] | undefined
            description?: string | undefined
            destination?: string | undefined
            encryption?:
              | {
                  Algorithm?: {} | undefined
                  ConstantInitializationVector?: {} | undefined
                  DeviceId?: {} | undefined
                  KeyType?: {} | undefined
                  Region?: {} | undefined
                  ResourceId?: {} | undefined
                  RoleArn?: {} | undefined
                  SecretArn?: {} | undefined
                  Url?: {} | undefined
                }
              | undefined
            maxLatency?: number | undefined
            mediaStreamOutputConfigurations?: MediaStreamOutputConfigurationRequest[] | undefined
            minLatency?: number | undefined
            port?: number | undefined
            protocol?:
              | 'zixi-push'
              | 'rtp-fec'
              | 'rtp'
              | 'zixi-pull'
              | 'rist'
              | 'st2110-jpegxs'
              | 'cdi'
              | 'srt-listener'
              | 'srt-caller'
              | 'fujitsu-qos'
              | 'udp'
              | undefined
            remoteId?: string | undefined
            senderControlPort?: number | undefined
            senderIpAddress?: string | undefined
            smoothingLatency?: number | undefined
            streamId?: string | undefined
            vpcInterfaceAttachment?: { VpcInterfaceName?: {} | undefined } | undefined
          }
        }
        output: UpdateFlowOutputResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/flows/:flowArn/source/:sourceArn': {
      $delete: {
        input: { param: { flowArn: string; sourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RemoveFlowSourceResponse
        outputFormat: 'json'
        status: 202
      }
      $put: {
        input: { param: { flowArn: string; sourceArn: string } } & {
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
            decryption?:
              | {
                  Algorithm?: {} | undefined
                  ConstantInitializationVector?: {} | undefined
                  DeviceId?: {} | undefined
                  KeyType?: {} | undefined
                  Region?: {} | undefined
                  ResourceId?: {} | undefined
                  RoleArn?: {} | undefined
                  SecretArn?: {} | undefined
                  Url?: {} | undefined
                }
              | undefined
            description?: string | undefined
            entitlementArn?: string | undefined
            ingestPort?: number | undefined
            maxBitrate?: number | undefined
            maxLatency?: number | undefined
            maxSyncBuffer?: number | undefined
            mediaStreamSourceConfigurations?: MediaStreamSourceConfigurationRequest[] | undefined
            minLatency?: number | undefined
            protocol?:
              | 'zixi-push'
              | 'rtp-fec'
              | 'rtp'
              | 'zixi-pull'
              | 'rist'
              | 'st2110-jpegxs'
              | 'cdi'
              | 'srt-listener'
              | 'srt-caller'
              | 'fujitsu-qos'
              | 'udp'
              | undefined
            senderControlPort?: number | undefined
            senderIpAddress?: string | undefined
            sourceListenerAddress?: string | undefined
            sourceListenerPort?: number | undefined
            streamId?: string | undefined
            vpcInterfaceName?: string | undefined
            whitelistCidr?: string | undefined
            gatewayBridgeSource?:
              | {
                  BridgeArn?: {} | undefined
                  VpcInterfaceAttachment?: { VpcInterfaceName?: {} | undefined } | undefined
                }
              | undefined
          }
        }
        output: UpdateFlowSourceResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/flows/:flowArn/vpcInterfaces/:vpcInterfaceName': {
      $delete: {
        input: { param: { flowArn: string; vpcInterfaceName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RemoveFlowVpcInterfaceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/flows/:flowArn/entitlements/:entitlementArn': {
      $delete: {
        input: { param: { entitlementArn: string; flowArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RevokeFlowEntitlementResponse
        outputFormat: 'json'
        status: 202
      }
      $put: {
        input: { param: { entitlementArn: string; flowArn: string } } & {
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
            description?: string | undefined
            encryption?:
              | {
                  Algorithm?: {} | undefined
                  ConstantInitializationVector?: {} | undefined
                  DeviceId?: {} | undefined
                  KeyType?: {} | undefined
                  Region?: {} | undefined
                  ResourceId?: {} | undefined
                  RoleArn?: {} | undefined
                  SecretArn?: {} | undefined
                  Url?: {} | undefined
                }
              | undefined
            entitlementStatus?: 'ENABLED' | 'DISABLED' | undefined
            subscribers?: String[] | undefined
          }
        }
        output: UpdateFlowEntitlementResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/flows/start/:flowArn': {
      $post: {
        input: { param: { flowArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: StartFlowResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/flows/stop/:flowArn': {
      $post: {
        input: { param: { flowArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: StopFlowResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete: {
        input: { param: { resourceArn: string } } & { query: { tagKeys: String[] } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/bridges/:bridgeArn/state': {
      $put: {
        input: { param: { bridgeArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { desiredState: 'ACTIVE' | 'STANDBY' | 'DELETED' } }
        output: UpdateBridgeStateResponse
        outputFormat: 'json'
        status: 202
      }
    }
  },
  '/'
>
export default routes
