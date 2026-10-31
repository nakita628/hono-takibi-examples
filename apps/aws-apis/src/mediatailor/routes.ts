import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const TimestampUnixSchema = z.iso.datetime({ offset: true }).openapi('TimestampUnix')

const SlateSourceSchema = z
  .object({
    SourceLocationName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the source location where the slate VOD source is stored.',
        }),
    ).exactOptional(),
    VodSourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The slate VOD source name. The VOD source must already exist in a source location before it can be used for slate.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Slate VOD source configuration.', required: [] })
  .openapi('SlateSource')

const LogTypeSchema = z.literal('AS_RUN').openapi('LogType')

const LogTypesSchema = z.array(LogTypeSchema).openapi('LogTypes')

const LogConfigurationForChannelSchema = z
  .object({
    LogTypes: LogTypesSchema.and(
      z.any().openapi({ description: 'The log types.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The log configuration for the channel.', required: [] })
  .openapi('LogConfigurationForChannel')

const IntegerSchema = z.int().openapi('Integer')

const DashPlaylistSettingsSchema = z
  .object({
    ManifestWindowSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.',
        }),
    ).exactOptional(),
    MinBufferTimeSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Minimum amount of content (measured in seconds) that a player must keep available in the buffer. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.',
        }),
    ).exactOptional(),
    MinUpdatePeriodSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.',
        }),
    ).exactOptional(),
    SuggestedPresentationDelaySeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amount of time (in seconds) that the player should be from the live point at the end of the manifest. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Dash manifest configuration parameters.', required: [] })
  .openapi('DashPlaylistSettings')

const HlsPlaylistSettingsSchema = z
  .object({
    ManifestWindowSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'HLS playlist configuration parameters.', required: [] })
  .openapi('HlsPlaylistSettings')

const ResponseOutputItemSchema = z
  .object({
    DashPlaylistSettings: DashPlaylistSettingsSchema.and(
      z.any().openapi({ description: 'DASH manifest configuration settings.' }),
    ).exactOptional(),
    HlsPlaylistSettings: HlsPlaylistSettingsSchema.and(
      z.any().openapi({ description: 'HLS manifest configuration settings.' }),
    ).exactOptional(),
    ManifestName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the manifest for the channel that will appear in the channel output's playback URL.",
        }),
    ),
    PlaybackUrl: StringSchema.and(
      z.any().openapi({ description: 'The URL used for playback by content players.' }),
    ),
    SourceGroup: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string used to associate a package configuration source group with a channel output.',
        }),
    ),
  })
  .openapi({
    required: ['ManifestName', 'PlaybackUrl', 'SourceGroup'],
    description: 'The output item response.',
  })
  .openapi('ResponseOutputItem')

const ResponseOutputsSchema = z.array(ResponseOutputItemSchema).openapi('ResponseOutputs')

const MapOfStringSchema = z.record(z.string(), StringSchema).openapi('MapOfString')

type ChannelType = {
  Arn: z.infer<typeof StringSchema> & { [key: string]: unknown }
  ChannelName: z.infer<typeof StringSchema> & { [key: string]: unknown }
  ChannelState: z.infer<typeof StringSchema> & { [key: string]: unknown }
  CreationTime?: z.infer<typeof TimestampUnixSchema> & { [key: string]: unknown }
  FillerSlate?: z.infer<typeof SlateSourceSchema> & { [key: string]: unknown }
  LastModifiedTime?: z.infer<typeof TimestampUnixSchema> & { [key: string]: unknown }
  LogConfiguration: z.infer<typeof LogConfigurationForChannelSchema> & { [key: string]: unknown }
  Outputs: z.infer<typeof ResponseOutputsSchema> & { [key: string]: unknown }
  PlaybackMode: z.infer<typeof StringSchema> & { [key: string]: unknown }
  Tags?: z.infer<typeof MapOfStringSchema> & { [key: string]: unknown }
  Tier: z.infer<typeof StringSchema> & { [key: string]: unknown }
}

const ConfigureLogsForChannelResponseSchema = z
  .object({
    ChannelName: StringSchema.and(
      z.any().openapi({ description: 'The name of the channel.' }),
    ).exactOptional(),
    LogTypes: LogTypesSchema.and(
      z.any().openapi({ description: 'The types of logs collected.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigureLogsForChannelResponse')

const ConfigureLogsForPlaybackConfigurationResponseSchema = z
  .object({
    PercentEnabled: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of session logs that MediaTailor sends to your Cloudwatch Logs account.',
        }),
    ),
    PlaybackConfigurationName: StringSchema.and(
      z.any().openapi({ description: 'The name of the playback configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['PercentEnabled'] })
  .openapi('ConfigureLogsForPlaybackConfigurationResponse')

const ChannelStateSchema = z.enum(['RUNNING', 'STOPPED']).openapi('ChannelState')

const CreateChannelResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) to assign to the channel.' }),
    ).exactOptional(),
    ChannelName: StringSchema.and(
      z.any().openapi({ description: 'The name to assign to the channel.' }),
    ).exactOptional(),
    ChannelState: ChannelStateSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates whether the channel is in a running state or not.' }),
    ).exactOptional(),
    CreationTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The timestamp of when the channel was created.' }),
    ).exactOptional(),
    FillerSlate: SlateSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the slate used to fill gaps between programs in the schedule.',
        }),
    ).exactOptional(),
    LastModifiedTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The timestamp of when the channel was last modified.' }),
    ).exactOptional(),
    Outputs: ResponseOutputsSchema.and(
      z.any().openapi({ description: 'The output properties to assign to the channel.' }),
    ).exactOptional(),
    PlaybackMode: StringSchema.and(
      z.any().openapi({ description: 'The playback mode to assign to the channel.' }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
    Tier: StringSchema.and(
      z.any().openapi({ description: 'The tier of the channel.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateChannelResponse')

const RequestOutputItemSchema = z
  .object({
    DashPlaylistSettings: DashPlaylistSettingsSchema.and(
      z.any().openapi({ description: 'DASH manifest configuration parameters.' }),
    ).exactOptional(),
    HlsPlaylistSettings: HlsPlaylistSettingsSchema.and(
      z.any().openapi({ description: 'HLS playlist configuration parameters.' }),
    ).exactOptional(),
    ManifestName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the manifest for the channel. The name appears in the <code>PlaybackUrl</code>.',
        }),
    ),
    SourceGroup: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string used to match which <code>HttpPackageConfiguration</code> is used for each <code>VodSource</code>.',
        }),
    ),
  })
  .openapi({
    required: ['ManifestName', 'SourceGroup'],
    description: 'The output configuration for this channel.',
  })
  .openapi('RequestOutputItem')

const TypeSchema = z.enum(['DASH', 'HLS']).openapi('Type')

const HttpPackageConfigurationSchema = z
  .object({
    Path: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The relative path to the URL for this VOD source. This is combined with <code>SourceLocation::HttpConfiguration::BaseUrl</code> to form a valid URL.',
        }),
    ),
    SourceGroup: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the source group. This has to match one of the <code>Channel::Outputs::SourceGroup</code>.',
        }),
    ),
    Type: TypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The streaming protocol for this package configuration. Supported values are <code>HLS</code> and <code>DASH</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Path', 'SourceGroup', 'Type'],
    description: 'The HTTP package configuration properties for the requested VOD source.',
  })
  .openapi('HttpPackageConfiguration')

const HttpPackageConfigurationsSchema = z
  .array(HttpPackageConfigurationSchema)
  .openapi({ description: "The VOD source's HTTP package configuration settings." })
  .openapi('HttpPackageConfigurations')

const CreateLiveSourceResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The ARN to assign to the live source.' }),
    ).exactOptional(),
    CreationTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The time the live source was created.' }),
    ).exactOptional(),
    HttpPackageConfigurations: HttpPackageConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of HTTP package configuration parameters for this live source.',
        }),
    ).exactOptional(),
    LastModifiedTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The time the live source was last modified.' }),
    ).exactOptional(),
    LiveSourceName: StringSchema.and(
      z.any().openapi({ description: 'The name to assign to the live source.' }),
    ).exactOptional(),
    SourceLocationName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name to assign to the source location of the live source.' }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags to assign to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLiveSourceResponse')

const OperatorSchema = z.literal('EQUALS').openapi('Operator')

const AvailMatchingCriteriaSchema = z
  .object({
    DynamicVariable: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The dynamic variable(s) that MediaTailor should use as avail matching criteria. MediaTailor only places the prefetched ads into the avail if the avail matches the criteria defined by the dynamic variable. For information about dynamic variables, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables.html">Using dynamic ad variables</a> in the <i>MediaTailor User Guide</i>.</p> <p>You can include up to 100 dynamic variables.</p>',
        }),
    ),
    Operator: OperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'For the <code>DynamicVariable</code> specified in <code>AvailMatchingCriteria</code>, the Operator that is used for the comparison.',
        }),
    ),
  })
  .openapi({
    required: ['DynamicVariable', 'Operator'],
    description:
      "<p>MediaTailor only places (consumes) prefetched ads if the ad break meets the criteria defined by the dynamic variables. This gives you granular control over which ad break to place the prefetched ads into.</p> <p>As an example, let's say that you set <code>DynamicVariable</code> to <code>scte.event_id</code> and <code>Operator</code> to <code>EQUALS</code>, and your playback configuration has an ADS URL of <code>https://my.ads.server.com/path?&amp;podId=[scte.avail_num]&amp;event=[scte.event_id]&amp;duration=[session.avail_duration_secs]</code>. And the prefetch request to the ADS contains these values <code>https://my.ads.server.com/path?&amp;podId=3&amp;event=my-awesome-event&amp;duration=30</code>. MediaTailor will only insert the prefetched ads into the ad break if has a SCTE marker with an event id of <code>my-awesome-event</code>, since it must match the event id that MediaTailor uses to query the ADS.</p> <p>You can specify up to five <code>AvailMatchingCriteria</code>. If you specify multiple <code>AvailMatchingCriteria</code>, MediaTailor combines them to match using a logical <code>AND</code>. You can model logical <code>OR</code> combinations by creating multiple prefetch schedules.</p>",
  })
  .openapi('AvailMatchingCriteria')

const ListOfAvailMatchingCriteriaSchema = z
  .array(AvailMatchingCriteriaSchema)
  .openapi('ListOfAvailMatchingCriteria')

const PrefetchConsumptionSchema = z
  .object({
    AvailMatchingCriteria: ListOfAvailMatchingCriteriaSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you only want MediaTailor to insert prefetched ads into avails (ad breaks) that match specific dynamic variables, such as <code>scte.event_id</code>, set the avail matching criteria.',
        }),
    ).exactOptional(),
    EndTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time when MediaTailor no longer considers the prefetched ads for use in an ad break. MediaTailor automatically deletes prefetch schedules no less than seven days after the end time. If you'd like to manually delete the prefetch schedule, you can call <code>DeletePrefetchSchedule</code>.",
        }),
    ),
    StartTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time when prefetched ads are considered for use in an ad break. If you don't specify <code>StartTime</code>, the prefetched ads are available after MediaTailor retrives them from the ad decision server.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EndTime'],
    description:
      'A complex type that contains settings that determine how and when that MediaTailor places prefetched ads into upcoming ad breaks.',
  })
  .openapi('PrefetchConsumption')

const PrefetchRetrievalSchema = z
  .object({
    DynamicVariables: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The dynamic variables to use for substitution during prefetch requests to the ad decision server (ADS).</p> <p>You initially configure <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables.html">dynamic variables</a> for the ADS URL when you set up your playback configuration. When you specify <code>DynamicVariables</code> for prefetch retrieval, MediaTailor includes the dynamic variables in the request to the ADS.</p>',
        }),
    ).exactOptional(),
    EndTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time when prefetch retrieval ends for the ad break. Prefetching will be attempted for manifest requests that occur at or before this time.',
        }),
    ),
    StartTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time when prefetch retrievals can start for this break. Ad prefetching will be attempted for manifest requests that occur at or after this time. Defaults to the current time. If not specified, the prefetch retrieval starts as soon as possible.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EndTime'],
    description:
      'A complex type that contains settings governing when MediaTailor prefetches ads, and which dynamic variables that MediaTailor includes in the request to the ad decision server.',
  })
  .openapi('PrefetchRetrieval')

const CreatePrefetchScheduleResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The ARN to assign to the prefetch schedule.' }),
    ).exactOptional(),
    Consumption: PrefetchConsumptionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The configuration settings for MediaTailor's <i>consumption</i> of the prefetched ads from the ad decision server. Each consumption configuration contains an end time and an optional start time that define the <i>consumption window</i>. Prefetch schedules automatically expire no earlier than seven days after the end time.",
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name to assign to the prefetch schedule.' }),
    ).exactOptional(),
    PlaybackConfigurationName: StringSchema.and(
      z.any().openapi({ description: 'The name to assign to the playback configuration.' }),
    ).exactOptional(),
    Retrieval: PrefetchRetrievalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration settings for retrieval of prefetched ads from the ad decision server. Only one set of prefetched ads will be retrieved and subsequently consumed for each ad break.',
        }),
    ).exactOptional(),
    StreamId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration. If <code>StreamId</code> is specified, MediaTailor returns all of the prefetch schedules with an exact match on <code>StreamId</code>. If not specified, MediaTailor returns all of the prefetch schedules for the playback configuration, regardless of <code>StreamId</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreatePrefetchScheduleResponse')

const MessageTypeSchema = z.enum(['SPLICE_INSERT', 'TIME_SIGNAL']).openapi('MessageType')

const LongSchema = z.int().openapi('Long')

const SpliceInsertMessageSchema = z
  .object({
    AvailNum: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is written to <code>splice_insert.avail_num</code>, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is <code>0</code>. Values must be between <code>0</code> and <code>256</code>, inclusive.',
        }),
    ).exactOptional(),
    AvailsExpected: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is written to <code>splice_insert.avails_expected</code>, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is <code>0</code>. Values must be between <code>0</code> and <code>256</code>, inclusive.',
        }),
    ).exactOptional(),
    SpliceEventId: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is written to <code>splice_insert.splice_event_id</code>, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is <code>1</code>.',
        }),
    ).exactOptional(),
    UniqueProgramId: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is written to <code>splice_insert.unique_program_id</code>, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is <code>0</code>. Values must be between <code>0</code> and <code>256</code>, inclusive.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Splice insert message configuration.', required: [] })
  .openapi('SpliceInsertMessage')

const Integer2Schema = z.int().openapi('Integer2')

const String2Schema = z.string().openapi('String2')

const SegmentationDescriptorSchema = z
  .object({
    SegmentNum: Integer2Schema.and(
      z
        .any()
        .openapi({
          description:
            'The segment number to assign to the <code>segmentation_descriptor.segment_num</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification Values must be between 0 and 256, inclusive. The default value is 0.',
        }),
    ).exactOptional(),
    SegmentationEventId: Integer2Schema.and(
      z
        .any()
        .openapi({
          description:
            'The Event Identifier to assign to the <code>segmentation_descriptor.segmentation_event_id</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. The default value is 1.',
        }),
    ).exactOptional(),
    SegmentationTypeId: Integer2Schema.and(
      z
        .any()
        .openapi({
          description:
            'The Type Identifier to assign to the <code>segmentation_descriptor.segmentation_type_id</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. Values must be between 0 and 256, inclusive. The default value is 48.',
        }),
    ).exactOptional(),
    SegmentationUpid: String2Schema.and(
      z
        .any()
        .openapi({
          description:
            'The Upid to assign to the <code>segmentation_descriptor.segmentation_upid</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. The value must be a hexadecimal string containing only the characters 0 though 9 and A through F. The default value is "" (an empty string).',
        }),
    ).exactOptional(),
    SegmentationUpidType: Integer2Schema.and(
      z
        .any()
        .openapi({
          description:
            'The Upid Type to assign to the <code>segmentation_descriptor.segmentation_upid_type</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. Values must be between 0 and 256, inclusive. The default value is 14.',
        }),
    ).exactOptional(),
    SegmentsExpected: Integer2Schema.and(
      z
        .any()
        .openapi({
          description:
            'The number of segments expected, which is assigned to the <code>segmentation_descriptor.segments_expectedS</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification Values must be between 0 and 256, inclusive. The default value is 0.',
        }),
    ).exactOptional(),
    SubSegmentNum: Integer2Schema.and(
      z
        .any()
        .openapi({
          description:
            'The sub-segment number to assign to the <code>segmentation_descriptor.sub_segment_num</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. Values must be between 0 and 256, inclusive. The defualt value is null.',
        }),
    ).exactOptional(),
    SubSegmentsExpected: Integer2Schema.and(
      z
        .any()
        .openapi({
          description:
            'The number of sub-segments expected, which is assigned to the <code>segmentation_descriptor.sub_segments_expected</code> message, as defined in section 10.3.3.1 of the 2022 SCTE-35 specification. Values must be between 0 and 256, inclusive. The default value is null.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>The <code>segmentation_descriptor</code> message can contain advanced metadata fields, like content identifiers, to convey a wide range of information about the ad break. MediaTailor writes the ad metadata in the egress manifest as part of the <code>EXT-X-DATERANGE</code> or <code>EventStream</code> ad marker's SCTE-35 data.</p> <p> <code>segmentation_descriptor</code> messages must be sent with the <code>time_signal</code> message type.</p> <p>See the <code>segmentation_descriptor()</code> table of the 2022 SCTE-35 specification for more information.</p>",
    required: [],
  })
  .openapi('SegmentationDescriptor')

const SegmentationDescriptorListSchema = z
  .array(SegmentationDescriptorSchema)
  .openapi('SegmentationDescriptorList')

const TimeSignalMessageSchema = z
  .object({
    SegmentationDescriptors: SegmentationDescriptorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configurations for the SCTE-35 <code>segmentation_descriptor</code> message(s) sent with the <code>time_signal</code> message.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The SCTE-35 <code>time_signal</code> message can be sent with one or more <code>segmentation_descriptor</code> messages. A <code>time_signal</code> message can be sent only if a single <code>segmentation_descriptor</code> message is sent.</p> <p>The <code>time_signal</code> message contains only the <code>splice_time</code> field which is constructed using a given presentation timestamp. When sending a <code>time_signal</code> message, the <code>splice_command_type</code> field in the <code>splice_info_section</code> message is set to 6 (0x06).</p> <p>See the <code>time_signal()</code> table of the 2022 SCTE-35 specification for more information.</p>',
    required: [],
  })
  .openapi('TimeSignalMessage')

const AdBreakSchema = z
  .object({
    MessageType: MessageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The SCTE-35 ad insertion type. Accepted value: <code>SPLICE_INSERT</code>, <code>TIME_SIGNAL</code>.',
        }),
    ).exactOptional(),
    OffsetMillis: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'How long (in milliseconds) after the beginning of the program that an ad starts. This value must fall within 100ms of a segment boundary, otherwise the ad break will be skipped.',
        }),
    ).exactOptional(),
    Slate: SlateSourceSchema.and(
      z.any().openapi({ description: 'Ad break slate configuration.' }),
    ).exactOptional(),
    SpliceInsertMessage: SpliceInsertMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'This defines the SCTE-35 <code>splice_insert()</code> message inserted around the ad. For information about using <code>splice_insert()</code>, see the SCTE-35 specficiaiton, section 9.7.3.1.',
        }),
    ).exactOptional(),
    TimeSignalMessage: TimeSignalMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Defines the SCTE-35 <code>time_signal</code> message inserted around the ad.</p> <p>Programs on a channel's schedule can be configured with one or more ad breaks. You can attach a <code>splice_insert</code> SCTE-35 message to the ad break. This message provides basic metadata about the ad break.</p> <p>See section 9.7.4 of the 2022 SCTE-35 specification for more information.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Ad break configuration parameters.', required: [] })
  .openapi('AdBreak')

const ListOfAdBreakSchema = z.array(AdBreakSchema).openapi('ListOfAdBreak')

const ClipRangeSchema = z
  .object({
    EndOffsetMillis: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end offset of the clip range, in milliseconds, starting from the beginning of the VOD source associated with the program.',
        }),
    ),
  })
  .openapi({
    required: ['EndOffsetMillis'],
    description: 'Clip range configuration for the VOD source associated with the program.',
  })
  .openapi('ClipRange')

const CreateProgramResponseSchema = z
  .object({
    AdBreaks: ListOfAdBreakSchema.and(
      z.any().openapi({ description: 'The ad break configuration settings.' }),
    ).exactOptional(),
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The ARN to assign to the program.' }),
    ).exactOptional(),
    ChannelName: StringSchema.and(
      z.any().openapi({ description: 'The name to assign to the channel for this program.' }),
    ).exactOptional(),
    ClipRange: ClipRangeSchema.and(
      z.any().openapi({ description: 'The clip range configuration settings.' }),
    ).exactOptional(),
    CreationTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The time the program was created.' }),
    ).exactOptional(),
    DurationMillis: LongSchema.and(
      z.any().openapi({ description: 'The duration of the live program in milliseconds.' }),
    ).exactOptional(),
    LiveSourceName: StringSchema.and(
      z.any().openapi({ description: 'The name of the LiveSource for this Program.' }),
    ).exactOptional(),
    ProgramName: StringSchema.and(
      z.any().openapi({ description: 'The name to assign to this program.' }),
    ).exactOptional(),
    ScheduledStartTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The scheduled start time for this Program.' }),
    ).exactOptional(),
    SourceLocationName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name to assign to the source location for this program.' }),
    ).exactOptional(),
    VodSourceName: StringSchema.and(
      z.any().openapi({ description: "The name that's used to refer to a VOD source." }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateProgramResponse')

const RelativePositionSchema = z
  .enum(['BEFORE_PROGRAM', 'AFTER_PROGRAM'])
  .openapi('RelativePosition')

const TransitionSchema = z
  .object({
    DurationMillis: LongSchema.and(
      z.any().openapi({ description: 'The duration of the live program in seconds.' }),
    ).exactOptional(),
    RelativePosition: RelativePositionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The position where this program will be inserted relative to the <code>RelativePosition</code>.',
        }),
    ),
    RelativeProgram: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the program that this program will be inserted next to, as defined by <code>RelativePosition</code>.',
        }),
    ).exactOptional(),
    ScheduledStartTimeMillis: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the program is scheduled to start, in epoch milliseconds.',
        }),
    ).exactOptional(),
    Type: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines when the program plays in the schedule. You can set the value to <code>ABSOLUTE</code> or <code>RELATIVE</code>.</p> <p> <code>ABSOLUTE</code> - The program plays at a specific wall clock time. This setting can only be used for channels using the <code>LINEAR</code> <code>PlaybackMode</code>.</p> <p>Note the following considerations when using <code>ABSOLUTE</code> transitions:</p> <p>If the preceding program in the schedule has a duration that extends past the wall clock time, MediaTailor truncates the preceding program on a common segment boundary.</p> <p>If there are gaps in playback, MediaTailor plays the <code>FillerSlate</code> you configured for your linear channel.</p> <p> <code>RELATIVE</code> - The program is inserted into the schedule either before or after a program that you specify via <code>RelativePosition</code>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['RelativePosition', 'Type'],
    description: 'Program transition configuration.',
  })
  .openapi('Transition')

const AccessTypeSchema = z.enum(['S3_SIGV4', 'SECRETS_MANAGER_ACCESS_TOKEN']).openapi('AccessType')

const SecretsManagerAccessTokenConfigurationSchema = z
  .object({
    HeaderName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the HTTP header used to supply the access token in requests to the source location.',
        }),
    ).exactOptional(),
    SecretArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.',
        }),
    ).exactOptional(),
    SecretStringKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS Secrets Manager <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html">SecretString</a> key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'AWS Secrets Manager access token configuration parameters. For information about Secrets Manager access token authentication, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-access-configuration-access-token.html">Working with AWS Secrets Manager access token authentication</a>.',
    required: [],
  })
  .openapi('SecretsManagerAccessTokenConfiguration')

const AccessConfigurationSchema = z
  .object({
    AccessType: AccessTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of authentication used to access content from <code>HttpConfiguration::BaseUrl</code> on your source location. Accepted value: <code>S3_SIGV4</code>.</p> <p> <code>S3_SIGV4</code> - AWS Signature Version 4 authentication for Amazon S3 hosted virtual-style access. If your source location base URL is an Amazon S3 bucket, MediaTailor can use AWS Signature Version 4 (SigV4) authentication to access the bucket where your source content is stored. Your MediaTailor source location baseURL must follow the S3 virtual hosted-style request URL format. For example, https://bucket-name.s3.Region.amazonaws.com/key-name.</p> <p>Before you can use <code>S3_SIGV4</code>, you must meet these requirements:</p> <p>• You must allow MediaTailor to access your S3 bucket by granting mediatailor.amazonaws.com principal access in IAM. For information about configuring access in IAM, see Access management in the IAM User Guide.</p> <p>• The mediatailor.amazonaws.com service principal must have permissions to read all top level manifests referenced by the VodSource packaging configurations.</p> <p>• The caller of the API must have s3:GetObject IAM permissions to read all top level manifests referenced by your MediaTailor VodSource packaging configurations.</p>',
        }),
    ).exactOptional(),
    SecretsManagerAccessTokenConfiguration: SecretsManagerAccessTokenConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'AWS Secrets Manager access token configuration parameters.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Access configuration parameters.', required: [] })
  .openapi('AccessConfiguration')

const DefaultSegmentDeliveryConfigurationSchema = z
  .object({
    BaseUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The hostname of the server that will be used to serve segments. This string must include the protocol, such as <b>https://</b>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.",
    required: [],
  })
  .openapi('DefaultSegmentDeliveryConfiguration')

const HttpConfigurationSchema = z
  .object({
    BaseUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.',
        }),
    ),
  })
  .openapi({
    required: ['BaseUrl'],
    description: 'The HTTP configuration for the source location.',
  })
  .openapi('HttpConfiguration')

const SegmentDeliveryConfigurationSchema = z
  .object({
    BaseUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The base URL of the host or path of the segment delivery server that you're using to serve segments. This is typically a content delivery network (CDN). The URL can be absolute or relative. To use an absolute URL include the protocol, such as <code>https://example.com/some/path</code>. To use a relative URL specify the relative path, such as <code>/some/path*</code>.",
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier used to distinguish between multiple segment delivery configurations in a source location.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The segment delivery configuration settings.', required: [] })
  .openapi('SegmentDeliveryConfiguration')

const ListOfSegmentDeliveryConfigurationSchema = z
  .array(SegmentDeliveryConfigurationSchema)
  .openapi('ListOfSegmentDeliveryConfiguration')

const CreateSourceLocationResponseSchema = z
  .object({
    AccessConfiguration: AccessConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Access configuration parameters. Configures the type of authentication used to access content from your source location.',
        }),
    ).exactOptional(),
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The ARN to assign to the source location.' }),
    ).exactOptional(),
    CreationTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The time the source location was created.' }),
    ).exactOptional(),
    DefaultSegmentDeliveryConfiguration: DefaultSegmentDeliveryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The optional configuration for the server that serves segments.',
        }),
    ).exactOptional(),
    HttpConfiguration: HttpConfigurationSchema.and(
      z.any().openapi({ description: "The source's HTTP package configurations." }),
    ).exactOptional(),
    LastModifiedTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The time the source location was last modified.' }),
    ).exactOptional(),
    SegmentDeliveryConfigurations: ListOfSegmentDeliveryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The segment delivery configurations for the source location. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.',
        }),
    ).exactOptional(),
    SourceLocationName: StringSchema.and(
      z.any().openapi({ description: 'The name to assign to the source location.' }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags to assign to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateSourceLocationResponse')

const CreateVodSourceResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The ARN to assign to this VOD source.' }),
    ).exactOptional(),
    CreationTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The time the VOD source was created.' }),
    ).exactOptional(),
    HttpPackageConfigurations: HttpPackageConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of HTTP package configuration parameters for this VOD source.',
        }),
    ).exactOptional(),
    LastModifiedTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The time the VOD source was last modified.' }),
    ).exactOptional(),
    SourceLocationName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name to assign to the source location for this VOD source.' }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags to assign to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
    VodSourceName: StringSchema.and(
      z.any().openapi({ description: 'The name to assign to the VOD source.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateVodSourceResponse')

const DeleteChannelResponseSchema = z.object({}).openapi('DeleteChannelResponse')

const DeleteChannelPolicyResponseSchema = z.object({}).openapi('DeleteChannelPolicyResponse')

const DeleteLiveSourceResponseSchema = z.object({}).openapi('DeleteLiveSourceResponse')

const DeletePlaybackConfigurationResponseSchema = z
  .object({})
  .openapi('DeletePlaybackConfigurationResponse')

const DeletePrefetchScheduleResponseSchema = z.object({}).openapi('DeletePrefetchScheduleResponse')

const DeleteProgramResponseSchema = z.object({}).openapi('DeleteProgramResponse')

const DeleteSourceLocationResponseSchema = z.object({}).openapi('DeleteSourceLocationResponse')

const DeleteVodSourceResponseSchema = z.object({}).openapi('DeleteVodSourceResponse')

const DescribeChannelResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the channel.' }),
    ).exactOptional(),
    ChannelName: StringSchema.and(
      z.any().openapi({ description: 'The name of the channel.' }),
    ).exactOptional(),
    ChannelState: ChannelStateSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates whether the channel is in a running state or not.' }),
    ).exactOptional(),
    CreationTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The timestamp of when the channel was created.' }),
    ).exactOptional(),
    FillerSlate: SlateSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the slate used to fill gaps between programs in the schedule.',
        }),
    ).exactOptional(),
    LastModifiedTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The timestamp of when the channel was last modified.' }),
    ).exactOptional(),
    LogConfiguration: LogConfigurationForChannelSchema.and(
      z.any().openapi({ description: 'The log configuration for the channel.' }),
    ),
    Outputs: ResponseOutputsSchema.and(
      z.any().openapi({ description: "The channel's output properties." }),
    ).exactOptional(),
    PlaybackMode: StringSchema.and(
      z.any().openapi({ description: "The channel's playback mode." }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags assigned to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
    Tier: StringSchema.and(z.any().openapi({ description: "The channel's tier." })).exactOptional(),
  })
  .openapi({ required: ['LogConfiguration'] })
  .openapi('DescribeChannelResponse')

const DescribeLiveSourceResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the live source.' }),
    ).exactOptional(),
    CreationTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp that indicates when the live source was created.' }),
    ).exactOptional(),
    HttpPackageConfigurations: HttpPackageConfigurationsSchema.and(
      z.any().openapi({ description: 'The HTTP package configurations.' }),
    ).exactOptional(),
    LastModifiedTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp that indicates when the live source was modified.',
        }),
    ).exactOptional(),
    LiveSourceName: StringSchema.and(
      z.any().openapi({ description: 'The name of the live source.' }),
    ).exactOptional(),
    SourceLocationName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the source location associated with the live source.',
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags assigned to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeLiveSourceResponse')

const Long2Schema = z.int().openapi('Long2')

const DescribeProgramResponseSchema = z
  .object({
    AdBreaks: ListOfAdBreakSchema.and(
      z.any().openapi({ description: 'The ad break configuration settings.' }),
    ).exactOptional(),
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the program.' }),
    ).exactOptional(),
    ChannelName: StringSchema.and(
      z.any().openapi({ description: 'The name of the channel that the program belongs to.' }),
    ).exactOptional(),
    ClipRange: ClipRangeSchema.and(
      z.any().openapi({ description: 'The clip range configuration settings.' }),
    ).exactOptional(),
    CreationTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The timestamp of when the program was created.' }),
    ).exactOptional(),
    DurationMillis: Long2Schema.and(
      z.any().openapi({ description: 'The duration of the live program in milliseconds.' }),
    ).exactOptional(),
    LiveSourceName: StringSchema.and(
      z.any().openapi({ description: 'The name of the LiveSource for this Program.' }),
    ).exactOptional(),
    ProgramName: StringSchema.and(
      z.any().openapi({ description: 'The name of the program.' }),
    ).exactOptional(),
    ScheduledStartTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the program is scheduled to start in ISO 8601 format and Coordinated Universal Time (UTC). For example, the value 2021-03-27T17:48:16.751Z represents March 27, 2021 at 17:48:16.751 UTC.',
        }),
    ).exactOptional(),
    SourceLocationName: StringSchema.and(
      z.any().openapi({ description: 'The source location name.' }),
    ).exactOptional(),
    VodSourceName: StringSchema.and(
      z.any().openapi({ description: "The name that's used to refer to a VOD source." }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeProgramResponse')

const DescribeSourceLocationResponseSchema = z
  .object({
    AccessConfiguration: AccessConfigurationSchema.and(
      z.any().openapi({ description: 'The access configuration for the source location.' }),
    ).exactOptional(),
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the source location.' }),
    ).exactOptional(),
    CreationTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp that indicates when the source location was created.',
        }),
    ).exactOptional(),
    DefaultSegmentDeliveryConfiguration: DefaultSegmentDeliveryConfigurationSchema.and(
      z.any().openapi({ description: 'The default segment delivery configuration settings.' }),
    ).exactOptional(),
    HttpConfiguration: HttpConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The HTTP package configuration settings for the source location.',
        }),
    ).exactOptional(),
    LastModifiedTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp that indicates when the source location was last modified.',
        }),
    ).exactOptional(),
    SegmentDeliveryConfigurations: ListOfSegmentDeliveryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the segment delivery configurations associated with this resource.',
        }),
    ).exactOptional(),
    SourceLocationName: StringSchema.and(
      z.any().openapi({ description: 'The name of the source location.' }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags assigned to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSourceLocationResponse')

const DescribeVodSourceResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the VOD source.' }),
    ).exactOptional(),
    CreationTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp that indicates when the VOD source was created.' }),
    ).exactOptional(),
    HttpPackageConfigurations: HttpPackageConfigurationsSchema.and(
      z.any().openapi({ description: 'The HTTP package configurations.' }),
    ).exactOptional(),
    LastModifiedTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The last modified time of the VOD source.' }),
    ).exactOptional(),
    SourceLocationName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the source location associated with the VOD source.',
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags assigned to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
    VodSourceName: StringSchema.and(
      z.any().openapi({ description: 'The name of the VOD source.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeVodSourceResponse')

const GetChannelPolicyResponseSchema = z
  .object({
    Policy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM policy for the channel. IAM policies are used to control access to your channel.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetChannelPolicyResponse')

const ScheduleAdBreakSchema = z
  .object({
    ApproximateDurationSeconds: LongSchema.and(
      z.any().openapi({ description: 'The approximate duration of the ad break, in seconds.' }),
    ).exactOptional(),
    ApproximateStartTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The approximate time that the ad will start playing.' }),
    ).exactOptional(),
    SourceLocationName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the source location containing the VOD source used for the ad break.',
        }),
    ).exactOptional(),
    VodSourceName: StringSchema.and(
      z.any().openapi({ description: 'The name of the VOD source used for the ad break.' }),
    ).exactOptional(),
  })
  .openapi({ description: "The schedule's ad break properties.", required: [] })
  .openapi('ScheduleAdBreak')

const ListOfScheduleAdBreakSchema = z.array(ScheduleAdBreakSchema).openapi('ListOfScheduleAdBreak')

const ScheduleEntryTypeSchema = z.enum(['PROGRAM', 'FILLER_SLATE']).openapi('ScheduleEntryType')

const ScheduleEntrySchema = z
  .object({
    ApproximateDurationSeconds: LongSchema.and(
      z.any().openapi({ description: 'The approximate duration of this program, in seconds.' }),
    ).exactOptional(),
    ApproximateStartTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The approximate time that the program will start playing.' }),
    ).exactOptional(),
    Arn: StringSchema.and(z.any().openapi({ description: 'The ARN of the program.' })),
    ChannelName: StringSchema.and(
      z.any().openapi({ description: 'The name of the channel that uses this schedule.' }),
    ),
    LiveSourceName: StringSchema.and(
      z.any().openapi({ description: 'The name of the live source used for the program.' }),
    ).exactOptional(),
    ProgramName: StringSchema.and(z.any().openapi({ description: 'The name of the program.' })),
    ScheduleAdBreaks: ListOfScheduleAdBreakSchema.and(
      z.any().openapi({ description: "The schedule's ad break properties." }),
    ).exactOptional(),
    ScheduleEntryType: ScheduleEntryTypeSchema.and(
      z.any().openapi({ description: 'The type of schedule entry.' }),
    ).exactOptional(),
    SourceLocationName: StringSchema.and(
      z.any().openapi({ description: 'The name of the source location.' }),
    ),
    VodSourceName: StringSchema.and(
      z.any().openapi({ description: 'The name of the VOD source.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Arn', 'ChannelName', 'ProgramName', 'SourceLocationName'],
    description: 'The properties for a schedule.',
  })
  .openapi('ScheduleEntry')

const ListOfScheduleEntrySchema = z.array(ScheduleEntrySchema).openapi('ListOfScheduleEntry')

const GetChannelScheduleResponseSchema = z
  .object({
    Items: ListOfScheduleEntrySchema.and(
      z.any().openapi({ description: 'A list of schedule entries for the channel.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetChannelScheduleResponse')

const ModeSchema = z.enum(['OFF', 'BEHIND_LIVE_EDGE']).openapi('Mode')

const AvailSuppressionSchema = z
  .object({
    Mode: ModeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Sets the ad suppression mode. By default, ad suppression is off and all ad breaks are filled with ads or slate. When Mode is set to <code>BEHIND_LIVE_EDGE</code>, ad suppression is active and MediaTailor won't fill ad breaks on or behind the ad suppression Value time in the manifest lookback window.",
        }),
    ).exactOptional(),
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A live edge offset time in HH:MM:SS. MediaTailor won't fill ad breaks on or behind this time in the manifest lookback window. If Value is set to 00:00:00, it is in sync with the live edge, and MediaTailor won't fill any ad breaks on or behind the live edge. If you set a Value time, MediaTailor won't fill any ad breaks on or behind this time in the manifest lookback window. For example, if you set 00:45:00, then MediaTailor will fill ad breaks that occur within 45 minutes behind the live edge, but won't fill ad breaks on or behind 45 minutes behind the live edge.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.',
    required: [],
  })
  .openapi('AvailSuppression')

const BumperSchema = z
  .object({
    EndUrl: StringSchema.and(
      z.any().openapi({ description: 'The URL for the end bumper asset.' }),
    ).exactOptional(),
    StartUrl: StringSchema.and(
      z.any().openapi({ description: 'The URL for the start bumper asset.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.',
    required: [],
  })
  .openapi('Bumper')

const CdnConfigurationSchema = z
  .object({
    AdSegmentUrlPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A non-default content delivery network (CDN) to serve ad segments. By default, AWS Elemental MediaTailor uses Amazon CloudFront with default cache settings as its CDN for ad segments. To set up an alternate CDN, create a rule in your CDN for the origin ads.mediatailor.<i>&lt;region&gt;</i>.amazonaws.com. Then specify the rule's name in this <code>AdSegmentUrlPrefix</code>. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for ad segments.",
        }),
    ).exactOptional(),
    ContentSegmentUrlPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A content delivery network (CDN) to cache content segments, so that content requests don’t always have to go to the origin server. First, create a rule in your CDN for the content segment origin server. Then specify the rule's name in this <code>ContentSegmentUrlPrefix</code>. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for content segments.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.',
    required: [],
  })
  .openapi('CdnConfiguration')

const ConfigurationAliasesResponseSchema = z
  .record(z.string(), MapOfStringSchema)
  .openapi({ description: 'The predefined aliases for dynamic variables.' })
  .openapi('ConfigurationAliasesResponse')

const OriginManifestTypeSchema = z
  .enum(['SINGLE_PERIOD', 'MULTI_PERIOD'])
  .openapi('OriginManifestType')

const DashConfigurationSchema = z
  .object({
    ManifestEndpointPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL generated by MediaTailor to initiate a playback session. The session uses server-side reporting. This setting is ignored in PUT operations.',
        }),
    ).exactOptional(),
    MpdLocation: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are <code>DISABLED</code> and <code>EMT_DEFAULT</code>. The <code>EMT_DEFAULT</code> setting enables the inclusion of the tag and is the default value.",
        }),
    ).exactOptional(),
    OriginManifestType: OriginManifestTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to <code>SINGLE_PERIOD</code>. The default setting is <code>MULTI_PERIOD</code>. For multi-period manifests, omit this setting or set it to <code>MULTI_PERIOD</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The configuration for DASH content.', required: [] })
  .openapi('DashConfiguration')

const HlsConfigurationSchema = z
  .object({
    ManifestEndpointPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL that is used to initiate a playback session for devices that support Apple HLS. The session uses server-side reporting.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The configuration for HLS content.', required: [] })
  .openapi('HlsConfiguration')

const LivePreRollConfigurationSchema = z
  .object({
    AdDecisionServerUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL for the ad decision server (ADS) for pre-roll ads. This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.',
        }),
    ).exactOptional(),
    MaxDurationSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum allowed duration for the pre-roll ad avail. AWS Elemental MediaTailor won't play pre-roll ads to exceed this duration, regardless of the total duration of ads that the ADS returns.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The configuration for pre-roll ad insertion.', required: [] })
  .openapi('LivePreRollConfiguration')

const LogConfigurationSchema = z
  .object({
    PercentEnabled: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The percentage of session logs that MediaTailor sends to your Cloudwatch Logs account. For example, if your playback configuration has 1000 sessions and <code>percentEnabled</code> is set to <code>60</code>, MediaTailor sends logs for 600 of the sessions to CloudWatch Logs. MediaTailor decides at random which of the playback configuration sessions to send logs for. If you want to view logs for a specific session, you can use the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/debug-log-mode.html">debug log mode</a>.</p> <p>Valid values: <code>0</code> - <code>100</code> </p>',
        }),
    ),
  })
  .openapi({
    required: ['PercentEnabled'],
    description: 'Returns Amazon CloudWatch log settings for a playback configuration.',
  })
  .openapi('LogConfiguration')

const BooleanSchema = z.boolean().openapi('Boolean')

const AdMarkerPassthroughSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z.any().openapi({ description: 'Enables ad marker passthrough for your configuration.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>For HLS, when set to <code>true</code>, MediaTailor passes through <code>EXT-X-CUE-IN</code>, <code>EXT-X-CUE-OUT</code>, and <code>EXT-X-SPLICEPOINT-SCTE35</code> ad markers from the origin manifest to the MediaTailor personalized manifest.</p> <p>No logic is applied to these ad markers. For example, if <code>EXT-X-CUE-OUT</code> has a value of <code>60</code>, but no ads are filled for that ad break, MediaTailor will not set the value to <code>0</code>.</p>',
    required: [],
  })
  .openapi('AdMarkerPassthrough')

const ManifestProcessingRulesSchema = z
  .object({
    AdMarkerPassthrough: AdMarkerPassthroughSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For HLS, when set to <code>true</code>, MediaTailor passes through <code>EXT-X-CUE-IN</code>, <code>EXT-X-CUE-OUT</code>, and <code>EXT-X-SPLICEPOINT-SCTE35</code> ad markers from the origin manifest to the MediaTailor personalized manifest.</p> <p>No logic is applied to these ad markers. For example, if <code>EXT-X-CUE-OUT</code> has a value of <code>60</code>, but no ads are filled for that ad break, MediaTailor will not set the value to <code>0</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.',
    required: [],
  })
  .openapi('ManifestProcessingRules')

const IntegerMin1Schema = z.int().min(1).openapi('IntegerMin1')

const GetPlaybackConfigurationResponseSchema = z
  .object({
    AdDecisionServerUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.',
        }),
    ).exactOptional(),
    AvailSuppression: AvailSuppressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.',
        }),
    ).exactOptional(),
    Bumper: BumperSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.',
        }),
    ).exactOptional(),
    CdnConfiguration: CdnConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.',
        }),
    ).exactOptional(),
    ConfigurationAliases: ConfigurationAliasesResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'The player parameters and aliases used as dynamic variables during session initialization. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domain.html">Domain Variables</a>.',
        }),
    ).exactOptional(),
    DashConfiguration: DashConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for DASH content.' }),
    ).exactOptional(),
    HlsConfiguration: HlsConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for HLS content.' }),
    ).exactOptional(),
    LivePreRollConfiguration: LivePreRollConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for pre-roll ad insertion.' }),
    ).exactOptional(),
    LogConfiguration: LogConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon CloudWatch log settings for a playback configuration.',
        }),
    ).exactOptional(),
    ManifestProcessingRules: ManifestProcessingRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The identifier for the playback configuration.' }),
    ).exactOptional(),
    PersonalizationThresholdSeconds: IntegerMin1Schema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.',
        }),
    ).exactOptional(),
    PlaybackConfigurationArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) for the playback configuration.' }),
    ).exactOptional(),
    PlaybackEndpointPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL that the player accesses to get a manifest from AWS Elemental MediaTailor. This session will use server-side reporting.',
        }),
    ).exactOptional(),
    SessionInitializationEndpointPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL that the player uses to initialize a session that uses client-side reporting.',
        }),
    ).exactOptional(),
    SlateAdUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.",
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags assigned to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
    TranscodeProfileName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.',
        }),
    ).exactOptional(),
    VideoContentSourceUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPlaybackConfigurationResponse')

const GetPrefetchScheduleResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the prefetch schedule.' }),
    ).exactOptional(),
    Consumption: PrefetchConsumptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Consumption settings determine how, and when, MediaTailor places the prefetched ads into ad breaks. Ad consumption occurs within a span of time that you define, called a <i>consumption window</i>. You can designate which ad breaks that MediaTailor fills with prefetch ads by setting avail matching criteria.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the prefetch schedule. The name must be unique among all prefetch schedules that are associated with the specified playback configuration.',
        }),
    ).exactOptional(),
    PlaybackConfigurationName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the playback configuration to create the prefetch schedule for.',
        }),
    ).exactOptional(),
    Retrieval: PrefetchRetrievalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains settings for prefetch retrieval from the ad decision server (ADS).',
        }),
    ).exactOptional(),
    StreamId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional stream identifier that you can specify in order to prefetch for multiple streams that use the same playback configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPrefetchScheduleResponse')

const ListOfStringSchema = z.array(StringSchema).openapi('ListOfString')

const AlertSchema = z
  .object({
    AlertCode: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The code for the alert. For example, <code>NOT_PROCESSED</code>.',
        }),
    ),
    AlertMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If an alert is generated for a resource, an explanation of the reason for the alert.',
        }),
    ),
    LastModifiedTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The timestamp when the alert was last modified.' }),
    ),
    RelatedResourceArns: ListOfStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Names (ARNs) related to this alert.' }),
    ),
    ResourceArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ),
  })
  .openapi({
    required: [
      'AlertCode',
      'AlertMessage',
      'LastModifiedTime',
      'RelatedResourceArns',
      'ResourceArn',
    ],
    description: 'Alert configuration parameters.',
  })
  .openapi('Alert')

const ListOfAlertSchema = z.array(AlertSchema).openapi('ListOfAlert')

const ListAlertsResponseSchema = z
  .object({
    Items: ListOfAlertSchema.and(
      z.any().openapi({ description: 'A list of alerts that are associated with this resource.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAlertsResponse')

const ChannelSchema: z.ZodType<ChannelType> = z
  .lazy(() =>
    z
      .object({
        Arn: StringSchema.and(z.any().openapi({ description: 'The ARN of the channel.' })),
        ChannelName: StringSchema.and(z.any().openapi({ description: 'The name of the channel.' })),
        ChannelState: StringSchema.and(
          z
            .any()
            .openapi({ description: 'Returns the state whether the channel is running or not.' }),
        ),
        CreationTime: TimestampUnixSchema.and(
          z.any().openapi({ description: 'The timestamp of when the channel was created.' }),
        ).exactOptional(),
        FillerSlate: SlateSourceSchema.and(
          z
            .any()
            .openapi({
              description:
                "The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the <code>LINEAR</code> <code>PlaybackMode</code>. MediaTailor doesn't support filler slate for channels using the <code>LOOP</code> <code>PlaybackMode</code>.",
            }),
        ).exactOptional(),
        LastModifiedTime: TimestampUnixSchema.and(
          z.any().openapi({ description: 'The timestamp of when the channel was last modified.' }),
        ).exactOptional(),
        LogConfiguration: LogConfigurationForChannelSchema.and(
          z.any().openapi({ description: 'The log configuration.' }),
        ),
        Outputs: ResponseOutputsSchema.and(
          z.any().openapi({ description: "The channel's output properties." }),
        ),
        PlaybackMode: StringSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>The type of playback mode for this channel.</p> <p> <code>LINEAR</code> - Programs play back-to-back only once.</p> <p> <code>LOOP</code> - Programs play back-to-back in an endless loop. When the last program in the schedule plays, playback loops back to the first program in the schedule.</p>',
            }),
        ),
        Tags: MapOfStringSchema.and(
          z
            .any()
            .openapi({
              xml: { name: 'tags' },
              description:
                'The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
            }),
        ).exactOptional(),
        Tier: StringSchema.and(
          z
            .any()
            .openapi({
              description:
                'The tier for this channel. STANDARD tier channels can contain live programs.',
            }),
        ),
      })
      .openapi({
        required: [
          'Arn',
          'ChannelName',
          'ChannelState',
          'LogConfiguration',
          'Outputs',
          'PlaybackMode',
          'Tier',
        ],
        description:
          'The configuration parameters for a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.',
      }),
  )
  .openapi('Channel')

const ListOfChannelSchema = z.array(ChannelSchema).openapi('ListOfChannel')

const ListChannelsResponseSchema = z
  .object({
    Items: ListOfChannelSchema.and(
      z.any().openapi({ description: 'A list of channels that are associated with this account.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListChannelsResponse')

const LiveSourceSchema = z
  .object({
    Arn: StringSchema.and(z.any().openapi({ description: 'The ARN for the live source.' })),
    CreationTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp that indicates when the live source was created.' }),
    ).exactOptional(),
    HttpPackageConfigurations: HttpPackageConfigurationsSchema.and(
      z.any().openapi({ description: 'The HTTP package configurations for the live source.' }),
    ),
    LastModifiedTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp that indicates when the live source was last modified.',
        }),
    ).exactOptional(),
    LiveSourceName: StringSchema.and(
      z.any().openapi({ description: "The name that's used to refer to a live source." }),
    ),
    SourceLocationName: StringSchema.and(
      z.any().openapi({ description: 'The name of the source location.' }),
    ),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags assigned to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Arn', 'HttpPackageConfigurations', 'LiveSourceName', 'SourceLocationName'],
    description: 'Live source configuration parameters.',
  })
  .openapi('LiveSource')

const ListOfLiveSourceSchema = z.array(LiveSourceSchema).openapi('ListOfLiveSource')

const ListLiveSourcesResponseSchema = z
  .object({
    Items: ListOfLiveSourceSchema.and(
      z.any().openapi({ description: 'Lists the live sources.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLiveSourcesResponse')

const PlaybackConfigurationSchema = z
  .object({
    AdDecisionServerUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.',
        }),
    ).exactOptional(),
    AvailSuppression: AvailSuppressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.',
        }),
    ).exactOptional(),
    Bumper: BumperSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.',
        }),
    ).exactOptional(),
    CdnConfiguration: CdnConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.',
        }),
    ).exactOptional(),
    ConfigurationAliases: ConfigurationAliasesResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'The player parameters and aliases used as dynamic variables during session initialization. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domain.html">Domain Variables</a>.',
        }),
    ).exactOptional(),
    DashConfiguration: DashConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for a DASH source.' }),
    ).exactOptional(),
    HlsConfiguration: HlsConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for HLS content.' }),
    ).exactOptional(),
    LivePreRollConfiguration: LivePreRollConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for pre-roll ad insertion.' }),
    ).exactOptional(),
    LogConfiguration: LogConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon CloudWatch log settings for a playback configuration.',
        }),
    ).exactOptional(),
    ManifestProcessingRules: ManifestProcessingRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The identifier for the playback configuration.' }),
    ).exactOptional(),
    PersonalizationThresholdSeconds: IntegerMin1Schema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.',
        }),
    ).exactOptional(),
    PlaybackConfigurationArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) for the playback configuration.' }),
    ).exactOptional(),
    PlaybackEndpointPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL that the player accesses to get a manifest from AWS Elemental MediaTailor.',
        }),
    ).exactOptional(),
    SessionInitializationEndpointPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL that the player uses to initialize a session that uses client-side reporting.',
        }),
    ).exactOptional(),
    SlateAdUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The URL for a video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.",
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags to assign to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
    TranscodeProfileName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.',
        }),
    ).exactOptional(),
    VideoContentSourceUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.',
    required: [],
  })
  .openapi('PlaybackConfiguration')

const ListOfPlaybackConfigurationSchema = z
  .array(PlaybackConfigurationSchema)
  .openapi('ListOfPlaybackConfiguration')

const ListPlaybackConfigurationsResponseSchema = z
  .object({
    Items: ListOfPlaybackConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Array of playback configurations. This might be all the available configurations or a subset, depending on the settings that you provide and the total number of configurations stored.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Pagination token returned by the GET list request when results exceed the maximum allowed. Use the token to fetch the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPlaybackConfigurationsResponse')

const PrefetchScheduleSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the prefetch schedule.' }),
    ),
    Consumption: PrefetchConsumptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Consumption settings determine how, and when, MediaTailor places the prefetched ads into ad breaks. Ad consumption occurs within a span of time that you define, called a <i>consumption window</i>. You can designate which ad breaks that MediaTailor fills with prefetch ads by setting avail matching criteria.',
        }),
    ),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the prefetch schedule. The name must be unique among all prefetch schedules that are associated with the specified playback configuration.',
        }),
    ),
    PlaybackConfigurationName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the playback configuration to create the prefetch schedule for.',
        }),
    ),
    Retrieval: PrefetchRetrievalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains settings for prefetch retrieval from the ad decision server (ADS).',
        }),
    ),
    StreamId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional stream identifier that you can specify in order to prefetch for multiple streams that use the same playback configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Arn', 'Consumption', 'Name', 'PlaybackConfigurationName', 'Retrieval'],
    description:
      'A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Using ad prefetching</a> in the <i>MediaTailor User Guide</i>.',
  })
  .openapi('PrefetchSchedule')

const ListOfPrefetchScheduleSchema = z
  .array(PrefetchScheduleSchema)
  .openapi('ListOfPrefetchSchedule')

const ListPrefetchSchedulesResponseSchema = z
  .object({
    Items: ListOfPrefetchScheduleSchema.and(
      z
        .any()
        .openapi({
          description:
            "Lists the prefetch schedules. An empty <code>Items</code> list doesn't mean there aren't more items to fetch, just that that page was empty.",
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPrefetchSchedulesResponse')

const SourceLocationSchema = z
  .object({
    AccessConfiguration: AccessConfigurationSchema.and(
      z.any().openapi({ description: 'The access configuration for the source location.' }),
    ).exactOptional(),
    Arn: StringSchema.and(z.any().openapi({ description: 'The ARN of the SourceLocation.' })),
    CreationTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp that indicates when the source location was created.',
        }),
    ).exactOptional(),
    DefaultSegmentDeliveryConfiguration: DefaultSegmentDeliveryConfigurationSchema.and(
      z.any().openapi({ description: 'The default segment delivery configuration.' }),
    ).exactOptional(),
    HttpConfiguration: HttpConfigurationSchema.and(
      z.any().openapi({ description: 'The HTTP configuration for the source location.' }),
    ),
    LastModifiedTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp that indicates when the source location was last modified.',
        }),
    ).exactOptional(),
    SegmentDeliveryConfigurations: ListOfSegmentDeliveryConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'The segment delivery configurations for the source location.' }),
    ).exactOptional(),
    SourceLocationName: StringSchema.and(
      z.any().openapi({ description: 'The name of the source location.' }),
    ),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags assigned to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Arn', 'HttpConfiguration', 'SourceLocationName'],
    description:
      'A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.',
  })
  .openapi('SourceLocation')

const ListOfSourceLocationSchema = z.array(SourceLocationSchema).openapi('ListOfSourceLocation')

const ListSourceLocationsResponseSchema = z
  .object({
    Items: ListOfSourceLocationSchema.and(
      z.any().openapi({ description: 'A list of source locations.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSourceLocationsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags associated with this resource. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const VodSourceSchema = z
  .object({
    Arn: StringSchema.and(z.any().openapi({ description: 'The ARN for the VOD source.' })),
    CreationTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp that indicates when the VOD source was created.' }),
    ).exactOptional(),
    HttpPackageConfigurations: HttpPackageConfigurationsSchema.and(
      z.any().openapi({ description: 'The HTTP package configurations for the VOD source.' }),
    ),
    LastModifiedTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp that indicates when the VOD source was last modified.',
        }),
    ).exactOptional(),
    SourceLocationName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the source location that the VOD source is associated with.',
        }),
    ),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags assigned to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
    VodSourceName: StringSchema.and(
      z.any().openapi({ description: 'The name of the VOD source.' }),
    ),
  })
  .openapi({
    required: ['Arn', 'HttpPackageConfigurations', 'SourceLocationName', 'VodSourceName'],
    description: 'VOD source configuration parameters.',
  })
  .openapi('VodSource')

const ListOfVodSourceSchema = z.array(VodSourceSchema).openapi('ListOfVodSource')

const ListVodSourcesResponseSchema = z
  .object({
    Items: ListOfVodSourceSchema.and(
      z.any().openapi({ description: 'Lists the VOD sources.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListVodSourcesResponse')

const PutChannelPolicyResponseSchema = z.object({}).openapi('PutChannelPolicyResponse')

const PutPlaybackConfigurationResponseSchema = z
  .object({
    AdDecisionServerUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.',
        }),
    ).exactOptional(),
    AvailSuppression: AvailSuppressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.',
        }),
    ).exactOptional(),
    Bumper: BumperSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.',
        }),
    ).exactOptional(),
    CdnConfiguration: CdnConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.',
        }),
    ).exactOptional(),
    ConfigurationAliases: ConfigurationAliasesResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'The player parameters and aliases used as dynamic variables during session initialization. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domain.html">Domain Variables</a>.',
        }),
    ).exactOptional(),
    DashConfiguration: DashConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for DASH content.' }),
    ).exactOptional(),
    HlsConfiguration: HlsConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for HLS content.' }),
    ).exactOptional(),
    LivePreRollConfiguration: LivePreRollConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for pre-roll ad insertion.' }),
    ).exactOptional(),
    LogConfiguration: LogConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon CloudWatch log settings for a playback configuration.',
        }),
    ).exactOptional(),
    ManifestProcessingRules: ManifestProcessingRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The identifier for the playback configuration.' }),
    ).exactOptional(),
    PersonalizationThresholdSeconds: IntegerMin1Schema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.',
        }),
    ).exactOptional(),
    PlaybackConfigurationArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) associated with the playback configuration.',
        }),
    ).exactOptional(),
    PlaybackEndpointPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The playback endpoint prefix associated with the playback configuration.',
        }),
    ).exactOptional(),
    SessionInitializationEndpointPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The session initialization endpoint prefix associated with the playback configuration.',
        }),
    ).exactOptional(),
    SlateAdUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.",
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags to assign to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
    TranscodeProfileName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.',
        }),
    ).exactOptional(),
    VideoContentSourceUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutPlaybackConfigurationResponse')

const StartChannelResponseSchema = z.object({}).openapi('StartChannelResponse')

const StopChannelResponseSchema = z.object({}).openapi('StopChannelResponse')

const UpdateChannelResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) associated with the channel.' }),
    ).exactOptional(),
    ChannelName: StringSchema.and(
      z.any().openapi({ description: 'The name of the channel.' }),
    ).exactOptional(),
    ChannelState: ChannelStateSchema.and(
      z.any().openapi({ description: 'Returns the state whether the channel is running or not.' }),
    ).exactOptional(),
    CreationTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The timestamp of when the channel was created.' }),
    ).exactOptional(),
    FillerSlate: SlateSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            "The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the <code>LINEAR</code> <code>PlaybackMode</code>. MediaTailor doesn't support filler slate for channels using the <code>LOOP</code> <code>PlaybackMode</code>.",
        }),
    ).exactOptional(),
    LastModifiedTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp that indicates when the channel was last modified.',
        }),
    ).exactOptional(),
    Outputs: ResponseOutputsSchema.and(
      z.any().openapi({ description: "The channel's output properties." }),
    ).exactOptional(),
    PlaybackMode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of playback mode for this channel.</p> <p> <code>LINEAR</code> - Programs play back-to-back only once.</p> <p> <code>LOOP</code> - Programs play back-to-back in an endless loop. When the last program in the schedule plays, playback loops back to the first program in the schedule.</p>',
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
    Tier: StringSchema.and(
      z.any().openapi({ description: 'The tier associated with this Channel.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateChannelResponse')

const UpdateLiveSourceResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) associated with this live source.',
        }),
    ).exactOptional(),
    CreationTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp that indicates when the live source was created.' }),
    ).exactOptional(),
    HttpPackageConfigurations: HttpPackageConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of HTTP package configurations for the live source on this account.',
        }),
    ).exactOptional(),
    LastModifiedTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp that indicates when the live source was last modified.',
        }),
    ).exactOptional(),
    LiveSourceName: StringSchema.and(
      z.any().openapi({ description: 'The name of the live source.' }),
    ).exactOptional(),
    SourceLocationName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the source location associated with the live source.',
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags to assign to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateLiveSourceResponse')

const UpdateProgramResponseSchema = z
  .object({
    AdBreaks: ListOfAdBreakSchema.and(
      z.any().openapi({ description: 'The ad break configuration settings.' }),
    ).exactOptional(),
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The ARN to assign to the program.' }),
    ).exactOptional(),
    ChannelName: StringSchema.and(
      z.any().openapi({ description: 'The name to assign to the channel for this program.' }),
    ).exactOptional(),
    ClipRange: ClipRangeSchema.and(
      z.any().openapi({ description: 'The clip range configuration settings.' }),
    ).exactOptional(),
    CreationTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The time the program was created.' }),
    ).exactOptional(),
    DurationMillis: LongSchema.and(
      z.any().openapi({ description: 'The duration of the live program in milliseconds.' }),
    ).exactOptional(),
    LiveSourceName: StringSchema.and(
      z.any().openapi({ description: 'The name of the LiveSource for this Program.' }),
    ).exactOptional(),
    ProgramName: StringSchema.and(
      z.any().openapi({ description: 'The name to assign to this program.' }),
    ).exactOptional(),
    ScheduledStartTime: TimestampUnixSchema.and(
      z.any().openapi({ description: 'The scheduled start time for this Program.' }),
    ).exactOptional(),
    SourceLocationName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name to assign to the source location for this program.' }),
    ).exactOptional(),
    VodSourceName: StringSchema.and(
      z.any().openapi({ description: "The name that's used to refer to a VOD source." }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateProgramResponse')

const UpdateProgramTransitionSchema = z
  .object({
    DurationMillis: LongSchema.and(
      z.any().openapi({ description: 'The duration of the live program in seconds.' }),
    ).exactOptional(),
    ScheduledStartTimeMillis: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the program is scheduled to start, in epoch milliseconds.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Program transition configuration.', required: [] })
  .openapi('UpdateProgramTransition')

const UpdateSourceLocationResponseSchema = z
  .object({
    AccessConfiguration: AccessConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Access configuration parameters. Configures the type of authentication used to access content from your source location.',
        }),
    ).exactOptional(),
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) associated with the source location.',
        }),
    ).exactOptional(),
    CreationTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp that indicates when the source location was created.',
        }),
    ).exactOptional(),
    DefaultSegmentDeliveryConfiguration: DefaultSegmentDeliveryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The optional configuration for the host server that serves segments.',
        }),
    ).exactOptional(),
    HttpConfiguration: HttpConfigurationSchema.and(
      z.any().openapi({ description: 'The HTTP configuration for the source location.' }),
    ).exactOptional(),
    LastModifiedTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp that indicates when the source location was last modified.',
        }),
    ).exactOptional(),
    SegmentDeliveryConfigurations: ListOfSegmentDeliveryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The segment delivery configurations for the source location. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.',
        }),
    ).exactOptional(),
    SourceLocationName: StringSchema.and(
      z.any().openapi({ description: 'The name of the source location.' }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags to assign to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSourceLocationResponse')

const UpdateVodSourceResponseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) associated with the VOD source.' }),
    ).exactOptional(),
    CreationTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp that indicates when the VOD source was created.' }),
    ).exactOptional(),
    HttpPackageConfigurations: HttpPackageConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of HTTP package configurations for the VOD source on this account.',
        }),
    ).exactOptional(),
    LastModifiedTime: TimestampUnixSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp that indicates when the VOD source was last modified.',
        }),
    ).exactOptional(),
    SourceLocationName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the source location associated with the VOD source.',
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags to assign to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
    VodSourceName: StringSchema.and(
      z.any().openapi({ description: 'The name of the VOD source.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateVodSourceResponse')

const ConfigurationAliasesRequestSchema = z
  .record(z.string(), MapOfStringSchema)
  .openapi({ description: 'The predefined aliases for dynamic variables.' })
  .openapi('ConfigurationAliasesRequest')

const ConfigureLogsForChannelRequestSchema = z
  .object({
    ChannelName: StringSchema.and(z.any().openapi({ description: 'The name of the channel.' })),
    LogTypes: LogTypesSchema.and(z.any().openapi({ description: 'The types of logs to collect.' })),
  })
  .openapi({ required: ['ChannelName', 'LogTypes'], title: 'ConfigureLogsForChannelRequest' })
  .openapi('ConfigureLogsForChannelRequest')

const ConfigureLogsForPlaybackConfigurationRequestSchema = z
  .object({
    PercentEnabled: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The percentage of session logs that MediaTailor sends to your Cloudwatch Logs account. For example, if your playback configuration has 1000 sessions and percentEnabled is set to <code>60</code>, MediaTailor sends logs for 600 of the sessions to CloudWatch Logs. MediaTailor decides at random which of the playback configuration sessions to send logs for. If you want to view logs for a specific session, you can use the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/debug-log-mode.html">debug log mode</a>.</p> <p>Valid values: <code>0</code> - <code>100</code> </p>',
        }),
    ),
    PlaybackConfigurationName: StringSchema.and(
      z.any().openapi({ description: 'The name of the playback configuration.' }),
    ),
  })
  .openapi({
    required: ['PercentEnabled', 'PlaybackConfigurationName'],
    title: 'ConfigureLogsForPlaybackConfigurationRequest',
    description: 'Configures Amazon CloudWatch log settings for a playback configuration.',
  })
  .openapi('ConfigureLogsForPlaybackConfigurationRequest')

const RequestOutputsSchema = z
  .array(RequestOutputItemSchema)
  .openapi({ description: 'An object that represents an object in the CreateChannel request.' })
  .openapi('RequestOutputs')

const PlaybackModeSchema = z.enum(['LOOP', 'LINEAR']).openapi('PlaybackMode')

const TierSchema = z.enum(['BASIC', 'STANDARD']).openapi('Tier')

const CreateChannelRequestSchema = z
  .object({
    FillerSlate: SlateSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            "The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the <code>LINEAR</code> <code>PlaybackMode</code>. MediaTailor doesn't support filler slate for channels using the <code>LOOP</code> <code>PlaybackMode</code>.",
        }),
    ).exactOptional(),
    Outputs: RequestOutputsSchema.and(
      z.any().openapi({ description: "The channel's output properties." }),
    ),
    PlaybackMode: PlaybackModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of playback mode to use for this channel.</p> <p> <code>LINEAR</code> - The programs in the schedule play once back-to-back in the schedule.</p> <p> <code>LOOP</code> - The programs in the schedule play back-to-back in an endless loop. When the last program in the schedule stops playing, playback loops back to the first program in the schedule.</p>',
        }),
    ),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
    Tier: TierSchema.and(
      z.any().openapi({ description: 'The tier of the channel.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Outputs', 'PlaybackMode'], title: 'CreateChannelRequest' })
  .openapi('CreateChannelRequest')

const CreateLiveSourceRequestSchema = z
  .object({
    HttpPackageConfigurations: HttpPackageConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of HTTP package configuration parameters for this live source.',
        }),
    ),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags to assign to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['HttpPackageConfigurations'], title: 'CreateLiveSourceRequest' })
  .openapi('CreateLiveSourceRequest')

const CreatePrefetchScheduleRequestSchema = z
  .object({
    Consumption: PrefetchConsumptionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The configuration settings for MediaTailor's <i>consumption</i> of the prefetched ads from the ad decision server. Each consumption configuration contains an end time and an optional start time that define the <i>consumption window</i>. Prefetch schedules automatically expire no earlier than seven days after the end time.",
        }),
    ),
    Retrieval: PrefetchRetrievalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration settings for retrieval of prefetched ads from the ad decision server. Only one set of prefetched ads will be retrieved and subsequently consumed for each ad break.',
        }),
    ),
    StreamId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration. If <code>StreamId</code> is specified, MediaTailor returns all of the prefetch schedules with an exact match on <code>StreamId</code>. If not specified, MediaTailor returns all of the prefetch schedules for the playback configuration, regardless of <code>StreamId</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Consumption', 'Retrieval'], title: 'CreatePrefetchScheduleRequest' })
  .openapi('CreatePrefetchScheduleRequest')

const ScheduleConfigurationSchema = z
  .object({
    ClipRange: ClipRangeSchema.and(
      z.any().openapi({ description: 'Program clip range configuration.' }),
    ).exactOptional(),
    Transition: TransitionSchema.and(
      z.any().openapi({ description: 'Program transition configurations.' }),
    ),
  })
  .openapi({
    required: ['Transition'],
    description:
      'Schedule configuration parameters. A channel must be stopped before changes can be made to the schedule.',
  })
  .openapi('ScheduleConfiguration')

const CreateProgramRequestSchema = z
  .object({
    AdBreaks: ListOfAdBreakSchema.and(
      z.any().openapi({ description: 'The ad break configuration settings.' }),
    ).exactOptional(),
    LiveSourceName: StringSchema.and(
      z.any().openapi({ description: 'The name of the LiveSource for this Program.' }),
    ).exactOptional(),
    ScheduleConfiguration: ScheduleConfigurationSchema.and(
      z.any().openapi({ description: 'The schedule configuration settings.' }),
    ),
    SourceLocationName: StringSchema.and(
      z.any().openapi({ description: 'The name of the source location.' }),
    ),
    VodSourceName: StringSchema.and(
      z.any().openapi({ description: "The name that's used to refer to a VOD source." }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ScheduleConfiguration', 'SourceLocationName'],
    title: 'CreateProgramRequest',
  })
  .openapi('CreateProgramRequest')

const CreateSourceLocationRequestSchema = z
  .object({
    AccessConfiguration: AccessConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Access configuration parameters. Configures the type of authentication used to access content from your source location.',
        }),
    ).exactOptional(),
    DefaultSegmentDeliveryConfiguration: DefaultSegmentDeliveryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The optional configuration for the server that serves segments.',
        }),
    ).exactOptional(),
    HttpConfiguration: HttpConfigurationSchema.and(
      z.any().openapi({ description: "The source's HTTP package configurations." }),
    ),
    SegmentDeliveryConfigurations: ListOfSegmentDeliveryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the segment delivery configurations associated with this resource.',
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags to assign to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['HttpConfiguration'], title: 'CreateSourceLocationRequest' })
  .openapi('CreateSourceLocationRequest')

const CreateVodSourceRequestSchema = z
  .object({
    HttpPackageConfigurations: HttpPackageConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of HTTP package configuration parameters for this VOD source.',
        }),
    ),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags to assign to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['HttpPackageConfigurations'], title: 'CreateVodSourceRequest' })
  .openapi('CreateVodSourceRequest')

const DashConfigurationForPutSchema = z
  .object({
    MpdLocation: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are <code>DISABLED</code> and <code>EMT_DEFAULT</code>. The <code>EMT_DEFAULT</code> setting enables the inclusion of the tag and is the default value.",
        }),
    ).exactOptional(),
    OriginManifestType: OriginManifestTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to <code>SINGLE_PERIOD</code>. The default setting is <code>MULTI_PERIOD</code>. For multi-period manifests, omit this setting or set it to <code>MULTI_PERIOD</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The configuration for DASH PUT operations.', required: [] })
  .openapi('DashConfigurationForPut')

const DeleteChannelPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteChannelPolicyRequest' })
  .openapi('DeleteChannelPolicyRequest')

const DeleteChannelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteChannelRequest' })
  .openapi('DeleteChannelRequest')

const DeleteLiveSourceRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteLiveSourceRequest' })
  .openapi('DeleteLiveSourceRequest')

const DeletePlaybackConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'DeletePlaybackConfigurationRequest' })
  .openapi('DeletePlaybackConfigurationRequest')

const DeletePrefetchScheduleRequestSchema = z
  .object({})
  .openapi({ title: 'DeletePrefetchScheduleRequest' })
  .openapi('DeletePrefetchScheduleRequest')

const DeleteProgramRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteProgramRequest' })
  .openapi('DeleteProgramRequest')

const DeleteSourceLocationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteSourceLocationRequest' })
  .openapi('DeleteSourceLocationRequest')

const DeleteVodSourceRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteVodSourceRequest' })
  .openapi('DeleteVodSourceRequest')

const DescribeChannelRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeChannelRequest' })
  .openapi('DescribeChannelRequest')

const DescribeLiveSourceRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeLiveSourceRequest' })
  .openapi('DescribeLiveSourceRequest')

const DescribeProgramRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeProgramRequest' })
  .openapi('DescribeProgramRequest')

const DescribeSourceLocationRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeSourceLocationRequest' })
  .openapi('DescribeSourceLocationRequest')

const DescribeVodSourceRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeVodSourceRequest' })
  .openapi('DescribeVodSourceRequest')

const GetChannelPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'GetChannelPolicyRequest' })
  .openapi('GetChannelPolicyRequest')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const GetChannelScheduleRequestSchema = z
  .object({})
  .openapi({ title: 'GetChannelScheduleRequest' })
  .openapi('GetChannelScheduleRequest')

const GetPlaybackConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'GetPlaybackConfigurationRequest' })
  .openapi('GetPlaybackConfigurationRequest')

const GetPrefetchScheduleRequestSchema = z
  .object({})
  .openapi({ title: 'GetPrefetchScheduleRequest' })
  .openapi('GetPrefetchScheduleRequest')

const ListAlertsRequestSchema = z
  .object({})
  .openapi({ title: 'ListAlertsRequest' })
  .openapi('ListAlertsRequest')

const ListChannelsRequestSchema = z
  .object({})
  .openapi({ title: 'ListChannelsRequest' })
  .openapi('ListChannelsRequest')

const ListLiveSourcesRequestSchema = z
  .object({})
  .openapi({ title: 'ListLiveSourcesRequest' })
  .openapi('ListLiveSourcesRequest')

const ListPlaybackConfigurationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListPlaybackConfigurationsRequest' })
  .openapi('ListPlaybackConfigurationsRequest')

const IntegerMin1Max100Schema = z.int().min(1).max(100).openapi('IntegerMin1Max100')

const ListPrefetchSchedulesRequestSchema = z
  .object({
    MaxResults: IntegerMin1Max100Schema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of prefetch schedules that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> prefetch schedules, use the value of <code>NextToken</code> in the response to get the next page of results.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>(Optional) If the playback configuration has more than <code>MaxResults</code> prefetch schedules, use <code>NextToken</code> to get the second and subsequent pages of results.</p> <p> For the first <code>ListPrefetchSchedulesRequest</code> request, omit this value.</p> <p> For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request.</p> <p> If the previous response didn't include a <code>NextToken</code> element, there are no more prefetch schedules to get.</p>",
        }),
    ).exactOptional(),
    StreamId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional filtering parameter whereby MediaTailor filters the prefetch schedules to include only specific streams.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListPrefetchSchedulesRequest', required: [] })
  .openapi('ListPrefetchSchedulesRequest')

const ListSourceLocationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListSourceLocationsRequest' })
  .openapi('ListSourceLocationsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ListVodSourcesRequestSchema = z
  .object({})
  .openapi({ title: 'ListVodSourcesRequest' })
  .openapi('ListVodSourcesRequest')

const PutChannelPolicyRequestSchema = z
  .object({
    Policy: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Adds an IAM role that determines the permissions of your channel.',
        }),
    ),
  })
  .openapi({ required: ['Policy'], title: 'PutChannelPolicyRequest' })
  .openapi('PutChannelPolicyRequest')

const PutPlaybackConfigurationRequestSchema = z
  .object({
    AdDecisionServerUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.',
        }),
    ).exactOptional(),
    AvailSuppression: AvailSuppressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.',
        }),
    ).exactOptional(),
    Bumper: BumperSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.',
        }),
    ).exactOptional(),
    CdnConfiguration: CdnConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.',
        }),
    ).exactOptional(),
    ConfigurationAliases: ConfigurationAliasesRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            'The player parameters and aliases used as dynamic variables during session initialization. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domain.html">Domain Variables</a>.',
        }),
    ).exactOptional(),
    DashConfiguration: DashConfigurationForPutSchema.and(
      z.any().openapi({ description: 'The configuration for DASH content.' }),
    ).exactOptional(),
    LivePreRollConfiguration: LivePreRollConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for pre-roll ad insertion.' }),
    ).exactOptional(),
    ManifestProcessingRules: ManifestProcessingRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The identifier for the playback configuration.' }),
    ),
    PersonalizationThresholdSeconds: IntegerMin1Schema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.',
        }),
    ).exactOptional(),
    SlateAdUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.",
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags to assign to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ).exactOptional(),
    TranscodeProfileName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.',
        }),
    ).exactOptional(),
    VideoContentSourceUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'PutPlaybackConfigurationRequest' })
  .openapi('PutPlaybackConfigurationRequest')

const StartChannelRequestSchema = z
  .object({})
  .openapi({ title: 'StartChannelRequest' })
  .openapi('StartChannelRequest')

const StopChannelRequestSchema = z
  .object({})
  .openapi({ title: 'StopChannelRequest' })
  .openapi('StopChannelRequest')

const TagResourceRequestSchema = z
  .object({
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The tags to assign to the resource. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
        }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateChannelRequestSchema = z
  .object({
    FillerSlate: SlateSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            "The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the <code>LINEAR</code> <code>PlaybackMode</code>. MediaTailor doesn't support filler slate for channels using the <code>LOOP</code> <code>PlaybackMode</code>.",
        }),
    ).exactOptional(),
    Outputs: RequestOutputsSchema.and(
      z.any().openapi({ description: "The channel's output properties." }),
    ),
  })
  .openapi({ required: ['Outputs'], title: 'UpdateChannelRequest' })
  .openapi('UpdateChannelRequest')

const UpdateLiveSourceRequestSchema = z
  .object({
    HttpPackageConfigurations: HttpPackageConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of HTTP package configurations for the live source on this account.',
        }),
    ),
  })
  .openapi({ required: ['HttpPackageConfigurations'], title: 'UpdateLiveSourceRequest' })
  .openapi('UpdateLiveSourceRequest')

const UpdateProgramScheduleConfigurationSchema = z
  .object({
    ClipRange: ClipRangeSchema.and(
      z.any().openapi({ description: 'Program clip range configuration.' }),
    ).exactOptional(),
    Transition: UpdateProgramTransitionSchema.and(
      z.any().openapi({ description: 'Program transition configuration.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Schedule configuration parameters.', required: [] })
  .openapi('UpdateProgramScheduleConfiguration')

const UpdateProgramRequestSchema = z
  .object({
    AdBreaks: ListOfAdBreakSchema.and(
      z.any().openapi({ description: 'The ad break configuration settings.' }),
    ).exactOptional(),
    ScheduleConfiguration: UpdateProgramScheduleConfigurationSchema.and(
      z.any().openapi({ description: 'The schedule configuration settings.' }),
    ),
  })
  .openapi({ required: ['ScheduleConfiguration'], title: 'UpdateProgramRequest' })
  .openapi('UpdateProgramRequest')

const UpdateSourceLocationRequestSchema = z
  .object({
    AccessConfiguration: AccessConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Access configuration parameters. Configures the type of authentication used to access content from your source location.',
        }),
    ).exactOptional(),
    DefaultSegmentDeliveryConfiguration: DefaultSegmentDeliveryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The optional configuration for the host server that serves segments.',
        }),
    ).exactOptional(),
    HttpConfiguration: HttpConfigurationSchema.and(
      z.any().openapi({ description: 'The HTTP configuration for the source location.' }),
    ),
    SegmentDeliveryConfigurations: ListOfSegmentDeliveryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the segment delivery configurations associated with this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['HttpConfiguration'], title: 'UpdateSourceLocationRequest' })
  .openapi('UpdateSourceLocationRequest')

const UpdateVodSourceRequestSchema = z
  .object({
    HttpPackageConfigurations: HttpPackageConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of HTTP package configurations for the VOD source on this account.',
        }),
    ),
  })
  .openapi({ required: ['HttpPackageConfigurations'], title: 'UpdateVodSourceRequest' })
  .openapi('UpdateVodSourceRequest')

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

export const putConfigureLogsChannelRoute = createRoute({
  method: 'put',
  path: '/configureLogs/channel',
  description: 'Configures Amazon CloudWatch log settings for a channel.',
  operationId: 'ConfigureLogsForChannel',
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
              ChannelName: z.string().openapi({ description: 'The name of the channel.' }),
              LogTypes: z
                .array(LogTypeSchema)
                .openapi({ description: 'The types of logs to collect.' }),
            })
            .openapi({ required: ['ChannelName', 'LogTypes'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConfigureLogsForChannelResponseSchema } },
    },
  },
})

export const putConfigureLogsPlaybackConfigurationRoute = createRoute({
  method: 'put',
  path: '/configureLogs/playbackConfiguration',
  description: 'Amazon CloudWatch log settings for a playback configuration.',
  operationId: 'ConfigureLogsForPlaybackConfiguration',
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
              PercentEnabled: z
                .int()
                .openapi({
                  description:
                    '<p>The percentage of session logs that MediaTailor sends to your Cloudwatch Logs account. For example, if your playback configuration has 1000 sessions and percentEnabled is set to <code>60</code>, MediaTailor sends logs for 600 of the sessions to CloudWatch Logs. MediaTailor decides at random which of the playback configuration sessions to send logs for. If you want to view logs for a specific session, you can use the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/debug-log-mode.html">debug log mode</a>.</p> <p>Valid values: <code>0</code> - <code>100</code> </p>',
                }),
              PlaybackConfigurationName: z
                .string()
                .openapi({ description: 'The name of the playback configuration.' }),
            })
            .openapi({ required: ['PercentEnabled', 'PlaybackConfigurationName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ConfigureLogsForPlaybackConfigurationResponseSchema },
      },
    },
  },
})

export const getChannelChannelNameRoute = createRoute({
  method: 'get',
  path: '/channel/{ChannelName}',
  description:
    'Describes a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.',
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
      ChannelName: z
        .string()
        .openapi({
          param: {
            name: 'ChannelName',
            in: 'path',
            required: true,
            description: 'The name of the channel.',
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
  },
})

export const putChannelChannelNameRoute = createRoute({
  method: 'put',
  path: '/channel/{ChannelName}',
  description:
    'Updates a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.',
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
      ChannelName: z
        .string()
        .openapi({
          param: {
            name: 'ChannelName',
            in: 'path',
            required: true,
            description: 'The name of the channel.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              FillerSlate: z
                .object({
                  SourceLocationName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the source location where the slate VOD source is stored.',
                      }),
                  ).exactOptional(),
                  VodSourceName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The slate VOD source name. The VOD source must already exist in a source location before it can be used for slate.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Slate VOD source configuration.', required: [] }),
              Outputs: z
                .array(RequestOutputItemSchema)
                .openapi({
                  description: 'An object that represents an object in the CreateChannel request.',
                }),
            })
            .openapi({ required: ['Outputs'] }),
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
  },
})

export const postChannelChannelNameRoute = createRoute({
  method: 'post',
  path: '/channel/{ChannelName}',
  description:
    'Creates a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.',
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
    params: z.object({
      ChannelName: z
        .string()
        .openapi({
          param: {
            name: 'ChannelName',
            in: 'path',
            required: true,
            description: 'The name of the channel.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              FillerSlate: z
                .object({
                  SourceLocationName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the source location where the slate VOD source is stored.',
                      }),
                  ).exactOptional(),
                  VodSourceName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The slate VOD source name. The VOD source must already exist in a source location before it can be used for slate.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Slate VOD source configuration.', required: [] }),
              Outputs: z
                .array(RequestOutputItemSchema)
                .openapi({
                  description: 'An object that represents an object in the CreateChannel request.',
                }),
              PlaybackMode: z
                .enum(['LOOP', 'LINEAR'])
                .openapi({
                  description:
                    '<p>The type of playback mode to use for this channel.</p> <p> <code>LINEAR</code> - The programs in the schedule play once back-to-back in the schedule.</p> <p> <code>LOOP</code> - The programs in the schedule play back-to-back in an endless loop. When the last program in the schedule stops playing, playback loops back to the first program in the schedule.</p>',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
                }),
              Tier: z
                .enum(['BASIC', 'STANDARD'])
                .exactOptional()
                .openapi({ description: 'The tier of the channel.' }),
            })
            .openapi({ required: ['Outputs', 'PlaybackMode'] }),
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
  },
})

export const deleteChannelChannelNameRoute = createRoute({
  method: 'delete',
  path: '/channel/{ChannelName}',
  description:
    'Deletes a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.',
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
      ChannelName: z
        .string()
        .openapi({
          param: {
            name: 'ChannelName',
            in: 'path',
            required: true,
            description: 'The name of the channel.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteChannelResponseSchema } },
    },
  },
})

export const getSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute = createRoute({
  method: 'get',
  path: '/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}',
  description: 'The live source to describe.',
  operationId: 'DescribeLiveSource',
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
      LiveSourceName: z
        .string()
        .openapi({
          param: {
            name: 'LiveSourceName',
            in: 'path',
            required: true,
            description: 'The name of the live source.',
            schema: { type: 'string' },
          },
        }),
      SourceLocationName: z
        .string()
        .openapi({
          param: {
            name: 'SourceLocationName',
            in: 'path',
            required: true,
            description: 'The name of the source location associated with this Live Source.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLiveSourceResponseSchema } },
    },
  },
})

export const putSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute = createRoute({
  method: 'put',
  path: '/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}',
  description: "Updates a live source's configuration.",
  operationId: 'UpdateLiveSource',
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
      LiveSourceName: z
        .string()
        .openapi({
          param: {
            name: 'LiveSourceName',
            in: 'path',
            required: true,
            description: 'The name of the live source.',
            schema: { type: 'string' },
          },
        }),
      SourceLocationName: z
        .string()
        .openapi({
          param: {
            name: 'SourceLocationName',
            in: 'path',
            required: true,
            description: 'The name of the source location associated with this Live Source.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              HttpPackageConfigurations: z
                .array(HttpPackageConfigurationSchema)
                .openapi({ description: "The VOD source's HTTP package configuration settings." }),
            })
            .openapi({ required: ['HttpPackageConfigurations'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateLiveSourceResponseSchema } },
    },
  },
})

export const postSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute = createRoute({
  method: 'post',
  path: '/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}',
  description: 'The live source configuration.',
  operationId: 'CreateLiveSource',
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
      LiveSourceName: z
        .string()
        .openapi({
          param: {
            name: 'LiveSourceName',
            in: 'path',
            required: true,
            description: 'The name of the live source.',
            schema: { type: 'string' },
          },
        }),
      SourceLocationName: z
        .string()
        .openapi({
          param: {
            name: 'SourceLocationName',
            in: 'path',
            required: true,
            description: 'The name of the source location.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              HttpPackageConfigurations: z
                .array(HttpPackageConfigurationSchema)
                .openapi({ description: "The VOD source's HTTP package configuration settings." }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The tags to assign to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
                }),
            })
            .openapi({ required: ['HttpPackageConfigurations'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLiveSourceResponseSchema } },
    },
  },
})

export const deleteSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute = createRoute({
  method: 'delete',
  path: '/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}',
  description: 'The live source to delete.',
  operationId: 'DeleteLiveSource',
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
      LiveSourceName: z
        .string()
        .openapi({
          param: {
            name: 'LiveSourceName',
            in: 'path',
            required: true,
            description: 'The name of the live source.',
            schema: { type: 'string' },
          },
        }),
      SourceLocationName: z
        .string()
        .openapi({
          param: {
            name: 'SourceLocationName',
            in: 'path',
            required: true,
            description: 'The name of the source location associated with this Live Source.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLiveSourceResponseSchema } },
    },
  },
})

export const getPrefetchSchedulePlaybackConfigurationNameNameRoute = createRoute({
  method: 'get',
  path: '/prefetchSchedule/{PlaybackConfigurationName}/{Name}',
  description:
    'Retrieves a prefetch schedule for a playback configuration. A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Using ad prefetching</a> in the <i>MediaTailor User Guide</i>.',
  operationId: 'GetPrefetchSchedule',
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
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description:
              'The name of the prefetch schedule. The name must be unique among all prefetch schedules that are associated with the specified playback configuration.',
            schema: { type: 'string' },
          },
        }),
      PlaybackConfigurationName: z
        .string()
        .openapi({
          param: {
            name: 'PlaybackConfigurationName',
            in: 'path',
            required: true,
            description:
              'Returns information about the prefetch schedule for a specific playback configuration. If you call <code>GetPrefetchSchedule</code> on an expired prefetch schedule, MediaTailor returns an HTTP 404 status code.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPrefetchScheduleResponseSchema } },
    },
  },
})

export const postPrefetchSchedulePlaybackConfigurationNameNameRoute = createRoute({
  method: 'post',
  path: '/prefetchSchedule/{PlaybackConfigurationName}/{Name}',
  description:
    'Creates a prefetch schedule for a playback configuration. A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Using ad prefetching</a> in the <i>MediaTailor User Guide</i>.',
  operationId: 'CreatePrefetchSchedule',
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
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'The name to assign to the schedule request.',
            schema: { type: 'string' },
          },
        }),
      PlaybackConfigurationName: z
        .string()
        .openapi({
          param: {
            name: 'PlaybackConfigurationName',
            in: 'path',
            required: true,
            description: 'The name to assign to the playback configuration.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Consumption: z
                .object({
                  AvailMatchingCriteria: ListOfAvailMatchingCriteriaSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'If you only want MediaTailor to insert prefetched ads into avails (ad breaks) that match specific dynamic variables, such as <code>scte.event_id</code>, set the avail matching criteria.',
                      }),
                  ).exactOptional(),
                  EndTime: TimestampUnixSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The time when MediaTailor no longer considers the prefetched ads for use in an ad break. MediaTailor automatically deletes prefetch schedules no less than seven days after the end time. If you'd like to manually delete the prefetch schedule, you can call <code>DeletePrefetchSchedule</code>.",
                      }),
                  ).exactOptional(),
                  StartTime: TimestampUnixSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The time when prefetched ads are considered for use in an ad break. If you don't specify <code>StartTime</code>, the prefetched ads are available after MediaTailor retrives them from the ad decision server.",
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'A complex type that contains settings that determine how and when that MediaTailor places prefetched ads into upcoming ad breaks.',
                  required: [],
                }),
              Retrieval: z
                .object({
                  DynamicVariables: MapOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The dynamic variables to use for substitution during prefetch requests to the ad decision server (ADS).</p> <p>You initially configure <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables.html">dynamic variables</a> for the ADS URL when you set up your playback configuration. When you specify <code>DynamicVariables</code> for prefetch retrieval, MediaTailor includes the dynamic variables in the request to the ADS.</p>',
                      }),
                  ).exactOptional(),
                  EndTime: TimestampUnixSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The time when prefetch retrieval ends for the ad break. Prefetching will be attempted for manifest requests that occur at or before this time.',
                      }),
                  ).exactOptional(),
                  StartTime: TimestampUnixSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The time when prefetch retrievals can start for this break. Ad prefetching will be attempted for manifest requests that occur at or after this time. Defaults to the current time. If not specified, the prefetch retrieval starts as soon as possible.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'A complex type that contains settings governing when MediaTailor prefetches ads, and which dynamic variables that MediaTailor includes in the request to the ad decision server.',
                  required: [],
                }),
              StreamId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration. If <code>StreamId</code> is specified, MediaTailor returns all of the prefetch schedules with an exact match on <code>StreamId</code>. If not specified, MediaTailor returns all of the prefetch schedules for the playback configuration, regardless of <code>StreamId</code>.',
                }),
            })
            .openapi({ required: ['Consumption', 'Retrieval'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePrefetchScheduleResponseSchema } },
    },
  },
})

export const deletePrefetchSchedulePlaybackConfigurationNameNameRoute = createRoute({
  method: 'delete',
  path: '/prefetchSchedule/{PlaybackConfigurationName}/{Name}',
  description:
    'Deletes a prefetch schedule for a specific playback configuration. If you call <code>DeletePrefetchSchedule</code> on an expired prefetch schedule, MediaTailor returns an HTTP 404 status code. For more information about ad prefetching, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Using ad prefetching</a> in the <i>MediaTailor User Guide</i>.',
  operationId: 'DeletePrefetchSchedule',
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
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description:
              'The name of the prefetch schedule. If the action is successful, the service sends back an HTTP 204 response with an empty HTTP body.',
            schema: { type: 'string' },
          },
        }),
      PlaybackConfigurationName: z
        .string()
        .openapi({
          param: {
            name: 'PlaybackConfigurationName',
            in: 'path',
            required: true,
            description: 'The name of the playback configuration for this prefetch schedule.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePrefetchScheduleResponseSchema } },
    },
  },
})

export const getChannelChannelNameProgramProgramNameRoute = createRoute({
  method: 'get',
  path: '/channel/{ChannelName}/program/{ProgramName}',
  description:
    'Describes a program within a channel. For information about programs, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-programs.html">Working with programs</a> in the <i>MediaTailor User Guide</i>.',
  operationId: 'DescribeProgram',
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
      ChannelName: z
        .string()
        .openapi({
          param: {
            name: 'ChannelName',
            in: 'path',
            required: true,
            description: 'The name of the channel associated with this Program.',
            schema: { type: 'string' },
          },
        }),
      ProgramName: z
        .string()
        .openapi({
          param: {
            name: 'ProgramName',
            in: 'path',
            required: true,
            description: 'The name of the program.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeProgramResponseSchema } },
    },
  },
})

export const putChannelChannelNameProgramProgramNameRoute = createRoute({
  method: 'put',
  path: '/channel/{ChannelName}/program/{ProgramName}',
  description: 'Updates a program within a channel.',
  operationId: 'UpdateProgram',
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
      ChannelName: z
        .string()
        .openapi({
          param: {
            name: 'ChannelName',
            in: 'path',
            required: true,
            description: 'The name of the channel for this Program.',
            schema: { type: 'string' },
          },
        }),
      ProgramName: z
        .string()
        .openapi({
          param: {
            name: 'ProgramName',
            in: 'path',
            required: true,
            description: 'The name of the Program.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AdBreaks: z
                .array(AdBreakSchema)
                .exactOptional()
                .openapi({ description: 'The ad break configuration settings.' }),
              ScheduleConfiguration: z
                .object({
                  ClipRange: ClipRangeSchema.and(
                    z.any().openapi({ description: 'Program clip range configuration.' }),
                  ).exactOptional(),
                  Transition: UpdateProgramTransitionSchema.and(
                    z.any().openapi({ description: 'Program transition configuration.' }),
                  ).exactOptional(),
                })
                .openapi({ description: 'Schedule configuration parameters.', required: [] }),
            })
            .openapi({ required: ['ScheduleConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateProgramResponseSchema } },
    },
  },
})

export const postChannelChannelNameProgramProgramNameRoute = createRoute({
  method: 'post',
  path: '/channel/{ChannelName}/program/{ProgramName}',
  description:
    'Creates a program within a channel. For information about programs, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-programs.html">Working with programs</a> in the <i>MediaTailor User Guide</i>.',
  operationId: 'CreateProgram',
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
      ChannelName: z
        .string()
        .openapi({
          param: {
            name: 'ChannelName',
            in: 'path',
            required: true,
            description: 'The name of the channel for this Program.',
            schema: { type: 'string' },
          },
        }),
      ProgramName: z
        .string()
        .openapi({
          param: {
            name: 'ProgramName',
            in: 'path',
            required: true,
            description: 'The name of the Program.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AdBreaks: z
                .array(AdBreakSchema)
                .exactOptional()
                .openapi({ description: 'The ad break configuration settings.' }),
              LiveSourceName: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the LiveSource for this Program.' }),
              ScheduleConfiguration: z
                .object({
                  ClipRange: ClipRangeSchema.and(
                    z.any().openapi({ description: 'Program clip range configuration.' }),
                  ).exactOptional(),
                  Transition: TransitionSchema.and(
                    z.any().openapi({ description: 'Program transition configurations.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Schedule configuration parameters. A channel must be stopped before changes can be made to the schedule.',
                  required: [],
                }),
              SourceLocationName: z
                .string()
                .openapi({ description: 'The name of the source location.' }),
              VodSourceName: z
                .string()
                .exactOptional()
                .openapi({ description: "The name that's used to refer to a VOD source." }),
            })
            .openapi({ required: ['ScheduleConfiguration', 'SourceLocationName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProgramResponseSchema } },
    },
  },
})

export const deleteChannelChannelNameProgramProgramNameRoute = createRoute({
  method: 'delete',
  path: '/channel/{ChannelName}/program/{ProgramName}',
  description:
    'Deletes a program within a channel. For information about programs, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-programs.html">Working with programs</a> in the <i>MediaTailor User Guide</i>.',
  operationId: 'DeleteProgram',
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
      ChannelName: z
        .string()
        .openapi({
          param: {
            name: 'ChannelName',
            in: 'path',
            required: true,
            description: 'The name of the channel.',
            schema: { type: 'string' },
          },
        }),
      ProgramName: z
        .string()
        .openapi({
          param: {
            name: 'ProgramName',
            in: 'path',
            required: true,
            description: 'The name of the program.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProgramResponseSchema } },
    },
  },
})

export const getSourceLocationSourceLocationNameRoute = createRoute({
  method: 'get',
  path: '/sourceLocation/{SourceLocationName}',
  description:
    'Describes a source location. A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.',
  operationId: 'DescribeSourceLocation',
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
      SourceLocationName: z
        .string()
        .openapi({
          param: {
            name: 'SourceLocationName',
            in: 'path',
            required: true,
            description: 'The name of the source location.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSourceLocationResponseSchema } },
    },
  },
})

export const putSourceLocationSourceLocationNameRoute = createRoute({
  method: 'put',
  path: '/sourceLocation/{SourceLocationName}',
  description:
    'Updates a source location. A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.',
  operationId: 'UpdateSourceLocation',
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
      SourceLocationName: z
        .string()
        .openapi({
          param: {
            name: 'SourceLocationName',
            in: 'path',
            required: true,
            description: 'The name of the source location.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AccessConfiguration: z
                .object({
                  AccessType: AccessTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The type of authentication used to access content from <code>HttpConfiguration::BaseUrl</code> on your source location. Accepted value: <code>S3_SIGV4</code>.</p> <p> <code>S3_SIGV4</code> - AWS Signature Version 4 authentication for Amazon S3 hosted virtual-style access. If your source location base URL is an Amazon S3 bucket, MediaTailor can use AWS Signature Version 4 (SigV4) authentication to access the bucket where your source content is stored. Your MediaTailor source location baseURL must follow the S3 virtual hosted-style request URL format. For example, https://bucket-name.s3.Region.amazonaws.com/key-name.</p> <p>Before you can use <code>S3_SIGV4</code>, you must meet these requirements:</p> <p>• You must allow MediaTailor to access your S3 bucket by granting mediatailor.amazonaws.com principal access in IAM. For information about configuring access in IAM, see Access management in the IAM User Guide.</p> <p>• The mediatailor.amazonaws.com service principal must have permissions to read all top level manifests referenced by the VodSource packaging configurations.</p> <p>• The caller of the API must have s3:GetObject IAM permissions to read all top level manifests referenced by your MediaTailor VodSource packaging configurations.</p>',
                      }),
                  ).exactOptional(),
                  SecretsManagerAccessTokenConfiguration:
                    SecretsManagerAccessTokenConfigurationSchema.and(
                      z
                        .any()
                        .openapi({
                          description: 'AWS Secrets Manager access token configuration parameters.',
                        }),
                    ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Access configuration parameters.', required: [] }),
              DefaultSegmentDeliveryConfiguration: z
                .object({
                  BaseUrl: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The hostname of the server that will be used to serve segments. This string must include the protocol, such as <b>https://</b>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.",
                  required: [],
                }),
              HttpConfiguration: z
                .object({
                  BaseUrl: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'The HTTP configuration for the source location.',
                  required: [],
                }),
              SegmentDeliveryConfigurations: z
                .array(SegmentDeliveryConfigurationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of the segment delivery configurations associated with this resource.',
                }),
            })
            .openapi({ required: ['HttpConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSourceLocationResponseSchema } },
    },
  },
})

export const postSourceLocationSourceLocationNameRoute = createRoute({
  method: 'post',
  path: '/sourceLocation/{SourceLocationName}',
  description:
    'Creates a source location. A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.',
  operationId: 'CreateSourceLocation',
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
      SourceLocationName: z
        .string()
        .openapi({
          param: {
            name: 'SourceLocationName',
            in: 'path',
            required: true,
            description: 'The name associated with the source location.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AccessConfiguration: z
                .object({
                  AccessType: AccessTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The type of authentication used to access content from <code>HttpConfiguration::BaseUrl</code> on your source location. Accepted value: <code>S3_SIGV4</code>.</p> <p> <code>S3_SIGV4</code> - AWS Signature Version 4 authentication for Amazon S3 hosted virtual-style access. If your source location base URL is an Amazon S3 bucket, MediaTailor can use AWS Signature Version 4 (SigV4) authentication to access the bucket where your source content is stored. Your MediaTailor source location baseURL must follow the S3 virtual hosted-style request URL format. For example, https://bucket-name.s3.Region.amazonaws.com/key-name.</p> <p>Before you can use <code>S3_SIGV4</code>, you must meet these requirements:</p> <p>• You must allow MediaTailor to access your S3 bucket by granting mediatailor.amazonaws.com principal access in IAM. For information about configuring access in IAM, see Access management in the IAM User Guide.</p> <p>• The mediatailor.amazonaws.com service principal must have permissions to read all top level manifests referenced by the VodSource packaging configurations.</p> <p>• The caller of the API must have s3:GetObject IAM permissions to read all top level manifests referenced by your MediaTailor VodSource packaging configurations.</p>',
                      }),
                  ).exactOptional(),
                  SecretsManagerAccessTokenConfiguration:
                    SecretsManagerAccessTokenConfigurationSchema.and(
                      z
                        .any()
                        .openapi({
                          description: 'AWS Secrets Manager access token configuration parameters.',
                        }),
                    ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Access configuration parameters.', required: [] }),
              DefaultSegmentDeliveryConfiguration: z
                .object({
                  BaseUrl: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The hostname of the server that will be used to serve segments. This string must include the protocol, such as <b>https://</b>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.",
                  required: [],
                }),
              HttpConfiguration: z
                .object({
                  BaseUrl: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'The HTTP configuration for the source location.',
                  required: [],
                }),
              SegmentDeliveryConfigurations: z
                .array(SegmentDeliveryConfigurationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of the segment delivery configurations associated with this resource.',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The tags to assign to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
                }),
            })
            .openapi({ required: ['HttpConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSourceLocationResponseSchema } },
    },
  },
})

export const deleteSourceLocationSourceLocationNameRoute = createRoute({
  method: 'delete',
  path: '/sourceLocation/{SourceLocationName}',
  description:
    'Deletes a source location. A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.',
  operationId: 'DeleteSourceLocation',
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
      SourceLocationName: z
        .string()
        .openapi({
          param: {
            name: 'SourceLocationName',
            in: 'path',
            required: true,
            description: 'The name of the source location.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSourceLocationResponseSchema } },
    },
  },
})

export const getSourceLocationSourceLocationNameVodSourceVodSourceNameRoute = createRoute({
  method: 'get',
  path: '/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}',
  description:
    'Provides details about a specific video on demand (VOD) source in a specific source location.',
  operationId: 'DescribeVodSource',
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
      SourceLocationName: z
        .string()
        .openapi({
          param: {
            name: 'SourceLocationName',
            in: 'path',
            required: true,
            description: 'The name of the source location associated with this VOD Source.',
            schema: { type: 'string' },
          },
        }),
      VodSourceName: z
        .string()
        .openapi({
          param: {
            name: 'VodSourceName',
            in: 'path',
            required: true,
            description: 'The name of the VOD Source.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeVodSourceResponseSchema } },
    },
  },
})

export const putSourceLocationSourceLocationNameVodSourceVodSourceNameRoute = createRoute({
  method: 'put',
  path: '/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}',
  description: "Updates a VOD source's configuration.",
  operationId: 'UpdateVodSource',
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
      SourceLocationName: z
        .string()
        .openapi({
          param: {
            name: 'SourceLocationName',
            in: 'path',
            required: true,
            description: 'The name of the source location associated with this VOD Source.',
            schema: { type: 'string' },
          },
        }),
      VodSourceName: z
        .string()
        .openapi({
          param: {
            name: 'VodSourceName',
            in: 'path',
            required: true,
            description: 'The name of the VOD source.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              HttpPackageConfigurations: z
                .array(HttpPackageConfigurationSchema)
                .openapi({ description: "The VOD source's HTTP package configuration settings." }),
            })
            .openapi({ required: ['HttpPackageConfigurations'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateVodSourceResponseSchema } },
    },
  },
})

export const postSourceLocationSourceLocationNameVodSourceVodSourceNameRoute = createRoute({
  method: 'post',
  path: '/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}',
  description: 'The VOD source configuration parameters.',
  operationId: 'CreateVodSource',
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
      SourceLocationName: z
        .string()
        .openapi({
          param: {
            name: 'SourceLocationName',
            in: 'path',
            required: true,
            description: 'The name of the source location for this VOD source.',
            schema: { type: 'string' },
          },
        }),
      VodSourceName: z
        .string()
        .openapi({
          param: {
            name: 'VodSourceName',
            in: 'path',
            required: true,
            description: 'The name associated with the VOD source.&gt;',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              HttpPackageConfigurations: z
                .array(HttpPackageConfigurationSchema)
                .openapi({ description: "The VOD source's HTTP package configuration settings." }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The tags to assign to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
                }),
            })
            .openapi({ required: ['HttpPackageConfigurations'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVodSourceResponseSchema } },
    },
  },
})

export const deleteSourceLocationSourceLocationNameVodSourceVodSourceNameRoute = createRoute({
  method: 'delete',
  path: '/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}',
  description: 'The video on demand (VOD) source to delete.',
  operationId: 'DeleteVodSource',
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
      SourceLocationName: z
        .string()
        .openapi({
          param: {
            name: 'SourceLocationName',
            in: 'path',
            required: true,
            description: 'The name of the source location associated with this VOD Source.',
            schema: { type: 'string' },
          },
        }),
      VodSourceName: z
        .string()
        .openapi({
          param: {
            name: 'VodSourceName',
            in: 'path',
            required: true,
            description: 'The name of the VOD source.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVodSourceResponseSchema } },
    },
  },
})

export const getChannelChannelNamePolicyRoute = createRoute({
  method: 'get',
  path: '/channel/{ChannelName}/policy',
  description:
    "Returns the channel's IAM policy. IAM policies are used to control access to your channel.",
  operationId: 'GetChannelPolicy',
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
      ChannelName: z
        .string()
        .openapi({
          param: {
            name: 'ChannelName',
            in: 'path',
            required: true,
            description: 'The name of the channel associated with this Channel Policy.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetChannelPolicyResponseSchema } },
    },
  },
})

export const putChannelChannelNamePolicyRoute = createRoute({
  method: 'put',
  path: '/channel/{ChannelName}/policy',
  description:
    'Creates an IAM policy for the channel. IAM policies are used to control access to your channel.',
  operationId: 'PutChannelPolicy',
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
      ChannelName: z
        .string()
        .openapi({
          param: {
            name: 'ChannelName',
            in: 'path',
            required: true,
            description: 'The channel name associated with this Channel Policy.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Policy: z
                .string()
                .openapi({
                  description: 'Adds an IAM role that determines the permissions of your channel.',
                }),
            })
            .openapi({ required: ['Policy'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutChannelPolicyResponseSchema } },
    },
  },
})

export const deleteChannelChannelNamePolicyRoute = createRoute({
  method: 'delete',
  path: '/channel/{ChannelName}/policy',
  description: 'The channel policy to delete.',
  operationId: 'DeleteChannelPolicy',
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
      ChannelName: z
        .string()
        .openapi({
          param: {
            name: 'ChannelName',
            in: 'path',
            required: true,
            description: 'The name of the channel associated with this channel policy.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteChannelPolicyResponseSchema } },
    },
  },
})

export const getPlaybackConfigurationNameRoute = createRoute({
  method: 'get',
  path: '/playbackConfiguration/{Name}',
  description:
    'Retrieves a playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.',
  operationId: 'GetPlaybackConfiguration',
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
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'The identifier for the playback configuration.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPlaybackConfigurationResponseSchema } },
    },
  },
})

export const deletePlaybackConfigurationNameRoute = createRoute({
  method: 'delete',
  path: '/playbackConfiguration/{Name}',
  description:
    'Deletes a playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.',
  operationId: 'DeletePlaybackConfiguration',
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
        .openapi({
          param: {
            name: 'Name',
            in: 'path',
            required: true,
            description: 'The name of the playback configuration.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePlaybackConfigurationResponseSchema } },
    },
  },
})

export const getChannelChannelNameScheduleRoute = createRoute({
  method: 'get',
  path: '/channel/{ChannelName}/schedule',
  description: "Retrieves information about your channel's schedule.",
  operationId: 'GetChannelSchedule',
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
      ChannelName: z
        .string()
        .openapi({
          param: {
            name: 'ChannelName',
            in: 'path',
            required: true,
            description: 'The name of the channel associated with this Channel Schedule.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      durationMinutes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'durationMinutes',
            in: 'query',
            required: false,
            description: 'The duration in minutes of the channel schedule.',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of channel schedules that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> channel schedules, use the value of <code>NextToken</code> in the response to get the next page of results.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
              "<p>(Optional) If the playback configuration has more than <code>MaxResults</code> channel schedules, use <code>NextToken</code> to get the second and subsequent pages of results.</p> <p>For the first <code>GetChannelScheduleRequest</code> request, omit this value.</p> <p>For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request.</p> <p>If the previous response didn't include a <code>NextToken</code> element, there are no more channel schedules to get.</p>",
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
      content: { 'application/json': { schema: GetChannelScheduleResponseSchema } },
    },
  },
})

export const getAlertsResourceArnRoute = createRoute({
  method: 'get',
  path: '/alerts#resourceArn',
  description: 'Lists the alerts that are associated with a MediaTailor channel assembly resource.',
  operationId: 'ListAlerts',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of alerts that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> alerts, use the value of <code>NextToken</code> in the response to get the next page of results.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
              'Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.',
            schema: { type: 'string' },
          },
        }),
      resourceArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
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
      content: { 'application/json': { schema: ListAlertsResponseSchema } },
    },
  },
})

export const getChannelsRoute = createRoute({
  method: 'get',
  path: '/channels',
  description:
    'Retrieves information about the channels that are associated with the current AWS account.',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of channels that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> channels, use the value of <code>NextToken</code> in the response to get the next page of results.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
              'Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.',
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
  },
})

export const getSourceLocationSourceLocationNameLiveSourcesRoute = createRoute({
  method: 'get',
  path: '/sourceLocation/{SourceLocationName}/liveSources',
  description:
    'Lists the live sources contained in a source location. A source represents a piece of content.',
  operationId: 'ListLiveSources',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of live sources that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> live sources, use the value of <code>NextToken</code> in the response to get the next page of results.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
              'Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.',
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
    params: z.object({
      SourceLocationName: z
        .string()
        .openapi({
          param: {
            name: 'SourceLocationName',
            in: 'path',
            required: true,
            description: 'The name of the source location associated with this Live Sources list.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLiveSourcesResponseSchema } },
    },
  },
})

export const getPlaybackConfigurationsRoute = createRoute({
  method: 'get',
  path: '/playbackConfigurations',
  description:
    'Retrieves existing playback configurations. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with Configurations in AWS Elemental MediaTailor</a>.',
  operationId: 'ListPlaybackConfigurations',
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
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of playback configurations that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> playback configurations, use the value of <code>NextToken</code> in the response to get the next page of results.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPlaybackConfigurationsResponseSchema } },
    },
  },
})

export const postPrefetchSchedulePlaybackConfigurationNameRoute = createRoute({
  method: 'post',
  path: '/prefetchSchedule/{PlaybackConfigurationName}',
  description: 'Lists the prefetch schedules for a playback configuration.',
  operationId: 'ListPrefetchSchedules',
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
      PlaybackConfigurationName: z
        .string()
        .openapi({
          param: {
            name: 'PlaybackConfigurationName',
            in: 'path',
            required: true,
            description:
              'Retrieves the prefetch schedule(s) for a specific playback configuration.',
            schema: { type: 'string' },
          },
        }),
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
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of prefetch schedules that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> prefetch schedules, use the value of <code>NextToken</code> in the response to get the next page of results.',
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>(Optional) If the playback configuration has more than <code>MaxResults</code> prefetch schedules, use <code>NextToken</code> to get the second and subsequent pages of results.</p> <p> For the first <code>ListPrefetchSchedulesRequest</code> request, omit this value.</p> <p> For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request.</p> <p> If the previous response didn't include a <code>NextToken</code> element, there are no more prefetch schedules to get.</p>",
                }),
              StreamId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An optional filtering parameter whereby MediaTailor filters the prefetch schedules to include only specific streams.',
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
      content: { 'application/json': { schema: ListPrefetchSchedulesResponseSchema } },
    },
  },
})

export const getSourceLocationsRoute = createRoute({
  method: 'get',
  path: '/sourceLocations',
  description:
    'Lists the source locations for a channel. A source location defines the host server URL, and contains a list of sources.',
  operationId: 'ListSourceLocations',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              ' The maximum number of source locations that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> source locations, use the value of <code>NextToken</code> in the response to get the next page of results.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
              'Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.',
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
      content: { 'application/json': { schema: ListSourceLocationsResponseSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{ResourceArn}',
  description:
    'A list of tags that are associated with this resource. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
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
      ResourceArn: z
        .string()
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) associated with this resource.',
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
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{ResourceArn}',
  description:
    'The resource to tag. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
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
      ResourceArn: z
        .string()
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) associated with the resource.',
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
                    'The tags to assign to the resource. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
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
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getSourceLocationSourceLocationNameVodSourcesRoute = createRoute({
  method: 'get',
  path: '/sourceLocation/{SourceLocationName}/vodSources',
  description:
    'Lists the VOD sources contained in a source location. A source represents a piece of content.',
  operationId: 'ListVodSources',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              ' The maximum number of VOD sources that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> VOD sources, use the value of <code>NextToken</code> in the response to get the next page of results.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
              'Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.',
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
    params: z.object({
      SourceLocationName: z
        .string()
        .openapi({
          param: {
            name: 'SourceLocationName',
            in: 'path',
            required: true,
            description: 'The name of the source location associated with this VOD Source list.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListVodSourcesResponseSchema } },
    },
  },
})

export const putPlaybackConfigurationRoute = createRoute({
  method: 'put',
  path: '/playbackConfiguration',
  description:
    'Creates a playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.',
  operationId: 'PutPlaybackConfiguration',
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
              AdDecisionServerUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.',
                }),
              AvailSuppression: z
                .object({
                  Mode: ModeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Sets the ad suppression mode. By default, ad suppression is off and all ad breaks are filled with ads or slate. When Mode is set to <code>BEHIND_LIVE_EDGE</code>, ad suppression is active and MediaTailor won't fill ad breaks on or behind the ad suppression Value time in the manifest lookback window.",
                      }),
                  ).exactOptional(),
                  Value: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A live edge offset time in HH:MM:SS. MediaTailor won't fill ad breaks on or behind this time in the manifest lookback window. If Value is set to 00:00:00, it is in sync with the live edge, and MediaTailor won't fill any ad breaks on or behind the live edge. If you set a Value time, MediaTailor won't fill any ad breaks on or behind this time in the manifest lookback window. For example, if you set 00:45:00, then MediaTailor will fill ad breaks that occur within 45 minutes behind the live edge, but won't fill ad breaks on or behind 45 minutes behind the live edge.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.',
                  required: [],
                }),
              Bumper: z
                .object({
                  EndUrl: StringSchema.and(
                    z.any().openapi({ description: 'The URL for the end bumper asset.' }),
                  ).exactOptional(),
                  StartUrl: StringSchema.and(
                    z.any().openapi({ description: 'The URL for the start bumper asset.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.',
                  required: [],
                }),
              CdnConfiguration: z
                .object({
                  AdSegmentUrlPrefix: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A non-default content delivery network (CDN) to serve ad segments. By default, AWS Elemental MediaTailor uses Amazon CloudFront with default cache settings as its CDN for ad segments. To set up an alternate CDN, create a rule in your CDN for the origin ads.mediatailor.<i>&lt;region&gt;</i>.amazonaws.com. Then specify the rule's name in this <code>AdSegmentUrlPrefix</code>. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for ad segments.",
                      }),
                  ).exactOptional(),
                  ContentSegmentUrlPrefix: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A content delivery network (CDN) to cache content segments, so that content requests don’t always have to go to the origin server. First, create a rule in your CDN for the content segment origin server. Then specify the rule's name in this <code>ContentSegmentUrlPrefix</code>. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for content segments.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.',
                  required: [],
                }),
              ConfigurationAliases: z
                .record(z.string(), MapOfStringSchema)
                .exactOptional()
                .openapi({ description: 'The predefined aliases for dynamic variables.' }),
              DashConfiguration: z
                .object({
                  MpdLocation: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are <code>DISABLED</code> and <code>EMT_DEFAULT</code>. The <code>EMT_DEFAULT</code> setting enables the inclusion of the tag and is the default value.",
                      }),
                  ).exactOptional(),
                  OriginManifestType: OriginManifestTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to <code>SINGLE_PERIOD</code>. The default setting is <code>MULTI_PERIOD</code>. For multi-period manifests, omit this setting or set it to <code>MULTI_PERIOD</code>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The configuration for DASH PUT operations.',
                  required: [],
                }),
              LivePreRollConfiguration: z
                .object({
                  AdDecisionServerUrl: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The URL for the ad decision server (ADS) for pre-roll ads. This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.',
                      }),
                  ).exactOptional(),
                  MaxDurationSeconds: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The maximum allowed duration for the pre-roll ad avail. AWS Elemental MediaTailor won't play pre-roll ads to exceed this duration, regardless of the total duration of ads that the ADS returns.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The configuration for pre-roll ad insertion.',
                  required: [],
                }),
              ManifestProcessingRules: z
                .object({
                  AdMarkerPassthrough: AdMarkerPassthroughSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>For HLS, when set to <code>true</code>, MediaTailor passes through <code>EXT-X-CUE-IN</code>, <code>EXT-X-CUE-OUT</code>, and <code>EXT-X-SPLICEPOINT-SCTE35</code> ad markers from the origin manifest to the MediaTailor personalized manifest.</p> <p>No logic is applied to these ad markers. For example, if <code>EXT-X-CUE-OUT</code> has a value of <code>60</code>, but no ads are filled for that ad break, MediaTailor will not set the value to <code>0</code>.</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.',
                  required: [],
                }),
              Name: z
                .string()
                .openapi({ description: 'The identifier for the playback configuration.' }),
              PersonalizationThresholdSeconds: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.',
                }),
              SlateAdUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.",
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The tags to assign to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.',
                }),
              TranscodeProfileName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.',
                }),
              VideoContentSourceUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.',
                }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutPlaybackConfigurationResponseSchema } },
    },
  },
})

export const putChannelChannelNameStartRoute = createRoute({
  method: 'put',
  path: '/channel/{ChannelName}/start',
  description:
    'Starts a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.',
  operationId: 'StartChannel',
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
      ChannelName: z
        .string()
        .openapi({
          param: {
            name: 'ChannelName',
            in: 'path',
            required: true,
            description: 'The name of the channel.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartChannelResponseSchema } },
    },
  },
})

export const putChannelChannelNameStopRoute = createRoute({
  method: 'put',
  path: '/channel/{ChannelName}/stop',
  description:
    'Stops a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.',
  operationId: 'StopChannel',
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
      ChannelName: z
        .string()
        .openapi({
          param: {
            name: 'ChannelName',
            in: 'path',
            required: true,
            description: 'The name of the channel.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopChannelResponseSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{ResourceArn}#tagKeys',
  description: 'The resource to untag.',
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
      ResourceArn: z
        .string()
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource to untag.',
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
            description: 'The tag keys associated with the resource.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/__string' } },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})
