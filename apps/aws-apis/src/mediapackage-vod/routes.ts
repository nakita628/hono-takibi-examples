import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const AuthorizationSchema = z
  .object({
    CdnIdentifierSecret: StringSchema.openapi({
      xml: { name: 'cdnIdentifierSecret' },
      description:
        'The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.',
    }),
    SecretsRoleArn: StringSchema.openapi({
      xml: { name: 'secretsRoleArn' },
      description:
        'The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.',
    }),
  })
  .openapi({
    required: ['SecretsRoleArn', 'CdnIdentifierSecret'],
    description: 'CDN Authorization credentials',
  })
  .openapi('Authorization')

const EgressAccessLogsSchema = z
  .object({
    LogGroupName: StringSchema.exactOptional().openapi({
      xml: { name: 'logGroupName' },
      description: 'Customize the log group name.',
    }),
  })
  .openapi({ description: 'Configure egress access logging.', required: [] })
  .openapi('EgressAccessLogs')

const TagsSchema = z
  .record(z.string(), StringSchema)
  .openapi({ description: 'A collection of tags associated with a resource' })
  .openapi('Tags')

const ConfigureLogsResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The ARN of the PackagingGroup.',
    }),
    Authorization: AuthorizationSchema.exactOptional().openapi({ xml: { name: 'authorization' } }),
    CreatedAt: StringSchema.exactOptional().openapi({
      xml: { name: 'createdAt' },
      description: 'The time the PackagingGroup was created.',
    }),
    DomainName: StringSchema.exactOptional().openapi({
      xml: { name: 'domainName' },
      description: 'The fully qualified domain name for Assets in the PackagingGroup.',
    }),
    EgressAccessLogs: EgressAccessLogsSchema.exactOptional().openapi({
      xml: { name: 'egressAccessLogs' },
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The ID of the PackagingGroup.',
    }),
    Tags: TagsSchema.exactOptional().openapi({ xml: { name: 'tags' } }),
  })
  .openapi({ required: [] })
  .openapi('ConfigureLogsResponse')

const UnprocessableEntityExceptionSchema = z.any().openapi('UnprocessableEntityException')

const InternalServerErrorExceptionSchema = z.any().openapi('InternalServerErrorException')

const ForbiddenExceptionSchema = z.any().openapi('ForbiddenException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const EgressEndpointSchema = z
  .object({
    PackagingConfigurationId: StringSchema.exactOptional().openapi({
      xml: { name: 'packagingConfigurationId' },
      description: 'The ID of the PackagingConfiguration being applied to the Asset.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description:
        "The current processing status of the asset used for the packaging configuration. The status can be either QUEUED, PROCESSING, PLAYABLE, or FAILED. Status information won't be available for most assets ingested before 2021-09-30.",
    }),
    Url: StringSchema.exactOptional().openapi({
      xml: { name: 'url' },
      description: 'The URL of the parent manifest for the repackaged Asset.',
    }),
  })
  .openapi({
    description: 'The endpoint URL used to access an Asset using one PackagingConfiguration.',
    required: [],
  })
  .openapi('EgressEndpoint')

const ListOfEgressEndpointSchema = z.array(EgressEndpointSchema).openapi('ListOfEgressEndpoint')

const CreateAssetResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The ARN of the Asset.',
    }),
    CreatedAt: StringSchema.exactOptional().openapi({
      xml: { name: 'createdAt' },
      description: 'The time the Asset was initially submitted for Ingest.',
    }),
    EgressEndpoints: ListOfEgressEndpointSchema.exactOptional().openapi({
      xml: { name: 'egressEndpoints' },
      description: 'The list of egress endpoints available for the Asset.',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique identifier for the Asset.',
    }),
    PackagingGroupId: StringSchema.exactOptional().openapi({
      xml: { name: 'packagingGroupId' },
      description: 'The ID of the PackagingGroup for the Asset.',
    }),
    ResourceId: StringSchema.exactOptional().openapi({
      xml: { name: 'resourceId' },
      description: 'The resource ID to include in SPEKE key requests.',
    }),
    SourceArn: StringSchema.exactOptional().openapi({
      xml: { name: 'sourceArn' },
      description: 'ARN of the source object in S3.',
    }),
    SourceRoleArn: StringSchema.exactOptional().openapi({
      xml: { name: 'sourceRoleArn' },
      description: 'The IAM role_arn used to access the source S3 bucket.',
    }),
    Tags: TagsSchema.exactOptional().openapi({ xml: { name: 'tags' } }),
  })
  .openapi({ required: [] })
  .openapi('CreateAssetResponse')

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
    PresetSpeke20Audio: PresetSpeke20AudioSchema.openapi({
      xml: { name: 'presetSpeke20Audio' },
      description: 'A collection of audio encryption presets.',
    }),
    PresetSpeke20Video: PresetSpeke20VideoSchema.openapi({
      xml: { name: 'presetSpeke20Video' },
      description: 'A collection of video encryption presets.',
    }),
  })
  .openapi({
    required: ['PresetSpeke20Audio', 'PresetSpeke20Video'],
    description:
      'Use encryptionContractConfiguration to configure one or more content encryption keys for your endpoints that use SPEKE 2.0. \nThe encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. \nTo configure the encryption contract, specify which audio and video encryption presets to use.\nNote the following considerations when using encryptionContractConfiguration:\nencryptionContractConfiguration can be used for DASH endpoints that use SPEKE 2.0. SPEKE 2.0 relies on the CPIX 2.3 specification.\nYou must disable key rotation for this endpoint by setting keyRotationIntervalSeconds to 0.\n',
  })
  .openapi('EncryptionContractConfiguration')

const ListOfStringSchema = z.array(StringSchema).openapi('ListOfString')

const SpekeKeyProviderSchema = z
  .object({
    EncryptionContractConfiguration: EncryptionContractConfigurationSchema.exactOptional().openapi({
      xml: { name: 'encryptionContractConfiguration' },
    }),
    RoleArn: StringSchema.openapi({
      xml: { name: 'roleArn' },
      description:
        'An Amazon Resource Name (ARN) of an IAM role that AWS Elemental\nMediaPackage will assume when accessing the key provider service.\n',
    }),
    SystemIds: ListOfStringSchema.openapi({
      xml: { name: 'systemIds' },
      description: 'The system IDs to include in key requests.',
    }),
    Url: StringSchema.openapi({
      xml: { name: 'url' },
      description: 'The URL of the external key provider service.',
    }),
  })
  .openapi({
    required: ['SystemIds', 'Url', 'RoleArn'],
    description:
      'A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.',
  })
  .openapi('SpekeKeyProvider')

const CmafEncryptionSchema = z
  .object({
    ConstantInitializationVector: StringSchema.exactOptional().openapi({
      xml: { name: 'constantInitializationVector' },
      description:
        "An optional 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting blocks. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).",
    }),
    SpekeKeyProvider: SpekeKeyProviderSchema.openapi({ xml: { name: 'spekeKeyProvider' } }),
  })
  .openapi({ required: ['SpekeKeyProvider'], description: 'A CMAF encryption configuration.' })
  .openapi('CmafEncryption')

const AdMarkersSchema = z.enum(['NONE', 'SCTE35_ENHANCED', 'PASSTHROUGH']).openapi('AdMarkers')

const BooleanSchema = z.boolean().openapi('Boolean')

const IntegerSchema = z.int().openapi('Integer')

const StreamOrderSchema = z
  .enum(['ORIGINAL', 'VIDEO_BITRATE_ASCENDING', 'VIDEO_BITRATE_DESCENDING'])
  .openapi('StreamOrder')

const StreamSelectionSchema = z
  .object({
    MaxVideoBitsPerSecond: IntegerSchema.exactOptional().openapi({
      xml: { name: 'maxVideoBitsPerSecond' },
      description: 'The maximum video bitrate (bps) to include in output.',
    }),
    MinVideoBitsPerSecond: IntegerSchema.exactOptional().openapi({
      xml: { name: 'minVideoBitsPerSecond' },
      description: 'The minimum video bitrate (bps) to include in output.',
    }),
    StreamOrder: StreamOrderSchema.exactOptional().openapi({
      xml: { name: 'streamOrder' },
      description: 'A directive that determines the order of streams in the output.',
    }),
  })
  .openapi({ description: 'A StreamSelection configuration.', required: [] })
  .openapi('StreamSelection')

const HlsManifestSchema = z
  .object({
    AdMarkers: AdMarkersSchema.exactOptional().openapi({
      xml: { name: 'adMarkers' },
      description:
        'This setting controls how ad markers are included in the packaged OriginEndpoint.\n"NONE" will omit all SCTE-35 ad markers from the output.\n"PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad\nmarkers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.\n"SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35\nmessages in the input source.\n',
    }),
    IncludeIframeOnlyStream: BooleanSchema.exactOptional().openapi({
      xml: { name: 'includeIframeOnlyStream' },
      description: 'When enabled, an I-Frame only stream will be included in the output.',
    }),
    ManifestName: StringSchema.exactOptional().openapi({
      xml: { name: 'manifestName' },
      description: 'An optional string to include in the name of the manifest.',
    }),
    ProgramDateTimeIntervalSeconds: IntegerSchema.exactOptional().openapi({
      xml: { name: 'programDateTimeIntervalSeconds' },
      description:
        'The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag\ninserted into manifests. Additionally, when an interval is specified\nID3Timed Metadata messages will be generated every 5 seconds using the\ningest time of the content.\nIf the interval is not specified, or set to 0, then\nno EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no\nID3Timed Metadata messages will be generated. Note that irrespective\nof this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input,\nit will be passed through to HLS output.\n',
    }),
    RepeatExtXKey: BooleanSchema.exactOptional().openapi({
      xml: { name: 'repeatExtXKey' },
      description: 'When enabled, the EXT-X-KEY tag will be repeated in output manifests.',
    }),
    StreamSelection: StreamSelectionSchema.exactOptional().openapi({
      xml: { name: 'streamSelection' },
    }),
  })
  .openapi({ description: 'An HTTP Live Streaming (HLS) manifest configuration.', required: [] })
  .openapi('HlsManifest')

const ListOfHlsManifestSchema = z.array(HlsManifestSchema).openapi('ListOfHlsManifest')

const CmafPackageSchema = z
  .object({
    Encryption: CmafEncryptionSchema.exactOptional().openapi({ xml: { name: 'encryption' } }),
    HlsManifests: ListOfHlsManifestSchema.openapi({
      xml: { name: 'hlsManifests' },
      description: 'A list of HLS manifest configurations.',
    }),
    IncludeEncoderConfigurationInSegments: BooleanSchema.exactOptional().openapi({
      xml: { name: 'includeEncoderConfigurationInSegments' },
      description:
        "When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.\n",
    }),
    SegmentDurationSeconds: IntegerSchema.exactOptional().openapi({
      xml: { name: 'segmentDurationSeconds' },
      description:
        'Duration (in seconds) of each fragment. Actual fragments will be\nrounded to the nearest multiple of the source fragment duration.\n',
    }),
  })
  .openapi({ required: ['HlsManifests'], description: 'A CMAF packaging configuration.' })
  .openapi('CmafPackage')

const ManifestLayoutSchema = z.enum(['FULL', 'COMPACT']).openapi('ManifestLayout')

const ProfileSchema = z.enum(['NONE', 'HBBTV_1_5']).openapi('Profile')

const ScteMarkersSourceSchema = z.enum(['SEGMENTS', 'MANIFEST']).openapi('ScteMarkersSource')

const DashManifestSchema = z
  .object({
    ManifestLayout: ManifestLayoutSchema.exactOptional().openapi({
      xml: { name: 'manifestLayout' },
      description:
        'Determines the position of some tags in the Media Presentation Description (MPD).  When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation.  When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.',
    }),
    ManifestName: StringSchema.exactOptional().openapi({
      xml: { name: 'manifestName' },
      description: 'An optional string to include in the name of the manifest.',
    }),
    MinBufferTimeSeconds: IntegerSchema.exactOptional().openapi({
      xml: { name: 'minBufferTimeSeconds' },
      description:
        'Minimum duration (in seconds) that a player will buffer media before starting the presentation.',
    }),
    Profile: ProfileSchema.exactOptional().openapi({
      xml: { name: 'profile' },
      description:
        'The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.',
    }),
    ScteMarkersSource: ScteMarkersSourceSchema.exactOptional().openapi({
      xml: { name: 'scteMarkersSource' },
      description:
        'The source of scte markers used. When set to SEGMENTS, the scte markers are sourced from the segments of the ingested content. When set to MANIFEST, the scte markers are sourced from the manifest of the ingested content.',
    }),
    StreamSelection: StreamSelectionSchema.exactOptional().openapi({
      xml: { name: 'streamSelection' },
    }),
  })
  .openapi({ description: 'A DASH manifest configuration.', required: [] })
  .openapi('DashManifest')

const ListOfDashManifestSchema = z.array(DashManifestSchema).openapi('ListOfDashManifest')

const DashEncryptionSchema = z
  .object({
    SpekeKeyProvider: SpekeKeyProviderSchema.openapi({ xml: { name: 'spekeKeyProvider' } }),
  })
  .openapi({
    required: ['SpekeKeyProvider'],
    description: 'A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.',
  })
  .openapi('DashEncryption')

const PeriodTriggersElementSchema = z.literal('ADS').openapi('PeriodTriggersElement')

const ListOfPeriodTriggersElementSchema = z
  .array(PeriodTriggersElementSchema)
  .openapi('ListOfPeriodTriggersElement')

const SegmentTemplateFormatSchema = z
  .enum(['NUMBER_WITH_TIMELINE', 'TIME_WITH_TIMELINE', 'NUMBER_WITH_DURATION'])
  .openapi('SegmentTemplateFormat')

const DashPackageSchema = z
  .object({
    DashManifests: ListOfDashManifestSchema.openapi({
      xml: { name: 'dashManifests' },
      description: 'A list of DASH manifest configurations.',
    }),
    Encryption: DashEncryptionSchema.exactOptional().openapi({ xml: { name: 'encryption' } }),
    IncludeEncoderConfigurationInSegments: BooleanSchema.exactOptional().openapi({
      xml: { name: 'includeEncoderConfigurationInSegments' },
      description:
        "When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.\n",
    }),
    IncludeIframeOnlyStream: BooleanSchema.exactOptional().openapi({
      xml: { name: 'includeIframeOnlyStream' },
      description: 'When enabled, an I-Frame only stream will be included in the output.',
    }),
    PeriodTriggers: ListOfPeriodTriggersElementSchema.exactOptional().openapi({
      xml: { name: 'periodTriggers' },
      description:
        'A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH)\nMedia Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not\nbe partitioned into more than one period. If the list contains "ADS", new periods will be created where\nthe Asset contains SCTE-35 ad markers.\n',
    }),
    SegmentDurationSeconds: IntegerSchema.exactOptional().openapi({
      xml: { name: 'segmentDurationSeconds' },
      description:
        'Duration (in seconds) of each segment. Actual segments will be\nrounded to the nearest multiple of the source segment duration.\n',
    }),
    SegmentTemplateFormat: SegmentTemplateFormatSchema.exactOptional().openapi({
      xml: { name: 'segmentTemplateFormat' },
      description:
        'Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).  When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs.  When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.',
    }),
  })
  .openapi({
    required: ['DashManifests'],
    description: 'A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.',
  })
  .openapi('DashPackage')

const EncryptionMethodSchema = z.enum(['AES_128', 'SAMPLE_AES']).openapi('EncryptionMethod')

const HlsEncryptionSchema = z
  .object({
    ConstantInitializationVector: StringSchema.exactOptional().openapi({
      xml: { name: 'constantInitializationVector' },
      description:
        'A constant initialization vector for encryption (optional).\nWhen not specified the initialization vector will be periodically rotated.\n',
    }),
    EncryptionMethod: EncryptionMethodSchema.exactOptional().openapi({
      xml: { name: 'encryptionMethod' },
      description: 'The encryption method to use.',
    }),
    SpekeKeyProvider: SpekeKeyProviderSchema.openapi({ xml: { name: 'spekeKeyProvider' } }),
  })
  .openapi({
    required: ['SpekeKeyProvider'],
    description: 'An HTTP Live Streaming (HLS) encryption configuration.',
  })
  .openapi('HlsEncryption')

const HlsPackageSchema = z
  .object({
    Encryption: HlsEncryptionSchema.exactOptional().openapi({ xml: { name: 'encryption' } }),
    HlsManifests: ListOfHlsManifestSchema.openapi({
      xml: { name: 'hlsManifests' },
      description: 'A list of HLS manifest configurations.',
    }),
    IncludeDvbSubtitles: BooleanSchema.exactOptional().openapi({
      xml: { name: 'includeDvbSubtitles' },
      description:
        'When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.',
    }),
    SegmentDurationSeconds: IntegerSchema.exactOptional().openapi({
      xml: { name: 'segmentDurationSeconds' },
      description:
        'Duration (in seconds) of each fragment. Actual fragments will be\nrounded to the nearest multiple of the source fragment duration.\n',
    }),
    UseAudioRenditionGroup: BooleanSchema.exactOptional().openapi({
      xml: { name: 'useAudioRenditionGroup' },
      description: 'When enabled, audio streams will be placed in rendition groups in the output.',
    }),
  })
  .openapi({
    required: ['HlsManifests'],
    description: 'An HTTP Live Streaming (HLS) packaging configuration.',
  })
  .openapi('HlsPackage')

const MssEncryptionSchema = z
  .object({
    SpekeKeyProvider: SpekeKeyProviderSchema.openapi({ xml: { name: 'spekeKeyProvider' } }),
  })
  .openapi({
    required: ['SpekeKeyProvider'],
    description: 'A Microsoft Smooth Streaming (MSS) encryption configuration.',
  })
  .openapi('MssEncryption')

const MssManifestSchema = z
  .object({
    ManifestName: StringSchema.exactOptional().openapi({
      xml: { name: 'manifestName' },
      description: 'An optional string to include in the name of the manifest.',
    }),
    StreamSelection: StreamSelectionSchema.exactOptional().openapi({
      xml: { name: 'streamSelection' },
    }),
  })
  .openapi({
    description: 'A Microsoft Smooth Streaming (MSS) manifest configuration.',
    required: [],
  })
  .openapi('MssManifest')

const ListOfMssManifestSchema = z.array(MssManifestSchema).openapi('ListOfMssManifest')

const MssPackageSchema = z
  .object({
    Encryption: MssEncryptionSchema.exactOptional().openapi({ xml: { name: 'encryption' } }),
    MssManifests: ListOfMssManifestSchema.openapi({
      xml: { name: 'mssManifests' },
      description: 'A list of MSS manifest configurations.',
    }),
    SegmentDurationSeconds: IntegerSchema.exactOptional().openapi({
      xml: { name: 'segmentDurationSeconds' },
      description: 'The duration (in seconds) of each segment.',
    }),
  })
  .openapi({
    required: ['MssManifests'],
    description: 'A Microsoft Smooth Streaming (MSS) PackagingConfiguration.',
  })
  .openapi('MssPackage')

const CreatePackagingConfigurationResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The ARN of the PackagingConfiguration.',
    }),
    CmafPackage: CmafPackageSchema.exactOptional().openapi({ xml: { name: 'cmafPackage' } }),
    CreatedAt: StringSchema.exactOptional().openapi({
      xml: { name: 'createdAt' },
      description: 'The time the PackagingConfiguration was created.',
    }),
    DashPackage: DashPackageSchema.exactOptional().openapi({ xml: { name: 'dashPackage' } }),
    HlsPackage: HlsPackageSchema.exactOptional().openapi({ xml: { name: 'hlsPackage' } }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The ID of the PackagingConfiguration.',
    }),
    MssPackage: MssPackageSchema.exactOptional().openapi({ xml: { name: 'mssPackage' } }),
    PackagingGroupId: StringSchema.exactOptional().openapi({
      xml: { name: 'packagingGroupId' },
      description: 'The ID of a PackagingGroup.',
    }),
    Tags: TagsSchema.exactOptional().openapi({ xml: { name: 'tags' } }),
  })
  .openapi({ required: [] })
  .openapi('CreatePackagingConfigurationResponse')

const CreatePackagingGroupResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The ARN of the PackagingGroup.',
    }),
    Authorization: AuthorizationSchema.exactOptional().openapi({ xml: { name: 'authorization' } }),
    CreatedAt: StringSchema.exactOptional().openapi({
      xml: { name: 'createdAt' },
      description: 'The time the PackagingGroup was created.',
    }),
    DomainName: StringSchema.exactOptional().openapi({
      xml: { name: 'domainName' },
      description: 'The fully qualified domain name for Assets in the PackagingGroup.',
    }),
    EgressAccessLogs: EgressAccessLogsSchema.exactOptional().openapi({
      xml: { name: 'egressAccessLogs' },
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The ID of the PackagingGroup.',
    }),
    Tags: TagsSchema.exactOptional().openapi({ xml: { name: 'tags' } }),
  })
  .openapi({ required: [] })
  .openapi('CreatePackagingGroupResponse')

const DeleteAssetResponseSchema = z.looseObject({}).openapi('DeleteAssetResponse')

const DeletePackagingConfigurationResponseSchema = z
  .looseObject({})
  .openapi('DeletePackagingConfigurationResponse')

const DeletePackagingGroupResponseSchema = z.looseObject({}).openapi('DeletePackagingGroupResponse')

const DescribeAssetResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The ARN of the Asset.',
    }),
    CreatedAt: StringSchema.exactOptional().openapi({
      xml: { name: 'createdAt' },
      description: 'The time the Asset was initially submitted for Ingest.',
    }),
    EgressEndpoints: ListOfEgressEndpointSchema.exactOptional().openapi({
      xml: { name: 'egressEndpoints' },
      description: 'The list of egress endpoints available for the Asset.',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique identifier for the Asset.',
    }),
    PackagingGroupId: StringSchema.exactOptional().openapi({
      xml: { name: 'packagingGroupId' },
      description: 'The ID of the PackagingGroup for the Asset.',
    }),
    ResourceId: StringSchema.exactOptional().openapi({
      xml: { name: 'resourceId' },
      description: 'The resource ID to include in SPEKE key requests.',
    }),
    SourceArn: StringSchema.exactOptional().openapi({
      xml: { name: 'sourceArn' },
      description: 'ARN of the source object in S3.',
    }),
    SourceRoleArn: StringSchema.exactOptional().openapi({
      xml: { name: 'sourceRoleArn' },
      description: 'The IAM role_arn used to access the source S3 bucket.',
    }),
    Tags: TagsSchema.exactOptional().openapi({ xml: { name: 'tags' } }),
  })
  .openapi({ required: [] })
  .openapi('DescribeAssetResponse')

const DescribePackagingConfigurationResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The ARN of the PackagingConfiguration.',
    }),
    CmafPackage: CmafPackageSchema.exactOptional().openapi({ xml: { name: 'cmafPackage' } }),
    CreatedAt: StringSchema.exactOptional().openapi({
      xml: { name: 'createdAt' },
      description: 'The time the PackagingConfiguration was created.',
    }),
    DashPackage: DashPackageSchema.exactOptional().openapi({ xml: { name: 'dashPackage' } }),
    HlsPackage: HlsPackageSchema.exactOptional().openapi({ xml: { name: 'hlsPackage' } }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The ID of the PackagingConfiguration.',
    }),
    MssPackage: MssPackageSchema.exactOptional().openapi({ xml: { name: 'mssPackage' } }),
    PackagingGroupId: StringSchema.exactOptional().openapi({
      xml: { name: 'packagingGroupId' },
      description: 'The ID of a PackagingGroup.',
    }),
    Tags: TagsSchema.exactOptional().openapi({ xml: { name: 'tags' } }),
  })
  .openapi({ required: [] })
  .openapi('DescribePackagingConfigurationResponse')

const DescribePackagingGroupResponseSchema = z
  .object({
    ApproximateAssetCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'approximateAssetCount' },
      description: 'The approximate asset count of the PackagingGroup.',
    }),
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The ARN of the PackagingGroup.',
    }),
    Authorization: AuthorizationSchema.exactOptional().openapi({ xml: { name: 'authorization' } }),
    CreatedAt: StringSchema.exactOptional().openapi({
      xml: { name: 'createdAt' },
      description: 'The time the PackagingGroup was created.',
    }),
    DomainName: StringSchema.exactOptional().openapi({
      xml: { name: 'domainName' },
      description: 'The fully qualified domain name for Assets in the PackagingGroup.',
    }),
    EgressAccessLogs: EgressAccessLogsSchema.exactOptional().openapi({
      xml: { name: 'egressAccessLogs' },
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The ID of the PackagingGroup.',
    }),
    Tags: TagsSchema.exactOptional().openapi({ xml: { name: 'tags' } }),
  })
  .openapi({ required: [] })
  .openapi('DescribePackagingGroupResponse')

const AssetShallowSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The ARN of the Asset.',
    }),
    CreatedAt: StringSchema.exactOptional().openapi({
      xml: { name: 'createdAt' },
      description: 'The time the Asset was initially submitted for Ingest.',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique identifier for the Asset.',
    }),
    PackagingGroupId: StringSchema.exactOptional().openapi({
      xml: { name: 'packagingGroupId' },
      description: 'The ID of the PackagingGroup for the Asset.',
    }),
    ResourceId: StringSchema.exactOptional().openapi({
      xml: { name: 'resourceId' },
      description: 'The resource ID to include in SPEKE key requests.',
    }),
    SourceArn: StringSchema.exactOptional().openapi({
      xml: { name: 'sourceArn' },
      description: 'ARN of the source object in S3.',
    }),
    SourceRoleArn: StringSchema.exactOptional().openapi({
      xml: { name: 'sourceRoleArn' },
      description: 'The IAM role ARN used to access the source S3 bucket.',
    }),
    Tags: TagsSchema.exactOptional().openapi({ xml: { name: 'tags' } }),
  })
  .openapi({ description: 'A MediaPackage VOD Asset resource.', required: [] })
  .openapi('AssetShallow')

const ListOfAssetShallowSchema = z.array(AssetShallowSchema).openapi('ListOfAssetShallow')

const ListAssetsResponseSchema = z
  .object({
    Assets: ListOfAssetShallowSchema.exactOptional().openapi({
      xml: { name: 'assets' },
      description: 'A list of MediaPackage VOD Asset resources.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'A token that can be used to resume pagination from the end of the collection.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListAssetsResponse')

const PackagingConfigurationSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The ARN of the PackagingConfiguration.',
    }),
    CmafPackage: CmafPackageSchema.exactOptional().openapi({ xml: { name: 'cmafPackage' } }),
    CreatedAt: StringSchema.exactOptional().openapi({
      xml: { name: 'createdAt' },
      description: 'The time the PackagingConfiguration was created.',
    }),
    DashPackage: DashPackageSchema.exactOptional().openapi({ xml: { name: 'dashPackage' } }),
    HlsPackage: HlsPackageSchema.exactOptional().openapi({ xml: { name: 'hlsPackage' } }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The ID of the PackagingConfiguration.',
    }),
    MssPackage: MssPackageSchema.exactOptional().openapi({ xml: { name: 'mssPackage' } }),
    PackagingGroupId: StringSchema.exactOptional().openapi({
      xml: { name: 'packagingGroupId' },
      description: 'The ID of a PackagingGroup.',
    }),
    Tags: TagsSchema.exactOptional().openapi({ xml: { name: 'tags' } }),
  })
  .openapi({ description: 'A MediaPackage VOD PackagingConfiguration resource.', required: [] })
  .openapi('PackagingConfiguration')

const ListOfPackagingConfigurationSchema = z
  .array(PackagingConfigurationSchema)
  .openapi('ListOfPackagingConfiguration')

const ListPackagingConfigurationsResponseSchema = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'A token that can be used to resume pagination from the end of the collection.',
    }),
    PackagingConfigurations: ListOfPackagingConfigurationSchema.exactOptional().openapi({
      xml: { name: 'packagingConfigurations' },
      description: 'A list of MediaPackage VOD PackagingConfiguration resources.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListPackagingConfigurationsResponse')

const PackagingGroupSchema = z
  .object({
    ApproximateAssetCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'approximateAssetCount' },
      description: 'The approximate asset count of the PackagingGroup.',
    }),
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The ARN of the PackagingGroup.',
    }),
    Authorization: AuthorizationSchema.exactOptional().openapi({ xml: { name: 'authorization' } }),
    CreatedAt: StringSchema.exactOptional().openapi({
      xml: { name: 'createdAt' },
      description: 'The time the PackagingGroup was created.',
    }),
    DomainName: StringSchema.exactOptional().openapi({
      xml: { name: 'domainName' },
      description: 'The fully qualified domain name for Assets in the PackagingGroup.',
    }),
    EgressAccessLogs: EgressAccessLogsSchema.exactOptional().openapi({
      xml: { name: 'egressAccessLogs' },
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The ID of the PackagingGroup.',
    }),
    Tags: TagsSchema.exactOptional().openapi({ xml: { name: 'tags' } }),
  })
  .openapi({ description: 'A MediaPackage VOD PackagingGroup resource.', required: [] })
  .openapi('PackagingGroup')

const ListOfPackagingGroupSchema = z.array(PackagingGroupSchema).openapi('ListOfPackagingGroup')

const ListPackagingGroupsResponseSchema = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'A token that can be used to resume pagination from the end of the collection.',
    }),
    PackagingGroups: ListOfPackagingGroupSchema.exactOptional().openapi({
      xml: { name: 'packagingGroups' },
      description: 'A list of MediaPackage VOD PackagingGroup resources.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListPackagingGroupsResponse')

const MapOfStringSchema = z.record(z.string(), StringSchema).openapi('MapOfString')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: MapOfStringSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of tags associated with a resource',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const UpdatePackagingGroupResponseSchema = z
  .object({
    ApproximateAssetCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'approximateAssetCount' },
      description: 'The approximate asset count of the PackagingGroup.',
    }),
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The ARN of the PackagingGroup.',
    }),
    Authorization: AuthorizationSchema.exactOptional().openapi({ xml: { name: 'authorization' } }),
    CreatedAt: StringSchema.exactOptional().openapi({
      xml: { name: 'createdAt' },
      description: 'The time the PackagingGroup was created.',
    }),
    DomainName: StringSchema.exactOptional().openapi({
      xml: { name: 'domainName' },
      description: 'The fully qualified domain name for Assets in the PackagingGroup.',
    }),
    EgressAccessLogs: EgressAccessLogsSchema.exactOptional().openapi({
      xml: { name: 'egressAccessLogs' },
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The ID of the PackagingGroup.',
    }),
    Tags: TagsSchema.exactOptional().openapi({ xml: { name: 'tags' } }),
  })
  .openapi({ required: [] })
  .openapi('UpdatePackagingGroupResponse')

const ConfigureLogsRequestSchema = z
  .object({
    EgressAccessLogs: EgressAccessLogsSchema.exactOptional().openapi({
      xml: { name: 'egressAccessLogs' },
    }),
  })
  .openapi({
    title: 'ConfigureLogsRequest',
    description: 'The option to configure log subscription.',
    required: [],
  })
  .openapi('ConfigureLogsRequest')

const CreateAssetRequestSchema = z
  .object({
    Id: StringSchema.openapi({
      xml: { name: 'id' },
      description: 'The unique identifier for the Asset.',
    }),
    PackagingGroupId: StringSchema.openapi({
      xml: { name: 'packagingGroupId' },
      description: 'The ID of the PackagingGroup for the Asset.',
    }),
    ResourceId: StringSchema.exactOptional().openapi({
      xml: { name: 'resourceId' },
      description: 'The resource ID to include in SPEKE key requests.',
    }),
    SourceArn: StringSchema.openapi({
      xml: { name: 'sourceArn' },
      description: 'ARN of the source object in S3.',
    }),
    SourceRoleArn: StringSchema.openapi({
      xml: { name: 'sourceRoleArn' },
      description: 'The IAM role ARN used to access the source S3 bucket.',
    }),
    Tags: TagsSchema.exactOptional().openapi({ xml: { name: 'tags' } }),
  })
  .openapi({
    required: ['SourceArn', 'Id', 'PackagingGroupId', 'SourceRoleArn'],
    title: 'CreateAssetRequest',
    description: 'A new MediaPackage VOD Asset configuration.',
  })
  .openapi('CreateAssetRequest')

const CreatePackagingConfigurationRequestSchema = z
  .object({
    CmafPackage: CmafPackageSchema.exactOptional().openapi({ xml: { name: 'cmafPackage' } }),
    DashPackage: DashPackageSchema.exactOptional().openapi({ xml: { name: 'dashPackage' } }),
    HlsPackage: HlsPackageSchema.exactOptional().openapi({ xml: { name: 'hlsPackage' } }),
    Id: StringSchema.openapi({
      xml: { name: 'id' },
      description: 'The ID of the PackagingConfiguration.',
    }),
    MssPackage: MssPackageSchema.exactOptional().openapi({ xml: { name: 'mssPackage' } }),
    PackagingGroupId: StringSchema.openapi({
      xml: { name: 'packagingGroupId' },
      description: 'The ID of a PackagingGroup.',
    }),
    Tags: TagsSchema.exactOptional().openapi({ xml: { name: 'tags' } }),
  })
  .openapi({
    required: ['Id', 'PackagingGroupId'],
    title: 'CreatePackagingConfigurationRequest',
    description: 'A new MediaPackage VOD PackagingConfiguration resource configuration.',
  })
  .openapi('CreatePackagingConfigurationRequest')

const CreatePackagingGroupRequestSchema = z
  .object({
    Authorization: AuthorizationSchema.exactOptional().openapi({ xml: { name: 'authorization' } }),
    EgressAccessLogs: EgressAccessLogsSchema.exactOptional().openapi({
      xml: { name: 'egressAccessLogs' },
    }),
    Id: StringSchema.openapi({ xml: { name: 'id' }, description: 'The ID of the PackagingGroup.' }),
    Tags: TagsSchema.exactOptional().openapi({ xml: { name: 'tags' } }),
  })
  .openapi({
    required: ['Id'],
    title: 'CreatePackagingGroupRequest',
    description: 'A new MediaPackage VOD PackagingGroup resource configuration.',
  })
  .openapi('CreatePackagingGroupRequest')

const DeleteAssetRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteAssetRequest' })
  .openapi('DeleteAssetRequest')

const DeletePackagingConfigurationRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeletePackagingConfigurationRequest' })
  .openapi('DeletePackagingConfigurationRequest')

const DeletePackagingGroupRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeletePackagingGroupRequest' })
  .openapi('DeletePackagingGroupRequest')

const DescribeAssetRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DescribeAssetRequest' })
  .openapi('DescribeAssetRequest')

const DescribePackagingConfigurationRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DescribePackagingConfigurationRequest' })
  .openapi('DescribePackagingConfigurationRequest')

const DescribePackagingGroupRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DescribePackagingGroupRequest' })
  .openapi('DescribePackagingGroupRequest')

const MaxResultsSchema = z.int().min(1).max(1000).openapi('MaxResults')

const ListAssetsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListAssetsRequest' })
  .openapi('ListAssetsRequest')

const ListPackagingConfigurationsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListPackagingConfigurationsRequest' })
  .openapi('ListPackagingConfigurationsRequest')

const ListPackagingGroupsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListPackagingGroupsRequest' })
  .openapi('ListPackagingGroupsRequest')

const ListTagsForResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TagResourceRequestSchema = z
  .object({
    Tags: MapOfStringSchema.openapi({
      xml: { name: 'tags' },
      description: 'A collection of tags associated with a resource',
    }),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdatePackagingGroupRequestSchema = z
  .object({
    Authorization: AuthorizationSchema.exactOptional().openapi({ xml: { name: 'authorization' } }),
  })
  .openapi({
    title: 'UpdatePackagingGroupRequest',
    description: 'A MediaPackage VOD PackagingGroup resource configuration.',
    required: [],
  })
  .openapi('UpdatePackagingGroupRequest')

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

export const putPackagingGroupsIdConfigureLogsRoute = createRoute({
  method: 'put',
  path: '/packaging_groups/{id}/configure_logs',
  description: "Changes the packaging group's properities to configure log subscription",
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
            description: 'The ID of a MediaPackage VOD PackagingGroup resource.',
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
                  LogGroupName: StringSchema.exactOptional().openapi({
                    xml: { name: 'logGroupName' },
                    description: 'Customize the log group name.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Configure egress access logging.', required: [] }),
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

export const getAssetsRoute = createRoute({
  method: 'get',
  path: '/assets',
  description: 'Returns a collection of MediaPackage VOD Asset resources.',
  operationId: 'ListAssets',
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
      packagingGroupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'packagingGroupId',
            in: 'query',
            required: false,
            description: 'Returns Assets associated with the specified PackagingGroup.',
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
      content: { 'application/json': { schema: ListAssetsResponseSchema } },
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

export const postAssetsRoute = createRoute({
  method: 'post',
  path: '/assets',
  description: 'Creates a new MediaPackage VOD Asset resource.',
  operationId: 'CreateAsset',
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
              id: z.string().openapi({ description: 'The unique identifier for the Asset.' }),
              packagingGroupId: z
                .string()
                .openapi({ description: 'The ID of the PackagingGroup for the Asset.' }),
              resourceId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The resource ID to include in SPEKE key requests.' }),
              sourceArn: z.string().openapi({ description: 'ARN of the source object in S3.' }),
              sourceRoleArn: z
                .string()
                .openapi({ description: 'The IAM role ARN used to access the source S3 bucket.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'A collection of tags associated with a resource' }),
            })
            .openapi({ required: ['id', 'packagingGroupId', 'sourceArn', 'sourceRoleArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAssetResponseSchema } },
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

export const getPackagingConfigurationsRoute = createRoute({
  method: 'get',
  path: '/packaging_configurations',
  description: 'Returns a collection of MediaPackage VOD PackagingConfiguration resources.',
  operationId: 'ListPackagingConfigurations',
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
      packagingGroupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'packagingGroupId',
            in: 'query',
            required: false,
            description:
              'Returns MediaPackage VOD PackagingConfigurations associated with the specified PackagingGroup.',
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
      content: { 'application/json': { schema: ListPackagingConfigurationsResponseSchema } },
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

export const postPackagingConfigurationsRoute = createRoute({
  method: 'post',
  path: '/packaging_configurations',
  description: 'Creates a new MediaPackage VOD PackagingConfiguration resource.',
  operationId: 'CreatePackagingConfiguration',
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
              cmafPackage: z
                .object({
                  Encryption: CmafEncryptionSchema.exactOptional().openapi({
                    xml: { name: 'encryption' },
                  }),
                  HlsManifests: ListOfHlsManifestSchema.exactOptional().openapi({
                    xml: { name: 'hlsManifests' },
                    description: 'A list of HLS manifest configurations.',
                  }),
                  IncludeEncoderConfigurationInSegments: BooleanSchema.exactOptional().openapi({
                    xml: { name: 'includeEncoderConfigurationInSegments' },
                    description:
                      "When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.\n",
                  }),
                  SegmentDurationSeconds: IntegerSchema.exactOptional().openapi({
                    xml: { name: 'segmentDurationSeconds' },
                    description:
                      'Duration (in seconds) of each fragment. Actual fragments will be\nrounded to the nearest multiple of the source fragment duration.\n',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'A CMAF packaging configuration.', required: [] }),
              dashPackage: z
                .object({
                  DashManifests: ListOfDashManifestSchema.exactOptional().openapi({
                    xml: { name: 'dashManifests' },
                    description: 'A list of DASH manifest configurations.',
                  }),
                  Encryption: DashEncryptionSchema.exactOptional().openapi({
                    xml: { name: 'encryption' },
                  }),
                  IncludeEncoderConfigurationInSegments: BooleanSchema.exactOptional().openapi({
                    xml: { name: 'includeEncoderConfigurationInSegments' },
                    description:
                      "When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.\n",
                  }),
                  IncludeIframeOnlyStream: BooleanSchema.exactOptional().openapi({
                    xml: { name: 'includeIframeOnlyStream' },
                    description:
                      'When enabled, an I-Frame only stream will be included in the output.',
                  }),
                  PeriodTriggers: ListOfPeriodTriggersElementSchema.exactOptional().openapi({
                    xml: { name: 'periodTriggers' },
                    description:
                      'A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH)\nMedia Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not\nbe partitioned into more than one period. If the list contains "ADS", new periods will be created where\nthe Asset contains SCTE-35 ad markers.\n',
                  }),
                  SegmentDurationSeconds: IntegerSchema.exactOptional().openapi({
                    xml: { name: 'segmentDurationSeconds' },
                    description:
                      'Duration (in seconds) of each segment. Actual segments will be\nrounded to the nearest multiple of the source segment duration.\n',
                  }),
                  SegmentTemplateFormat: SegmentTemplateFormatSchema.exactOptional().openapi({
                    xml: { name: 'segmentTemplateFormat' },
                    description:
                      'Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).  When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs.  When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.',
                  required: [],
                }),
              hlsPackage: z
                .object({
                  Encryption: HlsEncryptionSchema.exactOptional().openapi({
                    xml: { name: 'encryption' },
                  }),
                  HlsManifests: ListOfHlsManifestSchema.exactOptional().openapi({
                    xml: { name: 'hlsManifests' },
                    description: 'A list of HLS manifest configurations.',
                  }),
                  IncludeDvbSubtitles: BooleanSchema.exactOptional().openapi({
                    xml: { name: 'includeDvbSubtitles' },
                    description:
                      'When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.',
                  }),
                  SegmentDurationSeconds: IntegerSchema.exactOptional().openapi({
                    xml: { name: 'segmentDurationSeconds' },
                    description:
                      'Duration (in seconds) of each fragment. Actual fragments will be\nrounded to the nearest multiple of the source fragment duration.\n',
                  }),
                  UseAudioRenditionGroup: BooleanSchema.exactOptional().openapi({
                    xml: { name: 'useAudioRenditionGroup' },
                    description:
                      'When enabled, audio streams will be placed in rendition groups in the output.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'An HTTP Live Streaming (HLS) packaging configuration.',
                  required: [],
                }),
              id: z.string().openapi({ description: 'The ID of the PackagingConfiguration.' }),
              mssPackage: z
                .object({
                  Encryption: MssEncryptionSchema.exactOptional().openapi({
                    xml: { name: 'encryption' },
                  }),
                  MssManifests: ListOfMssManifestSchema.exactOptional().openapi({
                    xml: { name: 'mssManifests' },
                    description: 'A list of MSS manifest configurations.',
                  }),
                  SegmentDurationSeconds: IntegerSchema.exactOptional().openapi({
                    xml: { name: 'segmentDurationSeconds' },
                    description: 'The duration (in seconds) of each segment.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'A Microsoft Smooth Streaming (MSS) PackagingConfiguration.',
                  required: [],
                }),
              packagingGroupId: z.string().openapi({ description: 'The ID of a PackagingGroup.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'A collection of tags associated with a resource' }),
            })
            .openapi({ required: ['id', 'packagingGroupId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePackagingConfigurationResponseSchema } },
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

export const getPackagingGroupsRoute = createRoute({
  method: 'get',
  path: '/packaging_groups',
  description: 'Returns a collection of MediaPackage VOD PackagingGroup resources.',
  operationId: 'ListPackagingGroups',
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
      content: { 'application/json': { schema: ListPackagingGroupsResponseSchema } },
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

export const postPackagingGroupsRoute = createRoute({
  method: 'post',
  path: '/packaging_groups',
  description: 'Creates a new MediaPackage VOD PackagingGroup resource.',
  operationId: 'CreatePackagingGroup',
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
                  CdnIdentifierSecret: StringSchema.exactOptional().openapi({
                    xml: { name: 'cdnIdentifierSecret' },
                    description:
                      'The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.',
                  }),
                  SecretsRoleArn: StringSchema.exactOptional().openapi({
                    xml: { name: 'secretsRoleArn' },
                    description:
                      'The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'CDN Authorization credentials', required: [] }),
              egressAccessLogs: z
                .object({
                  LogGroupName: StringSchema.exactOptional().openapi({
                    xml: { name: 'logGroupName' },
                    description: 'Customize the log group name.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Configure egress access logging.', required: [] }),
              id: z.string().openapi({ description: 'The ID of the PackagingGroup.' }),
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
      content: { 'application/json': { schema: CreatePackagingGroupResponseSchema } },
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

export const getAssetsIdRoute = createRoute({
  method: 'get',
  path: '/assets/{id}',
  description: 'Returns a description of a MediaPackage VOD Asset resource.',
  operationId: 'DescribeAsset',
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
            description: 'The ID of an MediaPackage VOD Asset resource.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAssetResponseSchema } },
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

export const deleteAssetsIdRoute = createRoute({
  method: 'delete',
  path: '/assets/{id}',
  description: 'Deletes an existing MediaPackage VOD Asset resource.',
  operationId: 'DeleteAsset',
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
            description: 'The ID of the MediaPackage VOD Asset resource to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAssetResponseSchema } },
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

export const getPackagingConfigurationsIdRoute = createRoute({
  method: 'get',
  path: '/packaging_configurations/{id}',
  description: 'Returns a description of a MediaPackage VOD PackagingConfiguration resource.',
  operationId: 'DescribePackagingConfiguration',
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
            description: 'The ID of a MediaPackage VOD PackagingConfiguration resource.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePackagingConfigurationResponseSchema } },
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

export const deletePackagingConfigurationsIdRoute = createRoute({
  method: 'delete',
  path: '/packaging_configurations/{id}',
  description: 'Deletes a MediaPackage VOD PackagingConfiguration resource.',
  operationId: 'DeletePackagingConfiguration',
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
            description:
              'The ID of the MediaPackage VOD PackagingConfiguration resource to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePackagingConfigurationResponseSchema } },
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

export const getPackagingGroupsIdRoute = createRoute({
  method: 'get',
  path: '/packaging_groups/{id}',
  description: 'Returns a description of a MediaPackage VOD PackagingGroup resource.',
  operationId: 'DescribePackagingGroup',
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
            description: 'The ID of a MediaPackage VOD PackagingGroup resource.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePackagingGroupResponseSchema } },
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

export const putPackagingGroupsIdRoute = createRoute({
  method: 'put',
  path: '/packaging_groups/{id}',
  description:
    "Updates a specific packaging group. You can't change the id attribute or any other system-generated attributes.",
  operationId: 'UpdatePackagingGroup',
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
            description: 'The ID of a MediaPackage VOD PackagingGroup resource.',
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
                  CdnIdentifierSecret: StringSchema.exactOptional().openapi({
                    xml: { name: 'cdnIdentifierSecret' },
                    description:
                      'The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.',
                  }),
                  SecretsRoleArn: StringSchema.exactOptional().openapi({
                    xml: { name: 'secretsRoleArn' },
                    description:
                      'The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'CDN Authorization credentials', required: [] }),
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
      content: { 'application/json': { schema: UpdatePackagingGroupResponseSchema } },
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

export const deletePackagingGroupsIdRoute = createRoute({
  method: 'delete',
  path: '/packaging_groups/{id}',
  description: 'Deletes a MediaPackage VOD PackagingGroup resource.',
  operationId: 'DeletePackagingGroup',
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
            description: 'The ID of the MediaPackage VOD PackagingGroup resource to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePackagingGroupResponseSchema } },
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
  description: 'Returns a list of the tags assigned to the specified resource.',
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
            description:
              'The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.',
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
  description: 'Adds tags to the specified resource. You can specify one or more tags to add.',
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
            description:
              'The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.',
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
                .openapi({ description: 'A collection of tags associated with a resource' }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resource-arn}#tagKeys',
  description:
    'Removes tags from the specified resource. You can specify one or more tags to remove.',
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
            description:
              'The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.',
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
            description: 'A comma-separated list of the tag keys to remove from the resource.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/__string' } },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})
