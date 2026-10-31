import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const MessageDetailSchema = z
  .object({
    Code: StringSchema.and(
      z.any().openapi({ xml: { name: 'code' }, description: 'The error code.' }),
    ),
    Message: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'message' },
          description:
            'The specific error message that MediaConnect returns to help you understand the reason that the request did not succeed.',
        }),
    ),
    ResourceName: StringSchema.and(
      z.any().openapi({ xml: { name: 'resourceName' }, description: 'The name of the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Message', 'Code'] })
  .openapi('MessageDetail')

const ListOfMessageDetailSchema = z.array(MessageDetailSchema).openapi('ListOfMessageDetail')

const BridgeStateSchema = z
  .enum([
    'CREATING',
    'STANDBY',
    'STARTING',
    'DEPLOYING',
    'ACTIVE',
    'STOPPING',
    'DELETING',
    'DELETED',
    'START_FAILED',
    'START_PENDING',
    'STOP_FAILED',
    'UPDATING',
  ])
  .openapi('BridgeState')

const IntegerSchema = z.int().openapi('Integer')

const EgressGatewayBridgeSchema = z
  .object({
    InstanceId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'instanceId' },
          description: 'The ID of the instance running this bridge.',
        }),
    ).exactOptional(),
    MaxBitrate: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxBitrate' },
          description: 'The maximum expected bitrate (in bps) of the egress bridge.',
        }),
    ),
  })
  .openapi({ required: ['MaxBitrate'] })
  .openapi('EgressGatewayBridge')

const IngressGatewayBridgeSchema = z
  .object({
    InstanceId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'instanceId' },
          description: 'The ID of the instance running this bridge.',
        }),
    ).exactOptional(),
    MaxBitrate: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxBitrate' },
          description: 'The maximum expected bitrate (in bps) of the ingress bridge.',
        }),
    ),
    MaxOutputs: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxOutputs' },
          description: 'The maximum number of outputs on the ingress bridge.',
        }),
    ),
  })
  .openapi({ required: ['MaxOutputs', 'MaxBitrate'] })
  .openapi('IngressGatewayBridge')

const BridgeFlowOutputSchema = z
  .object({
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The Amazon Resource Number (ARN) of the cloud flow.',
        }),
    ),
    FlowSourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowSourceArn' },
          description: 'The Amazon Resource Number (ARN) of the flow source.',
        }),
    ),
    Name: StringSchema.and(
      z.any().openapi({ xml: { name: 'name' }, description: "The name of the bridge's output." }),
    ),
  })
  .openapi({
    required: ['FlowSourceArn', 'FlowArn', 'Name'],
    description: 'The output of the bridge. A flow output is delivered to the AWS cloud.',
  })
  .openapi('BridgeFlowOutput')

const ProtocolSchema = z
  .enum([
    'zixi-push',
    'rtp-fec',
    'rtp',
    'zixi-pull',
    'rist',
    'st2110-jpegxs',
    'cdi',
    'srt-listener',
    'srt-caller',
    'fujitsu-qos',
    'udp',
  ])
  .openapi('Protocol')

const BridgeNetworkOutputSchema = z
  .object({
    IpAddress: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'ipAddress' }, description: 'The network output IP Address.' }),
    ),
    Name: StringSchema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The network output name.' }),
    ),
    NetworkName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'networkName' },
          description: "The network output's gateway network name.",
        }),
    ),
    Port: IntegerSchema.and(
      z.any().openapi({ xml: { name: 'port' }, description: 'The network output port.' }),
    ),
    Protocol: ProtocolSchema.and(
      z.any().openapi({ xml: { name: 'protocol' }, description: 'The network output protocol.' }),
    ),
    Ttl: IntegerSchema.and(
      z.any().openapi({ xml: { name: 'ttl' }, description: 'The network output TTL.' }),
    ),
  })
  .openapi({
    required: ['NetworkName', 'Port', 'IpAddress', 'Protocol', 'Ttl', 'Name'],
    description: 'The output of the bridge. A network output is delivered to your premises.',
  })
  .openapi('BridgeNetworkOutput')

const BridgeOutputSchema = z
  .object({
    FlowOutput: BridgeFlowOutputSchema.and(
      z.any().openapi({ xml: { name: 'flowOutput' } }),
    ).exactOptional(),
    NetworkOutput: BridgeNetworkOutputSchema.and(
      z.any().openapi({ xml: { name: 'networkOutput' } }),
    ).exactOptional(),
  })
  .openapi({ description: 'The output of the bridge.', required: [] })
  .openapi('BridgeOutput')

const ListOfBridgeOutputSchema = z.array(BridgeOutputSchema).openapi('ListOfBridgeOutput')

const FailoverModeSchema = z.enum(['MERGE', 'FAILOVER']).openapi('FailoverMode')

const SourcePrioritySchema = z
  .object({
    PrimarySource: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'primarySource' },
          description: 'The name of the source you choose as the primary source for this flow.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.',
    required: [],
  })
  .openapi('SourcePriority')

const StateSchema = z.enum(['ENABLED', 'DISABLED']).openapi('State')

const FailoverConfigSchema = z
  .object({
    FailoverMode: FailoverModeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'failoverMode' },
          description:
            'The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.',
        }),
    ).exactOptional(),
    RecoveryWindow: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'recoveryWindow' },
          description: 'Search window time to look for dash-7 packets',
        }),
    ).exactOptional(),
    SourcePriority: SourcePrioritySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sourcePriority' },
          description:
            'The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.',
        }),
    ).exactOptional(),
    State: StateSchema.and(z.any().openapi({ xml: { name: 'state' } })).exactOptional(),
  })
  .openapi({ description: 'The settings for source failover.', required: [] })
  .openapi('FailoverConfig')

const VpcInterfaceAttachmentSchema = z
  .object({
    VpcInterfaceName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcInterfaceName' },
          description: 'The name of the VPC interface to use for this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The settings for attaching a VPC interface to an resource.',
    required: [],
  })
  .openapi('VpcInterfaceAttachment')

const BridgeFlowSourceSchema = z
  .object({
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The ARN of the cloud flow used as a source of this bridge.',
        }),
    ),
    FlowVpcInterfaceAttachment: VpcInterfaceAttachmentSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowVpcInterfaceAttachment' },
          description: 'The name of the VPC interface attachment to use for this source.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the flow source.' }),
    ),
    OutputArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'outputArn' },
          description: 'The Amazon Resource Number (ARN) of the output.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FlowArn', 'Name'],
    description:
      'The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.',
  })
  .openapi('BridgeFlowSource')

const BridgeNetworkSourceSchema = z
  .object({
    MulticastIp: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'multicastIp' }, description: 'The network source multicast IP.' }),
    ),
    Name: StringSchema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the network source.' }),
    ),
    NetworkName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'networkName' },
          description: "The network source's gateway network name.",
        }),
    ),
    Port: IntegerSchema.and(
      z.any().openapi({ xml: { name: 'port' }, description: 'The network source port.' }),
    ),
    Protocol: ProtocolSchema.and(
      z.any().openapi({ xml: { name: 'protocol' }, description: 'The network source protocol.' }),
    ),
  })
  .openapi({
    required: ['NetworkName', 'MulticastIp', 'Port', 'Protocol', 'Name'],
    description: 'The source of the bridge. A network source originates at your premises.',
  })
  .openapi('BridgeNetworkSource')

const BridgeSourceSchema = z
  .object({
    FlowSource: BridgeFlowSourceSchema.and(
      z.any().openapi({ xml: { name: 'flowSource' } }),
    ).exactOptional(),
    NetworkSource: BridgeNetworkSourceSchema.and(
      z.any().openapi({ xml: { name: 'networkSource' } }),
    ).exactOptional(),
  })
  .openapi({ description: "The bridge's source.", required: [] })
  .openapi('BridgeSource')

const ListOfBridgeSourceSchema = z.array(BridgeSourceSchema).openapi('ListOfBridgeSource')

type BridgeType = {
  BridgeArn: z.infer<typeof StringSchema> & { [key: string]: unknown }
  BridgeMessages?: z.infer<typeof ListOfMessageDetailSchema> & { [key: string]: unknown }
  BridgeState: z.infer<typeof BridgeStateSchema> & { [key: string]: unknown }
  EgressGatewayBridge?: z.infer<typeof EgressGatewayBridgeSchema> & { [key: string]: unknown }
  IngressGatewayBridge?: z.infer<typeof IngressGatewayBridgeSchema> & { [key: string]: unknown }
  Name: z.infer<typeof StringSchema> & { [key: string]: unknown }
  Outputs?: z.infer<typeof ListOfBridgeOutputSchema> & { [key: string]: unknown }
  PlacementArn: z.infer<typeof StringSchema> & { [key: string]: unknown }
  SourceFailoverConfig?: z.infer<typeof FailoverConfigSchema> & { [key: string]: unknown }
  Sources?: z.infer<typeof ListOfBridgeSourceSchema> & { [key: string]: unknown }
}

const AlgorithmSchema = z.enum(['aes128', 'aes192', 'aes256']).openapi('Algorithm')

const KeyTypeSchema = z.enum(['speke', 'static-key', 'srt-password']).openapi('KeyType')

const EncryptionSchema = z
  .object({
    Algorithm: AlgorithmSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'algorithm' },
          description:
            'The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).',
        }),
    ).exactOptional(),
    ConstantInitializationVector: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'constantInitializationVector' },
          description:
            'A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.',
        }),
    ).exactOptional(),
    DeviceId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deviceId' },
          description:
            'The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
        }),
    ).exactOptional(),
    KeyType: KeyTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'keyType' },
          description:
            'The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).',
        }),
    ).exactOptional(),
    Region: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'region' },
          description:
            'The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
        }),
    ).exactOptional(),
    ResourceId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'resourceId' },
          description:
            'An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
        }),
    ).exactOptional(),
    RoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'roleArn' },
          description:
            'The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).',
        }),
    ),
    SecretArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'secretArn' },
          description:
            'The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.',
        }),
    ).exactOptional(),
    Url: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'url' },
          description:
            'The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['RoleArn'], description: 'Information about the encryption of the flow.' })
  .openapi('Encryption')

const EncodingNameSchema = z.enum(['jxsv', 'raw', 'smpte291', 'pcm']).openapi('EncodingName')

const InterfaceSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the VPC interface.' }),
    ),
  })
  .openapi({
    required: ['Name'],
    description:
      'The VPC interface that is used for the media stream associated with the source or output.',
  })
  .openapi('Interface')

const InputConfigurationSchema = z
  .object({
    InputIp: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'inputIp' },
          description:
            'The IP address that the flow listens on for incoming content for a media stream.',
        }),
    ),
    InputPort: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'inputPort' },
          description: 'The port that the flow listens on for an incoming media stream.',
        }),
    ),
    Interface: InterfaceSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'interface' },
          description: 'The VPC interface where the media stream comes in from.',
        }),
    ),
  })
  .openapi({
    required: ['InputPort', 'InputIp', 'Interface'],
    description: 'The transport parameters that are associated with an incoming media stream.',
  })
  .openapi('InputConfiguration')

const ListOfInputConfigurationSchema = z
  .array(InputConfigurationSchema)
  .openapi('ListOfInputConfiguration')

const MediaStreamSourceConfigurationSchema = z
  .object({
    EncodingName: EncodingNameSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encodingName' },
          description:
            'The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.',
        }),
    ),
    InputConfigurations: ListOfInputConfigurationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'inputConfigurations' },
          description:
            'The transport parameters that are associated with an incoming media stream.',
        }),
    ).exactOptional(),
    MediaStreamName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaStreamName' },
          description: 'The name of the media stream.',
        }),
    ),
  })
  .openapi({
    required: ['MediaStreamName', 'EncodingName'],
    description:
      'The media stream that is associated with the source, and the parameters for that association.',
  })
  .openapi('MediaStreamSourceConfiguration')

const ListOfMediaStreamSourceConfigurationSchema = z
  .array(MediaStreamSourceConfigurationSchema)
  .openapi('ListOfMediaStreamSourceConfiguration')

const ListOfStringSchema = z.array(StringSchema).openapi('ListOfString')

const TransportSchema = z
  .object({
    CidrAllowList: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'cidrAllowList' },
          description:
            'The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.',
        }),
    ).exactOptional(),
    MaxBitrate: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxBitrate' },
          description: 'The smoothing max bitrate (in bps) for RIST, RTP, and RTP-FEC streams.',
        }),
    ).exactOptional(),
    MaxLatency: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxLatency' },
          description:
            'The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.',
        }),
    ).exactOptional(),
    MaxSyncBuffer: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxSyncBuffer' },
          description:
            'The size of the buffer (in milliseconds) to use to sync incoming source data.',
        }),
    ).exactOptional(),
    MinLatency: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'minLatency' },
          description:
            'The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.',
        }),
    ).exactOptional(),
    Protocol: ProtocolSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'protocol' },
          description: 'The protocol that is used by the source or output.',
        }),
    ),
    RemoteId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'remoteId' },
          description: 'The remote ID for the Zixi-pull stream.',
        }),
    ).exactOptional(),
    SenderControlPort: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'senderControlPort' },
          description:
            'The port that the flow uses to send outbound requests to initiate connection with the sender.',
        }),
    ).exactOptional(),
    SenderIpAddress: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'senderIpAddress' },
          description:
            'The IP address that the flow communicates with to initiate connection with the sender.',
        }),
    ).exactOptional(),
    SmoothingLatency: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'smoothingLatency' },
          description: 'The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.',
        }),
    ).exactOptional(),
    SourceListenerAddress: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sourceListenerAddress' },
          description: 'Source IP or domain name for SRT-caller protocol.',
        }),
    ).exactOptional(),
    SourceListenerPort: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sourceListenerPort' },
          description: 'Source port for SRT-caller protocol.',
        }),
    ).exactOptional(),
    StreamId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'streamId' },
          description:
            'The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Protocol'],
    description: 'Attributes related to the transport stream that are used in a source or output.',
  })
  .openapi('Transport')

const GatewayBridgeSourceSchema = z
  .object({
    BridgeArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bridgeArn' },
          description: 'The ARN of the bridge feeding this flow.',
        }),
    ),
    VpcInterfaceAttachment: VpcInterfaceAttachmentSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcInterfaceAttachment' },
          description: 'The name of the VPC interface attachment to use for this bridge source.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BridgeArn'],
    description: 'The source configuration for cloud flows receiving a stream from a bridge.',
  })
  .openapi('GatewayBridgeSource')

type SourceType = {
  DataTransferSubscriberFeePercent?: z.infer<typeof IntegerSchema> & { [key: string]: unknown }
  Decryption?: z.infer<typeof EncryptionSchema> & { [key: string]: unknown }
  Description?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  EntitlementArn?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  IngestIp?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  IngestPort?: z.infer<typeof IntegerSchema> & { [key: string]: unknown }
  MediaStreamSourceConfigurations?: z.infer<typeof ListOfMediaStreamSourceConfigurationSchema> & {
    [key: string]: unknown
  }
  Name: z.infer<typeof StringSchema> & { [key: string]: unknown }
  SenderControlPort?: z.infer<typeof IntegerSchema> & { [key: string]: unknown }
  SenderIpAddress?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  SourceArn: z.infer<typeof StringSchema> & { [key: string]: unknown }
  Transport?: z.infer<typeof TransportSchema> & { [key: string]: unknown }
  VpcInterfaceName?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  WhitelistCidr?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  GatewayBridgeSource?: z.infer<typeof GatewayBridgeSourceSchema> & { [key: string]: unknown }
}

const AddBridgeOutputsResponseSchema = z
  .object({
    BridgeArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bridgeArn' },
          description: 'The Amazon Resource Number (ARN) of the bridge.',
        }),
    ).exactOptional(),
    Outputs: ListOfBridgeOutputSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'outputs' },
          description: 'The outputs that you added to this bridge.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddBridgeOutputsResponse')

const AddBridgeNetworkOutputRequestSchema = z
  .object({
    IpAddress: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'ipAddress' }, description: 'The network output IP Address.' }),
    ),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description:
            'The network output name. This name is used to reference the output and must be unique among outputs in this bridge.',
        }),
    ),
    NetworkName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'networkName' },
          description: "The network output's gateway network name.",
        }),
    ),
    Port: IntegerSchema.and(
      z.any().openapi({ xml: { name: 'port' }, description: 'The network output port.' }),
    ),
    Protocol: ProtocolSchema.and(
      z.any().openapi({ xml: { name: 'protocol' }, description: 'The network output protocol.' }),
    ),
    Ttl: IntegerSchema.and(
      z.any().openapi({ xml: { name: 'ttl' }, description: 'The network output TTL.' }),
    ),
  })
  .openapi({
    required: ['NetworkName', 'Port', 'IpAddress', 'Protocol', 'Ttl', 'Name'],
    description: 'Add a network output to an existing bridge.',
  })
  .openapi('AddBridgeNetworkOutputRequest')

const AddBridgeOutputRequestSchema = z
  .object({
    NetworkOutput: AddBridgeNetworkOutputRequestSchema.and(
      z.any().openapi({ xml: { name: 'networkOutput' } }),
    ).exactOptional(),
  })
  .openapi({ description: 'Add an output to a bridge.', required: [] })
  .openapi('AddBridgeOutputRequest')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const InternalServerErrorExceptionSchema = z.any().openapi('InternalServerErrorException')

const ForbiddenExceptionSchema = z.any().openapi('ForbiddenException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const AddBridgeSourcesResponseSchema = z
  .object({
    BridgeArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bridgeArn' },
          description: 'The Amazon Resource Number (ARN) of the bridge.',
        }),
    ).exactOptional(),
    Sources: ListOfBridgeSourceSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sources' },
          description: 'The sources that you added to this bridge.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddBridgeSourcesResponse')

const AddBridgeFlowSourceRequestSchema = z
  .object({
    FlowArn: StringSchema.and(
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'string') {
            if (!new RegExp('^arn:.+:mediaconnect.+:flow:.+$').test(val)) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({
          xml: { name: 'flowArn' },
          description:
            'The Amazon Resource Number (ARN) of the cloud flow to use as a source of this bridge.',
        }),
    ),
    FlowVpcInterfaceAttachment: VpcInterfaceAttachmentSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowVpcInterfaceAttachment' },
          description: 'The name of the VPC interface attachment to use for this source.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description:
            'The name of the flow source. This name is used to reference the source and must be unique among sources in this bridge.',
        }),
    ),
  })
  .openapi({
    required: ['FlowArn', 'Name'],
    description: 'Add a flow source to an existing bridge.',
  })
  .openapi('AddBridgeFlowSourceRequest')

const AddBridgeNetworkSourceRequestSchema = z
  .object({
    MulticastIp: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'multicastIp' }, description: 'The network source multicast IP.' }),
    ),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description:
            'The name of the network source. This name is used to reference the source and must be unique among sources in this bridge.',
        }),
    ),
    NetworkName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'networkName' },
          description: "The network source's gateway network name.",
        }),
    ),
    Port: IntegerSchema.and(
      z.any().openapi({ xml: { name: 'port' }, description: 'The network source port.' }),
    ),
    Protocol: ProtocolSchema.and(
      z.any().openapi({ xml: { name: 'protocol' }, description: 'The network source protocol.' }),
    ),
  })
  .openapi({
    required: ['NetworkName', 'MulticastIp', 'Port', 'Protocol', 'Name'],
    description: 'Add a network source to an existing bridge.',
  })
  .openapi('AddBridgeNetworkSourceRequest')

const AddBridgeSourceRequestSchema = z
  .object({
    FlowSource: AddBridgeFlowSourceRequestSchema.and(
      z.any().openapi({ xml: { name: 'flowSource' } }),
    ).exactOptional(),
    NetworkSource: AddBridgeNetworkSourceRequestSchema.and(
      z.any().openapi({ xml: { name: 'networkSource' } }),
    ).exactOptional(),
  })
  .openapi({ description: 'Add a source to an existing bridge.', required: [] })
  .openapi('AddBridgeSourceRequest')

const ColorimetrySchema = z
  .enum(['BT601', 'BT709', 'BT2020', 'BT2100', 'ST2065-1', 'ST2065-3', 'XYZ'])
  .openapi('Colorimetry')

const RangeSchema = z.enum(['NARROW', 'FULL', 'FULLPROTECT']).openapi('Range')

const ScanModeSchema = z
  .enum(['progressive', 'interlace', 'progressive-segmented-frame'])
  .openapi('ScanMode')

const TcsSchema = z
  .enum([
    'SDR',
    'PQ',
    'HLG',
    'LINEAR',
    'BT2100LINPQ',
    'BT2100LINHLG',
    'ST2065-1',
    'ST428-1',
    'DENSITY',
  ])
  .openapi('Tcs')

const FmtpSchema = z
  .object({
    ChannelOrder: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'channelOrder' },
          description: 'The format of the audio channel.',
        }),
    ).exactOptional(),
    Colorimetry: ColorimetrySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'colorimetry' },
          description: 'The format that is used for the representation of color.',
        }),
    ).exactOptional(),
    ExactFramerate: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'exactFramerate' },
          description:
            'The frame rate for the video stream, in frames/second. For example: 60000/1001. If you specify a whole number, MediaConnect uses a ratio of N/1. For example, if you specify 60, MediaConnect uses 60/1 as the exactFramerate.',
        }),
    ).exactOptional(),
    Par: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'par' },
          description: 'The pixel aspect ratio (PAR) of the video.',
        }),
    ).exactOptional(),
    Range: RangeSchema.and(
      z.any().openapi({ xml: { name: 'range' }, description: 'The encoding range of the video.' }),
    ).exactOptional(),
    ScanMode: ScanModeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'scanMode' },
          description: 'The type of compression that was used to smooth the video’s appearance',
        }),
    ).exactOptional(),
    Tcs: TcsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tcs' },
          description: 'The transfer characteristic system (TCS) that is used in the video.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'FMTP', required: [] })
  .openapi('Fmtp')

const MediaStreamAttributesSchema = z
  .object({
    Fmtp: FmtpSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'fmtp' },
          description: 'A set of parameters that define the media stream.',
        }),
    ),
    Lang: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'lang' },
          description: 'The audio language, in a format that is recognized by the receiver.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Fmtp'], description: 'Attributes that are related to the media stream.' })
  .openapi('MediaStreamAttributes')

const MediaStreamTypeSchema = z
  .enum(['video', 'audio', 'ancillary-data'])
  .openapi('MediaStreamType')

const MediaStreamSchema = z
  .object({
    Attributes: MediaStreamAttributesSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'attributes' },
          description: 'Attributes that are related to the media stream.',
        }),
    ).exactOptional(),
    ClockRate: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clockRate' },
          description: 'The sample rate for the stream. This value is measured in Hz.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description:
            'A description that can help you quickly identify what your media stream is used for.',
        }),
    ).exactOptional(),
    Fmt: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'fmt' },
          description:
            'The format type number (sometimes referred to as RTP payload type) of the media stream. MediaConnect assigns this value to the media stream. For ST 2110 JPEG XS outputs, you need to provide this value to the receiver.',
        }),
    ),
    MediaStreamId: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaStreamId' },
          description: 'A unique identifier for the media stream.',
        }),
    ),
    MediaStreamName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaStreamName' },
          description: 'A name that helps you distinguish one media stream from another.',
        }),
    ),
    MediaStreamType: MediaStreamTypeSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'mediaStreamType' }, description: 'The type of media stream.' }),
    ),
    VideoFormat: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'videoFormat' }, description: 'The resolution of the video.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MediaStreamType', 'MediaStreamId', 'MediaStreamName', 'Fmt'],
    description:
      'A single track or stream of media that contains video, audio, or ancillary data. After you add a media stream to a flow, you can associate it with sources and outputs on that flow, as long as they use the CDI protocol or the ST 2110 JPEG XS protocol. Each source or output can consist of one or many media streams.',
  })
  .openapi('MediaStream')

const ListOfMediaStreamSchema = z.array(MediaStreamSchema).openapi('ListOfMediaStream')

const AddFlowMediaStreamsResponseSchema = z
  .object({
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The ARN of the flow that you added media streams to.',
        }),
    ).exactOptional(),
    MediaStreams: ListOfMediaStreamSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaStreams' },
          description: 'The media streams that you added to the flow.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddFlowMediaStreamsResponse')

const FmtpRequestSchema = z
  .object({
    ChannelOrder: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'channelOrder' },
          description: 'The format of the audio channel.',
        }),
    ).exactOptional(),
    Colorimetry: ColorimetrySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'colorimetry' },
          description: 'The format that is used for the representation of color.',
        }),
    ).exactOptional(),
    ExactFramerate: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'exactFramerate' },
          description:
            'The frame rate for the video stream, in frames/second. For example: 60000/1001. If you specify a whole number, MediaConnect uses a ratio of N/1. For example, if you specify 60, MediaConnect uses 60/1 as the exactFramerate.',
        }),
    ).exactOptional(),
    Par: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'par' },
          description: 'The pixel aspect ratio (PAR) of the video.',
        }),
    ).exactOptional(),
    Range: RangeSchema.and(
      z.any().openapi({ xml: { name: 'range' }, description: 'The encoding range of the video.' }),
    ).exactOptional(),
    ScanMode: ScanModeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'scanMode' },
          description: 'The type of compression that was used to smooth the video’s appearance.',
        }),
    ).exactOptional(),
    Tcs: TcsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tcs' },
          description: 'The transfer characteristic system (TCS) that is used in the video.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The settings that you want to use to define the media stream.',
    required: [],
  })
  .openapi('FmtpRequest')

const MediaStreamAttributesRequestSchema = z
  .object({
    Fmtp: FmtpRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'fmtp' },
          description: 'The settings that you want to use to define the media stream.',
        }),
    ).exactOptional(),
    Lang: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'lang' },
          description: 'The audio language, in a format that is recognized by the receiver.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Attributes that are related to the media stream.', required: [] })
  .openapi('MediaStreamAttributesRequest')

const AddMediaStreamRequestSchema = z
  .object({
    Attributes: MediaStreamAttributesRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'attributes' },
          description: 'The attributes that you want to assign to the new media stream.',
        }),
    ).exactOptional(),
    ClockRate: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clockRate' },
          description:
            'The sample rate (in Hz) for the stream. If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description:
            'A description that can help you quickly identify what your media stream is used for.',
        }),
    ).exactOptional(),
    MediaStreamId: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaStreamId' },
          description: 'A unique identifier for the media stream.',
        }),
    ),
    MediaStreamName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaStreamName' },
          description: 'A name that helps you distinguish one media stream from another.',
        }),
    ),
    MediaStreamType: MediaStreamTypeSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'mediaStreamType' }, description: 'The type of media stream.' }),
    ),
    VideoFormat: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'videoFormat' }, description: 'The resolution of the video.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MediaStreamType', 'MediaStreamId', 'MediaStreamName'],
    description: 'The media stream that you want to add to the flow.',
  })
  .openapi('AddMediaStreamRequest')

const DestinationConfigurationSchema = z
  .object({
    DestinationIp: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'destinationIp' },
          description: 'The IP address where contents of the media stream will be sent.',
        }),
    ),
    DestinationPort: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'destinationPort' },
          description:
            'The port to use when the content of the media stream is distributed to the output.',
        }),
    ),
    Interface: InterfaceSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'interface' },
          description:
            'The VPC interface that is used for the media stream associated with the output.',
        }),
    ),
    OutboundIp: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'outboundIp' },
          description:
            'The IP address that the receiver requires in order to establish a connection with the flow. This value is represented by the elastic network interface IP address of the VPC. This field applies only to outputs that use the CDI or ST 2110 JPEG XS protocol.',
        }),
    ),
  })
  .openapi({
    required: ['DestinationIp', 'DestinationPort', 'Interface', 'OutboundIp'],
    description: 'The transport parameters that are associated with an outbound media stream.',
  })
  .openapi('DestinationConfiguration')

const ListOfDestinationConfigurationSchema = z
  .array(DestinationConfigurationSchema)
  .openapi('ListOfDestinationConfiguration')

const DoubleSchema = z.float64().openapi('Double')

const EncoderProfileSchema = z.enum(['main', 'high']).openapi('EncoderProfile')

const EncodingParametersSchema = z
  .object({
    CompressionFactor: DoubleSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'compressionFactor' },
          description:
            'A value that is used to calculate compression for an output. The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) * (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are floating point numbers in the range of 3.0 to 10.0, inclusive.',
        }),
    ),
    EncoderProfile: EncoderProfileSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encoderProfile' },
          description:
            'A setting on the encoder that drives compression settings. This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol.',
        }),
    ),
  })
  .openapi({
    required: ['EncoderProfile', 'CompressionFactor'],
    description:
      'A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.',
  })
  .openapi('EncodingParameters')

const MediaStreamOutputConfigurationSchema = z
  .object({
    DestinationConfigurations: ListOfDestinationConfigurationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'destinationConfigurations' },
          description:
            'The transport parameters that are associated with each outbound media stream.',
        }),
    ).exactOptional(),
    EncodingName: EncodingNameSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encodingName' },
          description:
            'The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.',
        }),
    ),
    EncodingParameters: EncodingParametersSchema.and(
      z.any().openapi({ xml: { name: 'encodingParameters' }, description: 'Encoding parameters' }),
    ).exactOptional(),
    MediaStreamName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaStreamName' },
          description: 'The name of the media stream.',
        }),
    ),
  })
  .openapi({
    required: ['MediaStreamName', 'EncodingName'],
    description:
      'The media stream that is associated with the output, and the parameters for that association.',
  })
  .openapi('MediaStreamOutputConfiguration')

const ListOfMediaStreamOutputConfigurationSchema = z
  .array(MediaStreamOutputConfigurationSchema)
  .openapi('ListOfMediaStreamOutputConfiguration')

const ListOfIntegerSchema = z.array(IntegerSchema).openapi('ListOfInteger')

const OutputSchema = z
  .object({
    DataTransferSubscriberFeePercent: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'dataTransferSubscriberFeePercent' },
          description:
            'Percentage from 0-100 of the data transfer cost to be billed to the subscriber.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'description' }, description: 'A description of the output.' }),
    ).exactOptional(),
    Destination: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'destination' },
          description: 'The address where you want to send the output.',
        }),
    ).exactOptional(),
    Encryption: EncryptionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encryption' },
          description:
            'The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).',
        }),
    ).exactOptional(),
    EntitlementArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'entitlementArn' },
          description:
            "The ARN of the entitlement on the originator''s flow. This value is relevant only on entitled flows.",
        }),
    ).exactOptional(),
    ListenerAddress: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'listenerAddress' },
          description:
            'The IP address that the receiver requires in order to establish a connection with the flow. For public networking, the ListenerAddress is represented by the elastic IP address of the flow. For private networking, the ListenerAddress is represented by the elastic network interface IP address of the VPC. This field applies only to outputs that use the Zixi pull or SRT listener protocol.',
        }),
    ).exactOptional(),
    MediaLiveInputArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaLiveInputArn' },
          description:
            'The input ARN of the AWS Elemental MediaLive channel. This parameter is relevant only for outputs that were added by creating a MediaLive input.',
        }),
    ).exactOptional(),
    MediaStreamOutputConfigurations: ListOfMediaStreamOutputConfigurationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaStreamOutputConfigurations' },
          description:
            'The configuration for each media stream that is associated with the output.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description: 'The name of the output. This value must be unique within the current flow.',
        }),
    ),
    OutputArn: StringSchema.and(
      z.any().openapi({ xml: { name: 'outputArn' }, description: 'The ARN of the output.' }),
    ),
    Port: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'port' },
          description: 'The port to use when content is distributed to this output.',
        }),
    ).exactOptional(),
    Transport: TransportSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'transport' },
          description: 'Attributes related to the transport stream that are used in the output.',
        }),
    ).exactOptional(),
    VpcInterfaceAttachment: VpcInterfaceAttachmentSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcInterfaceAttachment' },
          description: 'The name of the VPC interface attachment to use for this output.',
        }),
    ).exactOptional(),
    BridgeArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bridgeArn' },
          description: 'The ARN of the bridge that added this output.',
        }),
    ).exactOptional(),
    BridgePorts: ListOfIntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bridgePorts' },
          description: 'The bridge output ports currently in use.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['OutputArn', 'Name'], description: 'The settings for an output.' })
  .openapi('Output')

const ListOfOutputSchema = z.array(OutputSchema).openapi('ListOfOutput')

const AddFlowOutputsResponseSchema = z
  .object({
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The ARN of the flow that these outputs were added to.',
        }),
    ).exactOptional(),
    Outputs: ListOfOutputSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'outputs' },
          description: 'The details of the newly added outputs.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddFlowOutputsResponse')

const InterfaceRequestSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the VPC interface.' }),
    ),
  })
  .openapi({
    required: ['Name'],
    description:
      'The VPC interface that you want to designate where the media stream is coming from or going to.',
  })
  .openapi('InterfaceRequest')

const DestinationConfigurationRequestSchema = z
  .object({
    DestinationIp: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'destinationIp' },
          description:
            'The IP address where you want MediaConnect to send contents of the media stream.',
        }),
    ),
    DestinationPort: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'destinationPort' },
          description:
            'The port that you want MediaConnect to use when it distributes the media stream to the output.',
        }),
    ),
    Interface: InterfaceRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'interface' },
          description:
            'The VPC interface that you want to use for the media stream associated with the output.',
        }),
    ),
  })
  .openapi({
    required: ['DestinationIp', 'DestinationPort', 'Interface'],
    description:
      'The transport parameters that you want to associate with an outbound media stream.',
  })
  .openapi('DestinationConfigurationRequest')

const ListOfDestinationConfigurationRequestSchema = z
  .array(DestinationConfigurationRequestSchema)
  .openapi('ListOfDestinationConfigurationRequest')

const EncodingParametersRequestSchema = z
  .object({
    CompressionFactor: DoubleSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'compressionFactor' },
          description:
            'A value that is used to calculate compression for an output. The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) * (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are floating point numbers in the range of 3.0 to 10.0, inclusive.',
        }),
    ),
    EncoderProfile: EncoderProfileSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encoderProfile' },
          description:
            'A setting on the encoder that drives compression settings. This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, if at least one source on the flow uses the CDI protocol.',
        }),
    ),
  })
  .openapi({
    required: ['EncoderProfile', 'CompressionFactor'],
    description:
      'A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.',
  })
  .openapi('EncodingParametersRequest')

const MediaStreamOutputConfigurationRequestSchema = z
  .object({
    DestinationConfigurations: ListOfDestinationConfigurationRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'destinationConfigurations' },
          description: 'The transport parameters that you want to associate with the media stream.',
        }),
    ).exactOptional(),
    EncodingName: EncodingNameSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encodingName' },
          description:
            'The format that will be used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.',
        }),
    ),
    EncodingParameters: EncodingParametersRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encodingParameters' },
          description:
            'A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.',
        }),
    ).exactOptional(),
    MediaStreamName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaStreamName' },
          description: 'The name of the media stream that is associated with the output.',
        }),
    ),
  })
  .openapi({
    required: ['MediaStreamName', 'EncodingName'],
    description:
      'The media stream that you want to associate with the output, and the parameters for that association.',
  })
  .openapi('MediaStreamOutputConfigurationRequest')

const ListOfMediaStreamOutputConfigurationRequestSchema = z
  .array(MediaStreamOutputConfigurationRequestSchema)
  .openapi('ListOfMediaStreamOutputConfigurationRequest')

const AddOutputRequestSchema = z
  .object({
    CidrAllowList: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'cidrAllowList' },
          description:
            'The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description:
            'A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user.',
        }),
    ).exactOptional(),
    Destination: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'destination' },
          description: 'The IP address from which video will be sent to output destinations.',
        }),
    ).exactOptional(),
    Encryption: EncryptionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encryption' },
          description:
            'The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key). Allowable encryption types: static-key.',
        }),
    ).exactOptional(),
    MaxLatency: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxLatency' },
          description:
            'The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.',
        }),
    ).exactOptional(),
    MediaStreamOutputConfigurations: ListOfMediaStreamOutputConfigurationRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaStreamOutputConfigurations' },
          description:
            'The media streams that are associated with the output, and the parameters for those associations.',
        }),
    ).exactOptional(),
    MinLatency: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'minLatency' },
          description:
            'The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description: 'The name of the output. This value must be unique within the current flow.',
        }),
    ).exactOptional(),
    Port: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'port' },
          description: 'The port to use when content is distributed to this output.',
        }),
    ).exactOptional(),
    Protocol: ProtocolSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'protocol' }, description: 'The protocol to use for the output.' }),
    ),
    RemoteId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'remoteId' },
          description: 'The remote ID for the Zixi-pull output stream.',
        }),
    ).exactOptional(),
    SenderControlPort: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'senderControlPort' },
          description:
            'The port that the flow uses to send outbound requests to initiate connection with the sender.',
        }),
    ).exactOptional(),
    SmoothingLatency: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'smoothingLatency' },
          description: 'The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.',
        }),
    ).exactOptional(),
    StreamId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'streamId' },
          description:
            'The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.',
        }),
    ).exactOptional(),
    VpcInterfaceAttachment: VpcInterfaceAttachmentSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcInterfaceAttachment' },
          description: 'The name of the VPC interface attachment to use for this output.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Protocol'], description: 'The output that you want to add to this flow.' })
  .openapi('AddOutputRequest')

const AddFlowOutputs420ExceptionSchema = z.any().openapi('AddFlowOutputs420Exception')

const SourceSchema: z.ZodType<SourceType> = z
  .lazy(() =>
    z
      .object({
        DataTransferSubscriberFeePercent: IntegerSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'dataTransferSubscriberFeePercent' },
              description:
                'Percentage from 0-100 of the data transfer cost to be billed to the subscriber.',
            }),
        ).exactOptional(),
        Decryption: EncryptionSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'decryption' },
              description:
                'The type of encryption that is used on the content ingested from this source.',
            }),
        ).exactOptional(),
        Description: StringSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'description' },
              description:
                'A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.',
            }),
        ).exactOptional(),
        EntitlementArn: StringSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'entitlementArn' },
              description:
                "The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.",
            }),
        ).exactOptional(),
        IngestIp: StringSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'ingestIp' },
              description:
                'The IP address that the flow will be listening on for incoming content.',
            }),
        ).exactOptional(),
        IngestPort: IntegerSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'ingestPort' },
              description: 'The port that the flow will be listening on for incoming content.',
            }),
        ).exactOptional(),
        MediaStreamSourceConfigurations: ListOfMediaStreamSourceConfigurationSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'mediaStreamSourceConfigurations' },
              description:
                'The media streams that are associated with the source, and the parameters for those associations.',
            }),
        ).exactOptional(),
        Name: StringSchema.and(
          z.any().openapi({ xml: { name: 'name' }, description: 'The name of the source.' }),
        ),
        SenderControlPort: IntegerSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'senderControlPort' },
              description:
                'The port that the flow uses to send outbound requests to initiate connection with the sender.',
            }),
        ).exactOptional(),
        SenderIpAddress: StringSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'senderIpAddress' },
              description:
                'The IP address that the flow communicates with to initiate connection with the sender.',
            }),
        ).exactOptional(),
        SourceArn: StringSchema.and(
          z.any().openapi({ xml: { name: 'sourceArn' }, description: 'The ARN of the source.' }),
        ),
        Transport: TransportSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'transport' },
              description:
                'Attributes related to the transport stream that are used in the source.',
            }),
        ).exactOptional(),
        VpcInterfaceName: StringSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'vpcInterfaceName' },
              description: 'The name of the VPC interface that is used for this source.',
            }),
        ).exactOptional(),
        WhitelistCidr: StringSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'whitelistCidr' },
              description:
                'The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.',
            }),
        ).exactOptional(),
        GatewayBridgeSource: GatewayBridgeSourceSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'gatewayBridgeSource' },
              description:
                'The source configuration for cloud flows receiving a stream from a bridge.',
            }),
        ).exactOptional(),
      })
      .openapi({
        required: ['Name', 'SourceArn'],
        description: 'The settings for the source of the flow.',
      }),
  )
  .openapi('Source')

const ListOfSourceSchema = z.array(SourceSchema).openapi('ListOfSource')

const AddFlowSourcesResponseSchema = z
  .object({
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The ARN of the flow that these sources were added to.',
        }),
    ).exactOptional(),
    Sources: ListOfSourceSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sources' },
          description: 'The details of the newly added sources.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddFlowSourcesResponse')

const InputConfigurationRequestSchema = z
  .object({
    InputPort: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'inputPort' },
          description: 'The port that you want the flow to listen on for an incoming media stream.',
        }),
    ),
    Interface: InterfaceRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'interface' },
          description: 'The VPC interface that you want to use for the incoming media stream.',
        }),
    ),
  })
  .openapi({
    required: ['InputPort', 'Interface'],
    description:
      'The transport parameters that you want to associate with an incoming media stream.',
  })
  .openapi('InputConfigurationRequest')

const ListOfInputConfigurationRequestSchema = z
  .array(InputConfigurationRequestSchema)
  .openapi('ListOfInputConfigurationRequest')

const MediaStreamSourceConfigurationRequestSchema = z
  .object({
    EncodingName: EncodingNameSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encodingName' },
          description:
            'The format you want to use to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.',
        }),
    ),
    InputConfigurations: ListOfInputConfigurationRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'inputConfigurations' },
          description: 'The transport parameters that you want to associate with the media stream.',
        }),
    ).exactOptional(),
    MediaStreamName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaStreamName' },
          description: 'The name of the media stream.',
        }),
    ),
  })
  .openapi({
    required: ['MediaStreamName', 'EncodingName'],
    description: 'The definition of a media stream that you want to associate with the source.',
  })
  .openapi('MediaStreamSourceConfigurationRequest')

const ListOfMediaStreamSourceConfigurationRequestSchema = z
  .array(MediaStreamSourceConfigurationRequestSchema)
  .openapi('ListOfMediaStreamSourceConfigurationRequest')

const SetGatewayBridgeSourceRequestSchema = z
  .object({
    BridgeArn: StringSchema.and(
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'string') {
            if (!new RegExp('^arn:.+:mediaconnect.+:bridge:.+$').test(val)) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({
          xml: { name: 'bridgeArn' },
          description: 'The ARN of the bridge feeding this flow.',
        }),
    ),
    VpcInterfaceAttachment: VpcInterfaceAttachmentSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcInterfaceAttachment' },
          description: 'The name of the VPC interface attachment to use for this bridge source.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BridgeArn'],
    description: 'The source configuration for cloud flows receiving a stream from a bridge.',
  })
  .openapi('SetGatewayBridgeSourceRequest')

const SetSourceRequestSchema = z
  .object({
    Decryption: EncryptionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'decryption' },
          description:
            'The type of encryption that is used on the content ingested from this source. Allowable encryption types: static-key.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description:
            'A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.',
        }),
    ).exactOptional(),
    EntitlementArn: StringSchema.and(
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'string') {
            if (!new RegExp('^arn:.+:mediaconnect.+:entitlement:.+$').test(val)) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({
          xml: { name: 'entitlementArn' },
          description:
            "The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.",
        }),
    ).exactOptional(),
    IngestPort: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'ingestPort' },
          description: 'The port that the flow will be listening on for incoming content.',
        }),
    ).exactOptional(),
    MaxBitrate: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxBitrate' },
          description: 'The smoothing max bitrate (in bps) for RIST, RTP, and RTP-FEC streams.',
        }),
    ).exactOptional(),
    MaxLatency: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxLatency' },
          description:
            'The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.',
        }),
    ).exactOptional(),
    MaxSyncBuffer: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxSyncBuffer' },
          description:
            'The size of the buffer (in milliseconds) to use to sync incoming source data.',
        }),
    ).exactOptional(),
    MediaStreamSourceConfigurations: ListOfMediaStreamSourceConfigurationRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaStreamSourceConfigurations' },
          description:
            'The media streams that are associated with the source, and the parameters for those associations.',
        }),
    ).exactOptional(),
    MinLatency: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'minLatency' },
          description:
            'The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the source.' }),
    ).exactOptional(),
    Protocol: ProtocolSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'protocol' },
          description: 'The protocol that is used by the source.',
        }),
    ).exactOptional(),
    SenderControlPort: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'senderControlPort' },
          description:
            'The port that the flow uses to send outbound requests to initiate connection with the sender.',
        }),
    ).exactOptional(),
    SenderIpAddress: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'senderIpAddress' },
          description:
            'The IP address that the flow communicates with to initiate connection with the sender.',
        }),
    ).exactOptional(),
    SourceListenerAddress: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sourceListenerAddress' },
          description: 'Source IP or domain name for SRT-caller protocol.',
        }),
    ).exactOptional(),
    SourceListenerPort: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sourceListenerPort' },
          description: 'Source port for SRT-caller protocol.',
        }),
    ).exactOptional(),
    StreamId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'streamId' },
          description:
            'The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.',
        }),
    ).exactOptional(),
    VpcInterfaceName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcInterfaceName' },
          description: 'The name of the VPC interface to use for this source.',
        }),
    ).exactOptional(),
    WhitelistCidr: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'whitelistCidr' },
          description:
            'The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.',
        }),
    ).exactOptional(),
    GatewayBridgeSource: SetGatewayBridgeSourceRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'gatewayBridgeSource' },
          description: 'The source configuration for cloud flows receiving a stream from a bridge.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The settings for the source of the flow.', required: [] })
  .openapi('SetSourceRequest')

const NetworkInterfaceTypeSchema = z.enum(['ena', 'efa']).openapi('NetworkInterfaceType')

const VpcInterfaceSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description: 'Immutable and has to be a unique against other VpcInterfaces in this Flow.',
        }),
    ),
    NetworkInterfaceIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'networkInterfaceIds' },
          description:
            "IDs of the network interfaces created in customer's account by MediaConnect.",
        }),
    ),
    NetworkInterfaceType: NetworkInterfaceTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'networkInterfaceType' },
          description: 'The type of network interface.',
        }),
    ),
    RoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'roleArn' },
          description: "Role Arn MediaConnect can assumes to create ENIs in customer's account",
        }),
    ),
    SecurityGroupIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'securityGroupIds' },
          description: 'Security Group IDs to be used on ENI.',
        }),
    ),
    SubnetId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'subnetId' },
          description: 'Subnet must be in the AZ of the Flow',
        }),
    ),
  })
  .openapi({
    required: [
      'NetworkInterfaceType',
      'NetworkInterfaceIds',
      'SubnetId',
      'SecurityGroupIds',
      'RoleArn',
      'Name',
    ],
    description: 'The settings for a VPC Source.',
  })
  .openapi('VpcInterface')

const ListOfVpcInterfaceSchema = z.array(VpcInterfaceSchema).openapi('ListOfVpcInterface')

const AddFlowVpcInterfacesResponseSchema = z
  .object({
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The ARN of the flow that these VPC interfaces were added to.',
        }),
    ).exactOptional(),
    VpcInterfaces: ListOfVpcInterfaceSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcInterfaces' },
          description: 'The details of the newly added VPC interfaces.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddFlowVpcInterfacesResponse')

const VpcInterfaceRequestSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description:
            'The name of the VPC Interface. This value must be unique within the current flow.',
        }),
    ),
    NetworkInterfaceType: NetworkInterfaceTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'networkInterfaceType' },
          description:
            'The type of network interface. If this value is not included in the request, MediaConnect uses ENA as the networkInterfaceType.',
        }),
    ).exactOptional(),
    RoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'roleArn' },
          description: "Role Arn MediaConnect can assumes to create ENIs in customer's account",
        }),
    ),
    SecurityGroupIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'securityGroupIds' },
          description: 'Security Group IDs to be used on ENI.',
        }),
    ),
    SubnetId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'subnetId' },
          description: 'Subnet must be in the AZ of the Flow',
        }),
    ),
  })
  .openapi({
    required: ['SubnetId', 'SecurityGroupIds', 'RoleArn', 'Name'],
    description: 'Desired VPC Interface for a Flow',
  })
  .openapi('VpcInterfaceRequest')

const BridgeSchema: z.ZodType<BridgeType> = z
  .lazy(() =>
    z
      .object({
        BridgeArn: StringSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'bridgeArn' },
              description: 'The Amazon Resource Number (ARN) of the bridge.',
            }),
        ),
        BridgeMessages: ListOfMessageDetailSchema.and(
          z.any().openapi({ xml: { name: 'bridgeMessages' } }),
        ).exactOptional(),
        BridgeState: BridgeStateSchema.and(z.any().openapi({ xml: { name: 'bridgeState' } })),
        EgressGatewayBridge: EgressGatewayBridgeSchema.and(
          z.any().openapi({ xml: { name: 'egressGatewayBridge' } }),
        ).exactOptional(),
        IngressGatewayBridge: IngressGatewayBridgeSchema.and(
          z.any().openapi({ xml: { name: 'ingressGatewayBridge' } }),
        ).exactOptional(),
        Name: StringSchema.and(
          z.any().openapi({ xml: { name: 'name' }, description: 'The name of the bridge.' }),
        ),
        Outputs: ListOfBridgeOutputSchema.and(
          z.any().openapi({ xml: { name: 'outputs' }, description: 'The outputs on this bridge.' }),
        ).exactOptional(),
        PlacementArn: StringSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'placementArn' },
              description: 'The placement Amazon Resource Number (ARN) of the bridge.',
            }),
        ),
        SourceFailoverConfig: FailoverConfigSchema.and(
          z.any().openapi({ xml: { name: 'sourceFailoverConfig' } }),
        ).exactOptional(),
        Sources: ListOfBridgeSourceSchema.and(
          z.any().openapi({ xml: { name: 'sources' }, description: 'The sources on this bridge.' }),
        ).exactOptional(),
      })
      .openapi({
        required: ['BridgeArn', 'BridgeState', 'PlacementArn', 'Name'],
        description:
          "A Bridge is the connection between your datacenter's Instances and the AWS cloud. A bridge can be used to send video from the AWS cloud to your datacenter or from your datacenter to the AWS cloud.",
      }),
  )
  .openapi('Bridge')

const CreateBridgeResponseSchema = z
  .object({
    Bridge: BridgeSchema.and(z.any().openapi({ xml: { name: 'bridge' } })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateBridgeResponse')

const CreateBridge420ExceptionSchema = z.any().openapi('CreateBridge420Exception')

const EntitlementStatusSchema = z.enum(['ENABLED', 'DISABLED']).openapi('EntitlementStatus')

const EntitlementSchema = z
  .object({
    DataTransferSubscriberFeePercent: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'dataTransferSubscriberFeePercent' },
          description:
            'Percentage from 0-100 of the data transfer cost to be billed to the subscriber.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'A description of the entitlement.',
        }),
    ).exactOptional(),
    Encryption: EncryptionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encryption' },
          description:
            'The type of encryption that will be used on the output that is associated with this entitlement.',
        }),
    ).exactOptional(),
    EntitlementArn: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'entitlementArn' }, description: 'The ARN of the entitlement.' }),
    ),
    EntitlementStatus: EntitlementStatusSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'entitlementStatus' },
          description: 'An indication of whether the entitlement is enabled.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the entitlement.' }),
    ),
    Subscribers: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'subscribers' },
          description:
            'The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.',
        }),
    ),
  })
  .openapi({
    required: ['EntitlementArn', 'Subscribers', 'Name'],
    description: 'The settings for a flow entitlement.',
  })
  .openapi('Entitlement')

const ListOfEntitlementSchema = z.array(EntitlementSchema).openapi('ListOfEntitlement')

const StatusSchema = z
  .enum(['STANDBY', 'ACTIVE', 'UPDATING', 'DELETING', 'STARTING', 'STOPPING', 'ERROR'])
  .openapi('Status')

const MaintenanceDaySchema = z
  .enum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
  .openapi('MaintenanceDay')

const MaintenanceSchema = z
  .object({
    MaintenanceDay: MaintenanceDaySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maintenanceDay' },
          description:
            'A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.',
        }),
    ).exactOptional(),
    MaintenanceDeadline: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maintenanceDeadline' },
          description:
            'The Maintenance has to be performed before this deadline in ISO UTC format. Example: 2021-01-30T08:30:00Z.',
        }),
    ).exactOptional(),
    MaintenanceScheduledDate: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maintenanceScheduledDate' },
          description:
            'A scheduled date in ISO UTC format when the maintenance will happen. Use YYYY-MM-DD format. Example: 2021-01-30.',
        }),
    ).exactOptional(),
    MaintenanceStartHour: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maintenanceStartHour' },
          description:
            'UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The maintenance setting of a flow', required: [] })
  .openapi('Maintenance')

const FlowSchema = z
  .object({
    AvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'availabilityZone' },
          description:
            'The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.',
        }),
    ),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description:
            'A description of the flow. This value is not used or seen outside of the current AWS Elemental MediaConnect account.',
        }),
    ).exactOptional(),
    EgressIp: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'egressIp' },
          description: 'The IP address from which video will be sent to output destinations.',
        }),
    ).exactOptional(),
    Entitlements: ListOfEntitlementSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'entitlements' }, description: 'The entitlements in this flow.' }),
    ),
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The Amazon Resource Name (ARN) of the flow.',
        }),
    ),
    MediaStreams: ListOfMediaStreamSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaStreams' },
          description:
            'The media streams that are associated with the flow. After you associate a media stream with a source, you can also associate it with outputs on the flow.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the flow.' }),
    ),
    Outputs: ListOfOutputSchema.and(
      z.any().openapi({ xml: { name: 'outputs' }, description: 'The outputs in this flow.' }),
    ),
    Source: SourceSchema.and(z.any().openapi({ xml: { name: 'source' } })),
    SourceFailoverConfig: FailoverConfigSchema.and(
      z.any().openapi({ xml: { name: 'sourceFailoverConfig' } }),
    ).exactOptional(),
    Sources: ListOfSourceSchema.and(z.any().openapi({ xml: { name: 'sources' } })).exactOptional(),
    Status: StatusSchema.and(
      z.any().openapi({ xml: { name: 'status' }, description: 'The current status of the flow.' }),
    ),
    VpcInterfaces: ListOfVpcInterfaceSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcInterfaces' },
          description: 'The VPC Interfaces for this flow.',
        }),
    ).exactOptional(),
    Maintenance: MaintenanceSchema.and(
      z.any().openapi({ xml: { name: 'maintenance' } }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'Status',
      'AvailabilityZone',
      'Source',
      'Name',
      'Entitlements',
      'Outputs',
      'FlowArn',
    ],
    description: 'The settings for a flow, including its source, outputs, and entitlements.',
  })
  .openapi('Flow')

const CreateFlowResponseSchema = z
  .object({ Flow: FlowSchema.and(z.any().openapi({ xml: { name: 'flow' } })).exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateFlowResponse')

const GrantEntitlementRequestSchema = z
  .object({
    DataTransferSubscriberFeePercent: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'dataTransferSubscriberFeePercent' },
          description:
            'Percentage from 0-100 of the data transfer cost to be billed to the subscriber.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description:
            'A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user.',
        }),
    ).exactOptional(),
    Encryption: EncryptionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encryption' },
          description:
            'The type of encryption that will be used on the output that is associated with this entitlement. Allowable encryption types: static-key, speke.',
        }),
    ).exactOptional(),
    EntitlementStatus: EntitlementStatusSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'entitlementStatus' },
          description:
            'An indication of whether the new entitlement should be enabled or disabled as soon as it is created. If you don’t specify the entitlementStatus field in your request, MediaConnect sets it to ENABLED.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description:
            'The name of the entitlement. This value must be unique within the current flow.',
        }),
    ).exactOptional(),
    Subscribers: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'subscribers' },
          description:
            'The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flows using your content as the source.',
        }),
    ),
  })
  .openapi({
    required: ['Subscribers'],
    description: 'The entitlements that you want to grant on a flow.',
  })
  .openapi('GrantEntitlementRequest')

const CreateFlow420ExceptionSchema = z.any().openapi('CreateFlow420Exception')

const GatewayStateSchema = z
  .enum(['CREATING', 'ACTIVE', 'UPDATING', 'ERROR', 'DELETING', 'DELETED'])
  .openapi('GatewayState')

const GatewayNetworkSchema = z
  .object({
    CidrBlock: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'cidrBlock' },
          description:
            'A unique IP address range to use for this network. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.',
        }),
    ),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description:
            'The name of the network. This name is used to reference the network and must be unique among networks in this gateway.',
        }),
    ),
  })
  .openapi({ required: ['CidrBlock', 'Name'], description: 'The network settings for a gateway.' })
  .openapi('GatewayNetwork')

const ListOfGatewayNetworkSchema = z.array(GatewayNetworkSchema).openapi('ListOfGatewayNetwork')

const GatewaySchema = z
  .object({
    EgressCidrBlocks: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'egressCidrBlocks' },
          description:
            'The range of IP addresses that contribute content or initiate output requests for flows communicating with this gateway. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.',
        }),
    ),
    GatewayArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'gatewayArn' },
          description: 'The Amazon Resource Name (ARN) of the gateway.',
        }),
    ),
    GatewayMessages: ListOfMessageDetailSchema.and(
      z.any().openapi({ xml: { name: 'gatewayMessages' } }),
    ).exactOptional(),
    GatewayState: GatewayStateSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'gatewayState' },
          description: 'The current status of the gateway.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description:
            'The name of the gateway. This name can not be modified after the gateway is created.',
        }),
    ),
    Networks: ListOfGatewayNetworkSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'networks' },
          description: 'The list of networks in the gateway.',
        }),
    ),
  })
  .openapi({
    required: ['GatewayArn', 'Networks', 'EgressCidrBlocks', 'Name'],
    description: 'The settings for a gateway, including its networks.',
  })
  .openapi('Gateway')

const CreateGatewayResponseSchema = z
  .object({
    Gateway: GatewaySchema.and(z.any().openapi({ xml: { name: 'gateway' } })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateGatewayResponse')

const CreateGateway420ExceptionSchema = z.any().openapi('CreateGateway420Exception')

const DeleteBridgeResponseSchema = z
  .object({
    BridgeArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bridgeArn' },
          description: 'The Amazon Resource Number (ARN) of the deleted bridge.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteBridgeResponse')

const DeleteFlowResponseSchema = z
  .object({
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The ARN of the flow that was deleted.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'status' },
          description: 'The status of the flow when the DeleteFlow process begins.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteFlowResponse')

const DeleteGatewayResponseSchema = z
  .object({
    GatewayArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'gatewayArn' },
          description: 'The Amazon Resource Name (ARN) of the gateway that was deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteGatewayResponse')

const InstanceStateSchema = z
  .enum([
    'REGISTERING',
    'ACTIVE',
    'DEREGISTERING',
    'DEREGISTERED',
    'REGISTRATION_ERROR',
    'DEREGISTRATION_ERROR',
  ])
  .openapi('InstanceState')

const DeregisterGatewayInstanceResponseSchema = z
  .object({
    GatewayInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'gatewayInstanceArn' },
          description: 'The Amazon Resource Name (ARN) of the instance.',
        }),
    ).exactOptional(),
    InstanceState: InstanceStateSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'instanceState' }, description: 'The status of the instance.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeregisterGatewayInstanceResponse')

const DescribeBridgeResponseSchema = z
  .object({
    Bridge: BridgeSchema.and(z.any().openapi({ xml: { name: 'bridge' } })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeBridgeResponse')

const MessagesSchema = z
  .object({
    Errors: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'errors' },
          description:
            'A list of errors that might have been generated from processes on this flow.',
        }),
    ),
  })
  .openapi({ required: ['Errors'], description: 'Messages that provide the state of the flow.' })
  .openapi('Messages')

const DescribeFlowResponseSchema = z
  .object({
    Flow: FlowSchema.and(z.any().openapi({ xml: { name: 'flow' } })).exactOptional(),
    Messages: MessagesSchema.and(z.any().openapi({ xml: { name: 'messages' } })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFlowResponse')

const DescribeGatewayResponseSchema = z
  .object({
    Gateway: GatewaySchema.and(z.any().openapi({ xml: { name: 'gateway' } })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeGatewayResponse')

const BridgePlacementSchema = z.enum(['AVAILABLE', 'LOCKED']).openapi('BridgePlacement')

const ConnectionStatusSchema = z.enum(['CONNECTED', 'DISCONNECTED']).openapi('ConnectionStatus')

const GatewayInstanceSchema = z
  .object({
    BridgePlacement: BridgePlacementSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bridgePlacement' },
          description:
            'The availability of the instance to host new bridges. The bridgePlacement property can be LOCKED or AVAILABLE. If it is LOCKED, no new bridges can be deployed to this instance. If it is AVAILABLE, new bridges can be added to this instance.',
        }),
    ),
    ConnectionStatus: ConnectionStatusSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'connectionStatus' },
          description: 'The connection state of the instance.',
        }),
    ),
    GatewayArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'gatewayArn' },
          description: 'The Amazon Resource Name (ARN) of the instance.',
        }),
    ),
    GatewayInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'gatewayInstanceArn' },
          description: 'The Amazon Resource Name (ARN) of the gateway.',
        }),
    ),
    InstanceId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'instanceId' },
          description:
            'The managed instance ID generated by the SSM install. This will begin with "mi-".',
        }),
    ),
    InstanceMessages: ListOfMessageDetailSchema.and(
      z.any().openapi({ xml: { name: 'instanceMessages' } }),
    ).exactOptional(),
    InstanceState: InstanceStateSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'instanceState' }, description: 'The status of the instance.' }),
    ),
    RunningBridgeCount: IntegerSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'runningBridgeCount' }, description: 'The running bridge count.' }),
    ),
  })
  .openapi({
    required: [
      'GatewayArn',
      'InstanceState',
      'GatewayInstanceArn',
      'InstanceId',
      'RunningBridgeCount',
      'BridgePlacement',
      'ConnectionStatus',
    ],
    description: 'The settings for an instance in a gateway.',
  })
  .openapi('GatewayInstance')

const DescribeGatewayInstanceResponseSchema = z
  .object({
    GatewayInstance: GatewayInstanceSchema.and(
      z.any().openapi({ xml: { name: 'gatewayInstance' } }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeGatewayInstanceResponse')

const DurationUnitsSchema = z.literal('MONTHS').openapi('DurationUnits')

const PriceUnitsSchema = z.literal('HOURLY').openapi('PriceUnits')

const ResourceTypeSchema = z.literal('Mbps_Outbound_Bandwidth').openapi('ResourceType')

const ResourceSpecificationSchema = z
  .object({
    ReservedBitrate: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'reservedBitrate' },
          description: 'The amount of outbound bandwidth that is discounted in the offering.',
        }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'resourceType' },
          description: 'The type of resource and the unit that is being billed for.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceType'],
    description: 'A definition of what is being billed for, including the type and amount.',
  })
  .openapi('ResourceSpecification')

const OfferingSchema = z
  .object({
    CurrencyCode: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'currencyCode' },
          description:
            'The type of currency that is used for billing. The currencyCode used for all reservations is US dollars.',
        }),
    ),
    Duration: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'duration' },
          description: 'The length of time that your reservation would be active.',
        }),
    ),
    DurationUnits: DurationUnitsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'durationUnits' },
          description: 'The unit of measurement for the duration of the offering.',
        }),
    ),
    OfferingArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'offeringArn' },
          description: 'The Amazon Resource Name (ARN) that MediaConnect assigns to the offering.',
        }),
    ),
    OfferingDescription: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'offeringDescription' },
          description: 'A description of the offering.',
        }),
    ),
    PricePerUnit: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'pricePerUnit' },
          description:
            'The cost of a single unit. This value, in combination with priceUnits, makes up the rate.',
        }),
    ),
    PriceUnits: PriceUnitsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'priceUnits' },
          description:
            'The unit of measurement that is used for billing. This value, in combination with pricePerUnit, makes up the rate.',
        }),
    ),
    ResourceSpecification: ResourceSpecificationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'resourceSpecification' },
          description:
            'A definition of the amount of outbound bandwidth that you would be reserving if you purchase the offering.',
        }),
    ),
  })
  .openapi({
    required: [
      'CurrencyCode',
      'OfferingArn',
      'OfferingDescription',
      'DurationUnits',
      'Duration',
      'PricePerUnit',
      'ResourceSpecification',
      'PriceUnits',
    ],
    description:
      'A savings plan that reserves a certain amount of outbound bandwidth usage at a discounted rate each month over a period of time.',
  })
  .openapi('Offering')

const DescribeOfferingResponseSchema = z
  .object({
    Offering: OfferingSchema.and(z.any().openapi({ xml: { name: 'offering' } })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeOfferingResponse')

const ReservationStateSchema = z
  .enum(['ACTIVE', 'EXPIRED', 'PROCESSING', 'CANCELED'])
  .openapi('ReservationState')

const ReservationSchema = z
  .object({
    CurrencyCode: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'currencyCode' },
          description:
            'The type of currency that is used for billing. The currencyCode used for your reservation is US dollars.',
        }),
    ),
    Duration: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'duration' },
          description:
            'The length of time that this reservation is active. MediaConnect defines this value in the offering.',
        }),
    ),
    DurationUnits: DurationUnitsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'durationUnits' },
          description:
            'The unit of measurement for the duration of the reservation. MediaConnect defines this value in the offering.',
        }),
    ),
    End: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'end' },
          description:
            "The day and time that this reservation expires. This value is calculated based on the start date and time that you set and the offering's duration.",
        }),
    ),
    OfferingArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'offeringArn' },
          description: 'The Amazon Resource Name (ARN) that MediaConnect assigns to the offering.',
        }),
    ),
    OfferingDescription: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'offeringDescription' },
          description:
            'A description of the offering. MediaConnect defines this value in the offering.',
        }),
    ),
    PricePerUnit: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'pricePerUnit' },
          description:
            'The cost of a single unit. This value, in combination with priceUnits, makes up the rate. MediaConnect defines this value in the offering.',
        }),
    ),
    PriceUnits: PriceUnitsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'priceUnits' },
          description:
            'The unit of measurement that is used for billing. This value, in combination with pricePerUnit, makes up the rate. MediaConnect defines this value in the offering.',
        }),
    ),
    ReservationArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'reservationArn' },
          description:
            'The Amazon Resource Name (ARN) that MediaConnect assigns to the reservation when you purchase an offering.',
        }),
    ),
    ReservationName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'reservationName' },
          description:
            'The name that you assigned to the reservation when you purchased the offering.',
        }),
    ),
    ReservationState: ReservationStateSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'reservationState' },
          description: 'The status of your reservation.',
        }),
    ),
    ResourceSpecification: ResourceSpecificationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'resourceSpecification' },
          description:
            'A definition of the amount of outbound bandwidth that you would be reserving if you purchase the offering. MediaConnect defines the values that make up the resourceSpecification in the offering.',
        }),
    ),
    Start: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'start' },
          description:
            'The day and time that the reservation becomes active. You set this value when you purchase the offering.',
        }),
    ),
  })
  .openapi({
    required: [
      'CurrencyCode',
      'ReservationState',
      'OfferingArn',
      'ReservationArn',
      'Start',
      'OfferingDescription',
      'ReservationName',
      'End',
      'Duration',
      'DurationUnits',
      'PricePerUnit',
      'ResourceSpecification',
      'PriceUnits',
    ],
    description:
      'A pricing agreement for a discounted rate for a specific outbound bandwidth that your MediaConnect account will use each month over a specific time period. The discounted rate in the reservation applies to outbound bandwidth for all flows from your account until your account reaches the amount of bandwidth in your reservation. If you use more outbound bandwidth than the agreed upon amount in a single month, the overage is charged at the on-demand rate.',
  })
  .openapi('Reservation')

const DescribeReservationResponseSchema = z
  .object({
    Reservation: ReservationSchema.and(
      z.any().openapi({ xml: { name: 'reservation' } }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeReservationResponse')

const GrantFlowEntitlementsResponseSchema = z
  .object({
    Entitlements: ListOfEntitlementSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'entitlements' },
          description: 'The entitlements that were just granted.',
        }),
    ).exactOptional(),
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The ARN of the flow that these entitlements were granted to.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GrantFlowEntitlementsResponse')

const GrantFlowEntitlements420ExceptionSchema = z.any().openapi('GrantFlowEntitlements420Exception')

const ListedBridgeSchema = z
  .object({
    BridgeArn: StringSchema.and(
      z.any().openapi({ xml: { name: 'bridgeArn' }, description: 'The ARN of the bridge.' }),
    ),
    BridgeState: BridgeStateSchema.and(z.any().openapi({ xml: { name: 'bridgeState' } })),
    BridgeType: StringSchema.and(
      z.any().openapi({ xml: { name: 'bridgeType' }, description: 'The type of the bridge.' }),
    ),
    Name: StringSchema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the bridge.' }),
    ),
    PlacementArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'placementArn' },
          description: 'The ARN of the gateway associated with the bridge.',
        }),
    ),
  })
  .openapi({
    required: ['BridgeArn', 'BridgeState', 'PlacementArn', 'BridgeType', 'Name'],
    description: 'Displays details of the selected bridge.',
  })
  .openapi('ListedBridge')

const ListOfListedBridgeSchema = z.array(ListedBridgeSchema).openapi('ListOfListedBridge')

const ListBridgesResponseSchema = z
  .object({
    Bridges: ListOfListedBridgeSchema.and(
      z.any().openapi({ xml: { name: 'bridges' }, description: 'A list of bridge summaries.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The token that identifies which batch of results that you want to see. For example, you submit a ListBridges request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListBridges request a second time and specify the NextToken value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBridgesResponse')

const ListedEntitlementSchema = z
  .object({
    DataTransferSubscriberFeePercent: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'dataTransferSubscriberFeePercent' },
          description:
            'Percentage from 0-100 of the data transfer cost to be billed to the subscriber.',
        }),
    ).exactOptional(),
    EntitlementArn: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'entitlementArn' }, description: 'The ARN of the entitlement.' }),
    ),
    EntitlementName: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'entitlementName' }, description: 'The name of the entitlement.' }),
    ),
  })
  .openapi({
    required: ['EntitlementArn', 'EntitlementName'],
    description: 'An entitlement that has been granted to you from other AWS accounts.',
  })
  .openapi('ListedEntitlement')

const ListOfListedEntitlementSchema = z
  .array(ListedEntitlementSchema)
  .openapi('ListOfListedEntitlement')

const ListEntitlementsResponseSchema = z
  .object({
    Entitlements: ListOfListedEntitlementSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'entitlements' },
          description:
            'A list of entitlements that have been granted to you from other AWS accounts.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The token that identifies which batch of results that you want to see. For example, you submit a ListEntitlements request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListEntitlements request a second time and specify the NextToken value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEntitlementsResponse')

const SourceTypeSchema = z.enum(['OWNED', 'ENTITLED']).openapi('SourceType')

const ListedFlowSchema = z
  .object({
    AvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'availabilityZone' },
          description: 'The Availability Zone that the flow was created in.',
        }),
    ),
    Description: StringSchema.and(
      z.any().openapi({ xml: { name: 'description' }, description: 'A description of the flow.' }),
    ),
    FlowArn: StringSchema.and(
      z.any().openapi({ xml: { name: 'flowArn' }, description: 'The ARN of the flow.' }),
    ),
    Name: StringSchema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the flow.' }),
    ),
    SourceType: SourceTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sourceType' },
          description:
            'The type of source. This value is either owned (originated somewhere other than an AWS Elemental MediaConnect flow owned by another AWS account) or entitled (originated at an AWS Elemental MediaConnect flow owned by another AWS account).',
        }),
    ),
    Status: StatusSchema.and(
      z.any().openapi({ xml: { name: 'status' }, description: 'The current status of the flow.' }),
    ),
    Maintenance: MaintenanceSchema.and(
      z.any().openapi({ xml: { name: 'maintenance' } }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Status', 'Description', 'SourceType', 'AvailabilityZone', 'FlowArn', 'Name'],
    description:
      'Provides a summary of a flow, including its ARN, Availability Zone, and source type.',
  })
  .openapi('ListedFlow')

const ListOfListedFlowSchema = z.array(ListedFlowSchema).openapi('ListOfListedFlow')

const ListFlowsResponseSchema = z
  .object({
    Flows: ListOfListedFlowSchema.and(
      z.any().openapi({ xml: { name: 'flows' }, description: 'A list of flow summaries.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The token that identifies which batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFlowsResponse')

const ListedGatewayInstanceSchema = z
  .object({
    GatewayArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'gatewayArn' },
          description: 'The Amazon Resource Name (ARN) of the gateway.',
        }),
    ),
    GatewayInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'gatewayInstanceArn' },
          description: 'The Amazon Resource Name (ARN) of the instance.',
        }),
    ),
    InstanceId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'instanceId' },
          description:
            'The managed instance ID generated by the SSM install. This will begin with "mi-".',
        }),
    ),
    InstanceState: InstanceStateSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'instanceState' }, description: 'The status of the instance.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['GatewayArn', 'GatewayInstanceArn', 'InstanceId'],
    description: 'Provides a summary of an instance.',
  })
  .openapi('ListedGatewayInstance')

const ListOfListedGatewayInstanceSchema = z
  .array(ListedGatewayInstanceSchema)
  .openapi('ListOfListedGatewayInstance')

const ListGatewayInstancesResponseSchema = z
  .object({
    Instances: ListOfListedGatewayInstanceSchema.and(
      z.any().openapi({ xml: { name: 'instances' }, description: 'A list of instance summaries.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The token that identifies which batch of results that you want to see. For example, you submit a ListInstances request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListInstances request a second time and specify the NextToken value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListGatewayInstancesResponse')

const ListedGatewaySchema = z
  .object({
    GatewayArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'gatewayArn' },
          description: 'The Amazon Resource Name (ARN) of the gateway.',
        }),
    ),
    GatewayState: GatewayStateSchema.and(z.any().openapi({ xml: { name: 'gatewayState' } })),
    Name: StringSchema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the gateway.' }),
    ),
  })
  .openapi({
    required: ['GatewayArn', 'GatewayState', 'Name'],
    description: 'Provides a summary of a gateway, including its name, ARN, and status.',
  })
  .openapi('ListedGateway')

const ListOfListedGatewaySchema = z.array(ListedGatewaySchema).openapi('ListOfListedGateway')

const ListGatewaysResponseSchema = z
  .object({
    Gateways: ListOfListedGatewaySchema.and(
      z.any().openapi({ xml: { name: 'gateways' }, description: 'A list of gateway summaries.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The token that identifies which batch of results that you want to see. For example, you submit a ListGateways request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListGateways request a second time and specify the NextToken value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListGatewaysResponse')

const ListOfOfferingSchema = z.array(OfferingSchema).openapi('ListOfOffering')

const ListOfferingsResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The token that identifies which batch of results that you want to see. For example, you submit a ListOfferings request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListOfferings request a second time and specify the NextToken value.',
        }),
    ).exactOptional(),
    Offerings: ListOfOfferingSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'offerings' },
          description:
            'A list of offerings that are available to this account in the current AWS Region.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListOfferingsResponse')

const ListOfReservationSchema = z.array(ReservationSchema).openapi('ListOfReservation')

const ListReservationsResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The token that identifies which batch of results that you want to see. For example, you submit a ListReservations request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListReservations request a second time and specify the NextToken value.',
        }),
    ).exactOptional(),
    Reservations: ListOfReservationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'reservations' },
          description:
            'A list of all reservations that have been purchased by this account in the current AWS Region.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListReservationsResponse')

const MapOfStringSchema = z.record(z.string(), StringSchema).openapi('MapOfString')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const PurchaseOfferingResponseSchema = z
  .object({
    Reservation: ReservationSchema.and(
      z.any().openapi({ xml: { name: 'reservation' } }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PurchaseOfferingResponse')

const RemoveBridgeOutputResponseSchema = z
  .object({
    BridgeArn: StringSchema.and(z.any().openapi({ xml: { name: 'bridgeArn' } })).exactOptional(),
    OutputName: StringSchema.and(z.any().openapi({ xml: { name: 'outputName' } })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RemoveBridgeOutputResponse')

const RemoveBridgeSourceResponseSchema = z
  .object({
    BridgeArn: StringSchema.and(z.any().openapi({ xml: { name: 'bridgeArn' } })).exactOptional(),
    SourceName: StringSchema.and(z.any().openapi({ xml: { name: 'sourceName' } })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RemoveBridgeSourceResponse')

const RemoveFlowMediaStreamResponseSchema = z
  .object({
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The Amazon Resource Name (ARN) of the flow.',
        }),
    ).exactOptional(),
    MediaStreamName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaStreamName' },
          description: 'The name of the media stream that was removed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RemoveFlowMediaStreamResponse')

const RemoveFlowOutputResponseSchema = z
  .object({
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The ARN of the flow that is associated with the output you removed.',
        }),
    ).exactOptional(),
    OutputArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'outputArn' },
          description: 'The ARN of the output that was removed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RemoveFlowOutputResponse')

const RemoveFlowSourceResponseSchema = z
  .object({
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The ARN of the flow that is associated with the source you removed.',
        }),
    ).exactOptional(),
    SourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sourceArn' },
          description: 'The ARN of the source that was removed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RemoveFlowSourceResponse')

const RemoveFlowVpcInterfaceResponseSchema = z
  .object({
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The ARN of the flow that is associated with the VPC interface you removed.',
        }),
    ).exactOptional(),
    NonDeletedNetworkInterfaceIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nonDeletedNetworkInterfaceIds' },
          description:
            'IDs of network interfaces associated with the removed VPC interface that Media Connect was unable to remove.',
        }),
    ).exactOptional(),
    VpcInterfaceName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcInterfaceName' },
          description: 'The name of the VPC interface that was removed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RemoveFlowVpcInterfaceResponse')

const RevokeFlowEntitlementResponseSchema = z
  .object({
    EntitlementArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'entitlementArn' },
          description: 'The ARN of the entitlement that was revoked.',
        }),
    ).exactOptional(),
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The ARN of the flow that the entitlement was revoked from.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RevokeFlowEntitlementResponse')

const StartFlowResponseSchema = z
  .object({
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The ARN of the flow that you started.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'status' },
          description: 'The status of the flow when the StartFlow process begins.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartFlowResponse')

const StopFlowResponseSchema = z
  .object({
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The ARN of the flow that you stopped.',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'status' },
          description: 'The status of the flow when the StopFlow process begins.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopFlowResponse')

const UpdateBridgeResponseSchema = z
  .object({
    Bridge: BridgeSchema.and(z.any().openapi({ xml: { name: 'bridge' } })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateBridgeResponse')

const UpdateBridgeOutputResponseSchema = z
  .object({
    BridgeArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bridgeArn' },
          description: 'The Amazon Resource Number (ARN) of the bridge.',
        }),
    ).exactOptional(),
    Output: BridgeOutputSchema.and(
      z.any().openapi({ xml: { name: 'output' }, description: 'The output that you updated.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateBridgeOutputResponse')

const UpdateBridgeSourceResponseSchema = z
  .object({
    BridgeArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bridgeArn' },
          description: 'The Amazon Resource Number (ARN) of the bridge.',
        }),
    ).exactOptional(),
    Source: BridgeSourceSchema.and(z.any().openapi({ xml: { name: 'source' } })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateBridgeSourceResponse')

const DesiredStateSchema = z.enum(['ACTIVE', 'STANDBY', 'DELETED']).openapi('DesiredState')

const UpdateBridgeStateResponseSchema = z
  .object({
    BridgeArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bridgeArn' },
          description: 'The Amazon Resource Number (ARN) of the bridge.',
        }),
    ).exactOptional(),
    DesiredState: DesiredStateSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'desiredState' },
          description: 'The state of the bridge. ACTIVE or STANDBY.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateBridgeStateResponse')

const UpdateFlowResponseSchema = z
  .object({ Flow: FlowSchema.and(z.any().openapi({ xml: { name: 'flow' } })).exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateFlowResponse')

const UpdateFlowEntitlementResponseSchema = z
  .object({
    Entitlement: EntitlementSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'entitlement' },
          description: 'The new configuration of the entitlement that you updated.',
        }),
    ).exactOptional(),
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The ARN of the flow that this entitlement was granted on.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFlowEntitlementResponse')

const UpdateFlowMediaStreamResponseSchema = z
  .object({
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description:
            'The ARN of the flow that is associated with the media stream that you updated.',
        }),
    ).exactOptional(),
    MediaStream: MediaStreamSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaStream' },
          description: 'The media stream that you updated.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFlowMediaStreamResponse')

const UpdateFlowOutputResponseSchema = z
  .object({
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The ARN of the flow that is associated with the updated output.',
        }),
    ).exactOptional(),
    Output: OutputSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'output' },
          description: 'The new settings of the output that you updated.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFlowOutputResponse')

const UpdateFlowSourceResponseSchema = z
  .object({
    FlowArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The ARN of the flow that you want to update.',
        }),
    ).exactOptional(),
    Source: SourceSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'source' },
          description: 'The settings for the source of the flow.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFlowSourceResponse')

const UpdateGatewayInstanceResponseSchema = z
  .object({
    BridgePlacement: BridgePlacementSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bridgePlacement' },
          description:
            'The availability of the instance to host new bridges. The bridgePlacement property can be LOCKED or AVAILABLE. If it is LOCKED, no new bridges can be deployed to this instance. If it is AVAILABLE, new bridges can be added to this instance.',
        }),
    ).exactOptional(),
    GatewayInstanceArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'gatewayInstanceArn' },
          description: 'The Amazon Resource Name (ARN) of the instance.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateGatewayInstanceResponse')

const ListOfAddBridgeOutputRequestSchema = z
  .array(AddBridgeOutputRequestSchema)
  .openapi('ListOfAddBridgeOutputRequest')

const AddBridgeOutputsRequestSchema = z
  .object({
    Outputs: ListOfAddBridgeOutputRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'outputs' },
          description: 'The outputs that you want to add to this bridge.',
        }),
    ),
  })
  .openapi({
    required: ['Outputs'],
    title: 'AddBridgeOutputsRequest',
    description: 'A request to add outputs to the specified bridge.',
  })
  .openapi('AddBridgeOutputsRequest')

const ListOfAddBridgeSourceRequestSchema = z
  .array(AddBridgeSourceRequestSchema)
  .openapi('ListOfAddBridgeSourceRequest')

const AddBridgeSourcesRequestSchema = z
  .object({
    Sources: ListOfAddBridgeSourceRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sources' },
          description: 'The sources that you want to add to this bridge.',
        }),
    ),
  })
  .openapi({
    required: ['Sources'],
    title: 'AddBridgeSourcesRequest',
    description: 'A request to add sources to the specified bridge.',
  })
  .openapi('AddBridgeSourcesRequest')

const AddEgressGatewayBridgeRequestSchema = z
  .object({
    MaxBitrate: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxBitrate' },
          description: 'The maximum expected bitrate (in bps).',
        }),
    ),
  })
  .openapi({ required: ['MaxBitrate'] })
  .openapi('AddEgressGatewayBridgeRequest')

const ListOfAddMediaStreamRequestSchema = z
  .array(AddMediaStreamRequestSchema)
  .openapi('ListOfAddMediaStreamRequest')

const AddFlowMediaStreamsRequestSchema = z
  .object({
    MediaStreams: ListOfAddMediaStreamRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaStreams' },
          description: 'The media streams that you want to add to the flow.',
        }),
    ),
  })
  .openapi({
    required: ['MediaStreams'],
    title: 'AddFlowMediaStreamsRequest',
    description: 'A request to add media streams to the flow.',
  })
  .openapi('AddFlowMediaStreamsRequest')

const ListOfAddOutputRequestSchema = z
  .array(AddOutputRequestSchema)
  .openapi('ListOfAddOutputRequest')

const AddFlowOutputsRequestSchema = z
  .object({
    Outputs: ListOfAddOutputRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'outputs' },
          description: 'A list of outputs that you want to add.',
        }),
    ),
  })
  .openapi({
    required: ['Outputs'],
    title: 'AddFlowOutputsRequest',
    description: 'A request to add outputs to the specified flow.',
  })
  .openapi('AddFlowOutputsRequest')

const ListOfSetSourceRequestSchema = z
  .array(SetSourceRequestSchema)
  .openapi('ListOfSetSourceRequest')

const AddFlowSourcesRequestSchema = z
  .object({
    Sources: ListOfSetSourceRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sources' },
          description: 'A list of sources that you want to add.',
        }),
    ),
  })
  .openapi({
    required: ['Sources'],
    title: 'AddFlowSourcesRequest',
    description: 'A request to add sources to the flow.',
  })
  .openapi('AddFlowSourcesRequest')

const ListOfVpcInterfaceRequestSchema = z
  .array(VpcInterfaceRequestSchema)
  .openapi('ListOfVpcInterfaceRequest')

const AddFlowVpcInterfacesRequestSchema = z
  .object({
    VpcInterfaces: ListOfVpcInterfaceRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcInterfaces' },
          description: 'A list of VPC interfaces that you want to add.',
        }),
    ),
  })
  .openapi({
    required: ['VpcInterfaces'],
    title: 'AddFlowVpcInterfacesRequest',
    description: 'A request to add VPC interfaces to the flow.',
  })
  .openapi('AddFlowVpcInterfacesRequest')

const AddIngressGatewayBridgeRequestSchema = z
  .object({
    MaxBitrate: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxBitrate' },
          description: 'The maximum expected bitrate (in bps).',
        }),
    ),
    MaxOutputs: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxOutputs' },
          description: 'The maximum number of expected outputs.',
        }),
    ),
  })
  .openapi({ required: ['MaxOutputs', 'MaxBitrate'] })
  .openapi('AddIngressGatewayBridgeRequest')

const AddMaintenanceSchema = z
  .object({
    MaintenanceDay: MaintenanceDaySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maintenanceDay' },
          description:
            'A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.',
        }),
    ),
    MaintenanceStartHour: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maintenanceStartHour' },
          description:
            'UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.',
        }),
    ),
  })
  .openapi({
    required: ['MaintenanceDay', 'MaintenanceStartHour'],
    description: 'Create maintenance setting for a flow',
  })
  .openapi('AddMaintenance')

const CreateBridgeRequestSchema = z
  .object({
    EgressGatewayBridge: AddEgressGatewayBridgeRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'egressGatewayBridge' },
          description:
            'Create a bridge with the egress bridge type. An egress bridge is a cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises.',
        }),
    ).exactOptional(),
    IngressGatewayBridge: AddIngressGatewayBridgeRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'ingressGatewayBridge' },
          description:
            'Create a bridge with the ingress bridge type. An ingress bridge is a ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description:
            'The name of the bridge. This name can not be modified after the bridge is created.',
        }),
    ),
    Outputs: ListOfAddBridgeOutputRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'outputs' },
          description: 'The outputs that you want to add to this bridge.',
        }),
    ).exactOptional(),
    PlacementArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'placementArn' },
          description: 'The bridge placement Amazon Resource Number (ARN).',
        }),
    ),
    SourceFailoverConfig: FailoverConfigSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sourceFailoverConfig' },
          description: 'The settings for source failover.',
        }),
    ).exactOptional(),
    Sources: ListOfAddBridgeSourceRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sources' },
          description: 'The sources that you want to add to this bridge.',
        }),
    ),
  })
  .openapi({
    required: ['Sources', 'PlacementArn', 'Name'],
    title: 'CreateBridgeRequest',
    description: 'Creates a new bridge. The request must include one source.',
  })
  .openapi('CreateBridgeRequest')

const ListOfGrantEntitlementRequestSchema = z
  .array(GrantEntitlementRequestSchema)
  .openapi('ListOfGrantEntitlementRequest')

const CreateFlowRequestSchema = z
  .object({
    AvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'availabilityZone' },
          description:
            'The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS Region.',
        }),
    ).exactOptional(),
    Entitlements: ListOfGrantEntitlementRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'entitlements' },
          description: 'The entitlements that you want to grant on a flow.',
        }),
    ).exactOptional(),
    MediaStreams: ListOfAddMediaStreamRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaStreams' },
          description:
            'The media streams that you want to add to the flow. You can associate these media streams with sources and outputs on the flow.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the flow.' }),
    ),
    Outputs: ListOfAddOutputRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'outputs' },
          description: 'The outputs that you want to add to this flow.',
        }),
    ).exactOptional(),
    Source: SetSourceRequestSchema.and(
      z.any().openapi({ xml: { name: 'source' } }),
    ).exactOptional(),
    SourceFailoverConfig: FailoverConfigSchema.and(
      z.any().openapi({ xml: { name: 'sourceFailoverConfig' } }),
    ).exactOptional(),
    Sources: ListOfSetSourceRequestSchema.and(
      z.any().openapi({ xml: { name: 'sources' } }),
    ).exactOptional(),
    VpcInterfaces: ListOfVpcInterfaceRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcInterfaces' },
          description: 'The VPC interfaces you want on the flow.',
        }),
    ).exactOptional(),
    Maintenance: AddMaintenanceSchema.and(
      z.any().openapi({ xml: { name: 'maintenance' } }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    title: 'CreateFlowRequest',
    description:
      'Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50).',
  })
  .openapi('CreateFlowRequest')

const CreateGatewayRequestSchema = z
  .object({
    EgressCidrBlocks: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'egressCidrBlocks' },
          description:
            'The range of IP addresses that are allowed to contribute content or initiate output requests for flows communicating with this gateway. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.',
        }),
    ),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description:
            'The name of the gateway. This name can not be modified after the gateway is created.',
        }),
    ),
    Networks: ListOfGatewayNetworkSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'networks' },
          description: 'The list of networks that you want to add.',
        }),
    ),
  })
  .openapi({
    required: ['Networks', 'EgressCidrBlocks', 'Name'],
    title: 'CreateGatewayRequest',
    description: 'Creates a new gateway. The request must include at least one network (up to 4).',
  })
  .openapi('CreateGatewayRequest')

const DeleteBridgeRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteBridgeRequest' })
  .openapi('DeleteBridgeRequest')

const DeleteFlowRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteFlowRequest' })
  .openapi('DeleteFlowRequest')

const DeleteGatewayRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteGatewayRequest' })
  .openapi('DeleteGatewayRequest')

const BooleanSchema = z.boolean().openapi('Boolean')

const DeregisterGatewayInstanceRequestSchema = z
  .object({})
  .openapi({ title: 'DeregisterGatewayInstanceRequest' })
  .openapi('DeregisterGatewayInstanceRequest')

const DescribeBridgeRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeBridgeRequest' })
  .openapi('DescribeBridgeRequest')

const DescribeFlowRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeFlowRequest' })
  .openapi('DescribeFlowRequest')

const DescribeGatewayInstanceRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeGatewayInstanceRequest' })
  .openapi('DescribeGatewayInstanceRequest')

const DescribeGatewayRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeGatewayRequest' })
  .openapi('DescribeGatewayRequest')

const DescribeOfferingRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeOfferingRequest' })
  .openapi('DescribeOfferingRequest')

const DescribeReservationRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeReservationRequest' })
  .openapi('DescribeReservationRequest')

const GrantFlowEntitlementsRequestSchema = z
  .object({
    Entitlements: ListOfGrantEntitlementRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'entitlements' },
          description: 'The list of entitlements that you want to grant.',
        }),
    ),
  })
  .openapi({
    required: ['Entitlements'],
    title: 'GrantFlowEntitlementsRequest',
    description: 'A request to grant entitlements on a flow.',
  })
  .openapi('GrantFlowEntitlementsRequest')

const MaxResultsSchema = z.int().min(1).max(1000).openapi('MaxResults')

const ListBridgesRequestSchema = z
  .object({})
  .openapi({ title: 'ListBridgesRequest' })
  .openapi('ListBridgesRequest')

const ListEntitlementsRequestSchema = z
  .object({})
  .openapi({ title: 'ListEntitlementsRequest' })
  .openapi('ListEntitlementsRequest')

const ListFlowsRequestSchema = z
  .object({})
  .openapi({ title: 'ListFlowsRequest' })
  .openapi('ListFlowsRequest')

const ListGatewayInstancesRequestSchema = z
  .object({})
  .openapi({ title: 'ListGatewayInstancesRequest' })
  .openapi('ListGatewayInstancesRequest')

const ListGatewaysRequestSchema = z
  .object({})
  .openapi({ title: 'ListGatewaysRequest' })
  .openapi('ListGatewaysRequest')

const ListOfferingsRequestSchema = z
  .object({})
  .openapi({ title: 'ListOfferingsRequest' })
  .openapi('ListOfferingsRequest')

const ListReservationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListReservationsRequest' })
  .openapi('ListReservationsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PurchaseOfferingRequestSchema = z
  .object({
    ReservationName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'reservationName' },
          description: 'The name that you want to use for the reservation.',
        }),
    ),
    Start: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'start' },
          description:
            "The date and time that you want the reservation to begin, in Coordinated Universal Time (UTC). You can specify any date and time between 12:00am on the first day of the current month to the current time on today's date, inclusive. Specify the start in a 24-hour notation. Use the following format: YYYY-MM-DDTHH:mm:SSZ, where T and Z are literal characters. For example, to specify 11:30pm on March 5, 2020, enter 2020-03-05T23:30:00Z.",
        }),
    ),
  })
  .openapi({
    required: ['Start', 'ReservationName'],
    title: 'PurchaseOfferingRequest',
    description: 'A request to purchase a offering.',
  })
  .openapi('PurchaseOfferingRequest')

const RemoveBridgeOutputRequestSchema = z
  .object({})
  .openapi({ title: 'RemoveBridgeOutputRequest' })
  .openapi('RemoveBridgeOutputRequest')

const RemoveBridgeSourceRequestSchema = z
  .object({})
  .openapi({ title: 'RemoveBridgeSourceRequest' })
  .openapi('RemoveBridgeSourceRequest')

const RemoveFlowMediaStreamRequestSchema = z
  .object({})
  .openapi({ title: 'RemoveFlowMediaStreamRequest' })
  .openapi('RemoveFlowMediaStreamRequest')

const RemoveFlowOutputRequestSchema = z
  .object({})
  .openapi({ title: 'RemoveFlowOutputRequest' })
  .openapi('RemoveFlowOutputRequest')

const RemoveFlowSourceRequestSchema = z
  .object({})
  .openapi({ title: 'RemoveFlowSourceRequest' })
  .openapi('RemoveFlowSourceRequest')

const RemoveFlowVpcInterfaceRequestSchema = z
  .object({})
  .openapi({ title: 'RemoveFlowVpcInterfaceRequest' })
  .openapi('RemoveFlowVpcInterfaceRequest')

const RevokeFlowEntitlementRequestSchema = z
  .object({})
  .openapi({ title: 'RevokeFlowEntitlementRequest' })
  .openapi('RevokeFlowEntitlementRequest')

const StartFlowRequestSchema = z
  .object({})
  .openapi({ title: 'StartFlowRequest' })
  .openapi('StartFlowRequest')

const StopFlowRequestSchema = z
  .object({})
  .openapi({ title: 'StopFlowRequest' })
  .openapi('StopFlowRequest')

const TagResourceRequestSchema = z
  .object({
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
        }),
    ),
  })
  .openapi({
    required: ['Tags'],
    title: 'TagResourceRequest',
    description:
      'The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
  })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateBridgeFlowSourceRequestSchema = z
  .object({
    FlowArn: StringSchema.and(
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'string') {
            if (!new RegExp('^arn:.+:mediaconnect.+:flow:.+$').test(val)) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({
          xml: { name: 'flowArn' },
          description: 'The ARN of the cloud flow to use as a source of this bridge.',
        }),
    ).exactOptional(),
    FlowVpcInterfaceAttachment: VpcInterfaceAttachmentSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'flowVpcInterfaceAttachment' },
          description: 'The name of the VPC interface attachment to use for this source.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Update the flow source of the bridge.', required: [] })
  .openapi('UpdateBridgeFlowSourceRequest')

const UpdateBridgeNetworkOutputRequestSchema = z
  .object({
    IpAddress: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'ipAddress' }, description: 'The network output IP Address.' }),
    ).exactOptional(),
    NetworkName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'networkName' },
          description: "The network output's gateway network name.",
        }),
    ).exactOptional(),
    Port: IntegerSchema.and(
      z.any().openapi({ xml: { name: 'port' }, description: 'The network output port.' }),
    ).exactOptional(),
    Protocol: ProtocolSchema.and(
      z.any().openapi({ xml: { name: 'protocol' }, description: 'The network output protocol.' }),
    ).exactOptional(),
    Ttl: IntegerSchema.and(
      z.any().openapi({ xml: { name: 'ttl' }, description: 'The network output TTL.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Update an existing network output.', required: [] })
  .openapi('UpdateBridgeNetworkOutputRequest')

const UpdateBridgeNetworkSourceRequestSchema = z
  .object({
    MulticastIp: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'multicastIp' }, description: 'The network source multicast IP.' }),
    ).exactOptional(),
    NetworkName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'networkName' },
          description: "The network source's gateway network name.",
        }),
    ).exactOptional(),
    Port: IntegerSchema.and(
      z.any().openapi({ xml: { name: 'port' }, description: 'The network source port.' }),
    ).exactOptional(),
    Protocol: ProtocolSchema.and(
      z.any().openapi({ xml: { name: 'protocol' }, description: 'The network source protocol.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Update the network source of the bridge.', required: [] })
  .openapi('UpdateBridgeNetworkSourceRequest')

const UpdateBridgeOutputRequestSchema = z
  .object({
    NetworkOutput: UpdateBridgeNetworkOutputRequestSchema.and(
      z.any().openapi({ xml: { name: 'networkOutput' } }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateBridgeOutputRequest',
    description: 'The fields that you want to update in the bridge output.',
    required: [],
  })
  .openapi('UpdateBridgeOutputRequest')

const UpdateEgressGatewayBridgeRequestSchema = z
  .object({
    MaxBitrate: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxBitrate' },
          description: 'Update an existing egress-type bridge.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateEgressGatewayBridgeRequest')

const UpdateIngressGatewayBridgeRequestSchema = z
  .object({
    MaxBitrate: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxBitrate' },
          description: 'The maximum expected bitrate (in bps).',
        }),
    ).exactOptional(),
    MaxOutputs: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxOutputs' },
          description: 'The maximum number of expected outputs.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateIngressGatewayBridgeRequest')

const UpdateFailoverConfigSchema = z
  .object({
    FailoverMode: FailoverModeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'failoverMode' },
          description:
            'The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.',
        }),
    ).exactOptional(),
    RecoveryWindow: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'recoveryWindow' },
          description: 'Recovery window time to look for dash-7 packets',
        }),
    ).exactOptional(),
    SourcePriority: SourcePrioritySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sourcePriority' },
          description:
            'The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.',
        }),
    ).exactOptional(),
    State: StateSchema.and(z.any().openapi({ xml: { name: 'state' } })).exactOptional(),
  })
  .openapi({ description: 'The settings for source failover.', required: [] })
  .openapi('UpdateFailoverConfig')

const UpdateBridgeRequestSchema = z
  .object({
    EgressGatewayBridge: UpdateEgressGatewayBridgeRequestSchema.and(
      z.any().openapi({ xml: { name: 'egressGatewayBridge' } }),
    ).exactOptional(),
    IngressGatewayBridge: UpdateIngressGatewayBridgeRequestSchema.and(
      z.any().openapi({ xml: { name: 'ingressGatewayBridge' } }),
    ).exactOptional(),
    SourceFailoverConfig: UpdateFailoverConfigSchema.and(
      z.any().openapi({ xml: { name: 'sourceFailoverConfig' } }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateBridgeRequest',
    description: 'A request to update the bridge.',
    required: [],
  })
  .openapi('UpdateBridgeRequest')

const UpdateBridgeSourceRequestSchema = z
  .object({
    FlowSource: UpdateBridgeFlowSourceRequestSchema.and(
      z.any().openapi({ xml: { name: 'flowSource' } }),
    ).exactOptional(),
    NetworkSource: UpdateBridgeNetworkSourceRequestSchema.and(
      z.any().openapi({ xml: { name: 'networkSource' } }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateBridgeSourceRequest',
    description: 'The fields that you want to update in the bridge source.',
    required: [],
  })
  .openapi('UpdateBridgeSourceRequest')

const UpdateBridgeStateRequestSchema = z
  .object({
    DesiredState: DesiredStateSchema.and(z.any().openapi({ xml: { name: 'desiredState' } })),
  })
  .openapi({
    required: ['DesiredState'],
    title: 'UpdateBridgeStateRequest',
    description: 'A request to update the bridge state.',
  })
  .openapi('UpdateBridgeStateRequest')

const UpdateEncryptionSchema = z
  .object({
    Algorithm: AlgorithmSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'algorithm' },
          description:
            'The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).',
        }),
    ).exactOptional(),
    ConstantInitializationVector: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'constantInitializationVector' },
          description:
            'A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.',
        }),
    ).exactOptional(),
    DeviceId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deviceId' },
          description:
            'The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
        }),
    ).exactOptional(),
    KeyType: KeyTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'keyType' },
          description:
            'The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).',
        }),
    ).exactOptional(),
    Region: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'region' },
          description:
            'The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
        }),
    ).exactOptional(),
    ResourceId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'resourceId' },
          description:
            'An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
        }),
    ).exactOptional(),
    RoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'roleArn' },
          description:
            'The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).',
        }),
    ).exactOptional(),
    SecretArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'secretArn' },
          description:
            'The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.',
        }),
    ).exactOptional(),
    Url: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'url' },
          description:
            'The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the encryption of the flow.', required: [] })
  .openapi('UpdateEncryption')

const UpdateFlowEntitlementRequestSchema = z
  .object({
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description:
            'A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user.',
        }),
    ).exactOptional(),
    Encryption: UpdateEncryptionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encryption' },
          description:
            'The type of encryption that will be used on the output associated with this entitlement. Allowable encryption types: static-key, speke.',
        }),
    ).exactOptional(),
    EntitlementStatus: EntitlementStatusSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'entitlementStatus' },
          description:
            'An indication of whether you want to enable the entitlement to allow access, or disable it to stop streaming content to the subscriber’s flow temporarily. If you don’t specify the entitlementStatus field in your request, MediaConnect leaves the value unchanged.',
        }),
    ).exactOptional(),
    Subscribers: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'subscribers' },
          description:
            'The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateFlowEntitlementRequest',
    description: 'The entitlement fields that you want to update.',
    required: [],
  })
  .openapi('UpdateFlowEntitlementRequest')

const UpdateFlowMediaStreamRequestSchema = z
  .object({
    Attributes: MediaStreamAttributesRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'attributes' },
          description: 'The attributes that you want to assign to the media stream.',
        }),
    ).exactOptional(),
    ClockRate: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clockRate' },
          description:
            'The sample rate (in Hz) for the stream. If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ xml: { name: 'description' }, description: 'Description' }),
    ).exactOptional(),
    MediaStreamType: MediaStreamTypeSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'mediaStreamType' }, description: 'The type of media stream.' }),
    ).exactOptional(),
    VideoFormat: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'videoFormat' }, description: 'The resolution of the video.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateFlowMediaStreamRequest',
    description: 'The fields that you want to update in the media stream.',
    required: [],
  })
  .openapi('UpdateFlowMediaStreamRequest')

const UpdateFlowOutputRequestSchema = z
  .object({
    CidrAllowList: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'cidrAllowList' },
          description:
            'The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description:
            'A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user.',
        }),
    ).exactOptional(),
    Destination: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'destination' },
          description: 'The IP address where you want to send the output.',
        }),
    ).exactOptional(),
    Encryption: UpdateEncryptionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encryption' },
          description:
            'The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key). Allowable encryption types: static-key.',
        }),
    ).exactOptional(),
    MaxLatency: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxLatency' },
          description:
            'The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.',
        }),
    ).exactOptional(),
    MediaStreamOutputConfigurations: ListOfMediaStreamOutputConfigurationRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaStreamOutputConfigurations' },
          description:
            'The media streams that are associated with the output, and the parameters for those associations.',
        }),
    ).exactOptional(),
    MinLatency: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'minLatency' },
          description:
            'The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.',
        }),
    ).exactOptional(),
    Port: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'port' },
          description: 'The port to use when content is distributed to this output.',
        }),
    ).exactOptional(),
    Protocol: ProtocolSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'protocol' }, description: 'The protocol to use for the output.' }),
    ).exactOptional(),
    RemoteId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'remoteId' },
          description: 'The remote ID for the Zixi-pull stream.',
        }),
    ).exactOptional(),
    SenderControlPort: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'senderControlPort' },
          description:
            'The port that the flow uses to send outbound requests to initiate connection with the sender.',
        }),
    ).exactOptional(),
    SenderIpAddress: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'senderIpAddress' },
          description:
            'The IP address that the flow communicates with to initiate connection with the sender.',
        }),
    ).exactOptional(),
    SmoothingLatency: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'smoothingLatency' },
          description: 'The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.',
        }),
    ).exactOptional(),
    StreamId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'streamId' },
          description:
            'The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.',
        }),
    ).exactOptional(),
    VpcInterfaceAttachment: VpcInterfaceAttachmentSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcInterfaceAttachment' },
          description: 'The name of the VPC interface attachment to use for this output.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateFlowOutputRequest',
    description: 'The fields that you want to update in the output.',
    required: [],
  })
  .openapi('UpdateFlowOutputRequest')

const UpdateMaintenanceSchema = z
  .object({
    MaintenanceDay: MaintenanceDaySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maintenanceDay' },
          description:
            'A day of a week when the maintenance will happen. use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.',
        }),
    ).exactOptional(),
    MaintenanceScheduledDate: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maintenanceScheduledDate' },
          description:
            'A scheduled date in ISO UTC format when the maintenance will happen. Use YYYY-MM-DD format. Example: 2021-01-30.',
        }),
    ).exactOptional(),
    MaintenanceStartHour: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maintenanceStartHour' },
          description:
            'UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Update maintenance setting for a flow', required: [] })
  .openapi('UpdateMaintenance')

const UpdateFlowRequestSchema = z
  .object({
    SourceFailoverConfig: UpdateFailoverConfigSchema.and(
      z.any().openapi({ xml: { name: 'sourceFailoverConfig' } }),
    ).exactOptional(),
    Maintenance: UpdateMaintenanceSchema.and(
      z.any().openapi({ xml: { name: 'maintenance' } }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateFlowRequest', description: 'A request to update flow.', required: [] })
  .openapi('UpdateFlowRequest')

const UpdateGatewayBridgeSourceRequestSchema = z
  .object({
    BridgeArn: StringSchema.and(
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'string') {
            if (!new RegExp('^arn:.+:mediaconnect.+:bridge:.+$').test(val)) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({
          xml: { name: 'bridgeArn' },
          description: 'The ARN of the bridge feeding this flow.',
        }),
    ).exactOptional(),
    VpcInterfaceAttachment: VpcInterfaceAttachmentSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcInterfaceAttachment' },
          description: 'The name of the VPC interface attachment to use for this bridge source.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The source configuration for cloud flows receiving a stream from a bridge.',
    required: [],
  })
  .openapi('UpdateGatewayBridgeSourceRequest')

const UpdateFlowSourceRequestSchema = z
  .object({
    Decryption: UpdateEncryptionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'decryption' },
          description:
            'The type of encryption used on the content ingested from this source. Allowable encryption types: static-key.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description:
            'A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.',
        }),
    ).exactOptional(),
    EntitlementArn: StringSchema.and(
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'string') {
            if (!new RegExp('^arn:.+:mediaconnect.+:entitlement:.+$').test(val)) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({
          xml: { name: 'entitlementArn' },
          description:
            "The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.",
        }),
    ).exactOptional(),
    IngestPort: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'ingestPort' },
          description: 'The port that the flow will be listening on for incoming content.',
        }),
    ).exactOptional(),
    MaxBitrate: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxBitrate' },
          description: 'The smoothing max bitrate (in bps) for RIST, RTP, and RTP-FEC streams.',
        }),
    ).exactOptional(),
    MaxLatency: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxLatency' },
          description:
            'The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.',
        }),
    ).exactOptional(),
    MaxSyncBuffer: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxSyncBuffer' },
          description:
            'The size of the buffer (in milliseconds) to use to sync incoming source data.',
        }),
    ).exactOptional(),
    MediaStreamSourceConfigurations: ListOfMediaStreamSourceConfigurationRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mediaStreamSourceConfigurations' },
          description:
            'The media streams that are associated with the source, and the parameters for those associations.',
        }),
    ).exactOptional(),
    MinLatency: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'minLatency' },
          description:
            'The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.',
        }),
    ).exactOptional(),
    Protocol: ProtocolSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'protocol' },
          description: 'The protocol that is used by the source.',
        }),
    ).exactOptional(),
    SenderControlPort: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'senderControlPort' },
          description:
            'The port that the flow uses to send outbound requests to initiate connection with the sender.',
        }),
    ).exactOptional(),
    SenderIpAddress: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'senderIpAddress' },
          description:
            'The IP address that the flow communicates with to initiate connection with the sender.',
        }),
    ).exactOptional(),
    SourceListenerAddress: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sourceListenerAddress' },
          description: 'Source IP or domain name for SRT-caller protocol.',
        }),
    ).exactOptional(),
    SourceListenerPort: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sourceListenerPort' },
          description: 'Source port for SRT-caller protocol.',
        }),
    ).exactOptional(),
    StreamId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'streamId' },
          description:
            'The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.',
        }),
    ).exactOptional(),
    VpcInterfaceName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcInterfaceName' },
          description: 'The name of the VPC interface to use for this source.',
        }),
    ).exactOptional(),
    WhitelistCidr: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'whitelistCidr' },
          description:
            'The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.',
        }),
    ).exactOptional(),
    GatewayBridgeSource: UpdateGatewayBridgeSourceRequestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'gatewayBridgeSource' },
          description: 'The source configuration for cloud flows receiving a stream from a bridge.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateFlowSourceRequest',
    description: 'A request to update the source of a flow.',
    required: [],
  })
  .openapi('UpdateFlowSourceRequest')

const UpdateGatewayInstanceRequestSchema = z
  .object({
    BridgePlacement: BridgePlacementSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bridgePlacement' },
          description:
            'The availability of the instance to host new bridges. The bridgePlacement property can be LOCKED or AVAILABLE. If it is LOCKED, no new bridges can be deployed to this instance. If it is AVAILABLE, new bridges can be added to this instance.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateGatewayInstanceRequest',
    description: 'A request to update gateway instance state.',
    required: [],
  })
  .openapi('UpdateGatewayInstanceRequest')

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

export const postV1BridgesBridgeArnOutputsRoute = createRoute({
  method: 'post',
  path: '/v1/bridges/{bridgeArn}/outputs',
  description: 'Adds outputs to an existing bridge.',
  operationId: 'AddBridgeOutputs',
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
      bridgeArn: z
        .string()
        .openapi({
          param: {
            name: 'bridgeArn',
            in: 'path',
            required: true,
            description: 'The ARN of the bridge that you want to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              outputs: z
                .array(AddBridgeOutputRequestSchema)
                .openapi({ description: 'The outputs that you want to add to this bridge.' }),
            })
            .openapi({ required: ['outputs'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: AddBridgeOutputsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postV1BridgesBridgeArnSourcesRoute = createRoute({
  method: 'post',
  path: '/v1/bridges/{bridgeArn}/sources',
  description: 'Adds sources to an existing bridge.',
  operationId: 'AddBridgeSources',
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
      bridgeArn: z
        .string()
        .openapi({
          param: {
            name: 'bridgeArn',
            in: 'path',
            required: true,
            description: 'The ARN of the bridge that you want to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sources: z
                .array(AddBridgeSourceRequestSchema)
                .openapi({ description: 'The sources that you want to add to this bridge.' }),
            })
            .openapi({ required: ['sources'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: AddBridgeSourcesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postV1FlowsFlowArnMediaStreamsRoute = createRoute({
  method: 'post',
  path: '/v1/flows/{flowArn}/mediaStreams',
  description:
    'Adds media streams to an existing flow. After you add a media stream to a flow, you can associate it with a source and/or an output that uses the ST 2110 JPEG XS or CDI protocol.',
  operationId: 'AddFlowMediaStreams',
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
      flowArn: z
        .string()
        .openapi({
          param: {
            name: 'flowArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the flow.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              mediaStreams: z
                .array(AddMediaStreamRequestSchema)
                .openapi({ description: 'The media streams that you want to add to the flow.' }),
            })
            .openapi({ required: ['mediaStreams'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: AddFlowMediaStreamsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1FlowsFlowArnOutputsRoute = createRoute({
  method: 'post',
  path: '/v1/flows/{flowArn}/outputs',
  description: 'Adds outputs to an existing flow. You can create up to 50 outputs per flow.',
  operationId: 'AddFlowOutputs',
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
      flowArn: z
        .string()
        .openapi({
          param: {
            name: 'flowArn',
            in: 'path',
            required: true,
            description: 'The flow that you want to add outputs to.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              outputs: z
                .array(AddOutputRequestSchema)
                .openapi({ description: 'A list of outputs that you want to add.' }),
            })
            .openapi({ required: ['outputs'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: AddFlowOutputsResponseSchema } },
    },
    480: {
      description: 'AddFlowOutputs420Exception',
      content: { 'application/json': { schema: AddFlowOutputs420ExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1FlowsFlowArnSourceRoute = createRoute({
  method: 'post',
  path: '/v1/flows/{flowArn}/source',
  description: 'Adds Sources to flow',
  operationId: 'AddFlowSources',
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
      flowArn: z
        .string()
        .openapi({
          param: {
            name: 'flowArn',
            in: 'path',
            required: true,
            description: 'The flow that you want to mutate.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sources: z
                .array(SetSourceRequestSchema)
                .openapi({ description: 'A list of sources that you want to add.' }),
            })
            .openapi({ required: ['sources'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: AddFlowSourcesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1FlowsFlowArnVpcInterfacesRoute = createRoute({
  method: 'post',
  path: '/v1/flows/{flowArn}/vpcInterfaces',
  description: 'Adds VPC interfaces to flow',
  operationId: 'AddFlowVpcInterfaces',
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
      flowArn: z
        .string()
        .openapi({
          param: {
            name: 'flowArn',
            in: 'path',
            required: true,
            description: 'The flow that you want to mutate.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              vpcInterfaces: z
                .array(VpcInterfaceRequestSchema)
                .openapi({ description: 'A list of VPC interfaces that you want to add.' }),
            })
            .openapi({ required: ['vpcInterfaces'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: AddFlowVpcInterfacesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1BridgesRoute = createRoute({
  method: 'get',
  path: '/v1/bridges',
  description:
    'Displays a list of bridges that are associated with this account and an optionally specified Arn. This request returns a paginated result.',
  operationId: 'ListBridges',
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
      filterArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filterArn',
            in: 'query',
            required: false,
            description:
              'Filter the list results to display only the bridges associated with the selected Amazon Resource Name (ARN).',
            schema: { type: 'string' },
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return per API request. For example, you submit a ListBridges request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token that identifies which batch of results that you want to see. For example, you submit a ListBridges request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListBridges request a second time and specify the NextToken value.',
            schema: { type: 'string' },
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
      content: { 'application/json': { schema: ListBridgesResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postV1BridgesRoute = createRoute({
  method: 'post',
  path: '/v1/bridges',
  description: 'Creates a new bridge. The request must include one source.',
  operationId: 'CreateBridge',
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
              egressGatewayBridge: z
                .object({
                  MaxBitrate: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'maxBitrate' },
                        description: 'The maximum expected bitrate (in bps).',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Create a bridge with the egress bridge type. An egress bridge is a cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises.',
                  required: [],
                }),
              ingressGatewayBridge: z
                .object({
                  MaxBitrate: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'maxBitrate' },
                        description: 'The maximum expected bitrate (in bps).',
                      }),
                  ).exactOptional(),
                  MaxOutputs: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'maxOutputs' },
                        description: 'The maximum number of expected outputs.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Create a bridge with the ingress bridge type. An ingress bridge is a ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud.',
                  required: [],
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'The name of the bridge. This name can not be modified after the bridge is created.',
                }),
              outputs: z
                .array(AddBridgeOutputRequestSchema)
                .exactOptional()
                .openapi({ description: 'The outputs that you want to add to this bridge.' }),
              placementArn: z
                .string()
                .openapi({ description: 'The bridge placement Amazon Resource Number (ARN).' }),
              sourceFailoverConfig: z
                .object({
                  FailoverMode: FailoverModeSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'failoverMode' },
                        description:
                          'The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.',
                      }),
                  ).exactOptional(),
                  RecoveryWindow: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'recoveryWindow' },
                        description: 'Search window time to look for dash-7 packets',
                      }),
                  ).exactOptional(),
                  SourcePriority: SourcePrioritySchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'sourcePriority' },
                        description:
                          'The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.',
                      }),
                  ).exactOptional(),
                  State: StateSchema.and(
                    z.any().openapi({ xml: { name: 'state' } }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'The settings for source failover.', required: [] }),
              sources: z
                .array(AddBridgeSourceRequestSchema)
                .openapi({ description: 'The sources that you want to add to this bridge.' }),
            })
            .openapi({ required: ['name', 'placementArn', 'sources'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBridgeResponseSchema } },
    },
    480: {
      description: 'CreateBridge420Exception',
      content: { 'application/json': { schema: CreateBridge420ExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV1FlowsRoute = createRoute({
  method: 'get',
  path: '/v1/flows',
  description:
    'Displays a list of flows that are associated with this account. This request returns a paginated result.',
  operationId: 'ListFlows',
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return per API request. For example, you submit a ListFlows request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token that identifies which batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value.',
            schema: { type: 'string' },
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
      content: { 'application/json': { schema: ListFlowsResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postV1FlowsRoute = createRoute({
  method: 'post',
  path: '/v1/flows',
  description:
    'Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50).',
  operationId: 'CreateFlow',
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
              availabilityZone: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS Region.',
                }),
              entitlements: z
                .array(GrantEntitlementRequestSchema)
                .exactOptional()
                .openapi({ description: 'The entitlements that you want to grant on a flow.' }),
              mediaStreams: z
                .array(AddMediaStreamRequestSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The media streams that you want to add to the flow. You can associate these media streams with sources and outputs on the flow.',
                }),
              name: z.string().openapi({ description: 'The name of the flow.' }),
              outputs: z
                .array(AddOutputRequestSchema)
                .exactOptional()
                .openapi({ description: 'The outputs that you want to add to this flow.' }),
              source: z
                .object({
                  Decryption: EncryptionSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'decryption' },
                        description:
                          'The type of encryption that is used on the content ingested from this source. Allowable encryption types: static-key.',
                      }),
                  ).exactOptional(),
                  Description: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'description' },
                        description:
                          'A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.',
                      }),
                  ).exactOptional(),
                  EntitlementArn: StringSchema.and(
                    z
                      .unknown()
                      .superRefine((val, ctx) => {
                        if (typeof val === 'string') {
                          if (!new RegExp('^arn:.+:mediaconnect.+:entitlement:.+$').test(val)) {
                            ctx.addIssue({ code: 'custom' })
                          }
                        }
                      })
                      .openapi({
                        xml: { name: 'entitlementArn' },
                        description:
                          "The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.",
                      }),
                  ).exactOptional(),
                  IngestPort: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'ingestPort' },
                        description:
                          'The port that the flow will be listening on for incoming content.',
                      }),
                  ).exactOptional(),
                  MaxBitrate: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'maxBitrate' },
                        description:
                          'The smoothing max bitrate (in bps) for RIST, RTP, and RTP-FEC streams.',
                      }),
                  ).exactOptional(),
                  MaxLatency: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'maxLatency' },
                        description:
                          'The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.',
                      }),
                  ).exactOptional(),
                  MaxSyncBuffer: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'maxSyncBuffer' },
                        description:
                          'The size of the buffer (in milliseconds) to use to sync incoming source data.',
                      }),
                  ).exactOptional(),
                  MediaStreamSourceConfigurations:
                    ListOfMediaStreamSourceConfigurationRequestSchema.and(
                      z
                        .any()
                        .openapi({
                          xml: { name: 'mediaStreamSourceConfigurations' },
                          description:
                            'The media streams that are associated with the source, and the parameters for those associations.',
                        }),
                    ).exactOptional(),
                  MinLatency: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'minLatency' },
                        description:
                          'The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.',
                      }),
                  ).exactOptional(),
                  Name: StringSchema.and(
                    z
                      .any()
                      .openapi({ xml: { name: 'name' }, description: 'The name of the source.' }),
                  ).exactOptional(),
                  Protocol: ProtocolSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'protocol' },
                        description: 'The protocol that is used by the source.',
                      }),
                  ).exactOptional(),
                  SenderControlPort: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'senderControlPort' },
                        description:
                          'The port that the flow uses to send outbound requests to initiate connection with the sender.',
                      }),
                  ).exactOptional(),
                  SenderIpAddress: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'senderIpAddress' },
                        description:
                          'The IP address that the flow communicates with to initiate connection with the sender.',
                      }),
                  ).exactOptional(),
                  SourceListenerAddress: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'sourceListenerAddress' },
                        description: 'Source IP or domain name for SRT-caller protocol.',
                      }),
                  ).exactOptional(),
                  SourceListenerPort: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'sourceListenerPort' },
                        description: 'Source port for SRT-caller protocol.',
                      }),
                  ).exactOptional(),
                  StreamId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'streamId' },
                        description:
                          'The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.',
                      }),
                  ).exactOptional(),
                  VpcInterfaceName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'vpcInterfaceName' },
                        description: 'The name of the VPC interface to use for this source.',
                      }),
                  ).exactOptional(),
                  WhitelistCidr: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'whitelistCidr' },
                        description:
                          'The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.',
                      }),
                  ).exactOptional(),
                  GatewayBridgeSource: SetGatewayBridgeSourceRequestSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'gatewayBridgeSource' },
                        description:
                          'The source configuration for cloud flows receiving a stream from a bridge.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'The settings for the source of the flow.', required: [] }),
              sourceFailoverConfig: z
                .object({
                  FailoverMode: FailoverModeSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'failoverMode' },
                        description:
                          'The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.',
                      }),
                  ).exactOptional(),
                  RecoveryWindow: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'recoveryWindow' },
                        description: 'Search window time to look for dash-7 packets',
                      }),
                  ).exactOptional(),
                  SourcePriority: SourcePrioritySchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'sourcePriority' },
                        description:
                          'The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.',
                      }),
                  ).exactOptional(),
                  State: StateSchema.and(
                    z.any().openapi({ xml: { name: 'state' } }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'The settings for source failover.', required: [] }),
              sources: z.array(SetSourceRequestSchema).exactOptional().openapi({ description: '' }),
              vpcInterfaces: z
                .array(VpcInterfaceRequestSchema)
                .exactOptional()
                .openapi({ description: 'The VPC interfaces you want on the flow.' }),
              maintenance: z
                .object({
                  MaintenanceDay: MaintenanceDaySchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'maintenanceDay' },
                        description:
                          'A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.',
                      }),
                  ).exactOptional(),
                  MaintenanceStartHour: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'maintenanceStartHour' },
                        description:
                          'UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Create maintenance setting for a flow', required: [] }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFlowResponseSchema } },
    },
    480: {
      description: 'CreateFlow420Exception',
      content: { 'application/json': { schema: CreateFlow420ExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1GatewaysRoute = createRoute({
  method: 'get',
  path: '/v1/gateways',
  description:
    'Displays a list of gateways that are associated with this account. This request returns a paginated result.',
  operationId: 'ListGateways',
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return per API request. For example, you submit a ListGateways request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token that identifies which batch of results that you want to see. For example, you submit a ListGateways request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListGateways request a second time and specify the NextToken value.',
            schema: { type: 'string' },
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
      content: { 'application/json': { schema: ListGatewaysResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postV1GatewaysRoute = createRoute({
  method: 'post',
  path: '/v1/gateways',
  description: 'Creates a new gateway. The request must include at least one network (up to 4).',
  operationId: 'CreateGateway',
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
              egressCidrBlocks: z
                .array(StringSchema)
                .openapi({
                  description:
                    'The range of IP addresses that are allowed to contribute content or initiate output requests for flows communicating with this gateway. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.',
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'The name of the gateway. This name can not be modified after the gateway is created.',
                }),
              networks: z
                .array(GatewayNetworkSchema)
                .openapi({ description: 'The list of networks that you want to add.' }),
            })
            .openapi({ required: ['egressCidrBlocks', 'name', 'networks'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGatewayResponseSchema } },
    },
    480: {
      description: 'CreateGateway420Exception',
      content: { 'application/json': { schema: CreateGateway420ExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV1BridgesBridgeArnRoute = createRoute({
  method: 'get',
  path: '/v1/bridges/{bridgeArn}',
  description: 'Displays the details of a bridge.',
  operationId: 'DescribeBridge',
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
      bridgeArn: z
        .string()
        .openapi({
          param: {
            name: 'bridgeArn',
            in: 'path',
            required: true,
            description: 'The ARN of the bridge that you want to describe.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBridgeResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const putV1BridgesBridgeArnRoute = createRoute({
  method: 'put',
  path: '/v1/bridges/{bridgeArn}',
  description: 'Updates the bridge',
  operationId: 'UpdateBridge',
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
      bridgeArn: z
        .string()
        .openapi({
          param: {
            name: 'bridgeArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Number (ARN) of the bridge that you want to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              egressGatewayBridge: z
                .object({
                  MaxBitrate: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'maxBitrate' },
                        description: 'Update an existing egress-type bridge.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: '', required: [] }),
              ingressGatewayBridge: z
                .object({
                  MaxBitrate: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'maxBitrate' },
                        description: 'The maximum expected bitrate (in bps).',
                      }),
                  ).exactOptional(),
                  MaxOutputs: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'maxOutputs' },
                        description: 'The maximum number of expected outputs.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: '', required: [] }),
              sourceFailoverConfig: z
                .object({
                  FailoverMode: FailoverModeSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'failoverMode' },
                        description:
                          'The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.',
                      }),
                  ).exactOptional(),
                  RecoveryWindow: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'recoveryWindow' },
                        description: 'Recovery window time to look for dash-7 packets',
                      }),
                  ).exactOptional(),
                  SourcePriority: SourcePrioritySchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'sourcePriority' },
                        description:
                          'The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.',
                      }),
                  ).exactOptional(),
                  State: StateSchema.and(
                    z.any().openapi({ xml: { name: 'state' } }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'The settings for source failover.', required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBridgeResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteV1BridgesBridgeArnRoute = createRoute({
  method: 'delete',
  path: '/v1/bridges/{bridgeArn}',
  description: 'Deletes a bridge. Before you can delete a bridge, you must stop the bridge.',
  operationId: 'DeleteBridge',
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
      bridgeArn: z
        .string()
        .openapi({
          param: {
            name: 'bridgeArn',
            in: 'path',
            required: true,
            description: 'The ARN of the bridge that you want to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBridgeResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV1FlowsFlowArnRoute = createRoute({
  method: 'get',
  path: '/v1/flows/{flowArn}',
  description:
    'Displays the details of a flow. The response includes the flow ARN, name, and Availability Zone, as well as details about the source, outputs, and entitlements.',
  operationId: 'DescribeFlow',
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
      flowArn: z
        .string()
        .openapi({
          param: {
            name: 'flowArn',
            in: 'path',
            required: true,
            description: 'The ARN of the flow that you want to describe.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFlowResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1FlowsFlowArnRoute = createRoute({
  method: 'put',
  path: '/v1/flows/{flowArn}',
  description: 'Updates flow',
  operationId: 'UpdateFlow',
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
      flowArn: z
        .string()
        .openapi({
          param: {
            name: 'flowArn',
            in: 'path',
            required: true,
            description: 'The flow that you want to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sourceFailoverConfig: z
                .object({
                  FailoverMode: FailoverModeSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'failoverMode' },
                        description:
                          'The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.',
                      }),
                  ).exactOptional(),
                  RecoveryWindow: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'recoveryWindow' },
                        description: 'Recovery window time to look for dash-7 packets',
                      }),
                  ).exactOptional(),
                  SourcePriority: SourcePrioritySchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'sourcePriority' },
                        description:
                          'The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.',
                      }),
                  ).exactOptional(),
                  State: StateSchema.and(
                    z.any().openapi({ xml: { name: 'state' } }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'The settings for source failover.', required: [] }),
              maintenance: z
                .object({
                  MaintenanceDay: MaintenanceDaySchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'maintenanceDay' },
                        description:
                          'A day of a week when the maintenance will happen. use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.',
                      }),
                  ).exactOptional(),
                  MaintenanceScheduledDate: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'maintenanceScheduledDate' },
                        description:
                          'A scheduled date in ISO UTC format when the maintenance will happen. Use YYYY-MM-DD format. Example: 2021-01-30.',
                      }),
                  ).exactOptional(),
                  MaintenanceStartHour: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'maintenanceStartHour' },
                        description:
                          'UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Update maintenance setting for a flow', required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFlowResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1FlowsFlowArnRoute = createRoute({
  method: 'delete',
  path: '/v1/flows/{flowArn}',
  description: 'Deletes a flow. Before you can delete a flow, you must stop the flow.',
  operationId: 'DeleteFlow',
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
      flowArn: z
        .string()
        .openapi({
          param: {
            name: 'flowArn',
            in: 'path',
            required: true,
            description: 'The ARN of the flow that you want to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFlowResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1GatewaysGatewayArnRoute = createRoute({
  method: 'get',
  path: '/v1/gateways/{gatewayArn}',
  description:
    'Displays the details of a gateway. The response includes the gateway ARN, name, and CIDR blocks, as well as details about the networks.',
  operationId: 'DescribeGateway',
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
      gatewayArn: z
        .string()
        .openapi({
          param: {
            name: 'gatewayArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the gateway that you want to describe.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGatewayResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteV1GatewaysGatewayArnRoute = createRoute({
  method: 'delete',
  path: '/v1/gateways/{gatewayArn}',
  description:
    'Deletes a gateway. Before you can delete a gateway, you must deregister its instances and delete its bridges.',
  operationId: 'DeleteGateway',
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
      gatewayArn: z
        .string()
        .openapi({
          param: {
            name: 'gatewayArn',
            in: 'path',
            required: true,
            description: 'The ARN of the gateway that you want to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteGatewayResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV1GatewayInstancesGatewayInstanceArnRoute = createRoute({
  method: 'get',
  path: '/v1/gateway-instances/{gatewayInstanceArn}',
  description: 'Displays the details of an instance.',
  operationId: 'DescribeGatewayInstance',
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
      gatewayInstanceArn: z
        .string()
        .openapi({
          param: {
            name: 'gatewayInstanceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the gateway instance that you want to describe.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGatewayInstanceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const putV1GatewayInstancesGatewayInstanceArnRoute = createRoute({
  method: 'put',
  path: '/v1/gateway-instances/{gatewayInstanceArn}',
  description: 'Updates the configuration of an existing Gateway Instance.',
  operationId: 'UpdateGatewayInstance',
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
      gatewayInstanceArn: z
        .string()
        .openapi({
          param: {
            name: 'gatewayInstanceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the instance that you want to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              bridgePlacement: z
                .enum(['AVAILABLE', 'LOCKED'])
                .exactOptional()
                .openapi({
                  description:
                    'The availability of the instance to host new bridges. The bridgePlacement property can be LOCKED or AVAILABLE. If it is LOCKED, no new bridges can be deployed to this instance. If it is AVAILABLE, new bridges can be added to this instance.',
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
      content: { 'application/json': { schema: UpdateGatewayInstanceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteV1GatewayInstancesGatewayInstanceArnRoute = createRoute({
  method: 'delete',
  path: '/v1/gateway-instances/{gatewayInstanceArn}',
  description:
    'Deregisters an instance. Before you deregister an instance, all bridges running on the instance must be stopped. If you want to deregister an instance without stopping the bridges, you must use the --force option.',
  operationId: 'DeregisterGatewayInstance',
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
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'force',
            in: 'query',
            required: false,
            description:
              'Force the deregistration of an instance. Force will deregister an instance, even if there are bridges running on it.',
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      gatewayInstanceArn: z
        .string()
        .openapi({
          param: {
            name: 'gatewayInstanceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the gateway that contains the instance that you want to deregister.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeregisterGatewayInstanceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV1OfferingsOfferingArnRoute = createRoute({
  method: 'get',
  path: '/v1/offerings/{offeringArn}',
  description:
    'Displays the details of an offering. The response includes the offering description, duration, outbound bandwidth, price, and Amazon Resource Name (ARN).',
  operationId: 'DescribeOffering',
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
      offeringArn: z
        .string()
        .openapi({
          param: {
            name: 'offeringArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the offering.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeOfferingResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postV1OfferingsOfferingArnRoute = createRoute({
  method: 'post',
  path: '/v1/offerings/{offeringArn}',
  description:
    "Submits a request to purchase an offering. If you already have an active reservation, you can't purchase another offering.",
  operationId: 'PurchaseOffering',
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
      offeringArn: z
        .string()
        .openapi({
          param: {
            name: 'offeringArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the offering.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              reservationName: z
                .string()
                .openapi({ description: 'The name that you want to use for the reservation.' }),
              start: z
                .string()
                .openapi({
                  description:
                    "The date and time that you want the reservation to begin, in Coordinated Universal Time (UTC). You can specify any date and time between 12:00am on the first day of the current month to the current time on today's date, inclusive. Specify the start in a 24-hour notation. Use the following format: YYYY-MM-DDTHH:mm:SSZ, where T and Z are literal characters. For example, to specify 11:30pm on March 5, 2020, enter 2020-03-05T23:30:00Z.",
                }),
            })
            .openapi({ required: ['reservationName', 'start'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: PurchaseOfferingResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1ReservationsReservationArnRoute = createRoute({
  method: 'get',
  path: '/v1/reservations/{reservationArn}',
  description:
    'Displays the details of a reservation. The response includes the reservation name, state, start date and time, and the details of the offering that make up the rest of the reservation (such as price, duration, and outbound bandwidth).',
  operationId: 'DescribeReservation',
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
      reservationArn: z
        .string()
        .openapi({
          param: {
            name: 'reservationArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the reservation.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeReservationResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postV1FlowsFlowArnEntitlementsRoute = createRoute({
  method: 'post',
  path: '/v1/flows/{flowArn}/entitlements',
  description: 'Grants entitlements to an existing flow.',
  operationId: 'GrantFlowEntitlements',
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
      flowArn: z
        .string()
        .openapi({
          param: {
            name: 'flowArn',
            in: 'path',
            required: true,
            description: 'The flow that you want to grant entitlements on.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              entitlements: z
                .array(GrantEntitlementRequestSchema)
                .openapi({ description: 'The list of entitlements that you want to grant.' }),
            })
            .openapi({ required: ['entitlements'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GrantFlowEntitlementsResponseSchema } },
    },
    480: {
      description: 'GrantFlowEntitlements420Exception',
      content: { 'application/json': { schema: GrantFlowEntitlements420ExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV1EntitlementsRoute = createRoute({
  method: 'get',
  path: '/v1/entitlements',
  description:
    'Displays a list of all entitlements that have been granted to this account. This request returns 20 results per page.',
  operationId: 'ListEntitlements',
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return per API request. For example, you submit a ListEntitlements request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 20 results per page.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token that identifies which batch of results that you want to see. For example, you submit a ListEntitlements request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListEntitlements request a second time and specify the NextToken value.',
            schema: { type: 'string' },
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
      content: { 'application/json': { schema: ListEntitlementsResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getV1GatewayInstancesRoute = createRoute({
  method: 'get',
  path: '/v1/gateway-instances',
  description:
    'Displays a list of instances associated with the AWS account. This request returns a paginated result. You can use the filterArn property to display only the instances associated with the selected Gateway Amazon Resource Name (ARN).',
  operationId: 'ListGatewayInstances',
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
      filterArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filterArn',
            in: 'query',
            required: false,
            description:
              'Filter the list results to display only the instances associated with the selected Gateway Amazon Resource Name (ARN).',
            schema: { type: 'string' },
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return per API request. For example, you submit a ListInstances request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token that identifies which batch of results that you want to see. For example, you submit a ListInstances request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListInstances request a second time and specify the NextToken value.',
            schema: { type: 'string' },
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
      content: { 'application/json': { schema: ListGatewayInstancesResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV1OfferingsRoute = createRoute({
  method: 'get',
  path: '/v1/offerings',
  description:
    "Displays a list of all offerings that are available to this account in the current AWS Region. If you have an active reservation (which means you've purchased an offering that has already started and hasn't expired yet), your account isn't eligible for other offerings.",
  operationId: 'ListOfferings',
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return per API request. For example, you submit a ListOfferings request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token that identifies which batch of results that you want to see. For example, you submit a ListOfferings request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListOfferings request a second time and specify the NextToken value.',
            schema: { type: 'string' },
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
      content: { 'application/json': { schema: ListOfferingsResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getV1ReservationsRoute = createRoute({
  method: 'get',
  path: '/v1/reservations',
  description:
    'Displays a list of all reservations that have been purchased by this account in the current AWS Region. This list includes all reservations in all states (such as active and expired).',
  operationId: 'ListReservations',
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return per API request. For example, you submit a ListReservations request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The token that identifies which batch of results that you want to see. For example, you submit a ListReservations request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListOfferings request a second time and specify the NextToken value.',
            schema: { type: 'string' },
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
      content: { 'application/json': { schema: ListReservationsResponseSchema } },
    },
    480: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'List all tags on an AWS Elemental MediaConnect resource',
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
    params: z.object({
      resourceArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource for which to list the tags.',
            schema: { type: 'string' },
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
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description:
    'Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.',
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
    params: z.object({
      resourceArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource to which to add tags.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), StringSchema)
                .openapi({
                  description:
                    'A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
                }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putV1BridgesBridgeArnOutputsOutputNameRoute = createRoute({
  method: 'put',
  path: '/v1/bridges/{bridgeArn}/outputs/{outputName}',
  description: 'Updates an existing bridge output.',
  operationId: 'UpdateBridgeOutput',
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
      bridgeArn: z
        .string()
        .openapi({
          param: {
            name: 'bridgeArn',
            in: 'path',
            required: true,
            description: 'The ARN of the bridge that you want to update.',
            schema: { type: 'string' },
          },
        }),
      outputName: z
        .string()
        .openapi({
          param: {
            name: 'outputName',
            in: 'path',
            required: true,
            description: 'The name of the bridge output that you want to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              networkOutput: z
                .object({
                  IpAddress: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'ipAddress' },
                        description: 'The network output IP Address.',
                      }),
                  ).exactOptional(),
                  NetworkName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'networkName' },
                        description: "The network output's gateway network name.",
                      }),
                  ).exactOptional(),
                  Port: IntegerSchema.and(
                    z
                      .any()
                      .openapi({ xml: { name: 'port' }, description: 'The network output port.' }),
                  ).exactOptional(),
                  Protocol: ProtocolSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'protocol' },
                        description: 'The network output protocol.',
                      }),
                  ).exactOptional(),
                  Ttl: IntegerSchema.and(
                    z
                      .any()
                      .openapi({ xml: { name: 'ttl' }, description: 'The network output TTL.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Update an existing network output.', required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBridgeOutputResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteV1BridgesBridgeArnOutputsOutputNameRoute = createRoute({
  method: 'delete',
  path: '/v1/bridges/{bridgeArn}/outputs/{outputName}',
  description: 'Removes an output from a bridge.',
  operationId: 'RemoveBridgeOutput',
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
      bridgeArn: z
        .string()
        .openapi({
          param: {
            name: 'bridgeArn',
            in: 'path',
            required: true,
            description: 'The ARN of the bridge that you want to update.',
            schema: { type: 'string' },
          },
        }),
      outputName: z
        .string()
        .openapi({
          param: {
            name: 'outputName',
            in: 'path',
            required: true,
            description: 'The name of the bridge output that you want to remove.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveBridgeOutputResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const putV1BridgesBridgeArnSourcesSourceNameRoute = createRoute({
  method: 'put',
  path: '/v1/bridges/{bridgeArn}/sources/{sourceName}',
  description: 'Updates an existing bridge source.',
  operationId: 'UpdateBridgeSource',
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
      bridgeArn: z
        .string()
        .openapi({
          param: {
            name: 'bridgeArn',
            in: 'path',
            required: true,
            description: 'The ARN of the bridge that you want to update.',
            schema: { type: 'string' },
          },
        }),
      sourceName: z
        .string()
        .openapi({
          param: {
            name: 'sourceName',
            in: 'path',
            required: true,
            description: 'The name of the source that you want to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              flowSource: z
                .object({
                  FlowArn: StringSchema.and(
                    z
                      .unknown()
                      .superRefine((val, ctx) => {
                        if (typeof val === 'string') {
                          if (!new RegExp('^arn:.+:mediaconnect.+:flow:.+$').test(val)) {
                            ctx.addIssue({ code: 'custom' })
                          }
                        }
                      })
                      .openapi({
                        xml: { name: 'flowArn' },
                        description: 'The ARN of the cloud flow to use as a source of this bridge.',
                      }),
                  ).exactOptional(),
                  FlowVpcInterfaceAttachment: VpcInterfaceAttachmentSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'flowVpcInterfaceAttachment' },
                        description:
                          'The name of the VPC interface attachment to use for this source.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Update the flow source of the bridge.', required: [] }),
              networkSource: z
                .object({
                  MulticastIp: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'multicastIp' },
                        description: 'The network source multicast IP.',
                      }),
                  ).exactOptional(),
                  NetworkName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'networkName' },
                        description: "The network source's gateway network name.",
                      }),
                  ).exactOptional(),
                  Port: IntegerSchema.and(
                    z
                      .any()
                      .openapi({ xml: { name: 'port' }, description: 'The network source port.' }),
                  ).exactOptional(),
                  Protocol: ProtocolSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'protocol' },
                        description: 'The network source protocol.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Update the network source of the bridge.', required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBridgeSourceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteV1BridgesBridgeArnSourcesSourceNameRoute = createRoute({
  method: 'delete',
  path: '/v1/bridges/{bridgeArn}/sources/{sourceName}',
  description: 'Removes a source from a bridge.',
  operationId: 'RemoveBridgeSource',
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
      bridgeArn: z
        .string()
        .openapi({
          param: {
            name: 'bridgeArn',
            in: 'path',
            required: true,
            description: 'The ARN of the bridge that you want to update.',
            schema: { type: 'string' },
          },
        }),
      sourceName: z
        .string()
        .openapi({
          param: {
            name: 'sourceName',
            in: 'path',
            required: true,
            description: 'The name of the bridge source that you want to remove.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveBridgeSourceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const putV1FlowsFlowArnMediaStreamsMediaStreamNameRoute = createRoute({
  method: 'put',
  path: '/v1/flows/{flowArn}/mediaStreams/{mediaStreamName}',
  description: 'Updates an existing media stream.',
  operationId: 'UpdateFlowMediaStream',
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
      flowArn: z
        .string()
        .openapi({
          param: {
            name: 'flowArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the flow.',
            schema: { type: 'string' },
          },
        }),
      mediaStreamName: z
        .string()
        .openapi({
          param: {
            name: 'mediaStreamName',
            in: 'path',
            required: true,
            description: 'The name of the media stream that you want to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              attributes: z
                .object({
                  Fmtp: FmtpRequestSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'fmtp' },
                        description:
                          'The settings that you want to use to define the media stream.',
                      }),
                  ).exactOptional(),
                  Lang: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'lang' },
                        description:
                          'The audio language, in a format that is recognized by the receiver.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Attributes that are related to the media stream.',
                  required: [],
                }),
              clockRate: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The sample rate (in Hz) for the stream. If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000.',
                }),
              description: z.string().exactOptional().openapi({ description: 'Description' }),
              mediaStreamType: z
                .enum(['video', 'audio', 'ancillary-data'])
                .exactOptional()
                .openapi({ description: 'The type of media stream.' }),
              videoFormat: z
                .string()
                .exactOptional()
                .openapi({ description: 'The resolution of the video.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFlowMediaStreamResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1FlowsFlowArnMediaStreamsMediaStreamNameRoute = createRoute({
  method: 'delete',
  path: '/v1/flows/{flowArn}/mediaStreams/{mediaStreamName}',
  description:
    'Removes a media stream from a flow. This action is only available if the media stream is not associated with a source or output.',
  operationId: 'RemoveFlowMediaStream',
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
      flowArn: z
        .string()
        .openapi({
          param: {
            name: 'flowArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the flow.',
            schema: { type: 'string' },
          },
        }),
      mediaStreamName: z
        .string()
        .openapi({
          param: {
            name: 'mediaStreamName',
            in: 'path',
            required: true,
            description: 'The name of the media stream that you want to remove.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveFlowMediaStreamResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1FlowsFlowArnOutputsOutputArnRoute = createRoute({
  method: 'put',
  path: '/v1/flows/{flowArn}/outputs/{outputArn}',
  description: 'Updates an existing flow output.',
  operationId: 'UpdateFlowOutput',
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
      flowArn: z
        .string()
        .openapi({
          param: {
            name: 'flowArn',
            in: 'path',
            required: true,
            description: 'The flow that is associated with the output that you want to update.',
            schema: { type: 'string' },
          },
        }),
      outputArn: z
        .string()
        .openapi({
          param: {
            name: 'outputArn',
            in: 'path',
            required: true,
            description: 'The ARN of the output that you want to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              cidrAllowList: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user.',
                }),
              destination: z
                .string()
                .exactOptional()
                .openapi({ description: 'The IP address where you want to send the output.' }),
              encryption: z
                .object({
                  Algorithm: AlgorithmSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'algorithm' },
                        description:
                          'The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).',
                      }),
                  ).exactOptional(),
                  ConstantInitializationVector: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'constantInitializationVector' },
                        description:
                          'A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.',
                      }),
                  ).exactOptional(),
                  DeviceId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'deviceId' },
                        description:
                          'The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
                      }),
                  ).exactOptional(),
                  KeyType: KeyTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'keyType' },
                        description:
                          'The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).',
                      }),
                  ).exactOptional(),
                  Region: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'region' },
                        description:
                          'The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
                      }),
                  ).exactOptional(),
                  ResourceId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'resourceId' },
                        description:
                          'An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
                      }),
                  ).exactOptional(),
                  RoleArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'roleArn' },
                        description:
                          'The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).',
                      }),
                  ).exactOptional(),
                  SecretArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'secretArn' },
                        description:
                          'The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.',
                      }),
                  ).exactOptional(),
                  Url: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'url' },
                        description:
                          'The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Information about the encryption of the flow.',
                  required: [],
                }),
              maxLatency: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.',
                }),
              mediaStreamOutputConfigurations: z
                .array(MediaStreamOutputConfigurationRequestSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The media streams that are associated with the output, and the parameters for those associations.',
                }),
              minLatency: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.',
                }),
              port: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The port to use when content is distributed to this output.',
                }),
              protocol: z
                .enum([
                  'zixi-push',
                  'rtp-fec',
                  'rtp',
                  'zixi-pull',
                  'rist',
                  'st2110-jpegxs',
                  'cdi',
                  'srt-listener',
                  'srt-caller',
                  'fujitsu-qos',
                  'udp',
                ])
                .exactOptional()
                .openapi({ description: 'The protocol to use for the output.' }),
              remoteId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The remote ID for the Zixi-pull stream.' }),
              senderControlPort: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The port that the flow uses to send outbound requests to initiate connection with the sender.',
                }),
              senderIpAddress: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The IP address that the flow communicates with to initiate connection with the sender.',
                }),
              smoothingLatency: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.',
                }),
              streamId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.',
                }),
              vpcInterfaceAttachment: z
                .object({
                  VpcInterfaceName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'vpcInterfaceName' },
                        description: 'The name of the VPC interface to use for this resource.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The settings for attaching a VPC interface to an resource.',
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
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFlowOutputResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1FlowsFlowArnOutputsOutputArnRoute = createRoute({
  method: 'delete',
  path: '/v1/flows/{flowArn}/outputs/{outputArn}',
  description:
    'Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output.',
  operationId: 'RemoveFlowOutput',
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
      flowArn: z
        .string()
        .openapi({
          param: {
            name: 'flowArn',
            in: 'path',
            required: true,
            description: 'The flow that you want to remove an output from.',
            schema: { type: 'string' },
          },
        }),
      outputArn: z
        .string()
        .openapi({
          param: {
            name: 'outputArn',
            in: 'path',
            required: true,
            description: 'The ARN of the output that you want to remove.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveFlowOutputResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1FlowsFlowArnSourceSourceArnRoute = createRoute({
  method: 'put',
  path: '/v1/flows/{flowArn}/source/{sourceArn}',
  description: 'Updates the source of a flow.',
  operationId: 'UpdateFlowSource',
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
      flowArn: z
        .string()
        .openapi({
          param: {
            name: 'flowArn',
            in: 'path',
            required: true,
            description: 'The flow that is associated with the source that you want to update.',
            schema: { type: 'string' },
          },
        }),
      sourceArn: z
        .string()
        .openapi({
          param: {
            name: 'sourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the source that you want to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              decryption: z
                .object({
                  Algorithm: AlgorithmSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'algorithm' },
                        description:
                          'The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).',
                      }),
                  ).exactOptional(),
                  ConstantInitializationVector: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'constantInitializationVector' },
                        description:
                          'A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.',
                      }),
                  ).exactOptional(),
                  DeviceId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'deviceId' },
                        description:
                          'The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
                      }),
                  ).exactOptional(),
                  KeyType: KeyTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'keyType' },
                        description:
                          'The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).',
                      }),
                  ).exactOptional(),
                  Region: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'region' },
                        description:
                          'The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
                      }),
                  ).exactOptional(),
                  ResourceId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'resourceId' },
                        description:
                          'An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
                      }),
                  ).exactOptional(),
                  RoleArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'roleArn' },
                        description:
                          'The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).',
                      }),
                  ).exactOptional(),
                  SecretArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'secretArn' },
                        description:
                          'The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.',
                      }),
                  ).exactOptional(),
                  Url: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'url' },
                        description:
                          'The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Information about the encryption of the flow.',
                  required: [],
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.',
                }),
              entitlementArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.",
                }),
              ingestPort: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The port that the flow will be listening on for incoming content.',
                }),
              maxBitrate: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The smoothing max bitrate (in bps) for RIST, RTP, and RTP-FEC streams.',
                }),
              maxLatency: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.',
                }),
              maxSyncBuffer: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The size of the buffer (in milliseconds) to use to sync incoming source data.',
                }),
              mediaStreamSourceConfigurations: z
                .array(MediaStreamSourceConfigurationRequestSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The media streams that are associated with the source, and the parameters for those associations.',
                }),
              minLatency: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.',
                }),
              protocol: z
                .enum([
                  'zixi-push',
                  'rtp-fec',
                  'rtp',
                  'zixi-pull',
                  'rist',
                  'st2110-jpegxs',
                  'cdi',
                  'srt-listener',
                  'srt-caller',
                  'fujitsu-qos',
                  'udp',
                ])
                .exactOptional()
                .openapi({ description: 'The protocol that is used by the source.' }),
              senderControlPort: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The port that the flow uses to send outbound requests to initiate connection with the sender.',
                }),
              senderIpAddress: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The IP address that the flow communicates with to initiate connection with the sender.',
                }),
              sourceListenerAddress: z
                .string()
                .exactOptional()
                .openapi({ description: 'Source IP or domain name for SRT-caller protocol.' }),
              sourceListenerPort: z
                .int()
                .exactOptional()
                .openapi({ description: 'Source port for SRT-caller protocol.' }),
              streamId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.',
                }),
              vpcInterfaceName: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the VPC interface to use for this source.' }),
              whitelistCidr: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.',
                }),
              gatewayBridgeSource: z
                .object({
                  BridgeArn: StringSchema.and(
                    z
                      .unknown()
                      .superRefine((val, ctx) => {
                        if (typeof val === 'string') {
                          if (!new RegExp('^arn:.+:mediaconnect.+:bridge:.+$').test(val)) {
                            ctx.addIssue({ code: 'custom' })
                          }
                        }
                      })
                      .openapi({
                        xml: { name: 'bridgeArn' },
                        description: 'The ARN of the bridge feeding this flow.',
                      }),
                  ).exactOptional(),
                  VpcInterfaceAttachment: VpcInterfaceAttachmentSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'vpcInterfaceAttachment' },
                        description:
                          'The name of the VPC interface attachment to use for this bridge source.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The source configuration for cloud flows receiving a stream from a bridge.',
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
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFlowSourceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1FlowsFlowArnSourceSourceArnRoute = createRoute({
  method: 'delete',
  path: '/v1/flows/{flowArn}/source/{sourceArn}',
  description:
    'Removes a source from an existing flow. This request can be made only if there is more than one source on the flow.',
  operationId: 'RemoveFlowSource',
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
      flowArn: z
        .string()
        .openapi({
          param: {
            name: 'flowArn',
            in: 'path',
            required: true,
            description: 'The flow that you want to remove a source from.',
            schema: { type: 'string' },
          },
        }),
      sourceArn: z
        .string()
        .openapi({
          param: {
            name: 'sourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the source that you want to remove.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveFlowSourceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1FlowsFlowArnVpcInterfacesVpcInterfaceNameRoute = createRoute({
  method: 'delete',
  path: '/v1/flows/{flowArn}/vpcInterfaces/{vpcInterfaceName}',
  description:
    'Removes a VPC Interface from an existing flow. This request can be made only on a VPC interface that does not have a Source or Output associated with it. If the VPC interface is referenced by a Source or Output, you must first delete or update the Source or Output to no longer reference the VPC interface.',
  operationId: 'RemoveFlowVpcInterface',
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
      flowArn: z
        .string()
        .openapi({
          param: {
            name: 'flowArn',
            in: 'path',
            required: true,
            description: 'The flow that you want to remove a VPC interface from.',
            schema: { type: 'string' },
          },
        }),
      vpcInterfaceName: z
        .string()
        .openapi({
          param: {
            name: 'vpcInterfaceName',
            in: 'path',
            required: true,
            description: 'The name of the VPC interface that you want to remove.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveFlowVpcInterfaceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV1FlowsFlowArnEntitlementsEntitlementArnRoute = createRoute({
  method: 'put',
  path: '/v1/flows/{flowArn}/entitlements/{entitlementArn}',
  description:
    "You can change an entitlement's description, subscribers, and encryption. If you change the subscribers, the service will remove the outputs that are are used by the subscribers that are removed.",
  operationId: 'UpdateFlowEntitlement',
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
      entitlementArn: z
        .string()
        .openapi({
          param: {
            name: 'entitlementArn',
            in: 'path',
            required: true,
            description: 'The ARN of the entitlement that you want to update.',
            schema: { type: 'string' },
          },
        }),
      flowArn: z
        .string()
        .openapi({
          param: {
            name: 'flowArn',
            in: 'path',
            required: true,
            description:
              'The flow that is associated with the entitlement that you want to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user.',
                }),
              encryption: z
                .object({
                  Algorithm: AlgorithmSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'algorithm' },
                        description:
                          'The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).',
                      }),
                  ).exactOptional(),
                  ConstantInitializationVector: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'constantInitializationVector' },
                        description:
                          'A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.',
                      }),
                  ).exactOptional(),
                  DeviceId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'deviceId' },
                        description:
                          'The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
                      }),
                  ).exactOptional(),
                  KeyType: KeyTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'keyType' },
                        description:
                          'The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).',
                      }),
                  ).exactOptional(),
                  Region: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'region' },
                        description:
                          'The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
                      }),
                  ).exactOptional(),
                  ResourceId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'resourceId' },
                        description:
                          'An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
                      }),
                  ).exactOptional(),
                  RoleArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'roleArn' },
                        description:
                          'The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).',
                      }),
                  ).exactOptional(),
                  SecretArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'secretArn' },
                        description:
                          'The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.',
                      }),
                  ).exactOptional(),
                  Url: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'url' },
                        description:
                          'The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Information about the encryption of the flow.',
                  required: [],
                }),
              entitlementStatus: z
                .enum(['ENABLED', 'DISABLED'])
                .exactOptional()
                .openapi({
                  description:
                    'An indication of whether you want to enable the entitlement to allow access, or disable it to stop streaming content to the subscriber’s flow temporarily. If you don’t specify the entitlementStatus field in your request, MediaConnect leaves the value unchanged.',
                }),
              subscribers: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFlowEntitlementResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV1FlowsFlowArnEntitlementsEntitlementArnRoute = createRoute({
  method: 'delete',
  path: '/v1/flows/{flowArn}/entitlements/{entitlementArn}',
  description:
    'Revokes an entitlement from a flow. Once an entitlement is revoked, the content becomes unavailable to the subscriber and the associated output is removed.',
  operationId: 'RevokeFlowEntitlement',
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
      entitlementArn: z
        .string()
        .openapi({
          param: {
            name: 'entitlementArn',
            in: 'path',
            required: true,
            description: 'The ARN of the entitlement that you want to revoke.',
            schema: { type: 'string' },
          },
        }),
      flowArn: z
        .string()
        .openapi({
          param: {
            name: 'flowArn',
            in: 'path',
            required: true,
            description: 'The flow that you want to revoke an entitlement from.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: RevokeFlowEntitlementResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1FlowsStartFlowArnRoute = createRoute({
  method: 'post',
  path: '/v1/flows/start/{flowArn}',
  description: 'Starts a flow.',
  operationId: 'StartFlow',
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
      flowArn: z
        .string()
        .openapi({
          param: {
            name: 'flowArn',
            in: 'path',
            required: true,
            description: 'The ARN of the flow that you want to start.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: StartFlowResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV1FlowsStopFlowArnRoute = createRoute({
  method: 'post',
  path: '/v1/flows/stop/{flowArn}',
  description: 'Stops a flow.',
  operationId: 'StopFlow',
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
      flowArn: z
        .string()
        .openapi({
          param: {
            name: 'flowArn',
            in: 'path',
            required: true,
            description: 'The ARN of the flow that you want to stop.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: StopFlowResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: 'Deletes specified tags from a resource.',
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
    params: z.object({
      resourceArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource from which to delete tags.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'The keys of the tags to be removed.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/__string' } },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putV1BridgesBridgeArnStateRoute = createRoute({
  method: 'put',
  path: '/v1/bridges/{bridgeArn}/state',
  description: 'Updates the bridge state',
  operationId: 'UpdateBridgeState',
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
      bridgeArn: z
        .string()
        .openapi({
          param: {
            name: 'bridgeArn',
            in: 'path',
            required: true,
            description: 'The ARN of the bridge that you want to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              desiredState: z.enum(['ACTIVE', 'STANDBY', 'DELETED']).openapi({ description: '' }),
            })
            .openapi({ required: ['desiredState'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBridgeStateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})
