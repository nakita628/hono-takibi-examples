import { createRoute, z } from '@hono/zod-openapi'

const S3DestinationBucketNameSchema = z
  .string()
  .regex(/^[a-z0-9-.]+$/)
  .min(3)
  .max(63)
  .openapi('S3DestinationBucketName')

const S3DestinationConfigurationSchema = z
  .object({
    bucketName: S3DestinationBucketNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Location (S3 bucket name) where recorded videos will be stored.',
        }),
    ),
  })
  .openapi({
    required: ['bucketName'],
    description:
      'A complex type that describes an S3 location where recorded videos will be stored.',
  })
  .openapi('S3DestinationConfiguration')

type DestinationConfigurationType = {
  s3?: z.infer<typeof S3DestinationConfigurationSchema> & { [key: string]: unknown }
}

const ChannelArnSchema = z
  .string()
  .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel\/[a-zA-Z0-9-]+$/)
  .min(1)
  .max(128)
  .openapi('ChannelArn')

const IsAuthorizedSchema = z.boolean().openapi('IsAuthorized')

const IngestEndpointSchema = z.string().openapi('IngestEndpoint')

const InsecureIngestSchema = z.boolean().openapi('InsecureIngest')

const ChannelLatencyModeSchema = z.enum(['NORMAL', 'LOW']).openapi('ChannelLatencyMode')

const ChannelNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_]*$/)
  .min(0)
  .max(128)
  .openapi('ChannelName')

const PlaybackURLSchema = z.string().openapi('PlaybackURL')

const ChannelRecordingConfigurationArnSchema = z
  .string()
  .regex(/^$|^arn:aws:ivs:[a-z0-9-]+:[0-9]+:recording-configuration\/[a-zA-Z0-9-]+$/)
  .min(0)
  .max(128)
  .openapi('ChannelRecordingConfigurationArn')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagsSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('Tags')

const ChannelTypeSchema = z.enum(['BASIC', 'STANDARD']).openapi('ChannelType')

const ChannelSchema = z
  .object({
    arn: ChannelArnSchema.and(z.any().openapi({ description: 'Channel ARN.' })).exactOptional(),
    authorized: IsAuthorizedSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the channel is private (enabled for playback authorization). Default: <code>false</code>.',
        }),
    ).exactOptional(),
    ingestEndpoint: IngestEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'Channel ingest endpoint, part of the definition of an ingest server, used when you set up streaming software.',
        }),
    ).exactOptional(),
    insecureIngest: InsecureIngestSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the channel allows insecure RTMP ingest. Default: <code>false</code>.',
        }),
    ).exactOptional(),
    latencyMode: ChannelLatencyModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. Default: <code>LOW</code>. (Note: In the Amazon IVS console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and Standard, respectively.)',
        }),
    ).exactOptional(),
    name: ChannelNameSchema.and(z.any().openapi({ description: 'Channel name.' })).exactOptional(),
    playbackUrl: PlaybackURLSchema.and(
      z.any().openapi({ description: 'Channel playback URL.' }),
    ).exactOptional(),
    recordingConfigurationArn: ChannelRecordingConfigurationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Recording-configuration ARN. A value other than an empty string indicates that recording is enabled. Default: "" (empty string, recording is disabled).',
        }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.',
        }),
    ).exactOptional(),
    type: ChannelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Channel type, which determines the allowable resolution and bitrate. <i>If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.</i> Default: <code>STANDARD</code>. Valid values:</p> <ul> <li> <p> <code>STANDARD</code>: Video is transcoded: multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Transcoding allows higher playback quality across a range of download speeds. Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is transcoded only for renditions 360p and below; above that, audio is passed through. This is the default.</p> </li> <li> <p> <code>BASIC</code>: Video is transmuxed: Amazon IVS delivers the original input to viewers. The viewer’s video-quality choice is limited to the original input. Resolution can be up to 1080p and bitrate can be up to 1.5 Mbps for 480p and up to 3.5 Mbps for resolutions between 480p and 1080p.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Object specifying a channel.', required: [] })
  .openapi('Channel')

const ChannelsSchema = z.array(ChannelSchema).openapi('Channels')

const ResourceArnSchema = z
  .string()
  .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:[a-z-]\/[a-zA-Z0-9-]+$/)
  .min(1)
  .max(128)
  .openapi('ResourceArn')

const ErrorCodeSchema = z.string().openapi('ErrorCode')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const BatchErrorSchema = z
  .object({
    arn: ResourceArnSchema.and(z.any().openapi({ description: 'Channel ARN.' })).exactOptional(),
    code: ErrorCodeSchema.and(z.any().openapi({ description: 'Error code.' })).exactOptional(),
    message: ErrorMessageSchema.and(
      z.any().openapi({ description: 'Error message, determined by the application.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Error related to a specific channel, specified by its ARN.',
    required: [],
  })
  .openapi('BatchError')

const BatchErrorsSchema = z.array(BatchErrorSchema).openapi('BatchErrors')

const BatchGetChannelResponseSchema = z
  .object({
    channels: ChannelsSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    errors: BatchErrorsSchema.and(
      z
        .any()
        .openapi({ description: 'Each error object is related to a specific ARN in the request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetChannelResponse')

const StreamKeyArnSchema = z
  .string()
  .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:stream-key\/[a-zA-Z0-9-]+$/)
  .min(1)
  .max(128)
  .openapi('StreamKeyArn')

const StreamKeyValueSchema = z.string().openapi('StreamKeyValue')

const StreamKeySchema = z
  .object({
    arn: StreamKeyArnSchema.and(
      z.any().openapi({ description: 'Stream-key ARN.' }),
    ).exactOptional(),
    channelArn: ChannelArnSchema.and(
      z.any().openapi({ description: 'Channel ARN for the stream.' }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.',
        }),
    ).exactOptional(),
    value: StreamKeyValueSchema.and(
      z.any().openapi({ description: 'Stream-key value.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Object specifying a stream key.', required: [] })
  .openapi('StreamKey')

const StreamKeysSchema = z.array(StreamKeySchema).openapi('StreamKeys')

const BatchGetStreamKeyResponseSchema = z
  .object({
    errors: BatchErrorsSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    streamKeys: StreamKeysSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetStreamKeyResponse')

const CreateChannelResponseSchema = z
  .object({
    channel: ChannelSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    streamKey: StreamKeySchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateChannelResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const PendingVerificationSchema = z.any().openapi('PendingVerification')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const RecordingConfigurationArnSchema = z
  .string()
  .regex(/^arn:aws:ivs:[a-z0-9-]+:[0-9]+:recording-configuration\/[a-zA-Z0-9-]+$/)
  .min(0)
  .max(128)
  .openapi('RecordingConfigurationArn')

const DestinationConfigurationSchema: z.ZodType<DestinationConfigurationType> = z
  .lazy(() =>
    z
      .object({
        s3: S3DestinationConfigurationSchema.and(
          z
            .any()
            .openapi({
              description: 'An S3 destination configuration where recorded videos will be stored.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.',
        required: [],
      }),
  )
  .openapi('DestinationConfiguration')

const RecordingConfigurationNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_]*$/)
  .min(0)
  .max(128)
  .openapi('RecordingConfigurationName')

const RecordingReconnectWindowSecondsSchema = z
  .int()
  .min(0)
  .max(300)
  .openapi('RecordingReconnectWindowSeconds')

const RecordingConfigurationStateSchema = z
  .enum(['CREATING', 'CREATE_FAILED', 'ACTIVE'])
  .openapi('RecordingConfigurationState')

const RecordingModeSchema = z.enum(['DISABLED', 'INTERVAL']).openapi('RecordingMode')

const TargetIntervalSecondsSchema = z.int().min(1).max(60).openapi('TargetIntervalSeconds')

const ThumbnailConfigurationSchema = z
  .object({
    recordingMode: RecordingModeSchema.and(
      z.any().openapi({ description: 'Thumbnail recording mode. Default: <code>INTERVAL</code>.' }),
    ).exactOptional(),
    targetIntervalSeconds: TargetIntervalSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The targeted thumbnail-generation interval in seconds. This is configurable (and required) only if <code>recordingMode</code> is <code>INTERVAL</code>. Default: 60.</p> <p> <b>Important:</b> Setting a value for <code>targetIntervalSeconds</code> does not guarantee that thumbnails are generated at the specified interval. For thumbnails to be generated at the <code>targetIntervalSeconds</code> interval, the <code>IDR/Keyframe</code> value for the input video must be less than the <code>targetIntervalSeconds</code> value. See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/streaming-config.html"> Amazon IVS Streaming Configuration</a> for information on setting <code>IDR/Keyframe</code> to the recommended value in video-encoder settings.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing a configuration of thumbnails for recorded video.',
    required: [],
  })
  .openapi('ThumbnailConfiguration')

const RecordingConfigurationSchema = z
  .object({
    arn: RecordingConfigurationArnSchema.and(
      z.any().openapi({ description: 'Recording-configuration ARN.' }),
    ),
    destinationConfiguration: DestinationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about where recorded video will be stored.',
        }),
    ),
    name: RecordingConfigurationNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Recording-configuration name. The value does not need to be unique.',
        }),
    ).exactOptional(),
    recordingReconnectWindowSeconds: RecordingReconnectWindowSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a broadcast disconnects and then reconnects within the specified interval, the multiple streams will be considered a single broadcast and merged together. Default: 0.',
        }),
    ).exactOptional(),
    state: RecordingConfigurationStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the current state of the recording configuration. When the state is <code>ACTIVE</code>, the configuration is ready for recording a channel stream.',
        }),
    ),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.',
        }),
    ).exactOptional(),
    thumbnailConfiguration: ThumbnailConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that allows you to enable/disable the recording of thumbnails for a live session and modify the interval at which thumbnails are generated for the live session.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn', 'destinationConfiguration', 'state'],
    description: 'An object representing a configuration to record a channel stream.',
  })
  .openapi('RecordingConfiguration')

const CreateRecordingConfigurationResponseSchema = z
  .object({
    recordingConfiguration: RecordingConfigurationSchema.and(
      z.any().openapi({ description: '<zonbook></zonbook><xhtml></xhtml>' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRecordingConfigurationResponse')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const CreateStreamKeyResponseSchema = z
  .object({
    streamKey: StreamKeySchema.and(
      z
        .any()
        .openapi({ description: 'Stream key used to authenticate an RTMPS stream for ingestion.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateStreamKeyResponse')

const DeletePlaybackKeyPairResponseSchema = z.object({}).openapi('DeletePlaybackKeyPairResponse')

const GetChannelResponseSchema = z
  .object({ channel: ChannelSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional() })
  .openapi({ required: [] })
  .openapi('GetChannelResponse')

const PlaybackKeyPairArnSchema = z
  .string()
  .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:playback-key\/[a-zA-Z0-9-]+$/)
  .min(1)
  .max(128)
  .openapi('PlaybackKeyPairArn')

const PlaybackKeyPairFingerprintSchema = z.string().openapi('PlaybackKeyPairFingerprint')

const PlaybackKeyPairNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_]*$/)
  .min(0)
  .max(128)
  .openapi('PlaybackKeyPairName')

const PlaybackKeyPairSchema = z
  .object({
    arn: PlaybackKeyPairArnSchema.and(
      z.any().openapi({ description: 'Key-pair ARN.' }),
    ).exactOptional(),
    fingerprint: PlaybackKeyPairFingerprintSchema.and(
      z.any().openapi({ description: 'Key-pair identifier.' }),
    ).exactOptional(),
    name: PlaybackKeyPairNameSchema.and(
      z
        .any()
        .openapi({ description: 'Playback-key-pair name. The value does not need to be unique.' }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A key pair used to sign and validate a playback authorization token.',
    required: [],
  })
  .openapi('PlaybackKeyPair')

const GetPlaybackKeyPairResponseSchema = z
  .object({
    keyPair: PlaybackKeyPairSchema.and(
      z.any().openapi({ description: '<zonbook></zonbook><xhtml></xhtml>' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPlaybackKeyPairResponse')

const GetRecordingConfigurationResponseSchema = z
  .object({
    recordingConfiguration: RecordingConfigurationSchema.and(
      z.any().openapi({ description: '<zonbook></zonbook><xhtml></xhtml>' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRecordingConfigurationResponse')

const StreamHealthSchema = z.enum(['HEALTHY', 'STARVING', 'UNKNOWN']).openapi('StreamHealth')

const StreamStartTimeSchema = z.iso.datetime({ offset: true }).openapi('StreamStartTime')

const StreamStateSchema = z.enum(['LIVE', 'OFFLINE']).openapi('StreamState')

const StreamIdSchema = z
  .string()
  .regex(/^st-[a-zA-Z0-9]+$/)
  .length(26)
  .openapi('StreamId')

const StreamViewerCountSchema = z.int().openapi('StreamViewerCount')

const StreamSchema = z
  .object({
    channelArn: ChannelArnSchema.and(
      z.any().openapi({ description: 'Channel ARN for the stream.' }),
    ).exactOptional(),
    health: StreamHealthSchema.and(
      z.any().openapi({ description: 'The stream’s health.' }),
    ).exactOptional(),
    playbackUrl: PlaybackURLSchema.and(
      z
        .any()
        .openapi({
          description:
            'URL of the master playlist, required by the video player to play the HLS stream.',
        }),
    ).exactOptional(),
    startTime: StreamStartTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time of the stream’s start. This is an ISO 8601 timestamp; <i>note that this is returned as a string</i>.',
        }),
    ).exactOptional(),
    state: StreamStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The stream’s state. Do not rely on the <code>OFFLINE</code> state, as the API may not return it; instead, a "NotBroadcasting" error will indicate that the stream is not live.',
        }),
    ).exactOptional(),
    streamId: StreamIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifier for a live or previously live stream in the specified channel.',
        }),
    ).exactOptional(),
    viewerCount: StreamViewerCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'A count of concurrent views of the stream. Typically, a new view appears in <code>viewerCount</code> within 15 seconds of when video playback starts and a view is removed from <code>viewerCount</code> within 1 minute of when video playback ends. A value of -1 indicates that the request timed out; in this case, retry.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies a live video stream that has been ingested and distributed.',
    required: [],
  })
  .openapi('Stream')

const GetStreamResponseSchema = z
  .object({ stream: StreamSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional() })
  .openapi({ required: [] })
  .openapi('GetStreamResponse')

const ChannelNotBroadcastingSchema = z.any().openapi('ChannelNotBroadcasting')

const GetStreamKeyResponseSchema = z
  .object({
    streamKey: StreamKeySchema.and(
      z.any().openapi({ description: '<zonbook></zonbook><xhtml></xhtml>' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetStreamKeyResponse')

const TimeSchema = z.iso.datetime({ offset: true }).openapi('Time')

const IntegerSchema = z.int().openapi('Integer')

const StringSchema = z.string().openapi('String')

const AudioConfigurationSchema = z
  .object({
    channels: IntegerSchema.and(
      z.any().openapi({ description: 'Number of audio channels.' }),
    ).exactOptional(),
    codec: StringSchema.and(
      z.any().openapi({ description: 'Codec used for the audio encoding.' }),
    ).exactOptional(),
    sampleRate: IntegerSchema.and(
      z.any().openapi({ description: 'Number of audio samples recorded per second.' }),
    ).exactOptional(),
    targetBitrate: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The expected ingest bitrate (bits per second). This is configured in the encoder.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Object specifying a stream’s audio configuration, as set up by the broadcaster (usually in an encoder). This is part of the <a>IngestConfiguration</a> object and used for monitoring stream health.',
    required: [],
  })
  .openapi('AudioConfiguration')

const VideoConfigurationSchema = z
  .object({
    avcLevel: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the degree of required decoder performance for a profile. Normally this is set automatically by the encoder. For details, see the H.264 specification.',
        }),
    ).exactOptional(),
    avcProfile: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates to the decoder the requirements for decoding the stream. For definitions of the valid values, see the H.264 specification.',
        }),
    ).exactOptional(),
    codec: StringSchema.and(
      z.any().openapi({ description: 'Codec used for the video encoding.' }),
    ).exactOptional(),
    encoder: StringSchema.and(
      z.any().openapi({ description: 'Software or hardware used to encode the video.' }),
    ).exactOptional(),
    targetBitrate: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The expected ingest bitrate (bits per second). This is configured in the encoder.',
        }),
    ).exactOptional(),
    targetFramerate: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The expected ingest framerate. This is configured in the encoder.',
        }),
    ).exactOptional(),
    videoHeight: IntegerSchema.and(
      z.any().openapi({ description: 'Video-resolution height in pixels.' }),
    ).exactOptional(),
    videoWidth: IntegerSchema.and(
      z.any().openapi({ description: 'Video-resolution width in pixels.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Object specifying a stream’s video configuration, as set up by the broadcaster (usually in an encoder). This is part of the <a>IngestConfiguration</a> object and used for monitoring stream health.',
    required: [],
  })
  .openapi('VideoConfiguration')

const IngestConfigurationSchema = z
  .object({
    audio: AudioConfigurationSchema.and(
      z.any().openapi({ description: 'Encoder settings for audio.' }),
    ).exactOptional(),
    video: VideoConfigurationSchema.and(
      z.any().openapi({ description: 'Encoder settings for video.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Object specifying the ingest configuration set up by the broadcaster, usually in an encoder.',
    required: [],
  })
  .openapi('IngestConfiguration')

const StreamEventSchema = z
  .object({
    eventTime: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time when the event occurred. This is an ISO 8601 timestamp; <i>note that this is returned as a string</i>.',
        }),
    ).exactOptional(),
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Name that identifies the stream event within a <code>type</code>.',
        }),
    ).exactOptional(),
    type: StringSchema.and(
      z.any().openapi({ description: 'Logical group for certain events.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Object specifying a stream’s events. For a list of events, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html">Using Amazon EventBridge with Amazon IVS</a>.',
    required: [],
  })
  .openapi('StreamEvent')

const StreamEventsSchema = z.array(StreamEventSchema).min(0).max(500).openapi('StreamEvents')

const StreamSessionSchema = z
  .object({
    channel: ChannelSchema.and(
      z.any().openapi({ description: 'The properties of the channel at the time of going live.' }),
    ).exactOptional(),
    endTime: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time when the channel went offline. This is an ISO 8601 timestamp; <i>note that this is returned as a string</i>. For live streams, this is <code>NULL</code>.',
        }),
    ).exactOptional(),
    ingestConfiguration: IngestConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'The properties of the incoming RTMP stream for the stream.' }),
    ).exactOptional(),
    recordingConfiguration: RecordingConfigurationSchema.and(
      z.any().openapi({ description: 'The properties of recording the live stream.' }),
    ).exactOptional(),
    startTime: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time when the channel went live. This is an ISO 8601 timestamp; <i>note that this is returned as a string</i>.',
        }),
    ).exactOptional(),
    streamId: StreamIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifier for a live or previously live stream in the specified channel.',
        }),
    ).exactOptional(),
    truncatedEvents: StreamEventsSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of Amazon IVS events that the stream encountered. The list is sorted by most recent events and contains up to 500 events. For Amazon IVS events, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html">Using Amazon EventBridge with Amazon IVS</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Object that captures the Amazon IVS configuration that the customer provisioned, the ingest configurations that the broadcaster used, and the most recent Amazon IVS stream events it encountered.',
    required: [],
  })
  .openapi('StreamSession')

const GetStreamSessionResponseSchema = z
  .object({
    streamSession: StreamSessionSchema.and(
      z.any().openapi({ description: 'List of stream details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetStreamSessionResponse')

const ImportPlaybackKeyPairResponseSchema = z
  .object({
    keyPair: PlaybackKeyPairSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportPlaybackKeyPairResponse')

const ChannelSummarySchema = z
  .object({
    arn: ChannelArnSchema.and(z.any().openapi({ description: 'Channel ARN.' })).exactOptional(),
    authorized: IsAuthorizedSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the channel is private (enabled for playback authorization). Default: <code>false</code>.',
        }),
    ).exactOptional(),
    insecureIngest: InsecureIngestSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the channel allows insecure RTMP ingest. Default: <code>false</code>.',
        }),
    ).exactOptional(),
    latencyMode: ChannelLatencyModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. Default: <code>LOW</code>. (Note: In the Amazon IVS console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and Standard, respectively.)',
        }),
    ).exactOptional(),
    name: ChannelNameSchema.and(z.any().openapi({ description: 'Channel name.' })).exactOptional(),
    recordingConfigurationArn: ChannelRecordingConfigurationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Recording-configuration ARN. A value other than an empty string indicates that recording is enabled. Default: "" (empty string, recording is disabled).',
        }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about a channel.', required: [] })
  .openapi('ChannelSummary')

const ChannelListSchema = z.array(ChannelSummarySchema).openapi('ChannelList')

const PaginationTokenSchema = z
  .string()
  .regex(/^[a-zA-Z0-9+\/=_-]*$/)
  .min(0)
  .max(1024)
  .openapi('PaginationToken')

const ListChannelsResponseSchema = z
  .object({
    channels: ChannelListSchema.and(
      z.any().openapi({ description: 'List of the matching channels.' }),
    ),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more channels than <code>maxResults</code>, use <code>nextToken</code> in the request to get the next set.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['channels'] })
  .openapi('ListChannelsResponse')

const PlaybackKeyPairSummarySchema = z
  .object({
    arn: PlaybackKeyPairArnSchema.and(
      z.any().openapi({ description: 'Key-pair ARN.' }),
    ).exactOptional(),
    name: PlaybackKeyPairNameSchema.and(
      z
        .any()
        .openapi({ description: 'Playback-key-pair name. The value does not need to be unique.' }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about a playback key pair.', required: [] })
  .openapi('PlaybackKeyPairSummary')

const PlaybackKeyPairListSchema = z
  .array(PlaybackKeyPairSummarySchema)
  .openapi('PlaybackKeyPairList')

const ListPlaybackKeyPairsResponseSchema = z
  .object({
    keyPairs: PlaybackKeyPairListSchema.and(z.any().openapi({ description: 'List of key pairs.' })),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more key pairs than <code>maxResults</code>, use <code>nextToken</code> in the request to get the next set.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['keyPairs'] })
  .openapi('ListPlaybackKeyPairsResponse')

const RecordingConfigurationSummarySchema = z
  .object({
    arn: RecordingConfigurationArnSchema.and(
      z.any().openapi({ description: 'Recording-configuration ARN.' }),
    ),
    destinationConfiguration: DestinationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about where recorded video will be stored.',
        }),
    ),
    name: RecordingConfigurationNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Recording-configuration name. The value does not need to be unique.',
        }),
    ).exactOptional(),
    state: RecordingConfigurationStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the current state of the recording configuration. When the state is <code>ACTIVE</code>, the configuration is ready for recording a channel stream.',
        }),
    ),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn', 'destinationConfiguration', 'state'],
    description: 'Summary information about a RecordingConfiguration.',
  })
  .openapi('RecordingConfigurationSummary')

const RecordingConfigurationListSchema = z
  .array(RecordingConfigurationSummarySchema)
  .openapi('RecordingConfigurationList')

const ListRecordingConfigurationsResponseSchema = z
  .object({
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more recording configurations than <code>maxResults</code>, use <code>nextToken</code> in the request to get the next set.',
        }),
    ).exactOptional(),
    recordingConfigurations: RecordingConfigurationListSchema.and(
      z.any().openapi({ description: 'List of the matching recording configurations.' }),
    ),
  })
  .openapi({ required: ['recordingConfigurations'] })
  .openapi('ListRecordingConfigurationsResponse')

const StreamKeySummarySchema = z
  .object({
    arn: StreamKeyArnSchema.and(
      z.any().openapi({ description: 'Stream-key ARN.' }),
    ).exactOptional(),
    channelArn: ChannelArnSchema.and(
      z.any().openapi({ description: 'Channel ARN for the stream.' }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about a stream key.', required: [] })
  .openapi('StreamKeySummary')

const StreamKeyListSchema = z.array(StreamKeySummarySchema).openapi('StreamKeyList')

const ListStreamKeysResponseSchema = z
  .object({
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more stream keys than <code>maxResults</code>, use <code>nextToken</code> in the request to get the next set.',
        }),
    ).exactOptional(),
    streamKeys: StreamKeyListSchema.and(z.any().openapi({ description: 'List of stream keys.' })),
  })
  .openapi({ required: ['streamKeys'] })
  .openapi('ListStreamKeysResponse')

const BooleanSchema = z.boolean().openapi('Boolean')

const StreamSessionSummarySchema = z
  .object({
    endTime: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time when the channel went offline. This is an ISO 8601 timestamp; <i>note that this is returned as a string</i>. For live streams, this is <code>NULL</code>.',
        }),
    ).exactOptional(),
    hasErrorEvent: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'If <code>true</code>, this stream encountered a quota breach or failure.',
        }),
    ).exactOptional(),
    startTime: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time when the channel went live. This is an ISO 8601 timestamp; <i>note that this is returned as a string</i>.',
        }),
    ).exactOptional(),
    streamId: StreamIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifier for a live or previously live stream in the specified channel.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about a stream session.', required: [] })
  .openapi('StreamSessionSummary')

const StreamSessionListSchema = z.array(StreamSessionSummarySchema).openapi('StreamSessionList')

const ListStreamSessionsResponseSchema = z
  .object({
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more streams than <code>maxResults</code>, use <code>nextToken</code> in the request to get the next set.',
        }),
    ).exactOptional(),
    streamSessions: StreamSessionListSchema.and(
      z.any().openapi({ description: 'List of stream sessions.' }),
    ),
  })
  .openapi({ required: ['streamSessions'] })
  .openapi('ListStreamSessionsResponse')

const StreamSummarySchema = z
  .object({
    channelArn: ChannelArnSchema.and(
      z.any().openapi({ description: 'Channel ARN for the stream.' }),
    ).exactOptional(),
    health: StreamHealthSchema.and(
      z.any().openapi({ description: 'The stream’s health.' }),
    ).exactOptional(),
    startTime: StreamStartTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time of the stream’s start. This is an ISO 8601 timestamp; <i>note that this is returned as a string</i>. ',
        }),
    ).exactOptional(),
    state: StreamStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The stream’s state. Do not rely on the <code>OFFLINE</code> state, as the API may not return it; instead, a "NotBroadcasting" error will indicate that the stream is not live.',
        }),
    ).exactOptional(),
    streamId: StreamIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifier for a live or previously live stream in the specified channel.',
        }),
    ).exactOptional(),
    viewerCount: StreamViewerCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'A count of concurrent views of the stream. Typically, a new view appears in <code>viewerCount</code> within 15 seconds of when video playback starts and a view is removed from <code>viewerCount</code> within 1 minute of when video playback ends. A value of -1 indicates that the request timed out; in this case, retry.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about a stream.', required: [] })
  .openapi('StreamSummary')

const StreamListSchema = z.array(StreamSummarySchema).openapi('StreamList')

const ListStreamsResponseSchema = z
  .object({
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more streams than <code>maxResults</code>, use <code>nextToken</code> in the request to get the next set.',
        }),
    ).exactOptional(),
    streams: StreamListSchema.and(z.any().openapi({ description: 'List of streams.' })),
  })
  .openapi({ required: ['streams'] })
  .openapi('ListStreamsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags attached to the resource. Array of maps, each of the form <code>string:string (key:value)</code>.',
        }),
    ),
  })
  .openapi({ required: ['tags'] })
  .openapi('ListTagsForResourceResponse')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const StopStreamResponseSchema = z.object({}).openapi('StopStreamResponse')

const StreamUnavailableSchema = z.any().openapi('StreamUnavailable')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const UpdateChannelResponseSchema = z
  .object({ channel: ChannelSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateChannelResponse')

const ChannelArnListSchema = z.array(ChannelArnSchema).min(1).max(50).openapi('ChannelArnList')

const BatchGetChannelRequestSchema = z
  .object({
    arns: ChannelArnListSchema.and(
      z.any().openapi({ description: 'Array of ARNs, one per channel.' }),
    ),
  })
  .openapi({ required: ['arns'], title: 'BatchGetChannelRequest' })
  .openapi('BatchGetChannelRequest')

const StreamKeyArnListSchema = z
  .array(StreamKeyArnSchema)
  .min(1)
  .max(50)
  .openapi('StreamKeyArnList')

const BatchGetStreamKeyRequestSchema = z
  .object({
    arns: StreamKeyArnListSchema.and(
      z.any().openapi({ description: 'Array of ARNs, one per stream key.' }),
    ),
  })
  .openapi({ required: ['arns'], title: 'BatchGetStreamKeyRequest' })
  .openapi('BatchGetStreamKeyRequest')

const CreateChannelRequestSchema = z
  .object({
    authorized: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the channel is private (enabled for playback authorization). Default: <code>false</code>.',
        }),
    ).exactOptional(),
    insecureIngest: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the channel allows insecure RTMP ingest. Default: <code>false</code>.',
        }),
    ).exactOptional(),
    latencyMode: ChannelLatencyModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. (Note: In the Amazon IVS console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and Standard, respectively.) Default: <code>LOW</code>.',
        }),
    ).exactOptional(),
    name: ChannelNameSchema.and(z.any().openapi({ description: 'Channel name.' })).exactOptional(),
    recordingConfigurationArn: ChannelRecordingConfigurationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Recording-configuration ARN. Default: "" (empty string, recording is disabled).',
        }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.',
        }),
    ).exactOptional(),
    type: ChannelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Channel type, which determines the allowable resolution and bitrate. <i>If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.</i> Default: <code>STANDARD</code>. Valid values:</p> <ul> <li> <p> <code>STANDARD</code>: Video is transcoded: multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Transcoding allows higher playback quality across a range of download speeds. Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is transcoded only for renditions 360p and below; above that, audio is passed through. This is the default.</p> </li> <li> <p> <code>BASIC</code>: Video is transmuxed: Amazon IVS delivers the original input to viewers. The viewer’s video-quality choice is limited to the original input. Resolution can be up to 1080p and bitrate can be up to 1.5 Mbps for 480p and up to 3.5 Mbps for resolutions between 480p and 1080p.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateChannelRequest', required: [] })
  .openapi('CreateChannelRequest')

const CreateRecordingConfigurationRequestSchema = z
  .object({
    destinationConfiguration: DestinationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains a destination configuration for where recorded video will be stored.',
        }),
    ),
    name: RecordingConfigurationNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Recording-configuration name. The value does not need to be unique.',
        }),
    ).exactOptional(),
    recordingReconnectWindowSeconds: RecordingReconnectWindowSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a broadcast disconnects and then reconnects within the specified interval, the multiple streams will be considered a single broadcast and merged together. Default: 0.',
        }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.',
        }),
    ).exactOptional(),
    thumbnailConfiguration: ThumbnailConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that allows you to enable/disable the recording of thumbnails for a live session and modify the interval at which thumbnails are generated for the live session.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['destinationConfiguration'], title: 'CreateRecordingConfigurationRequest' })
  .openapi('CreateRecordingConfigurationRequest')

const CreateStreamKeyRequestSchema = z
  .object({
    channelArn: ChannelArnSchema.and(
      z.any().openapi({ description: 'ARN of the channel for which to create the stream key.' }),
    ),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['channelArn'], title: 'CreateStreamKeyRequest' })
  .openapi('CreateStreamKeyRequest')

const DeleteChannelRequestSchema = z
  .object({
    arn: ChannelArnSchema.and(
      z.any().openapi({ description: 'ARN of the channel to be deleted.' }),
    ),
  })
  .openapi({ required: ['arn'], title: 'DeleteChannelRequest' })
  .openapi('DeleteChannelRequest')

const DeletePlaybackKeyPairRequestSchema = z
  .object({
    arn: PlaybackKeyPairArnSchema.and(
      z.any().openapi({ description: 'ARN of the key pair to be deleted.' }),
    ),
  })
  .openapi({ required: ['arn'], title: 'DeletePlaybackKeyPairRequest' })
  .openapi('DeletePlaybackKeyPairRequest')

const DeleteRecordingConfigurationRequestSchema = z
  .object({
    arn: RecordingConfigurationArnSchema.and(
      z.any().openapi({ description: 'ARN of the recording configuration to be deleted.' }),
    ),
  })
  .openapi({ required: ['arn'], title: 'DeleteRecordingConfigurationRequest' })
  .openapi('DeleteRecordingConfigurationRequest')

const DeleteStreamKeyRequestSchema = z
  .object({
    arn: StreamKeyArnSchema.and(
      z.any().openapi({ description: 'ARN of the stream key to be deleted.' }),
    ),
  })
  .openapi({ required: ['arn'], title: 'DeleteStreamKeyRequest' })
  .openapi('DeleteStreamKeyRequest')

const GetChannelRequestSchema = z
  .object({
    arn: ChannelArnSchema.and(
      z
        .any()
        .openapi({
          description: 'ARN of the channel for which the configuration is to be retrieved.',
        }),
    ),
  })
  .openapi({ required: ['arn'], title: 'GetChannelRequest' })
  .openapi('GetChannelRequest')

const GetPlaybackKeyPairRequestSchema = z
  .object({
    arn: PlaybackKeyPairArnSchema.and(
      z.any().openapi({ description: 'ARN of the key pair to be returned.' }),
    ),
  })
  .openapi({ required: ['arn'], title: 'GetPlaybackKeyPairRequest' })
  .openapi('GetPlaybackKeyPairRequest')

const GetRecordingConfigurationRequestSchema = z
  .object({
    arn: RecordingConfigurationArnSchema.and(
      z.any().openapi({ description: 'ARN of the recording configuration to be retrieved.' }),
    ),
  })
  .openapi({ required: ['arn'], title: 'GetRecordingConfigurationRequest' })
  .openapi('GetRecordingConfigurationRequest')

const GetStreamKeyRequestSchema = z
  .object({
    arn: StreamKeyArnSchema.and(
      z.any().openapi({ description: 'ARN for the stream key to be retrieved.' }),
    ),
  })
  .openapi({ required: ['arn'], title: 'GetStreamKeyRequest' })
  .openapi('GetStreamKeyRequest')

const GetStreamRequestSchema = z
  .object({
    channelArn: ChannelArnSchema.and(
      z.any().openapi({ description: 'Channel ARN for stream to be accessed.' }),
    ),
  })
  .openapi({ required: ['channelArn'], title: 'GetStreamRequest' })
  .openapi('GetStreamRequest')

const GetStreamSessionRequestSchema = z
  .object({
    channelArn: ChannelArnSchema.and(
      z.any().openapi({ description: 'ARN of the channel resource' }),
    ),
    streamId: StreamIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifier for a live or previously live stream in the specified channel. If no <code>streamId</code> is provided, this returns the most recent stream session for the channel, if it exists.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['channelArn'], title: 'GetStreamSessionRequest' })
  .openapi('GetStreamSessionRequest')

const PlaybackPublicKeyMaterialSchema = z.string().openapi('PlaybackPublicKeyMaterial')

const ImportPlaybackKeyPairRequestSchema = z
  .object({
    name: PlaybackKeyPairNameSchema.and(
      z
        .any()
        .openapi({ description: 'Playback-key-pair name. The value does not need to be unique.' }),
    ).exactOptional(),
    publicKeyMaterial: PlaybackPublicKeyMaterialSchema.and(
      z.any().openapi({ description: 'The public portion of a customer-generated key pair.' }),
    ),
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Any tags provided with the request are added to the playback key pair tags. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['publicKeyMaterial'], title: 'ImportPlaybackKeyPairRequest' })
  .openapi('ImportPlaybackKeyPairRequest')

const MaxChannelResultsSchema = z.int().min(1).max(100).openapi('MaxChannelResults')

const ListChannelsRequestSchema = z
  .object({
    filterByName: ChannelNameSchema.and(
      z.any().openapi({ description: 'Filters the channel list to match the specified name.' }),
    ).exactOptional(),
    filterByRecordingConfigurationArn: ChannelRecordingConfigurationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the channel list to match the specified recording-configuration ARN.',
        }),
    ).exactOptional(),
    maxResults: MaxChannelResultsSchema.and(
      z.any().openapi({ description: 'Maximum number of channels to return. Default: 100.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The first channel to retrieve. This is used for pagination; see the <code>nextToken</code> response field.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListChannelsRequest', required: [] })
  .openapi('ListChannelsRequest')

const MaxPlaybackKeyPairResultsSchema = z.int().min(1).max(100).openapi('MaxPlaybackKeyPairResults')

const ListPlaybackKeyPairsRequestSchema = z
  .object({
    maxResults: MaxPlaybackKeyPairResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of key pairs to return. Default: your service quota or 100, whichever is smaller.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The first key pair to retrieve. This is used for pagination; see the <code>nextToken</code> response field.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListPlaybackKeyPairsRequest', required: [] })
  .openapi('ListPlaybackKeyPairsRequest')

const MaxRecordingConfigurationResultsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('MaxRecordingConfigurationResults')

const ListRecordingConfigurationsRequestSchema = z
  .object({
    maxResults: MaxRecordingConfigurationResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of recording configurations to return. Default: your service quota or 100, whichever is smaller. ',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The first recording configuration to retrieve. This is used for pagination; see the <code>nextToken</code> response field.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListRecordingConfigurationsRequest', required: [] })
  .openapi('ListRecordingConfigurationsRequest')

const MaxStreamKeyResultsSchema = z.int().min(1).max(50).openapi('MaxStreamKeyResults')

const ListStreamKeysRequestSchema = z
  .object({
    channelArn: ChannelArnSchema.and(
      z.any().openapi({ description: 'Channel ARN used to filter the list.' }),
    ),
    maxResults: MaxStreamKeyResultsSchema.and(
      z.any().openapi({ description: 'Maximum number of streamKeys to return. Default: 1.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The first stream key to retrieve. This is used for pagination; see the <code>nextToken</code> response field.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['channelArn'], title: 'ListStreamKeysRequest' })
  .openapi('ListStreamKeysRequest')

const MaxStreamResultsSchema = z.int().min(1).max(100).openapi('MaxStreamResults')

const ListStreamSessionsRequestSchema = z
  .object({
    channelArn: ChannelArnSchema.and(
      z.any().openapi({ description: 'Channel ARN used to filter the list.' }),
    ),
    maxResults: MaxStreamResultsSchema.and(
      z.any().openapi({ description: 'Maximum number of streams to return. Default: 100.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The first stream to retrieve. This is used for pagination; see the <code>nextToken</code> response field.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['channelArn'], title: 'ListStreamSessionsRequest' })
  .openapi('ListStreamSessionsRequest')

const StreamFiltersSchema = z
  .object({
    health: StreamHealthSchema.and(
      z.any().openapi({ description: 'The stream’s health.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Object specifying the stream attribute on which to filter.',
    required: [],
  })
  .openapi('StreamFilters')

const ListStreamsRequestSchema = z
  .object({
    filterBy: StreamFiltersSchema.and(
      z.any().openapi({ description: 'Filters the stream list to match the specified criterion.' }),
    ).exactOptional(),
    maxResults: MaxStreamResultsSchema.and(
      z.any().openapi({ description: 'Maximum number of streams to return. Default: 100.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The first stream to retrieve. This is used for pagination; see the <code>nextToken</code> response field.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListStreamsRequest', required: [] })
  .openapi('ListStreamsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const StreamMetadataSchema = z.string().min(1).openapi('StreamMetadata')

const PutMetadataRequestSchema = z
  .object({
    channelArn: ChannelArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the channel into which metadata is inserted. This channel must have an active stream.',
        }),
    ),
    metadata: StreamMetadataSchema.and(
      z
        .any()
        .openapi({ description: 'Metadata to insert into the stream. Maximum: 1 KB per request.' }),
    ),
  })
  .openapi({ required: ['channelArn', 'metadata'], title: 'PutMetadataRequest' })
  .openapi('PutMetadataRequest')

const StopStreamRequestSchema = z
  .object({
    channelArn: ChannelArnSchema.and(
      z.any().openapi({ description: 'ARN of the channel for which the stream is to be stopped.' }),
    ),
  })
  .openapi({ required: ['channelArn'], title: 'StopStreamRequest' })
  .openapi('StopStreamRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Array of tags to be added or updated. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.',
        }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateChannelRequestSchema = z
  .object({
    arn: ChannelArnSchema.and(
      z.any().openapi({ description: 'ARN of the channel to be updated.' }),
    ),
    authorized: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the channel is private (enabled for playback authorization).',
        }),
    ).exactOptional(),
    insecureIngest: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the channel allows insecure RTMP ingest. Default: <code>false</code>.',
        }),
    ).exactOptional(),
    latencyMode: ChannelLatencyModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. (Note: In the Amazon IVS console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and Standard, respectively.)',
        }),
    ).exactOptional(),
    name: ChannelNameSchema.and(z.any().openapi({ description: 'Channel name.' })).exactOptional(),
    recordingConfigurationArn: ChannelRecordingConfigurationArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Recording-configuration ARN. If this is set to an empty string, recording is disabled. A value other than an empty string indicates that recording is enabled',
        }),
    ).exactOptional(),
    type: ChannelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Channel type, which determines the allowable resolution and bitrate. <i>If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately</i>. Valid values:</p> <ul> <li> <p> <code>STANDARD</code>: Video is transcoded: multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Transcoding allows higher playback quality across a range of download speeds. Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is transcoded only for renditions 360p and below; above that, audio is passed through. This is the default.</p> </li> <li> <p> <code>BASIC</code>: Video is transmuxed: Amazon IVS delivers the original input to viewers. The viewer’s video-quality choice is limited to the original input. Resolution can be up to 1080p and bitrate can be up to 1.5 Mbps for 480p and up to 3.5 Mbps for resolutions between 480p and 1080p.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['arn'], title: 'UpdateChannelRequest' })
  .openapi('UpdateChannelRequest')

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

export const postBatchGetChannelRoute = createRoute({
  method: 'post',
  path: '/BatchGetChannel',
  description: 'Performs <a>GetChannel</a> on multiple ARNs simultaneously.',
  operationId: 'BatchGetChannel',
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
              arns: z
                .array(ChannelArnSchema)
                .min(1)
                .max(50)
                .openapi({ description: 'Array of ARNs, one per channel.' }),
            })
            .openapi({ required: ['arns'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetChannelResponseSchema } },
    },
  },
})

export const postBatchGetStreamKeyRoute = createRoute({
  method: 'post',
  path: '/BatchGetStreamKey',
  description: 'Performs <a>GetStreamKey</a> on multiple ARNs simultaneously.',
  operationId: 'BatchGetStreamKey',
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
              arns: z
                .array(StreamKeyArnSchema)
                .min(1)
                .max(50)
                .openapi({ description: 'Array of ARNs, one per stream key.' }),
            })
            .openapi({ required: ['arns'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetStreamKeyResponseSchema } },
    },
  },
})

export const postCreateChannelRoute = createRoute({
  method: 'post',
  path: '/CreateChannel',
  description: 'Creates a new channel and an associated stream key to start streaming.',
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
              authorized: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether the channel is private (enabled for playback authorization). Default: <code>false</code>.',
                }),
              insecureIngest: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether the channel allows insecure RTMP ingest. Default: <code>false</code>.',
                }),
              latencyMode: z
                .enum(['NORMAL', 'LOW'])
                .exactOptional()
                .openapi({
                  description:
                    'Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. (Note: In the Amazon IVS console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and Standard, respectively.) Default: <code>LOW</code>.',
                }),
              name: z
                .string()
                .regex(/^[a-zA-Z0-9-_]*$/)
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Channel name.' }),
              recordingConfigurationArn: z
                .string()
                .regex(/^$|^arn:aws:ivs:[a-z0-9-]+:[0-9]+:recording-configuration\/[a-zA-Z0-9-]+$/)
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'Recording-configuration ARN. Default: "" (empty string, recording is disabled).',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.',
                }),
              type: z
                .enum(['BASIC', 'STANDARD'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Channel type, which determines the allowable resolution and bitrate. <i>If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.</i> Default: <code>STANDARD</code>. Valid values:</p> <ul> <li> <p> <code>STANDARD</code>: Video is transcoded: multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Transcoding allows higher playback quality across a range of download speeds. Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is transcoded only for renditions 360p and below; above that, audio is passed through. This is the default.</p> </li> <li> <p> <code>BASIC</code>: Video is transmuxed: Amazon IVS delivers the original input to viewers. The viewer’s video-quality choice is limited to the original input. Resolution can be up to 1080p and bitrate can be up to 1.5 Mbps for 480p and up to 3.5 Mbps for resolutions between 480p and 1080p.</p> </li> </ul>',
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
      content: { 'application/json': { schema: CreateChannelResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PendingVerification',
      content: { 'application/json': { schema: PendingVerificationSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postCreateRecordingConfigurationRoute = createRoute({
  method: 'post',
  path: '/CreateRecordingConfiguration',
  description:
    '<p>Creates a new recording configuration, used to enable recording to Amazon S3.</p> <p> <b>Known issue:</b> In the us-east-1 region, if you use the Amazon Web Services CLI to create a recording configuration, it returns success even if the S3 bucket is in a different region. In this case, the <code>state</code> of the recording configuration is <code>CREATE_FAILED</code> (instead of <code>ACTIVE</code>). (In other regions, the CLI correctly returns failure if the bucket is in a different region.)</p> <p> <b>Workaround:</b> Ensure that your S3 bucket is in the same region as the recording configuration. If you create a recording configuration in a different region as your S3 bucket, delete that recording configuration and create a new one with an S3 bucket from the correct region.</p>',
  operationId: 'CreateRecordingConfiguration',
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
              destinationConfiguration: z
                .object({
                  s3: S3DestinationConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An S3 destination configuration where recorded videos will be stored.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.',
                  required: [],
                }),
              name: z
                .string()
                .regex(/^[a-zA-Z0-9-_]*$/)
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'Recording-configuration name. The value does not need to be unique.',
                }),
              recordingReconnectWindowSeconds: z
                .int()
                .min(0)
                .max(300)
                .exactOptional()
                .openapi({
                  description:
                    'If a broadcast disconnects and then reconnects within the specified interval, the multiple streams will be considered a single broadcast and merged together. Default: 0.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.',
                }),
              thumbnailConfiguration: z
                .object({
                  recordingMode: RecordingModeSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Thumbnail recording mode. Default: <code>INTERVAL</code>.',
                      }),
                  ).exactOptional(),
                  targetIntervalSeconds: TargetIntervalSecondsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The targeted thumbnail-generation interval in seconds. This is configurable (and required) only if <code>recordingMode</code> is <code>INTERVAL</code>. Default: 60.</p> <p> <b>Important:</b> Setting a value for <code>targetIntervalSeconds</code> does not guarantee that thumbnails are generated at the specified interval. For thumbnails to be generated at the <code>targetIntervalSeconds</code> interval, the <code>IDR/Keyframe</code> value for the input video must be less than the <code>targetIntervalSeconds</code> value. See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/streaming-config.html"> Amazon IVS Streaming Configuration</a> for information on setting <code>IDR/Keyframe</code> to the recommended value in video-encoder settings.</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object representing a configuration of thumbnails for recorded video.',
                  required: [],
                }),
            })
            .openapi({ required: ['destinationConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRecordingConfigurationResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PendingVerification',
      content: { 'application/json': { schema: PendingVerificationSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postCreateStreamKeyRoute = createRoute({
  method: 'post',
  path: '/CreateStreamKey',
  description:
    '<p>Creates a stream key, used to initiate a stream, for the specified channel ARN.</p> <p>Note that <a>CreateChannel</a> creates a stream key. If you subsequently use CreateStreamKey on the same channel, it will fail because a stream key already exists and there is a limit of 1 stream key per channel. To reset the stream key on a channel, use <a>DeleteStreamKey</a> and then CreateStreamKey.</p>',
  operationId: 'CreateStreamKey',
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
              channelArn: z
                .string()
                .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel\/[a-zA-Z0-9-]+$/)
                .min(1)
                .max(128)
                .openapi({ description: 'ARN of the channel for which to create the stream key.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.',
                }),
            })
            .openapi({ required: ['channelArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateStreamKeyResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PendingVerification',
      content: { 'application/json': { schema: PendingVerificationSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postDeleteChannelRoute = createRoute({
  method: 'post',
  path: '/DeleteChannel',
  description:
    '<p>Deletes the specified channel and its associated stream keys.</p> <p>If you try to delete a live channel, you will get an error (409 ConflictException). To delete a channel that is live, call <a>StopStream</a>, wait for the Amazon EventBridge "Stream End" event (to verify that the stream\'s state is no longer Live), then call DeleteChannel. (See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html"> Using EventBridge with Amazon IVS</a>.) </p>',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              arn: z
                .string()
                .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel\/[a-zA-Z0-9-]+$/)
                .min(1)
                .max(128)
                .openapi({ description: 'ARN of the channel to be deleted.' }),
            })
            .openapi({ required: ['arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PendingVerification',
      content: { 'application/json': { schema: PendingVerificationSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postDeletePlaybackKeyPairRoute = createRoute({
  method: 'post',
  path: '/DeletePlaybackKeyPair',
  description:
    'Deletes a specified authorization key pair. This invalidates future viewer tokens generated using the key pair’s <code>privateKey</code>. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.',
  operationId: 'DeletePlaybackKeyPair',
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
              arn: z
                .string()
                .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:playback-key\/[a-zA-Z0-9-]+$/)
                .min(1)
                .max(128)
                .openapi({ description: 'ARN of the key pair to be deleted.' }),
            })
            .openapi({ required: ['arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePlaybackKeyPairResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PendingVerification',
      content: { 'application/json': { schema: PendingVerificationSchema } },
    },
  },
})

export const postDeleteRecordingConfigurationRoute = createRoute({
  method: 'post',
  path: '/DeleteRecordingConfiguration',
  description:
    '<p>Deletes the recording configuration for the specified ARN.</p> <p>If you try to delete a recording configuration that is associated with a channel, you will get an error (409 ConflictException). To avoid this, for all channels that reference the recording configuration, first use <a>UpdateChannel</a> to set the <code>recordingConfigurationArn</code> field to an empty string, then use DeleteRecordingConfiguration.</p>',
  operationId: 'DeleteRecordingConfiguration',
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
              arn: z
                .string()
                .regex(/^arn:aws:ivs:[a-z0-9-]+:[0-9]+:recording-configuration\/[a-zA-Z0-9-]+$/)
                .min(0)
                .max(128)
                .openapi({ description: 'ARN of the recording configuration to be deleted.' }),
            })
            .openapi({ required: ['arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postDeleteStreamKeyRoute = createRoute({
  method: 'post',
  path: '/DeleteStreamKey',
  description:
    'Deletes the stream key for the specified ARN, so it can no longer be used to stream.',
  operationId: 'DeleteStreamKey',
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
              arn: z
                .string()
                .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:stream-key\/[a-zA-Z0-9-]+$/)
                .min(1)
                .max(128)
                .openapi({ description: 'ARN of the stream key to be deleted.' }),
            })
            .openapi({ required: ['arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PendingVerification',
      content: { 'application/json': { schema: PendingVerificationSchema } },
    },
  },
})

export const postGetChannelRoute = createRoute({
  method: 'post',
  path: '/GetChannel',
  description:
    'Gets the channel configuration for the specified channel ARN. See also <a>BatchGetChannel</a>.',
  operationId: 'GetChannel',
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
              arn: z
                .string()
                .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel\/[a-zA-Z0-9-]+$/)
                .min(1)
                .max(128)
                .openapi({
                  description: 'ARN of the channel for which the configuration is to be retrieved.',
                }),
            })
            .openapi({ required: ['arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetChannelResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postGetPlaybackKeyPairRoute = createRoute({
  method: 'post',
  path: '/GetPlaybackKeyPair',
  description:
    'Gets a specified playback authorization key pair and returns the <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> held by the caller can be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.',
  operationId: 'GetPlaybackKeyPair',
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
              arn: z
                .string()
                .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:playback-key\/[a-zA-Z0-9-]+$/)
                .min(1)
                .max(128)
                .openapi({ description: 'ARN of the key pair to be returned.' }),
            })
            .openapi({ required: ['arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPlaybackKeyPairResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postGetRecordingConfigurationRoute = createRoute({
  method: 'post',
  path: '/GetRecordingConfiguration',
  description: 'Gets the recording configuration for the specified ARN.',
  operationId: 'GetRecordingConfiguration',
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
              arn: z
                .string()
                .regex(/^arn:aws:ivs:[a-z0-9-]+:[0-9]+:recording-configuration\/[a-zA-Z0-9-]+$/)
                .min(0)
                .max(128)
                .openapi({ description: 'ARN of the recording configuration to be retrieved.' }),
            })
            .openapi({ required: ['arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRecordingConfigurationResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postGetStreamRoute = createRoute({
  method: 'post',
  path: '/GetStream',
  description: 'Gets information about the active (live) stream on a specified channel.',
  operationId: 'GetStream',
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
              channelArn: z
                .string()
                .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel\/[a-zA-Z0-9-]+$/)
                .min(1)
                .max(128)
                .openapi({ description: 'Channel ARN for stream to be accessed.' }),
            })
            .openapi({ required: ['channelArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetStreamResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ChannelNotBroadcasting',
      content: { 'application/json': { schema: ChannelNotBroadcastingSchema } },
    },
  },
})

export const postGetStreamKeyRoute = createRoute({
  method: 'post',
  path: '/GetStreamKey',
  description: 'Gets stream-key information for a specified ARN.',
  operationId: 'GetStreamKey',
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
              arn: z
                .string()
                .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:stream-key\/[a-zA-Z0-9-]+$/)
                .min(1)
                .max(128)
                .openapi({ description: 'ARN for the stream key to be retrieved.' }),
            })
            .openapi({ required: ['arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetStreamKeyResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postGetStreamSessionRoute = createRoute({
  method: 'post',
  path: '/GetStreamSession',
  description: 'Gets metadata on a specified stream.',
  operationId: 'GetStreamSession',
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
              channelArn: z
                .string()
                .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel\/[a-zA-Z0-9-]+$/)
                .min(1)
                .max(128)
                .openapi({ description: 'ARN of the channel resource' }),
              streamId: z
                .string()
                .regex(/^st-[a-zA-Z0-9]+$/)
                .length(26)
                .exactOptional()
                .openapi({
                  description:
                    'Unique identifier for a live or previously live stream in the specified channel. If no <code>streamId</code> is provided, this returns the most recent stream session for the channel, if it exists.',
                }),
            })
            .openapi({ required: ['channelArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetStreamSessionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postImportPlaybackKeyPairRoute = createRoute({
  method: 'post',
  path: '/ImportPlaybackKeyPair',
  description:
    'Imports the public portion of a new key pair and returns its <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> can then be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.',
  operationId: 'ImportPlaybackKeyPair',
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
              name: z
                .string()
                .regex(/^[a-zA-Z0-9-_]*$/)
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({
                  description: 'Playback-key-pair name. The value does not need to be unique.',
                }),
              publicKeyMaterial: z
                .string()
                .openapi({ description: 'The public portion of a customer-generated key pair.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'Any tags provided with the request are added to the playback key pair tags. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.',
                }),
            })
            .openapi({ required: ['publicKeyMaterial'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportPlaybackKeyPairResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'PendingVerification',
      content: { 'application/json': { schema: PendingVerificationSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postListChannelsRoute = createRoute({
  method: 'post',
  path: '/ListChannels',
  description:
    'Gets summary information about all channels in your account, in the Amazon Web Services region where the API request is processed. This list can be filtered to match a specified name or recording-configuration ARN. Filters are mutually exclusive and cannot be used together. If you try to use both filters, you will get an error (409 ConflictException).',
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
              filterByName: z
                .string()
                .regex(/^[a-zA-Z0-9-_]*$/)
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Filters the channel list to match the specified name.' }),
              filterByRecordingConfigurationArn: z
                .string()
                .regex(/^$|^arn:aws:ivs:[a-z0-9-]+:[0-9]+:recording-configuration\/[a-zA-Z0-9-]+$/)
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'Filters the channel list to match the specified recording-configuration ARN.',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'Maximum number of channels to return. Default: 100.' }),
              nextToken: z
                .string()
                .regex(/^[a-zA-Z0-9+\/=_-]*$/)
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The first channel to retrieve. This is used for pagination; see the <code>nextToken</code> response field.',
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
      content: { 'application/json': { schema: ListChannelsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postListPlaybackKeyPairsRoute = createRoute({
  method: 'post',
  path: '/ListPlaybackKeyPairs',
  description:
    'Gets summary information about playback key pairs. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.',
  operationId: 'ListPlaybackKeyPairs',
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
              maxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'Maximum number of key pairs to return. Default: your service quota or 100, whichever is smaller.',
                }),
              nextToken: z
                .string()
                .regex(/^[a-zA-Z0-9+\/=_-]*$/)
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The first key pair to retrieve. This is used for pagination; see the <code>nextToken</code> response field.',
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
      content: { 'application/json': { schema: ListPlaybackKeyPairsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postListRecordingConfigurationsRoute = createRoute({
  method: 'post',
  path: '/ListRecordingConfigurations',
  description:
    'Gets summary information about all recording configurations in your account, in the Amazon Web Services region where the API request is processed.',
  operationId: 'ListRecordingConfigurations',
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
              maxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'Maximum number of recording configurations to return. Default: your service quota or 100, whichever is smaller. ',
                }),
              nextToken: z
                .string()
                .regex(/^[a-zA-Z0-9+\/=_-]*$/)
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The first recording configuration to retrieve. This is used for pagination; see the <code>nextToken</code> response field.',
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
      content: { 'application/json': { schema: ListRecordingConfigurationsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postListStreamKeysRoute = createRoute({
  method: 'post',
  path: '/ListStreamKeys',
  description: 'Gets summary information about stream keys for the specified channel.',
  operationId: 'ListStreamKeys',
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
              channelArn: z
                .string()
                .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel\/[a-zA-Z0-9-]+$/)
                .min(1)
                .max(128)
                .openapi({ description: 'Channel ARN used to filter the list.' }),
              maxResults: z
                .int()
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({ description: 'Maximum number of streamKeys to return. Default: 1.' }),
              nextToken: z
                .string()
                .regex(/^[a-zA-Z0-9+\/=_-]*$/)
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The first stream key to retrieve. This is used for pagination; see the <code>nextToken</code> response field.',
                }),
            })
            .openapi({ required: ['channelArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStreamKeysResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postListStreamSessionsRoute = createRoute({
  method: 'post',
  path: '/ListStreamSessions',
  description:
    'Gets a summary of current and previous streams for a specified channel in your account, in the AWS region where the API request is processed.',
  operationId: 'ListStreamSessions',
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
              channelArn: z
                .string()
                .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel\/[a-zA-Z0-9-]+$/)
                .min(1)
                .max(128)
                .openapi({ description: 'Channel ARN used to filter the list.' }),
              maxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'Maximum number of streams to return. Default: 100.' }),
              nextToken: z
                .string()
                .regex(/^[a-zA-Z0-9+\/=_-]*$/)
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The first stream to retrieve. This is used for pagination; see the <code>nextToken</code> response field.',
                }),
            })
            .openapi({ required: ['channelArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStreamSessionsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postListStreamsRoute = createRoute({
  method: 'post',
  path: '/ListStreams',
  description:
    'Gets summary information about live streams in your account, in the Amazon Web Services region where the API request is processed.',
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
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
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
              filterBy: z
                .object({
                  health: StreamHealthSchema.and(
                    z.any().openapi({ description: 'The stream’s health.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Object specifying the stream attribute on which to filter.',
                  required: [],
                }),
              maxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'Maximum number of streams to return. Default: 100.' }),
              nextToken: z
                .string()
                .regex(/^[a-zA-Z0-9+\/=_-]*$/)
                .min(0)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The first stream to retrieve. This is used for pagination; see the <code>nextToken</code> response field.',
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
      content: { 'application/json': { schema: ListStreamsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'Gets information about Amazon Web Services tags for the specified ARN.',
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
        .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:[a-z-]\/[a-zA-Z0-9-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource to be retrieved. The ARN must be URL-encoded.',
            schema: {
              type: 'string',
              pattern: '^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:[a-z-]/[a-zA-Z0-9-]+$',
              minLength: 1,
              maxLength: 128,
            },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description: 'Adds or updates tags for the Amazon Web Services resource with the specified ARN.',
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
        .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:[a-z-]\/[a-zA-Z0-9-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'ARN of the resource for which tags are to be added or updated. The ARN must be URL-encoded.',
            schema: {
              type: 'string',
              pattern: '^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:[a-z-]/[a-zA-Z0-9-]+$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({
                  description:
                    'Array of tags to be added or updated. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.',
                }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postPutMetadataRoute = createRoute({
  method: 'post',
  path: '/PutMetadata',
  description:
    'Inserts metadata into the active stream of the specified channel. At most 5 requests per second per channel are allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching your data into a single PutMetadata call.) At most 155 requests per second per account are allowed. Also see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/metadata.html">Embedding Metadata within a Video Stream</a> in the <i>Amazon IVS User Guide</i>.',
  operationId: 'PutMetadata',
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
              channelArn: z
                .string()
                .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel\/[a-zA-Z0-9-]+$/)
                .min(1)
                .max(128)
                .openapi({
                  description:
                    'ARN of the channel into which metadata is inserted. This channel must have an active stream.',
                }),
              metadata: z
                .string()
                .min(1)
                .openapi({
                  description: 'Metadata to insert into the stream. Maximum: 1 KB per request.',
                }),
            })
            .openapi({ required: ['channelArn', 'metadata'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ChannelNotBroadcasting',
      content: { 'application/json': { schema: ChannelNotBroadcastingSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postStopStreamRoute = createRoute({
  method: 'post',
  path: '/StopStream',
  description:
    '<p>Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with <a>DeleteStreamKey</a> to prevent further streaming to a channel.</p> <note> <p>Many streaming client-software libraries automatically reconnect a dropped RTMPS session, so to stop the stream permanently, you may want to first revoke the <code>streamKey</code> attached to the channel.</p> </note>',
  operationId: 'StopStream',
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
              channelArn: z
                .string()
                .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel\/[a-zA-Z0-9-]+$/)
                .min(1)
                .max(128)
                .openapi({
                  description: 'ARN of the channel for which the stream is to be stopped.',
                }),
            })
            .openapi({ required: ['channelArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopStreamResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ChannelNotBroadcasting',
      content: { 'application/json': { schema: ChannelNotBroadcastingSchema } },
    },
    484: {
      description: 'StreamUnavailable',
      content: { 'application/json': { schema: StreamUnavailableSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: 'Removes tags from the resource with the specified ARN.',
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
        .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:[a-z-]\/[a-zA-Z0-9-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'ARN of the resource for which tags are to be removed. The ARN must be URL-encoded.',
            schema: {
              type: 'string',
              pattern: '^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:[a-z-]/[a-zA-Z0-9-]+$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(0).max(50),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description:
              'Array of tags to be removed. Array of maps, each of the form s<code>tring:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 0,
              maxItems: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postUpdateChannelRoute = createRoute({
  method: 'post',
  path: '/UpdateChannel',
  description:
    "Updates a channel's configuration. This does not affect an ongoing stream of this channel. You must stop and restart the stream for the changes to take effect.",
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              arn: z
                .string()
                .regex(/^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel\/[a-zA-Z0-9-]+$/)
                .min(1)
                .max(128)
                .openapi({ description: 'ARN of the channel to be updated.' }),
              authorized: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether the channel is private (enabled for playback authorization).',
                }),
              insecureIngest: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether the channel allows insecure RTMP ingest. Default: <code>false</code>.',
                }),
              latencyMode: z
                .enum(['NORMAL', 'LOW'])
                .exactOptional()
                .openapi({
                  description:
                    'Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. (Note: In the Amazon IVS console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and Standard, respectively.)',
                }),
              name: z
                .string()
                .regex(/^[a-zA-Z0-9-_]*$/)
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Channel name.' }),
              recordingConfigurationArn: z
                .string()
                .regex(/^$|^arn:aws:ivs:[a-z0-9-]+:[0-9]+:recording-configuration\/[a-zA-Z0-9-]+$/)
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'Recording-configuration ARN. If this is set to an empty string, recording is disabled. A value other than an empty string indicates that recording is enabled',
                }),
              type: z
                .enum(['BASIC', 'STANDARD'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Channel type, which determines the allowable resolution and bitrate. <i>If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately</i>. Valid values:</p> <ul> <li> <p> <code>STANDARD</code>: Video is transcoded: multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Transcoding allows higher playback quality across a range of download speeds. Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is transcoded only for renditions 360p and below; above that, audio is passed through. This is the default.</p> </li> <li> <p> <code>BASIC</code>: Video is transmuxed: Amazon IVS delivers the original input to viewers. The viewer’s video-quality choice is limited to the original input. Resolution can be up to 1080p and bitrate can be up to 1.5 Mbps for 480p and up to 3.5 Mbps for resolutions between 480p and 1080p.</p> </li> </ul>',
                }),
            })
            .openapi({ required: ['arn'] }),
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PendingVerification',
      content: { 'application/json': { schema: PendingVerificationSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})
