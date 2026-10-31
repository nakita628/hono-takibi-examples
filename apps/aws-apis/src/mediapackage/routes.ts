import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const EgressAccessLogsSchema = z
  .object({
    LogGroupName: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'logGroupName' }, description: 'Customize the log group name.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Configure egress access logging.', required: [] })
  .openapi('EgressAccessLogs')

const IngestEndpointSchema = z
  .object({
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'id' },
          description: 'The system generated unique identifier for the IngestEndpoint',
        }),
    ).exactOptional(),
    Password: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'password' },
          description: 'The system generated password for ingest authentication.',
        }),
    ).exactOptional(),
    Url: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'url' },
          description: 'The ingest URL to which the source stream should be sent.',
        }),
    ).exactOptional(),
    Username: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'username' },
          description: 'The system generated username for ingest authentication.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An endpoint for ingesting source content for a Channel.', required: [] })
  .openapi('IngestEndpoint')

const ListOfIngestEndpointSchema = z.array(IngestEndpointSchema).openapi('ListOfIngestEndpoint')

const HlsIngestSchema = z
  .object({
    IngestEndpoints: ListOfIngestEndpointSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'ingestEndpoints' },
          description: 'A list of endpoints to which the source stream should be sent.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An HTTP Live Streaming (HLS) ingest resource configuration.',
    required: [],
  })
  .openapi('HlsIngest')

const IngressAccessLogsSchema = z
  .object({
    LogGroupName: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'logGroupName' }, description: 'Customize the log group name.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Configure ingress access logging.', required: [] })
  .openapi('IngressAccessLogs')

const TagsSchema = z
  .record(z.string(), StringSchema)
  .openapi({ description: 'A collection of tags associated with a resource' })
  .openapi('Tags')

const ConfigureLogsResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description: 'The Amazon Resource Name (ARN) assigned to the Channel.',
        }),
    ).exactOptional(),
    CreatedAt: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdAt' },
          description: 'The date and time the Channel was created.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'A short text description of the Channel.',
        }),
    ).exactOptional(),
    EgressAccessLogs: EgressAccessLogsSchema.and(
      z.any().openapi({ xml: { name: 'egressAccessLogs' } }),
    ).exactOptional(),
    HlsIngest: HlsIngestSchema.and(z.any().openapi({ xml: { name: 'hlsIngest' } })).exactOptional(),
    Id: StringSchema.and(
      z.any().openapi({ xml: { name: 'id' }, description: 'The ID of the Channel.' }),
    ).exactOptional(),
    IngressAccessLogs: IngressAccessLogsSchema.and(
      z.any().openapi({ xml: { name: 'ingressAccessLogs' } }),
    ).exactOptional(),
    Tags: TagsSchema.and(z.any().openapi({ xml: { name: 'tags' } })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigureLogsResponse')

const UnprocessableEntityExceptionSchema = z.any().openapi('UnprocessableEntityException')

const InternalServerErrorExceptionSchema = z.any().openapi('InternalServerErrorException')

const ForbiddenExceptionSchema = z.any().openapi('ForbiddenException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const CreateChannelResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description: 'The Amazon Resource Name (ARN) assigned to the Channel.',
        }),
    ).exactOptional(),
    CreatedAt: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdAt' },
          description: 'The date and time the Channel was created.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'A short text description of the Channel.',
        }),
    ).exactOptional(),
    EgressAccessLogs: EgressAccessLogsSchema.and(
      z.any().openapi({ xml: { name: 'egressAccessLogs' } }),
    ).exactOptional(),
    HlsIngest: HlsIngestSchema.and(z.any().openapi({ xml: { name: 'hlsIngest' } })).exactOptional(),
    Id: StringSchema.and(
      z.any().openapi({ xml: { name: 'id' }, description: 'The ID of the Channel.' }),
    ).exactOptional(),
    IngressAccessLogs: IngressAccessLogsSchema.and(
      z.any().openapi({ xml: { name: 'ingressAccessLogs' } }),
    ).exactOptional(),
    Tags: TagsSchema.and(z.any().openapi({ xml: { name: 'tags' } })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateChannelResponse')

const S3DestinationSchema = z
  .object({
    BucketName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'bucketName' },
          description: 'The name of an S3 bucket within which harvested content will be exported\n',
        }),
    ),
    ManifestKey: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'manifestKey' },
          description:
            'The key in the specified S3 bucket where the harvested top-level manifest will be placed.\n',
        }),
    ),
    RoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'roleArn' },
          description: 'The IAM role used to write to the specified S3 bucket\n',
        }),
    ),
  })
  .openapi({
    required: ['ManifestKey', 'BucketName', 'RoleArn'],
    description:
      'Configuration parameters for where in an S3 bucket to place the harvested content\n',
  })
  .openapi('S3Destination')

const StatusSchema = z.enum(['IN_PROGRESS', 'SUCCEEDED', 'FAILED']).openapi('Status')

const CreateHarvestJobResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description: 'The Amazon Resource Name (ARN) assigned to the HarvestJob.\n',
        }),
    ).exactOptional(),
    ChannelId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'channelId' },
          description: 'The ID of the Channel that the HarvestJob will harvest from.\n',
        }),
    ).exactOptional(),
    CreatedAt: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdAt' },
          description: 'The date and time the HarvestJob was submitted.\n',
        }),
    ).exactOptional(),
    EndTime: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'endTime' },
          description: 'The end of the time-window which will be harvested.\n',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'id' },
          description:
            'The ID of the HarvestJob. The ID must be unique within the region\nand it cannot be changed after the HarvestJob is submitted.\n',
        }),
    ).exactOptional(),
    OriginEndpointId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'originEndpointId' },
          description:
            'The ID of the OriginEndpoint that the HarvestJob will harvest from.\nThis cannot be changed after the HarvestJob is submitted.\n',
        }),
    ).exactOptional(),
    S3Destination: S3DestinationSchema.and(
      z.any().openapi({ xml: { name: 's3Destination' } }),
    ).exactOptional(),
    StartTime: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'startTime' },
          description: 'The start of the time-window which will be harvested.\n',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'status' },
          description:
            'The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for\nHarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will\ninclude an explanation of why the HarvestJob failed.\n',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateHarvestJobResponse')

const AuthorizationSchema = z
  .object({
    CdnIdentifierSecret: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'cdnIdentifierSecret' },
          description:
            'The Amazon Resource Name (ARN) for the secret in Secrets Manager that your Content Distribution Network (CDN) uses for authorization to access your endpoint.\n',
        }),
    ),
    SecretsRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'secretsRoleArn' },
          description:
            'The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.\n',
        }),
    ),
  })
  .openapi({
    required: ['SecretsRoleArn', 'CdnIdentifierSecret'],
    description: 'CDN Authorization credentials',
  })
  .openapi('Authorization')

const CmafEncryptionMethodSchema = z
  .enum(['SAMPLE_AES', 'AES_CTR'])
  .openapi({ description: 'The encryption method to use.' })
  .openapi('CmafEncryptionMethod')

const IntegerSchema = z.int().openapi('Integer')

const PresetSpeke20AudioSchema = z
  .enum(['PRESET-AUDIO-1', 'PRESET-AUDIO-2', 'PRESET-AUDIO-3', 'SHARED', 'UNENCRYPTED'])
  .openapi('PresetSpeke20Audio')

const PresetSpeke20VideoSchema = z
  .enum([
    'PRESET-VIDEO-1',
    'PRESET-VIDEO-2',
    'PRESET-VIDEO-3',
    'PRESET-VIDEO-4',
    'PRESET-VIDEO-5',
    'PRESET-VIDEO-6',
    'PRESET-VIDEO-7',
    'PRESET-VIDEO-8',
    'SHARED',
    'UNENCRYPTED',
  ])
  .openapi('PresetSpeke20Video')

const EncryptionContractConfigurationSchema = z
  .object({
    PresetSpeke20Audio: PresetSpeke20AudioSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'presetSpeke20Audio' },
          description: 'A collection of audio encryption presets.',
        }),
    ),
    PresetSpeke20Video: PresetSpeke20VideoSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'presetSpeke20Video' },
          description: 'A collection of video encryption presets.',
        }),
    ),
  })
  .openapi({
    required: ['PresetSpeke20Audio', 'PresetSpeke20Video'],
    description:
      'Use encryptionContractConfiguration to configure one or more content encryption keys for your endpoints that use SPEKE 2.0. \nThe encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. \nTo configure the encryption contract, specify which audio and video encryption presets to use.\nNote the following considerations when using encryptionContractConfiguration:\nencryptionContractConfiguration can be used for DASH or CMAF endpoints that use SPEKE 2.0. SPEKE 2.0 relies on the CPIX 2.3 specification.\nYou must disable key rotation for this endpoint by setting keyRotationIntervalSeconds to 0.\n',
  })
  .openapi('EncryptionContractConfiguration')

const ListOfStringSchema = z.array(StringSchema).openapi('ListOfString')

const SpekeKeyProviderSchema = z
  .object({
    CertificateArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'certificateArn' },
          description:
            'An Amazon Resource Name (ARN) of a Certificate Manager certificate\nthat MediaPackage will use for enforcing secure end-to-end data\ntransfer with the key provider service.\n',
        }),
    ).exactOptional(),
    EncryptionContractConfiguration: EncryptionContractConfigurationSchema.and(
      z.any().openapi({ xml: { name: 'encryptionContractConfiguration' } }),
    ).exactOptional(),
    ResourceId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'resourceId' },
          description: 'The resource ID to include in key requests.',
        }),
    ),
    RoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'roleArn' },
          description:
            'An Amazon Resource Name (ARN) of an IAM role that AWS Elemental\nMediaPackage will assume when accessing the key provider service.\n',
        }),
    ),
    SystemIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'systemIds' },
          description: 'The system IDs to include in key requests.',
        }),
    ),
    Url: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'url' },
          description: 'The URL of the external key provider service.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceId', 'SystemIds', 'Url', 'RoleArn'],
    description:
      'A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.',
  })
  .openapi('SpekeKeyProvider')

const CmafEncryptionSchema = z
  .object({
    ConstantInitializationVector: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'constantInitializationVector' },
          description:
            "An optional 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting blocks. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).",
        }),
    ).exactOptional(),
    EncryptionMethod: CmafEncryptionMethodSchema.and(
      z.any().openapi({ xml: { name: 'encryptionMethod' } }),
    ).exactOptional(),
    KeyRotationIntervalSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'keyRotationIntervalSeconds' },
          description: 'Time (in seconds) between each encryption key rotation.',
        }),
    ).exactOptional(),
    SpekeKeyProvider: SpekeKeyProviderSchema.and(
      z.any().openapi({ xml: { name: 'spekeKeyProvider' } }),
    ),
  })
  .openapi({
    required: ['SpekeKeyProvider'],
    description: 'A Common Media Application Format (CMAF) encryption configuration.',
  })
  .openapi('CmafEncryption')

const AdMarkersSchema = z
  .enum(['NONE', 'SCTE35_ENHANCED', 'PASSTHROUGH', 'DATERANGE'])
  .openapi('AdMarkers')

const BooleanSchema = z.boolean().openapi('Boolean')

const PlaylistTypeSchema = z.enum(['NONE', 'EVENT', 'VOD']).openapi('PlaylistType')

const AdTriggersElementSchema = z
  .enum([
    'SPLICE_INSERT',
    'BREAK',
    'PROVIDER_ADVERTISEMENT',
    'DISTRIBUTOR_ADVERTISEMENT',
    'PROVIDER_PLACEMENT_OPPORTUNITY',
    'DISTRIBUTOR_PLACEMENT_OPPORTUNITY',
    'PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY',
    'DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY',
  ])
  .openapi('AdTriggersElement')

const AdTriggersSchema = z
  .array(AdTriggersElementSchema)
  .openapi({
    description:
      'A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no\nad markers are output.  Specify multiple items to create ad markers for all of the included\nmessage types.\n',
  })
  .openapi('AdTriggers')

const AdsOnDeliveryRestrictionsSchema = z
  .enum(['NONE', 'RESTRICTED', 'UNRESTRICTED', 'BOTH'])
  .openapi({
    description:
      'This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to\ndetermine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become\nads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that\ncontain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35\nmessages of the types specified in AdTriggers that do not contain delivery restrictions will\nbe treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in\nAdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags\nand are always treated as ads if specified in AdTriggers.\n',
  })
  .openapi('AdsOnDeliveryRestrictions')

const HlsManifestSchema = z
  .object({
    AdMarkers: AdMarkersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'adMarkers' },
          description:
            'This setting controls how ad markers are included in the packaged OriginEndpoint.\n"NONE" will omit all SCTE-35 ad markers from the output.\n"PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad\nmarkers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.\n"SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35\nmessages in the input source.\n"DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events \nin HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value \nthat is greater than 0.\n',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'id' },
          description:
            'The ID of the manifest. The ID must be unique within the OriginEndpoint and it cannot be changed after it is created.',
        }),
    ),
    IncludeIframeOnlyStream: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'includeIframeOnlyStream' },
          description: 'When enabled, an I-Frame only stream will be included in the output.',
        }),
    ).exactOptional(),
    ManifestName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'manifestName' },
          description:
            'An optional short string appended to the end of the OriginEndpoint URL. If not specified, defaults to the manifestName for the OriginEndpoint.',
        }),
    ).exactOptional(),
    PlaylistType: PlaylistTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'playlistType' },
          description:
            'The HTTP Live Streaming (HLS) playlist type.\nWhen either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE\nentry will be included in the media playlist.\n',
        }),
    ).exactOptional(),
    PlaylistWindowSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'playlistWindowSeconds' },
          description: 'Time window (in seconds) contained in each parent manifest.',
        }),
    ).exactOptional(),
    ProgramDateTimeIntervalSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'programDateTimeIntervalSeconds' },
          description:
            'The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag\ninserted into manifests. Additionally, when an interval is specified\nID3Timed Metadata messages will be generated every 5 seconds using the\ningest time of the content.\nIf the interval is not specified, or set to 0, then\nno EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no\nID3Timed Metadata messages will be generated. Note that irrespective\nof this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input,\nit will be passed through to HLS output.\n',
        }),
    ).exactOptional(),
    Url: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'url' },
          description: 'The URL of the packaged OriginEndpoint for consumption.',
        }),
    ).exactOptional(),
    AdTriggers: AdTriggersSchema.and(
      z.any().openapi({ xml: { name: 'adTriggers' } }),
    ).exactOptional(),
    AdsOnDeliveryRestrictions: AdsOnDeliveryRestrictionsSchema.and(
      z.any().openapi({ xml: { name: 'adsOnDeliveryRestrictions' } }),
    ).exactOptional(),
  })
  .openapi({ required: ['Id'], description: 'A HTTP Live Streaming (HLS) manifest configuration.' })
  .openapi('HlsManifest')

const ListOfHlsManifestSchema = z.array(HlsManifestSchema).openapi('ListOfHlsManifest')

const StreamOrderSchema = z
  .enum(['ORIGINAL', 'VIDEO_BITRATE_ASCENDING', 'VIDEO_BITRATE_DESCENDING'])
  .openapi('StreamOrder')

const StreamSelectionSchema = z
  .object({
    MaxVideoBitsPerSecond: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxVideoBitsPerSecond' },
          description: 'The maximum video bitrate (bps) to include in output.',
        }),
    ).exactOptional(),
    MinVideoBitsPerSecond: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'minVideoBitsPerSecond' },
          description: 'The minimum video bitrate (bps) to include in output.',
        }),
    ).exactOptional(),
    StreamOrder: StreamOrderSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'streamOrder' },
          description: 'A directive that determines the order of streams in the output.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A StreamSelection configuration.', required: [] })
  .openapi('StreamSelection')

const CmafPackageSchema = z
  .object({
    Encryption: CmafEncryptionSchema.and(
      z.any().openapi({ xml: { name: 'encryption' } }),
    ).exactOptional(),
    HlsManifests: ListOfHlsManifestSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'hlsManifests' },
          description: 'A list of HLS manifest configurations',
        }),
    ).exactOptional(),
    SegmentDurationSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'segmentDurationSeconds' },
          description:
            'Duration (in seconds) of each segment. Actual segments will be\nrounded to the nearest multiple of the source segment duration.\n',
        }),
    ).exactOptional(),
    SegmentPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'segmentPrefix' },
          description:
            'An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId.',
        }),
    ).exactOptional(),
    StreamSelection: StreamSelectionSchema.and(
      z.any().openapi({ xml: { name: 'streamSelection' } }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A Common Media Application Format (CMAF) packaging configuration.',
    required: [],
  })
  .openapi('CmafPackage')

const DashEncryptionSchema = z
  .object({
    KeyRotationIntervalSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'keyRotationIntervalSeconds' },
          description: 'Time (in seconds) between each encryption key rotation.',
        }),
    ).exactOptional(),
    SpekeKeyProvider: SpekeKeyProviderSchema.and(
      z.any().openapi({ xml: { name: 'spekeKeyProvider' } }),
    ),
  })
  .openapi({
    required: ['SpekeKeyProvider'],
    description: 'A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.',
  })
  .openapi('DashEncryption')

const ManifestLayoutSchema = z.enum(['FULL', 'COMPACT']).openapi('ManifestLayout')

const PeriodTriggersElementSchema = z.literal('ADS').openapi('PeriodTriggersElement')

const ListOfPeriodTriggersElementSchema = z
  .array(PeriodTriggersElementSchema)
  .openapi('ListOfPeriodTriggersElement')

const ProfileSchema = z
  .enum(['NONE', 'HBBTV_1_5', 'HYBRIDCAST', 'DVB_DASH_2014'])
  .openapi('Profile')

const SegmentTemplateFormatSchema = z
  .enum(['NUMBER_WITH_TIMELINE', 'TIME_WITH_TIMELINE', 'NUMBER_WITH_DURATION'])
  .openapi('SegmentTemplateFormat')

const UtcTimingSchema = z
  .enum(['NONE', 'HTTP-HEAD', 'HTTP-ISO', 'HTTP-XSDATE'])
  .openapi('UtcTiming')

const DashPackageSchema = z
  .object({
    AdTriggers: AdTriggersSchema.and(
      z.any().openapi({ xml: { name: 'adTriggers' } }),
    ).exactOptional(),
    AdsOnDeliveryRestrictions: AdsOnDeliveryRestrictionsSchema.and(
      z.any().openapi({ xml: { name: 'adsOnDeliveryRestrictions' } }),
    ).exactOptional(),
    Encryption: DashEncryptionSchema.and(
      z.any().openapi({ xml: { name: 'encryption' } }),
    ).exactOptional(),
    IncludeIframeOnlyStream: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'includeIframeOnlyStream' },
          description: 'When enabled, an I-Frame only stream will be included in the output.',
        }),
    ).exactOptional(),
    ManifestLayout: ManifestLayoutSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'manifestLayout' },
          description:
            'Determines the position of some tags in the Media Presentation Description (MPD).  When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation.  When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.',
        }),
    ).exactOptional(),
    ManifestWindowSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'manifestWindowSeconds' },
          description: 'Time window (in seconds) contained in each manifest.',
        }),
    ).exactOptional(),
    MinBufferTimeSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'minBufferTimeSeconds' },
          description:
            'Minimum duration (in seconds) that a player will buffer media before starting the presentation.',
        }),
    ).exactOptional(),
    MinUpdatePeriodSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'minUpdatePeriodSeconds' },
          description:
            'Minimum duration (in seconds) between potential changes to the Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD).',
        }),
    ).exactOptional(),
    PeriodTriggers: ListOfPeriodTriggersElementSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'periodTriggers' },
          description:
            'A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH)\nMedia Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not\nbe partitioned into more than one period. If the list contains "ADS", new periods will be created where\nthe Channel source contains SCTE-35 ad markers.\n',
        }),
    ).exactOptional(),
    Profile: ProfileSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'profile' },
          description:
            'The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled. When set to "DVB-DASH_2014", DVB-DASH 2014 compliant output is enabled.',
        }),
    ).exactOptional(),
    SegmentDurationSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'segmentDurationSeconds' },
          description:
            'Duration (in seconds) of each segment. Actual segments will be\nrounded to the nearest multiple of the source segment duration.\n',
        }),
    ).exactOptional(),
    SegmentTemplateFormat: SegmentTemplateFormatSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'segmentTemplateFormat' },
          description:
            'Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).  When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs.  When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.',
        }),
    ).exactOptional(),
    StreamSelection: StreamSelectionSchema.and(
      z.any().openapi({ xml: { name: 'streamSelection' } }),
    ).exactOptional(),
    SuggestedPresentationDelaySeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'suggestedPresentationDelaySeconds' },
          description: 'Duration (in seconds) to delay live content before presentation.',
        }),
    ).exactOptional(),
    UtcTiming: UtcTimingSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'utcTiming' },
          description:
            'Determines the type of UTCTiming included in the Media Presentation Description (MPD)',
        }),
    ).exactOptional(),
    UtcTimingUri: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'utcTimingUri' },
          description:
            'Specifies the value attribute of the UTCTiming field when utcTiming is set to HTTP-ISO, HTTP-HEAD or HTTP-XSDATE',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.',
    required: [],
  })
  .openapi('DashPackage')

const EncryptionMethodSchema = z.enum(['AES_128', 'SAMPLE_AES']).openapi('EncryptionMethod')

const HlsEncryptionSchema = z
  .object({
    ConstantInitializationVector: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'constantInitializationVector' },
          description:
            'A constant initialization vector for encryption (optional).\nWhen not specified the initialization vector will be periodically rotated.\n',
        }),
    ).exactOptional(),
    EncryptionMethod: EncryptionMethodSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'encryptionMethod' },
          description: 'The encryption method to use.',
        }),
    ).exactOptional(),
    KeyRotationIntervalSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'keyRotationIntervalSeconds' },
          description: 'Interval (in seconds) between each encryption key rotation.',
        }),
    ).exactOptional(),
    RepeatExtXKey: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'repeatExtXKey' },
          description: 'When enabled, the EXT-X-KEY tag will be repeated in output manifests.',
        }),
    ).exactOptional(),
    SpekeKeyProvider: SpekeKeyProviderSchema.and(
      z.any().openapi({ xml: { name: 'spekeKeyProvider' } }),
    ),
  })
  .openapi({
    required: ['SpekeKeyProvider'],
    description: 'An HTTP Live Streaming (HLS) encryption configuration.',
  })
  .openapi('HlsEncryption')

const HlsPackageSchema = z
  .object({
    AdMarkers: AdMarkersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'adMarkers' },
          description:
            'This setting controls how ad markers are included in the packaged OriginEndpoint.\n"NONE" will omit all SCTE-35 ad markers from the output.\n"PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad\nmarkers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.\n"SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35\nmessages in the input source.\n"DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events \nin HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value \nthat is greater than 0.\n',
        }),
    ).exactOptional(),
    AdTriggers: AdTriggersSchema.and(
      z.any().openapi({ xml: { name: 'adTriggers' } }),
    ).exactOptional(),
    AdsOnDeliveryRestrictions: AdsOnDeliveryRestrictionsSchema.and(
      z.any().openapi({ xml: { name: 'adsOnDeliveryRestrictions' } }),
    ).exactOptional(),
    Encryption: HlsEncryptionSchema.and(
      z.any().openapi({ xml: { name: 'encryption' } }),
    ).exactOptional(),
    IncludeDvbSubtitles: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'includeDvbSubtitles' },
          description:
            'When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.',
        }),
    ).exactOptional(),
    IncludeIframeOnlyStream: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'includeIframeOnlyStream' },
          description: 'When enabled, an I-Frame only stream will be included in the output.',
        }),
    ).exactOptional(),
    PlaylistType: PlaylistTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'playlistType' },
          description:
            'The HTTP Live Streaming (HLS) playlist type.\nWhen either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE\nentry will be included in the media playlist.\n',
        }),
    ).exactOptional(),
    PlaylistWindowSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'playlistWindowSeconds' },
          description: 'Time window (in seconds) contained in each parent manifest.',
        }),
    ).exactOptional(),
    ProgramDateTimeIntervalSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'programDateTimeIntervalSeconds' },
          description:
            'The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag\ninserted into manifests. Additionally, when an interval is specified\nID3Timed Metadata messages will be generated every 5 seconds using the\ningest time of the content.\nIf the interval is not specified, or set to 0, then\nno EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no\nID3Timed Metadata messages will be generated. Note that irrespective\nof this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input,\nit will be passed through to HLS output.\n',
        }),
    ).exactOptional(),
    SegmentDurationSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'segmentDurationSeconds' },
          description:
            'Duration (in seconds) of each fragment. Actual fragments will be\nrounded to the nearest multiple of the source fragment duration.\n',
        }),
    ).exactOptional(),
    StreamSelection: StreamSelectionSchema.and(
      z.any().openapi({ xml: { name: 'streamSelection' } }),
    ).exactOptional(),
    UseAudioRenditionGroup: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'useAudioRenditionGroup' },
          description:
            'When enabled, audio streams will be placed in rendition groups in the output.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An HTTP Live Streaming (HLS) packaging configuration.', required: [] })
  .openapi('HlsPackage')

const MssEncryptionSchema = z
  .object({
    SpekeKeyProvider: SpekeKeyProviderSchema.and(
      z.any().openapi({ xml: { name: 'spekeKeyProvider' } }),
    ),
  })
  .openapi({
    required: ['SpekeKeyProvider'],
    description: 'A Microsoft Smooth Streaming (MSS) encryption configuration.',
  })
  .openapi('MssEncryption')

const MssPackageSchema = z
  .object({
    Encryption: MssEncryptionSchema.and(
      z.any().openapi({ xml: { name: 'encryption' } }),
    ).exactOptional(),
    ManifestWindowSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'manifestWindowSeconds' },
          description: 'The time window (in seconds) contained in each manifest.',
        }),
    ).exactOptional(),
    SegmentDurationSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'segmentDurationSeconds' },
          description: 'The duration (in seconds) of each segment.',
        }),
    ).exactOptional(),
    StreamSelection: StreamSelectionSchema.and(
      z.any().openapi({ xml: { name: 'streamSelection' } }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A Microsoft Smooth Streaming (MSS) packaging configuration.',
    required: [],
  })
  .openapi('MssPackage')

const OriginationSchema = z.enum(['ALLOW', 'DENY']).openapi('Origination')

const CreateOriginEndpointResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description: 'The Amazon Resource Name (ARN) assigned to the OriginEndpoint.',
        }),
    ).exactOptional(),
    Authorization: AuthorizationSchema.and(
      z.any().openapi({ xml: { name: 'authorization' } }),
    ).exactOptional(),
    ChannelId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'channelId' },
          description: 'The ID of the Channel the OriginEndpoint is associated with.',
        }),
    ).exactOptional(),
    CmafPackage: CmafPackageSchema.and(
      z.any().openapi({ xml: { name: 'cmafPackage' } }),
    ).exactOptional(),
    CreatedAt: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdAt' },
          description: 'The date and time the OriginEndpoint was created.',
        }),
    ).exactOptional(),
    DashPackage: DashPackageSchema.and(
      z.any().openapi({ xml: { name: 'dashPackage' } }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'A short text description of the OriginEndpoint.',
        }),
    ).exactOptional(),
    HlsPackage: HlsPackageSchema.and(
      z.any().openapi({ xml: { name: 'hlsPackage' } }),
    ).exactOptional(),
    Id: StringSchema.and(
      z.any().openapi({ xml: { name: 'id' }, description: 'The ID of the OriginEndpoint.' }),
    ).exactOptional(),
    ManifestName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'manifestName' },
          description: 'A short string appended to the end of the OriginEndpoint URL.',
        }),
    ).exactOptional(),
    MssPackage: MssPackageSchema.and(
      z.any().openapi({ xml: { name: 'mssPackage' } }),
    ).exactOptional(),
    Origination: OriginationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'origination' },
          description:
            'Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint\nmay by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be\nrequested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination\n',
        }),
    ).exactOptional(),
    StartoverWindowSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'startoverWindowSeconds' },
          description:
            'Maximum duration (seconds) of content to retain for startover playback.\nIf not specified, startover playback will be disabled for the OriginEndpoint.\n',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(z.any().openapi({ xml: { name: 'tags' } })).exactOptional(),
    TimeDelaySeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'timeDelaySeconds' },
          description:
            'Amount of delay (seconds) to enforce on the playback of live content.\nIf not specified, there will be no time delay in effect for the OriginEndpoint.\n',
        }),
    ).exactOptional(),
    Url: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'url' },
          description: 'The URL of the packaged OriginEndpoint for consumption.',
        }),
    ).exactOptional(),
    Whitelist: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'whitelist' },
          description:
            'A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateOriginEndpointResponse')

const HlsManifestCreateOrUpdateParametersSchema = z
  .object({
    AdMarkers: AdMarkersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'adMarkers' },
          description:
            'This setting controls how ad markers are included in the packaged OriginEndpoint.\n"NONE" will omit all SCTE-35 ad markers from the output.\n"PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad\nmarkers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.\n"SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35\nmessages in the input source.\n"DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events \nin HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value \nthat is greater than 0.\n',
        }),
    ).exactOptional(),
    AdTriggers: AdTriggersSchema.and(
      z.any().openapi({ xml: { name: 'adTriggers' } }),
    ).exactOptional(),
    AdsOnDeliveryRestrictions: AdsOnDeliveryRestrictionsSchema.and(
      z.any().openapi({ xml: { name: 'adsOnDeliveryRestrictions' } }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'id' },
          description:
            'The ID of the manifest. The ID must be unique within the OriginEndpoint and it cannot be changed after it is created.',
        }),
    ),
    IncludeIframeOnlyStream: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'includeIframeOnlyStream' },
          description: 'When enabled, an I-Frame only stream will be included in the output.',
        }),
    ).exactOptional(),
    ManifestName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'manifestName' },
          description:
            'An optional short string appended to the end of the OriginEndpoint URL. If not specified, defaults to the manifestName for the OriginEndpoint.',
        }),
    ).exactOptional(),
    PlaylistType: PlaylistTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'playlistType' },
          description:
            'The HTTP Live Streaming (HLS) playlist type.\nWhen either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE\nentry will be included in the media playlist.\n',
        }),
    ).exactOptional(),
    PlaylistWindowSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'playlistWindowSeconds' },
          description: 'Time window (in seconds) contained in each parent manifest.',
        }),
    ).exactOptional(),
    ProgramDateTimeIntervalSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'programDateTimeIntervalSeconds' },
          description:
            'The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag\ninserted into manifests. Additionally, when an interval is specified\nID3Timed Metadata messages will be generated every 5 seconds using the\ningest time of the content.\nIf the interval is not specified, or set to 0, then\nno EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no\nID3Timed Metadata messages will be generated. Note that irrespective\nof this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input,\nit will be passed through to HLS output.\n',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Id'], description: 'A HTTP Live Streaming (HLS) manifest configuration.' })
  .openapi('HlsManifestCreateOrUpdateParameters')

const ListOfHlsManifestCreateOrUpdateParametersSchema = z
  .array(HlsManifestCreateOrUpdateParametersSchema)
  .openapi('ListOfHlsManifestCreateOrUpdateParameters')

const DeleteChannelResponseSchema = z.object({}).openapi('DeleteChannelResponse')

const DeleteOriginEndpointResponseSchema = z.object({}).openapi('DeleteOriginEndpointResponse')

const DescribeChannelResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description: 'The Amazon Resource Name (ARN) assigned to the Channel.',
        }),
    ).exactOptional(),
    CreatedAt: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdAt' },
          description: 'The date and time the Channel was created.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'A short text description of the Channel.',
        }),
    ).exactOptional(),
    EgressAccessLogs: EgressAccessLogsSchema.and(
      z.any().openapi({ xml: { name: 'egressAccessLogs' } }),
    ).exactOptional(),
    HlsIngest: HlsIngestSchema.and(z.any().openapi({ xml: { name: 'hlsIngest' } })).exactOptional(),
    Id: StringSchema.and(
      z.any().openapi({ xml: { name: 'id' }, description: 'The ID of the Channel.' }),
    ).exactOptional(),
    IngressAccessLogs: IngressAccessLogsSchema.and(
      z.any().openapi({ xml: { name: 'ingressAccessLogs' } }),
    ).exactOptional(),
    Tags: TagsSchema.and(z.any().openapi({ xml: { name: 'tags' } })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeChannelResponse')

const DescribeHarvestJobResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description: 'The Amazon Resource Name (ARN) assigned to the HarvestJob.\n',
        }),
    ).exactOptional(),
    ChannelId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'channelId' },
          description: 'The ID of the Channel that the HarvestJob will harvest from.\n',
        }),
    ).exactOptional(),
    CreatedAt: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdAt' },
          description: 'The date and time the HarvestJob was submitted.\n',
        }),
    ).exactOptional(),
    EndTime: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'endTime' },
          description: 'The end of the time-window which will be harvested.\n',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'id' },
          description:
            'The ID of the HarvestJob. The ID must be unique within the region\nand it cannot be changed after the HarvestJob is submitted.\n',
        }),
    ).exactOptional(),
    OriginEndpointId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'originEndpointId' },
          description:
            'The ID of the OriginEndpoint that the HarvestJob will harvest from.\nThis cannot be changed after the HarvestJob is submitted.\n',
        }),
    ).exactOptional(),
    S3Destination: S3DestinationSchema.and(
      z.any().openapi({ xml: { name: 's3Destination' } }),
    ).exactOptional(),
    StartTime: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'startTime' },
          description: 'The start of the time-window which will be harvested.\n',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'status' },
          description:
            'The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for\nHarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will\ninclude an explanation of why the HarvestJob failed.\n',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeHarvestJobResponse')

const DescribeOriginEndpointResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description: 'The Amazon Resource Name (ARN) assigned to the OriginEndpoint.',
        }),
    ).exactOptional(),
    Authorization: AuthorizationSchema.and(
      z.any().openapi({ xml: { name: 'authorization' } }),
    ).exactOptional(),
    ChannelId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'channelId' },
          description: 'The ID of the Channel the OriginEndpoint is associated with.',
        }),
    ).exactOptional(),
    CmafPackage: CmafPackageSchema.and(
      z.any().openapi({ xml: { name: 'cmafPackage' } }),
    ).exactOptional(),
    CreatedAt: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdAt' },
          description: 'The date and time the OriginEndpoint was created.',
        }),
    ).exactOptional(),
    DashPackage: DashPackageSchema.and(
      z.any().openapi({ xml: { name: 'dashPackage' } }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'A short text description of the OriginEndpoint.',
        }),
    ).exactOptional(),
    HlsPackage: HlsPackageSchema.and(
      z.any().openapi({ xml: { name: 'hlsPackage' } }),
    ).exactOptional(),
    Id: StringSchema.and(
      z.any().openapi({ xml: { name: 'id' }, description: 'The ID of the OriginEndpoint.' }),
    ).exactOptional(),
    ManifestName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'manifestName' },
          description: 'A short string appended to the end of the OriginEndpoint URL.',
        }),
    ).exactOptional(),
    MssPackage: MssPackageSchema.and(
      z.any().openapi({ xml: { name: 'mssPackage' } }),
    ).exactOptional(),
    Origination: OriginationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'origination' },
          description:
            'Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint\nmay by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be\nrequested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination\n',
        }),
    ).exactOptional(),
    StartoverWindowSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'startoverWindowSeconds' },
          description:
            'Maximum duration (seconds) of content to retain for startover playback.\nIf not specified, startover playback will be disabled for the OriginEndpoint.\n',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(z.any().openapi({ xml: { name: 'tags' } })).exactOptional(),
    TimeDelaySeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'timeDelaySeconds' },
          description:
            'Amount of delay (seconds) to enforce on the playback of live content.\nIf not specified, there will be no time delay in effect for the OriginEndpoint.\n',
        }),
    ).exactOptional(),
    Url: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'url' },
          description: 'The URL of the packaged OriginEndpoint for consumption.',
        }),
    ).exactOptional(),
    Whitelist: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'whitelist' },
          description:
            'A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeOriginEndpointResponse')

const ChannelSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description: 'The Amazon Resource Name (ARN) assigned to the Channel.',
        }),
    ).exactOptional(),
    CreatedAt: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdAt' },
          description: 'The date and time the Channel was created.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'A short text description of the Channel.',
        }),
    ).exactOptional(),
    EgressAccessLogs: EgressAccessLogsSchema.and(
      z.any().openapi({ xml: { name: 'egressAccessLogs' } }),
    ).exactOptional(),
    HlsIngest: HlsIngestSchema.and(z.any().openapi({ xml: { name: 'hlsIngest' } })).exactOptional(),
    Id: StringSchema.and(
      z.any().openapi({ xml: { name: 'id' }, description: 'The ID of the Channel.' }),
    ).exactOptional(),
    IngressAccessLogs: IngressAccessLogsSchema.and(
      z.any().openapi({ xml: { name: 'ingressAccessLogs' } }),
    ).exactOptional(),
    Tags: TagsSchema.and(z.any().openapi({ xml: { name: 'tags' } })).exactOptional(),
  })
  .openapi({ description: 'A Channel resource configuration.', required: [] })
  .openapi('Channel')

const ListOfChannelSchema = z.array(ChannelSchema).openapi('ListOfChannel')

const ListChannelsResponseSchema = z
  .object({
    Channels: ListOfChannelSchema.and(
      z.any().openapi({ xml: { name: 'channels' }, description: 'A list of Channel records.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'A token that can be used to resume pagination from the end of the collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListChannelsResponse')

const HarvestJobSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description: 'The Amazon Resource Name (ARN) assigned to the HarvestJob.\n',
        }),
    ).exactOptional(),
    ChannelId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'channelId' },
          description: 'The ID of the Channel that the HarvestJob will harvest from.\n',
        }),
    ).exactOptional(),
    CreatedAt: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdAt' },
          description: 'The date and time the HarvestJob was submitted.\n',
        }),
    ).exactOptional(),
    EndTime: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'endTime' },
          description: 'The end of the time-window which will be harvested.\n',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'id' },
          description:
            'The ID of the HarvestJob. The ID must be unique within the region\nand it cannot be changed after the HarvestJob is submitted.\n',
        }),
    ).exactOptional(),
    OriginEndpointId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'originEndpointId' },
          description:
            'The ID of the OriginEndpoint that the HarvestJob will harvest from.\nThis cannot be changed after the HarvestJob is submitted.\n',
        }),
    ).exactOptional(),
    S3Destination: S3DestinationSchema.and(
      z.any().openapi({ xml: { name: 's3Destination' } }),
    ).exactOptional(),
    StartTime: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'startTime' },
          description: 'The start of the time-window which will be harvested.\n',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'status' },
          description:
            'The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for\nHarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will\ninclude an explanation of why the HarvestJob failed.\n',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A HarvestJob resource configuration', required: [] })
  .openapi('HarvestJob')

const ListOfHarvestJobSchema = z.array(HarvestJobSchema).openapi('ListOfHarvestJob')

const ListHarvestJobsResponseSchema = z
  .object({
    HarvestJobs: ListOfHarvestJobSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'harvestJobs' }, description: 'A list of HarvestJob records.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'A token that can be used to resume pagination from the end of the collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListHarvestJobsResponse')

const OriginEndpointSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description: 'The Amazon Resource Name (ARN) assigned to the OriginEndpoint.',
        }),
    ).exactOptional(),
    Authorization: AuthorizationSchema.and(
      z.any().openapi({ xml: { name: 'authorization' } }),
    ).exactOptional(),
    ChannelId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'channelId' },
          description: 'The ID of the Channel the OriginEndpoint is associated with.',
        }),
    ).exactOptional(),
    CmafPackage: CmafPackageSchema.and(
      z.any().openapi({ xml: { name: 'cmafPackage' } }),
    ).exactOptional(),
    CreatedAt: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdAt' },
          description: 'The date and time the OriginEndpoint was created.',
        }),
    ).exactOptional(),
    DashPackage: DashPackageSchema.and(
      z.any().openapi({ xml: { name: 'dashPackage' } }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'A short text description of the OriginEndpoint.',
        }),
    ).exactOptional(),
    HlsPackage: HlsPackageSchema.and(
      z.any().openapi({ xml: { name: 'hlsPackage' } }),
    ).exactOptional(),
    Id: StringSchema.and(
      z.any().openapi({ xml: { name: 'id' }, description: 'The ID of the OriginEndpoint.' }),
    ).exactOptional(),
    ManifestName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'manifestName' },
          description: 'A short string appended to the end of the OriginEndpoint URL.',
        }),
    ).exactOptional(),
    MssPackage: MssPackageSchema.and(
      z.any().openapi({ xml: { name: 'mssPackage' } }),
    ).exactOptional(),
    Origination: OriginationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'origination' },
          description:
            'Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint\nmay by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be\nrequested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination\n',
        }),
    ).exactOptional(),
    StartoverWindowSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'startoverWindowSeconds' },
          description:
            'Maximum duration (seconds) of content to retain for startover playback.\nIf not specified, startover playback will be disabled for the OriginEndpoint.\n',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(z.any().openapi({ xml: { name: 'tags' } })).exactOptional(),
    TimeDelaySeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'timeDelaySeconds' },
          description:
            'Amount of delay (seconds) to enforce on the playback of live content.\nIf not specified, there will be no time delay in effect for the OriginEndpoint.\n',
        }),
    ).exactOptional(),
    Url: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'url' },
          description: 'The URL of the packaged OriginEndpoint for consumption.',
        }),
    ).exactOptional(),
    Whitelist: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'whitelist' },
          description:
            'A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An OriginEndpoint resource configuration.', required: [] })
  .openapi('OriginEndpoint')

const ListOfOriginEndpointSchema = z.array(OriginEndpointSchema).openapi('ListOfOriginEndpoint')

const ListOriginEndpointsResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'A token that can be used to resume pagination from the end of the collection.',
        }),
    ).exactOptional(),
    OriginEndpoints: ListOfOriginEndpointSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'originEndpoints' },
          description: 'A list of OriginEndpoint records.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListOriginEndpointsResponse')

const MapOfStringSchema = z.record(z.string(), StringSchema).openapi('MapOfString')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: MapOfStringSchema.and(z.any().openapi({ xml: { name: 'tags' } })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const RotateChannelCredentialsResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description: 'The Amazon Resource Name (ARN) assigned to the Channel.',
        }),
    ).exactOptional(),
    CreatedAt: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdAt' },
          description: 'The date and time the Channel was created.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'A short text description of the Channel.',
        }),
    ).exactOptional(),
    EgressAccessLogs: EgressAccessLogsSchema.and(
      z.any().openapi({ xml: { name: 'egressAccessLogs' } }),
    ).exactOptional(),
    HlsIngest: HlsIngestSchema.and(z.any().openapi({ xml: { name: 'hlsIngest' } })).exactOptional(),
    Id: StringSchema.and(
      z.any().openapi({ xml: { name: 'id' }, description: 'The ID of the Channel.' }),
    ).exactOptional(),
    IngressAccessLogs: IngressAccessLogsSchema.and(
      z.any().openapi({ xml: { name: 'ingressAccessLogs' } }),
    ).exactOptional(),
    Tags: TagsSchema.and(z.any().openapi({ xml: { name: 'tags' } })).exactOptional(),
  })
  .openapi({ deprecated: true, required: [] })
  .openapi('RotateChannelCredentialsResponse')

const RotateIngestEndpointCredentialsResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description: 'The Amazon Resource Name (ARN) assigned to the Channel.',
        }),
    ).exactOptional(),
    CreatedAt: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdAt' },
          description: 'The date and time the Channel was created.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'A short text description of the Channel.',
        }),
    ).exactOptional(),
    EgressAccessLogs: EgressAccessLogsSchema.and(
      z.any().openapi({ xml: { name: 'egressAccessLogs' } }),
    ).exactOptional(),
    HlsIngest: HlsIngestSchema.and(z.any().openapi({ xml: { name: 'hlsIngest' } })).exactOptional(),
    Id: StringSchema.and(
      z.any().openapi({ xml: { name: 'id' }, description: 'The ID of the Channel.' }),
    ).exactOptional(),
    IngressAccessLogs: IngressAccessLogsSchema.and(
      z.any().openapi({ xml: { name: 'ingressAccessLogs' } }),
    ).exactOptional(),
    Tags: TagsSchema.and(z.any().openapi({ xml: { name: 'tags' } })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RotateIngestEndpointCredentialsResponse')

const UpdateChannelResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description: 'The Amazon Resource Name (ARN) assigned to the Channel.',
        }),
    ).exactOptional(),
    CreatedAt: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdAt' },
          description: 'The date and time the Channel was created.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'A short text description of the Channel.',
        }),
    ).exactOptional(),
    EgressAccessLogs: EgressAccessLogsSchema.and(
      z.any().openapi({ xml: { name: 'egressAccessLogs' } }),
    ).exactOptional(),
    HlsIngest: HlsIngestSchema.and(z.any().openapi({ xml: { name: 'hlsIngest' } })).exactOptional(),
    Id: StringSchema.and(
      z.any().openapi({ xml: { name: 'id' }, description: 'The ID of the Channel.' }),
    ).exactOptional(),
    IngressAccessLogs: IngressAccessLogsSchema.and(
      z.any().openapi({ xml: { name: 'ingressAccessLogs' } }),
    ).exactOptional(),
    Tags: TagsSchema.and(z.any().openapi({ xml: { name: 'tags' } })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateChannelResponse')

const UpdateOriginEndpointResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'arn' },
          description: 'The Amazon Resource Name (ARN) assigned to the OriginEndpoint.',
        }),
    ).exactOptional(),
    Authorization: AuthorizationSchema.and(
      z.any().openapi({ xml: { name: 'authorization' } }),
    ).exactOptional(),
    ChannelId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'channelId' },
          description: 'The ID of the Channel the OriginEndpoint is associated with.',
        }),
    ).exactOptional(),
    CmafPackage: CmafPackageSchema.and(
      z.any().openapi({ xml: { name: 'cmafPackage' } }),
    ).exactOptional(),
    CreatedAt: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdAt' },
          description: 'The date and time the OriginEndpoint was created.',
        }),
    ).exactOptional(),
    DashPackage: DashPackageSchema.and(
      z.any().openapi({ xml: { name: 'dashPackage' } }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'A short text description of the OriginEndpoint.',
        }),
    ).exactOptional(),
    HlsPackage: HlsPackageSchema.and(
      z.any().openapi({ xml: { name: 'hlsPackage' } }),
    ).exactOptional(),
    Id: StringSchema.and(
      z.any().openapi({ xml: { name: 'id' }, description: 'The ID of the OriginEndpoint.' }),
    ).exactOptional(),
    ManifestName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'manifestName' },
          description: 'A short string appended to the end of the OriginEndpoint URL.',
        }),
    ).exactOptional(),
    MssPackage: MssPackageSchema.and(
      z.any().openapi({ xml: { name: 'mssPackage' } }),
    ).exactOptional(),
    Origination: OriginationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'origination' },
          description:
            'Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint\nmay by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be\nrequested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination\n',
        }),
    ).exactOptional(),
    StartoverWindowSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'startoverWindowSeconds' },
          description:
            'Maximum duration (seconds) of content to retain for startover playback.\nIf not specified, startover playback will be disabled for the OriginEndpoint.\n',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(z.any().openapi({ xml: { name: 'tags' } })).exactOptional(),
    TimeDelaySeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'timeDelaySeconds' },
          description:
            'Amount of delay (seconds) to enforce on the playback of live content.\nIf not specified, there will be no time delay in effect for the OriginEndpoint.\n',
        }),
    ).exactOptional(),
    Url: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'url' },
          description: 'The URL of the packaged OriginEndpoint for consumption.',
        }),
    ).exactOptional(),
    Whitelist: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'whitelist' },
          description:
            'A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateOriginEndpointResponse')

const CmafPackageCreateOrUpdateParametersSchema = z
  .object({
    Encryption: CmafEncryptionSchema.and(
      z.any().openapi({ xml: { name: 'encryption' } }),
    ).exactOptional(),
    HlsManifests: ListOfHlsManifestCreateOrUpdateParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'hlsManifests' },
          description: 'A list of HLS manifest configurations',
        }),
    ).exactOptional(),
    SegmentDurationSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'segmentDurationSeconds' },
          description:
            'Duration (in seconds) of each segment. Actual segments will be\nrounded to the nearest multiple of the source segment duration.\n',
        }),
    ).exactOptional(),
    SegmentPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'segmentPrefix' },
          description:
            'An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId.',
        }),
    ).exactOptional(),
    StreamSelection: StreamSelectionSchema.and(
      z.any().openapi({ xml: { name: 'streamSelection' } }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A Common Media Application Format (CMAF) packaging configuration.',
    required: [],
  })
  .openapi('CmafPackageCreateOrUpdateParameters')

const ConfigureLogsRequestSchema = z
  .object({
    EgressAccessLogs: EgressAccessLogsSchema.and(
      z.any().openapi({ xml: { name: 'egressAccessLogs' } }),
    ).exactOptional(),
    IngressAccessLogs: IngressAccessLogsSchema.and(
      z.any().openapi({ xml: { name: 'ingressAccessLogs' } }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ConfigureLogsRequest',
    description: 'the option to configure log subscription.',
    required: [],
  })
  .openapi('ConfigureLogsRequest')

const CreateChannelRequestSchema = z
  .object({
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'A short text description of the Channel.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'id' },
          description:
            'The ID of the Channel. The ID must be unique within the region and it\ncannot be changed after a Channel is created.\n',
        }),
    ),
    Tags: TagsSchema.and(z.any().openapi({ xml: { name: 'tags' } })).exactOptional(),
  })
  .openapi({
    required: ['Id'],
    title: 'CreateChannelRequest',
    description: 'A new Channel configuration.',
  })
  .openapi('CreateChannelRequest')

const CreateHarvestJobRequestSchema = z
  .object({
    EndTime: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'endTime' },
          description: 'The end of the time-window which will be harvested\n',
        }),
    ),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'id' },
          description:
            'The ID of the HarvestJob. The ID must be unique within the region\nand it cannot be changed after the HarvestJob is submitted\n',
        }),
    ),
    OriginEndpointId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'originEndpointId' },
          description:
            'The ID of the OriginEndpoint that the HarvestJob will harvest from.\nThis cannot be changed after the HarvestJob is submitted.\n',
        }),
    ),
    S3Destination: S3DestinationSchema.and(z.any().openapi({ xml: { name: 's3Destination' } })),
    StartTime: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'startTime' },
          description: 'The start of the time-window which will be harvested\n',
        }),
    ),
  })
  .openapi({
    required: ['S3Destination', 'EndTime', 'OriginEndpointId', 'StartTime', 'Id'],
    title: 'CreateHarvestJobRequest',
    description: 'Configuration parameters used to create a new HarvestJob.',
  })
  .openapi('CreateHarvestJobRequest')

const CreateOriginEndpointRequestSchema = z
  .object({
    Authorization: AuthorizationSchema.and(
      z.any().openapi({ xml: { name: 'authorization' } }),
    ).exactOptional(),
    ChannelId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'channelId' },
          description:
            'The ID of the Channel that the OriginEndpoint will be associated with.\nThis cannot be changed after the OriginEndpoint is created.\n',
        }),
    ),
    CmafPackage: CmafPackageCreateOrUpdateParametersSchema.and(
      z.any().openapi({ xml: { name: 'cmafPackage' } }),
    ).exactOptional(),
    DashPackage: DashPackageSchema.and(
      z.any().openapi({ xml: { name: 'dashPackage' } }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'A short text description of the OriginEndpoint.',
        }),
    ).exactOptional(),
    HlsPackage: HlsPackageSchema.and(
      z.any().openapi({ xml: { name: 'hlsPackage' } }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'id' },
          description:
            'The ID of the OriginEndpoint.  The ID must be unique within the region\nand it cannot be changed after the OriginEndpoint is created.\n',
        }),
    ),
    ManifestName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'manifestName' },
          description:
            'A short string that will be used as the filename of the OriginEndpoint URL (defaults to "index").',
        }),
    ).exactOptional(),
    MssPackage: MssPackageSchema.and(
      z.any().openapi({ xml: { name: 'mssPackage' } }),
    ).exactOptional(),
    Origination: OriginationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'origination' },
          description:
            'Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint\nmay by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be\nrequested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination\n',
        }),
    ).exactOptional(),
    StartoverWindowSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'startoverWindowSeconds' },
          description:
            'Maximum duration (seconds) of content to retain for startover playback.\nIf not specified, startover playback will be disabled for the OriginEndpoint.\n',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(z.any().openapi({ xml: { name: 'tags' } })).exactOptional(),
    TimeDelaySeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'timeDelaySeconds' },
          description:
            'Amount of delay (seconds) to enforce on the playback of live content.\nIf not specified, there will be no time delay in effect for the OriginEndpoint.\n',
        }),
    ).exactOptional(),
    Whitelist: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'whitelist' },
          description:
            'A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ChannelId', 'Id'],
    title: 'CreateOriginEndpointRequest',
    description: 'Configuration parameters used to create a new OriginEndpoint.',
  })
  .openapi('CreateOriginEndpointRequest')

const DeleteChannelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteChannelRequest' })
  .openapi('DeleteChannelRequest')

const DeleteOriginEndpointRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteOriginEndpointRequest' })
  .openapi('DeleteOriginEndpointRequest')

const DescribeChannelRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeChannelRequest' })
  .openapi('DescribeChannelRequest')

const DescribeHarvestJobRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeHarvestJobRequest' })
  .openapi('DescribeHarvestJobRequest')

const DescribeOriginEndpointRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeOriginEndpointRequest' })
  .openapi('DescribeOriginEndpointRequest')

const MaxResultsSchema = z.int().min(1).max(1000).openapi('MaxResults')

const ListChannelsRequestSchema = z
  .object({})
  .openapi({ title: 'ListChannelsRequest' })
  .openapi('ListChannelsRequest')

const ListHarvestJobsRequestSchema = z
  .object({})
  .openapi({ title: 'ListHarvestJobsRequest' })
  .openapi('ListHarvestJobsRequest')

const ListOriginEndpointsRequestSchema = z
  .object({})
  .openapi({ title: 'ListOriginEndpointsRequest' })
  .openapi('ListOriginEndpointsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const RotateChannelCredentialsRequestSchema = z
  .object({})
  .openapi({ deprecated: true, title: 'RotateChannelCredentialsRequest' })
  .openapi('RotateChannelCredentialsRequest')

const RotateIngestEndpointCredentialsRequestSchema = z
  .object({})
  .openapi({ title: 'RotateIngestEndpointCredentialsRequest' })
  .openapi('RotateIngestEndpointCredentialsRequest')

const TagResourceRequestSchema = z
  .object({ Tags: MapOfStringSchema.and(z.any().openapi({ xml: { name: 'tags' } })) })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateChannelRequestSchema = z
  .object({
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'A short text description of the Channel.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateChannelRequest',
    description: 'Configuration parameters used to update the Channel.',
    required: [],
  })
  .openapi('UpdateChannelRequest')

const UpdateOriginEndpointRequestSchema = z
  .object({
    Authorization: AuthorizationSchema.and(
      z.any().openapi({ xml: { name: 'authorization' } }),
    ).exactOptional(),
    CmafPackage: CmafPackageCreateOrUpdateParametersSchema.and(
      z.any().openapi({ xml: { name: 'cmafPackage' } }),
    ).exactOptional(),
    DashPackage: DashPackageSchema.and(
      z.any().openapi({ xml: { name: 'dashPackage' } }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'A short text description of the OriginEndpoint.',
        }),
    ).exactOptional(),
    HlsPackage: HlsPackageSchema.and(
      z.any().openapi({ xml: { name: 'hlsPackage' } }),
    ).exactOptional(),
    ManifestName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'manifestName' },
          description: 'A short string that will be appended to the end of the Endpoint URL.',
        }),
    ).exactOptional(),
    MssPackage: MssPackageSchema.and(
      z.any().openapi({ xml: { name: 'mssPackage' } }),
    ).exactOptional(),
    Origination: OriginationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'origination' },
          description:
            'Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint\nmay by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be\nrequested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination\n',
        }),
    ).exactOptional(),
    StartoverWindowSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'startoverWindowSeconds' },
          description:
            'Maximum duration (in seconds) of content to retain for startover playback.\nIf not specified, startover playback will be disabled for the OriginEndpoint.\n',
        }),
    ).exactOptional(),
    TimeDelaySeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'timeDelaySeconds' },
          description:
            'Amount of delay (in seconds) to enforce on the playback of live content.\nIf not specified, there will be no time delay in effect for the OriginEndpoint.\n',
        }),
    ).exactOptional(),
    Whitelist: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'whitelist' },
          description:
            'A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateOriginEndpointRequest',
    description: 'Configuration parameters used to update an existing OriginEndpoint.',
    required: [],
  })
  .openapi('UpdateOriginEndpointRequest')

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

export const putChannelsIdConfigureLogsRoute = createRoute({
  method: 'put',
  path: '/channels/{id}/configure_logs',
  description: "Changes the Channel's properities to configure log subscription",
  operationId: 'ConfigureLogs',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID of the channel to log subscription.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              egressAccessLogs: z
                .object({
                  LogGroupName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'logGroupName' },
                        description: 'Customize the log group name.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Configure egress access logging.', required: [] }),
              ingressAccessLogs: z
                .object({
                  LogGroupName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'logGroupName' },
                        description: 'Customize the log group name.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Configure ingress access logging.', required: [] }),
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
      content: { 'application/json': { schema: ConfigureLogsResponseSchema } },
    },
    480: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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

export const getChannelsRoute = createRoute({
  method: 'get',
  path: '/channels',
  description: 'Returns a collection of Channels.',
  operationId: 'ListChannels',
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
            description: 'Upper bound on number of records to return.',
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
            description: 'A token used to resume pagination from the end of a previous request.',
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
      content: { 'application/json': { schema: ListChannelsResponseSchema } },
    },
    480: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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

export const postChannelsRoute = createRoute({
  method: 'post',
  path: '/channels',
  description: 'Creates a new Channel.',
  operationId: 'CreateChannel',
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
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A short text description of the Channel.' }),
              id: z
                .string()
                .openapi({
                  description:
                    'The ID of the Channel. The ID must be unique within the region and it\ncannot be changed after a Channel is created.\n',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'A collection of tags associated with a resource' }),
            })
            .openapi({ required: ['id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateChannelResponseSchema } },
    },
    480: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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

export const getHarvestJobsRoute = createRoute({
  method: 'get',
  path: '/harvest_jobs',
  description: 'Returns a collection of HarvestJob records.',
  operationId: 'ListHarvestJobs',
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
      includeChannelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeChannelId',
            in: 'query',
            required: false,
            description:
              'When specified, the request will return only HarvestJobs associated with the given Channel ID.',
            schema: { type: 'string' },
          },
        }),
      includeStatus: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeStatus',
            in: 'query',
            required: false,
            description:
              'When specified, the request will return only HarvestJobs in the given status.',
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
            description: 'The upper bound on the number of records to return.',
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
            description: 'A token used to resume pagination from the end of a previous request.',
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
      content: { 'application/json': { schema: ListHarvestJobsResponseSchema } },
    },
    480: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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

export const postHarvestJobsRoute = createRoute({
  method: 'post',
  path: '/harvest_jobs',
  description: 'Creates a new HarvestJob record.',
  operationId: 'CreateHarvestJob',
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
              endTime: z
                .string()
                .openapi({ description: 'The end of the time-window which will be harvested\n' }),
              id: z
                .string()
                .openapi({
                  description:
                    'The ID of the HarvestJob. The ID must be unique within the region\nand it cannot be changed after the HarvestJob is submitted\n',
                }),
              originEndpointId: z
                .string()
                .openapi({
                  description:
                    'The ID of the OriginEndpoint that the HarvestJob will harvest from.\nThis cannot be changed after the HarvestJob is submitted.\n',
                }),
              s3Destination: z
                .object({
                  BucketName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'bucketName' },
                        description:
                          'The name of an S3 bucket within which harvested content will be exported\n',
                      }),
                  ).exactOptional(),
                  ManifestKey: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'manifestKey' },
                        description:
                          'The key in the specified S3 bucket where the harvested top-level manifest will be placed.\n',
                      }),
                  ).exactOptional(),
                  RoleArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'roleArn' },
                        description: 'The IAM role used to write to the specified S3 bucket\n',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Configuration parameters for where in an S3 bucket to place the harvested content\n',
                  required: [],
                }),
              startTime: z
                .string()
                .openapi({ description: 'The start of the time-window which will be harvested\n' }),
            })
            .openapi({
              required: ['endTime', 'id', 'originEndpointId', 's3Destination', 'startTime'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateHarvestJobResponseSchema } },
    },
    480: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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

export const getOriginEndpointsRoute = createRoute({
  method: 'get',
  path: '/origin_endpoints',
  description: 'Returns a collection of OriginEndpoint records.',
  operationId: 'ListOriginEndpoints',
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
      channelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'channelId',
            in: 'query',
            required: false,
            description:
              'When specified, the request will return only OriginEndpoints associated with the given Channel ID.',
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
            description: 'The upper bound on the number of records to return.',
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
            description: 'A token used to resume pagination from the end of a previous request.',
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
      content: { 'application/json': { schema: ListOriginEndpointsResponseSchema } },
    },
    480: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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

export const postOriginEndpointsRoute = createRoute({
  method: 'post',
  path: '/origin_endpoints',
  description: 'Creates a new OriginEndpoint record.',
  operationId: 'CreateOriginEndpoint',
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
              authorization: z
                .object({
                  CdnIdentifierSecret: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'cdnIdentifierSecret' },
                        description:
                          'The Amazon Resource Name (ARN) for the secret in Secrets Manager that your Content Distribution Network (CDN) uses for authorization to access your endpoint.\n',
                      }),
                  ).exactOptional(),
                  SecretsRoleArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'secretsRoleArn' },
                        description:
                          'The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.\n',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'CDN Authorization credentials', required: [] }),
              channelId: z
                .string()
                .openapi({
                  description:
                    'The ID of the Channel that the OriginEndpoint will be associated with.\nThis cannot be changed after the OriginEndpoint is created.\n',
                }),
              cmafPackage: z
                .object({
                  Encryption: CmafEncryptionSchema.and(
                    z.any().openapi({ xml: { name: 'encryption' } }),
                  ).exactOptional(),
                  HlsManifests: ListOfHlsManifestCreateOrUpdateParametersSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'hlsManifests' },
                        description: 'A list of HLS manifest configurations',
                      }),
                  ).exactOptional(),
                  SegmentDurationSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'segmentDurationSeconds' },
                        description:
                          'Duration (in seconds) of each segment. Actual segments will be\nrounded to the nearest multiple of the source segment duration.\n',
                      }),
                  ).exactOptional(),
                  SegmentPrefix: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'segmentPrefix' },
                        description:
                          'An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId.',
                      }),
                  ).exactOptional(),
                  StreamSelection: StreamSelectionSchema.and(
                    z.any().openapi({ xml: { name: 'streamSelection' } }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'A Common Media Application Format (CMAF) packaging configuration.',
                  required: [],
                }),
              dashPackage: z
                .object({
                  AdTriggers: AdTriggersSchema.and(
                    z.any().openapi({ xml: { name: 'adTriggers' } }),
                  ).exactOptional(),
                  AdsOnDeliveryRestrictions: AdsOnDeliveryRestrictionsSchema.and(
                    z.any().openapi({ xml: { name: 'adsOnDeliveryRestrictions' } }),
                  ).exactOptional(),
                  Encryption: DashEncryptionSchema.and(
                    z.any().openapi({ xml: { name: 'encryption' } }),
                  ).exactOptional(),
                  IncludeIframeOnlyStream: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'includeIframeOnlyStream' },
                        description:
                          'When enabled, an I-Frame only stream will be included in the output.',
                      }),
                  ).exactOptional(),
                  ManifestLayout: ManifestLayoutSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'manifestLayout' },
                        description:
                          'Determines the position of some tags in the Media Presentation Description (MPD).  When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation.  When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.',
                      }),
                  ).exactOptional(),
                  ManifestWindowSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'manifestWindowSeconds' },
                        description: 'Time window (in seconds) contained in each manifest.',
                      }),
                  ).exactOptional(),
                  MinBufferTimeSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'minBufferTimeSeconds' },
                        description:
                          'Minimum duration (in seconds) that a player will buffer media before starting the presentation.',
                      }),
                  ).exactOptional(),
                  MinUpdatePeriodSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'minUpdatePeriodSeconds' },
                        description:
                          'Minimum duration (in seconds) between potential changes to the Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD).',
                      }),
                  ).exactOptional(),
                  PeriodTriggers: ListOfPeriodTriggersElementSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'periodTriggers' },
                        description:
                          'A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH)\nMedia Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not\nbe partitioned into more than one period. If the list contains "ADS", new periods will be created where\nthe Channel source contains SCTE-35 ad markers.\n',
                      }),
                  ).exactOptional(),
                  Profile: ProfileSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'profile' },
                        description:
                          'The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled. When set to "DVB-DASH_2014", DVB-DASH 2014 compliant output is enabled.',
                      }),
                  ).exactOptional(),
                  SegmentDurationSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'segmentDurationSeconds' },
                        description:
                          'Duration (in seconds) of each segment. Actual segments will be\nrounded to the nearest multiple of the source segment duration.\n',
                      }),
                  ).exactOptional(),
                  SegmentTemplateFormat: SegmentTemplateFormatSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'segmentTemplateFormat' },
                        description:
                          'Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).  When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs.  When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.',
                      }),
                  ).exactOptional(),
                  StreamSelection: StreamSelectionSchema.and(
                    z.any().openapi({ xml: { name: 'streamSelection' } }),
                  ).exactOptional(),
                  SuggestedPresentationDelaySeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'suggestedPresentationDelaySeconds' },
                        description:
                          'Duration (in seconds) to delay live content before presentation.',
                      }),
                  ).exactOptional(),
                  UtcTiming: UtcTimingSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'utcTiming' },
                        description:
                          'Determines the type of UTCTiming included in the Media Presentation Description (MPD)',
                      }),
                  ).exactOptional(),
                  UtcTimingUri: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'utcTimingUri' },
                        description:
                          'Specifies the value attribute of the UTCTiming field when utcTiming is set to HTTP-ISO, HTTP-HEAD or HTTP-XSDATE',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.',
                  required: [],
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A short text description of the OriginEndpoint.' }),
              hlsPackage: z
                .object({
                  AdMarkers: AdMarkersSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'adMarkers' },
                        description:
                          'This setting controls how ad markers are included in the packaged OriginEndpoint.\n"NONE" will omit all SCTE-35 ad markers from the output.\n"PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad\nmarkers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.\n"SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35\nmessages in the input source.\n"DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events \nin HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value \nthat is greater than 0.\n',
                      }),
                  ).exactOptional(),
                  AdTriggers: AdTriggersSchema.and(
                    z.any().openapi({ xml: { name: 'adTriggers' } }),
                  ).exactOptional(),
                  AdsOnDeliveryRestrictions: AdsOnDeliveryRestrictionsSchema.and(
                    z.any().openapi({ xml: { name: 'adsOnDeliveryRestrictions' } }),
                  ).exactOptional(),
                  Encryption: HlsEncryptionSchema.and(
                    z.any().openapi({ xml: { name: 'encryption' } }),
                  ).exactOptional(),
                  IncludeDvbSubtitles: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'includeDvbSubtitles' },
                        description:
                          'When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.',
                      }),
                  ).exactOptional(),
                  IncludeIframeOnlyStream: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'includeIframeOnlyStream' },
                        description:
                          'When enabled, an I-Frame only stream will be included in the output.',
                      }),
                  ).exactOptional(),
                  PlaylistType: PlaylistTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'playlistType' },
                        description:
                          'The HTTP Live Streaming (HLS) playlist type.\nWhen either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE\nentry will be included in the media playlist.\n',
                      }),
                  ).exactOptional(),
                  PlaylistWindowSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'playlistWindowSeconds' },
                        description: 'Time window (in seconds) contained in each parent manifest.',
                      }),
                  ).exactOptional(),
                  ProgramDateTimeIntervalSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'programDateTimeIntervalSeconds' },
                        description:
                          'The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag\ninserted into manifests. Additionally, when an interval is specified\nID3Timed Metadata messages will be generated every 5 seconds using the\ningest time of the content.\nIf the interval is not specified, or set to 0, then\nno EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no\nID3Timed Metadata messages will be generated. Note that irrespective\nof this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input,\nit will be passed through to HLS output.\n',
                      }),
                  ).exactOptional(),
                  SegmentDurationSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'segmentDurationSeconds' },
                        description:
                          'Duration (in seconds) of each fragment. Actual fragments will be\nrounded to the nearest multiple of the source fragment duration.\n',
                      }),
                  ).exactOptional(),
                  StreamSelection: StreamSelectionSchema.and(
                    z.any().openapi({ xml: { name: 'streamSelection' } }),
                  ).exactOptional(),
                  UseAudioRenditionGroup: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'useAudioRenditionGroup' },
                        description:
                          'When enabled, audio streams will be placed in rendition groups in the output.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'An HTTP Live Streaming (HLS) packaging configuration.',
                  required: [],
                }),
              id: z
                .string()
                .openapi({
                  description:
                    'The ID of the OriginEndpoint.  The ID must be unique within the region\nand it cannot be changed after the OriginEndpoint is created.\n',
                }),
              manifestName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A short string that will be used as the filename of the OriginEndpoint URL (defaults to "index").',
                }),
              mssPackage: z
                .object({
                  Encryption: MssEncryptionSchema.and(
                    z.any().openapi({ xml: { name: 'encryption' } }),
                  ).exactOptional(),
                  ManifestWindowSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'manifestWindowSeconds' },
                        description: 'The time window (in seconds) contained in each manifest.',
                      }),
                  ).exactOptional(),
                  SegmentDurationSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'segmentDurationSeconds' },
                        description: 'The duration (in seconds) of each segment.',
                      }),
                  ).exactOptional(),
                  StreamSelection: StreamSelectionSchema.and(
                    z.any().openapi({ xml: { name: 'streamSelection' } }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'A Microsoft Smooth Streaming (MSS) packaging configuration.',
                  required: [],
                }),
              origination: z
                .enum(['ALLOW', 'DENY'])
                .exactOptional()
                .openapi({
                  description:
                    'Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint\nmay by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be\nrequested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination\n',
                }),
              startoverWindowSeconds: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Maximum duration (seconds) of content to retain for startover playback.\nIf not specified, startover playback will be disabled for the OriginEndpoint.\n',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'A collection of tags associated with a resource' }),
              timeDelaySeconds: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Amount of delay (seconds) to enforce on the playback of live content.\nIf not specified, there will be no time delay in effect for the OriginEndpoint.\n',
                }),
              whitelist: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.',
                }),
            })
            .openapi({ required: ['channelId', 'id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateOriginEndpointResponseSchema } },
    },
    480: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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

export const getChannelsIdRoute = createRoute({
  method: 'get',
  path: '/channels/{id}',
  description: 'Gets details about a Channel.',
  operationId: 'DescribeChannel',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID of a Channel.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeChannelResponseSchema } },
    },
    480: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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

export const putChannelsIdRoute = createRoute({
  method: 'put',
  path: '/channels/{id}',
  description: 'Updates an existing Channel.',
  operationId: 'UpdateChannel',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID of the Channel to update.',
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
                .openapi({ description: 'A short text description of the Channel.' }),
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
      content: { 'application/json': { schema: UpdateChannelResponseSchema } },
    },
    480: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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

export const deleteChannelsIdRoute = createRoute({
  method: 'delete',
  path: '/channels/{id}',
  description: 'Deletes an existing Channel.',
  operationId: 'DeleteChannel',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID of the Channel to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteChannelResponseSchema } },
    },
    480: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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

export const getOriginEndpointsIdRoute = createRoute({
  method: 'get',
  path: '/origin_endpoints/{id}',
  description: 'Gets details about an existing OriginEndpoint.',
  operationId: 'DescribeOriginEndpoint',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID of the OriginEndpoint.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeOriginEndpointResponseSchema } },
    },
    480: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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

export const putOriginEndpointsIdRoute = createRoute({
  method: 'put',
  path: '/origin_endpoints/{id}',
  description: 'Updates an existing OriginEndpoint.',
  operationId: 'UpdateOriginEndpoint',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID of the OriginEndpoint to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              authorization: z
                .object({
                  CdnIdentifierSecret: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'cdnIdentifierSecret' },
                        description:
                          'The Amazon Resource Name (ARN) for the secret in Secrets Manager that your Content Distribution Network (CDN) uses for authorization to access your endpoint.\n',
                      }),
                  ).exactOptional(),
                  SecretsRoleArn: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'secretsRoleArn' },
                        description:
                          'The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.\n',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'CDN Authorization credentials', required: [] }),
              cmafPackage: z
                .object({
                  Encryption: CmafEncryptionSchema.and(
                    z.any().openapi({ xml: { name: 'encryption' } }),
                  ).exactOptional(),
                  HlsManifests: ListOfHlsManifestCreateOrUpdateParametersSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'hlsManifests' },
                        description: 'A list of HLS manifest configurations',
                      }),
                  ).exactOptional(),
                  SegmentDurationSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'segmentDurationSeconds' },
                        description:
                          'Duration (in seconds) of each segment. Actual segments will be\nrounded to the nearest multiple of the source segment duration.\n',
                      }),
                  ).exactOptional(),
                  SegmentPrefix: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'segmentPrefix' },
                        description:
                          'An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId.',
                      }),
                  ).exactOptional(),
                  StreamSelection: StreamSelectionSchema.and(
                    z.any().openapi({ xml: { name: 'streamSelection' } }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'A Common Media Application Format (CMAF) packaging configuration.',
                  required: [],
                }),
              dashPackage: z
                .object({
                  AdTriggers: AdTriggersSchema.and(
                    z.any().openapi({ xml: { name: 'adTriggers' } }),
                  ).exactOptional(),
                  AdsOnDeliveryRestrictions: AdsOnDeliveryRestrictionsSchema.and(
                    z.any().openapi({ xml: { name: 'adsOnDeliveryRestrictions' } }),
                  ).exactOptional(),
                  Encryption: DashEncryptionSchema.and(
                    z.any().openapi({ xml: { name: 'encryption' } }),
                  ).exactOptional(),
                  IncludeIframeOnlyStream: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'includeIframeOnlyStream' },
                        description:
                          'When enabled, an I-Frame only stream will be included in the output.',
                      }),
                  ).exactOptional(),
                  ManifestLayout: ManifestLayoutSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'manifestLayout' },
                        description:
                          'Determines the position of some tags in the Media Presentation Description (MPD).  When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation.  When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.',
                      }),
                  ).exactOptional(),
                  ManifestWindowSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'manifestWindowSeconds' },
                        description: 'Time window (in seconds) contained in each manifest.',
                      }),
                  ).exactOptional(),
                  MinBufferTimeSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'minBufferTimeSeconds' },
                        description:
                          'Minimum duration (in seconds) that a player will buffer media before starting the presentation.',
                      }),
                  ).exactOptional(),
                  MinUpdatePeriodSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'minUpdatePeriodSeconds' },
                        description:
                          'Minimum duration (in seconds) between potential changes to the Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD).',
                      }),
                  ).exactOptional(),
                  PeriodTriggers: ListOfPeriodTriggersElementSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'periodTriggers' },
                        description:
                          'A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH)\nMedia Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not\nbe partitioned into more than one period. If the list contains "ADS", new periods will be created where\nthe Channel source contains SCTE-35 ad markers.\n',
                      }),
                  ).exactOptional(),
                  Profile: ProfileSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'profile' },
                        description:
                          'The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled. When set to "DVB-DASH_2014", DVB-DASH 2014 compliant output is enabled.',
                      }),
                  ).exactOptional(),
                  SegmentDurationSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'segmentDurationSeconds' },
                        description:
                          'Duration (in seconds) of each segment. Actual segments will be\nrounded to the nearest multiple of the source segment duration.\n',
                      }),
                  ).exactOptional(),
                  SegmentTemplateFormat: SegmentTemplateFormatSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'segmentTemplateFormat' },
                        description:
                          'Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).  When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs.  When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.',
                      }),
                  ).exactOptional(),
                  StreamSelection: StreamSelectionSchema.and(
                    z.any().openapi({ xml: { name: 'streamSelection' } }),
                  ).exactOptional(),
                  SuggestedPresentationDelaySeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'suggestedPresentationDelaySeconds' },
                        description:
                          'Duration (in seconds) to delay live content before presentation.',
                      }),
                  ).exactOptional(),
                  UtcTiming: UtcTimingSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'utcTiming' },
                        description:
                          'Determines the type of UTCTiming included in the Media Presentation Description (MPD)',
                      }),
                  ).exactOptional(),
                  UtcTimingUri: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'utcTimingUri' },
                        description:
                          'Specifies the value attribute of the UTCTiming field when utcTiming is set to HTTP-ISO, HTTP-HEAD or HTTP-XSDATE',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.',
                  required: [],
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A short text description of the OriginEndpoint.' }),
              hlsPackage: z
                .object({
                  AdMarkers: AdMarkersSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'adMarkers' },
                        description:
                          'This setting controls how ad markers are included in the packaged OriginEndpoint.\n"NONE" will omit all SCTE-35 ad markers from the output.\n"PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad\nmarkers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.\n"SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35\nmessages in the input source.\n"DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events \nin HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value \nthat is greater than 0.\n',
                      }),
                  ).exactOptional(),
                  AdTriggers: AdTriggersSchema.and(
                    z.any().openapi({ xml: { name: 'adTriggers' } }),
                  ).exactOptional(),
                  AdsOnDeliveryRestrictions: AdsOnDeliveryRestrictionsSchema.and(
                    z.any().openapi({ xml: { name: 'adsOnDeliveryRestrictions' } }),
                  ).exactOptional(),
                  Encryption: HlsEncryptionSchema.and(
                    z.any().openapi({ xml: { name: 'encryption' } }),
                  ).exactOptional(),
                  IncludeDvbSubtitles: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'includeDvbSubtitles' },
                        description:
                          'When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.',
                      }),
                  ).exactOptional(),
                  IncludeIframeOnlyStream: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'includeIframeOnlyStream' },
                        description:
                          'When enabled, an I-Frame only stream will be included in the output.',
                      }),
                  ).exactOptional(),
                  PlaylistType: PlaylistTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'playlistType' },
                        description:
                          'The HTTP Live Streaming (HLS) playlist type.\nWhen either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE\nentry will be included in the media playlist.\n',
                      }),
                  ).exactOptional(),
                  PlaylistWindowSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'playlistWindowSeconds' },
                        description: 'Time window (in seconds) contained in each parent manifest.',
                      }),
                  ).exactOptional(),
                  ProgramDateTimeIntervalSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'programDateTimeIntervalSeconds' },
                        description:
                          'The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag\ninserted into manifests. Additionally, when an interval is specified\nID3Timed Metadata messages will be generated every 5 seconds using the\ningest time of the content.\nIf the interval is not specified, or set to 0, then\nno EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no\nID3Timed Metadata messages will be generated. Note that irrespective\nof this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input,\nit will be passed through to HLS output.\n',
                      }),
                  ).exactOptional(),
                  SegmentDurationSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'segmentDurationSeconds' },
                        description:
                          'Duration (in seconds) of each fragment. Actual fragments will be\nrounded to the nearest multiple of the source fragment duration.\n',
                      }),
                  ).exactOptional(),
                  StreamSelection: StreamSelectionSchema.and(
                    z.any().openapi({ xml: { name: 'streamSelection' } }),
                  ).exactOptional(),
                  UseAudioRenditionGroup: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'useAudioRenditionGroup' },
                        description:
                          'When enabled, audio streams will be placed in rendition groups in the output.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'An HTTP Live Streaming (HLS) packaging configuration.',
                  required: [],
                }),
              manifestName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A short string that will be appended to the end of the Endpoint URL.',
                }),
              mssPackage: z
                .object({
                  Encryption: MssEncryptionSchema.and(
                    z.any().openapi({ xml: { name: 'encryption' } }),
                  ).exactOptional(),
                  ManifestWindowSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'manifestWindowSeconds' },
                        description: 'The time window (in seconds) contained in each manifest.',
                      }),
                  ).exactOptional(),
                  SegmentDurationSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'segmentDurationSeconds' },
                        description: 'The duration (in seconds) of each segment.',
                      }),
                  ).exactOptional(),
                  StreamSelection: StreamSelectionSchema.and(
                    z.any().openapi({ xml: { name: 'streamSelection' } }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'A Microsoft Smooth Streaming (MSS) packaging configuration.',
                  required: [],
                }),
              origination: z
                .enum(['ALLOW', 'DENY'])
                .exactOptional()
                .openapi({
                  description:
                    'Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint\nmay by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be\nrequested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination\n',
                }),
              startoverWindowSeconds: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Maximum duration (in seconds) of content to retain for startover playback.\nIf not specified, startover playback will be disabled for the OriginEndpoint.\n',
                }),
              timeDelaySeconds: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Amount of delay (in seconds) to enforce on the playback of live content.\nIf not specified, there will be no time delay in effect for the OriginEndpoint.\n',
                }),
              whitelist: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.',
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
      content: { 'application/json': { schema: UpdateOriginEndpointResponseSchema } },
    },
    480: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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

export const deleteOriginEndpointsIdRoute = createRoute({
  method: 'delete',
  path: '/origin_endpoints/{id}',
  description: 'Deletes an existing OriginEndpoint.',
  operationId: 'DeleteOriginEndpoint',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID of the OriginEndpoint to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteOriginEndpointResponseSchema } },
    },
    480: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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

export const getHarvestJobsIdRoute = createRoute({
  method: 'get',
  path: '/harvest_jobs/{id}',
  description: 'Gets details about an existing HarvestJob.',
  operationId: 'DescribeHarvestJob',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID of the HarvestJob.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeHarvestJobResponseSchema } },
    },
    480: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resource-arn}',
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
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: '',
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
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resource-arn}',
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
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: '',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ tags: z.record(z.string(), StringSchema).openapi({ description: '' }) })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putChannelsIdCredentialsRoute = createRoute({
  method: 'put',
  path: '/channels/{id}/credentials',
  description:
    "Changes the Channel's first IngestEndpoint's username and password. WARNING - This API is deprecated. Please use RotateIngestEndpointCredentials instead",
  operationId: 'RotateChannelCredentials',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID of the channel to update.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RotateChannelCredentialsResponseSchema } },
    },
    480: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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
  deprecated: true,
})

export const putChannelsIdIngestEndpointsIngestEndpointIdCredentialsRoute = createRoute({
  method: 'put',
  path: '/channels/{id}/ingest_endpoints/{ingest_endpoint_id}/credentials',
  description:
    "Rotate the IngestEndpoint's username and password, as specified by the IngestEndpoint's id.",
  operationId: 'RotateIngestEndpointCredentials',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The ID of the channel the IngestEndpoint is on.',
            schema: { type: 'string' },
          },
        }),
      ingest_endpoint_id: z
        .string()
        .openapi({
          param: {
            name: 'ingest_endpoint_id',
            in: 'path',
            required: true,
            description: 'The id of the IngestEndpoint whose credentials should be rotated',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RotateIngestEndpointCredentialsResponseSchema } },
    },
    480: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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
  path: '/tags/{resource-arn}#tagKeys',
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
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: '',
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
            description: 'The key(s) of tag to be deleted',
            schema: { type: 'array', items: { $ref: '#/components/schemas/__string' } },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})
