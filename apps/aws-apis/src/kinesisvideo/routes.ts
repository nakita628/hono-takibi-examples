import { createRoute, z } from '@hono/zod-openapi'

const ResourceARNSchema = z
  .string()
  .regex(/arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/)
  .min(1)
  .max(1024)
  .openapi('ResourceARN')

const CreateSignalingChannelOutputSchema = z
  .object({
    ChannelARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the created channel.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateSignalingChannelOutput')

const MessageTtlSecondsSchema = z.int().min(5).max(120).openapi('MessageTtlSeconds')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/[\p{L}\p{Z}\p{N}_.:\/=+\-@]*/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The key of the tag that is associated with the specified signaling channel.',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the tag that is associated with the specified signaling channel.',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description: 'A key and value pair that is associated with the specified signaling channel.',
  })
  .openapi('Tag')

const InvalidArgumentExceptionSchema = z.any().openapi('InvalidArgumentException')

const ClientLimitExceededExceptionSchema = z.any().openapi('ClientLimitExceededException')

const AccountChannelLimitExceededExceptionSchema = z
  .any()
  .openapi('AccountChannelLimitExceededException')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const TagsPerResourceExceededLimitExceptionSchema = z
  .any()
  .openapi('TagsPerResourceExceededLimitException')

const CreateStreamOutputSchema = z
  .object({
    StreamARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the stream.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateStreamOutput')

const AccountStreamLimitExceededExceptionSchema = z
  .any()
  .openapi('AccountStreamLimitExceededException')

const DeviceStreamLimitExceededExceptionSchema = z
  .any()
  .openapi('DeviceStreamLimitExceededException')

const InvalidDeviceExceptionSchema = z.any().openapi('InvalidDeviceException')

const DeleteSignalingChannelOutputSchema = z.object({}).openapi('DeleteSignalingChannelOutput')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const VersionMismatchExceptionSchema = z.any().openapi('VersionMismatchException')

const DeleteStreamOutputSchema = z.object({}).openapi('DeleteStreamOutput')

const NotAuthorizedExceptionSchema = z.any().openapi('NotAuthorizedException')

const StreamNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(256)
  .openapi('StreamName')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const SyncStatusSchema = z
  .enum(['SYNCING', 'ACKNOWLEDGED', 'IN_SYNC', 'SYNC_FAILED', 'DELETING', 'DELETE_FAILED'])
  .openapi('SyncStatus')

const FailedStatusDetailsSchema = z.string().openapi('FailedStatusDetails')

const HubDeviceArnSchema = z
  .string()
  .regex(/arn:[a-z\d-]+:iot:[a-z0-9-]+:[0-9]+:thing\/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(1024)
  .openapi('HubDeviceArn')

const MediaUriSecretArnSchema = z
  .string()
  .regex(/arn:[a-z\d-]+:secretsmanager:[a-z0-9-]+:[0-9]+:secret:[a-zA-Z0-9_.-]+/)
  .min(20)
  .max(2048)
  .openapi('MediaUriSecretArn')

const MediaUriTypeSchema = z.enum(['RTSP_URI', 'FILE_URI']).openapi('MediaUriType')

const MediaSourceConfigSchema = z
  .object({
    MediaUriSecretArn: MediaUriSecretArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS Secrets Manager ARN for the username and password of the camera, or a local media file location.',
        }),
    ),
    MediaUriType: MediaUriTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Uniform Resource Identifier (URI) type. The <code>FILE_URI</code> value can be used to stream local media files.</p> <note> <p>Preview only supports the <code>RTSP_URI</code> media source URI format .</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['MediaUriSecretArn', 'MediaUriType'],
    description:
      'The configuration details that consist of the credentials required (<code>MediaUriSecretArn</code> and <code>MediaUriType</code>) to access the media files that are streamed to the camera.',
  })
  .openapi('MediaSourceConfig')

const ScheduleExpressionSchema = z
  .string()
  .regex(/[^\n]{11,100}/)
  .min(11)
  .max(100)
  .openapi('ScheduleExpression')

const DurationInSecondsSchema = z.int().min(60).max(3600).openapi('DurationInSeconds')

const ScheduleConfigSchema = z
  .object({
    ScheduleExpression: ScheduleExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Quartz cron expression that takes care of scheduling jobs to record from the camera, or local media file, onto the Edge Agent. If the <code>ScheduleExpression</code> is not provided for the <code>RecorderConfig</code>, then the Edge Agent will always be set to recording mode.</p> <p>For more information about Quartz, refer to the <a href="http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html"> <i>Cron Trigger Tutorial</i> </a> page to understand the valid expressions and its use.</p>',
        }),
    ),
    DurationInSeconds: DurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total duration to record the media. If the <code>ScheduleExpression</code> attribute is provided, then the <code>DurationInSeconds</code> attribute should also be specified.',
        }),
    ),
  })
  .openapi({
    required: ['ScheduleExpression', 'DurationInSeconds'],
    description:
      '<p>This API enables you to specify the duration that the camera, or local media file, should record onto the Edge Agent. The <code>ScheduleConfig</code> consists of the <code>ScheduleExpression</code> and the <code>DurationInMinutes</code> attributes. </p> <p>If the <code>ScheduleExpression</code> is not provided, then the Edge Agent will always be set to recording mode.</p>',
  })
  .openapi('ScheduleConfig')

const RecorderConfigSchema = z
  .object({
    MediaSourceConfig: MediaSourceConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration details that consist of the credentials required (<code>MediaUriSecretArn</code> and <code>MediaUriType</code>) to access the media files streamed to the camera. ',
        }),
    ),
    ScheduleConfig: ScheduleConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration that consists of the <code>ScheduleExpression</code> and the <code>DurationInMinutes</code> details that specify the scheduling to record from a camera, or local media file, onto the Edge Agent. If the <code>ScheduleExpression</code> attribute is not provided, then the Edge Agent will always be set to recording mode.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MediaSourceConfig'],
    description:
      'The recorder configuration consists of the local <code>MediaSourceConfig</code> details that are used as credentials to accesss the local media files streamed on the camera. ',
  })
  .openapi('RecorderConfig')

const UploaderConfigSchema = z
  .object({
    ScheduleConfig: ScheduleConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration that consists of the <code>ScheduleExpression</code> and the <code>DurationInMinutes</code>details that specify the scheduling to record from a camera, or local media file, onto the Edge Agent. If the <code>ScheduleExpression</code> is not provided, then the Edge Agent will always be in recording mode.',
        }),
    ),
  })
  .openapi({
    required: ['ScheduleConfig'],
    description:
      'The configuration that consists of the <code>ScheduleExpression</code> and the <code>DurationInMinutesdetails</code>, that specify the scheduling to record from a camera, or local media file, onto the Edge Agent. If the <code>ScheduleExpression</code> is not provided, then the Edge Agent will always be in upload mode. ',
  })
  .openapi('UploaderConfig')

const EdgeRetentionInHoursSchema = z.int().min(1).max(720).openapi('EdgeRetentionInHours')

const MaxLocalMediaSizeInMBSchema = z.int().min(64).max(2000000).openapi('MaxLocalMediaSizeInMB')

const StrategyOnFullSizeSchema = z
  .enum(['DELETE_OLDEST_MEDIA', 'DENY_NEW_MEDIA'])
  .openapi('StrategyOnFullSize')

const LocalSizeConfigSchema = z
  .object({
    MaxLocalMediaSizeInMB: MaxLocalMediaSizeInMBSchema.and(
      z
        .any()
        .openapi({
          description:
            'The overall maximum size of the media that you want to store for a stream on the Edge Agent. ',
        }),
    ).exactOptional(),
    StrategyOnFullSize: StrategyOnFullSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The strategy to perform when a stream’s <code>MaxLocalMediaSizeInMB</code> limit is reached.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "The configuration details that include the maximum size of the media (<code>MaxLocalMediaSizeInMB</code>) that you want to store for a stream on the Edge Agent, as well as the strategy that should be used (<code>StrategyOnFullSize</code>) when a stream's maximum size has been reached.",
    required: [],
  })
  .openapi('LocalSizeConfig')

const DeleteAfterUploadSchema = z.boolean().openapi('DeleteAfterUpload')

const DeletionConfigSchema = z
  .object({
    EdgeRetentionInHours: EdgeRetentionInHoursSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of hours that you want to retain the data in the stream on the Edge Agent. The default value of the retention time is 720 hours, which translates to 30 days.',
        }),
    ).exactOptional(),
    LocalSizeConfig: LocalSizeConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the local size required in order to delete the edge configuration.',
        }),
    ).exactOptional(),
    DeleteAfterUpload: DeleteAfterUploadSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <code>boolean</code> value used to indicate whether or not you want to mark the media for deletion, once it has been uploaded to the Kinesis Video Stream cloud. The media files can be deleted if any of the deletion configuration values are set to <code>true</code>, such as when the limit for the <code>EdgeRetentionInHours</code>, or the <code>MaxLocalMediaSizeInMB</code>, has been reached. </p> <p>Since the default value is set to <code>true</code>, configure the uploader schedule such that the media files are not being deleted before they are initially uploaded to AWS cloud.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration details required to delete the connection of the stream from the Edge Agent.',
    required: [],
  })
  .openapi('DeletionConfig')

const EdgeConfigSchema = z
  .object({
    HubDeviceArn: HubDeviceArnSchema.and(
      z
        .any()
        .openapi({ description: 'The "<b>Internet of Things (IoT) Thing</b>" Arn of the stream.' }),
    ),
    RecorderConfig: RecorderConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recorder configuration consists of the local <code>MediaSourceConfig</code> details, that are used as credentials to access the local media files streamed on the camera. ',
        }),
    ),
    UploaderConfig: UploaderConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The uploader configuration contains the <code>ScheduleExpression</code> details that are used to schedule upload jobs for the recorded media files from the Edge Agent to a Kinesis Video Stream.',
        }),
    ).exactOptional(),
    DeletionConfig: DeletionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The deletion configuration is made up of the retention time (<code>EdgeRetentionInHours</code>) and local size configuration (<code>LocalSizeConfig</code>) details that are used to make the deletion.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['HubDeviceArn', 'RecorderConfig'],
    description:
      "A description of the stream's edge configuration that will be used to sync with the Edge Agent IoT Greengrass component. The Edge Agent component will run on an IoT Hub Device setup at your premise.",
  })
  .openapi('EdgeConfig')

const DescribeEdgeConfigurationOutputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the stream from which the edge configuration was updated.',
        }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the stream.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp at which a stream’s edge configuration was first created.',
        }),
    ).exactOptional(),
    LastUpdatedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp at which a stream’s edge configuration was last updated.',
        }),
    ).exactOptional(),
    SyncStatus: SyncStatusSchema.and(
      z.any().openapi({ description: 'The latest status of the edge configuration update.' }),
    ).exactOptional(),
    FailedStatusDetails: FailedStatusDetailsSchema.and(
      z.any().openapi({ description: 'A description of the generated failure status.' }),
    ).exactOptional(),
    EdgeConfig: EdgeConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "A description of the stream's edge configuration that will be used to sync with the Edge Agent IoT Greengrass component. The Edge Agent component will run on an IoT Hub Device setup at your premise.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEdgeConfigurationOutput')

const StreamEdgeConfigurationNotFoundExceptionSchema = z
  .any()
  .openapi('StreamEdgeConfigurationNotFoundException')

const ConfigurationStatusSchema = z.enum(['ENABLED', 'DISABLED']).openapi('ConfigurationStatus')

const ImageSelectorTypeSchema = z
  .enum(['SERVER_TIMESTAMP', 'PRODUCER_TIMESTAMP'])
  .openapi('ImageSelectorType')

const DestinationUriSchema = z
  .string()
  .regex(/^[a-zA-Z_0-9]+:(\/\/)?([^\/]+)\/?([^*]*)$/)
  .min(1)
  .max(255)
  .openapi('DestinationUri')

const DestinationRegionSchema = z
  .string()
  .regex(/^[a-z]+(-[a-z]+)?-[a-z]+-[0-9]$/)
  .min(9)
  .max(14)
  .openapi('DestinationRegion')

const ImageGenerationDestinationConfigSchema = z
  .object({
    Uri: DestinationUriSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Uniform Resource Identifier (URI) that identifies where the images will be delivered.',
        }),
    ),
    DestinationRegion: DestinationRegionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS Region of the S3 bucket where images will be delivered. This <code>DestinationRegion</code> must match the Region where the stream is located.',
        }),
    ),
  })
  .openapi({
    required: ['Uri', 'DestinationRegion'],
    description:
      'The structure that contains the information required to deliver images to a customer.',
  })
  .openapi('ImageGenerationDestinationConfig')

const SamplingIntervalSchema = z.int().min(3000).max(20000).openapi('SamplingInterval')

const FormatSchema = z.enum(['JPEG', 'PNG']).openapi('Format')

const FormatConfigValueSchema = z
  .string()
  .regex(/^[a-zA-Z_0-9]+/)
  .min(0)
  .max(256)
  .openapi('FormatConfigValue')

const FormatConfigSchema = z
  .record(z.string(), FormatConfigValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 1)
  .openapi('FormatConfig')

const WidthPixelsSchema = z.int().min(1).max(3840).openapi('WidthPixels')

const HeightPixelsSchema = z.int().min(1).max(2160).openapi('HeightPixels')

const ImageGenerationConfigurationSchema = z
  .object({
    Status: ConfigurationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the <code>ContinuousImageGenerationConfigurations</code> API is enabled or disabled.',
        }),
    ),
    ImageSelectorType: ImageSelectorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The origin of the Server or Producer timestamps to use to generate the images.',
        }),
    ),
    DestinationConfig: ImageGenerationDestinationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The structure that contains the information required to deliver images to a customer.',
        }),
    ),
    SamplingInterval: SamplingIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time interval in milliseconds (ms) at which the images need to be generated from the stream. The minimum value that can be provided is 33 ms, because a camera that generates content at 30 FPS would create a frame every 33.3 ms. If the timestamp range is less than the sampling interval, the Image from the <code>StartTimestamp</code> will be returned if available. ',
        }),
    ),
    Format: FormatSchema.and(z.any().openapi({ description: 'The accepted image format.' })),
    FormatConfig: FormatConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of a key-value pair structure that contains extra parameters that can be applied when the image is generated. The <code>FormatConfig</code> key is the <code>JPEGQuality</code>, which indicates the JPEG quality key to be used to generate the image. The <code>FormatConfig</code> value accepts ints from 1 to 100. If the value is 1, the image will be generated with less quality and the best compression. If the value is 100, the image will be generated with the best quality and less compression. If no value is provided, the default value of the <code>JPEGQuality</code> key will be set to 80.',
        }),
    ).exactOptional(),
    WidthPixels: WidthPixelsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The width of the output image that is used in conjunction with the <code>HeightPixels</code> parameter. When both <code>WidthPixels</code> and <code>HeightPixels</code> parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the <code>WidthPixels</code> parameter is provided, its original aspect ratio will be used to calculate the <code>HeightPixels</code> ratio. If neither parameter is provided, the original image size will be returned.',
        }),
    ).exactOptional(),
    HeightPixels: HeightPixelsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The height of the output image that is used in conjunction with the <code>WidthPixels</code> parameter. When both <code>HeightPixels</code> and <code>WidthPixels</code> parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the <code>HeightPixels</code> parameter is provided, its original aspect ratio will be used to calculate the <code>WidthPixels</code> ratio. If neither parameter is provided, the original image size will be returned.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Status', 'ImageSelectorType', 'DestinationConfig', 'SamplingInterval', 'Format'],
    description:
      'The structure that contains the information required for the KVS images delivery. If null, the configuration will be deleted from the stream.',
  })
  .openapi('ImageGenerationConfiguration')

const DescribeImageGenerationConfigurationOutputSchema = z
  .object({
    ImageGenerationConfiguration: ImageGenerationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The structure that contains the information required for the Kinesis video stream (KVS) images delivery. If this structure is null, the configuration will be deleted from the stream.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeImageGenerationConfigurationOutput')

const TypeSchema = z.string().openapi('Type')

const MappedResourceConfigurationListItemSchema = z
  .object({
    Type: TypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of the associated resource for the kinesis video stream.',
        }),
    ).exactOptional(),
    ARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Kinesis Video Stream resource, associated with the stream.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A structure that encapsulates, or contains, the media storage configuration properties.',
    required: [],
  })
  .openapi('MappedResourceConfigurationListItem')

const MappedResourceConfigurationListSchema = z
  .array(MappedResourceConfigurationListItemSchema)
  .min(0)
  .max(1)
  .openapi('MappedResourceConfigurationList')

const NextTokenSchema = z
  .string()
  .regex(/[a-zA-Z0-9+\/=]*/)
  .min(0)
  .max(512)
  .openapi('NextToken')

const DescribeMappedResourceConfigurationOutputSchema = z
  .object({
    MappedResourceConfigurationList: MappedResourceConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that encapsulates, or contains, the media storage configuration properties.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that was used in the <code>NextToken</code>request to fetch the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeMappedResourceConfigurationOutput')

const MediaStorageConfigurationStatusSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi('MediaStorageConfigurationStatus')

const MediaStorageConfigurationSchema = z
  .object({
    StreamARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the stream ' }),
    ).exactOptional(),
    Status: MediaStorageConfigurationStatusSchema.and(
      z.any().openapi({ description: 'The status of the media storage configuration.' }),
    ),
  })
  .openapi({
    required: ['Status'],
    description:
      'A structure that encapsulates, or contains, the media storage configuration properties.',
  })
  .openapi('MediaStorageConfiguration')

const DescribeMediaStorageConfigurationOutputSchema = z
  .object({
    MediaStorageConfiguration: MediaStorageConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that encapsulates, or contains, the media storage configuration properties.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeMediaStorageConfigurationOutput')

const NotificationDestinationConfigSchema = z
  .object({
    Uri: DestinationUriSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Uniform Resource Identifier (URI) that identifies where the images will be delivered.',
        }),
    ),
  })
  .openapi({
    required: ['Uri'],
    description:
      'The structure that contains the information required to deliver a notification to a customer.',
  })
  .openapi('NotificationDestinationConfig')

const NotificationConfigurationSchema = z
  .object({
    Status: ConfigurationStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates if a notification configuration is enabled or disabled.',
        }),
    ),
    DestinationConfig: NotificationDestinationConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destination information required to deliver a notification to a customer.',
        }),
    ),
  })
  .openapi({
    required: ['Status', 'DestinationConfig'],
    description:
      'The structure that contains the notification information for the KVS images delivery. If this parameter is null, the configuration will be deleted from the stream.',
  })
  .openapi('NotificationConfiguration')

const DescribeNotificationConfigurationOutputSchema = z
  .object({
    NotificationConfiguration: NotificationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The structure that contains the information required for notifications. If the structure is null, the configuration will be deleted from the stream.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeNotificationConfigurationOutput')

const ChannelNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(256)
  .openapi('ChannelName')

const ChannelTypeSchema = z.enum(['SINGLE_MASTER', 'FULL_MESH']).openapi('ChannelType')

const StatusSchema = z.enum(['CREATING', 'ACTIVE', 'UPDATING', 'DELETING']).openapi('Status')

const SingleMasterConfigurationSchema = z
  .object({
    MessageTtlSeconds: MessageTtlSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The period of time a signaling channel retains undelivered messages before they are discarded.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.',
    required: [],
  })
  .openapi('SingleMasterConfiguration')

const VersionSchema = z
  .string()
  .regex(/[a-zA-Z0-9]+/)
  .min(1)
  .max(64)
  .openapi('Version')

const ChannelInfoSchema = z
  .object({
    ChannelName: ChannelNameSchema.and(
      z.any().openapi({ description: 'The name of the signaling channel.' }),
    ).exactOptional(),
    ChannelARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the signaling channel.' }),
    ).exactOptional(),
    ChannelType: ChannelTypeSchema.and(
      z.any().openapi({ description: 'The type of the signaling channel.' }),
    ).exactOptional(),
    ChannelStatus: StatusSchema.and(
      z.any().openapi({ description: 'Current status of the signaling channel.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the signaling channel was created.' }),
    ).exactOptional(),
    SingleMasterConfiguration: SingleMasterConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.',
        }),
    ).exactOptional(),
    Version: VersionSchema.and(
      z.any().openapi({ description: 'The current version of the signaling channel.' }),
    ).exactOptional(),
  })
  .openapi({
    description: "A structure that encapsulates a signaling channel's metadata and properties.",
    required: [],
  })
  .openapi('ChannelInfo')

const DescribeSignalingChannelOutputSchema = z
  .object({
    ChannelInfo: ChannelInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            "A structure that encapsulates the specified signaling channel's metadata and properties.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSignalingChannelOutput')

const DeviceNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(128)
  .openapi('DeviceName')

const MediaTypeSchema = z
  .string()
  .regex(/[\w\-\.\+]+\/[\w\-\.\+]+(,[\w\-\.\+]+\/[\w\-\.\+]+)*/)
  .min(1)
  .max(128)
  .openapi('MediaType')

const KmsKeyIdSchema = z.string().regex(/.+/).min(1).max(2048).openapi('KmsKeyId')

const DataRetentionInHoursSchema = z.int().min(0).openapi('DataRetentionInHours')

const StreamInfoSchema = z
  .object({
    DeviceName: DeviceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the device that is associated with the stream.' }),
    ).exactOptional(),
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream.' }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the stream.' }),
    ).exactOptional(),
    MediaType: MediaTypeSchema.and(
      z.any().openapi({ description: 'The <code>MediaType</code> of the stream. ' }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Key Management Service (KMS) key that Kinesis Video Streams uses to encrypt data on the stream.',
        }),
    ).exactOptional(),
    Version: VersionSchema.and(
      z.any().openapi({ description: 'The version of the stream.' }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z.any().openapi({ description: 'The status of the stream.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'A time stamp that indicates when the stream was created.' }),
    ).exactOptional(),
    DataRetentionInHours: DataRetentionInHoursSchema.and(
      z.any().openapi({ description: 'How long the stream retains data, in hours.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object describing a Kinesis video stream.', required: [] })
  .openapi('StreamInfo')

const DescribeStreamOutputSchema = z
  .object({
    StreamInfo: StreamInfoSchema.and(
      z.any().openapi({ description: 'An object that describes the stream.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeStreamOutput')

const DataEndpointSchema = z.string().openapi('DataEndpoint')

const GetDataEndpointOutputSchema = z
  .object({
    DataEndpoint: DataEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint value. To read data from the stream or to write data to it, specify this endpoint in your application.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDataEndpointOutput')

const ChannelProtocolSchema = z.enum(['WSS', 'HTTPS', 'WEBRTC']).openapi('ChannelProtocol')

const ResourceEndpointSchema = z.string().openapi('ResourceEndpoint')

const ResourceEndpointListItemSchema = z
  .object({
    Protocol: ChannelProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol of the signaling channel returned by the <code>GetSignalingChannelEndpoint</code> API.',
        }),
    ).exactOptional(),
    ResourceEndpoint: ResourceEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint of the signaling channel returned by the <code>GetSignalingChannelEndpoint</code> API.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that describes the endpoint of the signaling channel returned by the <code>GetSignalingChannelEndpoint</code> API.',
    required: [],
  })
  .openapi('ResourceEndpointListItem')

const ResourceEndpointListSchema = z
  .array(ResourceEndpointListItemSchema)
  .openapi('ResourceEndpointList')

const GetSignalingChannelEndpointOutputSchema = z
  .object({
    ResourceEndpointList: ResourceEndpointListSchema.and(
      z.any().openapi({ description: 'A list of endpoints for the specified signaling channel.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSignalingChannelEndpointOutput')

const ListOfProtocolsSchema = z
  .array(ChannelProtocolSchema)
  .min(1)
  .max(5)
  .openapi('ListOfProtocols')

const ChannelRoleSchema = z.enum(['MASTER', 'VIEWER']).openapi('ChannelRole')

const ChannelInfoListSchema = z.array(ChannelInfoSchema).openapi('ChannelInfoList')

const ListSignalingChannelsOutputSchema = z
  .object({
    ChannelInfoList: ChannelInfoListSchema.and(
      z.any().openapi({ description: 'An array of <code>ChannelInfo</code> objects.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, the call returns this element with a token. To get the next batch of streams, use this token in your next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSignalingChannelsOutput')

const ComparisonOperatorSchema = z.literal('BEGINS_WITH').openapi('ComparisonOperator')

const StreamInfoListSchema = z.array(StreamInfoSchema).openapi('StreamInfoList')

const ListStreamsOutputSchema = z
  .object({
    StreamInfoList: StreamInfoListSchema.and(
      z.any().openapi({ description: 'An array of <code>StreamInfo</code> objects.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, the call returns this element with a token. To get the next batch of streams, use this token in your next request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListStreamsOutput')

const ResourceTagsSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('ResourceTags')

const ListTagsForResourceOutputSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify this parameter and the result of a <code>ListTagsForResource</code> call is truncated, the response includes a token that you can use in the next request to fetch the next set of tags. ',
        }),
    ).exactOptional(),
    Tags: ResourceTagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of tag keys and values associated with the specified signaling channel.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceOutput')

const ListTagsForStreamOutputSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify this parameter and the result of a <code>ListTags</code> call is truncated, the response includes a token that you can use in the next request to fetch the next set of tags.',
        }),
    ).exactOptional(),
    Tags: ResourceTagsSchema.and(
      z
        .any()
        .openapi({
          description: 'A map of tag keys and values associated with the specified stream.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForStreamOutput')

const InvalidResourceFormatExceptionSchema = z.any().openapi('InvalidResourceFormatException')

const StartEdgeConfigurationUpdateOutputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the stream from which the edge configuration was updated.',
        }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the stream.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp at which a stream’s edge configuration was first created.',
        }),
    ).exactOptional(),
    LastUpdatedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp at which a stream’s edge configuration was last updated.',
        }),
    ).exactOptional(),
    SyncStatus: SyncStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            " The current sync status of the stream's edge configuration. When you invoke this API, the sync status will be set to the <code>SYNCING</code> state. Use the <code>DescribeEdgeConfiguration</code> API to get the latest status of the edge configuration.",
        }),
    ).exactOptional(),
    FailedStatusDetails: FailedStatusDetailsSchema.and(
      z.any().openapi({ description: 'A description of the generated failure status.' }),
    ).exactOptional(),
    EdgeConfig: EdgeConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "A description of the stream's edge configuration that will be used to sync with the Edge Agent IoT Greengrass component. The Edge Agent component will run on an IoT Hub Device setup at your premise.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartEdgeConfigurationUpdateOutput')

const NoDataRetentionExceptionSchema = z.any().openapi('NoDataRetentionException')

const TagResourceOutputSchema = z.object({}).openapi('TagResourceOutput')

const TagStreamOutputSchema = z.object({}).openapi('TagStreamOutput')

const UntagResourceOutputSchema = z.object({}).openapi('UntagResourceOutput')

const UntagStreamOutputSchema = z.object({}).openapi('UntagStreamOutput')

const UpdateDataRetentionOutputSchema = z.object({}).openapi('UpdateDataRetentionOutput')

const UpdateImageGenerationConfigurationOutputSchema = z
  .object({})
  .openapi('UpdateImageGenerationConfigurationOutput')

const UpdateMediaStorageConfigurationOutputSchema = z
  .object({})
  .openapi('UpdateMediaStorageConfigurationOutput')

const UpdateNotificationConfigurationOutputSchema = z
  .object({})
  .openapi('UpdateNotificationConfigurationOutput')

const UpdateSignalingChannelOutputSchema = z.object({}).openapi('UpdateSignalingChannelOutput')

const UpdateStreamOutputSchema = z.object({}).openapi('UpdateStreamOutput')

const APINameSchema = z
  .enum([
    'PUT_MEDIA',
    'GET_MEDIA',
    'LIST_FRAGMENTS',
    'GET_MEDIA_FOR_FRAGMENT_LIST',
    'GET_HLS_STREAMING_SESSION_URL',
    'GET_DASH_STREAMING_SESSION_URL',
    'GET_CLIP',
    'GET_IMAGES',
  ])
  .openapi('APIName')

const ChannelNameConditionSchema = z
  .object({
    ComparisonOperator: ComparisonOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'A comparison operator. Currently, you can only specify the <code>BEGINS_WITH</code> operator, which finds signaling channels whose names begin with a given prefix.',
        }),
    ).exactOptional(),
    ComparisonValue: ChannelNameSchema.and(
      z.any().openapi({ description: 'A value to compare.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>.',
    required: [],
  })
  .openapi('ChannelNameCondition')

const TagOnCreateListSchema = z.array(TagSchema).min(0).max(50).openapi('TagOnCreateList')

const CreateSignalingChannelInputSchema = z
  .object({
    ChannelName: ChannelNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name for the signaling channel that you are creating. It must be unique for each Amazon Web Services account and Amazon Web Services Region.',
        }),
    ),
    ChannelType: ChannelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A type of the signaling channel that you are creating. Currently, <code>SINGLE_MASTER</code> is the only supported channel type. ',
        }),
    ).exactOptional(),
    SingleMasterConfiguration: SingleMasterConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure containing the configuration for the <code>SINGLE_MASTER</code> channel type. ',
        }),
    ).exactOptional(),
    Tags: TagOnCreateListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of tags (key-value pairs) that you want to associate with this channel.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ChannelName'], title: 'CreateSignalingChannelInput' })
  .openapi('CreateSignalingChannelInput')

const CreateStreamInputSchema = z
  .object({
    DeviceName: DeviceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the device that is writing to the stream. </p> <note> <p>In the current implementation, Kinesis Video Streams does not use this name.</p> </note>',
        }),
    ).exactOptional(),
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A name for the stream that you are creating.</p> <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>',
        }),
    ),
    MediaType: MediaTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The media type of the stream. Consumers of the stream can use this information when processing the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a> for guidelines.</p> <p>Example valid values include "video/h264" and "video/h264,audio/aac".</p> <p>This parameter is optional; the default value is <code>null</code> (or empty in JSON).</p>',
        }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the Key Management Service (KMS) key that you want Kinesis Video Streams to use to encrypt stream data.</p> <p>If no key ID is specified, the default, Kinesis Video-managed key (<code>aws/kinesisvideo</code>) is used.</p> <p> For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">DescribeKey</a>. </p>',
        }),
    ).exactOptional(),
    DataRetentionInHours: DataRetentionInHoursSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream.</p> <p>The default value is 0, indicating that the stream does not persist data.</p> <p>When the <code>DataRetentionInHours</code> value is 0, consumers can still consume the fragments that remain in the service host buffer, which has a retention time limit of 5 minutes and a retention memory limit of 200 MB. Fragments are removed from the buffer when either limit is reached.</p>',
        }),
    ).exactOptional(),
    Tags: ResourceTagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional).',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StreamName'], title: 'CreateStreamInput' })
  .openapi('CreateStreamInput')

const DataRetentionChangeInHoursSchema = z.int().min(1).openapi('DataRetentionChangeInHours')

const DeleteSignalingChannelInputSchema = z
  .object({
    ChannelARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the signaling channel that you want to delete.',
        }),
    ),
    CurrentVersion: VersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current version of the signaling channel that you want to delete. You can obtain the current version by invoking the <code>DescribeSignalingChannel</code> or <code>ListSignalingChannels</code> API operations.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ChannelARN'], title: 'DeleteSignalingChannelInput' })
  .openapi('DeleteSignalingChannelInput')

const DeleteStreamInputSchema = z
  .object({
    StreamARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the stream that you want to delete. ',
        }),
    ),
    CurrentVersion: VersionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Optional: The version of the stream that you want to delete. </p> <p>Specify the version as a safeguard to ensure that your are deleting the correct stream. To get the stream version, use the <code>DescribeStream</code> API.</p> <p>If not specified, only the <code>CreationTime</code> is checked before deleting the stream.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StreamARN'], title: 'DeleteStreamInput' })
  .openapi('DeleteStreamInput')

const DescribeEdgeConfigurationInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the stream whose edge configuration you want to update. Specify either the <code>StreamName</code> or the <code>StreamARN</code>. ',
        }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the stream. Specify either the <code>StreamName</code>or the <code>StreamARN</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeEdgeConfigurationInput', required: [] })
  .openapi('DescribeEdgeConfigurationInput')

const DescribeImageGenerationConfigurationInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the stream from which to retrieve the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>. ',
        }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Kinesis video stream from which to retrieve the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeImageGenerationConfigurationInput', required: [] })
  .openapi('DescribeImageGenerationConfigurationInput')

const MappedResourceConfigurationListLimitSchema = z
  .int()
  .min(1)
  .max(1)
  .openapi('MappedResourceConfigurationListLimit')

const DescribeMappedResourceConfigurationInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream.' }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the stream.' }),
    ).exactOptional(),
    MaxResults: MappedResourceConfigurationListLimitSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in the response.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to provide in your next request, to get another batch of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeMappedResourceConfigurationInput', required: [] })
  .openapi('DescribeMappedResourceConfigurationInput')

const DescribeMediaStorageConfigurationInputSchema = z
  .object({
    ChannelName: ChannelNameSchema.and(
      z.any().openapi({ description: 'The name of the channel.' }),
    ).exactOptional(),
    ChannelARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the channel.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeMediaStorageConfigurationInput', required: [] })
  .openapi('DescribeMediaStorageConfigurationInput')

const DescribeNotificationConfigurationInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the stream from which to retrieve the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
        }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to retrieve the notification configuration. You must specify either the <code>StreamName</code> or the StreamARN.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeNotificationConfigurationInput', required: [] })
  .openapi('DescribeNotificationConfigurationInput')

const DescribeSignalingChannelInputSchema = z
  .object({
    ChannelName: ChannelNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the signaling channel that you want to describe.' }),
    ).exactOptional(),
    ChannelARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the signaling channel that you want to describe.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeSignalingChannelInput', required: [] })
  .openapi('DescribeSignalingChannelInput')

const DescribeStreamInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream.' }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the stream.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeStreamInput', required: [] })
  .openapi('DescribeStreamInput')

const FormatConfigKeySchema = z.literal('JPEGQuality').openapi('FormatConfigKey')

const GetDataEndpointInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamARN</code> in the request.',
        }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamName</code> in the request. ',
        }),
    ).exactOptional(),
    APIName: APINameSchema.and(
      z.any().openapi({ description: 'The name of the API action for which to get an endpoint.' }),
    ),
  })
  .openapi({ required: ['APIName'], title: 'GetDataEndpointInput' })
  .openapi('GetDataEndpointInput')

const SingleMasterChannelEndpointConfigurationSchema = z
  .object({
    Protocols: ListOfProtocolsSchema.and(
      z
        .any()
        .openapi({
          description:
            'This property is used to determine the nature of communication over this <code>SINGLE_MASTER</code> signaling channel. If <code>WSS</code> is specified, this API returns a websocket endpoint. If <code>HTTPS</code> is specified, this API returns an <code>HTTPS</code> endpoint.',
        }),
    ).exactOptional(),
    Role: ChannelRoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'This property is used to determine messaging permissions in this <code>SINGLE_MASTER</code> signaling channel. If <code>MASTER</code> is specified, this API returns an endpoint that a client can use to receive offers from and send answers to any of the viewers on this signaling channel. If <code>VIEWER</code> is specified, this API returns an endpoint that a client can use only to send offers to another <code>MASTER</code> client on this signaling channel. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type. ',
    required: [],
  })
  .openapi('SingleMasterChannelEndpointConfiguration')

const GetSignalingChannelEndpointInputSchema = z
  .object({
    ChannelARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the signalling channel for which you want to get an endpoint.',
        }),
    ),
    SingleMasterChannelEndpointConfiguration: SingleMasterChannelEndpointConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure containing the endpoint configuration for the <code>SINGLE_MASTER</code> channel type.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ChannelARN'], title: 'GetSignalingChannelEndpointInput' })
  .openapi('GetSignalingChannelEndpointInput')

const ListStreamsInputLimitSchema = z.int().min(1).max(10000).openapi('ListStreamsInputLimit')

const ListSignalingChannelsInputSchema = z
  .object({
    MaxResults: ListStreamsInputLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of channels to return in the response. The default is 500.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify this parameter, when the result of a <code>ListSignalingChannels</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of channels, provide this token in your next request.',
        }),
    ).exactOptional(),
    ChannelNameCondition: ChannelNameConditionSchema.and(
      z
        .any()
        .openapi({
          description: 'Optional: Returns only the channels that satisfy a specific condition.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListSignalingChannelsInput', required: [] })
  .openapi('ListSignalingChannelsInput')

const StreamNameConditionSchema = z
  .object({
    ComparisonOperator: ComparisonOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'A comparison operator. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix.',
        }),
    ).exactOptional(),
    ComparisonValue: StreamNameSchema.and(
      z.any().openapi({ description: 'A value to compare.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix. ',
    required: [],
  })
  .openapi('StreamNameCondition')

const ListStreamsInputSchema = z
  .object({
    MaxResults: ListStreamsInputLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of streams to return in the response. The default is 10,000.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify this parameter, when the result of a <code>ListStreams</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of streams, provide this token in your next request.',
        }),
    ).exactOptional(),
    StreamNameCondition: StreamNameConditionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional: Returns only streams that satisfy a specific condition. Currently, you can specify only the prefix of a stream name as a condition. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListStreamsInput', required: [] })
  .openapi('ListStreamsInput')

const ListTagsForResourceInputSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify this parameter and the result of a <code>ListTagsForResource</code> call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags. ',
        }),
    ).exactOptional(),
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the signaling channel for which you want to list tags.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceInput' })
  .openapi('ListTagsForResourceInput')

const ListTagsForStreamInputSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify this parameter and the result of a <code>ListTagsForStream</code> call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags.',
        }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the stream that you want to list tags for.',
        }),
    ).exactOptional(),
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream that you want to list tags for.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTagsForStreamInput', required: [] })
  .openapi('ListTagsForStreamInput')

const StartEdgeConfigurationUpdateInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the stream whose edge configuration you want to update. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
        }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) of the stream. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
        }),
    ).exactOptional(),
    EdgeConfig: EdgeConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The edge configuration details required to invoke the update process.',
        }),
    ),
  })
  .openapi({ required: ['EdgeConfig'], title: 'StartEdgeConfigurationUpdateInput' })
  .openapi('StartEdgeConfigurationUpdateInput')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const TagListSchema = z.array(TagSchema).min(1).max(50).openapi('TagList')

const TagResourceInputSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the signaling channel to which you want to add tags.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags to associate with the specified signaling channel. Each tag is a key-value pair.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceInput' })
  .openapi('TagResourceInput')

const TagStreamInputSchema = z
  .object({
    StreamARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource that you want to add the tag or tags to.',
        }),
    ).exactOptional(),
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the stream that you want to add the tag or tags to.',
        }),
    ).exactOptional(),
    Tags: ResourceTagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional).',
        }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagStreamInput' })
  .openapi('TagStreamInput')

const UntagResourceInputSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the signaling channel from which you want to remove tags.',
        }),
    ),
    TagKeyList: TagKeyListSchema.and(
      z.any().openapi({ description: 'A list of the keys of the tags that you want to remove.' }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeyList'], title: 'UntagResourceInput' })
  .openapi('UntagResourceInput')

const UntagStreamInputSchema = z
  .object({
    StreamARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the stream that you want to remove tags from.',
        }),
    ).exactOptional(),
    StreamName: StreamNameSchema.and(
      z.any().openapi({ description: 'The name of the stream that you want to remove tags from.' }),
    ).exactOptional(),
    TagKeyList: TagKeyListSchema.and(
      z.any().openapi({ description: 'A list of the keys of the tags that you want to remove.' }),
    ),
  })
  .openapi({ required: ['TagKeyList'], title: 'UntagStreamInput' })
  .openapi('UntagStreamInput')

const UpdateDataRetentionOperationSchema = z
  .enum(['INCREASE_DATA_RETENTION', 'DECREASE_DATA_RETENTION'])
  .openapi('UpdateDataRetentionOperation')

const UpdateDataRetentionInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the stream whose retention period you want to change.',
        }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the stream whose retention period you want to change.',
        }),
    ).exactOptional(),
    CurrentVersion: VersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the stream whose retention period you want to change. To get the version, call either the <code>DescribeStream</code> or the <code>ListStreams</code> API.',
        }),
    ),
    Operation: UpdateDataRetentionOperationSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether you want to increase or decrease the retention period.',
        }),
    ),
    DataRetentionChangeInHours: DataRetentionChangeInHoursSchema.and(
      z
        .any()
        .openapi({
          description:
            'The retention period, in hours. The value you specify replaces the current value. The maximum value for this parameter is 87600 (ten years).',
        }),
    ),
  })
  .openapi({
    required: ['CurrentVersion', 'Operation', 'DataRetentionChangeInHours'],
    title: 'UpdateDataRetentionInput',
  })
  .openapi('UpdateDataRetentionInput')

const UpdateImageGenerationConfigurationInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the stream from which to update the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
        }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
        }),
    ).exactOptional(),
    ImageGenerationConfiguration: ImageGenerationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The structure that contains the information required for the KVS images delivery. If the structure is null, the configuration will be deleted from the stream.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateImageGenerationConfigurationInput', required: [] })
  .openapi('UpdateImageGenerationConfigurationInput')

const UpdateMediaStorageConfigurationInputSchema = z
  .object({
    ChannelARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the channel.' }),
    ),
    MediaStorageConfiguration: MediaStorageConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that encapsulates, or contains, the media storage configuration properties.',
        }),
    ),
  })
  .openapi({
    required: ['ChannelARN', 'MediaStorageConfiguration'],
    title: 'UpdateMediaStorageConfigurationInput',
  })
  .openapi('UpdateMediaStorageConfigurationInput')

const UpdateNotificationConfigurationInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the stream from which to update the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
        }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
        }),
    ).exactOptional(),
    NotificationConfiguration: NotificationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The structure containing the information required for notifications. If the structure is null, the configuration will be deleted from the stream.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateNotificationConfigurationInput', required: [] })
  .openapi('UpdateNotificationConfigurationInput')

const UpdateSignalingChannelInputSchema = z
  .object({
    ChannelARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the signaling channel that you want to update.',
        }),
    ),
    CurrentVersion: VersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The current version of the signaling channel that you want to update.',
        }),
    ),
    SingleMasterConfiguration: SingleMasterConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The structure containing the configuration for the <code>SINGLE_MASTER</code> type of the signaling channel that you want to update. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ChannelARN', 'CurrentVersion'], title: 'UpdateSignalingChannelInput' })
  .openapi('UpdateSignalingChannelInput')

const UpdateStreamInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the stream whose metadata you want to update.</p> <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>',
        }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The ARN of the stream whose metadata you want to update.' }),
    ).exactOptional(),
    CurrentVersion: VersionSchema.and(
      z
        .any()
        .openapi({ description: 'The version of the stream whose metadata you want to update.' }),
    ),
    DeviceName: DeviceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the device that is writing to the stream. </p> <note> <p> In the current implementation, Kinesis Video Streams does not use this name. </p> </note>',
        }),
    ).exactOptional(),
    MediaType: MediaTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The stream\'s media type. Use <code>MediaType</code> to specify the type of content that the stream contains to the consumers of the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a>.</p> <p>To play video on the console, you must specify the correct video type. For example, if the video in the stream is H.264, specify <code>video/h264</code> as the <code>MediaType</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CurrentVersion'], title: 'UpdateStreamInput' })
  .openapi('UpdateStreamInput')

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

export const postCreateSignalingChannelRoute = createRoute({
  method: 'post',
  path: '/createSignalingChannel',
  description:
    '<p>Creates a signaling channel. </p> <p> <code>CreateSignalingChannel</code> is an asynchronous operation.</p>',
  operationId: 'CreateSignalingChannel',
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
              ChannelName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .openapi({
                  description:
                    'A name for the signaling channel that you are creating. It must be unique for each Amazon Web Services account and Amazon Web Services Region.',
                }),
              ChannelType: z
                .enum(['SINGLE_MASTER', 'FULL_MESH'])
                .exactOptional()
                .openapi({
                  description:
                    'A type of the signaling channel that you are creating. Currently, <code>SINGLE_MASTER</code> is the only supported channel type. ',
                }),
              SingleMasterConfiguration: z
                .object({
                  MessageTtlSeconds: MessageTtlSecondsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The period of time a signaling channel retains undelivered messages before they are discarded.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.',
                  required: [],
                }),
              Tags: z
                .array(TagSchema)
                .min(0)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    'A set of tags (key-value pairs) that you want to associate with this channel.',
                }),
            })
            .openapi({ required: ['ChannelName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSignalingChannelOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    482: {
      description: 'AccountChannelLimitExceededException',
      content: { 'application/json': { schema: AccountChannelLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'TagsPerResourceExceededLimitException',
      content: { 'application/json': { schema: TagsPerResourceExceededLimitExceptionSchema } },
    },
  },
})

export const postCreateStreamRoute = createRoute({
  method: 'post',
  path: '/createStream',
  description:
    '<p>Creates a new Kinesis video stream. </p> <p>When you create a new stream, Kinesis Video Streams assigns it a version number. When you change the stream\'s metadata, Kinesis Video Streams updates the version. </p> <p> <code>CreateStream</code> is an asynchronous operation.</p> <p>For information about how the service works, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html">How it Works</a>. </p> <p>You must have permissions for the <code>KinesisVideo:CreateStream</code> action.</p>',
  operationId: 'CreateStream',
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
              DeviceName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The name of the device that is writing to the stream. </p> <note> <p>In the current implementation, Kinesis Video Streams does not use this name.</p> </note>',
                }),
              StreamName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .openapi({
                  description:
                    '<p>A name for the stream that you are creating.</p> <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>',
                }),
              MediaType: z
                .string()
                .regex(/[\w\-\.\+]+\/[\w\-\.\+]+(,[\w\-\.\+]+\/[\w\-\.\+]+)*/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The media type of the stream. Consumers of the stream can use this information when processing the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a> for guidelines.</p> <p>Example valid values include "video/h264" and "video/h264,audio/aac".</p> <p>This parameter is optional; the default value is <code>null</code> (or empty in JSON).</p>',
                }),
              KmsKeyId: z
                .string()
                .regex(/.+/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The ID of the Key Management Service (KMS) key that you want Kinesis Video Streams to use to encrypt stream data.</p> <p>If no key ID is specified, the default, Kinesis Video-managed key (<code>aws/kinesisvideo</code>) is used.</p> <p> For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">DescribeKey</a>. </p>',
                }),
              DataRetentionInHours: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream.</p> <p>The default value is 0, indicating that the stream does not persist data.</p> <p>When the <code>DataRetentionInHours</code> value is 0, consumers can still consume the fragments that remain in the service host buffer, which has a retention time limit of 5 minutes and a retention memory limit of 200 MB. Fragments are removed from the buffer when either limit is reached.</p>',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional).',
                }),
            })
            .openapi({ required: ['StreamName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateStreamOutputSchema } },
    },
    480: {
      description: 'AccountStreamLimitExceededException',
      content: { 'application/json': { schema: AccountStreamLimitExceededExceptionSchema } },
    },
    481: {
      description: 'DeviceStreamLimitExceededException',
      content: { 'application/json': { schema: DeviceStreamLimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'InvalidDeviceException',
      content: { 'application/json': { schema: InvalidDeviceExceptionSchema } },
    },
    484: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    485: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    486: {
      description: 'TagsPerResourceExceededLimitException',
      content: { 'application/json': { schema: TagsPerResourceExceededLimitExceptionSchema } },
    },
  },
})

export const postDeleteSignalingChannelRoute = createRoute({
  method: 'post',
  path: '/deleteSignalingChannel',
  description:
    "Deletes a specified signaling channel. <code>DeleteSignalingChannel</code> is an asynchronous operation. If you don't specify the channel's current version, the most recent version is deleted.",
  operationId: 'DeleteSignalingChannel',
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
              ChannelARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the signaling channel that you want to delete.',
                }),
              CurrentVersion: z
                .string()
                .regex(/[a-zA-Z0-9]+/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'The current version of the signaling channel that you want to delete. You can obtain the current version by invoking the <code>DescribeSignalingChannel</code> or <code>ListSignalingChannels</code> API operations.',
                }),
            })
            .openapi({ required: ['ChannelARN'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSignalingChannelOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'VersionMismatchException',
      content: { 'application/json': { schema: VersionMismatchExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postDeleteStreamRoute = createRoute({
  method: 'post',
  path: '/deleteStream',
  description:
    '<p>Deletes a Kinesis video stream and the data contained in the stream. </p> <p>This method marks the stream for deletion, and makes the data in the stream inaccessible immediately.</p> <p> </p> <p> To ensure that you have the latest version of the stream before deleting it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p>This operation requires permission for the <code>KinesisVideo:DeleteStream</code> action.</p>',
  operationId: 'DeleteStream',
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
              StreamARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the stream that you want to delete. ',
                }),
              CurrentVersion: z
                .string()
                .regex(/[a-zA-Z0-9]+/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Optional: The version of the stream that you want to delete. </p> <p>Specify the version as a safeguard to ensure that your are deleting the correct stream. To get the stream version, use the <code>DescribeStream</code> API.</p> <p>If not specified, only the <code>CreationTime</code> is checked before deleting the stream.</p>',
                }),
            })
            .openapi({ required: ['StreamARN'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteStreamOutputSchema } },
    },
    480: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'VersionMismatchException',
      content: { 'application/json': { schema: VersionMismatchExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postDescribeEdgeConfigurationRoute = createRoute({
  method: 'post',
  path: '/describeEdgeConfiguration',
  description:
    'Describes a stream’s edge configuration that was set using the <code>StartEdgeConfigurationUpdate</code> API. Use this API to get the status of the configuration if the configuration is in sync with the Edge Agent.',
  operationId: 'DescribeEdgeConfiguration',
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
              StreamName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'The name of the stream whose edge configuration you want to update. Specify either the <code>StreamName</code> or the <code>StreamARN</code>. ',
                }),
              StreamARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the stream. Specify either the <code>StreamName</code>or the <code>StreamARN</code>.',
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
      content: { 'application/json': { schema: DescribeEdgeConfigurationOutputSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'StreamEdgeConfigurationNotFoundException',
      content: { 'application/json': { schema: StreamEdgeConfigurationNotFoundExceptionSchema } },
    },
  },
})

export const postDescribeImageGenerationConfigurationRoute = createRoute({
  method: 'post',
  path: '/describeImageGenerationConfiguration',
  description:
    'Gets the <code>ImageGenerationConfiguration</code> for a given Kinesis video stream.',
  operationId: 'DescribeImageGenerationConfiguration',
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
              StreamName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'The name of the stream from which to retrieve the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>. ',
                }),
              StreamARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Kinesis video stream from which to retrieve the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
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
      content: { 'application/json': { schema: DescribeImageGenerationConfigurationOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postDescribeMappedResourceConfigurationRoute = createRoute({
  method: 'post',
  path: '/describeMappedResourceConfiguration',
  description:
    '<p>Returns the most current information about the stream. Either streamName or streamARN should be provided in the input.</p> <p>Returns the most current information about the stream. The <code>streamName</code> or <code>streamARN</code> should be provided in the input.</p>',
  operationId: 'DescribeMappedResourceConfiguration',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              StreamName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The name of the stream.' }),
              StreamARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The Amazon Resource Name (ARN) of the stream.' }),
              MaxResults: z
                .int()
                .min(1)
                .max(1)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results to return in the response.',
                }),
              NextToken: z
                .string()
                .regex(/[a-zA-Z0-9+\/=]*/)
                .min(0)
                .max(512)
                .exactOptional()
                .openapi({
                  description:
                    'The token to provide in your next request, to get another batch of results.',
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
      content: { 'application/json': { schema: DescribeMappedResourceConfigurationOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
  },
})

export const postDescribeMediaStorageConfigurationRoute = createRoute({
  method: 'post',
  path: '/describeMediaStorageConfiguration',
  description:
    'Returns the most current information about the channel. Specify the <code>ChannelName</code> or <code>ChannelARN</code> in the input.',
  operationId: 'DescribeMediaStorageConfiguration',
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
              ChannelName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The name of the channel.' }),
              ChannelARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The Amazon Resource Name (ARN) of the channel.' }),
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
      content: { 'application/json': { schema: DescribeMediaStorageConfigurationOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
  },
})

export const postDescribeNotificationConfigurationRoute = createRoute({
  method: 'post',
  path: '/describeNotificationConfiguration',
  description: 'Gets the <code>NotificationConfiguration</code> for a given Kinesis video stream.',
  operationId: 'DescribeNotificationConfiguration',
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
              StreamName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'The name of the stream from which to retrieve the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
                }),
              StreamARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to retrieve the notification configuration. You must specify either the <code>StreamName</code> or the StreamARN.',
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
      content: { 'application/json': { schema: DescribeNotificationConfigurationOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postDescribeSignalingChannelRoute = createRoute({
  method: 'post',
  path: '/describeSignalingChannel',
  description:
    'Returns the most current information about the signaling channel. You must specify either the name or the Amazon Resource Name (ARN) of the channel that you want to describe.',
  operationId: 'DescribeSignalingChannel',
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
              ChannelName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description: 'The name of the signaling channel that you want to describe.',
                }),
              ChannelARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description: 'The ARN of the signaling channel that you want to describe.',
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
      content: { 'application/json': { schema: DescribeSignalingChannelOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postDescribeStreamRoute = createRoute({
  method: 'post',
  path: '/describeStream',
  description:
    'Returns the most current information about the specified stream. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>. ',
  operationId: 'DescribeStream',
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
              StreamName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The name of the stream.' }),
              StreamARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The Amazon Resource Name (ARN) of the stream.' }),
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
      content: { 'application/json': { schema: DescribeStreamOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
  },
})

export const postGetDataEndpointRoute = createRoute({
  method: 'post',
  path: '/getDataEndpoint',
  description:
    '<p>Gets an endpoint for a specified stream for either reading or writing. Use this endpoint in your application to read from the specified stream (using the <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write to it (using the <code>PutMedia</code> operation). </p> <note> <p>The returned endpoint does not have the API name appended. The client needs to add the API name to the returned endpoint.</p> </note> <p>In the request, specify the stream either by <code>StreamName</code> or <code>StreamARN</code>.</p>',
  operationId: 'GetDataEndpoint',
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
              StreamName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'The name of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamARN</code> in the request.',
                }),
              StreamARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamName</code> in the request. ',
                }),
              APIName: z
                .enum([
                  'PUT_MEDIA',
                  'GET_MEDIA',
                  'LIST_FRAGMENTS',
                  'GET_MEDIA_FOR_FRAGMENT_LIST',
                  'GET_HLS_STREAMING_SESSION_URL',
                  'GET_DASH_STREAMING_SESSION_URL',
                  'GET_CLIP',
                  'GET_IMAGES',
                ])
                .openapi({
                  description: 'The name of the API action for which to get an endpoint.',
                }),
            })
            .openapi({ required: ['APIName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDataEndpointOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
  },
})

export const postGetSignalingChannelEndpointRoute = createRoute({
  method: 'post',
  path: '/getSignalingChannelEndpoint',
  description:
    '<p>Provides an endpoint for the specified signaling channel to send and receive messages. This API uses the <code>SingleMasterChannelEndpointConfiguration</code> input parameter, which consists of the <code>Protocols</code> and <code>Role</code> properties.</p> <p> <code>Protocols</code> is used to determine the communication mechanism. For example, if you specify <code>WSS</code> as the protocol, this API produces a secure websocket endpoint. If you specify <code>HTTPS</code> as the protocol, this API generates an HTTPS endpoint. </p> <p> <code>Role</code> determines the messaging permissions. A <code>MASTER</code> role results in this API generating an endpoint that a client can use to communicate with any of the viewers on the channel. A <code>VIEWER</code> role results in this API generating an endpoint that a client can use to communicate only with a <code>MASTER</code>. </p>',
  operationId: 'GetSignalingChannelEndpoint',
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
              ChannelARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the signalling channel for which you want to get an endpoint.',
                }),
              SingleMasterChannelEndpointConfiguration: z
                .object({
                  Protocols: ListOfProtocolsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'This property is used to determine the nature of communication over this <code>SINGLE_MASTER</code> signaling channel. If <code>WSS</code> is specified, this API returns a websocket endpoint. If <code>HTTPS</code> is specified, this API returns an <code>HTTPS</code> endpoint.',
                      }),
                  ).exactOptional(),
                  Role: ChannelRoleSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'This property is used to determine messaging permissions in this <code>SINGLE_MASTER</code> signaling channel. If <code>MASTER</code> is specified, this API returns an endpoint that a client can use to receive offers from and send answers to any of the viewers on this signaling channel. If <code>VIEWER</code> is specified, this API returns an endpoint that a client can use only to send offers to another <code>MASTER</code> client on this signaling channel. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type. ',
                  required: [],
                }),
            })
            .openapi({ required: ['ChannelARN'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSignalingChannelEndpointOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postListSignalingChannelsRoute = createRoute({
  method: 'post',
  path: '/listSignalingChannels',
  description:
    'Returns an array of <code>ChannelInfo</code> objects. Each object describes a signaling channel. To retrieve only those channels that satisfy a specific condition, you can specify a <code>ChannelNameCondition</code>.',
  operationId: 'ListSignalingChannels',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MaxResults: z
                .int()
                .min(1)
                .max(10000)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of channels to return in the response. The default is 500.',
                }),
              NextToken: z
                .string()
                .regex(/[a-zA-Z0-9+\/=]*/)
                .min(0)
                .max(512)
                .exactOptional()
                .openapi({
                  description:
                    'If you specify this parameter, when the result of a <code>ListSignalingChannels</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of channels, provide this token in your next request.',
                }),
              ChannelNameCondition: z
                .object({
                  ComparisonOperator: ComparisonOperatorSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A comparison operator. Currently, you can only specify the <code>BEGINS_WITH</code> operator, which finds signaling channels whose names begin with a given prefix.',
                      }),
                  ).exactOptional(),
                  ComparisonValue: ChannelNameSchema.and(
                    z.any().openapi({ description: 'A value to compare.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>.',
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
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSignalingChannelsOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postListStreamsRoute = createRoute({
  method: 'post',
  path: '/listStreams',
  description:
    'Returns an array of <code>StreamInfo</code> objects. Each object describes a stream. To retrieve only streams that satisfy a specific condition, you can specify a <code>StreamNameCondition</code>. ',
  operationId: 'ListStreams',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MaxResults: z
                .int()
                .min(1)
                .max(10000)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of streams to return in the response. The default is 10,000.',
                }),
              NextToken: z
                .string()
                .regex(/[a-zA-Z0-9+\/=]*/)
                .min(0)
                .max(512)
                .exactOptional()
                .openapi({
                  description:
                    'If you specify this parameter, when the result of a <code>ListStreams</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of streams, provide this token in your next request.',
                }),
              StreamNameCondition: z
                .object({
                  ComparisonOperator: ComparisonOperatorSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A comparison operator. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix.',
                      }),
                  ).exactOptional(),
                  ComparisonValue: StreamNameSchema.and(
                    z.any().openapi({ description: 'A value to compare.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix. ',
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
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStreamsOutputSchema } },
    },
    480: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
  },
})

export const postListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/ListTagsForResource',
  description: 'Returns a list of tags associated with the specified signaling channel.',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .regex(/[a-zA-Z0-9+\/=]*/)
                .min(0)
                .max(512)
                .exactOptional()
                .openapi({
                  description:
                    'If you specify this parameter and the result of a <code>ListTagsForResource</code> call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags. ',
                }),
              ResourceARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the signaling channel for which you want to list tags.',
                }),
            })
            .openapi({ required: ['ResourceARN'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postListTagsForStreamRoute = createRoute({
  method: 'post',
  path: '/listTagsForStream',
  description:
    '<p>Returns a list of tags associated with the specified stream.</p> <p>In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>',
  operationId: 'ListTagsForStream',
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
              NextToken: z
                .string()
                .regex(/[a-zA-Z0-9+\/=]*/)
                .min(0)
                .max(512)
                .exactOptional()
                .openapi({
                  description:
                    'If you specify this parameter and the result of a <code>ListTagsForStream</code> call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags.',
                }),
              StreamARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the stream that you want to list tags for.',
                }),
              StreamName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The name of the stream that you want to list tags for.' }),
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
      content: { 'application/json': { schema: ListTagsForStreamOutputSchema } },
    },
    480: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'InvalidResourceFormatException',
      content: { 'application/json': { schema: InvalidResourceFormatExceptionSchema } },
    },
  },
})

export const postStartEdgeConfigurationUpdateRoute = createRoute({
  method: 'post',
  path: '/startEdgeConfigurationUpdate',
  description:
    '<p>An asynchronous API that updates a stream’s existing edge configuration. The Kinesis Video Stream will sync the stream’s edge configuration with the Edge Agent IoT Greengrass component that runs on an IoT Hub Device, setup at your premise. The time to sync can vary and depends on the connectivity of the Hub Device. The <code>SyncStatus</code> will be updated as the edge configuration is acknowledged, and synced with the Edge Agent. </p> <p>If this API is invoked for the first time, a new edge configuration will be created for the stream, and the sync status will be set to <code>SYNCING</code>. You will have to wait for the sync status to reach a terminal state such as: <code>IN_SYNC</code>, or <code>SYNC_FAILED</code>, before using this API again. If you invoke this API during the syncing process, a <code>ResourceInUseException</code> will be thrown. The connectivity of the stream’s edge configuration and the Edge Agent will be retried for 15 minutes. After 15 minutes, the status will transition into the <code>SYNC_FAILED</code> state.</p>',
  operationId: 'StartEdgeConfigurationUpdate',
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
              StreamName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'The name of the stream whose edge configuration you want to update. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
                }),
              StreamARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    ' The Amazon Resource Name (ARN) of the stream. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
                }),
              EdgeConfig: z
                .object({
                  HubDeviceArn: HubDeviceArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The "<b>Internet of Things (IoT) Thing</b>" Arn of the stream.',
                      }),
                  ).exactOptional(),
                  RecorderConfig: RecorderConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The recorder configuration consists of the local <code>MediaSourceConfig</code> details, that are used as credentials to access the local media files streamed on the camera. ',
                      }),
                  ).exactOptional(),
                  UploaderConfig: UploaderConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The uploader configuration contains the <code>ScheduleExpression</code> details that are used to schedule upload jobs for the recorded media files from the Edge Agent to a Kinesis Video Stream.',
                      }),
                  ).exactOptional(),
                  DeletionConfig: DeletionConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The deletion configuration is made up of the retention time (<code>EdgeRetentionInHours</code>) and local size configuration (<code>LocalSizeConfig</code>) details that are used to make the deletion.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    "A description of the stream's edge configuration that will be used to sync with the Edge Agent IoT Greengrass component. The Edge Agent component will run on an IoT Hub Device setup at your premise.",
                  required: [],
                }),
            })
            .openapi({ required: ['EdgeConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartEdgeConfigurationUpdateOutputSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    483: {
      description: 'NoDataRetentionException',
      content: { 'application/json': { schema: NoDataRetentionExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postTagResourceRoute = createRoute({
  method: 'post',
  path: '/TagResource',
  description:
    'Adds one or more tags to a signaling channel. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>.',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ResourceARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the signaling channel to which you want to add tags.',
                }),
              Tags: z
                .array(TagSchema)
                .min(1)
                .max(50)
                .openapi({
                  description:
                    'A list of tags to associate with the specified signaling channel. Each tag is a key-value pair.',
                }),
            })
            .openapi({ required: ['ResourceARN', 'Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'TagsPerResourceExceededLimitException',
      content: { 'application/json': { schema: TagsPerResourceExceededLimitExceptionSchema } },
    },
  },
})

export const postTagStreamRoute = createRoute({
  method: 'post',
  path: '/tagStream',
  description:
    '<p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>. </p> <p>You must provide either the <code>StreamName</code> or the <code>StreamARN</code>.</p> <p>This operation requires permission for the <code>KinesisVideo:TagStream</code> action.</p> <p>A Kinesis video stream can support up to 50 tags.</p>',
  operationId: 'TagStream',
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
              StreamARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the resource that you want to add the tag or tags to.',
                }),
              StreamName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description: 'The name of the stream that you want to add the tag or tags to.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({
                  description:
                    'A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional).',
                }),
            })
            .openapi({ required: ['Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagStreamOutputSchema } },
    },
    480: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'InvalidResourceFormatException',
      content: { 'application/json': { schema: InvalidResourceFormatExceptionSchema } },
    },
    485: {
      description: 'TagsPerResourceExceededLimitException',
      content: { 'application/json': { schema: TagsPerResourceExceededLimitExceptionSchema } },
    },
  },
})

export const postUntagResourceRoute = createRoute({
  method: 'post',
  path: '/UntagResource',
  description:
    "Removes one or more tags from a signaling channel. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.",
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ResourceARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the signaling channel from which you want to remove tags.',
                }),
              TagKeyList: z
                .array(TagKeySchema)
                .min(1)
                .max(50)
                .openapi({
                  description: 'A list of the keys of the tags that you want to remove.',
                }),
            })
            .openapi({ required: ['ResourceARN', 'TagKeyList'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postUntagStreamRoute = createRoute({
  method: 'post',
  path: '/untagStream',
  description:
    "<p>Removes one or more tags from a stream. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.</p> <p>In the request, you must provide the <code>StreamName</code> or <code>StreamARN</code>.</p>",
  operationId: 'UntagStream',
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
              StreamARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the stream that you want to remove tags from.',
                }),
              StreamName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description: 'The name of the stream that you want to remove tags from.',
                }),
              TagKeyList: z
                .array(TagKeySchema)
                .min(1)
                .max(50)
                .openapi({
                  description: 'A list of the keys of the tags that you want to remove.',
                }),
            })
            .openapi({ required: ['TagKeyList'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagStreamOutputSchema } },
    },
    480: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'InvalidResourceFormatException',
      content: { 'application/json': { schema: InvalidResourceFormatExceptionSchema } },
    },
  },
})

export const postUpdateDataRetentionRoute = createRoute({
  method: 'post',
  path: '/updateDataRetention',
  description:
    "<p> Increases or decreases the stream's data retention period by the value that you specify. To indicate whether you want to increase or decrease the data retention period, specify the <code>Operation</code> parameter in the request body. In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p> <note> <p>The retention period that you specify replaces the current value.</p> </note> <p>This operation requires permission for the <code>KinesisVideo:UpdateDataRetention</code> action.</p> <p>Changing the data retention period affects the data in the stream as follows:</p> <ul> <li> <p>If the data retention period is increased, existing data is retained for the new retention period. For example, if the data retention period is increased from one hour to seven hours, all existing data is retained for seven hours.</p> </li> <li> <p>If the data retention period is decreased, existing data is retained for the new retention period. For example, if the data retention period is decreased from seven hours to one hour, all existing data is retained for one hour, and any data older than one hour is deleted immediately.</p> </li> </ul>",
  operationId: 'UpdateDataRetention',
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
              StreamName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description: 'The name of the stream whose retention period you want to change.',
                }),
              StreamARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the stream whose retention period you want to change.',
                }),
              CurrentVersion: z
                .string()
                .regex(/[a-zA-Z0-9]+/)
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'The version of the stream whose retention period you want to change. To get the version, call either the <code>DescribeStream</code> or the <code>ListStreams</code> API.',
                }),
              Operation: z
                .enum(['INCREASE_DATA_RETENTION', 'DECREASE_DATA_RETENTION'])
                .openapi({
                  description:
                    'Indicates whether you want to increase or decrease the retention period.',
                }),
              DataRetentionChangeInHours: z
                .int()
                .min(1)
                .openapi({
                  description:
                    'The retention period, in hours. The value you specify replaces the current value. The maximum value for this parameter is 87600 (ten years).',
                }),
            })
            .openapi({ required: ['CurrentVersion', 'Operation', 'DataRetentionChangeInHours'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDataRetentionOutputSchema } },
    },
    480: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    485: {
      description: 'VersionMismatchException',
      content: { 'application/json': { schema: VersionMismatchExceptionSchema } },
    },
  },
})

export const postUpdateImageGenerationConfigurationRoute = createRoute({
  method: 'post',
  path: '/updateImageGenerationConfiguration',
  description:
    'Updates the <code>StreamInfo</code> and <code>ImageProcessingConfiguration</code> fields.',
  operationId: 'UpdateImageGenerationConfiguration',
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
              StreamName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'The name of the stream from which to update the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
                }),
              StreamARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
                }),
              ImageGenerationConfiguration: z
                .object({
                  Status: ConfigurationStatusSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Indicates whether the <code>ContinuousImageGenerationConfigurations</code> API is enabled or disabled.',
                      }),
                  ).exactOptional(),
                  ImageSelectorType: ImageSelectorTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The origin of the Server or Producer timestamps to use to generate the images.',
                      }),
                  ).exactOptional(),
                  DestinationConfig: ImageGenerationDestinationConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The structure that contains the information required to deliver images to a customer.',
                      }),
                  ).exactOptional(),
                  SamplingInterval: SamplingIntervalSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The time interval in milliseconds (ms) at which the images need to be generated from the stream. The minimum value that can be provided is 33 ms, because a camera that generates content at 30 FPS would create a frame every 33.3 ms. If the timestamp range is less than the sampling interval, the Image from the <code>StartTimestamp</code> will be returned if available. ',
                      }),
                  ).exactOptional(),
                  Format: FormatSchema.and(
                    z.any().openapi({ description: 'The accepted image format.' }),
                  ).exactOptional(),
                  FormatConfig: FormatConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The list of a key-value pair structure that contains extra parameters that can be applied when the image is generated. The <code>FormatConfig</code> key is the <code>JPEGQuality</code>, which indicates the JPEG quality key to be used to generate the image. The <code>FormatConfig</code> value accepts ints from 1 to 100. If the value is 1, the image will be generated with less quality and the best compression. If the value is 100, the image will be generated with the best quality and less compression. If no value is provided, the default value of the <code>JPEGQuality</code> key will be set to 80.',
                      }),
                  ).exactOptional(),
                  WidthPixels: WidthPixelsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The width of the output image that is used in conjunction with the <code>HeightPixels</code> parameter. When both <code>WidthPixels</code> and <code>HeightPixels</code> parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the <code>WidthPixels</code> parameter is provided, its original aspect ratio will be used to calculate the <code>HeightPixels</code> ratio. If neither parameter is provided, the original image size will be returned.',
                      }),
                  ).exactOptional(),
                  HeightPixels: HeightPixelsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The height of the output image that is used in conjunction with the <code>WidthPixels</code> parameter. When both <code>HeightPixels</code> and <code>WidthPixels</code> parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the <code>HeightPixels</code> parameter is provided, its original aspect ratio will be used to calculate the <code>WidthPixels</code> ratio. If neither parameter is provided, the original image size will be returned.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The structure that contains the information required for the KVS images delivery. If null, the configuration will be deleted from the stream.',
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
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateImageGenerationConfigurationOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'NoDataRetentionException',
      content: { 'application/json': { schema: NoDataRetentionExceptionSchema } },
    },
  },
})

export const postUpdateMediaStorageConfigurationRoute = createRoute({
  method: 'post',
  path: '/updateMediaStorageConfiguration',
  description:
    '<p>Associates a <code>SignalingChannel</code> to a stream to store the media. There are two signaling modes that can specified :</p> <ul> <li> <p>If the <code>StorageStatus</code> is disabled, no data will be stored, and the <code>StreamARN</code> parameter will not be needed. </p> </li> <li> <p>If the <code>StorageStatus</code> is enabled, the data will be stored in the <code>StreamARN</code> provided. </p> </li> </ul>',
  operationId: 'UpdateMediaStorageConfiguration',
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
              ChannelARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .openapi({ description: 'The Amazon Resource Name (ARN) of the channel.' }),
              MediaStorageConfiguration: z
                .object({
                  StreamARN: ResourceARNSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The Amazon Resource Name (ARN) of the stream ' }),
                  ).exactOptional(),
                  Status: MediaStorageConfigurationStatusSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The status of the media storage configuration.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'A structure that encapsulates, or contains, the media storage configuration properties.',
                  required: [],
                }),
            })
            .openapi({ required: ['ChannelARN', 'MediaStorageConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateMediaStorageConfigurationOutputSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'NoDataRetentionException',
      content: { 'application/json': { schema: NoDataRetentionExceptionSchema } },
    },
  },
})

export const postUpdateNotificationConfigurationRoute = createRoute({
  method: 'post',
  path: '/updateNotificationConfiguration',
  description: 'Updates the notification information for a stream.',
  operationId: 'UpdateNotificationConfiguration',
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
              StreamName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'The name of the stream from which to update the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
                }),
              StreamARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
                }),
              NotificationConfiguration: z
                .object({
                  Status: ConfigurationStatusSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Indicates if a notification configuration is enabled or disabled.',
                      }),
                  ).exactOptional(),
                  DestinationConfig: NotificationDestinationConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The destination information required to deliver a notification to a customer.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The structure that contains the notification information for the KVS images delivery. If this parameter is null, the configuration will be deleted from the stream.',
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
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateNotificationConfigurationOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'NoDataRetentionException',
      content: { 'application/json': { schema: NoDataRetentionExceptionSchema } },
    },
  },
})

export const postUpdateSignalingChannelRoute = createRoute({
  method: 'post',
  path: '/updateSignalingChannel',
  description:
    "<p>Updates the existing signaling channel. This is an asynchronous operation and takes time to complete. </p> <p>If the <code>MessageTtlSeconds</code> value is updated (either increased or reduced), it only applies to new messages sent via this channel after it's been updated. Existing messages are still expired as per the previous <code>MessageTtlSeconds</code> value.</p>",
  operationId: 'UpdateSignalingChannel',
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
              ChannelARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the signaling channel that you want to update.',
                }),
              CurrentVersion: z
                .string()
                .regex(/[a-zA-Z0-9]+/)
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'The current version of the signaling channel that you want to update.',
                }),
              SingleMasterConfiguration: z
                .object({
                  MessageTtlSeconds: MessageTtlSecondsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The period of time a signaling channel retains undelivered messages before they are discarded.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.',
                  required: [],
                }),
            })
            .openapi({ required: ['ChannelARN', 'CurrentVersion'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSignalingChannelOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'VersionMismatchException',
      content: { 'application/json': { schema: VersionMismatchExceptionSchema } },
    },
  },
})

export const postUpdateStreamRoute = createRoute({
  method: 'post',
  path: '/updateStream',
  description:
    '<p>Updates stream metadata, such as the device name and media type.</p> <p>You must provide the stream name or the Amazon Resource Name (ARN) of the stream.</p> <p>To make sure that you have the latest version of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p> <code>UpdateStream</code> is an asynchronous operation, and takes time to complete.</p>',
  operationId: 'UpdateStream',
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
              StreamName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The name of the stream whose metadata you want to update.</p> <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>',
                }),
              StreamARN: z
                .string()
                .regex(
                  /arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/,
                )
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description: 'The ARN of the stream whose metadata you want to update.',
                }),
              CurrentVersion: z
                .string()
                .regex(/[a-zA-Z0-9]+/)
                .min(1)
                .max(64)
                .openapi({
                  description: 'The version of the stream whose metadata you want to update.',
                }),
              DeviceName: z
                .string()
                .regex(/[a-zA-Z0-9_.-]+/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The name of the device that is writing to the stream. </p> <note> <p> In the current implementation, Kinesis Video Streams does not use this name. </p> </note>',
                }),
              MediaType: z
                .string()
                .regex(/[\w\-\.\+]+\/[\w\-\.\+]+(,[\w\-\.\+]+\/[\w\-\.\+]+)*/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The stream\'s media type. Use <code>MediaType</code> to specify the type of content that the stream contains to the consumers of the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a>.</p> <p>To play video on the console, you must specify the correct video type. For example, if the video in the stream is H.264, specify <code>video/h264</code> as the <code>MediaType</code>.</p>',
                }),
            })
            .openapi({ required: ['CurrentVersion'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateStreamOutputSchema } },
    },
    480: {
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    485: {
      description: 'VersionMismatchException',
      content: { 'application/json': { schema: VersionMismatchExceptionSchema } },
    },
  },
})
